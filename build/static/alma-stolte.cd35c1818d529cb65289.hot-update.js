webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/list/List.js":
/*!****************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/list/List.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _ProjectPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProjectPreview */ \"./packages/alma-stolte-theme/src/components/ProjectPreview.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar List=(_ref)=>{var{state}=_ref;var[initialList]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(state.source.get(state.router.link).items);var[listLength]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialList.length);var[firstHalf]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialList.slice(0,listLength/2));var[secondHalf]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialList.slice(listLength/2,listLength));// filtering posts returning only category \"projekte\" aka 4771.\nvar filterProjects=il=>{return il.filter((_ref2)=>{var{id,categories}=_ref2;// creating new variable to actually \"regrab\" items with coresponding id\nvar item=state.source[\"post\"][id];return item.categories!=4771;});};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null,filterProjects(initialList).map((_ref3)=>{var{id}=_ref3;var item=state.source[\"post\"][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_ProjectPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});}),filterProjects(secondHalf).map((_ref4)=>{var{id}=_ref4;var item=state.source[\"post\"][id];return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_ProjectPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(List));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L0xpc3QuanM/ZDM2YSJdLCJuYW1lcyI6WyJMaXN0Iiwic3RhdGUiLCJpbml0aWFsTGlzdCIsInVzZVN0YXRlIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsIml0ZW1zIiwibGlzdExlbmd0aCIsImxlbmd0aCIsImZpcnN0SGFsZiIsInNsaWNlIiwic2Vjb25kSGFsZiIsImZpbHRlclByb2plY3RzIiwiaWwiLCJmaWx0ZXIiLCJpZCIsImNhdGVnb3JpZXMiLCJpdGVtIiwibWFwIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0EsR0FBTUEsS0FBSSxDQUFHLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFFMUIsR0FBTSxDQUFDQyxXQUFELEVBQWdCQyxzREFBUSxDQUFDRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkosS0FBSyxDQUFDSyxNQUFOLENBQWFDLElBQTlCLEVBQW9DQyxLQUFyQyxDQUE5QixDQUNBLEdBQU0sQ0FBQ0MsVUFBRCxFQUFlTixzREFBUSxDQUFDRCxXQUFXLENBQUNRLE1BQWIsQ0FBN0IsQ0FDQSxHQUFNLENBQUNDLFNBQUQsRUFBY1Isc0RBQVEsQ0FBQ0QsV0FBVyxDQUFDVSxLQUFaLENBQWtCLENBQWxCLENBQW9CSCxVQUFVLENBQUMsQ0FBL0IsQ0FBRCxDQUE1QixDQUNBLEdBQU0sQ0FBQ0ksVUFBRCxFQUFlVixzREFBUSxDQUFDRCxXQUFXLENBQUNVLEtBQVosQ0FBb0JILFVBQVUsQ0FBQyxDQUEvQixDQUFtQ0EsVUFBbkMsQ0FBRCxDQUE3QixDQUdBO0FBQ0EsR0FBTUssZUFBYyxDQUFJQyxFQUFELEVBQVEsQ0FDN0IsTUFBUUEsR0FBRSxDQUFDQyxNQUFILENBQVUsU0FBd0IsSUFBdkIsQ0FBRUMsRUFBRixDQUFNQyxVQUFOLENBQXVCLE9BQ3hDO0FBQ0EsR0FBTUMsS0FBSSxDQUFHbEIsS0FBSyxDQUFDRyxNQUFOLENBQWEsTUFBYixFQUFxQmEsRUFBckIsQ0FBYixDQUNBLE1BQU9FLEtBQUksQ0FBQ0QsVUFBTCxFQUFtQixJQUExQixDQUNELENBSk8sQ0FBUixDQUtELENBTkQsQ0FRQSxNQUNFLDJEQUFDLDJEQUFELE1BR0dKLGNBQWMsQ0FBQ1osV0FBRCxDQUFkLENBQTRCa0IsR0FBNUIsQ0FBZ0MsU0FBWSxJQUFYLENBQUVILEVBQUYsQ0FBVyxPQUMzQyxHQUFNRSxLQUFJLENBQUdsQixLQUFLLENBQUNHLE1BQU4sQ0FBYSxNQUFiLEVBQXFCYSxFQUFyQixDQUFiLENBQ0EsTUFBTywyREFBQyx1REFBRCxFQUFTLEdBQUcsQ0FBRUUsSUFBSSxDQUFDRixFQUFuQixDQUF1QixJQUFJLENBQUVFLElBQTdCLEVBQVAsQ0FDRCxDQUhBLENBSEgsQ0FTR0wsY0FBYyxDQUFDRCxVQUFELENBQWQsQ0FBMkJPLEdBQTNCLENBQStCLFNBQVksSUFBWCxDQUFFSCxFQUFGLENBQVcsT0FDMUMsR0FBTUUsS0FBSSxDQUFHbEIsS0FBSyxDQUFDRyxNQUFOLENBQWEsTUFBYixFQUFxQmEsRUFBckIsQ0FBYixDQUNBLE1BQU8sMkRBQUMsdURBQUQsRUFBUyxHQUFHLENBQUVFLElBQUksQ0FBQ0YsRUFBbkIsQ0FBdUIsSUFBSSxDQUFFRSxJQUE3QixFQUFQLENBQ0QsQ0FIQSxDQVRILENBREYsQ0FnQkQsQ0FqQ0QsQ0FtQ2VFLHVIQUFPLENBQUNyQixJQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9MaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL1Byb2plY3RQcmV2aWV3J1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93J1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuXG4gIGNvbnN0IFtpbml0aWFsTGlzdF0gPSB1c2VTdGF0ZShzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKS5pdGVtcyk7XG4gIGNvbnN0IFtsaXN0TGVuZ3RoXSA9IHVzZVN0YXRlKGluaXRpYWxMaXN0Lmxlbmd0aCk7XG4gIGNvbnN0IFtmaXJzdEhhbGZdID0gdXNlU3RhdGUoaW5pdGlhbExpc3Quc2xpY2UoMCxsaXN0TGVuZ3RoLzIpKTtcbiAgY29uc3QgW3NlY29uZEhhbGZdID0gdXNlU3RhdGUoaW5pdGlhbExpc3Quc2xpY2UoKChsaXN0TGVuZ3RoLzIpKSxsaXN0TGVuZ3RoKSk7XG5cblxuICAvLyBmaWx0ZXJpbmcgcG9zdHMgcmV0dXJuaW5nIG9ubHkgY2F0ZWdvcnkgXCJwcm9qZWt0ZVwiIGFrYSA0NzcxLlxuICBjb25zdCBmaWx0ZXJQcm9qZWN0cyA9IChpbCkgPT4ge1xuICAgIHJldHVybiAoaWwuZmlsdGVyKCh7IGlkLCBjYXRlZ29yaWVzIH0pID0+IHtcbiAgICAgIC8vIGNyZWF0aW5nIG5ldyB2YXJpYWJsZSB0byBhY3R1YWxseSBcInJlZ3JhYlwiIGl0ZW1zIHdpdGggY29yZXNwb25kaW5nIGlkXG4gICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW1wicG9zdFwiXVtpZF07XG4gICAgICByZXR1cm4gaXRlbS5jYXRlZ29yaWVzICE9IDQ3NzE7XG4gICAgfSkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICBcbiAgICAgIHsvKiBtYXBwaW5nIGZpcnN0IGhhbGYgb2YgbGlzdCBwcm9qZWN0cyB0byBzdXN0YWluIGdyaWQgYmVoYXZpb3IgKi99IFxuICAgICAge2ZpbHRlclByb2plY3RzKGluaXRpYWxMaXN0KS5tYXAoKHsgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW1wicG9zdFwiXVtpZF07XG4gICAgICAgIHJldHVybiA8UHJvamVjdCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgfSl9XG5cbiAgICAgIHsvKiBtYXBwaW5nIHNlY29uZCBoYWxmIG9mIGxpc3QgcHJvamVjdHMgdG8gc3VzdGFpbiBncmlkIGJlaGF2aW9yICovfSBcbiAgICAgIHtmaWx0ZXJQcm9qZWN0cyhzZWNvbmRIYWxmKS5tYXAoKHsgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW1wicG9zdFwiXVtpZF07XG4gICAgICAgIHJldHVybiA8UHJvamVjdCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgfSl9XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/list/List.js\n");

/***/ })

})