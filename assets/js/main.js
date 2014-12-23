(function(){var e,t,n,r,o,i,a,s,c,u,l,f,h,d,p,m,g,w=[].slice,b={}.hasOwnProperty,y=function(e,t){for(var n in t){if(b.call(t,n))e[n]=t[n]}function r(){this.constructor=e}r.prototype=t.prototype;e.prototype=new r;e.__super__=t.prototype;return e};o={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs",styles:["default","mega"]};if(o.script=document.getElementById(o.scriptId)){o.url=o.script.src.replace(/[?#].*$/,"").replace(/buttons.js$/,"")}s=function(){var e;function t(){}t.flatten=function(t){var n,r;n=function(t,o){var i,a,s,c,u,l;switch(e.call(t)){case"[object Object]":for(s in t){c=t[s];n(c,o?""+o+"."+s:s)}break;case"[object Array]":for(i=u=0,l=t.length;u<l;i=++u){a=t[i];n(a,o?""+o+"["+i+"]":"["+i+"]")}break;default:r[o]=t}};r={};n(t);return r};t.expand=function(t){var n,r,o,i,a,s,c,u,l,f,h,d,p,m;a=[];for(n in t){u=t[n];o=[];p=n.split(".");for(l=0,h=p.length;l<h;l++){r=p[l];i=r.match(/^(.*?)((?:\[[0-9]+\])*)$/);if(i[1]){o.push(i[1])}if(i[2]){m=i[2].replace(/^\[|\]$/g,"").split("][");for(f=0,d=m.length;f<d;f++){s=m[f];o.push(Number(s))}}}c=a;r=0;while(o.length){if(c[r]==null){switch(e.call(o[0])){case"[object String]":c[r]={};break;case"[object Number]":c[r]=[]}}c=c[r];r=o.shift()}c[r]=u}return a[0]};e=Object.prototype.toString;return t}();p=function(){function e(){}e.stringify=function(e){var t,n,r;n=[];for(t in e){r=e[t];if(r==null){r=""}n.push(""+t+"="+r)}return n.join("&")};e.parse=function(e){var t,n,r,o,i,a,s,c;n={};s=e.split("&");for(i=0,a=s.length;i<a;i++){r=s[i];if(!(r!=="")){continue}c=r.split("="),t=c[0],o=2<=c.length?w.call(c,1):[];if(t!==""){n[t]=o.join("=")}}return n};return e}();l=function(){function e(){}e.encode=function(e){return"#"+encodeURIComponent(p.stringify(s.flatten(e)))};e.decode=function(e){if(e==null){e=document.location.hash}return s.expand(p.parse(decodeURIComponent(e.replace(/^#/,""))))||{}};return e}();a=function(){var e,t,n,r,o,i,a;function s(e,t){this.element=e&&e.nodeType===1?e:document.createElement(e);if(t){t.apply(this,[this.element])}}s.prototype.get=function(){return this.element};s.prototype.on=function(){var e,n,r,o,i,a,s;r=2<=arguments.length?w.call(arguments,0,i=arguments.length-1):(i=0,[]),o=arguments[i++];e=function(e){return function(t){return o.apply(e,[t||window.event])}}(this);for(a=0,s=r.length;a<s;a++){n=r[a];t(this.element,n,e)}};s.prototype.once=function(){var e,n,r,o,i,s,c;r=2<=arguments.length?w.call(arguments,0,i=arguments.length-1):(i=0,[]),o=arguments[i++];e=function(t){return function(n){var i,s,c;for(s=0,c=r.length;s<c;s++){i=r[s];a(t.element,i,e)}return o.apply(t,[n||window.event])}}(this);for(s=0,c=r.length;s<c;s++){n=r[s];t(this.element,n,e)}};s.prototype.addClass=function(t){if(!n(this.element,t)){e(this.element,t)}};s.prototype.removeClass=function(e){if(n(this.element,e)){i(this.element,e)}};s.prototype.hasClass=function(e){return n(this.element,e)};t=function(e,t,n){if(e.addEventListener){e.addEventListener(""+t,n)}else{e.attachEvent("on"+t,n)}};a=function(e,t,n){if(e.removeEventListener){e.removeEventListener(""+t,n)}else{e.detachEvent("on"+t,n)}};o=/[ \t\n\f\r]+/g;r=/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g;e=function(e,t){e.className+=" "+t};i=function(e,t){e.className=(" "+e.className+" ").replace(o," ").replace(" "+t+" ","").replace(r,"")};n=function(e,t){return(" "+e.className+" ").replace(o," ").indexOf(" "+t+" ")>=0};return s}();u=function(e){y(t,e);function t(e){t.__super__.constructor.call(this,"iframe",function(t){var n,r,o,i;o={allowtransparency:true,scrolling:"no",frameBorder:0};for(n in o){r=o[n];t.setAttribute(n,r)}i={border:"none",height:"0",width:"1px"};for(n in i){r=i[n];t.style[n]=r}if(e){e.apply(this,[t])}})}t.prototype.html=function(e){var t;try{t=this.element.contentWindow.document;t.open();t.write(e);t.close()}catch(n){}};t.prototype.load=function(e){return this.element.src=e};t.prototype.size=function(){var e,t,n,r;try{t=this.element.contentWindow.document;n=t.documentElement;e=t.body;n.style.overflow=e.style.overflow=window.opera?"scroll":"visible";r={width:""+e.scrollWidth+"px",height:""+e.scrollHeight+"px"};n.style.overflow=e.style.overflow="";return r}catch(o){return{}}};t.prototype.resize=function(e){var t,n,r;r=e!=null?e:this.size(),n=r.width,t=r.height;if(n){this.element.style.width=n}if(t){return this.element.style.height=t}};return t}(a);e=function(){var e;function t(){}t.parse=function(t){return{href:e(t.href),text:t.getAttribute("data-text")||t.textContent||t.innerText,data:{count:{api:function(){var e;if(e=t.getAttribute("data-count-api")){if("/"!==e.charAt(0)){e="/"+e}return e}}(),href:function(){var n;if((n=t.getAttribute("data-count-href"))&&(n=e(n))){return n}else{return e(t.href)}}()},style:function(){var e,n,r,i,a;if(n=t.getAttribute("data-style")){a=o.styles;for(r=0,i=a.length;r<i;r++){e=a[r];if(e===n){return n}}}return o.styles[0]}(),icon:function(){var e;if(e=t.getAttribute("data-icon")){return e}}()}}};e=function(e){if(!/^\s*javascript:/i.test(e)){return e}};return t}();t=function(e){y(t,e);function t(){var e,n,r;n=arguments[0],e=2<=arguments.length?w.call(arguments,1):[];t.__super__.constructor.call(this,e[0]);r=function(t){return function(){var r;r=t.size();t.once("load",function(){this.resize(r);if(e[1]){e[1](this.get())}});t.load(""+o.url+"buttons.html"+n)}}(this);this.once("load",function(){var e,t;if(t=this.get().contentWindow.callback){e=t.script;if(e.readyState){new a(e).on("readystatechange",function(){if(/loaded|complete/.test(e.readyState)){r()}})}else{new a(e).on("load","error",function(){r()})}}else{r()}});this.html('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<base target="_blank"><!--[if lte IE 6]></base><![endif]-->\n<link rel="stylesheet" href="'+o.url+'assets/css/buttons.css">\n<style>html{visibility:hidden;}</style>\n<script>document.location.hash = "'+n+'";</script>\n</head>\n<body>\n<script src="'+o.script.src+'"></script>\n</body>\n</html>')}return t}(u);n=function(){var e,t;function n(n){if(n&&n.data){document.body.className=n.data.style;document.getElementsByTagName("base")[0].href=n.href;new e(n,function(e){document.body.appendChild(e)});new t(n,function(e){document.body.appendChild(e)})}}e=function(e){y(t,e);function t(e,n){t.__super__.constructor.call(this,"a",function(t){t.className="button";if(e.href){t.href=e.href}new a("i",function(n){n=document.createElement("i");n.className=function(){var t;t=[e.data.icon||o.icon];if(o.iconClass){t.push(o.iconClass)}return t.join(" ")}();t.appendChild(n)});new a("span",function(e){e.appendChild(document.createTextNode(" "));t.appendChild(e)});new a("span",function(n){if(e.text){n.appendChild(document.createTextNode(e.text))}t.appendChild(n)});if(n){n(t)}})}return t}(a);t=function(e){y(t,e);function t(e,n){if(e.data.count.api){t.__super__.constructor.call(this,"a",function(t){t.className="count";if(e.data.count.href){t.href=e.data.count.href}new a("b",function(e){t.appendChild(e)});new a("i",function(e){t.appendChild(e)});new a("span",function(r){var i;t.appendChild(r);i=function(){var t,n;n=e.data.count.api.split("#")[0];t=p.parse(n.split("?").slice(1).join("?"));t.callback="callback";return""+n.split("?")[0]+"?"+p.stringify(t)}();new a("script",function(a){var c;a.async=true;a.src=""+o.api+i;window.callback=function(o){var i;window.callback=null;if(o.meta.status===200){i=s.flatten(o.data)[e.data.count.api.split("#").slice(1).join("#")];if(Object.prototype.toString.call(i)==="[object Number]"){i=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}r.appendChild(document.createTextNode(" "+i+" "));if(n){n(t)}}};window.callback.script=a;this.on("error",function(){window.callback=null});if(a.readyState){this.on("readystatechange",function(){if(a.readyState==="loaded"&&a.children&&a.readyState==="loading"){window.callback=null}})}c=document.getElementsByTagName("head")[0];c.insertBefore(a,c.firstChild)})})})}}return t}(a);return n}();c=function(e){y(t,e);function t(e,t){var n,r,o,i;this.element=e;if(t){n=function(e){return function(){t(e.serialize())}}(this);i=this.element.elements;for(r=0,o=i.length;r<o;r++){e=i[r];this.on.call({element:e},"change",n);if(e.type==="text"){this.on.call({element:e},"input",n)}}}}t.prototype.serialize=function(){var e,t,n,r,o;e={};o=this.element.elements;for(n=0,r=o.length;n<r;n++){t=o[n];if(t.name){switch(t.type){case"radio":case"checkbox":if(t.checked){e[t.name]=t.value}break;default:e[t.name]=t.value}}}return e};t.prototype.parse=function(){return t.parse(this.serialize())};t.parse=function(e){var t,n,r,o;r=e.type,o=e.user,n=e.repo;t={className:"github-button",href:function(){switch(r){case"follow":return"https://github.com/"+o;case"watch":case"star":case"fork":return"https://github.com/"+o+"/"+n;case"issue":return"https://github.com/"+o+"/"+n+"/issues";case"download":return"https://github.com/"+o+"/"+n+"/archive/master.zip";default:return"https://github.com/"}}(),text:function(){switch(r){case"follow":return"Follow @"+o;default:return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}}(),data:{icon:function(){switch(r){case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-git-branch";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download";default:return"octicon-mark-github"}}()}};if(e["large-button"]!=null){t.data.style="mega"}if(e["show-count"]!=null){switch(r){case"follow":t.data["count-href"]="/"+o+"/followers";t.data["count-api"]="/users/"+o+"#followers";break;case"watch":t.data["count-href"]="/"+o+"/"+n+"/watchers";t.data["count-api"]="/repos/"+o+"/"+n+"#subscribers_count";break;case"star":t.data["count-href"]="/"+o+"/"+n+"/stargazers";t.data["count-api"]="/repos/"+o+"/"+n+"#stargazers_count";break;case"fork":t.data["count-href"]="/"+o+"/"+n+"/network";t.data["count-api"]="/repos/"+o+"/"+n+"#forks_count";break;case"issue":t.data["count-api"]="/repos/"+o+"/"+n+"#open_issues_count"}}if(e["standard-icon"]!=null||t.data.icon==="octicon-mark-github"){delete t.data.icon}return t};return t}(a);i=function(e){y(t,e);function t(e){this.element=e;this.on("load",function(e){return function(){var t,n,r,o;o=e.element.contentWindow.document.getElementsByTagName("a");for(n=0,r=o.length;n<r;n++){t=o[n];e.on.call({element:t},"click",function(e){e.preventDefault();return false})}e.on.call({element:e.element.contentWindow.document.body},"click",function(){e.element.parentNode.click()})}}(this))}return t}(a);f=function(e){y(t,e);function t(e,n){var r,i,a;i=e.href,a=e.text,r=e.data;t.__super__.constructor.call(this,"a",function(e){var t,s;e.className=o.anchorClass;e.href=i;e.appendChild(document.createTextNode(""+a));for(t in r){s=r[t];e.setAttribute("data-"+t,s)}if(n){n(e)}})}return t}(a);d=function(e){y(t,e);function t(e){this.element=e;this.on("load",function(e){return function(){var t,n,r,o,i;if(e.element.contentWindow.callback){n=e.element.contentWindow.callback.script;if(n.readyState){e.on.call({element:n},"readystatechange",function(){if(/loaded|complete/.test(n.readyState)){e.resize()}})}else{i=["load","error"];for(r=0,o=i.length;r<o;r++){t=i[r];e.on.call({element:n},t,function(){e.resize()})}}}else{e.resize()}}}(this))}t.prototype.load=function(e){this.element.parentNode.style.height=""+((e.data.style==="mega"?28:20)+2)+"px";this.element.style.width="1px";this.element.style.height="0";this.element.src="buttons.html"+l.encode(e);this.element.contentWindow.document.location.reload()};return t}(u);h=function(t){y(n,t);function n(e,t){this.element=e;this.ui=t;this.on("click",function(e){return function(){event.preventDefault();e.preview();return false}}(this))}n.prototype.preview=function(t,n){if(t==null){t=this.ui.form.parse()}if(n==null){n=false}new f(t,function(t){return function(r){t.ui.code.element.value="<!-- Place this tag where you want the button to render. -->\n"+r.outerHTML;if(n){r.removeAttribute("data-count-api")}t.ui.preview_frame.load(e.parse(r));r=null}}(this))};return n}(a);r=function(e){y(t,e);function t(e){this.element=e;this.on("focus",function(e){return function(){e.element.select()}}(this));this.on("click",function(e){return function(){e.element.select()}}(this));this.on("mouseup",function(){event.preventDefault();return false})}return t}(a);m=function(e){y(t,e);function t(){t.__super__.constructor.apply(this,arguments);this.element.value='<!-- Place this tag right after the last button or just before your close body tag. -->\n<script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>'}return t}(r);g=function(){function e(){var e,t,n,o;o=document.getElementsByTagName("iframe");for(t=0,n=o.length;t<n;t++){e=o[t];if(e.parentNode.id==="preview"){this.preview_frame=new d(e)}else{new i(e)}}this.content=new a(document.getElementById("content"));this.form=new c(document.getElementById("button-config"),function(e){return function(t){var n,r,o,i,a,s,u;if(t.type){s=["repo","standard-icon"];for(r=0,i=s.length;r<i;r++){n=s[r];e.form.element.elements[n].disabled=t.type==="follow"}u=["show-count"];for(o=0,a=u.length;o<a;o++){n=u[o];e.form.element.elements[n].disabled=t.type==="download"}if(t["show-count"]!=null&&t.type!=="download"){e.preview_button.removeClass("hidden")}else{e.preview_button.addClass("hidden")}if(!((!t.user||/^[a-z0-9][a-z0-9-]*$/i.test(t.user))&&(t.type==="follow"||!t.repo||/^[\w.-]+$/.test(t.repo)&&!/^\.\.?$/.test(t.repo)))){e.user_repo.addClass("has-error")}else{e.user_repo.removeClass("has-error");if(t.user===""||t.type!=="follow"&&t.repo===""){e.user_repo.addClass("has-warning")}else{e.user_repo.removeClass("has-warning")}}if(e.user_repo.hasClass("has-error")||e.user_repo.hasClass("has-warning")){t.user="ntkme";t.repo="github-buttons";e.preview_button.addClass("hidden");e.preview_button.preview(c.parse(t))}else{e.preview_button.preview(c.parse(t),true)}e.content.removeClass("hidden")}}}(this));this.user_repo=new a(document.getElementById("user-repo"));this.preview_button=new h(document.getElementById("preview-button"),this);this.code=new r(document.getElementById("code"));this.snippet=new m(document.getElementById("snippet"))}return e}();new g;this.onbeforeunload=function(){}}).call(this);
//# sourceMappingURL=main.js.map