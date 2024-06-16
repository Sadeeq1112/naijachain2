"use strict";
(() => {
var exports = {};
exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_09),
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
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/components/ui/slider/index.jsx
var slider = __webpack_require__(8179);
// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
// EXTERNAL MODULE: ./src/components/ui/client-avatar/index.jsx
var client_avatar = __webpack_require__(2542);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/components/modals/placebid-modal/index.jsx
var placebid_modal = __webpack_require__(3709);
;// CONCATENATED MODULE: ./src/containers/hero/layout-09/slide.jsx










const CountdownTimer = dynamic_default()(()=>__webpack_require__.e(/* import() */ 908).then(__webpack_require__.bind(__webpack_require__, 908)), {
    loadableGenerated: {
        modules: [
            "../containers/hero/layout-09/slide.jsx -> " + "@ui/countdown/layout-02"
        ]
    },
    ssr: false
});
const ShareDropdown = dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8104)), {
    loadableGenerated: {
        modules: [
            "../containers/hero/layout-09/slide.jsx -> " + "@components/share-dropdown"
        ]
    },
    ssr: false
});
const SingleSlide = ({ title , path , latestBid , price , likeCount , image , auction_date , authors , bitCount , highest_bid , categories , properties  })=>{
    const [showBidModal, setShowBidModal] = (0,external_react_.useState)(false);
    const handleBidModal = ()=>{
        setShowBidModal((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            image?.src && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "slider-bg",
                src: image.src,
                alt: "Slider BG",
                quality: 100,
                priority: true,
                fill: true,
                sizes: "100vw",
                style: {
                    objectFit: "cover"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "inner text-left",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "top-bid-price d-flex",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "latest-bid mr--15",
                                                    children: [
                                                        "Highest bid ",
                                                        latestBid
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "last-bid color-primary",
                                                    children: price
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                            path: path,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "title theme-gradient",
                                                children: title
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "product-share-wrapper lg-product-share",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "profile-share",
                                                children: [
                                                    authors?.map((author)=>/*#__PURE__*/ jsx_runtime_.jsx(client_avatar/* default */.Z, {
                                                            slug: author.slug,
                                                            name: author.name,
                                                            image: {
                                                                ...author.image,
                                                                width: 45,
                                                                height: 45
                                                            }
                                                        }, author.name)),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                                                        className: "more-author-text",
                                                        path: path,
                                                        children: [
                                                            bitCount,
                                                            "+ Place Bit."
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "place-bet-area into-banner mt_md--30 mt_sm--30",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rn-bet-create",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "bid-list winning-bid",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: "title",
                                                                children: "Winning bit"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "top-seller-inner-one",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "top-seller-wrapper",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "thumbnail",
                                                                            children: highest_bid?.user?.image?.src && /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                                                                path: highest_bid.user.path,
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                                    src: highest_bid.user.image.src,
                                                                                    alt: "Nft_Profile",
                                                                                    width: 44,
                                                                                    height: 44
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "top-seller-content",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                    className: "heighest-bid",
                                                                                    children: [
                                                                                        "Heighest bid",
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                                                                            path: highest_bid.user.path,
                                                                                            children: highest_bid.user.name
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "count-number",
                                                                                    children: highest_bid.amount
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "bid-list left-bid",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: "title",
                                                                children: "Auction has ended"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(CountdownTimer, {
                                                                date: auction_date,
                                                                className: "mt--15"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                                className: "mt--30",
                                                onClick: handleBidModal,
                                                children: "Place a Bid"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "property-wrapper-flex d-flex",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rn-pd-sm-property-wrapper into-banner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "pd-property-title",
                                                        children: "Catagory"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "catagory-wrapper",
                                                        children: categories?.map((cat)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "pd-property-inner",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "color-body type",
                                                                        children: cat.type
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "color-white value",
                                                                        children: cat.value
                                                                    })
                                                                ]
                                                            }, cat.id))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rn-pd-sm-property-wrapper into-banner ml--30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "pd-property-title",
                                                        children: "Property"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "property-wrapper",
                                                        children: properties?.map((prop)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "pd-property-inner",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "color-body type",
                                                                        children: prop.type
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "color-white value",
                                                                        children: prop.value
                                                                    })
                                                                ]
                                                            }, prop.id))
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "tooltip-bottom-wrapper d-flex",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "share-react react d-flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "bid-react-area mr--15",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "react-area",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    viewBox: "0 0 17 16",
                                                    fill: "none",
                                                    width: "16",
                                                    height: "16",
                                                    className: "sc-bdnxRM sc-hKFxyN kBvkOu",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "number",
                                                    children: likeCount
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ShareDropdown, {})
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(placebid_modal/* default */.Z, {
                show: showBidModal,
                handleModal: handleBidModal
            })
        ]
    });
};
SingleSlide.propTypes = {
    title: (external_prop_types_default()).string.isRequired,
    path: (external_prop_types_default()).string.isRequired,
    latestBid: (external_prop_types_default()).string.isRequired,
    price: (external_prop_types_default()).string,
    likeCount: (external_prop_types_default()).number,
    image: types/* ImageType */.__,
    auction_date: (external_prop_types_default()).string,
    authors: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        name: (external_prop_types_default()).string.isRequired,
        slug: (external_prop_types_default()).string.isRequired,
        image: types/* ImageType */.__
    })),
    bitCount: (external_prop_types_default()).number,
    highest_bid: external_prop_types_default().shape({
        user: external_prop_types_default().shape({
            name: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired,
            image: types/* ImageType */.__
        }),
        amount: (external_prop_types_default()).string.isRequired
    }),
    categories: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        id: types/* IDType */.iJ,
        value: (external_prop_types_default()).string.isRequired,
        type: (external_prop_types_default()).string.isRequired
    })),
    properties: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        id: types/* IDType */.iJ,
        value: (external_prop_types_default()).string.isRequired,
        type: (external_prop_types_default()).string.isRequired
    }))
};
/* harmony default export */ const slide = (SingleSlide);

