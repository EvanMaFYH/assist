(function(e){var t={id:"e1facca62adb7a7ab01b25db2f685cf2",filename:"Util.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){var r=window,i=document,s=window.navigator.userAgent;var o=/^https:\/\//,u=/^http:\/\//;var a={logType:{pv:"pv",ac:"ac",pf:"pf",st:"st",er:"er",ex:"ex"},errorType:{script:"script",resource:"resource",ajax:"ajax",promise:"promise",mixedContent:"mixedContent"},platform:function(){if(/qunar/i.test(s))return"qunar";if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(s))return"touch";return"web"}(),generateUUID:function(){var e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return function(){return e()+e()}}(),getPageUrl:function(){return r.location.href},isHttpsHref:function(e){e=e||a.getPageUrl();return o.test(e)},isHttpHref:function(e){e=e||a.getPageUrl();return u.test(e)},isFunction:function(e){if(typeof e==="function"){return true}else{return false}},hashCode:function(e){var t=0,n,r,i;e=""+e;for(n=0,i=e.length;n<i;n++){r=e.charCodeAt(n);t=(t<<5)-t+r;t|=0}return t},getRefer:function(){var e=document.referrer;if(!e&&window.opener){try{e=window.opener.location.href}catch(t){}}return e},addEvent:function(e,t,n){i.addEventListener?e.addEventListener(t,n,false):e.attachEvent("on"+t,n)},removeEvent:function(e,t,n){i.removeEventListener?e.removeEventListener(t,n,false):e.detachEvent("on"+t,n)},domReady:function(e){if(i.addEventListener){if(/interactive|complete|loaded/.test(i.readyState)&&i.body){e()}else{a.addEvent(i,"DOMContentLoaded",e)}}else{var t,n,s;try{n=r.frameElement===null}catch(o){}t=i.documentElement;if(t&&n){s=setInterval(function(){try{t.doScroll();e();clearInterval(s)}catch(n){}},60)}}},load:function(e){a.addEvent(r,"load",e)},unload:function(e){if("onbeforeunload"in r){a.addEvent(r,"beforeunload",e)}else{a.addEvent(r,"unload",e)}},getCookie:function(e){e+="=";var t=i.cookie,n=t.indexOf(e),r=null,s;if(n>-1){s=t.indexOf(";",n);if(s===-1)s=t.length;r=t.substring(n+e.length,s)}return r},getSearch:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)");var n=r.location.search.substr(1).match(t);if(n!=null)return decodeURIComponent(n[2]);return null},getTime:function(){return+(new Date)}};t.exports=a}(t.exports,t,e);e.____MODULES["e1facca62adb7a7ab01b25db2f685cf2"]=t.exports})(this);(function(e){var t={id:"81969ec4b9d6d03265b8bdc4cc97794c",filename:"GA.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){var i=window,s=document,o="//qreport.qunar.com/s2/log/",u="QN267",a="QN268",f="qdsprevpageid",l="qdspageid";var c=e.____MODULES["e1facca62adb7a7ab01b25db2f685cf2"];var h={img:null,cpid:undefined,cppid:undefined,reqId:undefined,userKey:"",isIframe:function(){return window.top===window?false:true}(),cookiePD:function(){var e=i.location.hostname;if(/(\.qunar\.com)$/.test(e)){return"Path=/;Domain=.qunar.com;"}else{return"Path=/;Domain=."+e+";"}}(),cookieExpires:"Expires="+(new Date(1970,1,1)).toGMTString()+";",generatePageId:function(){if(!h.userKey){h._initUserKey()}return h.userKey+c.generateUUID()},generateRequestId:function(){if(!h.userKey){h._initUserKey()}return h.reqId=h.userKey+"_"+ +(new Date)+c.generateUUID()},init:function(){h._initPid();h._initUserKey();if(h.isIframe===false){h._initVisibility()}},_initPid:function(){var e=c.getCookie(a),t;s.cookie=a+"=;"+h.cookieExpires+h.cookiePD;if(e){t=e.split("|");h.cppid=t[0];h.cpid=t[1]}if(!h.cpid){h.refreshCpid()}},_delCpid:function(){s.cookie=u+"=;"+h.cookieExpires+h.cookiePD},_setCpid:function(){if(h.isIframe===false){s.cookie=u+"="+h.cpid+";"+h.cookiePD}},_initUserKey:function(){var e=c.getCookie("QN1")||c.getCookie("QunarGlobal")||c.getCookie("QN48")||c.generateUUID();e=c.hashCode(e);if(e<0){e="0"+(0-e)}else{e=""+e}h.userKey=e},_initVisibility:function(){var e,t,n=true;if(typeof document.hidden!=="undefined"){e="hidden";t="visibilitychange"}else if(typeof document.mozHidden!=="undefined"){e="mozHidden";t="mozvisibilitychange"}else if(typeof document.msHidden!=="undefined"){e="msHidden";t="msvisibilitychange"}else if(typeof document.webkitHidden!=="undefined"){e="webkitHidden";t="webkitvisibilitychange"}else{n=false}if(n===false){c.addEvent(i,"focus",function(){h._setCpid()})}else{if(s[e]===false){h._setCpid()}c.addEvent(s,t,function(){if(s[e]===false){h._setCpid()}})}},refreshCpid:function(){h.cppid=h.cpid;h.cpid=h.generatePageId();h._setCpid()},send:function(e,t){var n="";if(t===c.logType.pv){e.cppid=h.cppid}e.cpid=h.cpid;e.url=i.location.href;if(h.isIframe===true){e.i_fm=1}for(var r in e){if(e[r]!=undefined)n+=r+"="+encodeURIComponent(e[r])+"&"}h.img=new Image;h.img.onload=h.img.onerror=function(){h.img=null};h.img.src=o+t+"?"+n.slice(0,-1)},processUrl:function(){var e=/\?[^#]+/,t=new RegExp("(?:^|&)"+l+"=(?:[^&]*)(?:&|$)"),n=new RegExp("(?:^|&)"+f+"=(?:[^&]*)(?:&|$)");return function(r){var i=e.exec(r),s=i?i[0]:"?",o=l+"="+h.generatePageId(),u=f+"="+(h.upid||h.cpid);if(s.indexOf(l)===-1){s+="&"+o}else{s.replace(t,o)}if(s.indexOf(f)===-1){s+="&"+u}else{s.replace(n,u)}return r.replace(e,s)}}()};n.exports=h}(t.exports,t,e);e.____MODULES["81969ec4b9d6d03265b8bdc4cc97794c"]=t.exports})(this);(function(e){var t={id:"a1ba4d45e1ed201cf6e8f10a744d06df",filename:"MC.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){function c(e){var t=[];if(s.isHttpsHref()&&e){t=l(e)}return t}var i=document;var s=e.____MODULES["e1facca62adb7a7ab01b25db2f685cf2"];var o={img:"img",css:"link",script:"script"};var u={img:"src",link:"href",script:"src"};var a=function(e,t){return e.getAttribute(u[t])};var f=function(e){return i.getElementsByTagName(e)};var l=function(e){var t=[];var n=f(e);for(var r=0;r<n.length;r++){var i=n[r];var u=a(i,e);var l=false;if(u){if(s.isHttpHref(u)){l=true}if(e===o.css&&i.rel!=="stylesheet"){l=false}if(l===true){t.push({type:e,src:u})}}}return t};n.exports={imgMC:function(){return c(o.img)},cssMC:function(){return c(o.css)},scriptsMC:function(){return c(o.script)}}}(t.exports,t,e);e.____MODULES["a1ba4d45e1ed201cf6e8f10a744d06df"]=t.exports})(this);(function(e){var t={id:"58efd65afa316d189f9e49ec9357e067",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){function p(e,t){e=e||{};if(t===l.pv){if(h.isPvSend===false){h.isPvSend=true}else{i.refreshCpid();d.startTime=+(new Date)}e.rf=o.getRefer();e.sr=u.screen.width+"x"+u.screen.height;if(e.pn){h.pagename=e.pn}else{h.pagename=undefined}}else{if(!e.pn){e.pn=h.pagename}if(h.isPvSend===false){setTimeout(function(){if(!e.pn){e.pn=h.pagename}i.send(e,t)},1500);return}}i.send(e,t)}function v(e){if(e&&e.length>0){if(e.length>5){e.length=5}for(var t=0;t<e.length;t++){var n=e[t];d.er({type:c.mixedContent,msg:n.src})}}}function m(e){if(!e)return null;var t,n,r;if(e.nodeType===9)return null;if(e.nodeType===3)return m(e.parentNode);if(e.nodeType===1){if(e.nodeName.toLowerCase()==="html")return null;t=e.getAttribute("qrac-id");n=e.getAttribute("qrac-data");if(t)return{actionId:t,actionData:n};r=m(e.parentNode);return{actionId:r&&r.actionId||null,actionData:n||r&&r.actionData}}}function g(e,t,n,r,i){if(!e)return;if(!t)return;setTimeout(function(){var r={type:c.script,msg:e,file:t,line:n,stack:""};if(i&&i.stack){r.stack=i.stack.toString()}d.er(r)},0)}var i=e.____MODULES["81969ec4b9d6d03265b8bdc4cc97794c"],s=e.____MODULES["a1ba4d45e1ed201cf6e8f10a744d06df"],o=e.____MODULES["e1facca62adb7a7ab01b25db2f685cf2"];var u=window,a=document,f=o.isFunction,l=o.logType,c=o.errorType;var h={isPvSend:false,pagename:undefined};var d={GA:i,init:function(){i.init()},startTime:o.getTime(),pv:function(e){p(e,l.pv)},ac:function(e){if(!e)return;if(!e.acId&&!e.actionID)return;if(!e.acType&&!e.actionType)return;e.acId=e.acId||e.actionID;e.actionID=undefined;e.acType=e.acType||e.actionType;e.actionType=undefined;e.acData=e.acData||e.actionData;e.actionData=undefined;p(e,l.ac)},pf:function(e){if(!e)return;if(!e.cat)return;var t="t_"+e.cat;if(!e[t]){if(u.performance&&u.performance.timing){e[t]=o.getTime()-u.performance.timing.domLoading}else{e[t]=o.getTime()-d.startTime}}p(e,l.pf)},er:function(e){if(!e)return;if(!e.msg)return;if(e.stack&&e.stack.length>300){e.stack=e.stack.substr(0,300)}p(e,l.er)},st:function(e){if(!e)return;p(e,l.st)},ex:function(e){if(!e||!e.exId||!e.exType)return;p(e,l.ex)},intAutoMC:function(){if(o.isHttpsHref()){o.domReady(function(){setTimeout(function(){v(s.scriptsMC())},1500);setTimeout(function(){v(s.cssMC())},2e3)})}},initAutoAc:function(){o.addEvent(a,"click",function(e){var t;try{t=m(e.target||u.event)}catch(e){var n=new Image;n.src="//qreport.qunar.com/s2/log/qrerr?msg="+encodeURIComponent(e.message);return}if(t&&t.actionId){d.ac({acId:t.actionId,acType:"click",acData:t.actionData||undefined})}})},initAutoPf:function(){o.domReady(function(){var e={cat:"dom"};var t="",n="",r="",i="",s="";var a;if(u.performance&&u.performance.timing){var f=u.performance.timing;if(f.domainLookupEnd>0&&f.domainLookupStart){t=f.domainLookupEnd-f.domainLookupStart}if(f.connectEnd>0&&f.connectStart>0){n=f.connectEnd-f.connectStart}if(f.responseStart>0&&f.requestStart>0){r=f.responseStart-f.requestStart}if(f.responseEnd>0&&f.responseStart>0){i=f.responseEnd-f.responseStart}s=f.domContentLoadedEventStart-f.domLoading;a=[t,n,r,i,s]}else{s=o.getTime()-d.startTime;a=[s]}e.t_dom=a.join(",");d.pf(e)});o.load(function(){var e={cat:"load"};if(u.performance&&u.performance.timing){var t=u.performance.timing;e.t_load=t.loadEventStart-t.domLoading}else{e.t_load=o.getTime()-d.startTime}d.pf(e)})},initAutoAcPf:function(){var e,t;if(o.platform==="web"){e=function(){o.removeEvent(u,"click",e);o.removeEvent(u,"scroll",e);e=null;d.pf({cat:"ac",t_ac:o.getTime()-d.startTime})};o.addEvent(u,"click",e);o.addEvent(u,"scroll",e)}else{t=function(){o.removeEvent(u,"touchstart",t);t=null;d.pf({cat:"ac",t_ac:o.getTime()-d.startTime})};o.addEvent(u,"touchstart",t)}},initAutoSt:function(){o.unload(function(){d.st({t_st:o.getTime()-d.startTime})})},initAutoEr:function(){var e=u.onerror;u.onerror=function(t,n,r,i,s){g(t,n,r,i,s);if(f(e)){e(t,n,r,i,s)}}},initResourceError:function(){if(f(u.addEventListener)){u.addEventListener("error",function(e){var t=e.target||e.srcElement;if(!t){return}if(t===u){var n=e.filename;if(n&&n.indexOf(u.location.hostname)!==-1){g(e.message,e.filename,e.lineno,e.colno,e.error)}}else{var r=t.src||t.href;if(r){if(r.indexOf(u.location.hostname+u.location.pathname)!==-1){return}if(/(qunar|ctrip)/i.test(r)===false){return}if(/img/i.test(t.tagName)){var i=false;try{var s=(t.height||0)*(t.width||0);var o=(t.naturalHeight||0)*(t.naturalWidth||0);if(o===0){if(s>0){i=true}else{var a=t.getAttribute("alt");if(typeof a==="string"&&/\S/.test(a)){i=true}}}}catch(f){}if(i===false){return}}var l=["type:"+t.tagName];d.er({type:c.resource,msg:r,stack:l.join(",")})}}},true)}},initPromiseError:function(){var e=u.onunhandledrejection;u.onunhandledrejection=function(t){if(t&&t.reason){d.er({type:c.promise,msg:""+t.reason})}if(f(e)){e(t)}}},initAjaxError:function(){var e=function(e,t,n){if(e&&t&&n){var r=["method:"+t,"status:"+n];d.er({type:c.ajax,msg:e,stack:r.join(",")})}};o.domReady(function(){if(u.$&&u.$===u.jQuery){var t=$(a);var n=function(t,n,r,i){if(n&&r&&n.status>=400){e(r.url,r.type,n.status)}};if(f(t.on)){t.on("ajaxError",n)}else if(f(t.bind)){t.bind("ajaxError",n)}}});if(u.XMLHttpRequest&&u.XMLHttpRequest.prototype){var t=u.XMLHttpRequest.prototype;var n=t.open;var r=t.send;t.open=function(e,t){this.qreportMethod=e;this.qreportUrl=t;n.apply(this,arguments)};t.send=function(){var t=this;var n=this.onreadystatechange;this.onreadystatechange=function(){if(f(n)){n.apply(t,arguments)}if(t.readyState===4){if(t.status>=400){e(t.qreportUrl,t.qreportMethod,t.status)}}};r.apply(this,arguments)}}},processUrl:function(e){if(!e)return;return i.processUrl(e)}};n.exports=d}(t.exports,t,e);e.____MODULES["58efd65afa316d189f9e49ec9357e067"]=t.exports})(this);(function(e){var t={id:"2b3dd79d19def44568bf280ff4eff511",filename:"qreport.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){try{var i=e.____MODULES["58efd65afa316d189f9e49ec9357e067"];if(!window.QReport){i.init();i.pv();i.initAutoAc();i.initAutoPf();i.initAutoAcPf();i.initAutoEr();i.intAutoMC();i.initResourceError();i.initPromiseError();i.initAjaxError();window.QReport=i}}catch(s){var o=new Image;o.src="//qreport.qunar.com/s2/log/qrerr?msg="+encodeURIComponent(s.message)}}(t.exports,t,e);e.____MODULES["2b3dd79d19def44568bf280ff4eff511"]=t.exports})(this)