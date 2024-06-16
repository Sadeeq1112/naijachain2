"use strict";
exports.id = 2020;
exports.ids = [2020];
exports.modules = {

/***/ 4344:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _ui_error_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1449);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const NewsletterForm = ({ className  })=>{
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const onSubmit = (data)=>{
        // eslint-disable-next-line no-console
        console.log(data);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("subscribe-input-wrapper", className),
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "input-group",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "email",
                        id: "subscribeEmail",
                        className: "form-control bg-color--2",
                        placeholder: "Your email",
                        "aria-label": "Recipient's email",
                        ...register("subscribeEmail", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address"
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "input-group-append",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn btn-primary-alta btn-outline-secondary",
                            type: "submit",
                            children: "Subscribe"
                        })
                    })
                ]
            }),
            errors.subscribeEmail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_error_text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: errors.subscribeEmail?.message
            })
        ]
    });
};
NewsletterForm.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsletterForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1449:
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



const ErrorText = ({ className , children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("text-danger mt-2 d-inline-block", className),
        children: children
    });
ErrorText.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorText);


/***/ }),

/***/ 3960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_01)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
;// CONCATENATED MODULE: ./src/components/category-card/index.jsx




const CategoryCard = ({ className , icon , title , path  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
        className: external_clsx_default()("category-style-one", className),
        path: path,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "category-label",
                children: title
            })
        ]
    });
CategoryCard.propTypes = {
    className: (external_prop_types_default()).string,
    icon: (external_prop_types_default()).string.isRequired,
    title: (external_prop_types_default()).string.isRequired,
    path: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const category_card = (CategoryCard);

;// CONCATENATED MODULE: ./src/containers/category/layout-01/index.jsx




const CategoryArea = ({ className , space , data: { items  }  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("category-area", space === 1 && "pt--70", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row g-5",
                children: items?.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 col-xl-2 col-md-4 col-sm-6",
                        "data-sal-delay": 200 + i * 100,
                        "data-sal": "slide-up",
                        "data-sal-duration": "800",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(category_card, {
                            icon: item.icon,
                            title: item.title,
                            path: item.path
                        })
                    }, item.id))
            })
        })
    });
CategoryArea.propTypes = {
    className: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    data: external_prop_types_default().shape({
        items: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: (external_prop_types_default()).number.isRequired,
            icon: (external_prop_types_default()).string.isRequired,
            title: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired
        }))
    })
};
CategoryArea.defaultProps = {
    space: 1
};
/* harmony default export */ const layout_01 = (CategoryArea);


/***/ }),

/***/ 3994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_newsletter_form_form_01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4344);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_newsletter_form_form_01__WEBPACK_IMPORTED_MODULE_3__]);
_components_newsletter_form_form_01__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const NewsletterArea = ({ className , space , data: { section_title  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("nu-subscribe-area", space === 1 && "rn-section-gapTop", className),
        "data-sal-delay": "200",
        "data-sal": "slide-up",
        "data-sal-duration": "800",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-12",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "subscribe-wrapper_1 text-center",
                        children: [
                            section_title?.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "title mb--10",
                                children: section_title.title
                            }),
                            section_title?.subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "subtitle",
                                children: section_title.subtitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_newsletter_form_form_01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        ]
                    })
                })
            })
        })
    });
NewsletterArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
            title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
            subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
        })
    })
};
NewsletterArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsletterArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_01)
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react-portal"
var external_react_portal_ = __webpack_require__(4095);
;// CONCATENATED MODULE: ./src/components/ui/video-button/index.jsx






const ModalVideo = dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9485, 23)), {
    loadableGenerated: {
        modules: [
            "../components/ui/video-button/index.jsx -> " + "react-modal-video"
        ]
    },
    ssr: false
});
const VideoButton = ({ label , className , videoId , channel  })=>{
    const [isOpen, setOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                "aria-label": label,
                className: external_clsx_default()("video-play-button btn-large with-animation", className),
                onClick: ()=>setOpen(true),
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx(external_react_portal_.Portal, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ModalVideo, {
                    isOpen: isOpen,
                    videoId: videoId,
                    channel: channel,
                    onClose: ()=>setOpen(false)
                })
            })
        ]
    });
};
VideoButton.propTypes = {
    label: (external_prop_types_default()).string,
    className: (external_prop_types_default()).string,
    channel: (external_prop_types_default()).string,
    videoId: (external_prop_types_default()).string.isRequired
};
VideoButton.defaultProps = {
    channel: "youtube",
    label: "Play video"
};
/* harmony default export */ const video_button = (VideoButton);

// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/containers/video/layout-01/index.jsx






const VideoArea = ({ className , space , data: { section_title , images , video  }  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("vedio-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row mb--40",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "title-area text-center",
                        children: [
                            section_title?.title && /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "title mb--15",
                                children: section_title.title
                            }),
                            section_title?.subtitle && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "subtitle",
                                children: section_title.subtitle
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-12 position-relative",
                        children: [
                            video?.videoId && /*#__PURE__*/ jsx_runtime_.jsx(video_button, {
                                videoId: video.videoId
                            }),
                            images?.[0]?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "vedio-wrapper",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: images[0].src,
                                    alt: images[0]?.alt || "Video BG",
                                    width: 1368,
                                    height: 610
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
VideoArea.propTypes = {
    className: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    data: external_prop_types_default().shape({
        section_title: external_prop_types_default().shape({
            title: (external_prop_types_default()).string,
            subtitle: (external_prop_types_default()).string
        }),
        images: external_prop_types_default().arrayOf(types/* ImageType */.__),
        video: external_prop_types_default().shape({
            videoId: (external_prop_types_default()).string
        })
    })
};
VideoArea.defaultProps = {
    space: 1
};
/* harmony default export */ const layout_01 = (VideoArea);


/***/ })

};
;