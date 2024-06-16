"use strict";
exports.id = 6408;
exports.ids = [6408];
exports.modules = {

/***/ 1850:
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



const SectionTitle = ({ title , align , className , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(`section-title text-${align}`, className),
        ...rest,
        children: title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("title mb--0 live-bidding-title"),
            "data-sal-delay": "150",
            "data-sal": "slide-up",
            "data-sal-duration": "800",
            children: title
        })
    });
SectionTitle.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    align: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "left",
        "right",
        "center"
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
SectionTitle.defaultProps = {
    align: "left"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);


/***/ }),

/***/ 5797:
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
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4643);
/* harmony import */ var _components_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2492);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8663);







const TopCollectionArea = ({ className , id , space , data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-collection-area", space === 1 && "rn-section-gapTop", space === 2 && "rn-section-gapBottom", className),
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row mb--50 align-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-md-6 col-sm-6 col-12",
                            children: data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                className: "mb--0",
                                ...data.section_title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "view-more-btn text-start text-sm-end",
                                "data-sal-delay": "150",
                                "data-sal": "slide-up",
                                "data-sal-duration": "800",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    className: "btn-transparent",
                                    path: "/collection",
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
                data?.collections && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row g-5",
                    children: data.collections.map((collection)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            "data-sal": "slide-up",
                            "data-sal-delay": "150",
                            "data-sal-duration": "800",
                            className: "col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                title: collection.title,
                                total_item: collection.total_item,
                                path: collection.slug,
                                image: collection.image,
                                thumbnails: collection.thumbnails,
                                profile_image: collection.profile_image
                            })
                        }, collection.id))
                })
            ]
        })
    });
TopCollectionArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitleType */ .K0,
        collections: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_6__/* .CollectionType */ .yl)
    })
};
TopCollectionArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopCollectionArea);


/***/ }),

/***/ 5419:
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
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_filter_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6427);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8663);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const ExploreProductArea = ({ className , space , data , id  })=>{
    const filters = [
        ...new Set((0,_utils_methods__WEBPACK_IMPORTED_MODULE_7__.flatDeep)(data?.products.map((item)=>item.categories) || []))
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
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("rn-product-area masonary-wrapper-activation", space === 1 && "rn-section-gapTop", space === 2 && "rn-section-gapBottom", className),
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row gx-5 align-items-center mb--60",
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_filter_buttons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
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
                        className: "isotope-list item-4",
                        children: products?.slice(0, 8)?.map((prod)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
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
    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
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

/***/ }),

/***/ 1558:
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
/* harmony import */ var _components_section_title_layout_01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1850);
/* harmony import */ var _components_product_layout_01__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2102);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8663);






const LiveExploreArea = ({ data , className , space , id  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-live-bidding-area", space === 1 && "ptb--70", className),
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row mb--30",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        ...data.section_title
                    })
                }),
                data?.products && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row g-5",
                    children: data.products.map((prod)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_layout_01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                overlay: true,
                                title: prod.title,
                                slug: prod.slug,
                                latestBid: prod.latestBid,
                                price: prod.price,
                                auction_date: prod.auction_date,
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
LiveExploreArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .SectionTitleType */ .K0,
        products: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ProductType */ .kv).isRequired
    })
};
LiveExploreArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LiveExploreArea);


/***/ }),

/***/ 4234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ top_bar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(8519);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
;// CONCATENATED MODULE: ./src/components/search-form/layout-03/index.jsx


const SearchForm = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "input-group",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "Search Here...",
                className: "form-control bg-color--2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "input-group-append",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                    color: "primary-alta",
                    size: "small",
                    className: "lh-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "feather-search"
                    })
                })
            })
        ]
    });
/* harmony default export */ const layout_03 = (SearchForm);

// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
// EXTERNAL MODULE: ./src/components/color-switcher/index.jsx
var color_switcher = __webpack_require__(4617);
// EXTERNAL MODULE: ./src/components/ui/burger-button/index.jsx
var burger_button = __webpack_require__(6735);
// EXTERNAL MODULE: ./src/components/search-form/layout-02/index.jsx
var layout_02 = __webpack_require__(5353);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/components/ui/offcanvas/index.js + 3 modules
var offcanvas = __webpack_require__(9857);
// EXTERNAL MODULE: ./src/components/logo/index.jsx
var components_logo = __webpack_require__(3697);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
;// CONCATENATED MODULE: ./src/components/menu/mobile-menu-02/index.jsx





