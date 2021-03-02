goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__56330,p__56331){
var map__56333 = p__56330;
var map__56333__$1 = (((((!((map__56333 == null))))?(((((map__56333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56333):map__56333);
var svc = map__56333__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56333__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56333__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56333__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__56334 = p__56331;
var map__56334__$1 = (((((!((map__56334 == null))))?(((((map__56334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56334):map__56334);
var msg = map__56334__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56334__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56334__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56334__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56334__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__56347,p__56348){
var map__56349 = p__56347;
var map__56349__$1 = (((((!((map__56349 == null))))?(((((map__56349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56349):map__56349);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56349__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__56350 = p__56348;
var map__56350__$1 = (((((!((map__56350 == null))))?(((((map__56350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56350):map__56350);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56350__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__56358,p__56359){
var map__56360 = p__56358;
var map__56360__$1 = (((((!((map__56360 == null))))?(((((map__56360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56360):map__56360);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__56361 = p__56359;
var map__56361__$1 = (((((!((map__56361 == null))))?(((((map__56361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56361):map__56361);
var msg = map__56361__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56361__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__56368,tid){
var map__56369 = p__56368;
var map__56369__$1 = (((((!((map__56369 == null))))?(((((map__56369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56369):map__56369);
var svc = map__56369__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56369__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__56382 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__56383 = null;
var count__56384 = (0);
var i__56385 = (0);
while(true){
if((i__56385 < count__56384)){
var vec__56397 = chunk__56383.cljs$core$IIndexed$_nth$arity$2(null,i__56385);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56397,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56397,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__56422 = seq__56382;
var G__56423 = chunk__56383;
var G__56424 = count__56384;
var G__56425 = (i__56385 + (1));
seq__56382 = G__56422;
chunk__56383 = G__56423;
count__56384 = G__56424;
i__56385 = G__56425;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__56382);
if(temp__5754__auto__){
var seq__56382__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56382__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56382__$1);
var G__56426 = cljs.core.chunk_rest(seq__56382__$1);
var G__56427 = c__4556__auto__;
var G__56428 = cljs.core.count(c__4556__auto__);
var G__56429 = (0);
seq__56382 = G__56426;
chunk__56383 = G__56427;
count__56384 = G__56428;
i__56385 = G__56429;
continue;
} else {
var vec__56403 = cljs.core.first(seq__56382__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56403,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56403,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__56431 = cljs.core.next(seq__56382__$1);
var G__56432 = null;
var G__56433 = (0);
var G__56434 = (0);
seq__56382 = G__56431;
chunk__56383 = G__56432;
count__56384 = G__56433;
i__56385 = G__56434;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__56376_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__56376_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__56377_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__56377_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__56378_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__56378_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__56379_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__56379_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__56407){
var map__56408 = p__56407;
var map__56408__$1 = (((((!((map__56408 == null))))?(((((map__56408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56408):map__56408);
var svc = map__56408__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56408__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56408__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
