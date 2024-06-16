"use strict";
(() => {
var exports = {};
exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 6762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_08)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/components/ui/slider/index.jsx
var slider = __webpack_require__(8179);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
// EXTERNAL MODULE: ./src/components/ui/countdown/layout-02/index.jsx
var layout_02 = __webpack_require__(908);
// EXTERNAL MODULE: ./src/components/ui/client-avatar/index.jsx
var client_avatar = __webpack_require__(2542);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/components/modals/placebid-modal/index.jsx
var placebid_modal = __webpack_require__(3709);
;// CONCATENATED MODULE: ./src/containers/hero/layout-08/slide.jsx










const SingleSlide = ({ image , title , path , description , authors , bitCount , auction_date , award_image  })=>{
    const [showBidModal, setShowBidModal] = (0,external_react_.useState)(false);
    const handleBidModal = ()=>{
        setShowBidModal((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            image?.src && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "slider-bg",
                src: image.src,
                alt: "Slider BG",
                quality: 100,
                priority: true,
                fill: true,
                sizes: "100vw",
                style: {
                    objectFit: "cover"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "rn-banner-wrapper g-5 row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-4 col-lg-12 col-12 order-3 order-xl-1 order-sm-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                            path: path,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "title pl--30",
                                dangerouslySetInnerHTML: {
                                    __html: title
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-6 col-lg-12 col-12 order-2 order-xl-2 order-sm-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item-description",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "product-share-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "profile-share",
                                            children: [
                                                authors?.map((author)=>/*#__PURE__*/ jsx_runtime_.jsx(client_avatar/* default */.Z, {
                                                        slug: author.slug,
                                                        name: author.name,
                                                        image: author.image
                                                    }, author.name)),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                                                    className: "more-author-text",
                                                    path: path,
                                                    children: [
                                                        bitCount,
                                                        "+ Place Bit."
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(layout_02["default"], {
                                            date: auction_date
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    color: "primary-alta",
                                    className: "mt--35",
                                    onClick: handleBidModal,
                                    children: "Place a Bid"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-2 col-lg-12 col-12 order-1 order-xl-3 order-sm-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img-thumb-award d-flex justify-content-center",
                            children: award_image?.src && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: award_image.src,
                                alt: "Nft_Profile",
                                width: 130,
                                height: 130
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(placebid_modal/* default */.Z, {
                show: showBidModal,
                handleModal: handleBidModal
            })
        ]
    });
};
SingleSlide.propTypes = {
    title: (external_prop_types_default()).string,
    path: (external_prop_types_default()).string,
    description: (external_prop_types_default()).string,
    authors: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        name: (external_prop_types_default()).string,
        slug: (external_prop_types_default()).string,
        image: types/* ImageType */.__
    })),
    bitCount: (external_prop_types_default()).number,
    auction_date: (external_prop_types_default()).string,
    image: types/* ImageType */.__,
    award_image: types/* ImageType */.__
};
/* harmony default export */ const slide = (SingleSlide);

;// CONCATENATED MODULE: ./src/containers/hero/layout-08/index.jsx





const HeroArea = ({ data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "rn-banner-area",
        children: data?.banners && /*#__PURE__*/ jsx_runtime_.jsx(slider/* default */.Z, {
            options: {
                dots: true
            },
            className: "slider-activation-banner-4 game-banner-short-slick-wrapper slick-arrow-style-one rn-slick-dot-style",
            children: data.banners.map((banner)=>/*#__PURE__*/ jsx_runtime_.jsx(slider/* SliderItem */.w, {
                    className: "slider-style-7 border-radious-none pt--150 pb--190 pt_sm--70 pb_sm--70",
                    "data-black-overlay": "6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(slide, {
                        title: banner.title,
                        path: banner.path,
                        description: banner.description,
                        authors: banner.authors,
                        bitCount: banner.bitCount,
                        auction_date: banner.auction_date,
                        image: banner.image,
                        award_image: banner.award_image
                    })
                }, banner.id))
        })
    });
HeroArea.propTypes = {
    data: external_prop_types_default().shape({
        banners: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: types/* IDType */.iJ,
            title: (external_prop_types_default()).string,
            path: (external_prop_types_default()).string,
            description: (external_prop_types_default()).string,
            authors: external_prop_types_default().arrayOf(external_prop_types_default().shape({
                name: (external_prop_types_default()).string,
                slug: (external_prop_types_default()).string,
                image: types/* ImageType */.__
            })),
            bitCount: (external_prop_types_default()).number,
            auction_date: (external_prop_types_default()).string,
            image: types/* ImageType */.__,
            award_image: types/* ImageType */.__
        })).isRequired
    }).isRequired
};
/* harmony default export */ const layout_08 = (HeroArea);


/***/ }),

/***/ 5674:
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
/* harmony import */ var _layout_header_header_02__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5802);
/* harmony import */ var _layout_footer_footer_02__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5240);
/* harmony import */ var _containers_top_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4234);
/* harmony import */ var _containers_hero_layout_08__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6762);
/* harmony import */ var _containers_top_seller_layout_01__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3123);
/* harmony import */ var _containers_live_explore_layout_03__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1558);
/* harmony import */ var _containers_collection_layout_02__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5797);
/* harmony import */ var _containers_explore_product_layout_09__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5419);
/* harmony import */ var _containers_services_layout_01__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2036);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_homepages_home_08_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3002);
/* harmony import */ var _data_sellers_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5678);
/* harmony import */ var _data_products_02_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6078);
/* harmony import */ var _data_collections_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_explore_product_layout_09__WEBPACK_IMPORTED_MODULE_10__]);
_containers_explore_product_layout_09__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













