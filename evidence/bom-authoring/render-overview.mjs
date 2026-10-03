import fs from 'node:fs/promises';
import sharp from 'sharp';
const revision=process.argv[2] ?? 'A10';
if(!/^A\d+$/.test(revision)) throw new Error('Invalid revision');
const pattern=new RegExp(`^[1-8]-[a-z]+-${revision}\\.png$`);
const files=(await fs.readdir('dist/review')).filter(f=>pattern.test(f)).sort();
if(files.length!==8) throw new Error(`Expected eight sheets, got ${files.length}`);
const layers=[];
for(const [index,file] of files.entries()){
 const input=await sharp(`dist/review/${file}`).resize({width:800,height:566,fit:'inside'}).png().toBuffer();
 layers.push({input,left:(index%2)*800,top:Math.floor(index/2)*566});
}
await sharp({create:{width:1600,height:2264,channels:3,background:'white'}}).composite(layers).png().toFile(`evidence/schematic-overview-${revision}.png`);
