import { i as ie, a as A, r as le, w as T, g as ce } from "./Index-B_kRI5A7.js";
const E = window.ms_globals.React, ne = window.ms_globals.React.forwardRef, re = window.ms_globals.React.useRef, oe = window.ms_globals.React.useState, se = window.ms_globals.React.useEffect, j = window.ms_globals.ReactDOM.createPortal, ae = window.ms_globals.internalContext.useContextPropsContext, de = window.ms_globals.antd.Switch;
var ue = /\s/;
function fe(e) {
  for (var t = e.length; t-- && ue.test(e.charAt(t)); )
    ;
  return t;
}
var me = /^\s+/;
function _e(e) {
  return e && e.slice(0, fe(e) + 1).replace(me, "");
}
var M = NaN, pe = /^[-+]0x[0-9a-f]+$/i, he = /^0b[01]+$/i, ge = /^0o[0-7]+$/i, we = parseInt;
function U(e) {
  if (typeof e == "number")
    return e;
  if (ie(e))
    return M;
  if (A(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = A(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = _e(e);
  var o = he.test(e);
  return o || ge.test(e) ? we(e.slice(2), o ? 2 : 8) : pe.test(e) ? M : +e;
}
var L = function() {
  return le.Date.now();
}, be = "Expected a function", ye = Math.max, Ee = Math.min;
function Ce(e, t, o) {
  var i, s, n, r, l, u, p = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(be);
  t = U(t) || 0, A(o) && (h = !!o.leading, c = "maxWait" in o, n = c ? ye(U(o.maxWait) || 0, t) : n, g = "trailing" in o ? !!o.trailing : g);
  function m(d) {
    var b = i, k = s;
    return i = s = void 0, p = d, r = e.apply(k, b), r;
  }
  function y(d) {
    return p = d, l = setTimeout(_, t), h ? m(d) : r;
  }
  function C(d) {
    var b = d - u, k = d - p, F = t - b;
    return c ? Ee(F, n - k) : F;
  }
  function f(d) {
    var b = d - u, k = d - p;
    return u === void 0 || b >= t || b < 0 || c && k >= n;
  }
  function _() {
    var d = L();
    if (f(d))
      return w(d);
    l = setTimeout(_, C(d));
  }
  function w(d) {
    return l = void 0, g && i ? m(d) : (i = s = void 0, r);
  }
  function S() {
    l !== void 0 && clearTimeout(l), p = 0, i = u = s = l = void 0;
  }
  function a() {
    return l === void 0 ? r : w(L());
  }
  function v() {
    var d = L(), b = f(d);
    if (i = arguments, s = this, u = d, b) {
      if (l === void 0)
        return y(u);
      if (c)
        return clearTimeout(l), l = setTimeout(_, t), m(u);
    }
    return l === void 0 && (l = setTimeout(_, t)), r;
  }
  return v.cancel = S, v.flush = a, v;
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
var ve = E, xe = Symbol.for("react.element"), Ie = Symbol.for("react.fragment"), Se = Object.prototype.hasOwnProperty, ke = ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Te = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Z(e, t, o) {
  var i, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (i in t) Se.call(t, i) && !Te.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: xe,
    type: e,
    key: n,
    ref: r,
    props: s,
    _owner: ke.current
  };
}
P.Fragment = Ie;
P.jsx = Z;
P.jsxs = Z;
Q.exports = P;
var x = Q.exports;
const {
  SvelteComponent: Re,
  assign: z,
  binding_callbacks: B,
  check_outros: Oe,
  children: V,
  claim_element: $,
  claim_space: Pe,
  component_subscribe: G,
  compute_slots: Le,
  create_slot: Ne,
  detach: I,
  element: ee,
  empty: H,
  exclude_internal_props: K,
  get_all_dirty_from_scope: je,
  get_slot_changes: Ae,
  group_outros: We,
  init: De,
  insert_hydration: R,
  safe_not_equal: Fe,
  set_custom_element_data: te,
  space: Me,
  transition_in: O,
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
  ), s = Ne(
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
      var r = V(t);
      s && s.l(r), r.forEach(I), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      R(n, t, r), s && s.m(t, null), e[9](t), o = !0;
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
        ) : je(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (O(s, n), o = !0);
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
      }), V(t).forEach(I), o = Pe(r), n && n.l(r), i = H(), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      R(r, t, l), e[8](t), R(r, o, l), n && n.m(r, l), R(r, i, l), s = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && O(n, 1)) : (n = q(r), n.c(), O(n, 1), n.m(i.parentNode, i)) : n && (We(), W(n, 1, 1, () => {
        n = null;
      }), Oe());
    },
    i(r) {
      s || (O(n), s = !0);
    },
    o(r) {
      W(n), s = !1;
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
    svelteInit: u
  } = t;
  const p = T(J(t)), h = T();
  G(e, h, (a) => o(0, i = a));
  const c = T();
  G(e, c, (a) => o(1, s = a));
  const g = [], m = Be("$$ms-gr-react-wrapper"), {
    slotKey: y,
    slotIndex: C,
    subSlotIndex: f
  } = ce() || {}, _ = u({
    parent: m,
    props: p,
    target: h,
    slot: c,
    slotKey: y,
    slotIndex: C,
    subSlotIndex: f,
    onDestroy(a) {
      g.push(a);
    }
  });
  He("$$ms-gr-react-wrapper", _), ze(() => {
    p.set(J(t));
  }), Ge(() => {
    g.forEach((a) => a());
  });
  function w(a) {
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
    o(17, t = z(z({}, t), K(a))), "svelteInit" in a && o(5, u = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = K(t), [i, s, h, c, l, u, r, n, w, S];
}
class Je extends Re {
  constructor(t) {
    super(), De(this, t, qe, Ke, Fe, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: et
} = window.__gradio__svelte__internal, X = window.ms_globals.rerender, N = window.ms_globals.tree;
function Xe(e, t = {}) {
  function o(i) {
    const s = T(), n = new Je({
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
          }, u = r.parent ?? N;
          return u.nodes = [...u.nodes, l], X({
            createPortal: j,
            node: N
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((p) => p.svelteInstance !== s), X({
              createPortal: j,
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
const Ye = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Qe(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const i = e[o];
    return t[o] = Ze(o, i), t;
  }, {}) : {};
}
function Ze(e, t) {
  return typeof t == "number" && !Ye.includes(e) ? t + "px" : t;
}
function D(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = E.Children.toArray(e._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = D(n.props.el);
        return E.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...E.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(j(E.cloneElement(e._reactElement, {
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
      useCapture: u
    }) => {
      o.addEventListener(l, r, u);
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
function Ve(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const Y = ne(({
  slot: e,
  clone: t,
  className: o,
  style: i,
  observeAttributes: s
}, n) => {
  const r = re(), [l, u] = oe([]), {
    forceClone: p
  } = ae(), h = p ? !0 : t;
  return se(() => {
    var C;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), Ve(n, f), o && f.classList.add(...o.split(" ")), i) {
        const _ = Qe(i);
        Object.keys(_).forEach((w) => {
          f.style[w] = _[w];
        });
      }
    }
    let m = null, y = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var a, v, d;
        (a = r.current) != null && a.contains(c) && ((v = r.current) == null || v.removeChild(c));
        const {
          portals: w,
          clonedElement: S
        } = D(e);
        c = S, u(w), c.style.display = "contents", y && clearTimeout(y), y = setTimeout(() => {
          g();
        }, 50), (d = r.current) == null || d.appendChild(c);
      };
      f();
      const _ = Ce(() => {
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
      c.style.display = "contents", g(), (C = r.current) == null || C.appendChild(c);
    return () => {
      var f, _;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((_ = r.current) == null || _.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, h, o, i, n, s, p]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
}), tt = Xe(({
  slots: e,
  children: t,
  onValueChange: o,
  onChange: i,
  ...s
}) => /* @__PURE__ */ x.jsxs(x.Fragment, {
  children: [/* @__PURE__ */ x.jsx("div", {
    style: {
      display: "none"
    },
    children: t
  }), /* @__PURE__ */ x.jsx(de, {
    ...s,
    onChange: (n, ...r) => {
      o == null || o(n), i == null || i(n, ...r);
    },
    checkedChildren: e.checkedChildren ? /* @__PURE__ */ x.jsx(Y, {
      slot: e.checkedChildren
    }) : s.checkedChildren,
    unCheckedChildren: e.unCheckedChildren ? /* @__PURE__ */ x.jsx(Y, {
      slot: e.unCheckedChildren
    }) : s.unCheckedChildren
  })]
}));
export {
  tt as Switch,
  tt as default
};
