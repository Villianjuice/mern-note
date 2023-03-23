import React from "react";
import { links } from "./links";
import NavbarLink from "./NavbarLink";

export const Navbar = () => {
  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm">
        E
      </span>
      <ul className="flex gap-8">
        {links.map(link => 
          <NavbarLink key={link.title} title={link.title} to={link.to}/>
        )}
      </ul>
      <div className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2'>
         <button>Войти</button>
      </div>
    </div>
  );
};
