(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),s=(a(14),a(1)),o=a(2),l=a(4),m=a(3),u=a(5),h=(a(15),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={weekDayNameCounter:0,monthNameCounter:0,dayOfTheMonth:"",year:1971,days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Janurary","Feburary","March","April","May","June","July","August","September","October","November","December"]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=new Date,t=e.getDay(),a=e.getDate(),n=e.getMonth(),r=e.getFullYear();this.setState({weekDayNameCounter:t,monthNameCounter:n,dayOfTheMonth:a,year:r})}},{key:"render",value:function(){return r.a.createElement("div",{className:"date-container"},r.a.createElement("p",null,this.state.days[this.state.weekDayNameCounter],","," ",this.state.months[this.state.monthNameCounter]," ",this.state.dayOfTheMonth,", ",this.state.year))}}]),t}(n.Component)),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={location:"",currentTemp:0,maxTemp:0,minTemp:0,description:""},a.roundTempDown=function(e){return Math.floor(e)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.props.userLon,a=this.props.userLat;fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(t,"&units=imperial&appid=").concat("645b8f7bda78cd5b6adaad3702d834e9")).then(function(e){return e.json()}).then(function(t){var a=e.roundTempDown(t.main.temp),n=e.roundTempDown(t.main.temp_min),r=e.roundTempDown(t.main.temp_max);e.setState({location:t.name,currentTemp:a,minTemp:n,maxTemp:r,description:t.weather[0].description})}).catch(function(e){console.log("there was an error",e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"weather-widget-container"},r.a.createElement("p",null,this.state.location," ",r.a.createElement("br",null),"Now: ",this.state.currentTemp,"\u2103 - ",this.state.description,r.a.createElement("br",null)," Min: ",""," ",this.state.minTemp,"\u2103 ","","Max: ","",this.state.maxTemp,"\u2103"))}}]),t}(n.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"main-title"},r.a.createElement("hr",{className:"hr"}),r.a.createElement("h1",null,"The Headliner"),r.a.createElement("hr",{className:"hr"})),r.a.createElement(h,{className:"date-counter"}),r.a.createElement(p,{className:"weather-widget",userLat:this.props.userLat,userLon:this.props.userLon}))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("svg",{className:"lds-spinner",width:"200px",height:"200px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},r.a.createElement("g",{transform:"rotate(0 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"-0.5499999999999999s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(30 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"-0.5s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(60 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"-0.44999999999999996s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(90 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"-0.39999999999999997s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(120 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"-0.35000000000000003s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(150 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"-0.3s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(180 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"-0.25s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(210 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"-0.19999999999999998s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(240 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"-0.15s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(270 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"-0.09999999999999999s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(300 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"-0.049999999999999996s",repeatCount:"indefinite"}))),r.a.createElement("g",{transform:"rotate(330 50 50)"},r.a.createElement("rect",{x:"47",y:"24",rx:"9.4",ry:"4.8",width:"6",height:"12",fill:"#1d0e0b"},r.a.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"0.6s",begin:"0s",repeatCount:"indefinite"}))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={article:void 0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props!==e&&this.setState({article:this.props.mainArticle})}},{key:"render",value:function(){return void 0===this.state.article?r.a.createElement("div",{className:"loading-container"},r.a.createElement(f,null)):this.state.article.map(function(e,t){return r.a.createElement("article",{key:t,className:"main-article-container"},r.a.createElement("h2",null,e.title),r.a.createElement("img",{className:"main-article-img",src:e.urlToImage,alt:"articleimage"}),r.a.createElement("p",{className:"main-article-description"}," ",e.description),r.a.createElement("a",{href:e.url,rel:"noopener noreferrer ",target:"_blank"},"Read more here..."))})}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={article:void 0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props!==e&&this.setState({article:this.props.subArticle})}},{key:"render",value:function(){return void 0===this.state.article?r.a.createElement("div",{className:"loading-container"}):this.state.article.map(function(e,t){return r.a.createElement("article",{key:t,className:"sub-article-container"},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("a",{href:e.url,rel:"noopener noreferrer ",target:"_blank"},"Read more here..."))})}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={article:void 0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props!==e&&this.setState({article:this.props.sideArticle})}},{key:"render",value:function(){return void 0===this.state.article?r.a.createElement("div",{className:"loading-container"}):this.state.article.map(function(e,t){return r.a.createElement("article",{key:t,className:"side-article-container"},r.a.createElement("h3",null,e.title),r.a.createElement("img",{className:"side-article-img",src:e.urlToImage,alt:"articleimage"}),r.a.createElement("p",null,e.description),r.a.createElement("a",{href:e.url,rel:"noopener noreferrer ",target:"_blank"},"Read more here..."))})}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement(h,null),r.a.createElement("h4",null,"The Headliner"),r.a.createElement("a",{href:"#top"},"Back To Top"))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={userLat:0,userLon:0,articles:[],subArticles:[],sideArticles:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="272aff454dc34852acfba922ddc343be";setTimeout(function(){navigator.geolocation.getCurrentPosition(function(t){e.setState({userLat:t.coords.latitude,userLon:t.coords.longitude})},function(e){alert("Sorry, we can't give you your weather without your location")})},1e3),fetch("https://newsapi.org/v2/top-headlines?pageSize=5&country=us&apiKey=".concat(t)).then(function(e){return e.json()}).then(function(t){e.setState({articles:t.articles})}),fetch("https://newsapi.org/v2/top-headlines?category=science&pageSize=3&country=us&apiKey=".concat(t)).then(function(e){return e.json()}).then(function(t){e.setState({subArticles:t.articles})}),fetch("https://newsapi.org/v2/top-headlines?category=business&pageSize=6&country=us&apiKey=".concat(t)).then(function(e){return e.json()}).then(function(t){e.setState({sideArticles:t.articles})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{userLat:this.state.userLat,userLon:this.state.userLon,id:"top"}),r.a.createElement("div",{className:"main-content-wrapper"},r.a.createElement("main",{className:"main-articles"},r.a.createElement(y,{mainArticle:this.state.articles})),r.a.createElement("section",{className:"sub-articles"}," ",r.a.createElement(b,{subArticle:this.state.subArticles})," "),r.a.createElement("aside",{className:"side-articles"},r.a.createElement(g,{sideArticle:this.state.sideArticles}))),r.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.95ddf400.chunk.js.map