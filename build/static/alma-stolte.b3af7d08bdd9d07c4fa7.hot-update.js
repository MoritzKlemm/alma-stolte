webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/list/List.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/list/List.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item */ \"./packages/alma-stolte-theme/src/components/list/list-item.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar List=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);var mapProjects=()=>{data.items.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});});};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"section\",null,data.items.map((_ref3)=>{var{type,id}=_ref3;var item=state.source[type][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(List));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanM/ZDM2YSJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsIm1hcFByb2plY3RzIiwiaXRlbXMiLCJtYXAiLCJ0eXBlIiwiaWQiLCJpdGVtIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLEdBQU1BLEtBQUksQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BRTFCLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBRUEsR0FBTUMsWUFBVyxDQUFHLElBQU0sQ0FDeEJMLElBQUksQ0FBQ00sS0FBTCxDQUFXQyxHQUFYLENBQWUsU0FBa0IsSUFBakIsQ0FBRUMsSUFBRixDQUFRQyxFQUFSLENBQWlCLE9BQy9CLEdBQU1DLEtBQUksQ0FBR1gsS0FBSyxDQUFDRSxNQUFOLENBQWFPLElBQWIsRUFBbUJDLEVBQW5CLENBQWIsQ0FDQSxNQUFPLDJEQUFDLGdEQUFELEVBQVMsR0FBRyxDQUFFQyxJQUFJLENBQUNELEVBQW5CLENBQXVCLElBQUksQ0FBRUMsSUFBN0IsRUFBUCxDQUNELENBSEQsRUFJRCxDQUxELENBT0EsTUFDRSwwRUFDR1YsSUFBSSxDQUFDTSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxTQUFrQixJQUFqQixDQUFFQyxJQUFGLENBQVFDLEVBQVIsQ0FBaUIsT0FDaEMsR0FBTUMsS0FBSSxDQUFHWCxLQUFLLENBQUNFLE1BQU4sQ0FBYU8sSUFBYixFQUFtQkMsRUFBbkIsQ0FBYixDQUNBLE1BQU8sMkRBQUMsZ0RBQUQsRUFBUyxHQUFHLENBQUVDLElBQUksQ0FBQ0QsRUFBbkIsQ0FBdUIsSUFBSSxDQUFFQyxJQUE3QixFQUFQLENBQ0QsQ0FIQSxDQURILENBREYsQ0FRRCxDQW5CRCxDQXFCZUMsdUhBQU8sQ0FBQ2IsSUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL1Byb2plY3QnXG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIGNvbnN0IG1hcFByb2plY3RzID0gKCkgPT4ge1xuICAgIGRhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgcmV0dXJuIDxQcm9qZWN0IGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgcmV0dXJuIDxQcm9qZWN0IGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICB9KX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/list/List.js\n");

/***/ })

})