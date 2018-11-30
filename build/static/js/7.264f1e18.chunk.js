(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{211:function(e,t,a){"use strict";var n=a(7),l=a(8),c=a(10),s=a(9),o=a(11),r=a(27),i=a(1),m=a.n(i),u=a(3),d=a(202),h=a.n(d),p=a(199),k=[{value:"call",label:"Call"},{value:"email",label:"Email"},{value:"follow-up",label:"Follow Up"}],E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleCategory=function(e){a.setState({selectedCategory:e}),console.log("Category selected:",e)},a.handleClient=function(e){a.setState({selectedClient:e}),console.log("Client selected:",e)},a.toggle=a.toggle.bind(Object(r.a)(Object(r.a)(a))),a.handleClick=a.handleClick.bind(Object(r.a)(Object(r.a)(a))),a.handleInputs=a.handleInputs.bind(Object(r.a)(Object(r.a)(a))),a.handleChange=a.handleChange.bind(Object(r.a)(Object(r.a)(a))),a.state={activeTab:"1",dropdownOpen:new Array(6).fill(!1),list:[{value:"",label:""}],task:"",client:"",dateDue:"",time:"",isCompleted:"",selectedCategory:null,selectedClient:null,startDate:new Date},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({startDate:e})}},{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"toggleDrop",value:function(e){var t=this.state.dropdownOpen.map(function(t,a){return a===e&&!t});this.setState({dropdownOpen:t})}},{key:"componentDidMount",value:function(){this.fetchPost()}},{key:"fetchPost",value:function(){var e=this,t=[];fetch("https://brimis-crm-backend.herokuapp.com/crm/clients/").then(function(e){return console.log("fetched create task clients"),e.json()}).then(function(e){t=e.map(function(e){return e})}).catch(function(e){console.log(e)}).then(function(){for(var a=[{value:"",label:""}],n=0;n<t.length;n++)a[n]={value:t[n].id,label:t[n].name},console.log(a[n].value,a[n].label);e.setState({list:a.concat()})})}},{key:"handleInputs",value:function(e){return function(t){var a={};a[e]=t.target.value,console.log(t.target.value),this.setState(a)}.bind(this)}},{key:"handleClick",value:function(){h.a.post("https://brimis-crm-backend.herokuapp.com/crm/usertasks/create/",{assignedTo:"1",task:this.state.task,client:this.state.client,dateDue:this.state.dateDue,time:this.state.time,isCompleted:"False"}).then(function(e){console.log(e),console.log("Pushed new task")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.selectedCategory,a=e.selectedClient;return m.a.createElement("div",null,m.a.createElement(u.F,null,m.a.createElement(u.k,null,m.a.createElement(u.F,null,m.a.createElement(u.k,{sm:"8"},m.a.createElement(u.s,null,m.a.createElement(u.y,{htmlFor:"task"}," New Task "),m.a.createElement(u.t,{type:"text",id:"task",placeholder:"Enter task details",onChange:this.handleInputs("task")}))),m.a.createElement(u.k,{sm:"4"},m.a.createElement(u.y,{htmlFor:"client"}," Client "),m.a.createElement(p.a,{value:a,onChange:this.handleClient,options:this.state.list}))),m.a.createElement(u.F,null,m.a.createElement(u.k,{sm:"4"},m.a.createElement(u.y,{for:"timeDue"},"Time Due"),m.a.createElement(u.t,{type:"time",name:"time",id:"timeDue",placeholder:"Time Due"})),m.a.createElement(u.k,{sm:"4"},m.a.createElement(u.y,{for:"date"},"Date"),m.a.createElement(u.t,{type:"date",name:"date",id:"dueDate",placeholder:"Due Date"})),m.a.createElement(u.k,{sm:"4"},m.a.createElement(u.y,{htmlFor:"category"}," Category: "),m.a.createElement(p.a,{value:t,onChange:this.handleCategory,options:k}))),m.a.createElement(u.F,null,m.a.createElement(u.k,null,m.a.createElement(u.e,{type:"submit",size:"sm",color:"primary",onClick:this.handleClick}," ",m.a.createElement("i",{className:"fa fa-user"}," "),"Create"),m.a.createElement(u.e,{type:"reset",size:"sm",color:"danger"},m.a.createElement("i",{className:"fa fa-ban"})," Reset"))))))}}]),t}(i.Component);t.a=E},436:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a(8),c=a(10),s=a(9),o=a(11),r=a(27),i=a(1),m=a.n(i),u=a(3),d=a(211),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).toggleCustom=a.toggleCustom.bind(Object(r.a)(Object(r.a)(a))),a.state={custom:[!1,!1]},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"toggleCustom",value:function(e){var t=this.state.custom.map(function(t,a){return e===a&&!t});this.setState({custom:t})}},{key:"render",value:function(){var e=this;return m.a.createElement(u.F,null,m.a.createElement(u.k,null,m.a.createElement(u.f,null,m.a.createElement(u.j,null,"Lead Name"),m.a.createElement(u.g,null,m.a.createElement(u.F,null,m.a.createElement(u.k,{sm:"3"},m.a.createElement(u.y,{htmlFor:"company"}," Company Name ")),m.a.createElement(u.k,{sm:"3"},m.a.createElement(u.y,{htmlFor:"contact person"}," Contact Person ")),m.a.createElement(u.s,null,m.a.createElement(u.y,{htmlFor:"description"}," Lead Description "))),m.a.createElement("div",{id:"taskAccordion","data-children":".item"},m.a.createElement("div",{className:"item"},m.a.createElement(u.e,{className:"m-0 p-0",color:"link",onClick:function(){return e.toggleCustom(0)},"aria-expanded":this.state.custom[0],"aria-controls":"exampleAccordion1"},"Create Task"),m.a.createElement(u.l,{isOpen:this.state.custom[0],"data-parent":"#taskAccordion",id:"exampleAccordion1"},m.a.createElement(d.a,null)),m.a.createElement("p",{className:"mb-3"},"Task details")))))))}}]),t}(i.Component);t.default=h}}]);
//# sourceMappingURL=7.264f1e18.chunk.js.map