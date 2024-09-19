import React from "react";
import Home from "./Home";
import Info from "./Info/Info";
import MapPage from "./MapPage/MapPage";

export default function HomePage() {
  return (
    <div>
      <Home />
      <Info />
      <MapPage />
    </div>
  );
}
