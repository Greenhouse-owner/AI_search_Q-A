import { i as Ht, a as Oe, r as zt, w as Y, g as At, c as W } from "./Index-DyNZWriL.js";
const b = window.ms_globals.React, It = window.ms_globals.React.forwardRef, kt = window.ms_globals.React.useRef, Rt = window.ms_globals.React.useState, Lt = window.ms_globals.React.useEffect, Te = window.ms_globals.ReactDOM.createPortal, Bt = window.ms_globals.internalContext.useContextPropsContext, $t = window.ms_globals.antd.ConfigProvider, Me = window.ms_globals.antd.theme, Xe = window.ms_globals.antd.Typography, ye = window.ms_globals.antd.Flex, Fe = window.ms_globals.antdCssinjs.unit, ve = window.ms_globals.antdCssinjs.token2CSSVar, Ne = window.ms_globals.antdCssinjs.useStyleRegister, Dt = window.ms_globals.antdCssinjs.useCSSVarRegister, Xt = window.ms_globals.antdCssinjs.createTheme, Ft = window.ms_globals.antdCssinjs.useCacheToken;
var Nt = /\s/;
function Vt(e) {
  for (var t = e.length; t-- && Nt.test(e.charAt(t)); )
    ;
  return t;
}
var Wt = /^\s+/;
function Ut(e) {
  return e && e.slice(0, Vt(e) + 1).replace(Wt, "");
}
var Ve = NaN, Gt = /^[-+]0x[0-9a-f]+$/i, Kt = /^0b[01]+$/i, qt = /^0o[0-7]+$/i, Qt = parseInt;
function We(e) {
  if (typeof e == "number")
    return e;
  if (Ht(e))
    return Ve;
  if (Oe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Oe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ut(e);
  var n = Kt.test(e);
  return n || qt.test(e) ? Qt(e.slice(2), n ? 2 : 8) : Gt.test(e) ? Ve : +e;
}
var Se = function() {
  return zt.Date.now();
}, Jt = "Expected a function", Zt = Math.max, Yt = Math.min;
function er(e, t, n) {
  var o, r, i, s, a, l, c = 0, f = !1, u = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(Jt);
  t = We(t) || 0, Oe(n) && (f = !!n.leading, u = "maxWait" in n, i = u ? Zt(We(n.maxWait) || 0, t) : i, h = "trailing" in n ? !!n.trailing : h);
  function v(m) {
    var w = o, T = r;
    return o = r = void 0, c = m, s = e.apply(T, w), s;
  }
  function x(m) {
    return c = m, a = setTimeout(S, t), f ? v(m) : s;
  }
  function p(m) {
    var w = m - l, T = m - c, M = t - w;
    return u ? Yt(M, i - T) : M;
  }
  function d(m) {
    var w = m - l, T = m - c;
    return l === void 0 || w >= t || w < 0 || u && T >= i;
  }
  function S() {
    var m = Se();
    if (d(m))
      return _(m);
    a = setTimeout(S, p(m));
  }
  function _(m) {
    return a = void 0, h && o ? v(m) : (o = r = void 0, s);
  }
  function P() {
    a !== void 0 && clearTimeout(a), c = 0, o = l = r = a = void 0;
  }
  function g() {
    return a === void 0 ? s : _(Se());
  }
  function C() {
    var m = Se(), w = d(m);
    if (o = arguments, r = this, l = m, w) {
      if (a === void 0)
        return x(l);
      if (u)
        return clearTimeout(a), a = setTimeout(S, t), v(l);
    }
    return a === void 0 && (a = setTimeout(S, t)), s;
  }
  return C.cancel = P, C.flush = g, C;
}
var lt = {
  exports: {}
}, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = b, rr = Symbol.for("react.element"), nr = Symbol.for("react.fragment"), or = Object.prototype.hasOwnProperty, ir = tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, sr = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ct(e, t, n) {
  var o, r = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (o in t) or.call(t, o) && !sr.hasOwnProperty(o) && (r[o] = t[o]);
  if (e && e.defaultProps) for (o in t = e.defaultProps, t) r[o] === void 0 && (r[o] = t[o]);
  return {
    $$typeof: rr,
    type: e,
    key: i,
    ref: s,
    props: r,
    _owner: ir.current
  };
}
oe.Fragment = nr;
oe.jsx = ct;
oe.jsxs = ct;
lt.exports = oe;
var $ = lt.exports;
const {
  SvelteComponent: ar,
  assign: Ue,
  binding_callbacks: Ge,
  check_outros: lr,
  children: ut,
  claim_element: ft,
  claim_space: cr,
  component_subscribe: Ke,
  compute_slots: ur,
  create_slot: fr,
  detach: V,
  element: ht,
  empty: qe,
  exclude_internal_props: Qe,
  get_all_dirty_from_scope: hr,
  get_slot_changes: dr,
  group_outros: gr,
  init: pr,
  insert_hydration: ee,
  safe_not_equal: mr,
  set_custom_element_data: dt,
  space: br,
  transition_in: te,
  transition_out: Pe,
  update_slot_base: yr
} = window.__gradio__svelte__internal, {
  beforeUpdate: vr,
  getContext: Sr,
  onDestroy: xr,
  setContext: _r
} = window.__gradio__svelte__internal;
function Je(e) {
  let t, n;
  const o = (
    /*#slots*/
    e[7].default
  ), r = fr(
    o,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ht("svelte-slot"), r && r.c(), this.h();
    },
    l(i) {
      t = ft(i, "SVELTE-SLOT", {
        class: !0
      });
      var s = ut(t);
      r && r.l(s), s.forEach(V), this.h();
    },
    h() {
      dt(t, "class", "svelte-1rt0kpf");
    },
    m(i, s) {
      ee(i, t, s), r && r.m(t, null), e[9](t), n = !0;
    },
    p(i, s) {
      r && r.p && (!n || s & /*$$scope*/
      64) && yr(
        r,
        o,
        i,
        /*$$scope*/
        i[6],
        n ? dr(
          o,
          /*$$scope*/
          i[6],
          s,
          null
        ) : hr(
          /*$$scope*/
          i[6]
        ),
        null
      );
    },
    i(i) {
      n || (te(r, i), n = !0);
    },
    o(i) {
      Pe(r, i), n = !1;
    },
    d(i) {
      i && V(t), r && r.d(i), e[9](null);
    }
  };
}
function Cr(e) {
  let t, n, o, r, i = (
    /*$$slots*/
    e[4].default && Je(e)
  );
  return {
    c() {
      t = ht("react-portal-target"), n = br(), i && i.c(), o = qe(), this.h();
    },
    l(s) {
      t = ft(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), ut(t).forEach(V), n = cr(s), i && i.l(s), o = qe(), this.h();
    },
    h() {
      dt(t, "class", "svelte-1rt0kpf");
    },
    m(s, a) {
      ee(s, t, a), e[8](t), ee(s, n, a), i && i.m(s, a), ee(s, o, a), r = !0;
    },
    p(s, [a]) {
      /*$$slots*/
      s[4].default ? i ? (i.p(s, a), a & /*$$slots*/
      16 && te(i, 1)) : (i = Je(s), i.c(), te(i, 1), i.m(o.parentNode, o)) : i && (gr(), Pe(i, 1, 1, () => {
        i = null;
      }), lr());
    },
    i(s) {
      r || (te(i), r = !0);
    },
    o(s) {
      Pe(i), r = !1;
    },
    d(s) {
      s && (V(t), V(n), V(o)), e[8](null), i && i.d(s);
    }
  };
}
function Ze(e) {
  const {
    svelteInit: t,
    ...n
  } = e;
  return n;
}
function wr(e, t, n) {
  let o, r, {
    $$slots: i = {},
    $$scope: s
  } = t;
  const a = ur(i);
  let {
    svelteInit: l
  } = t;
  const c = Y(Ze(t)), f = Y();
  Ke(e, f, (g) => n(0, o = g));
  const u = Y();
  Ke(e, u, (g) => n(1, r = g));
  const h = [], v = Sr("$$ms-gr-react-wrapper"), {
    slotKey: x,
    slotIndex: p,
    subSlotIndex: d
  } = At() || {}, S = l({
    parent: v,
    props: c,
    target: f,
    slot: u,
    slotKey: x,
    slotIndex: p,
    subSlotIndex: d,
    onDestroy(g) {
      h.push(g);
    }
  });
  _r("$$ms-gr-react-wrapper", S), vr(() => {
    c.set(Ze(t));
  }), xr(() => {
    h.forEach((g) => g());
  });
  function _(g) {
    Ge[g ? "unshift" : "push"](() => {
      o = g, f.set(o);
    });
  }
  function P(g) {
    Ge[g ? "unshift" : "push"](() => {
      r = g, u.set(r);
    });
  }
  return e.$$set = (g) => {
    n(17, t = Ue(Ue({}, t), Qe(g))), "svelteInit" in g && n(5, l = g.svelteInit), "$$scope" in g && n(6, s = g.$$scope);
  }, t = Qe(t), [o, r, f, u, a, l, s, i, _, P];
}
class Tr extends ar {
  constructor(t) {
    super(), pr(this, t, wr, Cr, mr, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _n
} = window.__gradio__svelte__internal, Ye = window.ms_globals.rerender, xe = window.ms_globals.tree;
function Or(e, t = {}) {
  function n(o) {
    const r = Y(), i = new Tr({
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
          }, l = s.parent ?? xe;
          return l.nodes = [...l.nodes, a], Ye({
            createPortal: Te,
            node: xe
          }), s.onDestroy(() => {
            l.nodes = l.nodes.filter((c) => c.svelteInstance !== r), Ye({
              createPortal: Te,
              node: xe
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
const Mr = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Pr(e) {
  return e ? Object.keys(e).reduce((t, n) => {
    const o = e[n];
    return t[n] = Er(n, o), t;
  }, {}) : {};
}
function Er(e, t) {
  return typeof t == "number" && !Mr.includes(e) ? t + "px" : t;
}
function Ee(e) {
  const t = [], n = e.cloneNode(!1);
  if (e._reactElement) {
    const r = b.Children.toArray(e._reactElement.props.children).map((i) => {
      if (b.isValidElement(i) && i.props.__slot__) {
        const {
          portals: s,
          clonedElement: a
        } = Ee(i.props.el);
        return b.cloneElement(i, {
          ...i.props,
          el: a,
          children: [...b.Children.toArray(i.props.children), ...s]
        });
      }
      return null;
    });
    return r.originalChildren = e._reactElement.props.children, t.push(Te(b.cloneElement(e._reactElement, {
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
      useCapture: l
    }) => {
      n.addEventListener(a, s, l);
    });
  });
  const o = Array.from(e.childNodes);
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (i.nodeType === 1) {
      const {
        clonedElement: s,
        portals: a
      } = Ee(i);
      t.push(...a), n.appendChild(s);
    } else i.nodeType === 3 && n.appendChild(i.cloneNode());
  }
  return {
    clonedElement: n,
    portals: t
  };
}
function jr(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const J = It(({
  slot: e,
  clone: t,
  className: n,
  style: o,
  observeAttributes: r
}, i) => {
  const s = kt(), [a, l] = Rt([]), {
    forceClone: c
  } = Bt(), f = c ? !0 : t;
  return Lt(() => {
    var p;
    if (!s.current || !e)
      return;
    let u = e;
    function h() {
      let d = u;
      if (u.tagName.toLowerCase() === "svelte-slot" && u.children.length === 1 && u.children[0] && (d = u.children[0], d.tagName.toLowerCase() === "react-portal-target" && d.children[0] && (d = d.children[0])), jr(i, d), n && d.classList.add(...n.split(" ")), o) {
        const S = Pr(o);
        Object.keys(S).forEach((_) => {
          d.style[_] = S[_];
        });
      }
    }
    let v = null, x = null;
    if (f && window.MutationObserver) {
      let d = function() {
        var g, C, m;
        (g = s.current) != null && g.contains(u) && ((C = s.current) == null || C.removeChild(u));
        const {
          portals: _,
          clonedElement: P
        } = Ee(e);
        u = P, l(_), u.style.display = "contents", x && clearTimeout(x), x = setTimeout(() => {
          h();
        }, 50), (m = s.current) == null || m.appendChild(u);
      };
      d();
      const S = er(() => {
        d(), v == null || v.disconnect(), v == null || v.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      v = new window.MutationObserver(S), v.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      u.style.display = "contents", h(), (p = s.current) == null || p.appendChild(u);
    return () => {
      var d, S;
      u.style.display = "", (d = s.current) != null && d.contains(u) && ((S = s.current) == null || S.removeChild(u)), v == null || v.disconnect();
    };
  }, [e, f, n, o, i, r, c]), b.createElement("react-child", {
    ref: s,
    style: {
      display: "contents"
    }
  }, ...a);
}), Ir = "1.0.5", kr = /* @__PURE__ */ b.createContext({}), Rr = {
  classNames: {},
  styles: {},
  className: "",
  style: {}
}, Lr = (e) => {
  const t = b.useContext(kr);
  return b.useMemo(() => ({
    ...Rr,
    ...t[e]
  }), [t[e]]);
};
function je() {
  const {
    getPrefixCls: e,
    direction: t,
    csp: n,
    iconPrefixCls: o,
    theme: r
  } = b.useContext($t.ConfigContext);
  return {
    theme: r,
    getPrefixCls: e,
    direction: t,
    csp: n,
    iconPrefixCls: o
  };
}
function Hr(e) {
  if (Array.isArray(e)) return e;
}
function zr(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o, r, i, s, a = [], l = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (o = i.call(n)).done) && (a.push(o.value), a.length !== t); l = !0) ;
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
function et(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function Ar(e, t) {
  if (e) {
    if (typeof e == "string") return et(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? et(e, t) : void 0;
  }
}
function Br() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function re(e, t) {
  return Hr(e) || zr(e, t) || Ar(e, t) || Br();
}
function z(e) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, z(e);
}
var y = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re = Symbol.for("react.element"), Le = Symbol.for("react.portal"), ie = Symbol.for("react.fragment"), se = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), le = Symbol.for("react.provider"), ce = Symbol.for("react.context"), $r = Symbol.for("react.server_context"), ue = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), Dr = Symbol.for("react.offscreen"), gt;
gt = Symbol.for("react.module.reference");
function R(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Re:
        switch (e = e.type, e) {
          case ie:
          case ae:
          case se:
          case fe:
          case he:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case $r:
              case ce:
              case ue:
              case ge:
              case de:
              case le:
                return e;
              default:
                return t;
            }
        }
      case Le:
        return t;
    }
  }
}
y.ContextConsumer = ce;
y.ContextProvider = le;
y.Element = Re;
y.ForwardRef = ue;
y.Fragment = ie;
y.Lazy = ge;
y.Memo = de;
y.Portal = Le;
y.Profiler = ae;
y.StrictMode = se;
y.Suspense = fe;
y.SuspenseList = he;
y.isAsyncMode = function() {
  return !1;
};
y.isConcurrentMode = function() {
  return !1;
};
y.isContextConsumer = function(e) {
  return R(e) === ce;
};
y.isContextProvider = function(e) {
  return R(e) === le;
};
y.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Re;
};
y.isForwardRef = function(e) {
  return R(e) === ue;
};
y.isFragment = function(e) {
  return R(e) === ie;
};
y.isLazy = function(e) {
  return R(e) === ge;
};
y.isMemo = function(e) {
  return R(e) === de;
};
y.isPortal = function(e) {
  return R(e) === Le;
};
y.isProfiler = function(e) {
  return R(e) === ae;
};
y.isStrictMode = function(e) {
  return R(e) === se;
};
y.isSuspense = function(e) {
  return R(e) === fe;
};
y.isSuspenseList = function(e) {
  return R(e) === he;
};
y.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ie || e === ae || e === se || e === fe || e === he || e === Dr || typeof e == "object" && e !== null && (e.$$typeof === ge || e.$$typeof === de || e.$$typeof === le || e.$$typeof === ce || e.$$typeof === ue || e.$$typeof === gt || e.getModuleId !== void 0);
};
y.typeOf = R;
function Xr(e, t) {
  if (z(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (z(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pt(e) {
  var t = Xr(e, "string");
  return z(t) == "symbol" ? t : t + "";
}
function H(e, t, n) {
  return (t = pt(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function tt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tt(Object(n), !0).forEach(function(o) {
      H(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tt(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function pe(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Fr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, pt(o.key), o);
  }
}
function me(e, t, n) {
  return t && Fr(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Ie(e, t) {
  return Ie = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ie(e, t);
}
function mt(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Ie(e, t);
}
function ne(e) {
  return ne = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ne(e);
}
function bt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bt = function() {
    return !!e;
  })();
}
function G(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nr(e, t) {
  if (t && (z(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return G(e);
}
function yt(e) {
  var t = bt();
  return function() {
    var n, o = ne(e);
    if (t) {
      var r = ne(this).constructor;
      n = Reflect.construct(o, arguments, r);
    } else n = o.apply(this, arguments);
    return Nr(this, n);
  };
}
var vt = /* @__PURE__ */ me(function e() {
  pe(this, e);
}), St = "CALC_UNIT", Vr = new RegExp(St, "g");
function _e(e) {
  return typeof e == "number" ? "".concat(e).concat(St) : e;
}
var Wr = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = yt(n);
  function n(o, r) {
    var i;
    pe(this, n), i = t.call(this), H(G(i), "result", ""), H(G(i), "unitlessCssVar", void 0), H(G(i), "lowPriority", void 0);
    var s = z(o);
    return i.unitlessCssVar = r, o instanceof n ? i.result = "(".concat(o.result, ")") : s === "number" ? i.result = _e(o) : s === "string" && (i.result = o), i;
  }
  return me(n, [{
    key: "add",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " + ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " + ").concat(_e(r))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " - ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " - ").concat(_e(r))), this.lowPriority = !0, this;
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
      }) && (l = !1), this.result = this.result.replace(Vr, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(vt), Ur = /* @__PURE__ */ function(e) {
  mt(n, e);
  var t = yt(n);
  function n(o) {
    var r;
    return pe(this, n), r = t.call(this), H(G(r), "result", 0), o instanceof n ? r.result = o.result : typeof o == "number" && (r.result = o), r;
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
}(vt), Gr = function(t, n) {
  var o = t === "css" ? Wr : Ur;
  return function(r) {
    return new o(r, n);
  };
}, rt = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function nt(e, t, n, o) {
  var r = j({}, t[e]);
  if (o != null && o.deprecatedTokens) {
    var i = o.deprecatedTokens;
    i.forEach(function(a) {
      var l = re(a, 2), c = l[0], f = l[1];
      if (r != null && r[c] || r != null && r[f]) {
        var u;
        (u = r[f]) !== null && u !== void 0 || (r[f] = r == null ? void 0 : r[c]);
      }
    });
  }
  var s = j(j({}, n), r);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var xt = typeof CSSINJS_STATISTIC < "u", ke = !0;
function He() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!xt)
    return Object.assign.apply(Object, [{}].concat(t));
  ke = !1;
  var o = {};
  return t.forEach(function(r) {
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
  }), ke = !0, o;
}
var ot = {};
function Kr() {
}
var qr = function(t) {
  var n, o = t, r = Kr;
  return xt && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), o = new Proxy(t, {
    get: function(s, a) {
      if (ke) {
        var l;
        (l = n) === null || l === void 0 || l.add(a);
      }
      return s[a];
    }
  }), r = function(s, a) {
    var l;
    ot[s] = {
      global: Array.from(n),
      component: j(j({}, (l = ot[s]) === null || l === void 0 ? void 0 : l.component), a)
    };
  }), {
    token: o,
    keys: n,
    flush: r
  };
};
function it(e, t, n) {
  if (typeof n == "function") {
    var o;
    return n(He(t, (o = t[e]) !== null && o !== void 0 ? o : {}));
  }
  return n ?? {};
}
function Qr(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "max(".concat(o.map(function(i) {
        return Fe(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "min(".concat(o.map(function(i) {
        return Fe(i);
      }).join(","), ")");
    }
  };
}
var Jr = 1e3 * 60 * 10, Zr = /* @__PURE__ */ function() {
  function e() {
    pe(this, e), H(this, "map", /* @__PURE__ */ new Map()), H(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), H(this, "nextID", 0), H(this, "lastAccessBeat", /* @__PURE__ */ new Map()), H(this, "accessBeat", 0);
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
          o - r > Jr && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), st = new Zr();
function Yr(e, t) {
  return b.useMemo(function() {
    var n = st.get(t);
    if (n)
      return n;
    var o = e();
    return st.set(t, o), o;
  }, t);
}
var en = function() {
  return {};
};
function tn(e) {
  var t = e.useCSP, n = t === void 0 ? en : t, o = e.useToken, r = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function l(h, v, x, p) {
    var d = Array.isArray(h) ? h[0] : h;
    function S(T) {
      return "".concat(String(d)).concat(T.slice(0, 1).toUpperCase()).concat(T.slice(1));
    }
    var _ = (p == null ? void 0 : p.unitless) || {}, P = typeof a == "function" ? a(h) : {}, g = j(j({}, P), {}, H({}, S("zIndexPopup"), !0));
    Object.keys(_).forEach(function(T) {
      g[S(T)] = _[T];
    });
    var C = j(j({}, p), {}, {
      unitless: g,
      prefixToken: S
    }), m = f(h, v, x, C), w = c(d, x, C);
    return function(T) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T, L = m(T, M), D = re(L, 2), E = D[1], X = w(M), I = re(X, 2), A = I[0], q = I[1];
      return [A, E, q];
    };
  }
  function c(h, v, x) {
    var p = x.unitless, d = x.injectStyle, S = d === void 0 ? !0 : d, _ = x.prefixToken, P = x.ignore, g = function(w) {
      var T = w.rootCls, M = w.cssVar, L = M === void 0 ? {} : M, D = o(), E = D.realToken;
      return Dt({
        path: [h],
        prefix: L.prefix,
        key: L.key,
        unitless: p,
        ignore: P,
        token: E,
        scope: T
      }, function() {
        var X = it(h, E, v), I = nt(h, E, X, {
          deprecatedTokens: x == null ? void 0 : x.deprecatedTokens
        });
        return Object.keys(X).forEach(function(A) {
          I[_(A)] = I[A], delete I[A];
        }), I;
      }), null;
    }, C = function(w) {
      var T = o(), M = T.cssVar;
      return [function(L) {
        return S && M ? /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(g, {
          rootCls: w,
          cssVar: M,
          component: h
        }), L) : L;
      }, M == null ? void 0 : M.key];
    };
    return C;
  }
  function f(h, v, x) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = Array.isArray(h) ? h : [h, h], S = re(d, 1), _ = S[0], P = d.join("-"), g = e.layer || {
      name: "antd"
    };
    return function(C) {
      var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, w = o(), T = w.theme, M = w.realToken, L = w.hashId, D = w.token, E = w.cssVar, X = r(), I = X.rootPrefixCls, A = X.iconPrefixCls, q = n(), be = E ? "css" : "js", Ct = Yr(function() {
        var F = /* @__PURE__ */ new Set();
        return E && Object.keys(p.unitless || {}).forEach(function(Q) {
          F.add(ve(Q, E.prefix)), F.add(ve(Q, rt(_, E.prefix)));
        }), Gr(be, F);
      }, [be, _, E == null ? void 0 : E.prefix]), ze = Qr(be), wt = ze.max, Tt = ze.min, Ae = {
        theme: T,
        token: D,
        hashId: L,
        nonce: function() {
          return q.nonce;
        },
        clientOnly: p.clientOnly,
        layer: g,
        // antd is always at top of styles
        order: p.order || -999
      };
      typeof i == "function" && Ne(j(j({}, Ae), {}, {
        clientOnly: !1,
        path: ["Shared", I]
      }), function() {
        return i(D, {
          prefix: {
            rootPrefixCls: I,
            iconPrefixCls: A
          },
          csp: q
        });
      });
      var Ot = Ne(j(j({}, Ae), {}, {
        path: [P, C, A]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var F = qr(D), Q = F.token, Mt = F.flush, N = it(_, M, x), Pt = ".".concat(C), Be = nt(_, M, N, {
          deprecatedTokens: p.deprecatedTokens
        });
        E && N && z(N) === "object" && Object.keys(N).forEach(function(De) {
          N[De] = "var(".concat(ve(De, rt(_, E.prefix)), ")");
        });
        var $e = He(Q, {
          componentCls: Pt,
          prefixCls: C,
          iconCls: ".".concat(A),
          antCls: ".".concat(I),
          calc: Ct,
          // @ts-ignore
          max: wt,
          // @ts-ignore
          min: Tt
        }, E ? N : Be), Et = v($e, {
          hashId: L,
          prefixCls: C,
          rootPrefixCls: I,
          iconPrefixCls: A
        });
        Mt(_, Be);
        var jt = typeof s == "function" ? s($e, C, m, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : jt, Et];
      });
      return [Ot, L];
    };
  }
  function u(h, v, x) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = f(h, v, x, j({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), S = function(P) {
      var g = P.prefixCls, C = P.rootCls, m = C === void 0 ? g : C;
      return d(g, m), null;
    };
    return S;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: u,
    genComponentStyleHook: f
  };
}
function K(e) {
  "@babel/helpers - typeof";
  return K = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, K(e);
}
function rn(e, t) {
  if (K(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (K(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nn(e) {
  var t = rn(e, "string");
  return K(t) == "symbol" ? t : t + "";
}
function k(e, t, n) {
  return (t = nn(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
const O = Math.round;
function Ce(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], o = n.map((r) => parseFloat(r));
  for (let r = 0; r < 3; r += 1)
    o[r] = t(o[r] || 0, n[r] || "", r);
  return n[3] ? o[3] = n[3].includes("%") ? o[3] / 100 : o[3] : o[3] = 1, o;
}
const at = (e, t, n) => n === 0 ? e : e / 100;
function U(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class B {
  constructor(t) {
    k(this, "isValid", !0), k(this, "r", 0), k(this, "g", 0), k(this, "b", 0), k(this, "a", 1), k(this, "_h", void 0), k(this, "_s", void 0), k(this, "_l", void 0), k(this, "_v", void 0), k(this, "_max", void 0), k(this, "_min", void 0), k(this, "_brightness", void 0);
    function n(o) {
      return o[0] in t && o[1] in t && o[2] in t;
    }
    if (t) if (typeof t == "string") {
      let r = function(i) {
        return o.startsWith(i);
      };
      const o = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(o) ? this.fromHexString(o) : r("rgb") ? this.fromRgbString(o) : r("hsl") ? this.fromHslString(o) : (r("hsv") || r("hsb")) && this.fromHsvString(o);
    } else if (t instanceof B)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = U(t.r), this.g = U(t.g), this.b = U(t.b), this.a = typeof t.a == "number" ? U(t.a, 1) : 1;
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
      t === 0 ? this._h = 0 : this._h = O(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
      r: O(i("r")),
      g: O(i("g")),
      b: O(i("b")),
      a: O(i("a") * 100) / 100
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
    const n = this._c(t), o = this.a + n.a * (1 - this.a), r = (i) => O((this[i] * this.a + n[i] * n.a * (1 - this.a)) / o);
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
      const i = O(this.a * 255).toString(16);
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
    const t = this.getHue(), n = O(this.getSaturation() * 100), o = O(this.getLightness() * 100);
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
    return r[t] = U(n, o), r;
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
      const h = O(o * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, s = 0, a = 0;
    const l = t / 60, c = (1 - Math.abs(2 * o - 1)) * n, f = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = c, s = f) : l >= 1 && l < 2 ? (i = f, s = c) : l >= 2 && l < 3 ? (s = c, a = f) : l >= 3 && l < 4 ? (s = f, a = c) : l >= 4 && l < 5 ? (i = f, a = c) : l >= 5 && l < 6 && (i = c, a = f);
    const u = o - c / 2;
    this.r = O((i + u) * 255), this.g = O((s + u) * 255), this.b = O((a + u) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: o,
    a: r
  }) {
    this._h = t % 360, this._s = n, this._v = o, this.a = typeof r == "number" ? r : 1;
    const i = O(o * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), l = s - a, c = O(o * (1 - n) * 255), f = O(o * (1 - n * l) * 255), u = O(o * (1 - n * (1 - l)) * 255);
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
  fromHsvString(t) {
    const n = Ce(t, at);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = Ce(t, at);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = Ce(t, (o, r) => (
      // Convert percentage to number. e.g. 50% -> 128
      r.includes("%") ? O(o / 100 * 255) : o
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
const on = {
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
}, sn = Object.assign(Object.assign({}, on), {
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
function we(e) {
  return e >= 0 && e <= 255;
}
function Z(e, t) {
  const {
    r: n,
    g: o,
    b: r,
    a: i
  } = new B(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: l
  } = new B(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const f = Math.round((n - s * (1 - c)) / c), u = Math.round((o - a * (1 - c)) / c), h = Math.round((r - l * (1 - c)) / c);
    if (we(f) && we(u) && we(h))
      return new B({
        r: f,
        g: u,
        b: h,
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
var an = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function ln(e) {
  const {
    override: t
  } = e, n = an(e, ["override"]), o = Object.assign({}, t);
  Object.keys(sn).forEach((h) => {
    delete o[h];
  });
  const r = Object.assign(Object.assign({}, n), o), i = 480, s = 576, a = 768, l = 992, c = 1200, f = 1600;
  if (r.motion === !1) {
    const h = "0s";
    r.motionDurationFast = h, r.motionDurationMid = h, r.motionDurationSlow = h;
  }
  return Object.assign(Object.assign(Object.assign({}, r), {
    // ============== Background ============== //
    colorFillContent: r.colorFillSecondary,
    colorFillContentHover: r.colorFill,
    colorFillAlter: r.colorFillQuaternary,
    colorBgContainerDisabled: r.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: r.colorBgContainer,
    colorSplit: Z(r.colorBorderSecondary, r.colorBgContainer),
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
    colorErrorOutline: Z(r.colorErrorBg, r.colorBgContainer),
    colorWarningOutline: Z(r.colorWarningBg, r.colorBgContainer),
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
    controlOutline: Z(r.colorPrimaryBg, r.colorBgContainer),
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
const cn = {
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
}, un = {
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
}, fn = Xt(Me.defaultAlgorithm), hn = {
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
}, _t = (e, t, n) => {
  const o = n.getDerivativeToken(e), {
    override: r,
    ...i
  } = t;
  let s = {
    ...o,
    override: r
  };
  return s = ln(s), i && Object.entries(i).forEach(([a, l]) => {
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
function dn() {
  const {
    token: e,
    hashed: t,
    theme: n = fn,
    override: o,
    cssVar: r
  } = b.useContext(Me._internalContext), [i, s, a] = Ft(n, [Me.defaultSeed, e], {
    salt: `${Ir}-${t || ""}`,
    override: o,
    getComputedToken: _t,
    cssVar: r && {
      prefix: r.prefix,
      key: r.key,
      unitless: cn,
      ignore: un,
      preserve: hn
    }
  });
  return [n, a, t ? s : "", i, r];
}
const {
  genStyleHooks: gn
} = tn({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = je();
    return {
      iconPrefixCls: t,
      rootPrefixCls: e()
    };
  },
  useToken: () => {
    const [e, t, n, o, r] = dn();
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
    } = je();
    return e ?? {};
  },
  layer: {
    name: "antdx",
    dependencies: ["antd"]
  }
}), pn = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e, o = n(e.fontSizeHeading3).mul(e.lineHeightHeading3).equal(), r = n(e.fontSize).mul(e.lineHeight).equal();
  return {
    [t]: {
      gap: e.padding,
      // ======================== Icon ========================
      [`${t}-icon`]: {
        height: n(o).add(r).add(e.paddingXXS).equal(),
        display: "flex",
        img: {
          height: "100%"
        }
      },
      // ==================== Content Wrap ====================
      [`${t}-content-wrapper`]: {
        gap: e.paddingXS,
        flex: "auto",
        minWidth: 0,
        [`${t}-title-wrapper`]: {
          gap: e.paddingXS
        },
        [`${t}-title`]: {
          margin: 0
        },
        [`${t}-extra`]: {
          marginInlineStart: "auto"
        }
      }
    }
  };
}, mn = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      // ======================== Filled ========================
      "&-filled": {
        paddingInline: e.padding,
        paddingBlock: e.paddingSM,
        background: e.colorFillContent,
        borderRadius: e.borderRadiusLG
      },
      // ====================== Borderless ======================
      "&-borderless": {
        [`${t}-title`]: {
          fontSize: e.fontSizeHeading3,
          lineHeight: e.lineHeightHeading3
        }
      }
    }
  };
}, bn = () => ({}), yn = gn("Welcome", (e) => {
  const t = He(e, {});
  return [pn(t), mn(t)];
}, bn);
function vn(e, t) {
  const {
    prefixCls: n,
    rootClassName: o,
    className: r,
    style: i,
    variant: s = "filled",
    // Semantic
    classNames: a = {},
    styles: l = {},
    // Layout
    icon: c,
    title: f,
    description: u,
    extra: h
  } = e, {
    direction: v,
    getPrefixCls: x
  } = je(), p = x("welcome", n), d = Lr("welcome"), [S, _, P] = yn(p), g = b.useMemo(() => {
    if (!c)
      return null;
    let w = c;
    return typeof c == "string" && c.startsWith("http") && (w = /* @__PURE__ */ b.createElement("img", {
      src: c,
      alt: "icon"
    })), /* @__PURE__ */ b.createElement("div", {
      className: W(`${p}-icon`, d.classNames.icon, a.icon),
      style: l.icon
    }, w);
  }, [c]), C = b.useMemo(() => f ? /* @__PURE__ */ b.createElement(Xe.Title, {
    level: 4,
    className: W(`${p}-title`, d.classNames.title, a.title),
    style: l.title
  }, f) : null, [f]), m = b.useMemo(() => h ? /* @__PURE__ */ b.createElement("div", {
    className: W(`${p}-extra`, d.classNames.extra, a.extra),
    style: l.extra
  }, h) : null, [h]);
  return S(/* @__PURE__ */ b.createElement(ye, {
    ref: t,
    className: W(p, d.className, r, o, _, P, `${p}-${s}`, {
      [`${p}-rtl`]: v === "rtl"
    }),
    style: i
  }, g, /* @__PURE__ */ b.createElement(ye, {
    vertical: !0,
    className: `${p}-content-wrapper`
  }, h ? /* @__PURE__ */ b.createElement(ye, {
    align: "flex-start",
    className: `${p}-title-wrapper`
  }, C, m) : C, u && /* @__PURE__ */ b.createElement(Xe.Text, {
    className: W(`${p}-description`, d.classNames.description, a.description),
    style: l.description
  }, u))));
}
const Sn = /* @__PURE__ */ b.forwardRef(vn), Cn = Or(({
  slots: e,
  children: t,
  ...n
}) => /* @__PURE__ */ $.jsxs($.Fragment, {
  children: [/* @__PURE__ */ $.jsx("div", {
    style: {
      display: "none"
    },
    children: t
  }), /* @__PURE__ */ $.jsx(Sn, {
    ...n,
    extra: e.extra ? /* @__PURE__ */ $.jsx(J, {
      slot: e.extra
    }) : n.extra,
    icon: e.icon ? /* @__PURE__ */ $.jsx(J, {
      slot: e.icon
    }) : n.icon,
    title: e.title ? /* @__PURE__ */ $.jsx(J, {
      slot: e.title
    }) : n.title,
    description: e.description ? /* @__PURE__ */ $.jsx(J, {
      slot: e.description
    }) : n.description
  })]
}));
export {
  Cn as Welcome,
  Cn as default
};
