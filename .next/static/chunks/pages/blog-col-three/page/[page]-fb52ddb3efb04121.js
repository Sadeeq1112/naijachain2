(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2957],{97525:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-col-three/page/[page]",function(){return s(91583)}])},55924:function(e,a,s){"use strict";var t=s(85893),r=s(45697),i=s.n(r),n=s(86010),l=s(25675),c=s.n(l),o=s(24643),d=s(28663);let g=e=>{let{className:a,title:s,slug:r,timeToRead:i,category:l,image:d,rootPage:g,...u}=e;return(0,t.jsx)("div",{className:(0,n.Z)("rn-blog",a),...u,children:(0,t.jsxs)("div",{className:"inner",children:[(null==d?void 0:d.src)&&(0,t.jsx)("div",{className:"thumbnail",children:(0,t.jsx)(o.Z,{path:"".concat(g,"/").concat(r),children:(0,t.jsx)(c(),{src:d.src,alt:(null==d?void 0:d.alt)||"Personal Portfolio Images",width:(null==d?void 0:d.width)?d.width:489,height:(null==d?void 0:d.height)?d.height:366})})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("div",{className:"category-info",children:[(0,t.jsx)("div",{className:"category-list",children:(0,t.jsx)(o.Z,{path:"".concat(g,"/category/").concat(l.slug),children:l.title})}),(0,t.jsx)("div",{className:"meta",children:(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:"feather-clock"})," ",i," min read"]})})]}),(0,t.jsx)("h4",{className:"title",children:(0,t.jsxs)(o.Z,{path:"".concat(g,"/").concat(r),children:[s,(0,t.jsx)("i",{className:"feather-arrow-up-right"})]})})]})]})})};g.propTypes={className:i().string,title:i().string.isRequired,slug:i().string.isRequired,timeToRead:i().number.isRequired,category:i().shape({title:i().string,slug:i().string}).isRequired,image:d.__,rootPage:i().string},g.defaultProps={rootPage:"/blog"},a.Z=g},93578:function(e,a,s){"use strict";var t=s(85893),r=s(45697),i=s.n(r),n=s(86010),l=s(24643);let c=e=>{let{pageTitle:a,currentPage:s,className:r,space:i}=e;return(0,t.jsx)("div",{className:(0,n.Z)("rn-breadcrumb-inner",r,1===i&&"ptb--30"),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-6 col-12",children:(0,t.jsx)("h5",{className:"pageTitle text-center text-md-start",children:a})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-6 col-12",children:(0,t.jsxs)("ul",{className:"breadcrumb-list",children:[(0,t.jsx)("li",{className:"item",children:(0,t.jsx)(l.Z,{path:"/",children:"Home"})}),(0,t.jsx)("li",{className:"separator",children:(0,t.jsx)("i",{className:"feather-chevron-right"})}),(0,t.jsx)("li",{className:"item current",children:s||a})]})})]})})})};c.propTypes={pageTitle:i().string.isRequired,currentPage:i().string,className:i().string,space:i().oneOf([1])},c.defaultProps={space:1},a.Z=c},28934:function(e,a,s){"use strict";var t=s(85893),r=s(45697),i=s.n(r),n=s(86010),l=s(24643);let c=e=>{let{className:a,currentPage:s,numberOfPages:r,rootPage:i}=e,c=s-1==1?i:"".concat(i,"/page/").concat((s-1).toString()),o="".concat(i,"/page/").concat((s+1).toString());return(0,t.jsx)("nav",{className:(0,n.Z)("pagination-wrapper",a),"aria-label":"Page navigation example",children:(0,t.jsxs)("ul",{className:"pagination",children:[1===s?(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)("button",{type:"button",className:"disabled",children:"Previous"})}):(0,t.jsx)("li",{className:"page-item prev",children:(0,t.jsx)(l.Z,{path:c,children:"Previous"})}),Array.from({length:r},(e,a)=>s===a+1?(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(l.Z,{className:"active",path:"".concat(i,"/").concat(0===a?"":"page/".concat(a+1)),children:a+1})},"page-number-".concat(a+1)):(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(l.Z,{path:"".concat(0===a?i:"".concat(i,"/page/").concat(a+1)),children:a+1})},"page-number-".concat(a+1))),s===r?(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)("button",{type:"button",className:"disabled",children:"Next"})}):(0,t.jsx)("li",{className:"page-item next",children:(0,t.jsx)(l.Z,{path:o,children:"Next"})})]})})};c.propTypes={className:i().string,currentPage:i().number,numberOfPages:i().number,rootPage:i().string},c.defaultProps={rootPage:"/blog"},a.Z=c},55887:function(e,a,s){"use strict";var t=s(85893),r=s(45697),i=s.n(r),n=s(86010),l=s(55924),c=s(28934);let o=e=>{var a,s;let{space:r,className:i,data:o,rootPage:d}=e;return(0,t.jsx)("div",{className:(0,n.Z)("rn-blog-area",1===r&&"rn-section-gapTop",i),children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"row g-5",children:null==o?void 0:null===(a=o.posts)||void 0===a?void 0:a.map(e=>(0,t.jsx)("div",{className:"col-lg-4 col-md-6 col-12 sal-animate","data-sal":"slide-up","data-sal-duration":"800","data-sal-delay":"150",children:(0,t.jsx)(l.Z,{title:e.title,slug:e.slug,category:e.category,timeToRead:e.timeToRead,image:{...e.image,width:653,height:489},rootPage:d})},e.slug))}),(null===(s=o.pagiData)||void 0===s?void 0:s.numberOfPages)>1&&(0,t.jsx)(c.Z,{currentPage:o.pagiData.currentPage,numberOfPages:o.pagiData.numberOfPages,rootPage:d})]})})};o.propTypes={space:i().oneOf([1,2]),className:i().string,data:i().shape({posts:i().arrayOf(i().shape({})),pagiData:i().shape({currentPage:i().number.isRequired,numberOfPages:i().number.isRequired})}),rootPage:i().string},o.defaultProps={space:1},a.Z=o},91583:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSG:function(){return m}});var t=s(85893),r=s(45697),i=s.n(r),n=s(3191),l=s(63019),c=s(78205),o=s(5728),d=s(93578),g=s(55887);let u=e=>{let{posts:a,pagiData:s,page:r}=e;return(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(n.Z,{pageTitle:"Blog Three Column - Page: ".concat(r)}),(0,t.jsx)(c.Z,{}),(0,t.jsxs)("main",{id:"main-content",children:[(0,t.jsx)(d.Z,{pageTitle:"Blog Two Column",currentPage:"Blog Two Column"}),(0,t.jsx)(g.Z,{data:{posts:a,pagiData:s},rootPage:"/blog-col-three"})]}),(0,t.jsx)(o.Z,{})]})};u.propTypes={posts:i().arrayOf(i().shape({})),pagiData:i().shape({currentPage:i().number.isRequired,numberOfPages:i().number.isRequired}),page:i().number};var m=!0;a.default=u}},function(e){e.O(0,[8543,1809,8539,6180,9774,2888,179],function(){return e(e.s=97525)}),_N_E=e.O()}]);