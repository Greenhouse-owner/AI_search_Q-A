import { i as se, a as W, r as le, w as O, g as ce } from "./Index-jynfLHrs.js";
const v = window.ms_globals.React, ne = window.ms_globals.React.forwardRef, re = window.ms_globals.React.useRef, oe = window.ms_globals.React.useState, ie = window.ms_globals.React.useEffect, A = window.ms_globals.ReactDOM.createPortal, ae = window.ms_globals.internalContext.useContextPropsContext, ue = window.ms_globals.antd.FloatButton;
var de = /\s/;
function fe(e) {
  for (var t = e.length; t-- && de.test(e.charAt(t)); )
    ;
  return t;
}
var me = /^\s+/;
function pe(e) {
  return e && e.slice(0, fe(e) + 1).replace(me, "");
}
var M = NaN, _e = /^[-+]0x[0-9a-f]+$/i, he = /^0b[01]+$/i, ge = /^0o[0-7]+$/i, be = parseInt;
function U(e) {
  if (typeof e == "number")
    return e;
  if (se(e))
    return M;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = pe(e);
  var o = he.test(e);
  return o || ge.test(e) ? be(e.slice(2), o ? 2 : 8) : _e.test(e) ? M : +e;
}
var j = function() {
  return le.Date.now();
}, ye = "Expected a function", we = Math.max, Ee = Math.min;
function ve(e, t, o) {
  var i, s, n, r, l, d, _ = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ye);
  t = U(t) || 0, W(o) && (h = !!o.leading, c = "maxWait" in o, n = c ? we(U(o.maxWait) || 0, t) : n, g = "trailing" in o ? !!o.trailing : g);
  function m(u) {
    var y = i, T = s;
    return i = s = void 0, _ = u, r = e.apply(T, y), r;
  }
  function E(u) {
    return _ = u, l = setTimeout(p, t), h ? m(u) : r;
  }
  function x(u) {
    var y = u - d, T = u - _, D = t - y;
    return c ? Ee(D, n - T) : D;
  }
  function f(u) {
    var y = u - d, T = u - _;
    return d === void 0 || y >= t || y < 0 || c && T >= n;
  }
  function p() {
    var u = j();
    if (f(u))
      return b(u);
    l = setTimeout(p, x(u));
  }
  function b(u) {
    return l = void 0, g && i ? m(u) : (i = s = void 0, r);
  }
  function S() {
    l !== void 0 && clearTimeout(l), _ = 0, i = d = s = l = void 0;
  }
  function a() {
    return l === void 0 ? r : b(j());
  }
  function C() {
    var u = j(), y = f(u);
    if (i = arguments, s = this, d = u, y) {
      if (l === void 0)
        return E(d);
      if (c)
        return clearTimeout(l), l = setTimeout(p, t), m(d);
    }
    return l === void 0 && (l = setTimeout(p, t)), r;
  }
  return C.cancel = S, C.flush = a, C;
}
var Y = {
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
var xe = v, Ce = Symbol.for("react.element"), Ie = Symbol.for("react.fragment"), Se = Object.prototype.hasOwnProperty, Te = xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Re = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Q(e, t, o) {
  var i, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (i in t) Se.call(t, i) && !Re.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: Ce,
    type: e,
    key: n,
    ref: r,
    props: s,
    _owner: Te.current
  };
}
L.Fragment = Ie;
L.jsx = Q;
L.jsxs = Q;
Y.exports = L;
var w = Y.exports;
const {
  SvelteComponent: Oe,
  assign: z,
  binding_callbacks: G,
  check_outros: ke,
  children: Z,
  claim_element: $,
  claim_space: Pe,
  component_subscribe: H,
  compute_slots: Le,
  create_slot: je,
  detach: I,
  element: ee,
  empty: K,
  exclude_internal_props: q,
  get_all_dirty_from_scope: Ne,
  get_slot_changes: Ae,
  group_outros: We,
  init: Fe,
  insert_hydration: k,
  safe_not_equal: Be,
  set_custom_element_data: te,
  space: De,
  transition_in: P,
  transition_out: F,
  update_slot_base: Me
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ue,
  getContext: ze,
  onDestroy: Ge,
  setContext: He
} = window.__gradio__svelte__internal;
function V(e) {
  let t, o;
  const i = (
    /*#slots*/
    e[7].default
  ), s = je(
    i,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ee("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      t = $(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = Z(t);
      s && s.l(r), r.forEach(I), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      k(n, t, r), s && s.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && Me(
        s,
        i,
        n,
        /*$$scope*/
        n[6],
        o ? Ae(
          i,
          /*$$scope*/
          n[6],
          r,
          null
        ) : Ne(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (P(s, n), o = !0);
    },
    o(n) {
      F(s, n), o = !1;
    },
    d(n) {
      n && I(t), s && s.d(n), e[9](null);
    }
  };
}
function Ke(e) {
  let t, o, i, s, n = (
    /*$$slots*/
    e[4].default && V(e)
  );
  return {
    c() {
      t = ee("react-portal-target"), o = De(), n && n.c(), i = K(), this.h();
    },
    l(r) {
      t = $(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), Z(t).forEach(I), o = Pe(r), n && n.l(r), i = K(), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      k(r, t, l), e[8](t), k(r, o, l), n && n.m(r, l), k(r, i, l), s = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && P(n, 1)) : (n = V(r), n.c(), P(n, 1), n.m(i.parentNode, i)) : n && (We(), F(n, 1, 1, () => {
        n = null;
      }), ke());
    },
    i(r) {
      s || (P(n), s = !0);
    },
    o(r) {
      F(n), s = !1;
    },
    d(r) {
      r && (I(t), I(o), I(i)), e[8](null), n && n.d(r);
    }
  };
}
function J(e) {
  const {
    svelteInit: t,
    ...o
  } = e;
  return o;
}
function qe(e, t, o) {
  let i, s, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Le(n);
  let {
    svelteInit: d
  } = t;
  const _ = O(J(t)), h = O();
  H(e, h, (a) => o(0, i = a));
  const c = O();
  H(e, c, (a) => o(1, s = a));
  const g = [], m = ze("$$ms-gr-react-wrapper"), {
    slotKey: E,
    slotIndex: x,
    subSlotIndex: f
  } = ce() || {}, p = d({
    parent: m,
    props: _,
    target: h,
    slot: c,
    slotKey: E,
    slotIndex: x,
    subSlotIndex: f,
    onDestroy(a) {
      g.push(a);
    }
  });
  He("$$ms-gr-react-wrapper", p), Ue(() => {
    _.set(J(t));
  }), Ge(() => {
    g.forEach((a) => a());
  });
  function b(a) {
    G[a ? "unshift" : "push"](() => {
      i = a, h.set(i);
    });
  }
  function S(a) {
    G[a ? "unshift" : "push"](() => {
      s = a, c.set(s);
    });
  }
  return e.$$set = (a) => {
    o(17, t = z(z({}, t), q(a))), "svelteInit" in a && o(5, d = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = q(t), [i, s, h, c, l, d, r, n, b, S];
}
class Ve extends Oe {
  constructor(t) {
    super(), Fe(this, t, qe, Ke, Be, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: et
} = window.__gradio__svelte__internal, X = window.ms_globals.rerender, N = window.ms_globals.tree;
function Je(e, t = {}) {
  function o(i) {
    const s = O(), n = new Ve({
      ...i,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const l = {
            key: window.ms_globals.autokey,
            svelteInstance: s,
            reactComponent: e,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: t.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, d = r.parent ?? N;
          return d.nodes = [...d.nodes, l], X({
            createPortal: A,
            node: N
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((_) => _.svelteInstance !== s), X({
              createPortal: A,
              node: N
            });
          }), l;
        },
        ...i.props
      }
    });
    return s.set(n), n;
  }
  return new Promise((i) => {
    window.ms_globals.initializePromise.then(() => {
      i(o);
    });
  });
}
const Xe = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Ye(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const i = e[o];
    return t[o] = Qe(o, i), t;
  }, {}) : {};
}
function Qe(e, t) {
  return typeof t == "number" && !Xe.includes(e) ? t + "px" : t;
}
function B(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = v.Children.toArray(e._reactElement.props.children).map((n) => {
      if (v.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = B(n.props.el);
        return v.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...v.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(A(v.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: s
    }), o)), {
      clonedElement: o,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((s) => {
    e.getEventListeners(s).forEach(({
      listener: r,
      type: l,
      useCapture: d
    }) => {
      o.addEventListener(l, r, d);
    });
  });
  const i = Array.from(e.childNodes);
  for (let s = 0; s < i.length; s++) {
    const n = i[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: l
      } = B(n);
      t.push(...l), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function Ze(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const R = ne(({
  slot: e,
  clone: t,
  className: o,
  style: i,
  observeAttributes: s
}, n) => {
  const r = re(), [l, d] = oe([]), {
    forceClone: _
  } = ae(), h = _ ? !0 : t;
  return ie(() => {
    var x;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), Ze(n, f), o && f.classList.add(...o.split(" ")), i) {
        const p = Ye(i);
        Object.keys(p).forEach((b) => {
          f.style[b] = p[b];
        });
      }
    }
    let m = null, E = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var a, C, u;
        (a = r.current) != null && a.contains(c) && ((C = r.current) == null || C.removeChild(c));
        const {
          portals: b,
          clonedElement: S
        } = B(e);
        c = S, d(b), c.style.display = "contents", E && clearTimeout(E), E = setTimeout(() => {
          g();
        }, 50), (u = r.current) == null || u.appendChild(c);
      };
      f();
      const p = ve(() => {
        f(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(p), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", g(), (x = r.current) == null || x.appendChild(c);
    return () => {
      var f, p;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((p = r.current) == null || p.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, h, o, i, n, s, _]), v.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
}), tt = Je(({
  slots: e,
  children: t,
  ...o
}) => {
  var i;
  return /* @__PURE__ */ w.jsxs(w.Fragment, {
    children: [/* @__PURE__ */ w.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ w.jsx(ue, {
      ...o,
      icon: e.icon ? /* @__PURE__ */ w.jsx(R, {
        clone: !0,
        slot: e.icon
      }) : o.icon,
      description: e.description ? /* @__PURE__ */ w.jsx(R, {
        clone: !0,
        slot: e.description
      }) : o.description,
      tooltip: e.tooltip ? /* @__PURE__ */ w.jsx(R, {
        clone: !0,
        slot: e.tooltip
      }) : o.tooltip,
      badge: {
        ...o.badge,
        count: e["badge.count"] ? /* @__PURE__ */ w.jsx(R, {
          slot: e["badge.count"]
        }) : (i = o.badge) == null ? void 0 : i.count
      }
    })]
  });
});
export {
  tt as FloatButton,
  tt as default
};
