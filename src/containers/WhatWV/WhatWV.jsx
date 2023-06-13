import React from "react";
import { Feature } from "../../components";
import "./WhatWV.css";

const WhatWV = () => {
  return (
    <div className="gpt3__whatGPT3 section__margin" id="whatwv">
      <div className="gpt3__whatGPT3-feature">
        <Feature
          title="Who we are"
          text="We are a professionally managed firm with a team of skilled and experienced employees for efficient work execution. Our organization is an independent recruitment agency, and we strive to provide professional services to our clients. Electrical, scaffolding, operations and maintenance, civil works, and facility support services are all expertly met by the organization"
        />
      </div>
      <div className="gpt3__whatGPT3-heading">
        <h1 className="gradient__text">
          The services we provide with high standard of workmanship
        </h1>
      </div>
      <div className="gpt3__whatGPT3-container">
        <Feature
          title="Manpower Supply"
          text="We supply all categories of manpower
          from labor/helper up to well qualified
          engineers on hourly or monthly
          contractual basis
          "
        />
        <Feature
          title="Equipment Supply"
          text="At Western Visions we supply all categories of equipments
          for construction site on hourly or monthly
          contractual basis
          "
        />
        <Feature
          title="Trading/Contracting"
          text="General Trading of consumables and
          safety items which is required by all types
          of establishments. We're capable of executing medium-scale civil
          and mechanical job"
        />
      </div>
    </div>
  );
};

export default WhatWV;
