webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/index.js":
/*!************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _LinkFrontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkFrontity */ \"./packages/alma-stolte-theme/src/components/LinkFrontity.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List */ \"./packages/alma-stolte-theme/src/components/List.js\");\n/* harmony import */ var _NavbarCustom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavbarCustom */ \"./packages/alma-stolte-theme/src/components/NavbarCustom.js\");\n/* harmony import */ var _NavbarCustomDynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarCustomDynamic */ \"./packages/alma-stolte-theme/src/components/NavbarCustomDynamic.js\");\n/* harmony import */ var _ProjectGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectGrid */ \"./packages/alma-stolte-theme/src/components/ProjectGrid.js\");\n/* harmony import */ var _Vita__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Vita */ \"./packages/alma-stolte-theme/src/components/Vita.js\");\n/* harmony import */ var _CelloBackground__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CelloBackground */ \"./packages/alma-stolte-theme/src/components/CelloBackground.js\");\n/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Gallery */ \"./packages/alma-stolte-theme/src/components/Gallery.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Contact */ \"./packages/alma-stolte-theme/src/components/Contact.js\");\n/* harmony import */ var _SubPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SubPage */ \"./packages/alma-stolte-theme/src/components/SubPage.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Footer */ \"./packages/alma-stolte-theme/src/components/Footer.js\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_15__);\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var _ref= false?undefined:{name:\"677sv5-Theme\",styles:\"body{background-color:rgba(235,221,209,100);font-family:\\\"LibreBaskervilleRegular\\\";margin:0px;padding:0px;}.row,col-md-6,.col-md-12{margin:0px;padding:0px;}.container{padding:0px;};label:Theme;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRDJCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmtGcm9udGl0eSdcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgTmF2YmFyQ3VzdG9tIGZyb20gJy4vTmF2YmFyQ3VzdG9tJztcbmltcG9ydCBOYXZiYXJDdXN0b21EeW5hbWljIGZyb20gJy4vTmF2YmFyQ3VzdG9tRHluYW1pYyc7XG5pbXBvcnQgUHJvamVjdEdyaWQgZnJvbSAnLi9Qcm9qZWN0R3JpZCc7XG5pbXBvcnQgVml0YSBmcm9tICcuL1ZpdGEnO1xuaW1wb3J0IENlbGxvQmFja2dyb3VuZCBmcm9tICcuL0NlbGxvQmFja2dyb3VuZCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBTdWJQYWdlIGZyb20gJy4vU3ViUGFnZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlUmVndWxhciBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlUmVndWxhci50dGYnXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZUJvbGQgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5BbG1hIFN0b2x0ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgYmxvZyBpcyBqdXN0IGZvciBiZWluZyBhd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAge2NvbnNvbGUubG9nKFwiaGVldFwiKX1cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIHtkYXRhLmlzQXJjaGl2ZSAmJiA8TGlzdCAvPn1cbiAgICAgICAgICAgICAgICB7ZGF0YS5pc1Bvc3QgJiYgPFBvc3QgLz59XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPE5hdmJhckN1c3RvbS8+XG4gICAgICAgICAgICAgICAgPFByb2plY3RHcmlkIC8+XG4gICAgICAgICAgICAgICAgPENlbGxvQmFja2dyb3VuZCAvPlxuICAgICAgICAgICAgICAgIDxWaXRhIC8+XG4gICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cblxuXG4gICAgICAgICAgICAgICAgezxMaXN0IC8+fVxuICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICA8R2xvYmFsXG4gICAgICAgICAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsMjIxLDIwOSwxMDApO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnJvdywgY29sLW1kLTYsIC5jb2wtbWQtMTIge1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRoZW1lKTtcblxuXG5cbmNvbnN0IExCVlJlZ3VsYXIgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVSZWd1bGFyfSk7XG4gIH1cbmA7XG5cbmNvbnN0IExCVkJvbGQgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVCb2xkfSk7XG4gIH1cbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};var Theme=(_ref2)=>{var{state}=_ref2;var data=state.source.get(state.router.link);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"title\",null,\"Alma Stolte\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"meta\",{name:\"description\",content:\"This blog is just for being awesome\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"html\",{lang:\"en\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\",integrity:\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\",crossorigin:\"anonymous\"})),console.log(\"heet\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"main\",null,data.isArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_List__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null),data.isPost&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(Post,null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_NavbarCustom__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_ProjectGrid__WEBPACK_IMPORTED_MODULE_7__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_CelloBackground__WEBPACK_IMPORTED_MODULE_9__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_Vita__WEBPACK_IMPORTED_MODULE_8__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_Contact__WEBPACK_IMPORTED_MODULE_11__[\"default\"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_List__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:_ref}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Theme));var LBVRegular=/*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_14___default.a,\");};label:LBVRegular;\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRXNCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmtGcm9udGl0eSdcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgTmF2YmFyQ3VzdG9tIGZyb20gJy4vTmF2YmFyQ3VzdG9tJztcbmltcG9ydCBOYXZiYXJDdXN0b21EeW5hbWljIGZyb20gJy4vTmF2YmFyQ3VzdG9tRHluYW1pYyc7XG5pbXBvcnQgUHJvamVjdEdyaWQgZnJvbSAnLi9Qcm9qZWN0R3JpZCc7XG5pbXBvcnQgVml0YSBmcm9tICcuL1ZpdGEnO1xuaW1wb3J0IENlbGxvQmFja2dyb3VuZCBmcm9tICcuL0NlbGxvQmFja2dyb3VuZCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBTdWJQYWdlIGZyb20gJy4vU3ViUGFnZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlUmVndWxhciBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlUmVndWxhci50dGYnXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZUJvbGQgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5BbG1hIFN0b2x0ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgYmxvZyBpcyBqdXN0IGZvciBiZWluZyBhd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAge2NvbnNvbGUubG9nKFwiaGVldFwiKX1cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIHtkYXRhLmlzQXJjaGl2ZSAmJiA8TGlzdCAvPn1cbiAgICAgICAgICAgICAgICB7ZGF0YS5pc1Bvc3QgJiYgPFBvc3QgLz59XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPE5hdmJhckN1c3RvbS8+XG4gICAgICAgICAgICAgICAgPFByb2plY3RHcmlkIC8+XG4gICAgICAgICAgICAgICAgPENlbGxvQmFja2dyb3VuZCAvPlxuICAgICAgICAgICAgICAgIDxWaXRhIC8+XG4gICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cblxuXG4gICAgICAgICAgICAgICAgezxMaXN0IC8+fVxuICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICA8R2xvYmFsXG4gICAgICAgICAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsMjIxLDIwOSwxMDApO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnJvdywgY29sLW1kLTYsIC5jb2wtbWQtMTIge1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRoZW1lKTtcblxuXG5cbmNvbnN0IExCVlJlZ3VsYXIgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVSZWd1bGFyfSk7XG4gIH1cbmA7XG5cbmNvbnN0IExCVkJvbGQgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVCb2xkfSk7XG4gIH1cbmA7XG5cbiJdfQ== */\"));var LBVBold=/*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_15___default.a,\");};label:LBVBold;\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRm1CIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmtGcm9udGl0eSdcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgTmF2YmFyQ3VzdG9tIGZyb20gJy4vTmF2YmFyQ3VzdG9tJztcbmltcG9ydCBOYXZiYXJDdXN0b21EeW5hbWljIGZyb20gJy4vTmF2YmFyQ3VzdG9tRHluYW1pYyc7XG5pbXBvcnQgUHJvamVjdEdyaWQgZnJvbSAnLi9Qcm9qZWN0R3JpZCc7XG5pbXBvcnQgVml0YSBmcm9tICcuL1ZpdGEnO1xuaW1wb3J0IENlbGxvQmFja2dyb3VuZCBmcm9tICcuL0NlbGxvQmFja2dyb3VuZCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBTdWJQYWdlIGZyb20gJy4vU3ViUGFnZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlUmVndWxhciBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlUmVndWxhci50dGYnXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZUJvbGQgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5BbG1hIFN0b2x0ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgYmxvZyBpcyBqdXN0IGZvciBiZWluZyBhd2Vzb21lXCIgLz5cbiAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAge2NvbnNvbGUubG9nKFwiaGVldFwiKX1cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIHtkYXRhLmlzQXJjaGl2ZSAmJiA8TGlzdCAvPn1cbiAgICAgICAgICAgICAgICB7ZGF0YS5pc1Bvc3QgJiYgPFBvc3QgLz59XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPE5hdmJhckN1c3RvbS8+XG4gICAgICAgICAgICAgICAgPFByb2plY3RHcmlkIC8+XG4gICAgICAgICAgICAgICAgPENlbGxvQmFja2dyb3VuZCAvPlxuICAgICAgICAgICAgICAgIDxWaXRhIC8+XG4gICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cblxuXG4gICAgICAgICAgICAgICAgezxMaXN0IC8+fVxuICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICA8R2xvYmFsXG4gICAgICAgICAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsMjIxLDIwOSwxMDApO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLnJvdywgY29sLW1kLTYsIC5jb2wtbWQtMTIge1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRoZW1lKTtcblxuXG5cbmNvbnN0IExCVlJlZ3VsYXIgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVSZWd1bGFyfSk7XG4gIH1cbmA7XG5cbmNvbnN0IExCVkJvbGQgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVCb2xkfSk7XG4gIH1cbmA7XG5cbiJdfQ== */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz8yN2I3Il0sIm5hbWVzIjpbIlRoZW1lIiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImNvbnNvbGUiLCJsb2ciLCJpc0FyY2hpdmUiLCJpc1Bvc3QiLCJjb25uZWN0IiwiTEJWUmVndWxhciIsImNzcyIsIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyIiwiTEJWQm9sZCIsIkxpYnJlQmFza2VydmlsbGVCb2xkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eXZKQWdCQSxHQUFNQSxNQUFLLENBQUcsU0FBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxPQUN6QixHQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUVBLE1BQ0ksc0VBQ0ksMERBQUMsNkNBQUQsTUFDSSxxRkFESixDQUVJLGtFQUFNLElBQUksQ0FBQyxhQUFYLENBQXlCLE9BQU8sQ0FBQyxxQ0FBakMsRUFGSixDQUdJLGtFQUFNLElBQUksQ0FBQyxJQUFYLEVBSEosQ0FJSSxrRUFDQSxHQUFHLENBQUMsWUFESixDQUVBLElBQUksQ0FBQyx1RUFGTCxDQUdBLFNBQVMsQ0FBQyx5RUFIVixDQUlBLFdBQVcsQ0FBQyxXQUpaLEVBSkosQ0FESixDQVlLQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLENBWkwsQ0FhSSxzRUFDS04sSUFBSSxDQUFDTyxTQUFMLEVBQWtCLDBEQUFDLDZDQUFELE1BRHZCLENBRUtQLElBQUksQ0FBQ1EsTUFBTCxFQUFlLDBEQUFDLElBQUQsTUFGcEIsQ0FJSSwwREFBQyxxREFBRCxNQUpKLENBS0ksMERBQUMsb0RBQUQsTUFMSixDQU1JLDBEQUFDLHdEQUFELE1BTkosQ0FPSSwwREFBQyw2Q0FBRCxNQVBKLENBUUksMERBQUMsaURBQUQsTUFSSixDQVdLLDBEQUFDLDZDQUFELE1BWEwsQ0FiSixDQTJCSSwwREFBQyxvREFBRCxFQUNJLE1BQU0sS0FEVixFQTNCSixDQURKLENBaURILENBcERELENBc0RlQyx1SEFBTyxDQUFDWCxLQUFELENBQXRCLEVBSUEsR0FBTVksV0FBVSxjQUFHQyx5REFBSCxpR0FPREMsa0dBUEMsc3VJQUFoQixDQVdBLEdBQU1DLFFBQU8sY0FBR0YseURBQUgsaUdBT0VHLCtGQVBGLG11SUFBYiIsImZpbGUiOiIuL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBjc3MsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gJy4vTGlua0Zyb250aXR5J1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmltcG9ydCBOYXZiYXJDdXN0b20gZnJvbSAnLi9OYXZiYXJDdXN0b20nO1xuaW1wb3J0IE5hdmJhckN1c3RvbUR5bmFtaWMgZnJvbSAnLi9OYXZiYXJDdXN0b21EeW5hbWljJztcbmltcG9ydCBQcm9qZWN0R3JpZCBmcm9tICcuL1Byb2plY3RHcmlkJztcbmltcG9ydCBWaXRhIGZyb20gJy4vVml0YSc7XG5pbXBvcnQgQ2VsbG9CYWNrZ3JvdW5kIGZyb20gJy4vQ2VsbG9CYWNrZ3JvdW5kJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IFN1YlBhZ2UgZnJvbSAnLi9TdWJQYWdlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVSZWd1bGFyIGZyb20gJy4uL2Fzc2V0cy9mb250cy9MaWJyZUJhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGVSZWd1bGFyLnR0ZidcbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlQm9sZCBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlQm9sZC50dGYnXG5cbmNvbnN0IFRoZW1lID0gKHsgc3RhdGUgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkFsbWEgU3RvbHRlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhpcyBibG9nIGlzIGp1c3QgZm9yIGJlaW5nIGF3ZXNvbWVcIiAvPlxuICAgICAgICAgICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXG4gICAgICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICB7Y29uc29sZS5sb2coXCJoZWV0XCIpfVxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAge2RhdGEuaXNBcmNoaXZlICYmIDxMaXN0IC8+fVxuICAgICAgICAgICAgICAgIHtkYXRhLmlzUG9zdCAmJiA8UG9zdCAvPn1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TmF2YmFyQ3VzdG9tLz5cbiAgICAgICAgICAgICAgICA8UHJvamVjdEdyaWQgLz5cbiAgICAgICAgICAgICAgICA8Q2VsbG9CYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgICAgICAgPFZpdGEgLz5cbiAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxuXG5cbiAgICAgICAgICAgICAgICB7PExpc3QgLz59XG4gICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwyMjEsMjA5LDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAucm93LCBjb2wtbWQtNiwgLmNvbC1tZC0xMiB7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuXG5cblxuY29uc3QgTEJWUmVndWxhciA9IGNzc2BcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIC8qIFVzZSBpdCBpbnNpZGUgdGhlIENTUyAqL1xuICAgIHNyYzogdXJsKCR7TGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJ9KTtcbiAgfVxuYDtcblxuY29uc3QgTEJWQm9sZCA9IGNzc2BcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIC8qIFVzZSBpdCBpbnNpZGUgdGhlIENTUyAqL1xuICAgIHNyYzogdXJsKCR7TGlicmVCYXNrZXJ2aWxsZUJvbGR9KTtcbiAgfVxuYDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/index.js\n");

/***/ })

})