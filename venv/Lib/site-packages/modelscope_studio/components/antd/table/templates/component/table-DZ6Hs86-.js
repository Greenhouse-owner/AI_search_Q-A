import { i as ke, a as X, r as je, w as M, g as Ne, b as Le } from "./Index-eDD2s_cI.js";
const v = window.ms_globals.React, Pe = window.ms_globals.React.forwardRef, Oe = window.ms_globals.React.useRef, Re = window.ms_globals.React.useState, Te = window.ms_globals.React.useEffect, A = window.ms_globals.React.useMemo, Q = window.ms_globals.ReactDOM.createPortal, Fe = window.ms_globals.internalContext.useContextPropsContext, z = window.ms_globals.internalContext.ContextPropsProvider, j = window.ms_globals.antd.Table, D = window.ms_globals.createItemsContext.createItemsContext;
var Ae = /\s/;
function Me(t) {
  for (var e = t.length; e-- && Ae.test(t.charAt(e)); )
    ;
  return e;
}
var Ue = /^\s+/;
function He(t) {
  return t && t.slice(0, Me(t) + 1).replace(Ue, "");
}
var Y = NaN, We = /^[-+]0x[0-9a-f]+$/i, De = /^0b[01]+$/i, Be = /^0o[0-7]+$/i, Ge = parseInt;
function Z(t) {
  if (typeof t == "number")
    return t;
  if (ke(t))
    return Y;
  if (X(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = X(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = He(t);
  var o = De.test(t);
  return o || Be.test(t) ? Ge(t.slice(2), o ? 2 : 8) : We.test(t) ? Y : +t;
}
var G = function() {
  return je.Date.now();
}, Je = "Expected a function", Qe = Math.max, Xe = Math.min;
function ze(t, e, o) {
  var l, i, n, r, s, a, g = 0, _ = !1, c = !1, C = !0;
  if (typeof t != "function")
    throw new TypeError(Je);
  e = Z(e) || 0, X(o) && (_ = !!o.leading, c = "maxWait" in o, n = c ? Qe(Z(o.maxWait) || 0, e) : n, C = "trailing" in o ? !!o.trailing : C);
  function u(h) {
    var E = l, R = i;
    return l = i = void 0, g = h, r = t.apply(R, E), r;
  }
  function w(h) {
    return g = h, s = setTimeout(m, e), _ ? u(h) : r;
  }
  function x(h) {
    var E = h - a, R = h - g, T = e - E;
    return c ? Xe(T, n - R) : T;
  }
  function d(h) {
    var E = h - a, R = h - g;
    return a === void 0 || E >= e || E < 0 || c && R >= n;
  }
  function m() {
    var h = G();
    if (d(h))
      return b(h);
    s = setTimeout(m, x(h));
  }
  function b(h) {
    return s = void 0, C && l ? u(h) : (l = i = void 0, r);
  }
  function S() {
    s !== void 0 && clearTimeout(s), g = 0, l = a = i = s = void 0;
  }
  function f() {
    return s === void 0 ? r : b(G());
  }
  function P() {
    var h = G(), E = d(h);
    if (l = arguments, i = this, a = h, E) {
      if (s === void 0)
        return w(a);
      if (c)
        return clearTimeout(s), s = setTimeout(m, e), u(a);
    }
    return s === void 0 && (s = setTimeout(m, e)), r;
  }
  return P.cancel = S, P.flush = f, P;
}
var ce = {
  exports: {}
}, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe = v, Ve = Symbol.for("react.element"), Ke = Symbol.for("react.fragment"), Ye = Object.prototype.hasOwnProperty, Ze = qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $e = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ae(t, e, o) {
  var l, i = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (r = e.ref);
  for (l in e) Ye.call(e, l) && !$e.hasOwnProperty(l) && (i[l] = e[l]);
  if (t && t.defaultProps) for (l in e = t.defaultProps, e) i[l] === void 0 && (i[l] = e[l]);
  return {
    $$typeof: Ve,
    type: t,
    key: n,
    ref: r,
    props: i,
    _owner: Ze.current
  };
}
B.Fragment = Ke;
B.jsx = ae;
B.jsxs = ae;
ce.exports = B;
var p = ce.exports;
const {
  SvelteComponent: et,
  assign: $,
  binding_callbacks: ee,
  check_outros: tt,
  children: ue,
  claim_element: de,
  claim_space: nt,
  component_subscribe: te,
  compute_slots: rt,
  create_slot: ot,
  detach: k,
  element: fe,
  empty: ne,
  exclude_internal_props: re,
  get_all_dirty_from_scope: it,
  get_slot_changes: lt,
  group_outros: st,
  init: ct,
  insert_hydration: U,
  safe_not_equal: at,
  set_custom_element_data: me,
  space: ut,
  transition_in: H,
  transition_out: q,
  update_slot_base: dt
} = window.__gradio__svelte__internal, {
  beforeUpdate: ft,
  getContext: mt,
  onDestroy: ht,
  setContext: pt
} = window.__gradio__svelte__internal;
function oe(t) {
  let e, o;
  const l = (
    /*#slots*/
    t[7].default
  ), i = ot(
    l,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = fe("svelte-slot"), i && i.c(), this.h();
    },
    l(n) {
      e = de(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = ue(e);
      i && i.l(r), r.forEach(k), this.h();
    },
    h() {
      me(e, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      U(n, e, r), i && i.m(e, null), t[9](e), o = !0;
    },
    p(n, r) {
      i && i.p && (!o || r & /*$$scope*/
      64) && dt(
        i,
        l,
        n,
        /*$$scope*/
        n[6],
        o ? lt(
          l,
          /*$$scope*/
          n[6],
          r,
          null
        ) : it(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (H(i, n), o = !0);
    },
    o(n) {
      q(i, n), o = !1;
    },
    d(n) {
      n && k(e), i && i.d(n), t[9](null);
    }
  };
}
function gt(t) {
  let e, o, l, i, n = (
    /*$$slots*/
    t[4].default && oe(t)
  );
  return {
    c() {
      e = fe("react-portal-target"), o = ut(), n && n.c(), l = ne(), this.h();
    },
    l(r) {
      e = de(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ue(e).forEach(k), o = nt(r), n && n.l(r), l = ne(), this.h();
    },
    h() {
      me(e, "class", "svelte-1rt0kpf");
    },
    m(r, s) {
      U(r, e, s), t[8](e), U(r, o, s), n && n.m(r, s), U(r, l, s), i = !0;
    },
    p(r, [s]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, s), s & /*$$slots*/
      16 && H(n, 1)) : (n = oe(r), n.c(), H(n, 1), n.m(l.parentNode, l)) : n && (st(), q(n, 1, 1, () => {
        n = null;
      }), tt());
    },
    i(r) {
      i || (H(n), i = !0);
    },
    o(r) {
      q(n), i = !1;
    },
    d(r) {
      r && (k(e), k(o), k(l)), t[8](null), n && n.d(r);
    }
  };
}
function ie(t) {
  const {
    svelteInit: e,
    ...o
  } = t;
  return o;
}
function _t(t, e, o) {
  let l, i, {
    $$slots: n = {},
    $$scope: r
  } = e;
  const s = rt(n);
  let {
    svelteInit: a
  } = e;
  const g = M(ie(e)), _ = M();
  te(t, _, (f) => o(0, l = f));
  const c = M();
  te(t, c, (f) => o(1, i = f));
  const C = [], u = mt("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: x,
    subSlotIndex: d
  } = Ne() || {}, m = a({
    parent: u,
    props: g,
    target: _,
    slot: c,
    slotKey: w,
    slotIndex: x,
    subSlotIndex: d,
    onDestroy(f) {
      C.push(f);
    }
  });
  pt("$$ms-gr-react-wrapper", m), ft(() => {
    g.set(ie(e));
  }), ht(() => {
    C.forEach((f) => f());
  });
  function b(f) {
    ee[f ? "unshift" : "push"](() => {
      l = f, _.set(l);
    });
  }
  function S(f) {
    ee[f ? "unshift" : "push"](() => {
      i = f, c.set(i);
    });
  }
  return t.$$set = (f) => {
    o(17, e = $($({}, e), re(f))), "svelteInit" in f && o(5, a = f.svelteInit), "$$scope" in f && o(6, r = f.$$scope);
  }, e = re(e), [l, i, _, c, s, a, r, n, b, S];
}
class Ct extends et {
  constructor(e) {
    super(), ct(this, e, _t, gt, at, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: Ft
} = window.__gradio__svelte__internal, le = window.ms_globals.rerender, J = window.ms_globals.tree;
function wt(t, e = {}) {
  function o(l) {
    const i = M(), n = new Ct({
      ...l,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const s = {
            key: window.ms_globals.autokey,
            svelteInstance: i,
            reactComponent: t,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: e.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, a = r.parent ?? J;
          return a.nodes = [...a.nodes, s], le({
            createPortal: Q,
            node: J
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((g) => g.svelteInstance !== i), le({
              createPortal: Q,
              node: J
            });
          }), s;
        },
        ...l.props
      }
    });
    return i.set(n), n;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(o);
    });
  });
}
const bt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function xt(t) {
  return t ? Object.keys(t).reduce((e, o) => {
    const l = t[o];
    return e[o] = It(o, l), e;
  }, {}) : {};
}
function It(t, e) {
  return typeof e == "number" && !bt.includes(t) ? e + "px" : e;
}
function V(t) {
  const e = [], o = t.cloneNode(!1);
  if (t._reactElement) {
    const i = v.Children.toArray(t._reactElement.props.children).map((n) => {
      if (v.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: s
        } = V(n.props.el);
        return v.cloneElement(n, {
          ...n.props,
          el: s,
          children: [...v.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return i.originalChildren = t._reactElement.props.children, e.push(Q(v.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: i
    }), o)), {
      clonedElement: o,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((i) => {
    t.getEventListeners(i).forEach(({
      listener: r,
      type: s,
      useCapture: a
    }) => {
      o.addEventListener(s, r, a);
    });
  });
  const l = Array.from(t.childNodes);
  for (let i = 0; i < l.length; i++) {
    const n = l[i];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: s
      } = V(n);
      e.push(...s), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: e
  };
}
function Et(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const O = Pe(({
  slot: t,
  clone: e,
  className: o,
  style: l,
  observeAttributes: i
}, n) => {
  const r = Oe(), [s, a] = Re([]), {
    forceClone: g
  } = Fe(), _ = g ? !0 : e;
  return Te(() => {
    var x;
    if (!r.current || !t)
      return;
    let c = t;
    function C() {
      let d = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (d = c.children[0], d.tagName.toLowerCase() === "react-portal-target" && d.children[0] && (d = d.children[0])), Et(n, d), o && d.classList.add(...o.split(" ")), l) {
        const m = xt(l);
        Object.keys(m).forEach((b) => {
          d.style[b] = m[b];
        });
      }
    }
    let u = null, w = null;
    if (_ && window.MutationObserver) {
      let d = function() {
        var f, P, h;
        (f = r.current) != null && f.contains(c) && ((P = r.current) == null || P.removeChild(c));
        const {
          portals: b,
          clonedElement: S
        } = V(t);
        c = S, a(b), c.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          C();
        }, 50), (h = r.current) == null || h.appendChild(c);
      };
      d();
      const m = ze(() => {
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
      c.style.display = "contents", C(), (x = r.current) == null || x.appendChild(c);
    return () => {
      var d, m;
      c.style.display = "", (d = r.current) != null && d.contains(c) && ((m = r.current) == null || m.removeChild(c)), u == null || u.disconnect();
    };
  }, [t, _, o, l, n, i, g]), v.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...s);
});
function yt(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function vt(t, e = !1) {
  try {
    if (Le(t))
      return t;
    if (e && !yt(t))
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
function y(t, e) {
  return A(() => vt(t, e), [t, e]);
}
function St(t) {
  return Object.keys(t).reduce((e, o) => (t[o] !== void 0 && (e[o] = t[o]), e), {});
}
const Pt = ({
  children: t,
  ...e
}) => /* @__PURE__ */ p.jsx(p.Fragment, {
  children: t(e)
});
function he(t) {
  return v.createElement(Pt, {
    children: t
  });
}
function W(t, e, o) {
  const l = t.filter(Boolean);
  if (l.length !== 0)
    return l.map((i, n) => {
      var g;
      if (typeof i != "object")
        return e != null && e.fallback ? e.fallback(i) : i;
      const r = {
        ...i.props,
        key: ((g = i.props) == null ? void 0 : g.key) ?? (o ? `${o}-${n}` : `${n}`)
      };
      let s = r;
      Object.keys(i.slots).forEach((_) => {
        if (!i.slots[_] || !(i.slots[_] instanceof Element) && !i.slots[_].el)
          return;
        const c = _.split(".");
        c.forEach((m, b) => {
          s[m] || (s[m] = {}), b !== c.length - 1 && (s = r[m]);
        });
        const C = i.slots[_];
        let u, w, x = (e == null ? void 0 : e.clone) ?? !1, d = e == null ? void 0 : e.forceClone;
        C instanceof Element ? u = C : (u = C.el, w = C.callback, x = C.clone ?? x, d = C.forceClone ?? d), d = d ?? !!w, s[c[c.length - 1]] = u ? w ? (...m) => (w(c[c.length - 1], m), /* @__PURE__ */ p.jsx(z, {
          ...i.ctx,
          params: m,
          forceClone: d,
          children: /* @__PURE__ */ p.jsx(O, {
            slot: u,
            clone: x
          })
        })) : he((m) => /* @__PURE__ */ p.jsx(z, {
          ...i.ctx,
          forceClone: d,
          children: /* @__PURE__ */ p.jsx(O, {
            ...m,
            slot: u,
            clone: x
          })
        })) : s[c[c.length - 1]], s = r;
      });
      const a = (e == null ? void 0 : e.children) || "children";
      return i[a] ? r[a] = W(i[a], e, `${n}`) : e != null && e.children && (r[a] = void 0, Reflect.deleteProperty(r, a)), r;
    });
}
function se(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? he((o) => /* @__PURE__ */ p.jsx(z, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ p.jsx(O, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...o
    })
  })) : /* @__PURE__ */ p.jsx(O, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function L({
  key: t,
  slots: e,
  targets: o
}, l) {
  return e[t] ? (...i) => o ? o.map((n, r) => /* @__PURE__ */ p.jsx(v.Fragment, {
    children: se(n, {
      clone: !0,
      params: i,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ p.jsx(p.Fragment, {
    children: se(e[t], {
      clone: !0,
      params: i,
      forceClone: !0
    })
  }) : void 0;
}
const {
  useItems: Ot,
  withItemsContextProvider: Rt,
  ItemHandler: At
} = D("antd-table-columns"), {
  useItems: Mt,
  withItemsContextProvider: Ut,
  ItemHandler: Ht
} = D("antd-table-row-selection-selections"), {
  useItems: Tt,
  withItemsContextProvider: kt,
  ItemHandler: Wt
} = D("antd-table-row-selection"), {
  useItems: jt,
  withItemsContextProvider: Nt,
  ItemHandler: Dt
} = D("antd-table-expandable");
function F(t) {
  return typeof t == "object" && t !== null ? t : {};
}
const Bt = wt(kt(["rowSelection"], Nt(["expandable"], Rt(["default"], ({
  children: t,
  slots: e,
  columns: o,
  getPopupContainer: l,
  pagination: i,
  loading: n,
  rowKey: r,
  rowClassName: s,
  summary: a,
  rowSelection: g,
  expandable: _,
  sticky: c,
  footer: C,
  showSorterTooltip: u,
  onRow: w,
  onHeaderRow: x,
  setSlotParams: d,
  ...m
}) => {
  const {
    items: {
      default: b
    }
  } = Ot(), {
    items: {
      expandable: S
    }
  } = jt(), {
    items: {
      rowSelection: f
    }
  } = Tt(), P = y(l), h = e["loading.tip"] || e["loading.indicator"], E = F(n), R = e["pagination.showQuickJumper.goButton"] || e["pagination.itemRender"], T = F(i), pe = y(T.showTotal), ge = y(s), _e = y(r, !0), Ce = e["showSorterTooltip.title"] || typeof u == "object", N = F(u), we = y(N.afterOpenChange), be = y(N.getPopupContainer), xe = typeof c == "object", K = F(c), Ie = y(K.getContainer), Ee = y(w), ye = y(x), ve = y(a), Se = y(C);
  return /* @__PURE__ */ p.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ p.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ p.jsx(j, {
      ...m,
      columns: A(() => (o == null ? void 0 : o.map((I) => I === "EXPAND_COLUMN" ? j.EXPAND_COLUMN : I === "SELECTION_COLUMN" ? j.SELECTION_COLUMN : I)) || W(b, {
        fallback: (I) => I === "EXPAND_COLUMN" ? j.EXPAND_COLUMN : I === "SELECTION_COLUMN" ? j.SELECTION_COLUMN : I
      }), [b, o]),
      onRow: Ee,
      onHeaderRow: ye,
      summary: e.summary ? L({
        slots: e,
        key: "summary"
      }) : ve,
      rowSelection: A(() => {
        var I;
        return g || ((I = W(f)) == null ? void 0 : I[0]);
      }, [g, f]),
      expandable: A(() => {
        var I;
        return _ || ((I = W(S)) == null ? void 0 : I[0]);
      }, [_, S]),
      rowClassName: ge,
      rowKey: _e || r,
      sticky: xe ? {
        ...K,
        getContainer: Ie
      } : c,
      showSorterTooltip: Ce ? {
        ...N,
        afterOpenChange: we,
        getPopupContainer: be,
        title: e["showSorterTooltip.title"] ? /* @__PURE__ */ p.jsx(O, {
          slot: e["showSorterTooltip.title"]
        }) : N.title
      } : u,
      pagination: R ? St({
        ...T,
        showTotal: pe,
        showQuickJumper: e["pagination.showQuickJumper.goButton"] ? {
          goButton: /* @__PURE__ */ p.jsx(O, {
            slot: e["pagination.showQuickJumper.goButton"]
          })
        } : T.showQuickJumper,
        itemRender: e["pagination.itemRender"] ? L({
          slots: e,
          key: "pagination.itemRender"
        }) : T.itemRender
      }) : i,
      getPopupContainer: P,
      loading: h ? {
        ...E,
        tip: e["loading.tip"] ? /* @__PURE__ */ p.jsx(O, {
          slot: e["loading.tip"]
        }) : E.tip,
        indicator: e["loading.indicator"] ? /* @__PURE__ */ p.jsx(O, {
          slot: e["loading.indicator"]
        }) : E.indicator
      } : n,
      footer: e.footer ? L({
        slots: e,
        key: "footer"
      }) : Se,
      title: e.title ? L({
        slots: e,
        key: "title"
      }) : m.title
    })]
  });
}))));
export {
  Bt as Table,
  Bt as default
};
