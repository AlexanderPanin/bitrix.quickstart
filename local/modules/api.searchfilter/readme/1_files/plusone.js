var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=encodeURIComponent,k=window,ba=Object,q=document,ca=Array,da=parseInt,r=String,ea=decodeURIComponent;function ga(a,b){return a.type=b}
var ha="appendChild",ia="shift",ja="exec",ka="width",t="replace",la="concat",ma="charAt",na="match",v="createElement",x="setAttribute",oa="bind",pa="getTime",qa="getElementsByTagName",y="substr",z="toString",A="split",B="location",ra="style",sa="protocol",C="href",ta="action",D="apply",ua="attributes",va="height",E="push",F="test",wa="getElementById",xa="JSON",G="indexOf",ya="nodeName",za="type",H="length",I="prototype",Aa="removeChild",K="call",Ba="getAttribute",Ca="charCodeAt",Da="substring",Ea=
"documentMode",L="parentNode",Fa="update",M="join",Ga="toLowerCase",Ha=function(a,b,c){return a[K][D](a[oa],arguments)},Ia=function(a,b,c){if(!a)throw Error();if(2<arguments[H]){var d=ca[I].slice[K](arguments,2);return function(){var c=ca[I].slice[K](arguments);ca[I].unshift[D](c,d);return a[D](b,c)}}return function(){return a[D](b,arguments)}},Ja=function(a,b,c){Ja=Function[I][oa]&&-1!=Function[I][oa][z]()[G]("native code")?Ha:Ia;return Ja[D](null,arguments)};
Function[I].bind=Function[I][oa]||function(a,b){if(1<arguments[H]){var c=ca[I].slice[K](arguments,1);c.unshift(this,a);return Ja[D](null,c)}return Ja(this,a)};var N=k,P=q,Ka=N[B],La=function(){},Ma=/\[native code\]/,Q=function(a,b,c){return a[b]=a[b]||c},Na=function(a){for(var b=0;b<this[H];b++)if(this[b]===a)return b;return-1},Oa=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[H];d++){var e=a[d];e!=c&&b[E](e);c=e}return b},Pa=/&/g,Qa=/</g,Ra=/>/g,Sa=/"/g,Ta=/'/g,Ua=function(a){return r(a)[t](Pa,"&amp;")[t](Qa,"&lt;")[t](Ra,"&gt;")[t](Sa,"&quot;")[t](Ta,"&#39;")},R=function(){var a;if((a=ba.create)&&Ma[F](a))a=a(null);else{a={};for(var b in a)a[b]=
void 0}return a},S=function(a,b){return ba[I].hasOwnProperty[K](a,b)},Va=function(a){if(Ma[F](ba.keys))return ba.keys(a);var b=[],c;for(c in a)S(a,c)&&b[E](c);return b},T=function(a,b){a=a||{};for(var c in a)S(a,c)&&(b[c]=a[c])},Wa=function(a){return function(){N.setTimeout(a,0)}},Xa=function(a,b){if(!a)throw Error(b||"");},U=Q(N,"gapi",{});var V=function(a,b,c){var d=new RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=new RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ja](a)||b[ja](a)))try{c=ea(a[2])}catch(e){}return c},Ya=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Za=function(a){a=a[na](Ya);var b=R();b.K=a[1];b.l=a[3]?[a[3]]:[];b.v=a[5]?[a[5]]:[];return b},$a=function(a){return a.K+(0<a.l[H]?"?"+a.l[M]("&"):"")+(0<a.v[H]?"#"+a.v[M]("&"):"")},ab=function(a,b){var c=[];if(a)for(var d in a)if(S(a,d)&&null!=a[d]){var e=b?b(a[d]):a[d];c[E](aa(d)+
"="+aa(e))}return c},bb=function(a,b,c,d){a=Za(a);a.l[E][D](a.l,ab(b,d));a.v[E][D](a.v,ab(c,d));return $a(a)},cb=function(a,b){var c="";2E3<b[H]&&(c=b[Da](2E3),b=b[Da](0,2E3));var d=a[v]("div"),e=a[v]("a");e.href=b;d[ha](e);d.innerHTML=d.innerHTML;b=r(d.firstChild[C]);d[L]&&d[L][Aa](d);return b+c},db=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var eb=function(a,b,c,d){if(N[c+"EventListener"])N[c+"EventListener"](a,b,!1);else if(N[d+"tachEvent"])N[d+"tachEvent"]("on"+a,b)},fb=function(){var a=P.readyState;return"complete"===a||"interactive"===a&&-1==navigator.userAgent[G]("MSIE")},ib=function(a){var b=gb;if(!fb())try{b()}catch(c){}hb(a)},hb=function(a){if(fb())a();else{var b=!1,c=function(){if(!b)return b=!0,a[D](this,arguments)};N.addEventListener?(N.addEventListener("load",c,!1),N.addEventListener("DOMContentLoaded",c,!1)):N.attachEvent&&
(N.attachEvent("onreadystatechange",function(){fb()&&c[D](this,arguments)}),N.attachEvent("onload",c))}},jb=function(a){for(;a.firstChild;)a[Aa](a.firstChild)},kb={button:!0,div:!0,span:!0};var W;W=Q(N,"___jsl",R());Q(W,"I",0);Q(W,"hel",10);var lb=function(a){return W.dpo?W.h:V(a,"jsh",W.h)},mb=function(a){var b=Q(W,"sws",[]);b[E][D](b,a)},nb=function(a){return Q(W,"watt",R())[a]},pb=function(a){var b=Q(W,"PQ",[]);W.PQ=[];var c=b[H];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},qb=function(a){return Q(Q(W,"H",R()),a,R())};var rb=Q(W,"perf",R()),sb=Q(rb,"g",R()),tb=Q(rb,"i",R());Q(rb,"r",[]);R();R();var ub=function(a,b,c){var d=rb.r;"function"===typeof d?d(a,b,c):d[E]([a,b,c])},vb=function(a,b,c){sb[a]=!b&&sb[a]||c||(new Date)[pa]();ub(a)},xb=function(a,b,c){b&&0<b[H]&&(b=wb(b),c&&0<c[H]&&(b+="___"+wb(c)),28<b[H]&&(b=b[y](0,28)+(b[H]-28)),c=b,b=Q(tb,"_p",R()),Q(b,c,R())[a]=(new Date)[pa](),ub(a,"_p",c))},wb=function(a){return a[M]("__")[t](/\./g,"_")[t](/\-/g,"_")[t](/\,/g,"_")};var yb=R(),zb=[],X=function(a){throw Error("Bad hint"+(a?": "+a:""));};zb[E](["jsl",function(a){for(var b in a)if(S(a,b)){var c=a[b];"object"==typeof c?W[b]=Q(W,b,[])[la](c):Q(W,b,c)}if(b=a.u)a=Q(W,"us",[]),a[E](b),(b=/^https:(.*)$/[ja](b))&&a[E]("http:"+b[1])}]);var Ab=/^(\/[a-zA-Z0-9_\-]+)+$/,Bb=/^[a-zA-Z0-9\-_\.,!]+$/,Cb=/^gapi\.loaded_[0-9]+$/,Db=/^[a-zA-Z0-9,._-]+$/,Hb=function(a,b,c,d){var e=a[A](";"),f=e[ia](),g=yb[f],h=null;g?h=g(e,b,c,d):X("no hint processor for: "+f);h||X("failed to generate load url");b=h;c=b[na](Eb);(d=b[na](Fb))&&1===d[H]&&Gb[F](b)&&c&&1===c[H]||X("failed sanity: "+a);return h},Kb=function(a,b,c,d){a=Ib(a);Cb[F](c)||X("invalid_callback");b=Jb(b);d=d&&d[H]?Jb(d):null;var e=function(a){return aa(a)[t](/%2C/g,",")};return[aa(a.$)[t](/%2C/g,
",")[t](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.J?"/am="+e(a.J):"",a.T?"/rs="+e(a.T):"",a.V?"/t="+e(a.V):"","/cb=",e(c)][M]("")},Ib=function(a){"/"!==a[ma](0)&&X("relative path");for(var b=a[Da](1)[A]("/"),c=[];b[H];){a=b[ia]();if(!a[H]||0==a[G]("."))X("empty/relative directory");else if(0<a[G]("=")){b.unshift(a);break}c[E](a)}a={};for(var d=0,e=b[H];d<e;++d){var f=b[d][A]("="),g=ea(f[0]),h=ea(f[1]);2==f[H]&&g&&h&&(a[g]=a[g]||h)}b="/"+c[M]("/");Ab[F](b)||
X("invalid_prefix");c=Lb(a,"k",!0);d=Lb(a,"am");e=Lb(a,"rs");a=Lb(a,"t");return{$:b,version:c,J:d,T:e,V:a}},Jb=function(a){for(var b=[],c=0,d=a[H];c<d;++c){var e=a[c][t](/\./g,"_")[t](/-/g,"_");Db[F](e)&&b[E](e)}return b[M](",")},Lb=function(a,b,c){a=a[b];!a&&c&&X("missing: "+b);if(a){if(Bb[F](a))return a;X("invalid: "+b)}return null},Gb=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Fb=/\/cb=/g,Eb=/\/\//g,Mb=function(){var a=lb(Ka[C]);if(!a)throw Error("Bad hint");return a};
yb.m=function(a,b,c,d){(a=a[0])||X("missing_hint");return"https://apis.google.com"+Kb(a,b,c,d)};var Nb=decodeURI("%73cript"),Ob=function(a,b){for(var c=[],d=0;d<a[H];++d){var e=a[d];e&&0>Na[K](b,e)&&c[E](e)}return c},Qb=function(a){"loading"!=P.readyState?Pb(a):P.write("<"+Nb+' src="'+encodeURI(a)+'"></'+Nb+">")},Pb=function(a){var b=P[v](Nb);b[x]("src",a);b.async="true";(a=P[qa](Nb)[0])?a[L].insertBefore(b,a):(P.head||P.body||P.documentElement)[ha](b)},Rb=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<zb[H];d++){var e=zb[d][0],f=zb[d][1];f&&S(c,e)&&f(c[e],a,b)}},Tb=function(a,b,c){Sb(function(){var c;
c=b===lb(Ka[C])?Q(U,"_",R()):R();c=Q(qb(b),"_",c);a(c)},c)},Vb=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Rb(a,c);var d=a?a[A](":"):[],e=c.h||Mb(),f=Q(W,"ah",R());if(f["::"]&&d[H]){for(var g=[],h=null;h=d[ia]();){var l=h[A]("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,n=g[H]&&g[g[H]-1]||null,m=n;n&&n.hint==l||(m={hint:l,N:[]},g[E](m));m.N[E](h)}var p=g[H];if(1<p){var w=c.callback;w&&(c.callback=function(){0==--p&&w()})}for(;d=g[ia]();)Ub(d.N,c,d.hint)}else Ub(d||[],c,e)},Ub=function(a,
b,c){a=Oa(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,h=b.onerror,l=void 0;"function"==typeof h&&(l=h);var n=null,m=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var h=Q(qb(c),"r",[]).sort(),p=Q(qb(c),"L",[]).sort(),w=[][la](h),O=function(a,b){if(m)return 0;N.clearTimeout(n);p[E][D](p,u);var d=((U||{}).config||{})[Fa];d?d(e):e&&Q(W,"cu",[])[E](e);if(b){xb("me0",a,w);try{Tb(b,c,l)}finally{xb("me1",a,w)}}return 1};0<f&&(n=N.setTimeout(function(){m=
!0;g()},f));var u=Ob(a,p);if(u[H]){var u=Ob(a,h),J=Q(W,"CP",[]),fa=J[H];J[fa]=function(a){if(!a)return 0;xb("ml1",u,w);var b=function(b){J[fa]=null;O(u,a)&&pb(function(){d&&d();b()})},c=function(){var a=J[fa+1];a&&a()};0<fa&&J[fa-1]?J[fa]=function(){b(c)}:b(c)};if(u[H]){var ob="loaded_"+W.I++;U[ob]=function(a){J[fa](a);U[ob]=null};a=Hb(c,u,"gapi."+ob,h);h[E][D](h,u);xb("ml0",u,w);b.sync||N.___gapisync?Qb(a):Pb(a)}else J[fa](La)}else O(u)&&d&&d()};var Sb=function(a,b){if(W.hee&&0<W.hel)try{return a()}catch(c){b&&b(c),W.hel--,Vb("debug_error",function(){try{k.___jsl.hefn(c)}catch(a){throw c;}})}else try{return a()}catch(d){throw b&&b(d),d;}};U.load=function(a,b){return Sb(function(){return Vb(a,b)})};var Wb=function(a){var b=k.___jsl=k.___jsl||{};b[a]=b[a]||[];return b[a]},Xb=function(a){var b=k.___jsl=k.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Yb=function(a){return"object"===typeof a&&/\[native code\]/[F](a[E])},Zb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Yb(a[c])&&!Yb(b[c])?Zb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Yb(b[c])?[]:{},Zb(a[c],b[c])):a[c]=b[c])},$b=function(a){if(a&&!/^\s+$/[F](a)){for(;0==a[Ca](a[H]-
1);)a=a[Da](0,a[H]-1);var b;try{b=k[xa].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},ac=function(a){Xb(!0);var b=k.___gcfg,c=Wb("cu");if(b&&b!==k.___gu){var d={};Zb(d,b);c[E](d);k.___gu=b}var b=Wb("cu"),e=q.scripts||q[qa]("script")||[],d=[],f=[];f[E][D](f,Wb("us"));for(var g=0;g<e[H];++g)for(var h=e[g],l=0;l<f[H];++l)h.src&&
0==h.src[G](f[l])&&d[E](h);0==d[H]&&0<e[H]&&e[e[H]-1].src&&d[E](e[e[H]-1]);for(e=0;e<d[H];++e)d[e][Ba]("gapi_processed")||(d[e][x]("gapi_processed",!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=$b(f))&&b[E](f));a&&(d={},Zb(d,a),c[E](d));d=Wb("cd");a=0;for(b=d[H];a<b;++a)Zb(Xb(),d[a]);d=Wb("ci");a=0;for(b=d[H];a<b;++a)Zb(Xb(),d[a]);a=0;for(b=c[H];a<b;++a)Zb(Xb(),c[a])},Y=function(a){if(!a)return Xb();a=a[A]("/");for(var b=Xb(),c=0,d=a[H];b&&
"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a[H]&&void 0!==b?b:void 0},bc=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a[A]("/"),f=0,g=e[H];f<g-1;++f)var h={},d=d[e[f]]=h;d[e[f]]=b}ac(c)};var cc=function(){var a=k.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),Q(W,"ci",[])[E](a),k.__GOOGLEAPIS=void 0)};var dc={apppackagename:1,callback:1,clientid:1,cookiepolicy:1,openidrealm:-1,includegrantedscopes:-1,requestvisibleactions:1,scope:1},ec=!1,fc=R(),gc=function(){if(!ec){for(var a=q[qa]("meta"),b=0;b<a[H];++b){var c=a[b].name[Ga]();if(0==c.lastIndexOf("google-signin-",0)){var c=c[Da](14),d=a[b].content;dc[c]&&d&&(fc[c]=d)}}if(k.self!==k.top){var a=q[B][z](),e;for(e in dc)0<dc[e]&&(b=V(a,e,""))&&(fc[e]=b)}ec=!0}e=R();T(fc,e);return e},hc=function(a){return!!(a.clientid&&a.scope&&a.callback)};var ic=k.console,jc=function(a){ic&&ic.log&&ic.log(a)};var kc=function(){return!!W.oa},lc=function(){};var Z=Q(W,"rw",R()),mc=function(a){for(var b in Z)a(Z[b])},nc=function(a,b){var c=Z[a];c&&c.state<b&&(c.state=b)};var oc;var pc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,qc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,rc=function(a){var b=Y("googleapis.config/sessionIndex");null==b&&(b=k.__X_GOOG_AUTHUSER);if(null==b){var c=k.google;c&&(b=c.authuser)}null==b&&(a=a||k[B][C],b=V(a,"authuser")||null,null==b&&(b=(b=a[na](pc))?b[1]:null));return null==b?null:r(b)},sc=function(a){var b=Y("googleapis.config/sessionDelegate");null==b&&(b=(a=(a||k[B][C])[na](qc))?
a[1]:null);return null==b?null:r(b)};var tc=function(){this.c=-1};var uc=function(){this.c=-1;this.c=64;this.b=[];this.C=[];this.W=[];this.w=[];this.w[0]=128;for(var a=1;a<this.c;++a)this.w[a]=0;this.A=this.j=0;this.reset()};(function(){function a(){}a.prototype=tc[I];uc.ia=tc[I];uc.prototype=new a;uc.K=function(a,c,d){for(var e=ca(arguments[H]-2),f=2;f<arguments[H];f++)e[f-2]=arguments[f];return tc[I][c][D](a,e)}})();uc[I].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.A=this.j=0};
var vc=function(a,b,c){c||(c=0);var d=a.W;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b[Ca](c)<<24|b[Ca](c+1)<<16|b[Ca](c+2)<<8|b[Ca](c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var g=a.b[2],h=a.b[3],l=a.b[4],n,e=0;80>e;e++)40>e?20>e?(f=h^c&(g^h),n=1518500249):(f=c^g^h,n=1859775393):60>e?(f=c&g|h&(c|g),n=2400959708):(f=c^g^h,n=3395469782),f=(b<<5|b>>>27)+
f+l+n+d[e]&4294967295,l=h,h=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295};
uc[I].update=function(a,b){if(null!=a){void 0===b&&(b=a[H]);for(var c=b-this.c,d=0,e=this.C,f=this.j;d<b;){if(0==f)for(;d<=c;)vc(this,a,d),d+=this.c;if("string"==typeof a)for(;d<b;){if(e[f]=a[Ca](d),++f,++d,f==this.c){vc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.c){vc(this,e);f=0;break}}this.j=f;this.A+=b}};
uc[I].digest=function(){var a=[],b=8*this.A;56>this.j?this[Fa](this.w,56-this.j):this[Fa](this.w,this.c-(this.j-56));for(var c=this.c-1;56<=c;c--)this.C[c]=b&255,b/=256;vc(this,this.C);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};var wc=function(){this.G=new uc};wc[I].reset=function(){this.G.reset()};var xc=N.crypto,yc=!1,zc=0,Ac=0,Bc=1,Cc=0,Dc="",Ec=function(a){a=a||N.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=(new Date)[pa]()%1E6*b;Bc=Bc*b%Cc;0<zc&&++Ac==zc&&eb("mousemove",Ec,"remove","de")},Fc=function(a){var b=new wc;a=unescape(aa(a));for(var c=[],d=0,e=a[H];d<e;++d)c[E](a[Ca](d));b.G[Fa](c);b=b.G.digest();a="";for(c=0;c<b[H];c++)a+="0123456789ABCDEF"[ma](Math.floor(b[c]/16))+"0123456789ABCDEF"[ma](b[c]%16);return a},yc=!!xc&&"function"==typeof xc.getRandomValues;
yc||(Cc=1E6*(screen[ka]*screen[ka]+screen[va]),Dc=Fc(P.cookie+"|"+P[B]+"|"+(new Date)[pa]()+"|"+Math.random()),zc=Y("random/maxObserveMousemove")||0,0!=zc&&eb("mousemove",Ec,"add","at"));var Gc=function(){var a=Bc,a=a+da(Dc[y](0,20),16);Dc=Fc(Dc);return a/(Cc+Math.pow(16,20))},Hc=function(){var a=new N.Uint32Array(1);xc.getRandomValues(a);return Number("0."+a[0])};var Ic=function(){var a=W.onl;if(!a){a=R();W.onl=a;var b=R();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},Jc=function(a,b){var c=b.onload;return"function"===typeof c?(Ic().a(a,c),c):null},Kc=function(a){Xa(/^\w+$/[F](a),"Unsupported id - "+a);Ic();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},Lc=function(a){Ic().r(a)};var Mc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Nc={allowtransparency:!0,onload:!0},Oc=0,Pc=function(a){Xa(!a||db[F](a),"Illegal url for new iframe - "+a)},Qc=function(a,b,c,d,e){Pc(c.src);var f,g=Jc(d,c),h=g?Kc(d):"";try{q.all&&(f=a[v]('<iframe frameborder="'+Ua(r(c.frameborder))+'" scrolling="'+Ua(r(c.scrolling))+'" '+h+' name="'+Ua(r(c.name))+'"/>'))}catch(l){}finally{f||(f=a[v]("iframe"),
g&&(f.onload=function(){f.onload=null;g[K](this)},Lc(d)))}for(var n in c)a=c[n],"style"===n&&"object"===typeof a?T(a,f[ra]):Nc[n]||f[x](n,r(a));(n=e&&e.beforeNode||null)||e&&e.dontclear||jb(b);b.insertBefore(f,n);f=n?n.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=!0);return f};var Rc=/^:[\w]+$/,Sc=/:([a-zA-Z_]+):/g,Tc=function(){var a=rc()||"0",b=sc(),c;c=rc(void 0)||a;var d=sc(void 0),e="";c&&(e+="u/"+c+"/");d&&(e+="b/"+d+"/");c=e||null;(e=(d=!1===Y("isLoggedIn"))?"_/im/":"")&&(c="");var f=Y("iframes/:socialhost:"),g=Y("iframes/:im_socialhost:");return oc={socialhost:f,ctx_socialhost:d?g:f,session_index:a,session_delegate:b,session_prefix:c,im_prefix:e}},Uc=function(a,b){return Tc()[b]||""},Vc=function(a){return function(b,c){return a?Tc()[c]||a[c]||"":Tc()[c]||""}};var Wc={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},Xc=function(a){var b,c,d;b=/[\"\\\x00-\x1f\x7f-\x9f]/g;if(void 0!==a){switch(typeof a){case "string":return b[F](a)?'"'+a[t](b,function(a){var b=Wc[a];if(b)return b;b=a[Ca]();return"\\u00"+Math.floor(b/16)[z](16)+(b%16)[z](16)})+'"':'"'+a+'"';case "number":return isFinite(a)?r(a):"null";case "boolean":case "null":return r(a);case "object":if(!a)return"null";b=[];if("number"===typeof a[H]&&!a.propertyIsEnumerable("length")){d=
a[H];for(c=0;c<d;c+=1)b[E](Xc(a[c])||"null");return"["+b[M](",")+"]"}for(c in a)!/___$/[F](c)&&S(a,c)&&"string"===typeof c&&(d=Xc(a[c]))&&b[E](Xc(c)+":"+d);return"{"+b[M](",")+"}"}return""}},Yc=function(a){if(!a)return!1;if(/^[\],:{}\s]*$/[F](a[t](/\\["\\\/b-u]/g,"@")[t](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")[t](/(?:^|:|,)(?:\s*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}return!1},Zc=!1;try{Zc=!!k[xa]&&'["a"]'===k[xa].stringify(["a"])&&"a"===k[xa].parse('["a"]')[0]}catch($c){}
var ad=function(a){try{return k[xa].parse(a)}catch(b){return!1}},bd=Zc?k[xa].stringify:Xc,cd=Zc?ad:Yc;var dd=function(a){var b;a[na](/^https?%3A/i)&&(b=ea(a));return cb(q,b?b:a)},ed=function(a){a=a||"canonical";for(var b=q[qa]("link"),c=0,d=b[H];c<d;c++){var e=b[c],f=e[Ba]("rel");if(f&&f[Ga]()==a&&(e=e[Ba]("href"))&&(e=dd(e))&&null!=e[na](/^https?:\/\/[\w\-\_\.]+/i))return e}return k[B][C]};var fd={se:"0"},gd={post:!0},hd={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},id="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),jd=Q(W,"WI",R()),kd=function(a,b,c){var d,e;d={};var f=e=a;"plus"==a&&b[ta]&&(e=a+"_"+b[ta],f=a+"/"+b[ta]);(e=Y("iframes/"+e+"/url"))||(e=":im_socialhost:/:session_prefix::im_prefix:_/widget/render/"+f+"?usegapi=1");for(var g in fd)d[g]=g+"/"+(b[g]||fd[g])+"/";d=cb(P,e[t](Sc,Vc(d)));g="iframes/"+
a+"/params/";f={};T(b,f);(e=Y("lang")||Y("gwidget/lang"))&&(f.hl=e);gd[a]||(f.origin=k[B].origin||k[B][sa]+"//"+k[B].host);f.exp=Y(g+"exp");if(g=Y(g+"location"))for(e=0;e<g[H];e++){var h=g[e];f[h]=N[B][h]}switch(a){case "plus":case "follow":g=f[C];e=b[ta]?void 0:"publisher";g=(g="string"==typeof g?g:void 0)?dd(g):ed(e);f.url=g;delete f[C];break;case "plusone":g=(g=b[C])?dd(g):ed();f.url=g;g=b.db;e=Y();null==g&&e&&(g=e.db,null==g&&(g=e.gwidget&&e.gwidget.db));f.db=g||void 0;g=b.ecp;e=Y();null==g&&
e&&(g=e.ecp,null==g&&(g=e.gwidget&&e.gwidget.ecp));f.ecp=g||void 0;delete f[C];break;case "signin":f.url=ed()}W.ILI&&(f.iloader="1");delete f["data-onload"];delete f.rd;for(var l in fd)f[l]&&delete f[l];f.gsrc=Y("iframes/:source:");l=Y("inline/css");"undefined"!==typeof l&&0<c&&l>=c&&(f.ic="1");l=/^#|^fr-/;c={};for(var n in f)S(f,n)&&l[F](n)&&(c[n[t](l,"")]=f[n],delete f[n]);n="q"==Y("iframes/"+a+"/params/si")?f:c;l=gc();for(var m in l)!S(l,m)||S(f,m)||S(c,m)||(n[m]=l[m]);m=[][la](id);(n=Y("iframes/"+
a+"/methods"))&&"object"===typeof n&&Ma[F](n[E])&&(m=m[la](n));for(var p in b)S(b,p)&&/^on/[F](p)&&("plus"!=a||"onconnect"!=p)&&(m[E](p),delete f[p]);delete f.callback;c._methods=m[M](",");return bb(d,f,c)},ld=["style","data-gapiscan"],nd=function(a){for(var b=R(),c=0!=a[ya][Ga]()[G]("g:"),d=0,e=a[ua][H];d<e;d++){var f=a[ua][d],g=f.name,h=f.value;0<=Na[K](ld,g)||c&&0!=g[G]("data-")||"null"===h||"specified"in f&&!f.specified||(c&&(g=g[y](5)),b[g[Ga]()]=h)}a=a[ra];(c=md(a&&a[va]))&&(b.height=r(c));
(a=md(a&&a[ka]))&&(b.width=r(a));return b},md=function(a){var b=void 0;"number"===typeof a?b=a:"string"===typeof a&&(b=da(a,10));return b},pd=function(){var a=W.drw;mc(function(b){if(a!==b.id&&4!=b.state&&"share"!=b[za]){var c=b.id,d=b[za],e=b.url;b=b.userParams;var f=P[wa](c);if(f){var g=kd(d,b,0);g?(f=f[L],e[t](/\#.*/,"")[t](/(\?|&)ic=1/,"")!==g[t](/\#.*/,"")[t](/(\?|&)ic=1/,"")&&(b.dontclear=!0,b.rd=!0,b.ri=!0,ga(b,d),od(f,b),(d=Z[f.lastChild.id])&&(d.oid=c),nc(c,4))):delete Z[c]}else delete Z[c]}})};var qd,rd,sd,td,ud,vd=/(?:^|\s)g-((\S)*)(?:$|\s)/,wd={plusone:!0,autocomplete:!0,profile:!0,signin:!0,signin2:!0};qd=Q(W,"SW",R());rd=Q(W,"SA",R());sd=Q(W,"SM",R());td=Q(W,"FW",[]);ud=null;
var yd=function(a,b){xd(void 0,!1,a,b)},xd=function(a,b,c,d){vb("ps0",!0);c=("string"===typeof c?q[wa](c):c)||P;var e;e=P[Ea];if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:Va(qd)[la](Va(rd))[la](Va(sd));for(var f=[],g=0;g<e[H];g++){var h=e[g];f[E](".g-"+h,"g\\:"+h)}e=c.querySelectorAll(f[M](","))}else e=c[qa]("*");c=R();for(f=0;f<e[H];f++){g=e[f];var l=g,h=d,n=l[ya][Ga](),m=void 0;l[Ba]("data-gapiscan")?h=null:(0==n[G]("g:")?m=n[y](2):(l=(l=r(l.className||l[Ba]("class")))&&vd[ja](l))&&(m=l[1]),h=!m||
!(qd[m]||rd[m]||sd[m])||h&&m!==h?null:m);h&&(wd[h]||0==g[ya][Ga]()[G]("g:")||0!=Va(nd(g))[H])&&(g[x]("data-gapiscan",!0),Q(c,h,[])[E](g))}if(b)for(var p in c)for(b=c[p],d=0;d<b[H];d++)b[d][x]("data-onload",!0);for(var w in c)td[E](w);vb("ps1",!0);if((p=td[M](":"))||a)try{U.load(p,a)}catch(O){jc(O);return}if(zd(ud||{}))for(var u in c){a=c[u];w=0;for(b=a[H];w<b;w++)a[w].removeAttribute("data-gapiscan");Ad(u)}else{d=[];for(u in c)for(a=c[u],w=0,b=a[H];w<b;w++)e=a[w],Bd(u,e,nd(e),d,b);Cd(p,d)}},Dd=function(a){var b=
Q(U,a,{});b.go||(b.go=function(b){return yd(b,a)},b.render=function(b,d){var e=d||{};ga(e,a);return od(b,e)})},Ed=function(a){qd[a]=!0},Fd=function(a){rd[a]=!0},Gd=function(a){sd[a]=!0};var Ad=function(a,b){var c=nb(a);b&&c?(c(b),(c=b.iframeNode)&&c[x]("data-gapiattached",!0)):U.load(a,function(){var c=nb(a),e=b&&b.iframeNode,f=b&&b.userParams;e&&c?(c(b),e[x]("data-gapiattached",!0)):(c=U[a].go,"signin2"==a?c(e,f):c(e&&e[L],f))})},zd=function(){return!1},Cd=function(){},Bd=function(a,b,c,d,e,f){switch(Hd(b,a,f)){case 0:a=sd[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;Ad(a,d);break;case 1:var g;if(b[L]){for(var h in c){if(f=S(c,h))f=c[h],f=!!f&&"object"===typeof f&&(!f[z]||
f[z]===ba[I][z]||f[z]===ca[I][z]);if(f)try{c[h]=bd(c[h])}catch(l){delete c[h]}}var n=!0;c.dontclear&&(n=!1);delete c.dontclear;lc();f=kd(a,c,e);h={allowPost:1,attributes:hd};h.dontclear=!n;e={};e.userParams=c;e.url=f;ga(e,a);var m;c.rd?m=b:(m=q[v]("div"),b[x]("data-gapistub",!0),m[ra].cssText="position:absolute;width:450px;left:-10000px;",b[L].insertBefore(m,b));e.siteElement=m;m.id||(b=m,Q(jd,a,0),n="___"+a+"_"+jd[a]++,b.id=n);b=R();b[">type"]=a;T(c,b);n=f;c=m;f=h||{};b=f[ua]||{};Xa(!f.allowPost||
!b.onload,"onload is not supported by post iframe");h=b=n;Rc[F](b)&&(h=Y("iframes/"+h[Da](1)+"/url"),Xa(!!h,"Unknown iframe url config for - "+b));n=cb(P,h[t](Sc,Uc));b=c.ownerDocument||P;m=0;do h=f.id||["I",Oc++,"_",(new Date)[pa]()][M]("");while(b[wa](h)&&5>++m);Xa(5>m,"Error creating iframe id");m={};var p={};b[Ea]&&9>b[Ea]&&(m.hostiemode=b[Ea]);T(f.queryParams||{},m);T(f.fragmentParams||{},p);var w=f.connectWithQueryParams?m:p,O=f.pfname,u=R();u.id=h;u.parent=b[B][sa]+"//"+b[B].host;var J=V(b[B][C],
"parent"),O=O||"";!O&&J&&(J=V(b[B][C],"id",""),O=V(b[B][C],"pfname",""),O=J?O+"/"+J:"");u.pfname=O;T(u,w);(u=V(n,"rpctoken")||m.rpctoken||p.rpctoken)||(u=w.rpctoken=f.rpctoken||r(Math.round(1E8*(yc?Hc():Gc()))));f.rpctoken=u;u=b[B][C];w=R();(J=V(u,"_bsh",W.bsh))&&(w._bsh=J);(u=lb(u))&&(w.jsh=u);f.hintInFragment?T(w,p):T(w,m);n=bb(n,m,p,f.paramsSerializer);p=R();T(Mc,p);T(f[ua],p);p.name=p.id=h;p.src=n;f.eurl=n;if((f||{}).allowPost&&2E3<n[H]){m=Za(n);p.src="";p["data-postorigin"]=n;n=Qc(b,c,p,h);-1!=
navigator.userAgent[G]("WebKit")&&(g=n.contentWindow.document,g.open(),p=g[v]("div"),w={},u=h+"_inner",w.name=u,w.src="",w.style="display:none",Qc(b,p,w,u,f));p=(f=m.l[0])?f[A]("&"):[];f=[];for(w=0;w<p[H];w++)u=p[w][A]("=",2),f[E]([ea(u[0]),ea(u[1])]);m.l=[];p=$a(m);Xa(db[F](p),"Invalid URL: "+p);m=b[v]("form");m.action=p;m.method="POST";m.target=h;m[ra].display="none";for(h=0;h<f[H];h++)p=b[v]("input"),ga(p,"hidden"),p.name=f[h][0],p.value=f[h][1],m[ha](p);c[ha](m);m.submit();m[L][Aa](m);g&&g.close();
g=n}else g=Qc(b,c,p,h,f);e.iframeNode=g;e.id=g[Ba]("id");g=e.id;c=R();c.id=g;c.userParams=e.userParams;c.url=e.url;ga(c,e[za]);c.state=1;Z[g]=c;g=e}else g=null;g&&((e=g.id)&&d[E](e),Ad(a,g))}},Hd=function(a,b,c){if(a&&1===a.nodeType&&b){if(c)return 1;if(sd[b]){if(kb[a[ya][Ga]()])return(a=a.innerHTML)&&a[t](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if(rd[b])return 0;if(qd[b])return 1}}return null},od=function(a,b){var c=b[za];delete b[za];var d=("string"===typeof a?q[wa](a):a)||void 0;if(d){var e={},f;
for(f in b)S(b,f)&&(e[f[Ga]()]=b[f]);e.rd=1;(f=!!e.ri)&&delete e.ri;var g=[];Bd(c,d,e,g,0,f);Cd(c,g)}else jc("string"==="gapi."+c+".render: missing element "+typeof a?a:"")};Q(U,"platform",{}).go=yd;var zd=function(a){for(var b=["_c","jsl","h"],c=0;c<b[H]&&a;c++)a=a[b[c]];b=lb(Ka[C]);return!a||0!=a[G]("n;")&&0!=b[G]("n;")&&a!==b},Cd=function(a,b){Id(a,b)},gb=function(a){xd(a,!0)},Jd=function(a,b){for(var c=b||[],d=0;d<c[H];++d)a(c[d]);for(d=0;d<c[H];d++)Dd(c[d])};
zb[E](["platform",function(a,b,c){ud=c;b&&td[E](b);Jd(Ed,a);Jd(Fd,c._c.annotation);Jd(Gd,c._c.bimodal);cc();ac();if("explicit"!=Y("parsetags")){mb(a);hc(gc())&&!Y("disableRealtimeCallback")&&lc();var d;c&&(a=c.callback)&&(d=Wa(a),delete c.callback);ib(function(){gb(d)})}}]);U._pl=!0;var Kd=function(a){a=(a=Z[a])?a.oid:void 0;if(a){var b=P[wa](a);b&&b[L][Aa](b);delete Z[a];Kd(a)}};var Ld=/^\{h\:'/,Md=/^!_/,Nd="",Id=function(a,b){function c(){eb("message",d,"remove","de")}function d(d){var g=d.data,h=d.origin;if(Od(g,b)){var l=e;e=!1;l&&vb("rqe");Pd(a,function(){l&&vb("rqd");c();for(var a=Q(W,"RPMQ",[]),b=0;b<a[H];b++)a[b]({data:g,origin:h})})}}if(0!==b[H]){Nd=V(Ka[C],"pfname","");var e=!0;eb("message",d,"add","at");Vb(a,c)}},Od=function(a,b){a=r(a);if(Ld[F](a))return!0;var c=!1;Md[F](a)&&(c=!0,a=a[y](2));if(!/^\{/[F](a))return!1;var d=cd(a);if(!d)return!1;var e=d.f;if(d.s&&
e&&-1!=Na[K](b,e)){if("_renderstart"===d.s||d.s===Nd+"/"+e+"::_renderstart"){var f=d.a&&d.a[c?0:1],c=P[wa](e);nc(e,2);if(f&&c&&f[ka]&&f[va]){a:{d=c[L];e=f||{};if(kc()){var g=c.id;if(g){f=(f=Z[g])?f.state:void 0;if(1===f||4===f)break a;Kd(g)}}(f=d.nextSibling)&&f[Ba]&&f[Ba]("data-gapistub")&&(d[L][Aa](f),d[ra].cssText="");var f=e[ka],h=e[va],l=d[ra];l.textIndent="0";l.margin="0";l.padding="0";l.background="transparent";l.borderStyle="none";l.cssFloat="none";l.styleFloat="none";l.lineHeight="normal";
l.fontSize="1px";l.verticalAlign="baseline";d=d[ra];d.display="inline-block";l=c[ra];l.position="static";l.left=0;l.top=0;l.visibility="visible";f&&(d.width=l.width=f+"px");h&&(d.height=l.height=h+"px");e.verticalAlign&&(d.verticalAlign=e.verticalAlign);g&&nc(g,3)}c["data-csi-wdt"]=(new Date)[pa]()}}return!0}return!1},Pd=function(a,b){Vb(a,b)};var Qd=function(a,b){this.P=a;var c=b||{};this.Z=c.ga;this.M=c.domain;this.R=c.path;this.aa=c.ha},Rd=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Sd=/^[A-Z_][A-Z0-9_]{0,63}$/;
Qd[I].write=function(a,b){if(!Sd[F](this.P))throw"Invalid cookie name";if(!Rd[F](a))throw"Invalid cookie value";var c=this.P+"="+a;this.M&&(c+=";domain="+this.M);this.R&&(c+=";path="+this.R);var d="number"===typeof b?b:this.Z;if(0<=d){var e=new Date;e.setSeconds(e.getSeconds()+d);c+=";expires="+e.toUTCString()}this.aa&&(c+=";secure");q.cookie=c;return!0};Qd.iterate=function(a){for(var b=q.cookie[A](/;\s*/),c=0;c<b[H];++c){var d=b[c][A]("="),e=d[ia]();a(e,d[M]("="))}};var Td=function(a){this.Y=a},Ud={};Td[I].write=function(a){Ud[this.Y]=a;return!0};Td.iterate=function(a){for(var b in Ud)Ud.hasOwnProperty(b)&&a(b,Ud[b])};var Vd="https:"===k[B][sa],Wd=Vd||"http:"===k[B][sa]?Qd:Td,Xd=function(a){var b=a[y](1),c="",d=k[B].hostname;if(""!==b){c=da(b,10);if(isNaN(c))return null;b=d[A](".");if(b[H]<c-1)return null;b[H]==c-1&&(d="."+d)}else d="";return{g:"S"==a[ma](0),domain:d,i:c}},Yd=function(){var a,b=null;Wd.iterate(function(c,d){if(0===c[G]("G_AUTHUSER_")){var e=Xd(c[Da](11));if(!a||e.g&&!a.g||e.g==a.g&&e.i>a.i)a=e,b=d}});return{X:a,B:b}};var Zd=function(a){if(0!==a[G]("GCSC"))return null;var b={O:!1};a=a[y](4);if(!a)return b;var c=a[ma](0);a=a[y](1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=Xd(a[y](d+1));if(null==e)return b;a=a[Da](0,d);if("_"!==a[ma](0))return b;d="E"===c&&e.g;return!d&&("U"!==c||e.g)||d&&!Vd?b:{O:!0,g:d,da:a[y](1),domain:e.domain,i:e.i}},$d=function(a){if(!a)return[];a=a[A]("=");return a[1]?a[1][A]("|"):[]},ae=function(a){a=a[A](":");return{D:a[0][A]("=")[1],ca:$d(a[1]),fa:$d(a[2]),ea:$d(a[3])}},be=function(){var a=
Yd(),b=a.X,a=a.B;if(null!==a){var c;Wd.iterate(function(a,d){var e=Zd(a);e&&e.O&&e.g==b.g&&e.i==b.i&&(c=d)});if(c){var d=ae(c),e=d&&d.ca[Number(a)],d=d&&d.D;if(e)return{B:a,ba:e,D:d}}}return null};var ce=function(a){this.L=a};ce[I].o=0;ce[I].H=2;ce[I].L=null;ce[I].F=!1;ce[I].U=function(){this.F||(this.o=0,this.F=!0,this.S())};ce[I].S=function(){this.F&&(this.L()?this.o=this.H:this.o=Math.min(2*(this.o||this.H),120),k.setTimeout(Ja(this.S,this),1E3*this.o))};for(var de=0;64>de;++de);var ee=null,kc=function(){return W.oa=!0},lc=function(){W.oa=!0;var a=be();(a=a&&a.B)&&bc("googleapis.config/sessionIndex",a);ee||(ee=Q(W,"ss",new ce(fe)));a=ee;a.U&&a.U()},fe=function(){var a=be(),b=a&&a.ba||null,c=a&&a.D;Vb("auth",{callback:function(){var a=N.gapi.auth,e={client_id:c,session_state:b};a.checkSessionState(e,function(b){var c=e.session_state,h=Y("isLoggedIn");b=Y("debug/forceIm")?!1:c&&b||!c&&!b;if(h=h!=b)bc("isLoggedIn",b),lc(),pd(),b||((b=a.signOut)?b():(b=a.setToken)&&b(null));
b=gc();var l=Y("savedUserState"),c=a._guss(b.cookiepolicy),l=l!=c&&"undefined"!=typeof l;bc("savedUserState",c);(h||l)&&hc(b)&&!Y("disableRealtimeCallback")&&a._pimf(b,!0)})}});return!0};vb("bs0",!0,k.gapi._bs);vb("bs1",!0);delete k.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"deviceType":"desktop","oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","disableOpt":true,"idpIframeUrl":"https://accounts.google.com/o/oauth2/iframe","usegapi":false},"debug":{"reportExceptionRate":0.05,"forceIm":false,"rethrowException":false,"host":"https://apis.google.com"},"lexps":[81,97,99,122,123,61,45,30,79,127],"enableMultilogin":true,"googleapis.config":{"auth":{"useFirstPartyAuthV2":false}},"isPlusUser":false,"inline":{"css":1},"disableRealtimeCallback":false,"drive_share":{"useStandaloneSharingService":true},"csi":{"rate":0.01},"report":{"apiRate":{"gapi\\.signin\\..*":0.05},"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\..*","gapi\\.auth\\..*","gapi\\.client\\..*"],"rate":0.001,"host":"https://apis.google.com"},"client":{"headers":{"request":["Accept","Accept-Language","Authorization","Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","GData-Version","Host","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","Origin","OriginToken","Pragma","Range","Slug","Transfer-Encoding","X-ClientDetails","X-GData-Client","X-GData-Key","X-Goog-AuthUser","X-Goog-PageId","X-Goog-Encode-Response-If-Executable","X-Goog-Correlation-Id","X-Goog-Request-Info","X-Goog-Experiments","x-goog-iam-role","x-goog-iam-authorization-token","X-Goog-Spatula","X-Goog-Upload-Command","X-Goog-Upload-Content-Disposition","X-Goog-Upload-Content-Length","X-Goog-Upload-Content-Type","X-Goog-Upload-File-Name","X-Goog-Upload-Offset","X-Goog-Upload-Protocol","X-Goog-Visitor-Id","X-HTTP-Method-Override","X-JavaScript-User-Agent","X-Pan-Versionid","X-Origin","X-Referer","X-Upload-Content-Length","X-Upload-Content-Type","X-Use-HTTP-Status-Code-Override","X-YouTube-VVT","X-YouTube-Page-CL","X-YouTube-Page-Timestamp"],"response":["Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","ETag","Expires","Last-Modified","Location","Pragma","Range","Server","Transfer-Encoding","WWW-Authenticate","Vary","X-Goog-Safety-Content-Type","X-Goog-Safety-Encoding","X-Goog-Upload-Chunk-Granularity","X-Goog-Upload-Control-URL","X-Goog-Upload-Size-Received","X-Goog-Upload-Status","X-Goog-Upload-URL","X-Goog-Diff-Download-Range","X-Goog-Hash","X-Goog-Updated-Authorization","X-Server-Object-Version","X-Guploader-Customer","X-Guploader-Upload-Result","X-Guploader-Uploadid"]},"rms":"migrated","cors":false},"isLoggedIn":false,"include_granted_scopes":true,"llang":"ru","plus_layer":{"isEnabled":false},"iframes":{"youtube":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1","methods":["scroll","openwindow"]},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"},"rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},"udc_webconsentflow":{"params":{"url":""},"url":"https://www.google.com/settings/webconsent?usegapi\u003d1"},":source:":"3p","blogger":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1","methods":["scroll","openwindow"]},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"},":socialhost:":"https://apis.google.com","shortlists":{"url":""},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"},"post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"},"photocomments":{"url":":socialhost:/:session_prefix:_/widget/render/photocomments?usegapi\u003d1"},":gplus_url:":"https://plus.google.com","signin":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1","methods":["onauth"]},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},"share":{"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"},"plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"},"comments":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1","methods":["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com","backdrop":{"url":"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"},"visibility":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete"},"additnow":{"url":"https://apis.google.com/additnow/additnow.html?usegapi\u003d1","methods":["launchurl"]},":signuphost:":"https://plus.google.com","appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},"community":{"url":":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"},"ytshare":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},"reportabuse":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi\u003d1"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},"savetodrive":{"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1","methods":["save"]},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card"}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.ru.bWECwdKbh3s.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/t\u003dzcms/rs\u003dAGLTcCNpp0MYO14FVlW_2xdxsHajLPXAAg","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"c7541b1b9ca3cf8e6905f4fbb06f1519dd5128b5","dpo":false},"platform":["additnow","backdrop","blogger","comments","commentcount","community","follow","page","person","playreview","plus","plusone","post","reportabuse","savetodrive","savetowallet","sharetoclassroom","shortlists","signin2","visibility","youtube","ytsubscribe","zoomableimage","photocomments","hangout","udc_webconsentflow"],"fp":"c7541b1b9ca3cf8e6905f4fbb06f1519dd5128b5","annotation":["interactivepost","recobar","signin2","autocomplete","profile"],"bimodal":["signin","share"]}});