(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1372],{96668:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index-13",function(){return i(74782)}])},62313:function(e,t,i){"use strict";var n=i(85893),s=i(67294),a=i(86010),l=i(5152),r=i.n(l),o=i(45697),c=i.n(o),p=i(25675),d=i.n(p),h=i(24643),g=i(53715),u=i(83709),m=i(28663);let v=r()(()=>i.e(908).then(i.bind(i,20908)),{loadableGenerated:{webpack:()=>[20908]},ssr:!1}),w=e=>{var t,i;let{highest_bid:l,auction_date:r,btnColor:o,className:c}=e,[p,m]=(0,s.useState)(!1),w=()=>{m(e=>!e)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:(0,a.Z)("place-bet-area",c),children:[(0,n.jsxs)("div",{className:"rn-bet-create",children:[(0,n.jsxs)("div",{className:"bid-list winning-bid",children:[(0,n.jsx)("h6",{className:"title",children:"Winning bit"}),(0,n.jsx)("div",{className:"top-seller-inner-one",children:(0,n.jsxs)("div",{className:"top-seller-wrapper",children:[(null===(t=l.bidder)||void 0===t?void 0:null===(i=t.image)||void 0===i?void 0:i.src)&&(0,n.jsx)("div",{className:"thumbnail",children:(0,n.jsx)(h.Z,{path:l.bidder.slug,children:(0,n.jsx)(d(),{src:l.bidder.image.src,alt:"Nft_Profile",width:44,height:44})})}),(0,n.jsxs)("div",{className:"top-seller-content",children:[(0,n.jsxs)("span",{className:"heighest-bid",children:["Heighest bid"," ",(0,n.jsx)(h.Z,{path:l.bidder.slug,children:l.bidder.name})]}),(0,n.jsx)("span",{className:"count-number",children:l.amount})]})]})})]}),r&&(0,n.jsxs)("div",{className:"bid-list left-bid",children:[(0,n.jsx)("h6",{className:"title",children:"Auction has ended"}),(0,n.jsx)(v,{className:"mt--15",date:r})]})]}),(0,n.jsx)(g.Z,{color:o||"primary-alta",className:"mt--30",onClick:w,children:"Place a Bid"})]}),(0,n.jsx)(u.Z,{show:p,handleModal:w})]})};w.propTypes={highest_bid:c().shape({amount:c().string,bidder:c().shape({name:c().string,image:m.__,slug:c().string})}),auction_date:c().string,btnColor:c().string,className:c().string},t.Z=w},74782:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return X},default:function(){return S}});var n=i(85893),s=i(3191),a=i(63019),l=i(78205),r=i(5728),o=i(45697),c=i.n(o),p=i(25675),d=i.n(p),h=i(77521),g=i(62313),u=i(86010);let m=e=>{let{type:t,value:i,className:s}=e;return(0,n.jsxs)("div",{className:(0,u.Z)("pd-property-inner",s),children:[(0,n.jsx)("span",{className:"color-body type",children:t}),(0,n.jsx)("span",{className:"color-white value",children:i})]})};m.propTypes={type:c().string.isRequired,value:c().string.isRequired,className:c().string};var v=i(28663);let w=e=>{var t;let{data:{image:i,headings:s,highest_bid:a,auction_date:l,categories:r,properties:o}}=e;return(0,n.jsx)("div",{className:"banner-area banner_xii with-down-shadow bg_image",style:{backgroundImage:'url("/images/bg/bg-image-24.jpg")'},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row g-5 d-flex align-items-center flex-wrap",children:[(null==i?void 0:i.src)&&(0,n.jsx)("div",{className:"col-xxl-6 col-xl-6 col-lg-12 col-md-12",children:(0,n.jsx)(h.Z,{tiltReverse:!0,tiltMaxAngleX:3,tiltMaxAngleY:3,perspective:500,gyroscope:!0,children:(0,n.jsx)("div",{className:"left-thumbnail-image",children:(0,n.jsx)(d(),{src:i.src,alt:(null==i?void 0:i.alt)||"banner",width:886,height:886,priority:!0})})})}),(0,n.jsxs)("div",{className:"col-xxl-5 col-xl-6 col-lg-12 col-md-12",children:[(null==s?void 0:null===(t=s[0])||void 0===t?void 0:t.content)&&(0,n.jsx)("h1",{className:"title mb--30",children:s[0].content}),(0,n.jsx)(g.Z,{highest_bid:a,auction_date:l,className:"into-banner mt_md--30 mt_sm--30",btnColor:"primary"}),(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsxs)("div",{className:"rn-pd-sm-property-wrapper into-banner",children:[(0,n.jsx)("h6",{className:"pd-property-title",children:"Catagory"}),(0,n.jsx)("div",{className:"catagory-wrapper",children:null==r?void 0:r.map(e=>(0,n.jsx)(m,{type:e.type,value:e.value},e.id))})]}),(0,n.jsxs)("div",{className:"rn-pd-sm-property-wrapper into-banner ml--30",children:[(0,n.jsx)("h6",{className:"pd-property-title",children:"Property"}),(0,n.jsx)("div",{className:"property-wrapper",children:null==o?void 0:o.map(e=>(0,n.jsx)(m,{type:e.type,value:e.value},e.id))})]})]})]})]})})})};w.propTypes={data:c().shape({image:v.__.isRequired,headings:c().arrayOf(v.nQ),highest_bid:c().shape({amount:c().string,bidder:c().shape({name:c().string,image:v.__,slug:c().string})}),auction_date:c().string,properties:c().arrayOf(c().shape({id:v.iJ,type:c().string,value:c().string})),categories:c().arrayOf(c().shape({id:v.iJ,type:c().string,value:c().string}))})};var E=i(83960),b=i(51318),y=i(62036),f=i(36377),x=i(93123),A=i(69477),P=i(34764),j=i(44085),N=i(38204),M=i(78115),_=JSON.parse('{"title":"home-13","content":[{"section":"hero-section","image":{"src":"/images/banner/banner-05.jpg"},"headings":[{"content":"Ocean Hero Sell For All NFT\'s Artist."}],"auction_date":"2024-10-08","highest_bid":{"amount":"0.115wETH","bidder":{"name":"Atif aslam","slug":"/author","image":{"src":"/images/client/client-7.png"}}},"properties":[{"id":1,"type":"HYPE TYPE","value":"CALM AF"},{"id":2,"type":"BASTARDNESS","value":"C00LIO BASTARD"}],"categories":[{"id":1,"type":"ZARY","value":"APP"},{"id":2,"type":"SOMALIAN","value":"TRIBUTE"},{"id":3,"type":"TUNA","value":"PIPE"}]},{"section":"live-explore-section","section_title":{"title":"Live Bidding"}},{"section":"category-section","items":[{"id":1,"title":"Art","path":"/collection","icon":"feather-image"},{"id":2,"title":"Music","path":"/collection","icon":"feather-music"},{"id":3,"title":"Digital Worlds","path":"/collection","icon":"feather-map"},{"id":4,"title":"Domane Name","path":"/collection","icon":"feather-search"},{"id":5,"title":"Collectibles","path":"/collection","icon":"feather-grid"},{"id":6,"title":"Trending Cards","path":"/collection","icon":"feather-activity"}]},{"section":"collection-section","section_title":{"title":"Top Collection"}},{"section":"service-section","section_title":{"title":"Create and sell your NFTs"},"items":[{"id":1,"title":"Set up your wallet","path":"/connect","subtitle":"Step-01","description":"Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.","images":[{"src":"/images/icons/shape-7.png"}]},{"id":2,"title":"Create your collection","path":"/collection","subtitle":"Step-02","description":"A great collection of beautiful website templates for your need. Choose the best suitable template.","images":[{"src":"/images/icons/shape-1.png"}]},{"id":3,"title":"Add your NFT\'s","path":"/connect","subtitle":"Step-03","description":"We\'ve made the template fully responsive, so it looks great on all devices: desktop, tablets and.","images":[{"src":"/images/icons/shape-5.png"}]},{"id":4,"title":"Sell Your NFT\'s","path":"/creator","subtitle":"Step-04","description":"I throw myself down among the tall grass by the stream as I lie close to the earth NFT\'s.","images":[{"src":"/images/icons/shape-6.png"}]}]},{"section":"newsletter-section","section_title":{"title":"Join our newsletter","subtitle":"Weekly FREE UI resource stroight to your inbox"}},{"section":"newest-section","section_title":{"title":"Newest Items"}},{"section":"top-sller-section","section_title":{"title":"Top Seller in"}},{"section":"explore-product-section","section_title":{"title":"Find Your Non Replaceable Token"}},{"section":"video-section","section_title":{"title":"Meet with Nuron","subtitle":"An NFT is a digital asset that represents real-worldobjects like art, music, in-game items and videos. They are bought and sold online."},"images":[{"src":"/images/bg/bg-image-21.jpg"}],"video":{"videoId":"7e90gBu4pas"}},{"section":"brand-section","items":[{"id":1,"image":{"src":"/images/brand/brand-01.png","alt":"nuron-brand_nft"}},{"id":2,"image":{"src":"/images/brand/brand-03.png","alt":"nuron-brand_nft"}},{"id":3,"image":{"src":"/images/brand/brand-06.png","alt":"nuron-brand_nft"}},{"id":4,"image":{"src":"/images/brand/brand-07.png","alt":"nuron-brand_nft"}},{"id":5,"image":{"src":"/images/brand/brand-04.png","alt":"nuron-brand_nft"}},{"id":6,"image":{"src":"/images/brand/brand-02.png","alt":"nuron-brand_nft"}},{"id":7,"image":{"src":"/images/brand/brand-01.png","alt":"nuron-brand_nft"}},{"id":8,"image":{"src":"/images/brand/brand-03.png","alt":"nuron-brand_nft"}}]}]}'),L=i(82537),T=i(15678),Y=i(95908);let O=()=>{let e=(0,M.normalizedData)((null==_?void 0:_.content)||[]),t=L.filter(e=>(null==e?void 0:e.auction_date)&&new Date<=new Date(null==e?void 0:e.auction_date)),i=L.sort((e,t)=>Number(new Date(t.published_at))-Number(new Date(e.published_at))).slice(0,5);return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(s.Z,{pageTitle:"Home Thirteen"}),(0,n.jsx)(l.Z,{}),(0,n.jsxs)("main",{id:"main-content",children:[(0,n.jsx)(w,{data:e["hero-section"]}),(0,n.jsx)(b.Z,{data:{...e["live-explore-section"],products:t}}),(0,n.jsx)(E.Z,{data:e["category-section"]}),(0,n.jsx)(j.Z,{data:{...e["collection-section"],collections:Y.slice(0,4)}}),(0,n.jsx)(y.Z,{data:e["service-section"]}),(0,n.jsx)(N.Z,{data:e["newsletter-section"]}),(0,n.jsx)(f.Z,{data:{...e["newest-section"],products:i}}),(0,n.jsx)(x.Z,{data:{...e["top-sller-section"],sellers:T}}),(0,n.jsx)(A.Z,{data:{...e["explore-product-section"],products:L,placeBid:!0}}),(0,n.jsx)(P.Z,{data:e["video-section"]})]}),(0,n.jsx)(r.Z,{data:e["brand-section"],space:3})]})};var X=!0,S=O},77521:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(67294);let s=(e,t,i,n)=>{e.style.transition=`${t} ${i}ms ${n}`},a=(e,t,i)=>Math.min(Math.max(e,t),i);class l{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{let{width:t,height:i}=e,n=Math.sqrt(Math.pow(t,2)+Math.pow(i,2));return{width:n,height:n}},this.setSize=e=>{let t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,i,n)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,i,n)},this.updateAngle=(e,t)=>{let{xPercentage:i,yPercentage:n}=e;this.glareAngle=(i?Math.atan2(n,-i)*(180/Math.PI):0)-(t?180:0)},this.updateOpacity=(e,t,i,n)=>{let{xPercentage:s,yPercentage:l}=e,{glarePosition:r,glareReverse:o,glareMaxOpacity:c}=t,p=i?-1:1,d=n?-1:1,h=o?-1:1,g=0;switch(r){case"top":g=-s*p*h;break;case"right":g=l*d*h;break;case"bottom":case void 0:g=s*p*h;break;case"left":g=-l*d*h;break;case"all":g=Math.hypot(s,l)}let u=a(g,0,100);this.glareOpacity=u*c/100},this.render=e=>{let{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";let i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${i.width}px`,height:`${i.height}px`};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"}),Object.assign(this.glareEl.style,n)}}class r{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{let{xPercentage:i,yPercentage:n}=e,{tiltMaxAngleX:s,tiltMaxAngleY:a}=t;this.tiltAngleX=i*s/100,this.tiltAngleY=-(n*a/100*1)},this.updateTiltManualInput=(e,t)=>{let{tiltAngleXManual:i,tiltAngleYManual:n,tiltMaxAngleX:s,tiltMaxAngleY:a}=t;(null!==i||null!==n)&&(this.tiltAngleX=null!==i?i:0,this.tiltAngleY=null!==n?n:0,e.xPercentage=100*this.tiltAngleX/s,e.yPercentage=100*this.tiltAngleY/a)},this.updateTiltReverse=e=>{let t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{let{tiltAxis:t}=e;this.tiltAngleX=a(this.tiltAngleX,-90,90),this.tiltAngleY=a(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{let{tiltMaxAngleX:t,tiltMaxAngleY:i}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}let o=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class c extends n.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>{var e,t,i,n;return e=this,t=void 0,i=void 0,n=function*(){window.DeviceOrientationEvent;let e=DeviceOrientationEvent.requestPermission;"function"==typeof e?"granted"===(yield e())&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},new(i||(i=Promise))(function(s,a){function l(e){try{o(n.next(e))}catch(t){a(t)}}function r(e){try{o(n.throw(e))}catch(t){a(t)}}function o(e){var t;e.done?s(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(l,r)}o((n=n.apply(e,t||[])).next())})},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{let{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{let{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){let i=new CustomEvent("autoreset");this.onMove(i)}},this.processInput=e=>{let{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":let{tiltAngleXInitial:i,tiltAngleYInitial:n,tiltMaxAngleX:s,tiltMaxAngleY:l}=this.props;this.wrapperEl.clientPosition.xPercentage=a(i/s*100,-100,100),this.wrapperEl.clientPosition.yPercentage=a(n/l*100,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;let{tiltMaxAngleX:t,tiltMaxAngleY:i}=this.props,n=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=n/i*100,this.wrapperEl.clientPosition.xPercentage=a(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=a(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{let{tiltEnable:t,flipVertically:i,flipHorizontally:n}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,n)},this.updateClientInput=()=>{let e,t;let{trackOnWindow:i}=this.props;if(i){let{x:n,y:s}=this.wrapperEl.clientPosition;e=s/window.innerHeight*200-100,t=n/window.innerWidth*200-100}else{let{size:{width:l,height:r,left:o,top:c},clientPosition:{x:p,y:d}}=this.wrapperEl;e=(d-c)/r*200-100,t=(p-o)/l*200-100}this.wrapperEl.clientPosition.xPercentage=a(e,-100,100),this.wrapperEl.clientPosition.yPercentage=a(t,-100,100)},this.updateFlip=()=>{let{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new r,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;let e=new CustomEvent("autoreset");this.mainLoop(e);let t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){let e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){let e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){let{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new l(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){let{onMove:t}=this.props;if(!t)return;let i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:n,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){let{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){let{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){let{transitionSpeed:e,transitionEasing:t}=this.props;s(this.wrapperEl.node,"all",e,t),this.glare&&s(this.glare.glareEl,"opacity",e,t)}render(){let{children:e,className:t,style:i}=this.props;return n.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:i},e)}}c.defaultProps=o},52463:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n=i(67294),s=["mousedown","touchstart"],a=function(e,t,i){void 0===i&&(i=s);var a=(0,n.useRef)(t);(0,n.useEffect)(function(){a.current=t},[t]),(0,n.useEffect)(function(){for(var t=function(t){var i=e.current;i&&!i.contains(t.target)&&a.current(t)},n=0,s=i;n<s.length;n++){var l=s[n];!function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,l,t)}return function(){for(var e=0,n=i;e<n.length;e++){var s=n[e];!function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,s,t)}}},[i,e])}}},function(e){e.O(0,[8543,1809,5878,5686,6354,7536,8539,6180,1557,5414,7890,9477,9774,2888,179],function(){return e(e.s=96668)}),_N_E=e.O()}]);