import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "../redux/features/auth/auth.slice";
import { Navbar } from "./Navbar/Navbar";

export const Layout = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe())
  }, [])
  return (
    <div className="container mx-auto">
      <Navbar />
      {children}
    </div>
  );
};
