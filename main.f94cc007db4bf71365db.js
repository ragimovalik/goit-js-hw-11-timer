(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{HQse:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,i=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="field">\r\n    <span class="value" data-value="'+i("function"==typeof(r=null!=(r=c(n,"field")||(null!=t?c(t,"field"):t))?r:s)?r.call(l,{name:"field",hash:{},data:o,loc:{start:{line:3,column:36},end:{line:3,column:45}}}):r)+'">'+i("function"==typeof(r=null!=(r=c(n,"field")||(null!=t?c(t,"field"):t))?r:s)?r.call(l,{name:"field",hash:{},data:o,loc:{start:{line:3,column:47},end:{line:3,column:56}}}):r)+'</span>\r\n    <span class="label">:</div>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:5,column:9}}}))?r:""},useData:!0})},L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO"),n("e+qc");var a=n("HQse"),o=n.n(a)()([{field:"days"},{field:"hours"},{field:"mins"},{field:"secs"}]);new(function(){function e(e){var t=e.selector,n=e.targetDate;this.selector=t,this.targetDate=n}var t=e.prototype;return t.init=function(){var e=this;this.setMarkup(),setInterval((function(){var t=new Date,n=e.targetDate-t;if(n<=0)return e.calculator(0);var a=e.calculator(n);e.countdown(a)}),1e3)},t.setMarkup=function(){var e=this.selector,t=document.querySelector(""+e),n=document.querySelector(".main__description");t.insertAdjacentHTML("afterbegin",o);var a=this.targetDate.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"});n.textContent="Target date is "+a},t.calculator=function(e){return{days:this.pad(Math.floor(e/864e5)),hours:this.pad(Math.floor(e%864e5/36e5)),mins:this.pad(Math.floor(e%36e5/6e4)),secs:this.pad(Math.floor(e%6e4/1e3))}},t.countdown=function(e){var t=e.days,n=e.hours,a=e.mins,o=e.secs,r={days:document.querySelector('span[data-value="days"]'),hours:document.querySelector('span[data-value="hours"]'),mins:document.querySelector('span[data-value="mins"]'),secs:document.querySelector('span[data-value="secs"]')};r.days.textContent=t,r.hours.textContent=n,r.mins.textContent=a,r.secs.textContent=o,r.secs.nextElementSibling.textContent=""},t.pad=function(e){return String(e).padStart(2,"0")},e}())({selector:"#timer-1",targetDate:new Date("Jul 17, 2021")}).init()}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.f94cc007db4bf71365db.js.map