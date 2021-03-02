goog.provide('dice_and_clocks.firebase_auth');
dice_and_clocks.firebase_auth.auth = (function dice_and_clocks$firebase_auth$auth(){
return firebase.auth();
});
dice_and_clocks.firebase_auth.sign_in = (function dice_and_clocks$firebase_auth$sign_in(auth_provider,opts){
return dice_and_clocks.firebase_auth.auth().signInWithPopup(auth_provider).then((function (result){
return null;
})).catch((function (e){
var temp__5752__auto__ = new cljs.core.Keyword(null,"error-handler","error-handler",-484945776).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5752__auto__)){
var handler = temp__5752__auto__;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(e) : handler.call(null,e));
} else {
return alert(e);
}
}));
});
dice_and_clocks.firebase_auth.google_sign_in = (function dice_and_clocks$firebase_auth$google_sign_in(opts){
return dice_and_clocks.firebase_auth.sign_in((new firebase.auth.GoogleAuthProvider()),opts);
});
re_frame.core.reg_fx(new cljs.core.Keyword("dice-and-clocks.firebase-auth","google-sign-in","dice-and-clocks.firebase-auth/google-sign-in",-809740253),dice_and_clocks.firebase_auth.google_sign_in);
dice_and_clocks.firebase_auth.sign_out = (function dice_and_clocks$firebase_auth$sign_out(error_handler){
dice_and_clocks.firebase_auth.auth().signOut().catch((function (e){
var or__4126__auto__ = (function (){var and__4115__auto__ = error_handler;
if(cljs.core.truth_(and__4115__auto__)){
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(e) : error_handler.call(null,e));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return console.log(e);
}
}));

return (window.location = "/");
});
re_frame.core.reg_fx(new cljs.core.Keyword("dice-and-clocks.firebase-auth","sign-out","dice-and-clocks.firebase-auth/sign-out",1401007192),dice_and_clocks.firebase_auth.sign_out);
dice_and_clocks.firebase_auth.user__GT_data = (function dice_and_clocks$firebase_auth$user__GT_data(user){
if(cljs.core.truth_(user)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),user.email,new cljs.core.Keyword(null,"uid","uid",-1447769400),user.uid,new cljs.core.Keyword(null,"display-name","display-name",694513143),user.displayName], null);
} else {
return null;
}
});
dice_and_clocks.firebase_auth.user_info = (function dice_and_clocks$firebase_auth$user_info(){
var auth_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var callback = (function (x){
return cljs.core.reset_BANG_(auth_state,dice_and_clocks.firebase_auth.user__GT_data(x));
});
var error_callback = (function (x){
return cljs.core.reset_BANG_(auth_state,x);
});
dice_and_clocks.firebase_auth.auth().onAuthStateChanged(callback,error_callback);

return auth_state;
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dice-and-clocks.firebase-auth","user-auth","dice-and-clocks.firebase-auth/user-auth",-664097959),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dice_and_clocks.firebase_auth.user_info,(function (user){
if(((cljs.core.not(user)) || ((user instanceof Error)))){
return null;
} else {
return user;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("dice-and-clocks.firebase-auth","uid","dice-and-clocks.firebase-auth/uid",904044549),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dice-and-clocks.firebase-auth","user-auth","dice-and-clocks.firebase-auth/user-auth",-664097959)], null));
}),(function (auth){
if(cljs.core.truth_(auth)){
return new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(auth);
} else {
return null;
}
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dice-and-clocks.firebase-auth","sign-in","dice-and-clocks.firebase-auth/sign-in",-862361657),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dice-and-clocks.firebase-auth","google-sign-in","dice-and-clocks.firebase-auth/google-sign-in",-809740253),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dice-and-clocks.firebase-auth","sign-out","dice-and-clocks.firebase-auth/sign-out",1401007192),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dice-and-clocks.firebase-auth","sign-out","dice-and-clocks.firebase-auth/sign-out",1401007192),null], null);
}));

//# sourceMappingURL=dice_and_clocks.firebase_auth.js.map
