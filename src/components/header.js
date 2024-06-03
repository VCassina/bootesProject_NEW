import React from "react";

function Header() {
  return (
    <header className="items-center massiveComponent_container--color1">
      <section className="massiveComponent_limitation flex h-10 ">
        <img src="" alt="LOGO BOOTES DEV" className="basis-1/3" />
        <nav className=" w-full">
          <ul className="flex justify-evenly">
            <li>
              <a href="...">
                <p>HOME</p>
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
                <p>Contacts</p>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
