<script id="527cdbede963b74fa0bfe90c55b0eb70-1" data-nitro-for-id="527cdbede963b74fa0bfe90c55b0eb70-1" type="nitropack/inlinescript" class="nitropack-inline-script">function fetchTokenFromQuery(){let e=window.location.search;let n=new URLSearchParams(e);let o=n.get("token");return o}(function(e){var n=document.createElement("script");n.type="text/javascript";n.async=true;n.src=e;var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)})("//experience-eu.piano.io/xbuilder/experience/load?aid=HG7T6Sg1pe");tp=window.tp||[];tp.push(["setUsePianoIdUserProvider",true]);tp.push(["init",function(){tp.pianoId.init({loggedIn:function(e){document.cookie="tpuser="+e.user.uid+";domain=.unherd.com;path=/";jQuery(".piano-login-link").addClass("loggedin").html('<a href="/my-subscription">My Account</a>');if(jQuery(".wc_name.wpd-field").length>0){var n=e.user.firstName;var o=e.user.lastName;if("undefined"==typeof n&&"undefined"==typeof o){n="UnHerd";o="Reader"}else if("undefined"==typeof o){o=""}else if("undefined"==typeof n){n=""}jQuery(".wc_name.wpd-field").val(n+" "+o);if(jQuery(".wc_email.wpd-field").length>0){jQuery(".wc_email.wpd-field").val(e.user.email)}};},loggedOut:function(){document.cookie="tpuser=;domain=.unherd.com;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";document.cookie="tpuser=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";jQuery(".piano-login-link").removeClass("loggedin").html('<a href="/my-subscription">Log In</a>')}});if(!tp.pianoId.isUserValid()&&fetchTokenFromQuery()){tp.pianoId.loginByToken(fetchTokenFromQuery())}}]);tp.push(["setLocale","en_GB"]);tp.push(["addHandler","loginSuccess",function(){params=[];user_id=login.params.uid;website_language="en";if(31500==user_id){jQuery.ajax({type:"post",dataType:"json",url:ajaxurl,data:{action:"unherd_update_edition_language",user_id:user_id,website_language:website_language},success:function(e){console.log(e)}})}tp.api.callApi("/access/list",{},function(e){if(typeof e.data!="undefined"){for(var n in e.data){if(e.data[n].granted){tp.offer.close();location.reload()}}}})}]);tp.push(["addHandler","checkoutComplete",function(e){gtag("event","purchase",{transaction_id:e.termConversionId,value:e.chargeAmount,currency:e.chargeCurrency,items:[{item_id:e.termId,item_name:e.termId,price:e.chargeAmount,quantity:1}]})}]);tp.push(["addHandler","showTemplate",function(e){console.log("Show Template");console.log(e);if("OT8DR40KDO2T"==e.templateId){gtag("event","regwallDisplay")}tp.push(["addHandler","registrationSuccess",function(n){console.log("Registration Success");if("OT8DR40KDO2T"==e.templateId){gtag("event","regwallConversion")}gtag("event","templateConversion",{"template_id":e.templateId})}]);tp.push(["addHandler","loginSuccess",function(){console.log("Regwall Login Success");if("OT8DR40KDO2T"==e.templateId){gtag("event","regwallLogin")}gtag("event","templateLogin",{"template_id":e.templateId})}])}]);jQuery(document).ready(function(){jQuery(".piano-login-link").click(function(e){if(true==jQuery(this).hasClass("loggedin")){}else{e.preventDefault();tp.pianoId.show({loggedIn:function(e){document.cookie="tpuser="+e.user.uid+";domain=.unherd.com;path=/";if(jQuery(".piano-login-link").length>0){jQuery(".piano-login-link").addClass("loggedin").html('<a href="/my-subscription">My Account</a>')}location.reload()},loggedOut:function(){document.cookie="tpuser=;domain=.unherd.com;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";document.cookie="tpuser=;h=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";jQuery(".piano-login-link").removeClass("loggedin").html('<a href="/my-subscription">Log In</a>')},registrationSuccess:function(e){document.cookie="tpuser="+e.user.uid+";domain=.unherd.com;path=/";if(jQuery(".piano-login-link").length>0){jQuery(".piano-login-link").addClass("loggedin").html('<a href="/my-subscription">My Account</a>')}location.reload()}})}});jQuery(".piano-logout-link").click(function(e){tp.pianoId.logout(function(){window.location.replace("/")})});jQuery("a#btn-login").click(function(e){e.preventDefault();tp.pianoId.show({loggedIn:function(e){document.cookie="tpuser="+e.user.uid+";domain=.unherd.com;path=/";if(jQuery(".piano-login-link").length>0){jQuery(".piano-login-link").addClass("loggedin").html('<a href="/my-subscription">My Account</a>')}location.reload()},loggedOut:function(){document.cookie="tpuser=;domain=.unherd.com;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";document.cookie="tpuser=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";jQuery(".piano-login-link").removeClass("loggedin").html('<a href="/my-subscription">Log In</a>')},registrationSuccess:function(e){document.cookie="tpuser="+e.user.uid+";domain=.unherd.com;path=/";if(jQuery(".piano-login-link").length>0){jQuery(".piano-login-link").addClass("loggedin").html('<a href="/my-subscription">My Account</a>')}location.reload()}})});jQuery(".home #gform_submit_button_10").click(function(e){if(true!=tp.pianoId.isUserValid()){e.preventDefault();tp.pianoId.show({screen:"register",registrationSuccess:function(e){document.cookie="tpuser="+e.user.uid+";domain=.unherd.com;path=/";if(jQuery(".piano-login-link").length>0){jQuery(".piano-login-link").addClass("loggedin").html('<a href="/my-subscription">My Account</a>')}location.reload()},loggedIn:function(e){document.cookie="tpuser="+e.user.uid+";domain=.unherd.com;path=/";if(jQuery(".piano-login-link").length>0){jQuery(".piano-login-link").addClass("loggedin").html('<a href="/my-subscription">My Account</a>')}location.reload()}})}})});</script><script id="9eecc3de672973d07a1585293f747958-1" data-nitro-for-id="9eecc3de672973d07a1585293f747958-1" type="nitropack/inlinescript" class="nitropack-inline-script">document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("navigation");const n=e.offsetHeight;const t=0;let i=window.pageYOffset;function s(){return window.innerWidth<500}function l(){const n=window.pageYOffset;if(s()){e.classList.add("minimized")}else if(n>t){e.classList.add("minimized")}else{e.classList.remove("minimized")}i=n}window.addEventListener("scroll",l);window.addEventListener("resize",l);l()});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#menu-navbar-submenu li.submenuopen");var n=document.querySelector(".fullpagemenu");var t=document.querySelector(".menu-icon");var i=document.querySelector(".close-icon");var s=document.querySelector("span.search");e.addEventListener("click",function(){if(n.style.height==="0px"||n.style.height===""){n.style.height="calc(100vh - 63px)";t.style.display="none";i.style.display="inline"}else{n.style.height="0px";t.style.display="inline";i.style.display="none"}});s.addEventListener("click",function(){var e=document.querySelector(".fullpagemenu.search");if(e.style.height==="0px"||e.style.height===""){e.style.height="calc(100vh - 63px)";s.innerHTML="<b style='color:#FFF !important;'>X Close Search</b>"}else{e.style.height="0px";s.innerHTML="Search"}})});</script><script id="36e52ff30c9cc6423fccbe6e43ec0f5d-1" data-nitro-for-id="36e52ff30c9cc6423fccbe6e43ec0f5d-1" type="nitropack/inlinescript" class="nitropack-inline-script">document.addEventListener("DOMContentLoaded",function(){console.log("Script is running.");var n=jQuery(".standfirst").text().split(" ")[0];console.log("First word:",n);if(n.length<=3){console.log("Condition met. Adding class.");jQuery(".standfirst").addClass("standfirst-on-new-line")}});</script><script id="fa01533d9e22811f256ea0f108e41e82-1" data-nitro-for-id="fa01533d9e22811f256ea0f108e41e82-1" type="nitropack/inlinescript" class="nitropack-inline-script">tp=window.tp||[];tp.push(["init",function(){tp.pianoId.init({loggedIn:function(e){document.cookie="tpuser="+e.user.uid+";path=/";jQuery(".piano-login-link").addClass("loggedin").html('<a href="/my-subscription">My Account</a>');if(jQuery(".wc_name.wpd-field").length>0){var i=e.user.firstName;var n=e.user.lastName;if("undefined"==typeof i&&"undefined"==typeof n){i="UnHerd";n="Reader"}else if("undefined"==typeof n){n=""}else if("undefined"==typeof i){i=""}jQuery(".wc_name.wpd-field").val(i+" "+n);if(jQuery(".wc_email.wpd-field").length>0){jQuery(".wc_email.wpd-field").val(e.user.email)}};}})}]);</script><script id="f7c77ab2022772e17edd517dfab38298-1" data-nitro-for-id="f7c77ab2022772e17edd517dfab38298-1" type="nitropack/inlinescript" class="nitropack-inline-script">document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );</script><script id="fa01533d9e22811f256ea0f108e41e82-2" data-nitro-for-id="fa01533d9e22811f256ea0f108e41e82-2" type="nitropack/inlinescript" class="nitropack-inline-script">tp=window.tp||[];tp.push(["init",function(){tp.pianoId.init({loggedIn:function(e){document.cookie="tpuser="+e.user.uid+";path=/";jQuery(".piano-login-link").addClass("loggedin").html('<a href="/my-subscription">My Account</a>');if(jQuery(".wc_name.wpd-field").length>0){var i=e.user.firstName;var n=e.user.lastName;if("undefined"==typeof i&&"undefined"==typeof n){i="UnHerd";n="Reader"}else if("undefined"==typeof n){n=""}else if("undefined"==typeof i){i=""}jQuery(".wc_name.wpd-field").val(i+" "+n);if(jQuery(".wc_email.wpd-field").length>0){jQuery(".wc_email.wpd-field").val(e.user.email)}};}})}]);</script><script id="77c33c5fdfd4343a828b75f4857830ef-1" data-nitro-for-id="77c33c5fdfd4343a828b75f4857830ef-1" type="nitropack/inlinescript" class="nitropack-inline-script">document.getElementById( "ak_js_2" ).setAttribute( "value", ( new Date() ).getTime() );</script><script id="a75a1fbe9e6aed1e680420bc1ef8e9a4-1" data-nitro-for-id="a75a1fbe9e6aed1e680420bc1ef8e9a4-1" type="nitropack/inlinescript" class="nitropack-inline-script">var getScrollPercent=function(){var o=jQuery(window).height();var e=jQuery(document).height();var t=jQuery(window).scrollTop();var r=e-o;var n=Math.floor(t/r*100);return n};if(window.location.hash){jQuery(".wpd-thread-list").show();$([document.documentElement,document.body]).animate({scrollTop:$(window.location.hash).offset().top},2e3)}jQuery(document).on("scroll",function(){if(getScrollPercent()>75||window.location.hash){jQuery(".wpd-thread-list").show()}});</script><script id="24498628c83bf3254b02e6fc91bf1f36-1" data-nitro-for-id="24498628c83bf3254b02e6fc91bf1f36-1" type="nitropack/inlinescript" class="nitropack-inline-script">jQuery(document).ready(function(){jQuery("#comment_updates_close").click(function(e){e.preventDefault();var t={"action":"unherd_reset_comment_updates"};jQuery.post(ajaxurl,t,function(e){jQuery("#comment_updates").hide()});var n=jQuery(this).data("count");gtag("event","Close",{"event_category":"Reply Notification","event_label":null,"non_interaction":true});return false})});</script><script id="aed7ff24994b425096dfa5eb772541da-1" data-nitro-for-id="aed7ff24994b425096dfa5eb772541da-1" type="nitropack/inlinescript" class="nitropack-inline-script">sessionStorage.return_url = 'https://unherd.com/2024/07/labour-doesnt-know-what-women-want/';</script><script id="4148550823daf4ded4e6e6f51c74e542-1" data-nitro-for-id="4148550823daf4ded4e6e6f51c74e542-1" type="nitropack/inlinescript" class="nitropack-inline-script">function checkCookie(e){var n=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return n!==null}if(!checkCookie("_pc_paidsubscriber")){window.snigelPubConf={adengine:{activeAdUnits:["in-content_1","in-content_2","in-content_3","top_leaderboard"]}};var e=document.createElement("script");e.async=true;e.src="https://cdn.snigelweb.com/adengine/unherd.com/loader.js";document.head.appendChild(e)}else{var n=document.createElement("style");n.textContent=".headerad, .adbottom { display: none !important; }";document.head.appendChild(n)}</script><script id="ad49fb3148bbecccfff098ec7991f2bd-1" data-nitro-for-id="ad49fb3148bbecccfff098ec7991f2bd-1" type="nitropack/inlinescript" class="nitropack-inline-script">function addMinimizedClass(){var i=document.getElementById("navigation");var d=window.innerWidth||document.documentElement.clientWidth;if(d<500){i.classList.add("minimized")}}addMinimizedClass();window.addEventListener("resize",addMinimizedClass);</script><script id="232517e25e15a1c1c3bdb20a1b884d3f-1" data-nitro-for-id="232517e25e15a1c1c3bdb20a1b884d3f-1" type="nitropack/inlinescript" class="nitropack-inline-script">
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','okeuy');
</script>

