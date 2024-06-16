"use strict";
exports.id = 9477;
exports.ids = [9477];
exports.modules = {

/***/ 9477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_10)
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
;// CONCATENATED MODULE: ./src/components/product-filter/layout-03/sort.jsx


const SortWidget = ({ onChange , value  })=>{
    const changeHandler = (e)=>{
        const { value: currentValue  } = e.target;
        onChange(currentValue);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nuron-expo-filter-widget widget-shortby",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "widget-title",
                    children: "Sort By"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "radio",
                                    value: "newest",
                                    name: "sort",
                                    id: "short-check1",
                                    checked: value === "newest",
                                    onChange: changeHandler
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "short-check1",
                                    children: "Newest"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "radio",
                                    value: "oldest",
                                    name: "sort",
                                    id: "short-check2",
                                    checked: value === "oldest",
                                    onChange: changeHandler
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "short-check2",
                                    children: "Oldest"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "radio",
                                    value: "most-liked",
                                    name: "sort",
                                    id: "short-check3",
                                    checked: value === "most-liked",
                                    onChange: changeHandler
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "short-check3",
                                    children: "Most Liked"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "radio",
                                    value: "least-liked",
                                    name: "sort",
                                    id: "short-check4",
                                    checked: value === "least-liked",
                                    onChange: changeHandler
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "short-check4",
                                    children: "Least Liked"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
SortWidget.propTypes = {
    onChange: (external_prop_types_default()).func,
    value: (external_prop_types_default()).string
};
/* harmony default export */ const layout_03_sort = (SortWidget);

;// CONCATENATED MODULE: ./src/components/product-filter/layout-03/category-filter.jsx



const CategoryFilter = ({ categories , onChange  })=>{
    const [isCheck, setIsCheck] = (0,external_react_.useState)([]);
    const handleClick = (e)=>{
        const { value , checked  } = e.target;
        setIsCheck([
            ...isCheck,
            value
        ]);
        if (!checked) {
            setIsCheck(isCheck.filter((item)=>item !== value));
        }
    };
    (0,external_react_.useEffect)(()=>{
        onChange("categories", isCheck);
    }, [
        isCheck,
        onChange
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nuron-expo-filter-widget widget-category mt--30",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "widget-title",
                    children: "Categories"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: Object.entries(categories).map(([key, value])=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    name: "categories",
                                    value: key,
                                    onChange: handleClick,
                                    id: `cat-check-${key}`
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    htmlFor: `cat-check-${key}`,
                                    className: "text-capitalize",
                                    children: [
                                        key,
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                "(",
                                                value,
                                                ")"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, key))
                })
            ]
        })
    });
};
CategoryFilter.propTypes = {
    categories: external_prop_types_default().shape({}),
    onChange: (external_prop_types_default()).func
};
/* harmony default export */ const category_filter = (CategoryFilter);

;// CONCATENATED MODULE: ./src/components/product-filter/layout-03/level-filter.jsx



const LevelFilter = ({ onChange , levels  })=>{
    const [isCheckAll, setIsCheckAll] = (0,external_react_.useState)(false);
    const [isCheck, setIsCheck] = (0,external_react_.useState)([]);
    const [list, setList] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        setList(levels);
    }, [
        list,
        levels
    ]);
    const handleSelectAll = ()=>{
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map((li)=>li));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };
    const handleClick = (e)=>{
        const { value , checked  } = e.target;
        setIsCheck([
            ...isCheck,
            value
        ]);
        if (!checked) {
            setIsCheck(isCheck.filter((item)=>item !== value));
        }
    };
    (0,external_react_.useEffect)(()=>{
        onChange("level", isCheck);
    }, [
        isCheck,
        onChange
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nuron-expo-filter-widget widget-shortby mt--30",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "widget-title",
                    children: "Level"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    name: "level",
                                    value: "all",
                                    id: "level-check1",
                                    onChange: handleSelectAll,
                                    checked: isCheckAll
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "level-check1",
                                    children: "All Skill"
                                })
                            ]
                        }),
                        list?.map((lvl)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nuron-form-check",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "checkbox",
                                        name: "level",
                                        value: lvl,
                                        id: `level-check-${lvl}`,
                                        onChange: handleClick,
                                        checked: isCheck.includes(lvl)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: `level-check-${lvl}`,
                                        children: lvl
                                    })
                                ]
                            }, lvl))
                    ]
                })
            ]
        })
    });
};
LevelFilter.propTypes = {
    onChange: (external_prop_types_default()).func,
    levels: external_prop_types_default().arrayOf((external_prop_types_default()).string)
};
/* harmony default export */ const level_filter = (LevelFilter);

