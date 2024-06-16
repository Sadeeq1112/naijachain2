"use strict";
exports.id = 2771;
exports.ids = [2771];
exports.modules = {

/***/ 2771:
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
/* harmony import */ var _components_blog_blog_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5924);
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8934);





const BlogArea = ({ space , className , data  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-blog-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row g-5",
                    children: data?.posts?.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-3 col-lg-4 col-md-6 col-12",
                            "data-sal": "slide-up",
                            "data-sal-duration": "800",
                            "data-sal-delay": "150",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_blog_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                title: post.title,
                                slug: post.slug,
                                category: post.category,
                                timeToRead: post.timeToRead,
                                image: post.image
                            })
                        }, post.slug))
                }),
                data.pagiData?.numberOfPages > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    currentPage: data.pagiData.currentPage,
                    numberOfPages: data.pagiData.numberOfPages,
                    rootPage: "/blog"
                })
            ]
        })
    });
BlogArea.propTypes = {
    space: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([
        1,
        2
    ]),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({})),
        pagiData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
            currentPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
            numberOfPages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
        })
    })
};
BlogArea.defaultProps = {
    space: 1
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogArea);


/***/ })

};
;