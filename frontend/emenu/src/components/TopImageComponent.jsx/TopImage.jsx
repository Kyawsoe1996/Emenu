import React, { useContext } from "react";
import "./topimage.scss";
import BusinessContext from "../../CONTEXT/BusinessContext";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

function TopImage() {
  const { business, businessSet } = useContext(BusinessContext);
  return (
    <div className="top">
      
      <div className="backgroundImage">
        <img src={business.image} alt="OK" />
      </div>

      

    </div>
  );
}

export default TopImage;
