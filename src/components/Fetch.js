import React, { useEffect, useState } from "react";
import Card from '../components/Card';
import '../css/card.css'

const Fetch = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState([]);

  const displayName = () => {
    fetch("http://127.0.0.1:3000/register")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  };

  const fetchDbArr = () => {
    fetch('http://127.0.0.1:3000/products')
    .then((res) => res.json())
    .then((data) => setProducts(data))
  }

  // console.log(products)

  const handleSignUp = () => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ name, address, password }),
      headers: {"Content-Type" : "application/json"},
    };
    fetch("http://127.0.0.1:3000/register", requestOptions);
  };

  useEffect(() => {
    displayName();
    // fetch('http://127.0.0.1:3000/api/notes');
  }, []);

  // console.log(products)
  return (
    <div>
      {/* <input
        placeholder="name"
        // value={name}
        onKeyUp={(e) => setName(e.target.value)}
      />
      <input
        placeholder="address"
        onKeyUp={(e) => setAddress(e.target.value)}
      />
      <input
        placeholder="password"
        onKeyUp={(e) => setPassword(e.target.value)}
      />
      {name}
      {address}
      {password}
      <button
        onClick={() => {
          handleSignUp();
        }}
      >
        Submit
      </button> */}
      <button onClick={() => fetchDbArr()}>Fetch Data</button>
      <div className="cards">
      {products.map(product => <Card product={product}/>)}
      </div>
      
    </div>
  );
};

export default Fetch;
