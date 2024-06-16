"use strict";
exports.id = 9783;
exports.ids = [9783];
exports.modules = {

/***/ 4617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);




const ColorSwitcher = ()=>{
    const { setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "setColor",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("light switch-btn"),
                onClick: ()=>setTheme("light"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/images/icons/sun-01.svg",
                    alt: "Sun images",
                    width: 16,
                    height: 16
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("dark switch-btn"),
                onClick: ()=>setTheme("dark"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/images/icons/vector.svg",
                    alt: "Vector Images",
                    width: 16,
                    height: 16
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorSwitcher);


/***/ }),

/***/ 5353:
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



const SearchForm = ({ isOpen  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        id: "header-search-1",
        action: "#",
        method: "GET",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("large-mobile-blog-search", isOpen && "active"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "rn-search-mobile form-group",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: "search-button",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "feather-search"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    placeholder: "Search ..."
                })
            ]
        })
    });
SearchForm.propTypes = {
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchForm);


/***/ }),

/***/ 6735:
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



const BurgerButton = ({ className , onClick  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(className, "hamberger-button"),
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: "feather-menu"
        })
    });
BurgerButton.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BurgerButton);


/***/ }),

/***/ 9857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TB": () => (/* reexport */ offcanvas),
  "UT": () => (/* reexport */ body),
  "Us": () => (/* reexport */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/components/ui/offcanvas/offcanvas.jsx




const Offcanvas = /*#__PURE__*/ (0,external_react_.memo)(({ children , className , isOpen , onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("popup-mobile-menu", isOpen ? "active" : "", className),
        onClick: onClick,
        onKeyPress: onClick,
        role: "button",
        tabIndex: 0,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "inner",
            onClick: (e)=>e.stopPropagation(),
            onKeyPress: onClick,
            role: "button",
            tabIndex: 0,
            children: children
        })
    }));
Offcanvas.displayName = "Offcanvas";
Offcanvas.propTypes = {
    children: (external_prop_types_default()).node.isRequired,
    className: (external_prop_types_default()).node,
    isOpen: (external_prop_types_default()).bool.isRequired,
    onClick: (external_prop_types_default()).func.isRequired
};
/* harmony default export */ const offcanvas = (Offcanvas);

;// CONCATENATED MODULE: ./src/components/ui/offcanvas/header.jsx



const OffcanvasHeader = ({ className , onClick , children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("header-top", className),
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "close-menu",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "close-button",
                    type: "button",
                    onClick: onClick,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "feather-x"
                    })
                })
            })
        ]
    });
OffcanvasHeader.propTypes = {
    children: (external_prop_types_default()).node.isRequired,
    className: (external_prop_types_default()).string,
    onClick: (external_prop_types_default()).func.isRequired
};
/* harmony default export */ const header = (OffcanvasHeader);

;// CONCATENATED MODULE: ./src/components/ui/offcanvas/body.jsx



const OffcanvasBody = ({ children , className  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()(className, "content"),
        children: children
    });
OffcanvasBody.propTypes = {
    className: (external_prop_types_default()).node,
    children: (external_prop_types_default()).node.isRequired
};
/* harmony default export */ const body = (OffcanvasBody);

;// CONCATENATED MODULE: ./src/components/ui/offcanvas/index.js





/***/ }),

/***/ 6067:
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
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);




const UserDropdown = ({ onDisconnect , ethBalance  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "icon-box",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                path: "/author",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: "/images/icons/boy-avater.png",
                    alt: "Images",
                    width: 38,
                    height: 38
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rn-dropdown",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rn-inner-top",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "title",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    path: "/product",
                                    children: "Christopher William"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    path: "/product",
                                    children: "Set Display Name"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rn-product-inner",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "product-list",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "single-product-list",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "thumbnail",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                path: "/product",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: "/images/portfolio/portfolio-07.jpg",
                                                    alt: "Nft Product Images",
                                                    width: 50,
                                                    height: 50
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "content",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        path: "/product",
                                                        children: "Balance"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        ethBalance,
                                                        " ETH"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "button"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "single-product-list",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "thumbnail",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                path: "/product",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: "/images/portfolio/portfolio-01.jpg",
                                                    alt: "Nft Product Images",
                                                    width: 50,
                                                    height: 50
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "content",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        path: "/product",
                                                        children: "Balance"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        ethBalance,
                                                        " ETH"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "button"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "add-fund-button mt--20 pb--20",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            className: "btn btn-primary-alta w-100",
                            path: "/connect",
                            children: "Add Your More Funds"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "list-inner",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    path: "/author",
                                    children: "My Profile"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    path: "/edit-profile",
                                    children: "Edit Profile"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    path: "/connect",
                                    children: "Manage funds"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: onDisconnect,
                                    children: "Sign Out"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
UserDropdown.propTypes = {
    onDisconnect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
    ethBalance: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserDropdown);


/***/ }),

