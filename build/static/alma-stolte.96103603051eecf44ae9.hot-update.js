webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/Root.js":
/*!************************************************!*\
  !*** ./packages/alma-stolte-theme/src/Root.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ \"./packages/alma-stolte-theme/src/Link.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List */ \"./packages/alma-stolte-theme/src/List.js\");\n/* harmony import */ var _NavbarCustom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavbarCustom */ \"./packages/alma-stolte-theme/src/NavbarCustom.js\");\n/* harmony import */ var _ProjectGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectGrid */ \"./packages/alma-stolte-theme/src/ProjectGrid.js\");\n/* harmony import */ var _Vita__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Vita */ \"./packages/alma-stolte-theme/src/Vita.js\");\n/* harmony import */ var _CelloBackground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CelloBackground */ \"./packages/alma-stolte-theme/src/CelloBackground.js\");\n/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Gallery */ \"./packages/alma-stolte-theme/src/Gallery.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Contact */ \"./packages/alma-stolte-theme/src/Contact.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Footer */ \"./packages/alma-stolte-theme/src/Footer.js\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_13__);\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var _ref= false?undefined:{name:\"12xji4q-Root\",styles:\"body{background-color:rgba(235,221,209,100);font-family:\\\"LibreBaskervilleRegular\\\";margin:0px;padding:0px;}.row,col-md-6,.col-md-12{margin:0px;padding:0px;}.container{padding:0px;};label:Root;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvUm9vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QzJCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvUm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkLCBCb2R5IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IE5hdmJhckN1c3RvbSBmcm9tICcuL05hdmJhckN1c3RvbSc7XG5pbXBvcnQgUHJvamVjdEdyaWQgZnJvbSAnLi9Qcm9qZWN0R3JpZCc7XG5pbXBvcnQgVml0YSBmcm9tICcuL1ZpdGEnO1xuaW1wb3J0IENlbGxvQmFja2dyb3VuZCBmcm9tICcuL0NlbGxvQmFja2dyb3VuZCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVSZWd1bGFyIGZyb20gJy4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIudHRmJ1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVCb2xkIGZyb20gJy4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5jb25zdCBSb290ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKVxuICAgIGNvbnNvbGUubG9nKFwiU09VUkNFIEJFTE9XXCIpXG4gICAgY29uc29sZS5sb2coc3RhdGUuc291cmNlKVxuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5BbG1hIFN0b2x0ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgYmxvZyBpcyBqdXN0IGZvciBiZWluZyBhd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8TmF2YmFyQ3VzdG9tIC8+XG4gICAgICAgICAgICAgICAgPFByb2plY3RHcmlkIC8+XG4gICAgICAgICAgICAgICAgPENlbGxvQmFja2dyb3VuZCAvPlxuICAgICAgICAgICAgICAgIDxWaXRhIC8+XG4gICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgICAgICB7PExpc3QgLz59XG4gICAgICAgICAgICA8L2JvZHk+XG5cbiAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwyMjEsMjA5LDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAucm93LCBjb2wtbWQtNiwgLmNvbC1tZC0xMiB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUm9vdCk7XG5cblxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var Root=(_ref2)=>{var{state}=_ref2;var data=state.source.get(state.router.link);console.log(\"SOURCE BELOW\");console.log(state.source);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"title\",null,\"Alma Stolte\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"meta\",{name:\"description\",content:\"This blog is just for being awesome\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"html\",{lang:\"en\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\",integrity:\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\",crossorigin:\"anonymous\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"body\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_NavbarCustom__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_ProjectGrid__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_CelloBackground__WEBPACK_IMPORTED_MODULE_8__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_Vita__WEBPACK_IMPORTED_MODULE_7__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_Contact__WEBPACK_IMPORTED_MODULE_10__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_List__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:_ref}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Root));var LBVRegular=/*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_12___default.a,\");};label:LBVRegular;\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvUm9vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRXNCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvUm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkLCBCb2R5IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IE5hdmJhckN1c3RvbSBmcm9tICcuL05hdmJhckN1c3RvbSc7XG5pbXBvcnQgUHJvamVjdEdyaWQgZnJvbSAnLi9Qcm9qZWN0R3JpZCc7XG5pbXBvcnQgVml0YSBmcm9tICcuL1ZpdGEnO1xuaW1wb3J0IENlbGxvQmFja2dyb3VuZCBmcm9tICcuL0NlbGxvQmFja2dyb3VuZCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVSZWd1bGFyIGZyb20gJy4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIudHRmJ1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVCb2xkIGZyb20gJy4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5jb25zdCBSb290ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKVxuICAgIGNvbnNvbGUubG9nKFwiU09VUkNFIEJFTE9XXCIpXG4gICAgY29uc29sZS5sb2coc3RhdGUuc291cmNlKVxuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5BbG1hIFN0b2x0ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgYmxvZyBpcyBqdXN0IGZvciBiZWluZyBhd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8TmF2YmFyQ3VzdG9tIC8+XG4gICAgICAgICAgICAgICAgPFByb2plY3RHcmlkIC8+XG4gICAgICAgICAgICAgICAgPENlbGxvQmFja2dyb3VuZCAvPlxuICAgICAgICAgICAgICAgIDxWaXRhIC8+XG4gICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgICAgICB7PExpc3QgLz59XG4gICAgICAgICAgICA8L2JvZHk+XG5cbiAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwyMjEsMjA5LDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAucm93LCBjb2wtbWQtNiwgLmNvbC1tZC0xMiB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUm9vdCk7XG5cblxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXX0= */\"));var LBVBold=/*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_13___default.a,\");};label:LBVBold;\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvUm9vdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRm1CIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvUm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkLCBCb2R5IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IE5hdmJhckN1c3RvbSBmcm9tICcuL05hdmJhckN1c3RvbSc7XG5pbXBvcnQgUHJvamVjdEdyaWQgZnJvbSAnLi9Qcm9qZWN0R3JpZCc7XG5pbXBvcnQgVml0YSBmcm9tICcuL1ZpdGEnO1xuaW1wb3J0IENlbGxvQmFja2dyb3VuZCBmcm9tICcuL0NlbGxvQmFja2dyb3VuZCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVSZWd1bGFyIGZyb20gJy4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIudHRmJ1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVCb2xkIGZyb20gJy4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5jb25zdCBSb290ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKVxuICAgIGNvbnNvbGUubG9nKFwiU09VUkNFIEJFTE9XXCIpXG4gICAgY29uc29sZS5sb2coc3RhdGUuc291cmNlKVxuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5BbG1hIFN0b2x0ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgYmxvZyBpcyBqdXN0IGZvciBiZWluZyBhd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8TmF2YmFyQ3VzdG9tIC8+XG4gICAgICAgICAgICAgICAgPFByb2plY3RHcmlkIC8+XG4gICAgICAgICAgICAgICAgPENlbGxvQmFja2dyb3VuZCAvPlxuICAgICAgICAgICAgICAgIDxWaXRhIC8+XG4gICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgICAgICB7PExpc3QgLz59XG4gICAgICAgICAgICA8L2JvZHk+XG5cbiAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwyMjEsMjA5LDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAucm93LCBjb2wtbWQtNiwgLmNvbC1tZC0xMiB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUm9vdCk7XG5cblxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXX0= */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvUm9vdC5qcz9lYTYxIl0sIm5hbWVzIjpbIlJvb3QiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJMQlZSZWd1bGFyIiwiY3NzIiwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIiLCJMQlZCb2xkIiwiTGlicmVCYXNrZXJ2aWxsZUJvbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d2dKQWNBLEdBQU1BLEtBQUksQ0FBRyxTQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE9BQ3hCLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFDQUQsT0FBTyxDQUFDQyxHQUFSLENBQVlQLEtBQUssQ0FBQ0UsTUFBbEIsRUFHQSxNQUNJLHNFQUNJLDBEQUFDLDZDQUFELE1BQ0kscUZBREosQ0FFSSxrRUFBTSxJQUFJLENBQUMsYUFBWCxDQUF5QixPQUFPLENBQUMscUNBQWpDLEVBRkosQ0FHSSxrRUFBTSxJQUFJLENBQUMsSUFBWCxFQUhKLENBSUksa0VBQ0EsR0FBRyxDQUFDLFlBREosQ0FFQSxJQUFJLENBQUMsdUVBRkwsQ0FHQSxTQUFTLENBQUMseUVBSFYsQ0FJQSxXQUFXLENBQUMsV0FKWixFQUpKLENBREosQ0FhSSxzRUFDSSwwREFBQyxxREFBRCxNQURKLENBRUksMERBQUMsb0RBQUQsTUFGSixDQUdJLDBEQUFDLHdEQUFELE1BSEosQ0FJSSwwREFBQyw2Q0FBRCxNQUpKLENBS0ksMERBQUMsaURBQUQsTUFMSixDQU1LLDBEQUFDLDZDQUFELE1BTkwsQ0FiSixDQXNCSSwwREFBQyxvREFBRCxFQUNJLE1BQU0sS0FEVixFQXRCSixDQURKLENBNENILENBbERELENBb0RlTSx1SEFBTyxDQUFDVCxJQUFELENBQXRCLEVBSUEsR0FBTVUsV0FBVSxjQUFHQyx5REFBSCxpR0FPREMsa0dBUEMscy9IQUFoQixDQVdBLEdBQU1DLFFBQU8sY0FBR0YseURBQUgsaUdBT0VHLCtGQVBGLG0vSEFBYiIsImZpbGUiOiIuL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9Sb290LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBjc3MsIEhlYWQsIEJvZHkgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgTmF2YmFyQ3VzdG9tIGZyb20gJy4vTmF2YmFyQ3VzdG9tJztcbmltcG9ydCBQcm9qZWN0R3JpZCBmcm9tICcuL1Byb2plY3RHcmlkJztcbmltcG9ydCBWaXRhIGZyb20gJy4vVml0YSc7XG5pbXBvcnQgQ2VsbG9CYWNrZ3JvdW5kIGZyb20gJy4vQ2VsbG9CYWNrZ3JvdW5kJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIgZnJvbSAnLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlUmVndWxhci50dGYnXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZUJvbGQgZnJvbSAnLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlQm9sZC50dGYnXG5cbmNvbnN0IFJvb3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXG4gICAgY29uc29sZS5sb2coXCJTT1VSQ0UgQkVMT1dcIilcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS5zb3VyY2UpXG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkFsbWEgU3RvbHRlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhpcyBibG9nIGlzIGp1c3QgZm9yIGJlaW5nIGF3ZXNvbWVcIiAvPlxuICAgICAgICAgICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXG4gICAgICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgIDxOYXZiYXJDdXN0b20gLz5cbiAgICAgICAgICAgICAgICA8UHJvamVjdEdyaWQgLz5cbiAgICAgICAgICAgICAgICA8Q2VsbG9CYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgICAgICAgPFZpdGEgLz5cbiAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgICAgICAgICAgIHs8TGlzdCAvPn1cbiAgICAgICAgICAgIDwvYm9keT5cblxuICAgICAgICAgICAgPEdsb2JhbFxuICAgICAgICAgICAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDIyMSwyMDksMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJcIjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5yb3csIGNvbC1tZC02LCAuY29sLW1kLTEyIHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChSb290KTtcblxuXG5cbmNvbnN0IExCVlJlZ3VsYXIgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVSZWd1bGFyfSk7XG4gIH1cbmA7XG5cbmNvbnN0IExCVkJvbGQgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVCb2xkfSk7XG4gIH1cbmA7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/Root.js\n");

/***/ })

})