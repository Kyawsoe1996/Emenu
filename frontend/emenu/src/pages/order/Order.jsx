import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./order.scss";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useEffect } from "react";
import axios from "axios";
import EmenuAPIservice from "../../apiService/EmenuAPIservice";
import LanguageSelect from "../../components/language_select/LanguageSelect";
import { Link, useParams } from "react-router-dom";
import TopImage from "../../components/TopImageComponent.jsx/TopImage";
import BusinessDetail from "../../components/BusinessDetail/BusinessDetail";
import { useContext } from "react";
import BusinessContext from "../../CONTEXT/BusinessContext";
import ItemList from "../../components/itemListingtoshow/ItemList";

function Order() {
  
  

 
  
 
  return (
    <>
      <div className="order">
        <Navbar />
        <LanguageSelect />
        <div className="orderContainer">
            <p>Order</p>
        </div>
      </div>
    </>
  );
}

export default Order;
