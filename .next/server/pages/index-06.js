"use strict";
(() => {
var exports = {};
exports.id = 7989;
exports.ids = [7989];
exports.modules = {

/***/ 3887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3715);
/* harmony import */ var _ui_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8179);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8663);






const SliderOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true
};
const HeroArea = ({ data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "rn-banner-area rn-section-gapTop",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: data?.banners && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_slider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                options: SliderOptions,
                className: "slider-style-6 wide-wrapper slick-activation-06 slick-arrow-between",
                children: data.banners.map((banner)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_slider__WEBPACK_IMPORTED_MODULE_3__/* .SliderItem */ .w, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "slide",
                            children: [
                                banner.image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: banner.image.src,
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
                                    className: "banner-read-thumb-lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            dangerouslySetInnerHTML: {
                                                __html: banner?.title
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            dangerouslySetInnerHTML: {
                                                __html: banner?.description
                                            }
                                        }),
                                        banner?.buttons && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "button-group",
                                            children: banner.buttons.map(({ id , content , ...btn }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                    "data-sal": "slide-up",
                                                    "data-sal-delay": "300",
                                                    "data-sal-duration": "800",
                                                    ...btn,
                                                    className: i === 0 ? "mr--15" : "",
                                                    children: content
                                                }, id))
                                        })
                                    ]
                                })
                            ]
                        })
                    }, banner.id))
            })
        })
    });
HeroArea.propTypes = {
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        banners: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
            id: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .IDType */ .iJ,
            title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
            description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
            buttons: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ButtonType */ .L$),
            image: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ImageType */ .__
        }))
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroArea);


/***/ }),

/***/ 3202:
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
/* harmony import */ var _containers_hero_layout_06__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3887);
/* harmony import */ var _containers_collection_layout_01__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4085);
/* harmony import */ var _containers_explore_product_layout_02__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5873);
/* harmony import */ var _containers_creator_layout_01__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9074);
/* harmony import */ var _containers_services_layout_01__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2036);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_homepages_home_06_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(839);
/* harmony import */ var _data_sellers_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5678);
/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2537);
/* harmony import */ var _data_collections_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_explore_product_layout_02__WEBPACK_IMPORTED_MODULE_7__]);
_containers_explore_product_layout_02__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











// Demo data




async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Home = ()=>{
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_10__.normalizedData)(_data_homepages_home_06_json__WEBPACK_IMPORTED_MODULE_11__?.content || []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Home Six"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_header_01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_hero_layout_06__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        data: content["hero-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_collection_layout_01__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        data: {
                            ...content["collection-section"],
                            collections: _data_collections_json__WEBPACK_IMPORTED_MODULE_14__.slice(0, 4)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_explore_product_layout_02__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        data: {
                            ...content["explore-product-section"],
                            products: _data_products_json__WEBPACK_IMPORTED_MODULE_13__
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_creator_layout_01__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        data: {
                            ...content["top-sller-section"],
                            creators: _data_sellers_json__WEBPACK_IMPORTED_MODULE_12__
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_services_layout_01__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        data: content["service-section"]
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

/***/ 839:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"home-06","content":[{"section":"hero-section","banners":[{"id":1,"title":"The way to find any <br/> Digital content","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita beatae exercitationem quasi ullam esse?","buttons":[{"id":1,"path":"/login","content":"Get Started"},{"id":2,"path":"/create","color":"primary-alta","content":"Create"}],"image":{"src":"/images/bg/bg-image-19.jpg"}},{"id":2,"title":"The way to find any <br/> Digital content","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita beatae exercitationem quasi ullam esse?","buttons":[{"id":1,"path":"/login","content":"Get Started"},{"id":2,"path":"/create","color":"primary-alta","content":"Create"}],"image":{"src":"/images/bg/bg-image-18.jpg"}},{"id":3,"title":"The way to find any <br/> Digital content","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita beatae exercitationem quasi ullam esse?","buttons":[{"id":1,"path":"/login","content":"Get Started"},{"id":2,"path":"/create","color":"primary-alta","content":"Create"}],"image":{"src":"/images/bg/bg-image-20.jpg"}}]},{"section":"collection-section","section_title":{"title":"Top Collection"}},{"section":"explore-product-section","section_title":{"title":"Explore Product"}},{"section":"top-sller-section","section_title":{"title":"Our Best Creators"}},{"section":"service-section","section_title":{"title":"Create and sell your NFTs"},"items":[{"id":1,"title":"Set up your wallet","path":"/connect","subtitle":"Step-01","description":"Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.","images":[{"src":"/images/icons/shape-7.png"}]},{"id":2,"title":"Create your collection","path":"/collection","subtitle":"Step-02","description":"A great collection of beautiful website templates for your need. Choose the best suitable template.","images":[{"src":"/images/icons/shape-1.png"}]},{"id":3,"title":"Add your NFT\'s","path":"/connect","subtitle":"Step-03","description":"We\'ve made the template fully responsive, so it looks great on all devices: desktop, tablets and.","images":[{"src":"/images/icons/shape-5.png"}]},{"id":4,"title":"Sell Your NFT\'s","path":"/creator","subtitle":"Step-04","description":"I throw myself down among the tall grass by the stream as I lie close to the earth NFT\'s.","images":[{"src":"/images/icons/shape-6.png"}]}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,6188,2102,2537,388,491,8179,5678,3195,5908,4215,2036,4085,6427,5873,9074], () => (__webpack_exec__(3202)));
module.exports = __webpack_exports__;

})();