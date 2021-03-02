goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__57913){
var map__57914 = p__57913;
var map__57914__$1 = (((((!((map__57914 == null))))?(((((map__57914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57914):map__57914);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__57918_57952 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__57919_57953 = null;
var count__57920_57954 = (0);
var i__57921_57955 = (0);
while(true){
if((i__57921_57955 < count__57920_57954)){
var vec__57933_57959 = chunk__57919_57953.cljs$core$IIndexed$_nth$arity$2(null,i__57921_57955);
var k_57960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57933_57959,(0),null);
var cb_57961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57933_57959,(1),null);
try{var G__57937_57962 = cljs.core.deref(re_frame.trace.traces);
(cb_57961.cljs$core$IFn$_invoke$arity$1 ? cb_57961.cljs$core$IFn$_invoke$arity$1(G__57937_57962) : cb_57961.call(null,G__57937_57962));
}catch (e57936){var e_57963 = e57936;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_57960,"while storing",cljs.core.deref(re_frame.trace.traces),e_57963], 0));
}

var G__57970 = seq__57918_57952;
var G__57971 = chunk__57919_57953;
var G__57972 = count__57920_57954;
var G__57973 = (i__57921_57955 + (1));
seq__57918_57952 = G__57970;
chunk__57919_57953 = G__57971;
count__57920_57954 = G__57972;
i__57921_57955 = G__57973;
continue;
} else {
var temp__5754__auto___57974 = cljs.core.seq(seq__57918_57952);
if(temp__5754__auto___57974){
var seq__57918_57975__$1 = temp__5754__auto___57974;
if(cljs.core.chunked_seq_QMARK_(seq__57918_57975__$1)){
var c__4556__auto___57979 = cljs.core.chunk_first(seq__57918_57975__$1);
var G__57980 = cljs.core.chunk_rest(seq__57918_57975__$1);
var G__57981 = c__4556__auto___57979;
var G__57982 = cljs.core.count(c__4556__auto___57979);
var G__57983 = (0);
seq__57918_57952 = G__57980;
chunk__57919_57953 = G__57981;
count__57920_57954 = G__57982;
i__57921_57955 = G__57983;
continue;
} else {
var vec__57938_57984 = cljs.core.first(seq__57918_57975__$1);
var k_57985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57938_57984,(0),null);
var cb_57986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57938_57984,(1),null);
try{var G__57943_57987 = cljs.core.deref(re_frame.trace.traces);
(cb_57986.cljs$core$IFn$_invoke$arity$1 ? cb_57986.cljs$core$IFn$_invoke$arity$1(G__57943_57987) : cb_57986.call(null,G__57943_57987));
}catch (e57941){var e_57988 = e57941;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_57985,"while storing",cljs.core.deref(re_frame.trace.traces),e_57988], 0));
}

var G__57992 = cljs.core.next(seq__57918_57975__$1);
var G__57993 = null;
var G__57994 = (0);
var G__57995 = (0);
seq__57918_57952 = G__57992;
chunk__57919_57953 = G__57993;
count__57920_57954 = G__57994;
i__57921_57955 = G__57995;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
