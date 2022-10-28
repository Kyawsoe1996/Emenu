import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.slim.js";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Item from "./pages/item/Item";
import BusinessContext from "./CONTEXT/BusinessContext";
import { useEffect, useState } from "react";
import EmenuAPIservice from "./apiService/EmenuAPIservice";
import Order from "./pages/order/Order";
import { useDispatch, useSelector } from "react-redux";
import { BusinessDataFetch } from "./store/business/business-actions";


function App() {
  const dispatch = useDispatch()
  const business = useSelector(state=>state.business.businessList)
  useEffect(()=> {
    dispatch(BusinessDataFetch())
  },[])




//When working with Context I use this useEffect, but now i change to redux
//   useEffect(()=> {
//     EmenuAPIservice.getAllBusinessList().then(res=> {
         
//         // console.log(res.data[2])

//          businessSet(res.data[0])
         
        
//     }).catch(err=> {
//         console.log(err)
//     })
//  },[])
 
  if(!business){
    const style = {
      // backgroundColor:'green',
      textAlign:'center'
    }
    return <h2 style={style}>Loading Data Pls Wait.......</h2>
  }
 
  return (
    <BusinessContext.Provider
      value={{
          business,
          
          business_id:business.id,
      }}
      >
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            
            <Route path="categories">
              <Route path=":categoriesId/items/" element={< Item/>} />
              
            </Route> 

            <Route path="order">
              <Route path="" element={< Order/>} />
              {/* <Route path=":HomeuserId" element={<Single />} />
              <Route path="new" element={<New />} /> */}
            </Route> 

            {/* <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route> */} 

            {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route> */}

            
          </Route>
        </Routes>
      </Router>
    </div>
    </BusinessContext.Provider>
  );
}

export default App;
