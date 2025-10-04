import { navLinks } from "../../constants/index.js";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// 1. Fixed the import for all plugins to be clear and correct.
//    ScrollTrigger is imported separately. CSSRulePlugin is no longer 
//    part of "gsap/all" in modern GSAP setups and should be imported 
//    from "gsap/CSSRulePlugin".
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

// 2. Moved plugin registration inside the component or ensured it's done before use.
//    Registering outside the component is common, but inside the useGSAP setup
//    ensures it runs before the timeline is created.
//    NOTE: I removed CSSRulePlugin from the import/register if you're not using it.
gsap.registerPlugin(ScrollTrigger); 

const Navbar = () => {
  useGSAP(() => {
    
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { 
        // 3. Fixed the initial value for backdropFilter
        backdropFilter: "blur(0px)",
        // 4. Fixed the initial alpha value for backgroundColor
        backgroundColor: "rgba(0,0,0,0)",
      },
      {
        // 5. Fixed the backdrop-filter CSS property name to camelCase
        backdropFilter: "blur(10px)", 
        
        // 6. Fixed the final background color value (assuming you wanted a semi-transparent black)
        //    The string "#000000050" is an invalid hex/alpha color. 
        //    Use RGBA or a valid 8-digit hex code (e.g., #00000080 for 50% opacity).
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  
  return (
    <nav>
      {/* ... rest of your JSX ... */}
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p>Velver Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;