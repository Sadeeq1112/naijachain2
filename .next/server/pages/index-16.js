"use strict";
(() => {
var exports = {};
exports.id = 4337;
exports.ids = [4337];
exports.modules = {

/***/ 6003:
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
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3124);
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3715);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4643);
/* harmony import */ var _components_funfact_layout_02__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8610);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8663);









const HeroArea = ({ data: { headings , texts , buttons , image , items , clients  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "banner-area banner-16 pt--100 pb--120 pt_md--70 pt_sm--30 pb_md--90 pb_sm--50 bg-color--2",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6 order-lg-1 order-md-2 order-sm-2 order-2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "left-banner-16-wrapepr mt_md--100 mt_sm--100",
                            children: [
                                headings?.[0]?.content && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "title",
                                    dangerouslySetInnerHTML: {
                                        __html: headings[0].content
                                    }
                                }),
                                texts?.[0]?.content && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "disc",
                                    dangerouslySetInnerHTML: {
                                        __html: texts[0].content
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "button-group d-flex flex-wrap",
                                    children: buttons?.map(({ content , id , ...btn }, i)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_ui_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            ...btn,
                                            key: id,
                                            className: i !== buttons.length - 1 ? "mr--30" : ""
                                        }, content))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "odometer-area-slide ",
                                    children: items?.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_funfact_layout_02__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            "data-sal-delay": 400 + i * 200,
                                            "data-sal": "slide-left",
                                            "data-sal-duration": "800",
                                            title: item.title,
                                            counter: item.counter
                                        }, item.id))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6 order-lg-2 order-md-1 order-sm-1 order-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3___default()), {
                            tiltReverse: true,
                            tiltMaxAngleX: 3,
                            tiltMaxAngleY: 3,
                            perspective: 500,
                            gyroscope: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tilt-image-banner-16",
                                children: [
                                    image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        className: "tilt",
                                        src: image.src,
                                        alt: image?.alt || "Nft-profile",
                                        width: 697,
                                        height: 557,
                                        priority: true
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "joined-people-wrapper",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "product-share-wrapper",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "profile-share",
                                                    children: [
                                                        clients?.map((client)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                path: client.path,
                                                                className: "avatar",
                                                                "data-tooltip": client.name,
                                                                children: client?.image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                    className: "large",
                                                                    src: client.image.src,
                                                                    alt: client.image?.alt || "Nft_Profile",
                                                                    width: 39,
                                                                    height: 39,
                                                                    priority: true
                                                                })
                                                            }, client.id)),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            className: "more-author-text",
                                                            path: "/author",
                                                            tabIndex: "0",
                                                            children: "More Then 25K"
                                                        })
                                                    ]
                                                })
                                            }),
                                            texts?.[1]?.content && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "disc",
                                                dangerouslySetInnerHTML: {
                                                    __html: texts[1].content
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
HeroArea.propTypes = {
    data: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        headings: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_8__/* .HeadingType */ .nQ),
        texts: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_8__/* .TextType */ .yG),
        buttons: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_8__/* .ButtonType */ .L$),
        items: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_8__/* .ItemType */ .qG),
        image: _utils_types__WEBPACK_IMPORTED_MODULE_8__/* .ImageType */ .__,
        clients: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
            id: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
                (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
                (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
            ]),
            name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
            path: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
            image: _utils_types__WEBPACK_IMPORTED_MODULE_8__/* .ImageType */ .__
        }))
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroArea);


/***/ }),

/***/ 7084:
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
/* harmony import */ var _containers_hero_layout_16__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6003);
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
/* harmony import */ var _data_homepages_home_16_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7433);
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
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_15__.normalizedData)(_data_homepages_home_16_json__WEBPACK_IMPORTED_MODULE_16__?.content || []);
    const liveAuctionData = _data_products_json__WEBPACK_IMPORTED_MODULE_17__.filter((prod)=>prod?.auction_date && new Date() <= new Date(prod?.auction_date));
    const newestData = _data_products_json__WEBPACK_IMPORTED_MODULE_17__.sort((a, b)=>Number(new Date(b.published_at)) - Number(new Date(a.published_at))).slice(0, 5);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Home Sixteen"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_header_01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_hero_layout_16__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        data: content["hero-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_collection_layout_01__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        data: {
                            ...content["collection-section"],
                            collections: _data_collections_json__WEBPACK_IMPORTED_MODULE_19__.slice(0, 4)
                        }
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_explore_product_layout_01__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

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

