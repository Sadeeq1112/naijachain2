"use strict";
exports.id = 9074;
exports.ids = [9074];
exports.modules = {

/***/ 9074:
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
/* harmony import */ var _ui_nice_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(388);
/* harmony import */ var _components_top_seller_layout_01__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(491);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8663);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_8__);









const CreatorArea = ({ className , space , id , data  })=>{
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1 day");
    const [sellers, setSellers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const changeHandler = (item)=>{
        setCurrent(item.value);
    };
    const filterHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const allSellers = data.creators;
        const filterdSellers = allSellers.filter((seller)=>(0,_utils_methods__WEBPACK_IMPORTED_MODULE_8__.slugify)(seller.top_since) === (0,_utils_methods__WEBPACK_IMPORTED_MODULE_8__.slugify)(current));
        setSellers(filterdSellers);
    }, [
        current,
        data.creators
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        filterHandler();
    }, [
        filterHandler
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("rn-creator-title-area", space === 1 && "rn-section-gapTop", className),
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-md-6 col-sm-6 col-12",
                            children: data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                ...data.section_title,
                                className: "mb--0",
                                disableAnimation: true
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "shortby-default text-start text-sm-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "filter-leble",
                                        children: "SHOT BY:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_nice_select__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        options: [
                                            {
                                                value: "1 day",
                                                text: "1 day"
                                            },
                                            {
                                                value: "7 Day's",
                                                text: "7 Day's"
                                            },
                                            {
                                                value: "15 Day's",
                                                text: "15 Day's"
                                            },
                                            {
                                                value: "30 Day's",
                                                text: "30 Day's"
                                            }
                                        ],
                                        defaultCurrent: 0,
                                        name: "sellerSort",
                                        onChange: changeHandler
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row g-5 mt--30 creator-list-wrapper",
                    children: sellers.slice(0, 8).map((seller)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "creator-single col-lg-3 col-md-4 col-sm-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_top_seller_layout_01__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "explore",
                                name: seller.name,
                                total_sale: seller.total_sale,
                                slug: seller.slug,
                                image: {
                                    src: seller.image.src,
                                    width: 74,
                                    height: 74
                                }
                            })
                        }, seller.id))
                })
            ]
        })
    });
};
CreatorArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([
        1,
        2
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_7__/* .SectionTitleType */ .K0,
        creators: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_7__/* .SellerType */ .Df)
    })
};
CreatorArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatorArea);


/***/ })

};
;