webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/list/List.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/list/List.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item */ \"./packages/alma-stolte-theme/src/components/list/list-item.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar List=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);// 1. Filter for post category = project\n// 2. map to \"Project\"\n// 3. add bootstrap components\nvar filterProjects=()=>{};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"section\",null,data.items.map((_ref2)=>{var{id}=_ref2;var item=state.source[\"post\"][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(List));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanM/ZDM2YSJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImZpbHRlclByb2plY3RzIiwiaXRlbXMiLCJtYXAiLCJpZCIsIml0ZW0iLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsR0FBTUEsS0FBSSxDQUFHLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFFMUIsR0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FJQTtBQUNBO0FBQ0E7QUFFQSxHQUFNQyxlQUFjLENBQUcsSUFBTSxDQUU1QixDQUZELENBSUEsTUFDRSwwRUFDR0wsSUFBSSxDQUFDTSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxTQUFZLElBQVgsQ0FBRUMsRUFBRixDQUFXLE9BQzFCLEdBQU1DLEtBQUksQ0FBR1YsS0FBSyxDQUFDRSxNQUFOLENBQWEsTUFBYixFQUFxQk8sRUFBckIsQ0FBYixDQUNBLE1BQU8sMkRBQUMsZ0RBQUQsRUFBUyxHQUFHLENBQUVDLElBQUksQ0FBQ0QsRUFBbkIsQ0FBdUIsSUFBSSxDQUFFQyxJQUE3QixFQUFQLENBQ0QsQ0FIQSxDQURILENBREYsQ0FRRCxDQXRCRCxDQXdCZUMsdUhBQU8sQ0FBQ1osSUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL1Byb2plY3QnXG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG5cbiAgXG4gIC8vIDEuIEZpbHRlciBmb3IgcG9zdCBjYXRlZ29yeSA9IHByb2plY3RcbiAgLy8gMi4gbWFwIHRvIFwiUHJvamVjdFwiXG4gIC8vIDMuIGFkZCBib290c3RyYXAgY29tcG9uZW50c1xuXG4gIGNvbnN0IGZpbHRlclByb2plY3RzID0gKCkgPT4ge1xuICAgIFxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVtcInBvc3RcIl1baWRdO1xuICAgICAgICByZXR1cm4gPFByb2plY3Qga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgIH0pfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/list/List.js\n");

/***/ })

})