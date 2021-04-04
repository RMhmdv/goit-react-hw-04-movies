(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{33:function(e,t,r){"use strict";var n=r(35),c=r.n(n),a=r(36),s=r(37),i=r.n(s);function u(){return(u=Object(a.a)(c.a.mark((function e(t){var r,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t)},e.next=4,i()(r,t);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function o(){return(o=Object(a.a)(c.a.mark((function e(t){var r,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/credits")},e.next=4,i()(r,t);case 4:return n=e.sent,a=n.data,e.abrupt("return",a.cast);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=Object(a.a)(c.a.mark((function e(t){var r,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/reviews")},e.next=4,i()(r,t);case 4:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=Object(a.a)(c.a.mark((function e(t){var r,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"search/movie",params:{query:t}},e.next=4,i()(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}i.a.defaults.baseURL="https://api.themoviedb.org/3/",i.a.defaults.params={api_key:"3b0a0f3678b03bfe7113d836939cb420",language:"en-US"};var h={fetchTrendingMovies:function(){var e=Object(a.a)(c.a.mark((function e(){var t,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"trending/movie/week"},e.next=4,i()(t);case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),fetchMovieDetails:function(e){return u.apply(this,arguments)},fetchMovieCast:function(e){return o.apply(this,arguments)},fetchMovieReviews:function(e){return p.apply(this,arguments)},fetchMoviesByQuery:function(e){return l.apply(this,arguments)}};t.a=h},69:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var n=r(34),c=r(1),a=r(0),s=r(2),i=r(8),u=r(33),o=Object(a.lazy)((function(){return r.e(1).then(r.bind(null,70))})),p=Object(a.lazy)((function(){return r.e(5).then(r.bind(null,71))}));function l(){var e=Object(s.h)().movieId,t=Object(s.i)(),r=t.url,l=t.path,h=Object(s.f)(),j=Object(s.g)(),b=Object(a.useState)(null),f=Object(n.a)(b,2),v=f[0],d=f[1],O=Object(a.useState)(!1),x=Object(n.a)(O,2),m=x[0],w=x[1],g=Object(a.useState)(!1),y=Object(n.a)(g,2),k=y[0],E=y[1];Object(a.useEffect)((function(){u.a.fetchMovieDetails(e).then(d)}),[e]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){if(j.state&&j.state.from)return h.push(j.state.from);h.push("/")},children:Object(c.jsx)("span",{children:"Go Back"})}),v&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(v.poster_path),alt:v.title}),Object(c.jsxs)("h3",{children:[v.title,"(",v.release_date.split("-")[0],")"]}),Object(c.jsxs)("span",{children:["User Score: ",10*v.vote_average,"%"]}),Object(c.jsx)("h2",{children:"Overview"}),Object(c.jsx)("span",{children:v.overview}),Object(c.jsx)("h3",{children:"Genres"}),Object(c.jsx)("span",{children:v.genres.map((function(e){return e.name})).join(" ")}),Object(c.jsx)("hr",{}),Object(c.jsx)("span",{children:"Additional information"}),Object(c.jsx)("span",{role:"img","aria-label":"face emoji",children:"\ud83d\udc47\ud83c\udffb"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(i.c,{to:{pathname:"".concat(r,"/cast")},onClick:function(){!0===k&&E(!1),w(!0)},children:"Cast"})}),Object(c.jsx)("li",{children:Object(c.jsx)(i.c,{to:{pathname:"".concat(r,"/reviews")},onClick:function(){!0===m&&w(!1),E(!0)},children:"Reviews"})})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)(a.Suspense,{fallback:Object(c.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:[Object(c.jsx)(s.a,{path:"".concat(l,"/:cast"),children:v&&m&&Object(c.jsx)(o,{})}),Object(c.jsx)(s.a,{path:"".concat(l,"/:reviews"),children:v&&k&&Object(c.jsx)(p,{})})]})]})]})}}}]);
//# sourceMappingURL=MovieDetailsPage.ec73f408.chunk.js.map