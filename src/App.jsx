import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
import gsap from "gsap";
import React from "react";

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-4xl font-bold text-indigo-600">Hello, GSAP!</h1>
    </div>
  );
};
export default App;
