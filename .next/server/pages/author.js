"use strict";
(() => {
var exports = {};
exports.id = 3066;
exports.ids = [3066];
exports.modules = {

/***/ 8796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ author),
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
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
// EXTERNAL MODULE: ./src/components/share-dropdown/index.jsx + 1 modules
var share_dropdown = __webpack_require__(8104);
// EXTERNAL MODULE: ./src/components/modals/share-modal/index.jsx
var share_modal = __webpack_require__(5975);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
;// CONCATENATED MODULE: ./src/containers/author-intro/index.jsx









const AuthorIntroArea = ({ className , space , data  })=>{
    const [isShareModalOpen, setIsShareModalOpen] = (0,external_react_.useState)(false);
    const shareModalHandler = ()=>setIsShareModalOpen((prev)=>!prev);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(share_modal/* default */.Z, {
                show: isShareModalOpen,
                handleModal: shareModalHandler
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rn-author-bg-area position-relative ptb--150",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/bg/bg-image-9.jpg",
                    alt: "Slider BG",
                    quality: 100,
                    priority: true,
                    fill: true,
                    sizes: "100vw",
                    style: {
                        objectFit: "cover"
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()("rn-author-area", space === 1 && "mb--30 mt_dec--120", className),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row padding-tb-50 align-items-center d-flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "author-wrapper",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "author-inner",
                                    children: [
                                        data?.image?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "user-thumbnail",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: data.image.src,
                                                alt: data.image?.alt || data.name,
                                                width: 140,
                                                height: 140
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "rn-author-info-content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "title",
                                                    children: data.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "https://twitter.com",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "social-follw",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "feather-twitter"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "user-name",
                                                            children: data.twitter
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "follow-area",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "follow followers",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    data.followers,
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "https://twitter.com",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        className: "color-body",
                                                                        children: "followers"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "follow following",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    data.following,
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "https://twitter.com",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        className: "color-body",
                                                                        children: "following"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "author-button-area",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "btn at-follw follow-button",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "feather-user-plus"
                                                                }),
                                                                "Follow"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "button",
                                                            className: "btn at-follw share-button",
                                                            onClick: shareModalHandler,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "feather-share-2"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "count at-follw",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(share_dropdown["default"], {})
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                                            path: "/edit-profile",
                                                            className: "btn at-follw follow-button edit-btn",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "feather feather-edit"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};
AuthorIntroArea.propTypes = {
    className: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1
    ]),
    data: external_prop_types_default().shape({
        name: (external_prop_types_default()).string,
        twitter: (external_prop_types_default()).string,
        followers: (external_prop_types_default()).string,
        following: (external_prop_types_default()).string,
        image: types/* ImageType */.__
    })
};
AuthorIntroArea.defaultProps = {
    space: 1
};
/* harmony default export */ const author_intro = (AuthorIntroArea);

// EXTERNAL MODULE: external "react-bootstrap/TabContent"
var TabContent_ = __webpack_require__(1130);
var TabContent_default = /*#__PURE__*/__webpack_require__.n(TabContent_);
// EXTERNAL MODULE: external "react-bootstrap/TabContainer"
var TabContainer_ = __webpack_require__(6348);
var TabContainer_default = /*#__PURE__*/__webpack_require__.n(TabContainer_);
// EXTERNAL MODULE: external "react-bootstrap/TabPane"
var TabPane_ = __webpack_require__(9722);
var TabPane_default = /*#__PURE__*/__webpack_require__.n(TabPane_);
// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(2540);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
// EXTERNAL MODULE: ./src/components/product/layout-01/index.jsx + 1 modules
var layout_01 = __webpack_require__(2102);
// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(8115);
;// CONCATENATED MODULE: ./src/containers/author-profile/index.jsx










const AuthorProfileArea = ({ className , data  })=>{
    const onSaleProducts = (0,methods.shuffleArray)(data.products).slice(0, 10);
    const ownedProducts = (0,methods.shuffleArray)(data.products).slice(0, 10);
    const createdProducts = (0,methods.shuffleArray)(data.products).slice(0, 10);
    const likedProducts = (0,methods.shuffleArray)(data.products).slice(0, 10);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-authore-profile-area", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx((TabContainer_default()), {
            defaultActiveKey: "nav-profile",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tab-wrapper-one",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                    className: "tab-button-one",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                                        className: "nav nav-tabs",
                                        id: "nav-tab",
                                        role: "tablist",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                as: "button",
                                                eventKey: "nav-home",
                                                children: "On Sale"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                as: "button",
                                                eventKey: "nav-profile",
                                                children: "Owned"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                as: "button",
                                                eventKey: "nav-contact",
                                                children: "Created"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                as: "button",
                                                eventKey: "nav-liked",
                                                children: "Liked"
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabContent_default()), {
                        className: "tab-content rn-bid-content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((TabPane_default()), {
                                className: "row d-flex g-5",
                                eventKey: "nav-home",
                                children: onSaleProducts?.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                                            overlay: true,
                                            placeBid: true,
                                            title: prod.title,
                                            slug: prod.slug,
                                            latestBid: prod.latestBid,
                                            price: prod.price,
                                            likeCount: prod.likeCount,
                                            auction_date: prod.auction_date,
                                            image: prod.images?.[0],
                                            authors: prod.authors,
                                            bitCount: prod.bitCount
                                        })
                                    }, prod.id))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((TabPane_default()), {
                                className: "row g-5 d-flex",
                                eventKey: "nav-profile",
                                children: ownedProducts?.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                                            overlay: true,
                                            placeBid: true,
                                            title: prod.title,
                                            slug: prod.slug,
                                            latestBid: prod.latestBid,
                                            price: prod.price,
                                            likeCount: prod.likeCount,
                                            auction_date: prod.auction_date,
                                            image: prod.images?.[0],
                                            authors: prod.authors,
                                            bitCount: prod.bitCount
                                        })
                                    }, prod.id))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((TabPane_default()), {
                                className: "row g-5 d-flex",
                                eventKey: "nav-contact",
                                children: createdProducts?.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                                            overlay: true,
                                            placeBid: true,
                                            title: prod.title,
                                            slug: prod.slug,
                                            latestBid: prod.latestBid,
                                            price: prod.price,
                                            likeCount: prod.likeCount,
                                            auction_date: prod.auction_date,
                                            image: prod.images?.[0],
                                            authors: prod.authors,
                                            bitCount: prod.bitCount
                                        })
                                    }, prod.id))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((TabPane_default()), {
                                className: "row g-5 d-flex",
                                eventKey: "nav-liked",
                                children: likedProducts?.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                                            overlay: true,
                                            placeBid: true,
                                            title: prod.title,
                                            slug: prod.slug,
                                            latestBid: prod.latestBid,
                                            price: prod.price,
                                            likeCount: prod.likeCount,
                                            auction_date: prod.auction_date,
                                            image: prod.images?.[0],
                                            authors: prod.authors,
                                            bitCount: prod.bitCount
                                        })
                                    }, prod.id))
                            })
                        ]
                    })
                ]
            })
        })
    });
};
AuthorProfileArea.propTypes = {
    className: (external_prop_types_default()).string,
    data: external_prop_types_default().shape({
        products: external_prop_types_default().arrayOf(types/* ProductType */.kv)
    })
};
/* harmony default export */ const author_profile = (AuthorProfileArea);

;// CONCATENATED MODULE: ./src/data/author.json
const author_namespaceObject = JSON.parse('{"name":"MRS SUNAYRA AHSAN","twitter":"it0bsession","followers":"186k","following":"156","image":{"src":"/images/slider/banner-06.png"}}');
// EXTERNAL MODULE: ./src/data/products.json
var products = __webpack_require__(2537);
;// CONCATENATED MODULE: ./src/pages/author.jsx







// Demo data


async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Author = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Author"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(author_intro, {
                        data: author_namespaceObject
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(author_profile, {
                        data: {
                            products: products
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {})
        ]
    });
/* harmony default export */ const author = (Author);


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

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 6348:
/***/ ((module) => {

module.exports = require("react-bootstrap/TabContainer");

/***/ }),

/***/ 1130:
/***/ ((module) => {

module.exports = require("react-bootstrap/TabContent");

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("react-bootstrap/TabPane");

/***/ }),

/***/ 4449:
/***/ ((module) => {

module.exports = require("react-countdown");

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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,6188,2102,2537,8104], () => (__webpack_exec__(8796)));
module.exports = __webpack_exports__;

})();