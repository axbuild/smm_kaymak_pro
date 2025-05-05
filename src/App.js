import AboutSection from "./sections/AboutSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import Quote from "./sections/Quote";
import { GlobalStyle } from "./styles/GlobalStyle";
import AdvantagesSection from "./sections/AdvantagesSection";
import BatterySection from "./sections/BatterySection";
import ColorSection from "./sections/ColorSection";
import CasesSection from "./sections/CasesSection";
import PricingSection from "./sections/PricingSection";
import { ColorContextProvider } from "./context/ColorContext";
import wallpaper0 from "./assets/3D-Model/textures/Wallpaper_baseColor.jpeg";
import wallpaper1 from "./assets/3D-Model/textures/Wallpaper_baseColor1.jpeg";
import { useRef, useEffect, useState } from "react";

function App() {
  const wallpapers = [wallpaper0, wallpaper1, wallpaper0];
  const [wallIndex, setWallIndex] = useState(0);
  const heroRef = useRef();
  const middleRef = useRef();
  const endRef = useRef();

  useEffect(() => {
    const sections = [heroRef, middleRef, endRef];
    const handler = () => {
      const winH = window.innerHeight;
      let active = 0;
      sections.forEach((ref, idx) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < winH * 0.5 && rect.bottom > winH * 0.2) {
            active = idx;
          }
        }
      });
      setWallIndex(active);
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Quote />
      <PhoneModel wallpaper={wallpapers[wallIndex]} />
      <div ref={heroRef}><HeroSection /></div>
      <AboutSection />
      <DisplaySection />
      <div ref={middleRef}><AdvantagesSection /></div>
      <BatterySection />
      <ColorContextProvider>
        {/* <ColorSection /> */}
        <CasesSection />
      </ColorContextProvider>
      <div ref={endRef}><PricingSection /></div>
    </>
  );
}

export default App;
