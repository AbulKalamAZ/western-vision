import React from "react";
import Tick from "../../assets/tick.svg";
import "./features.css";

const featuresData = [
  {
    title: "Engineers/QA/QC",
    services: [
      "Mechanical QC / Engineer",
      "Civil QC / Engineer",
      "Electrical QC/Engineer",
      "Instrumentation QC/ Engineer",
      "Structural QC / Engineer",
      "Piping QC/ Engineer",
      "Safety Manager / Engineer",
      "Painting and insulation Engineer",
      "Planning and Scheduling",
      "Estimation Engineer",
      "Quality Control Engineer",
      "Safety Engineer",
    ],
  },
  {
    title: "Supervisors / Inspectors",
    services: [
      "Civil Surveyor",
      "Safety Inspector",
      "Electrical Supervisors / Foreman",
      "Instrument Supervisors / Foreman",
      "Piping Supervisors / Foreman",
      "Mechanical Supervisors/ Foreman",
      "Structural Supervisors / Foreman",
      "Rigging Supervisor",
      "Material Coordinator",
      "Auto cad operator",
    ],
  },
  {
    title: "General Workforce",
    services: [
      "Light Driver",
      "Heavy Driver",
      "Mechanic Helper",
      "Crane Operator",
      "Forklift Operator",
      "Bob Cat Operator",
      "Man Lift Operator",
      "Electrician",
      "Plumber",
      " Masson",
      "Carpenter",
      " Painter",
      "Steel fixer",
      "Labor",
    ],
  },
  {
    title: "Electro-Mechanical Workforce",
    services: [
      "Pipe Fabricator",
      "Pipe Fitter",
      "Millwright",
      "Instrument Technician",
      "Instrument Fitter",
      "Industrial Electrician",
      "Tig & Arc Welder/ARMCO Certified",
      "6G & 3G Welder/ARMCO Certified",
      "Rigger II TUV/ARMCO Certified",
      "Rigger III TUV/ARMCO Certified",
      "Scaffolder TUV/ARMCO certified",
    ],
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="services">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          We provide variety of services from Supervisors / Inspectors to
          Engineers / QA / QC and differnent workforces
        </h1>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((item, index) => {
          return (
            <div className="gpt3__features-item-wrapper" key={index}>
              <div className="gpt3__features-item">
                <h4 className="gpt3__features-item-title">{item.title}</h4>
                <div className="gpt3__features-detail">
                  {item.services.map((service, index) => (
                    <div key={index} className="gpt3__features-detail-wrapper">
                      <div className="details-icon">
                        <img src={Tick} alt="icon" />
                      </div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
