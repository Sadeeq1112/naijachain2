"use strict";
(() => {
var exports = {};
exports.id = 7839;
exports.ids = [7839];
exports.modules = {

/***/ 4929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const Sticky = ({ children , className , top  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("widge-wrapper", className),
        style: {
            top
        },
        children: children
    });
Sticky.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    top: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Sticky.defaultProps = {
    top: "100px"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sticky);


/***/ }),

/***/ 6965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_activity),
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
;// CONCATENATED MODULE: ./src/components/activity/index.jsx





const Activity = ({ className , title , path , desc , time , date , author , image , status  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("single-activity-wrapper", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "read-content",
                    children: [
                        image?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "thumbnail",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                path: path,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: image.src,
                                    alt: image?.alt || "Nft_Profile",
                                    width: image?.width || 500,
                                    height: image?.height || 500
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                    path: path,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "title",
                                        children: title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    dangerouslySetInnerHTML: {
                                        __html: desc
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "time-maintane",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "time data",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "feather-clock"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        time,
                                                        " on ",
                                                        date
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "user-area data",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "feather-user"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                                    path: author.slug,
                                                    children: author.name
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "icone-area",
                    children: [
                        status === "follow" && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "feather-thumbs-up"
                        }),
                        status === "sale" && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "feather-shopping-cart"
                        }),
                        status === "like" && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "feather-heart"
                        }),
                        status === "offer" && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "feather-user-plus"
                        })
                    ]
                })
            ]
        })
    });
Activity.propTypes = {
    className: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired,
    path: (external_prop_types_default()).string.isRequired,
    desc: (external_prop_types_default()).string.isRequired,
    time: (external_prop_types_default()).string.isRequired,
    date: (external_prop_types_default()).string.isRequired,
    author: external_prop_types_default().shape({
        name: (external_prop_types_default()).string.isRequired,
        slug: (external_prop_types_default()).string.isRequired
    }).isRequired,
    image: external_prop_types_default().shape({
        src: external_prop_types_default().oneOfType([
            external_prop_types_default().shape(),
            (external_prop_types_default()).string
        ]).isRequired,
        alt: (external_prop_types_default()).string,
        width: (external_prop_types_default()).number,
        height: (external_prop_types_default()).number
    }).isRequired,
    status: external_prop_types_default().oneOf([
        "follow",
        "sale",
        "like",
        "offer"
    ])
};
/* harmony default export */ const activity = (Activity);

// EXTERNAL MODULE: ./src/components/ui/sticky/index.jsx
var sticky = __webpack_require__(4929);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(8115);
;// CONCATENATED MODULE: ./src/containers/activity/index.jsx








const ActivityArea = ({ space , className , data  })=>{
    const [activities, setActivities] = (0,external_react_.useState)(data?.activities || []);
    const marketFilters = [
        ...new Set((0,methods.flatDeep)(data?.activities.map((activity)=>activity.marketFilters)))
    ];
    const userFilters = [
        ...new Set((0,methods.flatDeep)(data?.activities.map((activity)=>activity.userFilters)))
    ];
    const filterHandler = (filter)=>{
        const newActivities = data?.activities.filter((activity)=>activity.marketFilters.includes(filter) || activity.userFilters.includes(filter));
        setActivities(newActivities);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-activity-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row mb--30",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "title",
                        children: "All following Acivity"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row g-6 activity-direction",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8 mb_dec--15",
                            children: activities?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(activity, {
                                    image: item.image,
                                    title: item.title,
                                    path: item.slug,
                                    desc: item.description,
                                    time: item.time,
                                    date: item.date,
                                    author: item.author,
                                    status: item.status
                                }, item.id))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "filter-wrapper",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(sticky/* default */.Z, {
                                    top: "100px",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "widge-wrapper rbt-sticky-top-adjust",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Market filter"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "sing-filter",
                                                        children: marketFilters?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "button",
                                                                onClick: ()=>filterHandler(item),
                                                                children: item
                                                            }, item))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "inner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: "Filter by users"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "sing-filter",
                                                        children: userFilters?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                onClick: ()=>filterHandler(item),
                                                                type: "button",
                                                                children: item
                                                            }, item))
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
ActivityArea.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    className: (external_prop_types_default()).string,
    data: external_prop_types_default().shape({
        activities: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: types/* IDType */.iJ,
            title: (external_prop_types_default()).string,
            slug: (external_prop_types_default()).string,
            description: (external_prop_types_default()).string,
            date: (external_prop_types_default()).string,
            time: (external_prop_types_default()).string,
            author: external_prop_types_default().shape({
                name: (external_prop_types_default()).string,
                slug: (external_prop_types_default()).string
            }),
            image: types/* ImageType */.__,
            status: external_prop_types_default().oneOf([
                "follow",
                "sale",
                "like",
                "offer"
            ]),
            marketFilters: external_prop_types_default().arrayOf((external_prop_types_default()).string),
            userFilters: external_prop_types_default().arrayOf((external_prop_types_default()).string)
        }))
    })
};
ActivityArea.defaultProps = {
    space: 1
};
/* harmony default export */ const containers_activity = (ActivityArea);

