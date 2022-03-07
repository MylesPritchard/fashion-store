import './App.css';
import React, { useState } from "react";
import { RoleWrapper } from "./RoleWrapper/RoleWrapper";
import { LoginForm } from "./LoginForm/LoginForm.js";
import { ClothingList } from "./ClothingList/ClothingList.js";
import { UpdateClothing } from  "./UpdateClothing/UpdateClothing.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log("App rendered");

  const [role, setRole] = useState("");


  return (
    <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
      <LoginForm setRole={setRole} />
      <RoleWrapper rolesAllowed={["Visitor"]} currentRole={role}>
        <ClothingList />
      </RoleWrapper>
      <RoleWrapper rolesAllowed={["Admin"]} currentRole={role}> 
        <UpdateClothing />
      </RoleWrapper>
    </div>
  );
}

export default App;
