
import React from 'react';
import { Destination, Activity, TariffPlan, Package } from './types';

export const PHONE_NUMBERS = ["9656 359 111", "9447 394 111"];
export const EMAIL = "wayanadbeehive@gmail.com";
export const ADDRESS = "Manjappara, Ambalavayal, Wayanad, Kerala";

export const DESTINATIONS: Destination[] = [
  {
    id: 'karapuzha',
    name: 'Karapuzha Dam',
    image: 'https://beehivewayanad.com/images/tour-places-wayanad.png',
    description: 'The largest earth dam in India with beautiful landscapes, bird watching opportunities, and an adventure park. Ideal for photography lovers.',
    distance: '5 km'
  },
  {
    id: 'edakkal',
    name: 'Edakkal Caves',
    image: 'https://beehivewayanad.com/images/tour-places-wayanad2.png',
    description: 'Rare prehistoric caves inhabited since ancient times. Located on Ambukuthi Hills, it features natural rock carvings.',
    distance: '8 km'
  },
  {
    id: 'phantom',
    name: 'Phantom Rock',
    image: 'https://beehivewayanad.com/images/tour-places-wayanad3.png',
    description: 'An archaeological structure shaped like a phantom skull. A favorite spot for trekkers and nature enthusiasts.',
    distance: '2 km'
  },
  {
    id: 'cheengeri',
    name: 'Cheengeri Hills',
    image: 'https://beehivewayanad.com/images/tour-places-wayanad5.png',
    description: 'A popular destination for adventure trekkers offering breathtaking sunset views of Wayanad.',
    distance: '8 km'
  },
  {
    id: 'banasura',
    name: 'Banasura Sagar Dam',
    image: 'https://beehivewayanad.com/images/tour-places-wayanad4.png',
    description: 'India’s largest earthen dam, surrounded by majestic hills and mesmerising waterfalls. A photographer’s delight.'
  },
  {
    id: 'muthanga',
    name: 'Muthanga Wildlife Safari',
    image: 'https://beehivewayanad.com/images/tour-places-wayanad6.png',
    description: 'Experience Asian elephants, tigers, and deer in their natural habitat through a thrilling jeep safari.'
  },
  {
    id: 'pookode',
    name: 'Pookode Lake',
    image: 'https://beehivewayanad.com/images/tour-places-wayanad9.png',
    description: 'A serene freshwater lake nestled in the rainforest, perfect for boating and nature walks.'
  },
  {
    id: 'heritage',
    name: 'Ambalavayal Heritage Museum',
    image: 'https://beehivewayanad.com/images/wayanad-places.png',
    description: 'One of the biggest archaeological museums in Kerala, showcasing artefacts dating back thousands of years.'
  },
  {
    id: 'soochipara',
    name: 'Soochipara Waterfalls',
    image: 'https://beehivewayanad.com/images/soochipara.png',
    description: 'Sentinel Rock waterfalls, where white streams fall headfirst into granite rocks. A surreal trekking experience.'
  },
  {
    id: 'kuruvadweep',
    name: 'Kuruvadweep',
    image: 'https://beehivewayanad.com/images/kuruva.png',
    description: 'A protected river delta comprising a cluster of islands on the Kabini River, rich in flora and fauna.'
  },
  {
    id: 'chembra',
    name: 'Chembra Peak',
    image: 'https://beehivewayanad.com/images/chembra.png',
    description: 'One of the highest mountain ranges in South India, famous for the heart-shaped lake "Hridaya Saras".'
  },
  {
    id: 'kanthanpara',
    name: 'Kanthanpara Waterfalls',
    image: 'https://beehivewayanad.com/images/Kanthampara.png',
    description: 'A quaint and secluded waterfall perfect for picnicking and rejuvenating in nature.'
  },
  {
    id: 'jain-temple',
    name: 'Jain Temple Bathery',
    image: 'https://beehivewayanad.com/images/Jain-temple.png',
    description: 'A 13th-century temple built in the Vijayanagar Dynasty architectural style, rich in history.'
  },
  {
    id: 'lakkidi',
    name: 'Lakkidi Viewpoint',
    image: 'https://beehivewayanad.com/images/Lakkidi-view-point.png',
    description: 'The gateway of Wayanad, offering a stunning view of the serpentine Thamarassery ghat pass.'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'horse',
    name: 'Horse riding (kids)',
    image: 'https://beehivewayanad.com/images/horse-ride.png',
    description: 'Safe and fun horse riding experiences specifically designed for children.'
  },
  {
    id: 'campfire',
    name: 'Campfire with music',
    image: 'https://beehivewayanad.com/images/Campfire.png',
    description: 'Enjoy cozy evenings with a warm campfire and soulful music under the stars.'
  },
  {
    id: 'tent',
    name: 'Tent stay',
    image: 'https://beehivewayanad.com/images/tentstay.png',
    description: 'Exciting outdoor camping facilities for backpackers and nature lovers.'
  },
  {
    id: 'spa',
    name: 'Steam bath and Jacuzzi',
    image: 'https://beehivewayanad.com/images/steambath.png',
    description: 'Relax and unwind with our steam bath and jacuzzi facilities.'
  },
  {
    id: 'ayurveda',
    name: 'Ayurveda spa',
    image: 'https://beehivewayanad.com/images/ayurveda-spa.png',
    description: 'Traditional Ayurvedic treatments to rejuvenate your mind, body, and soul.'
  },
  {
    id: 'fishing',
    name: 'Fishing',
    image: 'https://beehivewayanad.com/images/fishing.png',
    description: 'Calm fishing experiences at our natural pond within the resort premises.'
  },
  {
    id: 'boat',
    name: 'Boat Ride',
    image: 'https://beehivewayanad.com/images/kotathoni.png',
    description: 'Enjoy peaceful boat rides in the nearby water bodies.'
  },
  {
    id: 'play',
    name: 'Play area',
    image: 'https://beehivewayanad.com/images/play-area.png',
    description: 'Dedicated play area for children to enjoy various outdoor activities.'
  }
];

