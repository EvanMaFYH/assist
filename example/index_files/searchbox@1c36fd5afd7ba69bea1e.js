(function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:false};e[r].call(i.exports,i,i.exports,n);i.loaded=true;return i.exports}var t={};n.m=e;n.c=t;n.p="//q.qunarzz.com/homenode/prd/";return n(0)})({0:function(e,t,n){e.exports=n(193)},193:function(e,t){(function(){function r(e){return n.replace(/%TYPE%/g,e).replace(/%TYPE_VALUE%/g,t[e])}function c(e){var t=[];for(var n in e){t.push(n)}return t}function h(e,t){var n=[];for(var r=0;r<e.length;r++){if(t(e[r],r,e)===true){n.push(e[r])}}return n}function p(e,t){var n=false;for(var r=0;r<e.length;r++){if(e[r]===t){n=true}}return n}function d(){var e=location.search.length>0?location.search.substring(1):"",t={},n=e.length?e.split("&"):[],r=null,i=null,s=null,o=0,u=n.length;for(o=0;o<u;o++){r=n[o].split("=");i=decodeURIComponent(r[0]);s=decodeURIComponent(r[1]);if(i.length){t[i]=s}}return t}function m(){var e={};var t=i.length;for(var n=0;n<t;n++){e[i[n]]=[0,0,t-n]}for(n=0;n<l.length;n++){e[l[n]][0]+=n+1}if(window.localStorage){var r=[];r=localStorage.getItem("__SEARCHBOX_CLICK_INFO__")||"[]";try{r=JSON.parse(r)}catch(s){r=[]}var o={};for(n=0;n<r.length;n++){var u=r[n];o[u]=o[u]+1||1}var a=c(o);for(n=0;n<a.length;n++){var f=a[n];if(e[f]){e[f][1]+=o[f]}}}return e}function g(e,t){if(t){e=h(e,function(e,n){return p(t,n)!==-1})}var n=0;for(var r=0;r<e.length;r++){n+=v[r]*e[r]}return n}function y(e,t){return c(e).sort(function(n,r){return g(e[r],t)-g(e[n],t)})}function b(e,t,n){return e.replace(/(class="c_)(.*)( js-searchnav.* )(class="c_corner ")/,function(e,r,i,s,o){var a=n===i;if(a){setTimeout(function(){window.gaClk&&window.gaClk("searchbox_default_tab:"+i);window.QReport&&window.QReport.ac&&window.QReport.ac({acId:"searchbox_default_tab:"+i,acType:"click",acData:""})},1e3)}var f=(a?" cur ":" ")+t;o+=u[i]?" ":"hide ";var l="";if(u[i]){l='style="background-image: url('+u[i]+')"'}return r+i+f+s+o+l})}function w(e,t){var n="";var i=e.length;for(var s=0;s<e.length;s++){var o=e[s];var u="";if(s===0){u="first"}else if(s===i-1){u="last"}n+=b(r(o),u,t)}return n}var e=typeof e==="function"&&!e.amd?e:false;var t={flight:"机票",hotel:"酒店",train:"火车票","package":"度假",piao:"门票",tuan:"团购",car:"车车",freetrip:"自由行"};var n='<li class="c_%TYPE% js-searchnav " data-for="%TYPE%"><a data-beacon="顶部一级tab-%TYPE_VALUE%" href="javascript:;" rel="nofollow">%TYPE_VALUE%<i id="cor-%TYPE%" class="c_corner "></i></a></li>';var i=["flight","hotel","train","package","piao","tuan","freetrip"];var s=window.__QC_SEARCH_DATA;var o=s.defaultKey;var u=s.cornerImg||[];var a=s.sort_personalise===true;var f=s.selected_personalise===true;var l=s.tops||[];l.reverse();var v=[1e4,100,1];var E=i;var S=d();var x=S.tab||o;var T=m();if(a){E=y(T)}if(f){if(!x){var N=y(T,[1,2])||[];x=N[0]||x}}var C=document.getElementById("js_searchbox_"+x);C.style.display="block";window.__ACTIVE_TAB=x;var k=document.getElementById("js_nva_cgy");k.innerHTML=w(E,x);if(window.addEventListener){var L="__SEARCHBOX_CLICK_INFO__";var A=function(){if(!window.localStorage){return}var e=window.__CURRENT_ACTIVE_TAB;if(!e){return}var t=localStorage.getItem(L)||"[]";try{t=JSON.parse(t)}catch(n){t=[]}t.push(e);if(t.length>10){t=t.slice(t.length-10)}localStorage.setItem(L,JSON.stringify(t))};var O=document.getElementById("js_searchbox");O.addEventListener("click",function(e){if(e.target){var t=e.target.getAttribute("class")||"";if(t.match("button-search")){A()}}},{capture:true})}}).call(window)}})