(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[1],{138:function(e,t,n){e.exports=n(227)},143:function(e,t,n){},144:function(e,t,n){},20:function(e,t,n){e.exports={navbar:"Navbar_navbar__30h2V",active:"Navbar_active__3RDi9"}},227:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),u=n(44),o=n.n(u),i=(n(143),n(33)),c=n(34),s=n(36),l=n(35),f=(n(144),n(19)),d=n(12),p=n(27),m=n(16),g=n(4),h=n.n(g),E=n(8),b=n(5),v=n(24),O={initialized:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET_INITIAL":return Object(b.a)({},e,{initialized:!0});default:return e}},_=function(e){return e.app.initialized},w=n(85),T=n(60),j=n(75),y=n(82),x=n(81),C=Object(m.c)({app:S,profilePage:T.b,dialogsPage:j.a,usersPage:y.a,auth:v.b,form:x.a}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,N=Object(m.e)(C,I(Object(m.a)(w.a)));window.__store__=N;var A=N,L=n(49),U=n(57),P=n(32),k=n.n(P),R=a.a.memo((function(e){var t=e.login,n=e.isAuth,r=e.logout;Object(U.a)(e,["login","isAuth","logout"]);return a.a.createElement("header",{className:"".concat(k.a.header)},a.a.createElement("a",{href:"/",className:"".concat(k.a.logo)},a.a.createElement("img",{src:"/fox.png",alt:"logo"})),a.a.createElement("div",{className:k.a.loginBlock},!0===n?a.a.createElement("div",null,t,a.a.createElement("span",{onClick:r,className:k.a.button},"Logout")):a.a.createElement(d.b,{to:"/login"},"Login")))})),G=n(54),z=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isAuth,n=e.login,r=e.logout;return a.a.createElement(R,{isAuth:t,login:n,logout:r})}}]),n}(a.a.PureComponent),F=Object(p.b)((function(e){return{isAuth:Object(G.a)(e),login:Object(G.b)(e)}}),{logout:v.d})(z),D=n(20),M=n.n(D),H=a.a.memo((function(e){return a.a.createElement("div",{className:M.a.navbar},a.a.createElement("nav",null,a.a.createElement(d.b,{to:"/profile",activeClassName:M.a.active},"Profile"),a.a.createElement(d.b,{to:"/dialogs",activeClassName:M.a.active},"Dialogs"),a.a.createElement(d.b,{to:"/users",activeClassName:M.a.active},"Users"),a.a.createElement(d.b,{to:"/news",activeClassName:M.a.active},"News"),a.a.createElement(d.b,{to:"/music",activeClassName:M.a.active},"Music"),a.a.createElement(d.b,{to:"/settings",activeClassName:M.a.active},"Settings")))})),W=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,307))})),q=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,308))})),B=a.a.lazy((function(){return n.e(6).then(n.bind(null,309))})),J=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,310))})),V=a.a.lazy((function(){return n.e(9).then(n.bind(null,304))})),X=a.a.lazy((function(){return n.e(8).then(n.bind(null,305))})),K=a.a.lazy((function(){return n.e(10).then(n.bind(null,306))})),Q=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(F,null),a.a.createElement(H,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(r.Suspense,{fallback:a.a.createElement(L.a,null)},a.a.createElement(f.b,{path:"/dialogs",render:function(){return a.a.createElement(q,null)}}),a.a.createElement(f.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(W,null)}}),a.a.createElement(f.b,{exact:!0,path:"/users",render:function(){return a.a.createElement(B,null)}}),a.a.createElement(f.b,{exact:!0,path:"/login",render:function(){return a.a.createElement(J,null)}}),a.a.createElement(f.b,{exact:!0,path:"/news",render:function(){return a.a.createElement(V,null)}}),a.a.createElement(f.b,{exact:!0,path:"/music",render:function(){return a.a.createElement(X,null)}}),a.a.createElement(f.b,{exact:!0,path:"/settings",render:function(){return a.a.createElement(K,null)}})))):a.a.createElement(L.a,null)}}]),n}(a.a.Component),Y=Object(m.d)(f.f,Object(p.b)((function(e){return{initialized:_(e)}}),{initializeApp:function(){return function(){var e=Object(E.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(v.a)());case 2:t({type:"app/SET_INITIAL"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Q),Z=function(e){return a.a.createElement(d.a,null,a.a.createElement(p.a,{store:A},a.a.createElement(Y,null)))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return p}));var r=n(4),a=n.n(r),u=n(8),o=n(5),i=n(9),c=n(46),s={userId:null,email:null,login:null,isAuth:!1},l=function(e,t,n,r){return{type:"auth/SET_AUTH_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},f=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.checkAuth();case 2:0===(n=e.sent).resultCode&&(r=n.data,u=r.id,o=r.login,c=r.email,t(l(u,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var r=Object(u.a)(a.a.mark((function r(u){var o,s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?u(f()):(s=o.data.messages.length>0?o.data.messages[0]:"Common error",u(Object(c.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},p=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTH_USER_DATA":return Object(o.a)({},e,{},t.payload);default:return e}}},32:function(e,t,n){e.exports={header:"Header_header__IwUb1",logo:"Header_logo__mbnhI",loginBlock:"Header_loginBlock__2518E",button:"Header_button__tZAyb"}},49:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(87),o=n.n(u),i=n(88),c=n.n(i);t.a=function(){return a.a.createElement("div",{className:o.a.preloader},a.a.createElement("img",{src:c.a,alt:"preloader"}))}},54:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u}));var r=function(e){return e.auth.userId},a=function(e){return e.auth.login},u=function(e){return e.auth.isAuth}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return h}));var r=n(4),a=n.n(r),u=n(8),o=n(25),i=n(5),c=n(9),s="profile/ADD-POST",l={posts:[{id:1,likesCount:1,text:"Lorem ipsum dolor sit."},{id:2,likesCount:5,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quisquam!"},{id:3,likesCount:2,text:"Lorem ipsum dolor sit amet"},{id:4,likesCount:40,text:"Jetxc jjsd ddffddf"}],profile:null,status:""},f=function(e){return{type:s,newPost:e}},d=function(e){return{type:"profile/SET_USER_PROFILE",profile:e}},p=function(e){return{type:"profile/SET_USER_STATUS",status:e}},m=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(d(null)),t.next=3,c.b.getUsersProfile(e);case 3:return r=t.sent,n(d(r)),t.next=7,c.b.getStatus(e);case 7:u=t.sent,n(p(u));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(p("")),t.next=3,c.b.getStatus(e);case 3:r=t.sent,n(p(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(i.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[{id:5,text:t.newPost,likesCount:0}])});case"profile/SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"profile/SET_USER_STATUS":return Object(i.a)({},e,{status:t.status});default:return e}}},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(25),a=n(5),u={messages:[{id:1,from:"me",messageText:"Lorem ipsum dolor sit amet."},{id:2,from:"opponent",messageText:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, veritatis."},{id:3,from:"opponent",messageText:"Lorem ipsum, dolor sit amet consectetur adipisicing."},{id:4,from:"me",messageText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora iste voluptatum veritatis eos quo, esse qui ipsam odio! Dicta?"}],dialogs:[{id:1,name:"Loe"},{id:2,name:"Joe"},{id:3,name:"Carlos"},{id:4,name:"Jeniffer"}]},o=function(e){return{type:"dialogs/SEND-MESSAGE",newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND-MESSAGE":return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:5,messageText:t.newMessage,from:"me"}])});default:return e}}},82:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return E})),n.d(t,"e",(function(){return b}));var r=n(4),a=n.n(r),u=n(8),o=n(25),i=n(5),c=n(9),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)({},e,{},r):e}))},l="users/FOLLOW",f={users:[],pageSize:5,totalUsersCount:0,currentPage:1,pagesCount:0,isFetching:!1,followingInProgress:[]},d=function(e){return{type:"users/SET-CURRENT-PAGE",page:e}},p=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},m=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},g=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(p(!0)),r(d(e)),n.next=4,c.c.requestUsers(e,t);case 4:u=n.sent,r({type:"users/SET-USERS",users:u.items}),r({type:"users/SET-USERS-TOTAL-COUNT",totalCount:u.totalCount}),r({type:"users/SET_PAGES_COUNT",pages:Math.ceil(u.totalCount/t)}),r(p(!1));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(u.a)(a.a.mark((function e(t,n,r,u){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(m(!0,n)),e.next=3,r;case 3:0===e.sent.resultCode&&(t(u),t(m(!1,n)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),E=function(e){return function(t){h(t,e,c.c.follow(e),function(e){return{type:l,userId:e}}(e))}},b=function(e){return function(t){h(t,e,c.c.unfollow(e),function(e){return{type:"users/UNFOLLOW",userId:e}}(e))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!1})});case"users/SET-USERS":return Object(i.a)({},e,{users:t.users});case"users/SET_PAGES_COUNT":return Object(i.a)({},e,{pagesCount:t.pages});case"users/SET-CURRENT-PAGE":return Object(i.a)({},e,{currentPage:t.page});case"users/SET-USERS-TOTAL-COUNT":return Object(i.a)({},e,{totalUsersCount:t.totalCount});case"users/TOGGLE_IS_FETCHING":return Object(i.a)({},e,{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(i.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}}},87:function(e,t,n){e.exports={preloader:"Preloader_preloader__1OWMd"}},88:function(e,t,n){e.exports=n.p+"static/media/loader.9205748d.svg"},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(84),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"321994fc-144a-4c0e-a36e-a2437572c56d"}}),u={requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e),{}).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},o={getUsersProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={checkAuth:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}}},[[138,2,3]]]);
//# sourceMappingURL=main.b018b254.chunk.js.map