import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Countdown from "./components/Countdown.jsx";
import OurStory from "./components/OurStory.jsx";
import Events from "./components/Events.jsx";
import WeddingColours from "./components/WeddingColours.jsx";
import WeddingMaterial from "./components/WeddingMaterial.jsx";
import Gallery from "./components/Gallery.jsx";
import RSVP from "./components/RSVP.jsx";
import GuestWishes from "./components/GuestWishes.jsx";
import GiftSupport from "./components/GiftSupport.jsx";
import Contact from "./components/Contact.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="font-body text-ink">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Countdown />
        <OurStory />
        <Events />
        <WeddingColours />
        <WeddingMaterial />
        <Gallery />
        <RSVP />
        <GuestWishes />
        <GiftSupport />
        <Contact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
