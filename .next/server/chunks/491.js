"use strict";
exports.id = 491;
exports.ids = [491];
exports.modules = {

/***/ 491:
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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4643);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3715);






const TopSeller = ({ name , total_sale , image , slug , className , isVarified , followBtn  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("top-seller-inner-one", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "top-seller-wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("thumbnail", isVarified && "varified"),
                        children: image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            path: slug,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: image.src,
                                alt: image?.alt || name,
                                width: image?.width || 54,
                                height: image?.height || 54
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "top-seller-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                path: slug,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "name",
                                    children: name
                                })
                            }),
                            total_sale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "count-number",
                                children: new Intl.NumberFormat("en-US", {
                                    currency: "USD"
                                }).format(total_sale)
                            })
                        ]
                    })
                ]
            }),
            followBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                path: slug,
                color: "primary-alta",
                size: "small",
                children: "Follow"
            })
        ]
    });
TopSeller.propTypes = {
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    total_sale: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        src: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape(),
            (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
        ]).isRequired,
        alt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
        height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    }).isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    isVarified: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    followBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopSeller);


/***/ })

};
;