import fs from 'node:fs/promises';
import sharp from 'sharp';
const sheets=(await fs.readdir('dist/review')).filter(name=>/^[1-8]-[a-z]+-A8\.png$/.test(name)).sort();
if(sheets.length!==8) throw new Error('Expected eight rendered sheets');
const tiles=await Promise.all(sheets.map(async(name,index)=>({input:await sharp(`dist/review/${name}`).resize(800,566).toBuffer(),left:(index%2)*800,top:Math.floor(index/2)*566})));
await sharp({create:{width:1600,height:2264,channels:3,background:'#fff'}}).composite(tiles).png().toFile('evidence/schematic-overview-A8.png');
