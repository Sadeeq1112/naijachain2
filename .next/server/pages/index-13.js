"use strict";
(() => {
var exports = {};
exports.id = 1372;
exports.ids = [1372];
exports.modules = {

/***/ 2022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_13)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-parallax-tilt"
var external_react_parallax_tilt_ = __webpack_require__(3124);
var external_react_parallax_tilt_default = /*#__PURE__*/__webpack_require__.n(external_react_parallax_tilt_);
// EXTERNAL MODULE: ./src/components/product-details/place-bet.jsx
var place_bet = __webpack_require__(2313);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/product-details/product-property.jsx



const ProductProperty = ({ type , value , className  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("pd-property-inner", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "color-body type",
                children: type
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "color-white value",
                children: value
            })
        ]
    });
ProductProperty.propTypes = {
    type: (external_prop_types_default()).string.isRequired,
    value: (external_prop_types_default()).string.isRequired,
    className: (external_prop_types_default()).string
};
/* harmony default export */ const product_property = (ProductProperty);

// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/containers/hero/layout-13/index.jsx







const HeroArea = ({ data: { image , headings , highest_bid , auction_date , categories , properties  }  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "banner-area banner_xii with-down-shadow bg_image",
        style: {
            backgroundImage: `url("/images/bg/bg-image-24.jpg")`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row g-5 d-flex align-items-center flex-wrap",
                children: [
                    image?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xxl-6 col-xl-6 col-lg-12 col-md-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_parallax_tilt_default()), {
                            tiltReverse: true,
                            tiltMaxAngleX: 3,
                            tiltMaxAngleY: 3,
                            perspective: 500,
                            gyroscope: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "left-thumbnail-image",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: image.src,
                                    alt: image?.alt || "banner",
                                    width: 886,
                                    height: 886,
                                    priority: true
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-xxl-5 col-xl-6 col-lg-12 col-md-12",
                        children: [
                            headings?.[0]?.content && /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "title mb--30",
                                children: headings[0].content
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(place_bet/* default */.Z, {
                                highest_bid: highest_bid,
                                auction_date: auction_date,
                                className: "into-banner mt_md--30 mt_sm--30",
                                btnColor: "primary"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "rn-pd-sm-property-wrapper into-banner",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "pd-property-title",
                                                children: "Catagory"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "catagory-wrapper",
                                                children: categories?.map((cat)=>/*#__PURE__*/ jsx_runtime_.jsx(product_property, {
                                                        type: cat.type,
                                                        value: cat.value
                                                    }, cat.id))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "rn-pd-sm-property-wrapper into-banner ml--30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "pd-property-title",
                                                children: "Property"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "property-wrapper",
                                                children: properties?.map((prop)=>/*#__PURE__*/ jsx_runtime_.jsx(product_property, {
                                                        type: prop.type,
                                                        value: prop.value
                                                    }, prop.id))
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
HeroArea.propTypes = {
    data: external_prop_types_default().shape({
        image: types/* ImageType.isRequired */.__.isRequired,
        headings: external_prop_types_default().arrayOf(types/* HeadingType */.nQ),
        highest_bid: external_prop_types_default().shape({
            amount: (external_prop_types_default()).string,
            bidder: external_prop_types_default().shape({
                name: (external_prop_types_default()).string,
                image: types/* ImageType */.__,
                slug: (external_prop_types_default()).string
            })
        }),
        auction_date: (external_prop_types_default()).string,
        properties: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: types/* IDType */.iJ,
            type: (external_prop_types_default()).string,
            value: (external_prop_types_default()).string
        })),
        categories: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: types/* IDType */.iJ,
            type: (external_prop_types_default()).string,
            value: (external_prop_types_default()).string
        }))
    })
};
/* harmony default export */ const layout_13 = (HeroArea);


/***/ }),

/***/ 9369:
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
/* harmony import */ var _containers_hero_layout_13__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2022);
/* harmony import */ var _containers_category_layout_01__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3960);
/* harmony import */ var _containers_live_explore_layout_01__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1318);
/* harmony import */ var _containers_services_layout_01__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2036);
/* harmony import */ var _containers_product_layout_04__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6377);
/* harmony import */ var _containers_top_seller_layout_01__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3123);
/* harmony import */ var _containers_explore_product_layout_10__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9477);
/* harmony import */ var _containers_video_layout_01__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4165);
/* harmony import */ var _containers_collection_layout_01__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4085);
/* harmony import */ var _containers_newsletter_layout_01__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3994);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _data_homepages_home_13_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8552);
/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2537);
/* harmony import */ var _data_sellers_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5678);
/* harmony import */ var _data_collections_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_newsletter_layout_01__WEBPACK_IMPORTED_MODULE_14__]);
_containers_newsletter_layout_01__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















// Demo Data




