webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/ProjectGrid.js":
/*!******************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/ProjectGrid.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _list_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/List */ \"./packages/alma-stolte-theme/src/components/list/List.js\");\n/* harmony import */ var _list_list_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list-item */ \"./packages/alma-stolte-theme/src/components/list/list-item.js\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loading */ \"./packages/alma-stolte-theme/src/components/Loading.js\");\n/* harmony import */ var _util_PostList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util/PostList */ \"./packages/alma-stolte-theme/src/components/util/PostList.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var ProjectGrid=(_ref)=>{var{state}=_ref;var generatePostList=()=>{state.source.post.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_list_list_item__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{key:item.id,item:item});});};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledContainer,{id:\"projekte-smooth-scroll\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledColDivLeft,{md:6},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{title:{__html:state.source['post'][171].title.rendered},content:{__html:state.source['post'][171].content.rendered}}))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(ProjectGrid));var StyledContainer=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{target:\"evd0dxm0\",label:\"StyledContainer\"})( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3lDIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gJ2Zyb250aXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC9MaXN0JztcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QvbGlzdC1pdGVtXCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5cbmltcG9ydCBwb3N0TGlzdCBmcm9tICcuL3V0aWwvUG9zdExpc3QnO1xuXG5cbmNvbnN0IFByb2plY3RHcmlkID0gKHtzdGF0ZX0pID0+IHtcblxuICAgIFxuXG4gICAgY29uc3QgZ2VuZXJhdGVQb3N0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHN0YXRlLnNvdXJjZS5wb3N0Lm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAgIHJldHVybiA8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPFN0eWxlZENvbnRhaW5lciBpZD1cInByb2pla3RlLXNtb290aC1zY3JvbGxcIj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZENvbERpdkxlZnQgbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzFdLnRpdGxlLnJlbmRlcmVkfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzFdLmNvbnRlbnQucmVuZGVyZWR9fS8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDb2xEaXZMZWZ0PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQcm9qZWN0R3JpZClcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG5cbmBcblxuY29uc3QgU3R5bGVkQ29sRGl2TGVmdCA9IHN0eWxlZChDb2wpYFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgXG4gICAgcGFkZGluZzogMHB4IDMwcHggMHB4IDBweDsgXG5gXG5cbmNvbnN0IFN0eWxlZENvbERpdlJpZ2h0ID0gc3R5bGVkKENvbClgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyBcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAzMHB4OyBcbmBcblxuY29uc3QgU3R5bGVkQ29sRGl2TGFzdCA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiAwcHg7IFxuYCJdfQ== */\");var StyledColDivLeft=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{target:\"evd0dxm1\",label:\"StyledColDivLeft\"})( false?undefined:{name:\"4kg3uj\",styles:\"margin-top:30px;margin-bottom:30px;padding:0px 30px 0px 0px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q29DIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gJ2Zyb250aXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC9MaXN0JztcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QvbGlzdC1pdGVtXCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5cbmltcG9ydCBwb3N0TGlzdCBmcm9tICcuL3V0aWwvUG9zdExpc3QnO1xuXG5cbmNvbnN0IFByb2plY3RHcmlkID0gKHtzdGF0ZX0pID0+IHtcblxuICAgIFxuXG4gICAgY29uc3QgZ2VuZXJhdGVQb3N0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHN0YXRlLnNvdXJjZS5wb3N0Lm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAgIHJldHVybiA8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPFN0eWxlZENvbnRhaW5lciBpZD1cInByb2pla3RlLXNtb290aC1zY3JvbGxcIj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZENvbERpdkxlZnQgbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzFdLnRpdGxlLnJlbmRlcmVkfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzFdLmNvbnRlbnQucmVuZGVyZWR9fS8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDb2xEaXZMZWZ0PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQcm9qZWN0R3JpZClcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG5cbmBcblxuY29uc3QgU3R5bGVkQ29sRGl2TGVmdCA9IHN0eWxlZChDb2wpYFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgXG4gICAgcGFkZGluZzogMHB4IDMwcHggMHB4IDBweDsgXG5gXG5cbmNvbnN0IFN0eWxlZENvbERpdlJpZ2h0ID0gc3R5bGVkKENvbClgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyBcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAzMHB4OyBcbmBcblxuY29uc3QgU3R5bGVkQ29sRGl2TGFzdCA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiAwcHg7IFxuYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledColDivRight=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{target:\"evd0dxm2\",label:\"StyledColDivRight\"})( false?undefined:{name:\"po4h8s\",styles:\"margin-top:30px;margin-bottom:30px;padding:0px 0px 0px 30px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRHFDIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gJ2Zyb250aXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC9MaXN0JztcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QvbGlzdC1pdGVtXCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5cbmltcG9ydCBwb3N0TGlzdCBmcm9tICcuL3V0aWwvUG9zdExpc3QnO1xuXG5cbmNvbnN0IFByb2plY3RHcmlkID0gKHtzdGF0ZX0pID0+IHtcblxuICAgIFxuXG4gICAgY29uc3QgZ2VuZXJhdGVQb3N0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHN0YXRlLnNvdXJjZS5wb3N0Lm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAgIHJldHVybiA8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPFN0eWxlZENvbnRhaW5lciBpZD1cInByb2pla3RlLXNtb290aC1zY3JvbGxcIj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZENvbERpdkxlZnQgbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzFdLnRpdGxlLnJlbmRlcmVkfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzFdLmNvbnRlbnQucmVuZGVyZWR9fS8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDb2xEaXZMZWZ0PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQcm9qZWN0R3JpZClcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG5cbmBcblxuY29uc3QgU3R5bGVkQ29sRGl2TGVmdCA9IHN0eWxlZChDb2wpYFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgXG4gICAgcGFkZGluZzogMHB4IDMwcHggMHB4IDBweDsgXG5gXG5cbmNvbnN0IFN0eWxlZENvbERpdlJpZ2h0ID0gc3R5bGVkKENvbClgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyBcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAzMHB4OyBcbmBcblxuY29uc3QgU3R5bGVkQ29sRGl2TGFzdCA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiAwcHg7IFxuYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledColDivLast=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"evd0dxm3\",label:\"StyledColDivLast\"})( false?undefined:{name:\"1c9fjql\",styles:\"margin-top:30px;padding:0px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRG1DIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gJ2Zyb250aXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC9MaXN0JztcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QvbGlzdC1pdGVtXCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5cbmltcG9ydCBwb3N0TGlzdCBmcm9tICcuL3V0aWwvUG9zdExpc3QnO1xuXG5cbmNvbnN0IFByb2plY3RHcmlkID0gKHtzdGF0ZX0pID0+IHtcblxuICAgIFxuXG4gICAgY29uc3QgZ2VuZXJhdGVQb3N0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHN0YXRlLnNvdXJjZS5wb3N0Lm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAgIHJldHVybiA8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPFN0eWxlZENvbnRhaW5lciBpZD1cInByb2pla3RlLXNtb290aC1zY3JvbGxcIj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZENvbERpdkxlZnQgbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzFdLnRpdGxlLnJlbmRlcmVkfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzFdLmNvbnRlbnQucmVuZGVyZWR9fS8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDb2xEaXZMZWZ0PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQcm9qZWN0R3JpZClcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG5cbmBcblxuY29uc3QgU3R5bGVkQ29sRGl2TGVmdCA9IHN0eWxlZChDb2wpYFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgXG4gICAgcGFkZGluZzogMHB4IDMwcHggMHB4IDBweDsgXG5gXG5cbmNvbnN0IFN0eWxlZENvbERpdlJpZ2h0ID0gc3R5bGVkKENvbClgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyBcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAzMHB4OyBcbmBcblxuY29uc3QgU3R5bGVkQ29sRGl2TGFzdCA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiAwcHg7IFxuYCJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcz9mNmFiIl0sIm5hbWVzIjpbIlByb2plY3RHcmlkIiwic3RhdGUiLCJnZW5lcmF0ZVBvc3RMaXN0Iiwic291cmNlIiwicG9zdCIsIm1hcCIsInR5cGUiLCJpZCIsIml0ZW0iLCJfX2h0bWwiLCJ0aXRsZSIsInJlbmRlcmVkIiwiY29udGVudCIsImNvbm5lY3QiLCJTdHlsZWRDb250YWluZXIiLCJDb250YWluZXIiLCJTdHlsZWRDb2xEaXZMZWZ0IiwiQ29sIiwiU3R5bGVkQ29sRGl2UmlnaHQiLCJTdHlsZWRDb2xEaXZMYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FSQWVBLEdBQU1BLFlBQVcsQ0FBRyxRQUFhLElBQVosQ0FBQ0MsS0FBRCxDQUFZLE1BSTdCLEdBQU1DLGlCQUFnQixDQUFHLElBQU0sQ0FFM0JELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxJQUFiLENBQWtCQyxHQUFsQixDQUFzQixTQUFrQixJQUFqQixDQUFFQyxJQUFGLENBQVFDLEVBQVIsQ0FBaUIsT0FDcEMsR0FBTUMsS0FBSSxDQUFHUCxLQUFLLENBQUNFLE1BQU4sQ0FBYUcsSUFBYixFQUFtQkMsRUFBbkIsQ0FBYixDQUNBLE1BQU8sMkRBQUMsdURBQUQsRUFBTSxHQUFHLENBQUVDLElBQUksQ0FBQ0QsRUFBaEIsQ0FBb0IsSUFBSSxDQUFFQyxJQUExQixFQUFQLENBQ0gsQ0FIRCxFQUlILENBTkQsQ0FRQSxNQUNJLDJEQUFDLGVBQUQsRUFBaUIsRUFBRSxDQUFDLHdCQUFwQixFQUNJLDBEQUFDLDJEQUFELE1BQ0ksMERBQUMsZ0JBQUQsRUFBa0IsRUFBRSxDQUFFLENBQXRCLEVBQ0ksMERBQUMsZ0RBQUQsRUFDSSxLQUFLLENBQUUsQ0FBQ0MsTUFBTSxDQUFFUixLQUFLLENBQUNFLE1BQU4sQ0FBYSxNQUFiLEVBQXFCLEdBQXJCLEVBQTBCTyxLQUExQixDQUFnQ0MsUUFBekMsQ0FEWCxDQUVJLE9BQU8sQ0FBRSxDQUFDRixNQUFNLENBQUVSLEtBQUssQ0FBQ0UsTUFBTixDQUFhLE1BQWIsRUFBcUIsR0FBckIsRUFBMEJTLE9BQTFCLENBQWtDRCxRQUEzQyxDQUZiLEVBREosQ0FESixDQURKLENBREosQ0FXSCxDQXZCRCxDQXlCZUUsdUhBQU8sQ0FBQ2IsV0FBRCxDQUF0QixFQUVBLEdBQU1jLGdCQUFlLENBQUcsa0ZBQU9DLGlFQUFQLDZDQUFILDRtRkFBckIsQ0FJQSxHQUFNQyxpQkFBZ0IsQ0FBRyxrRkFBT0MsMkRBQVAsOENBQUgsZ3ZGQUF0QixDQU1BLEdBQU1DLGtCQUFpQixDQUFHLGtGQUFPRCwyREFBUCwrQ0FBSCxndkZBQXZCLENBTUEsR0FBTUUsaUJBQWdCLDAwRkFBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gJ2Zyb250aXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC9MaXN0JztcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QvbGlzdC1pdGVtXCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5cbmltcG9ydCBwb3N0TGlzdCBmcm9tICcuL3V0aWwvUG9zdExpc3QnO1xuXG5cbmNvbnN0IFByb2plY3RHcmlkID0gKHtzdGF0ZX0pID0+IHtcblxuICAgIFxuXG4gICAgY29uc3QgZ2VuZXJhdGVQb3N0TGlzdCA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHN0YXRlLnNvdXJjZS5wb3N0Lm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAgIHJldHVybiA8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPFN0eWxlZENvbnRhaW5lciBpZD1cInByb2pla3RlLXNtb290aC1zY3JvbGxcIj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZENvbERpdkxlZnQgbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzFdLnRpdGxlLnJlbmRlcmVkfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzFdLmNvbnRlbnQucmVuZGVyZWR9fS8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRDb2xEaXZMZWZ0PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQcm9qZWN0R3JpZClcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG5cbmBcblxuY29uc3QgU3R5bGVkQ29sRGl2TGVmdCA9IHN0eWxlZChDb2wpYFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgXG4gICAgcGFkZGluZzogMHB4IDMwcHggMHB4IDBweDsgXG5gXG5cbmNvbnN0IFN0eWxlZENvbERpdlJpZ2h0ID0gc3R5bGVkKENvbClgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyBcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAzMHB4OyBcbmBcblxuY29uc3QgU3R5bGVkQ29sRGl2TGFzdCA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiAwcHg7IFxuYCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/ProjectGrid.js\n");

/***/ })

})