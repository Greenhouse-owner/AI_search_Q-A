import { i as he, a as A, r as _e, w as j, g as ge, b as we } from "./Index-BU0mJ6kv.js";
const E = window.ms_globals.React, ue = window.ms_globals.React.forwardRef, de = window.ms_globals.React.useRef, fe = window.ms_globals.React.useState, me = window.ms_globals.React.useEffect, te = window.ms_globals.React.useMemo, W = window.ms_globals.ReactDOM.createPortal, be = window.ms_globals.internalContext.useContextPropsContext, M = window.ms_globals.internalContext.ContextPropsProvider, z = window.ms_globals.antd.Tree, pe = window.ms_globals.createItemsContext.createItemsContext;
var xe = /\s/;
function ye(t) {
  for (var e = t.length; e-- && xe.test(t.charAt(e)); )
    ;
  return e;
}
var ve = /^\s+/;
function Ce(t) {
  return t && t.slice(0, ye(t) + 1).replace(ve, "");
}
var G = NaN, Ie = /^[-+]0x[0-9a-f]+$/i, Ee = /^0b[01]+$/i, Re = /^0o[0-7]+$/i, Se = parseInt;
function q(t) {
  if (typeof t == "number")
    return t;
  if (he(t))
    return G;
  if (A(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = A(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ce(t);
  var l = Ee.test(t);
  return l || Re.test(t) ? Se(t.slice(2), l ? 2 : 8) : Ie.test(t) ? G : +t;
}
var N = function() {
  return _e.Date.now();
}, Te = "Expected a function", Pe = Math.max, Oe = Math.min;
function je(t, e, l) {
  var s, o, n, r, i, d, _ = 0, g = !1, c = !1, w = !0;
  if (typeof t != "function")
    throw new TypeError(Te);
  e = q(e) || 0, A(l) && (g = !!l.leading, c = "maxWait" in l, n = c ? Pe(q(l.maxWait) || 0, e) : n, w = "trailing" in l ? !!l.trailing : w);
  function a(h) {
    var y = s, C = o;
    return s = o = void 0, _ = h, r = t.apply(C, y), r;
  }
  function p(h) {
    return _ = h, i = setTimeout(m, e), g ? a(h) : r;
  }
  function x(h) {
    var y = h - d, C = h - _, H = e - y;
    return c ? Oe(H, n - C) : H;
  }
  function u(h) {
    var y = h - d, C = h - _;
    return d === void 0 || y >= e || y < 0 || c && C >= n;
  }
  function m() {
    var h = N();
    if (u(h))
      return v(h);
    i = setTimeout(m, x(h));
  }
  function v(h) {
    return i = void 0, w && s ? a(h) : (s = o = void 0, r);
  }
  function R() {
    i !== void 0 && clearTimeout(i), _ = 0, s = d = o = i = void 0;
  }
  function f() {
    return i === void 0 ? r : v(N());
  }
  function I() {
    var h = N(), y = u(h);
    if (s = arguments, o = this, d = h, y) {
      if (i === void 0)
        return p(d);
      if (c)
        return clearTimeout(i), i = setTimeout(m, e), a(d);
    }
    return i === void 0 && (i = setTimeout(m, e)), r;
  }
  return I.cancel = R, I.flush = f, I;
}
var ne = {
  exports: {}
}, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke = E, Le = Symbol.for("react.element"), Fe = Symbol.for("react.fragment"), Ne = Object.prototype.hasOwnProperty, De = ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, We = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function re(t, e, l) {
  var s, o = {}, n = null, r = null;
  l !== void 0 && (n = "" + l), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (r = e.ref);
  for (s in e) Ne.call(e, s) && !We.hasOwnProperty(s) && (o[s] = e[s]);
  if (t && t.defaultProps) for (s in e = t.defaultProps, e) o[s] === void 0 && (o[s] = e[s]);
  return {
    $$typeof: Le,
    type: t,
    key: n,
    ref: r,
    props: o,
    _owner: De.current
  };
}
F.Fragment = Fe;
F.jsx = re;
F.jsxs = re;
ne.exports = F;
var b = ne.exports;
const {
  SvelteComponent: Ae,
  assign: V,
  binding_callbacks: J,
  check_outros: Me,
  children: le,
  claim_element: oe,
  claim_space: Ue,
  component_subscribe: X,
  compute_slots: Be,
  create_slot: He,
  detach: S,
  element: se,
  empty: Y,
  exclude_internal_props: K,
  get_all_dirty_from_scope: ze,
  get_slot_changes: Ge,
  group_outros: qe,
  init: Ve,
  insert_hydration: k,
  safe_not_equal: Je,
  set_custom_element_data: ie,
  space: Xe,
  transition_in: L,
  transition_out: U,
  update_slot_base: Ye
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ke,
  getContext: Qe,
  onDestroy: Ze,
  setContext: $e
} = window.__gradio__svelte__internal;
function Q(t) {
  let e, l;
  const s = (
    /*#slots*/
    t[7].default
  ), o = He(
    s,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = se("svelte-slot"), o && o.c(), this.h();
    },
    l(n) {
      e = oe(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = le(e);
      o && o.l(r), r.forEach(S), this.h();
    },
    h() {
      ie(e, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      k(n, e, r), o && o.m(e, null), t[9](e), l = !0;
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
      l || (L(o, n), l = !0);
    },
    o(n) {
      U(o, n), l = !1;
    },
    d(n) {
      n && S(e), o && o.d(n), t[9](null);
    }
  };
}
function et(t) {
  let e, l, s, o, n = (
    /*$$slots*/
    t[4].default && Q(t)
  );
  return {
    c() {
      e = se("react-portal-target"), l = Xe(), n && n.c(), s = Y(), this.h();
    },
    l(r) {
      e = oe(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), le(e).forEach(S), l = Ue(r), n && n.l(r), s = Y(), this.h();
    },
    h() {
      ie(e, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      k(r, e, i), t[8](e), k(r, l, i), n && n.m(r, i), k(r, s, i), o = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && L(n, 1)) : (n = Q(r), n.c(), L(n, 1), n.m(s.parentNode, s)) : n && (qe(), U(n, 1, 1, () => {
        n = null;
      }), Me());
    },
    i(r) {
      o || (L(n), o = !0);
    },
    o(r) {
      U(n), o = !1;
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
function tt(t, e, l) {
  let s, o, {
    $$slots: n = {},
    $$scope: r
  } = e;
  const i = Be(n);
  let {
    svelteInit: d
  } = e;
  const _ = j(Z(e)), g = j();
  X(t, g, (f) => l(0, s = f));
  const c = j();
  X(t, c, (f) => l(1, o = f));
  const w = [], a = Qe("$$ms-gr-react-wrapper"), {
    slotKey: p,
    slotIndex: x,
    subSlotIndex: u
  } = ge() || {}, m = d({
    parent: a,
    props: _,
    target: g,
    slot: c,
    slotKey: p,
    slotIndex: x,
    subSlotIndex: u,
    onDestroy(f) {
      w.push(f);
    }
  });
  $e("$$ms-gr-react-wrapper", m), Ke(() => {
    _.set(Z(e));
  }), Ze(() => {
    w.forEach((f) => f());
  });
  function v(f) {
    J[f ? "unshift" : "push"](() => {
      s = f, g.set(s);
    });
  }
  function R(f) {
    J[f ? "unshift" : "push"](() => {
      o = f, c.set(o);
    });
  }
  return t.$$set = (f) => {
    l(17, e = V(V({}, e), K(f))), "svelteInit" in f && l(5, d = f.svelteInit), "$$scope" in f && l(6, r = f.$$scope);
  }, e = K(e), [s, o, g, c, i, d, r, n, v, R];
}
class nt extends Ae {
  constructor(e) {
    super(), Ve(this, e, tt, et, Je, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _t
} = window.__gradio__svelte__internal, $ = window.ms_globals.rerender, D = window.ms_globals.tree;
function rt(t, e = {}) {
  function l(s) {
    const o = j(), n = new nt({
      ...s,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const i = {
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
          }, d = r.parent ?? D;
          return d.nodes = [...d.nodes, i], $({
            createPortal: W,
            node: D
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((_) => _.svelteInstance !== o), $({
              createPortal: W,
              node: D
            });
          }), i;
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
function ot(t) {
  return t ? Object.keys(t).reduce((e, l) => {
    const s = t[l];
    return e[l] = st(l, s), e;
  }, {}) : {};
}
function st(t, e) {
  return typeof e == "number" && !lt.includes(t) ? e + "px" : e;
}
function B(t) {
  const e = [], l = t.cloneNode(!1);
  if (t._reactElement) {
    const o = E.Children.toArray(t._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = B(n.props.el);
        return E.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...E.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = t._reactElement.props.children, e.push(W(E.cloneElement(t._reactElement, {
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
      type: i,
      useCapture: d
    }) => {
      l.addEventListener(i, r, d);
    });
  });
  const s = Array.from(t.childNodes);
  for (let o = 0; o < s.length; o++) {
    const n = s[o];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = B(n);
      e.push(...i), l.appendChild(r);
    } else n.nodeType === 3 && l.appendChild(n.cloneNode());
  }
  return {
    clonedElement: l,
    portals: e
  };
}
function it(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const T = ue(({
  slot: t,
  clone: e,
  className: l,
  style: s,
  observeAttributes: o
}, n) => {
  const r = de(), [i, d] = fe([]), {
    forceClone: _
  } = be(), g = _ ? !0 : e;
  return me(() => {
    var x;
    if (!r.current || !t)
      return;
    let c = t;
    function w() {
      let u = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (u = c.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), it(n, u), l && u.classList.add(...l.split(" ")), s) {
        const m = ot(s);
        Object.keys(m).forEach((v) => {
          u.style[v] = m[v];
        });
      }
    }
    let a = null, p = null;
    if (g && window.MutationObserver) {
      let u = function() {
        var f, I, h;
        (f = r.current) != null && f.contains(c) && ((I = r.current) == null || I.removeChild(c));
        const {
          portals: v,
          clonedElement: R
        } = B(t);
        c = R, d(v), c.style.display = "contents", p && clearTimeout(p), p = setTimeout(() => {
          w();
        }, 50), (h = r.current) == null || h.appendChild(c);
      };
      u();
      const m = je(() => {
        u(), a == null || a.disconnect(), a == null || a.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      a = new window.MutationObserver(m), a.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", w(), (x = r.current) == null || x.appendChild(c);
    return () => {
      var u, m;
      c.style.display = "", (u = r.current) != null && u.contains(c) && ((m = r.current) == null || m.removeChild(c)), a == null || a.disconnect();
    };
  }, [t, g, l, s, n, o, _]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
});
function ct(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function at(t, e = !1) {
  try {
    if (we(t))
      return t;
    if (e && !ct(t))
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
function P(t, e) {
  return te(() => at(t, e), [t, e]);
}
function ut(t) {
  return Object.keys(t).reduce((e, l) => (t[l] !== void 0 && (e[l] = t[l]), e), {});
}
const dt = ({
  children: t,
  ...e
}) => /* @__PURE__ */ b.jsx(b.Fragment, {
  children: t(e)
});
function ce(t) {
  return E.createElement(dt, {
    children: t
  });
}
function ae(t, e, l) {
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
      let i = r;
      Object.keys(o.slots).forEach((g) => {
        if (!o.slots[g] || !(o.slots[g] instanceof Element) && !o.slots[g].el)
          return;
        const c = g.split(".");
        c.forEach((m, v) => {
          i[m] || (i[m] = {}), v !== c.length - 1 && (i = r[m]);
        });
        const w = o.slots[g];
        let a, p, x = (e == null ? void 0 : e.clone) ?? !1, u = e == null ? void 0 : e.forceClone;
        w instanceof Element ? a = w : (a = w.el, p = w.callback, x = w.clone ?? x, u = w.forceClone ?? u), u = u ?? !!p, i[c[c.length - 1]] = a ? p ? (...m) => (p(c[c.length - 1], m), /* @__PURE__ */ b.jsx(M, {
          ...o.ctx,
          params: m,
          forceClone: u,
          children: /* @__PURE__ */ b.jsx(T, {
            slot: a,
            clone: x
          })
        })) : ce((m) => /* @__PURE__ */ b.jsx(M, {
          ...o.ctx,
          forceClone: u,
          children: /* @__PURE__ */ b.jsx(T, {
            ...m,
            slot: a,
            clone: x
          })
        })) : i[c[c.length - 1]], i = r;
      });
      const d = (e == null ? void 0 : e.children) || "children";
      return o[d] ? r[d] = ae(o[d], e, `${n}`) : e != null && e.children && (r[d] = void 0, Reflect.deleteProperty(r, d)), r;
    });
}
function ee(t, e) {
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
function O({
  key: t,
  slots: e,
  targets: l
}, s) {
  return e[t] ? (...o) => l ? l.map((n, r) => /* @__PURE__ */ b.jsx(E.Fragment, {
    children: ee(n, {
      clone: !0,
      params: o,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ b.jsx(b.Fragment, {
    children: ee(e[t], {
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
} = pe("antd-tree-tree-nodes"), wt = rt(ft(["default", "treeData"], ({
  slots: t,
  filterTreeNode: e,
  treeData: l,
  draggable: s,
  allowDrop: o,
  onCheck: n,
  onSelect: r,
  onExpand: i,
  children: d,
  directory: _,
  setSlotParams: g,
  onLoadData: c,
  titleRender: w,
  ...a
}) => {
  const p = P(e), x = P(s), u = P(w), m = P(typeof s == "object" ? s.nodeDraggable : void 0), v = P(o), R = _ ? z.DirectoryTree : z, {
    items: f
  } = mt(), I = f.treeData.length > 0 ? f.treeData : f.default, h = te(() => ({
    ...a,
    treeData: l || ae(I, {
      clone: !0
    }),
    showLine: t["showLine.showLeafIcon"] ? {
      showLeafIcon: O({
        slots: t,
        key: "showLine.showLeafIcon"
      })
    } : a.showLine,
    icon: t.icon ? O({
      slots: t,
      key: "icon"
    }) : a.icon,
    switcherLoadingIcon: t.switcherLoadingIcon ? /* @__PURE__ */ b.jsx(T, {
      slot: t.switcherLoadingIcon
    }) : a.switcherLoadingIcon,
    switcherIcon: t.switcherIcon ? O({
      slots: t,
      key: "switcherIcon"
    }) : a.switcherIcon,
    titleRender: t.titleRender ? O({
      slots: t,
      key: "titleRender"
    }) : u,
    draggable: t["draggable.icon"] || m ? {
      icon: t["draggable.icon"] ? /* @__PURE__ */ b.jsx(T, {
        slot: t["draggable.icon"]
      }) : typeof s == "object" ? s.icon : void 0,
      nodeDraggable: m
    } : x || s,
    loadData: c
  }), [a, l, I, t, g, m, s, u, x, c]);
  return /* @__PURE__ */ b.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ b.jsx("div", {
      style: {
        display: "none"
      },
      children: d
    }), /* @__PURE__ */ b.jsx(R, {
      ...ut(h),
      filterTreeNode: p,
      allowDrop: v,
      onSelect: (y, ...C) => {
        r == null || r(y, ...C);
      },
      onExpand: (y, ...C) => {
        i == null || i(y, ...C);
      },
      onCheck: (y, ...C) => {
        n == null || n(y, ...C);
      }
    })]
  });
}));
export {
  wt as Tree,
  wt as default
};
