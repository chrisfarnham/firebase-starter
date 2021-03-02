goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56899 = arguments.length;
var i__4737__auto___56900 = (0);
while(true){
if((i__4737__auto___56900 < len__4736__auto___56899)){
args__4742__auto__.push((arguments[i__4737__auto___56900]));

var G__56901 = (i__4737__auto___56900 + (1));
i__4737__auto___56900 = G__56901;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56684){
var G__56685 = cljs.core.first(seq56684);
var seq56684__$1 = cljs.core.next(seq56684);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56685,seq56684__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__56690 = cljs.core.seq(sources);
var chunk__56691 = null;
var count__56692 = (0);
var i__56693 = (0);
while(true){
if((i__56693 < count__56692)){
var map__56706 = chunk__56691.cljs$core$IIndexed$_nth$arity$2(null,i__56693);
var map__56706__$1 = (((((!((map__56706 == null))))?(((((map__56706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56706):map__56706);
var src = map__56706__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56706__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56708){var e_56904 = e56708;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56904);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56904.message)].join('')));
}

var G__56905 = seq__56690;
var G__56906 = chunk__56691;
var G__56907 = count__56692;
var G__56908 = (i__56693 + (1));
seq__56690 = G__56905;
chunk__56691 = G__56906;
count__56692 = G__56907;
i__56693 = G__56908;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__56690);
if(temp__5754__auto__){
var seq__56690__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56690__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56690__$1);
var G__56909 = cljs.core.chunk_rest(seq__56690__$1);
var G__56910 = c__4556__auto__;
var G__56911 = cljs.core.count(c__4556__auto__);
var G__56912 = (0);
seq__56690 = G__56909;
chunk__56691 = G__56910;
count__56692 = G__56911;
i__56693 = G__56912;
continue;
} else {
var map__56710 = cljs.core.first(seq__56690__$1);
var map__56710__$1 = (((((!((map__56710 == null))))?(((((map__56710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56710):map__56710);
var src = map__56710__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56710__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56710__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56710__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56710__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56712){var e_56913 = e56712;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56913);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56913.message)].join('')));
}

var G__56914 = cljs.core.next(seq__56690__$1);
var G__56915 = null;
var G__56916 = (0);
var G__56917 = (0);
seq__56690 = G__56914;
chunk__56691 = G__56915;
count__56692 = G__56916;
i__56693 = G__56917;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__56713 = cljs.core.seq(js_requires);
var chunk__56714 = null;
var count__56715 = (0);
var i__56716 = (0);
while(true){
if((i__56716 < count__56715)){
var js_ns = chunk__56714.cljs$core$IIndexed$_nth$arity$2(null,i__56716);
var require_str_56918 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56918);


var G__56919 = seq__56713;
var G__56920 = chunk__56714;
var G__56921 = count__56715;
var G__56922 = (i__56716 + (1));
seq__56713 = G__56919;
chunk__56714 = G__56920;
count__56715 = G__56921;
i__56716 = G__56922;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__56713);
if(temp__5754__auto__){
var seq__56713__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56713__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56713__$1);
var G__56923 = cljs.core.chunk_rest(seq__56713__$1);
var G__56924 = c__4556__auto__;
var G__56925 = cljs.core.count(c__4556__auto__);
var G__56926 = (0);
seq__56713 = G__56923;
chunk__56714 = G__56924;
count__56715 = G__56925;
i__56716 = G__56926;
continue;
} else {
var js_ns = cljs.core.first(seq__56713__$1);
var require_str_56927 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56927);


var G__56928 = cljs.core.next(seq__56713__$1);
var G__56929 = null;
var G__56930 = (0);
var G__56931 = (0);
seq__56713 = G__56928;
chunk__56714 = G__56929;
count__56715 = G__56930;
i__56716 = G__56931;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__56722){
var map__56723 = p__56722;
var map__56723__$1 = (((((!((map__56723 == null))))?(((((map__56723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56723):map__56723);
var msg = map__56723__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56723__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56723__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56728(s__56729){
return (new cljs.core.LazySeq(null,(function (){
var s__56729__$1 = s__56729;
while(true){
var temp__5754__auto__ = cljs.core.seq(s__56729__$1);
if(temp__5754__auto__){
var xs__6309__auto__ = temp__5754__auto__;
var map__56734 = cljs.core.first(xs__6309__auto__);
var map__56734__$1 = (((((!((map__56734 == null))))?(((((map__56734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56734):map__56734);
var src = map__56734__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56734__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56734__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__56729__$1,map__56734,map__56734__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__56723,map__56723__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56728_$_iter__56730(s__56731){
return (new cljs.core.LazySeq(null,((function (s__56729__$1,map__56734,map__56734__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__56723,map__56723__$1,msg,info,reload_info){
return (function (){
var s__56731__$1 = s__56731;
while(true){
var temp__5754__auto____$1 = cljs.core.seq(s__56731__$1);
if(temp__5754__auto____$1){
var s__56731__$2 = temp__5754__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56731__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__56731__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__56733 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__56732 = (0);
while(true){
if((i__56732 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__56732);
cljs.core.chunk_append(b__56733,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__56932 = (i__56732 + (1));
i__56732 = G__56932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56733),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56728_$_iter__56730(cljs.core.chunk_rest(s__56731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56733),null);
}
} else {
var warning = cljs.core.first(s__56731__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56728_$_iter__56730(cljs.core.rest(s__56731__$2)));
}
} else {
return null;
}
break;
}
});})(s__56729__$1,map__56734,map__56734__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__56723,map__56723__$1,msg,info,reload_info))
,null,null));
});})(s__56729__$1,map__56734,map__56734__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__56723,map__56723__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56728(cljs.core.rest(s__56729__$1)));
} else {
var G__56933 = cljs.core.rest(s__56729__$1);
s__56729__$1 = G__56933;
continue;
}
} else {
var G__56934 = cljs.core.rest(s__56729__$1);
s__56729__$1 = G__56934;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__56739_56935 = cljs.core.seq(warnings);
var chunk__56740_56936 = null;
var count__56741_56937 = (0);
var i__56742_56938 = (0);
while(true){
if((i__56742_56938 < count__56741_56937)){
var map__56747_56939 = chunk__56740_56936.cljs$core$IIndexed$_nth$arity$2(null,i__56742_56938);
var map__56747_56940__$1 = (((((!((map__56747_56939 == null))))?(((((map__56747_56939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56747_56939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56747_56939):map__56747_56939);
var w_56941 = map__56747_56940__$1;
var msg_56942__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56747_56940__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56747_56940__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56747_56940__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56747_56940__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56945)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56943),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56944),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56942__$1)].join(''));


var G__56946 = seq__56739_56935;
var G__56947 = chunk__56740_56936;
var G__56948 = count__56741_56937;
var G__56949 = (i__56742_56938 + (1));
seq__56739_56935 = G__56946;
chunk__56740_56936 = G__56947;
count__56741_56937 = G__56948;
i__56742_56938 = G__56949;
continue;
} else {
var temp__5754__auto___56950 = cljs.core.seq(seq__56739_56935);
if(temp__5754__auto___56950){
var seq__56739_56951__$1 = temp__5754__auto___56950;
if(cljs.core.chunked_seq_QMARK_(seq__56739_56951__$1)){
var c__4556__auto___56952 = cljs.core.chunk_first(seq__56739_56951__$1);
var G__56953 = cljs.core.chunk_rest(seq__56739_56951__$1);
var G__56954 = c__4556__auto___56952;
var G__56955 = cljs.core.count(c__4556__auto___56952);
var G__56956 = (0);
seq__56739_56935 = G__56953;
chunk__56740_56936 = G__56954;
count__56741_56937 = G__56955;
i__56742_56938 = G__56956;
continue;
} else {
var map__56749_56957 = cljs.core.first(seq__56739_56951__$1);
var map__56749_56958__$1 = (((((!((map__56749_56957 == null))))?(((((map__56749_56957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56749_56957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56749_56957):map__56749_56957);
var w_56959 = map__56749_56958__$1;
var msg_56960__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56749_56958__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56749_56958__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56749_56958__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56749_56958__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56963)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56961),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56962),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56960__$1)].join(''));


var G__56964 = cljs.core.next(seq__56739_56951__$1);
var G__56965 = null;
var G__56966 = (0);
var G__56967 = (0);
seq__56739_56935 = G__56964;
chunk__56740_56936 = G__56965;
count__56741_56937 = G__56966;
i__56742_56938 = G__56967;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__56721_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56721_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__56760){
var map__56761 = p__56760;
var map__56761__$1 = (((((!((map__56761 == null))))?(((((map__56761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56761):map__56761);
var msg = map__56761__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56761__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__56763 = cljs.core.seq(updates);
var chunk__56765 = null;
var count__56766 = (0);
var i__56767 = (0);
while(true){
if((i__56767 < count__56766)){
var path = chunk__56765.cljs$core$IIndexed$_nth$arity$2(null,i__56767);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56809_56969 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56813_56970 = null;
var count__56814_56971 = (0);
var i__56815_56972 = (0);
while(true){
if((i__56815_56972 < count__56814_56971)){
var node_56975 = chunk__56813_56970.cljs$core$IIndexed$_nth$arity$2(null,i__56815_56972);
if(cljs.core.not(node_56975.shadow$old)){
var path_match_56976 = shadow.cljs.devtools.client.browser.match_paths(node_56975.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56976)){
var new_link_56977 = (function (){var G__56821 = node_56975.cloneNode(true);
G__56821.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56976),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56821;
})();
(node_56975.shadow$old = true);

(new_link_56977.onload = ((function (seq__56809_56969,chunk__56813_56970,count__56814_56971,i__56815_56972,seq__56763,chunk__56765,count__56766,i__56767,new_link_56977,path_match_56976,node_56975,path,map__56761,map__56761__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_56975);
});})(seq__56809_56969,chunk__56813_56970,count__56814_56971,i__56815_56972,seq__56763,chunk__56765,count__56766,i__56767,new_link_56977,path_match_56976,node_56975,path,map__56761,map__56761__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56976], 0));

goog.dom.insertSiblingAfter(new_link_56977,node_56975);


var G__56979 = seq__56809_56969;
var G__56980 = chunk__56813_56970;
var G__56981 = count__56814_56971;
var G__56982 = (i__56815_56972 + (1));
seq__56809_56969 = G__56979;
chunk__56813_56970 = G__56980;
count__56814_56971 = G__56981;
i__56815_56972 = G__56982;
continue;
} else {
var G__56983 = seq__56809_56969;
var G__56984 = chunk__56813_56970;
var G__56985 = count__56814_56971;
var G__56986 = (i__56815_56972 + (1));
seq__56809_56969 = G__56983;
chunk__56813_56970 = G__56984;
count__56814_56971 = G__56985;
i__56815_56972 = G__56986;
continue;
}
} else {
var G__56987 = seq__56809_56969;
var G__56988 = chunk__56813_56970;
var G__56989 = count__56814_56971;
var G__56990 = (i__56815_56972 + (1));
seq__56809_56969 = G__56987;
chunk__56813_56970 = G__56988;
count__56814_56971 = G__56989;
i__56815_56972 = G__56990;
continue;
}
} else {
var temp__5754__auto___56992 = cljs.core.seq(seq__56809_56969);
if(temp__5754__auto___56992){
var seq__56809_56993__$1 = temp__5754__auto___56992;
if(cljs.core.chunked_seq_QMARK_(seq__56809_56993__$1)){
var c__4556__auto___56995 = cljs.core.chunk_first(seq__56809_56993__$1);
var G__56996 = cljs.core.chunk_rest(seq__56809_56993__$1);
var G__56997 = c__4556__auto___56995;
var G__56998 = cljs.core.count(c__4556__auto___56995);
var G__56999 = (0);
seq__56809_56969 = G__56996;
chunk__56813_56970 = G__56997;
count__56814_56971 = G__56998;
i__56815_56972 = G__56999;
continue;
} else {
var node_57000 = cljs.core.first(seq__56809_56993__$1);
if(cljs.core.not(node_57000.shadow$old)){
var path_match_57001 = shadow.cljs.devtools.client.browser.match_paths(node_57000.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57001)){
var new_link_57002 = (function (){var G__56822 = node_57000.cloneNode(true);
G__56822.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57001),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56822;
})();
(node_57000.shadow$old = true);

(new_link_57002.onload = ((function (seq__56809_56969,chunk__56813_56970,count__56814_56971,i__56815_56972,seq__56763,chunk__56765,count__56766,i__56767,new_link_57002,path_match_57001,node_57000,seq__56809_56993__$1,temp__5754__auto___56992,path,map__56761,map__56761__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_57000);
});})(seq__56809_56969,chunk__56813_56970,count__56814_56971,i__56815_56972,seq__56763,chunk__56765,count__56766,i__56767,new_link_57002,path_match_57001,node_57000,seq__56809_56993__$1,temp__5754__auto___56992,path,map__56761,map__56761__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57001], 0));

goog.dom.insertSiblingAfter(new_link_57002,node_57000);


var G__57004 = cljs.core.next(seq__56809_56993__$1);
var G__57005 = null;
var G__57006 = (0);
var G__57007 = (0);
seq__56809_56969 = G__57004;
chunk__56813_56970 = G__57005;
count__56814_56971 = G__57006;
i__56815_56972 = G__57007;
continue;
} else {
var G__57009 = cljs.core.next(seq__56809_56993__$1);
var G__57010 = null;
var G__57011 = (0);
var G__57012 = (0);
seq__56809_56969 = G__57009;
chunk__56813_56970 = G__57010;
count__56814_56971 = G__57011;
i__56815_56972 = G__57012;
continue;
}
} else {
var G__57013 = cljs.core.next(seq__56809_56993__$1);
var G__57014 = null;
var G__57015 = (0);
var G__57016 = (0);
seq__56809_56969 = G__57013;
chunk__56813_56970 = G__57014;
count__56814_56971 = G__57015;
i__56815_56972 = G__57016;
continue;
}
}
} else {
}
}
break;
}


var G__57017 = seq__56763;
var G__57018 = chunk__56765;
var G__57019 = count__56766;
var G__57020 = (i__56767 + (1));
seq__56763 = G__57017;
chunk__56765 = G__57018;
count__56766 = G__57019;
i__56767 = G__57020;
continue;
} else {
var G__57021 = seq__56763;
var G__57022 = chunk__56765;
var G__57023 = count__56766;
var G__57024 = (i__56767 + (1));
seq__56763 = G__57021;
chunk__56765 = G__57022;
count__56766 = G__57023;
i__56767 = G__57024;
continue;
}
} else {
var temp__5754__auto__ = cljs.core.seq(seq__56763);
if(temp__5754__auto__){
var seq__56763__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56763__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56763__$1);
var G__57025 = cljs.core.chunk_rest(seq__56763__$1);
var G__57026 = c__4556__auto__;
var G__57027 = cljs.core.count(c__4556__auto__);
var G__57028 = (0);
seq__56763 = G__57025;
chunk__56765 = G__57026;
count__56766 = G__57027;
i__56767 = G__57028;
continue;
} else {
var path = cljs.core.first(seq__56763__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56823_57029 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56827_57030 = null;
var count__56828_57031 = (0);
var i__56829_57032 = (0);
while(true){
if((i__56829_57032 < count__56828_57031)){
var node_57033 = chunk__56827_57030.cljs$core$IIndexed$_nth$arity$2(null,i__56829_57032);
if(cljs.core.not(node_57033.shadow$old)){
var path_match_57034 = shadow.cljs.devtools.client.browser.match_paths(node_57033.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57034)){
var new_link_57035 = (function (){var G__56841 = node_57033.cloneNode(true);
G__56841.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57034),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56841;
})();
(node_57033.shadow$old = true);

(new_link_57035.onload = ((function (seq__56823_57029,chunk__56827_57030,count__56828_57031,i__56829_57032,seq__56763,chunk__56765,count__56766,i__56767,new_link_57035,path_match_57034,node_57033,path,seq__56763__$1,temp__5754__auto__,map__56761,map__56761__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_57033);
});})(seq__56823_57029,chunk__56827_57030,count__56828_57031,i__56829_57032,seq__56763,chunk__56765,count__56766,i__56767,new_link_57035,path_match_57034,node_57033,path,seq__56763__$1,temp__5754__auto__,map__56761,map__56761__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57034], 0));

goog.dom.insertSiblingAfter(new_link_57035,node_57033);


var G__57036 = seq__56823_57029;
var G__57037 = chunk__56827_57030;
var G__57038 = count__56828_57031;
var G__57039 = (i__56829_57032 + (1));
seq__56823_57029 = G__57036;
chunk__56827_57030 = G__57037;
count__56828_57031 = G__57038;
i__56829_57032 = G__57039;
continue;
} else {
var G__57040 = seq__56823_57029;
var G__57041 = chunk__56827_57030;
var G__57042 = count__56828_57031;
var G__57043 = (i__56829_57032 + (1));
seq__56823_57029 = G__57040;
chunk__56827_57030 = G__57041;
count__56828_57031 = G__57042;
i__56829_57032 = G__57043;
continue;
}
} else {
var G__57044 = seq__56823_57029;
var G__57045 = chunk__56827_57030;
var G__57046 = count__56828_57031;
var G__57047 = (i__56829_57032 + (1));
seq__56823_57029 = G__57044;
chunk__56827_57030 = G__57045;
count__56828_57031 = G__57046;
i__56829_57032 = G__57047;
continue;
}
} else {
var temp__5754__auto___57048__$1 = cljs.core.seq(seq__56823_57029);
if(temp__5754__auto___57048__$1){
var seq__56823_57050__$1 = temp__5754__auto___57048__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56823_57050__$1)){
var c__4556__auto___57051 = cljs.core.chunk_first(seq__56823_57050__$1);
var G__57054 = cljs.core.chunk_rest(seq__56823_57050__$1);
var G__57055 = c__4556__auto___57051;
var G__57056 = cljs.core.count(c__4556__auto___57051);
var G__57057 = (0);
seq__56823_57029 = G__57054;
chunk__56827_57030 = G__57055;
count__56828_57031 = G__57056;
i__56829_57032 = G__57057;
continue;
} else {
var node_57060 = cljs.core.first(seq__56823_57050__$1);
if(cljs.core.not(node_57060.shadow$old)){
var path_match_57061 = shadow.cljs.devtools.client.browser.match_paths(node_57060.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57061)){
var new_link_57062 = (function (){var G__56846 = node_57060.cloneNode(true);
G__56846.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57061),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56846;
})();
(node_57060.shadow$old = true);

(new_link_57062.onload = ((function (seq__56823_57029,chunk__56827_57030,count__56828_57031,i__56829_57032,seq__56763,chunk__56765,count__56766,i__56767,new_link_57062,path_match_57061,node_57060,seq__56823_57050__$1,temp__5754__auto___57048__$1,path,seq__56763__$1,temp__5754__auto__,map__56761,map__56761__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_57060);
});})(seq__56823_57029,chunk__56827_57030,count__56828_57031,i__56829_57032,seq__56763,chunk__56765,count__56766,i__56767,new_link_57062,path_match_57061,node_57060,seq__56823_57050__$1,temp__5754__auto___57048__$1,path,seq__56763__$1,temp__5754__auto__,map__56761,map__56761__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57061], 0));

goog.dom.insertSiblingAfter(new_link_57062,node_57060);


var G__57063 = cljs.core.next(seq__56823_57050__$1);
var G__57064 = null;
var G__57065 = (0);
var G__57066 = (0);
seq__56823_57029 = G__57063;
chunk__56827_57030 = G__57064;
count__56828_57031 = G__57065;
i__56829_57032 = G__57066;
continue;
} else {
var G__57067 = cljs.core.next(seq__56823_57050__$1);
var G__57068 = null;
var G__57069 = (0);
var G__57070 = (0);
seq__56823_57029 = G__57067;
chunk__56827_57030 = G__57068;
count__56828_57031 = G__57069;
i__56829_57032 = G__57070;
continue;
}
} else {
var G__57072 = cljs.core.next(seq__56823_57050__$1);
var G__57073 = null;
var G__57074 = (0);
var G__57075 = (0);
seq__56823_57029 = G__57072;
chunk__56827_57030 = G__57073;
count__56828_57031 = G__57074;
i__56829_57032 = G__57075;
continue;
}
}
} else {
}
}
break;
}


var G__57076 = cljs.core.next(seq__56763__$1);
var G__57077 = null;
var G__57078 = (0);
var G__57079 = (0);
seq__56763 = G__57076;
chunk__56765 = G__57077;
count__56766 = G__57078;
i__56767 = G__57079;
continue;
} else {
var G__57081 = cljs.core.next(seq__56763__$1);
var G__57082 = null;
var G__57083 = (0);
var G__57084 = (0);
seq__56763 = G__57081;
chunk__56765 = G__57082;
count__56766 = G__57083;
i__56767 = G__57084;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__56847){
var map__56848 = p__56847;
var map__56848__$1 = (((((!((map__56848 == null))))?(((((map__56848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56848):map__56848);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56848__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__56854){
var map__56856 = p__56854;
var map__56856__$1 = (((((!((map__56856 == null))))?(((((map__56856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56856):map__56856);
var _ = map__56856__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56856__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__56861,done,error){
var map__56862 = p__56861;
var map__56862__$1 = (((((!((map__56862 == null))))?(((((map__56862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56862):map__56862);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56862__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__56864,done,error){
var map__56865 = p__56864;
var map__56865__$1 = (((((!((map__56865 == null))))?(((((map__56865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56865):map__56865);
var msg = map__56865__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56865__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56865__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56865__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__56868){
var map__56869 = p__56868;
var map__56869__$1 = (((((!((map__56869 == null))))?(((((map__56869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56869):map__56869);
var src = map__56869__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56869__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__56872 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__56872) : done.call(null,G__56872));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__56875){
var map__56876 = p__56875;
var map__56876__$1 = (((((!((map__56876 == null))))?(((((map__56876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56876):map__56876);
var msg__$1 = map__56876__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56876__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e56881){var ex = e56881;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__56882){
var map__56883 = p__56882;
var map__56883__$1 = (((((!((map__56883 == null))))?(((((map__56883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56883):map__56883);
var env = map__56883__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56883__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__56885){
var map__56886 = p__56885;
var map__56886__$1 = (((((!((map__56886 == null))))?(((((map__56886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56886):map__56886);
var msg = map__56886__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56886__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__56888){
var map__56889 = p__56888;
var map__56889__$1 = (((((!((map__56889 == null))))?(((((map__56889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56889):map__56889);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56889__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56889__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__56891){
var map__56892 = p__56891;
var map__56892__$1 = (((((!((map__56892 == null))))?(((((map__56892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56892):map__56892);
var svc = map__56892__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56892__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
