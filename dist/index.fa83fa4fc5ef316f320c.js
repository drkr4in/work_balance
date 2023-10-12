/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss ***!
  \*********************************************************************************************************/
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
}`, "",{"version":3,"sources":["webpack://./src/css/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* header */\r\n.header {\r\n  height: 128px;\r\n  align-items: center;\r\n}\r\n.header__main-flex {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 64px;\r\n  justify-content: flex-end;\r\n  @media (max-width: 1200px) {\r\n    gap: 24px;\r\n    justify-content: center;\r\n  }\r\n  @media (max-width: 993px) {\r\n    justify-content: flex-end;\r\n  }\r\n}\r\n.menu-img {\r\n  position: relative;\r\n}\r\n.header__mobile {\r\n  display: none;\r\n  background-color: #f5f5f5;\r\n  padding: 16px 8px;\r\n  width: 200px;\r\n  @media (max-width: 992px) {\r\n    display: block;\r\n    position: absolute;\r\n    top: 35px;\r\n    top: -210px;\r\n    color: var(--text-primary, black);\r\n    font-family: Manrope;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 160%;\r\n    border-radius: 12px;\r\n    transition: 1s;\r\n  }\r\n}\r\n.header__mobile.open {\r\n  transform: translateY(140%);\r\n}\r\n.header__mobile-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n.header__nav,\r\n.header__number {\r\n  @media (max-width: 992px) {\r\n    display: none;\r\n  }\r\n}\r\n.menu-btn {\r\n  display: none;\r\n  @media (max-width: 992px) {\r\n    display: block;\r\n    background: none;\r\n    color: inherit;\r\n    border: none;\r\n    padding: 0;\r\n    font: inherit;\r\n    cursor: pointer;\r\n    outline: inherit;\r\n  }\r\n}\r\n.menu-btn:hover {\r\n  background: #fff;\r\n}\r\n.menu__list-flex {\r\n  display: flex;\r\n  gap: 32px;\r\n  @media (max-width: 992px) {\r\n    flex-direction: column;\r\n    gap: 16px;\r\n  }\r\n}\r\n.menu__list-el {\r\n  border-bottom: 2px solid #fff;\r\n  transition: 0.5s;\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Ссылки и кнопки/14 px */\r\n  font-family: Manrope;\r\n  font-size: 14px;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  line-height: 160%; /* 22.4px */\r\n}\r\n.menu__list-el:hover {\r\n  border-bottom: 2px solid #0669ff;\r\n  transition: 0.5s;\r\n}\r\n.header__number {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Ссылки и кнопки/16 px */\r\n  font-family: Manrope;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  line-height: 160%; /* 25.6px */\r\n}\r\n.header__number-flex {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  @media (max-width: 992px) {\r\n    display: none;\r\n  }\r\n}\r\n/* header */\r\n\r\n/* mainCard */\r\n.mainCard {\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  // background: url(../images/BG1440.png);\r\n  height: 688px;\r\n  @media (max-width: 992px) {\r\n    // background: url(../images/BG744.png);\r\n    background-size: cover;\r\n  }\r\n  @media (max-width: 768px) {\r\n    // background: url(../images/BG744.png);\r\n    height: 500px;\r\n  }\r\n  @media (max-width: 576px) {\r\n    // background: url(../images/BG360.png);\r\n    background-size: cover;\r\n  }\r\n}\r\n.mainCard-flex {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 48px;\r\n  justify-content: center;\r\n}\r\n.mainCard__title {\r\n  color: var(--bg-white, #fff);\r\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);\r\n\r\n  /* Header/H2 */\r\n  font-family: Manrope;\r\n  font-size: 48px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 120%; /* 57.6px */\r\n  @media (max-width: 992px) {\r\n    color: var(--bg-white, #fff);\r\n\r\n    /* Header/H2 */\r\n    font-family: Manrope;\r\n    font-size: 48px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 120%; /* 57.6px */\r\n  }\r\n  @media (max-width: 768px) {\r\n    color: var(--bg-white, #fff);\r\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);\r\n\r\n    /* Header/H2 */\r\n    font-family: Manrope;\r\n    font-size: 48px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 120%; /* 57.6px */\r\n  }\r\n  @media (max-width: 576px) {\r\n    color: var(--text-primary, #fff);\r\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\r\n\r\n    /* Header/H3 */\r\n    font-family: Manrope;\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140%; /* 44.8px */\r\n  }\r\n}\r\n.mainCard__text {\r\n  color: var(--bg-white, #fff);\r\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);\r\n\r\n  /* Tittle/T2 */\r\n  font-family: Manrope;\r\n  font-size: 18px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 160%; /* 28.8px */\r\n  @media (max-width: 992px) {\r\n    color: var(--bg-white, #fff);\r\n\r\n    /* Tittle/T2 */\r\n    font-family: Manrope;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 160%; /* 28.8px */\r\n  }\r\n  @media (max-width: 768px) {\r\n    color: var(--bg-white, #fff);\r\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);\r\n\r\n    /* Tittle/T2 */\r\n    font-family: Manrope;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 160%; /* 28.8px */\r\n  }\r\n  @media (max-width: 576px) {\r\n    color: var(--text-primary, #fff);\r\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);\r\n\r\n    /* Body/B1 */\r\n    font-family: Manrope;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 28.8px */\r\n  }\r\n}\r\n.mainCard__btn {\r\n  border-radius: 12px;\r\n  background: var(--primary-100, #0669ff);\r\n  display: flex;\r\n  height: 56px;\r\n  padding: 0px 48px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  border: none;\r\n  color: #fff;\r\n  text-align: center;\r\n\r\n  /* Links&Button/16px */\r\n  font-family: Manrope;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  line-height: 160%; /* 25.6px */\r\n  transition: 0.2s;\r\n}\r\n.mainCard__btn:hover {\r\n  transition: 0.2s;\r\n\r\n  box-shadow: 0px 12px 24px 0px rgba(0, 53, 128, 0.35);\r\n  background: linear-gradient(\r\n      0deg,\r\n      rgba(255, 255, 255, 0.1) 0%,\r\n      rgba(255, 255, 255, 0.1) 100%\r\n    ),\r\n    #004ab2;\r\n  cursor: pointer;\r\n}\r\n/* mainCard */\r\n\r\n/* infoCard */\r\n.infoCard {\r\n  background-color: #f5f5f5;\r\n  padding-top: 96px;\r\n  padding-bottom: 96px;\r\n  @media (max-width: 768px) {\r\n    padding-top: 64px;\r\n    padding-bottom: 64px;\r\n  }\r\n}\r\n.infoCard__imgBlock {\r\n  padding: 0;\r\n  position: relative;\r\n  @media (max-width: 768px) {\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n.infoCard-img {\r\n  padding-left: 0;\r\n  width: 600px;\r\n  height: 600px;\r\n  margin: auto 0;\r\n  @media (max-width: 1400px) {\r\n    width: 530px;\r\n    height: 550px;\r\n  }\r\n  @media (max-width: 1200px) {\r\n    width: 420px;\r\n    height: 560px;\r\n  }\r\n  @media (max-width: 992px) {\r\n    width: 330px;\r\n    height: 440px;\r\n  }\r\n  @media (max-width: 768px) {\r\n    display: none;\r\n  }\r\n}\r\n.infoCard__small-img {\r\n  display: none;\r\n  @media (max-width: 768px) {\r\n    width: 290px;\r\n    height: 210px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    margin-bottom: 24px;\r\n  }\r\n}\r\n.infoCard__mainBlock {\r\n  margin: auto 0;\r\n}\r\n.infoCard__title {\r\n  // margin-top: 64px;\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Заголовки/H2 */\r\n  font-family: Manrope;\r\n  font-size: 48px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 120%; /* 57.6px */\r\n  margin-bottom: 32px;\r\n  @media (max-width: 992px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n    /* Header/H3 */\r\n    font-family: Manrope;\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140%; /* 44.8px */\r\n  }\r\n  @media (max-width: 768px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n    /* Header/H4 */\r\n    font-family: Manrope;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140%; /* 33.6px */\r\n    text-align: center;\r\n  }\r\n  @media (max-width: 576px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n    text-align: center;\r\n\r\n    /* Header/H4 */\r\n    font-family: Manrope;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140%; /* 33.6px */\r\n  }\r\n}\r\n.empty {\r\n  @media (max-width: 768px) {\r\n    display: none;\r\n  }\r\n}\r\n.infoCard__text {\r\n  color: var(--text-50, rgba(0, 0, 0, 0.5));\r\n\r\n  /* Body (Основной текст) / B1 */\r\n  font-family: Manrope;\r\n  font-size: 18px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 160%; /* 28.8px */\r\n  margin-bottom: 64px;\r\n  @media (max-width: 992px) {\r\n    color: var(--text-50, rgba(0, 0, 0, 0.5));\r\n\r\n    /* Body/B2 */\r\n    font-family: Manrope;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 25.6px */\r\n  }\r\n  @media (max-width: 768px) {\r\n    color: var(--text-50, rgba(0, 0, 0, 0.5));\r\n\r\n    /* Body/B2 */\r\n    font-family: Manrope;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 25.6px */\r\n  }\r\n  @media (max-width: 576px) {\r\n    color: var(--text-50, rgba(0, 0, 0, 0.5));\r\n\r\n    /* Body/B2 */\r\n    font-family: Manrope;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 25.6px */\r\n  }\r\n}\r\n.infoCard__list {\r\n  margin: 0 auto;\r\n  gap: 24px;\r\n}\r\n.infoCard__list-el {\r\n  display: flex;\r\n  padding: 16px;\r\n  flex-direction: column;\r\n\r\n  align-items: flex-start;\r\n  flex: 1 0 0;\r\n  align-self: stretch;\r\n  border-radius: 16px;\r\n  background: var(--primary-10, rgba(6, 105, 255, 0.1));\r\n  @media (max-width: 992px) {\r\n    display: flex;\r\n    padding: 16px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    flex: 1 0 0;\r\n    align-self: stretch;\r\n    border-radius: 16px;\r\n    background: rgba(6, 105, 255, 0.15);\r\n  }\r\n  @media (max-width: 768px) {\r\n    display: flex;\r\n    padding: 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    flex: 1 0 0;\r\n    border-radius: 16px;\r\n    background: var(--primary-10, rgba(6, 105, 255, 0.1));\r\n  }\r\n  @media (max-width: 576px) {\r\n    display: flex;\r\n    padding: 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border-radius: 16px;\r\n    background: var(--primary-10, rgba(6, 105, 255, 0.1));\r\n  }\r\n}\r\n.infoCard__list-title {\r\n  color: var(--primary-100, #0669ff);\r\n\r\n  /* Заголовки/H3 (Bold) */\r\n  font-family: Manrope;\r\n  font-size: 32px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 140%; /* 44.8px */\r\n  @media (max-width: 576px) {\r\n    margin: 0 auto;\r\n  }\r\n}\r\n.infoCard__list-text {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Body (Основной текст) / B1 */\r\n  font-family: Manrope;\r\n  font-size: 18px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 160%;\r\n  @media (max-width: 576px) {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n  }\r\n}\r\n/* infoCard */\r\n\r\n/* tableBlock */\r\n.tableBlock {\r\n  background-color: #fff;\r\n  padding-top: 96px;\r\n  padding-bottom: 96px;\r\n}\r\n.tableBlock__title {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n  text-align: center;\r\n\r\n  /* Заголовки/H2 */\r\n  font-family: Manrope;\r\n  font-size: 48px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 120%; /* 57.6px */\r\n  margin-bottom: 64px;\r\n  @media (max-width: 1200px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n    text-align: center;\r\n\r\n    /* Header/H3 */\r\n    font-family: Manrope;\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140%; /* 44.8px */\r\n  }\r\n}\r\n.tableBlock__table {\r\n  gap: 24px;\r\n  margin: 0 auto;\r\n}\r\n.tableBlock__table-el {\r\n  border-radius: 16px;\r\n  background: var(--primary-10, rgba(6, 105, 255, 0.1));\r\n  display: flex;\r\n  padding: 24px;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  gap: 24px;\r\n  flex: 1 0 0;\r\n  align-self: stretch;\r\n}\r\n.tableBlock__table-text {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n  font-family: Manrope;\r\n  font-size: 18px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 160%; /* 28.8px */\r\n}\r\n/* tableBlock */\r\n\r\n/* offer */\r\n.offer {\r\n  background-color: #f5f5f5;\r\n  padding: 96px 72px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 64px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  .swiper-slide {\r\n    background-color: #fff;\r\n    justify-content: flex-start;\r\n    gap: 130px;\r\n    border-radius: 32px;\r\n    background: var(--bg-white, #fff);\r\n    @media (max-width: 1200px) {\r\n      gap: 64px;\r\n    }\r\n    @media (max-width: 992px) {\r\n      flex-direction: column;\r\n      padding-top: 32px;\r\n      padding-bottom: 32px;\r\n    }\r\n  }\r\n  @media (max-width: 576px) {\r\n    padding: 16px 8px;\r\n  }\r\n}\r\n.offer__title {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n  text-align: center;\r\n\r\n  /* Заголовки/H2 */\r\n  font-family: Manrope;\r\n  font-size: 48px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 120%; /* 57.6px */\r\n  @media (max-width: 1200px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n    text-align: center;\r\n\r\n    /* Header/H3 */\r\n    font-family: Manrope;\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140%; /* 44.8px */\r\n  }\r\n  @media (max-width: 768px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n    text-align: center;\r\n\r\n    /* Header/H4 */\r\n    font-family: Manrope;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140%; /* 33.6px */\r\n  }\r\n}\r\n.offer__main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 48px;\r\n}\r\n.offer__swiper {\r\n  overflow: hidden;\r\n}\r\n.offer__swiper-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 24px;\r\n}\r\n.offer__mainBlock-list-Top-el-text {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Body (Основной текст) / B1 */\r\n  font-family: Manrope;\r\n  font-size: 18px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 160%; /* 28.8px */\r\n  @media (max-width: 1200px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n    /* Body/B2 */\r\n    font-family: Manrope;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 25.6px */\r\n  }\r\n  @media (max-width: 993px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n    /* Body/B3 */\r\n    font-family: Manrope;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 22.4px */\r\n  }\r\n}\r\n.offer__mainBlock-list-Bot-el-text {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Body (Основной текст)/B3 */\r\n  font-family: Manrope;\r\n  font-size: 14px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 160%; /* 22.4px */\r\n}\r\n.offer__mainBlock-list-Bot {\r\n  margin-bottom: 40px;\r\n}\r\n.offer__price {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Заголовки/H3 */\r\n  font-family: Manrope;\r\n  font-size: 32px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 140%; /* 44.8px */\r\n  margin-bottom: 24px;\r\n}\r\n.offer__price-span {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Body (Основной текст) / B1 */\r\n  font-family: Manrope;\r\n  font-size: 18px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 160%;\r\n}\r\n.offer__mainBlock-title {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Заголовки/H3 */\r\n  font-family: Manrope;\r\n  font-size: 32px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 140%; /* 44.8px */\r\n  margin-bottom: 24px;\r\n  @media (max-width: 1200px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n    /* Tittle/T1 */\r\n    font-family: Manrope;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 150%; /* 36px */\r\n  }\r\n}\r\n.offer__swiper-img {\r\n  @media (max-width: 1200px) {\r\n    width: 398px;\r\n    height: 584px;\r\n  }\r\n  @media (max-width: 768px) {\r\n    display: none;\r\n  }\r\n}\r\n.offer__swiper-img-mini {\r\n  display: none;\r\n  @media (max-width: 1200px) {\r\n    display: none;\r\n  }\r\n  @media (max-width: 992px) {\r\n    display: none;\r\n  }\r\n}\r\n.offer__mainBlock-list-Top {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 24px;\r\n  margin-bottom: 40px;\r\n}\r\n.offer__mainBlock-list-Top-el {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n.offer__mainBlock-list-Bot {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  @media (max-width: 576px) {\r\n    padding-left: 14px;\r\n  }\r\n}\r\n.offer__mainBlock-list-Bot-el {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n  gap: 12px;\r\n}\r\n.offer__mainBlock {\r\n  @media (max-width: 576px) {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n.offer-btn {\r\n  display: flex;\r\n  height: 56px;\r\n  padding: 0px 32px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  flex-shrink: 0;\r\n  align-self: stretch;\r\n  border-radius: 12px;\r\n  background: var(--primary-100, #0669ff);\r\n  border: none;\r\n  color: #fff;\r\n  text-align: center;\r\n\r\n  /* Links&Button/16px */\r\n  font-family: Manrope;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  line-height: 160%; /* 25.6px */\r\n  @media (max-width: 576px) {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n.offer-btn:hover {\r\n  transition: 0.2s;\r\n  box-shadow: 0px 12px 24px 0px rgba(0, 53, 128, 0.35);\r\n  background: linear-gradient(\r\n      0deg,\r\n      rgba(255, 255, 255, 0.1) 0%,\r\n      rgba(255, 255, 255, 0.1) 100%\r\n    ),\r\n    #004ab2;\r\n  cursor: pointer;\r\n}\r\n.offer__s-button-prev,\r\n.offer__s-button-next {\r\n  cursor: pointer;\r\n}\r\n.offer__s-button-prev,\r\n.offer__s-button-next {\r\n  rect {\r\n    transition: 0.3s;\r\n  }\r\n  rect:hover {\r\n    fill: #004ab2;\r\n    transition: 0.3s;\r\n  }\r\n}\r\n/* offer */\r\n\r\n/* partners */\r\n.partners {\r\n  background-color: #fff;\r\n  padding-top: 96px;\r\n  padding-bottom: 96px;\r\n}\r\n.partners__title {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Заголовки/H2 */\r\n  font-family: Manrope;\r\n  font-size: 48px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 120%; /* 57.6px */\r\n  text-align: center;\r\n  margin-bottom: 64px;\r\n}\r\n.partners__list {\r\n  margin: 0 auto;\r\n  @media (max-width: 992px) {\r\n    gap: 34px;\r\n  }\r\n}\r\n.partners__list-el {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.partners__list-img {\r\n  width: 150px;\r\n}\r\n\r\n/* partners */\r\n\r\n/* review */\r\n.review {\r\n  background-color: #f5f5f5;\r\n  padding-top: 96px;\r\n  padding-bottom: 96px;\r\n  gap: 64px;\r\n}\r\n.review__title {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n  text-align: center;\r\n\r\n  /* Заголовки/H2 */\r\n  font-family: Manrope;\r\n  font-size: 48px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 120%; /* 57.6px */\r\n}\r\n.review__swiper {\r\n  overflow: hidden;\r\n  max-width: 100%;\r\n}\r\n.swiper-slide {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 24px;\r\n}\r\n.swiper-slide__l,\r\n.swiper-slide__r {\r\n  background-color: #fff;\r\n  padding: 24px 48px;\r\n  border-radius: 16px;\r\n  background: var(--bg-white, #fff);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 24px;\r\n}\r\n.swiper-button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 32px;\r\n}\r\n.review__text {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Body (Основной текст) / B1 */\r\n  font-family: Manrope;\r\n  font-size: 18px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 160%; /* 28.8px */\r\n  @media (max-width: 768px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n    /* Body/B3 */\r\n    font-family: Manrope;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 22.4px */\r\n  }\r\n  @media (max-width: 576px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n    /* Body/B3 */\r\n    font-family: Manrope;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 22.4px */\r\n  }\r\n}\r\n.review__card {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n.review__info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n}\r\n.review__name {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Body (Основной текст)/B2 (Bold) */\r\n  font-family: Manrope;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 160%; /* 25.6px */\r\n  @media (max-width: 768px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n    /* Body/B3(Bold) */\r\n    font-family: Manrope;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 160%; /* 22.4px */\r\n  }\r\n}\r\n.review__job {\r\n  color: var(--text-50, rgba(0, 0, 0, 0.5));\r\n\r\n  /* Body (Основной текст)/B2 */\r\n  font-family: Manrope;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 160%; /* 25.6px */\r\n  @media (max-width: 768px) {\r\n    color: var(--text-50, rgba(0, 0, 0, 0.5));\r\n\r\n    /* Body/B4 */\r\n    font-family: Manrope;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 19.2px */\r\n  }\r\n}\r\n.s-button-prev,\r\n.s-button-next {\r\n  cursor: pointer;\r\n  rect {\r\n    transition: 0.3s;\r\n  }\r\n  rect:hover {\r\n    fill: #004ab2;\r\n    transition: 0.3s;\r\n  }\r\n}\r\n\r\n.hide {\r\n  @media (max-width: 576px) {\r\n    display: none;\r\n  }\r\n}\r\n.swiper-button-disabled {\r\n  opacity: 0.5;\r\n}\r\n/* review */\r\n\r\n/* order */\r\n.order {\r\n  padding-top: 96px;\r\n  padding-bottom: 96px;\r\n}\r\n.order__mainBlock {\r\n  @media (max-width: 1200px) {\r\n    gap: 32px;\r\n  }\r\n  @media (max-width: 768px) {\r\n    margin: 0 auto;\r\n  }\r\n}\r\n.order__title {\r\n  color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n  /* Заголовки/H2 */\r\n  font-family: Manrope;\r\n  font-size: 48px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 120%; /* 57.6px */\r\n  @media (max-width: 1400px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n    /* Header/H3 */\r\n    font-family: Manrope;\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140%; /* 44.8px */\r\n  }\r\n  @media (max-width: 992px) {\r\n  }\r\n  @media (max-width: 768px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n\r\n    /* Header/H4 */\r\n    font-family: Manrope;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140%; /* 33.6px */\r\n    text-align: center;\r\n  }\r\n  @media (max-width: 576px) {\r\n    color: var(--text-90, rgba(0, 0, 0, 0.9));\r\n    text-align: center;\r\n\r\n    /* Header/H4 */\r\n    font-family: Manrope;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140%; /* 33.6px */\r\n  }\r\n}\r\n.order__text {\r\n  color: var(--text-50, rgba(0, 0, 0, 0.5));\r\n\r\n  /* Body (Основной текст) / B1 */\r\n  font-family: Manrope;\r\n  font-size: 18px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 160%; /* 28.8px */\r\n  @media (max-width: 1400px) {\r\n    color: var(--text-50, rgba(0, 0, 0, 0.5));\r\n\r\n    /* Body/B2 */\r\n    font-family: Manrope;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 25.6px */\r\n  }\r\n  @media (max-width: 768px) {\r\n    color: var(--text-50, rgba(0, 0, 0, 0.5));\r\n\r\n    /* Body/B2 */\r\n    font-family: Manrope;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 25.6px */\r\n  }\r\n  @media (max-width: 576px) {\r\n    color: var(--text-50, rgba(0, 0, 0, 0.5));\r\n\r\n    /* Body/B3 */\r\n    font-family: Manrope;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 160%; /* 22.4px */\r\n  }\r\n}\r\n.order__form {\r\n  gap: 24px;\r\n  @media (max-width: 993px) {\r\n    margin: 0 auto;\r\n  }\r\n}\r\n.order__input {\r\n  display: flex;\r\n  height: 48px;\r\n  padding: 0px 24px;\r\n  align-items: center;\r\n  gap: 10px;\r\n  align-self: stretch;\r\n  border-radius: 12px;\r\n  border: 2px solid rgba(0, 0, 0, 0.08);\r\n  background: var(--bg-white, #fff);\r\n  color: var(--text-50, rgba(0, 0, 0, 0.5));\r\n  font-family: Manrope;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: normal;\r\n  @media (max-width: 768px) {\r\n    margin: 0 auto;\r\n  }\r\n}\r\n.order__submit {\r\n  display: flex;\r\n  height: 48px;\r\n  padding: 0px 48px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  align-self: stretch;\r\n  border-radius: 12px;\r\n  background: var(--primary-100, #0669ff);\r\n  border: none;\r\n  color: var(--bg-white, #fff);\r\n  text-align: center;\r\n  font-family: Manrope;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  line-height: normal;\r\n  @media (max-width: 768px) {\r\n    margin: 0 auto;\r\n  }\r\n}\r\n.order__submit:hover {\r\n  transition: 0.2s;\r\n  background: linear-gradient(\r\n      0deg,\r\n      rgba(255, 255, 255, 0.1) 0%,\r\n      rgba(255, 255, 255, 0.1) 100%\r\n    ),\r\n    #004ab2;\r\n  cursor: pointer;\r\n}\r\n.order-img {\r\n  padding: 0;\r\n  @media (max-width: 992px) {\r\n    display: none;\r\n  }\r\n}\r\n/* order */\r\n\r\n/* contact */\r\n.contact {\r\n  min-height: 676px;\r\n  padding: 120px 0;\r\n  // background: url(\"../images/map.png\");\r\n  @media (max-width: 768px) {\r\n    // background: url(\"../images/map744.png\");\r\n  }\r\n  @media (max-width: 768px) {\r\n    background: url(none);\r\n    padding: 0;\r\n  }\r\n}\r\n.contact__mainBlock {\r\n  border-radius: 16px 0px 0px 16px;\r\n  background: rgba(18, 18, 18, 0.9);\r\n  padding: 64px 0 64px 64px;\r\n  flex-direction: column;\r\n  gap: 32px;\r\n  display: flex;\r\n  @media (max-width: 1200px) {\r\n    padding: 32px 0 32px 32px;\r\n    display: flex;\r\n    gap: 34px;\r\n  }\r\n  @media (max-width: 768px) {\r\n    padding: 64px 64px 64px 64px;\r\n    border-radius: 0;\r\n  }\r\n}\r\n.contact__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n}\r\n.contact__list-el {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  color: var(--bg-white, #fff);\r\n\r\n  /* Тайтл/T2 */\r\n  font-family: Manrope;\r\n  font-size: 18px;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  line-height: 160%; /* 28.8px */\r\n  @media (max-width: 1200px) {\r\n    color: var(--bg-white, #fff);\r\n\r\n    /* Body/B2(Bold) */\r\n    font-family: Manrope;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 160%; /* 25.6px */\r\n  }\r\n  @media (max-width: 768px) {\r\n    color: var(--bg-white, #fff);\r\n\r\n    /* Links&Button/14px */\r\n    font-family: Manrope;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 160%; /* 22.4px */\r\n  }\r\n  @media (max-width: 576px) {\r\n    color: var(--bg-white, #fff);\r\n\r\n    /* Body/B2(Bold) */\r\n    font-family: Manrope;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 160%; /* 25.6px */\r\n  }\r\n}\r\n.contact-img {\r\n  padding: 0;\r\n  display: none;\r\n  @media (max-width: 768px) {\r\n    display: block;\r\n    max-height: 500px;\r\n  }\r\n}\r\n.contact__title {\r\n  text-align: left;\r\n  color: var(--bg-white, #fff);\r\n\r\n  /* Заголовки/H3 */\r\n  font-family: Manrope;\r\n  font-size: 32px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  line-height: 140%; /* 44.8px */\r\n  @media (max-width: 1200px) {\r\n    color: var(--bg-white, #fff);\r\n\r\n    /* Tittle/T1 */\r\n    font-family: Manrope;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 150%; /* 36px */\r\n  }\r\n  @media (max-width: 768px) {\r\n    color: var(--bg-white, #fff);\r\n\r\n    /* Tittle/T2 */\r\n    font-family: Manrope;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 160%; /* 28.8px */\r\n    text-align: center;\r\n  }\r\n  @media (max-width: 576px) {\r\n    color: var(--bg-white, #fff);\r\n\r\n    /* Tittle/T1 */\r\n    font-family: Manrope;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 150%; /* 36px */\r\n  }\r\n}\r\n\r\n/* contact */\r\n\r\n/* footer */\r\n.footer {\r\n  // min-height: 144px;\r\n  background-color: #212121f2;\r\n  align-items: center;\r\n}\r\n.footer__logo-link {\r\n  @media (max-width: 992px) {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\r\n.footer__main-flex {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 64px;\r\n  justify-content: flex-end;\r\n  @media (max-width: 992px) {\r\n    justify-content: center;\r\n  }\r\n}\r\n.footer__nav-flex {\r\n  display: flex;\r\n  gap: 64px;\r\n  @media (max-width: 992px) {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    gap: 24px;\r\n  }\r\n}\r\n.footer__nav {\r\n  .menu__list-el {\r\n    border: none;\r\n    color: var(--text-primary, #fff);\r\n    /* Ссылки и кнопки/14 px */\r\n    font-family: Manrope;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 160%; /* 22.4px */\r\n  }\r\n}\r\n.social__list {\r\n  display: flex;\r\n  gap: 32px;\r\n  @media (max-width: 992px) {\r\n    margin-bottom: 24px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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

/*# sourceMappingURL=bootstrap-grid.css.map */`, "",{"version":3,"sources":["webpack://./src/css/bootstrap-grid.css"],"names":[],"mappings":"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c;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;EAChB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;AACF;AACA;EACE;IACE,YAAY;EACd;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;EAChB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;AACF;AACA;EACE;IACE,YAAY;EACd;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;EAChB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;AACF;AACA;EACE;IACE,YAAY;EACd;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;EAChB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,gBAAgB;EAClB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,gBAAgB;EAClB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,sBAAsB;EACxB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;EACA;;IAEE,mBAAmB;EACrB;AACF;AACA;EACE;IACE,YAAY;EACd;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,m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C3B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,uCAAuC;EACzC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,wBAAwB;IACxB,2BAA2B;EAC7B;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,iCAAiC;IACjC,gCAAgC;EAClC;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,yBAAyB;IACzB,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,kCAAkC;EACpC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,uCAAuC;EACzC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,wBAAwB;IACxB,2BAA2B;EAC7B;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,iCAAiC;IACjC,gCAAgC;EAClC;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,yBAAyB;IACzB,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,kCAAkC;EACpC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,uCAAuC;EACzC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,wBAAwB;IACxB,2BAA2B;EAC7B;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,iCAAiC;IACjC,gCAAgC;EAClC;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,yBAAyB;IACzB,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,kCAAkC;EACpC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,uCAAuC;EACzC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,wBAAwB;IACxB,2BAA2B;EAC7B;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,iCAAiC;IACjC,gCAAgC;EAClC;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,yBAAyB;IACzB,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,kCAAkC;EACpC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,yCAAyC;EAC3C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,wCAAwC;EAC1C;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kCAAkC;EACpC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,uCAAuC;EACzC;EACA;IACE,sCAAsC;EACxC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,0BAA0B;IAC1B,yBAAyB;EAC3B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,6BAA6B;IAC7B,4BAA4B;EAC9B;EACA;IACE,wBAAwB;IACxB,2BAA2B;EAC7B;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,6BAA6B;IAC7B,gCAAgC;EAClC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,2BAA2B;IAC3B,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,iCAAiC;IACjC,gCAAgC;EAClC;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,gCAAgC;IAChC,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,yBAAyB;IACzB,4BAA4B;EAC9B;EACA;IACE,+BAA+B;IAC/B,kCAAkC;EACpC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,8BAA8B;IAC9B,iCAAiC;EACnC;EACA;IACE,4BAA4B;IAC5B,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,iCAAiC;EACnC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,gCAAgC;EAClC;EACA;IACE,8BAA8B;EAChC;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,kCAAkC;EACpC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,6BAA6B;EAC/B;AACF;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,gCAAgC;EAClC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,+BAA+B;EACjC;EACA;IACE,wBAAwB;EAC1B;AACF;;AAEA,6CAA6C","sourcesContent":["/*!\n * Bootstrap Grid v5.3.1 (https://getbootstrap.com/)\n * Copyright 2011-2023 The Bootstrap Authors\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n.container,\n.container-fluid,\n.container-xxl,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 1400px) {\n  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1320px;\n  }\n}\n:root {\n  --bs-breakpoint-xs: 0;\n  --bs-breakpoint-sm: 576px;\n  --bs-breakpoint-md: 768px;\n  --bs-breakpoint-lg: 992px;\n  --bs-breakpoint-xl: 1200px;\n  --bs-breakpoint-xxl: 1400px;\n}\n\n.row {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * var(--bs-gutter-y));\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\n}\n.row > * {\n  box-sizing: border-box;\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n\n.col {\n  flex: 1 0 0%;\n}\n\n.row-cols-auto > * {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n.row-cols-1 > * {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.row-cols-2 > * {\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.row-cols-3 > * {\n  flex: 0 0 auto;\n  width: 33.3333333333%;\n}\n\n.row-cols-4 > * {\n  flex: 0 0 auto;\n  width: 25%;\n}\n\n.row-cols-5 > * {\n  flex: 0 0 auto;\n  width: 20%;\n}\n\n.row-cols-6 > * {\n  flex: 0 0 auto;\n  width: 16.6666666667%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n.col-1 {\n  flex: 0 0 auto;\n  width: 8.33333333%;\n}\n\n.col-2 {\n  flex: 0 0 auto;\n  width: 16.66666667%;\n}\n\n.col-3 {\n  flex: 0 0 auto;\n  width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}\n\n.col-5 {\n  flex: 0 0 auto;\n  width: 41.66666667%;\n}\n\n.col-6 {\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 auto;\n  width: 58.33333333%;\n}\n\n.col-8 {\n  flex: 0 0 auto;\n  width: 66.66666667%;\n}\n\n.col-9 {\n  flex: 0 0 auto;\n  width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 auto;\n  width: 83.33333333%;\n}\n\n.col-11 {\n  flex: 0 0 auto;\n  width: 91.66666667%;\n}\n\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.g-0,\n.gx-0 {\n  --bs-gutter-x: 0;\n}\n\n.g-0,\n.gy-0 {\n  --bs-gutter-y: 0;\n}\n\n.g-1,\n.gx-1 {\n  --bs-gutter-x: 0.25rem;\n}\n\n.g-1,\n.gy-1 {\n  --bs-gutter-y: 0.25rem;\n}\n\n.g-2,\n.gx-2 {\n  --bs-gutter-x: 0.5rem;\n}\n\n.g-2,\n.gy-2 {\n  --bs-gutter-y: 0.5rem;\n}\n\n.g-3,\n.gx-3 {\n  --bs-gutter-x: 1rem;\n}\n\n.g-3,\n.gy-3 {\n  --bs-gutter-y: 1rem;\n}\n\n.g-4,\n.gx-4 {\n  --bs-gutter-x: 1.5rem;\n}\n\n.g-4,\n.gy-4 {\n  --bs-gutter-y: 1.5rem;\n}\n\n.g-5,\n.gx-5 {\n  --bs-gutter-x: 3rem;\n}\n\n.g-5,\n.gy-5 {\n  --bs-gutter-y: 3rem;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex: 1 0 0%;\n  }\n  .row-cols-sm-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-sm-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-sm-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-sm-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-sm-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-sm-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-sm-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-sm-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-sm-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-sm-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-sm-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-sm-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-sm-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-sm-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-sm-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-sm-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-sm-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-sm-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-sm-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-sm-0,\n  .gx-sm-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-sm-0,\n  .gy-sm-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-sm-1,\n  .gx-sm-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-sm-1,\n  .gy-sm-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-sm-2,\n  .gx-sm-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-sm-2,\n  .gy-sm-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-sm-3,\n  .gx-sm-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-sm-3,\n  .gy-sm-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-sm-4,\n  .gx-sm-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-sm-4,\n  .gy-sm-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-sm-5,\n  .gx-sm-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-sm-5,\n  .gy-sm-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    flex: 1 0 0%;\n  }\n  .row-cols-md-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-md-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-md-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-md-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-md-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-md-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-md-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-md-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-md-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-md-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-md-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-md-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-md-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-md-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-md-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-md-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-md-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-md-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-md-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-md-0,\n  .gx-md-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-md-0,\n  .gy-md-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-md-1,\n  .gx-md-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-md-1,\n  .gy-md-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-md-2,\n  .gx-md-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-md-2,\n  .gy-md-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-md-3,\n  .gx-md-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-md-3,\n  .gy-md-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-md-4,\n  .gx-md-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-md-4,\n  .gy-md-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-md-5,\n  .gx-md-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-md-5,\n  .gy-md-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    flex: 1 0 0%;\n  }\n  .row-cols-lg-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-lg-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-lg-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-lg-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-lg-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-lg-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-lg-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-lg-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-lg-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-lg-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-lg-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-lg-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-lg-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-lg-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-lg-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-lg-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-lg-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-lg-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-lg-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-lg-0,\n  .gx-lg-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-lg-0,\n  .gy-lg-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-lg-1,\n  .gx-lg-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-lg-1,\n  .gy-lg-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-lg-2,\n  .gx-lg-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-lg-2,\n  .gy-lg-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-lg-3,\n  .gx-lg-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-lg-3,\n  .gy-lg-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-lg-4,\n  .gx-lg-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-lg-4,\n  .gy-lg-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-lg-5,\n  .gx-lg-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-lg-5,\n  .gy-lg-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    flex: 1 0 0%;\n  }\n  .row-cols-xl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-xl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-xl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-xl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-xl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-xl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-xl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-xl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-xl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-xl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-xl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-xl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-xl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-xl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-xl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-xl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-xl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-xl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-xl-0,\n  .gx-xl-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-xl-0,\n  .gy-xl-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-xl-1,\n  .gx-xl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-xl-1,\n  .gy-xl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-xl-2,\n  .gx-xl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-xl-2,\n  .gy-xl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-xl-3,\n  .gx-xl-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-xl-3,\n  .gy-xl-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-xl-4,\n  .gx-xl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-xl-4,\n  .gy-xl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-xl-5,\n  .gx-xl-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-xl-5,\n  .gy-xl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1400px) {\n  .col-xxl {\n    flex: 1 0 0%;\n  }\n  .row-cols-xxl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-xxl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-xxl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-xxl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-xxl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-xxl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-xxl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-xxl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-xxl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-xxl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xxl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-xxl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-xxl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-xxl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-xxl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-xxl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-xxl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-xxl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-xxl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-xxl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-xxl-0 {\n    margin-left: 0;\n  }\n  .offset-xxl-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-xxl-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-xxl-3 {\n    margin-left: 25%;\n  }\n  .offset-xxl-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-xxl-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-xxl-6 {\n    margin-left: 50%;\n  }\n  .offset-xxl-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-xxl-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-xxl-9 {\n    margin-left: 75%;\n  }\n  .offset-xxl-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-xxl-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-xxl-0,\n  .gx-xxl-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-xxl-0,\n  .gy-xxl-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-xxl-1,\n  .gx-xxl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-xxl-1,\n  .gy-xxl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-xxl-2,\n  .gx-xxl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-xxl-2,\n  .gy-xxl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-xxl-3,\n  .gx-xxl-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-xxl-3,\n  .gy-xxl-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-xxl-4,\n  .gx-xxl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-xxl-4,\n  .gy-xxl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-xxl-5,\n  .gx-xxl-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-xxl-5,\n  .gy-xxl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-grid {\n  display: grid !important;\n}\n\n.d-inline-grid {\n  display: inline-grid !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: inline-flex !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n\n.flex-row {\n  flex-direction: row !important;\n}\n\n.flex-column {\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  justify-content: space-around !important;\n}\n\n.justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n\n.align-items-start {\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  align-content: center !important;\n}\n\n.align-content-between {\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  align-self: auto !important;\n}\n\n.align-self-start {\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  align-self: stretch !important;\n}\n\n.order-first {\n  order: -1 !important;\n}\n\n.order-0 {\n  order: 0 !important;\n}\n\n.order-1 {\n  order: 1 !important;\n}\n\n.order-2 {\n  order: 2 !important;\n}\n\n.order-3 {\n  order: 3 !important;\n}\n\n.order-4 {\n  order: 4 !important;\n}\n\n.order-5 {\n  order: 5 !important;\n}\n\n.order-last {\n  order: 6 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.mx-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n\n.mx-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important;\n}\n\n.mx-3 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mt-3 {\n  margin-top: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 3rem !important;\n}\n\n.mt-auto {\n  margin-top: auto !important;\n}\n\n.me-0 {\n  margin-right: 0 !important;\n}\n\n.me-1 {\n  margin-right: 0.25rem !important;\n}\n\n.me-2 {\n  margin-right: 0.5rem !important;\n}\n\n.me-3 {\n  margin-right: 1rem !important;\n}\n\n.me-4 {\n  margin-right: 1.5rem !important;\n}\n\n.me-5 {\n  margin-right: 3rem !important;\n}\n\n.me-auto {\n  margin-right: auto !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 3rem !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.ms-0 {\n  margin-left: 0 !important;\n}\n\n.ms-1 {\n  margin-left: 0.25rem !important;\n}\n\n.ms-2 {\n  margin-left: 0.5rem !important;\n}\n\n.ms-3 {\n  margin-left: 1rem !important;\n}\n\n.ms-4 {\n  margin-left: 1.5rem !important;\n}\n\n.ms-5 {\n  margin-left: 3rem !important;\n}\n\n.ms-auto {\n  margin-left: auto !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.px-1 {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important;\n}\n\n.px-2 {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important;\n}\n\n.px-3 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pt-3 {\n  padding-top: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 3rem !important;\n}\n\n.pe-0 {\n  padding-right: 0 !important;\n}\n\n.pe-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pe-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pe-3 {\n  padding-right: 1rem !important;\n}\n\n.pe-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pe-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 3rem !important;\n}\n\n.ps-0 {\n  padding-left: 0 !important;\n}\n\n.ps-1 {\n  padding-left: 0.25rem !important;\n}\n\n.ps-2 {\n  padding-left: 0.5rem !important;\n}\n\n.ps-3 {\n  padding-left: 1rem !important;\n}\n\n.ps-4 {\n  padding-left: 1.5rem !important;\n}\n\n.ps-5 {\n  padding-left: 3rem !important;\n}\n\n@media (min-width: 576px) {\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-grid {\n    display: grid !important;\n  }\n  .d-sm-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-sm-none {\n    display: none !important;\n  }\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-sm-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n  .order-sm-first {\n    order: -1 !important;\n  }\n  .order-sm-0 {\n    order: 0 !important;\n  }\n  .order-sm-1 {\n    order: 1 !important;\n  }\n  .order-sm-2 {\n    order: 2 !important;\n  }\n  .order-sm-3 {\n    order: 3 !important;\n  }\n  .order-sm-4 {\n    order: 4 !important;\n  }\n  .order-sm-5 {\n    order: 5 !important;\n  }\n  .order-sm-last {\n    order: 6 !important;\n  }\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-sm-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-sm-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-sm-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mt-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-sm-auto {\n    margin-top: auto !important;\n  }\n  .me-sm-0 {\n    margin-right: 0 !important;\n  }\n  .me-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .me-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .me-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-sm-0 {\n    margin-left: 0 !important;\n  }\n  .ms-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-sm-auto {\n    margin-left: auto !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-sm-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-sm-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-sm-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-sm-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-sm-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pt-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pe-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-sm-0 {\n    padding-left: 0 !important;\n  }\n  .ps-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-sm-5 {\n    padding-left: 3rem !important;\n  }\n}\n@media (min-width: 768px) {\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-grid {\n    display: grid !important;\n  }\n  .d-md-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-md-none {\n    display: none !important;\n  }\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-md-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    align-self: center !important;\n  }\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n  .order-md-first {\n    order: -1 !important;\n  }\n  .order-md-0 {\n    order: 0 !important;\n  }\n  .order-md-1 {\n    order: 1 !important;\n  }\n  .order-md-2 {\n    order: 2 !important;\n  }\n  .order-md-3 {\n    order: 3 !important;\n  }\n  .order-md-4 {\n    order: 4 !important;\n  }\n  .order-md-5 {\n    order: 5 !important;\n  }\n  .order-md-last {\n    order: 6 !important;\n  }\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-md-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-md-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-md-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-md-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-md-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-md-0 {\n    margin-top: 0 !important;\n  }\n  .mt-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-md-auto {\n    margin-top: auto !important;\n  }\n  .me-md-0 {\n    margin-right: 0 !important;\n  }\n  .me-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-md-3 {\n    margin-right: 1rem !important;\n  }\n  .me-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-md-5 {\n    margin-right: 3rem !important;\n  }\n  .me-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-md-0 {\n    margin-left: 0 !important;\n  }\n  .ms-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-md-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-md-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-md-auto {\n    margin-left: auto !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-md-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-md-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-md-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-md-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-md-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-md-0 {\n    padding-top: 0 !important;\n  }\n  .pt-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-md-0 {\n    padding-right: 0 !important;\n  }\n  .pe-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-md-0 {\n    padding-left: 0 !important;\n  }\n  .ps-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-md-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-md-5 {\n    padding-left: 3rem !important;\n  }\n}\n@media (min-width: 992px) {\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-grid {\n    display: grid !important;\n  }\n  .d-lg-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-lg-none {\n    display: none !important;\n  }\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-lg-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n  .order-lg-first {\n    order: -1 !important;\n  }\n  .order-lg-0 {\n    order: 0 !important;\n  }\n  .order-lg-1 {\n    order: 1 !important;\n  }\n  .order-lg-2 {\n    order: 2 !important;\n  }\n  .order-lg-3 {\n    order: 3 !important;\n  }\n  .order-lg-4 {\n    order: 4 !important;\n  }\n  .order-lg-5 {\n    order: 5 !important;\n  }\n  .order-lg-last {\n    order: 6 !important;\n  }\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-lg-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-lg-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-lg-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mt-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-lg-auto {\n    margin-top: auto !important;\n  }\n  .me-lg-0 {\n    margin-right: 0 !important;\n  }\n  .me-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .me-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .me-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-lg-0 {\n    margin-left: 0 !important;\n  }\n  .ms-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-lg-auto {\n    margin-left: auto !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-lg-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-lg-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-lg-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-lg-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-lg-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pt-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pe-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-lg-0 {\n    padding-left: 0 !important;\n  }\n  .ps-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-lg-5 {\n    padding-left: 3rem !important;\n  }\n}\n@media (min-width: 1200px) {\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-grid {\n    display: grid !important;\n  }\n  .d-xl-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-xl-none {\n    display: none !important;\n  }\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-xl-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n  .order-xl-first {\n    order: -1 !important;\n  }\n  .order-xl-0 {\n    order: 0 !important;\n  }\n  .order-xl-1 {\n    order: 1 !important;\n  }\n  .order-xl-2 {\n    order: 2 !important;\n  }\n  .order-xl-3 {\n    order: 3 !important;\n  }\n  .order-xl-4 {\n    order: 4 !important;\n  }\n  .order-xl-5 {\n    order: 5 !important;\n  }\n  .order-xl-last {\n    order: 6 !important;\n  }\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-xl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-xl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-xl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mt-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-xl-auto {\n    margin-top: auto !important;\n  }\n  .me-xl-0 {\n    margin-right: 0 !important;\n  }\n  .me-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .me-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .me-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-xl-0 {\n    margin-left: 0 !important;\n  }\n  .ms-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-xl-auto {\n    margin-left: auto !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-xl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-xl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-xl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-xl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-xl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pt-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pe-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-xl-0 {\n    padding-left: 0 !important;\n  }\n  .ps-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-xl-5 {\n    padding-left: 3rem !important;\n  }\n}\n@media (min-width: 1400px) {\n  .d-xxl-inline {\n    display: inline !important;\n  }\n  .d-xxl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xxl-block {\n    display: block !important;\n  }\n  .d-xxl-grid {\n    display: grid !important;\n  }\n  .d-xxl-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-xxl-table {\n    display: table !important;\n  }\n  .d-xxl-table-row {\n    display: table-row !important;\n  }\n  .d-xxl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xxl-flex {\n    display: flex !important;\n  }\n  .d-xxl-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-xxl-none {\n    display: none !important;\n  }\n  .flex-xxl-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-xxl-row {\n    flex-direction: row !important;\n  }\n  .flex-xxl-column {\n    flex-direction: column !important;\n  }\n  .flex-xxl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xxl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xxl-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-xxl-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-xxl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-xxl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-xxl-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-xxl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xxl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-xxl-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xxl-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xxl-center {\n    justify-content: center !important;\n  }\n  .justify-content-xxl-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-xxl-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-xxl-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-xxl-start {\n    align-items: flex-start !important;\n  }\n  .align-items-xxl-end {\n    align-items: flex-end !important;\n  }\n  .align-items-xxl-center {\n    align-items: center !important;\n  }\n  .align-items-xxl-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-xxl-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-xxl-start {\n    align-content: flex-start !important;\n  }\n  .align-content-xxl-end {\n    align-content: flex-end !important;\n  }\n  .align-content-xxl-center {\n    align-content: center !important;\n  }\n  .align-content-xxl-between {\n    align-content: space-between !important;\n  }\n  .align-content-xxl-around {\n    align-content: space-around !important;\n  }\n  .align-content-xxl-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-xxl-auto {\n    align-self: auto !important;\n  }\n  .align-self-xxl-start {\n    align-self: flex-start !important;\n  }\n  .align-self-xxl-end {\n    align-self: flex-end !important;\n  }\n  .align-self-xxl-center {\n    align-self: center !important;\n  }\n  .align-self-xxl-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-xxl-stretch {\n    align-self: stretch !important;\n  }\n  .order-xxl-first {\n    order: -1 !important;\n  }\n  .order-xxl-0 {\n    order: 0 !important;\n  }\n  .order-xxl-1 {\n    order: 1 !important;\n  }\n  .order-xxl-2 {\n    order: 2 !important;\n  }\n  .order-xxl-3 {\n    order: 3 !important;\n  }\n  .order-xxl-4 {\n    order: 4 !important;\n  }\n  .order-xxl-5 {\n    order: 5 !important;\n  }\n  .order-xxl-last {\n    order: 6 !important;\n  }\n  .m-xxl-0 {\n    margin: 0 !important;\n  }\n  .m-xxl-1 {\n    margin: 0.25rem !important;\n  }\n  .m-xxl-2 {\n    margin: 0.5rem !important;\n  }\n  .m-xxl-3 {\n    margin: 1rem !important;\n  }\n  .m-xxl-4 {\n    margin: 1.5rem !important;\n  }\n  .m-xxl-5 {\n    margin: 3rem !important;\n  }\n  .m-xxl-auto {\n    margin: auto !important;\n  }\n  .mx-xxl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-xxl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-xxl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-xxl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-xxl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-xxl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-xxl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-xxl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-xxl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-xxl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-xxl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-xxl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-xxl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-xxl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-xxl-0 {\n    margin-top: 0 !important;\n  }\n  .mt-xxl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-xxl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-xxl-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-xxl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-xxl-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-xxl-auto {\n    margin-top: auto !important;\n  }\n  .me-xxl-0 {\n    margin-right: 0 !important;\n  }\n  .me-xxl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-xxl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-xxl-3 {\n    margin-right: 1rem !important;\n  }\n  .me-xxl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-xxl-5 {\n    margin-right: 3rem !important;\n  }\n  .me-xxl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xxl-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-xxl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-xxl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xxl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xxl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-xxl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-xxl-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-xxl-0 {\n    margin-left: 0 !important;\n  }\n  .ms-xxl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-xxl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-xxl-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-xxl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-xxl-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-xxl-auto {\n    margin-left: auto !important;\n  }\n  .p-xxl-0 {\n    padding: 0 !important;\n  }\n  .p-xxl-1 {\n    padding: 0.25rem !important;\n  }\n  .p-xxl-2 {\n    padding: 0.5rem !important;\n  }\n  .p-xxl-3 {\n    padding: 1rem !important;\n  }\n  .p-xxl-4 {\n    padding: 1.5rem !important;\n  }\n  .p-xxl-5 {\n    padding: 3rem !important;\n  }\n  .px-xxl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-xxl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-xxl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-xxl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-xxl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-xxl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-xxl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-xxl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-xxl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-xxl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-xxl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-xxl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-xxl-0 {\n    padding-top: 0 !important;\n  }\n  .pt-xxl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-xxl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-xxl-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-xxl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-xxl-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-xxl-0 {\n    padding-right: 0 !important;\n  }\n  .pe-xxl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-xxl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-xxl-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-xxl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-xxl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xxl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-xxl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-xxl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-xxl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-xxl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-xxl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-xxl-0 {\n    padding-left: 0 !important;\n  }\n  .ps-xxl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-xxl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-xxl-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-xxl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-xxl-5 {\n    padding-left: 3rem !important;\n  }\n}\n@media print {\n  .d-print-inline {\n    display: inline !important;\n  }\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n  .d-print-block {\n    display: block !important;\n  }\n  .d-print-grid {\n    display: grid !important;\n  }\n  .d-print-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-print-table {\n    display: table !important;\n  }\n  .d-print-table-row {\n    display: table-row !important;\n  }\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n  .d-print-flex {\n    display: flex !important;\n  }\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-print-none {\n    display: none !important;\n  }\n}\n\n/*# sourceMappingURL=bootstrap-grid.css.map */"],"sourceRoot":""}]);
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

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZmE4M2ZhNGZjNWVmMzE2ZjMyMGMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyw2S0FBdUI7QUFDbkUsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsV0FBVyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxXQUFXLFVBQVUsS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxLQUFLLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsT0FBTyxXQUFXLFVBQVUsS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsT0FBTyxXQUFXLFVBQVUsS0FBSyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sV0FBVyxVQUFVLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sV0FBVyxVQUFVLEtBQUssV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxxQkFBcUIsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcscUJBQXFCLE1BQU0sTUFBTSxXQUFXLFVBQVUsS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQsZ0dBQWdHLEtBQUssV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFB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R0FBRztBQUNIOzs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNFO0FBQ0M7QUFDUjtBQUNDO0FBQ1M7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmstYmFsYW5jZS8uL3NyYy9jc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9zcmMvY3NzL2Jvb3RzdHJhcC1ncmlkLmNzcyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dvcmstYmFsYW5jZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzNmZjAiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vc3JjL2Nzcy9ib290c3RyYXAtZ3JpZC5jc3M/Yzg1NSIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL3dvcmstYmFsYW5jZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dvcmstYmFsYW5jZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlLy4vc3JjL2pzL21vYmlsZV9tZW51LmpzIiwid2VicGFjazovL3dvcmstYmFsYW5jZS8uL3NyYy9qcy9vZmZlcl9fU3dpcGVyLmpzIiwid2VicGFjazovL3dvcmstYmFsYW5jZS8uL3NyYy9qcy9yZXZpZXdfX1N3aXBlci5qcyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9zcmMvanMvc2Nyb2xsLmpzIiwid2VicGFjazovL3dvcmstYmFsYW5jZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd29yay1iYWxhbmNlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93b3JrLWJhbGFuY2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIm5vbmVcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIGhlYWRlciAqL1xuLmhlYWRlciB7XG4gIGhlaWdodDogMTI4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXJfX21haW4tZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNjRweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlcl9fbWFpbi1mbGV4IHtcbiAgICBnYXA6IDI0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTNweCkge1xuICAuaGVhZGVyX19tYWluLWZsZXgge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn1cblxuLm1lbnUtaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyX19tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXJfX21vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzVweDtcbiAgICB0b3A6IC0yMTBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCBibGFjayk7XG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gIH1cbn1cblxuLmhlYWRlcl9fbW9iaWxlLm9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTQwJSk7XG59XG5cbi5oZWFkZXJfX21vYmlsZS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXJfX25hdixcbiAgLmhlYWRlcl9fbnVtYmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5tZW51LWJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1lbnUtYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IGluaGVyaXQ7XG4gIH1cbn1cblxuLm1lbnUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLm1lbnVfX2xpc3QtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWVudV9fbGlzdC1mbGV4IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgfVxufVxuXG4ubWVudV9fbGlzdC1lbCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgLyog0KHRgdGL0LvQutC4INC4INC60L3QvtC/0LrQuC8xNCBweCAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyMi40cHggKi9cbn1cblxuLm1lbnVfX2xpc3QtZWw6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2NjlmZjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmhlYWRlcl9fbnVtYmVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gIC8qINCh0YHRi9C70LrQuCDQuCDQutC90L7Qv9C60LgvMTYgcHggKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXG59XG5cbi5oZWFkZXJfX251bWJlci1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmhlYWRlcl9fbnVtYmVyLWZsZXgge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogaGVhZGVyICovXG4vKiBtYWluQ2FyZCAqL1xuLm1haW5DYXJkIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDY4OHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluQ2FyZCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluQ2FyZCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5tYWluQ2FyZCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxufVxuXG4ubWFpbkNhcmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNDhweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluQ2FyZF9fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgLyogSGVhZGVyL0gyICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7IC8qIDU3LjZweCAqL1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluQ2FyZF9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG4gICAgLyogSGVhZGVyL0gyICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlOyAvKiA1Ny42cHggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluQ2FyZF9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgLyogSGVhZGVyL0gyICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlOyAvKiA1Ny42cHggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5tYWluQ2FyZF9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICNmZmYpO1xuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIC8qIEhlYWRlci9IMyAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXG4gIH1cbn1cblxuLm1haW5DYXJkX190ZXh0IHtcbiAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIC8qIFRpdHRsZS9UMiAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFpbkNhcmRfX3RleHQge1xuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG4gICAgLyogVGl0dGxlL1QyICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluQ2FyZF9fdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAvKiBUaXR0bGUvVDIgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI4LjhweCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1haW5DYXJkX190ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjZmZmKTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAvKiBCb2R5L0IxICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cbiAgfVxufVxuXG4ubWFpbkNhcmRfX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktMTAwLCAjMDY2OWZmKTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwYWRkaW5nOiAwcHggNDhweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBMaW5rcyZCdXR0b24vMTZweCAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLm1haW5DYXJkX19idG46aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3gtc2hhZG93OiAwcHggMTJweCAyNHB4IDBweCByZ2JhKDAsIDUzLCAxMjgsIDAuMzUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTAwJSksICMwMDRhYjI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogbWFpbkNhcmQgKi9cbi8qIGluZm9DYXJkICovXG4uaW5mb0NhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nLXRvcDogOTZweDtcbiAgcGFkZGluZy1ib3R0b206IDk2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmluZm9DYXJkIHtcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjRweDtcbiAgfVxufVxuXG4uaW5mb0NhcmRfX2ltZ0Jsb2NrIHtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbmZvQ2FyZF9faW1nQmxvY2sge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbi5pbmZvQ2FyZC1pbWcge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5pbmZvQ2FyZC1pbWcge1xuICAgIHdpZHRoOiA1MzBweDtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5pbmZvQ2FyZC1pbWcge1xuICAgIHdpZHRoOiA0MjBweDtcbiAgICBoZWlnaHQ6IDU2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmluZm9DYXJkLWltZyB7XG4gICAgd2lkdGg6IDMzMHB4O1xuICAgIGhlaWdodDogNDQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW5mb0NhcmQtaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5pbmZvQ2FyZF9fc21hbGwtaW1nIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW5mb0NhcmRfX3NtYWxsLWltZyB7XG4gICAgd2lkdGg6IDI5MHB4O1xuICAgIGhlaWdodDogMjEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxufVxuXG4uaW5mb0NhcmRfX21haW5CbG9jayB7XG4gIG1hcmdpbjogYXV0byAwO1xufVxuXG4uaW5mb0NhcmRfX3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gIC8qINCX0LDQs9C+0LvQvtCy0LrQuC9IMiAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjAlOyAvKiA1Ny42cHggKi9cbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaW5mb0NhcmRfX3RpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICAvKiBIZWFkZXIvSDMgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDQ0LjhweCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmluZm9DYXJkX190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gICAgLyogSGVhZGVyL0g0ICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiAzMy42cHggKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW5mb0NhcmRfX3RpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogSGVhZGVyL0g0ICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiAzMy42cHggKi9cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5pbmZvQ2FyZF9fdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuICAvKiBCb2R5ICjQntGB0L3QvtCy0L3QvtC5INGC0LXQutGB0YIpIC8gQjEgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjguOHB4ICovXG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmluZm9DYXJkX190ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC01MCwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgICAvKiBCb2R5L0IyICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbmZvQ2FyZF9fdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gICAgLyogQm9keS9CMiAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW5mb0NhcmRfX3RleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuICAgIC8qIEJvZHkvQjIgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xuICB9XG59XG5cbi5pbmZvQ2FyZF9fbGlzdCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBnYXA6IDI0cHg7XG59XG5cbi5pbmZvQ2FyZF9fbGlzdC1lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4OiAxIDAgMDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS0xMCwgcmdiYSg2LCAxMDUsIDI1NSwgMC4xKSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmluZm9DYXJkX19saXN0LWVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAxIDAgMDtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSg2LCAxMDUsIDI1NSwgMC4xNSk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW5mb0NhcmRfX2xpc3QtZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleDogMSAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwLCByZ2JhKDYsIDEwNSwgMjU1LCAwLjEpKTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5pbmZvQ2FyZF9fbGlzdC1lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktMTAsIHJnYmEoNiwgMTA1LCAyNTUsIDAuMSkpO1xuICB9XG59XG5cbi5pbmZvQ2FyZF9fbGlzdC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTEwMCwgIzA2NjlmZik7XG4gIC8qINCX0LDQs9C+0LvQvtCy0LrQuC9IMyAoQm9sZCkgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmluZm9DYXJkX19saXN0LXRpdGxlIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG4uaW5mb0NhcmRfX2xpc3QtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAvKiBCb2R5ICjQntGB0L3QvtCy0L3QvtC5INGC0LXQutGB0YIpIC8gQjEgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTYwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW5mb0NhcmRfX2xpc3QtdGV4dCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi8qIGluZm9DYXJkICovXG4vKiB0YWJsZUJsb2NrICovXG4udGFibGVCbG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctdG9wOiA5NnB4O1xuICBwYWRkaW5nLWJvdHRvbTogOTZweDtcbn1cblxuLnRhYmxlQmxvY2tfX3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyog0JfQsNCz0L7Qu9C+0LLQutC4L0gyICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7IC8qIDU3LjZweCAqL1xuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAudGFibGVCbG9ja19fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBIZWFkZXIvSDMgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDQ0LjhweCAqL1xuICB9XG59XG5cbi50YWJsZUJsb2NrX190YWJsZSB7XG4gIGdhcDogMjRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi50YWJsZUJsb2NrX190YWJsZS1lbCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktMTAsIHJnYmEoNiwgMTA1LCAyNTUsIDAuMSkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAyNHB4O1xuICBmbGV4OiAxIDAgMDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbn1cblxuLnRhYmxlQmxvY2tfX3RhYmxlLXRleHQge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjguOHB4ICovXG59XG5cbi8qIHRhYmxlQmxvY2sgKi9cbi8qIG9mZmVyICovXG4ub2ZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nOiA5NnB4IDcycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNjRweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub2ZmZXIgLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAub2ZmZXIgLnN3aXBlci1zbGlkZSB7XG4gICAgZ2FwOiA2NHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm9mZmVyIC5zd2lwZXItc2xpZGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAub2ZmZXIge1xuICAgIHBhZGRpbmc6IDE2cHggOHB4O1xuICB9XG59XG5cbi5vZmZlcl9fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiDQl9Cw0LPQvtC70L7QstC60LgvSDIgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTIwJTsgLyogNTcuNnB4ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5vZmZlcl9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBIZWFkZXIvSDMgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDQ0LjhweCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm9mZmVyX190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIEhlYWRlci9INCAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogMzMuNnB4ICovXG4gIH1cbn1cblxuLm9mZmVyX19tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0OHB4O1xufVxuXG4ub2ZmZXJfX3N3aXBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vZmZlcl9fc3dpcGVyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI0cHg7XG59XG5cbi5vZmZlcl9fbWFpbkJsb2NrLWxpc3QtVG9wLWVsLXRleHQge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgLyogQm9keSAo0J7RgdC90L7QstC90L7QuSDRgtC10LrRgdGCKSAvIEIxICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI4LjhweCAqL1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAub2ZmZXJfX21haW5CbG9jay1saXN0LVRvcC1lbC10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICAvKiBCb2R5L0IyICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5M3B4KSB7XG4gIC5vZmZlcl9fbWFpbkJsb2NrLWxpc3QtVG9wLWVsLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAgIC8qIEJvZHkvQjMgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDIyLjRweCAqL1xuICB9XG59XG5cbi5vZmZlcl9fbWFpbkJsb2NrLWxpc3QtQm90LWVsLXRleHQge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgLyogQm9keSAo0J7RgdC90L7QstC90L7QuSDRgtC10LrRgdGCKS9CMyAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyMi40cHggKi9cbn1cblxuLm9mZmVyX19tYWluQmxvY2stbGlzdC1Cb3Qge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ub2ZmZXJfX3ByaWNlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gIC8qINCX0LDQs9C+0LvQvtCy0LrQuC9IMyAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiA0NC44cHggKi9cbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLm9mZmVyX19wcmljZS1zcGFuIHtcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gIC8qIEJvZHkgKNCe0YHQvdC+0LLQvdC+0Lkg0YLQtdC60YHRgikgLyBCMSAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlO1xufVxuXG4ub2ZmZXJfX21haW5CbG9jay10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAvKiDQl9Cw0LPQvtC70L7QstC60LgvSDMgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5vZmZlcl9fbWFpbkJsb2NrLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICAvKiBUaXR0bGUvVDEgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7IC8qIDM2cHggKi9cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5vZmZlcl9fc3dpcGVyLWltZyB7XG4gICAgd2lkdGg6IDM5OHB4O1xuICAgIGhlaWdodDogNTg0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAub2ZmZXJfX3N3aXBlci1pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLm9mZmVyX19zd2lwZXItaW1nLW1pbmkge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAub2ZmZXJfX3N3aXBlci1pbWctbWluaSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5vZmZlcl9fc3dpcGVyLWltZy1taW5pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5vZmZlcl9fbWFpbkJsb2NrLWxpc3QtVG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ub2ZmZXJfX21haW5CbG9jay1saXN0LVRvcC1lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuLm9mZmVyX19tYWluQmxvY2stbGlzdC1Cb3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAub2ZmZXJfX21haW5CbG9jay1saXN0LUJvdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICB9XG59XG5cbi5vZmZlcl9fbWFpbkJsb2NrLWxpc3QtQm90LWVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBnYXA6IDEycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAub2ZmZXJfX21haW5CbG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuLm9mZmVyLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTZweDtcbiAgcGFkZGluZzogMHB4IDMycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwMCwgIzA2NjlmZik7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogTGlua3MmQnV0dG9uLzE2cHggKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm9mZmVyLWJ0biB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG4ub2ZmZXItYnRuOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMjRweCAwcHggcmdiYSgwLCA1MywgMTI4LCAwLjM1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDEwMCUpLCAjMDA0YWIyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vZmZlcl9fcy1idXR0b24tcHJldixcbi5vZmZlcl9fcy1idXR0b24tbmV4dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9mZmVyX19zLWJ1dHRvbi1wcmV2IHJlY3QsXG4ub2ZmZXJfX3MtYnV0dG9uLW5leHQgcmVjdCB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4ub2ZmZXJfX3MtYnV0dG9uLXByZXYgcmVjdDpob3Zlcixcbi5vZmZlcl9fcy1idXR0b24tbmV4dCByZWN0OmhvdmVyIHtcbiAgZmlsbDogIzAwNGFiMjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLyogb2ZmZXIgKi9cbi8qIHBhcnRuZXJzICovXG4ucGFydG5lcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogOTZweDtcbiAgcGFkZGluZy1ib3R0b206IDk2cHg7XG59XG5cbi5wYXJ0bmVyc19fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgLyog0JfQsNCz0L7Qu9C+0LLQutC4L0gyICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7IC8qIDU3LjZweCAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XG59XG5cbi5wYXJ0bmVyc19fbGlzdCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5wYXJ0bmVyc19fbGlzdCB7XG4gICAgZ2FwOiAzNHB4O1xuICB9XG59XG5cbi5wYXJ0bmVyc19fbGlzdC1lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFydG5lcnNfX2xpc3QtaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4vKiBwYXJ0bmVycyAqL1xuLyogcmV2aWV3ICovXG4ucmV2aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZy10b3A6IDk2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5NnB4O1xuICBnYXA6IDY0cHg7XG59XG5cbi5yZXZpZXdfX3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyog0JfQsNCz0L7Qu9C+0LLQutC4L0gyICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7IC8qIDU3LjZweCAqL1xufVxuXG4ucmV2aWV3X19zd2lwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyNHB4O1xufVxuXG4uc3dpcGVyLXNsaWRlX19sLFxuLnN3aXBlci1zbGlkZV9fciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDI0cHggNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG59XG5cbi5zd2lwZXItYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMzJweDtcbn1cblxuLnJldmlld19fdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xuICAvKiBCb2R5ICjQntGB0L3QvtCy0L3QvtC5INGC0LXQutGB0YIpIC8gQjEgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjguOHB4ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJldmlld19fdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gICAgLyogQm9keS9CMyAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjIuNHB4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucmV2aWV3X190ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICAvKiBCb2R5L0IzICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyMi40cHggKi9cbiAgfVxufVxuXG4ucmV2aWV3X19jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ucmV2aWV3X19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5yZXZpZXdfX25hbWUge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgLyogQm9keSAo0J7RgdC90L7QstC90L7QuSDRgtC10LrRgdGCKS9CMiAoQm9sZCkgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJldmlld19fbmFtZSB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gICAgLyogQm9keS9CMyhCb2xkKSAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjIuNHB4ICovXG4gIH1cbn1cblxuLnJldmlld19fam9iIHtcbiAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gIC8qIEJvZHkgKNCe0YHQvdC+0LLQvdC+0Lkg0YLQtdC60YHRgikvQjIgKi9cbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJldmlld19fam9iIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC01MCwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgICAvKiBCb2R5L0I0ICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAxOS4ycHggKi9cbiAgfVxufVxuXG4ucy1idXR0b24tcHJldixcbi5zLWJ1dHRvbi1uZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnMtYnV0dG9uLXByZXYgcmVjdCxcbi5zLWJ1dHRvbi1uZXh0IHJlY3Qge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnMtYnV0dG9uLXByZXYgcmVjdDpob3Zlcixcbi5zLWJ1dHRvbi1uZXh0IHJlY3Q6aG92ZXIge1xuICBmaWxsOiAjMDA0YWIyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi8qIHJldmlldyAqL1xuLyogb3JkZXIgKi9cbi5vcmRlciB7XG4gIHBhZGRpbmctdG9wOiA5NnB4O1xuICBwYWRkaW5nLWJvdHRvbTogOTZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAub3JkZXJfX21haW5CbG9jayB7XG4gICAgZ2FwOiAzMnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm9yZGVyX19tYWluQmxvY2sge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbi5vcmRlcl9fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgLyog0JfQsNCz0L7Qu9C+0LLQutC4L0gyICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7IC8qIDU3LjZweCAqL1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAub3JkZXJfX3RpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICAvKiBIZWFkZXIvSDMgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDQ0LjhweCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm9yZGVyX190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XG4gICAgLyogSGVhZGVyL0g0ICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiAzMy42cHggKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAub3JkZXJfX3RpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogSGVhZGVyL0g0ICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiAzMy42cHggKi9cbiAgfVxufVxuXG4ub3JkZXJfX3RleHQge1xuICBjb2xvcjogdmFyKC0tdGV4dC01MCwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgLyogQm9keSAo0J7RgdC90L7QstC90L7QuSDRgtC10LrRgdGCKSAvIEIxICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI4LjhweCAqL1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAub3JkZXJfX3RleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuICAgIC8qIEJvZHkvQjIgKi9cbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm9yZGVyX190ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC01MCwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgICAvKiBCb2R5L0IyICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5vcmRlcl9fdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gICAgLyogQm9keS9CMyAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjIuNHB4ICovXG4gIH1cbn1cblxuLm9yZGVyX19mb3JtIHtcbiAgZ2FwOiAyNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5M3B4KSB7XG4gIC5vcmRlcl9fZm9ybSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuLm9yZGVyX19pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMHB4IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xuICBjb2xvcjogdmFyKC0tdGV4dC01MCwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5vcmRlcl9faW5wdXQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbi5vcmRlcl9fc3VibWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwcHggNDhweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS0xMDAsICMwNjY5ZmYpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5vcmRlcl9fc3VibWl0IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG4ub3JkZXJfX3N1Ym1pdDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxMDAlKSwgIzAwNGFiMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3JkZXItaW1nIHtcbiAgcGFkZGluZzogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAub3JkZXItaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8qIG9yZGVyICovXG4vKiBjb250YWN0ICovXG4uY29udGFjdCB7XG4gIG1pbi1oZWlnaHQ6IDY3NnB4O1xuICBwYWRkaW5nOiAxMjBweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4uY29udGFjdF9fbWFpbkJsb2NrIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweCAwcHggMHB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE4LCAxOCwgMC45KTtcbiAgcGFkZGluZzogNjRweCAwIDY0cHggNjRweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFjdF9fbWFpbkJsb2NrIHtcbiAgICBwYWRkaW5nOiAzMnB4IDAgMzJweCAzMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAzNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhY3RfX21haW5CbG9jayB7XG4gICAgcGFkZGluZzogNjRweCA2NHB4IDY0cHggNjRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG5cbi5jb250YWN0X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uY29udGFjdF9fbGlzdC1lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgLyog0KLQsNC50YLQuy9UMiAqL1xuICBmb250LWZhbWlseTogTWFucm9wZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhY3RfX2xpc3QtZWwge1xuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG4gICAgLyogQm9keS9CMihCb2xkKSAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdF9fbGlzdC1lbCB7XG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgICAvKiBMaW5rcyZCdXR0b24vMTRweCAqL1xuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjIuNHB4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY29udGFjdF9fbGlzdC1lbCB7XG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgICAvKiBCb2R5L0IyKEJvbGQpICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cbiAgfVxufVxuXG4uY29udGFjdC1pbWcge1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0LWltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gIH1cbn1cblxuLmNvbnRhY3RfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcbiAgLyog0JfQsNCz0L7Qu9C+0LLQutC4L0gzICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDQ0LjhweCAqL1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGFjdF9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG4gICAgLyogVGl0dGxlL1QxICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlOyAvKiAzNnB4ICovXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdF9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG4gICAgLyogVGl0dGxlL1QyICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY29udGFjdF9fdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XG4gICAgLyogVGl0dGxlL1QxICovXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlOyAvKiAzNnB4ICovXG4gIH1cbn1cblxuLyogY29udGFjdCAqL1xuLyogZm9vdGVyICovXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAwLjk0OTAxOTYwNzgpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmZvb3Rlcl9fbG9nby1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5mb290ZXJfX21haW4tZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNjRweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZm9vdGVyX19tYWluLWZsZXgge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5mb290ZXJfX25hdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2NHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5mb290ZXJfX25hdi1mbGV4IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdhcDogMjRweDtcbiAgfVxufVxuXG4uZm9vdGVyX19uYXYgLm1lbnVfX2xpc3QtZWwge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnksICNmZmYpO1xuICAvKiDQodGB0YvQu9C60Lgg0Lgg0LrQvdC+0L/QutC4LzE0IHB4ICovXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDIyLjRweCAqL1xufVxuXG4uc29jaWFsX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5zb2NpYWxfX2xpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFBaEIsV0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUFHRjtBQUZFO0VBTEY7SUFNSSxTQUFBO0lBQ0EsdUJBQUE7RUFLRjtBQUNGO0FBSkU7RUFURjtJQVVJLHlCQUFBO0VBT0Y7QUFDRjs7QUFMQTtFQUNFLGtCQUFBO0FBUUY7O0FBTkE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFTRjtBQVJFO0VBTEY7SUFNSSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGlDQUFBO0lBQ0Esb0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VBV0Y7QUFDRjs7QUFUQTtFQUNFLDJCQUFBO0FBWUY7O0FBVkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWFGOztBQVRFO0VBRkY7O0lBR0ksYUFBQTtFQWNGO0FBQ0Y7O0FBWkE7RUFDRSxhQUFBO0FBZUY7QUFkRTtFQUZGO0lBR0ksY0FBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQWlCRjtBQUNGOztBQWZBO0VBQ0UsZ0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFtQkY7QUFsQkU7RUFIRjtJQUlJLHNCQUFBO0lBQ0EsU0FBQTtFQXFCRjtBQUNGOztBQW5CQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUVBLDBCQUFBO0VB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Z0NBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQSxFQUFBLFdBQUE7QUFtSko7O0FBaEpBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFtSkY7QUFsSkU7RUFIRjtJQUlJLG1CQUFBO0VBcUpGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaGVhZGVyICovXFxyXFxuLmhlYWRlciB7XFxyXFxuICBoZWlnaHQ6IDEyOHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRlcl9fbWFpbi1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA2NHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTNweCkge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubWVudS1pbWcge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uaGVhZGVyX19tb2JpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxuICBwYWRkaW5nOiAxNnB4IDhweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDM1cHg7XFxyXFxuICAgIHRvcDogLTIxMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCBibGFjayk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaGVhZGVyX19tb2JpbGUub3BlbiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTQwJSk7XFxyXFxufVxcclxcbi5oZWFkZXJfX21vYmlsZS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG4uaGVhZGVyX19uYXYsXFxyXFxuLmhlYWRlcl9fbnVtYmVyIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubWVudS1idG4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubWVudS1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuLm1lbnVfX2xpc3QtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm1lbnVfX2xpc3QtZWwge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XFxyXFxuXFxyXFxuICAvKiDQodGB0YvQu9C60Lgg0Lgg0LrQvdC+0L/QutC4LzE0IHB4ICovXFxyXFxuICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjIuNHB4ICovXFxyXFxufVxcclxcbi5tZW51X19saXN0LWVsOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDY2OWZmO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuLmhlYWRlcl9fbnVtYmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcblxcclxcbiAgLyog0KHRgdGL0LvQutC4INC4INC60L3QvtC/0LrQuC8xNiBweCAqL1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xcclxcbn1cXHJcXG4uaGVhZGVyX19udW1iZXItZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIGhlYWRlciAqL1xcclxcblxcclxcbi8qIG1haW5DYXJkICovXFxyXFxuLm1haW5DYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgLy8gYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9CRzE0NDAucG5nKTtcXHJcXG4gIGhlaWdodDogNjg4cHg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gICAgLy8gYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9CRzc0NC5wbmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC8vIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvQkc3NDQucG5nKTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL0JHMzYwLnBuZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcbi5tYWluQ2FyZC1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA0OHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5tYWluQ2FyZF9fdGl0bGUge1xcclxcbiAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcblxcclxcbiAgLyogSGVhZGVyL0gyICovXFxyXFxuICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTIwJTsgLyogNTcuNnB4ICovXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcXHJcXG5cXHJcXG4gICAgLyogSGVhZGVyL0gyICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7IC8qIDU3LjZweCAqL1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcblxcclxcbiAgICAvKiBIZWFkZXIvSDIgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTIwJTsgLyogNTcuNnB4ICovXFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSwgI2ZmZik7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcblxcclxcbiAgICAvKiBIZWFkZXIvSDMgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXFxyXFxuICB9XFxyXFxufVxcclxcbi5tYWluQ2FyZF9fdGV4dCB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuXFxyXFxuICAvKiBUaXR0bGUvVDIgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xcclxcblxcclxcbiAgICAvKiBUaXR0bGUvVDIgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjguOHB4ICovXFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuXFxyXFxuICAgIC8qIFRpdHRsZS9UMiAqL1xcclxcbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjZmZmKTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuXFxyXFxuICAgIC8qIEJvZHkvQjEgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjguOHB4ICovXFxyXFxuICB9XFxyXFxufVxcclxcbi5tYWluQ2FyZF9fYnRuIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwMCwgIzA2NjlmZik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgcGFkZGluZzogMHB4IDQ4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gIC8qIExpbmtzJkJ1dHRvbi8xNnB4ICovXFxyXFxuICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG4ubWFpbkNhcmRfX2J0bjpob3ZlciB7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcblxcclxcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMjRweCAwcHggcmdiYSgwLCA1MywgMTI4LCAwLjM1KTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICAwZGVnLFxcclxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSxcXHJcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTAwJVxcclxcbiAgICApLFxcclxcbiAgICAjMDA0YWIyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4vKiBtYWluQ2FyZCAqL1xcclxcblxcclxcbi8qIGluZm9DYXJkICovXFxyXFxuLmluZm9DYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxuICBwYWRkaW5nLXRvcDogOTZweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA5NnB4O1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNjRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmluZm9DYXJkX19pbWdCbG9jayB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW5mb0NhcmQtaW1nIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIGhlaWdodDogNjAwcHg7XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXHJcXG4gICAgd2lkdGg6IDUzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDU1MHB4O1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICB3aWR0aDogNDIwcHg7XFxyXFxuICAgIGhlaWdodDogNTYwcHg7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gICAgd2lkdGg6IDMzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0MHB4O1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pbmZvQ2FyZF9fc21hbGwtaW1nIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgd2lkdGg6IDI5MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pbmZvQ2FyZF9fbWFpbkJsb2NrIHtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbn1cXHJcXG4uaW5mb0NhcmRfX3RpdGxlIHtcXHJcXG4gIC8vIG1hcmdpbi10b3A6IDY0cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG5cXHJcXG4gIC8qINCX0LDQs9C+0LvQvtCy0LrQuC9IMiAqL1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEyMCU7IC8qIDU3LjZweCAqL1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG5cXHJcXG4gICAgLyogSGVhZGVyL0gzICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDQ0LjhweCAqL1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcblxcclxcbiAgICAvKiBIZWFkZXIvSDQgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogMzMuNnB4ICovXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAvKiBIZWFkZXIvSDQgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogMzMuNnB4ICovXFxyXFxuICB9XFxyXFxufVxcclxcbi5lbXB0eSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmluZm9DYXJkX190ZXh0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcclxcblxcclxcbiAgLyogQm9keSAo0J7RgdC90L7QstC90L7QuSDRgtC10LrRgdGCKSAvIEIxICovXFxyXFxuICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjguOHB4ICovXFxyXFxuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcclxcblxcclxcbiAgICAvKiBCb2R5L0IyICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcclxcblxcclxcbiAgICAvKiBCb2R5L0IyICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcclxcblxcclxcbiAgICAvKiBCb2R5L0IyICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaW5mb0NhcmRfX2xpc3Qge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxufVxcclxcbi5pbmZvQ2FyZF9fbGlzdC1lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGZsZXg6IDEgMCAwO1xcclxcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwLCByZ2JhKDYsIDEwNSwgMjU1LCAwLjEpKTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMSAwIDA7XFxyXFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNiwgMTA1LCAyNTUsIDAuMTUpO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDEgMCAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwLCByZ2JhKDYsIDEwNSwgMjU1LCAwLjEpKTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwLCByZ2JhKDYsIDEwNSwgMjU1LCAwLjEpKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmluZm9DYXJkX19saXN0LXRpdGxlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTEwMCwgIzA2NjlmZik7XFxyXFxuXFxyXFxuICAvKiDQl9Cw0LPQvtC70L7QstC60LgvSDMgKEJvbGQpICovXFxyXFxuICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcbi5pbmZvQ2FyZF9fbGlzdC10ZXh0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcblxcclxcbiAgLyogQm9keSAo0J7RgdC90L7QstC90L7QuSDRgtC10LrRgdGCKSAvIEIxICovXFxyXFxuICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTYwJTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG4vKiBpbmZvQ2FyZCAqL1xcclxcblxcclxcbi8qIHRhYmxlQmxvY2sgKi9cXHJcXG4udGFibGVCbG9jayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy10b3A6IDk2cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOTZweDtcXHJcXG59XFxyXFxuLnRhYmxlQmxvY2tfX3RpdGxlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgLyog0JfQsNCz0L7Qu9C+0LLQutC4L0gyICovXFxyXFxuICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTIwJTsgLyogNTcuNnB4ICovXFxyXFxuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAvKiBIZWFkZXIvSDMgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXFxyXFxuICB9XFxyXFxufVxcclxcbi50YWJsZUJsb2NrX190YWJsZSB7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuLnRhYmxlQmxvY2tfX3RhYmxlLWVsIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwLCByZ2JhKDYsIDEwNSwgMjU1LCAwLjEpKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbiAgZmxleDogMSAwIDA7XFxyXFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbn1cXHJcXG4udGFibGVCbG9ja19fdGFibGUtdGV4dCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cXHJcXG59XFxyXFxuLyogdGFibGVCbG9jayAqL1xcclxcblxcclxcbi8qIG9mZmVyICovXFxyXFxuLm9mZmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxuICBwYWRkaW5nOiA5NnB4IDcycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNjRweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC5zd2lwZXItc2xpZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMTMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAgIGdhcDogNjRweDtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAzMnB4O1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXHJcXG4gICAgcGFkZGluZzogMTZweCA4cHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi5vZmZlcl9fdGl0bGUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAvKiDQl9Cw0LPQvtC70L7QstC60LgvSDIgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxMjAlOyAvKiA1Ny42cHggKi9cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgLyogSGVhZGVyL0gzICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDQ0LjhweCAqL1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIC8qIEhlYWRlci9INCAqL1xcclxcbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiAzMy42cHggKi9cXHJcXG4gIH1cXHJcXG59XFxyXFxuLm9mZmVyX19tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA0OHB4O1xcclxcbn1cXHJcXG4ub2ZmZXJfX3N3aXBlciB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4ub2ZmZXJfX3N3aXBlci1idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG59XFxyXFxuLm9mZmVyX19tYWluQmxvY2stbGlzdC1Ub3AtZWwtdGV4dCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG5cXHJcXG4gIC8qIEJvZHkgKNCe0YHQvdC+0LLQvdC+0Lkg0YLQtdC60YHRgikgLyBCMSAqL1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI4LjhweCAqL1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG5cXHJcXG4gICAgLyogQm9keS9CMiAqL1xcclxcbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyNS42cHggKi9cXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTNweCkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG5cXHJcXG4gICAgLyogQm9keS9CMyAqL1xcclxcbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyMi40cHggKi9cXHJcXG4gIH1cXHJcXG59XFxyXFxuLm9mZmVyX19tYWluQmxvY2stbGlzdC1Cb3QtZWwtdGV4dCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG5cXHJcXG4gIC8qIEJvZHkgKNCe0YHQvdC+0LLQvdC+0Lkg0YLQtdC60YHRgikvQjMgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyMi40cHggKi9cXHJcXG59XFxyXFxuLm9mZmVyX19tYWluQmxvY2stbGlzdC1Cb3Qge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuLm9mZmVyX19wcmljZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG5cXHJcXG4gIC8qINCX0LDQs9C+0LvQvtCy0LrQuC9IMyAqL1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDQ0LjhweCAqL1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG59XFxyXFxuLm9mZmVyX19wcmljZS1zcGFuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcblxcclxcbiAgLyogQm9keSAo0J7RgdC90L7QstC90L7QuSDRgtC10LrRgdGCKSAvIEIxICovXFxyXFxuICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTYwJTtcXHJcXG59XFxyXFxuLm9mZmVyX19tYWluQmxvY2stdGl0bGUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XFxyXFxuXFxyXFxuICAvKiDQl9Cw0LPQvtC70L7QstC60LgvSDMgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiA0NC44cHggKi9cXHJcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcblxcclxcbiAgICAvKiBUaXR0bGUvVDEgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTUwJTsgLyogMzZweCAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG4ub2ZmZXJfX3N3aXBlci1pbWcge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICB3aWR0aDogMzk4cHg7XFxyXFxuICAgIGhlaWdodDogNTg0cHg7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm9mZmVyX19zd2lwZXItaW1nLW1pbmkge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ub2ZmZXJfX21haW5CbG9jay1saXN0LVRvcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcbi5vZmZlcl9fbWFpbkJsb2NrLWxpc3QtVG9wLWVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG4ub2ZmZXJfX21haW5CbG9jay1saXN0LUJvdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm9mZmVyX19tYWluQmxvY2stbGlzdC1Cb3QtZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxufVxcclxcbi5vZmZlcl9fbWFpbkJsb2NrIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm9mZmVyLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgcGFkZGluZzogMHB4IDMycHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS0xMDAsICMwNjY5ZmYpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAvKiBMaW5rcyZCdXR0b24vMTZweCAqL1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ub2ZmZXItYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMTJweCAyNHB4IDBweCByZ2JhKDAsIDUzLCAxMjgsIDAuMzUpO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIDBkZWcsXFxyXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDAlLFxcclxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxMDAlXFxyXFxuICAgICksXFxyXFxuICAgICMwMDRhYjI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5vZmZlcl9fcy1idXR0b24tcHJldixcXHJcXG4ub2ZmZXJfX3MtYnV0dG9uLW5leHQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ub2ZmZXJfX3MtYnV0dG9uLXByZXYsXFxyXFxuLm9mZmVyX19zLWJ1dHRvbi1uZXh0IHtcXHJcXG4gIHJlY3Qge1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgfVxcclxcbiAgcmVjdDpob3ZlciB7XFxyXFxuICAgIGZpbGw6ICMwMDRhYjI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIG9mZmVyICovXFxyXFxuXFxyXFxuLyogcGFydG5lcnMgKi9cXHJcXG4ucGFydG5lcnMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmctdG9wOiA5NnB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDk2cHg7XFxyXFxufVxcclxcbi5wYXJ0bmVyc19fdGl0bGUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XFxyXFxuXFxyXFxuICAvKiDQl9Cw0LPQvtC70L7QstC60LgvSDIgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxMjAlOyAvKiA1Ny42cHggKi9cXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XFxyXFxufVxcclxcbi5wYXJ0bmVyc19fbGlzdCB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgICBnYXA6IDM0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi5wYXJ0bmVyc19fbGlzdC1lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ucGFydG5lcnNfX2xpc3QtaW1nIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcGFydG5lcnMgKi9cXHJcXG5cXHJcXG4vKiByZXZpZXcgKi9cXHJcXG4ucmV2aWV3IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxuICBwYWRkaW5nLXRvcDogOTZweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA5NnB4O1xcclxcbiAgZ2FwOiA2NHB4O1xcclxcbn1cXHJcXG4ucmV2aWV3X190aXRsZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gIC8qINCX0LDQs9C+0LvQvtCy0LrQuC9IMiAqL1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEyMCU7IC8qIDU3LjZweCAqL1xcclxcbn1cXHJcXG4ucmV2aWV3X19zd2lwZXIge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnN3aXBlci1zbGlkZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbn1cXHJcXG4uc3dpcGVyLXNsaWRlX19sLFxcclxcbi5zd2lwZXItc2xpZGVfX3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDI0cHggNDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG59XFxyXFxuLnN3aXBlci1idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG59XFxyXFxuLnJldmlld19fdGV4dCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG5cXHJcXG4gIC8qIEJvZHkgKNCe0YHQvdC+0LLQvdC+0Lkg0YLQtdC60YHRgikgLyBCMSAqL1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI4LjhweCAqL1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcblxcclxcbiAgICAvKiBCb2R5L0IzICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDIyLjRweCAqL1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcblxcclxcbiAgICAvKiBCb2R5L0IzICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDIyLjRweCAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG4ucmV2aWV3X19jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG4ucmV2aWV3X19pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA0cHg7XFxyXFxufVxcclxcbi5yZXZpZXdfX25hbWUge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XFxyXFxuXFxyXFxuICAvKiBCb2R5ICjQntGB0L3QvtCy0L3QvtC5INGC0LXQutGB0YIpL0IyIChCb2xkKSAqL1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcblxcclxcbiAgICAvKiBCb2R5L0IzKEJvbGQpICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDIyLjRweCAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG4ucmV2aWV3X19qb2Ige1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XFxyXFxuXFxyXFxuICAvKiBCb2R5ICjQntGB0L3QvtCy0L3QvtC5INGC0LXQutGB0YIpL0IyICovXFxyXFxuICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XFxyXFxuXFxyXFxuICAgIC8qIEJvZHkvQjQgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMTkuMnB4ICovXFxyXFxuICB9XFxyXFxufVxcclxcbi5zLWJ1dHRvbi1wcmV2LFxcclxcbi5zLWJ1dHRvbi1uZXh0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHJlY3Qge1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgfVxcclxcbiAgcmVjdDpob3ZlciB7XFxyXFxuICAgIGZpbGw6ICMwMDRhYjI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcbi8qIHJldmlldyAqL1xcclxcblxcclxcbi8qIG9yZGVyICovXFxyXFxuLm9yZGVyIHtcXHJcXG4gIHBhZGRpbmctdG9wOiA5NnB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDk2cHg7XFxyXFxufVxcclxcbi5vcmRlcl9fbWFpbkJsb2NrIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ub3JkZXJfX3RpdGxlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcblxcclxcbiAgLyog0JfQsNCz0L7Qu9C+0LLQutC4L0gyICovXFxyXFxuICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMTIwJTsgLyogNTcuNnB4ICovXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwLCByZ2JhKDAsIDAsIDAsIDAuOSkpO1xcclxcblxcclxcbiAgICAvKiBIZWFkZXIvSDMgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogNDQuOHB4ICovXFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MCwgcmdiYSgwLCAwLCAwLCAwLjkpKTtcXHJcXG5cXHJcXG4gICAgLyogSGVhZGVyL0g0ICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDMzLjZweCAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAsIHJnYmEoMCwgMCwgMCwgMC45KSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgLyogSGVhZGVyL0g0ICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDMzLjZweCAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG4ub3JkZXJfX3RleHQge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XFxyXFxuXFxyXFxuICAvKiBCb2R5ICjQntGB0L3QvtCy0L3QvtC5INGC0LXQutGB0YIpIC8gQjEgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XFxyXFxuXFxyXFxuICAgIC8qIEJvZHkvQjIgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XFxyXFxuXFxyXFxuICAgIC8qIEJvZHkvQjIgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtNTAsIHJnYmEoMCwgMCwgMCwgMC41KSk7XFxyXFxuXFxyXFxuICAgIC8qIEJvZHkvQjMgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjIuNHB4ICovXFxyXFxuICB9XFxyXFxufVxcclxcbi5vcmRlcl9fZm9ybSB7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkzcHgpIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcbi5vcmRlcl9faW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIHBhZGRpbmc6IDBweCAyNHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LTUwLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm9yZGVyX19zdWJtaXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIHBhZGRpbmc6IDBweCA0OHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LTEwMCwgIzA2NjlmZik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm9yZGVyX19zdWJtaXQ6aG92ZXIge1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICAwZGVnLFxcclxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwJSxcXHJcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMTAwJVxcclxcbiAgICApLFxcclxcbiAgICAjMDA0YWIyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ub3JkZXItaW1nIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogb3JkZXIgKi9cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgbWluLWhlaWdodDogNjc2cHg7XFxyXFxuICBwYWRkaW5nOiAxMjBweCAwO1xcclxcbiAgLy8gYmFja2dyb3VuZDogdXJsKFxcXCIuLi9pbWFnZXMvbWFwLnBuZ1xcXCIpO1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC8vIGJhY2tncm91bmQ6IHVybChcXFwiLi4vaW1hZ2VzL21hcDc0NC5wbmdcXFwiKTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwobm9uZSk7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcbi5jb250YWN0X19tYWluQmxvY2sge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweCAwcHggMHB4IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgMTgsIDAuOSk7XFxyXFxuICBwYWRkaW5nOiA2NHB4IDAgNjRweCA2NHB4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIHBhZGRpbmc6IDMycHggMCAzMnB4IDMycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMzRweDtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICBwYWRkaW5nOiA2NHB4IDY0cHggNjRweCA2NHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uY29udGFjdF9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG59XFxyXFxuLmNvbnRhY3RfX2xpc3QtZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xcclxcblxcclxcbiAgLyog0KLQsNC50YLQuy9UMiAqL1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI4LjhweCAqL1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xcclxcblxcclxcbiAgICAvKiBCb2R5L0IyKEJvbGQpICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDI1LjZweCAqL1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XFxyXFxuXFxyXFxuICAgIC8qIExpbmtzJkJ1dHRvbi8xNHB4ICovXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNYW5yb3BlO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7IC8qIDIyLjRweCAqL1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XFxyXFxuXFxyXFxuICAgIC8qIEJvZHkvQjIoQm9sZCkgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTYwJTsgLyogMjUuNnB4ICovXFxyXFxuICB9XFxyXFxufVxcclxcbi5jb250YWN0LWltZyB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi5jb250YWN0X190aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6IHZhcigtLWJnLXdoaXRlLCAjZmZmKTtcXHJcXG5cXHJcXG4gIC8qINCX0LDQs9C+0LvQvtCy0LrQuC9IMyAqL1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDQ0LjhweCAqL1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmctd2hpdGUsICNmZmYpO1xcclxcblxcclxcbiAgICAvKiBUaXR0bGUvVDEgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IE1hbnJvcGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTUwJTsgLyogMzZweCAqL1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XFxyXFxuXFxyXFxuICAgIC8qIFRpdHRsZS9UMiAqL1xcclxcbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyOC44cHggKi9cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZy13aGl0ZSwgI2ZmZik7XFxyXFxuXFxyXFxuICAgIC8qIFRpdHRsZS9UMSAqL1xcclxcbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlOyAvKiAzNnB4ICovXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRhY3QgKi9cXHJcXG5cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIC8vIG1pbi1oZWlnaHQ6IDE0NHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMWYyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZvb3Rlcl9fbG9nby1saW5rIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmZvb3Rlcl9fbWFpbi1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA2NHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmZvb3Rlcl9fbmF2LWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNjRweDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmZvb3Rlcl9fbmF2IHtcXHJcXG4gIC5tZW51X19saXN0LWVsIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LCAjZmZmKTtcXHJcXG4gICAgLyog0KHRgdGL0LvQutC4INC4INC60L3QvtC/0LrQuC8xNCBweCAqL1xcclxcbiAgICBmb250LWZhbWlseTogTWFucm9wZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNjAlOyAvKiAyMi40cHggKi9cXHJcXG4gIH1cXHJcXG59XFxyXFxuLnNvY2lhbF9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohXG4gKiBCb290c3RyYXAgR3JpZCB2NS4zLjEgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDIzIFRoZSBCb290c3RyYXAgQXV0aG9yc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKi9cbi5jb250YWluZXIsXG4uY29udGFpbmVyLWZsdWlkLFxuLmNvbnRhaW5lci14eGwsXG4uY29udGFpbmVyLXhsLFxuLmNvbnRhaW5lci1sZyxcbi5jb250YWluZXItbWQsXG4uY29udGFpbmVyLXNtIHtcbiAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xuICAtLWJzLWd1dHRlci15OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1icy1ndXR0ZXIteCkgKiAwLjUpO1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogMC41KTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jb250YWluZXItc20sIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyLW1kLCAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lci1sZywgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyLXhsLCAuY29udGFpbmVyLWxnLCAuY29udGFpbmVyLW1kLCAuY29udGFpbmVyLXNtLCAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xuICAuY29udGFpbmVyLXh4bCwgLmNvbnRhaW5lci14bCwgLmNvbnRhaW5lci1sZywgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMzIwcHg7XG4gIH1cbn1cbjpyb290IHtcbiAgLS1icy1icmVha3BvaW50LXhzOiAwO1xuICAtLWJzLWJyZWFrcG9pbnQtc206IDU3NnB4O1xuICAtLWJzLWJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xuICAtLWJzLWJyZWFrcG9pbnQtbGc6IDk5MnB4O1xuICAtLWJzLWJyZWFrcG9pbnQteGw6IDEyMDBweDtcbiAgLS1icy1icmVha3BvaW50LXh4bDogMTQwMHB4O1xufVxuXG4ucm93IHtcbiAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xuICAtLWJzLWd1dHRlci15OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1icy1ndXR0ZXIteSkpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTAuNSAqIHZhcigtLWJzLWd1dHRlci14KSk7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0wLjUgKiB2YXIoLS1icy1ndXR0ZXIteCkpO1xufVxuLnJvdyA+ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1icy1ndXR0ZXIteCkgKiAwLjUpO1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogMC41KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0tYnMtZ3V0dGVyLXkpO1xufVxuXG4uY29sIHtcbiAgZmxleDogMSAwIDAlO1xufVxuXG4ucm93LWNvbHMtYXV0byA+ICoge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5yb3ctY29scy0xID4gKiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdy1jb2xzLTIgPiAqIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5yb3ctY29scy0zID4gKiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG59XG5cbi5yb3ctY29scy00ID4gKiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMjUlO1xufVxuXG4ucm93LWNvbHMtNSA+ICoge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDIwJTtcbn1cblxuLnJvdy1jb2xzLTYgPiAqIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbn1cblxuLmNvbC1hdXRvIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uY29sLTEge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDguMzMzMzMzMzMlO1xufVxuXG4uY29sLTIge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcbn1cblxuLmNvbC0zIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5jb2wtNCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMzMuMzMzMzMzMzMlO1xufVxuXG4uY29sLTUge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcbn1cblxuLmNvbC02IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb2wtNyB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogNTguMzMzMzMzMzMlO1xufVxuXG4uY29sLTgge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcbn1cblxuLmNvbC05IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5jb2wtMTAge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcbn1cblxuLmNvbC0xMSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogOTEuNjY2NjY2NjclO1xufVxuXG4uY29sLTEyIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5vZmZzZXQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbi5vZmZzZXQtNyB7XG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XG59XG5cbi5vZmZzZXQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5vZmZzZXQtMTAge1xuICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xufVxuXG4ub2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcbn1cblxuLmctMCxcbi5neC0wIHtcbiAgLS1icy1ndXR0ZXIteDogMDtcbn1cblxuLmctMCxcbi5neS0wIHtcbiAgLS1icy1ndXR0ZXIteTogMDtcbn1cblxuLmctMSxcbi5neC0xIHtcbiAgLS1icy1ndXR0ZXIteDogMC4yNXJlbTtcbn1cblxuLmctMSxcbi5neS0xIHtcbiAgLS1icy1ndXR0ZXIteTogMC4yNXJlbTtcbn1cblxuLmctMixcbi5neC0yIHtcbiAgLS1icy1ndXR0ZXIteDogMC41cmVtO1xufVxuXG4uZy0yLFxuLmd5LTIge1xuICAtLWJzLWd1dHRlci15OiAwLjVyZW07XG59XG5cbi5nLTMsXG4uZ3gtMyB7XG4gIC0tYnMtZ3V0dGVyLXg6IDFyZW07XG59XG5cbi5nLTMsXG4uZ3ktMyB7XG4gIC0tYnMtZ3V0dGVyLXk6IDFyZW07XG59XG5cbi5nLTQsXG4uZ3gtNCB7XG4gIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcbn1cblxuLmctNCxcbi5neS00IHtcbiAgLS1icy1ndXR0ZXIteTogMS41cmVtO1xufVxuXG4uZy01LFxuLmd4LTUge1xuICAtLWJzLWd1dHRlci14OiAzcmVtO1xufVxuXG4uZy01LFxuLmd5LTUge1xuICAtLWJzLWd1dHRlci15OiAzcmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmNvbC1zbSB7XG4gICAgZmxleDogMSAwIDAlO1xuICB9XG4gIC5yb3ctY29scy1zbS1hdXRvID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLnJvdy1jb2xzLXNtLTEgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucm93LWNvbHMtc20tMiA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnJvdy1jb2xzLXNtLTMgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG4gIH1cbiAgLnJvdy1jb2xzLXNtLTQgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5yb3ctY29scy1zbS01ID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAucm93LWNvbHMtc20tNiA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXNtLWF1dG8ge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5jb2wtc20tMSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tMiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXNtLTMge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLmNvbC1zbS00IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tNSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXNtLTYge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbC1zbS03IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tOCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXNtLTkge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmNvbC1zbS0xMCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLTExIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tMTIge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5vZmZzZXQtc20tMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLm9mZnNldC1zbS0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC1zbS0yIHtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5vZmZzZXQtc20tMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuICAub2Zmc2V0LXNtLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC1zbS01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5vZmZzZXQtc20tNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgfVxuICAub2Zmc2V0LXNtLTcge1xuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC1zbS04IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5vZmZzZXQtc20tOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuICAub2Zmc2V0LXNtLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQtc20tMTEge1xuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmctc20tMCxcbiAgLmd4LXNtLTAge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDA7XG4gIH1cbiAgLmctc20tMCxcbiAgLmd5LXNtLTAge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDA7XG4gIH1cbiAgLmctc20tMSxcbiAgLmd4LXNtLTEge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDAuMjVyZW07XG4gIH1cbiAgLmctc20tMSxcbiAgLmd5LXNtLTEge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDAuMjVyZW07XG4gIH1cbiAgLmctc20tMixcbiAgLmd4LXNtLTIge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDAuNXJlbTtcbiAgfVxuICAuZy1zbS0yLFxuICAuZ3ktc20tMiB7XG4gICAgLS1icy1ndXR0ZXIteTogMC41cmVtO1xuICB9XG4gIC5nLXNtLTMsXG4gIC5neC1zbS0zIHtcbiAgICAtLWJzLWd1dHRlci14OiAxcmVtO1xuICB9XG4gIC5nLXNtLTMsXG4gIC5neS1zbS0zIHtcbiAgICAtLWJzLWd1dHRlci15OiAxcmVtO1xuICB9XG4gIC5nLXNtLTQsXG4gIC5neC1zbS00IHtcbiAgICAtLWJzLWd1dHRlci14OiAxLjVyZW07XG4gIH1cbiAgLmctc20tNCxcbiAgLmd5LXNtLTQge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDEuNXJlbTtcbiAgfVxuICAuZy1zbS01LFxuICAuZ3gtc20tNSB7XG4gICAgLS1icy1ndXR0ZXIteDogM3JlbTtcbiAgfVxuICAuZy1zbS01LFxuICAuZ3ktc20tNSB7XG4gICAgLS1icy1ndXR0ZXIteTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtbWQge1xuICAgIGZsZXg6IDEgMCAwJTtcbiAgfVxuICAucm93LWNvbHMtbWQtYXV0byA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5yb3ctY29scy1tZC0xID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnJvdy1jb2xzLW1kLTIgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5yb3ctY29scy1tZC0zID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xuICB9XG4gIC5yb3ctY29scy1tZC00ID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAucm93LWNvbHMtbWQtNSA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgLnJvdy1jb2xzLW1kLTYgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC1hdXRvIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuY29sLW1kLTEge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLTIge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC0zIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5jb2wtbWQtNCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLTUge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC02IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb2wtbWQtNyB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLTgge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC05IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5jb2wtbWQtMTAge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC0xMSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLW1kLTEyIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAub2Zmc2V0LW1kLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5vZmZzZXQtbWQtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQtbWQtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LW1kLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cbiAgLm9mZnNldC1tZC00IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQtbWQtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LW1kLTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cbiAgLm9mZnNldC1tZC03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQtbWQtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LW1kLTkge1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIH1cbiAgLm9mZnNldC1tZC0xMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LW1kLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5nLW1kLTAsXG4gIC5neC1tZC0wIHtcbiAgICAtLWJzLWd1dHRlci14OiAwO1xuICB9XG4gIC5nLW1kLTAsXG4gIC5neS1tZC0wIHtcbiAgICAtLWJzLWd1dHRlci15OiAwO1xuICB9XG4gIC5nLW1kLTEsXG4gIC5neC1tZC0xIHtcbiAgICAtLWJzLWd1dHRlci14OiAwLjI1cmVtO1xuICB9XG4gIC5nLW1kLTEsXG4gIC5neS1tZC0xIHtcbiAgICAtLWJzLWd1dHRlci15OiAwLjI1cmVtO1xuICB9XG4gIC5nLW1kLTIsXG4gIC5neC1tZC0yIHtcbiAgICAtLWJzLWd1dHRlci14OiAwLjVyZW07XG4gIH1cbiAgLmctbWQtMixcbiAgLmd5LW1kLTIge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDAuNXJlbTtcbiAgfVxuICAuZy1tZC0zLFxuICAuZ3gtbWQtMyB7XG4gICAgLS1icy1ndXR0ZXIteDogMXJlbTtcbiAgfVxuICAuZy1tZC0zLFxuICAuZ3ktbWQtMyB7XG4gICAgLS1icy1ndXR0ZXIteTogMXJlbTtcbiAgfVxuICAuZy1tZC00LFxuICAuZ3gtbWQtNCB7XG4gICAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xuICB9XG4gIC5nLW1kLTQsXG4gIC5neS1tZC00IHtcbiAgICAtLWJzLWd1dHRlci15OiAxLjVyZW07XG4gIH1cbiAgLmctbWQtNSxcbiAgLmd4LW1kLTUge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDNyZW07XG4gIH1cbiAgLmctbWQtNSxcbiAgLmd5LW1kLTUge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29sLWxnIHtcbiAgICBmbGV4OiAxIDAgMCU7XG4gIH1cbiAgLnJvdy1jb2xzLWxnLWF1dG8gPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAucm93LWNvbHMtbGctMSA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5yb3ctY29scy1sZy0yID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucm93LWNvbHMtbGctMyA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxuICAucm93LWNvbHMtbGctNCA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLnJvdy1jb2xzLWxnLTUgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5yb3ctY29scy1sZy02ID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctYXV0byB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLmNvbC1sZy0xIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy0yIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctMyB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAuY29sLWxnLTQge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy01IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctNiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuY29sLWxnLTcge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy04IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctOSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAuY29sLWxnLTEwIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctMTEge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1sZy0xMiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm9mZnNldC1sZy0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAub2Zmc2V0LWxnLTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LWxnLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC1sZy0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5vZmZzZXQtbGctNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LWxnLTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC1sZy02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG4gIC5vZmZzZXQtbGctNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LWxnLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC1sZy05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICB9XG4gIC5vZmZzZXQtbGctMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC1sZy0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuZy1sZy0wLFxuICAuZ3gtbGctMCB7XG4gICAgLS1icy1ndXR0ZXIteDogMDtcbiAgfVxuICAuZy1sZy0wLFxuICAuZ3ktbGctMCB7XG4gICAgLS1icy1ndXR0ZXIteTogMDtcbiAgfVxuICAuZy1sZy0xLFxuICAuZ3gtbGctMSB7XG4gICAgLS1icy1ndXR0ZXIteDogMC4yNXJlbTtcbiAgfVxuICAuZy1sZy0xLFxuICAuZ3ktbGctMSB7XG4gICAgLS1icy1ndXR0ZXIteTogMC4yNXJlbTtcbiAgfVxuICAuZy1sZy0yLFxuICAuZ3gtbGctMiB7XG4gICAgLS1icy1ndXR0ZXIteDogMC41cmVtO1xuICB9XG4gIC5nLWxnLTIsXG4gIC5neS1sZy0yIHtcbiAgICAtLWJzLWd1dHRlci15OiAwLjVyZW07XG4gIH1cbiAgLmctbGctMyxcbiAgLmd4LWxnLTMge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDFyZW07XG4gIH1cbiAgLmctbGctMyxcbiAgLmd5LWxnLTMge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDFyZW07XG4gIH1cbiAgLmctbGctNCxcbiAgLmd4LWxnLTQge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcbiAgfVxuICAuZy1sZy00LFxuICAuZ3ktbGctNCB7XG4gICAgLS1icy1ndXR0ZXIteTogMS41cmVtO1xuICB9XG4gIC5nLWxnLTUsXG4gIC5neC1sZy01IHtcbiAgICAtLWJzLWd1dHRlci14OiAzcmVtO1xuICB9XG4gIC5nLWxnLTUsXG4gIC5neS1sZy01IHtcbiAgICAtLWJzLWd1dHRlci15OiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb2wteGwge1xuICAgIGZsZXg6IDEgMCAwJTtcbiAgfVxuICAucm93LWNvbHMteGwtYXV0byA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5yb3ctY29scy14bC0xID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnJvdy1jb2xzLXhsLTIgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5yb3ctY29scy14bC0zID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xuICB9XG4gIC5yb3ctY29scy14bC00ID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAucm93LWNvbHMteGwtNSA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgLnJvdy1jb2xzLXhsLTYgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC14bC1hdXRvIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuY29sLXhsLTEge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXhsLTIge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC14bC0zIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5jb2wteGwtNCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXhsLTUge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC14bC02IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb2wteGwtNyB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXhsLTgge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC14bC05IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5jb2wteGwtMTAge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC14bC0xMSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXhsLTEyIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAub2Zmc2V0LXhsLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5vZmZzZXQteGwtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQteGwtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LXhsLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cbiAgLm9mZnNldC14bC00IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQteGwtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LXhsLTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cbiAgLm9mZnNldC14bC03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQteGwtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LXhsLTkge1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIH1cbiAgLm9mZnNldC14bC0xMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LXhsLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5nLXhsLTAsXG4gIC5neC14bC0wIHtcbiAgICAtLWJzLWd1dHRlci14OiAwO1xuICB9XG4gIC5nLXhsLTAsXG4gIC5neS14bC0wIHtcbiAgICAtLWJzLWd1dHRlci15OiAwO1xuICB9XG4gIC5nLXhsLTEsXG4gIC5neC14bC0xIHtcbiAgICAtLWJzLWd1dHRlci14OiAwLjI1cmVtO1xuICB9XG4gIC5nLXhsLTEsXG4gIC5neS14bC0xIHtcbiAgICAtLWJzLWd1dHRlci15OiAwLjI1cmVtO1xuICB9XG4gIC5nLXhsLTIsXG4gIC5neC14bC0yIHtcbiAgICAtLWJzLWd1dHRlci14OiAwLjVyZW07XG4gIH1cbiAgLmcteGwtMixcbiAgLmd5LXhsLTIge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDAuNXJlbTtcbiAgfVxuICAuZy14bC0zLFxuICAuZ3gteGwtMyB7XG4gICAgLS1icy1ndXR0ZXIteDogMXJlbTtcbiAgfVxuICAuZy14bC0zLFxuICAuZ3kteGwtMyB7XG4gICAgLS1icy1ndXR0ZXIteTogMXJlbTtcbiAgfVxuICAuZy14bC00LFxuICAuZ3gteGwtNCB7XG4gICAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xuICB9XG4gIC5nLXhsLTQsXG4gIC5neS14bC00IHtcbiAgICAtLWJzLWd1dHRlci15OiAxLjVyZW07XG4gIH1cbiAgLmcteGwtNSxcbiAgLmd4LXhsLTUge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDNyZW07XG4gIH1cbiAgLmcteGwtNSxcbiAgLmd5LXhsLTUge1xuICAgIC0tYnMtZ3V0dGVyLXk6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgLmNvbC14eGwge1xuICAgIGZsZXg6IDEgMCAwJTtcbiAgfVxuICAucm93LWNvbHMteHhsLWF1dG8gPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAucm93LWNvbHMteHhsLTEgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucm93LWNvbHMteHhsLTIgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5yb3ctY29scy14eGwtMyA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxuICAucm93LWNvbHMteHhsLTQgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5yb3ctY29scy14eGwtNSA+ICoge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgLnJvdy1jb2xzLXh4bC02ID4gKiB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICB9XG4gIC5jb2wteHhsLWF1dG8ge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5jb2wteHhsLTEge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXh4bC0yIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wteHhsLTMge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLmNvbC14eGwtNCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXh4bC01IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wteHhsLTYge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbC14eGwtNyB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXh4bC04IHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wteHhsLTkge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmNvbC14eGwtMTAge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC14eGwtMTEge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC14eGwtMTIge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5vZmZzZXQteHhsLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5vZmZzZXQteHhsLTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LXh4bC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5vZmZzZXQteHhsLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cbiAgLm9mZnNldC14eGwtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LXh4bC01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5vZmZzZXQteHhsLTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cbiAgLm9mZnNldC14eGwtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LXh4bC04IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5vZmZzZXQteHhsLTkge1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIH1cbiAgLm9mZnNldC14eGwtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC14eGwtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmcteHhsLTAsXG4gIC5neC14eGwtMCB7XG4gICAgLS1icy1ndXR0ZXIteDogMDtcbiAgfVxuICAuZy14eGwtMCxcbiAgLmd5LXh4bC0wIHtcbiAgICAtLWJzLWd1dHRlci15OiAwO1xuICB9XG4gIC5nLXh4bC0xLFxuICAuZ3gteHhsLTEge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDAuMjVyZW07XG4gIH1cbiAgLmcteHhsLTEsXG4gIC5neS14eGwtMSB7XG4gICAgLS1icy1ndXR0ZXIteTogMC4yNXJlbTtcbiAgfVxuICAuZy14eGwtMixcbiAgLmd4LXh4bC0yIHtcbiAgICAtLWJzLWd1dHRlci14OiAwLjVyZW07XG4gIH1cbiAgLmcteHhsLTIsXG4gIC5neS14eGwtMiB7XG4gICAgLS1icy1ndXR0ZXIteTogMC41cmVtO1xuICB9XG4gIC5nLXh4bC0zLFxuICAuZ3gteHhsLTMge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDFyZW07XG4gIH1cbiAgLmcteHhsLTMsXG4gIC5neS14eGwtMyB7XG4gICAgLS1icy1ndXR0ZXIteTogMXJlbTtcbiAgfVxuICAuZy14eGwtNCxcbiAgLmd4LXh4bC00IHtcbiAgICAtLWJzLWd1dHRlci14OiAxLjVyZW07XG4gIH1cbiAgLmcteHhsLTQsXG4gIC5neS14eGwtNCB7XG4gICAgLS1icy1ndXR0ZXIteTogMS41cmVtO1xuICB9XG4gIC5nLXh4bC01LFxuICAuZ3gteHhsLTUge1xuICAgIC0tYnMtZ3V0dGVyLXg6IDNyZW07XG4gIH1cbiAgLmcteHhsLTUsXG4gIC5neS14eGwtNSB7XG4gICAgLS1icy1ndXR0ZXIteTogM3JlbTtcbiAgfVxufVxuLmQtaW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5kLWlubGluZS1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4uZC1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5kLWdyaWQge1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG59XG5cbi5kLWlubGluZS1ncmlkIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQgIWltcG9ydGFudDtcbn1cblxuLmQtdGFibGUge1xuICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xufVxuXG4uZC10YWJsZS1yb3cge1xuICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbn1cblxuLmQtdGFibGUtY2VsbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cblxuLmQtaW5saW5lLWZsZXgge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xufVxuXG4uZC1ub25lIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1maWxsIHtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmZsZXgtcm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXJvdy1yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LWNvbHVtbi1yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LWdyb3ctMCB7XG4gIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1ncm93LTEge1xuICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtc2hyaW5rLTAge1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1zaHJpbmstMSB7XG4gIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtbm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtd3JhcC1yZXZlcnNlIHtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbn1cblxuLmp1c3RpZnktY29udGVudC1zdGFydCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmp1c3RpZnktY29udGVudC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xufVxuXG4uanVzdGlmeS1jb250ZW50LWV2ZW5seSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1pdGVtcy1zdGFydCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1pdGVtcy1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1pdGVtcy1zdHJldGNoIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWNvbnRlbnQtc3RhcnQge1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1jb250ZW50LWVuZCB7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1jb250ZW50LWNlbnRlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tY29udGVudC1iZXR3ZWVuIHtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tY29udGVudC1hcm91bmQge1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWNvbnRlbnQtc3RyZXRjaCB7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXNlbGYtYXV0byB7XG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXNlbGYtc3RhcnQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1zZWxmLWVuZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tc2VsZi1iYXNlbGluZSB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1zZWxmLXN0cmV0Y2gge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5vcmRlci1maXJzdCB7XG4gIG9yZGVyOiAtMSAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItMCB7XG4gIG9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5vcmRlci0xIHtcbiAgb3JkZXI6IDEgIWltcG9ydGFudDtcbn1cblxuLm9yZGVyLTIge1xuICBvcmRlcjogMiAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItMyB7XG4gIG9yZGVyOiAzICFpbXBvcnRhbnQ7XG59XG5cbi5vcmRlci00IHtcbiAgb3JkZXI6IDQgIWltcG9ydGFudDtcbn1cblxuLm9yZGVyLTUge1xuICBvcmRlcjogNSAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItbGFzdCB7XG4gIG9yZGVyOiA2ICFpbXBvcnRhbnQ7XG59XG5cbi5tLTAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLm0tMSB7XG4gIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS0yIHtcbiAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tMyB7XG4gIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS00IHtcbiAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tNSB7XG4gIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubS1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5teC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5teC0xIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5teC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXgtMyB7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXgtNCB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm14LTUge1xuICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm14LWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm15LTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm15LTEge1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm15LTIge1xuICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5teS0zIHtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5teS00IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXktNSB7XG4gIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubXktYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubXQtMCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLm10LTEge1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0yIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0zIHtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtNCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtNSB7XG4gIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LWF1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tZS0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tZS0xIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tZS0yIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1lLTMge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1lLTQge1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWUtNSB7XG4gIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubWUtYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWItMCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm1iLTEge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0yIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItNCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItNSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLWF1dG8ge1xuICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tcy0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLm1zLTEge1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXMtMiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1zLTMge1xuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXMtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1zLTUge1xuICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubXMtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5wLTAge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wLTEge1xuICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wLTIge1xuICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtMyB7XG4gIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtNCB7XG4gIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucC01IHtcbiAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucHgtMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5weC0xIHtcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnB4LTIge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnB4LTMge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHgtNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHgtNSB7XG4gIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5weS0wIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLnB5LTEge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHktMiB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHktMyB7XG4gIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5weS00IHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5weS01IHtcbiAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnB0LTAge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ucHQtMSB7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0yIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtMyB7XG4gIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdC00IHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtNSB7XG4gIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wZS0wIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4ucGUtMSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBlLTIge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBlLTMge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wZS00IHtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wZS01IHtcbiAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucGItMCB7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wYi0xIHtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTIge1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi0zIHtcbiAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTQge1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi01IHtcbiAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnBzLTAge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnBzLTEge1xuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBzLTIge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHMtMyB7XG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHMtNCB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wcy01IHtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuZC1zbS1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtc20tYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtc20tZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLWlubGluZS1ncmlkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtc20tdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuICAuZC1zbS1pbmxpbmUtZmxleCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgfVxuICAuZC1zbS1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20tZmlsbCB7XG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1zbS1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1zbS1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1zbS1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20tY29sdW1uLXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXNtLWdyb3ctMCB7XG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20tZ3Jvdy0xIHtcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1zbS1zaHJpbmstMCB7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1zbS1zaHJpbmstMSB7XG4gICAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1zbS13cmFwIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1zbS1ub3dyYXAge1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20td3JhcC1yZXZlcnNlIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tc3RhcnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1zbS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1zbS1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXNtLWFyb3VuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXNtLWV2ZW5seSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtc20tc3RhcnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXNtLWVuZCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXNtLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1zbS1iYXNlbGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXNtLXN0cmV0Y2gge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtc20tc3RhcnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1zbS1lbmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtc20tY2VudGVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1zbS1iZXR3ZWVuIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtc20tYXJvdW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1zbS1zdHJldGNoIHtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtc20tYXV0byB7XG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXNtLXN0YXJ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtc20tZW5kIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXNtLWNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtc20tYmFzZWxpbmUge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtc20tc3RyZXRjaCB7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1zbS1maXJzdCB7XG4gICAgb3JkZXI6IC0xICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXNtLTAge1xuICAgIG9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXNtLTEge1xuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXNtLTIge1xuICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXNtLTMge1xuICAgIG9yZGVyOiAzICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXNtLTQge1xuICAgIG9yZGVyOiA0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXNtLTUge1xuICAgIG9yZGVyOiA1ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXNtLWxhc3Qge1xuICAgIG9yZGVyOiA2ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tc20tMCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tc20tMSB7XG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tc20tMiB7XG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1zbS0zIHtcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1zbS00IHtcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXNtLTUge1xuICAgIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXNtLWF1dG8ge1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1zbS0wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1zbS0xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1zbS0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgtc20tMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgtc20tNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXNtLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXNtLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXNtLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXNtLTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXNtLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1zbS0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1zbS00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXktc20tNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXktc20tYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXQtc20tMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1zbS0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXNtLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1zbS0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXNtLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1zbS01IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXNtLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubWUtc20tMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXNtLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1zbS0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1zbS0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUtc20tNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUtc20tNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXNtLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1zbS0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXNtLTEge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItc20tMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXNtLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItc20tNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXNtLTUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItc20tYXV0byB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1zbS0wIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1zbS0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1zbS0yIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXNtLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXNtLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMtc20tNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMtc20tYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAucC1zbS0wIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtc20tMSB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXNtLTIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXNtLTMge1xuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1zbS00IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1zbS01IHtcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXNtLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHgtc20tMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1zbS0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1zbS0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXNtLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXNtLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHktc20tMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1zbS0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXNtLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXNtLTMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHktc20tNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHktc20tNSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1zbS0wIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1zbS0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1zbS0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXNtLTMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXNtLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtc20tNSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUtc20tMCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1zbS0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLXNtLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1zbS0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLXNtLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1zbS01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXNtLTAge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXNtLTEge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXNtLTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItc20tMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItc20tNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1zbS01IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1zbS0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHMtc20tMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLXNtLTIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLXNtLTMge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1zbS00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1zbS01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kLW1kLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbWQtaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuZC1tZC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuZC1tZC1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbWQtaW5saW5lLWdyaWQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbWQtdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbWQtdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuICAuZC1tZC10YWJsZS1jZWxsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbWQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1maWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbWQtZ3Jvdy0wIHtcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1ncm93LTEge1xuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLXNocmluay0wIHtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLXNocmluay0xIHtcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLXdyYXAge1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLW5vd3JhcCB7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC13cmFwLXJldmVyc2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1tZC1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1tZC1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LW1kLWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LW1kLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtYXJvdW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtZXZlbmx5IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1tZC1zdGFydCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbWQtZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbWQtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLW1kLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbWQtc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1tZC1zdGFydCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LW1kLWVuZCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1tZC1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LW1kLWJldHdlZW4ge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1tZC1hcm91bmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LW1kLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1tZC1hdXRvIHtcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbWQtc3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1tZC1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbWQtY2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1tZC1iYXNlbGluZSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1tZC1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLW1kLWZpcnN0IHtcbiAgICBvcmRlcjogLTEgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbWQtMCB7XG4gICAgb3JkZXI6IDAgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbWQtMSB7XG4gICAgb3JkZXI6IDEgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbWQtMiB7XG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbWQtMyB7XG4gICAgb3JkZXI6IDMgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbWQtNCB7XG4gICAgb3JkZXI6IDQgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbWQtNSB7XG4gICAgb3JkZXI6IDUgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbWQtbGFzdCB7XG4gICAgb3JkZXI6IDYgIWltcG9ydGFudDtcbiAgfVxuICAubS1tZC0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuICAubS1tZC0xIHtcbiAgICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1tZC0yIHtcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLW1kLTMge1xuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLW1kLTQge1xuICAgIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbWQtNSB7XG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbWQtYXV0byB7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LW1kLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LW1kLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LW1kLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1tZC0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1tZC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgtbWQtNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgtbWQtYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXktbWQtMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXktbWQtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXktbWQtMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LW1kLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LW1kLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1tZC01IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1tZC1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1tZC0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LW1kLTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbWQtMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LW1kLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbWQtNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LW1kLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbWQtYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1tZC0wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubWUtbWQtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLW1kLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLW1kLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1tZC00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1tZC01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUtbWQtYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLW1kLTAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAubWItbWQtMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1tZC0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbWQtMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1tZC00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbWQtNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1tZC1hdXRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLW1kLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLW1kLTEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLW1kLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMtbWQtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMtbWQtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1tZC01IHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1tZC1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5wLW1kLTAge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucC1tZC0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtbWQtMiB7XG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtbWQtMyB7XG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLW1kLTQge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLW1kLTUge1xuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgtbWQtMCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1tZC0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LW1kLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LW1kLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgtbWQtNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgtbWQtNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1tZC0wIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LW1kLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHktbWQtMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHktbWQtMyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1tZC00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1tZC01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LW1kLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LW1kLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LW1kLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtbWQtMyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtbWQtNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1tZC01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1tZC0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLW1kLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUtbWQtMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLW1kLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUtbWQtNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLW1kLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItbWQtMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAucGItbWQtMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItbWQtMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1tZC0zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1tZC00IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLW1kLTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLW1kLTAge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1tZC0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMtbWQtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMtbWQtMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLW1kLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLW1kLTUge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmQtbGctaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZC1sZy1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLWxnLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLWxnLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgfVxuICAuZC1sZy1pbmxpbmUtZ3JpZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQgIWltcG9ydGFudDtcbiAgfVxuICAuZC1sZy10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgfVxuICAuZC1sZy10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5kLWxnLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxuICAuZC1sZy1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbGctaW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbGctbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLWZpbGwge1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbGctcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbGctY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbGctcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLWNvbHVtbi1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1sZy1ncm93LTAge1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLWdyb3ctMSB7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbGctc2hyaW5rLTAge1xuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbGctc2hyaW5rLTEge1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbGctd3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbGctbm93cmFwIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLXdyYXAtcmV2ZXJzZSB7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LWxnLXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LWxnLWVuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1sZy1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1sZy1ldmVubHkge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLWxnLXN0YXJ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1sZy1lbmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1sZy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbGctYmFzZWxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1sZy1zdHJldGNoIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LWxnLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtbGctZW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LWxnLWNlbnRlciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtbGctYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LWxnLWFyb3VuZCB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtbGctc3RyZXRjaCB7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLWxnLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1sZy1zdGFydCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLWxnLWVuZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1sZy1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLWxnLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLWxnLXN0cmV0Y2gge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXItbGctZmlyc3Qge1xuICAgIG9yZGVyOiAtMSAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1sZy0wIHtcbiAgICBvcmRlcjogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1sZy0xIHtcbiAgICBvcmRlcjogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1sZy0yIHtcbiAgICBvcmRlcjogMiAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1sZy0zIHtcbiAgICBvcmRlcjogMyAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1sZy00IHtcbiAgICBvcmRlcjogNCAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1sZy01IHtcbiAgICBvcmRlcjogNSAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci1sZy1sYXN0IHtcbiAgICBvcmRlcjogNiAhaW1wb3J0YW50O1xuICB9XG4gIC5tLWxnLTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tLWxnLTEge1xuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLWxnLTIge1xuICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbGctMyB7XG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbGctNCB7XG4gICAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1sZy01IHtcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1sZy1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXgtbGctMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXgtbGctMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgtbGctMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LWxnLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LWxnLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1sZy01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC1sZy1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1sZy0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1sZy0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS1sZy0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXktbGctMyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXktbGctNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LWxnLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LWxnLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LWxnLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXQtbGctMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1sZy0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbGctMyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1sZy00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbGctNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1sZy1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLWxnLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1sZy0xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUtbGctMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUtbGctMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLWxnLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLWxnLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS1sZy1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubWItbGctMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1sZy0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLWxnLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1sZy0zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLWxnLTQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1sZy01IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLWxnLWF1dG8ge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXMtbGctMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXMtbGctMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMtbGctMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1sZy0zIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy1sZy00IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLWxnLTUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLWxnLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtbGctMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wLWxnLTEge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1sZy0yIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1sZy0zIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtbGctNCB7XG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtbGctNSB7XG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1sZy0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LWxnLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgtbGctMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgtbGctMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1sZy00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC1sZy01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LWxnLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHktbGctMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1sZy0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS1sZy0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LWxnLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LWxnLTUge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtbGctMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHQtbGctMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtbGctMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1sZy0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1sZy00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LWxnLTUge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLWxnLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucGUtbGctMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1sZy0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUtbGctMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS1sZy00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUtbGctNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1sZy0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1sZy0xIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1sZy0yIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLWxnLTMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLWxnLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItbGctNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMtbGctMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLWxnLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1sZy0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy1sZy0zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMtbGctNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMtbGctNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmQteGwtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXhsLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXhsLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC1pbmxpbmUtZ3JpZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXhsLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteGwtaW5saW5lLWZsZXgge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteGwtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLWZpbGwge1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteGwtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteGwtY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteGwtcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLWNvbHVtbi1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14bC1ncm93LTAge1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLWdyb3ctMSB7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteGwtc2hyaW5rLTAge1xuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteGwtc2hyaW5rLTEge1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteGwtd3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteGwtbm93cmFwIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLXdyYXAtcmV2ZXJzZSB7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLWVuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC14bC1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC14bC1ldmVubHkge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXhsLXN0YXJ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy14bC1lbmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy14bC1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMteGwtYmFzZWxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy14bC1zdHJldGNoIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXhsLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQteGwtZW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXhsLWNlbnRlciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQteGwtYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXhsLWFyb3VuZCB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQteGwtc3RyZXRjaCB7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXhsLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi14bC1zdGFydCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXhsLWVuZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi14bC1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXhsLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXhsLXN0cmV0Y2gge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteGwtZmlyc3Qge1xuICAgIG9yZGVyOiAtMSAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14bC0wIHtcbiAgICBvcmRlcjogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14bC0xIHtcbiAgICBvcmRlcjogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14bC0yIHtcbiAgICBvcmRlcjogMiAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14bC0zIHtcbiAgICBvcmRlcjogMyAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14bC00IHtcbiAgICBvcmRlcjogNCAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14bC01IHtcbiAgICBvcmRlcjogNSAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14bC1sYXN0IHtcbiAgICBvcmRlcjogNiAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXhsLTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXhsLTEge1xuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXhsLTIge1xuICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teGwtMyB7XG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teGwtNCB7XG4gICAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS14bC01IHtcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS14bC1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXgteGwtMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXgteGwtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgteGwtMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXhsLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXhsLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC14bC01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC14bC1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5teS14bC0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5teS14bC0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS14bC0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXkteGwtMyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXkteGwtNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXhsLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXhsLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXhsLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXQteGwtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14bC0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteGwtMyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14bC00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteGwtNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14bC1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXhsLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS14bC0xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUteGwtMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUteGwtMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXhsLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXhsLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS14bC1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubWIteGwtMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14bC0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXhsLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14bC0zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXhsLTQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14bC01IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXhsLWF1dG8ge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXMteGwtMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXMteGwtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMteGwtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy14bC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy14bC00IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXhsLTUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXhsLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAteGwtMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXhsLTEge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC14bC0yIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC14bC0zIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAteGwtNCB7XG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAteGwtNSB7XG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC14bC0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXhsLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgteGwtMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgteGwtMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC14bC00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC14bC01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXhsLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHkteGwtMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS14bC0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS14bC0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXhsLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXhsLTUge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQteGwtMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHQteGwtMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQteGwtMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC14bC0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC14bC00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXhsLTUge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLXhsLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucGUteGwtMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS14bC0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUteGwtMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS14bC00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUteGwtNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi14bC0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi14bC0xIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi14bC0yIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXhsLTMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXhsLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGIteGwtNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMteGwtMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLXhsLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy14bC0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy14bC0zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMteGwtNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMteGwtNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgLmQteHhsLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteHhsLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteHhsLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXh4bC1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteHhsLWlubGluZS1ncmlkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXh4bC10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgfVxuICAuZC14eGwtdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuICAuZC14eGwtdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXh4bC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteHhsLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXh4bC1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteHhsLWZpbGwge1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteHhsLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXh4bC1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14eGwtcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXh4bC1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteHhsLWdyb3ctMCB7XG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteHhsLWdyb3ctMSB7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteHhsLXNocmluay0wIHtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXh4bC1zaHJpbmstMSB7XG4gICAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14eGwtd3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteHhsLW5vd3JhcCB7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14eGwtd3JhcC1yZXZlcnNlIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteHhsLXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXh4bC1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXh4bC1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC14eGwtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC14eGwtYXJvdW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteHhsLWV2ZW5seSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMteHhsLXN0YXJ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy14eGwtZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMteHhsLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy14eGwtYmFzZWxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy14eGwtc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC14eGwtc3RhcnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC14eGwtZW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXh4bC1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXh4bC1iZXR3ZWVuIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQteHhsLWFyb3VuZCB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQteHhsLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi14eGwtYXV0byB7XG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXh4bC1zdGFydCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXh4bC1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYteHhsLWNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYteHhsLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXh4bC1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXh4bC1maXJzdCB7XG4gICAgb3JkZXI6IC0xICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXh4bC0wIHtcbiAgICBvcmRlcjogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14eGwtMSB7XG4gICAgb3JkZXI6IDEgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteHhsLTIge1xuICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXh4bC0zIHtcbiAgICBvcmRlcjogMyAhaW1wb3J0YW50O1xuICB9XG4gIC5vcmRlci14eGwtNCB7XG4gICAgb3JkZXI6IDQgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIteHhsLTUge1xuICAgIG9yZGVyOiA1ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVyLXh4bC1sYXN0IHtcbiAgICBvcmRlcjogNiAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXh4bC0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuICAubS14eGwtMSB7XG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teHhsLTIge1xuICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teHhsLTMge1xuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXh4bC00IHtcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXh4bC01IHtcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS14eGwtYXV0byB7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm14LXh4bC0wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5teC14eGwtMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgteHhsLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC14eGwtMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgteHhsLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teC14eGwtNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXgteHhsLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm15LXh4bC0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5teS14eGwtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXkteHhsLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS14eGwtMyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXkteHhsLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5teS14eGwtNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXkteHhsLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXh4bC0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXh4bC0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXh4bC0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteHhsLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteHhsLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14eGwtNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14eGwtYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tZS14eGwtMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXh4bC0xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUteHhsLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXh4bC0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUteHhsLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lLXh4bC01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWUteHhsLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14eGwtMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14eGwtMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14eGwtMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXh4bC0zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXh4bC00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWIteHhsLTUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWIteHhsLWF1dG8ge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXMteHhsLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXh4bC0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy14eGwtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tcy14eGwtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMteHhsLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXMteHhsLTUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1zLXh4bC1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXh4bC0wIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAteHhsLTEge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC14eGwtMiB7XG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAteHhsLTMge1xuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC14eGwtNCB7XG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAteHhsLTUge1xuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgteHhsLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHgteHhsLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHgteHhsLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXh4bC0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB4LXh4bC00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weC14eGwtNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS14eGwtMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5weS14eGwtMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5weS14eGwtMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHkteHhsLTMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHkteHhsLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB5LXh4bC01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXh4bC0wIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC14eGwtMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQteHhsLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQteHhsLTMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXh4bC00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXh4bC01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS14eGwtMCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS14eGwtMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wZS14eGwtMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLXh4bC0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBlLXh4bC00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGUteHhsLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGIteHhsLTAge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXh4bC0xIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi14eGwtMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi14eGwtMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGIteHhsLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGIteHhsLTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBzLXh4bC0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHMteHhsLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy14eGwtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMteHhsLTMge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcy14eGwtNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHMteHhsLTUge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgcHJpbnQge1xuICAuZC1wcmludC1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtcHJpbnQtYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtcHJpbnQtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LWlubGluZS1ncmlkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtcHJpbnQtdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuICAuZC1wcmludC1pbmxpbmUtZmxleCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgfVxuICAuZC1wcmludC1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLWdyaWQuY3NzLm1hcCAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ib290c3RyYXAtZ3JpZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7RUFJRTtBQUNGOzs7Ozs7O0VBT0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsNkNBQTZDO0VBQzdDLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JC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NUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFD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MEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUEsNkNBQTZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIVxcbiAqIEJvb3RzdHJhcCBHcmlkIHY1LjMuMSAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDIzIFRoZSBCb290c3RyYXAgQXV0aG9yc1xcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxcbiAqL1xcbi5jb250YWluZXIsXFxuLmNvbnRhaW5lci1mbHVpZCxcXG4uY29udGFpbmVyLXh4bCxcXG4uY29udGFpbmVyLXhsLFxcbi5jb250YWluZXItbGcsXFxuLmNvbnRhaW5lci1tZCxcXG4uY29udGFpbmVyLXNtIHtcXG4gIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcXG4gIC0tYnMtZ3V0dGVyLXk6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogMC41KTtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1icy1ndXR0ZXIteCkgKiAwLjUpO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNTQwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNzIwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNvbnRhaW5lci1sZywgLmNvbnRhaW5lci1tZCwgLmNvbnRhaW5lci1zbSwgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogOTYwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5jb250YWluZXIteGwsIC5jb250YWluZXItbGcsIC5jb250YWluZXItbWQsIC5jb250YWluZXItc20sIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLmNvbnRhaW5lci14eGwsIC5jb250YWluZXIteGwsIC5jb250YWluZXItbGcsIC5jb250YWluZXItbWQsIC5jb250YWluZXItc20sIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEzMjBweDtcXG4gIH1cXG59XFxuOnJvb3Qge1xcbiAgLS1icy1icmVha3BvaW50LXhzOiAwO1xcbiAgLS1icy1icmVha3BvaW50LXNtOiA1NzZweDtcXG4gIC0tYnMtYnJlYWtwb2ludC1tZDogNzY4cHg7XFxuICAtLWJzLWJyZWFrcG9pbnQtbGc6IDk5MnB4O1xcbiAgLS1icy1icmVha3BvaW50LXhsOiAxMjAwcHg7XFxuICAtLWJzLWJyZWFrcG9pbnQteHhsOiAxNDAwcHg7XFxufVxcblxcbi5yb3cge1xcbiAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xcbiAgLS1icy1ndXR0ZXIteTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tYnMtZ3V0dGVyLXkpKTtcXG4gIG1hcmdpbi1yaWdodDogY2FsYygtMC41ICogdmFyKC0tYnMtZ3V0dGVyLXgpKTtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0wLjUgKiB2YXIoLS1icy1ndXR0ZXIteCkpO1xcbn1cXG4ucm93ID4gKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYnMtZ3V0dGVyLXgpICogMC41KTtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1icy1ndXR0ZXIteCkgKiAwLjUpO1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tYnMtZ3V0dGVyLXkpO1xcbn1cXG5cXG4uY29sIHtcXG4gIGZsZXg6IDEgMCAwJTtcXG59XFxuXFxuLnJvdy1jb2xzLWF1dG8gPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5yb3ctY29scy0xID4gKiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucm93LWNvbHMtMiA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4ucm93LWNvbHMtMyA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XFxufVxcblxcbi5yb3ctY29scy00ID4gKiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAyNSU7XFxufVxcblxcbi5yb3ctY29scy01ID4gKiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbi5yb3ctY29scy02ID4gKiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC1hdXRvIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5jb2wtMSB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiA4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC0yIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC0zIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuXFxuLmNvbC00IHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC01IHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC02IHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbC03IHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC04IHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC05IHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuXFxuLmNvbC0xMCB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiA4My4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wtMTEge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogOTEuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLTEyIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5vZmZzZXQtMSB7XFxuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxufVxcblxcbi5vZmZzZXQtMiB7XFxuICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbn1cXG5cXG4ub2Zmc2V0LTMge1xcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuLm9mZnNldC00IHtcXG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxufVxcblxcbi5vZmZzZXQtNSB7XFxuICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbn1cXG5cXG4ub2Zmc2V0LTYge1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuXFxuLm9mZnNldC03IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxufVxcblxcbi5vZmZzZXQtOCB7XFxuICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbn1cXG5cXG4ub2Zmc2V0LTkge1xcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuXFxuLm9mZnNldC0xMCB7XFxuICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbn1cXG5cXG4ub2Zmc2V0LTExIHtcXG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxufVxcblxcbi5nLTAsXFxuLmd4LTAge1xcbiAgLS1icy1ndXR0ZXIteDogMDtcXG59XFxuXFxuLmctMCxcXG4uZ3ktMCB7XFxuICAtLWJzLWd1dHRlci15OiAwO1xcbn1cXG5cXG4uZy0xLFxcbi5neC0xIHtcXG4gIC0tYnMtZ3V0dGVyLXg6IDAuMjVyZW07XFxufVxcblxcbi5nLTEsXFxuLmd5LTEge1xcbiAgLS1icy1ndXR0ZXIteTogMC4yNXJlbTtcXG59XFxuXFxuLmctMixcXG4uZ3gtMiB7XFxuICAtLWJzLWd1dHRlci14OiAwLjVyZW07XFxufVxcblxcbi5nLTIsXFxuLmd5LTIge1xcbiAgLS1icy1ndXR0ZXIteTogMC41cmVtO1xcbn1cXG5cXG4uZy0zLFxcbi5neC0zIHtcXG4gIC0tYnMtZ3V0dGVyLXg6IDFyZW07XFxufVxcblxcbi5nLTMsXFxuLmd5LTMge1xcbiAgLS1icy1ndXR0ZXIteTogMXJlbTtcXG59XFxuXFxuLmctNCxcXG4uZ3gtNCB7XFxuICAtLWJzLWd1dHRlci14OiAxLjVyZW07XFxufVxcblxcbi5nLTQsXFxuLmd5LTQge1xcbiAgLS1icy1ndXR0ZXIteTogMS41cmVtO1xcbn1cXG5cXG4uZy01LFxcbi5neC01IHtcXG4gIC0tYnMtZ3V0dGVyLXg6IDNyZW07XFxufVxcblxcbi5nLTUsXFxuLmd5LTUge1xcbiAgLS1icy1ndXR0ZXIteTogM3JlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAuY29sLXNtIHtcXG4gICAgZmxleDogMSAwIDAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXNtLWF1dG8gPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXNtLTEgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXNtLTIgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAucm93LWNvbHMtc20tMyA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXNtLTQgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxuICAucm93LWNvbHMtc20tNSA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDIwJTtcXG4gIH1cXG4gIC5yb3ctY29scy1zbS02ID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLXNtLWF1dG8ge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuICAuY29sLXNtLTEge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC1zbS0yIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLXNtLTMge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDI1JTtcXG4gIH1cXG4gIC5jb2wtc20tNCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC1zbS01IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA0MS42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLXNtLTYge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG4gIC5jb2wtc20tNyB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC1zbS04IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLXNtLTkge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG4gIC5jb2wtc20tMTAge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wtc20tMTEge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wtc20tMTIge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAub2Zmc2V0LXNtLTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5vZmZzZXQtc20tMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQtc20tMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuICAub2Zmc2V0LXNtLTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcbiAgLm9mZnNldC1zbS00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQtc20tNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuICAub2Zmc2V0LXNtLTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcbiAgLm9mZnNldC1zbS03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQtc20tOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAub2Zmc2V0LXNtLTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcbiAgLm9mZnNldC1zbS0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LXNtLTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5nLXNtLTAsXFxuICAuZ3gtc20tMCB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDA7XFxuICB9XFxuICAuZy1zbS0wLFxcbiAgLmd5LXNtLTAge1xcbiAgICAtLWJzLWd1dHRlci15OiAwO1xcbiAgfVxcbiAgLmctc20tMSxcXG4gIC5neC1zbS0xIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMC4yNXJlbTtcXG4gIH1cXG4gIC5nLXNtLTEsXFxuICAuZ3ktc20tMSB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDAuMjVyZW07XFxuICB9XFxuICAuZy1zbS0yLFxcbiAgLmd4LXNtLTIge1xcbiAgICAtLWJzLWd1dHRlci14OiAwLjVyZW07XFxuICB9XFxuICAuZy1zbS0yLFxcbiAgLmd5LXNtLTIge1xcbiAgICAtLWJzLWd1dHRlci15OiAwLjVyZW07XFxuICB9XFxuICAuZy1zbS0zLFxcbiAgLmd4LXNtLTMge1xcbiAgICAtLWJzLWd1dHRlci14OiAxcmVtO1xcbiAgfVxcbiAgLmctc20tMyxcXG4gIC5neS1zbS0zIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMXJlbTtcXG4gIH1cXG4gIC5nLXNtLTQsXFxuICAuZ3gtc20tNCB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDEuNXJlbTtcXG4gIH1cXG4gIC5nLXNtLTQsXFxuICAuZ3ktc20tNCB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDEuNXJlbTtcXG4gIH1cXG4gIC5nLXNtLTUsXFxuICAuZ3gtc20tNSB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDNyZW07XFxuICB9XFxuICAuZy1zbS01LFxcbiAgLmd5LXNtLTUge1xcbiAgICAtLWJzLWd1dHRlci15OiAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb2wtbWQge1xcbiAgICBmbGV4OiAxIDAgMCU7XFxuICB9XFxuICAucm93LWNvbHMtbWQtYXV0byA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuICAucm93LWNvbHMtbWQtMSA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAucm93LWNvbHMtbWQtMiA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG4gIC5yb3ctY29scy1tZC0zID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XFxuICB9XFxuICAucm93LWNvbHMtbWQtNCA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDI1JTtcXG4gIH1cXG4gIC5yb3ctY29scy1tZC01ID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLW1kLTYgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wtbWQtYXV0byB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5jb2wtbWQtMSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLW1kLTIge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wtbWQtMyB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbiAgLmNvbC1tZC00IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLW1kLTUge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wtbWQtNiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLmNvbC1tZC03IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLW1kLTgge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wtbWQtOSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgfVxcbiAgLmNvbC1tZC0xMCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC1tZC0xMSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC1tZC0xMiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5vZmZzZXQtbWQtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbiAgLm9mZnNldC1tZC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC1tZC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQtbWQtMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB9XFxuICAub2Zmc2V0LW1kLTQge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC1tZC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQtbWQtNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuICAub2Zmc2V0LW1kLTcge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC1tZC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5vZmZzZXQtbWQtOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuICAub2Zmc2V0LW1kLTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQtbWQtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmctbWQtMCxcXG4gIC5neC1tZC0wIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMDtcXG4gIH1cXG4gIC5nLW1kLTAsXFxuICAuZ3ktbWQtMCB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDA7XFxuICB9XFxuICAuZy1tZC0xLFxcbiAgLmd4LW1kLTEge1xcbiAgICAtLWJzLWd1dHRlci14OiAwLjI1cmVtO1xcbiAgfVxcbiAgLmctbWQtMSxcXG4gIC5neS1tZC0xIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMC4yNXJlbTtcXG4gIH1cXG4gIC5nLW1kLTIsXFxuICAuZ3gtbWQtMiB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDAuNXJlbTtcXG4gIH1cXG4gIC5nLW1kLTIsXFxuICAuZ3ktbWQtMiB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDAuNXJlbTtcXG4gIH1cXG4gIC5nLW1kLTMsXFxuICAuZ3gtbWQtMyB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDFyZW07XFxuICB9XFxuICAuZy1tZC0zLFxcbiAgLmd5LW1kLTMge1xcbiAgICAtLWJzLWd1dHRlci15OiAxcmVtO1xcbiAgfVxcbiAgLmctbWQtNCxcXG4gIC5neC1tZC00IHtcXG4gICAgLS1icy1ndXR0ZXIteDogMS41cmVtO1xcbiAgfVxcbiAgLmctbWQtNCxcXG4gIC5neS1tZC00IHtcXG4gICAgLS1icy1ndXR0ZXIteTogMS41cmVtO1xcbiAgfVxcbiAgLmctbWQtNSxcXG4gIC5neC1tZC01IHtcXG4gICAgLS1icy1ndXR0ZXIteDogM3JlbTtcXG4gIH1cXG4gIC5nLW1kLTUsXFxuICAuZ3ktbWQtNSB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNvbC1sZyB7XFxuICAgIGZsZXg6IDEgMCAwJTtcXG4gIH1cXG4gIC5yb3ctY29scy1sZy1hdXRvID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5yb3ctY29scy1sZy0xID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5yb3ctY29scy1sZy0yID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLWxnLTMgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcXG4gIH1cXG4gIC5yb3ctY29scy1sZy00ID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLWxnLTUgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAyMCU7XFxuICB9XFxuICAucm93LWNvbHMtbGctNiA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC1sZy1hdXRvIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbiAgLmNvbC1sZy0xIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wtbGctMiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC1sZy0zIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxuICAuY29sLWxnLTQge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wtbGctNSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC1sZy02IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAuY29sLWxnLTcge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wtbGctOCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC1sZy05IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA3NSU7XFxuICB9XFxuICAuY29sLWxnLTEwIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLWxnLTExIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLWxnLTEyIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm9mZnNldC1sZy0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuICAub2Zmc2V0LWxnLTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LWxnLTIge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC1sZy0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG4gIC5vZmZzZXQtbGctNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LWxnLTUge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC1sZy02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG4gIC5vZmZzZXQtbGctNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LWxnLTgge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC1sZy05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG4gIC5vZmZzZXQtbGctMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC1sZy0xMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuZy1sZy0wLFxcbiAgLmd4LWxnLTAge1xcbiAgICAtLWJzLWd1dHRlci14OiAwO1xcbiAgfVxcbiAgLmctbGctMCxcXG4gIC5neS1sZy0wIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMDtcXG4gIH1cXG4gIC5nLWxnLTEsXFxuICAuZ3gtbGctMSB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDAuMjVyZW07XFxuICB9XFxuICAuZy1sZy0xLFxcbiAgLmd5LWxnLTEge1xcbiAgICAtLWJzLWd1dHRlci15OiAwLjI1cmVtO1xcbiAgfVxcbiAgLmctbGctMixcXG4gIC5neC1sZy0yIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMC41cmVtO1xcbiAgfVxcbiAgLmctbGctMixcXG4gIC5neS1sZy0yIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMC41cmVtO1xcbiAgfVxcbiAgLmctbGctMyxcXG4gIC5neC1sZy0zIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMXJlbTtcXG4gIH1cXG4gIC5nLWxnLTMsXFxuICAuZ3ktbGctMyB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDFyZW07XFxuICB9XFxuICAuZy1sZy00LFxcbiAgLmd4LWxnLTQge1xcbiAgICAtLWJzLWd1dHRlci14OiAxLjVyZW07XFxuICB9XFxuICAuZy1sZy00LFxcbiAgLmd5LWxnLTQge1xcbiAgICAtLWJzLWd1dHRlci15OiAxLjVyZW07XFxuICB9XFxuICAuZy1sZy01LFxcbiAgLmd4LWxnLTUge1xcbiAgICAtLWJzLWd1dHRlci14OiAzcmVtO1xcbiAgfVxcbiAgLmctbGctNSxcXG4gIC5neS1sZy01IHtcXG4gICAgLS1icy1ndXR0ZXIteTogM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLmNvbC14bCB7XFxuICAgIGZsZXg6IDEgMCAwJTtcXG4gIH1cXG4gIC5yb3ctY29scy14bC1hdXRvID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5yb3ctY29scy14bC0xID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5yb3ctY29scy14bC0yID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXhsLTMgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcXG4gIH1cXG4gIC5yb3ctY29scy14bC00ID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXhsLTUgPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAyMCU7XFxuICB9XFxuICAucm93LWNvbHMteGwtNiA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC14bC1hdXRvIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbiAgLmNvbC14bC0xIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wteGwtMiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC14bC0zIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxuICAuY29sLXhsLTQge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wteGwtNSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC14bC02IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAuY29sLXhsLTcge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5jb2wteGwtOCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmNvbC14bC05IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA3NSU7XFxuICB9XFxuICAuY29sLXhsLTEwIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLXhsLTExIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLXhsLTEyIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm9mZnNldC14bC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuICAub2Zmc2V0LXhsLTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LXhsLTIge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC14bC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG4gIC5vZmZzZXQteGwtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LXhsLTUge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC14bC02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG4gIC5vZmZzZXQteGwtNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LXhsLTgge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC14bC05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG4gIC5vZmZzZXQteGwtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLm9mZnNldC14bC0xMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuZy14bC0wLFxcbiAgLmd4LXhsLTAge1xcbiAgICAtLWJzLWd1dHRlci14OiAwO1xcbiAgfVxcbiAgLmcteGwtMCxcXG4gIC5neS14bC0wIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMDtcXG4gIH1cXG4gIC5nLXhsLTEsXFxuICAuZ3gteGwtMSB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDAuMjVyZW07XFxuICB9XFxuICAuZy14bC0xLFxcbiAgLmd5LXhsLTEge1xcbiAgICAtLWJzLWd1dHRlci15OiAwLjI1cmVtO1xcbiAgfVxcbiAgLmcteGwtMixcXG4gIC5neC14bC0yIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMC41cmVtO1xcbiAgfVxcbiAgLmcteGwtMixcXG4gIC5neS14bC0yIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMC41cmVtO1xcbiAgfVxcbiAgLmcteGwtMyxcXG4gIC5neC14bC0zIHtcXG4gICAgLS1icy1ndXR0ZXIteDogMXJlbTtcXG4gIH1cXG4gIC5nLXhsLTMsXFxuICAuZ3kteGwtMyB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDFyZW07XFxuICB9XFxuICAuZy14bC00LFxcbiAgLmd4LXhsLTQge1xcbiAgICAtLWJzLWd1dHRlci14OiAxLjVyZW07XFxuICB9XFxuICAuZy14bC00LFxcbiAgLmd5LXhsLTQge1xcbiAgICAtLWJzLWd1dHRlci15OiAxLjVyZW07XFxuICB9XFxuICAuZy14bC01LFxcbiAgLmd4LXhsLTUge1xcbiAgICAtLWJzLWd1dHRlci14OiAzcmVtO1xcbiAgfVxcbiAgLmcteGwtNSxcXG4gIC5neS14bC01IHtcXG4gICAgLS1icy1ndXR0ZXIteTogM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcbiAgLmNvbC14eGwge1xcbiAgICBmbGV4OiAxIDAgMCU7XFxuICB9XFxuICAucm93LWNvbHMteHhsLWF1dG8gPiAqIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXh4bC0xID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5yb3ctY29scy14eGwtMiA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG4gIC5yb3ctY29scy14eGwtMyA+ICoge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXh4bC00ID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXh4bC01ID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgfVxcbiAgLnJvdy1jb2xzLXh4bC02ID4gKiB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLXh4bC1hdXRvIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbiAgLmNvbC14eGwtMSB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLXh4bC0yIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLXh4bC0zIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxuICAuY29sLXh4bC00IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLXh4bC01IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA0MS42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLXh4bC02IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxuICAuY29sLXh4bC03IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuICAuY29sLXh4bC04IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuY29sLXh4bC05IHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiA3NSU7XFxuICB9XFxuICAuY29sLXh4bC0xMCB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmNvbC14eGwtMTEge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5jb2wteHhsLTEyIHtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm9mZnNldC14eGwtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbiAgLm9mZnNldC14eGwtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQteHhsLTIge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC14eGwtMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICB9XFxuICAub2Zmc2V0LXh4bC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQteHhsLTUge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC14eGwtNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuICAub2Zmc2V0LXh4bC03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5vZmZzZXQteHhsLTgge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLm9mZnNldC14eGwtOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuICAub2Zmc2V0LXh4bC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAub2Zmc2V0LXh4bC0xMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuZy14eGwtMCxcXG4gIC5neC14eGwtMCB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDA7XFxuICB9XFxuICAuZy14eGwtMCxcXG4gIC5neS14eGwtMCB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDA7XFxuICB9XFxuICAuZy14eGwtMSxcXG4gIC5neC14eGwtMSB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDAuMjVyZW07XFxuICB9XFxuICAuZy14eGwtMSxcXG4gIC5neS14eGwtMSB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDAuMjVyZW07XFxuICB9XFxuICAuZy14eGwtMixcXG4gIC5neC14eGwtMiB7XFxuICAgIC0tYnMtZ3V0dGVyLXg6IDAuNXJlbTtcXG4gIH1cXG4gIC5nLXh4bC0yLFxcbiAgLmd5LXh4bC0yIHtcXG4gICAgLS1icy1ndXR0ZXIteTogMC41cmVtO1xcbiAgfVxcbiAgLmcteHhsLTMsXFxuICAuZ3gteHhsLTMge1xcbiAgICAtLWJzLWd1dHRlci14OiAxcmVtO1xcbiAgfVxcbiAgLmcteHhsLTMsXFxuICAuZ3kteHhsLTMge1xcbiAgICAtLWJzLWd1dHRlci15OiAxcmVtO1xcbiAgfVxcbiAgLmcteHhsLTQsXFxuICAuZ3gteHhsLTQge1xcbiAgICAtLWJzLWd1dHRlci14OiAxLjVyZW07XFxuICB9XFxuICAuZy14eGwtNCxcXG4gIC5neS14eGwtNCB7XFxuICAgIC0tYnMtZ3V0dGVyLXk6IDEuNXJlbTtcXG4gIH1cXG4gIC5nLXh4bC01LFxcbiAgLmd4LXh4bC01IHtcXG4gICAgLS1icy1ndXR0ZXIteDogM3JlbTtcXG4gIH1cXG4gIC5nLXh4bC01LFxcbiAgLmd5LXh4bC01IHtcXG4gICAgLS1icy1ndXR0ZXIteTogM3JlbTtcXG4gIH1cXG59XFxuLmQtaW5saW5lIHtcXG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1pbmxpbmUtZ3JpZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC10YWJsZSB7XFxuICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC10YWJsZS1yb3cge1xcbiAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLXRhYmxlLWNlbGwge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLmQtaW5saW5lLWZsZXgge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4LWZpbGwge1xcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG59XFxuXFxuLmZsZXgtY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG59XFxuXFxuLmZsZXgtcm93LXJldmVyc2Uge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4LWNvbHVtbi1yZXZlcnNlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmxleC1ncm93LTAge1xcbiAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4LWdyb3ctMSB7XFxuICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcXG59XFxuXFxuLmZsZXgtc2hyaW5rLTAge1xcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZsZXgtc2hyaW5rLTEge1xcbiAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDtcXG59XFxuXFxuLmZsZXgtd3JhcCB7XFxuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZsZXgtbm93cmFwIHtcXG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mbGV4LXdyYXAtcmV2ZXJzZSB7XFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1hcm91bmQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1ldmVubHkge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLXN0YXJ0IHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1pdGVtcy1lbmQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24taXRlbXMtYmFzZWxpbmUge1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1pdGVtcy1zdHJldGNoIHtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1jb250ZW50LXN0YXJ0IHtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG59XFxuXFxuLmFsaWduLWNvbnRlbnQtZW5kIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1jb250ZW50LWNlbnRlciB7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG59XFxuXFxuLmFsaWduLWNvbnRlbnQtYmV0d2VlbiB7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1jb250ZW50LWFyb3VuZCB7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcXG59XFxuXFxuLmFsaWduLWNvbnRlbnQtc3RyZXRjaCB7XFxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1zZWxmLWF1dG8ge1xcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1zdGFydCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1zZWxmLWVuZCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1jZW50ZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1zZWxmLWJhc2VsaW5lIHtcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hbGlnbi1zZWxmLXN0cmV0Y2gge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ub3JkZXItZmlyc3Qge1xcbiAgb3JkZXI6IC0xICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcmRlci0wIHtcXG4gIG9yZGVyOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcmRlci0xIHtcXG4gIG9yZGVyOiAxICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcmRlci0yIHtcXG4gIG9yZGVyOiAyICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcmRlci0zIHtcXG4gIG9yZGVyOiAzICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcmRlci00IHtcXG4gIG9yZGVyOiA0ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcmRlci01IHtcXG4gIG9yZGVyOiA1ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5vcmRlci1sYXN0IHtcXG4gIG9yZGVyOiA2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tLTAge1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tLTEge1xcbiAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tLTIge1xcbiAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm0tMyB7XFxuICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm0tNCB7XFxuICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubS01IHtcXG4gIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubS1hdXRvIHtcXG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXgtMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teC0xIHtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm14LTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm14LTMge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXgtNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXgtNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teC1hdXRvIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuLm15LTAge1xcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXktMSB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teS0yIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teS0zIHtcXG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm15LTQge1xcbiAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm15LTUge1xcbiAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXktYXV0byB7XFxuICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tdC0wIHtcXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLm10LTEge1xcbiAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXQtMiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm10LTMge1xcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXQtNCB7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm10LTUge1xcbiAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXQtYXV0byB7XFxuICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZS0wIHtcXG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWUtMSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm1lLTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm1lLTMge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZS00IHtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZS01IHtcXG4gIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWUtYXV0byB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuLm1iLTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWItMSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWItMyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYi00IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWItNSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYi1hdXRvIHtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuLm1zLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLm1zLTEge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLm1zLTIge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXMtMyB7XFxuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXMtNCB7XFxuICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tcy01IHtcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tcy1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wLTAge1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucC0xIHtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnAtMiB7XFxuICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnAtMyB7XFxuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wLTQge1xcbiAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wLTUge1xcbiAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHgtMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnB4LTEge1xcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weC0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnB4LTMge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weC00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnB4LTUge1xcbiAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5weS0wIHtcXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHktMSB7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHktMyB7XFxuICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnB5LTQge1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHktNSB7XFxuICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnB0LTAge1xcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnB0LTEge1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnB0LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHQtMyB7XFxuICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHQtNCB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wdC01IHtcXG4gIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wZS0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnBlLTEge1xcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGUtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBlLTMge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGUtNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBlLTUge1xcbiAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGItMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGItMSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wYi0zIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wYi00IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBiLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBzLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcy0xIHtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHMtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHMtMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBzLTQge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLnBzLTUge1xcbiAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgLmQtc20taW5saW5lIHtcXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1zbS1pbmxpbmUtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXNtLWJsb2NrIHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXNtLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1zbS1pbmxpbmUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1zbS10YWJsZSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1zbS10YWJsZS1yb3cge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXNtLXRhYmxlLWNlbGwge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1zbS1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtc20taW5saW5lLWZsZXgge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtc20tbm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXNtLWZpbGwge1xcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtc20tcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtc20tY29sdW1uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtc20tcm93LXJldmVyc2Uge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXNtLWNvbHVtbi1yZXZlcnNlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1zbS1ncm93LTAge1xcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXNtLWdyb3ctMSB7XFxuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtc20tc2hyaW5rLTAge1xcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtc20tc2hyaW5rLTEge1xcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtc20td3JhcCB7XFxuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtc20tbm93cmFwIHtcXG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXNtLXdyYXAtcmV2ZXJzZSB7XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXNtLXN0YXJ0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXNtLWVuZCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tY2VudGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tYmV0d2VlbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1zbS1hcm91bmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1zbS1ldmVubHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLXNtLXN0YXJ0IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1zbS1lbmQge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1zbS1jZW50ZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtc20tYmFzZWxpbmUge1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1zbS1zdHJldGNoIHtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXNtLXN0YXJ0IHtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQtc20tZW5kIHtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXNtLWNlbnRlciB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQtc20tYmV0d2VlbiB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXNtLWFyb3VuZCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQtc20tc3RyZXRjaCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLXNtLWF1dG8ge1xcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1zbS1zdGFydCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLXNtLWVuZCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1zbS1jZW50ZXIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLXNtLWJhc2VsaW5lIHtcXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLXNtLXN0cmV0Y2gge1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItc20tZmlyc3Qge1xcbiAgICBvcmRlcjogLTEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1zbS0wIHtcXG4gICAgb3JkZXI6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1zbS0xIHtcXG4gICAgb3JkZXI6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1zbS0yIHtcXG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1zbS0zIHtcXG4gICAgb3JkZXI6IDMgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1zbS00IHtcXG4gICAgb3JkZXI6IDQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1zbS01IHtcXG4gICAgb3JkZXI6IDUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1zbS1sYXN0IHtcXG4gICAgb3JkZXI6IDYgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXNtLTAge1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXNtLTEge1xcbiAgICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXNtLTIge1xcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tc20tMyB7XFxuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tc20tNCB7XFxuICAgIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1zbS01IHtcXG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1zbS1hdXRvIHtcXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtc20tMCB7XFxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXNtLTEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1zbS0yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXNtLTMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1zbS00IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXNtLTUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1zbS1hdXRvIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktc20tMCB7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXNtLTEge1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1zbS0yIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXNtLTMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1zbS00IHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXNtLTUge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1zbS1hdXRvIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtc20tMCB7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1zbS0xIHtcXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXNtLTIge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1zbS0zIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXNtLTQge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1zbS01IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXNtLWF1dG8ge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtc20tMCB7XFxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXNtLTEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1zbS0yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1zbS0zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtc20tNCB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtc20tNSB7XFxuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXNtLWF1dG8ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1zbS0wIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXNtLTEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItc20tMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXNtLTMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItc20tNCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXNtLTUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItc20tYXV0byB7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1zbS0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1zbS0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1zbS0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXNtLTMge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXNtLTQge1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtc20tNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtc20tYXV0byB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1zbS0wIHtcXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtc20tMSB7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXNtLTIge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXNtLTMge1xcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1zbS00IHtcXG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1zbS01IHtcXG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LXNtLTAge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LXNtLTEge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LXNtLTIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1zbS0zIHtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1zbS00IHtcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgtc20tNSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktc20tMCB7XFxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktc20tMSB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktc20tMiB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXNtLTMge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXNtLTQge1xcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS1zbS01IHtcXG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1zbS0wIHtcXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1zbS0xIHtcXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1zbS0yIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LXNtLTMge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LXNtLTQge1xcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtc20tNSB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtc20tMCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1zbS0xIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLXNtLTIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1zbS0zIHtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLXNtLTQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1zbS01IHtcXG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXNtLTAge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXNtLTEge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXNtLTIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGItc20tMyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGItc20tNCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1zbS01IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1zbS0wIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtc20tMSB7XFxuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXNtLTIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXNtLTMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1zbS00IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1zbS01IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmQtbWQtaW5saW5lIHtcXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1tZC1pbmxpbmUtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLW1kLWJsb2NrIHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLW1kLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1tZC1pbmxpbmUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1tZC10YWJsZSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1tZC10YWJsZS1yb3cge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLW1kLXRhYmxlLWNlbGwge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1tZC1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbWQtaW5saW5lLWZsZXgge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbWQtbm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LW1kLWZpbGwge1xcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbWQtcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbWQtY29sdW1uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbWQtcm93LXJldmVyc2Uge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LW1kLWNvbHVtbi1yZXZlcnNlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1tZC1ncm93LTAge1xcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LW1kLWdyb3ctMSB7XFxuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbWQtc2hyaW5rLTAge1xcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbWQtc2hyaW5rLTEge1xcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbWQtd3JhcCB7XFxuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbWQtbm93cmFwIHtcXG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LW1kLXdyYXAtcmV2ZXJzZSB7XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LW1kLXN0YXJ0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LW1kLWVuZCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1tZC1hcm91bmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1tZC1ldmVubHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLW1kLXN0YXJ0IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1tZC1lbmQge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1tZC1jZW50ZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtbWQtYmFzZWxpbmUge1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1tZC1zdHJldGNoIHtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LW1kLXN0YXJ0IHtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQtbWQtZW5kIHtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LW1kLWNlbnRlciB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQtbWQtYmV0d2VlbiB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LW1kLWFyb3VuZCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQtbWQtc3RyZXRjaCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLW1kLWF1dG8ge1xcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1tZC1zdGFydCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLW1kLWVuZCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1tZC1jZW50ZXIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLW1kLWJhc2VsaW5lIHtcXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLW1kLXN0cmV0Y2gge1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbWQtZmlyc3Qge1xcbiAgICBvcmRlcjogLTEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1tZC0wIHtcXG4gICAgb3JkZXI6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1tZC0xIHtcXG4gICAgb3JkZXI6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1tZC0yIHtcXG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1tZC0zIHtcXG4gICAgb3JkZXI6IDMgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1tZC00IHtcXG4gICAgb3JkZXI6IDQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1tZC01IHtcXG4gICAgb3JkZXI6IDUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1tZC1sYXN0IHtcXG4gICAgb3JkZXI6IDYgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLW1kLTAge1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLW1kLTEge1xcbiAgICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLW1kLTIge1xcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tbWQtMyB7XFxuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tbWQtNCB7XFxuICAgIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1tZC01IHtcXG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1tZC1hdXRvIHtcXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtbWQtMCB7XFxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LW1kLTEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1tZC0yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LW1kLTMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1tZC00IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LW1kLTUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1tZC1hdXRvIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktbWQtMCB7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LW1kLTEge1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1tZC0yIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LW1kLTMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1tZC00IHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LW1kLTUge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1tZC1hdXRvIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtbWQtMCB7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1tZC0xIHtcXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LW1kLTIge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1tZC0zIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LW1kLTQge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1tZC01IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LW1kLWF1dG8ge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtbWQtMCB7XFxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLW1kLTEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1tZC0yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1tZC0zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtbWQtNCB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtbWQtNSB7XFxuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLW1kLWF1dG8ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1tZC0wIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLW1kLTEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItbWQtMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLW1kLTMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItbWQtNCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLW1kLTUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItbWQtYXV0byB7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1tZC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1tZC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1tZC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLW1kLTMge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLW1kLTQge1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtbWQtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtbWQtYXV0byB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1tZC0wIHtcXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtbWQtMSB7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLW1kLTIge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLW1kLTMge1xcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1tZC00IHtcXG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1tZC01IHtcXG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LW1kLTAge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LW1kLTEge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LW1kLTIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1tZC0zIHtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1tZC00IHtcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgtbWQtNSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktbWQtMCB7XFxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktbWQtMSB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktbWQtMiB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LW1kLTMge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LW1kLTQge1xcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS1tZC01IHtcXG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1tZC0wIHtcXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1tZC0xIHtcXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1tZC0yIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LW1kLTMge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LW1kLTQge1xcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtbWQtNSB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtbWQtMCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1tZC0xIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLW1kLTIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1tZC0zIHtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLW1kLTQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1tZC01IHtcXG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLW1kLTAge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLW1kLTEge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLW1kLTIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGItbWQtMyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGItbWQtNCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1tZC01IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1tZC0wIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtbWQtMSB7XFxuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLW1kLTIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLW1kLTMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1tZC00IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1tZC01IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmQtbGctaW5saW5lIHtcXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1sZy1pbmxpbmUtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLWxnLWJsb2NrIHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLWxnLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1sZy1pbmxpbmUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1sZy10YWJsZSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1sZy10YWJsZS1yb3cge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLWxnLXRhYmxlLWNlbGwge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1sZy1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbGctaW5saW5lLWZsZXgge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtbGctbm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LWxnLWZpbGwge1xcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbGctcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbGctY29sdW1uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbGctcm93LXJldmVyc2Uge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LWxnLWNvbHVtbi1yZXZlcnNlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC1sZy1ncm93LTAge1xcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LWxnLWdyb3ctMSB7XFxuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbGctc2hyaW5rLTAge1xcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbGctc2hyaW5rLTEge1xcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbGctd3JhcCB7XFxuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgtbGctbm93cmFwIHtcXG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LWxnLXdyYXAtcmV2ZXJzZSB7XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LWxnLXN0YXJ0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LWxnLWVuZCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctY2VudGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctYmV0d2VlbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1sZy1hcm91bmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC1sZy1ldmVubHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLWxnLXN0YXJ0IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1sZy1lbmQge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1sZy1jZW50ZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMtbGctYmFzZWxpbmUge1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy1sZy1zdHJldGNoIHtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LWxnLXN0YXJ0IHtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQtbGctZW5kIHtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LWxnLWNlbnRlciB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQtbGctYmV0d2VlbiB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LWxnLWFyb3VuZCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQtbGctc3RyZXRjaCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLWxnLWF1dG8ge1xcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1sZy1zdGFydCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLWxnLWVuZCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi1sZy1jZW50ZXIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLWxnLWJhc2VsaW5lIHtcXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLWxnLXN0cmV0Y2gge1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXItbGctZmlyc3Qge1xcbiAgICBvcmRlcjogLTEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1sZy0wIHtcXG4gICAgb3JkZXI6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1sZy0xIHtcXG4gICAgb3JkZXI6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1sZy0yIHtcXG4gICAgb3JkZXI6IDIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1sZy0zIHtcXG4gICAgb3JkZXI6IDMgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1sZy00IHtcXG4gICAgb3JkZXI6IDQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1sZy01IHtcXG4gICAgb3JkZXI6IDUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci1sZy1sYXN0IHtcXG4gICAgb3JkZXI6IDYgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLWxnLTAge1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLWxnLTEge1xcbiAgICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLWxnLTIge1xcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tbGctMyB7XFxuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0tbGctNCB7XFxuICAgIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1sZy01IHtcXG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS1sZy1hdXRvIHtcXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgtbGctMCB7XFxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LWxnLTEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1sZy0yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LWxnLTMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1sZy00IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LWxnLTUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC1sZy1hdXRvIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXktbGctMCB7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LWxnLTEge1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1sZy0yIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LWxnLTMge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1sZy00IHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LWxnLTUge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS1sZy1hdXRvIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQtbGctMCB7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1sZy0xIHtcXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LWxnLTIge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1sZy0zIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LWxnLTQge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC1sZy01IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LWxnLWF1dG8ge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtbGctMCB7XFxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLWxnLTEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1sZy0yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS1sZy0zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtbGctNCB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUtbGctNSB7XFxuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLWxnLWF1dG8ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi1sZy0wIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLWxnLTEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItbGctMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLWxnLTMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItbGctNCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLWxnLTUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWItbGctYXV0byB7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1sZy0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1sZy0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy1sZy0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLWxnLTMge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLWxnLTQge1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtbGctNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMtbGctYXV0byB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1sZy0wIHtcXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAtbGctMSB7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLWxnLTIge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLWxnLTMge1xcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1sZy00IHtcXG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC1sZy01IHtcXG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LWxnLTAge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LWxnLTEge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LWxnLTIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1sZy0zIHtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC1sZy00IHtcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgtbGctNSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktbGctMCB7XFxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktbGctMSB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHktbGctMiB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LWxnLTMge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LWxnLTQge1xcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS1sZy01IHtcXG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1sZy0wIHtcXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1sZy0xIHtcXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC1sZy0yIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LWxnLTMge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LWxnLTQge1xcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQtbGctNSB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUtbGctMCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1sZy0xIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLWxnLTIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1sZy0zIHtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLWxnLTQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS1sZy01IHtcXG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLWxnLTAge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLWxnLTEge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLWxnLTIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGItbGctMyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGItbGctNCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi1sZy01IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1sZy0wIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMtbGctMSB7XFxuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLWxnLTIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLWxnLTMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1sZy00IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy1sZy01IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5kLXhsLWlubGluZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteGwtaW5saW5lLWJsb2NrIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC14bC1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC14bC1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteGwtaW5saW5lLWdyaWQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteGwtdGFibGUge1xcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteGwtdGFibGUtcm93IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC14bC10YWJsZS1jZWxsIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteGwtZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXhsLWlubGluZS1mbGV4IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXhsLW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14bC1maWxsIHtcXG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXhsLXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXhsLWNvbHVtbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXhsLXJvdy1yZXZlcnNlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14bC1jb2x1bW4tcmV2ZXJzZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteGwtZ3Jvdy0wIHtcXG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14bC1ncm93LTEge1xcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXhsLXNocmluay0wIHtcXG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXhsLXNocmluay0xIHtcXG4gICAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXhsLXdyYXAge1xcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXhsLW5vd3JhcCB7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14bC13cmFwLXJldmVyc2Uge1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC14bC1zdGFydCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC14bC1lbmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXhsLWNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXhsLWJldHdlZW4ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtYXJvdW5kIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtZXZlbmx5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy14bC1zdGFydCB7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMteGwtZW5kIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMteGwtY2VudGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLXhsLWJhc2VsaW5lIHtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24taXRlbXMteGwtc3RyZXRjaCB7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC14bC1zdGFydCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXhsLWVuZCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC14bC1jZW50ZXIge1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXhsLWJldHdlZW4ge1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC14bC1hcm91bmQge1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXhsLXN0cmV0Y2gge1xcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi14bC1hdXRvIHtcXG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYteGwtc3RhcnQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi14bC1lbmQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYteGwtY2VudGVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi14bC1iYXNlbGluZSB7XFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi14bC1zdHJldGNoIHtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXhsLWZpcnN0IHtcXG4gICAgb3JkZXI6IC0xICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteGwtMCB7XFxuICAgIG9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteGwtMSB7XFxuICAgIG9yZGVyOiAxICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteGwtMiB7XFxuICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteGwtMyB7XFxuICAgIG9yZGVyOiAzICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteGwtNCB7XFxuICAgIG9yZGVyOiA0ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteGwtNSB7XFxuICAgIG9yZGVyOiA1ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteGwtbGFzdCB7XFxuICAgIG9yZGVyOiA2ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS14bC0wIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS14bC0xIHtcXG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS14bC0yIHtcXG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXhsLTMge1xcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXhsLTQge1xcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0teGwtNSB7XFxuICAgIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0teGwtYXV0byB7XFxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXhsLTAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC14bC0xIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgteGwtMiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC14bC0zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgteGwtNCB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC14bC01IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgteGwtYXV0byB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXhsLTAge1xcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS14bC0xIHtcXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXkteGwtMiB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS14bC0zIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXkteGwtNCB7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS14bC01IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXkteGwtYXV0byB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXhsLTAge1xcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQteGwtMSB7XFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC14bC0yIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQteGwtMyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC14bC00IHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQteGwtNSB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC14bC1hdXRvIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXhsLTAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS14bC0xIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUteGwtMiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUteGwtMyB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXhsLTQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXhsLTUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS14bC1hdXRvIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWIteGwtMCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi14bC0xIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXhsLTIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi14bC0zIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXhsLTQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi14bC01IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXhsLWF1dG8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMteGwtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMteGwtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMteGwtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy14bC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy14bC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXhsLTUge1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXhsLWF1dG8ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAteGwtMCB7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXhsLTEge1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC14bC0yIHtcXG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC14bC0zIHtcXG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAteGwtNCB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAteGwtNSB7XFxuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC14bC0wIHtcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC14bC0xIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC14bC0yIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgteGwtMyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgteGwtNCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LXhsLTUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXhsLTAge1xcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXhsLTEge1xcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXhsLTIge1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS14bC0zIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS14bC00IHtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHkteGwtNSB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQteGwtMCB7XFxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQteGwtMSB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQteGwtMiB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC14bC0zIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC14bC00IHtcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LXhsLTUge1xcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLXhsLTAge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUteGwtMSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS14bC0yIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUteGwtMyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS14bC00IHtcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUteGwtNSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi14bC0wIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi14bC0xIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi14bC0yIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXhsLTMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXhsLTQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGIteGwtNSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMteGwtMCB7XFxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXhsLTEge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy14bC0yIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy14bC0zIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMteGwtNCB7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMteGwtNSB7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAuZC14eGwtaW5saW5lIHtcXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC14eGwtaW5saW5lLWJsb2NrIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC14eGwtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteHhsLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC14eGwtaW5saW5lLWdyaWQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteHhsLXRhYmxlIHtcXG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXh4bC10YWJsZS1yb3cge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXh4bC10YWJsZS1jZWxsIHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteHhsLWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC14eGwtaW5saW5lLWZsZXgge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQteHhsLW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14eGwtZmlsbCB7XFxuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14eGwtcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteHhsLWNvbHVtbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXh4bC1yb3ctcmV2ZXJzZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteHhsLWNvbHVtbi1yZXZlcnNlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14eGwtZ3Jvdy0wIHtcXG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14eGwtZ3Jvdy0xIHtcXG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14eGwtc2hyaW5rLTAge1xcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmZsZXgteHhsLXNocmluay0xIHtcXG4gICAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXh4bC13cmFwIHtcXG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZmxleC14eGwtbm93cmFwIHtcXG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5mbGV4LXh4bC13cmFwLXJldmVyc2Uge1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC14eGwtc3RhcnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQteHhsLWVuZCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5qdXN0aWZ5LWNvbnRlbnQteHhsLWNlbnRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXh4bC1iZXR3ZWVuIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuanVzdGlmeS1jb250ZW50LXh4bC1hcm91bmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmp1c3RpZnktY29udGVudC14eGwtZXZlbmx5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy14eGwtc3RhcnQge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLXh4bC1lbmQge1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1pdGVtcy14eGwtY2VudGVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLXh4bC1iYXNlbGluZSB7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWl0ZW1zLXh4bC1zdHJldGNoIHtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXh4bC1zdGFydCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1jb250ZW50LXh4bC1lbmQge1xcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQteHhsLWNlbnRlciB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLWNvbnRlbnQteHhsLWJldHdlZW4ge1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC14eGwtYXJvdW5kIHtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tY29udGVudC14eGwtc3RyZXRjaCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcXG4gIH1cXG4gIC5hbGlnbi1zZWxmLXh4bC1hdXRvIHtcXG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYteHhsLXN0YXJ0IHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYteHhsLWVuZCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi14eGwtY2VudGVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuYWxpZ24tc2VsZi14eGwtYmFzZWxpbmUge1xcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmFsaWduLXNlbGYteHhsLXN0cmV0Y2gge1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteHhsLWZpcnN0IHtcXG4gICAgb3JkZXI6IC0xICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteHhsLTAge1xcbiAgICBvcmRlcjogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXh4bC0xIHtcXG4gICAgb3JkZXI6IDEgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci14eGwtMiB7XFxuICAgIG9yZGVyOiAyICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteHhsLTMge1xcbiAgICBvcmRlcjogMyAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm9yZGVyLXh4bC00IHtcXG4gICAgb3JkZXI6IDQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5vcmRlci14eGwtNSB7XFxuICAgIG9yZGVyOiA1ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAub3JkZXIteHhsLWxhc3Qge1xcbiAgICBvcmRlcjogNiAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0teHhsLTAge1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXh4bC0xIHtcXG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS14eGwtMiB7XFxuICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubS14eGwtMyB7XFxuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0teHhsLTQge1xcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm0teHhsLTUge1xcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tLXh4bC1hdXRvIHtcXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgteHhsLTAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC14eGwtMSB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXh4bC0yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm14LXh4bC0zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgteHhsLTQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXgteHhsLTUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teC14eGwtYXV0byB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXh4bC0wIHtcXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXkteHhsLTEge1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS14eGwtMiB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5teS14eGwtMyB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXh4bC00IHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm15LXh4bC01IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXkteHhsLWF1dG8ge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC14eGwtMCB7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC14eGwtMSB7XFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tdC14eGwtMiB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXh4bC0zIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm10LXh4bC00IHtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQteHhsLTUge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXQteHhsLWF1dG8ge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWUteHhsLTAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS14eGwtMSB7XFxuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXh4bC0yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS14eGwtMyB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXh4bC00IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tZS14eGwtNSB7XFxuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1lLXh4bC1hdXRvIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWIteHhsLTAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWIteHhsLTEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubWIteHhsLTIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi14eGwtMyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tYi14eGwtNCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXh4bC01IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1iLXh4bC1hdXRvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXh4bC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy14eGwtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMteHhsLTIge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAubXMteHhsLTMge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXh4bC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLm1zLXh4bC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5tcy14eGwtYXV0byB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucC14eGwtMCB7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXh4bC0xIHtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAteHhsLTIge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXh4bC0zIHtcXG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnAteHhsLTQge1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wLXh4bC01IHtcXG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB4LXh4bC0wIHtcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC14eGwtMSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgteHhsLTIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC14eGwtMyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHgteHhsLTQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weC14eGwtNSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHkteHhsLTAge1xcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXh4bC0xIHtcXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS14eGwtMiB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXh4bC0zIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5weS14eGwtNCB7XFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB5LXh4bC01IHtcXG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC14eGwtMCB7XFxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHQteHhsLTEge1xcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LXh4bC0yIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnB0LXh4bC0zIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC14eGwtNCB7XFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wdC14eGwtNSB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUteHhsLTAge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUteHhsLTEge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGUteHhsLTIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS14eGwtMyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wZS14eGwtNCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBlLXh4bC01IHtcXG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXh4bC0wIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wYi14eGwtMSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGIteHhsLTIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucGIteHhsLTMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXh4bC00IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBiLXh4bC01IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcy14eGwtMCB7XFxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXh4bC0xIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMteHhsLTIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXh4bC0zIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHMteHhsLTQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLnBzLXh4bC01IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSBwcmludCB7XFxuICAuZC1wcmludC1pbmxpbmUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXByaW50LWlubGluZS1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtcHJpbnQtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtcHJpbnQtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXByaW50LWlubGluZS1ncmlkIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXByaW50LXRhYmxlIHtcXG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXByaW50LXRhYmxlLXJvdyB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmQtcHJpbnQtdGFibGUtY2VsbCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcXG4gIH1cXG4gIC5kLXByaW50LWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1wcmludC1pbmxpbmUtZmxleCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuZC1wcmludC1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1ib290c3RyYXAtZ3JpZC5jc3MubWFwICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4qLFxyXG4qOjphZnRlcixcclxuKjo6YmVmb3JlIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcbmh0bWwge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuYm9keSB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5ib2R5LXdyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG51bCxcclxub2wge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5idXR0b24ge1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTs7O0VBR0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4qLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG4uYm9keS13cmFwcGVyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxudWwsXFxyXFxub2wge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib290c3RyYXAtZ3JpZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jvb3RzdHJhcC1ncmlkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG4gXCIpO1xyXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbW9iaWxlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG59KTtcclxuIiwiY29uc3Qgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIub2ZmZXJfX3N3aXBlclwiLCB7XHJcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gIFxyXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5vZmZlcl9fcy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLm9mZmVyX19zLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gIH0pOyIsImNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIucmV2aWV3X19zd2lwZXJcIiwge1xyXG4gIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgbG9vcDogZmFsc2UsXHJcblxyXG4gIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gIH0sXHJcblxyXG4gIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiBcIi5zLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICBwcmV2RWw6IFwiLnMtYnV0dG9uLXByZXZcIixcclxuICB9LFxyXG5cclxuICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXHJcbiAgfSxcclxufSk7XHJcbiIsImNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpO1xyXG5cclxuZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcclxuICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYmxvY2tJRCA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnN1YnN0cigxKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChibG9ja0lEKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICBibG9jazogXCJzdGFydFwiLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImZpbGVuYW1lXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vanMvbW9iaWxlX21lbnUuanNcIjtcclxuaW1wb3J0IFwiLi9qcy9vZmZlcl9fU3dpcGVyLmpzXCI7XHJcbmltcG9ydCBcIi4vanMvcmV2aWV3X19Td2lwZXIuanNcIjtcclxuaW1wb3J0IFwiLi9qcy9zY3JvbGwuanNcIjtcclxuaW1wb3J0IFwiLi9jc3MvcmVzZXQuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL2Jvb3RzdHJhcC1ncmlkLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5zY3NzXCI7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==