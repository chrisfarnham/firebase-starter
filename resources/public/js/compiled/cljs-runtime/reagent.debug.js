goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__56324__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56325__i = 0, G__56325__a = new Array(arguments.length -  0);
while (G__56325__i < G__56325__a.length) {G__56325__a[G__56325__i] = arguments[G__56325__i + 0]; ++G__56325__i;}
  args = new cljs.core.IndexedSeq(G__56325__a,0,null);
} 
return G__56324__delegate.call(this,args);};
G__56324.cljs$lang$maxFixedArity = 0;
G__56324.cljs$lang$applyTo = (function (arglist__56326){
var args = cljs.core.seq(arglist__56326);
return G__56324__delegate(args);
});
G__56324.cljs$core$IFn$_invoke$arity$variadic = G__56324__delegate;
return G__56324;
})()
);

(o.error = (function() { 
var G__56327__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__56327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56328__i = 0, G__56328__a = new Array(arguments.length -  0);
while (G__56328__i < G__56328__a.length) {G__56328__a[G__56328__i] = arguments[G__56328__i + 0]; ++G__56328__i;}
  args = new cljs.core.IndexedSeq(G__56328__a,0,null);
} 
return G__56327__delegate.call(this,args);};
G__56327.cljs$lang$maxFixedArity = 0;
G__56327.cljs$lang$applyTo = (function (arglist__56329){
var args = cljs.core.seq(arglist__56329);
return G__56327__delegate(args);
});
G__56327.cljs$core$IFn$_invoke$arity$variadic = G__56327__delegate;
return G__56327;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
