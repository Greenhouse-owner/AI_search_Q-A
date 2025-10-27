import { i as ie, a as j, r as le, w as R, g as ce } from "./Index-VjuuOc8H.js";
const w = window.ms_globals.React, ne = window.ms_globals.React.forwardRef, re = window.ms_globals.React.useRef, oe = window.ms_globals.React.useState, se = window.ms_globals.React.useEffect, N = window.ms_globals.ReactDOM.createPortal, ae = window.ms_globals.internalContext.useContextPropsContext, ue = window.ms_globals.antd.Avatar;
var de = /\s/;
function fe(e) {
  for (var t = e.length; t-- && de.test(e.charAt(t)); )
    ;
  return t;
}
var me = /^\s+/;
function _e(e) {
  return e && e.slice(0, fe(e) + 1).replace(me, "");
}
var M = NaN, pe = /^[-+]0x[0-9a-f]+$/i, he = /^0b[01]+$/i, ge = /^0o[0-7]+$/i, be = parseInt;
function U(e) {
  if (typeof e == "number")
    return e;
  if (ie(e))
    return M;
  if (j(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = j(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = _e(e);
  var o = he.test(e);
  return o || ge.test(e) ? be(e.slice(2), o ? 2 : 8) : pe.test(e) ? M : +e;
}
var L = function() {
  return le.Date.now();
}, ye = "Expected a function", ve = Math.max, we = Math.min;
function Ee(e, t, o) {
  var i, s, n, r, l, d, p = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ye);
  t = U(t) || 0, j(o) && (h = !!o.leading, c = "maxWait" in o, n = c ? ve(U(o.maxWait) || 0, t) : n, g = "trailing" in o ? !!o.trailing : g);
  function m(u) {
    var y = i, T = s;
    return i = s = void 0, p = u, r = e.apply(T, y), r;
  }
  function v(u) {
    return p = u, l = setTimeout(_, t), h ? m(u) : r;
  }
  function E(u) {
    var y = u - d, T = u - p, F = t - y;
    return c ? we(F, n - T) : F;
  }
  function f(u) {
    var y = u - d, T = u - p;
    return d === void 0 || y >= t || y < 0 || c && T >= n;
  }
  function _() {
    var u = L();
    if (f(u))
      return b(u);
    l = setTimeout(_, E(u));
  }
  function b(u) {
    return l = void 0, g && i ? m(u) : (i = s = void 0, r);
  }
  function S() {
    l !== void 0 && clearTimeout(l), p = 0, i = d = s = l = void 0;
  }
  function a() {
    return l === void 0 ? r : b(L());
  }
  function x() {
    var u = L(), y = f(u);
    if (i = arguments, s = this, d = u, y) {
      if (l === void 0)
        return v(d);
      if (c)
        return clearTimeout(l), l = setTimeout(_, t), m(d);
    }
    return l === void 0 && (l = setTimeout(_, t)), r;
  }
  return x.cancel = S, x.flush = a, x;
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
var xe = w, Ce = Symbol.for("react.element"), Ie = Symbol.for("react.fragment"), Se = Object.prototype.hasOwnProperty, Te = xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Re = {
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
P.Fragment = Ie;
P.jsx = Q;
P.jsxs = Q;
Y.exports = P;
var C = Y.exports;
const {
  SvelteComponent: Oe,
  assign: z,
  binding_callbacks: B,
  check_outros: ke,
  children: Z,
  claim_element: $,
  claim_space: Pe,
  component_subscribe: G,
  compute_slots: Le,
  create_slot: Ae,
  detach: I,
  element: ee,
  empty: H,
  exclude_internal_props: K,
  get_all_dirty_from_scope: Ne,
  get_slot_changes: je,
  group_outros: We,
  init: De,
  insert_hydration: O,
  safe_not_equal: Fe,
  set_custom_element_data: te,
  space: Me,
  transition_in: k,
  transition_out: W,
  update_slot_base: Ue
} = window.__gradio__svelte__internal, {
  beforeUpdate: ze,
  getContext: Be,
  onDestroy: Ge,
  setContext: He
} = window.__gradio__svelte__internal;
function q(e) {
  let t, o;
  const i = (
    /*#slots*/
    e[7].default
  ), s = Ae(
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
      O(n, t, r), s && s.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && Ue(
        s,
        i,
        n,
        /*$$scope*/
        n[6],
        o ? je(
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
      o || (k(s, n), o = !0);
    },
    o(n) {
      W(s, n), o = !1;
    },
    d(n) {
      n && I(t), s && s.d(n), e[9](null);
    }
  };
}
function Ke(e) {
  let t, o, i, s, n = (
    /*$$slots*/
    e[4].default && q(e)
  );
  return {
    c() {
      t = ee("react-portal-target"), o = Me(), n && n.c(), i = H(), this.h();
    },
    l(r) {
      t = $(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), Z(t).forEach(I), o = Pe(r), n && n.l(r), i = H(), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      O(r, t, l), e[8](t), O(r, o, l), n && n.m(r, l), O(r, i, l), s = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && k(n, 1)) : (n = q(r), n.c(), k(n, 1), n.m(i.parentNode, i)) : n && (We(), W(n, 1, 1, () => {
        n = null;
      }), ke());
    },
    i(r) {
      s || (k(n), s = !0);
    },
    o(r) {
      W(n), s = !1;
    },
    d(r) {
      r && (I(t), I(o), I(i)), e[8](null), n && n.d(r);
    }
  };
}
function V(e) {
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
  const p = R(V(t)), h = R();
  G(e, h, (a) => o(0, i = a));
  const c = R();
  G(e, c, (a) => o(1, s = a));
  const g = [], m = Be("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: E,
    subSlotIndex: f
  } = ce() || {}, _ = d({
    parent: m,
    props: p,
    target: h,
    slot: c,
    slotKey: v,
    slotIndex: E,
    subSlotIndex: f,
    onDestroy(a) {
      g.push(a);
    }
  });
  He("$$ms-gr-react-wrapper", _), ze(() => {
    p.set(V(t));
  }), Ge(() => {
    g.forEach((a) => a());
  });
  function b(a) {
    B[a ? "unshift" : "push"](() => {
      i = a, h.set(i);
    });
  }
  function S(a) {
    B[a ? "unshift" : "push"](() => {
      s = a, c.set(s);
    });
  }
  return e.$$set = (a) => {
    o(17, t = z(z({}, t), K(a))), "svelteInit" in a && o(5, d = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = K(t), [i, s, h, c, l, d, r, n, b, S];
}
class Ve extends Oe {
  constructor(t) {
    super(), De(this, t, qe, Ke, Fe, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: et
} = window.__gradio__svelte__internal, J = window.ms_globals.rerender, A = window.ms_globals.tree;
function Je(e, t = {}) {
  function o(i) {
    const s = R(), n = new Ve({
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
          }, d = r.parent ?? A;
          return d.nodes = [...d.nodes, l], J({
            createPortal: N,
            node: A
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((p) => p.svelteInstance !== s), J({
              createPortal: N,
              node: A
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
function D(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = w.Children.toArray(e._reactElement.props.children).map((n) => {
      if (w.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = D(n.props.el);
        return w.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...w.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(N(w.cloneElement(e._reactElement, {
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
      } = D(n);
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
const X = ne(({
  slot: e,
  clone: t,
  className: o,
  style: i,
  observeAttributes: s
}, n) => {
  const r = re(), [l, d] = oe([]), {
    forceClone: p
  } = ae(), h = p ? !0 : t;
  return se(() => {
    var E;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), Ze(n, f), o && f.classList.add(...o.split(" ")), i) {
        const _ = Ye(i);
        Object.keys(_).forEach((b) => {
          f.style[b] = _[b];
        });
      }
    }
    let m = null, v = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var a, x, u;
        (a = r.current) != null && a.contains(c) && ((x = r.current) == null || x.removeChild(c));
        const {
          portals: b,
          clonedElement: S
        } = D(e);
        c = S, d(b), c.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          g();
        }, 50), (u = r.current) == null || u.appendChild(c);
      };
      f();
      const _ = Ee(() => {
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
      c.style.display = "contents", g(), (E = r.current) == null || E.appendChild(c);
    return () => {
      var f, _;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((_ = r.current) == null || _.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, h, o, i, n, s, p]), w.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
}), tt = Je(({
  slots: e,
  children: t,
  ...o
}) => /* @__PURE__ */ C.jsxs(C.Fragment, {
  children: [/* @__PURE__ */ C.jsx("div", {
    style: {
      display: "none"
    },
    children: e.icon || e.src ? t : null
  }), /* @__PURE__ */ C.jsx(ue, {
    ...o,
    icon: e.icon ? /* @__PURE__ */ C.jsx(X, {
      slot: e.icon
    }) : o.icon,
    src: e.src ? /* @__PURE__ */ C.jsx(X, {
      slot: e.src
    }) : o.src || void 0,
    children: e.icon || e.src ? null : t
  })]
}));
export {
  tt as Avatar,
  tt as default
};
