function createMarkup(fullName = "", searchedTxt = ""): any {
  let searched = searchedTxt.toLowerCase();
  let b = fullName
    .toLowerCase()
    .replace(searchedTxt.toLowerCase(), `<mark>${searched}</mark>`);
  return { __html: b };
}

export function markTxt(fullName = "", searchedTxt = "") {
  return <div dangerouslySetInnerHTML={createMarkup(fullName, searchedTxt)} />;
}
