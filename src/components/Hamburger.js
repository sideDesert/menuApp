import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Hamburger.scss";

import hyderabad from "../images/hyderabad.jpg";
import delhi from "../images/delhi.jpg";
import newyork from "../images/new-york.jpg";
import tokyo from "../images/tokyo.jpg";
import mumbai from "../images/mumbai.jpg";

import gsap from "gsap";

const cities = [
  { name: "Delhi", image: delhi },
  { name: "Hyderabad", image: hyderabad },
  { name: "New York", image: newyork },
  { name: "Tokyo", image: tokyo },
  { name: "Mumbai", image: mumbai },
];

const Hamburger = ({ state }) => {
  //vars for animated dom nodes
  let menu = useRef();
  let revealMenu = useRef();
  let revealMenuBackground = useRef();
  let cityBackground = useRef();
  let line1 = useRef();
  let line2 = useRef();
  let line3 = useRef();
  let info = useRef();

  useEffect(() => {
    if (state.clicked === false) {
      //close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });

      gsap.to(menu, {
        duration: 1,
        css: {
          display: "none",
        },
      });
    } else if (
      state.clicked === true ||
      (state.initial === null && state.clicked === true)
    ) {
      //open menu
      gsap.to(menu, {
        duration: 0,
        css: {
          display: "block",
        },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInOut(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.07,
      },
    });
  };
  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 120,
      delay: 0.6,
      ease: "power3.out",
      stagger: {
        amount: 0.4,
      },
    });
  };
  const fadeInOut = (node) => {
    gsap.from(node, {
      duration: 1,
      delay: 0.4,
      opacity: 0,
      skewY: 0,
      y: 50,
      ease: "power3.out",
    });
  };

  const handleCity = (city) => {
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${city}) center center/cover`,
      opacity: 0,
      backgroundRepeat: "no-repeat",
    });
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      skewY: 0,
      ease: "power3.inOut",
    });
  };
  const handleCityReturn = (city) => {
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 0,
      ease: "power3.inOut",
      skewY: 1,
    });
  };

  const handleHoverEnter = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut",
    });
  };
  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <div className="hamburger-menu" ref={(el) => (menu = el)}>
      <div
        className="menu-secondary-background-color"
        ref={(el) => (revealMenuBackground = el)}
      ></div>
      <div className="menu-layer" ref={(el) => (revealMenu = el)}>
        <div
          className="menu-city-background"
          ref={(el) => {
            cityBackground = el;
          }}
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      ref={(el) => (line1 = el)}
                      to="/oppurtunities"
                      onMouseEnter={(e) => {
                        handleHoverEnter(e);
                      }}
                      onMouseOut={(e) => {
                        handleHoverExit(e);
                      }}
                    >
                      Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link
                      ref={(el) => (line2 = el)}
                      to="/solutions"
                      onMouseEnter={(e) => {
                        handleHoverEnter(e);
                      }}
                      onMouseOut={(e) => {
                        handleHoverExit(e);
                      }}
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      ref={(el) => (line3 = el)}
                      to="/contact-us"
                      onMouseEnter={(e) => {
                        handleHoverEnter(e);
                      }}
                      onMouseOut={(e) => {
                        handleHoverExit(e);
                      }}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="info" ref={(el) => (info = el)}>
                <h3>Our Promises</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, recusandae non eveniet aperiam quia impedit libero,
                  consequatur labore esse vero similique culpa dolore soluta
                  nulla aliquam! Incidunt commodi dolores unde neque vero
                  numquam nobis explicabo excepturi, reiciendis nihil harum
                  maiores.
                </p>
              </div>
              <div className="locations">
                Locations:
                {cities.map((city, i) => {
                  return (
                    <span
                      key={city}
                      onMouseEnter={() => {
                        handleCity(city.image);
                      }}
                      onMouseOut={() => {
                        handleCityReturn(city.image);
                      }}
                    >
                      {city.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
