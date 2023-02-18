//#region Info

/**
 * @file <h3>DropSuit</h3>
 * <p>
 *   DropSuit is a JavaScript(ES6) and Node.js(v14.x) module library
 *   created by Lado Oniani that offers a diverse collection of functions
 *   for natural language processing (NLP) and data manipulation.
 *   It provides a curated collection of original and classic techniques and methods
 *   for tasks such as text analysis, language understanding and generation,
 *   as well as for data manipulation tasks. Additionally,
 *   it includes unique tools and features for chatbot dialog flow logic
 *   and other specific use cases.
 *   The library is open-source and available under the Apache License 2.0.
 *   Whether you're a researcher, developer, or data scientist,
 *   DropSuit offers a range of tools to enhance your work,
 *   with a focus on diversity and experimentation.
 * </p>
 * @author Lado Oniani
 * {@link https://github.com/ladooniani GitHub}
 * @see mailto:ladooniani@gmail.com
 * @version 1.0.0
 * @see https://github.com/ladooniani/DropSuit#readme
 * @copyright 2016-2023 Lado Oniani - DropSuit. All Rights Reserved.
 * @license Apache License 2.0
 */

//#endregion

//#region  Constructor

function Constructor(input, requests, responses, dsout) {
  this.input = input;
  this.requests = requests;
  this.responses = responses;
  this.dsout = dsout;
}

//#endregion

//#region dersnt

/**
 * @Constructs dersnt_sync
 * @description - dersnt_sync(null) function - Derivative sentences nouns.
 * Processes default object instance key values (req_arr: requests) and (res_arr: responses),
 * with function direct string sentence/word input, or keep NULL to process constructor 'input'.
 * @param {string} input - Input sentence
 * @param {number} swa - An integer in the range of 0-2, which determines the amount of stop words to be processed.
 * @returns {object} - Return options dsnSn() derivative sentences,
 * dsnSt() derivative words concatenated string, dsnAr() derivative words array.
 */

Constructor.prototype.dersnt = function (input, swa) {
  input = objOrFncInp(input, this.input);
  let out = dersnt_func_v1(
    input,
    swa,
    this.requests,
    this.responses,
    this.dsout
  );
  return out;
};

/**
 * @Constructs dersnt_async
 * @description - dersnt_async(null) function - Derivative sentences nouns.
 * Processes default object instance key values (req_arr: requests) and (res_arr: responses),
 * with function direct string sentence/word input, or keep NULL to process constructor 'input'.
 * @param {string} input - Input sentence
 * @param {number} swa - An integer in the range of 0-2, which determines the amount of stop words to be processed.
 * @returns {object} - Return options output.out().dsnSn() derivative sentences,
 * output.out().dsnSt() derivative words concatenated string, output.out().dsnAr() derivative words array.
 */

Constructor.prototype.dersnt_async = async function (input, swa) {
  return new Promise(async (resolve, reject) => {
    try {
      input = objOrFncInp(input, this.input);
      let output = dersnt_func_v2(
        input,
        swa,
        this.requests,
        this.responses,
        this.dsout
      );
      resolve({
        out: function () {
          return output;
        },
      });
    } catch (error) {
      reject(error);
    }
  });
};

//#endregion

//#region dsnom_f

const dropsuit_clnstr = require("../dropsuit-clnstr/index.js");
var ds_clnstr = new dropsuit_clnstr(null, false);

const dropsuit_enoun = require("../dropsuit-enoun/index.js");
let ds_enoun = new dropsuit_enoun(null, false);

/**
 * dersnt_func - Derivative sentences nouns.
 * @param {string} input - Input sentence
 * @param {number} swa - An integer in the range of 0-2, which determines the amount of stop words to be processed.
 * 0 processes the minimum amount, 1 adds extra stop words,
 * and 2 includes the maximum number of stop words from three distinct lists.
 * @param {array} requests - Requests
 * @param {array} responses - Responces
 * @param {boolean} dispout - (true/false) Display processing output results in terminal.
 * @returns {object}  -  Return options dsnSn() derivative sentences,
 * dsnSt() derivative words concatenated string, dsnAr() derivative words array.
 * @example dersnt_func(string, number, array, array, bool)
 */

