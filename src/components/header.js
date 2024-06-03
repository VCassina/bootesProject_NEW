import React from "react";

function Header() {
  return (
    <header className="flex w-full justify-between bg-yellow-500">
        <img src="" alt="LOGO BOOTES DEV"/>
        <nav>
            <ul className="flex">
                <li>HOME</li>
                <li>L'équipe</li>
                <li>Tarifs</li>
                <li>Réalisations</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;