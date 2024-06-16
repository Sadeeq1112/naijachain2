"use strict";
exports.id = 4890;
exports.ids = [4890];
exports.modules = {

/***/ 6099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_nice_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(388);
/* harmony import */ var _components_top_seller_layout_01__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(491);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8663);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_7__);








const CreatorArea = ({ className , space , data  })=>{
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1 day");
    const [creators, setCreators] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const changeHandler = (item)=>{
        setCurrent(item.value);
    };
    const filterHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const allSellers = data.creators;
        const filterdSellers = allSellers.filter((seller)=>(0,_utils_methods__WEBPACK_IMPORTED_MODULE_7__.slugify)(seller.top_since) === (0,_utils_methods__WEBPACK_IMPORTED_MODULE_7__.slugify)(current));
        setCreators(filterdSellers);
    }, [
        current,
        data.creators
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        filterHandler();
    }, [
        filterHandler
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("rn-creators-area right-fix-notice creators", space === 1 && "mt--30", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h--100",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "notice-heading",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: "Top Artists"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_nice_select__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rn-notification-wrapper creators",
                children: creators?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_top_seller_layout_01__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        name: item.name,
                        slug: item.slug,
                        total_sale: item.total_sale,
                        image: item.image,
                        isVarified: item.isVarified,
                        followBtn: true
                    }, item.id))
            })
        ]
    });
};
CreatorArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([
        1,
        2
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        creators: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_6__/* .SellerType */ .Df)
    })
};
CreatorArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatorArea);


/***/ }),

/***/ 9821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ notification)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/components/ui/nice-select/index.jsx
var nice_select = __webpack_require__(388);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
;// CONCATENATED MODULE: ./src/components/notice-card/index.jsx





const NoticeCard = ({ title , description , path , date , time , image  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "single-notice",
        children: [
            image?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "thumbnail",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                    path: path,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: image.src,
                        alt: image?.alt || "Nft_Profile",
                        width: 44,
                        height: 44
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                        path: path,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "notice-time",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: date
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: time
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                        path: path,
                        color: "primary-alta",
                        size: "small",
                        children: "Check Out"
                    })
                ]
            })
        ]
    });
NoticeCard.propTypes = {
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).string.isRequired,
    path: (external_prop_types_default()).string.isRequired,
    date: (external_prop_types_default()).string.isRequired,
    time: (external_prop_types_default()).string.isRequired,
    image: external_prop_types_default().shape({
        src: external_prop_types_default().oneOfType([
            external_prop_types_default().shape(),
            (external_prop_types_default()).string
        ]).isRequired,
        alt: (external_prop_types_default()).string
    }).isRequired
};
/* harmony default export */ const notice_card = (NoticeCard);

// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/containers/notification/index.jsx






const NotificationArea = ({ data  })=>{
    const [current, setCurrent] = (0,external_react_.useState)("newest");
    const [notifications, setNotifications] = (0,external_react_.useState)([]);
    const changeHandler = (item)=>{
        setCurrent(item.value);
    };
    const filterHandler = (0,external_react_.useCallback)(()=>{
        const allNotifications = data.notifications;
        const filterdSellers = allNotifications.filter((noti)=>noti.type === current);
        setNotifications(filterdSellers);
    }, [
        current,
        data.notifications
    ]);
    (0,external_react_.useEffect)(()=>{
        filterHandler();
    }, [
        filterHandler
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rn-notification-area right-fix-notice",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h--100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "notice-heading",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "Notification"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(nice_select/* default */.Z, {
                            options: [
                                {
                                    value: "newest",
                                    text: "Newest"
                                },
                                {
                                    value: "tranding",
                                    text: "Tranding"
                                },
                                {
                                    value: "saved",
                                    text: "Saved"
                                },
                                {
                                    value: "delated",
                                    text: "Delated"
                                }
                            ],
                            defaultCurrent: 0,
                            name: "sellerSort",
                            onChange: changeHandler
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rn-notification-wrapper",
                children: notifications?.map((noti)=>/*#__PURE__*/ jsx_runtime_.jsx(notice_card, {
                        title: noti.title,
                        path: noti.path,
                        description: noti.description,
                        date: noti.date,
                        time: noti.time,
                        image: noti.image
                    }, noti.id))
            })
        ]
    });
};
NotificationArea.propTypes = {
    data: external_prop_types_default().shape({
        notifications: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: types/* IDType */.iJ,
            title: (external_prop_types_default()).string,
            description: (external_prop_types_default()).string,
            path: (external_prop_types_default()).string,
            date: (external_prop_types_default()).string,
            time: (external_prop_types_default()).string,
            image: types/* ImageType */.__
        }))
    })
};
/* harmony default export */ const notification = (NotificationArea);


/***/ }),

/***/ 4235:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":2,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 1221 ETH","date":"15 July","time":"10:32 PM","image":{"src":"/images/client/client-4.png"},"type":"newest"},{"id":3,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 1221 ETH","date":"16 July","time":"10:50 PM","image":{"src":"/images/client/client-5.png"},"type":"tranding"},{"id":4,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 1240 ETH","date":"17 July","time":"11:50 PM","image":{"src":"/images/client/client-6.png"},"type":"newest"},{"id":5,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 1340 ETH","date":"17 July","time":"09:50 AM","image":{"src":"/images/client/client-7.png"},"type":"tranding"},{"id":6,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 1040 ETH","date":"20 FEB","time":"10:50 AM","image":{"src":"/images/client/client-8.png"},"type":"newest"},{"id":7,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 910 ETH","date":"21 FEB","time":"09:10 AM","image":{"src":"/images/client/client-9.png"},"type":"saved"},{"id":8,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 550 ETH","date":"21 JAN","time":"11:10 PM","image":{"src":"/images/client/client-10.png"},"type":"newest"},{"id":9,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 222 ETH","date":"15 JAN","time":"05:10 AM","image":{"src":"/images/client/client-11.png"},"type":"saved"},{"id":10,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 890 ETH","date":"13 FEB","time":"04:15 PM","image":{"src":"/images/client/client-1.png"},"type":"newest"},{"id":11,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 910 ETH","date":"21 FEB","time":"09:10 AM","image":{"src":"/images/client/client-2.png"},"type":"tranding"},{"id":12,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 120 ETH","date":"21 FEB","time":"05:10 AM","image":{"src":"/images/client/client-2.png"},"type":"delated"},{"id":13,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 1210 ETH","date":"21 FEB","time":"10:10 PM","image":{"src":"/images/client/client-3.png"},"type":"tranding"},{"id":14,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 1910 ETH","date":"25 FEB","time":"08:10 PM","image":{"src":"/images/client/client-4.png"},"type":"delated"},{"id":15,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 555 ETH","date":"21 FEB","time":"11:15 AM","image":{"src":"/images/client/client-5.png"},"type":"saved"},{"id":16,"title":"Sold Darken Forever Quick","path":"/connect","description":"Has been sold by 750 ETH","date":"21 FEB","time":"8:10 AM","image":{"src":"/images/client/client-6.png"},"type":"delated"}]');

/***/ })

};
;