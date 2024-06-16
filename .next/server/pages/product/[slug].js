"use strict";
(() => {
var exports = {};
exports.id = 2915;
exports.ids = [2915];
exports.modules = {

/***/ 4929:
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



const Sticky = ({ children , className , top  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("widge-wrapper", className),
        style: {
            top
        },
        children: children
    });
Sticky.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    top: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Sticky.defaultProps = {
    top: "100px"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sticky);


/***/ }),

/***/ 9866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
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
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/ui/sticky/index.jsx
var sticky = __webpack_require__(4929);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-bootstrap/TabContent"
var TabContent_ = __webpack_require__(1130);
var TabContent_default = /*#__PURE__*/__webpack_require__.n(TabContent_);
// EXTERNAL MODULE: external "react-bootstrap/TabContainer"
var TabContainer_ = __webpack_require__(6348);
var TabContainer_default = /*#__PURE__*/__webpack_require__.n(TabContainer_);
// EXTERNAL MODULE: external "react-bootstrap/TabPane"
var TabPane_ = __webpack_require__(9722);
var TabPane_default = /*#__PURE__*/__webpack_require__.n(TabPane_);
// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(2540);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/components/product-details/gallery-tab.jsx








const GalleryTab = ({ images  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "product-tab-wrapper",
        children: /*#__PURE__*/ jsx_runtime_.jsx((TabContainer_default()), {
            defaultActiveKey: "nav-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pd-tab-inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()), {
                        className: "rn-pd-nav rn-pd-rt-content nav-pills",
                        children: images?.map((image, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                as: "button",
                                eventKey: `nav-${index}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "rn-pd-sm-thumbnail",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: image.src,
                                        alt: image?.alt || "Product",
                                        width: 167,
                                        height: 167
                                    })
                                })
                            }, image.src))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TabContent_default()), {
                        className: "rn-pd-content",
                        children: images?.map((image, index)=>/*#__PURE__*/ jsx_runtime_.jsx((TabPane_default()), {
                                eventKey: `nav-${index}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "rn-pd-thumbnail",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: image.src,
                                        alt: image?.alt || "Product",
                                        width: 560,
                                        height: 560,
                                        priority: true
                                    })
                                })
                            }, image.src))
                    })
                ]
            })
        })
    });
GalleryTab.propTypes = {
    images: external_prop_types_default().arrayOf(types/* ImageType */.__)
};
/* harmony default export */ const gallery_tab = (GalleryTab);

// EXTERNAL MODULE: ./src/components/share-dropdown/index.jsx + 1 modules
var share_dropdown = __webpack_require__(8104);
;// CONCATENATED MODULE: ./src/components/product-details/title.jsx




const ProductTitle = ({ className , title , likeCount  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("pd-title-area", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "title",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pd-react-area",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "heart-count",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "feather-heart"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: likeCount
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "count",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(share_dropdown["default"], {})
                    })
                ]
            })
        ]
    });
ProductTitle.propTypes = {
    className: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string.isRequired,
    likeCount: (external_prop_types_default()).number
};
ProductTitle.defaultProps = {
    likeCount: 0
};
/* harmony default export */ const title = (ProductTitle);

// EXTERNAL MODULE: ./src/components/top-seller/layout-01/index.jsx
var layout_01 = __webpack_require__(491);
;// CONCATENATED MODULE: ./src/components/product-details/category.jsx





const ProductCategory = ({ className , owner  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("catagory", className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    "Catagory ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "color-body",
                        children: "10% royalties"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                name: owner.name,
                slug: owner.slug,
                image: {
                    src: owner.image.src,
                    width: 44,
                    height: 44
                }
            })
        ]
    });
ProductCategory.propTypes = {
    className: (external_prop_types_default()).string,
    owner: external_prop_types_default().shape({
        name: (external_prop_types_default()).string,
        slug: (external_prop_types_default()).string,
        image: types/* ImageType */.__
    })
};
/* harmony default export */ const category = (ProductCategory);

;// CONCATENATED MODULE: ./src/components/product-details/collection.jsx





