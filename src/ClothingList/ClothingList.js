import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";
//import { RoleWrapper } from "../RoleWrapper/RoleWrapper";
import "./ClothingList.css";
//base clothing list
const C_LIST = [
    { name: "Thin Belt", price: "$14.99", description: "Belt", stock: "12" },
    { name: "Long Belt", price: "$24.99", description: "Belt", stock: "5" },
    { name: "Beanie", price: "$29.99", description: "Hat", stock: "22" },
    { name: "Toque", price: "$19.99", description: "Hat", stock: "3" },
    { name: "Fingerless Gloves", price: "$14.99", description: "Gloves", stock: "7"},
    { name: "Mittens", price: "$17.99", description: "Gloves", stock: "9" },
    { name: "Purple T-shirt", price: "$29.99", description: "T-shirt", stock: "10"},
    { name: "Blue T-shirt", price: "$29.99", description: "T-shirt", stock: "4" },
    { name: "Black Hoodie", price: "$49.99", description: "Sweater", stock: "5" },
    { name: "Red Sweater", price: "$34.99", description: "Sweater", stock: "11" },
    { name: "Jeans", price: "$54.99", description: "Pants", stock: "20" },
    { name: "Sweat Pants", price: "$64.99", description: "Pants", stock: "12" },
  ];
//main function
export const ClothingList = () => {
  console.log("Clothing List");
  const [searchValue, setSearchValue] = useState("")
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const filtered = !searchValue
    ? C_LIST
    : C_LIST.filter((cL) =>
      cL.name.includes(searchValue));
  
  console.log(C_LIST);

  const form = (
    <div className="update-form" >
      <h2>Search Filtering</h2>
      
      <input 
        type="text"
        name="search"
        value={searchValue}
        onChange={handleSearchChange}
      />
      
      <ListGroup>
        {filtered.map((cL) => {
          return (
            <ListGroup.Item key={cL.name}>{cL.name} {cL.description} {cL.price} {cL.stock}</ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  );
  return form;
  
};

export default ClothingList;
