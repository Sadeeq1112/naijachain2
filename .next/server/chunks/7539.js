"use strict";
exports.id = 7539;
exports.ids = [7539];
exports.modules = {

/***/ 7539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blog_sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/widgets/category-widget/index.jsx
var category_widget = __webpack_require__(1085);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
;// CONCATENATED MODULE: ./src/components/widgets/recent-posts-widget/index.jsx



const RecentPostsWidget = ({ recentPosts , rootPage  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rbt-single-widget widget_recent_entries mt--40",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "title",
                children: "Recent Posts"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "inner",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: recentPosts?.map((post)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                    className: "d-block",
                                    path: `${rootPage}/${post.slug}`,
                                    children: post.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "cate",
                                    children: post.category.title
                                })
                            ]
                        }, post.slug))
                })
            })
        ]
    });
RecentPostsWidget.propTypes = {
    recentPosts: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        title: (external_prop_types_default()).string,
        slug: (external_prop_types_default()).string,
        category: external_prop_types_default().shape({
            title: (external_prop_types_default()).string
        })
    })),
    rootPage: (external_prop_types_default()).string
};
RecentPostsWidget.defaultProps = {
    rootPage: "/blog"
};
/* harmony default export */ const recent_posts_widget = (RecentPostsWidget);

// EXTERNAL MODULE: ./src/components/widgets/tag-widget/index.jsx
var tag_widget = __webpack_require__(2442);
;// CONCATENATED MODULE: ./src/containers/blog-sidebar/index.jsx






const BlogSidebar = ({ className , categories , recentPosts , tags , rootPage  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: external_clsx_default()("rwt-sidebar", className),
        children: [
            categories?.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(category_widget/* default */.Z, {
                categories: categories,
                rootPage: rootPage
            }),
            recentPosts?.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(recent_posts_widget, {
                recentPosts: recentPosts,
                rootPage: rootPage
            }),
            tags?.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(tag_widget/* default */.Z, {
                tags: tags,
                rootPage: rootPage
            })
        ]
    });
BlogSidebar.propTypes = {
    className: (external_prop_types_default()).string,
    categories: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
    recentPosts: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
    tags: external_prop_types_default().arrayOf(external_prop_types_default().arrayOf(external_prop_types_default().shape({}))),
    rootPage: (external_prop_types_default()).string
};
/* harmony default export */ const blog_sidebar = (BlogSidebar);


/***/ })

};
;