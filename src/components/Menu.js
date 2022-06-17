import "./Menu.scss";
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { useEffect } from "react";

const Menu = () => {
  const [state, setState] = useState({
    initial: true,
    clicked: null,
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState();

  const location = useLocation();
  useEffect(() => {
    setState({
      clicked: false,
      menuName: "Menu",
    });
  }, [location]);

  const handleMenu = () => {
    if (state.initial === true) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
      console.log(1);
    } else if (state.clicked === true) {
      disableMenu();
      setState((snap) => {
        return {
          clicked: !snap.clicked,
          menuName: "Menu",
        };
      });
      console.log(2);
    } else if (state.clicked === false) {
      disableMenu();
      setState((snap) => {
        return {
          clicked: !snap.clicked,
          menuName: "Close",
        };
      });
      console.log(3);
    }
  };

  const disableMenu = () => {
    setDisabled((snap) => !snap);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <nav className="menu">
        <div className="logo">
          <h2>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              मेन्यू
            </Link>
          </h2>
        </div>
        <div className="menu-button">
          <button onClick={handleMenu} disabled={disabled}>
            Click Karo
          </button>
        </div>
      </nav>
      <Hamburger state={state} />
      <Outlet />
    </header>
  );
};

export default Menu;
