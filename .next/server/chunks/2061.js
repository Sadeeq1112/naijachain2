"use strict";
exports.id = 2061;
exports.ids = [2061];
exports.modules = {

/***/ 2061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_03)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/section-title/layout-02/index.jsx
var layout_02 = __webpack_require__(4574);
// EXTERNAL MODULE: ./src/components/product/layout-01/index.jsx + 1 modules
var layout_01 = __webpack_require__(2102);
// EXTERNAL MODULE: ./src/components/ui/nice-select/index.jsx
var nice_select = __webpack_require__(388);
// EXTERNAL MODULE: ./src/components/ui/input-range/index.jsx + 2 modules
var input_range = __webpack_require__(3453);
;// CONCATENATED MODULE: ./src/components/product-filter/layout-02/index.jsx




const ProductFilter = ({ slectHandler , sortHandler , priceHandler , inputs  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "default-exp-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "filter-select-option",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "filter-leble",
                            children: "LIKES"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(nice_select/* default */.Z, {
                            options: [
                                {
                                    value: "most-liked",
                                    text: "Most liked"
                                },
                                {
                                    value: "least-liked",
                                    text: "Least liked"
                                }
                            ],
                            placeholder: "Sort by likes",
                            onChange: sortHandler,
                            name: "like"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "filter-select-option",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "filter-leble",
                            children: "Category"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(nice_select/* default */.Z, {
                            options: [
                                {
                                    value: "all",
                                    text: "All Category"
                                },
                                {
                                    value: "art",
                                    text: "Art"
                                },
                                {
                                    value: "music",
                                    text: "Music"
                                },
                                {
                                    value: "video",
                                    text: "Video"
                                },
                                {
                                    value: "Collectionable",
                                    text: "Collectionable"
                                }
                            ],
                            placeholder: "Category",
                            onChange: slectHandler,
                            name: "category"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "filter-select-option",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "filter-leble",
                            children: "Collections"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(nice_select/* default */.Z, {
                            options: [
                                {
                                    value: "all",
                                    text: "All Collection"
                                },
                                {
                                    value: "Art Decco",
                                    text: "Art Decco"
                                },
                                {
                                    value: "BoredApeYachtClub",
                                    text: "BoredApeYachtClub"
                                },
                                {
                                    value: "MutantApeYachtClub",
                                    text: "MutantApeYachtClub"
                                },
                                {
                                    value: "Art Blocks Factory",
                                    text: "Art Blocks Factory"
                                }
                            ],
                            placeholder: "Collections",
                            onChange: slectHandler,
                            name: "collection"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "filter-select-option",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "filter-leble",
                            children: "Sale type"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(nice_select/* default */.Z, {
                            options: [
                                {
                                    value: "all",
                                    text: "All Type"
                                },
                                {
                                    value: "fixed-price",
                                    text: "Fixed price"
                                },
                                {
                                    value: "timed-auction",
                                    text: "Timed auction"
                                },
                                {
                                    value: "not-for-sale",
                                    text: "Not for sale"
                                },
                                {
                                    value: "open-for-offers",
                                    text: "Open for offers"
                                }
                            ],
                            placeholder: "Sale type",
                            onChange: slectHandler,
                            name: "sale_type"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "filter-select-option",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "filter-leble",
                            children: "Price Range"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "price_filter s-filter clear",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                action: "#",
                                method: "GET",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(input_range/* default */.Z, {
                                    values: inputs.price,
                                    onChange: priceHandler
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
ProductFilter.displayName = "ProductFilter";
ProductFilter.propTypes = {
    slectHandler: (external_prop_types_default()).func,
    sortHandler: (external_prop_types_default()).func,
    priceHandler: (external_prop_types_default()).func,
    inputs: external_prop_types_default().shape({
        price: external_prop_types_default().arrayOf((external_prop_types_default()).number)
    })
};
/* harmony default export */ const product_filter_layout_02 = (ProductFilter);

// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/containers/explore-product/layout-03/index.jsx








function reducer(state, action) {
    switch(action.type){
        case "FILTER_TOGGLE":
            return {
                ...state,
                filterToggle: !state.filterToggle
            };
        case "SET_INPUTS":
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    ...action.payload
                }
            };
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
}
const ExploreProductArea = ({ className , space , data  })=>{
    const itemsToFilter = [
        ...data.products
    ];
    const [state, dispatch] = (0,external_react_.useReducer)(reducer, {
        filterToggle: false,
        products: data.products || [],
        inputs: {
            price: [
                0,
                100
            ]
        }
    });
    const slectHandler = ({ value  }, name)=>{
        dispatch({
            type: "SET_INPUTS",
            payload: {
                [name]: value
            }
        });
    };
    const priceHandler = (value)=>{
        dispatch({
            type: "SET_INPUTS",
            payload: {
                price: value
            }
        });
    };
    const sortHandler = ({ value  })=>{
        const sortedProducts = state.products.sort((a, b)=>{
            if (value === "most-liked") {
                return a.likeCount < b.likeCount ? 1 : -1;
            }
            return a.likeCount > b.likeCount ? 1 : -1;
        });
        dispatch({
            type: "SET_PRODUCTS",
            payload: sortedProducts
        });
    };
    const filterMethods = (item, filterKey, value)=>{
        if (value === "all") return false;
        let itemKey = filterKey;
        if (filterKey === "category") {
            itemKey = "categories";
        }
        if (filterKey === "price") {
            return item[itemKey].amount <= value[0] / 100 || item[itemKey].amount >= value[1] / 100;
        }
        if (Array.isArray(item[itemKey])) {
            return !item[itemKey].includes(value);
        }
        if (filterKey === "collection") {
            return item[itemKey].name !== value;
        }
        return item[itemKey] !== value;
    };
    const itemFilterHandler = (0,external_react_.useCallback)(()=>{
        let filteredItems = [];
        filteredItems = itemsToFilter.filter((item)=>{
            // eslint-disable-next-line no-restricted-syntax
            for(const key in state.inputs){
                if (filterMethods(item, key, state.inputs[key])) return false;
            }
            return true;
        });
        dispatch({
            type: "SET_PRODUCTS",
            payload: filteredItems
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        state.inputs
    ]);
    (0,external_react_.useEffect)(()=>{
        itemFilterHandler();
    }, [
        itemFilterHandler
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-product-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                data?.section_title && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row mb--30 align-items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_02/* default */.Z, {
                            className: "mb--0",
                            ...data.section_title
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(product_filter_layout_02, {
                    slectHandler: slectHandler,
                    sortHandler: sortHandler,
                    priceHandler: priceHandler,
                    inputs: state.inputs
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row g-5",
                    children: state.products.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: state.products.slice(0, 10).map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                                    placeBid: !!data.placeBid,
                                    title: prod.title,
                                    slug: prod.slug,
                                    latestBid: prod.latestBid,
                                    price: prod.price,
                                    likeCount: prod.likeCount,
                                    image: prod.images?.[0],
                                    authors: prod.authors,
                                    bitCount: prod.bitCount
                                })
                            }, prod.id))
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "No item to show"
                    })
                })
            ]
        })
    });
};
ExploreProductArea.propTypes = {
    className: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    data: external_prop_types_default().shape({
        section_title: types/* SectionTitleType */.K0,
        products: external_prop_types_default().arrayOf(types/* ProductType */.kv),
        placeBid: (external_prop_types_default()).bool
    })
};
ExploreProductArea.defaultProps = {
    space: 1
};
/* harmony default export */ const layout_03 = (ExploreProductArea);


/***/ })

};
;