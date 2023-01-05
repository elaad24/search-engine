// react
import React from "react";

//css
import "../../style/SearchbarInput.css";

//imges
import magnifyingglass from "../../icons/magnifyingglass.png";

//interfaces
import { SearchbarInputprops } from "../../interface";

const SearchbarInput: React.FC<SearchbarInputprops> = ({
  getData,
  setInputTxt,
  setInFocus
}) => {
  const refInput = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const updateData = () => {
    setInputTxt(refInput.current.value);
    getData(`${refInput.current.value}`);
  };
  return (
    <div>
      <div className="main">
        <div className="">
          <input
            className="searchBar"
            ref={refInput}
            type="search"
            placeholder="Search..."
            onChange={updateData}
            onFocus={()=>setInFocus(true)}
            onBlur={()=>setInFocus(false)}
          />
        </div>
        <button>
          <div className="btnBackground">
            <img
              src={magnifyingglass}
              width="25px"
              height="25px"
              alt="magnifying_glass"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchbarInput;
