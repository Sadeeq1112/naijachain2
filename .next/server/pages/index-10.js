"use strict";
(() => {
var exports = {};
exports.id = 8082;
exports.ids = [8082];
exports.modules = {

/***/ 153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_10)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/components/banner-ui/banner-badge.jsx





const BannerBadge = ({ className , image , title , ...rest })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("banner-badge-top", className),
        ...rest,
        children: [
            image?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "icon",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: image.src,
                    alt: image?.alt || title,
                    width: image?.width,
                    height: image?.height,
                    priority: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "subtitle",
                children: title
            })
        ]
    });
BannerBadge.propTypes = {
    className: (external_prop_types_default()).string,
    image: types/* ImageType.isRequired */.__.isRequired,
    title: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const banner_badge = (BannerBadge);

// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
;// CONCATENATED MODULE: ./src/components/banner-ui/banner-gallery.jsx





const BannerGallery = ({ className , images  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("banner-gallery-wrapper", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "banner-gallery-loop",
            children: images.map((image, index, arr)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: external_clsx_default()("banner-gallery", `banner-gallery-${index + 1}`, (index === 0 || index === arr.length - 1) && "mt--90"),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image.src,
                            alt: image?.alt || "banner",
                            width: image?.width || 240,
                            height: image?.height || 3024,
                            priority: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image.src,
                            alt: image?.alt || "banner",
                            width: image?.width || 240,
                            height: image?.height || 3024,
                            priority: true
                        })
                    ]
                }, image.src))
        })
    });
BannerGallery.propTypes = {
    className: (external_prop_types_default()).string,
    images: external_prop_types_default().arrayOf(types/* ImageType */.__)
};
/* harmony default export */ const banner_gallery = (BannerGallery);

;// CONCATENATED MODULE: ./src/containers/hero/layout-10/index.jsx







const HeroArea = ({ data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "slider-area ptb--60",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid padding-contorler-am-slide",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row d-flex align-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-12 col-xl-6 order-2 order-xl-1 padding-contorler-am-slide-right",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "banner-top-rating sal-animate",
                                children: [
                                    data?.badges?.[0] && /*#__PURE__*/ jsx_runtime_.jsx(banner_badge, {
                                        "data-sal-delay": "300",
                                        "data-sal": "slide-up",
                                        "data-sal-duration": "500",
                                        title: data.badges[0]?.title,
                                        image: {
                                            src: data.badges[0]?.image.src,
                                            width: 85,
                                            height: 14
                                        }
                                    }),
                                    data?.badges?.[1] && /*#__PURE__*/ jsx_runtime_.jsx(banner_badge, {
                                        "data-sal-delay": "500",
                                        "data-sal": "slide-up",
                                        "data-sal-duration": "500",
                                        title: data.badges[1]?.title,
                                        image: {
                                            src: data.badges[1]?.image.src,
                                            width: 17,
                                            height: 19
                                        }
                                    })
                                ]
                            }),
                            data?.headings[0]?.content && /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "title large-height theme-color",
                                "data-sal-delay": "200",
                                "data-sal": "slide-up",
                                "data-sal-duration": "800",
                                dangerouslySetInnerHTML: {
                                    __html: data.headings[0].content
                                }
                            }),
                            data?.texts?.map((text)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "slide-disc",
                                    "data-sal-delay": "300",
                                    "data-sal": "slide-up",
                                    "data-sal-duration": "800",
                                    children: text.content
                                }, text.id)),
                            data?.buttons && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "button-group",
                                children: data.buttons.map(({ content , id , ...btn }, i)=>/*#__PURE__*/ (0,external_react_.createElement)(ui_button/* default */.Z, {
                                        ...btn,
                                        "data-sal-delay": 400 + i * 100,
                                        "data-sal": "slide-up",
                                        "data-sal-duration": "800",
                                        key: id
                                    }, content))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12 col-xl-6 order-1 order-xl-2",
                        children: data?.images && /*#__PURE__*/ jsx_runtime_.jsx(banner_gallery, {
                            images: data.images
                        })
                    })
                ]
            })
        })
    });
HeroArea.propTypes = {
    data: external_prop_types_default().shape({
        badges: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            title: (external_prop_types_default()).string.isRequired,
            image: types/* ImageType.isRequired */.__.isRequired
        })),
        headings: external_prop_types_default().arrayOf(types/* HeadingType */.nQ),
        texts: external_prop_types_default().arrayOf(types/* TextType */.yG),
        images: external_prop_types_default().arrayOf(types/* ImageType */.__),
        buttons: external_prop_types_default().arrayOf(types/* ButtonType */.L$)
    })
};
/* harmony default export */ const layout_10 = (HeroArea);


/***/ }),

