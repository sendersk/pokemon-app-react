(this["webpackJsonppokemon-app-react"]=this["webpackJsonppokemon-app-react"]||[]).push([[0],{77:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),c=t.n(a),o=t(21),i=t.n(o),s=t(3),p=t(47),u=t(14),d=t(18),b=t.n(d),l=t(19),j=t.n(l),f=t(26),x=t(27),O=t.n(x),h=function(n){return function(){var e=Object(f.a)(j.a.mark((function e(t){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"POKEMON_LIST_LOADING"}),18,r=18*n-18,e.next=6,O.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(18,"&offset=").concat(r));case 6:a=e.sent,t({type:"POKEMON_LIST_SUCCESS",payload:a.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"POKEMON_LIST_FAIL"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()},g=t(41),m=t.n(g),v=t(4),y=t(5),k=t(16);function w(){var n=Object(v.a)(["\n  color: black;\n  text-decoration: none;\n"]);return w=function(){return n},n}function M(){var n=Object(v.a)(["\n  margin: 10px 0;\n  display: flex;\n  height: 50px;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: royalblue;\n  background-color: #fff;\n  border: 2px solid royalblue;\n  padding: 10px;\n  border-radius: 7px;\n"]);return M=function(){return n},n}function L(){var n=Object(v.a)(["\n  max-width: 1000px;\n  margin: auto;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  padding: 10px;\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n    margin-top: 50px;\n  }\n\n  @media (max-width: 450px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);return L=function(){return n},n}var E=y.b.div(L()),_=y.b.div(M()),P=Object(y.b)(k.b)(w());function S(){var n=Object(v.a)(["\n  background-color: lightskyblue;\n  height: 100%;\n"]);return S=function(){return n},n}var I=y.b.div(S());function N(){var n=Object(v.a)(["\n  display: inline-block;\n  color: #fff;\n  background-color: royalblue;\n  border: none;\n  border-radius: 20px;\n  font-size: 1em;\n  text-align: center;\n  padding: 10px;\n  margin: 10px 0;\n  border-radius: 10px;\n"]);return N=function(){return n},n}function C(){var n=Object(v.a)(["\n  line-height: 1.5;\n  font-size: 20px;\n  padding: 5px;\n  border: 3px solid #777;\n"]);return C=function(){return n},n}function T(){var n=Object(v.a)(["\n  color: #555;\n  font-size: 30px;\n  font-weight: 700;\n\n  @media (max-width: 768px){\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n"]);return T=function(){return n},n}function K(){var n=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 50px;\n  justify-content: center;\n  font-size: 20px;\n  align-items: center;\n  margin: 20px 0;\n  padding: 10px 15px;\n  gap: 20px;\n"]);return K=function(){return n},n}var U=y.b.div(K()),z=y.b.p(T()),A=y.b.input(C()),D=y.b.button(N()),F=function(n){var e=Object(a.useState)(""),t=Object(p.a)(e,2),c=t[0],o=t[1],i=Object(u.b)(),s=Object(u.c)((function(n){return n.PokemonList}));Object(a.useEffect)((function(){d(1)}),[]);var d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;i(h(n))};return Object(r.jsxs)(I,{children:[Object(r.jsxs)(U,{children:[Object(r.jsx)(z,{children:"Find your Pokemon: "}),Object(r.jsx)(A,{className:"search-input",type:"text",onKeyPress:function(e){"Enter"===e.key&&n.history.push("/pokemon/".concat(c))},onChange:function(n){return o(n.target.value.toLowerCase())},placeholder:"Search..."}),Object(r.jsx)(D,{className:"search-btn",onClick:function(){return n.history.push("/pokemon/".concat(c))},children:"Search"})]}),s.loading?Object(r.jsx)("p",{children:"Loading..."}):b.a.isEmpty(s.data)?""!==s.errorMsg?Object(r.jsx)("p",{children:s.errorMsg}):Object(r.jsx)("p",{children:"Unable to get data"}):Object(r.jsx)(E,{children:s.data.map((function(n,e){return Object(r.jsxs)(_,{children:[Object(r.jsx)("p",{children:n.name},n.name),Object(r.jsx)(P,{to:"/pokemon/".concat(n.name),children:"View"})]},e)}))}),!b.a.isEmpty(s.data)&&Object(r.jsx)(m.a,{pageCount:Math.ceil(s.count/20),pageRangeDisplayed:2,marginPagesDisplayed:1,onPageChange:function(n){return d(n.selected+1)},containerClassName:"pagination"})]})};function G(){var n=Object(v.a)(["\n  font-size: 50px;\n  padding: 10px;\n  margin-bottom: 40px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n\n  @media (max-width: 450px) {\n    margin-bottom: 15px;\n  }\n"]);return G=function(){return n},n}function J(){var n=Object(v.a)(["\n  width: 90%;\n  margin: 20px auto 0;\n  height: 90vh;\n"]);return J=function(){return n},n}function R(){var n=Object(v.a)(["\n  width: 45%;\n  padding: 10px;\n  background-color: #fff;\n  border: 3px solid royalblue;\n  border-radius: 10px;\n\n  @media (max-width: 450px){\n    width: 100%;\n  }\n"]);return R=function(){return n},n}function B(){var n=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: space-around;\n"]);return B=function(){return n},n}var H=y.b.div(B()),V=y.b.div(R()),W=y.b.div(J()),q=y.b.h1(G()),Q=function(n){var e=n.match.params.pokemon,t=Object(u.b)(),c=Object(u.c)((function(n){return n.Pokemon}));Object(a.useEffect)((function(){var n;t((n=e,function(){var e=Object(f.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"POKEMON_MULTIPLE_LOADING"}),e.next=4,O.a.get("https://pokeapi.co/api/v2/pokemon/".concat(n));case 4:r=e.sent,t({type:"POKEMON_MULTIPLE_SUCCESS",payload:r.data,pokemonName:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"POKEMON_MULTIPLE_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()))}),[t,e]);return Object(r.jsxs)(W,{children:[Object(r.jsx)(q,{children:e}),function(){if(!b.a.isEmpty(c.data[e])){var n=c.data[e];return Object(r.jsxs)(H,{children:[Object(r.jsxs)(V,{children:[Object(r.jsx)("h1",{children:"Sprites"}),Object(r.jsx)("img",{src:n.sprites.front_default,alt:""}),Object(r.jsx)("img",{src:n.sprites.back_default,alt:""})]}),Object(r.jsxs)(V,{children:[Object(r.jsx)("h1",{children:"Stats"}),n.stats.map((function(n){var e=n.stat,t=n.base_stat;return Object(r.jsxs)("p",{children:[e.name," ",t]},e.name)}))]}),Object(r.jsxs)(V,{children:[Object(r.jsx)("h1",{children:"Abilities"}),n.abilities.map((function(n){var e=n.ability;return Object(r.jsx)("p",{children:e.name},e.name)}))]}),Object(r.jsxs)(V,{children:[Object(r.jsx)("h1",{children:"Type"}),n.types.map((function(n){var e=n.type;return Object(r.jsx)("p",{children:e.name},e.name)}))]})]})}return c.loading?Object(r.jsx)("p",{children:"Loading..."}):""!==c.errorMsg?Object(r.jsx)("p",{children:c.errorMsg}):Object(r.jsx)("p",{children:"error getting pokemon"})}()]})};function X(){var n=Object(v.a)(["\n  margin-right: 100px;\n  font-size: 20px;\n  padding: 10px;\n  border: 3px solid #fff;\n  border-radius: 20px;\n  color: white;\n  text-decoration: none;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n"]);return X=function(){return n},n}function Y(){var n=Object(v.a)(["\n  display: flex;\n  width: 100%;\n  height: 60px;\n  align-items: center;\n  justify-content: flex-end;\n  background-color: royalblue;\n"]);return Y=function(){return n},n}var Z=y.b.nav(Y()),$=Object(y.b)(k.c)(X());var nn=function(){return Object(r.jsxs)(I,{children:[Object(r.jsx)(Z,{children:Object(r.jsx)($,{to:"/",children:"Home"})}),Object(r.jsxs)(s.d,{children:[Object(r.jsx)(s.b,{path:"/",exact:!0,component:F}),Object(r.jsx)(s.b,{path:"/pokemon/:pokemon",exact:!0,component:Q}),Object(r.jsx)(s.a,{to:"/"})]})]})},en=t(12),tn=t(45),rn=t(46),an=t(6),cn={loading:!1,data:[],errorMsg:"",count:0},on=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:cn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"POKEMON_LIST_LOADING":return Object(an.a)(Object(an.a)({},n),{},{loading:!0,errorMsg:""});case"POKEMON_LIST_FAIL":return Object(an.a)(Object(an.a)({},n),{},{loading:!1,errorMsg:"unable to get pokemon"});case"POKEMON_LIST_SUCCESS":return Object(an.a)(Object(an.a)({},n),{},{loading:!1,data:e.payload.results,errorMsg:"",count:e.payload.count});default:return n}},sn=t(22),pn={loading:!1,data:{},errorMsg:""},un=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"POKEMON_MULTIPLE_LOADING":return Object(an.a)(Object(an.a)({},n),{},{loading:!0,errorMsg:""});case"POKEMON_MULTIPLE_FAIL":return Object(an.a)(Object(an.a)({},n),{},{loading:!1,errorMsg:"unable to find pokemon"});case"POKEMON_MULTIPLE_SUCCESS":return Object(an.a)(Object(an.a)({},n),{},{loading:!1,errorMsg:"",data:Object(an.a)(Object(an.a)({},n.data),{},Object(sn.a)({},e.pokemonName,e.payload))});default:return n}},dn=Object(en.combineReducers)({PokemonList:on,Pokemon:un}),bn=Object(en.createStore)(dn,Object(tn.composeWithDevTools)(Object(en.applyMiddleware)(rn.a)));function ln(){var n=Object(v.a)(['\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: "Montserrat", sans-serif;\n  }\n  \n  *,\n  ::after,\n  ::before {\n    box-sizing: inherit;\n  }\n\n  .pagination {\n    max-width: 500px;\n    display: flex;\n    margin: auto;\n    list-style: none;\n    justify-content: space-between;\n    padding: 25px;\n    color: #555;\n    font-size: 16px;\n    font-weight: 600;\n  }\n']);return ln=function(){return n},n}var jn=Object(y.a)(ln());i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(k.a,{children:Object(r.jsxs)(u.a,{store:bn,children:[Object(r.jsx)(jn,{}),Object(r.jsx)(nn,{})]})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.4263d9f2.chunk.js.map