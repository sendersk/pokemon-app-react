(this["webpackJsonppokemon-app-react"]=this["webpackJsonppokemon-app-react"]||[]).push([[0],{46:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),o=a(18),s=a.n(o),i=(a(46),a(13)),p=a(3),j=a(40),d=a(11),l=a(15),O=a.n(l),b=a(16),u=a.n(b),m=a(24),h=a(25),x=a.n(h),g=function(e){return function(){var t=Object(m.a)(u.a.mark((function t(a){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"POKEMON_LIST_LOADING"}),20,n=20*e-20,t.next=6,x.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(20,"&offset=").concat(n));case 6:c=t.sent,a({type:"POKEMON_LIST_SUCCESS",payload:c.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:"POKEMON_LIST_FAIL"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},f=a(37),v=a.n(f),k=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),r=a[0],o=a[1],s=Object(d.b)(),p=Object(d.c)((function(e){return e.PokemonList}));Object(c.useEffect)((function(){l(1)}),[]);var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;s(g(e))};return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"search-wrapper",children:[Object(n.jsx)("p",{children:"Find your Pokemon: "}),Object(n.jsx)("input",{className:"search-input",type:"text",onChange:function(e){return o(e.target.value.toLowerCase())},placeholder:"Search..."}),Object(n.jsx)("button",{className:"search-btn",onClick:function(){return e.history.push("/pokemon/".concat(r))},children:"Search"})]}),p.loading?Object(n.jsx)("p",{children:"Loading..."}):O.a.isEmpty(p.data)?""!==p.errorMsg?Object(n.jsx)("p",{children:p.errorMsg}):Object(n.jsx)("p",{children:"Unable to get data"}):Object(n.jsx)("div",{className:"list-wrapper",children:p.data.map((function(e,t){return Object(n.jsxs)("div",{className:"pokemon-item",children:[Object(n.jsx)("p",{children:e.name},e.name),Object(n.jsx)(i.b,{to:"/pokemon/".concat(e.name),children:"View"})]},t)}))}),!O.a.isEmpty(p.data)&&Object(n.jsx)(v.a,{pageCount:Math.ceil(p.count/20),pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:function(e){return l(e.selected+1)},containerClassName:"pagination"})]})},M=function(e){var t=e.match.params.pokemon,a=Object(d.b)(),r=Object(d.c)((function(e){return e.Pokemon}));Object(c.useEffect)((function(){var e;a((e=t,function(){var t=Object(m.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"POKEMON_MULTIPLE_LOADING"}),t.next=4,x.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 4:n=t.sent,a({type:"POKEMON_MULTIPLE_SUCCESS",payload:n.data,pokemonName:e}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:"POKEMON_MULTIPLE_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[a,t]);return Object(n.jsxs)("div",{className:"pokemon",children:[Object(n.jsx)("h1",{className:"pokemon-header",children:t}),function(){if(!O.a.isEmpty(r.data[t])){var e=r.data[t];return Object(n.jsxs)("div",{className:"pokemon-wrapper",children:[Object(n.jsxs)("div",{className:"pokemon-item",children:[Object(n.jsx)("h1",{children:"Sprites"}),Object(n.jsx)("img",{src:e.sprites.front_default,alt:""}),Object(n.jsx)("img",{src:e.sprites.back_default,alt:""})]}),Object(n.jsxs)("div",{className:"pokemon-item",children:[Object(n.jsx)("h1",{children:"Stats"}),e.stats.map((function(e){var t=e.stat,a=e.base_stat;return Object(n.jsxs)("p",{children:[t.name," ",a]},t.name)}))]}),Object(n.jsxs)("div",{className:"pokemon-item",children:[Object(n.jsx)("h1",{children:"Abilities"}),e.abilities.map((function(e){var t=e.ability;return Object(n.jsx)("p",{children:t.name},t.name)}))]})]})}return r.loading?Object(n.jsx)("p",{children:"Loading..."}):""!==r.errorMsg?Object(n.jsx)("p",{children:r.errorMsg}):Object(n.jsx)("p",{children:"error getting pokemon"})}()]})};var L=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("nav",{children:Object(n.jsx)(i.c,{to:"/",children:"Home"})}),Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{path:"/",exact:!0,component:k}),Object(n.jsx)(p.b,{path:"/pokemon/:pokemon",exact:!0,component:M}),Object(n.jsx)(p.a,{to:"/"})]})]})},N=a(10),E=a(38),_=a(39),y=a(4),P={loading:!1,data:[],errorMsg:"",count:0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_LIST_LOADING":return Object(y.a)(Object(y.a)({},e),{},{loading:!0,errorMsg:""});case"POKEMON_LIST_FAIL":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,errorMsg:"unable to get pokemon"});case"POKEMON_LIST_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,data:t.payload.results,errorMsg:"",count:t.payload.count});default:return e}},I=a(20),w={loading:!1,data:{},errorMsg:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_MULTIPLE_LOADING":return Object(y.a)(Object(y.a)({},e),{},{loading:!0,errorMsg:""});case"POKEMON_MULTIPLE_FAIL":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,errorMsg:"unable to find pokemon"});case"POKEMON_MULTIPLE_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,errorMsg:"",data:Object(y.a)(Object(y.a)({},e.data),{},Object(I.a)({},t.pokemonName,t.payload))});default:return e}},T=Object(N.combineReducers)({PokemonList:S,Pokemon:C}),K=Object(N.createStore)(T,Object(E.composeWithDevTools)(Object(N.applyMiddleware)(_.a)));s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(i.a,{children:Object(n.jsx)(d.a,{store:K,children:Object(n.jsx)(L,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.90854db4.chunk.js.map