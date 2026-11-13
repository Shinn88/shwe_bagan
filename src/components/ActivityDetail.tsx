import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import templeExploreImage from "../photo/templeExplore.png";
import sunsetImage from "../photo/sunset.png";
import cultureImage from "../photo/culture.png";
import ebike from "../photo/ebike.png";
import localfoods from "../photo/localfoods.png";
import riverview from "../photo/riverview.png";
import "./ActivityDetails.css";

export type Activity = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string[];
  highlights: string[];
  bestTime: string;
  suggestedDuration: string;
  whatToBring: string[];
  practicalTips: string[];
  etiquette: string[];
  planningNote: string;
  image: string;
  alt: string;
};

/*
 * Activity information source for the Bagan Travel Guide.
 * Keep activity content here; ActivityDetail reads the selected record by URL slug.
 * Verify local opening conditions, prices, transport availability, and restrictions before publishing.
 */
export const activities: Activity[] = [
  {
    slug: "temple-exploration",
    title: "Temple Exploration",
    category: "History & architecture",
    summary:
      "Explore Bagan's ancient Buddhist monuments and learn how their architecture, art, and religious traditions tell the story of the old kingdom.",
    overview: [
      "Bagan's archaeological landscape contains thousands of Buddhist monuments built across several centuries. Visiting temples is an opportunity to notice differences in scale, layout, brickwork, stupas, towers, murals, and Buddha images—not just to take photographs.",
      "Plan a manageable route instead of trying to see every monument in one day. Combine a few well-known landmarks with quieter sites, and check local guidance before entering a building because access rules and conservation work can change.",
    ],
    highlights: [
      "Observe the differences between solid stupas and temples with interior halls.",
      "Look for brick patterns, decorative details, Buddha images, and surviving mural paintings where access is permitted.",
      "Learn about Bagan's history and the Buddhist traditions connected to its monuments.",
    ],
    bestTime:
      "Early morning or late afternoon is often more comfortable for outdoor exploration. Midday can be hot, so plan breaks and check the weather.",
    suggestedDuration: "Half a day to a full day, depending on how many sites you visit.",
    whatToBring: [
      "Water and sun protection",
      "Comfortable walking shoes that are easy to remove at religious sites",
      "Light, respectful clothing covering shoulders and knees",
      "A charged phone or camera",
    ],
    practicalTips: [
      "Group nearby sites together to reduce unnecessary travel.",
      "Check current access rules; some buildings, stairways, or areas may be closed for conservation or safety.",
      "Use an official guide if you want deeper historical context.",
      "Do not climb monuments unless the area is explicitly open and climbing is permitted.",
    ],
    etiquette: [
      "Remove footwear where signs or local practice require it.",
      "Dress modestly and speak quietly inside active religious spaces.",
      "Do not touch, mark, or remove bricks, murals, statues, or other heritage features.",
      "Ask permission before photographing people, monks, or ceremonies.",
    ],
    planningNote:
      "Opening conditions, access restrictions, guide services, and any entry fees can change. Confirm locally before travelling.",
    image: templeExploreImage,
    alt: "Ancient temples across the Bagan plain",
  },
  {
    slug: "sunrise-sunset",
    title: "Sunrise & Sunset",
    category: "Scenic experiences",
    summary:
      "Enjoy the changing light over Bagan's temple landscape from a permitted viewpoint, and learn how to plan a responsible visit.",
    overview: [
      "The warm light around sunrise and sunset can bring out the shapes of Bagan's stupas, temple towers, trees, and open plains. Conditions vary with season, cloud cover, haze, and weather, so the view is never guaranteed to look exactly the same.",
      "Choose a viewpoint that is currently open to visitors. Many monuments have access restrictions, and visitors should not climb closed or fragile structures just to get a higher view.",
    ],
    highlights: [
      "Watch the landscape change colour as the sun rises or sets.",
      "Photograph temple silhouettes and the broad archaeological plain from an approved location.",
      "Enjoy a slower visit with time to observe the scenery rather than rushing between sites.",
    ],
    bestTime:
      "Arrive before sunrise or well before sunset to find your permitted viewing area and allow time for travel. Check the local forecast first.",
    suggestedDuration: "About 1–2 hours, plus travel time.",
    whatToBring: [
      "Water",
      "A light layer for a breezy early morning or evening",
      "A phone or camera with sufficient battery",
      "A small flashlight if travelling before dawn, while staying on safe paths",
    ],
    practicalTips: [
      "Check the sunrise or sunset time for your travel date.",
      "Confirm the viewpoint is open and reachable before setting out.",
      "Allow extra time to return before dark and avoid unfamiliar unlit roads.",
      "Be patient with weather conditions and keep pathways clear for others.",
    ],
    etiquette: [
      "Respect barriers and monument access restrictions.",
      "Avoid loud music and keep the viewing area clean.",
      "Do not use a drone unless you have confirmed that it is legally permitted and any required permissions are in place.",
    ],
    planningNote:
      "Viewpoint access, weather, and local restrictions can change. Do not assume a temple terrace is open for climbing.",
    image: sunsetImage,
    alt: "Sunset over Bagan's temple landscape",
  },
  {
    slug: "local-culture",
    title: "Local Culture & Traditional Crafts",
    category: "Culture & community",
    summary:
      "Discover Bagan's craft traditions, local products, and community life through respectful visits to workshops and markets.",
    overview: [
      "Bagan and nearby communities are known for traditional crafts, including lacquerware. Visiting a workshop can help travellers understand the time, skill, and materials involved in making an object rather than seeing it only as a souvenir.",
      "Markets and craft workshops are working places as well as visitor attractions. Be considerate of people's time, ask before taking photographs, and buy directly from makers when appropriate and practical.",
    ],
    highlights: [
      "Learn about the stages involved in making and decorating traditional lacquerware.",
      "Browse locally made crafts and learn how to recognise the work behind them.",
      "Observe everyday market life and discover local products.",
    ],
    bestTime:
      "Daytime is generally practical for workshops and markets, but opening hours vary by business and season.",
    suggestedDuration: "About 1–3 hours, depending on whether you visit a workshop, market, or both.",
    whatToBring: [
      "Small cash notes if you intend to buy something",
      "A reusable bag for purchases",
      "A camera or phone, after asking permission where needed",
    ],
    practicalTips: [
      "Check workshop or market opening hours before travelling.",
      "Ask questions politely and allow artisans to continue their work.",
      "Compare craftsmanship and ask about materials and production methods.",
      "Agree on the price and currency before purchasing.",
    ],
    etiquette: [
      "Ask before photographing people, workshops, or private property.",
      "Be respectful when bargaining; avoid treating a maker's time and skill as worthless.",
      "Do not enter work areas unless invited.",
    ],
    planningNote:
      "Specific workshop availability, prices, and opening hours are not guaranteed; confirm with the business or a local guide.",
    image: cultureImage,
    alt: "Traditional crafts and local culture in Bagan",
  },
  {
    slug: "e-bike-exploration",
    title: "E-Bike Exploration",
    category: "Outdoor activity",
    summary:
      "Travel between accessible sites at your own pace using an electric bike, while planning a safe route and respecting local traffic.",
    overview: [
      "An electric bike can make it easier to explore Bagan's spread-out landscape, but routes may include sandy or uneven surfaces, traffic, and stretches with limited lighting. Choose a vehicle and route that match your experience and confidence.",
      "Before setting off, ask the rental provider about the controls, battery range, charging, emergency contact details, and what to do if the bike develops a problem.",
    ],
    highlights: [
      "Explore several nearby sites at a flexible pace.",
      "Stop for landscape views and local food along the route.",
      "Build a route around a small group of places instead of travelling too far in one day.",
    ],
    bestTime:
      "Start early or travel later in the afternoon to avoid the hottest part of the day. Avoid riding in poor visibility or unsafe weather.",
    suggestedDuration: "About 2–4 hours for a short outing; longer trips require route and battery planning.",
    whatToBring: [
      "Helmet, if available and properly fitted",
      "Water and sun protection",
      "A charged phone and the rental provider's contact details",
      "Enough battery range for the return journey",
    ],
    practicalTips: [
      "Check the brakes, tyres, lights, battery, and controls before leaving.",
      "Ask the rental provider which roads and tracks are suitable.",
      "Keep speed low around pedestrians, animals, and temple entrances.",
      "Do not ride after drinking alcohol; never use a phone while riding.",
      "Plan to return before dark and leave a battery reserve for the journey back.",
    ],
    etiquette: [
      "Park only in permitted areas and keep entrances clear.",
      "Slow down near residents, worshippers, and other visitors.",
      "Do not ride into restricted heritage areas or across fragile archaeological features.",
    ],
    planningNote:
      "Rental prices, rules, road conditions, and vehicle availability vary. Confirm local requirements and rental terms before booking.",
    image: ebike,
    alt: "A route through Bagan's temple landscape",
  },
  {
    slug: "local-food",
    title: "Local Food Experiences",
    category: "Food & everyday life",
    summary:
      "Explore Myanmar food through local restaurants, tea shops, and markets, while checking ingredients and food-handling practices.",
    overview: [
      "Trying local food is a way to experience everyday life as well as regional flavours. Visitors may encounter rice dishes, noodles, soups, salads, curries, snacks, and tea-shop favourites. Menus and availability differ between businesses.",
      "If you have food allergies or dietary restrictions, explain them clearly before ordering. Recipes and cooking methods can vary, and a dish's name alone may not tell you every ingredient it contains.",
    ],
    highlights: [
      "Try a variety of Myanmar dishes and snacks.",
      "Visit a local tea shop to experience a familiar part of daily social life.",
      "Browse a market with respect for vendors and customers.",
    ],
    bestTime:
      "Meal times are a convenient starting point, but each restaurant and market has its own schedule.",
    suggestedDuration: "About 1–2 hours for a meal or tea-shop visit; longer for a market visit.",
    whatToBring: [
      "Cash in suitable denominations",
      "A note of any important allergies or dietary restrictions",
      "A reusable water bottle where safe refilling is available",
    ],
    practicalTips: [
      "Ask about ingredients, spice level, and portion size before ordering.",
      "Choose food businesses with good food-handling practices and food that is freshly prepared.",
      "Use sealed or otherwise reliably safe drinking water.",
      "Check the price and currency before ordering if a menu is not available.",
    ],
    etiquette: [
      "Ask before photographing vendors or customers.",
      "Keep walkways clear in busy markets.",
      "Dispose of rubbish properly and respect local customs around shared meals.",
    ],
    planningNote:
      "Menus, prices, and opening hours change. Confirm details directly with the restaurant or vendor.",
    image: localfoods,
    alt: "Local food and market experiences in Myanmar",
  },
  {
    slug: "irrawaddy-river",
    title: "Ayeyarwady River Experiences",
    category: "Nature & sightseeing",
    summary:
      "See Bagan's riverside landscape and learn what to check before arranging a boat trip on the Irrawaddy River.",
    overview: [
      "The Irrawaddy River forms an important part of the wider Bagan landscape. A riverside visit offers a different perspective from exploring temples inland, with views of the water, riverbank, and surrounding countryside.",
      "Boat services and conditions depend on season, weather, water levels, and local operators. Confirm that a trip is operating and understand its duration, price, departure point, and safety arrangements before paying.",
    ],
    highlights: [
      "Enjoy views of the river and surrounding landscape.",
      "Learn about the river's role in transport and life in the region.",
      "Consider a boat outing only when a reliable local operator confirms availability and conditions.",
    ],
    bestTime:
      "Ask a local operator about suitable departure times for the season and the day's river conditions.",
    suggestedDuration: "Allow 1–3 hours for a short outing, but confirm the actual duration with the operator.",
    whatToBring: [
      "Sun protection and drinking water",
      "A light layer for wind on the water",
      "A charged phone and any booking details",
    ],
    practicalTips: [
      "Confirm the departure point, duration, total cost, and return arrangements.",
      "Use an operator that provides suitable life jackets and clear safety instructions.",
      "Follow crew instructions and do not board if conditions or safety arrangements seem unsuitable.",
      "Keep personal belongings secure and avoid leaning over the boat.",
    ],
    etiquette: [
      "Respect riverside residents and private property.",
      "Take rubbish back with you.",
      "Follow the operator's instructions and local safety rules.",
    ],
    planningNote:
      "Boat availability and safety depend on current local conditions. Verify the service and weather before making plans.",
    image: riverview,
    alt: "The Irrawaddy River near Bagan",
  },
];

