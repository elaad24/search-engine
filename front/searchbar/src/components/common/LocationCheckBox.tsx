// react 
import React from "react";

// css
import "../../style/LocationCheckBox.css";

//interface
import {LocationCheckBoxprops} from "../../interface"


export const LocationCheckBox: React.FC<LocationCheckBoxprops> = ({
  setSearchedLocation,
  defultLabels,
}) => {
  const resetPick = () => {
    setSearchedLocation([...defultLabels]);
    const radioBtns = document.getElementsByName("searchIn");
    if (radioBtns) {
      radioBtns.forEach((el: any) => {
        el.checked = false;
      });
    }
  };
  return (
    <div className="mainBox">
      <div>
        <div className="headers">
          <div className="firstHeader">pick from where to search:</div>
          <div className="secondHeader">
            * by defult search in Name & WorkTitle
          </div>
        </div>
        <div className="AllbtnsDiv">
          {defultLabels.map((item,index) => {
            return (
              <div key={index}> 
                <input
                  type="radio"
                  name="searchIn"
                  id={item}
                  value={item}
                  onChange={(e) => setSearchedLocation([e.target.value])}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
          <input type="button" value="reset value" onClick={resetPick} />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default LocationCheckBox;
