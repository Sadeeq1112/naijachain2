"use strict";
exports.id = 6180;
exports.ids = [6180];
exports.modules = {

/***/ 5728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer_01)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/logo/index.jsx
var logo = __webpack_require__(3697);
;// CONCATENATED MODULE: ./src/components/widgets/logo-widget/index.jsx



const LogoWidget = ({ data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-left",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                logo: data.logo
            }),
            data?.text && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "rn-footer-describe",
                children: data.text
            })
        ]
    });
LogoWidget.propTypes = {
    data: external_prop_types_default().shape({
        logo: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            src: (external_prop_types_default()).string.isRequired,
            alt: (external_prop_types_default()).string
        })),
        text: (external_prop_types_default()).string
    })
};
/* harmony default export */ const logo_widget = (LogoWidget);

;// CONCATENATED MODULE: ./src/components/widgets/newsletter-widget/index.jsx


const NewsletterWidget = ({ data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "widget-bottom mt--40 pt--40",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: "title",
                children: data.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "input-group",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        className: "form-control bg-color--2",
                        placeholder: "Your username",
                        "aria-label": "Recipient's username"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "input-group-append",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn btn-primary-alta btn-outline-secondary",
                            type: "button",
                            children: "Subscribe"
                        })
                    })
                ]
            }),
            data?.note && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "newsletter-dsc",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: data.note
                })
            })
        ]
    });
NewsletterWidget.propTypes = {
    data: external_prop_types_default().shape({
        title: (external_prop_types_default()).string,
        note: (external_prop_types_default()).string
    })
};
/* harmony default export */ const newsletter_widget = (NewsletterWidget);

// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
;// CONCATENATED MODULE: ./src/components/widgets/quicklink-widget/index.jsx



const QuicklinkWidget = ({ data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-widget widget-quicklink",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: "widget-title",
                children: data.title
            }),
            data?.menu && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "footer-list-one",
                children: data.menu.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "single-list",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                            path: nav.path,
                            children: nav.text
                        })
                    }, nav.id))
            })
        ]
    });
QuicklinkWidget.propTypes = {
    data: external_prop_types_default().shape({
        title: (external_prop_types_default()).string,
        menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: external_prop_types_default().oneOfType([
                (external_prop_types_default()).number,
                (external_prop_types_default()).string
            ]).isRequired,
            text: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired
        }))
    })
};
/* harmony default export */ const quicklink_widget = (QuicklinkWidget);

;// CONCATENATED MODULE: ./src/components/widgets/information-widget/index.jsx



const InformationWidget = ({ data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-widget widget-information",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: "widget-title",
                children: data.title
            }),
            data?.menu && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "footer-list-one",
                children: data.menu.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "single-list",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                            path: nav.path,
                            children: nav.text
                        })
                    }, nav.id))
            })
        ]
    });
InformationWidget.propTypes = {
    data: external_prop_types_default().shape({
        title: (external_prop_types_default()).string,
        menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: external_prop_types_default().oneOfType([
                (external_prop_types_default()).number,
                (external_prop_types_default()).string
            ]).isRequired,
            text: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired
        }))
    })
};
/* harmony default export */ const information_widget = (InformationWidget);

;// CONCATENATED MODULE: ./src/components/widgets/sold-out-widget/index.jsx




const SoldOutWidget = ({ data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-widget",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: "widget-title",
                children: data.title
            }),
            data?.products && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "footer-recent-post",
                children: data.products.map((product)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "recent-post",
                        children: [
                            product.image?.src && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "thumbnail",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                    path: product.path,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: product.image.src,
                                        alt: product.image?.alt || "Product Images",
                                        width: 60,
                                        height: 60
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "title",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                            path: product.path,
                                            children: product.title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: product.highestBid
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "price",
                                        children: product.price
                                    })
                                ]
                            })
                        ]
                    }, product.id))
            })
        ]
    });
SoldOutWidget.propTypes = {
    data: external_prop_types_default().shape({
        title: (external_prop_types_default()).string,
        products: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: external_prop_types_default().oneOfType([
                (external_prop_types_default()).number,
                (external_prop_types_default()).string
            ]).isRequired,
            title: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired,
            highestBid: (external_prop_types_default()).string.isRequired,
            price: (external_prop_types_default()).string.isRequired,
            image: external_prop_types_default().shape({
                src: (external_prop_types_default()).string.isRequired,
                alt: (external_prop_types_default()).string
            })
        }))
    })
};
/* harmony default export */ const sold_out_widget = (SoldOutWidget);

