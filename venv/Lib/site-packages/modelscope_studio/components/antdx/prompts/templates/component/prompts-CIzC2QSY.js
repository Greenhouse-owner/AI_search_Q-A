import { i as At, a as we, r as Bt, w as Z, g as Dt, c as W } from "./Index-Cb1Edaxz.js";
const _ = window.ms_globals.React, $t = window.ms_globals.React.forwardRef, Rt = window.ms_globals.React.useRef, Lt = window.ms_globals.React.useState, Ht = window.ms_globals.React.useEffect, zt = window.ms_globals.React.useMemo, Ce = window.ms_globals.ReactDOM.createPortal, Xt = window.ms_globals.internalContext.useContextPropsContext, Fe = window.ms_globals.internalContext.ContextPropsProvider, Ft = window.ms_globals.createItemsContext.createItemsContext, Nt = window.ms_globals.antd.ConfigProvider, Te = window.ms_globals.antd.theme, Vt = window.ms_globals.antd.Typography, Pe = window.ms_globals.antdCssinjs.unit, be = window.ms_globals.antdCssinjs.token2CSSVar, Ne = window.ms_globals.antdCssinjs.useStyleRegister, Wt = window.ms_globals.antdCssinjs.useCSSVarRegister, Gt = window.ms_globals.antdCssinjs.createTheme, Ut = window.ms_globals.antdCssinjs.useCacheToken;
var Kt = /\s/;
function qt(t) {
  for (var e = t.length; e-- && Kt.test(t.charAt(e)); )
    ;
  return e;
}
var Qt = /^\s+/;
function Jt(t) {
  return t && t.slice(0, qt(t) + 1).replace(Qt, "");
}
var Ve = NaN, Zt = /^[-+]0x[0-9a-f]+$/i, Yt = /^0b[01]+$/i, er = /^0o[0-7]+$/i, tr = parseInt;
function We(t) {
  if (typeof t == "number")
    return t;
  if (At(t))
    return Ve;
  if (we(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = we(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Jt(t);
  var n = Yt.test(t);
  return n || er.test(t) ? tr(t.slice(2), n ? 2 : 8) : Zt.test(t) ? Ve : +t;
}
var ye = function() {
  return Bt.Date.now();
}, rr = "Expected a function", nr = Math.max, or = Math.min;
function ir(t, e, n) {
  var o, r, i, s, a, l, c = 0, f = !1, u = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(rr);
  e = We(e) || 0, we(n) && (f = !!n.leading, u = "maxWait" in n, i = u ? nr(We(n.maxWait) || 0, e) : i, d = "trailing" in n ? !!n.trailing : d);
  function y(p) {
    var T = o, C = r;
    return o = r = void 0, c = p, s = t.apply(C, T), s;
  }
  function v(p) {
    return c = p, a = setTimeout(b, e), f ? y(p) : s;
  }
  function g(p) {
    var T = p - l, C = p - c, O = e - T;
    return u ? or(O, i - C) : O;
  }
  function h(p) {
    var T = p - l, C = p - c;
    return l === void 0 || T >= e || T < 0 || u && C >= i;
  }
  function b() {
    var p = ye();
    if (h(p))
      return S(p);
    a = setTimeout(b, g(p));
  }
  function S(p) {
    return a = void 0, d && o ? y(p) : (o = r = void 0, s);
  }
  function M() {
    a !== void 0 && clearTimeout(a), c = 0, o = l = r = a = void 0;
  }
  function m() {
    return a === void 0 ? s : S(ye());
  }
  function w() {
    var p = ye(), T = h(p);
    if (o = arguments, r = this, l = p, T) {
      if (a === void 0)
        return v(l);
      if (u)
        return clearTimeout(a), a = setTimeout(b, e), y(l);
    }
    return a === void 0 && (a = setTimeout(b, e)), s;
  }
  return w.cancel = M, w.flush = m, w;
}
var lt = {
  exports: {}
}, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr = _, ar = Symbol.for("react.element"), lr = Symbol.for("react.fragment"), cr = Object.prototype.hasOwnProperty, ur = sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, fr = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ct(t, e, n) {
  var o, r = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (o in e) cr.call(e, o) && !fr.hasOwnProperty(o) && (r[o] = e[o]);
  if (t && t.defaultProps) for (o in e = t.defaultProps, e) r[o] === void 0 && (r[o] = e[o]);
  return {
    $$typeof: ar,
    type: t,
    key: i,
    ref: s,
    props: r,
    _owner: ur.current
  };
}
ne.Fragment = lr;
ne.jsx = ct;
ne.jsxs = ct;
lt.exports = ne;
var L = lt.exports;
const {
  SvelteComponent: dr,
  assign: Ge,
  binding_callbacks: Ue,
  check_outros: hr,
  children: ut,
  claim_element: ft,
  claim_space: gr,
  component_subscribe: Ke,
  compute_slots: pr,
  create_slot: mr,
  detach: V,
  element: dt,
  empty: qe,
  exclude_internal_props: Qe,
  get_all_dirty_from_scope: br,
  get_slot_changes: yr,
  group_outros: vr,
  init: xr,
  insert_hydration: Y,
  safe_not_equal: Sr,
  set_custom_element_data: ht,
  space: _r,
  transition_in: ee,
  transition_out: Oe,
  update_slot_base: Cr
} = window.__gradio__svelte__internal, {
  beforeUpdate: wr,
  getContext: Tr,
  onDestroy: Pr,
  setContext: Or
} = window.__gradio__svelte__internal;
function Je(t) {
  let e, n;
  const o = (
    /*#slots*/
    t[7].default
  ), r = mr(
    o,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = dt("svelte-slot"), r && r.c(), this.h();
    },
    l(i) {
      e = ft(i, "SVELTE-SLOT", {
        class: !0
      });
      var s = ut(e);
      r && r.l(s), s.forEach(V), this.h();
    },
    h() {
      ht(e, "class", "svelte-1rt0kpf");
    },
    m(i, s) {
      Y(i, e, s), r && r.m(e, null), t[9](e), n = !0;
    },
    p(i, s) {
      r && r.p && (!n || s & /*$$scope*/
      64) && Cr(
        r,
        o,
        i,
        /*$$scope*/
        i[6],
        n ? yr(
          o,
          /*$$scope*/
          i[6],
          s,
          null
        ) : br(
          /*$$scope*/
          i[6]
        ),
        null
      );
    },
    i(i) {
      n || (ee(r, i), n = !0);
    },
    o(i) {
      Oe(r, i), n = !1;
    },
    d(i) {
      i && V(e), r && r.d(i), t[9](null);
    }
  };
}
function Mr(t) {
  let e, n, o, r, i = (
    /*$$slots*/
    t[4].default && Je(t)
  );
  return {
    c() {
      e = dt("react-portal-target"), n = _r(), i && i.c(), o = qe(), this.h();
    },
    l(s) {
      e = ft(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), ut(e).forEach(V), n = gr(s), i && i.l(s), o = qe(), this.h();
    },
    h() {
      ht(e, "class", "svelte-1rt0kpf");
    },
    m(s, a) {
      Y(s, e, a), t[8](e), Y(s, n, a), i && i.m(s, a), Y(s, o, a), r = !0;
    },
    p(s, [a]) {
      /*$$slots*/
      s[4].default ? i ? (i.p(s, a), a & /*$$slots*/
      16 && ee(i, 1)) : (i = Je(s), i.c(), ee(i, 1), i.m(o.parentNode, o)) : i && (vr(), Oe(i, 1, 1, () => {
        i = null;
      }), hr());
    },
    i(s) {
      r || (ee(i), r = !0);
    },
    o(s) {
      Oe(i), r = !1;
    },
    d(s) {
      s && (V(e), V(n), V(o)), t[8](null), i && i.d(s);
    }
  };
}
function Ze(t) {
  const {
    svelteInit: e,
    ...n
  } = t;
  return n;
}
function Er(t, e, n) {
  let o, r, {
    $$slots: i = {},
    $$scope: s
  } = e;
  const a = pr(i);
  let {
    svelteInit: l
  } = e;
  const c = Z(Ze(e)), f = Z();
  Ke(t, f, (m) => n(0, o = m));
  const u = Z();
  Ke(t, u, (m) => n(1, r = m));
  const d = [], y = Tr("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: g,
    subSlotIndex: h
  } = Dt() || {}, b = l({
    parent: y,
    props: c,
    target: f,
    slot: u,
    slotKey: v,
    slotIndex: g,
    subSlotIndex: h,
    onDestroy(m) {
      d.push(m);
    }
  });
  Or("$$ms-gr-react-wrapper", b), wr(() => {
    c.set(Ze(e));
  }), Pr(() => {
    d.forEach((m) => m());
  });
  function S(m) {
    Ue[m ? "unshift" : "push"](() => {
      o = m, f.set(o);
    });
  }
  function M(m) {
    Ue[m ? "unshift" : "push"](() => {
      r = m, u.set(r);
    });
  }
  return t.$$set = (m) => {
    n(17, e = Ge(Ge({}, e), Qe(m))), "svelteInit" in m && n(5, l = m.svelteInit), "$$scope" in m && n(6, s = m.$$scope);
  }, e = Qe(e), [o, r, f, u, a, l, s, i, S, M];
}
class Ir extends dr {
  constructor(e) {
    super(), xr(this, e, Er, Mr, Sr, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: En
} = window.__gradio__svelte__internal, Ye = window.ms_globals.rerender, ve = window.ms_globals.tree;
function jr(t, e = {}) {
  function n(o) {
    const r = Z(), i = new Ir({
      ...o,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const a = {
            key: window.ms_globals.autokey,
            svelteInstance: r,
            reactComponent: t,
            props: s.props,
            slot: s.slot,
            target: s.target,
            slotIndex: s.slotIndex,
            subSlotIndex: s.subSlotIndex,
            ignore: e.ignore,
            slotKey: s.slotKey,
            nodes: []
          }, l = s.parent ?? ve;
          return l.nodes = [...l.nodes, a], Ye({
            createPortal: Ce,
            node: ve
          }), s.onDestroy(() => {
            l.nodes = l.nodes.filter((c) => c.svelteInstance !== r), Ye({
              createPortal: Ce,
              node: ve
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
const kr = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function $r(t) {
  return t ? Object.keys(t).reduce((e, n) => {
    const o = t[n];
    return e[n] = Rr(n, o), e;
  }, {}) : {};
}
function Rr(t, e) {
  return typeof e == "number" && !kr.includes(t) ? e + "px" : e;
}
function Me(t) {
  const e = [], n = t.cloneNode(!1);
  if (t._reactElement) {
    const r = _.Children.toArray(t._reactElement.props.children).map((i) => {
      if (_.isValidElement(i) && i.props.__slot__) {
        const {
          portals: s,
          clonedElement: a
        } = Me(i.props.el);
        return _.cloneElement(i, {
          ...i.props,
          el: a,
          children: [..._.Children.toArray(i.props.children), ...s]
        });
      }
      return null;
    });
    return r.originalChildren = t._reactElement.props.children, e.push(Ce(_.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: r
    }), n)), {
      clonedElement: n,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((r) => {
    t.getEventListeners(r).forEach(({
      listener: s,
      type: a,
      useCapture: l
    }) => {
      n.addEventListener(a, s, l);
    });
  });
  const o = Array.from(t.childNodes);
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (i.nodeType === 1) {
      const {
        clonedElement: s,
        portals: a
      } = Me(i);
      e.push(...a), n.appendChild(s);
    } else i.nodeType === 3 && n.appendChild(i.cloneNode());
  }
  return {
    clonedElement: n,
    portals: e
  };
}
function Lr(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const Ee = $t(({
  slot: t,
  clone: e,
  className: n,
  style: o,
  observeAttributes: r
}, i) => {
  const s = Rt(), [a, l] = Lt([]), {
    forceClone: c
  } = Xt(), f = c ? !0 : e;
  return Ht(() => {
    var g;
    if (!s.current || !t)
      return;
    let u = t;
    function d() {
      let h = u;
      if (u.tagName.toLowerCase() === "svelte-slot" && u.children.length === 1 && u.children[0] && (h = u.children[0], h.tagName.toLowerCase() === "react-portal-target" && h.children[0] && (h = h.children[0])), Lr(i, h), n && h.classList.add(...n.split(" ")), o) {
        const b = $r(o);
        Object.keys(b).forEach((S) => {
          h.style[S] = b[S];
        });
      }
    }
    let y = null, v = null;
    if (f && window.MutationObserver) {
      let h = function() {
        var m, w, p;
        (m = s.current) != null && m.contains(u) && ((w = s.current) == null || w.removeChild(u));
        const {
          portals: S,
          clonedElement: M
        } = Me(t);
        u = M, l(S), u.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          d();
        }, 50), (p = s.current) == null || p.appendChild(u);
      };
      h();
      const b = ir(() => {
        h(), y == null || y.disconnect(), y == null || y.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      y = new window.MutationObserver(b), y.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      u.style.display = "contents", d(), (g = s.current) == null || g.appendChild(u);
    return () => {
      var h, b;
      u.style.display = "", (h = s.current) != null && h.contains(u) && ((b = s.current) == null || b.removeChild(u)), y == null || y.disconnect();
    };
  }, [t, f, n, o, i, r, c]), _.createElement("react-child", {
    ref: s,
    style: {
      display: "contents"
    }
  }, ...a);
}), Hr = "1.0.5", zr = /* @__PURE__ */ _.createContext({}), Ar = {
  classNames: {},
  styles: {},
  className: "",
  style: {}
}, Br = (t) => {
  const e = _.useContext(zr);
  return _.useMemo(() => ({
    ...Ar,
    ...e[t]
  }), [e[t]]);
};
function Ie() {
  return Ie = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ie.apply(null, arguments);
}
function je() {
  const {
    getPrefixCls: t,
    direction: e,
    csp: n,
    iconPrefixCls: o,
    theme: r
  } = _.useContext(Nt.ConfigContext);
  return {
    theme: r,
    getPrefixCls: t,
    direction: e,
    csp: n,
    iconPrefixCls: o
  };
}
function Dr(t) {
  if (Array.isArray(t)) return t;
}
function Xr(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, i, s, a = [], l = !0, c = !1;
    try {
      if (i = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (o = i.call(n)).done) && (a.push(o.value), a.length !== e); l = !0) ;
    } catch (f) {
      c = !0, r = f;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw r;
      }
    }
    return a;
  }
}
function et(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function Fr(t, e) {
  if (t) {
    if (typeof t == "string") return et(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? et(t, e) : void 0;
  }
}
function Nr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function te(t, e) {
  return Dr(t) || Xr(t, e) || Fr(t, e) || Nr();
}
function z(t) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, z(t);
}
var x = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re = Symbol.for("react.element"), Le = Symbol.for("react.portal"), oe = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), se = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), le = Symbol.for("react.context"), Vr = Symbol.for("react.server_context"), ce = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), Wr = Symbol.for("react.offscreen"), gt;
gt = Symbol.for("react.module.reference");
function $(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Re:
        switch (t = t.type, t) {
          case oe:
          case se:
          case ie:
          case ue:
          case fe:
            return t;
          default:
            switch (t = t && t.$$typeof, t) {
              case Vr:
              case le:
              case ce:
              case he:
              case de:
              case ae:
                return t;
              default:
                return e;
            }
        }
      case Le:
        return e;
    }
  }
}
x.ContextConsumer = le;
x.ContextProvider = ae;
x.Element = Re;
x.ForwardRef = ce;
x.Fragment = oe;
x.Lazy = he;
x.Memo = de;
x.Portal = Le;
x.Profiler = se;
x.StrictMode = ie;
x.Suspense = ue;
x.SuspenseList = fe;
x.isAsyncMode = function() {
  return !1;
};
x.isConcurrentMode = function() {
  return !1;
};
x.isContextConsumer = function(t) {
  return $(t) === le;
};
x.isContextProvider = function(t) {
  return $(t) === ae;
};
x.isElement = function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Re;
};
x.isForwardRef = function(t) {
  return $(t) === ce;
};
x.isFragment = function(t) {
  return $(t) === oe;
};
x.isLazy = function(t) {
  return $(t) === he;
};
x.isMemo = function(t) {
  return $(t) === de;
};
x.isPortal = function(t) {
  return $(t) === Le;
};
x.isProfiler = function(t) {
  return $(t) === se;
};
x.isStrictMode = function(t) {
  return $(t) === ie;
};
x.isSuspense = function(t) {
  return $(t) === ue;
};
x.isSuspenseList = function(t) {
  return $(t) === fe;
};
x.isValidElementType = function(t) {
  return typeof t == "string" || typeof t == "function" || t === oe || t === se || t === ie || t === ue || t === fe || t === Wr || typeof t == "object" && t !== null && (t.$$typeof === he || t.$$typeof === de || t.$$typeof === ae || t.$$typeof === le || t.$$typeof === ce || t.$$typeof === gt || t.getModuleId !== void 0);
};
x.typeOf = $;
function Gr(t, e) {
  if (z(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (z(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function pt(t) {
  var e = Gr(t, "string");
  return z(e) == "symbol" ? e : e + "";
}
function H(t, e, n) {
  return (e = pt(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function tt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function I(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? tt(Object(n), !0).forEach(function(o) {
      H(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tt(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function ge(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Ur(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, pt(o.key), o);
  }
}
function pe(t, e, n) {
  return e && Ur(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function ke(t, e) {
  return ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ke(t, e);
}
function mt(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && ke(t, e);
}
function re(t) {
  return re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, re(t);
}
function bt() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bt = function() {
    return !!t;
  })();
}
function U(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Kr(t, e) {
  if (e && (z(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return U(t);
}
function yt(t) {
  var e = bt();
  return function() {
    var n, o = re(t);
    if (e) {
      var r = re(this).constructor;
      n = Reflect.construct(o, arguments, r);
    } else n = o.apply(this, arguments);
    return Kr(this, n);
  };
}
var vt = /* @__PURE__ */ pe(function t() {
  ge(this, t);
}), xt = "CALC_UNIT", qr = new RegExp(xt, "g");
function xe(t) {
  return typeof t == "number" ? "".concat(t).concat(xt) : t;
}
var Qr = /* @__PURE__ */ function(t) {
  mt(n, t);
  var e = yt(n);
  function n(o, r) {
    var i;
    ge(this, n), i = e.call(this), H(U(i), "result", ""), H(U(i), "unitlessCssVar", void 0), H(U(i), "lowPriority", void 0);
    var s = z(o);
    return i.unitlessCssVar = r, o instanceof n ? i.result = "(".concat(o.result, ")") : s === "number" ? i.result = xe(o) : s === "string" && (i.result = o), i;
  }
  return pe(n, [{
    key: "add",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " + ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " + ").concat(xe(r))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " - ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " - ").concat(xe(r))), this.lowPriority = !0, this;
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
      var i = this, s = r || {}, a = s.unit, l = !0;
      return typeof a == "boolean" ? l = a : Array.from(this.unitlessCssVar).some(function(c) {
        return i.result.includes(c);
      }) && (l = !1), this.result = this.result.replace(qr, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(vt), Jr = /* @__PURE__ */ function(t) {
  mt(n, t);
  var e = yt(n);
  function n(o) {
    var r;
    return ge(this, n), r = e.call(this), H(U(r), "result", 0), o instanceof n ? r.result = o.result : typeof o == "number" && (r.result = o), r;
  }
  return pe(n, [{
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
}(vt), Zr = function(e, n) {
  var o = e === "css" ? Qr : Jr;
  return function(r) {
    return new o(r, n);
  };
}, rt = function(e, n) {
  return "".concat([n, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function nt(t, e, n, o) {
  var r = I({}, e[t]);
  if (o != null && o.deprecatedTokens) {
    var i = o.deprecatedTokens;
    i.forEach(function(a) {
      var l = te(a, 2), c = l[0], f = l[1];
      if (r != null && r[c] || r != null && r[f]) {
        var u;
        (u = r[f]) !== null && u !== void 0 || (r[f] = r == null ? void 0 : r[c]);
      }
    });
  }
  var s = I(I({}, n), r);
  return Object.keys(s).forEach(function(a) {
    s[a] === e[a] && delete s[a];
  }), s;
}
var St = typeof CSSINJS_STATISTIC < "u", $e = !0;
function He() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  if (!St)
    return Object.assign.apply(Object, [{}].concat(e));
  $e = !1;
  var o = {};
  return e.forEach(function(r) {
    if (z(r) === "object") {
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
  }), $e = !0, o;
}
var ot = {};
function Yr() {
}
var en = function(e) {
  var n, o = e, r = Yr;
  return St && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), o = new Proxy(e, {
    get: function(s, a) {
      if ($e) {
        var l;
        (l = n) === null || l === void 0 || l.add(a);
      }
      return s[a];
    }
  }), r = function(s, a) {
    var l;
    ot[s] = {
      global: Array.from(n),
      component: I(I({}, (l = ot[s]) === null || l === void 0 ? void 0 : l.component), a)
    };
  }), {
    token: o,
    keys: n,
    flush: r
  };
};
function it(t, e, n) {
  if (typeof n == "function") {
    var o;
    return n(He(e, (o = e[t]) !== null && o !== void 0 ? o : {}));
  }
  return n ?? {};
}
function tn(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "max(".concat(o.map(function(i) {
        return Pe(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "min(".concat(o.map(function(i) {
        return Pe(i);
      }).join(","), ")");
    }
  };
}
var rn = 1e3 * 60 * 10, nn = /* @__PURE__ */ function() {
  function t() {
    ge(this, t), H(this, "map", /* @__PURE__ */ new Map()), H(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), H(this, "nextID", 0), H(this, "lastAccessBeat", /* @__PURE__ */ new Map()), H(this, "accessBeat", 0);
  }
  return pe(t, [{
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
        return i && z(i) === "object" ? "obj_".concat(o.getObjectID(i)) : "".concat(z(i), "_").concat(i);
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
          o - r > rn && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), st = new nn();
function on(t, e) {
  return _.useMemo(function() {
    var n = st.get(e);
    if (n)
      return n;
    var o = t();
    return st.set(e, o), o;
  }, e);
}
var sn = function() {
  return {};
};
function an(t) {
  var e = t.useCSP, n = e === void 0 ? sn : e, o = t.useToken, r = t.usePrefix, i = t.getResetStyles, s = t.getCommonStyle, a = t.getCompUnitless;
  function l(d, y, v, g) {
    var h = Array.isArray(d) ? d[0] : d;
    function b(C) {
      return "".concat(String(h)).concat(C.slice(0, 1).toUpperCase()).concat(C.slice(1));
    }
    var S = (g == null ? void 0 : g.unitless) || {}, M = typeof a == "function" ? a(d) : {}, m = I(I({}, M), {}, H({}, b("zIndexPopup"), !0));
    Object.keys(S).forEach(function(C) {
      m[b(C)] = S[C];
    });
    var w = I(I({}, g), {}, {
      unitless: m,
      prefixToken: b
    }), p = f(d, y, v, w), T = c(h, v, w);
    return function(C) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, R = p(C, O), D = te(R, 2), E = D[1], X = T(O), j = te(X, 2), A = j[0], q = j[1];
      return [A, E, q];
    };
  }
  function c(d, y, v) {
    var g = v.unitless, h = v.injectStyle, b = h === void 0 ? !0 : h, S = v.prefixToken, M = v.ignore, m = function(T) {
      var C = T.rootCls, O = T.cssVar, R = O === void 0 ? {} : O, D = o(), E = D.realToken;
      return Wt({
        path: [d],
        prefix: R.prefix,
        key: R.key,
        unitless: g,
        ignore: M,
        token: E,
        scope: C
      }, function() {
        var X = it(d, E, y), j = nt(d, E, X, {
          deprecatedTokens: v == null ? void 0 : v.deprecatedTokens
        });
        return Object.keys(X).forEach(function(A) {
          j[S(A)] = j[A], delete j[A];
        }), j;
      }), null;
    }, w = function(T) {
      var C = o(), O = C.cssVar;
      return [function(R) {
        return b && O ? /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(m, {
          rootCls: T,
          cssVar: O,
          component: d
        }), R) : R;
      }, O == null ? void 0 : O.key];
    };
    return w;
  }
  function f(d, y, v) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(d) ? d : [d, d], b = te(h, 1), S = b[0], M = h.join("-"), m = t.layer || {
      name: "antd"
    };
    return function(w) {
      var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w, T = o(), C = T.theme, O = T.realToken, R = T.hashId, D = T.token, E = T.cssVar, X = r(), j = X.rootPrefixCls, A = X.iconPrefixCls, q = n(), me = E ? "css" : "js", Tt = on(function() {
        var F = /* @__PURE__ */ new Set();
        return E && Object.keys(g.unitless || {}).forEach(function(Q) {
          F.add(be(Q, E.prefix)), F.add(be(Q, rt(S, E.prefix)));
        }), Zr(me, F);
      }, [me, S, E == null ? void 0 : E.prefix]), ze = tn(me), Pt = ze.max, Ot = ze.min, Ae = {
        theme: C,
        token: D,
        hashId: R,
        nonce: function() {
          return q.nonce;
        },
        clientOnly: g.clientOnly,
        layer: m,
        // antd is always at top of styles
        order: g.order || -999
      };
      typeof i == "function" && Ne(I(I({}, Ae), {}, {
        clientOnly: !1,
        path: ["Shared", j]
      }), function() {
        return i(D, {
          prefix: {
            rootPrefixCls: j,
            iconPrefixCls: A
          },
          csp: q
        });
      });
      var Mt = Ne(I(I({}, Ae), {}, {
        path: [M, w, A]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var F = en(D), Q = F.token, Et = F.flush, N = it(S, O, v), It = ".".concat(w), Be = nt(S, O, N, {
          deprecatedTokens: g.deprecatedTokens
        });
        E && N && z(N) === "object" && Object.keys(N).forEach(function(Xe) {
          N[Xe] = "var(".concat(be(Xe, rt(S, E.prefix)), ")");
        });
        var De = He(Q, {
          componentCls: It,
          prefixCls: w,
          iconCls: ".".concat(A),
          antCls: ".".concat(j),
          calc: Tt,
          // @ts-ignore
          max: Pt,
          // @ts-ignore
          min: Ot
        }, E ? N : Be), jt = y(De, {
          hashId: R,
          prefixCls: w,
          rootPrefixCls: j,
          iconPrefixCls: A
        });
        Et(S, Be);
        var kt = typeof s == "function" ? s(De, w, p, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : kt, jt];
      });
      return [Mt, R];
    };
  }
  function u(d, y, v) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = f(d, y, v, I({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), b = function(M) {
      var m = M.prefixCls, w = M.rootCls, p = w === void 0 ? m : w;
      return h(m, p), null;
    };
    return b;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: u,
    genComponentStyleHook: f
  };
}
function K(t) {
  "@babel/helpers - typeof";
  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, K(t);
}
function ln(t, e) {
  if (K(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (K(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function cn(t) {
  var e = ln(t, "string");
  return K(e) == "symbol" ? e : e + "";
}
function k(t, e, n) {
  return (e = cn(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
const P = Math.round;
function Se(t, e) {
  const n = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], o = n.map((r) => parseFloat(r));
  for (let r = 0; r < 3; r += 1)
    o[r] = e(o[r] || 0, n[r] || "", r);
  return n[3] ? o[3] = n[3].includes("%") ? o[3] / 100 : o[3] : o[3] = 1, o;
}
const at = (t, e, n) => n === 0 ? t : t / 100;
function G(t, e) {
  const n = e || 255;
  return t > n ? n : t < 0 ? 0 : t;
}
class B {
  constructor(e) {
    k(this, "isValid", !0), k(this, "r", 0), k(this, "g", 0), k(this, "b", 0), k(this, "a", 1), k(this, "_h", void 0), k(this, "_s", void 0), k(this, "_l", void 0), k(this, "_v", void 0), k(this, "_max", void 0), k(this, "_min", void 0), k(this, "_brightness", void 0);
    function n(o) {
      return o[0] in e && o[1] in e && o[2] in e;
    }
    if (e) if (typeof e == "string") {
      let r = function(i) {
        return o.startsWith(i);
      };
      const o = e.trim();
      /^#?[A-F\d]{3,8}$/i.test(o) ? this.fromHexString(o) : r("rgb") ? this.fromRgbString(o) : r("hsl") ? this.fromHslString(o) : (r("hsv") || r("hsb")) && this.fromHsvString(o);
    } else if (e instanceof B)
      this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a, this._h = e._h, this._s = e._s, this._l = e._l, this._v = e._v;
    else if (n("rgb"))
      this.r = G(e.r), this.g = G(e.g), this.b = G(e.b), this.a = typeof e.a == "number" ? G(e.a, 1) : 1;
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
    function e(i) {
      const s = i / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    const n = e(this.r), o = e(this.g), r = e(this.b);
    return 0.2126 * n + 0.7152 * o + 0.0722 * r;
  }
  getHue() {
    if (typeof this._h > "u") {
      const e = this.getMax() - this.getMin();
      e === 0 ? this._h = 0 : this._h = P(60 * (this.r === this.getMax() ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / e + 2 : (this.r - this.g) / e + 4));
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
    const o = this._c(e), r = n / 100, i = (a) => (o[a] - this[a]) * r + this[a], s = {
      r: P(i("r")),
      g: P(i("g")),
      b: P(i("b")),
      a: P(i("a") * 100) / 100
    };
    return this._c(s);
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
    const n = this._c(e), o = this.a + n.a * (1 - this.a), r = (i) => P((this[i] * this.a + n[i] * n.a * (1 - this.a)) / o);
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
      const i = P(this.a * 255).toString(16);
      e += i.length === 2 ? i : "0" + i;
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
    const e = this.getHue(), n = P(this.getSaturation() * 100), o = P(this.getLightness() * 100);
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
    return r[e] = G(n, o), r;
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
    function o(r, i) {
      return parseInt(n[r] + n[i || r], 16);
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
      const d = P(o * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const l = e / 60, c = (1 - Math.abs(2 * o - 1)) * n, f = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = c, s = f) : l >= 1 && l < 2 ? (i = f, s = c) : l >= 2 && l < 3 ? (s = c, a = f) : l >= 3 && l < 4 ? (s = f, a = c) : l >= 4 && l < 5 ? (i = f, a = c) : l >= 5 && l < 6 && (i = c, a = f);
    const u = o - c / 2;
    this.r = P((i + u) * 255), this.g = P((s + u) * 255), this.b = P((a + u) * 255);
  }
  fromHsv({
    h: e,
    s: n,
    v: o,
    a: r
  }) {
    this._h = e % 360, this._s = n, this._v = o, this.a = typeof r == "number" ? r : 1;
    const i = P(o * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = e / 60, a = Math.floor(s), l = s - a, c = P(o * (1 - n) * 255), f = P(o * (1 - n * l) * 255), u = P(o * (1 - n * (1 - l)) * 255);
    switch (a) {
      case 0:
        this.g = u, this.b = c;
        break;
      case 1:
        this.r = f, this.b = c;
        break;
      case 2:
        this.r = c, this.b = u;
        break;
      case 3:
        this.r = c, this.g = f;
        break;
      case 4:
        this.r = u, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = f;
        break;
    }
  }
  fromHsvString(e) {
    const n = Se(e, at);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(e) {
    const n = Se(e, at);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(e) {
    const n = Se(e, (o, r) => (
      // Convert percentage to number. e.g. 50% -> 128
      r.includes("%") ? P(o / 100 * 255) : o
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
const un = {
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
}, fn = Object.assign(Object.assign({}, un), {
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
function _e(t) {
  return t >= 0 && t <= 255;
}
function J(t, e) {
  const {
    r: n,
    g: o,
    b: r,
    a: i
  } = new B(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: s,
    g: a,
    b: l
  } = new B(e).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const f = Math.round((n - s * (1 - c)) / c), u = Math.round((o - a * (1 - c)) / c), d = Math.round((r - l * (1 - c)) / c);
    if (_e(f) && _e(u) && _e(d))
      return new B({
        r: f,
        g: u,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new B({
    r: n,
    g: o,
    b: r,
    a: 1
  }).toRgbString();
}
var dn = function(t, e) {
  var n = {};
  for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(t); r < o.length; r++)
    e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]]);
  return n;
};
function hn(t) {
  const {
    override: e
  } = t, n = dn(t, ["override"]), o = Object.assign({}, e);
  Object.keys(fn).forEach((d) => {
    delete o[d];
  });
  const r = Object.assign(Object.assign({}, n), o), i = 480, s = 576, a = 768, l = 992, c = 1200, f = 1600;
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
    colorSplit: J(r.colorBorderSecondary, r.colorBgContainer),
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
    colorErrorOutline: J(r.colorErrorBg, r.colorBgContainer),
    colorWarningOutline: J(r.colorWarningBg, r.colorBgContainer),
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
    controlOutline: J(r.colorPrimaryBg, r.colorBgContainer),
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
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new B("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new B("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new B("rgba(0, 0, 0, 0.09)").toRgbString()}
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
const gn = {
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
}, pn = {
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
}, mn = Gt(Te.defaultAlgorithm), bn = {
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
}, _t = (t, e, n) => {
  const o = n.getDerivativeToken(t), {
    override: r,
    ...i
  } = e;
  let s = {
    ...o,
    override: r
  };
  return s = hn(s), i && Object.entries(i).forEach(([a, l]) => {
    const {
      theme: c,
      ...f
    } = l;
    let u = f;
    c && (u = _t({
      ...s,
      ...f
    }, {
      override: f
    }, c)), s[a] = u;
  }), s;
};
function yn() {
  const {
    token: t,
    hashed: e,
    theme: n = mn,
    override: o,
    cssVar: r
  } = _.useContext(Te._internalContext), [i, s, a] = Ut(n, [Te.defaultSeed, t], {
    salt: `${Hr}-${e || ""}`,
    override: o,
    getComputedToken: _t,
    cssVar: r && {
      prefix: r.prefix,
      key: r.key,
      unitless: gn,
      ignore: pn,
      preserve: bn
    }
  });
  return [n, a, e ? s : "", i, r];
}
const {
  genStyleHooks: vn
} = an({
  usePrefix: () => {
    const {
      getPrefixCls: t,
      iconPrefixCls: e
    } = je();
    return {
      iconPrefixCls: e,
      rootPrefixCls: t()
    };
  },
  useToken: () => {
    const [t, e, n, o, r] = yn();
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
    } = je();
    return t ?? {};
  },
  layer: {
    name: "antdx",
    dependencies: ["antd"]
  }
}), xn = (t) => {
  const {
    componentCls: e
  } = t;
  return {
    [e]: {
      // ======================== Prompt ========================
      "&, & *": {
        boxSizing: "border-box"
      },
      maxWidth: "100%",
      [`&${e}-rtl`]: {
        direction: "rtl"
      },
      [`& ${e}-title`]: {
        marginBlockStart: 0,
        fontWeight: "normal",
        color: t.colorTextTertiary
      },
      [`& ${e}-list`]: {
        display: "flex",
        gap: t.paddingSM,
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none"
        },
        listStyle: "none",
        paddingInlineStart: 0,
        marginBlock: 0,
        alignItems: "stretch",
        "&-wrap": {
          flexWrap: "wrap"
        },
        "&-vertical": {
          flexDirection: "column",
          alignItems: "flex-start"
        }
      },
      // ========================= Item =========================
      [`${e}-item`]: {
        flex: "none",
        display: "flex",
        gap: t.paddingXS,
        height: "auto",
        paddingBlock: t.paddingSM,
        paddingInline: t.padding,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        background: t.colorBgContainer,
        borderRadius: t.borderRadiusLG,
        transition: ["border", "background"].map((n) => `${n} ${t.motionDurationSlow}`).join(","),
        border: `${Pe(t.lineWidth)} ${t.lineType} ${t.colorBorderSecondary}`,
        [`&:not(${e}-item-has-nest)`]: {
          "&:hover": {
            cursor: "pointer",
            background: t.colorFillTertiary
          },
          "&:active": {
            background: t.colorFill
          }
        },
        [`${e}-content`]: {
          flex: "auto",
          minWidth: 0,
          display: "flex",
          gap: t.paddingXXS,
          flexDirection: "column",
          alignItems: "flex-start"
        },
        [`${e}-icon, ${e}-label, ${e}-desc`]: {
          margin: 0,
          padding: 0,
          fontSize: t.fontSize,
          lineHeight: t.lineHeight,
          textAlign: "start",
          whiteSpace: "normal"
        },
        [`${e}-label`]: {
          color: t.colorTextHeading,
          fontWeight: 500
        },
        [`${e}-label + ${e}-desc`]: {
          color: t.colorTextTertiary
        },
        // Disabled
        [`&${e}-item-disabled`]: {
          pointerEvents: "none",
          background: t.colorBgContainerDisabled,
          [`${e}-label, ${e}-desc`]: {
            color: t.colorTextTertiary
          }
        }
      }
    }
  };
}, Sn = (t) => {
  const {
    componentCls: e
  } = t;
  return {
    [e]: {
      // ========================= Parent =========================
      [`${e}-item-has-nest`]: {
        [`> ${e}-content`]: {
          // gap: token.paddingSM,
          [`> ${e}-label`]: {
            fontSize: t.fontSizeLG,
            lineHeight: t.lineHeightLG
          }
        }
      },
      // ========================= Nested =========================
      [`&${e}-nested`]: {
        marginTop: t.paddingXS,
        // ======================== Prompt ========================
        alignSelf: "stretch",
        [`${e}-list`]: {
          alignItems: "stretch"
        },
        // ========================= Item =========================
        [`${e}-item`]: {
          border: 0,
          background: t.colorFillQuaternary
        }
      }
    }
  };
}, _n = () => ({}), Cn = vn("Prompts", (t) => {
  const e = He(t, {});
  return [xn(e), Sn(e)];
}, _n), Ct = (t) => {
  const {
    prefixCls: e,
    title: n,
    className: o,
    items: r,
    onItemClick: i,
    vertical: s,
    wrap: a,
    rootClassName: l,
    styles: c = {},
    classNames: f = {},
    style: u,
    ...d
  } = t, {
    getPrefixCls: y,
    direction: v
  } = je(), g = y("prompts", e), h = Br("prompts"), [b, S, M] = Cn(g), m = W(g, h.className, o, l, S, M, {
    [`${g}-rtl`]: v === "rtl"
  }), w = W(`${g}-list`, h.classNames.list, f.list, {
    [`${g}-list-wrap`]: a
  }, {
    [`${g}-list-vertical`]: s
  });
  return b(/* @__PURE__ */ _.createElement("div", Ie({}, d, {
    className: m,
    style: {
      ...u,
      ...h.style
    }
  }), n && /* @__PURE__ */ _.createElement(Vt.Title, {
    level: 5,
    className: W(`${g}-title`, h.classNames.title, f.title),
    style: {
      ...h.styles.title,
      ...c.title
    }
  }, n), /* @__PURE__ */ _.createElement("div", {
    className: w,
    style: {
      ...h.styles.list,
      ...c.list
    }
  }, r == null ? void 0 : r.map((p, T) => {
    const C = p.children && p.children.length > 0;
    return /* @__PURE__ */ _.createElement("div", {
      key: p.key || `key_${T}`,
      style: {
        ...h.styles.item,
        ...c.item
      },
      className: W(`${g}-item`, h.classNames.item, f.item, {
        [`${g}-item-disabled`]: p.disabled,
        [`${g}-item-has-nest`]: C
      }),
      onClick: () => {
        !C && i && i({
          data: p
        });
      }
    }, p.icon && /* @__PURE__ */ _.createElement("div", {
      className: `${g}-icon`
    }, p.icon), /* @__PURE__ */ _.createElement("div", {
      className: W(`${g}-content`, h.classNames.itemContent, f.itemContent),
      style: {
        ...h.styles.itemContent,
        ...c.itemContent
      }
    }, p.label && /* @__PURE__ */ _.createElement("h6", {
      className: `${g}-label`
    }, p.label), p.description && /* @__PURE__ */ _.createElement("p", {
      className: `${g}-desc`
    }, p.description), C && /* @__PURE__ */ _.createElement(Ct, {
      className: `${g}-nested`,
      items: p.children,
      vertical: !0,
      onItemClick: i,
      classNames: {
        list: f.subList,
        item: f.subItem
      },
      styles: {
        list: c.subList,
        item: c.subItem
      }
    })));
  }))));
}, wn = ({
  children: t,
  ...e
}) => /* @__PURE__ */ L.jsx(L.Fragment, {
  children: t(e)
});
function Tn(t) {
  return _.createElement(wn, {
    children: t
  });
}
function wt(t, e, n) {
  const o = t.filter(Boolean);
  if (o.length !== 0)
    return o.map((r, i) => {
      var c;
      if (typeof r != "object")
        return e != null && e.fallback ? e.fallback(r) : r;
      const s = {
        ...r.props,
        key: ((c = r.props) == null ? void 0 : c.key) ?? (n ? `${n}-${i}` : `${i}`)
      };
      let a = s;
      Object.keys(r.slots).forEach((f) => {
        if (!r.slots[f] || !(r.slots[f] instanceof Element) && !r.slots[f].el)
          return;
        const u = f.split(".");
        u.forEach((b, S) => {
          a[b] || (a[b] = {}), S !== u.length - 1 && (a = s[b]);
        });
        const d = r.slots[f];
        let y, v, g = (e == null ? void 0 : e.clone) ?? !1, h = e == null ? void 0 : e.forceClone;
        d instanceof Element ? y = d : (y = d.el, v = d.callback, g = d.clone ?? g, h = d.forceClone ?? h), h = h ?? !!v, a[u[u.length - 1]] = y ? v ? (...b) => (v(u[u.length - 1], b), /* @__PURE__ */ L.jsx(Fe, {
          ...r.ctx,
          params: b,
          forceClone: h,
          children: /* @__PURE__ */ L.jsx(Ee, {
            slot: y,
            clone: g
          })
        })) : Tn((b) => /* @__PURE__ */ L.jsx(Fe, {
          ...r.ctx,
          forceClone: h,
          children: /* @__PURE__ */ L.jsx(Ee, {
            ...b,
            slot: y,
            clone: g
          })
        })) : a[u[u.length - 1]], a = s;
      });
      const l = (e == null ? void 0 : e.children) || "children";
      return r[l] ? s[l] = wt(r[l], e, `${i}`) : e != null && e.children && (s[l] = void 0, Reflect.deleteProperty(s, l)), s;
    });
}
const {
  useItems: Pn,
  withItemsContextProvider: On,
  ItemHandler: In
} = Ft("antdx-prompts-items"), jn = jr(On(["default", "items"], ({
  slots: t,
  children: e,
  items: n,
  ...o
}) => {
  const {
    items: r
  } = Pn(), i = r.items.length > 0 ? r.items : r.default;
  return /* @__PURE__ */ L.jsxs(L.Fragment, {
    children: [/* @__PURE__ */ L.jsx("div", {
      style: {
        display: "none"
      },
      children: e
    }), /* @__PURE__ */ L.jsx(Ct, {
      ...o,
      title: t.title ? /* @__PURE__ */ L.jsx(Ee, {
        slot: t.title
      }) : o.title,
      items: zt(() => n || wt(i, {
        clone: !0
      }), [n, i])
    })]
  });
}));
export {
  jn as Prompts,
  jn as default
};
