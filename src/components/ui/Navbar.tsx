import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavLinks, NavLogo } from "../../styles/Navbar";

const NAV_LINKS = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Categories",
    path: "/categories",
  },
  {
    title: "Cart",
    path: "/cart",
  },
];

export default function NavbarComponent() {
  return (
    <Navbar>
      <NavLogo>
        <h1>TaquitoStore</h1>
      </NavLogo>
      <NavLinks>
        {NAV_LINKS.map((link, index) => {
          return <Link to={link.path}>{link.title}</Link>;
        })}
      </NavLinks>
    </Navbar>
  );
}
