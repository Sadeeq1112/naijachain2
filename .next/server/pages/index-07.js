"use strict";
(() => {
var exports = {};
exports.id = 144;
exports.ids = [144];
exports.modules = {

/***/ 9075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_client_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2542);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4643);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8663);






const HeroArea = ({ data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "rn-banner-area",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "slider-style-7",
            "data-black-overlay": "8",
            children: [
                data?.image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: "slider-bg",
                    src: data.image.src,
                    alt: "Slider BG",
                    quality: 100,
                    priority: true,
                    fill: true,
                    sizes: "100vw",
                    style: {
                        objectFit: "cover"
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rn-banner-wrapper row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-5 col-lg-12 col-12 order-3 order-xl-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item-description",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: data.description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "product-share-wrapper",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "profile-share",
                                            children: [
                                                data?.authors?.map((author)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_client_avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        slug: author.slug,
                                                        name: author.name,
                                                        image: author.image
                                                    }, author.name)),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    className: "more-author-text",
                                                    path: "/collection",
                                                    children: [
                                                        data.bitCount,
                                                        "+ Place Bit."
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-4 col-lg-12 col-12 order-2 order-xl-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "title",
                                dangerouslySetInnerHTML: {
                                    __html: data.title
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-3 col-lg-12 col-12 order-1 order-xl-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "img-thumb-award",
                                children: data?.award_image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: data.award_image.src,
                                    alt: "Nft_Profile",
                                    width: 130,
                                    height: 130
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
HeroArea.propTypes = {
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        award_image: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ImageType */ .__,
        image: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ImageType.isRequired */ .__.isRequired,
        authors: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
            name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
            slug: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
            image: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ImageType.isRequired */ .__.isRequired
        })),
        bitCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroArea);


/***/ }),

/***/ 6792:
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
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(682);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8663);






const ServiceArea = ({ className , id , space , data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-service-area", space === 1 && "rn-section-gapTop", space === 2 && "pb--70", className),
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 mb--50",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            ...data.section_title
                        })
                    })
                }),
                data?.items && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row g-5",
                    children: data.items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_service__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                title: item.title,
                                subtitle: item.subtitle,
                                path: item.path,
                                description: item.description,
                                image: item.images[0]
                            })
                        }, item.id))
                })
            ]
        })
    });
ServiceArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .SectionTitleType */ .K0,
        items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ItemType */ .qG)
    })
};
ServiceArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceArea);


/***/ }),

/***/ 8735:
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
/* harmony import */ var _containers_hero_layout_07__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9075);
/* harmony import */ var _containers_live_explore_layout_03__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1558);
/* harmony import */ var _containers_collection_layout_02__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5797);
/* harmony import */ var _containers_explore_product_layout_09__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5419);
/* harmony import */ var _containers_services_layout_02__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6792);
/* harmony import */ var _containers_notification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9821);
/* harmony import */ var _containers_creator_layout_02__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6099);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _data_homepages_home_07_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2972);
/* harmony import */ var _data_sellers_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5678);
/* harmony import */ var _data_products_02_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6078);
/* harmony import */ var _data_collections_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5908);
/* harmony import */ var _data_notifications_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_explore_product_layout_09__WEBPACK_IMPORTED_MODULE_9__]);
_containers_explore_product_layout_09__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














// Demo data





async function getStaticProps() {
    return {
        props: {
            className: "home-sticky-pin sidebar-header position-relative"
        }
    };
}
const Home = ()=>{
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_13__.normalizedData)(_data_homepages_home_07_json__WEBPACK_IMPORTED_MODULE_14__?.content || []);
    const liveAuctionData = _data_products_02_json__WEBPACK_IMPORTED_MODULE_16__.filter((prod)=>prod?.auction_date && new Date() <= new Date(prod?.auction_date)).sort((a, b)=>Number(new Date(b.published_at)) - Number(new Date(a.published_at))).slice(0, 4);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Home Seven"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_header_02__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main-content",
                className: "rn-nft-mid-wrapper",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "list-item-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_top_bar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_hero_layout_07__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                data: content["hero-section"]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_live_explore_layout_03__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        id: "list-item-2",
                        data: {
                            ...content["live-explore-section"],
                            products: liveAuctionData
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_collection_layout_02__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        space: 2,
                        data: {
                            ...content["collection-section"],
                            collections: _data_collections_json__WEBPACK_IMPORTED_MODULE_17__.slice(0, 4)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_explore_product_layout_09__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        id: "list-item-3",
                        space: 2,
                        data: {
                            ...content["explore-product-section"],
                            products: _data_products_02_json__WEBPACK_IMPORTED_MODULE_16__
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_services_layout_02__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        data: content["service-section"],
                        space: 2,
                        id: "list-item-4"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "header-right-fixed",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_notification__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        data: {
                            notifications: _data_notifications_json__WEBPACK_IMPORTED_MODULE_18__
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_creator_layout_02__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        data: {
                            creators: _data_sellers_json__WEBPACK_IMPORTED_MODULE_15__
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer_footer_02__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
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

/***/ 2972:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"home-07","content":[{"section":"hero-section","title":"Discover <br/> Rare Digital art &amp; collect <span>NFT\'s</span>","description":"The term fungible means something that can be replaced by something similar. So, by the name Non Fungible Tokens, we can easily understand.","award_image":{"src":"/images/logo/award-logo.png"},"image":{"src":"/images/bg/bg-image-15.jpg"},"authors":[{"name":"Mark Jordan","slug":"/author","image":{"src":"/images/client/client-2.png"}},{"name":"Farik Shaikh","slug":"/author","image":{"src":"/images/client/client-3.png"}},{"name":"John Doe","slug":"/author","image":{"src":"/images/client/client-5.png"}}],"bitCount":15},{"section":"live-explore-section","section_title":{"title":"Live Bidding"}},{"section":"collection-section","section_title":{"title":"Top Collection"}},{"section":"explore-product-section","section_title":{"title":"Explore Product"}},{"section":"service-section","section_title":{"title":"Make Easyer"},"items":[{"id":1,"title":"Set up your wallet","path":"/connect","subtitle":"Step-01","description":"Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.","images":[{"src":"/images/icons/shape-7.png"}]},{"id":2,"title":"Create your collection","path":"/collection","subtitle":"Step-02","description":"A great collection of beautiful website templates for your need. Choose the best suitable template.","images":[{"src":"/images/icons/shape-1.png"}]},{"id":3,"title":"Add your NFT\'s","path":"/connect","subtitle":"Step-03","description":"We\'ve made the template fully responsive, so it looks great on all devices: desktop, tablets and.","images":[{"src":"/images/icons/shape-5.png"}]}]},{"section":"creator-section","section_title":{"title":"Top Artists"}}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6188,2102,388,491,5678,3195,5908,4215,6078,6427,4890,6408], () => (__webpack_exec__(8735)));
module.exports = __webpack_exports__;

})();