import React from "react";

function ItemList({ items }) {
  console.log(items, "ITEMS");
  return (
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
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
      
    </div>
  );
}

export default ItemList;