const ProductCollection = ({ className , collection  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("collection", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "Collections"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                name: collection.name,
                slug: collection.slug,
                image: {
                    src: collection.image.src,
                    width: 44,
                    height: 44
                }
            })
        ]
    });
ProductCollection.propTypes = {
    className: (external_prop_types_default()).string,
    collection: external_prop_types_default().shape({
        name: (external_prop_types_default()).string,
        slug: (external_prop_types_default()).string,
        image: types/* ImageType */.__
    })
};
/* harmony default export */ const collection = (ProductCollection);

// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
;// CONCATENATED MODULE: ./src/components/top-seller/layout-02/index.jsx





const TopSeller = ({ name , time , path , image , eth , isVarified  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "top-seller-inner-one",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "top-seller-wrapper",
            children: [
                image?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_clsx_default()("thumbnail", isVarified && "varified"),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                        path: path,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image.src,
                            alt: image?.alt || "Nft_Profile",
                            width: image?.width || 50,
                            height: image?.height || 50
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "top-seller-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                eth && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        eth,
                                        " by"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                    path: path,
                                    children: name
                                })
                            ]
                        }),
                        time && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "count-number",
                            children: time
                        })
                    ]
                })
            ]
        })
    });
TopSeller.propTypes = {
    name: (external_prop_types_default()).string.isRequired,
    time: (external_prop_types_default()).string,
    path: (external_prop_types_default()).string.isRequired,
    eth: (external_prop_types_default()).string,
    image: external_prop_types_default().shape({
        src: external_prop_types_default().oneOfType([
            external_prop_types_default().shape(),
            (external_prop_types_default()).string
        ]).isRequired,
        alt: (external_prop_types_default()).string,
        width: (external_prop_types_default()).number,
        height: (external_prop_types_default()).number
    }).isRequired,
    isVarified: (external_prop_types_default()).bool
};
/* harmony default export */ const layout_02 = (TopSeller);

;// CONCATENATED MODULE: ./src/components/product-details/bid-tab/bids-tab-content.jsx




const BidsTabContent = ({ bids  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: bids?.map((bid)=>/*#__PURE__*/ jsx_runtime_.jsx(layout_02, {
                name: bid.user.name,
                eth: bid.amount,
                path: bid.user.slug,
                time: bid.bidAt,
                image: {
                    src: bid.user.image.src,
                    width: 44,
                    height: 44
                }
            }, bid.id))
    });
BidsTabContent.propTypes = {
    bids: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        id: types/* IDType.isRequired */.iJ.isRequired,
        user: external_prop_types_default().shape({
            name: (external_prop_types_default()).string.isRequired,
            slug: (external_prop_types_default()).string.isRequired,
            image: types/* ImageType.isRequired */.__.isRequired
        }),
        amount: (external_prop_types_default()).string.isRequired,
        bidAt: (external_prop_types_default()).string.isRequired
    }))
};
/* harmony default export */ const bids_tab_content = (BidsTabContent);

;// CONCATENATED MODULE: ./src/components/product-details/bid-tab/details-tab-content.jsx




const DetailsTabContent = ({ owner , properties , tags  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rn-pd-bd-wrapper mt--20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                name: owner.name,
                total_sale: owner.total_sale,
                slug: owner.slug,
                image: owner.image
            }),
            properties && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "rn-pd-sm-property-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "pd-property-title",
                        children: "Property"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "property-wrapper",
                        children: properties.map((property)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "pd-property-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "color-body type",
                                        children: property.type
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "color-white value",
                                        children: property.value
                                    })
                                ]
                            }, property.id))
                    })
                ]
            }),
            tags && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "rn-pd-sm-property-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "pd-property-title",
                        children: "Tags"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "catagory-wrapper",
                        children: tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "pd-property-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "color-body type",
                                        children: tag.type
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "color-white value",
                                        children: tag.value
                                    })
                                ]
                            }, tag.id))
                    })
                ]
            })
        ]
    });