;// CONCATENATED MODULE: ./src/containers/hero/layout-09/index.jsx





const sliderOptions = {
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1599,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
};
const HeroArea = ({ data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "rn-slider-area fullscreen-slide",
        children: data?.banners && /*#__PURE__*/ jsx_runtime_.jsx(slider/* default */.Z, {
            options: sliderOptions,
            className: "slider-activation-banner-3 game-banner-slick-wrapper slick-arrow-style-one rn-slick-dot-style",
            children: data?.banners.map((banner)=>/*#__PURE__*/ jsx_runtime_.jsx(slider/* SliderItem */.w, {
                    className: "d-flex align-items-center padding-controler-slide-product-2 justify-content-center slide slide-style-2 fullscreen_image-banner position-relative",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(slide, {
                        title: banner.title,
                        path: banner.path,
                        latestBid: banner.latestBid,
                        price: banner.price,
                        likeCount: banner.likeCount,
                        image: banner.image,
                        auction_date: banner.auction_date,
                        authors: banner.authors,
                        bitCount: banner.bitCount,
                        highest_bid: banner.highest_bid,
                        categories: banner.categories,
                        properties: banner.properties
                    })
                }, banner.id))
        })
    });
HeroArea.propTypes = {
    data: external_prop_types_default().shape({
        banners: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: types/* IDType */.iJ,
            title: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired,
            latestBid: (external_prop_types_default()).string.isRequired,
            price: (external_prop_types_default()).string,
            likeCount: (external_prop_types_default()).number,
            image: types/* ImageType */.__,
            auction_date: (external_prop_types_default()).string,
            authors: external_prop_types_default().arrayOf(external_prop_types_default().shape({
                name: (external_prop_types_default()).string.isRequired,
                slug: (external_prop_types_default()).string.isRequired,
                image: types/* ImageType */.__
            })),
            bitCount: (external_prop_types_default()).number,
            highest_bid: external_prop_types_default().shape({
                user: external_prop_types_default().shape({
                    name: (external_prop_types_default()).string.isRequired,
                    path: (external_prop_types_default()).string.isRequired,
                    image: types/* ImageType */.__
                }),
                amount: (external_prop_types_default()).string.isRequired
            }),
            categories: external_prop_types_default().arrayOf(external_prop_types_default().shape({
                id: types/* IDType */.iJ,
                value: (external_prop_types_default()).string.isRequired,
                type: (external_prop_types_default()).string.isRequired
            })),
            properties: external_prop_types_default().arrayOf(external_prop_types_default().shape({
                id: types/* IDType */.iJ,
                value: (external_prop_types_default()).string.isRequired,
                type: (external_prop_types_default()).string.isRequired
            }))
        }))
    })
};
/* harmony default export */ const layout_09 = (HeroArea);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/top-seller/layout-01/index.jsx
var layout_01 = __webpack_require__(491);
;// CONCATENATED MODULE: ./src/containers/top-seller/layout-02/index.jsx






const SliderOptions = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
};
const TopSellerArea = ({ space , className , data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("rn-top-seller-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: data?.sellers && /*#__PURE__*/ jsx_runtime_.jsx(slider/* default */.Z, {
                options: SliderOptions,
                className: "top-seller-slick-activation creator-list-wrapper slick-gutter-15 slick-arrow-style-one rn-slick-dot-style",
                children: data.sellers.map((seller)=>/*#__PURE__*/ jsx_runtime_.jsx(slider/* SliderItem */.w, {
                        className: "creator-single",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01/* default */.Z, {
                            className: "explore",
                            name: seller.name,
                            total_sale: seller.total_sale,
                            slug: seller.slug,
                            image: {
                                src: seller.image.src,
                                alt: seller.name,
                                width: 74,
                                height: 74
                            },
                            isVarified: seller.isVarified
                        })
                    }, seller))
            })
        })
    });
