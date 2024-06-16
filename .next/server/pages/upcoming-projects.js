"use strict";
(() => {
var exports = {};
exports.id = 5601;
exports.ids = [5601];
exports.modules = {

/***/ 4126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_upcoming_projects),
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/project-table/index.jsx



const ProjectTable = ({ className , title , projects  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("row", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "col-12",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "table-title-area d-flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "feather-calendar"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: title
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "box-table table-responsive",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "table upcoming-projects",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Project"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Time"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Count"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Price"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Extras"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                children: projects?.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        className: i % 2 === 0 ? "color-light" : "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: item.project
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "color-green",
                                                    children: item.time
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "color-danger",
                                                    children: item.count
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "color-info",
                                                    children: item.price
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: item.extras
                                                })
                                            })
                                        ]
                                    }, item.id))
                            })
                        ]
                    })
                })
            ]
        })
    });
ProjectTable.propTypes = {
    className: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired,
    projects: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        id: (external_prop_types_default()).number,
        project: (external_prop_types_default()).string,
        time: (external_prop_types_default()).string,
        count: (external_prop_types_default()).string,
        price: (external_prop_types_default()).string,
        extras: (external_prop_types_default()).string
    }))
};
/* harmony default export */ const project_table = (ProjectTable);

// EXTERNAL MODULE: ./src/components/pagination-02/index.jsx
var pagination_02 = __webpack_require__(5116);
;// CONCATENATED MODULE: ./src/containers/upcoming-projects/index.jsx






const POSTS_PER_PAGE = 3;
const UpcomingProjectsArea = ({ space , className , data  })=>{
    const [upcomingProjects, setUpcomingProjects] = (0,external_react_.useState)([]);
    const [currentPage, setCurrentPage] = (0,external_react_.useState)(1);
    const numberOfPages = Math.ceil(data.upcomingProjects.length / POSTS_PER_PAGE);
    const paginationHandler = (page)=>{
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const creatorHandler = (0,external_react_.useCallback)(()=>{
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        setUpcomingProjects(data.upcomingProjects.slice(start, start + POSTS_PER_PAGE));
    }, [
        currentPage,
        data.upcomingProjects
    ]);
    (0,external_react_.useEffect)(()=>{
        creatorHandler();
    }, [
        currentPage,
        creatorHandler
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-upcoming-area", space === 1 && "rn-section-gap", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                upcomingProjects?.map((upcomingProject, i)=>/*#__PURE__*/ jsx_runtime_.jsx(project_table, {
                        title: upcomingProject.date,
                        className: external_clsx_default()(i !== 0 && "mt--80"),
                        projects: upcomingProject.projects
                    }, upcomingProject.date)),
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
UpcomingProjectsArea.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    className: (external_prop_types_default()).string,
    data: external_prop_types_default().shape({
        upcomingProjects: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            date: (external_prop_types_default()).string,
            projects: external_prop_types_default().arrayOf(external_prop_types_default().shape({
                id: (external_prop_types_default()).number,
                project: (external_prop_types_default()).string,
                time: (external_prop_types_default()).string,
                count: (external_prop_types_default()).string,
                price: (external_prop_types_default()).string,
                extras: (external_prop_types_default()).string
            }))
        }))
    })
};
UpcomingProjectsArea.defaultProps = {
    space: 1
};
/* harmony default export */ const upcoming_projects = (UpcomingProjectsArea);

