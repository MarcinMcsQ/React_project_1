(this.webpackJsonpprojecdogithuba=this.webpackJsonpprojecdogithuba||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(15),i=c.n(r),s=(c(26),c(27),c(6)),o=c(2),j=(c(28),c.p+"static/media/header11.8a667758.jpg"),u=c.p+"static/media/header22.2fac6795.jpg",l=c.p+"static/media/header33.9032d754.jpg",d=c.p+"static/media/header44.dce903a0.jpg",m=c.p+"static/media/header55.578f5adf.jpg",p=c(0),h=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(o.e,{children:[Object(p.jsx)(o.c,{path:"/",exact:!0,render:function(){return Object(p.jsx)("img",{src:u,alt:"PanelAdmin img"})}}),Object(p.jsx)(o.c,{path:"/products",render:function(){return Object(p.jsx)("img",{src:j,alt:"products img"})}}),Object(p.jsx)(o.c,{path:"/contact",render:function(){return Object(p.jsx)("img",{src:d,alt:"contact img"})}}),Object(p.jsx)(o.c,{path:"/admin",render:function(){return Object(p.jsx)("img",{src:l,alt:"PanelAdmin img"})}}),Object(p.jsx)(o.c,{render:function(){return Object(p.jsx)("img",{src:m,alt:"fany images"})}})]})})},b=c(20),x=function(e){return Object(p.jsxs)("article",{children:[Object(p.jsx)("h3",{style:{marginBottom:3,textTransform:"uppercase"},children:e.title}),Object(p.jsx)("p",{style:{fontSize:15},children:e.text})]})},O=[{id:1,title:"Wsp\xf3\u0142czesna emchanika ",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, omnis quisquam quam pariatur sit voluptatum ut nulla minus quae porro natus, recusandae error sequi vel quis doloribus similique amet dolorem!"},{id:2,title:"Pojazdy elektryczne ",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, omnis quisquam quam pariatur sit voluptatum ut nulla minus quae porro natus, recusandae error sequi vel quis doloribus similique amet dolorem!"},{id:3,title:"Pojazdy spalinowe ",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, omnis quisquam quam pariatur sit voluptatum ut nulla minus quae porro natus, recusandae error sequi vel quis doloribus similique amet dolorem!"}],f=function(){var e=O.map((function(e){return Object(p.jsx)(x,Object(b.a)({},e),e.id)}));return Object(p.jsx)("div",{className:"home",children:e})},g=c(17),v=c(18),y=c(21),q=c(19),k=(c(35),function(e){Object(y.a)(c,e);var t=Object(q.a)(c);function c(){var e;Object(g.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={value:"",isEmpty:!1},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:"",isEmpty:!1})},e.handleTextArea=function(t){e.setState({value:t.target.value}),e.state.value?e.setState({isEmpty:!0}):e.setState({isEmpty:!1})},e}return Object(v.a)(c,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"contact",children:[Object(p.jsx)("h3",{children:"Napisz do nas"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsx)("textarea",{value:this.state.value,onChange:this.handleTextArea,placeholder:"Wpisz wiadomo\u015b\u0107..."}),Object(p.jsx)("button",{children:"Wy\u015blij"})]}),Object(p.jsx)(o.a,{when:this.state.isEmpty,message:"Nie uzupe\u0142ni\u0142e\u015b formularzu czy chcesz opu\u015bci\u0107 strone"})]})}}]),c}(a.a.Component)),w=(c(36),["car","motocycle","bike"]),z=function(){var e=w.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"/product/".concat(e),children:e})},e)}));return Object(p.jsxs)("div",{className:"products",children:[Object(p.jsx)("h2",{children:"Lista produktw"}),Object(p.jsx)("div",{children:Object(p.jsx)("ul",{children:e})})]})},N=function(e){return Object(p.jsx)("article",{className:"product",children:Object(p.jsx)("h1",{children:e.id})})},S=function(e){return console.log(e),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:"Strona produktu"}),Object(p.jsx)(N,{id:e.match.params.id}),Object(p.jsx)(s.b,{to:"/products",children:"Powrt do listy produktw"})]})},P=function(){return Object(p.jsx)(o.c,{render:function(){return Object(p.jsx)("h3",{children:"Panel admine - Witamy"})}})},E=function(){return Object(p.jsx)("div",{children:"Error"})},A=(c(37),[{id:0,name:"start",path:"/",exact:!0},{id:1,name:"produkty",path:"/products"},{id:2,name:"kontakt",path:"/contact"},{id:3,name:"panel admina",path:"/admin",class:""}]),F=function(){var e=A.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(s.c,{id:e.id,to:e.path,className:e.class,exact:!!e.exact&&e.exact,children:e.name})},e.name)}));return Object(p.jsx)("nav",{className:"mainNav",children:Object(p.jsx)("ul",{children:e})})},J=function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{htmlFor:"",children:["Podaj login",Object(p.jsx)("input",{type:"text"})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{htmlFor:"",children:["Podaj haslo",Object(p.jsx)("input",{type:"password"})]}),Object(p.jsx)("button",{children:"Zaloguj"})]})},L=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(o.e,{children:[Object(p.jsx)(o.c,{path:"/",exact:!0,component:f}),Object(p.jsx)(o.c,{path:"/products",exact:!0,component:z}),Object(p.jsx)(o.c,{path:"/product/:id",exact:!0,component:S}),Object(p.jsx)(o.c,{path:"/contact",exact:!0,component:k}),Object(p.jsx)(o.c,{path:"/admin",exact:!0,component:P}),Object(p.jsx)(o.c,{path:"/login",exact:!0,component:J}),Object(p.jsx)(o.c,{component:E})]})})},W=(c(38),function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Stopka"}),Object(p.jsxs)(o.e,{children:[Object(p.jsx)(o.c,{path:"/:page/:idProduct",render:function(e){return console.log(e),Object(p.jsxs)("p",{children:["Jestes na"," ",Object(p.jsxs)("span",{children:[e.match.params.page,"/",e.match.params.idProduct]})]})}}),Object(p.jsx)(o.c,{path:"/:page",render:function(e){return console.log(e),Object(p.jsxs)("p",{children:["Jestes na ",Object(p.jsx)("span",{children:e.match.params.page})]})}}),Object(p.jsx)(o.c,{path:"/",exact:!0,render:function(e){return console.log(e),Object(p.jsxs)("p",{children:["Jestes na ",Object(p.jsx)("span",{children:"stronie glownej"})]})}})]})]})});var T=function(){return Object(p.jsx)(s.a,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)("header",{children:Object(p.jsx)(h,{})}),Object(p.jsxs)("main",{children:[Object(p.jsx)("aside",{children:Object(p.jsx)(F,{})}),Object(p.jsx)("section",{className:"blog",children:Object(p.jsx)(L,{})})]}),Object(p.jsx)("footer",{children:Object(p.jsx)(W,{})})]})})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0a940ea2.chunk.js.map