;// CONCATENATED MODULE: ./src/components/product-filter/layout-03/price-sort.jsx


const PriceSort = ({ onChange , value  })=>{
    const changeHandler = (e)=>{
        const { value: currentValue  } = e.target;
        onChange(currentValue);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nuron-expo-filter-widget widget-shortby mt--30",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "widget-title",
                    children: "Sort By Price"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "radio",
                                    value: "low-to-high",
                                    name: "sort",
                                    id: "price-check1",
                                    checked: value === "low-to-high",
                                    onChange: changeHandler
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "price-check1",
                                    children: "Price: Low to High"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "radio",
                                    value: "high-to-low",
                                    name: "sort",
                                    id: "price-check2",
                                    checked: value === "high-to-low",
                                    onChange: changeHandler
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "price-check2",
                                    children: "Price: High to Low"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
PriceSort.propTypes = {
    onChange: (external_prop_types_default()).func,
    value: (external_prop_types_default()).string
};
/* harmony default export */ const price_sort = (PriceSort);

;// CONCATENATED MODULE: ./src/components/product-filter/layout-03/language-flter.jsx



const LanguageFilter = ({ onChange , languages  })=>{
    const [isCheckAll, setIsCheckAll] = (0,external_react_.useState)(false);
    const [isCheck, setIsCheck] = (0,external_react_.useState)([]);
    const [list, setList] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        setList(languages);
    }, [
        list,
        languages
    ]);
    const handleSelectAll = ()=>{
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map((li)=>li));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };
    const handleClick = (e)=>{
        const { value , checked  } = e.target;
        setIsCheck([
            ...isCheck,
            value
        ]);
        if (!checked) {
            setIsCheck(isCheck.filter((item)=>item !== value));
        }
    };
    (0,external_react_.useEffect)(()=>{
        onChange("language", isCheck);
    }, [
        isCheck,
        onChange
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nuron-expo-filter-widget widget-shortby mt--30",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "widget-title",
                    children: "Language"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    name: "level",
                                    value: "all",
                                    id: "lang-check1",
                                    onChange: handleSelectAll,
                                    checked: isCheckAll
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "lang-check1",
                                    children: "All Language"
                                })
                            ]
                        }),
                        list?.map((lng)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nuron-form-check",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "checkbox",
                                        name: "language",
                                        value: lng,
                                        id: `lang-check-${lng}`,
                                        onChange: handleClick,
                                        checked: isCheck.includes(lng)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: `lang-check-${lng}`,
                                        children: lng
                                    })
                                ]
                            }, lng))
                    ]
                })
            ]
        })
    });
};
LanguageFilter.propTypes = {
    onChange: (external_prop_types_default()).func,
    languages: external_prop_types_default().arrayOf((external_prop_types_default()).string)
};
/* harmony default export */ const language_flter = (LanguageFilter);

;// CONCATENATED MODULE: ./src/components/product-filter/layout-03/rating-filter.jsx



const RatingFilter = ({ onChange  })=>{
    const [isCheck, setIsCheck] = (0,external_react_.useState)([]);
    const handleClick = (e)=>{
        const { value , checked  } = e.target;
        setIsCheck([
            ...isCheck,
            +value
        ]);
        if (!checked) {
            setIsCheck(isCheck.filter((item)=>+item !== +value));
        }
    };
    (0,external_react_.useEffect)(()=>{
        onChange("rating", isCheck);
    }, [
        isCheck,
        onChange
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nuron-expo-filter-widget widget-shortby mt--30",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "widget-title",
                    children: "Filter By Rating"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    name: "rating",
                                    value: 5,
                                    onChange: handleClick,
                                    id: "rating-check1"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    htmlFor: "rating-check1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    name: "rating",
                                    value: 4,
                                    onChange: handleClick,
                                    id: "rating-check2"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    htmlFor: "rating-check2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill off",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    name: "rating",
                                    value: 3,
                                    onChange: handleClick,
                                    id: "rating-check3"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    htmlFor: "rating-check3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill off",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill off",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    name: "rating",
                                    value: 2,
                                    onChange: handleClick,
                                    id: "rating-check4"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    htmlFor: "rating-check4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill off",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill off",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill off",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "nuron-form-check",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    name: "rating",
                                    value: 1,
                                    onChange: handleClick,
                                    id: "rating-check5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    htmlFor: "rating-check5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill off",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill off",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill off",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-star-fill off",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
RatingFilter.propTypes = {
    onChange: (external_prop_types_default()).func
};
/* harmony default export */ const rating_filter = (RatingFilter);

// EXTERNAL MODULE: ./src/components/ui/input-range/index.jsx + 2 modules
var input_range = __webpack_require__(3453);
;// CONCATENATED MODULE: ./src/components/product-filter/layout-03/price-range-filter.jsx



const PriceRangeFilter = ({ values , onChange  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nuron-expo-filter-widget widget-shortby mt--30",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "widget-title",
                    children: "Filter By Price"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "price_filter s-filter clear",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(input_range/* default */.Z, {
                            values: values,
                            onChange: onChange,
                            hideButton: true
                        })
                    })
                })
            ]
        })
    });
