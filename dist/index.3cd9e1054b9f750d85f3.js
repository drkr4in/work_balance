/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/bootstrap-grid.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/bootstrap-grid.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 * Bootstrap Grid v5.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
:root {
  --bs-breakpoint-xs: 0;
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 992px;
  --bs-breakpoint-xl: 1200px;
  --bs-breakpoint-xxl: 1400px;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .g-sm-0,
  .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .g-sm-1,
  .gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-sm-1,
  .gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-sm-2,
  .gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-sm-2,
  .gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-sm-3,
  .gx-sm-3 {
    --bs-gutter-x: 1rem;
  }
  .g-sm-3,
  .gy-sm-3 {
    --bs-gutter-y: 1rem;
  }
  .g-sm-4,
  .gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-sm-4,
  .gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-sm-5,
  .gx-sm-5 {
    --bs-gutter-x: 3rem;
  }
  .g-sm-5,
  .gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .g-md-0,
  .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .g-md-0,
  .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .g-md-1,
  .gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-md-1,
  .gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-md-2,
  .gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-md-2,
  .gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-md-3,
  .gx-md-3 {
    --bs-gutter-x: 1rem;
  }
  .g-md-3,
  .gy-md-3 {
    --bs-gutter-y: 1rem;
  }
  .g-md-4,
  .gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-md-4,
  .gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-md-5,
  .gx-md-5 {
    --bs-gutter-x: 3rem;
  }
  .g-md-5,
  .gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .g-lg-0,
  .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .g-lg-1,
  .gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-lg-1,
  .gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-lg-2,
  .gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-lg-2,
  .gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-lg-3,
  .gx-lg-3 {
    --bs-gutter-x: 1rem;
  }
  .g-lg-3,
  .gy-lg-3 {
    --bs-gutter-y: 1rem;
  }
  .g-lg-4,
  .gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-lg-4,
  .gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
  .g-lg-5,
  .gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .g-xl-0,
  .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .g-xl-1,
  .gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xl-1,
  .gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xl-2,
  .gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xl-2,
  .gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xl-3,
  .gx-xl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xl-3,
  .gy-xl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xl-4,
  .gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xl-4,
  .gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xl-5,
  .gx-xl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xl-5,
  .gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .g-xxl-0,
  .gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .g-xxl-0,
  .gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .g-xxl-1,
  .gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xxl-1,
  .gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xxl-2,
  .gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xxl-2,
  .gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xxl-3,
  .gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xxl-3,
  .gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xxl-4,
  .gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xxl-4,
  .gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xxl-5,
  .gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xxl-5,
  .gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-grid {
  display: grid !important;
}

.d-inline-grid {
  display: inline-grid !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.d-none {
  display: none !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.justify-content-evenly {
  justify-content: space-evenly !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-last {
  order: 6 !important;
}

.m-0 {
  margin: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mt-auto {
  margin-top: auto !important;
}

.me-0 {
  margin-right: 0 !important;
}

.me-1 {
  margin-right: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.me-4 {
  margin-right: 1.5rem !important;
}

.me-5 {
  margin-right: 3rem !important;
}

.me-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ms-0 {
  margin-left: 0 !important;
}

.ms-1 {
  margin-left: 0.25rem !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}

.ms-4 {
  margin-left: 1.5rem !important;
}

.ms-5 {
  margin-left: 3rem !important;
}

.ms-auto {
  margin-left: auto !important;
}

.p-0 {
  padding: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pt-3 {
  padding-top: 1rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pe-0 {
  padding-right: 0 !important;
}

.pe-1 {
  padding-right: 0.25rem !important;
}

.pe-2 {
  padding-right: 0.5rem !important;
}

.pe-3 {
  padding-right: 1rem !important;
}

.pe-4 {
  padding-right: 1.5rem !important;
}

.pe-5 {
  padding-right: 3rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.ps-0 {
  padding-left: 0 !important;
}

.ps-1 {
  padding-left: 0.25rem !important;
}

.ps-2 {
  padding-left: 0.5rem !important;
}

.ps-3 {
  padding-left: 1rem !important;
}

.ps-4 {
  padding-left: 1.5rem !important;
}

.ps-5 {
  padding-left: 3rem !important;
}

@media (min-width: 576px) {
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-grid {
    display: grid !important;
  }
  .d-sm-inline-grid {
    display: inline-grid !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
  .d-sm-none {
    display: none !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    justify-content: center !important;
  }
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-sm-start {
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    align-items: center !important;
  }
  .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-between {
    align-content: space-between !important;
  }
  .align-content-sm-around {
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
  .order-sm-first {
    order: -1 !important;
  }
  .order-sm-0 {
    order: 0 !important;
  }
  .order-sm-1 {
    order: 1 !important;
  }
  .order-sm-2 {
    order: 2 !important;
  }
  .order-sm-3 {
    order: 3 !important;
  }
  .order-sm-4 {
    order: 4 !important;
  }
  .order-sm-5 {
    order: 5 !important;
  }
  .order-sm-last {
    order: 6 !important;
  }
  .m-sm-0 {
    margin: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-sm-0 {
    margin-top: 0 !important;
  }
  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }
  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mt-sm-3 {
    margin-top: 1rem !important;
  }
  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mt-sm-5 {
    margin-top: 3rem !important;
  }
  .mt-sm-auto {
    margin-top: auto !important;
  }
  .me-sm-0 {
    margin-right: 0 !important;
  }
  .me-sm-1 {
    margin-right: 0.25rem !important;
  }
  .me-sm-2 {
    margin-right: 0.5rem !important;
  }
  .me-sm-3 {
    margin-right: 1rem !important;
  }
  .me-sm-4 {
    margin-right: 1.5rem !important;
  }
  .me-sm-5 {
    margin-right: 3rem !important;
  }
  .me-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-0 {
    margin-bottom: 0 !important;
  }
  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }
  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }
  .mb-sm-auto {
    margin-bottom: auto !important;
  }
  .ms-sm-0 {
    margin-left: 0 !important;
  }
  .ms-sm-1 {
    margin-left: 0.25rem !important;
  }
  .ms-sm-2 {
    margin-left: 0.5rem !important;
  }
  .ms-sm-3 {
    margin-left: 1rem !important;
  }
  .ms-sm-4 {
    margin-left: 1.5rem !important;
  }
  .ms-sm-5 {
    margin-left: 3rem !important;
  }
  .ms-sm-auto {
    margin-left: auto !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem !important;
  }
  .p-sm-2 {
    padding: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 1rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 3rem !important;
  }
  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-sm-0 {
    padding-top: 0 !important;
  }
  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }
  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pt-sm-3 {
    padding-top: 1rem !important;
  }
  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pt-sm-5 {
    padding-top: 3rem !important;
  }
  .pe-sm-0 {
    padding-right: 0 !important;
  }
  .pe-sm-1 {
    padding-right: 0.25rem !important;
  }
  .pe-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pe-sm-3 {
    padding-right: 1rem !important;
  }
  .pe-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pe-sm-5 {
    padding-right: 3rem !important;
  }
  .pb-sm-0 {
    padding-bottom: 0 !important;
  }
  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }
  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }
  .ps-sm-0 {
    padding-left: 0 !important;
  }
  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }
  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }
  .ps-sm-3 {
    padding-left: 1rem !important;
  }
  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }
  .ps-sm-5 {
    padding-left: 3rem !important;
  }
}
@media (min-width: 768px) {
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-grid {
    display: grid !important;
  }
  .d-md-inline-grid {
    display: inline-grid !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
  .d-md-none {
    display: none !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .justify-content-md-between {
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    justify-content: space-around !important;
  }
  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-md-start {
    align-items: flex-start !important;
  }
  .align-items-md-end {
    align-items: flex-end !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
  .align-items-md-baseline {
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-between {
    align-content: space-between !important;
  }
  .align-content-md-around {
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
  .order-md-first {
    order: -1 !important;
  }
  .order-md-0 {
    order: 0 !important;
  }
  .order-md-1 {
    order: 1 !important;
  }
  .order-md-2 {
    order: 2 !important;
  }
  .order-md-3 {
    order: 3 !important;
  }
  .order-md-4 {
    order: 4 !important;
  }
  .order-md-5 {
    order: 5 !important;
  }
  .order-md-last {
    order: 6 !important;
  }
  .m-md-0 {
    margin: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-md-0 {
    margin-top: 0 !important;
  }
  .mt-md-1 {
    margin-top: 0.25rem !important;
  }
  .mt-md-2 {
    margin-top: 0.5rem !important;
  }
  .mt-md-3 {
    margin-top: 1rem !important;
  }
  .mt-md-4 {
    margin-top: 1.5rem !important;
  }
  .mt-md-5 {
    margin-top: 3rem !important;
  }
  .mt-md-auto {
    margin-top: auto !important;
  }
  .me-md-0 {
    margin-right: 0 !important;
  }
  .me-md-1 {
    margin-right: 0.25rem !important;
  }
  .me-md-2 {
    margin-right: 0.5rem !important;
  }
  .me-md-3 {
    margin-right: 1rem !important;
  }
  .me-md-4 {
    margin-right: 1.5rem !important;
  }
  .me-md-5 {
    margin-right: 3rem !important;
  }
  .me-md-auto {
    margin-right: auto !important;
  }
  .mb-md-0 {
    margin-bottom: 0 !important;
  }
  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-md-3 {
    margin-bottom: 1rem !important;
  }
  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-md-5 {
    margin-bottom: 3rem !important;
  }
  .mb-md-auto {
    margin-bottom: auto !important;
  }
  .ms-md-0 {
    margin-left: 0 !important;
  }
  .ms-md-1 {
    margin-left: 0.25rem !important;
  }
  .ms-md-2 {
    margin-left: 0.5rem !important;
  }
  .ms-md-3 {
    margin-left: 1rem !important;
  }
  .ms-md-4 {
    margin-left: 1.5rem !important;
  }
  .ms-md-5 {
    margin-left: 3rem !important;
  }
  .ms-md-auto {
    margin-left: auto !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }
  .p-md-2 {
    padding: 0.5rem !important;
  }
  .p-md-3 {
    padding: 1rem !important;
  }
  .p-md-4 {
    padding: 1.5rem !important;
  }
  .p-md-5 {
    padding: 3rem !important;
  }
  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-md-0 {
    padding-top: 0 !important;
  }
  .pt-md-1 {
    padding-top: 0.25rem !important;
  }
  .pt-md-2 {
    padding-top: 0.5rem !important;
  }
  .pt-md-3 {
    padding-top: 1rem !important;
  }
  .pt-md-4 {
    padding-top: 1.5rem !important;
  }
  .pt-md-5 {
    padding-top: 3rem !important;
  }
  .pe-md-0 {
    padding-right: 0 !important;
  }
  .pe-md-1 {
    padding-right: 0.25rem !important;
  }
  .pe-md-2 {
    padding-right: 0.5rem !important;
  }
  .pe-md-3 {
    padding-right: 1rem !important;
  }
  .pe-md-4 {
    padding-right: 1.5rem !important;
  }
  .pe-md-5 {
    padding-right: 3rem !important;
  }
  .pb-md-0 {
    padding-bottom: 0 !important;
  }
  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-md-3 {
    padding-bottom: 1rem !important;
  }
  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-md-5 {
    padding-bottom: 3rem !important;
  }
  .ps-md-0 {
    padding-left: 0 !important;
  }
  .ps-md-1 {
    padding-left: 0.25rem !important;
  }
  .ps-md-2 {
    padding-left: 0.5rem !important;
  }
  .ps-md-3 {
    padding-left: 1rem !important;
  }
  .ps-md-4 {
    padding-left: 1.5rem !important;
  }
  .ps-md-5 {
    padding-left: 3rem !important;
  }
}
@media (min-width: 992px) {
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-grid {
    display: grid !important;
  }
  .d-lg-inline-grid {
    display: inline-grid !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
  .d-lg-none {
    display: none !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    justify-content: center !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-lg-start {
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    align-items: center !important;
  }
  .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-between {
    align-content: space-between !important;
  }
  .align-content-lg-around {
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
  .order-lg-first {
    order: -1 !important;
  }
  .order-lg-0 {
    order: 0 !important;
  }
  .order-lg-1 {
    order: 1 !important;
  }
  .order-lg-2 {
    order: 2 !important;
  }
  .order-lg-3 {
    order: 3 !important;
  }
  .order-lg-4 {
    order: 4 !important;
  }
  .order-lg-5 {
    order: 5 !important;
  }
  .order-lg-last {
    order: 6 !important;
  }
  .m-lg-0 {
    margin: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-lg-0 {
    margin-top: 0 !important;
  }
  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mt-lg-3 {
    margin-top: 1rem !important;
  }
  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mt-lg-5 {
    margin-top: 3rem !important;
  }
  .mt-lg-auto {
    margin-top: auto !important;
  }
  .me-lg-0 {
    margin-right: 0 !important;
  }
  .me-lg-1 {
    margin-right: 0.25rem !important;
  }
  .me-lg-2 {
    margin-right: 0.5rem !important;
  }
  .me-lg-3 {
    margin-right: 1rem !important;
  }
  .me-lg-4 {
    margin-right: 1.5rem !important;
  }
  .me-lg-5 {
    margin-right: 3rem !important;
  }
  .me-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-0 {
    margin-bottom: 0 !important;
  }
  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }
  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }
  .mb-lg-auto {
    margin-bottom: auto !important;
  }
  .ms-lg-0 {
    margin-left: 0 !important;
  }
  .ms-lg-1 {
    margin-left: 0.25rem !important;
  }
  .ms-lg-2 {
    margin-left: 0.5rem !important;
  }
  .ms-lg-3 {
    margin-left: 1rem !important;
  }
  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }
  .ms-lg-5 {
    margin-left: 3rem !important;
  }
  .ms-lg-auto {
    margin-left: auto !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem !important;
  }
  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-lg-0 {
    padding-top: 0 !important;
  }
  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pt-lg-3 {
    padding-top: 1rem !important;
  }
  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pt-lg-5 {
    padding-top: 3rem !important;
  }
  .pe-lg-0 {
    padding-right: 0 !important;
  }
  .pe-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pe-lg-3 {
    padding-right: 1rem !important;
  }
  .pe-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pe-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-0 {
    padding-bottom: 0 !important;
  }
  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }
  .ps-lg-0 {
    padding-left: 0 !important;
  }
  .ps-lg-1 {
    padding-left: 0.25rem !important;
  }
  .ps-lg-2 {
    padding-left: 0.5rem !important;
  }
  .ps-lg-3 {
    padding-left: 1rem !important;
  }
  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }
  .ps-lg-5 {
    padding-left: 3rem !important;
  }
}
@media (min-width: 1200px) {
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-grid {
    display: grid !important;
  }
  .d-xl-inline-grid {
    display: inline-grid !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
  .d-xl-none {
    display: none !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    justify-content: center !important;
  }
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xl-start {
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    align-items: center !important;
  }
  .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-between {
    align-content: space-between !important;
  }
  .align-content-xl-around {
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
  .order-xl-first {
    order: -1 !important;
  }
  .order-xl-0 {
    order: 0 !important;
  }
  .order-xl-1 {
    order: 1 !important;
  }
  .order-xl-2 {
    order: 2 !important;
  }
  .order-xl-3 {
    order: 3 !important;
  }
  .order-xl-4 {
    order: 4 !important;
  }
  .order-xl-5 {
    order: 5 !important;
  }
  .order-xl-last {
    order: 6 !important;
  }
  .m-xl-0 {
    margin: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xl-0 {
    margin-top: 0 !important;
  }
  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mt-xl-3 {
    margin-top: 1rem !important;
  }
  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mt-xl-5 {
    margin-top: 3rem !important;
  }
  .mt-xl-auto {
    margin-top: auto !important;
  }
  .me-xl-0 {
    margin-right: 0 !important;
  }
  .me-xl-1 {
    margin-right: 0.25rem !important;
  }
  .me-xl-2 {
    margin-right: 0.5rem !important;
  }
  .me-xl-3 {
    margin-right: 1rem !important;
  }
  .me-xl-4 {
    margin-right: 1.5rem !important;
  }
  .me-xl-5 {
    margin-right: 3rem !important;
  }
  .me-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }
  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }
  .mb-xl-auto {
    margin-bottom: auto !important;
  }
  .ms-xl-0 {
    margin-left: 0 !important;
  }
  .ms-xl-1 {
    margin-left: 0.25rem !important;
  }
  .ms-xl-2 {
    margin-left: 0.5rem !important;
  }
  .ms-xl-3 {
    margin-left: 1rem !important;
  }
  .ms-xl-4 {
    margin-left: 1.5rem !important;
  }
  .ms-xl-5 {
    margin-left: 3rem !important;
  }
  .ms-xl-auto {
    margin-left: auto !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem !important;
  }
  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-xl-0 {
    padding-top: 0 !important;
  }
  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pt-xl-3 {
    padding-top: 1rem !important;
  }
  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pt-xl-5 {
    padding-top: 3rem !important;
  }
  .pe-xl-0 {
    padding-right: 0 !important;
  }
  .pe-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pe-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pe-xl-3 {
    padding-right: 1rem !important;
  }
  .pe-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pe-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }
  .ps-xl-0 {
    padding-left: 0 !important;
  }
  .ps-xl-1 {
    padding-left: 0.25rem !important;
  }
  .ps-xl-2 {
    padding-left: 0.5rem !important;
  }
  .ps-xl-3 {
    padding-left: 1rem !important;
  }
  .ps-xl-4 {
    padding-left: 1.5rem !important;
  }
  .ps-xl-5 {
    padding-left: 3rem !important;
  }
}
@media (min-width: 1400px) {
  .d-xxl-inline {
    display: inline !important;
  }
  .d-xxl-inline-block {
    display: inline-block !important;
  }
  .d-xxl-block {
    display: block !important;
  }
  .d-xxl-grid {
    display: grid !important;
  }
  .d-xxl-inline-grid {
    display: inline-grid !important;
  }
  .d-xxl-table {
    display: table !important;
  }
  .d-xxl-table-row {
    display: table-row !important;
  }
  .d-xxl-table-cell {
    display: table-cell !important;
  }
  .d-xxl-flex {
    display: flex !important;
  }
  .d-xxl-inline-flex {
    display: inline-flex !important;
  }
  .d-xxl-none {
    display: none !important;
  }
  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xxl-row {
    flex-direction: row !important;
  }
  .flex-xxl-column {
    flex-direction: column !important;
  }
  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xxl-center {
    justify-content: center !important;
  }
  .justify-content-xxl-between {
    justify-content: space-between !important;
  }
  .justify-content-xxl-around {
    justify-content: space-around !important;
  }
  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xxl-start {
    align-items: flex-start !important;
  }
  .align-items-xxl-end {
    align-items: flex-end !important;
  }
  .align-items-xxl-center {
    align-items: center !important;
  }
  .align-items-xxl-baseline {
    align-items: baseline !important;
  }
  .align-items-xxl-stretch {
    align-items: stretch !important;
  }
  .align-content-xxl-start {
    align-content: flex-start !important;
  }
  .align-content-xxl-end {
    align-content: flex-end !important;
  }
  .align-content-xxl-center {
    align-content: center !important;
  }
  .align-content-xxl-between {
    align-content: space-between !important;
  }
  .align-content-xxl-around {
    align-content: space-around !important;
  }
  .align-content-xxl-stretch {
    align-content: stretch !important;
  }
  .align-self-xxl-auto {
    align-self: auto !important;
  }
  .align-self-xxl-start {
    align-self: flex-start !important;
  }
  .align-self-xxl-end {
    align-self: flex-end !important;
  }
  .align-self-xxl-center {
    align-self: center !important;
  }
  .align-self-xxl-baseline {
    align-self: baseline !important;
  }
  .align-self-xxl-stretch {
    align-self: stretch !important;
  }
  .order-xxl-first {
    order: -1 !important;
  }
  .order-xxl-0 {
    order: 0 !important;
  }
  .order-xxl-1 {
    order: 1 !important;
  }
  .order-xxl-2 {
    order: 2 !important;
  }
  .order-xxl-3 {
    order: 3 !important;
  }
  .order-xxl-4 {
    order: 4 !important;
  }
  .order-xxl-5 {
    order: 5 !important;
  }
  .order-xxl-last {
    order: 6 !important;
  }
  .m-xxl-0 {
    margin: 0 !important;
  }
  .m-xxl-1 {
    margin: 0.25rem !important;
  }
  .m-xxl-2 {
    margin: 0.5rem !important;
  }
  .m-xxl-3 {
    margin: 1rem !important;
  }
  .m-xxl-4 {
    margin: 1.5rem !important;
  }
  .m-xxl-5 {
    margin: 3rem !important;
  }
  .m-xxl-auto {
    margin: auto !important;
  }
  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xxl-0 {
    margin-top: 0 !important;
  }
  .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }
  .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }
  .mt-xxl-3 {
    margin-top: 1rem !important;
  }
  .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }
  .mt-xxl-5 {
    margin-top: 3rem !important;
  }
  .mt-xxl-auto {
    margin-top: auto !important;
  }
  .me-xxl-0 {
    margin-right: 0 !important;
  }
  .me-xxl-1 {
    margin-right: 0.25rem !important;
  }
  .me-xxl-2 {
    margin-right: 0.5rem !important;
  }
  .me-xxl-3 {
    margin-right: 1rem !important;
  }
  .me-xxl-4 {
    margin-right: 1.5rem !important;
  }
  .me-xxl-5 {
    margin-right: 3rem !important;
  }
  .me-xxl-auto {
    margin-right: auto !important;
  }
  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }
  .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }
  .mb-xxl-auto {
    margin-bottom: auto !important;
  }
  .ms-xxl-0 {
    margin-left: 0 !important;
  }
  .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }
  .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }
  .ms-xxl-3 {
    margin-left: 1rem !important;
  }
  .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }
  .ms-xxl-5 {
    margin-left: 3rem !important;
  }
  .ms-xxl-auto {
    margin-left: auto !important;
  }
  .p-xxl-0 {
    padding: 0 !important;
  }
  .p-xxl-1 {
    padding: 0.25rem !important;
  }
  .p-xxl-2 {
    padding: 0.5rem !important;
  }
  .p-xxl-3 {
    padding: 1rem !important;
  }
  .p-xxl-4 {
    padding: 1.5rem !important;
  }
  .p-xxl-5 {
    padding: 3rem !important;
  }
  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-xxl-0 {
    padding-top: 0 !important;
  }
  .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }
  .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }
  .pt-xxl-3 {
    padding-top: 1rem !important;
  }
  .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }
  .pt-xxl-5 {
    padding-top: 3rem !important;
  }
  .pe-xxl-0 {
    padding-right: 0 !important;
  }
  .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }
  .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }
  .pe-xxl-3 {
    padding-right: 1rem !important;
  }
  .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }
  .pe-xxl-5 {
    padding-right: 3rem !important;
  }
  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }
  .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }
  .ps-xxl-0 {
    padding-left: 0 !important;
  }
  .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }
  .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }
  .ps-xxl-3 {
    padding-left: 1rem !important;
  }
  .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }
  .ps-xxl-5 {
    padding-left: 3rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-grid {
    display: grid !important;
  }
  .d-print-inline-grid {
    display: inline-grid !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
  .d-print-none {
    display: none !important;
  }
}

/*# sourceMappingURL=bootstrap-grid.css.map */`, "",{"version":3,"sources":["webpack://./src/css/bootstrap-grid.css"],"names":[],"mappings":"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c;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;EAChB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;AACF;AACA;EACE;IACE,YAAY;EACd;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;EAChB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;AACF;AACA;EACE;IACE,YAAY;EACd;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;EAChB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;AACF;AACA;EACE;IACE,YAAY;EACd;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;EAChB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;AACF;AACA;EACE;IACE,YAAY;EACd;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;EAChB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;AACF;AACA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;EAC/B,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,+BAA+B;EAC/B,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,8BAA8B;EAC9B,iCAAiC;AACnC;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;EACE,iCAAiC;EACjC,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;EAChC,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,gCAAgC;EAChC,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,+BAA+B;EAC/B,kCAAkC;AACpC;;AAEA;EACE,8BAA8B;EAC9B,iCAAiC;AACnC;;AAEA;EACE,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;EAC9B,iCAAiC;AACnC;;AAEA;EACE,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,uCAAuC;EACzC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,wBAAwB;IACxB,2BAA2B;EAC7B;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,iCAAiC;IACjC,gCAAgC;EAClC;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,yBAAyB;IACzB,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,kCAAkC;EACpC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,uCAAuC;EACzC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,wBAAwB;IACxB,2BAA2B;EAC7B;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,iCAAiC;IACjC,gCAAgC;EAClC;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,yBAAyB;IACzB,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,kCAAkC;EACpC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,uCAAuC;EACzC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,wBAAwB;IACxB,2BAA2B;EAC7B;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,iCAAiC;IACjC,gCAAgC;EAClC;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,yBAAyB;IACzB,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,kCAAkC;EACpC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,uCAAuC;EACzC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,wBAAwB;IACxB,2BAA2B;EAC7B;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,iCAAiC;IACjC,gCAAgC;EAClC;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,yBAAyB;IACzB,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,kCAAkC;EACpC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,uCAAuC;EACzC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,wBAAwB;IACxB,2BAA2B;EAC7B;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,iCAAiC;IACjC,gCAAgC;EAClC;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,yBAAyB;IACzB,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,kCAAkC;EACpC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wBAAwB;EAC1B;AACF;;AAEA,6CAA6C","sourcesContent":["/*!\n * Bootstrap Grid v5.3.1 (https://getbootstrap.com/)\n * Copyright 2011-2023 The Bootstrap Authors\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n.container,\n.container-fluid,\n.container-xxl,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 1400px) {\n  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1320px;\n  }\n}\n:root {\n  --bs-breakpoint-xs: 0;\n  --bs-breakpoint-sm: 576px;\n  --bs-breakpoint-md: 768px;\n  --bs-breakpoint-lg: 992px;\n  --bs-breakpoint-xl: 1200px;\n  --bs-breakpoint-xxl: 1400px;\n}\n\n.row {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * var(--bs-gutter-y));\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\n}\n.row > * {\n  box-sizing: border-box;\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n\n.col {\n  flex: 1 0 0%;\n}\n\n.row-cols-auto > * {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n.row-cols-1 > * {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.row-cols-2 > * {\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.row-cols-3 > * {\n  flex: 0 0 auto;\n  width: 33.3333333333%;\n}\n\n.row-cols-4 > * {\n  flex: 0 0 auto;\n  width: 25%;\n}\n\n.row-cols-5 > * {\n  flex: 0 0 auto;\n  width: 20%;\n}\n\n.row-cols-6 > * {\n  flex: 0 0 auto;\n  width: 16.6666666667%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n.col-1 {\n  flex: 0 0 auto;\n  width: 8.33333333%;\n}\n\n.col-2 {\n  flex: 0 0 auto;\n  width: 16.66666667%;\n}\n\n.col-3 {\n  flex: 0 0 auto;\n  width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}\n\n.col-5 {\n  flex: 0 0 auto;\n  width: 41.66666667%;\n}\n\n.col-6 {\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 auto;\n  width: 58.33333333%;\n}\n\n.col-8 {\n  flex: 0 0 auto;\n  width: 66.66666667%;\n}\n\n.col-9 {\n  flex: 0 0 auto;\n  width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 auto;\n  width: 83.33333333%;\n}\n\n.col-11 {\n  flex: 0 0 auto;\n  width: 91.66666667%;\n}\n\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.g-0,\n.gx-0 {\n  --bs-gutter-x: 0;\n}\n\n.g-0,\n.gy-0 {\n  --bs-gutter-y: 0;\n}\n\n.g-1,\n.gx-1 {\n  --bs-gutter-x: 0.25rem;\n}\n\n.g-1,\n.gy-1 {\n  --bs-gutter-y: 0.25rem;\n}\n\n.g-2,\n.gx-2 {\n  --bs-gutter-x: 0.5rem;\n}\n\n.g-2,\n.gy-2 {\n  --bs-gutter-y: 0.5rem;\n}\n\n.g-3,\n.gx-3 {\n  --bs-gutter-x: 1rem;\n}\n\n.g-3,\n.gy-3 {\n  --bs-gutter-y: 1rem;\n}\n\n.g-4,\n.gx-4 {\n  --bs-gutter-x: 1.5rem;\n}\n\n.g-4,\n.gy-4 {\n  --bs-gutter-y: 1.5rem;\n}\n\n.g-5,\n.gx-5 {\n  --bs-gutter-x: 3rem;\n}\n\n.g-5,\n.gy-5 {\n  --bs-gutter-y: 3rem;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex: 1 0 0%;\n  }\n  .row-cols-sm-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-sm-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-sm-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-sm-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-sm-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-sm-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-sm-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-sm-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-sm-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-sm-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-sm-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-sm-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-sm-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-sm-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-sm-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-sm-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-sm-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-sm-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-sm-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-sm-0,\n  .gx-sm-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-sm-0,\n  .gy-sm-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-sm-1,\n  .gx-sm-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-sm-1,\n  .gy-sm-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-sm-2,\n  .gx-sm-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-sm-2,\n  .gy-sm-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-sm-3,\n  .gx-sm-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-sm-3,\n  .gy-sm-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-sm-4,\n  .gx-sm-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-sm-4,\n  .gy-sm-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-sm-5,\n  .gx-sm-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-sm-5,\n  .gy-sm-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    flex: 1 0 0%;\n  }\n  .row-cols-md-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-md-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-md-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-md-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-md-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-md-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-md-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-md-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-md-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-md-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-md-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-md-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-md-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-md-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-md-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-md-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-md-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-md-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-md-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-md-0,\n  .gx-md-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-md-0,\n  .gy-md-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-md-1,\n  .gx-md-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-md-1,\n  .gy-md-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-md-2,\n  .gx-md-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-md-2,\n  .gy-md-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-md-3,\n  .gx-md-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-md-3,\n  .gy-md-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-md-4,\n  .gx-md-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-md-4,\n  .gy-md-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-md-5,\n  .gx-md-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-md-5,\n  .gy-md-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    flex: 1 0 0%;\n  }\n  .row-cols-lg-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-lg-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-lg-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-lg-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-lg-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-lg-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-lg-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-lg-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-lg-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-lg-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-lg-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-lg-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-lg-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-lg-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-lg-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-lg-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-lg-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-lg-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-lg-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-lg-0,\n  .gx-lg-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-lg-0,\n  .gy-lg-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-lg-1,\n  .gx-lg-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-lg-1,\n  .gy-lg-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-lg-2,\n  .gx-lg-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-lg-2,\n  .gy-lg-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-lg-3,\n  .gx-lg-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-lg-3,\n  .gy-lg-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-lg-4,\n  .gx-lg-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-lg-4,\n  .gy-lg-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-lg-5,\n  .gx-lg-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-lg-5,\n  .gy-lg-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    flex: 1 0 0%;\n  }\n  .row-cols-xl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-xl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-xl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-xl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-xl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-xl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-xl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-xl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-xl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-xl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-xl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-xl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-xl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-xl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-xl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-xl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-xl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-xl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-xl-0,\n  .gx-xl-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-xl-0,\n  .gy-xl-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-xl-1,\n  .gx-xl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-xl-1,\n  .gy-xl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-xl-2,\n  .gx-xl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-xl-2,\n  .gy-xl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-xl-3,\n  .gx-xl-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-xl-3,\n  .gy-xl-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-xl-4,\n  .gx-xl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-xl-4,\n  .gy-xl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-xl-5,\n  .gx-xl-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-xl-5,\n  .gy-xl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1400px) {\n  .col-xxl {\n    flex: 1 0 0%;\n  }\n  .row-cols-xxl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-xxl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-xxl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-xxl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-xxl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-xxl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-xxl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-xxl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-xxl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-xxl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xxl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-xxl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-xxl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-xxl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-xxl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-xxl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-xxl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-xxl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-xxl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-xxl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-xxl-0 {\n    margin-left: 0;\n  }\n  .offset-xxl-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-xxl-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-xxl-3 {\n    margin-left: 25%;\n  }\n  .offset-xxl-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-xxl-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-xxl-6 {\n    margin-left: 50%;\n  }\n  .offset-xxl-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-xxl-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-xxl-9 {\n    margin-left: 75%;\n  }\n  .offset-xxl-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-xxl-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-xxl-0,\n  .gx-xxl-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-xxl-0,\n  .gy-xxl-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-xxl-1,\n  .gx-xxl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-xxl-1,\n  .gy-xxl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-xxl-2,\n  .gx-xxl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-xxl-2,\n  .gy-xxl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-xxl-3,\n  .gx-xxl-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-xxl-3,\n  .gy-xxl-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-xxl-4,\n  .gx-xxl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-xxl-4,\n  .gy-xxl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-xxl-5,\n  .gx-xxl-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-xxl-5,\n  .gy-xxl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-grid {\n  display: grid !important;\n}\n\n.d-inline-grid {\n  display: inline-grid !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: inline-flex !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n\n.flex-row {\n  flex-direction: row !important;\n}\n\n.flex-column {\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  justify-content: space-around !important;\n}\n\n.justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n\n.align-items-start {\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  align-content: center !important;\n}\n\n.align-content-between {\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  align-self: auto !important;\n}\n\n.align-self-start {\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  align-self: stretch !important;\n}\n\n.order-first {\n  order: -1 !important;\n}\n\n.order-0 {\n  order: 0 !important;\n}\n\n.order-1 {\n  order: 1 !important;\n}\n\n.order-2 {\n  order: 2 !important;\n}\n\n.order-3 {\n  order: 3 !important;\n}\n\n.order-4 {\n  order: 4 !important;\n}\n\n.order-5 {\n  order: 5 !important;\n}\n\n.order-last {\n  order: 6 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.mx-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n\n.mx-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important;\n}\n\n.mx-3 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mt-3 {\n  margin-top: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 3rem !important;\n}\n\n.mt-auto {\n  margin-top: auto !important;\n}\n\n.me-0 {\n  margin-right: 0 !important;\n}\n\n.me-1 {\n  margin-right: 0.25rem !important;\n}\n\n.me-2 {\n  margin-right: 0.5rem !important;\n}\n\n.me-3 {\n  margin-right: 1rem !important;\n}\n\n.me-4 {\n  margin-right: 1.5rem !important;\n}\n\n.me-5 {\n  margin-right: 3rem !important;\n}\n\n.me-auto {\n  margin-right: auto !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 3rem !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.ms-0 {\n  margin-left: 0 !important;\n}\n\n.ms-1 {\n  margin-left: 0.25rem !important;\n}\n\n.ms-2 {\n  margin-left: 0.5rem !important;\n}\n\n.ms-3 {\n  margin-left: 1rem !important;\n}\n\n.ms-4 {\n  margin-left: 1.5rem !important;\n}\n\n.ms-5 {\n  margin-left: 3rem !important;\n}\n\n.ms-auto {\n  margin-left: auto !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.px-1 {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important;\n}\n\n.px-2 {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important;\n}\n\n.px-3 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pt-3 {\n  padding-top: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 3rem !important;\n}\n\n.pe-0 {\n  padding-right: 0 !important;\n}\n\n.pe-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pe-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pe-3 {\n  padding-right: 1rem !important;\n}\n\n.pe-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pe-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 3rem !important;\n}\n\n.ps-0 {\n  padding-left: 0 !important;\n}\n\n.ps-1 {\n  padding-left: 0.25rem !important;\n}\n\n.ps-2 {\n  padding-left: 0.5rem !important;\n}\n\n.ps-3 {\n  padding-left: 1rem !important;\n}\n\n.ps-4 {\n  padding-left: 1.5rem !important;\n}\n\n.ps-5 {\n  padding-left: 3rem !important;\n}\n\n@media (min-width: 576px) {\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-grid {\n    display: grid !important;\n  }\n  .d-sm-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-sm-none {\n    display: none !important;\n  }\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-sm-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n  .order-sm-first {\n    order: -1 !important;\n  }\n  .order-sm-0 {\n    order: 0 !important;\n  }\n  .order-sm-1 {\n    order: 1 !important;\n  }\n  .order-sm-2 {\n    order: 2 !important;\n  }\n  .order-sm-3 {\n    order: 3 !important;\n  }\n  .order-sm-4 {\n    order: 4 !important;\n  }\n  .order-sm-5 {\n    order: 5 !important;\n  }\n  .order-sm-last {\n    order: 6 !important;\n  }\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-sm-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-sm-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-sm-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mt-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-sm-auto {\n    margin-top: auto !important;\n  }\n  .me-sm-0 {\n    margin-right: 0 !important;\n  }\n  .me-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .me-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .me-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-sm-0 {\n    margin-left: 0 !important;\n  }\n  .ms-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-sm-auto {\n    margin-left: auto !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-sm-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-sm-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-sm-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-sm-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-sm-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pt-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pe-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-sm-0 {\n    padding-left: 0 !important;\n  }\n  .ps-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-sm-5 {\n    padding-left: 3rem !important;\n  }\n}\n@media (min-width: 768px) {\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-grid {\n    display: grid !important;\n  }\n  .d-md-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-md-none {\n    display: none !important;\n  }\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-md-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    align-self: center !important;\n  }\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n  .order-md-first {\n    order: -1 !important;\n  }\n  .order-md-0 {\n    order: 0 !important;\n  }\n  .order-md-1 {\n    order: 1 !important;\n  }\n  .order-md-2 {\n    order: 2 !important;\n  }\n  .order-md-3 {\n    order: 3 !important;\n  }\n  .order-md-4 {\n    order: 4 !important;\n  }\n  .order-md-5 {\n    order: 5 !important;\n  }\n  .order-md-last {\n    order: 6 !important;\n  }\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-md-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-md-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-md-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-md-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-md-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-md-0 {\n    margin-top: 0 !important;\n  }\n  .mt-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-md-auto {\n    margin-top: auto !important;\n  }\n  .me-md-0 {\n    margin-right: 0 !important;\n  }\n  .me-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-md-3 {\n    margin-right: 1rem !important;\n  }\n  .me-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-md-5 {\n    margin-right: 3rem !important;\n  }\n  .me-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-md-0 {\n    margin-left: 0 !important;\n  }\n  .ms-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-md-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-md-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-md-auto {\n    margin-left: auto !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-md-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-md-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-md-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-md-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-md-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-md-0 {\n    padding-top: 0 !important;\n  }\n  .pt-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-md-0 {\n    padding-right: 0 !important;\n  }\n  .pe-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-md-0 {\n    padding-left: 0 !important;\n  }\n  .ps-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-md-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-md-5 {\n    padding-left: 3rem !important;\n  }\n}\n@media (min-width: 992px) {\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-grid {\n    display: grid !important;\n  }\n  .d-lg-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-lg-none {\n    display: none !important;\n  }\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-lg-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n  .order-lg-first {\n    order: -1 !important;\n  }\n  .order-lg-0 {\n    order: 0 !important;\n  }\n  .order-lg-1 {\n    order: 1 !important;\n  }\n  .order-lg-2 {\n    order: 2 !important;\n  }\n  .order-lg-3 {\n    order: 3 !important;\n  }\n  .order-lg-4 {\n    order: 4 !important;\n  }\n  .order-lg-5 {\n    order: 5 !important;\n  }\n  .order-lg-last {\n    order: 6 !important;\n  }\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-lg-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-lg-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-lg-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mt-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-lg-auto {\n    margin-top: auto !important;\n  }\n  .me-lg-0 {\n    margin-right: 0 !important;\n  }\n  .me-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .me-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .me-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-lg-0 {\n    margin-left: 0 !important;\n  }\n  .ms-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-lg-auto {\n    margin-left: auto !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-lg-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-lg-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-lg-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-lg-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-lg-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pt-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pe-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-lg-0 {\n    padding-left: 0 !important;\n  }\n  .ps-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-lg-5 {\n    padding-left: 3rem !important;\n  }\n}\n@media (min-width: 1200px) {\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-grid {\n    display: grid !important;\n  }\n  .d-xl-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-xl-none {\n    display: none !important;\n  }\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-xl-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n  .order-xl-first {\n    order: -1 !important;\n  }\n  .order-xl-0 {\n    order: 0 !important;\n  }\n  .order-xl-1 {\n    order: 1 !important;\n  }\n  .order-xl-2 {\n    order: 2 !important;\n  }\n  .order-xl-3 {\n    order: 3 !important;\n  }\n  .order-xl-4 {\n    order: 4 !important;\n  }\n  .order-xl-5 {\n    order: 5 !important;\n  }\n  .order-xl-last {\n    order: 6 !important;\n  }\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-xl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-xl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-xl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mt-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-xl-auto {\n    margin-top: auto !important;\n  }\n  .me-xl-0 {\n    margin-right: 0 !important;\n  }\n  .me-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .me-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .me-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-xl-0 {\n    margin-left: 0 !important;\n  }\n  .ms-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-xl-auto {\n    margin-left: auto !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-xl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-xl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-xl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-xl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-xl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pt-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pe-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-xl-0 {\n    padding-left: 0 !important;\n  }\n  .ps-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-xl-5 {\n    padding-left: 3rem !important;\n  }\n}\n@media (min-width: 1400px) {\n  .d-xxl-inline {\n    display: inline !important;\n  }\n  .d-xxl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xxl-block {\n    display: block !important;\n  }\n  .d-xxl-grid {\n    display: grid !important;\n  }\n  .d-xxl-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-xxl-table {\n    display: table !important;\n  }\n  .d-xxl-table-row {\n    display: table-row !important;\n  }\n  .d-xxl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xxl-flex {\n    display: flex !important;\n  }\n  .d-xxl-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-xxl-none {\n    display: none !important;\n  }\n  .flex-xxl-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-xxl-row {\n    flex-direction: row !important;\n  }\n  .flex-xxl-column {\n    flex-direction: column !important;\n  }\n  .flex-xxl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xxl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xxl-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-xxl-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-xxl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-xxl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-xxl-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-xxl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xxl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-xxl-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xxl-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xxl-center {\n    justify-content: center !important;\n  }\n  .justify-content-xxl-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-xxl-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-xxl-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-xxl-start {\n    align-items: flex-start !important;\n  }\n  .align-items-xxl-end {\n    align-items: flex-end !important;\n  }\n  .align-items-xxl-center {\n    align-items: center !important;\n  }\n  .align-items-xxl-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-xxl-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-xxl-start {\n    align-content: flex-start !important;\n  }\n  .align-content-xxl-end {\n    align-content: flex-end !important;\n  }\n  .align-content-xxl-center {\n    align-content: center !important;\n  }\n  .align-content-xxl-between {\n    align-content: space-between !important;\n  }\n  .align-content-xxl-around {\n    align-content: space-around !important;\n  }\n  .align-content-xxl-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-xxl-auto {\n    align-self: auto !important;\n  }\n  .align-self-xxl-start {\n    align-self: flex-start !important;\n  }\n  .align-self-xxl-end {\n    align-self: flex-end !important;\n  }\n  .align-self-xxl-center {\n    align-self: center !important;\n  }\n  .align-self-xxl-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-xxl-stretch {\n    align-self: stretch !important;\n  }\n  .order-xxl-first {\n    order: -1 !important;\n  }\n  .order-xxl-0 {\n    order: 0 !important;\n  }\n  .order-xxl-1 {\n    order: 1 !important;\n  }\n  .order-xxl-2 {\n    order: 2 !important;\n  }\n  .order-xxl-3 {\n    order: 3 !important;\n  }\n  .order-xxl-4 {\n    order: 4 !important;\n  }\n  .order-xxl-5 {\n    order: 5 !important;\n  }\n  .order-xxl-last {\n    order: 6 !important;\n  }\n  .m-xxl-0 {\n    margin: 0 !important;\n  }\n  .m-xxl-1 {\n    margin: 0.25rem !important;\n  }\n  .m-xxl-2 {\n    margin: 0.5rem !important;\n  }\n  .m-xxl-3 {\n    margin: 1rem !important;\n  }\n  .m-xxl-4 {\n    margin: 1.5rem !important;\n  }\n  .m-xxl-5 {\n    margin: 3rem !important;\n  }\n  .m-xxl-auto {\n    margin: auto !important;\n  }\n  .mx-xxl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-xxl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-xxl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-xxl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-xxl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-xxl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-xxl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-xxl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-xxl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-xxl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-xxl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-xxl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-xxl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-xxl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-xxl-0 {\n    margin-top: 0 !important;\n  }\n  .mt-xxl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-xxl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-xxl-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-xxl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-xxl-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-xxl-auto {\n    margin-top: auto !important;\n  }\n  .me-xxl-0 {\n    margin-right: 0 !important;\n  }\n  .me-xxl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-xxl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-xxl-3 {\n    margin-right: 1rem !important;\n  }\n  .me-xxl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-xxl-5 {\n    margin-right: 3rem !important;\n  }\n  .me-xxl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xxl-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-xxl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-xxl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xxl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xxl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-xxl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-xxl-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-xxl-0 {\n    margin-left: 0 !important;\n  }\n  .ms-xxl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-xxl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-xxl-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-xxl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-xxl-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-xxl-auto {\n    margin-left: auto !important;\n  }\n  .p-xxl-0 {\n    padding: 0 !important;\n  }\n  .p-xxl-1 {\n    padding: 0.25rem !important;\n  }\n  .p-xxl-2 {\n    padding: 0.5rem !important;\n  }\n  .p-xxl-3 {\n    padding: 1rem !important;\n  }\n  .p-xxl-4 {\n    padding: 1.5rem !important;\n  }\n  .p-xxl-5 {\n    padding: 3rem !important;\n  }\n  .px-xxl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-xxl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-xxl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-xxl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-xxl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-xxl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-xxl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-xxl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-xxl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-xxl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-xxl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-xxl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-xxl-0 {\n    padding-top: 0 !important;\n  }\n  .pt-xxl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-xxl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-xxl-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-xxl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-xxl-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-xxl-0 {\n    padding-right: 0 !important;\n  }\n  .pe-xxl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-xxl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-xxl-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-xxl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-xxl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xxl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-xxl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-xxl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-xxl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-xxl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-xxl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-xxl-0 {\n    padding-left: 0 !important;\n  }\n  .ps-xxl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-xxl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-xxl-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-xxl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-xxl-5 {\n    padding-left: 3rem !important;\n  }\n}\n@media print {\n  .d-print-inline {\n    display: inline !important;\n  }\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n  .d-print-block {\n    display: block !important;\n  }\n  .d-print-grid {\n    display: grid !important;\n  }\n  .d-print-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-print-table {\n    display: table !important;\n  }\n  .d-print-table-row {\n    display: table-row !important;\n  }\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n  .d-print-flex {\n    display: flex !important;\n  }\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-print-none {\n    display: none !important;\n  }\n}\n\n/*# sourceMappingURL=bootstrap-grid.css.map */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}
.body-wrapper {
  overflow: hidden;
  width: 100%;
  position: relative;
}
a {
  text-decoration: none;
  color: inherit;
}
ul,
ol {
  list-style-type: none;
}
button {
  transition: 0.2s;
}
`, "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;AACA;;;EAGE,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;;EAEE,qBAAqB;AACvB;AACA;EACE,gBAAgB;AAClB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: inherit;\r\n}\r\nhtml {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  overflow-x: hidden;\r\n}\r\n.body-wrapper {\r\n  overflow: hidden;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\nul,\r\nol {\r\n  list-style-type: none;\r\n}\r\nbutton {\r\n  transition: 0.2s;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module 'none'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/* header */
.header {
  height: 128px;
  align-items: center;
}

.header__main-flex {
  display: flex;
  align-items: center;
  gap: 64px;
  justify-content: flex-end;
}
@media (max-width: 1200px) {
  .header__main-flex {
    gap: 24px;
    justify-content: center;
  }
}
@media (max-width: 993px) {
  .header__main-flex {
    justify-content: flex-end;
  }
}

.menu-img {
  position: relative;
}

.header__mobile {
  display: none;
  background-color: #f5f5f5;
  padding: 16px 8px;
  width: 200px;
}
@media (max-width: 992px) {
  .header__mobile {
    display: block;
    position: absolute;
    top: 35px;
    top: -210px;
    color: var(--text-primary, black);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    border-radius: 12px;
    transition: 1s;
  }
}

.header__mobile.open {
  transform: translateY(140%);
}

.header__mobile-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

@media (max-width: 992px) {
  .header__nav,
  .header__number {
    display: none;
  }
}

.menu-btn {
  display: none;
}
@media (max-width: 992px) {
  .menu-btn {
    display: block;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
}

.menu-btn:hover {
  background: #fff;
}

.menu__list-flex {
  display: flex;
  gap: 32px;
}
@media (max-width: 992px) {
  .menu__list-flex {
    flex-direction: column;
    gap: 16px;
  }
}

.menu__list-el {
  border-bottom: 2px solid #fff;
  transition: 0.5s;
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Ссылки и кнопки/14 px */
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 22.4px */
}

.menu__list-el:hover {
  border-bottom: 2px solid #0669ff;
  transition: 0.5s;
}

.header__number {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Ссылки и кнопки/16 px */
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
}

.header__number-flex {
  display: flex;
  align-items: center;
  gap: 8px;
}
@media (max-width: 992px) {
  .header__number-flex {
    display: none;
  }
}

/* header */
/* mainCard */
.mainCard {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 688px;
}
@media (max-width: 992px) {
  .mainCard {
    background-size: cover;
  }
}
@media (max-width: 768px) {
  .mainCard {
    height: 500px;
  }
}
@media (max-width: 576px) {
  .mainCard {
    background-size: cover;
  }
}

.mainCard-flex {
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
}

.mainCard__title {
  color: var(--bg-white, #fff);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);
  /* Header/H2 */
  font-family: Manrope;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
}
@media (max-width: 992px) {
  .mainCard__title {
    color: var(--bg-white, #fff);
    /* Header/H2 */
    font-family: Manrope;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 57.6px */
  }
}
@media (max-width: 768px) {
  .mainCard__title {
    color: var(--bg-white, #fff);
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);
    /* Header/H2 */
    font-family: Manrope;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 57.6px */
  }
}
@media (max-width: 576px) {
  .mainCard__title {
    color: var(--text-primary, #fff);
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    /* Header/H3 */
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 44.8px */
  }
}

.mainCard__text {
  color: var(--bg-white, #fff);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);
  /* Tittle/T2 */
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
}
@media (max-width: 992px) {
  .mainCard__text {
    color: var(--bg-white, #fff);
    /* Tittle/T2 */
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
  }
}
@media (max-width: 768px) {
  .mainCard__text {
    color: var(--bg-white, #fff);
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);
    /* Tittle/T2 */
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
  }
}
@media (max-width: 576px) {
  .mainCard__text {
    color: var(--text-primary, #fff);
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    /* Body/B1 */
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 28.8px */
  }
}

.mainCard__btn {
  border-radius: 12px;
  background: var(--primary-100, #0669ff);
  display: flex;
  height: 56px;
  padding: 0px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  color: #fff;
  text-align: center;
  /* Links&Button/16px */
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
  transition: 0.2s;
}

.mainCard__btn:hover {
  transition: 0.2s;
  box-shadow: 0px 12px 24px 0px rgba(0, 53, 128, 0.35);
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), #004ab2;
  cursor: pointer;
}

/* mainCard */
/* infoCard */
.infoCard {
  background-color: #f5f5f5;
  padding-top: 96px;
  padding-bottom: 96px;
}
@media (max-width: 768px) {
  .infoCard {
    padding-top: 64px;
    padding-bottom: 64px;
  }
}

.infoCard__imgBlock {
  padding: 0;
  position: relative;
}
@media (max-width: 768px) {
  .infoCard__imgBlock {
    margin: 0 auto;
  }
}

.infoCard-img {
  padding-left: 0;
  width: 600px;
  height: 600px;
  margin: auto 0;
}
@media (max-width: 1400px) {
  .infoCard-img {
    width: 530px;
    height: 550px;
  }
}
@media (max-width: 1200px) {
  .infoCard-img {
    width: 420px;
    height: 560px;
  }
}
@media (max-width: 992px) {
  .infoCard-img {
    width: 330px;
    height: 440px;
  }
}
@media (max-width: 768px) {
  .infoCard-img {
    display: none;
  }
}

.infoCard__small-img {
  display: none;
}
@media (max-width: 768px) {
  .infoCard__small-img {
    width: 290px;
    height: 210px;
    display: block;
    margin: 0 auto;
    margin-bottom: 24px;
  }
}

.infoCard__mainBlock {
  margin: auto 0;
}

.infoCard__title {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Заголовки/H2 */
  font-family: Manrope;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  margin-bottom: 32px;
}
@media (max-width: 992px) {
  .infoCard__title {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    /* Header/H3 */
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 44.8px */
  }
}
@media (max-width: 768px) {
  .infoCard__title {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    /* Header/H4 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
    text-align: center;
  }
}
@media (max-width: 576px) {
  .infoCard__title {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    text-align: center;
    /* Header/H4 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
  }
}

@media (max-width: 768px) {
  .empty {
    display: none;
  }
}

.infoCard__text {
  color: var(--text-50, rgba(0, 0, 0, 0.5));
  /* Body (Основной текст) / B1 */
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
  margin-bottom: 64px;
}
@media (max-width: 992px) {
  .infoCard__text {
    color: var(--text-50, rgba(0, 0, 0, 0.5));
    /* Body/B2 */
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
  }
}
@media (max-width: 768px) {
  .infoCard__text {
    color: var(--text-50, rgba(0, 0, 0, 0.5));
    /* Body/B2 */
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
  }
}
@media (max-width: 576px) {
  .infoCard__text {
    color: var(--text-50, rgba(0, 0, 0, 0.5));
    /* Body/B2 */
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
  }
}

.infoCard__list {
  margin: 0 auto;
  gap: 24px;
}

.infoCard__list-el {
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 16px;
  background: var(--primary-10, rgba(6, 105, 255, 0.1));
}
@media (max-width: 992px) {
  .infoCard__list-el {
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 16px;
    background: rgba(6, 105, 255, 0.15);
  }
}
@media (max-width: 768px) {
  .infoCard__list-el {
    display: flex;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0;
    border-radius: 16px;
    background: var(--primary-10, rgba(6, 105, 255, 0.1));
  }
}
@media (max-width: 576px) {
  .infoCard__list-el {
    display: flex;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
    background: var(--primary-10, rgba(6, 105, 255, 0.1));
  }
}

.infoCard__list-title {
  color: var(--primary-100, #0669ff);
  /* Заголовки/H3 (Bold) */
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 44.8px */
}
@media (max-width: 576px) {
  .infoCard__list-title {
    margin: 0 auto;
  }
}

.infoCard__list-text {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Body (Основной текст) / B1 */
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
@media (max-width: 576px) {
  .infoCard__list-text {
    margin: 0 auto;
    text-align: center;
  }
}

/* infoCard */
/* tableBlock */
.tableBlock {
  background-color: #fff;
  padding-top: 96px;
  padding-bottom: 96px;
}

.tableBlock__title {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  text-align: center;
  /* Заголовки/H2 */
  font-family: Manrope;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  margin-bottom: 64px;
}
@media (max-width: 1200px) {
  .tableBlock__title {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    text-align: center;
    /* Header/H3 */
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 44.8px */
  }
}

.tableBlock__table {
  gap: 24px;
  margin: 0 auto;
}

.tableBlock__table-el {
  border-radius: 16px;
  background: var(--primary-10, rgba(6, 105, 255, 0.1));
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
}

.tableBlock__table-text {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
}

/* tableBlock */
/* offer */
.offer {
  background-color: #f5f5f5;
  padding: 96px 72px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  justify-content: center;
  align-items: center;
}
.offer .swiper-slide {
  background-color: #fff;
  justify-content: flex-start;
  gap: 130px;
  border-radius: 32px;
  background: var(--bg-white, #fff);
}
@media (max-width: 1200px) {
  .offer .swiper-slide {
    gap: 64px;
  }
}
@media (max-width: 992px) {
  .offer .swiper-slide {
    flex-direction: column;
    padding-top: 32px;
    padding-bottom: 32px;
  }
}
@media (max-width: 576px) {
  .offer {
    padding: 16px 8px;
  }
}

.offer__title {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  text-align: center;
  /* Заголовки/H2 */
  font-family: Manrope;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
}
@media (max-width: 1200px) {
  .offer__title {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    text-align: center;
    /* Header/H3 */
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 44.8px */
  }
}
@media (max-width: 768px) {
  .offer__title {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    text-align: center;
    /* Header/H4 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
  }
}

.offer__main {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.offer__swiper {
  overflow: hidden;
}

.offer__swiper-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.offer__mainBlock-list-Top-el-text {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Body (Основной текст) / B1 */
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
}
@media (max-width: 1200px) {
  .offer__mainBlock-list-Top-el-text {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    /* Body/B2 */
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
  }
}
@media (max-width: 993px) {
  .offer__mainBlock-list-Top-el-text {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    /* Body/B3 */
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
}

.offer__mainBlock-list-Bot-el-text {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Body (Основной текст)/B3 */
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
}

.offer__mainBlock-list-Bot {
  margin-bottom: 40px;
}

.offer__price {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Заголовки/H3 */
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 44.8px */
  margin-bottom: 24px;
}

.offer__price-span {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Body (Основной текст) / B1 */
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}

.offer__mainBlock-title {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Заголовки/H3 */
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 44.8px */
  margin-bottom: 24px;
}
@media (max-width: 1200px) {
  .offer__mainBlock-title {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    /* Tittle/T1 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
  }
}

@media (max-width: 1200px) {
  .offer__swiper-img {
    width: 398px;
    height: 584px;
  }
}
@media (max-width: 768px) {
  .offer__swiper-img {
    display: none;
  }
}

.offer__swiper-img-mini {
  display: none;
}
@media (max-width: 1200px) {
  .offer__swiper-img-mini {
    display: none;
  }
}
@media (max-width: 992px) {
  .offer__swiper-img-mini {
    display: none;
  }
}

.offer__mainBlock-list-Top {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
}

.offer__mainBlock-list-Top-el {
  display: flex;
  align-items: center;
  gap: 12px;
}

.offer__mainBlock-list-Bot {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
@media (max-width: 576px) {
  .offer__mainBlock-list-Bot {
    padding-left: 14px;
  }
}

.offer__mainBlock-list-Bot-el {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 12px;
}

@media (max-width: 576px) {
  .offer__mainBlock {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}

.offer-btn {
  display: flex;
  height: 56px;
  padding: 0px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 12px;
  background: var(--primary-100, #0669ff);
  border: none;
  color: #fff;
  text-align: center;
  /* Links&Button/16px */
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
}
@media (max-width: 576px) {
  .offer-btn {
    width: 60%;
    margin: 0 auto;
  }
}

.offer-btn:hover {
  transition: 0.2s;
  box-shadow: 0px 12px 24px 0px rgba(0, 53, 128, 0.35);
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), #004ab2;
  cursor: pointer;
}

.offer__s-button-prev,
.offer__s-button-next {
  cursor: pointer;
}

.offer__s-button-prev rect,
.offer__s-button-next rect {
  transition: 0.3s;
}
.offer__s-button-prev rect:hover,
.offer__s-button-next rect:hover {
  fill: #004ab2;
  transition: 0.3s;
}

/* offer */
/* partners */
.partners {
  background-color: #fff;
  padding-top: 96px;
  padding-bottom: 96px;
}

.partners__title {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Заголовки/H2 */
  font-family: Manrope;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  text-align: center;
  margin-bottom: 64px;
}

.partners__list {
  margin: 0 auto;
}
@media (max-width: 992px) {
  .partners__list {
    gap: 34px;
  }
}

.partners__list-el {
  display: flex;
  justify-content: center;
  align-items: center;
}

.partners__list-img {
  width: 150px;
}

/* partners */
/* review */
.review {
  background-color: #f5f5f5;
  padding-top: 96px;
  padding-bottom: 96px;
  gap: 64px;
}

.review__title {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  text-align: center;
  /* Заголовки/H2 */
  font-family: Manrope;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
}

.review__swiper {
  overflow: hidden;
  max-width: 100%;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.swiper-slide__l,
.swiper-slide__r {
  background-color: #fff;
  padding: 24px 48px;
  border-radius: 16px;
  background: var(--bg-white, #fff);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.swiper-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.review__text {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Body (Основной текст) / B1 */
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
}
@media (max-width: 768px) {
  .review__text {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    /* Body/B3 */
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
}
@media (max-width: 576px) {
  .review__text {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    /* Body/B3 */
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
}

.review__card {
  display: flex;
  align-items: center;
  gap: 16px;
}

.review__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.review__name {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Body (Основной текст)/B2 (Bold) */
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
}
@media (max-width: 768px) {
  .review__name {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    /* Body/B3(Bold) */
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 22.4px */
  }
}

.review__job {
  color: var(--text-50, rgba(0, 0, 0, 0.5));
  /* Body (Основной текст)/B2 */
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
}
@media (max-width: 768px) {
  .review__job {
    color: var(--text-50, rgba(0, 0, 0, 0.5));
    /* Body/B4 */
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
  }
}

.s-button-prev,
.s-button-next {
  cursor: pointer;
}
.s-button-prev rect,
.s-button-next rect {
  transition: 0.3s;
}
.s-button-prev rect:hover,
.s-button-next rect:hover {
  fill: #004ab2;
  transition: 0.3s;
}

@media (max-width: 576px) {
  .hide {
    display: none;
  }
}

.swiper-button-disabled {
  opacity: 0.5;
}

/* review */
/* order */
.order {
  padding-top: 96px;
  padding-bottom: 96px;
}

@media (max-width: 1200px) {
  .order__mainBlock {
    gap: 32px;
  }
}
@media (max-width: 768px) {
  .order__mainBlock {
    margin: 0 auto;
  }
}

.order__title {
  color: var(--text-90, rgba(0, 0, 0, 0.9));
  /* Заголовки/H2 */
  font-family: Manrope;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
}
@media (max-width: 1400px) {
  .order__title {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    /* Header/H3 */
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 44.8px */
  }
}
@media (max-width: 768px) {
  .order__title {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    /* Header/H4 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
    text-align: center;
  }
}
@media (max-width: 576px) {
  .order__title {
    color: var(--text-90, rgba(0, 0, 0, 0.9));
    text-align: center;
    /* Header/H4 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
  }
}

.order__text {
  color: var(--text-50, rgba(0, 0, 0, 0.5));
  /* Body (Основной текст) / B1 */
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
}
@media (max-width: 1400px) {
  .order__text {
    color: var(--text-50, rgba(0, 0, 0, 0.5));
    /* Body/B2 */
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
  }
}
@media (max-width: 768px) {
  .order__text {
    color: var(--text-50, rgba(0, 0, 0, 0.5));
    /* Body/B2 */
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
  }
}
@media (max-width: 576px) {
  .order__text {
    color: var(--text-50, rgba(0, 0, 0, 0.5));
    /* Body/B3 */
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
}

.order__form {
  gap: 24px;
}
@media (max-width: 993px) {
  .order__form {
    margin: 0 auto;
  }
}

.order__input {
  display: flex;
  height: 48px;
  padding: 0px 24px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  background: var(--bg-white, #fff);
  color: var(--text-50, rgba(0, 0, 0, 0.5));
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
@media (max-width: 768px) {
  .order__input {
    margin: 0 auto;
  }
}

.order__submit {
  display: flex;
  height: 48px;
  padding: 0px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  background: var(--primary-100, #0669ff);
  border: none;
  color: var(--bg-white, #fff);
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
@media (max-width: 768px) {
  .order__submit {
    margin: 0 auto;
  }
}

.order__submit:hover {
  transition: 0.2s;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), #004ab2;
  cursor: pointer;
}

.order-img {
  padding: 0;
}
@media (max-width: 992px) {
  .order-img {
    display: none;
  }
}

/* order */
/* contact */
.contact {
  min-height: 676px;
  padding: 120px 0;
}
@media (max-width: 768px) {
  .contact {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    padding: 0;
  }
}

.contact__mainBlock {
  border-radius: 16px 0px 0px 16px;
  background: rgba(18, 18, 18, 0.9);
  padding: 64px 0 64px 64px;
  flex-direction: column;
  gap: 32px;
  display: flex;
}
@media (max-width: 1200px) {
  .contact__mainBlock {
    padding: 32px 0 32px 32px;
    display: flex;
    gap: 34px;
  }
}
@media (max-width: 768px) {
  .contact__mainBlock {
    padding: 64px 64px 64px 64px;
    border-radius: 0;
  }
}

.contact__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact__list-el {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--bg-white, #fff);
  /* Тайтл/T2 */
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 28.8px */
}
@media (max-width: 1200px) {
  .contact__list-el {
    color: var(--bg-white, #fff);
    /* Body/B2(Bold) */
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
  }
}
@media (max-width: 768px) {
  .contact__list-el {
    color: var(--bg-white, #fff);
    /* Links&Button/14px */
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 22.4px */
  }
}
@media (max-width: 576px) {
  .contact__list-el {
    color: var(--bg-white, #fff);
    /* Body/B2(Bold) */
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
  }
}

.contact-img {
  padding: 0;
  display: none;
}
@media (max-width: 768px) {
  .contact-img {
    display: block;
    max-height: 500px;
  }
}

.contact__title {
  text-align: left;
  color: var(--bg-white, #fff);
  /* Заголовки/H3 */
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 44.8px */
}
@media (max-width: 1200px) {
  .contact__title {
    color: var(--bg-white, #fff);
    /* Tittle/T1 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
  }
}
@media (max-width: 768px) {
  .contact__title {
    color: var(--bg-white, #fff);
    /* Tittle/T2 */
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
    text-align: center;
  }
}
@media (max-width: 576px) {
  .contact__title {
    color: var(--bg-white, #fff);
    /* Tittle/T1 */
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
  }
}

/* contact */
/* footer */
.footer {
  background-color: rgba(33, 33, 33, 0.9490196078);
  align-items: center;
}

@media (max-width: 992px) {
  .footer__logo-link {
    display: flex;
    justify-content: center;
  }
}

.footer__main-flex {
  display: flex;
  align-items: center;
  gap: 64px;
  justify-content: flex-end;
}
@media (max-width: 992px) {
  .footer__main-flex {
    justify-content: center;
  }
}

.footer__nav-flex {
  display: flex;
  gap: 64px;
}
@media (max-width: 992px) {
  .footer__nav-flex {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
  }
}

.footer__nav .menu__list-el {
  border: none;
  color: var(--text-primary, #fff);
  /* Ссылки и кнопки/14 px */
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 22.4px */
}

.social__list {
  display: flex;
  gap: 32px;
}
@media (max-width: 992px) {
  .social__list {
    margin-bottom: 24px;
  }
}/*# sourceMappingURL=style.css.map */`, "",{"version":3,"sources":["webpack://./src/css/style.css","webpack://./src/css/style.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/bootstrap-grid.css":
/*!************************************!*\
  !*** ./src/css/bootstrap-grid.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_bootstrap_grid_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./bootstrap-grid.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/bootstrap-grid.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_bootstrap_grid_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_bootstrap_grid_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_bootstrap_grid_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_bootstrap_grid_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/mobile_menu.js":
/*!*******************************!*\
  !*** ./src/js/mobile_menu.js ***!
  \*******************************/
/***/ (() => {

let btn = document.querySelector(".menu-btn ");
btn.addEventListener("click", function () {
  document.querySelector(".header__mobile").classList.toggle("open");
});


/***/ }),

/***/ "./src/js/offer__Swiper.js":
/*!*********************************!*\
  !*** ./src/js/offer__Swiper.js ***!
  \*********************************/
/***/ (() => {

const swiper1 = new Swiper(".offer__swiper", {
    // Optional parameters
    slidesPerView: 1,
    direction: "horizontal",
    loop: false,
  
    // Navigation arrows
    navigation: {
      nextEl: ".offer__s-button-next",
      prevEl: ".offer__s-button-prev",
    },
  });

/***/ }),

/***/ "./src/js/review__Swiper.js":
/*!**********************************!*\
  !*** ./src/js/review__Swiper.js ***!
  \**********************************/
/***/ (() => {

const swiper = new Swiper(".review__swiper", {
  // Optional parameters
  slidesPerView: 1,
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/***/ (() => {

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"filename": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_mobile_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/mobile_menu.js */ "./src/js/mobile_menu.js");
/* harmony import */ var _js_mobile_menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_menu_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_offer_Swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/offer__Swiper.js */ "./src/js/offer__Swiper.js");
/* harmony import */ var _js_offer_Swiper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_offer_Swiper_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_review_Swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/review__Swiper.js */ "./src/js/review__Swiper.js");
/* harmony import */ var _js_review_Swiper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_review_Swiper_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/scroll.js */ "./src/js/scroll.js");
/* harmony import */ var _js_scroll_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_scroll_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_bootstrap_grid_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/bootstrap-grid.css */ "./src/css/bootstrap-grid.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2NkOWUxMDU0YjlmNzUwZDg1ZjMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQsZ0dBQWdHLEtBQUssV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZ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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0Qyw0SEFBNEgsV0FBVyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxXQUFXLFVBQVUsS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxLQUFLLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsT0FBTyxXQUFXLFVBQVUsS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsT0FBTyxXQUFXLFVBQVUsS0FBSyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sV0FBVyxVQUFVLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sV0FBVyxVQUFVLEtBQUssV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlB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YWNrOi8vd29yay1iYWxhbmNlLy4vc3JjL2Nzcy9ib290c3RyYXAtZ3JpZC5jc3MiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dvcmstYmFsYW5jZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dvcmstYmFsYW5jZS8uL3NyYy9jc3MvYm9vdHN0cmFwLWdyaWQuY3NzP2M4NTUiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vc3JjL2Nzcy9yZXNldC5jc3M/MTUyYiIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3dvcmstYmFsYW5jZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dvcmstYmFsYW5jZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vc3JjL2pzL21vYmlsZV9tZW51LmpzIiwid2VicGFjazovL3dvcmstYmFsYW5jZS8uL3NyYy9qcy9vZmZlcl9fU3dpcGVyLmpzIiwid2VicGFjazovL3dvcmstYmFsYW5jZS8uL3NyYy9qcy9yZXZpZXdfX1N3aXBlci5qcyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9zcmMvanMvc2Nyb2xsLmpzIiwid2VicGFjazovL3dvcmstYmFsYW5jZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIVxuICogQm9vdHN0cmFwIEdyaWQgdjUuMy4xIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICogQ29weXJpZ2h0IDIwMTEtMjAyMyBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICovXG4uY29udGFpbmVyLFxuLmNvbnRhaW5lci1mbHVpZCxcbi5jb250YWluZXIteHhsLFxuLmNvbnRhaW5lci14bCxcbi5jb250YWluZXItbGcsXG4uY29udGFpbmVyLW1kLFxuLmNvbnRhaW5lci1zbSB7XG4gIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcbiAgLS1icy1ndXR0ZXIteTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogMC41KTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWJzLWd1dHRlci14KSAqIDAuNSk7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXItbGcsIC5jb250YWluZXItbWQsIC5jb250YWluZXItc20sIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lci14bCwgLmNvbnRhaW5lci1sZywgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgLmNvbnRhaW5lci14eGwsIC5jb250YWluZXIteGwsIC5jb250YWluZXItbGcsIC5jb250YWluZXItbWQsIC5jb250YWluZXItc20sIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTMyMHB4O1xuICB9XG59XG46cm9vdCB7XG4gIC0tYnMtYnJlYWtwb2ludC14czogMDtcbiAgLS1icy1icmVha3BvaW50LXNtOiA1NzZweDtcbiAgLS1icy1icmVha3BvaW50LW1kOiA3NjhweDtcbiAgLS1icy1icmVha3BvaW50LWxnOiA5OTJweDtcbiAgLS1icy1icmVha3BvaW50LXhsOiAxMjAwcHg7XG4gIC0tYnMtYnJlYWtwb2ludC14eGw6IDE0MDBweDtcbn1cblxuLnJvdyB7XG4gIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcbiAgLS1icy1ndXR0ZXIteTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tYnMtZ3V0dGVyLXkpKTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKC0wLjUgKiB2YXIoLS1icy1ndXR0ZXIteCkpO1xuICBtYXJnaW4tbGVmdDogY2FsYygtMC41ICogdmFyKC0tYnMtZ3V0dGVyLXgpKTtcbn1cbi5yb3cgPiAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogMC41KTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWJzLWd1dHRlci14KSAqIDAuNSk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWJzLWd1dHRlci15KTtcbn1cblxuLmNvbCB7XG4gIGZsZXg6IDEgMCAwJTtcbn1cblxuLnJvdy1jb2xzLWF1dG8gPiAqIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ucm93LWNvbHMtMSA+ICoge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3ctY29scy0yID4gKiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG4ucm93LWNvbHMtMyA+ICoge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xufVxuXG4ucm93LWNvbHMtNCA+ICoge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDI1JTtcbn1cblxuLnJvdy1jb2xzLTUgPiAqIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5yb3ctY29scy02ID4gKiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XG59XG5cbi5jb2wtYXV0byB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmNvbC0xIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA4LjMzMzMzMzMzJTtcbn1cblxuLmNvbC0yIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiAxNi42NjY2NjY2NyU7XG59XG5cbi5jb2wtMyB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLTQge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcbn1cblxuLmNvbC01IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA0MS42NjY2NjY2NyU7XG59XG5cbi5jb2wtNiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sLTcge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcbn1cblxuLmNvbC04IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA2Ni42NjY2NjY2NyU7XG59XG5cbi5jb2wtOSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sLTEwIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA4My4zMzMzMzMzMyU7XG59XG5cbi5jb2wtMTEge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcbn1cblxuLmNvbC0xMiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9mZnNldC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xufVxuXG4ub2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xufVxuXG4ub2Zmc2V0LTMge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4ub2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xufVxuXG4ub2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xufVxuXG4ub2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4ub2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xufVxuXG4ub2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xufVxuXG4ub2Zmc2V0LTkge1xuICBtYXJnaW4tbGVmdDogNzUlO1xufVxuXG4ub2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcbn1cblxuLm9mZnNldC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XG59XG5cbi5nLTAsXG4uZ3gtMCB7XG4gIC0tYnMtZ3V0dGVyLXg6IDA7XG59XG5cbi5nLTAsXG4uZ3ktMCB7XG4gIC0tYnMtZ3V0dGVyLXk6IDA7XG59XG5cbi5nLTEsXG4uZ3gtMSB7XG4gIC0tYnMtZ3V0dGVyLXg6IDAuMjVyZW07XG59XG5cbi5nLTEsXG4uZ3ktMSB7XG4gIC0tYnMtZ3V0dGVyLXk6IDAuMjVyZW07XG59XG5cbi5nLTIsXG4uZ3gtMiB7XG4gIC0tYnMtZ3V0dGVyLXg6IDAuNXJlbTtcbn1cblxuLmctMixcbi5neS0yIHtcbiAgLS1icy1ndXR0ZXIteTogMC41cmVtO1xufVxuXG4uZy0zLFxuLmd4LTMge1xuICAtLWJzLWd1dHRlci14OiAxcmVtO1xufVxuXG4uZy0zLFxuLmd5LTMge1xuICAtLWJzLWd1dHRlci15OiAxcmVtO1xufVxuXG4uZy00LFxuLmd4LTQge1xuICAtLWJzLWd1dHRlci14OiAxLjVyZW07XG59XG5cbi5nLTQsXG4uZ3ktNCB7XG4gIC0tYnMtZ3V0dGVyLXk6IDEuNXJlbTtcbn1cblxuLmctNSxcbi5neC01IHtcbiAgLS1icy1ndXR0ZXIteDogM3JlbTtcbn1cblxuLmctNSxcbi5neS01IHtcbiAgLS1icy1ndXR0ZXIteTogM3JlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jb2wtc20ge1xuICAgIGZsZXg6IDEgMCAwJTtcbiAgfVxuICAucm93LWNvbHMtc20tYXV0byA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5yb3ctY29scy1zbS0xID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnJvdy1jb2xzLXNtLTIgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5yb3ctY29scy1zbS0zID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xuICB9XG4gIC5yb3ctY29scy1zbS00ID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAucm93LWNvbHMtc20tNSA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgLnJvdy1jb2xzLXNtLTYgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS1hdXRvIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuY29sLXNtLTEge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLTIge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS0zIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5jb2wtc20tNCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLTUge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS02IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb2wtc20tNyB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLTgge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS05IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5jb2wtc20tMTAge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS0xMSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXNtLTEyIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAub2Zmc2V0LXNtLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5vZmZzZXQtc20tMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQtc20tMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LXNtLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cbiAgLm9mZnNldC1zbS00IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQtc20tNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LXNtLTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cbiAgLm9mZnNldC1zbS03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQtc20tOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LXNtLTkge1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIH1cbiAgLm9mZnNldC1zbS0xMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LXNtLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5nLXNtLTAsXG4gIC5neC1zbS0wIHtcbiAgICAtLWJzLWd1dHRlci14OiAwO1xuICB9XG4gIC5nLXNtLTAsXG4gIC5neS1zbS0wIHtcbiAgICAtLWJzLWd1dHRlci15OiAwO1xuICB9XG4gIC5nLXNtLTEsXG4gIC5neC1zbS0xIHtcbiAgICAtLWJzLWd1dHRlci14OiAwLjI1cmVtO1xuICB9XG4gIC5nLXNtLTEsXG4gIC5neS1zbS0xIHtcbiAgICAtLWJzLWd1dHRlci15OiAwLjI1cmVtO1xuICB9XG4gIC5nLXNtLTIsXG4gIC5neC1zbS0yIHtcbiAgICAtLWJzLWd1dHRlci14OiAwLjVyZW07XG4gIH1cbiAgLmctc20tMixcbiAgLmd5LXNtLTIge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDAuNXJlbTtcbiAgfVxuICAuZy1zbS0zLFxuICAuZ3gtc20tMyB7XG4gICAgLS1icy1ndXR0ZXIteDogMXJlbTtcbiAgfVxuICAuZy1zbS0zLFxuICAuZ3ktc20tMyB7XG4gICAgLS1icy1ndXR0ZXIteTogMXJlbTtcbiAgfVxuICAuZy1zbS00LFxuICAuZ3gtc20tNCB7XG4gICAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xuICB9XG4gIC5nLXNtLTQsXG4gIC5neS1zbS00IHtcbiAgICAtLWJzLWd1dHRlci15OiAxLjVyZW07XG4gIH1cbiAgLmctc20tNSxcbiAgLmd4LXNtLTUge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDNyZW07XG4gIH1cbiAgLmctc20tNSxcbiAgLmd5LXNtLTUge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29sLW1kIHtcbiAgICBmbGV4OiAxIDAgMCU7XG4gIH1cbiAgLnJvdy1jb2xzLW1kLWF1dG8gPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAucm93LWNvbHMtbWQtMSA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5yb3ctY29scy1tZC0yID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucm93LWNvbHMtbWQtMyA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxuICAucm93LWNvbHMtbWQtNCA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLnJvdy1jb2xzLW1kLTUgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5yb3ctY29scy1tZC02ID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtYXV0byB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLmNvbC1tZC0xIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC0yIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtMyB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAuY29sLW1kLTQge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC01IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtNiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuY29sLW1kLTcge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC04IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtOSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAuY29sLW1kLTEwIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtMTEge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC0xMiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm9mZnNldC1tZC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAub2Zmc2V0LW1kLTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LW1kLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC1tZC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5vZmZzZXQtbWQtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LW1kLTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC1tZC02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG4gIC5vZmZzZXQtbWQtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LW1kLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC1tZC05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICB9XG4gIC5vZmZzZXQtbWQtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC1tZC0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuZy1tZC0wLFxuICAuZ3gtbWQtMCB7XG4gICAgLS1icy1ndXR0ZXIteDogMDtcbiAgfVxuICAuZy1tZC0wLFxuICAuZ3ktbWQtMCB7XG4gICAgLS1icy1ndXR0ZXIteTogMDtcbiAgfVxuICAuZy1tZC0xLFxuICAuZ3gtbWQtMSB7XG4gICAgLS1icy1ndXR0ZXIteDogMC4yNXJlbTtcbiAgfVxuICAuZy1tZC0xLFxuICAuZ3ktbWQtMSB7XG4gICAgLS1icy1ndXR0ZXIteTogMC4yNXJlbTtcbiAgfVxuICAuZy1tZC0yLFxuICAuZ3gtbWQtMiB7XG4gICAgLS1icy1ndXR0ZXIteDogMC41cmVtO1xuICB9XG4gIC5nLW1kLTIsXG4gIC5neS1tZC0yIHtcbiAgICAtLWJzLWd1dHRlci15OiAwLjVyZW07XG4gIH1cbiAgLmctbWQtMyxcbiAgLmd4LW1kLTMge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDFyZW07XG4gIH1cbiAgLmctbWQtMyxcbiAgLmd5LW1kLTMge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDFyZW07XG4gIH1cbiAgLmctbWQtNCxcbiAgLmd4LW1kLTQge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcbiAgfVxuICAuZy1tZC00LFxuICAuZ3ktbWQtNCB7XG4gICAgLS1icy1ndXR0ZXIteTogMS41cmVtO1xuICB9XG4gIC5nLW1kLTUsXG4gIC5neC1tZC01IHtcbiAgICAtLWJzLWd1dHRlci14OiAzcmVtO1xuICB9XG4gIC5nLW1kLTUsXG4gIC5neS1tZC01IHtcbiAgICAtLWJzLWd1dHRlci15OiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbC1sZyB7XG4gICAgZmxleDogMSAwIDAlO1xuICB9XG4gIC5yb3ctY29scy1sZy1hdXRvID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLnJvdy1jb2xzLWxnLTEgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucm93LWNvbHMtbGctMiA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnJvdy1jb2xzLWxnLTMgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cbiAgLnJvdy1jb2xzLWxnLTQgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5yb3ctY29scy1sZy01ID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAucm93LWNvbHMtbGctNiA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLWF1dG8ge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5jb2wtbGctMSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctMiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLTMge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLmNvbC1sZy00IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctNSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLTYge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbC1sZy03IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctOCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLTkge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmNvbC1sZy0xMCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLWxnLTExIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctMTIge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5vZmZzZXQtbGctMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLm9mZnNldC1sZy0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC1sZy0yIHtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5vZmZzZXQtbGctMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuICAub2Zmc2V0LWxnLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC1sZy01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5vZmZzZXQtbGctNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgfVxuICAub2Zmc2V0LWxnLTcge1xuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC1sZy04IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5vZmZzZXQtbGctOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuICAub2Zmc2V0LWxnLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQtbGctMTEge1xuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmctbGctMCxcbiAgLmd4LWxnLTAge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDA7XG4gIH1cbiAgLmctbGctMCxcbiAgLmd5LWxnLTAge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDA7XG4gIH1cbiAgLmctbGctMSxcbiAgLmd4LWxnLTEge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDAuMjVyZW07XG4gIH1cbiAgLmctbGctMSxcbiAgLmd5LWxnLTEge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDAuMjVyZW07XG4gIH1cbiAgLmctbGctMixcbiAgLmd4LWxnLTIge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDAuNXJlbTtcbiAgfVxuICAuZy1sZy0yLFxuICAuZ3ktbGctMiB7XG4gICAgLS1icy1ndXR0ZXIteTogMC41cmVtO1xuICB9XG4gIC5nLWxnLTMsXG4gIC5neC1sZy0zIHtcbiAgICAtLWJzLWd1dHRlci14OiAxcmVtO1xuICB9XG4gIC5nLWxnLTMsXG4gIC5neS1sZy0zIHtcbiAgICAtLWJzLWd1dHRlci15OiAxcmVtO1xuICB9XG4gIC5nLWxnLTQsXG4gIC5neC1sZy00IHtcbiAgICAtLWJzLWd1dHRlci14OiAxLjVyZW07XG4gIH1cbiAgLmctbGctNCxcbiAgLmd5LWxnLTQge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDEuNXJlbTtcbiAgfVxuICAuZy1sZy01LFxuICAuZ3gtbGctNSB7XG4gICAgLS1icy1ndXR0ZXIteDogM3JlbTtcbiAgfVxuICAuZy1sZy01LFxuICAuZ3ktbGctNSB7XG4gICAgLS1icy1ndXR0ZXIteTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29sLXhsIHtcbiAgICBmbGV4OiAxIDAgMCU7XG4gIH1cbiAgLnJvdy1jb2xzLXhsLWF1dG8gPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAucm93LWNvbHMteGwtMSA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5yb3ctY29scy14bC0yID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucm93LWNvbHMteGwtMyA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxuICAucm93LWNvbHMteGwtNCA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLnJvdy1jb2xzLXhsLTUgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5yb3ctY29scy14bC02ID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICB9XG4gIC5jb2wteGwtYXV0byB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLmNvbC14bC0xIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC14bC0yIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wteGwtMyB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAuY29sLXhsLTQge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC14bC01IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wteGwtNiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuY29sLXhsLTcge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC14bC04IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wteGwtOSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAuY29sLXhsLTEwIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wteGwtMTEge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC14bC0xMiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm9mZnNldC14bC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAub2Zmc2V0LXhsLTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LXhsLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC14bC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5vZmZzZXQteGwtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LXhsLTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC14bC02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG4gIC5vZmZzZXQteGwtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LXhsLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC14bC05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICB9XG4gIC5vZmZzZXQteGwtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC14bC0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuZy14bC0wLFxuICAuZ3gteGwtMCB7XG4gICAgLS1icy1ndXR0ZXIteDogMDtcbiAgfVxuICAuZy14bC0wLFxuICAuZ3kteGwtMCB7XG4gICAgLS1icy1ndXR0ZXIteTogMDtcbiAgfVxuICAuZy14bC0xLFxuICAuZ3gteGwtMSB7XG4gICAgLS1icy1ndXR0ZXIteDogMC4yNXJlbTtcbiAgfVxuICAuZy14bC0xLFxuICAuZ3kteGwtMSB7XG4gICAgLS1icy1ndXR0ZXIteTogMC4yNXJlbTtcbiAgfVxuICAuZy14bC0yLFxuICAuZ3gteGwtMiB7XG4gICAgLS1icy1ndXR0ZXIteDogMC41cmVtO1xuICB9XG4gIC5nLXhsLTIsXG4gIC5neS14bC0yIHtcbiAgICAtLWJzLWd1dHRlci15OiAwLjVyZW07XG4gIH1cbiAgLmcteGwtMyxcbiAgLmd4LXhsLTMge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDFyZW07XG4gIH1cbiAgLmcteGwtMyxcbiAgLmd5LXhsLTMge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDFyZW07XG4gIH1cbiAgLmcteGwtNCxcbiAgLmd4LXhsLTQge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcbiAgfVxuICAuZy14bC00LFxuICAuZ3kteGwtNCB7XG4gICAgLS1icy1ndXR0ZXIteTogMS41cmVtO1xuICB9XG4gIC5nLXhsLTUsXG4gIC5neC14bC01IHtcbiAgICAtLWJzLWd1dHRlci14OiAzcmVtO1xuICB9XG4gIC5nLXhsLTUsXG4gIC5neS14bC01IHtcbiAgICAtLWJzLWd1dHRlci15OiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIC5jb2wteHhsIHtcbiAgICBmbGV4OiAxIDAgMCU7XG4gIH1cbiAgLnJvdy1jb2xzLXh4bC1hdXRvID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLnJvdy1jb2xzLXh4bC0xID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnJvdy1jb2xzLXh4bC0yID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucm93LWNvbHMteHhsLTMgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cbiAgLnJvdy1jb2xzLXh4bC00ID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAucm93LWNvbHMteHhsLTUgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5yb3ctY29scy14eGwtNiA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXh4bC1hdXRvIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuY29sLXh4bC0xIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC14eGwtMiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXh4bC0zIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5jb2wteHhsLTQge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC14eGwtNSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXh4bC02IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb2wteHhsLTcge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC14eGwtOCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXh4bC05IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5jb2wteHhsLTEwIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wteHhsLTExIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wteHhsLTEyIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAub2Zmc2V0LXh4bC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAub2Zmc2V0LXh4bC0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC14eGwtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LXh4bC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5vZmZzZXQteHhsLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC14eGwtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LXh4bC02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG4gIC5vZmZzZXQteHhsLTcge1xuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC14eGwtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LXh4bC05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICB9XG4gIC5vZmZzZXQteHhsLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQteHhsLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5nLXh4bC0wLFxuICAuZ3gteHhsLTAge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDA7XG4gIH1cbiAgLmcteHhsLTAsXG4gIC5neS14eGwtMCB7XG4gICAgLS1icy1ndXR0ZXIteTogMDtcbiAgfVxuICAuZy14eGwtMSxcbiAgLmd4LXh4bC0xIHtcbiAgICAtLWJzLWd1dHRlci14OiAwLjI1cmVtO1xuICB9XG4gIC5nLXh4bC0xLFxuICAuZ3kteHhsLTEge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDAuMjVyZW07XG4gIH1cbiAgLmcteHhsLTIsXG4gIC5neC14eGwtMiB7XG4gICAgLS1icy1ndXR0ZXIteDogMC41cmVtO1xuICB9XG4gIC5nLXh4bC0yLFxuICAuZ3kteHhsLTIge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDAuNXJlbTtcbiAgfVxuICAuZy14eGwtMyxcbiAgLmd4LXh4bC0zIHtcbiAgICAtLWJzLWd1dHRlci14OiAxcmVtO1xuICB9XG4gIC5nLXh4bC0zLFxuICAuZ3kteHhsLTMge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDFyZW07XG4gIH1cbiAgLmcteHhsLTQsXG4gIC5neC14eGwtNCB7XG4gICAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xuICB9XG4gIC5nLXh4bC00LFxuICAuZ3kteHhsLTQge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDEuNXJlbTtcbiAgfVxuICAuZy14eGwtNSxcbiAgLmd4LXh4bC01IHtcbiAgICAtLWJzLWd1dHRlci14OiAzcmVtO1xuICB9XG4gIC5nLXh4bC01LFxuICAuZ3kteHhsLTUge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDNyZW07XG4gIH1cbn1cbi5kLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG4uZC1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmQtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xufVxuXG4uZC1pbmxpbmUtZ3JpZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkICFpbXBvcnRhbnQ7XG59XG5cbi5kLXRhYmxlIHtcbiAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbn1cblxuLmQtdGFibGUtcm93IHtcbiAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG59XG5cbi5kLXRhYmxlLWNlbGwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLWlubGluZS1mbGV4IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbn1cblxuLmQtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtZmlsbCB7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXJvdyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtY29sdW1uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1yb3ctcmV2ZXJzZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1jb2x1bW4tcmV2ZXJzZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1ncm93LTAge1xuICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtZ3Jvdy0xIHtcbiAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXNocmluay0wIHtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtc2hyaW5rLTEge1xuICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xufVxuXG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LW5vd3JhcCB7XG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXdyYXAtcmV2ZXJzZSB7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmp1c3RpZnktY29udGVudC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmp1c3RpZnktY29udGVudC1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24taXRlbXMtc3RhcnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24taXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1pdGVtcy1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24taXRlbXMtc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1jb250ZW50LXN0YXJ0IHtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tY29udGVudC1lbmQge1xuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tY29udGVudC1jZW50ZXIge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWNvbnRlbnQtYmV0d2VlbiB7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWNvbnRlbnQtYXJvdW5kIHtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1jb250ZW50LXN0cmV0Y2gge1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1zZWxmLWF1dG8ge1xuICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1zZWxmLXN0YXJ0IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tc2VsZi1lbmQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXNlbGYtYmFzZWxpbmUge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tc2VsZi1zdHJldGNoIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItZmlyc3Qge1xuICBvcmRlcjogLTEgIWltcG9ydGFudDtcbn1cblxuLm9yZGVyLTAge1xuICBvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItMSB7XG4gIG9yZGVyOiAxICFpbXBvcnRhbnQ7XG59XG5cbi5vcmRlci0yIHtcbiAgb3JkZXI6IDIgIWltcG9ydGFudDtcbn1cblxuLm9yZGVyLTMge1xuICBvcmRlcjogMyAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItNCB7XG4gIG9yZGVyOiA0ICFpbXBvcnRhbnQ7XG59XG5cbi5vcmRlci01IHtcbiAgb3JkZXI6IDUgIWltcG9ydGFudDtcbn1cblxuLm9yZGVyLWxhc3Qge1xuICBvcmRlcjogNiAhaW1wb3J0YW50O1xufVxuXG4ubS0wIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tLTEge1xuICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tMiB7XG4gIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLTMge1xuICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tNCB7XG4gIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLTUge1xuICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tYXV0byB7XG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubXgtMCB7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ubXgtMSB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXgtMiB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm14LTMge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm14LTQge1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5teC01IHtcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5teC1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5teS0wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5teS0xIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5teS0yIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXktMyB7XG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXktNCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm15LTUge1xuICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm15LWF1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm10LTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0xIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtMyB7XG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTQge1xuICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTUge1xuICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWUtMCB7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4ubWUtMSB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWUtMiB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tZS0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tZS00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1lLTUge1xuICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1lLWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1iLTAge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0xIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItMiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItMyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTUge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi1hdXRvIHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubXMtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tcy0xIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1zLTIge1xuICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tcy0zIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1zLTQge1xuICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tcy01IHtcbiAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1zLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ucC0wIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ucC0xIHtcbiAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucC0yIHtcbiAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wLTMge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wLTQge1xuICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtNSB7XG4gIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnB4LTAge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ucHgtMSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5weC0yIHtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5weC0zIHtcbiAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnB4LTQge1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnB4LTUge1xuICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucHktMCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5weS0xIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnB5LTIge1xuICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnB5LTMge1xuICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHktNCB7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHktNSB7XG4gIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0wIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLnB0LTEge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtMiB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnB0LTMge1xuICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtNCB7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnB0LTUge1xuICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucGUtMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnBlLTEge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wZS0yIHtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wZS0zIHtcbiAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGUtNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGUtNSB7XG4gIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTAge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ucGItMSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi0yIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGItMyB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi00IHtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGItNSB7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wcy0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wcy0xIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wcy0yIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBzLTMge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnBzLTQge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHMtNSB7XG4gIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmQtc20taW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZC1zbS1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgfVxuICAuZC1zbS1pbmxpbmUtZ3JpZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQgIWltcG9ydGFudDtcbiAgfVxuICAuZC1zbS10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgfVxuICAuZC1zbS10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxuICAuZC1zbS1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtc20taW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtc20tbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXNtLWZpbGwge1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20tcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20tY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20tcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXNtLWNvbHVtbi1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1zbS1ncm93LTAge1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXNtLWdyb3ctMSB7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20tc2hyaW5rLTAge1xuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20tc2hyaW5rLTEge1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20td3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20tbm93cmFwIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXNtLXdyYXAtcmV2ZXJzZSB7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXNtLXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXNtLWVuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1zbS1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1zbS1ldmVubHkge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXNtLXN0YXJ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1zbS1lbmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1zbS1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtc20tYmFzZWxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1zbS1zdHJldGNoIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXNtLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtc20tZW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXNtLWNlbnRlciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtc20tYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXNtLWFyb3VuZCB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtc20tc3RyZXRjaCB7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXNtLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1zbS1zdGFydCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXNtLWVuZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1zbS1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXNtLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXNtLXN0cmV0Y2gge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItc20tZmlyc3Qge1xuICAgIG9yZGVyOiAtMSAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1zbS0wIHtcbiAgICBvcmRlcjogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1zbS0xIHtcbiAgICBvcmRlcjogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1zbS0yIHtcbiAgICBvcmRlcjogMiAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1zbS0zIHtcbiAgICBvcmRlcjogMyAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1zbS00IHtcbiAgICBvcmRlcjogNCAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1zbS01IHtcbiAgICBvcmRlcjogNSAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1zbS1sYXN0IHtcbiAgICBvcmRlcjogNiAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXNtLTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXNtLTEge1xuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXNtLTIge1xuICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tc20tMyB7XG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tc20tNCB7XG4gICAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1zbS01IHtcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1zbS1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXgtc20tMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXgtc20tMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgtc20tMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXNtLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXNtLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1zbS01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1zbS1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1zbS0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1zbS0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1zbS0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXktc20tMyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXktc20tNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXNtLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXNtLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXNtLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXQtc20tMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1zbS0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtc20tMyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1zbS00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtc20tNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1zbS1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXNtLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1zbS0xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUtc20tMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUtc20tMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXNtLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXNtLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1zbS1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubWItc20tMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1zbS0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXNtLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1zbS0zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXNtLTQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1zbS01IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXNtLWF1dG8ge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXMtc20tMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXMtc20tMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMtc20tMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1zbS0zIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1zbS00IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXNtLTUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXNtLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtc20tMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXNtLTEge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1zbS0yIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1zbS0zIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtc20tNCB7XG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtc20tNSB7XG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1zbS0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXNtLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgtc20tMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgtc20tMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1zbS00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1zbS01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXNtLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHktc20tMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1zbS0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1zbS0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXNtLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXNtLTUge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtc20tMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHQtc20tMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtc20tMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1zbS0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1zbS00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXNtLTUge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLXNtLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucGUtc20tMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1zbS0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUtc20tMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1zbS00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUtc20tNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1zbS0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1zbS0xIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1zbS0yIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXNtLTMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXNtLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItc20tNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMtc20tMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLXNtLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1zbS0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1zbS0zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMtc20tNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMtc20tNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZC1tZC1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbWQtYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbWQtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLWlubGluZS1ncmlkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbWQtdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuICAuZC1tZC1pbmxpbmUtZmxleCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgfVxuICAuZC1tZC1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbWQtZmlsbCB7XG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbWQtY29sdW1uLXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLWdyb3ctMCB7XG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbWQtZ3Jvdy0xIHtcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1zaHJpbmstMCB7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1zaHJpbmstMSB7XG4gICAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC13cmFwIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1ub3dyYXAge1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbWQtd3JhcC1yZXZlcnNlIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtc3RhcnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1tZC1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LW1kLWFyb3VuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LW1kLWV2ZW5seSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbWQtc3RhcnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLW1kLWVuZCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLW1kLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1tZC1iYXNlbGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLW1kLXN0cmV0Y2gge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtbWQtc3RhcnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1tZC1lbmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtbWQtY2VudGVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1tZC1iZXR3ZWVuIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtbWQtYXJvdW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1tZC1zdHJldGNoIHtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbWQtYXV0byB7XG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLW1kLXN0YXJ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbWQtZW5kIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLW1kLWNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbWQtYmFzZWxpbmUge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbWQtc3RyZXRjaCB7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1tZC1maXJzdCB7XG4gICAgb3JkZXI6IC0xICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLW1kLTAge1xuICAgIG9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLW1kLTEge1xuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLW1kLTIge1xuICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLW1kLTMge1xuICAgIG9yZGVyOiAzICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLW1kLTQge1xuICAgIG9yZGVyOiA0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLW1kLTUge1xuICAgIG9yZGVyOiA1ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLW1kLWxhc3Qge1xuICAgIG9yZGVyOiA2ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbWQtMCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbWQtMSB7XG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbWQtMiB7XG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1tZC0zIHtcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1tZC00IHtcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLW1kLTUge1xuICAgIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLW1kLWF1dG8ge1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1tZC0wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1tZC0xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1tZC0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgtbWQtMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgtbWQtNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LW1kLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LW1kLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LW1kLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LW1kLTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LW1kLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1tZC0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1tZC00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXktbWQtNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXktbWQtYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbWQtMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1tZC0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LW1kLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1tZC0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LW1kLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1tZC01IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LW1kLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubWUtbWQtMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLW1kLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1tZC0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1tZC0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUtbWQtNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUtbWQtNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLW1kLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1tZC0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLW1kLTEge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbWQtMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLW1kLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbWQtNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLW1kLTUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbWQtYXV0byB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1tZC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1tZC0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1tZC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLW1kLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLW1kLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMtbWQtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMtbWQtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAucC1tZC0wIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtbWQtMSB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLW1kLTIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLW1kLTMge1xuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1tZC00IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1tZC01IHtcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LW1kLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHgtbWQtMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1tZC0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1tZC0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LW1kLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LW1kLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHktbWQtMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1tZC0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LW1kLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LW1kLTMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHktbWQtNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHktbWQtNSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1tZC0wIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1tZC0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1tZC0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LW1kLTMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LW1kLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtbWQtNSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUtbWQtMCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1tZC0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLW1kLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1tZC0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLW1kLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1tZC01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLW1kLTAge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLW1kLTEge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLW1kLTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItbWQtMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItbWQtNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1tZC01IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1tZC0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHMtbWQtMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLW1kLTIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLW1kLTMge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1tZC00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1tZC01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5kLWxnLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbGctaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuZC1sZy1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuZC1sZy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbGctaW5saW5lLWdyaWQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbGctdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbGctdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuICAuZC1sZy10YWJsZS1jZWxsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbGctZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLWxnLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLWxnLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1sZy1maWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1sZy1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbGctZ3Jvdy0wIHtcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1sZy1ncm93LTEge1xuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLXNocmluay0wIHtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLXNocmluay0xIHtcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLXdyYXAge1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLW5vd3JhcCB7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1sZy13cmFwLXJldmVyc2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1sZy1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1sZy1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LWxnLWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LWxnLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctYXJvdW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctZXZlbmx5IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1sZy1zdGFydCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbGctZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbGctY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLWxnLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbGctc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1sZy1zdGFydCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LWxnLWVuZCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1sZy1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LWxnLWJldHdlZW4ge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1sZy1hcm91bmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LWxnLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1sZy1hdXRvIHtcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbGctc3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1sZy1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbGctY2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1sZy1iYXNlbGluZSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1sZy1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLWxnLWZpcnN0IHtcbiAgICBvcmRlcjogLTEgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbGctMCB7XG4gICAgb3JkZXI6IDAgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbGctMSB7XG4gICAgb3JkZXI6IDEgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbGctMiB7XG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbGctMyB7XG4gICAgb3JkZXI6IDMgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbGctNCB7XG4gICAgb3JkZXI6IDQgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbGctNSB7XG4gICAgb3JkZXI6IDUgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbGctbGFzdCB7XG4gICAgb3JkZXI6IDYgIWltcG9ydGFudDtcbiAgfVxuICAubS1sZy0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuICAubS1sZy0xIHtcbiAgICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1sZy0yIHtcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLWxnLTMge1xuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLWxnLTQge1xuICAgIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbGctNSB7XG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbGctYXV0byB7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LWxnLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LWxnLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LWxnLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1sZy0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1sZy00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgtbGctNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgtbGctYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXktbGctMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXktbGctMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXktbGctMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LWxnLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LWxnLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1sZy01IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1sZy1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1sZy0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LWxnLTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbGctMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LWxnLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbGctNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LWxnLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbGctYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1sZy0wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubWUtbGctMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLWxnLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLWxnLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1sZy00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1sZy01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUtbGctYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLWxnLTAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAubWItbGctMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1sZy0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbGctMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1sZy00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbGctNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1sZy1hdXRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLWxnLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLWxnLTEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLWxnLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMtbGctMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMtbGctNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1sZy01IHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1sZy1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5wLWxnLTAge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucC1sZy0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtbGctMiB7XG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtbGctMyB7XG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLWxnLTQge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLWxnLTUge1xuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgtbGctMCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1sZy0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LWxnLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LWxnLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgtbGctNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgtbGctNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1sZy0wIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LWxnLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHktbGctMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHktbGctMyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1sZy00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1sZy01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LWxnLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LWxnLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LWxnLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtbGctMyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtbGctNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1sZy01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1sZy0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLWxnLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUtbGctMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLWxnLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUtbGctNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLWxnLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItbGctMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAucGItbGctMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItbGctMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1sZy0zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1sZy00IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLWxnLTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLWxnLTAge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1sZy0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMtbGctMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMtbGctMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLWxnLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLWxnLTUge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5kLXhsLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteGwtaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteGwtaW5saW5lLWdyaWQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteGwtdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteGwtdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC10YWJsZS1jZWxsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteGwtZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXhsLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXhsLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14bC1maWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14bC1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteGwtZ3Jvdy0wIHtcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14bC1ncm93LTEge1xuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLXNocmluay0wIHtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLXNocmluay0xIHtcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLXdyYXAge1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLW5vd3JhcCB7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14bC13cmFwLXJldmVyc2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC14bC1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC14bC1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtYXJvdW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtZXZlbmx5IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy14bC1zdGFydCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMteGwtZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMteGwtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXhsLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMteGwtc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC14bC1zdGFydCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXhsLWVuZCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC14bC1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXhsLWJldHdlZW4ge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC14bC1hcm91bmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXhsLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi14bC1hdXRvIHtcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYteGwtc3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi14bC1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYteGwtY2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi14bC1iYXNlbGluZSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi14bC1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXhsLWZpcnN0IHtcbiAgICBvcmRlcjogLTEgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteGwtMCB7XG4gICAgb3JkZXI6IDAgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteGwtMSB7XG4gICAgb3JkZXI6IDEgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteGwtMiB7XG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteGwtMyB7XG4gICAgb3JkZXI6IDMgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteGwtNCB7XG4gICAgb3JkZXI6IDQgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteGwtNSB7XG4gICAgb3JkZXI6IDUgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteGwtbGFzdCB7XG4gICAgb3JkZXI6IDYgIWltcG9ydGFudDtcbiAgfVxuICAubS14bC0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuICAubS14bC0xIHtcbiAgICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS14bC0yIHtcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXhsLTMge1xuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXhsLTQge1xuICAgIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teGwtNSB7XG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teGwtYXV0byB7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXhsLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXhsLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXhsLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC14bC0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC14bC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgteGwtNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgteGwtYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXkteGwtMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXkteGwtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXkteGwtMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXhsLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXhsLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS14bC01IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS14bC1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14bC0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXhsLTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteGwtMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXhsLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteGwtNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXhsLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteGwtYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS14bC0wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubWUteGwtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXhsLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXhsLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS14bC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS14bC01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUteGwtYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXhsLTAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAubWIteGwtMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14bC0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWIteGwtMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14bC00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWIteGwtNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14bC1hdXRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXhsLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXhsLTEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXhsLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMteGwtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMteGwtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy14bC01IHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy14bC1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXhsLTAge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucC14bC0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAteGwtMiB7XG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAteGwtMyB7XG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXhsLTQge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXhsLTUge1xuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgteGwtMCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5weC14bC0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXhsLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXhsLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgteGwtNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgteGwtNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS14bC0wIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXhsLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHkteGwtMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHkteGwtMyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS14bC00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS14bC01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXhsLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXhsLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXhsLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQteGwtMyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQteGwtNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC14bC01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS14bC0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLXhsLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUteGwtMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLXhsLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUteGwtNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLXhsLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGIteGwtMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAucGIteGwtMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGIteGwtMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi14bC0zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi14bC00IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXhsLTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLXhsLTAge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy14bC0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMteGwtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMteGwtMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLXhsLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLXhsLTUge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIC5kLXh4bC1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXh4bC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXh4bC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuZC14eGwtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXh4bC1pbmxpbmUtZ3JpZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQgIWltcG9ydGFudDtcbiAgfVxuICAuZC14eGwtdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteHhsLXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteHhsLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxuICAuZC14eGwtZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXh4bC1pbmxpbmUtZmxleCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgfVxuICAuZC14eGwtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXh4bC1maWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXh4bC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14eGwtY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteHhsLXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14eGwtY29sdW1uLXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXh4bC1ncm93LTAge1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXh4bC1ncm93LTEge1xuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXh4bC1zaHJpbmstMCB7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14eGwtc2hyaW5rLTEge1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteHhsLXdyYXAge1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXh4bC1ub3dyYXAge1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteHhsLXdyYXAtcmV2ZXJzZSB7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXh4bC1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC14eGwtZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC14eGwtY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteHhsLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteHhsLWFyb3VuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXh4bC1ldmVubHkge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXh4bC1zdGFydCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMteHhsLWVuZCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXh4bC1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMteHhsLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMteHhsLXN0cmV0Y2gge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQteHhsLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQteHhsLWVuZCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC14eGwtY2VudGVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC14eGwtYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXh4bC1hcm91bmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXh4bC1zdHJldGNoIHtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYteHhsLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi14eGwtc3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi14eGwtZW5kIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXh4bC1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXh4bC1iYXNlbGluZSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi14eGwtc3RyZXRjaCB7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14eGwtZmlyc3Qge1xuICAgIG9yZGVyOiAtMSAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14eGwtMCB7XG4gICAgb3JkZXI6IDAgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteHhsLTEge1xuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXh4bC0yIHtcbiAgICBvcmRlcjogMiAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14eGwtMyB7XG4gICAgb3JkZXI6IDMgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteHhsLTQge1xuICAgIG9yZGVyOiA0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXh4bC01IHtcbiAgICBvcmRlcjogNSAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14eGwtbGFzdCB7XG4gICAgb3JkZXI6IDYgIWltcG9ydGFudDtcbiAgfVxuICAubS14eGwtMCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teHhsLTEge1xuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXh4bC0yIHtcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXh4bC0zIHtcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS14eGwtNCB7XG4gICAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS14eGwtNSB7XG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teHhsLWF1dG8ge1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5teC14eGwtMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXgteHhsLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXh4bC0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgteHhsLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXh4bC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgteHhsLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXh4bC1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5teS14eGwtMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXkteHhsLTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXh4bC0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXkteHhsLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXh4bC00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXkteHhsLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXh4bC1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14eGwtMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14eGwtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14eGwtMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXh4bC0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXh4bC00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteHhsLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteHhsLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubWUteHhsLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS14eGwtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXh4bC0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS14eGwtMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXh4bC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS14eGwtNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXh4bC1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubWIteHhsLTAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAubWIteHhsLTEge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWIteHhsLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14eGwtMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14eGwtNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXh4bC01IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXh4bC1hdXRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXh4bC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy14eGwtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMteHhsLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMteHhsLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXh4bC00IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXh4bC01IHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy14eGwtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAucC14eGwtMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXh4bC0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAteHhsLTIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXh4bC0zIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAteHhsLTQge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXh4bC01IHtcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXh4bC0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXh4bC0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXh4bC0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC14eGwtMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC14eGwtNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgteHhsLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHkteHhsLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHkteHhsLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHkteHhsLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXh4bC0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXh4bC00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS14eGwtNSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC14eGwtMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHQteHhsLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXh4bC0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXh4bC0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC14eGwtNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC14eGwtNSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUteHhsLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucGUteHhsLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUteHhsLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS14eGwtMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS14eGwtNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLXh4bC01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXh4bC0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi14eGwtMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGIteHhsLTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGIteHhsLTMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXh4bC00IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXh4bC01IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy14eGwtMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLXh4bC0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMteHhsLTIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLXh4bC0zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMteHhsLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLXh4bC01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgLmQtcHJpbnQtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZC1wcmludC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgfVxuICAuZC1wcmludC1pbmxpbmUtZ3JpZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQgIWltcG9ydGFudDtcbiAgfVxuICAuZC1wcmludC10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgfVxuICAuZC1wcmludC10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxuICAuZC1wcmludC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtcHJpbnQtaW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtcHJpbnQtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWJvb3RzdHJhcC1ncmlkLmNzcy5tYXAgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYm9vdHN0cmFwLWdyaWQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7O0VBSUU7QUFDRjs7Ozs7OztFQU9FLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDZDQUE2QztFQUM3Qyw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlDQUF5QztFQUN6Qyw2Q0FBNkM7RUFDN0MsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsNkNBQTZDO0VBQzdDLDRDQUE0QztFQUM1Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFD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O0VBQ3hCO0VBQ0E7O0lBRUUscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUsbUJBQW1CO0VBQ3JCO0VBQ0E7O0lBRUUsbUJBQW1CO0VBQ3JCO0VBQ0E7O0lBRUUscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUsbUJBQW1CO0VBQ3JCO0VBQ0E7O0lBRUUsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSx3QkFBd0I7RUFD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O0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsK0JBQStCO0lBQy9CLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsK0JBQStCO0lBQy9CLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0Isa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLHNDQUFzQztFQUN4QztFQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLHNDQUFzQztFQUN4QztFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7RUFDQTtJQUNFLHNDQUFzQztFQUN4QztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLGdDQUFnQztJQUNoQywrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtJQUM5Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGdDQUFnQztJQUNoQywrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtJQUM5Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLCtCQUErQjtJQUMvQixrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLDhCQUE4QjtJQUM5QixpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtJQUM5QixpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRjtBQUNBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7RUFDQTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLHVDQUF1QztFQUN6QztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGdDQUFnQztJQUNoQywrQkFBK0I7RUFDakM7RUFDQTtJQUNFLCtCQUErQjtJQUMvQiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDZCQUE2QjtJQUM3Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLCtCQUErQjtJQUMvQiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDZCQUE2QjtJQUM3Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDZCQUE2QjtJQUM3Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDhCQUE4QjtJQUM5QixpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsK0JBQStCO0lBQy9CLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsK0JBQStCO0lBQy9CLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsK0JBQStCO0lBQy9CLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0Isa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLHNDQUFzQztFQUN4QztFQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLHNDQUFzQztFQUN4QztFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7RUFDQTtJQUNFLHNDQUFzQztFQUN4QztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLGdDQUFnQztJQUNoQywrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtJQUM5Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGdDQUFnQztJQUNoQywrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtJQUM5Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLCtCQUErQjtJQUMvQixrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLDhCQUE4QjtJQUM5QixpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtJQUM5QixpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRjtBQUNBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBLDZDQUE2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiFcXG4gKiBCb290c3RyYXAgR3JpZCB2NS4zLjEgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXFxuICogQ29weXJpZ2h0IDIwMTEtMjAyMyBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcXG4gKi9cXG4uY29udGFpbmVyLFxcbi5jb250YWluZXItZmx1aWQsXFxuLmNvbnRhaW5lci14eGwsXFxuLmNvbnRhaW5lci14bCxcXG4uY29udGFpbmVyLWxnLFxcbi5jb250YWluZXItbWQsXFxuLmNvbnRhaW5lci1zbSB7XFxuICAtLWJzLWd1dHRlci14OiAxLjVyZW07XFxuICAtLWJzLWd1dHRlci15OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWJzLWd1dHRlci14KSAqIDAuNSk7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogMC41KTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gIC5jb250YWluZXItc20sIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb250YWluZXItbWQsIC5jb250YWluZXItc20sIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jb250YWluZXItbGcsIC5jb250YWluZXItbWQsIC5jb250YWluZXItc20sIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuY29udGFpbmVyLXhsLCAuY29udGFpbmVyLWxnLCAuY29udGFpbmVyLW1kLCAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5jb250YWluZXIteHhsLCAuY29udGFpbmVyLXhsLCAuY29udGFpbmVyLWxnLCAuY29udGFpbmVyLW1kLCAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMzIwcHg7XFxuICB9XFxufVxcbjpyb290IHtcXG4gIC0tYnMtYnJlYWtwb2ludC14czogMDtcXG4gIC0tYnMtYnJlYWtwb2ludC1zbTogNTc2cHg7XFxuICAtLWJzLWJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xcbiAgLS1icy1icmVha3BvaW50LWxnOiA5OTJweDtcXG4gIC0tYnMtYnJlYWtwb2ludC14bDogMTIwMHB4O1xcbiAgLS1icy1icmVha3BvaW50LXh4bDogMTQwMHB4O1xcbn1cXG5cXG4ucm93IHtcXG4gIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcXG4gIC0tYnMtZ3V0dGVyLXk6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWJzLWd1dHRlci15KSk7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTAuNSAqIHZhcigtLWJzLWd1dHRlci14KSk7XFxuICBtYXJnaW4tbGVmdDogY2FsYygtMC41ICogdmFyKC0tYnMtZ3V0dGVyLXgpKTtcXG59XFxuLnJvdyA+ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWJzLWd1dHRlci14KSAqIDAuNSk7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogMC41KTtcXG4gIG1hcmdpbi10b3A6IHZhcigtLWJzLWd1dHRlci15KTtcXG59XFxuXFxuLmNvbCB7XFxuICBmbGV4OiAxIDAgMCU7XFxufVxcblxcbi5yb3ctY29scy1hdXRvID4gKiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ucm93LWNvbHMtMSA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJvdy1jb2xzLTIgPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnJvdy1jb2xzLTMgPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xcbn1cXG5cXG4ucm93LWNvbHMtNCA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogMjUlO1xcbn1cXG5cXG4ucm93LWNvbHMtNSA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogMjAlO1xcbn1cXG5cXG4ucm93LWNvbHMtNiA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XFxufVxcblxcbi5jb2wtYXV0byB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uY29sLTEge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogOC4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wtMiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAxNi42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wtMyB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAyNSU7XFxufVxcblxcbi5jb2wtNCB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAzMy4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wtNSB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiA0MS42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wtNiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jb2wtNyB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiA1OC4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wtOCB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiA2Ni42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wtOSB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiA3NSU7XFxufVxcblxcbi5jb2wtMTAge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogODMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLTExIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC0xMiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub2Zmc2V0LTEge1xcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbn1cXG5cXG4ub2Zmc2V0LTIge1xcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG59XFxuXFxuLm9mZnNldC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi5vZmZzZXQtNCB7XFxuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbn1cXG5cXG4ub2Zmc2V0LTUge1xcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG59XFxuXFxuLm9mZnNldC02IHtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcblxcbi5vZmZzZXQtNyB7XFxuICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbn1cXG5cXG4ub2Zmc2V0LTgge1xcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG59XFxuXFxuLm9mZnNldC05IHtcXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcblxcbi5vZmZzZXQtMTAge1xcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG59XFxuXFxuLm9mZnNldC0xMSB7XFxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbn1cXG5cXG4uZy0wLFxcbi5neC0wIHtcXG4gIC0tYnMtZ3V0dGVyLXg6IDA7XFxufVxcblxcbi5nLTAsXFxuLmd5LTAge1xcbiAgLS1icy1ndXR0ZXIteTogMDtcXG59XFxuXFxuLmctMSxcXG4uZ3gtMSB7XFxuICAtLWJzLWd1dHRlci14OiAwLjI1cmVtO1xcbn1cXG5cXG4uZy0xLFxcbi5neS0xIHtcXG4gIC0tYnMtZ3V0dGVyLXk6IDAuMjVyZW07XFxufVxcblxcbi5nLTIsXFxuLmd4LTIge1xcbiAgLS1icy1ndXR0ZXIteDogMC41cmVtO1xcbn1cXG5cXG4uZy0yLFxcbi5neS0yIHtcXG4gIC0tYnMtZ3V0dGVyLXk6IDAuNXJlbTtcXG59XFxuXFxuLmctMyxcXG4uZ3gtMyB7XFxuICAtLWJzLWd1dHRlci14OiAxcmVtO1xcbn1cXG5cXG4uZy0zLFxcbi5neS0zIHtcXG4gIC0tYnMtZ3V0dGVyLXk6IDFyZW07XFxufVxcblxcbi5nLTQsXFxuLmd4LTQge1xcbiAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xcbn1cXG5cXG4uZy00LFxcbi5neS00IHtcXG4gIC0tYnMtZ3V0dGVyLXk6IDEuNXJlbTtcXG59XFxuXFxuLmctNSxcXG4uZ3gtNSB7XFxuICAtLWJzLWd1dHRlci14OiAzcmVtO1xcbn1cXG5cXG4uZy01LFxcbi5neS01IHtcXG4gIC0tYnMtZ3V0dGVyLXk6IDNyZW07XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgLmNvbC1zbSB7XFxuICAgIGZsZXg6IDEgMCAwJTtcXG4gIH1cXG4gIC5yb3ctY29scy1zbS1hdXRvID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5yb3ctY29scy1zbS0xID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5yb3ctY29scy1zbS0yID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXNtLTMgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcXG4gIH1cXG4gIC5yb3ctY29scy1zbS00ID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXNtLTUgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAyMCU7XFxuICB9XFxuICAucm93LWNvbHMtc20tNiA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC1zbS1hdXRvIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbiAgLmNvbC1zbS0xIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wtc20tMiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC1zbS0zIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxuICAuY29sLXNtLTQge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wtc20tNSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC1zbS02IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAuY29sLXNtLTcge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wtc20tOCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC1zbS05IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA3NSU7XFxuICB9XFxuICAuY29sLXNtLTEwIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLXNtLTExIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLXNtLTEyIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm9mZnNldC1zbS0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuICAub2Zmc2V0LXNtLTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LXNtLTIge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC1zbS0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG4gIC5vZmZzZXQtc20tNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LXNtLTUge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC1zbS02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG4gIC5vZmZzZXQtc20tNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LXNtLTgge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC1zbS05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG4gIC5vZmZzZXQtc20tMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC1zbS0xMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuZy1zbS0wLFxcbiAgLmd4LXNtLTAge1xcbiAgICAtLWJzLWd1dHRlci14OiAwO1xcbiAgfVxcbiAgLmctc20tMCxcXG4gIC5neS1zbS0wIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMDtcXG4gIH1cXG4gIC5nLXNtLTEsXFxuICAuZ3gtc20tMSB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDAuMjVyZW07XFxuICB9XFxuICAuZy1zbS0xLFxcbiAgLmd5LXNtLTEge1xcbiAgICAtLWJzLWd1dHRlci15OiAwLjI1cmVtO1xcbiAgfVxcbiAgLmctc20tMixcXG4gIC5neC1zbS0yIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMC41cmVtO1xcbiAgfVxcbiAgLmctc20tMixcXG4gIC5neS1zbS0yIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMC41cmVtO1xcbiAgfVxcbiAgLmctc20tMyxcXG4gIC5neC1zbS0zIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMXJlbTtcXG4gIH1cXG4gIC5nLXNtLTMsXFxuICAuZ3ktc20tMyB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDFyZW07XFxuICB9XFxuICAuZy1zbS00LFxcbiAgLmd4LXNtLTQge1xcbiAgICAtLWJzLWd1dHRlci14OiAxLjVyZW07XFxuICB9XFxuICAuZy1zbS00LFxcbiAgLmd5LXNtLTQge1xcbiAgICAtLWJzLWd1dHRlci15OiAxLjVyZW07XFxuICB9XFxuICAuZy1zbS01LFxcbiAgLmd4LXNtLTUge1xcbiAgICAtLWJzLWd1dHRlci14OiAzcmVtO1xcbiAgfVxcbiAgLmctc20tNSxcXG4gIC5neS1zbS01IHtcXG4gICAgLS1icy1ndXR0ZXIteTogM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29sLW1kIHtcXG4gICAgZmxleDogMSAwIDAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLW1kLWF1dG8gPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbiAgLnJvdy1jb2xzLW1kLTEgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLW1kLTIgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAucm93LWNvbHMtbWQtMyA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLW1kLTQgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxuICAucm93LWNvbHMtbWQtNSA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDIwJTtcXG4gIH1cXG4gIC5yb3ctY29scy1tZC02ID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLW1kLWF1dG8ge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuICAuY29sLW1kLTEge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC1tZC0yIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLW1kLTMge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDI1JTtcXG4gIH1cXG4gIC5jb2wtbWQtNCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC1tZC01IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA0MS42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLW1kLTYge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG4gIC5jb2wtbWQtNyB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC1tZC04IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLW1kLTkge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG4gIC5jb2wtbWQtMTAge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wtbWQtMTEge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wtbWQtMTIge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAub2Zmc2V0LW1kLTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5vZmZzZXQtbWQtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQtbWQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuICAub2Zmc2V0LW1kLTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcbiAgLm9mZnNldC1tZC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQtbWQtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuICAub2Zmc2V0LW1kLTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcbiAgLm9mZnNldC1tZC03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQtbWQtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAub2Zmc2V0LW1kLTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcbiAgLm9mZnNldC1tZC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LW1kLTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5nLW1kLTAsXFxuICAuZ3gtbWQtMCB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDA7XFxuICB9XFxuICAuZy1tZC0wLFxcbiAgLmd5LW1kLTAge1xcbiAgICAtLWJzLWd1dHRlci15OiAwO1xcbiAgfVxcbiAgLmctbWQtMSxcXG4gIC5neC1tZC0xIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMC4yNXJlbTtcXG4gIH1cXG4gIC5nLW1kLTEsXFxuICAuZ3ktbWQtMSB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDAuMjVyZW07XFxuICB9XFxuICAuZy1tZC0yLFxcbiAgLmd4LW1kLTIge1xcbiAgICAtLWJzLWd1dHRlci14OiAwLjVyZW07XFxuICB9XFxuICAuZy1tZC0yLFxcbiAgLmd5LW1kLTIge1xcbiAgICAtLWJzLWd1dHRlci15OiAwLjVyZW07XFxuICB9XFxuICAuZy1tZC0zLFxcbiAgLmd4LW1kLTMge1xcbiAgICAtLWJzLWd1dHRlci14OiAxcmVtO1xcbiAgfVxcbiAgLmctbWQtMyxcXG4gIC5neS1tZC0zIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMXJlbTtcXG4gIH1cXG4gIC5nLW1kLTQsXFxuICAuZ3gtbWQtNCB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcXG4gIH1cXG4gIC5nLW1kLTQsXFxuICAuZ3ktbWQtNCB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDEuNXJlbTtcXG4gIH1cXG4gIC5nLW1kLTUsXFxuICAuZ3gtbWQtNSB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDNyZW07XFxuICB9XFxuICAuZy1tZC01LFxcbiAgLmd5LW1kLTUge1xcbiAgICAtLWJzLWd1dHRlci15OiAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jb2wtbGcge1xcbiAgICBmbGV4OiAxIDAgMCU7XFxuICB9XFxuICAucm93LWNvbHMtbGctYXV0byA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuICAucm93LWNvbHMtbGctMSA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAucm93LWNvbHMtbGctMiA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG4gIC5yb3ctY29scy1sZy0zID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XFxuICB9XFxuICAucm93LWNvbHMtbGctNCA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDI1JTtcXG4gIH1cXG4gIC5yb3ctY29scy1sZy01ID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLWxnLTYgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wtbGctYXV0byB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5jb2wtbGctMSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLWxnLTIge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wtbGctMyB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbiAgLmNvbC1sZy00IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLWxnLTUge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wtbGctNiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLmNvbC1sZy03IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLWxnLTgge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wtbGctOSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgfVxcbiAgLmNvbC1sZy0xMCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC1sZy0xMSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC1sZy0xMiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5vZmZzZXQtbGctMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbiAgLm9mZnNldC1sZy0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC1sZy0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQtbGctMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB9XFxuICAub2Zmc2V0LWxnLTQge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC1sZy01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQtbGctNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuICAub2Zmc2V0LWxnLTcge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC1sZy04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQtbGctOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuICAub2Zmc2V0LWxnLTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQtbGctMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmctbGctMCxcXG4gIC5neC1sZy0wIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMDtcXG4gIH1cXG4gIC5nLWxnLTAsXFxuICAuZ3ktbGctMCB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDA7XFxuICB9XFxuICAuZy1sZy0xLFxcbiAgLmd4LWxnLTEge1xcbiAgICAtLWJzLWd1dHRlci14OiAwLjI1cmVtO1xcbiAgfVxcbiAgLmctbGctMSxcXG4gIC5neS1sZy0xIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMC4yNXJlbTtcXG4gIH1cXG4gIC5nLWxnLTIsXFxuICAuZ3gtbGctMiB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDAuNXJlbTtcXG4gIH1cXG4gIC5nLWxnLTIsXFxuICAuZ3ktbGctMiB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDAuNXJlbTtcXG4gIH1cXG4gIC5nLWxnLTMsXFxuICAuZ3gtbGctMyB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDFyZW07XFxuICB9XFxuICAuZy1sZy0zLFxcbiAgLmd5LWxnLTMge1xcbiAgICAtLWJzLWd1dHRlci15OiAxcmVtO1xcbiAgfVxcbiAgLmctbGctNCxcXG4gIC5neC1sZy00IHtcXG4gICAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xcbiAgfVxcbiAgLmctbGctNCxcXG4gIC5neS1sZy00IHtcXG4gICAgLS1icy1ndXR0ZXIteTogMS41cmVtO1xcbiAgfVxcbiAgLmctbGctNSxcXG4gIC5neC1sZy01IHtcXG4gICAgLS1icy1ndXR0ZXIteDogM3JlbTtcXG4gIH1cXG4gIC5nLWxnLTUsXFxuICAuZ3ktbGctNSB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5jb2wteGwge1xcbiAgICBmbGV4OiAxIDAgMCU7XFxuICB9XFxuICAucm93LWNvbHMteGwtYXV0byA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuICAucm93LWNvbHMteGwtMSA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAucm93LWNvbHMteGwtMiA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG4gIC5yb3ctY29scy14bC0zID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XFxuICB9XFxuICAucm93LWNvbHMteGwtNCA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDI1JTtcXG4gIH1cXG4gIC5yb3ctY29scy14bC01ID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXhsLTYgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wteGwtYXV0byB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5jb2wteGwtMSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLXhsLTIge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wteGwtMyB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbiAgLmNvbC14bC00IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLXhsLTUge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wteGwtNiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLmNvbC14bC03IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLXhsLTgge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wteGwtOSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgfVxcbiAgLmNvbC14bC0xMCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC14bC0xMSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC14bC0xMiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5vZmZzZXQteGwtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbiAgLm9mZnNldC14bC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC14bC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQteGwtMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB9XFxuICAub2Zmc2V0LXhsLTQge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC14bC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQteGwtNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuICAub2Zmc2V0LXhsLTcge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC14bC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQteGwtOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuICAub2Zmc2V0LXhsLTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQteGwtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmcteGwtMCxcXG4gIC5neC14bC0wIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMDtcXG4gIH1cXG4gIC5nLXhsLTAsXFxuICAuZ3kteGwtMCB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDA7XFxuICB9XFxuICAuZy14bC0xLFxcbiAgLmd4LXhsLTEge1xcbiAgICAtLWJzLWd1dHRlci14OiAwLjI1cmVtO1xcbiAgfVxcbiAgLmcteGwtMSxcXG4gIC5neS14bC0xIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMC4yNXJlbTtcXG4gIH1cXG4gIC5nLXhsLTIsXFxuICAuZ3gteGwtMiB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDAuNXJlbTtcXG4gIH1cXG4gIC5nLXhsLTIsXFxuICAuZ3kteGwtMiB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDAuNXJlbTtcXG4gIH1cXG4gIC5nLXhsLTMsXFxuICAuZ3gteGwtMyB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDFyZW07XFxuICB9XFxuICAuZy14bC0zLFxcbiAgLmd5LXhsLTMge1xcbiAgICAtLWJzLWd1dHRlci15OiAxcmVtO1xcbiAgfVxcbiAgLmcteGwtNCxcXG4gIC5neC14bC00IHtcXG4gICAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xcbiAgfVxcbiAgLmcteGwtNCxcXG4gIC5neS14bC00IHtcXG4gICAgLS1icy1ndXR0ZXIteTogMS41cmVtO1xcbiAgfVxcbiAgLmcteGwtNSxcXG4gIC5neC14bC01IHtcXG4gICAgLS1icy1ndXR0ZXIteDogM3JlbTtcXG4gIH1cXG4gIC5nLXhsLTUsXFxuICAuZ3kteGwtNSB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5jb2wteHhsIHtcXG4gICAgZmxleDogMSAwIDAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXh4bC1hdXRvID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5yb3ctY29scy14eGwtMSA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAucm93LWNvbHMteHhsLTIgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAucm93LWNvbHMteHhsLTMgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcXG4gIH1cXG4gIC5yb3ctY29scy14eGwtNCA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDI1JTtcXG4gIH1cXG4gIC5yb3ctY29scy14eGwtNSA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDIwJTtcXG4gIH1cXG4gIC5yb3ctY29scy14eGwtNiA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC14eGwtYXV0byB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5jb2wteHhsLTEge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC14eGwtMiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC14eGwtMyB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbiAgLmNvbC14eGwtNCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC14eGwtNSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC14eGwtNiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLmNvbC14eGwtNyB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC14eGwtOCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC14eGwtOSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgfVxcbiAgLmNvbC14eGwtMTAge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wteHhsLTExIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLXh4bC0xMiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5vZmZzZXQteHhsLTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5vZmZzZXQteHhsLTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LXh4bC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQteHhsLTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcbiAgLm9mZnNldC14eGwtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LXh4bC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQteHhsLTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcbiAgLm9mZnNldC14eGwtNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LXh4bC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQteHhsLTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcbiAgLm9mZnNldC14eGwtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC14eGwtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmcteHhsLTAsXFxuICAuZ3gteHhsLTAge1xcbiAgICAtLWJzLWd1dHRlci14OiAwO1xcbiAgfVxcbiAgLmcteHhsLTAsXFxuICAuZ3kteHhsLTAge1xcbiAgICAtLWJzLWd1dHRlci15OiAwO1xcbiAgfVxcbiAgLmcteHhsLTEsXFxuICAuZ3gteHhsLTEge1xcbiAgICAtLWJzLWd1dHRlci14OiAwLjI1cmVtO1xcbiAgfVxcbiAgLmcteHhsLTEsXFxuICAuZ3kteHhsLTEge1xcbiAgICAtLWJzLWd1dHRlci15OiAwLjI1cmVtO1xcbiAgfVxcbiAgLmcteHhsLTIsXFxuICAuZ3gteHhsLTIge1xcbiAgICAtLWJzLWd1dHRlci14OiAwLjVyZW07XFxuICB9XFxuICAuZy14eGwtMixcXG4gIC5neS14eGwtMiB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDAuNXJlbTtcXG4gIH1cXG4gIC5nLXh4bC0zLFxcbiAgLmd4LXh4bC0zIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMXJlbTtcXG4gIH1cXG4gIC5nLXh4bC0zLFxcbiAgLmd5LXh4bC0zIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMXJlbTtcXG4gIH1cXG4gIC5nLXh4bC00LFxcbiAgLmd4LXh4bC00IHtcXG4gICAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xcbiAgfVxcbiAgLmcteHhsLTQsXFxuICAuZ3kteHhsLTQge1xcbiAgICAtLWJzLWd1dHRlci15OiAxLjVyZW07XFxuICB9XFxuICAuZy14eGwtNSxcXG4gIC5neC14eGwtNSB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDNyZW07XFxuICB9XFxuICAuZy14eGwtNSxcXG4gIC5neS14eGwtNSB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDNyZW07XFxuICB9XFxufVxcbi5kLWlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtaW5saW5lLWdyaWQge1xcbiAgZGlzcGxheTogaW5saW5lLWdyaWQgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtdGFibGUge1xcbiAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtdGFibGUtcm93IHtcXG4gIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC10YWJsZS1jZWxsIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWlubGluZS1mbGV4IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmxleC1maWxsIHtcXG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4LWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4LXJvdy1yZXZlcnNlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmxleC1jb2x1bW4tcmV2ZXJzZSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcXG59XFxuXFxuLmZsZXgtZ3Jvdy0wIHtcXG4gIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmxleC1ncm93LTEge1xcbiAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4LXNocmluay0wIHtcXG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4LXNocmluay0xIHtcXG4gIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4LXdyYXAge1xcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4LW5vd3JhcCB7XFxuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmxleC13cmFwLXJldmVyc2Uge1xcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1lbmQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtZXZlbmx5IHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1pdGVtcy1zdGFydCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24taXRlbXMtZW5kIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24taXRlbXMtc3RyZXRjaCB7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24tY29udGVudC1zdGFydCB7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1jb250ZW50LWVuZCB7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24tY29udGVudC1jZW50ZXIge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1jb250ZW50LWJldHdlZW4ge1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24tY29udGVudC1hcm91bmQge1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1jb250ZW50LXN0cmV0Y2gge1xcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1hdXRvIHtcXG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuLmFsaWduLXNlbGYtc3RhcnQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1lbmQge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcXG59XFxuXFxuLmFsaWduLXNlbGYtY2VudGVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1iYXNlbGluZSB7XFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1zdHJldGNoIHtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcXG59XFxuXFxuLm9yZGVyLWZpcnN0IHtcXG4gIG9yZGVyOiAtMSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ub3JkZXItMCB7XFxuICBvcmRlcjogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ub3JkZXItMSB7XFxuICBvcmRlcjogMSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ub3JkZXItMiB7XFxuICBvcmRlcjogMiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ub3JkZXItMyB7XFxuICBvcmRlcjogMyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ub3JkZXItNCB7XFxuICBvcmRlcjogNCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ub3JkZXItNSB7XFxuICBvcmRlcjogNSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ub3JkZXItbGFzdCB7XFxuICBvcmRlcjogNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubS0wIHtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubS0xIHtcXG4gIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tLTMge1xcbiAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tLTQge1xcbiAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm0tNSB7XFxuICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm0tYXV0byB7XFxuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuLm14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXgtMSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teC0yIHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teC0zIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm14LTQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm14LTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXgtYXV0byB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teS0wIHtcXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLm15LTEge1xcbiAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXktMiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXktMyB7XFxuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teS00IHtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teS01IHtcXG4gIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm15LWF1dG8ge1xcbiAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXQtMCB7XFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tdC0xIHtcXG4gIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm10LTIge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tdC0zIHtcXG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm10LTQge1xcbiAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tdC01IHtcXG4gIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm10LWF1dG8ge1xcbiAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWUtMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLm1lLTEge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZS0yIHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZS0zIHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWUtNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWUtNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm1lLWF1dG8ge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLm1iLTEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm1iLTMge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWItNCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm1iLTUge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWItYXV0byB7XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tcy0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tcy0xIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tcy0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm1zLTMge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm1zLTQge1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXMtNSB7XFxuICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXMtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucC0wIHtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnAtMSB7XFxuICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wLTMge1xcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucC01IHtcXG4gIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnB4LTAge1xcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weC0xIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weC0zIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHgtNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weC01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHktMCB7XFxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnB5LTEge1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnB5LTMge1xcbiAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weS00IHtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnB5LTUge1xcbiAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wdC0wIHtcXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wdC0xIHtcXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wdC0yIHtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnB0LTMge1xcbiAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnB0LTQge1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHQtNSB7XFxuICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGUtMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wZS0xIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBlLTIge1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wZS0zIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBlLTQge1xcbiAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wZS01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBiLTAge1xcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnBiLTEge1xcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBiLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGItMyB7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGItNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wYi01IHtcXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcy0wIHtcXG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHMtMSB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBzLTIge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBzLTMge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcy00IHtcXG4gIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcy01IHtcXG4gIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gIC5kLXNtLWlubGluZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtc20taW5saW5lLWJsb2NrIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1zbS1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1zbS1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtc20taW5saW5lLWdyaWQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtc20tdGFibGUge1xcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtc20tdGFibGUtcm93IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1zbS10YWJsZS1jZWxsIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtc20tZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXNtLWlubGluZS1mbGV4IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXNtLW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1zbS1maWxsIHtcXG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXNtLXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXNtLWNvbHVtbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXNtLXJvdy1yZXZlcnNlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1zbS1jb2x1bW4tcmV2ZXJzZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtc20tZ3Jvdy0wIHtcXG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1zbS1ncm93LTEge1xcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXNtLXNocmluay0wIHtcXG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXNtLXNocmluay0xIHtcXG4gICAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXNtLXdyYXAge1xcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXNtLW5vd3JhcCB7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1zbS13cmFwLXJldmVyc2Uge1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1zbS1zdGFydCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1zbS1lbmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXNtLWNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXNtLWJldHdlZW4ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tYXJvdW5kIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tZXZlbmx5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1zbS1zdGFydCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtc20tZW5kIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtc20tY2VudGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLXNtLWJhc2VsaW5lIHtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtc20tc3RyZXRjaCB7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC1zbS1zdGFydCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXNtLWVuZCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC1zbS1jZW50ZXIge1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXNtLWJldHdlZW4ge1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC1zbS1hcm91bmQge1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXNtLXN0cmV0Y2gge1xcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1zbS1hdXRvIHtcXG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYtc20tc3RhcnQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1zbS1lbmQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYtc20tY2VudGVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1zbS1iYXNlbGluZSB7XFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1zbS1zdHJldGNoIHtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXNtLWZpcnN0IHtcXG4gICAgb3JkZXI6IC0xICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItc20tMCB7XFxuICAgIG9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItc20tMSB7XFxuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItc20tMiB7XFxuICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItc20tMyB7XFxuICAgIG9yZGVyOiAzICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItc20tNCB7XFxuICAgIG9yZGVyOiA0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItc20tNSB7XFxuICAgIG9yZGVyOiA1ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItc20tbGFzdCB7XFxuICAgIG9yZGVyOiA2ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1zbS0wIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1zbS0xIHtcXG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1zbS0yIHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXNtLTMge1xcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXNtLTQge1xcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tc20tNSB7XFxuICAgIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tc20tYXV0byB7XFxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXNtLTAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1zbS0xIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtc20tMiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1zbS0zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtc20tNCB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1zbS01IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtc20tYXV0byB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXNtLTAge1xcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1zbS0xIHtcXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktc20tMiB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1zbS0zIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktc20tNCB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1zbS01IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktc20tYXV0byB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXNtLTAge1xcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtc20tMSB7XFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1zbS0yIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtc20tMyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1zbS00IHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtc20tNSB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1zbS1hdXRvIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXNtLTAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1zbS0xIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtc20tMiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtc20tMyB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXNtLTQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXNtLTUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1zbS1hdXRvIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItc20tMCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1zbS0xIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXNtLTIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1zbS0zIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXNtLTQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1zbS01IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXNtLWF1dG8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtc20tMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtc20tMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtc20tMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1zbS0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1zbS00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXNtLTUge1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXNtLWF1dG8ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtc20tMCB7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXNtLTEge1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1zbS0yIHtcXG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1zbS0zIHtcXG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtc20tNCB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtc20tNSB7XFxuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1zbS0wIHtcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1zbS0xIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1zbS0yIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgtc20tMyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgtc20tNCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LXNtLTUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXNtLTAge1xcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXNtLTEge1xcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXNtLTIge1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS1zbS0zIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS1zbS00IHtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktc20tNSB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtc20tMCB7XFxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtc20tMSB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtc20tMiB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1zbS0zIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1zbS00IHtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LXNtLTUge1xcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLXNtLTAge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtc20tMSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1zbS0yIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtc20tMyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1zbS00IHtcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtc20tNSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1zbS0wIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1zbS0xIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1zbS0yIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXNtLTMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXNtLTQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGItc20tNSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtc20tMCB7XFxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXNtLTEge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1zbS0yIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1zbS0zIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtc20tNCB7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtc20tNSB7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5kLW1kLWlubGluZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbWQtaW5saW5lLWJsb2NrIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1tZC1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1tZC1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbWQtaW5saW5lLWdyaWQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbWQtdGFibGUge1xcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbWQtdGFibGUtcm93IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1tZC10YWJsZS1jZWxsIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbWQtZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLW1kLWlubGluZS1mbGV4IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLW1kLW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1tZC1maWxsIHtcXG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LW1kLXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LW1kLWNvbHVtbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LW1kLXJvdy1yZXZlcnNlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1tZC1jb2x1bW4tcmV2ZXJzZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbWQtZ3Jvdy0wIHtcXG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1tZC1ncm93LTEge1xcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LW1kLXNocmluay0wIHtcXG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LW1kLXNocmluay0xIHtcXG4gICAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LW1kLXdyYXAge1xcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LW1kLW5vd3JhcCB7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1tZC13cmFwLXJldmVyc2Uge1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1tZC1zdGFydCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1tZC1lbmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LW1kLWNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LW1kLWJldHdlZW4ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtYXJvdW5kIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtZXZlbmx5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1tZC1zdGFydCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtbWQtZW5kIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtbWQtY2VudGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLW1kLWJhc2VsaW5lIHtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtbWQtc3RyZXRjaCB7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC1tZC1zdGFydCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LW1kLWVuZCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC1tZC1jZW50ZXIge1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LW1kLWJldHdlZW4ge1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC1tZC1hcm91bmQge1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LW1kLXN0cmV0Y2gge1xcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1tZC1hdXRvIHtcXG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYtbWQtc3RhcnQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1tZC1lbmQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYtbWQtY2VudGVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1tZC1iYXNlbGluZSB7XFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1tZC1zdHJldGNoIHtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLW1kLWZpcnN0IHtcXG4gICAgb3JkZXI6IC0xICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbWQtMCB7XFxuICAgIG9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbWQtMSB7XFxuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbWQtMiB7XFxuICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbWQtMyB7XFxuICAgIG9yZGVyOiAzICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbWQtNCB7XFxuICAgIG9yZGVyOiA0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbWQtNSB7XFxuICAgIG9yZGVyOiA1ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbWQtbGFzdCB7XFxuICAgIG9yZGVyOiA2ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1tZC0wIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1tZC0xIHtcXG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1tZC0yIHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLW1kLTMge1xcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLW1kLTQge1xcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tbWQtNSB7XFxuICAgIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tbWQtYXV0byB7XFxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LW1kLTAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1tZC0xIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtbWQtMiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1tZC0zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtbWQtNCB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1tZC01IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtbWQtYXV0byB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LW1kLTAge1xcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1tZC0xIHtcXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktbWQtMiB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1tZC0zIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktbWQtNCB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1tZC01IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktbWQtYXV0byB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LW1kLTAge1xcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtbWQtMSB7XFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1tZC0yIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtbWQtMyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1tZC00IHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtbWQtNSB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1tZC1hdXRvIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLW1kLTAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1tZC0xIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtbWQtMiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtbWQtMyB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLW1kLTQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLW1kLTUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1tZC1hdXRvIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItbWQtMCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1tZC0xIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLW1kLTIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1tZC0zIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLW1kLTQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1tZC01IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLW1kLWF1dG8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtbWQtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtbWQtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtbWQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1tZC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1tZC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLW1kLTUge1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLW1kLWF1dG8ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtbWQtMCB7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLW1kLTEge1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1tZC0yIHtcXG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1tZC0zIHtcXG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtbWQtNCB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtbWQtNSB7XFxuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1tZC0wIHtcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1tZC0xIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1tZC0yIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgtbWQtMyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgtbWQtNCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LW1kLTUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LW1kLTAge1xcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LW1kLTEge1xcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LW1kLTIge1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS1tZC0zIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS1tZC00IHtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktbWQtNSB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtbWQtMCB7XFxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtbWQtMSB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtbWQtMiB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1tZC0zIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1tZC00IHtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LW1kLTUge1xcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLW1kLTAge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtbWQtMSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1tZC0yIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtbWQtMyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1tZC00IHtcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtbWQtNSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1tZC0wIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1tZC0xIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1tZC0yIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLW1kLTMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLW1kLTQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGItbWQtNSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtbWQtMCB7XFxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLW1kLTEge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1tZC0yIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1tZC0zIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtbWQtNCB7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtbWQtNSB7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5kLWxnLWlubGluZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbGctaW5saW5lLWJsb2NrIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1sZy1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1sZy1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbGctaW5saW5lLWdyaWQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbGctdGFibGUge1xcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbGctdGFibGUtcm93IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1sZy10YWJsZS1jZWxsIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbGctZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLWxnLWlubGluZS1mbGV4IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLWxnLW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1sZy1maWxsIHtcXG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LWxnLXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LWxnLWNvbHVtbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LWxnLXJvdy1yZXZlcnNlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1sZy1jb2x1bW4tcmV2ZXJzZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbGctZ3Jvdy0wIHtcXG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1sZy1ncm93LTEge1xcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LWxnLXNocmluay0wIHtcXG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LWxnLXNocmluay0xIHtcXG4gICAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LWxnLXdyYXAge1xcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LWxnLW5vd3JhcCB7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1sZy13cmFwLXJldmVyc2Uge1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1sZy1zdGFydCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1sZy1lbmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LWxnLWNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LWxnLWJldHdlZW4ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctYXJvdW5kIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctZXZlbmx5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1sZy1zdGFydCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtbGctZW5kIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtbGctY2VudGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLWxnLWJhc2VsaW5lIHtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtbGctc3RyZXRjaCB7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC1sZy1zdGFydCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LWxnLWVuZCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC1sZy1jZW50ZXIge1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LWxnLWJldHdlZW4ge1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC1sZy1hcm91bmQge1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LWxnLXN0cmV0Y2gge1xcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1sZy1hdXRvIHtcXG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYtbGctc3RhcnQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1sZy1lbmQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYtbGctY2VudGVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1sZy1iYXNlbGluZSB7XFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1sZy1zdHJldGNoIHtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLWxnLWZpcnN0IHtcXG4gICAgb3JkZXI6IC0xICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbGctMCB7XFxuICAgIG9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbGctMSB7XFxuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbGctMiB7XFxuICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbGctMyB7XFxuICAgIG9yZGVyOiAzICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbGctNCB7XFxuICAgIG9yZGVyOiA0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbGctNSB7XFxuICAgIG9yZGVyOiA1ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbGctbGFzdCB7XFxuICAgIG9yZGVyOiA2ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1sZy0wIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1sZy0xIHtcXG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1sZy0yIHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLWxnLTMge1xcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLWxnLTQge1xcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tbGctNSB7XFxuICAgIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tbGctYXV0byB7XFxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LWxnLTAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1sZy0xIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtbGctMiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1sZy0zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtbGctNCB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1sZy01IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtbGctYXV0byB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LWxnLTAge1xcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1sZy0xIHtcXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktbGctMiB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1sZy0zIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktbGctNCB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1sZy01IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktbGctYXV0byB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LWxnLTAge1xcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtbGctMSB7XFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1sZy0yIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtbGctMyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1sZy00IHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtbGctNSB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1sZy1hdXRvIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLWxnLTAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1sZy0xIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtbGctMiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtbGctMyB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLWxnLTQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLWxnLTUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1sZy1hdXRvIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItbGctMCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1sZy0xIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLWxnLTIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1sZy0zIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLWxnLTQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1sZy01IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLWxnLWF1dG8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtbGctMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtbGctMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtbGctMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1sZy0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1sZy00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLWxnLTUge1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLWxnLWF1dG8ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtbGctMCB7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLWxnLTEge1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1sZy0yIHtcXG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1sZy0zIHtcXG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtbGctNCB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtbGctNSB7XFxuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1sZy0wIHtcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1sZy0xIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1sZy0yIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgtbGctMyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgtbGctNCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LWxnLTUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LWxnLTAge1xcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LWxnLTEge1xcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LWxnLTIge1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS1sZy0zIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS1sZy00IHtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktbGctNSB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtbGctMCB7XFxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtbGctMSB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtbGctMiB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1sZy0zIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1sZy00IHtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LWxnLTUge1xcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLWxnLTAge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtbGctMSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1sZy0yIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtbGctMyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1sZy00IHtcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtbGctNSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1sZy0wIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1sZy0xIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1sZy0yIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLWxnLTMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLWxnLTQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGItbGctNSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtbGctMCB7XFxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLWxnLTEge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1sZy0yIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1sZy0zIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtbGctNCB7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtbGctNSB7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuZC14bC1pbmxpbmUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXhsLWlubGluZS1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteGwtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteGwtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXhsLWlubGluZS1ncmlkIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXhsLXRhYmxlIHtcXG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXhsLXRhYmxlLXJvdyB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteGwtdGFibGUtY2VsbCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXhsLWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC14bC1pbmxpbmUtZmxleCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC14bC1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteGwtZmlsbCB7XFxuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14bC1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14bC1jb2x1bW4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14bC1yb3ctcmV2ZXJzZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteGwtY29sdW1uLXJldmVyc2Uge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXhsLWdyb3ctMCB7XFxuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteGwtZ3Jvdy0xIHtcXG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14bC1zaHJpbmstMCB7XFxuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14bC1zaHJpbmstMSB7XFxuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14bC13cmFwIHtcXG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14bC1ub3dyYXAge1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteGwtd3JhcC1yZXZlcnNlIHtcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtc3RhcnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtZW5kIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC14bC1jZW50ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC14bC1iZXR3ZWVuIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXhsLWFyb3VuZCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXhsLWV2ZW5seSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMteGwtc3RhcnQge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLXhsLWVuZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLXhsLWNlbnRlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy14bC1iYXNlbGluZSB7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLXhsLXN0cmV0Y2gge1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQteGwtc3RhcnQge1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC14bC1lbmQge1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQteGwtY2VudGVyIHtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC14bC1iZXR3ZWVuIHtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQteGwtYXJvdW5kIHtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC14bC1zdHJldGNoIHtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYteGwtYXV0byB7XFxuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLXhsLXN0YXJ0IHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYteGwtZW5kIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLXhsLWNlbnRlciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYteGwtYmFzZWxpbmUge1xcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYteGwtc3RyZXRjaCB7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci14bC1maXJzdCB7XFxuICAgIG9yZGVyOiAtMSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXhsLTAge1xcbiAgICBvcmRlcjogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXhsLTEge1xcbiAgICBvcmRlcjogMSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXhsLTIge1xcbiAgICBvcmRlcjogMiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXhsLTMge1xcbiAgICBvcmRlcjogMyAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXhsLTQge1xcbiAgICBvcmRlcjogNCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXhsLTUge1xcbiAgICBvcmRlcjogNSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXhsLWxhc3Qge1xcbiAgICBvcmRlcjogNiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0teGwtMCB7XFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0teGwtMSB7XFxuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0teGwtMiB7XFxuICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS14bC0zIHtcXG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS14bC00IHtcXG4gICAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXhsLTUge1xcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXhsLWF1dG8ge1xcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC14bC0wIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgteGwtMSB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXhsLTIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgteGwtMyB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXhsLTQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgteGwtNSB7XFxuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXhsLWF1dG8ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS14bC0wIHtcXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXkteGwtMSB7XFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXhsLTIge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXkteGwtMyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXhsLTQge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXkteGwtNSB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXhsLWF1dG8ge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC14bC0wIHtcXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXhsLTEge1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQteGwtMiB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXhsLTMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQteGwtNCB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXhsLTUge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQteGwtYXV0byB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS14bC0wIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUteGwtMSB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXhsLTIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXhsLTMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS14bC00IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS14bC01IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUteGwtYXV0byB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXhsLTAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWIteGwtMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi14bC0yIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWIteGwtMyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi14bC00IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWIteGwtNSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi14bC1hdXRvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXhsLTAge1xcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXhsLTEge1xcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXhsLTIge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMteGwtMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMteGwtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy14bC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy14bC1hdXRvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXhsLTAge1xcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC14bC0xIHtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAteGwtMiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAteGwtMyB7XFxuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXhsLTQge1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXhsLTUge1xcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgteGwtMCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgteGwtMSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgteGwtMiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LXhsLTMge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LXhsLTQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC14bC01IHtcXG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS14bC0wIHtcXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS14bC0xIHtcXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS14bC0yIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHkteGwtMyB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHkteGwtNCB7XFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXhsLTUge1xcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LXhsLTAge1xcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LXhsLTEge1xcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LXhsLTIge1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQteGwtMyB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQteGwtNCB7XFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC14bC01IHtcXG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS14bC0wIHtcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLXhsLTEge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUteGwtMiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLXhsLTMge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUteGwtNCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLXhsLTUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGIteGwtMCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGIteGwtMSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGIteGwtMiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi14bC0zIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi14bC00IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXhsLTUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXhsLTAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy14bC0xIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMteGwtMiB7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMteGwtMyB7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXhsLTQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXhsLTUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLmQteHhsLWlubGluZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteHhsLWlubGluZS1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteHhsLWJsb2NrIHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXh4bC1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteHhsLWlubGluZS1ncmlkIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXh4bC10YWJsZSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC14eGwtdGFibGUtcm93IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC14eGwtdGFibGUtY2VsbCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXh4bC1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteHhsLWlubGluZS1mbGV4IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXh4bC1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteHhsLWZpbGwge1xcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteHhsLXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXh4bC1jb2x1bW4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14eGwtcm93LXJldmVyc2Uge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXh4bC1jb2x1bW4tcmV2ZXJzZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteHhsLWdyb3ctMCB7XFxuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteHhsLWdyb3ctMSB7XFxuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteHhsLXNocmluay0wIHtcXG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXh4bC1zaHJpbmstMSB7XFxuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14eGwtd3JhcCB7XFxuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteHhsLW5vd3JhcCB7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14eGwtd3JhcC1yZXZlcnNlIHtcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQteHhsLXN0YXJ0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXh4bC1lbmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXh4bC1jZW50ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC14eGwtYmV0d2VlbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC14eGwtYXJvdW5kIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQteHhsLWV2ZW5seSB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMteHhsLXN0YXJ0IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy14eGwtZW5kIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMteHhsLWNlbnRlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy14eGwtYmFzZWxpbmUge1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy14eGwtc3RyZXRjaCB7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC14eGwtc3RhcnQge1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC14eGwtZW5kIHtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXh4bC1jZW50ZXIge1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXh4bC1iZXR3ZWVuIHtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQteHhsLWFyb3VuZCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQteHhsLXN0cmV0Y2gge1xcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi14eGwtYXV0byB7XFxuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLXh4bC1zdGFydCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLXh4bC1lbmQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYteHhsLWNlbnRlciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYteHhsLWJhc2VsaW5lIHtcXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLXh4bC1zdHJldGNoIHtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXh4bC1maXJzdCB7XFxuICAgIG9yZGVyOiAtMSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXh4bC0wIHtcXG4gICAgb3JkZXI6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci14eGwtMSB7XFxuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteHhsLTIge1xcbiAgICBvcmRlcjogMiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXh4bC0zIHtcXG4gICAgb3JkZXI6IDMgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci14eGwtNCB7XFxuICAgIG9yZGVyOiA0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteHhsLTUge1xcbiAgICBvcmRlcjogNSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXh4bC1sYXN0IHtcXG4gICAgb3JkZXI6IDYgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXh4bC0wIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS14eGwtMSB7XFxuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0teHhsLTIge1xcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0teHhsLTMge1xcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXh4bC00IHtcXG4gICAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXh4bC01IHtcXG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS14eGwtYXV0byB7XFxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXh4bC0wIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgteHhsLTEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC14eGwtMiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC14eGwtMyB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXh4bC00IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXh4bC01IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgteHhsLWF1dG8ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS14eGwtMCB7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXh4bC0xIHtcXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXkteHhsLTIge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXkteHhsLTMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS14eGwtNCB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS14eGwtNSB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXh4bC1hdXRvIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQteHhsLTAge1xcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQteHhsLTEge1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQteHhsLTIge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC14eGwtMyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC14eGwtNCB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXh4bC01IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXh4bC1hdXRvIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXh4bC0wIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUteHhsLTEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS14eGwtMiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUteHhsLTMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS14eGwtNCB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUteHhsLTUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS14eGwtYXV0byB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXh4bC0wIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXh4bC0xIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXh4bC0yIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWIteHhsLTMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWIteHhsLTQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi14eGwtNSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi14eGwtYXV0byB7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy14eGwtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMteHhsLTEge1xcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXh4bC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXh4bC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy14eGwtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy14eGwtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMteHhsLWF1dG8ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAteHhsLTAge1xcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC14eGwtMSB7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXh4bC0yIHtcXG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC14eGwtMyB7XFxuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXh4bC00IHtcXG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC14eGwtNSB7XFxuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC14eGwtMCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgteHhsLTEge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LXh4bC0yIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgteHhsLTMge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LXh4bC00IHtcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgteHhsLTUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXh4bC0wIHtcXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS14eGwtMSB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHkteHhsLTIge1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS14eGwtMyB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHkteHhsLTQge1xcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS14eGwtNSB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQteHhsLTAge1xcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LXh4bC0xIHtcXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC14eGwtMiB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC14eGwtMyB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQteHhsLTQge1xcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQteHhsLTUge1xcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLXh4bC0wIHtcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLXh4bC0xIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLXh4bC0yIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUteHhsLTMge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUteHhsLTQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS14eGwtNSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi14eGwtMCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGIteHhsLTEge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXh4bC0yIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXh4bC0zIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi14eGwtNCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi14eGwtNSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMteHhsLTAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy14eGwtMSB7XFxuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXh4bC0yIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy14eGwtMyB7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXh4bC00IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy14eGwtNSB7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgcHJpbnQge1xcbiAgLmQtcHJpbnQtaW5saW5lIHtcXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1wcmludC1pbmxpbmUtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXByaW50LWJsb2NrIHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXByaW50LWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1wcmludC1pbmxpbmUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1wcmludC10YWJsZSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1wcmludC10YWJsZS1yb3cge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXByaW50LXRhYmxlLWNlbGwge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1wcmludC1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtcHJpbnQtaW5saW5lLWZsZXgge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtcHJpbnQtbm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLWdyaWQuY3NzLm1hcCAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuKixcclxuKjo6YWZ0ZXIsXHJcbio6OmJlZm9yZSB7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5odG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4uYm9keS13cmFwcGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxudWwsXHJcbm9sIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuYnV0dG9uIHtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7OztFQUdFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUNBOztFQUVFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuaHRtbCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmJvZHktd3JhcHBlciB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcbnVsLFxcclxcbm9sIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwibm9uZVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogaGVhZGVyICovXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlcl9fbWFpbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2NHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyX19tYWluLWZsZXgge1xuICAgIGdhcDogMjRweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5M3B4KSB7XG4gIC5oZWFkZXJfX21haW4tZmxleCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufVxuXG4ubWVudS1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXJfX21vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE2cHggOHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmhlYWRlcl9fbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNXB4O1xuICAgIHRvcDogLTIxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksIGJsYWNrKTtcbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgfVxufVxuXG4uaGVhZGVyX19tb2JpbGUub3BlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNDAlKTtcbn1cblxuLmhlYWRlcl9fbW9iaWxlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmhlYWRlcl9fbmF2LFxuICAuaGVhZGVyX19udW1iZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLm1lbnUtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWVudS1idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogaW5oZXJpdDtcbiAgfVxufVxuXG4ubWVudS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubWVudV9fbGlzdC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tZW51X19saXN0LWZsZXgge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG59XG5cbi5tZW51X19saXN0LWVsIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAvKiDQodGB0YvQu9C60Lgg0Lgg0LrQvdC+0L/QutC4LzE0IHB4ICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDIyLjRweCAqL1xufVxuXG4ubWVudV9fbGlzdC1lbDpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDY2OWZmO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uaGVhZGVyX19udW1iZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgLyog0KHRgdGL0LvQutC4INC4INC60L3QvtC/0LrQuC8xNiBweCAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cbn1cblxuLmhlYWRlcl9fbnVtYmVyLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaGVhZGVyX19udW1iZXItZmxleCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4vKiBoZWFkZXIgKi9cbi8qIG1haW5DYXJkICovXG4ubWFpbkNhcmQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNjg4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW5DYXJkIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW5DYXJkIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1haW5DYXJkIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG59XG5cbi5tYWluQ2FyZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0OHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW5DYXJkX190aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAvKiBIZWFkZXIvSDIgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTIwJTsgLyogNTcuNnB4ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW5DYXJkX190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgICAvKiBIZWFkZXIvSDIgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7IC8qIDU3LjZweCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW5DYXJkX190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAvKiBIZWFkZXIvSDIgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7IC8qIDU3LjZweCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1haW5DYXJkX190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2ZmZik7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgLyogSGVhZGVyL0gzICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiA0NC44cHggKi9cbiAgfVxufVxuXG4ubWFpbkNhcmRfX3RleHQge1xuICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgLyogVGl0dGxlL1QyICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI4LjhweCAqL1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluQ2FyZF9fdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgICAvKiBUaXR0bGUvVDIgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI4LjhweCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW5DYXJkX190ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIC8qIFRpdHRsZS9UMiAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjguOHB4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubWFpbkNhcmRfX3RleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICNmZmYpO1xuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIC8qIEJvZHkvQjEgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI4LjhweCAqL1xuICB9XG59XG5cbi5tYWluQ2FyZF9fYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS0xMDAsICMwNjY5ZmYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIHBhZGRpbmc6IDBweCA0OHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIExpbmtzJkJ1dHRvbi8xNnB4ICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4ubWFpbkNhcmRfX2J0bjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDI0cHggMHB4IHJnYmEoMCwgNTMsIDEyOCwgMC4zNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxMDAlKSwgIzAwNGFiMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBtYWluQ2FyZCAqL1xuLyogaW5mb0NhcmQgKi9cbi5pbmZvQ2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmctdG9wOiA5NnB4O1xuICBwYWRkaW5nLWJvdHRvbTogOTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW5mb0NhcmQge1xuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2NHB4O1xuICB9XG59XG5cbi5pbmZvQ2FyZF9faW1nQmxvY2sge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmluZm9DYXJkX19pbWdCbG9jayB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuLmluZm9DYXJkLWltZyB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgLmluZm9DYXJkLWltZyB7XG4gICAgd2lkdGg6IDUzMHB4O1xuICAgIGhlaWdodDogNTUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmluZm9DYXJkLWltZyB7XG4gICAgd2lkdGg6IDQyMHB4O1xuICAgIGhlaWdodDogNTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaW5mb0NhcmQtaW1nIHtcbiAgICB3aWR0aDogMzMwcHg7XG4gICAgaGVpZ2h0OiA0NDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbmZvQ2FyZC1pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmluZm9DYXJkX19zbWFsbC1pbWcge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbmZvQ2FyZF9fc21hbGwtaW1nIHtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgaGVpZ2h0OiAyMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG59XG5cbi5pbmZvQ2FyZF9fbWFpbkJsb2NrIHtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG5cbi5pbmZvQ2FyZF9fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgLyog0JfQsNCz0L7Qu9C+0LLQutC4L0gyICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7IC8qIDU3LjZweCAqL1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5pbmZvQ2FyZF9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAgIC8qIEhlYWRlci9IMyAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW5mb0NhcmRfX3RpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICAvKiBIZWFkZXIvSDQgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDMzLjZweCAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5pbmZvQ2FyZF9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBIZWFkZXIvSDQgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDMzLjZweCAqL1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmluZm9DYXJkX190ZXh0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gIC8qIEJvZHkgKNCe0YHQvdC+0LLQvdC+0Lkg0YLQtdC60YHRgikgLyBCMSAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaW5mb0NhcmRfX3RleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuICAgIC8qIEJvZHkvQjIgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmluZm9DYXJkX190ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC01MCwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgICAvKiBCb2R5L0IyICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5pbmZvQ2FyZF9fdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gICAgLyogQm9keS9CMiAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXG4gIH1cbn1cblxuLmluZm9DYXJkX19saXN0IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGdhcDogMjRweDtcbn1cblxuLmluZm9DYXJkX19saXN0LWVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTZweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXg6IDEgMCAwO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwLCByZ2JhKDYsIDEwNSwgMjU1LCAwLjEpKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaW5mb0NhcmRfX2xpc3QtZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDYsIDEwNSwgMjU1LCAwLjE1KTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbmZvQ2FyZF9fbGlzdC1lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAxIDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktMTAsIHJnYmEoNiwgMTA1LCAyNTUsIDAuMSkpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmluZm9DYXJkX19saXN0LWVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS0xMCwgcmdiYSg2LCAxMDUsIDI1NSwgMC4xKSk7XG4gIH1cbn1cblxuLmluZm9DYXJkX19saXN0LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktMTAwLCAjMDY2OWZmKTtcbiAgLyog0JfQsNCz0L7Qu9C+0LLQutC4L0gzIChCb2xkKSAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiA0NC44cHggKi9cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW5mb0NhcmRfX2xpc3QtdGl0bGUge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbi5pbmZvQ2FyZF9fbGlzdC10ZXh0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gIC8qIEJvZHkgKNCe0YHQvdC+0LLQvdC+0Lkg0YLQtdC60YHRgikgLyBCMSAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5pbmZvQ2FyZF9fbGlzdC10ZXh0IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLyogaW5mb0NhcmQgKi9cbi8qIHRhYmxlQmxvY2sgKi9cbi50YWJsZUJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZy10b3A6IDk2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5NnB4O1xufVxuXG4udGFibGVCbG9ja19fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiDQl9Cw0LPQvtC70L7QstC60LgvSDIgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTIwJTsgLyogNTcuNnB4ICovXG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50YWJsZUJsb2NrX190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIEhlYWRlci9IMyAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXG4gIH1cbn1cblxuLnRhYmxlQmxvY2tfX3RhYmxlIHtcbiAgZ2FwOiAyNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRhYmxlQmxvY2tfX3RhYmxlLWVsIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS0xMCwgcmdiYSg2LCAxMDUsIDI1NSwgMC4xKSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDI0cHg7XG4gIGZsZXg6IDEgMCAwO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuXG4udGFibGVCbG9ja19fdGFibGUtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cbn1cblxuLyogdGFibGVCbG9jayAqL1xuLyogb2ZmZXIgKi9cbi5vZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDk2cHggNzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2NHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vZmZlciAuc3dpcGVyLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5vZmZlciAuc3dpcGVyLXNsaWRlIHtcbiAgICBnYXA6IDY0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAub2ZmZXIgLnN3aXBlci1zbGlkZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5vZmZlciB7XG4gICAgcGFkZGluZzogMTZweCA4cHg7XG4gIH1cbn1cblxuLm9mZmVyX190aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qINCX0LDQs9C+0LvQvtCy0LrQuC9IMiAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjAlOyAvKiA1Ny42cHggKi9cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLm9mZmVyX190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIEhlYWRlci9IMyAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAub2ZmZXJfX3RpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogSGVhZGVyL0g0ICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiAzMy42cHggKi9cbiAgfVxufVxuXG4ub2ZmZXJfX21haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDQ4cHg7XG59XG5cbi5vZmZlcl9fc3dpcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm9mZmVyX19zd2lwZXItYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjRweDtcbn1cblxuLm9mZmVyX19tYWluQmxvY2stbGlzdC1Ub3AtZWwtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAvKiBCb2R5ICjQntGB0L3QvtCy0L3QvtC5INGC0LXQutGB0YIpIC8gQjEgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjguOHB4ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5vZmZlcl9fbWFpbkJsb2NrLWxpc3QtVG9wLWVsLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAgIC8qIEJvZHkvQjIgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkzcHgpIHtcbiAgLm9mZmVyX19tYWluQmxvY2stbGlzdC1Ub3AtZWwtdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gICAgLyogQm9keS9CMyAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjIuNHB4ICovXG4gIH1cbn1cblxuLm9mZmVyX19tYWluQmxvY2stbGlzdC1Cb3QtZWwtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAvKiBCb2R5ICjQntGB0L3QvtCy0L3QvtC5INGC0LXQutGB0YIpL0IzICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDIyLjRweCAqL1xufVxuXG4ub2ZmZXJfX21haW5CbG9jay1saXN0LUJvdCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5vZmZlcl9fcHJpY2Uge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgLyog0JfQsNCz0L7Qu9C+0LLQutC4L0gzICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDQ0LjhweCAqL1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ub2ZmZXJfX3ByaWNlLXNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgLyogQm9keSAo0J7RgdC90L7QstC90L7QuSDRgtC10LrRgdGCKSAvIEIxICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XG59XG5cbi5vZmZlcl9fbWFpbkJsb2NrLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gIC8qINCX0LDQs9C+0LvQvtCy0LrQuC9IMyAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiA0NC44cHggKi9cbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLm9mZmVyX19tYWluQmxvY2stdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAgIC8qIFRpdHRsZS9UMSAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTUwJTsgLyogMzZweCAqL1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLm9mZmVyX19zd2lwZXItaW1nIHtcbiAgICB3aWR0aDogMzk4cHg7XG4gICAgaGVpZ2h0OiA1ODRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5vZmZlcl9fc3dpcGVyLWltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ub2ZmZXJfX3N3aXBlci1pbWctbWluaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5vZmZlcl9fc3dpcGVyLWltZy1taW5pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm9mZmVyX19zd2lwZXItaW1nLW1pbmkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLm9mZmVyX19tYWluQmxvY2stbGlzdC1Ub3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5vZmZlcl9fbWFpbkJsb2NrLWxpc3QtVG9wLWVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ub2ZmZXJfX21haW5CbG9jay1saXN0LUJvdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5vZmZlcl9fbWFpbkJsb2NrLWxpc3QtQm90IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIH1cbn1cblxuLm9mZmVyX19tYWluQmxvY2stbGlzdC1Cb3QtZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGdhcDogMTJweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5vZmZlcl9fbWFpbkJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4ub2ZmZXItYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwYWRkaW5nOiAwcHggMzJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktMTAwLCAjMDY2OWZmKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBMaW5rcyZCdXR0b24vMTZweCAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAub2ZmZXItYnRuIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbi5vZmZlci1idG46aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3gtc2hhZG93OiAwcHggMTJweCAyNHB4IDBweCByZ2JhKDAsIDUzLCAxMjgsIDAuMzUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTAwJSksICMwMDRhYjI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9mZmVyX19zLWJ1dHRvbi1wcmV2LFxuLm9mZmVyX19zLWJ1dHRvbi1uZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub2ZmZXJfX3MtYnV0dG9uLXByZXYgcmVjdCxcbi5vZmZlcl9fcy1idXR0b24tbmV4dCByZWN0IHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5vZmZlcl9fcy1idXR0b24tcHJldiByZWN0OmhvdmVyLFxuLm9mZmVyX19zLWJ1dHRvbi1uZXh0IHJlY3Q6aG92ZXIge1xuICBmaWxsOiAjMDA0YWIyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4vKiBvZmZlciAqL1xuLyogcGFydG5lcnMgKi9cbi5wYXJ0bmVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctdG9wOiA5NnB4O1xuICBwYWRkaW5nLWJvdHRvbTogOTZweDtcbn1cblxuLnBhcnRuZXJzX190aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAvKiDQl9Cw0LPQvtC70L7QstC60LgvSDIgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTIwJTsgLyogNTcuNnB4ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcbn1cblxuLnBhcnRuZXJzX19saXN0IHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnBhcnRuZXJzX19saXN0IHtcbiAgICBnYXA6IDM0cHg7XG4gIH1cbn1cblxuLnBhcnRuZXJzX19saXN0LWVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYXJ0bmVyc19fbGlzdC1pbWcge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi8qIHBhcnRuZXJzICovXG4vKiByZXZpZXcgKi9cbi5yZXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nLXRvcDogOTZweDtcbiAgcGFkZGluZy1ib3R0b206IDk2cHg7XG4gIGdhcDogNjRweDtcbn1cblxuLnJldmlld19fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiDQl9Cw0LPQvtC70L7QstC60LgvSDIgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTIwJTsgLyogNTcuNnB4ICovXG59XG5cbi5yZXZpZXdfX3N3aXBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDI0cHg7XG59XG5cbi5zd2lwZXItc2xpZGVfX2wsXG4uc3dpcGVyLXNsaWRlX19yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjRweCA0OHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cblxuLnN3aXBlci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzMnB4O1xufVxuXG4ucmV2aWV3X190ZXh0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gIC8qIEJvZHkgKNCe0YHQvdC+0LLQvdC+0Lkg0YLQtdC60YHRgikgLyBCMSAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmV2aWV3X190ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICAvKiBCb2R5L0IzICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyMi40cHggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5yZXZpZXdfX3RleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAgIC8qIEJvZHkvQjMgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDIyLjRweCAqL1xuICB9XG59XG5cbi5yZXZpZXdfX2NhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5yZXZpZXdfX2luZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcbn1cblxuLnJldmlld19fbmFtZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAvKiBCb2R5ICjQntGB0L3QvtCy0L3QvtC5INGC0LXQutGB0YIpL0IyIChCb2xkKSAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmV2aWV3X19uYW1lIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICAvKiBCb2R5L0IzKEJvbGQpICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyMi40cHggKi9cbiAgfVxufVxuXG4ucmV2aWV3X19qb2Ige1xuICBjb2xvcjogdmFyKC0tdGV4dC01MCwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgLyogQm9keSAo0J7RgdC90L7QstC90L7QuSDRgtC10LrRgdGCKS9CMiAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmV2aWV3X19qb2Ige1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuICAgIC8qIEJvZHkvQjQgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDE5LjJweCAqL1xuICB9XG59XG5cbi5zLWJ1dHRvbi1wcmV2LFxuLnMtYnV0dG9uLW5leHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucy1idXR0b24tcHJldiByZWN0LFxuLnMtYnV0dG9uLW5leHQgcmVjdCB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4ucy1idXR0b24tcHJldiByZWN0OmhvdmVyLFxuLnMtYnV0dG9uLW5leHQgcmVjdDpob3ZlciB7XG4gIGZpbGw6ICMwMDRhYjI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLyogcmV2aWV3ICovXG4vKiBvcmRlciAqL1xuLm9yZGVyIHtcbiAgcGFkZGluZy10b3A6IDk2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5NnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5vcmRlcl9fbWFpbkJsb2NrIHtcbiAgICBnYXA6IDMycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAub3JkZXJfX21haW5CbG9jayB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuLm9yZGVyX190aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAvKiDQl9Cw0LPQvtC70L7QstC60LgvSDIgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTIwJTsgLyogNTcuNnB4ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5vcmRlcl9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAgIC8qIEhlYWRlci9IMyAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAub3JkZXJfX3RpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICAvKiBIZWFkZXIvSDQgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDMzLjZweCAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5vcmRlcl9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBIZWFkZXIvSDQgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDMzLjZweCAqL1xuICB9XG59XG5cbi5vcmRlcl9fdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuICAvKiBCb2R5ICjQntGB0L3QvtCy0L3QvtC5INGC0LXQutGB0YIpIC8gQjEgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjguOHB4ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5vcmRlcl9fdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gICAgLyogQm9keS9CMiAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAub3JkZXJfX3RleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuICAgIC8qIEJvZHkvQjIgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm9yZGVyX190ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC01MCwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgICAvKiBCb2R5L0IzICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyMi40cHggKi9cbiAgfVxufVxuXG4ub3JkZXJfX2Zvcm0ge1xuICBnYXA6IDI0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkzcHgpIHtcbiAgLm9yZGVyX19mb3JtIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG4ub3JkZXJfX2lucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwcHggMjRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm9yZGVyX19pbnB1dCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuLm9yZGVyX19zdWJtaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDBweCA0OHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwMCwgIzA2NjlmZik7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm9yZGVyX19zdWJtaXQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbi5vcmRlcl9fc3VibWl0OmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDEwMCUpLCAjMDA0YWIyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcmRlci1pbWcge1xuICBwYWRkaW5nOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5vcmRlci1pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogb3JkZXIgKi9cbi8qIGNvbnRhY3QgKi9cbi5jb250YWN0IHtcbiAgbWluLWhlaWdodDogNjc2cHg7XG4gIHBhZGRpbmc6IDEyMHB4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3Qge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi5jb250YWN0X19tYWluQmxvY2sge1xuICBib3JkZXItcmFkaXVzOiAxNnB4IDBweCAwcHggMTZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDE4LCAwLjkpO1xuICBwYWRkaW5nOiA2NHB4IDAgNjRweCA2NHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWN0X19tYWluQmxvY2sge1xuICAgIHBhZGRpbmc6IDMycHggMCAzMnB4IDMycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDM0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdF9fbWFpbkJsb2NrIHtcbiAgICBwYWRkaW5nOiA2NHB4IDY0cHggNjRweCA2NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cblxuLmNvbnRhY3RfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5jb250YWN0X19saXN0LWVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xuICAvKiDQotCw0LnRgtC7L1QyICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI4LjhweCAqL1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFjdF9fbGlzdC1lbCB7XG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgICAvKiBCb2R5L0IyKEJvbGQpICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0X19saXN0LWVsIHtcbiAgICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xuICAgIC8qIExpbmtzJkJ1dHRvbi8xNHB4ICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyMi40cHggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250YWN0X19saXN0LWVsIHtcbiAgICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xuICAgIC8qIEJvZHkvQjIoQm9sZCkgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xuICB9XG59XG5cbi5jb250YWN0LWltZyB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3QtaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuXG4uY29udGFjdF9fdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xuICAvKiDQl9Cw0LPQvtC70L7QstC60LgvSDMgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWN0X190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgICAvKiBUaXR0bGUvVDEgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7IC8qIDM2cHggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0X190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgICAvKiBUaXR0bGUvVDIgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI4LjhweCAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250YWN0X190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgICAvKiBUaXR0bGUvVDEgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7IC8qIDM2cHggKi9cbiAgfVxufVxuXG4vKiBjb250YWN0ICovXG4vKiBmb290ZXIgKi9cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDAuOTQ5MDE5NjA3OCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZm9vdGVyX19sb2dvLWxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLmZvb3Rlcl9fbWFpbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2NHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5mb290ZXJfX21haW4tZmxleCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLmZvb3Rlcl9fbmF2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDY0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmZvb3Rlcl9fbmF2LWZsZXgge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiAyNHB4O1xuICB9XG59XG5cbi5mb290ZXJfX25hdiAubWVudV9fbGlzdC1lbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2ZmZik7XG4gIC8qINCh0YHRi9C70LrQuCDQuCDQutC90L7Qv9C60LgvMTQgcHggKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjIuNHB4ICovXG59XG5cbi5zb2NpYWxfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNvY2lhbF9fbGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhC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bEpFO0VBSEY7SUFJSSxtQkFBQTtFRHFKRjtBQUNGLENBQUEsb0NBQUFcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib290c3RyYXAtZ3JpZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jvb3RzdHJhcC1ncmlkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG4gXCIpO1xyXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbW9iaWxlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG59KTtcclxuIiwiY29uc3Qgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIub2ZmZXJfX3N3aXBlclwiLCB7XHJcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gIFxyXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5vZmZlcl9fcy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLm9mZmVyX19zLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gIH0pOyIsImNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIucmV2aWV3X19zd2lwZXJcIiwge1xyXG4gIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgbG9vcDogZmFsc2UsXHJcblxyXG4gIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gIH0sXHJcblxyXG4gIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiBcIi5zLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICBwcmV2RWw6IFwiLnMtYnV0dG9uLXByZXZcIixcclxuICB9LFxyXG5cclxuICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXHJcbiAgfSxcclxufSk7XHJcbiIsImNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpO1xyXG5cclxuZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcclxuICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYmxvY2tJRCA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnN1YnN0cigxKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChibG9ja0lEKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICBibG9jazogXCJzdGFydFwiLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImZpbGVuYW1lXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vanMvbW9iaWxlX21lbnUuanNcIjtcclxuaW1wb3J0IFwiLi9qcy9vZmZlcl9fU3dpcGVyLmpzXCI7XHJcbmltcG9ydCBcIi4vanMvcmV2aWV3X19Td2lwZXIuanNcIjtcclxuaW1wb3J0IFwiLi9qcy9zY3JvbGwuanNcIjtcclxuaW1wb3J0IFwiLi9jc3MvcmVzZXQuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL2Jvb3RzdHJhcC1ncmlkLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9