DetailsTabContent.propTypes = {
    owner: external_prop_types_default().shape({
        name: (external_prop_types_default()).string,
        total_sale: (external_prop_types_default()).number,
        slug: (external_prop_types_default()).string,
        image: types/* ImageType */.__
    }),
    properties: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        id: types/* IDType */.iJ,
        type: (external_prop_types_default()).string,
        value: (external_prop_types_default()).string
    })),
    tags: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        id: types/* IDType */.iJ,
        type: (external_prop_types_default()).string,
        value: (external_prop_types_default()).string
    }))
};
/* harmony default export */ const details_tab_content = (DetailsTabContent);

;// CONCATENATED MODULE: ./src/components/product-details/bid-tab/history-tab-content.jsx




const HistoryTabContent = ({ history  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: history?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(layout_02, {
                name: item.user.name,
                eth: item.amount,
                path: item.user.slug,
                time: item.bidAt,
                image: item.user.image
            }, item.id))
    });
HistoryTabContent.propTypes = {
    history: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        id: types/* IDType.isRequired */.iJ.isRequired,
        user: external_prop_types_default().shape({
            name: (external_prop_types_default()).string.isRequired,
            slug: (external_prop_types_default()).string.isRequired,
            image: types/* ImageType.isRequired */.__.isRequired
        }),
        amount: (external_prop_types_default()).string.isRequired,
        bidAt: (external_prop_types_default()).string.isRequired
    }))
};
/* harmony default export */ const history_tab_content = (HistoryTabContent);

;// CONCATENATED MODULE: ./src/components/product-details/bid-tab/index.jsx










const BidTab = ({ className , bids , owner , properties , tags , history  })=>/*#__PURE__*/ jsx_runtime_.jsx((TabContainer_default()), {
        defaultActiveKey: "nav-home",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: external_clsx_default()("tab-wrapper-one", className),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "tab-button-one",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                        as: "div",
                        className: "nav-tabs",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                as: "button",
                                eventKey: "nav-home",
                                children: "Bids"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                as: "button",
                                eventKey: "nav-profile",
                                children: "Details"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                as: "button",
                                eventKey: "nav-contact",
                                children: "History"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabContent_default()), {
                    className: "rn-bid-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((TabPane_default()), {
                            eventKey: "nav-home",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(bids_tab_content, {
                                bids: bids
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TabPane_default()), {
                            eventKey: "nav-profile",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(details_tab_content, {
                                owner: owner,
                                properties: properties,
                                tags: tags
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TabPane_default()), {
                            eventKey: "nav-contact",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(history_tab_content, {
                                history: history
                            })
                        })
                    ]
                })
            ]
        })
    });
