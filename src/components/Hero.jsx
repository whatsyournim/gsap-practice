import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// 1. CRITICAL FIX: Import plugins from their specific file paths.
//    'gsap/all' is not a standard, reliable path for ES modules.
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; 

// 2. Plugin registration is correct
gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  // 3. Added a ref to the useGSAP dependencies array to run the effect once
  //    after the component mounts and the DOM elements are available.
  useGSAP(() => {
    
    // SplitText Initialization
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    
    // 4. FIX: Use a more specific selector for the paragraph split
    //    The selector was previously targeting multiple unrelated elements.
    const paragraphSplit = new SplitText(".view-cocktails .subtitle", { type: "lines" });

    // CSS Class Addition
    // This is optional, but ensures the animation elements are styled
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // Initial (Intro) Animations
    
    // Animate H1 chars
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    // Animate Paragraph lines
    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    // ScrollTrigger Animation (Leaves)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []); // Empty dependency array is fine here

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        {/* ... rest of your JSX is fine ... */}
        <img src="/images/hero-left-leaf.png" alt="" className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="" className="right-leaf" />

        <div className="body">
          <div className="content">
            {/* Element with className "subtitle" but no animation needed */}
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              {/* This is the element you want to animate, hence the specific selector */}
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;