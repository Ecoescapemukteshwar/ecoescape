import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../src/config/blog-posts.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Mapping from import variable name to public path
const mapping = {
  'winterExperienceImg': 'winter-experience/featured.webp',
  'vsNainitalImg': 'vs-nainital/featured.webp',
  'bestTimeImg': 'best-time-to-visit/featured.webp',
  'beyondTempleImg': 'beyond-temple/featured.webp',
  'bestHomestaysImg': 'best-homestays/featured.webp',
  'petFriendlyImg': 'pet-friendly/featured.webp',
  'sustainableStaysImg': 'sustainable-stays/featured.webp',
  'budgetStaysImg': 'budget-stays/featured.webp',
  'kainchiDhamImg': 'kainchi-dham/featured.webp',
  'nainitalDayTripImg': 'nainital-day-trip/featured.webp',
  'bestResortsImg': 'best-resorts/featured.webp',
  'spiritualKumaonImg': 'spiritual-kumaon/featured.webp',
  'bhaluGaadImg': 'bhalu-gaad/featured.webp',
  'backpackerImg': 'backpacker-guide/featured.webp',
  'templeHistoryImg': 'temple-history/featured.webp',
  'delhiRoadTripImg': 'delhi-road-trip/featured.webp',
  'offbeatPlacesImg': 'offbeat-places/featured.webp',
  'springGuideImg': 'spring-guide/featured.webp',
  'monsoonImg': 'monsoon/featured.webp',
  'photographyImg': 'photography/featured.webp',
  'festivalsImg': 'festivals/featured.webp',
  'packingImg': 'packing-list/featured.webp',
  'workcationImg': 'workcation/featured.webp',
  'romanticImg': 'romantic/featured.webp',
  'soloImg': 'solo/featured.webp',
  'familyImg': 'family/featured.webp',
  'howToReachImg': 'how-to-reach/featured.webp',
  'cafesImg': 'cafes/featured.webp',
  'snowfallImg': 'snowfall/featured.webp',
  'itineraryImg': 'itinerary/featured.webp',
  'trekkingImg': 'trekking/featured.webp',
  'orchardsImg': 'fruit-orchards/featured.webp',
  'stargazingImg': 'stargazing/featured.webp',
  'birdwatchingImg': 'birdwatching/featured.webp',
  'kumaoniFoodImg': 'kumaoni-food-guide/kumaoni-thali.webp',
  'chauliKiJaliImg': 'things-to-do/chauli-ki-jali.webp',
  'gardenTerraceImg': 'garden-terrace-opt.webp',
};

let count = 0;
for (const [varName, imgPath] of Object.entries(mapping)) {
  const regex = new RegExp(`image:\\s*${varName},`, 'g');
  const replacement = `image: blogImg("${imgPath}"),`;
  const newContent = content.replace(regex, replacement);
  if (newContent !== content) {
    content = newContent;
    count++;
    console.log(`✓ ${varName} -> blogImg("${imgPath}")`);
  } else {
    console.log(`✗ ${varName} not found`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nReplaced ${count} image references`);
