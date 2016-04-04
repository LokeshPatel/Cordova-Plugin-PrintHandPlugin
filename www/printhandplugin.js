
var exec = require('cordova/exec');

var PrintHandPlugin = {
     printWithHttpURL :function(callBackSuccess,callBackFail,webUrl) {
     exec(callBackSuccess,callBackFail,"ShareIntentPrintHandPlugin","printWithHttpURL", [webUrl]);
   },
    printWebPageWithContain :function(callBackSuccess,callBackFail,htmlFormatString) {
     exec(callBackSuccess,callBackFail,"ShareIntentPrintHandPlugin","printWebPageWithContain", [htmlFormatString]);
   },
  printImage :function(callBackSuccess,callBackFail,imagePath,activeView) {
     /*Active View set true/false*/
     exec(callBackSuccess,callBackFail,"ShareIntentPrintHandPlugin","printImage", [imagePath,activeView]);
   },
  printFile :function(callBackSuccess,callBackFail,imagePath,activeView,mineType) {
    exec(callBackSuccess,callBackFail,"ShareIntentPrintHandPlugin","printFile", [imagePath,activeView,mineType]);
   }
};
module.exports = PrintHandPlugin;

