"use strict";
exports.id = 6377;
exports.ids = [6377];
exports.modules = {

/***/ 6377:
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
/* harmony import */ var _components_product_layout_01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2102);
/* harmony import */ var _components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4574);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4643);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8663);







const ProductArea = ({ space , className , data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-new-items", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row mb--50 align-items-center",
                    children: [
                        data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                ...data.section_title,
                                className: "mb-0"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "view-more-btn text-start text-sm-end",
                                "data-sal-delay": "150",
                                "data-sal": "slide-up",
                                "data-sal-duration": "800",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_anchor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "btn-transparent",
                                    path: "/product",
                                    children: [
                                        "VIEW ALL",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "feather feather-arrow-right"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                data?.products && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row g-5",
                    children: data.products.map((prod)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            "data-sal": "slide-up",
                            "data-sal-delay": "150",
                            "data-sal-duration": "800",
                            className: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_layout_01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                title: prod.title,
                                slug: prod.slug,
                                latestBid: prod.latestBid,
                                price: prod.price,
                                likeCount: prod.likeCount,
                                image: prod.images?.[0],
                                authors: prod.authors,
                                bitCount: prod.bitCount
                            })
                        }, prod.id))
                })
            ]
        })
    });
ProductArea.propTypes = {
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitleType */ .K0,
        products: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_6__/* .ProductType */ .kv).isRequired
    })
};
ProductArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductArea);


/***/ })

};
;