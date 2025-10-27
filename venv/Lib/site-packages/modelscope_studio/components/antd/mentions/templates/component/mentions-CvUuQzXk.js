import { i as ue, a as M, r as de, b as fe, w as k, g as me, c as _e } from "./Index-x-DG7Ao5.js";
const E = window.ms_globals.React, ae = window.ms_globals.React.forwardRef, N = window.ms_globals.React.useRef, ee = window.ms_globals.React.useState, W = window.ms_globals.React.useEffect, te = window.ms_globals.React.useMemo, A = window.ms_globals.ReactDOM.createPortal, he = window.ms_globals.internalContext.useContextPropsContext, H = window.ms_globals.internalContext.ContextPropsProvider, pe = window.ms_globals.antd.Mentions, ge = window.ms_globals.createItemsContext.createItemsContext;
var be = /\s/;
function we(e) {
  for (var t = e.length; t-- && be.test(e.charAt(t)); )
    ;
  return t;
}
var xe = /^\s+/;
function ve(e) {
  return e && e.slice(0, we(e) + 1).replace(xe, "");
}
var q = NaN, Ce = /^[-+]0x[0-9a-f]+$/i, Ee = /^0b[01]+$/i, ye = /^0o[0-7]+$/i, Ie = parseInt;
function z(e) {
  if (typeof e == "number")
    return e;
  if (ue(e))
    return q;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ve(e);
  var s = Ee.test(e);
  return s || ye.test(e) ? Ie(e.slice(2), s ? 2 : 8) : Ce.test(e) ? q : +e;
}
var j = function() {
  return de.Date.now();
}, Se = "Expected a function", Re = Math.max, ke = Math.min;
function Oe(e, t, s) {
  var l, o, n, r, i, u, h = 0, p = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Se);
  t = z(t) || 0, M(s) && (p = !!s.leading, c = "maxWait" in s, n = c ? Re(z(s.maxWait) || 0, t) : n, g = "trailing" in s ? !!s.trailing : g);
  function f(_) {
    var C = l, R = o;
    return l = o = void 0, h = _, r = e.apply(R, C), r;
  }
  function w(_) {
    return h = _, i = setTimeout(d, t), p ? f(_) : r;
  }
  function b(_) {
    var C = _ - u, R = _ - h, B = t - C;
    return c ? ke(B, n - R) : B;
  }
  function a(_) {
    var C = _ - u, R = _ - h;
    return u === void 0 || C >= t || C < 0 || c && R >= n;
  }
  function d() {
    var _ = j();
    if (a(_))
      return x(_);
    i = setTimeout(d, b(_));
  }
  function x(_) {
    return i = void 0, g && l ? f(_) : (l = o = void 0, r);
  }
  function S() {
    i !== void 0 && clearTimeout(i), h = 0, l = u = o = i = void 0;
  }
  function m() {
    return i === void 0 ? r : x(j());
  }
  function y() {
    var _ = j(), C = a(_);
    if (l = arguments, o = this, u = _, C) {
      if (i === void 0)
        return w(u);
      if (c)
        return clearTimeout(i), i = setTimeout(d, t), f(u);
    }
    return i === void 0 && (i = setTimeout(d, t)), r;
  }
  return y.cancel = S, y.flush = m, y;
}
function Pe(e, t) {
  return fe(e, t);
}
var ne = {
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
var Te = E, je = Symbol.for("react.element"), Fe = Symbol.for("react.fragment"), Le = Object.prototype.hasOwnProperty, Ne = Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, We = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function re(e, t, s) {
  var l, o = {}, n = null, r = null;
  s !== void 0 && (n = "" + s), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (l in t) Le.call(t, l) && !We.hasOwnProperty(l) && (o[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) o[l] === void 0 && (o[l] = t[l]);
  return {
    $$typeof: je,
    type: e,
    key: n,
    ref: r,
    props: o,
    _owner: Ne.current
  };
}
T.Fragment = Fe;
T.jsx = re;
T.jsxs = re;
ne.exports = T;
var v = ne.exports;
const {
  SvelteComponent: Ae,
  assign: G,
  binding_callbacks: J,
  check_outros: Me,
  children: oe,
  claim_element: se,
  claim_space: De,
  component_subscribe: X,
  compute_slots: Ve,
  create_slot: Ue,
  detach: I,
  element: le,
  empty: Y,
  exclude_internal_props: K,
  get_all_dirty_from_scope: Be,
  get_slot_changes: He,
  group_outros: qe,
  init: ze,
  insert_hydration: O,
  safe_not_equal: Ge,
  set_custom_element_data: ie,
  space: Je,
  transition_in: P,
  transition_out: D,
  update_slot_base: Xe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ye,
  getContext: Ke,
  onDestroy: Qe,
  setContext: Ze
} = window.__gradio__svelte__internal;
function Q(e) {
  let t, s;
  const l = (
    /*#slots*/
    e[7].default
  ), o = Ue(
    l,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = le("svelte-slot"), o && o.c(), this.h();
    },
    l(n) {
      t = se(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = oe(t);
      o && o.l(r), r.forEach(I), this.h();
    },
    h() {
      ie(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      O(n, t, r), o && o.m(t, null), e[9](t), s = !0;
    },
    p(n, r) {
      o && o.p && (!s || r & /*$$scope*/
      64) && Xe(
        o,
        l,
        n,
        /*$$scope*/
        n[6],
        s ? He(
          l,
          /*$$scope*/
          n[6],
          r,
          null
        ) : Be(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      s || (P(o, n), s = !0);
    },
    o(n) {
      D(o, n), s = !1;
    },
    d(n) {
      n && I(t), o && o.d(n), e[9](null);
    }
  };
}
function $e(e) {
  let t, s, l, o, n = (
    /*$$slots*/
    e[4].default && Q(e)
  );
  return {
    c() {
      t = le("react-portal-target"), s = Je(), n && n.c(), l = Y(), this.h();
    },
    l(r) {
      t = se(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), oe(t).forEach(I), s = De(r), n && n.l(r), l = Y(), this.h();
    },
    h() {
      ie(t, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      O(r, t, i), e[8](t), O(r, s, i), n && n.m(r, i), O(r, l, i), o = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && P(n, 1)) : (n = Q(r), n.c(), P(n, 1), n.m(l.parentNode, l)) : n && (qe(), D(n, 1, 1, () => {
        n = null;
      }), Me());
    },
    i(r) {
      o || (P(n), o = !0);
    },
    o(r) {
      D(n), o = !1;
    },
    d(r) {
      r && (I(t), I(s), I(l)), e[8](null), n && n.d(r);
    }
  };
}
function Z(e) {
  const {
    svelteInit: t,
    ...s
  } = e;
  return s;
}
function et(e, t, s) {
  let l, o, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const i = Ve(n);
  let {
    svelteInit: u
  } = t;
  const h = k(Z(t)), p = k();
  X(e, p, (m) => s(0, l = m));
  const c = k();
  X(e, c, (m) => s(1, o = m));
  const g = [], f = Ke("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: b,
    subSlotIndex: a
  } = me() || {}, d = u({
    parent: f,
    props: h,
    target: p,
    slot: c,
    slotKey: w,
    slotIndex: b,
    subSlotIndex: a,
    onDestroy(m) {
      g.push(m);
    }
  });
  Ze("$$ms-gr-react-wrapper", d), Ye(() => {
    h.set(Z(t));
  }), Qe(() => {
    g.forEach((m) => m());
  });
  function x(m) {
    J[m ? "unshift" : "push"](() => {
      l = m, p.set(l);
    });
  }
  function S(m) {
    J[m ? "unshift" : "push"](() => {
      o = m, c.set(o);
    });
  }
  return e.$$set = (m) => {
    s(17, t = G(G({}, t), K(m))), "svelteInit" in m && s(5, u = m.svelteInit), "$$scope" in m && s(6, r = m.$$scope);
  }, t = K(t), [l, o, p, c, i, u, r, n, x, S];
}
class tt extends Ae {
  constructor(t) {
    super(), ze(this, t, et, $e, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ht
} = window.__gradio__svelte__internal, $ = window.ms_globals.rerender, F = window.ms_globals.tree;
function nt(e, t = {}) {
  function s(l) {
    const o = k(), n = new tt({
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
          }, u = r.parent ?? F;
          return u.nodes = [...u.nodes, i], $({
            createPortal: A,
            node: F
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((h) => h.svelteInstance !== o), $({
              createPortal: A,
              node: F
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
const rt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ot(e) {
  return e ? Object.keys(e).reduce((t, s) => {
    const l = e[s];
    return t[s] = st(s, l), t;
  }, {}) : {};
}
function st(e, t) {
  return typeof t == "number" && !rt.includes(e) ? t + "px" : t;
}
function V(e) {
  const t = [], s = e.cloneNode(!1);
  if (e._reactElement) {
    const o = E.Children.toArray(e._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = V(n.props.el);
        return E.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...E.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(A(E.cloneElement(e._reactElement, {
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
      } = V(n);
      t.push(...i), s.appendChild(r);
    } else n.nodeType === 3 && s.appendChild(n.cloneNode());
  }
  return {
    clonedElement: s,
    portals: t
  };
}
function lt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const U = ae(({
  slot: e,
  clone: t,
  className: s,
  style: l,
  observeAttributes: o
}, n) => {
  const r = N(), [i, u] = ee([]), {
    forceClone: h
  } = he(), p = h ? !0 : t;
  return W(() => {
    var b;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let a = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (a = c.children[0], a.tagName.toLowerCase() === "react-portal-target" && a.children[0] && (a = a.children[0])), lt(n, a), s && a.classList.add(...s.split(" ")), l) {
        const d = ot(l);
        Object.keys(d).forEach((x) => {
          a.style[x] = d[x];
        });
      }
    }
    let f = null, w = null;
    if (p && window.MutationObserver) {
      let a = function() {
        var m, y, _;
        (m = r.current) != null && m.contains(c) && ((y = r.current) == null || y.removeChild(c));
        const {
          portals: x,
          clonedElement: S
        } = V(e);
        c = S, u(x), c.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          g();
        }, 50), (_ = r.current) == null || _.appendChild(c);
      };
      a();
      const d = Oe(() => {
        a(), f == null || f.disconnect(), f == null || f.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      f = new window.MutationObserver(d), f.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", g(), (b = r.current) == null || b.appendChild(c);
    return () => {
      var a, d;
      c.style.display = "", (a = r.current) != null && a.contains(c) && ((d = r.current) == null || d.removeChild(c)), f == null || f.disconnect();
    };
  }, [e, p, s, l, n, o, h]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
});
function it(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function ct(e, t = !1) {
  try {
    if (_e(e))
      return e;
    if (t && !it(e))
      return;
    if (typeof e == "string") {
      let s = e.trim();
      return s.startsWith(";") && (s = s.slice(1)), s.endsWith(";") && (s = s.slice(0, -1)), new Function(`return (...args) => (${s})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function L(e, t) {
  return te(() => ct(e, t), [e, t]);
}
function at({
  value: e,
  onValueChange: t
}) {
  const [s, l] = ee(e), o = N(t);
  o.current = t;
  const n = N(s);
  return n.current = s, W(() => {
    o.current(s);
  }, [s]), W(() => {
    Pe(e, n.current) || l(e);
  }, [e]), [s, l];
}
const ut = ({
  children: e,
  ...t
}) => /* @__PURE__ */ v.jsx(v.Fragment, {
  children: e(t)
});
function dt(e) {
  return E.createElement(ut, {
    children: e
  });
}
function ce(e, t, s) {
  const l = e.filter(Boolean);
  if (l.length !== 0)
    return l.map((o, n) => {
      var h;
      if (typeof o != "object")
        return t != null && t.fallback ? t.fallback(o) : o;
      const r = {
        ...o.props,
        key: ((h = o.props) == null ? void 0 : h.key) ?? (s ? `${s}-${n}` : `${n}`)
      };
      let i = r;
      Object.keys(o.slots).forEach((p) => {
        if (!o.slots[p] || !(o.slots[p] instanceof Element) && !o.slots[p].el)
          return;
        const c = p.split(".");
        c.forEach((d, x) => {
          i[d] || (i[d] = {}), x !== c.length - 1 && (i = r[d]);
        });
        const g = o.slots[p];
        let f, w, b = (t == null ? void 0 : t.clone) ?? !1, a = t == null ? void 0 : t.forceClone;
        g instanceof Element ? f = g : (f = g.el, w = g.callback, b = g.clone ?? b, a = g.forceClone ?? a), a = a ?? !!w, i[c[c.length - 1]] = f ? w ? (...d) => (w(c[c.length - 1], d), /* @__PURE__ */ v.jsx(H, {
          ...o.ctx,
          params: d,
          forceClone: a,
          children: /* @__PURE__ */ v.jsx(U, {
            slot: f,
            clone: b
          })
        })) : dt((d) => /* @__PURE__ */ v.jsx(H, {
          ...o.ctx,
          forceClone: a,
          children: /* @__PURE__ */ v.jsx(U, {
            ...d,
            slot: f,
            clone: b
          })
        })) : i[c[c.length - 1]], i = r;
      });
      const u = (t == null ? void 0 : t.children) || "children";
      return o[u] ? r[u] = ce(o[u], t, `${n}`) : t != null && t.children && (r[u] = void 0, Reflect.deleteProperty(r, u)), r;
    });
}
const {
  useItems: ft,
  withItemsContextProvider: mt,
  ItemHandler: pt
} = ge("antd-mentions-options"), gt = nt(mt(["options", "default"], ({
  slots: e,
  children: t,
  onValueChange: s,
  filterOption: l,
  onChange: o,
  options: n,
  validateSearch: r,
  getPopupContainer: i,
  elRef: u,
  ...h
}) => {
  const p = L(i), c = L(l), g = L(r), [f, w] = at({
    onValueChange: s,
    value: h.value
  }), {
    items: b
  } = ft(), a = b.options.length > 0 ? b.options : b.default;
  return /* @__PURE__ */ v.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ v.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ v.jsx(pe, {
      ...h,
      ref: u,
      value: f,
      options: te(() => n || ce(a, {
        clone: !0
      }), [a, n]),
      onChange: (d, ...x) => {
        o == null || o(d, ...x), w(d);
      },
      validateSearch: g,
      notFoundContent: e.notFoundContent ? /* @__PURE__ */ v.jsx(U, {
        slot: e.notFoundContent
      }) : h.notFoundContent,
      filterOption: c || l,
      getPopupContainer: p
    })]
  });
}));
export {
  gt as Mentions,
  gt as default
};