;// CONCATENATED MODULE: ./src/components/widgets/footer-link-widget/index.jsx



const FooterLinkWidget = ({ data  })=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "privacy",
        children: data?.menu?.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                    path: nav.path,
                    children: nav.text
                })
            }, nav.id))
    });
FooterLinkWidget.propTypes = {
    data: external_prop_types_default().shape({
        menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({
            id: external_prop_types_default().oneOfType([
                (external_prop_types_default()).number,
                (external_prop_types_default()).string
            ]).isRequired,
            text: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired
        }))
    })
};
/* harmony default export */ const footer_link_widget = (FooterLinkWidget);

;// CONCATENATED MODULE: ./src/components/widgets/social-widget/index.jsx


const SocialWidget = ({ socials  })=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "social-copyright",
        children: socials?.map((social)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: social.link,
                    target: "_blank",
                    rel: "noreferrer",
                    "aria-label": social.title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: social.icon
                    })
                })
            }, social.id))
    });
SocialWidget.propTypes = {
    socials: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        id: external_prop_types_default().oneOfType([
            (external_prop_types_default()).number,
            (external_prop_types_default()).string
        ]).isRequired,
        icon: (external_prop_types_default()).string.isRequired,
        link: (external_prop_types_default()).string.isRequired,
        title: (external_prop_types_default()).string.isRequired
    }))
};
/* harmony default export */ const social_widget = (SocialWidget);

// EXTERNAL MODULE: ./src/utils/types.js
var types = __webpack_require__(8663);
;// CONCATENATED MODULE: ./src/data/general/footer-01.json
const footer_01_namespaceObject = JSON.parse('{"e7":{"logo":[{"src":"/images/logo/NaijaChain WHITE 2.png","alt":"logo"}],"text":"Empowering Nigerian artisans with a decentralized marketplace for their crafts."},"eN":{"title":"Get The Latest DMLA Updates","note":"Your email is safe with us. We don\'t spam."},"zT":{"title":"DMLA","menu":[{"id":1,"text":"Explore Crafts","path":"/explore-01"},{"id":2,"text":"Create Collection","path":"/create"},{"id":3,"text":"Add Crafts","path":"/add"},{"id":4,"text":"Sell Crafts","path":"/sell"},{"id":5,"text":"Blog","path":"/blog"},{"id":6,"text":"Activity Log","path":"/activity"},{"id":7,"text":"Contact Us","path":"/contact"}]},"zn":{"title":"Information","menu":[{"id":1,"text":"About Us","path":"/about"},{"id":2,"text":"FAQs","path":"/faqs"},{"id":3,"text":"Support","path":"/support"},{"id":4,"text":"Terms of Service","path":"/terms"},{"id":5,"text":"Privacy Policy","path":"/privacy"}]},"N1":{"title":"Recently Sold Crafts","products":[{"id":1,"title":"Handmade Basket","path":"/product","highestBid":"Highest bid 1/20","price":"0.244wETH","image":{"src":"/images/portfolio/portfolio-01.jpg"}},{"id":2,"title":"Wooden Sculpture","path":"/product","highestBid":"Highest bid 1/20","price":"0.022wETH","image":{"src":"/images/portfolio/portfolio-02.jpg"}},{"id":3,"title":"Handwoven Rug","path":"/product","highestBid":"Highest bid 1/20","price":"0.892wETH","image":{"src":"/images/portfolio/portfolio-03.jpg"}}]},"zk":{"menu":[{"id":1,"text":"Terms","path":"/terms-condition"},{"id":2,"text":"Privacy Policy","path":"/privacy-policy"}]},"M6":"©2022 NaijaChainn. All rights reserved"}');
;// CONCATENATED MODULE: ./src/data/general/contact.json
const contact_namespaceObject = JSON.parse('{"M":[{"id":1,"icon":"feather-facebook","link":"https://facebook.com","title":"Facebook"},{"id":2,"icon":"feather-twitter","link":"https://twitter.com","title":"Twitter"},{"id":3,"icon":"feather-instagram","link":"https://instagram.com","title":"Instagram"},{"id":4,"icon":"feather-linkedin","link":"https://linkedin.com","title":"linkedin"},{"id":5,"icon":"feather-mail","link":"https://abubakarelsadeeq521@gmail.com","title":"mail"}]}');
;// CONCATENATED MODULE: ./src/layouts/footer/footer-01/index.jsx












