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
import Seat from "../../components/seat/Seat";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../../store/item/item-slice";
import { CategoryBaseItemFetch } from "../../store/item/item-action";

function Item() {
  const dispatch = useDispatch()
  const {categoriesId} = useParams()
  const items = useSelector(state=> state.item.items)
  const cartItems = useSelector((state) => state.cart.itemsList);
  const isShowmyOrder = cartItems.length > 0;

  // console.log(categoriesId,"CATEGORY ID")
  
  const { business, businessSet } = useContext(BusinessContext);
  useEffect(()=> {
      
      dispatch(CategoryBaseItemFetch(parseInt(categoriesId)))
      
  },[categoriesId])

  
  
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
                {items.map(item=> (
                      <ItemList  key={item.id} item={item}/>
                ))}
              
            
            
            {/* .................................. */}
          </div>
          {isShowmyOrder ? (
        <div className="showOrder">
          <Link to="/order">Show my order</Link>
        </div>
      ) : (
        ""
      )}
        </div>
      </div>
    </>
  );
}

export default Item;
