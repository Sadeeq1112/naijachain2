"use strict";
(() => {
var exports = {};
exports.id = 9169;
exports.ids = [9169];
exports.modules = {

/***/ 2750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_coming_soon),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/seo.jsx
var seo = __webpack_require__(3191);
// EXTERNAL MODULE: ./src/layouts/wrapper.jsx + 1 modules
var wrapper = __webpack_require__(3019);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/logo/index.jsx
var logo = __webpack_require__(3697);
// EXTERNAL MODULE: ./src/components/ui/slider/index.jsx
var slider = __webpack_require__(8179);
;// CONCATENATED MODULE: ./src/containers/coming-soon/index.jsx




const CommingSoonArea = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "maintanence-area",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "wrapper",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row row--0 h-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                                    logo: [
                                        {
                                            src: "/images/logo/logo-white.png"
                                        },
                                        {
                                            src: "/images/logo/logo-dark.png"
                                        }
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sub-title",
                                            children: "Stay Tuned"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "title",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Coming Soon"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "We are available please connect with us via",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "Phone:",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "tel:+880191122334",
                                                    children: "+880123456789"
                                                }),
                                                " or",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " Email:",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "mailto:admin@example.com",
                                                    children: [
                                                        " ",
                                                        "admin@example.com"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 col-md-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(slider/* default */.Z, {
                            options: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            },
                            className: "banner-one-slick comeing-soon-slick slider-style-4 slick-activation-09 slick-arrow-style-one rn-slick-dot-style",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(slider/* SliderItem */.w, {
                                    className: "single-rn-slider position-relative",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/bg/bg-image-14.jpg",
                                        alt: "Slider BG",
                                        priority: true,
                                        fill: true,
                                        sizes: "100vw",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(slider/* SliderItem */.w, {
                                    className: "single-rn-slider position-relative",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/bg/bg-image-15.jpg",
                                        alt: "Slider BG",
                                        priority: true,
                                        fill: true,
                                        sizes: "100vw",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(slider/* SliderItem */.w, {
                                    className: "single-rn-slider position-relative",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/bg/bg-image-16.jpg",
                                        alt: "Slider BG",
                                        priority: true,
                                        fill: true,
                                        sizes: "100vw",
                                        style: {
                                            objectFit: "cover"
                                        }
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
/* harmony default export */ const coming_soon = (CommingSoonArea);

;// CONCATENATED MODULE: ./src/pages/coming-soon.jsx




async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const ComingSoon = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Coming Soon"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(coming_soon, {})
        ]
    });
/* harmony default export */ const pages_coming_soon = (ComingSoon);


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,8179], () => (__webpack_exec__(2750)));
module.exports = __webpack_exports__;

})();