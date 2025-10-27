import { i as ae, a as W, r as ue, w as R, g as de } from "./Index-B2fwvKnm.js";
const v = window.ms_globals.React, oe = window.ms_globals.React.forwardRef, se = window.ms_globals.React.useRef, le = window.ms_globals.React.useState, ie = window.ms_globals.React.useEffect, ce = window.ms_globals.React.useMemo, A = window.ms_globals.ReactDOM.createPortal, fe = window.ms_globals.internalContext.useContextPropsContext, U = window.ms_globals.internalContext.ContextPropsProvider, me = window.ms_globals.antd.Descriptions, pe = window.ms_globals.createItemsContext.createItemsContext;
var _e = /\s/;
function he(e) {
  for (var t = e.length; t-- && _e.test(e.charAt(t)); )
    ;
  return t;
}
var ge = /^\s+/;
function xe(e) {
  return e && e.slice(0, he(e) + 1).replace(ge, "");
}
var B = NaN, be = /^[-+]0x[0-9a-f]+$/i, we = /^0b[01]+$/i, Ee = /^0o[0-7]+$/i, Ce = parseInt;
function H(e) {
  if (typeof e == "number")
    return e;
  if (ae(e))
    return B;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = xe(e);
  var s = we.test(e);
  return s || Ee.test(e) ? Ce(e.slice(2), s ? 2 : 8) : be.test(e) ? B : +e;
}
var L = function() {
  return ue.Date.now();
}, ve = "Expected a function", ye = Math.max, Ie = Math.min;
function Se(e, t, s) {
  var l, o, n, r, i, u, _ = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ve);
  t = H(t) || 0, W(s) && (h = !!s.leading, c = "maxWait" in s, n = c ? ye(H(s.maxWait) || 0, t) : n, g = "trailing" in s ? !!s.trailing : g);
  function f(p) {
    var C = l, O = o;
    return l = o = void 0, _ = p, r = e.apply(O, C), r;
  }
  function x(p) {
    return _ = p, i = setTimeout(m, t), h ? f(p) : r;
  }
  function w(p) {
    var C = p - u, O = p - _, F = t - C;
    return c ? Ie(F, n - O) : F;
  }
  function a(p) {
    var C = p - u, O = p - _;
    return u === void 0 || C >= t || C < 0 || c && O >= n;
  }
  function m() {
    var p = L();
    if (a(p))
      return E(p);
    i = setTimeout(m, w(p));
  }
  function E(p) {
    return i = void 0, g && l ? f(p) : (l = o = void 0, r);
  }
  function S() {
    i !== void 0 && clearTimeout(i), _ = 0, l = u = o = i = void 0;
  }
  function d() {
    return i === void 0 ? r : E(L());
  }
  function y() {
    var p = L(), C = a(p);
    if (l = arguments, o = this, u = p, C) {
      if (i === void 0)
        return x(u);
      if (c)
        return clearTimeout(i), i = setTimeout(m, t), f(u);
    }
    return i === void 0 && (i = setTimeout(m, t)), r;
  }
  return y.cancel = S, y.flush = d, y;
}
var Q = {
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
var Oe = v, Re = Symbol.for("react.element"), Te = Symbol.for("react.fragment"), ke = Object.prototype.hasOwnProperty, Pe = Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, je = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Z(e, t, s) {
  var l, o = {}, n = null, r = null;
  s !== void 0 && (n = "" + s), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (l in t) ke.call(t, l) && !je.hasOwnProperty(l) && (o[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) o[l] === void 0 && (o[l] = t[l]);
  return {
    $$typeof: Re,
    type: e,
    key: n,
    ref: r,
    props: o,
    _owner: Pe.current
  };
}
j.Fragment = Te;
j.jsx = Z;
j.jsxs = Z;
Q.exports = j;
var b = Q.exports;
const {
  SvelteComponent: Le,
  assign: z,
  binding_callbacks: G,
  check_outros: Ne,
  children: $,
  claim_element: ee,
  claim_space: Ae,
  component_subscribe: q,
  compute_slots: We,
  create_slot: De,
  detach: I,
  element: te,
  empty: V,
  exclude_internal_props: J,
  get_all_dirty_from_scope: Me,
  get_slot_changes: Fe,
  group_outros: Ue,
  init: Be,
  insert_hydration: T,
  safe_not_equal: He,
  set_custom_element_data: ne,
  space: ze,
  transition_in: k,
  transition_out: D,
  update_slot_base: Ge
} = window.__gradio__svelte__internal, {
  beforeUpdate: qe,
  getContext: Ve,
  onDestroy: Je,
  setContext: Xe
} = window.__gradio__svelte__internal;
function X(e) {
  let t, s;
  const l = (
    /*#slots*/
    e[7].default
  ), o = De(
    l,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = te("svelte-slot"), o && o.c(), this.h();
    },
    l(n) {
      t = ee(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = $(t);
      o && o.l(r), r.forEach(I), this.h();
    },
    h() {
      ne(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      T(n, t, r), o && o.m(t, null), e[9](t), s = !0;
    },
    p(n, r) {
      o && o.p && (!s || r & /*$$scope*/
      64) && Ge(
        o,
        l,
        n,
        /*$$scope*/
        n[6],
        s ? Fe(
          l,
          /*$$scope*/
          n[6],
          r,
          null
        ) : Me(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      s || (k(o, n), s = !0);
    },
    o(n) {
      D(o, n), s = !1;
    },
    d(n) {
      n && I(t), o && o.d(n), e[9](null);
    }
  };
}
function Ye(e) {
  let t, s, l, o, n = (
    /*$$slots*/
    e[4].default && X(e)
  );
  return {
    c() {
      t = te("react-portal-target"), s = ze(), n && n.c(), l = V(), this.h();
    },
    l(r) {
      t = ee(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), $(t).forEach(I), s = Ae(r), n && n.l(r), l = V(), this.h();
    },
    h() {
      ne(t, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      T(r, t, i), e[8](t), T(r, s, i), n && n.m(r, i), T(r, l, i), o = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && k(n, 1)) : (n = X(r), n.c(), k(n, 1), n.m(l.parentNode, l)) : n && (Ue(), D(n, 1, 1, () => {
        n = null;
      }), Ne());
    },
    i(r) {
      o || (k(n), o = !0);
    },
    o(r) {
      D(n), o = !1;
    },
    d(r) {
      r && (I(t), I(s), I(l)), e[8](null), n && n.d(r);
    }
  };
}
function Y(e) {
  const {
    svelteInit: t,
    ...s
  } = e;
  return s;
}
function Ke(e, t, s) {
  let l, o, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const i = We(n);
  let {
    svelteInit: u
  } = t;
  const _ = R(Y(t)), h = R();
  q(e, h, (d) => s(0, l = d));
  const c = R();
  q(e, c, (d) => s(1, o = d));
  const g = [], f = Ve("$$ms-gr-react-wrapper"), {
    slotKey: x,
    slotIndex: w,
    subSlotIndex: a
  } = de() || {}, m = u({
    parent: f,
    props: _,
    target: h,
    slot: c,
    slotKey: x,
    slotIndex: w,
    subSlotIndex: a,
    onDestroy(d) {
      g.push(d);
    }
  });
  Xe("$$ms-gr-react-wrapper", m), qe(() => {
    _.set(Y(t));
  }), Je(() => {
    g.forEach((d) => d());
  });
  function E(d) {
    G[d ? "unshift" : "push"](() => {
      l = d, h.set(l);
    });
  }
  function S(d) {
    G[d ? "unshift" : "push"](() => {
      o = d, c.set(o);
    });
  }
  return e.$$set = (d) => {
    s(17, t = z(z({}, t), J(d))), "svelteInit" in d && s(5, u = d.svelteInit), "$$scope" in d && s(6, r = d.$$scope);
  }, t = J(t), [l, o, h, c, i, u, r, n, E, S];
}
class Qe extends Le {
  constructor(t) {
    super(), Be(this, t, Ke, Ye, He, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ct
} = window.__gradio__svelte__internal, K = window.ms_globals.rerender, N = window.ms_globals.tree;
function Ze(e, t = {}) {
  function s(l) {
    const o = R(), n = new Qe({
      ...l,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const i = {
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
          }, u = r.parent ?? N;
          return u.nodes = [...u.nodes, i], K({
            createPortal: A,
            node: N
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((_) => _.svelteInstance !== o), K({
              createPortal: A,
              node: N
            });
          }), i;
        },
        ...l.props
      }
    });
    return o.set(n), n;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(s);
    });
  });
}
const $e = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function et(e) {
  return e ? Object.keys(e).reduce((t, s) => {
    const l = e[s];
    return t[s] = tt(s, l), t;
  }, {}) : {};
}
function tt(e, t) {
  return typeof t == "number" && !$e.includes(e) ? t + "px" : t;
}
function M(e) {
  const t = [], s = e.cloneNode(!1);
  if (e._reactElement) {
    const o = v.Children.toArray(e._reactElement.props.children).map((n) => {
      if (v.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = M(n.props.el);
        return v.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...v.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(A(v.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: o
    }), s)), {
      clonedElement: s,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((o) => {
    e.getEventListeners(o).forEach(({
      listener: r,
      type: i,
      useCapture: u
    }) => {
      s.addEventListener(i, r, u);
    });
  });
  const l = Array.from(e.childNodes);
  for (let o = 0; o < l.length; o++) {
    const n = l[o];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = M(n);
      t.push(...i), s.appendChild(r);
    } else n.nodeType === 3 && s.appendChild(n.cloneNode());
  }
  return {
    clonedElement: s,
    portals: t
  };
}
function nt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const P = oe(({
  slot: e,
  clone: t,
  className: s,
  style: l,
  observeAttributes: o
}, n) => {
  const r = se(), [i, u] = le([]), {
    forceClone: _
  } = fe(), h = _ ? !0 : t;
  return ie(() => {
    var w;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let a = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (a = c.children[0], a.tagName.toLowerCase() === "react-portal-target" && a.children[0] && (a = a.children[0])), nt(n, a), s && a.classList.add(...s.split(" ")), l) {
        const m = et(l);
        Object.keys(m).forEach((E) => {
          a.style[E] = m[E];
        });
      }
    }
    let f = null, x = null;
    if (h && window.MutationObserver) {
      let a = function() {
        var d, y, p;
        (d = r.current) != null && d.contains(c) && ((y = r.current) == null || y.removeChild(c));
        const {
          portals: E,
          clonedElement: S
        } = M(e);
        c = S, u(E), c.style.display = "contents", x && clearTimeout(x), x = setTimeout(() => {
          g();
        }, 50), (p = r.current) == null || p.appendChild(c);
      };
      a();
      const m = Se(() => {
        a(), f == null || f.disconnect(), f == null || f.observe(e, {
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
      c.style.display = "contents", g(), (w = r.current) == null || w.appendChild(c);
    return () => {
      var a, m;
      c.style.display = "", (a = r.current) != null && a.contains(c) && ((m = r.current) == null || m.removeChild(c)), f == null || f.disconnect();
    };
  }, [e, h, s, l, n, o, _]), v.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
}), rt = ({
  children: e,
  ...t
}) => /* @__PURE__ */ b.jsx(b.Fragment, {
  children: e(t)
});
function ot(e) {
  return v.createElement(rt, {
    children: e
  });
}
function re(e, t, s) {
  const l = e.filter(Boolean);
  if (l.length !== 0)
    return l.map((o, n) => {
      var _;
      if (typeof o != "object")
        return o;
      const r = {
        ...o.props,
        key: ((_ = o.props) == null ? void 0 : _.key) ?? (s ? `${s}-${n}` : `${n}`)
      };
      let i = r;
      Object.keys(o.slots).forEach((h) => {
        if (!o.slots[h] || !(o.slots[h] instanceof Element) && !o.slots[h].el)
          return;
        const c = h.split(".");
        c.forEach((m, E) => {
          i[m] || (i[m] = {}), E !== c.length - 1 && (i = r[m]);
        });
        const g = o.slots[h];
        let f, x, w = !1, a = t == null ? void 0 : t.forceClone;
        g instanceof Element ? f = g : (f = g.el, x = g.callback, w = g.clone ?? w, a = g.forceClone ?? a), a = a ?? !!x, i[c[c.length - 1]] = f ? x ? (...m) => (x(c[c.length - 1], m), /* @__PURE__ */ b.jsx(U, {
          ...o.ctx,
          params: m,
          forceClone: a,
          children: /* @__PURE__ */ b.jsx(P, {
            slot: f,
            clone: w
          })
        })) : ot((m) => /* @__PURE__ */ b.jsx(U, {
          ...o.ctx,
          forceClone: a,
          children: /* @__PURE__ */ b.jsx(P, {
            ...m,
            slot: f,
            clone: w
          })
        })) : i[c[c.length - 1]], i = r;
      });
      const u = "children";
      return o[u] && (r[u] = re(o[u], t, `${n}`)), r;
    });
}
const {
  withItemsContextProvider: st,
  useItems: lt,
  ItemHandler: at
} = pe("antd-descriptions-items"), ut = Ze(st(["default", "items"], ({
  slots: e,
  items: t,
  children: s,
  ...l
}) => {
  const {
    items: o
  } = lt(), n = o.items.length > 0 ? o.items : o.default;
  return /* @__PURE__ */ b.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ b.jsx("div", {
      style: {
        display: "none"
      },
      children: s
    }), /* @__PURE__ */ b.jsx(me, {
      ...l,
      extra: e.extra ? /* @__PURE__ */ b.jsx(P, {
        slot: e.extra
      }) : l.extra,
      title: e.title ? /* @__PURE__ */ b.jsx(P, {
        slot: e.title
      }) : l.title,
      items: ce(() => t || re(n), [t, n])
    })]
  });
}));
export {
  ut as Descriptions,
  ut as default
};
