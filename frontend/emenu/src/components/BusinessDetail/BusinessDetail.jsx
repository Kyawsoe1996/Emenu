import React, { useContext, useEffect } from 'react'
import './businessdetail.scss'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import BusinessContext from '../../CONTEXT/BusinessContext'
import Seat from '../seat/Seat';
import EmenuAPIservice from '../../apiService/EmenuAPIservice';
import { useState } from 'react';


function BusinessDetail() {
  const [seats,setSeat] = useState([])
  const {business,businessSet,business_id} = useContext(BusinessContext)
  
  useEffect(()=> {
      // console.log("Fetching Seats..")
      if(business_id){
        EmenuAPIservice.getBusinessSeats(business_id).then(res=>(
          setSeat(res.data)
          )).catch(error=> (
        console.log(error)
      ))
      }
      
  },[business_id])
 
  return (
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
              <Seat seats={seats} />
            </div>
          </div>
  )
}

export default BusinessDetail