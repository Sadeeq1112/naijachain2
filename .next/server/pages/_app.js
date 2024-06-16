(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "sal.js"
const external_sal_js_namespaceObject = require("sal.js");
var external_sal_js_default = /*#__PURE__*/__webpack_require__.n(external_sal_js_namespaceObject);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: ./src/assets/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(7781);
// EXTERNAL MODULE: ./src/assets/css/feather.css
var feather = __webpack_require__(3250);
// EXTERNAL MODULE: ./src/assets/css/modal-video.css
var modal_video = __webpack_require__(6501);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./src/assets/scss/style.scss
var style = __webpack_require__(7181);
;// CONCATENATED MODULE: ./src/pages/_app.jsx











const MyApp = ({ Component , pageProps  })=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        external_sal_js_default()({
            threshold: 0.1,
            once: true
        });
    }, [
        router.asPath
    ]);
    (0,external_react_.useEffect)(()=>{
        external_sal_js_default()();
    }, []);
    (0,external_react_.useEffect)(()=>{
        document.body.className = `${pageProps.className}`;
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(external_next_themes_.ThemeProvider, {
        defaultTheme: "dark",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};
MyApp.propTypes = {
    Component: (external_prop_types_default()).elementType,
    pageProps: external_prop_types_default().shape({
        className: (external_prop_types_default()).string
    })
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 7781:
/***/ (() => {



/***/ }),

/***/ 3250:
/***/ (() => {



/***/ }),

/***/ 6501:
/***/ (() => {



/***/ }),

/***/ 7181:
/***/ (() => {



/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1284));
module.exports = __webpack_exports__;

})();