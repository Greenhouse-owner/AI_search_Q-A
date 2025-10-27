function nn(e) {
  return e.replace(/(^|_)(\w)/g, (t, n, r, o) => o === 0 ? r.toLowerCase() : r.toUpperCase());
}
var gt = typeof global == "object" && global && global.Object === Object && global, rn = typeof self == "object" && self && self.Object === Object && self, I = gt || rn || Function("return this")(), w = I.Symbol, dt = Object.prototype, on = dt.hasOwnProperty, an = dt.toString, q = w ? w.toStringTag : void 0;
function sn(e) {
  var t = on.call(e, q), n = e[q];
  try {
    e[q] = void 0;
    var r = !0;
  } catch {
  }
  var o = an.call(e);
  return r && (t ? e[q] = n : delete e[q]), o;
}
var un = Object.prototype, ln = un.toString;
function cn(e) {
  return ln.call(e);
}
var fn = "[object Null]", pn = "[object Undefined]", Re = w ? w.toStringTag : void 0;
function D(e) {
  return e == null ? e === void 0 ? pn : fn : Re && Re in Object(e) ? sn(e) : cn(e);
}
function M(e) {
  return e != null && typeof e == "object";
}
var gn = "[object Symbol]";
function ve(e) {
  return typeof e == "symbol" || M(e) && D(e) == gn;
}
function _t(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var S = Array.isArray, Le = w ? w.prototype : void 0, De = Le ? Le.toString : void 0;
function ht(e) {
  if (typeof e == "string")
    return e;
  if (S(e))
    return _t(e, ht) + "";
  if (ve(e))
    return De ? De.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function W(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function bt(e) {
  return e;
}
var dn = "[object AsyncFunction]", _n = "[object Function]", hn = "[object GeneratorFunction]", bn = "[object Proxy]";
function mt(e) {
  if (!W(e))
    return !1;
  var t = D(e);
  return t == _n || t == hn || t == dn || t == bn;
}
var le = I["__core-js_shared__"], Ne = function() {
  var e = /[^.]+$/.exec(le && le.keys && le.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function mn(e) {
  return !!Ne && Ne in e;
}
var yn = Function.prototype, vn = yn.toString;
function N(e) {
  if (e != null) {
    try {
      return vn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Tn = /[\\^$.*+?()[\]{}|]/g, Pn = /^\[object .+?Constructor\]$/, On = Function.prototype, wn = Object.prototype, An = On.toString, $n = wn.hasOwnProperty, Sn = RegExp("^" + An.call($n).replace(Tn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Cn(e) {
  if (!W(e) || mn(e))
    return !1;
  var t = mt(e) ? Sn : Pn;
  return t.test(N(e));
}
function xn(e, t) {
  return e == null ? void 0 : e[t];
}
function K(e, t) {
  var n = xn(e, t);
  return Cn(n) ? n : void 0;
}
var de = K(I, "WeakMap");
function En(e, t, n) {
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
var jn = 800, In = 16, Mn = Date.now;
function Fn(e) {
  var t = 0, n = 0;
  return function() {
    var r = Mn(), o = In - (r - n);
    if (n = r, o > 0) {
      if (++t >= jn)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Rn(e) {
  return function() {
    return e;
  };
}
var ee = function() {
  try {
    var e = K(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ln = ee ? function(e, t) {
  return ee(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Rn(t),
    writable: !0
  });
} : bt, Dn = Fn(Ln);
function Nn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Kn = 9007199254740991, Un = /^(?:0|[1-9]\d*)$/;
function yt(e, t) {
  var n = typeof e;
  return t = t ?? Kn, !!t && (n == "number" || n != "symbol" && Un.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Te(e, t, n) {
  t == "__proto__" && ee ? ee(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Pe(e, t) {
  return e === t || e !== e && t !== t;
}
var Gn = Object.prototype, Bn = Gn.hasOwnProperty;
function vt(e, t, n) {
  var r = e[t];
  (!(Bn.call(e, t) && Pe(r, n)) || n === void 0 && !(t in e)) && Te(e, t, n);
}
function zn(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], u = void 0;
    u === void 0 && (u = e[s]), o ? Te(n, s, u) : vt(n, s, u);
  }
  return n;
}
var Ke = Math.max;
function Hn(e, t, n) {
  return t = Ke(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = Ke(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(a), En(e, this, s);
  };
}
var qn = 9007199254740991;
function Oe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qn;
}
function Tt(e) {
  return e != null && Oe(e.length) && !mt(e);
}
var Jn = Object.prototype;
function Pt(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Jn;
  return e === n;
}
function Xn(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Yn = "[object Arguments]";
function Ue(e) {
  return M(e) && D(e) == Yn;
}
var Ot = Object.prototype, Zn = Ot.hasOwnProperty, Wn = Ot.propertyIsEnumerable, we = Ue(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ue : function(e) {
  return M(e) && Zn.call(e, "callee") && !Wn.call(e, "callee");
};
function Qn() {
  return !1;
}
var wt = typeof exports == "object" && exports && !exports.nodeType && exports, Ge = wt && typeof module == "object" && module && !module.nodeType && module, Vn = Ge && Ge.exports === wt, Be = Vn ? I.Buffer : void 0, kn = Be ? Be.isBuffer : void 0, te = kn || Qn, er = "[object Arguments]", tr = "[object Array]", nr = "[object Boolean]", rr = "[object Date]", or = "[object Error]", ir = "[object Function]", ar = "[object Map]", sr = "[object Number]", ur = "[object Object]", lr = "[object RegExp]", cr = "[object Set]", fr = "[object String]", pr = "[object WeakMap]", gr = "[object ArrayBuffer]", dr = "[object DataView]", _r = "[object Float32Array]", hr = "[object Float64Array]", br = "[object Int8Array]", mr = "[object Int16Array]", yr = "[object Int32Array]", vr = "[object Uint8Array]", Tr = "[object Uint8ClampedArray]", Pr = "[object Uint16Array]", Or = "[object Uint32Array]", y = {};
y[_r] = y[hr] = y[br] = y[mr] = y[yr] = y[vr] = y[Tr] = y[Pr] = y[Or] = !0;
y[er] = y[tr] = y[gr] = y[nr] = y[dr] = y[rr] = y[or] = y[ir] = y[ar] = y[sr] = y[ur] = y[lr] = y[cr] = y[fr] = y[pr] = !1;
function wr(e) {
  return M(e) && Oe(e.length) && !!y[D(e)];
}
function Ae(e) {
  return function(t) {
    return e(t);
  };
}
var At = typeof exports == "object" && exports && !exports.nodeType && exports, J = At && typeof module == "object" && module && !module.nodeType && module, Ar = J && J.exports === At, ce = Ar && gt.process, z = function() {
  try {
    var e = J && J.require && J.require("util").types;
    return e || ce && ce.binding && ce.binding("util");
  } catch {
  }
}(), ze = z && z.isTypedArray, $t = ze ? Ae(ze) : wr, $r = Object.prototype, Sr = $r.hasOwnProperty;
function St(e, t) {
  var n = S(e), r = !n && we(e), o = !n && !r && te(e), i = !n && !r && !o && $t(e), a = n || r || o || i, s = a ? Xn(e.length, String) : [], u = s.length;
  for (var l in e)
    (t || Sr.call(e, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    yt(l, u))) && s.push(l);
  return s;
}
function Ct(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Cr = Ct(Object.keys, Object), xr = Object.prototype, Er = xr.hasOwnProperty;
function jr(e) {
  if (!Pt(e))
    return Cr(e);
  var t = [];
  for (var n in Object(e))
    Er.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function $e(e) {
  return Tt(e) ? St(e) : jr(e);
}
function Ir(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Mr = Object.prototype, Fr = Mr.hasOwnProperty;
function Rr(e) {
  if (!W(e))
    return Ir(e);
  var t = Pt(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Fr.call(e, r)) || n.push(r);
  return n;
}
function Lr(e) {
  return Tt(e) ? St(e, !0) : Rr(e);
}
var Dr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Nr = /^\w*$/;
function Se(e, t) {
  if (S(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ve(e) ? !0 : Nr.test(e) || !Dr.test(e) || t != null && e in Object(t);
}
var X = K(Object, "create");
function Kr() {
  this.__data__ = X ? X(null) : {}, this.size = 0;
}
function Ur(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Gr = "__lodash_hash_undefined__", Br = Object.prototype, zr = Br.hasOwnProperty;
function Hr(e) {
  var t = this.__data__;
  if (X) {
    var n = t[e];
    return n === Gr ? void 0 : n;
  }
  return zr.call(t, e) ? t[e] : void 0;
}
var qr = Object.prototype, Jr = qr.hasOwnProperty;
function Xr(e) {
  var t = this.__data__;
  return X ? t[e] !== void 0 : Jr.call(t, e);
}
var Yr = "__lodash_hash_undefined__";
function Zr(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = X && t === void 0 ? Yr : t, this;
}
function L(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
L.prototype.clear = Kr;
L.prototype.delete = Ur;
L.prototype.get = Hr;
L.prototype.has = Xr;
L.prototype.set = Zr;
function Wr() {
  this.__data__ = [], this.size = 0;
}
function ie(e, t) {
  for (var n = e.length; n--; )
    if (Pe(e[n][0], t))
      return n;
  return -1;
}
var Qr = Array.prototype, Vr = Qr.splice;
function kr(e) {
  var t = this.__data__, n = ie(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Vr.call(t, n, 1), --this.size, !0;
}
function eo(e) {
  var t = this.__data__, n = ie(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function to(e) {
  return ie(this.__data__, e) > -1;
}
function no(e, t) {
  var n = this.__data__, r = ie(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function F(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
F.prototype.clear = Wr;
F.prototype.delete = kr;
F.prototype.get = eo;
F.prototype.has = to;
F.prototype.set = no;
var Y = K(I, "Map");
function ro() {
  this.size = 0, this.__data__ = {
    hash: new L(),
    map: new (Y || F)(),
    string: new L()
  };
}
function oo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ae(e, t) {
  var n = e.__data__;
  return oo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function io(e) {
  var t = ae(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ao(e) {
  return ae(this, e).get(e);
}
function so(e) {
  return ae(this, e).has(e);
}
function uo(e, t) {
  var n = ae(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function R(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
R.prototype.clear = ro;
R.prototype.delete = io;
R.prototype.get = ao;
R.prototype.has = so;
R.prototype.set = uo;
var lo = "Expected a function";
function Ce(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(lo);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (Ce.Cache || R)(), n;
}
Ce.Cache = R;
var co = 500;
function fo(e) {
  var t = Ce(e, function(r) {
    return n.size === co && n.clear(), r;
  }), n = t.cache;
  return t;
}
var po = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, go = /\\(\\)?/g, _o = fo(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(po, function(n, r, o, i) {
    t.push(o ? i.replace(go, "$1") : r || n);
  }), t;
});
function ho(e) {
  return e == null ? "" : ht(e);
}
function se(e, t) {
  return S(e) ? e : Se(e, t) ? [e] : _o(ho(e));
}
function Q(e) {
  if (typeof e == "string" || ve(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function xe(e, t) {
  t = se(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Q(t[n++])];
  return n && n == r ? e : void 0;
}
function bo(e, t, n) {
  var r = e == null ? void 0 : xe(e, t);
  return r === void 0 ? n : r;
}
function Ee(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var He = w ? w.isConcatSpreadable : void 0;
function mo(e) {
  return S(e) || we(e) || !!(He && e && e[He]);
}
function yo(e, t, n, r, o) {
  var i = -1, a = e.length;
  for (n || (n = mo), o || (o = []); ++i < a; ) {
    var s = e[i];
    n(s) ? Ee(o, s) : o[o.length] = s;
  }
  return o;
}
function vo(e) {
  var t = e == null ? 0 : e.length;
  return t ? yo(e) : [];
}
function To(e) {
  return Dn(Hn(e, void 0, vo), e + "");
}
var xt = Ct(Object.getPrototypeOf, Object), Po = "[object Object]", Oo = Function.prototype, wo = Object.prototype, Et = Oo.toString, Ao = wo.hasOwnProperty, $o = Et.call(Object);
function _e(e) {
  if (!M(e) || D(e) != Po)
    return !1;
  var t = xt(e);
  if (t === null)
    return !0;
  var n = Ao.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Et.call(n) == $o;
}
function So(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++r < o; )
    i[r] = e[r + t];
  return i;
}
function Co() {
  this.__data__ = new F(), this.size = 0;
}
function xo(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Eo(e) {
  return this.__data__.get(e);
}
function jo(e) {
  return this.__data__.has(e);
}
var Io = 200;
function Mo(e, t) {
  var n = this.__data__;
  if (n instanceof F) {
    var r = n.__data__;
    if (!Y || r.length < Io - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new R(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function E(e) {
  var t = this.__data__ = new F(e);
  this.size = t.size;
}
E.prototype.clear = Co;
E.prototype.delete = xo;
E.prototype.get = Eo;
E.prototype.has = jo;
E.prototype.set = Mo;
var jt = typeof exports == "object" && exports && !exports.nodeType && exports, qe = jt && typeof module == "object" && module && !module.nodeType && module, Fo = qe && qe.exports === jt, Je = Fo ? I.Buffer : void 0;
Je && Je.allocUnsafe;
function Ro(e, t) {
  return e.slice();
}
function Lo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function It() {
  return [];
}
var Do = Object.prototype, No = Do.propertyIsEnumerable, Xe = Object.getOwnPropertySymbols, Mt = Xe ? function(e) {
  return e == null ? [] : (e = Object(e), Lo(Xe(e), function(t) {
    return No.call(e, t);
  }));
} : It, Ko = Object.getOwnPropertySymbols, Uo = Ko ? function(e) {
  for (var t = []; e; )
    Ee(t, Mt(e)), e = xt(e);
  return t;
} : It;
function Ft(e, t, n) {
  var r = t(e);
  return S(e) ? r : Ee(r, n(e));
}
function Ye(e) {
  return Ft(e, $e, Mt);
}
function Rt(e) {
  return Ft(e, Lr, Uo);
}
var he = K(I, "DataView"), be = K(I, "Promise"), me = K(I, "Set"), Ze = "[object Map]", Go = "[object Object]", We = "[object Promise]", Qe = "[object Set]", Ve = "[object WeakMap]", ke = "[object DataView]", Bo = N(he), zo = N(Y), Ho = N(be), qo = N(me), Jo = N(de), $ = D;
(he && $(new he(new ArrayBuffer(1))) != ke || Y && $(new Y()) != Ze || be && $(be.resolve()) != We || me && $(new me()) != Qe || de && $(new de()) != Ve) && ($ = function(e) {
  var t = D(e), n = t == Go ? e.constructor : void 0, r = n ? N(n) : "";
  if (r)
    switch (r) {
      case Bo:
        return ke;
      case zo:
        return Ze;
      case Ho:
        return We;
      case qo:
        return Qe;
      case Jo:
        return Ve;
    }
  return t;
});
var Xo = Object.prototype, Yo = Xo.hasOwnProperty;
function Zo(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Yo.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var ne = I.Uint8Array;
function je(e) {
  var t = new e.constructor(e.byteLength);
  return new ne(t).set(new ne(e)), t;
}
function Wo(e, t) {
  var n = je(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Qo = /\w*$/;
function Vo(e) {
  var t = new e.constructor(e.source, Qo.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var et = w ? w.prototype : void 0, tt = et ? et.valueOf : void 0;
function ko(e) {
  return tt ? Object(tt.call(e)) : {};
}
function ei(e, t) {
  var n = je(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
var ti = "[object Boolean]", ni = "[object Date]", ri = "[object Map]", oi = "[object Number]", ii = "[object RegExp]", ai = "[object Set]", si = "[object String]", ui = "[object Symbol]", li = "[object ArrayBuffer]", ci = "[object DataView]", fi = "[object Float32Array]", pi = "[object Float64Array]", gi = "[object Int8Array]", di = "[object Int16Array]", _i = "[object Int32Array]", hi = "[object Uint8Array]", bi = "[object Uint8ClampedArray]", mi = "[object Uint16Array]", yi = "[object Uint32Array]";
function vi(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case li:
      return je(e);
    case ti:
    case ni:
      return new r(+e);
    case ci:
      return Wo(e);
    case fi:
    case pi:
    case gi:
    case di:
    case _i:
    case hi:
    case bi:
    case mi:
    case yi:
      return ei(e);
    case ri:
      return new r();
    case oi:
    case si:
      return new r(e);
    case ii:
      return Vo(e);
    case ai:
      return new r();
    case ui:
      return ko(e);
  }
}
var Ti = "[object Map]";
function Pi(e) {
  return M(e) && $(e) == Ti;
}
var nt = z && z.isMap, Oi = nt ? Ae(nt) : Pi, wi = "[object Set]";
function Ai(e) {
  return M(e) && $(e) == wi;
}
var rt = z && z.isSet, $i = rt ? Ae(rt) : Ai, Lt = "[object Arguments]", Si = "[object Array]", Ci = "[object Boolean]", xi = "[object Date]", Ei = "[object Error]", Dt = "[object Function]", ji = "[object GeneratorFunction]", Ii = "[object Map]", Mi = "[object Number]", Nt = "[object Object]", Fi = "[object RegExp]", Ri = "[object Set]", Li = "[object String]", Di = "[object Symbol]", Ni = "[object WeakMap]", Ki = "[object ArrayBuffer]", Ui = "[object DataView]", Gi = "[object Float32Array]", Bi = "[object Float64Array]", zi = "[object Int8Array]", Hi = "[object Int16Array]", qi = "[object Int32Array]", Ji = "[object Uint8Array]", Xi = "[object Uint8ClampedArray]", Yi = "[object Uint16Array]", Zi = "[object Uint32Array]", m = {};
m[Lt] = m[Si] = m[Ki] = m[Ui] = m[Ci] = m[xi] = m[Gi] = m[Bi] = m[zi] = m[Hi] = m[qi] = m[Ii] = m[Mi] = m[Nt] = m[Fi] = m[Ri] = m[Li] = m[Di] = m[Ji] = m[Xi] = m[Yi] = m[Zi] = !0;
m[Ei] = m[Dt] = m[Ni] = !1;
function k(e, t, n, r, o, i) {
  var a;
  if (n && (a = o ? n(e, r, o, i) : n(e)), a !== void 0)
    return a;
  if (!W(e))
    return e;
  var s = S(e);
  if (s)
    a = Zo(e);
  else {
    var u = $(e), l = u == Dt || u == ji;
    if (te(e))
      return Ro(e);
    if (u == Nt || u == Lt || l && !o)
      a = {};
    else {
      if (!m[u])
        return o ? e : {};
      a = vi(e, u);
    }
  }
  i || (i = new E());
  var g = i.get(e);
  if (g)
    return g;
  i.set(e, a), $i(e) ? e.forEach(function(f) {
    a.add(k(f, t, n, f, e, i));
  }) : Oi(e) && e.forEach(function(f, p) {
    a.set(p, k(f, t, n, p, e, i));
  });
  var _ = Rt, c = s ? void 0 : _(e);
  return Nn(c || e, function(f, p) {
    c && (p = f, f = e[p]), vt(a, p, k(f, t, n, p, e, i));
  }), a;
}
var Wi = "__lodash_hash_undefined__";
function Qi(e) {
  return this.__data__.set(e, Wi), this;
}
function Vi(e) {
  return this.__data__.has(e);
}
function re(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new R(); ++t < n; )
    this.add(e[t]);
}
re.prototype.add = re.prototype.push = Qi;
re.prototype.has = Vi;
function ki(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ea(e, t) {
  return e.has(t);
}
var ta = 1, na = 2;
function Kt(e, t, n, r, o, i) {
  var a = n & ta, s = e.length, u = t.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = i.get(e), g = i.get(t);
  if (l && g)
    return l == t && g == e;
  var _ = -1, c = !0, f = n & na ? new re() : void 0;
  for (i.set(e, t), i.set(t, e); ++_ < s; ) {
    var p = e[_], b = t[_];
    if (r)
      var d = a ? r(b, p, _, t, e, i) : r(p, b, _, e, t, i);
    if (d !== void 0) {
      if (d)
        continue;
      c = !1;
      break;
    }
    if (f) {
      if (!ki(t, function(v, T) {
        if (!ea(f, T) && (p === v || o(p, v, n, r, i)))
          return f.push(T);
      })) {
        c = !1;
        break;
      }
    } else if (!(p === b || o(p, b, n, r, i))) {
      c = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), c;
}
function ra(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function oa(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ia = 1, aa = 2, sa = "[object Boolean]", ua = "[object Date]", la = "[object Error]", ca = "[object Map]", fa = "[object Number]", pa = "[object RegExp]", ga = "[object Set]", da = "[object String]", _a = "[object Symbol]", ha = "[object ArrayBuffer]", ba = "[object DataView]", ot = w ? w.prototype : void 0, fe = ot ? ot.valueOf : void 0;
function ma(e, t, n, r, o, i, a) {
  switch (n) {
    case ba:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ha:
      return !(e.byteLength != t.byteLength || !i(new ne(e), new ne(t)));
    case sa:
    case ua:
    case fa:
      return Pe(+e, +t);
    case la:
      return e.name == t.name && e.message == t.message;
    case pa:
    case da:
      return e == t + "";
    case ca:
      var s = ra;
    case ga:
      var u = r & ia;
      if (s || (s = oa), e.size != t.size && !u)
        return !1;
      var l = a.get(e);
      if (l)
        return l == t;
      r |= aa, a.set(e, t);
      var g = Kt(s(e), s(t), r, o, i, a);
      return a.delete(e), g;
    case _a:
      if (fe)
        return fe.call(e) == fe.call(t);
  }
  return !1;
}
var ya = 1, va = Object.prototype, Ta = va.hasOwnProperty;
function Pa(e, t, n, r, o, i) {
  var a = n & ya, s = Ye(e), u = s.length, l = Ye(t), g = l.length;
  if (u != g && !a)
    return !1;
  for (var _ = u; _--; ) {
    var c = s[_];
    if (!(a ? c in t : Ta.call(t, c)))
      return !1;
  }
  var f = i.get(e), p = i.get(t);
  if (f && p)
    return f == t && p == e;
  var b = !0;
  i.set(e, t), i.set(t, e);
  for (var d = a; ++_ < u; ) {
    c = s[_];
    var v = e[c], T = t[c];
    if (r)
      var O = a ? r(T, v, c, t, e, i) : r(v, T, c, e, t, i);
    if (!(O === void 0 ? v === T || o(v, T, n, r, i) : O)) {
      b = !1;
      break;
    }
    d || (d = c == "constructor");
  }
  if (b && !d) {
    var C = e.constructor, A = t.constructor;
    C != A && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof A == "function" && A instanceof A) && (b = !1);
  }
  return i.delete(e), i.delete(t), b;
}
var Oa = 1, it = "[object Arguments]", at = "[object Array]", V = "[object Object]", wa = Object.prototype, st = wa.hasOwnProperty;
function Aa(e, t, n, r, o, i) {
  var a = S(e), s = S(t), u = a ? at : $(e), l = s ? at : $(t);
  u = u == it ? V : u, l = l == it ? V : l;
  var g = u == V, _ = l == V, c = u == l;
  if (c && te(e)) {
    if (!te(t))
      return !1;
    a = !0, g = !1;
  }
  if (c && !g)
    return i || (i = new E()), a || $t(e) ? Kt(e, t, n, r, o, i) : ma(e, t, u, n, r, o, i);
  if (!(n & Oa)) {
    var f = g && st.call(e, "__wrapped__"), p = _ && st.call(t, "__wrapped__");
    if (f || p) {
      var b = f ? e.value() : e, d = p ? t.value() : t;
      return i || (i = new E()), o(b, d, n, r, i);
    }
  }
  return c ? (i || (i = new E()), Pa(e, t, n, r, o, i)) : !1;
}
function Ie(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !M(e) && !M(t) ? e !== e && t !== t : Aa(e, t, n, r, Ie, o);
}
var $a = 1, Sa = 2;
function Ca(e, t, n, r) {
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
      var g = new E(), _;
      if (!(_ === void 0 ? Ie(l, u, $a | Sa, r, g) : _))
        return !1;
    }
  }
  return !0;
}
function Ut(e) {
  return e === e && !W(e);
}
function xa(e) {
  for (var t = $e(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Ut(o)];
  }
  return t;
}
function Gt(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Ea(e) {
  var t = xa(e);
  return t.length == 1 && t[0][2] ? Gt(t[0][0], t[0][1]) : function(n) {
    return n === e || Ca(n, e, t);
  };
}
function ja(e, t) {
  return e != null && t in Object(e);
}
function Ia(e, t, n) {
  t = se(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = Q(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && Oe(o) && yt(a, o) && (S(e) || we(e)));
}
function Ma(e, t) {
  return e != null && Ia(e, t, ja);
}
var Fa = 1, Ra = 2;
function La(e, t) {
  return Se(e) && Ut(t) ? Gt(Q(e), t) : function(n) {
    var r = bo(n, e);
    return r === void 0 && r === t ? Ma(n, e) : Ie(t, r, Fa | Ra);
  };
}
function Da(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Na(e) {
  return function(t) {
    return xe(t, e);
  };
}
function Ka(e) {
  return Se(e) ? Da(Q(e)) : Na(e);
}
function Ua(e) {
  return typeof e == "function" ? e : e == null ? bt : typeof e == "object" ? S(e) ? La(e[0], e[1]) : Ea(e) : Ka(e);
}
function Ga(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var u = a[++o];
      if (n(i[u], u, i) === !1)
        break;
    }
    return t;
  };
}
var Ba = Ga();
function za(e, t) {
  return e && Ba(e, t, $e);
}
function Ha(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function qa(e, t) {
  return t.length < 2 ? e : xe(e, So(t, 0, -1));
}
function Ja(e, t) {
  var n = {};
  return t = Ua(t), za(e, function(r, o, i) {
    Te(n, t(r, o, i), r);
  }), n;
}
function Xa(e, t) {
  return t = se(t, e), e = qa(e, t), e == null || delete e[Q(Ha(t))];
}
function Ya(e) {
  return _e(e) ? void 0 : e;
}
var Za = 1, Wa = 2, Qa = 4, Bt = To(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = _t(t, function(i) {
    return i = se(i, e), r || (r = i.length > 1), i;
  }), zn(e, Rt(e), n), r && (n = k(n, Za | Wa | Qa, Ya));
  for (var o = t.length; o--; )
    Xa(n, t[o]);
  return n;
});
async function Va() {
  window.ms_globals || (window.ms_globals = {}), window.ms_globals.initializePromise || (window.ms_globals.initializePromise = new Promise((e) => {
    window.ms_globals.initialize = () => {
      e();
    };
  })), await window.ms_globals.initializePromise;
}
async function ka(e) {
  return await Va(), e().then((t) => t.default);
}
const zt = [
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
], es = zt.concat(["attached_events"]);
function ts(e, t = {}, n = !1) {
  return Ja(Bt(e, n ? [] : zt), (r, o) => t[o] || nn(o));
}
function ut(e, t) {
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
      const g = l.split("_"), _ = (...f) => {
        const p = f.map((d) => f && typeof d == "object" && (d.nativeEvent || d instanceof Event) ? {
          type: d.type,
          detail: d.detail,
          timestamp: d.timeStamp,
          clientX: d.clientX,
          clientY: d.clientY,
          targetId: d.target.id,
          targetClassName: d.target.className,
          altKey: d.altKey,
          ctrlKey: d.ctrlKey,
          shiftKey: d.shiftKey,
          metaKey: d.metaKey
        } : d);
        let b;
        try {
          b = JSON.parse(JSON.stringify(p));
        } catch {
          let d = function(v) {
            try {
              return JSON.stringify(v), v;
            } catch {
              return _e(v) ? Object.fromEntries(Object.entries(v).map(([T, O]) => {
                try {
                  return JSON.stringify(O), [T, O];
                } catch {
                  return _e(O) ? [T, Object.fromEntries(Object.entries(O).filter(([C, A]) => {
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
          b = p.map((v) => d(v));
        }
        return n.dispatch(l.replace(/[A-Z]/g, (d) => "_" + d.toLowerCase()), {
          payload: b,
          component: {
            ...a,
            ...Bt(i, es)
          }
        });
      };
      if (g.length > 1) {
        let f = {
          ...a.props[g[0]] || (o == null ? void 0 : o[g[0]]) || {}
        };
        u[g[0]] = f;
        for (let b = 1; b < g.length - 1; b++) {
          const d = {
            ...a.props[g[b]] || (o == null ? void 0 : o[g[b]]) || {}
          };
          f[g[b]] = d, f = d;
        }
        const p = g[g.length - 1];
        return f[`on${p.slice(0, 1).toUpperCase()}${p.slice(1)}`] = _, u;
      }
      const c = g[0];
      return u[`on${c.slice(0, 1).toUpperCase()}${c.slice(1)}`] = _, u;
    }, {}),
    __render_eventProps: {
      props: e,
      eventsMapping: t
    }
  };
}
function G() {
}
function ns(e) {
  return e();
}
function rs(e) {
  e.forEach(ns);
}
function os(e) {
  return typeof e == "function";
}
function is(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Ht(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return G;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function qt(e) {
  let t;
  return Ht(e, (n) => t = n)(), t;
}
const U = [];
function as(e, t) {
  return {
    subscribe: j(e, t).subscribe
  };
}
function j(e, t = G) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (is(e, s) && (e = s, n)) {
      const u = !U.length;
      for (const l of r)
        l[1](), U.push(l, e);
      if (u) {
        for (let l = 0; l < U.length; l += 2)
          U[l][0](U[l + 1]);
        U.length = 0;
      }
    }
  }
  function i(s) {
    o(s(e));
  }
  function a(s, u = G) {
    const l = [s, u];
    return r.add(l), r.size === 1 && (n = t(o, i) || G), s(e), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return {
    set: o,
    update: i,
    subscribe: a
  };
}
function Js(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return as(n, (a, s) => {
    let u = !1;
    const l = [];
    let g = 0, _ = G;
    const c = () => {
      if (g)
        return;
      _();
      const p = t(r ? l[0] : l, a, s);
      i ? a(p) : _ = os(p) ? p : G;
    }, f = o.map((p, b) => Ht(p, (d) => {
      l[b] = d, g &= ~(1 << b), u && c();
    }, () => {
      g |= 1 << b;
    }));
    return u = !0, c(), function() {
      rs(f), _(), u = !1;
    };
  });
}
const {
  getContext: ss,
  setContext: Xs
} = window.__gradio__svelte__internal, us = "$$ms-gr-loading-status-key";
function ls() {
  const e = window.ms_globals.loadingKey++, t = ss(us);
  return (n) => {
    if (!t || !n)
      return;
    const {
      loadingStatusMap: r,
      options: o
    } = t, {
      generating: i,
      error: a
    } = qt(o);
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
  getContext: ue,
  setContext: H
} = window.__gradio__svelte__internal, cs = "$$ms-gr-slots-key";
function fs() {
  const e = j({});
  return H(cs, e);
}
const Jt = "$$ms-gr-slot-params-mapping-fn-key";
function ps() {
  return ue(Jt);
}
function gs(e) {
  return H(Jt, j(e));
}
const ds = "$$ms-gr-slot-params-key";
function _s() {
  const e = H(ds, j({}));
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
const Xt = "$$ms-gr-sub-index-context-key";
function hs() {
  return ue(Xt) || null;
}
function lt(e) {
  return H(Xt, e);
}
function bs(e, t, n) {
  if (!Reflect.has(e, "as_item") || !Reflect.has(e, "_internal"))
    throw new Error("`as_item` and `_internal` is required");
  const r = ys(), o = ps();
  gs().set(void 0);
  const a = vs({
    slot: void 0,
    index: e._internal.index,
    subIndex: e._internal.subIndex
  }), s = hs();
  typeof s == "number" && lt(void 0);
  const u = ls();
  typeof e._internal.subIndex == "number" && lt(e._internal.subIndex), r && r.subscribe((c) => {
    a.slotKey.set(c);
  }), ms();
  const l = e.as_item, g = (c, f) => c ? {
    ...ts({
      ...c
    }, t),
    __render_slotParamsMappingFn: o ? qt(o) : void 0,
    __render_as_item: f,
    __render_restPropsMapping: t
  } : void 0, _ = j({
    ...e,
    _internal: {
      ...e._internal,
      index: s ?? e._internal.index
    },
    restProps: g(e.restProps, l),
    originalRestProps: e.restProps
  });
  return o && o.subscribe((c) => {
    _.update((f) => ({
      ...f,
      restProps: {
        ...f.restProps,
        __slotParamsMappingFn: c
      }
    }));
  }), [_, (c) => {
    var f;
    u((f = c.restProps) == null ? void 0 : f.loading_status), _.set({
      ...c,
      _internal: {
        ...c._internal,
        index: s ?? c._internal.index
      },
      restProps: g(c.restProps, c.as_item),
      originalRestProps: c.restProps
    });
  }];
}
const Yt = "$$ms-gr-slot-key";
function ms() {
  H(Yt, j(void 0));
}
function ys() {
  return ue(Yt);
}
const Zt = "$$ms-gr-component-slot-context-key";
function vs({
  slot: e,
  index: t,
  subIndex: n
}) {
  return H(Zt, {
    slotKey: j(e),
    slotIndex: j(t),
    subSlotIndex: j(n)
  });
}
function Ys() {
  return ue(Zt);
}
function Ts(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wt = {
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
})(Wt);
var Ps = Wt.exports;
const ct = /* @__PURE__ */ Ts(Ps), {
  SvelteComponent: Os,
  assign: ye,
  check_outros: ws,
  claim_component: As,
  component_subscribe: pe,
  compute_rest_props: ft,
  create_component: $s,
  create_slot: Ss,
  destroy_component: Cs,
  detach: Qt,
  empty: oe,
  exclude_internal_props: xs,
  flush: x,
  get_all_dirty_from_scope: Es,
  get_slot_changes: js,
  get_spread_object: ge,
  get_spread_update: Is,
  group_outros: Ms,
  handle_promise: Fs,
  init: Rs,
  insert_hydration: Vt,
  mount_component: Ls,
  noop: P,
  safe_not_equal: Ds,
  transition_in: B,
  transition_out: Z,
  update_await_block_branch: Ns,
  update_slot_base: Ks
} = window.__gradio__svelte__internal;
function pt(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: zs,
    then: Gs,
    catch: Us,
    value: 23,
    blocks: [, , ,]
  };
  return Fs(
    /*AwaitedColorPicker*/
    e[4],
    r
  ), {
    c() {
      t = oe(), r.block.c();
    },
    l(o) {
      t = oe(), r.block.l(o);
    },
    m(o, i) {
      Vt(o, t, i), r.block.m(o, r.anchor = i), r.mount = () => t.parentNode, r.anchor = t, n = !0;
    },
    p(o, i) {
      e = o, Ns(r, e, i);
    },
    i(o) {
      n || (B(r.block), n = !0);
    },
    o(o) {
      for (let i = 0; i < 3; i += 1) {
        const a = r.blocks[i];
        Z(a);
      }
      n = !1;
    },
    d(o) {
      o && Qt(t), r.block.d(o), r.token = null, r = null;
    }
  };
}
function Us(e) {
  return {
    c: P,
    l: P,
    m: P,
    p: P,
    i: P,
    o: P,
    d: P
  };
}
function Gs(e) {
  let t, n;
  const r = [
    {
      style: (
        /*$mergedProps*/
        e[2].elem_style
      )
    },
    {
      className: ct(
        /*$mergedProps*/
        e[2].elem_classes,
        "ms-gr-antd-color-picker"
      )
    },
    {
      id: (
        /*$mergedProps*/
        e[2].elem_id
      )
    },
    /*$mergedProps*/
    e[2].restProps,
    /*$mergedProps*/
    e[2].props,
    ut(
      /*$mergedProps*/
      e[2],
      {
        change_complete: "changeComplete",
        open_change: "openChange",
        format_change: "formatChange"
      }
    ),
    {
      value: (
        /*$mergedProps*/
        e[2].props.value ?? /*$mergedProps*/
        e[2].value ?? void 0
      )
    },
    {
      slots: (
        /*$slots*/
        e[3]
      )
    },
    {
      value_format: (
        /*value_format*/
        e[1]
      )
    },
    {
      onValueChange: (
        /*func*/
        e[19]
      )
    },
    {
      setSlotParams: (
        /*setSlotParams*/
        e[8]
      )
    }
  ];
  let o = {
    $$slots: {
      default: [Bs]
    },
    $$scope: {
      ctx: e
    }
  };
  for (let i = 0; i < r.length; i += 1)
    o = ye(o, r[i]);
  return t = new /*ColorPicker*/
  e[23]({
    props: o
  }), {
    c() {
      $s(t.$$.fragment);
    },
    l(i) {
      As(t.$$.fragment, i);
    },
    m(i, a) {
      Ls(t, i, a), n = !0;
    },
    p(i, a) {
      const s = a & /*$mergedProps, undefined, $slots, value_format, value, setSlotParams*/
      271 ? Is(r, [a & /*$mergedProps*/
      4 && {
        style: (
          /*$mergedProps*/
          i[2].elem_style
        )
      }, a & /*$mergedProps*/
      4 && {
        className: ct(
          /*$mergedProps*/
          i[2].elem_classes,
          "ms-gr-antd-color-picker"
        )
      }, a & /*$mergedProps*/
      4 && {
        id: (
          /*$mergedProps*/
          i[2].elem_id
        )
      }, a & /*$mergedProps*/
      4 && ge(
        /*$mergedProps*/
        i[2].restProps
      ), a & /*$mergedProps*/
      4 && ge(
        /*$mergedProps*/
        i[2].props
      ), a & /*$mergedProps*/
      4 && ge(ut(
        /*$mergedProps*/
        i[2],
        {
          change_complete: "changeComplete",
          open_change: "openChange",
          format_change: "formatChange"
        }
      )), a & /*$mergedProps, undefined*/
      4 && {
        value: (
          /*$mergedProps*/
          i[2].props.value ?? /*$mergedProps*/
          i[2].value ?? void 0
        )
      }, a & /*$slots*/
      8 && {
        slots: (
          /*$slots*/
          i[3]
        )
      }, a & /*value_format*/
      2 && {
        value_format: (
          /*value_format*/
          i[1]
        )
      }, a & /*value*/
      1 && {
        onValueChange: (
          /*func*/
          i[19]
        )
      }, a & /*setSlotParams*/
      256 && {
        setSlotParams: (
          /*setSlotParams*/
          i[8]
        )
      }]) : {};
      a & /*$$scope*/
      1048576 && (s.$$scope = {
        dirty: a,
        ctx: i
      }), t.$set(s);
    },
    i(i) {
      n || (B(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Z(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Cs(t, i);
    }
  };
}
function Bs(e) {
  let t;
  const n = (
    /*#slots*/
    e[18].default
  ), r = Ss(
    n,
    e,
    /*$$scope*/
    e[20],
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
      1048576) && Ks(
        r,
        n,
        o,
        /*$$scope*/
        o[20],
        t ? js(
          n,
          /*$$scope*/
          o[20],
          i,
          null
        ) : Es(
          /*$$scope*/
          o[20]
        ),
        null
      );
    },
    i(o) {
      t || (B(r, o), t = !0);
    },
    o(o) {
      Z(r, o), t = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function zs(e) {
  return {
    c: P,
    l: P,
    m: P,
    p: P,
    i: P,
    o: P,
    d: P
  };
}
function Hs(e) {
  let t, n, r = (
    /*$mergedProps*/
    e[2].visible && pt(e)
  );
  return {
    c() {
      r && r.c(), t = oe();
    },
    l(o) {
      r && r.l(o), t = oe();
    },
    m(o, i) {
      r && r.m(o, i), Vt(o, t, i), n = !0;
    },
    p(o, [i]) {
      /*$mergedProps*/
      o[2].visible ? r ? (r.p(o, i), i & /*$mergedProps*/
      4 && B(r, 1)) : (r = pt(o), r.c(), B(r, 1), r.m(t.parentNode, t)) : r && (Ms(), Z(r, 1, 1, () => {
        r = null;
      }), ws());
    },
    i(o) {
      n || (B(r), n = !0);
    },
    o(o) {
      Z(r), n = !1;
    },
    d(o) {
      o && Qt(t), r && r.d(o);
    }
  };
}
function qs(e, t, n) {
  const r = ["gradio", "props", "_internal", "value", "value_format", "as_item", "visible", "elem_id", "elem_classes", "elem_style"];
  let o = ft(t, r), i, a, s, {
    $$slots: u = {},
    $$scope: l
  } = t;
  const g = ka(() => import("./color-picker-IFJjYiEy.js"));
  let {
    gradio: _
  } = t, {
    props: c = {}
  } = t;
  const f = j(c);
  pe(e, f, (h) => n(17, i = h));
  let {
    _internal: p = {}
  } = t, {
    value: b
  } = t, {
    value_format: d = "hex"
  } = t, {
    as_item: v
  } = t, {
    visible: T = !0
  } = t, {
    elem_id: O = ""
  } = t, {
    elem_classes: C = []
  } = t, {
    elem_style: A = {}
  } = t;
  const [Me, kt] = bs({
    gradio: _,
    props: i,
    _internal: p,
    visible: T,
    elem_id: O,
    elem_classes: C,
    elem_style: A,
    as_item: v,
    value: b,
    restProps: o
  });
  pe(e, Me, (h) => n(2, a = h));
  const Fe = fs();
  pe(e, Fe, (h) => n(3, s = h));
  const en = _s(), tn = (h) => {
    n(0, b = h);
  };
  return e.$$set = (h) => {
    t = ye(ye({}, t), xs(h)), n(22, o = ft(t, r)), "gradio" in h && n(9, _ = h.gradio), "props" in h && n(10, c = h.props), "_internal" in h && n(11, p = h._internal), "value" in h && n(0, b = h.value), "value_format" in h && n(1, d = h.value_format), "as_item" in h && n(12, v = h.as_item), "visible" in h && n(13, T = h.visible), "elem_id" in h && n(14, O = h.elem_id), "elem_classes" in h && n(15, C = h.elem_classes), "elem_style" in h && n(16, A = h.elem_style), "$$scope" in h && n(20, l = h.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*props*/
    1024 && f.update((h) => ({
      ...h,
      ...c
    })), kt({
      gradio: _,
      props: i,
      _internal: p,
      visible: T,
      elem_id: O,
      elem_classes: C,
      elem_style: A,
      as_item: v,
      value: b,
      restProps: o
    });
  }, [b, d, a, s, g, f, Me, Fe, en, _, c, p, v, T, O, C, A, i, u, tn, l];
}
class Zs extends Os {
  constructor(t) {
    super(), Rs(this, t, qs, Hs, Ds, {
      gradio: 9,
      props: 10,
      _internal: 11,
      value: 0,
      value_format: 1,
      as_item: 12,
      visible: 13,
      elem_id: 14,
      elem_classes: 15,
      elem_style: 16
    });
  }
  get gradio() {
    return this.$$.ctx[9];
  }
  set gradio(t) {
    this.$$set({
      gradio: t
    }), x();
  }
  get props() {
    return this.$$.ctx[10];
  }
  set props(t) {
    this.$$set({
      props: t
    }), x();
  }
  get _internal() {
    return this.$$.ctx[11];
  }
  set _internal(t) {
    this.$$set({
      _internal: t
    }), x();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({
      value: t
    }), x();
  }
  get value_format() {
    return this.$$.ctx[1];
  }
  set value_format(t) {
    this.$$set({
      value_format: t
    }), x();
  }
  get as_item() {
    return this.$$.ctx[12];
  }
  set as_item(t) {
    this.$$set({
      as_item: t
    }), x();
  }
  get visible() {
    return this.$$.ctx[13];
  }
  set visible(t) {
    this.$$set({
      visible: t
    }), x();
  }
  get elem_id() {
    return this.$$.ctx[14];
  }
  set elem_id(t) {
    this.$$set({
      elem_id: t
    }), x();
  }
  get elem_classes() {
    return this.$$.ctx[15];
  }
  set elem_classes(t) {
    this.$$set({
      elem_classes: t
    }), x();
  }
  get elem_style() {
    return this.$$.ctx[16];
  }
  set elem_style(t) {
    this.$$set({
      elem_style: t
    }), x();
  }
}
export {
  Zs as I,
  W as a,
  qt as b,
  mt as c,
  Js as d,
  Ys as g,
  ve as i,
  I as r,
  j as w
};