function dersnt_func_v1(input, swa, requests, responses, dispout) {
  let derivativeSentences = [];
  let derivativeNouns = [];
  if (Array.isArray(input)) {
    input = arrToString(input);
  }
  let nouns = ds_enoun.enoun(input, swa).noun();
  input = ds_clnstr.clnstr(input).txt();
  for (let o = 0; o < nouns.length; o++) {
    for (let q = 0; q < requests.length; q++) {
      let req = requests[q];
      for (let u = 0; u < req.length; u++) {
        let out = contrsub(nouns[o], req[u]);
        if (out == true) {
          if (!derivativeSentences.includes(req[u])) {
            derivativeSentences.push(req[u]);
          }
        }
      }
    }
    for (let a = 0; a < responses.length; a++) {
      let res = responses[a];
      for (let n = 0; n < res.length; n++) {
        let out = contrsub(nouns[o], res[n]);
        if (out == true) {
          if (!derivativeSentences.includes(res[n])) {
            derivativeSentences.push(res[n]);
          }
        }
      }
    }
  }

  for (let a = 0; a < derivativeSentences.length; a++) {
    let dernouns = ds_enoun.enoun(derivativeSentences, swa).noun();
    for (let f = 0; f < dernouns.length; f++) {
      if (
        !derivativeNouns.includes(dernouns[f]) &&
        !nouns.includes(dernouns[f])
      ) {
        derivativeNouns.push(dernouns[f]);
      }
    }
  }
  var a1 = arrToString(derivativeNouns);
  var a2 = a1.split(" ");
  let outret = return_dsnomOut(a1, a2, derivativeSentences);
  display(dispout, input, nouns, outret);
  return outret;
}

function dersnt_func_v2(input, swa, requests, responses, dispout) {
  let derivativeSentences = [];
  let derivativeNouns = new Set();
  if (Array.isArray(input)) {
    input = arrToString(input);
  }
  let nouns = ds_enoun.enoun(input, swa).noun();
  input = ds_clnstr.clnstr(input).txt();
  nouns.forEach((noun) => {
    [...requests, ...responses].forEach((reqOrRes) => {
      reqOrRes.forEach((sentence) => {
        if (
          contrsub(noun, sentence) &&
          !derivativeSentences.includes(sentence)
        ) {
          derivativeSentences.push(sentence);
        }
      });
    });
  });
  derivativeSentences.forEach((sentence) => {
    let dernouns = ds_enoun.enoun(sentence, swa).noun();
    dernouns.forEach((noun) => {
      if (!nouns.includes(noun) && !derivativeNouns.has(noun)) {
        derivativeNouns.add(noun);
      }
    });
  });
  let derivativeNounsArr = Array.from(derivativeNouns);
  let a1 = arrToString(derivativeNounsArr);
  let a2 = a1.split(" ");
  let outret = return_dsnomOut(a1, a2, derivativeSentences);
  display(dispout, input, nouns, outret);
  return outret;
}

function arrToString(input) {
  var retStr;
  let res = stringChecker(input);
  if (res == false) {
    retStr = input.toString().replace(/,/g, " ").trim();
  } else {
    retStr = input;
  }
  return retStr;
}

function return_dsnomOut(a1, a2, derivativeSentences) {
  const dsnomObj = {
    dsnSen: derivativeSentences,
    dsnStr: a1,
    dsnArr: a2,
    dsnSn: function () {
      return this.dsnSen;
    },
    dsnSt: function () {
      return this.dsnStr;
    },
    dsnAr: function () {
      return this.dsnArr;
    },
  };
  return dsnomObj;
}

function stringChecker(string) {
  if (typeof string === "string") {
    return true;
  } else {
    return false;
  }
}

function contrsub(userInput, response) {
  userInput = ds_clnstr.clnstr(userInput).txt();
  response = ds_clnstr.clnstr(response).txt();
  var res1 = sub(userInput, response);
  if (res1 == true) {
    return true;
  } else if (res1 == false) {
    var res2 = sub(response, userInput);
    if (res2 == true) {
      return true;
    } else if (res2 == false) {
      return false;
    }
  }
}

function sub(userInput, response) {
  if (userInput.indexOf(response) !== -1) {
    return true;
  } else if (userInput.includes(response)) {
    return true;
  } else if (userInput.search(response) !== -1) {
    return true;
  } else if (userInput.match(response) !== null) {
    return true;
  } else {
    return false;
  }
}

function objOrFncInp(function_input, constructor_input) {
  if (function_input !== "" && function_input !== null) {
    function_input = function_input;
  } else {
    function_input = constructor_input;
  }
  return function_input;
}

//#endregion

//#region console log

const getdt = require("./infodt.js");
let fnctit = getdt.displayInfoData();
const line = fnctit.line;
var description = fnctit.descript;

function display(dispout, input, nouns, outret) {
  if (dispout == true) {
    console.log(
      description,
      "\nInput:\n\n",
      [input],
      "\n\nNouns:\n\n",
      nouns,
      "\n\nOutput:\n\n- Derivative sentences/nouns -\n\n",
      outret,
      "\n",
      line
    );
  }
}

//#endregion

//#region Export Module Constructor

module.exports = Constructor;

//#endregion
