(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8406],{27484:function(t){var e,n,r,s,i,a,u,o,c,h,d,l,f,m,$,p,y,v,g,x,M;t.exports=(e="millisecond",n="second",r="minute",s="hour",i="week",a="month",u="quarter",o="year",c="date",h="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},($={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},p=function(t){return t instanceof x},y=function t(e,n,r){var s;if(!e)return m;if("string"==typeof e){var i=e.toLowerCase();$[i]&&(s=i),n&&($[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;$[u]=e,s=u}return!r&&s&&(m=s),s||!r&&m},v=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},(g={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,a),i=n-s<0,u=e.clone().add(r+(i?-1:1),a);return+(-(r+(n-s)/(i?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:o,w:i,d:"day",D:c,h:s,m:r,s:n,ms:e,Q:u})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=y,g.i=p,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},M=(x=function(){function t(t){this.$L=y(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return this.$d.toString()!==h},f.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return v(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<v(t)},f.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var u=this,h=!!g.u(e)||e,d=g.p(t),l=function(t,e){var n=g.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return h?n:n.endOf("day")},f=function(t,e){return g.w(u.toDate()[t].apply(u.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,$=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case o:return h?l(1,0):l(31,11);case a:return h?l(1,$):l(0,$+1);case i:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return l(h?p-x:p+(6-x),$);case"day":case c:return f(y+"Hours",0);case s:return f(y+"Minutes",1);case r:return f(y+"Seconds",2);case n:return f(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,i){var u,h=g.p(t),d="set"+(this.$u?"UTC":""),l=((u={}).day=d+"Date",u[c]=d+"Date",u[a]=d+"Month",u[o]=d+"FullYear",u[s]=d+"Hours",u[r]=d+"Minutes",u[n]=d+"Seconds",u[e]=d+"Milliseconds",u)[h],f="day"===h?this.$D+(i-this.$W):i;if(h===a||h===o){var m=this.clone().set(c,1);m.$d[l](f),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[g.p(t)]()},f.add=function(t,e){var u,c=this;t=Number(t);var h=g.p(e),d=function(e){var n=v(c);return g.w(n.date(n.date()+Math.round(e*t)),c)};if(h===a)return this.set(a,this.$M+t);if(h===o)return this.set(o,this.$y+t);if("day"===h)return d(1);if(h===i)return d(7);var l=((u={})[r]=6e4,u[s]=36e5,u[n]=1e3,u)[h]||1,f=this.$d.getTime()+t*l;return g.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=g.z(this),i=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,d=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},f=function(t){return g.s(i%12||12,t,"0")},m=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:g.s(u+1,2,"0"),MMM:d(n.monthsShort,u,c,3),MMMM:d(c,u),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,o,2),ddd:d(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(i),HH:g.s(i,2,"0"),h:f(1),hh:f(2),a:m(i,a,!0),A:m(i,a,!1),m:String(a),mm:g.s(a,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:s};return r.replace(l,function(t,e){return e||$[t]||s.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,c){var h,d=g.p(e),l=v(t),f=(l.utcOffset()-this.utcOffset())*6e4,m=this-l,$=g.m(this,l);return $=((h={})[o]=$/12,h[a]=$,h[u]=$/3,h[i]=(m-f)/6048e5,h.day=(m-f)/864e5,h[s]=m/36e5,h[r]=m/6e4,h[n]=m/1e3,h)[d]||m,c?$:g.a($)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return $[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,v.prototype=M,[["$ms",e],["$s",n],["$m",r],["$H",s],["$W","day"],["$M",a],["$y",o],["$D",c]].forEach(function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,x,v),t.$i=!0),v},v.locale=y,v.isDayjs=p,v.unix=function(t){return v(1e3*t)},v.en=$[m],v.Ls=$,v.p={},v)},84110:function(t){t.exports=function(t,e,n){t=t||{};var r=e.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,n,s){return r.fromToBase(t,e,n,s)}n.en.relativeTime=s,r.fromToBase=function(e,r,i,a,u){for(var o,c,h,d=i.$locale().relativeTime||s,l=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=l.length,m=0;m<f;m+=1){var $=l[m];$.d&&(o=a?n(e).diff(i,$.d,!0):i.diff(e,$.d,!0));var p=(t.rounding||Math.round)(Math.abs(o));if(h=o>0,p<=$.r||!$.r){p<=1&&m>0&&($=l[m-1]);var y=d[$.l];u&&(p=u(""+p)),c="string"==typeof y?y.replace("%d",p):y(p,r,$.l,h);break}}if(r)return c;var v=h?d.future:d.past;return"function"==typeof v?v(c):v.replace("%s",c)},r.to=function(t,e){return i(t,e,this,!0)},r.from=function(t,e){return i(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}},14231:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forum/details",function(){return n(98429)}])},98429:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return x},default:function(){return M}});var r=n(85893),s=n(3191),i=n(63019),a=n(78205),u=n(5728),o=n(93578),c=n(11423),h=n(49182),d=n(25675),l=n.n(d),f=n(53715);let m=()=>(0,r.jsxs)("div",{className:"forum-input-ans-wrapper",children:[(0,r.jsx)("div",{className:"forum-input-ans-author-img",children:(0,r.jsx)(l(),{src:"/images/client/client-10.png",alt:"Nft-Profile",width:56,height:56})}),(0,r.jsx)("input",{type:"text",placeholder:"Write Answer..."}),(0,r.jsx)(f.Z,{type:"button",shape:"ellipse",size:"medium",children:"Answer"})]});var $=n(24643);let p=()=>(0,r.jsxs)("div",{className:"forum-single-ans",children:[(0,r.jsxs)("div",{className:"ans-header",children:[(0,r.jsx)($.Z,{path:"#!",className:"ans-header-author",children:(0,r.jsx)(l(),{src:"/images/client/client-3.png",alt:"Nft-Profile",width:46,height:46})}),(0,r.jsx)($.Z,{path:"#!",children:(0,r.jsx)("p",{className:"name",children:"@Mikle"})}),(0,r.jsxs)("div",{className:"date",children:[(0,r.jsx)("i",{className:"feather-watch"}),(0,r.jsx)("span",{children:"5 days ago"})]})]}),(0,r.jsxs)("div",{className:"ans-content",children:[(0,r.jsx)("p",{children:"Check regularly the website, cause I’m in the same situation. They will add more artists sooner or later, check also the discord channel they have. But most important, be patient and keep sharing your work in other social media But most important, be patient and keep sharing your work in other social media"}),(0,r.jsxs)("div",{className:"reaction",children:[(0,r.jsxs)($.Z,{path:"#!",className:"like",children:[(0,r.jsx)("i",{className:"feather-thumbs-up"}),(0,r.jsx)("span",{children:"27 Like"})]}),(0,r.jsxs)($.Z,{path:"#!",className:"dislike",children:[(0,r.jsx)("i",{className:"feather-thumbs-down"}),(0,r.jsx)("span",{children:"27 dislike"})]})]}),(0,r.jsx)("hr",{className:"form-ans-separator"})]})]});var y=n(40755);let v=()=>(0,r.jsx)("div",{className:"nu-community-area rn-section-gapTop",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row g-5",children:[(0,r.jsx)("div",{className:"col-lg-8",children:(0,r.jsxs)("div",{className:"community-content-wrapper",children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)(m,{}),(0,r.jsxs)("div",{className:"forum-ans-box",children:[(0,r.jsx)(p,{}),(0,r.jsx)(p,{}),(0,r.jsx)(p,{}),(0,r.jsx)(p,{}),(0,r.jsx)(p,{})]})]})}),(0,r.jsx)("div",{className:"col-lg-4",children:(0,r.jsx)(y.Z,{})})]})})}),g=()=>(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{pageTitle:"Forum Details"}),(0,r.jsx)(a.Z,{}),(0,r.jsxs)("main",{id:"main-content",children:[(0,r.jsx)(o.Z,{pageTitle:"Forum Details",currentPage:"Forum Details"}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(v,{})]}),(0,r.jsx)(u.Z,{})]});var x=!0,M=g}},function(t){t.O(0,[8543,1809,8539,6180,5351,9774,2888,179],function(){return t(t.s=14231)}),_N_E=t.O()}]);