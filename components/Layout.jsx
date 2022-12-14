import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="m-2 p-2 md:m-4 md:px-4 h-screen">
      <Navbar />
      {children}
    </div>
  );
}
