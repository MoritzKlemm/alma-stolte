webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/MediaPage.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/MediaPage.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ \"./node_modules/core-js/modules/es.regexp.constructor.js\");\n/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _MediaIframe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MediaIframe */ \"./packages/alma-stolte-theme/src/components/MediaIframe.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const MediaPage=({state})=>{// saving ID of \"media\" page to be independent from ID when it should be deleted and recreated\nconst[mediaPageID]=Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(state.source.get(state.router.link).id);const[mediaContent]=Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(state.source[\"page\"][mediaPageID].content.rendered);const[extractedIframes,setExtractedIframes]=Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]);const extractIframes=()=>{console.log(\"fire\");// remove linebreaks and replace'm with ''\nconst RegExpFindLineBreaks=RegExp('(?:\\r\\n|\\r|\\n)','g');const lineBreaksRemovedData=mediaContent.replace(RegExpFindLineBreaks,'');// extract iframes\nlet match;const RegExpSeperateIframes=RegExp('<\\s*iframe[^>]*>(.*?)<\\s*/\\s*iframe>','gm');// as long as resultData matches AND it is three or less according to the 3 preview slots on homepage.\nwhile((match=RegExpSeperateIframes.exec(lineBreaksRemovedData))!==null){setExtractedIframes(prev=>[...prev,{key:i,value:match[0]}]);}};return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsxs\"])(StyledRow,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(\"button\",{onClick:extractIframes,children:\"go\"}),extractedIframes.map(item=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(_MediaIframe__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{item:item},item.id);})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(StyledRow,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(StyledCol,{md:12,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__[\"jsx\"])(StyledRenderDiv,{dangerouslySetInnerHTML:{__html:mediaContent}})})})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(MediaPage));const StyledRow=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_5__[\"styled\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{target:\"enms1wo3\",label:\"StyledRow\"})( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9NZWRpYVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUQ2QiIsImZpbGUiOiIvVXNlcnMvbW9yaXR6a2xlbW0vRG9jdW1lbnRzL0Zpcm1hL1Byb2pla3RlL2FsbWEgc3RvbHRlL2NvZGUvYWxtYS1zdG9sdGUvcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvTWVkaWFQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgY3NzLCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmltcG9ydCBNZWRpYUlmcmFtZSBmcm9tICcuL01lZGlhSWZyYW1lJ1xuXG5jb25zdCBNZWRpYVBhZ2UgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgICAvLyBzYXZpbmcgSUQgb2YgXCJtZWRpYVwiIHBhZ2UgdG8gYmUgaW5kZXBlbmRlbnQgZnJvbSBJRCB3aGVuIGl0IHNob3VsZCBiZSBkZWxldGVkIGFuZCByZWNyZWF0ZWRcbiAgICBjb25zdCBbbWVkaWFQYWdlSURdID0gdXNlU3RhdGUoc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaykuaWQpXG4gICAgY29uc3QgW21lZGlhQ29udGVudF0gPSB1c2VTdGF0ZShzdGF0ZS5zb3VyY2VbXCJwYWdlXCJdW21lZGlhUGFnZUlEXS5jb250ZW50LnJlbmRlcmVkKTtcblxuICAgIGNvbnN0IFtleHRyYWN0ZWRJZnJhbWVzLCBzZXRFeHRyYWN0ZWRJZnJhbWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGV4dHJhY3RJZnJhbWVzID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZVwiKVxuICAgICAgICAvLyByZW1vdmUgbGluZWJyZWFrcyBhbmQgcmVwbGFjZSdtIHdpdGggJydcbiAgICAgICAgY29uc3QgUmVnRXhwRmluZExpbmVCcmVha3MgPSBSZWdFeHAoJyg/OlxcclxcbnxcXHJ8XFxuKScsICdnJylcbiAgICAgICAgY29uc3QgbGluZUJyZWFrc1JlbW92ZWREYXRhID0gbWVkaWFDb250ZW50LnJlcGxhY2UoUmVnRXhwRmluZExpbmVCcmVha3MsICcnKTsgICBcblxuICAgICAgICAvLyBleHRyYWN0IGlmcmFtZXNcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICBjb25zdCBSZWdFeHBTZXBlcmF0ZUlmcmFtZXMgPSBSZWdFeHAoJzxcXHMqaWZyYW1lW14+XSo+KC4qPyk8XFxzKi9cXHMqaWZyYW1lPicsICdnbScpXG5cbiAgICAgICAgLy8gYXMgbG9uZyBhcyByZXN1bHREYXRhIG1hdGNoZXMgQU5EIGl0IGlzIHRocmVlIG9yIGxlc3MgYWNjb3JkaW5nIHRvIHRoZSAzIHByZXZpZXcgc2xvdHMgb24gaG9tZXBhZ2UuXG4gICAgICAgIHdoaWxlICgoKG1hdGNoID0gUmVnRXhwU2VwZXJhdGVJZnJhbWVzLmV4ZWMobGluZUJyZWFrc1JlbW92ZWREYXRhKSkgIT09IG51bGwpKSB7XG4gICAgICAgICAgICBzZXRFeHRyYWN0ZWRJZnJhbWVzKHByZXYgPT4gWy4uLnByZXYsIHsga2V5OiBpLCB2YWx1ZTogbWF0Y2hbMF0gfV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxTdHlsZWRSb3c+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtleHRyYWN0SWZyYW1lc30+Z288L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7ZXh0cmFjdGVkSWZyYW1lcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZWRpYUlmcmFtZSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N0eWxlZFJvdz5cbiAgICAgICAgICAgIDxTdHlsZWRSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkUmVuZGVyRGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVkaWFDb250ZW50IH19IC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDb2w+XG4gICAgICAgICAgICA8L1N0eWxlZFJvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lZGlhUGFnZSk7XG5cbmNvbnN0IFN0eWxlZFJvdyA9IHN0eWxlZChSb3cpYFxuYFxuXG5jb25zdCBTdHlsZWRDb2wgPSBzdHlsZWQoQ29sKWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcblxuYFxuXG5jb25zdCBTdHlsZWRJZnJhbWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuXG4gICAgJiBpZnJhbWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7IHRvcDogMDsgICBcbiAgICB9XG5gXG5cbmNvbnN0IFN0eWxlZFJlbmRlckRpdiA9IHN0eWxlZC5kaXZgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7IFxuYCAiXX0= */\");const StyledCol=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_5__[\"styled\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{target:\"enms1wo2\",label:\"StyledCol\"})( false?undefined:{name:\"zl1inp\",styles:\"display:flex;justify-content:center\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9NZWRpYVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0Q2QiIsImZpbGUiOiIvVXNlcnMvbW9yaXR6a2xlbW0vRG9jdW1lbnRzL0Zpcm1hL1Byb2pla3RlL2FsbWEgc3RvbHRlL2NvZGUvYWxtYS1zdG9sdGUvcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvTWVkaWFQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgY3NzLCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmltcG9ydCBNZWRpYUlmcmFtZSBmcm9tICcuL01lZGlhSWZyYW1lJ1xuXG5jb25zdCBNZWRpYVBhZ2UgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgICAvLyBzYXZpbmcgSUQgb2YgXCJtZWRpYVwiIHBhZ2UgdG8gYmUgaW5kZXBlbmRlbnQgZnJvbSBJRCB3aGVuIGl0IHNob3VsZCBiZSBkZWxldGVkIGFuZCByZWNyZWF0ZWRcbiAgICBjb25zdCBbbWVkaWFQYWdlSURdID0gdXNlU3RhdGUoc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaykuaWQpXG4gICAgY29uc3QgW21lZGlhQ29udGVudF0gPSB1c2VTdGF0ZShzdGF0ZS5zb3VyY2VbXCJwYWdlXCJdW21lZGlhUGFnZUlEXS5jb250ZW50LnJlbmRlcmVkKTtcblxuICAgIGNvbnN0IFtleHRyYWN0ZWRJZnJhbWVzLCBzZXRFeHRyYWN0ZWRJZnJhbWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGV4dHJhY3RJZnJhbWVzID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZVwiKVxuICAgICAgICAvLyByZW1vdmUgbGluZWJyZWFrcyBhbmQgcmVwbGFjZSdtIHdpdGggJydcbiAgICAgICAgY29uc3QgUmVnRXhwRmluZExpbmVCcmVha3MgPSBSZWdFeHAoJyg/OlxcclxcbnxcXHJ8XFxuKScsICdnJylcbiAgICAgICAgY29uc3QgbGluZUJyZWFrc1JlbW92ZWREYXRhID0gbWVkaWFDb250ZW50LnJlcGxhY2UoUmVnRXhwRmluZExpbmVCcmVha3MsICcnKTsgICBcblxuICAgICAgICAvLyBleHRyYWN0IGlmcmFtZXNcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICBjb25zdCBSZWdFeHBTZXBlcmF0ZUlmcmFtZXMgPSBSZWdFeHAoJzxcXHMqaWZyYW1lW14+XSo+KC4qPyk8XFxzKi9cXHMqaWZyYW1lPicsICdnbScpXG5cbiAgICAgICAgLy8gYXMgbG9uZyBhcyByZXN1bHREYXRhIG1hdGNoZXMgQU5EIGl0IGlzIHRocmVlIG9yIGxlc3MgYWNjb3JkaW5nIHRvIHRoZSAzIHByZXZpZXcgc2xvdHMgb24gaG9tZXBhZ2UuXG4gICAgICAgIHdoaWxlICgoKG1hdGNoID0gUmVnRXhwU2VwZXJhdGVJZnJhbWVzLmV4ZWMobGluZUJyZWFrc1JlbW92ZWREYXRhKSkgIT09IG51bGwpKSB7XG4gICAgICAgICAgICBzZXRFeHRyYWN0ZWRJZnJhbWVzKHByZXYgPT4gWy4uLnByZXYsIHsga2V5OiBpLCB2YWx1ZTogbWF0Y2hbMF0gfV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxTdHlsZWRSb3c+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtleHRyYWN0SWZyYW1lc30+Z288L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7ZXh0cmFjdGVkSWZyYW1lcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZWRpYUlmcmFtZSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N0eWxlZFJvdz5cbiAgICAgICAgICAgIDxTdHlsZWRSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkUmVuZGVyRGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVkaWFDb250ZW50IH19IC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDb2w+XG4gICAgICAgICAgICA8L1N0eWxlZFJvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lZGlhUGFnZSk7XG5cbmNvbnN0IFN0eWxlZFJvdyA9IHN0eWxlZChSb3cpYFxuYFxuXG5jb25zdCBTdHlsZWRDb2wgPSBzdHlsZWQoQ29sKWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcblxuYFxuXG5jb25zdCBTdHlsZWRJZnJhbWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuXG4gICAgJiBpZnJhbWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7IHRvcDogMDsgICBcbiAgICB9XG5gXG5cbmNvbnN0IFN0eWxlZFJlbmRlckRpdiA9IHN0eWxlZC5kaXZgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7IFxuYCAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const StyledIframeWrapper=Object(frontity__WEBPACK_IMPORTED_MODULE_5__[\"styled\"])(\"div\",{target:\"enms1wo1\",label:\"StyledIframeWrapper\"})( false?undefined:{name:\"1a3w22b\",styles:\"border:2px solid blue;& iframe{position:absolute;width:100%;height:100%;left:0;top:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9NZWRpYVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERzQyIsImZpbGUiOiIvVXNlcnMvbW9yaXR6a2xlbW0vRG9jdW1lbnRzL0Zpcm1hL1Byb2pla3RlL2FsbWEgc3RvbHRlL2NvZGUvYWxtYS1zdG9sdGUvcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvTWVkaWFQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgY3NzLCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmltcG9ydCBNZWRpYUlmcmFtZSBmcm9tICcuL01lZGlhSWZyYW1lJ1xuXG5jb25zdCBNZWRpYVBhZ2UgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgICAvLyBzYXZpbmcgSUQgb2YgXCJtZWRpYVwiIHBhZ2UgdG8gYmUgaW5kZXBlbmRlbnQgZnJvbSBJRCB3aGVuIGl0IHNob3VsZCBiZSBkZWxldGVkIGFuZCByZWNyZWF0ZWRcbiAgICBjb25zdCBbbWVkaWFQYWdlSURdID0gdXNlU3RhdGUoc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaykuaWQpXG4gICAgY29uc3QgW21lZGlhQ29udGVudF0gPSB1c2VTdGF0ZShzdGF0ZS5zb3VyY2VbXCJwYWdlXCJdW21lZGlhUGFnZUlEXS5jb250ZW50LnJlbmRlcmVkKTtcblxuICAgIGNvbnN0IFtleHRyYWN0ZWRJZnJhbWVzLCBzZXRFeHRyYWN0ZWRJZnJhbWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGV4dHJhY3RJZnJhbWVzID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZVwiKVxuICAgICAgICAvLyByZW1vdmUgbGluZWJyZWFrcyBhbmQgcmVwbGFjZSdtIHdpdGggJydcbiAgICAgICAgY29uc3QgUmVnRXhwRmluZExpbmVCcmVha3MgPSBSZWdFeHAoJyg/OlxcclxcbnxcXHJ8XFxuKScsICdnJylcbiAgICAgICAgY29uc3QgbGluZUJyZWFrc1JlbW92ZWREYXRhID0gbWVkaWFDb250ZW50LnJlcGxhY2UoUmVnRXhwRmluZExpbmVCcmVha3MsICcnKTsgICBcblxuICAgICAgICAvLyBleHRyYWN0IGlmcmFtZXNcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICBjb25zdCBSZWdFeHBTZXBlcmF0ZUlmcmFtZXMgPSBSZWdFeHAoJzxcXHMqaWZyYW1lW14+XSo+KC4qPyk8XFxzKi9cXHMqaWZyYW1lPicsICdnbScpXG5cbiAgICAgICAgLy8gYXMgbG9uZyBhcyByZXN1bHREYXRhIG1hdGNoZXMgQU5EIGl0IGlzIHRocmVlIG9yIGxlc3MgYWNjb3JkaW5nIHRvIHRoZSAzIHByZXZpZXcgc2xvdHMgb24gaG9tZXBhZ2UuXG4gICAgICAgIHdoaWxlICgoKG1hdGNoID0gUmVnRXhwU2VwZXJhdGVJZnJhbWVzLmV4ZWMobGluZUJyZWFrc1JlbW92ZWREYXRhKSkgIT09IG51bGwpKSB7XG4gICAgICAgICAgICBzZXRFeHRyYWN0ZWRJZnJhbWVzKHByZXYgPT4gWy4uLnByZXYsIHsga2V5OiBpLCB2YWx1ZTogbWF0Y2hbMF0gfV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxTdHlsZWRSb3c+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtleHRyYWN0SWZyYW1lc30+Z288L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7ZXh0cmFjdGVkSWZyYW1lcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZWRpYUlmcmFtZSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N0eWxlZFJvdz5cbiAgICAgICAgICAgIDxTdHlsZWRSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkUmVuZGVyRGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVkaWFDb250ZW50IH19IC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDb2w+XG4gICAgICAgICAgICA8L1N0eWxlZFJvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lZGlhUGFnZSk7XG5cbmNvbnN0IFN0eWxlZFJvdyA9IHN0eWxlZChSb3cpYFxuYFxuXG5jb25zdCBTdHlsZWRDb2wgPSBzdHlsZWQoQ29sKWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcblxuYFxuXG5jb25zdCBTdHlsZWRJZnJhbWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuXG4gICAgJiBpZnJhbWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7IHRvcDogMDsgICBcbiAgICB9XG5gXG5cbmNvbnN0IFN0eWxlZFJlbmRlckRpdiA9IHN0eWxlZC5kaXZgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7IFxuYCAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const StyledRenderDiv=Object(frontity__WEBPACK_IMPORTED_MODULE_5__[\"styled\"])(\"div\",{target:\"enms1wo0\",label:\"StyledRenderDiv\"})( false?undefined:{name:\"21ns5g\",styles:\"text-align:center;width:100%;border:2px solid red\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9NZWRpYVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVrQyIsImZpbGUiOiIvVXNlcnMvbW9yaXR6a2xlbW0vRG9jdW1lbnRzL0Zpcm1hL1Byb2pla3RlL2FsbWEgc3RvbHRlL2NvZGUvYWxtYS1zdG9sdGUvcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvTWVkaWFQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgY3NzLCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmltcG9ydCBNZWRpYUlmcmFtZSBmcm9tICcuL01lZGlhSWZyYW1lJ1xuXG5jb25zdCBNZWRpYVBhZ2UgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgICAvLyBzYXZpbmcgSUQgb2YgXCJtZWRpYVwiIHBhZ2UgdG8gYmUgaW5kZXBlbmRlbnQgZnJvbSBJRCB3aGVuIGl0IHNob3VsZCBiZSBkZWxldGVkIGFuZCByZWNyZWF0ZWRcbiAgICBjb25zdCBbbWVkaWFQYWdlSURdID0gdXNlU3RhdGUoc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaykuaWQpXG4gICAgY29uc3QgW21lZGlhQ29udGVudF0gPSB1c2VTdGF0ZShzdGF0ZS5zb3VyY2VbXCJwYWdlXCJdW21lZGlhUGFnZUlEXS5jb250ZW50LnJlbmRlcmVkKTtcblxuICAgIGNvbnN0IFtleHRyYWN0ZWRJZnJhbWVzLCBzZXRFeHRyYWN0ZWRJZnJhbWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGV4dHJhY3RJZnJhbWVzID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZVwiKVxuICAgICAgICAvLyByZW1vdmUgbGluZWJyZWFrcyBhbmQgcmVwbGFjZSdtIHdpdGggJydcbiAgICAgICAgY29uc3QgUmVnRXhwRmluZExpbmVCcmVha3MgPSBSZWdFeHAoJyg/OlxcclxcbnxcXHJ8XFxuKScsICdnJylcbiAgICAgICAgY29uc3QgbGluZUJyZWFrc1JlbW92ZWREYXRhID0gbWVkaWFDb250ZW50LnJlcGxhY2UoUmVnRXhwRmluZExpbmVCcmVha3MsICcnKTsgICBcblxuICAgICAgICAvLyBleHRyYWN0IGlmcmFtZXNcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICBjb25zdCBSZWdFeHBTZXBlcmF0ZUlmcmFtZXMgPSBSZWdFeHAoJzxcXHMqaWZyYW1lW14+XSo+KC4qPyk8XFxzKi9cXHMqaWZyYW1lPicsICdnbScpXG5cbiAgICAgICAgLy8gYXMgbG9uZyBhcyByZXN1bHREYXRhIG1hdGNoZXMgQU5EIGl0IGlzIHRocmVlIG9yIGxlc3MgYWNjb3JkaW5nIHRvIHRoZSAzIHByZXZpZXcgc2xvdHMgb24gaG9tZXBhZ2UuXG4gICAgICAgIHdoaWxlICgoKG1hdGNoID0gUmVnRXhwU2VwZXJhdGVJZnJhbWVzLmV4ZWMobGluZUJyZWFrc1JlbW92ZWREYXRhKSkgIT09IG51bGwpKSB7XG4gICAgICAgICAgICBzZXRFeHRyYWN0ZWRJZnJhbWVzKHByZXYgPT4gWy4uLnByZXYsIHsga2V5OiBpLCB2YWx1ZTogbWF0Y2hbMF0gfV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxTdHlsZWRSb3c+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtleHRyYWN0SWZyYW1lc30+Z288L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7ZXh0cmFjdGVkSWZyYW1lcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZWRpYUlmcmFtZSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N0eWxlZFJvdz5cbiAgICAgICAgICAgIDxTdHlsZWRSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkUmVuZGVyRGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVkaWFDb250ZW50IH19IC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDb2w+XG4gICAgICAgICAgICA8L1N0eWxlZFJvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lZGlhUGFnZSk7XG5cbmNvbnN0IFN0eWxlZFJvdyA9IHN0eWxlZChSb3cpYFxuYFxuXG5jb25zdCBTdHlsZWRDb2wgPSBzdHlsZWQoQ29sKWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcblxuYFxuXG5jb25zdCBTdHlsZWRJZnJhbWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuXG4gICAgJiBpZnJhbWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7IHRvcDogMDsgICBcbiAgICB9XG5gXG5cbmNvbnN0IFN0eWxlZFJlbmRlckRpdiA9IHN0eWxlZC5kaXZgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7IFxuYCAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9NZWRpYVBhZ2UuanM/NGY2YiJdLCJuYW1lcyI6WyJNZWRpYVBhZ2UiLCJzdGF0ZSIsIm1lZGlhUGFnZUlEIiwidXNlU3RhdGUiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwiaWQiLCJtZWRpYUNvbnRlbnQiLCJjb250ZW50IiwicmVuZGVyZWQiLCJleHRyYWN0ZWRJZnJhbWVzIiwic2V0RXh0cmFjdGVkSWZyYW1lcyIsImV4dHJhY3RJZnJhbWVzIiwiY29uc29sZSIsImxvZyIsIlJlZ0V4cEZpbmRMaW5lQnJlYWtzIiwiUmVnRXhwIiwibGluZUJyZWFrc1JlbW92ZWREYXRhIiwicmVwbGFjZSIsIm1hdGNoIiwiUmVnRXhwU2VwZXJhdGVJZnJhbWVzIiwiZXhlYyIsInByZXYiLCJrZXkiLCJpIiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiX19odG1sIiwiY29ubmVjdCIsIlN0eWxlZFJvdyIsIlJvdyIsIlN0eWxlZENvbCIsIkNvbCIsIlN0eWxlZElmcmFtZVdyYXBwZXIiLCJTdHlsZWRSZW5kZXJEaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FSQVNBLEtBQU1BLFVBQVMsQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBRTdCO0FBQ0EsS0FBTSxDQUFDQyxXQUFELEVBQWdCQyxzREFBUSxDQUFDRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkosS0FBSyxDQUFDSyxNQUFOLENBQWFDLElBQTlCLEVBQW9DQyxFQUFyQyxDQUE5QixDQUNBLEtBQU0sQ0FBQ0MsWUFBRCxFQUFpQk4sc0RBQVEsQ0FBQ0YsS0FBSyxDQUFDRyxNQUFOLENBQWEsTUFBYixFQUFxQkYsV0FBckIsRUFBa0NRLE9BQWxDLENBQTBDQyxRQUEzQyxDQUEvQixDQUVBLEtBQU0sQ0FBQ0MsZ0JBQUQsQ0FBbUJDLG1CQUFuQixFQUEwQ1Ysc0RBQVEsQ0FBQyxFQUFELENBQXhELENBRUEsS0FBTVcsZUFBYyxDQUFHLElBQU0sQ0FFekJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFDQTtBQUNBLEtBQU1DLHFCQUFvQixDQUFHQyxNQUFNLENBQUMsZ0JBQUQsQ0FBbUIsR0FBbkIsQ0FBbkMsQ0FDQSxLQUFNQyxzQkFBcUIsQ0FBR1YsWUFBWSxDQUFDVyxPQUFiLENBQXFCSCxvQkFBckIsQ0FBMkMsRUFBM0MsQ0FBOUIsQ0FFQTtBQUNBLEdBQUlJLE1BQUosQ0FDQSxLQUFNQyxzQkFBcUIsQ0FBR0osTUFBTSxDQUFDLHNDQUFELENBQXlDLElBQXpDLENBQXBDLENBRUE7QUFDQSxNQUFRLENBQUNHLEtBQUssQ0FBR0MscUJBQXFCLENBQUNDLElBQXRCLENBQTJCSixxQkFBM0IsQ0FBVCxJQUFnRSxJQUF4RSxDQUErRSxDQUMzRU4sbUJBQW1CLENBQUNXLElBQUksRUFBSSxDQUFDLEdBQUdBLElBQUosQ0FBVSxDQUFFQyxHQUFHLENBQUVDLENBQVAsQ0FBVUMsS0FBSyxDQUFFTixLQUFLLENBQUMsQ0FBRCxDQUF0QixDQUFWLENBQVQsQ0FBbkIsQ0FDSCxDQUNKLENBZkQsQ0FpQkEsTUFDSSwwRUFBQyxpRUFBRCxZQUNJLHlFQUFDLFNBQUQsWUFDSSxrRkFBUSxPQUFPLENBQUVQLGNBQWpCLGdCQURKLENBRUtGLGdCQUFnQixDQUFDZ0IsR0FBakIsQ0FBc0JDLElBQUQsRUFBVSxDQUM1QixNQUFPLHlFQUFDLHFEQUFELEVBQTJCLElBQUksQ0FBRUEsSUFBakMsRUFBa0JBLElBQUksQ0FBQ3JCLEVBQXZCLENBQVAsQ0FDSCxDQUZBLENBRkwsR0FESixDQU9JLHdFQUFDLFNBQUQsV0FDSSx3RUFBQyxTQUFELEVBQVcsRUFBRSxDQUFFLEVBQWYsVUFDSSx3RUFBQyxlQUFELEVBQWlCLHVCQUF1QixDQUFFLENBQUVzQixNQUFNLENBQUVyQixZQUFWLENBQTFDLEVBREosRUFESixFQVBKLEdBREosQ0FlSCxDQXhDRCxDQTBDZXNCLHVIQUFPLENBQUMvQixTQUFELENBQXRCLEVBRUEsS0FBTWdDLFVBQVMsQ0FBRyxvRUFBTSxDQUFDQywyREFBUCx1Q0FBSCxnckhBQWYsQ0FHQSxLQUFNQyxVQUFTLENBQUcsb0VBQU0sQ0FBQ0MsMkRBQVAsdUNBQUgsMnhIQUFmLENBTUEsS0FBTUMsb0JBQW1CLDg3SEFBekIsQ0FXQSxLQUFNQyxnQkFBZSxvNUhBQXJCIiwiZmlsZSI6Ii4vcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvTWVkaWFQYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgY3NzLCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmltcG9ydCBNZWRpYUlmcmFtZSBmcm9tICcuL01lZGlhSWZyYW1lJ1xuXG5jb25zdCBNZWRpYVBhZ2UgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgICAvLyBzYXZpbmcgSUQgb2YgXCJtZWRpYVwiIHBhZ2UgdG8gYmUgaW5kZXBlbmRlbnQgZnJvbSBJRCB3aGVuIGl0IHNob3VsZCBiZSBkZWxldGVkIGFuZCByZWNyZWF0ZWRcbiAgICBjb25zdCBbbWVkaWFQYWdlSURdID0gdXNlU3RhdGUoc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaykuaWQpXG4gICAgY29uc3QgW21lZGlhQ29udGVudF0gPSB1c2VTdGF0ZShzdGF0ZS5zb3VyY2VbXCJwYWdlXCJdW21lZGlhUGFnZUlEXS5jb250ZW50LnJlbmRlcmVkKTtcblxuICAgIGNvbnN0IFtleHRyYWN0ZWRJZnJhbWVzLCBzZXRFeHRyYWN0ZWRJZnJhbWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGV4dHJhY3RJZnJhbWVzID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZVwiKVxuICAgICAgICAvLyByZW1vdmUgbGluZWJyZWFrcyBhbmQgcmVwbGFjZSdtIHdpdGggJydcbiAgICAgICAgY29uc3QgUmVnRXhwRmluZExpbmVCcmVha3MgPSBSZWdFeHAoJyg/OlxcclxcbnxcXHJ8XFxuKScsICdnJylcbiAgICAgICAgY29uc3QgbGluZUJyZWFrc1JlbW92ZWREYXRhID0gbWVkaWFDb250ZW50LnJlcGxhY2UoUmVnRXhwRmluZExpbmVCcmVha3MsICcnKTsgICBcblxuICAgICAgICAvLyBleHRyYWN0IGlmcmFtZXNcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICBjb25zdCBSZWdFeHBTZXBlcmF0ZUlmcmFtZXMgPSBSZWdFeHAoJzxcXHMqaWZyYW1lW14+XSo+KC4qPyk8XFxzKi9cXHMqaWZyYW1lPicsICdnbScpXG5cbiAgICAgICAgLy8gYXMgbG9uZyBhcyByZXN1bHREYXRhIG1hdGNoZXMgQU5EIGl0IGlzIHRocmVlIG9yIGxlc3MgYWNjb3JkaW5nIHRvIHRoZSAzIHByZXZpZXcgc2xvdHMgb24gaG9tZXBhZ2UuXG4gICAgICAgIHdoaWxlICgoKG1hdGNoID0gUmVnRXhwU2VwZXJhdGVJZnJhbWVzLmV4ZWMobGluZUJyZWFrc1JlbW92ZWREYXRhKSkgIT09IG51bGwpKSB7XG4gICAgICAgICAgICBzZXRFeHRyYWN0ZWRJZnJhbWVzKHByZXYgPT4gWy4uLnByZXYsIHsga2V5OiBpLCB2YWx1ZTogbWF0Y2hbMF0gfV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxTdHlsZWRSb3c+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtleHRyYWN0SWZyYW1lc30+Z288L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7ZXh0cmFjdGVkSWZyYW1lcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNZWRpYUlmcmFtZSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N0eWxlZFJvdz5cbiAgICAgICAgICAgIDxTdHlsZWRSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkUmVuZGVyRGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVkaWFDb250ZW50IH19IC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDb2w+XG4gICAgICAgICAgICA8L1N0eWxlZFJvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lZGlhUGFnZSk7XG5cbmNvbnN0IFN0eWxlZFJvdyA9IHN0eWxlZChSb3cpYFxuYFxuXG5jb25zdCBTdHlsZWRDb2wgPSBzdHlsZWQoQ29sKWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcblxuYFxuXG5jb25zdCBTdHlsZWRJZnJhbWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuXG4gICAgJiBpZnJhbWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7IHRvcDogMDsgICBcbiAgICB9XG5gXG5cbmNvbnN0IFN0eWxlZFJlbmRlckRpdiA9IHN0eWxlZC5kaXZgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7IFxuYCAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/MediaPage.js\n");

/***/ })

})