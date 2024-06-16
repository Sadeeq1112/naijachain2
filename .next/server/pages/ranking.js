"use strict";
(() => {
var exports = {};
exports.id = 6634;
exports.ids = [6634];
exports.modules = {

/***/ 7338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ranking),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/seo.jsx
var seo = __webpack_require__(3191);
// EXTERNAL MODULE: ./src/layouts/wrapper.jsx + 1 modules
var wrapper = __webpack_require__(3019);
// EXTERNAL MODULE: ./src/layouts/header/header-01/index.jsx + 9 modules
var header_01 = __webpack_require__(8205);
// EXTERNAL MODULE: ./src/layouts/footer/footer-01/index.jsx + 9 modules
var footer_01 = __webpack_require__(5728);
// EXTERNAL MODULE: ./src/components/breadcrumb/index.jsx
var breadcrumb = __webpack_require__(3578);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
// EXTERNAL MODULE: ./src/components/pagination-02/index.jsx
var pagination_02 = __webpack_require__(5116);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/containers/ranking/index.jsx








const POSTS_PER_PAGE = 31;
const RankingArea = ({ className , space , data  })=>{
    const [ranking, setRanking] = (0,external_react_.useState)([]);
    const [currentPage, setCurrentPage] = (0,external_react_.useState)(1);
    const numberOfPages = Math.ceil(data.ranking.length / POSTS_PER_PAGE);
    const paginationHandler = (page)=>{
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const rankingHandler = (0,external_react_.useCallback)(()=>{
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        setRanking(data.ranking.slice(start, start + POSTS_PER_PAGE));
    }, [
        currentPage,
        data.ranking
    ]);
    (0,external_react_.useEffect)(()=>{
        rankingHandler();
    }, [
        currentPage,
        rankingHandler
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-upcoming-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-12",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "table-title-area d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "feather-briefcase"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "The top NFTs on Nuron"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "box-table table-responsive",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                className: "table upcoming-projects",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "SL"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Product"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Volume"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "24h%"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "7d%"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Floor Price"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Owners"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Items"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                        className: "ranking",
                                        children: ranking?.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                className: index % 2 === 0 ? "color-light" : "",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                index + 1,
                                                                "."
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "product-wrapper d-flex align-items-center",
                                                            children: [
                                                                item?.product?.image?.src && /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                                                    path: item.product.slug,
                                                                    className: "thumbnail",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                        src: item.product.image.src,
                                                                        alt: "Nft_Profile",
                                                                        width: 56,
                                                                        height: 56
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: item.product.title
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: item.volume
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: item["24h%"].status === "-" ? "color-danger" : "color-green",
                                                            children: [
                                                                item["24h%"].status,
                                                                item["24h%"].charge
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: item["7d%"].status === "-" ? "color-danger" : "color-green",
                                                            children: [
                                                                item["7d%"].status,
                                                                item["7d%"].charge
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: item.floor_price
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: item.owners
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: item.items
                                                        })
                                                    })
                                                ]
                                            }, item.id))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(pagination_02/* default */.Z, {
                            currentPage: currentPage,
                            numberOfPages: numberOfPages,
                            onClick: paginationHandler
                        })
                    ]
                })
            })
        })
    });
};
RankingArea.propTypes = {
    className: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1
    ]),
    data: external_prop_types_default().shape({
        ranking: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: types/* IDType */.iJ,
            product: external_prop_types_default().shape({
                title: (external_prop_types_default()).string,
                slug: (external_prop_types_default()).string,
                image: types/* ImageType */.__
            }),
            volume: (external_prop_types_default()).string,
            "24h%": external_prop_types_default().shape({
                charge: (external_prop_types_default()).string,
                status: external_prop_types_default().oneOf([
                    "-",
                    "+"
                ])
            }),
            "7d%": external_prop_types_default().shape({
                charge: (external_prop_types_default()).string,
                status: external_prop_types_default().oneOf([
                    "-",
                    "+"
                ])
            }),
            floor_price: (external_prop_types_default()).string,
            owners: (external_prop_types_default()).string,
            items: (external_prop_types_default()).string
        }))
    })
};
RankingArea.defaultProps = {
    space: 1
};
/* harmony default export */ const ranking = (RankingArea);

;// CONCATENATED MODULE: ./src/data/ranking.json
const data_ranking_namespaceObject = JSON.parse('[{"id":1,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-05.jpg"}},"volume":"7,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3k","items":"10k"},{"id":2,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-06.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":3,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-07.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":4,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-08.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":5,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-01.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":6,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-02.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":7,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-03.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":8,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-04.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":9,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-05.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":10,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-06.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":11,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-07.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":12,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-08.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":13,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-01.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":14,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-02.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":15,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-03.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":16,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-04.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":17,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-05.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":18,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-08.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":19,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-01.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":20,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-02.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":21,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-03.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":22,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-04.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":23,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-05.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":24,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-06.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":25,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-07.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":26,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-08.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":27,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-01.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":28,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-02.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":29,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-03.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":30,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-04.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":31,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-05.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":32,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-04.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":33,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-05.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":34,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-06.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":35,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-07.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":36,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-08.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":37,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-01.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":38,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-02.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":39,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-03.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":40,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-04.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":41,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-05.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":42,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-08.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":43,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-01.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":44,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-02.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":45,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-03.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":46,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-04.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":47,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-05.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":48,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-06.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":49,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-07.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":50,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-08.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":51,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-01.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"},{"id":52,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-02.jpg"}},"volume":"20,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"62.21%","status":"-"},"floor_price":"33.02","owners":"2.5k","items":"30k"},{"id":53,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-03.jpg"}},"volume":"11,50,000","24h%":{"charge":"560.63%","status":"+"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"33.02","owners":"3.6k","items":"230k"},{"id":54,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-04.jpg"}},"volume":"10,50,000","24h%":{"charge":"310.63%","status":"+"},"7d%":{"charge":"22.21%","status":"-"},"floor_price":"33.02","owners":"3.2k","items":"100k"},{"id":55,"product":{"title":"Secure 25","slug":"/collection","image":{"src":"/images/portfolio/portfolio-05.jpg"}},"volume":"9,50,000","24h%":{"charge":"310.63%","status":"-"},"7d%":{"charge":"62.21%","status":"+"},"floor_price":"300.02","owners":"33k","items":"50k"}]');
;// CONCATENATED MODULE: ./src/pages/ranking.jsx







// Demo data for the ranking page

async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Product = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Top NFT"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb/* default */.Z, {
                        pageTitle: "Our Top NFTs",
                        currentPage: "Ranking"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ranking, {
                        data: {
                            ranking: data_ranking_namespaceObject
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {})
        ]
    });
/* harmony default export */ const pages_ranking = (Product);


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,2472,3715,9783,6180,3578,5116], () => (__webpack_exec__(7338)));
module.exports = __webpack_exports__;

})();