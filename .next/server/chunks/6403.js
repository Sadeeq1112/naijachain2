"use strict";
exports.id = 6403;
exports.ids = [6403];
exports.modules = {

/***/ 6403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_02)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(2540);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
// EXTERNAL MODULE: ./src/components/ui/client-avatar/index.jsx
var client_avatar = __webpack_require__(2542);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/components/share-dropdown/index.jsx + 1 modules
var share_dropdown = __webpack_require__(8104);
// EXTERNAL MODULE: ./src/components/modals/placebid-modal/index.jsx
var placebid_modal = __webpack_require__(3709);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/components/product/layout-03/index.jsx











const Product = ({ title , slug , price , latestBid , image , authors , bitCount , likeCount , className  })=>{
    const [showBidModal, setShowBidModal] = (0,external_react_.useState)(false);
    const handleBidModal = ()=>{
        setShowBidModal((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()("lg-product-wrapper colum-2 two-colum-parent-product col-lg-6", className),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inner",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg-left-content",
                            children: [
                                image?.src && /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                    path: `/product/${slug}`,
                                    className: "thumbnail",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: image.src,
                                        alt: image?.alt || "NFT_portfolio",
                                        width: image?.width ? image.width : 635,
                                        height: image?.height ? image.height : 635
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "read-content",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-share-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "profile-share",
                                                    children: [
                                                        authors?.map((author)=>/*#__PURE__*/ jsx_runtime_.jsx(client_avatar/* default */.Z, {
                                                                slug: author.slug,
                                                                name: author.name,
                                                                image: author.image
                                                            }, author.name)),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                                                            className: "more-author-text",
                                                            path: `/product/${slug}`,
                                                            children: [
                                                                bitCount,
                                                                "+ Place Bit."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "last-bid",
                                                    children: [
                                                        price.amount,
                                                        price.currency
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                            path: `/product/${slug}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "title",
                                                children: title
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "latest-bid",
                                            children: latestBid
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "share-wrapper d-flex",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "react-area mr--15",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            viewBox: "0 0 17 16",
                                                            fill: "none",
                                                            width: "16",
                                                            height: "16",
                                                            className: "sc-bdnxRM sc-hKFxyN kBvkOu",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "number",
                                                            children: likeCount
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(share_dropdown["default"], {})
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                            color: "primary-alta",
                            size: "medium",
                            className: "bid-btn",
                            onClick: handleBidModal,
                            children: "Place a Bid"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(placebid_modal/* default */.Z, {
                show: showBidModal,
                handleModal: handleBidModal
            })
        ]
    });
};
Product.propTypes = {
    className: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired,
    slug: (external_prop_types_default()).string.isRequired,
    price: external_prop_types_default().shape({
        amount: (external_prop_types_default()).number.isRequired,
        currency: (external_prop_types_default()).string.isRequired
    }).isRequired,
    latestBid: (external_prop_types_default()).string.isRequired,
    image: types/* ImageType.isRequired */.__.isRequired,
    authors: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        name: (external_prop_types_default()).string.isRequired,
        slug: (external_prop_types_default()).string.isRequired,
        image: types/* ImageType.isRequired */.__.isRequired
    })),
    bitCount: (external_prop_types_default()).number,
    likeCount: (external_prop_types_default()).number
};
Product.defaultProps = {
    likeCount: 0
};
/* harmony default export */ const layout_03 = (Product);

// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(8115);
;// CONCATENATED MODULE: ./src/containers/product/layout-02/index.jsx








const TabContent = dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1130, 23)), {
    loadableGenerated: {
        modules: [
            "../containers/product/layout-02/index.jsx -> " + "react-bootstrap/TabContent"
        ]
    },
    ssr: false
});
const TabContainer = dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6348, 23)), {
    loadableGenerated: {
        modules: [
            "../containers/product/layout-02/index.jsx -> " + "react-bootstrap/TabContainer"
        ]
    },
    ssr: false
});
const TabPane = dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9722, 23)), {
    loadableGenerated: {
        modules: [
            "../containers/product/layout-02/index.jsx -> " + "react-bootstrap/TabPane"
        ]
    },
    ssr: false
});
const ProductArea = ({ space , className , data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-product-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-lg-12",
                    children: [
                        data?.section_title && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-center mb--50",
                            children: data.section_title.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabContainer, {
                            defaultActiveKey: "nav-home",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                                    className: "product-tab-nav",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "nav",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                as: "button",
                                                eventKey: "nav-home",
                                                children: "All Product"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                as: "button",
                                                eventKey: "nav-profile",
                                                children: "Newest Item"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                                as: "button",
                                                eventKey: "nav-contact",
                                                children: "Rare Reals"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabContent, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(TabPane, {
                                            eventKey: "nav-home",
                                            className: "lg-product_tab-pane lg-product-col-2",
                                            children: (0,methods.shuffleArray)(data?.products)?.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx(layout_03, {
                                                    title: prod.title,
                                                    slug: prod.slug,
                                                    latestBid: prod.latestBid,
                                                    price: prod.price,
                                                    likeCount: prod.likeCount,
                                                    auction_date: prod.auction_date,
                                                    image: prod.images?.[0],
                                                    authors: prod.authors,
                                                    bitCount: prod.bitCount
                                                }, prod.id))
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TabPane, {
                                            eventKey: "nav-profile",
                                            className: "lg-product_tab-pane lg-product-col-2",
                                            children: (0,methods.shuffleArray)(data?.products)?.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx(layout_03, {
                                                    title: prod.title,
                                                    slug: prod.slug,
                                                    latestBid: prod.latestBid,
                                                    price: prod.price,
                                                    likeCount: prod.likeCount,
                                                    auction_date: prod.auction_date,
                                                    image: prod.images?.[0],
                                                    authors: prod.authors,
                                                    bitCount: prod.bitCount
                                                }, prod.id))
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(TabPane, {
                                            eventKey: "nav-contact",
                                            className: "lg-product_tab-pane lg-product-col-2",
                                            children: (0,methods.shuffleArray)(data?.products)?.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx(layout_03, {
                                                    title: prod.title,
                                                    slug: prod.slug,
                                                    latestBid: prod.latestBid,
                                                    price: prod.price,
                                                    likeCount: prod.likeCount,
                                                    auction_date: prod.auction_date,
                                                    image: prod.images?.[0],
                                                    authors: prod.authors,
                                                    bitCount: prod.bitCount
                                                }, prod.id))
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
ProductArea.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    className: (external_prop_types_default()).string,
    data: external_prop_types_default().shape({
        section_title: types/* SectionTitleType */.K0,
        products: external_prop_types_default().arrayOf(types/* ProductType */.kv)
    })
};
ProductArea.defaultProps = {
    space: 1
};
/* harmony default export */ const layout_02 = (ProductArea);


/***/ })

};
;