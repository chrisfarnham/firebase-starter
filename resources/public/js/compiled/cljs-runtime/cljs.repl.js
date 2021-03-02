goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55781){
var map__55782 = p__55781;
var map__55782__$1 = (((((!((map__55782 == null))))?(((((map__55782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55782):map__55782);
var m = map__55782__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55782__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55782__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5754__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5754__auto__)){
var ns = temp__5754__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__55786_55999 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55787_56000 = null;
var count__55788_56001 = (0);
var i__55789_56002 = (0);
while(true){
if((i__55789_56002 < count__55788_56001)){
var f_56004 = chunk__55787_56000.cljs$core$IIndexed$_nth$arity$2(null,i__55789_56002);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56004], 0));


var G__56005 = seq__55786_55999;
var G__56006 = chunk__55787_56000;
var G__56007 = count__55788_56001;
var G__56008 = (i__55789_56002 + (1));
seq__55786_55999 = G__56005;
chunk__55787_56000 = G__56006;
count__55788_56001 = G__56007;
i__55789_56002 = G__56008;
continue;
} else {
var temp__5754__auto___56009 = cljs.core.seq(seq__55786_55999);
if(temp__5754__auto___56009){
var seq__55786_56010__$1 = temp__5754__auto___56009;
if(cljs.core.chunked_seq_QMARK_(seq__55786_56010__$1)){
var c__4556__auto___56011 = cljs.core.chunk_first(seq__55786_56010__$1);
var G__56012 = cljs.core.chunk_rest(seq__55786_56010__$1);
var G__56013 = c__4556__auto___56011;
var G__56014 = cljs.core.count(c__4556__auto___56011);
var G__56015 = (0);
seq__55786_55999 = G__56012;
chunk__55787_56000 = G__56013;
count__55788_56001 = G__56014;
i__55789_56002 = G__56015;
continue;
} else {
var f_56016 = cljs.core.first(seq__55786_56010__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56016], 0));


var G__56017 = cljs.core.next(seq__55786_56010__$1);
var G__56018 = null;
var G__56019 = (0);
var G__56020 = (0);
seq__55786_55999 = G__56017;
chunk__55787_56000 = G__56018;
count__55788_56001 = G__56019;
i__55789_56002 = G__56020;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56022 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_56022], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_56022)))?cljs.core.second(arglists_56022):arglists_56022)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__55793_56029 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55794_56030 = null;
var count__55795_56031 = (0);
var i__55796_56032 = (0);
while(true){
if((i__55796_56032 < count__55795_56031)){
var vec__55809_56033 = chunk__55794_56030.cljs$core$IIndexed$_nth$arity$2(null,i__55796_56032);
var name_56034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55809_56033,(0),null);
var map__55812_56035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55809_56033,(1),null);
var map__55812_56036__$1 = (((((!((map__55812_56035 == null))))?(((((map__55812_56035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55812_56035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55812_56035):map__55812_56035);
var doc_56037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55812_56036__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55812_56036__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56034], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56038], 0));

if(cljs.core.truth_(doc_56037)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56037], 0));
} else {
}


var G__56039 = seq__55793_56029;
var G__56040 = chunk__55794_56030;
var G__56041 = count__55795_56031;
var G__56042 = (i__55796_56032 + (1));
seq__55793_56029 = G__56039;
chunk__55794_56030 = G__56040;
count__55795_56031 = G__56041;
i__55796_56032 = G__56042;
continue;
} else {
var temp__5754__auto___56043 = cljs.core.seq(seq__55793_56029);
if(temp__5754__auto___56043){
var seq__55793_56044__$1 = temp__5754__auto___56043;
if(cljs.core.chunked_seq_QMARK_(seq__55793_56044__$1)){
var c__4556__auto___56045 = cljs.core.chunk_first(seq__55793_56044__$1);
var G__56046 = cljs.core.chunk_rest(seq__55793_56044__$1);
var G__56047 = c__4556__auto___56045;
var G__56048 = cljs.core.count(c__4556__auto___56045);
var G__56049 = (0);
seq__55793_56029 = G__56046;
chunk__55794_56030 = G__56047;
count__55795_56031 = G__56048;
i__55796_56032 = G__56049;
continue;
} else {
var vec__55814_56050 = cljs.core.first(seq__55793_56044__$1);
var name_56051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55814_56050,(0),null);
var map__55817_56052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55814_56050,(1),null);
var map__55817_56053__$1 = (((((!((map__55817_56052 == null))))?(((((map__55817_56052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55817_56052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55817_56052):map__55817_56052);
var doc_56054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55817_56053__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55817_56053__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56051], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56055], 0));

if(cljs.core.truth_(doc_56054)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56054], 0));
} else {
}


