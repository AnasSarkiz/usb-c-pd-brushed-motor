import fs from 'node:fs/promises';
import sharp from 'sharp';
for(const file of await fs.readdir('dist/review')){
 if(!/^[1-8]-[a-z]+\.svg$/.test(file)) continue;
 await sharp(await fs.readFile(`dist/review/${file}`)).png().toFile(`dist/review/${file.replace('.svg','-A9.png')}`);
}
