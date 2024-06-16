"use strict";
exports.id = 2102;
exports.ids = [2102];
exports.modules = {

/***/ 2102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_01)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
// EXTERNAL MODULE: ./src/components/ui/client-avatar/index.jsx
var client_avatar = __webpack_require__(2542);
;// CONCATENATED MODULE: ./src/components/product-bid/index.jsx


const ProductBid = ({ price , likeCount  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bid-react-area",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "last-bid",
                children: [
                    price.amount,
                    price.currency
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "react-area",
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
            })
        ]
    });
ProductBid.propTypes = {
    price: external_prop_types_default().shape({
        amount: (external_prop_types_default()).number.isRequired,
        currency: (external_prop_types_default()).string.isRequired
    }).isRequired,
    likeCount: (external_prop_types_default()).number.isRequired
};
/* harmony default export */ const product_bid = (ProductBid);

// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
// EXTERNAL MODULE: ./src/components/modals/placebid-modal/index.jsx
var placebid_modal = __webpack_require__(3709);
;// CONCATENATED MODULE: ./src/components/product/layout-01/index.jsx












const CountdownTimer = dynamic_default()(()=>__webpack_require__.e(/* import() */ 8553).then(__webpack_require__.bind(__webpack_require__, 1840)), {
    loadableGenerated: {
        modules: [
            "../components/product/layout-01/index.jsx -> " + "@ui/countdown/layout-01"
        ]
    },
    ssr: false
});
const ShareDropdown = dynamic_default()(()=>__webpack_require__.e(/* import() */ 8104).then(__webpack_require__.bind(__webpack_require__, 8104)), {
    loadableGenerated: {
        modules: [
            "../components/product/layout-01/index.jsx -> " + "@components/share-dropdown"
        ]
    },
    ssr: false
});
const Product = ({ overlay , title , slug , latestBid , price , likeCount , auction_date , image , bitCount , authors , placeBid , disableShareDropdown  })=>{
    const [showBidModal, setShowBidModal] = (0,external_react_.useState)(false);
    const handleBidModal = ()=>{
        setShowBidModal((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_clsx_default()("product-style-one", !overlay && "no-overlay", placeBid && "with-placeBid"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card-thumbnail",
                        children: [
                            image?.src && /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                path: `/product/${slug}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: image.src,
                                    alt: image?.alt || "NFT_portfolio",
                                    width: 533,
                                    height: 533
                                })
                            }),
                            auction_date && /*#__PURE__*/ jsx_runtime_.jsx(CountdownTimer, {
                                date: auction_date
                            }),
                            placeBid && /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                onClick: handleBidModal,
                                size: "small",
                                children: "Place Bid"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-share-wrapper",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "profile-share",
                                children: [
                                    authors?.map((client)=>/*#__PURE__*/ jsx_runtime_.jsx(client_avatar/* default */.Z, {
                                            slug: client.slug,
                                            name: client.name,
                                            image: client.image
                                        }, client.name)),
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
                            !disableShareDropdown && /*#__PURE__*/ jsx_runtime_.jsx(ShareDropdown, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                        path: `/product/${slug}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "product-name",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "latest-bid",
                        children: [
                            "Highest bid ",
                            latestBid
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(product_bid, {
                        price: price,
                        likeCount: likeCount
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(placebid_modal/* default */.Z, {
                show: showBidModal,
                handleModal: handleBidModal
            })
        ]
    });
};
Product.propTypes = {
    overlay: (external_prop_types_default()).bool,
    title: (external_prop_types_default()).string.isRequired,
    slug: (external_prop_types_default()).string.isRequired,
    latestBid: (external_prop_types_default()).string.isRequired,
    price: external_prop_types_default().shape({
        amount: (external_prop_types_default()).number.isRequired,
        currency: (external_prop_types_default()).string.isRequired
    }).isRequired,
    likeCount: (external_prop_types_default()).number.isRequired,
    auction_date: (external_prop_types_default()).string,
    image: types/* ImageType.isRequired */.__.isRequired,
    authors: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        name: (external_prop_types_default()).string.isRequired,
        slug: (external_prop_types_default()).string.isRequired,
        image: types/* ImageType.isRequired */.__.isRequired
    })),
    bitCount: (external_prop_types_default()).number,
    placeBid: (external_prop_types_default()).bool,
    disableShareDropdown: (external_prop_types_default()).bool
};
Product.defaultProps = {
    overlay: false
};
/* harmony default export */ const layout_01 = (Product);


/***/ })

};
;