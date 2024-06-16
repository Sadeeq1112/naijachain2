"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 8490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/seo.jsx
var seo = __webpack_require__(3191);
// EXTERNAL MODULE: ./src/layouts/wrapper.jsx + 1 modules
var wrapper = __webpack_require__(3019);
// EXTERNAL MODULE: ./src/layouts/header/header-01/index.jsx + 9 modules
var header_01 = __webpack_require__(8205);
// EXTERNAL MODULE: ./src/layouts/footer/footer-01/index.jsx + 9 modules
var footer_01 = __webpack_require__(5728);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/containers/hero/layout-01/index.jsx






const HeroArea = ({ data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "slider-one rn-section-gapTop",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row row-reverce-sm align-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-5 col-md-6 col-sm-12 mt_sm--50",
                        children: [
                            data?.headings[0]?.content && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "title",
                                "data-sal-delay": "200",
                                "data-sal": "slide-up",
                                "data-sal-duration": "800",
                                children: data.headings[0].content
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
                        className: "col-lg-5 col-md-6 col-sm-12 offset-lg-1",
                        children: data?.images?.[0]?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "slider-thumbnail",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: data.images[0].src,
                                alt: data.images[0]?.alt || "Slider Images",
                                width: 585,
                                height: 593,
                                priority: true
                            })
                        })
                    })
                ]
            })
        })
    });
HeroArea.propTypes = {
    data: external_prop_types_default().shape({
        headings: external_prop_types_default().arrayOf(types/* HeadingType */.nQ),
        texts: external_prop_types_default().arrayOf(types/* TextType */.yG),
        buttons: external_prop_types_default().arrayOf(types/* ButtonType */.L$),
        images: external_prop_types_default().arrayOf(types/* ImageType */.__)
    })
};
/* harmony default export */ const layout_01 = (HeroArea);

// EXTERNAL MODULE: ./src/containers/live-explore/layout-01/index.jsx
var live_explore_layout_01 = __webpack_require__(1318);
// EXTERNAL MODULE: ./src/containers/services/layout-01/index.jsx
var services_layout_01 = __webpack_require__(2036);
// EXTERNAL MODULE: ./src/containers/product/layout-04/index.jsx
var layout_04 = __webpack_require__(6377);
// EXTERNAL MODULE: ./src/containers/top-seller/layout-01/index.jsx
var top_seller_layout_01 = __webpack_require__(3123);
// EXTERNAL MODULE: ./src/containers/explore-product/layout-01/index.jsx + 2 modules
var explore_product_layout_01 = __webpack_require__(6038);
// EXTERNAL MODULE: ./src/containers/collection/layout-01/index.jsx
var collection_layout_01 = __webpack_require__(4085);
// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(8115);
;// CONCATENATED MODULE: ./src/data/homepages/home-01.json
const home_01_namespaceObject = JSON.parse('{"title":"home-01","content":[{"section":"hero-section","headings":[{"id":1,"content":"Discover Local Nigerian Crafts, Collect and Purchase Unique Artisanal Products."}],"texts":[{"id":1,"content":"Partner with one of Nigeria\'s largest decentralized marketplaces to showcase your crafts and products."}],"buttons":[{"id":1,"content":"Get Started","path":"/"},{"id":2,"color":"primary-alta","content":"Create","path":"/create"}],"images":[{"src":"/images/slider/sidney-pearce-rco9Z8raWFM-unsplash (2).jpg"}]},{"section":"service-section","section_title":{"title":"Create and sell your Crafts"},"items":[{"id":1,"title":"Set up your wallet","path":"/connect","subtitle":"Step-01","description":"Powerful features and inclusions, which makes DMLA standout, easily customizable and scalable.","images":[{"src":"/images/icons/shape-7.png"}]},{"id":2,"title":"Create your collection","path":"/collection","subtitle":"Step-02","description":"A great collection of beautiful Nigerian crafts for your need. Choose the best suitable craft.","images":[{"src":"/images/icons/shape-1.png"}]},{"id":3,"title":"Add your Crafts","path":"/connect","subtitle":"Step-03","description":"We\'ve made the marketplace fully responsive, so it looks great on all devices: desktop, tablets and.","images":[{"src":"/images/icons/shape-5.png"}]},{"id":4,"title":"Sell Your Crafts","path":"/creator","subtitle":"Step-04","description":"I throw myself down among the tall grass by the stream as I lie close to the earth Crafts.","images":[{"src":"/images/icons/shape-6.png"}]}]},{"section":"live-explore-section","section_title":{"title":"Live Bidding"}},{"section":"newest-section","section_title":{"title":"Newest Crafts"}},{"section":"top-sller-section","section_title":{"title":"Top Seller in"}},{"section":"explore-product-section","section_title":{"title":"Explore Crafts"}},{"section":"collection-section","section_title":{"title":"Top Collection"}}]}');
// EXTERNAL MODULE: ./src/data/products.json
var products = __webpack_require__(2537);
// EXTERNAL MODULE: ./src/data/sellers.json
var sellers = __webpack_require__(5678);
// EXTERNAL MODULE: ./src/data/collections.json
var collections = __webpack_require__(5908);
;// CONCATENATED MODULE: ./src/pages/index.jsx













// Demo Data




async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Home = ()=>{
    const content = (0,methods.normalizedData)(home_01_namespaceObject?.content || []);
    const liveAuctionData = products.filter((prod)=>prod?.auction_date && new Date() <= new Date(prod?.auction_date));
    const newestData = products.sort((a, b)=>Number(new Date(b.published_at)) - Number(new Date(a.published_at))).slice(0, 5);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Naija-Chain"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_01, {
                        data: content["hero-section"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(live_explore_layout_01/* default */.Z, {
                        data: {
                            ...content["live-explore-section"],
                            products: liveAuctionData
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(services_layout_01/* default */.Z, {
                        data: content["service-section"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_04/* default */.Z, {
                        data: {
                            ...content["newest-section"],
                            products: newestData
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(top_seller_layout_01/* default */.Z, {
                        data: {
                            ...content["top-sller-section"],
                            sellers: sellers
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(explore_product_layout_01/* default */.Z, {
                        data: {
                            ...content["explore-product-section"],
                            products: products
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(collection_layout_01/* default */.Z, {
                        data: {
                            ...content["collection-section"],
                            collections: collections.slice(0, 4)
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const pages = (Home);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,6188,2102,2537,388,491,8179,5678,3195,5908,4215,2036,3453,4085,1318,3123,6377,6038], () => (__webpack_exec__(8490)));
module.exports = __webpack_exports__;

})();