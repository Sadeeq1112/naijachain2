"use strict";
exports.id = 6427;
exports.ids = [6427];
exports.modules = {

/***/ 6427:
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




const FilterButtons = ({ buttons , filterHandler  })=>{
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
    const activeHandler = (filterKey)=>{
        setActive(filterKey);
        filterHandler(filterKey);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end mt_md--30 mt_sm--30",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(active === "all" && "is-checked"),
                onClick: ()=>activeHandler("all"),
                children: "All"
            }),
            buttons.map((button)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(button === active && "is-checked"),
                    onClick: ()=>activeHandler(button),
                    children: button
                }, button))
        ]
    });
};
FilterButtons.propTypes = {
    buttons: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)),
    filterHandler: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterButtons);


/***/ })

};
;