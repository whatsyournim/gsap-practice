import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const About = () => {
  // useGSAP is a React hook from GSAP that manages animations within a component's lifecycle.
  // It ensures that animations are properly created and cleaned up to prevent memory leaks.
  useGSAP(() => {
    // Use the SplitText plugin to break the text inside the <h2> of the #about section into individual words.
    // Each word will be wrapped in its own <div>, allowing for individual animation.
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    // Create a GSAP timeline that is controlled by the user's scroll position.
    const scrollTimeline = gsap.timeline({
      // Configure the scroll trigger for this timeline.
      scrollTrigger: {
        // The animations will start when the element with the ID "#about" is in view.
        trigger: "#about",
        // The trigger activates when the top of the "#about" element hits the center of the viewport.
        start: "top center",
      },
    });

    // Chain animations to the timeline.
    scrollTimeline
      // First animation: Animate the words of the title.
      .from(titleSplit.words, {
        // Target the array of word elements created by SplitText.
        opacity: 0, // Start from being fully transparent.
        duration: 1, // The animation will last 1 second.
        yPercent: 100, // Start 100% of their own height below their final position (slide up effect).
        ease: "expo.out", // Apply a smooth, decelerating easing function.
        stagger: 0.02, // Each word starts animating 0.02 seconds after the previous one, creating a wave effect.
      })

      // Second animation: Animate the grid items.
      .from(
        ".top-grid div, .bottom-grid div", // Target all <div> elements within '.top-grid' and '.bottom-grid'.
        {
          opacity: 0, // Start from being fully transparent.
          duration: 1, // Animation duration of 1 second.
          ease: "power1.inOut", // Apply a gentle acceleration and deceleration ease.
          stagger: 0.04, // Stagger the animation of each grid item by 0.04 seconds.
        },
        "-=0.5" // Position parameter: Start this animation 0.5 seconds *before* the previous one completes, creating an overlap.
      );
  });
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail that we serve is a reflection of our obsession with
              detail - from the first muddle to the final garnish. That care is
              what turns a simple drink into somethihn truly memorable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>

              <p className="text-sm text-white-100">
                More than +1200 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
