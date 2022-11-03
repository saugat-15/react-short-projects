// import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import Box from "./components/Box";
import Names from "./components/Names";
import TrafficLight from "./components/TrafficLight";
import Fetch from "./components/Fetch";

const App = () => {
  const [count, setCount] = useState(50);
  const [isChanged, setIsChanged] = useState(false);

  const changeStatus = () => {
    setIsChanged(!isChanged);
    console.log(isChanged)
    isChanged ===  true ? setCount(count + 1) : setCount(count)
  }
  // const div = document.querySelector('div');
  // const [color, setColor] = useState('red')

  // const arr = [
    //   {
  //     name: "kaylin",
  //   },
  //   {
  //     name: "saugat",
  //   },
  // ];
  // // const [count, setCount] = useState(0);
  // const [name, setName] = useState(arr);

  useEffect(() => {

  }, [isChanged])
  

  

  // // useEffect(() => {
  // //   updateNames();
  // // }, []);
  
  // const deleteName = (item) => {
    
    //   const x = name.filter((name) => {
      //     return name !== item;
      //   })
      //   console.log(x);
      //   setName(x);
      
      // }
      
      // console.log(name);
      // console.log(newNames)
  const colorArr = ['red', 'green', 'blue', 'purple']
  

  // console.log(color);
      
  // const changeColor = () => {
  //    colorArr.forEach((color, index) => setColor(color))
    

  // }
// console.log(color);
  return (
    // <div className="app">
    //   <ul>
    //     {name.map((item, id) => (
    //       <li key={id}>{item.name}
    //       <button onClick={()=>deleteName(item,id)}> delete </button>
    //       </li>
    //     ))}
    //   </ul>
    //   </div>

    // <div>
    //   {colorArr.map((item) => <Box item={ item } />)}
    //   </div>
    <>
    {/* {count}
      <button onClick={changeStatus}>change status</button> */}
      {/* <Names /> */}
      <TrafficLight />
      {/* <Fetch /> */}
    {/* </div> */}
      </>
    
  );
};

export default App;

