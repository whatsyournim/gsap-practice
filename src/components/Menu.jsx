import React from "react";
("use client");
import { allCocktails } from "../../constants/index.js";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      ".cocktail img",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      ".details h2",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details p",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);

  const totalCocktails = allCocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailat = (indexOffset) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailat(0);
  const preCocktail = getCocktailat(-1);
  const nextCocktail = getCocktailat(1);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="overflow-hidden"
    >
      <img src="/images/slider-left-leaf.png" alt="" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="" id="m-right-leaf" />

      <h2 id="menu-headong" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`
             ${
               isActive
                 ? // If 'isActive' is true, use solid white text and a solid white border.
                   "text-white border-white"
                 : // Otherwise, use semi-transparent white text and a semi-transparent white border.
                   "text-whit/50 border-white/50"
             }
            `}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{preCocktail.name}</span>
            <img src="/images/right-arrow.png" alt="" aria-hidden="true" />
          </button>
          <button
            className="text-rigth"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="" aria-hidden="true" />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" alt="" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
