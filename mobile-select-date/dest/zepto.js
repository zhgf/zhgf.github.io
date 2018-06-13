/* Zepto 1.1.6 - zepto event ajax form fx data deferred callbacks selector touch - zeptojs.com/license */

(function(e,t){typeof define=="function"&&define.amd?define([],t):typeof exports=="object"?module.exports=t():e.MobilePhotoPreview=t()})(this,function(){var Zepto=function(){function _(e){return e==null?String(e):T[N.call(e)]||"object"}function D(e){return _(e)=="function"}function P(e){return e!=null&&e==e.window}function H(e){return e!=null&&e.nodeType==e.DOCUMENT_NODE}function B(e){return _(e)=="object"}function j(e){return B(e)&&!P(e)&&Object.getPrototypeOf(e)==Object.prototype}function F(e){return typeof e.length=="number"}function I(e){return o.call(e,function(e){return e!=null})}function q(e){return e.length>0?n.fn.concat.apply([],e):e}function R(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function U(e){return e in l?l[e]:l[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function z(e,t){return typeof t=="number"&&!c[R(e)]?t+"px":t}function W(e){var t,n;return f[e]||(t=a.createElement(e),a.body.appendChild(t),n=getComputedStyle(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),n=="none"&&(n="block"),f[e]=n),f[e]}function X(e){return"children"in e?u.call(e.children):n.map(e.childNodes,function(e){if(e.nodeType==1)return e})}function V(e,t){var n,r=e?e.length:0;for(n=0;n<r;n++)this[n]=e[n];this.length=r,this.selector=t||""}function $(n,r,i){for(t in r)i&&(j(r[t])||M(r[t]))?(j(r[t])&&!j(n[t])&&(n[t]={}),M(r[t])&&!M(n[t])&&(n[t]=[]),$(n[t],r[t],i)):r[t]!==e&&(n[t]=r[t])}function J(e,t){return t==null?n(e):n(e).filter(t)}function K(e,t,n,r){return D(t)?t.call(e,n,r):t}function Q(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function G(t,n){var r=t.className||"",i=r&&r.baseVal!==e;if(n===e)return i?r.baseVal:r;i?r.baseVal=n:t.className=n}function Y(e){try{return e?e=="true"||(e=="false"?!1:e=="null"?null:+e+""==e?+e:/^[\[\{]/.test(e)?n.parseJSON(e):e):e}catch(t){return e}}function Z(e,t){t(e);for(var n=0,r=e.childNodes.length;n<r;n++)Z(e.childNodes[n],t)}var e,t,n,r,i=[],s=i.concat,o=i.filter,u=i.slice,a=window.document,f={},l={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},h=/^\s*<(\w+|!)[^>]*>/,p=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,d=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,v=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],y=["after","prepend","before","append"],b=a.createElement("table"),w=a.createElement("tr"),E={tr:a.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:w,th:w,"*":a.createElement("div")},S=/complete|loaded|interactive/,x=/^[\w-]*$/,T={},N=T.toString,C={},k,L,A=a.createElement("div"),O={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},M=Array.isArray||function(e){return e instanceof Array};return C.matches=function(e,t){if(!t||!e||e.nodeType!==1)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,s=!i;return s&&(i=A).appendChild(e),r=~C.qsa(i,t).indexOf(e),s&&A.removeChild(e),r},k=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},L=function(e){return o.call(e,function(t,n){return e.indexOf(t)==n})},C.fragment=function(t,r,i){var s,o,f;return p.test(t)&&(s=n(a.createElement(RegExp.$1))),s||(t.replace&&(t=t.replace(d,"<$1></$2>")),r===e&&(r=h.test(t)&&RegExp.$1),r in E||(r="*"),f=E[r],f.innerHTML=""+t,s=n.each(u.call(f.childNodes),function(){f.removeChild(this)})),j(i)&&(o=n(s),n.each(i,function(e,t){g.indexOf(e)>-1?o[e](t):o.attr(e,t)})),s},C.Z=function(e,t){return new V(e,t)},C.isZ=function(e){return e instanceof C.Z},C.init=function(t,r){var i;if(!t)return C.Z();if(typeof t=="string"){t=t.trim();if(t[0]=="<"&&h.test(t))i=C.fragment(t,RegExp.$1,r),t=null;else{if(r!==e)return n(r).find(t);i=C.qsa(a,t)}}else{if(D(t))return n(a).ready(t);if(C.isZ(t))return t;if(M(t))i=I(t);else if(B(t))i=[t],t=null;else if(h.test(t))i=C.fragment(t.trim(),RegExp.$1,r),t=null;else{if(r!==e)return n(r).find(t);i=C.qsa(a,t)}}return C.Z(i,t)},n=function(e,t){return C.init(e,t)},n.extend=function(e){var t,n=u.call(arguments,1);return typeof e=="boolean"&&(t=e,e=n.shift()),n.forEach(function(n){$(e,n,t)}),e},C.qsa=function(e,t){var n,r=t[0]=="#",i=!r&&t[0]==".",s=r||i?t.slice(1):t,o=x.test(s);return e.getElementById&&o&&r?(n=e.getElementById(s))?[n]:[]:e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11?[]:u.call(o&&!r&&e.getElementsByClassName?i?e.getElementsByClassName(s):e.getElementsByTagName(t):e.querySelectorAll(t))},n.contains=a.documentElement.contains?function(e,t){return e!==t&&e.contains(t)}:function(e,t){while(t&&(t=t.parentNode))if(t===e)return!0;return!1},n.type=_,n.isFunction=D,n.isWindow=P,n.isArray=M,n.isPlainObject=j,n.isEmptyObject=function(e){var t;for(t in e)return!1;return!0},n.inArray=function(e,t,n){return i.indexOf.call(t,e,n)},n.camelCase=k,n.trim=function(e){return e==null?"":String.prototype.trim.call(e)},n.uuid=0,n.support={},n.expr={},n.noop=function(){},n.map=function(e,t){var n,r=[],i,s;if(F(e))for(i=0;i<e.length;i++)n=t(e[i],i),n!=null&&r.push(n);else for(s in e)n=t(e[s],s),n!=null&&r.push(n);return q(r)},n.each=function(e,t){var n,r;if(F(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(r in e)if(t.call(e[r],r,e[r])===!1)return e;return e},n.grep=function(e,t){return o.call(e,t)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){T["[object "+t+"]"]=t.toLowerCase()}),n.fn={constructor:C.Z,length:0,forEach:i.forEach,reduce:i.reduce,push:i.push,sort:i.sort,splice:i.splice,indexOf:i.indexOf,concat:function(){var e,t,n=[];for(e=0;e<arguments.length;e++)t=arguments[e],n[e]=C.isZ(t)?t.toArray():t;return s.apply(C.isZ(this)?this.toArray():this,n)},map:function(e){return n(n.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return n(u.apply(this,arguments))},ready:function(e){return S.test(a.readyState)&&a.body?e(n):a.addEventListener("DOMContentLoaded",function(){e(n)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(e){return i.every.call(this,function(t,n){return e.call(t,n,t)!==!1}),this},filter:function(e){return D(e)?this.not(this.not(e)):n(o.call(this,function(t){return C.matches(t,e)}))},add:function(e,t){return n(L(this.concat(n(e,t))))},is:function(e){return this.length>0&&C.matches(this[0],e)},not:function(t){var r=[];if(D(t)&&t.call!==e)this.each(function(e){t.call(this,e)||r.push(this)});else{var i=typeof t=="string"?this.filter(t):F(t)&&D(t.item)?u.call(t):n(t);this.forEach(function(e){i.indexOf(e)<0&&r.push(e)})}return n(r)},has:function(e){return this.filter(function(){return B(e)?n.contains(this,e):n(this).find(e).size()})},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!B(e)?e:n(e)},last:function(){var e=this[this.length-1];return e&&!B(e)?e:n(e)},find:function(e){var t,r=this;return e?typeof e=="object"?t=n(e).filter(function(){var e=this;return i.some.call(r,function(t){return n.contains(t,e)})}):this.length==1?t=n(C.qsa(this[0],e)):t=this.map(function(){return C.qsa(this,e)}):t=n(),t},closest:function(e,t){var r=this[0],i=!1;typeof e=="object"&&(i=n(e));while(r&&!(i?i.indexOf(r)>=0:C.matches(r,e)))r=r!==t&&!H(r)&&r.parentNode;return n(r)},parents:function(e){var t=[],r=this;while(r.length>0)r=n.map(r,function(e){if((e=e.parentNode)&&!H(e)&&t.indexOf(e)<0)return t.push(e),e});return J(t,e)},parent:function(e){return J(L(this.pluck("parentNode")),e)},children:function(e){return J(this.map(function(){return X(this)}),e)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(e){return J(this.map(function(e,t){return o.call(X(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return n.map(this,function(t){return t[e]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=""),getComputedStyle(this,"").getPropertyValue("display")=="none"&&(this.style.display=W(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var t=D(e);if(this[0]&&!t)var r=n(e).get(0),i=r.parentNode||this.length>1;return this.each(function(s){n(this).wrapAll(t?e.call(this,s):i?r.cloneNode(!0):r)})},wrapAll:function(e){if(this[0]){n(this[0]).before(e=n(e));var t;while((t=e.children()).length)e=t.first();n(e).append(this)}return this},wrapInner:function(e){var t=D(e);return this.each(function(r){var i=n(this),s=i.contents(),o=t?e.call(this,r):e;s.length?s.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var r=n(this);(t===e?r.css("display")=="none":t)?r.show():r.hide()})},prev:function(e){return n(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return n(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return 0 in arguments?this.each(function(t){var r=this.innerHTML;n(this).empty().append(K(this,e,t,r))}):0 in this?this[0].innerHTML:null},text:function(e){return 0 in arguments?this.each(function(t){var n=K(this,e,t,this.textContent);this.textContent=n==null?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,r){var i;return typeof n!="string"||1 in arguments?this.each(function(e){if(this.nodeType!==1)return;if(B(n))for(t in n)Q(this,t,n[t]);else Q(this,n,K(this,r,e,this.getAttribute(n)))}):!this.length||this[0].nodeType!==1?e:!(i=this[0].getAttribute(n))&&n in this[0]?this[0][n]:i},removeAttr:function(e){return this.each(function(){this.nodeType===1&&e.split(" ").forEach(function(e){Q(this,e)},this)})},prop:function(e,t){return e=O[e]||e,1 in arguments?this.each(function(n){this[e]=K(this,t,n,this[e])}):this[0]&&this[0][e]},data:function(t,n){var r="data-"+t.replace(m,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return i!==null?Y(i):e},val:function(e){return 0 in arguments?this.each(function(t){this.value=K(this,e,t,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var r=n(this),i=K(this,e,t,r.offset()),s=r.offsetParent().offset(),o={top:i.top-s.top,left:i.left-s.left};r.css("position")=="static"&&(o.position="relative"),r.css(o)});if(!this.length)return null;if(!n.contains(a.documentElement,this[0]))return{top:0,left:0};var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(e,r){if(arguments.length<2){var i,s=this[0];if(!s)return;i=getComputedStyle(s,"");if(typeof e=="string")return s.style[k(e)]||i.getPropertyValue(e);if(M(e)){var o={};return n.each(e,function(e,t){o[t]=s.style[k(t)]||i.getPropertyValue(t)}),o}}var u="";if(_(e)=="string")!r&&r!==0?this.each(function(){this.style.removeProperty(R(e))}):u=R(e)+":"+z(e,r);else for(t in e)!e[t]&&e[t]!==0?this.each(function(){this.style.removeProperty(R(t))}):u+=R(t)+":"+z(t,e[t])+";";return this.each(function(){this.style.cssText+=";"+u})},index:function(e){return e?this.indexOf(n(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return e?i.some.call(this,function(e){return this.test(G(e))},U(e)):!1},addClass:function(e){return e?this.each(function(t){if(!("className"in this))return;r=[];var i=G(this),s=K(this,e,t,i);s.split(/\s+/g).forEach(function(e){n(this).hasClass(e)||r.push(e)},this),r.length&&G(this,i+(i?" ":"")+r.join(" "))}):this},removeClass:function(t){return this.each(function(n){if(!("className"in this))return;if(t===e)return G(this,"");r=G(this),K(this,t,n,r).split(/\s+/g).forEach(function(e){r=r.replace(U(e)," ")}),G(this,r.trim())})},toggleClass:function(t,r){return t?this.each(function(i){var s=n(this),o=K(this,t,i,G(this));o.split(/\s+/g).forEach(function(t){(r===e?!s.hasClass(t):r)?s.addClass(t):s.removeClass(t)})}):this},scrollTop:function(t){if(!this.length)return;var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})},scrollLeft:function(t){if(!this.length)return;var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})},position:function(){if(!this.length)return;var e=this[0],t=this.offsetParent(),r=this.offset(),i=v.test(t[0].nodeName)?{top:0,left:0}:t.offset();return r.top-=parseFloat(n(e).css("margin-top"))||0,r.left-=parseFloat(n(e).css("margin-left"))||0,i.top+=parseFloat(n(t[0]).css("border-top-width"))||0,i.left+=parseFloat(n(t[0]).css("border-left-width"))||0,{top:r.top-i.top,left:r.left-i.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||a.body;while(e&&!v.test(e.nodeName)&&n(e).css("position")=="static")e=e.offsetParent;return e})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(t){var r=t.replace(/./,function(e){return e[0].toUpperCase()});n.fn[t]=function(i){var s,o=this[0];return i===e?P(o)?o["inner"+r]:H(o)?o.documentElement["scroll"+r]:(s=this.offset())&&s[t]:this.each(function(e){o=n(this),o.css(t,K(this,i,e,o[t]()))})}}),y.forEach(function(e,t){var r=t%2;n.fn[e]=function(){var e,i=n.map(arguments,function(t){return e=_(t),e=="object"||e=="array"||t==null?t:C.fragment(t)}),s,o=this.length>1;return i.length<1?this:this.each(function(e,u){s=r?u:u.parentNode,u=t==0?u.nextSibling:t==1?u.firstChild:t==2?u:null;var f=n.contains(a.documentElement,s);i.forEach(function(e){if(o)e=e.cloneNode(!0);else if(!s)return n(e).remove();s.insertBefore(e,u),f&&Z(e,function(e){e.nodeName!=null&&e.nodeName.toUpperCase()==="SCRIPT"&&(!e.type||e.type==="text/javascript")&&!e.src&&window.eval.call(window,e.innerHTML)})})})},n.fn[r?e+"To":"insert"+(t?"Before":"After")]=function(t){return n(t)[e](this),this}}),C.Z.prototype=V.prototype=n.fn,C.uniq=L,C.deserializeValue=Y,n.zepto=C,n}();return window.Zepto=Zepto,window.$===undefined&&(window.$=Zepto),function(e){function c(e){return e._zid||(e._zid=t++)}function h(e,t,n,r){t=p(t);if(t.ns)var i=d(t.ns);return(o[c(e)]||[]).filter(function(e){return e&&(!t.e||e.e==t.e)&&(!t.ns||i.test(e.ns))&&(!n||c(e.fn)===c(n))&&(!r||e.sel==r)})}function p(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function d(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function v(e,t){return e.del&&!a&&e.e in f||!!t}function m(e){return l[e]||a&&f[e]||e}function g(t,r,i,s,u,a,f){var h=c(t),d=o[h]||(o[h]=[]);r.split(/\s/).forEach(function(r){if(r=="ready")return e(document).ready(i);var o=p(r);o.fn=i,o.sel=u,o.e in l&&(i=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return o.fn.apply(this,arguments)}),o.del=a;var c=a||i;o.proxy=function(e){e=x(e);if(e.isImmediatePropagationStopped())return;e.data=s;var r=c.apply(t,e._args==n?[e]:[e].concat(e._args));return r===!1&&(e.preventDefault(),e.stopPropagation()),r},o.i=d.length,d.push(o),"addEventListener"in t&&t.addEventListener(m(o.e),o.proxy,v(o,f))})}function y(e,t,n,r,i){var s=c(e);(t||"").split(/\s/).forEach(function(t){h(e,t,n,r).forEach(function(t){delete o[s][t.i],"removeEventListener"in e&&e.removeEventListener(m(t.e),t.proxy,v(t,i))})})}function x(t,r){if(r||!t.isDefaultPrevented){r||(r=t),e.each(S,function(e,n){var i=r[e];t[e]=function(){return this[n]=b,i&&i.apply(r,arguments)},t[n]=w});if(r.defaultPrevented!==n?r.defaultPrevented:"returnValue"in r?r.returnValue===!1:r.getPreventDefault&&r.getPreventDefault())t.isDefaultPrevented=b}return t}function T(e){var t,r={originalEvent:e};for(t in e)!E.test(t)&&e[t]!==n&&(r[t]=e[t]);return x(r,e)}var t=1,n,r=Array.prototype.slice,i=e.isFunction,s=function(e){return typeof e=="string"},o={},u={},a="onfocusin"in window,f={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:g,remove:y},e.proxy=function(t,n){var o=2 in arguments&&r.call(arguments,2);if(i(t)){var u=function(){return t.apply(n,o?o.concat(r.call(arguments)):arguments)};return u._zid=c(t),u}if(s(n))return o?(o.unshift(t[n],t),e.proxy.apply(null,o)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(e,t,n){return this.on(e,t,n)},e.fn.unbind=function(e,t){return this.off(e,t)},e.fn.one=function(e,t,n,r){return this.on(e,t,n,r,1)};var b=function(){return!0},w=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(e,t,n){return this.on(t,e,n)},e.fn.undelegate=function(e,t,n){return this.off(t,e,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,o,u,a,f){var l,c,h=this;if(t&&!s(t))return e.each(t,function(e,t){h.on(e,o,u,t,f)}),h;!s(o)&&!i(a)&&a!==!1&&(a=u,u=o,o=n);if(a===n||u===!1)a=u,u=n;return a===!1&&(a=w),h.each(function(n,i){f&&(l=function(e){return y(i,e.type,a),a.apply(this,arguments)}),o&&(c=function(t){var n,s=e(t.target).closest(o,i).get(0);if(s&&s!==i)return n=e.extend(T(t),{currentTarget:s,liveFired:i}),(l||a).apply(s,[n].concat(r.call(arguments,1)))}),g(i,t,a,u,o,c||l)})},e.fn.off=function(t,r,o){var u=this;return t&&!s(t)?(e.each(t,function(e,t){u.off(e,r,t)}),u):(!s(r)&&!i(o)&&o!==!1&&(o=r,r=n),o===!1&&(o=w),u.each(function(){y(this,t,o,r)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):x(t),t._args=n,this.each(function(){t.type in f&&typeof this[t.type]=="function"?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,u){r=T(s(t)?e.Event(t):t),r._args=n,r.target=u,e.each(h(u,t.type||t),function(e,t){i=t.proxy(r);if(r.isImmediatePropagationStopped())return!1})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(e,t){s(e)||(t=e,e=t.type);var n=document.createEvent(u[e]||"Events"),r=!0;if(t)for(var i in t)i=="bubbles"?r=!!t[i]:n[i]=t[i];return n.initEvent(e,r,!0),x(n)}}(Zepto),function($){function triggerAndReturn(e,t,n){var r=$.Event(t);return $(e).trigger(r,n),!r.isDefaultPrevented()}function triggerGlobal(e,t,n,r){if(e.global)return triggerAndReturn(t||document,n,r)}function ajaxStart(e){e.global&&$.active++===0&&triggerGlobal(e,null,"ajaxStart")}function ajaxStop(e){e.global&&!--$.active&&triggerGlobal(e,null,"ajaxStop")}function ajaxBeforeSend(e,t){var n=t.context;if(t.beforeSend.call(n,e,t)===!1||triggerGlobal(t,n,"ajaxBeforeSend",[e,t])===!1)return!1;triggerGlobal(t,n,"ajaxSend",[e,t])}function ajaxSuccess(e,t,n,r){var i=n.context,s="success";n.success.call(i,e,s,t),r&&r.resolveWith(i,[e,s,t]),triggerGlobal(n,i,"ajaxSuccess",[t,n,e]),ajaxComplete(s,t,n)}function ajaxError(e,t,n,r,i){var s=r.context;r.error.call(s,n,t,e),i&&i.rejectWith(s,[n,t,e]),triggerGlobal(r,s,"ajaxError",[n,r,e||t]),ajaxComplete(t,n,r)}function ajaxComplete(e,t,n){var r=n.context;n.complete.call(r,t,e),triggerGlobal(n,r,"ajaxComplete",[t,n]),ajaxStop(n)}function empty(){}function mimeToDataType(e){return e&&(e=e.split(";",2)[0]),e&&(e==htmlType?"html":e==jsonType?"json":scriptTypeRE.test(e)?"script":xmlTypeRE.test(e)&&"xml")||"text"}function appendQuery(e,t){return t==""?e:(e+"&"+t).replace(/[&?]{1,2}/,"?")}function serializeData(e){e.processData&&e.data&&$.type(e.data)!="string"&&(e.data=$.param(e.data,e.traditional)),e.data&&(!e.type||e.type.toUpperCase()=="GET")&&(e.url=appendQuery(e.url,e.data),e.data=undefined)}function parseArguments(e,t,n,r){return $.isFunction(t)&&(r=n,n=t,t=undefined),$.isFunction(n)||(r=n,n=undefined),{url:e,data:t,success:n,dataType:r}}function serialize(e,t,n,r){var i,s=$.isArray(t),o=$.isPlainObject(t);$.each(t,function(t,u){i=$.type(u),r&&(t=n?r:r+"["+(o||i=="object"||i=="array"?t:"")+"]"),!r&&s?e.add(u.name,u.value):i=="array"||!n&&i=="object"?serialize(e,u,n,t):e.add(t,u)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/,originAnchor=document.createElement("a");originAnchor.href=window.location.href,$.active=0,$.ajaxJSONP=function(e,t){if("type"in e){var n=e.jsonpCallback,r=($.isFunction(n)?n():n)||"jsonp"+ ++jsonpID,i=document.createElement("script"),s=window[r],o,u=function(e){$(i).triggerHandler("error",e||"abort")},a={abort:u},f;return t&&t.promise(a),$(i).on("load error",function(n,u){clearTimeout(f),$(i).off().remove(),n.type=="error"||!o?ajaxError(null,u||"error",a,e,t):ajaxSuccess(o[0],a,e,t),window[r]=s,o&&$.isFunction(s)&&s(o[0]),s=o=undefined}),ajaxBeforeSend(a,e)===!1?(u("abort"),a):(window[r]=function(){o=arguments},i.src=e.url.replace(/\?(.+)=\?/,"?$1="+r),document.head.appendChild(i),e.timeout>0&&(f=setTimeout(function(){u("timeout")},e.timeout)),a)}return $.ajax(e)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{}),deferred=$.Deferred&&$.Deferred(),urlAnchor,hashIndex;for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(urlAnchor=document.createElement("a"),urlAnchor.href=settings.url,urlAnchor.href=urlAnchor.href,settings.crossDomain=originAnchor.protocol+"//"+originAnchor.host!=urlAnchor.protocol+"//"+urlAnchor.host),settings.url||(settings.url=window.location.toString()),(hashIndex=settings.url.indexOf("#"))>-1&&(settings.url=settings.url.slice(0,hashIndex)),serializeData(settings);var dataType=settings.dataType,hasPlaceholder=/\?.+=\?/.test(settings.url);hasPlaceholder&&(dataType="jsonp");if(settings.cache===!1||(!options||options.cache!==!0)&&("script"==dataType||"jsonp"==dataType))settings.url=appendQuery(settings.url,"_="+Date.now());if("jsonp"==dataType)return hasPlaceholder||(settings.url=appendQuery(settings.url,settings.jsonp?settings.jsonp+"=?":settings.jsonp===!1?"":"callback=?")),$.ajaxJSONP(settings,deferred);var mime=settings.accepts[dataType],headers={},setHeader=function(e,t){headers[e.toLowerCase()]=[e,t]},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),nativeSetHeader=xhr.setRequestHeader,abortTimeout;deferred&&deferred.promise(xhr),settings.crossDomain||setHeader("X-Requested-With","XMLHttpRequest"),setHeader("Accept",mime||"*/*");if(mime=settings.mimeType||mime)mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime);(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")&&setHeader("Content-Type",settings.contentType||"application/x-www-form-urlencoded");if(settings.headers)for(name in settings.headers)setHeader(name,settings.headers[name]);xhr.setRequestHeader=setHeader,xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(settings.mimeType||xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings,deferred):ajaxSuccess(result,xhr,settings,deferred)}else ajaxError(xhr.statusText||null,xhr.status?"error":"abort",xhr,settings,deferred)}};if(ajaxBeforeSend(xhr,settings)===!1)return xhr.abort(),ajaxError(null,"abort",xhr,settings,deferred),xhr;if(settings.xhrFields)for(name in settings.xhrFields)xhr[name]=settings.xhrFields[name];var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async,settings.username,settings.password);for(name in headers)nativeSetHeader.apply(xhr,headers[name]);return settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings,deferred)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr},$.get=function(){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(){var e=parseArguments.apply(null,arguments);return e.type="POST",$.ajax(e)},$.getJSON=function(){var e=parseArguments.apply(null,arguments);return e.dataType="json",$.ajax(e)},$.fn.load=function(e,t,n){if(!this.length)return this;var r=this,i=e.split(/\s/),s,o=parseArguments(e,t,n),u=o.success;return i.length>1&&(o.url=i[0],s=i[1]),o.success=function(e){r.html(s?$("<div>").html(e.replace(rscript,"")).find(s):e),u&&u.apply(r,arguments)},$.ajax(o),this};var escape=encodeURIComponent;$.param=function(e,t){var n=[];return n.add=function(e,t){$.isFunction(t)&&(t=t()),t==null&&(t=""),this.push(escape(e)+"="+escape(t))},serialize(n,e,t),n.join("&").replace(/%20/g,"+")}}(Zepto),function(e){e.fn.serializeArray=function(){var t,n,r=[],i=function(e){if(e.forEach)return e.forEach(i);r.push({name:t,value:e})};return this[0]&&e.each(this[0].elements,function(r,s){n=s.type,t=s.name,t&&s.nodeName.toLowerCase()!="fieldset"&&!s.disabled&&n!="submit"&&n!="reset"&&n!="button"&&n!="file"&&(n!="radio"&&n!="checkbox"||s.checked)&&i(e(s).val())}),r},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(e,t){function g(e){return e.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function y(e){return r?r+e:e.toLowerCase()}var n="",r,i={Webkit:"webkit",Moz:"",O:"o"},s=document.createElement("div"),o=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,u,a,f,l,c,h,p,d,v,m={};e.each(i,function(e,i){if(s.style[e+"TransitionProperty"]!==t)return n="-"+e.toLowerCase()+"-",r=i,!1}),u=n+"transform",m[a=n+"transition-property"]=m[f=n+"transition-duration"]=m[c=n+"transition-delay"]=m[l=n+"transition-timing-function"]=m[h=n+"animation-name"]=m[p=n+"animation-duration"]=m[v=n+"animation-delay"]=m[d=n+"animation-timing-function"]="",e.fx={off:r===t&&s.style.transitionProperty===t,speeds:{_default:400,fast:200,slow:600},cssPrefix:n,transitionEnd:y("TransitionEnd"),animationEnd:y("AnimationEnd")},e.fn.animate=function(n,r,i,s,o){return e.isFunction(r)&&(s=r,i=t,r=t),e.isFunction(i)&&(s=i,i=t),e.isPlainObject(r)&&(i=r.easing,s=r.complete,o=r.delay,r=r.duration),r&&(r=(typeof r=="number"?r:e.fx.speeds[r]||e.fx.speeds._default)/1e3),o&&(o=parseFloat(o)/1e3),this.anim(n,r,i,s,o)},e.fn.anim=function(n,r,i,s,y){var b,w={},E,S="",x=this,T,N=e.fx.transitionEnd,C=!1;r===t&&(r=e.fx.speeds._default/1e3),y===t&&(y=0),e.fx.off&&(r=0);if(typeof n=="string")w[h]=n,w[p]=r+"s",w[v]=y+"s",w[d]=i||"linear",N=e.fx.animationEnd;else{E=[];for(b in n)o.test(b)?S+=b+"("+n[b]+") ":(w[b]=n[b],E.push(g(b)));S&&(w[u]=S,E.push(u)),r>0&&typeof n=="object"&&(w[a]=E.join(", "),w[f]=r+"s",w[c]=y+"s",w[l]=i||"linear")}return T=function(t){if(typeof t!="undefined"){if(t.target!==t.currentTarget)return;e(t.target).unbind(N,T)}else e(this).unbind(N,T);C=!0,e(this).css(m),s&&s.call(this)},r>0&&(this.bind(N,T),setTimeout(function(){if(C)return;T.call(x)},(r+y)*1e3+25)),this.size()&&this.get(0).clientLeft,this.css(w),r<=0&&setTimeout(function(){x.each(function(){T.call(this)})},0),this},s=null}(Zepto),function(e){function o(s,o){var a=s[i],f=a&&t[a];if(o===undefined)return f||u(s);if(f){if(o in f)return f[o];var l=r(o);if(l in f)return f[l]}return n.call(e(s),o)}function u(n,s,o){var u=n[i]||(n[i]=++e.uuid),f=t[u]||(t[u]=a(n));return s!==undefined&&(f[r(s)]=o),f}function a(t){var n={};return e.each(t.attributes||s,function(t,i){i.name.indexOf("data-")==0&&(n[r(i.name.replace("data-",""))]=e.zepto.deserializeValue(i.value))}),n}var t={},n=e.fn.data,r=e.camelCase,i=e.expando="Zepto"+ +(new Date),s=[];e.fn.data=function(t,n){return n===undefined?e.isPlainObject(t)?this.each(function(n,r){e.each(t,function(e,t){u(r,e,t)})}):0 in this?o(this[0],t):undefined:this.each(function(){u(this,t,n)})},e.fn.removeData=function(n){return typeof n=="string"&&(n=n.split(/\s+/)),this.each(function(){var s=this[i],o=s&&t[s];o&&e.each(n||o,function(e){delete o[n?r(this):e]})})},["remove","empty"].forEach(function(t){var n=e.fn[t];e.fn[t]=function(){var e=this.find("*");return t==="remove"&&(e=e.add(this)),e.removeData(),n.call(this)}})}(Zepto),function(e){function n(t){var r=[["resolve","done",e.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",e.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",e.Callbacks({memory:1})]],i="pending",s={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return n(function(n){e.each(r,function(r,i){var u=e.isFunction(t[r])&&t[r];o[i[1]](function(){var t=u&&u.apply(this,arguments);if(t&&e.isFunction(t.promise))t.promise().done(n.resolve).fail(n.reject).progress(n.notify);else{var r=this===s?n.promise():this,o=u?[t]:arguments;n[i[0]+"With"](r,o)}})}),t=null}).promise()},promise:function(t){return t!=null?e.extend(t,s):s}},o={};return e.each(r,function(e,t){var n=t[2],u=t[3];s[t[1]]=n.add,u&&n.add(function(){i=u},r[e^1][2].disable,r[2][2].lock),o[t[0]]=function(){return o[t[0]+"With"](this===o?s:this,arguments),this},o[t[0]+"With"]=n.fireWith}),s.promise(o),t&&t.call(o,o),o}var t=Array.prototype.slice;e.when=function(r){var i=t.call(arguments),s=i.length,o=0,u=s!==1||r&&e.isFunction(r.promise)?s:0,a=u===1?r:n(),f,l,c,h=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?t.call(arguments):i,r===f?a.notifyWith(n,r):--u||a.resolveWith(n,r)}};if(s>1){f=new Array(s),l=new Array(s),c=new Array(s);for(;o<s;++o)i[o]&&e.isFunction(i[o].promise)?i[o].promise().done(h(o,c,i)).fail(a.reject).progress(h(o,l,f)):--u}return u||a.resolveWith(c,i),a.promise()},e.Deferred=n}(Zepto),function(e){e.Callbacks=function(t){t=e.extend({},t);var n,r,i,s,o,u,a=[],f=!t.once&&[],l=function(e){n=t.memory&&e,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;++u)if(a[u].apply(e[0],e[1])===!1&&t.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a.length=0:c.disable())},c={add:function(){if(a){var r=a.length,u=function(n){e.each(n,function(e,n){typeof n=="function"?(!t.unique||!c.has(n))&&a.push(n):n&&n.length&&typeof n!="string"&&u(n)})};u(arguments),i?o=a.length:n&&(s=r,l(n))}return this},remove:function(){return a&&e.each(arguments,function(t,n){var r;while((r=e.inArray(n,a,r))>-1)a.splice(r,1),i&&(r<=o&&--o,r<=u&&--u)}),this},has:function(t){return!!a&&!!(t?e.inArray(t,a)>-1:a.length)},empty:function(){return o=a.length=0,this},disable:function(){return a=f=n=undefined,this},disabled:function(){return!a},lock:function(){return f=undefined,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return a&&(!r||f)&&(t=t||[],t=[e,t.slice?t.slice():t],i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments)},fired:function(){return!!r}};return c}}(Zepto),function(e){function i(t){return t=e(t),(!!t.width()||!!t.height())&&t.css("display")!=="none"}function f(e,t){e=e.replace(/=#\]/g,'="#"]');var n,r,i=o.exec(e);if(i&&i[2]in s){n=s[i[2]],r=i[3],e=i[1];if(r){var u=Number(r);isNaN(u)?r=r.replace(/^["']|["']$/g,""):r=u}}return t(e,n,r)}var t=e.zepto,n=t.qsa,r=t.matches,s=e.expr[":"]={visible:function(){if(i(this))return this},hidden:function(){if(!i(this))return this},selected:function(){if(this.selected)return this},checked:function(){if(this.checked)return this},parent:function(){return this.parentNode},first:function(e){if(e===0)return this},last:function(e,t){if(e===t.length-1)return this},eq:function(e,t,n){if(e===n)return this},contains:function(t,n,r){if(e(this).text().indexOf(r)>-1)return this},has:function(e,n,r){if(t.qsa(this,r).length)return this}},o=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,a="Zepto"+ +(new Date);t.qsa=function(r,i){return f(i,function(s,o,f){try{var l;!s&&o?s="*":u.test(s)&&(l=e(r).addClass(a),s="."+a+" "+s);var c=n(r,s)}catch(h){throw console.error("error performing selector: %o",i),h}finally{l&&l.removeClass(a)}return o?t.uniq(e.map(c,function(e,t){return o.call(e,t,c,f)})):c})},t.matches=function(e,t){return f(t,function(t,n,i){return(!t||r(e,t))&&(!n||n.call(e,null,i)===e)})}}(Zepto),function(e){function a(e,t,n,r){return Math.abs(e-t)>=Math.abs(n-r)?e-t>0?"Left":"Right":n-r>0?"Up":"Down"}function f(){s=null,t.last&&(t.el.trigger("longTap"),t={})}function l(){s&&clearTimeout(s),s=null}function c(){n&&clearTimeout(n),r&&clearTimeout(r),i&&clearTimeout(i),s&&clearTimeout(s),n=r=i=s=null,t={}}function h(e){return(e.pointerType=="touch"||e.pointerType==e.MSPOINTER_TYPE_TOUCH)&&e.isPrimary}function p(e,t){return e.type=="pointer"+t||e.type.toLowerCase()=="mspointer"+t}var t={},n,r,i,s,o=750,u;e(document).ready(function(){var d,v,m=0,g=0,y,b;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),e(document).bind("MSGestureEnd",function(e){var n=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;n&&(t.el.trigger("swipe"),t.el.trigger("swipe"+n))}).on("touchstart MSPointerDown pointerdown",function(r){if((b=p(r,"down"))&&!h(r))return;y=b?r:r.touches[0],r.touches&&r.touches.length===1&&t.x2&&(t.x2=undefined,t.y2=undefined),d=Date.now(),v=d-(t.last||d),t.el=e("tagName"in y.target?y.target:y.target.parentNode),n&&clearTimeout(n),t.x1=y.pageX,t.y1=y.pageY,v>0&&v<=250&&(t.isDoubleTap=!0),t.last=d,s=setTimeout(f,o),u&&b&&u.addPointer(r.pointerId)}).on("touchmove MSPointerMove pointermove",function(e){if((b=p(e,"move"))&&!h(e))return;y=b?e:e.touches[0],l(),t.x2=y.pageX,t.y2=y.pageY,m+=Math.abs(t.x1-t.x2),g+=Math.abs(t.y1-t.y2)}).on("touchend MSPointerUp pointerup",function(s){if((b=p(s,"up"))&&!h(s))return;l(),t.x2&&Math.abs(t.x1-t.x2)>30||t.y2&&Math.abs(t.y1-t.y2)>30?i=setTimeout(function(){t.el.trigger("swipe"),t.el.trigger("swipe"+a(t.x1,t.x2,t.y1,t.y2)),t={}},0):"last"in t&&(m<30&&g<30?r=setTimeout(function(){var r=e.Event("tap");r.cancelTouch=c,t.el.trigger(r),t.isDoubleTap?(t.el&&t.el.trigger("doubleTap"),t={}):n=setTimeout(function(){n=null,t.el&&t.el.trigger("singleTap"),t={}},250)},0):t={}),m=g=0}).on("touchcancel MSPointerCancel pointercancel",c),e(window).on("scroll",c)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.on(t,e)}})}(Zepto),Zepto});