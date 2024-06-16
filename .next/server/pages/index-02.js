"use strict";
(() => {
var exports = {};
exports.id = 4340;
exports.ids = [4340];
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

/***/ 5024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_02),
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
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/components/ui/slider/index.jsx
var slider = __webpack_require__(8179);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
;// CONCATENATED MODULE: ./src/components/portfolio/layout-01/index.jsx




const Portfolio = ({ title , path , author , image  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "inner",
        children: [
            image?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "thumbnail",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                    path: path,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: image.src,
                        alt: image?.alt || "NFT_portfolio",
                        width: 570,
                        height: 570,
                        priority: true
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "banner-read-thumb",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
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
        name: (external_prop_types_default()).string.isRequired,
        slug: (external_prop_types_default()).string
    }),
    image: external_prop_types_default().shape({
        src: external_prop_types_default().oneOfType([
            external_prop_types_default().shape(),
            (external_prop_types_default()).string
        ]).isRequired,
        alt: (external_prop_types_default()).string
    }).isRequired
};
/* harmony default export */ const layout_01 = (Portfolio);

// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/containers/hero/layout-02/index.jsx





const SliderOptions = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1124,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 868,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }
    ]
};
const HeroArea = ({ data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "banner-area pt--25",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: data?.items && /*#__PURE__*/ jsx_runtime_.jsx(slider/* default */.Z, {
                    options: SliderOptions,
                    className: "slider-style-2 slick-activation-01 slick-arrow-style-one slick-arrow-between",
                    children: data.items.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx(slider/* SliderItem */.w, {
                            className: "single-slide",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01, {
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
        })
    });
HeroArea.propTypes = {
    data: external_prop_types_default().shape({
        items: external_prop_types_default().arrayOf(types/* FeatureProductsType */.J0)
    })
};
/* harmony default export */ const layout_02 = (HeroArea);

// EXTERNAL MODULE: ./src/containers/creator/layout-01/index.jsx
var creator_layout_01 = __webpack_require__(9074);
// EXTERNAL MODULE: ./src/containers/live-explore/layout-02/index.jsx
var live_explore_layout_02 = __webpack_require__(7058);
// EXTERNAL MODULE: ./src/containers/services/layout-01/index.jsx
var services_layout_01 = __webpack_require__(2036);
// EXTERNAL MODULE: ./src/containers/product/layout-04/index.jsx
var layout_04 = __webpack_require__(6377);
// EXTERNAL MODULE: ./src/containers/explore-product/layout-01/index.jsx + 2 modules
var explore_product_layout_01 = __webpack_require__(6038);
// EXTERNAL MODULE: ./src/containers/collection/layout-01/index.jsx
var collection_layout_01 = __webpack_require__(4085);
// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(8115);
;// CONCATENATED MODULE: ./src/data/homepages/home-02.json
const home_02_namespaceObject = JSON.parse('{"title":"home-02","content":[{"section":"hero-section","items":[{"id":1,"title":"Cubic Bazier","slug":"/collection","author":{"name":"Mark Jordan","slug":"/author"},"image":{"src":"/images/banner/banner-01.jpg"}},{"id":2,"title":"Faminho24","slug":"/collection","author":{"name":"Farik Shaikh","slug":"/author"},"image":{"src":"/images/banner/banner-02.jpg"}},{"id":3,"title":"Tzniistan","slug":"/collection","author":{"name":"John Doe","slug":"/author"},"image":{"src":"/images/banner/banner-03.jpg"}},{"id":4,"title":"Bazier","slug":"/collection","author":{"name":"Olive Yew","slug":"/author"},"image":{"src":"/images/banner/banner-04.jpg"}}]},{"section":"top-sller-section","section_title":{"title":"Our Best Creators"}},{"section":"newest-section","section_title":{"title":"Newest Items"}},{"section":"live-explore-section","section_title":{"title":"Live Bidding"}},{"section":"service-section","section_title":{"title":"Create and sell your NFTs"},"items":[{"id":1,"title":"Set up your wallet","path":"/connect","subtitle":"Step-01","description":"Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.","images":[{"src":"/images/icons/shape-7.png"}]},{"id":2,"title":"Create your collection","path":"/collection","subtitle":"Step-02","description":"A great collection of beautiful website templates for your need. Choose the best suitable template.","images":[{"src":"/images/icons/shape-1.png"}]},{"id":3,"title":"Add your NFT\'s","path":"/connect","subtitle":"Step-03","description":"We\'ve made the template fully responsive, so it looks great on all devices: desktop, tablets and.","images":[{"src":"/images/icons/shape-5.png"}]},{"id":4,"title":"Sell Your NFT\'s","path":"/creator","subtitle":"Step-04","description":"I throw myself down among the tall grass by the stream as I lie close to the earth NFT\'s.","images":[{"src":"/images/icons/shape-6.png"}]}]},{"section":"explore-product-section","section_title":{"title":"Explore Product"}},{"section":"collection-section","section_title":{"title":"Top Collection"}}]}');
// EXTERNAL MODULE: ./src/data/sellers.json
var sellers = __webpack_require__(5678);
// EXTERNAL MODULE: ./src/data/products.json
var products = __webpack_require__(2537);
// EXTERNAL MODULE: ./src/data/collections.json
var collections = __webpack_require__(5908);
;// CONCATENATED MODULE: ./src/pages/index-02.jsx













// Demo data




async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Home02 = ()=>{
    const content = (0,methods.normalizedData)(home_02_namespaceObject?.content || []);
    const liveAuctionData = products.filter((prod)=>prod?.auction_date && new Date() <= new Date(prod?.auction_date)).sort((a, b)=>Number(new Date(b.published_at)) - Number(new Date(a.published_at))).slice(0, 5);
    const newestData = products.sort((a, b)=>Number(new Date(b.published_at)) - Number(new Date(a.published_at))).slice(0, 5);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Home Two"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_02, {
                        data: content["hero-section"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(creator_layout_01/* default */.Z, {
                        data: {
                            ...content["top-sller-section"],
                            creators: sellers
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_04/* default */.Z, {
                        data: {
                            ...content["newest-section"],
                            products: newestData
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(live_explore_layout_02/* default */.Z, {
                        data: {
                            ...content["live-explore-section"],
                            products: liveAuctionData
                        },
                        gap: 5
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(services_layout_01/* default */.Z, {
                        data: content["service-section"]
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
/* harmony default export */ const index_02 = (Home02);


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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,6188,2102,2537,388,491,8179,5678,3195,5908,4215,2036,3453,4085,6377,6038,7058,9074], () => (__webpack_exec__(5024)));
module.exports = __webpack_exports__;

})();