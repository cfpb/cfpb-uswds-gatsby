(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5cAn":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPjx0aXRsZT5pY29uLWRvdC1nb3Y8L3RpdGxlPjxwYXRoIGZpbGw9IiMyMzc4QzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMyIDBjMTcuNjczIDAgMzIgMTQuMzI3IDMyIDMyIDAgMTcuNjczLTE0LjMyNyAzMi0zMiAzMkMxNC4zMjcgNjQgMCA0OS42NzMgMCAzMiAwIDE0LjMyNyAxNC4zMjcgMCAzMiAwem0wIDEuMjA4QzE0Ljk5NCAxLjIwOCAxLjIwOCAxNC45OTQgMS4yMDggMzJTMTQuOTk0IDYyLjc5MiAzMiA2Mi43OTIgNjIuNzkyIDQ5LjAwNiA2Mi43OTIgMzIgNDkuMDA2IDEuMjA4IDMyIDEuMjA4em0xMC41OSAzOC44NThhLjg1Ny44NTcgMCAwIDEgLjg4Mi44MjJ2MS42NDJIMTguODg2di0xLjY0MmEuODU3Ljg1NyAwIDAgMSAuODgyLS44MjJINDIuNTl6TTI1LjQ0MyAyNy43NzR2OS44MjloMS42NDJ2LTkuODNoMy4yNzN2OS44M0gzMnYtOS44M2gzLjI3MnY5LjgzaDEuNjQzdi05LjgzaDMuMjcydjkuODNoLjc2YS44NTcuODU3IDAgMCAxIC44ODIuODIxdi44MjFoLTIxLjN2LS44MDlhLjg1Ny44NTcgMCAwIDEgLjg4LS44MmguNzYydi05Ljg0MmgzLjI3MnptNS43MzYtOC4xODhsMTIuMjkzIDQuOTE1djEuNjQyaC0xLjYzYS44NTcuODU3IDAgMCAxLS44ODIuODIySDIxLjQxYS44NTcuODU3IDAgMCAxLS44ODItLjgyMmgtMS42NDJ2LTEuNjQybDEyLjI5My00LjkxNXoiLz48L3N2Zz4="},"8+s/":function(e,t,n){"use strict";var a,r=n("q1tI"),i=(a=r)&&"object"==typeof a&&"default"in a?a.default:a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),m.canUseDOM?t(s):n&&(s=n(s))}var m=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return s},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(a,this.props)},r}(r.PureComponent);return o(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),o(m,"canUseDOM",c),m}}},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("CDj4"),c=n.n(o),s=n("5cAn"),l=n.n(s),u=n("DoED"),m=n.n(u),d=function(){return r.a.createElement("div",{className:"usa-banner"},r.a.createElement("div",{className:"usa-accordion"},r.a.createElement("header",{className:"usa-banner__header"},r.a.createElement("div",{className:"usa-banner__inner"},r.a.createElement("div",{className:"grid-col-auto"},r.a.createElement("img",{className:"usa-banner__header-flag",src:c.a,alt:"U.S. flag"})),r.a.createElement("div",{className:"grid-col-fill tablet:grid-col-auto"},r.a.createElement("p",{className:"usa-banner__header-text"},"An official website of the United States government"),r.a.createElement("p",{className:"usa-banner__header-action","aria-hidden":"true"},"Here’s how you know")),r.a.createElement("button",{"aria-controls":"gov-banner","aria-expanded":!1,className:"usa-accordion__button usa-banner__button"},r.a.createElement("span",{className:"usa-banner__button-text"},"Here's how you know")))),r.a.createElement("div",{id:"gov-banner",className:"usa-accordion__content usa-banner__content",hidden:!0},r.a.createElement("div",{className:"grid-row grid-gap-lg"},r.a.createElement("div",{className:"usa-banner__guidance-gov tablet:grid-col-6"},r.a.createElement("img",{className:"usa-banner__icon usa-media-block__img",src:l.a,alt:"Dot gov"}),r.a.createElement("div",{className:"usa-media-block__body"},r.a.createElement("p",null,r.a.createElement("strong",null,"The .gov means it’s official."),r.a.createElement("br",null),"Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you’re on a federal government site."))),r.a.createElement("div",{className:"usa-banner__guidance-ssl tablet:grid-col-6"},r.a.createElement("img",{className:"usa-banner__icon usa-media-block__img",src:m.a,alt:"Https"}),r.a.createElement("div",{className:"usa-media-block__body"},r.a.createElement("p",null,r.a.createElement("strong",null,"The site is secure."),r.a.createElement("br",null),"The ",r.a.createElement("strong",null,"https://")," ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely.")))))))},f=n("Rl9v"),p=n.n(f),g=function(){return r.a.createElement("footer",{className:"usa-footer site-footer",role:"contentinfo"},r.a.createElement("div",{className:"footer-section-bottom bg-base-lighter"},r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"grid-row padding-3"},r.a.createElement("div",{className:"tablet:grid-col"},r.a.createElement("div",{className:"logo-links"},r.a.createElement("a",{className:"footer-logo media_link",href:"https://18f.gsa.gov"},r.a.createElement("img",{src:p.a,width:"50",alt:"Agency logo"})))),r.a.createElement("div",{className:"tablet:grid-col"},r.a.createElement("ul",{className:"add-list-reset"},r.a.createElement("li",null,"FOIA"),r.a.createElement("li",null,"Privacy"),r.a.createElement("li",null,"Website Privacy Policy"))),r.a.createElement("div",{className:"tablet:grid-col"},r.a.createElement("ul",{className:"add-list-reset"},r.a.createElement("li",null,"Data"),r.a.createElement("li",null,"Open Government"),r.a.createElement("li",null,"Information Quality Guidelines")))))))},y=function(e){var t=e.children;e.siteTitle;return r.a.createElement("header",{className:"usa-header usa-header--extended",role:"banner"},r.a.createElement("div",{className:"usa-navbar"},r.a.createElement("div",{className:"usa-logo",id:"extended-logo"},r.a.createElement("em",{className:"usa-logo__text"},r.a.createElement(i.Link,{to:"/",title:"Home","aria-label":"Home"},r.a.createElement("img",{alt:"Consumer Financial Protection Bureau",height:"50",sizes:"(max-width: 900px) 161px, 237px",src:"https://www.consumerfinance.gov/static/img/logo_237x50@2x.png",width:"237"})))),r.a.createElement("button",{className:"usa-menu-btn"},"Menu")),t)};y.defaultProps={siteTitle:""};var A=y,h=n("dVxA"),b=n.n(h),M=(n("YwZP"),function(e){e.navigation,e.secondaryLinks;var t=Object(i.useStaticQuery)("1824138477").site,n=t.siteMetadata.searchgov;n.affiliate,n.endpoint,n.inline;return r.a.createElement("form",{className:"usa-search usa-search--small",role:"search"},r.a.createElement("label",{className:"usa-sr-only",for:"extended-search-field-en-small"},"Search"),r.a.createElement("input",{className:"usa-input",id:"extended-search-field-en-small",type:"search",name:"search"}),r.a.createElement("button",{className:"usa-button",type:"submit"},r.a.createElement("img",{src:"https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.app.cloud.gov/preview/uswds/uswds/develop/dist/img/usa-icons-bg/search--white.svg",className:"usa-search__submit-icon",alt:"Search"})))}),N=function(e){var t=e.navigation,n=e.secondaryLinks;return r.a.createElement("nav",{role:"navigation",className:"usa-nav"},r.a.createElement("div",{className:"usa-nav__inner"},r.a.createElement("button",{className:"usa-nav__close"},r.a.createElement("img",{src:b.a,alt:"close"})),r.a.createElement("ul",{className:"usa-accordion usa-nav__primary"},t.map((function(e,t){return r.a.createElement("li",{key:t,className:"usa-nav__primary-item"},e.items.length>1?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"usa-accordion__button usa-nav__link "+(0===t?"usa-current":""),"aria-controls":"extended-nav-section-"+t,"aria-expanded":!1},r.a.createElement("span",null,e.title)),r.a.createElement("ul",{id:"extended-nav-section-"+t,className:"usa-accordion__content usa-nav__submenu",hidden:!0},e.items.map((function(e,t){return r.a.createElement("li",{key:t,className:"usa-nav__submenu-item"},r.a.createElement(i.Link,{to:e.link},e.text))})))):r.a.createElement(i.Link,{className:"usa-nav__link",activeClassName:"usa-current",to:e.items[0].link},r.a.createElement("span",null,e.items[0].text)))}))),r.a.createElement("div",{className:"usa-nav__secondary"},r.a.createElement("ul",{className:"usa-nav__secondary-links"},n.map((function(e,t){return r.a.createElement("li",{key:t,className:"usa-nav__secondary-item"},r.a.createElement(i.Link,{to:e.link},e.text))}))),r.a.createElement(M,null))))};t.a=function(e){var t=e.children,n=Object(i.useStaticQuery)("561523179").site.siteMetadata,a=n.title,o=n.navigation,c=n.secondaryLinks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),r.a.createElement(d,null),r.a.createElement("div",{className:"usa-overlay"}),r.a.createElement(A,{siteTitle:a},r.a.createElement(N,{navigation:o,secondaryLinks:c})),t,r.a.createElement(g,null))}},CDj4:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAG1BMVEUdM7EeNLIeM7HgQCDaPh/bPh/bPx/////bPyBEby41AAAAUElEQVQI123MNw4CABDEwD3jC/9/MQ1BQrgeOSkIqYe2o2FZtthXgQLgbHVMZdlsfUQFQnHtjP1+8BUhBDKOqtmfot6ojqPzR7TjdU+f6vkED+IDPhTBcMAAAAAASUVORK5CYII="},DoED:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPjx0aXRsZT5pY29uLWh0dHBzPC90aXRsZT48cGF0aCBmaWxsPSIjNzE5RjJBIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiAwYzE3LjY3MyAwIDMyIDE0LjMyNyAzMiAzMiAwIDE3LjY3My0xNC4zMjcgMzItMzIgMzJDMTQuMzI3IDY0IDAgNDkuNjczIDAgMzIgMCAxNC4zMjcgMTQuMzI3IDAgMzIgMHptMCAxLjIwOEMxNC45OTQgMS4yMDggMS4yMDggMTQuOTk0IDEuMjA4IDMyUzE0Ljk5NCA2Mi43OTIgMzIgNjIuNzkyIDYyLjc5MiA0OS4wMDYgNjIuNzkyIDMyIDQ5LjAwNiAxLjIwOCAzMiAxLjIwOHptMCAxOC44ODZhNy4yNDUgNy4yNDUgMCAwIDEgNy4yNDUgNy4yNDV2My4xMDNoLjUyYy44NiAwIDEuNTU3LjY5OCAxLjU1NyAxLjU1OHY5LjMyMmMwIC44Ni0uNjk3IDEuNTU4LTEuNTU3IDEuNTU4aC0xNS41M2MtLjg2IDAtMS41NTctLjY5Ny0xLjU1Ny0xLjU1OFYzMmMwLS44Ni42OTctMS41NTggMS41NTctMS41NThoLjUyVjI3LjM0QTcuMjQ1IDcuMjQ1IDAgMCAxIDMyIDIwLjA5NHptMCAzLjEwM2E0LjE0MiA0LjE0MiAwIDAgMC00LjE0MiA0LjE0MnYzLjEwM2g4LjI4NFYyNy4zNEE0LjE0MiA0LjE0MiAwIDAgMCAzMiAyMy4xOTd6Ii8+PC9zdmc+"},Rl9v:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAwFBMVEX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Kz6mvAAAAQHRSTlMACi1ObIihuMvc6vT7/wM0Y4+64ylimc8xcbDuHGSpO4fSSpzsTKL3QZso5GXHOJ1n0CWR/Ue21QZ78BWNH5qk8DjDAgAAAq1JREFUeAHM1AOi7EAABdH7jLw7Zpyxbe5/Vd/+g6i75+yhCqHd3T88Pj2/vL69ax/80N7fXl+enx4f7u8gVyKZSmeyPC2bSaeSCciRyxeKvKZYyOcgWqmsG/TH0MsliGNatsEgDNsyIYTjegzOcx3ErlKtMZxatYJY1RtNhtds1BGbVltjNFq7hVh03C6j67odRJbo9RmPfi+BaAZDxmc4QBSjMeM0HiG0yXTGeM2mE4QzXzB+iznCSC0pwjKFwFbrDcXYrFcIZrujOLstgtgfKNJhHySjBsVq+I9qcqRoxwn82TcoXmMPP7YHynDY+ml6Rzl2PgpfU5Y1rkltKMsmhcvmS8qznF+OekGZFhcDn1KuKc4bzSjXbIRzBmPKNh7gtMSQ8g0TOKlHFXo4pdOnCv0OTnCphov/tbpUo9vCf9pUpY1/1TWqotXxjwbVaeBvlSbVaVbwlypVquJPTo0q1Rx/j5H/GtOjWp6JXyyqZuEXm6rZ+KlkUDWjhB/KVK+MH3Sqp+O7nEH1jBy+yfMW5PFNgbeggK8SRd6C4udm7oKAgRiIguiUcXvk32ttvHFwmGQ//KqWMViq1jFYq7Yx2Kr2Mdir0zEGx6nOo3Cuyyhc6joK17qNwq3uo3Cvxyg86jkKz3qNwqveo/Cuzyh86jsK3xoH6s5Q7wz1NVH/GeoPTK1N1KpN7WeonR62B6ZOB9S5iTpROmdtagpBzWeoyZU006OmndQcWJqQU9oBpapIehOlxFEapaTeUrq2pPhTXgjJJUL5ZyRnEeW5ktxolE9PcjBS3k7J9Sr5gSWnNOUhl9z1Uu5ASmRQWRUpxSPlm6Tkl5SJk9KCUo5SSphC2VsplSzltaEku5Txl9oPoF4IqDED6hKBWlag/hmpmcfvLPLbnPyeK6ABDOAPfVE3i9SerfUAAAAASUVORK5CYII="},bmMU:function(e,t){var n="undefined"!=typeof Element,a="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(!e(t[s],o[s]))return!1;return!0}if(a&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],o.get(s.value[0])))return!1;return!0}if(r&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(t[s]!==o[s])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],o[l[s]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},dVxA:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPjx0aXRsZT5jbG9zZTwvdGl0bGU+PHBhdGggZmlsbD0iIzU2NUM2NSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNTcuMDQyIDEuMTVsNS44MDkgNS44MDhhNCA0IDAgMCAxIDAgNS42NTdMNDMuNDY1IDMybDE5LjM4NiAxOS4zODVhNCA0IDAgMCAxIDAgNS42NTdsLTUuODA5IDUuODA5YTQgNCAwIDAgMS01LjY1NyAwTDMyIDQzLjQ2NSAxMi42MTUgNjIuODUxYTQgNCAwIDAgMS01LjY1NyAwbC01LjgwOS01LjgwOWE0IDQgMCAwIDEgMC01LjY1N0wyMC41MzUgMzIgMS4xNDkgMTIuNjE1YTQgNCAwIDAgMSAwLTUuNjU3bDUuODA5LTUuODA5YTQgNCAwIDAgMSA1LjY1NyAwTDMyIDIwLjUzNSA1MS4zODUgMS4xNDlhNCA0IDAgMCAxIDUuNjU3IDB6Ii8+PC9zdmc+"},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ge}));n("E9XD");var a,r,i,o,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),m=n("bmMU"),d=n.n(m),f=n("q1tI"),p=n.n(f),g=n("YVoz"),y=n.n(g),A="bodyAttributes",h="htmlAttributes",b="titleAttributes",M={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},N=(Object.keys(M).map((function(e){return M[e]})),"charset"),v="cssText",E="href",T="http-equiv",I="innerHTML",j="itemprop",w="name",D="property",S="rel",O="src",C="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",z="defer",k="encodeSpecialCharacters",P="onChangeClientState",_="titleTemplate",U=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),Y=[M.NOSCRIPT,M.SCRIPT,M.STYLE],Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Z=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=X(e,M.TITLE),n=X(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var a=X(e,x);return t||a||void 0},K=function(e){return X(e,P)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},F=function(e,t){return t.filter((function(e){return void 0!==e[M.BASE]})).map((function(e){return e[M.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var a=Object.keys(n),r=0;r<a.length;r++){var i=a[r].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+Q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||n===S&&"canonical"===e[n].toLowerCase()||s===S&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==I&&c!==v&&c!==j||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),o=0;o<i.length;o++){var c=i[o],s=y()({},a[c],r[c]);a[c]=s}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var a=e[n];if(a.hasOwnProperty(t))return a[t]}return null},$=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ie=function(e,t){var n=e.baseTag,a=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,m=e.title,d=e.titleAttributes;se(M.BODY,a),se(M.HTML,r),ce(m,d);var f={baseTag:le(M.BASE,n),linkTags:le(M.LINK,i),metaTags:le(M.META,o),noscriptTags:le(M.NOSCRIPT,c),scriptTags:le(M.SCRIPT,l),styleTags:le(M.STYLE,u)},p={},g={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,a=t.oldTags;n.length&&(p[e]=n),a.length&&(g[e]=f[e].oldTags)})),t&&t(),s(e,p,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(M.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var a=n.getAttribute("data-react-helmet"),r=a?a.split(","):[],i=[].concat(r),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===r.indexOf(s)&&r.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)n.removeAttribute(i[m]);r.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(M.HEAD),a=n.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(a),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===I)n.innerHTML=t.innerHTML;else if(a===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[a]?"":t[a];n.setAttribute(a,c)}n.setAttribute("data-react-helmet","true"),r.some((function(e,t){return o=t,n.isEqualNode(e)}))?r.splice(o,1):i.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var a=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+a:a}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case M.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})["data-react-helmet"]=!0,r=me(n,a),[p.a.createElement(M.TITLE,r,e)];var e,n,a,r},toString:function(){return function(e,t,n,a){var r=ue(n),i=oe(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+q(i,a)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(i,a)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case A:case h:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,r=((a={key:n})["data-react-helmet"]=!0,a);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===I||n===v){var a=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:a}}else r[n]=t[e]})),p.a.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,a){var r=Object.keys(a).filter((function(e){return!(e===I||e===v)})).reduce((function(e,t){var r=void 0===a[t]?t:t+'="'+q(a[t],n)+'"';return e?e+" "+r:r}),""),i=a.innerHTML||a.cssText||"",o=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,a=e.encode,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,m=void 0===u?"":u,d=e.titleAttributes;return{base:de(M.BASE,t,a),bodyAttributes:de(A,n,a),htmlAttributes:de(h,r,a),link:de(M.LINK,i,a),meta:de(M.META,o,a),noscript:de(M.NOSCRIPT,c,a),script:de(M.SCRIPT,s,a),style:de(M.STYLE,l,a),title:de(M.TITLE,{title:m,titleAttributes:d},a)}},pe=u()((function(e){return{baseTag:F([E,C],e),bodyAttributes:W(A,e),defer:X(e,z),encode:X(e,k),htmlAttributes:W(h,e),linkTags:J(M.LINK,[S,E],e),metaTags:J(M.META,[w,N,T,D,j],e),noscriptTags:J(M.NOSCRIPT,[I],e),onChangeClientState:K(e),scriptTags:J(M.SCRIPT,[O,I],e),styleTags:J(M.STYLE,[v],e),title:G(e),titleAttributes:W(b,e)}}),(function(e){re&&ne(re),e.defer?re=te((function(){ie(e,(function(){re=null}))})):(ie(e),re=null)}),fe)((function(){return null})),ge=(r=pe,o=i=function(e){function t(){return B(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case M.SCRIPT:case M.NOSCRIPT:return{innerHTML:t};case M.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return H({},a,((t={})[n.type]=[].concat(a[n.type]||[],[H({},r,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,r=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(a.type){case M.TITLE:return H({},r,((t={})[a.type]=o,t.titleAttributes=H({},i),t));case M.BODY:return H({},r,{bodyAttributes:H({},i)});case M.HTML:return H({},r,{htmlAttributes:H({},i)})}return H({},r,((n={})[a.type]=H({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var a;n=H({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(Z(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case M.LINK:case M.META:case M.NOSCRIPT:case M.SCRIPT:case M.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Z(e,["children"]),a=H({},n);return t&&(a=this.mapChildrenToProps(t,a)),p.a.createElement(r,a)},R(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(p.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=r.peek,i.rewind=function(){var e=r.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ge.renderStatic=ge.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("qhky"),o=n("Wbzz");function c(e){var t=e.description,n=e.lang,a=e.meta,c=e.title,s=Object(o.useStaticQuery)("63159454").site,l=t||s.siteMetadata.description;return r.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=688f0d9e45f9e3190372ff248e52f2f935f435af-349280ebe4fa4ebc6fcc.js.map