// Demo data


const Footer = ({ space , className , data  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_clsx_default()("rn-footer-one bg-color--1", space === 1 && "rn-section-gap mt--100 mt_md--80 mt_sm--80", space === 2 && "rn-section-gap", space === 3 && "mt--100 mt_md--80 mt_sm--80", className),
                children: [
                    data?.items && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "footer-top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "nu-brand-area",
                                    children: data.items.map(({ id , image  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: image?.src && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: image.src,
                                                alt: image?.alt || "nuron-brand_nft",
                                                sizes: "200px",
                                                fill: true,
                                                style: {
                                                    objectFit: "contain"
                                                }
                                            })
                                        }, id))
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row gx-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6 col-sm-6 col-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "widget-content-wrapper",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(logo_widget, {
                                                data: footer_01_namespaceObject.e7
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(newsletter_widget, {
                                                data: footer_01_namespaceObject.eN
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(quicklink_widget, {
                                        data: footer_01_namespaceObject.zT
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(information_widget, {
                                        data: footer_01_namespaceObject.zn
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(sold_out_widget, {
                                        data: footer_01_namespaceObject.N1
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "copy-right-one ptb--20 bg-color--1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-12 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "copyright-left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: footer_01_namespaceObject.M6
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(footer_link_widget, {
                                            data: footer_01_namespaceObject.zk
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-12 col-sm-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyright-right",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(social_widget, {
                                        socials: contact_namespaceObject.M
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
Footer.propTypes = {
    space: external_prop_types_default().oneOf([
        1,
        2,
        3
    ]),
    className: (external_prop_types_default()).string,
    data: external_prop_types_default().shape({
        items: external_prop_types_default().arrayOf(types/* ItemType */.qG)
    })
};
Footer.defaultProps = {
    space: 1
};
/* harmony default export */ const footer_01 = (Footer);


/***/ }),

/***/ 8205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_01)
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
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(8519);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
// EXTERNAL MODULE: ./src/components/logo/index.jsx
var components_logo = __webpack_require__(3697);
// EXTERNAL MODULE: ./src/components/ui/anchor/index.jsx
var ui_anchor = __webpack_require__(4643);
;// CONCATENATED MODULE: ./src/components/menu/main-menu/submenu.jsx



const SubMenu = ({ menu  })=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "submenu",
        children: menu.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                    path: nav.path,
                    className: nav.isLive ? "live-expo" : "",
                    children: [
                        nav.text,
                        nav?.icon && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: `feather ${nav.icon}`
                        })
                    ]
                })
            }, nav.id))
    });
SubMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const submenu = (SubMenu);

;// CONCATENATED MODULE: ./src/components/menu/main-menu/megamenu.jsx



const MegaMenu = ({ menu  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "rn-megamenu",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "wrapper",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row row--0",
                children: menu.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 single-mega-item",
                        children: nav?.submenu && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "mega-menu-item",
                            children: nav.submenu.map((subnav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                                        path: subnav.path,
                                        children: [
                                            subnav.text,
                                            subnav?.icon && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `feather ${subnav.icon}`
                                            })
                                        ]
                                    })
                                }, subnav.id))
                        })
                    }, nav.id))
            })
        })
    });
MegaMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const megamenu = (MegaMenu);

;// CONCATENATED MODULE: ./src/components/menu/main-menu/index.jsx






const MainMenu = ({ menu  })=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "mainmenu",
        children: menu.map((nav)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: external_clsx_default()(!!nav.submenu && "has-droupdown has-menu-child-item", !!nav.megamenu && "with-megamenu"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                        className: "its_new",
                        path: nav.path,
                        children: nav.text
                    }),
                    nav?.submenu && /*#__PURE__*/ jsx_runtime_.jsx(submenu, {
                        menu: nav.submenu
                    }),
                    nav?.megamenu && /*#__PURE__*/ jsx_runtime_.jsx(megamenu, {
                        menu: nav.megamenu
                    })
                ]
            }, nav.id))
    });
MainMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const main_menu = (MainMenu);

// EXTERNAL MODULE: ./src/components/ui/offcanvas/index.js + 3 modules
var offcanvas = __webpack_require__(9857);
// EXTERNAL MODULE: ./src/utils/methods.js
var methods = __webpack_require__(8115);
;// CONCATENATED MODULE: ./src/components/menu/mobile-menu/submenu.jsx



