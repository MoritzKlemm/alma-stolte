webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/NavbarCustom.js":
/*!********************************************************!*\
  !*** ./packages/alma-stolte-theme/src/NavbarCustom.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Link */ \"./packages/alma-stolte-theme/src/Link.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}//             <p>this is an {state.router.link}</p>\nvar _ref= false?undefined:{name:\"l1k9i-NavbarCustom\",styles:\"color:white !important;;label:NavbarCustom;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvTmF2YmFyQ3VzdG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVltRCIsImZpbGUiOiIvVXNlcnMvbW9yaXR6a2xlbW0vRG9jdW1lbnRzL0Zpcm1hL1Byb2pla3RlL2FsbWEgc3RvbHRlL2NvZGUvYWxtYS1zdG9sdGUvcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL05hdmJhckN1c3RvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gJ2Zyb250aXR5JztcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcidcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XG5cblxuLy8gICAgICAgICAgICAgPHA+dGhpcyBpcyBhbiB7c3RhdGUucm91dGVyLmxpbmt9PC9wPlxuXG5jb25zdCBOYXZiYXJDdXN0b20gPSAoeyBzdGF0ZSwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LW1haW5cIiAgY2xhc3NOYW1lPVwiY2xhc3NOYW1lXCI+XG4gICAgICAgICAgICA8TmF2YmFyIGJnPVwidHJhbnNwYXJlbnRcIiBleHBhbmQ9XCJsZ1wiIGZpeGVkPVwidG9wXCI+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIiBjc3M9e2Nzc2Bjb2xvcjogd2hpdGUgIWltcG9ydGFudDtgfT5BTE1BIFNUT0xURTwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2thbGVuZGVyXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+S0FMRU5ERVI8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvcHJvamVrdGVcIiBjc3M9e2Nzc2Bjb2xvcjogd2hpdGUgIWltcG9ydGFudDtgfT5QUk9KRUtURTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi92aXRhXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+VklUQTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9tZWRpYVwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9Pk1FRElBPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2tvbnRha3RcIiBjc3M9e2Nzc2Bjb2xvcjogd2hpdGUgIWltcG9ydGFudDtgfT5LT05UQUtUPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE5hdmJhckN1c3RvbSlcblxuY29uc3QgU3R5bGVkRGl2ID0gc3R5bGVkLmRpdmBcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuYDtcblxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var _ref2= false?undefined:{name:\"l1k9i-NavbarCustom\",styles:\"color:white !important;;label:NavbarCustom;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvTmF2YmFyQ3VzdG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCMkQiLCJmaWxlIjoiL1VzZXJzL21vcml0emtsZW1tL0RvY3VtZW50cy9GaXJtYS9Qcm9qZWt0ZS9hbG1hIHN0b2x0ZS9jb2RlL2FsbWEtc3RvbHRlL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9OYXZiYXJDdXN0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBjc3MgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuXG5cbi8vICAgICAgICAgICAgIDxwPnRoaXMgaXMgYW4ge3N0YXRlLnJvdXRlci5saW5rfTwvcD5cblxuY29uc3QgTmF2YmFyQ3VzdG9tID0gKHsgc3RhdGUsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1tYWluXCIgIGNsYXNzTmFtZT1cImNsYXNzTmFtZVwiPlxuICAgICAgICAgICAgPE5hdmJhciBiZz1cInRyYW5zcGFyZW50XCIgZXhwYW5kPVwibGdcIiBmaXhlZD1cInRvcFwiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+QUxNQSBTVE9MVEU8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rYWxlbmRlclwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PktBTEVOREVSPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3Byb2pla3RlXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+UFJPSkVLVEU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvdml0YVwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PlZJVEE8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvbWVkaWFcIiBjc3M9e2Nzc2Bjb2xvcjogd2hpdGUgIWltcG9ydGFudDtgfT5NRURJQTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rb250YWt0XCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+S09OVEFLVDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZiYXJDdXN0b20pXG5cbmNvbnN0IFN0eWxlZERpdiA9IHN0eWxlZC5kaXZgXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var _ref3= false?undefined:{name:\"l1k9i-NavbarCustom\",styles:\"color:white !important;;label:NavbarCustom;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvTmF2YmFyQ3VzdG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCMkQiLCJmaWxlIjoiL1VzZXJzL21vcml0emtsZW1tL0RvY3VtZW50cy9GaXJtYS9Qcm9qZWt0ZS9hbG1hIHN0b2x0ZS9jb2RlL2FsbWEtc3RvbHRlL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9OYXZiYXJDdXN0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBjc3MgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuXG5cbi8vICAgICAgICAgICAgIDxwPnRoaXMgaXMgYW4ge3N0YXRlLnJvdXRlci5saW5rfTwvcD5cblxuY29uc3QgTmF2YmFyQ3VzdG9tID0gKHsgc3RhdGUsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1tYWluXCIgIGNsYXNzTmFtZT1cImNsYXNzTmFtZVwiPlxuICAgICAgICAgICAgPE5hdmJhciBiZz1cInRyYW5zcGFyZW50XCIgZXhwYW5kPVwibGdcIiBmaXhlZD1cInRvcFwiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+QUxNQSBTVE9MVEU8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rYWxlbmRlclwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PktBTEVOREVSPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3Byb2pla3RlXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+UFJPSkVLVEU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvdml0YVwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PlZJVEE8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvbWVkaWFcIiBjc3M9e2Nzc2Bjb2xvcjogd2hpdGUgIWltcG9ydGFudDtgfT5NRURJQTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rb250YWt0XCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+S09OVEFLVDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZiYXJDdXN0b20pXG5cbmNvbnN0IFN0eWxlZERpdiA9IHN0eWxlZC5kaXZgXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var _ref4= false?undefined:{name:\"l1k9i-NavbarCustom\",styles:\"color:white !important;;label:NavbarCustom;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvTmF2YmFyQ3VzdG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CdUQiLCJmaWxlIjoiL1VzZXJzL21vcml0emtsZW1tL0RvY3VtZW50cy9GaXJtYS9Qcm9qZWt0ZS9hbG1hIHN0b2x0ZS9jb2RlL2FsbWEtc3RvbHRlL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9OYXZiYXJDdXN0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBjc3MgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuXG5cbi8vICAgICAgICAgICAgIDxwPnRoaXMgaXMgYW4ge3N0YXRlLnJvdXRlci5saW5rfTwvcD5cblxuY29uc3QgTmF2YmFyQ3VzdG9tID0gKHsgc3RhdGUsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1tYWluXCIgIGNsYXNzTmFtZT1cImNsYXNzTmFtZVwiPlxuICAgICAgICAgICAgPE5hdmJhciBiZz1cInRyYW5zcGFyZW50XCIgZXhwYW5kPVwibGdcIiBmaXhlZD1cInRvcFwiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+QUxNQSBTVE9MVEU8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rYWxlbmRlclwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PktBTEVOREVSPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3Byb2pla3RlXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+UFJPSkVLVEU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvdml0YVwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PlZJVEE8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvbWVkaWFcIiBjc3M9e2Nzc2Bjb2xvcjogd2hpdGUgIWltcG9ydGFudDtgfT5NRURJQTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rb250YWt0XCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+S09OVEFLVDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZiYXJDdXN0b20pXG5cbmNvbnN0IFN0eWxlZERpdiA9IHN0eWxlZC5kaXZgXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var _ref5= false?undefined:{name:\"l1k9i-NavbarCustom\",styles:\"color:white !important;;label:NavbarCustom;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvTmF2YmFyQ3VzdG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cd0QiLCJmaWxlIjoiL1VzZXJzL21vcml0emtsZW1tL0RvY3VtZW50cy9GaXJtYS9Qcm9qZWt0ZS9hbG1hIHN0b2x0ZS9jb2RlL2FsbWEtc3RvbHRlL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9OYXZiYXJDdXN0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBjc3MgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuXG5cbi8vICAgICAgICAgICAgIDxwPnRoaXMgaXMgYW4ge3N0YXRlLnJvdXRlci5saW5rfTwvcD5cblxuY29uc3QgTmF2YmFyQ3VzdG9tID0gKHsgc3RhdGUsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1tYWluXCIgIGNsYXNzTmFtZT1cImNsYXNzTmFtZVwiPlxuICAgICAgICAgICAgPE5hdmJhciBiZz1cInRyYW5zcGFyZW50XCIgZXhwYW5kPVwibGdcIiBmaXhlZD1cInRvcFwiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+QUxNQSBTVE9MVEU8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rYWxlbmRlclwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PktBTEVOREVSPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3Byb2pla3RlXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+UFJPSkVLVEU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvdml0YVwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PlZJVEE8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvbWVkaWFcIiBjc3M9e2Nzc2Bjb2xvcjogd2hpdGUgIWltcG9ydGFudDtgfT5NRURJQTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rb250YWt0XCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+S09OVEFLVDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZiYXJDdXN0b20pXG5cbmNvbnN0IFN0eWxlZERpdiA9IHN0eWxlZC5kaXZgXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var _ref6= false?undefined:{name:\"l1k9i-NavbarCustom\",styles:\"color:white !important;;label:NavbarCustom;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvTmF2YmFyQ3VzdG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCMEQiLCJmaWxlIjoiL1VzZXJzL21vcml0emtsZW1tL0RvY3VtZW50cy9GaXJtYS9Qcm9qZWt0ZS9hbG1hIHN0b2x0ZS9jb2RlL2FsbWEtc3RvbHRlL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9OYXZiYXJDdXN0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBjc3MgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuXG5cbi8vICAgICAgICAgICAgIDxwPnRoaXMgaXMgYW4ge3N0YXRlLnJvdXRlci5saW5rfTwvcD5cblxuY29uc3QgTmF2YmFyQ3VzdG9tID0gKHsgc3RhdGUsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1tYWluXCIgIGNsYXNzTmFtZT1cImNsYXNzTmFtZVwiPlxuICAgICAgICAgICAgPE5hdmJhciBiZz1cInRyYW5zcGFyZW50XCIgZXhwYW5kPVwibGdcIiBmaXhlZD1cInRvcFwiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+QUxNQSBTVE9MVEU8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rYWxlbmRlclwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PktBTEVOREVSPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3Byb2pla3RlXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+UFJPSkVLVEU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvdml0YVwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PlZJVEE8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvbWVkaWFcIiBjc3M9e2Nzc2Bjb2xvcjogd2hpdGUgIWltcG9ydGFudDtgfT5NRURJQTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rb250YWt0XCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+S09OVEFLVDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZiYXJDdXN0b20pXG5cbmNvbnN0IFN0eWxlZERpdiA9IHN0eWxlZC5kaXZgXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var NavbarCustom=(_ref7)=>{var{state,className}=_ref7;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{className:\"nav-main\",className:\"className\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{bg:\"transparent\",expand:\"lg\",fixed:\"top\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Brand,{href:\"#home\",css:_ref},\"ALMA STOLTE\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Toggle,{\"aria-controls\":\"basic-navbar-nav\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Collapse,{id:\"basic-navbar-nav\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Nav,{className:\"mr-auto\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Nav.Link,{href:\"/kalender\",css:_ref2},\"KALENDER\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Nav.Link,{href:\"/projekte\",css:_ref3},\"PROJEKTE\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Nav.Link,{href:\"/vita\",css:_ref4},\"VITA\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Nav.Link,{href:\"/media\",css:_ref5},\"MEDIA\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Nav.Link,{href:\"/kontakt\",css:_ref6},\"KONTAKT\")))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(NavbarCustom));var StyledDiv=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1dsq7mm0\",label:\"StyledDiv\"})( false?undefined:{name:\"cxmp86\",styles:\"background-color:white;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvTmF2YmFyQ3VzdG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCNEIiLCJmaWxlIjoiL1VzZXJzL21vcml0emtsZW1tL0RvY3VtZW50cy9GaXJtYS9Qcm9qZWt0ZS9hbG1hIHN0b2x0ZS9jb2RlL2FsbWEtc3RvbHRlL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9OYXZiYXJDdXN0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBjc3MgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuXG5cbi8vICAgICAgICAgICAgIDxwPnRoaXMgaXMgYW4ge3N0YXRlLnJvdXRlci5saW5rfTwvcD5cblxuY29uc3QgTmF2YmFyQ3VzdG9tID0gKHsgc3RhdGUsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1tYWluXCIgIGNsYXNzTmFtZT1cImNsYXNzTmFtZVwiPlxuICAgICAgICAgICAgPE5hdmJhciBiZz1cInRyYW5zcGFyZW50XCIgZXhwYW5kPVwibGdcIiBmaXhlZD1cInRvcFwiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+QUxNQSBTVE9MVEU8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rYWxlbmRlclwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PktBTEVOREVSPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3Byb2pla3RlXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+UFJPSkVLVEU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvdml0YVwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PlZJVEE8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvbWVkaWFcIiBjc3M9e2Nzc2Bjb2xvcjogd2hpdGUgIWltcG9ydGFudDtgfT5NRURJQTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rb250YWt0XCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+S09OVEFLVDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZiYXJDdXN0b20pXG5cbmNvbnN0IFN0eWxlZERpdiA9IHN0eWxlZC5kaXZgXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvTmF2YmFyQ3VzdG9tLmpzP2VmOGYiXSwibmFtZXMiOlsiTmF2YmFyQ3VzdG9tIiwic3RhdGUiLCJjbGFzc05hbWUiLCJjb25uZWN0IiwiU3R5bGVkRGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7cVJBTUE7MjBlQUVBLEdBQU1BLGFBQVksQ0FBRyxTQUEwQixJQUF6QixDQUFFQyxLQUFGLENBQVNDLFNBQVQsQ0FBeUIsT0FDM0MsTUFDSSxrRUFBSyxTQUFTLENBQUMsVUFBZixDQUEyQixTQUFTLENBQUMsV0FBckMsRUFDSSwwREFBQyw4REFBRCxFQUFRLEVBQUUsQ0FBQyxhQUFYLENBQXlCLE1BQU0sQ0FBQyxJQUFoQyxDQUFxQyxLQUFLLENBQUMsS0FBM0MsRUFDSSwwREFBQyw4REFBRCxDQUFRLEtBQVIsRUFBYyxJQUFJLENBQUMsT0FBbkIsQ0FBMkIsR0FBRyxLQUE5QixnQkFESixDQUVJLDBEQUFDLDhEQUFELENBQVEsTUFBUixFQUFlLGdCQUFjLGtCQUE3QixFQUZKLENBR0ksMERBQUMsOERBQUQsQ0FBUSxRQUFSLEVBQWlCLEVBQUUsQ0FBQyxrQkFBcEIsRUFFSSwwREFBQyxHQUFELEVBQUssU0FBUyxDQUFDLFNBQWYsRUFDSSwwREFBQyxHQUFELENBQUssSUFBTCxFQUFVLElBQUksQ0FBQyxXQUFmLENBQTJCLEdBQUcsTUFBOUIsYUFESixDQUVJLDBEQUFDLEdBQUQsQ0FBSyxJQUFMLEVBQVUsSUFBSSxDQUFDLFdBQWYsQ0FBMkIsR0FBRyxNQUE5QixhQUZKLENBR0ksMERBQUMsR0FBRCxDQUFLLElBQUwsRUFBVSxJQUFJLENBQUMsT0FBZixDQUF1QixHQUFHLE1BQTFCLFNBSEosQ0FJSSwwREFBQyxHQUFELENBQUssSUFBTCxFQUFVLElBQUksQ0FBQyxRQUFmLENBQXdCLEdBQUcsTUFBM0IsVUFKSixDQUtJLDBEQUFDLEdBQUQsQ0FBSyxJQUFMLEVBQVUsSUFBSSxDQUFDLFVBQWYsQ0FBMEIsR0FBRyxNQUE3QixZQUxKLENBRkosQ0FISixDQURKLENBREosQ0FrQkgsQ0FuQkQsQ0FxQmVDLHVIQUFPLENBQUNILFlBQUQsQ0FBdEIsRUFFQSxHQUFNSSxVQUFTLGtvRkFBZiIsImZpbGUiOiIuL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9OYXZiYXJDdXN0b20uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBjc3MgfSBmcm9tICdmcm9udGl0eSc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuXG5cbi8vICAgICAgICAgICAgIDxwPnRoaXMgaXMgYW4ge3N0YXRlLnJvdXRlci5saW5rfTwvcD5cblxuY29uc3QgTmF2YmFyQ3VzdG9tID0gKHsgc3RhdGUsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1tYWluXCIgIGNsYXNzTmFtZT1cImNsYXNzTmFtZVwiPlxuICAgICAgICAgICAgPE5hdmJhciBiZz1cInRyYW5zcGFyZW50XCIgZXhwYW5kPVwibGdcIiBmaXhlZD1cInRvcFwiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+QUxNQSBTVE9MVEU8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rYWxlbmRlclwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PktBTEVOREVSPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3Byb2pla3RlXCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+UFJPSkVLVEU8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvdml0YVwiIGNzcz17Y3NzYGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O2B9PlZJVEE8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvbWVkaWFcIiBjc3M9e2Nzc2Bjb2xvcjogd2hpdGUgIWltcG9ydGFudDtgfT5NRURJQTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9rb250YWt0XCIgY3NzPXtjc3NgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7YH0+S09OVEFLVDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXZiYXJDdXN0b20pXG5cbmNvbnN0IFN0eWxlZERpdiA9IHN0eWxlZC5kaXZgXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmA7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/NavbarCustom.js\n");

/***/ })

})