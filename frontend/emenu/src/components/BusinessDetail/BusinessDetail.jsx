import React, { useContext } from 'react'
import './businessdetail.scss'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import BusinessContext from '../../CONTEXT/BusinessContext'


function BusinessDetail() {
  const {business,businessSet} = useContext(BusinessContext)
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
            </div>
          </div>
  )
}

export default BusinessDetail