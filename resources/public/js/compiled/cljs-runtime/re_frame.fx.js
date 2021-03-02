goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__58214 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__58215 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__58215);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5754__auto___58307 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5754__auto___58307)){
var new_db_58308 = temp__5754__auto___58307;
var fexpr__58217_58309 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__58217_58309.cljs$core$IFn$_invoke$arity$1 ? fexpr__58217_58309.cljs$core$IFn$_invoke$arity$1(new_db_58308) : fexpr__58217_58309.call(null,new_db_58308));
} else {
}

var seq__58218 = cljs.core.seq(effects_without_db);
var chunk__58219 = null;
var count__58220 = (0);
var i__58221 = (0);
while(true){
if((i__58221 < count__58220)){
var vec__58230 = chunk__58219.cljs$core$IIndexed$_nth$arity$2(null,i__58221);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58230,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58230,(1),null);
var temp__5752__auto___58310 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___58310)){
var effect_fn_58311 = temp__5752__auto___58310;
(effect_fn_58311.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58311.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58311.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58312 = seq__58218;
var G__58313 = chunk__58219;
var G__58314 = count__58220;
var G__58315 = (i__58221 + (1));
seq__58218 = G__58312;
chunk__58219 = G__58313;
count__58220 = G__58314;
i__58221 = G__58315;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__58218);
if(temp__5754__auto__){
var seq__58218__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58218__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58218__$1);
var G__58316 = cljs.core.chunk_rest(seq__58218__$1);
var G__58317 = c__4556__auto__;
var G__58318 = cljs.core.count(c__4556__auto__);
var G__58319 = (0);
seq__58218 = G__58316;
chunk__58219 = G__58317;
count__58220 = G__58318;
i__58221 = G__58319;
continue;
} else {
var vec__58234 = cljs.core.first(seq__58218__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58234,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58234,(1),null);
var temp__5752__auto___58320 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___58320)){
var effect_fn_58321 = temp__5752__auto___58320;
(effect_fn_58321.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58321.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58321.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58322 = cljs.core.next(seq__58218__$1);
var G__58323 = null;
var G__58324 = (0);
var G__58325 = (0);
seq__58218 = G__58322;
chunk__58219 = G__58323;
count__58220 = G__58324;
i__58221 = G__58325;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__57891__auto___58326 = re_frame.interop.now();
var duration__57892__auto___58327 = (end__57891__auto___58326 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__57892__auto___58327,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__57891__auto___58326);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__58214);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5754__auto___58328 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5754__auto___58328)){
var new_db_58329 = temp__5754__auto___58328;
var fexpr__58238_58330 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__58238_58330.cljs$core$IFn$_invoke$arity$1 ? fexpr__58238_58330.cljs$core$IFn$_invoke$arity$1(new_db_58329) : fexpr__58238_58330.call(null,new_db_58329));
} else {
}

