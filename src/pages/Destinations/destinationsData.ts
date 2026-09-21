export type Destination = {
  name: string;
  subtitle: string;
  image: string;
};

export type DestinationCategory = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  fallbackImage: string;
  destinations: Destination[];
};

const WIKIMEDIA =
  "https://commons.wikimedia.org/wiki/Special:FilePath";

const wiki = (fileName: string) =>
  `${WIKIMEDIA}/${encodeURIComponent(fileName)}?width=900`;

/* =========================================
   CATEGORY FALLBACK IMAGES
========================================= */

const fallbackImages = {
  heritage: wiki("Caves Of Ellora.JPG"),

  city: wiki(
    "Gateway of India Mumbai 03-2016 img3.jpg",
  ),

  religious: wiki("Grishneshwar Temple.jpg"),

  hills: wiki(
    "A view of western ghats.jpg",
  ),

  beach: wiki(
    "Ganpatipule Beach.jpg",
  ),

  india: wiki(
    "Taj Mahal.jpg",
  ),
};

/* =========================================
   DESTINATION CATEGORIES
========================================= */

export const destinationCategories: DestinationCategory[] = [
  /* =========================================
     01 — SAMBHAJINAGAR & NEARBY
  ========================================= */

  {
    id: "sambhajinagar",
    number: "01",
    eyebrow: "LOCAL & NEARBY",
    title: "Chhatrapati Sambhajinagar",
    description:
      "Explore heritage, religious and sightseeing destinations around Chhatrapati Sambhajinagar.",
    fallbackImage: fallbackImages.heritage,

    destinations: [
      {
        name: "Ajanta Caves",
        subtitle: "Heritage",
        image: wiki("Caves of Ajanta.JPG"),
      },

      {
        name: "Ellora Caves",
        subtitle: "Heritage",
        image: wiki("Caves Of Ellora.JPG"),
      },

      {
        name: "Bibi Ka Maqbara",
        subtitle: "Heritage",
        image: wiki(
          "Bibi-Ka-Maqbara -- A masterpiece.JPG",
        ),
      },

      {
        name: "Daulatabad Fort",
        subtitle: "Fort & Heritage",
        image: wiki(
          "Daulatabad Fort - Exterior of Inner Fort.JPG",
        ),
      },

      {
        name: "Grishneshwar",
        subtitle: "Jyotirlinga",
        image: wiki(
          "Grishneshwar Temple.jpg",
        ),
      },

      {
        name: "Jayakwadi",
        subtitle: "Nature & Dam",
        image: wiki(
          "Jayakwadi Dam.jpg",
        ),
      },

      {
        name: "Lonar",
        subtitle: "Lake & Nature",
        image: wiki(
          "Lonar Lake.jpg",
        ),
      },
    ],
  },

  /* =========================================
     02 — MAHARASHTRA CITIES
  ========================================= */

  {
    id: "maharashtra-cities",
    number: "02",
    eyebrow: "CITY TRAVEL",
    title: "Maharashtra Cities",
    description:
      "Comfortable intercity travel from Chhatrapati Sambhajinagar to major cities across Maharashtra.",
    fallbackImage: fallbackImages.city,

    destinations: [
      {
        name: "Pune",
        subtitle: "City Travel",
        image: wiki(
          "Pune skyline.jpg",
        ),
      },

      {
        name: "Mumbai",
        subtitle: "City & Business",
        image: wiki(
          "Gateway of India Mumbai 03-2016 img3.jpg",
        ),
      },

      {
        name: "Beed",
        subtitle: "Intercity Travel",
        image: wiki(
          "Kankaleshwar Temple Beed.jpg",
        ),
      },

      {
        name: "Nanded",
        subtitle: "Pilgrimage & City",
        image: wiki(
          "Gurudwara shri sachkhand hazur sahib - panoramio (2).jpg",
        ),
      },

      {
        name: "Nagpur",
        subtitle: "City Travel",
        image: wiki(
          "Deekshabhoomi Nagpur.jpg",
        ),
      },

      {
        name: "Nashik",
        subtitle: "Religious & City",
        image: wiki(
          "Nashik.jpg",
        ),
      },

      {
        name: "Kolhapur",
        subtitle: "City & Pilgrimage",
        image: wiki(
          "Mahalaxmi Temple Kolhapur.jpg",
        ),
      },
    ],
  },

  /* =========================================
     03 — RELIGIOUS JOURNEYS
  ========================================= */

  {
    id: "religious",
    number: "03",
    eyebrow: "PILGRIMAGE",
    title: "Religious Journeys",
    description:
      "Plan comfortable family and pilgrimage journeys to temples, Jyotirlingas, Ashtavinayak and Shaktipeeth destinations.",
    fallbackImage: fallbackImages.religious,

    destinations: [
      {
        name: "Shirdi",
        subtitle: "Sai Baba Temple",
        image: wiki(
          "Sai baba samadhi mandir.jpg",
        ),
      },

      {
        name: "Trimbakeshwar",
        subtitle: "Jyotirlinga",
        image: wiki(
          "Trimbakeshwar Temple.jpg",
        ),
      },

      {
        name: "Bhimashankar",
        subtitle: "Jyotirlinga",
        image: wiki(
          "Bhimashankar Temple.jpg",
        ),
      },

      {
        name: "Aundha Nagnath",
        subtitle: "Jyotirlinga",
        image: wiki(
          "Aundha Nagnath Temple.jpg",
        ),
      },

      {
        name: "Tuljapur",
        subtitle: "Temple",
        image: wiki(
          "Tulja Bhavani Temple.jpg",
        ),
      },

      {
        name: "Ashtavinayak",
        subtitle: "Temple Circuit",
        image: "",
      },

      {
        name: "Nanded",
        subtitle: "Hazur Sahib",
        image: wiki(
          "Gurudwara shri sachkhand hazur sahib - panoramio (2).jpg",
        ),
      },
    ],
  },

  /* =========================================
     04 — HILL STATIONS & NATURE
  ========================================= */

  {
    id: "hill-stations",
    number: "04",
    eyebrow: "NATURE ESCAPES",
    title: "Hill Stations & Nature",
    description:
      "Escape into the Western Ghats with comfortable travel for family trips, weekend getaways and nature journeys.",
    fallbackImage: fallbackImages.hills,

    destinations: [
      {
        name: "Mahabaleshwar",
        subtitle: "Hill Station",
        image: wiki(
          "Mahabaleshwar.jpg",
        ),
      },

      {
        name: "Lonavala",
        subtitle: "Hill Station",
        image: wiki(
          "Lonavala.jpg",
        ),
      },

      {
        name: "Malshej Ghat",
        subtitle: "Mountain Escape",
        image: wiki(
          "Malshej Ghat.jpg",
        ),
      },

      {
        name: "Bhandardara",
        subtitle: "Nature & Lake",
        image: wiki(
          "Bhandardara Lake.jpg",
        ),
      },

      {
        name: "Igatpuri",
        subtitle: "Hill Station",
        image: wiki(
          "Igatpuri.jpg",
        ),
      },

      {
        name: "Chikhaldara",
        subtitle: "Hill Station",
        image: wiki(
          "Chikhaldara.jpg",
        ),
      },

      {
        name: "Amboli",
        subtitle: "Western Ghats",
        image: wiki(
          "Amboli Ghat.jpg",
        ),
      },
    ],
  },

  /* =========================================
     05 — KONKAN & BEACHES
  ========================================= */

  {
    id: "konkan",
    number: "05",
    eyebrow: "COASTAL ESCAPES",
    title: "Konkan & Beaches",
    description:
      "Plan relaxing coastal journeys to beaches, forts and scenic destinations across Konkan.",
    fallbackImage: fallbackImages.beach,

    destinations: [
      {
        name: "Murud",
        subtitle: "Beach & Fort",
        image: wiki(
          "Murud Janjira.jpg",
        ),
      },

      {
        name: "Harihareshwar",
        subtitle: "Beach & Temple",
        image: wiki(
          "Harihareshwar Beach.jpg",
        ),
      },

      {
        name: "Ratnagiri",
        subtitle: "Konkan",
        image: wiki(
          "Ratnagiri.jpg",
        ),
      },

      {
        name: "Malvan",
        subtitle: "Coastal Travel",
        image: wiki(
          "Malvan Beach.jpg",
        ),
      },

      {
        name: "Sindhudurg",
        subtitle: "Fort & Coast",
        image: wiki(
          "Sindhudurg Fort.jpg",
        ),
      },
    ],
  },

  /* =========================================
     06 — OUT OF STATE / ALL INDIA
  ========================================= */

  {
    id: "interstate",
    number: "06",
    eyebrow: "BEYOND MAHARASHTRA",
    title: "Interstate & All India",
    description:
      "Long-distance car travel for family trips, pilgrimage, business travel and multi-day journeys across India.",
    fallbackImage: fallbackImages.india,

    destinations: [
      {
        name: "Goa",
        subtitle: "Beach Destination",
        image: wiki(
          "Goa Beach.jpg",
        ),
      },

      {
        name: "Ahmedabad",
        subtitle: "Gujarat",
        image: wiki(
          "Ahmedabad.jpg",
        ),
      },

      {
        name: "Statue of Unity",
        subtitle: "Gujarat",
        image: wiki(
          "Statue of Unity.jpg",
        ),
      },

      {
        name: "Dwarka",
        subtitle: "Pilgrimage",
        image: wiki(
          "Dwarkadhish Temple.jpg",
        ),
      },

      {
        name: "Somnath",
        subtitle: "Pilgrimage",
        image: wiki(
          "Somnath Temple.jpg",
        ),
      },

      {
        name: "Gir",
        subtitle: "Wildlife",
        image: wiki(
          "Gir National Park.jpg",
        ),
      },

      {
        name: "Rann of Kutch",
        subtitle: "Gujarat",
        image: wiki(
          "Rann of Kutch.jpg",
        ),
      },

      {
        name: "Indore",
        subtitle: "Madhya Pradesh",
        image: wiki(
          "Rajwada Indore.jpg",
        ),
      },

      {
        name: "Ujjain",
        subtitle: "Mahakal Temple",
        image: wiki(
          "Mahakaleshwar Temple.jpg",
        ),
      },

      {
        name: "Omkareshwar",
        subtitle: "Jyotirlinga",
        image: wiki(
          "Omkareshwar Temple.jpg",
        ),
      },

      {
        name: "Jaipur",
        subtitle: "Rajasthan",
        image: wiki(
          "Hawa Mahal Jaipur.jpg",
        ),
      },

      {
        name: "Udaipur",
        subtitle: "Rajasthan",
        image: wiki(
          "Udaipur City Palace.jpg",
        ),
      },

      {
        name: "Jaisalmer",
        subtitle: "Rajasthan",
        image: wiki(
          "Jaisalmer Fort.jpg",
        ),
      },

      {
        name: "Hampi",
        subtitle: "Karnataka",
        image: wiki(
          "Hampi.jpg",
        ),
      },

      {
        name: "Mysuru",
        subtitle: "Karnataka",
        image: wiki(
          "Mysore Palace.jpg",
        ),
      },

      {
        name: "Hyderabad",
        subtitle: "Telangana",
        image: wiki(
          "Charminar Hyderabad.jpg",
        ),
      },

      {
        name: "Agra",
        subtitle: "Uttar Pradesh",
        image: wiki(
          "Taj Mahal.jpg",
        ),
      },

      {
        name: "Mathura & Vrindavan",
        subtitle: "Pilgrimage",
        image: wiki(
          "Banke Bihari Temple.jpg",
        ),
      },

      {
        name: "Haridwar",
        subtitle: "Pilgrimage",
        image: wiki(
          "Har Ki Pauri Haridwar.jpg",
        ),
      },
    ],
  },
];