;// CONCATENATED MODULE: ./src/data/activity.json
const data_activity_namespaceObject = JSON.parse('[{"id":1,"title":"Preatent","slug":"/product","description":"10 editions listed by Bits for <span>2.50 ETH</span> each","date":"19th June","time":"2:00 PM","author":{"name":"Mark Jordan","slug":"/author"},"image":{"src":"/images/activity/activity-01.jpg"},"status":"follow","marketFilters":["purchases","sales"],"userFilters":["love","saved"]},{"id":2,"title":"#21 The Wonder","slug":"/product","description":"10 editions listed by Bits for <span>2.50 ETH</span> each","date":"20th June","time":"2:30 PM","author":{"name":"Farik Shaikh","slug":"/author"},"image":{"src":"/images/activity/activity-02.jpg"},"status":"offer","marketFilters":["followers","following"],"userFilters":["support us","report"]},{"id":3,"title":"Morgan11","slug":"/product","description":"10 editions listed by Bits for <span>3.50 ETH</span> each","date":"20th June","time":"1:30 PM","author":{"name":"Farik Shaikh","slug":"/author"},"image":{"src":"/images/activity/activity-03.jpg"},"status":"like","marketFilters":["reserved","live auction"],"userFilters":["support us","video"]},{"id":4,"title":"Diamond Dog","slug":"/product","description":"10 editions listed by Bits for <span>6.50 ETH</span> each","date":"20th June","time":"9:30 PM","author":{"name":"John Doe","slug":"/author"},"image":{"src":"/images/activity/activity-04.jpg"},"status":"sale","marketFilters":["followers","live auction","sales"],"userFilters":["support us","saved"]},{"id":5,"title":"cAtal7","slug":"/product","description":"10 editions listed by Bits for <span>9.50 ETH</span> each","date":"21th June","time":"11:30 PM","author":{"name":"John Doe","slug":"/author"},"image":{"src":"/images/activity/activity-05.jpg"},"status":"follow","marketFilters":["following","reserved","sales"],"userFilters":["love","saved"]},{"id":6,"title":"Norgan12","slug":"/product","description":"10 editions listed by Bits for <span>2.50 ETH</span> each","date":"21th June","time":"11:30 PM","author":{"name":"John Doe","slug":"/author"},"image":{"src":"/images/activity/activity-06.jpg"},"status":"offer","marketFilters":["purchases","followers","sales"],"userFilters":["love","report"]},{"id":7,"title":"Preasent","slug":"/product","description":"10 editions listed by Bits for <span>2.50 ETH</span> each","date":"21th June","time":"11:30 PM","author":{"name":"Olive Yew","slug":"/author"},"image":{"src":"/images/activity/activity-01.jpg"},"status":"like","marketFilters":["purchases","live auction","sales"],"userFilters":["video","report"]},{"id":8,"title":"Sun Afford","slug":"/product","description":"10 editions listed by Bits for <span>2.50 ETH</span> each","date":"21th June","time":"11:30 PM","author":{"name":"Olive Yew","slug":"/author"},"image":{"src":"/images/activity/activity-02.jpg"},"status":"sale","marketFilters":["purchases","live auction","reserved"],"userFilters":["video","support us"]}]');
;// CONCATENATED MODULE: ./src/pages/activity.jsx






// Demo Data

async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Home = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Acivity"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                id: "main-content",
                children: /*#__PURE__*/ jsx_runtime_.jsx(containers_activity, {
                    data: {
                        activities: data_activity_namespaceObject
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {})
        ]
    });
/* harmony default export */ const pages_activity = (Home);


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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715,9783,6180], () => (__webpack_exec__(6965)));
module.exports = __webpack_exports__;

})();