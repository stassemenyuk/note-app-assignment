(this["webpackJsonpnote-app-assig"]=this["webpackJsonpnote-app-assig"]||[]).push([[0],{28:function(e,t,i){},29:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),a=i(14),s=i.n(a),o=(i(28),i(11)),r=(i(29),i(1));function l(){return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("div",{className:"header-logo",children:Object(r.jsx)(o.b,{className:"logo-link",to:"/",children:"Note App"})}),Object(r.jsxs)("div",{className:"settings-btn",children:[Object(r.jsx)("div",{className:"settings__icon",children:Object(r.jsx)("svg",{viewBox:"0 0 507.451 507.45",children:Object(r.jsx)("g",{children:Object(r.jsx)("g",{id:"settings",children:Object(r.jsx)("path",{d:"M440.813,280.5c0-7.65,2.55-15.3,2.55-25.5s0-17.85-2.55-25.5l53.55-43.35c5.1-5.1,5.1-10.2,2.55-15.3l-51-89.25\r c-2.55-2.55-7.649-5.1-15.3-2.55l-63.75,25.5c-12.75-10.2-28.05-17.85-43.35-25.5l-10.2-66.3C315.863,5.1,308.212,0,303.113,0\r h-102c-5.101,0-12.75,5.1-12.75,10.2l-10.2,68.85c-15.3,5.1-28.05,15.3-43.35,25.5l-61.2-25.5c-7.65-2.55-12.75,0-17.851,5.1\r l-51,89.25c-2.55,2.55,0,10.2,5.1,15.3l53.55,40.8c0,7.65-2.55,15.3-2.55,25.5s0,17.85,2.55,25.5l-53.55,43.35\r c-5.1,5.101-5.1,10.2-2.55,15.301l51,89.25c2.55,2.55,7.649,5.1,15.3,2.55l63.75-25.5c12.75,10.2,28.05,17.85,43.35,25.5\r l10.2,66.3c0,5.1,5.1,10.2,12.75,10.2h102c5.101,0,12.75-5.101,12.75-10.2l10.2-66.3c15.3-7.65,30.6-15.3,43.35-25.5l63.75,25.5\r c5.101,2.55,12.75,0,15.301-5.101l51-89.25c2.55-5.1,2.55-12.75-2.551-15.3L440.813,280.5z M252.113,344.25\r c-48.45,0-89.25-40.8-89.25-89.25s40.8-89.25,89.25-89.25s89.25,40.8,89.25,89.25S300.563,344.25,252.113,344.25z"})})})})}),Object(r.jsx)("div",{className:"settings__text",children:"Settings"})]})]})}var u=i(9),d=i(7);i(40);function j(){var e=Object(d.b)(),t=Object(n.useState)(""),i=Object(u.a)(t,2),c=i[0],a=i[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),l=o[0],j=o[1];return Object(r.jsxs)("form",{action:"",className:"form",onSubmit:function(t){if(t.preventDefault(),""!==c&&""!==l){var i="".concat((new Date).getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getUTCMonth()]," ").concat((new Date).getUTCFullYear());e({type:"ADD",element:{title:c,text:l,date:i}}),a(""),j("")}},children:[Object(r.jsx)("h2",{children:"Create new note"}),Object(r.jsx)("div",{className:"form__title",children:Object(r.jsx)("input",{className:"form-input",onChange:function(e){return a(e.target.value)},placeholder:"Title",type:"text",value:c})}),Object(r.jsx)("div",{className:"form__note",children:Object(r.jsx)("input",{className:"form-input",onChange:function(e){return j(e.target.value)},placeholder:"Note",type:"text",value:l})}),Object(r.jsx)("div",{className:"form__submit",children:Object(r.jsx)("button",{type:"submit",children:"Create"})})]})}i(41);function b(e){var t=e.title,i=e.text,n=e.date,c=e.id,a=Object(d.b)();return Object(r.jsxs)("div",{className:"note-card",children:[Object(r.jsxs)("div",{className:"note__title",children:[t,Object(r.jsx)("div",{className:"delete-btn",onClick:function(){return a(function(e){return{type:"DELETE",id:e}}(c))},children:"X"})]}),Object(r.jsxs)("div",{className:"note__text",children:[i,Object(r.jsx)("div",{className:"note__date",children:n})]}),Object(r.jsx)("div",{className:"note__tools",children:Object(r.jsx)(o.b,{className:"note-link",to:"/".concat(c),children:"View more"})})]})}i(42);function m(){var e=Object(d.c)((function(e){return e.notes})).map((function(e){var t=e.title,i=e.text,n=e.date,c=e.id;return Object(r.jsx)(b,{title:t,text:i,date:n,id:c},c)}));return Object(r.jsx)("div",{className:"notes-block",children:e})}function x(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{}),Object(r.jsx)(m,{})]})}var p=i(2),O=i(22);i(46);var h=Object(p.f)((function(e){var t=e.match,i=Object(d.b)(),c=t.params.id,a=Object(d.c)((function(e){return e.notes[c]})),s=a.title,o=a.text,l=a.date,j=a.id,b=Object(n.useState)(""),m=Object(u.a)(b,2),x=m[0],p=m[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),f=v[0],g=v[1],N=Object(n.useState)(!1),_=Object(u.a)(N,2),q=_[0],C=_[1],y="new__text";return q||(y+=" hide"),Object(r.jsxs)("div",{className:"note-detail-view",children:[Object(r.jsxs)("div",{className:"note-detail__content",children:[Object(r.jsx)("div",{className:"note-detail__title",children:s}),Object(r.jsx)("div",{className:"note-detail__text",children:o})]}),Object(r.jsxs)("div",{className:"note-detail__tools",children:[Object(r.jsx)("button",{onClick:function(){return C(!q)},children:"Edit note"}),Object(r.jsx)(O.CopyToClipboard,{text:o,children:Object(r.jsx)("button",{onClick:function(){p("Copied"),setTimeout((function(){return p("")}),2e3)},children:"Copy to clipboard"})}),Object(r.jsx)("div",{className:"copy__text",children:x}),Object(r.jsx)("button",{children:"Share"})]}),Object(r.jsxs)("div",{className:y,children:[Object(r.jsx)("h3",{children:"New Text:"}),Object(r.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),i(function(e,t){return{type:"EDIT",id:e,text:t}}(j,f)),g(""),C(!1)},children:[Object(r.jsx)("input",{type:"text",className:"new-text__input",value:f,onChange:function(e){return g(e.target.value)}}),Object(r.jsx)("button",{className:"new-text__submit",children:"Submit"})]})]}),Object(r.jsx)("div",{className:"note-detail__date",children:l})]})}));var v=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(l,{}),Object(r.jsxs)(p.c,{children:[Object(r.jsx)(p.a,{exact:!0,path:"/",children:Object(r.jsx)(x,{})}),Object(r.jsx)(p.a,{exact:!0,path:"/:id",children:Object(r.jsx)(h,{})})]})]})})},f=i(23),g=i(16),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,i=JSON.parse(JSON.stringify(e));switch(t.type){case"ADD":return t.element.id=i.notesCounter,i.notes=[].concat(Object(g.a)(i.notes),[t.element]),i.notesCounter=i.notes.length,i;case"DELETE":return i.notes=[].concat(Object(g.a)(i.notes.slice(0,t.id)),Object(g.a)(i.notes.slice(t.id+1))),i.notes.forEach((function(e){e.id>t.id&&e.id--})),i.notesCounter=i.notes.length,i;case"EDIT":return i.notes[t.id].text=t.text,i;default:return e}},_={notes:[{title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo natus inventore? Magni, expedita ipsum!",date:"13 August 2021",id:0},{title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid corporis doloremque vitae voluptate dicta maxime quia odio repudiandae. Voluptatibus fuga ab expedita provident aperiam?",date:"13 August 2021",id:1},{title:"Lorem ipsum",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae incidunt cupiditate consectetur magnam quod praesentium quibusdam debitis. Deserunt optio nemo debitis, unde ea labore accusamus doloremque, impedit placeat voluptates amet non ullam! Mollitia voluptatibus molestias nam magni? Nemo dignissimos ratione illum labore voluptatum eveniet rem nulla dolorem asperiores deleniti doloribus, laudantium explicabo quia quasi odio facilis praesentium mollitia ducimus, distinctio numquam quisquam aliquid laborum? Qui odio distinctio repudiandae tempora ea officiis, dolore fuga impedit magni! Similique eveniet qui earum quibusdam nesciunt quasi in consectetur, minima beatae natus officia! Eaque laboriosam temporibus mollitia suscipit error aliquam expedita amet reprehenderit reiciendis quibusdam?",date:"13 August 2021",id:2}],notesCounter:3},q=Object(f.a)(N,_);i(47);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(d.a,{store:q,children:Object(r.jsx)(v,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.a59d6fbe.chunk.js.map