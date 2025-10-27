var cn = Object.defineProperty;
var Ne = (e) => {
  throw TypeError(e);
};
var fn = (e, t, n) => t in e ? cn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $ = (e, t, n) => fn(e, typeof t != "symbol" ? t + "" : t, n), Ke = (e, t, n) => t.has(e) || Ne("Cannot " + n);
var z = (e, t, n) => (Ke(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ue = (e, t, n) => t.has(e) ? Ne("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ge = (e, t, n, r) => (Ke(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
function pn(e) {
  return e.replace(/(^|_)(\w)/g, (t, n, r, o) => o === 0 ? r.toLowerCase() : r.toUpperCase());
}
var vt = typeof global == "object" && global && global.Object === Object && global, gn = typeof self == "object" && self && self.Object === Object && self, I = vt || gn || Function("return this")(), O = I.Symbol, Tt = Object.prototype, dn = Tt.hasOwnProperty, _n = Tt.toString, X = O ? O.toStringTag : void 0;
function hn(e) {
  var t = dn.call(e, X), n = e[X];
  try {
    e[X] = void 0;
    var r = !0;
  } catch {
  }
  var o = _n.call(e);
  return r && (t ? e[X] = n : delete e[X]), o;
}
var bn = Object.prototype, yn = bn.toString;
function mn(e) {
  return yn.call(e);
}
var vn = "[object Null]", Tn = "[object Undefined]", ze = O ? O.toStringTag : void 0;
function K(e) {
  return e == null ? e === void 0 ? Tn : vn : ze && ze in Object(e) ? hn(e) : mn(e);
}
function R(e) {
  return e != null && typeof e == "object";
}
var wn = "[object Symbol]";
function Pe(e) {
  return typeof e == "symbol" || R(e) && K(e) == wn;
}
function wt(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var x = Array.isArray, Be = O ? O.prototype : void 0, He = Be ? Be.toString : void 0;
function Pt(e) {
  if (typeof e == "string")
    return e;
  if (x(e))
    return wt(e, Pt) + "";
  if (Pe(e))
    return He ? He.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function V(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ot(e) {
  return e;
}
var Pn = "[object AsyncFunction]", On = "[object Function]", An = "[object GeneratorFunction]", $n = "[object Proxy]";
function At(e) {
  if (!V(e))
    return !1;
  var t = K(e);
  return t == On || t == An || t == Pn || t == $n;
}
var pe = I["__core-js_shared__"], qe = function() {
  var e = /[^.]+$/.exec(pe && pe.keys && pe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Sn(e) {
  return !!qe && qe in e;
}
var xn = Function.prototype, Cn = xn.toString;
function U(e) {
  if (e != null) {
    try {
      return Cn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var jn = /[\\^$.*+?()[\]{}|]/g, En = /^\[object .+?Constructor\]$/, In = Function.prototype, Fn = Object.prototype, Mn = In.toString, Rn = Fn.hasOwnProperty, Ln = RegExp("^" + Mn.call(Rn).replace(jn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Dn(e) {
  if (!V(e) || Sn(e))
    return !1;
  var t = At(e) ? Ln : En;
  return t.test(U(e));
}
function Nn(e, t) {
  return e == null ? void 0 : e[t];
}
function G(e, t) {
  var n = Nn(e, t);
  return Dn(n) ? n : void 0;
}
var be = G(I, "WeakMap");
function Kn(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Un = 800, Gn = 16, zn = Date.now;
function Bn(e) {
  var t = 0, n = 0;
  return function() {
    var r = zn(), o = Gn - (r - n);
    if (n = r, o > 0) {
      if (++t >= Un)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Hn(e) {
  return function() {
    return e;
  };
}
var re = function() {
  try {
    var e = G(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), qn = re ? function(e, t) {
  return re(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Hn(t),
    writable: !0
  });
} : Ot, Jn = Bn(qn);
function Xn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Wn = 9007199254740991, Yn = /^(?:0|[1-9]\d*)$/;
function $t(e, t) {
  var n = typeof e;
  return t = t ?? Wn, !!t && (n == "number" || n != "symbol" && Yn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Oe(e, t, n) {
  t == "__proto__" && re ? re(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Ae(e, t) {
  return e === t || e !== e && t !== t;
}
var Zn = Object.prototype, Qn = Zn.hasOwnProperty;
function St(e, t, n) {
  var r = e[t];
  (!(Qn.call(e, t) && Ae(r, n)) || n === void 0 && !(t in e)) && Oe(e, t, n);
}
function Vn(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], u = void 0;
    u === void 0 && (u = e[s]), o ? Oe(n, s, u) : St(n, s, u);
  }
  return n;
}
var Je = Math.max;
function kn(e, t, n) {
  return t = Je(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = Je(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(a), Kn(e, this, s);
  };
}
var er = 9007199254740991;
function $e(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= er;
}
function xt(e) {
  return e != null && $e(e.length) && !At(e);
}
var tr = Object.prototype;
function Ct(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || tr;
  return e === n;
}
function nr(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var rr = "[object Arguments]";
function Xe(e) {
  return R(e) && K(e) == rr;
}
var jt = Object.prototype, ir = jt.hasOwnProperty, or = jt.propertyIsEnumerable, Se = Xe(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xe : function(e) {
  return R(e) && ir.call(e, "callee") && !or.call(e, "callee");
};
function ar() {
  return !1;
}
var Et = typeof exports == "object" && exports && !exports.nodeType && exports, We = Et && typeof module == "object" && module && !module.nodeType && module, sr = We && We.exports === Et, Ye = sr ? I.Buffer : void 0, ur = Ye ? Ye.isBuffer : void 0, ie = ur || ar, lr = "[object Arguments]", cr = "[object Array]", fr = "[object Boolean]", pr = "[object Date]", gr = "[object Error]", dr = "[object Function]", _r = "[object Map]", hr = "[object Number]", br = "[object Object]", yr = "[object RegExp]", mr = "[object Set]", vr = "[object String]", Tr = "[object WeakMap]", wr = "[object ArrayBuffer]", Pr = "[object DataView]", Or = "[object Float32Array]", Ar = "[object Float64Array]", $r = "[object Int8Array]", Sr = "[object Int16Array]", xr = "[object Int32Array]", Cr = "[object Uint8Array]", jr = "[object Uint8ClampedArray]", Er = "[object Uint16Array]", Ir = "[object Uint32Array]", m = {};
m[Or] = m[Ar] = m[$r] = m[Sr] = m[xr] = m[Cr] = m[jr] = m[Er] = m[Ir] = !0;
m[lr] = m[cr] = m[wr] = m[fr] = m[Pr] = m[pr] = m[gr] = m[dr] = m[_r] = m[hr] = m[br] = m[yr] = m[mr] = m[vr] = m[Tr] = !1;
function Fr(e) {
  return R(e) && $e(e.length) && !!m[K(e)];
}
function xe(e) {
  return function(t) {
    return e(t);
  };
}
var It = typeof exports == "object" && exports && !exports.nodeType && exports, W = It && typeof module == "object" && module && !module.nodeType && module, Mr = W && W.exports === It, ge = Mr && vt.process, q = function() {
  try {
    var e = W && W.require && W.require("util").types;
    return e || ge && ge.binding && ge.binding("util");
  } catch {
  }
}(), Ze = q && q.isTypedArray, Ft = Ze ? xe(Ze) : Fr, Rr = Object.prototype, Lr = Rr.hasOwnProperty;
function Mt(e, t) {
  var n = x(e), r = !n && Se(e), o = !n && !r && ie(e), i = !n && !r && !o && Ft(e), a = n || r || o || i, s = a ? nr(e.length, String) : [], u = s.length;
  for (var l in e)
    (t || Lr.call(e, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    $t(l, u))) && s.push(l);
  return s;
}
function Rt(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Dr = Rt(Object.keys, Object), Nr = Object.prototype, Kr = Nr.hasOwnProperty;
function Ur(e) {
  if (!Ct(e))
    return Dr(e);
  var t = [];
  for (var n in Object(e))
    Kr.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ce(e) {
  return xt(e) ? Mt(e) : Ur(e);
}
function Gr(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var zr = Object.prototype, Br = zr.hasOwnProperty;
function Hr(e) {
  if (!V(e))
    return Gr(e);
  var t = Ct(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Br.call(e, r)) || n.push(r);
  return n;
}
function qr(e) {
  return xt(e) ? Mt(e, !0) : Hr(e);
}
var Jr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xr = /^\w*$/;
function je(e, t) {
  if (x(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Pe(e) ? !0 : Xr.test(e) || !Jr.test(e) || t != null && e in Object(t);
}
var Y = G(Object, "create");
function Wr() {
  this.__data__ = Y ? Y(null) : {}, this.size = 0;
}
function Yr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Zr = "__lodash_hash_undefined__", Qr = Object.prototype, Vr = Qr.hasOwnProperty;
function kr(e) {
  var t = this.__data__;
  if (Y) {
    var n = t[e];
    return n === Zr ? void 0 : n;
  }
  return Vr.call(t, e) ? t[e] : void 0;
}
var ei = Object.prototype, ti = ei.hasOwnProperty;
function ni(e) {
  var t = this.__data__;
  return Y ? t[e] !== void 0 : ti.call(t, e);
}
var ri = "__lodash_hash_undefined__";
function ii(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Y && t === void 0 ? ri : t, this;
}
function N(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
N.prototype.clear = Wr;
N.prototype.delete = Yr;
N.prototype.get = kr;
N.prototype.has = ni;
N.prototype.set = ii;
function oi() {
  this.__data__ = [], this.size = 0;
}
function ue(e, t) {
  for (var n = e.length; n--; )
    if (Ae(e[n][0], t))
      return n;
  return -1;
}
var ai = Array.prototype, si = ai.splice;
function ui(e) {
  var t = this.__data__, n = ue(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : si.call(t, n, 1), --this.size, !0;
}
function li(e) {
  var t = this.__data__, n = ue(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ci(e) {
  return ue(this.__data__, e) > -1;
}
function fi(e, t) {
  var n = this.__data__, r = ue(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function L(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
L.prototype.clear = oi;
L.prototype.delete = ui;
L.prototype.get = li;
L.prototype.has = ci;
L.prototype.set = fi;
var Z = G(I, "Map");
function pi() {
  this.size = 0, this.__data__ = {
    hash: new N(),
    map: new (Z || L)(),
    string: new N()
  };
}
function gi(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function le(e, t) {
  var n = e.__data__;
  return gi(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function di(e) {
  var t = le(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function _i(e) {
  return le(this, e).get(e);
}
function hi(e) {
  return le(this, e).has(e);
}
function bi(e, t) {
  var n = le(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function D(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
D.prototype.clear = pi;
D.prototype.delete = di;
D.prototype.get = _i;
D.prototype.has = hi;
D.prototype.set = bi;
var yi = "Expected a function";
function Ee(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(yi);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (Ee.Cache || D)(), n;
}
Ee.Cache = D;
var mi = 500;
function vi(e) {
  var t = Ee(e, function(r) {
    return n.size === mi && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Ti = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wi = /\\(\\)?/g, Pi = vi(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ti, function(n, r, o, i) {
    t.push(o ? i.replace(wi, "$1") : r || n);
  }), t;
});
function Oi(e) {
  return e == null ? "" : Pt(e);
}
function ce(e, t) {
  return x(e) ? e : je(e, t) ? [e] : Pi(Oi(e));
}
function k(e) {
  if (typeof e == "string" || Pe(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ie(e, t) {
  t = ce(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[k(t[n++])];
  return n && n == r ? e : void 0;
}
function Ai(e, t, n) {
  var r = e == null ? void 0 : Ie(e, t);
  return r === void 0 ? n : r;
}
function Fe(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Qe = O ? O.isConcatSpreadable : void 0;
function $i(e) {
  return x(e) || Se(e) || !!(Qe && e && e[Qe]);
}
function Si(e, t, n, r, o) {
  var i = -1, a = e.length;
  for (n || (n = $i), o || (o = []); ++i < a; ) {
    var s = e[i];
    n(s) ? Fe(o, s) : o[o.length] = s;
  }
  return o;
}
function xi(e) {
  var t = e == null ? 0 : e.length;
  return t ? Si(e) : [];
}
function Ci(e) {
  return Jn(kn(e, void 0, xi), e + "");
}
var Lt = Rt(Object.getPrototypeOf, Object), ji = "[object Object]", Ei = Function.prototype, Ii = Object.prototype, Dt = Ei.toString, Fi = Ii.hasOwnProperty, Mi = Dt.call(Object);
function ye(e) {
  if (!R(e) || K(e) != ji)
    return !1;
  var t = Lt(e);
  if (t === null)
    return !0;
  var n = Fi.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Dt.call(n) == Mi;
}
function Ri(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++r < o; )
    i[r] = e[r + t];
  return i;
}
function Li() {
  this.__data__ = new L(), this.size = 0;
}
function Di(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Ni(e) {
  return this.__data__.get(e);
}
function Ki(e) {
  return this.__data__.has(e);
}
var Ui = 200;
function Gi(e, t) {
  var n = this.__data__;
  if (n instanceof L) {
    var r = n.__data__;
    if (!Z || r.length < Ui - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new D(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function E(e) {
  var t = this.__data__ = new L(e);
  this.size = t.size;
}
E.prototype.clear = Li;
E.prototype.delete = Di;
E.prototype.get = Ni;
E.prototype.has = Ki;
E.prototype.set = Gi;
var Nt = typeof exports == "object" && exports && !exports.nodeType && exports, Ve = Nt && typeof module == "object" && module && !module.nodeType && module, zi = Ve && Ve.exports === Nt, ke = zi ? I.Buffer : void 0;
ke && ke.allocUnsafe;
function Bi(e, t) {
  return e.slice();
}
function Hi(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function Kt() {
  return [];
}
var qi = Object.prototype, Ji = qi.propertyIsEnumerable, et = Object.getOwnPropertySymbols, Ut = et ? function(e) {
  return e == null ? [] : (e = Object(e), Hi(et(e), function(t) {
    return Ji.call(e, t);
  }));
} : Kt, Xi = Object.getOwnPropertySymbols, Wi = Xi ? function(e) {
  for (var t = []; e; )
    Fe(t, Ut(e)), e = Lt(e);
  return t;
} : Kt;
function Gt(e, t, n) {
  var r = t(e);
  return x(e) ? r : Fe(r, n(e));
}
function tt(e) {
  return Gt(e, Ce, Ut);
}
function zt(e) {
  return Gt(e, qr, Wi);
}
var me = G(I, "DataView"), ve = G(I, "Promise"), Te = G(I, "Set"), nt = "[object Map]", Yi = "[object Object]", rt = "[object Promise]", it = "[object Set]", ot = "[object WeakMap]", at = "[object DataView]", Zi = U(me), Qi = U(Z), Vi = U(ve), ki = U(Te), eo = U(be), S = K;
(me && S(new me(new ArrayBuffer(1))) != at || Z && S(new Z()) != nt || ve && S(ve.resolve()) != rt || Te && S(new Te()) != it || be && S(new be()) != ot) && (S = function(e) {
  var t = K(e), n = t == Yi ? e.constructor : void 0, r = n ? U(n) : "";
  if (r)
    switch (r) {
      case Zi:
        return at;
      case Qi:
        return nt;
      case Vi:
        return rt;
      case ki:
        return it;
      case eo:
        return ot;
    }
  return t;
});
var to = Object.prototype, no = to.hasOwnProperty;
function ro(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && no.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var oe = I.Uint8Array;
function Me(e) {
  var t = new e.constructor(e.byteLength);
  return new oe(t).set(new oe(e)), t;
}
function io(e, t) {
  var n = Me(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var oo = /\w*$/;
function ao(e) {
  var t = new e.constructor(e.source, oo.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var st = O ? O.prototype : void 0, ut = st ? st.valueOf : void 0;
function so(e) {
  return ut ? Object(ut.call(e)) : {};
}
function uo(e, t) {
  var n = Me(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
var lo = "[object Boolean]", co = "[object Date]", fo = "[object Map]", po = "[object Number]", go = "[object RegExp]", _o = "[object Set]", ho = "[object String]", bo = "[object Symbol]", yo = "[object ArrayBuffer]", mo = "[object DataView]", vo = "[object Float32Array]", To = "[object Float64Array]", wo = "[object Int8Array]", Po = "[object Int16Array]", Oo = "[object Int32Array]", Ao = "[object Uint8Array]", $o = "[object Uint8ClampedArray]", So = "[object Uint16Array]", xo = "[object Uint32Array]";
function Co(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case yo:
      return Me(e);
    case lo:
    case co:
      return new r(+e);
    case mo:
      return io(e);
    case vo:
    case To:
    case wo:
    case Po:
    case Oo:
    case Ao:
    case $o:
    case So:
    case xo:
      return uo(e);
    case fo:
      return new r();
    case po:
    case ho:
      return new r(e);
    case go:
      return ao(e);
    case _o:
      return new r();
    case bo:
      return so(e);
  }
}
var jo = "[object Map]";
function Eo(e) {
  return R(e) && S(e) == jo;
}
var lt = q && q.isMap, Io = lt ? xe(lt) : Eo, Fo = "[object Set]";
function Mo(e) {
  return R(e) && S(e) == Fo;
}
var ct = q && q.isSet, Ro = ct ? xe(ct) : Mo, Bt = "[object Arguments]", Lo = "[object Array]", Do = "[object Boolean]", No = "[object Date]", Ko = "[object Error]", Ht = "[object Function]", Uo = "[object GeneratorFunction]", Go = "[object Map]", zo = "[object Number]", qt = "[object Object]", Bo = "[object RegExp]", Ho = "[object Set]", qo = "[object String]", Jo = "[object Symbol]", Xo = "[object WeakMap]", Wo = "[object ArrayBuffer]", Yo = "[object DataView]", Zo = "[object Float32Array]", Qo = "[object Float64Array]", Vo = "[object Int8Array]", ko = "[object Int16Array]", ea = "[object Int32Array]", ta = "[object Uint8Array]", na = "[object Uint8ClampedArray]", ra = "[object Uint16Array]", ia = "[object Uint32Array]", b = {};
b[Bt] = b[Lo] = b[Wo] = b[Yo] = b[Do] = b[No] = b[Zo] = b[Qo] = b[Vo] = b[ko] = b[ea] = b[Go] = b[zo] = b[qt] = b[Bo] = b[Ho] = b[qo] = b[Jo] = b[ta] = b[na] = b[ra] = b[ia] = !0;
b[Ko] = b[Ht] = b[Xo] = !1;
function te(e, t, n, r, o, i) {
  var a;
  if (n && (a = o ? n(e, r, o, i) : n(e)), a !== void 0)
    return a;
  if (!V(e))
    return e;
  var s = x(e);
  if (s)
    a = ro(e);
  else {
    var u = S(e), l = u == Ht || u == Uo;
    if (ie(e))
      return Bi(e);
    if (u == qt || u == Bt || l && !o)
      a = {};
    else {
      if (!b[u])
        return o ? e : {};
      a = Co(e, u);
    }
  }
  i || (i = new E());
  var d = i.get(e);
  if (d)
    return d;
  i.set(e, a), Ro(e) ? e.forEach(function(f) {
    a.add(te(f, t, n, f, e, i));
  }) : Io(e) && e.forEach(function(f, _) {
    a.set(_, te(f, t, n, _, e, i));
  });
  var h = zt, c = s ? void 0 : h(e);
  return Xn(c || e, function(f, _) {
    c && (_ = f, f = e[_]), St(a, _, te(f, t, n, _, e, i));
  }), a;
}
var oa = "__lodash_hash_undefined__";
function aa(e) {
  return this.__data__.set(e, oa), this;
}
function sa(e) {
  return this.__data__.has(e);
}
function ae(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new D(); ++t < n; )
    this.add(e[t]);
}
ae.prototype.add = ae.prototype.push = aa;
ae.prototype.has = sa;
function ua(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function la(e, t) {
  return e.has(t);
}
var ca = 1, fa = 2;
function Jt(e, t, n, r, o, i) {
  var a = n & ca, s = e.length, u = t.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = i.get(e), d = i.get(t);
  if (l && d)
    return l == t && d == e;
  var h = -1, c = !0, f = n & fa ? new ae() : void 0;
  for (i.set(e, t), i.set(t, e); ++h < s; ) {
    var _ = e[h], y = t[h];
    if (r)
      var p = a ? r(y, _, h, t, e, i) : r(_, y, h, e, t, i);
    if (p !== void 0) {
      if (p)
        continue;
      c = !1;
      break;
    }
    if (f) {
      if (!ua(t, function(v, T) {
        if (!la(f, T) && (_ === v || o(_, v, n, r, i)))
          return f.push(T);
      })) {
        c = !1;
        break;
      }
    } else if (!(_ === y || o(_, y, n, r, i))) {
      c = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), c;
}
function pa(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function ga(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var da = 1, _a = 2, ha = "[object Boolean]", ba = "[object Date]", ya = "[object Error]", ma = "[object Map]", va = "[object Number]", Ta = "[object RegExp]", wa = "[object Set]", Pa = "[object String]", Oa = "[object Symbol]", Aa = "[object ArrayBuffer]", $a = "[object DataView]", ft = O ? O.prototype : void 0, de = ft ? ft.valueOf : void 0;
function Sa(e, t, n, r, o, i, a) {
  switch (n) {
    case $a:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Aa:
      return !(e.byteLength != t.byteLength || !i(new oe(e), new oe(t)));
    case ha:
    case ba:
    case va:
      return Ae(+e, +t);
    case ya:
      return e.name == t.name && e.message == t.message;
    case Ta:
    case Pa:
      return e == t + "";
    case ma:
      var s = pa;
    case wa:
      var u = r & da;
      if (s || (s = ga), e.size != t.size && !u)
        return !1;
      var l = a.get(e);
      if (l)
        return l == t;
      r |= _a, a.set(e, t);
      var d = Jt(s(e), s(t), r, o, i, a);
      return a.delete(e), d;
    case Oa:
      if (de)
        return de.call(e) == de.call(t);
  }
  return !1;
}
var xa = 1, Ca = Object.prototype, ja = Ca.hasOwnProperty;
function Ea(e, t, n, r, o, i) {
  var a = n & xa, s = tt(e), u = s.length, l = tt(t), d = l.length;
  if (u != d && !a)
    return !1;
  for (var h = u; h--; ) {
    var c = s[h];
    if (!(a ? c in t : ja.call(t, c)))
      return !1;
  }
  var f = i.get(e), _ = i.get(t);
  if (f && _)
    return f == t && _ == e;
  var y = !0;
  i.set(e, t), i.set(t, e);
  for (var p = a; ++h < u; ) {
    c = s[h];
    var v = e[c], T = t[c];
    if (r)
      var P = a ? r(T, v, c, t, e, i) : r(v, T, c, e, t, i);
    if (!(P === void 0 ? v === T || o(v, T, n, r, i) : P)) {
      y = !1;
      break;
    }
    p || (p = c == "constructor");
  }
  if (y && !p) {
    var C = e.constructor, A = t.constructor;
    C != A && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof A == "function" && A instanceof A) && (y = !1);
  }
  return i.delete(e), i.delete(t), y;
}
var Ia = 1, pt = "[object Arguments]", gt = "[object Array]", ee = "[object Object]", Fa = Object.prototype, dt = Fa.hasOwnProperty;
function Ma(e, t, n, r, o, i) {
  var a = x(e), s = x(t), u = a ? gt : S(e), l = s ? gt : S(t);
  u = u == pt ? ee : u, l = l == pt ? ee : l;
  var d = u == ee, h = l == ee, c = u == l;
  if (c && ie(e)) {
    if (!ie(t))
      return !1;
    a = !0, d = !1;
  }
  if (c && !d)
    return i || (i = new E()), a || Ft(e) ? Jt(e, t, n, r, o, i) : Sa(e, t, u, n, r, o, i);
  if (!(n & Ia)) {
    var f = d && dt.call(e, "__wrapped__"), _ = h && dt.call(t, "__wrapped__");
    if (f || _) {
      var y = f ? e.value() : e, p = _ ? t.value() : t;
      return i || (i = new E()), o(y, p, n, r, i);
    }
  }
  return c ? (i || (i = new E()), Ea(e, t, n, r, o, i)) : !1;
}
function Re(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !R(e) && !R(t) ? e !== e && t !== t : Ma(e, t, n, r, Re, o);
}
var Ra = 1, La = 2;
function Da(e, t, n, r) {
  var o = n.length, i = o;
  if (e == null)
    return !i;
  for (e = Object(e); o--; ) {
    var a = n[o];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++o < i; ) {
    a = n[o];
    var s = a[0], u = e[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in e))
        return !1;
    } else {
      var d = new E(), h;
      if (!(h === void 0 ? Re(l, u, Ra | La, r, d) : h))
        return !1;
    }
  }
  return !0;
}
function Xt(e) {
  return e === e && !V(e);
}
function Na(e) {
  for (var t = Ce(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Xt(o)];
  }
  return t;
}
function Wt(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Ka(e) {
  var t = Na(e);
  return t.length == 1 && t[0][2] ? Wt(t[0][0], t[0][1]) : function(n) {
    return n === e || Da(n, e, t);
  };
}
function Ua(e, t) {
  return e != null && t in Object(e);
}
function Ga(e, t, n) {
  t = ce(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = k(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && $e(o) && $t(a, o) && (x(e) || Se(e)));
}
function za(e, t) {
  return e != null && Ga(e, t, Ua);
}
var Ba = 1, Ha = 2;
function qa(e, t) {
  return je(e) && Xt(t) ? Wt(k(e), t) : function(n) {
    var r = Ai(n, e);
    return r === void 0 && r === t ? za(n, e) : Re(t, r, Ba | Ha);
  };
}
function Ja(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Xa(e) {
  return function(t) {
    return Ie(t, e);
  };
}
function Wa(e) {
  return je(e) ? Ja(k(e)) : Xa(e);
}
function Ya(e) {
  return typeof e == "function" ? e : e == null ? Ot : typeof e == "object" ? x(e) ? qa(e[0], e[1]) : Ka(e) : Wa(e);
}
function Za(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var u = a[++o];
      if (n(i[u], u, i) === !1)
        break;
    }
    return t;
  };
}
var Qa = Za();
function Va(e, t) {
  return e && Qa(e, t, Ce);
}
function ka(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function es(e, t) {
  return t.length < 2 ? e : Ie(e, Ri(t, 0, -1));
}
function ts(e, t) {
  var n = {};
  return t = Ya(t), Va(e, function(r, o, i) {
    Oe(n, t(r, o, i), r);
  }), n;
}
function ns(e, t) {
  return t = ce(t, e), e = es(e, t), e == null || delete e[k(ka(t))];
}
function rs(e) {
  return ye(e) ? void 0 : e;
}
var is = 1, os = 2, as = 4, Yt = Ci(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = wt(t, function(i) {
    return i = ce(i, e), r || (r = i.length > 1), i;
  }), Vn(e, zt(e), n), r && (n = te(n, is | os | as, rs));
  for (var o = t.length; o--; )
    ns(n, t[o]);
  return n;
});
async function ss() {
  window.ms_globals || (window.ms_globals = {}), window.ms_globals.initializePromise || (window.ms_globals.initializePromise = new Promise((e) => {
    window.ms_globals.initialize = () => {
      e();
    };
  })), await window.ms_globals.initializePromise;
}
async function us(e) {
  return await ss(), e().then((t) => t.default);
}
const Zt = [
  "interactive",
  "gradio",
  "server",
  "target",
  "theme_mode",
  "root",
  "name",
  // 'visible',
  // 'elem_id',
  // 'elem_classes',
  // 'elem_style',
  "_internal",
  "props",
  // 'value',
  "_selectable",
  "loading_status",
  "value_is_output"
], ls = Zt.concat(["attached_events"]);
function cs(e, t = {}, n = !1) {
  return ts(Yt(e, n ? [] : Zt), (r, o) => t[o] || pn(o));
}
function _t(e, t) {
  const {
    gradio: n,
    _internal: r,
    restProps: o,
    originalRestProps: i,
    ...a
  } = e, s = (o == null ? void 0 : o.attachedEvents) || [];
  return {
    ...Array.from(/* @__PURE__ */ new Set([...Object.keys(r).map((u) => {
      const l = u.match(/bind_(.+)_event/);
      return l && l[1] ? l[1] : null;
    }).filter(Boolean), ...s.map((u) => t && t[u] ? t[u] : u)])).reduce((u, l) => {
      const d = l.split("_"), h = (...f) => {
        const _ = f.map((p) => f && typeof p == "object" && (p.nativeEvent || p instanceof Event) ? {
          type: p.type,
          detail: p.detail,
          timestamp: p.timeStamp,
          clientX: p.clientX,
          clientY: p.clientY,
          targetId: p.target.id,
          targetClassName: p.target.className,
          altKey: p.altKey,
          ctrlKey: p.ctrlKey,
          shiftKey: p.shiftKey,
          metaKey: p.metaKey
        } : p);
        let y;
        try {
          y = JSON.parse(JSON.stringify(_));
        } catch {
          let p = function(v) {
            try {
              return JSON.stringify(v), v;
            } catch {
              return ye(v) ? Object.fromEntries(Object.entries(v).map(([T, P]) => {
                try {
                  return JSON.stringify(P), [T, P];
                } catch {
                  return ye(P) ? [T, Object.fromEntries(Object.entries(P).filter(([C, A]) => {
                    try {
                      return JSON.stringify(A), !0;
                    } catch {
                      return !1;
                    }
                  }))] : null;
                }
              }).filter(Boolean)) : {};
            }
          };
          y = _.map((v) => p(v));
        }
        return n.dispatch(l.replace(/[A-Z]/g, (p) => "_" + p.toLowerCase()), {
          payload: y,
          component: {
            ...a,
            ...Yt(i, ls)
          }
        });
      };
      if (d.length > 1) {
        let f = {
          ...a.props[d[0]] || (o == null ? void 0 : o[d[0]]) || {}
        };
        u[d[0]] = f;
        for (let y = 1; y < d.length - 1; y++) {
          const p = {
            ...a.props[d[y]] || (o == null ? void 0 : o[d[y]]) || {}
          };
          f[d[y]] = p, f = p;
        }
        const _ = d[d.length - 1];
        return f[`on${_.slice(0, 1).toUpperCase()}${_.slice(1)}`] = h, u;
      }
      const c = d[0];
      return u[`on${c.slice(0, 1).toUpperCase()}${c.slice(1)}`] = h, u;
    }, {}),
    __render_eventProps: {
      props: e,
      eventsMapping: t
    }
  };
}
function ne() {
}
function fs(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ps(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return ne;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Qt(e) {
  let t;
  return ps(e, (n) => t = n)(), t;
}
const B = [];
function M(e, t = ne) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (fs(e, s) && (e = s, n)) {
      const u = !B.length;
      for (const l of r)
        l[1](), B.push(l, e);
      if (u) {
        for (let l = 0; l < B.length; l += 2)
          B[l][0](B[l + 1]);
        B.length = 0;
      }
    }
  }
  function i(s) {
    o(s(e));
  }
  function a(s, u = ne) {
    const l = [s, u];
    return r.add(l), r.size === 1 && (n = t(o, i) || ne), s(e), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return {
    set: o,
    update: i,
    subscribe: a
  };
}
const {
  getContext: gs,
  setContext: tu
} = window.__gradio__svelte__internal, ds = "$$ms-gr-loading-status-key";
function _s() {
  const e = window.ms_globals.loadingKey++, t = gs(ds);
  return (n) => {
    if (!t || !n)
      return;
    const {
      loadingStatusMap: r,
      options: o
    } = t, {
      generating: i,
      error: a
    } = Qt(o);
    (n == null ? void 0 : n.status) === "pending" || a && (n == null ? void 0 : n.status) === "error" || (i && (n == null ? void 0 : n.status)) === "generating" ? r.update(({
      map: s
    }) => (s.set(e, n), {
      map: s
    })) : r.update(({
      map: s
    }) => (s.delete(e), {
      map: s
    }));
  };
}
const {
  getContext: fe,
  setContext: J
} = window.__gradio__svelte__internal, hs = "$$ms-gr-slots-key";
function bs() {
  const e = M({});
  return J(hs, e);
}
const Vt = "$$ms-gr-slot-params-mapping-fn-key";
function ys() {
  return fe(Vt);
}
function ms(e) {
  return J(Vt, M(e));
}
const vs = "$$ms-gr-slot-params-key";
function Ts() {
  const e = J(vs, M({}));
  return (t, n) => {
    e.update((r) => typeof n == "function" ? {
      ...r,
      [t]: n(r[t])
    } : {
      ...r,
      [t]: n
    });
  };
}
const kt = "$$ms-gr-sub-index-context-key";
function ws() {
  return fe(kt) || null;
}
function ht(e) {
  return J(kt, e);
}
function Ps(e, t, n) {
  if (!Reflect.has(e, "as_item") || !Reflect.has(e, "_internal"))
    throw new Error("`as_item` and `_internal` is required");
  const r = As(), o = ys();
  ms().set(void 0);
  const a = $s({
    slot: void 0,
    index: e._internal.index,
    subIndex: e._internal.subIndex
  }), s = ws();
  typeof s == "number" && ht(void 0);
  const u = _s();
  typeof e._internal.subIndex == "number" && ht(e._internal.subIndex), r && r.subscribe((c) => {
    a.slotKey.set(c);
  }), Os();
  const l = e.as_item, d = (c, f) => c ? {
    ...cs({
      ...c
    }, t),
    __render_slotParamsMappingFn: o ? Qt(o) : void 0,
    __render_as_item: f,
    __render_restPropsMapping: t
  } : void 0, h = M({
    ...e,
    _internal: {
      ...e._internal,
      index: s ?? e._internal.index
    },
    restProps: d(e.restProps, l),
    originalRestProps: e.restProps
  });
  return o && o.subscribe((c) => {
    h.update((f) => ({
      ...f,
      restProps: {
        ...f.restProps,
        __slotParamsMappingFn: c
      }
    }));
  }), [h, (c) => {
    var f;
    u((f = c.restProps) == null ? void 0 : f.loading_status), h.set({
      ...c,
      _internal: {
        ...c._internal,
        index: s ?? c._internal.index
      },
      restProps: d(c.restProps, c.as_item),
      originalRestProps: c.restProps
    });
  }];
}
const en = "$$ms-gr-slot-key";
function Os() {
  J(en, M(void 0));
}
function As() {
  return fe(en);
}
const tn = "$$ms-gr-component-slot-context-key";
function $s({
  slot: e,
  index: t,
  subIndex: n
}) {
  return J(tn, {
    slotKey: M(e),
    slotIndex: M(t),
    subSlotIndex: M(n)
  });
}
function nu() {
  return fe(tn);
}
new Intl.Collator(0, {
  numeric: 1
}).compare;
async function Ss(e, t) {
  return e.map((n) => new xs({
    path: n.name,
    orig_name: n.name,
    blob: n,
    size: n.size,
    mime_type: n.type,
    is_stream: t
  }));
}
class xs {
  constructor({
    path: t,
    url: n,
    orig_name: r,
    size: o,
    blob: i,
    is_stream: a,
    mime_type: s,
    alt_text: u,
    b64: l
  }) {
    $(this, "path");
    $(this, "url");
    $(this, "orig_name");
    $(this, "size");
    $(this, "blob");
    $(this, "is_stream");
    $(this, "mime_type");
    $(this, "alt_text");
    $(this, "b64");
    $(this, "meta", {
      _type: "gradio.FileData"
    });
    this.path = t, this.url = n, this.orig_name = r, this.size = o, this.blob = n ? void 0 : i, this.is_stream = a, this.mime_type = s, this.alt_text = u, this.b64 = l;
  }
}
typeof process < "u" && process.versions && process.versions.node;
var F;
class ru extends TransformStream {
  /** Constructs a new instance. */
  constructor(n = {
    allowCR: !1
  }) {
    super({
      transform: (r, o) => {
        for (r = z(this, F) + r; ; ) {
          const i = r.indexOf(`
`), a = n.allowCR ? r.indexOf("\r") : -1;
          if (a !== -1 && a !== r.length - 1 && (i === -1 || i - 1 > a)) {
            o.enqueue(r.slice(0, a)), r = r.slice(a + 1);
            continue;
          }
          if (i === -1) break;
          const s = r[i - 1] === "\r" ? i - 1 : i;
          o.enqueue(r.slice(0, s)), r = r.slice(i + 1);
        }
        Ge(this, F, r);
      },
      flush: (r) => {
        if (z(this, F) === "") return;
        const o = n.allowCR && z(this, F).endsWith("\r") ? z(this, F).slice(0, -1) : z(this, F);
        r.enqueue(o);
      }
    });
    Ue(this, F, "");
  }
}
F = new WeakMap();
function Cs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nn = {
  exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (i = o(i, r(s)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return n.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var a = "";
      for (var s in i)
        t.call(i, s) && i[s] && (a = o(a, s));
      return a;
    }
    function o(i, a) {
      return a ? i ? i + " " + a : i + a : i;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(nn);
var js = nn.exports;
const bt = /* @__PURE__ */ Cs(js), {
  SvelteComponent: Es,
  assign: we,
  check_outros: Is,
  claim_component: Fs,
  component_subscribe: _e,
  compute_rest_props: yt,
  create_component: Ms,
  create_slot: Rs,
  destroy_component: Ls,
  detach: rn,
  empty: se,
  exclude_internal_props: Ds,
  flush: j,
  get_all_dirty_from_scope: Ns,
  get_slot_changes: Ks,
  get_spread_object: he,
  get_spread_update: Us,
  group_outros: Gs,
  handle_promise: zs,
  init: Bs,
  insert_hydration: on,
  mount_component: Hs,
  noop: w,
  safe_not_equal: qs,
  transition_in: H,
  transition_out: Q,
  update_await_block_branch: Js,
  update_slot_base: Xs
} = window.__gradio__svelte__internal;
function mt(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Qs,
    then: Ys,
    catch: Ws,
    value: 24,
    blocks: [, , ,]
  };
  return zs(
    /*AwaitedSender*/
    e[3],
    r
  ), {
    c() {
      t = se(), r.block.c();
    },
    l(o) {
      t = se(), r.block.l(o);
    },
    m(o, i) {
      on(o, t, i), r.block.m(o, r.anchor = i), r.mount = () => t.parentNode, r.anchor = t, n = !0;
    },
    p(o, i) {
      e = o, Js(r, e, i);
    },
    i(o) {
      n || (H(r.block), n = !0);
    },
    o(o) {
      for (let i = 0; i < 3; i += 1) {
        const a = r.blocks[i];
        Q(a);
      }
      n = !1;
    },
    d(o) {
      o && rn(t), r.block.d(o), r.token = null, r = null;
    }
  };
}
function Ws(e) {
  return {
    c: w,
    l: w,
    m: w,
    p: w,
    i: w,
    o: w,
    d: w
  };
}
function Ys(e) {
  let t, n;
  const r = [
    {
      style: (
        /*$mergedProps*/
        e[1].elem_style
      )
    },
    {
      className: bt(
        /*$mergedProps*/
        e[1].elem_classes,
        "ms-gr-antdx-sender"
      )
    },
    {
      id: (
        /*$mergedProps*/
        e[1].elem_id
      )
    },
    /*$mergedProps*/
    e[1].restProps,
    /*$mergedProps*/
    e[1].props,
    _t(
      /*$mergedProps*/
      e[1],
      {
        key_press: "keyPress",
        paste_file: "pasteFile",
        key_down: "keyDown",
        allow_speech_recording_change: "allowSpeech_recordingChange"
      }
    ),
    {
      slots: (
        /*$slots*/
        e[2]
      )
    },
    {
      value: (
        /*$mergedProps*/
        e[1].props.value ?? /*$mergedProps*/
        e[1].value
      )
    },
    {
      setSlotParams: (
        /*setSlotParams*/
        e[6]
      )
    },
    {
      onValueChange: (
        /*func*/
        e[20]
      )
    },
    {
      upload: (
        /*upload*/
        e[8]
      )
    }
  ];
  let o = {
    $$slots: {
      default: [Zs]
    },
    $$scope: {
      ctx: e
    }
  };
  for (let i = 0; i < r.length; i += 1)
    o = we(o, r[i]);
  return t = new /*Sender*/
  e[24]({
    props: o
  }), {
    c() {
      Ms(t.$$.fragment);
    },
    l(i) {
      Fs(t.$$.fragment, i);
    },
    m(i, a) {
      Hs(t, i, a), n = !0;
    },
    p(i, a) {
      const s = a & /*$mergedProps, $slots, setSlotParams, value, upload*/
      327 ? Us(r, [a & /*$mergedProps*/
      2 && {
        style: (
          /*$mergedProps*/
          i[1].elem_style
        )
      }, a & /*$mergedProps*/
      2 && {
        className: bt(
          /*$mergedProps*/
          i[1].elem_classes,
          "ms-gr-antdx-sender"
        )
      }, a & /*$mergedProps*/
      2 && {
        id: (
          /*$mergedProps*/
          i[1].elem_id
        )
      }, a & /*$mergedProps*/
      2 && he(
        /*$mergedProps*/
        i[1].restProps
      ), a & /*$mergedProps*/
      2 && he(
        /*$mergedProps*/
        i[1].props
      ), a & /*$mergedProps*/
      2 && he(_t(
        /*$mergedProps*/
        i[1],
        {
          key_press: "keyPress",
          paste_file: "pasteFile",
          key_down: "keyDown",
          allow_speech_recording_change: "allowSpeech_recordingChange"
        }
      )), a & /*$slots*/
      4 && {
        slots: (
          /*$slots*/
          i[2]
        )
      }, a & /*$mergedProps*/
      2 && {
        value: (
          /*$mergedProps*/
          i[1].props.value ?? /*$mergedProps*/
          i[1].value
        )
      }, a & /*setSlotParams*/
      64 && {
        setSlotParams: (
          /*setSlotParams*/
          i[6]
        )
      }, a & /*value*/
      1 && {
        onValueChange: (
          /*func*/
          i[20]
        )
      }, a & /*upload*/
      256 && {
        upload: (
          /*upload*/
          i[8]
        )
      }]) : {};
      a & /*$$scope*/
      2097152 && (s.$$scope = {
        dirty: a,
        ctx: i
      }), t.$set(s);
    },
    i(i) {
      n || (H(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Q(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Ls(t, i);
    }
  };
}
function Zs(e) {
  let t;
  const n = (
    /*#slots*/
    e[19].default
  ), r = Rs(
    n,
    e,
    /*$$scope*/
    e[21],
    null
  );
  return {
    c() {
      r && r.c();
    },
    l(o) {
      r && r.l(o);
    },
    m(o, i) {
      r && r.m(o, i), t = !0;
    },
    p(o, i) {
      r && r.p && (!t || i & /*$$scope*/
      2097152) && Xs(
        r,
        n,
        o,
        /*$$scope*/
        o[21],
        t ? Ks(
          n,
          /*$$scope*/
          o[21],
          i,
          null
        ) : Ns(
          /*$$scope*/
          o[21]
        ),
        null
      );
    },
    i(o) {
      t || (H(r, o), t = !0);
    },
    o(o) {
      Q(r, o), t = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Qs(e) {
  return {
    c: w,
    l: w,
    m: w,
    p: w,
    i: w,
    o: w,
    d: w
  };
}
function Vs(e) {
  let t, n, r = (
    /*$mergedProps*/
    e[1].visible && mt(e)
  );
  return {
    c() {
      r && r.c(), t = se();
    },
    l(o) {
      r && r.l(o), t = se();
    },
    m(o, i) {
      r && r.m(o, i), on(o, t, i), n = !0;
    },
    p(o, [i]) {
      /*$mergedProps*/
      o[1].visible ? r ? (r.p(o, i), i & /*$mergedProps*/
      2 && H(r, 1)) : (r = mt(o), r.c(), H(r, 1), r.m(t.parentNode, t)) : r && (Gs(), Q(r, 1, 1, () => {
        r = null;
      }), Is());
    },
    i(o) {
      n || (H(r), n = !0);
    },
    o(o) {
      Q(r), n = !1;
    },
    d(o) {
      o && rn(t), r && r.d(o);
    }
  };
}
function ks(e, t, n) {
  const r = ["gradio", "props", "_internal", "root", "value", "as_item", "visible", "elem_id", "elem_classes", "elem_style"];
  let o = yt(t, r), i, a, s, {
    $$slots: u = {},
    $$scope: l
  } = t;
  const d = us(() => import("./sender-CafxTTlP.js"));
  let {
    gradio: h
  } = t, {
    props: c = {}
  } = t;
  const f = M(c);
  _e(e, f, (g) => n(18, i = g));
  let {
    _internal: _ = {}
  } = t, {
    root: y
  } = t, {
    value: p = ""
  } = t, {
    as_item: v
  } = t, {
    visible: T = !0
  } = t, {
    elem_id: P = ""
  } = t, {
    elem_classes: C = []
  } = t, {
    elem_style: A = {}
  } = t;
  const [Le, an] = Ps({
    gradio: h,
    props: i,
    _internal: _,
    visible: T,
    elem_id: P,
    elem_classes: C,
    elem_style: A,
    as_item: v,
    value: p,
    restProps: o
  });
  _e(e, Le, (g) => n(1, a = g));
  const sn = Ts(), De = bs();
  _e(e, De, (g) => n(2, s = g));
  const un = async (g) => await h.client.upload(await Ss(g), y) || [], ln = (g) => {
    n(0, p = g);
  };
  return e.$$set = (g) => {
    t = we(we({}, t), Ds(g)), n(23, o = yt(t, r)), "gradio" in g && n(9, h = g.gradio), "props" in g && n(10, c = g.props), "_internal" in g && n(11, _ = g._internal), "root" in g && n(12, y = g.root), "value" in g && n(0, p = g.value), "as_item" in g && n(13, v = g.as_item), "visible" in g && n(14, T = g.visible), "elem_id" in g && n(15, P = g.elem_id), "elem_classes" in g && n(16, C = g.elem_classes), "elem_style" in g && n(17, A = g.elem_style), "$$scope" in g && n(21, l = g.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*props*/
    1024 && f.update((g) => ({
      ...g,
      ...c
    })), an({
      gradio: h,
      props: i,
      _internal: _,
      visible: T,
      elem_id: P,
      elem_classes: C,
      elem_style: A,
      as_item: v,
      value: p,
      restProps: o
    });
  }, [p, a, s, d, f, Le, sn, De, un, h, c, _, y, v, T, P, C, A, i, u, ln, l];
}
class iu extends Es {
  constructor(t) {
    super(), Bs(this, t, ks, Vs, qs, {
      gradio: 9,
      props: 10,
      _internal: 11,
      root: 12,
      value: 0,
      as_item: 13,
      visible: 14,
      elem_id: 15,
      elem_classes: 16,
      elem_style: 17
    });
  }
  get gradio() {
    return this.$$.ctx[9];
  }
  set gradio(t) {
    this.$$set({
      gradio: t
    }), j();
  }
  get props() {
    return this.$$.ctx[10];
  }
  set props(t) {
    this.$$set({
      props: t
    }), j();
  }
  get _internal() {
    return this.$$.ctx[11];
  }
  set _internal(t) {
    this.$$set({
      _internal: t
    }), j();
  }
  get root() {
    return this.$$.ctx[12];
  }
  set root(t) {
    this.$$set({
      root: t
    }), j();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({
      value: t
    }), j();
  }
  get as_item() {
    return this.$$.ctx[13];
  }
  set as_item(t) {
    this.$$set({
      as_item: t
    }), j();
  }
  get visible() {
    return this.$$.ctx[14];
  }
  set visible(t) {
    this.$$set({
      visible: t
    }), j();
  }
  get elem_id() {
    return this.$$.ctx[15];
  }
  set elem_id(t) {
    this.$$set({
      elem_id: t
    }), j();
  }
  get elem_classes() {
    return this.$$.ctx[16];
  }
  set elem_classes(t) {
    this.$$set({
      elem_classes: t
    }), j();
  }
  get elem_style() {
    return this.$$.ctx[17];
  }
  set elem_style(t) {
    this.$$set({
      elem_style: t
    }), j();
  }
}
export {
  iu as I,
  V as a,
  Re as b,
  bt as c,
  At as d,
  nu as g,
  Pe as i,
  I as r,
  M as w
};