export const TARIFFS: TariffPlan[] = [
  {
    id: 'family',
    name: 'FAMILY ROOM',
    price: '5500/-',
    image: 'https://beehivewayanad.com/images/villa.png',
    details: 'Independent villa facing the lake. Spacious suite for family and groups.',
    capacity: '4 bedrooms in one villa'
  },
  {
    id: 'tent',
    name: 'TENT STAY',
    price: '1500/-',
    image: 'https://beehivewayanad.com/images/tent.png',
    details: 'Eco-designed 3-person tent. Includes sleeping bags and mattresses for comfort.',
    capacity: '2 Adults per tent'
  },
  {
    id: 'cottage',
    name: 'PRIVATE COTTAGE',
    price: '4500/-',
    image: 'https://beehivewayanad.com/images/resort-cottage.png',
    details: '2 bedroom private cottage located inside calm coffee plantations.',
    capacity: '1 cottage for 2 families'
  }
];

export const SPECIAL_PACKAGES: Package[] = [
  {
    type: 'Independent room',
    price2n3d: '9,500/-',
    price3n4d: '15,500/-',
    inclusions: 'Bed Coffee/Tea + Breakfast + Evening Tea with Snacks + Dinner + Campfire'
  },
  {
    type: 'Tent Stay',
    price2n3d: '6,800/-',
    price3n4d: '10,500/-',
    inclusions: 'Bed Coffee/Tea + Breakfast + Evening Tea with Snacks + Dinner'
  },
  {
    type: 'Private Cottage',
    price2n3d: '16,800/-',
    price3n4d: '20,500/-',
    inclusions: 'Bed Coffee/Tea + Breakfast + Evening Tea with Snacks + Dinner + Campfire with music + 2 days Wayanad sightseeing safari in Jeep'
  }
];

export const GALLERY_IMAGES = [
  'https://beehivewayanad.com/images/tent.png',
  'https://beehivewayanad.com/images/gallery/14.jpg',
  'https://beehivewayanad.com/images/gallery/13.jpg',
  'https://beehivewayanad.com/images/gallery/12.jpg',
  'https://beehivewayanad.com/images/gallery/11.jpg',
  'https://beehivewayanad.com/images/gallery/10.jpg',
  'https://beehivewayanad.com/images/gallery/9.jpg',
  'https://beehivewayanad.com/images/gallery/8.jpg',
  'https://beehivewayanad.com/images/gallery/7.jpg',
  'https://beehivewayanad.com/images/gallery/6.jpg',
  'https://beehivewayanad.com/images/gallery/5.jpg',
  'https://beehivewayanad.com/images/gallery/4.jpg',
  'https://beehivewayanad.com/images/gallery/3.jpg',
  'https://beehivewayanad.com/images/gallery/2.jpg',
  'https://beehivewayanad.com/images/gallery/1.jpg',
  'https://beehivewayanad.com/images/gallery/14.jpg'
];
