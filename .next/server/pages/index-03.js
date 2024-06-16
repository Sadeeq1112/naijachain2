"use strict";
(() => {
var exports = {};
exports.id = 8281;
exports.ids = [8281];
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

/***/ 6462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hero_layout_03)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/components/portfolio/layout-02/index.jsx
var layout_02 = __webpack_require__(4886);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/components/portfolio/layout-03/index.jsx





const Portfolio = ({ title , author , path , image  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "slide-small-wrapper",
        children: [
            image?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "thumbnail thumbnail-overlay",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                    path: path,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "w-100",
                        src: image.src,
                        alt: image?.alt || "Nft_Profile",
                        width: image?.width || 513,
                        height: image?.height || 513,
                        priority: true
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "read-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "title",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                            path: path,
                            children: title
                        })
                    }),
                    author?.name && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: author.name
                    })
                ]
            })
        ]
    });
Portfolio.propTypes = {
    title: (external_prop_types_default()).string.isRequired,
    path: (external_prop_types_default()).string.isRequired,
    author: external_prop_types_default().shape({
        name: (external_prop_types_default()).string.isRequired
    }),
    image: types/* ImageType.isRequired */.__.isRequired
};
/* harmony default export */ const layout_03 = (Portfolio);

// EXTERNAL MODULE: ./src/components/ui/slider/index.jsx
var slider = __webpack_require__(8179);
;// CONCATENATED MODULE: ./src/containers/hero/layout-03/index.jsx






const SliderOptions = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    cssEase: "linear",
    adaptiveHeight: false
};
const HeroArea = ({ data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "banner-three slider-style-3 pt--70",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row g-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "wrapper",
                            children: data?.largeProducts && /*#__PURE__*/ jsx_runtime_.jsx(slider/* default */.Z, {
                                options: SliderOptions,
                                className: "slider slider-activation-banner-3",
                                children: data.largeProducts.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx(slider/* SliderItem */.w, {
                                        className: "single-slide",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_02/* default */.Z, {
                                            title: prod.title,
                                            path: prod.slug,
                                            author: {
                                                name: prod.author.name
                                            },
                                            image: prod.image
                                        })
                                    }, prod.id))
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-7",
                        children: data?.smallProducts && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row g-4",
                            children: data.smallProducts.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx(slider/* SliderItem */.w, {
                                    className: "col-lg-4 col-md-6 col-sm-6 col-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(layout_03, {
                                        title: prod.title,
                                        path: prod.slug,
                                        author: {
                                            name: prod.author.name
                                        },
                                        image: prod.image
                                    })
                                }, prod.id))
                        })
                    })
                ]
            })
        })
    });
HeroArea.propTypes = {
    data: external_prop_types_default().shape({
        largeProducts: external_prop_types_default().arrayOf(types/* FeatureProductsType */.J0),
        smallProducts: external_prop_types_default().arrayOf(types/* FeatureProductsType */.J0)
    })
};
/* harmony default export */ const hero_layout_03 = (HeroArea);


/***/ }),

/***/ 7608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3191);
/* harmony import */ var _layout_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3019);
/* harmony import */ var _layout_header_header_01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8205);
/* harmony import */ var _layout_footer_footer_01__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5728);
/* harmony import */ var _containers_hero_layout_03__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6462);
/* harmony import */ var _containers_live_explore_layout_02__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7058);
/* harmony import */ var _containers_services_layout_01__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2036);
/* harmony import */ var _containers_explore_product_layout_02__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5873);
/* harmony import */ var _containers_top_seller_layout_01__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3123);
/* harmony import */ var _containers_collection_layout_01__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4085);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_homepages_home_03_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);
/* harmony import */ var _data_sellers_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5678);
/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2537);
/* harmony import */ var _data_collections_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_explore_product_layout_02__WEBPACK_IMPORTED_MODULE_8__]);
_containers_explore_product_layout_02__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












// Demo data




