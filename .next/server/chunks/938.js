"use strict";
exports.id = 938;
exports.ids = [938];
exports.modules = {

/***/ 1085:
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
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_4__);





const CategoryWidget = ({ categories , rootPage , className  })=>{
    const cats = [];
    categories?.forEach((cat)=>{
        const obj = {
            ...cat,
            count: 1
        };
        const objIndex = (0,_utils_methods__WEBPACK_IMPORTED_MODULE_4__.containsObject)(obj, cats);
        if (objIndex !== -1) {
            const prevCount = cats[objIndex].count;
            cats[objIndex] = {
                title: cat.title,
                slug: cat.slug,
                count: prevCount + 1
            };
        } else {
            cats.push(obj);
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rbt-single-widget widget_categories", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "title",
                children: "Categories"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "inner",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "category-list",
                    children: cats?.map((cat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_anchor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                path: `${rootPage}/category/${cat.slug}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "left-content",
                                        children: cat.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "count-text",
                                        children: cat.count
                                    })
                                ]
                            })
                        }, cat.slug))
                })
            })
        ]
    });
};
CategoryWidget.propTypes = {
    categories: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({})),
    rootPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
CategoryWidget.defaultProps = {
    rootPage: "/blog"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryWidget);


/***/ }),

/***/ 2442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4643);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_3__);




const TagWidget = ({ tags , rootPage  })=>{
    const tagss = [
        ...new Set((0,_utils_methods__WEBPACK_IMPORTED_MODULE_3__.flatDeep)(tags).map((tag)=>tag.title))
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "rbt-single-widget widget_tag_cloud mt--40",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "title",
                children: "Tags"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "inner mt--20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tagcloud",
                    children: tagss?.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            path: `${rootPage}/tag/${(0,_utils_methods__WEBPACK_IMPORTED_MODULE_3__.slugify)(tag)}`,
                            children: tag
                        }, tag))
                })
            })
        ]
    });
};
TagWidget.propTypes = {
    tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({}))),
    rootPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
TagWidget.defaultProps = {
    rootPage: "/blog"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagWidget);


/***/ })

};
;