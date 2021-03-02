goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__57233 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__57234 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__57234);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__57235 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__57236 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__57236);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__57235);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__57233);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__57241 = arguments.length;
switch (G__57241) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__57246 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57246,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57246,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__57255_57287 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__57256_57288 = null;
var count__57257_57289 = (0);
var i__57258_57290 = (0);
while(true){
if((i__57258_57290 < count__57257_57289)){
var vec__57271_57291 = chunk__57256_57288.cljs$core$IIndexed$_nth$arity$2(null,i__57258_57290);
var container_57292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57271_57291,(0),null);
var comp_57293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57271_57291,(1),null);
reagent.dom.re_render_component(comp_57293,container_57292);


var G__57294 = seq__57255_57287;
var G__57295 = chunk__57256_57288;
var G__57296 = count__57257_57289;
var G__57297 = (i__57258_57290 + (1));
seq__57255_57287 = G__57294;
chunk__57256_57288 = G__57295;
count__57257_57289 = G__57296;
i__57258_57290 = G__57297;
continue;
} else {
var temp__5754__auto___57298 = cljs.core.seq(seq__57255_57287);
if(temp__5754__auto___57298){
var seq__57255_57299__$1 = temp__5754__auto___57298;
if(cljs.core.chunked_seq_QMARK_(seq__57255_57299__$1)){
var c__4556__auto___57300 = cljs.core.chunk_first(seq__57255_57299__$1);
var G__57301 = cljs.core.chunk_rest(seq__57255_57299__$1);
var G__57302 = c__4556__auto___57300;
var G__57303 = cljs.core.count(c__4556__auto___57300);
var G__57304 = (0);
seq__57255_57287 = G__57301;
chunk__57256_57288 = G__57302;
count__57257_57289 = G__57303;
i__57258_57290 = G__57304;
continue;
} else {
var vec__57276_57305 = cljs.core.first(seq__57255_57299__$1);
var container_57306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57276_57305,(0),null);
var comp_57307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57276_57305,(1),null);
reagent.dom.re_render_component(comp_57307,container_57306);


var G__57308 = cljs.core.next(seq__57255_57299__$1);
var G__57309 = null;
var G__57310 = (0);
var G__57311 = (0);
seq__57255_57287 = G__57308;
chunk__57256_57288 = G__57309;
count__57257_57289 = G__57310;
i__57258_57290 = G__57311;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
