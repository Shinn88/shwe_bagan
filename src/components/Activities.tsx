import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Activities.css";

import templeExploreImage from "../photo/templeExplore.png";
import sunsetImage from "../photo/sunset.png";
import cultureImage from "../photo/culture.png";
import ebike from "../photo/ebike.png";
import localfoods from "../photo/localfoods.png";
import riverview from "../photo/riverview.png";
// import balloon from "../photo/balloon.png";

type Activity = {
  title: string;
  description: string;
  image: string;
  alt: string;
  path: string;
};

const activities: Activity[] = [
  {
    title: "Temple Exploration",
    description:
      "Explore Bagan's remarkable temple plain, discover its architecture, and learn about the history behind its sacred monuments.",
    image: templeExploreImage,
    alt: "Ancient temples across the Bagan plain",
    path: "/activities/temple-exploration",
  },
  {
    title: "Sunrise & Sunset",
    description:
      "Experience the changing colours of the Bagan landscape and discover responsible ways to enjoy its scenic viewpoints.",
    image: sunsetImage,
    alt: "Sunset over Bagan's temple landscape",
    path: "/activities/sunrise-sunset",
  },
  {
    title: "Local Culture",
    description:
      "Discover local traditions, traditional crafts, and the cultural heritage that continues to shape life around Bagan.",
    image: cultureImage,
    alt: "Traditional crafts and local culture in Bagan",
    path: "/activities/local-culture",
  },
  {
    title: "E-Bike Exploration",
    description:
      "Explore accessible routes at your own pace while planning for road conditions, battery range, and safe travel.",
    image: ebike,
    alt: "A route through Bagan's temple landscape",
    path: "/activities/e-bike-exploration",
  },
  {
    title: "Local Food Experiences",
    description:
      "Discover Myanmar dishes, tea shops, and markets while learning how to plan a respectful and enjoyable food experience.",
    image: localfoods,
    alt: "Local food and market experiences in Myanmar",
    path: "/activities/local-food",
  },
  {
    title: "Ayeyarwady River Experiences",
    description:
      "Enjoy riverside scenery and learn what to check before arranging a boat trip on the Irrawaddy River.",
    image: riverview,
    alt: "The Irrawaddy River landscape near Bagan",
    path: "/activities/irrawaddy-river",
  },
  // {
  //   title: "Ballooning over Bagan",
  //   description:
  //   "Fly over the skies of Bagan to get a bird’s eye view of ancient temples in Myanmar",
  //   image: balloon,
  //   alt: "balloon",
  //   path: "/activities/balloon",
  // }
];

function Activities() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically move to the next activity every 5 seconds.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % activities.length);
    }, 7000);

    // Clear the timer when the component unmounts.
    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + activities.length) % activities.length,
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % activities.length);
  };

  const activeActivity = activities[activeIndex];

  return (
    <section id="activities" aria-labelledby="activities-title">
      <header className="activities-header">
        <h2 id="activities-title">Things to Do</h2>
        <p>Discover experiences that make a visit to Bagan memorable.</p>
      </header>

      <div className="activities-slideshow" aria-roledescription="carousel">
        <article
          key={activeActivity.title}
          className="activity-slide"
          style={{ backgroundImage: `url("${activeActivity.image}")` }}
          aria-live="polite"
        >
          <div className="activity-slide__content">
            <span className="activity-slide__count">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(activities.length).padStart(2, "0")}
            </span>
            <h3>{activeActivity.title}</h3>
            <p>{activeActivity.description}</p>
            <Link
              className="activity-learn-more"
              to={activeActivity.path}
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            >
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>

        <div className="activities-controls" aria-label="Slideshow controls">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous activity"
          >
            ←
          </button>

          <div className="activities-dots" aria-label="Choose an activity">
            {activities.map((activity, index) => (
              <button
                type="button"
                key={activity.title}
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${activity.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next activity"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Activities;
