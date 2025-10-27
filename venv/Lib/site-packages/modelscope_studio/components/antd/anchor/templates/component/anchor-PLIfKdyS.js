import { i as ue, a as F, r as de, w as k, g as fe, b as me } from "./Index-CksJUH_U.js";
const y = window.ms_globals.React, Z = window.ms_globals.React.useMemo, le = window.ms_globals.React.forwardRef, ie = window.ms_globals.React.useRef, ce = window.ms_globals.React.useState, ae = window.ms_globals.React.useEffect, L = window.ms_globals.ReactDOM.createPortal, he = window.ms_globals.internalContext.useContextPropsContext, D = window.ms_globals.internalContext.ContextPropsProvider, _e = window.ms_globals.antd.Anchor, pe = window.ms_globals.createItemsContext.createItemsContext;
var ge = /\s/;
function be(t) {
  for (var e = t.length; e-- && ge.test(t.charAt(e)); )
    ;
  return e;
}
var we = /^\s+/;
function xe(t) {
  return t && t.slice(0, be(t) + 1).replace(we, "");
}
var U = NaN, Ce = /^[-+]0x[0-9a-f]+$/i, ve = /^0b[01]+$/i, ye = /^0o[0-7]+$/i, Ee = parseInt;
function B(t) {
  if (typeof t == "number")
    return t;
  if (ue(t))
    return U;
  if (F(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = F(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = xe(t);
  var o = ve.test(t);
  return o || ye.test(t) ? Ee(t.slice(2), o ? 2 : 8) : Ce.test(t) ? U : +t;
}
var j = function() {
  return de.Date.now();
}, Ie = "Expected a function", Se = Math.max, Re = Math.min;
function ke(t, e, o) {
  var l, s, n, r, i, a, _ = 0, p = !1, c = !1, g = !0;
  if (typeof t != "function")
    throw new TypeError(Ie);
  e = B(e) || 0, F(o) && (p = !!o.leading, c = "maxWait" in o, n = c ? Se(B(o.maxWait) || 0, e) : n, g = "trailing" in o ? !!o.trailing : g);
  function f(h) {
    var v = l, R = s;
    return l = s = void 0, _ = h, r = t.apply(R, v), r;
  }
  function b(h) {
    return _ = h, i = setTimeout(m, e), p ? f(h) : r;
  }
  function w(h) {
    var v = h - a, R = h - _, M = e - v;
    return c ? Re(M, n - R) : M;
  }
  function u(h) {
    var v = h - a, R = h - _;
    return a === void 0 || v >= e || v < 0 || c && R >= n;
  }
  function m() {
    var h = j();
    if (u(h))
      return x(h);
    i = setTimeout(m, w(h));
  }
  function x(h) {
    return i = void 0, g && l ? f(h) : (l = s = void 0, r);
  }
  function S() {
    i !== void 0 && clearTimeout(i), _ = 0, l = a = s = i = void 0;
  }
  function d() {
    return i === void 0 ? r : x(j());
  }
  function E() {
    var h = j(), v = u(h);
    if (l = arguments, s = this, a = h, v) {
      if (i === void 0)
        return b(a);
      if (c)
        return clearTimeout(i), i = setTimeout(m, e), f(a);
    }
    return i === void 0 && (i = setTimeout(m, e)), r;
  }
  return E.cancel = S, E.flush = d, E;
}
var $ = {
  exports: {}
}, T = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe = y, Pe = Symbol.for("react.element"), Te = Symbol.for("react.fragment"), je = Object.prototype.hasOwnProperty, Ae = Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ee(t, e, o) {
  var l, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (r = e.ref);
  for (l in e) je.call(e, l) && !Le.hasOwnProperty(l) && (s[l] = e[l]);
  if (t && t.defaultProps) for (l in e = t.defaultProps, e) s[l] === void 0 && (s[l] = e[l]);
  return {
    $$typeof: Pe,
    type: t,
    key: n,
    ref: r,
    props: s,
    _owner: Ae.current
  };
}
T.Fragment = Te;
T.jsx = ee;
T.jsxs = ee;
$.exports = T;
var C = $.exports;
const {
  SvelteComponent: Fe,
  assign: H,
  binding_callbacks: z,
  check_outros: Ne,
  children: te,
  claim_element: ne,
  claim_space: We,
  component_subscribe: G,
  compute_slots: Me,
  create_slot: De,
  detach: I,
  element: re,
  empty: q,
  exclude_internal_props: V,
  get_all_dirty_from_scope: Ue,
  get_slot_changes: Be,
  group_outros: He,
  init: ze,
  insert_hydration: O,
  safe_not_equal: Ge,
  set_custom_element_data: se,
  space: qe,
  transition_in: P,
  transition_out: N,
  update_slot_base: Ve
} = window.__gradio__svelte__internal, {
  beforeUpdate: Je,
  getContext: Xe,
  onDestroy: Ye,
  setContext: Ke
} = window.__gradio__svelte__internal;
function J(t) {
  let e, o;
  const l = (
    /*#slots*/
    t[7].default
  ), s = De(
    l,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = re("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      e = ne(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = te(e);
      s && s.l(r), r.forEach(I), this.h();
    },
    h() {
      se(e, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      O(n, e, r), s && s.m(e, null), t[9](e), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && Ve(
        s,
        l,
        n,
        /*$$scope*/
        n[6],
        o ? Be(
          l,
          /*$$scope*/
          n[6],
          r,
          null
        ) : Ue(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (P(s, n), o = !0);
    },
    o(n) {
      N(s, n), o = !1;
    },
    d(n) {
      n && I(e), s && s.d(n), t[9](null);
    }
  };
}
function Qe(t) {
  let e, o, l, s, n = (
    /*$$slots*/
    t[4].default && J(t)
  );
  return {
    c() {
      e = re("react-portal-target"), o = qe(), n && n.c(), l = q(), this.h();
    },
    l(r) {
      e = ne(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), te(e).forEach(I), o = We(r), n && n.l(r), l = q(), this.h();
    },
    h() {
      se(e, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      O(r, e, i), t[8](e), O(r, o, i), n && n.m(r, i), O(r, l, i), s = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && P(n, 1)) : (n = J(r), n.c(), P(n, 1), n.m(l.parentNode, l)) : n && (He(), N(n, 1, 1, () => {
        n = null;
      }), Ne());
    },
    i(r) {
      s || (P(n), s = !0);
    },
    o(r) {
      N(n), s = !1;
    },
    d(r) {
      r && (I(e), I(o), I(l)), t[8](null), n && n.d(r);
    }
  };
}
function X(t) {
  const {
    svelteInit: e,
    ...o
  } = t;
  return o;
}
function Ze(t, e, o) {
  let l, s, {
    $$slots: n = {},
    $$scope: r
  } = e;
  const i = Me(n);
  let {
    svelteInit: a
  } = e;
  const _ = k(X(e)), p = k();
  G(t, p, (d) => o(0, l = d));
  const c = k();
  G(t, c, (d) => o(1, s = d));
  const g = [], f = Xe("$$ms-gr-react-wrapper"), {
    slotKey: b,
    slotIndex: w,
    subSlotIndex: u
  } = fe() || {}, m = a({
    parent: f,
    props: _,
    target: p,
    slot: c,
    slotKey: b,
    slotIndex: w,
    subSlotIndex: u,
    onDestroy(d) {
      g.push(d);
    }
  });
  Ke("$$ms-gr-react-wrapper", m), Je(() => {
    _.set(X(e));
  }), Ye(() => {
    g.forEach((d) => d());
  });
  function x(d) {
    z[d ? "unshift" : "push"](() => {
      l = d, p.set(l);
    });
  }
  function S(d) {
    z[d ? "unshift" : "push"](() => {
      s = d, c.set(s);
    });
  }
  return t.$$set = (d) => {
    o(17, e = H(H({}, e), V(d))), "svelteInit" in d && o(5, a = d.svelteInit), "$$scope" in d && o(6, r = d.$$scope);
  }, e = V(e), [l, s, p, c, i, a, r, n, x, S];
}
class $e extends Fe {
  constructor(e) {
    super(), ze(this, e, Ze, Qe, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ft
} = window.__gradio__svelte__internal, Y = window.ms_globals.rerender, A = window.ms_globals.tree;
function et(t, e = {}) {
  function o(l) {
    const s = k(), n = new $e({
      ...l,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: s,
            reactComponent: t,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: e.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, a = r.parent ?? A;
          return a.nodes = [...a.nodes, i], Y({
            createPortal: L,
            node: A
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((_) => _.svelteInstance !== s), Y({
              createPortal: L,
              node: A
            });
          }), i;
        },
        ...l.props
      }
    });
    return s.set(n), n;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(o);
    });
  });
}
function tt(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function nt(t, e = !1) {
  try {
    if (me(t))
      return t;
    if (e && !tt(t))
      return;
    if (typeof t == "string") {
      let o = t.trim();
      return o.startsWith(";") && (o = o.slice(1)), o.endsWith(";") && (o = o.slice(0, -1)), new Function(`return (...args) => (${o})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function K(t, e) {
  return Z(() => nt(t, e), [t, e]);
}
const rt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function st(t) {
  return t ? Object.keys(t).reduce((e, o) => {
    const l = t[o];
    return e[o] = ot(o, l), e;
  }, {}) : {};
}
function ot(t, e) {
  return typeof e == "number" && !rt.includes(t) ? e + "px" : e;
}
function W(t) {
  const e = [], o = t.cloneNode(!1);
  if (t._reactElement) {
    const s = y.Children.toArray(t._reactElement.props.children).map((n) => {
      if (y.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = W(n.props.el);
        return y.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...y.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = t._reactElement.props.children, e.push(L(y.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: s
    }), o)), {
      clonedElement: o,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((s) => {
    t.getEventListeners(s).forEach(({
      listener: r,
      type: i,
      useCapture: a
    }) => {
      o.addEventListener(i, r, a);
    });
  });
  const l = Array.from(t.childNodes);
  for (let s = 0; s < l.length; s++) {
    const n = l[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = W(n);
      e.push(...i), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: e
  };
}
function lt(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const Q = le(({
  slot: t,
  clone: e,
  className: o,
  style: l,
  observeAttributes: s
}, n) => {
  const r = ie(), [i, a] = ce([]), {
    forceClone: _
  } = he(), p = _ ? !0 : e;
  return ae(() => {
    var w;
    if (!r.current || !t)
      return;
    let c = t;
    function g() {
      let u = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (u = c.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), lt(n, u), o && u.classList.add(...o.split(" ")), l) {
        const m = st(l);
        Object.keys(m).forEach((x) => {
          u.style[x] = m[x];
        });
      }
    }
    let f = null, b = null;
    if (p && window.MutationObserver) {
      let u = function() {
        var d, E, h;
        (d = r.current) != null && d.contains(c) && ((E = r.current) == null || E.removeChild(c));
        const {
          portals: x,
          clonedElement: S
        } = W(t);
        c = S, a(x), c.style.display = "contents", b && clearTimeout(b), b = setTimeout(() => {
          g();
        }, 50), (h = r.current) == null || h.appendChild(c);
      };
      u();
      const m = ke(() => {
        u(), f == null || f.disconnect(), f == null || f.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      f = new window.MutationObserver(m), f.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", g(), (w = r.current) == null || w.appendChild(c);
    return () => {
      var u, m;
      c.style.display = "", (u = r.current) != null && u.contains(c) && ((m = r.current) == null || m.removeChild(c)), f == null || f.disconnect();
    };
  }, [t, p, o, l, n, s, _]), y.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
}), it = ({
  children: t,
  ...e
}) => /* @__PURE__ */ C.jsx(C.Fragment, {
  children: t(e)
});
function ct(t) {
  return y.createElement(it, {
    children: t
  });
}
function oe(t, e, o) {
  const l = t.filter(Boolean);
  if (l.length !== 0)
    return l.map((s, n) => {
      var _;
      if (typeof s != "object")
        return e != null && e.fallback ? e.fallback(s) : s;
      const r = {
        ...s.props,
        key: ((_ = s.props) == null ? void 0 : _.key) ?? (o ? `${o}-${n}` : `${n}`)
      };
      let i = r;
      Object.keys(s.slots).forEach((p) => {
        if (!s.slots[p] || !(s.slots[p] instanceof Element) && !s.slots[p].el)
          return;
        const c = p.split(".");
        c.forEach((m, x) => {
          i[m] || (i[m] = {}), x !== c.length - 1 && (i = r[m]);
        });
        const g = s.slots[p];
        let f, b, w = (e == null ? void 0 : e.clone) ?? !1, u = e == null ? void 0 : e.forceClone;
        g instanceof Element ? f = g : (f = g.el, b = g.callback, w = g.clone ?? w, u = g.forceClone ?? u), u = u ?? !!b, i[c[c.length - 1]] = f ? b ? (...m) => (b(c[c.length - 1], m), /* @__PURE__ */ C.jsx(D, {
          ...s.ctx,
          params: m,
          forceClone: u,
          children: /* @__PURE__ */ C.jsx(Q, {
            slot: f,
            clone: w
          })
        })) : ct((m) => /* @__PURE__ */ C.jsx(D, {
          ...s.ctx,
          forceClone: u,
          children: /* @__PURE__ */ C.jsx(Q, {
            ...m,
            slot: f,
            clone: w
          })
        })) : i[c[c.length - 1]], i = r;
      });
      const a = (e == null ? void 0 : e.children) || "children";
      return s[a] ? r[a] = oe(s[a], e, `${n}`) : e != null && e.children && (r[a] = void 0, Reflect.deleteProperty(r, a)), r;
    });
}
const {
  useItems: at,
  withItemsContextProvider: ut,
  ItemHandler: mt
} = pe("antd-anchor-items"), ht = et(ut(["items", "default"], ({
  getContainer: t,
  getCurrentAnchor: e,
  children: o,
  items: l,
  ...s
}) => {
  const n = K(t), r = K(e), {
    items: i
  } = at(), a = i.items.length > 0 ? i.items : i.default;
  return /* @__PURE__ */ C.jsxs(C.Fragment, {
    children: [/* @__PURE__ */ C.jsx("div", {
      style: {
        display: "none"
      },
      children: o
    }), /* @__PURE__ */ C.jsx(_e, {
      ...s,
      items: Z(() => l || oe(a, {
        clone: !0
      }), [l, a]),
      getContainer: n,
      getCurrentAnchor: r
    })]
  });
}));
export {
  ht as Anchor,
  ht as default
};
