webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/Project.js":
/*!**************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/Project.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var _NavbarCustomLight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavbarCustomLight */ \"./packages/alma-stolte-theme/src/components/NavbarCustomLight.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Project=({state})=>{// Get information about the current URL.\nconst data=state.source.get(state.router.link);// Get the data of the post.\nconst post=state.source[data.type][data.id];return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(StyledContainer,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{md:12,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(StyledContent,{dangerouslySetInnerHTML:{__html:post.content.rendered}})})})})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Project));const StyledContainer=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{target:\"e128x72z1\",label:\"StyledContainer\"})( false?undefined:{name:\"6l97zh\",styles:\"margin-top:60px;max-width:1000px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCeUMiLCJmaWxlIjoiL1VzZXJzL21vcml0emtsZW1tL0RvY3VtZW50cy9GaXJtYS9Qcm9qZWt0ZS9hbG1hIHN0b2x0ZS9jb2RlL2FsbWEtc3RvbHRlL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9jb21wb25lbnRzL1Byb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgY3NzIH0gZnJvbSAnZnJvbnRpdHknO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xuaW1wb3J0IE5hdmJhckN1c3RvbUxpZ2h0IGZyb20gJy4vTmF2YmFyQ3VzdG9tTGlnaHQnXG5cbmNvbnN0IFByb2plY3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIHBvc3QuXG4gICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTdHlsZWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZENvbnRlbnQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWQgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFByb2plY3QpO1xuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQoQ29udGFpbmVyKWBcbiAgICBtYXJnaW4tdG9wOiA2MHB4OyBcbiAgICBtYXgtd2lkdGg6IDEwMDBweDsgXG5gXG5cbi8vIHN0eWxpbmcgZXhjZXJwdCB3aGljaCBvbmx5IGNvbWVzIHdpdGggYSBwYXJhZ3JhcGggXG5jb25zdCBTdHlsZWRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICAmIHAge1xuICAgICAgICBmb250LWZhbWlseTogTGlicmVCYXNrZXJ2aWxsZS1SZWd1bGFyO1xuICAgICAgICBmb250LXNpemU6IDE1LjJweDtcbiAgICAgICAgY29sb3I6ICMwRjBEMEU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjA5cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMy4yNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7IFxuICAgIH1cblxuICAgICYgaW1nIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIH1cbiAgICBcblxuYDsiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});// styling excerpt which only comes with a paragraph \nconst StyledContent=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\",{target:\"e128x72z0\",label:\"StyledContent\"})( false?undefined:{name:\"1imuny9\",styles:\"& p{font-family:LibreBaskerville-Regular;font-size:15.2px;color:#0F0D0E;letter-spacing:1.09px;text-align:justify;line-height:33.25px;border:2px solid red;}& img{object-fit:cover;width:100%;height:100%;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DZ0MiLCJmaWxlIjoiL1VzZXJzL21vcml0emtsZW1tL0RvY3VtZW50cy9GaXJtYS9Qcm9qZWt0ZS9hbG1hIHN0b2x0ZS9jb2RlL2FsbWEtc3RvbHRlL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9jb21wb25lbnRzL1Byb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgY3NzIH0gZnJvbSAnZnJvbnRpdHknO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJ1xuaW1wb3J0IE5hdmJhckN1c3RvbUxpZ2h0IGZyb20gJy4vTmF2YmFyQ3VzdG9tTGlnaHQnXG5cbmNvbnN0IFByb2plY3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgICAvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIHBvc3QuXG4gICAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTdHlsZWRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZENvbnRlbnQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWQgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFByb2plY3QpO1xuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQoQ29udGFpbmVyKWBcbiAgICBtYXJnaW4tdG9wOiA2MHB4OyBcbiAgICBtYXgtd2lkdGg6IDEwMDBweDsgXG5gXG5cbi8vIHN0eWxpbmcgZXhjZXJwdCB3aGljaCBvbmx5IGNvbWVzIHdpdGggYSBwYXJhZ3JhcGggXG5jb25zdCBTdHlsZWRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICAmIHAge1xuICAgICAgICBmb250LWZhbWlseTogTGlicmVCYXNrZXJ2aWxsZS1SZWd1bGFyO1xuICAgICAgICBmb250LXNpemU6IDE1LjJweDtcbiAgICAgICAgY29sb3I6ICMwRjBEMEU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjA5cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMy4yNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7IFxuICAgIH1cblxuICAgICYgaW1nIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIH1cbiAgICBcblxuYDsiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LmpzPzllOTciXSwibmFtZXMiOlsiUHJvamVjdCIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwb3N0IiwidHlwZSIsImlkIiwiX19odG1sIiwiY29udGVudCIsInJlbmRlcmVkIiwiY29ubmVjdCIsIlN0eWxlZENvbnRhaW5lciIsIkNvbnRhaW5lciIsIlN0eWxlZENvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7cVJBT0EsS0FBTUEsUUFBTyxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFELEdBQWUsQ0FFM0I7QUFDQSxLQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUNBO0FBQ0EsS0FBTUMsS0FBSSxDQUFHTixLQUFLLENBQUNFLE1BQU4sQ0FBYUQsSUFBSSxDQUFDTSxJQUFsQixFQUF3Qk4sSUFBSSxDQUFDTyxFQUE3QixDQUFiLENBRUEsTUFDSSx3RkFDSSx1RUFBQyxlQUFELFdBQ0ksdUVBQUMsMkRBQUQsV0FDSSx1RUFBQywyREFBRCxFQUFLLEVBQUUsQ0FBRSxFQUFULFVBQ0ksdUVBQUMsYUFBRCxFQUFlLHVCQUF1QixDQUFFLENBQUVDLE1BQU0sQ0FBRUgsSUFBSSxDQUFDSSxPQUFMLENBQWFDLFFBQXZCLENBQXhDLEVBREosRUFESixFQURKLEVBREosRUFESixDQVdILENBbEJELENBb0JlQyx1SEFBTyxDQUFDYixPQUFELENBQXRCLEVBRUEsS0FBTWMsZ0JBQWUsQ0FBRyxvRUFBTSxDQUFDQyxpRUFBUCw4Q0FBSCxnL0VBQXJCLENBS0E7QUFDQSxLQUFNQyxjQUFhLHF3RkFBbkIiLCJmaWxlIjoiLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gJ2Zyb250aXR5JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1JvdydcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCdcbmltcG9ydCBOYXZiYXJDdXN0b21MaWdodCBmcm9tICcuL05hdmJhckN1c3RvbUxpZ2h0J1xuXG5jb25zdCBQcm9qZWN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuXG4gICAgLy8gR2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IFVSTC5cbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gICAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBwb3N0LlxuICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRDb250ZW50IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50LnJlbmRlcmVkIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9TdHlsZWRDb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQcm9qZWN0KTtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG4gICAgbWFyZ2luLXRvcDogNjBweDsgXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7IFxuYFxuXG4vLyBzdHlsaW5nIGV4Y2VycHQgd2hpY2ggb25seSBjb21lcyB3aXRoIGEgcGFyYWdyYXBoIFxuY29uc3QgU3R5bGVkQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgJiBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IExpYnJlQmFza2VydmlsbGUtUmVndWxhcjtcbiAgICAgICAgZm9udC1zaXplOiAxNS4ycHg7XG4gICAgICAgIGNvbG9yOiAjMEYwRDBFO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4wOXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBsaW5lLWhlaWdodDogMzMuMjVweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkOyBcbiAgICB9XG5cbiAgICAmIGltZyB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICB9XG4gICAgXG5cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/Project.js\n");

/***/ })

})