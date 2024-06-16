"use strict";
exports.id = 388;
exports.ids = [388];
exports.modules = {

/***/ 388:
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
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_4__);





const NiceSelect = ({ options , defaultCurrent , placeholder , className , onChange , name  })=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options[defaultCurrent]);
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setOpen(false);
    }, []);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react_use__WEBPACK_IMPORTED_MODULE_4__.useClickAway)(ref, onClose);
    const currentHandler = (item)=>{
        setCurrent(item);
        onChange(item, name);
        onClose();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nice-select", className, open && "open"),
        role: "button",
        tabIndex: 0,
        onClick: ()=>setOpen((prev)=>!prev),
        onKeyPress: (e)=>e,
        ref: ref,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "current",
                children: current?.text || placeholder
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "list",
                role: "menubar",
                onClick: (e)=>e.stopPropagation(),
                onKeyPress: (e)=>e.stopPropagation(),
                children: options?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        "data-value": item.value,
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("option", item.value === current?.value && "selected focus"),
                        role: "menuitem",
                        onClick: ()=>currentHandler(item),
                        onKeyPress: (e)=>e,
                        children: item.text
                    }, item.value))
            })
        ]
    });
};
NiceSelect.propTypes = {
    options: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        value: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([
            (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
            (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
        ]).isRequired,
        text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
    }).isRequired).isRequired,
    defaultCurrent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
NiceSelect.displayName = "NiceSelect";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NiceSelect);


/***/ })

};
;