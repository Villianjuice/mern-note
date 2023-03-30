import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { checkIsAuth, logout } from "../../redux/features/auth/auth.slice";
import { links } from "./links";
import NavbarLink from "./NavbarLink";

export const Navbar = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    toast('Вы вышли из системы')
  }
  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm">
        E
      </span>
      {isAuth ? (
        <ul className="flex gap-8">
          {links.map((link) => (
            <NavbarLink key={link.title} title={link.title} to={link.to} />
          ))}
        </ul>
      ) : null}

      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
        {isAuth ? <button onClick={handleLogout}>Выйти</button> : <Link to="/login">Войти</Link>}
      </div>
    </div>
  );
};
