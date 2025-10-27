import { i as me, a as D, r as he, w as O, g as _e, b as ge } from "./Index-DRxOOyTB.js";
const I = window.ms_globals.React, ae = window.ms_globals.React.forwardRef, ue = window.ms_globals.React.useRef, de = window.ms_globals.React.useState, fe = window.ms_globals.React.useEffect, ee = window.ms_globals.React.useMemo, A = window.ms_globals.ReactDOM.createPortal, xe = window.ms_globals.internalContext.useContextPropsContext, M = window.ms_globals.internalContext.ContextPropsProvider, we = window.ms_globals.antd.TreeSelect, pe = window.ms_globals.createItemsContext.createItemsContext;
var be = /\s/;
function Ce(e) {
  for (var t = e.length; t-- && be.test(e.charAt(t)); )
    ;
  return t;
}
var ye = /^\s+/;
function ve(e) {
  return e && e.slice(0, Ce(e) + 1).replace(ye, "");
}
var z = NaN, Ie = /^[-+]0x[0-9a-f]+$/i, Ee = /^0b[01]+$/i, Re = /^0o[0-7]+$/i, Se = parseInt;
function G(e) {
  if (typeof e == "number")
    return e;
  if (me(e))
    return z;
  if (D(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = D(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ve(e);
  var l = Ee.test(e);
  return l || Re.test(e) ? Se(e.slice(2), l ? 2 : 8) : Ie.test(e) ? z : +e;
}
var N = function() {
  return he.Date.now();
}, Te = "Expected a function", Pe = Math.max, ke = Math.min;
function Oe(e, t, l) {
  var s, o, n, r, c, a, w = 0, x = !1, i = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Te);
  t = G(t) || 0, D(l) && (x = !!l.leading, i = "maxWait" in l, n = i ? Pe(G(l.maxWait) || 0, t) : n, p = "trailing" in l ? !!l.trailing : p);
  function f(h) {
    var y = s, S = o;
    return s = o = void 0, w = h, r = e.apply(S, y), r;
  }
  function _(h) {
    return w = h, c = setTimeout(m, t), x ? f(h) : r;
  }
  function b(h) {
    var y = h - a, S = h - w, H = t - y;
    return i ? ke(H, n - S) : H;
  }
  function u(h) {
    var y = h - a, S = h - w;
    return a === void 0 || y >= t || y < 0 || i && S >= n;
  }
  function m() {
    var h = N();
    if (u(h))
      return C(h);
    c = setTimeout(m, b(h));
  }
  function C(h) {
    return c = void 0, p && s ? f(h) : (s = o = void 0, r);
  }
  function E() {
    c !== void 0 && clearTimeout(c), w = 0, s = a = o = c = void 0;
  }
  function d() {
    return c === void 0 ? r : C(N());
  }
  function v() {
    var h = N(), y = u(h);
    if (s = arguments, o = this, a = h, y) {
      if (c === void 0)
        return _(a);
      if (i)
        return clearTimeout(c), c = setTimeout(m, t), f(a);
    }
    return c === void 0 && (c = setTimeout(m, t)), r;
  }
  return v.cancel = E, v.flush = d, v;
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
var je = I, Fe = Symbol.for("react.element"), Le = Symbol.for("react.fragment"), Ne = Object.prototype.hasOwnProperty, We = je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ae = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ne(e, t, l) {
  var s, o = {}, n = null, r = null;
  l !== void 0 && (n = "" + l), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (s in t) Ne.call(t, s) && !Ae.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: Fe,
    type: e,
    key: n,
    ref: r,
    props: o,
    _owner: We.current
  };
}
L.Fragment = Le;
L.jsx = ne;
L.jsxs = ne;
te.exports = L;
var g = te.exports;
const {
  SvelteComponent: De,
  assign: q,
  binding_callbacks: V,
  check_outros: Me,
  children: re,
  claim_element: le,
  claim_space: Ue,
  component_subscribe: J,
  compute_slots: Be,
  create_slot: He,
  detach: T,
  element: oe,
  empty: X,
  exclude_internal_props: Y,
  get_all_dirty_from_scope: ze,
  get_slot_changes: Ge,
  group_outros: qe,
  init: Ve,
  insert_hydration: j,
  safe_not_equal: Je,
  set_custom_element_data: se,
  space: Xe,
  transition_in: F,
  transition_out: U,
  update_slot_base: Ye
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ke,
  getContext: Qe,
  onDestroy: Ze,
  setContext: $e
} = window.__gradio__svelte__internal;
function K(e) {
  let t, l;
  const s = (
    /*#slots*/
    e[7].default
  ), o = He(
    s,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = oe("svelte-slot"), o && o.c(), this.h();
    },
    l(n) {
      t = le(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = re(t);
      o && o.l(r), r.forEach(T), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      j(n, t, r), o && o.m(t, null), e[9](t), l = !0;
    },
    p(n, r) {
      o && o.p && (!l || r & /*$$scope*/
      64) && Ye(
        o,
        s,
        n,
        /*$$scope*/
        n[6],
        l ? Ge(
          s,
          /*$$scope*/
          n[6],
          r,
          null
        ) : ze(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      l || (F(o, n), l = !0);
    },
    o(n) {
      U(o, n), l = !1;
    },
    d(n) {
      n && T(t), o && o.d(n), e[9](null);
    }
  };
}
function et(e) {
  let t, l, s, o, n = (
    /*$$slots*/
    e[4].default && K(e)
  );
  return {
    c() {
      t = oe("react-portal-target"), l = Xe(), n && n.c(), s = X(), this.h();
    },
    l(r) {
      t = le(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), re(t).forEach(T), l = Ue(r), n && n.l(r), s = X(), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(r, c) {
      j(r, t, c), e[8](t), j(r, l, c), n && n.m(r, c), j(r, s, c), o = !0;
    },
    p(r, [c]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, c), c & /*$$slots*/
      16 && F(n, 1)) : (n = K(r), n.c(), F(n, 1), n.m(s.parentNode, s)) : n && (qe(), U(n, 1, 1, () => {
        n = null;
      }), Me());
    },
    i(r) {
      o || (F(n), o = !0);
    },
    o(r) {
      U(n), o = !1;
    },
    d(r) {
      r && (T(t), T(l), T(s)), e[8](null), n && n.d(r);
    }
  };
}
function Q(e) {
  const {
    svelteInit: t,
    ...l
  } = e;
  return l;
}
function tt(e, t, l) {
  let s, o, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const c = Be(n);
  let {
    svelteInit: a
  } = t;
  const w = O(Q(t)), x = O();
  J(e, x, (d) => l(0, s = d));
  const i = O();
  J(e, i, (d) => l(1, o = d));
  const p = [], f = Qe("$$ms-gr-react-wrapper"), {
    slotKey: _,
    slotIndex: b,
    subSlotIndex: u
  } = _e() || {}, m = a({
    parent: f,
    props: w,
    target: x,
    slot: i,
    slotKey: _,
    slotIndex: b,
    subSlotIndex: u,
    onDestroy(d) {
      p.push(d);
    }
  });
  $e("$$ms-gr-react-wrapper", m), Ke(() => {
    w.set(Q(t));
  }), Ze(() => {
    p.forEach((d) => d());
  });
  function C(d) {
    V[d ? "unshift" : "push"](() => {
      s = d, x.set(s);
    });
  }
  function E(d) {
    V[d ? "unshift" : "push"](() => {
      o = d, i.set(o);
    });
  }
  return e.$$set = (d) => {
    l(17, t = q(q({}, t), Y(d))), "svelteInit" in d && l(5, a = d.svelteInit), "$$scope" in d && l(6, r = d.$$scope);
  }, t = Y(t), [s, o, x, i, c, a, r, n, C, E];
}
class nt extends De {
  constructor(t) {
    super(), Ve(this, t, tt, et, Je, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _t
} = window.__gradio__svelte__internal, Z = window.ms_globals.rerender, W = window.ms_globals.tree;
function rt(e, t = {}) {
  function l(s) {
    const o = O(), n = new nt({
      ...s,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const c = {
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
          }, a = r.parent ?? W;
          return a.nodes = [...a.nodes, c], Z({
            createPortal: A,
            node: W
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((w) => w.svelteInstance !== o), Z({
              createPortal: A,
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
const lt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ot(e) {
  return e ? Object.keys(e).reduce((t, l) => {
    const s = e[l];
    return t[l] = st(l, s), t;
  }, {}) : {};
}
function st(e, t) {
  return typeof t == "number" && !lt.includes(e) ? t + "px" : t;
}
function B(e) {
  const t = [], l = e.cloneNode(!1);
  if (e._reactElement) {
    const o = I.Children.toArray(e._reactElement.props.children).map((n) => {
      if (I.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: c
        } = B(n.props.el);
        return I.cloneElement(n, {
          ...n.props,
          el: c,
          children: [...I.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(A(I.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: o
    }), l)), {
      clonedElement: l,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((o) => {
    e.getEventListeners(o).forEach(({
      listener: r,
      type: c,
      useCapture: a
    }) => {
      l.addEventListener(c, r, a);
    });
  });
  const s = Array.from(e.childNodes);
  for (let o = 0; o < s.length; o++) {
    const n = s[o];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: c
      } = B(n);
      t.push(...c), l.appendChild(r);
    } else n.nodeType === 3 && l.appendChild(n.cloneNode());
  }
  return {
    clonedElement: l,
    portals: t
  };
}
function ct(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const R = ae(({
  slot: e,
  clone: t,
  className: l,
  style: s,
  observeAttributes: o
}, n) => {
  const r = ue(), [c, a] = de([]), {
    forceClone: w
  } = xe(), x = w ? !0 : t;
  return fe(() => {
    var b;
    if (!r.current || !e)
      return;
    let i = e;
    function p() {
      let u = i;
      if (i.tagName.toLowerCase() === "svelte-slot" && i.children.length === 1 && i.children[0] && (u = i.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), ct(n, u), l && u.classList.add(...l.split(" ")), s) {
        const m = ot(s);
        Object.keys(m).forEach((C) => {
          u.style[C] = m[C];
        });
      }
    }
    let f = null, _ = null;
    if (x && window.MutationObserver) {
      let u = function() {
        var d, v, h;
        (d = r.current) != null && d.contains(i) && ((v = r.current) == null || v.removeChild(i));
        const {
          portals: C,
          clonedElement: E
        } = B(e);
        i = E, a(C), i.style.display = "contents", _ && clearTimeout(_), _ = setTimeout(() => {
          p();
        }, 50), (h = r.current) == null || h.appendChild(i);
      };
      u();
      const m = Oe(() => {
        u(), f == null || f.disconnect(), f == null || f.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      f = new window.MutationObserver(m), f.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      i.style.display = "contents", p(), (b = r.current) == null || b.appendChild(i);
    return () => {
      var u, m;
      i.style.display = "", (u = r.current) != null && u.contains(i) && ((m = r.current) == null || m.removeChild(i)), f == null || f.disconnect();
    };
  }, [e, x, l, s, n, o, w]), I.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...c);
});
function it(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function at(e, t = !1) {
  try {
    if (ge(e))
      return e;
    if (t && !it(e))
      return;
    if (typeof e == "string") {
      let l = e.trim();
      return l.startsWith(";") && (l = l.slice(1)), l.endsWith(";") && (l = l.slice(0, -1)), new Function(`return (...args) => (${l})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function P(e, t) {
  return ee(() => at(e, t), [e, t]);
}
function ut(e) {
  return Object.keys(e).reduce((t, l) => (e[l] !== void 0 && (t[l] = e[l]), t), {});
}
const dt = ({
  children: e,
  ...t
}) => /* @__PURE__ */ g.jsx(g.Fragment, {
  children: e(t)
});
function ce(e) {
  return I.createElement(dt, {
    children: e
  });
}
function ie(e, t, l) {
  const s = e.filter(Boolean);
  if (s.length !== 0)
    return s.map((o, n) => {
      var w;
      if (typeof o != "object")
        return t != null && t.fallback ? t.fallback(o) : o;
      const r = {
        ...o.props,
        key: ((w = o.props) == null ? void 0 : w.key) ?? (l ? `${l}-${n}` : `${n}`)
      };
      let c = r;
      Object.keys(o.slots).forEach((x) => {
        if (!o.slots[x] || !(o.slots[x] instanceof Element) && !o.slots[x].el)
          return;
        const i = x.split(".");
        i.forEach((m, C) => {
          c[m] || (c[m] = {}), C !== i.length - 1 && (c = r[m]);
        });
        const p = o.slots[x];
        let f, _, b = (t == null ? void 0 : t.clone) ?? !1, u = t == null ? void 0 : t.forceClone;
        p instanceof Element ? f = p : (f = p.el, _ = p.callback, b = p.clone ?? b, u = p.forceClone ?? u), u = u ?? !!_, c[i[i.length - 1]] = f ? _ ? (...m) => (_(i[i.length - 1], m), /* @__PURE__ */ g.jsx(M, {
          ...o.ctx,
          params: m,
          forceClone: u,
          children: /* @__PURE__ */ g.jsx(R, {
            slot: f,
            clone: b
          })
        })) : ce((m) => /* @__PURE__ */ g.jsx(M, {
          ...o.ctx,
          forceClone: u,
          children: /* @__PURE__ */ g.jsx(R, {
            ...m,
            slot: f,
            clone: b
          })
        })) : c[i[i.length - 1]], c = r;
      });
      const a = (t == null ? void 0 : t.children) || "children";
      return o[a] ? r[a] = ie(o[a], t, `${n}`) : t != null && t.children && (r[a] = void 0, Reflect.deleteProperty(r, a)), r;
    });
}
function $(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? ce((l) => /* @__PURE__ */ g.jsx(M, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ g.jsx(R, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...l
    })
  })) : /* @__PURE__ */ g.jsx(R, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function k({
  key: e,
  slots: t,
  targets: l
}, s) {
  return t[e] ? (...o) => l ? l.map((n, r) => /* @__PURE__ */ g.jsx(I.Fragment, {
    children: $(n, {
      clone: !0,
      params: o,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ g.jsx(g.Fragment, {
    children: $(t[e], {
      clone: !0,
      params: o,
      forceClone: !0
    })
  }) : void 0;
}
const {
  withItemsContextProvider: ft,
  useItems: mt,
  ItemHandler: gt
} = pe("antd-tree-select-tree-nodes"), xt = rt(ft(["default", "treeData"], ({
  slots: e,
  filterTreeNode: t,
  getPopupContainer: l,
  dropdownRender: s,
  tagRender: o,
  treeTitleRender: n,
  treeData: r,
  onValueChange: c,
  onChange: a,
  children: w,
  maxTagPlaceholder: x,
  elRef: i,
  setSlotParams: p,
  onLoadData: f,
  ..._
}) => {
  const b = P(t), u = P(l), m = P(o), C = P(s), E = P(n), {
    items: d
  } = mt(), v = d.treeData.length > 0 ? d.treeData : d.default, h = ee(() => ({
    ..._,
    loadData: f,
    treeData: r || ie(v, {
      clone: !0
    }),
    dropdownRender: e.dropdownRender ? k({
      slots: e,
      key: "dropdownRender"
    }) : C,
    allowClear: e["allowClear.clearIcon"] ? {
      clearIcon: /* @__PURE__ */ g.jsx(R, {
        slot: e["allowClear.clearIcon"]
      })
    } : _.allowClear,
    suffixIcon: e.suffixIcon ? /* @__PURE__ */ g.jsx(R, {
      slot: e.suffixIcon
    }) : _.suffixIcon,
    prefix: e.prefix ? /* @__PURE__ */ g.jsx(R, {
      slot: e.prefix
    }) : _.prefix,
    switcherIcon: e.switcherIcon ? k({
      slots: e,
      key: "switcherIcon"
    }) : _.switcherIcon,
    getPopupContainer: u,
    tagRender: e.tagRender ? k({
      slots: e,
      key: "tagRender"
    }) : m,
    treeTitleRender: e.treeTitleRender ? k({
      slots: e,
      key: "treeTitleRender"
    }) : E,
    filterTreeNode: b || t,
    maxTagPlaceholder: e.maxTagPlaceholder ? k({
      slots: e,
      key: "maxTagPlaceholder"
    }) : x,
    notFoundContent: e.notFoundContent ? /* @__PURE__ */ g.jsx(R, {
      slot: e.notFoundContent
    }) : _.notFoundContent
  }), [C, t, b, u, x, f, _, p, v, e, m, r, E]);
  return /* @__PURE__ */ g.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ g.jsx("div", {
      style: {
        display: "none"
      },
      children: w
    }), /* @__PURE__ */ g.jsx(we, {
      ...ut(h),
      ref: i,
      onChange: (y, ...S) => {
        a == null || a(y, ...S), c(y);
      }
    })]
  });
}));
export {
  xt as TreeSelect,
  xt as default
};
