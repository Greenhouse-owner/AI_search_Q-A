import { i as tr, a as Ie, r as rr, w as te, g as nr, c as oe, b as Ct } from "./Index-CZtwl59f.js";
const V = window.ms_globals.React, y = window.ms_globals.React, Jt = window.ms_globals.React.forwardRef, Zt = window.ms_globals.React.useRef, Yt = window.ms_globals.React.useState, er = window.ms_globals.React.useEffect, Me = window.ms_globals.React.useMemo, je = window.ms_globals.ReactDOM.createPortal, or = window.ms_globals.internalContext.useContextPropsContext, ke = window.ms_globals.internalContext.ContextPropsProvider, _t = window.ms_globals.createItemsContext.createItemsContext, ir = window.ms_globals.antd.ConfigProvider, Le = window.ms_globals.antd.theme, wt = window.ms_globals.antd.Typography, sr = window.ms_globals.antd.Tooltip, ar = window.ms_globals.antd.Dropdown, lr = window.ms_globals.antdIcons.EllipsisOutlined, ie = window.ms_globals.antdCssinjs.unit, xe = window.ms_globals.antdCssinjs.token2CSSVar, Ke = window.ms_globals.antdCssinjs.useStyleRegister, cr = window.ms_globals.antdCssinjs.useCSSVarRegister, ur = window.ms_globals.antdCssinjs.createTheme, fr = window.ms_globals.antdCssinjs.useCacheToken;
var dr = /\s/;
function hr(t) {
  for (var e = t.length; e-- && dr.test(t.charAt(e)); )
    ;
  return e;
}
var gr = /^\s+/;
function mr(t) {
  return t && t.slice(0, hr(t) + 1).replace(gr, "");
}
var qe = NaN, pr = /^[-+]0x[0-9a-f]+$/i, br = /^0b[01]+$/i, yr = /^0o[0-7]+$/i, vr = parseInt;
function Qe(t) {
  if (typeof t == "number")
    return t;
  if (tr(t))
    return qe;
  if (Ie(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Ie(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = mr(t);
  var n = br.test(t);
  return n || yr.test(t) ? vr(t.slice(2), n ? 2 : 8) : pr.test(t) ? qe : +t;
}
var Ce = function() {
  return rr.Date.now();
}, Sr = "Expected a function", xr = Math.max, Cr = Math.min;
function _r(t, e, n) {
  var o, r, i, s, a, l, c = 0, f = !1, u = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(Sr);
  e = Qe(e) || 0, Ie(n) && (f = !!n.leading, u = "maxWait" in n, i = u ? xr(Qe(n.maxWait) || 0, e) : i, d = "trailing" in n ? !!n.trailing : d);
  function g(S) {
    var T = o, O = r;
    return o = r = void 0, c = S, s = t.apply(O, T), s;
  }
  function m(S) {
    return c = S, a = setTimeout(b, e), f ? g(S) : s;
  }
  function v(S) {
    var T = S - l, O = S - c, E = e - T;
    return u ? Cr(E, i - O) : E;
  }
  function h(S) {
    var T = S - l, O = S - c;
    return l === void 0 || T >= e || T < 0 || u && O >= i;
  }
  function b() {
    var S = Ce();
    if (h(S))
      return x(S);
    a = setTimeout(b, v(S));
  }
  function x(S) {
    return a = void 0, d && o ? g(S) : (o = r = void 0, s);
  }
  function P() {
    a !== void 0 && clearTimeout(a), c = 0, o = l = r = a = void 0;
  }
  function p() {
    return a === void 0 ? s : x(Ce());
  }
  function C() {
    var S = Ce(), T = h(S);
    if (o = arguments, r = this, l = S, T) {
      if (a === void 0)
        return m(l);
      if (u)
        return clearTimeout(a), a = setTimeout(b, e), g(l);
    }
    return a === void 0 && (a = setTimeout(b, e)), s;
  }
  return C.cancel = P, C.flush = p, C;
}
var Tt = {
  exports: {}
}, le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wr = y, Tr = Symbol.for("react.element"), Or = Symbol.for("react.fragment"), Pr = Object.prototype.hasOwnProperty, Er = wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Mr = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Ot(t, e, n) {
  var o, r = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (o in e) Pr.call(e, o) && !Mr.hasOwnProperty(o) && (r[o] = e[o]);
  if (t && t.defaultProps) for (o in e = t.defaultProps, e) r[o] === void 0 && (r[o] = e[o]);
  return {
    $$typeof: Tr,
    type: t,
    key: i,
    ref: s,
    props: r,
    _owner: Er.current
  };
}
le.Fragment = Or;
le.jsx = Ot;
le.jsxs = Ot;
Tt.exports = le;
var j = Tt.exports;
const {
  SvelteComponent: jr,
  assign: Je,
  binding_callbacks: Ze,
  check_outros: Ir,
  children: Pt,
  claim_element: Et,
  claim_space: kr,
  component_subscribe: Ye,
  compute_slots: Lr,
  create_slot: Rr,
  detach: W,
  element: Mt,
  empty: et,
  exclude_internal_props: tt,
  get_all_dirty_from_scope: $r,
  get_slot_changes: Dr,
  group_outros: Hr,
  init: Ar,
  insert_hydration: re,
  safe_not_equal: zr,
  set_custom_element_data: jt,
  space: Br,
  transition_in: ne,
  transition_out: Re,
  update_slot_base: Xr
} = window.__gradio__svelte__internal, {
  beforeUpdate: Fr,
  getContext: Vr,
  onDestroy: Nr,
  setContext: Gr
} = window.__gradio__svelte__internal;
function rt(t) {
  let e, n;
  const o = (
    /*#slots*/
    t[7].default
  ), r = Rr(
    o,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = Mt("svelte-slot"), r && r.c(), this.h();
    },
    l(i) {
      e = Et(i, "SVELTE-SLOT", {
        class: !0
      });
      var s = Pt(e);
      r && r.l(s), s.forEach(W), this.h();
    },
    h() {
      jt(e, "class", "svelte-1rt0kpf");
    },
    m(i, s) {
      re(i, e, s), r && r.m(e, null), t[9](e), n = !0;
    },
    p(i, s) {
      r && r.p && (!n || s & /*$$scope*/
      64) && Xr(
        r,
        o,
        i,
        /*$$scope*/
        i[6],
        n ? Dr(
          o,
          /*$$scope*/
          i[6],
          s,
          null
        ) : $r(
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
      Re(r, i), n = !1;
    },
    d(i) {
      i && W(e), r && r.d(i), t[9](null);
    }
  };
}
function Ur(t) {
  let e, n, o, r, i = (
    /*$$slots*/
    t[4].default && rt(t)
  );
  return {
    c() {
      e = Mt("react-portal-target"), n = Br(), i && i.c(), o = et(), this.h();
    },
    l(s) {
      e = Et(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), Pt(e).forEach(W), n = kr(s), i && i.l(s), o = et(), this.h();
    },
    h() {
      jt(e, "class", "svelte-1rt0kpf");
    },
    m(s, a) {
      re(s, e, a), t[8](e), re(s, n, a), i && i.m(s, a), re(s, o, a), r = !0;
    },
    p(s, [a]) {
      /*$$slots*/
      s[4].default ? i ? (i.p(s, a), a & /*$$slots*/
      16 && ne(i, 1)) : (i = rt(s), i.c(), ne(i, 1), i.m(o.parentNode, o)) : i && (Hr(), Re(i, 1, 1, () => {
        i = null;
      }), Ir());
    },
    i(s) {
      r || (ne(i), r = !0);
    },
    o(s) {
      Re(i), r = !1;
    },
    d(s) {
      s && (W(e), W(n), W(o)), t[8](null), i && i.d(s);
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
function Wr(t, e, n) {
  let o, r, {
    $$slots: i = {},
    $$scope: s
  } = e;
  const a = Lr(i);
  let {
    svelteInit: l
  } = e;
  const c = te(nt(e)), f = te();
  Ye(t, f, (p) => n(0, o = p));
  const u = te();
  Ye(t, u, (p) => n(1, r = p));
  const d = [], g = Vr("$$ms-gr-react-wrapper"), {
    slotKey: m,
    slotIndex: v,
    subSlotIndex: h
  } = nr() || {}, b = l({
    parent: g,
    props: c,
    target: f,
    slot: u,
    slotKey: m,
    slotIndex: v,
    subSlotIndex: h,
    onDestroy(p) {
      d.push(p);
    }
  });
  Gr("$$ms-gr-react-wrapper", b), Fr(() => {
    c.set(nt(e));
  }), Nr(() => {
    d.forEach((p) => p());
  });
  function x(p) {
    Ze[p ? "unshift" : "push"](() => {
      o = p, f.set(o);
    });
  }
  function P(p) {
    Ze[p ? "unshift" : "push"](() => {
      r = p, u.set(r);
    });
  }
  return t.$$set = (p) => {
    n(17, e = Je(Je({}, e), tt(p))), "svelteInit" in p && n(5, l = p.svelteInit), "$$scope" in p && n(6, s = p.$$scope);
  }, e = tt(e), [o, r, f, u, a, l, s, i, x, P];
}
class Kr extends jr {
  constructor(e) {
    super(), Ar(this, e, Wr, Ur, zr, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: co
} = window.__gradio__svelte__internal, ot = window.ms_globals.rerender, _e = window.ms_globals.tree;
function qr(t, e = {}) {
  function n(o) {
    const r = te(), i = new Kr({
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
          }, l = s.parent ?? _e;
          return l.nodes = [...l.nodes, a], ot({
            createPortal: je,
            node: _e
          }), s.onDestroy(() => {
            l.nodes = l.nodes.filter((c) => c.svelteInstance !== r), ot({
              createPortal: je,
              node: _e
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
const Qr = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Jr(t) {
  return t ? Object.keys(t).reduce((e, n) => {
    const o = t[n];
    return e[n] = Zr(n, o), e;
  }, {}) : {};
}
function Zr(t, e) {
  return typeof e == "number" && !Qr.includes(t) ? e + "px" : e;
}
function $e(t) {
  const e = [], n = t.cloneNode(!1);
  if (t._reactElement) {
    const r = y.Children.toArray(t._reactElement.props.children).map((i) => {
      if (y.isValidElement(i) && i.props.__slot__) {
        const {
          portals: s,
          clonedElement: a
        } = $e(i.props.el);
        return y.cloneElement(i, {
          ...i.props,
          el: a,
          children: [...y.Children.toArray(i.props.children), ...s]
        });
      }
      return null;
    });
    return r.originalChildren = t._reactElement.props.children, e.push(je(y.cloneElement(t._reactElement, {
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
      } = $e(i);
      e.push(...a), n.appendChild(s);
    } else i.nodeType === 3 && n.appendChild(i.cloneNode());
  }
  return {
    clonedElement: n,
    portals: e
  };
}
function Yr(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const J = Jt(({
  slot: t,
  clone: e,
  className: n,
  style: o,
  observeAttributes: r
}, i) => {
  const s = Zt(), [a, l] = Yt([]), {
    forceClone: c
  } = or(), f = c ? !0 : e;
  return er(() => {
    var v;
    if (!s.current || !t)
      return;
    let u = t;
    function d() {
      let h = u;
      if (u.tagName.toLowerCase() === "svelte-slot" && u.children.length === 1 && u.children[0] && (h = u.children[0], h.tagName.toLowerCase() === "react-portal-target" && h.children[0] && (h = h.children[0])), Yr(i, h), n && h.classList.add(...n.split(" ")), o) {
        const b = Jr(o);
        Object.keys(b).forEach((x) => {
          h.style[x] = b[x];
        });
      }
    }
    let g = null, m = null;
    if (f && window.MutationObserver) {
      let h = function() {
        var p, C, S;
        (p = s.current) != null && p.contains(u) && ((C = s.current) == null || C.removeChild(u));
        const {
          portals: x,
          clonedElement: P
        } = $e(t);
        u = P, l(x), u.style.display = "contents", m && clearTimeout(m), m = setTimeout(() => {
          d();
        }, 50), (S = s.current) == null || S.appendChild(u);
      };
      h();
      const b = _r(() => {
        h(), g == null || g.disconnect(), g == null || g.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      g = new window.MutationObserver(b), g.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      u.style.display = "contents", d(), (v = s.current) == null || v.appendChild(u);
    return () => {
      var h, b;
      u.style.display = "", (h = s.current) != null && h.contains(u) && ((b = s.current) == null || b.removeChild(u)), g == null || g.disconnect();
    };
  }, [t, f, n, o, i, r, c]), y.createElement("react-child", {
    ref: s,
    style: {
      display: "contents"
    }
  }, ...a);
}), en = "1.0.5", tn = /* @__PURE__ */ y.createContext({}), rn = {
  classNames: {},
  styles: {},
  className: "",
  style: {}
}, nn = (t) => {
  const e = y.useContext(tn);
  return y.useMemo(() => ({
    ...rn,
    ...e[t]
  }), [e[t]]);
};
function se() {
  return se = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, se.apply(null, arguments);
}
function De() {
  const {
    getPrefixCls: t,
    direction: e,
    csp: n,
    iconPrefixCls: o,
    theme: r
  } = y.useContext(ir.ConfigContext);
  return {
    theme: r,
    getPrefixCls: t,
    direction: e,
    csp: n,
    iconPrefixCls: o
  };
}
function it(t) {
  var e = V.useRef();
  e.current = t;
  var n = V.useCallback(function() {
    for (var o, r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return (o = e.current) === null || o === void 0 ? void 0 : o.call.apply(o, [e].concat(i));
  }, []);
  return n;
}
function on(t) {
  if (Array.isArray(t)) return t;
}
function sn(t, e) {
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
function st(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function an(t, e) {
  if (t) {
    if (typeof t == "string") return st(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? st(t, e) : void 0;
  }
}
function ln() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(t, e) {
  return on(t) || sn(t, e) || an(t, e) || ln();
}
function cn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var at = cn() ? V.useLayoutEffect : V.useEffect, un = function(e, n) {
  var o = V.useRef(!0);
  at(function() {
    return e(o.current);
  }, n), at(function() {
    return o.current = !1, function() {
      o.current = !0;
    };
  }, []);
}, lt = function(e, n) {
  un(function(o) {
    if (!o)
      return e();
  }, n);
};
function ct(t) {
  var e = V.useRef(!1), n = V.useState(t), o = G(n, 2), r = o[0], i = o[1];
  V.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []);
  function s(a, l) {
    l && e.current || i(a);
  }
  return [r, s];
}
function we(t) {
  return t !== void 0;
}
function fn(t, e) {
  var n = e || {}, o = n.defaultValue, r = n.value, i = n.onChange, s = n.postState, a = ct(function() {
    return we(r) ? r : we(o) ? typeof o == "function" ? o() : o : typeof t == "function" ? t() : t;
  }), l = G(a, 2), c = l[0], f = l[1], u = r !== void 0 ? r : c, d = s ? s(u) : u, g = it(i), m = ct([u]), v = G(m, 2), h = v[0], b = v[1];
  lt(function() {
    var P = h[0];
    c !== P && g(c, P);
  }, [h]), lt(function() {
    we(r) || f(r);
  }, [r]);
  var x = it(function(P, p) {
    f(P, p), b([u], p);
  });
  return [d, x];
}
function A(t) {
  "@babel/helpers - typeof";
  return A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, A(t);
}
var w = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be = Symbol.for("react.element"), Xe = Symbol.for("react.portal"), ce = Symbol.for("react.fragment"), ue = Symbol.for("react.strict_mode"), fe = Symbol.for("react.profiler"), de = Symbol.for("react.provider"), he = Symbol.for("react.context"), dn = Symbol.for("react.server_context"), ge = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), be = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), hn = Symbol.for("react.offscreen"), It;
It = Symbol.for("react.module.reference");
function D(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Be:
        switch (t = t.type, t) {
          case ce:
          case fe:
          case ue:
          case me:
          case pe:
            return t;
          default:
            switch (t = t && t.$$typeof, t) {
              case dn:
              case he:
              case ge:
              case ye:
              case be:
              case de:
                return t;
              default:
                return e;
            }
        }
      case Xe:
        return e;
    }
  }
}
w.ContextConsumer = he;
w.ContextProvider = de;
w.Element = Be;
w.ForwardRef = ge;
w.Fragment = ce;
w.Lazy = ye;
w.Memo = be;
w.Portal = Xe;
w.Profiler = fe;
w.StrictMode = ue;
w.Suspense = me;
w.SuspenseList = pe;
w.isAsyncMode = function() {
  return !1;
};
w.isConcurrentMode = function() {
  return !1;
};
w.isContextConsumer = function(t) {
  return D(t) === he;
};
w.isContextProvider = function(t) {
  return D(t) === de;
};
w.isElement = function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Be;
};
w.isForwardRef = function(t) {
  return D(t) === ge;
};
w.isFragment = function(t) {
  return D(t) === ce;
};
w.isLazy = function(t) {
  return D(t) === ye;
};
w.isMemo = function(t) {
  return D(t) === be;
};
w.isPortal = function(t) {
  return D(t) === Xe;
};
w.isProfiler = function(t) {
  return D(t) === fe;
};
w.isStrictMode = function(t) {
  return D(t) === ue;
};
w.isSuspense = function(t) {
  return D(t) === me;
};
w.isSuspenseList = function(t) {
  return D(t) === pe;
};
w.isValidElementType = function(t) {
  return typeof t == "string" || typeof t == "function" || t === ce || t === fe || t === ue || t === me || t === pe || t === hn || typeof t == "object" && t !== null && (t.$$typeof === ye || t.$$typeof === be || t.$$typeof === de || t.$$typeof === he || t.$$typeof === ge || t.$$typeof === It || t.getModuleId !== void 0);
};
w.typeOf = D;
function gn(t, e) {
  if (A(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (A(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function kt(t) {
  var e = gn(t, "string");
  return A(e) == "symbol" ? e : e + "";
}
function H(t, e, n) {
  return (e = kt(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function ut(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function k(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ut(Object(n), !0).forEach(function(o) {
      H(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ut(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function ve(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function mn(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, kt(o.key), o);
  }
}
function Se(t, e, n) {
  return e && mn(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function He(t, e) {
  return He = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, He(t, e);
}
function Lt(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && He(t, e);
}
function ae(t) {
  return ae = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, ae(t);
}
function Rt() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Rt = function() {
    return !!t;
  })();
}
function Q(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function pn(t, e) {
  if (e && (A(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Q(t);
}
function $t(t) {
  var e = Rt();
  return function() {
    var n, o = ae(t);
    if (e) {
      var r = ae(this).constructor;
      n = Reflect.construct(o, arguments, r);
    } else n = o.apply(this, arguments);
    return pn(this, n);
  };
}
var Dt = /* @__PURE__ */ Se(function t() {
  ve(this, t);
}), Ht = "CALC_UNIT", bn = new RegExp(Ht, "g");
function Te(t) {
  return typeof t == "number" ? "".concat(t).concat(Ht) : t;
}
var yn = /* @__PURE__ */ function(t) {
  Lt(n, t);
  var e = $t(n);
  function n(o, r) {
    var i;
    ve(this, n), i = e.call(this), H(Q(i), "result", ""), H(Q(i), "unitlessCssVar", void 0), H(Q(i), "lowPriority", void 0);
    var s = A(o);
    return i.unitlessCssVar = r, o instanceof n ? i.result = "(".concat(o.result, ")") : s === "number" ? i.result = Te(o) : s === "string" && (i.result = o), i;
  }
  return Se(n, [{
    key: "add",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " + ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " + ").concat(Te(r))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " - ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " - ").concat(Te(r))), this.lowPriority = !0, this;
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
      }) && (l = !1), this.result = this.result.replace(bn, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Dt), vn = /* @__PURE__ */ function(t) {
  Lt(n, t);
  var e = $t(n);
  function n(o) {
    var r;
    return ve(this, n), r = e.call(this), H(Q(r), "result", 0), o instanceof n ? r.result = o.result : typeof o == "number" && (r.result = o), r;
  }
  return Se(n, [{
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
}(Dt), Sn = function(e, n) {
  var o = e === "css" ? yn : vn;
  return function(r) {
    return new o(r, n);
  };
}, ft = function(e, n) {
  return "".concat([n, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function dt(t, e, n, o) {
  var r = k({}, e[t]);
  if (o != null && o.deprecatedTokens) {
    var i = o.deprecatedTokens;
    i.forEach(function(a) {
      var l = G(a, 2), c = l[0], f = l[1];
      if (r != null && r[c] || r != null && r[f]) {
        var u;
        (u = r[f]) !== null && u !== void 0 || (r[f] = r == null ? void 0 : r[c]);
      }
    });
  }
  var s = k(k({}, n), r);
  return Object.keys(s).forEach(function(a) {
    s[a] === e[a] && delete s[a];
  }), s;
}
var At = typeof CSSINJS_STATISTIC < "u", Ae = !0;
function Fe() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  if (!At)
    return Object.assign.apply(Object, [{}].concat(e));
  Ae = !1;
  var o = {};
  return e.forEach(function(r) {
    if (A(r) === "object") {
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
  }), Ae = !0, o;
}
var ht = {};
function xn() {
}
var Cn = function(e) {
  var n, o = e, r = xn;
  return At && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), o = new Proxy(e, {
    get: function(s, a) {
      if (Ae) {
        var l;
        (l = n) === null || l === void 0 || l.add(a);
      }
      return s[a];
    }
  }), r = function(s, a) {
    var l;
    ht[s] = {
      global: Array.from(n),
      component: k(k({}, (l = ht[s]) === null || l === void 0 ? void 0 : l.component), a)
    };
  }), {
    token: o,
    keys: n,
    flush: r
  };
};
function gt(t, e, n) {
  if (typeof n == "function") {
    var o;
    return n(Fe(e, (o = e[t]) !== null && o !== void 0 ? o : {}));
  }
  return n ?? {};
}
function _n(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "max(".concat(o.map(function(i) {
        return ie(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "min(".concat(o.map(function(i) {
        return ie(i);
      }).join(","), ")");
    }
  };
}
var wn = 1e3 * 60 * 10, Tn = /* @__PURE__ */ function() {
  function t() {
    ve(this, t), H(this, "map", /* @__PURE__ */ new Map()), H(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), H(this, "nextID", 0), H(this, "lastAccessBeat", /* @__PURE__ */ new Map()), H(this, "accessBeat", 0);
  }
  return Se(t, [{
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
        return i && A(i) === "object" ? "obj_".concat(o.getObjectID(i)) : "".concat(A(i), "_").concat(i);
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
          o - r > wn && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), mt = new Tn();
function On(t, e) {
  return y.useMemo(function() {
    var n = mt.get(e);
    if (n)
      return n;
    var o = t();
    return mt.set(e, o), o;
  }, e);
}
var Pn = function() {
  return {};
};
function En(t) {
  var e = t.useCSP, n = e === void 0 ? Pn : e, o = t.useToken, r = t.usePrefix, i = t.getResetStyles, s = t.getCommonStyle, a = t.getCompUnitless;
  function l(d, g, m, v) {
    var h = Array.isArray(d) ? d[0] : d;
    function b(O) {
      return "".concat(String(h)).concat(O.slice(0, 1).toUpperCase()).concat(O.slice(1));
    }
    var x = (v == null ? void 0 : v.unitless) || {}, P = typeof a == "function" ? a(d) : {}, p = k(k({}, P), {}, H({}, b("zIndexPopup"), !0));
    Object.keys(x).forEach(function(O) {
      p[b(O)] = x[O];
    });
    var C = k(k({}, v), {}, {
      unitless: p,
      prefixToken: b
    }), S = f(d, g, m, C), T = c(h, m, C);
    return function(O) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O, L = S(O, E), z = G(L, 2), _ = z[1], B = T(E), I = G(B, 2), R = I[0], X = I[1];
      return [R, _, X];
    };
  }
  function c(d, g, m) {
    var v = m.unitless, h = m.injectStyle, b = h === void 0 ? !0 : h, x = m.prefixToken, P = m.ignore, p = function(T) {
      var O = T.rootCls, E = T.cssVar, L = E === void 0 ? {} : E, z = o(), _ = z.realToken;
      return cr({
        path: [d],
        prefix: L.prefix,
        key: L.key,
        unitless: v,
        ignore: P,
        token: _,
        scope: O
      }, function() {
        var B = gt(d, _, g), I = dt(d, _, B, {
          deprecatedTokens: m == null ? void 0 : m.deprecatedTokens
        });
        return Object.keys(B).forEach(function(R) {
          I[x(R)] = I[R], delete I[R];
        }), I;
      }), null;
    }, C = function(T) {
      var O = o(), E = O.cssVar;
      return [function(L) {
        return b && E ? /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(p, {
          rootCls: T,
          cssVar: E,
          component: d
        }), L) : L;
      }, E == null ? void 0 : E.key];
    };
    return C;
  }
  function f(d, g, m) {
    var v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(d) ? d : [d, d], b = G(h, 1), x = b[0], P = h.join("-"), p = t.layer || {
      name: "antd"
    };
    return function(C) {
      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, T = o(), O = T.theme, E = T.realToken, L = T.hashId, z = T.token, _ = T.cssVar, B = r(), I = B.rootPrefixCls, R = B.iconPrefixCls, X = n(), K = _ ? "css" : "js", Vt = On(function() {
        var N = /* @__PURE__ */ new Set();
        return _ && Object.keys(v.unitless || {}).forEach(function(Y) {
          N.add(xe(Y, _.prefix)), N.add(xe(Y, ft(x, _.prefix)));
        }), Sn(K, N);
      }, [K, x, _ == null ? void 0 : _.prefix]), Ve = _n(K), Nt = Ve.max, Gt = Ve.min, Ne = {
        theme: O,
        token: z,
        hashId: L,
        nonce: function() {
          return X.nonce;
        },
        clientOnly: v.clientOnly,
        layer: p,
        // antd is always at top of styles
        order: v.order || -999
      };
      typeof i == "function" && Ke(k(k({}, Ne), {}, {
        clientOnly: !1,
        path: ["Shared", I]
      }), function() {
        return i(z, {
          prefix: {
            rootPrefixCls: I,
            iconPrefixCls: R
          },
          csp: X
        });
      });
      var Ut = Ke(k(k({}, Ne), {}, {
        path: [P, C, R]
      }), function() {
        if (v.injectStyle === !1)
          return [];
        var N = Cn(z), Y = N.token, Wt = N.flush, U = gt(x, E, m), Kt = ".".concat(C), Ge = dt(x, E, U, {
          deprecatedTokens: v.deprecatedTokens
        });
        _ && U && A(U) === "object" && Object.keys(U).forEach(function(We) {
          U[We] = "var(".concat(xe(We, ft(x, _.prefix)), ")");
        });
        var Ue = Fe(Y, {
          componentCls: Kt,
          prefixCls: C,
          iconCls: ".".concat(R),
          antCls: ".".concat(I),
          calc: Vt,
          // @ts-ignore
          max: Nt,
          // @ts-ignore
          min: Gt
        }, _ ? U : Ge), qt = g(Ue, {
          hashId: L,
          prefixCls: C,
          rootPrefixCls: I,
          iconPrefixCls: R
        });
        Wt(x, Ge);
        var Qt = typeof s == "function" ? s(Ue, C, S, v.resetFont) : null;
        return [v.resetStyle === !1 ? null : Qt, qt];
      });
      return [Ut, L];
    };
  }
  function u(d, g, m) {
    var v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = f(d, g, m, k({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, v)), b = function(P) {
      var p = P.prefixCls, C = P.rootCls, S = C === void 0 ? p : C;
      return h(p, S), null;
    };
    return b;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: u,
    genComponentStyleHook: f
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
function Mn(t, e) {
  if (Z(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (Z(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function jn(t) {
  var e = Mn(t, "string");
  return Z(e) == "symbol" ? e : e + "";
}
function $(t, e, n) {
  return (e = jn(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
const M = Math.round;
function Oe(t, e) {
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
class F {
  constructor(e) {
    $(this, "isValid", !0), $(this, "r", 0), $(this, "g", 0), $(this, "b", 0), $(this, "a", 1), $(this, "_h", void 0), $(this, "_s", void 0), $(this, "_l", void 0), $(this, "_v", void 0), $(this, "_max", void 0), $(this, "_min", void 0), $(this, "_brightness", void 0);
    function n(o) {
      return o[0] in e && o[1] in e && o[2] in e;
    }
    if (e) if (typeof e == "string") {
      let r = function(i) {
        return o.startsWith(i);
      };
      const o = e.trim();
      /^#?[A-F\d]{3,8}$/i.test(o) ? this.fromHexString(o) : r("rgb") ? this.fromRgbString(o) : r("hsl") ? this.fromHslString(o) : (r("hsv") || r("hsb")) && this.fromHsvString(o);
    } else if (e instanceof F)
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
      e === 0 ? this._h = 0 : this._h = M(60 * (this.r === this.getMax() ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / e + 2 : (this.r - this.g) / e + 4));
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
      r: M(i("r")),
      g: M(i("g")),
      b: M(i("b")),
      a: M(i("a") * 100) / 100
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
    const n = this._c(e), o = this.a + n.a * (1 - this.a), r = (i) => M((this[i] * this.a + n[i] * n.a * (1 - this.a)) / o);
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
      const i = M(this.a * 255).toString(16);
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
    const e = this.getHue(), n = M(this.getSaturation() * 100), o = M(this.getLightness() * 100);
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
      const d = M(o * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const l = e / 60, c = (1 - Math.abs(2 * o - 1)) * n, f = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = c, s = f) : l >= 1 && l < 2 ? (i = f, s = c) : l >= 2 && l < 3 ? (s = c, a = f) : l >= 3 && l < 4 ? (s = f, a = c) : l >= 4 && l < 5 ? (i = f, a = c) : l >= 5 && l < 6 && (i = c, a = f);
    const u = o - c / 2;
    this.r = M((i + u) * 255), this.g = M((s + u) * 255), this.b = M((a + u) * 255);
  }
  fromHsv({
    h: e,
    s: n,
    v: o,
    a: r
  }) {
    this._h = e % 360, this._s = n, this._v = o, this.a = typeof r == "number" ? r : 1;
    const i = M(o * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = e / 60, a = Math.floor(s), l = s - a, c = M(o * (1 - n) * 255), f = M(o * (1 - n * l) * 255), u = M(o * (1 - n * (1 - l)) * 255);
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
    const n = Oe(e, pt);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(e) {
    const n = Oe(e, pt);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(e) {
    const n = Oe(e, (o, r) => (
      // Convert percentage to number. e.g. 50% -> 128
      r.includes("%") ? M(o / 100 * 255) : o
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
const In = {
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
}, kn = Object.assign(Object.assign({}, In), {
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
function Pe(t) {
  return t >= 0 && t <= 255;
}
function ee(t, e) {
  const {
    r: n,
    g: o,
    b: r,
    a: i
  } = new F(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: s,
    g: a,
    b: l
  } = new F(e).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const f = Math.round((n - s * (1 - c)) / c), u = Math.round((o - a * (1 - c)) / c), d = Math.round((r - l * (1 - c)) / c);
    if (Pe(f) && Pe(u) && Pe(d))
      return new F({
        r: f,
        g: u,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new F({
    r: n,
    g: o,
    b: r,
    a: 1
  }).toRgbString();
}
var Ln = function(t, e) {
  var n = {};
  for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(t); r < o.length; r++)
    e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]]);
  return n;
};
function Rn(t) {
  const {
    override: e
  } = t, n = Ln(t, ["override"]), o = Object.assign({}, e);
  Object.keys(kn).forEach((d) => {
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
      0 1px 2px -2px ${new F("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new F("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new F("rgba(0, 0, 0, 0.09)").toRgbString()}
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
const $n = {
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
}, Dn = {
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
}, Hn = ur(Le.defaultAlgorithm), An = {
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
}, zt = (t, e, n) => {
  const o = n.getDerivativeToken(t), {
    override: r,
    ...i
  } = e;
  let s = {
    ...o,
    override: r
  };
  return s = Rn(s), i && Object.entries(i).forEach(([a, l]) => {
    const {
      theme: c,
      ...f
    } = l;
    let u = f;
    c && (u = zt({
      ...s,
      ...f
    }, {
      override: f
    }, c)), s[a] = u;
  }), s;
};
function zn() {
  const {
    token: t,
    hashed: e,
    theme: n = Hn,
    override: o,
    cssVar: r
  } = y.useContext(Le._internalContext), [i, s, a] = fr(n, [Le.defaultSeed, t], {
    salt: `${en}-${e || ""}`,
    override: o,
    getComputedToken: zt,
    cssVar: r && {
      prefix: r.prefix,
      key: r.key,
      unitless: $n,
      ignore: Dn,
      preserve: An
    }
  });
  return [n, a, e ? s : "", i, r];
}
const {
  genStyleHooks: Bn
} = En({
  usePrefix: () => {
    const {
      getPrefixCls: t,
      iconPrefixCls: e
    } = De();
    return {
      iconPrefixCls: e,
      rootPrefixCls: t()
    };
  },
  useToken: () => {
    const [t, e, n, o, r] = zn();
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
    } = De();
    return t ?? {};
  },
  layer: {
    name: "antdx",
    dependencies: ["antd"]
  }
});
var Xn = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, Fn = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Vn = "".concat(Xn, " ").concat(Fn).split(/[\s\n]+/), Nn = "aria-", Gn = "data-";
function bt(t, e) {
  return t.indexOf(e) === 0;
}
function Bt(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  e === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : e === !0 ? n = {
    aria: !0
  } : n = k({}, e);
  var o = {};
  return Object.keys(t).forEach(function(r) {
    // Aria
    (n.aria && (r === "role" || bt(r, Nn)) || // Data
    n.data && bt(r, Gn) || // Attr
    n.attr && Vn.includes(r)) && (o[r] = t[r]);
  }), o;
}
const Xt = /* @__PURE__ */ y.createContext(null), yt = ({
  children: t
}) => {
  const {
    prefixCls: e
  } = y.useContext(Xt);
  return /* @__PURE__ */ y.createElement("div", {
    className: oe(`${e}-group-title`)
  }, t && /* @__PURE__ */ y.createElement(wt.Text, null, t));
}, Un = (t) => {
  t.stopPropagation();
}, Wn = (t) => {
  const {
    prefixCls: e,
    info: n,
    className: o,
    direction: r,
    onClick: i,
    active: s,
    menu: a,
    ...l
  } = t, c = Bt(l, {
    aria: !0,
    data: !0,
    attr: !0
  }), {
    disabled: f
  } = n, [u, d] = y.useState(!1), [g, m] = y.useState(!1), v = oe(o, `${e}-item`, {
    [`${e}-item-active`]: s && !f
  }, {
    [`${e}-item-disabled`]: f
  }), h = () => {
    !f && i && i(n);
  }, b = (x) => {
    x && m(!x);
  };
  return /* @__PURE__ */ y.createElement(sr, {
    title: n.label,
    open: u && g,
    onOpenChange: m,
    placement: r === "rtl" ? "left" : "right"
  }, /* @__PURE__ */ y.createElement("li", se({}, c, {
    className: v,
    onClick: h
  }), n.icon && /* @__PURE__ */ y.createElement("div", {
    className: `${e}-icon`
  }, n.icon), /* @__PURE__ */ y.createElement(wt.Text, {
    className: `${e}-label`,
    ellipsis: {
      onEllipsis: d
    }
  }, n.label), a && !f && /* @__PURE__ */ y.createElement(ar, {
    menu: a,
    placement: r === "rtl" ? "bottomLeft" : "bottomRight",
    trigger: ["click"],
    disabled: f,
    onOpenChange: b
  }, /* @__PURE__ */ y.createElement(lr, {
    onClick: Un,
    disabled: f,
    className: `${e}-menu-icon`
  }))));
}, Ee = "__ungrouped", Kn = (t, e = []) => {
  const [n, o, r] = y.useMemo(() => {
    if (!t)
      return [!1, void 0, void 0];
    let i = {
      sort: void 0,
      title: void 0
    };
    return typeof t == "object" && (i = {
      ...i,
      ...t
    }), [!0, i.sort, i.title];
  }, [t]);
  return y.useMemo(() => {
    if (!n)
      return [[{
        name: Ee,
        data: e,
        title: void 0
      }], n];
    const i = e.reduce((l, c) => {
      const f = c.group || Ee;
      return l[f] || (l[f] = []), l[f].push(c), l;
    }, {});
    return [(o ? Object.keys(i).sort(o) : Object.keys(i)).map((l) => ({
      name: l === Ee ? void 0 : l,
      title: r,
      data: i[l]
    })), n];
  }, [e, t]);
}, qn = (t) => {
  const {
    componentCls: e
  } = t;
  return {
    [e]: {
      display: "flex",
      flexDirection: "column",
      gap: t.paddingXXS,
      overflowY: "auto",
      padding: t.paddingSM,
      [`&${e}-rtl`]: {
        direction: "rtl"
      },
      // 会话列表
      [`& ${e}-list`]: {
        display: "flex",
        gap: t.paddingXXS,
        flexDirection: "column",
        [`& ${e}-item`]: {
          paddingInlineStart: t.paddingXL
        },
        [`& ${e}-label`]: {
          color: t.colorTextDescription
        }
      },
      // 会话列表项
      [`& ${e}-item`]: {
        display: "flex",
        height: t.controlHeightLG,
        minHeight: t.controlHeightLG,
        gap: t.paddingXS,
        padding: `0 ${ie(t.paddingXS)}`,
        alignItems: "center",
        borderRadius: t.borderRadiusLG,
        cursor: "pointer",
        transition: `all ${t.motionDurationMid} ${t.motionEaseInOut}`,
        // 悬浮样式
        "&:hover": {
          backgroundColor: t.colorBgTextHover
        },
        // 选中样式
        "&-active": {
          backgroundColor: t.colorBgTextHover,
          [`& ${e}-label, ${e}-menu-icon`]: {
            color: t.colorText
          }
        },
        // 禁用样式
        "&-disabled": {
          cursor: "not-allowed",
          [`& ${e}-label`]: {
            color: t.colorTextDisabled
          }
        },
        // 悬浮、选中时激活操作菜单
        "&:hover, &-active": {
          [`& ${e}-menu-icon`]: {
            opacity: 1
          }
        }
      },
      // 会话名
      [`& ${e}-label`]: {
        flex: 1,
        color: t.colorText
      },
      // 会话操作菜单
      [`& ${e}-menu-icon`]: {
        opacity: 0,
        fontSize: t.fontSizeXL
      },
      // 会话图标
      [`& ${e}-group-title`]: {
        display: "flex",
        alignItems: "center",
        height: t.controlHeightLG,
        minHeight: t.controlHeightLG,
        padding: `0 ${ie(t.paddingXS)}`
      }
    }
  };
}, Qn = () => ({}), Jn = Bn("Conversations", (t) => {
  const e = Fe(t, {});
  return qn(e);
}, Qn), Zn = (t) => {
  const {
    prefixCls: e,
    rootClassName: n,
    items: o,
    activeKey: r,
    defaultActiveKey: i,
    onActiveChange: s,
    menu: a,
    styles: l = {},
    classNames: c = {},
    groupable: f,
    className: u,
    style: d,
    ...g
  } = t, m = Bt(g, {
    attr: !0,
    aria: !0,
    data: !0
  }), [v, h] = fn(i, {
    value: r
  }), [b, x] = Kn(f, o), {
    getPrefixCls: P,
    direction: p
  } = De(), C = P("conversations", e), S = nn("conversations"), [T, O, E] = Jn(C), L = oe(C, S.className, u, n, O, E, {
    [`${C}-rtl`]: p === "rtl"
  }), z = (_) => {
    h(_.key), s && s(_.key);
  };
  return T(/* @__PURE__ */ y.createElement("ul", se({}, m, {
    style: {
      ...S.style,
      ...d
    },
    className: L
  }), b.map((_, B) => {
    var R;
    const I = _.data.map((X, K) => /* @__PURE__ */ y.createElement(Wn, {
      key: X.key || `key-${K}`,
      info: X,
      prefixCls: C,
      direction: p,
      className: oe(c.item, S.classNames.item),
      style: {
        ...S.styles.item,
        ...l.item
      },
      menu: typeof a == "function" ? a(X) : a,
      active: v === X.key,
      onClick: z
    }));
    return x ? /* @__PURE__ */ y.createElement("li", {
      key: _.name || `key-${B}`
    }, /* @__PURE__ */ y.createElement(Xt.Provider, {
      value: {
        prefixCls: C
      }
    }, ((R = _.title) == null ? void 0 : R.call(_, _.name, {
      components: {
        GroupTitle: yt
      }
    })) || /* @__PURE__ */ y.createElement(yt, {
      key: _.name
    }, _.name)), /* @__PURE__ */ y.createElement("ul", {
      className: `${C}-list`
    }, I)) : I;
  })));
};
function Yn(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function eo(t, e = !1) {
  try {
    if (Ct(t))
      return t;
    if (e && !Yn(t))
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
function vt(t, e) {
  return Me(() => eo(t, e), [t, e]);
}
const to = ({
  children: t,
  ...e
}) => /* @__PURE__ */ j.jsx(j.Fragment, {
  children: t(e)
});
function Ft(t) {
  return y.createElement(to, {
    children: t
  });
}
function ze(t, e, n) {
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
        u.forEach((b, x) => {
          a[b] || (a[b] = {}), x !== u.length - 1 && (a = s[b]);
        });
        const d = r.slots[f];
        let g, m, v = (e == null ? void 0 : e.clone) ?? !1, h = e == null ? void 0 : e.forceClone;
        d instanceof Element ? g = d : (g = d.el, m = d.callback, v = d.clone ?? v, h = d.forceClone ?? h), h = h ?? !!m, a[u[u.length - 1]] = g ? m ? (...b) => (m(u[u.length - 1], b), /* @__PURE__ */ j.jsx(ke, {
          ...r.ctx,
          params: b,
          forceClone: h,
          children: /* @__PURE__ */ j.jsx(J, {
            slot: g,
            clone: v
          })
        })) : Ft((b) => /* @__PURE__ */ j.jsx(ke, {
          ...r.ctx,
          forceClone: h,
          children: /* @__PURE__ */ j.jsx(J, {
            ...b,
            slot: g,
            clone: v
          })
        })) : a[u[u.length - 1]], a = s;
      });
      const l = (e == null ? void 0 : e.children) || "children";
      return r[l] ? s[l] = ze(r[l], e, `${i}`) : e != null && e.children && (s[l] = void 0, Reflect.deleteProperty(s, l)), s;
    });
}
function St(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? Ft((n) => /* @__PURE__ */ j.jsx(ke, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ j.jsx(J, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...n
    })
  })) : /* @__PURE__ */ j.jsx(J, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function xt({
  key: t,
  slots: e,
  targets: n
}, o) {
  return e[t] ? (...r) => n ? n.map((i, s) => /* @__PURE__ */ j.jsx(y.Fragment, {
    children: St(i, {
      clone: !0,
      params: r,
      forceClone: (o == null ? void 0 : o.forceClone) ?? !0
    })
  }, s)) : /* @__PURE__ */ j.jsx(j.Fragment, {
    children: St(e[t], {
      clone: !0,
      params: r,
      forceClone: (o == null ? void 0 : o.forceClone) ?? !0
    })
  }) : void 0;
}
const {
  useItems: ro,
  withItemsContextProvider: no,
  ItemHandler: uo
} = _t("antd-menu-items"), {
  useItems: oo,
  withItemsContextProvider: io,
  ItemHandler: fo
} = _t("antdx-conversations-items");
function so(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function ao(t, e) {
  return Object.keys(t).reduce((n, o) => {
    if (o.startsWith("on") && Ct(t[o])) {
      const r = t[o];
      n[o] = (...i) => {
        r == null || r(e, ...i);
      };
    } else
      n[o] = t[o];
    return n;
  }, {});
}
const ho = qr(no(["menu.items"], io(["default", "items"], ({
  slots: t,
  setSlotParams: e,
  children: n,
  items: o,
  ...r
}) => {
  const {
    items: {
      "menu.items": i
    }
  } = ro(), s = vt(r.menu), a = typeof r.groupable == "object" || t["groupable.title"], l = so(r.groupable), c = vt(r.groupable), f = Me(() => {
    var g;
    if (typeof r.menu == "string")
      return s;
    {
      const m = r.menu || {};
      return ((g = m.items) == null ? void 0 : g.length) || i.length > 0 ? (h) => ({
        ...ao(m, h),
        items: m.items || ze(i, {
          clone: !0
        }) || [],
        expandIcon: t["menu.expandIcon"] ? xt({
          slots: t,
          key: "menu.expandIcon"
        }, {}) : m.expandIcon,
        overflowedIndicator: t["menu.overflowedIndicator"] ? /* @__PURE__ */ j.jsx(J, {
          slot: t["menu.overflowedIndicator"]
        }) : m.overflowedIndicator
      }) : void 0;
    }
  }, [s, i, r.menu, e, t]), {
    items: u
  } = oo(), d = u.items.length > 0 ? u.items : u.default;
  return /* @__PURE__ */ j.jsxs(j.Fragment, {
    children: [/* @__PURE__ */ j.jsx("div", {
      style: {
        display: "none"
      },
      children: n
    }), /* @__PURE__ */ j.jsx(Zn, {
      ...r,
      menu: f,
      items: Me(() => o || ze(d, {
        clone: !0
      }), [o, d]),
      groupable: a ? {
        ...l,
        title: t["groupable.title"] ? xt({
          slots: t,
          key: "groupable.title"
        }) : l.title,
        sort: c || l.sort
      } : r.groupable
    })]
  });
})));
export {
  ho as Conversations,
  ho as default
};
