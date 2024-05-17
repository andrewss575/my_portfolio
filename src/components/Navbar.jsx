import React, { useState } from "react"; //useSte is for iterative feautres
import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils"; //allows to get images


//here in our navbar function, we are creating the 4 different tabs so that if they were to be clicked
//from our navbar, it would take us to the corresponding section of the webpage

//the classname arguments in the tags are styles that we defined in their respected css files
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Portfolio
        </a>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };