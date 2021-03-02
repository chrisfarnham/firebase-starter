goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_53790 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_53790(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_53795 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_53795(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__53090 = coll;
var G__53091 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__53090,G__53091) : shadow.dom.lazy_native_coll_seq.call(null,G__53090,G__53091));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__53098 = arguments.length;
switch (G__53098) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__53100 = arguments.length;
switch (G__53100) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__53105 = arguments.length;
switch (G__53105) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__53112 = arguments.length;
switch (G__53112) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__53121 = arguments.length;
switch (G__53121) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__53127 = arguments.length;
switch (G__53127) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e53133){if((e53133 instanceof Object)){
var e = e53133;
return console.log("didnt support attachEvent",el,e);
} else {
throw e53133;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__53142 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__53143 = null;
var count__53144 = (0);
var i__53145 = (0);
while(true){
if((i__53145 < count__53144)){
var el = chunk__53143.cljs$core$IIndexed$_nth$arity$2(null,i__53145);
var handler_53841__$1 = ((function (seq__53142,chunk__53143,count__53144,i__53145,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53142,chunk__53143,count__53144,i__53145,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53841__$1);


var G__53842 = seq__53142;
var G__53843 = chunk__53143;
var G__53844 = count__53144;
var G__53845 = (i__53145 + (1));
seq__53142 = G__53842;
chunk__53143 = G__53843;
count__53144 = G__53844;
i__53145 = G__53845;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53142);
if(temp__5754__auto__){
var seq__53142__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53142__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53142__$1);
var G__53847 = cljs.core.chunk_rest(seq__53142__$1);
var G__53848 = c__4556__auto__;
var G__53849 = cljs.core.count(c__4556__auto__);
var G__53850 = (0);
seq__53142 = G__53847;
chunk__53143 = G__53848;
count__53144 = G__53849;
i__53145 = G__53850;
continue;
} else {
var el = cljs.core.first(seq__53142__$1);
var handler_53853__$1 = ((function (seq__53142,chunk__53143,count__53144,i__53145,el,seq__53142__$1,temp__5754__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53142,chunk__53143,count__53144,i__53145,el,seq__53142__$1,temp__5754__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53853__$1);


var G__53856 = cljs.core.next(seq__53142__$1);
var G__53857 = null;
var G__53858 = (0);
var G__53859 = (0);
seq__53142 = G__53856;
chunk__53143 = G__53857;
count__53144 = G__53858;
i__53145 = G__53859;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__53161 = arguments.length;
switch (G__53161) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__53168 = cljs.core.seq(events);
var chunk__53169 = null;
var count__53170 = (0);
var i__53171 = (0);
while(true){
if((i__53171 < count__53170)){
var vec__53184 = chunk__53169.cljs$core$IIndexed$_nth$arity$2(null,i__53171);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53184,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53184,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53871 = seq__53168;
var G__53872 = chunk__53169;
var G__53873 = count__53170;
var G__53874 = (i__53171 + (1));
seq__53168 = G__53871;
chunk__53169 = G__53872;
count__53170 = G__53873;
i__53171 = G__53874;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53168);
if(temp__5754__auto__){
var seq__53168__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53168__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53168__$1);
var G__53875 = cljs.core.chunk_rest(seq__53168__$1);
var G__53876 = c__4556__auto__;
var G__53877 = cljs.core.count(c__4556__auto__);
var G__53878 = (0);
seq__53168 = G__53875;
chunk__53169 = G__53876;
count__53170 = G__53877;
i__53171 = G__53878;
continue;
} else {
var vec__53189 = cljs.core.first(seq__53168__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53189,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53189,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53883 = cljs.core.next(seq__53168__$1);
var G__53884 = null;
var G__53885 = (0);
var G__53886 = (0);
seq__53168 = G__53883;
chunk__53169 = G__53884;
count__53170 = G__53885;
i__53171 = G__53886;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__53195 = cljs.core.seq(styles);
var chunk__53196 = null;
var count__53197 = (0);
var i__53198 = (0);
while(true){
if((i__53198 < count__53197)){
var vec__53208 = chunk__53196.cljs$core$IIndexed$_nth$arity$2(null,i__53198);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53208,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53208,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53891 = seq__53195;
var G__53892 = chunk__53196;
var G__53893 = count__53197;
var G__53894 = (i__53198 + (1));
seq__53195 = G__53891;
chunk__53196 = G__53892;
count__53197 = G__53893;
i__53198 = G__53894;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53195);
if(temp__5754__auto__){
var seq__53195__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53195__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53195__$1);
var G__53898 = cljs.core.chunk_rest(seq__53195__$1);
var G__53899 = c__4556__auto__;
var G__53900 = cljs.core.count(c__4556__auto__);
var G__53901 = (0);
seq__53195 = G__53898;
chunk__53196 = G__53899;
count__53197 = G__53900;
i__53198 = G__53901;
continue;
} else {
var vec__53213 = cljs.core.first(seq__53195__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53213,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53904 = cljs.core.next(seq__53195__$1);
var G__53905 = null;
var G__53906 = (0);
var G__53907 = (0);
seq__53195 = G__53904;
chunk__53196 = G__53905;
count__53197 = G__53906;
i__53198 = G__53907;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__53219_53910 = key;
var G__53219_53911__$1 = (((G__53219_53910 instanceof cljs.core.Keyword))?G__53219_53910.fqn:null);
switch (G__53219_53911__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_53923 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_53923,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_53923,"aria-");
}
})())){
el.setAttribute(ks_53923,value);
} else {
(el[ks_53923] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__53239){
var map__53240 = p__53239;
var map__53240__$1 = (((((!((map__53240 == null))))?(((((map__53240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53240):map__53240);
var props = map__53240__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53240__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__53245 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53245,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53245,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53245,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__53248 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__53248,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__53248;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__53252 = arguments.length;
switch (G__53252) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5754__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5754__auto__)){
var n = temp__5754__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5754__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5754__auto__)){
var n = temp__5754__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__53258){
var vec__53259 = p__53258;
var seq__53260 = cljs.core.seq(vec__53259);
var first__53261 = cljs.core.first(seq__53260);
var seq__53260__$1 = cljs.core.next(seq__53260);
var nn = first__53261;
var first__53261__$1 = cljs.core.first(seq__53260__$1);
var seq__53260__$2 = cljs.core.next(seq__53260__$1);
var np = first__53261__$1;
var nc = seq__53260__$2;
var node = vec__53259;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53262 = nn;
var G__53263 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53262,G__53263) : create_fn.call(null,G__53262,G__53263));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53264 = nn;
var G__53265 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53264,G__53265) : create_fn.call(null,G__53264,G__53265));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__53267 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53267,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53267,(1),null);
var seq__53270_53961 = cljs.core.seq(node_children);
var chunk__53271_53962 = null;
var count__53272_53963 = (0);
var i__53273_53964 = (0);
while(true){
if((i__53273_53964 < count__53272_53963)){
var child_struct_53965 = chunk__53271_53962.cljs$core$IIndexed$_nth$arity$2(null,i__53273_53964);
var children_53966 = shadow.dom.dom_node(child_struct_53965);
if(cljs.core.seq_QMARK_(children_53966)){
var seq__53306_53968 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53966));
var chunk__53308_53969 = null;
var count__53309_53970 = (0);
var i__53310_53971 = (0);
while(true){
if((i__53310_53971 < count__53309_53970)){
var child_53973 = chunk__53308_53969.cljs$core$IIndexed$_nth$arity$2(null,i__53310_53971);
if(cljs.core.truth_(child_53973)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53973);


var G__53976 = seq__53306_53968;
var G__53977 = chunk__53308_53969;
var G__53978 = count__53309_53970;
var G__53979 = (i__53310_53971 + (1));
seq__53306_53968 = G__53976;
chunk__53308_53969 = G__53977;
count__53309_53970 = G__53978;
i__53310_53971 = G__53979;
continue;
} else {
var G__53982 = seq__53306_53968;
var G__53983 = chunk__53308_53969;
var G__53984 = count__53309_53970;
var G__53985 = (i__53310_53971 + (1));
seq__53306_53968 = G__53982;
chunk__53308_53969 = G__53983;
count__53309_53970 = G__53984;
i__53310_53971 = G__53985;
continue;
}
} else {
var temp__5754__auto___53989 = cljs.core.seq(seq__53306_53968);
if(temp__5754__auto___53989){
var seq__53306_53990__$1 = temp__5754__auto___53989;
if(cljs.core.chunked_seq_QMARK_(seq__53306_53990__$1)){
var c__4556__auto___53991 = cljs.core.chunk_first(seq__53306_53990__$1);
var G__53992 = cljs.core.chunk_rest(seq__53306_53990__$1);
var G__53993 = c__4556__auto___53991;
var G__53994 = cljs.core.count(c__4556__auto___53991);
var G__53995 = (0);
seq__53306_53968 = G__53992;
chunk__53308_53969 = G__53993;
count__53309_53970 = G__53994;
i__53310_53971 = G__53995;
continue;
} else {
var child_53997 = cljs.core.first(seq__53306_53990__$1);
if(cljs.core.truth_(child_53997)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53997);


var G__53999 = cljs.core.next(seq__53306_53990__$1);
var G__54000 = null;
var G__54001 = (0);
var G__54002 = (0);
seq__53306_53968 = G__53999;
chunk__53308_53969 = G__54000;
count__53309_53970 = G__54001;
i__53310_53971 = G__54002;
continue;
} else {
var G__54003 = cljs.core.next(seq__53306_53990__$1);
var G__54004 = null;
var G__54005 = (0);
var G__54006 = (0);
seq__53306_53968 = G__54003;
chunk__53308_53969 = G__54004;
count__53309_53970 = G__54005;
i__53310_53971 = G__54006;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53966);
}


var G__54007 = seq__53270_53961;
var G__54008 = chunk__53271_53962;
var G__54009 = count__53272_53963;
var G__54010 = (i__53273_53964 + (1));
seq__53270_53961 = G__54007;
chunk__53271_53962 = G__54008;
count__53272_53963 = G__54009;
i__53273_53964 = G__54010;
continue;
} else {
var temp__5754__auto___54012 = cljs.core.seq(seq__53270_53961);
if(temp__5754__auto___54012){
var seq__53270_54014__$1 = temp__5754__auto___54012;
if(cljs.core.chunked_seq_QMARK_(seq__53270_54014__$1)){
var c__4556__auto___54015 = cljs.core.chunk_first(seq__53270_54014__$1);
var G__54017 = cljs.core.chunk_rest(seq__53270_54014__$1);
var G__54018 = c__4556__auto___54015;
var G__54019 = cljs.core.count(c__4556__auto___54015);
var G__54020 = (0);
seq__53270_53961 = G__54017;
chunk__53271_53962 = G__54018;
count__53272_53963 = G__54019;
i__53273_53964 = G__54020;
continue;
} else {
var child_struct_54021 = cljs.core.first(seq__53270_54014__$1);
var children_54023 = shadow.dom.dom_node(child_struct_54021);
if(cljs.core.seq_QMARK_(children_54023)){
var seq__53319_54024 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54023));
var chunk__53321_54025 = null;
var count__53322_54026 = (0);
var i__53323_54027 = (0);
while(true){
if((i__53323_54027 < count__53322_54026)){
var child_54029 = chunk__53321_54025.cljs$core$IIndexed$_nth$arity$2(null,i__53323_54027);
if(cljs.core.truth_(child_54029)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54029);


var G__54030 = seq__53319_54024;
var G__54031 = chunk__53321_54025;
var G__54032 = count__53322_54026;
var G__54033 = (i__53323_54027 + (1));
seq__53319_54024 = G__54030;
chunk__53321_54025 = G__54031;
count__53322_54026 = G__54032;
i__53323_54027 = G__54033;
continue;
} else {
var G__54034 = seq__53319_54024;
var G__54035 = chunk__53321_54025;
var G__54036 = count__53322_54026;
var G__54037 = (i__53323_54027 + (1));
seq__53319_54024 = G__54034;
chunk__53321_54025 = G__54035;
count__53322_54026 = G__54036;
i__53323_54027 = G__54037;
continue;
}
} else {
var temp__5754__auto___54040__$1 = cljs.core.seq(seq__53319_54024);
if(temp__5754__auto___54040__$1){
var seq__53319_54041__$1 = temp__5754__auto___54040__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53319_54041__$1)){
var c__4556__auto___54043 = cljs.core.chunk_first(seq__53319_54041__$1);
var G__54045 = cljs.core.chunk_rest(seq__53319_54041__$1);
var G__54046 = c__4556__auto___54043;
var G__54047 = cljs.core.count(c__4556__auto___54043);
var G__54048 = (0);
seq__53319_54024 = G__54045;
chunk__53321_54025 = G__54046;
count__53322_54026 = G__54047;
i__53323_54027 = G__54048;
continue;
} else {
var child_54052 = cljs.core.first(seq__53319_54041__$1);
if(cljs.core.truth_(child_54052)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54052);


var G__54053 = cljs.core.next(seq__53319_54041__$1);
var G__54054 = null;
var G__54055 = (0);
var G__54056 = (0);
seq__53319_54024 = G__54053;
chunk__53321_54025 = G__54054;
count__53322_54026 = G__54055;
i__53323_54027 = G__54056;
continue;
} else {
var G__54057 = cljs.core.next(seq__53319_54041__$1);
var G__54058 = null;
var G__54059 = (0);
var G__54060 = (0);
seq__53319_54024 = G__54057;
chunk__53321_54025 = G__54058;
count__53322_54026 = G__54059;
i__53323_54027 = G__54060;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54023);
}


var G__54064 = cljs.core.next(seq__53270_54014__$1);
var G__54065 = null;
var G__54066 = (0);
var G__54067 = (0);
seq__53270_53961 = G__54064;
chunk__53271_53962 = G__54065;
count__53272_53963 = G__54066;
i__53273_53964 = G__54067;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__53340 = cljs.core.seq(node);
var chunk__53341 = null;
var count__53342 = (0);
var i__53343 = (0);
while(true){
if((i__53343 < count__53342)){
var n = chunk__53341.cljs$core$IIndexed$_nth$arity$2(null,i__53343);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54076 = seq__53340;
var G__54077 = chunk__53341;
var G__54078 = count__53342;
var G__54079 = (i__53343 + (1));
seq__53340 = G__54076;
chunk__53341 = G__54077;
count__53342 = G__54078;
i__53343 = G__54079;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53340);
if(temp__5754__auto__){
var seq__53340__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53340__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53340__$1);
var G__54082 = cljs.core.chunk_rest(seq__53340__$1);
var G__54083 = c__4556__auto__;
var G__54084 = cljs.core.count(c__4556__auto__);
var G__54085 = (0);
seq__53340 = G__54082;
chunk__53341 = G__54083;
count__53342 = G__54084;
i__53343 = G__54085;
continue;
} else {
var n = cljs.core.first(seq__53340__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54087 = cljs.core.next(seq__53340__$1);
var G__54088 = null;
var G__54089 = (0);
var G__54090 = (0);
seq__53340 = G__54087;
chunk__53341 = G__54088;
count__53342 = G__54089;
i__53343 = G__54090;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__53351 = arguments.length;
switch (G__53351) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__53360 = arguments.length;
switch (G__53360) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__53371 = arguments.length;
switch (G__53371) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54107 = arguments.length;
var i__4737__auto___54108 = (0);
while(true){
if((i__4737__auto___54108 < len__4736__auto___54107)){
args__4742__auto__.push((arguments[i__4737__auto___54108]));

var G__54109 = (i__4737__auto___54108 + (1));
i__4737__auto___54108 = G__54109;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__53381_54113 = cljs.core.seq(nodes);
var chunk__53382_54114 = null;
var count__53383_54115 = (0);
var i__53384_54116 = (0);
while(true){
if((i__53384_54116 < count__53383_54115)){
var node_54117 = chunk__53382_54114.cljs$core$IIndexed$_nth$arity$2(null,i__53384_54116);
fragment.appendChild(shadow.dom._to_dom(node_54117));


var G__54118 = seq__53381_54113;
var G__54119 = chunk__53382_54114;
var G__54120 = count__53383_54115;
var G__54121 = (i__53384_54116 + (1));
seq__53381_54113 = G__54118;
chunk__53382_54114 = G__54119;
count__53383_54115 = G__54120;
i__53384_54116 = G__54121;
continue;
} else {
var temp__5754__auto___54122 = cljs.core.seq(seq__53381_54113);
if(temp__5754__auto___54122){
var seq__53381_54123__$1 = temp__5754__auto___54122;
if(cljs.core.chunked_seq_QMARK_(seq__53381_54123__$1)){
var c__4556__auto___54124 = cljs.core.chunk_first(seq__53381_54123__$1);
var G__54125 = cljs.core.chunk_rest(seq__53381_54123__$1);
var G__54126 = c__4556__auto___54124;
var G__54127 = cljs.core.count(c__4556__auto___54124);
var G__54128 = (0);
seq__53381_54113 = G__54125;
chunk__53382_54114 = G__54126;
count__53383_54115 = G__54127;
i__53384_54116 = G__54128;
continue;
} else {
var node_54129 = cljs.core.first(seq__53381_54123__$1);
fragment.appendChild(shadow.dom._to_dom(node_54129));


var G__54130 = cljs.core.next(seq__53381_54123__$1);
var G__54131 = null;
var G__54132 = (0);
var G__54133 = (0);
seq__53381_54113 = G__54130;
chunk__53382_54114 = G__54131;
count__53383_54115 = G__54132;
i__53384_54116 = G__54133;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq53379){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53379));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__53387_54134 = cljs.core.seq(scripts);
var chunk__53388_54135 = null;
var count__53389_54136 = (0);
var i__53390_54137 = (0);
while(true){
if((i__53390_54137 < count__53389_54136)){
var vec__53401_54138 = chunk__53388_54135.cljs$core$IIndexed$_nth$arity$2(null,i__53390_54137);
var script_tag_54139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53401_54138,(0),null);
var script_body_54140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53401_54138,(1),null);
eval(script_body_54140);


var G__54141 = seq__53387_54134;
var G__54142 = chunk__53388_54135;
var G__54143 = count__53389_54136;
var G__54144 = (i__53390_54137 + (1));
seq__53387_54134 = G__54141;
chunk__53388_54135 = G__54142;
count__53389_54136 = G__54143;
i__53390_54137 = G__54144;
continue;
} else {
var temp__5754__auto___54145 = cljs.core.seq(seq__53387_54134);
if(temp__5754__auto___54145){
var seq__53387_54146__$1 = temp__5754__auto___54145;
if(cljs.core.chunked_seq_QMARK_(seq__53387_54146__$1)){
var c__4556__auto___54147 = cljs.core.chunk_first(seq__53387_54146__$1);
var G__54148 = cljs.core.chunk_rest(seq__53387_54146__$1);
var G__54149 = c__4556__auto___54147;
var G__54150 = cljs.core.count(c__4556__auto___54147);
var G__54151 = (0);
seq__53387_54134 = G__54148;
chunk__53388_54135 = G__54149;
count__53389_54136 = G__54150;
i__53390_54137 = G__54151;
continue;
} else {
var vec__53407_54155 = cljs.core.first(seq__53387_54146__$1);
var script_tag_54156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53407_54155,(0),null);
var script_body_54157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53407_54155,(1),null);
eval(script_body_54157);


var G__54158 = cljs.core.next(seq__53387_54146__$1);
var G__54159 = null;
var G__54160 = (0);
var G__54161 = (0);
seq__53387_54134 = G__54158;
chunk__53388_54135 = G__54159;
count__53389_54136 = G__54160;
i__53390_54137 = G__54161;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__53411){
var vec__53414 = p__53411;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53414,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53414,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__53423 = arguments.length;
switch (G__53423) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__53434 = cljs.core.seq(style_keys);
var chunk__53435 = null;
var count__53436 = (0);
var i__53437 = (0);
while(true){
if((i__53437 < count__53436)){
var it = chunk__53435.cljs$core$IIndexed$_nth$arity$2(null,i__53437);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__54163 = seq__53434;
var G__54164 = chunk__53435;
var G__54165 = count__53436;
var G__54166 = (i__53437 + (1));
seq__53434 = G__54163;
chunk__53435 = G__54164;
count__53436 = G__54165;
i__53437 = G__54166;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53434);
if(temp__5754__auto__){
var seq__53434__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53434__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53434__$1);
var G__54167 = cljs.core.chunk_rest(seq__53434__$1);
var G__54168 = c__4556__auto__;
var G__54169 = cljs.core.count(c__4556__auto__);
var G__54170 = (0);
seq__53434 = G__54167;
chunk__53435 = G__54168;
count__53436 = G__54169;
i__53437 = G__54170;
continue;
} else {
var it = cljs.core.first(seq__53434__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__54171 = cljs.core.next(seq__53434__$1);
var G__54172 = null;
var G__54173 = (0);
var G__54174 = (0);
seq__53434 = G__54171;
chunk__53435 = G__54172;
count__53436 = G__54173;
i__53437 = G__54174;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53444,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53454 = k53444;
var G__53454__$1 = (((G__53454 instanceof cljs.core.Keyword))?G__53454.fqn:null);
switch (G__53454__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53444,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53457){
var vec__53458 = p__53457;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53458,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53458,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53443){
var self__ = this;
var G__53443__$1 = this;
return (new cljs.core.RecordIter((0),G__53443__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53445,other53446){
var self__ = this;
var this53445__$1 = this;
return (((!((other53446 == null)))) && ((this53445__$1.constructor === other53446.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53445__$1.x,other53446.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53445__$1.y,other53446.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53445__$1.__extmap,other53446.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53443){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53474 = cljs.core.keyword_identical_QMARK_;
var expr__53475 = k__4388__auto__;
if(cljs.core.truth_((pred__53474.cljs$core$IFn$_invoke$arity$2 ? pred__53474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__53475) : pred__53474.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__53475)))){
return (new shadow.dom.Coordinate(G__53443,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53474.cljs$core$IFn$_invoke$arity$2 ? pred__53474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__53475) : pred__53474.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__53475)))){
return (new shadow.dom.Coordinate(self__.x,G__53443,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53443),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53443){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__53443,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__53447){
var extmap__4419__auto__ = (function (){var G__53487 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53447,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__53447)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53487);
} else {
return G__53487;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__53447),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__53447),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53496,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53503 = k53496;
var G__53503__$1 = (((G__53503 instanceof cljs.core.Keyword))?G__53503.fqn:null);
switch (G__53503__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53496,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53505){
var vec__53506 = p__53505;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53506,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53506,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53495){
var self__ = this;
var G__53495__$1 = this;
return (new cljs.core.RecordIter((0),G__53495__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53497,other53498){
var self__ = this;
var this53497__$1 = this;
return (((!((other53498 == null)))) && ((this53497__$1.constructor === other53498.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53497__$1.w,other53498.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53497__$1.h,other53498.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53497__$1.__extmap,other53498.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53495){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53519 = cljs.core.keyword_identical_QMARK_;
var expr__53520 = k__4388__auto__;
if(cljs.core.truth_((pred__53519.cljs$core$IFn$_invoke$arity$2 ? pred__53519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__53520) : pred__53519.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__53520)))){
return (new shadow.dom.Size(G__53495,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53519.cljs$core$IFn$_invoke$arity$2 ? pred__53519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__53520) : pred__53519.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__53520)))){
return (new shadow.dom.Size(self__.w,G__53495,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53495),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53495){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__53495,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__53500){
var extmap__4419__auto__ = (function (){var G__53527 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53500,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__53500)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53527);
} else {
return G__53527;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__53500),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__53500),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__54231 = (i + (1));
var G__54232 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__54231;
ret = G__54232;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53537){
var vec__53539 = p__53537;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53539,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__53545 = arguments.length;
switch (G__53545) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5752__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5752__auto__)){
var child = temp__5752__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__54245 = ps;
var G__54246 = (i + (1));
el__$1 = G__54245;
i = G__54246;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__53582 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53582,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53582,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53582,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__53586_54257 = cljs.core.seq(props);
var chunk__53587_54258 = null;
var count__53588_54259 = (0);
var i__53589_54260 = (0);
while(true){
if((i__53589_54260 < count__53588_54259)){
var vec__53612_54261 = chunk__53587_54258.cljs$core$IIndexed$_nth$arity$2(null,i__53589_54260);
var k_54262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53612_54261,(0),null);
var v_54263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53612_54261,(1),null);
el.setAttributeNS((function (){var temp__5754__auto__ = cljs.core.namespace(k_54262);
if(cljs.core.truth_(temp__5754__auto__)){
var ns = temp__5754__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_54262),v_54263);


var G__54266 = seq__53586_54257;
var G__54267 = chunk__53587_54258;
var G__54268 = count__53588_54259;
var G__54269 = (i__53589_54260 + (1));
seq__53586_54257 = G__54266;
chunk__53587_54258 = G__54267;
count__53588_54259 = G__54268;
i__53589_54260 = G__54269;
continue;
} else {
var temp__5754__auto___54271 = cljs.core.seq(seq__53586_54257);
if(temp__5754__auto___54271){
var seq__53586_54272__$1 = temp__5754__auto___54271;
if(cljs.core.chunked_seq_QMARK_(seq__53586_54272__$1)){
var c__4556__auto___54273 = cljs.core.chunk_first(seq__53586_54272__$1);
var G__54274 = cljs.core.chunk_rest(seq__53586_54272__$1);
var G__54275 = c__4556__auto___54273;
var G__54276 = cljs.core.count(c__4556__auto___54273);
var G__54277 = (0);
seq__53586_54257 = G__54274;
chunk__53587_54258 = G__54275;
count__53588_54259 = G__54276;
i__53589_54260 = G__54277;
continue;
} else {
var vec__53622_54280 = cljs.core.first(seq__53586_54272__$1);
var k_54281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53622_54280,(0),null);
var v_54282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53622_54280,(1),null);
el.setAttributeNS((function (){var temp__5754__auto____$1 = cljs.core.namespace(k_54281);
if(cljs.core.truth_(temp__5754__auto____$1)){
var ns = temp__5754__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_54281),v_54282);


var G__54283 = cljs.core.next(seq__53586_54272__$1);
var G__54284 = null;
var G__54285 = (0);
var G__54286 = (0);
seq__53586_54257 = G__54283;
chunk__53587_54258 = G__54284;
count__53588_54259 = G__54285;
i__53589_54260 = G__54286;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__53634 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53634,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53634,(1),null);
var seq__53638_54292 = cljs.core.seq(node_children);
var chunk__53640_54293 = null;
var count__53641_54294 = (0);
var i__53642_54295 = (0);
while(true){
if((i__53642_54295 < count__53641_54294)){
var child_struct_54297 = chunk__53640_54293.cljs$core$IIndexed$_nth$arity$2(null,i__53642_54295);
if((!((child_struct_54297 == null)))){
if(typeof child_struct_54297 === 'string'){
var text_54298 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_54298),child_struct_54297].join(''));
} else {
var children_54299 = shadow.dom.svg_node(child_struct_54297);
if(cljs.core.seq_QMARK_(children_54299)){
var seq__53683_54300 = cljs.core.seq(children_54299);
var chunk__53685_54301 = null;
var count__53686_54302 = (0);
var i__53687_54303 = (0);
while(true){
if((i__53687_54303 < count__53686_54302)){
var child_54305 = chunk__53685_54301.cljs$core$IIndexed$_nth$arity$2(null,i__53687_54303);
if(cljs.core.truth_(child_54305)){
node.appendChild(child_54305);


var G__54306 = seq__53683_54300;
var G__54307 = chunk__53685_54301;
var G__54308 = count__53686_54302;
var G__54309 = (i__53687_54303 + (1));
seq__53683_54300 = G__54306;
chunk__53685_54301 = G__54307;
count__53686_54302 = G__54308;
i__53687_54303 = G__54309;
continue;
} else {
var G__54310 = seq__53683_54300;
var G__54311 = chunk__53685_54301;
var G__54312 = count__53686_54302;
var G__54313 = (i__53687_54303 + (1));
seq__53683_54300 = G__54310;
chunk__53685_54301 = G__54311;
count__53686_54302 = G__54312;
i__53687_54303 = G__54313;
continue;
}
} else {
var temp__5754__auto___54314 = cljs.core.seq(seq__53683_54300);
if(temp__5754__auto___54314){
var seq__53683_54315__$1 = temp__5754__auto___54314;
if(cljs.core.chunked_seq_QMARK_(seq__53683_54315__$1)){
var c__4556__auto___54317 = cljs.core.chunk_first(seq__53683_54315__$1);
var G__54318 = cljs.core.chunk_rest(seq__53683_54315__$1);
var G__54319 = c__4556__auto___54317;
var G__54320 = cljs.core.count(c__4556__auto___54317);
var G__54321 = (0);
seq__53683_54300 = G__54318;
chunk__53685_54301 = G__54319;
count__53686_54302 = G__54320;
i__53687_54303 = G__54321;
continue;
} else {
var child_54322 = cljs.core.first(seq__53683_54315__$1);
if(cljs.core.truth_(child_54322)){
node.appendChild(child_54322);


var G__54323 = cljs.core.next(seq__53683_54315__$1);
var G__54324 = null;
var G__54325 = (0);
var G__54326 = (0);
seq__53683_54300 = G__54323;
chunk__53685_54301 = G__54324;
count__53686_54302 = G__54325;
i__53687_54303 = G__54326;
continue;
} else {
var G__54327 = cljs.core.next(seq__53683_54315__$1);
var G__54328 = null;
var G__54329 = (0);
var G__54330 = (0);
seq__53683_54300 = G__54327;
chunk__53685_54301 = G__54328;
count__53686_54302 = G__54329;
i__53687_54303 = G__54330;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_54299);
}
}


var G__54332 = seq__53638_54292;
var G__54333 = chunk__53640_54293;
var G__54334 = count__53641_54294;
var G__54335 = (i__53642_54295 + (1));
seq__53638_54292 = G__54332;
chunk__53640_54293 = G__54333;
count__53641_54294 = G__54334;
i__53642_54295 = G__54335;
continue;
} else {
var G__54336 = seq__53638_54292;
var G__54337 = chunk__53640_54293;
var G__54338 = count__53641_54294;
var G__54339 = (i__53642_54295 + (1));
seq__53638_54292 = G__54336;
chunk__53640_54293 = G__54337;
count__53641_54294 = G__54338;
i__53642_54295 = G__54339;
continue;
}
} else {
var temp__5754__auto___54340 = cljs.core.seq(seq__53638_54292);
if(temp__5754__auto___54340){
var seq__53638_54341__$1 = temp__5754__auto___54340;
if(cljs.core.chunked_seq_QMARK_(seq__53638_54341__$1)){
var c__4556__auto___54343 = cljs.core.chunk_first(seq__53638_54341__$1);
var G__54344 = cljs.core.chunk_rest(seq__53638_54341__$1);
var G__54345 = c__4556__auto___54343;
var G__54346 = cljs.core.count(c__4556__auto___54343);
var G__54347 = (0);
seq__53638_54292 = G__54344;
chunk__53640_54293 = G__54345;
count__53641_54294 = G__54346;
i__53642_54295 = G__54347;
continue;
} else {
var child_struct_54349 = cljs.core.first(seq__53638_54341__$1);
if((!((child_struct_54349 == null)))){
if(typeof child_struct_54349 === 'string'){
var text_54350 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_54350),child_struct_54349].join(''));
} else {
var children_54352 = shadow.dom.svg_node(child_struct_54349);
if(cljs.core.seq_QMARK_(children_54352)){
var seq__53699_54353 = cljs.core.seq(children_54352);
var chunk__53701_54354 = null;
var count__53702_54355 = (0);
var i__53703_54356 = (0);
while(true){
if((i__53703_54356 < count__53702_54355)){
var child_54357 = chunk__53701_54354.cljs$core$IIndexed$_nth$arity$2(null,i__53703_54356);
if(cljs.core.truth_(child_54357)){
node.appendChild(child_54357);


var G__54358 = seq__53699_54353;
var G__54359 = chunk__53701_54354;
var G__54360 = count__53702_54355;
var G__54361 = (i__53703_54356 + (1));
seq__53699_54353 = G__54358;
chunk__53701_54354 = G__54359;
count__53702_54355 = G__54360;
i__53703_54356 = G__54361;
continue;
} else {
var G__54365 = seq__53699_54353;
var G__54366 = chunk__53701_54354;
var G__54367 = count__53702_54355;
var G__54368 = (i__53703_54356 + (1));
seq__53699_54353 = G__54365;
chunk__53701_54354 = G__54366;
count__53702_54355 = G__54367;
i__53703_54356 = G__54368;
continue;
}
} else {
var temp__5754__auto___54369__$1 = cljs.core.seq(seq__53699_54353);
if(temp__5754__auto___54369__$1){
var seq__53699_54370__$1 = temp__5754__auto___54369__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53699_54370__$1)){
var c__4556__auto___54371 = cljs.core.chunk_first(seq__53699_54370__$1);
var G__54372 = cljs.core.chunk_rest(seq__53699_54370__$1);
var G__54373 = c__4556__auto___54371;
var G__54374 = cljs.core.count(c__4556__auto___54371);
var G__54375 = (0);
seq__53699_54353 = G__54372;
chunk__53701_54354 = G__54373;
count__53702_54355 = G__54374;
i__53703_54356 = G__54375;
continue;
} else {
var child_54377 = cljs.core.first(seq__53699_54370__$1);
if(cljs.core.truth_(child_54377)){
node.appendChild(child_54377);


var G__54378 = cljs.core.next(seq__53699_54370__$1);
var G__54379 = null;
var G__54380 = (0);
var G__54381 = (0);
seq__53699_54353 = G__54378;
chunk__53701_54354 = G__54379;
count__53702_54355 = G__54380;
i__53703_54356 = G__54381;
continue;
} else {
var G__54382 = cljs.core.next(seq__53699_54370__$1);
var G__54383 = null;
var G__54384 = (0);
var G__54385 = (0);
seq__53699_54353 = G__54382;
chunk__53701_54354 = G__54383;
count__53702_54355 = G__54384;
i__53703_54356 = G__54385;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_54352);
}
}


var G__54387 = cljs.core.next(seq__53638_54341__$1);
var G__54388 = null;
var G__54389 = (0);
var G__54390 = (0);
seq__53638_54292 = G__54387;
chunk__53640_54293 = G__54388;
count__53641_54294 = G__54389;
i__53642_54295 = G__54390;
continue;
} else {
var G__54392 = cljs.core.next(seq__53638_54341__$1);
var G__54393 = null;
var G__54394 = (0);
var G__54395 = (0);
seq__53638_54292 = G__54392;
chunk__53640_54293 = G__54393;
count__53641_54294 = G__54394;
i__53642_54295 = G__54395;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54398 = arguments.length;
var i__4737__auto___54399 = (0);
while(true){
if((i__4737__auto___54399 < len__4736__auto___54398)){
args__4742__auto__.push((arguments[i__4737__auto___54399]));

var G__54401 = (i__4737__auto___54399 + (1));
i__4737__auto___54399 = G__54401;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq53721){
var G__53722 = cljs.core.first(seq53721);
var seq53721__$1 = cljs.core.next(seq53721);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53722,seq53721__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__53740 = arguments.length;
switch (G__53740) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__50948__auto___54410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_53757){
var state_val_53758 = (state_53757[(1)]);
if((state_val_53758 === (1))){
var state_53757__$1 = state_53757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53757__$1,(2),once_or_cleanup);
} else {
if((state_val_53758 === (2))){
var inst_53754 = (state_53757[(2)]);
var inst_53755 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_53757__$1 = (function (){var statearr_53762 = state_53757;
(statearr_53762[(7)] = inst_53754);

return statearr_53762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53757__$1,inst_53755);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__50825__auto__ = null;
var shadow$dom$state_machine__50825__auto____0 = (function (){
var statearr_53766 = [null,null,null,null,null,null,null,null];
(statearr_53766[(0)] = shadow$dom$state_machine__50825__auto__);

(statearr_53766[(1)] = (1));

return statearr_53766;
});
var shadow$dom$state_machine__50825__auto____1 = (function (state_53757){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_53757);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e53767){var ex__50828__auto__ = e53767;
var statearr_53768_54415 = state_53757;
(statearr_53768_54415[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_53757[(4)]))){
var statearr_53772_54417 = state_53757;
(statearr_53772_54417[(1)] = cljs.core.first((state_53757[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54418 = state_53757;
state_53757 = G__54418;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
shadow$dom$state_machine__50825__auto__ = function(state_53757){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__50825__auto____0.call(this);
case 1:
return shadow$dom$state_machine__50825__auto____1.call(this,state_53757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__50825__auto____0;
shadow$dom$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__50825__auto____1;
return shadow$dom$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_53774 = f__50949__auto__();
(statearr_53774[(6)] = c__50948__auto___54410);

return statearr_53774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