const MobileMenu = ({ isOpen , onClick , menu , logo  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(offcanvas/* Offcanvas */.TB, {
        isOpen: isOpen,
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(offcanvas/* OffcanvasHeader */.Us, {
                onClick: onClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_logo/* default */.Z, {
                    logo: logo
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(offcanvas/* OffcanvasBody */.UT, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "mainmenu",
                        children: menu?.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                id: nav.id,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                                    activeClass: "active",
                                    className: "nav-link smoth-animation",
                                    href: `#${nav.path}`,
                                    to: nav.path,
                                    spy: true,
                                    smooth: true,
                                    offset: -50,
                                    duration: 500,
                                    onClick: onClick,
                                    children: nav.text
                                })
                            }, nav.id))
                    })
                })
            })
        ]
    });
MobileMenu.propTypes = {
    isOpen: (external_prop_types_default()).bool.isRequired,
    onClick: (external_prop_types_default()).func.isRequired,
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
    logo: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        src: (external_prop_types_default()).string.isRequired,
        alt: (external_prop_types_default()).string
    }))
};
/* harmony default export */ const mobile_menu_02 = (MobileMenu);

// EXTERNAL MODULE: ./src/components/user-dropdown/index.jsx
var user_dropdown = __webpack_require__(6067);
// EXTERNAL MODULE: ./src/hooks/index.js + 4 modules
var hooks = __webpack_require__(5009);
// EXTERNAL MODULE: ./src/data/general/menu-02.json
var menu_02 = __webpack_require__(6098);
;// CONCATENATED MODULE: ./src/containers/top-bar/index.jsx
/* eslint-disable no-console */ 











// Demo Data

const TopBarArea = ()=>{
    const { search , searchHandler  } = (0,hooks/* useFlyoutSearch */.Dm)();
    const { offcanvas , offcanvasHandler  } = (0,hooks/* useOffcanvas */.vI)();
    // const { authenticate, isAuthenticated } = useMoralis();
    const [isAuthenticated, setIsAuthenticated] = (0,external_react_.useState)(false);
    const [ethBalance, setEthBalance] = (0,external_react_.useState)("");
    const detectCurrentProvider = ()=>{
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            console.log("Non-ethereum browser detected. You should install Metamask");
        }
        return provider;
    };
    const onConnect = async ()=>{
        try {
            const currentProvider = detectCurrentProvider();
            if (currentProvider) {
                await currentProvider.request({
                    method: "eth_requestAccounts"
                });
                const web3 = new (external_web3_default())(currentProvider);
                const userAccount = await web3.eth.getAccounts();
                const account = userAccount[0];
                const getEthBalance = await web3.eth.getBalance(account);
                setEthBalance(getEthBalance);
                setIsAuthenticated(true);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const onDisconnect = ()=>{
        setIsAuthenticated(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "rn-top-bar-area",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "d-none d-lg-block",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_03, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "contact-area",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "rn-icon-list setting-option d-block d-lg-none",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "icon-box search-mobile-icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            "aria-label": "Click here to open search form",
                                            onClick: searchHandler,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "feather-search"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_02/* default */.Z, {
                                        isOpen: search
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "setting-option",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                        title: "Contact With Us",
                                        path: "/contact",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "feather-phone"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "setting-option",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                        title: "Message",
                                        path: "/contact",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "feather-message-circle"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "setting-option rn-icon-list notification-badge",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon-box",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                                        path: "/activity",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "feather-bell"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "badge",
                                                children: "2"
                                            })
                                        ]
                                    })
                                })
                            }),
                            !isAuthenticated && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "setting-option",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                        size: "small",
                                        color: "primary-alta",
                                        onClick: onConnect,
                                        children: "Wallet connect"
                                    })
                                })
                            }),
                            isAuthenticated && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "setting-option rn-icon-list user-account",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(user_dropdown/* default */.Z, {
                                    onDisconnect: onDisconnect,
                                    ethBalance: ethBalance
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "setting-option mobile-menu-bar ml--5 d-block d-lg-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hamberger icon-box",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(burger_button/* default */.Z, {
                                        onClick: offcanvasHandler
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "my_switcher",
                                className: "my_switcher setting-option",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(color_switcher/* default */.Z, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(mobile_menu_02, {
                menu: menu_02,
                isOpen: offcanvas,
                onClick: offcanvasHandler,
                logo: [
                    {
                        src: "/images/logo/logo-white.png"
                    },
                    {
                        src: "/images/logo/logo-dark.png"
                    }
                ]
            })
        ]
    });
};
/* harmony default export */ const top_bar = (TopBarArea);


/***/ }),