var G__56056 = cljs.core.next(seq__55793_56044__$1);
var G__56057 = null;
var G__56058 = (0);
var G__56059 = (0);
seq__55793_56029 = G__56056;
chunk__55794_56030 = G__56057;
count__55795_56031 = G__56058;
i__55796_56032 = G__56059;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5754__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5754__auto__)){
var fnspec = temp__5754__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__55821 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55822 = null;
var count__55823 = (0);
var i__55824 = (0);
while(true){
if((i__55824 < count__55823)){
var role = chunk__55822.cljs$core$IIndexed$_nth$arity$2(null,i__55824);
var temp__5754__auto___56061__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5754__auto___56061__$1)){
var spec_56062 = temp__5754__auto___56061__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56062)], 0));
} else {
}


var G__56063 = seq__55821;
var G__56064 = chunk__55822;
var G__56065 = count__55823;
var G__56066 = (i__55824 + (1));
seq__55821 = G__56063;
chunk__55822 = G__56064;
count__55823 = G__56065;
i__55824 = G__56066;
continue;
} else {
var temp__5754__auto____$1 = cljs.core.seq(seq__55821);
if(temp__5754__auto____$1){
var seq__55821__$1 = temp__5754__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__55821__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55821__$1);
var G__56067 = cljs.core.chunk_rest(seq__55821__$1);
var G__56068 = c__4556__auto__;
var G__56069 = cljs.core.count(c__4556__auto__);
var G__56070 = (0);
seq__55821 = G__56067;
chunk__55822 = G__56068;
count__55823 = G__56069;
i__55824 = G__56070;
continue;
} else {
var role = cljs.core.first(seq__55821__$1);
var temp__5754__auto___56071__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5754__auto___56071__$2)){
var spec_56072 = temp__5754__auto___56071__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56072)], 0));
} else {
}