async function getStaticProps() {
    return {
        props: {
            className: "template-color-1 nft-body-connect"
        }
    };
}
const Home = ()=>{
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_15__.normalizedData)(_data_homepages_home_13_json__WEBPACK_IMPORTED_MODULE_16__?.content || []);
    const liveAuctionData = _data_products_json__WEBPACK_IMPORTED_MODULE_17__.filter((prod)=>prod?.auction_date && new Date() <= new Date(prod?.auction_date));
    const newestData = _data_products_json__WEBPACK_IMPORTED_MODULE_17__.sort((a, b)=>Number(new Date(b.published_at)) - Number(new Date(a.published_at))).slice(0, 5);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Home Thirteen"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_header_01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_hero_layout_13__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        data: content["hero-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_live_explore_layout_01__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        data: {
                            ...content["live-explore-section"],
                            products: liveAuctionData
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_category_layout_01__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        data: content["category-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_collection_layout_01__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        data: {
                            ...content["collection-section"],
                            collections: _data_collections_json__WEBPACK_IMPORTED_MODULE_19__.slice(0, 4)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_services_layout_01__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        data: content["service-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_newsletter_layout_01__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        data: content["newsletter-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_product_layout_04__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        data: {
                            ...content["newest-section"],
                            products: newestData
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_top_seller_layout_01__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        data: {
                            ...content["top-sller-section"],
                            sellers: _data_sellers_json__WEBPACK_IMPORTED_MODULE_18__
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_explore_product_layout_10__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        data: {
                            ...content["explore-product-section"],
                            products: _data_products_json__WEBPACK_IMPORTED_MODULE_17__,
                            placeBid: true
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_video_layout_01__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        data: content["video-section"]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer_footer_01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                data: content["brand-section"],
                space: 3
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 3124:
/***/ ((module) => {

module.exports = require("react-parallax-tilt");

/***/ }),

/***/ 4095:
/***/ ((module) => {

module.exports = require("react-portal");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("react-range");

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

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 8552:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"home-13","content":[{"section":"hero-section","image":{"src":"/images/banner/banner-05.jpg"},"headings":[{"content":"Ocean Hero Sell For All NFT\'s Artist."}],"auction_date":"2024-10-08","highest_bid":{"amount":"0.115wETH","bidder":{"name":"Atif aslam","slug":"/author","image":{"src":"/images/client/client-7.png"}}},"properties":[{"id":1,"type":"HYPE TYPE","value":"CALM AF"},{"id":2,"type":"BASTARDNESS","value":"C00LIO BASTARD"}],"categories":[{"id":1,"type":"ZARY","value":"APP"},{"id":2,"type":"SOMALIAN","value":"TRIBUTE"},{"id":3,"type":"TUNA","value":"PIPE"}]},{"section":"live-explore-section","section_title":{"title":"Live Bidding"}},{"section":"category-section","items":[{"id":1,"title":"Art","path":"/collection","icon":"feather-image"},{"id":2,"title":"Music","path":"/collection","icon":"feather-music"},{"id":3,"title":"Digital Worlds","path":"/collection","icon":"feather-map"},{"id":4,"title":"Domane Name","path":"/collection","icon":"feather-search"},{"id":5,"title":"Collectibles","path":"/collection","icon":"feather-grid"},{"id":6,"title":"Trending Cards","path":"/collection","icon":"feather-activity"}]},{"section":"collection-section","section_title":{"title":"Top Collection"}},{"section":"service-section","section_title":{"title":"Create and sell your NFTs"},"items":[{"id":1,"title":"Set up your wallet","path":"/connect","subtitle":"Step-01","description":"Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.","images":[{"src":"/images/icons/shape-7.png"}]},{"id":2,"title":"Create your collection","path":"/collection","subtitle":"Step-02","description":"A great collection of beautiful website templates for your need. Choose the best suitable template.","images":[{"src":"/images/icons/shape-1.png"}]},{"id":3,"title":"Add your NFT\'s","path":"/connect","subtitle":"Step-03","description":"We\'ve made the template fully responsive, so it looks great on all devices: desktop, tablets and.","images":[{"src":"/images/icons/shape-5.png"}]},{"id":4,"title":"Sell Your NFT\'s","path":"/creator","subtitle":"Step-04","description":"I throw myself down among the tall grass by the stream as I lie close to the earth NFT\'s.","images":[{"src":"/images/icons/shape-6.png"}]}]},{"section":"newsletter-section","section_title":{"title":"Join our newsletter","subtitle":"Weekly FREE UI resource stroight to your inbox"}},{"section":"newest-section","section_title":{"title":"Newest Items"}},{"section":"top-sller-section","section_title":{"title":"Top Seller in"}},{"section":"explore-product-section","section_title":{"title":"Find Your Non Replaceable Token"}},{"section":"video-section","section_title":{"title":"Meet with Nuron","subtitle":"An NFT is a digital asset that represents real-worldobjects like art, music, in-game items and videos. They are bought and sold online."},"images":[{"src":"/images/bg/bg-image-21.jpg"}],"video":{"videoId":"7e90gBu4pas"}},{"section":"brand-section","items":[{"id":1,"image":{"src":"/images/brand/brand-01.png","alt":"nuron-brand_nft"}},{"id":2,"image":{"src":"/images/brand/brand-03.png","alt":"nuron-brand_nft"}},{"id":3,"image":{"src":"/images/brand/brand-06.png","alt":"nuron-brand_nft"}},{"id":4,"image":{"src":"/images/brand/brand-07.png","alt":"nuron-brand_nft"}},{"id":5,"image":{"src":"/images/brand/brand-04.png","alt":"nuron-brand_nft"}},{"id":6,"image":{"src":"/images/brand/brand-02.png","alt":"nuron-brand_nft"}},{"id":7,"image":{"src":"/images/brand/brand-01.png","alt":"nuron-brand_nft"}},{"id":8,"image":{"src":"/images/brand/brand-03.png","alt":"nuron-brand_nft"}}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,6188,2102,2537,388,491,8179,5678,3195,5908,4215,2036,3453,4085,1318,3123,6377,5116,2020,9477,2313], () => (__webpack_exec__(9369)));
module.exports = __webpack_exports__;

})();