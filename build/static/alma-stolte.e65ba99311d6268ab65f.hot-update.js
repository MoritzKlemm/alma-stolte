webpackHotUpdate("alma-stolte",{

/***/ "./packages/alma-stolte-theme/src/components/CalenderPreview.js":
/*!**********************************************************************!*\
  !*** ./packages/alma-stolte-theme/src/components/CalenderPreview.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ \"./packages/alma-stolte-theme/src/components/Project.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading */ \"./packages/alma-stolte-theme/src/components/loading.js\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const CalenderPreview=({state})=>{const data=state.source.get(state.router.link);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(StyledContainer,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxs\"])(_frontity_components_switch__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(List,{when:data.isArchive}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{when:data.isPostType}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(PageError,{when:data.isError})]})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(CalenderPreview));const StyledContainer=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{target:\"egsgzrp0\",label:\"StyledContainer\"})( false?undefined:{name:\"f7ay7b\",styles:\"justify-content:center\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JpdHprbGVtbS9Eb2N1bWVudHMvRmlybWEvUHJvamVrdGUvYWxtYSBzdG9sdGUvY29kZS9hbG1hLXN0b2x0ZS9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9DYWxlbmRlclByZXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ5QyIsImZpbGUiOiIvVXNlcnMvbW9yaXR6a2xlbW0vRG9jdW1lbnRzL0Zpcm1hL1Byb2pla3RlL2FsbWEgc3RvbHRlL2NvZGUvYWxtYS1zdG9sdGUvcGFja2FnZXMvYWxtYS1zdG9sdGUtdGhlbWUvc3JjL2NvbXBvbmVudHMvQ2FsZW5kZXJQcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGNzcyB9IGZyb20gJ2Zyb250aXR5JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcidcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2xvYWRpbmcnO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCI7XG5cbmNvbnN0IENhbGVuZGVyUHJldmlldyA9ICh7IHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkQ29udGFpbmVyPlxuICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICA8TGlzdCB3aGVuPXtkYXRhLmlzQXJjaGl2ZX0gLz5cbiAgICAgICAgICAgICAgICA8TG9hZGluZyB3aGVuPXtkYXRhLmlzUG9zdFR5cGV9IC8+XG4gICAgICAgICAgICAgICAgPFBhZ2VFcnJvciB3aGVuPXtkYXRhLmlzRXJyb3J9IC8+XG4gICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9TdHlsZWRDb250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KENhbGVuZGVyUHJldmlldyk7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZChDb250YWluZXIpYFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbmBcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9DYWxlbmRlclByZXZpZXcuanM/YzA1NyJdLCJuYW1lcyI6WyJDYWxlbmRlclByZXZpZXciLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwiaXNBcmNoaXZlIiwiaXNQb3N0VHlwZSIsImlzRXJyb3IiLCJjb25uZWN0IiwiU3R5bGVkQ29udGFpbmVyIiwiQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3FSQU9BLEtBQU1BLGdCQUFlLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUNuQyxLQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUVBLE1BQ0ksd0VBQUMsZUFBRCxXQUNJLHdFQUFDLG1FQUFELFlBQ0ksdUVBQUMsSUFBRCxFQUFNLElBQUksQ0FBRUosSUFBSSxDQUFDSyxTQUFqQixFQURKLENBRUksdUVBQUMsZ0RBQUQsRUFBUyxJQUFJLENBQUVMLElBQUksQ0FBQ00sVUFBcEIsRUFGSixDQUdJLHVFQUFDLFNBQUQsRUFBVyxJQUFJLENBQUVOLElBQUksQ0FBQ08sT0FBdEIsRUFISixHQURKLEVBREosQ0FTSCxDQVpELENBY2VDLHVIQUFPLENBQUNWLGVBQUQsQ0FBdEIsRUFFQSxLQUFNVyxnQkFBZSxDQUFHLG9FQUFNLENBQUNDLGlFQUFQLDZDQUFILDhwREFBckIiLCJmaWxlIjoiLi9wYWNrYWdlcy9hbG1hLXN0b2x0ZS10aGVtZS9zcmMvY29tcG9uZW50cy9DYWxlbmRlclByZXZpZXcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgY3NzIH0gZnJvbSAnZnJvbnRpdHknO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2hcIjtcblxuY29uc3QgQ2FsZW5kZXJQcmV2aWV3ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRDb250YWluZXI+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxMaXN0IHdoZW49e2RhdGEuaXNBcmNoaXZlfSAvPlxuICAgICAgICAgICAgICAgIDxMb2FkaW5nIHdoZW49e2RhdGEuaXNQb3N0VHlwZX0gLz5cbiAgICAgICAgICAgICAgICA8UGFnZUVycm9yIHdoZW49e2RhdGEuaXNFcnJvcn0gLz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQ2FsZW5kZXJQcmV2aWV3KTtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/alma-stolte-theme/src/components/CalenderPreview.js\n");

/***/ })

})