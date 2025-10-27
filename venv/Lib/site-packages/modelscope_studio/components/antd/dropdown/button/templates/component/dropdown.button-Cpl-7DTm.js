import { i as he, a as B, r as ge, w as T, g as pe, d as xe, b as P, c as we } from "./Index-C_Tq7-b3.js";
const v = window.ms_globals.React, F = window.ms_globals.React.useMemo, re = window.ms_globals.React.useState, oe = window.ms_globals.React.useEffect, me = window.ms_globals.React.forwardRef, _e = window.ms_globals.React.useRef, M = window.ms_globals.ReactDOM.createPortal, be = window.ms_globals.internalContext.useContextPropsContext, U = window.ms_globals.internalContext.ContextPropsProvider, Ce = window.ms_globals.antd.Dropdown, ve = window.ms_globals.createItemsContext.createItemsContext;
var Ie = /\s/;
function ye(t) {
  for (var e = t.length; e-- && Ie.test(t.charAt(e)); )
    ;
  return e;
}
var Ee = /^\s+/;
function Se(t) {
  return t && t.slice(0, ye(t) + 1).replace(Ee, "");
}
var V = NaN, Re = /^[-+]0x[0-9a-f]+$/i, ke = /^0b[01]+$/i, Pe = /^0o[0-7]+$/i, Te = parseInt;
function q(t) {
  if (typeof t == "number")
    return t;
  if (he(t))
    return V;
  if (B(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = B(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Se(t);
  var o = ke.test(t);
  return o || Pe.test(t) ? Te(t.slice(2), o ? 2 : 8) : Re.test(t) ? V : +t;
}
var A = function() {
  return ge.Date.now();
}, Oe = "Expected a function", je = Math.max, Fe = Math.min;
function Le(t, e, o) {
  var s, l, n, r, c, a, g = 0, p = !1, i = !1, h = !0;
  if (typeof t != "function")
    throw new TypeError(Oe);
  e = q(e) || 0, B(o) && (p = !!o.leading, i = "maxWait" in o, n = i ? je(q(o.maxWait) || 0, e) : n, h = "trailing" in o ? !!o.trailing : h);
  function d(_) {
    var I = s, k = l;
    return s = l = void 0, g = _, r = t.apply(k, I), r;
  }
  function w(_) {
    return g = _, c = setTimeout(f, e), p ? d(_) : r;
  }
  function b(_) {
    var I = _ - a, k = _ - g, G = e - I;
    return i ? Fe(G, n - k) : G;
  }
  function u(_) {
    var I = _ - a, k = _ - g;
    return a === void 0 || I >= e || I < 0 || i && k >= n;
  }
  function f() {
    var _ = A();
    if (u(_))
      return C(_);
    c = setTimeout(f, b(_));
  }
  function C(_) {
    return c = void 0, h && s ? d(_) : (s = l = void 0, r);
  }
  function R() {
    c !== void 0 && clearTimeout(c), g = 0, s = a = l = c = void 0;
  }
  function m() {
    return c === void 0 ? r : C(A());
  }
  function y() {
    var _ = A(), I = u(_);
    if (s = arguments, l = this, a = _, I) {
      if (c === void 0)
        return w(a);
      if (i)
        return clearTimeout(c), c = setTimeout(f, e), d(a);
    }
    return c === void 0 && (c = setTimeout(f, e)), r;
  }
  return y.cancel = R, y.flush = m, y;
}
var le = {
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
var Ae = v, Ne = Symbol.for("react.element"), We = Symbol.for("react.fragment"), De = Object.prototype.hasOwnProperty, Me = Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Be = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function se(t, e, o) {
  var s, l = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (r = e.ref);
  for (s in e) De.call(e, s) && !Be.hasOwnProperty(s) && (l[s] = e[s]);
  if (t && t.defaultProps) for (s in e = t.defaultProps, e) l[s] === void 0 && (l[s] = e[s]);
  return {
    $$typeof: Ne,
    type: t,
    key: n,
    ref: r,
    props: l,
    _owner: Me.current
  };
}
L.Fragment = We;
L.jsx = se;
L.jsxs = se;
le.exports = L;
var x = le.exports;
const {
  SvelteComponent: Ue,
  assign: J,
  binding_callbacks: X,
  check_outros: He,
  children: ce,
  claim_element: ie,
  claim_space: ze,
  component_subscribe: Y,
  compute_slots: Ge,
  create_slot: Ve,
  detach: E,
  element: ae,
  empty: Q,
  exclude_internal_props: Z,
  get_all_dirty_from_scope: qe,
  get_slot_changes: Je,
  group_outros: Xe,
  init: Ye,
  insert_hydration: O,
  safe_not_equal: Qe,
  set_custom_element_data: ue,
  space: Ze,
  transition_in: j,
  transition_out: H,
  update_slot_base: Ke
} = window.__gradio__svelte__internal, {
  beforeUpdate: $e,
  getContext: et,
  onDestroy: tt,
  setContext: nt
} = window.__gradio__svelte__internal;
function K(t) {
  let e, o;
  const s = (
    /*#slots*/
    t[7].default
  ), l = Ve(
    s,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = ae("svelte-slot"), l && l.c(), this.h();
    },
    l(n) {
      e = ie(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = ce(e);
      l && l.l(r), r.forEach(E), this.h();
    },
    h() {
      ue(e, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      O(n, e, r), l && l.m(e, null), t[9](e), o = !0;
    },
    p(n, r) {
      l && l.p && (!o || r & /*$$scope*/
      64) && Ke(
        l,
        s,
        n,
        /*$$scope*/
        n[6],
        o ? Je(
          s,
          /*$$scope*/
          n[6],
          r,
          null
        ) : qe(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (j(l, n), o = !0);
    },
    o(n) {
      H(l, n), o = !1;
    },
    d(n) {
      n && E(e), l && l.d(n), t[9](null);
    }
  };
}
function rt(t) {
  let e, o, s, l, n = (
    /*$$slots*/
    t[4].default && K(t)
  );
  return {
    c() {
      e = ae("react-portal-target"), o = Ze(), n && n.c(), s = Q(), this.h();
    },
    l(r) {
      e = ie(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ce(e).forEach(E), o = ze(r), n && n.l(r), s = Q(), this.h();
    },
    h() {
      ue(e, "class", "svelte-1rt0kpf");
    },
    m(r, c) {
      O(r, e, c), t[8](e), O(r, o, c), n && n.m(r, c), O(r, s, c), l = !0;
    },
    p(r, [c]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, c), c & /*$$slots*/
      16 && j(n, 1)) : (n = K(r), n.c(), j(n, 1), n.m(s.parentNode, s)) : n && (Xe(), H(n, 1, 1, () => {
        n = null;
      }), He());
    },
    i(r) {
      l || (j(n), l = !0);
    },
    o(r) {
      H(n), l = !1;
    },
    d(r) {
      r && (E(e), E(o), E(s)), t[8](null), n && n.d(r);
    }
  };
}
function $(t) {
  const {
    svelteInit: e,
    ...o
  } = t;
  return o;
}
function ot(t, e, o) {
  let s, l, {
    $$slots: n = {},
    $$scope: r
  } = e;
  const c = Ge(n);
  let {
    svelteInit: a
  } = e;
  const g = T($(e)), p = T();
  Y(t, p, (m) => o(0, s = m));
  const i = T();
  Y(t, i, (m) => o(1, l = m));
  const h = [], d = et("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: b,
    subSlotIndex: u
  } = pe() || {}, f = a({
    parent: d,
    props: g,
    target: p,
    slot: i,
    slotKey: w,
    slotIndex: b,
    subSlotIndex: u,
    onDestroy(m) {
      h.push(m);
    }
  });
  nt("$$ms-gr-react-wrapper", f), $e(() => {
    g.set($(e));
  }), tt(() => {
    h.forEach((m) => m());
  });
  function C(m) {
    X[m ? "unshift" : "push"](() => {
      s = m, p.set(s);
    });
  }
  function R(m) {
    X[m ? "unshift" : "push"](() => {
      l = m, i.set(l);
    });
  }
  return t.$$set = (m) => {
    o(17, e = J(J({}, e), Z(m))), "svelteInit" in m && o(5, a = m.svelteInit), "$$scope" in m && o(6, r = m.$$scope);
  }, e = Z(e), [s, l, p, i, c, a, r, n, C, R];
}
class lt extends Ue {
  constructor(e) {
    super(), Ye(this, e, ot, rt, Qe, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: wt
} = window.__gradio__svelte__internal, ee = window.ms_globals.rerender, N = window.ms_globals.tree;
function st(t, e = {}) {
  function o(s) {
    const l = T(), n = new lt({
      ...s,
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
          }, a = r.parent ?? N;
          return a.nodes = [...a.nodes, c], ee({
            createPortal: M,
            node: N
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((g) => g.svelteInstance !== l), ee({
              createPortal: M,
              node: N
            });
          }), c;
        },
        ...s.props
      }
    });
    return l.set(n), n;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(o);
    });
  });
}
function ct(t) {
  const [e, o] = re(() => P(t));
  return oe(() => {
    let s = !0;
    return t.subscribe((n) => {
      s && (s = !1, n === e) || o(n);
    });
  }, [t]), e;
}
function it(t) {
  const e = F(() => xe(t, (o) => o), [t]);
  return ct(e);
}
const at = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ut(t) {
  return t ? Object.keys(t).reduce((e, o) => {
    const s = t[o];
    return e[o] = dt(o, s), e;
  }, {}) : {};
}
function dt(t, e) {
  return typeof e == "number" && !at.includes(t) ? e + "px" : e;
}
function z(t) {
  const e = [], o = t.cloneNode(!1);
  if (t._reactElement) {
    const l = v.Children.toArray(t._reactElement.props.children).map((n) => {
      if (v.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: c
        } = z(n.props.el);
        return v.cloneElement(n, {
          ...n.props,
          el: c,
          children: [...v.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return l.originalChildren = t._reactElement.props.children, e.push(M(v.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: l
    }), o)), {
      clonedElement: o,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((l) => {
    t.getEventListeners(l).forEach(({
      listener: r,
      type: c,
      useCapture: a
    }) => {
      o.addEventListener(c, r, a);
    });
  });
  const s = Array.from(t.childNodes);
  for (let l = 0; l < s.length; l++) {
    const n = s[l];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: c
      } = z(n);
      e.push(...c), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: e
  };
}
function ft(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const S = me(({
  slot: t,
  clone: e,
  className: o,
  style: s,
  observeAttributes: l
}, n) => {
  const r = _e(), [c, a] = re([]), {
    forceClone: g
  } = be(), p = g ? !0 : e;
  return oe(() => {
    var b;
    if (!r.current || !t)
      return;
    let i = t;
    function h() {
      let u = i;
      if (i.tagName.toLowerCase() === "svelte-slot" && i.children.length === 1 && i.children[0] && (u = i.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), ft(n, u), o && u.classList.add(...o.split(" ")), s) {
        const f = ut(s);
        Object.keys(f).forEach((C) => {
          u.style[C] = f[C];
        });
      }
    }
    let d = null, w = null;
    if (p && window.MutationObserver) {
      let u = function() {
        var m, y, _;
        (m = r.current) != null && m.contains(i) && ((y = r.current) == null || y.removeChild(i));
        const {
          portals: C,
          clonedElement: R
        } = z(t);
        i = R, a(C), i.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          h();
        }, 50), (_ = r.current) == null || _.appendChild(i);
      };
      u();
      const f = Le(() => {
        u(), d == null || d.disconnect(), d == null || d.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      d = new window.MutationObserver(f), d.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      i.style.display = "contents", h(), (b = r.current) == null || b.appendChild(i);
    return () => {
      var u, f;
      i.style.display = "", (u = r.current) != null && u.contains(i) && ((f = r.current) == null || f.removeChild(i)), d == null || d.disconnect();
    };
  }, [t, p, o, s, n, l, g]), v.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...c);
});
function mt(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function _t(t, e = !1) {
  try {
    if (we(t))
      return t;
    if (e && !mt(t))
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
function W(t, e) {
  return F(() => _t(t, e), [t, e]);
}
function te(t, e) {
  const o = F(() => v.Children.toArray(t.originalChildren || t).filter((n) => n.props.node && !n.props.node.ignore && (!e && !n.props.nodeSlotKey || e && e === n.props.nodeSlotKey)).sort((n, r) => {
    if (n.props.node.slotIndex && r.props.node.slotIndex) {
      const c = P(n.props.node.slotIndex) || 0, a = P(r.props.node.slotIndex) || 0;
      return c - a === 0 && n.props.node.subSlotIndex && r.props.node.subSlotIndex ? (P(n.props.node.subSlotIndex) || 0) - (P(r.props.node.subSlotIndex) || 0) : c - a;
    }
    return 0;
  }).map((n) => n.props.node.target), [t, e]);
  return it(o);
}
const ht = ({
  children: t,
  ...e
}) => /* @__PURE__ */ x.jsx(x.Fragment, {
  children: t(e)
});
function de(t) {
  return v.createElement(ht, {
    children: t
  });
}
function fe(t, e, o) {
  const s = t.filter(Boolean);
  if (s.length !== 0)
    return s.map((l, n) => {
      var g;
      if (typeof l != "object")
        return e != null && e.fallback ? e.fallback(l) : l;
      const r = {
        ...l.props,
        key: ((g = l.props) == null ? void 0 : g.key) ?? (o ? `${o}-${n}` : `${n}`)
      };
      let c = r;
      Object.keys(l.slots).forEach((p) => {
        if (!l.slots[p] || !(l.slots[p] instanceof Element) && !l.slots[p].el)
          return;
        const i = p.split(".");
        i.forEach((f, C) => {
          c[f] || (c[f] = {}), C !== i.length - 1 && (c = r[f]);
        });
        const h = l.slots[p];
        let d, w, b = (e == null ? void 0 : e.clone) ?? !1, u = e == null ? void 0 : e.forceClone;
        h instanceof Element ? d = h : (d = h.el, w = h.callback, b = h.clone ?? b, u = h.forceClone ?? u), u = u ?? !!w, c[i[i.length - 1]] = d ? w ? (...f) => (w(i[i.length - 1], f), /* @__PURE__ */ x.jsx(U, {
          ...l.ctx,
          params: f,
          forceClone: u,
          children: /* @__PURE__ */ x.jsx(S, {
            slot: d,
            clone: b
          })
        })) : de((f) => /* @__PURE__ */ x.jsx(U, {
          ...l.ctx,
          forceClone: u,
          children: /* @__PURE__ */ x.jsx(S, {
            ...f,
            slot: d,
            clone: b
          })
        })) : c[i[i.length - 1]], c = r;
      });
      const a = (e == null ? void 0 : e.children) || "children";
      return l[a] ? r[a] = fe(l[a], e, `${n}`) : e != null && e.children && (r[a] = void 0, Reflect.deleteProperty(r, a)), r;
    });
}
function ne(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? de((o) => /* @__PURE__ */ x.jsx(U, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ x.jsx(S, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...o
    })
  })) : /* @__PURE__ */ x.jsx(S, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function D({
  key: t,
  slots: e,
  targets: o
}, s) {
  return e[t] ? (...l) => o ? o.map((n, r) => /* @__PURE__ */ x.jsx(v.Fragment, {
    children: ne(n, {
      clone: !0,
      params: l,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }, r)) : /* @__PURE__ */ x.jsx(x.Fragment, {
    children: ne(e[t], {
      clone: !0,
      params: l,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }) : void 0;
}
const {
  useItems: gt,
  withItemsContextProvider: pt,
  ItemHandler: bt
} = ve("antd-menu-items"), Ct = st(pt(["menu.items"], ({
  getPopupContainer: t,
  slots: e,
  children: o,
  dropdownRender: s,
  buttonsRender: l,
  setSlotParams: n,
  value: r,
  ...c
}) => {
  var w, b, u;
  const a = W(t), g = W(s), p = W(l), i = te(o, "buttonsRender"), h = te(o), {
    items: {
      "menu.items": d
    }
  } = gt();
  return /* @__PURE__ */ x.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ x.jsx("div", {
      style: {
        display: "none"
      },
      children: h.length > 0 ? null : o
    }), /* @__PURE__ */ x.jsx(Ce.Button, {
      ...c,
      buttonsRender: i.length ? D({
        key: "buttonsRender",
        slots: e,
        targets: i
      }) : p,
      menu: {
        ...c.menu,
        items: F(() => {
          var f;
          return ((f = c.menu) == null ? void 0 : f.items) || fe(d, {
            clone: !0
          }) || [];
        }, [d, (w = c.menu) == null ? void 0 : w.items]),
        expandIcon: e["menu.expandIcon"] ? D({
          slots: e,
          key: "menu.expandIcon"
        }, {}) : (b = c.menu) == null ? void 0 : b.expandIcon,
        overflowedIndicator: e["menu.overflowedIndicator"] ? /* @__PURE__ */ x.jsx(S, {
          slot: e["menu.overflowedIndicator"]
        }) : (u = c.menu) == null ? void 0 : u.overflowedIndicator
      },
      getPopupContainer: a,
      dropdownRender: e.dropdownRender ? D({
        slots: e,
        key: "dropdownRender"
      }) : g,
      icon: e.icon ? /* @__PURE__ */ x.jsx(S, {
        slot: e.icon
      }) : c.icon,
      children: h.length > 0 ? o : r
    })]
  });
}));
export {
  Ct as DropdownButton,
  Ct as default
};
