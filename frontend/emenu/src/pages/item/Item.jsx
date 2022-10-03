import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./item.scss";

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

function Item() {
  const {categoriesId} = useParams()
  // console.log(categoriesId,"CATEGORY ID")
  
  const { business, businessSet } = useContext(BusinessContext);
  const [items,SetItems] = useState([])
  useEffect(()=> {
    console.log("useEffect")
    EmenuAPIservice.getAllItemsInSpecificCategory(parseInt(categoriesId)).then(res=> {
         
        
        SetItems(res.data)
         
        
    }).catch(err=> {
        console.log(err)
    })
  },[])
  

 
  
 
  return (
    <>
      <div className="item">
        <Navbar />
        <LanguageSelect />
        <div className="itemContainer">
          <TopImage />

          <div className="bottom">
            <BusinessDetail />

            {/* ................... */}
            <div className="back-button">
              <Link to="/">
                <span className="icon">
                  <ArrowBackOutlinedIcon />
                </span>
              </Link>
            </div>

            <div className="category-name">
                <h3>Hot Meals</h3>
                
              </div>
            
                <ItemList itemsList={items} />
            
            
            {/* .................................. */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
