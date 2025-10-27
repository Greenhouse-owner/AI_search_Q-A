import { i as ae, a as M, r as ue, b as de, w as k, g as fe } from "./Index-Cp55rhdf.js";
const y = window.ms_globals.React, ie = window.ms_globals.React.forwardRef, A = window.ms_globals.React.useRef, $ = window.ms_globals.React.useState, F = window.ms_globals.React.useEffect, ce = window.ms_globals.React.useMemo, W = window.ms_globals.ReactDOM.createPortal, me = window.ms_globals.internalContext.useContextPropsContext, B = window.ms_globals.internalContext.ContextPropsProvider, _e = window.ms_globals.antd.Cascader, pe = window.ms_globals.createItemsContext.createItemsContext;
var he = /\s/;
function ge(t) {
  for (var e = t.length; e-- && he.test(t.charAt(e)); )
    ;
  return e;
}
var be = /^\s+/;
function xe(t) {
  return t && t.slice(0, ge(t) + 1).replace(be, "");
}
var H = NaN, we = /^[-+]0x[0-9a-f]+$/i, Ce = /^0b[01]+$/i, Ee = /^0o[0-7]+$/i, ye = parseInt;
function q(t) {
  if (typeof t == "number")
    return t;
  if (ae(t))
    return H;
  if (M(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = M(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = xe(t);
  var l = Ce.test(t);
  return l || Ee.test(t) ? ye(t.slice(2), l ? 2 : 8) : we.test(t) ? H : +t;
}
var L = function() {
  return ue.Date.now();
}, ve = "Expected a function", Ie = Math.max, Se = Math.min;
function Re(t, e, l) {
  var s, o, n, r, i, a, p = 0, h = !1, c = !1, g = !0;
  if (typeof t != "function")
    throw new TypeError(ve);
  e = q(e) || 0, M(l) && (h = !!l.leading, c = "maxWait" in l, n = c ? Ie(q(l.maxWait) || 0, e) : n, g = "trailing" in l ? !!l.trailing : g);
  function f(_) {
    var E = s, R = o;
    return s = o = void 0, p = _, r = t.apply(R, E), r;
  }
  function b(_) {
    return p = _, i = setTimeout(m, e), h ? f(_) : r;
  }
  function w(_) {
    var E = _ - a, R = _ - p, U = e - E;
    return c ? Se(U, n - R) : U;
  }
  function u(_) {
    var E = _ - a, R = _ - p;
    return a === void 0 || E >= e || E < 0 || c && R >= n;
  }
  function m() {
    var _ = L();
    if (u(_))
      return C(_);
    i = setTimeout(m, w(_));
  }
  function C(_) {
    return i = void 0, g && s ? f(_) : (s = o = void 0, r);
  }
  function S() {
    i !== void 0 && clearTimeout(i), p = 0, s = a = o = i = void 0;
  }
  function d() {
    return i === void 0 ? r : C(L());
  }
  function v() {
    var _ = L(), E = u(_);
    if (s = arguments, o = this, a = _, E) {
      if (i === void 0)
        return b(a);
      if (c)
        return clearTimeout(i), i = setTimeout(m, e), f(a);
    }
    return i === void 0 && (i = setTimeout(m, e)), r;
  }
  return v.cancel = S, v.flush = d, v;
}
function ke(t, e) {
  return de(t, e);
}
var ee = {
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
var Pe = y, Oe = Symbol.for("react.element"), Te = Symbol.for("react.fragment"), je = Object.prototype.hasOwnProperty, Le = Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ne = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function te(t, e, l) {
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
j.Fragment = Te;
j.jsx = te;
j.jsxs = te;
ee.exports = j;
var x = ee.exports;
const {
  SvelteComponent: Ae,
  assign: z,
  binding_callbacks: G,
  check_outros: Fe,
  children: ne,
  claim_element: re,
  claim_space: We,
  component_subscribe: J,
  compute_slots: Me,
  create_slot: De,
  detach: I,
  element: oe,
  empty: X,
  exclude_internal_props: Y,
  get_all_dirty_from_scope: Ve,
  get_slot_changes: Ue,
  group_outros: Be,
  init: He,
  insert_hydration: P,
  safe_not_equal: qe,
  set_custom_element_data: le,
  space: ze,
  transition_in: O,
  transition_out: D,
  update_slot_base: Ge
} = window.__gradio__svelte__internal, {
  beforeUpdate: Je,
  getContext: Xe,
  onDestroy: Ye,
  setContext: Ke
} = window.__gradio__svelte__internal;
function K(t) {
  let e, l;
  const s = (
    /*#slots*/
    t[7].default
  ), o = De(
    s,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = oe("svelte-slot"), o && o.c(), this.h();
    },
    l(n) {
      e = re(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = ne(e);
      o && o.l(r), r.forEach(I), this.h();
    },
    h() {
      le(e, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      P(n, e, r), o && o.m(e, null), t[9](e), l = !0;
    },
    p(n, r) {
      o && o.p && (!l || r & /*$$scope*/
      64) && Ge(
        o,
        s,
        n,
        /*$$scope*/
        n[6],
        l ? Ue(
          s,
          /*$$scope*/
          n[6],
          r,
          null
        ) : Ve(
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
      n && I(e), o && o.d(n), t[9](null);
    }
  };
}
function Qe(t) {
  let e, l, s, o, n = (
    /*$$slots*/
    t[4].default && K(t)
  );
  return {
    c() {
      e = oe("react-portal-target"), l = ze(), n && n.c(), s = X(), this.h();
    },
    l(r) {
      e = re(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ne(e).forEach(I), l = We(r), n && n.l(r), s = X(), this.h();
    },
    h() {
      le(e, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      P(r, e, i), t[8](e), P(r, l, i), n && n.m(r, i), P(r, s, i), o = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && O(n, 1)) : (n = K(r), n.c(), O(n, 1), n.m(s.parentNode, s)) : n && (Be(), D(n, 1, 1, () => {
        n = null;
      }), Fe());
    },
    i(r) {
      o || (O(n), o = !0);
    },
    o(r) {
      D(n), o = !1;
    },
    d(r) {
      r && (I(e), I(l), I(s)), t[8](null), n && n.d(r);
    }
  };
}
function Q(t) {
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
  const i = Me(n);
  let {
    svelteInit: a
  } = e;
  const p = k(Q(e)), h = k();
  J(t, h, (d) => l(0, s = d));
  const c = k();
  J(t, c, (d) => l(1, o = d));
  const g = [], f = Xe("$$ms-gr-react-wrapper"), {
    slotKey: b,
    slotIndex: w,
    subSlotIndex: u
  } = fe() || {}, m = a({
    parent: f,
    props: p,
    target: h,
    slot: c,
    slotKey: b,
    slotIndex: w,
    subSlotIndex: u,
    onDestroy(d) {
      g.push(d);
    }
  });
  Ke("$$ms-gr-react-wrapper", m), Je(() => {
    p.set(Q(e));
  }), Ye(() => {
    g.forEach((d) => d());
  });
  function C(d) {
    G[d ? "unshift" : "push"](() => {
      s = d, h.set(s);
    });
  }
  function S(d) {
    G[d ? "unshift" : "push"](() => {
      o = d, c.set(o);
    });
  }
  return t.$$set = (d) => {
    l(17, e = z(z({}, e), Y(d))), "svelteInit" in d && l(5, a = d.svelteInit), "$$scope" in d && l(6, r = d.$$scope);
  }, e = Y(e), [s, o, h, c, i, a, r, n, C, S];
}
class $e extends Ae {
  constructor(e) {
    super(), He(this, e, Ze, Qe, qe, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: dt
} = window.__gradio__svelte__internal, Z = window.ms_globals.rerender, N = window.ms_globals.tree;
function et(t, e = {}) {
  function l(s) {
    const o = k(), n = new $e({
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
          }, a = r.parent ?? N;
          return a.nodes = [...a.nodes, i], Z({
            createPortal: W,
            node: N
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((p) => p.svelteInstance !== o), Z({
              createPortal: W,
              node: N
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
const tt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function nt(t) {
  return t ? Object.keys(t).reduce((e, l) => {
    const s = t[l];
    return e[l] = rt(l, s), e;
  }, {}) : {};
}
function rt(t, e) {
  return typeof e == "number" && !tt.includes(t) ? e + "px" : e;
}
function V(t) {
  const e = [], l = t.cloneNode(!1);
  if (t._reactElement) {
    const o = y.Children.toArray(t._reactElement.props.children).map((n) => {
      if (y.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = V(n.props.el);
        return y.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...y.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = t._reactElement.props.children, e.push(W(y.cloneElement(t._reactElement, {
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
      useCapture: a
    }) => {
      l.addEventListener(i, r, a);
    });
  });
  const s = Array.from(t.childNodes);
  for (let o = 0; o < s.length; o++) {
    const n = s[o];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = V(n);
      e.push(...i), l.appendChild(r);
    } else n.nodeType === 3 && l.appendChild(n.cloneNode());
  }
  return {
    clonedElement: l,
    portals: e
  };
}
function ot(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const T = ie(({
  slot: t,
  clone: e,
  className: l,
  style: s,
  observeAttributes: o
}, n) => {
  const r = A(), [i, a] = $([]), {
    forceClone: p
  } = me(), h = p ? !0 : e;
  return F(() => {
    var w;
    if (!r.current || !t)
      return;
    let c = t;
    function g() {
      let u = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (u = c.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), ot(n, u), l && u.classList.add(...l.split(" ")), s) {
        const m = nt(s);
        Object.keys(m).forEach((C) => {
          u.style[C] = m[C];
        });
      }
    }
    let f = null, b = null;
    if (h && window.MutationObserver) {
      let u = function() {
        var d, v, _;
        (d = r.current) != null && d.contains(c) && ((v = r.current) == null || v.removeChild(c));
        const {
          portals: C,
          clonedElement: S
        } = V(t);
        c = S, a(C), c.style.display = "contents", b && clearTimeout(b), b = setTimeout(() => {
          g();
        }, 50), (_ = r.current) == null || _.appendChild(c);
      };
      u();
      const m = Re(() => {
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
      c.style.display = "contents", g(), (w = r.current) == null || w.appendChild(c);
    return () => {
      var u, m;
      c.style.display = "", (u = r.current) != null && u.contains(c) && ((m = r.current) == null || m.removeChild(c)), f == null || f.disconnect();
    };
  }, [t, h, l, s, n, o, p]), y.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
});
function lt({
  value: t,
  onValueChange: e
}) {
  const [l, s] = $(t), o = A(e);
  o.current = e;
  const n = A(l);
  return n.current = l, F(() => {
    o.current(l);
  }, [l]), F(() => {
    ke(t, n.current) || s(t);
  }, [t]), [l, s];
}
const st = ({
  children: t,
  ...e
}) => /* @__PURE__ */ x.jsx(x.Fragment, {
  children: t(e)
});
function it(t) {
  return y.createElement(st, {
    children: t
  });
}
function se(t, e, l) {
  const s = t.filter(Boolean);
  if (s.length !== 0)
    return s.map((o, n) => {
      var p;
      if (typeof o != "object")
        return e != null && e.fallback ? e.fallback(o) : o;
      const r = {
        ...o.props,
        key: ((p = o.props) == null ? void 0 : p.key) ?? (l ? `${l}-${n}` : `${n}`)
      };
      let i = r;
      Object.keys(o.slots).forEach((h) => {
        if (!o.slots[h] || !(o.slots[h] instanceof Element) && !o.slots[h].el)
          return;
        const c = h.split(".");
        c.forEach((m, C) => {
          i[m] || (i[m] = {}), C !== c.length - 1 && (i = r[m]);
        });
        const g = o.slots[h];
        let f, b, w = (e == null ? void 0 : e.clone) ?? !1, u = e == null ? void 0 : e.forceClone;
        g instanceof Element ? f = g : (f = g.el, b = g.callback, w = g.clone ?? w, u = g.forceClone ?? u), u = u ?? !!b, i[c[c.length - 1]] = f ? b ? (...m) => (b(c[c.length - 1], m), /* @__PURE__ */ x.jsx(B, {
          ...o.ctx,
          params: m,
          forceClone: u,
          children: /* @__PURE__ */ x.jsx(T, {
            slot: f,
            clone: w
          })
        })) : it((m) => /* @__PURE__ */ x.jsx(B, {
          ...o.ctx,
          forceClone: u,
          children: /* @__PURE__ */ x.jsx(T, {
            ...m,
            slot: f,
            clone: w
          })
        })) : i[c[c.length - 1]], i = r;
      });
      const a = (e == null ? void 0 : e.children) || "children";
      return o[a] ? r[a] = se(o[a], e, `${n}`) : e != null && e.children && (r[a] = void 0, Reflect.deleteProperty(r, a)), r;
    });
}
const {
  useItems: ct,
  withItemsContextProvider: at,
  ItemHandler: ft
} = pe("antd-cascader-options"), mt = et(at(["default", "options"], ({
  slots: t,
  children: e,
  onValueChange: l,
  onChange: s,
  onLoadData: o,
  options: n,
  ...r
}) => {
  const [i, a] = lt({
    onValueChange: l,
    value: r.value
  }), {
    items: p
  } = ct(), h = p.options.length > 0 ? p.options : p.default;
  return /* @__PURE__ */ x.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ x.jsx("div", {
      style: {
        display: "none"
      },
      children: e
    }), /* @__PURE__ */ x.jsx(_e.Panel, {
      ...r,
      value: i,
      options: ce(() => n || se(h, {
        clone: !0
      }), [n, h]),
      loadData: o,
      onChange: (c, ...g) => {
        s == null || s(c, ...g), a(c);
      },
      expandIcon: t.expandIcon ? /* @__PURE__ */ x.jsx(T, {
        slot: t.expandIcon
      }) : r.expandIcon,
      notFoundContent: t.notFoundContent ? /* @__PURE__ */ x.jsx(T, {
        slot: t.notFoundContent
      }) : r.notFoundContent
    })]
  });
}));
export {
  mt as CascaderPanel,
  mt as default
};
