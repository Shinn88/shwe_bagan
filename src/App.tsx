import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Places from "./components/Places.tsx";
import Activities from "./components/Activities.tsx";
import Pagodas from './components/Pagoda/Pagodas';
import ActivityDetail from "./components/ActivityDetail.tsx";
import Itineraries from './components/Itineraries.tsx';
import ItineraryDetail from './components/ItineraryDetail.tsx';
import Facilities from './components/Facilities.tsx';
import Guides from "./components/Guides.tsx";
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';


function Home() {
    return (
    <>

      <main>
        <Navbar />
        <Hero />
        <Places />
        <Activities />
        <Itineraries />
        <About/>
        <Footer/>
      </main>
    </>
  );
}

function App() {
  return (
    <>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagodas" element={<Pagodas />} />
            <Route
                  path="/activities/:slug"
                  element={<ActivityDetail />}
            />
            <Route
              path="/itineraries/:slug"
              element={<ItineraryDetail />}
            />
            <Route path="/facilities/:category" element={<Facilities />} />
            <Route path="/guides" element={<Guides />} />
    </Routes>
    </>
  )   
  }

export default App;
