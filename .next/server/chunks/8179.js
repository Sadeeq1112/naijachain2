"use strict";
exports.id = 8179;
exports.ids = [8179];
exports.modules = {

/***/ 8179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "w": () => (/* binding */ SliderItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);




const SlickSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 8096, 23)), {
    loadableGenerated: {
        modules: [
            "../components/ui/slider/index.jsx -> " + "react-slick"
        ]
    },
    ssr: false
});
const ArrowButton = ({ onClick , icon , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        onClick: onClick,
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("slide-arrow", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: icon
        })
    });
ArrowButton.propTypes = {
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
const Slider = ({ options , children , prevIcon , nextIcon , className  })=>{
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        cssEase: "linear",
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowButton, {
            icon: prevIcon
        }),
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowButton, {
            icon: nextIcon
        }),
        ...options
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SlickSlider, {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(className),
        ...settings,
        children: children
    });
};
Slider.propTypes = {
    options: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        dots: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        infinite: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        speed: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        slidesToShow: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        slidesToScroll: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        autoplay: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        breakpoints: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({})
    }),
    prevIcon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    nextIcon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
Slider.defaultProps = {
    prevIcon: "feather-arrow-left",
    nextIcon: "feather-arrow-right"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);
const SliderItem = ({ children , className , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(className, "slider-item"),
        ...rest,
        children: children
    });
SliderItem.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};


/***/ })

};
;