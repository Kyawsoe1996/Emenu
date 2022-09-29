import React, { useContext,useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BusinessContext from '../../CONTEXT/BusinessContext'
import './category.scss'
import EmenuAPIservice from '../../apiService/EmenuAPIservice'
function Category() {
  const {business_id} = useContext(BusinessContext)
  const [category,categorySet] = useState([])
  
  
  useEffect(()=> {
    EmenuAPIservice.getSpecifiBusinessCategoryList(8).then(res=> {
         
        console.log(res)
        categorySet(res.data)
         
        
    }).catch(err=> {
        console.log(err)
    })
  },[])
  
  
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