var f = {
  exports: {}
}, c = {
  exports: {}
}, u = {
  exports: {}
}, y = {
  exports: {}
};
(function(e) {
  function p(s) {
    "@babel/helpers - typeof";
    return e.exports = p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, p(s);
  }
  e.exports = p, e.exports.__esModule = !0, e.exports.default = e.exports;
})(y);
var x = y.exports, b = {
  exports: {}
};
(function(e) {
  var p = x.default;
  function s(t, r) {
    if (p(t) != "object" || !t) return t;
    var o = t[Symbol.toPrimitive];
    if (o !== void 0) {
      var n = o.call(t, r || "default");
      if (p(n) != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(t);
  }
  e.exports = s, e.exports.__esModule = !0, e.exports.default = e.exports;
})(b);
var l = b.exports;
(function(e) {
  var p = x.default, s = l;
  function t(r) {
    var o = s(r, "string");
    return p(o) == "symbol" ? o : o + "";
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(u);
var P = u.exports;
(function(e) {
  var p = P;
  function s(t, r, o) {
    return (r = p(r)) in t ? Object.defineProperty(t, r, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[r] = o, t;
  }
  e.exports = s, e.exports.__esModule = !0, e.exports.default = e.exports;
})(c);
var _ = c.exports;
(function(e) {
  var p = _;
  function s(r, o) {
    var n = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(r);
      o && (i = i.filter(function(v) {
        return Object.getOwnPropertyDescriptor(r, v).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function t(r) {
    for (var o = 1; o < arguments.length; o++) {
      var n = arguments[o] != null ? arguments[o] : {};
      o % 2 ? s(Object(n), !0).forEach(function(i) {
        p(r, i, n[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(i) {
        Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(n, i));
      });
    }
    return r;
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(f);
var O = f.exports, a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.commonLocale = void 0;
a.commonLocale = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
};
export {
  a as c,
  O as o
};
