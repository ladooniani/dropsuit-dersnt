//#region Dysplay info data

function displayInfoData() {
  const liblink =
    "DropSuit: https://github.com/ladooniani/DropSuit#readme\n" +
    "Copyright © 2016-" +
    getYear() +
    " Lado Oniani - DropSuit. All Rights Reserved.\n\n";
  const libName = "DropSuit NLP module library function:\n";
  const line =
    "\n———————————————————————————————————————————————————————————\n\n";
  const divider =
    "\n-----------------------------------------------------------\n";
  const libraryInformation = line + liblink + libName;
  const functionDescription = `${libraryInformation}
  dersnt(null/string)
  Purpose: Finding sentences related to input nouns and extracting derivative nouns.
  Input: 
    string (Input 'myInputString'), or 
    null (to process the constructor input)
  Processes the default object instance's json key value, 
  including the (req_arr: requests) and (res_arr: responses) array patterns.

  swa: 0-2 range, determines stop word amount processed (0 min, 1 extra, 2 max from 3 lists)

  Output:
    dsnSn(): Returns the derivative sentences.
    dsnSt(): Returns the derivative words concatenated string.
    dsnAr(): Returns the derivative sentences words array.
  
  Flowchart:
  ┌────────────────┐
  │ Input Sentence
  └─┬──────────────┘
  ┌─┴──────────────┐
  │ Extract Nouns
  └─┬──────────────┘
  ┌─┴─────────────────────┐
  │ Derivative Sentences
  └─┬─────────────────────┘
  ┌─┴─────────────────────┐
  │ Derivative Snt. Nouns
  └───────────────────────┘
  ${divider}`;

  const displayInfoData = {
    descript: functionDescription,
    line: line,
  };

  return displayInfoData;
}

function getYear() {
  return new Date().getFullYear();
}

//#endregion

//#region Modules

module.exports = {
  displayInfoData,
};

//#endregion
