export interface SearchbarInputprops {
  getData: (userTxt: string) => Promise<any>;
  setInputTxt: React.Dispatch<React.SetStateAction<string>>;
  setInFocus:React.Dispatch<React.SetStateAction<boolean>>

}

export interface cardItemProps {
  fullName: string;
  jobTitle: string;
  searchedTxt: string;
  imageUrl: string;
}

export interface scrollboxProps {
  searchedTxt: string;
  display: boolean;

  usersData: { name: string; workTitle: string; imageUrl: string }[];
}

export interface LocationCheckBoxprops {
  setSearchedLocation: Function;
  defultLabels: string[];
}
