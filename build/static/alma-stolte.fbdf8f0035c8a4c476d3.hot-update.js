webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/index.js":
/*!************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading */ \"./packages/alma-stolte-theme/src/components/loading.js\");\n/* harmony import */ var _PageError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageError */ \"./packages/alma-stolte-theme/src/components/PageError.js\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf\");\n/* harmony import */ var _HomeContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HomeContainer */ \"./packages/alma-stolte-theme/src/components/HomeContainer.js\");\n/* harmony import */ var _NavbarCustom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavbarCustom */ \"./packages/alma-stolte-theme/src/components/NavbarCustom.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ \"./packages/alma-stolte-theme/src/components/Footer.js\");\n/* harmony import */ var _VitaPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VitaPage */ \"./packages/alma-stolte-theme/src/components/VitaPage.js\");\n/* harmony import */ var _CalenderPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CalenderPage */ \"./packages/alma-stolte-theme/src/components/CalenderPage.js\");\n/* harmony import */ var _ContactPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ContactPage */ \"./packages/alma-stolte-theme/src/components/ContactPage.js\");\n/* harmony import */ var _ProjectGrid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ProjectGrid */ \"./packages/alma-stolte-theme/src/components/ProjectGrid.js\");\n/* harmony import */ var _ProjectPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ProjectPage */ \"./packages/alma-stolte-theme/src/components/ProjectPage.js\");\n/* harmony import */ var _MediaPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MediaPage */ \"./packages/alma-stolte-theme/src/components/MediaPage.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var _ImpressumPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ImpressumPage */ \"./packages/alma-stolte-theme/src/components/ImpressumPage.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Theme=({state})=>{const data=state.source.get(state.router.link);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(\"title\",{children:\"Alma Stolte\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(\"meta\",{name:\"description\",content:\"Historisches und Modernes Violoncello\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(\"html\",{lang:\"en\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(\"meta\",{name:\"viewport\",content:\"width=device-width, initial-scale=1.0\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\",integrity:\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\",crossorigin:\"anonymous\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://fonts.googleapis.com/icon?family=Material+Icons\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(\"script\",{type:\"text/javascript\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Global\"],{styles:globalStyles}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsxs\"])(\"main\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_NavbarCustom__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{when:data.isFetching}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_HomeContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{when:data.isHome}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_17__[\"default\"],{when:data.isPost}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_CalenderPage__WEBPACK_IMPORTED_MODULE_12__[\"default\"],{when:data.isPage&&state.router.link==\"/kalender/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_ProjectPage__WEBPACK_IMPORTED_MODULE_15__[\"default\"],{when:data.isPage&&state.router.link==\"/projekte/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_MediaPage__WEBPACK_IMPORTED_MODULE_16__[\"default\"],{when:data.isPage&&state.router.link==\"/media/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_VitaPage__WEBPACK_IMPORTED_MODULE_11__[\"default\"],{when:data.isPage&&state.router.link==\"/vita/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_ContactPage__WEBPACK_IMPORTED_MODULE_13__[\"default\"],{when:data.isPage&&state.router.link==\"/kontakt/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_ImpressumPage__WEBPACK_IMPORTED_MODULE_18__[\"default\"],{when:data.isPage&&state.router.link==\"/impressum/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_PageError__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{when:data.isError})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__[\"jsx\"])(_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Theme));const globalStyles= false?undefined:{name:\"1epf7ec-globalStyles\",styles:\"body{background:linear-gradient(359deg, #ebddd1, #b79f8a);font-family:\\\"LibreBaskervilleRegular\\\";scroll-behavior:smooth;margin:0px;padding:0px;};label:globalStyles;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRXdCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZydcbmltcG9ydCBQYWdlRXJyb3IgZnJvbSAnLi9QYWdlRXJyb3InXG5cbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlUmVndWxhciBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlUmVndWxhci50dGYnXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZUJvbGQgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5pbXBvcnQgSG9tZUNvbnRhaW5lciBmcm9tICcuL0hvbWVDb250YWluZXInO1xuaW1wb3J0IE5hdmJhckN1c3RvbSBmcm9tICcuL05hdmJhckN1c3RvbSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBWaXRhUGFnZSBmcm9tIFwiLi9WaXRhUGFnZVwiO1xuaW1wb3J0IENhbGVuZGVyUGFnZSBmcm9tIFwiLi9DYWxlbmRlclBhZ2VcIjtcbmltcG9ydCBDb250YWN0UGFnZSBmcm9tIFwiLi9Db250YWN0UGFnZVwiO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gXCIuL1Byb2plY3RHcmlkXCI7XG5pbXBvcnQgUHJvamVjdFBhZ2UgZnJvbSBcIi4vUHJvamVjdFBhZ2VcIjtcbmltcG9ydCBNZWRpYVBhZ2UgZnJvbSBcIi4vTWVkaWFQYWdlXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgSW1wcmVzc3VtUGFnZSBmcm9tIFwiLi9JbXByZXNzdW1QYWdlXCI7XG5cblxuY29uc3QgVGhlbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFsbWEgU3RvbHRlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhpc3RvcmlzY2hlcyB1bmQgTW9kZXJuZXMgVmlvbG9uY2VsbG9cIi8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz4gICAgICAgICAgICAgICAgXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz4gXG5cbiAgICAgICAgey8qKiBkZWZhdWx0IG1hdGVyaWFsIHVpIGZvbnQgKi99XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCIgLz5cbiAgICAgICAgXG4gICAgICAgIHsvKiogZGVmYXVsdCBtYXRlcmlhbCB1aSBpY29ucyAqL31cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgLz5cblxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8TmF2YmFyQ3VzdG9tIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPExvYWRpbmcgd2hlbj17ZGF0YS5pc0ZldGNoaW5nfSAvPlxuICAgICAgICAgIDxIb21lQ29udGFpbmVyIHdoZW49e2RhdGEuaXNIb21lfSAvPlxuICAgICAgICAgIDxQcm9qZWN0IHdoZW49e2RhdGEuaXNQb3N0fS8+XG4gICAgICAgICAgPENhbGVuZGVyUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9rYWxlbmRlci9cIn0gLz5cbiAgICAgICAgICA8UHJvamVjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvcHJvamVrdGUvXCJ9IC8+XG4gICAgICAgICAgPE1lZGlhUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9tZWRpYS9cIn0gLz5cbiAgICAgICAgICA8Vml0YVBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvdml0YS9cIn0gLz5cbiAgICAgICAgICA8Q29udGFjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIva29udGFrdC9cIn0gLz5cbiAgICAgICAgICA8SW1wcmVzc3VtUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9pbXByZXNzdW0vXCJ9IC8+XG4gICAgICAgICAgPFBhZ2VFcnJvciB3aGVuPXtkYXRhLmlzRXJyb3J9IC8+IFxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRoZW1lKTtcblxuXG5jb25zdCBnbG9iYWxTdHlsZXMgPSBjc3NgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNTlkZWcsICNlYmRkZDEsICNiNzlmOGEpO1xuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSA0MDAlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDIyMSwyMDksMTAwKTtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7IFxuICB9XG5gXG5cbmNvbnN0IExCVlJlZ3VsYXIgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVSZWd1bGFyfSk7XG4gIH1cbmA7XG5cbmNvbnN0IExCVkJvbGQgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVCb2xkfSk7XG4gIH1cbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};const LBVRegular=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\");}\"+( false?undefined:\";label:LBVRegular;\"), false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRnNCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZydcbmltcG9ydCBQYWdlRXJyb3IgZnJvbSAnLi9QYWdlRXJyb3InXG5cbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlUmVndWxhciBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlUmVndWxhci50dGYnXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZUJvbGQgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5pbXBvcnQgSG9tZUNvbnRhaW5lciBmcm9tICcuL0hvbWVDb250YWluZXInO1xuaW1wb3J0IE5hdmJhckN1c3RvbSBmcm9tICcuL05hdmJhckN1c3RvbSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBWaXRhUGFnZSBmcm9tIFwiLi9WaXRhUGFnZVwiO1xuaW1wb3J0IENhbGVuZGVyUGFnZSBmcm9tIFwiLi9DYWxlbmRlclBhZ2VcIjtcbmltcG9ydCBDb250YWN0UGFnZSBmcm9tIFwiLi9Db250YWN0UGFnZVwiO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gXCIuL1Byb2plY3RHcmlkXCI7XG5pbXBvcnQgUHJvamVjdFBhZ2UgZnJvbSBcIi4vUHJvamVjdFBhZ2VcIjtcbmltcG9ydCBNZWRpYVBhZ2UgZnJvbSBcIi4vTWVkaWFQYWdlXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgSW1wcmVzc3VtUGFnZSBmcm9tIFwiLi9JbXByZXNzdW1QYWdlXCI7XG5cblxuY29uc3QgVGhlbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFsbWEgU3RvbHRlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhpc3RvcmlzY2hlcyB1bmQgTW9kZXJuZXMgVmlvbG9uY2VsbG9cIi8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz4gICAgICAgICAgICAgICAgXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz4gXG5cbiAgICAgICAgey8qKiBkZWZhdWx0IG1hdGVyaWFsIHVpIGZvbnQgKi99XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCIgLz5cbiAgICAgICAgXG4gICAgICAgIHsvKiogZGVmYXVsdCBtYXRlcmlhbCB1aSBpY29ucyAqL31cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgLz5cblxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8TmF2YmFyQ3VzdG9tIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPExvYWRpbmcgd2hlbj17ZGF0YS5pc0ZldGNoaW5nfSAvPlxuICAgICAgICAgIDxIb21lQ29udGFpbmVyIHdoZW49e2RhdGEuaXNIb21lfSAvPlxuICAgICAgICAgIDxQcm9qZWN0IHdoZW49e2RhdGEuaXNQb3N0fS8+XG4gICAgICAgICAgPENhbGVuZGVyUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9rYWxlbmRlci9cIn0gLz5cbiAgICAgICAgICA8UHJvamVjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvcHJvamVrdGUvXCJ9IC8+XG4gICAgICAgICAgPE1lZGlhUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9tZWRpYS9cIn0gLz5cbiAgICAgICAgICA8Vml0YVBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvdml0YS9cIn0gLz5cbiAgICAgICAgICA8Q29udGFjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIva29udGFrdC9cIn0gLz5cbiAgICAgICAgICA8SW1wcmVzc3VtUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9pbXByZXNzdW0vXCJ9IC8+XG4gICAgICAgICAgPFBhZ2VFcnJvciB3aGVuPXtkYXRhLmlzRXJyb3J9IC8+IFxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRoZW1lKTtcblxuXG5jb25zdCBnbG9iYWxTdHlsZXMgPSBjc3NgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNTlkZWcsICNlYmRkZDEsICNiNzlmOGEpO1xuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSA0MDAlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDIyMSwyMDksMTAwKTtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7IFxuICB9XG5gXG5cbmNvbnN0IExCVlJlZ3VsYXIgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVSZWd1bGFyfSk7XG4gIH1cbmA7XG5cbmNvbnN0IExCVkJvbGQgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVCb2xkfSk7XG4gIH1cbmA7XG5cbiJdfQ== */\");const LBVBold=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\");}\"+( false?undefined:\";label:LBVBold;\"), false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR21CIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZydcbmltcG9ydCBQYWdlRXJyb3IgZnJvbSAnLi9QYWdlRXJyb3InXG5cbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlUmVndWxhciBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlUmVndWxhci50dGYnXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZUJvbGQgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5pbXBvcnQgSG9tZUNvbnRhaW5lciBmcm9tICcuL0hvbWVDb250YWluZXInO1xuaW1wb3J0IE5hdmJhckN1c3RvbSBmcm9tICcuL05hdmJhckN1c3RvbSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBWaXRhUGFnZSBmcm9tIFwiLi9WaXRhUGFnZVwiO1xuaW1wb3J0IENhbGVuZGVyUGFnZSBmcm9tIFwiLi9DYWxlbmRlclBhZ2VcIjtcbmltcG9ydCBDb250YWN0UGFnZSBmcm9tIFwiLi9Db250YWN0UGFnZVwiO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gXCIuL1Byb2plY3RHcmlkXCI7XG5pbXBvcnQgUHJvamVjdFBhZ2UgZnJvbSBcIi4vUHJvamVjdFBhZ2VcIjtcbmltcG9ydCBNZWRpYVBhZ2UgZnJvbSBcIi4vTWVkaWFQYWdlXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgSW1wcmVzc3VtUGFnZSBmcm9tIFwiLi9JbXByZXNzdW1QYWdlXCI7XG5cblxuY29uc3QgVGhlbWUgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFsbWEgU3RvbHRlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhpc3RvcmlzY2hlcyB1bmQgTW9kZXJuZXMgVmlvbG9uY2VsbG9cIi8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz4gICAgICAgICAgICAgICAgXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz4gXG5cbiAgICAgICAgey8qKiBkZWZhdWx0IG1hdGVyaWFsIHVpIGZvbnQgKi99XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCIgLz5cbiAgICAgICAgXG4gICAgICAgIHsvKiogZGVmYXVsdCBtYXRlcmlhbCB1aSBpY29ucyAqL31cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgLz5cblxuICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8TmF2YmFyQ3VzdG9tIC8+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPExvYWRpbmcgd2hlbj17ZGF0YS5pc0ZldGNoaW5nfSAvPlxuICAgICAgICAgIDxIb21lQ29udGFpbmVyIHdoZW49e2RhdGEuaXNIb21lfSAvPlxuICAgICAgICAgIDxQcm9qZWN0IHdoZW49e2RhdGEuaXNQb3N0fS8+XG4gICAgICAgICAgPENhbGVuZGVyUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9rYWxlbmRlci9cIn0gLz5cbiAgICAgICAgICA8UHJvamVjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvcHJvamVrdGUvXCJ9IC8+XG4gICAgICAgICAgPE1lZGlhUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9tZWRpYS9cIn0gLz5cbiAgICAgICAgICA8Vml0YVBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvdml0YS9cIn0gLz5cbiAgICAgICAgICA8Q29udGFjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIva29udGFrdC9cIn0gLz5cbiAgICAgICAgICA8SW1wcmVzc3VtUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9pbXByZXNzdW0vXCJ9IC8+XG4gICAgICAgICAgPFBhZ2VFcnJvciB3aGVuPXtkYXRhLmlzRXJyb3J9IC8+IFxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRoZW1lKTtcblxuXG5jb25zdCBnbG9iYWxTdHlsZXMgPSBjc3NgXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNTlkZWcsICNlYmRkZDEsICNiNzlmOGEpO1xuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSA0MDAlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDIyMSwyMDksMTAwKTtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7IFxuICB9XG5gXG5cbmNvbnN0IExCVlJlZ3VsYXIgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVSZWd1bGFyfSk7XG4gIH1cbmA7XG5cbmNvbnN0IExCVkJvbGQgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVCb2xkfSk7XG4gIH1cbmA7XG5cbiJdfQ== */\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz8yN2I3Il0sIm5hbWVzIjpbIlRoZW1lIiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImdsb2JhbFN0eWxlcyIsImlzRmV0Y2hpbmciLCJpc0hvbWUiLCJpc1Bvc3QiLCJpc1BhZ2UiLCJpc0Vycm9yIiwiY29ubmVjdCIsIkxCVlJlZ3VsYXIiLCJjc3MiLCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhciIsIkxCVkJvbGQiLCJMaWJyZUJhc2tlcnZpbGxlQm9sZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cVJBdUJBLEtBQU1BLE1BQUssQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBQzNCLEtBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBRUEsTUFDRSwyRkFDRSx5RUFBQyw2Q0FBRCxZQUNFLHlHQURGLENBRUUsZ0ZBQU0sSUFBSSxDQUFDLGFBQVgsQ0FBeUIsT0FBTyxDQUFDLHVDQUFqQyxFQUZGLENBR0UsZ0ZBQU0sSUFBSSxDQUFDLElBQVgsRUFIRixDQUlFLGdGQUFNLElBQUksQ0FBQyxVQUFYLENBQXNCLE9BQU8sQ0FBQyx1Q0FBOUIsRUFKRixDQUtFLGdGQUNFLEdBQUcsQ0FBQyxZQUROLENBRUUsSUFBSSxDQUFDLHVFQUZQLENBR0UsU0FBUyxDQUFDLHlFQUhaLENBSUUsV0FBVyxDQUFDLFdBSmQsRUFMRixDQWFFLGdGQUFNLEdBQUcsQ0FBQyxZQUFWLENBQXVCLElBQUksQ0FBQyw2RUFBNUIsRUFiRixDQWdCRSxnRkFBTSxHQUFHLENBQUMsWUFBVixDQUF1QixJQUFJLENBQUMseURBQTVCLEVBaEJGLENBa0JFLGtGQUFRLElBQUksQ0FBQyxpQkFBYixFQWxCRixHQURGLENBcUJFLHdFQUFDLCtDQUFELEVBQVEsTUFBTSxDQUFFQyxZQUFoQixFQXJCRixDQXVCRSwyRkFDRSx3RUFBQyxxREFBRCxJQURGLENBRUUseUVBQUMsbUVBQUQsWUFDRSx3RUFBQyxnREFBRCxFQUFTLElBQUksQ0FBRUwsSUFBSSxDQUFDTSxVQUFwQixFQURGLENBRUUsd0VBQUMsc0RBQUQsRUFBZSxJQUFJLENBQUVOLElBQUksQ0FBQ08sTUFBMUIsRUFGRixDQUdFLHdFQUFDLGlEQUFELEVBQVMsSUFBSSxDQUFFUCxJQUFJLENBQUNRLE1BQXBCLEVBSEYsQ0FJRSx3RUFBQyxzREFBRCxFQUFjLElBQUksQ0FBRVIsSUFBSSxDQUFDUyxNQUFMLEVBQWVWLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUFiLEVBQXFCLFlBQXhELEVBSkYsQ0FLRSx3RUFBQyxxREFBRCxFQUFhLElBQUksQ0FBRUosSUFBSSxDQUFDUyxNQUFMLEVBQWVWLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUFiLEVBQXFCLFlBQXZELEVBTEYsQ0FNRSx3RUFBQyxtREFBRCxFQUFXLElBQUksQ0FBRUosSUFBSSxDQUFDUyxNQUFMLEVBQWVWLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUFiLEVBQXFCLFNBQXJELEVBTkYsQ0FPRSx3RUFBQyxrREFBRCxFQUFVLElBQUksQ0FBRUosSUFBSSxDQUFDUyxNQUFMLEVBQWVWLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUFiLEVBQXFCLFFBQXBELEVBUEYsQ0FRRSx3RUFBQyxxREFBRCxFQUFhLElBQUksQ0FBRUosSUFBSSxDQUFDUyxNQUFMLEVBQWVWLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUFiLEVBQXFCLFdBQXZELEVBUkYsQ0FTRSx3RUFBQyx1REFBRCxFQUFlLElBQUksQ0FBRUosSUFBSSxDQUFDUyxNQUFMLEVBQWVWLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUFiLEVBQXFCLGFBQXpELEVBVEYsQ0FVRSx3RUFBQyxrREFBRCxFQUFXLElBQUksQ0FBRUosSUFBSSxDQUFDVSxPQUF0QixFQVZGLEdBRkYsQ0FjRSx3RUFBQyxnREFBRCxJQWRGLEdBdkJGLEdBREYsQ0EyQ0QsQ0E5Q0QsQ0FnRGVDLHVIQUFPLENBQUNiLEtBQUQsQ0FBdEIsRUFHQSxLQUFNTyxhQUFZLDgvS0FBbEIsQ0FZQSxLQUFNTyxXQUFVLGNBQUdDLG9EQUFILGlHQU9EQyxrR0FQQyxrektBQWhCLENBV0EsS0FBTUMsUUFBTyxjQUFHRixvREFBSCxpR0FPRUcsK0ZBUEYsK3lLQUFiIiwiZmlsZSI6Ii4vcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBHbG9iYWwsIGNzcywgSGVhZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2xvYWRpbmcnXG5pbXBvcnQgUGFnZUVycm9yIGZyb20gJy4vUGFnZUVycm9yJ1xuXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXIudHRmJ1xuaW1wb3J0IExpYnJlQmFza2VydmlsbGVCb2xkIGZyb20gJy4uL2Fzc2V0cy9mb250cy9MaWJyZUJhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGVCb2xkLnR0ZidcblxuaW1wb3J0IEhvbWVDb250YWluZXIgZnJvbSAnLi9Ib21lQ29udGFpbmVyJztcbmltcG9ydCBOYXZiYXJDdXN0b20gZnJvbSAnLi9OYXZiYXJDdXN0b20nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgVml0YVBhZ2UgZnJvbSBcIi4vVml0YVBhZ2VcIjtcbmltcG9ydCBDYWxlbmRlclBhZ2UgZnJvbSBcIi4vQ2FsZW5kZXJQYWdlXCI7XG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSBcIi4vQ29udGFjdFBhZ2VcIjtcbmltcG9ydCBQcm9qZWN0R3JpZCBmcm9tIFwiLi9Qcm9qZWN0R3JpZFwiO1xuaW1wb3J0IFByb2plY3RQYWdlIGZyb20gXCIuL1Byb2plY3RQYWdlXCI7XG5pbXBvcnQgTWVkaWFQYWdlIGZyb20gXCIuL01lZGlhUGFnZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IEltcHJlc3N1bVBhZ2UgZnJvbSBcIi4vSW1wcmVzc3VtUGFnZVwiO1xuXG5cbmNvbnN0IFRoZW1lID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BbG1hIFN0b2x0ZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIaXN0b3Jpc2NoZXMgdW5kIE1vZGVybmVzIFZpb2xvbmNlbGxvXCIvPlxuICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+ICAgICAgICAgICAgICAgIFxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+IFxuXG4gICAgICAgIHsvKiogZGVmYXVsdCBtYXRlcmlhbCB1aSBmb250ICovfVxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiIC8+XG4gICAgICAgIFxuICAgICAgICB7LyoqIGRlZmF1bHQgbWF0ZXJpYWwgdWkgaWNvbnMgKi99XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiIC8+XG5cbiAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsU3R5bGVzfSAvPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPE5hdmJhckN1c3RvbSAvPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxMb2FkaW5nIHdoZW49e2RhdGEuaXNGZXRjaGluZ30gLz5cbiAgICAgICAgICA8SG9tZUNvbnRhaW5lciB3aGVuPXtkYXRhLmlzSG9tZX0gLz5cbiAgICAgICAgICA8UHJvamVjdCB3aGVuPXtkYXRhLmlzUG9zdH0vPlxuICAgICAgICAgIDxDYWxlbmRlclBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIva2FsZW5kZXIvXCJ9IC8+XG4gICAgICAgICAgPFByb2plY3RQYWdlIHdoZW49e2RhdGEuaXNQYWdlICYmIHN0YXRlLnJvdXRlci5saW5rID09IFwiL3Byb2pla3RlL1wifSAvPlxuICAgICAgICAgIDxNZWRpYVBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvbWVkaWEvXCJ9IC8+XG4gICAgICAgICAgPFZpdGFQYWdlIHdoZW49e2RhdGEuaXNQYWdlICYmIHN0YXRlLnJvdXRlci5saW5rID09IFwiL3ZpdGEvXCJ9IC8+XG4gICAgICAgICAgPENvbnRhY3RQYWdlIHdoZW49e2RhdGEuaXNQYWdlICYmIHN0YXRlLnJvdXRlci5saW5rID09IFwiL2tvbnRha3QvXCJ9IC8+XG4gICAgICAgICAgPEltcHJlc3N1bVBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvaW1wcmVzc3VtL1wifSAvPlxuICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPiBcbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cblxuY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzYFxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzU5ZGVnLCAjZWJkZGQxLCAjYjc5ZjhhKTtcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNDAwJTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwyMjEsMjA5LDEwMCk7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJcIjtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgXG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4OyBcbiAgfVxuYFxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/index.js\n");

/***/ })

})