import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Hotels from "./Hotels";
import Restaurants from "./Restaurants";
import "./Facilities.css";

export default function Facilities() {
  const { category } = useParams<{ category: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [category]);

  if (category !== "hotels" && category !== "restaurants") {
    return (
      <main className="facilities-page">
        <section className="facility-not-found">
          <p className="facility-eyebrow">BAGAN TRAVEL GUIDE</p>
          <h1>Page not found</h1>
          <Link className="facility-back-button" to="/">Return Home</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="facilities-page">
      <section className="facility-hero">
        <div className="facility-hero-content">
          <Link className="facility-back-link" to="/">
            <span aria-hidden="true">←</span> Back to Home
          </Link>
          
          <p className="facility-eyebrow">PLAN YOUR STAY</p>
          <h1>{category === "hotels" ? "Bagan Accommodations" : "Dining in Bagan"}</h1>
          <p className="facility-intro">
            {category === "hotels" 
              ? "Discover the best places to rest after a long day of temple exploration." 
              : "Explore our curated list of local flavors, hidden bistros, and riverside dining."}
          </p>
        </div>
      </section>

      {/* --- SECONDARY NAVIGATION TABS --- */}
      <nav className="facility-tabs" aria-label="Facilities navigation">
        <Link 
          to="/facilities/hotels" 
          className={`facility-tab ${category === "hotels" ? "active" : ""}`}
        >
          Hotels
        </Link>
        <Link 
          to="/facilities/restaurants" 
          className={`facility-tab ${category === "restaurants" ? "active" : ""}`}
        >
          Restaurants
        </Link>
      </nav>

      <section className="facility-content">
        {category === "hotels" ? <Hotels /> : <Restaurants />}
      </section>
    </main>
  );
}