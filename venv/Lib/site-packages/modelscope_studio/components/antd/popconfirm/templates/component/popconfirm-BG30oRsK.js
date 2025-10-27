import { i as ce, a as A, r as ae, w as k, g as ue, b as de } from "./Index-CKVSGo40.js";
const E = window.ms_globals.React, re = window.ms_globals.React.forwardRef, oe = window.ms_globals.React.useRef, ie = window.ms_globals.React.useState, se = window.ms_globals.React.useEffect, le = window.ms_globals.React.useMemo, N = window.ms_globals.ReactDOM.createPortal, fe = window.ms_globals.internalContext.useContextPropsContext, me = window.ms_globals.antd.Popconfirm;
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
var D = NaN, we = /^[-+]0x[0-9a-f]+$/i, be = /^0b[01]+$/i, xe = /^0o[0-7]+$/i, ye = parseInt;
function U(e) {
  if (typeof e == "number")
    return e;
  if (ce(e))
    return D;
  if (A(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = A(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ge(e);
  var o = be.test(e);
  return o || xe.test(e) ? ye(e.slice(2), o ? 2 : 8) : we.test(e) ? D : +e;
}
var j = function() {
  return ae.Date.now();
}, Ee = "Expected a function", ve = Math.max, Ce = Math.min;
function Te(e, t, o) {
  var s, i, n, r, l, u, _ = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Ee);
  t = U(t) || 0, A(o) && (h = !!o.leading, c = "maxWait" in o, n = c ? ve(U(o.maxWait) || 0, t) : n, g = "trailing" in o ? !!o.trailing : g);
  function m(d) {
    var b = s, S = i;
    return s = i = void 0, _ = d, r = e.apply(S, b), r;
  }
  function x(d) {
    return _ = d, l = setTimeout(p, t), h ? m(d) : r;
  }
  function v(d) {
    var b = d - u, S = d - _, M = t - b;
    return c ? Ce(M, n - S) : M;
  }
  function f(d) {
    var b = d - u, S = d - _;
    return u === void 0 || b >= t || b < 0 || c && S >= n;
  }
  function p() {
    var d = j();
    if (f(d))
      return w(d);
    l = setTimeout(p, v(d));
  }
  function w(d) {
    return l = void 0, g && s ? m(d) : (s = i = void 0, r);
  }
  function P() {
    l !== void 0 && clearTimeout(l), _ = 0, s = u = i = l = void 0;
  }
  function a() {
    return l === void 0 ? r : w(j());
  }
  function C() {
    var d = j(), b = f(d);
    if (s = arguments, i = this, u = d, b) {
      if (l === void 0)
        return x(u);
      if (c)
        return clearTimeout(l), l = setTimeout(p, t), m(u);
    }
    return l === void 0 && (l = setTimeout(p, t)), r;
  }
  return C.cancel = P, C.flush = a, C;
}
var Q = {
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
var Ie = E, Pe = Symbol.for("react.element"), Se = Symbol.for("react.fragment"), ke = Object.prototype.hasOwnProperty, Re = Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Oe = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Z(e, t, o) {
  var s, i = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (s in t) ke.call(t, s) && !Oe.hasOwnProperty(s) && (i[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) i[s] === void 0 && (i[s] = t[s]);
  return {
    $$typeof: Pe,
    type: e,
    key: n,
    ref: r,
    props: i,
    _owner: Re.current
  };
}
L.Fragment = Se;
L.jsx = Z;
L.jsxs = Z;
Q.exports = L;
var y = Q.exports;
const {
  SvelteComponent: Le,
  assign: z,
  binding_callbacks: G,
  check_outros: je,
  children: $,
  claim_element: ee,
  claim_space: Be,
  component_subscribe: H,
  compute_slots: Ne,
  create_slot: Ae,
  detach: I,
  element: te,
  empty: K,
  exclude_internal_props: q,
  get_all_dirty_from_scope: Fe,
  get_slot_changes: We,
  group_outros: Me,
  init: De,
  insert_hydration: R,
  safe_not_equal: Ue,
  set_custom_element_data: ne,
  space: ze,
  transition_in: O,
  transition_out: F,
  update_slot_base: Ge
} = window.__gradio__svelte__internal, {
  beforeUpdate: He,
  getContext: Ke,
  onDestroy: qe,
  setContext: Ve
} = window.__gradio__svelte__internal;
function V(e) {
  let t, o;
  const s = (
    /*#slots*/
    e[7].default
  ), i = Ae(
    s,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = te("svelte-slot"), i && i.c(), this.h();
    },
    l(n) {
      t = ee(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = $(t);
      i && i.l(r), r.forEach(I), this.h();
    },
    h() {
      ne(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      R(n, t, r), i && i.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      i && i.p && (!o || r & /*$$scope*/
      64) && Ge(
        i,
        s,
        n,
        /*$$scope*/
        n[6],
        o ? We(
          s,
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
      o || (O(i, n), o = !0);
    },
    o(n) {
      F(i, n), o = !1;
    },
    d(n) {
      n && I(t), i && i.d(n), e[9](null);
    }
  };
}
function Je(e) {
  let t, o, s, i, n = (
    /*$$slots*/
    e[4].default && V(e)
  );
  return {
    c() {
      t = te("react-portal-target"), o = ze(), n && n.c(), s = K(), this.h();
    },
    l(r) {
      t = ee(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), $(t).forEach(I), o = Be(r), n && n.l(r), s = K(), this.h();
    },
    h() {
      ne(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      R(r, t, l), e[8](t), R(r, o, l), n && n.m(r, l), R(r, s, l), i = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && O(n, 1)) : (n = V(r), n.c(), O(n, 1), n.m(s.parentNode, s)) : n && (Me(), F(n, 1, 1, () => {
        n = null;
      }), je());
    },
    i(r) {
      i || (O(n), i = !0);
    },
    o(r) {
      F(n), i = !1;
    },
    d(r) {
      r && (I(t), I(o), I(s)), e[8](null), n && n.d(r);
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
function Xe(e, t, o) {
  let s, i, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Ne(n);
  let {
    svelteInit: u
  } = t;
  const _ = k(J(t)), h = k();
  H(e, h, (a) => o(0, s = a));
  const c = k();
  H(e, c, (a) => o(1, i = a));
  const g = [], m = Ke("$$ms-gr-react-wrapper"), {
    slotKey: x,
    slotIndex: v,
    subSlotIndex: f
  } = ue() || {}, p = u({
    parent: m,
    props: _,
    target: h,
    slot: c,
    slotKey: x,
    slotIndex: v,
    subSlotIndex: f,
    onDestroy(a) {
      g.push(a);
    }
  });
  Ve("$$ms-gr-react-wrapper", p), He(() => {
    _.set(J(t));
  }), qe(() => {
    g.forEach((a) => a());
  });
  function w(a) {
    G[a ? "unshift" : "push"](() => {
      s = a, h.set(s);
    });
  }
  function P(a) {
    G[a ? "unshift" : "push"](() => {
      i = a, c.set(i);
    });
  }
  return e.$$set = (a) => {
    o(17, t = z(z({}, t), q(a))), "svelteInit" in a && o(5, u = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = q(t), [s, i, h, c, l, u, r, n, w, P];
}
class Ye extends Le {
  constructor(t) {
    super(), De(this, t, Xe, Je, Ue, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: it
} = window.__gradio__svelte__internal, X = window.ms_globals.rerender, B = window.ms_globals.tree;
function Qe(e, t = {}) {
  function o(s) {
    const i = k(), n = new Ye({
      ...s,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const l = {
            key: window.ms_globals.autokey,
            svelteInstance: i,
            reactComponent: e,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: t.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, u = r.parent ?? B;
          return u.nodes = [...u.nodes, l], X({
            createPortal: N,
            node: B
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((_) => _.svelteInstance !== i), X({
              createPortal: N,
              node: B
            });
          }), l;
        },
        ...s.props
      }
    });
    return i.set(n), n;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(o);
    });
  });
}
const Ze = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function $e(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const s = e[o];
    return t[o] = et(o, s), t;
  }, {}) : {};
}
function et(e, t) {
  return typeof t == "number" && !Ze.includes(e) ? t + "px" : t;
}
function W(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const i = E.Children.toArray(e._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = W(n.props.el);
        return E.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...E.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return i.originalChildren = e._reactElement.props.children, t.push(N(E.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: i
    }), o)), {
      clonedElement: o,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((i) => {
    e.getEventListeners(i).forEach(({
      listener: r,
      type: l,
      useCapture: u
    }) => {
      o.addEventListener(l, r, u);
    });
  });
  const s = Array.from(e.childNodes);
  for (let i = 0; i < s.length; i++) {
    const n = s[i];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: l
      } = W(n);
      t.push(...l), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function tt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const T = re(({
  slot: e,
  clone: t,
  className: o,
  style: s,
  observeAttributes: i
}, n) => {
  const r = oe(), [l, u] = ie([]), {
    forceClone: _
  } = fe(), h = _ ? !0 : t;
  return se(() => {
    var v;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), tt(n, f), o && f.classList.add(...o.split(" ")), s) {
        const p = $e(s);
        Object.keys(p).forEach((w) => {
          f.style[w] = p[w];
        });
      }
    }
    let m = null, x = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var a, C, d;
        (a = r.current) != null && a.contains(c) && ((C = r.current) == null || C.removeChild(c));
        const {
          portals: w,
          clonedElement: P
        } = W(e);
        c = P, u(w), c.style.display = "contents", x && clearTimeout(x), x = setTimeout(() => {
          g();
        }, 50), (d = r.current) == null || d.appendChild(c);
      };
      f();
      const p = Te(() => {
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
      c.style.display = "contents", g(), (v = r.current) == null || v.appendChild(c);
    return () => {
      var f, p;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((p = r.current) == null || p.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, h, o, s, n, i, _]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
});
function nt(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function rt(e, t = !1) {
  try {
    if (de(e))
      return e;
    if (t && !nt(e))
      return;
    if (typeof e == "string") {
      let o = e.trim();
      return o.startsWith(";") && (o = o.slice(1)), o.endsWith(";") && (o = o.slice(0, -1)), new Function(`return (...args) => (${o})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function Y(e, t) {
  return le(() => rt(e, t), [e, t]);
}
const st = Qe(({
  slots: e,
  afterOpenChange: t,
  getPopupContainer: o,
  children: s,
  ...i
}) => {
  var l, u;
  const n = Y(t), r = Y(o);
  return /* @__PURE__ */ y.jsx(me, {
    ...i,
    afterOpenChange: n,
    getPopupContainer: r,
    okText: e.okText ? /* @__PURE__ */ y.jsx(T, {
      slot: e.okText
    }) : i.okText,
    okButtonProps: {
      ...i.okButtonProps || {},
      icon: e["okButtonProps.icon"] ? /* @__PURE__ */ y.jsx(T, {
        slot: e["okButtonProps.icon"]
      }) : (l = i.okButtonProps) == null ? void 0 : l.icon
    },
    cancelText: e.cancelText ? /* @__PURE__ */ y.jsx(T, {
      slot: e.cancelText
    }) : i.cancelText,
    cancelButtonProps: {
      ...i.cancelButtonProps || {},
      icon: e["cancelButtonProps.icon"] ? /* @__PURE__ */ y.jsx(T, {
        slot: e["cancelButtonProps.icon"]
      }) : (u = i.cancelButtonProps) == null ? void 0 : u.icon
    },
    title: e.title ? /* @__PURE__ */ y.jsx(T, {
      slot: e.title
    }) : i.title,
    description: e.description ? /* @__PURE__ */ y.jsx(T, {
      slot: e.description
    }) : i.description,
    children: s
  });
});
export {
  st as Popconfirm,
  st as default
};
