(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5801],{34592:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-up",function(){return a(82602)}])},93578:function(e,s,a){"use strict";var i=a(85893),l=a(45697),n=a.n(l),r=a(86010),t=a(24643);let c=e=>{let{pageTitle:s,currentPage:a,className:l,space:n}=e;return(0,i.jsx)("div",{className:(0,r.Z)("rn-breadcrumb-inner",l,1===n&&"ptb--30"),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsx)("div",{className:"col-lg-6 col-md-6 col-12",children:(0,i.jsx)("h5",{className:"pageTitle text-center text-md-start",children:s})}),(0,i.jsx)("div",{className:"col-lg-6 col-md-6 col-12",children:(0,i.jsxs)("ul",{className:"breadcrumb-list",children:[(0,i.jsx)("li",{className:"item",children:(0,i.jsx)(t.Z,{path:"/",children:"Home"})}),(0,i.jsx)("li",{className:"separator",children:(0,i.jsx)("i",{className:"feather-chevron-right"})}),(0,i.jsx)("li",{className:"item current",children:a||s})]})})]})})})};c.propTypes={pageTitle:n().string.isRequired,currentPage:n().string,className:n().string,space:n().oneOf([1])},c.defaultProps={space:1},s.Z=c},66891:function(e,s,a){"use strict";var i=a(85893),l=a(45697),n=a.n(l),r=a(86010),t=a(25675),c=a.n(t);let o=e=>{let{className:s,title:a}=e;return(0,i.jsxs)("div",{className:(0,r.Z)("social-share-media form-wrapper-one",s),children:[(0,i.jsx)("h6",{children:a}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit, amet sectetur adipisicing elit.cumque."}),(0,i.jsxs)("button",{type:"button",className:"another-login login-facebook",children:[(0,i.jsx)("span",{className:"small-image",children:(0,i.jsx)(c(),{src:"/images/icons/google.png",alt:"google login",width:26,height:27})}),(0,i.jsx)("span",{children:"Log in with Google"})]}),(0,i.jsxs)("button",{type:"button",className:"another-login login-facebook",children:[(0,i.jsx)("span",{className:"small-image",children:(0,i.jsx)(c(),{src:"/images/icons/facebook.png",alt:"facebook login",width:26,height:27})}),(0,i.jsx)("span",{children:"Log in with Facebook"})]}),(0,i.jsxs)("button",{type:"button",className:"another-login login-twitter",children:[(0,i.jsx)("span",{className:"small-image",children:(0,i.jsx)(c(),{src:"/images/icons/tweeter.png",alt:"tweeter login",width:26,height:27})}),(0,i.jsx)("span",{children:"Log in with Twitter"})]}),(0,i.jsxs)("button",{type:"button",className:"another-login login-linkedin",children:[(0,i.jsx)("span",{className:"small-image",children:(0,i.jsx)(c(),{src:"/images/icons/linkedin.png",alt:"linkedin login",width:26,height:27})}),(0,i.jsx)("span",{children:"Log in with linkedin"})]})]})};o.propTypes={className:n().string,title:n().string.isRequired},s.Z=o},41449:function(e,s,a){"use strict";var i=a(85893),l=a(45697),n=a.n(l),r=a(86010);let t=e=>{let{className:s,children:a}=e;return(0,i.jsx)("span",{className:(0,r.Z)("text-danger mt-2 d-inline-block",s),children:a})};t.propTypes={children:n().node.isRequired,className:n().string},s.Z=t},82602:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSG:function(){return b},default:function(){return v}});var i=a(85893),l=a(3191),n=a(63019),r=a(78205),t=a(5728),c=a(93578),o=a(45697),d=a.n(o),m=a(86010),h=a(53715),p=a(41449),x=a(87536),u=a(11163);let g=e=>{var s,a,l,n,r,t;let{className:c}=e,o=(0,u.useRouter)(),{register:d,handleSubmit:g,formState:{errors:j},getValues:N}=(0,x.cI)({mode:"onChange"}),w=(e,s)=>{s.preventDefault(),console.log(e),o.push({pathname:"/"})};return(0,i.jsxs)("div",{className:(0,m.Z)("form-wrapper-one",c),children:[(0,i.jsx)("h4",{children:"Sign Up"}),(0,i.jsxs)("form",{onSubmit:g(w),children:[(0,i.jsxs)("div",{className:"mb-5",children:[(0,i.jsx)("label",{htmlFor:"firstName",className:"form-label",children:"First name"}),(0,i.jsx)("input",{type:"text",id:"firstName",...d("firstName",{required:"First name is required"})}),j.firstName&&(0,i.jsx)(p.Z,{children:null===(s=j.firstName)||void 0===s?void 0:s.message})]}),(0,i.jsxs)("div",{className:"mb-5",children:[(0,i.jsx)("label",{htmlFor:"sastName",className:"form-label",children:"Last name"}),(0,i.jsx)("input",{type:"text",id:"sastName",...d("sastName",{required:"Last name is required"})}),j.sastName&&(0,i.jsx)(p.Z,{children:null===(a=j.sastName)||void 0===a?void 0:a.message})]}),(0,i.jsxs)("div",{className:"mb-5",children:[(0,i.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),(0,i.jsx)("input",{type:"email",id:"exampleInputEmail1",...d("exampleInputEmail1",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}})}),j.exampleInputEmail1&&(0,i.jsx)(p.Z,{children:null===(l=j.exampleInputEmail1)||void 0===l?void 0:l.message})]}),(0,i.jsxs)("div",{className:"mb-5",children:[(0,i.jsx)("label",{htmlFor:"newPassword",className:"form-label",children:"Create Password"}),(0,i.jsx)("input",{type:"password",id:"newPassword",...d("newPassword",{required:"Password is required"})}),j.newPassword&&(0,i.jsx)(p.Z,{children:null===(n=j.newPassword)||void 0===n?void 0:n.message})]}),(0,i.jsxs)("div",{className:"mb-5",children:[(0,i.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Re Password"}),(0,i.jsx)("input",{type:"password",id:"exampleInputPassword1",...d("exampleInputPassword1",{required:"Confirm Password is required",validate:e=>e===N("newPassword")||"The passwords do not match"})}),j.exampleInputPassword1&&(0,i.jsx)(p.Z,{children:null===(r=j.exampleInputPassword1)||void 0===r?void 0:r.message})]}),(0,i.jsxs)("div",{className:"mb-5 rn-check-box",children:[(0,i.jsx)("input",{type:"checkbox",className:"rn-check-box-input",id:"exampleCheck1",...d("exampleCheck1",{required:"Checkbox is required"})}),(0,i.jsx)("label",{className:"rn-check-box-label",htmlFor:"exampleCheck1",children:"Allow to all tearms & Allow to all tearms & condition"}),(0,i.jsx)("br",{}),j.exampleCheck1&&(0,i.jsx)(p.Z,{children:null===(t=j.exampleCheck1)||void 0===t?void 0:t.message})]}),(0,i.jsx)(h.Z,{type:"submit",size:"medium",className:"mr--15",children:"Sign Up"}),(0,i.jsx)(h.Z,{path:"/login",color:"primary-alta",size:"medium",children:"Log In"})]})]})};g.propTypes={className:d().string};var j=a(66891);let N=e=>{let{className:s,space:a}=e;return(0,i.jsx)("div",{className:(0,m.Z)("login-area",1===a&&"rn-section-gapTop",s),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row g-5",children:[(0,i.jsx)("div",{className:"offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12",children:(0,i.jsx)(g,{})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:(0,i.jsx)(j.Z,{title:"Another way to sign up"})})]})})})};N.propTypes={className:d().string,space:d().oneOf([1])},N.defaultProps={space:1};let w=()=>(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(l.Z,{pageTitle:"Sign Up"}),(0,i.jsx)(r.Z,{}),(0,i.jsxs)("main",{id:"main-content",children:[(0,i.jsx)(c.Z,{pageTitle:"Sign Up",currentPage:"Sign Up"}),(0,i.jsx)(N,{})]}),(0,i.jsx)(t.Z,{})]});var b=!0,v=w}},function(e){e.O(0,[8543,1809,7536,8539,6180,9774,2888,179],function(){return e(e.s=34592)}),_N_E=e.O()}]);