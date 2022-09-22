import React from 'react'

function Category({data}) {
  return (
    <div className="menus">
            {data.map(d => (
                <div className="menu-item" key={d.id}>
              
                <a href="/" className="menu-item__link focus">
                  <img
                  src={d.src}
                  alt="OMM"
              />
                  <h2>{d.name}</h2>
                  <p>{d.price}</p>

                </a>
            </div>
            ))}
            


            

            
          </div>
  )
}

export default Category