var seq__58240 = cljs.core.seq(effects_without_db);
var chunk__58241 = null;
var count__58242 = (0);
var i__58243 = (0);
while(true){
if((i__58243 < count__58242)){
var vec__58251 = chunk__58241.cljs$core$IIndexed$_nth$arity$2(null,i__58243);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58251,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58251,(1),null);
var temp__5752__auto___58332 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___58332)){
var effect_fn_58334 = temp__5752__auto___58332;
(effect_fn_58334.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58334.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58334.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58335 = seq__58240;
var G__58336 = chunk__58241;
var G__58337 = count__58242;
var G__58338 = (i__58243 + (1));
seq__58240 = G__58335;
chunk__58241 = G__58336;
count__58242 = G__58337;
i__58243 = G__58338;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__58240);
if(temp__5754__auto__){
var seq__58240__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58240__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58240__$1);
var G__58339 = cljs.core.chunk_rest(seq__58240__$1);
var G__58340 = c__4556__auto__;
var G__58341 = cljs.core.count(c__4556__auto__);
var G__58342 = (0);
seq__58240 = G__58339;
chunk__58241 = G__58340;
count__58242 = G__58341;
i__58243 = G__58342;
continue;
} else {
var vec__58255 = cljs.core.first(seq__58240__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58255,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58255,(1),null);
var temp__5752__auto___58343 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___58343)){
var effect_fn_58344 = temp__5752__auto___58343;
(effect_fn_58344.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58344.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58344.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__58345 = cljs.core.next(seq__58240__$1);
var G__58346 = null;
var G__58347 = (0);
var G__58348 = (0);
seq__58240 = G__58345;
chunk__58241 = G__58346;
count__58242 = G__58347;
i__58243 = G__58348;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__58259){
var map__58260 = p__58259;
var map__58260__$1 = (((((!((map__58260 == null))))?(((((map__58260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58260):map__58260);
var effect = map__58260__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58260__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58260__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__58263 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__58264 = null;
var count__58265 = (0);
var i__58266 = (0);
while(true){
if((i__58266 < count__58265)){
var effect = chunk__58264.cljs$core$IIndexed$_nth$arity$2(null,i__58266);
re_frame.fx.dispatch_later(effect);


var G__58351 = seq__58263;
var G__58352 = chunk__58264;
var G__58353 = count__58265;
var G__58354 = (i__58266 + (1));
seq__58263 = G__58351;
chunk__58264 = G__58352;
count__58265 = G__58353;
i__58266 = G__58354;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__58263);
if(temp__5754__auto__){
var seq__58263__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58263__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58263__$1);
var G__58356 = cljs.core.chunk_rest(seq__58263__$1);
var G__58357 = c__4556__auto__;
var G__58358 = cljs.core.count(c__4556__auto__);
var G__58359 = (0);
seq__58263 = G__58356;
chunk__58264 = G__58357;
count__58265 = G__58358;
i__58266 = G__58359;
continue;
} else {
var effect = cljs.core.first(seq__58263__$1);
re_frame.fx.dispatch_later(effect);


var G__58361 = cljs.core.next(seq__58263__$1);
var G__58362 = null;
var G__58363 = (0);
var G__58364 = (0);
seq__58263 = G__58361;
chunk__58264 = G__58362;
count__58265 = G__58363;
i__58266 = G__58364;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__58267 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__58268 = null;
var count__58269 = (0);
var i__58270 = (0);
while(true){
if((i__58270 < count__58269)){
var vec__58278 = chunk__58268.cljs$core$IIndexed$_nth$arity$2(null,i__58270);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58278,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58278,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5752__auto___58365 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___58365)){
var effect_fn_58366 = temp__5752__auto___58365;
(effect_fn_58366.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58366.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58366.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__58368 = seq__58267;
var G__58369 = chunk__58268;
var G__58370 = count__58269;
var G__58371 = (i__58270 + (1));
seq__58267 = G__58368;
chunk__58268 = G__58369;
count__58269 = G__58370;
i__58270 = G__58371;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__58267);
if(temp__5754__auto__){
var seq__58267__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58267__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58267__$1);
var G__58373 = cljs.core.chunk_rest(seq__58267__$1);
var G__58374 = c__4556__auto__;
var G__58375 = cljs.core.count(c__4556__auto__);
var G__58376 = (0);
seq__58267 = G__58373;
chunk__58268 = G__58374;
count__58269 = G__58375;
i__58270 = G__58376;
continue;
} else {
var vec__58283 = cljs.core.first(seq__58267__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58283,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58283,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5752__auto___58377 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___58377)){
var effect_fn_58378 = temp__5752__auto___58377;
(effect_fn_58378.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58378.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58378.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__58379 = cljs.core.next(seq__58267__$1);
var G__58380 = null;
var G__58381 = (0);
var G__58382 = (0);
seq__58267 = G__58379;
chunk__58268 = G__58380;
count__58269 = G__58381;
i__58270 = G__58382;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__58286 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__58287 = null;
var count__58288 = (0);
var i__58289 = (0);
while(true){
if((i__58289 < count__58288)){
var event = chunk__58287.cljs$core$IIndexed$_nth$arity$2(null,i__58289);
re_frame.router.dispatch(event);


var G__58385 = seq__58286;
var G__58386 = chunk__58287;
var G__58387 = count__58288;
var G__58388 = (i__58289 + (1));
seq__58286 = G__58385;
chunk__58287 = G__58386;
count__58288 = G__58387;
i__58289 = G__58388;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__58286);
if(temp__5754__auto__){
var seq__58286__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58286__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58286__$1);
var G__58389 = cljs.core.chunk_rest(seq__58286__$1);
var G__58390 = c__4556__auto__;
var G__58391 = cljs.core.count(c__4556__auto__);
var G__58392 = (0);
seq__58286 = G__58389;
chunk__58287 = G__58390;
count__58288 = G__58391;
i__58289 = G__58392;
continue;
} else {
var event = cljs.core.first(seq__58286__$1);
re_frame.router.dispatch(event);


var G__58393 = cljs.core.next(seq__58286__$1);
var G__58394 = null;
var G__58395 = (0);
var G__58396 = (0);
seq__58286 = G__58393;
chunk__58287 = G__58394;
count__58288 = G__58395;
i__58289 = G__58396;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__58291 = cljs.core.seq(value);
var chunk__58292 = null;
var count__58293 = (0);
var i__58294 = (0);
while(true){
if((i__58294 < count__58293)){
var event = chunk__58292.cljs$core$IIndexed$_nth$arity$2(null,i__58294);
clear_event(event);


var G__58398 = seq__58291;
var G__58399 = chunk__58292;
var G__58400 = count__58293;
var G__58401 = (i__58294 + (1));
seq__58291 = G__58398;
chunk__58292 = G__58399;
count__58293 = G__58400;
i__58294 = G__58401;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__58291);
if(temp__5754__auto__){
var seq__58291__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58291__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58291__$1);
var G__58403 = cljs.core.chunk_rest(seq__58291__$1);
var G__58404 = c__4556__auto__;
var G__58405 = cljs.core.count(c__4556__auto__);
var G__58406 = (0);
seq__58291 = G__58403;
chunk__58292 = G__58404;
count__58293 = G__58405;
i__58294 = G__58406;
continue;
} else {
var event = cljs.core.first(seq__58291__$1);
clear_event(event);


var G__58407 = cljs.core.next(seq__58291__$1);
var G__58408 = null;
var G__58409 = (0);
var G__58410 = (0);
seq__58291 = G__58407;
chunk__58292 = G__58408;
count__58293 = G__58409;
i__58294 = G__58410;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
