import Navbar from "./components/Navbar.jsx";
import AudioToggle from "./components/AudioToggle.jsx";
import IntroSplash from "./components/IntroSplash.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import BibleVerse from "./components/BibleVerse.jsx";
import Countdown from "./components/Countdown.jsx";
import OurStory from "./components/OurStory.jsx";
import Events from "./components/Events.jsx";
import WeddingColours from "./components/WeddingColours.jsx";
import WeddingMaterial from "./components/WeddingMaterial.jsx";
import Gallery from "./components/Gallery.jsx";
import RSVP from "./components/RSVP.jsx";
import GiftSupport from "./components/GiftSupport.jsx";
import Contact from "./components/Contact.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="font-body bg-obsidian text-ivory antialiased">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <BibleVerse />
        <Countdown />
        <OurStory />
        <Events />
        <GiftSupport />
        <WeddingColours />
        <WeddingMaterial />
        <Gallery />
        <RSVP />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <AudioToggle />
      {/* Rendered last so its scroll-lock applies after Navbar's mount effect. */}
      <IntroSplash />
    </div>
  );
}

export default App;
