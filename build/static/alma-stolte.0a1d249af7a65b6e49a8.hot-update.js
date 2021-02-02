webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/ProjectGrid.js":
/*!******************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/ProjectGrid.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _list_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/List */ \"./packages/alma-stolte-theme/src/components/list/List.js\");\n/* harmony import */ var _list_list_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list-item */ \"./packages/alma-stolte-theme/src/components/list/list-item.js\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loading */ \"./packages/alma-stolte-theme/src/components/Loading.js\");\n/* harmony import */ var _util_PostList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util/PostList */ \"./packages/alma-stolte-theme/src/components/util/PostList.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var ProjectGrid=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);var[projectPosts,setProjectPosts]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);var createProjects=()=>{data.item.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[\"post\"][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{key:item.id,content:item});});};Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(()=>{},[]);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledContainer,{id:\"projekte-smooth-scroll\"},createProjects,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledCol,{md:6},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{title:{__html:state.source['post'][171].title.rendered},content:{__html:state.source['post'][171].content.excerpt}})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledCol,{md:6},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{title:{__html:state.source['post'][177].title.rendered},content:{__html:state.source['post'][177].content.rendered}}))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(ProjectGrid));var StyledContainer=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{target:\"evd0dxm0\",label:\"StyledContainer\"})( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRHlDIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgY3NzIH0gZnJvbSAnZnJvbnRpdHknO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1JvdydcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCdcblxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0L0xpc3QnO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC9saXN0LWl0ZW1cIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCBwb3N0TGlzdCBmcm9tICcuL3V0aWwvUG9zdExpc3QnO1xuXG5cbmNvbnN0IFByb2plY3RHcmlkID0gKHtzdGF0ZX0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgICBjb25zdCBbcHJvamVjdFBvc3RzLCBzZXRQcm9qZWN0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGRhdGEuaXRlbS5tYXAoKHt0eXBlLCBpZH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbXCJwb3N0XCJdW2lkXTtcbiAgICAgICAgICAgIHJldHVybiA8UHJvamVjdCBrZXk9e2l0ZW0uaWR9IGNvbnRlbnQ9e2l0ZW19IC8+O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgIH0sIFtdKVxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxTdHlsZWRDb250YWluZXIgaWQ9XCJwcm9qZWt0ZS1zbW9vdGgtc2Nyb2xsXCI+XG4gICAgICAgICAgICB7Y3JlYXRlUHJvamVjdHN9ICAgIFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkQ29sIG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17e19faHRtbDogc3RhdGUuc291cmNlWydwb3N0J11bMTcxXS50aXRsZS5yZW5kZXJlZH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17e19faHRtbDogc3RhdGUuc291cmNlWydwb3N0J11bMTcxXS5jb250ZW50LmV4Y2VycHR9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ29sPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRDb2wgbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzddLnRpdGxlLnJlbmRlcmVkfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzddLmNvbnRlbnQucmVuZGVyZWR9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQcm9qZWN0R3JpZClcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG5cbmBcblxuY29uc3QgU3R5bGVkQ29sID0gc3R5bGVkKENvbClgXG4gICAgbWFyZ2luOiAzMHB4IDBweDsgXG4gICAgcGFkZGluZzogMHB4IDQwcHg7IFxuYFxuXG5jb25zdCBTdHlsZWRDb2xEaXZSaWdodCA9IHN0eWxlZChDb2wpYFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMzBweDsgXG5gXG5cbmNvbnN0IFN0eWxlZENvbERpdkxhc3QgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZzogMHB4OyBcbmAiXX0= */\");var StyledCol=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{target:\"evd0dxm1\",label:\"StyledCol\"})( false?undefined:{name:\"wqc8l6\",styles:\"margin:30px 0px;padding:0px 40px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRDZCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgY3NzIH0gZnJvbSAnZnJvbnRpdHknO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1JvdydcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCdcblxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0L0xpc3QnO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC9saXN0LWl0ZW1cIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCBwb3N0TGlzdCBmcm9tICcuL3V0aWwvUG9zdExpc3QnO1xuXG5cbmNvbnN0IFByb2plY3RHcmlkID0gKHtzdGF0ZX0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgICBjb25zdCBbcHJvamVjdFBvc3RzLCBzZXRQcm9qZWN0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGRhdGEuaXRlbS5tYXAoKHt0eXBlLCBpZH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbXCJwb3N0XCJdW2lkXTtcbiAgICAgICAgICAgIHJldHVybiA8UHJvamVjdCBrZXk9e2l0ZW0uaWR9IGNvbnRlbnQ9e2l0ZW19IC8+O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgIH0sIFtdKVxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxTdHlsZWRDb250YWluZXIgaWQ9XCJwcm9qZWt0ZS1zbW9vdGgtc2Nyb2xsXCI+XG4gICAgICAgICAgICB7Y3JlYXRlUHJvamVjdHN9ICAgIFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkQ29sIG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17e19faHRtbDogc3RhdGUuc291cmNlWydwb3N0J11bMTcxXS50aXRsZS5yZW5kZXJlZH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17e19faHRtbDogc3RhdGUuc291cmNlWydwb3N0J11bMTcxXS5jb250ZW50LmV4Y2VycHR9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ29sPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRDb2wgbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzddLnRpdGxlLnJlbmRlcmVkfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzddLmNvbnRlbnQucmVuZGVyZWR9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQcm9qZWN0R3JpZClcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG5cbmBcblxuY29uc3QgU3R5bGVkQ29sID0gc3R5bGVkKENvbClgXG4gICAgbWFyZ2luOiAzMHB4IDBweDsgXG4gICAgcGFkZGluZzogMHB4IDQwcHg7IFxuYFxuXG5jb25zdCBTdHlsZWRDb2xEaXZSaWdodCA9IHN0eWxlZChDb2wpYFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMzBweDsgXG5gXG5cbmNvbnN0IFN0eWxlZENvbERpdkxhc3QgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZzogMHB4OyBcbmAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledColDivRight=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{target:\"evd0dxm2\",label:\"StyledColDivRight\"})( false?undefined:{name:\"po4h8s\",styles:\"margin-top:30px;margin-bottom:30px;padding:0px 0px 0px 30px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRHFDIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgY3NzIH0gZnJvbSAnZnJvbnRpdHknO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1JvdydcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCdcblxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0L0xpc3QnO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC9saXN0LWl0ZW1cIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCBwb3N0TGlzdCBmcm9tICcuL3V0aWwvUG9zdExpc3QnO1xuXG5cbmNvbnN0IFByb2plY3RHcmlkID0gKHtzdGF0ZX0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgICBjb25zdCBbcHJvamVjdFBvc3RzLCBzZXRQcm9qZWN0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGRhdGEuaXRlbS5tYXAoKHt0eXBlLCBpZH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbXCJwb3N0XCJdW2lkXTtcbiAgICAgICAgICAgIHJldHVybiA8UHJvamVjdCBrZXk9e2l0ZW0uaWR9IGNvbnRlbnQ9e2l0ZW19IC8+O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgIH0sIFtdKVxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxTdHlsZWRDb250YWluZXIgaWQ9XCJwcm9qZWt0ZS1zbW9vdGgtc2Nyb2xsXCI+XG4gICAgICAgICAgICB7Y3JlYXRlUHJvamVjdHN9ICAgIFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkQ29sIG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17e19faHRtbDogc3RhdGUuc291cmNlWydwb3N0J11bMTcxXS50aXRsZS5yZW5kZXJlZH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17e19faHRtbDogc3RhdGUuc291cmNlWydwb3N0J11bMTcxXS5jb250ZW50LmV4Y2VycHR9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ29sPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRDb2wgbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzddLnRpdGxlLnJlbmRlcmVkfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzddLmNvbnRlbnQucmVuZGVyZWR9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQcm9qZWN0R3JpZClcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG5cbmBcblxuY29uc3QgU3R5bGVkQ29sID0gc3R5bGVkKENvbClgXG4gICAgbWFyZ2luOiAzMHB4IDBweDsgXG4gICAgcGFkZGluZzogMHB4IDQwcHg7IFxuYFxuXG5jb25zdCBTdHlsZWRDb2xEaXZSaWdodCA9IHN0eWxlZChDb2wpYFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMzBweDsgXG5gXG5cbmNvbnN0IFN0eWxlZENvbERpdkxhc3QgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZzogMHB4OyBcbmAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledColDivLast=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"evd0dxm3\",label:\"StyledColDivLast\"})( false?undefined:{name:\"1c9fjql\",styles:\"margin-top:30px;padding:0px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRW1DIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgY3NzIH0gZnJvbSAnZnJvbnRpdHknO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1JvdydcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCdcblxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0L0xpc3QnO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC9saXN0LWl0ZW1cIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCBwb3N0TGlzdCBmcm9tICcuL3V0aWwvUG9zdExpc3QnO1xuXG5cbmNvbnN0IFByb2plY3RHcmlkID0gKHtzdGF0ZX0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgICBjb25zdCBbcHJvamVjdFBvc3RzLCBzZXRQcm9qZWN0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGRhdGEuaXRlbS5tYXAoKHt0eXBlLCBpZH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbXCJwb3N0XCJdW2lkXTtcbiAgICAgICAgICAgIHJldHVybiA8UHJvamVjdCBrZXk9e2l0ZW0uaWR9IGNvbnRlbnQ9e2l0ZW19IC8+O1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgIH0sIFtdKVxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxTdHlsZWRDb250YWluZXIgaWQ9XCJwcm9qZWt0ZS1zbW9vdGgtc2Nyb2xsXCI+XG4gICAgICAgICAgICB7Y3JlYXRlUHJvamVjdHN9ICAgIFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkQ29sIG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17e19faHRtbDogc3RhdGUuc291cmNlWydwb3N0J11bMTcxXS50aXRsZS5yZW5kZXJlZH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17e19faHRtbDogc3RhdGUuc291cmNlWydwb3N0J11bMTcxXS5jb250ZW50LmV4Y2VycHR9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ29sPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRDb2wgbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzddLnRpdGxlLnJlbmRlcmVkfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt7X19odG1sOiBzdGF0ZS5zb3VyY2VbJ3Bvc3QnXVsxNzddLmNvbnRlbnQucmVuZGVyZWR9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQcm9qZWN0R3JpZClcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG5cbmBcblxuY29uc3QgU3R5bGVkQ29sID0gc3R5bGVkKENvbClgXG4gICAgbWFyZ2luOiAzMHB4IDBweDsgXG4gICAgcGFkZGluZzogMHB4IDQwcHg7IFxuYFxuXG5jb25zdCBTdHlsZWRDb2xEaXZSaWdodCA9IHN0eWxlZChDb2wpYFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMzBweDsgXG5gXG5cbmNvbnN0IFN0eWxlZENvbERpdkxhc3QgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZzogMHB4OyBcbmAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0R3JpZC5qcz9mNmFiIl0sIm5hbWVzIjpbIlByb2plY3RHcmlkIiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsInByb2plY3RQb3N0cyIsInNldFByb2plY3RQb3N0cyIsInVzZVN0YXRlIiwiY3JlYXRlUHJvamVjdHMiLCJpdGVtIiwibWFwIiwidHlwZSIsImlkIiwidXNlRWZmZWN0IiwiX19odG1sIiwidGl0bGUiLCJyZW5kZXJlZCIsImNvbnRlbnQiLCJleGNlcnB0IiwiY29ubmVjdCIsIlN0eWxlZENvbnRhaW5lciIsIkNvbnRhaW5lciIsIlN0eWxlZENvbCIsIkNvbCIsIlN0eWxlZENvbERpdlJpZ2h0IiwiU3R5bGVkQ29sRGl2TGFzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxUkFjQSxHQUFNQSxZQUFXLENBQUcsUUFBYSxJQUFaLENBQUNDLEtBQUQsQ0FBWSxNQUM3QixHQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUVBLEdBQU0sQ0FBQ0MsWUFBRCxDQUFlQyxlQUFmLEVBQWtDQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEQsQ0FFQSxHQUFNQyxlQUFjLENBQUcsSUFBTSxDQUN6QlIsSUFBSSxDQUFDUyxJQUFMLENBQVVDLEdBQVYsQ0FBYyxTQUFnQixJQUFmLENBQUNDLElBQUQsQ0FBT0MsRUFBUCxDQUFlLE9BQzFCLEdBQU1ILEtBQUksQ0FBR1YsS0FBSyxDQUFDRSxNQUFOLENBQWEsTUFBYixFQUFxQlcsRUFBckIsQ0FBYixDQUNBLE1BQU8sMkRBQUMsZ0RBQUQsRUFBUyxHQUFHLENBQUVILElBQUksQ0FBQ0csRUFBbkIsQ0FBdUIsT0FBTyxDQUFFSCxJQUFoQyxFQUFQLENBQ0gsQ0FIRCxFQUlILENBTEQsQ0FPQUksdURBQVMsQ0FBQyxJQUFNLENBRWYsQ0FGUSxDQUVOLEVBRk0sQ0FBVCxDQUtBLE1BQ0ksMkRBQUMsZUFBRCxFQUFpQixFQUFFLENBQUMsd0JBQXBCLEVBQ0tMLGNBREwsQ0FFSSwwREFBQywyREFBRCxNQUNJLDBEQUFDLFNBQUQsRUFBVyxFQUFFLENBQUUsQ0FBZixFQUNJLDBEQUFDLGdEQUFELEVBQ0ksS0FBSyxDQUFFLENBQUNNLE1BQU0sQ0FBRWYsS0FBSyxDQUFDRSxNQUFOLENBQWEsTUFBYixFQUFxQixHQUFyQixFQUEwQmMsS0FBMUIsQ0FBZ0NDLFFBQXpDLENBRFgsQ0FFSSxPQUFPLENBQUUsQ0FBQ0YsTUFBTSxDQUFFZixLQUFLLENBQUNFLE1BQU4sQ0FBYSxNQUFiLEVBQXFCLEdBQXJCLEVBQTBCZ0IsT0FBMUIsQ0FBa0NDLE9BQTNDLENBRmIsRUFESixDQURKLENBT0ksMERBQUMsU0FBRCxFQUFXLEVBQUUsQ0FBRSxDQUFmLEVBQ0ksMERBQUMsZ0RBQUQsRUFDSSxLQUFLLENBQUUsQ0FBQ0osTUFBTSxDQUFFZixLQUFLLENBQUNFLE1BQU4sQ0FBYSxNQUFiLEVBQXFCLEdBQXJCLEVBQTBCYyxLQUExQixDQUFnQ0MsUUFBekMsQ0FEWCxDQUVJLE9BQU8sQ0FBRSxDQUFDRixNQUFNLENBQUVmLEtBQUssQ0FBQ0UsTUFBTixDQUFhLE1BQWIsRUFBcUIsR0FBckIsRUFBMEJnQixPQUExQixDQUFrQ0QsUUFBM0MsQ0FGYixFQURKLENBUEosQ0FGSixDQURKLENBbUJILENBcENELENBc0NlRyx1SEFBTyxDQUFDckIsV0FBRCxDQUF0QixFQUVBLEdBQU1zQixnQkFBZSxDQUFHLGtGQUFPQyxpRUFBUCw2Q0FBSCxndEdBQXJCLENBSUEsR0FBTUMsVUFBUyxDQUFHLGtGQUFPQywyREFBUCx1Q0FBSCx5ekdBQWYsQ0FLQSxHQUFNQyxrQkFBaUIsQ0FBRyxrRkFBT0QsMkRBQVAsK0NBQUgsbzFHQUF2QixDQU1BLEdBQU1FLGlCQUFnQiw4NkdBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvUHJvamVjdEdyaWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gJ2Zyb250aXR5JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5cbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC9MaXN0JztcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QvbGlzdC1pdGVtXCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5pbXBvcnQgcG9zdExpc3QgZnJvbSAnLi91dGlsL1Bvc3RMaXN0JztcblxuXG5jb25zdCBQcm9qZWN0R3JpZCA9ICh7c3RhdGV9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gICAgY29uc3QgW3Byb2plY3RQb3N0cywgc2V0UHJvamVjdFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBkYXRhLml0ZW0ubWFwKCh7dHlwZSwgaWR9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW1wicG9zdFwiXVtpZF07XG4gICAgICAgICAgICByZXR1cm4gPFByb2plY3Qga2V5PXtpdGVtLmlkfSBjb250ZW50PXtpdGVtfSAvPjtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBcbiAgICB9LCBbXSlcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8U3R5bGVkQ29udGFpbmVyIGlkPVwicHJvamVrdGUtc21vb3RoLXNjcm9sbFwiPlxuICAgICAgICAgICAge2NyZWF0ZVByb2plY3RzfSAgICBcbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZENvbCBtZD17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3tfX2h0bWw6IHN0YXRlLnNvdXJjZVsncG9zdCddWzE3MV0udGl0bGUucmVuZGVyZWR9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3tfX2h0bWw6IHN0YXRlLnNvdXJjZVsncG9zdCddWzE3MV0uY29udGVudC5leGNlcnB0fX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZENvbD5cbiAgICAgICAgICAgICAgICA8U3R5bGVkQ29sIG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17e19faHRtbDogc3RhdGUuc291cmNlWydwb3N0J11bMTc3XS50aXRsZS5yZW5kZXJlZH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17e19faHRtbDogc3RhdGUuc291cmNlWydwb3N0J11bMTc3XS5jb250ZW50LnJlbmRlcmVkfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZENvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUHJvamVjdEdyaWQpXG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZChDb250YWluZXIpYFxuXG5gXG5cbmNvbnN0IFN0eWxlZENvbCA9IHN0eWxlZChDb2wpYFxuICAgIG1hcmdpbjogMzBweCAwcHg7IFxuICAgIHBhZGRpbmc6IDBweCA0MHB4OyBcbmBcblxuY29uc3QgU3R5bGVkQ29sRGl2UmlnaHQgPSBzdHlsZWQoQ29sKWBcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IFxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDMwcHg7IFxuYFxuXG5jb25zdCBTdHlsZWRDb2xEaXZMYXN0ID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmc6IDBweDsgXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/ProjectGrid.js\n");

/***/ })

})