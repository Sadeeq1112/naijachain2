"use strict";
exports.id = 8934;
exports.ids = [8934];
exports.modules = {

/***/ 8934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);
/* eslint-disable no-confusing-arrow */ 



const Pagination = ({ className , currentPage , numberOfPages , rootPage  })=>{
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;
    const previousPage = currentPage - 1 === 1 ? rootPage : `${rootPage}/page/${(currentPage - 1).toString()}`;
    const nextPage = `${rootPage}/page/${(currentPage + 1).toString()}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("pagination-wrapper", className),
        "aria-label": "Page navigation example",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "pagination",
            children: [
                isFirst ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "page-item",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "disabled",
                        children: "Previous"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "page-item prev",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        path: previousPage,
                        children: "Previous"
                    })
                }),
                Array.from({
                    length: numberOfPages
                }, (_, i)=>currentPage === i + 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            className: "active",
                            path: `${rootPage}/${i === 0 ? "" : `page/${i + 1}`}`,
                            children: i + 1
                        })
                    }, `page-number-${i + 1}`) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            path: `${i === 0 ? rootPage : `${rootPage}/page/${i + 1}`}`,
                            children: i + 1
                        })
                    }, `page-number-${i + 1}`)),
                isLast ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "page-item",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "disabled",
                        children: "Next"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "page-item next",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        path: nextPage,
                        children: "Next"
                    })
                })
            ]
        })
    });
};
Pagination.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    currentPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    numberOfPages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    rootPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Pagination.defaultProps = {
    rootPage: "/blog"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ })

};
;