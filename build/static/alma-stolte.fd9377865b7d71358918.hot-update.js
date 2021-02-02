webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/list/List.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/list/List.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/alma-stolte-theme/src/components/list/list-item.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar List=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);var[initialList,setInitialList]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(data.items);var[filteredList,setFilteredList]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);// 1. Filter for post category = project\n// 2. map to \"Project\"\n// 3. add bootstrap components\nvar filterProjects=()=>{data.items.filter((_ref2)=>{var{id,categories}=_ref2;var item=state.source[\"post\"][id];item.categories!=4771;});};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"section\",null,data.items.map((_ref3)=>{var{id}=_ref3;var item=state.source[\"post\"][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{key:item.id,item:item});}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(List));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanM/ZDM2YSJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImluaXRpYWxMaXN0Iiwic2V0SW5pdGlhbExpc3QiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwiZmlsdGVyZWRMaXN0Iiwic2V0RmlsdGVyZWRMaXN0IiwiZmlsdGVyUHJvamVjdHMiLCJmaWx0ZXIiLCJpZCIsImNhdGVnb3JpZXMiLCJpdGVtIiwibWFwIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0EsR0FBTUEsS0FBSSxDQUFHLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFFMUIsR0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQSxHQUFNLENBQUNDLFdBQUQsQ0FBY0MsY0FBZCxFQUFnQ0Msc0RBQVEsQ0FBQ1AsSUFBSSxDQUFDUSxLQUFOLENBQTlDLENBQ0EsR0FBTSxDQUFDQyxZQUFELENBQWVDLGVBQWYsRUFBa0NILHNEQUFRLENBQUMsRUFBRCxDQUFoRCxDQUVBO0FBQ0E7QUFDQTtBQUVBLEdBQU1JLGVBQWMsQ0FBRyxJQUFNLENBQzNCWCxJQUFJLENBQUNRLEtBQUwsQ0FBV0ksTUFBWCxDQUFrQixTQUF3QixJQUF2QixDQUFFQyxFQUFGLENBQU1DLFVBQU4sQ0FBdUIsT0FDeEMsR0FBTUMsS0FBSSxDQUFHaEIsS0FBSyxDQUFDRSxNQUFOLENBQWEsTUFBYixFQUFxQlksRUFBckIsQ0FBYixDQUNBRSxJQUFJLENBQUNELFVBQUwsRUFBbUIsSUFBbkIsQ0FDRCxDQUhELEVBSUQsQ0FMRCxDQU9BLE1BQ0UsMEVBQ0dkLElBQUksQ0FBQ1EsS0FBTCxDQUFXUSxHQUFYLENBQWUsU0FBWSxJQUFYLENBQUVILEVBQUYsQ0FBVyxPQUMxQixHQUFNRSxLQUFJLENBQUdoQixLQUFLLENBQUNFLE1BQU4sQ0FBYSxNQUFiLEVBQXFCWSxFQUFyQixDQUFiLENBQ0EsTUFBTywyREFBQyxnREFBRCxFQUFTLEdBQUcsQ0FBRUUsSUFBSSxDQUFDRixFQUFuQixDQUF1QixJQUFJLENBQUVFLElBQTdCLEVBQVAsQ0FDRCxDQUhBLENBREgsQ0FERixDQVFELENBekJELENBMkJlRSx1SEFBTyxDQUFDbkIsSUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL1Byb2plY3QnXG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCBbaW5pdGlhbExpc3QsIHNldEluaXRpYWxMaXN0XSA9IHVzZVN0YXRlKGRhdGEuaXRlbXMpO1xuICBjb25zdCBbZmlsdGVyZWRMaXN0LCBzZXRGaWx0ZXJlZExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBcbiAgLy8gMS4gRmlsdGVyIGZvciBwb3N0IGNhdGVnb3J5ID0gcHJvamVjdFxuICAvLyAyLiBtYXAgdG8gXCJQcm9qZWN0XCJcbiAgLy8gMy4gYWRkIGJvb3RzdHJhcCBjb21wb25lbnRzXG5cbiAgY29uc3QgZmlsdGVyUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgZGF0YS5pdGVtcy5maWx0ZXIoKHsgaWQsIGNhdGVnb3JpZXMgfSkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVtcInBvc3RcIl1baWRdO1xuICAgICAgaXRlbS5jYXRlZ29yaWVzICE9IDQ3NzE7XG4gICAgfSlcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyBpZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbXCJwb3N0XCJdW2lkXTtcbiAgICAgICAgcmV0dXJuIDxQcm9qZWN0IGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICB9KX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/list/List.js\n");

/***/ })

})