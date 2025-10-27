import { i as fe, a as H, r as me, w as k, g as he, c as _e } from "./Index-BsrBB6Y2.js";
const C = window.ms_globals.React, ie = window.ms_globals.React.forwardRef, ae = window.ms_globals.React.useRef, de = window.ms_globals.React.useState, ue = window.ms_globals.React.useEffect, A = window.ms_globals.ReactDOM.createPortal, pe = window.ms_globals.internalContext.useContextPropsContext, W = window.ms_globals.internalContext.ContextPropsProvider, R = window.ms_globals.createItemsContext.createItemsContext;
var we = /\s/;
function ge(t) {
  for (var e = t.length; e-- && we.test(t.charAt(e)); )
    ;
  return e;
}
var xe = /^\s+/;
function Ie(t) {
  return t && t.slice(0, ge(t) + 1).replace(xe, "");
}
var z = NaN, be = /^[-+]0x[0-9a-f]+$/i, Ce = /^0b[01]+$/i, ve = /^0o[0-7]+$/i, Ee = parseInt;
function G(t) {
  if (typeof t == "number")
    return t;
  if (fe(t))
    return z;
  if (H(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = H(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ie(t);
  var o = Ce.test(t);
  return o || ve.test(t) ? Ee(t.slice(2), o ? 2 : 8) : be.test(t) ? z : +t;
}
var L = function() {
  return me.Date.now();
}, ye = "Expected a function", Pe = Math.max, Se = Math.min;
function Re(t, e, o) {
  var s, n, r, l, c, a, _ = 0, p = !1, i = !1, w = !0;
  if (typeof t != "function")
    throw new TypeError(ye);
  e = G(e) || 0, H(o) && (p = !!o.leading, i = "maxWait" in o, r = i ? Pe(G(o.maxWait) || 0, e) : r, w = "trailing" in o ? !!o.trailing : w);
  function d(h) {
    var v = s, S = n;
    return s = n = void 0, _ = h, l = t.apply(S, v), l;
  }
  function g(h) {
    return _ = h, c = setTimeout(m, e), p ? d(h) : l;
  }
  function I(h) {
    var v = h - a, S = h - _, U = e - v;
    return i ? Se(U, r - S) : U;
  }
  function u(h) {
    var v = h - a, S = h - _;
    return a === void 0 || v >= e || v < 0 || i && S >= r;
  }
  function m() {
    var h = L();
    if (u(h))
      return b(h);
    c = setTimeout(m, I(h));
  }
  function b(h) {
    return c = void 0, w && s ? d(h) : (s = n = void 0, l);
  }
  function P() {
    c !== void 0 && clearTimeout(c), _ = 0, s = a = n = c = void 0;
  }
  function f() {
    return c === void 0 ? l : b(L());
  }
  function E() {
    var h = L(), v = u(h);
    if (s = arguments, n = this, a = h, v) {
      if (c === void 0)
        return g(a);
      if (i)
        return clearTimeout(c), c = setTimeout(m, e), d(a);
    }
    return c === void 0 && (c = setTimeout(m, e)), l;
  }
  return E.cancel = P, E.flush = f, E;
}
var ee = {
  exports: {}
}, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke = C, Oe = Symbol.for("react.element"), Te = Symbol.for("react.fragment"), je = Object.prototype.hasOwnProperty, De = ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function te(t, e, o) {
  var s, n = {}, r = null, l = null;
  o !== void 0 && (r = "" + o), e.key !== void 0 && (r = "" + e.key), e.ref !== void 0 && (l = e.ref);
  for (s in e) je.call(e, s) && !Le.hasOwnProperty(s) && (n[s] = e[s]);
  if (t && t.defaultProps) for (s in e = t.defaultProps, e) n[s] === void 0 && (n[s] = e[s]);
  return {
    $$typeof: Oe,
    type: t,
    key: r,
    ref: l,
    props: n,
    _owner: De.current
  };
}
D.Fragment = Te;
D.jsx = te;
D.jsxs = te;
ee.exports = D;
var x = ee.exports;
const {
  SvelteComponent: Ne,
  assign: q,
  binding_callbacks: V,
  check_outros: Ae,
  children: re,
  claim_element: ne,
  claim_space: He,
  component_subscribe: J,
  compute_slots: We,
  create_slot: Fe,
  detach: y,
  element: le,
  empty: X,
  exclude_internal_props: Y,
  get_all_dirty_from_scope: Me,
  get_slot_changes: Be,
  group_outros: Ue,
  init: ze,
  insert_hydration: O,
  safe_not_equal: Ge,
  set_custom_element_data: oe,
  space: qe,
  transition_in: T,
  transition_out: F,
  update_slot_base: Ve
} = window.__gradio__svelte__internal, {
  beforeUpdate: Je,
  getContext: Xe,
  onDestroy: Ye,
  setContext: Ke
} = window.__gradio__svelte__internal;
function K(t) {
  let e, o;
  const s = (
    /*#slots*/
    t[7].default
  ), n = Fe(
    s,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = le("svelte-slot"), n && n.c(), this.h();
    },
    l(r) {
      e = ne(r, "SVELTE-SLOT", {
        class: !0
      });
      var l = re(e);
      n && n.l(l), l.forEach(y), this.h();
    },
    h() {
      oe(e, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      O(r, e, l), n && n.m(e, null), t[9](e), o = !0;
    },
    p(r, l) {
      n && n.p && (!o || l & /*$$scope*/
      64) && Ve(
        n,
        s,
        r,
        /*$$scope*/
        r[6],
        o ? Be(
          s,
          /*$$scope*/
          r[6],
          l,
          null
        ) : Me(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      o || (T(n, r), o = !0);
    },
    o(r) {
      F(n, r), o = !1;
    },
    d(r) {
      r && y(e), n && n.d(r), t[9](null);
    }
  };
}
function Qe(t) {
  let e, o, s, n, r = (
    /*$$slots*/
    t[4].default && K(t)
  );
  return {
    c() {
      e = le("react-portal-target"), o = qe(), r && r.c(), s = X(), this.h();
    },
    l(l) {
      e = ne(l, "REACT-PORTAL-TARGET", {
        class: !0
      }), re(e).forEach(y), o = He(l), r && r.l(l), s = X(), this.h();
    },
    h() {
      oe(e, "class", "svelte-1rt0kpf");
    },
    m(l, c) {
      O(l, e, c), t[8](e), O(l, o, c), r && r.m(l, c), O(l, s, c), n = !0;
    },
    p(l, [c]) {
      /*$$slots*/
      l[4].default ? r ? (r.p(l, c), c & /*$$slots*/
      16 && T(r, 1)) : (r = K(l), r.c(), T(r, 1), r.m(s.parentNode, s)) : r && (Ue(), F(r, 1, 1, () => {
        r = null;
      }), Ae());
    },
    i(l) {
      n || (T(r), n = !0);
    },
    o(l) {
      F(r), n = !1;
    },
    d(l) {
      l && (y(e), y(o), y(s)), t[8](null), r && r.d(l);
    }
  };
}
function Q(t) {
  const {
    svelteInit: e,
    ...o
  } = t;
  return o;
}
function Ze(t, e, o) {
  let s, n, {
    $$slots: r = {},
    $$scope: l
  } = e;
  const c = We(r);
  let {
    svelteInit: a
  } = e;
  const _ = k(Q(e)), p = k();
  J(t, p, (f) => o(0, s = f));
  const i = k();
  J(t, i, (f) => o(1, n = f));
  const w = [], d = Xe("$$ms-gr-react-wrapper"), {
    slotKey: g,
    slotIndex: I,
    subSlotIndex: u
  } = he() || {}, m = a({
    parent: d,
    props: _,
    target: p,
    slot: i,
    slotKey: g,
    slotIndex: I,
    subSlotIndex: u,
    onDestroy(f) {
      w.push(f);
    }
  });
  Ke("$$ms-gr-react-wrapper", m), Je(() => {
    _.set(Q(e));
  }), Ye(() => {
    w.forEach((f) => f());
  });
  function b(f) {
    V[f ? "unshift" : "push"](() => {
      s = f, p.set(s);
    });
  }
  function P(f) {
    V[f ? "unshift" : "push"](() => {
      n = f, i.set(n);
    });
  }
  return t.$$set = (f) => {
    o(17, e = q(q({}, e), Y(f))), "svelteInit" in f && o(5, a = f.svelteInit), "$$scope" in f && o(6, l = f.$$scope);
  }, e = Y(e), [s, n, p, i, c, a, l, r, b, P];
}
class $e extends Ne {
  constructor(e) {
    super(), ze(this, e, Ze, Qe, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: dt
} = window.__gradio__svelte__internal, Z = window.ms_globals.rerender, N = window.ms_globals.tree;
function et(t, e = {}) {
  function o(s) {
    const n = k(), r = new $e({
      ...s,
      props: {
        svelteInit(l) {
          window.ms_globals.autokey += 1;
          const c = {
            key: window.ms_globals.autokey,
            svelteInstance: n,
            reactComponent: t,
            props: l.props,
            slot: l.slot,
            target: l.target,
            slotIndex: l.slotIndex,
            subSlotIndex: l.subSlotIndex,
            ignore: e.ignore,
            slotKey: l.slotKey,
            nodes: []
          }, a = l.parent ?? N;
          return a.nodes = [...a.nodes, c], Z({
            createPortal: A,
            node: N
          }), l.onDestroy(() => {
            a.nodes = a.nodes.filter((_) => _.svelteInstance !== n), Z({
              createPortal: A,
              node: N
            });
          }), c;
        },
        ...s.props
      }
    });
    return n.set(r), r;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(o);
    });
  });
}
const tt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function rt(t) {
  return t ? Object.keys(t).reduce((e, o) => {
    const s = t[o];
    return e[o] = nt(o, s), e;
  }, {}) : {};
}
function nt(t, e) {
  return typeof e == "number" && !tt.includes(t) ? e + "px" : e;
}
function M(t) {
  const e = [], o = t.cloneNode(!1);
  if (t._reactElement) {
    const n = C.Children.toArray(t._reactElement.props.children).map((r) => {
      if (C.isValidElement(r) && r.props.__slot__) {
        const {
          portals: l,
          clonedElement: c
        } = M(r.props.el);
        return C.cloneElement(r, {
          ...r.props,
          el: c,
          children: [...C.Children.toArray(r.props.children), ...l]
        });
      }
      return null;
    });
    return n.originalChildren = t._reactElement.props.children, e.push(A(C.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: n
    }), o)), {
      clonedElement: o,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((n) => {
    t.getEventListeners(n).forEach(({
      listener: l,
      type: c,
      useCapture: a
    }) => {
      o.addEventListener(c, l, a);
    });
  });
  const s = Array.from(t.childNodes);
  for (let n = 0; n < s.length; n++) {
    const r = s[n];
    if (r.nodeType === 1) {
      const {
        clonedElement: l,
        portals: c
      } = M(r);
      e.push(...c), o.appendChild(l);
    } else r.nodeType === 3 && o.appendChild(r.cloneNode());
  }
  return {
    clonedElement: o,
    portals: e
  };
}
function lt(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const j = ie(({
  slot: t,
  clone: e,
  className: o,
  style: s,
  observeAttributes: n
}, r) => {
  const l = ae(), [c, a] = de([]), {
    forceClone: _
  } = pe(), p = _ ? !0 : e;
  return ue(() => {
    var I;
    if (!l.current || !t)
      return;
    let i = t;
    function w() {
      let u = i;
      if (i.tagName.toLowerCase() === "svelte-slot" && i.children.length === 1 && i.children[0] && (u = i.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), lt(r, u), o && u.classList.add(...o.split(" ")), s) {
        const m = rt(s);
        Object.keys(m).forEach((b) => {
          u.style[b] = m[b];
        });
      }
    }
    let d = null, g = null;
    if (p && window.MutationObserver) {
      let u = function() {
        var f, E, h;
        (f = l.current) != null && f.contains(i) && ((E = l.current) == null || E.removeChild(i));
        const {
          portals: b,
          clonedElement: P
        } = M(t);
        i = P, a(b), i.style.display = "contents", g && clearTimeout(g), g = setTimeout(() => {
          w();
        }, 50), (h = l.current) == null || h.appendChild(i);
      };
      u();
      const m = Re(() => {
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
      i.style.display = "contents", w(), (I = l.current) == null || I.appendChild(i);
    return () => {
      var u, m;
      i.style.display = "", (u = l.current) != null && u.contains(i) && ((m = l.current) == null || m.removeChild(i)), d == null || d.disconnect();
    };
  }, [t, p, o, s, r, n, _]), C.createElement("react-child", {
    ref: l,
    style: {
      display: "contents"
    }
  }, ...c);
}), ot = ({
  children: t,
  ...e
}) => /* @__PURE__ */ x.jsx(x.Fragment, {
  children: t(e)
});
function se(t) {
  return C.createElement(ot, {
    children: t
  });
}
function ce(t, e, o) {
  const s = t.filter(Boolean);
  if (s.length !== 0)
    return s.map((n, r) => {
      var _;
      if (typeof n != "object")
        return e != null && e.fallback ? e.fallback(n) : n;
      const l = {
        ...n.props,
        key: ((_ = n.props) == null ? void 0 : _.key) ?? (o ? `${o}-${r}` : `${r}`)
      };
      let c = l;
      Object.keys(n.slots).forEach((p) => {
        if (!n.slots[p] || !(n.slots[p] instanceof Element) && !n.slots[p].el)
          return;
        const i = p.split(".");
        i.forEach((m, b) => {
          c[m] || (c[m] = {}), b !== i.length - 1 && (c = l[m]);
        });
        const w = n.slots[p];
        let d, g, I = (e == null ? void 0 : e.clone) ?? !1, u = e == null ? void 0 : e.forceClone;
        w instanceof Element ? d = w : (d = w.el, g = w.callback, I = w.clone ?? I, u = w.forceClone ?? u), u = u ?? !!g, c[i[i.length - 1]] = d ? g ? (...m) => (g(i[i.length - 1], m), /* @__PURE__ */ x.jsx(W, {
          ...n.ctx,
          params: m,
          forceClone: u,
          children: /* @__PURE__ */ x.jsx(j, {
            slot: d,
            clone: I
          })
        })) : se((m) => /* @__PURE__ */ x.jsx(W, {
          ...n.ctx,
          forceClone: u,
          children: /* @__PURE__ */ x.jsx(j, {
            ...m,
            slot: d,
            clone: I
          })
        })) : c[i[i.length - 1]], c = l;
      });
      const a = (e == null ? void 0 : e.children) || "children";
      return n[a] ? l[a] = ce(n[a], e, `${r}`) : e != null && e.children && (l[a] = void 0, Reflect.deleteProperty(l, a)), l;
    });
}
function B(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? se((o) => /* @__PURE__ */ x.jsx(W, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ x.jsx(j, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...o
    })
  })) : /* @__PURE__ */ x.jsx(j, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function $({
  key: t,
  slots: e,
  targets: o
}, s) {
  return e[t] ? (...n) => o ? o.map((r, l) => /* @__PURE__ */ x.jsx(C.Fragment, {
    children: B(r, {
      clone: !0,
      params: n,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }, l)) : /* @__PURE__ */ x.jsx(x.Fragment, {
    children: B(e[t], {
      clone: !0,
      params: n,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }) : void 0;
}
const {
  useItems: st,
  withItemsContextProvider: ct,
  ItemHandler: ut
} = R("antd-menu-items"), {
  useItems: ft,
  withItemsContextProvider: mt,
  ItemHandler: it
} = R("antd-table-columns"), {
  useItems: ht,
  withItemsContextProvider: _t,
  ItemHandler: pt
} = R("antd-table-row-selection-selections"), {
  useItems: wt,
  withItemsContextProvider: gt,
  ItemHandler: xt
} = R("antd-table-row-selection"), {
  useItems: It,
  withItemsContextProvider: bt,
  ItemHandler: Ct
} = R("antd-table-expandable"), vt = et(ct(["filterDropdownProps.menu.items"], ({
  setSlotParams: t,
  itemSlots: e,
  ...o
}) => {
  const {
    items: {
      "filterDropdownProps.menu.items": s
    }
  } = st();
  return /* @__PURE__ */ x.jsx(it, {
    ...o,
    itemProps: (n) => {
      var c, a, _, p, i, w, d, g;
      const r = {
        ...((c = n.filterDropdownProps) == null ? void 0 : c.menu) || {},
        items: (_ = (a = n.filterDropdownProps) == null ? void 0 : a.menu) != null && _.items || s.length > 0 ? ce(s, {
          clone: !0
        }) : void 0,
        expandIcon: $({
          slots: e,
          key: "filterDropdownProps.menu.expandIcon"
        }, {}) || ((i = (p = n.filterDropdownProps) == null ? void 0 : p.menu) == null ? void 0 : i.expandIcon),
        overflowedIndicator: B(e["filterDropdownProps.menu.overflowedIndicator"]) || ((d = (w = n.filterDropdownProps) == null ? void 0 : w.menu) == null ? void 0 : d.overflowedIndicator)
      }, l = {
        ...n.filterDropdownProps || {},
        dropdownRender: e["filterDropdownProps.dropdownRender"] ? $({
          slots: e,
          key: "filterDropdownProps.dropdownRender"
        }, {}) : _e((g = n.filterDropdownProps) == null ? void 0 : g.dropdownRender),
        menu: Object.values(r).filter(Boolean).length > 0 ? r : void 0
      };
      return {
        ...n,
        filterDropdownProps: Object.values(l).filter(Boolean).length > 0 ? l : void 0
      };
    }
  });
}));
export {
  vt as TableColumn,
  vt as default
};
