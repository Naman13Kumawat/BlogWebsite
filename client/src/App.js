import React from "react";
import { Sidebar, Discover, Searchbar, Profilebar } from "./components";

import "./App.scss";

export default function App() {
  return (
    <>
    <Sidebar />
    <div className="flex_container">
      <div className="main">
        <Searchbar />
        <Discover />
      </div>
      <Profilebar />
    </div>
    </>
  );
}