/***/ 5240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer_02)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/logo/index.jsx
var logo = __webpack_require__(3697);
;// CONCATENATED MODULE: ./src/data/general/footer-02.json
const footer_02_namespaceObject = JSON.parse('{"j":[{"src":"/images/logo/logo-white.png","alt":"logo"}],"M":"2022. All rights reserved by <a href=\'https://themeforest.net/user/rainbow-themes/portfolio\' target=\'_blank\'>Rainbow-Themes.</a>"}');
;// CONCATENATED MODULE: ./src/layouts/footer/footer-02/index.jsx




// Demo data

const Footer = ({ className  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-footer-area footer-for-left-sticky-header", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-12",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "inner text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                                logo: footer_02_namespaceObject.j
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "description mt--30",
                                dangerouslySetInnerHTML: {
                                    __html: footer_02_namespaceObject.M
                                }
                            })
                        ]
                    })
                })
            })
        })
    });
Footer.propTypes = {
    className: (external_prop_types_default()).string
};
/* harmony default export */ const footer_02 = (Footer);


/***/ }),

/***/ 5802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_02)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/logo/index.jsx
var logo = __webpack_require__(3697);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
;// CONCATENATED MODULE: ./src/components/menu/side-menu/index.jsx



const SideMenu = ({ menu  })=>/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "mainmenu-nav",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "mainmenu list-group",
            children: menu?.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_.Link, {
                        activeClass: "active",
                        className: "nav-link smoth-animation",
                        href: `#${nav.path}`,
                        to: nav.path,
                        spy: true,
                        smooth: true,
                        offset: -50,
                        duration: 500,
                        children: [
                            nav?.icon && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: nav.icon
                            }),
                            nav.text
                        ]
                    })
                }, nav.id))
        })
    });
SideMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const side_menu = (SideMenu);

// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
;// CONCATENATED MODULE: ./src/components/menu/help-menu/index.jsx



const HelpMenu = ({ menu  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "help-center-area mainmenu-nav mt--30",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "mainmenu",
            children: menu?.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                        className: "nav-link",
                        path: nav.path,
                        children: [
                            nav?.icon && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: nav.icon
                            }),
                            nav.text
                        ]
                    })
                }, nav.id))
        })
    });
HelpMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const help_menu = (HelpMenu);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/components/author-profile/index.jsx




const AuthorProfile = ({ name , image , balance  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "authore-profile",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "thumbnail",
                children: image?.src && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: image.src,
                    alt: image?.alt || name,
                    width: 60,
                    height: 60
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "au-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "name",
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "blc",
                        children: [
                            "Balance:",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "value",
                                children: balance
                            })
                        ]
                    })
                ]
            })
        ]
    });
AuthorProfile.propTypes = {
    name: (external_prop_types_default()).string.isRequired,
    image: types/* ImageType.isRequired */.__.isRequired,
    balance: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const author_profile = (AuthorProfile);

;// CONCATENATED MODULE: ./src/data/general/header-02.json
const header_02_namespaceObject = JSON.parse('{"id":"header-data-2","logo":[{"src":"/images/logo/logo-white.png"},{"src":"/images/logo/logo-dark.png"}],"author":{"name":"Mark Jordan","image":{"src":"/images/client/testimonial-1.jpg"},"balance":"12ETH"}}');
// EXTERNAL MODULE: ./src/data/general/menu-02.json
var menu_02 = __webpack_require__(6098);
;// CONCATENATED MODULE: ./src/data/general/menu-03.json
const menu_03_namespaceObject = JSON.parse('[{"id":1,"text":"Settings","path":"#!","icon":"feather-settings"},{"id":2,"text":"Help Center","path":"/support","icon":"feather-activity"}]');
;// CONCATENATED MODULE: ./src/layouts/header/header-02/index.jsx





// Demo Data



const Header = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "d-none d-lg-block",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header-area left-header-style d-flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                    logo: header_02_namespaceObject.logo
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sidebar-nav-wrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(side_menu, {
                            menu: menu_02
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(help_menu, {
                            menu: menu_03_namespaceObject
                        })
                    ]
                }),
                header_02_namespaceObject?.author && /*#__PURE__*/ jsx_runtime_.jsx(author_profile, {
                    name: header_02_namespaceObject.author.name,
                    image: header_02_namespaceObject.author.image,
                    balance: header_02_namespaceObject.author.balance
                })
            ]
        })
    });
/* harmony default export */ const header_02 = (Header);


/***/ }),

/***/ 6098:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"text":"Home","path":"list-item-1","icon":"feather-home"},{"id":2,"text":"Live Auction","path":"list-item-2","icon":"feather-heart"},{"id":3,"text":"Explore Product","path":"list-item-3","icon":"feather-trending-up"},{"id":4,"text":"Newest Item","path":"list-item-4","icon":"feather-trending-up"}]');

/***/ })

};
;