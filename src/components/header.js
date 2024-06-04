import React from "react";
import logo from "../media/logoLandingWireframe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="items-center massiveComponent_container">
      <section className="massiveComponent_limitation flex justify-between items-center w-full">
        <img src={logo} alt="LOGO BOOTES DEV" className="h-16" />
      
        <nav className="basis-3/5">
          <ul className="flex justify-evenly items-center">
            <li>
              <a href="...">
              <FontAwesomeIcon icon={faHouse} />
              </a>
            </li>
            <li>
              <a href="...">
                <p>L'équipe</p>
              </a>
            </li>
            <li>
              <a href="...">
                <p>Tarifs</p>
              </a>
            </li>
            <li>
              <a href="...">
                <p>Réalisations</p>
              </a>
            </li>
            <li>
              <a href="...">
                <p className="contactButton">Contacts</p>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
