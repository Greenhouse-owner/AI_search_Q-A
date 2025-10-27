import { i as fe, a as W, r as de, w as O, g as me, b as _e } from "./Index-BZYSA7ck.js";
const v = window.ms_globals.React, Z = window.ms_globals.React.useMemo, ie = window.ms_globals.React.forwardRef, ce = window.ms_globals.React.useRef, ae = window.ms_globals.React.useState, ue = window.ms_globals.React.useEffect, N = window.ms_globals.ReactDOM.createPortal, he = window.ms_globals.internalContext.useContextPropsContext, A = window.ms_globals.internalContext.ContextPropsProvider, pe = window.ms_globals.antd.Steps, ge = window.ms_globals.createItemsContext.createItemsContext;
var we = /\s/;
function be(t) {
  for (var e = t.length; e-- && we.test(t.charAt(e)); )
    ;
  return e;
}
var xe = /^\s+/;
function Ce(t) {
  return t && t.slice(0, be(t) + 1).replace(xe, "");
}
var B = NaN, ve = /^[-+]0x[0-9a-f]+$/i, ye = /^0b[01]+$/i, Ee = /^0o[0-7]+$/i, Ie = parseInt;
function H(t) {
  if (typeof t == "number")
    return t;
  if (fe(t))
    return B;
  if (W(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = W(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ce(t);
  var l = ye.test(t);
  return l || Ee.test(t) ? Ie(t.slice(2), l ? 2 : 8) : ve.test(t) ? B : +t;
}
var L = function() {
  return de.Date.now();
}, Se = "Expected a function", Re = Math.max, Oe = Math.min;
function Pe(t, e, l) {
  var o, s, n, r, i, a, h = 0, p = !1, c = !1, g = !0;
  if (typeof t != "function")
    throw new TypeError(Se);
  e = H(e) || 0, W(l) && (p = !!l.leading, c = "maxWait" in l, n = c ? Re(H(l.maxWait) || 0, e) : n, g = "trailing" in l ? !!l.trailing : g);
  function d(_) {
    var y = o, R = s;
    return o = s = void 0, h = _, r = t.apply(R, y), r;
  }
  function b(_) {
    return h = _, i = setTimeout(m, e), p ? d(_) : r;
  }
  function x(_) {
    var y = _ - a, R = _ - h, U = e - y;
    return c ? Oe(U, n - R) : U;
  }
  function u(_) {
    var y = _ - a, R = _ - h;
    return a === void 0 || y >= e || y < 0 || c && R >= n;
  }
  function m() {
    var _ = L();
    if (u(_))
      return C(_);
    i = setTimeout(m, x(_));
  }
  function C(_) {
    return i = void 0, g && o ? d(_) : (o = s = void 0, r);
  }
  function S() {
    i !== void 0 && clearTimeout(i), h = 0, o = a = s = i = void 0;
  }
  function f() {
    return i === void 0 ? r : C(L());
  }
  function E() {
    var _ = L(), y = u(_);
    if (o = arguments, s = this, a = _, y) {
      if (i === void 0)
        return b(a);
      if (c)
        return clearTimeout(i), i = setTimeout(m, e), d(a);
    }
    return i === void 0 && (i = setTimeout(m, e)), r;
  }
  return E.cancel = S, E.flush = f, E;
}
var $ = {
  exports: {}
}, j = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke = v, Te = Symbol.for("react.element"), je = Symbol.for("react.fragment"), Le = Object.prototype.hasOwnProperty, Fe = ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ne = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ee(t, e, l) {
  var o, s = {}, n = null, r = null;
  l !== void 0 && (n = "" + l), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (r = e.ref);
  for (o in e) Le.call(e, o) && !Ne.hasOwnProperty(o) && (s[o] = e[o]);
  if (t && t.defaultProps) for (o in e = t.defaultProps, e) s[o] === void 0 && (s[o] = e[o]);
  return {
    $$typeof: Te,
    type: t,
    key: n,
    ref: r,
    props: s,
    _owner: Fe.current
  };
}
j.Fragment = je;
j.jsx = ee;
j.jsxs = ee;
$.exports = j;
var w = $.exports;
const {
  SvelteComponent: We,
  assign: z,
  binding_callbacks: G,
  check_outros: Ae,
  children: te,
  claim_element: ne,
  claim_space: De,
  component_subscribe: q,
  compute_slots: Me,
  create_slot: Ue,
  detach: I,
  element: re,
  empty: V,
  exclude_internal_props: J,
  get_all_dirty_from_scope: Be,
  get_slot_changes: He,
  group_outros: ze,
  init: Ge,
  insert_hydration: P,
  safe_not_equal: qe,
  set_custom_element_data: se,
  space: Ve,
  transition_in: k,
  transition_out: D,
  update_slot_base: Je
} = window.__gradio__svelte__internal, {
  beforeUpdate: Xe,
  getContext: Ye,
  onDestroy: Ke,
  setContext: Qe
} = window.__gradio__svelte__internal;
function X(t) {
  let e, l;
  const o = (
    /*#slots*/
    t[7].default
  ), s = Ue(
    o,
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
      P(n, e, r), s && s.m(e, null), t[9](e), l = !0;
    },
    p(n, r) {
      s && s.p && (!l || r & /*$$scope*/
      64) && Je(
        s,
        o,
        n,
        /*$$scope*/
        n[6],
        l ? He(
          o,
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
      l || (k(s, n), l = !0);
    },
    o(n) {
      D(s, n), l = !1;
    },
    d(n) {
      n && I(e), s && s.d(n), t[9](null);
    }
  };
}
function Ze(t) {
  let e, l, o, s, n = (
    /*$$slots*/
    t[4].default && X(t)
  );
  return {
    c() {
      e = re("react-portal-target"), l = Ve(), n && n.c(), o = V(), this.h();
    },
    l(r) {
      e = ne(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), te(e).forEach(I), l = De(r), n && n.l(r), o = V(), this.h();
    },
    h() {
      se(e, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      P(r, e, i), t[8](e), P(r, l, i), n && n.m(r, i), P(r, o, i), s = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && k(n, 1)) : (n = X(r), n.c(), k(n, 1), n.m(o.parentNode, o)) : n && (ze(), D(n, 1, 1, () => {
        n = null;
      }), Ae());
    },
    i(r) {
      s || (k(n), s = !0);
    },
    o(r) {
      D(n), s = !1;
    },
    d(r) {
      r && (I(e), I(l), I(o)), t[8](null), n && n.d(r);
    }
  };
}
function Y(t) {
  const {
    svelteInit: e,
    ...l
  } = t;
  return l;
}
function $e(t, e, l) {
  let o, s, {
    $$slots: n = {},
    $$scope: r
  } = e;
  const i = Me(n);
  let {
    svelteInit: a
  } = e;
  const h = O(Y(e)), p = O();
  q(t, p, (f) => l(0, o = f));
  const c = O();
  q(t, c, (f) => l(1, s = f));
  const g = [], d = Ye("$$ms-gr-react-wrapper"), {
    slotKey: b,
    slotIndex: x,
    subSlotIndex: u
  } = me() || {}, m = a({
    parent: d,
    props: h,
    target: p,
    slot: c,
    slotKey: b,
    slotIndex: x,
    subSlotIndex: u,
    onDestroy(f) {
      g.push(f);
    }
  });
  Qe("$$ms-gr-react-wrapper", m), Xe(() => {
    h.set(Y(e));
  }), Ke(() => {
    g.forEach((f) => f());
  });
  function C(f) {
    G[f ? "unshift" : "push"](() => {
      o = f, p.set(o);
    });
  }
  function S(f) {
    G[f ? "unshift" : "push"](() => {
      s = f, c.set(s);
    });
  }
  return t.$$set = (f) => {
    l(17, e = z(z({}, e), J(f))), "svelteInit" in f && l(5, a = f.svelteInit), "$$scope" in f && l(6, r = f.$$scope);
  }, e = J(e), [o, s, p, c, i, a, r, n, C, S];
}
class et extends We {
  constructor(e) {
    super(), Ge(this, e, $e, Ze, qe, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _t
} = window.__gradio__svelte__internal, K = window.ms_globals.rerender, F = window.ms_globals.tree;
function tt(t, e = {}) {
  function l(o) {
    const s = O(), n = new et({
      ...o,
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
          }, a = r.parent ?? F;
          return a.nodes = [...a.nodes, i], K({
            createPortal: N,
            node: F
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((h) => h.svelteInstance !== s), K({
              createPortal: N,
              node: F
            });
          }), i;
        },
        ...o.props
      }
    });
    return s.set(n), n;
  }
  return new Promise((o) => {
    window.ms_globals.initializePromise.then(() => {
      o(l);
    });
  });
}
function nt(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function rt(t, e = !1) {
  try {
    if (_e(t))
      return t;
    if (e && !nt(t))
      return;
    if (typeof t == "string") {
      let l = t.trim();
      return l.startsWith(";") && (l = l.slice(1)), l.endsWith(";") && (l = l.slice(0, -1)), new Function(`return (...args) => (${l})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function st(t, e) {
  return Z(() => rt(t, e), [t, e]);
}
const lt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ot(t) {
  return t ? Object.keys(t).reduce((e, l) => {
    const o = t[l];
    return e[l] = it(l, o), e;
  }, {}) : {};
}
function it(t, e) {
  return typeof e == "number" && !lt.includes(t) ? e + "px" : e;
}
function M(t) {
  const e = [], l = t.cloneNode(!1);
  if (t._reactElement) {
    const s = v.Children.toArray(t._reactElement.props.children).map((n) => {
      if (v.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = M(n.props.el);
        return v.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...v.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = t._reactElement.props.children, e.push(N(v.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: s
    }), l)), {
      clonedElement: l,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((s) => {
    t.getEventListeners(s).forEach(({
      listener: r,
      type: i,
      useCapture: a
    }) => {
      l.addEventListener(i, r, a);
    });
  });
  const o = Array.from(t.childNodes);
  for (let s = 0; s < o.length; s++) {
    const n = o[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = M(n);
      e.push(...i), l.appendChild(r);
    } else n.nodeType === 3 && l.appendChild(n.cloneNode());
  }
  return {
    clonedElement: l,
    portals: e
  };
}
function ct(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const T = ie(({
  slot: t,
  clone: e,
  className: l,
  style: o,
  observeAttributes: s
}, n) => {
  const r = ce(), [i, a] = ae([]), {
    forceClone: h
  } = he(), p = h ? !0 : e;
  return ue(() => {
    var x;
    if (!r.current || !t)
      return;
    let c = t;
    function g() {
      let u = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (u = c.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), ct(n, u), l && u.classList.add(...l.split(" ")), o) {
        const m = ot(o);
        Object.keys(m).forEach((C) => {
          u.style[C] = m[C];
        });
      }
    }
    let d = null, b = null;
    if (p && window.MutationObserver) {
      let u = function() {
        var f, E, _;
        (f = r.current) != null && f.contains(c) && ((E = r.current) == null || E.removeChild(c));
        const {
          portals: C,
          clonedElement: S
        } = M(t);
        c = S, a(C), c.style.display = "contents", b && clearTimeout(b), b = setTimeout(() => {
          g();
        }, 50), (_ = r.current) == null || _.appendChild(c);
      };
      u();
      const m = Pe(() => {
        u(), d == null || d.disconnect(), d == null || d.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      d = new window.MutationObserver(m), d.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", g(), (x = r.current) == null || x.appendChild(c);
    return () => {
      var u, m;
      c.style.display = "", (u = r.current) != null && u.contains(c) && ((m = r.current) == null || m.removeChild(c)), d == null || d.disconnect();
    };
  }, [t, p, l, o, n, s, h]), v.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
}), at = ({
  children: t,
  ...e
}) => /* @__PURE__ */ w.jsx(w.Fragment, {
  children: t(e)
});
function le(t) {
  return v.createElement(at, {
    children: t
  });
}
function oe(t, e, l) {
  const o = t.filter(Boolean);
  if (o.length !== 0)
    return o.map((s, n) => {
      var h;
      if (typeof s != "object")
        return s;
      const r = {
        ...s.props,
        key: ((h = s.props) == null ? void 0 : h.key) ?? (l ? `${l}-${n}` : `${n}`)
      };
      let i = r;
      Object.keys(s.slots).forEach((p) => {
        if (!s.slots[p] || !(s.slots[p] instanceof Element) && !s.slots[p].el)
          return;
        const c = p.split(".");
        c.forEach((m, C) => {
          i[m] || (i[m] = {}), C !== c.length - 1 && (i = r[m]);
        });
        const g = s.slots[p];
        let d, b, x = !1, u = e == null ? void 0 : e.forceClone;
        g instanceof Element ? d = g : (d = g.el, b = g.callback, x = g.clone ?? x, u = g.forceClone ?? u), u = u ?? !!b, i[c[c.length - 1]] = d ? b ? (...m) => (b(c[c.length - 1], m), /* @__PURE__ */ w.jsx(A, {
          ...s.ctx,
          params: m,
          forceClone: u,
          children: /* @__PURE__ */ w.jsx(T, {
            slot: d,
            clone: x
          })
        })) : le((m) => /* @__PURE__ */ w.jsx(A, {
          ...s.ctx,
          forceClone: u,
          children: /* @__PURE__ */ w.jsx(T, {
            ...m,
            slot: d,
            clone: x
          })
        })) : i[c[c.length - 1]], i = r;
      });
      const a = "children";
      return s[a] && (r[a] = oe(s[a], e, `${n}`)), r;
    });
}
function Q(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? le((l) => /* @__PURE__ */ w.jsx(A, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ w.jsx(T, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...l
    })
  })) : /* @__PURE__ */ w.jsx(T, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function ut({
  key: t,
  slots: e,
  targets: l
}, o) {
  return e[t] ? (...s) => l ? l.map((n, r) => /* @__PURE__ */ w.jsx(v.Fragment, {
    children: Q(n, {
      clone: !0,
      params: s,
      forceClone: (o == null ? void 0 : o.forceClone) ?? !0
    })
  }, r)) : /* @__PURE__ */ w.jsx(w.Fragment, {
    children: Q(e[t], {
      clone: !0,
      params: s,
      forceClone: (o == null ? void 0 : o.forceClone) ?? !0
    })
  }) : void 0;
}
const {
  withItemsContextProvider: ft,
  useItems: dt,
  ItemHandler: ht
} = ge("antd-steps-items"), pt = tt(ft(["items", "default"], ({
  slots: t,
  items: e,
  setSlotParams: l,
  children: o,
  progressDot: s,
  ...n
}) => {
  const {
    items: r
  } = dt(), i = r.items.length > 0 ? r.items : r.default, a = st(s);
  return /* @__PURE__ */ w.jsxs(w.Fragment, {
    children: [/* @__PURE__ */ w.jsx("div", {
      style: {
        display: "none"
      },
      children: o
    }), /* @__PURE__ */ w.jsx(pe, {
      ...n,
      items: Z(() => e || oe(i), [e, i]),
      progressDot: t.progressDot ? ut({
        slots: t,
        key: "progressDot"
      }, {}) : a || s
    })]
  });
}));
export {
  pt as Steps,
  pt as default
};
