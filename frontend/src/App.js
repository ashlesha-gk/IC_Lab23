import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import RecipeManager from "./components/RecipeManager";
// import Search from "./components/Search";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";

function App(){
  return(
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/recipes"element={<Recipes />} />
        <Route path="/recipemanager"element={<RecipeManager />} />
        <Route path="/signup"element={<SignUp />} />
        <Route path="/login"element={<Login />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;




    

