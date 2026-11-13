import "./Hero.css"
function Hero() {
    return (
        <>
        <section id="hero">
          <div className="hero_content">
            <h1>Discover Bagan</h1>

            <p>
              Explore the ancient temples, culture, and landscapes
              of one of Myanmar's most remarkable destinations.
            </p>
            
            <div className="explore">
              <a href="#places">Explore Bagan</a>
            </div>
          </div>
        </section>
        </>
    )
}
export default Hero;