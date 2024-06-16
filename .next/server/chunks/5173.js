"use strict";
exports.id = 5173;
exports.ids = [5173];
exports.modules = {

/***/ 5924:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4643);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8663);






const BlogCard = ({ className , title , slug , timeToRead , category , image , rootPage , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rn-blog", className),
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "inner",
            children: [
                image?.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "thumbnail",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        path: `${rootPage}/${slug}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: image.src,
                            alt: image?.alt || "Personal Portfolio Images",
                            width: image?.width ? image.width : 489,
                            height: image?.height ? image.height : 366
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "category-info",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "category-list",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        path: `${rootPage}/category/${category.slug}`,
                                        children: category.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "meta",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "feather-clock"
                                            }),
                                            " ",
                                            timeToRead,
                                            " min read"
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "title",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_anchor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                path: `${rootPage}/${slug}`,
                                children: [
                                    title,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "feather-arrow-up-right"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
BlogCard.propTypes = {
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    timeToRead: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
    category: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
        slug: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
    }).isRequired,
    image: _utils_types__WEBPACK_IMPORTED_MODULE_5__/* .ImageType */ .__,
    rootPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
BlogCard.defaultProps = {
    rootPage: "/blog"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);


/***/ }),

/***/ 1145:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* binding */ getAllPosts),
/* harmony export */   "J4": () => (/* binding */ getPostsByTag),
/* harmony export */   "Td": () => (/* binding */ getPostsByCategory),
/* harmony export */   "p$": () => (/* binding */ getPostSlugs),
/* harmony export */   "zQ": () => (/* binding */ getPostBySlug)
/* harmony export */ });
/* unused harmony export readingTime */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8974);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8115);
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_methods__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_3__]);
marked__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), "src/data/posts");
function getPostSlugs() {
    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
}
const wordsPerMinute = 225;
function isWord(str) {
    let alphaNumericFound = false;
    for(let i = 0; i < str.length; i++){
        const code = str.charCodeAt(i);
        if (code > 47 && code < 58 || // numeric (0-9)
        code > 64 && code < 91 || // upper alpha (A-Z)
        code > 96 && code < 123) {
            // lower alpha (a-z)
            alphaNumericFound = true;
            return alphaNumericFound;
        }
    }
    return alphaNumericFound;
}
function wordCounter(input) {
    const text = input.split(/\s+/);
    let wordCount = 0;
    for(let i = 0; i < text.length; i++){
        if (text[i] !== " " && isWord(text[i])) {
            wordCount += 1;
        }
    }
    return wordCount;
}
function readingTime(text) {
    return Math.ceil(wordCounter(text) / wordsPerMinute);
}
function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realSlug}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field)=>{
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = (0,marked__WEBPACK_IMPORTED_MODULE_3__.marked)(content);
        }
        if (field === "timeToRead") {
            const readTime = readingTime(content);
            items[field] = readTime;
        }
        if (field === "category") {
            items[field] = {
                title: data.category,
                slug: (0,_utils_methods__WEBPACK_IMPORTED_MODULE_4__.slugify)(data.category)
            };
        }
        if (field === "tags") {
            items[field] = data.tags.map((tag)=>({
                    title: tag,
                    slug: (0,_utils_methods__WEBPACK_IMPORTED_MODULE_4__.slugify)(tag)
                }));
        }
        if (field !== "category" && field !== "tags" && typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });
    return items;
}
function getAllPosts(fields = []) {
    const slugs = getPostSlugs();
    const posts = slugs.map((slug)=>getPostBySlug(slug, fields))// sort posts by date in descending order
    .sort((post1, post2)=>post1.date > post2.date ? -1 : 1);
    return posts;
}
function getPostsByCategory(cat, fields = []) {
    const posts = getAllPosts(fields);
    return posts.filter((post)=>post.category.slug === cat);
}
function getPostsByTag(tag, fields = []) {
    const posts = getAllPosts(fields);
    return posts.filter((post)=>post.tags.map((t)=>t.slug).includes(tag));
} // const productsDirectory = JSON.parse(
 //     fs.readFileSync("src/data/products.json", "utf8")
 // );
 // export function getProductSlugs() {
 //     return fs.readdirSync(productsDirectory);
 // }
 // export function getAllProducts() {
 //     const slugs = getPostSlugs();
 //     return slugs;
 // }

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;