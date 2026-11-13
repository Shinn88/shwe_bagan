import { useEffect } from "react"
import { Link } from "react-router-dom";
import num1 from "../photo/guides/num1.png";
import num2 from "../photo/guides/num2.png";
import num3 from "../photo/guides/num3.png";
import num4 from "../photo/guides/num4.png";
import num5 from "../photo/guides/num5.png";
import num6 from "../photo/guides/num6.png";
import "./Guides.css";

type Guide = {
  name: string;
  image: string;
  occupation: string;
  location: string;
  language: string;
  experience: string;
  services: string;
  phone: string;
  email: string;
};

const guidesData: Guide[] = [
  {
    name: "Mi Naing",
    image: num1,
    occupation: "Tourist Guide",
    location: "Old Bagan, Myanmar",
    language: "English, Burmese",
    experience: "5 Years",
    services: "Temple Tours, Historical Sites",
    phone: "+95 9 123 456 789",
    email: "myatthu.guide@gmail.com"
  },
  {
    name: "Aung Lay",
    image: num2,
    occupation: "Cultural Tour Guide",
    location: "Nyaung-U, Bagan",
    language: "English, Burmese",
    experience: "7 Years",
    services: "Pagoda Tours, Cultural History",
    phone: "+95 9 987 654 321",
    email: "minthein.tours@gmail.com"
  },
  {
    name: "Shwe Zin Oo",
    image: num3,
    occupation: "Local Tour Guide",
    location: "New Bagan, Myanmar",
    language: "English, Burmese",
    experience: "4 Years",
    services: "Local Villages, Handicrafts",
    phone: "+95 9 234 567 890",
    email: "shwezinoo.bagan@gmail.com"
  },
  {
    name: "Kyaw Zin",
    image: num4,
    occupation: "Adventure Tour Guide",
    location: "Bagan Archaeological Zone",
    language: "English, Burmese",
    experience: "6 Years",
    services: "Cycling Tours, Sunrise Tours",
    phone: "+95 9 345 678 901",
    email: "kyawzin.adventures@gmail.com"
  },
  {
    name: "Thet Naing Swe",
    image: num5,
    occupation: "Historical Tour Guide",
    location: "Old Bagan, Myanmar",
    language: "English, Burmese",
    experience: "8 Years",
    services: "Ancient Temples, Historical Stories",
    phone: "+95 9 456 789 012",
    email: "thetnaingswe.history@gmail.com"
  },
  {
    name: "Kyaw Gyi",
    image: num6,
    occupation: "Independent Tour Guide",
    location: "Bagan, Myanmar",
    language: "Burmese, English(C2), Japanese(N1), Korean, Thai",
    experience: "3 Years",
    services: "Sightseeing, Local Travel Advice",
    phone: "+95 9 567 890 123",
    email: "kyawgyi14/.bagan@gmail.com"
  }
];

export default function Guides() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="guides-page">
      <section className="guides-hero">
        <div className="guides-hero-content">
          <Link className="guides-back-link" to="/">
            <span aria-hidden="true">←</span> Back to Home
          </Link>
          
          <p className="guides-eyebrow">LOCAL EXPERTS</p>
          <h1>Bagan Tourist Guides</h1>
          <p className="guides-intro">
            Connect with local experts to enrich your Bagan experience with historical insights and cultural stories.
          </p>
        </div>
      </section>

      <section className="guides-content">
        <div className="guides-grid">
          {guidesData.map((guide, index) => (
            <article className="guide-card" key={index}>
              <img src={guide.image} alt={guide.name} className="guide-image" />
              <h2>{guide.name}</h2>
              <div className="guide-details">
                <p><strong>Occupation:</strong> {guide.occupation}</p>
                <p><strong>Location:</strong> {guide.location}</p>
                <p><strong>Language:</strong> {guide.language}</p>
                <p><strong>Experience:</strong> {guide.experience}</p>
                <p><strong>Services:</strong> {guide.services}</p>
                <p><strong>Phone:</strong> {guide.phone}</p>
                <p><strong>Email:</strong> {guide.email}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}