;// CONCATENATED MODULE: ./src/data/upcoming-projects.json
const data_upcoming_projects_namespaceObject = JSON.parse('[{"date":"December 18th","projects":[{"id":1,"project":"Secure 25","time":"10 PM UTC","count":"100%","price":"$90","extras":"If SOL is above $200"},{"id":2,"project":"Portable Fire","time":"12 PM UTC","count":"10%","price":"$190","extras":"If SOL is above $200"},{"id":3,"project":"Buddistras","time":"10 PM UTC","count":"900%","price":"$200","extras":"If SOL is above $200"},{"id":4,"project":"Mopsquersd","time":"11 PM UTC","count":"200%","price":"$90","extras":"If SOL is above $200"},{"id":5,"project":"Trads562","time":"2 PM UTC","count":"300%","price":"$560","extras":"If SOL is above $200"},{"id":6,"project":"Raresable","time":"10 PM UTC","count":"600%","price":"$600","extras":"If SOL is above $200"},{"id":7,"project":"Firetab","time":"6 PM UTC","count":"100%","price":"$85","extras":"If SOL is above $200"},{"id":8,"project":"TheEnd","time":"5 PM UTC","count":"85%","price":"$90","extras":"If SOL is above $200"},{"id":9,"project":"Firetab","time":"6 PM UTC","count":"100%","price":"$85","extras":"If SOL is above $200"},{"id":10,"project":"Raresable","time":"10 PM UTC","count":"600%","price":"$190","extras":"If SOL is above $200"}]},{"date":"December 17th","projects":[{"id":1,"project":"Secure 25","time":"10 PM UTC","count":"100%","price":"$90","extras":"If SOL is above $200"},{"id":2,"project":"Portable Fire","time":"12 PM UTC","count":"10%","price":"$190","extras":"If SOL is above $200"},{"id":3,"project":"Buddistras","time":"10 PM UTC","count":"900%","price":"$200","extras":"If SOL is above $200"},{"id":4,"project":"Mopsquersd","time":"11 PM UTC","count":"200%","price":"$90","extras":"If SOL is above $200"},{"id":5,"project":"Trads562","time":"2 PM UTC","count":"300%","price":"$560","extras":"If SOL is above $200"},{"id":6,"project":"Raresable","time":"10 PM UTC","count":"600%","price":"$600","extras":"If SOL is above $200"},{"id":7,"project":"Firetab","time":"6 PM UTC","count":"100%","price":"$85","extras":"If SOL is above $200"},{"id":8,"project":"TheEnd","time":"5 PM UTC","count":"85%","price":"$90","extras":"If SOL is above $200"}]},{"date":"December 16th","projects":[{"id":1,"project":"Secure 25","time":"10 PM UTC","count":"100%","price":"$90","extras":"If SOL is above $200"},{"id":2,"project":"Portable Fire","time":"12 PM UTC","count":"10%","price":"$190","extras":"If SOL is above $200"},{"id":3,"project":"Buddistras","time":"10 PM UTC","count":"900%","price":"$200","extras":"If SOL is above $200"},{"id":4,"project":"Mopsquersd","time":"11 PM UTC","count":"200%","price":"$90","extras":"If SOL is above $200"},{"id":5,"project":"Trads562","time":"2 PM UTC","count":"300%","price":"$560","extras":"If SOL is above $200"},{"id":6,"project":"Raresable","time":"10 PM UTC","count":"600%","price":"$600","extras":"If SOL is above $200"},{"id":7,"project":"Firetab","time":"6 PM UTC","count":"100%","price":"$85","extras":"If SOL is above $200"},{"id":8,"project":"TheEnd","time":"5 PM UTC","count":"85%","price":"$90","extras":"If SOL is above $200"}]},{"date":"December 15th","projects":[{"id":1,"project":"Secure 25","time":"10 PM UTC","count":"100%","price":"$90","extras":"If SOL is above $200"},{"id":2,"project":"Portable Fire","time":"12 PM UTC","count":"10%","price":"$190","extras":"If SOL is above $200"},{"id":3,"project":"Buddistras","time":"10 PM UTC","count":"900%","price":"$200","extras":"If SOL is above $200"},{"id":4,"project":"Mopsquersd","time":"11 PM UTC","count":"200%","price":"$90","extras":"If SOL is above $200"},{"id":5,"project":"Trads562","time":"2 PM UTC","count":"300%","price":"$560","extras":"If SOL is above $200"},{"id":6,"project":"Raresable","time":"10 PM UTC","count":"600%","price":"$600","extras":"If SOL is above $200"},{"id":7,"project":"Firetab","time":"6 PM UTC","count":"100%","price":"$85","extras":"If SOL is above $200"},{"id":8,"project":"TheEnd","time":"5 PM UTC","count":"85%","price":"$90","extras":"If SOL is above $200"}]},{"date":"December 14th","projects":[{"id":1,"project":"Secure 25","time":"10 PM UTC","count":"100%","price":"$90","extras":"If SOL is above $200"},{"id":2,"project":"Portable Fire","time":"12 PM UTC","count":"10%","price":"$190","extras":"If SOL is above $200"},{"id":3,"project":"Buddistras","time":"10 PM UTC","count":"900%","price":"$200","extras":"If SOL is above $200"},{"id":4,"project":"Mopsquersd","time":"11 PM UTC","count":"200%","price":"$90","extras":"If SOL is above $200"},{"id":5,"project":"Trads562","time":"2 PM UTC","count":"300%","price":"$560","extras":"If SOL is above $200"},{"id":6,"project":"Raresable","time":"10 PM UTC","count":"600%","price":"$600","extras":"If SOL is above $200"},{"id":7,"project":"Firetab","time":"6 PM UTC","count":"100%","price":"$85","extras":"If SOL is above $200"},{"id":8,"project":"TheEnd","time":"5 PM UTC","count":"85%","price":"$90","extras":"If SOL is above $200"}]}]');
;// CONCATENATED MODULE: ./src/pages/upcoming-projects.jsx







// Demo Data

async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const UpcomingProjects = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Upcoming Projects"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb/* default */.Z, {
                        pageTitle: "Upcoming NFT Projects",
                        currentPage: "Upcoming Projects"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(upcoming_projects, {
                        data: {
                            upcomingProjects: data_upcoming_projects_namespaceObject
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {
                space: 2
            })
        ]
    });
/* harmony default export */ const pages_upcoming_projects = (UpcomingProjects);


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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715,9783,6180,3578,5116], () => (__webpack_exec__(4126)));
module.exports = __webpack_exports__;

})();