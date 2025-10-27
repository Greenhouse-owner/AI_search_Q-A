import { i as mr, a as wt, r as hr, b as pr, w as Xe, g as gr, c as te, d as vr } from "./Index--gPfj733.js";
const h = window.ms_globals.React, y = window.ms_globals.React, ar = window.ms_globals.React.forwardRef, ee = window.ms_globals.React.useRef, Rn = window.ms_globals.React.useState, de = window.ms_globals.React.useEffect, cr = window.ms_globals.React.isValidElement, lr = window.ms_globals.React.useLayoutEffect, ur = window.ms_globals.React.useImperativeHandle, fr = window.ms_globals.React.memo, dr = window.ms_globals.React.useMemo, Ft = window.ms_globals.ReactDOM, Et = window.ms_globals.ReactDOM.createPortal, yr = window.ms_globals.internalContext.useContextPropsContext, br = window.ms_globals.internalContext.ContextPropsProvider, Sr = window.ms_globals.internalContext.useSuggestionOpenContext, xr = window.ms_globals.antd.ConfigProvider, _t = window.ms_globals.antd.theme, Mn = window.ms_globals.antd.Button, Cr = window.ms_globals.antd.Input, Er = window.ms_globals.antd.Flex, wr = window.ms_globals.antdIcons.CloseOutlined, _r = window.ms_globals.antdIcons.ClearOutlined, Tr = window.ms_globals.antdIcons.ArrowUpOutlined, Pr = window.ms_globals.antdIcons.AudioMutedOutlined, Rr = window.ms_globals.antdIcons.AudioOutlined, Tt = window.ms_globals.antdCssinjs.unit, ht = window.ms_globals.antdCssinjs.token2CSSVar, zt = window.ms_globals.antdCssinjs.useStyleRegister, Mr = window.ms_globals.antdCssinjs.useCSSVarRegister, Or = window.ms_globals.antdCssinjs.createTheme, Ar = window.ms_globals.antdCssinjs.useCacheToken;
var kr = /\s/;
function Lr(e) {
  for (var t = e.length; t-- && kr.test(e.charAt(t)); )
    ;
  return t;
}
var Ir = /^\s+/;
function jr(e) {
  return e && e.slice(0, Lr(e) + 1).replace(Ir, "");
}
var Xt = NaN, $r = /^[-+]0x[0-9a-f]+$/i, Dr = /^0b[01]+$/i, Nr = /^0o[0-7]+$/i, Br = parseInt;
function Ut(e) {
  if (typeof e == "number")
    return e;
  if (mr(e))
    return Xt;
  if (wt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = jr(e);
  var n = Dr.test(e);
  return n || Nr.test(e) ? Br(e.slice(2), n ? 2 : 8) : $r.test(e) ? Xt : +e;
}
var pt = function() {
  return hr.Date.now();
}, Hr = "Expected a function", Vr = Math.max, Fr = Math.min;
function zr(e, t, n) {
  var o, r, i, s, a, l, c = 0, f = !1, u = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Hr);
  t = Ut(t) || 0, wt(n) && (f = !!n.leading, u = "maxWait" in n, i = u ? Vr(Ut(n.maxWait) || 0, t) : i, d = "trailing" in n ? !!n.trailing : d);
  function m(S) {
    var R = o, M = r;
    return o = r = void 0, c = S, s = e.apply(M, R), s;
  }
  function v(S) {
    return c = S, a = setTimeout(x, t), f ? m(S) : s;
  }
  function g(S) {
    var R = S - l, M = S - c, L = t - R;
    return u ? Fr(L, i - M) : L;
  }
  function p(S) {
    var R = S - l, M = S - c;
    return l === void 0 || R >= t || R < 0 || u && M >= i;
  }
  function x() {
    var S = pt();
    if (p(S))
      return E(S);
    a = setTimeout(x, g(S));
  }
  function E(S) {
    return a = void 0, d && o ? m(S) : (o = r = void 0, s);
  }
  function _() {
    a !== void 0 && clearTimeout(a), c = 0, o = l = r = a = void 0;
  }
  function b() {
    return a === void 0 ? s : E(pt());
  }
  function T() {
    var S = pt(), R = p(S);
    if (o = arguments, r = this, l = S, R) {
      if (a === void 0)
        return v(l);
      if (u)
        return clearTimeout(a), a = setTimeout(x, t), m(l);
    }
    return a === void 0 && (a = setTimeout(x, t)), s;
  }
  return T.cancel = _, T.flush = b, T;
}
function Xr(e, t) {
  return pr(e, t);
}
var On = {
  exports: {}
}, Ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur = y, Wr = Symbol.for("react.element"), Kr = Symbol.for("react.fragment"), Gr = Object.prototype.hasOwnProperty, qr = Ur.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qr = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function An(e, t, n) {
  var o, r = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (o in t) Gr.call(t, o) && !Qr.hasOwnProperty(o) && (r[o] = t[o]);
  if (e && e.defaultProps) for (o in t = e.defaultProps, t) r[o] === void 0 && (r[o] = t[o]);
  return {
    $$typeof: Wr,
    type: e,
    key: i,
    ref: s,
    props: r,
    _owner: qr.current
  };
}
Ye.Fragment = Kr;
Ye.jsx = An;
Ye.jsxs = An;
On.exports = Ye;
var W = On.exports;
const {
  SvelteComponent: Yr,
  assign: Wt,
  binding_callbacks: Kt,
  check_outros: Zr,
  children: kn,
  claim_element: Ln,
  claim_space: Jr,
  component_subscribe: Gt,
  compute_slots: eo,
  create_slot: to,
  detach: Se,
  element: In,
  empty: qt,
  exclude_internal_props: Qt,
  get_all_dirty_from_scope: no,
  get_slot_changes: ro,
  group_outros: oo,
  init: io,
  insert_hydration: Ue,
  safe_not_equal: so,
  set_custom_element_data: jn,
  space: ao,
  transition_in: We,
  transition_out: Pt,
  update_slot_base: co
} = window.__gradio__svelte__internal, {
  beforeUpdate: lo,
  getContext: uo,
  onDestroy: fo,
  setContext: mo
} = window.__gradio__svelte__internal;
function Yt(e) {
  let t, n;
  const o = (
    /*#slots*/
    e[7].default
  ), r = to(
    o,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = In("svelte-slot"), r && r.c(), this.h();
    },
    l(i) {
      t = Ln(i, "SVELTE-SLOT", {
        class: !0
      });
      var s = kn(t);
      r && r.l(s), s.forEach(Se), this.h();
    },
    h() {
      jn(t, "class", "svelte-1rt0kpf");
    },
    m(i, s) {
      Ue(i, t, s), r && r.m(t, null), e[9](t), n = !0;
    },
    p(i, s) {
      r && r.p && (!n || s & /*$$scope*/
      64) && co(
        r,
        o,
        i,
        /*$$scope*/
        i[6],
        n ? ro(
          o,
          /*$$scope*/
          i[6],
          s,
          null
        ) : no(
          /*$$scope*/
          i[6]
        ),
        null
      );
    },
    i(i) {
      n || (We(r, i), n = !0);
    },
    o(i) {
      Pt(r, i), n = !1;
    },
    d(i) {
      i && Se(t), r && r.d(i), e[9](null);
    }
  };
}
function ho(e) {
  let t, n, o, r, i = (
    /*$$slots*/
    e[4].default && Yt(e)
  );
  return {
    c() {
      t = In("react-portal-target"), n = ao(), i && i.c(), o = qt(), this.h();
    },
    l(s) {
      t = Ln(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), kn(t).forEach(Se), n = Jr(s), i && i.l(s), o = qt(), this.h();
    },
    h() {
      jn(t, "class", "svelte-1rt0kpf");
    },
    m(s, a) {
      Ue(s, t, a), e[8](t), Ue(s, n, a), i && i.m(s, a), Ue(s, o, a), r = !0;
    },
    p(s, [a]) {
      /*$$slots*/
      s[4].default ? i ? (i.p(s, a), a & /*$$slots*/
      16 && We(i, 1)) : (i = Yt(s), i.c(), We(i, 1), i.m(o.parentNode, o)) : i && (oo(), Pt(i, 1, 1, () => {
        i = null;
      }), Zr());
    },
    i(s) {
      r || (We(i), r = !0);
    },
    o(s) {
      Pt(i), r = !1;
    },
    d(s) {
      s && (Se(t), Se(n), Se(o)), e[8](null), i && i.d(s);
    }
  };
}
function Zt(e) {
  const {
    svelteInit: t,
    ...n
  } = e;
  return n;
}
function po(e, t, n) {
  let o, r, {
    $$slots: i = {},
    $$scope: s
  } = t;
  const a = eo(i);
  let {
    svelteInit: l
  } = t;
  const c = Xe(Zt(t)), f = Xe();
  Gt(e, f, (b) => n(0, o = b));
  const u = Xe();
  Gt(e, u, (b) => n(1, r = b));
  const d = [], m = uo("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: g,
    subSlotIndex: p
  } = gr() || {}, x = l({
    parent: m,
    props: c,
    target: f,
    slot: u,
    slotKey: v,
    slotIndex: g,
    subSlotIndex: p,
    onDestroy(b) {
      d.push(b);
    }
  });
  mo("$$ms-gr-react-wrapper", x), lo(() => {
    c.set(Zt(t));
  }), fo(() => {
    d.forEach((b) => b());
  });
  function E(b) {
    Kt[b ? "unshift" : "push"](() => {
      o = b, f.set(o);
    });
  }
  function _(b) {
    Kt[b ? "unshift" : "push"](() => {
      r = b, u.set(r);
    });
  }
  return e.$$set = (b) => {
    n(17, t = Wt(Wt({}, t), Qt(b))), "svelteInit" in b && n(5, l = b.svelteInit), "$$scope" in b && n(6, s = b.$$scope);
  }, t = Qt(t), [o, r, f, u, a, l, s, i, E, _];
}
class go extends Yr {
  constructor(t) {
    super(), io(this, t, po, ho, so, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: hs
} = window.__gradio__svelte__internal, Jt = window.ms_globals.rerender, gt = window.ms_globals.tree;
function vo(e, t = {}) {
  function n(o) {
    const r = Xe(), i = new go({
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
          }, l = s.parent ?? gt;
          return l.nodes = [...l.nodes, a], Jt({
            createPortal: Et,
            node: gt
          }), s.onDestroy(() => {
            l.nodes = l.nodes.filter((c) => c.svelteInstance !== r), Jt({
              createPortal: Et,
              node: gt
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
const yo = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function bo(e) {
  return e ? Object.keys(e).reduce((t, n) => {
    const o = e[n];
    return t[n] = So(n, o), t;
  }, {}) : {};
}
function So(e, t) {
  return typeof t == "number" && !yo.includes(e) ? t + "px" : t;
}
function Rt(e) {
  const t = [], n = e.cloneNode(!1);
  if (e._reactElement) {
    const r = y.Children.toArray(e._reactElement.props.children).map((i) => {
      if (y.isValidElement(i) && i.props.__slot__) {
        const {
          portals: s,
          clonedElement: a
        } = Rt(i.props.el);
        return y.cloneElement(i, {
          ...i.props,
          el: a,
          children: [...y.Children.toArray(i.props.children), ...s]
        });
      }
      return null;
    });
    return r.originalChildren = e._reactElement.props.children, t.push(Et(y.cloneElement(e._reactElement, {
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
      } = Rt(i);
      t.push(...a), n.appendChild(s);
    } else i.nodeType === 3 && n.appendChild(i.cloneNode());
  }
  return {
    clonedElement: n,
    portals: t
  };
}
function xo(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const Ge = ar(({
  slot: e,
  clone: t,
  className: n,
  style: o,
  observeAttributes: r
}, i) => {
  const s = ee(), [a, l] = Rn([]), {
    forceClone: c
  } = yr(), f = c ? !0 : t;
  return de(() => {
    var g;
    if (!s.current || !e)
      return;
    let u = e;
    function d() {
      let p = u;
      if (u.tagName.toLowerCase() === "svelte-slot" && u.children.length === 1 && u.children[0] && (p = u.children[0], p.tagName.toLowerCase() === "react-portal-target" && p.children[0] && (p = p.children[0])), xo(i, p), n && p.classList.add(...n.split(" ")), o) {
        const x = bo(o);
        Object.keys(x).forEach((E) => {
          p.style[E] = x[E];
        });
      }
    }
    let m = null, v = null;
    if (f && window.MutationObserver) {
      let p = function() {
        var b, T, S;
        (b = s.current) != null && b.contains(u) && ((T = s.current) == null || T.removeChild(u));
        const {
          portals: E,
          clonedElement: _
        } = Rt(e);
        u = _, l(E), u.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          d();
        }, 50), (S = s.current) == null || S.appendChild(u);
      };
      p();
      const x = zr(() => {
        p(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(x), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      u.style.display = "contents", d(), (g = s.current) == null || g.appendChild(u);
    return () => {
      var p, x;
      u.style.display = "", (p = s.current) != null && p.contains(u) && ((x = s.current) == null || x.removeChild(u)), m == null || m.disconnect();
    };
  }, [e, f, n, o, i, r, c]), y.createElement("react-child", {
    ref: s,
    style: {
      display: "contents"
    }
  }, ...a);
}), Co = "1.0.5", Eo = /* @__PURE__ */ y.createContext({}), wo = {
  classNames: {},
  styles: {},
  className: "",
  style: {}
}, _o = (e) => {
  const t = y.useContext(Eo);
  return y.useMemo(() => ({
    ...wo,
    ...t[e]
  }), [t[e]]);
};
function ae() {
  return ae = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, ae.apply(null, arguments);
}
function Mt() {
  const {
    getPrefixCls: e,
    direction: t,
    csp: n,
    iconPrefixCls: o,
    theme: r
  } = y.useContext(xr.ConfigContext);
  return {
    theme: r,
    getPrefixCls: e,
    direction: t,
    csp: n,
    iconPrefixCls: o
  };
}
function he(e) {
  var t = h.useRef();
  t.current = e;
  var n = h.useCallback(function() {
    for (var o, r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return (o = t.current) === null || o === void 0 ? void 0 : o.call.apply(o, [t].concat(i));
  }, []);
  return n;
}
function To(e) {
  if (Array.isArray(e)) return e;
}
function Po(e, t) {
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
function en(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function Ro(e, t) {
  if (e) {
    if (typeof e == "string") return en(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? en(e, t) : void 0;
  }
}
function Mo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X(e, t) {
  return To(e) || Po(e, t) || Ro(e, t) || Mo();
}
function Ze() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var tn = Ze() ? h.useLayoutEffect : h.useEffect, Oo = function(t, n) {
  var o = h.useRef(!0);
  tn(function() {
    return t(o.current);
  }, n), tn(function() {
    return o.current = !1, function() {
      o.current = !0;
    };
  }, []);
}, nn = function(t, n) {
  Oo(function(o) {
    if (!o)
      return t();
  }, n);
};
function ke(e) {
  var t = h.useRef(!1), n = h.useState(e), o = X(n, 2), r = o[0], i = o[1];
  h.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function s(a, l) {
    l && t.current || i(a);
  }
  return [r, s];
}
function vt(e) {
  return e !== void 0;
}
function $n(e, t) {
  var n = t || {}, o = n.defaultValue, r = n.value, i = n.onChange, s = n.postState, a = ke(function() {
    return vt(r) ? r : vt(o) ? typeof o == "function" ? o() : o : typeof e == "function" ? e() : e;
  }), l = X(a, 2), c = l[0], f = l[1], u = r !== void 0 ? r : c, d = s ? s(u) : u, m = he(i), v = ke([u]), g = X(v, 2), p = g[0], x = g[1];
  nn(function() {
    var _ = p[0];
    c !== _ && m(c, _);
  }, [p]), nn(function() {
    vt(r) || f(r);
  }, [r]);
  var E = he(function(_, b) {
    f(_, b), x([u], b);
  });
  return [d, E];
}
function z(e) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, z(e);
}
var Dn = {
  exports: {}
}, O = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dt = Symbol.for("react.element"), Nt = Symbol.for("react.portal"), Je = Symbol.for("react.fragment"), et = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), nt = Symbol.for("react.provider"), rt = Symbol.for("react.context"), Ao = Symbol.for("react.server_context"), ot = Symbol.for("react.forward_ref"), it = Symbol.for("react.suspense"), st = Symbol.for("react.suspense_list"), at = Symbol.for("react.memo"), ct = Symbol.for("react.lazy"), ko = Symbol.for("react.offscreen"), Nn;
Nn = Symbol.for("react.module.reference");
function G(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Dt:
        switch (e = e.type, e) {
          case Je:
          case tt:
          case et:
          case it:
          case st:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ao:
              case rt:
              case ot:
              case ct:
              case at:
              case nt:
                return e;
              default:
                return t;
            }
        }
      case Nt:
        return t;
    }
  }
}
O.ContextConsumer = rt;
O.ContextProvider = nt;
O.Element = Dt;
O.ForwardRef = ot;
O.Fragment = Je;
O.Lazy = ct;
O.Memo = at;
O.Portal = Nt;
O.Profiler = tt;
O.StrictMode = et;
O.Suspense = it;
O.SuspenseList = st;
O.isAsyncMode = function() {
  return !1;
};
O.isConcurrentMode = function() {
  return !1;
};
O.isContextConsumer = function(e) {
  return G(e) === rt;
};
O.isContextProvider = function(e) {
  return G(e) === nt;
};
O.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Dt;
};
O.isForwardRef = function(e) {
  return G(e) === ot;
};
O.isFragment = function(e) {
  return G(e) === Je;
};
O.isLazy = function(e) {
  return G(e) === ct;
};
O.isMemo = function(e) {
  return G(e) === at;
};
O.isPortal = function(e) {
  return G(e) === Nt;
};
O.isProfiler = function(e) {
  return G(e) === tt;
};
O.isStrictMode = function(e) {
  return G(e) === et;
};
O.isSuspense = function(e) {
  return G(e) === it;
};
O.isSuspenseList = function(e) {
  return G(e) === st;
};
O.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Je || e === tt || e === et || e === it || e === st || e === ko || typeof e == "object" && e !== null && (e.$$typeof === ct || e.$$typeof === at || e.$$typeof === nt || e.$$typeof === rt || e.$$typeof === ot || e.$$typeof === Nn || e.getModuleId !== void 0);
};
O.typeOf = G;
Dn.exports = O;
var yt = Dn.exports, Lo = Symbol.for("react.element"), Io = Symbol.for("react.transitional.element"), jo = Symbol.for("react.fragment");
function $o(e) {
  return (
    // Base object type
    e && z(e) === "object" && // React Element type
    (e.$$typeof === Lo || e.$$typeof === Io) && // React Fragment type
    e.type === jo
  );
}
var Do = function(t, n) {
  typeof t == "function" ? t(n) : z(t) === "object" && t && "current" in t && (t.current = n);
}, No = function(t) {
  var n, o;
  if (!t)
    return !1;
  if (Bn(t) && t.props.propertyIsEnumerable("ref"))
    return !0;
  var r = yt.isMemo(t) ? t.type.type : t.type;
  return !(typeof r == "function" && !((n = r.prototype) !== null && n !== void 0 && n.render) && r.$$typeof !== yt.ForwardRef || typeof t == "function" && !((o = t.prototype) !== null && o !== void 0 && o.render) && t.$$typeof !== yt.ForwardRef);
};
function Bn(e) {
  return /* @__PURE__ */ cr(e) && !$o(e);
}
var Bo = function(t) {
  if (t && Bn(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function Ho(e, t) {
  for (var n = e, o = 0; o < t.length; o += 1) {
    if (n == null)
      return;
    n = n[t[o]];
  }
  return n;
}
function Vo(e, t) {
  if (z(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (z(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hn(e) {
  var t = Vo(e, "string");
  return z(t) == "symbol" ? t : t + "";
}
function k(e, t, n) {
  return (t = Hn(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function rn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rn(Object(n), !0).forEach(function(o) {
      k(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rn(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function on(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Fo(e) {
  return e && z(e) === "object" && on(e.nativeElement) ? e.nativeElement : on(e) ? e : null;
}
function zo(e) {
  var t = Fo(e);
  if (t)
    return t;
  if (e instanceof y.Component) {
    var n;
    return (n = Ft.findDOMNode) === null || n === void 0 ? void 0 : n.call(Ft, e);
  }
  return null;
}
function Xo(e, t) {
  if (e == null) return {};
  var n = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    n[o] = e[o];
  }
  return n;
}
function sn(e, t) {
  if (e == null) return {};
  var n, o, r = Xo(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++) n = i[o], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var Uo = /* @__PURE__ */ h.createContext({});
function Ee(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function an(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Hn(o.key), o);
  }
}
function we(e, t, n) {
  return t && an(e.prototype, t), n && an(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Ot(e, t) {
  return Ot = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ot(e, t);
}
function lt(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Ot(e, t);
}
function qe(e) {
  return qe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, qe(e);
}
function Vn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Vn = function() {
    return !!e;
  })();
}
function me(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wo(e, t) {
  if (t && (z(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return me(e);
}
function ut(e) {
  var t = Vn();
  return function() {
    var n, o = qe(e);
    if (t) {
      var r = qe(this).constructor;
      n = Reflect.construct(o, arguments, r);
    } else n = o.apply(this, arguments);
    return Wo(this, n);
  };
}
var Ko = /* @__PURE__ */ function(e) {
  lt(n, e);
  var t = ut(n);
  function n() {
    return Ee(this, n), t.apply(this, arguments);
  }
  return we(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(h.Component);
function Go(e) {
  var t = h.useReducer(function(a) {
    return a + 1;
  }, 0), n = X(t, 2), o = n[1], r = h.useRef(e), i = he(function() {
    return r.current;
  }), s = he(function(a) {
    r.current = typeof a == "function" ? a(r.current) : a, o();
  });
  return [i, s];
}
var fe = "none", De = "appear", Ne = "enter", Be = "leave", cn = "none", Q = "prepare", xe = "start", Ce = "active", Bt = "end", Fn = "prepared";
function ln(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function qo(e, t) {
  var n = {
    animationend: ln("Animation", "AnimationEnd"),
    transitionend: ln("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Qo = qo(Ze(), typeof window < "u" ? window : {}), zn = {};
if (Ze()) {
  var Yo = document.createElement("div");
  zn = Yo.style;
}
var He = {};
function Xn(e) {
  if (He[e])
    return He[e];
  var t = Qo[e];
  if (t)
    for (var n = Object.keys(t), o = n.length, r = 0; r < o; r += 1) {
      var i = n[r];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in zn)
        return He[e] = t[i], He[e];
    }
  return "";
}
var Un = Xn("animationend"), Wn = Xn("transitionend"), Kn = !!(Un && Wn), un = Un || "animationend", fn = Wn || "transitionend";
function dn(e, t) {
  if (!e) return null;
  if (z(e) === "object") {
    var n = t.replace(/-\w/g, function(o) {
      return o[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Zo = function(e) {
  var t = ee();
  function n(r) {
    r && (r.removeEventListener(fn, e), r.removeEventListener(un, e));
  }
  function o(r) {
    t.current && t.current !== r && n(t.current), r && r !== t.current && (r.addEventListener(fn, e), r.addEventListener(un, e), t.current = r);
  }
  return h.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [o, n];
};
var Gn = Ze() ? lr : de, qn = function(t) {
  return +setTimeout(t, 16);
}, Qn = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (qn = function(t) {
  return window.requestAnimationFrame(t);
}, Qn = function(t) {
  return window.cancelAnimationFrame(t);
});
var mn = 0, Ht = /* @__PURE__ */ new Map();
function Yn(e) {
  Ht.delete(e);
}
var At = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  mn += 1;
  var o = mn;
  function r(i) {
    if (i === 0)
      Yn(o), t();
    else {
      var s = qn(function() {
        r(i - 1);
      });
      Ht.set(o, s);
    }
  }
  return r(n), o;
};
At.cancel = function(e) {
  var t = Ht.get(e);
  return Yn(e), Qn(t);
};
const Jo = function() {
  var e = h.useRef(null);
  function t() {
    At.cancel(e.current);
  }
  function n(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = At(function() {
      r <= 1 ? o({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : n(o, r - 1);
    });
    e.current = i;
  }
  return h.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var ei = [Q, xe, Ce, Bt], ti = [Q, Fn], Zn = !1, ni = !0;
function Jn(e) {
  return e === Ce || e === Bt;
}
const ri = function(e, t, n) {
  var o = ke(cn), r = X(o, 2), i = r[0], s = r[1], a = Jo(), l = X(a, 2), c = l[0], f = l[1];
  function u() {
    s(Q, !0);
  }
  var d = t ? ti : ei;
  return Gn(function() {
    if (i !== cn && i !== Bt) {
      var m = d.indexOf(i), v = d[m + 1], g = n(i);
      g === Zn ? s(v, !0) : v && c(function(p) {
        function x() {
          p.isCanceled() || s(v, !0);
        }
        g === !0 ? x() : Promise.resolve(g).then(x);
      });
    }
  }, [e, i]), h.useEffect(function() {
    return function() {
      f();
    };
  }, []), [u, i];
};
function oi(e, t, n, o) {
  var r = o.motionEnter, i = r === void 0 ? !0 : r, s = o.motionAppear, a = s === void 0 ? !0 : s, l = o.motionLeave, c = l === void 0 ? !0 : l, f = o.motionDeadline, u = o.motionLeaveImmediately, d = o.onAppearPrepare, m = o.onEnterPrepare, v = o.onLeavePrepare, g = o.onAppearStart, p = o.onEnterStart, x = o.onLeaveStart, E = o.onAppearActive, _ = o.onEnterActive, b = o.onLeaveActive, T = o.onAppearEnd, S = o.onEnterEnd, R = o.onLeaveEnd, M = o.onVisibleChanged, L = ke(), B = X(L, 2), D = B[0], A = B[1], P = Go(fe), I = X(P, 2), j = I[0], N = I[1], Y = ke(null), Z = X(Y, 2), pe = Z[0], ge = Z[1], U = j(), ne = ee(!1), ce = ee(null);
  function H() {
    return n();
  }
  var re = ee(!1);
  function le() {
    N(fe), ge(null, !0);
  }
  var q = he(function(V) {
    var C = j();
    if (C !== fe) {
      var $ = H();
      if (!(V && !V.deadline && V.target !== $)) {
        var J = re.current, $e;
        C === De && J ? $e = T == null ? void 0 : T($, V) : C === Ne && J ? $e = S == null ? void 0 : S($, V) : C === Be && J && ($e = R == null ? void 0 : R($, V)), J && $e !== !1 && le();
      }
    }
  }), ve = Zo(q), ye = X(ve, 1), be = ye[0], _e = function(C) {
    switch (C) {
      case De:
        return k(k(k({}, Q, d), xe, g), Ce, E);
      case Ne:
        return k(k(k({}, Q, m), xe, p), Ce, _);
      case Be:
        return k(k(k({}, Q, v), xe, x), Ce, b);
      default:
        return {};
    }
  }, oe = h.useMemo(function() {
    return _e(U);
  }, [U]), ue = ri(U, !e, function(V) {
    if (V === Q) {
      var C = oe[Q];
      return C ? C(H()) : Zn;
    }
    if (ie in oe) {
      var $;
      ge((($ = oe[ie]) === null || $ === void 0 ? void 0 : $.call(oe, H(), null)) || null);
    }
    return ie === Ce && U !== fe && (be(H()), f > 0 && (clearTimeout(ce.current), ce.current = setTimeout(function() {
      q({
        deadline: !0
      });
    }, f))), ie === Fn && le(), ni;
  }), Ie = X(ue, 2), Te = Ie[0], ie = Ie[1], mt = Jn(ie);
  re.current = mt;
  var je = ee(null);
  Gn(function() {
    if (!(ne.current && je.current === t)) {
      A(t);
      var V = ne.current;
      ne.current = !0;
      var C;
      !V && t && a && (C = De), V && t && i && (C = Ne), (V && !t && c || !V && u && !t && c) && (C = Be);
      var $ = _e(C);
      C && (e || $[Q]) ? (N(C), Te()) : N(fe), je.current = t;
    }
  }, [t]), de(function() {
    // Cancel appear
    (U === De && !a || // Cancel enter
    U === Ne && !i || // Cancel leave
    U === Be && !c) && N(fe);
  }, [a, i, c]), de(function() {
    return function() {
      ne.current = !1, clearTimeout(ce.current);
    };
  }, []);
  var Pe = h.useRef(!1);
  de(function() {
    D && (Pe.current = !0), D !== void 0 && U === fe && ((Pe.current || D) && (M == null || M(D)), Pe.current = !0);
  }, [D, U]);
  var Re = pe;
  return oe[Q] && ie === xe && (Re = w({
    transition: "none"
  }, Re)), [U, ie, Re, D ?? t];
}
function ii(e) {
  var t = e;
  z(e) === "object" && (t = e.transitionSupport);
  function n(r, i) {
    return !!(r.motionName && t && i !== !1);
  }
  var o = /* @__PURE__ */ h.forwardRef(function(r, i) {
    var s = r.visible, a = s === void 0 ? !0 : s, l = r.removeOnLeave, c = l === void 0 ? !0 : l, f = r.forceRender, u = r.children, d = r.motionName, m = r.leavedClassName, v = r.eventProps, g = h.useContext(Uo), p = g.motion, x = n(r, p), E = ee(), _ = ee();
    function b() {
      try {
        return E.current instanceof HTMLElement ? E.current : zo(_.current);
      } catch {
        return null;
      }
    }
    var T = oi(x, a, b, r), S = X(T, 4), R = S[0], M = S[1], L = S[2], B = S[3], D = h.useRef(B);
    B && (D.current = !0);
    var A = h.useCallback(function(Z) {
      E.current = Z, Do(i, Z);
    }, [i]), P, I = w(w({}, v), {}, {
      visible: a
    });
    if (!u)
      P = null;
    else if (R === fe)
      B ? P = u(w({}, I), A) : !c && D.current && m ? P = u(w(w({}, I), {}, {
        className: m
      }), A) : f || !c && !m ? P = u(w(w({}, I), {}, {
        style: {
          display: "none"
        }
      }), A) : P = null;
    else {
      var j;
      M === Q ? j = "prepare" : Jn(M) ? j = "active" : M === xe && (j = "start");
      var N = dn(d, "".concat(R, "-").concat(j));
      P = u(w(w({}, I), {}, {
        className: te(dn(d, R), k(k({}, N, N && j), d, typeof d == "string")),
        style: L
      }), A);
    }
    if (/* @__PURE__ */ h.isValidElement(P) && No(P)) {
      var Y = Bo(P);
      Y || (P = /* @__PURE__ */ h.cloneElement(P, {
        ref: A
      }));
    }
    return /* @__PURE__ */ h.createElement(Ko, {
      ref: _
    }, P);
  });
  return o.displayName = "CSSMotion", o;
}
const er = ii(Kn);
var kt = "add", Lt = "keep", It = "remove", bt = "removed";
function si(e) {
  var t;
  return e && z(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, w(w({}, t), {}, {
    key: String(t.key)
  });
}
function jt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(si);
}
function ai() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], o = 0, r = t.length, i = jt(e), s = jt(t);
  i.forEach(function(c) {
    for (var f = !1, u = o; u < r; u += 1) {
      var d = s[u];
      if (d.key === c.key) {
        o < u && (n = n.concat(s.slice(o, u).map(function(m) {
          return w(w({}, m), {}, {
            status: kt
          });
        })), o = u), n.push(w(w({}, d), {}, {
          status: Lt
        })), o += 1, f = !0;
        break;
      }
    }
    f || n.push(w(w({}, c), {}, {
      status: It
    }));
  }), o < r && (n = n.concat(s.slice(o).map(function(c) {
    return w(w({}, c), {}, {
      status: kt
    });
  })));
  var a = {};
  n.forEach(function(c) {
    var f = c.key;
    a[f] = (a[f] || 0) + 1;
  });
  var l = Object.keys(a).filter(function(c) {
    return a[c] > 1;
  });
  return l.forEach(function(c) {
    n = n.filter(function(f) {
      var u = f.key, d = f.status;
      return u !== c || d !== It;
    }), n.forEach(function(f) {
      f.key === c && (f.status = Lt);
    });
  }), n;
}
var ci = ["component", "children", "onVisibleChanged", "onAllRemoved"], li = ["status"], ui = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function fi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : er, n = /* @__PURE__ */ function(o) {
    lt(i, o);
    var r = ut(i);
    function i() {
      var s;
      Ee(this, i);
      for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++)
        l[c] = arguments[c];
      return s = r.call.apply(r, [this].concat(l)), k(me(s), "state", {
        keyEntities: []
      }), k(me(s), "removeKey", function(f) {
        s.setState(function(u) {
          var d = u.keyEntities.map(function(m) {
            return m.key !== f ? m : w(w({}, m), {}, {
              status: bt
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var u = s.state.keyEntities, d = u.filter(function(m) {
            var v = m.status;
            return v !== bt;
          }).length;
          d === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return we(i, [{
      key: "render",
      value: function() {
        var a = this, l = this.state.keyEntities, c = this.props, f = c.component, u = c.children, d = c.onVisibleChanged;
        c.onAllRemoved;
        var m = sn(c, ci), v = f || h.Fragment, g = {};
        return ui.forEach(function(p) {
          g[p] = m[p], delete m[p];
        }), delete m.keys, /* @__PURE__ */ h.createElement(v, m, l.map(function(p, x) {
          var E = p.status, _ = sn(p, li), b = E === kt || E === Lt;
          return /* @__PURE__ */ h.createElement(t, ae({}, g, {
            key: _.key,
            visible: b,
            eventProps: _,
            onVisibleChanged: function(S) {
              d == null || d(S, {
                key: _.key
              }), S || a.removeKey(_.key);
            }
          }), function(T, S) {
            return u(w(w({}, T), {}, {
              index: x
            }), S);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, l) {
        var c = a.keys, f = l.keyEntities, u = jt(c), d = ai(f, u);
        return {
          keyEntities: d.filter(function(m) {
            var v = f.find(function(g) {
              var p = g.key;
              return m.key === p;
            });
            return !(v && v.status === bt && m.status === It);
          })
        };
      }
    }]), i;
  }(h.Component);
  return k(n, "defaultProps", {
    component: "div"
  }), n;
}
fi(Kn);
var tr = /* @__PURE__ */ we(function e() {
  Ee(this, e);
}), nr = "CALC_UNIT", di = new RegExp(nr, "g");
function St(e) {
  return typeof e == "number" ? "".concat(e).concat(nr) : e;
}
var mi = /* @__PURE__ */ function(e) {
  lt(n, e);
  var t = ut(n);
  function n(o, r) {
    var i;
    Ee(this, n), i = t.call(this), k(me(i), "result", ""), k(me(i), "unitlessCssVar", void 0), k(me(i), "lowPriority", void 0);
    var s = z(o);
    return i.unitlessCssVar = r, o instanceof n ? i.result = "(".concat(o.result, ")") : s === "number" ? i.result = St(o) : s === "string" && (i.result = o), i;
  }
  return we(n, [{
    key: "add",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " + ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " + ").concat(St(r))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(r) {
      return r instanceof n ? this.result = "".concat(this.result, " - ").concat(r.getResult()) : (typeof r == "number" || typeof r == "string") && (this.result = "".concat(this.result, " - ").concat(St(r))), this.lowPriority = !0, this;
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
      }) && (l = !1), this.result = this.result.replace(di, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(tr), hi = /* @__PURE__ */ function(e) {
  lt(n, e);
  var t = ut(n);
  function n(o) {
    var r;
    return Ee(this, n), r = t.call(this), k(me(r), "result", 0), o instanceof n ? r.result = o.result : typeof o == "number" && (r.result = o), r;
  }
  return we(n, [{
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
}(tr), pi = function(t, n) {
  var o = t === "css" ? mi : hi;
  return function(r) {
    return new o(r, n);
  };
}, hn = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function pn(e, t, n, o) {
  var r = w({}, t[e]);
  if (o != null && o.deprecatedTokens) {
    var i = o.deprecatedTokens;
    i.forEach(function(a) {
      var l = X(a, 2), c = l[0], f = l[1];
      if (r != null && r[c] || r != null && r[f]) {
        var u;
        (u = r[f]) !== null && u !== void 0 || (r[f] = r == null ? void 0 : r[c]);
      }
    });
  }
  var s = w(w({}, n), r);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var rr = typeof CSSINJS_STATISTIC < "u", $t = !0;
function Vt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!rr)
    return Object.assign.apply(Object, [{}].concat(t));
  $t = !1;
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
  }), $t = !0, o;
}
var gn = {};
function gi() {
}
var vi = function(t) {
  var n, o = t, r = gi;
  return rr && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), o = new Proxy(t, {
    get: function(s, a) {
      if ($t) {
        var l;
        (l = n) === null || l === void 0 || l.add(a);
      }
      return s[a];
    }
  }), r = function(s, a) {
    var l;
    gn[s] = {
      global: Array.from(n),
      component: w(w({}, (l = gn[s]) === null || l === void 0 ? void 0 : l.component), a)
    };
  }), {
    token: o,
    keys: n,
    flush: r
  };
};
function vn(e, t, n) {
  if (typeof n == "function") {
    var o;
    return n(Vt(t, (o = t[e]) !== null && o !== void 0 ? o : {}));
  }
  return n ?? {};
}
function yi(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "max(".concat(o.map(function(i) {
        return Tt(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
        o[r] = arguments[r];
      return "min(".concat(o.map(function(i) {
        return Tt(i);
      }).join(","), ")");
    }
  };
}
var bi = 1e3 * 60 * 10, Si = /* @__PURE__ */ function() {
  function e() {
    Ee(this, e), k(this, "map", /* @__PURE__ */ new Map()), k(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), k(this, "nextID", 0), k(this, "lastAccessBeat", /* @__PURE__ */ new Map()), k(this, "accessBeat", 0);
  }
  return we(e, [{
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
          o - r > bi && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), yn = new Si();
function xi(e, t) {
  return y.useMemo(function() {
    var n = yn.get(t);
    if (n)
      return n;
    var o = e();
    return yn.set(t, o), o;
  }, t);
}
var Ci = function() {
  return {};
};
function Ei(e) {
  var t = e.useCSP, n = t === void 0 ? Ci : t, o = e.useToken, r = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function l(d, m, v, g) {
    var p = Array.isArray(d) ? d[0] : d;
    function x(M) {
      return "".concat(String(p)).concat(M.slice(0, 1).toUpperCase()).concat(M.slice(1));
    }
    var E = (g == null ? void 0 : g.unitless) || {}, _ = typeof a == "function" ? a(d) : {}, b = w(w({}, _), {}, k({}, x("zIndexPopup"), !0));
    Object.keys(E).forEach(function(M) {
      b[x(M)] = E[M];
    });
    var T = w(w({}, g), {}, {
      unitless: b,
      prefixToken: x
    }), S = f(d, m, v, T), R = c(p, v, T);
    return function(M) {
      var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : M, B = S(M, L), D = X(B, 2), A = D[1], P = R(L), I = X(P, 2), j = I[0], N = I[1];
      return [j, A, N];
    };
  }
  function c(d, m, v) {
    var g = v.unitless, p = v.injectStyle, x = p === void 0 ? !0 : p, E = v.prefixToken, _ = v.ignore, b = function(R) {
      var M = R.rootCls, L = R.cssVar, B = L === void 0 ? {} : L, D = o(), A = D.realToken;
      return Mr({
        path: [d],
        prefix: B.prefix,
        key: B.key,
        unitless: g,
        ignore: _,
        token: A,
        scope: M
      }, function() {
        var P = vn(d, A, m), I = pn(d, A, P, {
          deprecatedTokens: v == null ? void 0 : v.deprecatedTokens
        });
        return Object.keys(P).forEach(function(j) {
          I[E(j)] = I[j], delete I[j];
        }), I;
      }), null;
    }, T = function(R) {
      var M = o(), L = M.cssVar;
      return [function(B) {
        return x && L ? /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(b, {
          rootCls: R,
          cssVar: L,
          component: d
        }), B) : B;
      }, L == null ? void 0 : L.key];
    };
    return T;
  }
  function f(d, m, v) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(d) ? d : [d, d], x = X(p, 1), E = x[0], _ = p.join("-"), b = e.layer || {
      name: "antd"
    };
    return function(T) {
      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T, R = o(), M = R.theme, L = R.realToken, B = R.hashId, D = R.token, A = R.cssVar, P = r(), I = P.rootPrefixCls, j = P.iconPrefixCls, N = n(), Y = A ? "css" : "js", Z = xi(function() {
        var H = /* @__PURE__ */ new Set();
        return A && Object.keys(g.unitless || {}).forEach(function(re) {
          H.add(ht(re, A.prefix)), H.add(ht(re, hn(E, A.prefix)));
        }), pi(Y, H);
      }, [Y, E, A == null ? void 0 : A.prefix]), pe = yi(Y), ge = pe.max, U = pe.min, ne = {
        theme: M,
        token: D,
        hashId: B,
        nonce: function() {
          return N.nonce;
        },
        clientOnly: g.clientOnly,
        layer: b,
        // antd is always at top of styles
        order: g.order || -999
      };
      typeof i == "function" && zt(w(w({}, ne), {}, {
        clientOnly: !1,
        path: ["Shared", I]
      }), function() {
        return i(D, {
          prefix: {
            rootPrefixCls: I,
            iconPrefixCls: j
          },
          csp: N
        });
      });
      var ce = zt(w(w({}, ne), {}, {
        path: [_, T, j]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var H = vi(D), re = H.token, le = H.flush, q = vn(E, L, v), ve = ".".concat(T), ye = pn(E, L, q, {
          deprecatedTokens: g.deprecatedTokens
        });
        A && q && z(q) === "object" && Object.keys(q).forEach(function(ue) {
          q[ue] = "var(".concat(ht(ue, hn(E, A.prefix)), ")");
        });
        var be = Vt(re, {
          componentCls: ve,
          prefixCls: T,
          iconCls: ".".concat(j),
          antCls: ".".concat(I),
          calc: Z,
          // @ts-ignore
          max: ge,
          // @ts-ignore
          min: U
        }, A ? q : ye), _e = m(be, {
          hashId: B,
          prefixCls: T,
          rootPrefixCls: I,
          iconPrefixCls: j
        });
        le(E, ye);
        var oe = typeof s == "function" ? s(be, T, S, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : oe, _e];
      });
      return [ce, B];
    };
  }
  function u(d, m, v) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = f(d, m, v, w({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), x = function(_) {
      var b = _.prefixCls, T = _.rootCls, S = T === void 0 ? b : T;
      return p(b, S), null;
    };
    return x;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: u,
    genComponentStyleHook: f
  };
}
function Le(e) {
  "@babel/helpers - typeof";
  return Le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Le(e);
}
function wi(e, t) {
  if (Le(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Le(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _i(e) {
  var t = wi(e, "string");
  return Le(t) == "symbol" ? t : t + "";
}
function K(e, t, n) {
  return (t = _i(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
const F = Math.round;
function xt(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], o = n.map((r) => parseFloat(r));
  for (let r = 0; r < 3; r += 1)
    o[r] = t(o[r] || 0, n[r] || "", r);
  return n[3] ? o[3] = n[3].includes("%") ? o[3] / 100 : o[3] : o[3] = 1, o;
}
const bn = (e, t, n) => n === 0 ? e : e / 100;
function Me(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class se {
  constructor(t) {
    K(this, "isValid", !0), K(this, "r", 0), K(this, "g", 0), K(this, "b", 0), K(this, "a", 1), K(this, "_h", void 0), K(this, "_s", void 0), K(this, "_l", void 0), K(this, "_v", void 0), K(this, "_max", void 0), K(this, "_min", void 0), K(this, "_brightness", void 0);
    function n(o) {
      return o[0] in t && o[1] in t && o[2] in t;
    }
    if (t) if (typeof t == "string") {
      let r = function(i) {
        return o.startsWith(i);
      };
      const o = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(o) ? this.fromHexString(o) : r("rgb") ? this.fromRgbString(o) : r("hsl") ? this.fromHslString(o) : (r("hsv") || r("hsb")) && this.fromHsvString(o);
    } else if (t instanceof se)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = Me(t.r), this.g = Me(t.g), this.b = Me(t.b), this.a = typeof t.a == "number" ? Me(t.a, 1) : 1;
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
      t === 0 ? this._h = 0 : this._h = F(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
      r: F(i("r")),
      g: F(i("g")),
      b: F(i("b")),
      a: F(i("a") * 100) / 100
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
    const n = this._c(t), o = this.a + n.a * (1 - this.a), r = (i) => F((this[i] * this.a + n[i] * n.a * (1 - this.a)) / o);
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
      const i = F(this.a * 255).toString(16);
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
    const t = this.getHue(), n = F(this.getSaturation() * 100), o = F(this.getLightness() * 100);
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
    return r[t] = Me(n, o), r;
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
      const d = F(o * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const l = t / 60, c = (1 - Math.abs(2 * o - 1)) * n, f = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = c, s = f) : l >= 1 && l < 2 ? (i = f, s = c) : l >= 2 && l < 3 ? (s = c, a = f) : l >= 3 && l < 4 ? (s = f, a = c) : l >= 4 && l < 5 ? (i = f, a = c) : l >= 5 && l < 6 && (i = c, a = f);
    const u = o - c / 2;
    this.r = F((i + u) * 255), this.g = F((s + u) * 255), this.b = F((a + u) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: o,
    a: r
  }) {
    this._h = t % 360, this._s = n, this._v = o, this.a = typeof r == "number" ? r : 1;
    const i = F(o * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), l = s - a, c = F(o * (1 - n) * 255), f = F(o * (1 - n * l) * 255), u = F(o * (1 - n * (1 - l)) * 255);
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
    const n = xt(t, bn);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = xt(t, bn);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = xt(t, (o, r) => (
      // Convert percentage to number. e.g. 50% -> 128
      r.includes("%") ? F(o / 100 * 255) : o
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
const Ti = {
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
}, Pi = Object.assign(Object.assign({}, Ti), {
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
function Ct(e) {
  return e >= 0 && e <= 255;
}
function Ve(e, t) {
  const {
    r: n,
    g: o,
    b: r,
    a: i
  } = new se(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: l
  } = new se(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const f = Math.round((n - s * (1 - c)) / c), u = Math.round((o - a * (1 - c)) / c), d = Math.round((r - l * (1 - c)) / c);
    if (Ct(f) && Ct(u) && Ct(d))
      return new se({
        r: f,
        g: u,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new se({
    r: n,
    g: o,
    b: r,
    a: 1
  }).toRgbString();
}
var Ri = function(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
    t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function Mi(e) {
  const {
    override: t
  } = e, n = Ri(e, ["override"]), o = Object.assign({}, t);
  Object.keys(Pi).forEach((d) => {
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
    colorSplit: Ve(r.colorBorderSecondary, r.colorBgContainer),
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
    colorErrorOutline: Ve(r.colorErrorBg, r.colorBgContainer),
    colorWarningOutline: Ve(r.colorWarningBg, r.colorBgContainer),
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
    controlOutline: Ve(r.colorPrimaryBg, r.colorBgContainer),
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
      0 1px 2px -2px ${new se("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new se("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new se("rgba(0, 0, 0, 0.09)").toRgbString()}
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
const Oi = {
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
}, Ai = {
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
}, ki = Or(_t.defaultAlgorithm), Li = {
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
}, or = (e, t, n) => {
  const o = n.getDerivativeToken(e), {
    override: r,
    ...i
  } = t;
  let s = {
    ...o,
    override: r
  };
  return s = Mi(s), i && Object.entries(i).forEach(([a, l]) => {
    const {
      theme: c,
      ...f
    } = l;
    let u = f;
    c && (u = or({
      ...s,
      ...f
    }, {
      override: f
    }, c)), s[a] = u;
  }), s;
};
function Ii() {
  const {
    token: e,
    hashed: t,
    theme: n = ki,
    override: o,
    cssVar: r
  } = y.useContext(_t._internalContext), [i, s, a] = Ar(n, [_t.defaultSeed, e], {
    salt: `${Co}-${t || ""}`,
    override: o,
    getComputedToken: or,
    cssVar: r && {
      prefix: r.prefix,
      key: r.key,
      unitless: Oi,
      ignore: Ai,
      preserve: Li
    }
  });
  return [n, a, t ? s : "", i, r];
}
const {
  genStyleHooks: ji
} = Ei({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Mt();
    return {
      iconPrefixCls: t,
      rootPrefixCls: e()
    };
  },
  useToken: () => {
    const [e, t, n, o, r] = Ii();
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
    } = Mt();
    return e ?? {};
  },
  layer: {
    name: "antdx",
    dependencies: ["antd"]
  }
});
var $i = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, Di = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Ni = "".concat($i, " ").concat(Di).split(/[\s\n]+/), Bi = "aria-", Hi = "data-";
function Sn(e, t) {
  return e.indexOf(t) === 0;
}
function Vi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = w({}, t);
  var o = {};
  return Object.keys(e).forEach(function(r) {
    // Aria
    (n.aria && (r === "role" || Sn(r, Bi)) || // Data
    n.data && Sn(r, Hi) || // Attr
    n.attr && Ni.includes(r)) && (o[r] = e[r]);
  }), o;
}
function Fi(e, t) {
  return ur(e, () => {
    const n = t(), {
      nativeElement: o
    } = n;
    return new Proxy(o, {
      get(r, i) {
        return n[i] ? n[i] : Reflect.get(r, i);
      }
    });
  });
}
const ir = /* @__PURE__ */ h.createContext({}), xn = () => ({
  height: 0
}), Cn = (e) => ({
  height: e.scrollHeight
});
function zi(e) {
  const {
    title: t,
    onOpenChange: n,
    open: o,
    children: r,
    className: i,
    style: s,
    classNames: a = {},
    styles: l = {},
    closable: c,
    forceRender: f
  } = e, {
    prefixCls: u
  } = h.useContext(ir), d = `${u}-header`;
  return /* @__PURE__ */ h.createElement(er, {
    motionEnter: !0,
    motionLeave: !0,
    motionName: `${d}-motion`,
    leavedClassName: `${d}-motion-hidden`,
    onEnterStart: xn,
    onEnterActive: Cn,
    onLeaveStart: Cn,
    onLeaveActive: xn,
    visible: o,
    forceRender: f
  }, ({
    className: m,
    style: v
  }) => /* @__PURE__ */ h.createElement("div", {
    className: te(d, m, i),
    style: {
      ...v,
      ...s
    }
  }, (c !== !1 || t) && /* @__PURE__ */ h.createElement("div", {
    className: (
      // We follow antd naming standard here.
      // So the header part is use `-header` suffix.
      // Though its little bit weird for double `-header`.
      te(`${d}-header`, a.header)
    ),
    style: {
      ...l.header
    }
  }, /* @__PURE__ */ h.createElement("div", {
    className: `${d}-title`
  }, t), c !== !1 && /* @__PURE__ */ h.createElement("div", {
    className: `${d}-close`
  }, /* @__PURE__ */ h.createElement(Mn, {
    type: "text",
    icon: /* @__PURE__ */ h.createElement(wr, null),
    size: "small",
    onClick: () => {
      n == null || n(!o);
    }
  }))), r && /* @__PURE__ */ h.createElement("div", {
    className: te(`${d}-content`, a.content),
    style: {
      ...l.content
    }
  }, r)));
}
const ft = /* @__PURE__ */ h.createContext(null);
function Xi(e, t) {
  const {
    className: n,
    action: o,
    onClick: r,
    ...i
  } = e, s = h.useContext(ft), {
    prefixCls: a,
    disabled: l
  } = s, c = s[o], f = l ?? i.disabled ?? s[`${o}Disabled`];
  return /* @__PURE__ */ h.createElement(Mn, ae({
    type: "text"
  }, i, {
    ref: t,
    onClick: (u) => {
      f || (c && c(), r && r(u));
    },
    className: te(a, n, {
      [`${a}-disabled`]: f
    })
  }));
}
const dt = /* @__PURE__ */ h.forwardRef(Xi);
function Ui(e, t) {
  return /* @__PURE__ */ h.createElement(dt, ae({
    icon: /* @__PURE__ */ h.createElement(_r, null)
  }, e, {
    action: "onClear",
    ref: t
  }));
}
const Wi = /* @__PURE__ */ h.forwardRef(Ui), Ki = /* @__PURE__ */ fr((e) => {
  const {
    className: t
  } = e;
  return /* @__PURE__ */ y.createElement("svg", {
    color: "currentColor",
    viewBox: "0 0 1000 1000",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: t
  }, /* @__PURE__ */ y.createElement("title", null, "Stop Loading"), /* @__PURE__ */ y.createElement("rect", {
    fill: "currentColor",
    height: "250",
    rx: "24",
    ry: "24",
    width: "250",
    x: "375",
    y: "375"
  }), /* @__PURE__ */ y.createElement("circle", {
    cx: "500",
    cy: "500",
    fill: "none",
    r: "450",
    stroke: "currentColor",
    strokeWidth: "100",
    opacity: "0.45"
  }), /* @__PURE__ */ y.createElement("circle", {
    cx: "500",
    cy: "500",
    fill: "none",
    r: "450",
    stroke: "currentColor",
    strokeWidth: "100",
    strokeDasharray: "600 9999999"
  }, /* @__PURE__ */ y.createElement("animateTransform", {
    attributeName: "transform",
    dur: "1s",
    from: "0 500 500",
    repeatCount: "indefinite",
    to: "360 500 500",
    type: "rotate"
  })));
});
function Gi(e, t) {
  const {
    prefixCls: n
  } = h.useContext(ft), {
    className: o
  } = e;
  return /* @__PURE__ */ h.createElement(dt, ae({
    icon: null,
    color: "primary",
    variant: "text",
    shape: "circle"
  }, e, {
    className: te(o, `${n}-loading-button`),
    action: "onCancel",
    ref: t
  }), /* @__PURE__ */ h.createElement(Ki, {
    className: `${n}-loading-icon`
  }));
}
const En = /* @__PURE__ */ h.forwardRef(Gi);
function qi(e, t) {
  return /* @__PURE__ */ h.createElement(dt, ae({
    icon: /* @__PURE__ */ h.createElement(Tr, null),
    type: "primary",
    shape: "circle"
  }, e, {
    action: "onSend",
    ref: t
  }));
}
const wn = /* @__PURE__ */ h.forwardRef(qi), Oe = 1e3, Ae = 4, Ke = 140, _n = Ke / 2, Fe = 250, Tn = 500, ze = 0.8;
function Qi({
  className: e
}) {
  return /* @__PURE__ */ y.createElement("svg", {
    color: "currentColor",
    viewBox: `0 0 ${Oe} ${Oe}`,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: e
  }, /* @__PURE__ */ y.createElement("title", null, "Speech Recording"), Array.from({
    length: Ae
  }).map((t, n) => {
    const o = (Oe - Ke * Ae) / (Ae - 1), r = n * (o + Ke), i = Oe / 2 - Fe / 2, s = Oe / 2 - Tn / 2;
    return /* @__PURE__ */ y.createElement("rect", {
      fill: "currentColor",
      rx: _n,
      ry: _n,
      height: Fe,
      width: Ke,
      x: r,
      y: i,
      key: n
    }, /* @__PURE__ */ y.createElement("animate", {
      attributeName: "height",
      values: `${Fe}; ${Tn}; ${Fe}`,
      keyTimes: "0; 0.5; 1",
      dur: `${ze}s`,
      begin: `${ze / Ae * n}s`,
      repeatCount: "indefinite"
    }), /* @__PURE__ */ y.createElement("animate", {
      attributeName: "y",
      values: `${i}; ${s}; ${i}`,
      keyTimes: "0; 0.5; 1",
      dur: `${ze}s`,
      begin: `${ze / Ae * n}s`,
      repeatCount: "indefinite"
    }));
  }));
}
function Yi(e, t) {
  const {
    speechRecording: n,
    onSpeechDisabled: o,
    prefixCls: r
  } = h.useContext(ft);
  let i = null;
  return n ? i = /* @__PURE__ */ h.createElement(Qi, {
    className: `${r}-recording-icon`
  }) : o ? i = /* @__PURE__ */ h.createElement(Pr, null) : i = /* @__PURE__ */ h.createElement(Rr, null), /* @__PURE__ */ h.createElement(dt, ae({
    icon: i,
    color: "primary",
    variant: "text"
  }, e, {
    action: "onSpeech",
    ref: t
  }));
}
const Zi = /* @__PURE__ */ h.forwardRef(Yi), Ji = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e, o = `${t}-header`;
  return {
    [t]: {
      [o]: {
        borderBottomWidth: e.lineWidth,
        borderBottomStyle: "solid",
        borderBottomColor: e.colorBorder,
        // ======================== Header ========================
        "&-header": {
          background: e.colorFillAlter,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          paddingBlock: n(e.paddingSM).sub(e.lineWidthBold).equal(),
          paddingInlineStart: e.padding,
          paddingInlineEnd: e.paddingXS,
          display: "flex",
          [`${o}-title`]: {
            flex: "auto"
          }
        },
        // ======================= Content ========================
        "&-content": {
          padding: e.padding
        },
        // ======================== Motion ========================
        "&-motion": {
          transition: ["height", "border"].map((r) => `${r} ${e.motionDurationSlow}`).join(","),
          overflow: "hidden",
          "&-enter-start, &-leave-active": {
            borderBottomColor: "transparent"
          },
          "&-hidden": {
            display: "none"
          }
        }
      }
    }
  };
}, es = (e) => {
  const {
    componentCls: t,
    padding: n,
    paddingSM: o,
    paddingXS: r,
    lineWidth: i,
    lineWidthBold: s,
    calc: a
  } = e;
  return {
    [t]: {
      position: "relative",
      width: "100%",
      boxSizing: "border-box",
      boxShadow: `${e.boxShadowTertiary}`,
      transition: `background ${e.motionDurationSlow}`,
      // Border
      borderRadius: {
        _skip_check_: !0,
        value: a(e.borderRadius).mul(2).equal()
      },
      borderColor: e.colorBorder,
      borderWidth: 0,
      borderStyle: "solid",
      // Border
      "&:after": {
        content: '""',
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        transition: `border-color ${e.motionDurationSlow}`,
        borderRadius: {
          _skip_check_: !0,
          value: "inherit"
        },
        borderStyle: "inherit",
        borderColor: "inherit",
        borderWidth: i
      },
      // Focus
      "&:focus-within": {
        boxShadow: `${e.boxShadowSecondary}`,
        borderColor: e.colorPrimary,
        "&:after": {
          borderWidth: s
        }
      },
      "&-disabled": {
        background: e.colorBgContainerDisabled
      },
      // ============================== RTL ==============================
      [`&${t}-rtl`]: {
        direction: "rtl"
      },
      // ============================ Content ============================
      [`${t}-content`]: {
        display: "flex",
        gap: r,
        width: "100%",
        paddingBlock: o,
        paddingInlineStart: n,
        paddingInlineEnd: o,
        boxSizing: "border-box",
        alignItems: "flex-end"
      },
      // ============================ Prefix =============================
      [`${t}-prefix`]: {
        flex: "none"
      },
      // ============================= Input =============================
      [`${t}-input`]: {
        padding: 0,
        borderRadius: 0,
        flex: "auto",
        alignSelf: "center",
        minHeight: "auto"
      },
      // ============================ Actions ============================
      [`${t}-actions-list`]: {
        flex: "none",
        display: "flex",
        "&-presets": {
          gap: e.paddingXS
        }
      },
      [`${t}-actions-btn`]: {
        "&-disabled": {
          opacity: 0.45
        },
        "&-loading-button": {
          padding: 0,
          border: 0
        },
        "&-loading-icon": {
          height: e.controlHeight,
          width: e.controlHeight,
          verticalAlign: "top"
        },
        "&-recording-icon": {
          height: "1.2em",
          width: "1.2em",
          verticalAlign: "top"
        }
      }
    }
  };
}, ts = () => ({}), ns = ji("Sender", (e) => {
  const {
    paddingXS: t,
    calc: n
  } = e, o = Vt(e, {
    SenderContentMaxWidth: `calc(100% - ${Tt(n(t).add(32).equal())})`
  });
  return [es(o), Ji(o)];
}, ts);
let Qe;
!Qe && typeof window < "u" && (Qe = window.SpeechRecognition || window.webkitSpeechRecognition);
function rs(e, t) {
  const n = he(e), [o, r, i] = y.useMemo(() => typeof t == "object" ? [t.recording, t.onRecordingChange, typeof t.recording == "boolean"] : [void 0, void 0, !1], [t]), [s, a] = y.useState(null);
  y.useEffect(() => {
    if (typeof navigator < "u" && "permissions" in navigator) {
      let g = null;
      return navigator.permissions.query({
        name: "microphone"
      }).then((p) => {
        a(p.state), p.onchange = function() {
          a(this.state);
        }, g = p;
      }), () => {
        g && (g.onchange = null);
      };
    }
  }, []);
  const l = Qe && s !== "denied", c = y.useRef(null), [f, u] = $n(!1, {
    value: o
  }), d = y.useRef(!1), m = () => {
    if (l && !c.current) {
      const g = new Qe();
      g.onstart = () => {
        u(!0);
      }, g.onend = () => {
        u(!1);
      }, g.onresult = (p) => {
        var x, E, _;
        if (!d.current) {
          const b = (_ = (E = (x = p.results) == null ? void 0 : x[0]) == null ? void 0 : E[0]) == null ? void 0 : _.transcript;
          n(b);
        }
        d.current = !1;
      }, c.current = g;
    }
  }, v = he((g) => {
    g && !f || (d.current = g, i ? r == null || r(!f) : (m(), c.current && (f ? (c.current.stop(), r == null || r(!1)) : (c.current.start(), r == null || r(!0)))));
  });
  return [l, v, f];
}
function os(e, t, n) {
  return Ho(e, t) || n;
}
const is = /* @__PURE__ */ y.forwardRef((e, t) => {
  const {
    prefixCls: n,
    styles: o = {},
    classNames: r = {},
    className: i,
    rootClassName: s,
    style: a,
    defaultValue: l,
    value: c,
    readOnly: f,
    submitType: u = "enter",
    onSubmit: d,
    loading: m,
    components: v,
    onCancel: g,
    onChange: p,
    actions: x,
    onKeyPress: E,
    onKeyDown: _,
    disabled: b,
    allowSpeech: T,
    prefix: S,
    header: R,
    onPaste: M,
    onPasteFile: L,
    ...B
  } = e, {
    direction: D,
    getPrefixCls: A
  } = Mt(), P = A("sender", n), I = y.useRef(null), j = y.useRef(null);
  Fi(t, () => {
    var C, $;
    return {
      nativeElement: I.current,
      focus: (C = j.current) == null ? void 0 : C.focus,
      blur: ($ = j.current) == null ? void 0 : $.blur
    };
  });
  const N = _o("sender"), Y = `${P}-input`, [Z, pe, ge] = ns(P), U = te(P, N.className, i, s, pe, ge, {
    [`${P}-rtl`]: D === "rtl",
    [`${P}-disabled`]: b
  }), ne = `${P}-actions-btn`, ce = `${P}-actions-list`, [H, re] = $n(l || "", {
    value: c
  }), le = (C, $) => {
    re(C), p && p(C, $);
  }, [q, ve, ye] = rs((C) => {
    le(`${H} ${C}`);
  }, T), be = os(v, ["input"], Cr.TextArea), oe = {
    ...Vi(B, {
      attr: !0,
      aria: !0,
      data: !0
    }),
    ref: j
  }, ue = () => {
    H && d && !m && d(H);
  }, Ie = () => {
    le("");
  }, Te = y.useRef(!1), ie = () => {
    Te.current = !0;
  }, mt = () => {
    Te.current = !1;
  }, je = (C) => {
    const $ = C.key === "Enter" && !Te.current;
    switch (u) {
      case "enter":
        $ && !C.shiftKey && (C.preventDefault(), ue());
        break;
      case "shiftEnter":
        $ && C.shiftKey && (C.preventDefault(), ue());
        break;
    }
    E && E(C);
  }, Pe = (C) => {
    var J;
    const $ = (J = C.clipboardData) == null ? void 0 : J.files[0];
    $ && L && (L($), C.preventDefault()), M == null || M(C);
  }, Re = (C) => {
    var $, J;
    C.target !== (($ = I.current) == null ? void 0 : $.querySelector(`.${Y}`)) && C.preventDefault(), (J = j.current) == null || J.focus();
  };
  let V = /* @__PURE__ */ y.createElement(Er, {
    className: `${ce}-presets`
  }, T && /* @__PURE__ */ y.createElement(Zi, null), m ? /* @__PURE__ */ y.createElement(En, null) : /* @__PURE__ */ y.createElement(wn, null));
  return typeof x == "function" ? V = x(V, {
    components: {
      SendButton: wn,
      ClearButton: Wi,
      LoadingButton: En
    }
  }) : x && (V = x), Z(/* @__PURE__ */ y.createElement("div", {
    ref: I,
    className: U,
    style: {
      ...N.style,
      ...a
    }
  }, R && /* @__PURE__ */ y.createElement(ir.Provider, {
    value: {
      prefixCls: P
    }
  }, R), /* @__PURE__ */ y.createElement("div", {
    className: `${P}-content`,
    onMouseDown: Re
  }, S && /* @__PURE__ */ y.createElement("div", {
    className: te(`${P}-prefix`, N.classNames.prefix, r.prefix),
    style: {
      ...N.styles.prefix,
      ...o.prefix
    }
  }, S), /* @__PURE__ */ y.createElement(be, ae({}, oe, {
    disabled: b,
    style: {
      ...N.styles.input,
      ...o.input
    },
    className: te(Y, N.classNames.input, r.input),
    autoSize: {
      maxRows: 8
    },
    value: H,
    onChange: (C) => {
      le(C.target.value, C), ve(!0);
    },
    onPressEnter: je,
    onCompositionStart: ie,
    onCompositionEnd: mt,
    onKeyDown: _,
    onPaste: Pe,
    variant: "borderless",
    readOnly: f
  })), /* @__PURE__ */ y.createElement("div", {
    className: te(ce, N.classNames.actions, r.actions),
    style: {
      ...N.styles.actions,
      ...o.actions
    }
  }, /* @__PURE__ */ y.createElement(ft.Provider, {
    value: {
      prefixCls: ne,
      onSend: ue,
      onSendDisabled: !H,
      onClear: Ie,
      onClearDisabled: !H,
      onCancel: g,
      onCancelDisabled: !m,
      onSpeech: () => ve(!1),
      onSpeechDisabled: !q,
      speechRecording: ye,
      disabled: b
    }
  }, V)))));
}), sr = is;
sr.Header = zi;
function ss(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function as(e, t = !1) {
  try {
    if (vr(e))
      return e;
    if (t && !ss(e))
      return;
    if (typeof e == "string") {
      let n = e.trim();
      return n.startsWith(";") && (n = n.slice(1)), n.endsWith(";") && (n = n.slice(0, -1)), new Function(`return (...args) => (${n})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function cs(e, t) {
  return dr(() => as(e, t), [e, t]);
}
function ls({
  value: e,
  onValueChange: t
}) {
  const [n, o] = Rn(e), r = ee(t);
  r.current = t;
  const i = ee(n);
  return i.current = n, de(() => {
    r.current(n);
  }, [n]), de(() => {
    Xr(e, i.current) || o(e);
  }, [e]), [n, o];
}
const us = ({
  children: e,
  ...t
}) => /* @__PURE__ */ W.jsx(W.Fragment, {
  children: e(t)
});
function fs(e) {
  return y.createElement(us, {
    children: e
  });
}
function Pn(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? fs((n) => /* @__PURE__ */ W.jsx(br, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ W.jsx(Ge, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...n
    })
  })) : /* @__PURE__ */ W.jsx(Ge, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function ds({
  key: e,
  slots: t,
  targets: n
}, o) {
  return t[e] ? (...r) => n ? n.map((i, s) => /* @__PURE__ */ W.jsx(y.Fragment, {
    children: Pn(i, {
      clone: !0,
      params: r,
      forceClone: (o == null ? void 0 : o.forceClone) ?? !0
    })
  }, s)) : /* @__PURE__ */ W.jsx(W.Fragment, {
    children: Pn(t[e], {
      clone: !0,
      params: r,
      forceClone: (o == null ? void 0 : o.forceClone) ?? !0
    })
  }) : void 0;
}
const ps = vo(({
  slots: e,
  children: t,
  setSlotParams: n,
  onValueChange: o,
  onChange: r,
  onPasteFile: i,
  upload: s,
  elRef: a,
  ...l
}) => {
  const c = cs(l.actions, !0), [f, u] = ls({
    onValueChange: o,
    value: l.value
  }), d = Sr();
  return /* @__PURE__ */ W.jsxs(W.Fragment, {
    children: [/* @__PURE__ */ W.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ W.jsx(sr, {
      ...l,
      value: f,
      ref: a,
      onSubmit: (...m) => {
        var v;
        d || (v = l.onSubmit) == null || v.call(l, ...m);
      },
      onChange: (m) => {
        r == null || r(m), u(m);
      },
      onPasteFile: async (m) => {
        const v = await s(Array.isArray(m) ? m : [m]);
        i == null || i(v.map((g) => g.path));
      },
      header: e.header ? /* @__PURE__ */ W.jsx(Ge, {
        slot: e.header
      }) : l.header,
      prefix: e.prefix ? /* @__PURE__ */ W.jsx(Ge, {
        slot: e.prefix
      }) : l.prefix,
      actions: e.actions ? ds({
        slots: e,
        key: "actions"
      }, {}) : c || l.actions
    })]
  });
});
export {
  ps as Sender,
  ps as default
};
