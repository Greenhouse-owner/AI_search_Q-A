import { i as ae, a as H, r as ue, w as R, g as de } from "./Index-vDIpUNLe.js";
const C = window.ms_globals.React, se = window.ms_globals.React.forwardRef, le = window.ms_globals.React.useRef, ie = window.ms_globals.React.useState, ce = window.ms_globals.React.useEffect, A = window.ms_globals.ReactDOM.createPortal, fe = window.ms_globals.internalContext.useContextPropsContext, M = window.ms_globals.internalContext.ContextPropsProvider, k = window.ms_globals.createItemsContext.createItemsContext;
var me = /\s/;
function pe(e) {
  for (var t = e.length; t-- && me.test(e.charAt(t)); )
    ;
  return t;
}
var _e = /^\s+/;
function he(e) {
  return e && e.slice(0, pe(e) + 1).replace(_e, "");
}
var U = NaN, ge = /^[-+]0x[0-9a-f]+$/i, be = /^0b[01]+$/i, we = /^0o[0-7]+$/i, xe = parseInt;
function B(e) {
  if (typeof e == "number")
    return e;
  if (ae(e))
    return U;
  if (H(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = H(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = he(e);
  var s = be.test(e);
  return s || we.test(e) ? xe(e.slice(2), s ? 2 : 8) : ge.test(e) ? U : +e;
}
var j = function() {
  return ue.Date.now();
}, Ie = "Expected a function", Ce = Math.max, Ee = Math.min;
function ve(e, t, s) {
  var l, o, n, r, i, u, _ = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Ie);
  t = B(t) || 0, H(s) && (h = !!s.leading, c = "maxWait" in s, n = c ? Ce(B(s.maxWait) || 0, t) : n, g = "trailing" in s ? !!s.trailing : g);
  function f(p) {
    var I = l, P = o;
    return l = o = void 0, _ = p, r = e.apply(P, I), r;
  }
  function b(p) {
    return _ = p, i = setTimeout(m, t), h ? f(p) : r;
  }
  function w(p) {
    var I = p - u, P = p - _, F = t - I;
    return c ? Ee(F, n - P) : F;
  }
  function a(p) {
    var I = p - u, P = p - _;
    return u === void 0 || I >= t || I < 0 || c && P >= n;
  }
  function m() {
    var p = j();
    if (a(p))
      return x(p);
    i = setTimeout(m, w(p));
  }
  function x(p) {
    return i = void 0, g && l ? f(p) : (l = o = void 0, r);
  }
  function S() {
    i !== void 0 && clearTimeout(i), _ = 0, l = u = o = i = void 0;
  }
  function d() {
    return i === void 0 ? r : x(j());
  }
  function v() {
    var p = j(), I = a(p);
    if (l = arguments, o = this, u = p, I) {
      if (i === void 0)
        return b(u);
      if (c)
        return clearTimeout(i), i = setTimeout(m, t), f(u);
    }
    return i === void 0 && (i = setTimeout(m, t)), r;
  }
  return v.cancel = S, v.flush = d, v;
}
var Z = {
  exports: {}
}, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye = C, Se = Symbol.for("react.element"), Pe = Symbol.for("react.fragment"), Re = Object.prototype.hasOwnProperty, Te = ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Oe = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function $(e, t, s) {
  var l, o = {}, n = null, r = null;
  s !== void 0 && (n = "" + s), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (l in t) Re.call(t, l) && !Oe.hasOwnProperty(l) && (o[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) o[l] === void 0 && (o[l] = t[l]);
  return {
    $$typeof: Se,
    type: e,
    key: n,
    ref: r,
    props: o,
    _owner: Te.current
  };
}
L.Fragment = Pe;
L.jsx = $;
L.jsxs = $;
Z.exports = L;
var E = Z.exports;
const {
  SvelteComponent: ke,
  assign: z,
  binding_callbacks: G,
  check_outros: Le,
  children: ee,
  claim_element: te,
  claim_space: je,
  component_subscribe: q,
  compute_slots: Ne,
  create_slot: Ae,
  detach: y,
  element: ne,
  empty: V,
  exclude_internal_props: J,
  get_all_dirty_from_scope: He,
  get_slot_changes: We,
  group_outros: De,
  init: Fe,
  insert_hydration: T,
  safe_not_equal: Me,
  set_custom_element_data: re,
  space: Ue,
  transition_in: O,
  transition_out: W,
  update_slot_base: Be
} = window.__gradio__svelte__internal, {
  beforeUpdate: ze,
  getContext: Ge,
  onDestroy: qe,
  setContext: Ve
} = window.__gradio__svelte__internal;
function X(e) {
  let t, s;
  const l = (
    /*#slots*/
    e[7].default
  ), o = Ae(
    l,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ne("svelte-slot"), o && o.c(), this.h();
    },
    l(n) {
      t = te(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = ee(t);
      o && o.l(r), r.forEach(y), this.h();
    },
    h() {
      re(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      T(n, t, r), o && o.m(t, null), e[9](t), s = !0;
    },
    p(n, r) {
      o && o.p && (!s || r & /*$$scope*/
      64) && Be(
        o,
        l,
        n,
        /*$$scope*/
        n[6],
        s ? We(
          l,
          /*$$scope*/
          n[6],
          r,
          null
        ) : He(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      s || (O(o, n), s = !0);
    },
    o(n) {
      W(o, n), s = !1;
    },
    d(n) {
      n && y(t), o && o.d(n), e[9](null);
    }
  };
}
function Je(e) {
  let t, s, l, o, n = (
    /*$$slots*/
    e[4].default && X(e)
  );
  return {
    c() {
      t = ne("react-portal-target"), s = Ue(), n && n.c(), l = V(), this.h();
    },
    l(r) {
      t = te(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ee(t).forEach(y), s = je(r), n && n.l(r), l = V(), this.h();
    },
    h() {
      re(t, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      T(r, t, i), e[8](t), T(r, s, i), n && n.m(r, i), T(r, l, i), o = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && O(n, 1)) : (n = X(r), n.c(), O(n, 1), n.m(l.parentNode, l)) : n && (De(), W(n, 1, 1, () => {
        n = null;
      }), Le());
    },
    i(r) {
      o || (O(n), o = !0);
    },
    o(r) {
      W(n), o = !1;
    },
    d(r) {
      r && (y(t), y(s), y(l)), e[8](null), n && n.d(r);
    }
  };
}
function Y(e) {
  const {
    svelteInit: t,
    ...s
  } = e;
  return s;
}
function Xe(e, t, s) {
  let l, o, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const i = Ne(n);
  let {
    svelteInit: u
  } = t;
  const _ = R(Y(t)), h = R();
  q(e, h, (d) => s(0, l = d));
  const c = R();
  q(e, c, (d) => s(1, o = d));
  const g = [], f = Ge("$$ms-gr-react-wrapper"), {
    slotKey: b,
    slotIndex: w,
    subSlotIndex: a
  } = de() || {}, m = u({
    parent: f,
    props: _,
    target: h,
    slot: c,
    slotKey: b,
    slotIndex: w,
    subSlotIndex: a,
    onDestroy(d) {
      g.push(d);
    }
  });
  Ve("$$ms-gr-react-wrapper", m), ze(() => {
    _.set(Y(t));
  }), qe(() => {
    g.forEach((d) => d());
  });
  function x(d) {
    G[d ? "unshift" : "push"](() => {
      l = d, h.set(l);
    });
  }
  function S(d) {
    G[d ? "unshift" : "push"](() => {
      o = d, c.set(o);
    });
  }
  return e.$$set = (d) => {
    s(17, t = z(z({}, t), J(d))), "svelteInit" in d && s(5, u = d.svelteInit), "$$scope" in d && s(6, r = d.$$scope);
  }, t = J(t), [l, o, h, c, i, u, r, n, x, S];
}
class Ye extends ke {
  constructor(t) {
    super(), Fe(this, t, Xe, Je, Me, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: it
} = window.__gradio__svelte__internal, K = window.ms_globals.rerender, N = window.ms_globals.tree;
function Ke(e, t = {}) {
  function s(l) {
    const o = R(), n = new Ye({
      ...l,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: o,
            reactComponent: e,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: t.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, u = r.parent ?? N;
          return u.nodes = [...u.nodes, i], K({
            createPortal: A,
            node: N
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((_) => _.svelteInstance !== o), K({
              createPortal: A,
              node: N
            });
          }), i;
        },
        ...l.props
      }
    });
    return o.set(n), n;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(s);
    });
  });
}
const Qe = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Ze(e) {
  return e ? Object.keys(e).reduce((t, s) => {
    const l = e[s];
    return t[s] = $e(s, l), t;
  }, {}) : {};
}
function $e(e, t) {
  return typeof t == "number" && !Qe.includes(e) ? t + "px" : t;
}
function D(e) {
  const t = [], s = e.cloneNode(!1);
  if (e._reactElement) {
    const o = C.Children.toArray(e._reactElement.props.children).map((n) => {
      if (C.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = D(n.props.el);
        return C.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...C.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(A(C.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: o
    }), s)), {
      clonedElement: s,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((o) => {
    e.getEventListeners(o).forEach(({
      listener: r,
      type: i,
      useCapture: u
    }) => {
      s.addEventListener(i, r, u);
    });
  });
  const l = Array.from(e.childNodes);
  for (let o = 0; o < l.length; o++) {
    const n = l[o];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = D(n);
      t.push(...i), s.appendChild(r);
    } else n.nodeType === 3 && s.appendChild(n.cloneNode());
  }
  return {
    clonedElement: s,
    portals: t
  };
}
function et(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const Q = se(({
  slot: e,
  clone: t,
  className: s,
  style: l,
  observeAttributes: o
}, n) => {
  const r = le(), [i, u] = ie([]), {
    forceClone: _
  } = fe(), h = _ ? !0 : t;
  return ce(() => {
    var w;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let a = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (a = c.children[0], a.tagName.toLowerCase() === "react-portal-target" && a.children[0] && (a = a.children[0])), et(n, a), s && a.classList.add(...s.split(" ")), l) {
        const m = Ze(l);
        Object.keys(m).forEach((x) => {
          a.style[x] = m[x];
        });
      }
    }
    let f = null, b = null;
    if (h && window.MutationObserver) {
      let a = function() {
        var d, v, p;
        (d = r.current) != null && d.contains(c) && ((v = r.current) == null || v.removeChild(c));
        const {
          portals: x,
          clonedElement: S
        } = D(e);
        c = S, u(x), c.style.display = "contents", b && clearTimeout(b), b = setTimeout(() => {
          g();
        }, 50), (p = r.current) == null || p.appendChild(c);
      };
      a();
      const m = ve(() => {
        a(), f == null || f.disconnect(), f == null || f.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      f = new window.MutationObserver(m), f.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", g(), (w = r.current) == null || w.appendChild(c);
    return () => {
      var a, m;
      c.style.display = "", (a = r.current) != null && a.contains(c) && ((m = r.current) == null || m.removeChild(c)), f == null || f.disconnect();
    };
  }, [e, h, s, l, n, o, _]), C.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
}), tt = ({
  children: e,
  ...t
}) => /* @__PURE__ */ E.jsx(E.Fragment, {
  children: e(t)
});
function nt(e) {
  return C.createElement(tt, {
    children: e
  });
}
function oe(e, t, s) {
  const l = e.filter(Boolean);
  if (l.length !== 0)
    return l.map((o, n) => {
      var _;
      if (typeof o != "object")
        return o;
      const r = {
        ...o.props,
        key: ((_ = o.props) == null ? void 0 : _.key) ?? (s ? `${s}-${n}` : `${n}`)
      };
      let i = r;
      Object.keys(o.slots).forEach((h) => {
        if (!o.slots[h] || !(o.slots[h] instanceof Element) && !o.slots[h].el)
          return;
        const c = h.split(".");
        c.forEach((m, x) => {
          i[m] || (i[m] = {}), x !== c.length - 1 && (i = r[m]);
        });
        const g = o.slots[h];
        let f, b, w = !1, a = t == null ? void 0 : t.forceClone;
        g instanceof Element ? f = g : (f = g.el, b = g.callback, w = g.clone ?? w, a = g.forceClone ?? a), a = a ?? !!b, i[c[c.length - 1]] = f ? b ? (...m) => (b(c[c.length - 1], m), /* @__PURE__ */ E.jsx(M, {
          ...o.ctx,
          params: m,
          forceClone: a,
          children: /* @__PURE__ */ E.jsx(Q, {
            slot: f,
            clone: w
          })
        })) : nt((m) => /* @__PURE__ */ E.jsx(M, {
          ...o.ctx,
          forceClone: a,
          children: /* @__PURE__ */ E.jsx(Q, {
            ...m,
            slot: f,
            clone: w
          })
        })) : i[c[c.length - 1]], i = r;
      });
      const u = "children";
      return o[u] && (r[u] = oe(o[u], t, `${n}`)), r;
    });
}
const {
  useItems: ct,
  withItemsContextProvider: at,
  ItemHandler: ut
} = k("antd-table-columns"), {
  useItems: rt,
  withItemsContextProvider: ot,
  ItemHandler: dt
} = k("antd-table-row-selection-selections"), {
  useItems: ft,
  withItemsContextProvider: mt,
  ItemHandler: st
} = k("antd-table-row-selection"), {
  useItems: pt,
  withItemsContextProvider: _t,
  ItemHandler: ht
} = k("antd-table-expandable"), gt = Ke(ot(["selections"], (e) => {
  const {
    items: {
      selections: t
    }
  } = rt();
  return /* @__PURE__ */ E.jsx(st, {
    ...e,
    itemProps: (s) => ({
      ...s,
      selections: t.length > 0 ? oe(t) : s.selections
    })
  });
}));
export {
  gt as TableRowSelection,
  gt as default
};
