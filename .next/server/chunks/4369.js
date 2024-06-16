"use strict";
exports.id = 4369;
exports.ids = [4369];
exports.modules = {

/***/ 4369:
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




const BlogArea = ({ className , data , rootPage  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("blog-wrapper", className),
        children: data?.posts?.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_blog_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                "data-sal": "slide-up",
                "data-sal-duration": "800",
                "data-sal-delay": "150",
                className: "single-column mb--30",
                title: post.title,
                slug: post.slug,
                category: post.category,
                timeToRead: post.timeToRead,
                image: {
                    ...post.image,
                    width: 883,
                    height: 661
                },
                rootPage: rootPage
            }, post.slug))
    });
BlogArea.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({}))
    }),
    rootPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogArea);


/***/ })

};
;