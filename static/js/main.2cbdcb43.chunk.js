(this["webpackJsonppokemon-app-react"]=this["webpackJsonppokemon-app-react"]||[]).push([[0],{119:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),c=t.n(a),o=t(22),i=t.n(o),s=t(7),u=t(26),p=t(17),d=t(23),b=t.n(d),l=t(21),j=t.n(l),f=t(32),O=t(33),x=t.n(O),h=t(5),m=t(6),g=t(19);function v(){var n=Object(h.a)(["\n  color: black;\n  text-decoration: none;\n"]);return v=function(){return n},n}function y(){var n=Object(h.a)(["\n  margin: 10px 0;\n  display: flex;\n  height: 50px;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: royalblue;\n  background-color: #fff;\n  border: 2px solid royalblue;\n  padding: 10px;\n  border-radius: 7px;\n"]);return y=function(){return n},n}function w(){var n=Object(h.a)(["\n  max-width: 1000px;\n  margin: auto;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  padding: 10px;\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n    margin-top: 50px;\n  }\n\n  @media (max-width: 450px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);return w=function(){return n},n}var k=m.b.div(w()),L=m.b.div(y()),M=Object(m.b)(g.b)(v());function E(){var n=Object(h.a)(["\n  background-color: lightskyblue;\n  min-height: 90vh;\n"]);return E=function(){return n},n}var _=m.b.div(E()),S=t(53);function P(){var n=Object(h.a)(["\n  position: fixed;\n  width: 100%;\n  bottom: 20px;\n  align-items: center;\n  height: 50px;\n  justify-content: center;\n  z-index: 1000;\n  cursor: pointer;\n  animation: fadeIn 0.3s;\n  transition: opacity 0.4s;\n  opacity: 0.5;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  @keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0.5;\n  }\n}\n"]);return P=function(){return n},n}var I=Object(m.b)(S.a)(P()),N=function(){var n=Object(a.useState)(!1),e=Object(u.a)(n,2),t=e[0],c=e[1];Object(a.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}));var o=function(){!t&&window.pageYOffset>400?c(!0):t&&window.pageYOffset<=400&&c(!1)};return Object(r.jsx)(I,{className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:t?"flex":"none"}})};function T(){var n=Object(h.a)(["\n  display: inline-block;\n  color: #fff;\n  background-color: royalblue;\n  border: none;\n  border-radius: 20px;\n  font-size: 1em;\n  text-align: center;\n  padding: 10px;\n  margin: 10px 0;\n  border-radius: 10px;\n"]);return T=function(){return n},n}function C(){var n=Object(h.a)(["\n  line-height: 1.5;\n  font-size: 20px;\n  padding: 5px;\n  border: 3px solid #777;\n"]);return C=function(){return n},n}function K(){var n=Object(h.a)(["\n  color: #555;\n  font-size: 30px;\n  font-weight: 700;\n\n  @media (max-width: 768px){\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n"]);return K=function(){return n},n}function U(){var n=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 50px;\n  justify-content: center;\n  font-size: 20px;\n  align-items: center;\n  margin: 20px 0;\n  padding: 10px 15px;\n  gap: 20px;\n"]);return U=function(){return n},n}var z=m.b.div(U()),A=m.b.p(K()),D=m.b.input(C()),F=m.b.button(T()),G=t(49);var J=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(G.RotateCircleLoading,{color:"#ffffff"})})},R=function(n){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],o=t[1],i=Object(p.b)(),s=Object(p.c)((function(n){return n.PokemonList}));Object(a.useEffect)((function(){d()}),[]);var d=function(){i(function(){var n=Object(f.a)(j.a.mark((function n(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"POKEMON_LIST_LOADING"}),n.next=5,x.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(1500));case 5:t=n.sent,e({type:"POKEMON_LIST_SUCCESS",payload:t.data}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),e({type:"POKEMON_LIST_FAIL"});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}())};return Object(r.jsxs)(_,{children:[Object(r.jsxs)(z,{children:[Object(r.jsx)(A,{children:"Find your Pokemon: "}),Object(r.jsx)(D,{className:"search-input",type:"text",onKeyPress:function(e){"Enter"===e.key&&n.history.push("/pokemon/".concat(c))},onChange:function(n){return o(n.target.value.toLowerCase())},placeholder:"Search..."}),Object(r.jsx)(F,{className:"search-btn",onClick:function(){return n.history.push("/pokemon/".concat(c))},children:"Search"})]}),s.loading?Object(r.jsx)(J,{}):b.a.isEmpty(s.data)?""!==s.errorMsg?Object(r.jsx)("p",{children:s.errorMsg}):Object(r.jsx)("p",{children:"Unable to get data"}):Object(r.jsx)(k,{children:s.data.filter((function(n){return""===o||n.name.toLowerCase().includes(c.toLowerCase())?n:void 0})).map((function(n,e){return Object(r.jsxs)(L,{children:[Object(r.jsx)("p",{children:n.name},n.name),Object(r.jsx)(M,{to:"/pokemon/".concat(n.name),children:"View"})]},e)}))}),Object(r.jsx)(N,{})]})};function Y(){var n=Object(h.a)(["\n  font-size: 50px;\n  padding: 10px;\n  margin-bottom: 40px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n\n  @media (max-width: 450px) {\n    margin-bottom: 15px;\n  }\n"]);return Y=function(){return n},n}function B(){var n=Object(h.a)(["\n  width: 90%;\n  margin: 20px auto 0;\n  min-height: 90vh;\n"]);return B=function(){return n},n}function H(){var n=Object(h.a)(["\n  width: 45%;\n  padding: 10px;\n  background-color: #fff;\n  border: 3px solid royalblue;\n  border-radius: 10px;\n\n  @media (max-width: 450px){\n    width: 100%;\n  }\n"]);return H=function(){return n},n}function V(){var n=Object(h.a)(["\n  width: 100%;\n  padding-bottom: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: space-around;\n"]);return V=function(){return n},n}var W=m.b.div(V()),q=m.b.div(H()),Q=m.b.div(B()),X=m.b.h1(Y()),Z=function(n){var e=n.match.params.pokemon,t=Object(p.b)(),c=Object(p.c)((function(n){return n.Pokemon}));Object(a.useEffect)((function(){var n;t((n=e,function(){var e=Object(f.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"POKEMON_MULTIPLE_LOADING"}),e.next=4,x.a.get("https://pokeapi.co/api/v2/pokemon/".concat(n));case 4:r=e.sent,t({type:"POKEMON_MULTIPLE_SUCCESS",payload:r.data,pokemonName:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"POKEMON_MULTIPLE_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()))}),[t,e]);return Object(r.jsxs)(Q,{children:[Object(r.jsx)(X,{children:e}),function(){if(!b.a.isEmpty(c.data[e])){var n=c.data[e];return Object(r.jsxs)(W,{children:[Object(r.jsxs)(q,{children:[Object(r.jsx)("h1",{children:"Sprites"}),Object(r.jsx)("img",{src:n.sprites.front_default,alt:""}),Object(r.jsx)("img",{src:n.sprites.back_default,alt:""})]}),Object(r.jsxs)(q,{children:[Object(r.jsx)("h1",{children:"Stats"}),n.stats.map((function(n){var e=n.stat,t=n.base_stat;return Object(r.jsxs)("p",{children:[e.name," ",t]},e.name)}))]}),Object(r.jsxs)(q,{children:[Object(r.jsx)("h1",{children:"Abilities"}),n.abilities.map((function(n){var e=n.ability;return Object(r.jsx)("p",{children:e.name},e.name)}))]}),Object(r.jsxs)(q,{children:[Object(r.jsx)("h1",{children:"Type"}),n.types.map((function(n){var e=n.type;return Object(r.jsx)("p",{children:e.name},e.name)}))]})]})}return c.loading?Object(r.jsx)(J,{}):""!==c.errorMsg?Object(r.jsx)("p",{children:c.errorMsg}):Object(r.jsx)("p",{children:"error getting pokemon"})}()]})};function $(){var n=Object(h.a)(["\n  margin-right: 100px;\n  font-size: 20px;\n  padding: 10px;\n  border: 3px solid #fff;\n  border-radius: 20px;\n  color: white;\n  text-decoration: none;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  height: 60px;\n  align-items: center;\n  justify-content: flex-end;\n  background-color: royalblue;\n"]);return nn=function(){return n},n}var en=m.b.nav(nn()),tn=Object(m.b)(g.c)($());var rn=function(){return Object(r.jsxs)(_,{children:[Object(r.jsx)(en,{children:Object(r.jsx)(tn,{to:"/",children:"Home"})}),Object(r.jsxs)(s.d,{children:[Object(r.jsx)(s.b,{path:"/",exact:!0,component:R}),Object(r.jsx)(s.b,{path:"/pokemon/:pokemon",exact:!0,component:Z}),Object(r.jsx)(s.a,{to:"/"})]})]})},an=t(15),cn=t(51),on=t(52),sn=t(8),un={loading:!1,data:[],errorMsg:"",count:0},pn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:un,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"POKEMON_LIST_LOADING":return Object(sn.a)(Object(sn.a)({},n),{},{loading:!0,errorMsg:""});case"POKEMON_LIST_FAIL":return Object(sn.a)(Object(sn.a)({},n),{},{loading:!1,errorMsg:"unable to get pokemon"});case"POKEMON_LIST_SUCCESS":return Object(sn.a)(Object(sn.a)({},n),{},{loading:!1,data:e.payload.results,errorMsg:"",count:e.payload.count});default:return n}},dn=t(25),bn={loading:!1,data:{},errorMsg:""},ln=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"POKEMON_MULTIPLE_LOADING":return Object(sn.a)(Object(sn.a)({},n),{},{loading:!0,errorMsg:""});case"POKEMON_MULTIPLE_FAIL":return Object(sn.a)(Object(sn.a)({},n),{},{loading:!1,errorMsg:"unable to find pokemon"});case"POKEMON_MULTIPLE_SUCCESS":return Object(sn.a)(Object(sn.a)({},n),{},{loading:!1,errorMsg:"",data:Object(sn.a)(Object(sn.a)({},n.data),{},Object(dn.a)({},e.pokemonName,e.payload))});default:return n}},jn=Object(an.combineReducers)({PokemonList:pn,Pokemon:ln}),fn=Object(an.createStore)(jn,Object(cn.composeWithDevTools)(Object(an.applyMiddleware)(on.a)));function On(){var n=Object(h.a)(['\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: "Montserrat", sans-serif;\n  }\n  \n  *,\n  ::after,\n  ::before {\n    box-sizing: inherit;\n  }']);return On=function(){return n},n}var xn=Object(m.a)(On());i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(g.a,{children:Object(r.jsxs)(p.a,{store:fn,children:[Object(r.jsx)(xn,{}),Object(r.jsx)(rn,{})]})})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.2cbdcb43.chunk.js.map