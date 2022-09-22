import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import Category from "../../components/category/Category";
import { useEffect } from "react";
import axios from "axios";
import EmenuAPIservice from "../../apiService/EmenuAPIservice";
import LanguageSelect from "../../components/language_select/LanguageSelect";



function Home() {
  const [business,businessSet] = useState([])
  const [isloading,setIsLoading] = useState(true)



  
    
 
  const [data,dataSet]= useState([])

  useEffect(()=> {
    axios.get("demo.json").then(res=>dataSet(res.data))
    
  },[])
  useEffect(()=> {
    EmenuAPIservice.getAllBusinessList().then(res=> {
         
         
         businessSet(res.data[1])
        
    }).catch(err=> {
        console.log(err)
    })
 },[])
 
 
  return (
    <>
    
    <div className="home">
      <Navbar />
      <LanguageSelect />
      <div className="homeContainer">
        <div className="top">
          <div className="backgroundImage">
            <img
              src={business.image}
              alt="OK"
            />
          </div>
        </div>

        <div className="bottom">
          <div className="business">
            <div className="business-name">
              <h1>{business.name}</h1>
            </div>
            <div className="business-detail">
              <div className="info">
              <span className="icon"> <FmdGoodOutlinedIcon/></span>
                <span>{business.location}</span>
              </div>

              <div className="info">
                <span className="icon"><PhoneEnabledOutlinedIcon/></span>
                <span>{business.phone}</span>
              </div>

              <div className="info">
                <span className="icon"><WifiOutlinedIcon/></span>
                <span>{business.wifi}</span>
              </div>
            </div>
            <div className="buttonList">
              <button>
                Main Menu
              </button>

              <button>
                Bar
              </button>
            </div>
          </div>
          <div className="search">
            <div className="search-bar">
              <input type="text" className="search" placeholder="Search..." />
              <span className="search-icon">
              <SearchOutlinedIcon />
              </span>
            </div>
          </div>
          <Category data ={data}/>
        </div>
      </div>
    </div>
    </>
  );
 
}


export default Home;