/***/ 7433:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"home-15","content":[{"section":"hero-section","headings":[{"id":1,"content":"Buy and sell <br /> digital art, <br /> <span>NFT\'s Collection</span>"}],"texts":[{"id":1,"content":"There is enough digital artworks available online to help you put together crypto currency website."},{"id":2,"content":"Million of people are sell there NFTs in Nuron marketplaces. Create & Sell Your NFT\'s."}],"buttons":[{"id":1,"content":"Explore","path":"/collection"},{"id":2,"color":"primary-alta","content":"Create Nft","path":"/create"}],"image":{"src":"/images/banner/banner-06.png"},"items":[{"id":1,"title":"Collectibles","counter":3091},{"id":2,"title":"Auctions","counter":1020},{"id":3,"title":"NFT Artist","counter":5329}],"clients":[{"id":1,"name":"Mark JOrdan","path":"/author","image":{"src":"/images/client/client-2.png"}},{"id":2,"name":"Mark","path":"/author","image":{"src":"/images/client/client-3.png"}},{"id":3,"name":"Jordan","path":"/author","image":{"src":"/images/client/client-5.png"}},{"id":4,"name":"Mark JOrdan","path":"/author","image":{"src":"/images/client/client-2.png"}}]},{"section":"collection-section","section_title":{"title":"Top Collection"}},{"section":"category-section","items":[{"id":1,"title":"Art","path":"/collection","icon":"feather-image"},{"id":2,"title":"Music","path":"/collection","icon":"feather-music"},{"id":3,"title":"Digital Worlds","path":"/collection","icon":"feather-map"},{"id":4,"title":"Domane Name","path":"/collection","icon":"feather-search"},{"id":5,"title":"Collectibles","path":"/collection","icon":"feather-grid"},{"id":6,"title":"Trending Cards","path":"/collection","icon":"feather-activity"}]},{"section":"live-explore-section","section_title":{"title":"Live Bidding"}},{"section":"service-section","section_title":{"title":"Create and sell your NFTs"},"items":[{"id":1,"title":"Set up your wallet","path":"/connect","subtitle":"Step-01","description":"Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.","images":[{"src":"/images/icons/shape-7.png"}]},{"id":2,"title":"Create your collection","path":"/collection","subtitle":"Step-02","description":"A great collection of beautiful website templates for your need. Choose the best suitable template.","images":[{"src":"/images/icons/shape-1.png"}]},{"id":3,"title":"Add your NFT\'s","path":"/connect","subtitle":"Step-03","description":"We\'ve made the template fully responsive, so it looks great on all devices: desktop, tablets and.","images":[{"src":"/images/icons/shape-5.png"}]},{"id":4,"title":"Sell Your NFT\'s","path":"/creator","subtitle":"Step-04","description":"I throw myself down among the tall grass by the stream as I lie close to the earth NFT\'s.","images":[{"src":"/images/icons/shape-6.png"}]}]},{"section":"newsletter-section","section_title":{"title":"Join our newsletter","subtitle":"Weekly FREE UI resource stroight to your inbox"}},{"section":"newest-section","section_title":{"title":"Newest Items"}},{"section":"top-sller-section","section_title":{"title":"Top Seller in"}},{"section":"explore-product-section","section_title":{"title":"Explore Product"}},{"section":"video-section","section_title":{"title":"Meet with Nuron","subtitle":"An NFT is a digital asset that represents real-worldobjects like art, music, in-game items and videos. They are bought and sold online."},"images":[{"src":"/images/bg/bg-image-21.jpg"}],"video":{"videoId":"7e90gBu4pas"}},{"section":"brand-section","items":[{"id":1,"image":{"src":"/images/brand/brand-01.png","alt":"nuron-brand_nft"}},{"id":2,"image":{"src":"/images/brand/brand-03.png","alt":"nuron-brand_nft"}},{"id":3,"image":{"src":"/images/brand/brand-06.png","alt":"nuron-brand_nft"}},{"id":4,"image":{"src":"/images/brand/brand-07.png","alt":"nuron-brand_nft"}},{"id":5,"image":{"src":"/images/brand/brand-04.png","alt":"nuron-brand_nft"}},{"id":6,"image":{"src":"/images/brand/brand-02.png","alt":"nuron-brand_nft"}},{"id":7,"image":{"src":"/images/brand/brand-01.png","alt":"nuron-brand_nft"}},{"id":8,"image":{"src":"/images/brand/brand-03.png","alt":"nuron-brand_nft"}}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,6188,2102,2537,388,491,8179,5678,3195,5908,4215,2036,3453,4085,1318,3123,6377,6038,2020,8610], () => (__webpack_exec__(7084)));
module.exports = __webpack_exports__;

})();