
import sharp from 'sharp';
import path from 'path';

const heroPath = 'd:/OsciraAI/Project ecoescape/ecoescape/public/images/hero-sunrise-opt.webp';
const hero640 = 'd:/OsciraAI/Project ecoescape/ecoescape/public/images/hero-640.webp';
const hero1080 = 'd:/OsciraAI/Project ecoescape/ecoescape/public/images/hero-1080.webp';
const deluxePath = 'd:/OsciraAI/Project ecoescape/ecoescape/src/assets/room-deluxe.webp';
const familyPath = 'd:/OsciraAI/Project ecoescape/ecoescape/src/assets/room-family.webp';
const aptPath = 'd:/OsciraAI/Project ecoescape/ecoescape/src/assets/suite/img123.webp';

Promise.all([
  // Aggressive compression for hero variants (quality 40 for max savings)
  sharp(heroPath).resize(640).webp({ quality: 40 }).toFile(hero640),
  sharp(heroPath).resize(1080).webp({ quality: 40 }).toFile(hero1080),
  // Resize room images for their display size (455x607 scaled to 910x1214 for 2x)
  sharp(deluxePath).resize(910).webp({ quality: 70 }).toFile(deluxePath.replace('.webp', '-new.webp')),
  sharp(familyPath).resize(910).webp({ quality: 70 }).toFile(familyPath.replace('.webp', '-new.webp')),
  // Resize apartment image (455x330 scaled to 910x660 for 2x)
  sharp(aptPath).resize(910).webp({ quality: 70 }).toFile(aptPath.replace('.webp', '-new.webp'))
])
  .then(infos => console.log('Images final refined:', infos))
  .catch(err => console.error('Refinement failed:', err));
