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
import Item from "../item/Item";
import { useSelector } from "react-redux";
import "../item/item.scss";
import "./order.scss";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import RemoveShoppingCartTwoToneIcon from "@mui/icons-material/RemoveShoppingCartTwoTone";

function Order() {
  const items = useSelector((state) => state.cart.itemsList);
  const notHavingItems = items.length < 1;

  const BacktoMainMenuButton = (
    <div className="empty-order">
      <div className="icon">
        <RemoveShoppingCartTwoToneIcon className="icon" />
      </div>
      <button className="back-to-main-menu">Back to Menu</button>
    </div>
  );

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
              <h3 className="my-order">
                {notHavingItems ? "Empty Order" : "My Order "}
              </h3>
            </div>

            {notHavingItems
              ? BacktoMainMenuButton
              : items.map((item) => <ItemList key={item.id} item={item} />)}

            {/* .................................. */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
