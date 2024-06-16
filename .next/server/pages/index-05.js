"use strict";
(() => {
var exports = {};
exports.id = 9873;
exports.ids = [9873];
exports.modules = {

/***/ 1203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_05),
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
;// CONCATENATED MODULE: external "react-tsparticles"
const external_react_tsparticles_namespaceObject = require("react-tsparticles");
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_namespaceObject);
;// CONCATENATED MODULE: ./src/components/ui/particles/index.jsx


const Particles = ()=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_tsparticles_default()), {
        id: "tsparticles",
        options: {
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                            enable: false,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: [
                        "#7FC7BD",
                        "#ffE7BD"
                    ]
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000
                    },
                    value: 40
                },
                opacity: {
                    animation: {
                        enable: false,
                        speed: 1,
                        sync: true,
                        startValue: "max",
                        count: 1,
                        destroy: "min"
                    },
                    value: {
                        min: 0,
                        max: 0.8
                    },
                    random: true
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 4
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                size: {
                    value: {
                        min: 1,
                        max: 3
                    }
                }
            }
        }
    });
/* harmony default export */ const particles = (Particles);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/components/product/layout-01/index.jsx + 1 modules
var layout_01 = __webpack_require__(2102);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/containers/hero/layout-05/index.jsx





const HeroArea = ({ data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "slider-style-5 rn-section-gapTop",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row g-5 align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 order-2 order-lg-1 mt_md--30 mt_sm--30",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "banner-left-content",
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
                        className: "col-lg-6 order-1 order-lg-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row g-5",
                            children: data?.products?.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                                        overlay: true,
                                        title: prod.title,
                                        slug: prod.slug,
                                        latestBid: prod.latestBid,
                                        price: prod.price,
                                        likeCount: prod.likeCount,
                                        auction_date: prod.auction_date,
                                        image: prod.images?.[0],
                                        authors: prod.authors,
                                        bitCount: prod.bitCount
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
        badge: (external_prop_types_default()).string,
        title: (external_prop_types_default()).string.isRequired,
        description: (external_prop_types_default()).string.isRequired,
        buttons: external_prop_types_default().arrayOf(types/* ButtonType */.L$),
        products: external_prop_types_default().arrayOf(types/* ProductType */.kv)
    })
};
/* harmony default export */ const layout_05 = (HeroArea);

// EXTERNAL MODULE: ./src/containers/top-seller/layout-01/index.jsx
var top_seller_layout_01 = __webpack_require__(3123);
// EXTERNAL MODULE: ./src/containers/explore-product/layout-03/index.jsx + 1 modules
var layout_03 = __webpack_require__(2061);
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
;// CONCATENATED MODULE: ./src/pages/index-05.jsx












// Demo data




async function getStaticProps() {
    return {
        props: {
            className: "template-color-1 with-particles"
        }
    };
}
const Home = ()=>{
    const content = (0,methods.normalizedData)(home_04?.content || []);
    const liveAuctionData = products.filter((prod)=>prod?.auction_date && new Date() <= new Date(prod?.auction_date)).sort((a, b)=>Number(new Date(b.published_at)) - Number(new Date(a.published_at))).slice(0, 2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Home five"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(particles, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_05, {
                        data: {
                            ...content["hero-section"],
                            products: liveAuctionData
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(top_seller_layout_01/* default */.Z, {
                        data: {
                            ...content["top-sller-section"],
                            sellers: sellers
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_03/* default */.Z, {
                        data: {
                            ...content["explore-product-section"],
                            products: products
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
/* harmony default export */ const index_05 = (Home);


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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,6188,2102,2537,388,491,5678,3195,5908,4215,2036,3453,4085,3123,2061,9199], () => (__webpack_exec__(1203)));
module.exports = __webpack_exports__;

})();