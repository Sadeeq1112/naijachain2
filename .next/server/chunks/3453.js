"use strict";
exports.id = 3453;
exports.ids = [3453];
exports.modules = {

/***/ 3453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ input_range)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-range"
var external_react_range_ = __webpack_require__(2037);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
;// CONCATENATED MODULE: ./src/components/ui/input-range/slider-track.jsx
/* eslint-disable react/prop-types */ 

const SliderTrack = ({ props , children , min , max , values  })=>{
    const colors = [
        "var(--color-primary-alta)",
        "var(--color-primary)",
        "var(--color-primary-alta)"
    ];
    const background = (0,external_react_range_.getTrackBackground)({
        values: [
            ...values
        ].sort((a, b)=>a - b),
        min,
        max,
        colors
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "slider-track-container",
        style: {
            ...props.style,
            background
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "slider-track",
            ref: props.ref,
            children: children
        })
    });
};
/* harmony default export */ const slider_track = (SliderTrack);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/ui/input-range/slider-thumb.jsx
/* eslint-disable react/prop-types */ 

const SliderThumb = ({ props , isDragged  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "slider-thumb-container",
        style: props.style,
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_clsx_default()("slider-thumb", {
                "is-dragged": isDragged
            }),
            style: {
                ...props.style
            }
        })
    });
/* harmony default export */ const slider_thumb = (SliderThumb);

;// CONCATENATED MODULE: ./src/components/ui/input-range/index.jsx
/* eslint-disable react/prop-types */ 





const STEP = 1;
const MIN = 0;
const MAX = 100;
const InputRange = ({ values , onChange , hideButton  })=>{
    const renderTrack = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(slider_track, {
            ...props,
            min: MIN,
            max: MAX,
            values: values
        });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "input-range",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_range_.Range, {
                step: STEP,
                min: MIN,
                max: MAX,
                values: values,
                onChange: (vals)=>onChange(vals),
                renderTrack: renderTrack,
                renderThumb: slider_thumb
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "slider__range--output",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "price__output--wrap",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "price--output",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Price :"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "output-label",
                                    children: [
                                        "$",
                                        values[0] || 0 / 100,
                                        " - $",
                                        values[1] || 0 / 100
                                    ]
                                })
                            ]
                        }),
                        hideButton === false && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "price--filter",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                size: "small",
                                path: "#!",
                                children: "Filter"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
InputRange.propTypes = {
    values: external_prop_types_default().arrayOf((external_prop_types_default()).number),
    onChange: (external_prop_types_default()).func,
    hideButton: (external_prop_types_default()).bool
};
InputRange.defaultProps = {
    hideButton: false
};
/* harmony default export */ const input_range = (InputRange);


/***/ })

};
;