PriceRangeFilter.propTypes = {
    values: external_prop_types_default().arrayOf((external_prop_types_default()).number),
    onChange: (external_prop_types_default()).func
};
/* harmony default export */ const price_range_filter = (PriceRangeFilter);

;// CONCATENATED MODULE: ./src/components/product-filter/layout-03/index.jsx









const ProductFilter = ({ sortHandler , filterHandler , priceHandler , inputs , sort , categories , levels , languages  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "nu-course-sidebar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_03_sort, {
                onChange: sortHandler,
                value: sort
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(category_filter, {
                categories: categories,
                onChange: filterHandler
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(level_filter, {
                onChange: filterHandler,
                levels: levels
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(price_sort, {
                onChange: sortHandler,
                value: sort
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(language_flter, {
                onChange: filterHandler,
                languages: languages
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(rating_filter, {
                onChange: filterHandler
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(price_range_filter, {
                values: inputs.price,
                onChange: priceHandler
            })
        ]
    });
ProductFilter.propTypes = {
    sortHandler: (external_prop_types_default()).func,
    filterHandler: (external_prop_types_default()).func,
    priceHandler: (external_prop_types_default()).func,
    inputs: external_prop_types_default().shape({
        price: external_prop_types_default().arrayOf((external_prop_types_default()).number)
    }),
    sort: (external_prop_types_default()).string,
    categories: external_prop_types_default().shape({}),
    levels: external_prop_types_default().arrayOf((external_prop_types_default()).string),
    languages: external_prop_types_default().arrayOf((external_prop_types_default()).string)
};
/* harmony default export */ const layout_03 = (ProductFilter);

// EXTERNAL MODULE: ./src/components/product/layout-01/index.jsx + 1 modules
var layout_01 = __webpack_require__(2102);
// EXTERNAL MODULE: ./src/components/pagination-02/index.jsx
var pagination_02 = __webpack_require__(5116);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(8115);
;// CONCATENATED MODULE: ./src/containers/explore-product/layout-10/index.jsx










function reducer(state, action) {
    switch(action.type){
        case "SET_INPUTS":
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    ...action.payload
                }
            };
        case "SET_SORT":
            return {
                ...state,
                sort: action.payload
            };
        case "SET_ALL_PRODUCTS":
            return {
                ...state,
                allProducts: action.payload
            };
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            };
        case "SET_PAGE":
            return {
                ...state,
                currentPage: action.payload
            };
        default:
            return state;
    }
}
const POSTS_PER_PAGE = 12;
const ExploreProductArea = ({ className , space , data: { section_title , products , placeBid  }  })=>{
    const itemsToFilter = [
        ...products
    ];
    const [state, dispatch] = (0,external_react_.useReducer)(reducer, {
        products: [],
        allProducts: products || [],
        inputs: {
            price: [
                0,
                100
            ]
        },
        sort: "newest",
        currentPage: 1
    });
    /* Pagination logic start */ const numberOfPages = Math.ceil(state.allProducts.length / POSTS_PER_PAGE);
    const paginationHandler = (page)=>{
        dispatch({
            type: "SET_PAGE",
            payload: page
        });
        const start = (page - 1) * POSTS_PER_PAGE;
        dispatch({
            type: "SET_PRODUCTS",
            payload: state.allProducts.slice(start, start + POSTS_PER_PAGE)
        });
        document.getElementById("explore-id").scrollIntoView({
            behavior: "smooth"
        });
    };
    /* Pagination logic end */ /* Sorting logic start */ const sortHandler = (value)=>{
        dispatch({
            type: "SET_SORT",
            payload: value
        });
        const sortedProducts = state.products.sort((a, b)=>{
            switch(value){
                case "most-liked":
                    return a.likeCount < b.likeCount ? 1 : -1;
                case "least-liked":
                    return a.likeCount > b.likeCount ? 1 : -1;
                case "oldest":
                    return new Date(a.published_at).getTime() > new Date(b.published_at).getTime() ? 1 : -1;
                case "low-to-high":
                    return a.price.amount > b.price.amount ? 1 : -1;
                case "high-to-low":
                    return a.price.amount > b.price.amount ? -1 : 1;
                default:
                    return new Date(b.published_at).getTime() > new Date(a.published_at).getTime() ? 1 : -1;
            }
        });
        dispatch({
            type: "SET_PRODUCTS",
            payload: sortedProducts
        });
    };
    (0,external_react_.useEffect)(()=>{
        sortHandler(state.sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        state.currentPage
    ]);
    /* Sorting logic end */ /* Filter logic start */ // Pricing filter
    const priceHandler = (value)=>{
        dispatch({
            type: "SET_INPUTS",
            payload: {
                price: value
            }
        });
    };
    // Filter Handler, this function receives the filter name and the value
    const filterHandler = (0,external_react_.useCallback)((name, val)=>{
        dispatch({
            type: "SET_INPUTS",
            payload: {
                [name]: val
            }
        });
    }, []);
    // Filter Method, this function is responsible for filtering the products
    const filterMethods = (item, filterKey, value)=>{
        if (value === "all") return false;
        const itemKey = filterKey;
        if (filterKey === "price") {
            return item[itemKey].amount <= value[0] / 100 || item[itemKey].amount >= value[1] / 100;
        }
        if (Array.isArray(value) && value.length === 0) return false;
        if (Array.isArray(item[itemKey])) {
            return !item[itemKey].some((a1)=>value.includes(a1));
        }
        if (typeof item[itemKey] === "string" || typeof item[itemKey] === "number") {
            return !value.includes(item[itemKey]);
        }
        return item[itemKey] !== value;
    };
    // Filter Method, this function is responsible for filtering the products
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
            type: "SET_ALL_PRODUCTS",
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
    const initialRender = (0,external_react_.useRef)(0);
    (0,external_react_.useEffect)(()=>{
        if (initialRender.current < 2) {
            initialRender.current += 1;
        } else {
            document.getElementById("explore-id").scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [
        state.inputs
    ]);
    (0,external_react_.useEffect)(()=>{
        dispatch({
            type: "SET_PRODUCTS",
            payload: state.allProducts.slice(0, 0 + POSTS_PER_PAGE)
        });
    }, [
        state.allProducts
    ]);
    /* Filter logic end */ // Generate data from products data
    const cats = (0,methods.flatDeep)(products.map((prod)=>prod.categories));
    const categories = cats.reduce((obj, b)=>{
        const newObj = {
            ...obj
        };
        newObj[b] = obj[b] + 1 || 1;
        return newObj;
    }, {});
    const levels = [
        ...new Set(products.map((prod)=>prod.level))
    ];
    const languages = [
        ...new Set(products.map((prod)=>prod.language))
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("explore-area", space === 1 && "rn-section-gapTop", className),
        id: "explore-id",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row mb--40",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: section_title && /*#__PURE__*/ jsx_runtime_.jsx(layout_02/* default */.Z, {
                            disableAnimation: true,
                            ...section_title
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row g-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 order-2 order-lg-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(layout_03, {
                                sortHandler: sortHandler,
                                inputs: state.inputs,
                                sort: state.sort,
                                categories: categories,
                                levels: levels,
                                languages: languages,
                                filterHandler: filterHandler,
                                priceHandler: priceHandler
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-9 order-1 order-lg-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row g-5",
                                children: [
                                    state.products.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: state.products.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-4 col-md-6 col-sm-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                                                    placeBid: !!placeBid,
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
                                    }),
                                    numberOfPages > 1 ? /*#__PURE__*/ jsx_runtime_.jsx(pagination_02/* default */.Z, {
                                        className: "single-column-blog",
                                        currentPage: state.currentPage,
                                        numberOfPages: numberOfPages,
                                        onClick: paginationHandler
                                    }) : null
                                ]
                            })
                        })
                    ]
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
/* harmony default export */ const layout_10 = (ExploreProductArea);


/***/ })

};
;