export default function ActivityDetail() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const activity = activities.find((item) => item.slug === slug);

  if (!activity) {
    return (
      <main className="activity-detail-page">
        <section className="activity-detail-not-found">
          <h1>Activity not found</h1>
          <p>We couldn't find that activity. Return to the Things to Do section to choose another experience.</p>
          <Link to="/#activities">Back to Things to Do</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="activity-detail-page">
      <header
        className="activity-detail-hero"
        style={{ backgroundImage: `url("${activity.image}")` }}
      >
        <div className="activity-detail-hero__overlay" />
        <div className="activity-detail-hero__content">
          <Link className="activity-back-link" to="/#activities">
            ← Back to Things to Do
          </Link>
          <span className="activity-detail-category">{activity.category}</span>
          <h1>{activity.title}</h1>
          <p>{activity.summary}</p>
        </div>
      </header>

      <div className="activity-detail-content">
        <section className="activity-detail-section">
          <h2>About this experience</h2>
          {activity.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="activity-detail-section">
          <h2>Highlights</h2>
          <ul>
            {activity.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="activity-detail-facts">
          <article>
            <h2>Best time</h2>
            <p>{activity.bestTime}</p>
          </article>
          <article>
            <h2>Suggested duration</h2>
            <p>{activity.suggestedDuration}</p>
          </article>
        </section>

        <section className="activity-detail-section">
          <h2>What to bring</h2>
          <ul>
            {activity.whatToBring.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="activity-detail-section">
          <h2>Practical tips</h2>
          <ul>
            {activity.practicalTips.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="activity-detail-section">
          <h2>Respect local culture and heritage</h2>
          <ul>
            {activity.etiquette.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <aside className="activity-planning-note">
          <h2>Before you go</h2>
          <p>{activity.planningNote}</p>
        </aside>

        <Link className="activity-back-bottom" to="/#activities">
          ← Explore other activities
        </Link>
      </div>
    </main>
  );
}
