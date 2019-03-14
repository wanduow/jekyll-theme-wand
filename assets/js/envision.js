/*!
  * Bonzo: DOM Utility (c) Dustin Diaz 2011
  * https://github.com/ded/bonzo
  * License MIT
  */
!function(a,b){typeof define=="function"?define(b):typeof module!="undefined"?module.exports=b():this[a]=b()}("bonzo",function(){function x(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function y(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c||a[d],a[d],d,a);return a}function z(a){return a.replace(/-(.)/g,function(a,b){return b.toUpperCase()})}function A(a){return a&&a.nodeName&&a.nodeType==1}function B(a,b,c,d){for(d=0,j=a.length;d<j;++d)if(b.call(c,a[d],d,a))return!0;return!1}function D(a,b,c){var d=0,g=b||this,h=[],i=f&&typeof a=="string"&&a.charAt(0)!="<"?function(b){return(b=f(a))&&(b.selected=1)&&b}():a;return y(J(i),function(a){y(g,function(b){var f=!b[e]||b[e]&&!b[e][e]?function(){var a=b.cloneNode(!0);return g.$&&g.cloneEvents&&g.$(a).cloneEvents(b),a}():b;c(a,f),h[d]=f,d++})},this),y(h,function(a,b){g[b]=a}),g.length=d,g}function E(a,b,c){var d=N(a),e=d.css("position"),f=d.offset(),g="relative",h=e==g,i=[parseInt(d.css("left"),10),parseInt(d.css("top"),10)];e=="static"&&(d.css("position",g),e=g),isNaN(i[0])&&(i[0]=h?0:a.offsetLeft),isNaN(i[1])&&(i[1]=h?0:a.offsetTop),b!=null&&(a.style.left=b-f.left+i[0]+q),c!=null&&(a.style.top=c-f.top+i[1]+q)}function F(a,b){return x(b).test(a.className)}function G(a,b){a.className=w(a.className+" "+b)}function H(a,b){a.className=w(a.className.replace(x(b)," "))}function I(a){this.length=0;if(a){a=typeof a!="string"&&!a.nodeType&&typeof a.length!="undefined"?a:[a],this.length=a.length;for(var b=0;b<a.length;b++)this[b]=a[b]}}function J(a){return typeof a=="string"?N.create(a):A(a)?[a]:a}function K(a,c,d){var e=this[0];return a==null&&c==null?(L(e)?M():{x:e.scrollLeft,y:e.scrollTop})[d]:(L(e)?b.scrollTo(a,c):(a!=null&&(e.scrollLeft=a),c!=null&&(e.scrollTop=c)),this)}function L(a){return a===b||/^(?:body|html)$/i.test(a.tagName)}function M(){return{x:b.pageXOffset||d.scrollLeft,y:b.pageYOffset||d.scrollTop}}function N(a,b){return new I(a,b)}var a=this,b=window,c=b.document,d=c.documentElement,e="parentNode",f=null,g=/^checked|value|selected$/,h=/select|fieldset|table|tbody|tfoot|td|tr|colgroup/i,i="table",k={thead:i,tbody:i,tfoot:i,tr:"tbody",th:"tr",td:"tr",fieldset:"form",option:"select"},l=/^checked|selected$/,m=/msie/i.test(navigator.userAgent),n=[],o=0,p=/^-?[\d\.]+$/,q="px",r="setAttribute",s="getAttribute",t=/(^\s*|\s*$)/g,u={lineHeight:1,zoom:1,zIndex:1,opacity:1},v=function(){var a=["webkitTransform","MozTransform","OTransform","msTransform","Transform"],b;for(b=0;b<a.length;b++)if(a[b]in c.createElement("a").style)return a[b]}(),w=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(t,"")},C=c.defaultView&&c.defaultView.getComputedStyle?function(a,b){b=b=="transform"?v:b,b=b=="transform-origin"?v+"Origin":b;var d=null;b=="float"&&(b="cssFloat");var e=c.defaultView.getComputedStyle(a,"");return e&&(d=e[z(b)]),a.style[b]||d}:m&&d.currentStyle?function(a,b){b=z(b),b=b=="float"?"styleFloat":b;if(b=="opacity"){var c=100;try{c=a.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(d){try{c=a.filters("alpha").opacity}catch(e){}}return c/100}var f=a.currentStyle?a.currentStyle[b]:null;return a.style[b]||f}:function(a,b){return a.style[z(b)]};I.prototype={get:function(a){return this[a]},each:function(a,b){return y(this,a,b)},map:function(a,b){var c=[],d,e;for(e=0;e<this.length;e++)d=a.call(this,this[e],e),b?b(d)&&c.push(d):c.push(d);return c},first:function(){return N(this[0])},last:function(){return N(this[this.length-1])},html:function(a,b){function f(b){while(b.firstChild)b.removeChild(b.firstChild);y(J(a),function(a){b.appendChild(a)})}var c=b?d.textContent===null?"innerText":"textContent":"innerHTML",e;return typeof a!="undefined"?this.each(function(b){(e=b.tagName.match(h))?f(b,e[0]):b[c]=a}):this[0]?this[0][c]:""},text:function(a){return this.html(a,1)},addClass:function(a){return this.each(function(b){F(b,a)||G(b,a)})},removeClass:function(a){return this.each(function(b){F(b,a)&&H(b,a)})},hasClass:function(a){return B(this,function(b){return F(b,a)})},toggleClass:function(a,b){return this.each(function(c){typeof b!="undefined"?b?G(c,a):H(c,a):F(c,a)?H(c,a):G(c,a)})},show:function(a){return this.each(function(b){b.style.display=a||""})},hide:function(a){return this.each(function(a){a.style.display="none"})},append:function(a){return this.each(function(b){y(J(a),function(a){b.appendChild(a)})})},prepend:function(a){return this.each(function(b){var c=b.firstChild;y(J(a),function(a){b.insertBefore(a,c)})})},appendTo:function(a,b){return D.call(this,a,b,function(a,b){a.appendChild(b)})},prependTo:function(a,b){return D.call(this,a,b,function(a,b){a.insertBefore(b,a.firstChild)})},next:function(){return this.related("nextSibling")},previous:function(){return this.related("previousSibling")},related:function(a){return this.map(function(b){b=b[a];while(b&&b.nodeType!==1)b=b[a];return b||0},function(a){return a})},before:function(a){return this.each(function(b){y(N.create(a),function(a){b[e].insertBefore(a,b)})})},after:function(a){return this.each(function(b){y(N.create(a),function(a){b[e].insertBefore(a,b.nextSibling)})})},insertBefore:function(a,b){return D.call(this,a,b,function(a,b){a[e].insertBefore(b,a)})},insertAfter:function(a,b){return D.call(this,a,b,function(a,b){var c=a.nextSibling;c?a[e].insertBefore(b,c):a[e].appendChild(b)})},css:function(a,d,e){function g(a,b,c){for(var d in f)f.hasOwnProperty(d)&&(c=f[d],(b=z(d))&&p.test(c)&&!(b in u)&&(c+=q),b=b=="transform"?v:b,b=b=="transformOrigin"?v+"Origin":b,a.style[b]=c)}if(d===undefined&&typeof a=="string")return d=this[0],d?d==c||d==b?(e=d==c?N.doc():N.viewport(),a=="width"?e.width:a=="height"?e.height:""):C(d,a):null;var f=a;typeof a=="string"&&(f={},f[a]=d),m&&f.opacity&&(f.filter="alpha(opacity="+f.opacity*100+")",f.zoom=a.zoom||1,delete f.opacity);if(d=f["float"])m?f.styleFloat=d:f.cssFloat=d,delete f["float"];return this.each(g)},offset:function(a,b){if(typeof a=="number"||typeof b=="number")return this.each(function(c){E(c,a,b)});var c=this[0],d=c.offsetWidth,e=c.offsetHeight,f=c.offsetTop,g=c.offsetLeft;while(c=c.offsetParent)f=f+c.offsetTop,g=g+c.offsetLeft;return{top:f,left:g,height:e,width:d}},attr:function(a,b){var c=this[0];if(typeof a=="string"||a instanceof String)return typeof b=="undefined"?g.test(a)?l.test(a)&&typeof c[a]=="string"?!0:c[a]:c[s](a):this.each(function(c){g.test(a)?c[a]=b:c[r](a,b)});for(var d in a)a.hasOwnProperty(d)&&this.attr(d,a[d]);return this},val:function(a){return typeof a=="string"?this.attr("value",a):this[0].value},removeAttr:function(a){return this.each(function(b){l.test(a)?b[a]=!1:b.removeAttribute(a)})},data:function(a,b){var c=this[0];if(typeof b=="undefined"){c[s]("data-node-uid")||c[r]("data-node-uid",++o);var d=c[s]("data-node-uid");return n[d]||(n[d]={}),n[d][a]}return this.each(function(c){c[s]("data-node-uid")||c[r]("data-node-uid",++o);var d=c[s]("data-node-uid"),e=n[d]||(n[d]={});e[a]=b})},remove:function(){return this.each(function(a){a[e]&&a[e].removeChild(a)})},empty:function(){return this.each(function(a){while(a.firstChild)a.removeChild(a.firstChild)})},detach:function(){return this.map(function(a){return a[e].removeChild(a)})},scrollTop:function(a){return K.call(this,null,a,"y")},scrollLeft:function(a){return K.call(this,a,null,"x")},toggle:function(a){return this.each(function(a){a.style.display=a.offsetWidth||a.offsetHeight?"none":"block"}),a&&a(),this}},N.setQueryEngine=function(a){f=a,delete N.setQueryEngine},N.aug=function(a,b){for(var c in a)a.hasOwnProperty(c)&&((b||I.prototype)[c]=a[c])},N.create=function(a){return typeof a=="string"?function(){var b=/^<([^\s>]+)/.exec(a),d=c.createElement(b&&k[b[1].toLowerCase()]||"div"),e=[];d.innerHTML=a;var f=d.childNodes;d=d.firstChild,e.push(d);while(d=d.nextSibling)d.nodeType==1&&e.push(d);return e}():A(a)?[a.cloneNode(!0)]:[]},N.doc=function(){var a=this.viewport();return{width:Math.max(c.body.scrollWidth,d.scrollWidth,a.width),height:Math.max(c.body.scrollHeight,d.scrollHeight,a.height)}},N.firstChild=function(a){for(var b=a.childNodes,c=0,d=b&&b.length||0,e;c<d;c++)b[c].nodeType===1&&(e=b[d=c]);return e},N.viewport=function(){return{width:m?d.clientWidth:self.innerWidth,height:m?d.clientHeight:self.innerHeight}},N.isAncestor="compareDocumentPosition"in d?function(a,b){return(a.compareDocumentPosition(b)&16)==16}:"contains"in d?function(a,b){return a!==b&&a.contains(b)}:function(a,b){while(b=b[e])if(b===a)return!0;return!1};var O=a.bonzo;return N.noConflict=function(){return a.bonzo=O,this},N});
// Envision.js
// (c) 2012 Carl Sutherland, Humble Software
// Distributed under the MIT License
// Source: http://www.github.com/HumbleSoftware/envisionjs
// Homepage: http://www.humblesoftware.com/envision
/**
 * The Envision namespace.
 * @namespace
 */
