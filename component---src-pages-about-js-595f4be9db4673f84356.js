(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(t,e,a){"use strict";a.r(e);var n=a(9),r=(a(0),a(163)),i=a(161);e.default=function(){return Object(n.b)(r.a,null,Object(n.b)(i.a,{title:"About",keywords:["gatsby","application","react"]}),Object(n.b)("h1",null,"About"),Object(n.b)("p",null,"You just hit a route that doesn't exist... the sadness."))}},156:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(9),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(36),l=a.n(c);a.d(e,"a",function(){return l.a});a(157);var u=i.a.createContext({}),d=function(t){return Object(n.b)(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(n.b)("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},157:function(t,e,a){var n;t.exports=(n=a(160))&&n.default||n},159:function(t){t.exports={data:{site:{siteMetadata:{title:"Egor Kurito"}}}}},160:function(t,e,a){"use strict";a.r(e);a(58);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(59),c=a(2),l=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},161:function(t,e,a){"use strict";var n=a(9),r=a(162),i=(a(0),a(4)),o=a.n(i),s=a(164),c=a.n(s);function l(t){var e=t.description,a=t.lang,i=t.meta,o=t.keywords,s=t.title,l=r.data.site,u=e||l.siteMetadata.description;return Object(n.b)(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l},162:function(t){t.exports={data:{site:{siteMetadata:{title:"Egor Kurito",description:"Just do it!",author:"@egorkurito"}}}}},163:function(t,e,a){"use strict";var n=a(158),r=a(9),i=a(159),o=a(0),s=a.n(o),c=a(4),l=a.n(c),u=a(156),d=Object(n.a)("div",{target:"e2i1wbd0"})({name:"k1grrt",styles:"max-width:860px;padding:1rem 1.0875rem;font-size:1.2rem;"}),b=Object(n.a)(u.a,{target:"e2i1wbd1"})({name:"1wj6arw",styles:'color:black;margin-left:15px;text-decoration:none;display:inline-block;position:relative;::after{content:"";position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:rgba(0,0,0,0.8);transform-origin:bottom right;transition:transform 0.4s cubic-bezier(0.86,0,0.07,1);}:hover::after{transform:scaleX(1);transform-origin:bottom left;}'}),p=Object(n.a)(b,{target:"e2i1wbd2"})({name:"qbubgm",styles:"margin-left:0;"}),g=Object(n.a)("header",{target:"e2i1wbd3"})({name:"1pyi7sa",styles:"background:transparent;display:flex;align-content:center;justify-content:center;"}),m=function(t){var e=t.siteTitle;return Object(r.b)(g,null,Object(r.b)(d,null,Object(r.b)("p",null,Object(r.b)(p,{to:"/"},e),Object(r.b)(b,{to:"/blog"},"Blog"),Object(r.b)(b,{to:"/about"},"About"))))};m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var f=m,y=(a(149),Object(n.a)("div",{target:"e1ehxxwc0"})({name:"1813l62",styles:"margin:0 auto;max-width:860px;padding:0 1.0875rem 1rem;padding-top:0;"})),j=Object(n.a)("footer",{target:"e1ehxxwc1"})({name:"1l4w6pd",styles:"display:flex;justify-content:center;"}),w=function(t){var e=t.children;return Object(r.b)(u.b,{query:"755544856",render:function(t){return Object(r.b)(s.a.Fragment,null,Object(r.b)(f,{siteTitle:t.site.siteMetadata.title}),Object(r.b)(y,null,Object(r.b)("main",null,e),Object(r.b)(j,null,"© ",(new Date).getFullYear(),", Egor Kurito"," ")))},data:i})};w.propTypes={children:l.a.node.isRequired};e.a=w}}]);
//# sourceMappingURL=component---src-pages-about-js-595f4be9db4673f84356.js.map