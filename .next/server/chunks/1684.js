"use strict";
exports.id = 1684;
exports.ids = [1684];
exports.modules = {

/***/ 4574:
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



const SectionTitle = ({ title , className , disableAnimation , ...restProps })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("title", className),
        "data-sal-delay": "150",
        "data-sal": !disableAnimation && "slide-up",
        "data-sal-duration": "800",
        ...restProps,
        dangerouslySetInnerHTML: {
            __html: title
        }
    });
SectionTitle.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    disableAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);


/***/ }),

/***/ 1684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4574);
/* harmony import */ var _components_product_layout_01__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2102);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3715);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8663);








const ExploreProductArea = ({ className , space , data  })=>{
    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [hasMore, setHasMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const currentProducts = data.products.slice(0, 10);
        setProducts(currentProducts);
        setHasMore(currentProducts.length < data.products.length);
    }, [
        data.products
    ]);
    const loadMoreHandler = ()=>{
        const currentProducts = data.products.slice(0, products.length + 4);
        setProducts(currentProducts);
        setHasMore(currentProducts.length < data.products.length);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("rn-product-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mb--50 align-items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6 col-md-6 col-sm-6 col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: "mb--0",
                            ...data.section_title
                        })
                    })
                }),
                products.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row g-5",
                    children: products.map((prod)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_layout_01__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                overlay: true,
                                placeBid: !!data.placeBid,
                                title: prod.title,
                                slug: prod.slug,
                                latestBid: prod.latestBid,
                                price: prod.price,
                                likeCount: prod.likeCount,
                                auction_date: prod.auction_date,
                                image: prod.images?.[0],
                                authors: prod.authors,
                                bitCount: prod.bitCount
                            })
                        }, prod.id))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "view-more-btn mt--50",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                color: "primary-alta",
                                className: !hasMore ? "disabled" : "",
                                fullwidth: true,
                                onClick: loadMoreHandler,
                                children: hasMore ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: "View More Items"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: "No More Items"
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
ExploreProductArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([
        1,
        2
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_7__/* .SectionTitleType */ .K0,
        products: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_7__/* .ProductType */ .kv),
        placeBid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
    })
};
ExploreProductArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreProductArea);


/***/ })

};
;