/***/ 8115:
/***/ ((module) => {

/* eslint-disable indent */ /* eslint-disable no-confusing-arrow */ /* eslint-disable no-unused-expressions */ /* eslint-disable no-param-reassign */ 
function slideUp(element, duration = 500) {
    return new Promise((resolve, _reject)=>{
        element.style.height = `${element.offsetHeight}px`;
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = `${duration}ms`;
        element.offsetHeight;
        element.style.overflow = "hidden";
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        window.setTimeout(()=>{
            element.style.display = "none";
            element.style.removeProperty("height");
            element.style.removeProperty("padding-top");
            element.style.removeProperty("padding-bottom");
            element.style.removeProperty("margin-top");
            element.style.removeProperty("margin-bottom");
            element.style.removeProperty("overflow");
            element.style.removeProperty("transition-duration");
            element.style.removeProperty("transition-property");
            resolve(false);
        }, duration);
    });
}
function slideDown(element, duration = 500) {
    return new Promise((_resolve, _reject)=>{
        element.style.removeProperty("display");
        let { display  } = window.getComputedStyle(element);
        if (display === "none") display = "block";
        element.style.display = display;
        const height = element.offsetHeight;
        element.style.overflow = "hidden";
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.offsetHeight;
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = `${duration}ms`;
        element.style.height = `${height}px`;
        element.style.removeProperty("padding-top");
        element.style.removeProperty("padding-bottom");
        element.style.removeProperty("margin-top");
        element.style.removeProperty("margin-bottom");
        window.setTimeout(()=>{
            element.style.removeProperty("height");
            element.style.removeProperty("overflow");
            element.style.removeProperty("transition-duration");
            element.style.removeProperty("transition-property");
        }, duration);
    });
}
function slideToggle(element, duration = 500) {
    if (window.getComputedStyle(element).display === "none") {
        return slideDown(element, duration);
    }
    return slideUp(element, duration);
}
const flatDeep = (arr, d = 1)=>d > 0 ? arr.reduce((acc, val)=>acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) : arr.slice();
function slugify(text) {
    return text.toString().toLowerCase().replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
function normalizedData(data, key = "section") {
    let allContetnt;
    data.forEach((item)=>{
        const newObj = Object.entries(item).reduce((acc, cur)=>{
            const [k, property] = cur;
            if (property === null) {
                return acc;
            }
            return {
                ...acc,
                [k]: property
            };
        }, {});
        allContetnt = {
            ...allContetnt,
            [newObj[key]]: {
                ...newObj
            }
        };
    });
    return allContetnt;
}
const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
];
const getMonth = (date)=>months[date.getMonth()];
const containsObject = (obj, list)=>{
    let i;
    for(i = 0; i < list.length; i++){
        if (list[i].slug === obj.slug) {
            return i;
        }
    }
    return -1;
};
const shuffleArray = (array)=>{
    const newArr = array.slice();
    for(let i = newArr.length - 1; i > 0; i--){
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [
            newArr[rand],
            newArr[i]
        ];
    }
    return newArr;
};
const hasKey = (obj, key)=>!!Object.prototype.hasOwnProperty.call(obj, key);
const isEmpty = (obj)=>{
    // eslint-disable-next-line no-restricted-syntax
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
};
module.exports = {
    slideUp,
    slideDown,
    slideToggle,
    flatDeep,
    normalizedData,
    slugify,
    getMonth,
    containsObject,
    shuffleArray,
    hasKey,
    isEmpty
};


/***/ }),

/***/ 8663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* binding */ SellerType),
/* harmony export */   "I1": () => (/* binding */ NotifactionType),
/* harmony export */   "J0": () => (/* binding */ FeatureProductsType),
/* harmony export */   "K0": () => (/* binding */ SectionTitleType),
/* harmony export */   "L$": () => (/* binding */ ButtonType),
/* harmony export */   "__": () => (/* binding */ ImageType),
/* harmony export */   "iJ": () => (/* binding */ IDType),
/* harmony export */   "kv": () => (/* binding */ ProductType),
/* harmony export */   "nQ": () => (/* binding */ HeadingType),
/* harmony export */   "qG": () => (/* binding */ ItemType),
/* harmony export */   "yG": () => (/* binding */ TextType),
/* harmony export */   "yl": () => (/* binding */ CollectionType)
/* harmony export */ });
/* unused harmony export ButtonComponentType */
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

const IDType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
    (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
]);
const HeadingType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: IDType,
    content: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired)
});
const TextType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: IDType,
    content: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired)
});
const ImageType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    src: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({})
    ]).isRequired,
    alt: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    layout: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
});
const ButtonComponentType = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node.isRequired),
    type: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf([
        "button",
        "submit",
        "reset"
    ]),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    size: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf([
        "large",
        "small",
        "medium"
    ]),
    color: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf([
        "primary",
        "primary-alta"
    ]),
    fullwidth: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
};
// eslint-disable-next-line no-unused-vars
const { children , ...restButtonTypes } = ButtonComponentType;
const ButtonType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    content: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    ...restButtonTypes
});
const SectionTitleType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
});
const ItemType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
    ]).isRequired,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    images: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(ImageType),
    image: ImageType
});
const ProductType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
    ]).isRequired,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    latestBid: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    price: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
        amount: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
        currency: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired)
    }).isRequired,
    likeCount: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
    image: ImageType,
    auction_date: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    authors: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
        name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
        slug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
        image: ImageType
    })),
    bitCount: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
});
const SellerType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
    ]).isRequired,
    name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    total_sale: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
    image: ImageType.isRequired,
    top_since: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    isVarified: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
});
const CollectionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
    ]).isRequired,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    total_item: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
    image: ImageType.isRequired,
    thumbnails: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(ImageType).isRequired,
    profile_image: ImageType.isRequired
});
const FeatureProductsType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
    ]).isRequired,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    author: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
        name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
        slug: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
    }),
    image: ImageType.isRequired
});
const NotifactionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: IDType,
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    date: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    time: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
    image: ImageType
});


/***/ })

};
;