import React from "react";
import Data from "./Data";
import { useState } from "react";
import { Navbar } from "./Navbar";
import HomeBody from "./HomeBody";
import { HomeServices } from "./HomeServices";
export const Home = () => {
  const [items, setItems] = useState(Data);
  return (
    <div>
      <Navbar />
      <HomeBody />
      <HomeServices data={items} />
    </div>
  );
};
