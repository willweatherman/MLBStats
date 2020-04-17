(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{14:function(e,t,a){},31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},37:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),s=(a(36),a(24)),l=a(25),o=a(30),m=a(28),u=(a(37),a(5)),p=a(9),d=a(3),f=a(17);var E=Object(f.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_MLB_STATS":return Object(d.a)({},e,{mlb_stats:[]});case"ADD_MLB_STATS":return Object(d.a)({},e,{mlb_stats:e.mlb_stats.concat(t.state.mlb_stats)});case"CHANGE_SORT":return Object(d.a)({},e,{sort_name:t.sort_name});case"CHANGE_LIST":return Object(d.a)({},e,{current_list:t.text});case"UPDATE_AVG":return 0===e.form_wins?Object(d.a)({},e,{form_vg:0}):Object(d.a)({},e,{form_avg:(e.form_wins/(e.form_wins+e.form_losses)).toFixed(3)});case"UPDATE_SEARCH_BAR":return Object(d.a)({},e,{search_bar:t.text});case"UPDATE_SEARCH_SECTION":return Object(d.a)({},e,{search_section:t.text});case"UPDATE_FILTER_BAR":return Object(d.a)({},e,{filter_bar:t.text});case"UPDATE_FILTER_SECTION":return Object(d.a)({},e,{filter_section:t.text});case"UPDATE_WINS":return Object(d.a)({},e,{form_wins:t.text});case"UPDATE_LOSSES":return Object(d.a)({},e,{form_losses:t.text});case"UPDATE_OPPERATOR":return Object(d.a)({},e,{operator:t.text});default:return e}}),{mlb_stats:[],filter_bar:"",filter_section:"wins",operator:">",search_bar:"",search_section:"city",sort_name:"city",current_list:"Standings",form_avg:0,form_wins:0,form_losses:0},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());function v(e,t){E.dispatch({type:"CHANGE_LIST",text:e}),E.dispatch({type:"UPDATE_FILTER_SECTION",text:Object.entries(t[0].stats[e.toLowerCase()])[0][0]})}a(14);var h=a(6),b=a.n(h),N=a(10),g=a(29);function y(e,t){return e===t?[e]:[e].concat(Object(g.a)(y(e+1,t)))}function _(){return S.apply(this,arguments)}function S(){return(S=Object(N.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.dispatch({type:"CLEAR_MLB_STATS"});case 2:return e.abrupt("return",fetch("/Teams").then((function(e){return e.json()})).then((function(e){var t=y(0,parseInt(e.page.totalPages));return Promise.all(t.map((function(e){return T(e)})))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return C.apply(this,arguments)}function C(){return(C=Object(N.a)(b.a.mark((function e(){var t,a=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.abrupt("return",fetch("/Teams?page="+t).then((function(e){return e.json()})).then((function(e){return E.dispatch({type:"ADD_MLB_STATS",state:e._embedded})})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(N.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("/Teams",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:_();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return A.apply(this,arguments)}function A(){return(A=Object(N.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"DELETE",headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:_();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return Math.random()}function k(e,t){if(null==e)return{stats:[],info:[]};var a=[],n=[];Object.entries(e[0].team).map((function(e){return a=a.concat(e[0])}));var r=t.toLowerCase();return Object.entries(e[0].stats[r]).map((function(e){return a=a.concat(e[0])})),e.map((function(e){var t={};return Object.entries(e.team).map((function(e){return t[e[0]]=e[1]})),Object.entries(e.stats[r]).map((function(e){return t[e[0]]=e[1]})),n=n.concat(t)})),{stats:a,info:n}}function x(){return(x=Object(N.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(a._links.self.href.replace("http://localhost:9000",""));case 2:alert("Deleted Team "+a.team.name);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=Object(u.b)((function(e){return{}}),{})((function(e){var t=1;return r.a.createElement("div",{className:"Column"},e.sortedStats.length>0?r.a.createElement("button",{disabled:!0,className:"contentButton"},"Delete Team"):null,e.sortedStats.map((function(e){return t++,r.a.createElement("div",{key:I(),className:"TrashCans Field",style:t%2===0?{backgroundColor:"gray"}:{}},r.a.createElement("i",{onClick:function(t){!function(e,t){x.apply(this,arguments)}(t,e)},className:"Clickable fa fa-trash fa-2x"}))})))}));var L=Object(u.b)((function(e){return{}}),{})((function(e){return r.a.createElement("div",{className:"ColumnContainer"},e.sortedStats.length>0?k(e.sortedStats,e.currentList).stats.map((function(t){var a=1;return r.a.createElement("div",{key:I(),className:"Column"},r.a.createElement("button",{onClick:function(){!function(e){E.dispatch({type:"CHANGE_SORT",sort_name:e})}(t)},className:"contentButton "+(e.sortName===t?"active":"")},t),k(e.sortedStats,e.currentList).info.map((function(e){return a++,r.a.createElement("div",{key:I(),className:"Field",style:a%2===0?{backgroundColor:"gray"}:{}},"officialLogoImageSrc"===t?r.a.createElement("img",{alt:"",className:"Image",src:e[t]}):e[t])})))})):r.a.createElement("div",{className:"EmptyList"},"You current filter/search has no results."),e.sortedStats.length>0?r.a.createElement(w,{sortedStats:e.sortedStats}):null)}));var F=Object(u.b)((function(e){return{}}),{})((function(e){return r.a.createElement("select",{onChange:function(e){var t;t=e.target.value,E.dispatch({type:"UPDATE_FILTER_SECTION",text:t})},className:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},e.mlbStats.length>0?function(e,t,a){var n=[];return Object.entries(e[0].stats[t.toLowerCase()]).map((function(e){return e[0]===a?n.unshift(r.a.createElement("option",{key:I(),value:e[0]},e[0])):n.push(r.a.createElement("option",{key:I(),value:e[0]},e[0]))})),n}(e.mlbStats,e.currentList,e.filterSection):null)}));var j=Object(u.b)((function(e){return{mlbStats:e.mlb_stats,searchBar:e.search_bar,searchSection:e.search_section,sortName:e.sort_name,filterBar:e.filter_bar,filterSection:e.filter_section,currentList:e.current_list,operator:e.operator}}),{})((function(e){var t,a,n,i=Object(p.f)(),c=function(e,t,a,n,r,i,c){return e===[]?e:(a=""===a||"0"===a?0:a.toString().replace(/^0+/,""),(e=e.filter((function(e){var n=e.stats[i.toLowerCase()][t];return">"===c?parseInt(n)>a:"="===c?parseInt(n)===a:parseInt(n)<a}))).filter((function(e){var t=new RegExp(r,"gi");return e.team[n.toLowerCase()].match(t)})))}(e.mlbStats,e.filterSection,e.filterBar,e.searchSection,e.searchBar,e.currentList,e.operator),s=(t=c,a=e.sortName,n=e.currentList,t===[]?t:t.sort((function(e,t){return"city"===a||"name"===a||"abbreviation"===a||"officialLogoImageSrc"===a?e.team[a].toLowerCase()>=t.team[a].toLowerCase()?1:-1:"Standings"===n?e.stats.standings[a]<=t.stats.standings[a]?1:-1:"Batting"===n?e.stats.batting[a]<=t.stats.batting[a]?1:-1:"Pitching"===n?e.stats.pitching[a]<=t.stats.pitching[a]?1:-1:"Fielding"===n?e.stats.fielding[a]<=t.stats.fielding[a]?1:-1:1})));return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"header"}),r.a.createElement("button",{onClick:function(){i.push("/CreateTeam")},className:"formButton"},"Create Team"),r.a.createElement("div",{className:"customContainer"},r.a.createElement("div",{className:"contentHeader"},r.a.createElement("button",{onClick:function(){v("Standings",e.mlbStats)},className:"contentButton "+("Standings"===e.currentList?"active":"")},"Over View"),r.a.createElement("button",{onClick:function(){v("Batting",e.mlbStats)},className:"contentButton "+("Batting"===e.currentList?"active":"")},"Batting"),r.a.createElement("button",{onClick:function(){v("Pitching",e.mlbStats)},className:"contentButton "+("Pitching"===e.currentList?"active":"")},"Pitching"),r.a.createElement("button",{onClick:function(){v("Fielding",e.mlbStats)},className:"contentButton "+("Fielding"===e.currentList?"active":"")},"Fielding")),r.a.createElement("div",{className:"contentFilter"},r.a.createElement("form",{className:"Filter"},r.a.createElement("div",{className:"mx-auto form-row align-items-center"},r.a.createElement("div",{className:"col-lg-12 my-4"},r.a.createElement("div",{className:"input-group mr-sm-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("select",{onChange:function(e){var t;t=e.target.value,E.dispatch({type:"UPDATE_SEARCH_SECTION",text:t})},className:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},r.a.createElement("option",{value:"city",defaultValue:!0},"City"),r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"abbreviation"},"Abbreviation")))),r.a.createElement("input",{onInput:function(e){!function(e){E.dispatch({type:"UPDATE_SEARCH_BAR",text:e.target.value})}(e)},type:"text",className:"form-control",id:"inlineFormInputGroupUsername"}))))),r.a.createElement("form",{className:"Filter"},r.a.createElement("div",{className:"mx-auto form-row align-items-center"},r.a.createElement("div",{className:"col-lg-12 my-4"},r.a.createElement("div",{className:"input-group mr-sm-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement(F,{mlbStats:e.mlbStats,currentList:e.currentList,filterSection:e.filterSection}))),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},r.a.createElement("select",{onChange:function(e){var t;t=e.target.value,E.dispatch({type:"UPDATE_OPPERATOR",text:t})},className:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},r.a.createElement("option",{value:">",defaultValue:!0},">"),r.a.createElement("option",{value:"="},"="),r.a.createElement("option",{value:"<"},"<")))),r.a.createElement("input",{onKeyPress:function(e){isNaN(e.key)&&e.preventDefault()},onInput:function(e){!function(e){E.dispatch({type:"UPDATE_FILTER_BAR",text:e.target.value})}(e)},type:"text",className:"form-control",id:"inlineFormInputGroupUsername",defaultValue:"0"})))))),r.a.createElement(L,{sortedStats:s,currentList:e.currentList,sortName:e.sortName})))}));a(44);function D(e,t){e.preventDefault();var a=["inputCity","inputName","inputAbbreviation","inputImgSrc","inputTAB","inputRuns","inputHits","inputARE","inputIPI","inputAH","inputIPL","inputTC","inputFTO"],n={};(a.map((function(e){var t=document.getElementById(e);return""===t.value?document.getElementById("invalid"+e).classList.remove("hidden"):n[e]=t.value})),Object.entries(n).length===a.length)&&(!function(e){O.apply(this,arguments)}({team:{city:n.inputCity,name:n.inputName,abbreviation:n.inputAbbreviation,officialLogoImageSrc:n.inputImgSrc},stats:{batting:{atBats:n.inputTAB,runs:n.inputRuns,hits:n.inputHits},pitching:{earnedRunAvg:n.inputARE,inningsPitched:n.inputIPI,hitsAllowed:n.inputAH},fielding:{inningsPlayed:n.inputIPL,totalChances:n.inputTC,fielderTagOuts:n.inputFTO},standings:{wins:1,losses:1,winPct:.5}}}),t.push("/"))}var B=Object(u.b)((function(e){return{mlbStats:e.mlb_stats,CurrentList:e.current_list,FormAvg:e.form_avg}}),{})((function(e){var t=Object(p.f)();return r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"header"}),r.a.createElement("button",{onClick:function(){t.push("/")},className:"formButton"},"Back"),r.a.createElement("div",{className:"customContainer"},r.a.createElement("div",{className:"contentFilter"}),r.a.createElement("form",{className:"space"},r.a.createElement("label",{htmlFor:"formGroupExampleInput",className:"sectionLabel"},"Team Info"),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"inputCity"},"City"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputCity"}),r.a.createElement("div",{id:"invalidinputCity",className:"invalid-feedback hidden"},"Please choose a City.")),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"inputState"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputName"}),r.a.createElement("div",{id:"invalidinputName",className:"invalid-feedback hidden"},"Please choose a Name.")),r.a.createElement("div",{className:"form-group col-md-2"},r.a.createElement("label",{htmlFor:"inputZip"},"Abbreviation"),r.a.createElement("input",{onKeyPress:function(e){e.target.value.length>2&&e.preventDefault()},type:"text",className:"form-control",id:"inputAbbreviation"}),r.a.createElement("div",{id:"invalidinputAbbreviation",className:"invalid-feedback hidden"},"Please choose a Abbreviation."))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label"},"Image Source"),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("input",{type:"text",className:"form-control",id:"inputImgSrc",placeholder:"http://example.com"}),r.a.createElement("div",{id:"invalidinputImgSrc",className:"invalid-feedback hidden"},"Please choose a Image Source."))),r.a.createElement("label",{htmlFor:"formGroupExampleInput",className:"sectionLabel"},"Batting"),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"inputCity"},"Times at Bat"),r.a.createElement("input",{onKeyPress:function(e){isNaN(e.key)&&e.preventDefault()},type:"text",className:"form-control",id:"inputTAB"}),r.a.createElement("div",{id:"invalidinputTAB",className:"invalid-feedback hidden"},"Please choose a Number of Times at Bat.")),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"inputState"},"Runs"),r.a.createElement("input",{onKeyPress:function(e){isNaN(e.key)&&e.preventDefault()},type:"text",className:"form-control",id:"inputRuns"}),r.a.createElement("div",{id:"invalidinputRuns",className:"invalid-feedback hidden"},"Please choose a Number of Runs.")),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"inputZip"},"Hits"),r.a.createElement("input",{onKeyPress:function(e){isNaN(e.key)&&e.preventDefault()},type:"text",className:"form-control",id:"inputHits"}),r.a.createElement("div",{id:"invalidinputHits",className:"invalid-feedback hidden"},"Please choose a Number of Hits."))),r.a.createElement("label",{htmlFor:"formGroupExampleInput",className:"sectionLabel"},"Pitching"),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"inputCity"},"Average Runs Earned"),r.a.createElement("input",{onKeyPress:function(e){isNaN(e.key)&&e.preventDefault()},type:"text",className:"form-control",id:"inputARE"}),r.a.createElement("div",{id:"invalidinputARE",className:"invalid-feedback hidden"},"Please choose a Number of Average Runs Earned.")),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"inputState"},"Innings Pitched"),r.a.createElement("input",{onKeyPress:function(e){isNaN(e.key)&&e.preventDefault()},type:"text",className:"form-control",id:"inputIPI"}),r.a.createElement("div",{id:"invalidinputIPI",className:"invalid-feedback hidden"},"Please choose a Number of Innings Pitched.")),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"inputZip"},"Allowed Hits"),r.a.createElement("input",{onKeyPress:function(e){isNaN(e.key)&&e.preventDefault()},type:"text",className:"form-control",id:"inputAH"}),r.a.createElement("div",{id:"invalidinputAH",className:"invalid-feedback hidden"},"Please choose a Number of Allowed Hits."))),r.a.createElement("label",{htmlFor:"formGroupExampleInput",className:"sectionLabel"},"Fieldings"),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"inputCity"},"Innings Played"),r.a.createElement("input",{onKeyPress:function(e){isNaN(e.key)&&e.preventDefault()},type:"text",className:"form-control",id:"inputIPL"}),r.a.createElement("div",{id:"invalidinputIPL",className:"invalid-feedback hidden"},"Please choose a Number of Innings Played.")),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"inputState"},"Total Chances"),r.a.createElement("input",{onKeyPress:function(e){isNaN(e.key)&&e.preventDefault()},type:"text",className:"form-control",id:"inputTC"}),r.a.createElement("div",{id:"invalidinputTC",className:"invalid-feedback hidden"},"Please choose a Number of Total Chances.")),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"inputZip"},"Fielder Tag Outs"),r.a.createElement("input",{onKeyPress:function(e){isNaN(e.key)&&e.preventDefault()},type:"text",className:"form-control",id:"inputFTO"}),r.a.createElement("div",{id:"invalidinputFTO",className:"invalid-feedback hidden"},"Please choose a Number of Fielder Tag Outs."))),r.a.createElement("button",{onClick:function(e){D(e,t)},type:"sumbit",className:"btn btn-primary"},"Create Team"))))})),R=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){return _()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/CreateTeam"},r.a.createElement(B,null)),r.a.createElement(p.a,{path:"/"},r.a.createElement(j,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(12);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}),r.a.createElement(u.a,{store:E},r.a.createElement(H.a,null,r.a.createElement(R,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.934e8429.chunk.js.map