async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Home02 = ()=>{
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_11__.normalizedData)(_data_homepages_home_03_json__WEBPACK_IMPORTED_MODULE_12__?.content || []);
    const liveAuctionData = _data_products_json__WEBPACK_IMPORTED_MODULE_14__.filter((prod)=>prod?.auction_date && new Date() <= new Date(prod?.auction_date)).sort((a, b)=>Number(new Date(b.published_at)) - Number(new Date(a.published_at))).slice(0, 5);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Home Three"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_header_01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_hero_layout_03__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        data: content["hero-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_live_explore_layout_02__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        data: {
                            ...content["live-explore-section"],
                            products: liveAuctionData
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_services_layout_01__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        data: content["service-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_explore_product_layout_02__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        data: {
                            ...content["explore-product-section"],
                            products: _data_products_json__WEBPACK_IMPORTED_MODULE_14__
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_top_seller_layout_01__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        data: {
                            ...content["top-sller-section"],
                            sellers: _data_sellers_json__WEBPACK_IMPORTED_MODULE_13__
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_collection_layout_01__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        data: {
                            ...content["collection-section"],
                            collections: _data_collections_json__WEBPACK_IMPORTED_MODULE_15__.slice(0, 4)
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer_footer_01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home02);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 4449:
/***/ ((module) => {

module.exports = require("react-countdown");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 18:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"home-03","content":[{"section":"hero-section","largeProducts":[{"id":1,"title":"Cubic Bazier","slug":"/collection","author":{"name":"Mark Jordan","slug":"/author"},"image":{"src":"/images/banner/banner-01.jpg"}},{"id":2,"title":"Faminho24","slug":"/collection","author":{"name":"Farik Shaikh","slug":"/author"},"image":{"src":"/images/banner/banner-02.jpg"}},{"id":3,"title":"Tzniistan","slug":"/collection","author":{"name":"John Doe","slug":"/author"},"image":{"src":"/images/banner/banner-03.jpg"}},{"id":4,"title":"Bazier","slug":"/collection","author":{"name":"Olive Yew","slug":"/author"},"image":{"src":"/images/banner/banner-04.jpg"}}],"smallProducts":[{"id":1,"title":"HasLivbe","slug":"/collection","author":{"name":"Mark Jordan","slug":"/author"},"image":{"src":"/images/banner/banner-sm-01.jpg"}},{"id":2,"title":"Ladicorn Mos","slug":"/collection","author":{"name":"Farik Shaikh","slug":"/author"},"image":{"src":"/images/banner/banner-sm-02.jpg"}},{"id":3,"title":"Twinkle","slug":"/collection","author":{"name":"John Doe","slug":"/author"},"image":{"src":"/images/banner/banner-sm-03.jpg"}},{"id":4,"title":"Monster","slug":"/collection","author":{"name":"Olive Yew","slug":"/author"},"image":{"src":"/images/banner/banner-sm-04.jpg"}},{"id":5,"title":"Labibas Had","slug":"/collection","author":{"name":"Olive Yew","slug":"/author"},"image":{"src":"/images/banner/banner-sm-05.jpg"}},{"id":6,"title":"OperaHub","slug":"/collection","author":{"name":"Ray Sin","slug":"/author"},"image":{"src":"/images/banner/banner-sm-06.jpg"}}]},{"section":"live-explore-section","section_title":{"title":"Live Bidding"}},{"section":"service-section","section_title":{"title":"Create and sell your NFTs"},"items":[{"id":1,"title":"Set up your wallet","path":"/connect","subtitle":"Step-01","description":"Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.","images":[{"src":"/images/icons/shape-7.png"}]},{"id":2,"title":"Create your collection","path":"/collection","subtitle":"Step-02","description":"A great collection of beautiful website templates for your need. Choose the best suitable template.","images":[{"src":"/images/icons/shape-1.png"}]},{"id":3,"title":"Add your NFT\'s","path":"/connect","subtitle":"Step-03","description":"We\'ve made the template fully responsive, so it looks great on all devices: desktop, tablets and.","images":[{"src":"/images/icons/shape-5.png"}]},{"id":4,"title":"Sell Your NFT\'s","path":"/creator","subtitle":"Step-04","description":"I throw myself down among the tall grass by the stream as I lie close to the earth NFT\'s.","images":[{"src":"/images/icons/shape-6.png"}]}]},{"section":"explore-product-section","section_title":{"title":"Explore Product"}},{"section":"top-sller-section","section_title":{"title":"Top Seller in"}},{"section":"newest-section","section_title":{"title":"Newest Items"}},{"section":"collection-section","section_title":{"title":"Top Collection"}}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,6188,2102,2537,388,491,8179,5678,3195,5908,4215,2036,4085,3123,6427,5873,7058,4886], () => (__webpack_exec__(7608)));
module.exports = __webpack_exports__;

})();