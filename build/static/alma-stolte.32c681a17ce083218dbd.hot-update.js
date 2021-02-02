webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/list/List.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/list/List.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/alma-stolte-theme/src/components/list/list-item.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _readOnlyError(name){throw new TypeError(\"\\\"\"+name+\"\\\" is read-only\");}var List=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);var[filteredList,setFilteredList]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);// 1. Filter for post category = project\n// 2. map to \"Project\"\n// 3. add bootstrap components\nvar filterProjects=()=>{filteredList=(_readOnlyError(\"filteredList\"),data.items.filter((_ref2)=>{var{category}=_ref2;}));};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"section\",null,data.items.map((_ref3)=>{var{id}=_ref3;var item=state.source[\"post\"][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{key:item.id,item:item});}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(List));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanM/ZDM2YSJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImZpbHRlcmVkTGlzdCIsInNldEZpbHRlcmVkTGlzdCIsInVzZVN0YXRlIiwiZmlsdGVyUHJvamVjdHMiLCJpdGVtcyIsImZpbHRlciIsImNhdGVnb3J5IiwibWFwIiwiaWQiLCJpdGVtIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2dGQUtBLEdBQU1BLEtBQUksQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BRTFCLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBR0EsR0FBTSxDQUFDQyxZQUFELENBQWVDLGVBQWYsRUFBa0NDLHNEQUFRLENBQUMsRUFBRCxDQUFoRCxDQUVBO0FBQ0E7QUFDQTtBQUVBLEdBQU1DLGVBQWMsQ0FBRyxJQUFNLENBQzNCSCxZQUFZLGlDQUFHTCxJQUFJLENBQUNTLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQixTQUFrQixJQUFqQixDQUFFQyxRQUFGLENBQWlCLE9BRWxELENBRmMsQ0FBSCxDQUFaLENBR0QsQ0FKRCxDQU1BLE1BQ0UsMEVBQ0dYLElBQUksQ0FBQ1MsS0FBTCxDQUFXRyxHQUFYLENBQWUsU0FBWSxJQUFYLENBQUVDLEVBQUYsQ0FBVyxPQUMxQixHQUFNQyxLQUFJLENBQUdmLEtBQUssQ0FBQ0UsTUFBTixDQUFhLE1BQWIsRUFBcUJZLEVBQXJCLENBQWIsQ0FDQSxNQUFPLDJEQUFDLGdEQUFELEVBQVMsR0FBRyxDQUFFQyxJQUFJLENBQUNELEVBQW5CLENBQXVCLElBQUksQ0FBRUMsSUFBN0IsRUFBUCxDQUNELENBSEEsQ0FESCxDQURGLENBUUQsQ0F6QkQsQ0EyQmVDLHVIQUFPLENBQUNqQixJQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9MaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vUHJvamVjdCdcblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlIH0pID0+IHtcblxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cblxuICBjb25zdCBbZmlsdGVyZWRMaXN0LCBzZXRGaWx0ZXJlZExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBcbiAgLy8gMS4gRmlsdGVyIGZvciBwb3N0IGNhdGVnb3J5ID0gcHJvamVjdFxuICAvLyAyLiBtYXAgdG8gXCJQcm9qZWN0XCJcbiAgLy8gMy4gYWRkIGJvb3RzdHJhcCBjb21wb25lbnRzXG5cbiAgY29uc3QgZmlsdGVyUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgZmlsdGVyZWRMaXN0ID0gZGF0YS5pdGVtcy5maWx0ZXIoKHsgY2F0ZWdvcnkgfSkgPT4ge1xuICAgICAgXG4gICAgfSlcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyBpZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbXCJwb3N0XCJdW2lkXTtcbiAgICAgICAgcmV0dXJuIDxQcm9qZWN0IGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICB9KX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/list/List.js\n");

/***/ })

})