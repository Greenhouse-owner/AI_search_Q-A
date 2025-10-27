function Qt(e) {
  return e.replace(/(^|_)(\w)/g, (t, n, r, o) => o === 0 ? r.toLowerCase() : r.toUpperCase());
}
var pt = typeof global == "object" && global && global.Object === Object && global, Vt = typeof self == "object" && self && self.Object === Object && self, x = pt || Vt || Function("return this")(), w = x.Symbol, gt = Object.prototype, kt = gt.hasOwnProperty, en = gt.toString, z = w ? w.toStringTag : void 0;
function tn(e) {
  var t = kt.call(e, z), n = e[z];
  try {
    e[z] = void 0;
    var r = !0;
  } catch {
  }
  var o = en.call(e);
  return r && (t ? e[z] = n : delete e[z]), o;
}
var nn = Object.prototype, rn = nn.toString;
function on(e) {
  return rn.call(e);
}
var an = "[object Null]", sn = "[object Undefined]", Fe = w ? w.toStringTag : void 0;
function D(e) {
  return e == null ? e === void 0 ? sn : an : Fe && Fe in Object(e) ? tn(e) : on(e);
}
function E(e) {
  return e != null && typeof e == "object";
}
var un = "[object Symbol]";
function ve(e) {
  return typeof e == "symbol" || E(e) && D(e) == un;
}
function dt(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var A = Array.isArray, Re = w ? w.prototype : void 0, Le = Re ? Re.toString : void 0;
function _t(e) {
  if (typeof e == "string")
    return e;
  if (A(e))
    return dt(e, _t) + "";
  if (ve(e))
    return Le ? Le.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Y(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function bt(e) {
  return e;
}
var ln = "[object AsyncFunction]", cn = "[object Function]", fn = "[object GeneratorFunction]", pn = "[object Proxy]";
function ht(e) {
  if (!Y(e))
    return !1;
  var t = D(e);
  return t == cn || t == fn || t == ln || t == pn;
}
var le = x["__core-js_shared__"], De = function() {
  var e = /[^.]+$/.exec(le && le.keys && le.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function gn(e) {
  return !!De && De in e;
}
var dn = Function.prototype, _n = dn.toString;
function N(e) {
  if (e != null) {
    try {
      return _n.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var bn = /[\\^$.*+?()[\]{}|]/g, hn = /^\[object .+?Constructor\]$/, yn = Function.prototype, mn = Object.prototype, vn = yn.toString, Tn = mn.hasOwnProperty, Pn = RegExp("^" + vn.call(Tn).replace(bn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function wn(e) {
  if (!Y(e) || gn(e))
    return !1;
  var t = ht(e) ? Pn : hn;
  return t.test(N(e));
}
function On(e, t) {
  return e == null ? void 0 : e[t];
}
function K(e, t) {
  var n = On(e, t);
  return wn(n) ? n : void 0;
}
var de = K(x, "WeakMap");
function An(e, t, n) {
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
var $n = 800, Sn = 16, xn = Date.now;
function Cn(e) {
  var t = 0, n = 0;
  return function() {
    var r = xn(), o = Sn - (r - n);
    if (n = r, o > 0) {
      if (++t >= $n)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function jn(e) {
  return function() {
    return e;
  };
}
var k = function() {
  try {
    var e = K(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), En = k ? function(e, t) {
  return k(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: jn(t),
    writable: !0
  });
} : bt, In = Cn(En);
function Mn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Fn = 9007199254740991, Rn = /^(?:0|[1-9]\d*)$/;
function yt(e, t) {
  var n = typeof e;
  return t = t ?? Fn, !!t && (n == "number" || n != "symbol" && Rn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Te(e, t, n) {
  t == "__proto__" && k ? k(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Pe(e, t) {
  return e === t || e !== e && t !== t;
}
var Ln = Object.prototype, Dn = Ln.hasOwnProperty;
function mt(e, t, n) {
  var r = e[t];
  (!(Dn.call(e, t) && Pe(r, n)) || n === void 0 && !(t in e)) && Te(e, t, n);
}
function Nn(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], u = void 0;
    u === void 0 && (u = e[s]), o ? Te(n, s, u) : mt(n, s, u);
  }
  return n;
}
var Ne = Math.max;
function Kn(e, t, n) {
  return t = Ne(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = Ne(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(a), An(e, this, s);
  };
}
var Un = 9007199254740991;
function we(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Un;
}
function vt(e) {
  return e != null && we(e.length) && !ht(e);
}
var Gn = Object.prototype;
function Tt(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Gn;
  return e === n;
}
function Bn(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var zn = "[object Arguments]";
function Ke(e) {
  return E(e) && D(e) == zn;
}
var Pt = Object.prototype, Hn = Pt.hasOwnProperty, qn = Pt.propertyIsEnumerable, Oe = Ke(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ke : function(e) {
  return E(e) && Hn.call(e, "callee") && !qn.call(e, "callee");
};
function Jn() {
  return !1;
}
var wt = typeof exports == "object" && exports && !exports.nodeType && exports, Ue = wt && typeof module == "object" && module && !module.nodeType && module, Xn = Ue && Ue.exports === wt, Ge = Xn ? x.Buffer : void 0, Yn = Ge ? Ge.isBuffer : void 0, ee = Yn || Jn, Zn = "[object Arguments]", Wn = "[object Array]", Qn = "[object Boolean]", Vn = "[object Date]", kn = "[object Error]", er = "[object Function]", tr = "[object Map]", nr = "[object Number]", rr = "[object Object]", ir = "[object RegExp]", or = "[object Set]", ar = "[object String]", sr = "[object WeakMap]", ur = "[object ArrayBuffer]", lr = "[object DataView]", cr = "[object Float32Array]", fr = "[object Float64Array]", pr = "[object Int8Array]", gr = "[object Int16Array]", dr = "[object Int32Array]", _r = "[object Uint8Array]", br = "[object Uint8ClampedArray]", hr = "[object Uint16Array]", yr = "[object Uint32Array]", m = {};
m[cr] = m[fr] = m[pr] = m[gr] = m[dr] = m[_r] = m[br] = m[hr] = m[yr] = !0;
m[Zn] = m[Wn] = m[ur] = m[Qn] = m[lr] = m[Vn] = m[kn] = m[er] = m[tr] = m[nr] = m[rr] = m[ir] = m[or] = m[ar] = m[sr] = !1;
function mr(e) {
  return E(e) && we(e.length) && !!m[D(e)];
}
function Ae(e) {
  return function(t) {
    return e(t);
  };
}
var Ot = typeof exports == "object" && exports && !exports.nodeType && exports, H = Ot && typeof module == "object" && module && !module.nodeType && module, vr = H && H.exports === Ot, ce = vr && pt.process, G = function() {
  try {
    var e = H && H.require && H.require("util").types;
    return e || ce && ce.binding && ce.binding("util");
  } catch {
  }
}(), Be = G && G.isTypedArray, At = Be ? Ae(Be) : mr, Tr = Object.prototype, Pr = Tr.hasOwnProperty;
function $t(e, t) {
  var n = A(e), r = !n && Oe(e), o = !n && !r && ee(e), i = !n && !r && !o && At(e), a = n || r || o || i, s = a ? Bn(e.length, String) : [], u = s.length;
  for (var l in e)
    (t || Pr.call(e, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    yt(l, u))) && s.push(l);
  return s;
}
function St(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var wr = St(Object.keys, Object), Or = Object.prototype, Ar = Or.hasOwnProperty;
function $r(e) {
  if (!Tt(e))
    return wr(e);
  var t = [];
  for (var n in Object(e))
    Ar.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function $e(e) {
  return vt(e) ? $t(e) : $r(e);
}
function Sr(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var xr = Object.prototype, Cr = xr.hasOwnProperty;
function jr(e) {
  if (!Y(e))
    return Sr(e);
  var t = Tt(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Cr.call(e, r)) || n.push(r);
  return n;
}
function Er(e) {
  return vt(e) ? $t(e, !0) : jr(e);
}
var Ir = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mr = /^\w*$/;
function Se(e, t) {
  if (A(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ve(e) ? !0 : Mr.test(e) || !Ir.test(e) || t != null && e in Object(t);
}
var J = K(Object, "create");
function Fr() {
  this.__data__ = J ? J(null) : {}, this.size = 0;
}
function Rr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Lr = "__lodash_hash_undefined__", Dr = Object.prototype, Nr = Dr.hasOwnProperty;
function Kr(e) {
  var t = this.__data__;
  if (J) {
    var n = t[e];
    return n === Lr ? void 0 : n;
  }
  return Nr.call(t, e) ? t[e] : void 0;
}
var Ur = Object.prototype, Gr = Ur.hasOwnProperty;
function Br(e) {
  var t = this.__data__;
  return J ? t[e] !== void 0 : Gr.call(t, e);
}
var zr = "__lodash_hash_undefined__";
function Hr(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = J && t === void 0 ? zr : t, this;
}
function L(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
L.prototype.clear = Fr;
L.prototype.delete = Rr;
L.prototype.get = Kr;
L.prototype.has = Br;
L.prototype.set = Hr;
function qr() {
  this.__data__ = [], this.size = 0;
}
function oe(e, t) {
  for (var n = e.length; n--; )
    if (Pe(e[n][0], t))
      return n;
  return -1;
}
var Jr = Array.prototype, Xr = Jr.splice;
function Yr(e) {
  var t = this.__data__, n = oe(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Xr.call(t, n, 1), --this.size, !0;
}
function Zr(e) {
  var t = this.__data__, n = oe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Wr(e) {
  return oe(this.__data__, e) > -1;
}
function Qr(e, t) {
  var n = this.__data__, r = oe(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function I(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
I.prototype.clear = qr;
I.prototype.delete = Yr;
I.prototype.get = Zr;
I.prototype.has = Wr;
I.prototype.set = Qr;
var X = K(x, "Map");
function Vr() {
  this.size = 0, this.__data__ = {
    hash: new L(),
    map: new (X || I)(),
    string: new L()
  };
}
function kr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ae(e, t) {
  var n = e.__data__;
  return kr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ei(e) {
  var t = ae(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ti(e) {
  return ae(this, e).get(e);
}
function ni(e) {
  return ae(this, e).has(e);
}
function ri(e, t) {
  var n = ae(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function M(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
M.prototype.clear = Vr;
M.prototype.delete = ei;
M.prototype.get = ti;
M.prototype.has = ni;
M.prototype.set = ri;
var ii = "Expected a function";
function xe(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ii);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (xe.Cache || M)(), n;
}
xe.Cache = M;
var oi = 500;
function ai(e) {
  var t = xe(e, function(r) {
    return n.size === oi && n.clear(), r;
  }), n = t.cache;
  return t;
}
var si = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ui = /\\(\\)?/g, li = ai(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(si, function(n, r, o, i) {
    t.push(o ? i.replace(ui, "$1") : r || n);
  }), t;
});
function ci(e) {
  return e == null ? "" : _t(e);
}
function se(e, t) {
  return A(e) ? e : Se(e, t) ? [e] : li(ci(e));
}
function Z(e) {
  if (typeof e == "string" || ve(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ce(e, t) {
  t = se(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Z(t[n++])];
  return n && n == r ? e : void 0;
}
function fi(e, t, n) {
  var r = e == null ? void 0 : Ce(e, t);
  return r === void 0 ? n : r;
}
function je(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var ze = w ? w.isConcatSpreadable : void 0;
function pi(e) {
  return A(e) || Oe(e) || !!(ze && e && e[ze]);
}
function gi(e, t, n, r, o) {
  var i = -1, a = e.length;
  for (n || (n = pi), o || (o = []); ++i < a; ) {
    var s = e[i];
    n(s) ? je(o, s) : o[o.length] = s;
  }
  return o;
}
function di(e) {
  var t = e == null ? 0 : e.length;
  return t ? gi(e) : [];
}
function _i(e) {
  return In(Kn(e, void 0, di), e + "");
}
var xt = St(Object.getPrototypeOf, Object), bi = "[object Object]", hi = Function.prototype, yi = Object.prototype, Ct = hi.toString, mi = yi.hasOwnProperty, vi = Ct.call(Object);
function _e(e) {
  if (!E(e) || D(e) != bi)
    return !1;
  var t = xt(e);
  if (t === null)
    return !0;
  var n = mi.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ct.call(n) == vi;
}
function Ti(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++r < o; )
    i[r] = e[r + t];
  return i;
}
function Pi() {
  this.__data__ = new I(), this.size = 0;
}
function wi(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Oi(e) {
  return this.__data__.get(e);
}
function Ai(e) {
  return this.__data__.has(e);
}
var $i = 200;
function Si(e, t) {
  var n = this.__data__;
  if (n instanceof I) {
    var r = n.__data__;
    if (!X || r.length < $i - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new M(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function S(e) {
  var t = this.__data__ = new I(e);
  this.size = t.size;
}
S.prototype.clear = Pi;
S.prototype.delete = wi;
S.prototype.get = Oi;
S.prototype.has = Ai;
S.prototype.set = Si;
var jt = typeof exports == "object" && exports && !exports.nodeType && exports, He = jt && typeof module == "object" && module && !module.nodeType && module, xi = He && He.exports === jt, qe = xi ? x.Buffer : void 0;
qe && qe.allocUnsafe;
function Ci(e, t) {
  return e.slice();
}
function ji(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function Et() {
  return [];
}
var Ei = Object.prototype, Ii = Ei.propertyIsEnumerable, Je = Object.getOwnPropertySymbols, It = Je ? function(e) {
  return e == null ? [] : (e = Object(e), ji(Je(e), function(t) {
    return Ii.call(e, t);
  }));
} : Et, Mi = Object.getOwnPropertySymbols, Fi = Mi ? function(e) {
  for (var t = []; e; )
    je(t, It(e)), e = xt(e);
  return t;
} : Et;
function Mt(e, t, n) {
  var r = t(e);
  return A(e) ? r : je(r, n(e));
}
function Xe(e) {
  return Mt(e, $e, It);
}
function Ft(e) {
  return Mt(e, Er, Fi);
}
var be = K(x, "DataView"), he = K(x, "Promise"), ye = K(x, "Set"), Ye = "[object Map]", Ri = "[object Object]", Ze = "[object Promise]", We = "[object Set]", Qe = "[object WeakMap]", Ve = "[object DataView]", Li = N(be), Di = N(X), Ni = N(he), Ki = N(ye), Ui = N(de), O = D;
(be && O(new be(new ArrayBuffer(1))) != Ve || X && O(new X()) != Ye || he && O(he.resolve()) != Ze || ye && O(new ye()) != We || de && O(new de()) != Qe) && (O = function(e) {
  var t = D(e), n = t == Ri ? e.constructor : void 0, r = n ? N(n) : "";
  if (r)
    switch (r) {
      case Li:
        return Ve;
      case Di:
        return Ye;
      case Ni:
        return Ze;
      case Ki:
        return We;
      case Ui:
        return Qe;
    }
  return t;
});
var Gi = Object.prototype, Bi = Gi.hasOwnProperty;
function zi(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Bi.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var te = x.Uint8Array;
function Ee(e) {
  var t = new e.constructor(e.byteLength);
  return new te(t).set(new te(e)), t;
}
function Hi(e, t) {
  var n = Ee(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var qi = /\w*$/;
function Ji(e) {
  var t = new e.constructor(e.source, qi.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var ke = w ? w.prototype : void 0, et = ke ? ke.valueOf : void 0;
function Xi(e) {
  return et ? Object(et.call(e)) : {};
}
function Yi(e, t) {
  var n = Ee(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
var Zi = "[object Boolean]", Wi = "[object Date]", Qi = "[object Map]", Vi = "[object Number]", ki = "[object RegExp]", eo = "[object Set]", to = "[object String]", no = "[object Symbol]", ro = "[object ArrayBuffer]", io = "[object DataView]", oo = "[object Float32Array]", ao = "[object Float64Array]", so = "[object Int8Array]", uo = "[object Int16Array]", lo = "[object Int32Array]", co = "[object Uint8Array]", fo = "[object Uint8ClampedArray]", po = "[object Uint16Array]", go = "[object Uint32Array]";
function _o(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case ro:
      return Ee(e);
    case Zi:
    case Wi:
      return new r(+e);
    case io:
      return Hi(e);
    case oo:
    case ao:
    case so:
    case uo:
    case lo:
    case co:
    case fo:
    case po:
    case go:
      return Yi(e);
    case Qi:
      return new r();
    case Vi:
    case to:
      return new r(e);
    case ki:
      return Ji(e);
    case eo:
      return new r();
    case no:
      return Xi(e);
  }
}
var bo = "[object Map]";
function ho(e) {
  return E(e) && O(e) == bo;
}
var tt = G && G.isMap, yo = tt ? Ae(tt) : ho, mo = "[object Set]";
function vo(e) {
  return E(e) && O(e) == mo;
}
var nt = G && G.isSet, To = nt ? Ae(nt) : vo, Rt = "[object Arguments]", Po = "[object Array]", wo = "[object Boolean]", Oo = "[object Date]", Ao = "[object Error]", Lt = "[object Function]", $o = "[object GeneratorFunction]", So = "[object Map]", xo = "[object Number]", Dt = "[object Object]", Co = "[object RegExp]", jo = "[object Set]", Eo = "[object String]", Io = "[object Symbol]", Mo = "[object WeakMap]", Fo = "[object ArrayBuffer]", Ro = "[object DataView]", Lo = "[object Float32Array]", Do = "[object Float64Array]", No = "[object Int8Array]", Ko = "[object Int16Array]", Uo = "[object Int32Array]", Go = "[object Uint8Array]", Bo = "[object Uint8ClampedArray]", zo = "[object Uint16Array]", Ho = "[object Uint32Array]", y = {};
y[Rt] = y[Po] = y[Fo] = y[Ro] = y[wo] = y[Oo] = y[Lo] = y[Do] = y[No] = y[Ko] = y[Uo] = y[So] = y[xo] = y[Dt] = y[Co] = y[jo] = y[Eo] = y[Io] = y[Go] = y[Bo] = y[zo] = y[Ho] = !0;
y[Ao] = y[Lt] = y[Mo] = !1;
function Q(e, t, n, r, o, i) {
  var a;
  if (n && (a = o ? n(e, r, o, i) : n(e)), a !== void 0)
    return a;
  if (!Y(e))
    return e;
  var s = A(e);
  if (s)
    a = zi(e);
  else {
    var u = O(e), l = u == Lt || u == $o;
    if (ee(e))
      return Ci(e);
    if (u == Dt || u == Rt || l && !o)
      a = {};
    else {
      if (!y[u])
        return o ? e : {};
      a = _o(e, u);
    }
  }
  i || (i = new S());
  var g = i.get(e);
  if (g)
    return g;
  i.set(e, a), To(e) ? e.forEach(function(f) {
    a.add(Q(f, t, n, f, e, i));
  }) : yo(e) && e.forEach(function(f, d) {
    a.set(d, Q(f, t, n, d, e, i));
  });
  var _ = Ft, c = s ? void 0 : _(e);
  return Mn(c || e, function(f, d) {
    c && (d = f, f = e[d]), mt(a, d, Q(f, t, n, d, e, i));
  }), a;
}
var qo = "__lodash_hash_undefined__";
function Jo(e) {
  return this.__data__.set(e, qo), this;
}
function Xo(e) {
  return this.__data__.has(e);
}
function ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new M(); ++t < n; )
    this.add(e[t]);
}
ne.prototype.add = ne.prototype.push = Jo;
ne.prototype.has = Xo;
function Yo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Zo(e, t) {
  return e.has(t);
}
var Wo = 1, Qo = 2;
function Nt(e, t, n, r, o, i) {
  var a = n & Wo, s = e.length, u = t.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = i.get(e), g = i.get(t);
  if (l && g)
    return l == t && g == e;
  var _ = -1, c = !0, f = n & Qo ? new ne() : void 0;
  for (i.set(e, t), i.set(t, e); ++_ < s; ) {
    var d = e[_], h = t[_];
    if (r)
      var p = a ? r(h, d, _, t, e, i) : r(d, h, _, e, t, i);
    if (p !== void 0) {
      if (p)
        continue;
      c = !1;
      break;
    }
    if (f) {
      if (!Yo(t, function(v, T) {
        if (!Zo(f, T) && (d === v || o(d, v, n, r, i)))
          return f.push(T);
      })) {
        c = !1;
        break;
      }
    } else if (!(d === h || o(d, h, n, r, i))) {
      c = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), c;
}
function Vo(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function ko(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ea = 1, ta = 2, na = "[object Boolean]", ra = "[object Date]", ia = "[object Error]", oa = "[object Map]", aa = "[object Number]", sa = "[object RegExp]", ua = "[object Set]", la = "[object String]", ca = "[object Symbol]", fa = "[object ArrayBuffer]", pa = "[object DataView]", rt = w ? w.prototype : void 0, fe = rt ? rt.valueOf : void 0;
function ga(e, t, n, r, o, i, a) {
  switch (n) {
    case pa:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case fa:
      return !(e.byteLength != t.byteLength || !i(new te(e), new te(t)));
    case na:
    case ra:
    case aa:
      return Pe(+e, +t);
    case ia:
      return e.name == t.name && e.message == t.message;
    case sa:
    case la:
      return e == t + "";
    case oa:
      var s = Vo;
    case ua:
      var u = r & ea;
      if (s || (s = ko), e.size != t.size && !u)
        return !1;
      var l = a.get(e);
      if (l)
        return l == t;
      r |= ta, a.set(e, t);
      var g = Nt(s(e), s(t), r, o, i, a);
      return a.delete(e), g;
    case ca:
      if (fe)
        return fe.call(e) == fe.call(t);
  }
  return !1;
}
var da = 1, _a = Object.prototype, ba = _a.hasOwnProperty;
function ha(e, t, n, r, o, i) {
  var a = n & da, s = Xe(e), u = s.length, l = Xe(t), g = l.length;
  if (u != g && !a)
    return !1;
  for (var _ = u; _--; ) {
    var c = s[_];
    if (!(a ? c in t : ba.call(t, c)))
      return !1;
  }
  var f = i.get(e), d = i.get(t);
  if (f && d)
    return f == t && d == e;
  var h = !0;
  i.set(e, t), i.set(t, e);
  for (var p = a; ++_ < u; ) {
    c = s[_];
    var v = e[c], T = t[c];
    if (r)
      var $ = a ? r(T, v, c, t, e, i) : r(v, T, c, e, t, i);
    if (!($ === void 0 ? v === T || o(v, T, n, r, i) : $)) {
      h = !1;
      break;
    }
    p || (p = c == "constructor");
  }
  if (h && !p) {
    var R = e.constructor, F = t.constructor;
    R != F && "constructor" in e && "constructor" in t && !(typeof R == "function" && R instanceof R && typeof F == "function" && F instanceof F) && (h = !1);
  }
  return i.delete(e), i.delete(t), h;
}
var ya = 1, it = "[object Arguments]", ot = "[object Array]", W = "[object Object]", ma = Object.prototype, at = ma.hasOwnProperty;
function va(e, t, n, r, o, i) {
  var a = A(e), s = A(t), u = a ? ot : O(e), l = s ? ot : O(t);
  u = u == it ? W : u, l = l == it ? W : l;
  var g = u == W, _ = l == W, c = u == l;
  if (c && ee(e)) {
    if (!ee(t))
      return !1;
    a = !0, g = !1;
  }
  if (c && !g)
    return i || (i = new S()), a || At(e) ? Nt(e, t, n, r, o, i) : ga(e, t, u, n, r, o, i);
  if (!(n & ya)) {
    var f = g && at.call(e, "__wrapped__"), d = _ && at.call(t, "__wrapped__");
    if (f || d) {
      var h = f ? e.value() : e, p = d ? t.value() : t;
      return i || (i = new S()), o(h, p, n, r, i);
    }
  }
  return c ? (i || (i = new S()), ha(e, t, n, r, o, i)) : !1;
}
function Ie(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !E(e) && !E(t) ? e !== e && t !== t : va(e, t, n, r, Ie, o);
}
var Ta = 1, Pa = 2;
function wa(e, t, n, r) {
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
      var g = new S(), _;
      if (!(_ === void 0 ? Ie(l, u, Ta | Pa, r, g) : _))
        return !1;
    }
  }
  return !0;
}
function Kt(e) {
  return e === e && !Y(e);
}
function Oa(e) {
  for (var t = $e(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Kt(o)];
  }
  return t;
}
function Ut(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Aa(e) {
  var t = Oa(e);
  return t.length == 1 && t[0][2] ? Ut(t[0][0], t[0][1]) : function(n) {
    return n === e || wa(n, e, t);
  };
}
function $a(e, t) {
  return e != null && t in Object(e);
}
function Sa(e, t, n) {
  t = se(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = Z(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && we(o) && yt(a, o) && (A(e) || Oe(e)));
}
function xa(e, t) {
  return e != null && Sa(e, t, $a);
}
var Ca = 1, ja = 2;
function Ea(e, t) {
  return Se(e) && Kt(t) ? Ut(Z(e), t) : function(n) {
    var r = fi(n, e);
    return r === void 0 && r === t ? xa(n, e) : Ie(t, r, Ca | ja);
  };
}
function Ia(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Ma(e) {
  return function(t) {
    return Ce(t, e);
  };
}
function Fa(e) {
  return Se(e) ? Ia(Z(e)) : Ma(e);
}
function Ra(e) {
  return typeof e == "function" ? e : e == null ? bt : typeof e == "object" ? A(e) ? Ea(e[0], e[1]) : Aa(e) : Fa(e);
}
function La(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var u = a[++o];
      if (n(i[u], u, i) === !1)
        break;
    }
    return t;
  };
}
var Da = La();
function Na(e, t) {
  return e && Da(e, t, $e);
}
function Ka(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Ua(e, t) {
  return t.length < 2 ? e : Ce(e, Ti(t, 0, -1));
}
function Ga(e, t) {
  var n = {};
  return t = Ra(t), Na(e, function(r, o, i) {
    Te(n, t(r, o, i), r);
  }), n;
}
function Ba(e, t) {
  return t = se(t, e), e = Ua(e, t), e == null || delete e[Z(Ka(t))];
}
function za(e) {
  return _e(e) ? void 0 : e;
}
var Ha = 1, qa = 2, Ja = 4, Gt = _i(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = dt(t, function(i) {
    return i = se(i, e), r || (r = i.length > 1), i;
  }), Nn(e, Ft(e), n), r && (n = Q(n, Ha | qa | Ja, za));
  for (var o = t.length; o--; )
    Ba(n, t[o]);
  return n;
});
async function Xa() {
  window.ms_globals || (window.ms_globals = {}), window.ms_globals.initializePromise || (window.ms_globals.initializePromise = new Promise((e) => {
    window.ms_globals.initialize = () => {
      e();
    };
  })), await window.ms_globals.initializePromise;
}
async function Ya(e) {
  return await Xa(), e().then((t) => t.default);
}
const Bt = [
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
], Za = Bt.concat(["attached_events"]);
function Wa(e, t = {}, n = !1) {
  return Ga(Gt(e, n ? [] : Bt), (r, o) => t[o] || Qt(o));
}
function st(e, t) {
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
    }).filter(Boolean), ...s.map((u) => u)])).reduce((u, l) => {
      const g = l.split("_"), _ = (...f) => {
        const d = f.map((p) => f && typeof p == "object" && (p.nativeEvent || p instanceof Event) ? {
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
        let h;
        try {
          h = JSON.parse(JSON.stringify(d));
        } catch {
          let p = function(v) {
            try {
              return JSON.stringify(v), v;
            } catch {
              return _e(v) ? Object.fromEntries(Object.entries(v).map(([T, $]) => {
                try {
                  return JSON.stringify($), [T, $];
                } catch {
                  return _e($) ? [T, Object.fromEntries(Object.entries($).filter(([R, F]) => {
                    try {
                      return JSON.stringify(F), !0;
                    } catch {
                      return !1;
                    }
                  }))] : null;
                }
              }).filter(Boolean)) : {};
            }
          };
          h = d.map((v) => p(v));
        }
        return n.dispatch(l.replace(/[A-Z]/g, (p) => "_" + p.toLowerCase()), {
          payload: h,
          component: {
            ...a,
            ...Gt(i, Za)
          }
        });
      };
      if (g.length > 1) {
        let f = {
          ...a.props[g[0]] || (o == null ? void 0 : o[g[0]]) || {}
        };
        u[g[0]] = f;
        for (let h = 1; h < g.length - 1; h++) {
          const p = {
            ...a.props[g[h]] || (o == null ? void 0 : o[g[h]]) || {}
          };
          f[g[h]] = p, f = p;
        }
        const d = g[g.length - 1];
        return f[`on${d.slice(0, 1).toUpperCase()}${d.slice(1)}`] = _, u;
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
function V() {
}
function Qa(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Va(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return V;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function zt(e) {
  let t;
  return Va(e, (n) => t = n)(), t;
}
const U = [];
function j(e, t = V) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (Qa(e, s) && (e = s, n)) {
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
  function a(s, u = V) {
    const l = [s, u];
    return r.add(l), r.size === 1 && (n = t(o, i) || V), s(e), () => {
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
  getContext: ka,
  setContext: Ms
} = window.__gradio__svelte__internal, es = "$$ms-gr-loading-status-key";
function ts() {
  const e = window.ms_globals.loadingKey++, t = ka(es);
  return (n) => {
    if (!t || !n)
      return;
    const {
      loadingStatusMap: r,
      options: o
    } = t, {
      generating: i,
      error: a
    } = zt(o);
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
  setContext: B
} = window.__gradio__svelte__internal, ns = "$$ms-gr-slots-key";
function rs() {
  const e = j({});
  return B(ns, e);
}
const Ht = "$$ms-gr-slot-params-mapping-fn-key";
function is() {
  return ue(Ht);
}
function os(e) {
  return B(Ht, j(e));
}
const as = "$$ms-gr-slot-params-key";
function ss() {
  const e = B(as, j({}));
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
const qt = "$$ms-gr-sub-index-context-key";
function us() {
  return ue(qt) || null;
}
function ut(e) {
  return B(qt, e);
}
function ls(e, t, n) {
  if (!Reflect.has(e, "as_item") || !Reflect.has(e, "_internal"))
    throw new Error("`as_item` and `_internal` is required");
  const r = fs(), o = is();
  os().set(void 0);
  const a = ps({
    slot: void 0,
    index: e._internal.index,
    subIndex: e._internal.subIndex
  }), s = us();
  typeof s == "number" && ut(void 0);
  const u = ts();
  typeof e._internal.subIndex == "number" && ut(e._internal.subIndex), r && r.subscribe((c) => {
    a.slotKey.set(c);
  }), cs();
  const l = e.as_item, g = (c, f) => c ? {
    ...Wa({
      ...c
    }, t),
    __render_slotParamsMappingFn: o ? zt(o) : void 0,
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
const Jt = "$$ms-gr-slot-key";
function cs() {
  B(Jt, j(void 0));
}
function fs() {
  return ue(Jt);
}
const Xt = "$$ms-gr-component-slot-context-key";
function ps({
  slot: e,
  index: t,
  subIndex: n
}) {
  return B(Xt, {
    slotKey: j(e),
    slotIndex: j(t),
    subSlotIndex: j(n)
  });
}
function Fs() {
  return ue(Xt);
}
function gs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yt = {
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
})(Yt);
var ds = Yt.exports;
const lt = /* @__PURE__ */ gs(ds), {
  SvelteComponent: _s,
  assign: me,
  check_outros: bs,
  claim_component: hs,
  component_subscribe: pe,
  compute_rest_props: ct,
  create_component: ys,
  destroy_component: ms,
  detach: Zt,
  empty: re,
  exclude_internal_props: vs,
  flush: C,
  get_spread_object: ge,
  get_spread_update: Ts,
  group_outros: Ps,
  handle_promise: ws,
  init: Os,
  insert_hydration: Wt,
  mount_component: As,
  noop: P,
  safe_not_equal: $s,
  transition_in: q,
  transition_out: ie,
  update_await_block_branch: Ss
} = window.__gradio__svelte__internal;
function ft(e) {
  let t, n, r = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: js,
    then: Cs,
    catch: xs,
    value: 19,
    blocks: [, , ,]
  };
  return ws(
    /*AwaitedQRCode*/
    e[2],
    r
  ), {
    c() {
      t = re(), r.block.c();
    },
    l(o) {
      t = re(), r.block.l(o);
    },
    m(o, i) {
      Wt(o, t, i), r.block.m(o, r.anchor = i), r.mount = () => t.parentNode, r.anchor = t, n = !0;
    },
    p(o, i) {
      e = o, Ss(r, e, i);
    },
    i(o) {
      n || (q(r.block), n = !0);
    },
    o(o) {
      for (let i = 0; i < 3; i += 1) {
        const a = r.blocks[i];
        ie(a);
      }
      n = !1;
    },
    d(o) {
      o && Zt(t), r.block.d(o), r.token = null, r = null;
    }
  };
}
function xs(e) {
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
function Cs(e) {
  let t, n;
  const r = [
    {
      style: (
        /*$mergedProps*/
        e[0].elem_style
      )
    },
    {
      className: lt(
        /*$mergedProps*/
        e[0].elem_classes,
        "ms-gr-antd-qr-code"
      )
    },
    {
      id: (
        /*$mergedProps*/
        e[0].elem_id
      )
    },
    /*$mergedProps*/
    e[0].restProps,
    /*$mergedProps*/
    e[0].props,
    st(
      /*$mergedProps*/
      e[0]
    ),
    {
      slots: (
        /*$slots*/
        e[1]
      )
    },
    {
      value: (
        /*$mergedProps*/
        e[0].props.value ?? /*$mergedProps*/
        e[0].value
      )
    },
    {
      setSlotParams: (
        /*setSlotParams*/
        e[5]
      )
    }
  ];
  let o = {};
  for (let i = 0; i < r.length; i += 1)
    o = me(o, r[i]);
  return t = new /*QRCode*/
  e[19]({
    props: o
  }), {
    c() {
      ys(t.$$.fragment);
    },
    l(i) {
      hs(t.$$.fragment, i);
    },
    m(i, a) {
      As(t, i, a), n = !0;
    },
    p(i, a) {
      const s = a & /*$mergedProps, $slots, setSlotParams*/
      35 ? Ts(r, [a & /*$mergedProps*/
      1 && {
        style: (
          /*$mergedProps*/
          i[0].elem_style
        )
      }, a & /*$mergedProps*/
      1 && {
        className: lt(
          /*$mergedProps*/
          i[0].elem_classes,
          "ms-gr-antd-qr-code"
        )
      }, a & /*$mergedProps*/
      1 && {
        id: (
          /*$mergedProps*/
          i[0].elem_id
        )
      }, a & /*$mergedProps*/
      1 && ge(
        /*$mergedProps*/
        i[0].restProps
      ), a & /*$mergedProps*/
      1 && ge(
        /*$mergedProps*/
        i[0].props
      ), a & /*$mergedProps*/
      1 && ge(st(
        /*$mergedProps*/
        i[0]
      )), a & /*$slots*/
      2 && {
        slots: (
          /*$slots*/
          i[1]
        )
      }, a & /*$mergedProps*/
      1 && {
        value: (
          /*$mergedProps*/
          i[0].props.value ?? /*$mergedProps*/
          i[0].value
        )
      }, a & /*setSlotParams*/
      32 && {
        setSlotParams: (
          /*setSlotParams*/
          i[5]
        )
      }]) : {};
      t.$set(s);
    },
    i(i) {
      n || (q(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ie(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ms(t, i);
    }
  };
}
function js(e) {
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
function Es(e) {
  let t, n, r = (
    /*$mergedProps*/
    e[0].visible && ft(e)
  );
  return {
    c() {
      r && r.c(), t = re();
    },
    l(o) {
      r && r.l(o), t = re();
    },
    m(o, i) {
      r && r.m(o, i), Wt(o, t, i), n = !0;
    },
    p(o, [i]) {
      /*$mergedProps*/
      o[0].visible ? r ? (r.p(o, i), i & /*$mergedProps*/
      1 && q(r, 1)) : (r = ft(o), r.c(), q(r, 1), r.m(t.parentNode, t)) : r && (Ps(), ie(r, 1, 1, () => {
        r = null;
      }), bs());
    },
    i(o) {
      n || (q(r), n = !0);
    },
    o(o) {
      ie(r), n = !1;
    },
    d(o) {
      o && Zt(t), r && r.d(o);
    }
  };
}
function Is(e, t, n) {
  const r = ["gradio", "props", "_internal", "value", "as_item", "visible", "elem_id", "elem_classes", "elem_style"];
  let o = ct(t, r), i, a, s;
  const u = Ya(() => import("./qr-code-PtWhDOMo.js"));
  let {
    gradio: l
  } = t, {
    props: g = {}
  } = t;
  const _ = j(g);
  pe(e, _, (b) => n(16, i = b));
  let {
    _internal: c = {}
  } = t, {
    value: f
  } = t, {
    as_item: d
  } = t, {
    visible: h = !0
  } = t, {
    elem_id: p = ""
  } = t, {
    elem_classes: v = []
  } = t, {
    elem_style: T = {}
  } = t;
  const [$, R] = ls({
    gradio: l,
    props: i,
    _internal: c,
    value: f,
    visible: h,
    elem_id: p,
    elem_classes: v,
    elem_style: T,
    as_item: d,
    restProps: o
  });
  pe(e, $, (b) => n(0, a = b));
  const F = ss(), Me = rs();
  return pe(e, Me, (b) => n(1, s = b)), e.$$set = (b) => {
    t = me(me({}, t), vs(b)), n(18, o = ct(t, r)), "gradio" in b && n(7, l = b.gradio), "props" in b && n(8, g = b.props), "_internal" in b && n(9, c = b._internal), "value" in b && n(10, f = b.value), "as_item" in b && n(11, d = b.as_item), "visible" in b && n(12, h = b.visible), "elem_id" in b && n(13, p = b.elem_id), "elem_classes" in b && n(14, v = b.elem_classes), "elem_style" in b && n(15, T = b.elem_style);
  }, e.$$.update = () => {
    e.$$.dirty & /*props*/
    256 && _.update((b) => ({
      ...b,
      ...g
    })), R({
      gradio: l,
      props: i,
      _internal: c,
      value: f,
      visible: h,
      elem_id: p,
      elem_classes: v,
      elem_style: T,
      as_item: d,
      restProps: o
    });
  }, [a, s, u, _, $, F, Me, l, g, c, f, d, h, p, v, T, i];
}
class Rs extends _s {
  constructor(t) {
    super(), Os(this, t, Is, Es, $s, {
      gradio: 7,
      props: 8,
      _internal: 9,
      value: 10,
      as_item: 11,
      visible: 12,
      elem_id: 13,
      elem_classes: 14,
      elem_style: 15
    });
  }
  get gradio() {
    return this.$$.ctx[7];
  }
  set gradio(t) {
    this.$$set({
      gradio: t
    }), C();
  }
  get props() {
    return this.$$.ctx[8];
  }
  set props(t) {
    this.$$set({
      props: t
    }), C();
  }
  get _internal() {
    return this.$$.ctx[9];
  }
  set _internal(t) {
    this.$$set({
      _internal: t
    }), C();
  }
  get value() {
    return this.$$.ctx[10];
  }
  set value(t) {
    this.$$set({
      value: t
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
  get visible() {
    return this.$$.ctx[12];
  }
  set visible(t) {
    this.$$set({
      visible: t
    }), C();
  }
  get elem_id() {
    return this.$$.ctx[13];
  }
  set elem_id(t) {
    this.$$set({
      elem_id: t
    }), C();
  }
  get elem_classes() {
    return this.$$.ctx[14];
  }
  set elem_classes(t) {
    this.$$set({
      elem_classes: t
    }), C();
  }
  get elem_style() {
    return this.$$.ctx[15];
  }
  set elem_style(t) {
    this.$$set({
      elem_style: t
    }), C();
  }
}
export {
  Rs as I,
  Y as a,
  ht as b,
  Fs as g,
  ve as i,
  x as r,
  j as w
};
