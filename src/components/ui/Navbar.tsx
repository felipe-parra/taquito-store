import React from "react";
import { Link } from "react-router-dom";

const NavLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav>
      <ul>
        {NavLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
