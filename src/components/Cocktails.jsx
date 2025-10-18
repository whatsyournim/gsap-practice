import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../../constants/index.js";

const Cocktails = () => {
  // useGSAP is a React hook from GSAP that manages animations within a component's lifecycle.
  useGSAP(() => {
    // Create a GSAP timeline with a scroll trigger for the #cocktails section.
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails", // Start the animation when #cocktails enters the viewport.
        start: "top 30%",      // Animation starts when the top of #cocktails hits 30% from the top of the viewport.
        end: "bottom 80%",     // Animation ends when the bottom of #cocktails hits 80% from the top of the viewport.
        scrub: true,            // Sync the animation progress with the scroll position for a parallax effect.
      },
    });

    parallaxTimeline
      // Animate the left leaf: move it in from the left and bottom.
      .from("#c-left-leaf", {
        x: -100, // Start 100px left of its final position.
        y: 100,  // Start 100px below its final position.
      })

      // Animate the right leaf: move it in from the right and bottom.
      .from("#c-right-leaf", {
        x: 100,  // Start 100px right of its final position.
        y: 100,  // Start 100px below its final position.
      });
  });
  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" id="c-right-leaf" />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved cocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
