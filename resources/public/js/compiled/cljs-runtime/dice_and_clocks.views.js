goog.provide('dice_and_clocks.views');
dice_and_clocks.views.auth_display = (function dice_and_clocks$views$auth_display(user){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(user)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Logged in as: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user);
}
})())].join('')], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(user)?new cljs.core.Keyword("dice-and-clocks.firebase-auth","sign-out","dice-and-clocks.firebase-auth/sign-out",1401007192):new cljs.core.Keyword("dice-and-clocks.firebase-auth","sign-in","dice-and-clocks.firebase-auth/sign-in",-862361657))], null));
})], null),(cljs.core.truth_(user)?"Sign out":"Sign in")], null)], null);
});
dice_and_clocks.views.add_todo = (function dice_and_clocks$views$add_todo(persist_todo){
var with_let46185 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let46185","with-let46185",-1976341220));
var temp__5758__auto___46200 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5758__auto___46200 == null)){
} else {
var c__45666__auto___46201 = temp__5758__auto___46200;
if((with_let46185.generation === c__45666__auto___46201.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let46185.generation = c__45666__auto___46201.ratomGeneration);
}


var init46186 = (with_let46185.length === (0));
var new_todo = ((init46186)?(with_let46185[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let46185[(0)]));
var res__45667__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Input new Todo:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(new_todo),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(new_todo,e.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),clojure.string.blank_QMARK_(cljs.core.deref(new_todo)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__46187_46202 = cljs.core.deref(new_todo);
(persist_todo.cljs$core$IFn$_invoke$arity$1 ? persist_todo.cljs$core$IFn$_invoke$arity$1(G__46187_46202) : persist_todo.call(null,G__46187_46202));

return cljs.core.reset_BANG_(new_todo,null);
})], null),"Save"], null)], null);

return res__45667__auto__;
});
dice_and_clocks.views.todo_list = (function dice_and_clocks$views$todo_list(todos,mark_done){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Todos"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46188){
var vec__46189 = p__46188;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46189,(0),null);
var map__46192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46189,(1),null);
var map__46192__$1 = (((((!((map__46192 == null))))?(((((map__46192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46192):map__46192);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46192__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"gray"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null)], null),description], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (mark_done.cljs$core$IFn$_invoke$arity$1 ? mark_done.cljs$core$IFn$_invoke$arity$1(id) : mark_done.call(null,id));
})], null),"Done"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46194){
var vec__46195 = p__46194;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46195,(0),null);
var map__46198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46195,(1),null);
var map__46198__$1 = (((((!((map__46198 == null))))?(((((map__46198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46198):map__46198);
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46198__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
return done_QMARK_;
}),todos))], null);
});
dice_and_clocks.views.main_panel = (function dice_and_clocks$views$main_panel(){
var name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dice-and-clocks.subs","name","dice-and-clocks.subs/name",1983728489)], null));
var user = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dice-and-clocks.firebase-auth","user-auth","dice-and-clocks.firebase-auth/user-auth",-664097959)], null)));
var db_connected_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dice-and-clocks.firebase-database","realtime-value","dice-and-clocks.firebase-database/realtime-value",1383987186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info",".info",1865168098),new cljs.core.Keyword(null,"connected","connected",-169833045)], null)], null)], null)));
var todos_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"todos","todos",630308868)], null);
var todos = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dice-and-clocks.firebase-database","realtime-value","dice-and-clocks.firebase-database/realtime-value",1383987186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),todos_path], null)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello from ",cljs.core.deref(name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dice_and_clocks.views.auth_display,user], null),(cljs.core.truth_(user)?(cljs.core.truth_(db_connected_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dice_and_clocks.views.add_todo,(function (todo){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dice-and-clocks.firebase-database","push","dice-and-clocks.firebase-database/push",1581035831),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),todo], null),new cljs.core.Keyword(null,"path","path",-188191168),todos_path], null)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dice_and_clocks.views.todo_list,todos,(function (todo_id){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dice-and-clocks.firebase-database","push","dice-and-clocks.firebase-database/push",1581035831),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),true,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(todos_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_id,new cljs.core.Keyword(null,"done?","done?",-1847001718)], null))], null)], null));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading.."], null)):null)], null);
});

//# sourceMappingURL=dice_and_clocks.views.js.map
