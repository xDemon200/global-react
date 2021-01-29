import React, { useEffect, useState } from "react";
import Home from "./containers/home";
import Work from "./containers/work";
import About from "./containers/about";
import Contact from "./containers/contact";
import Experiments from "./containers/experiments";

function App() {
  const [currentPath, setCurrentPath] = useState("#0");

  useEffect(() => {
    setCurrentPath(`#0`);
  }, []);

  const openMenu = () => {
    let perspective = document.getElementsByClassName("perspective");
    let outerNav = document.getElementsByClassName("outer-nav");
    let outerNavReturn = document.getElementsByClassName("outer-nav--return");
    perspective[0].classList.add("perspective--modalview");
    setTimeout(() => {
      perspective[0].classList.add("effect-rotate-left--animate");
    }, 25);

    outerNav[0].classList.add("is-vis");
    outerNavReturn[0].classList.add("is-vis");
    let childs = outerNav[0].querySelectorAll("li");
    for (var i = 0; i < childs.length; ++i) {
      childs[i].classList.add("is-vis");
    }
  };

  const closeMenu = () => {
    let perspective = document.getElementsByClassName("perspective");
    let outerNav = document.getElementsByClassName("outer-nav");
    let outerNavReturn = document.getElementsByClassName("outer-nav--return");
    perspective[0].classList.remove("effect-rotate-left--animate");
    setTimeout(() => {
      perspective[0].classList.remove("perspective--modalview");
    }, 400);
    outerNav[0].classList.remove("is-vis");
    outerNavReturn[0].classList.remove("is-vis");
    let childs = outerNav[0].querySelectorAll("li");
    for (var i = 0; i < childs.length; ++i) {
      childs[i].classList.remove("is-vis");
    }
  };

  const navigate = (from) => {
    setCurrentPath(from);
    closeMenu();
  };

  return (
    <>
      <div className="device-notification">
        <a className="device-notification--logo" href="#0">
          <p>Juan Carlos</p>
        </a>
        <p className="device-notification--message">
          Global has so much to offer that we must request you orient your
          device to portrait or find a larger screen. You won't be disappointed.
        </p>
      </div>
      <div className="perspective effect-rotate-left">
        <div className="container">
          <div className="outer-nav--return" onClick={closeMenu} />
          <div
            id="viewport"
            className="l-viewport"
            style={{
              touchAction: "none",
              userSelect: "none",
              WebkitUserDrag: "none",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            }}
          >
            <div className="l-wrapper">
              <header className="header">
                <a className="header--logo" href="#0">
                  <p>Juan Carlos</p>
                </a>
                <button className="header--cta cta">Hire Us</button>
                <div className="header--nav-toggle" onClick={openMenu}>
                  <span />
                </div>
              </header>
              <nav className="l-side-nav">
                <ul className="side-nav">
                  <li
                    onClick={() => navigate("#0")}
                    className={currentPath === "#0" ? "is-active" : ""}
                  >
                    <span>Home</span>
                  </li>
                  <li
                    onClick={() => navigate("#1")}
                    className={currentPath === "#1" ? "is-active" : ""}
                  >
                    <span>Works</span>
                  </li>
                  <li
                    onClick={() => navigate("#2")}
                    className={currentPath === "#2" ? "is-active" : ""}
                  >
                    <span>About</span>
                  </li>
                  <li
                    onClick={() => navigate("#3")}
                    className={currentPath === "#3" ? "is-active" : ""}
                  >
                    <span>Contact</span>
                  </li>
                  <li
                    onClick={() => navigate("#4")}
                    className={currentPath === "#4" ? "is-active" : ""}
                  >
                    <span>Hire us</span>
                  </li>
                </ul>
              </nav>
              <ul className="l-main-content main-content">
                {currentPath === "#0" && <Home />}
                {currentPath === "#1" && <Work />}
                {currentPath === "#2" && <About />}
                {currentPath === "#3" && <Contact />}
                {currentPath === "#4" && <Experiments />}
              </ul>
            </div>
          </div>
        </div>
        <ul className="outer-nav">
          <li
            onClick={() => navigate("#0")}
            className={currentPath === "#0" ? "is-active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => navigate("#1")}
            className={currentPath === "#1" ? "is-active" : ""}
          >
            Works
          </li>
          <li
            onClick={() => navigate("#2")}
            className={currentPath === "#2" ? "is-active" : ""}
          >
            About
          </li>
          <li
            onClick={() => navigate("#3")}
            className={currentPath === "#3" ? "is-active" : ""}
          >
            Contact
          </li>
          <li
            onClick={() => navigate("#4")}
            className={currentPath === "#4" ? "is-active" : ""}
          >
            Hire us
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