TopSellerArea.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    className: (external_prop_types_default()).string,
    data: external_prop_types_default().shape({
        sellers: external_prop_types_default().arrayOf(types/* SellerType */.Df)
    })
};
/* harmony default export */ const layout_02 = (TopSellerArea);

;// CONCATENATED MODULE: ./src/containers/about/layout-01/index.jsx



const AboutArea = ({ className , space , data  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("about-market-area", space === 1 && "rn-section-gapTop", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "about-wrapper text-center",
                        children: [
                            data?.title && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: data.title
                            }),
                            data?.description && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "discription",
                                children: data.description
                            })
                        ]
                    })
                })
            })
        })
    });
AboutArea.propTypes = {
    className: (external_prop_types_default()).string,
    space: external_prop_types_default().oneOf([
        1,
        2
    ]),
    data: external_prop_types_default().shape({
        title: (external_prop_types_default()).string,
        description: (external_prop_types_default()).string
    })
};
AboutArea.defaultProps = {
    space: 1
};
/* harmony default export */ const about_layout_01 = (AboutArea);

// EXTERNAL MODULE: ./src/containers/live-explore/layout-01/index.jsx
var live_explore_layout_01 = __webpack_require__(1318);
// EXTERNAL MODULE: ./src/containers/product/layout-01/index.jsx + 1 modules
var product_layout_01 = __webpack_require__(783);
// EXTERNAL MODULE: ./src/containers/product/layout-02/index.jsx + 1 modules
var product_layout_02 = __webpack_require__(6403);
// EXTERNAL MODULE: ./src/containers/services/layout-01/index.jsx
var services_layout_01 = __webpack_require__(2036);
// EXTERNAL MODULE: ./src/containers/collection/layout-01/index.jsx
var collection_layout_01 = __webpack_require__(4085);
// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(8115);
;// CONCATENATED MODULE: ./src/data/homepages/home-09.json
const home_09_namespaceObject = JSON.parse('{"title":"home-09","content":[{"section":"hero-section","banners":[{"id":1,"title":"Digital Dod Glitter Worlds","path":"/collection","published_at":"20-JUN-2021 08:03:00","latestBid":"1/20","price":"0.244wETH","likeCount":322,"image":{"src":"/images/bg/bg-image-21.jpg"},"auction_date":"2024-10-08","authors":[{"name":"Mark Jordan","slug":"/author","image":{"src":"/images/client/client-2.png"}},{"name":"Farik Shaikh","slug":"/author","image":{"src":"/images/client/client-3.png"}},{"name":"John Doe","slug":"/author","image":{"src":"/images/client/client-5.png"}}],"bitCount":15,"highest_bid":{"user":{"name":"Atif Aslam","path":"/collection","image":{"src":"/images/client/client-7.png"}},"amount":"0.115wETH"},"categories":[{"id":1,"value":"APP","type":"ZARY"},{"id":2,"value":"TRIBUTE","type":"SOMALIAN"},{"id":3,"value":"PIPE","type":"TUNA"}],"properties":[{"id":1,"type":"HYPE TYPE","value":"CALM AF (STILL)"},{"id":2,"type":"BASTARDNESS","value":"C00LIO BASTARD"}]},{"id":2,"title":"New Dod Glitter Worlds","path":"/collection","published_at":"20-JUN-2021 08:03:00","latestBid":"1/20","price":"0.244wETH","likeCount":322,"image":{"src":"/images/bg/bg-image-22.jpg"},"auction_date":"2024-10-08","authors":[{"name":"Mark Jordan","slug":"/author","image":{"src":"/images/client/client-2.png"}},{"name":"Farik Shaikh","slug":"/author","image":{"src":"/images/client/client-3.png"}},{"name":"John Doe","slug":"/author","image":{"src":"/images/client/client-5.png"}}],"bitCount":15,"highest_bid":{"user":{"name":"Atif Aslam","path":"/collection","image":{"src":"/images/client/client-7.png"}},"amount":"0.115wETH"},"categories":[{"id":1,"value":"APP","type":"ZARY"},{"id":2,"value":"TRIBUTE","type":"SOMALIAN"},{"id":3,"value":"PIPE","type":"TUNA"}],"properties":[{"id":1,"type":"HYPE TYPE","value":"CALM AF (STILL)"},{"id":2,"type":"BASTARDNESS","value":"C00LIO BASTARD"}]},{"id":3,"title":"Collect Your Digital Product","path":"/collection","published_at":"20-JUN-2021 08:03:00","latestBid":"1/20","price":"0.244wETH","likeCount":322,"image":{"src":"/images/bg/bg-image-22.jpg"},"auction_date":"2024-10-08","authors":[{"name":"Mark Jordan","slug":"/author","image":{"src":"/images/client/client-2.png"}},{"name":"Farik Shaikh","slug":"/author","image":{"src":"/images/client/client-3.png"}},{"name":"John Doe","slug":"/author","image":{"src":"/images/client/client-5.png"}}],"bitCount":15,"highest_bid":{"user":{"name":"Atif Aslam","path":"/collection","image":{"src":"/images/client/client-7.png"}},"amount":"0.115wETH"},"categories":[{"id":1,"value":"APP","type":"ZARY"},{"id":2,"value":"TRIBUTE","type":"SOMALIAN"},{"id":3,"value":"PIPE","type":"TUNA"}],"properties":[{"id":1,"type":"HYPE TYPE","value":"CALM AF (STILL)"},{"id":2,"type":"BASTARDNESS","value":"C00LIO BASTARD"}]}]},{"section":"about-section","title":"AN NURON THEME JUST FOR GAMERS","description":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio sed non. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit."},{"section":"live-explore-section","section_title":{"title":"Live Bidding"}},{"section":"product-section","section_title":{"title":"OUR All NFT\'S"}},{"section":"product-section-two","section_title":{"title":"OUR All NFT\'S"}},{"section":"collection-section","section_title":{"title":"Top Collection"}},{"section":"service-section","section_title":{"title":"Make Easyer"},"items":[{"id":1,"title":"Set up your wallet","path":"/connect","subtitle":"Step-01","description":"Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.","images":[{"src":"/images/icons/shape-7.png"}]},{"id":2,"title":"Create your collection","path":"/collection","subtitle":"Step-02","description":"A great collection of beautiful website templates for your need. Choose the best suitable template.","images":[{"src":"/images/icons/shape-1.png"}]},{"id":3,"title":"Add your NFT\'s","path":"/connect","subtitle":"Step-03","description":"We\'ve made the template fully responsive, so it looks great on all devices: desktop, tablets and.","images":[{"src":"/images/icons/shape-5.png"}]},{"id":4,"title":"Sell Your NFT\'s","path":"/creator","subtitle":"Step-04","description":"I throw myself down among the tall grass by the stream as I lie close to the earth NFT\'s.","images":[{"src":"/images/icons/shape-6.png"}]}]}]}');
// EXTERNAL MODULE: ./src/data/sellers.json
var sellers = __webpack_require__(5678);
// EXTERNAL MODULE: ./src/data/products-02.json
var products_02 = __webpack_require__(6078);
// EXTERNAL MODULE: ./src/data/collections.json
var collections = __webpack_require__(5908);
// EXTERNAL MODULE: ./src/data/notifications.json
var notifications = __webpack_require__(4235);
;// CONCATENATED MODULE: ./src/pages/index-09.jsx














