// react
import React from "react";

//css
import "../../style/CardItem.css";

//components
import { cardItemProps } from "../../interface";

//functions
import { markTxt } from "../../services/common";

const CardItem: React.FC<cardItemProps> = ({
  fullName,
  jobTitle,
  imageUrl,
  searchedTxt,
}) => {  
  return (
    <div className="card">
      <div className="inner">
        <img src={imageUrl} width="65rem" height="65rem" alt="" />
        <div className="data">
          <div className="firstName">{markTxt(fullName, searchedTxt)}</div>
          <div className="jobTitle">{markTxt(jobTitle, searchedTxt)}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
