"use strict";
(() => {
var exports = {};
exports.id = 2568;
exports.ids = [2568];
exports.modules = {

/***/ 1717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ forum),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
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
;// CONCATENATED MODULE: external "react-bootstrap/Tab"
const Tab_namespaceObject = require("react-bootstrap/Tab");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Tabs"
const Tabs_namespaceObject = require("react-bootstrap/Tabs");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_namespaceObject);
// EXTERNAL MODULE: ./src/components/community-card/index.jsx
var community_card = __webpack_require__(9182);
// EXTERNAL MODULE: ./src/components/pagination/index.jsx
var pagination = __webpack_require__(8934);
// EXTERNAL MODULE: ./src/containers/forum/sidebar.jsx
var sidebar = __webpack_require__(755);
;// CONCATENATED MODULE: ./src/containers/forum/community-area.jsx







const CommunityArea = ({ forums , pagiData  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nu-community-area rn-section-gapTop",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row g-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "community-content-wrapper",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                                    defaultActiveKey: "recent-content",
                                    id: "uncontrolled-tab-example",
                                    className: "mb--30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            eventKey: "recent-content",
                                            title: "Recent Content",
                                            children: forums?.map((forum)=>/*#__PURE__*/ jsx_runtime_.jsx(community_card/* default */.Z, {
                                                    thumbnail: forum.thumbnail,
                                                    title: forum.title,
                                                    path: forum.path,
                                                    published_at: forum.published_at,
                                                    tags: forum.tags,
                                                    total_comments: forum.total_comments,
                                                    likes: forum.likes,
                                                    views: forum.views,
                                                    excerpt: forum.excerpt
                                                }, forum.path))
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            eventKey: "most-answered",
                                            title: "Most Answered",
                                            children: "Most Answered"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            eventKey: "bump-question",
                                            title: "Bump Question",
                                            children: "Bump Question"
                                        })
                                    ]
                                })
                            }),
                            pagiData.numberOfPages > 1 && /*#__PURE__*/ jsx_runtime_.jsx(pagination/* default */.Z, {
                                currentPage: pagiData.currentPage,
                                numberOfPages: pagiData.numberOfPages,
                                rootPage: "/forum"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar/* default */.Z, {})
                    })
                ]
            })
        })
    });
CommunityArea.propTypes = {
    forums: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
    pagiData: external_prop_types_default().shape({
        numberOfPages: (external_prop_types_default()).number,
        currentPage: (external_prop_types_default()).number
    })
};
/* harmony default export */ const community_area = (CommunityArea);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./src/lib/forum.js


const directory = external_path_default().join(process.cwd(), "src/data/forum");
function getSlugs(dirPath) {
    return external_fs_default().readdirSync(dirPath);
}
const makeExcerpt = (str, maxLength)=>{
    if (!str) return null;
    if (str.length <= maxLength) {
        return str;
    }
    let excerpt = str.substring(0, maxLength);
    excerpt = excerpt.substring(0, excerpt.lastIndexOf(" "));
    return `${excerpt} ...`;
};
function getForumBySlug(slug, fields) {
    const realSlug = slug.replace(/\.json$/, "");
    const fullPath = external_path_default().join(directory, `${realSlug}.json`);
    const fileContents = JSON.parse(external_fs_default().readFileSync(fullPath, "utf8"));
    let forum;
    if (fields === "all") {
        forum = {
            ...fileContents,
            slug: realSlug
        };
    } else {
        forum = fields.reduce((acc, field)=>{
            if (field === "slug") {
                return {
                    ...acc,
                    [field]: realSlug
                };
            }
            if (field === "total_comments") {
                return {
                    ...acc,
                    [field]: fileContents.comments.length
                };
            }
            if (field === "excerpt") {
                return {
                    ...acc,
                    [field]: makeExcerpt(fileContents.description, 130)
                };
            }
            if (typeof fileContents[field] !== "undefined") {
                return {
                    ...acc,
                    [field]: fileContents[field]
                };
            }
            return acc;
        }, {});
    }
    return {
        ...forum,
        path: `/forum/${realSlug}`
    };
}
function getAllForums(fields, skip = 0, limit) {
    const slugs = getSlugs(directory);
    let forums = slugs.map((slug)=>getForumBySlug(slug, fields));
    if (limit) forums = forums.slice(skip, skip + limit);
    return {
        forums,
        count: forums.length
    };
}

;// CONCATENATED MODULE: ./src/pages/forum/index.jsx










const POSTS_PER_PAGE = 3;
const Forum = ({ forums , pagiData  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Forum & Community"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb/* default */.Z, {
                        pageTitle: "Forum & Community",
                        currentPage: "Forum & Community"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(forum_top/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(community_area, {
                        forums: forums,
                        pagiData: pagiData
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {})
        ]
    });
async function getStaticProps() {
    const { forums , count  } = getAllForums([
        "title",
        "thumbnail",
        "published_at",
        "tags",
        "total_comments",
        "likes",
        "views",
        "excerpt"
    ], 0, POSTS_PER_PAGE);
    return {
        props: {
            forums,
            className: "template-color-1",
            pagiData: {
                currentPage: 1,
                numberOfPages: Math.ceil(count / POSTS_PER_PAGE)
            }
        }
    };
}
Forum.propTypes = {
    forums: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
    pagiData: external_prop_types_default().shape({})
};
/* harmony default export */ const forum = (Forum);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715,9783,6180,3578,8934,938,8730], () => (__webpack_exec__(1717)));
module.exports = __webpack_exports__;

})();