var G__56073 = cljs.core.next(seq__55821__$1);
var G__56074 = null;
var G__56075 = (0);
var G__56076 = (0);
seq__55821 = G__56073;
chunk__55822 = G__56074;
count__55823 = G__56075;
i__55824 = G__56076;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5754__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5754__auto__)){
var msg = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5754__auto__)){
var ed = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__56080 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__56081 = cljs.core.ex_cause(t);
via = G__56080;
t = G__56081;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5754__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5754__auto__)){
var root_msg = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5754__auto__)){
var data = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5754__auto__)){
var phase = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__55830 = datafied_throwable;
var map__55830__$1 = (((((!((map__55830 == null))))?(((((map__55830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55830):map__55830);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55830__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55830__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55830__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__55831 = cljs.core.last(via);
var map__55831__$1 = (((((!((map__55831 == null))))?(((((map__55831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55831):map__55831);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55831__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55831__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55831__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__55832 = data;
var map__55832__$1 = (((((!((map__55832 == null))))?(((((map__55832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55832):map__55832);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55832__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55832__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55832__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__55833 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__55833__$1 = (((((!((map__55833 == null))))?(((((map__55833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55833):map__55833);
var top_data = map__55833__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55833__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__55855 = phase;
var G__55855__$1 = (((G__55855 instanceof cljs.core.Keyword))?G__55855.fqn:null);
switch (G__55855__$1) {
case "read-source":
var map__55856 = data;
var map__55856__$1 = (((((!((map__55856 == null))))?(((((map__55856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55856):map__55856);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55856__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55856__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__55858 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__55858__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55858,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__55858);
var G__55858__$2 = (cljs.core.truth_((function (){var fexpr__55866 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55866.cljs$core$IFn$_invoke$arity$1 ? fexpr__55866.cljs$core$IFn$_invoke$arity$1(source) : fexpr__55866.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55858__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__55858__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55858__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__55858__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__55867 = top_data;
var G__55867__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55867,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__55867);
var G__55867__$2 = (cljs.core.truth_((function (){var fexpr__55868 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55868.cljs$core$IFn$_invoke$arity$1 ? fexpr__55868.cljs$core$IFn$_invoke$arity$1(source) : fexpr__55868.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55867__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__55867__$1);
var G__55867__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55867__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__55867__$2);
var G__55867__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55867__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__55867__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55867__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__55867__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__55874 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55874,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55874,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55874,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55874,(3),null);
var G__55883 = top_data;
var G__55883__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55883,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__55883);
var G__55883__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55883__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__55883__$1);
var G__55883__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55883__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__55883__$2);
var G__55883__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55883__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__55883__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55883__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__55883__$4;
}

break;
case "execution":
var vec__55891 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55891,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55891,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55891,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55891,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55829_SHARP_){
var or__4126__auto__ = (p1__55829_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__55906 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55906.cljs$core$IFn$_invoke$arity$1 ? fexpr__55906.cljs$core$IFn$_invoke$arity$1(p1__55829_SHARP_) : fexpr__55906.call(null,p1__55829_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__55916 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__55916__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55916,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__55916);
var G__55916__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55916__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__55916__$1);
var G__55916__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55916__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__55916__$2);
var G__55916__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55916__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__55916__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55916__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__55916__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55855__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__55926){
var map__55931 = p__55926;
var map__55931__$1 = (((((!((map__55931 == null))))?(((((map__55931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55931):map__55931);
var triage_data = map__55931__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__55951 = phase;
var G__55951__$1 = (((G__55951 instanceof cljs.core.Keyword))?G__55951.fqn:null);
switch (G__55951__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__55952 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__55953 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55954 = loc;
var G__55955 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55960_56107 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55961_56108 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55962_56109 = true;
var _STAR_print_fn_STAR__temp_val__55963_56110 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55962_56109);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55963_56110);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55924_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55924_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55961_56108);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55960_56107);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__55952,G__55953,G__55954,G__55955) : format.call(null,G__55952,G__55953,G__55954,G__55955));

break;
case "macroexpansion":
var G__55964 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__55965 = cause_type;
var G__55966 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55967 = loc;
var G__55968 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55964,G__55965,G__55966,G__55967,G__55968) : format.call(null,G__55964,G__55965,G__55966,G__55967,G__55968));

break;
case "compile-syntax-check":
var G__55969 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__55970 = cause_type;
var G__55971 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55972 = loc;
var G__55973 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55969,G__55970,G__55971,G__55972,G__55973) : format.call(null,G__55969,G__55970,G__55971,G__55972,G__55973));

break;
case "compilation":
var G__55974 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__55975 = cause_type;
var G__55976 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55977 = loc;
var G__55978 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55974,G__55975,G__55976,G__55977,G__55978) : format.call(null,G__55974,G__55975,G__55976,G__55977,G__55978));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__55980 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__55981 = symbol;
var G__55982 = loc;
var G__55983 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55984_56121 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55985_56122 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55986_56123 = true;
var _STAR_print_fn_STAR__temp_val__55987_56124 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55986_56123);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55987_56124);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55925_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55925_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55985_56122);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55984_56121);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__55980,G__55981,G__55982,G__55983) : format.call(null,G__55980,G__55981,G__55982,G__55983));
} else {
var G__55989 = "Execution error%s at %s(%s).\n%s\n";
var G__55990 = cause_type;
var G__55991 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55992 = loc;
var G__55993 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55989,G__55990,G__55991,G__55992,G__55993) : format.call(null,G__55989,G__55990,G__55991,G__55992,G__55993));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55951__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