// Demo data





async function getStaticProps() {
    return {
        props: {
            className: "template-color-1"
        }
    };
}
const Home09 = ()=>{
    const content = (0,methods.normalizedData)(home_09_namespaceObject?.content || []);
    const liveAuctionData = products_02.filter((prod)=>prod?.auction_date && new Date() <= new Date(prod?.auction_date));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(wrapper/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                pageTitle: "Home Nine"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header_01/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_09, {
                        data: content["hero-section"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_02, {
                        data: {
                            sellers: sellers.slice(0, 6)
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(about_layout_01, {
                        data: content["about-section"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(live_explore_layout_01/* default */.Z, {
                        data: {
                            ...content["live-explore-section"],
                            products: liveAuctionData
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(product_layout_01/* default */.Z, {
                        data: {
                            ...content["product-section"],
                            products: products_02,
                            notifications: notifications,
                            creators: sellers
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(product_layout_02/* default */.Z, {
                        data: {
                            ...content["product-section"],
                            products: products_02
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(services_layout_01/* default */.Z, {
                        data: content["service-section"]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(collection_layout_01/* default */.Z, {
                        data: {
                            ...content["collection-section"],
                            collections: collections.slice(0, 4)
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_01/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const index_09 = (Home09);


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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("react-use");

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
var __webpack_exports__ = __webpack_require__.X(0, [3121,676,3061,5152,2472,3715,9783,6180,6188,2102,388,491,8179,5678,3195,5908,4215,2036,4085,1318,6078,8104,4890,783,6403], () => (__webpack_exec__(931)));
module.exports = __webpack_exports__;

})();