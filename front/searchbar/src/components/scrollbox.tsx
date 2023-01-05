// react
import React from "react";

//css
import "../style/scrollbox.css";

//components
import CardItem from "./common/CardItem";

// interfes
import { scrollboxProps } from "../interface";

const scrollbox: React.FC<scrollboxProps> = ({ searchedTxt, usersData,display }) => {
  return (
    <div className="scrollbox">
      {display&& usersData.map((item, index) => (
        <CardItem
          fullName={item.name}
          jobTitle={item.workTitle}
          imageUrl={item.imageUrl}
          searchedTxt={searchedTxt}
            key={index}
        />
      ))}
    </div>
  );
};

export default scrollbox;
