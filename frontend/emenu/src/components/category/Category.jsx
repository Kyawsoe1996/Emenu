import React, { useContext,useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BusinessContext from '../../CONTEXT/BusinessContext'
import './category.scss'
import EmenuAPIservice from '../../apiService/EmenuAPIservice'
function Category() {
  const {business_id} = useContext(BusinessContext)
  const [category,categorySet] = useState([])
  
  console.log(business_id,"BUsinessID")
  
  
  useEffect(()=> {
    
        EmenuAPIservice.getSpecifiBusinessCategoryList(business_id).then(res=> {
         
        console.log(res)
        categorySet(res.data)
         
        
    }).catch(err=> {
        console.log(err)
    })
    
    
  },[business_id])

  
  
  
  return (
    <div className="menus">
            {category.map(d => (
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
}

export default Category