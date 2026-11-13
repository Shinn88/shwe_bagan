
import "./About.css"; // Create this file for your forest-green and gold styling

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <header className="about-header">
          <p className="about-eyebrow">DISCOVER MYANMAR</p>
          <h2>About SHWE BAGAN</h2>
          <h3 className="about-tagline">A journey through the heritage of Bagan.</h3>
        </header>
        
        <div className="about-content">
          <p>
            SHWE BAGAN is your guide to discovering the timeless beauty and cultural heritage of Bagan, Myanmar. 
            From ancient temples and breathtaking landscapes to local traditions and authentic cuisine, 
            we bring the best of Bagan together in one place.
          </p>
          <p>
            Whether you're planning a short visit or an extended journey, Our website helps you discover 
            interesting places, explore memorable activities, and find itinerary ideas to make your 
            trip more meaningful.
          </p>
          <p className="about-mission">
            <strong>Discover Bagan. Experience its heritage. Create your own journey.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}