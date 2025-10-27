import { i as de, a as W, r as fe, w as k, g as me, b as _e } from "./Index-C2-QgFZg.js";
const v = window.ms_globals.React, Z = window.ms_globals.React.useMemo, ce = window.ms_globals.React.forwardRef, ie = window.ms_globals.React.useRef, ae = window.ms_globals.React.useState, ue = window.ms_globals.React.useEffect, N = window.ms_globals.ReactDOM.createPortal, he = window.ms_globals.internalContext.useContextPropsContext, A = window.ms_globals.internalContext.ContextPropsProvider, pe = window.ms_globals.antd.Collapse, ge = window.ms_globals.createItemsContext.createItemsContext;
var xe = /\s/;
function be(t) {
  for (var e = t.length; e-- && xe.test(t.charAt(e)); )
    ;
  return e;
}
var we = /^\s+/;
function Ce(t) {
  return t && t.slice(0, be(t) + 1).replace(we, "");
}
var B = NaN, ve = /^[-+]0x[0-9a-f]+$/i, ye = /^0b[01]+$/i, Ee = /^0o[0-7]+$/i, Ie = parseInt;
function H(t) {
  if (typeof t == "number")
    return t;
  if (de(t))
    return B;
  if (W(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = W(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ce(t);
  var s = ye.test(t);
  return s || Ee.test(t) ? Ie(t.slice(2), s ? 2 : 8) : ve.test(t) ? B : +t;
}
var L = function() {
  return fe.Date.now();
}, Se = "Expected a function", Re = Math.max, ke = Math.min;
function Pe(t, e, s) {
  var o, l, n, r, c, a, h = 0, p = !1, i = !1, g = !0;
  if (typeof t != "function")
    throw new TypeError(Se);
  e = H(e) || 0, W(s) && (p = !!s.leading, i = "maxWait" in s, n = i ? Re(H(s.maxWait) || 0, e) : n, g = "trailing" in s ? !!s.trailing : g);
  function f(_) {
    var y = o, R = l;
    return o = l = void 0, h = _, r = t.apply(R, y), r;
  }
  function b(_) {
    return h = _, c = setTimeout(m, e), p ? f(_) : r;
  }
  function w(_) {
    var y = _ - a, R = _ - h, U = e - y;
    return i ? ke(U, n - R) : U;
  }
  function u(_) {
    var y = _ - a, R = _ - h;
    return a === void 0 || y >= e || y < 0 || i && R >= n;
  }
  function m() {
    var _ = L();
    if (u(_))
      return C(_);
    c = setTimeout(m, w(_));
  }
  function C(_) {
    return c = void 0, g && o ? f(_) : (o = l = void 0, r);
  }
  function S() {
    c !== void 0 && clearTimeout(c), h = 0, o = a = l = c = void 0;
  }
  function d() {
    return c === void 0 ? r : C(L());
  }
  function E() {
    var _ = L(), y = u(_);
    if (o = arguments, l = this, a = _, y) {
      if (c === void 0)
        return b(a);
      if (i)
        return clearTimeout(c), c = setTimeout(m, e), f(a);
    }
    return c === void 0 && (c = setTimeout(m, e)), r;
  }
  return E.cancel = S, E.flush = d, E;
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
var Oe = v, Te = Symbol.for("react.element"), je = Symbol.for("react.fragment"), Le = Object.prototype.hasOwnProperty, Fe = Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ne = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ee(t, e, s) {
  var o, l = {}, n = null, r = null;
  s !== void 0 && (n = "" + s), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (r = e.ref);
  for (o in e) Le.call(e, o) && !Ne.hasOwnProperty(o) && (l[o] = e[o]);
  if (t && t.defaultProps) for (o in e = t.defaultProps, e) l[o] === void 0 && (l[o] = e[o]);
  return {
    $$typeof: Te,
    type: t,
    key: n,
    ref: r,
    props: l,
    _owner: Fe.current
  };
}
j.Fragment = je;
j.jsx = ee;
j.jsxs = ee;
$.exports = j;
var x = $.exports;
const {
  SvelteComponent: We,
  assign: z,
  binding_callbacks: G,
  check_outros: Ae,
  children: te,
  claim_element: ne,
  claim_space: Me,
  component_subscribe: q,
  compute_slots: De,
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
  set_custom_element_data: le,
  space: Ve,
  transition_in: O,
  transition_out: M,
  update_slot_base: Je
} = window.__gradio__svelte__internal, {
  beforeUpdate: Xe,
  getContext: Ye,
  onDestroy: Ke,
  setContext: Qe
} = window.__gradio__svelte__internal;
function X(t) {
  let e, s;
  const o = (
    /*#slots*/
    t[7].default
  ), l = Ue(
    o,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = re("svelte-slot"), l && l.c(), this.h();
    },
    l(n) {
      e = ne(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = te(e);
      l && l.l(r), r.forEach(I), this.h();
    },
    h() {
      le(e, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      P(n, e, r), l && l.m(e, null), t[9](e), s = !0;
    },
    p(n, r) {
      l && l.p && (!s || r & /*$$scope*/
      64) && Je(
        l,
        o,
        n,
        /*$$scope*/
        n[6],
        s ? He(
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
      s || (O(l, n), s = !0);
    },
    o(n) {
      M(l, n), s = !1;
    },
    d(n) {
      n && I(e), l && l.d(n), t[9](null);
    }
  };
}
function Ze(t) {
  let e, s, o, l, n = (
    /*$$slots*/
    t[4].default && X(t)
  );
  return {
    c() {
      e = re("react-portal-target"), s = Ve(), n && n.c(), o = V(), this.h();
    },
    l(r) {
      e = ne(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), te(e).forEach(I), s = Me(r), n && n.l(r), o = V(), this.h();
    },
    h() {
      le(e, "class", "svelte-1rt0kpf");
    },
    m(r, c) {
      P(r, e, c), t[8](e), P(r, s, c), n && n.m(r, c), P(r, o, c), l = !0;
    },
    p(r, [c]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, c), c & /*$$slots*/
      16 && O(n, 1)) : (n = X(r), n.c(), O(n, 1), n.m(o.parentNode, o)) : n && (ze(), M(n, 1, 1, () => {
        n = null;
      }), Ae());
    },
    i(r) {
      l || (O(n), l = !0);
    },
    o(r) {
      M(n), l = !1;
    },
    d(r) {
      r && (I(e), I(s), I(o)), t[8](null), n && n.d(r);
    }
  };
}
function Y(t) {
  const {
    svelteInit: e,
    ...s
  } = t;
  return s;
}
function $e(t, e, s) {
  let o, l, {
    $$slots: n = {},
    $$scope: r
  } = e;
  const c = De(n);
  let {
    svelteInit: a
  } = e;
  const h = k(Y(e)), p = k();
  q(t, p, (d) => s(0, o = d));
  const i = k();
  q(t, i, (d) => s(1, l = d));
  const g = [], f = Ye("$$ms-gr-react-wrapper"), {
    slotKey: b,
    slotIndex: w,
    subSlotIndex: u
  } = me() || {}, m = a({
    parent: f,
    props: h,
    target: p,
    slot: i,
    slotKey: b,
    slotIndex: w,
    subSlotIndex: u,
    onDestroy(d) {
      g.push(d);
    }
  });
  Qe("$$ms-gr-react-wrapper", m), Xe(() => {
    h.set(Y(e));
  }), Ke(() => {
    g.forEach((d) => d());
  });
  function C(d) {
    G[d ? "unshift" : "push"](() => {
      o = d, p.set(o);
    });
  }
  function S(d) {
    G[d ? "unshift" : "push"](() => {
      l = d, i.set(l);
    });
  }
  return t.$$set = (d) => {
    s(17, e = z(z({}, e), J(d))), "svelteInit" in d && s(5, a = d.svelteInit), "$$scope" in d && s(6, r = d.$$scope);
  }, e = J(e), [o, l, p, i, c, a, r, n, C, S];
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
  function s(o) {
    const l = k(), n = new et({
      ...o,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const c = {
            key: window.ms_globals.autokey,
            svelteInstance: l,
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
          return a.nodes = [...a.nodes, c], K({
            createPortal: N,
            node: F
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((h) => h.svelteInstance !== l), K({
              createPortal: N,
              node: F
            });
          }), c;
        },
        ...o.props
      }
    });
    return l.set(n), n;
  }
  return new Promise((o) => {
    window.ms_globals.initializePromise.then(() => {
      o(s);
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
      let s = t.trim();
      return s.startsWith(";") && (s = s.slice(1)), s.endsWith(";") && (s = s.slice(0, -1)), new Function(`return (...args) => (${s})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function lt(t, e) {
  return Z(() => rt(t, e), [t, e]);
}
const st = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ot(t) {
  return t ? Object.keys(t).reduce((e, s) => {
    const o = t[s];
    return e[s] = ct(s, o), e;
  }, {}) : {};
}
function ct(t, e) {
  return typeof e == "number" && !st.includes(t) ? e + "px" : e;
}
function D(t) {
  const e = [], s = t.cloneNode(!1);
  if (t._reactElement) {
    const l = v.Children.toArray(t._reactElement.props.children).map((n) => {
      if (v.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: c
        } = D(n.props.el);
        return v.cloneElement(n, {
          ...n.props,
          el: c,
          children: [...v.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return l.originalChildren = t._reactElement.props.children, e.push(N(v.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: l
    }), s)), {
      clonedElement: s,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((l) => {
    t.getEventListeners(l).forEach(({
      listener: r,
      type: c,
      useCapture: a
    }) => {
      s.addEventListener(c, r, a);
    });
  });
  const o = Array.from(t.childNodes);
  for (let l = 0; l < o.length; l++) {
    const n = o[l];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: c
      } = D(n);
      e.push(...c), s.appendChild(r);
    } else n.nodeType === 3 && s.appendChild(n.cloneNode());
  }
  return {
    clonedElement: s,
    portals: e
  };
}
function it(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const T = ce(({
  slot: t,
  clone: e,
  className: s,
  style: o,
  observeAttributes: l
}, n) => {
  const r = ie(), [c, a] = ae([]), {
    forceClone: h
  } = he(), p = h ? !0 : e;
  return ue(() => {
    var w;
    if (!r.current || !t)
      return;
    let i = t;
    function g() {
      let u = i;
      if (i.tagName.toLowerCase() === "svelte-slot" && i.children.length === 1 && i.children[0] && (u = i.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), it(n, u), s && u.classList.add(...s.split(" ")), o) {
        const m = ot(o);
        Object.keys(m).forEach((C) => {
          u.style[C] = m[C];
        });
      }
    }
    let f = null, b = null;
    if (p && window.MutationObserver) {
      let u = function() {
        var d, E, _;
        (d = r.current) != null && d.contains(i) && ((E = r.current) == null || E.removeChild(i));
        const {
          portals: C,
          clonedElement: S
        } = D(t);
        i = S, a(C), i.style.display = "contents", b && clearTimeout(b), b = setTimeout(() => {
          g();
        }, 50), (_ = r.current) == null || _.appendChild(i);
      };
      u();
      const m = Pe(() => {
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
      i.style.display = "contents", g(), (w = r.current) == null || w.appendChild(i);
    return () => {
      var u, m;
      i.style.display = "", (u = r.current) != null && u.contains(i) && ((m = r.current) == null || m.removeChild(i)), f == null || f.disconnect();
    };
  }, [t, p, s, o, n, l, h]), v.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...c);
}), at = ({
  children: t,
  ...e
}) => /* @__PURE__ */ x.jsx(x.Fragment, {
  children: t(e)
});
function se(t) {
  return v.createElement(at, {
    children: t
  });
}
function oe(t, e, s) {
  const o = t.filter(Boolean);
  if (o.length !== 0)
    return o.map((l, n) => {
      var h;
      if (typeof l != "object")
        return e != null && e.fallback ? e.fallback(l) : l;
      const r = {
        ...l.props,
        key: ((h = l.props) == null ? void 0 : h.key) ?? (s ? `${s}-${n}` : `${n}`)
      };
      let c = r;
      Object.keys(l.slots).forEach((p) => {
        if (!l.slots[p] || !(l.slots[p] instanceof Element) && !l.slots[p].el)
          return;
        const i = p.split(".");
        i.forEach((m, C) => {
          c[m] || (c[m] = {}), C !== i.length - 1 && (c = r[m]);
        });
        const g = l.slots[p];
        let f, b, w = (e == null ? void 0 : e.clone) ?? !1, u = e == null ? void 0 : e.forceClone;
        g instanceof Element ? f = g : (f = g.el, b = g.callback, w = g.clone ?? w, u = g.forceClone ?? u), u = u ?? !!b, c[i[i.length - 1]] = f ? b ? (...m) => (b(i[i.length - 1], m), /* @__PURE__ */ x.jsx(A, {
          ...l.ctx,
          params: m,
          forceClone: u,
          children: /* @__PURE__ */ x.jsx(T, {
            slot: f,
            clone: w
          })
        })) : se((m) => /* @__PURE__ */ x.jsx(A, {
          ...l.ctx,
          forceClone: u,
          children: /* @__PURE__ */ x.jsx(T, {
            ...m,
            slot: f,
            clone: w
          })
        })) : c[i[i.length - 1]], c = r;
      });
      const a = (e == null ? void 0 : e.children) || "children";
      return l[a] ? r[a] = oe(l[a], e, `${n}`) : e != null && e.children && (r[a] = void 0, Reflect.deleteProperty(r, a)), r;
    });
}
function Q(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? se((s) => /* @__PURE__ */ x.jsx(A, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ x.jsx(T, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...s
    })
  })) : /* @__PURE__ */ x.jsx(T, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function ut({
  key: t,
  slots: e,
  targets: s
}, o) {
  return e[t] ? (...l) => s ? s.map((n, r) => /* @__PURE__ */ x.jsx(v.Fragment, {
    children: Q(n, {
      clone: !0,
      params: l,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ x.jsx(x.Fragment, {
    children: Q(e[t], {
      clone: !0,
      params: l,
      forceClone: !0
    })
  }) : void 0;
}
const {
  withItemsContextProvider: dt,
  useItems: ft,
  ItemHandler: ht
} = ge("antd-collapse-items"), pt = tt(dt(["default", "items"], ({
  slots: t,
  items: e,
  children: s,
  onChange: o,
  setSlotParams: l,
  expandIcon: n,
  ...r
}) => {
  const {
    items: c
  } = ft(), a = c.items.length > 0 ? c.items : c.default, h = lt(n);
  return /* @__PURE__ */ x.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ x.jsx("div", {
      style: {
        display: "none"
      },
      children: s
    }), /* @__PURE__ */ x.jsx(pe, {
      ...r,
      onChange: (p) => {
        o == null || o(p);
      },
      expandIcon: t.expandIcon ? ut({
        slots: t,
        key: "expandIcon"
      }) : h,
      items: Z(() => e || oe(a, {
        // for the children slot
        // clone: true,
      }), [e, a])
    })]
  });
}));
export {
  pt as Collapse,
  pt as default
};
