import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import Scroll from "./components/Scroll";
import scroll1 from "./images/scroll1.png";
import scroll2 from "./images/scroll2.png";
import scroll3 from "./images/scroll3.png";
import scroll4 from "./images/scroll4.png";
function App() {
  const images = [scroll1, scroll2, scroll3, scroll4];

  return (
    <div className="">
      <HeroSection />

      <Scroll images={images} speed={20} height="90px" />

      <InfoSection />
    </div>
  );
}

export default App;
