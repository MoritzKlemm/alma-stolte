webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/index.js":
/*!************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _Calender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Calender */ \"./packages/alma-stolte-theme/src/components/Calender.js\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf\");\n/* harmony import */ var _LinkFrontity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinkFrontity */ \"./packages/alma-stolte-theme/src/components/LinkFrontity.js\");\n/* harmony import */ var _NavbarCustom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavbarCustom */ \"./packages/alma-stolte-theme/src/components/NavbarCustom.js\");\n/* harmony import */ var _ProjectGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProjectGrid */ \"./packages/alma-stolte-theme/src/components/ProjectGrid.js\");\n/* harmony import */ var _ProjectPreview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProjectPreview */ \"./packages/alma-stolte-theme/src/components/ProjectPreview.js\");\n/* harmony import */ var _Vita__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Vita */ \"./packages/alma-stolte-theme/src/components/Vita.js\");\n/* harmony import */ var _CelloBackground__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CelloBackground */ \"./packages/alma-stolte-theme/src/components/CelloBackground.js\");\n/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Gallery */ \"./packages/alma-stolte-theme/src/components/Gallery.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Contact */ \"./packages/alma-stolte-theme/src/components/Contact.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Footer */ \"./packages/alma-stolte-theme/src/components/Footer.js\");\n/* harmony import */ var _FooterImpressum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FooterImpressum */ \"./packages/alma-stolte-theme/src/components/FooterImpressum.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nav */ \"./packages/alma-stolte-theme/src/components/nav.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Theme=({state})=>{const data=state.source.get(state.router.link);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(\"title\",{children:\"Alma Stolte\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(\"meta\",{name:\"description\",content:\"This blog is just for being awesome\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(\"html\",{lang:\"en\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\",integrity:\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\",crossorigin:\"anonymous\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Global\"],{styles:globalStyles}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_nav__WEBPACK_IMPORTED_MODULE_16__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsxs\"])(\"p\",{children:[\"current url: \",state.router.link]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsxs\"])(\"main\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsxs\"])(\"switch\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(List,{when:data.isArchive}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(Post,{when:data.isPostType}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(PageError,{when:data.isError})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_Footer__WEBPACK_IMPORTED_MODULE_14__[\"default\"],{})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Theme));const globalStyles= false?undefined:{name:\"582ahh-globalStyles\",styles:\"body{background-color:rgba(235,221,209,100);font-family:\\\"LibreBaskervilleRegular\\\";scroll-behavior:smooth;margin:0px;padding:0px;}.row,col-md-6,.col-md-12{margin:0px;padding:0px;}.container{padding:0px;};label:globalStyles;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RHdCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBDYWxlbmRlciBmcm9tICcuL0NhbGVuZGVyJ1xuXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIudHRmJ1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVCb2xkIGZyb20gJy4uL2Fzc2V0cy9mb250cy9MaWJyZUJhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGVCb2xkLnR0ZidcbmltcG9ydCBMaW5rRnJvbnRpdHkgZnJvbSBcIi4vTGlua0Zyb250aXR5XCI7XG5cbmltcG9ydCBOYXZiYXJDdXN0b20gZnJvbSAnLi9OYXZiYXJDdXN0b20nO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gJy4vUHJvamVjdEdyaWQnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0UHJldmlldyc7XG5pbXBvcnQgVml0YSBmcm9tICcuL1ZpdGEnO1xuaW1wb3J0IENlbGxvQmFja2dyb3VuZCBmcm9tICcuL0NlbGxvQmFja2dyb3VuZCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IEZvb3RlckltcHJlc3N1bSBmcm9tIFwiLi9Gb290ZXJJbXByZXNzdW1cIjtcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnXG5cblxuY29uc3QgVGhlbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFsbWEgU3RvbHRlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgYmxvZyBpcyBqdXN0IGZvciBiZWluZyBhd2Vzb21lXCIgLz5cbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFN0eWxlc30gLz5cblxuICAgICAgPE5hdiAvPlxuICAgICAgPHA+Y3VycmVudCB1cmw6IHtzdGF0ZS5yb3V0ZXIubGlua308L3A+XG5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxzd2l0Y2g+XG4gICAgICAgICAgPExpc3Qgd2hlbj17ZGF0YS5pc0FyY2hpdmV9IC8+XG4gICAgICAgICAgPFBvc3Qgd2hlbj17ZGF0YS5pc1Bvc3RUeXBlfSAvPlxuICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICA8L3N3aXRjaD5cblxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvbWFpbj5cblxuXG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuXG5jb25zdCBnbG9iYWxTdHlsZXMgPSBjc3NgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDIyMSwyMDksMTAwKTtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7IFxuICB9XG4gIC5yb3csIGNvbC1tZC02LCAuY29sLW1kLTEyIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4OyBcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDBweDsgXG4gIH1cbmBcblxuY29uc3QgTEJWUmVndWxhciA9IGNzc2BcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIC8qIFVzZSBpdCBpbnNpZGUgdGhlIENTUyAqL1xuICAgIHNyYzogdXJsKCR7TGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJ9KTtcbiAgfVxuYDtcblxuY29uc3QgTEJWQm9sZCA9IGNzc2BcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIC8qIFVzZSBpdCBpbnNpZGUgdGhlIENTUyAqL1xuICAgIHNyYzogdXJsKCR7TGlicmVCYXNrZXJ2aWxsZUJvbGR9KTtcbiAgfVxuYDtcblxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};const LBVRegular=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\");}\"+( false?undefined:\";label:LBVRegular;\"), false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRXNCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBDYWxlbmRlciBmcm9tICcuL0NhbGVuZGVyJ1xuXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIudHRmJ1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVCb2xkIGZyb20gJy4uL2Fzc2V0cy9mb250cy9MaWJyZUJhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGVCb2xkLnR0ZidcbmltcG9ydCBMaW5rRnJvbnRpdHkgZnJvbSBcIi4vTGlua0Zyb250aXR5XCI7XG5cbmltcG9ydCBOYXZiYXJDdXN0b20gZnJvbSAnLi9OYXZiYXJDdXN0b20nO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gJy4vUHJvamVjdEdyaWQnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0UHJldmlldyc7XG5pbXBvcnQgVml0YSBmcm9tICcuL1ZpdGEnO1xuaW1wb3J0IENlbGxvQmFja2dyb3VuZCBmcm9tICcuL0NlbGxvQmFja2dyb3VuZCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IEZvb3RlckltcHJlc3N1bSBmcm9tIFwiLi9Gb290ZXJJbXByZXNzdW1cIjtcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnXG5cblxuY29uc3QgVGhlbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFsbWEgU3RvbHRlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgYmxvZyBpcyBqdXN0IGZvciBiZWluZyBhd2Vzb21lXCIgLz5cbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFN0eWxlc30gLz5cblxuICAgICAgPE5hdiAvPlxuICAgICAgPHA+Y3VycmVudCB1cmw6IHtzdGF0ZS5yb3V0ZXIubGlua308L3A+XG5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxzd2l0Y2g+XG4gICAgICAgICAgPExpc3Qgd2hlbj17ZGF0YS5pc0FyY2hpdmV9IC8+XG4gICAgICAgICAgPFBvc3Qgd2hlbj17ZGF0YS5pc1Bvc3RUeXBlfSAvPlxuICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICA8L3N3aXRjaD5cblxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvbWFpbj5cblxuXG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuXG5jb25zdCBnbG9iYWxTdHlsZXMgPSBjc3NgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDIyMSwyMDksMTAwKTtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7IFxuICB9XG4gIC5yb3csIGNvbC1tZC02LCAuY29sLW1kLTEyIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4OyBcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDBweDsgXG4gIH1cbmBcblxuY29uc3QgTEJWUmVndWxhciA9IGNzc2BcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIC8qIFVzZSBpdCBpbnNpZGUgdGhlIENTUyAqL1xuICAgIHNyYzogdXJsKCR7TGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJ9KTtcbiAgfVxuYDtcblxuY29uc3QgTEJWQm9sZCA9IGNzc2BcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIC8qIFVzZSBpdCBpbnNpZGUgdGhlIENTUyAqL1xuICAgIHNyYzogdXJsKCR7TGlicmVCYXNrZXJ2aWxsZUJvbGR9KTtcbiAgfVxuYDtcblxuIl19 */\");const LBVBold=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\");}\"+( false?undefined:\";label:LBVBold;\"), false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRm1CIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBDYWxlbmRlciBmcm9tICcuL0NhbGVuZGVyJ1xuXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIudHRmJ1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVCb2xkIGZyb20gJy4uL2Fzc2V0cy9mb250cy9MaWJyZUJhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGVCb2xkLnR0ZidcbmltcG9ydCBMaW5rRnJvbnRpdHkgZnJvbSBcIi4vTGlua0Zyb250aXR5XCI7XG5cbmltcG9ydCBOYXZiYXJDdXN0b20gZnJvbSAnLi9OYXZiYXJDdXN0b20nO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gJy4vUHJvamVjdEdyaWQnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0UHJldmlldyc7XG5pbXBvcnQgVml0YSBmcm9tICcuL1ZpdGEnO1xuaW1wb3J0IENlbGxvQmFja2dyb3VuZCBmcm9tICcuL0NlbGxvQmFja2dyb3VuZCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IEZvb3RlckltcHJlc3N1bSBmcm9tIFwiLi9Gb290ZXJJbXByZXNzdW1cIjtcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnXG5cblxuY29uc3QgVGhlbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFsbWEgU3RvbHRlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgYmxvZyBpcyBqdXN0IGZvciBiZWluZyBhd2Vzb21lXCIgLz5cbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFN0eWxlc30gLz5cblxuICAgICAgPE5hdiAvPlxuICAgICAgPHA+Y3VycmVudCB1cmw6IHtzdGF0ZS5yb3V0ZXIubGlua308L3A+XG5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxzd2l0Y2g+XG4gICAgICAgICAgPExpc3Qgd2hlbj17ZGF0YS5pc0FyY2hpdmV9IC8+XG4gICAgICAgICAgPFBvc3Qgd2hlbj17ZGF0YS5pc1Bvc3RUeXBlfSAvPlxuICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPlxuICAgICAgICA8L3N3aXRjaD5cblxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvbWFpbj5cblxuXG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuXG5jb25zdCBnbG9iYWxTdHlsZXMgPSBjc3NgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDIyMSwyMDksMTAwKTtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7IFxuICB9XG4gIC5yb3csIGNvbC1tZC02LCAuY29sLW1kLTEyIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4OyBcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDBweDsgXG4gIH1cbmBcblxuY29uc3QgTEJWUmVndWxhciA9IGNzc2BcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIC8qIFVzZSBpdCBpbnNpZGUgdGhlIENTUyAqL1xuICAgIHNyYzogdXJsKCR7TGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJ9KTtcbiAgfVxuYDtcblxuY29uc3QgTEJWQm9sZCA9IGNzc2BcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIC8qIFVzZSBpdCBpbnNpZGUgdGhlIENTUyAqL1xuICAgIHNyYzogdXJsKCR7TGlicmVCYXNrZXJ2aWxsZUJvbGR9KTtcbiAgfVxuYDtcblxuIl19 */\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz8yN2I3Il0sIm5hbWVzIjpbIlRoZW1lIiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImdsb2JhbFN0eWxlcyIsImlzQXJjaGl2ZSIsImlzUG9zdFR5cGUiLCJpc0Vycm9yIiwiY29ubmVjdCIsIkxCVlJlZ3VsYXIiLCJjc3MiLCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhciIsIkxCVkJvbGQiLCJMaWJyZUJhc2tlcnZpbGxlQm9sZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FSQXFCQSxLQUFNQSxNQUFLLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUMzQixLQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUVBLE1BQ0UsMkZBQ0UseUVBQUMsNkNBQUQsWUFDRSx5R0FERixDQUVFLGdGQUFNLElBQUksQ0FBQyxhQUFYLENBQXlCLE9BQU8sQ0FBQyxxQ0FBakMsRUFGRixDQUdFLGdGQUFNLElBQUksQ0FBQyxJQUFYLEVBSEYsQ0FJRSxnRkFDRSxHQUFHLENBQUMsWUFETixDQUVFLElBQUksQ0FBQyx1RUFGUCxDQUdFLFNBQVMsQ0FBQyx5RUFIWixDQUlFLFdBQVcsQ0FBQyxXQUpkLEVBSkYsR0FERixDQVlFLHdFQUFDLCtDQUFELEVBQVEsTUFBTSxDQUFFQyxZQUFoQixFQVpGLENBY0Usd0VBQUMsNkNBQUQsSUFkRixDQWVFLHdHQUFpQk4sS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLEdBZkYsQ0FrQkUsMkZBQ0UsNkZBQ0Usd0VBQUMsSUFBRCxFQUFNLElBQUksQ0FBRUosSUFBSSxDQUFDTSxTQUFqQixFQURGLENBRUUsd0VBQUMsSUFBRCxFQUFNLElBQUksQ0FBRU4sSUFBSSxDQUFDTyxVQUFqQixFQUZGLENBR0Usd0VBQUMsU0FBRCxFQUFXLElBQUksQ0FBRVAsSUFBSSxDQUFDUSxPQUF0QixFQUhGLEdBREYsQ0FRRSx3RUFBQyxnREFBRCxJQVJGLEdBbEJGLEdBREYsQ0FrQ0QsQ0FyQ0QsQ0F1Q2VDLHVIQUFPLENBQUNYLEtBQUQsQ0FBdEIsRUFFQSxLQUFNTyxhQUFZLGdwSUFBbEIsQ0FpQkEsS0FBTUssV0FBVSxjQUFHQyxvREFBSCxpR0FPREMsa0dBUEMsMDRIQUFoQixDQVdBLEtBQU1DLFFBQU8sY0FBR0Ysb0RBQUgsaUdBT0VHLCtGQVBGLHU0SEFBYiIsImZpbGUiOiIuL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBjc3MsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IENhbGVuZGVyIGZyb20gJy4vQ2FsZW5kZXInXG5cbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlUmVndWxhciBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlUmVndWxhci50dGYnXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZUJvbGQgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuaW1wb3J0IExpbmtGcm9udGl0eSBmcm9tIFwiLi9MaW5rRnJvbnRpdHlcIjtcblxuaW1wb3J0IE5hdmJhckN1c3RvbSBmcm9tICcuL05hdmJhckN1c3RvbSc7XG5pbXBvcnQgUHJvamVjdEdyaWQgZnJvbSAnLi9Qcm9qZWN0R3JpZCc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3RQcmV2aWV3JztcbmltcG9ydCBWaXRhIGZyb20gJy4vVml0YSc7XG5pbXBvcnQgQ2VsbG9CYWNrZ3JvdW5kIGZyb20gJy4vQ2VsbG9CYWNrZ3JvdW5kJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgRm9vdGVySW1wcmVzc3VtIGZyb20gXCIuL0Zvb3RlckltcHJlc3N1bVwiO1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdidcblxuXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWxtYSBTdG9sdGU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVGhpcyBibG9nIGlzIGp1c3QgZm9yIGJlaW5nIGF3ZXNvbWVcIiAvPlxuICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsU3R5bGVzfSAvPlxuXG4gICAgICA8TmF2IC8+XG4gICAgICA8cD5jdXJyZW50IHVybDoge3N0YXRlLnJvdXRlci5saW5rfTwvcD5cblxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPHN3aXRjaD5cbiAgICAgICAgICA8TGlzdCB3aGVuPXtkYXRhLmlzQXJjaGl2ZX0gLz5cbiAgICAgICAgICA8UG9zdCB3aGVuPXtkYXRhLmlzUG9zdFR5cGV9IC8+XG4gICAgICAgICAgPFBhZ2VFcnJvciB3aGVuPXtkYXRhLmlzRXJyb3J9IC8+XG4gICAgICAgIDwvc3dpdGNoPlxuXG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9tYWluPlxuXG5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsMjIxLDIwOSwxMDApO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IFxuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDsgXG4gIH1cbiAgLnJvdywgY29sLW1kLTYsIC5jb2wtbWQtMTIge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7IFxuICB9XG4gIC5jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMHB4OyBcbiAgfVxuYFxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/index.js\n");

/***/ })

})