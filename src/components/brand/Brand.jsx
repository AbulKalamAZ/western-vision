import React from "react";
import "./brand.css";
import {
  alAyuni,
  alRushaid,
  azmeel,
  bcc,
  powerChina,
  redSea,
  sepco,
  tiejun,
} from "./imports.js";

const Brand = () => {
  return (
    <div className="gpt3__brands section__padding">
      <div>
        <img src={redSea} alt="redSea" />
      </div>
      <div>
        <img src={powerChina} alt="powerChina" />
      </div>
      <div>
        <img src={sepco} alt="sepco" />
      </div>
      <div>
        <img src={tiejun} alt="tiejun" />
      </div>
      <div>
        <img src={azmeel} alt="azmeel" />
      </div>
      <div>
        <img src={alAyuni} alt="alAyuni" />
      </div>
      <div>
        <img src={alRushaid} alt="alRushaid" />
      </div>
      <div>
        <img src={bcc} alt="bcc" />
      </div>
    </div>
  );
};

export default Brand;
