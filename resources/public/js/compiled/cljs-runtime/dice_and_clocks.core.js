goog.provide('dice_and_clocks.core');
dice_and_clocks.core.dev_setup = (function dice_and_clocks$core$dev_setup(){
if(dice_and_clocks.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
dice_and_clocks.core.mount_root = (function dice_and_clocks$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dice_and_clocks.views.main_panel], null),root_el);
});
dice_and_clocks.core.init = (function dice_and_clocks$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dice-and-clocks.events","initialize-db","dice-and-clocks.events/initialize-db",507768390)], null));

dice_and_clocks.core.dev_setup();

return dice_and_clocks.core.mount_root();
});

//# sourceMappingURL=dice_and_clocks.core.js.map
