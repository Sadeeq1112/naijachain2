"use strict";
(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521];
exports.modules = {

/***/ 4574:
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



const SectionTitle = ({ title , className , disableAnimation , ...restProps })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("title", className),
        "data-sal-delay": "150",
        "data-sal": !disableAnimation && "slide-up",
        "data-sal-duration": "800",
        ...restProps,
        dangerouslySetInnerHTML: {
            __html: title
        }
    });
SectionTitle.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    disableAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);


/***/ }),

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

/***/ 5987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_layout_02)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/section-title/layout-02/index.jsx
var layout_02 = __webpack_require__(4574);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
;// CONCATENATED MODULE: ./src/components/about-card/index.jsx




const AboutCard = ({ className , title , desc , path  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-about-card", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "title",
                    "data-sal": "slide-up",
                    "data-sal-duration": "800",
                    "data-sal-delay": "150",
                    dangerouslySetInnerHTML: {
                        __html: title
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "about-disc",
                    "data-sal": "slide-up",
                    "data-sal-duration": "800",
                    "data-sal-delay": "150",
                    children: desc
                }),
                path && /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                    path: path,
                    color: "primary-alta",
                    className: "sal-animate mt--20",
                    "data-sal": "slide-up",
                    "data-sal-duration": "800",
                    "data-sal-delay": "150",
                    children: "See Our Blog"
                })
            ]
        })
    });
AboutCard.propTypes = {
    className: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired,
    desc: (external_prop_types_default()).string.isRequired,
    path: (external_prop_types_default()).string
};
/* harmony default export */ const about_card = (AboutCard);

// EXTERNAL MODULE: ./src/components/ui/sticky/index.jsx
var sticky = __webpack_require__(4929);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/containers/about/layout-02/index.jsx








const AboutArea = ({ space , className , data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("rn-about-banner-area", space === 1 && "rn-section-gapTop", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mb--30",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: data?.section_title && /*#__PURE__*/ jsx_runtime_.jsx(layout_02/* default */.Z, {
                            className: "about-title-m",
                            ...data.section_title
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-fluid about-fluidimg ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "img-wrapper",
                        children: data?.image?.src && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: data.image.src,
                            alt: data.image?.alt || "Slider BG",
                            quality: 100,
                            priority: true,
                            fill: true,
                            sizes: "100vw",
                            style: {
                                objectFit: "cover"
                            }
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row g-5",
                    children: [
                        data?.items?.[0] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h--100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(sticky/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(about_card, {
                                        className: "mt_dec--50 widge-wrapper rbt-sticky-top-adjust",
                                        title: data.items[0].title,
                                        desc: data.items[0].description,
                                        path: data.items[0].path
                                    })
                                })
                            })
                        }),
                        data?.items?.[1] && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(about_card, {
                                className: "transparent-bg",
                                title: data.items[1].title,
                                desc: data.items[1].description,
                                path: data.items[1].path
                            })
                        })
                    ]
                })
            })
        ]
    });
AboutArea.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    className: (external_prop_types_default()).string,
    data: external_prop_types_default().shape({
        section_title: types/* SectionTitleType */.K0,
        image: types/* ImageType */.__,
        items: external_prop_types_default().arrayOf(types/* ItemType */.qG)
    })
};
AboutArea.defaultProps = {
    space: 1
};
/* harmony default export */ const about_layout_02 = (AboutArea);


/***/ }),

/***/ 9167:
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
/* harmony import */ var _components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4574);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4643);
/* harmony import */ var _components_blog_blog_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5924);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8663);







const BlogArea = ({ space , className , data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-blog-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row mb--50 align-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-md-6 col-sm-6 col-12",
                            children: data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                className: "mb--0",
                                ...data.section_title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "view-more-btn text-start text-sm-end",
                                "data-sal-delay": "150",
                                "data-sal": "slide-up",
                                "data-sal-duration": "800",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    className: "btn-transparent",
                                    path: "/blog",
                                    children: [
                                        "VIEW ALL",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "feather-arrow-right"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row g-5",
                    children: data?.posts?.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-3 col-lg-4 col-md-6 col-12",
                            "data-sal": "slide-up",
                            "data-sal-duration": "800",
                            "data-sal-delay": "150",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_blog_card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                title: post.title,
                                slug: post.slug,
                                category: post.category,
                                timeToRead: post.timeToRead,
                                image: post.image
                            })
                        }, post.slug))
                })
            ]
        })
    });