BidTab.propTypes = {
    className: (external_prop_types_default()).string,
    bids: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
    owner: external_prop_types_default().shape({}),
    properties: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
    tags: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
    history: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const bid_tab = (BidTab);

// EXTERNAL MODULE: ./src/components/product-details/place-bet.jsx
var place_bet = __webpack_require__(2313);
;// CONCATENATED MODULE: ./src/containers/product-details/index.jsx












// Demo Image
const ProductDetailsArea = ({ space , className , product  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("product-details-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row g-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-7 col-md-12 col-sm-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(sticky/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(gallery_tab, {
                                images: product.images
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "rn-pd-content-area",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(title, {
                                    title: product.title,
                                    likeCount: product.likeCount
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "bid",
                                    children: [
                                        "Height bid",
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "price",
                                            children: [
                                                product.price.amount,
                                                product.price.currency
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "title-name",
                                    children: "#22 Portal , Info bellow"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "catagory-collection",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(category, {
                                            owner: product.owner
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(collection, {
                                            collection: product.collection
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    color: "primary-alta",
                                    path: "#",
                                    children: "Unlockable content included"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "rn-bid-details",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(bid_tab, {
                                            bids: product?.bids,
                                            owner: product.owner,
                                            properties: product?.properties,
                                            tags: product?.tags,
                                            history: product?.history
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(place_bet/* default */.Z, {
                                            highest_bid: product.highest_bid,
                                            auction_date: product?.auction_date
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
ProductDetailsArea.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    className: (external_prop_types_default()).string,
    product: external_prop_types_default().shape({
        title: (external_prop_types_default()).string.isRequired,
        likeCount: (external_prop_types_default()).number,
        price: external_prop_types_default().shape({
            amount: (external_prop_types_default()).number.isRequired,
            currency: (external_prop_types_default()).string.isRequired
        }).isRequired,
        owner: external_prop_types_default().shape({}),
        collection: external_prop_types_default().shape({}),
        bids: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
        properties: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
        tags: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
        history: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
        highest_bid: external_prop_types_default().shape({}),
        auction_date: (external_prop_types_default()).string,
        images: external_prop_types_default().arrayOf(types/* ImageType */.__)
    })
};
ProductDetailsArea.defaultProps = {
    space: 1
};
/* harmony default export */ const product_details = (ProductDetailsArea);

// EXTERNAL MODULE: ./src/components/product/layout-01/index.jsx + 1 modules
var product_layout_01 = __webpack_require__(2102);
;// CONCATENATED MODULE: ./src/containers/product/layout-03/index.jsx





const ProductArea = ({ space , className , data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("product-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row mb--30 align-items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "title mb--0",
                            "data-sal-delay": "150",
                            "data-sal": "slide-up",
                            "data-sal-duration": "800",
                            children: data?.section_title.title
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row g-5",
                    children: data?.products?.map((prod)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            "data-sal": "slide-up",
                            "data-sal-delay": "150",
                            "data-sal-duration": "800",
                            className: "col-5 col-lg-4 col-md-6 col-sm-6 col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(product_layout_01/* default */.Z, {
                                title: prod.title,
                                slug: prod.slug,
                                latestBid: prod.latestBid,
                                price: prod.price,
                                likeCount: prod.likeCount,
                                auction_date: prod.auction_date,
                                image: prod.images?.[0],
                                authors: prod.authors,
                                bitCount: prod.bitCount
                            })
                        }, prod.id))
                })
            ]
        })
    });
ProductArea.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    className: (external_prop_types_default()).string,
    data: external_prop_types_default().shape({
        section_title: external_prop_types_default().shape({
            title: (external_prop_types_default()).string
        }),
        products: external_prop_types_default().arrayOf(types/* ProductType */.kv)
    })
};
ProductArea.defaultProps = {
    space: 1
};
/* harmony default export */ const layout_03 = (ProductArea);

// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(8115);
// EXTERNAL MODULE: ./src/data/products.json
var products = __webpack_require__(2537);
;// CONCATENATED MODULE: ./src/pages/product/[slug].jsx










// demo data

const ProductDetails = ({ product , recentViewProducts , relatedProducts  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Product Details"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb/* default */.Z, {
                        pageTitle: "Product Details",
                        currentPage: "Product Details"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(product_details, {
                        product: product
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_03, {
                        data: {
                            section_title: {
                                title: "Recent View"
                            },
                            products: recentViewProducts
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_03, {
                        data: {
                            section_title: {
                                title: "Related Item"
                            },
                            products: relatedProducts
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {})
        ]
    });
async function getStaticPaths() {
    return {
        paths: products.map(({ slug  })=>({
                params: {
                    slug
                }
            })),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const product = products.find(({ slug  })=>slug === params.slug);
    const { categories  } = product;
    const recentViewProducts = (0,methods.shuffleArray)(products).slice(0, 5);
    const relatedProducts = products.filter((prod)=>prod.categories?.some((r)=>categories?.includes(r))).slice(0, 5);
    return {
        props: {
            className: "template-color-1",
            product,
            recentViewProducts,
            relatedProducts
        }
    };
}
ProductDetails.propTypes = {
    product: external_prop_types_default().shape({}),
    recentViewProducts: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
    relatedProducts: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const _slug_ = (ProductDetails);


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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 9306:
/***/ ((module) => {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 6348:
/***/ ((module) => {

module.exports = require("react-bootstrap/TabContainer");

/***/ }),

/***/ 1130:
/***/ ((module) => {

module.exports = require("react-bootstrap/TabContent");

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("react-bootstrap/TabPane");

/***/ }),

/***/ 4449:
/***/ ((module) => {

module.exports = require("react-countdown");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,3578,6188,2102,2537,491,8104,2313], () => (__webpack_exec__(9866)));
module.exports = __webpack_exports__;

})();