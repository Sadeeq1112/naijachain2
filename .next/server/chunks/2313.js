"use strict";
exports.id = 2313;
exports.ids = [2313];
exports.modules = {

/***/ 2313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4643);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3715);
/* harmony import */ var _components_modals_placebid_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3709);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8663);










const Countdown = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 908).then(__webpack_require__.bind(__webpack_require__, 908)), {
    loadableGenerated: {
        modules: [
            "../components/product-details/place-bet.jsx -> " + "@ui/countdown/layout-02"
        ]
    },
    ssr: false
});
const PlaceBet = ({ highest_bid , auction_date , btnColor , className  })=>{
    const [showBidModal, setShowBidModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleBidModal = ()=>{
        setShowBidModal((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("place-bet-area", className),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rn-bet-create",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bid-list winning-bid",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "title",
                                        children: "Winning bit"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "top-seller-inner-one",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "top-seller-wrapper",
                                            children: [
                                                highest_bid.bidder?.image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "thumbnail",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        path: highest_bid.bidder.slug,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: highest_bid.bidder.image.src,
                                                            alt: "Nft_Profile",
                                                            width: 44,
                                                            height: 44
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "top-seller-content",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "heighest-bid",
                                                            children: [
                                                                "Heighest bid",
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    path: highest_bid.bidder.slug,
                                                                    children: highest_bid.bidder.name
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "count-number",
                                                            children: highest_bid.amount
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            auction_date && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bid-list left-bid",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "title",
                                        children: "Auction has ended"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Countdown, {
                                        className: "mt--15",
                                        date: auction_date
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        color: btnColor || "primary-alta",
                        className: "mt--30",
                        onClick: handleBidModal,
                        children: "Place a Bid"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_modals_placebid_modal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                show: showBidModal,
                handleModal: handleBidModal
            })
        ]
    });
};
PlaceBet.propTypes = {
    highest_bid: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
        amount: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
        bidder: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
            name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
            image: _utils_types__WEBPACK_IMPORTED_MODULE_9__/* .ImageType */ .__,
            slug: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
        })
    }),
    auction_date: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    btnColor: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceBet);


/***/ })

};
;