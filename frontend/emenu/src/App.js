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


function App() {
  const [business,businessSet] = useState({})
  useEffect(()=> {
    EmenuAPIservice.getAllBusinessList().then(res=> {
         
        // console.log(res.data[2])

         businessSet(res.data[0])
         
        
    }).catch(err=> {
        console.log(err)
    })
 },[])
 

 
  return (
    <BusinessContext.Provider
      value={{
          business,
          businessSet,
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
              {/* <Route path=":HomeuserId" element={<Single />} />
              <Route path="new" element={<New />} /> */}
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
