import { i as ae, a as A, r as ue, w as O, g as de } from "./Index-CczqI7TF.js";
const C = window.ms_globals.React, oe = window.ms_globals.React.forwardRef, se = window.ms_globals.React.useRef, le = window.ms_globals.React.useState, ie = window.ms_globals.React.useEffect, ce = window.ms_globals.React.useMemo, N = window.ms_globals.ReactDOM.createPortal, fe = window.ms_globals.internalContext.useContextPropsContext, D = window.ms_globals.internalContext.ContextPropsProvider, me = window.ms_globals.internalContext.FormItemContext, pe = window.ms_globals.antd.Radio, _e = window.ms_globals.createItemsContext.createItemsContext;
var he = /\s/;
function ge(e) {
  for (var t = e.length; t-- && he.test(e.charAt(t)); )
    ;
  return t;
}
var be = /^\s+/;
function we(e) {
  return e && e.slice(0, ge(e) + 1).replace(be, "");
}
var G = NaN, xe = /^[-+]0x[0-9a-f]+$/i, Ee = /^0b[01]+$/i, ve = /^0o[0-7]+$/i, Ce = parseInt;
function U(e) {
  if (typeof e == "number")
    return e;
  if (ae(e))
    return G;
  if (A(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = A(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = we(e);
  var s = Ee.test(e);
  return s || ve.test(e) ? Ce(e.slice(2), s ? 2 : 8) : xe.test(e) ? G : +e;
}
var j = function() {
  return ue.Date.now();
}, ye = "Expected a function", Ie = Math.max, Se = Math.min;
function Re(e, t, s) {
  var l, o, n, r, i, u, _ = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ye);
  t = U(t) || 0, A(s) && (h = !!s.leading, c = "maxWait" in s, n = c ? Ie(U(s.maxWait) || 0, t) : n, g = "trailing" in s ? !!s.trailing : g);
  function f(p) {
    var v = l, R = o;
    return l = o = void 0, _ = p, r = e.apply(R, v), r;
  }
  function b(p) {
    return _ = p, i = setTimeout(m, t), h ? f(p) : r;
  }
  function w(p) {
    var v = p - u, R = p - _, M = t - v;
    return c ? Se(M, n - R) : M;
  }
  function a(p) {
    var v = p - u, R = p - _;
    return u === void 0 || v >= t || v < 0 || c && R >= n;
  }
  function m() {
    var p = j();
    if (a(p))
      return x(p);
    i = setTimeout(m, w(p));
  }
  function x(p) {
    return i = void 0, g && l ? f(p) : (l = o = void 0, r);
  }
  function S() {
    i !== void 0 && clearTimeout(i), _ = 0, l = u = o = i = void 0;
  }
  function d() {
    return i === void 0 ? r : x(j());
  }
  function y() {
    var p = j(), v = a(p);
    if (l = arguments, o = this, u = p, v) {
      if (i === void 0)
        return b(u);
      if (c)
        return clearTimeout(i), i = setTimeout(m, t), f(u);
    }
    return i === void 0 && (i = setTimeout(m, t)), r;
  }
  return y.cancel = S, y.flush = d, y;
}
var Q = {
  exports: {}
}, P = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe = C, Te = Symbol.for("react.element"), ke = Symbol.for("react.fragment"), Pe = Object.prototype.hasOwnProperty, je = Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Z(e, t, s) {
  var l, o = {}, n = null, r = null;
  s !== void 0 && (n = "" + s), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (l in t) Pe.call(t, l) && !Le.hasOwnProperty(l) && (o[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) o[l] === void 0 && (o[l] = t[l]);
  return {
    $$typeof: Te,
    type: e,
    key: n,
    ref: r,
    props: o,
    _owner: je.current
  };
}
P.Fragment = ke;
P.jsx = Z;
P.jsxs = Z;
Q.exports = P;
var E = Q.exports;
const {
  SvelteComponent: Ne,
  assign: B,
  binding_callbacks: H,
  check_outros: Ae,
  children: $,
  claim_element: ee,
  claim_space: We,
  component_subscribe: z,
  compute_slots: Fe,
  create_slot: Me,
  detach: I,
  element: te,
  empty: q,
  exclude_internal_props: V,
  get_all_dirty_from_scope: De,
  get_slot_changes: Ge,
  group_outros: Ue,
  init: Be,
  insert_hydration: T,
  safe_not_equal: He,
  set_custom_element_data: ne,
  space: ze,
  transition_in: k,
  transition_out: W,
  update_slot_base: qe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ve,
  getContext: Je,
  onDestroy: Xe,
  setContext: Ye
} = window.__gradio__svelte__internal;
function J(e) {
  let t, s;
  const l = (
    /*#slots*/
    e[7].default
  ), o = Me(
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
      64) && qe(
        o,
        l,
        n,
        /*$$scope*/
        n[6],
        s ? Ge(
          l,
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
      s || (k(o, n), s = !0);
    },
    o(n) {
      W(o, n), s = !1;
    },
    d(n) {
      n && I(t), o && o.d(n), e[9](null);
    }
  };
}
function Ke(e) {
  let t, s, l, o, n = (
    /*$$slots*/
    e[4].default && J(e)
  );
  return {
    c() {
      t = te("react-portal-target"), s = ze(), n && n.c(), l = q(), this.h();
    },
    l(r) {
      t = ee(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), $(t).forEach(I), s = We(r), n && n.l(r), l = q(), this.h();
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
      16 && k(n, 1)) : (n = J(r), n.c(), k(n, 1), n.m(l.parentNode, l)) : n && (Ue(), W(n, 1, 1, () => {
        n = null;
      }), Ae());
    },
    i(r) {
      o || (k(n), o = !0);
    },
    o(r) {
      W(n), o = !1;
    },
    d(r) {
      r && (I(t), I(s), I(l)), e[8](null), n && n.d(r);
    }
  };
}
function X(e) {
  const {
    svelteInit: t,
    ...s
  } = e;
  return s;
}
function Qe(e, t, s) {
  let l, o, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const i = Fe(n);
  let {
    svelteInit: u
  } = t;
  const _ = O(X(t)), h = O();
  z(e, h, (d) => s(0, l = d));
  const c = O();
  z(e, c, (d) => s(1, o = d));
  const g = [], f = Je("$$ms-gr-react-wrapper"), {
    slotKey: b,
    slotIndex: w,
    subSlotIndex: a
  } = de() || {}, m = u({
    parent: f,
    props: _,
    target: h,
    slot: c,
    slotKey: b,
    slotIndex: w,
    subSlotIndex: a,
    onDestroy(d) {
      g.push(d);
    }
  });
  Ye("$$ms-gr-react-wrapper", m), Ve(() => {
    _.set(X(t));
  }), Xe(() => {
    g.forEach((d) => d());
  });
  function x(d) {
    H[d ? "unshift" : "push"](() => {
      l = d, h.set(l);
    });
  }
  function S(d) {
    H[d ? "unshift" : "push"](() => {
      o = d, c.set(o);
    });
  }
  return e.$$set = (d) => {
    s(17, t = B(B({}, t), V(d))), "svelteInit" in d && s(5, u = d.svelteInit), "$$scope" in d && s(6, r = d.$$scope);
  }, t = V(t), [l, o, h, c, i, u, r, n, x, S];
}
class Ze extends Ne {
  constructor(t) {
    super(), Be(this, t, Qe, Ke, He, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: at
} = window.__gradio__svelte__internal, Y = window.ms_globals.rerender, L = window.ms_globals.tree;
function $e(e, t = {}) {
  function s(l) {
    const o = O(), n = new Ze({
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
          }, u = r.parent ?? L;
          return u.nodes = [...u.nodes, i], Y({
            createPortal: N,
            node: L
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((_) => _.svelteInstance !== o), Y({
              createPortal: N,
              node: L
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
const et = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function tt(e) {
  return e ? Object.keys(e).reduce((t, s) => {
    const l = e[s];
    return t[s] = nt(s, l), t;
  }, {}) : {};
}
function nt(e, t) {
  return typeof t == "number" && !et.includes(e) ? t + "px" : t;
}
function F(e) {
  const t = [], s = e.cloneNode(!1);
  if (e._reactElement) {
    const o = C.Children.toArray(e._reactElement.props.children).map((n) => {
      if (C.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = F(n.props.el);
        return C.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...C.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(N(C.cloneElement(e._reactElement, {
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
      } = F(n);
      t.push(...i), s.appendChild(r);
    } else n.nodeType === 3 && s.appendChild(n.cloneNode());
  }
  return {
    clonedElement: s,
    portals: t
  };
}
function rt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const K = oe(({
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
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (a = c.children[0], a.tagName.toLowerCase() === "react-portal-target" && a.children[0] && (a = a.children[0])), rt(n, a), s && a.classList.add(...s.split(" ")), l) {
        const m = tt(l);
        Object.keys(m).forEach((x) => {
          a.style[x] = m[x];
        });
      }
    }
    let f = null, b = null;
    if (h && window.MutationObserver) {
      let a = function() {
        var d, y, p;
        (d = r.current) != null && d.contains(c) && ((y = r.current) == null || y.removeChild(c));
        const {
          portals: x,
          clonedElement: S
        } = F(e);
        c = S, u(x), c.style.display = "contents", b && clearTimeout(b), b = setTimeout(() => {
          g();
        }, 50), (p = r.current) == null || p.appendChild(c);
      };
      a();
      const m = Re(() => {
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
  }, [e, h, s, l, n, o, _]), C.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
}), ot = ({
  children: e,
  ...t
}) => /* @__PURE__ */ E.jsx(E.Fragment, {
  children: e(t)
});
function st(e) {
  return C.createElement(ot, {
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
        c.forEach((m, x) => {
          i[m] || (i[m] = {}), x !== c.length - 1 && (i = r[m]);
        });
        const g = o.slots[h];
        let f, b, w = !1, a = t == null ? void 0 : t.forceClone;
        g instanceof Element ? f = g : (f = g.el, b = g.callback, w = g.clone ?? w, a = g.forceClone ?? a), a = a ?? !!b, i[c[c.length - 1]] = f ? b ? (...m) => (b(c[c.length - 1], m), /* @__PURE__ */ E.jsx(D, {
          ...o.ctx,
          params: m,
          forceClone: a,
          children: /* @__PURE__ */ E.jsx(K, {
            slot: f,
            clone: w
          })
        })) : st((m) => /* @__PURE__ */ E.jsx(D, {
          ...o.ctx,
          forceClone: a,
          children: /* @__PURE__ */ E.jsx(K, {
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
  withItemsContextProvider: lt,
  useItems: it,
  ItemHandler: ut
} = _e("antd-radio-group-options"), dt = $e(lt(["options"], ({
  onValueChange: e,
  onChange: t,
  elRef: s,
  options: l,
  children: o,
  ...n
}) => {
  const {
    items: {
      options: r
    }
  } = it();
  return /* @__PURE__ */ E.jsx(E.Fragment, {
    children: /* @__PURE__ */ E.jsx(pe.Group, {
      ...n,
      ref: s,
      options: ce(() => l || re(r), [r, l]),
      onChange: (i) => {
        t == null || t(i), e(i.target.value);
      },
      children: /* @__PURE__ */ E.jsx(me.Provider, {
        value: null,
        children: o
      })
    })
  });
}));
export {
  dt as RadioGroup,
  dt as default
};
