import { i as ie, a as W, r as le, w as R, g as ae } from "./Index-TYPmg1cN.js";
const E = window.ms_globals.React, ne = window.ms_globals.React.forwardRef, re = window.ms_globals.React.useRef, oe = window.ms_globals.React.useState, se = window.ms_globals.React.useEffect, A = window.ms_globals.ReactDOM.createPortal, ce = window.ms_globals.internalContext.useContextPropsContext, ue = window.ms_globals.antd.List;
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
var U = NaN, _e = /^[-+]0x[0-9a-f]+$/i, he = /^0b[01]+$/i, ge = /^0o[0-7]+$/i, be = parseInt;
function z(e) {
  if (typeof e == "number")
    return e;
  if (ie(e))
    return U;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = pe(e);
  var o = he.test(e);
  return o || ge.test(e) ? be(e.slice(2), o ? 2 : 8) : _e.test(e) ? U : +e;
}
var P = function() {
  return le.Date.now();
}, we = "Expected a function", ve = Math.max, ye = Math.min;
function Ee(e, t, o) {
  var i, s, n, r, l, d, _ = 0, h = !1, a = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(we);
  t = z(t) || 0, W(o) && (h = !!o.leading, a = "maxWait" in o, n = a ? ve(z(o.maxWait) || 0, t) : n, g = "trailing" in o ? !!o.trailing : g);
  function m(u) {
    var w = i, T = s;
    return i = s = void 0, _ = u, r = e.apply(T, w), r;
  }
  function y(u) {
    return _ = u, l = setTimeout(p, t), h ? m(u) : r;
  }
  function x(u) {
    var w = u - d, T = u - _, D = t - w;
    return a ? ye(D, n - T) : D;
  }
  function f(u) {
    var w = u - d, T = u - _;
    return d === void 0 || w >= t || w < 0 || a && T >= n;
  }
  function p() {
    var u = P();
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
  function c() {
    return l === void 0 ? r : b(P());
  }
  function C() {
    var u = P(), w = f(u);
    if (i = arguments, s = this, d = u, w) {
      if (l === void 0)
        return y(d);
      if (a)
        return clearTimeout(l), l = setTimeout(p, t), m(d);
    }
    return l === void 0 && (l = setTimeout(p, t)), r;
  }
  return C.cancel = S, C.flush = c, C;
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
var xe = E, Ce = Symbol.for("react.element"), Ie = Symbol.for("react.fragment"), Se = Object.prototype.hasOwnProperty, Te = xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Re = {
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
var v = Y.exports;
const {
  SvelteComponent: Oe,
  assign: B,
  binding_callbacks: G,
  check_outros: ke,
  children: Z,
  claim_element: $,
  claim_space: Le,
  component_subscribe: H,
  compute_slots: Pe,
  create_slot: je,
  detach: I,
  element: ee,
  empty: K,
  exclude_internal_props: q,
  get_all_dirty_from_scope: Ne,
  get_slot_changes: Ae,
  group_outros: We,
  init: Me,
  insert_hydration: O,
  safe_not_equal: Fe,
  set_custom_element_data: te,
  space: De,
  transition_in: k,
  transition_out: M,
  update_slot_base: Ue
} = window.__gradio__svelte__internal, {
  beforeUpdate: ze,
  getContext: Be,
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
      o || (k(s, n), o = !0);
    },
    o(n) {
      M(s, n), o = !1;
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
      }), Z(t).forEach(I), o = Le(r), n && n.l(r), i = K(), this.h();
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
      16 && k(n, 1)) : (n = V(r), n.c(), k(n, 1), n.m(i.parentNode, i)) : n && (We(), M(n, 1, 1, () => {
        n = null;
      }), ke());
    },
    i(r) {
      s || (k(n), s = !0);
    },
    o(r) {
      M(n), s = !1;
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
  const l = Pe(n);
  let {
    svelteInit: d
  } = t;
  const _ = R(J(t)), h = R();
  H(e, h, (c) => o(0, i = c));
  const a = R();
  H(e, a, (c) => o(1, s = c));
  const g = [], m = Be("$$ms-gr-react-wrapper"), {
    slotKey: y,
    slotIndex: x,
    subSlotIndex: f
  } = ae() || {}, p = d({
    parent: m,
    props: _,
    target: h,
    slot: a,
    slotKey: y,
    slotIndex: x,
    subSlotIndex: f,
    onDestroy(c) {
      g.push(c);
    }
  });
  He("$$ms-gr-react-wrapper", p), ze(() => {
    _.set(J(t));
  }), Ge(() => {
    g.forEach((c) => c());
  });
  function b(c) {
    G[c ? "unshift" : "push"](() => {
      i = c, h.set(i);
    });
  }
  function S(c) {
    G[c ? "unshift" : "push"](() => {
      s = c, a.set(s);
    });
  }
  return e.$$set = (c) => {
    o(17, t = B(B({}, t), q(c))), "svelteInit" in c && o(5, d = c.svelteInit), "$$scope" in c && o(6, r = c.$$scope);
  }, t = q(t), [i, s, h, a, l, d, r, n, b, S];
}
class Ve extends Oe {
  constructor(t) {
    super(), Me(this, t, qe, Ke, Fe, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: et
} = window.__gradio__svelte__internal, X = window.ms_globals.rerender, j = window.ms_globals.tree;
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
          }, d = r.parent ?? j;
          return d.nodes = [...d.nodes, l], X({
            createPortal: A,
            node: j
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((_) => _.svelteInstance !== s), X({
              createPortal: A,
              node: j
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
function F(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = E.Children.toArray(e._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = F(n.props.el);
        return E.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...E.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(A(E.cloneElement(e._reactElement, {
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
      } = F(n);
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
const N = ne(({
  slot: e,
  clone: t,
  className: o,
  style: i,
  observeAttributes: s
}, n) => {
  const r = re(), [l, d] = oe([]), {
    forceClone: _
  } = ce(), h = _ ? !0 : t;
  return se(() => {
    var x;
    if (!r.current || !e)
      return;
    let a = e;
    function g() {
      let f = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (f = a.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), Ze(n, f), o && f.classList.add(...o.split(" ")), i) {
        const p = Ye(i);
        Object.keys(p).forEach((b) => {
          f.style[b] = p[b];
        });
      }
    }
    let m = null, y = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var c, C, u;
        (c = r.current) != null && c.contains(a) && ((C = r.current) == null || C.removeChild(a));
        const {
          portals: b,
          clonedElement: S
        } = F(e);
        a = S, d(b), a.style.display = "contents", y && clearTimeout(y), y = setTimeout(() => {
          g();
        }, 50), (u = r.current) == null || u.appendChild(a);
      };
      f();
      const p = Ee(() => {
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
      a.style.display = "contents", g(), (x = r.current) == null || x.appendChild(a);
    return () => {
      var f, p;
      a.style.display = "", (f = r.current) != null && f.contains(a) && ((p = r.current) == null || p.removeChild(a)), m == null || m.disconnect();
    };
  }, [e, h, o, i, n, s, _]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
}), tt = Je(({
  slots: e,
  children: t,
  ...o
}) => /* @__PURE__ */ v.jsxs(v.Fragment, {
  children: [/* @__PURE__ */ v.jsx(v.Fragment, {
    children: t
  }), /* @__PURE__ */ v.jsx(ue.Item.Meta, {
    ...o,
    avatar: e.avatar ? /* @__PURE__ */ v.jsx(N, {
      slot: e.avatar
    }) : o.avatar,
    description: e.description ? /* @__PURE__ */ v.jsx(N, {
      slot: e.description
    }) : o.description,
    title: e.title ? /* @__PURE__ */ v.jsx(N, {
      slot: e.title
    }) : o.title
  })]
}));
export {
  tt as ListItemMeta,
  tt as default
};
