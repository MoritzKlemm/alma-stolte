webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/list/List.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/list/List.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _ProjectPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProjectPreview */ \"./packages/alma-stolte-theme/src/components/ProjectPreview.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar List=(_ref)=>{var{state}=_ref;var[initialList]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(state.source.get(state.router.link).items);// 1. Filter for post category = project\n// 2. map to \"Project\"\n// 3. add bootstrap components\n// filtering posts returning only category \"projekte\" aka 4771.\nvar filterProjects=il=>{return il.filter((_ref2)=>{var{id,categories}=_ref2;// creating new variable to actually \"regrab\" items with coresponding id\nvar item=state.source[\"post\"][id];return item.categories!=4771;});};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",null,filterProjects(initialList).map((_ref3)=>{var{id}=_ref3;var item=state.source[\"post\"][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_ProjectPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(List));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanM/ZDM2YSJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJpbml0aWFsTGlzdCIsInVzZVN0YXRlIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsIml0ZW1zIiwiZmlsdGVyUHJvamVjdHMiLCJpbCIsImZpbHRlciIsImlkIiwiY2F0ZWdvcmllcyIsIml0ZW0iLCJtYXAiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUEsR0FBTUEsS0FBSSxDQUFHLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFFMUIsR0FBTSxDQUFDQyxXQUFELEVBQWdCQyxzREFBUSxDQUFDRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkosS0FBSyxDQUFDSyxNQUFOLENBQWFDLElBQTlCLEVBQW9DQyxLQUFyQyxDQUE5QixDQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0EsR0FBTUMsZUFBYyxDQUFJQyxFQUFELEVBQVEsQ0FDN0IsTUFBUUEsR0FBRSxDQUFDQyxNQUFILENBQVUsU0FBd0IsSUFBdkIsQ0FBRUMsRUFBRixDQUFNQyxVQUFOLENBQXVCLE9BQ3hDO0FBQ0EsR0FBTUMsS0FBSSxDQUFHYixLQUFLLENBQUNHLE1BQU4sQ0FBYSxNQUFiLEVBQXFCUSxFQUFyQixDQUFiLENBQ0EsTUFBT0UsS0FBSSxDQUFDRCxVQUFMLEVBQW1CLElBQTFCLENBQ0QsQ0FKTyxDQUFSLENBS0QsQ0FORCxDQVFBLE1BQ0Usc0VBRUdKLGNBQWMsQ0FBQ1AsV0FBRCxDQUFkLENBQTRCYSxHQUE1QixDQUFnQyxTQUFZLElBQVgsQ0FBRUgsRUFBRixDQUFXLE9BQzNDLEdBQU1FLEtBQUksQ0FBR2IsS0FBSyxDQUFDRyxNQUFOLENBQWEsTUFBYixFQUFxQlEsRUFBckIsQ0FBYixDQUNBLE1BQU8sMkRBQUMsdURBQUQsRUFBUyxHQUFHLENBQUVFLElBQUksQ0FBQ0YsRUFBbkIsQ0FBdUIsSUFBSSxDQUFFRSxJQUE3QixFQUFQLENBQ0QsQ0FIQSxDQUZILENBREYsQ0FTRCxDQTNCRCxDQTZCZUUsdUhBQU8sQ0FBQ2hCLElBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vUHJvamVjdFByZXZpZXcnXG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgY29uc3QgW2luaXRpYWxMaXN0XSA9IHVzZVN0YXRlKHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspLml0ZW1zKTtcbiAgXG4gIC8vIDEuIEZpbHRlciBmb3IgcG9zdCBjYXRlZ29yeSA9IHByb2plY3RcbiAgLy8gMi4gbWFwIHRvIFwiUHJvamVjdFwiXG4gIC8vIDMuIGFkZCBib290c3RyYXAgY29tcG9uZW50c1xuXG5cbiAgLy8gZmlsdGVyaW5nIHBvc3RzIHJldHVybmluZyBvbmx5IGNhdGVnb3J5IFwicHJvamVrdGVcIiBha2EgNDc3MS5cbiAgY29uc3QgZmlsdGVyUHJvamVjdHMgPSAoaWwpID0+IHtcbiAgICByZXR1cm4gKGlsLmZpbHRlcigoeyBpZCwgY2F0ZWdvcmllcyB9KSA9PiB7XG4gICAgICAvLyBjcmVhdGluZyBuZXcgdmFyaWFibGUgdG8gYWN0dWFsbHkgXCJyZWdyYWJcIiBpdGVtcyB3aXRoIGNvcmVzcG9uZGluZyBpZFxuICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVtcInBvc3RcIl1baWRdO1xuICAgICAgcmV0dXJuIGl0ZW0uY2F0ZWdvcmllcyAhPSA0NzcxO1xuICAgIH0pKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qIG1hcHBpbmcgdG8gPFByb2plY3QgLz4gKi99IFxuICAgICAge2ZpbHRlclByb2plY3RzKGluaXRpYWxMaXN0KS5tYXAoKHsgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW1wicG9zdFwiXVtpZF07XG4gICAgICAgIHJldHVybiA8UHJvamVjdCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/list/List.js\n");

/***/ })

})