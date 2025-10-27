import { i as Ut, a as Te, r as Wt, b as Gt, w as te, g as Kt, c as Ne, d as St } from "./Index-DCvCueJX.js";
const X = window.ms_globals.React, w = window.ms_globals.React, bt = window.ms_globals.React.forwardRef, yt = window.ms_globals.React.useRef, Ae = window.ms_globals.React.useState, vt = window.ms_globals.React.useEffect, J = window.ms_globals.React.useMemo, Pe = window.ms_globals.ReactDOM.createPortal, qt = window.ms_globals.internalContext.useContextPropsContext, Ue = window.ms_globals.internalContext.ContextPropsProvider, Qt = window.ms_globals.internalContext.SuggestionOpenContext, Jt = window.ms_globals.internalContext.SuggestionContext, Zt = window.ms_globals.createItemsContext.createItemsContext, Yt = window.ms_globals.antd.ConfigProvider, Me = window.ms_globals.antd.theme, er = window.ms_globals.antd.Cascader, tr = window.ms_globals.antd.Flex, We = window.ms_globals.antdCssinjs.unit, ve = window.ms_globals.antdCssinjs.token2CSSVar, Ge = window.ms_globals.antdCssinjs.useStyleRegister, rr = window.ms_globals.antdCssinjs.useCSSVarRegister, nr = window.ms_globals.antdCssinjs.createTheme, or = window.ms_globals.antdCssinjs.useCacheToken;
var ir = /\s/;
function sr(t) {
  for (var e = t.length; e-- && ir.test(t.charAt(e)); )
    ;
  return e;
}
var ar = /^\s+/;
function cr(t) {
  return t && t.slice(0, sr(t) + 1).replace(ar, "");
}
var Ke = NaN, lr = /^[-+]0x[0-9a-f]+$/i, ur = /^0b[01]+$/i, fr = /^0o[0-7]+$/i, hr = parseInt;
function qe(t) {
  if (typeof t == "number")
    return t;
  if (Ut(t))
    return Ke;
  if (Te(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Te(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = cr(t);
  var n = ur.test(t);
  return n || fr.test(t) ? hr(t.slice(2), n ? 2 : 8) : lr.test(t) ? Ke : +t;
}
var Se = function() {
  return Wt.Date.now();
}, dr = "Expected a function", gr = Math.max, pr = Math.min;
function mr(t, e, n) {
  var o, r, i, s, a, c, l = 0, h = !1, u = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(dr);
  e = qe(e) || 0, Te(n) && (h = !!n.leading, u = "maxWait" in n, i = u ? gr(qe(n.maxWait) || 0, e) : i, d = "trailing" in n ? !!n.trailing : d);
  function f(S) {
    var P = o, C = r;
    return o = r = void 0, l = S, s = t.apply(C, P), s;
  }
  function b(S) {
    return l = S, a = setTimeout(p, e), h ? f(S) : s;
  }
  function m(S) {
    var P = S - c, C = S - l, M = e - P;
    return u ? pr(M, i - C) : M;
  }
  function g(S) {
    var P = S - c, C = S - l;
    return c === void 0 || P >= e || P < 0 || u && C >= i;
  }
  function p() {
    var S = Se();
    if (g(S))
      return v(S);
    a = setTimeout(p, m(S));
  }
  function v(S) {
    return a = void 0, d && o ? f(S) : (o = r = void 0, s);
  }
  function x() {
    a !== void 0 && clearTimeout(a), l = 0, o = c = r = a = void 0;
  }
  function y() {
    return a === void 0 ? s : v(Se());
  }
  function O() {
    var S = Se(), P = g(S);
    if (o = arguments, r = this, c = S, P) {
      if (a === void 0)
        return b(c);
      if (u)
        return clearTimeout(a), a = setTimeout(p, e), f(c);
    }
    return a === void 0 && (a = setTimeout(p, e)), s;
  }
  return O.cancel = x, O.flush = y, O;
}
function br(t, e) {
  return Gt(t, e);
}
function Qe(t) {
  return t === void 0;
}
var xt = {
  exports: {}
}, se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr = w, vr = Symbol.for("react.element"), Sr = Symbol.for("react.fragment"), xr = Object.prototype.hasOwnProperty, _r = yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Cr = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function _t(t, e, n) {
  var o, r = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (o in e) xr.call(e, o) && !Cr.hasOwnProperty(o) && (r[o] = e[o]);
  if (t && t.defaultProps) for (o in e = t.defaultProps, e) r[o] === void 0 && (r[o] = e[o]);
  return {
    $$typeof: vr,
    type: t,
    key: i,
    ref: s,
    props: r,
    _owner: _r.current
  };
}
se.Fragment = Sr;
se.jsx = _t;
se.jsxs = _t;
xt.exports = se;
var L = xt.exports;
const {
  SvelteComponent: wr,
  assign: Je,
  binding_callbacks: Ze,
  check_outros: Or,
  children: Ct,
  claim_element: wt,
  claim_space: Pr,
  component_subscribe: Ye,
  compute_slots: Tr,
  create_slot: Mr,
  detach: K,
  element: Ot,
  empty: et,
  exclude_internal_props: tt,
  get_all_dirty_from_scope: Er,
  get_slot_changes: Ir,
  group_outros: kr,
  init: jr,
  insert_hydration: re,
  safe_not_equal: Rr,
  set_custom_element_data: Pt,
  space: Lr,
  transition_in: ne,
  transition_out: Ee,
  update_slot_base: Ar
} = window.__gradio__svelte__internal, {
  beforeUpdate: Dr,
  getContext: Hr,
  onDestroy: zr,
  setContext: Br
} = window.__gradio__svelte__internal;
function rt(t) {
  let e, n;
  const o = (
    /*#slots*/
    t[7].default
  ), r = Mr(
    o,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = Ot("svelte-slot"), r && r.c(), this.h();
    },
    l(i) {
      e = wt(i, "SVELTE-SLOT", {
        class: !0
      });
      var s = Ct(e);
      r && r.l(s), s.forEach(K), this.h();
    },
    h() {
      Pt(e, "class", "svelte-1rt0kpf");
    },
    m(i, s) {
      re(i, e, s), r && r.m(e, null), t[9](e), n = !0;
    },
    p(i, s) {
      r && r.p && (!n || s & /*$$scope*/
      64) && Ar(
        r,
        o,
        i,
        /*$$scope*/
        i[6],
        n ? Ir(
          o,
          /*$$scope*/
          i[6],
          s,
          null
        ) : Er(
          /*$$scope*/
          i[6]
        ),
        null
      );
    },
    i(i) {
      n || (ne(r, i), n = !0);
    },
    o(i) {
      Ee(r, i), n = !1;
    },
    d(i) {
      i && K(e), r && r.d(i), t[9](null);
    }
  };
}
function $r(t) {
  let e, n, o, r, i = (
    /*$$slots*/
    t[4].default && rt(t)
  );
  return {
    c() {
      e = Ot("react-portal-target"), n = Lr(), i && i.c(), o = et(), this.h();
    },
    l(s) {
      e = wt(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), Ct(e).forEach(K), n = Pr(s), i && i.l(s), o = et(), this.h();
    },
    h() {
      Pt(e, "class", "svelte-1rt0kpf");
    },
    m(s, a) {
      re(s, e, a), t[8](e), re(s, n, a), i && i.m(s, a), re(s, o, a), r = !0;
    },
    p(s, [a]) {
      /*$$slots*/
      s[4].default ? i ? (i.p(s, a), a & /*$$slots*/
      16 && ne(i, 1)) : (i = rt(s), i.c(), ne(i, 1), i.m(o.parentNode, o)) : i && (kr(), Ee(i, 1, 1, () => {
        i = null;
      }), Or());
    },
    i(s) {
      r || (ne(i), r = !0);
    },
    o(s) {
      Ee(i), r = !1;
    },
    d(s) {
      s && (K(e), K(n), K(o)), t[8](null), i && i.d(s);
    }
  };
}
function nt(t) {
  const {
    svelteInit: e,
    ...n
  } = t;
  return n;
}
function Fr(t, e, n) {
  let o, r, {
    $$slots: i = {},
    $$scope: s
  } = e;
  const a = Tr(i);
  let {
    svelteInit: c
  } = e;
  const l = te(nt(e)), h = te();
  Ye(t, h, (y) => n(0, o = y));
  const u = te();
  Ye(t, u, (y) => n(1, r = y));
  const d = [], f = Hr("$$ms-gr-react-wrapper"), {
    slotKey: b,
    slotIndex: m,
    subSlotIndex: g
  } = Kt() || {}, p = c({
    parent: f,
    props: l,
    target: h,
    slot: u,
    slotKey: b,
    slotIndex: m,
    subSlotIndex: g,
    onDestroy(y) {
      d.push(y);
    }
  });
  Br("$$ms-gr-react-wrapper", p), Dr(() => {
    l.set(nt(e));
  }), zr(() => {
    d.forEach((y) => y());
  });
  function v(y) {
    Ze[y ? "unshift" : "push"](() => {
      o = y, h.set(o);
    });
  }
  function x(y) {
    Ze[y ? "unshift" : "push"](() => {
      r = y, u.set(r);
    });
  }
  return t.$$set = (y) => {
    n(17, e = Je(Je({}, e), tt(y))), "svelteInit" in y && n(5, c = y.svelteInit), "$$scope" in y && n(6, s = y.$$scope);
  }, e = tt(e), [o, r, h, u, a, c, s, i, v, x];
}
class Vr extends wr {
  constructor(e) {
    super(), jr(this, e, Fr, $r, Rr, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: Qn
} = window.__gradio__svelte__internal, ot = window.ms_globals.rerender, xe = window.ms_globals.tree;
function Xr(t, e = {}) {
  function n(o) {
    const r = te(), i = new Vr({
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
          }, c = s.parent ?? xe;
          return c.nodes = [...c.nodes, a], ot({
            createPortal: Pe,
            node: xe
          }), s.onDestroy(() => {
            c.nodes = c.nodes.filter((l) => l.svelteInstance !== r), ot({
              createPortal: Pe,
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
const Nr = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Ur(t) {
  return t ? Object.keys(t).reduce((e, n) => {
    const o = t[n];
    return e[n] = Wr(n, o), e;
  }, {}) : {};
}
function Wr(t, e) {
  return typeof e == "number" && !Nr.includes(t) ? e + "px" : e;
}
function Ie(t) {
  const e = [], n = t.cloneNode(!1);
  if (t._reactElement) {
    const r = w.Children.toArray(t._reactElement.props.children).map((i) => {
      if (w.isValidElement(i) && i.props.__slot__) {
        const {
          portals: s,
          clonedElement: a
        } = Ie(i.props.el);
        return w.cloneElement(i, {
          ...i.props,
          el: a,
          children: [...w.Children.toArray(i.props.children), ...s]
        });
      }
      return null;
    });
    return r.originalChildren = t._reactElement.props.children, e.push(Pe(w.cloneElement(t._reactElement, {
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
      useCapture: c
    }) => {
      n.addEventListener(a, s, c);
    });
  });
  const o = Array.from(t.childNodes);
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (i.nodeType === 1) {
      const {
        clonedElement: s,
        portals: a
      } = Ie(i);
      e.push(...a), n.appendChild(s);
    } else i.nodeType === 3 && n.appendChild(i.cloneNode());
  }
  return {
    clonedElement: n,
    portals: e
  };
}
function Gr(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const ke = bt(({
  slot: t,
  clone: e,
  className: n,
  style: o,
  observeAttributes: r
}, i) => {
  const s = yt(), [a, c] = Ae([]), {
    forceClone: l
  } = qt(), h = l ? !0 : e;
  return vt(() => {
    var m;
    if (!s.current || !t)
      return;
    let u = t;
    function d() {
      let g = u;
      if (u.tagName.toLowerCase() === "svelte-slot" && u.children.length === 1 && u.children[0] && (g = u.children[0], g.tagName.toLowerCase() === "react-portal-target" && g.children[0] && (g = g.children[0])), Gr(i, g), n && g.classList.add(...n.split(" ")), o) {
        const p = Ur(o);
        Object.keys(p).forEach((v) => {
          g.style[v] = p[v];
        });
      }
    }
    let f = null, b = null;
    if (h && window.MutationObserver) {
      let g = function() {
        var y, O, S;
        (y = s.current) != null && y.contains(u) && ((O = s.current) == null || O.removeChild(u));
        const {
          portals: v,
          clonedElement: x
        } = Ie(t);
        u = x, c(v), u.style.display = "contents", b && clearTimeout(b), b = setTimeout(() => {
          d();
        }, 50), (S = s.current) == null || S.appendChild(u);
      };
      g();
      const p = mr(() => {
        g(), f == null || f.disconnect(), f == null || f.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      f = new window.MutationObserver(p), f.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      u.style.display = "contents", d(), (m = s.current) == null || m.appendChild(u);
    return () => {
      var g, p;
      u.style.display = "", (g = s.current) != null && g.contains(u) && ((p = s.current) == null || p.removeChild(u)), f == null || f.disconnect();
    };
  }, [t, h, n, o, i, r, l]), w.createElement("react-child", {
    ref: s,
    style: {
      display: "contents"
    }
  }, ...a);
}), Kr = "1.0.5", qr = /* @__PURE__ */ w.createContext({}), Qr = {
  classNames: {},
  styles: {},
  className: "",
  style: {}
}, Jr = (t) => {
  const e = w.useContext(qr);
  return w.useMemo(() => ({
    ...Qr,
    ...e[t]
  }), [e[t]]);
};
function je() {
  const {
    getPrefixCls: t,
    direction: e,
    csp: n,
    iconPrefixCls: o,
    theme: r
  } = w.useContext(Yt.ConfigContext);
  return {
    theme: r,
    getPrefixCls: t,
    direction: e,
    csp: n,
    iconPrefixCls: o
  };
}
function oe(t) {
  var e = X.useRef();
  e.current = t;
  var n = X.useCallback(function() {
    for (var o, r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return (o = e.current) === null || o === void 0 ? void 0 : o.call.apply(o, [e].concat(i));
  }, []);
  return n;
}
function Zr(t) {
  if (Array.isArray(t)) return t;
}
function Yr(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var o, r, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (n = n.call(t)).next, e === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (o = i.call(n)).done) && (a.push(o.value), a.length !== e); c = !0) ;
    } catch (h) {
      l = !0, r = h;
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
function it(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function en(t, e) {
  if (t) {
    if (typeof t == "string") return it(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? it(t, e) : void 0;
  }
}
function tn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function U(t, e) {
  return Zr(t) || Yr(t, e) || en(t, e) || tn();
}
function rn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var st = rn() ? X.useLayoutEffect : X.useEffect, nn = function(e, n) {
  var o = X.useRef(!0);
  st(function() {
    return e(o.current);
  }, n), st(function() {
    return o.current = !1, function() {
      o.current = !0;
    };
  }, []);
}, at = function(e, n) {
  nn(function(o) {
    if (!o)
      return e();
  }, n);
};
function ct(t) {
  var e = X.useRef(!1), n = X.useState(t), o = U(n, 2), r = o[0], i = o[1];
  X.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []);
  function s(a, c) {
    c && e.current || i(a);
  }
  return [r, s];
}
function _e(t) {
  return t !== void 0;
}
function on(t, e) {
  var n = e || {}, o = n.defaultValue, r = n.value, i = n.onChange, s = n.postState, a = ct(function() {
    return _e(r) ? r : _e(o) ? typeof o == "function" ? o() : o : t;
  }), c = U(a, 2), l = c[0], h = c[1], u = r !== void 0 ? r : l, d = s ? s(u) : u, f = oe(i), b = ct([u]), m = U(b, 2), g = m[0], p = m[1];
  at(function() {
    var x = g[0];
    l !== x && f(l, x);
  }, [g]), at(function() {
    _e(r) || h(r);
  }, [r]);
  var v = oe(function(x, y) {
    h(x, y), p([u], y);
  });
  return [d, v];
}
function B(t) {
  "@babel/helpers - typeof";
  return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, B(t);
}
var _ = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De = Symbol.for("react.element"), He = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), ce = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), ue = Symbol.for("react.provider"), fe = Symbol.for("react.context"), sn = Symbol.for("react.server_context"), he = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), pe = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), an = Symbol.for("react.offscreen"), Tt;
Tt = Symbol.for("react.module.reference");
function H(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case De:
        switch (t = t.type, t) {
          case ae:
          case le:
          case ce:
          case de:
          case ge:
            return t;
          default:
            switch (t = t && t.$$typeof, t) {
              case sn:
              case fe:
              case he:
              case me:
              case pe:
              case ue:
                return t;
              default:
                return e;
            }
        }
      case He:
        return e;
    }
  }
}
_.ContextConsumer = fe;
_.ContextProvider = ue;
_.Element = De;
_.ForwardRef = he;
_.Fragment = ae;
_.Lazy = me;
_.Memo = pe;
_.Portal = He;
_.Profiler = le;
_.StrictMode = ce;
_.Suspense = de;
_.SuspenseList = ge;
_.isAsyncMode = function() {
  return !1;
};
_.isConcurrentMode = function() {
  return !1;
};
_.isContextConsumer = function(t) {
  return H(t) === fe;
};
_.isContextProvider = function(t) {
  return H(t) === ue;
};
_.isElement = function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === De;
};
_.isForwardRef = function(t) {
  return H(t) === he;
};
_.isFragment = function(t) {
  return H(t) === ae;
};
_.isLazy = function(t) {
  return H(t) === me;
};
_.isMemo = function(t) {
  return H(t) === pe;
};
_.isPortal = function(t) {
  return H(t) === He;
};
_.isProfiler = function(t) {
  return H(t) === le;
};
_.isStrictMode = function(t) {
  return H(t) === ce;
};
_.isSuspense = function(t) {
  return H(t) === de;
};
_.isSuspenseList = function(t) {
  return H(t) === ge;
};
_.isValidElementType = function(t) {
  return typeof t == "string" || typeof t == "function" || t === ae || t === le || t === ce || t === de || t === ge || t === an || typeof t == "object" && t !== null && (t.$$typeof === me || t.$$typeof === pe || t.$$typeof === ue || t.$$typeof === fe || t.$$typeof === he || t.$$typeof === Tt || t.getModuleId !== void 0);
};
_.typeOf = H;
function cn(t, e) {
  if (B(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (B(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Mt(t) {
  var e = cn(t, "string");
  return B(e) == "symbol" ? e : e + "";
}
function z(t, e, n) {
  return (e = Mt(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function lt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function R(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? lt(Object(n), !0).forEach(function(o) {
      z(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function be(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function ln(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, Mt(o.key), o);
  }
}
function ye(t, e, n) {
  return e && ln(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Re(t, e) {
  return Re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Re(t, e);
}
function Et(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && Re(t, e);
}
function ie(t) {
  return ie = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, ie(t);
}
function It() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (It = function() {
    return !!t;
  })();
}
function Q(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function un(t, e) {
  if (e && (B(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Q(t);
}
function kt(t) {
  var e = It();
  return function() {
    var n, o = ie(t);
    if (e) {
      var r = ie(this).constructor;
      n = Reflect.construct(o, arguments, r);
    } else n = o.apply(this, arguments);
    return un(this, n);
  };
}
var jt = /* @__PURE__ */ ye(function t() {
  be(this, t);
}), Rt = "CALC_UNIT", fn = new RegExp(Rt, "g");
function Ce(t) {
  return typeof t == "number" ? "".concat(t).concat(Rt) : t;
}
var hn = /* @__PURE__ */ function(t) {
  Et(n, t);
  var e = kt(n);
  function n(o, r) {
    var i;
    be(this, n), i = e.call(this), z(Q(i), "result", ""), z(Q(i), "unitlessCssVar", void 0), z(Q(i), "lowPriority", void 0);
    var s = B(o);
    return i.unitlessCssVar = r, o instanceof n ? i.result = "(".concat(o.result, ")") : s === "number" ? i.result = Ce(o) : s === "string" && (i.result = o), i;
  }
  return ye(n, [{
    key: "add",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " + ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " + ").concat(Ce(r))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " - ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " - ").concat(Ce(r))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(fn, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(jt), dn = /* @__PURE__ */ function(t) {
  Et(n, t);
  var e = kt(n);
  function n(o) {
    var r;
    return be(this, n), r = e.call(this), z(Q(r), "result", 0), o instanceof n ? r.result = o.result : typeof o == "number" && (r.result = o), r;
  }
  return ye(n, [{
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
}(jt), gn = function(e, n) {
  var o = e === "css" ? hn : dn;
  return function(r) {
    return new o(r, n);
  };
}, ut = function(e, n) {
  return "".concat([n, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function ft(t, e, n, o) {
  var r = R({}, e[t]);
  if (o != null && o.deprecatedTokens) {
    var i = o.deprecatedTokens;
    i.forEach(function(a) {
      var c = U(a, 2), l = c[0], h = c[1];
      if (r != null && r[l] || r != null && r[h]) {
        var u;
        (u = r[h]) !== null && u !== void 0 || (r[h] = r == null ? void 0 : r[l]);
      }
    });
  }
  var s = R(R({}, n), r);
  return Object.keys(s).forEach(function(a) {
    s[a] === e[a] && delete s[a];
  }), s;
}
var Lt = typeof CSSINJS_STATISTIC < "u", Le = !0;
function ze() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  if (!Lt)
    return Object.assign.apply(Object, [{}].concat(e));
  Le = !1;
  var o = {};
  return e.forEach(function(r) {
    if (B(r) === "object") {
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
  }), Le = !0, o;
}
var ht = {};
function pn() {
}
var mn = function(e) {
  var n, o = e, r = pn;
  return Lt && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), o = new Proxy(e, {
    get: function(s, a) {
      if (Le) {
        var c;
        (c = n) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), r = function(s, a) {
    var c;
    ht[s] = {
      global: Array.from(n),
      component: R(R({}, (c = ht[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: o,
    keys: n,
    flush: r
  };
};
function dt(t, e, n) {
  if (typeof n == "function") {
    var o;
    return n(ze(e, (o = e[t]) !== null && o !== void 0 ? o : {}));
  }
  return n ?? {};
}
function bn(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "max(".concat(o.map(function(i) {
        return We(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "min(".concat(o.map(function(i) {
        return We(i);
      }).join(","), ")");
    }
  };
}
var yn = 1e3 * 60 * 10, vn = /* @__PURE__ */ function() {
  function t() {
    be(this, t), z(this, "map", /* @__PURE__ */ new Map()), z(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), z(this, "nextID", 0), z(this, "lastAccessBeat", /* @__PURE__ */ new Map()), z(this, "accessBeat", 0);
  }
  return ye(t, [{
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
        return i && B(i) === "object" ? "obj_".concat(o.getObjectID(i)) : "".concat(B(i), "_").concat(i);
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
          o - r > yn && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), gt = new vn();
function Sn(t, e) {
  return w.useMemo(function() {
    var n = gt.get(e);
    if (n)
      return n;
    var o = t();
    return gt.set(e, o), o;
  }, e);
}
var xn = function() {
  return {};
};
function _n(t) {
  var e = t.useCSP, n = e === void 0 ? xn : e, o = t.useToken, r = t.usePrefix, i = t.getResetStyles, s = t.getCommonStyle, a = t.getCompUnitless;
  function c(d, f, b, m) {
    var g = Array.isArray(d) ? d[0] : d;
    function p(C) {
      return "".concat(String(g)).concat(C.slice(0, 1).toUpperCase()).concat(C.slice(1));
    }
    var v = (m == null ? void 0 : m.unitless) || {}, x = typeof a == "function" ? a(d) : {}, y = R(R({}, x), {}, z({}, p("zIndexPopup"), !0));
    Object.keys(v).forEach(function(C) {
      y[p(C)] = v[C];
    });
    var O = R(R({}, m), {}, {
      unitless: y,
      prefixToken: p
    }), S = h(d, f, b, O), P = l(g, b, O);
    return function(C) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, k = S(C, M), $ = U(k, 2), E = $[1], F = P(M), j = U(F, 2), A = j[0], W = j[1];
      return [A, E, W];
    };
  }
  function l(d, f, b) {
    var m = b.unitless, g = b.injectStyle, p = g === void 0 ? !0 : g, v = b.prefixToken, x = b.ignore, y = function(P) {
      var C = P.rootCls, M = P.cssVar, k = M === void 0 ? {} : M, $ = o(), E = $.realToken;
      return rr({
        path: [d],
        prefix: k.prefix,
        key: k.key,
        unitless: m,
        ignore: x,
        token: E,
        scope: C
      }, function() {
        var F = dt(d, E, f), j = ft(d, E, F, {
          deprecatedTokens: b == null ? void 0 : b.deprecatedTokens
        });
        return Object.keys(F).forEach(function(A) {
          j[v(A)] = j[A], delete j[A];
        }), j;
      }), null;
    }, O = function(P) {
      var C = o(), M = C.cssVar;
      return [function(k) {
        return p && M ? /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(y, {
          rootCls: P,
          cssVar: M,
          component: d
        }), k) : k;
      }, M == null ? void 0 : M.key];
    };
    return O;
  }
  function h(d, f, b) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = Array.isArray(d) ? d : [d, d], p = U(g, 1), v = p[0], x = g.join("-"), y = t.layer || {
      name: "antd"
    };
    return function(O) {
      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O, P = o(), C = P.theme, M = P.realToken, k = P.hashId, $ = P.token, E = P.cssVar, F = r(), j = F.rootPrefixCls, A = F.iconPrefixCls, W = n(), T = E ? "css" : "js", Ht = Sn(function() {
        var N = /* @__PURE__ */ new Set();
        return E && Object.keys(m.unitless || {}).forEach(function(Y) {
          N.add(ve(Y, E.prefix)), N.add(ve(Y, ut(v, E.prefix)));
        }), gn(T, N);
      }, [T, v, E == null ? void 0 : E.prefix]), Be = bn(T), zt = Be.max, Bt = Be.min, $e = {
        theme: C,
        token: $,
        hashId: k,
        nonce: function() {
          return W.nonce;
        },
        clientOnly: m.clientOnly,
        layer: y,
        // antd is always at top of styles
        order: m.order || -999
      };
      typeof i == "function" && Ge(R(R({}, $e), {}, {
        clientOnly: !1,
        path: ["Shared", j]
      }), function() {
        return i($, {
          prefix: {
            rootPrefixCls: j,
            iconPrefixCls: A
          },
          csp: W
        });
      });
      var $t = Ge(R(R({}, $e), {}, {
        path: [x, O, A]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var N = mn($), Y = N.token, Ft = N.flush, G = dt(v, M, b), Vt = ".".concat(O), Fe = ft(v, M, G, {
          deprecatedTokens: m.deprecatedTokens
        });
        E && G && B(G) === "object" && Object.keys(G).forEach(function(Xe) {
          G[Xe] = "var(".concat(ve(Xe, ut(v, E.prefix)), ")");
        });
        var Ve = ze(Y, {
          componentCls: Vt,
          prefixCls: O,
          iconCls: ".".concat(A),
          antCls: ".".concat(j),
          calc: Ht,
          // @ts-ignore
          max: zt,
          // @ts-ignore
          min: Bt
        }, E ? G : Fe), Xt = f(Ve, {
          hashId: k,
          prefixCls: O,
          rootPrefixCls: j,
          iconPrefixCls: A
        });
        Ft(v, Fe);
        var Nt = typeof s == "function" ? s(Ve, O, S, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : Nt, Xt];
      });
      return [$t, k];
    };
  }
  function u(d, f, b) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = h(d, f, b, R({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), p = function(x) {
      var y = x.prefixCls, O = x.rootCls, S = O === void 0 ? y : O;
      return g(y, S), null;
    };
    return p;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: u,
    genComponentStyleHook: h
  };
}
function Z(t) {
  "@babel/helpers - typeof";
  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Z(t);
}
function Cn(t, e) {
  if (Z(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Z(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function wn(t) {
  var e = Cn(t, "string");
  return Z(e) == "symbol" ? e : e + "";
}
function D(t, e, n) {
  return (e = wn(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
const I = Math.round;
function we(t, e) {
  const n = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], o = n.map((r) => parseFloat(r));
  for (let r = 0; r < 3; r += 1)
    o[r] = e(o[r] || 0, n[r] || "", r);
  return n[3] ? o[3] = n[3].includes("%") ? o[3] / 100 : o[3] : o[3] = 1, o;
}
const pt = (t, e, n) => n === 0 ? t : t / 100;
function q(t, e) {
  const n = e || 255;
  return t > n ? n : t < 0 ? 0 : t;
}
class V {
  constructor(e) {
    D(this, "isValid", !0), D(this, "r", 0), D(this, "g", 0), D(this, "b", 0), D(this, "a", 1), D(this, "_h", void 0), D(this, "_s", void 0), D(this, "_l", void 0), D(this, "_v", void 0), D(this, "_max", void 0), D(this, "_min", void 0), D(this, "_brightness", void 0);
    function n(o) {
      return o[0] in e && o[1] in e && o[2] in e;
    }
    if (e) if (typeof e == "string") {
      let r = function(i) {
        return o.startsWith(i);
      };
      const o = e.trim();
      /^#?[A-F\d]{3,8}$/i.test(o) ? this.fromHexString(o) : r("rgb") ? this.fromRgbString(o) : r("hsl") ? this.fromHslString(o) : (r("hsv") || r("hsb")) && this.fromHsvString(o);
    } else if (e instanceof V)
      this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a, this._h = e._h, this._s = e._s, this._l = e._l, this._v = e._v;
    else if (n("rgb"))
      this.r = q(e.r), this.g = q(e.g), this.b = q(e.b), this.a = typeof e.a == "number" ? q(e.a, 1) : 1;
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
      e === 0 ? this._h = 0 : this._h = I(60 * (this.r === this.getMax() ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / e + 2 : (this.r - this.g) / e + 4));
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
      r: I(i("r")),
      g: I(i("g")),
      b: I(i("b")),
      a: I(i("a") * 100) / 100
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
    const n = this._c(e), o = this.a + n.a * (1 - this.a), r = (i) => I((this[i] * this.a + n[i] * n.a * (1 - this.a)) / o);
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
      const i = I(this.a * 255).toString(16);
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
    const e = this.getHue(), n = I(this.getSaturation() * 100), o = I(this.getLightness() * 100);
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
    return r[e] = q(n, o), r;
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
      const d = I(o * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const c = e / 60, l = (1 - Math.abs(2 * o - 1)) * n, h = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = h) : c >= 1 && c < 2 ? (i = h, s = l) : c >= 2 && c < 3 ? (s = l, a = h) : c >= 3 && c < 4 ? (s = h, a = l) : c >= 4 && c < 5 ? (i = h, a = l) : c >= 5 && c < 6 && (i = l, a = h);
    const u = o - l / 2;
    this.r = I((i + u) * 255), this.g = I((s + u) * 255), this.b = I((a + u) * 255);
  }
  fromHsv({
    h: e,
    s: n,
    v: o,
    a: r
  }) {
    this._h = e % 360, this._s = n, this._v = o, this.a = typeof r == "number" ? r : 1;
    const i = I(o * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = e / 60, a = Math.floor(s), c = s - a, l = I(o * (1 - n) * 255), h = I(o * (1 - n * c) * 255), u = I(o * (1 - n * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = u, this.b = l;
        break;
      case 1:
        this.r = h, this.b = l;
        break;
      case 2:
        this.r = l, this.b = u;
        break;
      case 3:
        this.r = l, this.g = h;
        break;
      case 4:
        this.r = u, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = h;
        break;
    }
  }
  fromHsvString(e) {
    const n = we(e, pt);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(e) {
    const n = we(e, pt);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(e) {
    const n = we(e, (o, r) => (
      // Convert percentage to number. e.g. 50% -> 128
      r.includes("%") ? I(o / 100 * 255) : o
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
const On = {
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
}, Pn = Object.assign(Object.assign({}, On), {
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
function Oe(t) {
  return t >= 0 && t <= 255;
}
function ee(t, e) {
  const {
    r: n,
    g: o,
    b: r,
    a: i
  } = new V(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: s,
    g: a,
    b: c
  } = new V(e).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const h = Math.round((n - s * (1 - l)) / l), u = Math.round((o - a * (1 - l)) / l), d = Math.round((r - c * (1 - l)) / l);
    if (Oe(h) && Oe(u) && Oe(d))
      return new V({
        r: h,
        g: u,
        b: d,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new V({
    r: n,
    g: o,
    b: r,
    a: 1
  }).toRgbString();
}
var Tn = function(t, e) {
  var n = {};
  for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(t); r < o.length; r++)
    e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]]);
  return n;
};
function Mn(t) {
  const {
    override: e
  } = t, n = Tn(t, ["override"]), o = Object.assign({}, e);
  Object.keys(Pn).forEach((d) => {
    delete o[d];
  });
  const r = Object.assign(Object.assign({}, n), o), i = 480, s = 576, a = 768, c = 992, l = 1200, h = 1600;
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
    colorSplit: ee(r.colorBorderSecondary, r.colorBgContainer),
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
    colorErrorOutline: ee(r.colorErrorBg, r.colorBgContainer),
    colorWarningOutline: ee(r.colorWarningBg, r.colorBgContainer),
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
    controlOutline: ee(r.colorPrimaryBg, r.colorBgContainer),
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
    screenXLMax: h - 1,
    screenXXL: h,
    screenXXLMin: h,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new V("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new V("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new V("rgba(0, 0, 0, 0.09)").toRgbString()}
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
const En = {
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
}, In = {
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
}, kn = nr(Me.defaultAlgorithm), jn = {
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
}, At = (t, e, n) => {
  const o = n.getDerivativeToken(t), {
    override: r,
    ...i
  } = e;
  let s = {
    ...o,
    override: r
  };
  return s = Mn(s), i && Object.entries(i).forEach(([a, c]) => {
    const {
      theme: l,
      ...h
    } = c;
    let u = h;
    l && (u = At({
      ...s,
      ...h
    }, {
      override: h
    }, l)), s[a] = u;
  }), s;
};
function Rn() {
  const {
    token: t,
    hashed: e,
    theme: n = kn,
    override: o,
    cssVar: r
  } = w.useContext(Me._internalContext), [i, s, a] = or(n, [Me.defaultSeed, t], {
    salt: `${Kr}-${e || ""}`,
    override: o,
    getComputedToken: At,
    cssVar: r && {
      prefix: r.prefix,
      key: r.key,
      unitless: En,
      ignore: In,
      preserve: jn
    }
  });
  return [n, a, e ? s : "", i, r];
}
const {
  genStyleHooks: Ln
} = _n({
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
    const [t, e, n, o, r] = Rn();
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
}), An = (t) => {
  const {
    componentCls: e,
    antCls: n
  } = t;
  return {
    [e]: {
      [`${n}-cascader-menus ${n}-cascader-menu`]: {
        height: "auto"
      },
      [`${e}-item`]: {
        "&-icon": {
          marginInlineEnd: t.paddingXXS
        },
        "&-extra": {
          marginInlineStart: t.padding
        }
      },
      [`&${e}-block`]: {
        [`${e}-item-extra`]: {
          marginInlineStart: "auto"
        }
      }
    }
  };
}, Dn = () => ({}), Hn = Ln("Suggestion", (t) => {
  const e = ze(t, {});
  return An(e);
}, Dn);
function zn(t, e, n, o, r) {
  const [i, s] = w.useState([]), a = (f, b = i) => {
    let m = t;
    for (let g = 0; g < f - 1; g += 1) {
      const p = b[g], v = m.find((x) => x.value === p);
      if (!v)
        break;
      m = v.children || [];
    }
    return m;
  }, c = (f) => f.map((b, m) => {
    const p = a(m + 1, f).find((v) => v.value === b);
    return p == null ? void 0 : p.value;
  }), l = (f) => {
    const b = i.length || 1, m = a(b), g = m.findIndex((x) => x.value === i[b - 1]), p = m.length, v = m[(g + f + p) % p];
    s([...i.slice(0, b - 1), v.value]);
  }, h = () => {
    i.length > 1 && s(i.slice(0, i.length - 1));
  }, u = () => {
    const f = a(i.length + 1);
    f.length && s([...i, f[0].value]);
  }, d = oe((f) => {
    if (e)
      switch (f.key) {
        case "ArrowDown":
          l(1), f.preventDefault();
          break;
        case "ArrowUp":
          l(-1), f.preventDefault();
          break;
        case "ArrowRight":
          n ? h() : u(), f.preventDefault();
          break;
        case "ArrowLeft":
          n ? u() : h(), f.preventDefault();
          break;
        case "Enter":
          a(i.length + 1).length || o(c(i)), f.preventDefault();
          break;
        case "Escape":
          r(), f.preventDefault();
          break;
      }
  });
  return w.useEffect(() => {
    e && s([t[0].value]);
  }, [e]), [i, d];
}
function Bn(t) {
  const {
    prefixCls: e,
    className: n,
    rootClassName: o,
    style: r,
    children: i,
    open: s,
    onOpenChange: a,
    items: c,
    onSelect: l,
    block: h
  } = t, {
    direction: u,
    getPrefixCls: d
  } = je(), f = d("suggestion", e), b = `${f}-item`, m = u === "rtl", g = Jr("suggestion"), [p, v, x] = Hn(f), [y, O] = on(!1, {
    value: s
  }), [S, P] = Ae(), C = (T) => {
    O(T), a == null || a(T);
  }, M = oe((T) => {
    T === !1 ? C(!1) : (P(T), C(!0));
  }), k = () => {
    C(!1);
  }, $ = w.useMemo(() => typeof c == "function" ? c(S) : c, [c, S]), E = (T) => /* @__PURE__ */ w.createElement(tr, {
    className: b
  }, T.icon && /* @__PURE__ */ w.createElement("div", {
    className: `${b}-icon`
  }, T.icon), T.label, T.extra && /* @__PURE__ */ w.createElement("div", {
    className: `${b}-extra`
  }, T.extra)), F = (T) => {
    l && l(T[T.length - 1]), C(!1);
  }, [j, A] = zn($, y, m, F, k), W = i == null ? void 0 : i({
    onTrigger: M,
    onKeyDown: A
  });
  return p(/* @__PURE__ */ w.createElement(er, {
    options: $,
    open: y,
    value: j,
    placement: m ? "topRight" : "topLeft",
    onDropdownVisibleChange: (T) => {
      T || k();
    },
    optionRender: E,
    rootClassName: Ne(o, f, v, x, {
      [`${f}-block`]: h
    }),
    onChange: F,
    dropdownMatchSelectWidth: h
  }, /* @__PURE__ */ w.createElement("div", {
    className: Ne(f, g.className, o, n, `${f}-wrapper`, v, x),
    style: {
      ...g.style,
      ...r
    }
  }, W)));
}
function $n(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function Fn(t, e = !1) {
  try {
    if (St(t))
      return t;
    if (e && !$n(t))
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
function mt(t, e) {
  return J(() => Fn(t, e), [t, e]);
}
function Vn(t) {
  const e = yt();
  return J(() => br(t, e.current) ? e.current : (e.current = t, t), [t]);
}
function Xn(t, e) {
  return e((o, r) => St(o) ? r ? (...i) => o(...i, ...t) : o(...t) : o);
}
const Nn = ({
  children: t,
  ...e
}) => /* @__PURE__ */ L.jsx(L.Fragment, {
  children: t(e)
});
function Un(t) {
  return w.createElement(Nn, {
    children: t
  });
}
function Dt(t, e, n) {
  const o = t.filter(Boolean);
  if (o.length !== 0)
    return o.map((r, i) => {
      var l;
      if (typeof r != "object")
        return e != null && e.fallback ? e.fallback(r) : r;
      const s = {
        ...r.props,
        key: ((l = r.props) == null ? void 0 : l.key) ?? (n ? `${n}-${i}` : `${i}`)
      };
      let a = s;
      Object.keys(r.slots).forEach((h) => {
        if (!r.slots[h] || !(r.slots[h] instanceof Element) && !r.slots[h].el)
          return;
        const u = h.split(".");
        u.forEach((p, v) => {
          a[p] || (a[p] = {}), v !== u.length - 1 && (a = s[p]);
        });
        const d = r.slots[h];
        let f, b, m = (e == null ? void 0 : e.clone) ?? !1, g = e == null ? void 0 : e.forceClone;
        d instanceof Element ? f = d : (f = d.el, b = d.callback, m = d.clone ?? m, g = d.forceClone ?? g), g = g ?? !!b, a[u[u.length - 1]] = f ? b ? (...p) => (b(u[u.length - 1], p), /* @__PURE__ */ L.jsx(Ue, {
          ...r.ctx,
          params: p,
          forceClone: g,
          children: /* @__PURE__ */ L.jsx(ke, {
            slot: f,
            clone: m
          })
        })) : Un((p) => /* @__PURE__ */ L.jsx(Ue, {
          ...r.ctx,
          forceClone: g,
          children: /* @__PURE__ */ L.jsx(ke, {
            ...p,
            slot: f,
            clone: m
          })
        })) : a[u[u.length - 1]], a = s;
      });
      const c = (e == null ? void 0 : e.children) || "children";
      return r[c] ? s[c] = Dt(r[c], e, `${i}`) : e != null && e.children && (s[c] = void 0, Reflect.deleteProperty(s, c)), s;
    });
}
const {
  useItems: Wn,
  withItemsContextProvider: Gn,
  ItemHandler: Jn
} = Zt("antdx-suggestion-chain-items"), Kn = bt(({
  children: t,
  props: e,
  shouldTrigger: n
}, o) => {
  const r = Vn(e);
  return /* @__PURE__ */ L.jsx(Jt.Provider, {
    value: J(() => ({
      ...r,
      onKeyDown: (i) => {
        var s;
        n ? requestAnimationFrame(() => {
          n(i, {
            onTrigger: r.onTrigger,
            onKeyDown: r.onKeyDown
          });
        }) : (s = r.onKeyDown) == null || s.call(r, i);
      },
      elRef: o
    }), [r, n, o]),
    children: t
  });
}), Zn = Xr(Gn(["default", "items"], ({
  children: t,
  items: e,
  shouldTrigger: n,
  slots: o,
  ...r
}) => {
  const [i, s] = Ae(() => r.open ?? !1), {
    items: a
  } = Wn(), c = a.items.length > 0 ? a.items : a.default, l = mt(e), h = mt(n), u = J(() => e || Dt(c, {
    clone: !0
  }) || [{}], [e, c]), d = J(() => (...f) => u.map((b) => Xn(f, (m) => {
    const g = (p) => {
      var v;
      return {
        ...p,
        extra: m(p.extra),
        icon: m(p.icon),
        label: m(p.label),
        children: (v = p.children) == null ? void 0 : v.map((x) => g(x))
      };
    };
    return g(b);
  })), [u]);
  return vt(() => {
    Qe(r.open) || s(r.open);
  }, [r.open]), /* @__PURE__ */ L.jsx(L.Fragment, {
    children: /* @__PURE__ */ L.jsx(Bn, {
      ...r,
      items: l || d,
      onOpenChange: (f, ...b) => {
        var m;
        Qe(r.open) && s(f), (m = r.onOpenChange) == null || m.call(r, f, ...b);
      },
      children: (f) => /* @__PURE__ */ L.jsx(Qt.Provider, {
        value: i,
        children: /* @__PURE__ */ L.jsxs(Kn, {
          props: f,
          shouldTrigger: h,
          children: [/* @__PURE__ */ L.jsx("div", {
            style: {
              display: "none"
            },
            children: t
          }), o.children ? /* @__PURE__ */ L.jsx(ke, {
            slot: o.children
          }) : null]
        })
      })
    })
  });
}));
export {
  Zn as Suggestion,
  Zn as default
};
