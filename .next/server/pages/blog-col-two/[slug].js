"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 3204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3191);
/* harmony import */ var _layout_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3019);
/* harmony import */ var _layout_header_header_01__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8205);
/* harmony import */ var _layout_footer_footer_01__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5728);
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3578);
/* harmony import */ var _containers_blog_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5823);
/* harmony import */ var _containers_comments_area__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3959);
/* harmony import */ var _components_comment_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5721);
/* harmony import */ var _containers_related_posts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1481);
/* harmony import */ var _containers_blog_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7539);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1145);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api__WEBPACK_IMPORTED_MODULE_12__]);
_lib_api__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const BlogDetails = ({ post , categories , recentPosts , tags , relatedPosts  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                pageTitle: "Blog Details"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_header_01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        pageTitle: "Blog Details",
                        currentPage: "Blog Details"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rn-blog-area rn-blog-details-default rn-section-gapTop",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row g-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-xl-8 col-lg-8",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_blog_details__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                post: post
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_comments_area__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_comment_form__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_related_posts__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                relatedPosts: relatedPosts,
                                                rootPage: "/blog-col-two"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-xl-4 col-lg-4 mt_md--40 mt_sm--40",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_blog_sidebar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            categories: categories,
                                            recentPosts: recentPosts,
                                            tags: tags,
                                            rootPage: "/blog-col-two"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer_footer_01__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
async function getStaticPaths() {
    const posts = (0,_lib_api__WEBPACK_IMPORTED_MODULE_12__/* .getAllPosts */ .Bd)([
        "slug"
    ]);
    // map through to return post paths
    const paths = posts.map((post)=>({
            params: {
                slug: post.slug
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const { slug  } = params;
    const post = (0,_lib_api__WEBPACK_IMPORTED_MODULE_12__/* .getPostBySlug */ .zQ)(slug, [
        "content",
        "title",
        "date",
        "slug",
        "image",
        "category"
    ]);
    const posts = (0,_lib_api__WEBPACK_IMPORTED_MODULE_12__/* .getAllPosts */ .Bd)([
        "category",
        "slug",
        "title",
        "tags",
        "image",
        "timeToRead"
    ]);
    const categories = posts.map((blog)=>({
            ...blog.category
        }));
    const tags = posts.map((blog)=>[
            ...blog.tags
        ]);
    const recentPosts = posts.slice(0, 4);
    const relatedPosts = posts.filter((blog)=>blog.category.slug === post.category.slug).slice(0, 3);
    return {
        props: {
            post,
            slug,
            categories,
            recentPosts,
            tags,
            relatedPosts,
            className: "template-color-1"
        }
    };
}
BlogDetails.propTypes = {
    post: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({}),
    categories: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({})),
    recentPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({})),
    tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({}))),
    relatedPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({}))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

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

/***/ }),

/***/ 8974:
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715,9783,6180,3578,5173,938,7539,2152], () => (__webpack_exec__(3204)));
module.exports = __webpack_exports__;

})();