"use strict";
(() => {
var exports = {};
exports.id = 9881;
exports.ids = [9881];
exports.modules = {

/***/ 7619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ creator),
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/ui/nice-select/index.jsx
var nice_select = __webpack_require__(388);
// EXTERNAL MODULE: ./src/components/top-seller/layout-01/index.jsx
var layout_01 = __webpack_require__(491);
// EXTERNAL MODULE: ./src/components/pagination-02/index.jsx
var pagination_02 = __webpack_require__(5116);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(8115);
;// CONCATENATED MODULE: ./src/containers/creator/layout-03/index.jsx









const POSTS_PER_PAGE = 16;
const CreatorArea = ({ className , space , data  })=>{
    const [current, setCurrent] = (0,external_react_.useState)("1 day");
    const [creators, setCreators] = (0,external_react_.useState)([]);
    const [currentPage, setCurrentPage] = (0,external_react_.useState)(1);
    const numberOfPages = Math.ceil(data.creators.length / POSTS_PER_PAGE);
    const paginationHandler = (page)=>{
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const creatorHandler = (0,external_react_.useCallback)(()=>{
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        setCreators(data.creators.slice(start, start + POSTS_PER_PAGE));
    }, [
        currentPage,
        data.creators
    ]);
    const changeHandler = (item)=>{
        setCurrent(item.value);
    };
    const filterHandler = (0,external_react_.useCallback)(()=>{
        const allSellers = data.creators;
        const filterdSellers = allSellers.filter((seller)=>(0,methods.slugify)(seller.top_since) === (0,methods.slugify)(current));
        setCreators(filterdSellers);
    }, [
        current,
        data.creators
    ]);
    (0,external_react_.useEffect)(()=>{
        filterHandler();
    }, [
        filterHandler
    ]);
    (0,external_react_.useEffect)(()=>{
        creatorHandler();
    }, [
        currentPage,
        creatorHandler
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-creator-title-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "title mb--0",
                                children: "Our Best Creators"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "shortby-default text-start text-sm-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(nice_select/* default */.Z, {
                                    options: [
                                        {
                                            value: "1 day",
                                            text: "Today"
                                        },
                                        {
                                            value: "7 Days",
                                            text: "7 Days"
                                        },
                                        {
                                            value: "15 Days",
                                            text: "15 Days"
                                        },
                                        {
                                            value: "30 Days",
                                            text: "30 Days"
                                        }
                                    ],
                                    defaultCurrent: 0,
                                    name: "sellerSort",
                                    onChange: changeHandler
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row g-5 mt--30 creator-list-wrapper",
                    children: creators?.map((creator)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "creator-single col-lg-3 col-md-4 col-sm-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                                className: "explore",
                                name: creator.name,
                                slug: creator.slug,
                                total_sale: creator.total_sale,
                                image: {
                                    src: creator.image.src,
                                    width: 74,
                                    height: 74
                                },
                                isVarified: creator.isVarified
                            })
                        }, creator.id))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        "data-sal": "slide-up",
                        "data-sal-delay": "950",
                        "data-sal-duration": "800",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(pagination_02/* default */.Z, {
                            currentPage: currentPage,
                            numberOfPages: numberOfPages,
                            onClick: paginationHandler
                        })
                    })
                })
            ]
        })
    });
};
CreatorArea.propTypes = {
    className: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1
    ]),
    data: external_prop_types_default().shape({
        creators: external_prop_types_default().arrayOf(types/* SellerType */.Df)
    })
};
CreatorArea.defaultProps = {
    space: 1
};
/* harmony default export */ const layout_03 = (CreatorArea);

// EXTERNAL MODULE: ./src/data/sellers.json
var sellers = __webpack_require__(5678);
;// CONCATENATED MODULE: ./src/pages/creator.jsx






// demo data

const Creator = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Creator"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                id: "main-content",
                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_03, {
                    data: {
                        creators: sellers
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {})
        ]
    });
async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
/* harmony default export */ const creator = (Creator);


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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715,9783,6180,388,491,5678,5116], () => (__webpack_exec__(7619)));
module.exports = __webpack_exports__;

})();