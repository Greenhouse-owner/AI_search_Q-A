function nn(e) {
  return e.replace(/(^|_)(\w)/g, (t, n, r, i) => i === 0 ? r.toLowerCase() : r.toUpperCase());
}
var _t = typeof global == "object" && global && global.Object === Object && global, rn = typeof self == "object" && self && self.Object === Object && self, E = _t || rn || Function("return this")(), A = E.Symbol, bt = Object.prototype, on = bt.hasOwnProperty, an = bt.toString, z = A ? A.toStringTag : void 0;
function sn(e) {
  var t = on.call(e, z), n = e[z];
  try {
    e[z] = void 0;
    var r = !0;
  } catch {
  }
  var i = an.call(e);
  return r && (t ? e[z] = n : delete e[z]), i;
}
var un = Object.prototype, ln = un.toString;
function cn(e) {
  return ln.call(e);
}
var fn = "[object Null]", pn = "[object Undefined]", Ke = A ? A.toStringTag : void 0;
function D(e) {
  return e == null ? e === void 0 ? pn : fn : Ke && Ke in Object(e) ? sn(e) : cn(e);
}
function I(e) {
  return e != null && typeof e == "object";
}
var gn = "[object Symbol]";
function Pe(e) {
  return typeof e == "symbol" || I(e) && D(e) == gn;
}
function ht(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var x = Array.isArray, Ue = A ? A.prototype : void 0, Ge = Ue ? Ue.toString : void 0;
function yt(e) {
  if (typeof e == "string")
    return e;
  if (x(e))
    return ht(e, yt) + "";
  if (Pe(e))
    return Ge ? Ge.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Y(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function mt(e) {
  return e;
}
var dn = "[object AsyncFunction]", _n = "[object Function]", bn = "[object GeneratorFunction]", hn = "[object Proxy]";
function vt(e) {
  if (!Y(e))
    return !1;
  var t = D(e);
  return t == _n || t == bn || t == dn || t == hn;
}
var de = E["__core-js_shared__"], Be = function() {
  var e = /[^.]+$/.exec(de && de.keys && de.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function yn(e) {
  return !!Be && Be in e;
}
var mn = Function.prototype, vn = mn.toString;
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
var Tn = /[\\^$.*+?()[\]{}|]/g, On = /^\[object .+?Constructor\]$/, Pn = Function.prototype, wn = Object.prototype, An = Pn.toString, Sn = wn.hasOwnProperty, $n = RegExp("^" + An.call(Sn).replace(Tn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function xn(e) {
  if (!Y(e) || yn(e))
    return !1;
  var t = vt(e) ? $n : On;
  return t.test(N(e));
}
function Cn(e, t) {
  return e == null ? void 0 : e[t];
}
function K(e, t) {
  var n = Cn(e, t);
  return xn(n) ? n : void 0;
}
var he = K(E, "WeakMap");
function jn(e, t, n) {
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
var En = 800, In = 16, Mn = Date.now;
function Fn(e) {
  var t = 0, n = 0;
  return function() {
    var r = Mn(), i = In - (r - n);
    if (n = r, i > 0) {
      if (++t >= En)
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
var oe = function() {
  try {
    var e = K(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ln = oe ? function(e, t) {
  return oe(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Rn(t),
    writable: !0
  });
} : mt, Dn = Fn(Ln);
function Nn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Kn = 9007199254740991, Un = /^(?:0|[1-9]\d*)$/;
function Tt(e, t) {
  var n = typeof e;
  return t = t ?? Kn, !!t && (n == "number" || n != "symbol" && Un.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function we(e, t, n) {
  t == "__proto__" && oe ? oe(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Ae(e, t) {
  return e === t || e !== e && t !== t;
}
var Gn = Object.prototype, Bn = Gn.hasOwnProperty;
function Ot(e, t, n) {
  var r = e[t];
  (!(Bn.call(e, t) && Ae(r, n)) || n === void 0 && !(t in e)) && we(e, t, n);
}
function zn(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var o = -1, a = t.length; ++o < a; ) {
    var s = t[o], u = void 0;
    u === void 0 && (u = e[s]), i ? we(n, s, u) : Ot(n, s, u);
  }
  return n;
}
var ze = Math.max;
function Hn(e, t, n) {
  return t = ze(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, i = -1, o = ze(r.length - t, 0), a = Array(o); ++i < o; )
      a[i] = r[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = r[i];
    return s[t] = n(a), jn(e, this, s);
  };
}
var qn = 9007199254740991;
function Se(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qn;
}
function Pt(e) {
  return e != null && Se(e.length) && !vt(e);
}
var Jn = Object.prototype;
function wt(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Jn;
  return e === n;
}
function Xn(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Yn = "[object Arguments]";
function He(e) {
  return I(e) && D(e) == Yn;
}
var At = Object.prototype, Zn = At.hasOwnProperty, Wn = At.propertyIsEnumerable, $e = He(/* @__PURE__ */ function() {
  return arguments;
}()) ? He : function(e) {
  return I(e) && Zn.call(e, "callee") && !Wn.call(e, "callee");
};
function Qn() {
  return !1;
}
var St = typeof exports == "object" && exports && !exports.nodeType && exports, qe = St && typeof module == "object" && module && !module.nodeType && module, Vn = qe && qe.exports === St, Je = Vn ? E.Buffer : void 0, kn = Je ? Je.isBuffer : void 0, ae = kn || Qn, er = "[object Arguments]", tr = "[object Array]", nr = "[object Boolean]", rr = "[object Date]", ir = "[object Error]", or = "[object Function]", ar = "[object Map]", sr = "[object Number]", ur = "[object Object]", lr = "[object RegExp]", cr = "[object Set]", fr = "[object String]", pr = "[object WeakMap]", gr = "[object ArrayBuffer]", dr = "[object DataView]", _r = "[object Float32Array]", br = "[object Float64Array]", hr = "[object Int8Array]", yr = "[object Int16Array]", mr = "[object Int32Array]", vr = "[object Uint8Array]", Tr = "[object Uint8ClampedArray]", Or = "[object Uint16Array]", Pr = "[object Uint32Array]", m = {};
m[_r] = m[br] = m[hr] = m[yr] = m[mr] = m[vr] = m[Tr] = m[Or] = m[Pr] = !0;
m[er] = m[tr] = m[gr] = m[nr] = m[dr] = m[rr] = m[ir] = m[or] = m[ar] = m[sr] = m[ur] = m[lr] = m[cr] = m[fr] = m[pr] = !1;
function wr(e) {
  return I(e) && Se(e.length) && !!m[D(e)];
}
function xe(e) {
  return function(t) {
    return e(t);
  };
}
var $t = typeof exports == "object" && exports && !exports.nodeType && exports, H = $t && typeof module == "object" && module && !module.nodeType && module, Ar = H && H.exports === $t, _e = Ar && _t.process, B = function() {
  try {
    var e = H && H.require && H.require("util").types;
    return e || _e && _e.binding && _e.binding("util");
  } catch {
  }
}(), Xe = B && B.isTypedArray, xt = Xe ? xe(Xe) : wr, Sr = Object.prototype, $r = Sr.hasOwnProperty;
function Ct(e, t) {
  var n = x(e), r = !n && $e(e), i = !n && !r && ae(e), o = !n && !r && !i && xt(e), a = n || r || i || o, s = a ? Xn(e.length, String) : [], u = s.length;
  for (var l in e)
    (t || $r.call(e, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Tt(l, u))) && s.push(l);
  return s;
}
function jt(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var xr = jt(Object.keys, Object), Cr = Object.prototype, jr = Cr.hasOwnProperty;
function Er(e) {
  if (!wt(e))
    return xr(e);
  var t = [];
  for (var n in Object(e))
    jr.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ce(e) {
  return Pt(e) ? Ct(e) : Er(e);
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
  if (!Y(e))
    return Ir(e);
  var t = wt(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Fr.call(e, r)) || n.push(r);
  return n;
}
function Lr(e) {
  return Pt(e) ? Ct(e, !0) : Rr(e);
}
var Dr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Nr = /^\w*$/;
function je(e, t) {
  if (x(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Pe(e) ? !0 : Nr.test(e) || !Dr.test(e) || t != null && e in Object(t);
}
var q = K(Object, "create");
function Kr() {
  this.__data__ = q ? q(null) : {}, this.size = 0;
}
function Ur(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Gr = "__lodash_hash_undefined__", Br = Object.prototype, zr = Br.hasOwnProperty;
function Hr(e) {
  var t = this.__data__;
  if (q) {
    var n = t[e];
    return n === Gr ? void 0 : n;
  }
  return zr.call(t, e) ? t[e] : void 0;
}
var qr = Object.prototype, Jr = qr.hasOwnProperty;
function Xr(e) {
  var t = this.__data__;
  return q ? t[e] !== void 0 : Jr.call(t, e);
}
var Yr = "__lodash_hash_undefined__";
function Zr(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = q && t === void 0 ? Yr : t, this;
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
function ce(e, t) {
  for (var n = e.length; n--; )
    if (Ae(e[n][0], t))
      return n;
  return -1;
}
var Qr = Array.prototype, Vr = Qr.splice;
function kr(e) {
  var t = this.__data__, n = ce(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Vr.call(t, n, 1), --this.size, !0;
}
function ei(e) {
  var t = this.__data__, n = ce(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ti(e) {
  return ce(this.__data__, e) > -1;
}
function ni(e, t) {
  var n = this.__data__, r = ce(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function M(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
M.prototype.clear = Wr;
M.prototype.delete = kr;
M.prototype.get = ei;
M.prototype.has = ti;
M.prototype.set = ni;
var J = K(E, "Map");
function ri() {
  this.size = 0, this.__data__ = {
    hash: new L(),
    map: new (J || M)(),
    string: new L()
  };
}
function ii(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function fe(e, t) {
  var n = e.__data__;
  return ii(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function oi(e) {
  var t = fe(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ai(e) {
  return fe(this, e).get(e);
}
function si(e) {
  return fe(this, e).has(e);
}
function ui(e, t) {
  var n = fe(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function F(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
F.prototype.clear = ri;
F.prototype.delete = oi;
F.prototype.get = ai;
F.prototype.has = si;
F.prototype.set = ui;
var li = "Expected a function";
function Ee(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(li);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, r);
    return n.cache = o.set(i, a) || o, a;
  };
  return n.cache = new (Ee.Cache || F)(), n;
}
Ee.Cache = F;
var ci = 500;
function fi(e) {
  var t = Ee(e, function(r) {
    return n.size === ci && n.clear(), r;
  }), n = t.cache;
  return t;
}
var pi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gi = /\\(\\)?/g, di = fi(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(pi, function(n, r, i, o) {
    t.push(i ? o.replace(gi, "$1") : r || n);
  }), t;
});
function _i(e) {
  return e == null ? "" : yt(e);
}
function pe(e, t) {
  return x(e) ? e : je(e, t) ? [e] : di(_i(e));
}
function Z(e) {
  if (typeof e == "string" || Pe(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ie(e, t) {
  t = pe(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Z(t[n++])];
  return n && n == r ? e : void 0;
}
function bi(e, t, n) {
  var r = e == null ? void 0 : Ie(e, t);
  return r === void 0 ? n : r;
}
function Me(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
var Ye = A ? A.isConcatSpreadable : void 0;
function hi(e) {
  return x(e) || $e(e) || !!(Ye && e && e[Ye]);
}
function yi(e, t, n, r, i) {
  var o = -1, a = e.length;
  for (n || (n = hi), i || (i = []); ++o < a; ) {
    var s = e[o];
    n(s) ? Me(i, s) : i[i.length] = s;
  }
  return i;
}
function mi(e) {
  var t = e == null ? 0 : e.length;
  return t ? yi(e) : [];
}
function vi(e) {
  return Dn(Hn(e, void 0, mi), e + "");
}
var Et = jt(Object.getPrototypeOf, Object), Ti = "[object Object]", Oi = Function.prototype, Pi = Object.prototype, It = Oi.toString, wi = Pi.hasOwnProperty, Ai = It.call(Object);
function ye(e) {
  if (!I(e) || D(e) != Ti)
    return !1;
  var t = Et(e);
  if (t === null)
    return !0;
  var n = wi.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && It.call(n) == Ai;
}
function Si(e, t, n) {
  var r = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = e[r + t];
  return o;
}
function $i() {
  this.__data__ = new M(), this.size = 0;
}
function xi(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Ci(e) {
  return this.__data__.get(e);
}
function ji(e) {
  return this.__data__.has(e);
}
var Ei = 200;
function Ii(e, t) {
  var n = this.__data__;
  if (n instanceof M) {
    var r = n.__data__;
    if (!J || r.length < Ei - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new F(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function j(e) {
  var t = this.__data__ = new M(e);
  this.size = t.size;
}
j.prototype.clear = $i;
j.prototype.delete = xi;
j.prototype.get = Ci;
j.prototype.has = ji;
j.prototype.set = Ii;
var Mt = typeof exports == "object" && exports && !exports.nodeType && exports, Ze = Mt && typeof module == "object" && module && !module.nodeType && module, Mi = Ze && Ze.exports === Mt, We = Mi ? E.Buffer : void 0;
We && We.allocUnsafe;
function Fi(e, t) {
  return e.slice();
}
function Ri(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (o[i++] = a);
  }
  return o;
}
function Ft() {
  return [];
}
var Li = Object.prototype, Di = Li.propertyIsEnumerable, Qe = Object.getOwnPropertySymbols, Rt = Qe ? function(e) {
  return e == null ? [] : (e = Object(e), Ri(Qe(e), function(t) {
    return Di.call(e, t);
  }));
} : Ft, Ni = Object.getOwnPropertySymbols, Ki = Ni ? function(e) {
  for (var t = []; e; )
    Me(t, Rt(e)), e = Et(e);
  return t;
} : Ft;
function Lt(e, t, n) {
  var r = t(e);
  return x(e) ? r : Me(r, n(e));
}
function Ve(e) {
  return Lt(e, Ce, Rt);
}
function Dt(e) {
  return Lt(e, Lr, Ki);
}
var me = K(E, "DataView"), ve = K(E, "Promise"), Te = K(E, "Set"), ke = "[object Map]", Ui = "[object Object]", et = "[object Promise]", tt = "[object Set]", nt = "[object WeakMap]", rt = "[object DataView]", Gi = N(me), Bi = N(J), zi = N(ve), Hi = N(Te), qi = N(he), $ = D;
(me && $(new me(new ArrayBuffer(1))) != rt || J && $(new J()) != ke || ve && $(ve.resolve()) != et || Te && $(new Te()) != tt || he && $(new he()) != nt) && ($ = function(e) {
  var t = D(e), n = t == Ui ? e.constructor : void 0, r = n ? N(n) : "";
  if (r)
    switch (r) {
      case Gi:
        return rt;
      case Bi:
        return ke;
      case zi:
        return et;
      case Hi:
        return tt;
      case qi:
        return nt;
    }
  return t;
});
var Ji = Object.prototype, Xi = Ji.hasOwnProperty;
function Yi(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Xi.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var se = E.Uint8Array;
function Fe(e) {
  var t = new e.constructor(e.byteLength);
  return new se(t).set(new se(e)), t;
}
function Zi(e, t) {
  var n = Fe(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Wi = /\w*$/;
function Qi(e) {
  var t = new e.constructor(e.source, Wi.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var it = A ? A.prototype : void 0, ot = it ? it.valueOf : void 0;
function Vi(e) {
  return ot ? Object(ot.call(e)) : {};
}
function ki(e, t) {
  var n = Fe(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
var eo = "[object Boolean]", to = "[object Date]", no = "[object Map]", ro = "[object Number]", io = "[object RegExp]", oo = "[object Set]", ao = "[object String]", so = "[object Symbol]", uo = "[object ArrayBuffer]", lo = "[object DataView]", co = "[object Float32Array]", fo = "[object Float64Array]", po = "[object Int8Array]", go = "[object Int16Array]", _o = "[object Int32Array]", bo = "[object Uint8Array]", ho = "[object Uint8ClampedArray]", yo = "[object Uint16Array]", mo = "[object Uint32Array]";
function vo(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case uo:
      return Fe(e);
    case eo:
    case to:
      return new r(+e);
    case lo:
      return Zi(e);
    case co:
    case fo:
    case po:
    case go:
    case _o:
    case bo:
    case ho:
    case yo:
    case mo:
      return ki(e);
    case no:
      return new r();
    case ro:
    case ao:
      return new r(e);
    case io:
      return Qi(e);
    case oo:
      return new r();
    case so:
      return Vi(e);
  }
}
var To = "[object Map]";
function Oo(e) {
  return I(e) && $(e) == To;
}
var at = B && B.isMap, Po = at ? xe(at) : Oo, wo = "[object Set]";
function Ao(e) {
  return I(e) && $(e) == wo;
}
var st = B && B.isSet, So = st ? xe(st) : Ao, Nt = "[object Arguments]", $o = "[object Array]", xo = "[object Boolean]", Co = "[object Date]", jo = "[object Error]", Kt = "[object Function]", Eo = "[object GeneratorFunction]", Io = "[object Map]", Mo = "[object Number]", Ut = "[object Object]", Fo = "[object RegExp]", Ro = "[object Set]", Lo = "[object String]", Do = "[object Symbol]", No = "[object WeakMap]", Ko = "[object ArrayBuffer]", Uo = "[object DataView]", Go = "[object Float32Array]", Bo = "[object Float64Array]", zo = "[object Int8Array]", Ho = "[object Int16Array]", qo = "[object Int32Array]", Jo = "[object Uint8Array]", Xo = "[object Uint8ClampedArray]", Yo = "[object Uint16Array]", Zo = "[object Uint32Array]", h = {};
h[Nt] = h[$o] = h[Ko] = h[Uo] = h[xo] = h[Co] = h[Go] = h[Bo] = h[zo] = h[Ho] = h[qo] = h[Io] = h[Mo] = h[Ut] = h[Fo] = h[Ro] = h[Lo] = h[Do] = h[Jo] = h[Xo] = h[Yo] = h[Zo] = !0;
h[jo] = h[Kt] = h[No] = !1;
function re(e, t, n, r, i, o) {
  var a;
  if (n && (a = i ? n(e, r, i, o) : n(e)), a !== void 0)
    return a;
  if (!Y(e))
    return e;
  var s = x(e);
  if (s)
    a = Yi(e);
  else {
    var u = $(e), l = u == Kt || u == Eo;
    if (ae(e))
      return Fi(e);
    if (u == Ut || u == Nt || l && !i)
      a = {};
    else {
      if (!h[u])
        return i ? e : {};
      a = vo(e, u);
    }
  }
  o || (o = new j());
  var d = o.get(e);
  if (d)
    return d;
  o.set(e, a), So(e) ? e.forEach(function(f) {
    a.add(re(f, t, n, f, e, o));
  }) : Po(e) && e.forEach(function(f, _) {
    a.set(_, re(f, t, n, _, e, o));
  });
  var b = Dt, c = s ? void 0 : b(e);
  return Nn(c || e, function(f, _) {
    c && (_ = f, f = e[_]), Ot(a, _, re(f, t, n, _, e, o));
  }), a;
}
var Wo = "__lodash_hash_undefined__";
function Qo(e) {
  return this.__data__.set(e, Wo), this;
}
function Vo(e) {
  return this.__data__.has(e);
}
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new F(); ++t < n; )
    this.add(e[t]);
}
ue.prototype.add = ue.prototype.push = Qo;
ue.prototype.has = Vo;
function ko(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ea(e, t) {
  return e.has(t);
}
var ta = 1, na = 2;
function Gt(e, t, n, r, i, o) {
  var a = n & ta, s = e.length, u = t.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(e), d = o.get(t);
  if (l && d)
    return l == t && d == e;
  var b = -1, c = !0, f = n & na ? new ue() : void 0;
  for (o.set(e, t), o.set(t, e); ++b < s; ) {
    var _ = e[b], y = t[b];
    if (r)
      var g = a ? r(y, _, b, t, e, o) : r(_, y, b, e, t, o);
    if (g !== void 0) {
      if (g)
        continue;
      c = !1;
      break;
    }
    if (f) {
      if (!ko(t, function(v, T) {
        if (!ea(f, T) && (_ === v || i(_, v, n, r, o)))
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
function ra(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, i) {
    n[++t] = [i, r];
  }), n;
}
function ia(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var oa = 1, aa = 2, sa = "[object Boolean]", ua = "[object Date]", la = "[object Error]", ca = "[object Map]", fa = "[object Number]", pa = "[object RegExp]", ga = "[object Set]", da = "[object String]", _a = "[object Symbol]", ba = "[object ArrayBuffer]", ha = "[object DataView]", ut = A ? A.prototype : void 0, be = ut ? ut.valueOf : void 0;
function ya(e, t, n, r, i, o, a) {
  switch (n) {
    case ha:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ba:
      return !(e.byteLength != t.byteLength || !o(new se(e), new se(t)));
    case sa:
    case ua:
    case fa:
      return Ae(+e, +t);
    case la:
      return e.name == t.name && e.message == t.message;
    case pa:
    case da:
      return e == t + "";
    case ca:
      var s = ra;
    case ga:
      var u = r & oa;
      if (s || (s = ia), e.size != t.size && !u)
        return !1;
      var l = a.get(e);
      if (l)
        return l == t;
      r |= aa, a.set(e, t);
      var d = Gt(s(e), s(t), r, i, o, a);
      return a.delete(e), d;
    case _a:
      if (be)
        return be.call(e) == be.call(t);
  }
  return !1;
}
var ma = 1, va = Object.prototype, Ta = va.hasOwnProperty;
function Oa(e, t, n, r, i, o) {
  var a = n & ma, s = Ve(e), u = s.length, l = Ve(t), d = l.length;
  if (u != d && !a)
    return !1;
  for (var b = u; b--; ) {
    var c = s[b];
    if (!(a ? c in t : Ta.call(t, c)))
      return !1;
  }
  var f = o.get(e), _ = o.get(t);
  if (f && _)
    return f == t && _ == e;
  var y = !0;
  o.set(e, t), o.set(t, e);
  for (var g = a; ++b < u; ) {
    c = s[b];
    var v = e[c], T = t[c];
    if (r)
      var P = a ? r(T, v, c, t, e, o) : r(v, T, c, e, t, o);
    if (!(P === void 0 ? v === T || i(v, T, n, r, o) : P)) {
      y = !1;
      break;
    }
    g || (g = c == "constructor");
  }
  if (y && !g) {
    var C = e.constructor, S = t.constructor;
    C != S && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof S == "function" && S instanceof S) && (y = !1);
  }
  return o.delete(e), o.delete(t), y;
}
var Pa = 1, lt = "[object Arguments]", ct = "[object Array]", te = "[object Object]", wa = Object.prototype, ft = wa.hasOwnProperty;
function Aa(e, t, n, r, i, o) {
  var a = x(e), s = x(t), u = a ? ct : $(e), l = s ? ct : $(t);
  u = u == lt ? te : u, l = l == lt ? te : l;
  var d = u == te, b = l == te, c = u == l;
  if (c && ae(e)) {
    if (!ae(t))
      return !1;
    a = !0, d = !1;
  }
  if (c && !d)
    return o || (o = new j()), a || xt(e) ? Gt(e, t, n, r, i, o) : ya(e, t, u, n, r, i, o);
  if (!(n & Pa)) {
    var f = d && ft.call(e, "__wrapped__"), _ = b && ft.call(t, "__wrapped__");
    if (f || _) {
      var y = f ? e.value() : e, g = _ ? t.value() : t;
      return o || (o = new j()), i(y, g, n, r, o);
    }
  }
  return c ? (o || (o = new j()), Oa(e, t, n, r, i, o)) : !1;
}
function Re(e, t, n, r, i) {
  return e === t ? !0 : e == null || t == null || !I(e) && !I(t) ? e !== e && t !== t : Aa(e, t, n, r, Re, i);
}
var Sa = 1, $a = 2;
function xa(e, t, n, r) {
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
      if (!(b === void 0 ? Re(l, u, Sa | $a, r, d) : b))
        return !1;
    }
  }
  return !0;
}
function Bt(e) {
  return e === e && !Y(e);
}
function Ca(e) {
  for (var t = Ce(e), n = t.length; n--; ) {
    var r = t[n], i = e[r];
    t[n] = [r, i, Bt(i)];
  }
  return t;
}
function zt(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function ja(e) {
  var t = Ca(e);
  return t.length == 1 && t[0][2] ? zt(t[0][0], t[0][1]) : function(n) {
    return n === e || xa(n, e, t);
  };
}
function Ea(e, t) {
  return e != null && t in Object(e);
}
function Ia(e, t, n) {
  t = pe(t, e);
  for (var r = -1, i = t.length, o = !1; ++r < i; ) {
    var a = Z(t[r]);
    if (!(o = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return o || ++r != i ? o : (i = e == null ? 0 : e.length, !!i && Se(i) && Tt(a, i) && (x(e) || $e(e)));
}
function Ma(e, t) {
  return e != null && Ia(e, t, Ea);
}
var Fa = 1, Ra = 2;
function La(e, t) {
  return je(e) && Bt(t) ? zt(Z(e), t) : function(n) {
    var r = bi(n, e);
    return r === void 0 && r === t ? Ma(n, e) : Re(t, r, Fa | Ra);
  };
}
function Da(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Na(e) {
  return function(t) {
    return Ie(t, e);
  };
}
function Ka(e) {
  return je(e) ? Da(Z(e)) : Na(e);
}
function Ua(e) {
  return typeof e == "function" ? e : e == null ? mt : typeof e == "object" ? x(e) ? La(e[0], e[1]) : ja(e) : Ka(e);
}
function Ga(e) {
  return function(t, n, r) {
    for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
      var u = a[++i];
      if (n(o[u], u, o) === !1)
        break;
    }
    return t;
  };
}
var Ba = Ga();
function za(e, t) {
  return e && Ba(e, t, Ce);
}
function Ha(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function qa(e, t) {
  return t.length < 2 ? e : Ie(e, Si(t, 0, -1));
}
function Ja(e, t) {
  var n = {};
  return t = Ua(t), za(e, function(r, i, o) {
    we(n, t(r, i, o), r);
  }), n;
}
function Xa(e, t) {
  return t = pe(t, e), e = qa(e, t), e == null || delete e[Z(Ha(t))];
}
function Ya(e) {
  return ye(e) ? void 0 : e;
}
var Za = 1, Wa = 2, Qa = 4, Ht = vi(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = ht(t, function(o) {
    return o = pe(o, e), r || (r = o.length > 1), o;
  }), zn(e, Dt(e), n), r && (n = re(n, Za | Wa | Qa, Ya));
  for (var i = t.length; i--; )
    Xa(n, t[i]);
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
const qt = [
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
], es = qt.concat(["attached_events"]);
function ts(e, t = {}, n = !1) {
  return Ja(Ht(e, n ? [] : qt), (r, i) => t[i] || nn(i));
}
function ns(e, t) {
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
        const _ = f.map((g) => f && typeof g == "object" && (g.nativeEvent || g instanceof Event) ? {
          type: g.type,
          detail: g.detail,
          timestamp: g.timeStamp,
          clientX: g.clientX,
          clientY: g.clientY,
          targetId: g.target.id,
          targetClassName: g.target.className,
          altKey: g.altKey,
          ctrlKey: g.ctrlKey,
          shiftKey: g.shiftKey,
          metaKey: g.metaKey
        } : g);
        let y;
        try {
          y = JSON.parse(JSON.stringify(_));
        } catch {
          let g = function(v) {
            try {
              return JSON.stringify(v), v;
            } catch {
              return ye(v) ? Object.fromEntries(Object.entries(v).map(([T, P]) => {
                try {
                  return JSON.stringify(P), [T, P];
                } catch {
                  return ye(P) ? [T, Object.fromEntries(Object.entries(P).filter(([C, S]) => {
                    try {
                      return JSON.stringify(S), !0;
                    } catch {
                      return !1;
                    }
                  }))] : null;
                }
              }).filter(Boolean)) : {};
            }
          };
          y = _.map((v) => g(v));
        }
        return n.dispatch(l.replace(/[A-Z]/g, (g) => "_" + g.toLowerCase()), {
          payload: y,
          component: {
            ...a,
            ...Ht(o, es)
          }
        });
      };
      if (d.length > 1) {
        let f = {
          ...a.props[d[0]] || (i == null ? void 0 : i[d[0]]) || {}
        };
        u[d[0]] = f;
        for (let y = 1; y < d.length - 1; y++) {
          const g = {
            ...a.props[d[y]] || (i == null ? void 0 : i[d[y]]) || {}
          };
          f[d[y]] = g, f = g;
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
function ie() {
}
function rs(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function is(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return ie;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Jt(e) {
  let t;
  return is(e, (n) => t = n)(), t;
}
const U = [];
function R(e, t = ie) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(s) {
    if (rs(e, s) && (e = s, n)) {
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
  function a(s, u = ie) {
    const l = [s, u];
    return r.add(l), r.size === 1 && (n = t(i, o) || ie), s(e), () => {
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
  getContext: os,
  setContext: zs
} = window.__gradio__svelte__internal, as = "$$ms-gr-loading-status-key";
function ss() {
  const e = window.ms_globals.loadingKey++, t = os(as);
  return (n) => {
    if (!t || !n)
      return;
    const {
      loadingStatusMap: r,
      options: i
    } = t, {
      generating: o,
      error: a
    } = Jt(i);
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
  getContext: ge,
  setContext: W
} = window.__gradio__svelte__internal, us = "$$ms-gr-slots-key";
function ls() {
  const e = R({});
  return W(us, e);
}
const Xt = "$$ms-gr-slot-params-mapping-fn-key";
function cs() {
  return ge(Xt);
}
function fs(e) {
  return W(Xt, R(e));
}
const Yt = "$$ms-gr-sub-index-context-key";
function ps() {
  return ge(Yt) || null;
}
function pt(e) {
  return W(Yt, e);
}
function gs(e, t, n) {
  if (!Reflect.has(e, "as_item") || !Reflect.has(e, "_internal"))
    throw new Error("`as_item` and `_internal` is required");
  const r = Wt(), i = cs();
  fs().set(void 0);
  const a = _s({
    slot: void 0,
    index: e._internal.index,
    subIndex: e._internal.subIndex
  }), s = ps();
  typeof s == "number" && pt(void 0);
  const u = ss();
  typeof e._internal.subIndex == "number" && pt(e._internal.subIndex), r && r.subscribe((c) => {
    a.slotKey.set(c);
  }), ds();
  const l = e.as_item, d = (c, f) => c ? {
    ...ts({
      ...c
    }, t),
    __render_slotParamsMappingFn: i ? Jt(i) : void 0,
    __render_as_item: f,
    __render_restPropsMapping: t
  } : void 0, b = R({
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
const Zt = "$$ms-gr-slot-key";
function ds() {
  W(Zt, R(void 0));
}
function Wt() {
  return ge(Zt);
}
const Qt = "$$ms-gr-component-slot-context-key";
function _s({
  slot: e,
  index: t,
  subIndex: n
}) {
  return W(Qt, {
    slotKey: R(e),
    slotIndex: R(t),
    subSlotIndex: R(n)
  });
}
function Hs() {
  return ge(Qt);
}
function bs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vt = {
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
})(Vt);
var hs = Vt.exports;
const ys = /* @__PURE__ */ bs(hs), {
  SvelteComponent: ms,
  assign: Oe,
  check_outros: vs,
  claim_component: Ts,
  component_subscribe: ne,
  compute_rest_props: gt,
  create_component: Os,
  create_slot: Ps,
  destroy_component: ws,
  detach: kt,
  empty: le,
  exclude_internal_props: As,
  flush: w,
  get_all_dirty_from_scope: Ss,
  get_slot_changes: $s,
  get_spread_object: xs,
  get_spread_update: Cs,
  group_outros: js,
  handle_promise: Es,
  init: Is,
  insert_hydration: en,
  mount_component: Ms,
  noop: O,
  safe_not_equal: Fs,
  transition_in: G,
  transition_out: X,
  update_await_block_branch: Rs,
  update_slot_base: Ls
} = window.__gradio__svelte__internal;
function Ds(e) {
  return {
    c: O,
    l: O,
    m: O,
    p: O,
    i: O,
    o: O,
    d: O
  };
}
function Ns(e) {
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
      default: [Ks]
    },
    $$scope: {
      ctx: e
    }
  };
  for (let o = 0; o < r.length; o += 1)
    i = Oe(i, r[o]);
  return t = new /*MentionsOption*/
  e[26]({
    props: i
  }), {
    c() {
      Os(t.$$.fragment);
    },
    l(o) {
      Ts(t.$$.fragment, o);
    },
    m(o, a) {
      Ms(t, o, a), n = !0;
    },
    p(o, a) {
      const s = a & /*itemProps, $mergedProps, $slotKey*/
      7 ? Cs(r, [a & /*itemProps*/
      2 && xs(
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
      a & /*$$scope, $mergedProps*/
      8388609 && (s.$$scope = {
        dirty: a,
        ctx: o
      }), t.$set(s);
    },
    i(o) {
      n || (G(t.$$.fragment, o), n = !0);
    },
    o(o) {
      X(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ws(t, o);
    }
  };
}
function dt(e) {
  let t;
  const n = (
    /*#slots*/
    e[22].default
  ), r = Ps(
    n,
    e,
    /*$$scope*/
    e[23],
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
      8388608) && Ls(
        r,
        n,
        i,
        /*$$scope*/
        i[23],
        t ? $s(
          n,
          /*$$scope*/
          i[23],
          o,
          null
        ) : Ss(
          /*$$scope*/
          i[23]
        ),
        null
      );
    },
    i(i) {
      t || (G(r, i), t = !0);
    },
    o(i) {
      X(r, i), t = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Ks(e) {
  let t, n, r = (
    /*$mergedProps*/
    e[0].visible && dt(e)
  );
  return {
    c() {
      r && r.c(), t = le();
    },
    l(i) {
      r && r.l(i), t = le();
    },
    m(i, o) {
      r && r.m(i, o), en(i, t, o), n = !0;
    },
    p(i, o) {
      /*$mergedProps*/
      i[0].visible ? r ? (r.p(i, o), o & /*$mergedProps*/
      1 && G(r, 1)) : (r = dt(i), r.c(), G(r, 1), r.m(t.parentNode, t)) : r && (js(), X(r, 1, 1, () => {
        r = null;
      }), vs());
    },
    i(i) {
      n || (G(r), n = !0);
    },
    o(i) {
      X(r), n = !1;
    },
    d(i) {
      i && kt(t), r && r.d(i);
    }
  };
}
function Us(e) {
  return {
    c: O,
    l: O,
    m: O,
    p: O,
    i: O,
    o: O,
    d: O
  };
}
function Gs(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Us,
    then: Ns,
    catch: Ds,
    value: 26,
    blocks: [, , ,]
  };
  return Es(
    /*AwaitedMentionsOption*/
    e[3],
    r
  ), {
    c() {
      t = le(), r.block.c();
    },
    l(i) {
      t = le(), r.block.l(i);
    },
    m(i, o) {
      en(i, t, o), r.block.m(i, r.anchor = o), r.mount = () => t.parentNode, r.anchor = t, n = !0;
    },
    p(i, [o]) {
      e = i, Rs(r, e, o);
    },
    i(i) {
      n || (G(r.block), n = !0);
    },
    o(i) {
      for (let o = 0; o < 3; o += 1) {
        const a = r.blocks[o];
        X(a);
      }
      n = !1;
    },
    d(i) {
      i && kt(t), r.block.d(i), r.token = null, r = null;
    }
  };
}
function Bs(e, t, n) {
  let r;
  const i = ["gradio", "props", "_internal", "value", "label", "disabled", "key", "as_item", "visible", "elem_id", "elem_classes", "elem_style"];
  let o = gt(t, i), a, s, u, l, {
    $$slots: d = {},
    $$scope: b
  } = t;
  const c = ka(() => import("./mentions.option-BPrmKEvf.js"));
  let {
    gradio: f
  } = t, {
    props: _ = {}
  } = t;
  const y = R(_);
  ne(e, y, (p) => n(21, u = p));
  let {
    _internal: g = {}
  } = t, {
    value: v
  } = t, {
    label: T
  } = t, {
    disabled: P
  } = t, {
    key: C
  } = t, {
    as_item: S
  } = t, {
    visible: Q = !0
  } = t, {
    elem_id: V = ""
  } = t, {
    elem_classes: k = []
  } = t, {
    elem_style: ee = {}
  } = t;
  const Le = Wt();
  ne(e, Le, (p) => n(2, l = p));
  const [De, tn] = gs({
    gradio: f,
    props: u,
    _internal: g,
    visible: Q,
    elem_id: V,
    elem_classes: k,
    elem_style: ee,
    as_item: S,
    value: v,
    disabled: P,
    key: C,
    label: T,
    restProps: o
  });
  ne(e, De, (p) => n(0, s = p));
  const Ne = ls();
  return ne(e, Ne, (p) => n(20, a = p)), e.$$set = (p) => {
    t = Oe(Oe({}, t), As(p)), n(25, o = gt(t, i)), "gradio" in p && n(8, f = p.gradio), "props" in p && n(9, _ = p.props), "_internal" in p && n(10, g = p._internal), "value" in p && n(11, v = p.value), "label" in p && n(12, T = p.label), "disabled" in p && n(13, P = p.disabled), "key" in p && n(14, C = p.key), "as_item" in p && n(15, S = p.as_item), "visible" in p && n(16, Q = p.visible), "elem_id" in p && n(17, V = p.elem_id), "elem_classes" in p && n(18, k = p.elem_classes), "elem_style" in p && n(19, ee = p.elem_style), "$$scope" in p && n(23, b = p.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*props*/
    512 && y.update((p) => ({
      ...p,
      ..._
    })), tn({
      gradio: f,
      props: u,
      _internal: g,
      visible: Q,
      elem_id: V,
      elem_classes: k,
      elem_style: ee,
      as_item: S,
      value: v,
      disabled: P,
      key: C,
      label: T,
      restProps: o
    }), e.$$.dirty & /*$mergedProps, $slots*/
    1048577 && n(1, r = {
      props: {
        style: s.elem_style,
        className: ys(s.elem_classes, "ms-gr-antd-mentions-option"),
        id: s.elem_id,
        value: s.value,
        label: s.label,
        disabled: s.disabled,
        key: s.key,
        ...s.restProps,
        ...s.props,
        ...ns(s)
      },
      slots: a
    });
  }, [s, r, l, c, y, Le, De, Ne, f, _, g, v, T, P, C, S, Q, V, k, ee, a, u, d, b];
}
class qs extends ms {
  constructor(t) {
    super(), Is(this, t, Bs, Gs, Fs, {
      gradio: 8,
      props: 9,
      _internal: 10,
      value: 11,
      label: 12,
      disabled: 13,
      key: 14,
      as_item: 15,
      visible: 16,
      elem_id: 17,
      elem_classes: 18,
      elem_style: 19
    });
  }
  get gradio() {
    return this.$$.ctx[8];
  }
  set gradio(t) {
    this.$$set({
      gradio: t
    }), w();
  }
  get props() {
    return this.$$.ctx[9];
  }
  set props(t) {
    this.$$set({
      props: t
    }), w();
  }
  get _internal() {
    return this.$$.ctx[10];
  }
  set _internal(t) {
    this.$$set({
      _internal: t
    }), w();
  }
  get value() {
    return this.$$.ctx[11];
  }
  set value(t) {
    this.$$set({
      value: t
    }), w();
  }
  get label() {
    return this.$$.ctx[12];
  }
  set label(t) {
    this.$$set({
      label: t
    }), w();
  }
  get disabled() {
    return this.$$.ctx[13];
  }
  set disabled(t) {
    this.$$set({
      disabled: t
    }), w();
  }
  get key() {
    return this.$$.ctx[14];
  }
  set key(t) {
    this.$$set({
      key: t
    }), w();
  }
  get as_item() {
    return this.$$.ctx[15];
  }
  set as_item(t) {
    this.$$set({
      as_item: t
    }), w();
  }
  get visible() {
    return this.$$.ctx[16];
  }
  set visible(t) {
    this.$$set({
      visible: t
    }), w();
  }
  get elem_id() {
    return this.$$.ctx[17];
  }
  set elem_id(t) {
    this.$$set({
      elem_id: t
    }), w();
  }
  get elem_classes() {
    return this.$$.ctx[18];
  }
  set elem_classes(t) {
    this.$$set({
      elem_classes: t
    }), w();
  }
  get elem_style() {
    return this.$$.ctx[19];
  }
  set elem_style(t) {
    this.$$set({
      elem_style: t
    }), w();
  }
}
export {
  qs as I,
  Hs as g,
  R as w
};