const submenu_SubMenu = ({ menu  })=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "submenu mobile-menu-children",
        children: menu.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                    path: nav.path,
                    children: [
                        nav.text,
                        nav?.icon && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: `feather ${nav.icon}`
                        })
                    ]
                })
            }, nav.id))
    });
submenu_SubMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const mobile_menu_submenu = (submenu_SubMenu);

;// CONCATENATED MODULE: ./src/components/menu/mobile-menu/megamenu.jsx



const megamenu_MegaMenu = ({ menu  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "rn-megamenu mobile-menu-children",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "wrapper",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row row--0",
                children: menu.map((nav)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 single-mega-item",
                        children: nav?.submenu && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "mega-menu-item",
                            children: nav.submenu.map((subnav)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                                        path: subnav.path,
                                        children: [
                                            subnav.text,
                                            subnav?.icon && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `feather ${subnav.icon}`
                                            })
                                        ]
                                    })
                                }, subnav.id))
                        })
                    }, nav.id))
            })
        })
    });
megamenu_MegaMenu.propTypes = {
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({}))
};
/* harmony default export */ const mobile_menu_megamenu = (megamenu_MegaMenu);

;// CONCATENATED MODULE: ./src/components/menu/mobile-menu/index.jsx









const MobileMenu = ({ isOpen , onClick , menu , logo  })=>{
    const onClickHandler = (e)=>{
        e.preventDefault();
        const { target  } = e;
        const { parentElement: { parentElement: { childNodes  }  } , nextElementSibling  } = target;
        (0,methods.slideToggle)(nextElementSibling);
        childNodes.forEach((child)=>{
            if (child.id === target.parentElement.id) return;
            if (child.classList.contains("has-children")) {
                (0,methods.slideUp)(child.lastElementChild);
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(offcanvas/* Offcanvas */.TB, {
        isOpen: isOpen,
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(offcanvas/* OffcanvasHeader */.Us, {
                onClick: onClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_logo/* default */.Z, {
                    logo: logo
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(offcanvas/* OffcanvasBody */.UT, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "mainmenu",
                        children: menu?.map((nav)=>{
                            const hasChildren = !!nav.submenu || !!nav.megamenu;
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: external_clsx_default()(!!nav.submenu && "has-droupdown", !!nav.megamenu && "with-megamenu", hasChildren && "has-children"),
                                id: nav.id,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ui_anchor/* default */.Z, {
                                        className: "nav-link its_new",
                                        path: hasChildren ? "#!" : nav.path,
                                        onClick: hasChildren ? onClickHandler : (e)=>e,
                                        children: nav.text
                                    }),
                                    nav?.submenu && /*#__PURE__*/ jsx_runtime_.jsx(mobile_menu_submenu, {
                                        menu: nav.submenu
                                    }),
                                    nav?.megamenu && /*#__PURE__*/ jsx_runtime_.jsx(mobile_menu_megamenu, {
                                        menu: nav.megamenu
                                    })
                                ]
                            }, nav.id);
                        })
                    })
                })
            })
        ]
    });
};
MobileMenu.propTypes = {
    isOpen: (external_prop_types_default()).bool.isRequired,
    onClick: (external_prop_types_default()).func.isRequired,
    menu: external_prop_types_default().arrayOf(external_prop_types_default().shape({})),
    logo: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        src: (external_prop_types_default()).string.isRequired,
        alt: (external_prop_types_default()).string
    }))
};
/* harmony default export */ const mobile_menu = (MobileMenu);

;// CONCATENATED MODULE: ./src/components/search-form/layout-01/index.jsx

const SearchForm = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "search-form-wrapper",
        action: "#",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "search",
                placeholder: "Search Here",
                "aria-label": "Search"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search-icon",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "feather-search"
                    })
                })
            })
        ]
    });
/* harmony default export */ const layout_01 = (SearchForm);

