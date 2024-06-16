"use strict";
exports.id = 3715;
exports.ids = [3715];
exports.modules = {

/***/ 3715:
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
/* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);
/* eslint-disable react/button-has-type */ 



const Button = ({ children , type , label , onClick , className , path , size , color , shape , fullwidth , ...rest })=>{
    if (path) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            label: label,
            onClick: onClick,
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(className, "btn", `btn-${size}`, `btn-${color}`, fullwidth && "w-100 d-block", shape === "ellipse" && "rounded"),
            path: path,
            ...rest,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: children
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        "aria-label": label,
        onClick: onClick,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(className, "btn", `btn-${size}`, `btn-${color}`, fullwidth && "w-100 d-block", shape === "ellipse" && "rounded"),
        type: type,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: children
        })
    });
};
Button.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "button",
        "submit",
        "reset"
    ]),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "large",
        "small",
        "medium"
    ]),
    color: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "primary",
        "primary-alta"
    ]),
    shape: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        "square",
        "ellipse"
    ]),
    fullwidth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Button.defaultProps = {
    type: "button",
    size: "large",
    color: "primary"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;