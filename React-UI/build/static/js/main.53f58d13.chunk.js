(this["webpackJsonpreact-wash"]=this["webpackJsonpreact-wash"]||[]).push([[0],{103:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(15),r=a.n(c),i=a(63),o=a(39),l=a(3),u=a(55),h=a(14),d=a(62),j=a(7),p=a(8),m=a(10),b=a(9),f=a(31),g=a.n(f),O=a(1),v=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).state={series:[],options:{legend:{show:!1},chart:{height:350,type:"treemap"},title:{text:"Distibuted Treemap For Analysis",align:"center"},colors:["#3B93A5","#F7B844","#ADD8C7","#EC3C65","#CDD7B6","#C1F666","#D43F97","#1E5D8C","#421243","#7F94B0","#EF6537","#C0ADDB"],plotOptions:{treemap:{distributed:!0,enableShades:!1}}}},s}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(e){JSON.stringify(e.data)!==JSON.stringify(this.props.data)&&this.setState({series:this.props.data})}},{key:"componentDidMount",value:function(){this.setState({series:this.props.data})}},{key:"render",value:function(){var e=this.state,t=e.options,a=e.series;return console.log(t),console.log(a),Object(O.jsx)("div",{id:"chart",children:Object(O.jsx)(g.a,{options:t,series:a,type:"treemap",height:350})})}}]),a}(n.a.Component),x=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).state={series:[{name:"Transaction Time",data:[]}],options:{annotations:{points:[{x:"Bananas",seriesIndex:0,label:{borderColor:"#775DD0",offsetY:0,style:{color:"#fff",background:"#775DD0"},text:""}}]},chart:{height:350,type:"bar"},plotOptions:{bar:{borderRadius:10,columnWidth:"10%"}},dataLabels:{enabled:!1,style:{colors:["#FFFFFF","#FFFFFF","#FFFFFF"]}},stroke:{width:2},grid:{row:{colors:["#fff","#fff","#fff","#fff","#fff"]}},xaxis:{style:{color:"#FFFFFF",fontSize:"14px",show:!0},labels:{rotate:-45},color:"red",categories:[]},yaxis:{style:{color:"#FFFFFF",fontSize:"14px",show:!0},title:{text:"Tranasction Time",color:"#FFFFFF"}},fill:{gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:.85,opacityTo:.85}}}},s}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(e){JSON.stringify(e.seriesData)!==JSON.stringify(this.props.seriesData)&&this.setState({series:[{data:this.props.seriesData}]}),JSON.stringify(e.series)!==JSON.stringify(this.props.series)&&this.setState({options:{xaxis:{categories:this.props.series}}})}},{key:"componentDidMount",value:function(){this.setState({series:[{data:this.props.seriesData}]}),this.setState({options:{xaxis:{categories:this.props.series}}})}},{key:"render",value:function(){var e=this.state,t=e.options,a=e.series;return console.log(t),console.log(a),Object(O.jsx)("div",{id:"chart",children:Object(O.jsx)(g.a,{options:this.state.options,series:this.state.series,type:"bar",height:350,width:1e3})})}}]),a}(n.a.Component),w=a(32),S=a(17),N=(a(52),a(22)),k=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).userStats=function(){S.a.userStats().then((function(e){var t=[];e.data.data.forEach((function(e){t.push(e)})),s.setState({fullstats:t},(function(){console.log(this.state.fullstats),this.filterTree(this.state.selectedOption.value)}))})).catch((function(e){}))},s.filterTree=function(e){var t=s.state.fullstats.filter((function(t){return parseInt(e)===parseInt(t.question)}));console.log(t);var a,n={},c={},r={},i={},o=0,l=0,u=0,j=0,p=Object(d.a)(t);try{for(p.s();!(a=p.n()).done;){var m=a.value;for(var b in m)"pid"!=b&&"question"!=b&&"totalStats"!=b&&"NONE"!=m[b]&&(console.log(m[b]),"programName"==b&&(n[m[b]]=void 0==n[m[b]]?m.totalStats:n[m[b]]+=m.totalStats,o+=parseInt(m.totalStats)),"speed"==b&&(c[m[b]]=void 0==c[m[b]]?m.totalStats:c[m[b]]+=m.totalStats,l+=parseInt(m.totalStats)),"temp"==b&&(r[m[b]]=void 0==r[m[b]]?m.totalStats:r[m[b]]+=m.totalStats,u+=parseInt(m.totalStats)),"extraWash"==b&&(i[m[b]]=void 0==i[m[b]]?m.totalStats:i[m[b]]+=m.totalStats,j+=parseInt(m.totalStats)))}}catch(J){p.e(J)}finally{p.f()}for(var f=[],g=0,O=Object.entries(n);g<O.length;g++){var v=Object(h.a)(O[g],2),x=v[0],w=v[1];w=Math.round(w/o*100),f.push({x:x,y:w})}for(var S=[],N=0,k=Object.entries(c);N<k.length;N++){var y=Object(h.a)(k[N],2),T=y[0],F=y[1];F=Math.round(F/l*100),S.push({x:T,y:F})}for(var C=[],D=0,q=Object.entries(r);D<q.length;D++){var E=Object(h.a)(q[D],2),I=E[0],W=E[1];W=Math.round(W/u*100),C.push({x:I,y:W})}for(var P=[],z=0,Q=Object.entries(i);z<Q.length;z++){var M=Object(h.a)(Q[z],2),L=M[0],B=M[1];B=Math.round(B/j*100),P.push({x:L,y:B})}var G=[];f.length>0&&G.push({name:"Programme",data:f}),S.length>0&&G.push({name:"Speed",data:S}),S.length>0&&G.push({name:"Speed",data:S}),C.length>0&&G.push({name:"Temperature",data:C}),C.length>0&&G.push({name:"Extra Wash",data:C}),s.setState({series:G})},s.handleChange=function(e){console.log(e),s.setState({selectedOption:e},(function(){this.filterTree(e.value)}))},s.state={series:[],fullstats:{},selectedOption:{value:1,label:"You have 3 pairs of coloured clothes with heavy stains. What options would you prefer to wash the clothes?",selected:!1,program:[]},q:[{value:1,label:"You have 3 pairs of coloured clothes with heavy stains. What options would you prefer to wash the clothes?",selected:!1,program:[]},{value:2,label:"You have 2 pairs of cotton clothes. What options would you prefer to wash the clothes?",selected:!1,program:[]}]},s}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.userStats()}},{key:"render",value:function(){var e=this.state,t=e.selectedOption,a=e.q,s=e.series;return Object(O.jsxs)("div",{class:"container-fluid",children:[Object(O.jsx)(N.a,{}),Object(O.jsx)("div",{class:"row full-width",children:Object(O.jsxs)("div",{className:"charts",children:[Object(O.jsx)("h2",{align:"center",children:"Sample Visualizations"}),Object(O.jsxs)("div",{class:"row col-md-4 p-30",children:[Object(O.jsx)("label",{class:"q-label",children:"Choose Question"}),Object(O.jsx)(w.a,{value:t,onChange:this.handleChange,options:a})]}),Object(O.jsx)("br",{}),Object(O.jsx)(v,{data:s,selectedOption:t})]})})]})}}]),a}(s.Component),y=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).userStats=function(){S.a.userTransactions().then((function(e){console.log("testtttttttt"),s.setState({fullstats:e.data.data},(function(){this.filterTree(1)}))})).catch((function(e){}))},s.filterTree=function(e){var t=s.state.fullstats.filter((function(t){return parseInt(e)===parseInt(t.question)})),a=[],n=[],c=1;t.forEach((function(e){console.log(e);var t=JSON.parse(e.activity);console.log(t);var s=parseFloat(t.endTime-t.startTime),r=Math.floor(s/6e4),i=(s%6e4/1e3).toFixed(0),o=r+"."+(i<10?"0":"")+i;console.log(o),n.push(o),a.push("User-"+c),c++,console.log("hel")})),s.setState({seriesData:n,series:a})},s.handleChange=function(e){console.log(e),s.setState({selectedOption:e},(function(){this.filterTree(e.value)}))},s.state={series:[],seriesData:[],fullstats:[],selectedOption:{value:1,label:"You have 3 pairs of coloured clothes with heavy stains. What options would you prefer to wash the clothes?",selected:!1,program:[]},q:[{value:1,label:"You have 3 pairs of coloured clothes with heavy stains. What options would you prefer to wash the clothes?",selected:!1,program:[]},{value:2,label:"You have 2 pairs of cotton clothes. What options would you prefer to wash the clothes?",selected:!1,program:[]}]},s}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.userStats()}},{key:"render",value:function(){var e=this.state,t=e.selectedOption,a=e.q,s=e.series,n=e.seriesData;return Object(O.jsxs)("div",{class:"container-fluid",children:[Object(O.jsx)(N.a,{}),Object(O.jsx)("div",{class:"row full-width",children:Object(O.jsxs)("div",{className:"charts",children:[Object(O.jsx)("h2",{align:"center",children:"Sample Visualizations"}),Object(O.jsxs)("div",{class:"row col-md-4 p-30",children:[Object(O.jsx)("label",{class:"q-label",children:"Choose Question"}),Object(O.jsx)(w.a,{value:t,onChange:this.handleChange,options:a})]}),Object(O.jsx)("br",{}),Object(O.jsx)(x,{series:s,seriesData:n,selectedOption:t})]})})]})}}]),a}(s.Component);var T=function(){return Object(O.jsx)(s.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading"}),children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:u.a}),Object(O.jsx)(l.a,{path:"/transactions",exact:!0,component:k}),Object(O.jsx)(l.a,{path:"/userTransactions",exact:!0,component:y}),Object(O.jsx)(l.a,{render:function(){return Object(O.jsx)("h1",{children:"404: page not found"})}})]})})};function F(){return Object(O.jsx)(T,{})}var C,D=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(o.a,{children:Object(O.jsx)("div",{className:"main-container",children:Object(O.jsx)(F,{})})})})},q=a(27),E=a(23),I=a(12),W=a.n(I),P=a(21),z=a(30),Q=a.n(z).a.create({baseURL:"https://api.spacexdata.com/v3"}),M=function(){var e=Object(P.a)(W.a.mark((function e(){var t,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.get("/launches");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=Object(q.b)("todo/getMissionList",function(){var e=Object(P.a)(W.a.mark((function e(t,a){var s,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.rejectWithValue,e.prev=1,e.next=4,M();case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",s([],e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),B=Object(q.c)({name:"missions",initialState:{missionsList:[],loader:!1,filterParam:{}},reducers:{setFilterData:function(e,t){e.filterParam=t.payload}},extraReducers:(C={},Object(E.a)(C,L.fulfilled,(function(e,t){e.loader=!1,e.missionsList=t.payload})),Object(E.a)(C,L.pending,(function(e){e.loader=!0})),Object(E.a)(C,L.rejected,(function(e,t){var a=t.error;e.loader=!1,console.log(a)})),C)}),G=(B.actions.setFilterData,B.reducer),J=Object(q.a)({reducer:{mission:G}});a(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(O.jsx)(i.a,{store:J,children:Object(O.jsx)(D,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},17:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var s=a(12),n=a.n(s),c=a(21),r=a(30),i=a.n(r).a.create({baseURL:"http://ec2-3-69-19-183.eu-central-1.compute.amazonaws.com:3005",headers:{"Content-type":"application/json"}}),o={submitTransaction:function(e){return l.apply(this,arguments)},fetchProgrms:function(e){return i.get("/programs")},userStats:function(){return i.get("/userStats")},userTransactions:function(){return i.get("/userTransactions")}};function l(){return(l=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("saveTransaction",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},22:function(e,t,a){"use strict";a(0);var s=a(1);t.a=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(s.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{class:"navbar-toggler-icon"})}),Object(s.jsx)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(s.jsxs)("ul",{class:"navbar-nav mr-auto nav justify-content-end",children:[Object(s.jsx)("li",{class:"nav-item active",children:Object(s.jsxs)("a",{class:"nav-link active",href:"/",children:["Home ",Object(s.jsx)("span",{class:"sr-only"})]})}),Object(s.jsx)("li",{class:"nav-item ",children:Object(s.jsx)("a",{class:"nav-link",href:"transactions",children:"Reports - Tree Visualizations"})}),Object(s.jsx)("li",{class:"nav-item ",children:Object(s.jsx)("a",{class:"nav-link",href:"userTransactions",children:"Reports - Transaction Visualizations"})})]})})]})})}},38:function(e,t,a){"use strict";var s=a(33),n=a(60),c=a(64),r=a(25);s.a.use(n.a).use(c.a).use(r.e).init({debug:!0,fallbackLng:"en",interpolation:{escapeValue:!1},react:{useSuspense:!1}}),t.a=s.a},52:function(e,t,a){},55:function(e,t,a){"use strict";var s=a(4),n=a(13),c=a(7),r=a(8),i=a(10),o=a(9),l=a(0),u=a.n(l),h=a(24),d=a.n(h),j=a(56),p=a(124),m=(a(72),a(1)),b=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).showButton=function(){s.setState({button:!0},(function(){this.props.showMachine()}))},s.countPlaces=0,s.defaultBetValue=10,s.state={button:!1,activeQ:1,q:[{id:1,label:"You have 3 pairs of coloured clothes with heavy stains. What options would you prefer to wash the clothes?",selected:!1,program:[]},{id:2,label:"You have 2 pairs of cotton clothes. What options would you prefer to wash the clothes?",selected:!1,program:[]}]},s}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e){e.activeQ!==this.props.activeQ&&this.setState({activeQ:this.props.activeQ})}},{key:"render",value:function(){var e=this.state,t=e.q,a=(e.button,e.activeQ),s=this.props.t;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h2",{children:s("select_cloth_type")}),Object(m.jsx)("ul",{className:"question",children:t.map((function(e,t){return Object(m.jsx)("li",{className:a===e.id?"active":"styleNone hide",children:Object(m.jsx)("label",{htmlFor:e.label,children:e.label})},t)}))})]})})}}]),a}(u.a.Component),f=Object(p.a)(["translation"])(b),g=a(14),O=(a(80),a(81),{Extras:"blue",Speed:"red",Program:"yellow",Temp:"pink"});var v=Object(p.a)(["translation"])((function(e){var t=Object(l.useState)([]),a=Object(g.a)(t,2),s=a[0],c=a[1],r=Object(l.useState)(0),i=Object(g.a)(r,2),o=i[0],u=i[1],h=Object(l.useState)({backgroundColor:"#aaaaaa",title:"Program wise Stats",titleTextStyle:{color:"red"},is3D:!0,chartArea:{left:"3%",top:"3%",height:"65%",width:"65%"},fontSize:16,bold:!0,legend:{position:"right",textStyle:{color:"white",fontSize:16,bold:!0}}}),d=Object(g.a)(h,2),j=d[0],p=d[1];return Object(l.useEffect)((function(){var t=0;console.log(e.stats);for(var a=Object(n.a)(e.stats),s=0,r=0;r<a.length;r++)t+=parseInt(a[r][1]),a[r][2]=a[r][1],s<parseInt(a[r][1])&&(s=parseInt(a[r][1]));u(s),console.log(o);for(var i=0;i<a.length;i++)console.log(a[i][1]),a[i][1]=Math.round(a[i][1]/t*100);c(a),p({titleTextStyle:{color:"#FFFFFF",italic:!0,fontSize:24},backgroundColor:"#aaaaaa",lable:e.temparature?"Temp":e.speed?"Speed":e.extras?"Extras":"Program",title:e.temparature?"Temparature":e.speed?"Speed":e.extras?"Extras":"Programme"})}),[e.stats]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:Object(m.jsx)("h2",{className:"statsTitle",children:j.title})}),Object(m.jsx)("div",{className:"card-columns text-white",children:s.map((function(e,t){return Object(m.jsx)("div",{className:"card mt-1 mb-1 ".concat(o===e[2]?O[j.lable]:"brown"),children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:e[0]}),Object(m.jsxs)("p",{className:"percnetage",children:[e[1],"%"]})]})})}))})]})})),x=a(38),w=a(17),S=(a(101),a(102),a(103),a(33),a(22)),N={items:2,autoplay:!1},k={items:5,autoplay:!1},y={},T=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).renderer=function(e){var t=e.hours,a=e.minutes,s=e.seconds;if(e.completed){if(r.setState({spin:!1,success:!0}),2==r.state.activeQ){var c=r.state.data;c.endTime=(new Date).getTime(),r.setState((function(e){return{store:[].concat(Object(n.a)(e.store),[c])}}),(function(){this.saveTrans()})),setTimeout((function(){r.setState({success:!1,feedback:!0},(function(){this.userStats()}))}),5e3)}else setTimeout((function(){r.setState({activeQ:r.state.activeQ+1});var e=r.state.data;console.log(e),e.endTime=(new Date).getTime(),r.setState((function(t){return{store:[].concat(Object(n.a)(t.store),[e])}}),(function(){this.setState((function(e){return{data:{program:1,startTime:(new Date).getTime(),programName:"Automatic plus",temparature:20,speed:1600,extras:"",workflow:[],question:e.data.question+1}}}))})),r.setDefault()}),5e3);return"<span ClassName='blink'>program Completed !</span>"}return Object(m.jsxs)("span",{children:[t,":",a,":",s]})},r.setDefault=function(){r.setState({feedback:!1,settings:!1,language:!1,qustion:!1,start:!0,program:!1,temparature:!1,speed:!1,wash:!1,extras:!1,run:!1,spin:!1,success:!1,zoom:!1,stats:[],startTime:(new Date).getTime(),workflow:[]},(function(){this.setGraph()}))},r.reset=function(){r.setState({feedback:!1,settings:!1,language:!1,qustion:!1,start:!1,program:!1,temparature:!1,speed:!1,wash:!1,extras:!1,run:!1,spin:!1,success:!1,zoom:!1,activeQ:1,q:[],stats:[],store:[],data:{startTime:(new Date).getTime(),program:1,question:1,programName:"Automatic plus",temparature:20,speed:1600,extras:"NONE",workflow:[]}},(function(){this.setGraph()}))},r.startMachine=function(){r.setState({start:!r.state.start},(function(){!1===this.state.start&&this.reset()}))},r.selectHome=function(){r.setState({settings:!1,language:!1,qustion:!1,feedback:!1,program:!1,temparature:!1,speed:!1,wash:!1,extras:!1,run:!1,spin:!1,success:!1},(function(){this.setGraph()})),console.log(r.state)},r.selectProgramDetail=function(){r.setState({feedback:!1,settings:!1,language:!1,qustion:!1,program:!0,temparature:!1,speed:!1,wash:!1,extras:!1,run:!1,spin:!1,success:!1},(function(){this.setGraph()}))},r.showMachine=function(){r.setState({qustion:!0})},r.selectWash=function(e){console.log(e);var t=r.state.programs.filter((function(t){return parseInt(t.pid)===parseInt(e)})),a=[],c=[];t.length>0&&(a=t[0].temp.split(","),c=t[0].speed.split(",")),r.setState((function(n){return{data:Object(s.a)(Object(s.a)({},n.data),{},{program:e,programName:t[0].pname}),temps:a,speeds:c}})),r.setState((function(e){return{data:Object(s.a)(Object(s.a)({},e.data),{},{workflow:[].concat(Object(n.a)(e.data.workflow),[{screen:"washing",value:t[0].pname,time:(new Date).getTime()}])})}})),r.setState({wash:!0})},r.selectProgram=function(){r.setState({program:!0,wash:!1},(function(){this.setGraph()}))},r.selectExtra=function(){r.setState({extras:!0},(function(){this.setGraph()}))},r.updateTemparature=function(e){r.setState((function(t){return{data:Object(s.a)(Object(s.a)({},t.data),{},{temparature:e})}})),r.setState((function(t){return{data:Object(s.a)(Object(s.a)({},t.data),{},{workflow:[].concat(Object(n.a)(t.data.workflow),[{screen:"temparature",value:e,time:(new Date).getTime()}])})}}))},r.updateExtras=function(e){r.setState((function(t){return{data:Object(s.a)(Object(s.a)({},t.data),{},{extras:e})}})),r.setState((function(t){return{data:Object(s.a)(Object(s.a)({},t.data),{},{workflow:[].concat(Object(n.a)(t.data.workflow),[{screen:"extra",value:e,time:(new Date).getTime()}])})}}))},r.updateSpeed=function(e){r.setState((function(t){return{data:Object(s.a)(Object(s.a)({},t.data),{},{speed:e})}})),r.setState((function(t){return{data:Object(s.a)(Object(s.a)({},t.data),{},{workflow:[].concat(Object(n.a)(t.data.workflow),[{screen:"speed",value:e,time:(new Date).getTime()}])})}}))},r.selectTemparature=function(){r.setState({temparature:!0},(function(){this.setGraph()}))},r.selectSpeed=function(){r.setState({speed:!0},(function(){this.setGraph()}))},r.selectRun=function(){r.setState({run:!0,spin:!0})},r.showSettings=function(){r.setState({settings:!0})},r.showLanguage=function(){r.setState({language:!0})},r.changeLanguage=function(e){r.setState({lang:e}),x.a.changeLanguage(e)},r.changeQ=function(e){r.setState({changeQ:e})},r.saveTrans=function(){var e={data:r.state.store};w.a.submitTransaction(e).then((function(e){e.data.status})).catch((function(e){void 0!==e.response&&setErrorMessage(e.response.data.msg)}))},r.fetchPrograms=function(){w.a.fetchProgrms().then((function(e){r.setState({programs:e.data.data},(function(){}))})).catch((function(e){}))},r.userStats=function(){w.a.userStats().then((function(e){var t=[];e.data.data.forEach((function(e){t.push(e)})),r.setState({fullstats:t},(function(){this.setGraph()}))})).catch((function(e){}))},r.setGraph=function(){var e=r.state,t=e.temparature,a=e.speed,s=e.extras,n=r.state.data,c=n.program,i=n.question,o=r.state.fullstats.filter((function(e){return t||a||s?t||a||s?parseInt(e.question)==parseInt(i)&&parseInt(e.pid)==parseInt(c):void 0:parseInt(e.question)==parseInt(i)})),l=[],u="",h=0;o.forEach((function(e){u=t||a||s?t?e.temp.toString():s?e.extraWash:e.speed.toString():e.programName,h=e.totalStats;var n=l.findIndex((function(e){return e[0]===u}));n>-1?l[n][1]+=parseInt(l[n][1]):"NONE"!==u&&l.push([u,parseInt(h)])}));var d=[].concat(l);r.setState({stats:d},(function(){}))},r.zoomWindow=function(){r.setState({zoom:!r.state.zoom})},r.state={lang:"en",feedback:!1,settings:!1,language:!1,qustion:!1,start:!1,program:!1,temparature:!1,speed:!1,wash:!1,extras:!1,run:!1,spin:!1,success:!1,zoom:!1,activeQ:1,q:[],programs:[],speeds:[],temps:[],store:[],stats:[],fullstats:[],data:{startTime:(new Date).getTime(),program:1,question:1,programName:"Automatic plus",temparature:20,speed:1600,extras:"",workflow:[]}},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchPrograms(),this.userStats(),this.showMachine(),this.setState({lang:this.props.i18n.language})}},{key:"render",value:function(){var e=this,t=this.state,a=t.feedback,s=t.start,n=t.program,c=t.settings,r=t.language,i=t.wash,o=t.extras,l=t.run,u=t.spin,h=t.success,p=t.programs,b=t.data,g=t.temps,O=t.speeds,x=t.temparature,w=t.speed,T=t.lang,F=t.activeQ,C=t.stats,D=t.zoom,q=this.props.t;return console.log(p),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S.a,{}),Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)(f,{showMachine:this.showMachine,activeQ:F,changeQ:this.changeQ}),Object(m.jsx)("div",{className:"charts",children:Object(m.jsx)(v,{stats:C,temparature:this.state.temparature,speed:this.state.speed,extras:this.state.extras})})]}),Object(m.jsx)("div",{className:"right",children:Object(m.jsx)("div",{className:"bg-img",children:Object(m.jsxs)("div",{className:"row align-items-center wash-img-mar",children:[Object(m.jsx)("div",{className:"wash-img ".concat(D?"blur":""),children:Object(m.jsx)("img",{src:"images/washingmachine.png",alt:"bg"})}),l?Object(m.jsx)("div",{className:"spin-img ",children:Object(m.jsx)("img",{className:u?"image-rotate":"image-rotate-off",alt:"back",src:"images/spin-img.png"})}):"",!l&&s?Object(m.jsx)("div",{className:"spin-img ",children:Object(m.jsx)("img",{className:"image-rotate-off",alt:"back",src:"images/cloth-img.png"})}):"",Object(m.jsx)("div",{className:"stop-icon ",children:s?Object(m.jsx)("a",{href:"#",className:"",onClick:this.startMachine,children:Object(m.jsx)("img",{className:"",src:"images/start-icon.png",alt:"test"})}):Object(m.jsx)("a",{href:"#",onClick:this.startMachine,children:Object(m.jsx)("img",{src:"images/stiop-img.png",alt:"test"})})}),h?Object(m.jsx)("div",{className:"completed",children:Object(m.jsx)("span",{className:"blink",children:"Program Completed"})}):"",a?Object(m.jsx)("div",{className:"completed",children:Object(m.jsx)("span",{className:"blink",children:"Thank you for your valuable feedback."})}):"",l&&u?Object(m.jsx)("div",{className:"timer",children:Object(m.jsx)(j.a,{date:Date.now()+4e3,renderer:this.renderer})}):"",Object(m.jsx)("div",{className:"main-screen ".concat(D?"main-screen-zoom":""),children:s&&!l?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"home-menu",children:[Object(m.jsxs)("ul",{className:"home-icons",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"javascript:void(0)",onClick:this.selectHome,children:Object(m.jsx)("img",{src:"images/Home.png",className:"home",alt:"test"})})}),Object(m.jsxs)("li",{children:[n?"":"Home",!n||i||x||w?"":"Programme",!i||o||x||w?"":"Programme",o?"Extras":"",w?"Speed":"",x?"Temparature":""]})]}),Object(m.jsx)("div",{className:"return-icon",children:Object(m.jsxs)("ul",{className:"",children:[Object(m.jsx)("li",{className:"zoomtext",children:Object(m.jsx)("a",{href:"javascript:void(0)",onClick:this.zoomWindow,children:D?"Zoom Out":"Zoom In"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"",children:Object(m.jsx)("img",{src:"images/return.png",alt:"test"})})})]})})]}),n&&!i?Object(m.jsx)("div",{className:"baumwolee",children:Object(m.jsx)("div",{className:"baumwolee-main",children:Object(m.jsx)(d.a,{options:N,events:y,children:p.map((function(t,a){return Object(m.jsx)("div",{className:"baumwolee-icon",children:Object(m.jsxs)("a",{href:"javascript:void(0)",className:" ".concat(b.program==t.pid?"active":""),onClick:function(){return e.selectWash(t.pid)},children:[Object(m.jsx)("img",{src:"images/baumwolee.png"}),Object(m.jsx)("p",{children:q(t.pname)}),Object(m.jsx)("p",{className:"std",children:"2.39 Std"})]})})}))})})}):"",n||c?"":Object(m.jsx)("div",{className:"carouselslide",children:Object(m.jsxs)(d.a,{options:N,events:y,children:[Object(m.jsx)("div",{className:"program active",children:Object(m.jsx)("a",{href:"javascript:void(0)",onClick:this.selectProgram,className:"active",children:Object(m.jsx)("img",{src:"images/icon-1.png",alt:"Programme"})})}),Object(m.jsx)("div",{className:"favorite",children:Object(m.jsx)("a",{href:"javascript:void(0)",onClick:this.selectRun,children:Object(m.jsx)("img",{src:"images/play.png",alt:"Programme"})})}),Object(m.jsx)("div",{className:"mobile-control",children:Object(m.jsx)("a",{href:"#",children:Object(m.jsx)("img",{src:"images/setting.png",alt:"settings",onClick:this.showSettings})})})]})}),c&&!r?Object(m.jsx)("div",{className:"baumwolee",children:Object(m.jsx)("div",{className:"baumwolee-main",children:Object(m.jsx)("div",{className:"baumwolee-icon baumwolee-temp",children:Object(m.jsxs)("a",{href:"javascript:void(0)",className:"active",onClick:this.showLanguage,children:[Object(m.jsx)("img",{src:"images/baumwolee.png"}),Object(m.jsx)("p",{children:"Language"}),Object(m.jsx)("p",{className:"std",children:"\xa0"})]})})})}):"",r?Object(m.jsx)("div",{className:"baumwolee",children:Object(m.jsxs)("div",{className:"baumwolee-main",children:[Object(m.jsx)("div",{className:"baumwolee-icon baumwolee-temp",children:Object(m.jsxs)("a",{href:"javascript:void(0)",className:"en"==T?"active":"",onClick:function(){return e.changeLanguage("en")},children:[Object(m.jsx)("img",{src:"images/baumwolee.png"}),Object(m.jsx)("p",{children:"English"}),Object(m.jsx)("p",{className:"std",children:"\xa0"})]})}),Object(m.jsx)("div",{className:"baumwolee-icon baumwolee-temp",children:Object(m.jsxs)("a",{href:"javascript:void(0)",className:"es"==T?"active":"",onClick:function(){return e.changeLanguage("es")},children:[Object(m.jsx)("img",{src:"images/baumwolee.png"}),Object(m.jsx)("p",{children:"German"}),Object(m.jsx)("p",{className:"std",children:"\xa0"})]})})]})}):"",x?Object(m.jsx)("div",{className:"carouselslide quick-wash temparature",children:Object(m.jsx)(d.a,{options:k,events:y,children:g.map((function(t,a){return Object(m.jsx)("div",{className:"program",children:Object(m.jsx)("a",{href:"javascript:void(0)",onClick:function(){return e.updateTemparature(t)},className:"speed ".concat(t==b.temparature?"active":""),children:t})})}))})}):"",w?Object(m.jsx)("div",{className:"carouselslide quick-wash speedlimit",children:Object(m.jsx)(d.a,{options:k,events:y,children:O.map((function(t,a){return Object(m.jsx)("div",{className:"program",children:Object(m.jsx)("a",{href:"javascript:void(0)",onClick:function(){return e.updateSpeed(t)},className:"speed ".concat(t==b.speed?"active":""),children:t})})}))})}):"",i&&!o&&!x&!w?Object(m.jsx)("div",{className:"baumwolee",children:Object(m.jsxs)("div",{className:"baumwolee-main",children:[Object(m.jsx)("div",{className:"baumwolee-icon baumwolee-temp",children:Object(m.jsxs)("a",{href:"javascript:void(0)",className:"active",children:[Object(m.jsx)("img",{src:"images/baumwolee.png"}),Object(m.jsx)("p",{children:q(b.programName)}),Object(m.jsx)("p",{className:"std",children:"2.39 Std"})]})}),Object(m.jsxs)("div",{className:"Baumwolee-temparatur",children:[Object(m.jsx)("div",{className:"temparatur",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsxs)("a",{href:"javascript:void(0)",onClick:this.selectTemparature,children:[Object(m.jsx)("p",{className:"tem",children:"Temparatur"}),Object(m.jsxs)("p",{className:"",children:[b.temparature," c"]})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("a",{href:"javascript:void(0)",onClick:this.selectSpeed,children:[Object(m.jsx)("p",{className:"dreh",children:"Drehzahl"}),Object(m.jsxs)("p",{children:[b.speed," U/min"]})]})})]})}),Object(m.jsx)("div",{className:"extras-text",children:Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsxs)("a",{href:"javascript:void(0)",onClick:this.selectExtra,children:[Object(m.jsx)("p",{className:"extras",children:"Extras"}),Object(m.jsx)("p",{className:"extra-text",children:b.extras})]})})})})]})]})}):"",o?Object(m.jsx)("div",{className:"carouselslide quick-wash extras",children:Object(m.jsxs)(d.a,{options:N,events:y,children:[Object(m.jsx)("div",{className:"program ",children:Object(m.jsxs)("a",{href:"javascript:void(0)",onClick:function(){return e.updateExtras("Quick")},className:"program stopwatch ".concat("Quick"==b.extras?"active":""),children:[Object(m.jsx)("img",{src:"images/stopwatch.png",alt:"stopwatch"}),Object(m.jsx)("p",{children:"Quick"})]})}),Object(m.jsx)("div",{className:"favorite",children:Object(m.jsxs)("a",{href:"javascript:void(0)",onClick:function(){return e.updateExtras("Single Wash")},className:"program single ".concat("Single Wash"==b.extras?"active":""),children:[Object(m.jsx)("img",{src:"images/single-wash.png",alt:"Programme"}),Object(m.jsx)("p",{children:"Single Wash"})]})}),Object(m.jsx)("div",{className:"mobile-control",children:Object(m.jsxs)("a",{href:"javascript:void(0)",onClick:function(){return e.updateExtras("Water+")},className:"program water ".concat("Water+"==b.extras?"active":""),children:[Object(m.jsx)("img",{src:"images/water.png",alt:"Programme"}),Object(m.jsx)("p",{children:"Water+"})]})})]})}):"",n||r?Object(m.jsx)("div",{className:"ok-button",children:Object(m.jsx)("a",{href:"javascript:void(0)",onClick:this.selectHome,children:"ok"})}):"",i&&!o&&!x&!w||o||x||w?Object(m.jsx)("div",{className:"ok-button",children:Object(m.jsx)("a",{href:"javascript:void(0)",onClick:this.selectProgramDetail,children:"ok"})}):""]}):""}),Object(m.jsx)("div",{className:"col-md-3",children:"\xa0"})]})})})]})}}]),a}(u.a.Component);t.a=Object(p.a)(["translation"])(T)},72:function(e,t,a){},81:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.53f58d13.chunk.js.map