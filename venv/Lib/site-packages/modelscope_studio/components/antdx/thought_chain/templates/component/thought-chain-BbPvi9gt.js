import { i as tn, a as gt, r as rn, w as $e, g as nn, c as U } from "./Index-BHTPncra.js";
const P = window.ms_globals.React, x = window.ms_globals.React, Qr = window.ms_globals.React.isValidElement, te = window.ms_globals.React.useRef, Yr = window.ms_globals.React.useLayoutEffect, ge = window.ms_globals.React.useEffect, Jr = window.ms_globals.React.forwardRef, Zr = window.ms_globals.React.useState, en = window.ms_globals.React.useMemo, jt = window.ms_globals.ReactDOM, pt = window.ms_globals.ReactDOM.createPortal, on = window.ms_globals.internalContext.useContextPropsContext, zt = window.ms_globals.internalContext.ContextPropsProvider, sn = window.ms_globals.createItemsContext.createItemsContext, an = window.ms_globals.antd.ConfigProvider, vt = window.ms_globals.antd.theme, cn = window.ms_globals.antd.Avatar, Dt = window.ms_globals.antd.Typography, De = window.ms_globals.antdCssinjs.unit, rt = window.ms_globals.antdCssinjs.token2CSSVar, kt = window.ms_globals.antdCssinjs.useStyleRegister, ln = window.ms_globals.antdCssinjs.useCSSVarRegister, un = window.ms_globals.antdCssinjs.createTheme, fn = window.ms_globals.antdCssinjs.useCacheToken, dn = window.ms_globals.antdIcons.LeftOutlined, mn = window.ms_globals.antdIcons.RightOutlined;
var hn = /\s/;
function pn(e) {
  for (var t = e.length; t-- && hn.test(e.charAt(t)); )
    ;
  return t;
}
var gn = /^\s+/;
function vn(e) {
  return e && e.slice(0, pn(e) + 1).replace(gn, "");
}
var Ft = NaN, yn = /^[-+]0x[0-9a-f]+$/i, bn = /^0b[01]+$/i, Sn = /^0o[0-7]+$/i, xn = parseInt;
function Nt(e) {
  if (typeof e == "number")
    return e;
  if (tn(e))
    return Ft;
  if (gt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = gt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = vn(e);
  var n = bn.test(e);
  return n || Sn.test(e) ? xn(e.slice(2), n ? 2 : 8) : yn.test(e) ? Ft : +e;
}
var nt = function() {
  return rn.Date.now();
}, Cn = "Expected a function", En = Math.max, _n = Math.min;
function wn(e, t, n) {
  var o, r, i, s, a, c, l = 0, f = !1, u = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Cn);
  t = Nt(t) || 0, gt(n) && (f = !!n.leading, u = "maxWait" in n, i = u ? En(Nt(n.maxWait) || 0, t) : i, d = "trailing" in n ? !!n.trailing : d);
  function h(p) {
    var T = o, w = r;
    return o = r = void 0, l = p, s = e.apply(w, T), s;
  }
  function v(p) {
    return l = p, a = setTimeout(y, t), f ? h(p) : s;
  }
  function g(p) {
    var T = p - c, w = p - l, O = t - T;
    return u ? _n(O, i - w) : O;
  }
  function m(p) {
    var T = p - c, w = p - l;
    return c === void 0 || T >= t || T < 0 || u && w >= i;
  }
  function y() {
    var p = nt();
    if (m(p))
      return S(p);
    a = setTimeout(y, g(p));
  }
  function S(p) {
    return a = void 0, d && o ? h(p) : (o = r = void 0, s);
  }
  function _() {
    a !== void 0 && clearTimeout(a), l = 0, o = c = r = a = void 0;
  }
  function b() {
    return a === void 0 ? s : S(nt());
  }
  function E() {
    var p = nt(), T = m(p);
    if (o = arguments, r = this, c = p, T) {
      if (a === void 0)
        return v(c);
      if (u)
        return clearTimeout(a), a = setTimeout(y, t), h(c);
    }
    return a === void 0 && (a = setTimeout(y, t)), s;
  }
  return E.cancel = _, E.flush = b, E;
}
var vr = {
  exports: {}
}, Fe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn = x, Pn = Symbol.for("react.element"), Mn = Symbol.for("react.fragment"), On = Object.prototype.hasOwnProperty, Rn = Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ln = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function yr(e, t, n) {
  var o, r = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (o in t) On.call(t, o) && !Ln.hasOwnProperty(o) && (r[o] = t[o]);
  if (e && e.defaultProps) for (o in t = e.defaultProps, t) r[o] === void 0 && (r[o] = t[o]);
  return {
    $$typeof: Pn,
    type: e,
    key: i,
    ref: s,
    props: r,
    _owner: Rn.current
  };
}
Fe.Fragment = Mn;
Fe.jsx = yr;
Fe.jsxs = yr;
vr.exports = Fe;
var Q = vr.exports;
const {
  SvelteComponent: An,
  assign: Ht,
  binding_callbacks: Vt,
  check_outros: In,
  children: br,
  claim_element: Sr,
  claim_space: $n,
  component_subscribe: Bt,
  compute_slots: jn,
  create_slot: zn,
  detach: ce,
  element: xr,
  empty: Gt,
  exclude_internal_props: Xt,
  get_all_dirty_from_scope: Dn,
  get_slot_changes: kn,
  group_outros: Fn,
  init: Nn,
  insert_hydration: je,
  safe_not_equal: Hn,
  set_custom_element_data: Cr,
  space: Vn,
  transition_in: ze,
  transition_out: yt,
  update_slot_base: Bn
} = window.__gradio__svelte__internal, {
  beforeUpdate: Gn,
  getContext: Xn,
  onDestroy: Un,
  setContext: Wn
} = window.__gradio__svelte__internal;
function Ut(e) {
  let t, n;
  const o = (
    /*#slots*/
    e[7].default
  ), r = zn(
    o,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = xr("svelte-slot"), r && r.c(), this.h();
    },
    l(i) {
      t = Sr(i, "SVELTE-SLOT", {
        class: !0
      });
      var s = br(t);
      r && r.l(s), s.forEach(ce), this.h();
    },
    h() {
      Cr(t, "class", "svelte-1rt0kpf");
    },
    m(i, s) {
      je(i, t, s), r && r.m(t, null), e[9](t), n = !0;
    },
    p(i, s) {
      r && r.p && (!n || s & /*$$scope*/
      64) && Bn(
        r,
        o,
        i,
        /*$$scope*/
        i[6],
        n ? kn(
          o,
          /*$$scope*/
          i[6],
          s,
          null
        ) : Dn(
          /*$$scope*/
          i[6]
        ),
        null
      );
    },
    i(i) {
      n || (ze(r, i), n = !0);
    },
    o(i) {
      yt(r, i), n = !1;
    },
    d(i) {
      i && ce(t), r && r.d(i), e[9](null);
    }
  };
}
function Kn(e) {
  let t, n, o, r, i = (
    /*$$slots*/
    e[4].default && Ut(e)
  );
  return {
    c() {
      t = xr("react-portal-target"), n = Vn(), i && i.c(), o = Gt(), this.h();
    },
    l(s) {
      t = Sr(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), br(t).forEach(ce), n = $n(s), i && i.l(s), o = Gt(), this.h();
    },
    h() {
      Cr(t, "class", "svelte-1rt0kpf");
    },
    m(s, a) {
      je(s, t, a), e[8](t), je(s, n, a), i && i.m(s, a), je(s, o, a), r = !0;
    },
    p(s, [a]) {
      /*$$slots*/
      s[4].default ? i ? (i.p(s, a), a & /*$$slots*/
      16 && ze(i, 1)) : (i = Ut(s), i.c(), ze(i, 1), i.m(o.parentNode, o)) : i && (Fn(), yt(i, 1, 1, () => {
        i = null;
      }), In());
    },
    i(s) {
      r || (ze(i), r = !0);
    },
    o(s) {
      yt(i), r = !1;
    },
    d(s) {
      s && (ce(t), ce(n), ce(o)), e[8](null), i && i.d(s);
    }
  };
}
function Wt(e) {
  const {
    svelteInit: t,
    ...n
  } = e;
  return n;
}
function qn(e, t, n) {
  let o, r, {
    $$slots: i = {},
    $$scope: s
  } = t;
  const a = jn(i);
  let {
    svelteInit: c
  } = t;
  const l = $e(Wt(t)), f = $e();
  Bt(e, f, (b) => n(0, o = b));
  const u = $e();
  Bt(e, u, (b) => n(1, r = b));
  const d = [], h = Xn("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: g,
    subSlotIndex: m
  } = nn() || {}, y = c({
    parent: h,
    props: l,
    target: f,
    slot: u,
    slotKey: v,
    slotIndex: g,
    subSlotIndex: m,
    onDestroy(b) {
      d.push(b);
    }
  });
  Wn("$$ms-gr-react-wrapper", y), Gn(() => {
    l.set(Wt(t));
  }), Un(() => {
    d.forEach((b) => b());
  });
  function S(b) {
    Vt[b ? "unshift" : "push"](() => {
      o = b, f.set(o);
    });
  }
  function _(b) {
    Vt[b ? "unshift" : "push"](() => {
      r = b, u.set(r);
    });
  }
  return e.$$set = (b) => {
    n(17, t = Ht(Ht({}, t), Xt(b))), "svelteInit" in b && n(5, c = b.svelteInit), "$$scope" in b && n(6, s = b.$$scope);
  }, t = Xt(t), [o, r, f, u, a, c, s, i, S, _];
}
class Qn extends An {
  constructor(t) {
    super(), Nn(this, t, qn, Kn, Hn, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: Fi
} = window.__gradio__svelte__internal, Kt = window.ms_globals.rerender, ot = window.ms_globals.tree;
function Yn(e, t = {}) {
  function n(o) {
    const r = $e(), i = new Qn({
      ...o,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const a = {
            key: window.ms_globals.autokey,
            svelteInstance: r,
            reactComponent: e,
            props: s.props,
            slot: s.slot,
            target: s.target,
            slotIndex: s.slotIndex,
            subSlotIndex: s.subSlotIndex,
            ignore: t.ignore,
            slotKey: s.slotKey,
            nodes: []
          }, c = s.parent ?? ot;
          return c.nodes = [...c.nodes, a], Kt({
            createPortal: pt,
            node: ot
          }), s.onDestroy(() => {
            c.nodes = c.nodes.filter((l) => l.svelteInstance !== r), Kt({
              createPortal: pt,
              node: ot
            });
          }), a;
        },
        ...o.props
      }
    });
    return r.set(i), i;
  }
  return new Promise((o) => {
    window.ms_globals.initializePromise.then(() => {
      o(n);
    });
  });
}
const Jn = "1.0.5", Zn = /* @__PURE__ */ x.createContext({}), eo = {
  classNames: {},
  styles: {},
  className: "",
  style: {}
}, to = (e) => {
  const t = x.useContext(Zn);
  return x.useMemo(() => ({
    ...eo,
    ...t[e]
  }), [t[e]]);
};
function fe() {
  return fe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, fe.apply(null, arguments);
}
const ro = "ant";
function bt() {
  const {
    getPrefixCls: e,
    direction: t,
    csp: n,
    iconPrefixCls: o,
    theme: r
  } = x.useContext(an.ConfigContext);
  return {
    theme: r,
    getPrefixCls: e,
    direction: t,
    csp: n,
    iconPrefixCls: o
  };
}
function ve(e) {
  var t = P.useRef();
  t.current = e;
  var n = P.useCallback(function() {
    for (var o, r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return (o = t.current) === null || o === void 0 ? void 0 : o.call.apply(o, [t].concat(i));
  }, []);
  return n;
}
function no(e) {
  if (Array.isArray(e)) return e;
}
function oo(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (o = i.call(n)).done) && (a.push(o.value), a.length !== t); c = !0) ;
    } catch (f) {
      l = !0, r = f;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw r;
      }
    }
    return a;
  }
}
function qt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function io(e, t) {
  if (e) {
    if (typeof e == "string") return qt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qt(e, t) : void 0;
  }
}
function so() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N(e, t) {
  return no(e) || oo(e, t) || io(e, t) || so();
}
function Ne() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Qt = Ne() ? P.useLayoutEffect : P.useEffect, ao = function(t, n) {
  var o = P.useRef(!0);
  Qt(function() {
    return t(o.current);
  }, n), Qt(function() {
    return o.current = !1, function() {
      o.current = !0;
    };
  }, []);
}, Yt = function(t, n) {
  ao(function(o) {
    if (!o)
      return t();
  }, n);
};
function ye(e) {
  var t = P.useRef(!1), n = P.useState(e), o = N(n, 2), r = o[0], i = o[1];
  P.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function s(a, c) {
    c && t.current || i(a);
  }
  return [r, s];
}
function it(e) {
  return e !== void 0;
}
function co(e, t) {
  var n = t || {}, o = n.defaultValue, r = n.value, i = n.onChange, s = n.postState, a = ye(function() {
    return it(r) ? r : it(o) ? typeof o == "function" ? o() : o : typeof e == "function" ? e() : e;
  }), c = N(a, 2), l = c[0], f = c[1], u = r !== void 0 ? r : l, d = s ? s(u) : u, h = ve(i), v = ye([u]), g = N(v, 2), m = g[0], y = g[1];
  Yt(function() {
    var _ = m[0];
    l !== _ && h(l, _);
  }, [m]), Yt(function() {
    it(r) || f(r);
  }, [r]);
  var S = ve(function(_, b) {
    f(_, b), y([u], b);
  });
  return [d, S];
}
function k(e) {
  "@babel/helpers - typeof";
  return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, k(e);
}
var Er = {
  exports: {}
}, M = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt = Symbol.for("react.element"), Ot = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), Ve = Symbol.for("react.strict_mode"), Be = Symbol.for("react.profiler"), Ge = Symbol.for("react.provider"), Xe = Symbol.for("react.context"), lo = Symbol.for("react.server_context"), Ue = Symbol.for("react.forward_ref"), We = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), Qe = Symbol.for("react.lazy"), uo = Symbol.for("react.offscreen"), _r;
_r = Symbol.for("react.module.reference");
function W(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Mt:
        switch (e = e.type, e) {
          case He:
          case Be:
          case Ve:
          case We:
          case Ke:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case lo:
              case Xe:
              case Ue:
              case Qe:
              case qe:
              case Ge:
                return e;
              default:
                return t;
            }
        }
      case Ot:
        return t;
    }
  }
}
M.ContextConsumer = Xe;
M.ContextProvider = Ge;
M.Element = Mt;
M.ForwardRef = Ue;
M.Fragment = He;
M.Lazy = Qe;
M.Memo = qe;
M.Portal = Ot;
M.Profiler = Be;
M.StrictMode = Ve;
M.Suspense = We;
M.SuspenseList = Ke;
M.isAsyncMode = function() {
  return !1;
};
M.isConcurrentMode = function() {
  return !1;
};
M.isContextConsumer = function(e) {
  return W(e) === Xe;
};
M.isContextProvider = function(e) {
  return W(e) === Ge;
};
M.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mt;
};
M.isForwardRef = function(e) {
  return W(e) === Ue;
};
M.isFragment = function(e) {
  return W(e) === He;
};
M.isLazy = function(e) {
  return W(e) === Qe;
};
M.isMemo = function(e) {
  return W(e) === qe;
};
M.isPortal = function(e) {
  return W(e) === Ot;
};
M.isProfiler = function(e) {
  return W(e) === Be;
};
M.isStrictMode = function(e) {
  return W(e) === Ve;
};
M.isSuspense = function(e) {
  return W(e) === We;
};
M.isSuspenseList = function(e) {
  return W(e) === Ke;
};
M.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === He || e === Be || e === Ve || e === We || e === Ke || e === uo || typeof e == "object" && e !== null && (e.$$typeof === Qe || e.$$typeof === qe || e.$$typeof === Ge || e.$$typeof === Xe || e.$$typeof === Ue || e.$$typeof === _r || e.getModuleId !== void 0);
};
M.typeOf = W;
Er.exports = M;
var st = Er.exports, fo = Symbol.for("react.element"), mo = Symbol.for("react.transitional.element"), ho = Symbol.for("react.fragment");
function po(e) {
  return (
    // Base object type
    e && k(e) === "object" && // React Element type
    (e.$$typeof === fo || e.$$typeof === mo) && // React Fragment type
    e.type === ho
  );
}
var go = function(t, n) {
  typeof t == "function" ? t(n) : k(t) === "object" && t && "current" in t && (t.current = n);
}, vo = function(t) {
  var n, o;
  if (!t)
    return !1;
  if (wr(t) && t.props.propertyIsEnumerable("ref"))
    return !0;
  var r = st.isMemo(t) ? t.type.type : t.type;
  return !(typeof r == "function" && !((n = r.prototype) !== null && n !== void 0 && n.render) && r.$$typeof !== st.ForwardRef || typeof t == "function" && !((o = t.prototype) !== null && o !== void 0 && o.render) && t.$$typeof !== st.ForwardRef);
};
function wr(e) {
  return /* @__PURE__ */ Qr(e) && !po(e);
}
var yo = function(t) {
  if (t && wr(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function bo(e, t) {
  if (k(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (k(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tr(e) {
  var t = bo(e, "string");
  return k(t) == "symbol" ? t : t + "";
}
function R(e, t, n) {
  return (t = Tr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Jt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jt(Object(n), !0).forEach(function(o) {
      R(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Zt(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function So(e) {
  return e && k(e) === "object" && Zt(e.nativeElement) ? e.nativeElement : Zt(e) ? e : null;
}
function xo(e) {
  var t = So(e);
  if (t)
    return t;
  if (e instanceof x.Component) {
    var n;
    return (n = jt.findDOMNode) === null || n === void 0 ? void 0 : n.call(jt, e);
  }
  return null;
}
function Co(e, t) {
  if (e == null) return {};
  var n = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    n[o] = e[o];
  }
  return n;
}
function er(e, t) {
  if (e == null) return {};
  var n, o, r = Co(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++) n = i[o], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var Eo = /* @__PURE__ */ P.createContext({});
function de(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function tr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Tr(o.key), o);
  }
}
function me(e, t, n) {
  return t && tr(e.prototype, t), n && tr(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function St(e, t) {
  return St = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, St(e, t);
}
function Ye(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && St(e, t);
}
function ke(e) {
  return ke = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ke(e);
}
function Pr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Pr = function() {
    return !!e;
  })();
}
function ae(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _o(e, t) {
  if (t && (k(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ae(e);
}
function Je(e) {
  var t = Pr();
  return function() {
    var n, o = ke(e);
    if (t) {
      var r = ke(this).constructor;
      n = Reflect.construct(o, arguments, r);
    } else n = o.apply(this, arguments);
    return _o(this, n);
  };
}
var wo = /* @__PURE__ */ function(e) {
  Ye(n, e);
  var t = Je(n);
  function n() {
    return de(this, n), t.apply(this, arguments);
  }
  return me(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(P.Component);
function To(e) {
  var t = P.useReducer(function(a) {
    return a + 1;
  }, 0), n = N(t, 2), o = n[1], r = P.useRef(e), i = ve(function() {
    return r.current;
  }), s = ve(function(a) {
    r.current = typeof a == "function" ? a(r.current) : a, o();
  });
  return [i, s];
}
var ee = "none", Oe = "appear", Re = "enter", Le = "leave", rr = "none", K = "prepare", le = "start", ue = "active", Rt = "end", Mr = "prepared";
function nr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Po(e, t) {
  var n = {
    animationend: nr("Animation", "AnimationEnd"),
    transitionend: nr("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Mo = Po(Ne(), typeof window < "u" ? window : {}), Or = {};
if (Ne()) {
  var Oo = document.createElement("div");
  Or = Oo.style;
}
var Ae = {};
function Rr(e) {
  if (Ae[e])
    return Ae[e];
  var t = Mo[e];
  if (t)
    for (var n = Object.keys(t), o = n.length, r = 0; r < o; r += 1) {
      var i = n[r];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Or)
        return Ae[e] = t[i], Ae[e];
    }
  return "";
}
var Lr = Rr("animationend"), Ar = Rr("transitionend"), Ir = !!(Lr && Ar), or = Lr || "animationend", ir = Ar || "transitionend";
function sr(e, t) {
  if (!e) return null;
  if (k(e) === "object") {
    var n = t.replace(/-\w/g, function(o) {
      return o[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Ro = function(e) {
  var t = te();
  function n(r) {
    r && (r.removeEventListener(ir, e), r.removeEventListener(or, e));
  }
  function o(r) {
    t.current && t.current !== r && n(t.current), r && r !== t.current && (r.addEventListener(ir, e), r.addEventListener(or, e), t.current = r);
  }
  return P.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [o, n];
};
var $r = Ne() ? Yr : ge, jr = function(t) {
  return +setTimeout(t, 16);
}, zr = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (jr = function(t) {
  return window.requestAnimationFrame(t);
}, zr = function(t) {
  return window.cancelAnimationFrame(t);
});
var ar = 0, Lt = /* @__PURE__ */ new Map();
function Dr(e) {
  Lt.delete(e);
}
var xt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ar += 1;
  var o = ar;
  function r(i) {
    if (i === 0)
      Dr(o), t();
    else {
      var s = jr(function() {
        r(i - 1);
      });
      Lt.set(o, s);
    }
  }
  return r(n), o;
};
xt.cancel = function(e) {
  var t = Lt.get(e);
  return Dr(e), zr(t);
};
const Lo = function() {
  var e = P.useRef(null);
  function t() {
    xt.cancel(e.current);
  }
  function n(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = xt(function() {
      r <= 1 ? o({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : n(o, r - 1);
    });
    e.current = i;
  }
  return P.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var Ao = [K, le, ue, Rt], Io = [K, Mr], kr = !1, $o = !0;
function Fr(e) {
  return e === ue || e === Rt;
}
const jo = function(e, t, n) {
  var o = ye(rr), r = N(o, 2), i = r[0], s = r[1], a = Lo(), c = N(a, 2), l = c[0], f = c[1];
  function u() {
    s(K, !0);
  }
  var d = t ? Io : Ao;
  return $r(function() {
    if (i !== rr && i !== Rt) {
      var h = d.indexOf(i), v = d[h + 1], g = n(i);
      g === kr ? s(v, !0) : v && l(function(m) {
        function y() {
          m.isCanceled() || s(v, !0);
        }
        g === !0 ? y() : Promise.resolve(g).then(y);
      });
    }
  }, [e, i]), P.useEffect(function() {
    return function() {
      f();
    };
  }, []), [u, i];
};
function zo(e, t, n, o) {
  var r = o.motionEnter, i = r === void 0 ? !0 : r, s = o.motionAppear, a = s === void 0 ? !0 : s, c = o.motionLeave, l = c === void 0 ? !0 : c, f = o.motionDeadline, u = o.motionLeaveImmediately, d = o.onAppearPrepare, h = o.onEnterPrepare, v = o.onLeavePrepare, g = o.onAppearStart, m = o.onEnterStart, y = o.onLeaveStart, S = o.onAppearActive, _ = o.onEnterActive, b = o.onLeaveActive, E = o.onAppearEnd, p = o.onEnterEnd, T = o.onLeaveEnd, w = o.onVisibleChanged, O = ye(), L = N(O, 2), A = L[0], I = L[1], $ = To(ee), j = N($, 2), z = j[0], V = j[1], re = ye(null), Z = N(re, 2), Se = Z[0], xe = Z[1], B = z(), ne = te(!1), he = te(null);
  function G() {
    return n();
  }
  var oe = te(!1);
  function Ce() {
    V(ee), xe(null, !0);
  }
  var Y = ve(function(H) {
    var F = z();
    if (F !== ee) {
      var q = G();
      if (!(H && !H.deadline && H.target !== q)) {
        var Pe = oe.current, Me;
        F === Oe && Pe ? Me = E == null ? void 0 : E(q, H) : F === Re && Pe ? Me = p == null ? void 0 : p(q, H) : F === Le && Pe && (Me = T == null ? void 0 : T(q, H)), Pe && Me !== !1 && Ce();
      }
    }
  }), Ze = Ro(Y), Ee = N(Ze, 1), _e = Ee[0], we = function(F) {
    switch (F) {
      case Oe:
        return R(R(R({}, K, d), le, g), ue, S);
      case Re:
        return R(R(R({}, K, h), le, m), ue, _);
      case Le:
        return R(R(R({}, K, v), le, y), ue, b);
      default:
        return {};
    }
  }, ie = P.useMemo(function() {
    return we(B);
  }, [B]), Te = jo(B, !e, function(H) {
    if (H === K) {
      var F = ie[K];
      return F ? F(G()) : kr;
    }
    if (se in ie) {
      var q;
      xe(((q = ie[se]) === null || q === void 0 ? void 0 : q.call(ie, G(), null)) || null);
    }
    return se === ue && B !== ee && (_e(G()), f > 0 && (clearTimeout(he.current), he.current = setTimeout(function() {
      Y({
        deadline: !0
      });
    }, f))), se === Mr && Ce(), $o;
  }), It = N(Te, 2), Kr = It[0], se = It[1], qr = Fr(se);
  oe.current = qr;
  var $t = te(null);
  $r(function() {
    if (!(ne.current && $t.current === t)) {
      I(t);
      var H = ne.current;
      ne.current = !0;
      var F;
      !H && t && a && (F = Oe), H && t && i && (F = Re), (H && !t && l || !H && u && !t && l) && (F = Le);
      var q = we(F);
      F && (e || q[K]) ? (V(F), Kr()) : V(ee), $t.current = t;
    }
  }, [t]), ge(function() {
    // Cancel appear
    (B === Oe && !a || // Cancel enter
    B === Re && !i || // Cancel leave
    B === Le && !l) && V(ee);
  }, [a, i, l]), ge(function() {
    return function() {
      ne.current = !1, clearTimeout(he.current);
    };
  }, []);
  var et = P.useRef(!1);
  ge(function() {
    A && (et.current = !0), A !== void 0 && B === ee && ((et.current || A) && (w == null || w(A)), et.current = !0);
  }, [A, B]);
  var tt = Se;
  return ie[K] && se === le && (tt = C({
    transition: "none"
  }, tt)), [B, se, tt, A ?? t];
}
function Do(e) {
  var t = e;
  k(e) === "object" && (t = e.transitionSupport);
  function n(r, i) {
    return !!(r.motionName && t && i !== !1);
  }
  var o = /* @__PURE__ */ P.forwardRef(function(r, i) {
    var s = r.visible, a = s === void 0 ? !0 : s, c = r.removeOnLeave, l = c === void 0 ? !0 : c, f = r.forceRender, u = r.children, d = r.motionName, h = r.leavedClassName, v = r.eventProps, g = P.useContext(Eo), m = g.motion, y = n(r, m), S = te(), _ = te();
    function b() {
      try {
        return S.current instanceof HTMLElement ? S.current : xo(_.current);
      } catch {
        return null;
      }
    }
    var E = zo(y, a, b, r), p = N(E, 4), T = p[0], w = p[1], O = p[2], L = p[3], A = P.useRef(L);
    L && (A.current = !0);
    var I = P.useCallback(function(Z) {
      S.current = Z, go(i, Z);
    }, [i]), $, j = C(C({}, v), {}, {
      visible: a
    });
    if (!u)
      $ = null;
    else if (T === ee)
      L ? $ = u(C({}, j), I) : !l && A.current && h ? $ = u(C(C({}, j), {}, {
        className: h
      }), I) : f || !l && !h ? $ = u(C(C({}, j), {}, {
        style: {
          display: "none"
        }
      }), I) : $ = null;
    else {
      var z;
      w === K ? z = "prepare" : Fr(w) ? z = "active" : w === le && (z = "start");
      var V = sr(d, "".concat(T, "-").concat(z));
      $ = u(C(C({}, j), {}, {
        className: U(sr(d, T), R(R({}, V, V && z), d, typeof d == "string")),
        style: O
      }), I);
    }
    if (/* @__PURE__ */ P.isValidElement($) && vo($)) {
      var re = yo($);
      re || ($ = /* @__PURE__ */ P.cloneElement($, {
        ref: I
      }));
    }
    return /* @__PURE__ */ P.createElement(wo, {
      ref: _
    }, $);
  });
  return o.displayName = "CSSMotion", o;
}
const Nr = Do(Ir);
var Ct = "add", Et = "keep", _t = "remove", at = "removed";
function ko(e) {
  var t;
  return e && k(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, C(C({}, t), {}, {
    key: String(t.key)
  });
}
function wt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(ko);
}
function Fo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], o = 0, r = t.length, i = wt(e), s = wt(t);
  i.forEach(function(l) {
    for (var f = !1, u = o; u < r; u += 1) {
      var d = s[u];
      if (d.key === l.key) {
        o < u && (n = n.concat(s.slice(o, u).map(function(h) {
          return C(C({}, h), {}, {
            status: Ct
          });
        })), o = u), n.push(C(C({}, d), {}, {
          status: Et
        })), o += 1, f = !0;
        break;
      }
    }
    f || n.push(C(C({}, l), {}, {
      status: _t
    }));
  }), o < r && (n = n.concat(s.slice(o).map(function(l) {
    return C(C({}, l), {}, {
      status: Ct
    });
  })));
  var a = {};
  n.forEach(function(l) {
    var f = l.key;
    a[f] = (a[f] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(l) {
    return a[l] > 1;
  });
  return c.forEach(function(l) {
    n = n.filter(function(f) {
      var u = f.key, d = f.status;
      return u !== l || d !== _t;
    }), n.forEach(function(f) {
      f.key === l && (f.status = Et);
    });
  }), n;
}
var No = ["component", "children", "onVisibleChanged", "onAllRemoved"], Ho = ["status"], Vo = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Bo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nr, n = /* @__PURE__ */ function(o) {
    Ye(i, o);
    var r = Je(i);
    function i() {
      var s;
      de(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = r.call.apply(r, [this].concat(c)), R(ae(s), "state", {
        keyEntities: []
      }), R(ae(s), "removeKey", function(f) {
        s.setState(function(u) {
          var d = u.keyEntities.map(function(h) {
            return h.key !== f ? h : C(C({}, h), {}, {
              status: at
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var u = s.state.keyEntities, d = u.filter(function(h) {
            var v = h.status;
            return v !== at;
          }).length;
          d === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return me(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, f = l.component, u = l.children, d = l.onVisibleChanged;
        l.onAllRemoved;
        var h = er(l, No), v = f || P.Fragment, g = {};
        return Vo.forEach(function(m) {
          g[m] = h[m], delete h[m];
        }), delete h.keys, /* @__PURE__ */ P.createElement(v, h, c.map(function(m, y) {
          var S = m.status, _ = er(m, Ho), b = S === Ct || S === Et;
          return /* @__PURE__ */ P.createElement(t, fe({}, g, {
            key: _.key,
            visible: b,
            eventProps: _,
            onVisibleChanged: function(p) {
              d == null || d(p, {
                key: _.key
              }), p || a.removeKey(_.key);
            }
          }), function(E, p) {
            return u(C(C({}, E), {}, {
              index: y
            }), p);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, f = c.keyEntities, u = wt(l), d = Fo(f, u);
        return {
          keyEntities: d.filter(function(h) {
            var v = f.find(function(g) {
              var m = g.key;
              return h.key === m;
            });
            return !(v && v.status === at && h.status === _t);
          })
        };
      }
    }]), i;
  }(P.Component);
  return R(n, "defaultProps", {
    component: "div"
  }), n;
}
Bo(Ir);
var Hr = /* @__PURE__ */ me(function e() {
  de(this, e);
}), Vr = "CALC_UNIT", Go = new RegExp(Vr, "g");
function ct(e) {
  return typeof e == "number" ? "".concat(e).concat(Vr) : e;
}
var Xo = /* @__PURE__ */ function(e) {
  Ye(n, e);
  var t = Je(n);
  function n(o, r) {
    var i;
    de(this, n), i = t.call(this), R(ae(i), "result", ""), R(ae(i), "unitlessCssVar", void 0), R(ae(i), "lowPriority", void 0);
    var s = k(o);
    return i.unitlessCssVar = r, o instanceof n ? i.result = "(".concat(o.result, ")") : s === "number" ? i.result = ct(o) : s === "string" && (i.result = o), i;
  }
  return me(n, [{
    key: "add",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " + ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " + ").concat(ct(r))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " - ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " - ").concat(ct(r))), this.lowPriority = !0, this;
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
      var i = this, s = r || {}, a = s.unit, c = !0;
      return typeof a == "boolean" ? c = a : Array.from(this.unitlessCssVar).some(function(l) {
        return i.result.includes(l);
      }) && (c = !1), this.result = this.result.replace(Go, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Hr), Uo = /* @__PURE__ */ function(e) {
  Ye(n, e);
  var t = Je(n);
  function n(o) {
    var r;
    return de(this, n), r = t.call(this), R(ae(r), "result", 0), o instanceof n ? r.result = o.result : typeof o == "number" && (r.result = o), r;
  }
  return me(n, [{
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
}(Hr), Wo = function(t, n) {
  var o = t === "css" ? Xo : Uo;
  return function(r) {
    return new o(r, n);
  };
}, cr = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function lr(e, t, n, o) {
  var r = C({}, t[e]);
  if (o != null && o.deprecatedTokens) {
    var i = o.deprecatedTokens;
    i.forEach(function(a) {
      var c = N(a, 2), l = c[0], f = c[1];
      if (r != null && r[l] || r != null && r[f]) {
        var u;
        (u = r[f]) !== null && u !== void 0 || (r[f] = r == null ? void 0 : r[l]);
      }
    });
  }
  var s = C(C({}, n), r);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var Br = typeof CSSINJS_STATISTIC < "u", Tt = !0;
function At() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Br)
    return Object.assign.apply(Object, [{}].concat(t));
  Tt = !1;
  var o = {};
  return t.forEach(function(r) {
    if (k(r) === "object") {
      var i = Object.keys(r);
      i.forEach(function(s) {
        Object.defineProperty(o, s, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return r[s];
          }
        });
      });
    }
  }), Tt = !0, o;
}
var ur = {};
function Ko() {
}
var qo = function(t) {
  var n, o = t, r = Ko;
  return Br && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), o = new Proxy(t, {
    get: function(s, a) {
      if (Tt) {
        var c;
        (c = n) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), r = function(s, a) {
    var c;
    ur[s] = {
      global: Array.from(n),
      component: C(C({}, (c = ur[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: o,
    keys: n,
    flush: r
  };
};
function fr(e, t, n) {
  if (typeof n == "function") {
    var o;
    return n(At(t, (o = t[e]) !== null && o !== void 0 ? o : {}));
  }
  return n ?? {};
}
function Qo(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "max(".concat(o.map(function(i) {
        return De(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "min(".concat(o.map(function(i) {
        return De(i);
      }).join(","), ")");
    }
  };
}
var Yo = 1e3 * 60 * 10, Jo = /* @__PURE__ */ function() {
  function e() {
    de(this, e), R(this, "map", /* @__PURE__ */ new Map()), R(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), R(this, "nextID", 0), R(this, "lastAccessBeat", /* @__PURE__ */ new Map()), R(this, "accessBeat", 0);
  }
  return me(e, [{
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
      var o = this, r = n.map(function(i) {
        return i && k(i) === "object" ? "obj_".concat(o.getObjectID(i)) : "".concat(k(i), "_").concat(i);
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
        this.lastAccessBeat.forEach(function(r, i) {
          o - r > Yo && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), dr = new Jo();
function Zo(e, t) {
  return x.useMemo(function() {
    var n = dr.get(t);
    if (n)
      return n;
    var o = e();
    return dr.set(t, o), o;
  }, t);
}
var ei = function() {
  return {};
};
function ti(e) {
  var t = e.useCSP, n = t === void 0 ? ei : t, o = e.useToken, r = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(d, h, v, g) {
    var m = Array.isArray(d) ? d[0] : d;
    function y(w) {
      return "".concat(String(m)).concat(w.slice(0, 1).toUpperCase()).concat(w.slice(1));
    }
    var S = (g == null ? void 0 : g.unitless) || {}, _ = typeof a == "function" ? a(d) : {}, b = C(C({}, _), {}, R({}, y("zIndexPopup"), !0));
    Object.keys(S).forEach(function(w) {
      b[y(w)] = S[w];
    });
    var E = C(C({}, g), {}, {
      unitless: b,
      prefixToken: y
    }), p = f(d, h, v, E), T = l(m, v, E);
    return function(w) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w, L = p(w, O), A = N(L, 2), I = A[1], $ = T(O), j = N($, 2), z = j[0], V = j[1];
      return [z, I, V];
    };
  }
  function l(d, h, v) {
    var g = v.unitless, m = v.injectStyle, y = m === void 0 ? !0 : m, S = v.prefixToken, _ = v.ignore, b = function(T) {
      var w = T.rootCls, O = T.cssVar, L = O === void 0 ? {} : O, A = o(), I = A.realToken;
      return ln({
        path: [d],
        prefix: L.prefix,
        key: L.key,
        unitless: g,
        ignore: _,
        token: I,
        scope: w
      }, function() {
        var $ = fr(d, I, h), j = lr(d, I, $, {
          deprecatedTokens: v == null ? void 0 : v.deprecatedTokens
        });
        return Object.keys($).forEach(function(z) {
          j[S(z)] = j[z], delete j[z];
        }), j;
      }), null;
    }, E = function(T) {
      var w = o(), O = w.cssVar;
      return [function(L) {
        return y && O ? /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(b, {
          rootCls: T,
          cssVar: O,
          component: d
        }), L) : L;
      }, O == null ? void 0 : O.key];
    };
    return E;
  }
  function f(d, h, v) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = Array.isArray(d) ? d : [d, d], y = N(m, 1), S = y[0], _ = m.join("-"), b = e.layer || {
      name: "antd"
    };
    return function(E) {
      var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E, T = o(), w = T.theme, O = T.realToken, L = T.hashId, A = T.token, I = T.cssVar, $ = r(), j = $.rootPrefixCls, z = $.iconPrefixCls, V = n(), re = I ? "css" : "js", Z = Zo(function() {
        var G = /* @__PURE__ */ new Set();
        return I && Object.keys(g.unitless || {}).forEach(function(oe) {
          G.add(rt(oe, I.prefix)), G.add(rt(oe, cr(S, I.prefix)));
        }), Wo(re, G);
      }, [re, S, I == null ? void 0 : I.prefix]), Se = Qo(re), xe = Se.max, B = Se.min, ne = {
        theme: w,
        token: A,
        hashId: L,
        nonce: function() {
          return V.nonce;
        },
        clientOnly: g.clientOnly,
        layer: b,
        // antd is always at top of styles
        order: g.order || -999
      };
      typeof i == "function" && kt(C(C({}, ne), {}, {
        clientOnly: !1,
        path: ["Shared", j]
      }), function() {
        return i(A, {
          prefix: {
            rootPrefixCls: j,
            iconPrefixCls: z
          },
          csp: V
        });
      });
      var he = kt(C(C({}, ne), {}, {
        path: [_, E, z]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var G = qo(A), oe = G.token, Ce = G.flush, Y = fr(S, O, v), Ze = ".".concat(E), Ee = lr(S, O, Y, {
          deprecatedTokens: g.deprecatedTokens
        });
        I && Y && k(Y) === "object" && Object.keys(Y).forEach(function(Te) {
          Y[Te] = "var(".concat(rt(Te, cr(S, I.prefix)), ")");
        });
        var _e = At(oe, {
          componentCls: Ze,
          prefixCls: E,
          iconCls: ".".concat(z),
          antCls: ".".concat(j),
          calc: Z,
          // @ts-ignore
          max: xe,
          // @ts-ignore
          min: B
        }, I ? Y : Ee), we = h(_e, {
          hashId: L,
          prefixCls: E,
          rootPrefixCls: j,
          iconPrefixCls: z
        });
        Ce(S, Ee);
        var ie = typeof s == "function" ? s(_e, E, p, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : ie, we];
      });
      return [he, L];
    };
  }
  function u(d, h, v) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = f(d, h, v, C({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), y = function(_) {
      var b = _.prefixCls, E = _.rootCls, p = E === void 0 ? b : E;
      return m(b, p), null;
    };
    return y;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: u,
    genComponentStyleHook: f
  };
}
function be(e) {
  "@babel/helpers - typeof";
  return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, be(e);
}
function ri(e, t) {
  if (be(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (be(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ni(e) {
  var t = ri(e, "string");
  return be(t) == "symbol" ? t : t + "";
}
function X(e, t, n) {
  return (t = ni(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
const D = Math.round;
function lt(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], o = n.map((r) => parseFloat(r));
  for (let r = 0; r < 3; r += 1)
    o[r] = t(o[r] || 0, n[r] || "", r);
  return n[3] ? o[3] = n[3].includes("%") ? o[3] / 100 : o[3] : o[3] = 1, o;
}
const mr = (e, t, n) => n === 0 ? e : e / 100;
function pe(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class J {
  constructor(t) {
    X(this, "isValid", !0), X(this, "r", 0), X(this, "g", 0), X(this, "b", 0), X(this, "a", 1), X(this, "_h", void 0), X(this, "_s", void 0), X(this, "_l", void 0), X(this, "_v", void 0), X(this, "_max", void 0), X(this, "_min", void 0), X(this, "_brightness", void 0);
    function n(o) {
      return o[0] in t && o[1] in t && o[2] in t;
    }
    if (t) if (typeof t == "string") {
      let r = function(i) {
        return o.startsWith(i);
      };
      const o = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(o) ? this.fromHexString(o) : r("rgb") ? this.fromRgbString(o) : r("hsl") ? this.fromHslString(o) : (r("hsv") || r("hsb")) && this.fromHsvString(o);
    } else if (t instanceof J)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = pe(t.r), this.g = pe(t.g), this.b = pe(t.b), this.a = typeof t.a == "number" ? pe(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(i) {
      const s = i / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), o = t(this.g), r = t(this.b);
    return 0.2126 * n + 0.7152 * o + 0.0722 * r;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = D(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
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
  darken(t = 10) {
    const n = this.getHue(), o = this.getSaturation();
    let r = this.getLightness() - t / 100;
    return r < 0 && (r = 0), this._c({
      h: n,
      s: o,
      l: r,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), o = this.getSaturation();
    let r = this.getLightness() + t / 100;
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
  mix(t, n = 50) {
    const o = this._c(t), r = n / 100, i = (a) => (o[a] - this[a]) * r + this[a], s = {
      r: D(i("r")),
      g: D(i("g")),
      b: D(i("b")),
      a: D(i("a") * 100) / 100
    };
    return this._c(s);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), o = this.a + n.a * (1 - this.a), r = (i) => D((this[i] * this.a + n[i] * n.a * (1 - this.a)) / o);
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
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const o = (this.g || 0).toString(16);
    t += o.length === 2 ? o : "0" + o;
    const r = (this.b || 0).toString(16);
    if (t += r.length === 2 ? r : "0" + r, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = D(this.a * 255).toString(16);
      t += i.length === 2 ? i : "0" + i;
    }
    return t;
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
    const t = this.getHue(), n = D(this.getSaturation() * 100), o = D(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${o}%,${this.a})` : `hsl(${t},${n}%,${o}%)`;
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
  _sc(t, n, o) {
    const r = this.clone();
    return r[t] = pe(n, o), r;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function o(r, i) {
      return parseInt(n[r] + n[i || r], 16);
    }
    n.length < 6 ? (this.r = o(0), this.g = o(1), this.b = o(2), this.a = n[3] ? o(3) / 255 : 1) : (this.r = o(0, 1), this.g = o(2, 3), this.b = o(4, 5), this.a = n[6] ? o(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: o,
    a: r
  }) {
    if (this._h = t % 360, this._s = n, this._l = o, this.a = typeof r == "number" ? r : 1, n <= 0) {
      const d = D(o * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * o - 1)) * n, f = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = f) : c >= 1 && c < 2 ? (i = f, s = l) : c >= 2 && c < 3 ? (s = l, a = f) : c >= 3 && c < 4 ? (s = f, a = l) : c >= 4 && c < 5 ? (i = f, a = l) : c >= 5 && c < 6 && (i = l, a = f);
    const u = o - l / 2;
    this.r = D((i + u) * 255), this.g = D((s + u) * 255), this.b = D((a + u) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: o,
    a: r
  }) {
    this._h = t % 360, this._s = n, this._v = o, this.a = typeof r == "number" ? r : 1;
    const i = D(o * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = D(o * (1 - n) * 255), f = D(o * (1 - n * c) * 255), u = D(o * (1 - n * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = u, this.b = l;
        break;
      case 1:
        this.r = f, this.b = l;
        break;
      case 2:
        this.r = l, this.b = u;
        break;
      case 3:
        this.r = l, this.g = f;
        break;
      case 4:
        this.r = u, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = f;
        break;
    }
  }
  fromHsvString(t) {
    const n = lt(t, mr);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = lt(t, mr);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = lt(t, (o, r) => (
      // Convert percentage to number. e.g. 50% -> 128
      r.includes("%") ? D(o / 100 * 255) : o
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
const oi = {
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
}, ii = Object.assign(Object.assign({}, oi), {
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
function ut(e) {
  return e >= 0 && e <= 255;
}
function Ie(e, t) {
  const {
    r: n,
    g: o,
    b: r,
    a: i
  } = new J(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new J(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const f = Math.round((n - s * (1 - l)) / l), u = Math.round((o - a * (1 - l)) / l), d = Math.round((r - c * (1 - l)) / l);
    if (ut(f) && ut(u) && ut(d))
      return new J({
        r: f,
        g: u,
        b: d,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new J({
    r: n,
    g: o,
    b: r,
    a: 1
  }).toRgbString();
}
var si = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function ai(e) {
  const {
    override: t
  } = e, n = si(e, ["override"]), o = Object.assign({}, t);
  Object.keys(ii).forEach((d) => {
    delete o[d];
  });
  const r = Object.assign(Object.assign({}, n), o), i = 480, s = 576, a = 768, c = 992, l = 1200, f = 1600;
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
    colorSplit: Ie(r.colorBorderSecondary, r.colorBgContainer),
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
    colorErrorOutline: Ie(r.colorErrorBg, r.colorBgContainer),
    colorWarningOutline: Ie(r.colorWarningBg, r.colorBgContainer),
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
    controlOutline: Ie(r.colorPrimaryBg, r.colorBgContainer),
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
    screenXS: i,
    screenXSMin: i,
    screenXSMax: s - 1,
    screenSM: s,
    screenSMMin: s,
    screenSMMax: a - 1,
    screenMD: a,
    screenMDMin: a,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new J("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new J("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new J("rgba(0, 0, 0, 0.09)").toRgbString()}
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
const ci = {
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
}, li = {
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
}, ui = un(vt.defaultAlgorithm), fi = {
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
}, Gr = (e, t, n) => {
  const o = n.getDerivativeToken(e), {
    override: r,
    ...i
  } = t;
  let s = {
    ...o,
    override: r
  };
  return s = ai(s), i && Object.entries(i).forEach(([a, c]) => {
    const {
      theme: l,
      ...f
    } = c;
    let u = f;
    l && (u = Gr({
      ...s,
      ...f
    }, {
      override: f
    }, l)), s[a] = u;
  }), s;
};
function di() {
  const {
    token: e,
    hashed: t,
    theme: n = ui,
    override: o,
    cssVar: r
  } = x.useContext(vt._internalContext), [i, s, a] = fn(n, [vt.defaultSeed, e], {
    salt: `${Jn}-${t || ""}`,
    override: o,
    getComputedToken: Gr,
    cssVar: r && {
      prefix: r.prefix,
      key: r.key,
      unitless: ci,
      ignore: li,
      preserve: fi
    }
  });
  return [n, a, t ? s : "", i, r];
}
const {
  genStyleHooks: mi
} = ti({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = bt();
    return {
      iconPrefixCls: t,
      rootPrefixCls: e()
    };
  },
  useToken: () => {
    const [e, t, n, o, r] = di();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: o,
      cssVar: r
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = bt();
    return e ?? {};
  },
  layer: {
    name: "antdx",
    dependencies: ["antd"]
  }
});
var hi = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, pi = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, gi = "".concat(hi, " ").concat(pi).split(/[\s\n]+/), vi = "aria-", yi = "data-";
function hr(e, t) {
  return e.indexOf(t) === 0;
}
function Xr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = C({}, t);
  var o = {};
  return Object.keys(e).forEach(function(r) {
    // Aria
    (n.aria && (r === "role" || hr(r, vi)) || // Data
    n.data && hr(r, yi) || // Attr
    n.attr && gi.includes(r)) && (o[r] = e[r]);
  }), o;
}
const ft = () => ({
  height: 0,
  opacity: 0
}), pr = (e) => {
  const {
    scrollHeight: t
  } = e;
  return {
    height: t,
    opacity: 1
  };
}, bi = (e) => ({
  height: e ? e.offsetHeight : 0
}), dt = (e, t) => (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height", Si = (e = ro) => ({
  motionName: `${e}-motion-collapse`,
  onAppearStart: ft,
  onEnterStart: ft,
  onAppearActive: pr,
  onEnterActive: pr,
  onLeaveStart: bi,
  onLeaveActive: ft,
  onAppearEnd: dt,
  onEnterEnd: dt,
  onLeaveEnd: dt,
  motionDeadline: 500
}), xi = (e, t, n) => {
  const [o, r, i] = x.useMemo(() => {
    let f = {
      expandedKeys: [],
      onExpand: () => {
      }
    };
    return e ? (typeof e == "object" && (f = {
      ...f,
      ...e
    }), [!0, f.expandedKeys, f.onExpand]) : [!1, f.expandedKeys, f.onExpand];
  }, [e]), [s, a] = co(r), c = (f) => {
    a((u) => {
      const d = u.includes(f) ? u.filter((h) => h !== f) : [...u, f];
      return i == null || i(d), d;
    });
  }, l = x.useMemo(() => o ? {
    ...Si(n),
    motionAppear: !1,
    leavedClassName: `${t}-content-hidden`
  } : {}, [n, t, o]);
  return [o, s, o ? c : void 0, l];
}, Ci = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
});
let mt = /* @__PURE__ */ function(e) {
  return e.PENDING = "pending", e.SUCCESS = "success", e.ERROR = "error", e;
}({});
const Ur = /* @__PURE__ */ x.createContext(null), Ei = (e) => {
  const {
    info: t = {},
    nextStatus: n,
    onClick: o,
    ...r
  } = e, i = Xr(r, {
    attr: !0,
    aria: !0,
    data: !0
  }), {
    prefixCls: s,
    collapseMotion: a,
    enableCollapse: c,
    expandedKeys: l,
    direction: f,
    classNames: u = {},
    styles: d = {}
  } = x.useContext(Ur), h = x.useId(), {
    key: v = h,
    icon: g,
    title: m,
    extra: y,
    content: S,
    footer: _,
    status: b,
    description: E
  } = t, p = `${s}-item`, T = () => o == null ? void 0 : o(v), w = l == null ? void 0 : l.includes(v);
  return /* @__PURE__ */ x.createElement("div", fe({}, i, {
    className: U(p, {
      [`${p}-${b}${n ? `-${n}` : ""}`]: b
    }, e.className),
    style: e.style
  }), /* @__PURE__ */ x.createElement("div", {
    className: U(`${p}-header`, u.itemHeader),
    style: d.itemHeader,
    onClick: T
  }, /* @__PURE__ */ x.createElement(cn, {
    icon: g,
    className: `${p}-icon`
  }), /* @__PURE__ */ x.createElement("div", {
    className: U(`${p}-header-box`, {
      [`${p}-collapsible`]: c && S
    })
  }, /* @__PURE__ */ x.createElement(Dt.Text, {
    strong: !0,
    ellipsis: {
      tooltip: {
        placement: f === "rtl" ? "topRight" : "topLeft",
        title: m
      }
    },
    className: `${p}-title`
  }, c && S && (f === "rtl" ? /* @__PURE__ */ x.createElement(dn, {
    className: `${p}-collapse-icon`,
    rotate: w ? -90 : 0
  }) : /* @__PURE__ */ x.createElement(mn, {
    className: `${p}-collapse-icon`,
    rotate: w ? 90 : 0
  })), m), E && /* @__PURE__ */ x.createElement(Dt.Text, {
    className: `${p}-desc`,
    ellipsis: {
      tooltip: {
        placement: f === "rtl" ? "topRight" : "topLeft",
        title: E
      }
    },
    type: "secondary"
  }, E)), y && /* @__PURE__ */ x.createElement("div", {
    className: `${p}-extra`
  }, y)), S && /* @__PURE__ */ x.createElement(Nr, fe({}, a, {
    visible: c ? w : !0
  }), ({
    className: O,
    style: L
  }, A) => /* @__PURE__ */ x.createElement("div", {
    className: U(`${p}-content`, O),
    ref: A,
    style: L
  }, /* @__PURE__ */ x.createElement("div", {
    className: U(`${p}-content-box`, u.itemContent),
    style: d.itemContent
  }, S))), _ && /* @__PURE__ */ x.createElement("div", {
    className: U(`${p}-footer`, u.itemFooter),
    style: d.itemFooter
  }, _));
}, _i = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-item`, o = {
    [mt.PENDING]: e.colorPrimaryText,
    [mt.SUCCESS]: e.colorSuccessText,
    [mt.ERROR]: e.colorErrorText
  }, r = Object.keys(o);
  return r.reduce((i, s) => {
    const a = o[s];
    return r.forEach((c) => {
      const l = `& ${n}-${s}-${c}`, f = s === c ? {} : {
        backgroundColor: "none !important",
        backgroundImage: `linear-gradient(${a}, ${o[c]})`
      };
      i[l] = {
        [`& ${n}-icon, & > *::before`]: {
          backgroundColor: `${a} !important`
        },
        "& > :last-child::before": f
      };
    }), i;
  }, {});
}, wi = (e) => {
  const {
    calc: t,
    componentCls: n
  } = e, o = `${n}-item`, r = {
    content: '""',
    width: t(e.lineWidth).mul(2).equal(),
    display: "block",
    position: "absolute",
    insetInlineEnd: "none",
    backgroundColor: e.colorTextPlaceholder
  };
  return {
    "& > :last-child > :last-child": {
      "&::before": {
        display: "none !important"
      },
      [`&${o}-footer`]: {
        "&::before": {
          display: "block !important",
          bottom: 0
        }
      }
    },
    [`& > ${o}`]: {
      [`& ${o}-header, & ${o}-content, & ${o}-footer`]: {
        position: "relative",
        "&::before": {
          bottom: t(e.itemGap).mul(-1).equal()
        }
      },
      [`& ${o}-header, & ${o}-content`]: {
        marginInlineStart: t(e.itemSize).mul(-1).equal(),
        "&::before": {
          ...r,
          insetInlineStart: t(e.itemSize).div(2).sub(e.lineWidth).equal()
        }
      },
      [`& ${o}-header::before`]: {
        top: e.itemSize,
        bottom: t(e.itemGap).mul(-2).equal()
      },
      [`& ${o}-content::before`]: {
        top: "100%"
      },
      [`& ${o}-footer::before`]: {
        ...r,
        top: 0,
        insetInlineStart: t(e.itemSize).div(-2).sub(e.lineWidth).equal()
      }
    }
  };
}, Ti = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-item`;
  return {
    [n]: {
      display: "flex",
      flexDirection: "column",
      [`& ${n}-collapsible`]: {
        cursor: "pointer"
      },
      [`& ${n}-header`]: {
        display: "flex",
        marginBottom: e.itemGap,
        gap: e.itemGap,
        alignItems: "flex-start",
        [`& ${n}-icon`]: {
          height: e.itemSize,
          width: e.itemSize,
          fontSize: e.itemFontSize
        },
        [`& ${n}-extra`]: {
          height: e.itemSize,
          maxHeight: e.itemSize
        },
        [`& ${n}-header-box`]: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          [`& ${n}-title`]: {
            height: e.itemSize,
            lineHeight: `${De(e.itemSize)}`,
            maxHeight: e.itemSize,
            fontSize: e.itemFontSize,
            [`& ${n}-collapse-icon`]: {
              marginInlineEnd: e.marginXS
            }
          },
          [`& ${n}-desc`]: {
            fontSize: e.itemFontSize
          }
        }
      },
      [`& ${n}-content`]: {
        [`& ${n}-content-hidden`]: {
          display: "none"
        },
        [`& ${n}-content-box`]: {
          padding: e.itemGap,
          display: "inline-block",
          maxWidth: `calc(100% - ${e.itemSize})`,
          borderRadius: e.borderRadiusLG,
          backgroundColor: e.colorBgContainer,
          border: `${De(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`
        }
      },
      [`& ${n}-footer`]: {
        marginTop: e.itemGap,
        display: "inline-flex"
      }
    }
  };
}, ht = (e, t = "middle") => {
  const {
    componentCls: n
  } = e, o = {
    large: {
      itemSize: e.itemSizeLG,
      itemGap: e.itemGapLG,
      itemFontSize: e.itemFontSizeLG
    },
    middle: {
      itemSize: e.itemSize,
      itemGap: e.itemGap,
      itemFontSize: e.itemFontSize
    },
    small: {
      itemSize: e.itemSizeSM,
      itemGap: e.itemGapSM,
      itemFontSize: e.itemFontSizeSM
    }
  }[t];
  return {
    [`&${n}-${t}`]: {
      paddingInlineStart: o.itemSize,
      gap: o.itemGap,
      ...Ti({
        ...e,
        ...o
      }),
      ...wi({
        ...e,
        ...o
      })
    }
  };
}, Pi = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "flex",
      flexDirection: "column",
      ..._i(e),
      ...ht(e),
      ...ht(e, "large"),
      ...ht(e, "small"),
      [`&${t}-rtl`]: {
        direction: "rtl"
      }
    }
  };
}, Mi = mi("ThoughtChain", (e) => {
  const t = At(e, {
    // small size tokens
    itemFontSizeSM: e.fontSizeSM,
    itemSizeSM: e.calc(e.controlHeightXS).add(e.controlHeightSM).div(2).equal(),
    itemGapSM: e.marginSM,
    // default size tokens
    itemFontSize: e.fontSize,
    itemSize: e.calc(e.controlHeightSM).add(e.controlHeight).div(2).equal(),
    itemGap: e.margin,
    // large size tokens
    itemFontSizeLG: e.fontSizeLG,
    itemSizeLG: e.calc(e.controlHeight).add(e.controlHeightLG).div(2).equal(),
    itemGapLG: e.marginLG
  });
  return [Pi(t), Ci(t)];
}), Oi = (e) => {
  const {
    prefixCls: t,
    rootClassName: n,
    className: o,
    items: r,
    collapsible: i,
    styles: s = {},
    style: a,
    classNames: c = {},
    size: l = "middle",
    ...f
  } = e, u = Xr(f, {
    attr: !0,
    aria: !0,
    data: !0
  }), {
    getPrefixCls: d,
    direction: h
  } = bt(), v = d(), g = d("thought-chain", t), m = to("thoughtChain"), [y, S, _, b] = xi(i, g, v), [E, p, T] = Mi(g), w = U(o, n, g, m.className, p, T, {
    [`${g}-rtl`]: h === "rtl"
  }, `${g}-${l}`);
  return E(/* @__PURE__ */ x.createElement("div", fe({}, u, {
    className: w,
    style: {
      ...m.style,
      ...a
    }
  }), /* @__PURE__ */ x.createElement(Ur.Provider, {
    value: {
      prefixCls: g,
      enableCollapse: y,
      collapseMotion: b,
      expandedKeys: S,
      direction: h,
      classNames: {
        itemHeader: U(m.classNames.itemHeader, c.itemHeader),
        itemContent: U(m.classNames.itemContent, c.itemContent),
        itemFooter: U(m.classNames.itemFooter, c.itemFooter)
      },
      styles: {
        itemHeader: {
          ...m.styles.itemHeader,
          ...s.itemHeader
        },
        itemContent: {
          ...m.styles.itemContent,
          ...s.itemContent
        },
        itemFooter: {
          ...m.styles.itemFooter,
          ...s.itemFooter
        }
      }
    }
  }, r == null ? void 0 : r.map((O, L) => {
    var A;
    return /* @__PURE__ */ x.createElement(Ei, {
      key: O.key || `key_${L}`,
      className: U(m.classNames.item, c.item),
      style: {
        ...m.styles.item,
        ...s.item
      },
      info: {
        ...O,
        icon: O.icon || L + 1
      },
      onClick: _,
      nextStatus: ((A = r[L + 1]) == null ? void 0 : A.status) || O.status
    });
  }))));
}, Ri = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Li(e) {
  return e ? Object.keys(e).reduce((t, n) => {
    const o = e[n];
    return t[n] = Ai(n, o), t;
  }, {}) : {};
}
function Ai(e, t) {
  return typeof t == "number" && !Ri.includes(e) ? t + "px" : t;
}
function Pt(e) {
  const t = [], n = e.cloneNode(!1);
  if (e._reactElement) {
    const r = x.Children.toArray(e._reactElement.props.children).map((i) => {
      if (x.isValidElement(i) && i.props.__slot__) {
        const {
          portals: s,
          clonedElement: a
        } = Pt(i.props.el);
        return x.cloneElement(i, {
          ...i.props,
          el: a,
          children: [...x.Children.toArray(i.props.children), ...s]
        });
      }
      return null;
    });
    return r.originalChildren = e._reactElement.props.children, t.push(pt(x.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: r
    }), n)), {
      clonedElement: n,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((r) => {
    e.getEventListeners(r).forEach(({
      listener: s,
      type: a,
      useCapture: c
    }) => {
      n.addEventListener(a, s, c);
    });
  });
  const o = Array.from(e.childNodes);
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (i.nodeType === 1) {
      const {
        clonedElement: s,
        portals: a
      } = Pt(i);
      t.push(...a), n.appendChild(s);
    } else i.nodeType === 3 && n.appendChild(i.cloneNode());
  }
  return {
    clonedElement: n,
    portals: t
  };
}
function Ii(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const gr = Jr(({
  slot: e,
  clone: t,
  className: n,
  style: o,
  observeAttributes: r
}, i) => {
  const s = te(), [a, c] = Zr([]), {
    forceClone: l
  } = on(), f = l ? !0 : t;
  return ge(() => {
    var g;
    if (!s.current || !e)
      return;
    let u = e;
    function d() {
      let m = u;
      if (u.tagName.toLowerCase() === "svelte-slot" && u.children.length === 1 && u.children[0] && (m = u.children[0], m.tagName.toLowerCase() === "react-portal-target" && m.children[0] && (m = m.children[0])), Ii(i, m), n && m.classList.add(...n.split(" ")), o) {
        const y = Li(o);
        Object.keys(y).forEach((S) => {
          m.style[S] = y[S];
        });
      }
    }
    let h = null, v = null;
    if (f && window.MutationObserver) {
      let m = function() {
        var b, E, p;
        (b = s.current) != null && b.contains(u) && ((E = s.current) == null || E.removeChild(u));
        const {
          portals: S,
          clonedElement: _
        } = Pt(e);
        u = _, c(S), u.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          d();
        }, 50), (p = s.current) == null || p.appendChild(u);
      };
      m();
      const y = wn(() => {
        m(), h == null || h.disconnect(), h == null || h.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      h = new window.MutationObserver(y), h.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      u.style.display = "contents", d(), (g = s.current) == null || g.appendChild(u);
    return () => {
      var m, y;
      u.style.display = "", (m = s.current) != null && m.contains(u) && ((y = s.current) == null || y.removeChild(u)), h == null || h.disconnect();
    };
  }, [e, f, n, o, i, r, l]), x.createElement("react-child", {
    ref: s,
    style: {
      display: "contents"
    }
  }, ...a);
}), $i = ({
  children: e,
  ...t
}) => /* @__PURE__ */ Q.jsx(Q.Fragment, {
  children: e(t)
});
function ji(e) {
  return x.createElement($i, {
    children: e
  });
}
function Wr(e, t, n) {
  const o = e.filter(Boolean);
  if (o.length !== 0)
    return o.map((r, i) => {
      var l;
      if (typeof r != "object")
        return t != null && t.fallback ? t.fallback(r) : r;
      const s = {
        ...r.props,
        key: ((l = r.props) == null ? void 0 : l.key) ?? (n ? `${n}-${i}` : `${i}`)
      };
      let a = s;
      Object.keys(r.slots).forEach((f) => {
        if (!r.slots[f] || !(r.slots[f] instanceof Element) && !r.slots[f].el)
          return;
        const u = f.split(".");
        u.forEach((y, S) => {
          a[y] || (a[y] = {}), S !== u.length - 1 && (a = s[y]);
        });
        const d = r.slots[f];
        let h, v, g = (t == null ? void 0 : t.clone) ?? !1, m = t == null ? void 0 : t.forceClone;
        d instanceof Element ? h = d : (h = d.el, v = d.callback, g = d.clone ?? g, m = d.forceClone ?? m), m = m ?? !!v, a[u[u.length - 1]] = h ? v ? (...y) => (v(u[u.length - 1], y), /* @__PURE__ */ Q.jsx(zt, {
          ...r.ctx,
          params: y,
          forceClone: m,
          children: /* @__PURE__ */ Q.jsx(gr, {
            slot: h,
            clone: g
          })
        })) : ji((y) => /* @__PURE__ */ Q.jsx(zt, {
          ...r.ctx,
          forceClone: m,
          children: /* @__PURE__ */ Q.jsx(gr, {
            ...y,
            slot: h,
            clone: g
          })
        })) : a[u[u.length - 1]], a = s;
      });
      const c = (t == null ? void 0 : t.children) || "children";
      return r[c] ? s[c] = Wr(r[c], t, `${i}`) : t != null && t.children && (s[c] = void 0, Reflect.deleteProperty(s, c)), s;
    });
}
const {
  useItems: zi,
  withItemsContextProvider: Di,
  ItemHandler: Ni
} = sn("antdx-thought-chain-items"), Hi = Yn(Di(["default", "items"], ({
  children: e,
  items: t,
  ...n
}) => {
  const {
    items: o
  } = zi(), r = o.items.length > 0 ? o.items : o.default;
  return /* @__PURE__ */ Q.jsxs(Q.Fragment, {
    children: [/* @__PURE__ */ Q.jsx("div", {
      style: {
        display: "none"
      },
      children: e
    }), /* @__PURE__ */ Q.jsx(Oi, {
      ...n,
      items: en(() => t || Wr(r, {
        clone: !0
      }), [t, r])
    })]
  });
}));
export {
  Hi as ThoughtChain,
  Hi as default
};
