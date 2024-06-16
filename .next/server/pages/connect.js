"use strict";
(() => {
var exports = {};
exports.id = 7784;
exports.ids = [7784];
exports.modules = {

/***/ 6613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_connect),
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
// EXTERNAL MODULE: ./src/components/breadcrumb/index.jsx
var breadcrumb = __webpack_require__(3578);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
;// CONCATENATED MODULE: ./src/components/wallet/index.jsx




const Wallet = ({ className , title , description , path , icon , color  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("wallet-wrapper", className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "icon",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: external_clsx_default()("feather", icon, `color-${color}`)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: "title",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                    path: path,
                                    children: title
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "description",
                                children: description
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                className: "over-link visually-hidden",
                path: path,
                children: [
                    title,
                    " link"
                ]
            })
        ]
    });
Wallet.propTypes = {
    className: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).string.isRequired,
    path: (external_prop_types_default()).string.isRequired,
    icon: (external_prop_types_default()).string.isRequired,
    color: (external_prop_types_default()).string
};
/* harmony default export */ const wallet = (Wallet);

;// CONCATENATED MODULE: ./src/containers/connect/index.jsx






const ConnectArea = ({ className , space  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-connect-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row g mb--50 mb_md--30 mb_sm--30 align-items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-6",
                            "data-sal": "slide-up",
                            "data-sal-delay": "150",
                            "data-sal-duration": "800",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "connect-title",
                                    children: "Connect your wallet"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "connect-td",
                                    children: [
                                        "Connect with one of available wallet providers or create a new wallet.",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                            path: "/collection",
                                            children: "What is a wallet?"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            "data-sal": "slide-up",
                            "data-sal-delay": "200",
                            "data-sal-duration": "800",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "wallet-bootm-disc",
                                children: "We do not own your private keys and cannot access your funds without your confirmation."
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row g-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            "data-sal": "slide-up",
                            "data-sal-delay": "150",
                            "data-sal-duration": "500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "connect-thumbnail",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "left-image",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/connect/connect-01.jpg",
                                        alt: "Nft_Profile",
                                        width: 670,
                                        height: 576,
                                        priority: true
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row g-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12",
                                        "data-sal": "slide-up",
                                        "data-sal-delay": "150",
                                        "data-sal-duration": "800",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(wallet, {
                                            title: "Bitcollet",
                                            description: "I throw myself down among the tall.",
                                            path: "/collection",
                                            icon: "feather-cast"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12",
                                        "data-sal": "slide-up",
                                        "data-sal-delay": "150",
                                        "data-sal-duration": "800",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(wallet, {
                                            title: "GrasCash",
                                            description: "This is a great deals For cash transfer",
                                            path: "/collection",
                                            icon: "feather-box",
                                            color: "purple"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12",
                                        "data-sal": "slide-up",
                                        "data-sal-delay": "150",
                                        "data-sal-duration": "800",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(wallet, {
                                            title: "Import",
                                            description: "Great oppertunity to reach them.",
                                            path: "/collection",
                                            icon: "feather-award",
                                            color: "pink"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12",
                                        "data-sal": "slide-up",
                                        "data-sal-delay": "150",
                                        "data-sal-duration": "800",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(wallet, {
                                            title: "TiOne",
                                            description: "Built your bigger offers then me",
                                            path: "/collection",
                                            icon: "feather-briefcase",
                                            color: "yellow"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12",
                                        "data-sal": "slide-up",
                                        "data-sal-delay": "150",
                                        "data-sal-duration": "800",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(wallet, {
                                            title: "Bkashes",
                                            description: "Cash Transfer for easyest way you wast",
                                            path: "/collection",
                                            icon: "feather-command",
                                            color: "green"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12",
                                        "data-sal": "slide-up",
                                        "data-sal-delay": "150",
                                        "data-sal-duration": "800",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(wallet, {
                                            title: "Pyynle",
                                            description: "More then myself down among the Cash.",
                                            path: "/collection",
                                            icon: "feather-cpu",
                                            color: "blue"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-12",
                                        "data-sal": "slide-up",
                                        "data-sal-delay": "150",
                                        "data-sal-duration": "800",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(wallet, {
                                            title: "YesCash",
                                            description: "Biggest Bank transfer for best oppertunity",
                                            path: "/collection",
                                            icon: "feather-gitlab",
                                            color: "red"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
ConnectArea.propTypes = {
    className: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1
    ])
};
ConnectArea.defaultProps = {
    space: 1
};
/* harmony default export */ const connect = (ConnectArea);

;// CONCATENATED MODULE: ./src/pages/connect.jsx







async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Connect = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Connect"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb/* default */.Z, {
                        pageTitle: "Make your payment easier",
                        currentPage: "Make your payment easier"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(connect, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {})
        ]
    });
/* harmony default export */ const pages_connect = (Connect);


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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715,9783,6180,3578], () => (__webpack_exec__(6613)));
module.exports = __webpack_exports__;

})();