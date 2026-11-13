import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItineraryDetail.css";

import itin1 from "../photo/itin1.png";
import itin2 from "../photo/itin2.png";
import itin3 from "../photo/itin3.png";
import itin4 from "../photo/itin4.png";

type DayPlan = {
  day: string;
  title: string;
  description: string;
  activities: string[];
};

type ItineraryDetailData = {
  slug: string;
  title: string;
  duration: string;
  introduction: string;
  image: string;
  alt: string;
  bestFor: string;
  pace: string;
  days: DayPlan[];
  tips: string[];
};

const itineraryDetails: Record<string, ItineraryDetailData> = {
  "one-day": {
    slug: "one-day",
    title: "One-Day Bagan Highlights",
    duration: "1 day",
    introduction:
      "A compact introduction to Bagan, combining selected temple visits, local food, and time to enjoy the landscape without trying to see everything in one day.",
    image: itin1,
    alt: "Ancient Bagan temples and pagodas",
    bestFor: "Visitors with limited time",
    pace: "Full day",
    days: [
      {
        day: "Morning",
        title: "Explore the ancient temples",
        description:
          "Begin early while the weather is cooler. Choose a small group of accessible temples and take time to appreciate their architecture and history.",
        activities: [
          "Visit selected temple sites that are open to visitors",
          "Take photographs from permitted areas",
          "Allow time for walking between nearby sites",
        ],
      },
      {
        day: "Midday",
        title: "Local food and a rest",
        description:
          "Pause for lunch at a local restaurant and take a break during the hottest part of the day.",
        activities: [
          "Try a local Myanmar meal",
          "Drink water and rest before the afternoon",
        ],
      },
      {
        day: "Afternoon",
        title: "Culture and a relaxed finish",
        description:
          "Use the afternoon for a cultural stop or a slower visit to another nearby site. Finish at an officially permitted viewpoint if conditions and access allow.",
        activities: [
          "Browse local crafts or learn about regional traditions",
          "Check current access rules before visiting a viewpoint",
        ],
      },
    ],
    tips: [
      "Start early and keep the number of stops realistic.",
      "Wear comfortable walking shoes and sun protection.",
      "Respect signs, restricted areas, and temple customs.",
      "Sunrise and sunset access can change; confirm current local guidance.",
    ],
  },
  "two-days": {
    slug: "two-days",
    title: "Two-Day Bagan Discovery",
    duration: "2 days",
    introduction:
      "A balanced two-day plan with more time for temple architecture, local culture, food, and breaks between sightseeing sessions.",
    image: itin2,
    alt: "Traditional culture and heritage in Bagan",
    bestFor: "First-time visitors",
    pace: "Moderate",
    days: [
      {
        day: "Day 1",
        title: "Temples and Bagan's landscape",
        description:
          "Focus on the archaeological landscape and give each stop enough time instead of rushing from one site to another.",
        activities: [
          "Visit a selection of major, accessible temple sites",
          "Learn about the architecture and history of the area",
          "Take a midday break for lunch and rest",
          "End with a permitted scenic viewpoint, if available",
        ],
      },
      {
        day: "Day 2",
        title: "Local culture and slower exploration",
        description:
          "Spend the second day discovering local life and enjoying a more flexible pace.",
        activities: [
          "Visit local craft shops or cultural stops",
          "Try another local dish or seasonal specialty",
          "Explore a different cluster of accessible sites",
          "Leave time for rest or unplanned discoveries",
        ],
      },
    ],
    tips: [
      "Group nearby sites together to reduce travel time.",
      "Confirm opening times, access restrictions, and transport options locally.",
      "Keep some flexibility for weather, heat, and changing conditions.",
      "Ask before photographing people or private activities.",
    ],
  },
  "five-days": {
    slug: "five-days",
    title: "Five-Day Bagan Immersion",
    duration: "5 days",
    introduction:
      "A slower itinerary for travelers who want to combine heritage, local food, crafts, photography, and relaxed exploration over several days.",
    image: itin3,
    alt: "Bagan pagodas across the landscape",
    bestFor: "Travelers who prefer a relaxed visit",
    pace: "Relaxed",
    days: [
      {
        day: "Day 1",
        title: "Orientation and first temples",
        description:
          "Get familiar with the area and visit a few accessible temples close to your accommodation.",
        activities: [
          "Review local maps and current site guidance",
          "Visit a small selection of nearby temples",
          "Enjoy a relaxed local dinner",
        ],
      },
      {
        day: "Day 2",
        title: "Architecture and history",
        description:
          "Dedicate the day to learning about Bagan's religious architecture and heritage.",
        activities: [
          "Visit selected major temple sites",
          "Compare architectural details and layouts",
          "Take a long midday break",
        ],
      },
      {
        day: "Day 3",
        title: "Culture, crafts, and food",
        description:
          "Explore cultural experiences at a respectful pace and support local businesses where possible.",
        activities: [
          "Browse local crafts and shops",
          "Try regional dishes",
          "Ask local guides about traditions and community history",
        ],
      },
      {
        day: "Day 4",
        title: "Flexible exploration day",
        description:
          "Use this day to revisit a favorite area, explore a different accessible cluster, or choose a guided experience.",
        activities: [
          "Choose sites based on interest and current access",
          "Consider a locally guided heritage walk",
          "Keep the afternoon open for rest or photography",
        ],
      },
      {
        day: "Day 5",
        title: "Favorite places and a gentle finish",
        description:
          "Finish with a low-pressure day built around favorite places and any experiences missed earlier.",
        activities: [
          "Revisit a preferred site if access allows",
          "Pick up locally made crafts",
          "Leave enough time for departure arrangements",
        ],
      },
    ],
    tips: [
      "Avoid scheduling every hour; leave room for rest and discovery.",
      "Consider a local guide for historical context.",
      "Plan outdoor visits around heat and weather.",
      "Verify transport, site access, and any local restrictions before setting out.",
    ],
  },
  "ten-days": {
    slug: "ten-days",
    title: "Ten-Day Bagan Slow Travel",
    duration: "10 days",
    introduction:
      "A flexible extended stay that leaves space for deeper heritage learning, repeated visits, local experiences, and rest days rather than treating every day as a checklist.",
    image: itin4,
    alt: "Exploring the Bagan area by local transport",
    bestFor: "Slow travelers and heritage enthusiasts",
    pace: "Very relaxed",
    days: [
      {
        day: "Day 1",
        title: "Arrive and get oriented",
        description: "Settle in, learn the local layout, and confirm practical details for the week.",
        activities: [
          "Check transport and current site information",
          "Take a short walk near your accommodation",
          "Rest after travel",
        ],
      },
      {
        day: "Day 2",
        title: "First temple circuit",
        description: "Visit a few accessible temples and become familiar with the landscape.",
        activities: [
          "Choose a manageable group of nearby sites",
          "Read interpretive information where available",
          "Take breaks between visits",
        ],
      },
      {
        day: "Day 3",
        title: "Architecture and heritage",
        description: "Spend more time looking closely at architectural details and learning the context.",
        activities: [
          "Visit selected major sites",
          "Consider a qualified local guide",
          "Record questions and observations",
        ],
      },
      {
        day: "Day 4",
        title: "Local culture",
        description: "Focus on community culture and locally run experiences.",
        activities: [
          "Explore craft shops or cultural stops",
          "Learn about local traditions respectfully",
          "Try regional food",
        ],
      },
      {
        day: "Day 5",
        title: "Rest and flexible time",
        description: "Keep the day light to recover from the heat and earlier sightseeing.",
        activities: [
          "Take a longer break",
          "Visit a nearby café or local market",
          "Review options for the next few days",
        ],
      },
      {
        day: "Day 6",
        title: "A different area of Bagan",
        description: "Explore a different accessible cluster instead of repeating the same route.",
        activities: [
          "Plan stops by proximity",
          "Check access and transport before departure",
          "Leave room for unplanned discoveries",
        ],
      },
      {
        day: "Day 7",
        title: "Food and local experiences",
        description: "Give local food and community-run businesses more attention.",
        activities: [
          "Sample dishes you have not tried yet",
          "Browse locally made products",
          "Ask permission before taking photographs",
        ],
      },
      {
        day: "Day 8",
        title: "Personal-interest day",
        description: "Choose a theme that interests you most: history, photography, architecture, or relaxed exploration.",
        activities: [
          "Build the day around one main interest",
          "Revisit a favorite site if permitted",
          "Avoid overloading the schedule",
        ],
      },
      {
        day: "Day 9",
        title: "Revisit and catch up",
        description: "Use a flexible day for places missed due to weather, access, or changing plans.",
        activities: [
          "Confirm which sites are currently accessible",
          "Revisit a favorite location",
          "Prepare for departure",
        ],
      },
      {
        day: "Day 10",
        title: "A gentle final day",
        description: "Keep the final day simple and allow enough time for transport and check-out.",
        activities: [
          "Enjoy a final local meal",
          "Pick up any last souvenirs",
          "Allow a generous departure buffer",
        ],
      },
    ],
    tips: [
      "Treat the schedule as a flexible framework, not a fixed timetable.",
      "Include rest time, especially during hot weather.",
      "Use locally verified information for transport and site access.",
      "Be respectful of religious spaces, local communities, and conservation rules.",
    ],
  },
};

function ItineraryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const itinerary = slug ? itineraryDetails[slug] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!itinerary) {
    return (
      <main className="itinerary-detail-page">
        <section className="itinerary-not-found">
          <p className="itinerary-eyebrow">BAGAN TRAVEL GUIDE</p>
          <h1>Itinerary not found</h1>
          <p>
            This trip plan may have moved or the link may be incorrect. Choose
            one of the available itineraries to continue.
          </p>
          <Link className="itinerary-back-button" to="/#itinerary">
            Browse itineraries
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="itinerary-detail-page">
      <section className="itinerary-detail-hero">
        <img
          className="itinerary-detail-hero-image"
          src={itinerary.image}
          alt={itinerary.alt}
        />
        <div className="itinerary-detail-hero-overlay" />
        <div className="itinerary-detail-hero-content">
          <Link className="itinerary-back-link" to="/#itinerary">
            <span aria-hidden="true">←</span> All itineraries
          </Link>
          <p className="itinerary-eyebrow">EXPLORE BAGAN AT YOUR OWN PACE</p>
          <p className="itinerary-duration">{itinerary.duration}</p>
          <h1>{itinerary.title}</h1>
          <p className="itinerary-detail-intro">{itinerary.introduction}</p>
          <a className="itinerary-scroll-link" href="#itinerary-days">
            Explore the plan <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="itinerary-overview" aria-label="Itinerary overview">
        <div className="itinerary-overview-item">
          <span className="overview-label">Duration</span>
          <strong>{itinerary.duration}</strong>
        </div>
        <div className="itinerary-overview-item">
          <span className="overview-label">Best for</span>
          <strong>{itinerary.bestFor}</strong>
        </div>
        <div className="itinerary-overview-item">
          <span className="overview-label">Travel pace</span>
          <strong>{itinerary.pace}</strong>
        </div>
      </section>

      <section className="itinerary-days-section" id="itinerary-days">
        <div className="itinerary-section-heading">
          <p className="itinerary-eyebrow">YOUR TRIP, STEP BY STEP</p>
          <h2>Suggested itinerary</h2>
          <p>
            Use this plan as a starting point. Site access, transport, weather,
            and local conditions can change, so confirm details before each day.
          </p>
        </div>

        <div className="itinerary-day-list">
          {itinerary.days.map((day, index) => (
            <article className="itinerary-day-card" key={`${day.day}-${day.title}`}>
              <div className="itinerary-day-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="itinerary-day-content">
                <p className="itinerary-day-label">{day.day}</p>
                <h3>{day.title}</h3>
                <p className="itinerary-day-description">{day.description}</p>
                <ul>
                  {day.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="itinerary-tips-section">
        <div className="itinerary-tips-heading">
          <p className="itinerary-eyebrow">BEFORE YOU GO</p>
          <h2>Useful travel notes</h2>
          <p>Small preparations can make your Bagan visit more comfortable and respectful.</p>
        </div>
        <ul className="itinerary-tips-list">
          {itinerary.tips.map((tip) => (
            <li key={tip}>
              <span className="tip-check" aria-hidden="true">✓</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="itinerary-bottom-cta">
        <p className="itinerary-eyebrow">KEEP EXPLORING</p>
        <h2>Make your Bagan trip your own.</h2>
        <p>
          Adjust the number of stops to suit your interests, available time, and
          current local guidance.
        </p>
        <Link className="itinerary-back-button" to="/#itinerary">
          Browse other itineraries
        </Link>
      </section>
    </main>
  );
}

export default ItineraryDetail;
