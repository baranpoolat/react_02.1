import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card title="Reserve" icon="fa-solid fa-hotel" color="brown" />
        </div>
        <div className="col-md-4">
          <Card title="Resturant" icon="fa-solid fa-utensils" color="green" />
        </div>
        <div className="col-md-4">
          <Card title="Spa" icon="fa-solid fa-person-swimming" color="blue" />
        </div>
      </div>
    </div>
  );
};

export default Services;
