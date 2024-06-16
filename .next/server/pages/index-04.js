"use strict";
(() => {
var exports = {};
exports.id = 7569;
exports.ids = [7569];
exports.modules = {

/***/ 1095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_04),
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
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/components/ui/slider/index.jsx
var slider = __webpack_require__(8179);
// EXTERNAL MODULE: ./src/components/portfolio/layout-02/index.jsx
var layout_02 = __webpack_require__(4886);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/containers/hero/layout-04/index.jsx






const SliderOptions = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    cssEase: "linear",
    adaptiveHeight: true
};
const HeroArea = ({ data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "banner-style-4 rn-section-gapTop",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1 mt_md--40 mt_sm--40",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "sldier-content",
                            children: [
                                data?.badge && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "title-badge",
                                    "data-sal": "slide-up",
                                    "data-sal-delay": "150",
                                    "data-sal-duration": "800",
                                    children: data.badge
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "title",
                                    "data-sal": "slide-up",
                                    "data-sal-delay": "200",
                                    "data-sal-duration": "800",
                                    dangerouslySetInnerHTML: {
                                        __html: data?.title
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "banner-disc-one",
                                    "data-sal": "slide-up",
                                    "data-sal-delay": "250",
                                    "data-sal-duration": "800",
                                    dangerouslySetInnerHTML: {
                                        __html: data?.description
                                    }
                                }),
                                data?.buttons && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "button-group",
                                    children: data.buttons.map(({ id , content , ...btn })=>/*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                            "data-sal": "slide-up",
                                            "data-sal-delay": "300",
                                            "data-sal-duration": "800",
                                            ...btn,
                                            children: content
                                        }, id))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-6 col-lg-6 col-md-12 order-1 order-lg-2",
                        children: data?.banners && /*#__PURE__*/ jsx_runtime_.jsx(slider/* default */.Z, {
                            options: SliderOptions,
                            className: "slider slick-activation-04",
                            children: data.banners.map((banner)=>/*#__PURE__*/ jsx_runtime_.jsx(slider/* SliderItem */.w, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(layout_02/* default */.Z, {
                                        title: banner.title,
                                        client: banner.client,
                                        path: banner.path,
                                        image: {
                                            src: banner.image.src,
                                            width: 667,
                                            height: 667
                                        }
                                    })
                                }, banner.id))
                        })
                    })
                ]
            })
        })
    });
HeroArea.propTypes = {
    data: external_prop_types_default().shape({
        badge: (external_prop_types_default()).string,
        title: (external_prop_types_default()).string.isRequired,
        description: (external_prop_types_default()).string.isRequired,
        buttons: external_prop_types_default().arrayOf(types/* ButtonType */.L$),
        banners: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: types/* IDType */.iJ,
            title: (external_prop_types_default()).string.isRequired,
            client: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired,
            image: types/* ImageType */.__
        }))
    })
};
/* harmony default export */ const layout_04 = (HeroArea);

// EXTERNAL MODULE: ./src/containers/live-explore/layout-01/index.jsx
var layout_01 = __webpack_require__(1318);
// EXTERNAL MODULE: ./src/containers/explore-product/layout-03/index.jsx + 1 modules
var layout_03 = __webpack_require__(2061);
// EXTERNAL MODULE: ./src/containers/top-seller/layout-01/index.jsx
var top_seller_layout_01 = __webpack_require__(3123);
// EXTERNAL MODULE: ./src/containers/services/layout-01/index.jsx
var services_layout_01 = __webpack_require__(2036);
// EXTERNAL MODULE: ./src/containers/collection/layout-01/index.jsx
var collection_layout_01 = __webpack_require__(4085);
// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(8115);
// EXTERNAL MODULE: ./src/data/homepages/home-04.json
var home_04 = __webpack_require__(9199);
// EXTERNAL MODULE: ./src/data/sellers.json
var sellers = __webpack_require__(5678);
// EXTERNAL MODULE: ./src/data/products.json
var products = __webpack_require__(2537);
// EXTERNAL MODULE: ./src/data/collections.json
var collections = __webpack_require__(5908);
;// CONCATENATED MODULE: ./src/pages/index-04.jsx












// Demo data




async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Home = ()=>{
    const content = (0,methods.normalizedData)(home_04?.content || []);
    const liveAuctionData = products.filter((prod)=>prod?.auction_date && new Date() <= new Date(prod?.auction_date)).sort((a, b)=>Number(new Date(b.published_at)) - Number(new Date(a.published_at))).slice(0, 5);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Home Four"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_04, {
                        data: content["hero-section"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                        data: {
                            ...content["live-explore-section"],
                            products: liveAuctionData
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_03/* default */.Z, {
                        data: {
                            ...content["explore-product-section"],
                            products: products
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(top_seller_layout_01/* default */.Z, {
                        data: {
                            ...content["top-sller-section"],
                            sellers: sellers
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(services_layout_01/* default */.Z, {
                        data: content["service-section"]
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
/* harmony default export */ const index_04 = (Home);


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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,6188,2102,2537,388,491,8179,5678,3195,5908,4215,2036,3453,4085,1318,3123,2061,9199,4886], () => (__webpack_exec__(1095)));
module.exports = __webpack_exports__;

})();