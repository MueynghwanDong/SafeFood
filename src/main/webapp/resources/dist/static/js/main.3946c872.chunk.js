(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{22:function(e,t,a){e.exports=a(47)},27:function(e,t,a){},28:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(19),r=a.n(o),c=(a(27),a(28),a(9)),i=a.n(c),s=a(20),d=a(8),u=a(2),m=a.n(u),p=a(3),h=a(4),f=a(6),b=a(5),g=a(7),v=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={aContent:[]},a.handleContentChange=function(e){a.setState({aContent:e.target.value})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"handleDelete",value:function(e){m.a.delete("http://localhost:8080/api/QnAdelete/"+e).then((function(e){alert("QnA\uac00 \uc0ad\uc81c \uc644\ub8cc"),window.location.reload()})).catch((function(e){console.log(e)}))}},{key:"handleCreate",value:function(e,t,a){m.a.put("http://localhost:8080/api/AUpdate",{aregdate:"null",awriter:this.props.lm.id,content:this.state.aContent,qnaid:e,qregdate:"null",qwriter:"ssafy",title:""}).then((function(e){alert("QnA\uac00 \ub4f1\ub85d \uc644\ub8cc"),window.location.reload()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.key,t.accodionKey),n=t.qna,o=t.lm,r="#collapseTwo"+a;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading",role:"tab",id:"headingTwo"},l.a.createElement("h4",{className:"panel-title"},l.a.createElement("a",{className:"collapsed",role:"button","data-toggle":"collapse","data-parent":"#accordion",href:r,"aria-expanded":"false","aria-controls":"collapseTwo"},"Q. ",n.title))),l.a.createElement("div",{id:r.slice(1,r.length),className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingTwo"},l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("span",{class:"input-group-text"})),1===o.auth?l.a.createElement("textarea",{class:"form-control","aria-label":"With textarea",onChange:this.handleContentChange},n.content):"null"===n.content?"\ub2f5\ubcc0\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.":n.content,l.a.createElement("div",{align:"right"},1===o.auth?l.a.createElement("div",{className:"btn btn-primary",id:a,onClick:function(){e.handleCreate(n.qnaid)}}," ","\ub4f1\ub85d"):"",1===o.auth?l.a.createElement("div",{className:"btn btn-danger",id:a,onClick:function(){e.handleDelete(n.qnaid)}},"\uc0ad\uc81c"):"")))))}}]),t}(l.a.Component),E=a(21);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(E.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={qcontent:"",loginMember:{}},a.handleChange=function(e){a.setState(w({},a.state,{qcontent:e.target.value}))},a.handleSubmit=function(){new Promise((function(e,t){m.a.get("http://localhost:8080/api/loginid").then((function(t){e()})).catch((function(e){alert("\ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694"),t()}))})).then((function(){return new Promise((function(e){m.a.post("http://localhost:8080/api/QnAregist",{aregdate:"null",awriter:"null",content:"null",qnaid:0,qregdate:"null",qwriter:"ssafy",title:a.state.qcontent}).then((function(t){e()})).catch((function(e){console.log(e)}))}))})).then(window.location.reload())},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(t,a){m.a.get("http://localhost:8080/api/loginid").then((function(a){e.setState(w({},e.state,{loginMember:a.data})),t()})).catch((function(e){a()}))}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header",align:"center"},l.a.createElement("h3",{className:"modal-title",id:"exampleModalCenterTitle"},"QnA\ub4f1\ub85d"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"\uc9c8\ubb38"),l.a.createElement("input",{type:"text",onChange:this.handleChange,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"\uc9c8\ubb38 \ub0b4\uc6a9 \uc785\ub825..."})))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleSubmit,"data-dismiss":"modal"},"\ub4f1\ub85d"))))))}}]),t}(l.a.Component),j=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)("http://localhost:8080/api/findAllQna"),u=Object(d.a)(c,2),p=u[0],h=(u[1],Object(n.useState)({})),f=Object(d.a)(h,2),b=f[0],g=f[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()(p);case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(){return new Promise((function(e,t){m.a.get("http://localhost:8080/api/loginid").then((function(t){g(t.data),e()})).catch((function(e){t()}))}))}))}),[p]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"panel-group",id:"accordion",role:"tablist","aria-multiselectable":"true"},o.map((function(e,t){return l.a.createElement(v,{key:t,accodionKey:t,qna:e,lm:b})}))),l.a.createElement("div",{align:"right"},l.a.createElement("button",{type:"button",className:"glyphicon glyphicon-pencil btn btn-primary","data-toggle":"modal","data-target":"#exampleModalCenter"})),l.a.createElement(O,null))};var C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"page-header"},l.a.createElement("h1",null,"QnA")),l.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.3946c872.chunk.js.map