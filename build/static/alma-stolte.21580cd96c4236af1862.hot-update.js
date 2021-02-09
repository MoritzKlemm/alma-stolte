webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/index.js":
/*!************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./packages/alma-stolte-theme/src/components/loading.js\");\n/* harmony import */ var _PageError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageError */ \"./packages/alma-stolte-theme/src/components/PageError.js\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleRegular.ttf\");\n/* harmony import */ var _assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf */ \"./packages/alma-stolte-theme/src/assets/fonts/LibreBaskerville/LibreBaskervilleBold.ttf\");\n/* harmony import */ var _HomeContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomeContainer */ \"./packages/alma-stolte-theme/src/components/HomeContainer.js\");\n/* harmony import */ var _NavbarCustom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavbarCustom */ \"./packages/alma-stolte-theme/src/components/NavbarCustom.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ \"./packages/alma-stolte-theme/src/components/Footer.js\");\n/* harmony import */ var _VitaPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VitaPage */ \"./packages/alma-stolte-theme/src/components/VitaPage.js\");\n/* harmony import */ var _CalenderPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CalenderPage */ \"./packages/alma-stolte-theme/src/components/CalenderPage.js\");\n/* harmony import */ var _MediaPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MediaPage */ \"./packages/alma-stolte-theme/src/components/MediaPage.js\");\n/* harmony import */ var _ContactPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ContactPage */ \"./packages/alma-stolte-theme/src/components/ContactPage.js\");\n/* harmony import */ var _ProjectGrid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ProjectGrid */ \"./packages/alma-stolte-theme/src/components/ProjectGrid.js\");\n/* harmony import */ var _ProjectPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ProjectPage */ \"./packages/alma-stolte-theme/src/components/ProjectPage.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Theme=({state})=>{const data=state.source.get(state.router.link);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsxs\"])(\"div\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(\"title\",{children:\"Alma Stolte\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(\"meta\",{name:\"description\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(\"html\",{lang:\"en\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(\"link\",{rel:\"stylesheet\",href:\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\",integrity:\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\",crossorigin:\"anonymous\"})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Global\"],{styles:globalStyles}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsxs\"])(\"main\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_NavbarCustom__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{when:data.isFetching}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_HomeContainer__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{when:data.isHome}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_Project__WEBPACK_IMPORTED_MODULE_16__[\"default\"],{when:data.isPost}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_CalenderPage__WEBPACK_IMPORTED_MODULE_11__[\"default\"],{when:data.isPage&&state.router.link==\"/kalender/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_ProjectPage__WEBPACK_IMPORTED_MODULE_15__[\"default\"],{when:data.isPage&&state.router.link==\"/projekte/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_MediaPage__WEBPACK_IMPORTED_MODULE_12__[\"default\"],{when:data.isPage&&state.router.link==\"/media/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_VitaPage__WEBPACK_IMPORTED_MODULE_10__[\"default\"],{when:data.isPage&&state.router.link==\"/vita/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_ContactPage__WEBPACK_IMPORTED_MODULE_13__[\"default\"],{when:data.isPage&&state.router.link==\"/kontakt/\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_PageError__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{when:data.isError})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__[\"jsx\"])(_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Theme));const globalStyles= false?undefined:{name:\"582ahh-globalStyles\",styles:\"body{background-color:rgba(235,221,209,100);font-family:\\\"LibreBaskervilleRegular\\\";scroll-behavior:smooth;margin:0px;padding:0px;}.row,col-md-6,.col-md-12{margin:0px;padding:0px;}.container{padding:0px;};label:globalStyles;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRXdCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZydcbmltcG9ydCBQYWdlRXJyb3IgZnJvbSAnLi9QYWdlRXJyb3InXG5cbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlUmVndWxhciBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlUmVndWxhci50dGYnXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZUJvbGQgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5pbXBvcnQgSG9tZUNvbnRhaW5lciBmcm9tICcuL0hvbWVDb250YWluZXInO1xuXG5pbXBvcnQgTmF2YmFyQ3VzdG9tIGZyb20gJy4vTmF2YmFyQ3VzdG9tJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IFZpdGFQYWdlIGZyb20gXCIuL1ZpdGFQYWdlXCI7XG5pbXBvcnQgQ2FsZW5kZXJQYWdlIGZyb20gXCIuL0NhbGVuZGVyUGFnZVwiO1xuaW1wb3J0IE1lZGlhUGFnZSBmcm9tIFwiLi9NZWRpYVBhZ2VcIjtcbmltcG9ydCBDb250YWN0UGFnZSBmcm9tIFwiLi9Db250YWN0UGFnZVwiO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gXCIuL1Byb2plY3RHcmlkXCI7XG5pbXBvcnQgUHJvamVjdFBhZ2UgZnJvbSBcIi4vUHJvamVjdFBhZ2VcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcblxuXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWxtYSBTdG9sdGU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIi8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIDxtYWluPlxuXG4gICAgICAgIDxOYXZiYXJDdXN0b20gLz5cbiAgICAgICAgXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPExvYWRpbmcgd2hlbj17ZGF0YS5pc0ZldGNoaW5nfSAvPlxuICAgICAgICAgIDxIb21lQ29udGFpbmVyIHdoZW49e2RhdGEuaXNIb21lfSAvPlxuICAgICAgICAgIDxQcm9qZWN0IHdoZW49e2RhdGEuaXNQb3N0fS8+XG4gICAgICAgICAgPENhbGVuZGVyUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9rYWxlbmRlci9cIn0gLz5cbiAgICAgICAgICA8UHJvamVjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvcHJvamVrdGUvXCJ9IC8+XG4gICAgICAgICAgPE1lZGlhUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9tZWRpYS9cIn0gLz5cbiAgICAgICAgICA8Vml0YVBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvdml0YS9cIn0gLz5cbiAgICAgICAgICA8Q29udGFjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIva29udGFrdC9cIn0gLz5cbiAgICAgICAgICA8UGFnZUVycm9yIHdoZW49e2RhdGEuaXNFcnJvcn0gLz4gXG4gICAgICAgIDwvU3dpdGNoPlxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgXG4gICAgICA8L21haW4+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuXG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsMjIxLDIwOSwxMDApO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IFxuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDsgXG4gIH1cbiAgLnJvdywgY29sLW1kLTYsIC5jb2wtbWQtMTIge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7IFxuICB9XG4gIC5jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMHB4OyBcbiAgfVxuYFxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__};const LBVRegular=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleRegular_ttf__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\");}\"+( false?undefined:\";label:LBVRegular;\"), false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRnNCIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZydcbmltcG9ydCBQYWdlRXJyb3IgZnJvbSAnLi9QYWdlRXJyb3InXG5cbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlUmVndWxhciBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlUmVndWxhci50dGYnXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZUJvbGQgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5pbXBvcnQgSG9tZUNvbnRhaW5lciBmcm9tICcuL0hvbWVDb250YWluZXInO1xuXG5pbXBvcnQgTmF2YmFyQ3VzdG9tIGZyb20gJy4vTmF2YmFyQ3VzdG9tJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IFZpdGFQYWdlIGZyb20gXCIuL1ZpdGFQYWdlXCI7XG5pbXBvcnQgQ2FsZW5kZXJQYWdlIGZyb20gXCIuL0NhbGVuZGVyUGFnZVwiO1xuaW1wb3J0IE1lZGlhUGFnZSBmcm9tIFwiLi9NZWRpYVBhZ2VcIjtcbmltcG9ydCBDb250YWN0UGFnZSBmcm9tIFwiLi9Db250YWN0UGFnZVwiO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gXCIuL1Byb2plY3RHcmlkXCI7XG5pbXBvcnQgUHJvamVjdFBhZ2UgZnJvbSBcIi4vUHJvamVjdFBhZ2VcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcblxuXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWxtYSBTdG9sdGU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIi8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIDxtYWluPlxuXG4gICAgICAgIDxOYXZiYXJDdXN0b20gLz5cbiAgICAgICAgXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPExvYWRpbmcgd2hlbj17ZGF0YS5pc0ZldGNoaW5nfSAvPlxuICAgICAgICAgIDxIb21lQ29udGFpbmVyIHdoZW49e2RhdGEuaXNIb21lfSAvPlxuICAgICAgICAgIDxQcm9qZWN0IHdoZW49e2RhdGEuaXNQb3N0fS8+XG4gICAgICAgICAgPENhbGVuZGVyUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9rYWxlbmRlci9cIn0gLz5cbiAgICAgICAgICA8UHJvamVjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvcHJvamVrdGUvXCJ9IC8+XG4gICAgICAgICAgPE1lZGlhUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9tZWRpYS9cIn0gLz5cbiAgICAgICAgICA8Vml0YVBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvdml0YS9cIn0gLz5cbiAgICAgICAgICA8Q29udGFjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIva29udGFrdC9cIn0gLz5cbiAgICAgICAgICA8UGFnZUVycm9yIHdoZW49e2RhdGEuaXNFcnJvcn0gLz4gXG4gICAgICAgIDwvU3dpdGNoPlxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgXG4gICAgICA8L21haW4+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuXG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsMjIxLDIwOSwxMDApO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IFxuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDsgXG4gIH1cbiAgLnJvdywgY29sLW1kLTYsIC5jb2wtbWQtMTIge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7IFxuICB9XG4gIC5jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMHB4OyBcbiAgfVxuYFxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXX0= */\");const LBVBold=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(\"@font-face{font-family:\\\"LibreBaskervilleRegular\\\";font-style:normal;font-weight:400;src:url(\",_assets_fonts_LibreBaskerville_LibreBaskervilleBold_ttf__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\");}\"+( false?undefined:\";label:LBVBold;\"), false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRm1CIiwiZmlsZSI6Ii9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIEdsb2JhbCwgY3NzLCBIZWFkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZydcbmltcG9ydCBQYWdlRXJyb3IgZnJvbSAnLi9QYWdlRXJyb3InXG5cbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlUmVndWxhciBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlUmVndWxhci50dGYnXG5pbXBvcnQgTGlicmVCYXNrZXJ2aWxsZUJvbGQgZnJvbSAnLi4vYXNzZXRzL2ZvbnRzL0xpYnJlQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZUJvbGQudHRmJ1xuXG5pbXBvcnQgSG9tZUNvbnRhaW5lciBmcm9tICcuL0hvbWVDb250YWluZXInO1xuXG5pbXBvcnQgTmF2YmFyQ3VzdG9tIGZyb20gJy4vTmF2YmFyQ3VzdG9tJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IFZpdGFQYWdlIGZyb20gXCIuL1ZpdGFQYWdlXCI7XG5pbXBvcnQgQ2FsZW5kZXJQYWdlIGZyb20gXCIuL0NhbGVuZGVyUGFnZVwiO1xuaW1wb3J0IE1lZGlhUGFnZSBmcm9tIFwiLi9NZWRpYVBhZ2VcIjtcbmltcG9ydCBDb250YWN0UGFnZSBmcm9tIFwiLi9Db250YWN0UGFnZVwiO1xuaW1wb3J0IFByb2plY3RHcmlkIGZyb20gXCIuL1Byb2plY3RHcmlkXCI7XG5pbXBvcnQgUHJvamVjdFBhZ2UgZnJvbSBcIi4vUHJvamVjdFBhZ2VcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcblxuXG5jb25zdCBUaGVtZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWxtYSBTdG9sdGU8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIi8+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG5cbiAgICAgIDxtYWluPlxuXG4gICAgICAgIDxOYXZiYXJDdXN0b20gLz5cbiAgICAgICAgXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPExvYWRpbmcgd2hlbj17ZGF0YS5pc0ZldGNoaW5nfSAvPlxuICAgICAgICAgIDxIb21lQ29udGFpbmVyIHdoZW49e2RhdGEuaXNIb21lfSAvPlxuICAgICAgICAgIDxQcm9qZWN0IHdoZW49e2RhdGEuaXNQb3N0fS8+XG4gICAgICAgICAgPENhbGVuZGVyUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9rYWxlbmRlci9cIn0gLz5cbiAgICAgICAgICA8UHJvamVjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvcHJvamVrdGUvXCJ9IC8+XG4gICAgICAgICAgPE1lZGlhUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9tZWRpYS9cIn0gLz5cbiAgICAgICAgICA8Vml0YVBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIvdml0YS9cIn0gLz5cbiAgICAgICAgICA8Q29udGFjdFBhZ2Ugd2hlbj17ZGF0YS5pc1BhZ2UgJiYgc3RhdGUucm91dGVyLmxpbmsgPT0gXCIva29udGFrdC9cIn0gLz5cbiAgICAgICAgICA8UGFnZUVycm9yIHdoZW49e2RhdGEuaXNFcnJvcn0gLz4gXG4gICAgICAgIDwvU3dpdGNoPlxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgXG4gICAgICA8L21haW4+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGhlbWUpO1xuXG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsMjIxLDIwOSwxMDApO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IFxuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDsgXG4gIH1cbiAgLnJvdywgY29sLW1kLTYsIC5jb2wtbWQtMTIge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7IFxuICB9XG4gIC5jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMHB4OyBcbiAgfVxuYFxuXG5jb25zdCBMQlZSZWd1bGFyID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlUmVndWxhcn0pO1xuICB9XG5gO1xuXG5jb25zdCBMQlZCb2xkID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhclwiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgLyogVXNlIGl0IGluc2lkZSB0aGUgQ1NTICovXG4gICAgc3JjOiB1cmwoJHtMaWJyZUJhc2tlcnZpbGxlQm9sZH0pO1xuICB9XG5gO1xuXG4iXX0= */\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz8yN2I3Il0sIm5hbWVzIjpbIlRoZW1lIiwic3RhdGUiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImdsb2JhbFN0eWxlcyIsImlzRmV0Y2hpbmciLCJpc0hvbWUiLCJpc1Bvc3QiLCJpc1BhZ2UiLCJpc0Vycm9yIiwiY29ubmVjdCIsIkxCVlJlZ3VsYXIiLCJjc3MiLCJMaWJyZUJhc2tlcnZpbGxlUmVndWxhciIsIkxCVkJvbGQiLCJMaWJyZUJhc2tlcnZpbGxlQm9sZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FSQXNCQSxLQUFNQSxNQUFLLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUMzQixLQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUVBLE1BQ0UsMkZBQ0UseUVBQUMsNkNBQUQsWUFDRSx5R0FERixDQUVFLGdGQUFNLElBQUksQ0FBQyxhQUFYLEVBRkYsQ0FHRSxnRkFBTSxJQUFJLENBQUMsSUFBWCxFQUhGLENBSUUsZ0ZBQ0UsR0FBRyxDQUFDLFlBRE4sQ0FFRSxJQUFJLENBQUMsdUVBRlAsQ0FHRSxTQUFTLENBQUMseUVBSFosQ0FJRSxXQUFXLENBQUMsV0FKZCxFQUpGLEdBREYsQ0FZRSx3RUFBQywrQ0FBRCxFQUFRLE1BQU0sQ0FBRUMsWUFBaEIsRUFaRixDQWNFLDJGQUVFLHdFQUFDLHFEQUFELElBRkYsQ0FJRSx5RUFBQyxtRUFBRCxZQUNFLHdFQUFDLGdEQUFELEVBQVMsSUFBSSxDQUFFTCxJQUFJLENBQUNNLFVBQXBCLEVBREYsQ0FFRSx3RUFBQyxzREFBRCxFQUFlLElBQUksQ0FBRU4sSUFBSSxDQUFDTyxNQUExQixFQUZGLENBR0Usd0VBQUMsaURBQUQsRUFBUyxJQUFJLENBQUVQLElBQUksQ0FBQ1EsTUFBcEIsRUFIRixDQUlFLHdFQUFDLHNEQUFELEVBQWMsSUFBSSxDQUFFUixJQUFJLENBQUNTLE1BQUwsRUFBZVYsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQWIsRUFBcUIsWUFBeEQsRUFKRixDQUtFLHdFQUFDLHFEQUFELEVBQWEsSUFBSSxDQUFFSixJQUFJLENBQUNTLE1BQUwsRUFBZVYsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQWIsRUFBcUIsWUFBdkQsRUFMRixDQU1FLHdFQUFDLG1EQUFELEVBQVcsSUFBSSxDQUFFSixJQUFJLENBQUNTLE1BQUwsRUFBZVYsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQWIsRUFBcUIsU0FBckQsRUFORixDQU9FLHdFQUFDLGtEQUFELEVBQVUsSUFBSSxDQUFFSixJQUFJLENBQUNTLE1BQUwsRUFBZVYsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQWIsRUFBcUIsUUFBcEQsRUFQRixDQVFFLHdFQUFDLHFEQUFELEVBQWEsSUFBSSxDQUFFSixJQUFJLENBQUNTLE1BQUwsRUFBZVYsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQWIsRUFBcUIsV0FBdkQsRUFSRixDQVNFLHdFQUFDLGtEQUFELEVBQVcsSUFBSSxDQUFFSixJQUFJLENBQUNVLE9BQXRCLEVBVEYsR0FKRixDQWdCRSx3RUFBQywrQ0FBRCxJQWhCRixHQWRGLEdBREYsQ0FxQ0QsQ0F4Q0QsQ0EwQ2VDLHVIQUFPLENBQUNiLEtBQUQsQ0FBdEIsRUFHQSxLQUFNTyxhQUFZLDRySkFBbEIsQ0FpQkEsS0FBTU8sV0FBVSxjQUFHQyxvREFBSCxpR0FPREMsa0dBUEMsczdJQUFoQixDQVdBLEtBQU1DLFFBQU8sY0FBR0Ysb0RBQUgsaUdBT0VHLCtGQVBGLG03SUFBYiIsImZpbGUiOiIuL3BhY2thZ2VzL2FsbWEtc3RvbHRlLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgR2xvYmFsLCBjc3MsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL3N3aXRjaFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9sb2FkaW5nJ1xuaW1wb3J0IFBhZ2VFcnJvciBmcm9tICcuL1BhZ2VFcnJvcidcblxuaW1wb3J0IExpYnJlQmFza2VydmlsbGVSZWd1bGFyIGZyb20gJy4uL2Fzc2V0cy9mb250cy9MaWJyZUJhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGVSZWd1bGFyLnR0ZidcbmltcG9ydCBMaWJyZUJhc2tlcnZpbGxlQm9sZCBmcm9tICcuLi9hc3NldHMvZm9udHMvTGlicmVCYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlQm9sZC50dGYnXG5cbmltcG9ydCBIb21lQ29udGFpbmVyIGZyb20gJy4vSG9tZUNvbnRhaW5lcic7XG5cbmltcG9ydCBOYXZiYXJDdXN0b20gZnJvbSAnLi9OYXZiYXJDdXN0b20nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgVml0YVBhZ2UgZnJvbSBcIi4vVml0YVBhZ2VcIjtcbmltcG9ydCBDYWxlbmRlclBhZ2UgZnJvbSBcIi4vQ2FsZW5kZXJQYWdlXCI7XG5pbXBvcnQgTWVkaWFQYWdlIGZyb20gXCIuL01lZGlhUGFnZVwiO1xuaW1wb3J0IENvbnRhY3RQYWdlIGZyb20gXCIuL0NvbnRhY3RQYWdlXCI7XG5pbXBvcnQgUHJvamVjdEdyaWQgZnJvbSBcIi4vUHJvamVjdEdyaWRcIjtcbmltcG9ydCBQcm9qZWN0UGFnZSBmcm9tIFwiLi9Qcm9qZWN0UGFnZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuXG5cbmNvbnN0IFRoZW1lID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BbG1hIFN0b2x0ZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiLz5cbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFN0eWxlc30gLz5cblxuICAgICAgPG1haW4+XG5cbiAgICAgICAgPE5hdmJhckN1c3RvbSAvPlxuICAgICAgICBcbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8TG9hZGluZyB3aGVuPXtkYXRhLmlzRmV0Y2hpbmd9IC8+XG4gICAgICAgICAgPEhvbWVDb250YWluZXIgd2hlbj17ZGF0YS5pc0hvbWV9IC8+XG4gICAgICAgICAgPFByb2plY3Qgd2hlbj17ZGF0YS5pc1Bvc3R9Lz5cbiAgICAgICAgICA8Q2FsZW5kZXJQYWdlIHdoZW49e2RhdGEuaXNQYWdlICYmIHN0YXRlLnJvdXRlci5saW5rID09IFwiL2thbGVuZGVyL1wifSAvPlxuICAgICAgICAgIDxQcm9qZWN0UGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9wcm9qZWt0ZS9cIn0gLz5cbiAgICAgICAgICA8TWVkaWFQYWdlIHdoZW49e2RhdGEuaXNQYWdlICYmIHN0YXRlLnJvdXRlci5saW5rID09IFwiL21lZGlhL1wifSAvPlxuICAgICAgICAgIDxWaXRhUGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi92aXRhL1wifSAvPlxuICAgICAgICAgIDxDb250YWN0UGFnZSB3aGVuPXtkYXRhLmlzUGFnZSAmJiBzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9rb250YWt0L1wifSAvPlxuICAgICAgICAgIDxQYWdlRXJyb3Igd2hlbj17ZGF0YS5pc0Vycm9yfSAvPiBcbiAgICAgICAgPC9Td2l0Y2g+XG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICBcbiAgICAgIDwvbWFpbj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChUaGVtZSk7XG5cblxuY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzYFxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwyMjEsMjA5LDEwMCk7XG4gICAgZm9udC1mYW1pbHk6IFwiTGlicmVCYXNrZXJ2aWxsZVJlZ3VsYXJcIjtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgXG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4OyBcbiAgfVxuICAucm93LCBjb2wtbWQtNiwgLmNvbC1tZC0xMiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDsgXG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAwcHg7IFxuICB9XG5gXG5cbmNvbnN0IExCVlJlZ3VsYXIgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVSZWd1bGFyfSk7XG4gIH1cbmA7XG5cbmNvbnN0IExCVkJvbGQgPSBjc3NgXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpYnJlQmFza2VydmlsbGVSZWd1bGFyXCI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAvKiBVc2UgaXQgaW5zaWRlIHRoZSBDU1MgKi9cbiAgICBzcmM6IHVybCgke0xpYnJlQmFza2VydmlsbGVCb2xkfSk7XG4gIH1cbmA7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/index.js\n");

/***/ })

})