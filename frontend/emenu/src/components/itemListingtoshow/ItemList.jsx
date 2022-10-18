import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ZoomImage from "../ZoomImage";
function ItemList({ itemsList }) {
  const [items,setItem]=useState([])
  console.log(itemsList)
  const [orderCount,setOrderCount]= useState(0)
  useEffect(()=> {
    let result = itemsList.map(function(item){
                const data ={...item,qty:0}
                return data
    })
    setItem(result)
  },[itemsList])

  const isShowmyOrder =items.filter(item=>item.qty>0).length > 0
 

  


  

  const [qty,setQty]= useState(1)

  const handlePlus =(id)=> {

      let result = items.map(function(item){
            if (item.id === id){
                
                  item.qty++
                  
                  
                  const data ={...item}
                  return data
                
               
                
            }
            return item
            
      })
      
      setItem(result)
  }

  const handleMinus =(id)=> {
    
    let result = items.map(function(item){
          
          if (item.id === id){
              
                  item.qty--
                 
                  const data ={...item}
                  return data
              
             
              
          }
          return item
          
    })
    
    setItem(result)
}

  
  return (
    <>
    <div className="ItemList">
        {items.map(item=>(
            <div className="items" key={item.id}>
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
                    {item.price}<sup>MMK</sup>
                  </p>
                </div>
                <div className="discount-price">
                  <p>
                    <del>{item.price+100}</del>
                    <sup>MMK</sup>
                  </p>
                </div>
              </div>
              <div className="order">
              {item.qty <=0 ? "":<button onClick={()=>handleMinus(item.id)}>-</button>}
              

              {item.qty <=0 ? "":<button>{item.qty}</button>}
                <button  onClick={()=>handlePlus(item.id)}>+</button>
                
              </div>
            </div>
          </div>
        ))}
        
      
    </div>
    {isShowmyOrder?(
      <div className="showOrder">
          <Link to="/order">
            Show my order
          </Link>
    </div>
    ):""}
    </>
  );
}

export default ItemList;
