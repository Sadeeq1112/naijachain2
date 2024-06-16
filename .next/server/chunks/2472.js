"use strict";
exports.id = 2472;
exports.ids = [2472];
exports.modules = {

/***/ 3697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4643);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);





const Logo = ({ className , logo  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("logo-thumbnail logo-custom-css", className),
        children: [
            logo?.[0]?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "logo-light",
                path: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: logo[0].src,
                    alt: logo[0]?.alt || "nft-logo",
                    width: 106,
                    height: 35,
                    priority: true
                })
            }),
            logo?.[1]?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "logo-dark",
                path: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: logo[1].src,
                    alt: logo[1]?.alt || "nft-logo",
                    width: 106,
                    height: 35,
                    priority: true
                })
            })
        ]
    });
Logo.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    logo: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
        src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
        alt: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
    }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 3191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const SEO = ({ pageTitle  })=>{
    const title = `${pageTitle} || NaijaChain - Dentralized Market Place for local artisans`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                httpEquiv: "x-ua-compatible",
                content: "ie=edge"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "Generated by create next app"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: "noindex, follow"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon.png"
            })
        ]
    });
};
SEO.propTypes = {
    pageTitle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


/***/ }),

/***/ 4643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const Anchor = ({ path , children , className , rel , label , target , onClick , ...rest })=>{
    if (!path) return null;
    const internal = /^\/(?!\/)/.test(path);
    if (!internal) {
        const isHash = path.startsWith("#");
        if (isHash) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                "aria-label": label,
                className: className,
                href: path,
                onClick: onClick,
                ...rest,
                children: children
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            "aria-label": label,
            rel: rel,
            className: className,
            href: path,
            target: target,
            onClick: onClick,
            ...rest,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        rel: "preload",
        href: path,
        className: className,
        "aria-label": label,
        ...rest,
        children: children
    });
};
Anchor.defaultProps = {
    target: "_blank",
    rel: "noopener noreferrer"
};
Anchor.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    rel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    target: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([
        "_blank",
        "_self",
        "_parent",
        "_top"
    ]),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
Anchor.displayName = "Anchor";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Anchor);


/***/ }),

/***/ 5009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Dm": () => (/* reexport */ use_flyout_search),
  "vI": () => (/* reexport */ use_offcanvas),
  "ZY": () => (/* reexport */ use_scroll_to_top),
  "Ax": () => (/* reexport */ use_sticky)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/use-offcanvas.js

function useOffcanvas() {
    const [offcanvas, setOffcanvas] = (0,external_react_.useState)(false);
    const offcanvasHandler = ()=>{
        setOffcanvas((prev)=>!prev);
    };
    return {
        offcanvas,
        offcanvasHandler,
        setOffcanvas
    };
}
/* harmony default export */ const use_offcanvas = (useOffcanvas);

;// CONCATENATED MODULE: ./src/hooks/use-sticky.js

function useSticky() {
    const [sticky, setSticky] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const scrollHandler = ()=>{
            const scrollPos = window.scrollY;
            if (scrollPos > 50) {
                setSticky(true);
            }
            if (scrollPos < 50) {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return ()=>{
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [
        sticky
    ]);
    return sticky;
}
/* harmony default export */ const use_sticky = (useSticky);

;// CONCATENATED MODULE: ./src/hooks/use-flyout-search.js

function useFlyoutSearch() {
    const [search, setSearch] = (0,external_react_.useState)(false);
    const searchHandler = ()=>{
        setSearch((prev)=>!prev);
    };
    return {
        search,
        searchHandler
    };
}
/* harmony default export */ const use_flyout_search = (useFlyoutSearch);

;// CONCATENATED MODULE: ./src/hooks/use-scroll-to-top.js

function useScrollToTop() {
    const [stick, setStick] = (0,external_react_.useState)(false);
    const onClickHandler = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,external_react_.useEffect)(()=>{
        const scrollHandler = ()=>{
            const scrollPos = window.pageYOffset;
            if (scrollPos > 50) {
                setStick(true);
            } else {
                setStick(false);
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return ()=>{
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [
        stick
    ]);
    return {
        stick,
        onClickHandler
    };
}
/* harmony default export */ const use_scroll_to_top = (useScrollToTop);

;// CONCATENATED MODULE: ./src/hooks/index.js






/***/ }),

/***/ 3019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/hooks/index.js + 4 modules
var hooks = __webpack_require__(5009);
;// CONCATENATED MODULE: ./src/components/ui/scroll-to-top/index.jsx




const ScrollToTop = ()=>{
    const { stick , onClickHandler  } = (0,hooks/* useScrollToTop */.ZY)();
    (0,external_react_.useEffect)(()=>{
        const progressPath = document.querySelector(".rn-progress-parent path");
        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        const updateProgress = ()=>{
            const scroll = window.scrollY;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const height = docHeight - winHeight;
            const progress = pathLength - scroll * pathLength / height;
            progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        window.addEventListener("scroll", updateProgress);
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-progress-parent", stick && "rn-backto-top-active"),
        role: "button",
        onClick: onClickHandler,
        onKeyUp: (e)=>e,
        tabIndex: -1,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: "rn-back-circle svg-inner",
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            })
        })
    });
};
/* harmony default export */ const scroll_to_top = (ScrollToTop);

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: ./src/layouts/wrapper.jsx




const Wrapper = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(scroll_to_top, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {})
        ]
    });
Wrapper.propTypes = {
    children: (external_prop_types_default()).node.isRequired
};
/* harmony default export */ const wrapper = (Wrapper);


/***/ })

};
;