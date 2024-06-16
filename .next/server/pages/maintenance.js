"use strict";
(() => {
var exports = {};
exports.id = 5627;
exports.ids = [5627];
exports.modules = {

/***/ 2662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_maintenance),
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
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/components/logo/index.jsx
var logo = __webpack_require__(3697);
;// CONCATENATED MODULE: ./src/containers/maintenance/index.jsx




const MaintenanceArea = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "maintanance-heignt",
        "data-black-overlay": "7",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/images/bg/bg-image-1.jpg",
                alt: "Slider BG",
                quality: 100,
                priority: true,
                fill: true,
                sizes: "100vw",
                style: {
                    objectFit: "cover"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rn-comeing-soon-area ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-fluid pt--40 pb--35 maintanance-plr text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                            logo: [
                                {
                                    src: "/images/logo/logo-white.png"
                                },
                                {
                                    src: "/images/logo/logo-white.png"
                                }
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "maintanance-inner",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "wrapper",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "We're Back Soon"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        children: [
                                            "Website Is Under ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Maintanance"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                        path: "#!",
                                        className: "mt--30",
                                        children: "Learn More"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
/* harmony default export */ const maintenance = (MaintenanceArea);

;// CONCATENATED MODULE: ./src/pages/maintenance.jsx




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
            /*#__PURE__*/ jsx_runtime_.jsx(maintenance, {})
        ]
    });
/* harmony default export */ const pages_maintenance = (ComingSoon);


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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715], () => (__webpack_exec__(2662)));
module.exports = __webpack_exports__;

})();