(function(e,r){"object"===typeof exports&&"undefined"!==typeof module?module.exports=r():"function"===typeof define&&define.amd?define(r):(e=e||self,e.Obsolete=r())})(this,function(){"use strict";function e(e,r){return r={exports:{}},e(r,r.exports),r.exports}var r=e(function(e){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)}),n=e(function(e){var r=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=r)}),t=(n.version,function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}),o=function(e,r,n){if(t(e),void 0===r)return e;switch(n){case 1:return function(n){return e.call(r,n)};case 2:return function(n,t){return e.call(r,n,t)};case 3:return function(n,t,o){return e.call(r,n,t,o)}}return function(){return e.apply(r,arguments)}},i=function(e){return"object"===typeof e?null!==e:"function"===typeof e},a=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e},c=function(e){try{return!!e()}catch(e){return!0}},s=!c(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),u=r.document,l=i(u)&&i(u.createElement),f=function(e){return l?u.createElement(e):{}},m=!s&&!c(function(){return 7!=Object.defineProperty(f("div"),"a",{get:function(){return 7}}).a}),d=function(e,r){if(!i(e))return e;var n,t;if(r&&"function"==typeof(n=e.toString)&&!i(t=n.call(e)))return t;if("function"==typeof(n=e.valueOf)&&!i(t=n.call(e)))return t;if(!r&&"function"==typeof(n=e.toString)&&!i(t=n.call(e)))return t;throw TypeError("Can't convert object to primitive value")},h=Object.defineProperty,p=s?Object.defineProperty:function(e,r,n){if(a(e),r=d(r,!0),a(n),m)try{return h(e,r,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[r]=n.value),e},w={f:p},b=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}},v=s?function(e,r,n){return w.f(e,r,b(1,n))}:function(e,r,n){return e[r]=n,e},y={}.hasOwnProperty,g=function(e,r){return y.call(e,r)},E="prototype",j=function(e,t,i){var a,c,s,u=e&j.F,l=e&j.G,f=e&j.S,m=e&j.P,d=e&j.B,h=e&j.W,p=l?n:n[t]||(n[t]={}),w=p[E],b=l?r:f?r[t]:(r[t]||{})[E];for(a in l&&(i=t),i)c=!u&&b&&void 0!==b[a],c&&g(p,a)||(s=c?b[a]:i[a],p[a]=l&&"function"!=typeof b[a]?i[a]:d&&c?o(s,r):h&&b[a]==s?function(e){var r=function(r,n,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,t)}return e.apply(this,arguments)};return r[E]=e[E],r}(s):m&&"function"==typeof s?o(Function.call,s):s,m&&((p.virtual||(p.virtual={}))[a]=s,e&j.R&&w&&!w[a]&&v(w,a,s)))};j.F=1,j.G=2,j.S=4,j.P=8,j.B=16,j.W=32,j.U=64,j.R=128;var O=j,T={}.toString,x=function(e){return T.call(e).slice(8,-1)},C=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==x(e)?e.split(""):Object(e)},P=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e},N=function(e){return C(P(e))},_=Math.ceil,M=Math.floor,S=function(e){return isNaN(e=+e)?0:(e>0?M:_)(e)},k=Math.min,B=function(e){return e>0?k(S(e),9007199254740991):0},A=Math.max,F=Math.min,L=function(e,r){return e=S(e),e<0?A(e+r,0):F(e,r)},I=function(e){return function(r,n,t){var o,i=N(r),a=B(i.length),c=L(t,a);if(e&&n!=n){while(a>c)if(o=i[c++],o!=o)return!0}else for(;a>c;c++)if((e||c in i)&&i[c]===n)return e||c||0;return!e&&-1}},D=!0,V=e(function(e){var t="__core-js_shared__",o=r[t]||(r[t]={});(e.exports=function(e,r){return o[e]||(o[e]=void 0!==r?r:{})})("versions",[]).push({version:n.version,mode:D?"pure":"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"})}),q=0,R=Math.random(),G=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++q+R).toString(36))},z=V("keys"),H=function(e){return z[e]||(z[e]=G(e))},Q=I(!1),U=H("IE_PROTO"),W=function(e,r){var n,t=N(e),o=0,i=[];for(n in t)n!=U&&g(t,n)&&i.push(n);while(r.length>o)g(t,n=r[o++])&&(~Q(i,n)||i.push(n));return i},J="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Y=Object.keys||function(e){return W(e,J)},$=Object.getOwnPropertySymbols,K={f:$},X={}.propertyIsEnumerable,Z={f:X},ee=function(e){return Object(P(e))},re=Object.assign,ne=!re||c(function(){var e={},r={},n=Symbol(),t="abcdefghijklmnopqrst";return e[n]=7,t.split("").forEach(function(e){r[e]=e}),7!=re({},e)[n]||Object.keys(re({},r)).join("")!=t})?function(e,r){var n=ee(e),t=arguments.length,o=1,i=K.f,a=Z.f;while(t>o){var c,s=C(arguments[o++]),u=i?Y(s).concat(i(s)):Y(s),l=u.length,f=0;while(l>f)a.call(s,c=u[f++])&&(n[c]=s[c])}return n}:re;O(O.S+O.F,"Object",{assign:ne});var te=n.Object.assign,oe=te,ie=e(function(e){function r(){return e.exports=r=oe||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r.apply(this,arguments)}e.exports=r});O(O.S+O.F*!s,"Object",{defineProperty:w.f});var ae=n.Object,ce=function(e,r,n){return ae.defineProperty(e,r,n)},se=ce;function ue(e,r,n){return r in e?se(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var le=ue,fe=function(e,r,n){this.name=e,this.version=r,this.primaryVersion=n},me=Object.prototype.hasOwnProperty,de=Object.prototype.toString;function he(e,r,n){if("[object Array]"!==de.call(e))throw new TypeError("Parameter `arr` is not an array.");if("[object Function]"!==de.call(r))throw new TypeError("Parameter `callback` is not an array.");for(var t in e)r.call(n,e[t],t,e)}function pe(e,r,n){if("[object Array]"!==de.call(e))throw new TypeError("Parameter `arr` is not an array.");if("[object Function]"!==de.call(r))throw new TypeError("Parameter `callback` is not an array.");var t=new Array(e.length);for(var o in e){var i=r.call(n,e[o],o,e);t[o]=i}return t}function we(e,r,n){if("[object Array]"!==de.call(e))throw new TypeError("Parameter `arr` is not an array.");if("[object Function]"!==de.call(r))throw new TypeError("Parameter `callback` is not an array.");var t=[];for(var o in e)r.call(n,e[o],o,e)&&t.push(e[o]);return t}function be(e,r,n){if("[object Array]"!==de.call(e))throw new TypeError("Parameter `arr` is not an array.");if("[object Function]"!==de.call(r))throw new TypeError("Parameter `callback` is not an array.");for(var t in e)if(r.call(n,e[t],t,e))return!0;return!1}function ve(e,r,n){if(void 0===n&&(n=0),"[object Array]"!==de.call(e))throw new TypeError("Parameter `arr` is not an array.");for(var t=n;t<e.length;t++)if(e[t]===r)return!0;return!1}function ye(e){if(!ve(["[object Object]","[object Function]"],de.call(e)))throw new TypeError("Parameter `obj` is not a object.");var r=[];for(var n in e)me.call(e,n)&&r.push(n);return r}function ge(e){if(!ve(["[object Object]","[object Function]"],de.call(e)))throw new TypeError("Parameter `obj` is not a object.");var r=[];for(var n in e)me.call(e,n)&&r.push(e[n]);return r}function Ee(e){if(!ve(["[object Object]","[object Function]"],de.call(e)))throw new TypeError("Parameter `obj` is not a object.");var r=ye(e),n=new Array(r.length);for(var t in r)n[t]=[r[t],e[r[t]]];return n}function je(e,r){for(var n=arguments.length,t=new Array(n>2?n-2:0),o=2;o<n;o++)t[o-2]=arguments[o];if("[object Function]"!==de.call(e))throw new TypeError("Parameter `func` is not a function.");return function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return e.apply(r,[].concat(t,o))}}var Oe=function(){function e(){this.rBrowserMap={ie:{includes:[/Trident\/[.\w]+.+?rv:((\d+)[.\w]*)/i,/MSIE ((\d+\.\d+)[.\w]*)/i],excludes:[/Mobile/i]},edge:{includes:[/Edge\/((\d+)[.\w]*)/i],excludes:[/Mobile/i]},chrome:{includes:[/Chrome\/((\d+)[.\w]*)/i],excludes:[/Mobile/i]},safari:{includes:[/Version\/((\d+\.\d+)[.\w]*).+Safari/i],excludes:[/Mobile/i]},firefox:{includes:[/Firefox\/((\d+\.\d+)[.\w]*)/i],excludes:[/Mobile/i]},opera:{includes:[/OPR\/((\d+)[.\w]*)/i,/Presto\/[.\w]+.+Version\/((\d+\.\d)[.\w]*)/i,/Opera\/((\d+\.\d)[.\w]*)/i],excludes:[/Mobile|Mobi|Tablet/i]},android:[/wv.+?Chrome\/((\d+)[.\w]*)/i],ios_saf:[/(iPad|iPhone).+OS ((\d+_\d+)\w*)/i],and_chr:{includes:[/Chrome\/((\d+)[.\w]*).+Mobile/i],excludes:[/wv/i]}}}var r=e.prototype;return r.parse=function(e){var r=[];return he(Ee(this.rBrowserMap),function(n){var t,o=n[0],i=n[1];if(!i.excludes||!be(i.excludes,function(r){return r.exec(e)}))for(var a in"[object Array]"!==Object.prototype.toString.call(i)&&(i=i.includes),i)if(t=i[a].exec(e),t){r.push(new fe(o,t[1].replace(/_/g,"."),t[2].replace(/_/g,".")));break}}),r},e}();function Te(e){var r=/^(\d+)(\.\d+)*$/;if(!r.test(e))throw new Error("Parameter `version` `"+e+"` isn't a semantic version.")}function xe(e,r){var n=/\d+/g,t=/\d+/g;he([e,r],function(e){Te(e)});while(1){var o=n.exec(e),i=t.exec(r);if(o&&!i)return 0===Number(o[0])?xe.EQ:xe.GT;if(!o&&i)return 0===Number(i[0])?xe.EQ:xe.LT;if(o&&i){if(Number(o[0])>Number(i[0]))return xe.GT;if(Number(o[0])<Number(i[0]))return xe.LT}if(!o&&!i)return xe.EQ}}xe.GT=1,xe.EQ=0,xe.LT=-1;var Ce=function(){function e(){}var r=e.prototype;return r.detect=function(e,r,n,t){var o=(new Oe).parse(e);if(!o.length)return!t;var i=this.normalizeTargetBrowsers(r),a=we(i,function(e){return ve(pe(o,function(e){return e.name}),e.name)});return a.length?be(a,function(e){return be(o,function(r){return r.name===e.name&&xe(r.primaryVersion,e.primaryVersion)!==xe.LT})}):!n},r.normalizeTargetBrowsers=function(e){var r=this,n=/(\w+) (([\d.]+)(?:-[\d.]+)?)/,t=pe(e,function(e){var t=n.exec(r.mapAlias(e));return new fe(t[1],t[2],t[3])});return this.getLowestVersionBrowsers(t)},r.mapAlias=function(e){return{"op_mini all":"op_mini 0","safari TP":"safari 99"}[e]||e},r.getLowestVersionBrowsers=function(e){var r={};return he(e,function(e){r[e.name]?xe(e.primaryVersion,r[e.name].primaryVersion)===xe.LT&&(r[e.name]=e):r[e.name]=e}),ge(r)},e}(),Pe=function(){function e(){this.refs=[]}var r=e.prototype;return r.prompt=function(e,r){var n=document.createDocumentFragment(),t=this.createElement("div");t.innerHTML=e;while(1){var o=t.firstChild;if(!o)break;if(1===o.nodeType&&"SCRIPT"===o.nodeName){var i=this.createElement("script");i.innerHTML=o.innerHTML,n.appendChild(i),this.refs.push(i),t.removeChild(o)}else n.appendChild(o),this.refs.push(o)}this.bindEvents(n),"afterbegin"===r&&document.body.insertBefore(n,document.body.firstChild),"beforeend"===r&&document.body.appendChild(n)},r.bindEvents=function(e){var r;e.querySelector?r=e.querySelector("#obsoleteClose"):e.getElementById&&(r=e.getElementById("obsoleteClose")),r&&(r.addEventListener?r.addEventListener("click",je(this.handleClose,this)):r.attachEvent&&r.attachEvent("onclick",je(this.handleClose,this)))},r.handleClose=function(){he(this.refs,function(e){e.parentNode.removeChild(e)})},r.createElement=function(e,r){var n=document.createElement(e);return r&&he(Ee(r),function(e){var r=e[0],t=e[1];n.setAttribute(r,t)}),n},e}();O(O.S,"Date",{now:function(){return(new Date).getTime()}});var Ne=n.Date.now,_e=Ne;function Me(e,r){if(void 0===r&&(r={}),"requestIdleCallback"in window)window.requestIdleCallback(e,r);else{var n=(new Date).getTime();setTimeout(function(){var r=_e()-n;e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-r)}})},1)}}var Se=function(){function e(r){this.options=ie({},e.defaultOptions,r),this.detective=new Ce,this.alert=null}var r=e.prototype;return r.test=function(e,r){var n=this;if(!e.length)throw new Error("Parameter `browsers` is empty.");var t=this.detective.detect(navigator.userAgent,e,this.options.promptOnNonTargetBrowser,this.options.promptOnUnknownBrowser);return!!t||(Me(function(){n.alert?n.alert.handleClose():n.alert=new Pe,n.alert.prompt(n.options.template,n.options.position),r&&r()}),!1)},e}();return le(Se,"defaultOptions",{template:'<div>Your browser is not supported. <button id="obsoleteClose">&times;</button></div>',position:"afterbegin",promptOnNonTargetBrowser:!1,promptOnUnknownBrowser:!0}),Se}),function(){"use strict";new Obsolete({template:"<div style='display: inline-block;width: 100%;background: #feefae;color: rgb(97, 52, 0);text-align: center;font-family: Consolas, Menlo, Courier, monospace;padding: 8px 16px;box-shadow: rgba(0, 0, 0, 0.1) 0 4px 8px;' data-unsupported-browser='true'>\n  This site no longer supports this web browser. We design to support the current versions of\n  <a href='https://www.google.cn/chrome/'>Chrome</a>,\n  <a href='http://www.mozilla.org/firefox/'>Firefox</a>,\n  <a href='http://www.apple.com/safari/'>Safari</a>, and\n  <a href='https://www.microsoft.com/en-us/windows/microsoft-edge'>Microsoft Edge</a>.\n  <a id='obsoleteClose' style='float: right;padding: 0 10px;'>&#xD7;</a>\n</div>\n<script>\n  (function() {\n    var recycleBin = document.createDocumentFragment();\n    function removeNode(node) {\n      recycleBin.appendChild(node);\n    }\n    function forEach(nodes, cb) {\n      [].forEach.call([].slice.call(nodes), cb);\n    }\n    function createElement(tag, html) {\n      var node = document.createElement(tag);\n      node.innerHTML = html;\n      return node;\n    }\n    function closeBtn() {\n      return document.getElementById('obsoleteClose');\n    }\n    function getClassName(node) {\n      return node.getAttribute('class') || '';\n    }\n    function addClassName(node, className) {\n      node.setAttribute('class', getClassName(node) + ' ' + className);\n    }\n    function removeClassName(node, className) {\n      node.setAttribute('class', getClassName(node).replace(className, ''));\n    }\n    try {\n      // \u5b9a\u5236 body \u4e0b\u7684\u6837\u5f0f\n      var className = 'unsupported-browser';\n      addClassName(document.body, className);\n      var close = closeBtn();\n      close && close.addEventListener('click', function() {\n        removeClassName(document.body, className);\n      });\n\n      var config = JSON.parse(window.localStorage.getItem('APP_CONFIG'));\n      var options = config && config.obsolete;\n      if (options) {\n        if(close) {\n          close.dispatchEvent(new Event('click'));\n        } else {\n          forEach(document.querySelectorAll('[data-unsupported-browser]'), removeNode);\n        }\n\n        var fragment = document.createDocumentFragment();\n        var placeholderElement = createElement('div', options.template || '');\n        var refs = [];\n        forEach(placeholderElement.childNodes, function (node) {\n          if (node.nodeName === 'SCRIPT') {\n            node = createElement('script', node.innerHTML)\n          }\n          refs.push(node)\n          fragment.appendChild(node);\n        });\n        if (options.position === 'beforeend') {\n          document.body.appendChild(fragment);\n        } else {\n          document.body.insertBefore(fragment, document.body.firstChild);\n        }\n        close = closeBtn();\n        close && close.addEventListener('click', function() {\n          forEach(refs, removeNode);\n          removeClassName(document.body, className);\n        });\n      }\n      removeNode(document.currentScript);\n    } catch (e) {}\n  })();\n<\/script>\n",position:"afterbegin",promptOnNonTargetBrowser:!0,promptOnUnknownBrowser:!0}).test(["and_chr 85","and_ff 79","and_qq 10.4","and_uc 12.12","android 81","baidu 7.12","chrome 85","chrome 84","chrome 83","chrome 81","chrome 80","chrome 79","chrome 78","chrome 77","chrome 76","chrome 75","chrome 74","chrome 73","chrome 72","chrome 71","chrome 70","chrome 69","chrome 68","chrome 67","chrome 66","chrome 65","chrome 64","chrome 63","chrome 62","chrome 61","chrome 60","chrome 59","chrome 58","chrome 57","chrome 56","chrome 55","chrome 54","chrome 53","chrome 52","chrome 51","chrome 50","chrome 49","chrome 48","chrome 47","chrome 46","chrome 45","chrome 44","chrome 43","chrome 42","chrome 41","chrome 40","chrome 39","chrome 38","chrome 37","chrome 36","chrome 35","chrome 34","chrome 33","chrome 32","chrome 31","chrome 30","chrome 29","chrome 28","chrome 27","chrome 26","chrome 25","chrome 24","chrome 23","edge 85","edge 84","firefox 80","firefox 79","firefox 78","firefox 68","ios_saf 13.4-13.7","ios_saf 13.3","ios_saf 13.0-13.1","ios_saf 12.2-12.4","ios_saf 12.0-12.1","kaios 2.5","op_mini all","op_mob 46","opera 70","opera 69","safari 13.1","safari 13","samsung 12.0","samsung 11.1-11.2"])}();