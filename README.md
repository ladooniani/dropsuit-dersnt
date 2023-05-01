[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/Terbinari-CBM-Robot/blob/main/images/dropsuit.png" />](https://github.com/ladooniani/dropsuit#readme)

[![npm version](https://img.shields.io/npm/v/dropsuit-dersnt.svg?style=flat)](https://www.npmjs.com/package/dropsuit-dersnt) [![npm](https://img.shields.io/npm/dt/dropsuit-dersnt.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-dersnt) [![License](https://img.shields.io/npm/l/dropsuit-dersnt.svg)](https://www.npmjs.com/package/dropsuit-dersnt)

# Overview of [DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP and the dersnt Function

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library providing various tools for natural language processing and data manipulation. The dersnt function is one of its modules, used for processing default object instance json key value arrays (req_arr: requests), (res_arr: responses). It locates sentences based on input nouns and extracts derivative nouns, and offers three output options: dsnSn() for derivative sentences, dsnSt() for a concatenated string of derivative words, and dsnAr() for an array of derivative sentences' words. This library is licensed under the Apache License 2.0.

## DropSuit NLP Method: dersnt - A JavaScript and Node.js function for finding sentences based on input nouns and uncovering derivative nouns

The dersnt function is a part of the DropSuit NLP library and is a JavaScript and Node.js function. It processes default object instance json key value arrays (req_arr: requests), (res_arr: responses) to find sentences related to input nouns and extract derivative nouns. It provides three output options: dsnSn() for derivative sentences, dsnSt() for a concatenated string of derivative words, and dsnAr() for an array of derivative sentences' words. This function is open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-dersnt
```

### Usage

Import the library in your project:

```
const dropsuit_dersnt = require("dropsuit-dersnt");

```

Process [intents.json](https://github.com/ladooniani/dropsuit-dersnt/blob/main/test/intents.json) using 'jsonIntStrct' function:

```
const json_data = require("dropsuit-dersnt/jsobj.js");
let intentData = json_data.jsonIntStrct("assets/json/intents.json");
```

Set boolean parameter (true/false) argument value to display console log processing results output information in terminal:

```
let dsdersnt = new dropsuit_dersnt(null, intentData.req_arr, intentData.res_arr, false);
```

#### dersnt(input: string|null, swa: number)

- **null/string**: Input 'myInputString', or keep NULL to process constructor 'input'. Processes default object instance json key value (req_arr: requests), (res_arr: responses) array patterns.
- **swa**: Stop word amount, a number 0-2, where 0 is minimum, 1 adds extra, and 2 is maximum from 3 lists.

#### Output return options:

- **dsnSn()** Returns an array of derivative sentences.
- **dsnSt()** Returns a concatenated string of derivative words.
- **dsnAr()** Returns an array of derivative sentences, with each sentence broken down into an array of words.

### Derivative sentence nouns

This code implements a technique for searching sentences based on the number of derivative nouns found in the data structure. The algorithm counts the number of equal nouns found in the sentences of the data structure and uses the results to perform a search for the desired sentences. The technique can be used as a pre-processing tool for intent recognition and entity extraction, which involves determining the intent of the user from their inputs and extracting important entities from the data structure based on the results of the search.

#### Flowchart:

```
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
```

#### Synchronous and Asynchronous Usage of dersnt and dersnt_async Functions

The 'dersnt' and 'dersnt_async' functions provide the capability to process requests in both synchronous and asynchronous modes. For more detailed information on how to use the functions in either mode, please refer to the [usage example](https://github.com/ladooniani/dropsuit-dersnt/blob/main/test/index.test.js)

```
let out = dsdersnt.dersnt(myInputString);
console.log(out);
```

Return object instance:

```
Input:

 [ 'computer' ]

Nouns:

 [ 'computer' ]

Output:

- Derivative sentences/nouns -

 {
  dsnSen: [
    'What are some recommended healthy snacks for computer users?',
    'What is a computer?',
    'What are the components of a computer?',
    'A robot is a machine designed to carry out a complex series of actions automatically, especially by being programmed by a computer.',
    'A computer is an electronic device that processes data.',
    'Components of a computer: CPU, RAM, storage, motherboard, power supply.'
  ],
  dsnStr: 'recommended healthy snacks users components robot machine designed carry complex series actions automatically especially programmed
electronic device processes data cpu ram storage motherboard power supply',
  dsnArr: [
    'recommended',   'healthy',
    'snacks',        'users',
    'components',    'robot',
    'machine',       'designed',
    'carry',         'complex',
    'series',        'actions',
    'automatically', 'especially',
    'programmed',    'electronic',
    'device',        'processes',
    'data',          'cpu',
    'ram',           'storage',
    'motherboard',   'power',
    'supply'
  ],
  dsnSn: [Function: dsnSn],
  dsnSt: [Function: dsnSt],
  dsnAr: [Function: dsnAr]
}

```

## Links

- npm: https://www.npmjs.com/package/dropsuit-dersnt

## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)