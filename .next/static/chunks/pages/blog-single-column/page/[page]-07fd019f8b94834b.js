(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6947],{12624:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-single-column/page/[page]",function(){return a(43174)}])},55924:function(e,s,a){"use strict";var t=a(85893),l=a(45697),r=a.n(l),n=a(86010),i=a(25675),c=a.n(i),o=a(24643),g=a(28663);let d=e=>{let{className:s,title:a,slug:l,timeToRead:r,category:i,image:g,rootPage:d,...u}=e;return(0,t.jsx)("div",{className:(0,n.Z)("rn-blog",s),...u,children:(0,t.jsxs)("div",{className:"inner",children:[(null==g?void 0:g.src)&&(0,t.jsx)("div",{className:"thumbnail",children:(0,t.jsx)(o.Z,{path:"".concat(d,"/").concat(l),children:(0,t.jsx)(c(),{src:g.src,alt:(null==g?void 0:g.alt)||"Personal Portfolio Images",width:(null==g?void 0:g.width)?g.width:489,height:(null==g?void 0:g.height)?g.height:366})})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("div",{className:"category-info",children:[(0,t.jsx)("div",{className:"category-list",children:(0,t.jsx)(o.Z,{path:"".concat(d,"/category/").concat(i.slug),children:i.title})}),(0,t.jsx)("div",{className:"meta",children:(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:"feather-clock"})," ",r," min read"]})})]}),(0,t.jsx)("h4",{className:"title",children:(0,t.jsxs)(o.Z,{path:"".concat(d,"/").concat(l),children:[a,(0,t.jsx)("i",{className:"feather-arrow-up-right"})]})})]})]})})};d.propTypes={className:r().string,title:r().string.isRequired,slug:r().string.isRequired,timeToRead:r().number.isRequired,category:r().shape({title:r().string,slug:r().string}).isRequired,image:g.__,rootPage:r().string},d.defaultProps={rootPage:"/blog"},s.Z=d},93578:function(e,s,a){"use strict";var t=a(85893),l=a(45697),r=a.n(l),n=a(86010),i=a(24643);let c=e=>{let{pageTitle:s,currentPage:a,className:l,space:r}=e;return(0,t.jsx)("div",{className:(0,n.Z)("rn-breadcrumb-inner",l,1===r&&"ptb--30"),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-6 col-12",children:(0,t.jsx)("h5",{className:"pageTitle text-center text-md-start",children:s})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-6 col-12",children:(0,t.jsxs)("ul",{className:"breadcrumb-list",children:[(0,t.jsx)("li",{className:"item",children:(0,t.jsx)(i.Z,{path:"/",children:"Home"})}),(0,t.jsx)("li",{className:"separator",children:(0,t.jsx)("i",{className:"feather-chevron-right"})}),(0,t.jsx)("li",{className:"item current",children:a||s})]})})]})})})};c.propTypes={pageTitle:r().string.isRequired,currentPage:r().string,className:r().string,space:r().oneOf([1])},c.defaultProps={space:1},s.Z=c},28934:function(e,s,a){"use strict";var t=a(85893),l=a(45697),r=a.n(l),n=a(86010),i=a(24643);let c=e=>{let{className:s,currentPage:a,numberOfPages:l,rootPage:r}=e,c=a-1==1?r:"".concat(r,"/page/").concat((a-1).toString()),o="".concat(r,"/page/").concat((a+1).toString());return(0,t.jsx)("nav",{className:(0,n.Z)("pagination-wrapper",s),"aria-label":"Page navigation example",children:(0,t.jsxs)("ul",{className:"pagination",children:[1===a?(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)("button",{type:"button",className:"disabled",children:"Previous"})}):(0,t.jsx)("li",{className:"page-item prev",children:(0,t.jsx)(i.Z,{path:c,children:"Previous"})}),Array.from({length:l},(e,s)=>a===s+1?(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(i.Z,{className:"active",path:"".concat(r,"/").concat(0===s?"":"page/".concat(s+1)),children:s+1})},"page-number-".concat(s+1)):(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)(i.Z,{path:"".concat(0===s?r:"".concat(r,"/page/").concat(s+1)),children:s+1})},"page-number-".concat(s+1))),a===l?(0,t.jsx)("li",{className:"page-item",children:(0,t.jsx)("button",{type:"button",className:"disabled",children:"Next"})}):(0,t.jsx)("li",{className:"page-item next",children:(0,t.jsx)(i.Z,{path:o,children:"Next"})})]})})};c.propTypes={className:r().string,currentPage:r().number,numberOfPages:r().number,rootPage:r().string},c.defaultProps={rootPage:"/blog"},s.Z=c},21085:function(e,s,a){"use strict";var t=a(85893),l=a(45697),r=a.n(l),n=a(86010),i=a(24643),c=a(78115);let o=e=>{let{categories:s,rootPage:a,className:l}=e,r=[];return null==s||s.forEach(e=>{let s={...e,count:1},a=(0,c.containsObject)(s,r);if(-1!==a){let t=r[a].count;r[a]={title:e.title,slug:e.slug,count:t+1}}else r.push(s)}),(0,t.jsxs)("div",{className:(0,n.Z)("rbt-single-widget widget_categories",l),children:[(0,t.jsx)("h3",{className:"title",children:"Categories"}),(0,t.jsx)("div",{className:"inner",children:(0,t.jsx)("ul",{className:"category-list",children:null==r?void 0:r.map(e=>(0,t.jsx)("li",{children:(0,t.jsxs)(i.Z,{path:"".concat(a,"/category/").concat(e.slug),children:[(0,t.jsx)("span",{className:"left-content",children:e.title}),(0,t.jsx)("span",{className:"count-text",children:e.count})]})},e.slug))})})]})};o.propTypes={categories:r().arrayOf(r().shape({})),rootPage:r().string,className:r().string},o.defaultProps={rootPage:"/blog"},s.Z=o},42442:function(e,s,a){"use strict";var t=a(85893),l=a(45697),r=a.n(l),n=a(24643),i=a(78115);let c=e=>{let{tags:s,rootPage:a}=e,l=[...new Set((0,i.flatDeep)(s).map(e=>e.title))];return(0,t.jsxs)("div",{className:"rbt-single-widget widget_tag_cloud mt--40",children:[(0,t.jsx)("h3",{className:"title",children:"Tags"}),(0,t.jsx)("div",{className:"inner mt--20",children:(0,t.jsx)("div",{className:"tagcloud",children:null==l?void 0:l.map(e=>(0,t.jsx)(n.Z,{path:"".concat(a,"/tag/").concat((0,i.slugify)(e)),children:e},e))})})]})};c.propTypes={tags:r().arrayOf(r().arrayOf(r().shape({}))),rootPage:r().string},c.defaultProps={rootPage:"/blog"},s.Z=c},17539:function(e,s,a){"use strict";a.d(s,{Z:function(){return u}});var t=a(85893),l=a(45697),r=a.n(l),n=a(86010),i=a(21085),c=a(24643);let o=e=>{let{recentPosts:s,rootPage:a}=e;return(0,t.jsxs)("div",{className:"rbt-single-widget widget_recent_entries mt--40",children:[(0,t.jsx)("h3",{className:"title",children:"Recent Posts"}),(0,t.jsx)("div",{className:"inner",children:(0,t.jsx)("ul",{children:null==s?void 0:s.map(e=>(0,t.jsxs)("li",{children:[(0,t.jsx)(c.Z,{className:"d-block",path:"".concat(a,"/").concat(e.slug),children:e.title}),(0,t.jsx)("span",{className:"cate",children:e.category.title})]},e.slug))})})]})};o.propTypes={recentPosts:r().arrayOf(r().shape({title:r().string,slug:r().string,category:r().shape({title:r().string})})),rootPage:r().string},o.defaultProps={rootPage:"/blog"};var g=a(42442);let d=e=>{let{className:s,categories:a,recentPosts:l,tags:r,rootPage:c}=e;return(0,t.jsxs)("aside",{className:(0,n.Z)("rwt-sidebar",s),children:[(null==a?void 0:a.length)>0&&(0,t.jsx)(i.Z,{categories:a,rootPage:c}),(null==l?void 0:l.length)>0&&(0,t.jsx)(o,{recentPosts:l,rootPage:c}),(null==r?void 0:r.length)>0&&(0,t.jsx)(g.Z,{tags:r,rootPage:c})]})};d.propTypes={className:r().string,categories:r().arrayOf(r().shape({})),recentPosts:r().arrayOf(r().shape({})),tags:r().arrayOf(r().arrayOf(r().shape({}))),rootPage:r().string};var u=d},4369:function(e,s,a){"use strict";var t=a(85893),l=a(45697),r=a.n(l),n=a(86010),i=a(55924);let c=e=>{var s;let{className:a,data:l,rootPage:r}=e;return(0,t.jsx)("div",{className:(0,n.Z)("blog-wrapper",a),children:null==l?void 0:null===(s=l.posts)||void 0===s?void 0:s.map(e=>(0,t.jsx)(i.Z,{"data-sal":"slide-up","data-sal-duration":"800","data-sal-delay":"150",className:"single-column mb--30",title:e.title,slug:e.slug,category:e.category,timeToRead:e.timeToRead,image:{...e.image,width:883,height:661},rootPage:r},e.slug))})};c.propTypes={className:r().string,data:r().shape({posts:r().arrayOf(r().shape({}))}),rootPage:r().string},s.Z=c},43174:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSG:function(){return p}});var t=a(85893),l=a(45697),r=a.n(l),n=a(3191),i=a(63019),c=a(78205),o=a(5728),g=a(93578),d=a(4369),u=a(17539),m=a(28934);let h=e=>{let{posts:s,categories:a,recentPosts:l,tags:r,pagiData:h,page:p}=e;return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(n.Z,{pageTitle:"Blog Single Column - Page: ".concat(p)}),(0,t.jsx)(c.Z,{}),(0,t.jsxs)("main",{id:"main-content",children:[(0,t.jsx)(g.Z,{pageTitle:"Blog Single Column",currentPage:"Blog Single Column"}),(0,t.jsx)("div",{className:"rn-blog-area rn-blog-details-default rn-section-gapTop",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"row g-6",children:[(0,t.jsx)("div",{className:"col-xl-8 col-lg-8",children:(0,t.jsx)(d.Z,{data:{posts:s},rootPage:"/blog-single-column"})}),(0,t.jsx)("div",{className:"col-xl-4 col-lg-4 mt_md--40 mt_sm--40",children:(0,t.jsx)(u.Z,{categories:a,recentPosts:l,tags:r,rootPage:"/blog-single-column"})})]}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-8 sal-animate","data-sal":"slide-up","data-sal-delay":"550","data-sal-duration":"800",children:(null==h?void 0:h.numberOfPages)>1&&(0,t.jsx)(m.Z,{currentPage:h.currentPage,numberOfPages:h.numberOfPages,rootPage:"/blog-single-column",className:"single-column-blog"})})})]})})]}),(0,t.jsx)(o.Z,{})]})};h.propTypes={posts:r().arrayOf(r().shape({})),categories:r().arrayOf(r().shape({})),recentPosts:r().arrayOf(r().shape({})),tags:r().arrayOf(r().arrayOf(r().shape({}))),pagiData:r().shape({currentPage:r().number.isRequired,numberOfPages:r().number.isRequired}),page:r().number};var p=!0;s.default=h}},function(e){e.O(0,[8543,1809,8539,6180,9774,2888,179],function(){return e(e.s=12624)}),_N_E=e.O()}]);