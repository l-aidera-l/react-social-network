(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[1],{104:function(e,t,n){e.exports=n(193)},109:function(e,t,n){},110:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(43),u=n.n(o),s=(n(109),n(32)),i=n(33),c=n(35),l=n(34),f=(n(110),n(5)),d=n(15),p=n(24),m=n(16),h=n(3),b=n.n(h),g=n(6),v=n(2),E=n(21),O={initialized:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET_INITIAL":return Object(v.a)({},e,{initialized:!0});default:return e}},S=function(e){return e.app.initialized},y=n(85),w=n(73),T=n(74),I=n(76),P=n(82),j=n(195),A=Object(m.c)({app:_,profilePage:w.a,postsPage:T.b,dialogsPage:I.a,usersPage:P.a,auth:E.b,form:j.a}),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,x=Object(m.e)(A,L(Object(m.a)(y.a)));window.__store__=x;var C=x,k=n(45),N=n(55),U=n(22),G=n.n(U),D=n(26),R=n.n(D),F=a.a.memo((function(e){var t=e.login,n=e.isAuth,r=e.logout;Object(N.a)(e,["login","isAuth","logout"]);return a.a.createElement("header",{className:"".concat(G.a.header)},a.a.createElement("div",{className:R()("app-wrapper-width",G.a.container)},a.a.createElement("a",{href:"/",className:"".concat(G.a.logo)},a.a.createElement("span",null,"AI")),a.a.createElement("div",{className:G.a.loginBlock},!0===n&&a.a.createElement("div",null,a.a.createElement("span",{onClick:r,className:R()("button","button-normal",G.a.userLogin)},"Logout"),a.a.createElement(d.b,{to:"/profile",className:R()("button","button-success")},t)),!1===n&&a.a.createElement(d.b,{className:R()("button","button-success"),to:"/login"},"Login"))))})),z=n(49),H=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isAuth,n=e.login,r=e.logout;return a.a.createElement(F,{isAuth:t,login:n,logout:r})}}]),n}(a.a.PureComponent),M=Object(p.b)((function(e){return{isAuth:Object(z.b)(e),login:Object(z.d)(e)}}),{logout:E.d})(H),W=n(31),B=n.n(W),V=a.a.memo((function(e){return a.a.createElement("div",{className:B.a.navbar},a.a.createElement("nav",null,a.a.createElement(d.b,{to:"/profile",activeClassName:B.a.active},"Profile"),a.a.createElement(d.b,{to:"/dialogs",activeClassName:B.a.active},"Dialogs"),a.a.createElement(d.b,{to:"/users",activeClassName:B.a.active},"Users")))})),K=n(88),q=n.n(K),J=function(){return a.a.createElement("footer",{className:q.a.footer})},X=a.a.lazy((function(){return Promise.all([n.e(0),n.e(13),n.e(5)]).then(n.bind(null,354))})),Q=a.a.lazy((function(){return Promise.all([n.e(4),n.e(6)]).then(n.bind(null,356))})),Y=a.a.lazy((function(){return n.e(8).then(n.bind(null,357))})),Z=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,358))})),$=a.a.lazy((function(){return n.e(11).then(n.bind(null,350))})),ee=a.a.lazy((function(){return n.e(10).then(n.bind(null,351))})),te=a.a.lazy((function(){return n.e(12).then(n.bind(null,352))})),ne=a.a.lazy((function(){return n.e(9).then(n.bind(null,254))})),re=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e,t){alert("Some error occured")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(M,null),a.a.createElement("div",{className:"app-wrapper-width"},a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(V,null),a.a.createElement("div",{className:"content-container"},a.a.createElement(r.Suspense,{fallback:a.a.createElement(k.a,null)},a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/dialogs",render:function(){return a.a.createElement(Q,null)}}),a.a.createElement(f.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(X,null)}}),a.a.createElement(f.b,{path:"/users",render:function(){return a.a.createElement(Y,null)}}),a.a.createElement(f.b,{path:"/login",render:function(){return a.a.createElement(Z,null)}}),a.a.createElement(f.b,{path:"/news",render:function(){return a.a.createElement($,null)}}),a.a.createElement(f.b,{path:"/music",render:function(){return a.a.createElement(ee,null)}}),a.a.createElement(f.b,{path:"/settings",render:function(){return a.a.createElement(te,null)}}),a.a.createElement(f.b,{exact:!0,path:"/"}," ",a.a.createElement(f.a,{to:"/profile"})," "),a.a.createElement(f.b,{path:"*",render:function(){return a.a.createElement(ne,{errorType:404,h1:"Page not found",h2:"Sorry, we have lost this page, but... our best detectives are already looking for it!",linkUrl:"/users",linkText:"Get another try"})}})))))),a.a.createElement(J,null)):a.a.createElement(k.a,null)}}]),n}(a.a.Component),ae=Object(m.d)(f.g,Object(p.b)((function(e){return{initialized:S(e)}}),{initializeApp:function(){return function(){var e=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(E.a)());case 2:t({type:"app/SET_INITIAL"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(re),oe=function(e){return a.a.createElement(d.a,null,a.a.createElement(p.a,{store:C},a.a.createElement(ae,null)))};u.a.render(a.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m}));var r=n(3),a=n.n(r),o=n(6),u=n(2),s=n(7),i={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null,isLoading:!1},c=function(e,t,n,r){return{type:"auth/SET_AUTH_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},l=function(e){return{type:"auth/SET_IS_LOADING",status:e}},f=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.checkAuth();case 2:0===(n=e.sent).resultCode&&(r=n.data,o=r.id,u=r.login,i=r.email,t(c(o,i,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n,r){return function(){var u=Object(o.a)(a.a.mark((function o(u){var i,c;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u(l(!0)),a.next=3,s.a.login(e,t,n,r);case 3:if(0!==(i=a.sent).data.resultCode){a.next=12;break}return a.next=7,u(f());case 7:return u({type:"auth/DELETE_CAPTCHA"}),u(l(!1)),a.abrupt("return",Promise.resolve(null));case 12:if(10!==i.data.resultCode){a.next=15;break}return a.next=15,u(p());case 15:return c=i.data.messages.length>0?i.data.messages[0]:"Server error. Please, try later",u(l(!1)),a.abrupt("return",Promise.reject(c));case 18:case"end":return a.stop()}}),o)})));return function(e){return u.apply(this,arguments)}}()},p=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t({type:"auth/GET_CAPTCHA_URL",payload:{captchaUrl:r}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.data.resultCode&&t(c(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTH_USER_DATA":case"auth/GET_CAPTCHA_URL":return Object(u.a)({},e,{},t.payload);case"auth/DELETE_CAPTCHA":return Object(u.a)({},e,{captchaUrl:null});case"auth/SET_IS_LOADING":return Object(u.a)({},e,{isLoading:t.status});default:return e}}},22:function(e,t,n){e.exports={header:"Header_header__IwUb1",container:"Header_container__3GB8E",logo:"Header_logo__mbnhI",loginBlock:"Header_loginBlock__2518E",userLogin:"Header_userLogin__1ZD75"}},31:function(e,t,n){e.exports={navbar:"Navbar_navbar__30h2V",active:"Navbar_active__3RDi9"}},45:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(87),u=n.n(o),s=n(63),i=n.n(s);t.a=function(){return a.a.createElement("div",{className:u.a.preloader},a.a.createElement("img",{src:i.a,alt:"preloader"}))}},49:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return s}));var r=function(e){return e.auth.userId},a=function(e){return e.auth.login},o=function(e){return e.auth.isAuth},u=function(e){return e.auth.captchaUrl},s=function(e){return e.auth.isLoading}},63:function(e,t,n){e.exports=n.p+"static/media/loader.9205748d.svg"},7:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(84),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"321994fc-144a-4c0e-a36e-a2437572c56d"}}),o={requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e),{}).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},u={getUsersProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfileInfo:function(e){return a.put("profile",e)}},s={checkAuth:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v}));var r=n(3),a=n.n(r),o=n(6),u=n(2),s=n(7),i={profile:null,isLoadingAvatar:!1,isLoadingProfileInfoChanges:!1,status:"",isLoadingStatus:!1},c=function(e){return{type:"profile/SET_USER_PROFILE",profile:e}},l=function(e){return{type:"profile/SET_USER_STATUS",status:e}},f=function(e){return{type:"profile/SET_IS_LOADING_STATUS",status:e}},d=function(e){return{type:"profile/SET_IS_LOADING_PROFILE_INFO_CHANGES",status:e}},p=function(e){return{type:"profile/SET_IS_LOADING_AVATAR",status:e}},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n(c(null)),!e){t.next=4;break}return t.next=4,s.b.getUsersProfile(e).then(function(){var t=Object(o.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(c(r)),n(h(e)),t.abrupt("return",Promise.resolve(null));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){n(c(void 0))}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n(l("")),!e){t.next=12;break}return t.prev=2,t.next=5,s.b.getStatus(e);case 5:r=t.sent,n(l(r)),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",Promise.reject("No such user or server error"));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(f(!0)),t.next=3,s.b.updateStatus(e);case 3:if(r=t.sent,n(f(!1)),0!==r.data.resultCode){t.next=10;break}return n(l(e)),t.abrupt("return",Promise.resolve(null));case 10:if(!r.data){t.next=14;break}return t.abrupt("return",Promise.reject(r.data.messages[0]));case 14:return t.abrupt("return",Promise.reject("Server error"));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(p(!0)),t.next=3,s.b.savePhoto(e);case 3:if(r=t.sent,n(p(!1)),0!==r.data.resultCode){t.next=10;break}return n({type:"profile/SAVE_PHOTO_SUCCESS",photos:r.data.data.photos}),t.abrupt("return",Promise.resolve(null));case 10:if(!r.data){t.next=14;break}return t.abrupt("return",Promise.reject(r.data.messages[0]));case 14:return t.abrupt("return",Promise.reject("Server error"));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(d(!0)),t.next=3,r().auth.userId;case 3:return o=t.sent,t.next=6,s.b.saveProfileInfo(e);case 6:if(u=t.sent,n(d(!1)),0!==u.data.resultCode){t.next=13;break}return n(m(o)),t.abrupt("return",Promise.resolve(null));case 13:return t.abrupt("return",Promise.reject(u.data.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/SET_USER_PROFILE":return Object(u.a)({},e,{profile:t.profile});case"profile/SET_USER_STATUS":return Object(u.a)({},e,{status:t.status});case"profile/SAVE_PHOTO_SUCCESS":return Object(u.a)({},e,{profile:Object(u.a)({},e.profile,{photos:t.photos})});case"profile/SET_IS_LOADING_STATUS":return Object(u.a)({},e,{isLoadingStatus:t.status});case"profile/SET_IS_LOADING_PROFILE_INFO_CHANGES":return Object(u.a)({},e,{isLoadingProfileInfoChanges:t.status});case"profile/SET_IS_LOADING_AVATAR":return Object(u.a)({},e,{isLoadingAvatar:t.status});default:return e}}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return c}));var r=n(17),a=n(2),o={posts:[{id:1,likesCount:1,text:"OOP Typically depends on shared state. Objects and behaviors are typically tacked together on the same entity, which may be accessed at random by any number of functions with non-deterministic order, which may lead to undesirable behavior such as race conditions."},{id:2,likesCount:5,text:"It\u2019s easy to understand the basic concept of objects and easy to interpret the meaning of method calls. OOP tends to use an imperative style rather than a declarative style, which reads like a straight-forward set of instructions for the computer to follow."},{id:3,likesCount:2,text:"Using the functional paradigm, programmers avoid any shared state or side-effects, which eliminates bugs caused by multiple functions competing for the same resources. With features such as the availability of point-free style (aka tacit programming), functions tend to be radically simplified and easily recomposed for more generally reusable code compared to OOP."},{id:4,likesCount:40,text:"Over exploitation of FP features such as point-free style and large compositions can potentially reduce readability because the resulting code is often more abstractly specified, more terse, and less concrete.\n\nMore people are familiar with OO and imperative programming than functional programming, so even common idioms in functional programming can be confusing to new team members."}],maxPostId:4,likedPosts:[1,4]},u=function(e){return function(t){t(function(e){return{type:"posts/ADD-POST",newPost:e}}(e))}},s=function(e){return function(t){t(function(e){return{type:"posts/DELETE_POST",postId:e}}(e))}},i=function(e){return function(t){t(function(e){return{type:"posts/LIKE_POST",postId:e}}(e))}},c=function(e){return function(t){t(function(e){return{type:"posts/DISLIKE_POST",postId:e}}(e))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"posts/ADD-POST":return Object(a.a)({},e,{posts:[].concat(Object(r.a)(e.posts),[{id:e.maxPostId+1,text:t.newPost,likesCount:0}]),maxPostId:e.maxPostId+1});case"posts/DELETE_POST":for(var n=Object(r.a)(e.posts),u=0;u<n.length;u++)n[u].id===t.postId&&n.splice(u,1);return Object(a.a)({},e,{posts:n});case"posts/LIKE_POST":var s=e.likedPosts.some((function(e){return e===t.postId}));if(!s){var i=e.likedPosts;i.push(t.postId);for(var c=Object(r.a)(e.posts),l=0;l<c.length;l++)c[l].id===t.postId&&c[l].likesCount++;return Object(a.a)({},e,{likedPosts:i,posts:c})}return e;case"posts/DISLIKE_POST":var f=e.likedPosts.some((function(e){return e===t.postId}));if(f){for(var d=e.likedPosts.filter((function(e){return e!==t.postId})),p=Object(r.a)(e.posts),m=0;m<p.length;m++)p[m].id===t.postId&&p[m].likesCount--;return Object(a.a)({},e,{likedPosts:d,posts:p})}return e;default:return e}}},76:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(17),a=n(2),o={messages:[{id:1,from:"me",messageText:"Lorem ipsum dolor sit amet."},{id:2,from:"opponent",messageText:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, veritatis."},{id:3,from:"opponent",messageText:"Lorem ipsum, dolor sit amet consectetur adipisicing."},{id:4,from:"me",messageText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora iste voluptatum veritatis eos quo, esse qui ipsam odio! Dicta?"}],dialogs:[{id:1,name:"Loe"},{id:2,name:"Joe"},{id:3,name:"Carlos"},{id:4,name:"Jeniffer"}]},u=function(e){return{type:"dialogs/SEND-MESSAGE",newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND-MESSAGE":return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:5,messageText:t.newMessage,from:"me"}])});default:return e}}},82:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"e",(function(){return v}));var r=n(3),a=n.n(r),o=n(6),u=n(17),s=n(2),i=n(7),c=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(s.a)({},e,{},r):e}))},l="users/FOLLOW",f={users:[],pageSize:5,totalUsersCount:0,currentPage:1,pagesCount:0,isFetching:!1,followingInProgress:[]},d=function(e){return{type:"users/SET-CURRENT-PAGE",page:e}},p=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},m=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},h=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(p(!0)),r(d(e)),n.next=4,i.d.requestUsers(e,t);case 4:o=n.sent,r({type:"users/SET-USERS",users:o.items}),r({type:"users/SET-USERS-TOTAL-COUNT",totalCount:o.totalCount}),r({type:"users/SET_PAGES_COUNT",pages:Math.ceil(o.totalCount/t)}),r(p(!1));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},b=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r,o){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(m(!0,n)),e.next=3,r;case 3:0===e.sent.resultCode&&(t(o),t(m(!1,n)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(t){b(t,e,i.d.follow(e),function(e){return{type:l,userId:e}}(e))}},v=function(e){return function(t){b(t,e,i.d.unfollow(e),function(e){return{type:"users/UNFOLLOW",userId:e}}(e))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)({},e,{users:c(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(s.a)({},e,{users:c(e.users,t.userId,"id",{followed:!1})});case"users/SET-USERS":return Object(s.a)({},e,{users:t.users});case"users/SET_PAGES_COUNT":return Object(s.a)({},e,{pagesCount:t.pages});case"users/SET-CURRENT-PAGE":return Object(s.a)({},e,{currentPage:t.page});case"users/SET-USERS-TOTAL-COUNT":return Object(s.a)({},e,{totalUsersCount:t.totalCount});case"users/TOGGLE_IS_FETCHING":return Object(s.a)({},e,{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(s.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}}},87:function(e,t,n){e.exports={preloader:"Preloader_preloader__1OWMd"}},88:function(e,t,n){e.exports={footer:"Footer_footer__2ztAT"}}},[[104,2,3]]]);
//# sourceMappingURL=main.928d76e2.chunk.js.map