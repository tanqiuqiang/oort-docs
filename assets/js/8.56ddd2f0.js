(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{313:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));a(26),a(98),a(167),a(97),a(168),a(68),a(45),a(311),a(69),a(314),a(99);var n=/#.*$/,r=/\.(md|html)$/,i=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(n,"").replace(r,"")}function c(t){return s.test(t)}function u(t){if(c(t))return t;var e=t.match(n),a=e?e[0]:"",r=o(t);return i.test(r)?t:r+".html"+a}function h(t,e,a){if(c(e))return{type:"external",path:e};a&&(e=function(t,e,a){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var r=e.split("/");a&&r[r.length-1]||r.pop();for(var i=t.replace(/^\//,"").split("/"),s=0;s<i.length;s++){var o=i[s];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,a));for(var n=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===n)return Object.assign({},t[r],{type:"page",path:u(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function l(t,e,a,n){var r=a.pages,i=a.themeConfig,s=n&&i.locales&&i.locales[n]||i;if("auto"===(t.frontmatter.sidebar||s.sidebar||i.sidebar))return function(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=s.sidebar||i.sidebar;if(o){var c=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var a in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(a)))return{base:a,config:e[a]};var n;return{}}(e,o),u=c.base,l=c.config;return l?l.map((function(t){return function t(e,a,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return h(a,e,n);if(Array.isArray(e))return Object.assign(h(a,e[0],n),{title:e[1]});var i=e.children||[];return 0===i.length&&e.path?Object.assign(h(a,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:i.map((function(e){return t(e,a,n,r+1)})),collapsable:!1!==e.collapsable}}(t,r,u)})):[]}return[]}},334:function(t,e,a){},387:function(t,e,a){t.exports=a.p+"assets/img/docsindex.5529811b.png"},388:function(t,e,a){"use strict";var n=a(334);a.n(n).a},404:function(t,e,a){"use strict";a.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{width:"100%"},attrs:{src:a(387)}})])}],r=a(316),i=a(315),s=a(313),o={name:"docsIndexLayout",components:{Navbar:r.a,NavLink:i.a},data:function(){return{isSidebarOpen:!1}},computed:{data:function(){return this.$page.frontmatter},shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(s.a)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=(a(388),a(25)),u=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"self_page"},[a("div",{staticClass:"theme-container self-cont",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"home"},[t._m(0),t._v(" "),a("div",{staticStyle:{"max-width":"1000px",margin:"0 auto","min-height":"50vh"}},[a("div",{staticClass:"features"},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"features_item",on:{click:function(a){return t.$router.push(e.actionLink)}}},[a("span",[t._v(t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(e.details))])])})),0)]),t._v(" "),a("div",{staticStyle:{"max-width":"1000px",margin:"0 auto"}},[a("Content")],1)])],1)])}),n,!1,null,"32dfc30c",null);e.default=u.exports}}]);