webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/list/List.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/list/List.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/alma-stolte-theme/src/components/list/list-item.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar List=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);var[initialList,setInitialList]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(data.items);var[filteredList,setFilteredList]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);// 1. Filter for post category = project\n// 2. map to \"Project\"\n// 3. add bootstrap components\nvar filterProjects=()=>{data.items.filter((_ref2)=>{var{id,categories}=_ref2;categories!=4771;console.log(categories);});};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"section\",null,console.log(initialList),data.items.map((_ref3)=>{var{id}=_ref3;var item=state.source[\"post\"][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{key:item.id,item:item});}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(List));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanM/ZDM2YSJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImluaXRpYWxMaXN0Iiwic2V0SW5pdGlhbExpc3QiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwiZmlsdGVyZWRMaXN0Iiwic2V0RmlsdGVyZWRMaXN0IiwiZmlsdGVyUHJvamVjdHMiLCJmaWx0ZXIiLCJpZCIsImNhdGVnb3JpZXMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLEdBQU1BLEtBQUksQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BRTFCLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsR0FBTSxDQUFDQyxXQUFELENBQWNDLGNBQWQsRUFBZ0NDLHNEQUFRLENBQUNQLElBQUksQ0FBQ1EsS0FBTixDQUE5QyxDQUNBLEdBQU0sQ0FBQ0MsWUFBRCxDQUFlQyxlQUFmLEVBQWtDSCxzREFBUSxDQUFDLEVBQUQsQ0FBaEQsQ0FFQTtBQUNBO0FBQ0E7QUFFQSxHQUFNSSxlQUFjLENBQUcsSUFBTSxDQUMzQlgsSUFBSSxDQUFDUSxLQUFMLENBQVdJLE1BQVgsQ0FBa0IsU0FBd0IsSUFBdkIsQ0FBRUMsRUFBRixDQUFNQyxVQUFOLENBQXVCLE9BQ3hDQSxVQUFVLEVBQUksSUFBZCxDQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWixFQUNELENBSEQsRUFJRCxDQUxELENBT0EsTUFDRSwwRUFDR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlYLFdBQVosQ0FESCxDQUVHTCxJQUFJLENBQUNRLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLFNBQVksSUFBWCxDQUFFSixFQUFGLENBQVcsT0FDMUIsR0FBTUssS0FBSSxDQUFHbkIsS0FBSyxDQUFDRSxNQUFOLENBQWEsTUFBYixFQUFxQlksRUFBckIsQ0FBYixDQUNBLE1BQU8sMkRBQUMsZ0RBQUQsRUFBUyxHQUFHLENBQUVLLElBQUksQ0FBQ0wsRUFBbkIsQ0FBdUIsSUFBSSxDQUFFSyxJQUE3QixFQUFQLENBQ0QsQ0FIQSxDQUZILENBREYsQ0FTRCxDQTFCRCxDQTRCZUMsdUhBQU8sQ0FBQ3JCLElBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9Qcm9qZWN0J1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgY29uc3QgW2luaXRpYWxMaXN0LCBzZXRJbml0aWFsTGlzdF0gPSB1c2VTdGF0ZShkYXRhLml0ZW1zKTtcbiAgY29uc3QgW2ZpbHRlcmVkTGlzdCwgc2V0RmlsdGVyZWRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgXG4gIC8vIDEuIEZpbHRlciBmb3IgcG9zdCBjYXRlZ29yeSA9IHByb2plY3RcbiAgLy8gMi4gbWFwIHRvIFwiUHJvamVjdFwiXG4gIC8vIDMuIGFkZCBib290c3RyYXAgY29tcG9uZW50c1xuXG4gIGNvbnN0IGZpbHRlclByb2plY3RzID0gKCkgPT4ge1xuICAgIGRhdGEuaXRlbXMuZmlsdGVyKCh7IGlkLCBjYXRlZ29yaWVzIH0pID0+IHtcbiAgICAgIGNhdGVnb3JpZXMgIT0gNDc3MTtcbiAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG4gICAgfSlcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIHtjb25zb2xlLmxvZyhpbml0aWFsTGlzdCl9XG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKHsgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW1wicG9zdFwiXVtpZF07XG4gICAgICAgIHJldHVybiA8UHJvamVjdCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgfSl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/list/List.js\n");

/***/ })

})