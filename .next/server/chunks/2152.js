"use strict";
exports.id = 2152;
exports.ids = [2152];
exports.modules = {

/***/ 5721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3715);


const CommentForm = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "rn-comment-form pt--60",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "section-title",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "subtitle",
                            children: "Have a Comment?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "title",
                            children: "Leave a Reply"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    className: "mt--40",
                    action: "#",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-6 col-md-12 col-12",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rnform-group",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            placeholder: "Name"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rnform-group",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "email",
                                            placeholder: "Email"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rnform-group",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            placeholder: "Website"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6 col-md-12 col-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "rnform-group",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        placeholder: "Comment"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "blog-btn",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        color: "primary-alta",
                                        fullwidth: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "SEND MESSAGE"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentForm);


/***/ }),

/***/ 5823:
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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8663);






const BlogDetailsArea = ({ className , post  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("blog-details-area", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "blog-content-top",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "title",
                        children: post.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "date",
                        children: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(post.date).format("D MMM, YYYY")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bd-thumbnail",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "large-img mb--30",
                    children: post.image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "w-100",
                        src: post.image.src,
                        alt: "Blog Images",
                        width: 919,
                        height: 517,
                        priority: true
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "news-details",
                dangerouslySetInnerHTML: {
                    __html: post.content
                }
            })
        ]
    });
BlogDetailsArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    post: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        date: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        image: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ImageType */ .__,
        content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogDetailsArea);


/***/ }),

/***/ 3959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ comments_area)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/components/comment/index.jsx




const Comment = ({ image , username , time , text  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "single-comment",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "comment-author comment-img",
                children: [
                    image?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "comment-avatar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image.src,
                            alt: image?.alt || "Comment Image",
                            width: image?.width || 50,
                            height: image?.height || 50
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "m-b-20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "commenter",
                                children: username
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "time-spent",
                                children: [
                                    " ",
                                    time
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "comment-text",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: text
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "reply-edit",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "reply",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: "comment-reply-link",
                        href: "#!",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "rbt feather-corner-down-right"
                            }),
                            "Reply"
                        ]
                    })
                })
            })
        ]
    });
Comment.propTypes = {
    image: types/* ImageType.isRequired */.__.isRequired,
    username: (external_prop_types_default()).string.isRequired,
    time: (external_prop_types_default()).string.isRequired,
    text: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const comment = (Comment);

;// CONCATENATED MODULE: ./src/containers/comments-area/index.jsx


const CommentsArea = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "comments-wrapper pt--40",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "comments-area",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "trydo-blog-comment",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "comment-title mb--40",
                        children: "9 replies on “Have You Heard? Agency Is Your Best Grow”"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "comment-list",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "comment parent",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(comment, {
                                        image: {
                                            src: "/images/blog/comment/comment-01.png"
                                        },
                                        username: "Parent",
                                        time: "August 20, 2021 at 8:44 pm",
                                        text: "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "children",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "comment byuser ",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(comment, {
                                                image: {
                                                    src: "/images/blog/comment/comment-01.png"
                                                },
                                                username: "Parent",
                                                time: "August 20, 2021 at 8:44 pm",
                                                text: "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes."
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "comment",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(comment, {
                                    image: {
                                        src: "/images/blog/comment/comment-01.png"
                                    },
                                    username: "Parent",
                                    time: "August 20, 2021 at 8:44 pm",
                                    text: "A component that allows for easy creation of menu items, quickly creating paragraphs of “Lorem Ipsum” and pictures with custom sizes."
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
/* harmony default export */ const comments_area = (CommentsArea);


/***/ }),

/***/ 1481:
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
/* harmony import */ var _components_blog_blog_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5924);




const RelatedPostsArea = ({ space , className , relatedPosts , rootPage  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("row g-5", space === 1 && "pt--60", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "title",
                    children: "Related Post"
                })
            }),
            relatedPosts?.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-xl-4 col-lg-6 col-md-6 col-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_blog_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: post.title,
                        slug: post.slug,
                        category: post.category,
                        timeToRead: post.timeToRead,
                        image: post.image,
                        rootPage: rootPage
                    })
                }, post.slug))
        ]
    });
RelatedPostsArea.propTypes = {
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    relatedPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({})),
    rootPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
RelatedPostsArea.defaultProps = {
    space: 1,
    rootPage: "/blog"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedPostsArea);


/***/ })

};
;