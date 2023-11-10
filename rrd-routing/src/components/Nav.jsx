import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ links }) {
  return (
    <nav className="flex flex-col items-center justify-between bg-[#1D267D] py-3">
      <ul className="flex flex-row gap-4">
        {links.map((item) => (
          <li className="border-b" key={item.path}>
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
