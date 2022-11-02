import React from "react";
import { useState, useEffect } from "react";
import "../../src/traffic.css";

const TrafficLight = () => {
  const [currentlySelected, setCurrentlySelected] = useState(0);
  const colorArr = [
    {
      color: "green",
      id: 1,
    },
    {
      color: "yellow",
      id: 2,
    },
    {
      color: "red",
      id: 3,
    },
  ];


  let changeLights = () => {
    
      setTimeout(() => {
        setCurrentlySelected(currentlySelected + 1);
        if(currentlySelected === 3) setCurrentlySelected(0)
      }, 2000);
      // setCurrentlySelected(0);
    ;
    // setCurrentlySelected(color.id)
  };

  useEffect(() => {
    changeLights();
  }, [currentlySelected]);

  console.log(currentlySelected);
  return (
    <div className="main">
      {colorArr.map((color, id) => (
        <div
          key={id}
          className={color.color}
          style={{ opacity: currentlySelected === id ? 1 : 0.3 }}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;
