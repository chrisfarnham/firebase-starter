goog.provide('dice_and_clocks.firebase_database');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dice-and-clocks.firebase-database","firebase-error","dice-and-clocks.firebase-database/firebase-error",2070392326),(function (_,p__48735){
var vec__48736 = p__48735;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48736,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48736,(1),null);
return console.error(["error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dice-and-clocks.firebase-database","firebase-success","dice-and-clocks.firebase-database/firebase-success",1258779637),(function (_,p__48739){
var vec__48740 = p__48739;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48740,(0),null);
return console.log("Write Succeeded");
}));
dice_and_clocks.firebase_database.default_pass_fail = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dice-and-clocks.firebase-database","firebase-success","dice-and-clocks.firebase-database/firebase-success",1258779637)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dice-and-clocks.firebase-database","firebase-error","dice-and-clocks.firebase-database/firebase-error",2070392326)], null)], null);
dice_and_clocks.firebase_database.success_failure_dispatch = (function dice_and_clocks$firebase_database$success_failure_dispatch(args){
var map__48743 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dice_and_clocks.firebase_database.default_pass_fail,args], 0));
var map__48743__$1 = (((((!((map__48743 == null))))?(((((map__48743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48743):map__48743);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48743__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48743__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return (function (err){
return re_frame.core.dispatch((((err == null))?on_success:on_failure));
});
});
dice_and_clocks.firebase_database.__GT_path = (function dice_and_clocks$firebase_database$__GT_path(p){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs_bean.core.__GT_js(p));
});
dice_and_clocks.firebase_database.database_ref = (function dice_and_clocks$firebase_database$database_ref(path){
return firebase.database().ref(dice_and_clocks.firebase_database.__GT_path(path));
});
dice_and_clocks.firebase_database.ref_set = (function dice_and_clocks$firebase_database$ref_set(p__48745){
var map__48746 = p__48745;
var map__48746__$1 = (((((!((map__48746 == null))))?(((((map__48746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48746):map__48746);
var args = map__48746__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48746__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48746__$1,new cljs.core.Keyword(null,"value","value",305978217));
return dice_and_clocks.firebase_database.database_ref(path).set(cljs_bean.core.__GT_js(value),dice_and_clocks.firebase_database.success_failure_dispatch(args));
});
dice_and_clocks.firebase_database.get_push_key = (function dice_and_clocks$firebase_database$get_push_key(path){
var push_key = dice_and_clocks.firebase_database.database_ref(path).push().key;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [push_key], null));
});
re_frame.core.reg_fx(new cljs.core.Keyword("dice-and-clocks.firebase-database","push-fx","dice-and-clocks.firebase-database/push-fx",-287177454),(function (args){
return dice_and_clocks.firebase_database.ref_set(cljs.core.update.cljs$core$IFn$_invoke$arity$3(args,new cljs.core.Keyword(null,"path","path",-188191168),dice_and_clocks.firebase_database.get_push_key));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dice-and-clocks.firebase-database","push","dice-and-clocks.firebase-database/push",1581035831),(function (_,p__48748){
var vec__48749 = p__48748;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48749,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48749,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dice-and-clocks.firebase-database","push-fx","dice-and-clocks.firebase-database/push-fx",-287177454),args], null);
}));
/**
 * returns a reagent atom that will always have the latest value at 'path' in the Firebase database
 */
dice_and_clocks.firebase_database.on_value_reaction = (function dice_and_clocks$firebase_database$on_value_reaction(p__48752){
var map__48753 = p__48752;
var map__48753__$1 = (((((!((map__48753 == null))))?(((((map__48753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48753):map__48753);
var args = map__48753__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48753__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var ref = dice_and_clocks.firebase_database.database_ref(path);
var reaction = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var callback = (function (x){
return cljs.core.reset_BANG_(reaction,(function (){var G__48755 = x;
var G__48755__$1 = (((G__48755 == null))?null:G__48755.val());
if((G__48755__$1 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__48755__$1);
}
})());
});
ref.on("value",callback,dice_and_clocks.firebase_database.success_failure_dispatch(args));

return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((function (){
return cljs.core.deref(reaction);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),(function (){
return ref.off("value",callback);
})], 0));
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dice-and-clocks.firebase-database","realtime-value","dice-and-clocks.firebase-database/realtime-value",1383987186),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__48756){
var vec__48757 = p__48756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48757,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48757,(1),null);
return dice_and_clocks.firebase_database.on_value_reaction(args);
}),cljs.core.identity], 0));

//# sourceMappingURL=dice_and_clocks.firebase_database.js.map
