import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";
//import { RoleWrapper } from "../RoleWrapper/RoleWrapper";
import "./UpdateClothing.css";
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
export const UpdateClothing = () => {
  const [clothes, setClothes] = useState(C_LIST);
  console.log("Update Clothing rendered");
  
  //const [fList, setFList] = useState(clothes)
  const [searchValue, setSearchValue] = useState("")
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const filtered = !searchValue
    ? clothes
    : clothes.filter((cL) =>
      cL.name.includes(searchValue));
  
  //variable created to hold the default values for adding clothing
  var selectedItem= { name: "", price: "", description: "", stock: "" };
  
  const handleAddItem = (item) => {
    //variable to determine whether item is already in array or not
    const existingItem = clothes.findIndex(
      (clothesItem) => clothesItem.name === selectedItem.name
    );
    //findIndex will return -1 if the item is not in the list
    //if statement only applies when value above 0
    if (existingItem >= 0) {
      //sets new clothes as a copy of clothes array
      const newClothes = [...clothes];
      const itemIndex = newClothes.findIndex(
        (clothesItem) => clothesItem.name === selectedItem.name
      );
      newClothes[itemIndex].stock = parseInt(selectedItem.stock) + parseInt(newClothes[itemIndex].stock);
      setClothes(newClothes);
    }
    else
    setClothes([...clothes, selectedItem]);
  };
  console.log(clothes);

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
      <h3>Add Clothing</h3>
      <p>Name</p>
      <input name="cName" type="text" onChange={(e) => selectedItem.name = e.target.value} onLoad={(e) => selectedItem.name = e.target.value}/>
      <p>Price</p>
      <input name="cPrice" type="text"  onChange={(e) => selectedItem.price = e.target.value} onLoad={(e) => selectedItem.price = e.target.value}/>
      <p>Description</p>
      <input name="cDesc" type="text" onChange={(e) => selectedItem.description = e.target.value} onLoad={(e) => selectedItem.description = e.target.value}/>
      <p>Stock</p>
      <input name="cStock" type="number" onChange={(e) => selectedItem.stock = e.target.value} onLoad={(e) => selectedItem.stock = e.target.value}/>
      <br></br><br></br>
      <button onClick={handleAddItem}>Add Clothes</button>

    </div>
  );
  return form;
  
};

export default UpdateClothing;
