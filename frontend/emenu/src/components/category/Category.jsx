import React, { useContext,useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BusinessContext from '../../CONTEXT/BusinessContext'
import './category.scss'
import EmenuAPIservice from '../../apiService/EmenuAPIservice'
import { useSelector } from 'react-redux'
function Category() {
 
  const business = useSelector(state=> state.business.businessList)
  const categories = useSelector(state=> state.category.categories) 
  if(categories){
    return (
      <div className="menus">
              {categories.map(d => (
                  <div className="menu-item" key={d.id}>
                
                  
                   
                
                        <Link to={`/categories/${d.id}/items`} className="menu-item__link focus">
                        <img
                            src={d.image}
                            alt="OMM"
                            />
                          
                        
                    <h2>{d.name}</h2>
                   
  
                    </Link>
              </div>
              ))}
  
            
  
  
              
  
              
            </div>
    )
  } else {
    <h1>Category Loading</h1>
  }

}

export default Category