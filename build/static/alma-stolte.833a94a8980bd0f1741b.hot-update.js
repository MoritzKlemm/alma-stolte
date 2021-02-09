webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/list/List.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/list/List.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProjectPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProjectPreview */ \"./packages/alma-stolte-theme/src/components/ProjectPreview.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst List=({state})=>{// saving all posts \nconst[initialList]=Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(state.source.get(state.router.link).items);console(\"intial list below\");console(state.source.get(state.router.link));// filtering posts returning only category \"projekte\" aka 4771.\nconst filterProjects=il=>{return il.filter(({id,categories})=>{// creating new variable to actually \"regrab\" items with coresponding id\nconst item=state.source[\"post\"][id];return item.categories==15915;});};return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:filterProjects(initialList).map(({id})=>{const item=state.source[\"post\"][id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_ProjectPreview__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{item:item},item.id);})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(List));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanM/ZDM2YSJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJpbml0aWFsTGlzdCIsInVzZVN0YXRlIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsIml0ZW1zIiwiY29uc29sZSIsImZpbHRlclByb2plY3RzIiwiaWwiLCJmaWx0ZXIiLCJpZCIsImNhdGVnb3JpZXMiLCJpdGVtIiwibWFwIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0EsS0FBTUEsS0FBSSxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFELEdBQWUsQ0FFMUI7QUFDQSxLQUFNLENBQUNDLFdBQUQsRUFBZ0JDLHNEQUFRLENBQUNGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxHQUFiLENBQWlCSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsSUFBOUIsRUFBb0NDLEtBQXJDLENBQTlCLENBQ0FDLE9BQU8sQ0FBQyxtQkFBRCxDQUFQLENBQ0FBLE9BQU8sQ0FBQ1IsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUE5QixDQUFELENBQVAsQ0FFQTtBQUNBLEtBQU1HLGVBQWMsQ0FBSUMsRUFBRCxFQUFRLENBQzdCLE1BQVFBLEdBQUUsQ0FBQ0MsTUFBSCxDQUFVLENBQUMsQ0FBRUMsRUFBRixDQUFNQyxVQUFOLENBQUQsR0FBd0IsQ0FFeEM7QUFDQSxLQUFNQyxLQUFJLENBQUdkLEtBQUssQ0FBQ0csTUFBTixDQUFhLE1BQWIsRUFBcUJTLEVBQXJCLENBQWIsQ0FDQSxNQUFPRSxLQUFJLENBQUNELFVBQUwsRUFBbUIsS0FBMUIsQ0FDRCxDQUxPLENBQVIsQ0FNRCxDQVBELENBU0EsTUFDRSx3RUFBQywyREFBRCxXQUVHSixjQUFjLENBQUNSLFdBQUQsQ0FBZCxDQUE0QmMsR0FBNUIsQ0FBZ0MsQ0FBQyxDQUFFSCxFQUFGLENBQUQsR0FBWSxDQUMzQyxLQUFNRSxLQUFJLENBQUdkLEtBQUssQ0FBQ0csTUFBTixDQUFhLE1BQWIsRUFBcUJTLEVBQXJCLENBQWIsQ0FDQSxNQUFPLHdFQUFDLHVEQUFELEVBQThCLElBQUksQ0FBRUUsSUFBcEMsRUFBcUJBLElBQUksQ0FBQ0YsRUFBMUIsQ0FBUCxDQUNELENBSEEsQ0FGSCxFQURGLENBU0QsQ0ExQkQsQ0E0QmVJLHVIQUFPLENBQUNqQixJQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9MaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUsIGNzcyB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IFByb2plY3RQcmV2aWV3IGZyb20gJy4uL1Byb2plY3RQcmV2aWV3J1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuXG4gIC8vIHNhdmluZyBhbGwgcG9zdHMgXG4gIGNvbnN0IFtpbml0aWFsTGlzdF0gPSB1c2VTdGF0ZShzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKS5pdGVtcyk7XG4gIGNvbnNvbGUoXCJpbnRpYWwgbGlzdCBiZWxvd1wiKVxuICBjb25zb2xlKHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspKVxuXG4gIC8vIGZpbHRlcmluZyBwb3N0cyByZXR1cm5pbmcgb25seSBjYXRlZ29yeSBcInByb2pla3RlXCIgYWthIDQ3NzEuXG4gIGNvbnN0IGZpbHRlclByb2plY3RzID0gKGlsKSA9PiB7XG4gICAgcmV0dXJuIChpbC5maWx0ZXIoKHsgaWQsIGNhdGVnb3JpZXMgfSkgPT4ge1xuXG4gICAgICAvLyBjcmVhdGluZyBuZXcgdmFyaWFibGUgdG8gYWN0dWFsbHkgXCJyZWdyYWJcIiBpdGVtcyB3aXRoIGNvcmVzcG9uZGluZyBpZFxuICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVtcInBvc3RcIl1baWRdO1xuICAgICAgcmV0dXJuIGl0ZW0uY2F0ZWdvcmllcyA9PSAxNTkxNTtcbiAgICB9KSlcbiAgfVxuXG4gIHJldHVybiAoIFxuICAgIDxSb3c+XG4gICAgICB7LyogbWFwcGluZyBmaWx0ZXJlZCBsaXN0IHRvIHByb2plY3QgcHJldmlldyBjb21wb25lbnRzICovfSBcbiAgICAgIHtmaWx0ZXJQcm9qZWN0cyhpbml0aWFsTGlzdCkubWFwKCh7IGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVtcInBvc3RcIl1baWRdO1xuICAgICAgICByZXR1cm4gPFByb2plY3RQcmV2aWV3IGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICB9KX1cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/list/List.js\n");

/***/ })

})