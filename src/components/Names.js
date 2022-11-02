import React, { useEffect, useState } from "react";
// import '../App.css';

const Names = () => {
  const [nameArr, setNameArr] = useState(["ram",  "saugat", "ram", "yuvan"]);
  const uniqueArr = [...new Set(nameArr)];
  const [isDuplicate, setIsDuplicate] = useState("");
  // const [isTrue, setIsTrue] = useState(false);
  // let tempArr = [];

  function checkDuplicate() {
    nameArr.forEach((name) => {
      uniqueArr.forEach((uniq) => {
        if (nameArr.indexOf(name) === uniqueArr.indexOf(uniq)) {
          // console.log(name);
          setIsDuplicate(name);
        } else if (nameArr.indexOf(name) === uniqueArr.indexOf(uniq)) {
          
          setIsDuplicate('')
        }
      });
    });
  }
  // console.log(uniqueArr);

  const deleteName = (id) => {
    const x = nameArr.filter((name, index) => id!== index )
    console.log(x);
    setNameArr(x);
  };

  useEffect(() => {
    checkDuplicate()
  }, [deleteName])

  // deleteName();

  // checkDuplicate();

  // console.log(isDuplicate);

  // function countOccurence(findNum){
  //     let count = 0;
  //     tempArr.map(num => {
  //       if(num === findNum){
  //         count++
  //       }
  //     })
  //     if (count > 1) {
  //      count ++
  //     } return count
  // }

  // function filterName() {
  //     let a = [];
  //     nameArr.map(name => {
  //         if (!a.includes(name)) {
  //             a.push(name)
  //         } else {
  //             return name;
  //         }
  //     })
  //   // console.log(a);
  // }

  // console.log(filterName())

  // useEffect(() => {
  //     nameArr.map(item => {

  //         countOccurence(nameArr.indexOf(item))
  //     })
  // }, [isTrue])

  return (
    <div>
      {nameArr.map((item, id) => (
        <li
          key={id}
          style={{ color: item === isDuplicate ? "red" : "black" }}
        >
          {item}
          <button
            onClick={() => {
              deleteName(id);
              // checkDuplicate();
            }}
          >
            delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Names;
