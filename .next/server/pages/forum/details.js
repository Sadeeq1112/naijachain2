"use strict";
(() => {
var exports = {};
exports.id = 8406;
exports.ids = [8406];
exports.modules = {

/***/ 8429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ details),
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
// EXTERNAL MODULE: ./src/containers/forum/forum-top.jsx
var forum_top = __webpack_require__(1423);
// EXTERNAL MODULE: ./src/components/community-card/index.jsx
var community_card = __webpack_require__(9182);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
;// CONCATENATED MODULE: ./src/components/forms/forum-answer-form.jsx



const ForumAnswerForm = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "forum-input-ans-wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "forum-input-ans-author-img",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/client/client-10.png",
                    alt: "Nft-Profile",
                    width: 56,
                    height: 56
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "Write Answer..."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                type: "button",
                shape: "ellipse",
                size: "medium",
                children: "Answer"
            })
        ]
    });
/* harmony default export */ const forum_answer_form = (ForumAnswerForm);

// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
;// CONCATENATED MODULE: ./src/components/forum-answer-card/index.jsx



const ForumAnswerCard = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "forum-single-ans",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ans-header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                        path: "#!",
                        className: "ans-header-author",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/images/client/client-3.png",
                            alt: "Nft-Profile",
                            width: 46,
                            height: 46
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                        path: "#!",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "name",
                            children: "@Mikle"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "date",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "feather-watch"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "5 days ago"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ans-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Check regularly the website, cause I’m in the same situation. They will add more artists sooner or later, check also the discord channel they have. But most important, be patient and keep sharing your work in other social media But most important, be patient and keep sharing your work in other social media"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "reaction",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                                path: "#!",
                                className: "like",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "feather-thumbs-up"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "27 Like"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                                path: "#!",
                                className: "dislike",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "feather-thumbs-down"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "27 dislike"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "form-ans-separator"
                    })
                ]
            })
        ]
    });
/* harmony default export */ const forum_answer_card = (ForumAnswerCard);

// EXTERNAL MODULE: ./src/containers/forum/sidebar.jsx
var sidebar = __webpack_require__(755);
;// CONCATENATED MODULE: ./src/containers/forum/details-area.jsx





const DetailsArea = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nu-community-area rn-section-gapTop",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row g-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "community-content-wrapper",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(community_card/* default */.Z, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(forum_answer_form, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "forum-ans-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(forum_answer_card, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(forum_answer_card, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(forum_answer_card, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(forum_answer_card, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(forum_answer_card, {})
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar/* default */.Z, {})
                    })
                ]
            })
        })
    });
/* harmony default export */ const details_area = (DetailsArea);

;// CONCATENATED MODULE: ./src/pages/forum/details.jsx








async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const ForumDetails = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Forum Details"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb/* default */.Z, {
                        pageTitle: "Forum Details",
                        currentPage: "Forum Details"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(forum_top/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(details_area, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {})
        ]
    });
/* harmony default export */ const details = (ForumDetails);


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715,9783,6180,3578,938,8730], () => (__webpack_exec__(8429)));
module.exports = __webpack_exports__;

})();