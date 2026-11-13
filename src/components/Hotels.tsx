import hotel1 from "../photo/hotel1.png";
import hotel2 from "../photo/hotel2.png";
import hotel3 from "../photo/hotel3.png";
import hotel4 from "../photo/hotel4.png";
import hotel5 from "../photo/hotel5.png";
import hotel6 from "../photo/hotel6.png";
import hotel7 from "../photo/hotel7.png";
import hotel8 from "../photo/hotel8.png";
import hotel9 from "../photo/hotel9.png";
import hotel10 from "../photo/hotel10.png";

type Hotel = {
  name: string;
  image: string;
  location: string;
  price: string;
  vibe: string;
  features: string;
  bestFor: string;
  tip: string;
};

const hotelsData: Hotel[] = [
  {
    name: "The Hotel @ Tharabar Gate",
    image: hotel1,
    location: "Old Bagan",
    price: "$59 - $136",
    vibe: "Classic teakwood architecture surrounded by manicured tropical gardens.",
    features: "Saltwater pool, poolside French/Asian dining, traditional spa.",
    bestFor: "Travelers wanting to step right out into the historical heart of Old Bagan.",
    tip: "Request deluxe garden-view villas in the rear perimeter for maximum seclusion."
  },
  {
    name: "Aureum Palace Hotel & Resort",
    image: hotel2,
    location: "Minnanthu Village Area",
    price: "$86 - $119",
    vibe: "Sprawling palatial estate set around a 27-acre lotus pond.",
    features: "Infinity pool aligned with temple vistas, viewing tower access, lake-edge villas.",
    bestFor: "Luxury travelers and photography enthusiasts seeking panoramic vistas.",
    tip: "The poolside patio is perfect for watching hot-air balloons at dawn."
  },
  {
    name: "Bagan Thiripyitsaya Sanctuary Resort",
    image: hotel3,
    location: "Old Bagan (Riverfront)",
    price: "$43 - $147",
    vibe: "Colonial-era tranquility set across lush riverbanks.",
    features: "Riverside pool, sunset terrace bar, traditional marionette stage.",
    bestFor: "Travelers prioritizing tranquil water views and evening river breezes.",
    tip: "Book a River Front Suite to catch local fishing boats and sunset colors."
  },
  {
    name: "Bagan Lodge",
    image: hotel4,
    location: "New Bagan",
    price: "$120 - $200",
    vibe: "Upscale expedition camp aesthetic featuring safari tent-style roofs.",
    features: "Two outdoor pools, open-air jacuzzi, Tiffin Box restaurant, wellness spa.",
    bestFor: "Travelers who appreciate design-forward boutique lodging.",
    tip: "Rent an on-site e-bike early to explore southern circuits before tour buses arrive."
  },
  {
    name: "Heritage Bagan Hotel",
    image: hotel5,
    location: "Nyaung-U",
    price: "$68 - $158",
    vibe: "Architectural homage to ancient Bagan dynasties with traditional brick arches.",
    features: "Large courtyard pool, traditional sauna, dining halls with Shan specialties.",
    bestFor: "Families, larger groups, and tourists wanting quick airport access.",
    tip: "Ideal for late evening arrivals by air, cutting transfer times to under 5 minutes."
  },
  {
    name: "Areindmar Hotel",
    image: hotel6,
    location: "New Bagan",
    price: "$49 - $110+ ",
    vibe: "Zen-like courtyard property shaded by mature tamarind and palm trees.",
    features: "Quiet central layout, curated regional art, complimentary afternoon tea.",
    bestFor: "Independent travelers seeking peaceful, green, unpretentious hospitality.",
    tip: "Ground floor rooms offer direct step-out access to the central garden and pool."
  },
  {
    name: "Amata Garden Resort Bagan",
    image: hotel7,
    location: "New Bagan",
    price: "$44 - $204 ",
    vibe: "Contemporary resort layout enclosed by flowering garden paths.",
    features: "Expansive pool with sun-loungers, open-air pool bar, rooftop terrace.",
    bestFor: "Digital nomads and leisure travelers looking for comfortable modern amenities.",
    tip: "Check out the rooftop terrace during sunset for a calm drink."
  },
  {
    name: "Amazing Bagan Resort",
    image: hotel8,
    location: "Nyaung-U (Near Golf Course)",
    price: "$48 - $240 ",
    vibe: "Traditional wooden architecture reminiscent of old royal pavilions.",
    features: "Large pool with bar, adjacent golf club access, spa suites.",
    bestFor: "Golfers and travelers preferring quiet green outskirts.",
    tip: "Bungalow-style villas offer significantly more privacy than standard wings."
  },
  {
    name: "Bagan Hotel River View",
    location: "Old Bagan (Riverfront)",
    image: hotel9,
    price: " $48 - $78",
    vibe: "Sprawling historical grounds positioned directly atop the riverside bluff.",
    features: "Infinity pool overlooking the Ayeyarwady, open-air terrace dining.",
    bestFor: "History buffs wanting genuine ancient brick structures within the hotel garden.",
    tip: "The dining terrace offers direct views of the sun sinking behind the Tantkyi Taung hills."
  },
  {
    name: "Ostello Bello Bagan Pool",
    location: "New Bagan",
    image: hotel10,
    price: "$20 - $26",
    vibe: "Lively, communal Italian-Burmese design hub.",
    features: "Central pool, daily free cultural activities, rooftop lounge.",
    bestFor: "Solo travelers, backpackers, and young couples seeking a social atmosphere.",
    tip: "Join their staff-led sunrise e-bike convoys, perfect for first-timers."
  }
];

export default function Hotels() {
  return (
    <div className="facilities-grid">
      {hotelsData.map((hotel, index) => (
        <article key={index} className="facility-card">
          <div className="facility-header">
            <h3>{hotel.name}</h3>
            <span className="price-badge">{hotel.price}</span>
          </div>
          
          <img 
            src={hotel.image} 
            alt={hotel.name} 
            className="facility-image" 
          />

          <p className="location-text">📍 {hotel.location}</p>
          <p><strong>Vibe:</strong> {hotel.vibe}</p>
          <p><strong>Amenities:</strong> {hotel.features}</p>
          <p><strong>Best For:</strong> {hotel.bestFor}</p>
          <div className="tip-box">
            <p>💡 <strong>Local Tip:</strong> {hotel.tip}</p>
          </div>
        </article>
      ))}
    </div>
  );
}