BlogArea.propTypes = {
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_6__/* .SectionTitleType */ .K0,
        posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({}))
    })
};
BlogArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogArea);


/***/ }),

/***/ 8401:
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
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3715);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8663);






const CTAArea = ({ space , className , data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-callto-action", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-fluid about-fluidimg-cta",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-lg-12 position-relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "about-image",
                            children: data?.image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: data.image.src,
                                alt: data.image.alt || "cta BG",
                                quality: 100,
                                fill: true,
                                sizes: "100vw",
                                priority: true,
                                style: {
                                    objectFit: "cover"
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "call-to-action-wrapper",
                            children: [
                                data?.headings?.map((heading)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        "data-sal": "slide-up",
                                        "data-sal-duration": "800",
                                        "data-sal-delay": "150",
                                        dangerouslySetInnerHTML: {
                                            __html: heading.content
                                        }
                                    }, heading.id)),
                                data?.texts?.map((text)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        "data-sal": "slide-up",
                                        "data-sal-duration": "800",
                                        "data-sal-delay": "150",
                                        dangerouslySetInnerHTML: {
                                            __html: text.content
                                        }
                                    }, text.id)),
                                data?.buttons && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "callto-action-btn-wrapper",
                                    "data-sal": "slide-up",
                                    "data-sal-duration": "800",
                                    "data-sal-delay": "150",
                                    children: data.buttons.map(({ id , content , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            ...rest,
                                            children: content
                                        }, id))
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
CTAArea.propTypes = {
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        texts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_5__/* .TextType */ .yG),
        headings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_5__/* .HeadingType */ .nQ),
        buttons: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ButtonType */ .L$),
        image: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ImageType */ .__
    })
};
CTAArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CTAArea);


/***/ }),

/***/ 8383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ funfact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: external "react-intersection-observer"
var external_react_intersection_observer_ = __webpack_require__(9785);
;// CONCATENATED MODULE: ./src/components/funfact/layout-01/index.jsx






const FunFact = ({ className , counter , title , suffix  })=>{
    const [focus, setFocus] = (0,external_react_.useState)(false);
    const visibleChangeHandler = (isVisible)=>{
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("single-counter-up text-center", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "number counter-odomitter-active",
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                    start: focus ? 0 : null,
                    end: counter,
                    duration: 5,
                    children: ({ countUpRef  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    ref: countUpRef
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_intersection_observer_.InView, {
                                    as: "span",
                                    onChange: (inView)=>visibleChangeHandler(inView),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "visually-hidden",
                                                children: "+"
                                            }),
                                            suffix && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: suffix
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                })
            }),
            title && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "botton-title",
                children: title
            })
        ]
    });
};
FunFact.propTypes = {
    className: (external_prop_types_default()).string,
    counter: (external_prop_types_default()).number.isRequired,
    title: (external_prop_types_default()).string,
    suffix: (external_prop_types_default()).string
};
/* harmony default export */ const layout_01 = (FunFact);

// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/containers/funfact/index.jsx





const FunfactArea = ({ space , className , data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-statistick-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row mb--30",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 text-center",
                        children: data?.section_title && /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: data.section_title.title
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row g-5",
                            children: data?.funfacts?.map((funfact)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01, {
                                        counter: funfact.counter,
                                        title: funfact.title,
                                        suffix: funfact.suffix
                                    })
                                }, funfact.id))
                        })
                    })
                })
            ]
        })
    });
FunfactArea.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    className: (external_prop_types_default()).string,
    data: external_prop_types_default().shape({
        section_title: types/* SectionTitleType */.K0,
        funfacts: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            counter: (external_prop_types_default()).number.isRequired,
            title: (external_prop_types_default()).string,
            suffix: (external_prop_types_default()).string
        }))
    })
};
FunfactArea.defaultProps = {
    space: 1
};
/* harmony default export */ const funfact = (FunfactArea);


/***/ }),

/***/ 5281:
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
/* harmony import */ var _components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4574);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8663);





