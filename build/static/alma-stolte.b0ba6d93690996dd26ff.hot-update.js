webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/list/List.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/list/List.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/alma-stolte-theme/src/components/list/list-item.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _readOnlyError(name){throw new TypeError(\"\\\"\"+name+\"\\\" is read-only\");}var List=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);var[filteredList,setFilteredList]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);// 1. Filter for post category = project\n// 2. map to \"Project\"\n// 3. add bootstrap components\nvar filterProjects=()=>{filteredList=(_readOnlyError(\"filteredList\"),data.items.filter((_ref2)=>{var{category}=_ref2;return;}));};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"section\",null,data.items.map((_ref3)=>{var{id}=_ref3;var item=state.source[\"post\"][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{key:item.id,item:item});}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(List));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanM/ZDM2YSJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImZpbHRlcmVkTGlzdCIsInNldEZpbHRlcmVkTGlzdCIsInVzZVN0YXRlIiwiZmlsdGVyUHJvamVjdHMiLCJpdGVtcyIsImZpbHRlciIsImNhdGVnb3J5IiwibWFwIiwiaWQiLCJpdGVtIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2dGQUtBLEdBQU1BLEtBQUksQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BRTFCLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBR0EsR0FBTSxDQUFDQyxZQUFELENBQWVDLGVBQWYsRUFBa0NDLHNEQUFRLENBQUMsRUFBRCxDQUFoRCxDQUVBO0FBQ0E7QUFDQTtBQUVBLEdBQU1DLGVBQWMsQ0FBRyxJQUFNLENBQzNCSCxZQUFZLGlDQUFHTCxJQUFJLENBQUNTLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQixTQUFrQixJQUFqQixDQUFFQyxRQUFGLENBQWlCLE9BQ2pELE9BQ0QsQ0FGYyxDQUFILENBQVosQ0FHRCxDQUpELENBTUEsTUFDRSwwRUFDR1gsSUFBSSxDQUFDUyxLQUFMLENBQVdHLEdBQVgsQ0FBZSxTQUFZLElBQVgsQ0FBRUMsRUFBRixDQUFXLE9BQzFCLEdBQU1DLEtBQUksQ0FBR2YsS0FBSyxDQUFDRSxNQUFOLENBQWEsTUFBYixFQUFxQlksRUFBckIsQ0FBYixDQUNBLE1BQU8sMkRBQUMsZ0RBQUQsRUFBUyxHQUFHLENBQUVDLElBQUksQ0FBQ0QsRUFBbkIsQ0FBdUIsSUFBSSxDQUFFQyxJQUE3QixFQUFQLENBQ0QsQ0FIQSxDQURILENBREYsQ0FRRCxDQXpCRCxDQTJCZUMsdUhBQU8sQ0FBQ2pCLElBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9Qcm9qZWN0J1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuXG4gIGNvbnN0IFtmaWx0ZXJlZExpc3QsIHNldEZpbHRlcmVkTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIFxuICAvLyAxLiBGaWx0ZXIgZm9yIHBvc3QgY2F0ZWdvcnkgPSBwcm9qZWN0XG4gIC8vIDIuIG1hcCB0byBcIlByb2plY3RcIlxuICAvLyAzLiBhZGQgYm9vdHN0cmFwIGNvbXBvbmVudHNcblxuICBjb25zdCBmaWx0ZXJQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBmaWx0ZXJlZExpc3QgPSBkYXRhLml0ZW1zLmZpbHRlcigoeyBjYXRlZ29yeSB9KSA9PiB7XG4gICAgICByZXR1cm5cbiAgICB9KVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVtcInBvc3RcIl1baWRdO1xuICAgICAgICByZXR1cm4gPFByb2plY3Qga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgIH0pfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/list/List.js\n");

/***/ })

})