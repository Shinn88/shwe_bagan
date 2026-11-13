import res1 from "../photo/res1.png";
import res2 from "../photo/res2.png";
import res3 from "../photo/res3.png";
import res4 from "../photo/res4.png";
import res5 from "../photo/res5.png";
import res6 from "../photo/res6.png";
import res7 from "../photo/res7.png";
import res8 from "../photo/res8.png";
import res9 from "../photo/res9.png";
import res10 from "../photo/res10.png";

type Restaurant = {
  name: string;
  image: string;
  location: string;
  cuisine: string;
  price: string;
  signature: string;
  vibe: string;
  tip: string;
};

const restaurantsData: Restaurant[] = [
  {
    name: "The Moon 'Be Kind To Animals'",
    image: res1,
    location: "Old Bagan",
    cuisine: "Vegetarian, Vegan & Fusion",
    price: "$20 - 40$",
    vibe: "Shaded open-air courtyard garden dining under tamarind canopies.",
    signature: "Roasted tamarind leaf salad, ginger curry with pumpkin.",
    tip: "Order their home-brewed iced tamarind juice for a refreshing midday cooldown."
  },
  {
    name: "Sanon Training Restaurant",
    image: res2,
    location: "Nyaung-U",
    cuisine: "Modern Myanmar Tapas & Fusion",
    price: "$23 - $39",
    vibe: "Polished garden restaurant run as a hospitality vocational training center.",
    signature: "Crispy soft-shell crab with tamarind dipping sauce, slow-cooked pork belly.",
    tip: "100% of profits go towards student training and outreach programs."
  },
  {
    name: "Black Bamboo",
    image: res3,
    location: "Nyaung-U",
    cuisine: "French Bistro & Pan-Asian Grill",
    price: "$15 - $25",
    vibe: "Romantic, candlelit garden oasis shielded by thick bamboo groves.",
    signature: "Grilled Ayeyarwady river fish, fillet steak, homemade mango sorbet.",
    tip: "Save room for dessert; their homemade French ice creams are excellent."
  },
  {
    name: "7 Sisters Restaurant",
    image: res4,
    location: "New Bagan",
    cuisine: "Traditional Burmese, Shan & Chinese",
    price: "$16 - $40",
    vibe: "Monumental open-sided traditional teak pavilion with hanging lacquerware lamps.",
    signature: "Steamed butterfish, Shan-style tofu salad, golden chicken curry.",
    tip: "Founded by four local sisters; ask for the daily local vegetable recommendations."
  },
  {
    name: "Star Beam Bistro",
    image: res5,
    location: "Old Bagan & New Bagan",
    cuisine: "French-Trained Continental & Asian Grill",
    price: "$25 - $45",
    vibe: "Cozy, rustic garden bistro led by a veteran chef.",
    signature: "Pan-seared river fish fillet in white wine cream sauce, fresh bruschetta.",
    tip: "Freshly baked bread with herb-infused olive oil is served complimentary."
  },
  {
    name: "Weather Spoon’s Bagan",
    image: res6,
    location: "Nyaung-U",
    cuisine: "Pan-Asian, Thai & Burgers",
    price: "$18 - 50$",
    vibe: "Vibrant backpacker hub with walls covered in visitor signatures.",
    signature: "Smoked bacon cheeseburger, spicy Tom Yum soup, crispy lime chicken.",
    tip: "Arrive before 7:00 PM during high season; tables fill up quickly."
  },
  {
    name: "Kyaw Kitchen",
    image: res7,
    location: "New Bagan",
    cuisine: "Refined Burmese & Tasting Menus",
    price: "$10 - $30",
    vibe: "Intimate, design-forward dining room with an open kitchen.",
    signature: "Slow-braised beef shank curry, duck breast with tamarind-jaggery reduction.",
    tip: "The chef hosts private morning market tours upon advance request."
  },
  {
    name: "Sunset Garden Restaurant",
    image: res8,
    location: "New Bagan (Riverfront)",
    cuisine: "Burmese, Chinese & Grilled River Seafood",
    price: "$8 - $32",
    vibe: "Multi-tiered open-air wooden deck directly overlooking the water.",
    signature: "Grilled jumbo king river prawns, classic Burmese mutton curry.",
    tip: "Book a front-row table by 5:00 PM to secure prime sunset viewing angles."
  },
  {
    name: "Aroma 2 Indian Restaurant",
    image: res9,
    location: "Nyaung-U",
    cuisine: "Northern Indian & Tandoori",
    price: "$23 - $60",
    vibe: "Atmospheric candlelit garden courtyard with aromatic spice aromas.",
    signature: "Garlic butter naan, creamy mutton Rogan Josh, paneer tikka masala.",
    tip: "The owner frequently welcomes guests with custom spice-level consultations."
  },
  {
    name: "Bagan Zay",
    image: res10,
    location: "Nyaung-U",
    cuisine: "Modern Street Food & Craft Drinks",
    price: "$30 - $75",
    vibe: "Casual-chic industrial aesthetic with an outdoor courtyard cocktail bar.",
    signature: "Myanmar craft beer flights, crispy tea leaf tempura, infused gin cocktails.",
    tip: "Try their cocktails infused with local jaggery and roasted sesame."
  }
];

export default function Restaurants() {
  return (
    <div className="facilities-grid">
      {restaurantsData.map((rest, index) => (
        <article key={index} className="facility-card">
          <div className="facility-header">
            <h3>{rest.name}</h3>
            <span className="price-badge">{rest.price}</span>
          </div>
          
          <img 
            src={rest.image} 
            alt={rest.name} 
            className="facility-image" 
          />

          <p className="location-text">📍 {rest.location} | 🍽️ {rest.cuisine}</p>
          <p><strong>Vibe:</strong> {rest.vibe}</p>
          <p><strong>Signature Dish:</strong> {rest.signature}</p>
          <div className="tip-box">
            <p>💡 <strong>Insider Tip:</strong> {rest.tip}</p>
          </div>
        </article>
      ))}
    </div>
  );
}