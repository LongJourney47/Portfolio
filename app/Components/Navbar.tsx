import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Navbar.module.css";
import Email from "@/app/components/Email";
import Social from "@/app/components/Social";
import { TbLetterW } from "react-icons/tb";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className={Styles.Navbar}>
          <aside className={Styles.Title}>
            <span>
              <IconContext.Provider value={{ size: "2em", color: "#71eccbe4" }}>
                <TbLetterW className={Styles.Wletter} />
              </IconContext.Provider>
            </span>
          </aside>
          <aside className={Styles.Links}>
            <ul>
              {/* <li>
                <Link className={Styles.LinkStyles} to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className={Styles.LinkStyles} to="/About">
                  About {" "}
                </Link>
              </li>

              
                <li>
                  <Link className={Styles.LinkStyles} to="/Skills">
                    Skills{" "}
                  </Link>
                </li>
              

              <li>
                <Link className={Styles.LinkStyles} to="/Projects">
                  Projects{" "}
                </Link>
              </li> */}

              <li>
                <Link className={Styles.LinkStyles} to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className={Styles.LinkStyles} to="/About">
                  About{" "}
                </Link>
              </li>

              <li>
                <Link className={Styles.LinkStyles} to="/Skills">
                  Skills{" "}
                </Link>
              </li>

              <li>
                <Link className={Styles.LinkStyles} to="/Projects">
                  Projects{" "}
                </Link>
              </li>
            </ul>
          </aside>
        </nav>
      </header>

      <Email />
      <Social />
    </>
  );
};

export default Navbar;
