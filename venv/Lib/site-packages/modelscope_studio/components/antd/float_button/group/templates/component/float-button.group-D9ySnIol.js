import { i as le, a as W, r as ce, w as k, g as ae, c as ue } from "./Index-CQyhgP2M.js";
const E = window.ms_globals.React, ne = window.ms_globals.React.forwardRef, re = window.ms_globals.React.useRef, oe = window.ms_globals.React.useState, se = window.ms_globals.React.useEffect, ie = window.ms_globals.React.useMemo, A = window.ms_globals.ReactDOM.createPortal, de = window.ms_globals.internalContext.useContextPropsContext, fe = window.ms_globals.antd.theme, me = window.ms_globals.antd.FloatButton;
var pe = /\s/;
function _e(e) {
  for (var t = e.length; t-- && pe.test(e.charAt(t)); )
    ;
  return t;
}
var he = /^\s+/;
function ge(e) {
  return e && e.slice(0, _e(e) + 1).replace(he, "");
}
var D = NaN, be = /^[-+]0x[0-9a-f]+$/i, ye = /^0b[01]+$/i, we = /^0o[0-7]+$/i, Ee = parseInt;
function G(e) {
  if (typeof e == "number")
    return e;
  if (le(e))
    return D;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ge(e);
  var s = ye.test(e);
  return s || we.test(e) ? Ee(e.slice(2), s ? 2 : 8) : be.test(e) ? D : +e;
}
var j = function() {
  return ce.Date.now();
}, Ce = "Expected a function", xe = Math.max, ve = Math.min;
function Ie(e, t, s) {
  var i, o, n, r, l, u, p = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Ce);
  t = G(t) || 0, W(s) && (h = !!s.leading, c = "maxWait" in s, n = c ? xe(G(s.maxWait) || 0, t) : n, g = "trailing" in s ? !!s.trailing : g);
  function m(d) {
    var w = i, R = o;
    return i = o = void 0, p = d, r = e.apply(R, w), r;
  }
  function C(d) {
    return p = d, l = setTimeout(_, t), h ? m(d) : r;
  }
  function x(d) {
    var w = d - u, R = d - p, B = t - w;
    return c ? ve(B, n - R) : B;
  }
  function f(d) {
    var w = d - u, R = d - p;
    return u === void 0 || w >= t || w < 0 || c && R >= n;
  }
  function _() {
    var d = j();
    if (f(d))
      return b(d);
    l = setTimeout(_, x(d));
  }
  function b(d) {
    return l = void 0, g && i ? m(d) : (i = o = void 0, r);
  }
  function S() {
    l !== void 0 && clearTimeout(l), p = 0, i = u = o = l = void 0;
  }
  function a() {
    return l === void 0 ? r : b(j());
  }
  function v() {
    var d = j(), w = f(d);
    if (i = arguments, o = this, u = d, w) {
      if (l === void 0)
        return C(u);
      if (c)
        return clearTimeout(l), l = setTimeout(_, t), m(u);
    }
    return l === void 0 && (l = setTimeout(_, t)), r;
  }
  return v.cancel = S, v.flush = a, v;
}
var Y = {
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
var Se = E, Re = Symbol.for("react.element"), Te = Symbol.for("react.fragment"), ke = Object.prototype.hasOwnProperty, Oe = Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Q(e, t, s) {
  var i, o = {}, n = null, r = null;
  s !== void 0 && (n = "" + s), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (i in t) ke.call(t, i) && !Le.hasOwnProperty(i) && (o[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) o[i] === void 0 && (o[i] = t[i]);
  return {
    $$typeof: Re,
    type: e,
    key: n,
    ref: r,
    props: o,
    _owner: Oe.current
  };
}
P.Fragment = Te;
P.jsx = Q;
P.jsxs = Q;
Y.exports = P;
var y = Y.exports;
const {
  SvelteComponent: Pe,
  assign: U,
  binding_callbacks: z,
  check_outros: je,
  children: Z,
  claim_element: $,
  claim_space: Ne,
  component_subscribe: H,
  compute_slots: Ae,
  create_slot: We,
  detach: I,
  element: ee,
  empty: K,
  exclude_internal_props: q,
  get_all_dirty_from_scope: Fe,
  get_slot_changes: Me,
  group_outros: Be,
  init: De,
  insert_hydration: O,
  safe_not_equal: Ge,
  set_custom_element_data: te,
  space: Ue,
  transition_in: L,
  transition_out: F,
  update_slot_base: ze
} = window.__gradio__svelte__internal, {
  beforeUpdate: He,
  getContext: Ke,
  onDestroy: qe,
  setContext: Ve
} = window.__gradio__svelte__internal;
function V(e) {
  let t, s;
  const i = (
    /*#slots*/
    e[7].default
  ), o = We(
    i,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ee("svelte-slot"), o && o.c(), this.h();
    },
    l(n) {
      t = $(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = Z(t);
      o && o.l(r), r.forEach(I), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      O(n, t, r), o && o.m(t, null), e[9](t), s = !0;
    },
    p(n, r) {
      o && o.p && (!s || r & /*$$scope*/
      64) && ze(
        o,
        i,
        n,
        /*$$scope*/
        n[6],
        s ? Me(
          i,
          /*$$scope*/
          n[6],
          r,
          null
        ) : Fe(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      s || (L(o, n), s = !0);
    },
    o(n) {
      F(o, n), s = !1;
    },
    d(n) {
      n && I(t), o && o.d(n), e[9](null);
    }
  };
}
function Je(e) {
  let t, s, i, o, n = (
    /*$$slots*/
    e[4].default && V(e)
  );
  return {
    c() {
      t = ee("react-portal-target"), s = Ue(), n && n.c(), i = K(), this.h();
    },
    l(r) {
      t = $(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), Z(t).forEach(I), s = Ne(r), n && n.l(r), i = K(), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      O(r, t, l), e[8](t), O(r, s, l), n && n.m(r, l), O(r, i, l), o = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && L(n, 1)) : (n = V(r), n.c(), L(n, 1), n.m(i.parentNode, i)) : n && (Be(), F(n, 1, 1, () => {
        n = null;
      }), je());
    },
    i(r) {
      o || (L(n), o = !0);
    },
    o(r) {
      F(n), o = !1;
    },
    d(r) {
      r && (I(t), I(s), I(i)), e[8](null), n && n.d(r);
    }
  };
}
function J(e) {
  const {
    svelteInit: t,
    ...s
  } = e;
  return s;
}
function Xe(e, t, s) {
  let i, o, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Ae(n);
  let {
    svelteInit: u
  } = t;
  const p = k(J(t)), h = k();
  H(e, h, (a) => s(0, i = a));
  const c = k();
  H(e, c, (a) => s(1, o = a));
  const g = [], m = Ke("$$ms-gr-react-wrapper"), {
    slotKey: C,
    slotIndex: x,
    subSlotIndex: f
  } = ae() || {}, _ = u({
    parent: m,
    props: p,
    target: h,
    slot: c,
    slotKey: C,
    slotIndex: x,
    subSlotIndex: f,
    onDestroy(a) {
      g.push(a);
    }
  });
  Ve("$$ms-gr-react-wrapper", _), He(() => {
    p.set(J(t));
  }), qe(() => {
    g.forEach((a) => a());
  });
  function b(a) {
    z[a ? "unshift" : "push"](() => {
      i = a, h.set(i);
    });
  }
  function S(a) {
    z[a ? "unshift" : "push"](() => {
      o = a, c.set(o);
    });
  }
  return e.$$set = (a) => {
    s(17, t = U(U({}, t), q(a))), "svelteInit" in a && s(5, u = a.svelteInit), "$$scope" in a && s(6, r = a.$$scope);
  }, t = q(t), [i, o, h, c, l, u, r, n, b, S];
}
class Ye extends Pe {
  constructor(t) {
    super(), De(this, t, Xe, Je, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ot
} = window.__gradio__svelte__internal, X = window.ms_globals.rerender, N = window.ms_globals.tree;
function Qe(e, t = {}) {
  function s(i) {
    const o = k(), n = new Ye({
      ...i,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const l = {
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
          return u.nodes = [...u.nodes, l], X({
            createPortal: A,
            node: N
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((p) => p.svelteInstance !== o), X({
              createPortal: A,
              node: N
            });
          }), l;
        },
        ...i.props
      }
    });
    return o.set(n), n;
  }
  return new Promise((i) => {
    window.ms_globals.initializePromise.then(() => {
      i(s);
    });
  });
}
const Ze = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function $e(e) {
  return e ? Object.keys(e).reduce((t, s) => {
    const i = e[s];
    return t[s] = et(s, i), t;
  }, {}) : {};
}
function et(e, t) {
  return typeof t == "number" && !Ze.includes(e) ? t + "px" : t;
}
function M(e) {
  const t = [], s = e.cloneNode(!1);
  if (e._reactElement) {
    const o = E.Children.toArray(e._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = M(n.props.el);
        return E.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...E.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(A(E.cloneElement(e._reactElement, {
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
      type: l,
      useCapture: u
    }) => {
      s.addEventListener(l, r, u);
    });
  });
  const i = Array.from(e.childNodes);
  for (let o = 0; o < i.length; o++) {
    const n = i[o];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: l
      } = M(n);
      t.push(...l), s.appendChild(r);
    } else n.nodeType === 3 && s.appendChild(n.cloneNode());
  }
  return {
    clonedElement: s,
    portals: t
  };
}
function tt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const T = ne(({
  slot: e,
  clone: t,
  className: s,
  style: i,
  observeAttributes: o
}, n) => {
  const r = re(), [l, u] = oe([]), {
    forceClone: p
  } = de(), h = p ? !0 : t;
  return se(() => {
    var x;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), tt(n, f), s && f.classList.add(...s.split(" ")), i) {
        const _ = $e(i);
        Object.keys(_).forEach((b) => {
          f.style[b] = _[b];
        });
      }
    }
    let m = null, C = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var a, v, d;
        (a = r.current) != null && a.contains(c) && ((v = r.current) == null || v.removeChild(c));
        const {
          portals: b,
          clonedElement: S
        } = M(e);
        c = S, u(b), c.style.display = "contents", C && clearTimeout(C), C = setTimeout(() => {
          g();
        }, 50), (d = r.current) == null || d.appendChild(c);
      };
      f();
      const _ = Ie(() => {
        f(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(_), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", g(), (x = r.current) == null || x.appendChild(c);
    return () => {
      var f, _;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((_ = r.current) == null || _.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, h, s, i, n, o, p]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
});
function nt(e) {
  return ie(() => {
    const t = E.Children.toArray(e), s = [], i = [];
    return t.forEach((o) => {
      o.props.node && o.props.nodeSlotKey ? s.push(o) : i.push(o);
    }), [s, i];
  }, [e]);
}
const st = Qe(({
  children: e,
  slots: t,
  style: s,
  shape: i = "circle",
  className: o,
  ...n
}) => {
  var p;
  const {
    token: r
  } = fe.useToken(), [l, u] = nt(e);
  return /* @__PURE__ */ y.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ y.jsx("div", {
      style: {
        display: "none"
      },
      children: l
    }), /* @__PURE__ */ y.jsx(me.Group, {
      ...n,
      shape: i,
      className: ue(o, `ms-gr-antd-float-button-group-${i}`),
      style: {
        ...s,
        "--ms-gr-antd-border-radius-lg": r.borderRadiusLG + "px"
      },
      closeIcon: t.closeIcon ? /* @__PURE__ */ y.jsx(T, {
        clone: !0,
        slot: t.closeIcon
      }) : n.closeIcon,
      icon: t.icon ? /* @__PURE__ */ y.jsx(T, {
        clone: !0,
        slot: t.icon
      }) : n.icon,
      description: t.description ? /* @__PURE__ */ y.jsx(T, {
        clone: !0,
        slot: t.description
      }) : n.description,
      tooltip: t.tooltip ? /* @__PURE__ */ y.jsx(T, {
        clone: !0,
        slot: t.tooltip
      }) : n.tooltip,
      badge: {
        ...n.badge,
        count: t["badge.count"] ? /* @__PURE__ */ y.jsx(T, {
          slot: t["badge.count"]
        }) : (p = n.badge) == null ? void 0 : p.count
      },
      children: u
    })]
  });
});
export {
  st as FloatButtonGroup,
  st as default
};
