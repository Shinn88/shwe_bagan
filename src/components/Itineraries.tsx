import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Itineraries.css";

import itin1 from "../photo/itin1.png";
import itin2 from "../photo/itin2.png";
import itin3 from "../photo/itin3.png";
import itin4 from "../photo/itin4.png";


export type ItineraryPlan = {
  slug: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
  path: string;
};

export const itineraries: ItineraryPlan[] = [
  {
    slug: "one-day",
    title: "One-Day Trip",
    duration: "1 day",
    description: "A focused introduction to Bagan's temples, local food, and scenic landscape for visitors with limited time.",
    highlights: ["Selected temple visits", "Local food and a midday break", "A permitted sunset viewpoint"],
    image: itin1,
    alt: "Ancient temples across the Bagan plain",
    path: "/itineraries/one-day",
  },
  {
    slug: "two-days",
    title: "Two-Day Trip",
    duration: "2 days",
    description: "Explore Bagan at a more relaxed pace, with additional time for cultural experiences and local discoveries.",
    highlights: ["Temple exploration across two days", "Traditional crafts and local culture", "Time for scenic viewpoints"],
    image: itin2,
    alt: "Traditional crafts and local culture in Bagan",
    path: "/itineraries/two-days",
  },
  {
    slug: "five-days",
    title: "Five-Day Trip",
    duration: "5 days",
    description: "A longer visit combining heritage sites, cultural experiences, local food, and time to explore at a comfortable pace.",
    highlights: ["A flexible multi-day sightseeing plan", "Cultural and food experiences", "Rest time between activities"],
    image: itin3,
    alt: "Sunset over Bagan's temple landscape",
    path: "/itineraries/five-days",
  },
  {
    slug: "ten-days",
    title: "Ten-Day Trip",
    duration: "10 days",
    description: "A slower-paced extended stay with room for deeper exploration, flexible days, and experiences around the wider region.",
    highlights: ["A longer, flexible travel schedule", "More time for local experiences", "Optional rest and unplanned exploration days"],
    image: itin4,
    alt: "Exploring the Bagan landscape by electric bike",
    path: "/itineraries/ten-days",
  },
];

function Itineraries() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % itineraries.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + itineraries.length) % itineraries.length);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % itineraries.length);
  };

  const activeItinerary = itineraries[activeIndex];

  return (
    <section id="itinerary" aria-labelledby="itinerary-title">
      <header className="itineraries-header">
        <h2 id="itinerary-title">Suggested Itineraries</h2>
        <p>Choose a trip length that fits your time in Bagan.</p>
      </header>

      <div className="itineraries-slideshow" aria-roledescription="carousel" aria-label="Suggested trip plans">
        <article
          key={activeItinerary.slug}
          className="itinerary-slide"
          style={{ backgroundImage: `url("${activeItinerary.image}")` }}
          aria-live="polite"
        >
          <div className="itinerary-slide__content">
            <span className="itinerary-slide__count">
              {String(activeIndex + 1).padStart(2, "0")} / {String(itineraries.length).padStart(2, "0")}
            </span>
            <span className="itinerary-slide__duration">{activeItinerary.duration}</span>
            <h3>{activeItinerary.title}</h3>
            <p>{activeItinerary.description}</p>

            <ul className="itinerary-slide__highlights">
              {activeItinerary.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <Link
              className="itinerary-choose-button"
              to={activeItinerary.path}
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            >
              Choose Itinerary <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>

        <div className="itineraries-controls" aria-label="Slideshow controls">
          <button type="button" onClick={previousSlide} aria-label="Previous itinerary">←</button>

          <div className="itineraries-dots" aria-label="Choose a trip plan">
            {itineraries.map((itinerary, index) => (
              <button
                type="button"
                key={itinerary.slug}
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${itinerary.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <button type="button" onClick={nextSlide} aria-label="Next itinerary">→</button>
        </div>
      </div>
    </section>
  );
}

export default Itineraries;
