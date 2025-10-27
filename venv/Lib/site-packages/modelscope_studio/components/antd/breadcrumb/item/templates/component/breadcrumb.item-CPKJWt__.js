import { i as fe, a as B, r as me, w as R, g as he, b as _e } from "./Index-BqZMrc0G.js";
const I = window.ms_globals.React, ie = window.ms_globals.React.forwardRef, ae = window.ms_globals.React.useRef, de = window.ms_globals.React.useState, ue = window.ms_globals.React.useEffect, F = window.ms_globals.ReactDOM.createPortal, pe = window.ms_globals.internalContext.useContextPropsContext, M = window.ms_globals.internalContext.ContextPropsProvider, ee = window.ms_globals.createItemsContext.createItemsContext;
var we = /\s/;
function ge(t) {
  for (var e = t.length; e-- && we.test(t.charAt(e)); )
    ;
  return e;
}
var ve = /^\s+/;
function xe(t) {
  return t && t.slice(0, ge(t) + 1).replace(ve, "");
}
var G = NaN, be = /^[-+]0x[0-9a-f]+$/i, Ie = /^0b[01]+$/i, Ce = /^0o[0-7]+$/i, ye = parseInt;
function q(t) {
  if (typeof t == "number")
    return t;
  if (fe(t))
    return G;
  if (B(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = B(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = xe(t);
  var l = Ie.test(t);
  return l || Ce.test(t) ? ye(t.slice(2), l ? 2 : 8) : be.test(t) ? G : +t;
}
var N = function() {
  return me.Date.now();
}, Ee = "Expected a function", Se = Math.max, Pe = Math.min;
function Re(t, e, l) {
  var s, o, n, r, c, a, _ = 0, p = !1, i = !1, w = !0;
  if (typeof t != "function")
    throw new TypeError(Ee);
  e = q(e) || 0, B(l) && (p = !!l.leading, i = "maxWait" in l, n = i ? Se(q(l.maxWait) || 0, e) : n, w = "trailing" in l ? !!l.trailing : w);
  function u(h) {
    var y = s, P = o;
    return s = o = void 0, _ = h, r = t.apply(P, y), r;
  }
  function g(h) {
    return _ = h, c = setTimeout(f, e), p ? u(h) : r;
  }
  function v(h) {
    var y = h - a, P = h - _, z = e - y;
    return i ? Pe(z, n - P) : z;
  }
  function d(h) {
    var y = h - a, P = h - _;
    return a === void 0 || y >= e || y < 0 || i && P >= n;
  }
  function f() {
    var h = N();
    if (d(h))
      return x(h);
    c = setTimeout(f, v(h));
  }
  function x(h) {
    return c = void 0, w && s ? u(h) : (s = o = void 0, r);
  }
  function C() {
    c !== void 0 && clearTimeout(c), _ = 0, s = a = o = c = void 0;
  }
  function m() {
    return c === void 0 ? r : x(N());
  }
  function E() {
    var h = N(), y = d(h);
    if (s = arguments, o = this, a = h, y) {
      if (c === void 0)
        return g(a);
      if (i)
        return clearTimeout(c), c = setTimeout(f, e), u(a);
    }
    return c === void 0 && (c = setTimeout(f, e)), r;
  }
  return E.cancel = C, E.flush = m, E;
}
var te = {
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
var ke = I, Oe = Symbol.for("react.element"), Te = Symbol.for("react.fragment"), je = Object.prototype.hasOwnProperty, Le = ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ne = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ne(t, e, l) {
  var s, o = {}, n = null, r = null;
  l !== void 0 && (n = "" + l), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (r = e.ref);
  for (s in e) je.call(e, s) && !Ne.hasOwnProperty(s) && (o[s] = e[s]);
  if (t && t.defaultProps) for (s in e = t.defaultProps, e) o[s] === void 0 && (o[s] = e[s]);
  return {
    $$typeof: Oe,
    type: t,
    key: n,
    ref: r,
    props: o,
    _owner: Le.current
  };
}
L.Fragment = Te;
L.jsx = ne;
L.jsxs = ne;
te.exports = L;
var b = te.exports;
const {
  SvelteComponent: We,
  assign: V,
  binding_callbacks: J,
  check_outros: Ae,
  children: re,
  claim_element: oe,
  claim_space: Fe,
  component_subscribe: X,
  compute_slots: Be,
  create_slot: Me,
  detach: S,
  element: le,
  empty: Y,
  exclude_internal_props: K,
  get_all_dirty_from_scope: De,
  get_slot_changes: He,
  group_outros: Ue,
  init: ze,
  insert_hydration: k,
  safe_not_equal: Ge,
  set_custom_element_data: se,
  space: qe,
  transition_in: O,
  transition_out: D,
  update_slot_base: Ve
} = window.__gradio__svelte__internal, {
  beforeUpdate: Je,
  getContext: Xe,
  onDestroy: Ye,
  setContext: Ke
} = window.__gradio__svelte__internal;
function Q(t) {
  let e, l;
  const s = (
    /*#slots*/
    t[7].default
  ), o = Me(
    s,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = le("svelte-slot"), o && o.c(), this.h();
    },
    l(n) {
      e = oe(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = re(e);
      o && o.l(r), r.forEach(S), this.h();
    },
    h() {
      se(e, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      k(n, e, r), o && o.m(e, null), t[9](e), l = !0;
    },
    p(n, r) {
      o && o.p && (!l || r & /*$$scope*/
      64) && Ve(
        o,
        s,
        n,
        /*$$scope*/
        n[6],
        l ? He(
          s,
          /*$$scope*/
          n[6],
          r,
          null
        ) : De(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      l || (O(o, n), l = !0);
    },
    o(n) {
      D(o, n), l = !1;
    },
    d(n) {
      n && S(e), o && o.d(n), t[9](null);
    }
  };
}
function Qe(t) {
  let e, l, s, o, n = (
    /*$$slots*/
    t[4].default && Q(t)
  );
  return {
    c() {
      e = le("react-portal-target"), l = qe(), n && n.c(), s = Y(), this.h();
    },
    l(r) {
      e = oe(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), re(e).forEach(S), l = Fe(r), n && n.l(r), s = Y(), this.h();
    },
    h() {
      se(e, "class", "svelte-1rt0kpf");
    },
    m(r, c) {
      k(r, e, c), t[8](e), k(r, l, c), n && n.m(r, c), k(r, s, c), o = !0;
    },
    p(r, [c]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, c), c & /*$$slots*/
      16 && O(n, 1)) : (n = Q(r), n.c(), O(n, 1), n.m(s.parentNode, s)) : n && (Ue(), D(n, 1, 1, () => {
        n = null;
      }), Ae());
    },
    i(r) {
      o || (O(n), o = !0);
    },
    o(r) {
      D(n), o = !1;
    },
    d(r) {
      r && (S(e), S(l), S(s)), t[8](null), n && n.d(r);
    }
  };
}
function Z(t) {
  const {
    svelteInit: e,
    ...l
  } = t;
  return l;
}
function Ze(t, e, l) {
  let s, o, {
    $$slots: n = {},
    $$scope: r
  } = e;
  const c = Be(n);
  let {
    svelteInit: a
  } = e;
  const _ = R(Z(e)), p = R();
  X(t, p, (m) => l(0, s = m));
  const i = R();
  X(t, i, (m) => l(1, o = m));
  const w = [], u = Xe("$$ms-gr-react-wrapper"), {
    slotKey: g,
    slotIndex: v,
    subSlotIndex: d
  } = he() || {}, f = a({
    parent: u,
    props: _,
    target: p,
    slot: i,
    slotKey: g,
    slotIndex: v,
    subSlotIndex: d,
    onDestroy(m) {
      w.push(m);
    }
  });
  Ke("$$ms-gr-react-wrapper", f), Je(() => {
    _.set(Z(e));
  }), Ye(() => {
    w.forEach((m) => m());
  });
  function x(m) {
    J[m ? "unshift" : "push"](() => {
      s = m, p.set(s);
    });
  }
  function C(m) {
    J[m ? "unshift" : "push"](() => {
      o = m, i.set(o);
    });
  }
  return t.$$set = (m) => {
    l(17, e = V(V({}, e), K(m))), "svelteInit" in m && l(5, a = m.svelteInit), "$$scope" in m && l(6, r = m.$$scope);
  }, e = K(e), [s, o, p, i, c, a, r, n, x, C];
}
class $e extends We {
  constructor(e) {
    super(), ze(this, e, Ze, Qe, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ft
} = window.__gradio__svelte__internal, $ = window.ms_globals.rerender, W = window.ms_globals.tree;
function et(t, e = {}) {
  function l(s) {
    const o = R(), n = new $e({
      ...s,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const c = {
            key: window.ms_globals.autokey,
            svelteInstance: o,
            reactComponent: t,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: e.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, a = r.parent ?? W;
          return a.nodes = [...a.nodes, c], $({
            createPortal: F,
            node: W
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((_) => _.svelteInstance !== o), $({
              createPortal: F,
              node: W
            });
          }), c;
        },
        ...s.props
      }
    });
    return o.set(n), n;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(l);
    });
  });
}
function tt(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function nt(t, e = !1) {
  try {
    if (_e(t))
      return t;
    if (e && !tt(t))
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
const rt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ot(t) {
  return t ? Object.keys(t).reduce((e, l) => {
    const s = t[l];
    return e[l] = lt(l, s), e;
  }, {}) : {};
}
function lt(t, e) {
  return typeof e == "number" && !rt.includes(t) ? e + "px" : e;
}
function H(t) {
  const e = [], l = t.cloneNode(!1);
  if (t._reactElement) {
    const o = I.Children.toArray(t._reactElement.props.children).map((n) => {
      if (I.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: c
        } = H(n.props.el);
        return I.cloneElement(n, {
          ...n.props,
          el: c,
          children: [...I.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = t._reactElement.props.children, e.push(F(I.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: o
    }), l)), {
      clonedElement: l,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((o) => {
    t.getEventListeners(o).forEach(({
      listener: r,
      type: c,
      useCapture: a
    }) => {
      l.addEventListener(c, r, a);
    });
  });
  const s = Array.from(t.childNodes);
  for (let o = 0; o < s.length; o++) {
    const n = s[o];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: c
      } = H(n);
      e.push(...c), l.appendChild(r);
    } else n.nodeType === 3 && l.appendChild(n.cloneNode());
  }
  return {
    clonedElement: l,
    portals: e
  };
}
function st(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const T = ie(({
  slot: t,
  clone: e,
  className: l,
  style: s,
  observeAttributes: o
}, n) => {
  const r = ae(), [c, a] = de([]), {
    forceClone: _
  } = pe(), p = _ ? !0 : e;
  return ue(() => {
    var v;
    if (!r.current || !t)
      return;
    let i = t;
    function w() {
      let d = i;
      if (i.tagName.toLowerCase() === "svelte-slot" && i.children.length === 1 && i.children[0] && (d = i.children[0], d.tagName.toLowerCase() === "react-portal-target" && d.children[0] && (d = d.children[0])), st(n, d), l && d.classList.add(...l.split(" ")), s) {
        const f = ot(s);
        Object.keys(f).forEach((x) => {
          d.style[x] = f[x];
        });
      }
    }
    let u = null, g = null;
    if (p && window.MutationObserver) {
      let d = function() {
        var m, E, h;
        (m = r.current) != null && m.contains(i) && ((E = r.current) == null || E.removeChild(i));
        const {
          portals: x,
          clonedElement: C
        } = H(t);
        i = C, a(x), i.style.display = "contents", g && clearTimeout(g), g = setTimeout(() => {
          w();
        }, 50), (h = r.current) == null || h.appendChild(i);
      };
      d();
      const f = Re(() => {
        d(), u == null || u.disconnect(), u == null || u.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      u = new window.MutationObserver(f), u.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      i.style.display = "contents", w(), (v = r.current) == null || v.appendChild(i);
    return () => {
      var d, f;
      i.style.display = "", (d = r.current) != null && d.contains(i) && ((f = r.current) == null || f.removeChild(i)), u == null || u.disconnect();
    };
  }, [t, p, l, s, n, o, _]), I.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...c);
}), ct = ({
  children: t,
  ...e
}) => /* @__PURE__ */ b.jsx(b.Fragment, {
  children: t(e)
});
function ce(t) {
  return I.createElement(ct, {
    children: t
  });
}
function U(t, e, l) {
  const s = t.filter(Boolean);
  if (s.length !== 0)
    return s.map((o, n) => {
      var _;
      if (typeof o != "object")
        return e != null && e.fallback ? e.fallback(o) : o;
      const r = {
        ...o.props,
        key: ((_ = o.props) == null ? void 0 : _.key) ?? (l ? `${l}-${n}` : `${n}`)
      };
      let c = r;
      Object.keys(o.slots).forEach((p) => {
        if (!o.slots[p] || !(o.slots[p] instanceof Element) && !o.slots[p].el)
          return;
        const i = p.split(".");
        i.forEach((f, x) => {
          c[f] || (c[f] = {}), x !== i.length - 1 && (c = r[f]);
        });
        const w = o.slots[p];
        let u, g, v = (e == null ? void 0 : e.clone) ?? !1, d = e == null ? void 0 : e.forceClone;
        w instanceof Element ? u = w : (u = w.el, g = w.callback, v = w.clone ?? v, d = w.forceClone ?? d), d = d ?? !!g, c[i[i.length - 1]] = u ? g ? (...f) => (g(i[i.length - 1], f), /* @__PURE__ */ b.jsx(M, {
          ...o.ctx,
          params: f,
          forceClone: d,
          children: /* @__PURE__ */ b.jsx(T, {
            slot: u,
            clone: v
          })
        })) : ce((f) => /* @__PURE__ */ b.jsx(M, {
          ...o.ctx,
          forceClone: d,
          children: /* @__PURE__ */ b.jsx(T, {
            ...f,
            slot: u,
            clone: v
          })
        })) : c[i[i.length - 1]], c = r;
      });
      const a = (e == null ? void 0 : e.children) || "children";
      return o[a] ? r[a] = U(o[a], e, `${n}`) : e != null && e.children && (r[a] = void 0, Reflect.deleteProperty(r, a)), r;
    });
}
function j(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? ce((l) => /* @__PURE__ */ b.jsx(M, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ b.jsx(T, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...l
    })
  })) : /* @__PURE__ */ b.jsx(T, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function A({
  key: t,
  slots: e,
  targets: l
}, s) {
  return e[t] ? (...o) => l ? l.map((n, r) => /* @__PURE__ */ b.jsx(I.Fragment, {
    children: j(n, {
      clone: !0,
      params: o,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }, r)) : /* @__PURE__ */ b.jsx(b.Fragment, {
    children: j(e[t], {
      clone: !0,
      params: o,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }) : void 0;
}
const {
  useItems: it,
  withItemsContextProvider: at,
  ItemHandler: mt
} = ee("antd-menu-items"), {
  useItems: ht,
  withItemsContextProvider: _t,
  ItemHandler: dt
} = ee("antd-breadcrumb-items"), pt = et(at(["menu.items", "dropdownProps.menu.items"], ({
  setSlotParams: t,
  itemSlots: e,
  ...l
}) => {
  const {
    items: {
      "menu.items": s,
      "dropdownProps.menu.items": o
    }
  } = it();
  return /* @__PURE__ */ b.jsx(dt, {
    ...l,
    itemProps: (n) => {
      var _, p, i, w, u, g, v, d, f, x, C;
      const r = {
        ...n.menu || {},
        items: (_ = n.menu) != null && _.items || s.length > 0 ? U(s, {
          clone: !0
        }) : void 0,
        expandIcon: A({
          slots: e,
          key: "menu.expandIcon"
        }, {}) || ((p = n.menu) == null ? void 0 : p.expandIcon),
        overflowedIndicator: j(e["menu.overflowedIndicator"]) || ((i = n.menu) == null ? void 0 : i.overflowedIndicator)
      }, c = {
        ...((w = n.dropdownProps) == null ? void 0 : w.menu) || {},
        items: (g = (u = n.dropdownProps) == null ? void 0 : u.menu) != null && g.items || o.length > 0 ? U(o, {
          clone: !0
        }) : void 0,
        expandIcon: A({
          slots: e,
          key: "dropdownProps.menu.expandIcon"
        }, {}) || ((d = (v = n.dropdownProps) == null ? void 0 : v.menu) == null ? void 0 : d.expandIcon),
        overflowedIndicator: j(e["dropdownProps.menu.overflowedIndicator"]) || ((x = (f = n.dropdownProps) == null ? void 0 : f.menu) == null ? void 0 : x.overflowedIndicator)
      }, a = {
        ...n.dropdownProps || {},
        dropdownRender: e["dropdownProps.dropdownRender"] ? A({
          slots: e,
          key: "dropdownProps.dropdownRender"
        }, {}) : nt((C = n.dropdownProps) == null ? void 0 : C.dropdownRender),
        menu: Object.values(c).filter(Boolean).length > 0 ? c : void 0
      };
      return {
        ...n,
        menu: Object.values(r).filter(Boolean).length > 0 ? r : void 0,
        dropdownProps: Object.values(a).filter(Boolean).length > 0 ? a : void 0
      };
    }
  });
}));
export {
  pt as BreadcrumbItem,
  pt as default
};
