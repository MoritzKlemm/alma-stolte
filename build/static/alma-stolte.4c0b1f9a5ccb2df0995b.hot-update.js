webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/CalenderPreview.js":
/*!**********************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/CalenderPreview.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ \"./node_modules/core-js/modules/es.regexp.constructor.js\");\n/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _CalenderPreviewItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CalenderPreviewItem */ \"./packages/alma-stolte-theme/src/components/CalenderPreviewItem.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const CalenderPreview=({state,actions})=>{// list of extracted <div>'s to map to <CalenderPreviewItem />\nconst[extractedItem,setExtractedItem]=Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]);// starting chain: finished rendering when: data fetched --> calender item <div>'s extracted\nObject(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(()=>{fetchCalenderData();},[]);// fetch calender data from public wp api\nconst fetchCalenderData=async()=>{try{const response=await axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://public-api.wordpress.com/wp/v2/sites/cmsalmastolte.wordpress.com/pages/258');extractCalenderItems(response.data.content.rendered);}catch(error){console.log(\"Fetching Calender Data went wrong: \"+error);}};// get seperate <div>..</div> calender items from api response\nconst extractCalenderItems=calData=>{// remove linebreaks and replace'm with ''\nconst RegExpFindLineBreaks=RegExp('(?:\\r\\n|\\r|\\n)','g');const lineBreaksRemovedData=calData.replace(RegExpFindLineBreaks,'');// seperate divs\nlet match;let i=0;// making regex search globally (g) and mulitline (m)\nconst RegExpSeperateDivs=RegExp('(<div>.*?<\\/div>)','gm');// as long as resultData matches AND it is three or less according to the 3 preview slots on homepage.\nwhile((match=RegExpSeperateDivs.exec(lineBreaksRemovedData))!==null&&i<=2){// adding each div to \"variable\" / hook \"extractedItem\"\nsetExtractedItem(prev=>[...prev,{key:i,value:match[0]}]);i++;}};return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsx\"])(StyledContainer,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsx\"])(StyledRow,{children:extractedItem.map(item=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsx\"])(_CalenderPreviewItem__WEBPACK_IMPORTED_MODULE_12__[\"default\"],{item:item},item.id);})})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(CalenderPreview));const breakPointXL=1199;const breakPointLG=991;const breakPointMD=767;const breakPointSM=575;const breakPointXS=424;const StyledContainer=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_7__[\"styled\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{target:\"egsgzrp1\",label:\"StyledContainer\"})( false?undefined:{name:\"nhffgz\",styles:\"margin:40px 0px;justify-content:center;border-top:1px solid #9B9DA5;border-bottom:1px solid #9B9DA5\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9DYWxlbmRlclByZXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUV5QyIsImZpbGUiOiIvVXNlcnMvbW9yaXR6a2xlbW0vRG9jdW1lbnRzL0Zpcm1hL1Byb2pla3RlL2FsbWEgc3RvbHRlL2NvZGUvYWxtYS1zdG9sdGUvcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvQ2FsZW5kZXJQcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCBzZXRTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBjc3MgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xuaW1wb3J0IENhbGVuZGVyUHJldmlld0l0ZW0gZnJvbSAnLi9DYWxlbmRlclByZXZpZXdJdGVtJztcblxuXG5jb25zdCBDYWxlbmRlclByZXZpZXcgPSAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG5cbiAgICAvLyBsaXN0IG9mIGV4dHJhY3RlZCA8ZGl2PidzIHRvIG1hcCB0byA8Q2FsZW5kZXJQcmV2aWV3SXRlbSAvPlxuICAgIGNvbnN0IFtleHRyYWN0ZWRJdGVtLCBzZXRFeHRyYWN0ZWRJdGVtXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIC8vIHN0YXJ0aW5nIGNoYWluOiBmaW5pc2hlZCByZW5kZXJpbmcgd2hlbjogZGF0YSBmZXRjaGVkIC0tPiBjYWxlbmRlciBpdGVtIDxkaXY+J3MgZXh0cmFjdGVkXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hDYWxlbmRlckRhdGEoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBmZXRjaCBjYWxlbmRlciBkYXRhIGZyb20gcHVibGljIHdwIGFwaVxuICAgIGNvbnN0IGZldGNoQ2FsZW5kZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3dwL3YyL3NpdGVzL2Ntc2FsbWFzdG9sdGUud29yZHByZXNzLmNvbS9wYWdlcy8yNTgnKVxuICAgICAgICAgICAgZXh0cmFjdENhbGVuZGVySXRlbXMocmVzcG9uc2UuZGF0YS5jb250ZW50LnJlbmRlcmVkKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyBDYWxlbmRlciBEYXRhIHdlbnQgd3Jvbmc6IFwiICsgZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgc2VwZXJhdGUgPGRpdj4uLjwvZGl2PiBjYWxlbmRlciBpdGVtcyBmcm9tIGFwaSByZXNwb25zZVxuICAgIGNvbnN0IGV4dHJhY3RDYWxlbmRlckl0ZW1zID0gKGNhbERhdGEpID0+IHtcblxuICAgICAgICAvLyByZW1vdmUgbGluZWJyZWFrcyBhbmQgcmVwbGFjZSdtIHdpdGggJydcbiAgICAgICAgY29uc3QgUmVnRXhwRmluZExpbmVCcmVha3MgPSBSZWdFeHAoJyg/OlxcclxcbnxcXHJ8XFxuKScsICdnJylcbiAgICAgICAgY29uc3QgbGluZUJyZWFrc1JlbW92ZWREYXRhID0gY2FsRGF0YS5yZXBsYWNlKFJlZ0V4cEZpbmRMaW5lQnJlYWtzLCAnJyk7XG5cbiAgICAgICAgLy8gc2VwZXJhdGUgZGl2c1xuICAgICAgICBsZXQgbWF0Y2g7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy8gbWFraW5nIHJlZ2V4IHNlYXJjaCBnbG9iYWxseSAoZykgYW5kIG11bGl0bGluZSAobSlcbiAgICAgICAgY29uc3QgUmVnRXhwU2VwZXJhdGVEaXZzID0gUmVnRXhwKCcoPGRpdj4uKj88XFwvZGl2PiknLCAnZ20nKVxuXG4gICAgICAgIC8vIGFzIGxvbmcgYXMgcmVzdWx0RGF0YSBtYXRjaGVzIEFORCBpdCBpcyB0aHJlZSBvciBsZXNzIGFjY29yZGluZyB0byB0aGUgMyBwcmV2aWV3IHNsb3RzIG9uIGhvbWVwYWdlLlxuICAgICAgICB3aGlsZSAoKChtYXRjaCA9IFJlZ0V4cFNlcGVyYXRlRGl2cy5leGVjKGxpbmVCcmVha3NSZW1vdmVkRGF0YSkpICE9PSBudWxsKSAmJiBpIDw9IDIpIHtcbiAgICAgICAgICAgIC8vIGFkZGluZyBlYWNoIGRpdiB0byBcInZhcmlhYmxlXCIgLyBob29rIFwiZXh0cmFjdGVkSXRlbVwiXG4gICAgICAgICAgICBzZXRFeHRyYWN0ZWRJdGVtKHByZXYgPT4gWy4uLnByZXYsIHtrZXk6IGksIHZhbHVlOiBtYXRjaFswXX0gXSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxuICAgICAgICAgICAgPFN0eWxlZFJvdz5cbiAgICAgICAgICAgICAgICB7ZXh0cmFjdGVkSXRlbS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYWxlbmRlclByZXZpZXdJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU3R5bGVkUm93PlxuICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQ2FsZW5kZXJQcmV2aWV3KTtcblxuY29uc3QgYnJlYWtQb2ludFhMID0gMTE5OTtcbmNvbnN0IGJyZWFrUG9pbnRMRyA9IDk5MTtcbmNvbnN0IGJyZWFrUG9pbnRNRCA9IDc2NztcbmNvbnN0IGJyZWFrUG9pbnRTTSA9IDU3NTtcbmNvbnN0IGJyZWFrUG9pbnRYUyA9IDQyNDtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG4gICAgbWFyZ2luOiA0MHB4IDBweDsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOUI5REE1OyBcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzlCOURBNTsgXG5gXG5cbmNvbnN0IFN0eWxlZFJvdyA9IHN0eWxlZChSb3cpYFxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const StyledRow=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_7__[\"styled\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{target:\"egsgzrp0\",label:\"StyledRow\"})( false?undefined:{name:\"1eoy87d\",styles:\"display:flex;justify-content:space-between\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9DYWxlbmRlclByZXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEU2QiIsImZpbGUiOiIvVXNlcnMvbW9yaXR6a2xlbW0vRG9jdW1lbnRzL0Zpcm1hL1Byb2pla3RlL2FsbWEgc3RvbHRlL2NvZGUvYWxtYS1zdG9sdGUvcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvQ2FsZW5kZXJQcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCBzZXRTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBjc3MgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xuaW1wb3J0IENhbGVuZGVyUHJldmlld0l0ZW0gZnJvbSAnLi9DYWxlbmRlclByZXZpZXdJdGVtJztcblxuXG5jb25zdCBDYWxlbmRlclByZXZpZXcgPSAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG5cbiAgICAvLyBsaXN0IG9mIGV4dHJhY3RlZCA8ZGl2PidzIHRvIG1hcCB0byA8Q2FsZW5kZXJQcmV2aWV3SXRlbSAvPlxuICAgIGNvbnN0IFtleHRyYWN0ZWRJdGVtLCBzZXRFeHRyYWN0ZWRJdGVtXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIC8vIHN0YXJ0aW5nIGNoYWluOiBmaW5pc2hlZCByZW5kZXJpbmcgd2hlbjogZGF0YSBmZXRjaGVkIC0tPiBjYWxlbmRlciBpdGVtIDxkaXY+J3MgZXh0cmFjdGVkXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hDYWxlbmRlckRhdGEoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBmZXRjaCBjYWxlbmRlciBkYXRhIGZyb20gcHVibGljIHdwIGFwaVxuICAgIGNvbnN0IGZldGNoQ2FsZW5kZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3dwL3YyL3NpdGVzL2Ntc2FsbWFzdG9sdGUud29yZHByZXNzLmNvbS9wYWdlcy8yNTgnKVxuICAgICAgICAgICAgZXh0cmFjdENhbGVuZGVySXRlbXMocmVzcG9uc2UuZGF0YS5jb250ZW50LnJlbmRlcmVkKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyBDYWxlbmRlciBEYXRhIHdlbnQgd3Jvbmc6IFwiICsgZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgc2VwZXJhdGUgPGRpdj4uLjwvZGl2PiBjYWxlbmRlciBpdGVtcyBmcm9tIGFwaSByZXNwb25zZVxuICAgIGNvbnN0IGV4dHJhY3RDYWxlbmRlckl0ZW1zID0gKGNhbERhdGEpID0+IHtcblxuICAgICAgICAvLyByZW1vdmUgbGluZWJyZWFrcyBhbmQgcmVwbGFjZSdtIHdpdGggJydcbiAgICAgICAgY29uc3QgUmVnRXhwRmluZExpbmVCcmVha3MgPSBSZWdFeHAoJyg/OlxcclxcbnxcXHJ8XFxuKScsICdnJylcbiAgICAgICAgY29uc3QgbGluZUJyZWFrc1JlbW92ZWREYXRhID0gY2FsRGF0YS5yZXBsYWNlKFJlZ0V4cEZpbmRMaW5lQnJlYWtzLCAnJyk7XG5cbiAgICAgICAgLy8gc2VwZXJhdGUgZGl2c1xuICAgICAgICBsZXQgbWF0Y2g7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgLy8gbWFraW5nIHJlZ2V4IHNlYXJjaCBnbG9iYWxseSAoZykgYW5kIG11bGl0bGluZSAobSlcbiAgICAgICAgY29uc3QgUmVnRXhwU2VwZXJhdGVEaXZzID0gUmVnRXhwKCcoPGRpdj4uKj88XFwvZGl2PiknLCAnZ20nKVxuXG4gICAgICAgIC8vIGFzIGxvbmcgYXMgcmVzdWx0RGF0YSBtYXRjaGVzIEFORCBpdCBpcyB0aHJlZSBvciBsZXNzIGFjY29yZGluZyB0byB0aGUgMyBwcmV2aWV3IHNsb3RzIG9uIGhvbWVwYWdlLlxuICAgICAgICB3aGlsZSAoKChtYXRjaCA9IFJlZ0V4cFNlcGVyYXRlRGl2cy5leGVjKGxpbmVCcmVha3NSZW1vdmVkRGF0YSkpICE9PSBudWxsKSAmJiBpIDw9IDIpIHtcbiAgICAgICAgICAgIC8vIGFkZGluZyBlYWNoIGRpdiB0byBcInZhcmlhYmxlXCIgLyBob29rIFwiZXh0cmFjdGVkSXRlbVwiXG4gICAgICAgICAgICBzZXRFeHRyYWN0ZWRJdGVtKHByZXYgPT4gWy4uLnByZXYsIHtrZXk6IGksIHZhbHVlOiBtYXRjaFswXX0gXSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxuICAgICAgICAgICAgPFN0eWxlZFJvdz5cbiAgICAgICAgICAgICAgICB7ZXh0cmFjdGVkSXRlbS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYWxlbmRlclByZXZpZXdJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU3R5bGVkUm93PlxuICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQ2FsZW5kZXJQcmV2aWV3KTtcblxuY29uc3QgYnJlYWtQb2ludFhMID0gMTE5OTtcbmNvbnN0IGJyZWFrUG9pbnRMRyA9IDk5MTtcbmNvbnN0IGJyZWFrUG9pbnRNRCA9IDc2NztcbmNvbnN0IGJyZWFrUG9pbnRTTSA9IDU3NTtcbmNvbnN0IGJyZWFrUG9pbnRYUyA9IDQyNDtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG4gICAgbWFyZ2luOiA0MHB4IDBweDsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOUI5REE1OyBcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzlCOURBNTsgXG5gXG5cbmNvbnN0IFN0eWxlZFJvdyA9IHN0eWxlZChSb3cpYFxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9DYWxlbmRlclByZXZpZXcuanM/YzA1NyJdLCJuYW1lcyI6WyJDYWxlbmRlclByZXZpZXciLCJzdGF0ZSIsImFjdGlvbnMiLCJleHRyYWN0ZWRJdGVtIiwic2V0RXh0cmFjdGVkSXRlbSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hDYWxlbmRlckRhdGEiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwiZXh0cmFjdENhbGVuZGVySXRlbXMiLCJkYXRhIiwiY29udGVudCIsInJlbmRlcmVkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2FsRGF0YSIsIlJlZ0V4cEZpbmRMaW5lQnJlYWtzIiwiUmVnRXhwIiwibGluZUJyZWFrc1JlbW92ZWREYXRhIiwicmVwbGFjZSIsIm1hdGNoIiwiaSIsIlJlZ0V4cFNlcGVyYXRlRGl2cyIsImV4ZWMiLCJwcmV2Iiwia2V5IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaWQiLCJjb25uZWN0IiwiYnJlYWtQb2ludFhMIiwiYnJlYWtQb2ludExHIiwiYnJlYWtQb2ludE1EIiwiYnJlYWtQb2ludFNNIiwiYnJlYWtQb2ludFhTIiwiU3R5bGVkQ29udGFpbmVyIiwiQ29udGFpbmVyIiwiU3R5bGVkUm93IiwiUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cVJBU0EsS0FBTUEsZ0JBQWUsQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUFELEdBQXdCLENBRTVDO0FBQ0EsS0FBTSxDQUFDQyxhQUFELENBQWdCQyxnQkFBaEIsRUFBb0NDLHNEQUFRLENBQUMsRUFBRCxDQUFsRCxDQUVBO0FBQ0FDLHVEQUFTLENBQUMsSUFBTSxDQUNaQyxpQkFBaUIsR0FDcEIsQ0FGUSxDQUVOLEVBRk0sQ0FBVCxDQUlBO0FBQ0EsS0FBTUEsa0JBQWlCLENBQUcsU0FBWSxDQUNsQyxHQUFJLENBQ0EsS0FBTUMsU0FBUSxDQUFHLEtBQU1DLDZDQUFLLENBQUNDLEdBQU4sQ0FBVSxvRkFBVixDQUF2QixDQUNBQyxvQkFBb0IsQ0FBQ0gsUUFBUSxDQUFDSSxJQUFULENBQWNDLE9BQWQsQ0FBc0JDLFFBQXZCLENBQXBCLENBQ0gsQ0FBQyxNQUFPQyxLQUFQLENBQWMsQ0FDWkMsT0FBTyxDQUFDQyxHQUFSLENBQVksc0NBQXdDRixLQUFwRCxFQUNILENBQ0osQ0FQRCxDQVNBO0FBQ0EsS0FBTUoscUJBQW9CLENBQUlPLE9BQUQsRUFBYSxDQUV0QztBQUNBLEtBQU1DLHFCQUFvQixDQUFHQyxNQUFNLENBQUMsZ0JBQUQsQ0FBbUIsR0FBbkIsQ0FBbkMsQ0FDQSxLQUFNQyxzQkFBcUIsQ0FBR0gsT0FBTyxDQUFDSSxPQUFSLENBQWdCSCxvQkFBaEIsQ0FBc0MsRUFBdEMsQ0FBOUIsQ0FFQTtBQUNBLEdBQUlJLE1BQUosQ0FDQSxHQUFJQyxFQUFDLENBQUcsQ0FBUixDQUNBO0FBQ0EsS0FBTUMsbUJBQWtCLENBQUdMLE1BQU0sQ0FBQyxtQkFBRCxDQUFzQixJQUF0QixDQUFqQyxDQUVBO0FBQ0EsTUFBUSxDQUFDRyxLQUFLLENBQUdFLGtCQUFrQixDQUFDQyxJQUFuQixDQUF3QkwscUJBQXhCLENBQVQsSUFBNkQsSUFBOUQsRUFBdUVHLENBQUMsRUFBSSxDQUFuRixDQUFzRixDQUNsRjtBQUNBcEIsZ0JBQWdCLENBQUN1QixJQUFJLEVBQUksQ0FBQyxHQUFHQSxJQUFKLENBQVUsQ0FBQ0MsR0FBRyxDQUFFSixDQUFOLENBQVNLLEtBQUssQ0FBRU4sS0FBSyxDQUFDLENBQUQsQ0FBckIsQ0FBVixDQUFULENBQWhCLENBQ0FDLENBQUMsR0FDSixDQUNKLENBbEJELENBb0JBLE1BQ0kseUVBQUMsZUFBRCxXQUNJLHdFQUFDLFNBQUQsV0FDS3JCLGFBQWEsQ0FBQzJCLEdBQWQsQ0FBbUJDLElBQUQsRUFBVSxDQUN6QixNQUFPLHlFQUFDLDZEQUFELEVBQW1DLElBQUksQ0FBRUEsSUFBekMsRUFBMEJBLElBQUksQ0FBQ0MsRUFBL0IsQ0FBUCxDQUNILENBRkEsQ0FETCxFQURKLEVBREosQ0FTSCxDQWxERCxDQW9EZUMsdUhBQU8sQ0FBQ2pDLGVBQUQsQ0FBdEIsRUFFQSxLQUFNa0MsYUFBWSxDQUFHLElBQXJCLENBQ0EsS0FBTUMsYUFBWSxDQUFHLEdBQXJCLENBQ0EsS0FBTUMsYUFBWSxDQUFHLEdBQXJCLENBQ0EsS0FBTUMsYUFBWSxDQUFHLEdBQXJCLENBQ0EsS0FBTUMsYUFBWSxDQUFHLEdBQXJCLENBRUEsS0FBTUMsZ0JBQWUsQ0FBRyxvRUFBTSxDQUFDQyxpRUFBUCw2Q0FBSCwyMElBQXJCLENBT0EsS0FBTUMsVUFBUyxDQUFHLG9FQUFNLENBQUNDLDREQUFQLHVDQUFILG14SUFBZiIsImZpbGUiOiIuL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9jb21wb25lbnRzL0NhbGVuZGVyUHJldmlldy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgc2V0U3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgY3NzIH0gZnJvbSAnZnJvbnRpdHknO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1JvdydcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCdcbmltcG9ydCBDYWxlbmRlclByZXZpZXdJdGVtIGZyb20gJy4vQ2FsZW5kZXJQcmV2aWV3SXRlbSc7XG5cblxuY29uc3QgQ2FsZW5kZXJQcmV2aWV3ID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuXG4gICAgLy8gbGlzdCBvZiBleHRyYWN0ZWQgPGRpdj4ncyB0byBtYXAgdG8gPENhbGVuZGVyUHJldmlld0l0ZW0gLz5cbiAgICBjb25zdCBbZXh0cmFjdGVkSXRlbSwgc2V0RXh0cmFjdGVkSXRlbV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvLyBzdGFydGluZyBjaGFpbjogZmluaXNoZWQgcmVuZGVyaW5nIHdoZW46IGRhdGEgZmV0Y2hlZCAtLT4gY2FsZW5kZXIgaXRlbSA8ZGl2PidzIGV4dHJhY3RlZFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoQ2FsZW5kZXJEYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gZmV0Y2ggY2FsZW5kZXIgZGF0YSBmcm9tIHB1YmxpYyB3cCBhcGlcbiAgICBjb25zdCBmZXRjaENhbGVuZGVyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS93cC92Mi9zaXRlcy9jbXNhbG1hc3RvbHRlLndvcmRwcmVzcy5jb20vcGFnZXMvMjU4JylcbiAgICAgICAgICAgIGV4dHJhY3RDYWxlbmRlckl0ZW1zKHJlc3BvbnNlLmRhdGEuY29udGVudC5yZW5kZXJlZClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgQ2FsZW5kZXIgRGF0YSB3ZW50IHdyb25nOiBcIiArIGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IHNlcGVyYXRlIDxkaXY+Li48L2Rpdj4gY2FsZW5kZXIgaXRlbXMgZnJvbSBhcGkgcmVzcG9uc2VcbiAgICBjb25zdCBleHRyYWN0Q2FsZW5kZXJJdGVtcyA9IChjYWxEYXRhKSA9PiB7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGxpbmVicmVha3MgYW5kIHJlcGxhY2UnbSB3aXRoICcnXG4gICAgICAgIGNvbnN0IFJlZ0V4cEZpbmRMaW5lQnJlYWtzID0gUmVnRXhwKCcoPzpcXHJcXG58XFxyfFxcbiknLCAnZycpXG4gICAgICAgIGNvbnN0IGxpbmVCcmVha3NSZW1vdmVkRGF0YSA9IGNhbERhdGEucmVwbGFjZShSZWdFeHBGaW5kTGluZUJyZWFrcywgJycpO1xuXG4gICAgICAgIC8vIHNlcGVyYXRlIGRpdnNcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIC8vIG1ha2luZyByZWdleCBzZWFyY2ggZ2xvYmFsbHkgKGcpIGFuZCBtdWxpdGxpbmUgKG0pXG4gICAgICAgIGNvbnN0IFJlZ0V4cFNlcGVyYXRlRGl2cyA9IFJlZ0V4cCgnKDxkaXY+Lio/PFxcL2Rpdj4pJywgJ2dtJylcblxuICAgICAgICAvLyBhcyBsb25nIGFzIHJlc3VsdERhdGEgbWF0Y2hlcyBBTkQgaXQgaXMgdGhyZWUgb3IgbGVzcyBhY2NvcmRpbmcgdG8gdGhlIDMgcHJldmlldyBzbG90cyBvbiBob21lcGFnZS5cbiAgICAgICAgd2hpbGUgKCgobWF0Y2ggPSBSZWdFeHBTZXBlcmF0ZURpdnMuZXhlYyhsaW5lQnJlYWtzUmVtb3ZlZERhdGEpKSAhPT0gbnVsbCkgJiYgaSA8PSAyKSB7XG4gICAgICAgICAgICAvLyBhZGRpbmcgZWFjaCBkaXYgdG8gXCJ2YXJpYWJsZVwiIC8gaG9vayBcImV4dHJhY3RlZEl0ZW1cIlxuICAgICAgICAgICAgc2V0RXh0cmFjdGVkSXRlbShwcmV2ID0+IFsuLi5wcmV2LCB7a2V5OiBpLCB2YWx1ZTogbWF0Y2hbMF19IF0pO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxTdHlsZWRSb3c+XG4gICAgICAgICAgICAgICAge2V4dHJhY3RlZEl0ZW0ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2FsZW5kZXJQcmV2aWV3SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N0eWxlZFJvdz5cbiAgICAgICAgPC9TdHlsZWRDb250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KENhbGVuZGVyUHJldmlldyk7XG5cbmNvbnN0IGJyZWFrUG9pbnRYTCA9IDExOTk7XG5jb25zdCBicmVha1BvaW50TEcgPSA5OTE7XG5jb25zdCBicmVha1BvaW50TUQgPSA3Njc7XG5jb25zdCBicmVha1BvaW50U00gPSA1NzU7XG5jb25zdCBicmVha1BvaW50WFMgPSA0MjQ7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZChDb250YWluZXIpYFxuICAgIG1hcmdpbjogNDBweCAwcHg7IFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzlCOURBNTsgXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5QjlEQTU7IFxuYFxuXG5jb25zdCBTdHlsZWRSb3cgPSBzdHlsZWQoUm93KWBcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/CalenderPreview.js\n");

/***/ })

})