var envision={_:Flotr._,bean:Flotr.bean,bonzo:bonzo,noConflict:function(a){var b=a.envision;return function(){return a.envision=b,this}}(this)};(function(){function d(a){this.options=a||{},this.components=[],this.node=null,this.rendered=!1}var a="envision-first",b="envision-last",c='<div class="envision-visualization"></div>';T_COMPONENT_CONTAINER='<div class="envision-component-container"></div>',d.prototype={render:function(a){var b=this.options;a=a||b.element;if(!a)throw"No element to render within.";return this.node=bonzo.create(c)[0],bonzo(this.node).addClass(b.name||""),this.container=a,bonzo(a).append(this.node),bonzo(a).data("envision",this),_.each(this.components,function(a){this._renderComponent(a)},this),this._updateClasses(),this.rendered=!0,this},add:function(a){return this.components.push(a),this.rendered&&(this._renderComponent(a),this._updateClasses()),this},remove:function(a){var b=this.components,c=this.indexOf(a);return c!==-1&&(b.splice(c,1),bonzo(a.container).remove(),this._updateClasses()),this},setPosition:function(a,b){var c=this.components;return b>=0&&b<c.length&&this.remove(a)&&(this.rendered&&(b===c.length?this.node.appendChild(a.container):this.node.insertBefore(a.container,c[b].container)),c.splice(b,0,a),this._updateClasses()),this},indexOf:function(a){return _.indexOf(this.components,a)},getComponent:function(a){var b=this.components;if(a<b.length)return b[a]},isFirst:function(a){return this.indexOf(a)===0?!0:!1},isLast:function(a){return this.indexOf(a)===this.components.length-1?!0:!1},destroy:function(){_.each(this.components,function(a){a.destroy()}),bonzo(this.container).empty()},_renderComponent:function(a){var b=bonzo.create(T_COMPONENT_CONTAINER)[0];bonzo(this.node).append(b),a.render(b)},_updateClasses:function(){var c=this.components,d=0,e=c.length-1,f;_.each(c,function(c,g){f=bonzo(c.container),g===d?f.addClass(a):f.removeClass(a),g===e?f.addClass(b):f.removeClass(b)})}},envision.Visualization=d})(),function(){function d(b){b=b||{};var d=bonzo.create(c)[0];this.options=b,this.node=d,b.adapter?this.api=b.adapter:b.adapterConstructor?this.api=new b.adapterConstructor(b.config):b.adapterCallback?this.api=b.adapterCallback.call(null,b.config):b.config&&(this.api=new a.adapters.flotr.Child(b.config||{})),this.preprocessors=[]}var a=envision,b="envision-component",c='<div class="'+b+'"></div>';d.prototype={render:function(a){var b=this.node,c=this.options;a=a||c.element;if(!a)throw"No element to render within.";bonzo(a).addClass(c.name||"").append(this.node),this._setDimension("width"),this._setDimension("height"),this.container=a,this.draw(c.data,c.config)},draw:function(b,c){var d=this.api,e=this.options,f=this.preprocessors,g;g=b=b||e.data,c=c||e.config,!e.skipPreprocess&&b&&(g=[],_.each(d.getDataArray(b),function(h,i){var j=f[i]||new a.Preprocessor,k=_.isArray(h),l=_.isFunction(h),m=k?h:l?h:h.data,n=e.processData,o=d.range(c),p=o.min,q=o.max,r=this.node.clientWidth,s=h,t,u;!l&&!k&&(s=h.data,u=_.extend({},h)),l?t=b(p,q,r):(s!==j.data?j.setData(s):j.reset(),n?(n.apply(this,[{preprocessor:j,min:p,max:q,resolution:r}]),t=j.getData()):t=j.bound(p,q).subsampleMinMax(r).getData()),d.transformData&&(t=d.transformData(t)),u?(u.data=t,g.push(u)):g.push(t)},this)),d&&d.draw(g,c,this.node)},trigger:function(){this.api.trigger.apply(this.api,Array.prototype.concat.apply([this],arguments))},attach:function(){this.api.attach.apply(this.api,Array.prototype.concat.apply([this],arguments))},detach:function(){this.api.detach.apply(this.api,Array.prototype.concat.apply([this],arguments))},destroy:function(){this.api&&this.api.destroy&&this.api.destroy(),bonzo(this.container).empty()},_setDimension:function(a){var b=this.node,c=this.options;c[a]?bonzo(b).css(a,c[a]):c[a]=b.clientWidth,this[a]=c[a]}},a.Component=d}(),function(){function b(a){this.options=a=a||{},this.actions=[],this.actionOptions=[],this.followers=[],this.leaders=[],this.prevent={},a.leader&&this.leader(a.leader)}var a=envision;b.prototype={leader:function(a){return this.leaders.push(a),_.each(this.actions,function(b,c){this._bindLeader(a,b,this.actionOptions[c])},this),this},follower:function(a){return this.followers.push(a),this},group:function(a){return _.isArray(a)||(a=[a]),_.each(a,function(a){this.leader(a),this.follower(a)},this),this},add:function(a,b){return this.actions.push(a),this.actionOptions.push(b),_.each(this.leaders,function(c){this._bindLeader(c,a,b)},this),this},_bindLeader:function(a,b,c){_.each(b.events,function(b){var d=b.handler||b,e=b.consumer||b;a.attach(d,_.bind(function(a,b){if(this.prevent[name])return;c&&c.callback&&c.callback.call(this,b),this.prevent[name]=!0;try{_.each(this.followers,function(c){if(a===c)return;c.trigger(e,b)},this)}catch(d){throw this.prevent[name]=!1,d}this.prevent[name]=!1},this))},this)}},a.Interaction=b}(),function(){function a(a){a=a||{},this.getData=function(){return this.bounded&&d(this),this.processing},this.reset=function(){return this.processing=this.data,this},this.setData=function(a){var b,c;if(!_.isArray(a))throw new Error("Array expected.");if(a.length<2)throw new Error("Data must contain at least two dimensions.");c=a[0].length;for(b=a.length;b--;){if(!_.isArray(a[b]))throw new Error("Data dimensions must be arrays.");if(a[b].length!==c)throw new Error("Data dimensions must contain the same number of points.")}return this.processing=a,this.data=a,this},a.data&&this.setData(a.data)}function b(a,b){var c=_.sortedIndex(a,b);return a[c]>b&&c>0&&c--,c}function c(a,b){return _.sortedIndex(a,b)}function d(a){delete a.bounded;var d=a.processing,e=a.length(),f=d[0],g=d[1],h=a.min||0,i=a.max||e,j=b(f,h),k=c(f,i);a.processing=[f.slice(j,k+1),g.slice(j,k+1)],a.start=j,a.end=k}function e(a,b,c,d,e,f,g,h,i){var j=(a-d)/(f-d),k=1-j,l=(1+2*j)*k*k,m=j*k*k,n=j*j*(3-2*j),o=j*j*(j-1),p=(g-e)/(2*(f-d))+(typeof c=="undefined"?0:(e-c)/(2*(d-b))),q=(typeof i=="undefined"?0:(i-g)/(2*(h-f)))+(g-e)/(2*(f-d)),r=l*e+m*(f-d)*p+n*g+o*(f-d)*q;return r}a.prototype={length:function(){return this.getData()[0].length},bound:function(a,b){return!_.isNumber(a)||!_.isNumber(b)?this:(this.min=a,this.max=b,this.bounded=!0,this)},subsampleMinMax:function(a){var d=this.bounded;delete this.bounded;var e=this.processing,f=this.length(),g=e[0],h=e[1],i=d?b(g,this.min):0,j=d?c(g,this.max):f-1,k=(a-2)/2,l=[],m=[],n=Number.MAX_VALUE,o=-Number.MAX_VALUE,p=1,q=1,r=(j-i)/k,s,t,u,v;if(j-i+1>a){l.push(g[i]),m.push(h[i]),s=i+r;for(u=i;u<j;u++)u===Math.round(s)?(s+=r,v=Math.min(q,p),l.push(g[v]),m.push(h[v]),v=Math.max(q,p),l.push(g[v]),m.push(h[v]),p=u,n=h[p],q=u,o=h[q]):(h[u]>o&&(o=h[u],q=u),h[u]<n&&(n=h[u],p=u));u<s&&(l.push(g[p]),m.push(n),l.push(g[q]),m.push(o)),l.push(g[j]),m.push(h[j]),this.processing=[l,m],this.start=i,this.end=j}else this.bounded=d;return this},subsample:function(a){var d=this.bounded;delete this.bounded;var e=this.processing,f=this.length(),g=e[0],h=e[1],i=d?b(g,this.min):0,j=d?c(g,this.max):f-1,k=(j-i+1)/a,l=[],m=[],n,o;if(j-i+1>a){l.push(g[i]),m.push(h[i]);for(n=1;n<a;n++){if(n*k>=j-k)break;o=Math.round(n*k)+i,l.push(g[o]),m.push(h[o])}l.push(g[j]),m.push(h[j]),this.processing=[l,m],this.start=i,this.end=j}else this.bounded=d;return this},interpolate:function(a){var d=this.bounded;delete this.bounded;var f=this.processing,g=this.length(),h=f[0],i=f[1],j=d?b(h,this.min):0,k=d?c(h,this.max):g-1,l=(h[k]-h[j])/a,m=[],n=[],o,p,q;m.push(h[j]),n.push(i[j]);if(k-j+1<a){for(o=j;o<k;o++){q=h[o+1]-h[o],m.push(h[o]),n.push(i[o]);for(p=h[o+0]+l;p<h[o+1];p+=l)m.push(p),n.push(e(p,h[o-1],i[o-1],h[o+0],i[o+0],h[o+1],i[o+1],h[o+2],i[o+2]))}this.processing=[m,n],this.start=j,this.end=k}return this}},envision.Preprocessor=a}(),envision.actions=envision.actions||{},envision.actions.hit={events:["hit","mouseout"]},envision.actions.selection={events:[{handler:"select",consumer:"zoom"},{handler:"click",consumer:"reset"}]},envision.actions.zoom={events:[{handler:"select",consumer:"zoom"},"zoom","reset"]},envision.adapters=envision.adapters||{},envision.adapters.flotr={},envision.adapters.defaultOptions={grid:{outlineWidth:0,labelMargin:0,horizontalLines:!1,verticalLines:!1},bars:{show:!1,barWidth:.5,fill:!0,lineWidth:1,fillOpacity:1},lines:{lineWidth:1},xaxis:{margin:!1,tickDecimals:0,showLabels:!1},yaxis:{margin:!1,showLabels:!1},shadowSize:!1},function(){function e(a){this.options=a||{},this.flotr=null,this._flotrDefaultOptions()}function f(a,b){var c=a.options.config.selection.mode,d=a.api.flotr.axes,e,f,g,h,i;return c.indexOf("x")!==-1&&(e={},e.min=b.x1,e.max=b.x2,g={},g.min=d.x.d2p(b.x1),g.max=d.x.d2p(b.x2)),c.indexOf("y")!==-1&&(f={},f.min=b.y1,f.max=b.y2,h={},h.min=d.y.d2p(b.y1),h.max=d.y.d2p(b.y2)),i={data:{x:e,y:f},x:g,y:h},i}var a=envision,b=envision.adapters,c=Flotr.EventAdapter,d=b.defaultOptions;e.prototype={destroy:function(){this.flotr.destroy()},draw:function(a,b,c){var d=this.options;a=this.getDataArray(a||d.data),b?b=Flotr.merge(b,Flotr.clone(d)):b=d,d.data=a;if(!b)throw"No graph submitted.";this.flotr=Flotr.draw(c,a,b)},range:function(a){var b=a.xaxis;return{min:b.min,max:b.max}},transformData:function(a){var b=a[0].length,c=a.length,d=[],e,f,g;for(f=0;f<b;f++){e=[];for(g=0;g<c;g++)e.push(a[g][f]);d.push(e)}return d},getDataArray:function(a){return a[0]&&(!_.isArray(a[0])||!a[0].length||a[0][0]&&_.isArray(a[0][0]))?a:[a]},_flotrDefaultOptions:function(a){var b=a||this.options,c;for(c in d)d.hasOwnProperty(c)&&(_.isUndefined(b[c])?b[c]=d[c]:_.defaults(b[c],d[c]))},attach:function(a,b,d){var e=this.events[b]||{},f=e.handler||!1;return b=e.name||!1,f?c.observe(a.node,b,function(){var b=[a].concat(Array.prototype.slice.call(arguments)),c=f.apply(this,b);return d.apply(null,[a,c])}):!1},detach:function(a,b,d){return c.stopObserve(a.node,b,handler)},trigger:function(a,b,c){var d=this.events[b],e=d.consumer||!1;return e?e.apply(this,[a,c]):!1},events:{hit:{name:"flotr:hit",handler:function(a,b){var c=b.x,d=b.y,e=a.api.flotr,f;return f={data:{index:b.index,x:c,y:d},x:e.axes.x.d2p(c),y:e.axes.y.d2p(d)},f},consumer:function(a,b){var c=a.api.flotr,d;d={x:b.data.x,y:b.data.y||1,relX:b.x,relY:b.y||1},c.hit.hit(d)}},select:{name:"flotr:selecting",handler:f,consumer:function(a,b){var c=a.api.flotr,d=c.axes,e=b.data||{},f={},g=b.x,h=b.y;!g&&e.x?(g=e.x,f.x1=g.min,f.x2=g.max):g&&(f.x1=d.x.p2d(g.min),f.x2=d.x.p2d(g.max)),!h&&e.y?(h=e.y,f.y1=h.min,f.y2=h.max):h&&(f.y1=d.y.d2p(h.min),f.y2=d.y.d2p(h.max)),c.selection.setSelection(f)}},zoom:{name:"flotr:select",handler:function(a,b){var c=f(a,b);return a.trigger("zoom",c),c},consumer:function(a,b){var c=b.data.x,d=b.data.y,e={};c&&(e.xaxis={min:c.min,max:c.max}),d&&(e.yaxis={min:d.min,max:d.max}),a.draw(null,e)}},mouseout:{name:"flotr:mouseout",handler:function(a){},consumer:function(a){a.api.flotr.hit.clearHit()}},reset:{name:"flotr:click",handler:function(a){a.draw()},consumer:function(a){a.draw()}},click:{name:"flotr:click",handler:function(a){var b=a.api.flotr.axes.x.min,c=a.api.flotr.axes.x.max;return{data:{x:{min:b,max:c}},x:{min:a.api.flotr.axes.x.d2p(b),max:a.api.flotr.axes.x.d2p(c)}}},consumer:function(a,b){var c=b.data.x,d=b.data.y,e={};c&&(e.xaxis={min:c.min,max:c.max}),d&&(e.yaxis={min:d.min,max:d.max}),a.draw(null,e)}}}},b.flotr.Child=e}(),Flotr.addType("lite-lines",{options:{show:!1,lineWidth:2,fill:!1,fillBorder:!1,fillColor:null,fillOpacity:.4},draw:function(a){var b=a.context,c=a.lineWidth,d=a.shadowSize,e;b.save(),b.lineCap="butt",b.lineWidth=c,b.strokeStyle=a.color,this.plot(a),b.restore()},plot:function(a){var b=a.context,c=a.xScale,d=a.yScale,e=a.data,f=e.length-1,g=d(0),h,j;if(f<1)return;h=c(e[0][0]),j=d(e[0][1]),b.beginPath(),b.moveTo(h,j);for(i=0;i<f;++i)b.lineTo(c(e[i+1][0]),d(e[i+1][1]));(!a.fill||a.fill&&!a.fillBorder)&&b.stroke(),a.fill&&(h=c(e[0][0]),b.fillStyle=a.fillStyle,b.lineTo(c(e[f][0]),g),b.lineTo(h,g),b.lineTo(h,d(e[0][1])),b.fill(),a.fillBorder&&b.stroke())},extendYRange:function(a,b,c,d){var e=a.options;if(!e.max&&e.max!==0||!e.min&&e.min!==0)a.max+=c.lineWidth*.01,a.min-=c.lineWidth*.01}}),Flotr.addType("whiskers",{options:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,fillOpacity:.4,horizontal:!1,stacked:!1,centered:!0},stack:{positive:[],negative:[],_positive:[],_negative:[]},draw:function(a){var b=a.context;b.save(),b.lineJoin="miter",b.lineCap="butt",b.lineWidth=a.lineWidth,b.strokeStyle=a.color,a.fill&&(b.fillStyle=a.fillStyle),this.plot(a),b.restore()},plot:function(a){var b=a.data,c=a.context,d=a.shadowSize,e=a.xScale,f=a.yScale,g=f(0),h,i;if(b.length<1)return;c.translate(-a.lineWidth,0),c.beginPath();for(h=0;h<b.length;h++)i=e(b[h][0]),c.moveTo(i,g),c.lineTo(i,f(b[h][1]));c.closePath(),c.stroke()},drawHit:function(a){var b=a.args,c=a.context,d=a.shadowSize,e=a.xScale,f=a.yScale,g=f(0),h=e(b.x),i=f(b.y);c.save(),c.translate(-a.lineWidth,0),c.beginPath(),c.moveTo(h,g),c.lineTo(h,i),c.closePath(),c.stroke(),c.restore()},clearHit:function(a){var b=a.args,c=a.context,d=a.shadowSize,e=a.xScale,f=a.yScale,g=a.lineWidth,h=f(0),i=e(b.x),j=f(b.y);c.save(),c.clearRect(i-2*g,j-g,4*g,h-j+g),c.restore()}}),envision.components=envision.components||{},function(){function a(a){this.options=a||{}}a.prototype={height:null,width:null,rendered:!1,render:function(a){var b=document.createElement("canvas"),c=bonzo(a).offset();this.height=c.height,this.width=c.width,bonzo(b).attr("height",c.height).attr("width",c.width).css({position:"absolute",top:"0px",left:"0px"}),a.appendChild(b),bonzo(a).css({position:"relative"}),typeof FlashCanvas!="undefined"&&FlashCanvas.initElement(b),this.context=b.getContext("2d"),this.rendered=!0},draw:function(a,b,c){this.rendered||this.render(c);var d=this.context,e=this.height,f=this.width,g=Math.round(e/2)-.5,h,i;b=b||{min:f/2,max:f/2},h=b.min+.5,i=b.max+.5,d.clearRect(0,0,f,e);if(h||i)d.save(),d.strokeStyle=this.options.strokeStyle||"#B6D9FF",d.fillStyle=this.options.fillStyle||"rgba(182, 217, 255, .4)",d.beginPath(),h<=1?(d.moveTo(0,e),d.lineTo(0,-0.5)):(d.moveTo(h,e),d.quadraticCurveTo(h,g,Math.max(h-g,h/2),g),d.lineTo(Math.min(g,h/2),g),d.quadraticCurveTo(0,g,.5,-0.5)),d.lineTo(f-.5,-0.5),i>=f-1?d.lineTo(i,e):(d.quadraticCurveTo(f,g,Math.max(f-g,f-(f-i)/2),g),d.lineTo(Math.min(i+g,f-(f-i)/2),g),d.quadraticCurveTo(i,g,i,e)),d.stroke(),d.closePath(),d.fill(),d.restore()},trigger:function(a,b,c){b==="zoom"?this.zoom(a,c):b==="reset"&&this.reset(a)},zoom:function(a,b){var c=b.x||{},d=c.min,e=c.max,f=a.api;a.draw(null,{min:d,max:e})},reset:function(a){a.draw(null,{min:a.width/2,max:a.width/2})}},envision.components.QuadraticDrawing=a}(),envision.templates=envision.templates||{},function(){function b(a){var b=a.resolution;a.preprocessor.bound(a.min,a.max).subsampleMinMax(b+Math.round(b/3))}function c(){return{price:{name:"envision-finance-price",config:{"lite-lines":{lineWidth:1,show:!0,fill:!0,fillOpacity:.2},mouse:{track:!0,trackY:!1,trackAll:!0,sensibility:1,trackDecimals:4,position:"ne"},yaxis:{autoscale:!0,autoscaleMargin:.05,noTicks:4,showLabels:!0,min:0}},processData:b},volume:{name:"envision-finance-volume",config:{whiskers:{show:!0,lineWidth:2},mouse:{track:!0,trackY:!1,trackAll:!0},yaxis:{autoscale:!0,autoscaleMargin:.5}},processData:b},summary:{name:"envision-finance-summary",config:{"lite-lines":{show:!0,lineWidth:1,fill:!0,fillOpacity:.2,fillBorder:!0},xaxis:{noTicks:5,showLabels:!0},yaxis:{autoscale:!0,autoscaleMargin:.1},handles:{show:!0},selection:{mode:"x"},grid:{verticalLines:!1}}},connection:{name:"envision-finance-connection",adapterConstructor:a.components.QuadraticDrawing}}}function d(b){var d=b.data,e=c(),f=new a.Visualization({name:"envision-finance"}),g=new a.Interaction,h=new a.Interaction,i,j,k,l;b.defaults&&(e=Flotr.merge(b.defaults,e)),e.price.data=d.price,e.volume.data=d.volume,e.summary.data=d.summary,e.price.config.mouse.trackFormatter=b.trackFormatter||function(a){var b=a.index,c;return i.api.preprocessor&&(b+=i.api.preprocessor.start),c="Price: $"+d.price[1][b]+", Vol: "+d.volume[1][b],c},b.xTickFormatter&&(e.summary.config.xaxis.tickFormatter=b.xTickFormatter),e.price.config.yaxis.tickFormatter=b.yTickFormatter||function(a){return"$"+a},i=new a.Component(e.price),j=new a.Component(e.volume),k=new a.Component(e.connection),l=new a.Component(e.summary),f.add(i).add(j).add(k).add(l).render(b.container),g.follower(i).follower(j).follower(k).leader(l).add(a.actions.selection,b.selectionCallback?{callback:b.selectionCallback}:null),h.group([i,j]).add(a.actions.hit),b.selection&&l.trigger("select",b.selection),this.vis=f,this.selection=g,this.hit=h,this.price=i,this.volume=j,this.summary=l}var a=envision;a.templates.Finance=d}(),function(){function b(){return{detail:{name:"envision-timeseries-detail",config:{"lite-lines":{lineWidth:1,show:!0}}},summary:{name:"envision-timeseries-summary",config:{"lite-lines":{lineWidth:1,show:!0},handles:{show:!0},selection:{mode:"x"},yaxis:{autoscale:!0,autoscaleMargin:.1}}},connection:{name:"envision-timeseries-connection",adapterConstructor:a.components.QuadraticDrawing}}}function c(c){var d=c.data,e=b(),f=new a.Visualization({name:"envision-timeseries"}),g=new a.Interaction,h,i,j;c.defaults&&(e=Flotr.merge(c.defaults,e)),e.detail.data=d.detail,e.summary.data=d.summary,h=new a.Component(e.detail),j=new a.Component(e.connection),i=new a.Component(e.summary),f.add(h).add(j).add(i).render(c.container),g.follower(h).follower(j).leader(i).add(a.actions.selection,c.selectionCallback?{callback:c.selectionCallback}:null),c.selection&&i.trigger("select",c.selection),this.vis=f,this.selection=g,this.detail=h,this.summary=i}var a=envision;a.templates.TimeSeries=c}(),function(){function c(){return{name:"zoom"}}function d(){return{name:"summary",config:{handles:{show:!0},selection:{mode:"x"}}}}function e(a,b){var c=_.defaults(a,b);return c.flotr=_.defaults(c.flotr,b.flotr),c}var a=envision,b;b=function(b){var f=new a.Visualization,g=new a.Component(e(b.zoom||{},c())),h=new a.Component(e(b.summary||{},d())),i=new a.Interaction({leader:h});f.add(g).add(h),i.add(a.actions.selection),i.follower(g),this.vis=f,this.interaction=i,b.container&&this.render(b.container)},b.prototype={render:function(a){this.vis.render(a)}},a.templates.Zoom=b}()