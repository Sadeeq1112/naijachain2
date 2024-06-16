"use strict";
(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335];
exports.modules = {

/***/ 3968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3715);
/* harmony import */ var _ui_error_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1449);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ContactForm = ()=>{
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
        mode: "onChange"
    });
    const [serverState, setServerState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form)=>{
        setServerState({
            submitting: false,
            status: {
                ok,
                msg
            }
        });
        if (ok) {
            form.reset();
        }
    };
    const onSubmit = (data, e)=>{
        const form = e.target;
        setServerState({
            submitting: true
        });
        axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: "post",
            url: "https://getform.io/f/7a6695a7-c8e3-442c-bc2f-d46d3b9a535e",
            data
        }).then((_res)=>{
            handleServerResponse(true, "Thanks! for being with us", form);
        }).catch((err)=>{
            handleServerResponse(false, err.response.data.error, form);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "form-wrapper-one registration-area",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb--30",
                children: "Contact Us"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "rwt-dynamic-form",
                id: "contact-form",
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "contact-name",
                                className: "form-label",
                                children: "Your Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "contact-name",
                                type: "text",
                                ...register("contactName", {
                                    required: "Name is required"
                                })
                            }),
                            errors.contactName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_error_text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: errors.contactName?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "contact-email",
                                className: "form-label",
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "contact-email",
                                type: "email",
                                ...register("contactEmail", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "invalid email address"
                                    }
                                })
                            }),
                            errors.contactEmail && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_error_text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: errors.contactEmail?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "subject",
                                className: "form-label",
                                children: "Subject"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "subject",
                                type: "text",
                                ...register("subject", {
                                    required: "Subject is required"
                                })
                            }),
                            errors.subject && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_error_text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: errors.subject?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "contact-message",
                                className: "form-label",
                                children: "Write Message"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                id: "contact-message",
                                rows: "3",
                                ...register("contactMessage", {
                                    required: "Message is required"
                                })
                            }),
                            errors.contactMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_error_text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: errors.contactMessage?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-5 rn-check-box",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "condition",
                                type: "checkbox",
                                className: "rn-check-box-input",
                                ...register("condition", {
                                    required: "Condition is required"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "condition",
                                className: "rn-check-box-label",
                                children: "Allow to all tearms & condition"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            errors.condition && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_error_text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: errors.condition?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        type: "submit",
                        size: "medium",
                        children: "Send Message"
                    }),
                    serverState.status && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `mt-4 font-14 ${!serverState.status.ok ? "text-danger" : "text-success"}`,
                        children: serverState.status.msg
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

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

/***/ 3590:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_contact_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3968);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_contact_form__WEBPACK_IMPORTED_MODULE_4__]);
_components_contact_form__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ContactFormArea = ({ space , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("login-area message-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row g-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6",
                        "data-sal": "slide-up",
                        "data-sal-delay": "150",
                        "data-sal-duration": "800",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "connect-thumbnail",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "left-image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: "/images/contact/contact1.png",
                                    alt: "Nft_Profile",
                                    width: 669,
                                    height: 686
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6",
                        "data-sal": "slide-up",
                        "data-sal-delay": "200",
                        "data-sal-duration": "800",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_contact_form__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    })
                ]
            })
        })
    });
ContactFormArea.propTypes = {
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
ContactFormArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactFormArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contact_top)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/address-box/index.jsx



const AddressBox = ({ className , icon , title , phoneNumbers , emails , address  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("rn-address", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "icon",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: icon
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "title",
                        children: title
                    }),
                    phoneNumbers?.map((phone)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `tel:${phone.replace(/\s/g, "")}`,
                                children: phone
                            })
                        }, phone)),
                    emails?.map((email)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `mailto:${email}`,
                                children: email
                            })
                        }, email)),
                    address && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        dangerouslySetInnerHTML: {
                            __html: address
                        }
                    })
                ]
            })
        ]
    });
AddressBox.propTypes = {
    className: (external_prop_types_default()).string,
    icon: (external_prop_types_default()).string.isRequired,
    title: (external_prop_types_default()).string.isRequired,
    phoneNumbers: external_prop_types_default().arrayOf((external_prop_types_default()).string),
    emails: external_prop_types_default().arrayOf((external_prop_types_default()).string),
    address: (external_prop_types_default()).string
};
/* harmony default export */ const address_box = (AddressBox);

;// CONCATENATED MODULE: ./src/containers/contact-top/index.jsx




const ContactTopArea = ({ space , className  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-contact-top-area bg_color--5", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row g-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        "data-sal": "slide-up",
                        "data-sal-delay": "150",
                        "data-sal-duration": "800",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "section-title mb--30 text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "title",
                                    children: "Quick Contact Address"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "description",
                                    children: [
                                        "There are many variations of passages of Lorem Ipsum available, ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " but the majority have suffered alteration."
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row g-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 col-sm-6 col-12",
                            "data-sal": "slide-up",
                            "data-sal-delay": "150",
                            "data-sal-duration": "800",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(address_box, {
                                icon: "feather-headphones",
                                title: "Contact Phone Number",
                                phoneNumbers: [
                                    "+444 555 666 777",
                                    "+222 222 222 333"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 col-sm-6 col-12",
                            "data-sal": "slide-up",
                            "data-sal-delay": "200",
                            "data-sal-duration": "800",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(address_box, {
                                icon: "feather-mail",
                                title: "Our Email Address",
                                emails: [
                                    "admin@gmail.com",
                                    "example@gmail.com"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 col-sm-6 col-12",
                            "data-sal": "slide-up",
                            "data-sal-delay": "250",
                            "data-sal-duration": "800",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(address_box, {
                                icon: "feather-map-pin",
                                title: "Our Location",
                                address: "5678 Bangla Main Road, cities 580 <br> GBnagla, example 54786"
                            })
                        })
                    ]
                })
            ]
        })
    });
ContactTopArea.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    className: (external_prop_types_default()).string
};
ContactTopArea.defaultProps = {
    space: 1
};
/* harmony default export */ const contact_top = (ContactTopArea);


/***/ }),

/***/ 9611:
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



const GoogleMapArea = ({ space , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-contact-map-area position-relative", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row g-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12",
                    "data-sal": "slide-up",
                    "data-sal-delay": "150",
                    "data-sal-duration": "800",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "connect-thumbnail",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                            title: "Google Map",
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235495.62780269101!2d-73.932551722484!3d41.33466214858558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sbd!4v1637254792714!5m2!1sen!2sbd",
                            height: "550",
                            style: {
                                border: 0
                            },
                            allowFullScreen: true,
                            loading: "lazy"
                        })
                    })
                })
            })
        })
    });
GoogleMapArea.propTypes = {
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
GoogleMapArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleMapArea);


/***/ }),

/***/ 8264:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3191);
/* harmony import */ var _layout_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3019);
/* harmony import */ var _layout_header_header_01__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8205);
/* harmony import */ var _layout_footer_footer_01__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5728);
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3578);
/* harmony import */ var _containers_contact_top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3036);
/* harmony import */ var _containers_contact_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var _containers_google_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_contact_form__WEBPACK_IMPORTED_MODULE_7__]);
_containers_contact_form__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Contact = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Contact"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_header_header_01__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        pageTitle: "Contact With Us",
                        currentPage: "Contact With Us"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_contact_top__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_contact_form__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_google_map__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_footer_footer_01__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715,9783,6180,3578], () => (__webpack_exec__(8264)));
module.exports = __webpack_exports__;

})();