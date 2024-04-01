import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weathering from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceListData = [
  {
    imgUrl: weathering,
    title: "Calculate Weather",
    desc: "Neque porro quisquam est qui dolorem",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Neque porro quisquam est qui dolorem",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Neque porro quisquam est qui dolorem",
  },
];
const ServiceList = () => {
  return (
    <>
      {serviceListData.map((item, index) => (
        <Col lg="3" md="6" sm='12' className="mb-4" key={index}>
          <ServiceCard item={item}/>
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
