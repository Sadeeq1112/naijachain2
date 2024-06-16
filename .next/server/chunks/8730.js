"use strict";
exports.id = 8730;
exports.ids = [8730];
exports.modules = {

/***/ 9182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4643);
/* harmony import */ var _ui_client_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2542);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3715);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8663);








const relativeTime = __webpack_require__(4195);
dayjs__WEBPACK_IMPORTED_MODULE_3___default().extend(relativeTime);
const CommunityCard = ({ thumbnail , title , path , published_at , tags , total_comments , likes , views , excerpt  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "single-community-box",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "community-bx-header",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "header-left",
                        children: [
                            thumbnail?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "thumbnail",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: thumbnail.src,
                                    alt: thumbnail?.alt || "NFT-thumbnail",
                                    width: 73,
                                    height: 73
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "name-date",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        path: "#!",
                                        className: "name",
                                        children: "Elijavd May"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "date",
                                        children: dayjs__WEBPACK_IMPORTED_MODULE_3___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(published_at))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "header-right",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-share-wrapper",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "profile-share",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_client_avatar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        slug: "/",
                                        name: "Owener:Mr.Jone-lee",
                                        image: {
                                            src: "/images/client/client-1.png",
                                            width: 43,
                                            height: 43
                                        },
                                        className: "large"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_client_avatar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        slug: "/",
                                        name: "Owener:Mr.Jone-lee",
                                        image: {
                                            src: "/images/client/client-1.png",
                                            width: 43,
                                            height: 43
                                        },
                                        className: "large"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        className: "more-author-text",
                                        path: "#!",
                                        children: "20+ People."
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "community-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "title",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            path: path,
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "desc",
                        children: excerpt
                    }),
                    thumbnail?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "community-img",
                        src: thumbnail.src,
                        alt: thumbnail?.alt || "Nft_Community",
                        width: 860,
                        height: 210
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tags",
                        children: tags?.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    "#",
                                    tag
                                ]
                            }, tag))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hr"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rn-community-footer",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "community-reaction",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        path: path,
                                        className: "likes",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "feather-heart"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: likes
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        path: path,
                                        className: "comments",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "feather-message-circle"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: total_comments
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "views",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "feather-eye"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    views,
                                                    " Views"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "time",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "feather-clock"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: dayjs__WEBPACK_IMPORTED_MODULE_3___default()().to(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(published_at))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "answer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    path: path,
                                    color: "primary-alta",
                                    shape: "ellipse",
                                    size: "medium",
                                    children: "Answer"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
CommunityCard.propTypes = {
    thumbnail: _utils_types__WEBPACK_IMPORTED_MODULE_7__/* .ImageType */ .__,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    published_at: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
    total_comments: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    likes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    views: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    excerpt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommunityCard);


/***/ }),

/***/ 2542:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4643);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8663);






const ClientAvatar = ({ slug , name , image , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        path: slug,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("avatar", className),
        "data-tooltip": name,
        children: image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: image.src,
            alt: image?.alt || name,
            width: image?.width || 30,
            height: image?.height || 30
        })
    });
ClientAvatar.propTypes = {
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    image: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ImageType.isRequired */ .__.isRequired,
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientAvatar);


/***/ }),

/***/ 1423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ForumTop = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "forum-top rn-section-gap bg-color--1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row g-5 align-items-center d-flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-6 offset-lg-3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "forum-search",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "input-group",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    placeholder: "Search Hear...",
                                    "aria-label": "Recipient's username"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "input-group-append",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn btn-primary-alta btn-outline-secondary",
                                        type: "button",
                                        children: "Search Hear"
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForumTop);


/***/ }),

/***/ 755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3715);
/* harmony import */ var _widgets_category_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1085);
/* harmony import */ var _widgets_tag_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2442);




const ForumSidebar = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                className: "add-community",
                path: "#",
                children: [
                    "Start New Topic ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "feather-plus"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets_category_widget__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                categories: [
                    {
                        title: "category",
                        slug: "cat"
                    }
                ],
                rootPage: "/",
                className: "mt--30"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets_tag_widget__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                tags: [
                    {
                        title: "tags",
                        slug: "cat"
                    }
                ],
                rootPage: "/"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForumSidebar);


/***/ })

};
;