(this["webpackJsonppokemon-app-react"]=this["webpackJsonppokemon-app-react"]||[]).push([[0],{119:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),o=t.n(c),i=t(22),a=t.n(i),u=t(7),s=t(26),p=t(17),d=t(23),l=t.n(d),f=t(21),b=t.n(f),h=t(32),j=t(33),m=t.n(j),x=t(5),O=t(4),g=t(19);function v(){var n=Object(x.a)(["\n  color: ",";\n  text-decoration: none;\n"]);return v=function(){return n},n}function y(){var n=Object(x.a)(["\n  margin: 10px 0;\n  display: flex;\n  height: 50px;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: ",";\n  background-color: ",";\n  border: 2px solid ",";\n  padding: 10px;\n  border-radius: 7px;\n"]);return y=function(){return n},n}function w(){var n=Object(x.a)(["\n  max-width: 1000px;\n  margin: auto;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  padding: 10px;\n\n  @media (max-width: ","px) {\n    grid-template-columns: repeat(2, 1fr);\n    margin-top: 65px;\n  }\n\n  @media (max-width: ","px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);return w=function(){return n},n}var k=O.c.div(w(),(function(n){return n.theme.breakpoint.screenMedium}),(function(n){return n.theme.breakpoint.screenSmall})),S=O.c.div(y(),(function(n){return n.theme.color.royalBlue}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.royalBlue})),L=Object(O.c)(g.b)(v(),(function(n){return n.theme.color.black}));function M(){var n=Object(x.a)(["\n  background-color: ",";\n  min-height: 90vh;\n"]);return M=function(){return n},n}var E=O.c.div(M(),(function(n){return n.theme.color.lightSkyBlue})),_=t(53);function P(){var n=Object(x.a)(["\n  position: fixed;\n  width: 100%;\n  bottom: 20px;\n  align-items: center;\n  height: 50px;\n  justify-content: center;\n  z-index: 1000;\n  cursor: pointer;\n  animation: fadeIn 0.3s;\n  transition: opacity 0.4s;\n  opacity: 0.5;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  @keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.5;\n  }\n}\n"]);return P=function(){return n},n}var I=Object(O.c)(_.a)(P()),N=function(){var n=Object(c.useState)(!1),e=Object(s.a)(n,2),t=e[0],o=e[1];Object(c.useEffect)((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}));var i=function(){!t&&window.pageYOffset>400?o(!0):t&&window.pageYOffset<=400&&o(!1)};return Object(r.jsx)(I,{className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:t?"flex":"none"}})};function z(){var n=Object(x.a)(["\n  display: inline-block;\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius: 20px;\n  font-size: 1em;\n  text-align: center;\n  padding: 10px;\n  margin: 10px 0;\n  border-radius: 10px;\n\n  @media (max-width: ","px) {\n    font-size: 16px;\n  }\n"]);return z=function(){return n},n}function C(){var n=Object(x.a)(["\n  line-height: 1.5;\n  font-size: 20px;\n  padding: 5px;\n  border: 3px solid ",";\n\n  @media (max-width: ","px) {\n    width: 60%;\n    font-size: 16px;\n  }\n"]);return C=function(){return n},n}function T(){var n=Object(x.a)(["\n  color: ",";\n  font-size: 30px;\n  font-weight: 700;\n\n  @media (max-width: ","px){\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n"]);return T=function(){return n},n}function K(){var n=Object(x.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 50px;\n  justify-content: center;\n  font-size: 20px;\n  align-items: center;\n  margin: 20px 0;\n  padding: 10px 15px;\n  gap: 20px;\n"]);return K=function(){return n},n}var B=O.c.div(K()),U=O.c.p(T(),(function(n){return n.theme.color.stoneColdGrey}),(function(n){return n.theme.breakpoint.screenMedium})),A=O.c.input(C(),(function(n){return n.theme.color.luckyGrey}),(function(n){return n.theme.breakpoint.screenSmall})),G=O.c.button(z(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.royalBlue}),(function(n){return n.theme.breakpoint.screenSmall})),D=t(49);var F=function(){return Object(r.jsx)(D.LoopCircleLoading,{color:"#fff"})},J=function(n){var e=Object(c.useState)(""),t=Object(s.a)(e,2),o=t[0],i=t[1],a=Object(p.b)(),u=Object(p.c)((function(n){return n.PokemonList}));Object(c.useEffect)((function(){d()}),[]);var d=function(){a(function(){var n=Object(h.a)(b.a.mark((function n(e){var t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"POKEMON_LIST_LOADING"}),n.next=5,m.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(1500));case 5:t=n.sent,e({type:"POKEMON_LIST_SUCCESS",payload:t.data}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),e({type:"POKEMON_LIST_FAIL"});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}())};return Object(r.jsxs)(E,{children:[Object(r.jsxs)(B,{children:[Object(r.jsx)(U,{children:"Find your Pokemon: "}),Object(r.jsx)(A,{className:"search-input",type:"text",onKeyPress:function(e){"Enter"===e.key&&n.history.push("/pokemon/".concat(o))},onChange:function(n){return i(n.target.value.toLowerCase())},placeholder:"Search..."}),Object(r.jsx)(G,{className:"search-btn",onClick:function(){return n.history.push("/pokemon/".concat(o))},children:"Search"})]}),u.loading?Object(r.jsx)(F,{}):l.a.isEmpty(u.data)?""!==u.errorMsg?Object(r.jsx)("p",{children:u.errorMsg}):Object(r.jsx)("p",{children:"Unable to get data"}):Object(r.jsx)(k,{children:u.data.filter((function(n){return""===i||n.name.toLowerCase().includes(o.toLowerCase())?n:void 0})).map((function(n,e){return Object(r.jsxs)(S,{children:[Object(r.jsx)("p",{children:n.name},n.name),Object(r.jsx)(L,{to:"/pokemon/".concat(n.name),children:"View"})]},e)}))}),Object(r.jsx)(N,{})]})};function Y(){var n=Object(x.a)(["\n  font-size: 50px;\n  padding: 10px;\n  margin-bottom: 40px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n\n  @media (max-width: ","px) {\n    margin-bottom: 15px;\n    font-size: 30px;\n  }\n"]);return Y=function(){return n},n}function H(){var n=Object(x.a)(["\n  width: 90%;\n  margin: 20px auto 0;\n  min-height: 90vh;\n"]);return H=function(){return n},n}function R(){var n=Object(x.a)(["\n  width: 45%;\n  padding: 10px;\n  background-color: ",";\n  border: 3px solid ",";\n  border-radius: 10px;\n\n  @media (max-width: ","px){\n    width: 100%;\n\n    h1 {\n      font-size: 24px;\n      padding: 5px;\n    }\n  }\n"]);return R=function(){return n},n}function V(){var n=Object(x.a)(["\n  width: 100%;\n  padding-bottom: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: space-around;\n"]);return V=function(){return n},n}var W=O.c.div(V()),q=O.c.div(R(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.royalBlue}),(function(n){return n.theme.breakpoint.screenSmall})),Q=O.c.div(H()),X=O.c.h1(Y(),(function(n){return n.theme.breakpoint.screenSmall}));function Z(){var n=Object(x.a)(["\n    color: ",";\n    font-size: 40px;\n\n    @media (max-width: ","){\n        font-size: 26px;\n    }\n"]);return Z=function(){return n},n}function $(){var n=Object(x.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return $=function(){return n},n}var nn=O.c.div($()),en=O.c.p(Z(),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.screenSmall}));var tn=function(){return Object(r.jsx)(nn,{children:Object(r.jsx)(en,{children:"Oops! Something go wrong! Back to Pokemon List and try choose another one."})})};function rn(){var n=Object(x.a)(["\n    color: ",";\n    font-size: 40px;\n\n    @media (max-width: ","){\n        font-size: 26px;\n    }\n"]);return rn=function(){return n},n}function cn(){var n=Object(x.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return cn=function(){return n},n}var on=O.c.div(cn()),an=O.c.p(rn(),(function(n){return n.theme.color.red}),(function(n){return n.theme.breakpoint.screenSmall}));var un=function(){return Object(r.jsx)(on,{children:Object(r.jsx)(an,{children:"Error getting pokemon!"})})},sn=function(n){var e=n.match.params.pokemon,t=Object(p.b)(),o=Object(p.c)((function(n){return n.Pokemon}));Object(c.useEffect)((function(){var n;t((n=e,function(){var e=Object(h.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"POKEMON_MULTIPLE_LOADING"}),e.next=4,m.a.get("https://pokeapi.co/api/v2/pokemon/".concat(n));case 4:r=e.sent,t({type:"POKEMON_MULTIPLE_SUCCESS",payload:r.data,pokemonName:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"POKEMON_MULTIPLE_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()))}),[t,e]);return Object(r.jsxs)(Q,{children:[Object(r.jsx)(X,{children:e}),function(){if(!l.a.isEmpty(o.data[e])){var n=o.data[e];return Object(r.jsxs)(W,{children:[Object(r.jsxs)(q,{children:[Object(r.jsx)("h1",{children:"Sprites"}),Object(r.jsx)("img",{src:n.sprites.front_default,alt:""}),Object(r.jsx)("img",{src:n.sprites.back_default,alt:""})]}),Object(r.jsxs)(q,{children:[Object(r.jsx)("h1",{children:"Stats"}),n.stats.map((function(n){var e=n.stat,t=n.base_stat;return Object(r.jsxs)("p",{children:[e.name," ",t]},e.name)}))]}),Object(r.jsxs)(q,{children:[Object(r.jsx)("h1",{children:"Abilities"}),n.abilities.map((function(n){var e=n.ability;return Object(r.jsx)("p",{children:e.name},e.name)}))]}),Object(r.jsxs)(q,{children:[Object(r.jsx)("h1",{children:"Type"}),n.types.map((function(n){var e=n.type;return Object(r.jsx)("p",{children:e.name},e.name)}))]})]})}return o.loading?Object(r.jsx)(F,{}):""!==o.errorMsg?Object(r.jsx)(tn,{}):Object(r.jsx)(un,{})}()]})};function pn(){var n=Object(x.a)(["\n  margin-right: 100px;\n  font-size: 20px;\n  padding: 10px;\n  border: 3px solid ",";\n  border-radius: 20px;\n  color: ",";\n  text-decoration: none;\n\n  &:hover {\n    background-color: ",";\n    filter: brightness(130%);\n  }\n\n  @media (max-width: ","px){\n    margin-right: 45px;\n  }\n\n  @media (max-width: ","px) {\n    margin-right: 20px;\n  }\n"]);return pn=function(){return n},n}function dn(){var n=Object(x.a)(["\n  display: flex;\n  width: 100%;\n  height: 60px;\n  align-items: center;\n  justify-content: flex-end;\n  background-color: ",";\n"]);return dn=function(){return n},n}var ln=O.c.nav(dn(),(function(n){return n.theme.color.royalBlue})),fn=Object(O.c)(g.c)(pn(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.royalBlue}),(function(n){return n.theme.breakpoint.screenMedium}),(function(n){return n.theme.breakpoint.screenSmall}));var bn=function(){return Object(r.jsxs)(E,{children:[Object(r.jsx)(ln,{children:Object(r.jsx)(fn,{to:"/",children:"Home"})}),Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/",exact:!0,component:J}),Object(r.jsx)(u.b,{path:"/pokemon/:pokemon",exact:!0,component:sn}),Object(r.jsx)(u.a,{to:"/"})]})]})},hn=t(15),jn=t(51),mn=t(52),xn=t(8),On={loading:!1,data:[],errorMsg:"",count:0},gn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:On,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"POKEMON_LIST_LOADING":return Object(xn.a)(Object(xn.a)({},n),{},{loading:!0,errorMsg:""});case"POKEMON_LIST_FAIL":return Object(xn.a)(Object(xn.a)({},n),{},{loading:!1,errorMsg:"unable to get pokemon"});case"POKEMON_LIST_SUCCESS":return Object(xn.a)(Object(xn.a)({},n),{},{loading:!1,data:e.payload.results,errorMsg:"",count:e.payload.count});default:return n}},vn=t(25),yn={loading:!1,data:{},errorMsg:""},wn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"POKEMON_MULTIPLE_LOADING":return Object(xn.a)(Object(xn.a)({},n),{},{loading:!0,errorMsg:""});case"POKEMON_MULTIPLE_FAIL":return Object(xn.a)(Object(xn.a)({},n),{},{loading:!1,errorMsg:"unable to find pokemon"});case"POKEMON_MULTIPLE_SUCCESS":return Object(xn.a)(Object(xn.a)({},n),{},{loading:!1,errorMsg:"",data:Object(xn.a)(Object(xn.a)({},n.data),{},Object(vn.a)({},e.pokemonName,e.payload))});default:return n}},kn=Object(hn.combineReducers)({PokemonList:gn,Pokemon:wn}),Sn=Object(hn.createStore)(kn,Object(jn.composeWithDevTools)(Object(hn.applyMiddleware)(mn.a)));function Ln(){var n=Object(x.a)(['\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: "Montserrat", sans-serif;\n  }\n  \n  ::after,\n  ::before {\n    box-sizing: inherit;}\n  ']);return Ln=function(){return n},n}var Mn=Object(O.b)(Ln());a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(g.a,{children:Object(r.jsx)(p.a,{store:Sn,children:Object(r.jsxs)(O.a,{theme:{breakpoint:{screenSmall:450,screenMedium:768},color:{white:"#ffffff",lightSkyBlue:"#87cefa",royalBlue:"#4169e1",red:"#ff0324",black:"#000000",stoneColdGrey:"#555555",luckyGrey:"#777777"}},children:[Object(r.jsx)(Mn,{}),Object(r.jsx)(bn,{})]})})})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.96331355.chunk.js.map