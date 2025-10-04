import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);
import gsap from "gsap";
import React from "react";

const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};
export default App;
