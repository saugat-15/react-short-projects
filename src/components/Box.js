import React, { useEffect, useState } from "react";
import "../../src/App.css";

const Box = ({ item }) => {
  const [newDisplayProp, setNewDisplayProp] = useState("");
  //use two states to save values and render it on the screen
//   const [firstArg, setFirstArg] = useState("");
  const [secondArg, setSecondArg] = useState("");
  ////////////////////////////////
  const [divStyle, setDivStyle] = useState({
    backgroundColor: item,
  });

  const newObj = {
    firstArg: secondArg,
  };
//   const changeInput = () => {


//     // setFirstArg(objToAdd[0]);
//     // console.log(firstArg);
//     // setSecondArg(objToAdd[1]);
//     // console.log(objToAdd[0]);
//     // setDivStyle(
//     //     () => {
//     //         divStyle.firstArg = secondArg
//     //     }

//     // console.log(firstArg);
//     //   console.log(secondArg);
//     //   console.log(divStyle);
//     // )
//   };

    const renderProp = (val) => {
        let objToAdd = val.split("=");
        newObj[objToAdd[0].trim()] = `${objToAdd[1]}`;
        console.log(newObj);
    setDivStyle(newObj);
  };
  // setDivStyle(newObj)
  //   console.log(divStyle);

  return (
    <div className="app" style={divStyle}>
      <input
        onKeyUp={(e) => {
        //   changeInput(e.target.value);
       
          renderProp(e.target.value);
        }}
      ></input>
      {newDisplayProp}
    </div>
  );
};

export default Box;
