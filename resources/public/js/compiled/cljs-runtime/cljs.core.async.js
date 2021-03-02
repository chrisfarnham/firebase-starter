goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51062 = arguments.length;
switch (G__51062) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51067 = (function (f,blockable,meta51068){
this.f = f;
this.blockable = blockable;
this.meta51068 = meta51068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51069,meta51068__$1){
var self__ = this;
var _51069__$1 = this;
return (new cljs.core.async.t_cljs$core$async51067(self__.f,self__.blockable,meta51068__$1));
}));

(cljs.core.async.t_cljs$core$async51067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51069){
var self__ = this;
var _51069__$1 = this;
return self__.meta51068;
}));

(cljs.core.async.t_cljs$core$async51067.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51067.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async51067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async51067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51068","meta51068",-902989000,null)], null);
}));

(cljs.core.async.t_cljs$core$async51067.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51067");

(cljs.core.async.t_cljs$core$async51067.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51067");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51067.
 */
cljs.core.async.__GT_t_cljs$core$async51067 = (function cljs$core$async$__GT_t_cljs$core$async51067(f__$1,blockable__$1,meta51068){
return (new cljs.core.async.t_cljs$core$async51067(f__$1,blockable__$1,meta51068));
});

}

return (new cljs.core.async.t_cljs$core$async51067(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__51108 = arguments.length;
switch (G__51108) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__51122 = arguments.length;
switch (G__51122) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__51128 = arguments.length;
switch (G__51128) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_53084 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53084) : fn1.call(null,val_53084));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53084) : fn1.call(null,val_53084));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__51158 = arguments.length;
switch (G__51158) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5752__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5752__auto__)){
var ret = temp__5752__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5752__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5752__auto__)){
var retb = temp__5752__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___53086 = n;
var x_53087 = (0);
while(true){
if((x_53087 < n__4613__auto___53086)){
(a[x_53087] = x_53087);

var G__53088 = (x_53087 + (1));
x_53087 = G__53088;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51191 = (function (flag,meta51192){
this.flag = flag;
this.meta51192 = meta51192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51193,meta51192__$1){
var self__ = this;
var _51193__$1 = this;
return (new cljs.core.async.t_cljs$core$async51191(self__.flag,meta51192__$1));
}));

(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51193){
var self__ = this;
var _51193__$1 = this;
return self__.meta51192;
}));

(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async51191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51192","meta51192",1014593628,null)], null);
}));

(cljs.core.async.t_cljs$core$async51191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51191");

(cljs.core.async.t_cljs$core$async51191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51191.
 */
cljs.core.async.__GT_t_cljs$core$async51191 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51191(flag__$1,meta51192){
return (new cljs.core.async.t_cljs$core$async51191(flag__$1,meta51192));
});

}

return (new cljs.core.async.t_cljs$core$async51191(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51209 = (function (flag,cb,meta51210){
this.flag = flag;
this.cb = cb;
this.meta51210 = meta51210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51211,meta51210__$1){
var self__ = this;
var _51211__$1 = this;
return (new cljs.core.async.t_cljs$core$async51209(self__.flag,self__.cb,meta51210__$1));
}));

(cljs.core.async.t_cljs$core$async51209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51211){
var self__ = this;
var _51211__$1 = this;
return self__.meta51210;
}));

(cljs.core.async.t_cljs$core$async51209.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async51209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51210","meta51210",-1196312887,null)], null);
}));

(cljs.core.async.t_cljs$core$async51209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51209");

(cljs.core.async.t_cljs$core$async51209.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51209.
 */
cljs.core.async.__GT_t_cljs$core$async51209 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51209(flag__$1,cb__$1,meta51210){
return (new cljs.core.async.t_cljs$core$async51209(flag__$1,cb__$1,meta51210));
});

}

