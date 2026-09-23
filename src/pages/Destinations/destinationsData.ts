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

/* =========================================================
   FALLBACK IMAGES
   ========================================================= */

const fallbackImages = {
  heritage: wiki("Caves Of Ellora.JPG"),

  city: wiki(
    "Gateway of India Mumbai 03-2016 img3.jpg",
  ),

  religious: wiki(
    "Grishneshwar Temple.jpg",
  ),

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

/* =========================================================
   DESTINATION CATEGORIES
   IMPORTANT:
   ONLY 4 IMAGE DESTINATIONS PER CATEGORY.
   TOTAL = 24 FEATURED IMAGES.
   ========================================================= */

export const destinationCategories: DestinationCategory[] = [

  /* =========================================================
     01 — CHHATRAPATI SAMBHAJINAGAR & NEARBY
     4 IMAGES
  ========================================================= */

  {
    id: "sambhajinagar",
    number: "01",
    eyebrow: "LOCAL & NEARBY",
    title: "Chhatrapati Sambhajinagar",
    description:
      "Explore heritage, nature and sightseeing destinations around Chhatrapati Sambhajinagar.",
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
        name: "Lonar",
        subtitle: "Lake & Nature",
        image: wiki("Lonar Lake.jpg"),
      },

      {
        name: "Jayakwadi",
        subtitle: "Nature & Dam",
        image: wiki("Jayakwadi Dam.jpg"),
      },
    ],
  },

  /* =========================================================
     02 — MAHARASHTRA CITIES
     4 IMAGES
  ========================================================= */

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
        name: "Nashik",
        subtitle: "Religious & City",
        image: wiki("Nashik.jpg"),
      },

      {
        name: "Nagpur",
        subtitle: "City Travel",
        image: wiki("Deekshabhoomi Nagpur.jpg"),
      },

      {
        name: "Pune",
        subtitle: "City Travel",
        image: wiki("Pune skyline.jpg"),
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

  /* =========================================================
     03 — RELIGIOUS DESTINATIONS
     4 IMAGES
  ========================================================= */

  {
    id: "religious",
    number: "03",
    eyebrow: "PILGRIMAGE",
    title: "Religious Journeys",
    description:
      "Plan comfortable family and pilgrimage journeys to popular religious destinations across Maharashtra.",
    fallbackImage: fallbackImages.religious,

    destinations: [
      {
        name: "Nanded",
        subtitle: "Hazur Sahib",
        image: wiki(
          "Gurudwara shri sachkhand hazur sahib - panoramio (2).jpg",
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
        name: "Shirdi",
        subtitle: "Sai Baba Temple",
        image: wiki(
          "Sai baba samadhi mandir.jpg",
        ),
      },

      {
        name: "Tuljapur",
        subtitle: "Temple",
        image: wiki(
          "Tulja Bhavani Temple.jpg",
        ),
      },
    ],
  },

  /* =========================================================
     04 — NATURE & HILL STATIONS
     4 IMAGES
  ========================================================= */

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
        name: "Bhandardara",
        subtitle: "Nature & Lake",
        image: wiki(
          "Bhandardara Lake.jpg",
        ),
      },

      {
        name: "Lonavala",
        subtitle: "Hill Station",
        image: wiki("Lonavala.jpg"),
      },

      {
        name: "Mahabaleshwar",
        subtitle: "Hill Station",
        image: wiki(
          "Mahabaleshwar.jpg",
        ),
      },

      {
        name: "Igatpuri",
        subtitle: "Hill Station",
        image: wiki("Igatpuri.jpg"),
      },
    ],
  },

  /* =========================================================
     05 — KONKAN & BEACHES
     4 IMAGES
  ========================================================= */

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

  /* =========================================================
     06 — INTERSTATE & ALL INDIA
     4 IMAGES
  ========================================================= */

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
        image: wiki("Goa Beach.jpg"),
      },

      {
        name: "Hampi",
        subtitle: "Heritage",
        image: wiki("Hampi.jpg"),
      },

      {
        name: "Jaipur",
        subtitle: "Rajasthan",
        image: wiki(
          "Hawa Mahal Jaipur.jpg",
        ),
      },

      {
        name: "Hyderabad",
        subtitle: "Telangana",
        image: wiki(
          "Charminar Hyderabad.jpg",
        ),
      },
    ],
  },
];