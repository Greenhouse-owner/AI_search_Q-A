function tn(e) {
  return e.replace(/(^|_)(\w)/g, (t, n, r, i) => i === 0 ? r.toLowerCase() : r.toUpperCase());
}
var dt = typeof global == "object" && global && global.Object === Object && global, nn = typeof self == "object" && self && self.Object === Object && self, E = dt || nn || Function("return this")(), w = E.Symbol, _t = Object.prototype, rn = _t.hasOwnProperty, on = _t.toString, H = w ? w.toStringTag : void 0;
function an(e) {
  var t = rn.call(e, H), n = e[H];
  try {
    e[H] = void 0;
    var r = !0;
  } catch {
  }
  var i = on.call(e);
  return r && (t ? e[H] = n : delete e[H]), i;
}
var sn = Object.prototype, un = sn.toString;
function ln(e) {
  return un.call(e);
}
var cn = "[object Null]", fn = "[object Undefined]", Ne = w ? w.toStringTag : void 0;
function D(e) {
  return e == null ? e === void 0 ? fn : cn : Ne && Ne in Object(e) ? an(e) : ln(e);
}
function M(e) {
  return e != null && typeof e == "object";
}
var pn = "[object Symbol]";
function Pe(e) {
  return typeof e == "symbol" || M(e) && D(e) == pn;
}
function bt(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var S = Array.isArray, Ke = w ? w.prototype : void 0, Ue = Ke ? Ke.toString : void 0;
function ht(e) {
  if (typeof e == "string")
    return e;
  if (S(e))
    return bt(e, ht) + "";
  if (Pe(e))
    return Ue ? Ue.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Z(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function yt(e) {
  return e;
}
var gn = "[object AsyncFunction]", dn = "[object Function]", _n = "[object GeneratorFunction]", bn = "[object Proxy]";
function mt(e) {
  if (!Z(e))
    return !1;
  var t = D(e);
  return t == dn || t == _n || t == gn || t == bn;
}
var ge = E["__core-js_shared__"], Ge = function() {
  var e = /[^.]+$/.exec(ge && ge.keys && ge.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function hn(e) {
  return !!Ge && Ge in e;
}
var yn = Function.prototype, mn = yn.toString;
function N(e) {
  if (e != null) {
    try {
      return mn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var vn = /[\\^$.*+?()[\]{}|]/g, Tn = /^\[object .+?Constructor\]$/, Pn = Function.prototype, On = Object.prototype, wn = Pn.toString, An = On.hasOwnProperty, $n = RegExp("^" + wn.call(An).replace(vn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Sn(e) {
  if (!Z(e) || hn(e))
    return !1;
  var t = mt(e) ? $n : Tn;
  return t.test(N(e));
}
function xn(e, t) {
  return e == null ? void 0 : e[t];
}
function K(e, t) {
  var n = xn(e, t);
  return Sn(n) ? n : void 0;
}
var be = K(E, "WeakMap");
function Cn(e, t, n) {
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
var jn = 800, En = 16, In = Date.now;
function Mn(e) {
  var t = 0, n = 0;
  return function() {
    var r = In(), i = En - (r - n);
    if (n = r, i > 0) {
      if (++t >= jn)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Fn(e) {
  return function() {
    return e;
  };
}
var re = function() {
  try {
    var e = K(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Rn = re ? function(e, t) {
  return re(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Fn(t),
    writable: !0
  });
} : yt, Ln = Mn(Rn);
function Dn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Nn = 9007199254740991, Kn = /^(?:0|[1-9]\d*)$/;
function vt(e, t) {
  var n = typeof e;
  return t = t ?? Nn, !!t && (n == "number" || n != "symbol" && Kn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Oe(e, t, n) {
  t == "__proto__" && re ? re(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function we(e, t) {
  return e === t || e !== e && t !== t;
}
var Un = Object.prototype, Gn = Un.hasOwnProperty;
function Tt(e, t, n) {
  var r = e[t];
  (!(Gn.call(e, t) && we(r, n)) || n === void 0 && !(t in e)) && Oe(e, t, n);
}
function Bn(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var o = -1, a = t.length; ++o < a; ) {
    var s = t[o], u = void 0;
    u === void 0 && (u = e[s]), i ? Oe(n, s, u) : Tt(n, s, u);
  }
  return n;
}
var Be = Math.max;
function zn(e, t, n) {
  return t = Be(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, i = -1, o = Be(r.length - t, 0), a = Array(o); ++i < o; )
      a[i] = r[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = r[i];
    return s[t] = n(a), Cn(e, this, s);
  };
}
var Hn = 9007199254740991;
function Ae(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Hn;
}
function Pt(e) {
  return e != null && Ae(e.length) && !mt(e);
}
var qn = Object.prototype;
function Ot(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || qn;
  return e === n;
}
function Jn(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Xn = "[object Arguments]";
function ze(e) {
  return M(e) && D(e) == Xn;
}
var wt = Object.prototype, Yn = wt.hasOwnProperty, Zn = wt.propertyIsEnumerable, $e = ze(/* @__PURE__ */ function() {
  return arguments;
}()) ? ze : function(e) {
  return M(e) && Yn.call(e, "callee") && !Zn.call(e, "callee");
};
function Wn() {
  return !1;
}
var At = typeof exports == "object" && exports && !exports.nodeType && exports, He = At && typeof module == "object" && module && !module.nodeType && module, Qn = He && He.exports === At, qe = Qn ? E.Buffer : void 0, Vn = qe ? qe.isBuffer : void 0, ie = Vn || Wn, kn = "[object Arguments]", er = "[object Array]", tr = "[object Boolean]", nr = "[object Date]", rr = "[object Error]", ir = "[object Function]", or = "[object Map]", ar = "[object Number]", sr = "[object Object]", ur = "[object RegExp]", lr = "[object Set]", cr = "[object String]", fr = "[object WeakMap]", pr = "[object ArrayBuffer]", gr = "[object DataView]", dr = "[object Float32Array]", _r = "[object Float64Array]", br = "[object Int8Array]", hr = "[object Int16Array]", yr = "[object Int32Array]", mr = "[object Uint8Array]", vr = "[object Uint8ClampedArray]", Tr = "[object Uint16Array]", Pr = "[object Uint32Array]", m = {};
m[dr] = m[_r] = m[br] = m[hr] = m[yr] = m[mr] = m[vr] = m[Tr] = m[Pr] = !0;
m[kn] = m[er] = m[pr] = m[tr] = m[gr] = m[nr] = m[rr] = m[ir] = m[or] = m[ar] = m[sr] = m[ur] = m[lr] = m[cr] = m[fr] = !1;
function Or(e) {
  return M(e) && Ae(e.length) && !!m[D(e)];
}
function Se(e) {
  return function(t) {
    return e(t);
  };
}
var $t = typeof exports == "object" && exports && !exports.nodeType && exports, q = $t && typeof module == "object" && module && !module.nodeType && module, wr = q && q.exports === $t, de = wr && dt.process, B = function() {
  try {
    var e = q && q.require && q.require("util").types;
    return e || de && de.binding && de.binding("util");
  } catch {
  }
}(), Je = B && B.isTypedArray, St = Je ? Se(Je) : Or, Ar = Object.prototype, $r = Ar.hasOwnProperty;
function xt(e, t) {
  var n = S(e), r = !n && $e(e), i = !n && !r && ie(e), o = !n && !r && !i && St(e), a = n || r || i || o, s = a ? Jn(e.length, String) : [], u = s.length;
  for (var l in e)
    (t || $r.call(e, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    vt(l, u))) && s.push(l);
  return s;
}
function Ct(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Sr = Ct(Object.keys, Object), xr = Object.prototype, Cr = xr.hasOwnProperty;
function jr(e) {
  if (!Ot(e))
    return Sr(e);
  var t = [];
  for (var n in Object(e))
    Cr.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function xe(e) {
  return Pt(e) ? xt(e) : jr(e);
}
function Er(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Ir = Object.prototype, Mr = Ir.hasOwnProperty;
function Fr(e) {
  if (!Z(e))
    return Er(e);
  var t = Ot(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Mr.call(e, r)) || n.push(r);
  return n;
}
function Rr(e) {
  return Pt(e) ? xt(e, !0) : Fr(e);
}
var Lr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Dr = /^\w*$/;
function Ce(e, t) {
  if (S(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Pe(e) ? !0 : Dr.test(e) || !Lr.test(e) || t != null && e in Object(t);
}
var J = K(Object, "create");
function Nr() {
  this.__data__ = J ? J(null) : {}, this.size = 0;
}
function Kr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ur = "__lodash_hash_undefined__", Gr = Object.prototype, Br = Gr.hasOwnProperty;
function zr(e) {
  var t = this.__data__;
  if (J) {
    var n = t[e];
    return n === Ur ? void 0 : n;
  }
  return Br.call(t, e) ? t[e] : void 0;
}
var Hr = Object.prototype, qr = Hr.hasOwnProperty;
function Jr(e) {
  var t = this.__data__;
  return J ? t[e] !== void 0 : qr.call(t, e);
}
var Xr = "__lodash_hash_undefined__";
function Yr(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = J && t === void 0 ? Xr : t, this;
}
function L(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
L.prototype.clear = Nr;
L.prototype.delete = Kr;
L.prototype.get = zr;
L.prototype.has = Jr;
L.prototype.set = Yr;
function Zr() {
  this.__data__ = [], this.size = 0;
}
function ue(e, t) {
  for (var n = e.length; n--; )
    if (we(e[n][0], t))
      return n;
  return -1;
}
var Wr = Array.prototype, Qr = Wr.splice;
function Vr(e) {
  var t = this.__data__, n = ue(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Qr.call(t, n, 1), --this.size, !0;
}
function kr(e) {
  var t = this.__data__, n = ue(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ei(e) {
  return ue(this.__data__, e) > -1;
}
function ti(e, t) {
  var n = this.__data__, r = ue(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function F(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
F.prototype.clear = Zr;
F.prototype.delete = Vr;
F.prototype.get = kr;
F.prototype.has = ei;
F.prototype.set = ti;
var X = K(E, "Map");
function ni() {
  this.size = 0, this.__data__ = {
    hash: new L(),
    map: new (X || F)(),
    string: new L()
  };
}
function ri(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function le(e, t) {
  var n = e.__data__;
  return ri(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ii(e) {
  var t = le(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function oi(e) {
  return le(this, e).get(e);
}
function ai(e) {
  return le(this, e).has(e);
}
function si(e, t) {
  var n = le(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function R(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
R.prototype.clear = ni;
R.prototype.delete = ii;
R.prototype.get = oi;
R.prototype.has = ai;
R.prototype.set = si;
var ui = "Expected a function";
function je(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ui);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, r);
    return n.cache = o.set(i, a) || o, a;
  };
  return n.cache = new (je.Cache || R)(), n;
}
je.Cache = R;
var li = 500;
function ci(e) {
  var t = je(e, function(r) {
    return n.size === li && n.clear(), r;
  }), n = t.cache;
  return t;
}
var fi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pi = /\\(\\)?/g, gi = ci(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(fi, function(n, r, i, o) {
    t.push(i ? o.replace(pi, "$1") : r || n);
  }), t;
});
function di(e) {
  return e == null ? "" : ht(e);
}
function ce(e, t) {
  return S(e) ? e : Ce(e, t) ? [e] : gi(di(e));
}
function W(e) {
  if (typeof e == "string" || Pe(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ee(e, t) {
  t = ce(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[W(t[n++])];
  return n && n == r ? e : void 0;
}
function _i(e, t, n) {
  var r = e == null ? void 0 : Ee(e, t);
  return r === void 0 ? n : r;
}
function Ie(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
var Xe = w ? w.isConcatSpreadable : void 0;
function bi(e) {
  return S(e) || $e(e) || !!(Xe && e && e[Xe]);
}
function hi(e, t, n, r, i) {
  var o = -1, a = e.length;
  for (n || (n = bi), i || (i = []); ++o < a; ) {
    var s = e[o];
    n(s) ? Ie(i, s) : i[i.length] = s;
  }
  return i;
}
function yi(e) {
  var t = e == null ? 0 : e.length;
  return t ? hi(e) : [];
}
function mi(e) {
  return Ln(zn(e, void 0, yi), e + "");
}
var jt = Ct(Object.getPrototypeOf, Object), vi = "[object Object]", Ti = Function.prototype, Pi = Object.prototype, Et = Ti.toString, Oi = Pi.hasOwnProperty, wi = Et.call(Object);
function he(e) {
  if (!M(e) || D(e) != vi)
    return !1;
  var t = jt(e);
  if (t === null)
    return !0;
  var n = Oi.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Et.call(n) == wi;
}
function Ai(e, t, n) {
  var r = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = e[r + t];
  return o;
}
function $i() {
  this.__data__ = new F(), this.size = 0;
}
function Si(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function xi(e) {
  return this.__data__.get(e);
}
function Ci(e) {
  return this.__data__.has(e);
}
var ji = 200;
function Ei(e, t) {
  var n = this.__data__;
  if (n instanceof F) {
    var r = n.__data__;
    if (!X || r.length < ji - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new R(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function j(e) {
  var t = this.__data__ = new F(e);
  this.size = t.size;
}
j.prototype.clear = $i;
j.prototype.delete = Si;
j.prototype.get = xi;
j.prototype.has = Ci;
j.prototype.set = Ei;
var It = typeof exports == "object" && exports && !exports.nodeType && exports, Ye = It && typeof module == "object" && module && !module.nodeType && module, Ii = Ye && Ye.exports === It, Ze = Ii ? E.Buffer : void 0;
Ze && Ze.allocUnsafe;
function Mi(e, t) {
  return e.slice();
}
function Fi(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (o[i++] = a);
  }
  return o;
}
function Mt() {
  return [];
}
var Ri = Object.prototype, Li = Ri.propertyIsEnumerable, We = Object.getOwnPropertySymbols, Ft = We ? function(e) {
  return e == null ? [] : (e = Object(e), Fi(We(e), function(t) {
    return Li.call(e, t);
  }));
} : Mt, Di = Object.getOwnPropertySymbols, Ni = Di ? function(e) {
  for (var t = []; e; )
    Ie(t, Ft(e)), e = jt(e);
  return t;
} : Mt;
function Rt(e, t, n) {
  var r = t(e);
  return S(e) ? r : Ie(r, n(e));
}
function Qe(e) {
  return Rt(e, xe, Ft);
}
function Lt(e) {
  return Rt(e, Rr, Ni);
}
var ye = K(E, "DataView"), me = K(E, "Promise"), ve = K(E, "Set"), Ve = "[object Map]", Ki = "[object Object]", ke = "[object Promise]", et = "[object Set]", tt = "[object WeakMap]", nt = "[object DataView]", Ui = N(ye), Gi = N(X), Bi = N(me), zi = N(ve), Hi = N(be), $ = D;
(ye && $(new ye(new ArrayBuffer(1))) != nt || X && $(new X()) != Ve || me && $(me.resolve()) != ke || ve && $(new ve()) != et || be && $(new be()) != tt) && ($ = function(e) {
  var t = D(e), n = t == Ki ? e.constructor : void 0, r = n ? N(n) : "";
  if (r)
    switch (r) {
      case Ui:
        return nt;
      case Gi:
        return Ve;
      case Bi:
        return ke;
      case zi:
        return et;
      case Hi:
        return tt;
    }
  return t;
});
var qi = Object.prototype, Ji = qi.hasOwnProperty;
function Xi(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Ji.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var oe = E.Uint8Array;
function Me(e) {
  var t = new e.constructor(e.byteLength);
  return new oe(t).set(new oe(e)), t;
}
function Yi(e, t) {
  var n = Me(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Zi = /\w*$/;
function Wi(e) {
  var t = new e.constructor(e.source, Zi.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var rt = w ? w.prototype : void 0, it = rt ? rt.valueOf : void 0;
function Qi(e) {
  return it ? Object(it.call(e)) : {};
}
function Vi(e, t) {
  var n = Me(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
var ki = "[object Boolean]", eo = "[object Date]", to = "[object Map]", no = "[object Number]", ro = "[object RegExp]", io = "[object Set]", oo = "[object String]", ao = "[object Symbol]", so = "[object ArrayBuffer]", uo = "[object DataView]", lo = "[object Float32Array]", co = "[object Float64Array]", fo = "[object Int8Array]", po = "[object Int16Array]", go = "[object Int32Array]", _o = "[object Uint8Array]", bo = "[object Uint8ClampedArray]", ho = "[object Uint16Array]", yo = "[object Uint32Array]";
function mo(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case so:
      return Me(e);
    case ki:
    case eo:
      return new r(+e);
    case uo:
      return Yi(e);
    case lo:
    case co:
    case fo:
    case po:
    case go:
    case _o:
    case bo:
    case ho:
    case yo:
      return Vi(e);
    case to:
      return new r();
    case no:
    case oo:
      return new r(e);
    case ro:
      return Wi(e);
    case io:
      return new r();
    case ao:
      return Qi(e);
  }
}
var vo = "[object Map]";
function To(e) {
  return M(e) && $(e) == vo;
}
var ot = B && B.isMap, Po = ot ? Se(ot) : To, Oo = "[object Set]";
function wo(e) {
  return M(e) && $(e) == Oo;
}
var at = B && B.isSet, Ao = at ? Se(at) : wo, Dt = "[object Arguments]", $o = "[object Array]", So = "[object Boolean]", xo = "[object Date]", Co = "[object Error]", Nt = "[object Function]", jo = "[object GeneratorFunction]", Eo = "[object Map]", Io = "[object Number]", Kt = "[object Object]", Mo = "[object RegExp]", Fo = "[object Set]", Ro = "[object String]", Lo = "[object Symbol]", Do = "[object WeakMap]", No = "[object ArrayBuffer]", Ko = "[object DataView]", Uo = "[object Float32Array]", Go = "[object Float64Array]", Bo = "[object Int8Array]", zo = "[object Int16Array]", Ho = "[object Int32Array]", qo = "[object Uint8Array]", Jo = "[object Uint8ClampedArray]", Xo = "[object Uint16Array]", Yo = "[object Uint32Array]", h = {};
h[Dt] = h[$o] = h[No] = h[Ko] = h[So] = h[xo] = h[Uo] = h[Go] = h[Bo] = h[zo] = h[Ho] = h[Eo] = h[Io] = h[Kt] = h[Mo] = h[Fo] = h[Ro] = h[Lo] = h[qo] = h[Jo] = h[Xo] = h[Yo] = !0;
h[Co] = h[Nt] = h[Do] = !1;
function te(e, t, n, r, i, o) {
  var a;
  if (n && (a = i ? n(e, r, i, o) : n(e)), a !== void 0)
    return a;
  if (!Z(e))
    return e;
  var s = S(e);
  if (s)
    a = Xi(e);
  else {
    var u = $(e), l = u == Nt || u == jo;
    if (ie(e))
      return Mi(e);
    if (u == Kt || u == Dt || l && !i)
      a = {};
    else {
      if (!h[u])
        return i ? e : {};
      a = mo(e, u);
    }
  }
  o || (o = new j());
  var d = o.get(e);
  if (d)
    return d;
  o.set(e, a), Ao(e) ? e.forEach(function(f) {
    a.add(te(f, t, n, f, e, o));
  }) : Po(e) && e.forEach(function(f, _) {
    a.set(_, te(f, t, n, _, e, o));
  });
  var b = Lt, c = s ? void 0 : b(e);
  return Dn(c || e, function(f, _) {
    c && (_ = f, f = e[_]), Tt(a, _, te(f, t, n, _, e, o));
  }), a;
}
var Zo = "__lodash_hash_undefined__";
function Wo(e) {
  return this.__data__.set(e, Zo), this;
}
function Qo(e) {
  return this.__data__.has(e);
}
function ae(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new R(); ++t < n; )
    this.add(e[t]);
}
ae.prototype.add = ae.prototype.push = Wo;
ae.prototype.has = Qo;
function Vo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ko(e, t) {
  return e.has(t);
}
var ea = 1, ta = 2;
function Ut(e, t, n, r, i, o) {
  var a = n & ea, s = e.length, u = t.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(e), d = o.get(t);
  if (l && d)
    return l == t && d == e;
  var b = -1, c = !0, f = n & ta ? new ae() : void 0;
  for (o.set(e, t), o.set(t, e); ++b < s; ) {
    var _ = e[b], y = t[b];
    if (r)
      var p = a ? r(y, _, b, t, e, o) : r(_, y, b, e, t, o);
    if (p !== void 0) {
      if (p)
        continue;
      c = !1;
      break;
    }
    if (f) {
      if (!Vo(t, function(v, T) {
        if (!ko(f, T) && (_ === v || i(_, v, n, r, o)))
          return f.push(T);
      })) {
        c = !1;
        break;
      }
    } else if (!(_ === y || i(_, y, n, r, o))) {
      c = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), c;
}
function na(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, i) {
    n[++t] = [i, r];
  }), n;
}
function ra(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ia = 1, oa = 2, aa = "[object Boolean]", sa = "[object Date]", ua = "[object Error]", la = "[object Map]", ca = "[object Number]", fa = "[object RegExp]", pa = "[object Set]", ga = "[object String]", da = "[object Symbol]", _a = "[object ArrayBuffer]", ba = "[object DataView]", st = w ? w.prototype : void 0, _e = st ? st.valueOf : void 0;
function ha(e, t, n, r, i, o, a) {
  switch (n) {
    case ba:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case _a:
      return !(e.byteLength != t.byteLength || !o(new oe(e), new oe(t)));
    case aa:
    case sa:
    case ca:
      return we(+e, +t);
    case ua:
      return e.name == t.name && e.message == t.message;
    case fa:
    case ga:
      return e == t + "";
    case la:
      var s = na;
    case pa:
      var u = r & ia;
      if (s || (s = ra), e.size != t.size && !u)
        return !1;
      var l = a.get(e);
      if (l)
        return l == t;
      r |= oa, a.set(e, t);
      var d = Ut(s(e), s(t), r, i, o, a);
      return a.delete(e), d;
    case da:
      if (_e)
        return _e.call(e) == _e.call(t);
  }
  return !1;
}
var ya = 1, ma = Object.prototype, va = ma.hasOwnProperty;
function Ta(e, t, n, r, i, o) {
  var a = n & ya, s = Qe(e), u = s.length, l = Qe(t), d = l.length;
  if (u != d && !a)
    return !1;
  for (var b = u; b--; ) {
    var c = s[b];
    if (!(a ? c in t : va.call(t, c)))
      return !1;
  }
  var f = o.get(e), _ = o.get(t);
  if (f && _)
    return f == t && _ == e;
  var y = !0;
  o.set(e, t), o.set(t, e);
  for (var p = a; ++b < u; ) {
    c = s[b];
    var v = e[c], T = t[c];
    if (r)
      var O = a ? r(T, v, c, t, e, o) : r(v, T, c, e, t, o);
    if (!(O === void 0 ? v === T || i(v, T, n, r, o) : O)) {
      y = !1;
      break;
    }
    p || (p = c == "constructor");
  }
  if (y && !p) {
    var x = e.constructor, A = t.constructor;
    x != A && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof A == "function" && A instanceof A) && (y = !1);
  }
  return o.delete(e), o.delete(t), y;
}
var Pa = 1, ut = "[object Arguments]", lt = "[object Array]", k = "[object Object]", Oa = Object.prototype, ct = Oa.hasOwnProperty;
function wa(e, t, n, r, i, o) {
  var a = S(e), s = S(t), u = a ? lt : $(e), l = s ? lt : $(t);
  u = u == ut ? k : u, l = l == ut ? k : l;
  var d = u == k, b = l == k, c = u == l;
  if (c && ie(e)) {
    if (!ie(t))
      return !1;
    a = !0, d = !1;
  }
  if (c && !d)
    return o || (o = new j()), a || St(e) ? Ut(e, t, n, r, i, o) : ha(e, t, u, n, r, i, o);
  if (!(n & Pa)) {
    var f = d && ct.call(e, "__wrapped__"), _ = b && ct.call(t, "__wrapped__");
    if (f || _) {
      var y = f ? e.value() : e, p = _ ? t.value() : t;
      return o || (o = new j()), i(y, p, n, r, o);
    }
  }
  return c ? (o || (o = new j()), Ta(e, t, n, r, i, o)) : !1;
}
function Fe(e, t, n, r, i) {
  return e === t ? !0 : e == null || t == null || !M(e) && !M(t) ? e !== e && t !== t : wa(e, t, n, r, Fe, i);
}
var Aa = 1, $a = 2;
function Sa(e, t, n, r) {
  var i = n.length, o = i;
  if (e == null)
    return !o;
  for (e = Object(e); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++i < o; ) {
    a = n[i];
    var s = a[0], u = e[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in e))
        return !1;
    } else {
      var d = new j(), b;
      if (!(b === void 0 ? Fe(l, u, Aa | $a, r, d) : b))
        return !1;
    }
  }
  return !0;
}
function Gt(e) {
  return e === e && !Z(e);
}
function xa(e) {
  for (var t = xe(e), n = t.length; n--; ) {
    var r = t[n], i = e[r];
    t[n] = [r, i, Gt(i)];
  }
  return t;
}
function Bt(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Ca(e) {
  var t = xa(e);
  return t.length == 1 && t[0][2] ? Bt(t[0][0], t[0][1]) : function(n) {
    return n === e || Sa(n, e, t);
  };
}
function ja(e, t) {
  return e != null && t in Object(e);
}
function Ea(e, t, n) {
  t = ce(t, e);
  for (var r = -1, i = t.length, o = !1; ++r < i; ) {
    var a = W(t[r]);
    if (!(o = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return o || ++r != i ? o : (i = e == null ? 0 : e.length, !!i && Ae(i) && vt(a, i) && (S(e) || $e(e)));
}
function Ia(e, t) {
  return e != null && Ea(e, t, ja);
}
var Ma = 1, Fa = 2;
function Ra(e, t) {
  return Ce(e) && Gt(t) ? Bt(W(e), t) : function(n) {
    var r = _i(n, e);
    return r === void 0 && r === t ? Ia(n, e) : Fe(t, r, Ma | Fa);
  };
}
function La(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Da(e) {
  return function(t) {
    return Ee(t, e);
  };
}
function Na(e) {
  return Ce(e) ? La(W(e)) : Da(e);
}
function Ka(e) {
  return typeof e == "function" ? e : e == null ? yt : typeof e == "object" ? S(e) ? Ra(e[0], e[1]) : Ca(e) : Na(e);
}
function Ua(e) {
  return function(t, n, r) {
    for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
      var u = a[++i];
      if (n(o[u], u, o) === !1)
        break;
    }
    return t;
  };
}
var Ga = Ua();
function Ba(e, t) {
  return e && Ga(e, t, xe);
}
function za(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Ha(e, t) {
  return t.length < 2 ? e : Ee(e, Ai(t, 0, -1));
}
function qa(e, t) {
  var n = {};
  return t = Ka(t), Ba(e, function(r, i, o) {
    Oe(n, t(r, i, o), r);
  }), n;
}
function Ja(e, t) {
  return t = ce(t, e), e = Ha(e, t), e == null || delete e[W(za(t))];
}
function Xa(e) {
  return he(e) ? void 0 : e;
}
var Ya = 1, Za = 2, Wa = 4, zt = mi(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = bt(t, function(o) {
    return o = ce(o, e), r || (r = o.length > 1), o;
  }), Bn(e, Lt(e), n), r && (n = te(n, Ya | Za | Wa, Xa));
  for (var i = t.length; i--; )
    Ja(n, t[i]);
  return n;
});
async function Qa() {
  window.ms_globals || (window.ms_globals = {}), window.ms_globals.initializePromise || (window.ms_globals.initializePromise = new Promise((e) => {
    window.ms_globals.initialize = () => {
      e();
    };
  })), await window.ms_globals.initializePromise;
}
async function Va(e) {
  return await Qa(), e().then((t) => t.default);
}
const Ht = [
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
], ka = Ht.concat(["attached_events"]);
function es(e, t = {}, n = !1) {
  return qa(zt(e, n ? [] : Ht), (r, i) => t[i] || tn(i));
}
function ts(e, t) {
  const {
    gradio: n,
    _internal: r,
    restProps: i,
    originalRestProps: o,
    ...a
  } = e, s = (i == null ? void 0 : i.attachedEvents) || [];
  return {
    ...Array.from(/* @__PURE__ */ new Set([...Object.keys(r).map((u) => {
      const l = u.match(/bind_(.+)_event/);
      return l && l[1] ? l[1] : null;
    }).filter(Boolean), ...s.map((u) => u)])).reduce((u, l) => {
      const d = l.split("_"), b = (...f) => {
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
              return he(v) ? Object.fromEntries(Object.entries(v).map(([T, O]) => {
                try {
                  return JSON.stringify(O), [T, O];
                } catch {
                  return he(O) ? [T, Object.fromEntries(Object.entries(O).filter(([x, A]) => {
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
            ...zt(o, ka)
          }
        });
      };
      if (d.length > 1) {
        let f = {
          ...a.props[d[0]] || (i == null ? void 0 : i[d[0]]) || {}
        };
        u[d[0]] = f;
        for (let y = 1; y < d.length - 1; y++) {
          const p = {
            ...a.props[d[y]] || (i == null ? void 0 : i[d[y]]) || {}
          };
          f[d[y]] = p, f = p;
        }
        const _ = d[d.length - 1];
        return f[`on${_.slice(0, 1).toUpperCase()}${_.slice(1)}`] = b, u;
      }
      const c = d[0];
      return u[`on${c.slice(0, 1).toUpperCase()}${c.slice(1)}`] = b, u;
    }, {}),
    __render_eventProps: {
      props: e,
      eventsMapping: t
    }
  };
}
function ne() {
}
function ns(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function rs(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return ne;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function qt(e) {
  let t;
  return rs(e, (n) => t = n)(), t;
}
const U = [];
function I(e, t = ne) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(s) {
    if (ns(e, s) && (e = s, n)) {
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
  function o(s) {
    i(s(e));
  }
  function a(s, u = ne) {
    const l = [s, u];
    return r.add(l), r.size === 1 && (n = t(i, o) || ne), s(e), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return {
    set: i,
    update: o,
    subscribe: a
  };
}
const {
  getContext: is,
  setContext: Hs
} = window.__gradio__svelte__internal, os = "$$ms-gr-loading-status-key";
function as() {
  const e = window.ms_globals.loadingKey++, t = is(os);
  return (n) => {
    if (!t || !n)
      return;
    const {
      loadingStatusMap: r,
      options: i
    } = t, {
      generating: o,
      error: a
    } = qt(i);
    (n == null ? void 0 : n.status) === "pending" || a && (n == null ? void 0 : n.status) === "error" || (o && (n == null ? void 0 : n.status)) === "generating" ? r.update(({
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
  setContext: z
} = window.__gradio__svelte__internal, ss = "$$ms-gr-slots-key";
function us() {
  const e = I({});
  return z(ss, e);
}
const Jt = "$$ms-gr-slot-params-mapping-fn-key";
function ls() {
  return fe(Jt);
}
function cs(e) {
  return z(Jt, I(e));
}
const fs = "$$ms-gr-slot-params-key";
function ps() {
  const e = z(fs, I({}));
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
function gs() {
  return fe(Xt) || null;
}
function ft(e) {
  return z(Xt, e);
}
function ds(e, t, n) {
  if (!Reflect.has(e, "as_item") || !Reflect.has(e, "_internal"))
    throw new Error("`as_item` and `_internal` is required");
  const r = Zt(), i = ls();
  cs().set(void 0);
  const a = bs({
    slot: void 0,
    index: e._internal.index,
    subIndex: e._internal.subIndex
  }), s = gs();
  typeof s == "number" && ft(void 0);
  const u = as();
  typeof e._internal.subIndex == "number" && ft(e._internal.subIndex), r && r.subscribe((c) => {
    a.slotKey.set(c);
  }), _s();
  const l = e.as_item, d = (c, f) => c ? {
    ...es({
      ...c
    }, t),
    __render_slotParamsMappingFn: i ? qt(i) : void 0,
    __render_as_item: f,
    __render_restPropsMapping: t
  } : void 0, b = I({
    ...e,
    _internal: {
      ...e._internal,
      index: s ?? e._internal.index
    },
    restProps: d(e.restProps, l),
    originalRestProps: e.restProps
  });
  return i && i.subscribe((c) => {
    b.update((f) => ({
      ...f,
      restProps: {
        ...f.restProps,
        __slotParamsMappingFn: c
      }
    }));
  }), [b, (c) => {
    var f;
    u((f = c.restProps) == null ? void 0 : f.loading_status), b.set({
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
const Yt = "$$ms-gr-slot-key";
function _s() {
  z(Yt, I(void 0));
}
function Zt() {
  return fe(Yt);
}
const Wt = "$$ms-gr-component-slot-context-key";
function bs({
  slot: e,
  index: t,
  subIndex: n
}) {
  return z(Wt, {
    slotKey: I(e),
    slotIndex: I(t),
    subSlotIndex: I(n)
  });
}
function qs() {
  return fe(Wt);
}
function hs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qt = {
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
      for (var o = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (o = i(o, r(s)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return n.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var a = "";
      for (var s in o)
        t.call(o, s) && o[s] && (a = i(a, s));
      return a;
    }
    function i(o, a) {
      return a ? o ? o + " " + a : o + a : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Qt);
var ys = Qt.exports;
const ms = /* @__PURE__ */ hs(ys), {
  SvelteComponent: vs,
  assign: Te,
  check_outros: Ts,
  claim_component: Ps,
  component_subscribe: ee,
  compute_rest_props: pt,
  create_component: Os,
  create_slot: ws,
  destroy_component: As,
  detach: Vt,
  empty: se,
  exclude_internal_props: $s,
  flush: C,
  get_all_dirty_from_scope: Ss,
  get_slot_changes: xs,
  get_spread_object: Cs,
  get_spread_update: js,
  group_outros: Es,
  handle_promise: Is,
  init: Ms,
  insert_hydration: kt,
  mount_component: Fs,
  noop: P,
  safe_not_equal: Rs,
  transition_in: G,
  transition_out: Y,
  update_await_block_branch: Ls,
  update_slot_base: Ds
} = window.__gradio__svelte__internal;
function gt(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Gs,
    then: Ks,
    catch: Ns,
    value: 25,
    blocks: [, , ,]
  };
  return Is(
    /*AwaitedSuggestionItem*/
    e[3],
    r
  ), {
    c() {
      t = se(), r.block.c();
    },
    l(i) {
      t = se(), r.block.l(i);
    },
    m(i, o) {
      kt(i, t, o), r.block.m(i, r.anchor = o), r.mount = () => t.parentNode, r.anchor = t, n = !0;
    },
    p(i, o) {
      e = i, Ls(r, e, o);
    },
    i(i) {
      n || (G(r.block), n = !0);
    },
    o(i) {
      for (let o = 0; o < 3; o += 1) {
        const a = r.blocks[o];
        Y(a);
      }
      n = !1;
    },
    d(i) {
      i && Vt(t), r.block.d(i), r.token = null, r = null;
    }
  };
}
function Ns(e) {
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
function Ks(e) {
  let t, n;
  const r = [
    /*itemProps*/
    e[1].props,
    {
      slots: (
        /*itemProps*/
        e[1].slots
      )
    },
    {
      itemIndex: (
        /*$mergedProps*/
        e[0]._internal.index || 0
      )
    },
    {
      itemSlotKey: (
        /*$slotKey*/
        e[2]
      )
    }
  ];
  let i = {
    $$slots: {
      default: [Us]
    },
    $$scope: {
      ctx: e
    }
  };
  for (let o = 0; o < r.length; o += 1)
    i = Te(i, r[o]);
  return t = new /*SuggestionItem*/
  e[25]({
    props: i
  }), {
    c() {
      Os(t.$$.fragment);
    },
    l(o) {
      Ps(t.$$.fragment, o);
    },
    m(o, a) {
      Fs(t, o, a), n = !0;
    },
    p(o, a) {
      const s = a & /*itemProps, $mergedProps, $slotKey*/
      7 ? js(r, [a & /*itemProps*/
      2 && Cs(
        /*itemProps*/
        o[1].props
      ), a & /*itemProps*/
      2 && {
        slots: (
          /*itemProps*/
          o[1].slots
        )
      }, a & /*$mergedProps*/
      1 && {
        itemIndex: (
          /*$mergedProps*/
          o[0]._internal.index || 0
        )
      }, a & /*$slotKey*/
      4 && {
        itemSlotKey: (
          /*$slotKey*/
          o[2]
        )
      }]) : {};
      a & /*$$scope*/
      2097152 && (s.$$scope = {
        dirty: a,
        ctx: o
      }), t.$set(s);
    },
    i(o) {
      n || (G(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Y(t.$$.fragment, o), n = !1;
    },
    d(o) {
      As(t, o);
    }
  };
}
function Us(e) {
  let t;
  const n = (
    /*#slots*/
    e[20].default
  ), r = ws(
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
    l(i) {
      r && r.l(i);
    },
    m(i, o) {
      r && r.m(i, o), t = !0;
    },
    p(i, o) {
      r && r.p && (!t || o & /*$$scope*/
      2097152) && Ds(
        r,
        n,
        i,
        /*$$scope*/
        i[21],
        t ? xs(
          n,
          /*$$scope*/
          i[21],
          o,
          null
        ) : Ss(
          /*$$scope*/
          i[21]
        ),
        null
      );
    },
    i(i) {
      t || (G(r, i), t = !0);
    },
    o(i) {
      Y(r, i), t = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Gs(e) {
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
function Bs(e) {
  let t, n, r = (
    /*$mergedProps*/
    e[0].visible && gt(e)
  );
  return {
    c() {
      r && r.c(), t = se();
    },
    l(i) {
      r && r.l(i), t = se();
    },
    m(i, o) {
      r && r.m(i, o), kt(i, t, o), n = !0;
    },
    p(i, [o]) {
      /*$mergedProps*/
      i[0].visible ? r ? (r.p(i, o), o & /*$mergedProps*/
      1 && G(r, 1)) : (r = gt(i), r.c(), G(r, 1), r.m(t.parentNode, t)) : r && (Es(), Y(r, 1, 1, () => {
        r = null;
      }), Ts());
    },
    i(i) {
      n || (G(r), n = !0);
    },
    o(i) {
      Y(r), n = !1;
    },
    d(i) {
      i && Vt(t), r && r.d(i);
    }
  };
}
function zs(e, t, n) {
  let r;
  const i = ["gradio", "props", "_internal", "as_item", "label", "value", "visible", "elem_id", "elem_classes", "elem_style"];
  let o = pt(t, i), a, s, u, l, {
    $$slots: d = {},
    $$scope: b
  } = t;
  const c = Va(() => import("./suggestion.item-Yx9Xsi-G.js"));
  let {
    gradio: f
  } = t, {
    props: _ = {}
  } = t;
  const y = I(_);
  ee(e, y, (g) => n(19, u = g));
  let {
    _internal: p = {}
  } = t, {
    as_item: v
  } = t, {
    label: T
  } = t, {
    value: O
  } = t, {
    visible: x = !0
  } = t, {
    elem_id: A = ""
  } = t, {
    elem_classes: Q = []
  } = t, {
    elem_style: V = {}
  } = t;
  const Re = Zt();
  ee(e, Re, (g) => n(2, l = g));
  const [Le, en] = ds({
    gradio: f,
    props: u,
    _internal: p,
    visible: x,
    elem_id: A,
    elem_classes: Q,
    elem_style: V,
    as_item: v,
    label: T,
    value: O,
    restProps: o
  });
  ee(e, Le, (g) => n(0, s = g));
  const pe = ps(), De = us();
  return ee(e, De, (g) => n(18, a = g)), e.$$set = (g) => {
    t = Te(Te({}, t), $s(g)), n(24, o = pt(t, i)), "gradio" in g && n(8, f = g.gradio), "props" in g && n(9, _ = g.props), "_internal" in g && n(10, p = g._internal), "as_item" in g && n(11, v = g.as_item), "label" in g && n(12, T = g.label), "value" in g && n(13, O = g.value), "visible" in g && n(14, x = g.visible), "elem_id" in g && n(15, A = g.elem_id), "elem_classes" in g && n(16, Q = g.elem_classes), "elem_style" in g && n(17, V = g.elem_style), "$$scope" in g && n(21, b = g.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*props*/
    512 && y.update((g) => ({
      ...g,
      ..._
    })), en({
      gradio: f,
      props: u,
      _internal: p,
      visible: x,
      elem_id: A,
      elem_classes: Q,
      elem_style: V,
      as_item: v,
      label: T,
      value: O,
      restProps: o
    }), e.$$.dirty & /*$mergedProps, $slots*/
    262145 && n(1, r = {
      props: {
        style: s.elem_style,
        className: ms(s.elem_classes, "ms-gr-antd-suggestion-item"),
        id: s.elem_id,
        label: s.label,
        value: s.value,
        ...s.restProps,
        ...s.props,
        ...ts(s)
      },
      slots: {
        ...a,
        extra: {
          el: a.extra,
          clone: !0,
          callback: pe
        },
        icon: {
          el: a.icon,
          clone: !0,
          callback: pe
        },
        label: {
          el: a.label,
          clone: !0,
          callback: pe
        }
      }
    });
  }, [s, r, l, c, y, Re, Le, De, f, _, p, v, T, O, x, A, Q, V, a, u, d, b];
}
class Js extends vs {
  constructor(t) {
    super(), Ms(this, t, zs, Bs, Rs, {
      gradio: 8,
      props: 9,
      _internal: 10,
      as_item: 11,
      label: 12,
      value: 13,
      visible: 14,
      elem_id: 15,
      elem_classes: 16,
      elem_style: 17
    });
  }
  get gradio() {
    return this.$$.ctx[8];
  }
  set gradio(t) {
    this.$$set({
      gradio: t
    }), C();
  }
  get props() {
    return this.$$.ctx[9];
  }
  set props(t) {
    this.$$set({
      props: t
    }), C();
  }
  get _internal() {
    return this.$$.ctx[10];
  }
  set _internal(t) {
    this.$$set({
      _internal: t
    }), C();
  }
  get as_item() {
    return this.$$.ctx[11];
  }
  set as_item(t) {
    this.$$set({
      as_item: t
    }), C();
  }
  get label() {
    return this.$$.ctx[12];
  }
  set label(t) {
    this.$$set({
      label: t
    }), C();
  }
  get value() {
    return this.$$.ctx[13];
  }
  set value(t) {
    this.$$set({
      value: t
    }), C();
  }
  get visible() {
    return this.$$.ctx[14];
  }
  set visible(t) {
    this.$$set({
      visible: t
    }), C();
  }
  get elem_id() {
    return this.$$.ctx[15];
  }
  set elem_id(t) {
    this.$$set({
      elem_id: t
    }), C();
  }
  get elem_classes() {
    return this.$$.ctx[16];
  }
  set elem_classes(t) {
    this.$$set({
      elem_classes: t
    }), C();
  }
  get elem_style() {
    return this.$$.ctx[17];
  }
  set elem_style(t) {
    this.$$set({
      elem_style: t
    }), C();
  }
}
export {
  Js as I,
  qs as g,
  I as w
};
