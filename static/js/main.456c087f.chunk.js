(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={container:"StudentDataCard_container__qotv9",avatar:"StudentDataCard_avatar__2prg4",name:"StudentDataCard_name__1m36E",content:"StudentDataCard_content__1ZnYB",expandBtn:"StudentDataCard_expandBtn__3wh6K",tagSubmit:"StudentDataCard_tagSubmit__2Pp31",extendedContent:"StudentDataCard_extendedContent__6CBul"}},function(e,t,a){e.exports={expandBtn:"Icons_expandBtn__3d1Cz"}},,function(e,t,a){e.exports={input:"TagForm_input__17OXU",tagSubmit:"TagForm_tagSubmit__6BInJ"}},function(e,t,a){e.exports={App:"App_App__16ZpL",contentContainer:"App_contentContainer__1Uo_h"}},,,,function(e,t,a){e.exports={tag:"Tag_tag__1zEry"}},function(e,t,a){e.exports={input:"ContentFilter_input__3AIso"}},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(18),a(4)),i=a.n(o),u=a(9),l=a(12),m=a(1),p=a(5),d=a.n(p),f=function(e){var t=e.addTag,a=e.index,c=Object(n.useState)(""),s=Object(m.a)(c,2),o=s[0],i=s[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o,a),i("")}},r.a.createElement("input",{className:d.a.input,placeholder:"Add a tag",type:"text",value:o,onChange:function(e){i(e.target.value)}}),r.a.createElement("input",{className:d.a.tagSubmit,type:"submit"}))},g=a(10),v=a.n(g),h=function(e){var t=e.tag;return r.a.createElement("div",{className:v.a.tag},t)},_=a(3),w=a.n(_),C=function(e){var t=e.setShowGrades,a=e.showGrades;return r.a.createElement("svg",{className:w.a.expandBtn,onClick:function(){t(!a)},id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 42 42"},r.a.createElement("path",{d:"M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16v11.059\tC16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"}))},E=function(e){var t=e.setShowGrades,a=e.showGrades;return r.a.createElement("svg",{className:w.a.expandBtn,onClick:function(){t(!a)},id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 42 42"},r.a.createElement("path",{d:"M37.059,16H26H16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16h10h11.059C39.776,26,42,23.718,42,21\tS39.776,16,37.059,16z"}))},x=a(2),S=a.n(x),b=function(e){var t=e.index,a=e.img,c=e.firstName,s=e.lastName,o=e.email,i=e.company,u=e.skill,l=e.averageGrade,p=e.grades,d=e.tags,g=e.addTag,v=Object(n.useState)(!1),_=Object(m.a)(v,2),w=_[0],x=_[1];return r.a.createElement("div",{className:S.a.container},r.a.createElement("img",{src:a,className:S.a.avatar,alt:"avatar"}),r.a.createElement("h1",{className:S.a.name},"".concat(c.toUpperCase()," ").concat(s.toUpperCase())),r.a.createElement("div",{className:S.a.content},r.a.createElement("div",null,"Email: ",o),r.a.createElement("div",null,"Company: ",i),r.a.createElement("div",null,"Skill: ",u),r.a.createElement("div",null,"Average: ",l,"%"),w&&r.a.createElement("div",{className:S.a.extendedContent},p.map(function(e,t){return r.a.createElement("div",{key:t.toString()},"test".concat(t,":\xa0\xa0\xa0\xa0\xa0\xa0").concat(e,"%"))}),d.length>0?d.map(function(e,t){return r.a.createElement(h,{key:t.toString(),tag:e})}):null,r.a.createElement(f,{index:t,addTag:g}))),w?r.a.createElement(E,{className:S.a.expandBtn,setShowGrades:x,showGrades:w}):r.a.createElement(C,{className:S.a.expandBtn,setShowGrades:x,showGrades:w}))},N=a(11),y=a.n(N),j=function(e){var t=e.filterFunction,a=e.type;return r.a.createElement("input",{className:y.a.input,placeholder:"Search by ".concat(a),onChange:function(e){t(e.target.value.toLowerCase().trim())}})},O=a(6),B=a.n(O);var k=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),o=Object(m.a)(s,2),p=o[0],d=o[1],f=Object(n.useState)([]),g=Object(m.a)(f,2),v=g[0],h=g[1],_=Object(n.useState)([]),w=Object(m.a)(_,2),C=w[0],E=w[1],x=function(e,t){var n=Object(l.a)(a);n[t].tags.push(e),c(n)};function S(){return(S=Object(u.a)(i.a.mark(function e(t){var a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,r=[],n.students.map(function(e){var t=e;t.tags=[],r.push(t)}),c(r),d(r),h(r),E(r);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(e){S.apply(this,arguments)}("https://www.hatchways.io/api/assessment/students")},[]),r.a.createElement("div",{className:B.a.App},r.a.createElement("div",{className:B.a.contentContainer},r.a.createElement(j,{filterFunction:function(e){var t=[];a.map(function(a){"".concat(a.firstName," ").concat(a.lastName).toLowerCase().includes(e)&&t.push(a)});var n=[];C.map(function(t){"".concat(t.firstName," ").concat(t.lastName).toLowerCase().includes(e)&&n.push(t)}),d(n),h(t)},type:"name"}),r.a.createElement(j,{filterFunction:function(e){if(e){var t=[],n=[];a.map(function(a){var n=!1;a.tags.map(function(t){t.includes(e)&&(n=!0)}),n&&t.push(a)}),p.map(function(t){var a=!1;t.tags.map(function(t){t.includes(e)&&(a=!0)}),a&&n.push(t)}),d(n),E(t)}else d(v),E(a)},type:"tag"}),p.map(function(e,t){var a=function(e){for(var t=0,a=0;a<e.length;a++)t+=parseInt(e[a]);return t/e.length}(e.grades);return r.a.createElement(b,{key:t.toString(),index:t,img:e.pic,firstName:e.firstName,lastName:e.lastName,email:e.email,company:e.company,skill:e.skill,grades:e.grades,averageGrade:a,tags:e.tags,addTag:x})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.456c087f.chunk.js.map