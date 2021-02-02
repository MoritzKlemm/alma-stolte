webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/list/List.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/list/List.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/alma-stolte-theme/src/components/list/list-item.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar List=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);var[initialList,setInitialList]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(data);var[filteredList,setFilteredList]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);// 1. Filter for post category = project\n// 2. map to \"Project\"\n// 3. add bootstrap components\nvar filterProjects=il=>{data.items.filter((_ref2)=>{var{category}=_ref2;category!=4771;console.log(category);});};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"section\",null,console.log(filterProjects(initialList)),data.items.map((_ref3)=>{var{id}=_ref3;var item=state.source[\"post\"][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{key:item.id,item:item});}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(List));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanM/ZDM2YSJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImluaXRpYWxMaXN0Iiwic2V0SW5pdGlhbExpc3QiLCJ1c2VTdGF0ZSIsImZpbHRlcmVkTGlzdCIsInNldEZpbHRlcmVkTGlzdCIsImZpbHRlclByb2plY3RzIiwiaWwiLCJpdGVtcyIsImZpbHRlciIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsIm1hcCIsImlkIiwiaXRlbSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLEdBQU1BLEtBQUksQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BRTFCLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsR0FBTSxDQUFDQyxXQUFELENBQWNDLGNBQWQsRUFBZ0NDLHNEQUFRLENBQUNQLElBQUQsQ0FBOUMsQ0FDQSxHQUFNLENBQUNRLFlBQUQsQ0FBZUMsZUFBZixFQUFrQ0Ysc0RBQVEsQ0FBQyxFQUFELENBQWhELENBRUE7QUFDQTtBQUNBO0FBRUEsR0FBTUcsZUFBYyxDQUFJQyxFQUFELEVBQVEsQ0FDN0JYLElBQUksQ0FBQ1ksS0FBTCxDQUFXQyxNQUFYLENBQWtCLFNBQWtCLElBQWpCLENBQUVDLFFBQUYsQ0FBaUIsT0FDbENBLFFBQVEsRUFBSSxJQUFaLENBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaLEVBQ0QsQ0FIRCxFQUlELENBTEQsQ0FPQSxNQUNFLDBFQUNHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sY0FBYyxDQUFDTCxXQUFELENBQTFCLENBREgsQ0FFR0wsSUFBSSxDQUFDWSxLQUFMLENBQVdLLEdBQVgsQ0FBZSxTQUFZLElBQVgsQ0FBRUMsRUFBRixDQUFXLE9BQzFCLEdBQU1DLEtBQUksQ0FBR3BCLEtBQUssQ0FBQ0UsTUFBTixDQUFhLE1BQWIsRUFBcUJpQixFQUFyQixDQUFiLENBQ0EsTUFBTywyREFBQyxnREFBRCxFQUFTLEdBQUcsQ0FBRUMsSUFBSSxDQUFDRCxFQUFuQixDQUF1QixJQUFJLENBQUVDLElBQTdCLEVBQVAsQ0FDRCxDQUhBLENBRkgsQ0FERixDQVNELENBMUJELENBNEJlQyx1SEFBTyxDQUFDdEIsSUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL1Byb2plY3QnXG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCBbaW5pdGlhbExpc3QsIHNldEluaXRpYWxMaXN0XSA9IHVzZVN0YXRlKGRhdGEpO1xuICBjb25zdCBbZmlsdGVyZWRMaXN0LCBzZXRGaWx0ZXJlZExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBcbiAgLy8gMS4gRmlsdGVyIGZvciBwb3N0IGNhdGVnb3J5ID0gcHJvamVjdFxuICAvLyAyLiBtYXAgdG8gXCJQcm9qZWN0XCJcbiAgLy8gMy4gYWRkIGJvb3RzdHJhcCBjb21wb25lbnRzXG5cbiAgY29uc3QgZmlsdGVyUHJvamVjdHMgPSAoaWwpID0+IHtcbiAgICBkYXRhLml0ZW1zLmZpbHRlcigoeyBjYXRlZ29yeSB9KSA9PiB7XG4gICAgICBjYXRlZ29yeSAhPSA0NzcxO1xuICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpXG4gICAgfSlcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIHtjb25zb2xlLmxvZyhmaWx0ZXJQcm9qZWN0cyhpbml0aWFsTGlzdCkpfVxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVtcInBvc3RcIl1baWRdO1xuICAgICAgICByZXR1cm4gPFByb2plY3Qga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgIH0pfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/list/List.js\n");

/***/ })

})