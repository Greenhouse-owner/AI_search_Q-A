import { i as Kt, a as oe, r as qt, w as fe, g as Yt, c as Q, b as Ne } from "./Index-CPaEW6ie.js";
const I = window.ms_globals.React, h = window.ms_globals.React, ue = window.ms_globals.React.useMemo, Vt = window.ms_globals.React.forwardRef, Wt = window.ms_globals.React.useRef, Ut = window.ms_globals.React.useState, Gt = window.ms_globals.React.useEffect, De = window.ms_globals.ReactDOM.createPortal, Qt = window.ms_globals.internalContext.useContextPropsContext, Qe = window.ms_globals.internalContext.ContextPropsProvider, St = window.ms_globals.createItemsContext.createItemsContext, Jt = window.ms_globals.antd.ConfigProvider, Be = window.ms_globals.antd.theme, Zt = window.ms_globals.antd.Avatar, se = window.ms_globals.antdCssinjs.unit, Ie = window.ms_globals.antdCssinjs.token2CSSVar, Je = window.ms_globals.antdCssinjs.useStyleRegister, er = window.ms_globals.antdCssinjs.useCSSVarRegister, tr = window.ms_globals.antdCssinjs.createTheme, rr = window.ms_globals.antdCssinjs.useCacheToken, xt = window.ms_globals.antdCssinjs.Keyframes;
var nr = /\s/;
function or(t) {
  for (var e = t.length; e-- && nr.test(t.charAt(e)); )
    ;
  return e;
}
var sr = /^\s+/;
function ir(t) {
  return t && t.slice(0, or(t) + 1).replace(sr, "");
}
var Ze = NaN, ar = /^[-+]0x[0-9a-f]+$/i, lr = /^0b[01]+$/i, cr = /^0o[0-7]+$/i, ur = parseInt;
function et(t) {
  if (typeof t == "number")
    return t;
  if (Kt(t))
    return Ze;
  if (oe(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = oe(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = ir(t);
  var n = lr.test(t);
  return n || cr.test(t) ? ur(t.slice(2), n ? 2 : 8) : ar.test(t) ? Ze : +t;
}
var Re = function() {
  return qt.Date.now();
}, fr = "Expected a function", dr = Math.max, hr = Math.min;
function gr(t, e, n) {
  var o, r, s, i, a, l, f = 0, c = !1, u = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(fr);
  e = et(e) || 0, oe(n) && (c = !!n.leading, u = "maxWait" in n, s = u ? dr(et(n.maxWait) || 0, e) : s, d = "trailing" in n ? !!n.trailing : d);
  function b(y) {
    var M = o, P = r;
    return o = r = void 0, f = y, i = t.apply(P, M), i;
  }
  function v(y) {
    return f = y, a = setTimeout(m, e), c ? b(y) : i;
  }
  function x(y) {
    var M = y - l, P = y - f, S = e - M;
    return u ? hr(S, s - P) : S;
  }
  function g(y) {
    var M = y - l, P = y - f;
    return l === void 0 || M >= e || M < 0 || u && P >= s;
  }
  function m() {
    var y = Re();
    if (g(y))
      return w(y);
    a = setTimeout(m, x(y));
  }
  function w(y) {
    return a = void 0, d && o ? b(y) : (o = r = void 0, i);
  }
  function R() {
    a !== void 0 && clearTimeout(a), f = 0, o = l = r = a = void 0;
  }
  function p() {
    return a === void 0 ? i : w(Re());
  }
  function C() {
    var y = Re(), M = g(y);
    if (o = arguments, r = this, l = y, M) {
      if (a === void 0)
        return v(l);
      if (u)
        return clearTimeout(a), a = setTimeout(m, e), b(l);
    }
    return a === void 0 && (a = setTimeout(m, e)), i;
  }
  return C.cancel = R, C.flush = p, C;
}
var Ct = {
  exports: {}
}, be = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr = h, pr = Symbol.for("react.element"), br = Symbol.for("react.fragment"), yr = Object.prototype.hasOwnProperty, vr = mr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Sr = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function _t(t, e, n) {
  var o, r = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), e.key !== void 0 && (s = "" + e.key), e.ref !== void 0 && (i = e.ref);
  for (o in e) yr.call(e, o) && !Sr.hasOwnProperty(o) && (r[o] = e[o]);
  if (t && t.defaultProps) for (o in e = t.defaultProps, e) r[o] === void 0 && (r[o] = e[o]);
  return {
    $$typeof: pr,
    type: t,
    key: s,
    ref: i,
    props: r,
    _owner: vr.current
  };
}
be.Fragment = br;
be.jsx = _t;
be.jsxs = _t;
Ct.exports = be;
var B = Ct.exports;
const {
  SvelteComponent: xr,
  assign: tt,
  binding_callbacks: rt,
  check_outros: Cr,
  children: wt,
  claim_element: Tt,
  claim_space: _r,
  component_subscribe: nt,
  compute_slots: wr,
  create_slot: Tr,
  detach: J,
  element: Et,
  empty: ot,
  exclude_internal_props: st,
  get_all_dirty_from_scope: Er,
  get_slot_changes: Mr,
  group_outros: Pr,
  init: Or,
  insert_hydration: de,
  safe_not_equal: Ir,
  set_custom_element_data: Mt,
  space: Rr,
  transition_in: he,
  transition_out: He,
  update_slot_base: kr
} = window.__gradio__svelte__internal, {
  beforeUpdate: jr,
  getContext: Lr,
  onDestroy: $r,
  setContext: Dr
} = window.__gradio__svelte__internal;
function it(t) {
  let e, n;
  const o = (
    /*#slots*/
    t[7].default
  ), r = Tr(
    o,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = Et("svelte-slot"), r && r.c(), this.h();
    },
    l(s) {
      e = Tt(s, "SVELTE-SLOT", {
        class: !0
      });
      var i = wt(e);
      r && r.l(i), i.forEach(J), this.h();
    },
    h() {
      Mt(e, "class", "svelte-1rt0kpf");
    },
    m(s, i) {
      de(s, e, i), r && r.m(e, null), t[9](e), n = !0;
    },
    p(s, i) {
      r && r.p && (!n || i & /*$$scope*/
      64) && kr(
        r,
        o,
        s,
        /*$$scope*/
        s[6],
        n ? Mr(
          o,
          /*$$scope*/
          s[6],
          i,
          null
        ) : Er(
          /*$$scope*/
          s[6]
        ),
        null
      );
    },
    i(s) {
      n || (he(r, s), n = !0);
    },
    o(s) {
      He(r, s), n = !1;
    },
    d(s) {
      s && J(e), r && r.d(s), t[9](null);
    }
  };
}
function Br(t) {
  let e, n, o, r, s = (
    /*$$slots*/
    t[4].default && it(t)
  );
  return {
    c() {
      e = Et("react-portal-target"), n = Rr(), s && s.c(), o = ot(), this.h();
    },
    l(i) {
      e = Tt(i, "REACT-PORTAL-TARGET", {
        class: !0
      }), wt(e).forEach(J), n = _r(i), s && s.l(i), o = ot(), this.h();
    },
    h() {
      Mt(e, "class", "svelte-1rt0kpf");
    },
    m(i, a) {
      de(i, e, a), t[8](e), de(i, n, a), s && s.m(i, a), de(i, o, a), r = !0;
    },
    p(i, [a]) {
      /*$$slots*/
      i[4].default ? s ? (s.p(i, a), a & /*$$slots*/
      16 && he(s, 1)) : (s = it(i), s.c(), he(s, 1), s.m(o.parentNode, o)) : s && (Pr(), He(s, 1, 1, () => {
        s = null;
      }), Cr());
    },
    i(i) {
      r || (he(s), r = !0);
    },
    o(i) {
      He(s), r = !1;
    },
    d(i) {
      i && (J(e), J(n), J(o)), t[8](null), s && s.d(i);
    }
  };
}
function at(t) {
  const {
    svelteInit: e,
    ...n
  } = t;
  return n;
}
function Hr(t, e, n) {
  let o, r, {
    $$slots: s = {},
    $$scope: i
  } = e;
  const a = wr(s);
  let {
    svelteInit: l
  } = e;
  const f = fe(at(e)), c = fe();
  nt(t, c, (p) => n(0, o = p));
  const u = fe();
  nt(t, u, (p) => n(1, r = p));
  const d = [], b = Lr("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: x,
    subSlotIndex: g
  } = Yt() || {}, m = l({
    parent: b,
    props: f,
    target: c,
    slot: u,
    slotKey: v,
    slotIndex: x,
    subSlotIndex: g,
    onDestroy(p) {
      d.push(p);
    }
  });
  Dr("$$ms-gr-react-wrapper", m), jr(() => {
    f.set(at(e));
  }), $r(() => {
    d.forEach((p) => p());
  });
  function w(p) {
    rt[p ? "unshift" : "push"](() => {
      o = p, c.set(o);
    });
  }
  function R(p) {
    rt[p ? "unshift" : "push"](() => {
      r = p, u.set(r);
    });
  }
  return t.$$set = (p) => {
    n(17, e = tt(tt({}, e), st(p))), "svelteInit" in p && n(5, l = p.svelteInit), "$$scope" in p && n(6, i = p.$$scope);
  }, e = st(e), [o, r, c, u, a, l, i, s, w, R];
}
class zr extends xr {
  constructor(e) {
    super(), Or(this, e, Hr, Br, Ir, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: fo
} = window.__gradio__svelte__internal, lt = window.ms_globals.rerender, ke = window.ms_globals.tree;
function Ar(t, e = {}) {
  function n(o) {
    const r = fe(), s = new zr({
      ...o,
      props: {
        svelteInit(i) {
          window.ms_globals.autokey += 1;
          const a = {
            key: window.ms_globals.autokey,
            svelteInstance: r,
            reactComponent: t,
            props: i.props,
            slot: i.slot,
            target: i.target,
            slotIndex: i.slotIndex,
            subSlotIndex: i.subSlotIndex,
            ignore: e.ignore,
            slotKey: i.slotKey,
            nodes: []
          }, l = i.parent ?? ke;
          return l.nodes = [...l.nodes, a], lt({
            createPortal: De,
            node: ke
          }), i.onDestroy(() => {
            l.nodes = l.nodes.filter((f) => f.svelteInstance !== r), lt({
              createPortal: De,
              node: ke
            });
          }), a;
        },
        ...o.props
      }
    });
    return r.set(s), s;
  }
  return new Promise((o) => {
    window.ms_globals.initializePromise.then(() => {
      o(n);
    });
  });
}
const Fr = "1.0.5", Xr = /* @__PURE__ */ h.createContext({}), Nr = {
  classNames: {},
  styles: {},
  className: "",
  style: {}
}, Vr = (t) => {
  const e = h.useContext(Xr);
  return h.useMemo(() => ({
    ...Nr,
    ...e[t]
  }), [e[t]]);
};
function ie() {
  return ie = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, ie.apply(null, arguments);
}
function me() {
  const {
    getPrefixCls: t,
    direction: e,
    csp: n,
    iconPrefixCls: o,
    theme: r
  } = h.useContext(Jt.ConfigContext);
  return {
    theme: r,
    getPrefixCls: t,
    direction: e,
    csp: n,
    iconPrefixCls: o
  };
}
function Pt(t) {
  var e = I.useRef();
  e.current = t;
  var n = I.useCallback(function() {
    for (var o, r = arguments.length, s = new Array(r), i = 0; i < r; i++)
      s[i] = arguments[i];
    return (o = e.current) === null || o === void 0 ? void 0 : o.call.apply(o, [e].concat(s));
  }, []);
  return n;
}
function Wr(t) {
  if (Array.isArray(t)) return t;
}
function Ur(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, s, i, a = [], l = !0, f = !1;
    try {
      if (s = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (o = s.call(n)).done) && (a.push(o.value), a.length !== e); l = !0) ;
    } catch (c) {
      f = !0, r = c;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return a;
  }
}
function ct(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Gr(t, e) {
  if (t) {
    if (typeof t == "string") return ct(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ct(t, e) : void 0;
  }
}
function Kr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ge(t, e) {
  return Wr(t) || Ur(t, e) || Gr(t, e) || Kr();
}
function qr() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var ut = qr() ? I.useLayoutEffect : I.useEffect, Yr = function(e, n) {
  var o = I.useRef(!0);
  ut(function() {
    return e(o.current);
  }, n), ut(function() {
    return o.current = !1, function() {
      o.current = !0;
    };
  }, []);
};
function V(t) {
  "@babel/helpers - typeof";
  return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, V(t);
}
var E = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve = Symbol.for("react.element"), We = Symbol.for("react.portal"), ye = Symbol.for("react.fragment"), ve = Symbol.for("react.strict_mode"), Se = Symbol.for("react.profiler"), xe = Symbol.for("react.provider"), Ce = Symbol.for("react.context"), Qr = Symbol.for("react.server_context"), _e = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), Ee = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), Jr = Symbol.for("react.offscreen"), Ot;
Ot = Symbol.for("react.module.reference");
function H(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Ve:
        switch (t = t.type, t) {
          case ye:
          case Se:
          case ve:
          case we:
          case Te:
            return t;
          default:
            switch (t = t && t.$$typeof, t) {
              case Qr:
              case Ce:
              case _e:
              case Me:
              case Ee:
              case xe:
                return t;
              default:
                return e;
            }
        }
      case We:
        return e;
    }
  }
}
E.ContextConsumer = Ce;
E.ContextProvider = xe;
E.Element = Ve;
E.ForwardRef = _e;
E.Fragment = ye;
E.Lazy = Me;
E.Memo = Ee;
E.Portal = We;
E.Profiler = Se;
E.StrictMode = ve;
E.Suspense = we;
E.SuspenseList = Te;
E.isAsyncMode = function() {
  return !1;
};
E.isConcurrentMode = function() {
  return !1;
};
E.isContextConsumer = function(t) {
  return H(t) === Ce;
};
E.isContextProvider = function(t) {
  return H(t) === xe;
};
E.isElement = function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Ve;
};
E.isForwardRef = function(t) {
  return H(t) === _e;
};
E.isFragment = function(t) {
  return H(t) === ye;
};
E.isLazy = function(t) {
  return H(t) === Me;
};
E.isMemo = function(t) {
  return H(t) === Ee;
};
E.isPortal = function(t) {
  return H(t) === We;
};
E.isProfiler = function(t) {
  return H(t) === Se;
};
E.isStrictMode = function(t) {
  return H(t) === ve;
};
E.isSuspense = function(t) {
  return H(t) === we;
};
E.isSuspenseList = function(t) {
  return H(t) === Te;
};
E.isValidElementType = function(t) {
  return typeof t == "string" || typeof t == "function" || t === ye || t === Se || t === ve || t === we || t === Te || t === Jr || typeof t == "object" && t !== null && (t.$$typeof === Me || t.$$typeof === Ee || t.$$typeof === xe || t.$$typeof === Ce || t.$$typeof === _e || t.$$typeof === Ot || t.getModuleId !== void 0);
};
E.typeOf = H;
function Zr(t, e) {
  if (V(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (V(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function It(t) {
  var e = Zr(t, "string");
  return V(e) == "symbol" ? e : e + "";
}
function N(t, e, n) {
  return (e = It(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function ft(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function $(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ft(Object(n), !0).forEach(function(o) {
      N(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ft(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Pe(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function en(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, It(o.key), o);
  }
}
function Oe(t, e, n) {
  return e && en(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function ze(t, e) {
  return ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ze(t, e);
}
function Rt(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && ze(t, e);
}
function pe(t) {
  return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, pe(t);
}
function kt() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (kt = function() {
    return !!t;
  })();
}
function ne(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function tn(t, e) {
  if (e && (V(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ne(t);
}
function jt(t) {
  var e = kt();
  return function() {
    var n, o = pe(t);
    if (e) {
      var r = pe(this).constructor;
      n = Reflect.construct(o, arguments, r);
    } else n = o.apply(this, arguments);
    return tn(this, n);
  };
}
var Lt = /* @__PURE__ */ Oe(function t() {
  Pe(this, t);
}), $t = "CALC_UNIT", rn = new RegExp($t, "g");
function je(t) {
  return typeof t == "number" ? "".concat(t).concat($t) : t;
}
var nn = /* @__PURE__ */ function(t) {
  Rt(n, t);
  var e = jt(n);
  function n(o, r) {
    var s;
    Pe(this, n), s = e.call(this), N(ne(s), "result", ""), N(ne(s), "unitlessCssVar", void 0), N(ne(s), "lowPriority", void 0);
    var i = V(o);
    return s.unitlessCssVar = r, o instanceof n ? s.result = "(".concat(o.result, ")") : i === "number" ? s.result = je(o) : i === "string" && (s.result = o), s;
  }
  return Oe(n, [{
    key: "add",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " + ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " + ").concat(je(r))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " - ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " - ").concat(je(r))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(r) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), r instanceof n ? this.result = "".concat(this.result, " * ").concat(r.getResult(!0)) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " * ").concat(r)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(r) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), r instanceof n ? this.result = "".concat(this.result, " / ").concat(r.getResult(!0)) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " / ").concat(r)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(r) {
      return this.lowPriority || r ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(r) {
      var s = this, i = r || {}, a = i.unit, l = !0;
      return typeof a == "boolean" ? l = a : Array.from(this.unitlessCssVar).some(function(f) {
        return s.result.includes(f);
      }) && (l = !1), this.result = this.result.replace(rn, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Lt), on = /* @__PURE__ */ function(t) {
  Rt(n, t);
  var e = jt(n);
  function n(o) {
    var r;
    return Pe(this, n), r = e.call(this), N(ne(r), "result", 0), o instanceof n ? r.result = o.result : typeof o == "number" && (r.result = o), r;
  }
  return Oe(n, [{
    key: "add",
    value: function(r) {
      return r instanceof n ? this.result += r.result : typeof r == "number" && (this.result += r), this;
    }
  }, {
    key: "sub",
    value: function(r) {
      return r instanceof n ? this.result -= r.result : typeof r == "number" && (this.result -= r), this;
    }
  }, {
    key: "mul",
    value: function(r) {
      return r instanceof n ? this.result *= r.result : typeof r == "number" && (this.result *= r), this;
    }
  }, {
    key: "div",
    value: function(r) {
      return r instanceof n ? this.result /= r.result : typeof r == "number" && (this.result /= r), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
}(Lt), sn = function(e, n) {
  var o = e === "css" ? nn : on;
  return function(r) {
    return new o(r, n);
  };
}, dt = function(e, n) {
  return "".concat([n, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function ht(t, e, n, o) {
  var r = $({}, e[t]);
  if (o != null && o.deprecatedTokens) {
    var s = o.deprecatedTokens;
    s.forEach(function(a) {
      var l = ge(a, 2), f = l[0], c = l[1];
      if (r != null && r[f] || r != null && r[c]) {
        var u;
        (u = r[c]) !== null && u !== void 0 || (r[c] = r == null ? void 0 : r[f]);
      }
    });
  }
  var i = $($({}, n), r);
  return Object.keys(i).forEach(function(a) {
    i[a] === e[a] && delete i[a];
  }), i;
}
var Dt = typeof CSSINJS_STATISTIC < "u", Ae = !0;
function Ue() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  if (!Dt)
    return Object.assign.apply(Object, [{}].concat(e));
  Ae = !1;
  var o = {};
  return e.forEach(function(r) {
    if (V(r) === "object") {
      var s = Object.keys(r);
      s.forEach(function(i) {
        Object.defineProperty(o, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return r[i];
          }
        });
      });
    }
  }), Ae = !0, o;
}
var gt = {};
function an() {
}
var ln = function(e) {
  var n, o = e, r = an;
  return Dt && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), o = new Proxy(e, {
    get: function(i, a) {
      if (Ae) {
        var l;
        (l = n) === null || l === void 0 || l.add(a);
      }
      return i[a];
    }
  }), r = function(i, a) {
    var l;
    gt[i] = {
      global: Array.from(n),
      component: $($({}, (l = gt[i]) === null || l === void 0 ? void 0 : l.component), a)
    };
  }), {
    token: o,
    keys: n,
    flush: r
  };
};
function mt(t, e, n) {
  if (typeof n == "function") {
    var o;
    return n(Ue(e, (o = e[t]) !== null && o !== void 0 ? o : {}));
  }
  return n ?? {};
}
function cn(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "max(".concat(o.map(function(s) {
        return se(s);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "min(".concat(o.map(function(s) {
        return se(s);
      }).join(","), ")");
    }
  };
}
var un = 1e3 * 60 * 10, fn = /* @__PURE__ */ function() {
  function t() {
    Pe(this, t), N(this, "map", /* @__PURE__ */ new Map()), N(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), N(this, "nextID", 0), N(this, "lastAccessBeat", /* @__PURE__ */ new Map()), N(this, "accessBeat", 0);
  }
  return Oe(t, [{
    key: "set",
    value: function(n, o) {
      this.clear();
      var r = this.getCompositeKey(n);
      this.map.set(r, o), this.lastAccessBeat.set(r, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var o = this.getCompositeKey(n), r = this.map.get(o);
      return this.lastAccessBeat.set(o, Date.now()), this.accessBeat += 1, r;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var o = this, r = n.map(function(s) {
        return s && V(s) === "object" ? "obj_".concat(o.getObjectID(s)) : "".concat(V(s), "_").concat(s);
      });
      return r.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var o = this.nextID;
      return this.objectIDMap.set(n, o), this.nextID += 1, o;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var o = Date.now();
        this.lastAccessBeat.forEach(function(r, s) {
          o - r > un && (n.map.delete(s), n.lastAccessBeat.delete(s));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), pt = new fn();
function dn(t, e) {
  return h.useMemo(function() {
    var n = pt.get(e);
    if (n)
      return n;
    var o = t();
    return pt.set(e, o), o;
  }, e);
}
var hn = function() {
  return {};
};
function gn(t) {
  var e = t.useCSP, n = e === void 0 ? hn : e, o = t.useToken, r = t.usePrefix, s = t.getResetStyles, i = t.getCommonStyle, a = t.getCompUnitless;
  function l(d, b, v, x) {
    var g = Array.isArray(d) ? d[0] : d;
    function m(P) {
      return "".concat(String(g)).concat(P.slice(0, 1).toUpperCase()).concat(P.slice(1));
    }
    var w = (x == null ? void 0 : x.unitless) || {}, R = typeof a == "function" ? a(d) : {}, p = $($({}, R), {}, N({}, m("zIndexPopup"), !0));
    Object.keys(w).forEach(function(P) {
      p[m(P)] = w[P];
    });
    var C = $($({}, x), {}, {
      unitless: p,
      prefixToken: m
    }), y = c(d, b, v, C), M = f(g, v, C);
    return function(P) {
      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P, O = y(P, S), z = ge(O, 2), j = z[1], A = M(S), _ = ge(A, 2), T = _[0], k = _[1];
      return [T, j, k];
    };
  }
  function f(d, b, v) {
    var x = v.unitless, g = v.injectStyle, m = g === void 0 ? !0 : g, w = v.prefixToken, R = v.ignore, p = function(M) {
      var P = M.rootCls, S = M.cssVar, O = S === void 0 ? {} : S, z = o(), j = z.realToken;
      return er({
        path: [d],
        prefix: O.prefix,
        key: O.key,
        unitless: x,
        ignore: R,
        token: j,
        scope: P
      }, function() {
        var A = mt(d, j, b), _ = ht(d, j, A, {
          deprecatedTokens: v == null ? void 0 : v.deprecatedTokens
        });
        return Object.keys(A).forEach(function(T) {
          _[w(T)] = _[T], delete _[T];
        }), _;
      }), null;
    }, C = function(M) {
      var P = o(), S = P.cssVar;
      return [function(O) {
        return m && S ? /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(p, {
          rootCls: M,
          cssVar: S,
          component: d
        }), O) : O;
      }, S == null ? void 0 : S.key];
    };
    return C;
  }
  function c(d, b, v) {
    var x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = Array.isArray(d) ? d : [d, d], m = ge(g, 1), w = m[0], R = g.join("-"), p = t.layer || {
      name: "antd"
    };
    return function(C) {
      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, M = o(), P = M.theme, S = M.realToken, O = M.hashId, z = M.token, j = M.cssVar, A = r(), _ = A.rootPrefixCls, T = A.iconPrefixCls, k = n(), F = j ? "css" : "js", U = dn(function() {
        var X = /* @__PURE__ */ new Set();
        return j && Object.keys(x.unitless || {}).forEach(function(K) {
          X.add(Ie(K, j.prefix)), X.add(Ie(K, dt(w, j.prefix)));
        }), sn(F, X);
      }, [F, w, j == null ? void 0 : j.prefix]), G = cn(F), q = G.max, Z = G.min, ee = {
        theme: P,
        token: z,
        hashId: O,
        nonce: function() {
          return k.nonce;
        },
        clientOnly: x.clientOnly,
        layer: p,
        // antd is always at top of styles
        order: x.order || -999
      };
      typeof s == "function" && Je($($({}, ee), {}, {
        clientOnly: !1,
        path: ["Shared", _]
      }), function() {
        return s(z, {
          prefix: {
            rootPrefixCls: _,
            iconPrefixCls: T
          },
          csp: k
        });
      });
      var te = Je($($({}, ee), {}, {
        path: [R, C, T]
      }), function() {
        if (x.injectStyle === !1)
          return [];
        var X = ln(z), K = X.token, At = X.flush, Y = mt(w, S, v), Ft = ".".concat(C), Ke = ht(w, S, Y, {
          deprecatedTokens: x.deprecatedTokens
        });
        j && Y && V(Y) === "object" && Object.keys(Y).forEach(function(Ye) {
          Y[Ye] = "var(".concat(Ie(Ye, dt(w, j.prefix)), ")");
        });
        var qe = Ue(K, {
          componentCls: Ft,
          prefixCls: C,
          iconCls: ".".concat(T),
          antCls: ".".concat(_),
          calc: U,
          // @ts-ignore
          max: q,
          // @ts-ignore
          min: Z
        }, j ? Y : Ke), Xt = b(qe, {
          hashId: O,
          prefixCls: C,
          rootPrefixCls: _,
          iconPrefixCls: T
        });
        At(w, Ke);
        var Nt = typeof i == "function" ? i(qe, C, y, x.resetFont) : null;
        return [x.resetStyle === !1 ? null : Nt, Xt];
      });
      return [te, O];
    };
  }
  function u(d, b, v) {
    var x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = c(d, b, v, $({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, x)), m = function(R) {
      var p = R.prefixCls, C = R.rootCls, y = C === void 0 ? p : C;
      return g(p, y), null;
    };
    return m;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: u,
    genComponentStyleHook: c
  };
}
function ae(t) {
  "@babel/helpers - typeof";
  return ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ae(t);
}
function mn(t, e) {
  if (ae(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (ae(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function pn(t) {
  var e = mn(t, "string");
  return ae(e) == "symbol" ? e : e + "";
}
function D(t, e, n) {
  return (e = pn(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
const L = Math.round;
function Le(t, e) {
  const n = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], o = n.map((r) => parseFloat(r));
  for (let r = 0; r < 3; r += 1)
    o[r] = e(o[r] || 0, n[r] || "", r);
  return n[3] ? o[3] = n[3].includes("%") ? o[3] / 100 : o[3] : o[3] = 1, o;
}
const bt = (t, e, n) => n === 0 ? t : t / 100;
function re(t, e) {
  const n = e || 255;
  return t > n ? n : t < 0 ? 0 : t;
}
class W {
  constructor(e) {
    D(this, "isValid", !0), D(this, "r", 0), D(this, "g", 0), D(this, "b", 0), D(this, "a", 1), D(this, "_h", void 0), D(this, "_s", void 0), D(this, "_l", void 0), D(this, "_v", void 0), D(this, "_max", void 0), D(this, "_min", void 0), D(this, "_brightness", void 0);
    function n(o) {
      return o[0] in e && o[1] in e && o[2] in e;
    }
    if (e) if (typeof e == "string") {
      let r = function(s) {
        return o.startsWith(s);
      };
      const o = e.trim();
      /^#?[A-F\d]{3,8}$/i.test(o) ? this.fromHexString(o) : r("rgb") ? this.fromRgbString(o) : r("hsl") ? this.fromHslString(o) : (r("hsv") || r("hsb")) && this.fromHsvString(o);
    } else if (e instanceof W)
      this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a, this._h = e._h, this._s = e._s, this._l = e._l, this._v = e._v;
    else if (n("rgb"))
      this.r = re(e.r), this.g = re(e.g), this.b = re(e.b), this.a = typeof e.a == "number" ? re(e.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(e);
    else if (n("hsv"))
      this.fromHsv(e);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(e));
  }
  // ======================= Setter =======================
  setR(e) {
    return this._sc("r", e);
  }
  setG(e) {
    return this._sc("g", e);
  }
  setB(e) {
    return this._sc("b", e);
  }
  setA(e) {
    return this._sc("a", e, 1);
  }
  setHue(e) {
    const n = this.toHsv();
    return n.h = e, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function e(s) {
      const i = s / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const n = e(this.r), o = e(this.g), r = e(this.b);
    return 0.2126 * n + 0.7152 * o + 0.0722 * r;
  }
  getHue() {
    if (typeof this._h > "u") {
      const e = this.getMax() - this.getMin();
      e === 0 ? this._h = 0 : this._h = L(60 * (this.r === this.getMax() ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / e + 2 : (this.r - this.g) / e + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const e = this.getMax() - this.getMin();
      e === 0 ? this._s = 0 : this._s = e / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(e = 10) {
    const n = this.getHue(), o = this.getSaturation();
    let r = this.getLightness() - e / 100;
    return r < 0 && (r = 0), this._c({
      h: n,
      s: o,
      l: r,
      a: this.a
    });
  }
  lighten(e = 10) {
    const n = this.getHue(), o = this.getSaturation();
    let r = this.getLightness() + e / 100;
    return r > 1 && (r = 1), this._c({
      h: n,
      s: o,
      l: r,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(e, n = 50) {
    const o = this._c(e), r = n / 100, s = (a) => (o[a] - this[a]) * r + this[a], i = {
      r: L(s("r")),
      g: L(s("g")),
      b: L(s("b")),
      a: L(s("a") * 100) / 100
    };
    return this._c(i);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(e = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, e);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(e = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, e);
  }
  onBackground(e) {
    const n = this._c(e), o = this.a + n.a * (1 - this.a), r = (s) => L((this[s] * this.a + n[s] * n.a * (1 - this.a)) / o);
    return this._c({
      r: r("r"),
      g: r("g"),
      b: r("b"),
      a: o
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(e) {
    return this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let e = "#";
    const n = (this.r || 0).toString(16);
    e += n.length === 2 ? n : "0" + n;
    const o = (this.g || 0).toString(16);
    e += o.length === 2 ? o : "0" + o;
    const r = (this.b || 0).toString(16);
    if (e += r.length === 2 ? r : "0" + r, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const s = L(this.a * 255).toString(16);
      e += s.length === 2 ? s : "0" + s;
    }
    return e;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const e = this.getHue(), n = L(this.getSaturation() * 100), o = L(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${e},${n}%,${o}%,${this.a})` : `hsl(${e},${n}%,${o}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(e, n, o) {
    const r = this.clone();
    return r[e] = re(n, o), r;
  }
  _c(e) {
    return new this.constructor(e);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(e) {
    const n = e.replace("#", "");
    function o(r, s) {
      return parseInt(n[r] + n[s || r], 16);
    }
    n.length < 6 ? (this.r = o(0), this.g = o(1), this.b = o(2), this.a = n[3] ? o(3) / 255 : 1) : (this.r = o(0, 1), this.g = o(2, 3), this.b = o(4, 5), this.a = n[6] ? o(6, 7) / 255 : 1);
  }
  fromHsl({
    h: e,
    s: n,
    l: o,
    a: r
  }) {
    if (this._h = e % 360, this._s = n, this._l = o, this.a = typeof r == "number" ? r : 1, n <= 0) {
      const d = L(o * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let s = 0, i = 0, a = 0;
    const l = e / 60, f = (1 - Math.abs(2 * o - 1)) * n, c = f * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (s = f, i = c) : l >= 1 && l < 2 ? (s = c, i = f) : l >= 2 && l < 3 ? (i = f, a = c) : l >= 3 && l < 4 ? (i = c, a = f) : l >= 4 && l < 5 ? (s = c, a = f) : l >= 5 && l < 6 && (s = f, a = c);
    const u = o - f / 2;
    this.r = L((s + u) * 255), this.g = L((i + u) * 255), this.b = L((a + u) * 255);
  }
  fromHsv({
    h: e,
    s: n,
    v: o,
    a: r
  }) {
    this._h = e % 360, this._s = n, this._v = o, this.a = typeof r == "number" ? r : 1;
    const s = L(o * 255);
    if (this.r = s, this.g = s, this.b = s, n <= 0)
      return;
    const i = e / 60, a = Math.floor(i), l = i - a, f = L(o * (1 - n) * 255), c = L(o * (1 - n * l) * 255), u = L(o * (1 - n * (1 - l)) * 255);
    switch (a) {
      case 0:
        this.g = u, this.b = f;
        break;
      case 1:
        this.r = c, this.b = f;
        break;
      case 2:
        this.r = f, this.b = u;
        break;
      case 3:
        this.r = f, this.g = c;
        break;
      case 4:
        this.r = u, this.g = f;
        break;
      case 5:
      default:
        this.g = f, this.b = c;
        break;
    }
  }
  fromHsvString(e) {
    const n = Le(e, bt);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(e) {
    const n = Le(e, bt);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(e) {
    const n = Le(e, (o, r) => (
      // Convert percentage to number. e.g. 50% -> 128
      r.includes("%") ? L(o / 100 * 255) : o
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
const bn = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, yn = Object.assign(Object.assign({}, bn), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function $e(t) {
  return t >= 0 && t <= 255;
}
function le(t, e) {
  const {
    r: n,
    g: o,
    b: r,
    a: s
  } = new W(t).toRgb();
  if (s < 1)
    return t;
  const {
    r: i,
    g: a,
    b: l
  } = new W(e).toRgb();
  for (let f = 0.01; f <= 1; f += 0.01) {
    const c = Math.round((n - i * (1 - f)) / f), u = Math.round((o - a * (1 - f)) / f), d = Math.round((r - l * (1 - f)) / f);
    if ($e(c) && $e(u) && $e(d))
      return new W({
        r: c,
        g: u,
        b: d,
        a: Math.round(f * 100) / 100
      }).toRgbString();
  }
  return new W({
    r: n,
    g: o,
    b: r,
    a: 1
  }).toRgbString();
}
var vn = function(t, e) {
  var n = {};
  for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(t); r < o.length; r++)
    e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]]);
  return n;
};
function Sn(t) {
  const {
    override: e
  } = t, n = vn(t, ["override"]), o = Object.assign({}, e);
  Object.keys(yn).forEach((d) => {
    delete o[d];
  });
  const r = Object.assign(Object.assign({}, n), o), s = 480, i = 576, a = 768, l = 992, f = 1200, c = 1600;
  if (r.motion === !1) {
    const d = "0s";
    r.motionDurationFast = d, r.motionDurationMid = d, r.motionDurationSlow = d;
  }
  return Object.assign(Object.assign(Object.assign({}, r), {
    // ============== Background ============== //
    colorFillContent: r.colorFillSecondary,
    colorFillContentHover: r.colorFill,
    colorFillAlter: r.colorFillQuaternary,
    colorBgContainerDisabled: r.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: r.colorBgContainer,
    colorSplit: le(r.colorBorderSecondary, r.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: r.colorTextQuaternary,
    colorTextDisabled: r.colorTextQuaternary,
    colorTextHeading: r.colorText,
    colorTextLabel: r.colorTextSecondary,
    colorTextDescription: r.colorTextTertiary,
    colorTextLightSolid: r.colorWhite,
    colorHighlight: r.colorError,
    colorBgTextHover: r.colorFillSecondary,
    colorBgTextActive: r.colorFill,
    colorIcon: r.colorTextTertiary,
    colorIconHover: r.colorText,
    colorErrorOutline: le(r.colorErrorBg, r.colorBgContainer),
    colorWarningOutline: le(r.colorWarningBg, r.colorBgContainer),
    // Font
    fontSizeIcon: r.fontSizeSM,
    // Line
    lineWidthFocus: r.lineWidth * 3,
    // Control
    lineWidth: r.lineWidth,
    controlOutlineWidth: r.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: r.controlHeight / 2,
    controlItemBgHover: r.colorFillTertiary,
    controlItemBgActive: r.colorPrimaryBg,
    controlItemBgActiveHover: r.colorPrimaryBgHover,
    controlItemBgActiveDisabled: r.colorFill,
    controlTmpOutline: r.colorFillQuaternary,
    controlOutline: le(r.colorPrimaryBg, r.colorBgContainer),
    lineType: r.lineType,
    borderRadius: r.borderRadius,
    borderRadiusXS: r.borderRadiusXS,
    borderRadiusSM: r.borderRadiusSM,
    borderRadiusLG: r.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: r.sizeXXS,
    paddingXS: r.sizeXS,
    paddingSM: r.sizeSM,
    padding: r.size,
    paddingMD: r.sizeMD,
    paddingLG: r.sizeLG,
    paddingXL: r.sizeXL,
    paddingContentHorizontalLG: r.sizeLG,
    paddingContentVerticalLG: r.sizeMS,
    paddingContentHorizontal: r.sizeMS,
    paddingContentVertical: r.sizeSM,
    paddingContentHorizontalSM: r.size,
    paddingContentVerticalSM: r.sizeXS,
    marginXXS: r.sizeXXS,
    marginXS: r.sizeXS,
    marginSM: r.sizeSM,
    margin: r.size,
    marginMD: r.sizeMD,
    marginLG: r.sizeLG,
    marginXL: r.sizeXL,
    marginXXL: r.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: s,
    screenXSMin: s,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: a - 1,
    screenMD: a,
    screenMDMin: a,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: f - 1,
    screenXL: f,
    screenXLMin: f,
    screenXLMax: c - 1,
    screenXXL: c,
    screenXXLMin: c,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new W("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new W("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new W("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), o);
}
const xn = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, Cn = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, _n = tr(Be.defaultAlgorithm), wn = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, Bt = (t, e, n) => {
  const o = n.getDerivativeToken(t), {
    override: r,
    ...s
  } = e;
  let i = {
    ...o,
    override: r
  };
  return i = Sn(i), s && Object.entries(s).forEach(([a, l]) => {
    const {
      theme: f,
      ...c
    } = l;
    let u = c;
    f && (u = Bt({
      ...i,
      ...c
    }, {
      override: c
    }, f)), i[a] = u;
  }), i;
};
function Tn() {
  const {
    token: t,
    hashed: e,
    theme: n = _n,
    override: o,
    cssVar: r
  } = h.useContext(Be._internalContext), [s, i, a] = rr(n, [Be.defaultSeed, t], {
    salt: `${Fr}-${e || ""}`,
    override: o,
    getComputedToken: Bt,
    cssVar: r && {
      prefix: r.prefix,
      key: r.key,
      unitless: xn,
      ignore: Cn,
      preserve: wn
    }
  });
  return [n, a, e ? i : "", s, r];
}
const {
  genStyleHooks: En
} = gn({
  usePrefix: () => {
    const {
      getPrefixCls: t,
      iconPrefixCls: e
    } = me();
    return {
      iconPrefixCls: e,
      rootPrefixCls: t()
    };
  },
  useToken: () => {
    const [t, e, n, o, r] = Tn();
    return {
      theme: t,
      realToken: e,
      hashId: n,
      token: o,
      cssVar: r
    };
  },
  useCSP: () => {
    const {
      csp: t
    } = me();
    return t ?? {};
  },
  layer: {
    name: "antdx",
    dependencies: ["antd"]
  }
});
var Mn = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, Pn = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, On = "".concat(Mn, " ").concat(Pn).split(/[\s\n]+/), In = "aria-", Rn = "data-";
function yt(t, e) {
  return t.indexOf(e) === 0;
}
function kn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  e === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : e === !0 ? n = {
    aria: !0
  } : n = $({}, e);
  var o = {};
  return Object.keys(t).forEach(function(r) {
    // Aria
    (n.aria && (r === "role" || yt(r, In)) || // Data
    n.data && yt(r, Rn) || // Attr
    n.attr && On.includes(r)) && (o[r] = t[r]);
  }), o;
}
function ce(t) {
  return typeof t == "string";
}
const jn = (t, e, n, o) => {
  const [r, s] = I.useState(""), [i, a] = I.useState(1), l = e && ce(t);
  return Yr(() => {
    s(t), !l && ce(t) ? a(t.length) : ce(t) && ce(r) && t.indexOf(r) !== 0 && a(1);
  }, [t]), I.useEffect(() => {
    if (l && i < t.length) {
      const c = setTimeout(() => {
        a((u) => u + n);
      }, o);
      return () => {
        clearTimeout(c);
      };
    }
  }, [i, e, t]), [l ? t.slice(0, i) : t, l && i < t.length];
};
function Ln(t) {
  return I.useMemo(() => {
    if (!t)
      return [!1, 0, 0, null];
    let e = {
      step: 1,
      interval: 50,
      // set default suffix is empty
      suffix: null
    };
    return typeof t == "object" && (e = {
      ...e,
      ...t
    }), [!0, e.step, e.interval, e.suffix];
  }, [t]);
}
const $n = ({
  prefixCls: t
}) => /* @__PURE__ */ h.createElement("span", {
  className: `${t}-dot`
}, /* @__PURE__ */ h.createElement("i", {
  className: `${t}-dot-item`,
  key: "item-1"
}), /* @__PURE__ */ h.createElement("i", {
  className: `${t}-dot-item`,
  key: "item-2"
}), /* @__PURE__ */ h.createElement("i", {
  className: `${t}-dot-item`,
  key: "item-3"
})), Dn = (t) => {
  const {
    componentCls: e,
    paddingSM: n,
    padding: o
  } = t;
  return {
    [e]: {
      [`${e}-content`]: {
        // Shared: filled, outlined, shadow
        "&-filled,&-outlined,&-shadow": {
          padding: `${se(n)} ${se(o)}`,
          borderRadius: t.borderRadiusLG
        },
        // Filled:
        "&-filled": {
          backgroundColor: t.colorFillContent
        },
        // Outlined:
        "&-outlined": {
          border: `1px solid ${t.colorBorderSecondary}`
        },
        // Shadow:
        "&-shadow": {
          boxShadow: t.boxShadowTertiary
        }
      }
    }
  };
}, Bn = (t) => {
  const {
    componentCls: e,
    fontSize: n,
    lineHeight: o,
    paddingSM: r,
    padding: s,
    calc: i
  } = t, a = i(n).mul(o).div(2).add(r).equal(), l = `${e}-content`;
  return {
    [e]: {
      [l]: {
        // round:
        "&-round": {
          borderRadius: {
            _skip_check_: !0,
            value: a
          },
          paddingInline: i(s).mul(1.25).equal()
        }
      },
      // corner:
      [`&-start ${l}-corner`]: {
        borderStartStartRadius: t.borderRadiusXS
      },
      [`&-end ${l}-corner`]: {
        borderStartEndRadius: t.borderRadiusXS
      }
    }
  };
}, Hn = (t) => {
  const {
    componentCls: e,
    padding: n
  } = t;
  return {
    [`${e}-list`]: {
      display: "flex",
      flexDirection: "column",
      gap: n,
      overflowY: "auto"
    }
  };
}, zn = new xt("loadingMove", {
  "0%": {
    transform: "translateY(0)"
  },
  "10%": {
    transform: "translateY(4px)"
  },
  "20%": {
    transform: "translateY(0)"
  },
  "30%": {
    transform: "translateY(-4px)"
  },
  "40%": {
    transform: "translateY(0)"
  }
}), An = new xt("cursorBlink", {
  "0%": {
    opacity: 1
  },
  "50%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), Fn = (t) => {
  const {
    componentCls: e,
    fontSize: n,
    lineHeight: o,
    paddingSM: r,
    colorText: s,
    calc: i
  } = t;
  return {
    [e]: {
      display: "flex",
      columnGap: r,
      [`&${e}-end`]: {
        justifyContent: "end",
        flexDirection: "row-reverse",
        [`& ${e}-content-wrapper`]: {
          alignItems: "flex-end"
        }
      },
      [`&${e}-rtl`]: {
        direction: "rtl"
      },
      [`&${e}-typing ${e}-content:last-child::after`]: {
        content: '"|"',
        fontWeight: 900,
        userSelect: "none",
        opacity: 1,
        marginInlineStart: "0.1em",
        animationName: An,
        animationDuration: "0.8s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear"
      },
      // ============================ Avatar =============================
      [`& ${e}-avatar`]: {
        display: "inline-flex",
        justifyContent: "center",
        alignSelf: "flex-start"
      },
      // ======================== Header & Footer ========================
      [`& ${e}-header, & ${e}-footer`]: {
        fontSize: n,
        lineHeight: o,
        color: t.colorText
      },
      [`& ${e}-header`]: {
        marginBottom: t.paddingXXS
      },
      [`& ${e}-footer`]: {
        marginTop: r
      },
      // =========================== Content =============================
      [`& ${e}-content-wrapper`]: {
        flex: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: 0,
        maxWidth: "100%"
      },
      [`& ${e}-content`]: {
        position: "relative",
        boxSizing: "border-box",
        minWidth: 0,
        maxWidth: "100%",
        color: s,
        fontSize: t.fontSize,
        lineHeight: t.lineHeight,
        minHeight: i(r).mul(2).add(i(o).mul(n)).equal(),
        wordBreak: "break-word",
        [`& ${e}-dot`]: {
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          columnGap: t.marginXS,
          padding: `0 ${se(t.paddingXXS)}`,
          "&-item": {
            backgroundColor: t.colorPrimary,
            borderRadius: "100%",
            width: 4,
            height: 4,
            animationName: zn,
            animationDuration: "2s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            "&:nth-child(1)": {
              animationDelay: "0s"
            },
            "&:nth-child(2)": {
              animationDelay: "0.2s"
            },
            "&:nth-child(3)": {
              animationDelay: "0.4s"
            }
          }
        }
      }
    }
  };
}, Xn = () => ({}), Ht = En("Bubble", (t) => {
  const e = Ue(t, {});
  return [Fn(e), Hn(e), Dn(e), Bn(e)];
}, Xn), zt = /* @__PURE__ */ h.createContext({}), Nn = (t, e) => {
  const {
    prefixCls: n,
    className: o,
    rootClassName: r,
    style: s,
    classNames: i = {},
    styles: a = {},
    avatar: l,
    placement: f = "start",
    loading: c = !1,
    loadingRender: u,
    typing: d,
    content: b = "",
    messageRender: v,
    variant: x = "filled",
    shape: g,
    onTypingComplete: m,
    header: w,
    footer: R,
    ...p
  } = t, {
    onUpdate: C
  } = h.useContext(zt), y = h.useRef(null);
  h.useImperativeHandle(e, () => ({
    nativeElement: y.current
  }));
  const {
    direction: M,
    getPrefixCls: P
  } = me(), S = P("bubble", n), O = Vr("bubble"), [z, j, A, _] = Ln(d), [T, k] = jn(b, z, j, A);
  h.useEffect(() => {
    C == null || C();
  }, [T]);
  const F = h.useRef(!1);
  h.useEffect(() => {
    !k && !c ? F.current || (F.current = !0, m == null || m()) : F.current = !1;
  }, [k, c]);
  const [U, G, q] = Ht(S), Z = Q(S, r, O.className, o, G, q, `${S}-${f}`, {
    [`${S}-rtl`]: M === "rtl",
    [`${S}-typing`]: k && !c && !v && !_
  }), ee = /* @__PURE__ */ h.isValidElement(l) ? l : /* @__PURE__ */ h.createElement(Zt, l), te = v ? v(T) : T;
  let X;
  c ? X = u ? u() : /* @__PURE__ */ h.createElement($n, {
    prefixCls: S
  }) : X = /* @__PURE__ */ h.createElement(h.Fragment, null, te, k && _);
  let K = /* @__PURE__ */ h.createElement("div", {
    style: {
      ...O.styles.content,
      ...a.content
    },
    className: Q(`${S}-content`, `${S}-content-${x}`, g && `${S}-content-${g}`, O.classNames.content, i.content)
  }, X);
  return (w || R) && (K = /* @__PURE__ */ h.createElement("div", {
    className: `${S}-content-wrapper`
  }, w && /* @__PURE__ */ h.createElement("div", {
    className: Q(`${S}-header`, O.classNames.header, i.header),
    style: {
      ...O.styles.header,
      ...a.header
    }
  }, w), K, R && /* @__PURE__ */ h.createElement("div", {
    className: Q(`${S}-footer`, O.classNames.footer, i.footer),
    style: {
      ...O.styles.footer,
      ...a.footer
    }
  }, R))), U(/* @__PURE__ */ h.createElement("div", ie({
    style: {
      ...O.style,
      ...s
    },
    className: Z
  }, p, {
    ref: y
  }), l && /* @__PURE__ */ h.createElement("div", {
    style: {
      ...O.styles.avatar,
      ...a.avatar
    },
    className: Q(`${S}-avatar`, O.classNames.avatar, i.avatar)
  }, ee), K));
}, Ge = /* @__PURE__ */ h.forwardRef(Nn);
function Vn(t) {
  const [e, n] = h.useState(t.length), o = h.useMemo(() => t.slice(0, e), [t, e]), r = h.useMemo(() => {
    const i = o[o.length - 1];
    return i ? i.key : null;
  }, [o]);
  h.useEffect(() => {
    var i;
    if (!(o.length && o.every((a, l) => {
      var f;
      return a.key === ((f = t[l]) == null ? void 0 : f.key);
    }))) {
      if (o.length === 0)
        n(1);
      else
        for (let a = 0; a < o.length; a += 1)
          if (o[a].key !== ((i = t[a]) == null ? void 0 : i.key)) {
            n(a);
            break;
          }
    }
  }, [t]);
  const s = Pt((i) => {
    i === r && n(e + 1);
  });
  return [o, s];
}
function Wn(t, e) {
  const n = I.useCallback((o) => typeof e == "function" ? e(o) : e ? e[o.role] || {} : {}, [e]);
  return I.useMemo(() => (t || []).map((o, r) => {
    const s = o.key ?? `preset_${r}`;
    return {
      ...n(o),
      ...o,
      key: s
    };
  }), [t, n]);
}
const Un = 1, Gn = (t, e) => {
  const {
    prefixCls: n,
    rootClassName: o,
    className: r,
    items: s,
    autoScroll: i = !0,
    roles: a,
    ...l
  } = t, f = kn(l, {
    attr: !0,
    aria: !0
  }), c = I.useRef(null), u = I.useRef({}), {
    getPrefixCls: d
  } = me(), b = d("bubble", n), v = `${b}-list`, [x, g, m] = Ht(b), [w, R] = I.useState(!1);
  I.useEffect(() => (R(!0), () => {
    R(!1);
  }), []);
  const p = Wn(s, a), [C, y] = Vn(p), [M, P] = I.useState(!0), [S, O] = I.useState(0), z = (_) => {
    const T = _.target;
    P(T.scrollHeight - Math.abs(T.scrollTop) - T.clientHeight <= Un);
  };
  I.useEffect(() => {
    i && c.current && M && c.current.scrollTo({
      top: c.current.scrollHeight
    });
  }, [S]), I.useEffect(() => {
    var _;
    if (i) {
      const T = (_ = C[C.length - 2]) == null ? void 0 : _.key, k = u.current[T];
      if (k) {
        const {
          nativeElement: F
        } = k, {
          top: U,
          bottom: G
        } = F.getBoundingClientRect(), {
          top: q,
          bottom: Z
        } = c.current.getBoundingClientRect();
        U < Z && G > q && (O((te) => te + 1), P(!0));
      }
    }
  }, [C.length]), I.useImperativeHandle(e, () => ({
    nativeElement: c.current,
    scrollTo: ({
      key: _,
      offset: T,
      behavior: k = "smooth",
      block: F
    }) => {
      if (typeof T == "number")
        c.current.scrollTo({
          top: T,
          behavior: k
        });
      else if (_ !== void 0) {
        const U = u.current[_];
        if (U) {
          const G = C.findIndex((q) => q.key === _);
          P(G === C.length - 1), U.nativeElement.scrollIntoView({
            behavior: k,
            block: F
          });
        }
      }
    }
  }));
  const j = Pt(() => {
    i && O((_) => _ + 1);
  }), A = I.useMemo(() => ({
    onUpdate: j
  }), []);
  return x(/* @__PURE__ */ I.createElement(zt.Provider, {
    value: A
  }, /* @__PURE__ */ I.createElement("div", ie({}, f, {
    className: Q(v, o, r, g, m, {
      [`${v}-reach-end`]: M
    }),
    ref: c,
    onScroll: z
  }), C.map(({
    key: _,
    ...T
  }) => /* @__PURE__ */ I.createElement(Ge, ie({}, T, {
    key: _,
    ref: (k) => {
      k ? u.current[_] = k : delete u.current[_];
    },
    typing: w ? T.typing : !1,
    onTypingComplete: () => {
      var k;
      (k = T.onTypingComplete) == null || k.call(T), y(_);
    }
  }))))));
}, Kn = /* @__PURE__ */ I.forwardRef(Gn);
Ge.List = Kn;
function qn(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function Yn(t, e = !1) {
  try {
    if (Ne(t))
      return t;
    if (e && !qn(t))
      return;
    if (typeof t == "string") {
      let n = t.trim();
      return n.startsWith(";") && (n = n.slice(1)), n.endsWith(";") && (n = n.slice(0, -1)), new Function(`return (...args) => (${n})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function Qn(t, e) {
  return ue(() => Yn(t, e), [t, e]);
}
function Jn(t, e) {
  return e((o, r) => Ne(o) ? r ? (...s) => o(...s, ...t) : o(...t) : o);
}
const Zn = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function eo(t) {
  return t ? Object.keys(t).reduce((e, n) => {
    const o = t[n];
    return e[n] = to(n, o), e;
  }, {}) : {};
}
function to(t, e) {
  return typeof e == "number" && !Zn.includes(t) ? e + "px" : e;
}
function Fe(t) {
  const e = [], n = t.cloneNode(!1);
  if (t._reactElement) {
    const r = h.Children.toArray(t._reactElement.props.children).map((s) => {
      if (h.isValidElement(s) && s.props.__slot__) {
        const {
          portals: i,
          clonedElement: a
        } = Fe(s.props.el);
        return h.cloneElement(s, {
          ...s.props,
          el: a,
          children: [...h.Children.toArray(s.props.children), ...i]
        });
      }
      return null;
    });
    return r.originalChildren = t._reactElement.props.children, e.push(De(h.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: r
    }), n)), {
      clonedElement: n,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((r) => {
    t.getEventListeners(r).forEach(({
      listener: i,
      type: a,
      useCapture: l
    }) => {
      n.addEventListener(a, i, l);
    });
  });
  const o = Array.from(t.childNodes);
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (s.nodeType === 1) {
      const {
        clonedElement: i,
        portals: a
      } = Fe(s);
      e.push(...a), n.appendChild(i);
    } else s.nodeType === 3 && n.appendChild(s.cloneNode());
  }
  return {
    clonedElement: n,
    portals: e
  };
}
function ro(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const vt = Vt(({
  slot: t,
  clone: e,
  className: n,
  style: o,
  observeAttributes: r
}, s) => {
  const i = Wt(), [a, l] = Ut([]), {
    forceClone: f
  } = Qt(), c = f ? !0 : e;
  return Gt(() => {
    var x;
    if (!i.current || !t)
      return;
    let u = t;
    function d() {
      let g = u;
      if (u.tagName.toLowerCase() === "svelte-slot" && u.children.length === 1 && u.children[0] && (g = u.children[0], g.tagName.toLowerCase() === "react-portal-target" && g.children[0] && (g = g.children[0])), ro(s, g), n && g.classList.add(...n.split(" ")), o) {
        const m = eo(o);
        Object.keys(m).forEach((w) => {
          g.style[w] = m[w];
        });
      }
    }
    let b = null, v = null;
    if (c && window.MutationObserver) {
      let g = function() {
        var p, C, y;
        (p = i.current) != null && p.contains(u) && ((C = i.current) == null || C.removeChild(u));
        const {
          portals: w,
          clonedElement: R
        } = Fe(t);
        u = R, l(w), u.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          d();
        }, 50), (y = i.current) == null || y.appendChild(u);
      };
      g();
      const m = gr(() => {
        g(), b == null || b.disconnect(), b == null || b.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      b = new window.MutationObserver(m), b.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      u.style.display = "contents", d(), (x = i.current) == null || x.appendChild(u);
    return () => {
      var g, m;
      u.style.display = "", (g = i.current) != null && g.contains(u) && ((m = i.current) == null || m.removeChild(u)), b == null || b.disconnect();
    };
  }, [t, c, n, o, s, r, f]), h.createElement("react-child", {
    ref: i,
    style: {
      display: "contents"
    }
  }, ...a);
}), no = ({
  children: t,
  ...e
}) => /* @__PURE__ */ B.jsx(B.Fragment, {
  children: t(e)
});
function oo(t) {
  return h.createElement(no, {
    children: t
  });
}
function Xe(t, e, n) {
  const o = t.filter(Boolean);
  if (o.length !== 0)
    return o.map((r, s) => {
      var f;
      if (typeof r != "object")
        return e != null && e.fallback ? e.fallback(r) : r;
      const i = {
        ...r.props,
        key: ((f = r.props) == null ? void 0 : f.key) ?? (n ? `${n}-${s}` : `${s}`)
      };
      let a = i;
      Object.keys(r.slots).forEach((c) => {
        if (!r.slots[c] || !(r.slots[c] instanceof Element) && !r.slots[c].el)
          return;
        const u = c.split(".");
        u.forEach((m, w) => {
          a[m] || (a[m] = {}), w !== u.length - 1 && (a = i[m]);
        });
        const d = r.slots[c];
        let b, v, x = (e == null ? void 0 : e.clone) ?? !1, g = e == null ? void 0 : e.forceClone;
        d instanceof Element ? b = d : (b = d.el, v = d.callback, x = d.clone ?? x, g = d.forceClone ?? g), g = g ?? !!v, a[u[u.length - 1]] = b ? v ? (...m) => (v(u[u.length - 1], m), /* @__PURE__ */ B.jsx(Qe, {
          ...r.ctx,
          params: m,
          forceClone: g,
          children: /* @__PURE__ */ B.jsx(vt, {
            slot: b,
            clone: x
          })
        })) : oo((m) => /* @__PURE__ */ B.jsx(Qe, {
          ...r.ctx,
          forceClone: g,
          children: /* @__PURE__ */ B.jsx(vt, {
            ...m,
            slot: b,
            clone: x
          })
        })) : a[u[u.length - 1]], a = i;
      });
      const l = (e == null ? void 0 : e.children) || "children";
      return r[l] ? i[l] = Xe(r[l], e, `${s}`) : e != null && e.children && (i[l] = void 0, Reflect.deleteProperty(i, l)), i;
    });
}
const {
  useItems: so,
  withItemsContextProvider: io,
  ItemHandler: ho
} = St("antdx-bubble.list-items"), {
  useItems: ao,
  withItemsContextProvider: lo,
  ItemHandler: go
} = St("antdx-bubble.list-roles");
function co(t, e) {
  return Jn(e, (n) => {
    var o, r;
    return {
      ...t,
      avatar: Ne(t.avatar) ? n(t.avatar) : oe(t.avatar) ? {
        ...t.avatar,
        icon: n((o = t.avatar) == null ? void 0 : o.icon),
        src: n((r = t.avatar) == null ? void 0 : r.src)
      } : t.avatar,
      footer: n(t.footer),
      header: n(t.header),
      loadingRender: n(t.loadingRender, !0),
      messageRender: n(t.messageRender, !0)
    };
  });
}
const mo = Ar(lo(["roles"], io(["items", "default"], ({
  items: t,
  roles: e,
  children: n,
  ...o
}) => {
  const r = Qn(e), {
    items: {
      roles: s
    }
  } = ao(), {
    items: i
  } = so(), a = ue(() => {
    var c;
    return e || ((c = Xe(s, {
      clone: !0,
      forceClone: !0
    })) == null ? void 0 : c.reduce((u, d) => (d.role !== void 0 && (u[d.role] = d), u), {}));
  }, [s, e]), l = i.items.length > 0 ? i.items : i.default, f = ue(() => (c, u) => c.role && (a || {})[c.role] ? co((a || {})[c.role], [c, u]) : {
    messageRender(d) {
      return /* @__PURE__ */ B.jsx(B.Fragment, {
        children: oe(d) ? JSON.stringify(d) : d
      });
    }
  }, [a]);
  return /* @__PURE__ */ B.jsxs(B.Fragment, {
    children: [/* @__PURE__ */ B.jsx("div", {
      style: {
        display: "none"
      },
      children: n
    }), /* @__PURE__ */ B.jsx(Ge.List, {
      ...o,
      items: ue(() => t || Xe(l), [t, l]),
      roles: r || f
    })]
  });
})));
export {
  mo as BubbleList,
  mo as default
};
