//#region dersnt test

const dropsuit_dersnt = require("../index.js");
const json_data = require("../jsobj.js");

const localFile = "./test/intents.json";
let intentData = json_data.jsonIntStrct(localFile);
let dsdersnt = new dropsuit_dersnt(
  null,
  intentData.req_arr,
  intentData.res_arr,
  true
);

describe("dropsuit-dersnt", () => {
  describe("dersnt()", () => {
    it("should return the derivative sentences nouns with 'dersnt' function", () => {
      let dersnt_output = dsdersnt.dersnt("computer", 2);
      // console.log("\n\ndersnt_sync() output:", dersnt_output);
      // console.log("\n\ndsnSn() output:", dersnt_output.dsnSn());
      // console.log("\n\ndsnSt() output:", dersnt_output.dsnSt());
      // console.log("\n\ndsnAr() output:", dersnt_output.dsnAr());
    });
    it("should return the derivative sentences nouns with 'dersnt_async' function", () => {
      callFunctionAsync();
      async function callFunctionAsync() {
        try {
          let dersnt_output = await dsdersnt.dersnt_async("computer", 2);
          // console.log("\n\ndersnt_async() output:", dersnt_output.out());
          // console.log("\n\ndsnSn() output:", dersnt_output.out().dsnSn());
          // console.log("\n\ndsnSt() output:", dersnt_output.out().dsnSt());
          // console.log("\n\ndsnAr() output:", dersnt_output.out().dsnAr());
        } catch (error) {
          console.error(error);
        }
      }
    });
  });
});

//#endregion
