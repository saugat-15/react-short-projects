import React from "react";
import { useState, useEffect } from "react";
import "../../src/traffic.css";

const TrafficLight = () => {
  const [currentlySelected, setCurrentlySelected] = useState(0);
  const [removeEffect, setRemoveEffect] = useState(false);
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
      if (currentlySelected === 3) setCurrentlySelected(0);
    }, 1000);
    // setCurrentlySelected(0);z
    // setCurrentlySelected(color.id)
  };

  const resetOpacity = () => {
    setRemoveEffect(!removeEffect);
    console.log(removeEffect);
  };

  useEffect(() => {
    if (!removeEffect) {
      changeLights();
    } else if (removeEffect) {
      clearTimeout(changeLights);
      // setCurrentlySelected(4)
    }
  }, [currentlySelected, removeEffect]);

  console.log(currentlySelected);
  return (
    <div className="main">
      {colorArr.map((color, id) => (
        <div
          key={id}
          className={color.color}
          style={{ opacity: currentlySelected === id ? 1 : 0.4 }}
        ></div>
      ))}

      <button
        onClick={() => {
          resetOpacity();
        }}
      >
        Toggle Opacity
      </button>
    </div>
  );
};

export default TrafficLight;
