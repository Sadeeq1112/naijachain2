"use strict";
exports.id = 2036;
exports.ids = [2036];
exports.modules = {

/***/ 2036:
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
/* harmony import */ var _components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4574);
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(682);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8663);






const ServiceArea = ({ className , id , space , data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-service-area", space === 1 && "rn-section-gapTop", space === 2 && "pb--70", className),
        id: id,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                data?.section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 mb--50",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section_title_layout_02__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            ...data.section_title
                        })
                    })
                }),
                data?.items && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row g-5",
                    children: data.items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_service__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                title: item.title,
                                subtitle: item.subtitle,
                                path: item.path,
                                description: item.description,
                                image: item.images[0]
                            })
                        }, item.id))
                })
            ]
        })
    });
ServiceArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        section_title: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .SectionTitleType */ .K0,
        items: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ItemType */ .qG)
    })
};
ServiceArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceArea);


/***/ })

};
;