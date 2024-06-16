"use strict";
exports.id = 5873;
exports.ids = [5873];
exports.modules = {

/***/ 5873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4574);
/* harmony import */ var _components_product_layout_01__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2102);
/* harmony import */ var _components_filter_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6427);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8663);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const ExploreProductArea = ({ className , space , data  })=>{
    const filters = [
        ...new Set((0,_utils_methods__WEBPACK_IMPORTED_MODULE_8__.flatDeep)(data?.products.map((item)=>item.categories) || []))
    ];
    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setProducts(data?.products);
    }, [
        data?.products
    ]);
    const filterHandler = (filterKey)=>{
        const prods = data?.products ? [
            ...data.products
        ] : [];
        if (filterKey === "all") {
            setProducts(data?.products);
            return;
        }
        const filterProds = prods.filter((prod)=>prod.categories.includes(filterKey));
        setProducts(filterProds);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("rn-product-area masonary-wrapper-activation", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row align-items-center mb--60",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-4",
                            children: data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "mb--0",
                                disableAnimation: true,
                                ...data.section_title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_filter_buttons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                buttons: filters,
                                filterHandler: filterHandler
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        layout: true,
                        className: "isotope-list item-5",
                        children: products?.slice(0, 10)?.map((prod)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("grid-item"),
                                layout: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_layout_01__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    placeBid: !!data.placeBid,
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
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_9__/* .SectionTitleType */ .K0,
        products: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_9__/* .ProductType */ .kv),
        placeBid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
    })
};
ExploreProductArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreProductArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;