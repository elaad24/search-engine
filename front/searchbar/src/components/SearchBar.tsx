// react
import { useState, useEffect } from "react";

//components
import SearchbarInput from "./common/SearchbarInput";
import Scrollbox from "../components/scrollbox";

//css
import "../style/SearchBar.css";

//servises
import usersService, { getUsersByTxt } from "../services/usersService";
import { debounce } from "lodash";
import { LocationCheckBox } from "./common/LocationCheckBox";

export default function SearchBar() {
  const [inputTxt, setInputTxt] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [defultData, setDefultData] = useState(
    async () => await usersService.getAllusers()
  );
  const [searchedLocation, setSearchedLocation] = useState([
    "Name",
    "WorkTitle",
  ]);
  const [defultsearchedLocation, setDefultsearchedLocation] = useState([
    "Name",
    "WorkTitle",
  ]);
  const [inFocus, setInFocus] = useState(false);

  useEffect(() => {
    (async () => {
      setUsersData(await defultData);
    })();
  }, [searchedLocation]);

  const getData = async (userTxt: string) => {
    if (userTxt.length === 0) {
      const debouncedSearch = debounce(async () => {
        setUsersData(await usersService.getAllusers());
      }, 300);

      debouncedSearch();

      // setUsersData(await defultData);
    } else if (userTxt.length >= 2) {
      const debouncedSearch = debounce(async () => {
        setUsersData(await getUsersByTxt(userTxt, searchedLocation));
      }, 500);
      debouncedSearch();
    }
  };

  return (
    <div className="Main">
      <LocationCheckBox
        setSearchedLocation={setSearchedLocation}
        defultLabels={defultsearchedLocation}
      />
      <div className="searchInput">
        <SearchbarInput
          getData={getData}
          setInputTxt={setInputTxt}
          setInFocus={setInFocus}
        />
      </div>
      <div className="scroolable">
        <Scrollbox
          searchedTxt={inputTxt}
          usersData={usersData}
          display={inFocus}
        />
      </div>
    </div>
  );
}
