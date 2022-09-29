import React, { useState,useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import Category from "../../components/category/Category";
import { useEffect } from "react";
import axios from "axios";
import EmenuAPIservice from "../../apiService/EmenuAPIservice";
import LanguageSelect from "../../components/language_select/LanguageSelect";
import { Link } from "react-router-dom";
import TopImage from "../../components/TopImageComponent.jsx/TopImage";
import BusinessDetail from "../../components/BusinessDetail/BusinessDetail";
import BusinessContext from "../../CONTEXT/BusinessContext";



function Home() {
  const { business, businessSet } = useContext(BusinessContext);
  
  
  return (
    <>
    
    <div className="home">
      <Navbar />
      <LanguageSelect />
      <div className="homeContainer">
        <TopImage business={business} />

        <div className="bottom">
          <BusinessDetail business={business} />
          <div className="search">
            <div className="search-bar">
              <input type="text" className="search" placeholder="Search..." />
              <span className="search-icon">
              <SearchOutlinedIcon />
              </span>
            </div>
          </div>
          
          <Category data ={business} />
          
        </div>
      </div>
    </div>
    </>
  );
 
}


export default Home;
