import { i as me, a as W, r as _e, w as P, g as he, b as ge } from "./Index-BW-_-ti1.js";
const v = window.ms_globals.React, ae = window.ms_globals.React.forwardRef, ue = window.ms_globals.React.useRef, de = window.ms_globals.React.useState, fe = window.ms_globals.React.useEffect, ee = window.ms_globals.React.useMemo, N = window.ms_globals.ReactDOM.createPortal, we = window.ms_globals.internalContext.useContextPropsContext, A = window.ms_globals.internalContext.ContextPropsProvider, pe = window.ms_globals.antd.Dropdown, xe = window.ms_globals.createItemsContext.createItemsContext;
var be = /\s/;
function Ce(t) {
  for (var e = t.length; e-- && be.test(t.charAt(e)); )
    ;
  return e;
}
var ve = /^\s+/;
function ye(t) {
  return t && t.slice(0, Ce(t) + 1).replace(ve, "");
}
var B = NaN, Ee = /^[-+]0x[0-9a-f]+$/i, Ie = /^0b[01]+$/i, Se = /^0o[0-7]+$/i, Re = parseInt;
function H(t) {
  if (typeof t == "number")
    return t;
  if (me(t))
    return B;
  if (W(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = W(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = ye(t);
  var o = Ie.test(t);
  return o || Se.test(t) ? Re(t.slice(2), o ? 2 : 8) : Ee.test(t) ? B : +t;
}
var L = function() {
  return _e.Date.now();
}, ke = "Expected a function", Pe = Math.max, Oe = Math.min;
function Te(t, e, o) {
  var s, l, r, n, c, a, h = 0, g = !1, i = !1, w = !0;
  if (typeof t != "function")
    throw new TypeError(ke);
  e = H(e) || 0, W(o) && (g = !!o.leading, i = "maxWait" in o, r = i ? Pe(H(o.maxWait) || 0, e) : r, w = "trailing" in o ? !!o.trailing : w);
  function u(_) {
    var y = s, R = l;
    return s = l = void 0, h = _, n = t.apply(R, y), n;
  }
  function x(_) {
    return h = _, c = setTimeout(m, e), g ? u(_) : n;
  }
  function b(_) {
    var y = _ - a, R = _ - h, U = e - y;
    return i ? Oe(U, r - R) : U;
  }
  function d(_) {
    var y = _ - a, R = _ - h;
    return a === void 0 || y >= e || y < 0 || i && R >= r;
  }
  function m() {
    var _ = L();
    if (d(_))
      return C(_);
    c = setTimeout(m, b(_));
  }
  function C(_) {
    return c = void 0, w && s ? u(_) : (s = l = void 0, n);
  }
  function S() {
    c !== void 0 && clearTimeout(c), h = 0, s = a = l = c = void 0;
  }
  function f() {
    return c === void 0 ? n : C(L());
  }
  function E() {
    var _ = L(), y = d(_);
    if (s = arguments, l = this, a = _, y) {
      if (c === void 0)
        return x(a);
      if (i)
        return clearTimeout(c), c = setTimeout(m, e), u(a);
    }
    return c === void 0 && (c = setTimeout(m, e)), n;
  }
  return E.cancel = S, E.flush = f, E;
}
var te = {
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
var je = v, Le = Symbol.for("react.element"), Fe = Symbol.for("react.fragment"), Ne = Object.prototype.hasOwnProperty, We = je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ae = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ne(t, e, o) {
  var s, l = {}, r = null, n = null;
  o !== void 0 && (r = "" + o), e.key !== void 0 && (r = "" + e.key), e.ref !== void 0 && (n = e.ref);
  for (s in e) Ne.call(e, s) && !Ae.hasOwnProperty(s) && (l[s] = e[s]);
  if (t && t.defaultProps) for (s in e = t.defaultProps, e) l[s] === void 0 && (l[s] = e[s]);
  return {
    $$typeof: Le,
    type: t,
    key: r,
    ref: n,
    props: l,
    _owner: We.current
  };
}
j.Fragment = Fe;
j.jsx = ne;
j.jsxs = ne;
te.exports = j;
var p = te.exports;
const {
  SvelteComponent: De,
  assign: z,
  binding_callbacks: G,
  check_outros: Me,
  children: re,
  claim_element: le,
  claim_space: Ue,
  component_subscribe: q,
  compute_slots: Be,
  create_slot: He,
  detach: I,
  element: oe,
  empty: V,
  exclude_internal_props: J,
  get_all_dirty_from_scope: ze,
  get_slot_changes: Ge,
  group_outros: qe,
  init: Ve,
  insert_hydration: O,
  safe_not_equal: Je,
  set_custom_element_data: se,
  space: Xe,
  transition_in: T,
  transition_out: D,
  update_slot_base: Ye
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ke,
  getContext: Qe,
  onDestroy: Ze,
  setContext: $e
} = window.__gradio__svelte__internal;
function X(t) {
  let e, o;
  const s = (
    /*#slots*/
    t[7].default
  ), l = He(
    s,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = oe("svelte-slot"), l && l.c(), this.h();
    },
    l(r) {
      e = le(r, "SVELTE-SLOT", {
        class: !0
      });
      var n = re(e);
      l && l.l(n), n.forEach(I), this.h();
    },
    h() {
      se(e, "class", "svelte-1rt0kpf");
    },
    m(r, n) {
      O(r, e, n), l && l.m(e, null), t[9](e), o = !0;
    },
    p(r, n) {
      l && l.p && (!o || n & /*$$scope*/
      64) && Ye(
        l,
        s,
        r,
        /*$$scope*/
        r[6],
        o ? Ge(
          s,
          /*$$scope*/
          r[6],
          n,
          null
        ) : ze(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      o || (T(l, r), o = !0);
    },
    o(r) {
      D(l, r), o = !1;
    },
    d(r) {
      r && I(e), l && l.d(r), t[9](null);
    }
  };
}
function et(t) {
  let e, o, s, l, r = (
    /*$$slots*/
    t[4].default && X(t)
  );
  return {
    c() {
      e = oe("react-portal-target"), o = Xe(), r && r.c(), s = V(), this.h();
    },
    l(n) {
      e = le(n, "REACT-PORTAL-TARGET", {
        class: !0
      }), re(e).forEach(I), o = Ue(n), r && r.l(n), s = V(), this.h();
    },
    h() {
      se(e, "class", "svelte-1rt0kpf");
    },
    m(n, c) {
      O(n, e, c), t[8](e), O(n, o, c), r && r.m(n, c), O(n, s, c), l = !0;
    },
    p(n, [c]) {
      /*$$slots*/
      n[4].default ? r ? (r.p(n, c), c & /*$$slots*/
      16 && T(r, 1)) : (r = X(n), r.c(), T(r, 1), r.m(s.parentNode, s)) : r && (qe(), D(r, 1, 1, () => {
        r = null;
      }), Me());
    },
    i(n) {
      l || (T(r), l = !0);
    },
    o(n) {
      D(r), l = !1;
    },
    d(n) {
      n && (I(e), I(o), I(s)), t[8](null), r && r.d(n);
    }
  };
}
function Y(t) {
  const {
    svelteInit: e,
    ...o
  } = t;
  return o;
}
function tt(t, e, o) {
  let s, l, {
    $$slots: r = {},
    $$scope: n
  } = e;
  const c = Be(r);
  let {
    svelteInit: a
  } = e;
  const h = P(Y(e)), g = P();
  q(t, g, (f) => o(0, s = f));
  const i = P();
  q(t, i, (f) => o(1, l = f));
  const w = [], u = Qe("$$ms-gr-react-wrapper"), {
    slotKey: x,
    slotIndex: b,
    subSlotIndex: d
  } = he() || {}, m = a({
    parent: u,
    props: h,
    target: g,
    slot: i,
    slotKey: x,
    slotIndex: b,
    subSlotIndex: d,
    onDestroy(f) {
      w.push(f);
    }
  });
  $e("$$ms-gr-react-wrapper", m), Ke(() => {
    h.set(Y(e));
  }), Ze(() => {
    w.forEach((f) => f());
  });
  function C(f) {
    G[f ? "unshift" : "push"](() => {
      s = f, g.set(s);
    });
  }
  function S(f) {
    G[f ? "unshift" : "push"](() => {
      l = f, i.set(l);
    });
  }
  return t.$$set = (f) => {
    o(17, e = z(z({}, e), J(f))), "svelteInit" in f && o(5, a = f.svelteInit), "$$scope" in f && o(6, n = f.$$scope);
  }, e = J(e), [s, l, g, i, c, a, n, r, C, S];
}
class nt extends De {
  constructor(e) {
    super(), Ve(this, e, tt, et, Je, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _t
} = window.__gradio__svelte__internal, K = window.ms_globals.rerender, F = window.ms_globals.tree;
function rt(t, e = {}) {
  function o(s) {
    const l = P(), r = new nt({
      ...s,
      props: {
        svelteInit(n) {
          window.ms_globals.autokey += 1;
          const c = {
            key: window.ms_globals.autokey,
            svelteInstance: l,
            reactComponent: t,
            props: n.props,
            slot: n.slot,
            target: n.target,
            slotIndex: n.slotIndex,
            subSlotIndex: n.subSlotIndex,
            ignore: e.ignore,
            slotKey: n.slotKey,
            nodes: []
          }, a = n.parent ?? F;
          return a.nodes = [...a.nodes, c], K({
            createPortal: N,
            node: F
          }), n.onDestroy(() => {
            a.nodes = a.nodes.filter((h) => h.svelteInstance !== l), K({
              createPortal: N,
              node: F
            });
          }), c;
        },
        ...s.props
      }
    });
    return l.set(r), r;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(o);
    });
  });
}
const lt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ot(t) {
  return t ? Object.keys(t).reduce((e, o) => {
    const s = t[o];
    return e[o] = st(o, s), e;
  }, {}) : {};
}
function st(t, e) {
  return typeof e == "number" && !lt.includes(t) ? e + "px" : e;
}
function M(t) {
  const e = [], o = t.cloneNode(!1);
  if (t._reactElement) {
    const l = v.Children.toArray(t._reactElement.props.children).map((r) => {
      if (v.isValidElement(r) && r.props.__slot__) {
        const {
          portals: n,
          clonedElement: c
        } = M(r.props.el);
        return v.cloneElement(r, {
          ...r.props,
          el: c,
          children: [...v.Children.toArray(r.props.children), ...n]
        });
      }
      return null;
    });
    return l.originalChildren = t._reactElement.props.children, e.push(N(v.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: l
    }), o)), {
      clonedElement: o,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((l) => {
    t.getEventListeners(l).forEach(({
      listener: n,
      type: c,
      useCapture: a
    }) => {
      o.addEventListener(c, n, a);
    });
  });
  const s = Array.from(t.childNodes);
  for (let l = 0; l < s.length; l++) {
    const r = s[l];
    if (r.nodeType === 1) {
      const {
        clonedElement: n,
        portals: c
      } = M(r);
      e.push(...c), o.appendChild(n);
    } else r.nodeType === 3 && o.appendChild(r.cloneNode());
  }
  return {
    clonedElement: o,
    portals: e
  };
}
function ct(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const k = ae(({
  slot: t,
  clone: e,
  className: o,
  style: s,
  observeAttributes: l
}, r) => {
  const n = ue(), [c, a] = de([]), {
    forceClone: h
  } = we(), g = h ? !0 : e;
  return fe(() => {
    var b;
    if (!n.current || !t)
      return;
    let i = t;
    function w() {
      let d = i;
      if (i.tagName.toLowerCase() === "svelte-slot" && i.children.length === 1 && i.children[0] && (d = i.children[0], d.tagName.toLowerCase() === "react-portal-target" && d.children[0] && (d = d.children[0])), ct(r, d), o && d.classList.add(...o.split(" ")), s) {
        const m = ot(s);
        Object.keys(m).forEach((C) => {
          d.style[C] = m[C];
        });
      }
    }
    let u = null, x = null;
    if (g && window.MutationObserver) {
      let d = function() {
        var f, E, _;
        (f = n.current) != null && f.contains(i) && ((E = n.current) == null || E.removeChild(i));
        const {
          portals: C,
          clonedElement: S
        } = M(t);
        i = S, a(C), i.style.display = "contents", x && clearTimeout(x), x = setTimeout(() => {
          w();
        }, 50), (_ = n.current) == null || _.appendChild(i);
      };
      d();
      const m = Te(() => {
        d(), u == null || u.disconnect(), u == null || u.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      u = new window.MutationObserver(m), u.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      i.style.display = "contents", w(), (b = n.current) == null || b.appendChild(i);
    return () => {
      var d, m;
      i.style.display = "", (d = n.current) != null && d.contains(i) && ((m = n.current) == null || m.removeChild(i)), u == null || u.disconnect();
    };
  }, [t, g, o, s, r, l, h]), v.createElement("react-child", {
    ref: n,
    style: {
      display: "contents"
    }
  }, ...c);
});
function it(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function at(t, e = !1) {
  try {
    if (ge(t))
      return t;
    if (e && !it(t))
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
function Q(t, e) {
  return ee(() => at(t, e), [t, e]);
}
const ut = ({
  children: t,
  ...e
}) => /* @__PURE__ */ p.jsx(p.Fragment, {
  children: t(e)
});
function ce(t) {
  return v.createElement(ut, {
    children: t
  });
}
function ie(t, e, o) {
  const s = t.filter(Boolean);
  if (s.length !== 0)
    return s.map((l, r) => {
      var h;
      if (typeof l != "object")
        return e != null && e.fallback ? e.fallback(l) : l;
      const n = {
        ...l.props,
        key: ((h = l.props) == null ? void 0 : h.key) ?? (o ? `${o}-${r}` : `${r}`)
      };
      let c = n;
      Object.keys(l.slots).forEach((g) => {
        if (!l.slots[g] || !(l.slots[g] instanceof Element) && !l.slots[g].el)
          return;
        const i = g.split(".");
        i.forEach((m, C) => {
          c[m] || (c[m] = {}), C !== i.length - 1 && (c = n[m]);
        });
        const w = l.slots[g];
        let u, x, b = (e == null ? void 0 : e.clone) ?? !1, d = e == null ? void 0 : e.forceClone;
        w instanceof Element ? u = w : (u = w.el, x = w.callback, b = w.clone ?? b, d = w.forceClone ?? d), d = d ?? !!x, c[i[i.length - 1]] = u ? x ? (...m) => (x(i[i.length - 1], m), /* @__PURE__ */ p.jsx(A, {
          ...l.ctx,
          params: m,
          forceClone: d,
          children: /* @__PURE__ */ p.jsx(k, {
            slot: u,
            clone: b
          })
        })) : ce((m) => /* @__PURE__ */ p.jsx(A, {
          ...l.ctx,
          forceClone: d,
          children: /* @__PURE__ */ p.jsx(k, {
            ...m,
            slot: u,
            clone: b
          })
        })) : c[i[i.length - 1]], c = n;
      });
      const a = (e == null ? void 0 : e.children) || "children";
      return l[a] ? n[a] = ie(l[a], e, `${r}`) : e != null && e.children && (n[a] = void 0, Reflect.deleteProperty(n, a)), n;
    });
}
function Z(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? ce((o) => /* @__PURE__ */ p.jsx(A, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ p.jsx(k, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...o
    })
  })) : /* @__PURE__ */ p.jsx(k, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function $({
  key: t,
  slots: e,
  targets: o
}, s) {
  return e[t] ? (...l) => o ? o.map((r, n) => /* @__PURE__ */ p.jsx(v.Fragment, {
    children: Z(r, {
      clone: !0,
      params: l,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }, n)) : /* @__PURE__ */ p.jsx(p.Fragment, {
    children: Z(e[t], {
      clone: !0,
      params: l,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }) : void 0;
}
const {
  useItems: dt,
  withItemsContextProvider: ft,
  ItemHandler: ht
} = xe("antd-menu-items"), gt = rt(ft(["menu.items"], ({
  getPopupContainer: t,
  innerStyle: e,
  children: o,
  slots: s,
  dropdownRender: l,
  setSlotParams: r,
  ...n
}) => {
  var g, i, w;
  const c = Q(t), a = Q(l), {
    items: {
      "menu.items": h
    }
  } = dt();
  return /* @__PURE__ */ p.jsx(p.Fragment, {
    children: /* @__PURE__ */ p.jsx(pe, {
      ...n,
      menu: {
        ...n.menu,
        items: ee(() => {
          var u;
          return ((u = n.menu) == null ? void 0 : u.items) || ie(h, {
            clone: !0
          }) || [];
        }, [h, (g = n.menu) == null ? void 0 : g.items]),
        expandIcon: s["menu.expandIcon"] ? $({
          slots: s,
          key: "menu.expandIcon"
        }, {}) : (i = n.menu) == null ? void 0 : i.expandIcon,
        overflowedIndicator: s["menu.overflowedIndicator"] ? /* @__PURE__ */ p.jsx(k, {
          slot: s["menu.overflowedIndicator"]
        }) : (w = n.menu) == null ? void 0 : w.overflowedIndicator
      },
      getPopupContainer: c,
      dropdownRender: s.dropdownRender ? $({
        slots: s,
        key: "dropdownRender"
      }, {}) : a,
      children: /* @__PURE__ */ p.jsx("div", {
        className: "ms-gr-antd-dropdown-content",
        style: {
          display: "inline-block",
          ...e
        },
        children: o
      })
    })
  });
}));
export {
  gt as Dropdown,
  gt as default
};