return (new cljs.core.async.t_cljs$core$async51209(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51231_SHARP_){
var G__51236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51231_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51236) : fret.call(null,G__51236));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51232_SHARP_){
var G__51239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51232_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51239) : fret.call(null,G__51239));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53092 = (i + (1));
i = G__53092;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5754__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5754__auto__)){
var got = temp__5754__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53094 = arguments.length;
var i__4737__auto___53095 = (0);
while(true){
if((i__4737__auto___53095 < len__4736__auto___53094)){
args__4742__auto__.push((arguments[i__4737__auto___53095]));

var G__53096 = (i__4737__auto___53095 + (1));
i__4737__auto___53095 = G__53096;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51250){
var map__51251 = p__51250;
var map__51251__$1 = (((((!((map__51251 == null))))?(((((map__51251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51251):map__51251);
var opts = map__51251__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51241){
var G__51242 = cljs.core.first(seq51241);
var seq51241__$1 = cljs.core.next(seq51241);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51242,seq51241__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__51265 = arguments.length;
switch (G__51265) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50948__auto___53102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_51317){
var state_val_51319 = (state_51317[(1)]);
if((state_val_51319 === (7))){
var inst_51313 = (state_51317[(2)]);
var state_51317__$1 = state_51317;
var statearr_51320_53104 = state_51317__$1;
(statearr_51320_53104[(2)] = inst_51313);

(statearr_51320_53104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51319 === (1))){
var state_51317__$1 = state_51317;
var statearr_51321_53106 = state_51317__$1;
(statearr_51321_53106[(2)] = null);

(statearr_51321_53106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51319 === (4))){
var inst_51293 = (state_51317[(7)]);
var inst_51293__$1 = (state_51317[(2)]);
var inst_51295 = (inst_51293__$1 == null);
var state_51317__$1 = (function (){var statearr_51323 = state_51317;
(statearr_51323[(7)] = inst_51293__$1);

return statearr_51323;
})();
if(cljs.core.truth_(inst_51295)){
var statearr_51324_53107 = state_51317__$1;
(statearr_51324_53107[(1)] = (5));

} else {
var statearr_51325_53108 = state_51317__$1;
(statearr_51325_53108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51319 === (13))){
var state_51317__$1 = state_51317;
var statearr_51326_53109 = state_51317__$1;
(statearr_51326_53109[(2)] = null);

(statearr_51326_53109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51319 === (6))){
var inst_51293 = (state_51317[(7)]);
var state_51317__$1 = state_51317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51317__$1,(11),to,inst_51293);
} else {
if((state_val_51319 === (3))){
var inst_51315 = (state_51317[(2)]);
var state_51317__$1 = state_51317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51317__$1,inst_51315);
} else {
if((state_val_51319 === (12))){
var state_51317__$1 = state_51317;
var statearr_51327_53110 = state_51317__$1;
(statearr_51327_53110[(2)] = null);

(statearr_51327_53110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51319 === (2))){
var state_51317__$1 = state_51317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51317__$1,(4),from);
} else {
if((state_val_51319 === (11))){
var inst_51306 = (state_51317[(2)]);
var state_51317__$1 = state_51317;
if(cljs.core.truth_(inst_51306)){
var statearr_51328_53113 = state_51317__$1;
(statearr_51328_53113[(1)] = (12));

} else {
var statearr_51329_53114 = state_51317__$1;
(statearr_51329_53114[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51319 === (9))){
var state_51317__$1 = state_51317;
var statearr_51330_53115 = state_51317__$1;
(statearr_51330_53115[(2)] = null);

(statearr_51330_53115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51319 === (5))){
var state_51317__$1 = state_51317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51331_53116 = state_51317__$1;
(statearr_51331_53116[(1)] = (8));

} else {
var statearr_51332_53117 = state_51317__$1;
(statearr_51332_53117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51319 === (14))){
var inst_51311 = (state_51317[(2)]);
var state_51317__$1 = state_51317;
var statearr_51333_53118 = state_51317__$1;
(statearr_51333_53118[(2)] = inst_51311);

(statearr_51333_53118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51319 === (10))){
var inst_51303 = (state_51317[(2)]);
var state_51317__$1 = state_51317;
var statearr_51334_53120 = state_51317__$1;
(statearr_51334_53120[(2)] = inst_51303);

(statearr_51334_53120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51319 === (8))){
var inst_51298 = cljs.core.async.close_BANG_(to);
var state_51317__$1 = state_51317;
var statearr_51335_53122 = state_51317__$1;
(statearr_51335_53122[(2)] = inst_51298);

(statearr_51335_53122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50825__auto__ = null;
var cljs$core$async$state_machine__50825__auto____0 = (function (){
var statearr_51336 = [null,null,null,null,null,null,null,null];
(statearr_51336[(0)] = cljs$core$async$state_machine__50825__auto__);

(statearr_51336[(1)] = (1));

return statearr_51336;
});
var cljs$core$async$state_machine__50825__auto____1 = (function (state_51317){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_51317);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e51337){var ex__50828__auto__ = e51337;
var statearr_51338_53123 = state_51317;
(statearr_51338_53123[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_51317[(4)]))){
var statearr_51339_53124 = state_51317;
(statearr_51339_53124[(1)] = cljs.core.first((state_51317[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53125 = state_51317;
state_51317 = G__53125;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$state_machine__50825__auto__ = function(state_51317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50825__auto____1.call(this,state_51317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50825__auto____0;
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50825__auto____1;
return cljs$core$async$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_51344 = f__50949__auto__();
(statearr_51344[(6)] = c__50948__auto___53102);

return statearr_51344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__51383){
var vec__51388 = p__51383;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51388,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51388,(1),null);
var job = vec__51388;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50948__auto___53128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_51395){
var state_val_51396 = (state_51395[(1)]);
if((state_val_51396 === (1))){
var state_51395__$1 = state_51395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51395__$1,(2),res,v);
} else {
if((state_val_51396 === (2))){
var inst_51392 = (state_51395[(2)]);
var inst_51393 = cljs.core.async.close_BANG_(res);
var state_51395__$1 = (function (){var statearr_51398 = state_51395;
(statearr_51398[(7)] = inst_51392);

return statearr_51398;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51395__$1,inst_51393);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0 = (function (){
var statearr_51399 = [null,null,null,null,null,null,null,null];
(statearr_51399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__);

(statearr_51399[(1)] = (1));

return statearr_51399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1 = (function (state_51395){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_51395);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e51400){var ex__50828__auto__ = e51400;
var statearr_51401_53130 = state_51395;
(statearr_51401_53130[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_51395[(4)]))){
var statearr_51402_53131 = state_51395;
(statearr_51402_53131[(1)] = cljs.core.first((state_51395[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53132 = state_51395;
state_51395 = G__53132;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__ = function(state_51395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1.call(this,state_51395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_51403 = f__50949__auto__();
(statearr_51403[(6)] = c__50948__auto___53128);

return statearr_51403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__51404){
var vec__51406 = p__51404;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51406,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51406,(1),null);
var job = vec__51406;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___53135 = n;
var __53136 = (0);
while(true){
if((__53136 < n__4613__auto___53135)){
var G__51409_53137 = type;
var G__51409_53138__$1 = (((G__51409_53137 instanceof cljs.core.Keyword))?G__51409_53137.fqn:null);
switch (G__51409_53138__$1) {
case "compute":
var c__50948__auto___53140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53136,c__50948__auto___53140,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async){
return (function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = ((function (__53136,c__50948__auto___53140,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async){
return (function (state_51422){
var state_val_51423 = (state_51422[(1)]);
if((state_val_51423 === (1))){
var state_51422__$1 = state_51422;
var statearr_51424_53141 = state_51422__$1;
(statearr_51424_53141[(2)] = null);

(statearr_51424_53141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51423 === (2))){
var state_51422__$1 = state_51422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51422__$1,(4),jobs);
} else {
if((state_val_51423 === (3))){
var inst_51420 = (state_51422[(2)]);
var state_51422__$1 = state_51422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51422__$1,inst_51420);
} else {
if((state_val_51423 === (4))){
var inst_51412 = (state_51422[(2)]);
var inst_51413 = process(inst_51412);
var state_51422__$1 = state_51422;
if(cljs.core.truth_(inst_51413)){
var statearr_51425_53146 = state_51422__$1;
(statearr_51425_53146[(1)] = (5));

} else {
var statearr_51426_53147 = state_51422__$1;
(statearr_51426_53147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51423 === (5))){
var state_51422__$1 = state_51422;
var statearr_51427_53148 = state_51422__$1;
(statearr_51427_53148[(2)] = null);

(statearr_51427_53148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51423 === (6))){
var state_51422__$1 = state_51422;
var statearr_51428_53149 = state_51422__$1;
(statearr_51428_53149[(2)] = null);

(statearr_51428_53149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51423 === (7))){
var inst_51418 = (state_51422[(2)]);
var state_51422__$1 = state_51422;
var statearr_51429_53150 = state_51422__$1;
(statearr_51429_53150[(2)] = inst_51418);

(statearr_51429_53150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53136,c__50948__auto___53140,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async))
;
return ((function (__53136,switch__50824__auto__,c__50948__auto___53140,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0 = (function (){
var statearr_51430 = [null,null,null,null,null,null,null];
(statearr_51430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__);

(statearr_51430[(1)] = (1));

return statearr_51430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1 = (function (state_51422){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_51422);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e51431){var ex__50828__auto__ = e51431;
var statearr_51432_53152 = state_51422;
(statearr_51432_53152[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_51422[(4)]))){
var statearr_51433_53153 = state_51422;
(statearr_51433_53153[(1)] = cljs.core.first((state_51422[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53155 = state_51422;
state_51422 = G__53155;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__ = function(state_51422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1.call(this,state_51422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__;
})()
;})(__53136,switch__50824__auto__,c__50948__auto___53140,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async))
})();
var state__50950__auto__ = (function (){var statearr_51434 = f__50949__auto__();
(statearr_51434[(6)] = c__50948__auto___53140);

return statearr_51434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
});})(__53136,c__50948__auto___53140,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async))
);


break;
case "async":
var c__50948__auto___53157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53136,c__50948__auto___53157,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async){
return (function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = ((function (__53136,c__50948__auto___53157,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async){
return (function (state_51447){
var state_val_51448 = (state_51447[(1)]);
if((state_val_51448 === (1))){
var state_51447__$1 = state_51447;
var statearr_51449_53159 = state_51447__$1;
(statearr_51449_53159[(2)] = null);

(statearr_51449_53159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (2))){
var state_51447__$1 = state_51447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51447__$1,(4),jobs);
} else {
if((state_val_51448 === (3))){
var inst_51445 = (state_51447[(2)]);
var state_51447__$1 = state_51447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51447__$1,inst_51445);
} else {
if((state_val_51448 === (4))){
var inst_51437 = (state_51447[(2)]);
var inst_51438 = async(inst_51437);
var state_51447__$1 = state_51447;
if(cljs.core.truth_(inst_51438)){
var statearr_51450_53162 = state_51447__$1;
(statearr_51450_53162[(1)] = (5));

} else {
var statearr_51451_53163 = state_51447__$1;
(statearr_51451_53163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (5))){
var state_51447__$1 = state_51447;
var statearr_51452_53164 = state_51447__$1;
(statearr_51452_53164[(2)] = null);

(statearr_51452_53164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (6))){
var state_51447__$1 = state_51447;
var statearr_51453_53166 = state_51447__$1;
(statearr_51453_53166[(2)] = null);

(statearr_51453_53166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51448 === (7))){
var inst_51443 = (state_51447[(2)]);
var state_51447__$1 = state_51447;
var statearr_51454_53167 = state_51447__$1;
(statearr_51454_53167[(2)] = inst_51443);

(statearr_51454_53167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53136,c__50948__auto___53157,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async))
;
return ((function (__53136,switch__50824__auto__,c__50948__auto___53157,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0 = (function (){
var statearr_51455 = [null,null,null,null,null,null,null];
(statearr_51455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__);

(statearr_51455[(1)] = (1));

return statearr_51455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1 = (function (state_51447){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_51447);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e51456){var ex__50828__auto__ = e51456;
var statearr_51457_53172 = state_51447;
(statearr_51457_53172[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_51447[(4)]))){
var statearr_51458_53176 = state_51447;
(statearr_51458_53176[(1)] = cljs.core.first((state_51447[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53177 = state_51447;
state_51447 = G__53177;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__ = function(state_51447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1.call(this,state_51447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__;
})()
;})(__53136,switch__50824__auto__,c__50948__auto___53157,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async))
})();
var state__50950__auto__ = (function (){var statearr_51459 = f__50949__auto__();
(statearr_51459[(6)] = c__50948__auto___53157);

return statearr_51459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
});})(__53136,c__50948__auto___53157,G__51409_53137,G__51409_53138__$1,n__4613__auto___53135,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51409_53138__$1)].join('')));

}

var G__53182 = (__53136 + (1));
__53136 = G__53182;
continue;
} else {
}
break;
}

var c__50948__auto___53183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_51481){
var state_val_51482 = (state_51481[(1)]);
if((state_val_51482 === (7))){
var inst_51477 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
var statearr_51483_53187 = state_51481__$1;
(statearr_51483_53187[(2)] = inst_51477);

(statearr_51483_53187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (1))){
var state_51481__$1 = state_51481;
var statearr_51484_53188 = state_51481__$1;
(statearr_51484_53188[(2)] = null);

(statearr_51484_53188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (4))){
var inst_51462 = (state_51481[(7)]);
var inst_51462__$1 = (state_51481[(2)]);
var inst_51463 = (inst_51462__$1 == null);
var state_51481__$1 = (function (){var statearr_51485 = state_51481;
(statearr_51485[(7)] = inst_51462__$1);

return statearr_51485;
})();
if(cljs.core.truth_(inst_51463)){
var statearr_51486_53192 = state_51481__$1;
(statearr_51486_53192[(1)] = (5));

} else {
var statearr_51487_53193 = state_51481__$1;
(statearr_51487_53193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (6))){
var inst_51467 = (state_51481[(8)]);
var inst_51462 = (state_51481[(7)]);
var inst_51467__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51468 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51469 = [inst_51462,inst_51467__$1];
var inst_51470 = (new cljs.core.PersistentVector(null,2,(5),inst_51468,inst_51469,null));
var state_51481__$1 = (function (){var statearr_51488 = state_51481;
(statearr_51488[(8)] = inst_51467__$1);

return statearr_51488;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51481__$1,(8),jobs,inst_51470);
} else {
if((state_val_51482 === (3))){
var inst_51479 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51481__$1,inst_51479);
} else {
if((state_val_51482 === (2))){
var state_51481__$1 = state_51481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51481__$1,(4),from);
} else {
if((state_val_51482 === (9))){
var inst_51474 = (state_51481[(2)]);
var state_51481__$1 = (function (){var statearr_51489 = state_51481;
(statearr_51489[(9)] = inst_51474);

return statearr_51489;
})();
var statearr_51490_53202 = state_51481__$1;
(statearr_51490_53202[(2)] = null);

(statearr_51490_53202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (5))){
var inst_51465 = cljs.core.async.close_BANG_(jobs);
var state_51481__$1 = state_51481;
var statearr_51491_53203 = state_51481__$1;
(statearr_51491_53203[(2)] = inst_51465);

(statearr_51491_53203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (8))){
var inst_51467 = (state_51481[(8)]);
var inst_51472 = (state_51481[(2)]);
var state_51481__$1 = (function (){var statearr_51492 = state_51481;
(statearr_51492[(10)] = inst_51472);

return statearr_51492;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51481__$1,(9),results,inst_51467);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0 = (function (){
var statearr_51493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__);

(statearr_51493[(1)] = (1));

return statearr_51493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1 = (function (state_51481){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_51481);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e51494){var ex__50828__auto__ = e51494;
var statearr_51495_53211 = state_51481;
(statearr_51495_53211[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_51481[(4)]))){
var statearr_51496_53212 = state_51481;
(statearr_51496_53212[(1)] = cljs.core.first((state_51481[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53216 = state_51481;
state_51481 = G__53216;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__ = function(state_51481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1.call(this,state_51481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_51497 = f__50949__auto__();
(statearr_51497[(6)] = c__50948__auto___53183);

return statearr_51497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


var c__50948__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_51535){
var state_val_51536 = (state_51535[(1)]);
if((state_val_51536 === (7))){
var inst_51531 = (state_51535[(2)]);
var state_51535__$1 = state_51535;
var statearr_51537_53218 = state_51535__$1;
(statearr_51537_53218[(2)] = inst_51531);

(statearr_51537_53218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (20))){
var state_51535__$1 = state_51535;
var statearr_51538_53220 = state_51535__$1;
(statearr_51538_53220[(2)] = null);

(statearr_51538_53220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (1))){
var state_51535__$1 = state_51535;
var statearr_51539_53221 = state_51535__$1;
(statearr_51539_53221[(2)] = null);

(statearr_51539_53221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (4))){
var inst_51500 = (state_51535[(7)]);
var inst_51500__$1 = (state_51535[(2)]);
var inst_51501 = (inst_51500__$1 == null);
var state_51535__$1 = (function (){var statearr_51540 = state_51535;
(statearr_51540[(7)] = inst_51500__$1);

return statearr_51540;
})();
if(cljs.core.truth_(inst_51501)){
var statearr_51541_53222 = state_51535__$1;
(statearr_51541_53222[(1)] = (5));

} else {
var statearr_51542_53223 = state_51535__$1;
(statearr_51542_53223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (15))){
var inst_51513 = (state_51535[(8)]);
var state_51535__$1 = state_51535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51535__$1,(18),to,inst_51513);
} else {
if((state_val_51536 === (21))){
var inst_51526 = (state_51535[(2)]);
var state_51535__$1 = state_51535;
var statearr_51543_53224 = state_51535__$1;
(statearr_51543_53224[(2)] = inst_51526);

(statearr_51543_53224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (13))){
var inst_51528 = (state_51535[(2)]);
var state_51535__$1 = (function (){var statearr_51544 = state_51535;
(statearr_51544[(9)] = inst_51528);

return statearr_51544;
})();
var statearr_51545_53226 = state_51535__$1;
(statearr_51545_53226[(2)] = null);

(statearr_51545_53226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (6))){
var inst_51500 = (state_51535[(7)]);
var state_51535__$1 = state_51535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51535__$1,(11),inst_51500);
} else {
if((state_val_51536 === (17))){
var inst_51521 = (state_51535[(2)]);
var state_51535__$1 = state_51535;
if(cljs.core.truth_(inst_51521)){
var statearr_51546_53227 = state_51535__$1;
(statearr_51546_53227[(1)] = (19));

} else {
var statearr_51547_53228 = state_51535__$1;
(statearr_51547_53228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (3))){
var inst_51533 = (state_51535[(2)]);
var state_51535__$1 = state_51535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51535__$1,inst_51533);
} else {
if((state_val_51536 === (12))){
var inst_51510 = (state_51535[(10)]);
var state_51535__$1 = state_51535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51535__$1,(14),inst_51510);
} else {
if((state_val_51536 === (2))){
var state_51535__$1 = state_51535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51535__$1,(4),results);
} else {
if((state_val_51536 === (19))){
var state_51535__$1 = state_51535;
var statearr_51548_53229 = state_51535__$1;
(statearr_51548_53229[(2)] = null);

(statearr_51548_53229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (11))){
var inst_51510 = (state_51535[(2)]);
var state_51535__$1 = (function (){var statearr_51549 = state_51535;
(statearr_51549[(10)] = inst_51510);

return statearr_51549;
})();
var statearr_51550_53230 = state_51535__$1;
(statearr_51550_53230[(2)] = null);

(statearr_51550_53230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (9))){
var state_51535__$1 = state_51535;
var statearr_51551_53232 = state_51535__$1;
(statearr_51551_53232[(2)] = null);

(statearr_51551_53232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (5))){
var state_51535__$1 = state_51535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51552_53233 = state_51535__$1;
(statearr_51552_53233[(1)] = (8));

} else {
var statearr_51553_53234 = state_51535__$1;
(statearr_51553_53234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (14))){
var inst_51513 = (state_51535[(8)]);
var inst_51513__$1 = (state_51535[(2)]);
var inst_51514 = (inst_51513__$1 == null);
var inst_51515 = cljs.core.not(inst_51514);
var state_51535__$1 = (function (){var statearr_51554 = state_51535;
(statearr_51554[(8)] = inst_51513__$1);

return statearr_51554;
})();
if(inst_51515){
var statearr_51555_53235 = state_51535__$1;
(statearr_51555_53235[(1)] = (15));

} else {
var statearr_51556_53236 = state_51535__$1;
(statearr_51556_53236[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (16))){
var state_51535__$1 = state_51535;
var statearr_51557_53237 = state_51535__$1;
(statearr_51557_53237[(2)] = false);

(statearr_51557_53237[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (10))){
var inst_51507 = (state_51535[(2)]);
var state_51535__$1 = state_51535;
var statearr_51558_53238 = state_51535__$1;
(statearr_51558_53238[(2)] = inst_51507);

(statearr_51558_53238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (18))){
var inst_51518 = (state_51535[(2)]);
var state_51535__$1 = state_51535;
var statearr_51559_53242 = state_51535__$1;
(statearr_51559_53242[(2)] = inst_51518);

(statearr_51559_53242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51536 === (8))){
var inst_51504 = cljs.core.async.close_BANG_(to);
var state_51535__$1 = state_51535;
var statearr_51560_53244 = state_51535__$1;
(statearr_51560_53244[(2)] = inst_51504);

(statearr_51560_53244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0 = (function (){
var statearr_51561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__);

(statearr_51561[(1)] = (1));

return statearr_51561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1 = (function (state_51535){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_51535);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e51562){var ex__50828__auto__ = e51562;
var statearr_51563_53249 = state_51535;
(statearr_51563_53249[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_51535[(4)]))){
var statearr_51564_53250 = state_51535;
(statearr_51564_53250[(1)] = cljs.core.first((state_51535[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53253 = state_51535;
state_51535 = G__53253;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__ = function(state_51535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1.call(this,state_51535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_51565 = f__50949__auto__();
(statearr_51565[(6)] = c__50948__auto__);

return statearr_51565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));

return c__50948__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__51571 = arguments.length;
switch (G__51571) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__51573 = arguments.length;
switch (G__51573) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__51575 = arguments.length;
switch (G__51575) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__50948__auto___53275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_51601){
var state_val_51602 = (state_51601[(1)]);
if((state_val_51602 === (7))){
var inst_51597 = (state_51601[(2)]);
var state_51601__$1 = state_51601;
var statearr_51603_53282 = state_51601__$1;
(statearr_51603_53282[(2)] = inst_51597);

(statearr_51603_53282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51602 === (1))){
var state_51601__$1 = state_51601;
var statearr_51604_53283 = state_51601__$1;
(statearr_51604_53283[(2)] = null);

(statearr_51604_53283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51602 === (4))){
var inst_51578 = (state_51601[(7)]);
var inst_51578__$1 = (state_51601[(2)]);
var inst_51579 = (inst_51578__$1 == null);
var state_51601__$1 = (function (){var statearr_51607 = state_51601;
(statearr_51607[(7)] = inst_51578__$1);

return statearr_51607;
})();
if(cljs.core.truth_(inst_51579)){
var statearr_51608_53284 = state_51601__$1;
(statearr_51608_53284[(1)] = (5));

} else {
var statearr_51609_53285 = state_51601__$1;
(statearr_51609_53285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51602 === (13))){
var state_51601__$1 = state_51601;
var statearr_51610_53286 = state_51601__$1;
(statearr_51610_53286[(2)] = null);

(statearr_51610_53286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51602 === (6))){
var inst_51578 = (state_51601[(7)]);
var inst_51584 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51578) : p.call(null,inst_51578));
var state_51601__$1 = state_51601;
if(cljs.core.truth_(inst_51584)){
var statearr_51611_53287 = state_51601__$1;
(statearr_51611_53287[(1)] = (9));

} else {
var statearr_51612_53289 = state_51601__$1;
(statearr_51612_53289[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51602 === (3))){
var inst_51599 = (state_51601[(2)]);
var state_51601__$1 = state_51601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51601__$1,inst_51599);
} else {
if((state_val_51602 === (12))){
var state_51601__$1 = state_51601;
var statearr_51613_53290 = state_51601__$1;
(statearr_51613_53290[(2)] = null);

(statearr_51613_53290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51602 === (2))){
var state_51601__$1 = state_51601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51601__$1,(4),ch);
} else {
if((state_val_51602 === (11))){
var inst_51578 = (state_51601[(7)]);
var inst_51588 = (state_51601[(2)]);
var state_51601__$1 = state_51601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51601__$1,(8),inst_51588,inst_51578);
} else {
if((state_val_51602 === (9))){
var state_51601__$1 = state_51601;
var statearr_51614_53297 = state_51601__$1;
(statearr_51614_53297[(2)] = tc);

(statearr_51614_53297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51602 === (5))){
var inst_51581 = cljs.core.async.close_BANG_(tc);
var inst_51582 = cljs.core.async.close_BANG_(fc);
var state_51601__$1 = (function (){var statearr_51615 = state_51601;
(statearr_51615[(8)] = inst_51581);

return statearr_51615;
})();
var statearr_51616_53298 = state_51601__$1;
(statearr_51616_53298[(2)] = inst_51582);

(statearr_51616_53298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51602 === (14))){
var inst_51595 = (state_51601[(2)]);
var state_51601__$1 = state_51601;
var statearr_51617_53300 = state_51601__$1;
(statearr_51617_53300[(2)] = inst_51595);

(statearr_51617_53300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51602 === (10))){
var state_51601__$1 = state_51601;
var statearr_51618_53301 = state_51601__$1;
(statearr_51618_53301[(2)] = fc);

(statearr_51618_53301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51602 === (8))){
var inst_51590 = (state_51601[(2)]);
var state_51601__$1 = state_51601;
if(cljs.core.truth_(inst_51590)){
var statearr_51619_53302 = state_51601__$1;
(statearr_51619_53302[(1)] = (12));

} else {
var statearr_51620_53303 = state_51601__$1;
(statearr_51620_53303[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50825__auto__ = null;
var cljs$core$async$state_machine__50825__auto____0 = (function (){
var statearr_51621 = [null,null,null,null,null,null,null,null,null];
(statearr_51621[(0)] = cljs$core$async$state_machine__50825__auto__);

(statearr_51621[(1)] = (1));

return statearr_51621;
});
var cljs$core$async$state_machine__50825__auto____1 = (function (state_51601){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_51601);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e51622){var ex__50828__auto__ = e51622;
var statearr_51623_53305 = state_51601;
(statearr_51623_53305[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_51601[(4)]))){
var statearr_51624_53312 = state_51601;
(statearr_51624_53312[(1)] = cljs.core.first((state_51601[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53313 = state_51601;
state_51601 = G__53313;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$state_machine__50825__auto__ = function(state_51601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50825__auto____1.call(this,state_51601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50825__auto____0;
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50825__auto____1;
return cljs$core$async$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_51625 = f__50949__auto__();
(statearr_51625[(6)] = c__50948__auto___53275);

return statearr_51625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50948__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_51647){
var state_val_51648 = (state_51647[(1)]);
if((state_val_51648 === (7))){
var inst_51643 = (state_51647[(2)]);
var state_51647__$1 = state_51647;
var statearr_51653_53314 = state_51647__$1;
(statearr_51653_53314[(2)] = inst_51643);

(statearr_51653_53314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (1))){
var inst_51626 = init;
var inst_51627 = inst_51626;
var state_51647__$1 = (function (){var statearr_51654 = state_51647;
(statearr_51654[(7)] = inst_51627);

return statearr_51654;
})();
var statearr_51655_53315 = state_51647__$1;
(statearr_51655_53315[(2)] = null);

(statearr_51655_53315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (4))){
var inst_51630 = (state_51647[(8)]);
var inst_51630__$1 = (state_51647[(2)]);
var inst_51631 = (inst_51630__$1 == null);
var state_51647__$1 = (function (){var statearr_51656 = state_51647;
(statearr_51656[(8)] = inst_51630__$1);

return statearr_51656;
})();
if(cljs.core.truth_(inst_51631)){
var statearr_51657_53317 = state_51647__$1;
(statearr_51657_53317[(1)] = (5));

} else {
var statearr_51658_53318 = state_51647__$1;
(statearr_51658_53318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (6))){
var inst_51627 = (state_51647[(7)]);
var inst_51634 = (state_51647[(9)]);
var inst_51630 = (state_51647[(8)]);
var inst_51634__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_51627,inst_51630) : f.call(null,inst_51627,inst_51630));
var inst_51635 = cljs.core.reduced_QMARK_(inst_51634__$1);
var state_51647__$1 = (function (){var statearr_51659 = state_51647;
(statearr_51659[(9)] = inst_51634__$1);

return statearr_51659;
})();
if(inst_51635){
var statearr_51660_53325 = state_51647__$1;
(statearr_51660_53325[(1)] = (8));

} else {
var statearr_51661_53326 = state_51647__$1;
(statearr_51661_53326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (3))){
var inst_51645 = (state_51647[(2)]);
var state_51647__$1 = state_51647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51647__$1,inst_51645);
} else {
if((state_val_51648 === (2))){
var state_51647__$1 = state_51647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51647__$1,(4),ch);
} else {
if((state_val_51648 === (9))){
var inst_51634 = (state_51647[(9)]);
var inst_51627 = inst_51634;
var state_51647__$1 = (function (){var statearr_51662 = state_51647;
(statearr_51662[(7)] = inst_51627);

return statearr_51662;
})();
var statearr_51663_53328 = state_51647__$1;
(statearr_51663_53328[(2)] = null);

(statearr_51663_53328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (5))){
var inst_51627 = (state_51647[(7)]);
var state_51647__$1 = state_51647;
var statearr_51664_53329 = state_51647__$1;
(statearr_51664_53329[(2)] = inst_51627);

(statearr_51664_53329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (10))){
var inst_51641 = (state_51647[(2)]);
var state_51647__$1 = state_51647;
var statearr_51665_53330 = state_51647__$1;
(statearr_51665_53330[(2)] = inst_51641);

(statearr_51665_53330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51648 === (8))){
var inst_51634 = (state_51647[(9)]);
var inst_51637 = cljs.core.deref(inst_51634);
var state_51647__$1 = state_51647;
var statearr_51666_53331 = state_51647__$1;
(statearr_51666_53331[(2)] = inst_51637);

(statearr_51666_53331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__50825__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50825__auto____0 = (function (){
var statearr_51667 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51667[(0)] = cljs$core$async$reduce_$_state_machine__50825__auto__);

(statearr_51667[(1)] = (1));

return statearr_51667;
});
var cljs$core$async$reduce_$_state_machine__50825__auto____1 = (function (state_51647){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_51647);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e51668){var ex__50828__auto__ = e51668;
var statearr_51669_53333 = state_51647;
(statearr_51669_53333[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_51647[(4)]))){
var statearr_51670_53334 = state_51647;
(statearr_51670_53334[(1)] = cljs.core.first((state_51647[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53335 = state_51647;
state_51647 = G__53335;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50825__auto__ = function(state_51647){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50825__auto____1.call(this,state_51647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50825__auto____0;
cljs$core$async$reduce_$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50825__auto____1;
return cljs$core$async$reduce_$_state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_51675 = f__50949__auto__();
(statearr_51675[(6)] = c__50948__auto__);

return statearr_51675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));

return c__50948__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50948__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_51681){
var state_val_51682 = (state_51681[(1)]);
if((state_val_51682 === (1))){
var inst_51676 = cljs.core.async.reduce(f__$1,init,ch);
var state_51681__$1 = state_51681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51681__$1,(2),inst_51676);
} else {
if((state_val_51682 === (2))){
var inst_51678 = (state_51681[(2)]);
var inst_51679 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_51678) : f__$1.call(null,inst_51678));
var state_51681__$1 = state_51681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51681__$1,inst_51679);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50825__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50825__auto____0 = (function (){
var statearr_51683 = [null,null,null,null,null,null,null];
(statearr_51683[(0)] = cljs$core$async$transduce_$_state_machine__50825__auto__);

(statearr_51683[(1)] = (1));

return statearr_51683;
});
var cljs$core$async$transduce_$_state_machine__50825__auto____1 = (function (state_51681){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_51681);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e51684){var ex__50828__auto__ = e51684;
var statearr_51685_53337 = state_51681;
(statearr_51685_53337[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_51681[(4)]))){
var statearr_51686_53339 = state_51681;
(statearr_51686_53339[(1)] = cljs.core.first((state_51681[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53344 = state_51681;
state_51681 = G__53344;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50825__auto__ = function(state_51681){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50825__auto____1.call(this,state_51681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50825__auto____0;
cljs$core$async$transduce_$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50825__auto____1;
return cljs$core$async$transduce_$_state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_51687 = f__50949__auto__();
(statearr_51687[(6)] = c__50948__auto__);

return statearr_51687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));

return c__50948__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__51693 = arguments.length;
switch (G__51693) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50948__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_51718){
var state_val_51719 = (state_51718[(1)]);
if((state_val_51719 === (7))){
var inst_51700 = (state_51718[(2)]);
var state_51718__$1 = state_51718;
var statearr_51720_53347 = state_51718__$1;
(statearr_51720_53347[(2)] = inst_51700);

(statearr_51720_53347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (1))){
var inst_51694 = cljs.core.seq(coll);
var inst_51695 = inst_51694;
var state_51718__$1 = (function (){var statearr_51721 = state_51718;
(statearr_51721[(7)] = inst_51695);

return statearr_51721;
})();
var statearr_51722_53348 = state_51718__$1;
(statearr_51722_53348[(2)] = null);

(statearr_51722_53348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (4))){
var inst_51695 = (state_51718[(7)]);
var inst_51698 = cljs.core.first(inst_51695);
var state_51718__$1 = state_51718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51718__$1,(7),ch,inst_51698);
} else {
if((state_val_51719 === (13))){
var inst_51712 = (state_51718[(2)]);
var state_51718__$1 = state_51718;
var statearr_51723_53349 = state_51718__$1;
(statearr_51723_53349[(2)] = inst_51712);

(statearr_51723_53349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (6))){
var inst_51703 = (state_51718[(2)]);
var state_51718__$1 = state_51718;
if(cljs.core.truth_(inst_51703)){
var statearr_51724_53352 = state_51718__$1;
(statearr_51724_53352[(1)] = (8));

} else {
var statearr_51725_53353 = state_51718__$1;
(statearr_51725_53353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (3))){
var inst_51716 = (state_51718[(2)]);
var state_51718__$1 = state_51718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51718__$1,inst_51716);
} else {
if((state_val_51719 === (12))){
var state_51718__$1 = state_51718;
var statearr_51726_53354 = state_51718__$1;
(statearr_51726_53354[(2)] = null);

(statearr_51726_53354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (2))){
var inst_51695 = (state_51718[(7)]);
var state_51718__$1 = state_51718;
if(cljs.core.truth_(inst_51695)){
var statearr_51727_53356 = state_51718__$1;
(statearr_51727_53356[(1)] = (4));

} else {
var statearr_51728_53357 = state_51718__$1;
(statearr_51728_53357[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (11))){
var inst_51709 = cljs.core.async.close_BANG_(ch);
var state_51718__$1 = state_51718;
var statearr_51729_53359 = state_51718__$1;
(statearr_51729_53359[(2)] = inst_51709);

(statearr_51729_53359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (9))){
var state_51718__$1 = state_51718;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51730_53361 = state_51718__$1;
(statearr_51730_53361[(1)] = (11));

} else {
var statearr_51731_53362 = state_51718__$1;
(statearr_51731_53362[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (5))){
var inst_51695 = (state_51718[(7)]);
var state_51718__$1 = state_51718;
var statearr_51732_53363 = state_51718__$1;
(statearr_51732_53363[(2)] = inst_51695);

(statearr_51732_53363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (10))){
var inst_51714 = (state_51718[(2)]);
var state_51718__$1 = state_51718;
var statearr_51733_53364 = state_51718__$1;
(statearr_51733_53364[(2)] = inst_51714);

(statearr_51733_53364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51719 === (8))){
var inst_51695 = (state_51718[(7)]);
var inst_51705 = cljs.core.next(inst_51695);
var inst_51695__$1 = inst_51705;
var state_51718__$1 = (function (){var statearr_51734 = state_51718;
(statearr_51734[(7)] = inst_51695__$1);

return statearr_51734;
})();
var statearr_51735_53365 = state_51718__$1;
(statearr_51735_53365[(2)] = null);

(statearr_51735_53365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50825__auto__ = null;
var cljs$core$async$state_machine__50825__auto____0 = (function (){
var statearr_51736 = [null,null,null,null,null,null,null,null];
(statearr_51736[(0)] = cljs$core$async$state_machine__50825__auto__);

(statearr_51736[(1)] = (1));

return statearr_51736;
});
var cljs$core$async$state_machine__50825__auto____1 = (function (state_51718){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_51718);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e51737){var ex__50828__auto__ = e51737;
var statearr_51739_53367 = state_51718;
(statearr_51739_53367[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_51718[(4)]))){
var statearr_51740_53368 = state_51718;
(statearr_51740_53368[(1)] = cljs.core.first((state_51718[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53369 = state_51718;
state_51718 = G__53369;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$state_machine__50825__auto__ = function(state_51718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50825__auto____1.call(this,state_51718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50825__auto____0;
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50825__auto____1;
return cljs$core$async$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_51742 = f__50949__auto__();
(statearr_51742[(6)] = c__50948__auto__);

return statearr_51742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));

return c__50948__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__51744 = arguments.length;
switch (G__51744) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_53373 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_53373(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53375 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_53375(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53376 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_53376(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53378 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_53378(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51768 = (function (ch,cs,meta51769){
this.ch = ch;
this.cs = cs;
this.meta51769 = meta51769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51770,meta51769__$1){
var self__ = this;
var _51770__$1 = this;
return (new cljs.core.async.t_cljs$core$async51768(self__.ch,self__.cs,meta51769__$1));
}));

(cljs.core.async.t_cljs$core$async51768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51770){
var self__ = this;
var _51770__$1 = this;
return self__.meta51769;
}));

(cljs.core.async.t_cljs$core$async51768.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51768.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51768.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async51768.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async51768.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async51768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51769","meta51769",-874894969,null)], null);
}));

(cljs.core.async.t_cljs$core$async51768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51768");

(cljs.core.async.t_cljs$core$async51768.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51768.
 */
cljs.core.async.__GT_t_cljs$core$async51768 = (function cljs$core$async$mult_$___GT_t_cljs$core$async51768(ch__$1,cs__$1,meta51769){
return (new cljs.core.async.t_cljs$core$async51768(ch__$1,cs__$1,meta51769));
});

}

return (new cljs.core.async.t_cljs$core$async51768(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__50948__auto___53386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_51903){
var state_val_51904 = (state_51903[(1)]);
if((state_val_51904 === (7))){
var inst_51899 = (state_51903[(2)]);
var state_51903__$1 = state_51903;
var statearr_51905_53391 = state_51903__$1;
(statearr_51905_53391[(2)] = inst_51899);

(statearr_51905_53391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (20))){
var inst_51804 = (state_51903[(7)]);
var inst_51816 = cljs.core.first(inst_51804);
var inst_51817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51816,(0),null);
var inst_51818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51816,(1),null);
var state_51903__$1 = (function (){var statearr_51906 = state_51903;
(statearr_51906[(8)] = inst_51817);

return statearr_51906;
})();
if(cljs.core.truth_(inst_51818)){
var statearr_51907_53395 = state_51903__$1;
(statearr_51907_53395[(1)] = (22));

} else {
var statearr_51908_53397 = state_51903__$1;
(statearr_51908_53397[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (27))){
var inst_51853 = (state_51903[(9)]);
var inst_51773 = (state_51903[(10)]);
var inst_51848 = (state_51903[(11)]);
var inst_51846 = (state_51903[(12)]);
var inst_51853__$1 = cljs.core._nth(inst_51846,inst_51848);
var inst_51854 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51853__$1,inst_51773,done);
var state_51903__$1 = (function (){var statearr_51909 = state_51903;
(statearr_51909[(9)] = inst_51853__$1);

return statearr_51909;
})();
if(cljs.core.truth_(inst_51854)){
var statearr_51910_53404 = state_51903__$1;
(statearr_51910_53404[(1)] = (30));

} else {
var statearr_51912_53405 = state_51903__$1;
(statearr_51912_53405[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (1))){
var state_51903__$1 = state_51903;
var statearr_51913_53406 = state_51903__$1;
(statearr_51913_53406[(2)] = null);

(statearr_51913_53406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (24))){
var inst_51804 = (state_51903[(7)]);
var inst_51823 = (state_51903[(2)]);
var inst_51824 = cljs.core.next(inst_51804);
var inst_51782 = inst_51824;
var inst_51783 = null;
var inst_51784 = (0);
var inst_51785 = (0);
var state_51903__$1 = (function (){var statearr_51914 = state_51903;
(statearr_51914[(13)] = inst_51823);

(statearr_51914[(14)] = inst_51783);

(statearr_51914[(15)] = inst_51782);

(statearr_51914[(16)] = inst_51785);

(statearr_51914[(17)] = inst_51784);

return statearr_51914;
})();
var statearr_51915_53410 = state_51903__$1;
(statearr_51915_53410[(2)] = null);

(statearr_51915_53410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (39))){
var state_51903__$1 = state_51903;
var statearr_51919_53412 = state_51903__$1;
(statearr_51919_53412[(2)] = null);

(statearr_51919_53412[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (4))){
var inst_51773 = (state_51903[(10)]);
var inst_51773__$1 = (state_51903[(2)]);
var inst_51774 = (inst_51773__$1 == null);
var state_51903__$1 = (function (){var statearr_51920 = state_51903;
(statearr_51920[(10)] = inst_51773__$1);

return statearr_51920;
})();
if(cljs.core.truth_(inst_51774)){
var statearr_51921_53417 = state_51903__$1;
(statearr_51921_53417[(1)] = (5));

} else {
var statearr_51922_53418 = state_51903__$1;
(statearr_51922_53418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (15))){
var inst_51783 = (state_51903[(14)]);
var inst_51782 = (state_51903[(15)]);
var inst_51785 = (state_51903[(16)]);
var inst_51784 = (state_51903[(17)]);
var inst_51800 = (state_51903[(2)]);
var inst_51801 = (inst_51785 + (1));
var tmp51916 = inst_51783;
var tmp51917 = inst_51782;
var tmp51918 = inst_51784;
var inst_51782__$1 = tmp51917;
var inst_51783__$1 = tmp51916;
var inst_51784__$1 = tmp51918;
var inst_51785__$1 = inst_51801;
var state_51903__$1 = (function (){var statearr_51923 = state_51903;
(statearr_51923[(14)] = inst_51783__$1);

(statearr_51923[(15)] = inst_51782__$1);

(statearr_51923[(18)] = inst_51800);

(statearr_51923[(16)] = inst_51785__$1);

(statearr_51923[(17)] = inst_51784__$1);

return statearr_51923;
})();
var statearr_51924_53419 = state_51903__$1;
(statearr_51924_53419[(2)] = null);

(statearr_51924_53419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (21))){
var inst_51827 = (state_51903[(2)]);
var state_51903__$1 = state_51903;
var statearr_51928_53421 = state_51903__$1;
(statearr_51928_53421[(2)] = inst_51827);

(statearr_51928_53421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (31))){
var inst_51853 = (state_51903[(9)]);
var inst_51857 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51853);
var state_51903__$1 = state_51903;
var statearr_51929_53424 = state_51903__$1;
(statearr_51929_53424[(2)] = inst_51857);

(statearr_51929_53424[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (32))){
var inst_51847 = (state_51903[(19)]);
var inst_51845 = (state_51903[(20)]);
var inst_51848 = (state_51903[(11)]);
var inst_51846 = (state_51903[(12)]);
var inst_51859 = (state_51903[(2)]);
var inst_51860 = (inst_51848 + (1));
var tmp51925 = inst_51847;
var tmp51926 = inst_51845;
var tmp51927 = inst_51846;
var inst_51845__$1 = tmp51926;
var inst_51846__$1 = tmp51927;
var inst_51847__$1 = tmp51925;
var inst_51848__$1 = inst_51860;
var state_51903__$1 = (function (){var statearr_51930 = state_51903;
(statearr_51930[(19)] = inst_51847__$1);

(statearr_51930[(21)] = inst_51859);

(statearr_51930[(20)] = inst_51845__$1);

(statearr_51930[(11)] = inst_51848__$1);

(statearr_51930[(12)] = inst_51846__$1);

return statearr_51930;
})();
var statearr_51931_53425 = state_51903__$1;
(statearr_51931_53425[(2)] = null);

(statearr_51931_53425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (40))){
var inst_51872 = (state_51903[(22)]);
var inst_51876 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51872);
var state_51903__$1 = state_51903;
var statearr_51936_53427 = state_51903__$1;
(statearr_51936_53427[(2)] = inst_51876);

(statearr_51936_53427[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (33))){
var inst_51863 = (state_51903[(23)]);
var inst_51865 = cljs.core.chunked_seq_QMARK_(inst_51863);
var state_51903__$1 = state_51903;
if(inst_51865){
var statearr_51943_53428 = state_51903__$1;
(statearr_51943_53428[(1)] = (36));

} else {
var statearr_51944_53429 = state_51903__$1;
(statearr_51944_53429[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (13))){
var inst_51794 = (state_51903[(24)]);
var inst_51797 = cljs.core.async.close_BANG_(inst_51794);
var state_51903__$1 = state_51903;
var statearr_51952_53430 = state_51903__$1;
(statearr_51952_53430[(2)] = inst_51797);

(statearr_51952_53430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (22))){
var inst_51817 = (state_51903[(8)]);
var inst_51820 = cljs.core.async.close_BANG_(inst_51817);
var state_51903__$1 = state_51903;
var statearr_51959_53431 = state_51903__$1;
(statearr_51959_53431[(2)] = inst_51820);

(statearr_51959_53431[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (36))){
var inst_51863 = (state_51903[(23)]);
var inst_51867 = cljs.core.chunk_first(inst_51863);
var inst_51868 = cljs.core.chunk_rest(inst_51863);
var inst_51869 = cljs.core.count(inst_51867);
var inst_51845 = inst_51868;
var inst_51846 = inst_51867;
var inst_51847 = inst_51869;
var inst_51848 = (0);
var state_51903__$1 = (function (){var statearr_51960 = state_51903;
(statearr_51960[(19)] = inst_51847);

(statearr_51960[(20)] = inst_51845);

(statearr_51960[(11)] = inst_51848);

(statearr_51960[(12)] = inst_51846);

return statearr_51960;
})();
var statearr_51961_53433 = state_51903__$1;
(statearr_51961_53433[(2)] = null);

(statearr_51961_53433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (41))){
var inst_51863 = (state_51903[(23)]);
var inst_51878 = (state_51903[(2)]);
var inst_51879 = cljs.core.next(inst_51863);
var inst_51845 = inst_51879;
var inst_51846 = null;
var inst_51847 = (0);
var inst_51848 = (0);
var state_51903__$1 = (function (){var statearr_51962 = state_51903;
(statearr_51962[(19)] = inst_51847);

(statearr_51962[(20)] = inst_51845);

(statearr_51962[(25)] = inst_51878);

(statearr_51962[(11)] = inst_51848);

(statearr_51962[(12)] = inst_51846);

return statearr_51962;
})();
var statearr_51963_53438 = state_51903__$1;
(statearr_51963_53438[(2)] = null);

(statearr_51963_53438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (43))){
var state_51903__$1 = state_51903;
var statearr_51964_53439 = state_51903__$1;
(statearr_51964_53439[(2)] = null);

(statearr_51964_53439[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (29))){
var inst_51887 = (state_51903[(2)]);
var state_51903__$1 = state_51903;
var statearr_51965_53440 = state_51903__$1;
(statearr_51965_53440[(2)] = inst_51887);

(statearr_51965_53440[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (44))){
var inst_51896 = (state_51903[(2)]);
var state_51903__$1 = (function (){var statearr_51966 = state_51903;
(statearr_51966[(26)] = inst_51896);

return statearr_51966;
})();
var statearr_51967_53442 = state_51903__$1;
(statearr_51967_53442[(2)] = null);

(statearr_51967_53442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (6))){
var inst_51837 = (state_51903[(27)]);
var inst_51836 = cljs.core.deref(cs);
var inst_51837__$1 = cljs.core.keys(inst_51836);
var inst_51838 = cljs.core.count(inst_51837__$1);
var inst_51839 = cljs.core.reset_BANG_(dctr,inst_51838);
var inst_51844 = cljs.core.seq(inst_51837__$1);
var inst_51845 = inst_51844;
var inst_51846 = null;
var inst_51847 = (0);
var inst_51848 = (0);
var state_51903__$1 = (function (){var statearr_51969 = state_51903;
(statearr_51969[(19)] = inst_51847);

(statearr_51969[(20)] = inst_51845);

(statearr_51969[(27)] = inst_51837__$1);

(statearr_51969[(11)] = inst_51848);

(statearr_51969[(12)] = inst_51846);

(statearr_51969[(28)] = inst_51839);

return statearr_51969;
})();
var statearr_51970_53448 = state_51903__$1;
(statearr_51970_53448[(2)] = null);

(statearr_51970_53448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (28))){
var inst_51863 = (state_51903[(23)]);
var inst_51845 = (state_51903[(20)]);
var inst_51863__$1 = cljs.core.seq(inst_51845);
var state_51903__$1 = (function (){var statearr_51971 = state_51903;
(statearr_51971[(23)] = inst_51863__$1);

return statearr_51971;
})();
if(inst_51863__$1){
var statearr_51974_53449 = state_51903__$1;
(statearr_51974_53449[(1)] = (33));

} else {
var statearr_51975_53450 = state_51903__$1;
(statearr_51975_53450[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (25))){
var inst_51847 = (state_51903[(19)]);
var inst_51848 = (state_51903[(11)]);
var inst_51850 = (inst_51848 < inst_51847);
var inst_51851 = inst_51850;
var state_51903__$1 = state_51903;
if(cljs.core.truth_(inst_51851)){
var statearr_51976_53452 = state_51903__$1;
(statearr_51976_53452[(1)] = (27));

} else {
var statearr_51977_53453 = state_51903__$1;
(statearr_51977_53453[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (34))){
var state_51903__$1 = state_51903;
var statearr_51978_53455 = state_51903__$1;
(statearr_51978_53455[(2)] = null);

(statearr_51978_53455[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (17))){
var state_51903__$1 = state_51903;
var statearr_51979_53456 = state_51903__$1;
(statearr_51979_53456[(2)] = null);

(statearr_51979_53456[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (3))){
var inst_51901 = (state_51903[(2)]);
var state_51903__$1 = state_51903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51903__$1,inst_51901);
} else {
if((state_val_51904 === (12))){
var inst_51832 = (state_51903[(2)]);
var state_51903__$1 = state_51903;
var statearr_51980_53461 = state_51903__$1;
(statearr_51980_53461[(2)] = inst_51832);

(statearr_51980_53461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (2))){
var state_51903__$1 = state_51903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51903__$1,(4),ch);
} else {
if((state_val_51904 === (23))){
var state_51903__$1 = state_51903;
var statearr_51981_53462 = state_51903__$1;
(statearr_51981_53462[(2)] = null);

(statearr_51981_53462[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (35))){
var inst_51885 = (state_51903[(2)]);
var state_51903__$1 = state_51903;
var statearr_51982_53463 = state_51903__$1;
(statearr_51982_53463[(2)] = inst_51885);

(statearr_51982_53463[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (19))){
var inst_51804 = (state_51903[(7)]);
var inst_51808 = cljs.core.chunk_first(inst_51804);
var inst_51809 = cljs.core.chunk_rest(inst_51804);
var inst_51810 = cljs.core.count(inst_51808);
var inst_51782 = inst_51809;
var inst_51783 = inst_51808;
var inst_51784 = inst_51810;
var inst_51785 = (0);
var state_51903__$1 = (function (){var statearr_51993 = state_51903;
(statearr_51993[(14)] = inst_51783);

(statearr_51993[(15)] = inst_51782);

(statearr_51993[(16)] = inst_51785);

(statearr_51993[(17)] = inst_51784);

return statearr_51993;
})();
var statearr_52000_53465 = state_51903__$1;
(statearr_52000_53465[(2)] = null);

(statearr_52000_53465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (11))){
var inst_51782 = (state_51903[(15)]);
var inst_51804 = (state_51903[(7)]);
var inst_51804__$1 = cljs.core.seq(inst_51782);
var state_51903__$1 = (function (){var statearr_52006 = state_51903;
(statearr_52006[(7)] = inst_51804__$1);

return statearr_52006;
})();
if(inst_51804__$1){
var statearr_52007_53466 = state_51903__$1;
(statearr_52007_53466[(1)] = (16));

} else {
var statearr_52008_53467 = state_51903__$1;
(statearr_52008_53467[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (9))){
var inst_51834 = (state_51903[(2)]);
var state_51903__$1 = state_51903;
var statearr_52009_53468 = state_51903__$1;
(statearr_52009_53468[(2)] = inst_51834);

(statearr_52009_53468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (5))){
var inst_51780 = cljs.core.deref(cs);
var inst_51781 = cljs.core.seq(inst_51780);
var inst_51782 = inst_51781;
var inst_51783 = null;
var inst_51784 = (0);
var inst_51785 = (0);
var state_51903__$1 = (function (){var statearr_52010 = state_51903;
(statearr_52010[(14)] = inst_51783);

(statearr_52010[(15)] = inst_51782);

(statearr_52010[(16)] = inst_51785);

(statearr_52010[(17)] = inst_51784);

return statearr_52010;
})();
var statearr_52011_53470 = state_51903__$1;
(statearr_52011_53470[(2)] = null);

(statearr_52011_53470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (14))){
var state_51903__$1 = state_51903;
var statearr_52012_53471 = state_51903__$1;
(statearr_52012_53471[(2)] = null);

(statearr_52012_53471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (45))){
var inst_51893 = (state_51903[(2)]);
var state_51903__$1 = state_51903;
var statearr_52017_53472 = state_51903__$1;
(statearr_52017_53472[(2)] = inst_51893);

(statearr_52017_53472[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (26))){
var inst_51837 = (state_51903[(27)]);
var inst_51889 = (state_51903[(2)]);
var inst_51890 = cljs.core.seq(inst_51837);
var state_51903__$1 = (function (){var statearr_52025 = state_51903;
(statearr_52025[(29)] = inst_51889);

return statearr_52025;
})();
if(inst_51890){
var statearr_52031_53477 = state_51903__$1;
(statearr_52031_53477[(1)] = (42));

} else {
var statearr_52032_53478 = state_51903__$1;
(statearr_52032_53478[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (16))){
var inst_51804 = (state_51903[(7)]);
var inst_51806 = cljs.core.chunked_seq_QMARK_(inst_51804);
var state_51903__$1 = state_51903;
if(inst_51806){
var statearr_52038_53479 = state_51903__$1;
(statearr_52038_53479[(1)] = (19));

} else {
var statearr_52039_53480 = state_51903__$1;
(statearr_52039_53480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (38))){
var inst_51882 = (state_51903[(2)]);
var state_51903__$1 = state_51903;
var statearr_52040_53481 = state_51903__$1;
(statearr_52040_53481[(2)] = inst_51882);

(statearr_52040_53481[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (30))){
var state_51903__$1 = state_51903;
var statearr_52041_53482 = state_51903__$1;
(statearr_52041_53482[(2)] = null);

(statearr_52041_53482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (10))){
var inst_51783 = (state_51903[(14)]);
var inst_51785 = (state_51903[(16)]);
var inst_51793 = cljs.core._nth(inst_51783,inst_51785);
var inst_51794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51793,(0),null);
var inst_51795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51793,(1),null);
var state_51903__$1 = (function (){var statearr_52047 = state_51903;
(statearr_52047[(24)] = inst_51794);

return statearr_52047;
})();
if(cljs.core.truth_(inst_51795)){
var statearr_52052_53484 = state_51903__$1;
(statearr_52052_53484[(1)] = (13));

} else {
var statearr_52053_53485 = state_51903__$1;
(statearr_52053_53485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (18))){
var inst_51830 = (state_51903[(2)]);
var state_51903__$1 = state_51903;
var statearr_52061_53486 = state_51903__$1;
(statearr_52061_53486[(2)] = inst_51830);

(statearr_52061_53486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (42))){
var state_51903__$1 = state_51903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51903__$1,(45),dchan);
} else {
if((state_val_51904 === (37))){
var inst_51863 = (state_51903[(23)]);
var inst_51773 = (state_51903[(10)]);
var inst_51872 = (state_51903[(22)]);
var inst_51872__$1 = cljs.core.first(inst_51863);
var inst_51873 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51872__$1,inst_51773,done);
var state_51903__$1 = (function (){var statearr_52067 = state_51903;
(statearr_52067[(22)] = inst_51872__$1);

return statearr_52067;
})();
if(cljs.core.truth_(inst_51873)){
var statearr_52068_53488 = state_51903__$1;
(statearr_52068_53488[(1)] = (39));

} else {
var statearr_52069_53489 = state_51903__$1;
(statearr_52069_53489[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51904 === (8))){
var inst_51785 = (state_51903[(16)]);
var inst_51784 = (state_51903[(17)]);
var inst_51787 = (inst_51785 < inst_51784);
var inst_51788 = inst_51787;
var state_51903__$1 = state_51903;
if(cljs.core.truth_(inst_51788)){
var statearr_52070_53490 = state_51903__$1;
(statearr_52070_53490[(1)] = (10));

} else {
var statearr_52071_53491 = state_51903__$1;
(statearr_52071_53491[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__50825__auto__ = null;
var cljs$core$async$mult_$_state_machine__50825__auto____0 = (function (){
var statearr_52072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52072[(0)] = cljs$core$async$mult_$_state_machine__50825__auto__);

(statearr_52072[(1)] = (1));

return statearr_52072;
});
var cljs$core$async$mult_$_state_machine__50825__auto____1 = (function (state_51903){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_51903);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e52073){var ex__50828__auto__ = e52073;
var statearr_52074_53493 = state_51903;
(statearr_52074_53493[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_51903[(4)]))){
var statearr_52075_53494 = state_51903;
(statearr_52075_53494[(1)] = cljs.core.first((state_51903[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53499 = state_51903;
state_51903 = G__53499;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50825__auto__ = function(state_51903){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50825__auto____1.call(this,state_51903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50825__auto____0;
cljs$core$async$mult_$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50825__auto____1;
return cljs$core$async$mult_$_state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_52076 = f__50949__auto__();
(statearr_52076[(6)] = c__50948__auto___53386);

return statearr_52076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__52079 = arguments.length;
switch (G__52079) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_53504 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_53504(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53510 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_53510(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53511 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53511(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53513 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_53513(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53514 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53514(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53516 = arguments.length;
var i__4737__auto___53517 = (0);
while(true){
if((i__4737__auto___53517 < len__4736__auto___53516)){
args__4742__auto__.push((arguments[i__4737__auto___53517]));

var G__53518 = (i__4737__auto___53517 + (1));
i__4737__auto___53517 = G__53518;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52097){
var map__52098 = p__52097;
var map__52098__$1 = (((((!((map__52098 == null))))?(((((map__52098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52098):map__52098);
var opts = map__52098__$1;
var statearr_52100_53522 = state;
(statearr_52100_53522[(1)] = cont_block);


var temp__5754__auto__ = cljs.core.async.do_alts((function (val){
var statearr_52101_53524 = state;
(statearr_52101_53524[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5754__auto__)){
var cb = temp__5754__auto__;
var statearr_52102_53526 = state;
(statearr_52102_53526[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52093){
var G__52094 = cljs.core.first(seq52093);
var seq52093__$1 = cljs.core.next(seq52093);
var G__52095 = cljs.core.first(seq52093__$1);
var seq52093__$2 = cljs.core.next(seq52093__$1);
var G__52096 = cljs.core.first(seq52093__$2);
var seq52093__$3 = cljs.core.next(seq52093__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52094,G__52095,G__52096,seq52093__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52103 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52104){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52104 = meta52104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52105,meta52104__$1){
var self__ = this;
var _52105__$1 = this;
return (new cljs.core.async.t_cljs$core$async52103(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52104__$1));
}));

(cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52105){
var self__ = this;
var _52105__$1 = this;
return self__.meta52104;
}));

(cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52104","meta52104",2097478741,null)], null);
}));

(cljs.core.async.t_cljs$core$async52103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52103");

(cljs.core.async.t_cljs$core$async52103.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52103.
 */
cljs.core.async.__GT_t_cljs$core$async52103 = (function cljs$core$async$mix_$___GT_t_cljs$core$async52103(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52104){
return (new cljs.core.async.t_cljs$core$async52103(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52104));
});

}

return (new cljs.core.async.t_cljs$core$async52103(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50948__auto___53535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_52207){
var state_val_52208 = (state_52207[(1)]);
if((state_val_52208 === (7))){
var inst_52122 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
var statearr_52209_53538 = state_52207__$1;
(statearr_52209_53538[(2)] = inst_52122);

(statearr_52209_53538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (20))){
var inst_52134 = (state_52207[(7)]);
var state_52207__$1 = state_52207;
var statearr_52210_53542 = state_52207__$1;
(statearr_52210_53542[(2)] = inst_52134);

(statearr_52210_53542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (27))){
var state_52207__$1 = state_52207;
var statearr_52211_53543 = state_52207__$1;
(statearr_52211_53543[(2)] = null);

(statearr_52211_53543[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (1))){
var inst_52109 = (state_52207[(8)]);
var inst_52109__$1 = calc_state();
var inst_52111 = (inst_52109__$1 == null);
var inst_52112 = cljs.core.not(inst_52111);
var state_52207__$1 = (function (){var statearr_52212 = state_52207;
(statearr_52212[(8)] = inst_52109__$1);

return statearr_52212;
})();
if(inst_52112){
var statearr_52213_53546 = state_52207__$1;
(statearr_52213_53546[(1)] = (2));

} else {
var statearr_52214_53547 = state_52207__$1;
(statearr_52214_53547[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (24))){
var inst_52181 = (state_52207[(9)]);
var inst_52158 = (state_52207[(10)]);
var inst_52167 = (state_52207[(11)]);
var inst_52181__$1 = (inst_52158.cljs$core$IFn$_invoke$arity$1 ? inst_52158.cljs$core$IFn$_invoke$arity$1(inst_52167) : inst_52158.call(null,inst_52167));
var state_52207__$1 = (function (){var statearr_52215 = state_52207;
(statearr_52215[(9)] = inst_52181__$1);

return statearr_52215;
})();
if(cljs.core.truth_(inst_52181__$1)){
var statearr_52216_53548 = state_52207__$1;
(statearr_52216_53548[(1)] = (29));

} else {
var statearr_52217_53549 = state_52207__$1;
(statearr_52217_53549[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (4))){
var inst_52125 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
if(cljs.core.truth_(inst_52125)){
var statearr_52218_53550 = state_52207__$1;
(statearr_52218_53550[(1)] = (8));

} else {
var statearr_52219_53551 = state_52207__$1;
(statearr_52219_53551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (15))){
var inst_52152 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
if(cljs.core.truth_(inst_52152)){
var statearr_52220_53552 = state_52207__$1;
(statearr_52220_53552[(1)] = (19));

} else {
var statearr_52221_53553 = state_52207__$1;
(statearr_52221_53553[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (21))){
var inst_52157 = (state_52207[(12)]);
var inst_52157__$1 = (state_52207[(2)]);
var inst_52158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52157__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52157__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52157__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52207__$1 = (function (){var statearr_52222 = state_52207;
(statearr_52222[(12)] = inst_52157__$1);

(statearr_52222[(10)] = inst_52158);

(statearr_52222[(13)] = inst_52159);

return statearr_52222;
})();
return cljs.core.async.ioc_alts_BANG_(state_52207__$1,(22),inst_52160);
} else {
if((state_val_52208 === (31))){
var inst_52189 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
if(cljs.core.truth_(inst_52189)){
var statearr_52223_53556 = state_52207__$1;
(statearr_52223_53556[(1)] = (32));

} else {
var statearr_52224_53558 = state_52207__$1;
(statearr_52224_53558[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (32))){
var inst_52166 = (state_52207[(14)]);
var state_52207__$1 = state_52207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52207__$1,(35),out,inst_52166);
} else {
if((state_val_52208 === (33))){
var inst_52157 = (state_52207[(12)]);
var inst_52134 = inst_52157;
var state_52207__$1 = (function (){var statearr_52225 = state_52207;
(statearr_52225[(7)] = inst_52134);

return statearr_52225;
})();
var statearr_52226_53559 = state_52207__$1;
(statearr_52226_53559[(2)] = null);

(statearr_52226_53559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (13))){
var inst_52134 = (state_52207[(7)]);
var inst_52141 = inst_52134.cljs$lang$protocol_mask$partition0$;
var inst_52142 = (inst_52141 & (64));
var inst_52143 = inst_52134.cljs$core$ISeq$;
var inst_52144 = (cljs.core.PROTOCOL_SENTINEL === inst_52143);
var inst_52145 = ((inst_52142) || (inst_52144));
var state_52207__$1 = state_52207;
if(cljs.core.truth_(inst_52145)){
var statearr_52227_53560 = state_52207__$1;
(statearr_52227_53560[(1)] = (16));

} else {
var statearr_52228_53561 = state_52207__$1;
(statearr_52228_53561[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (22))){
var inst_52166 = (state_52207[(14)]);
var inst_52167 = (state_52207[(11)]);
var inst_52165 = (state_52207[(2)]);
var inst_52166__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52165,(0),null);
var inst_52167__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52165,(1),null);
var inst_52168 = (inst_52166__$1 == null);
var inst_52169 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52167__$1,change);
var inst_52170 = ((inst_52168) || (inst_52169));
var state_52207__$1 = (function (){var statearr_52229 = state_52207;
(statearr_52229[(14)] = inst_52166__$1);

(statearr_52229[(11)] = inst_52167__$1);

return statearr_52229;
})();
if(cljs.core.truth_(inst_52170)){
var statearr_52230_53568 = state_52207__$1;
(statearr_52230_53568[(1)] = (23));

} else {
var statearr_52231_53569 = state_52207__$1;
(statearr_52231_53569[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (36))){
var inst_52157 = (state_52207[(12)]);
var inst_52134 = inst_52157;
var state_52207__$1 = (function (){var statearr_52232 = state_52207;
(statearr_52232[(7)] = inst_52134);

return statearr_52232;
})();
var statearr_52233_53570 = state_52207__$1;
(statearr_52233_53570[(2)] = null);

(statearr_52233_53570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (29))){
var inst_52181 = (state_52207[(9)]);
var state_52207__$1 = state_52207;
var statearr_52234_53571 = state_52207__$1;
(statearr_52234_53571[(2)] = inst_52181);

(statearr_52234_53571[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (6))){
var state_52207__$1 = state_52207;
var statearr_52235_53572 = state_52207__$1;
(statearr_52235_53572[(2)] = false);

(statearr_52235_53572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (28))){
var inst_52177 = (state_52207[(2)]);
var inst_52178 = calc_state();
var inst_52134 = inst_52178;
var state_52207__$1 = (function (){var statearr_52236 = state_52207;
(statearr_52236[(15)] = inst_52177);

(statearr_52236[(7)] = inst_52134);

return statearr_52236;
})();
var statearr_52237_53573 = state_52207__$1;
(statearr_52237_53573[(2)] = null);

(statearr_52237_53573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (25))){
var inst_52203 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
var statearr_52238_53574 = state_52207__$1;
(statearr_52238_53574[(2)] = inst_52203);

(statearr_52238_53574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (34))){
var inst_52201 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
var statearr_52239_53576 = state_52207__$1;
(statearr_52239_53576[(2)] = inst_52201);

(statearr_52239_53576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (17))){
var state_52207__$1 = state_52207;
var statearr_52240_53578 = state_52207__$1;
(statearr_52240_53578[(2)] = false);

(statearr_52240_53578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (3))){
var state_52207__$1 = state_52207;
var statearr_52241_53581 = state_52207__$1;
(statearr_52241_53581[(2)] = false);

(statearr_52241_53581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (12))){
var inst_52205 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52207__$1,inst_52205);
} else {
if((state_val_52208 === (2))){
var inst_52109 = (state_52207[(8)]);
var inst_52114 = inst_52109.cljs$lang$protocol_mask$partition0$;
var inst_52115 = (inst_52114 & (64));
var inst_52116 = inst_52109.cljs$core$ISeq$;
var inst_52117 = (cljs.core.PROTOCOL_SENTINEL === inst_52116);
var inst_52118 = ((inst_52115) || (inst_52117));
var state_52207__$1 = state_52207;
if(cljs.core.truth_(inst_52118)){
var statearr_52242_53590 = state_52207__$1;
(statearr_52242_53590[(1)] = (5));

} else {
var statearr_52243_53591 = state_52207__$1;
(statearr_52243_53591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (23))){
var inst_52166 = (state_52207[(14)]);
var inst_52172 = (inst_52166 == null);
var state_52207__$1 = state_52207;
if(cljs.core.truth_(inst_52172)){
var statearr_52244_53597 = state_52207__$1;
(statearr_52244_53597[(1)] = (26));

} else {
var statearr_52245_53599 = state_52207__$1;
(statearr_52245_53599[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (35))){
var inst_52192 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
if(cljs.core.truth_(inst_52192)){
var statearr_52246_53600 = state_52207__$1;
(statearr_52246_53600[(1)] = (36));

} else {
var statearr_52247_53601 = state_52207__$1;
(statearr_52247_53601[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (19))){
var inst_52134 = (state_52207[(7)]);
var inst_52154 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52134);
var state_52207__$1 = state_52207;
var statearr_52248_53603 = state_52207__$1;
(statearr_52248_53603[(2)] = inst_52154);

(statearr_52248_53603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (11))){
var inst_52134 = (state_52207[(7)]);
var inst_52138 = (inst_52134 == null);
var inst_52139 = cljs.core.not(inst_52138);
var state_52207__$1 = state_52207;
if(inst_52139){
var statearr_52249_53608 = state_52207__$1;
(statearr_52249_53608[(1)] = (13));

} else {
var statearr_52250_53610 = state_52207__$1;
(statearr_52250_53610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (9))){
var inst_52109 = (state_52207[(8)]);
var state_52207__$1 = state_52207;
var statearr_52251_53615 = state_52207__$1;
(statearr_52251_53615[(2)] = inst_52109);

(statearr_52251_53615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (5))){
var state_52207__$1 = state_52207;
var statearr_52252_53616 = state_52207__$1;
(statearr_52252_53616[(2)] = true);

(statearr_52252_53616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (14))){
var state_52207__$1 = state_52207;
var statearr_52253_53618 = state_52207__$1;
(statearr_52253_53618[(2)] = false);

(statearr_52253_53618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (26))){
var inst_52167 = (state_52207[(11)]);
var inst_52174 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52167);
var state_52207__$1 = state_52207;
var statearr_52254_53619 = state_52207__$1;
(statearr_52254_53619[(2)] = inst_52174);

(statearr_52254_53619[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (16))){
var state_52207__$1 = state_52207;
var statearr_52255_53626 = state_52207__$1;
(statearr_52255_53626[(2)] = true);

(statearr_52255_53626[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (38))){
var inst_52197 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
var statearr_52256_53627 = state_52207__$1;
(statearr_52256_53627[(2)] = inst_52197);

(statearr_52256_53627[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (30))){
var inst_52158 = (state_52207[(10)]);
var inst_52159 = (state_52207[(13)]);
var inst_52167 = (state_52207[(11)]);
var inst_52184 = cljs.core.empty_QMARK_(inst_52158);
var inst_52185 = (inst_52159.cljs$core$IFn$_invoke$arity$1 ? inst_52159.cljs$core$IFn$_invoke$arity$1(inst_52167) : inst_52159.call(null,inst_52167));
var inst_52186 = cljs.core.not(inst_52185);
var inst_52187 = ((inst_52184) && (inst_52186));
var state_52207__$1 = state_52207;
var statearr_52257_53629 = state_52207__$1;
(statearr_52257_53629[(2)] = inst_52187);

(statearr_52257_53629[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (10))){
var inst_52109 = (state_52207[(8)]);
var inst_52130 = (state_52207[(2)]);
var inst_52131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52130,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52130,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52130,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52134 = inst_52109;
var state_52207__$1 = (function (){var statearr_52258 = state_52207;
(statearr_52258[(16)] = inst_52133);

(statearr_52258[(17)] = inst_52131);

(statearr_52258[(7)] = inst_52134);

(statearr_52258[(18)] = inst_52132);

return statearr_52258;
})();
var statearr_52259_53637 = state_52207__$1;
(statearr_52259_53637[(2)] = null);

(statearr_52259_53637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (18))){
var inst_52149 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
var statearr_52260_53645 = state_52207__$1;
(statearr_52260_53645[(2)] = inst_52149);

(statearr_52260_53645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (37))){
var state_52207__$1 = state_52207;
var statearr_52261_53646 = state_52207__$1;
(statearr_52261_53646[(2)] = null);

(statearr_52261_53646[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (8))){
var inst_52109 = (state_52207[(8)]);
var inst_52127 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52109);
var state_52207__$1 = state_52207;
var statearr_52262_53655 = state_52207__$1;
(statearr_52262_53655[(2)] = inst_52127);

(statearr_52262_53655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__50825__auto__ = null;
var cljs$core$async$mix_$_state_machine__50825__auto____0 = (function (){
var statearr_52263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52263[(0)] = cljs$core$async$mix_$_state_machine__50825__auto__);

(statearr_52263[(1)] = (1));

return statearr_52263;
});
var cljs$core$async$mix_$_state_machine__50825__auto____1 = (function (state_52207){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_52207);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e52264){var ex__50828__auto__ = e52264;
var statearr_52265_53657 = state_52207;
(statearr_52265_53657[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_52207[(4)]))){
var statearr_52266_53658 = state_52207;
(statearr_52266_53658[(1)] = cljs.core.first((state_52207[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53660 = state_52207;
state_52207 = G__53660;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50825__auto__ = function(state_52207){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50825__auto____1.call(this,state_52207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50825__auto____0;
cljs$core$async$mix_$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50825__auto____1;
return cljs$core$async$mix_$_state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_52267 = f__50949__auto__();
(statearr_52267[(6)] = c__50948__auto___53535);

return statearr_52267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_53665 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_53665(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53675 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_53675(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53680 = (function() {
var G__53681 = null;
var G__53681__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__53681__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__53681 = function(p,v){
switch(arguments.length){
case 1:
return G__53681__1.call(this,p);
case 2:
return G__53681__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53681.cljs$core$IFn$_invoke$arity$1 = G__53681__1;
G__53681.cljs$core$IFn$_invoke$arity$2 = G__53681__2;
return G__53681;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52269 = arguments.length;
switch (G__52269) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53680(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53680(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__52275 = arguments.length;
switch (G__52275) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__52273_SHARP_){
if(cljs.core.truth_((p1__52273_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52273_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52273_SHARP_.call(null,topic)))){
return p1__52273_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52273_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52279 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52280){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52280 = meta52280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52281,meta52280__$1){
var self__ = this;
var _52281__$1 = this;
return (new cljs.core.async.t_cljs$core$async52279(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52280__$1));
}));

(cljs.core.async.t_cljs$core$async52279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52281){
var self__ = this;
var _52281__$1 = this;
return self__.meta52280;
}));

(cljs.core.async.t_cljs$core$async52279.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52279.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52279.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async52279.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5754__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5754__auto__)){
var m = temp__5754__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async52279.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async52279.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async52279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52280","meta52280",-1086178108,null)], null);
}));

(cljs.core.async.t_cljs$core$async52279.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52279");

(cljs.core.async.t_cljs$core$async52279.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52279");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52279.
 */
cljs.core.async.__GT_t_cljs$core$async52279 = (function cljs$core$async$__GT_t_cljs$core$async52279(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52280){
return (new cljs.core.async.t_cljs$core$async52279(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52280));
});

}

return (new cljs.core.async.t_cljs$core$async52279(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50948__auto___53714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_52356){
var state_val_52357 = (state_52356[(1)]);
if((state_val_52357 === (7))){
var inst_52352 = (state_52356[(2)]);
var state_52356__$1 = state_52356;
var statearr_52358_53717 = state_52356__$1;
(statearr_52358_53717[(2)] = inst_52352);

(statearr_52358_53717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (20))){
var state_52356__$1 = state_52356;
var statearr_52359_53718 = state_52356__$1;
(statearr_52359_53718[(2)] = null);

(statearr_52359_53718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (1))){
var state_52356__$1 = state_52356;
var statearr_52360_53719 = state_52356__$1;
(statearr_52360_53719[(2)] = null);

(statearr_52360_53719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (24))){
var inst_52335 = (state_52356[(7)]);
var inst_52344 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52335);
var state_52356__$1 = state_52356;
var statearr_52361_53723 = state_52356__$1;
(statearr_52361_53723[(2)] = inst_52344);

(statearr_52361_53723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (4))){
var inst_52287 = (state_52356[(8)]);
var inst_52287__$1 = (state_52356[(2)]);
var inst_52288 = (inst_52287__$1 == null);
var state_52356__$1 = (function (){var statearr_52362 = state_52356;
(statearr_52362[(8)] = inst_52287__$1);

return statearr_52362;
})();
if(cljs.core.truth_(inst_52288)){
var statearr_52363_53727 = state_52356__$1;
(statearr_52363_53727[(1)] = (5));

} else {
var statearr_52364_53728 = state_52356__$1;
(statearr_52364_53728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (15))){
var inst_52329 = (state_52356[(2)]);
var state_52356__$1 = state_52356;
var statearr_52365_53729 = state_52356__$1;
(statearr_52365_53729[(2)] = inst_52329);

(statearr_52365_53729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (21))){
var inst_52349 = (state_52356[(2)]);
var state_52356__$1 = (function (){var statearr_52366 = state_52356;
(statearr_52366[(9)] = inst_52349);

return statearr_52366;
})();
var statearr_52367_53731 = state_52356__$1;
(statearr_52367_53731[(2)] = null);

(statearr_52367_53731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (13))){
var inst_52311 = (state_52356[(10)]);
var inst_52313 = cljs.core.chunked_seq_QMARK_(inst_52311);
var state_52356__$1 = state_52356;
if(inst_52313){
var statearr_52368_53734 = state_52356__$1;
(statearr_52368_53734[(1)] = (16));

} else {
var statearr_52369_53736 = state_52356__$1;
(statearr_52369_53736[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (22))){
var inst_52341 = (state_52356[(2)]);
var state_52356__$1 = state_52356;
if(cljs.core.truth_(inst_52341)){
var statearr_52370_53738 = state_52356__$1;
(statearr_52370_53738[(1)] = (23));

} else {
var statearr_52371_53739 = state_52356__$1;
(statearr_52371_53739[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (6))){
var inst_52335 = (state_52356[(7)]);
var inst_52337 = (state_52356[(11)]);
var inst_52287 = (state_52356[(8)]);
var inst_52335__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52287) : topic_fn.call(null,inst_52287));
var inst_52336 = cljs.core.deref(mults);
var inst_52337__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52336,inst_52335__$1);
var state_52356__$1 = (function (){var statearr_52372 = state_52356;
(statearr_52372[(7)] = inst_52335__$1);

(statearr_52372[(11)] = inst_52337__$1);

return statearr_52372;
})();
if(cljs.core.truth_(inst_52337__$1)){
var statearr_52373_53744 = state_52356__$1;
(statearr_52373_53744[(1)] = (19));

} else {
var statearr_52374_53746 = state_52356__$1;
(statearr_52374_53746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (25))){
var inst_52346 = (state_52356[(2)]);
var state_52356__$1 = state_52356;
var statearr_52375_53747 = state_52356__$1;
(statearr_52375_53747[(2)] = inst_52346);

(statearr_52375_53747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (17))){
var inst_52311 = (state_52356[(10)]);
var inst_52320 = cljs.core.first(inst_52311);
var inst_52321 = cljs.core.async.muxch_STAR_(inst_52320);
var inst_52322 = cljs.core.async.close_BANG_(inst_52321);
var inst_52323 = cljs.core.next(inst_52311);
var inst_52297 = inst_52323;
var inst_52298 = null;
var inst_52299 = (0);
var inst_52300 = (0);
var state_52356__$1 = (function (){var statearr_52376 = state_52356;
(statearr_52376[(12)] = inst_52297);

(statearr_52376[(13)] = inst_52322);

(statearr_52376[(14)] = inst_52300);

(statearr_52376[(15)] = inst_52298);

(statearr_52376[(16)] = inst_52299);

return statearr_52376;
})();
var statearr_52377_53752 = state_52356__$1;
(statearr_52377_53752[(2)] = null);

(statearr_52377_53752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (3))){
var inst_52354 = (state_52356[(2)]);
var state_52356__$1 = state_52356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52356__$1,inst_52354);
} else {
if((state_val_52357 === (12))){
var inst_52331 = (state_52356[(2)]);
var state_52356__$1 = state_52356;
var statearr_52378_53759 = state_52356__$1;
(statearr_52378_53759[(2)] = inst_52331);

(statearr_52378_53759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (2))){
var state_52356__$1 = state_52356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52356__$1,(4),ch);
} else {
if((state_val_52357 === (23))){
var state_52356__$1 = state_52356;
var statearr_52379_53761 = state_52356__$1;
(statearr_52379_53761[(2)] = null);

(statearr_52379_53761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (19))){
var inst_52337 = (state_52356[(11)]);
var inst_52287 = (state_52356[(8)]);
var inst_52339 = cljs.core.async.muxch_STAR_(inst_52337);
var state_52356__$1 = state_52356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52356__$1,(22),inst_52339,inst_52287);
} else {
if((state_val_52357 === (11))){
var inst_52297 = (state_52356[(12)]);
var inst_52311 = (state_52356[(10)]);
var inst_52311__$1 = cljs.core.seq(inst_52297);
var state_52356__$1 = (function (){var statearr_52380 = state_52356;
(statearr_52380[(10)] = inst_52311__$1);

return statearr_52380;
})();
if(inst_52311__$1){
var statearr_52381_53769 = state_52356__$1;
(statearr_52381_53769[(1)] = (13));

} else {
var statearr_52382_53770 = state_52356__$1;
(statearr_52382_53770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (9))){
var inst_52333 = (state_52356[(2)]);
var state_52356__$1 = state_52356;
var statearr_52383_53773 = state_52356__$1;
(statearr_52383_53773[(2)] = inst_52333);

(statearr_52383_53773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (5))){
var inst_52294 = cljs.core.deref(mults);
var inst_52295 = cljs.core.vals(inst_52294);
var inst_52296 = cljs.core.seq(inst_52295);
var inst_52297 = inst_52296;
var inst_52298 = null;
var inst_52299 = (0);
var inst_52300 = (0);
var state_52356__$1 = (function (){var statearr_52384 = state_52356;
(statearr_52384[(12)] = inst_52297);

(statearr_52384[(14)] = inst_52300);

(statearr_52384[(15)] = inst_52298);

(statearr_52384[(16)] = inst_52299);

return statearr_52384;
})();
var statearr_52385_53778 = state_52356__$1;
(statearr_52385_53778[(2)] = null);

(statearr_52385_53778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (14))){
var state_52356__$1 = state_52356;
var statearr_52389_53779 = state_52356__$1;
(statearr_52389_53779[(2)] = null);

(statearr_52389_53779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (16))){
var inst_52311 = (state_52356[(10)]);
var inst_52315 = cljs.core.chunk_first(inst_52311);
var inst_52316 = cljs.core.chunk_rest(inst_52311);
var inst_52317 = cljs.core.count(inst_52315);
var inst_52297 = inst_52316;
var inst_52298 = inst_52315;
var inst_52299 = inst_52317;
var inst_52300 = (0);
var state_52356__$1 = (function (){var statearr_52390 = state_52356;
(statearr_52390[(12)] = inst_52297);

(statearr_52390[(14)] = inst_52300);

(statearr_52390[(15)] = inst_52298);

(statearr_52390[(16)] = inst_52299);

return statearr_52390;
})();
var statearr_52391_53783 = state_52356__$1;
(statearr_52391_53783[(2)] = null);

(statearr_52391_53783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (10))){
var inst_52297 = (state_52356[(12)]);
var inst_52300 = (state_52356[(14)]);
var inst_52298 = (state_52356[(15)]);
var inst_52299 = (state_52356[(16)]);
var inst_52305 = cljs.core._nth(inst_52298,inst_52300);
var inst_52306 = cljs.core.async.muxch_STAR_(inst_52305);
var inst_52307 = cljs.core.async.close_BANG_(inst_52306);
var inst_52308 = (inst_52300 + (1));
var tmp52386 = inst_52297;
var tmp52387 = inst_52298;
var tmp52388 = inst_52299;
var inst_52297__$1 = tmp52386;
var inst_52298__$1 = tmp52387;
var inst_52299__$1 = tmp52388;
var inst_52300__$1 = inst_52308;
var state_52356__$1 = (function (){var statearr_52392 = state_52356;
(statearr_52392[(12)] = inst_52297__$1);

(statearr_52392[(14)] = inst_52300__$1);

(statearr_52392[(17)] = inst_52307);

(statearr_52392[(15)] = inst_52298__$1);

(statearr_52392[(16)] = inst_52299__$1);

return statearr_52392;
})();
var statearr_52393_53789 = state_52356__$1;
(statearr_52393_53789[(2)] = null);

(statearr_52393_53789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (18))){
var inst_52326 = (state_52356[(2)]);
var state_52356__$1 = state_52356;
var statearr_52394_53791 = state_52356__$1;
(statearr_52394_53791[(2)] = inst_52326);

(statearr_52394_53791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52357 === (8))){
var inst_52300 = (state_52356[(14)]);
var inst_52299 = (state_52356[(16)]);
var inst_52302 = (inst_52300 < inst_52299);
var inst_52303 = inst_52302;
var state_52356__$1 = state_52356;
if(cljs.core.truth_(inst_52303)){
var statearr_52395_53793 = state_52356__$1;
(statearr_52395_53793[(1)] = (10));

} else {
var statearr_52396_53794 = state_52356__$1;
(statearr_52396_53794[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50825__auto__ = null;
var cljs$core$async$state_machine__50825__auto____0 = (function (){
var statearr_52397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52397[(0)] = cljs$core$async$state_machine__50825__auto__);

(statearr_52397[(1)] = (1));

return statearr_52397;
});
var cljs$core$async$state_machine__50825__auto____1 = (function (state_52356){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_52356);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e52398){var ex__50828__auto__ = e52398;
var statearr_52399_53799 = state_52356;
(statearr_52399_53799[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_52356[(4)]))){
var statearr_52400_53800 = state_52356;
(statearr_52400_53800[(1)] = cljs.core.first((state_52356[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53802 = state_52356;
state_52356 = G__53802;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$state_machine__50825__auto__ = function(state_52356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50825__auto____1.call(this,state_52356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50825__auto____0;
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50825__auto____1;
return cljs$core$async$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_52401 = f__50949__auto__();
(statearr_52401[(6)] = c__50948__auto___53714);

return statearr_52401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__52403 = arguments.length;
switch (G__52403) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__52405 = arguments.length;
switch (G__52405) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__52408 = arguments.length;
switch (G__52408) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__50948__auto___53821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_52452){
var state_val_52453 = (state_52452[(1)]);
if((state_val_52453 === (7))){
var state_52452__$1 = state_52452;
var statearr_52454_53824 = state_52452__$1;
(statearr_52454_53824[(2)] = null);

(statearr_52454_53824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (1))){
var state_52452__$1 = state_52452;
var statearr_52455_53827 = state_52452__$1;
(statearr_52455_53827[(2)] = null);

(statearr_52455_53827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (4))){
var inst_52413 = (state_52452[(7)]);
var inst_52412 = (state_52452[(8)]);
var inst_52415 = (inst_52413 < inst_52412);
var state_52452__$1 = state_52452;
if(cljs.core.truth_(inst_52415)){
var statearr_52456_53829 = state_52452__$1;
(statearr_52456_53829[(1)] = (6));

} else {
var statearr_52457_53830 = state_52452__$1;
(statearr_52457_53830[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (15))){
var inst_52438 = (state_52452[(9)]);
var inst_52443 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52438);
var state_52452__$1 = state_52452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52452__$1,(17),out,inst_52443);
} else {
if((state_val_52453 === (13))){
var inst_52438 = (state_52452[(9)]);
var inst_52438__$1 = (state_52452[(2)]);
var inst_52439 = cljs.core.some(cljs.core.nil_QMARK_,inst_52438__$1);
var state_52452__$1 = (function (){var statearr_52458 = state_52452;
(statearr_52458[(9)] = inst_52438__$1);

return statearr_52458;
})();
if(cljs.core.truth_(inst_52439)){
var statearr_52459_53833 = state_52452__$1;
(statearr_52459_53833[(1)] = (14));

} else {
var statearr_52460_53836 = state_52452__$1;
(statearr_52460_53836[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (6))){
var state_52452__$1 = state_52452;
var statearr_52461_53838 = state_52452__$1;
(statearr_52461_53838[(2)] = null);

(statearr_52461_53838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (17))){
var inst_52445 = (state_52452[(2)]);
var state_52452__$1 = (function (){var statearr_52463 = state_52452;
(statearr_52463[(10)] = inst_52445);

return statearr_52463;
})();
var statearr_52464_53839 = state_52452__$1;
(statearr_52464_53839[(2)] = null);

(statearr_52464_53839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (3))){
var inst_52450 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52452__$1,inst_52450);
} else {
if((state_val_52453 === (12))){
var _ = (function (){var statearr_52465 = state_52452;
(statearr_52465[(4)] = cljs.core.rest((state_52452[(4)])));

return statearr_52465;
})();
var state_52452__$1 = state_52452;
var ex52462 = (state_52452__$1[(2)]);
var statearr_52466_53851 = state_52452__$1;
(statearr_52466_53851[(5)] = ex52462);


if((ex52462 instanceof Object)){
var statearr_52467_53854 = state_52452__$1;
(statearr_52467_53854[(1)] = (11));

(statearr_52467_53854[(5)] = null);

} else {
throw ex52462;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (2))){
var inst_52411 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52412 = cnt;
var inst_52413 = (0);
var state_52452__$1 = (function (){var statearr_52468 = state_52452;
(statearr_52468[(7)] = inst_52413);

(statearr_52468[(8)] = inst_52412);

(statearr_52468[(11)] = inst_52411);

return statearr_52468;
})();
var statearr_52469_53861 = state_52452__$1;
(statearr_52469_53861[(2)] = null);

(statearr_52469_53861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (11))){
var inst_52417 = (state_52452[(2)]);
var inst_52418 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52452__$1 = (function (){var statearr_52470 = state_52452;
(statearr_52470[(12)] = inst_52417);

return statearr_52470;
})();
var statearr_52472_53867 = state_52452__$1;
(statearr_52472_53867[(2)] = inst_52418);

(statearr_52472_53867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (9))){
var inst_52413 = (state_52452[(7)]);
var _ = (function (){var statearr_52473 = state_52452;
(statearr_52473[(4)] = cljs.core.cons((12),(state_52452[(4)])));

return statearr_52473;
})();
var inst_52424 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52413) : chs__$1.call(null,inst_52413));
var inst_52425 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52413) : done.call(null,inst_52413));
var inst_52426 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52424,inst_52425);
var ___$1 = (function (){var statearr_52474 = state_52452;
(statearr_52474[(4)] = cljs.core.rest((state_52452[(4)])));

return statearr_52474;
})();
var state_52452__$1 = state_52452;
var statearr_52475_53870 = state_52452__$1;
(statearr_52475_53870[(2)] = inst_52426);

(statearr_52475_53870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (5))){
var inst_52436 = (state_52452[(2)]);
var state_52452__$1 = (function (){var statearr_52476 = state_52452;
(statearr_52476[(13)] = inst_52436);

return statearr_52476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52452__$1,(13),dchan);
} else {
if((state_val_52453 === (14))){
var inst_52441 = cljs.core.async.close_BANG_(out);
var state_52452__$1 = state_52452;
var statearr_52477_53882 = state_52452__$1;
(statearr_52477_53882[(2)] = inst_52441);

(statearr_52477_53882[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (16))){
var inst_52448 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
var statearr_52478_53887 = state_52452__$1;
(statearr_52478_53887[(2)] = inst_52448);

(statearr_52478_53887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (10))){
var inst_52413 = (state_52452[(7)]);
var inst_52429 = (state_52452[(2)]);
var inst_52430 = (inst_52413 + (1));
var inst_52413__$1 = inst_52430;
var state_52452__$1 = (function (){var statearr_52479 = state_52452;
(statearr_52479[(7)] = inst_52413__$1);

(statearr_52479[(14)] = inst_52429);

return statearr_52479;
})();
var statearr_52480_53889 = state_52452__$1;
(statearr_52480_53889[(2)] = null);

(statearr_52480_53889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52453 === (8))){
var inst_52434 = (state_52452[(2)]);
var state_52452__$1 = state_52452;
var statearr_52481_53890 = state_52452__$1;
(statearr_52481_53890[(2)] = inst_52434);

(statearr_52481_53890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50825__auto__ = null;
var cljs$core$async$state_machine__50825__auto____0 = (function (){
var statearr_52482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52482[(0)] = cljs$core$async$state_machine__50825__auto__);

(statearr_52482[(1)] = (1));

return statearr_52482;
});
var cljs$core$async$state_machine__50825__auto____1 = (function (state_52452){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_52452);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e52483){var ex__50828__auto__ = e52483;
var statearr_52484_53908 = state_52452;
(statearr_52484_53908[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_52452[(4)]))){
var statearr_52485_53909 = state_52452;
(statearr_52485_53909[(1)] = cljs.core.first((state_52452[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53914 = state_52452;
state_52452 = G__53914;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$state_machine__50825__auto__ = function(state_52452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50825__auto____1.call(this,state_52452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50825__auto____0;
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50825__auto____1;
return cljs$core$async$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_52486 = f__50949__auto__();
(statearr_52486[(6)] = c__50948__auto___53821);

return statearr_52486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__52489 = arguments.length;
switch (G__52489) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50948__auto___53922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_52521){
var state_val_52522 = (state_52521[(1)]);
if((state_val_52522 === (7))){
var inst_52501 = (state_52521[(7)]);
var inst_52500 = (state_52521[(8)]);
var inst_52500__$1 = (state_52521[(2)]);
var inst_52501__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52500__$1,(0),null);
var inst_52502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52500__$1,(1),null);
var inst_52503 = (inst_52501__$1 == null);
var state_52521__$1 = (function (){var statearr_52523 = state_52521;
(statearr_52523[(9)] = inst_52502);

(statearr_52523[(7)] = inst_52501__$1);

(statearr_52523[(8)] = inst_52500__$1);

return statearr_52523;
})();
if(cljs.core.truth_(inst_52503)){
var statearr_52524_53928 = state_52521__$1;
(statearr_52524_53928[(1)] = (8));

} else {
var statearr_52525_53929 = state_52521__$1;
(statearr_52525_53929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (1))){
var inst_52490 = cljs.core.vec(chs);
var inst_52491 = inst_52490;
var state_52521__$1 = (function (){var statearr_52526 = state_52521;
(statearr_52526[(10)] = inst_52491);

return statearr_52526;
})();
var statearr_52527_53932 = state_52521__$1;
(statearr_52527_53932[(2)] = null);

(statearr_52527_53932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (4))){
var inst_52491 = (state_52521[(10)]);
var state_52521__$1 = state_52521;
return cljs.core.async.ioc_alts_BANG_(state_52521__$1,(7),inst_52491);
} else {
if((state_val_52522 === (6))){
var inst_52517 = (state_52521[(2)]);
var state_52521__$1 = state_52521;
var statearr_52528_53936 = state_52521__$1;
(statearr_52528_53936[(2)] = inst_52517);

(statearr_52528_53936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (3))){
var inst_52519 = (state_52521[(2)]);
var state_52521__$1 = state_52521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52521__$1,inst_52519);
} else {
if((state_val_52522 === (2))){
var inst_52491 = (state_52521[(10)]);
var inst_52493 = cljs.core.count(inst_52491);
var inst_52494 = (inst_52493 > (0));
var state_52521__$1 = state_52521;
if(cljs.core.truth_(inst_52494)){
var statearr_52530_53942 = state_52521__$1;
(statearr_52530_53942[(1)] = (4));

} else {
var statearr_52531_53944 = state_52521__$1;
(statearr_52531_53944[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (11))){
var inst_52491 = (state_52521[(10)]);
var inst_52510 = (state_52521[(2)]);
var tmp52529 = inst_52491;
var inst_52491__$1 = tmp52529;
var state_52521__$1 = (function (){var statearr_52532 = state_52521;
(statearr_52532[(10)] = inst_52491__$1);

(statearr_52532[(11)] = inst_52510);

return statearr_52532;
})();
var statearr_52533_53946 = state_52521__$1;
(statearr_52533_53946[(2)] = null);

(statearr_52533_53946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (9))){
var inst_52501 = (state_52521[(7)]);
var state_52521__$1 = state_52521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52521__$1,(11),out,inst_52501);
} else {
if((state_val_52522 === (5))){
var inst_52515 = cljs.core.async.close_BANG_(out);
var state_52521__$1 = state_52521;
var statearr_52534_53951 = state_52521__$1;
(statearr_52534_53951[(2)] = inst_52515);

(statearr_52534_53951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (10))){
var inst_52513 = (state_52521[(2)]);
var state_52521__$1 = state_52521;
var statearr_52535_53952 = state_52521__$1;
(statearr_52535_53952[(2)] = inst_52513);

(statearr_52535_53952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (8))){
var inst_52502 = (state_52521[(9)]);
var inst_52501 = (state_52521[(7)]);
var inst_52491 = (state_52521[(10)]);
var inst_52500 = (state_52521[(8)]);
var inst_52505 = (function (){var cs = inst_52491;
var vec__52496 = inst_52500;
var v = inst_52501;
var c = inst_52502;
return (function (p1__52487_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52487_SHARP_);
});
})();
var inst_52506 = cljs.core.filterv(inst_52505,inst_52491);
var inst_52491__$1 = inst_52506;
var state_52521__$1 = (function (){var statearr_52536 = state_52521;
(statearr_52536[(10)] = inst_52491__$1);

return statearr_52536;
})();
var statearr_52537_53960 = state_52521__$1;
(statearr_52537_53960[(2)] = null);

(statearr_52537_53960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50825__auto__ = null;
var cljs$core$async$state_machine__50825__auto____0 = (function (){
var statearr_52538 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52538[(0)] = cljs$core$async$state_machine__50825__auto__);

(statearr_52538[(1)] = (1));

return statearr_52538;
});
var cljs$core$async$state_machine__50825__auto____1 = (function (state_52521){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_52521);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e52539){var ex__50828__auto__ = e52539;
var statearr_52540_53974 = state_52521;
(statearr_52540_53974[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_52521[(4)]))){
var statearr_52541_53987 = state_52521;
(statearr_52541_53987[(1)] = cljs.core.first((state_52521[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53996 = state_52521;
state_52521 = G__53996;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$state_machine__50825__auto__ = function(state_52521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50825__auto____1.call(this,state_52521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50825__auto____0;
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50825__auto____1;
return cljs$core$async$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_52542 = f__50949__auto__();
(statearr_52542[(6)] = c__50948__auto___53922);

return statearr_52542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__52544 = arguments.length;
switch (G__52544) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50948__auto___54044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_52569){
var state_val_52570 = (state_52569[(1)]);
if((state_val_52570 === (7))){
var inst_52551 = (state_52569[(7)]);
var inst_52551__$1 = (state_52569[(2)]);
var inst_52552 = (inst_52551__$1 == null);
var inst_52553 = cljs.core.not(inst_52552);
var state_52569__$1 = (function (){var statearr_52571 = state_52569;
(statearr_52571[(7)] = inst_52551__$1);

return statearr_52571;
})();
if(inst_52553){
var statearr_52572_54063 = state_52569__$1;
(statearr_52572_54063[(1)] = (8));

} else {
var statearr_52573_54069 = state_52569__$1;
(statearr_52573_54069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52570 === (1))){
var inst_52546 = (0);
var state_52569__$1 = (function (){var statearr_52574 = state_52569;
(statearr_52574[(8)] = inst_52546);

return statearr_52574;
})();
var statearr_52575_54070 = state_52569__$1;
(statearr_52575_54070[(2)] = null);

(statearr_52575_54070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52570 === (4))){
var state_52569__$1 = state_52569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52569__$1,(7),ch);
} else {
if((state_val_52570 === (6))){
var inst_52564 = (state_52569[(2)]);
var state_52569__$1 = state_52569;
var statearr_52576_54075 = state_52569__$1;
(statearr_52576_54075[(2)] = inst_52564);

(statearr_52576_54075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52570 === (3))){
var inst_52566 = (state_52569[(2)]);
var inst_52567 = cljs.core.async.close_BANG_(out);
var state_52569__$1 = (function (){var statearr_52577 = state_52569;
(statearr_52577[(9)] = inst_52566);

return statearr_52577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52569__$1,inst_52567);
} else {
if((state_val_52570 === (2))){
var inst_52546 = (state_52569[(8)]);
var inst_52548 = (inst_52546 < n);
var state_52569__$1 = state_52569;
if(cljs.core.truth_(inst_52548)){
var statearr_52578_54080 = state_52569__$1;
(statearr_52578_54080[(1)] = (4));

} else {
var statearr_52579_54081 = state_52569__$1;
(statearr_52579_54081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52570 === (11))){
var inst_52546 = (state_52569[(8)]);
var inst_52556 = (state_52569[(2)]);
var inst_52557 = (inst_52546 + (1));
var inst_52546__$1 = inst_52557;
var state_52569__$1 = (function (){var statearr_52580 = state_52569;
(statearr_52580[(10)] = inst_52556);

(statearr_52580[(8)] = inst_52546__$1);

return statearr_52580;
})();
var statearr_52581_54086 = state_52569__$1;
(statearr_52581_54086[(2)] = null);

(statearr_52581_54086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52570 === (9))){
var state_52569__$1 = state_52569;
var statearr_52582_54091 = state_52569__$1;
(statearr_52582_54091[(2)] = null);

(statearr_52582_54091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52570 === (5))){
var state_52569__$1 = state_52569;
var statearr_52583_54093 = state_52569__$1;
(statearr_52583_54093[(2)] = null);

(statearr_52583_54093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52570 === (10))){
var inst_52561 = (state_52569[(2)]);
var state_52569__$1 = state_52569;
var statearr_52584_54094 = state_52569__$1;
(statearr_52584_54094[(2)] = inst_52561);

(statearr_52584_54094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52570 === (8))){
var inst_52551 = (state_52569[(7)]);
var state_52569__$1 = state_52569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52569__$1,(11),out,inst_52551);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50825__auto__ = null;
var cljs$core$async$state_machine__50825__auto____0 = (function (){
var statearr_52585 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52585[(0)] = cljs$core$async$state_machine__50825__auto__);

(statearr_52585[(1)] = (1));

return statearr_52585;
});
var cljs$core$async$state_machine__50825__auto____1 = (function (state_52569){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_52569);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e52586){var ex__50828__auto__ = e52586;
var statearr_52587_54100 = state_52569;
(statearr_52587_54100[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_52569[(4)]))){
var statearr_52588_54101 = state_52569;
(statearr_52588_54101[(1)] = cljs.core.first((state_52569[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54102 = state_52569;
state_52569 = G__54102;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$state_machine__50825__auto__ = function(state_52569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50825__auto____1.call(this,state_52569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50825__auto____0;
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50825__auto____1;
return cljs$core$async$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_52589 = f__50949__auto__();
(statearr_52589[(6)] = c__50948__auto___54044);

return statearr_52589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52591 = (function (f,ch,meta52592){
this.f = f;
this.ch = ch;
this.meta52592 = meta52592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52593,meta52592__$1){
var self__ = this;
var _52593__$1 = this;
return (new cljs.core.async.t_cljs$core$async52591(self__.f,self__.ch,meta52592__$1));
}));

(cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52593){
var self__ = this;
var _52593__$1 = this;
return self__.meta52592;
}));

(cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52594 = (function (f,ch,meta52592,_,fn1,meta52595){
this.f = f;
this.ch = ch;
this.meta52592 = meta52592;
this._ = _;
this.fn1 = fn1;
this.meta52595 = meta52595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52596,meta52595__$1){
var self__ = this;
var _52596__$1 = this;
return (new cljs.core.async.t_cljs$core$async52594(self__.f,self__.ch,self__.meta52592,self__._,self__.fn1,meta52595__$1));
}));

(cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52596){
var self__ = this;
var _52596__$1 = this;
return self__.meta52595;
}));

(cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__52590_SHARP_){
var G__52597 = (((p1__52590_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52590_SHARP_) : self__.f.call(null,p1__52590_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52597) : f1.call(null,G__52597));
});
}));

(cljs.core.async.t_cljs$core$async52594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52592","meta52592",1757718582,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52591","cljs.core.async/t_cljs$core$async52591",929296821,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52595","meta52595",175887220,null)], null);
}));

(cljs.core.async.t_cljs$core$async52594.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52594");

(cljs.core.async.t_cljs$core$async52594.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52594");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52594.
 */
cljs.core.async.__GT_t_cljs$core$async52594 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52594(f__$1,ch__$1,meta52592__$1,___$2,fn1__$1,meta52595){
return (new cljs.core.async.t_cljs$core$async52594(f__$1,ch__$1,meta52592__$1,___$2,fn1__$1,meta52595));
});

}

return (new cljs.core.async.t_cljs$core$async52594(self__.f,self__.ch,self__.meta52592,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52598 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52598) : self__.f.call(null,G__52598));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52592","meta52592",1757718582,null)], null);
}));

(cljs.core.async.t_cljs$core$async52591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52591");

(cljs.core.async.t_cljs$core$async52591.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52591.
 */
cljs.core.async.__GT_t_cljs$core$async52591 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52591(f__$1,ch__$1,meta52592){
return (new cljs.core.async.t_cljs$core$async52591(f__$1,ch__$1,meta52592));
});

}

return (new cljs.core.async.t_cljs$core$async52591(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52599 = (function (f,ch,meta52600){
this.f = f;
this.ch = ch;
this.meta52600 = meta52600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52601,meta52600__$1){
var self__ = this;
var _52601__$1 = this;
return (new cljs.core.async.t_cljs$core$async52599(self__.f,self__.ch,meta52600__$1));
}));

(cljs.core.async.t_cljs$core$async52599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52601){
var self__ = this;
var _52601__$1 = this;
return self__.meta52600;
}));

(cljs.core.async.t_cljs$core$async52599.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52599.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52599.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52599.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52599.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52599.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async52599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52600","meta52600",-943380035,null)], null);
}));

(cljs.core.async.t_cljs$core$async52599.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52599");

(cljs.core.async.t_cljs$core$async52599.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52599");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52599.
 */
cljs.core.async.__GT_t_cljs$core$async52599 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52599(f__$1,ch__$1,meta52600){
return (new cljs.core.async.t_cljs$core$async52599(f__$1,ch__$1,meta52600));
});

}

return (new cljs.core.async.t_cljs$core$async52599(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52608 = (function (p,ch,meta52609){
this.p = p;
this.ch = ch;
this.meta52609 = meta52609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52610,meta52609__$1){
var self__ = this;
var _52610__$1 = this;
return (new cljs.core.async.t_cljs$core$async52608(self__.p,self__.ch,meta52609__$1));
}));

(cljs.core.async.t_cljs$core$async52608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52610){
var self__ = this;
var _52610__$1 = this;
return self__.meta52609;
}));

(cljs.core.async.t_cljs$core$async52608.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52608.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52608.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52608.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52608.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52608.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52608.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52609","meta52609",1090523858,null)], null);
}));

(cljs.core.async.t_cljs$core$async52608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52608");

(cljs.core.async.t_cljs$core$async52608.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52608.
 */
cljs.core.async.__GT_t_cljs$core$async52608 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52608(p__$1,ch__$1,meta52609){
return (new cljs.core.async.t_cljs$core$async52608(p__$1,ch__$1,meta52609));
});

}

return (new cljs.core.async.t_cljs$core$async52608(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__52629 = arguments.length;
switch (G__52629) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50948__auto___54188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_52650){
var state_val_52651 = (state_52650[(1)]);
if((state_val_52651 === (7))){
var inst_52646 = (state_52650[(2)]);
var state_52650__$1 = state_52650;
var statearr_52652_54189 = state_52650__$1;
(statearr_52652_54189[(2)] = inst_52646);

(statearr_52652_54189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52651 === (1))){
var state_52650__$1 = state_52650;
var statearr_52655_54190 = state_52650__$1;
(statearr_52655_54190[(2)] = null);

(statearr_52655_54190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52651 === (4))){
var inst_52632 = (state_52650[(7)]);
var inst_52632__$1 = (state_52650[(2)]);
var inst_52633 = (inst_52632__$1 == null);
var state_52650__$1 = (function (){var statearr_52659 = state_52650;
(statearr_52659[(7)] = inst_52632__$1);

return statearr_52659;
})();
if(cljs.core.truth_(inst_52633)){
var statearr_52660_54191 = state_52650__$1;
(statearr_52660_54191[(1)] = (5));

} else {
var statearr_52661_54192 = state_52650__$1;
(statearr_52661_54192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52651 === (6))){
var inst_52632 = (state_52650[(7)]);
var inst_52637 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52632) : p.call(null,inst_52632));
var state_52650__$1 = state_52650;
if(cljs.core.truth_(inst_52637)){
var statearr_52663_54196 = state_52650__$1;
(statearr_52663_54196[(1)] = (8));

} else {
var statearr_52664_54197 = state_52650__$1;
(statearr_52664_54197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52651 === (3))){
var inst_52648 = (state_52650[(2)]);
var state_52650__$1 = state_52650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52650__$1,inst_52648);
} else {
if((state_val_52651 === (2))){
var state_52650__$1 = state_52650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52650__$1,(4),ch);
} else {
if((state_val_52651 === (11))){
var inst_52640 = (state_52650[(2)]);
var state_52650__$1 = state_52650;
var statearr_52667_54198 = state_52650__$1;
(statearr_52667_54198[(2)] = inst_52640);

(statearr_52667_54198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52651 === (9))){
var state_52650__$1 = state_52650;
var statearr_52668_54199 = state_52650__$1;
(statearr_52668_54199[(2)] = null);

(statearr_52668_54199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52651 === (5))){
var inst_52635 = cljs.core.async.close_BANG_(out);
var state_52650__$1 = state_52650;
var statearr_52669_54203 = state_52650__$1;
(statearr_52669_54203[(2)] = inst_52635);

(statearr_52669_54203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52651 === (10))){
var inst_52643 = (state_52650[(2)]);
var state_52650__$1 = (function (){var statearr_52670 = state_52650;
(statearr_52670[(8)] = inst_52643);

return statearr_52670;
})();
var statearr_52671_54204 = state_52650__$1;
(statearr_52671_54204[(2)] = null);

(statearr_52671_54204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52651 === (8))){
var inst_52632 = (state_52650[(7)]);
var state_52650__$1 = state_52650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52650__$1,(11),out,inst_52632);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50825__auto__ = null;
var cljs$core$async$state_machine__50825__auto____0 = (function (){
var statearr_52675 = [null,null,null,null,null,null,null,null,null];
(statearr_52675[(0)] = cljs$core$async$state_machine__50825__auto__);

(statearr_52675[(1)] = (1));

return statearr_52675;
});
var cljs$core$async$state_machine__50825__auto____1 = (function (state_52650){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_52650);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e52676){var ex__50828__auto__ = e52676;
var statearr_52677_54208 = state_52650;
(statearr_52677_54208[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_52650[(4)]))){
var statearr_52678_54209 = state_52650;
(statearr_52678_54209[(1)] = cljs.core.first((state_52650[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54210 = state_52650;
state_52650 = G__54210;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$state_machine__50825__auto__ = function(state_52650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50825__auto____1.call(this,state_52650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50825__auto____0;
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50825__auto____1;
return cljs$core$async$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_52682 = f__50949__auto__();
(statearr_52682[(6)] = c__50948__auto___54188);

return statearr_52682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52684 = arguments.length;
switch (G__52684) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50948__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_52755){
var state_val_52756 = (state_52755[(1)]);
if((state_val_52756 === (7))){
var inst_52751 = (state_52755[(2)]);
var state_52755__$1 = state_52755;
var statearr_52762_54217 = state_52755__$1;
(statearr_52762_54217[(2)] = inst_52751);

(statearr_52762_54217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (20))){
var inst_52718 = (state_52755[(7)]);
var inst_52732 = (state_52755[(2)]);
var inst_52733 = cljs.core.next(inst_52718);
var inst_52704 = inst_52733;
var inst_52705 = null;
var inst_52706 = (0);
var inst_52707 = (0);
var state_52755__$1 = (function (){var statearr_52763 = state_52755;
(statearr_52763[(8)] = inst_52732);

(statearr_52763[(9)] = inst_52705);

(statearr_52763[(10)] = inst_52704);

(statearr_52763[(11)] = inst_52707);

(statearr_52763[(12)] = inst_52706);

return statearr_52763;
})();
var statearr_52764_54218 = state_52755__$1;
(statearr_52764_54218[(2)] = null);

(statearr_52764_54218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (1))){
var state_52755__$1 = state_52755;
var statearr_52765_54219 = state_52755__$1;
(statearr_52765_54219[(2)] = null);

(statearr_52765_54219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (4))){
var inst_52692 = (state_52755[(13)]);
var inst_52692__$1 = (state_52755[(2)]);
var inst_52693 = (inst_52692__$1 == null);
var state_52755__$1 = (function (){var statearr_52769 = state_52755;
(statearr_52769[(13)] = inst_52692__$1);

return statearr_52769;
})();
if(cljs.core.truth_(inst_52693)){
var statearr_52770_54220 = state_52755__$1;
(statearr_52770_54220[(1)] = (5));

} else {
var statearr_52771_54221 = state_52755__$1;
(statearr_52771_54221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (15))){
var state_52755__$1 = state_52755;
var statearr_52775_54222 = state_52755__$1;
(statearr_52775_54222[(2)] = null);

(statearr_52775_54222[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (21))){
var state_52755__$1 = state_52755;
var statearr_52776_54223 = state_52755__$1;
(statearr_52776_54223[(2)] = null);

(statearr_52776_54223[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (13))){
var inst_52705 = (state_52755[(9)]);
var inst_52704 = (state_52755[(10)]);
var inst_52707 = (state_52755[(11)]);
var inst_52706 = (state_52755[(12)]);
var inst_52714 = (state_52755[(2)]);
var inst_52715 = (inst_52707 + (1));
var tmp52772 = inst_52705;
var tmp52773 = inst_52704;
var tmp52774 = inst_52706;
var inst_52704__$1 = tmp52773;
var inst_52705__$1 = tmp52772;
var inst_52706__$1 = tmp52774;
var inst_52707__$1 = inst_52715;
var state_52755__$1 = (function (){var statearr_52780 = state_52755;
(statearr_52780[(9)] = inst_52705__$1);

(statearr_52780[(10)] = inst_52704__$1);

(statearr_52780[(14)] = inst_52714);

(statearr_52780[(11)] = inst_52707__$1);

(statearr_52780[(12)] = inst_52706__$1);

return statearr_52780;
})();
var statearr_52781_54224 = state_52755__$1;
(statearr_52781_54224[(2)] = null);

(statearr_52781_54224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (22))){
var state_52755__$1 = state_52755;
var statearr_52782_54227 = state_52755__$1;
(statearr_52782_54227[(2)] = null);

(statearr_52782_54227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (6))){
var inst_52692 = (state_52755[(13)]);
var inst_52702 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52692) : f.call(null,inst_52692));
var inst_52703 = cljs.core.seq(inst_52702);
var inst_52704 = inst_52703;
var inst_52705 = null;
var inst_52706 = (0);
var inst_52707 = (0);
var state_52755__$1 = (function (){var statearr_52783 = state_52755;
(statearr_52783[(9)] = inst_52705);

(statearr_52783[(10)] = inst_52704);

(statearr_52783[(11)] = inst_52707);

(statearr_52783[(12)] = inst_52706);

return statearr_52783;
})();
var statearr_52784_54228 = state_52755__$1;
(statearr_52784_54228[(2)] = null);

(statearr_52784_54228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (17))){
var inst_52718 = (state_52755[(7)]);
var inst_52722 = cljs.core.chunk_first(inst_52718);
var inst_52724 = cljs.core.chunk_rest(inst_52718);
var inst_52725 = cljs.core.count(inst_52722);
var inst_52704 = inst_52724;
var inst_52705 = inst_52722;
var inst_52706 = inst_52725;
var inst_52707 = (0);
var state_52755__$1 = (function (){var statearr_52790 = state_52755;
(statearr_52790[(9)] = inst_52705);

(statearr_52790[(10)] = inst_52704);

(statearr_52790[(11)] = inst_52707);

(statearr_52790[(12)] = inst_52706);

return statearr_52790;
})();
var statearr_52791_54230 = state_52755__$1;
(statearr_52791_54230[(2)] = null);

(statearr_52791_54230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (3))){
var inst_52753 = (state_52755[(2)]);
var state_52755__$1 = state_52755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52755__$1,inst_52753);
} else {
if((state_val_52756 === (12))){
var inst_52741 = (state_52755[(2)]);
var state_52755__$1 = state_52755;
var statearr_52793_54233 = state_52755__$1;
(statearr_52793_54233[(2)] = inst_52741);

(statearr_52793_54233[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (2))){
var state_52755__$1 = state_52755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52755__$1,(4),in$);
} else {
if((state_val_52756 === (23))){
var inst_52749 = (state_52755[(2)]);
var state_52755__$1 = state_52755;
var statearr_52794_54234 = state_52755__$1;
(statearr_52794_54234[(2)] = inst_52749);

(statearr_52794_54234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (19))){
var inst_52736 = (state_52755[(2)]);
var state_52755__$1 = state_52755;
var statearr_52795_54236 = state_52755__$1;
(statearr_52795_54236[(2)] = inst_52736);

(statearr_52795_54236[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (11))){
var inst_52718 = (state_52755[(7)]);
var inst_52704 = (state_52755[(10)]);
var inst_52718__$1 = cljs.core.seq(inst_52704);
var state_52755__$1 = (function (){var statearr_52796 = state_52755;
(statearr_52796[(7)] = inst_52718__$1);

return statearr_52796;
})();
if(inst_52718__$1){
var statearr_52803_54237 = state_52755__$1;
(statearr_52803_54237[(1)] = (14));

} else {
var statearr_52804_54238 = state_52755__$1;
(statearr_52804_54238[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (9))){
var inst_52743 = (state_52755[(2)]);
var inst_52744 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52755__$1 = (function (){var statearr_52807 = state_52755;
(statearr_52807[(15)] = inst_52743);

return statearr_52807;
})();
if(cljs.core.truth_(inst_52744)){
var statearr_52808_54239 = state_52755__$1;
(statearr_52808_54239[(1)] = (21));

} else {
var statearr_52809_54241 = state_52755__$1;
(statearr_52809_54241[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (5))){
var inst_52696 = cljs.core.async.close_BANG_(out);
var state_52755__$1 = state_52755;
var statearr_52810_54243 = state_52755__$1;
(statearr_52810_54243[(2)] = inst_52696);

(statearr_52810_54243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (14))){
var inst_52718 = (state_52755[(7)]);
var inst_52720 = cljs.core.chunked_seq_QMARK_(inst_52718);
var state_52755__$1 = state_52755;
if(inst_52720){
var statearr_52812_54244 = state_52755__$1;
(statearr_52812_54244[(1)] = (17));

} else {
var statearr_52814_54247 = state_52755__$1;
(statearr_52814_54247[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (16))){
var inst_52739 = (state_52755[(2)]);
var state_52755__$1 = state_52755;
var statearr_52815_54248 = state_52755__$1;
(statearr_52815_54248[(2)] = inst_52739);

(statearr_52815_54248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52756 === (10))){
var inst_52705 = (state_52755[(9)]);
var inst_52707 = (state_52755[(11)]);
var inst_52712 = cljs.core._nth(inst_52705,inst_52707);
var state_52755__$1 = state_52755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52755__$1,(13),out,inst_52712);
} else {
if((state_val_52756 === (18))){
var inst_52718 = (state_52755[(7)]);
var inst_52729 = cljs.core.first(inst_52718);
var state_52755__$1 = state_52755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52755__$1,(20),out,inst_52729);
} else {
if((state_val_52756 === (8))){
var inst_52707 = (state_52755[(11)]);
var inst_52706 = (state_52755[(12)]);
var inst_52709 = (inst_52707 < inst_52706);
var inst_52710 = inst_52709;
var state_52755__$1 = state_52755;
if(cljs.core.truth_(inst_52710)){
var statearr_52818_54250 = state_52755__$1;
(statearr_52818_54250[(1)] = (10));

} else {
var statearr_52819_54251 = state_52755__$1;
(statearr_52819_54251[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50825__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50825__auto____0 = (function (){
var statearr_52821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52821[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50825__auto__);

(statearr_52821[(1)] = (1));

return statearr_52821;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50825__auto____1 = (function (state_52755){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_52755);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e52823){var ex__50828__auto__ = e52823;
var statearr_52824_54264 = state_52755;
(statearr_52824_54264[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_52755[(4)]))){
var statearr_52825_54265 = state_52755;
(statearr_52825_54265[(1)] = cljs.core.first((state_52755[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54270 = state_52755;
state_52755 = G__54270;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50825__auto__ = function(state_52755){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50825__auto____1.call(this,state_52755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50825__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50825__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_52826 = f__50949__auto__();
(statearr_52826[(6)] = c__50948__auto__);

return statearr_52826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));

return c__50948__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52828 = arguments.length;
switch (G__52828) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52831 = arguments.length;
switch (G__52831) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52836 = arguments.length;
switch (G__52836) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50948__auto___54304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_52876){
var state_val_52877 = (state_52876[(1)]);
if((state_val_52877 === (7))){
var inst_52867 = (state_52876[(2)]);
var state_52876__$1 = state_52876;
var statearr_52882_54316 = state_52876__$1;
(statearr_52882_54316[(2)] = inst_52867);

(statearr_52882_54316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52877 === (1))){
var inst_52845 = null;
var state_52876__$1 = (function (){var statearr_52883 = state_52876;
(statearr_52883[(7)] = inst_52845);

return statearr_52883;
})();
var statearr_52884_54331 = state_52876__$1;
(statearr_52884_54331[(2)] = null);

(statearr_52884_54331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52877 === (4))){
var inst_52852 = (state_52876[(8)]);
var inst_52852__$1 = (state_52876[(2)]);
var inst_52853 = (inst_52852__$1 == null);
var inst_52854 = cljs.core.not(inst_52853);
var state_52876__$1 = (function (){var statearr_52885 = state_52876;
(statearr_52885[(8)] = inst_52852__$1);

return statearr_52885;
})();
if(inst_52854){
var statearr_52886_54342 = state_52876__$1;
(statearr_52886_54342[(1)] = (5));

} else {
var statearr_52887_54348 = state_52876__$1;
(statearr_52887_54348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52877 === (6))){
var state_52876__$1 = state_52876;
var statearr_52888_54351 = state_52876__$1;
(statearr_52888_54351[(2)] = null);

(statearr_52888_54351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52877 === (3))){
var inst_52869 = (state_52876[(2)]);
var inst_52870 = cljs.core.async.close_BANG_(out);
var state_52876__$1 = (function (){var statearr_52889 = state_52876;
(statearr_52889[(9)] = inst_52869);

return statearr_52889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52876__$1,inst_52870);
} else {
if((state_val_52877 === (2))){
var state_52876__$1 = state_52876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52876__$1,(4),ch);
} else {
if((state_val_52877 === (11))){
var inst_52852 = (state_52876[(8)]);
var inst_52861 = (state_52876[(2)]);
var inst_52845 = inst_52852;
var state_52876__$1 = (function (){var statearr_52890 = state_52876;
(statearr_52890[(7)] = inst_52845);

(statearr_52890[(10)] = inst_52861);

return statearr_52890;
})();
var statearr_52891_54376 = state_52876__$1;
(statearr_52891_54376[(2)] = null);

(statearr_52891_54376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52877 === (9))){
var inst_52852 = (state_52876[(8)]);
var state_52876__$1 = state_52876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52876__$1,(11),out,inst_52852);
} else {
if((state_val_52877 === (5))){
var inst_52845 = (state_52876[(7)]);
var inst_52852 = (state_52876[(8)]);
var inst_52856 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52852,inst_52845);
var state_52876__$1 = state_52876;
if(inst_52856){
var statearr_52893_54386 = state_52876__$1;
(statearr_52893_54386[(1)] = (8));

} else {
var statearr_52894_54391 = state_52876__$1;
(statearr_52894_54391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52877 === (10))){
var inst_52864 = (state_52876[(2)]);
var state_52876__$1 = state_52876;
var statearr_52895_54396 = state_52876__$1;
(statearr_52895_54396[(2)] = inst_52864);

(statearr_52895_54396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52877 === (8))){
var inst_52845 = (state_52876[(7)]);
var tmp52892 = inst_52845;
var inst_52845__$1 = tmp52892;
var state_52876__$1 = (function (){var statearr_52896 = state_52876;
(statearr_52896[(7)] = inst_52845__$1);

return statearr_52896;
})();
var statearr_52897_54397 = state_52876__$1;
(statearr_52897_54397[(2)] = null);

(statearr_52897_54397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50825__auto__ = null;
var cljs$core$async$state_machine__50825__auto____0 = (function (){
var statearr_52898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52898[(0)] = cljs$core$async$state_machine__50825__auto__);

(statearr_52898[(1)] = (1));

return statearr_52898;
});
var cljs$core$async$state_machine__50825__auto____1 = (function (state_52876){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_52876);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e52899){var ex__50828__auto__ = e52899;
var statearr_52900_54402 = state_52876;
(statearr_52900_54402[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_52876[(4)]))){
var statearr_52901_54403 = state_52876;
(statearr_52901_54403[(1)] = cljs.core.first((state_52876[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54404 = state_52876;
state_52876 = G__54404;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$state_machine__50825__auto__ = function(state_52876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50825__auto____1.call(this,state_52876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50825__auto____0;
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50825__auto____1;
return cljs$core$async$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_52902 = f__50949__auto__();
(statearr_52902[(6)] = c__50948__auto___54304);

return statearr_52902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52904 = arguments.length;
switch (G__52904) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50948__auto___54408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_52942){
var state_val_52943 = (state_52942[(1)]);
if((state_val_52943 === (7))){
var inst_52938 = (state_52942[(2)]);
var state_52942__$1 = state_52942;
var statearr_52944_54409 = state_52942__$1;
(statearr_52944_54409[(2)] = inst_52938);

(statearr_52944_54409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52943 === (1))){
var inst_52905 = (new Array(n));
var inst_52906 = inst_52905;
var inst_52907 = (0);
var state_52942__$1 = (function (){var statearr_52945 = state_52942;
(statearr_52945[(7)] = inst_52906);

(statearr_52945[(8)] = inst_52907);

return statearr_52945;
})();
var statearr_52946_54411 = state_52942__$1;
(statearr_52946_54411[(2)] = null);

(statearr_52946_54411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52943 === (4))){
var inst_52910 = (state_52942[(9)]);
var inst_52910__$1 = (state_52942[(2)]);
var inst_52911 = (inst_52910__$1 == null);
var inst_52912 = cljs.core.not(inst_52911);
var state_52942__$1 = (function (){var statearr_52947 = state_52942;
(statearr_52947[(9)] = inst_52910__$1);

return statearr_52947;
})();
if(inst_52912){
var statearr_52948_54412 = state_52942__$1;
(statearr_52948_54412[(1)] = (5));

} else {
var statearr_52949_54413 = state_52942__$1;
(statearr_52949_54413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52943 === (15))){
var inst_52932 = (state_52942[(2)]);
var state_52942__$1 = state_52942;
var statearr_52950_54414 = state_52942__$1;
(statearr_52950_54414[(2)] = inst_52932);

(statearr_52950_54414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52943 === (13))){
var state_52942__$1 = state_52942;
var statearr_52951_54416 = state_52942__$1;
(statearr_52951_54416[(2)] = null);

(statearr_52951_54416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52943 === (6))){
var inst_52907 = (state_52942[(8)]);
var inst_52928 = (inst_52907 > (0));
var state_52942__$1 = state_52942;
if(cljs.core.truth_(inst_52928)){
var statearr_52952_54419 = state_52942__$1;
(statearr_52952_54419[(1)] = (12));

} else {
var statearr_52953_54420 = state_52942__$1;
(statearr_52953_54420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52943 === (3))){
var inst_52940 = (state_52942[(2)]);
var state_52942__$1 = state_52942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52942__$1,inst_52940);
} else {
if((state_val_52943 === (12))){
var inst_52906 = (state_52942[(7)]);
var inst_52930 = cljs.core.vec(inst_52906);
var state_52942__$1 = state_52942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52942__$1,(15),out,inst_52930);
} else {
if((state_val_52943 === (2))){
var state_52942__$1 = state_52942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52942__$1,(4),ch);
} else {
if((state_val_52943 === (11))){
var inst_52922 = (state_52942[(2)]);
var inst_52923 = (new Array(n));
var inst_52906 = inst_52923;
var inst_52907 = (0);
var state_52942__$1 = (function (){var statearr_52954 = state_52942;
(statearr_52954[(7)] = inst_52906);

(statearr_52954[(10)] = inst_52922);

(statearr_52954[(8)] = inst_52907);

return statearr_52954;
})();
var statearr_52955_54421 = state_52942__$1;
(statearr_52955_54421[(2)] = null);

(statearr_52955_54421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52943 === (9))){
var inst_52906 = (state_52942[(7)]);
var inst_52920 = cljs.core.vec(inst_52906);
var state_52942__$1 = state_52942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52942__$1,(11),out,inst_52920);
} else {
if((state_val_52943 === (5))){
var inst_52910 = (state_52942[(9)]);
var inst_52906 = (state_52942[(7)]);
var inst_52915 = (state_52942[(11)]);
var inst_52907 = (state_52942[(8)]);
var inst_52914 = (inst_52906[inst_52907] = inst_52910);
var inst_52915__$1 = (inst_52907 + (1));
var inst_52916 = (inst_52915__$1 < n);
var state_52942__$1 = (function (){var statearr_52956 = state_52942;
(statearr_52956[(12)] = inst_52914);

(statearr_52956[(11)] = inst_52915__$1);

return statearr_52956;
})();
if(cljs.core.truth_(inst_52916)){
var statearr_52957_54428 = state_52942__$1;
(statearr_52957_54428[(1)] = (8));

} else {
var statearr_52958_54429 = state_52942__$1;
(statearr_52958_54429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52943 === (14))){
var inst_52935 = (state_52942[(2)]);
var inst_52936 = cljs.core.async.close_BANG_(out);
var state_52942__$1 = (function (){var statearr_52964 = state_52942;
(statearr_52964[(13)] = inst_52935);

return statearr_52964;
})();
var statearr_52969_54430 = state_52942__$1;
(statearr_52969_54430[(2)] = inst_52936);

(statearr_52969_54430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52943 === (10))){
var inst_52926 = (state_52942[(2)]);
var state_52942__$1 = state_52942;
var statearr_52970_54433 = state_52942__$1;
(statearr_52970_54433[(2)] = inst_52926);

(statearr_52970_54433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52943 === (8))){
var inst_52906 = (state_52942[(7)]);
var inst_52915 = (state_52942[(11)]);
var tmp52959 = inst_52906;
var inst_52906__$1 = tmp52959;
var inst_52907 = inst_52915;
var state_52942__$1 = (function (){var statearr_52975 = state_52942;
(statearr_52975[(7)] = inst_52906__$1);

(statearr_52975[(8)] = inst_52907);

return statearr_52975;
})();
var statearr_52976_54434 = state_52942__$1;
(statearr_52976_54434[(2)] = null);

(statearr_52976_54434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50825__auto__ = null;
var cljs$core$async$state_machine__50825__auto____0 = (function (){
var statearr_52977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52977[(0)] = cljs$core$async$state_machine__50825__auto__);

(statearr_52977[(1)] = (1));

return statearr_52977;
});
var cljs$core$async$state_machine__50825__auto____1 = (function (state_52942){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_52942);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e52986){var ex__50828__auto__ = e52986;
var statearr_52987_54437 = state_52942;
(statearr_52987_54437[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_52942[(4)]))){
var statearr_52988_54438 = state_52942;
(statearr_52988_54438[(1)] = cljs.core.first((state_52942[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54441 = state_52942;
state_52942 = G__54441;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$state_machine__50825__auto__ = function(state_52942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50825__auto____1.call(this,state_52942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50825__auto____0;
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50825__auto____1;
return cljs$core$async$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_52989 = f__50949__auto__();
(statearr_52989[(6)] = c__50948__auto___54408);

return statearr_52989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52991 = arguments.length;
switch (G__52991) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50948__auto___54447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50949__auto__ = (function (){var switch__50824__auto__ = (function (state_53033){
var state_val_53034 = (state_53033[(1)]);
if((state_val_53034 === (7))){
var inst_53029 = (state_53033[(2)]);
var state_53033__$1 = state_53033;
var statearr_53035_54448 = state_53033__$1;
(statearr_53035_54448[(2)] = inst_53029);

(statearr_53035_54448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53034 === (1))){
var inst_52992 = [];
var inst_52993 = inst_52992;
var inst_52994 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53033__$1 = (function (){var statearr_53036 = state_53033;
(statearr_53036[(7)] = inst_52994);

(statearr_53036[(8)] = inst_52993);

return statearr_53036;
})();
var statearr_53037_54449 = state_53033__$1;
(statearr_53037_54449[(2)] = null);

(statearr_53037_54449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53034 === (4))){
var inst_52997 = (state_53033[(9)]);
var inst_52997__$1 = (state_53033[(2)]);
var inst_52998 = (inst_52997__$1 == null);
var inst_52999 = cljs.core.not(inst_52998);
var state_53033__$1 = (function (){var statearr_53038 = state_53033;
(statearr_53038[(9)] = inst_52997__$1);

return statearr_53038;
})();
if(inst_52999){
var statearr_53039_54450 = state_53033__$1;
(statearr_53039_54450[(1)] = (5));

} else {
var statearr_53040_54451 = state_53033__$1;
(statearr_53040_54451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53034 === (15))){
var inst_53023 = (state_53033[(2)]);
var state_53033__$1 = state_53033;
var statearr_53041_54452 = state_53033__$1;
(statearr_53041_54452[(2)] = inst_53023);

(statearr_53041_54452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53034 === (13))){
var state_53033__$1 = state_53033;
var statearr_53042_54453 = state_53033__$1;
(statearr_53042_54453[(2)] = null);

(statearr_53042_54453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53034 === (6))){
var inst_52993 = (state_53033[(8)]);
var inst_53018 = inst_52993.length;
var inst_53019 = (inst_53018 > (0));
var state_53033__$1 = state_53033;
if(cljs.core.truth_(inst_53019)){
var statearr_53043_54454 = state_53033__$1;
(statearr_53043_54454[(1)] = (12));

} else {
var statearr_53044_54455 = state_53033__$1;
(statearr_53044_54455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53034 === (3))){
var inst_53031 = (state_53033[(2)]);
var state_53033__$1 = state_53033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53033__$1,inst_53031);
} else {
if((state_val_53034 === (12))){
var inst_52993 = (state_53033[(8)]);
var inst_53021 = cljs.core.vec(inst_52993);
var state_53033__$1 = state_53033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53033__$1,(15),out,inst_53021);
} else {
if((state_val_53034 === (2))){
var state_53033__$1 = state_53033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53033__$1,(4),ch);
} else {
if((state_val_53034 === (11))){
var inst_52997 = (state_53033[(9)]);
var inst_53001 = (state_53033[(10)]);
var inst_53011 = (state_53033[(2)]);
var inst_53012 = [];
var inst_53013 = inst_53012.push(inst_52997);
var inst_52993 = inst_53012;
var inst_52994 = inst_53001;
var state_53033__$1 = (function (){var statearr_53045 = state_53033;
(statearr_53045[(7)] = inst_52994);

(statearr_53045[(11)] = inst_53011);

(statearr_53045[(8)] = inst_52993);

(statearr_53045[(12)] = inst_53013);

return statearr_53045;
})();
var statearr_53046_54458 = state_53033__$1;
(statearr_53046_54458[(2)] = null);

(statearr_53046_54458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53034 === (9))){
var inst_52993 = (state_53033[(8)]);
var inst_53009 = cljs.core.vec(inst_52993);
var state_53033__$1 = state_53033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53033__$1,(11),out,inst_53009);
} else {
if((state_val_53034 === (5))){
var inst_52994 = (state_53033[(7)]);
var inst_52997 = (state_53033[(9)]);
var inst_53001 = (state_53033[(10)]);
var inst_53001__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52997) : f.call(null,inst_52997));
var inst_53002 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53001__$1,inst_52994);
var inst_53003 = cljs.core.keyword_identical_QMARK_(inst_52994,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53004 = ((inst_53002) || (inst_53003));
var state_53033__$1 = (function (){var statearr_53047 = state_53033;
(statearr_53047[(10)] = inst_53001__$1);

return statearr_53047;
})();
if(cljs.core.truth_(inst_53004)){
var statearr_53048_54460 = state_53033__$1;
(statearr_53048_54460[(1)] = (8));

} else {
var statearr_53049_54461 = state_53033__$1;
(statearr_53049_54461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53034 === (14))){
var inst_53026 = (state_53033[(2)]);
var inst_53027 = cljs.core.async.close_BANG_(out);
var state_53033__$1 = (function (){var statearr_53051 = state_53033;
(statearr_53051[(13)] = inst_53026);

return statearr_53051;
})();
var statearr_53052_54463 = state_53033__$1;
(statearr_53052_54463[(2)] = inst_53027);

(statearr_53052_54463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53034 === (10))){
var inst_53016 = (state_53033[(2)]);
var state_53033__$1 = state_53033;
var statearr_53053_54464 = state_53033__$1;
(statearr_53053_54464[(2)] = inst_53016);

(statearr_53053_54464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53034 === (8))){
var inst_52997 = (state_53033[(9)]);
var inst_52993 = (state_53033[(8)]);
var inst_53001 = (state_53033[(10)]);
var inst_53006 = inst_52993.push(inst_52997);
var tmp53050 = inst_52993;
var inst_52993__$1 = tmp53050;
var inst_52994 = inst_53001;
var state_53033__$1 = (function (){var statearr_53054 = state_53033;
(statearr_53054[(7)] = inst_52994);

(statearr_53054[(8)] = inst_52993__$1);

(statearr_53054[(14)] = inst_53006);

return statearr_53054;
})();
var statearr_53055_54466 = state_53033__$1;
(statearr_53055_54466[(2)] = null);

(statearr_53055_54466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50825__auto__ = null;
var cljs$core$async$state_machine__50825__auto____0 = (function (){
var statearr_53056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53056[(0)] = cljs$core$async$state_machine__50825__auto__);

(statearr_53056[(1)] = (1));

return statearr_53056;
});
var cljs$core$async$state_machine__50825__auto____1 = (function (state_53033){
while(true){
var ret_value__50826__auto__ = (function (){try{while(true){
var result__50827__auto__ = switch__50824__auto__(state_53033);
if(cljs.core.keyword_identical_QMARK_(result__50827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50827__auto__;
}
break;
}
}catch (e53057){var ex__50828__auto__ = e53057;
var statearr_53058_54467 = state_53033;
(statearr_53058_54467[(2)] = ex__50828__auto__);


if(cljs.core.seq((state_53033[(4)]))){
var statearr_53059_54468 = state_53033;
(statearr_53059_54468[(1)] = cljs.core.first((state_53033[(4)])));

} else {
throw ex__50828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54469 = state_53033;
state_53033 = G__54469;
continue;
} else {
return ret_value__50826__auto__;
}
break;
}
});
cljs$core$async$state_machine__50825__auto__ = function(state_53033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50825__auto____1.call(this,state_53033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50825__auto____0;
cljs$core$async$state_machine__50825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50825__auto____1;
return cljs$core$async$state_machine__50825__auto__;
})()
})();
var state__50950__auto__ = (function (){var statearr_53060 = f__50949__auto__();
(statearr_53060[(6)] = c__50948__auto___54447);

return statearr_53060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50950__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