/***/ 4912:
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
/* harmony import */ var _containers_hero_layout_10__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(153);
/* harmony import */ var _containers_category_layout_01__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3960);
/* harmony import */ var _containers_live_explore_layout_01__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1318);
/* harmony import */ var _containers_services_layout_01__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2036);
/* harmony import */ var _containers_product_layout_04__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6377);
/* harmony import */ var _containers_top_seller_layout_01__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3123);
/* harmony import */ var _containers_explore_product_layout_01__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6038);
/* harmony import */ var _containers_video_layout_01__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4165);
/* harmony import */ var _containers_collection_layout_01__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4085);
/* harmony import */ var _containers_newsletter_layout_01__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3994);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _data_homepages_home_10_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7066);
/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2537);
/* harmony import */ var _data_sellers_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5678);
/* harmony import */ var _data_collections_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_newsletter_layout_01__WEBPACK_IMPORTED_MODULE_14__]);
_containers_newsletter_layout_01__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















// Demo Data




async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Home = ()=>{
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_15__.normalizedData)(_data_homepages_home_10_json__WEBPACK_IMPORTED_MODULE_16__?.content || []);
    const liveAuctionData = _data_products_json__WEBPACK_IMPORTED_MODULE_17__.filter((prod)=>prod?.auction_date && new Date() <= new Date(prod?.auction_date));
    const newestData = _data_products_json__WEBPACK_IMPORTED_MODULE_17__.sort((a, b)=>Number(new Date(b.published_at)) - Number(new Date(a.published_at))).slice(0, 5);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Home Ten"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_header_01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_hero_layout_10__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        data: content["hero-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_category_layout_01__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        data: content["category-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_live_explore_layout_01__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        data: {
                            ...content["live-explore-section"],
                            products: liveAuctionData
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_services_layout_01__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        data: content["service-section"]
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_explore_product_layout_01__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        data: {
                            ...content["explore-product-section"],
                            products: _data_products_json__WEBPACK_IMPORTED_MODULE_17__
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_video_layout_01__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        data: content["video-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_collection_layout_01__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        data: {
                            ...content["collection-section"],
                            collections: _data_collections_json__WEBPACK_IMPORTED_MODULE_19__.slice(0, 4)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_newsletter_layout_01__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        data: content["newsletter-section"]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer_footer_01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
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

/***/ 7066:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"home-10","content":[{"section":"hero-section","headings":[{"id":1,"content":"Discover Digital Art and <br /> Sell Your Specific NFTs."}],"texts":[{"id":1,"content":"a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded. Types of NFT data units."}],"buttons":[{"id":1,"content":"Get Started","path":"/"},{"id":2,"color":"primary-alta","content":"Create","path":"/create"}],"badges":[{"title":"8000+ Trust Customer","image":{"src":"/images/icons/rating-2.png"}},{"title":"#1 Top New theme","image":{"src":"/images/icons/trophy.png"}}],"images":[{"src":"/images/banner/banner-01.png"},{"src":"/images/banner/banner-02.png"},{"src":"/images/banner/banner-03.png"}]},{"section":"category-section","items":[{"id":1,"title":"Art","path":"/collection","icon":"feather-image"},{"id":2,"title":"Music","path":"/collection","icon":"feather-music"},{"id":3,"title":"Digital Worlds","path":"/collection","icon":"feather-map"},{"id":4,"title":"Domane Name","path":"/collection","icon":"feather-search"},{"id":5,"title":"Collectibles","path":"/collection","icon":"feather-grid"},{"id":6,"title":"Trending Cards","path":"/collection","icon":"feather-activity"}]},{"section":"service-section","section_title":{"title":"Create and sell your NFTs"},"items":[{"id":1,"title":"Set up your wallet","path":"/connect","subtitle":"Step-01","description":"Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.","images":[{"src":"/images/icons/shape-7.png"}]},{"id":2,"title":"Create your collection","path":"/collection","subtitle":"Step-02","description":"A great collection of beautiful website templates for your need. Choose the best suitable template.","images":[{"src":"/images/icons/shape-1.png"}]},{"id":3,"title":"Add your NFT\'s","path":"/connect","subtitle":"Step-03","description":"We\'ve made the template fully responsive, so it looks great on all devices: desktop, tablets and.","images":[{"src":"/images/icons/shape-5.png"}]},{"id":4,"title":"Sell Your NFT\'s","path":"/creator","subtitle":"Step-04","description":"I throw myself down among the tall grass by the stream as I lie close to the earth NFT\'s.","images":[{"src":"/images/icons/shape-6.png"}]}]},{"section":"live-explore-section","section_title":{"title":"Live Bidding"}},{"section":"newest-section","section_title":{"title":"Newest Items"}},{"section":"top-sller-section","section_title":{"title":"Top Seller in"}},{"section":"explore-product-section","section_title":{"title":"Explore Product"}},{"section":"video-section","section_title":{"title":"Meet with Nuron","subtitle":"An NFT is a digital asset that represents real-worldobjects like art, music, in-game items and videos. They are bought and sold online."},"images":[{"src":"/images/bg/bg-image-21.jpg"}],"video":{"videoId":"7e90gBu4pas"}},{"section":"collection-section","section_title":{"title":"Top Collection"}},{"section":"newsletter-section","section_title":{"title":"Join our newsletter","subtitle":"Weekly FREE UI resource stroight to your inbox"}}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,6188,2102,2537,388,491,8179,5678,3195,5908,4215,2036,3453,4085,1318,3123,6377,6038,2020], () => (__webpack_exec__(4912)));
module.exports = __webpack_exports__;

})();