"use strict";
(() => {
var exports = {};
exports.id = 5563;
exports.ids = [5563];
exports.modules = {

/***/ 8995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_support),
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
// EXTERNAL MODULE: ./src/containers/services/layout-01/index.jsx
var layout_01 = __webpack_require__(2036);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
;// CONCATENATED MODULE: external "react-bootstrap/Accordion"
const Accordion_namespaceObject = require("react-bootstrap/Accordion");
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_namespaceObject);
;// CONCATENATED MODULE: ./src/components/ui/accordion/index.jsx



const Accordion = ({ items , defaultActiveKey  })=>/*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()), {
        defaultActiveKey: defaultActiveKey,
        children: items?.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Item, {
                eventKey: item.id,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()).Header, {
                        children: [
                            item.title,
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "feather-chevron-up"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()).Body, {
                        dangerouslySetInnerHTML: {
                            __html: item.description
                        }
                    })
                ]
            }, item.id))
    });
Accordion.propTypes = {
    items: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        id: external_prop_types_default().oneOfType([
            (external_prop_types_default()).string,
            (external_prop_types_default()).number
        ]).isRequired,
        title: (external_prop_types_default()).string.isRequired,
        description: (external_prop_types_default()).string.isRequired
    })),
    defaultActiveKey: external_prop_types_default().oneOfType([
        (external_prop_types_default()).string,
        (external_prop_types_default()).number
    ]).isRequired
};
/* harmony default export */ const accordion = (Accordion);

;// CONCATENATED MODULE: ./src/containers/support/index.jsx





const SupportArea = ({ className , space  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-support-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row g-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "rn-support-read",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "read-card",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "How to start as a seller?"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "read-card",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "What happens when there are no orders?"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "read-card",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Why are you getting rejected shares?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "content",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    path: "/create",
                                    className: "mr--15",
                                    children: "Create"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    href: "/contact",
                                    color: "primary-alta",
                                    children: "Contact Us"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "support-accordion",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(accordion, {
                                defaultActiveKey: 0,
                                items: [
                                    {
                                        id: 0,
                                        title: "What is the NFTs reward system?",
                                        description: "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow."
                                    },
                                    {
                                        id: 1,
                                        title: "Which servers are available?",
                                        description: "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow."
                                    },
                                    {
                                        id: 2,
                                        title: "Which miners are supported?",
                                        description: "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow."
                                    },
                                    {
                                        id: 3,
                                        title: "Keep It Short, Simple, and to the Point.",
                                        description: "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow."
                                    },
                                    {
                                        id: 4,
                                        title: "How quickly can I get customer support?",
                                        description: "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow."
                                    },
                                    {
                                        id: 5,
                                        title: "Okay, I'm afraid to ask but... what is SEO?",
                                        description: "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow."
                                    }
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
SupportArea.propTypes = {
    className: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1,
        2
    ])
};
SupportArea.defaultProps = {
    space: 1
};
/* harmony default export */ const support = (SupportArea);

;// CONCATENATED MODULE: ./src/pages/support.jsx








async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Support = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Support"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb/* default */.Z, {
                        pageTitle: "Support Center",
                        currentPage: "Support Center"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(support, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {})
        ]
    });
/* harmony default export */ const pages_support = (Support);


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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715,9783,6180,3578,4215,2036], () => (__webpack_exec__(8995)));
module.exports = __webpack_exports__;

})();