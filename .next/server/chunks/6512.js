"use strict";
exports.id = 6512;
exports.ids = [6512];
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

/***/ 2777:
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
/* harmony import */ var _components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4574);
/* harmony import */ var _components_product_layout_01__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2102);
/* harmony import */ var _ui_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8179);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8663);







const SliderOptions = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }
    ]
};
const ExploreProductArea = ({ data , className , space  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("en-product-area", space === 1 && "rn-section-gapTop", space === 2 && "rn-section-gap", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mb--30",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            ...data.section_title
                        })
                    })
                }),
                data?.products && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_slider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            options: SliderOptions,
                            className: "banner-one-slick slick-arrow-style-one rn-slick-dot-style slick-gutter-15",
                            children: data.products.map((prod)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_slider__WEBPACK_IMPORTED_MODULE_5__/* .SliderItem */ .w, {
                                    className: "single-slide-product",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_layout_01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                        })
                    })
                })
            ]
        })
    });
ExploreProductArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitleType */ .K0,
        products: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_6__/* .ProductType */ .kv).isRequired,
        placeBid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
    })
};
ExploreProductArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreProductArea);


/***/ }),

/***/ 7089:
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
/* harmony import */ var _components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4574);
/* harmony import */ var _components_product_layout_01__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2102);
/* harmony import */ var _ui_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8179);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8663);







const SliderOptions = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: true,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }
    ]
};
const ExploreProductArea = ({ data , className , space  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("en-product-area", space === 1 && "rn-section-gapTop", space === 2 && "rn-section-gap", space === 3 && "rn-section-gapBottom", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mb--30",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            ...data.section_title
                        })
                    })
                }),
                data?.products && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_slider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            options: SliderOptions,
                            className: "banner-one-slick slick-arrow-style-one rn-slick-dot-style slick-gutter-15",
                            children: data.products.map((prod)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_slider__WEBPACK_IMPORTED_MODULE_5__/* .SliderItem */ .w, {
                                    className: "single-slide-product",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_layout_01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                        })
                    })
                })
            ]
        })
    });
ExploreProductArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2,
        3
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitleType */ .K0,
        products: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_6__/* .ProductType */ .kv).isRequired,
        placeBid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
    })
};
ExploreProductArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreProductArea);


/***/ }),

/***/ 406:
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
/* harmony import */ var _components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4574);
/* harmony import */ var _components_product_layout_01__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2102);
/* harmony import */ var _ui_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8179);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8663);







const SliderOptions = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }
    ]
};
const ExploreProductArea = ({ data , className , space  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("en-product-area", space === 1 && "rn-section-gapTop", space === 2 && "rn-section-gap", space === 3 && "rn-section-gapBottom", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mb--30",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            ...data.section_title
                        })
                    })
                }),
                data?.products && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_slider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            options: SliderOptions,
                            className: "banner-one-slick slick-arrow-style-one rn-slick-dot-style slick-gutter-15",
                            children: data.products.map((prod)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_slider__WEBPACK_IMPORTED_MODULE_5__/* .SliderItem */ .w, {
                                    className: "single-slide-product",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_layout_01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                        })
                    })
                })
            ]
        })
    });
ExploreProductArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2,
        3,
        4
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitleType */ .K0,
        products: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_6__/* .ProductType */ .kv).isRequired,
        placeBid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
    })
};
ExploreProductArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreProductArea);


/***/ })

};
;