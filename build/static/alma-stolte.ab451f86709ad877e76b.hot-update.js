webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/index.js":
/*!************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List */ \"./packages/alma-stolte-theme/src/components/List.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Post */ \"./packages/alma-stolte-theme/src/components/Post.js\");\n/* harmony import */ var _NavbarCustom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavbarCustom */ \"./packages/alma-stolte-theme/src/components/NavbarCustom.js\");\n/* harmony import */ var _NavbarCustomDynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarCustomDynamic */ \"./packages/alma-stolte-theme/src/components/NavbarCustomDynamic.js\");\n/* harmony import */ var _ProjectGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectGrid */ \"./packages/alma-stolte-theme/src/components/ProjectGrid.js\");\n/* harmony import */ var _Vita__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Vita */ \"./packages/alma-stolte-theme/src/components/Vita.js\");\n/* harmony import */ var _CelloBackground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CelloBackground */ \"./packages/alma-stolte-theme/src/components/CelloBackground.js\");\n/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Gallery */ \"./packages/alma-stolte-theme/src/components/Gallery.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Contact */ \"./packages/alma-stolte-theme/src/components/Contact.js\");\n/* harmony import */ var _SubPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SubPage */ \"./packages/alma-stolte-theme/src/components/SubPage.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Footer */ \"./packages/alma-stolte-theme/src/components/Footer.js\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_15__);\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var _ref= false?undefined:{name:\"ugnxf9-Theme\",styles:\"body{background-color:rgba(235,221,209,100);font-family:\\\"LibreBaskervilleRegular\\\";scroll-behavior:smooth;margin:0px;padding:0px;}.row,col-md-6,.col-md-12{margin:0px;padding:0px;}.container{padding:0px;};label:Theme;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRDJCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5cbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnO1xuaW1wb3J0IE5hdmJhckN1c3RvbSBmcm9tICcuL05hdmJhckN1c3RvbSc7XG5pbXBvcnQgTmF2YmFyQ3VzdG9tRHluYW1pYyBmcm9tICcuL05hdmJhckN1c3RvbUR5bmFtaWMnO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gJy4vUHJvamVjdEdyaWQnO1xuaW1wb3J0IFZpdGEgZnJvbSAnLi9WaXRhJztcbmltcG9ydCBDZWxsb0JhY2tncm91bmQgZnJvbSAnLi9DZWxsb0JhY2tncm91bmQnO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9HYWxsZXJ5JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XG5pbXBvcnQgU3ViUGFnZSBmcm9tICcuL1N1YlBhZ2UnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIudHRmJ1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVCb2xkIGZyb20gJy4uL2Fzc2V0cy9mb250cy9MaWJyZUJhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGVCb2xkLnR0ZidcblxuY29uc3QgVGhlbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+QWxtYSBTdG9sdGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGlzIGJsb2cgaXMganVzdCBmb3IgYmVpbmcgYXdlc29tZVwiIC8+XG4gICAgICAgICAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcbiAgICAgICAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcImhlZXRcIil9XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5pc0FyY2hpdmUgJiYgPExpc3QgLz59XG4gICAgICAgICAgICAgICAge2RhdGEuaXNQb3N0ICYmIDxQb3N0IC8+fVxuICAgICAgICAgICAgICAgIHtkYXRhLmlzUGFnZSAmJiA8UG9zdCAvPn1cbiAgICAgICAgICAgICAgICA8TmF2YmFyQ3VzdG9tLz5cbiAgICAgICAgICAgICAgICA8UHJvamVjdEdyaWQgLz5cbiAgICAgICAgICAgICAgICA8Q2VsbG9CYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgICAgICAgPFZpdGEgLz5cbiAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxuXG5cbiAgICAgICAgICAgICAgICB7PExpc3QgLz59XG4gICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwyMjEsMjA5LDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5yb3csIGNvbC1tZC02LCAuY29sLW1kLTEyIHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cblxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var Theme=(_ref2)=>{var{state}=_ref2;var data=state.source.get(state.router.link);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"title\",null,\"Alma Stolte\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"meta\",{name:\"description\",content:\"This blog is just for being awesome\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"html\",{lang:\"en\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\",integrity:\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\",crossorigin:\"anonymous\"})),console.log(\"heet\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"main\",null,data.isArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"],null),data.isPost&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null),data.isPage&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_NavbarCustom__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_ProjectGrid__WEBPACK_IMPORTED_MODULE_7__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_CelloBackground__WEBPACK_IMPORTED_MODULE_9__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_Vita__WEBPACK_IMPORTED_MODULE_8__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_Contact__WEBPACK_IMPORTED_MODULE_11__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:_ref}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Theme));var LBVRegular=/*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_14___default.a,\");};label:LBVRegular;\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RXNCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5cbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnO1xuaW1wb3J0IE5hdmJhckN1c3RvbSBmcm9tICcuL05hdmJhckN1c3RvbSc7XG5pbXBvcnQgTmF2YmFyQ3VzdG9tRHluYW1pYyBmcm9tICcuL05hdmJhckN1c3RvbUR5bmFtaWMnO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gJy4vUHJvamVjdEdyaWQnO1xuaW1wb3J0IFZpdGEgZnJvbSAnLi9WaXRhJztcbmltcG9ydCBDZWxsb0JhY2tncm91bmQgZnJvbSAnLi9DZWxsb0JhY2tncm91bmQnO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9HYWxsZXJ5JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XG5pbXBvcnQgU3ViUGFnZSBmcm9tICcuL1N1YlBhZ2UnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIudHRmJ1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVCb2xkIGZyb20gJy4uL2Fzc2V0cy9mb250cy9MaWJyZUJhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGVCb2xkLnR0ZidcblxuY29uc3QgVGhlbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+QWxtYSBTdG9sdGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGlzIGJsb2cgaXMganVzdCBmb3IgYmVpbmcgYXdlc29tZVwiIC8+XG4gICAgICAgICAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcbiAgICAgICAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcImhlZXRcIil9XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5pc0FyY2hpdmUgJiYgPExpc3QgLz59XG4gICAgICAgICAgICAgICAge2RhdGEuaXNQb3N0ICYmIDxQb3N0IC8+fVxuICAgICAgICAgICAgICAgIHtkYXRhLmlzUGFnZSAmJiA8UG9zdCAvPn1cbiAgICAgICAgICAgICAgICA8TmF2YmFyQ3VzdG9tLz5cbiAgICAgICAgICAgICAgICA8UHJvamVjdEdyaWQgLz5cbiAgICAgICAgICAgICAgICA8Q2VsbG9CYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgICAgICAgPFZpdGEgLz5cbiAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxuXG5cbiAgICAgICAgICAgICAgICB7PExpc3QgLz59XG4gICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwyMjEsMjA5LDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5yb3csIGNvbC1tZC02LCAuY29sLW1kLTEyIHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cblxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXX0= */\"));var LBVBold=/*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_15___default.a,\");};label:LBVBold;\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Rm1CIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5cbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnO1xuaW1wb3J0IE5hdmJhckN1c3RvbSBmcm9tICcuL05hdmJhckN1c3RvbSc7XG5pbXBvcnQgTmF2YmFyQ3VzdG9tRHluYW1pYyBmcm9tICcuL05hdmJhckN1c3RvbUR5bmFtaWMnO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gJy4vUHJvamVjdEdyaWQnO1xuaW1wb3J0IFZpdGEgZnJvbSAnLi9WaXRhJztcbmltcG9ydCBDZWxsb0JhY2tncm91bmQgZnJvbSAnLi9DZWxsb0JhY2tncm91bmQnO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9HYWxsZXJ5JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XG5pbXBvcnQgU3ViUGFnZSBmcm9tICcuL1N1YlBhZ2UnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIudHRmJ1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVCb2xkIGZyb20gJy4uL2Fzc2V0cy9mb250cy9MaWJyZUJhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGVCb2xkLnR0ZidcblxuY29uc3QgVGhlbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+QWxtYSBTdG9sdGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGlzIGJsb2cgaXMganVzdCBmb3IgYmVpbmcgYXdlc29tZVwiIC8+XG4gICAgICAgICAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcbiAgICAgICAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcImhlZXRcIil9XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5pc0FyY2hpdmUgJiYgPExpc3QgLz59XG4gICAgICAgICAgICAgICAge2RhdGEuaXNQb3N0ICYmIDxQb3N0IC8+fVxuICAgICAgICAgICAgICAgIHtkYXRhLmlzUGFnZSAmJiA8UG9zdCAvPn1cbiAgICAgICAgICAgICAgICA8TmF2YmFyQ3VzdG9tLz5cbiAgICAgICAgICAgICAgICA8UHJvamVjdEdyaWQgLz5cbiAgICAgICAgICAgICAgICA8Q2VsbG9CYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgICAgICAgPFZpdGEgLz5cbiAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxuXG5cbiAgICAgICAgICAgICAgICB7PExpc3QgLz59XG4gICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwyMjEsMjA5LDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5yb3csIGNvbC1tZC02LCAuY29sLW1kLTEyIHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cblxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXX0= */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz8yN2I3Il0sIm5hbWVzIjpbIlRoZW1lIiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImNvbnNvbGUiLCJsb2ciLCJpc0FyY2hpdmUiLCJpc1Bvc3QiLCJpc1BhZ2UiLCJjb25uZWN0IiwiTEJWUmVndWxhciIsImNzcyIsIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyIiwiTEJWQm9sZCIsIkxpYnJlQmFza2VydmlsbGVCb2xkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dzJKQWlCQSxHQUFNQSxNQUFLLENBQUcsU0FBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxPQUN6QixHQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUVBLE1BQ0ksc0VBQ0ksMERBQUMsNkNBQUQsTUFDSSxxRkFESixDQUVJLGtFQUFNLElBQUksQ0FBQyxhQUFYLENBQXlCLE9BQU8sQ0FBQyxxQ0FBakMsRUFGSixDQUdJLGtFQUFNLElBQUksQ0FBQyxJQUFYLEVBSEosQ0FJSSxrRUFDQSxHQUFHLENBQUMsWUFESixDQUVBLElBQUksQ0FBQyx1RUFGTCxDQUdBLFNBQVMsQ0FBQyx5RUFIVixDQUlBLFdBQVcsQ0FBQyxXQUpaLEVBSkosQ0FESixDQVlLQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLENBWkwsQ0FhSSxzRUFDS04sSUFBSSxDQUFDTyxTQUFMLEVBQWtCLDBEQUFDLDZDQUFELE1BRHZCLENBRUtQLElBQUksQ0FBQ1EsTUFBTCxFQUFlLDBEQUFDLDZDQUFELE1BRnBCLENBR0tSLElBQUksQ0FBQ1MsTUFBTCxFQUFlLDBEQUFDLDZDQUFELE1BSHBCLENBSUksMERBQUMscURBQUQsTUFKSixDQUtJLDBEQUFDLG9EQUFELE1BTEosQ0FNSSwwREFBQyx3REFBRCxNQU5KLENBT0ksMERBQUMsNkNBQUQsTUFQSixDQVFJLDBEQUFDLGlEQUFELE1BUkosQ0FXSywwREFBQyw2Q0FBRCxNQVhMLENBYkosQ0EyQkksMERBQUMsb0RBQUQsRUFDSSxNQUFNLEtBRFYsRUEzQkosQ0FESixDQWtESCxDQXJERCxDQXVEZUMsdUhBQU8sQ0FBQ1osS0FBRCxDQUF0QixFQUlBLEdBQU1hLFdBQVUsY0FBR0MseURBQUgsaUdBT0RDLGtHQVBDLDh6SUFBaEIsQ0FXQSxHQUFNQyxRQUFPLGNBQUdGLHlEQUFILGlHQU9FRywrRkFQRiwyeklBQWIiLCJmaWxlIjoiLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5cbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnO1xuaW1wb3J0IE5hdmJhckN1c3RvbSBmcm9tICcuL05hdmJhckN1c3RvbSc7XG5pbXBvcnQgTmF2YmFyQ3VzdG9tRHluYW1pYyBmcm9tICcuL05hdmJhckN1c3RvbUR5bmFtaWMnO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gJy4vUHJvamVjdEdyaWQnO1xuaW1wb3J0IFZpdGEgZnJvbSAnLi9WaXRhJztcbmltcG9ydCBDZWxsb0JhY2tncm91bmQgZnJvbSAnLi9DZWxsb0JhY2tncm91bmQnO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9HYWxsZXJ5JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XG5pbXBvcnQgU3ViUGFnZSBmcm9tICcuL1N1YlBhZ2UnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIudHRmJ1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVCb2xkIGZyb20gJy4uL2Fzc2V0cy9mb250cy9MaWJyZUJhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGVCb2xkLnR0ZidcblxuY29uc3QgVGhlbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+QWxtYSBTdG9sdGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGlzIGJsb2cgaXMganVzdCBmb3IgYmVpbmcgYXdlc29tZVwiIC8+XG4gICAgICAgICAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcbiAgICAgICAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcImhlZXRcIil9XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5pc0FyY2hpdmUgJiYgPExpc3QgLz59XG4gICAgICAgICAgICAgICAge2RhdGEuaXNQb3N0ICYmIDxQb3N0IC8+fVxuICAgICAgICAgICAgICAgIHtkYXRhLmlzUGFnZSAmJiA8UG9zdCAvPn1cbiAgICAgICAgICAgICAgICA8TmF2YmFyQ3VzdG9tLz5cbiAgICAgICAgICAgICAgICA8UHJvamVjdEdyaWQgLz5cbiAgICAgICAgICAgICAgICA8Q2VsbG9CYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgICAgICAgPFZpdGEgLz5cbiAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxuXG5cbiAgICAgICAgICAgICAgICB7PExpc3QgLz59XG4gICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwyMjEsMjA5LDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5yb3csIGNvbC1tZC02LCAuY29sLW1kLTEyIHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cblxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/index.js\n");

/***/ })

})