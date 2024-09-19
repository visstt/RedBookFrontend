import React from "react";
import Home from "./Home";
import Info from "./Info/Info";
import MapPage from "./MapPage/MapPage";
import AreaPage from "./AreaPage/AreaPage";

export default function HomePage() {
  return (
    <div>
      <Home />
      <Info />
      <MapPage />
      <AreaPage />
    </div>
  );
}
