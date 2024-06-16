"use strict";
exports.id = 3195;
exports.ids = [3195];
exports.modules = {

/***/ 2492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4643);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




const Collection = ({ title , total_item , image , thumbnails , profile_image , path  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        path: path,
        className: "rn-collection-inner-one",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "collection-wrapper",
            children: [
                image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "collection-big-thumbnail",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: image.src,
                        alt: image?.alt || "Nft_Profile",
                        width: 507,
                        height: 339
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "collenction-small-thumbnail",
                    children: thumbnails?.map((thumb)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: thumb?.src,
                                alt: thumb?.alt || "Nft_Profile",
                                width: 164,
                                height: 110
                            })
                        }, thumb?.src))
                }),
                profile_image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "collection-profile",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: profile_image.src,
                        alt: profile_image?.alt || "Nft_Profile",
                        width: 80,
                        height: 80
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "collection-deg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            className: "title",
                            children: title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "items",
                            children: [
                                total_item,
                                " items"
                            ]
                        })
                    ]
                })
            ]
        })
    });
Collection.propTypes = {
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    total_item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        src: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape(),
            (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
        ]).isRequired,
        alt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    }).isRequired,
    thumbnails: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        src: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape(),
            (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
        ]).isRequired,
        alt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    }).isRequired).isRequired,
    profile_image: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        src: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape(),
            (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
        ]).isRequired,
        alt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection);


/***/ })

};
;