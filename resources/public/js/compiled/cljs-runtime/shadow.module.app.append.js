
shadow.cljs.devtools.client.env.module_loaded('app');

try { dice_and_clocks.core.init(); } catch (e) { console.error("An error occurred when calling (dice-and-clocks.core/init)"); throw(e); }