// EXTERNAL MODULE: ./src/components/search-form/layout-02/index.jsx
var layout_02 = __webpack_require__(5353);
// EXTERNAL MODULE: ./src/components/user-dropdown/index.jsx
var user_dropdown = __webpack_require__(6067);
// EXTERNAL MODULE: ./src/components/color-switcher/index.jsx
var color_switcher = __webpack_require__(4617);
// EXTERNAL MODULE: ./src/components/ui/burger-button/index.jsx
var burger_button = __webpack_require__(6735);
// EXTERNAL MODULE: ./src/components/ui/button/index.jsx
var ui_button = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/hooks/index.js + 4 modules
var hooks = __webpack_require__(5009);
;// CONCATENATED MODULE: ./src/data/general/header-01.json
const header_01_namespaceObject = JSON.parse('{"j":[{"src":"/images/logo/NaijaChain WHITE 2.png"},{"src":"/images/logo/NaijaChain.png"}],"Q":"/activity"}');
;// CONCATENATED MODULE: ./src/data/general/menu-01.json
const menu_01_namespaceObject = JSON.parse('[{"id":1,"text":"Home","path":"/","icon":"feather-home"},{"id":2,"text":"About","path":"/about"},{"id":3,"text":"Explore","path":"#!"},{"id":5,"text":"Blog","path":"/blog"},{"id":6,"text":"Contact","path":"/contact"}]');
;// CONCATENATED MODULE: ./src/layouts/header/header-01/index.jsx
/* eslint-disable no-console */ 

















const Header = ({ className  })=>{
    const sticky = (0,hooks/* useSticky */.Ax)();
    const { offcanvas , offcanvasHandler  } = (0,hooks/* useOffcanvas */.vI)();
    const { search , searchHandler  } = (0,hooks/* useFlyoutSearch */.Dm)();
    const [isAuthenticated, setIsAuthenticated] = (0,external_react_.useState)(false);
    const [ethBalance, setEthBalance] = (0,external_react_.useState)("");
    const detectCurrentProvider = ()=>{
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            console.log("Non-ethereum browser detected. You should install Metamask");
        }
        return provider;
    };
    const onConnect = async ()=>{
        try {
            const currentProvider = detectCurrentProvider();
            if (currentProvider) {
                await currentProvider.request({
                    method: "eth_requestAccounts"
                });
                const web3 = new (external_web3_default())(currentProvider);
                const userAccount = await web3.eth.getAccounts();
                const account = userAccount[0];
                const getEthBalance = await web3.eth.getBalance(account);
                setEthBalance(getEthBalance);
                setIsAuthenticated(true);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const onDisconnect = ()=>{
        setIsAuthenticated(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: external_clsx_default()("rn-header haeder-default black-logo-version header--fixed header--sticky", sticky && "sticky", className),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-inner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "header-left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_logo/* default */.Z, {
                                        logo: header_01_namespaceObject.j
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mainmenu-wrapper",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            id: "sideNav",
                                            className: "mainmenu-nav d-none d-xl-block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(main_menu, {
                                                menu: menu_01_namespaceObject
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "header-right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "setting-option d-none d-lg-block",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_01, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "setting-option rn-icon-list d-block d-lg-none",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon-box search-mobile-icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    "aria-label": "Click here to open search form",
                                                    onClick: searchHandler,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "feather-search"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(layout_02/* default */.Z, {
                                                isOpen: search
                                            })
                                        ]
                                    }),
                                    !isAuthenticated && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "setting-option header-btn",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "icon-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                                color: "primary-alta",
                                                className: "connectBtn",
                                                size: "small",
                                                onClick: onConnect,
                                                children: "Wallet connect"
                                            })
                                        })
                                    }),
                                    isAuthenticated && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "setting-option rn-icon-list user-account",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(user_dropdown/* default */.Z, {
                                            onDisconnect: onDisconnect,
                                            ethBalance: ethBalance
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "setting-option rn-icon-list notification-badge",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "icon-box",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_anchor/* default */.Z, {
                                                path: header_01_namespaceObject.Q,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "feather-bell"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "badge",
                                                        children: "6"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "setting-option mobile-menu-bar d-block d-xl-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hamberger",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(burger_button/* default */.Z, {
                                                onClick: offcanvasHandler
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "my_switcher",
                                        className: "setting-option my_switcher",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(color_switcher/* default */.Z, {})
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(mobile_menu, {
                isOpen: offcanvas,
                onClick: offcanvasHandler,
                menu: menu_01_namespaceObject,
                logo: header_01_namespaceObject.j
            })
        ]
    });
};
Header.propTypes = {
    className: (external_prop_types_default()).string
};
/* harmony default export */ const header_01 = (Header);


/***/ })

};
;