const QuoteArea = ({ space , className , data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-about-Quote-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row g-5 d-flex align-items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "rn-about-title-wrapper",
                            children: data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                ...data.section_title
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "rn-about-wrapper",
                            "data-sal": "slide-up",
                            "data-sal-duration": "800",
                            "data-sal-delay": "150",
                            children: data?.texts?.map((text)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: text.content
                                }, text.id))
                        })
                    })
                ]
            })
        })
    });
QuoteArea.propTypes = {
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_4__/* .SectionTitleType */ .K0,
        texts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_4__/* .TextType */ .yG)
    })
};
QuoteArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuoteArea);


/***/ }),

/***/ 549:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3191);
/* harmony import */ var _layout_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3019);
/* harmony import */ var _layout_header_header_01__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8205);
/* harmony import */ var _layout_footer_footer_01__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5728);
/* harmony import */ var _containers_about_layout_02__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5987);
/* harmony import */ var _containers_quote_area__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5281);
/* harmony import */ var _containers_funfact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8383);
/* harmony import */ var _containers_cta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8401);
/* harmony import */ var _containers_blog_layout_01__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9167);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1145);
/* harmony import */ var _data_innerpages_about_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1913);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api__WEBPACK_IMPORTED_MODULE_12__]);
_lib_api__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













// Demo data

const About = ({ posts  })=>{
    const content = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_11__.normalizedData)(_data_innerpages_about_json__WEBPACK_IMPORTED_MODULE_13__?.content || []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                pageTitle: "About"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_header_01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_about_layout_02__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        data: content["about-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_quote_area__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        data: content["quote-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_funfact__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        data: content["funfact-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_cta__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        data: content["cta-section"]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_blog_layout_01__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        data: {
                            ...content["blog-section"],
                            posts
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer_footer_01__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
async function getStaticProps() {
    const posts = (0,_lib_api__WEBPACK_IMPORTED_MODULE_12__/* .getAllPosts */ .Bd)([
        "title",
        "date",
        "slug",
        "image",
        "category",
        "timeToRead"
    ]);
    return {
        props: {
            posts: posts.slice(0, 4),
            className: "template-color-1"
        }
    };
}
About.propTypes = {
    posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({}))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

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

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

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

/***/ }),

/***/ 8974:
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = JSON.parse('{"title":"about","content":[{"section":"about-section","section_title":{"title":"Empowering Local Artisans. <br> With Decentralized Marketplace"},"image":{"src":"/images/bg/felipepelaquim-tCuXRpV25Vs-unsplash (1).jpg"},"items":[{"id":1,"title":"Why We Do This","description":"We believe in the power of local Nigerian crafts and the artisans who create them. By providing a decentralized marketplace, we\'re helping these artisans reach a global audience and receive fair compensation for their work.","path":"/blog"},{"id":2,"title":"Helping You <br/> Grow At Every Stage.","description":"From setting up your wallet, creating your collection, adding your crafts, to selling them, we\'re here to support you at every stage of your journey."}]},{"section":"quote-section","section_title":{"title":"Create, Sell, and Collect Unique Nigerian Crafts at DMLA"},"texts":[{"id":1,"content":"The growth of decentralized marketplaces is tremendous, providing unique opportunities for local artisans to showcase their crafts to a global audience. Join us in this revolution and start selling your crafts today."}]},{"section":"funfact-section","section_title":{"title":"DMLA Statistics"},"funfacts":[{"id":1,"title":"All Crafts","counter":100},{"id":2,"title":"All Artisans","counter":500,"suffix":"+"},{"id":3,"title":"Total Earnings","counter":700},{"id":4,"title":"Top Sellers","counter":900,"suffix":"+"}]},{"section":"cta-section","headings":[{"id":1,"content":"Discover rare Nigerian crafts <br/> and start your collection"}],"texts":[{"id":1,"content":"Join the DMLA community and start discovering unique Nigerian crafts. Whether you\'re an artisan or a collector, there\'s something for everyone here."}],"buttons":[{"id":1,"path":"/create","content":"Create"},{"id":2,"path":"/contact","content":"Contact Us","color":"primary-alta"}],"image":{"src":"/images/bg/jorge-zapata-4nXkhLCrkLo-unsplash (1).jpg"}},{"section":"blog-section","section_title":{"title":"Our Recent Blog"}}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715,9783,6180,5173], () => (__webpack_exec__(549)));
module.exports = __webpack_exports__;

})();