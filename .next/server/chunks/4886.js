"use strict";
exports.id = 4886;
exports.ids = [4886];
exports.modules = {

/***/ 4886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8663);





const Portfolio = ({ title , author , path , image  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "slider-thumbnail thumbnail-overlay",
        children: [
            image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                path: path,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: "w-100",
                    src: image.src,
                    alt: image?.alt || "Nft_Profile",
                    width: image?.width || 658,
                    height: image?.height || 615,
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "read-wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "title",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            path: path,
                            children: title
                        })
                    }),
                    author?.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: author.name
                    })
                ]
            })
        ]
    });
Portfolio.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    author: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
    }),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    image: _utils_types__WEBPACK_IMPORTED_MODULE_4__/* .ImageType.isRequired */ .__.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);


/***/ })

};
;