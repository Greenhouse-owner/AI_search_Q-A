import { i as fe, a as W, r as me, w as j, g as _e, b as he } from "./Index-BCoZD61V.js";
const w = window.ms_globals.React, ae = window.ms_globals.React.forwardRef, ce = window.ms_globals.React.useRef, ue = window.ms_globals.React.useState, de = window.ms_globals.React.useEffect, $ = window.ms_globals.React.useMemo, N = window.ms_globals.ReactDOM.createPortal, pe = window.ms_globals.internalContext.useContextPropsContext, A = window.ms_globals.internalContext.ContextPropsProvider, ge = window.ms_globals.antd.Tabs, be = window.ms_globals.createItemsContext.createItemsContext;
var xe = /\s/;
function Ce(e) {
  for (var t = e.length; t-- && xe.test(e.charAt(t)); )
    ;
  return t;
}
var Ee = /^\s+/;
function ve(e) {
  return e && e.slice(0, Ce(e) + 1).replace(Ee, "");
}
var U = NaN, we = /^[-+]0x[0-9a-f]+$/i, ye = /^0b[01]+$/i, Ie = /^0o[0-7]+$/i, Se = parseInt;
function H(e) {
  if (typeof e == "number")
    return e;
  if (fe(e))
    return U;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ve(e);
  var o = ye.test(e);
  return o || Ie.test(e) ? Se(e.slice(2), o ? 2 : 8) : we.test(e) ? U : +e;
}
var B = function() {
  return me.Date.now();
}, Te = "Expected a function", Pe = Math.max, je = Math.min;
function Re(e, t, o) {
  var l, n, r, s, i, c, g = 0, b = !1, a = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Te);
  t = H(t) || 0, W(o) && (b = !!o.leading, a = "maxWait" in o, r = a ? Pe(H(o.maxWait) || 0, t) : r, p = "trailing" in o ? !!o.trailing : p);
  function u(_) {
    var y = l, P = n;
    return l = n = void 0, g = _, s = e.apply(P, y), s;
  }
  function x(_) {
    return g = _, i = setTimeout(m, t), b ? u(_) : s;
  }
  function C(_) {
    var y = _ - c, P = _ - g, D = t - y;
    return a ? je(D, r - P) : D;
  }
  function d(_) {
    var y = _ - c, P = _ - g;
    return c === void 0 || y >= t || y < 0 || a && P >= r;
  }
  function m() {
    var _ = B();
    if (d(_))
      return E(_);
    i = setTimeout(m, C(_));
  }
  function E(_) {
    return i = void 0, p && l ? u(_) : (l = n = void 0, s);
  }
  function T() {
    i !== void 0 && clearTimeout(i), g = 0, l = c = n = i = void 0;
  }
  function f() {
    return i === void 0 ? s : E(B());
  }
  function I() {
    var _ = B(), y = d(_);
    if (l = arguments, n = this, c = _, y) {
      if (i === void 0)
        return x(c);
      if (a)
        return clearTimeout(i), i = setTimeout(m, t), u(c);
    }
    return i === void 0 && (i = setTimeout(m, t)), s;
  }
  return I.cancel = T, I.flush = f, I;
}
var ee = {
  exports: {}
}, k = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe = w, ke = Symbol.for("react.element"), Be = Symbol.for("react.fragment"), Fe = Object.prototype.hasOwnProperty, Le = Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ne = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function te(e, t, o) {
  var l, n = {}, r = null, s = null;
  o !== void 0 && (r = "" + o), t.key !== void 0 && (r = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (l in t) Fe.call(t, l) && !Ne.hasOwnProperty(l) && (n[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) n[l] === void 0 && (n[l] = t[l]);
  return {
    $$typeof: ke,
    type: e,
    key: r,
    ref: s,
    props: n,
    _owner: Le.current
  };
}
k.Fragment = Be;
k.jsx = te;
k.jsxs = te;
ee.exports = k;
var h = ee.exports;
const {
  SvelteComponent: We,
  assign: G,
  binding_callbacks: q,
  check_outros: Ae,
  children: ne,
  claim_element: re,
  claim_space: Me,
  component_subscribe: V,
  compute_slots: ze,
  create_slot: De,
  detach: S,
  element: oe,
  empty: J,
  exclude_internal_props: X,
  get_all_dirty_from_scope: Ue,
  get_slot_changes: He,
  group_outros: Ge,
  init: qe,
  insert_hydration: R,
  safe_not_equal: Ve,
  set_custom_element_data: se,
  space: Je,
  transition_in: O,
  transition_out: M,
  update_slot_base: Xe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ye,
  getContext: Ke,
  onDestroy: Qe,
  setContext: Ze
} = window.__gradio__svelte__internal;
function Y(e) {
  let t, o;
  const l = (
    /*#slots*/
    e[7].default
  ), n = De(
    l,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = oe("svelte-slot"), n && n.c(), this.h();
    },
    l(r) {
      t = re(r, "SVELTE-SLOT", {
        class: !0
      });
      var s = ne(t);
      n && n.l(s), s.forEach(S), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(r, s) {
      R(r, t, s), n && n.m(t, null), e[9](t), o = !0;
    },
    p(r, s) {
      n && n.p && (!o || s & /*$$scope*/
      64) && Xe(
        n,
        l,
        r,
        /*$$scope*/
        r[6],
        o ? He(
          l,
          /*$$scope*/
          r[6],
          s,
          null
        ) : Ue(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      o || (O(n, r), o = !0);
    },
    o(r) {
      M(n, r), o = !1;
    },
    d(r) {
      r && S(t), n && n.d(r), e[9](null);
    }
  };
}
function $e(e) {
  let t, o, l, n, r = (
    /*$$slots*/
    e[4].default && Y(e)
  );
  return {
    c() {
      t = oe("react-portal-target"), o = Je(), r && r.c(), l = J(), this.h();
    },
    l(s) {
      t = re(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), ne(t).forEach(S), o = Me(s), r && r.l(s), l = J(), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(s, i) {
      R(s, t, i), e[8](t), R(s, o, i), r && r.m(s, i), R(s, l, i), n = !0;
    },
    p(s, [i]) {
      /*$$slots*/
      s[4].default ? r ? (r.p(s, i), i & /*$$slots*/
      16 && O(r, 1)) : (r = Y(s), r.c(), O(r, 1), r.m(l.parentNode, l)) : r && (Ge(), M(r, 1, 1, () => {
        r = null;
      }), Ae());
    },
    i(s) {
      n || (O(r), n = !0);
    },
    o(s) {
      M(r), n = !1;
    },
    d(s) {
      s && (S(t), S(o), S(l)), e[8](null), r && r.d(s);
    }
  };
}
function K(e) {
  const {
    svelteInit: t,
    ...o
  } = e;
  return o;
}
function et(e, t, o) {
  let l, n, {
    $$slots: r = {},
    $$scope: s
  } = t;
  const i = ze(r);
  let {
    svelteInit: c
  } = t;
  const g = j(K(t)), b = j();
  V(e, b, (f) => o(0, l = f));
  const a = j();
  V(e, a, (f) => o(1, n = f));
  const p = [], u = Ke("$$ms-gr-react-wrapper"), {
    slotKey: x,
    slotIndex: C,
    subSlotIndex: d
  } = _e() || {}, m = c({
    parent: u,
    props: g,
    target: b,
    slot: a,
    slotKey: x,
    slotIndex: C,
    subSlotIndex: d,
    onDestroy(f) {
      p.push(f);
    }
  });
  Ze("$$ms-gr-react-wrapper", m), Ye(() => {
    g.set(K(t));
  }), Qe(() => {
    p.forEach((f) => f());
  });
  function E(f) {
    q[f ? "unshift" : "push"](() => {
      l = f, b.set(l);
    });
  }
  function T(f) {
    q[f ? "unshift" : "push"](() => {
      n = f, a.set(n);
    });
  }
  return e.$$set = (f) => {
    o(17, t = G(G({}, t), X(f))), "svelteInit" in f && o(5, c = f.svelteInit), "$$scope" in f && o(6, s = f.$$scope);
  }, t = X(t), [l, n, b, a, i, c, s, r, E, T];
}
class tt extends We {
  constructor(t) {
    super(), qe(this, t, et, $e, Ve, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ht
} = window.__gradio__svelte__internal, Q = window.ms_globals.rerender, F = window.ms_globals.tree;
function nt(e, t = {}) {
  function o(l) {
    const n = j(), r = new tt({
      ...l,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: n,
            reactComponent: e,
            props: s.props,
            slot: s.slot,
            target: s.target,
            slotIndex: s.slotIndex,
            subSlotIndex: s.subSlotIndex,
            ignore: t.ignore,
            slotKey: s.slotKey,
            nodes: []
          }, c = s.parent ?? F;
          return c.nodes = [...c.nodes, i], Q({
            createPortal: N,
            node: F
          }), s.onDestroy(() => {
            c.nodes = c.nodes.filter((g) => g.svelteInstance !== n), Q({
              createPortal: N,
              node: F
            });
          }), i;
        },
        ...l.props
      }
    });
    return n.set(r), r;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(o);
    });
  });
}
const rt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ot(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const l = e[o];
    return t[o] = st(o, l), t;
  }, {}) : {};
}
function st(e, t) {
  return typeof t == "number" && !rt.includes(e) ? t + "px" : t;
}
function z(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const n = w.Children.toArray(e._reactElement.props.children).map((r) => {
      if (w.isValidElement(r) && r.props.__slot__) {
        const {
          portals: s,
          clonedElement: i
        } = z(r.props.el);
        return w.cloneElement(r, {
          ...r.props,
          el: i,
          children: [...w.Children.toArray(r.props.children), ...s]
        });
      }
      return null;
    });
    return n.originalChildren = e._reactElement.props.children, t.push(N(w.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: n
    }), o)), {
      clonedElement: o,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((n) => {
    e.getEventListeners(n).forEach(({
      listener: s,
      type: i,
      useCapture: c
    }) => {
      o.addEventListener(i, s, c);
    });
  });
  const l = Array.from(e.childNodes);
  for (let n = 0; n < l.length; n++) {
    const r = l[n];
    if (r.nodeType === 1) {
      const {
        clonedElement: s,
        portals: i
      } = z(r);
      t.push(...i), o.appendChild(s);
    } else r.nodeType === 3 && o.appendChild(r.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function lt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const v = ae(({
  slot: e,
  clone: t,
  className: o,
  style: l,
  observeAttributes: n
}, r) => {
  const s = ce(), [i, c] = ue([]), {
    forceClone: g
  } = pe(), b = g ? !0 : t;
  return de(() => {
    var C;
    if (!s.current || !e)
      return;
    let a = e;
    function p() {
      let d = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (d = a.children[0], d.tagName.toLowerCase() === "react-portal-target" && d.children[0] && (d = d.children[0])), lt(r, d), o && d.classList.add(...o.split(" ")), l) {
        const m = ot(l);
        Object.keys(m).forEach((E) => {
          d.style[E] = m[E];
        });
      }
    }
    let u = null, x = null;
    if (b && window.MutationObserver) {
      let d = function() {
        var f, I, _;
        (f = s.current) != null && f.contains(a) && ((I = s.current) == null || I.removeChild(a));
        const {
          portals: E,
          clonedElement: T
        } = z(e);
        a = T, c(E), a.style.display = "contents", x && clearTimeout(x), x = setTimeout(() => {
          p();
        }, 50), (_ = s.current) == null || _.appendChild(a);
      };
      d();
      const m = Re(() => {
        d(), u == null || u.disconnect(), u == null || u.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      u = new window.MutationObserver(m), u.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      a.style.display = "contents", p(), (C = s.current) == null || C.appendChild(a);
    return () => {
      var d, m;
      a.style.display = "", (d = s.current) != null && d.contains(a) && ((m = s.current) == null || m.removeChild(a)), u == null || u.disconnect();
    };
  }, [e, b, o, l, r, n, g]), w.createElement("react-child", {
    ref: s,
    style: {
      display: "contents"
    }
  }, ...i);
});
function it(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function at(e, t = !1) {
  try {
    if (he(e))
      return e;
    if (t && !it(e))
      return;
    if (typeof e == "string") {
      let o = e.trim();
      return o.startsWith(";") && (o = o.slice(1)), o.endsWith(";") && (o = o.slice(0, -1)), new Function(`return (...args) => (${o})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function L(e, t) {
  return $(() => at(e, t), [e, t]);
}
function ct(e) {
  return Object.keys(e).reduce((t, o) => (e[o] !== void 0 && (t[o] = e[o]), t), {});
}
const ut = ({
  children: e,
  ...t
}) => /* @__PURE__ */ h.jsx(h.Fragment, {
  children: e(t)
});
function le(e) {
  return w.createElement(ut, {
    children: e
  });
}
function ie(e, t, o) {
  const l = e.filter(Boolean);
  if (l.length !== 0)
    return l.map((n, r) => {
      var g;
      if (typeof n != "object")
        return n;
      const s = {
        ...n.props,
        key: ((g = n.props) == null ? void 0 : g.key) ?? (o ? `${o}-${r}` : `${r}`)
      };
      let i = s;
      Object.keys(n.slots).forEach((b) => {
        if (!n.slots[b] || !(n.slots[b] instanceof Element) && !n.slots[b].el)
          return;
        const a = b.split(".");
        a.forEach((m, E) => {
          i[m] || (i[m] = {}), E !== a.length - 1 && (i = s[m]);
        });
        const p = n.slots[b];
        let u, x, C = !1, d = t == null ? void 0 : t.forceClone;
        p instanceof Element ? u = p : (u = p.el, x = p.callback, C = p.clone ?? C, d = p.forceClone ?? d), d = d ?? !!x, i[a[a.length - 1]] = u ? x ? (...m) => (x(a[a.length - 1], m), /* @__PURE__ */ h.jsx(A, {
          ...n.ctx,
          params: m,
          forceClone: d,
          children: /* @__PURE__ */ h.jsx(v, {
            slot: u,
            clone: C
          })
        })) : le((m) => /* @__PURE__ */ h.jsx(A, {
          ...n.ctx,
          forceClone: d,
          children: /* @__PURE__ */ h.jsx(v, {
            ...m,
            slot: u,
            clone: C
          })
        })) : i[a[a.length - 1]], i = s;
      });
      const c = "children";
      return n[c] && (s[c] = ie(n[c], t, `${r}`)), s;
    });
}
function Z(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? le((o) => /* @__PURE__ */ h.jsx(A, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ h.jsx(v, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...o
    })
  })) : /* @__PURE__ */ h.jsx(v, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function dt({
  key: e,
  slots: t,
  targets: o
}, l) {
  return t[e] ? (...n) => o ? o.map((r, s) => /* @__PURE__ */ h.jsx(w.Fragment, {
    children: Z(r, {
      clone: !0,
      params: n,
      forceClone: !0
    })
  }, s)) : /* @__PURE__ */ h.jsx(h.Fragment, {
    children: Z(t[e], {
      clone: !0,
      params: n,
      forceClone: !0
    })
  }) : void 0;
}
const {
  withItemsContextProvider: ft,
  useItems: mt,
  ItemHandler: pt
} = be("antd-tabs-items"), gt = nt(ft(["items", "default"], ({
  slots: e,
  indicator: t,
  items: o,
  onChange: l,
  more: n,
  children: r,
  renderTabBar: s,
  setSlotParams: i,
  ...c
}) => {
  const g = L(t == null ? void 0 : t.size), b = L(n == null ? void 0 : n.getPopupContainer), a = L(s), {
    items: p
  } = mt(), u = p.items.length > 0 ? p.items : p.default;
  return /* @__PURE__ */ h.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ h.jsx("div", {
      style: {
        display: "none"
      },
      children: r
    }), /* @__PURE__ */ h.jsx(ge, {
      ...c,
      indicator: g ? {
        ...t,
        size: g
      } : t,
      renderTabBar: e.renderTabBar ? dt({
        slots: e,
        key: "renderTabBar"
      }) : a,
      items: $(() => o || ie(u), [o, u]),
      more: ct({
        ...n || {},
        getPopupContainer: b || (n == null ? void 0 : n.getPopupContainer),
        icon: e["more.icon"] ? /* @__PURE__ */ h.jsx(v, {
          slot: e["more.icon"]
        }) : n == null ? void 0 : n.icon
      }),
      tabBarExtraContent: e.tabBarExtraContent ? /* @__PURE__ */ h.jsx(v, {
        slot: e.tabBarExtraContent
      }) : e["tabBarExtraContent.left"] || e["tabBarExtraContent.right"] ? {
        left: e["tabBarExtraContent.left"] ? /* @__PURE__ */ h.jsx(v, {
          slot: e["tabBarExtraContent.left"]
        }) : void 0,
        right: e["tabBarExtraContent.right"] ? /* @__PURE__ */ h.jsx(v, {
          slot: e["tabBarExtraContent.right"]
        }) : void 0
      } : c.tabBarExtraContent,
      addIcon: e.addIcon ? /* @__PURE__ */ h.jsx(v, {
        slot: e.addIcon
      }) : c.addIcon,
      removeIcon: e.removeIcon ? /* @__PURE__ */ h.jsx(v, {
        slot: e.removeIcon
      }) : c.removeIcon,
      onChange: (x) => {
        l == null || l(x);
      }
    })]
  });
}));
export {
  gt as Tabs,
  gt as default
};
