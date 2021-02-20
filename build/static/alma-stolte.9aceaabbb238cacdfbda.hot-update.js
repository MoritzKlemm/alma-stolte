webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/MediaPage.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/MediaPage.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const MediaPage=({state})=>{// saving ID of \"media\" page to be independent from ID when it should be deleted and recreated\nconst[mediaPageID]=Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(state.source.get(state.router.link).id);const[mediaContent]=Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(state.source[\"page\"][mediaPageID].content.rendered);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(StyledCol,{md:12,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(StyledRenderDiv,{dangerouslySetInnerHTML:{__html:mediaContent}})})})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(MediaPage));const StyledCol=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{target:\"enms1wo1\",label:\"StyledCol\"})( false?undefined:{name:\"gawi7g\",styles:\"display:flex;justify-content:center;padding:0px 15px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9NZWRpYVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkI2QiIsImZpbGUiOiIvVXNlcnMvbW9yaXR6a2xlbW0vRG9jdW1lbnRzL0Zpcm1hL1Byb2pla3RlL2FsbWEgc3RvbHRlL2NvZGUvYWxtYS1zdG9sdGUvcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvTWVkaWFQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgY3NzLCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7UmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xuXG5jb25zdCBNZWRpYVBhZ2UgPSAoe3N0YXRlfSkgPT4ge1xuXG4gICAgLy8gc2F2aW5nIElEIG9mIFwibWVkaWFcIiBwYWdlIHRvIGJlIGluZGVwZW5kZW50IGZyb20gSUQgd2hlbiBpdCBzaG91bGQgYmUgZGVsZXRlZCBhbmQgcmVjcmVhdGVkXG4gICAgY29uc3QgW21lZGlhUGFnZUlEXSA9IHVzZVN0YXRlKHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspLmlkKVxuICAgIGNvbnN0IFttZWRpYUNvbnRlbnRdID0gdXNlU3RhdGUoc3RhdGUuc291cmNlW1wicGFnZVwiXVttZWRpYVBhZ2VJRF0uY29udGVudC5yZW5kZXJlZCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkQ29sIG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRSZW5kZXJEaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtZWRpYUNvbnRlbnR9fSAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZWRpYVBhZ2UpO1xuXG5cbmNvbnN0IFN0eWxlZENvbCA9IHN0eWxlZChDb2wpYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgIHBhZGRpbmc6IDBweCAxNXB4OyBcbmBcblxuY29uc3QgU3R5bGVkUmVuZGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBpbmxpbmU7IFxuYCAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const StyledRenderDiv=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(\"div\",{target:\"enms1wo0\",label:\"StyledRenderDiv\"})( false?undefined:{name:\"1u4hpl4\",styles:\"display:inline\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9NZWRpYVBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQyIsImZpbGUiOiIvVXNlcnMvbW9yaXR6a2xlbW0vRG9jdW1lbnRzL0Zpcm1hL1Byb2pla3RlL2FsbWEgc3RvbHRlL2NvZGUvYWxtYS1zdG9sdGUvcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvTWVkaWFQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgY3NzLCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCB7UmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xuXG5jb25zdCBNZWRpYVBhZ2UgPSAoe3N0YXRlfSkgPT4ge1xuXG4gICAgLy8gc2F2aW5nIElEIG9mIFwibWVkaWFcIiBwYWdlIHRvIGJlIGluZGVwZW5kZW50IGZyb20gSUQgd2hlbiBpdCBzaG91bGQgYmUgZGVsZXRlZCBhbmQgcmVjcmVhdGVkXG4gICAgY29uc3QgW21lZGlhUGFnZUlEXSA9IHVzZVN0YXRlKHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspLmlkKVxuICAgIGNvbnN0IFttZWRpYUNvbnRlbnRdID0gdXNlU3RhdGUoc3RhdGUuc291cmNlW1wicGFnZVwiXVttZWRpYVBhZ2VJRF0uY29udGVudC5yZW5kZXJlZCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkQ29sIG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRSZW5kZXJEaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtZWRpYUNvbnRlbnR9fSAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZWRpYVBhZ2UpO1xuXG5cbmNvbnN0IFN0eWxlZENvbCA9IHN0eWxlZChDb2wpYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgIHBhZGRpbmc6IDBweCAxNXB4OyBcbmBcblxuY29uc3QgU3R5bGVkUmVuZGVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBpbmxpbmU7IFxuYCAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9NZWRpYVBhZ2UuanM/NGY2YiJdLCJuYW1lcyI6WyJNZWRpYVBhZ2UiLCJzdGF0ZSIsIm1lZGlhUGFnZUlEIiwidXNlU3RhdGUiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwiaWQiLCJtZWRpYUNvbnRlbnQiLCJjb250ZW50IiwicmVuZGVyZWQiLCJfX2h0bWwiLCJjb25uZWN0IiwiU3R5bGVkQ29sIiwiQ29sIiwiU3R5bGVkUmVuZGVyRGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3FSQU9BLEtBQU1BLFVBQVMsQ0FBRyxDQUFDLENBQUNDLEtBQUQsQ0FBRCxHQUFhLENBRTNCO0FBQ0EsS0FBTSxDQUFDQyxXQUFELEVBQWdCQyxzREFBUSxDQUFDRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkosS0FBSyxDQUFDSyxNQUFOLENBQWFDLElBQTlCLEVBQW9DQyxFQUFyQyxDQUE5QixDQUNBLEtBQU0sQ0FBQ0MsWUFBRCxFQUFpQk4sc0RBQVEsQ0FBQ0YsS0FBSyxDQUFDRyxNQUFOLENBQWEsTUFBYixFQUFxQkYsV0FBckIsRUFBa0NRLE9BQWxDLENBQTBDQyxRQUEzQyxDQUEvQixDQUVBLE1BQ0ksd0VBQUMsaUVBQUQsV0FDSSx1RUFBQywyREFBRCxXQUNJLHVFQUFDLFNBQUQsRUFBVyxFQUFFLENBQUUsRUFBZixVQUNJLHVFQUFDLGVBQUQsRUFBaUIsdUJBQXVCLENBQUUsQ0FBRUMsTUFBTSxDQUFFSCxZQUFWLENBQTFDLEVBREosRUFESixFQURKLEVBREosQ0FTSCxDQWZELENBaUJlSSx1SEFBTyxDQUFDYixTQUFELENBQXRCLEVBR0EsS0FBTWMsVUFBUyxDQUFHLG9FQUFNLENBQUNDLDJEQUFQLHVDQUFILHcvREFBZixDQU1BLEtBQU1DLGdCQUFlLDhqRUFBckIiLCJmaWxlIjoiLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9NZWRpYVBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBjc3MsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IHtSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmNvbnN0IE1lZGlhUGFnZSA9ICh7c3RhdGV9KSA9PiB7XG5cbiAgICAvLyBzYXZpbmcgSUQgb2YgXCJtZWRpYVwiIHBhZ2UgdG8gYmUgaW5kZXBlbmRlbnQgZnJvbSBJRCB3aGVuIGl0IHNob3VsZCBiZSBkZWxldGVkIGFuZCByZWNyZWF0ZWRcbiAgICBjb25zdCBbbWVkaWFQYWdlSURdID0gdXNlU3RhdGUoc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluaykuaWQpXG4gICAgY29uc3QgW21lZGlhQ29udGVudF0gPSB1c2VTdGF0ZShzdGF0ZS5zb3VyY2VbXCJwYWdlXCJdW21lZGlhUGFnZUlEXS5jb250ZW50LnJlbmRlcmVkKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxTdHlsZWRDb2wgbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFJlbmRlckRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1lZGlhQ29udGVudH19IC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDb2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lZGlhUGFnZSk7XG5cblxuY29uc3QgU3R5bGVkQ29sID0gc3R5bGVkKENvbClgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgcGFkZGluZzogMHB4IDE1cHg7IFxuYFxuXG5jb25zdCBTdHlsZWRSZW5kZXJEaXYgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGlubGluZTsgXG5gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/MediaPage.js\n");

/***/ })

})