// Demo data




async function getStaticProps() {
    return {
        props: {
            className: "home-sticky-pin sidebar-header position-relative"
        }
    };
}
const Home = ()=>{
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_12__.normalizedData)(_data_homepages_home_08_json__WEBPACK_IMPORTED_MODULE_13__?.content || []);
    const liveAuctionData = _data_products_02_json__WEBPACK_IMPORTED_MODULE_15__.filter((prod)=>prod?.auction_date && new Date() <= new Date(prod?.auction_date)).sort((a, b)=>Number(new Date(b.published_at)) - Number(new Date(a.published_at))).slice(0, 4);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Home Eight"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_header_02__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main-content",
                className: "rn-nft-mid-wrapper nft-left-sidebar-nav pr--40 pr_sm--15",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "list-item-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_top_bar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_hero_layout_08__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                data: content["hero-section"]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_top_seller_layout_01__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        space: 3,
                        data: {
                            ...content["top-sller-section"],
                            sellers: _data_sellers_json__WEBPACK_IMPORTED_MODULE_14__
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_live_explore_layout_03__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        id: "list-item-2",
                        data: {
                            ...content["live-explore-section"],
                            products: liveAuctionData
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_collection_layout_02__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        space: 2,
                        data: {
                            ...content["collection-section"],
                            collections: _data_collections_json__WEBPACK_IMPORTED_MODULE_16__.slice(0, 4)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_explore_product_layout_09__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        id: "list-item-3",
                        space: 2,
                        data: {
                            ...content["explore-product-section"],
                            products: _data_products_02_json__WEBPACK_IMPORTED_MODULE_15__
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_services_layout_01__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        id: "list-item-4",
                        space: 2,
                        data: content["service-section"]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer_footer_02__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "pr--40"
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

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

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

/***/ 3002:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"home-08","content":[{"section":"hero-section","banners":[{"id":1,"title":"Discover <br> Rare Digital art &amp; collect <span>NFT\'s</span>","path":"/connect","description":"The term fungible means something that can be replaced by something similar. So, by the name Non Fungible Tokens, we can easily understand.","authors":[{"name":"Mark Jordan","slug":"/author","image":{"src":"/images/client/client-2.png"}},{"name":"Farik Shaikh","slug":"/author","image":{"src":"/images/client/client-3.png"}},{"name":"John Doe","slug":"/author","image":{"src":"/images/client/client-5.png"}}],"bitCount":15,"auction_date":"2022-10-10","image":{"src":"/images/bg/bg-image-23.jpg"},"award_image":{"src":"/images/logo/award-logo.png"}},{"id":2,"title":"Discover <br> Rare Digital art &amp; collect <span>NFT\'s</span>","path":"/connect","description":"The term fungible means something that can be replaced by something similar. So, by the name Non Fungible Tokens, we can easily understand.","authors":[{"name":"Mark Jordan","slug":"/author","image":{"src":"/images/client/client-2.png"}},{"name":"Farik Shaikh","slug":"/author","image":{"src":"/images/client/client-3.png"}},{"name":"John Doe","slug":"/author","image":{"src":"/images/client/client-5.png"}}],"bitCount":15,"auction_date":"2022-10-10","image":{"src":"/images/bg/bg-image-22.jpg"},"award_image":{"src":"/images/logo/award-logo.png"}},{"id":3,"title":"Discover <br> Rare Digital art &amp; collect <span>NFT\'s</span>","path":"/connect","description":"The term fungible means something that can be replaced by something similar. So, by the name Non Fungible Tokens, we can easily understand.","authors":[{"name":"Mark Jordan","slug":"/author","image":{"src":"/images/client/client-2.png"}},{"name":"Farik Shaikh","slug":"/author","image":{"src":"/images/client/client-3.png"}},{"name":"John Doe","slug":"/author","image":{"src":"/images/client/client-5.png"}}],"bitCount":15,"auction_date":"2022-10-10","image":{"src":"/images/bg/bg-image-21.jpg"},"award_image":{"src":"/images/logo/award-logo.png"}}]},{"section":"top-sller-section","section_title":{"title":"Top Seller in"}},{"section":"live-explore-section","section_title":{"title":"Live Bidding"}},{"section":"collection-section","section_title":{"title":"Top Collection"}},{"section":"explore-product-section","section_title":{"title":"Explore Product"}},{"section":"service-section","section_title":{"title":"Make Easyer"},"items":[{"id":1,"title":"Set up your wallet","path":"/connect","subtitle":"Step-01","description":"Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.","images":[{"src":"/images/icons/shape-7.png"}]},{"id":2,"title":"Create your collection","path":"/collection","subtitle":"Step-02","description":"A great collection of beautiful website templates for your need. Choose the best suitable template.","images":[{"src":"/images/icons/shape-1.png"}]},{"id":3,"title":"Add your NFT\'s","path":"/connect","subtitle":"Step-03","description":"We\'ve made the template fully responsive, so it looks great on all devices: desktop, tablets and.","images":[{"src":"/images/icons/shape-5.png"}]},{"id":4,"title":"Sell Your NFT\'s","path":"/creator","subtitle":"Step-04","description":"I throw myself down among the tall grass by the stream as I lie close to the earth NFT\'s.","images":[{"src":"/images/icons/shape-6.png"}]}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6188,2102,388,491,8179,5678,3195,5908,4215,2036,3123,6078,6427,6408,908], () => (__webpack_exec__(5674)));
module.exports = __webpack_exports__;

})();