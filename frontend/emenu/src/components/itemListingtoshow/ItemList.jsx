import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cart/cart-slice";
import { itemActions } from "../../store/item/item-slice";
function ItemList({item}) {
  
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart)
  const cartItems = useSelector((state) => state.cart.itemsList);
 
  const itsItem = cartItems.filter(function(cartitem){
    if(cartitem.id === item.id){
      return item
    }
  })

  // useEffect(()=> {
  //     dispatch(itemActions.setGettingItemsToQuantity1())
  // },[])

  // const isShowmyOrder =items.filter(item=>item.qty>0).length > 0

  const addToCart = (item) => {
    if(cart.seat==null){
      alert("Select Seat First to Order")
      return false
    }
    dispatch(cartActions.addToCart(item));
  };

  const removeFromCart = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };
  return (
    <>
      <div className="ItemList">
       
          <div className="items">
            <div className="itemImage">
              <img src={item.image} alt="OMM" />
            </div>
            <div className="title">
              <div className="sub-title">{item.name}</div>
              <div className="weight">250g</div>
            </div>
            <div className="recipes">{item.recipes}</div>
            <div className="price-and-order">
              <div className="price">
                <div className="original-price">
                  <p>
                    {item.totalPrice ? item.totalPrice: item.price}
                    <sup>MMK</sup>
                  </p>
                </div>
                <div className="discount-price">
                  <p>
                    <del>{item.totalPrice ? item.totalPrice+100 : item.price+100}</del>
                    <sup>MMK</sup>
                  </p>
                </div>
              </div>
              <div className="order">
                {!itsItem[0] ? "":<button onClick={()=>removeFromCart(item)}>-</button>}

                {!itsItem [0] ? "":<button>{itsItem[0].quantity}</button>}

                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          </div>
       
      </div>
      
    </>
  );
}

export default ItemList;
