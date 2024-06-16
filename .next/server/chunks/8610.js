"use strict";
exports.id = 8610;
exports.ids = [8610];
exports.modules = {

/***/ 8610:
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
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9785);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__);






const FunFact = ({ className , counter , title , suffix , ...rest })=>{
    const [focus, setFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const visibleChangeHandler = (isVisible)=>{
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("single-odometer", className),
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
            className: "number counter-odomitter-active",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_4___default()), {
                    start: focus ? 0 : null,
                    end: counter,
                    duration: 5,
                    children: ({ countUpRef  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "odometer",
                                    ref: countUpRef
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.InView, {
                                    as: "span",
                                    onChange: (inView)=>visibleChangeHandler(inView),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "visually-hidden",
                                                children: "+"
                                            }),
                                            suffix && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: suffix
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                }),
                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "counter-label",
                    children: title
                })
            ]
        })
    });
};
FunFact.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    counter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    suffix: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunFact);


/***/ })

};
;