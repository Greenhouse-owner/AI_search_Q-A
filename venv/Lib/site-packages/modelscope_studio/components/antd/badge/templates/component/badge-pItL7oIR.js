import { i as ie, a as j, r as le, w as R, g as ae } from "./Index-1551tidZ.js";
const E = window.ms_globals.React, ne = window.ms_globals.React.forwardRef, re = window.ms_globals.React.useRef, oe = window.ms_globals.React.useState, se = window.ms_globals.React.useEffect, A = window.ms_globals.ReactDOM.createPortal, ce = window.ms_globals.internalContext.useContextPropsContext, ue = window.ms_globals.antd.Badge;
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
var F = NaN, pe = /^[-+]0x[0-9a-f]+$/i, he = /^0b[01]+$/i, ge = /^0o[0-7]+$/i, be = parseInt;
function M(e) {
  if (typeof e == "number")
    return e;
  if (ie(e))
    return F;
  if (j(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = j(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = _e(e);
  var o = he.test(e);
  return o || ge.test(e) ? be(e.slice(2), o ? 2 : 8) : pe.test(e) ? F : +e;
}
var L = function() {
  return le.Date.now();
}, we = "Expected a function", ye = Math.max, Ee = Math.min;
function xe(e, t, o) {
  var i, s, n, r, l, d, p = 0, h = !1, a = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(we);
  t = M(t) || 0, j(o) && (h = !!o.leading, a = "maxWait" in o, n = a ? ye(M(o.maxWait) || 0, t) : n, g = "trailing" in o ? !!o.trailing : g);
  function m(u) {
    var w = i, S = s;
    return i = s = void 0, p = u, r = e.apply(S, w), r;
  }
  function y(u) {
    return p = u, l = setTimeout(_, t), h ? m(u) : r;
  }
  function x(u) {
    var w = u - d, S = u - p, D = t - w;
    return a ? Ee(D, n - S) : D;
  }
  function f(u) {
    var w = u - d, S = u - p;
    return d === void 0 || w >= t || w < 0 || a && S >= n;
  }
  function _() {
    var u = L();
    if (f(u))
      return b(u);
    l = setTimeout(_, x(u));
  }
  function b(u) {
    return l = void 0, g && i ? m(u) : (i = s = void 0, r);
  }
  function I() {
    l !== void 0 && clearTimeout(l), p = 0, i = d = s = l = void 0;
  }
  function c() {
    return l === void 0 ? r : b(L());
  }
  function v() {
    var u = L(), w = f(u);
    if (i = arguments, s = this, d = u, w) {
      if (l === void 0)
        return y(d);
      if (a)
        return clearTimeout(l), l = setTimeout(_, t), m(d);
    }
    return l === void 0 && (l = setTimeout(_, t)), r;
  }
  return v.cancel = I, v.flush = c, v;
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
var ve = E, Ce = Symbol.for("react.element"), Ie = Symbol.for("react.fragment"), Se = Object.prototype.hasOwnProperty, Te = ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Re = {
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
var T = Y.exports;
const {
  SvelteComponent: Oe,
  assign: U,
  binding_callbacks: z,
  check_outros: ke,
  children: Z,
  claim_element: $,
  claim_space: Pe,
  component_subscribe: G,
  compute_slots: Le,
  create_slot: Ne,
  detach: C,
  element: ee,
  empty: H,
  exclude_internal_props: K,
  get_all_dirty_from_scope: Ae,
  get_slot_changes: je,
  group_outros: We,
  init: Be,
  insert_hydration: O,
  safe_not_equal: De,
  set_custom_element_data: te,
  space: Fe,
  transition_in: k,
  transition_out: W,
  update_slot_base: Me
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ue,
  getContext: ze,
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
      var r = Z(t);
      s && s.l(r), r.forEach(C), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      O(n, t, r), s && s.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && Me(
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
        ) : Ae(
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
      n && C(t), s && s.d(n), e[9](null);
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
      t = ee("react-portal-target"), o = Fe(), n && n.c(), i = H(), this.h();
    },
    l(r) {
      t = $(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), Z(t).forEach(C), o = Pe(r), n && n.l(r), i = H(), this.h();
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
      r && (C(t), C(o), C(i)), e[8](null), n && n.d(r);
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
  G(e, h, (c) => o(0, i = c));
  const a = R();
  G(e, a, (c) => o(1, s = c));
  const g = [], m = ze("$$ms-gr-react-wrapper"), {
    slotKey: y,
    slotIndex: x,
    subSlotIndex: f
  } = ae() || {}, _ = d({
    parent: m,
    props: p,
    target: h,
    slot: a,
    slotKey: y,
    slotIndex: x,
    subSlotIndex: f,
    onDestroy(c) {
      g.push(c);
    }
  });
  He("$$ms-gr-react-wrapper", _), Ue(() => {
    p.set(V(t));
  }), Ge(() => {
    g.forEach((c) => c());
  });
  function b(c) {
    z[c ? "unshift" : "push"](() => {
      i = c, h.set(i);
    });
  }
  function I(c) {
    z[c ? "unshift" : "push"](() => {
      s = c, a.set(s);
    });
  }
  return e.$$set = (c) => {
    o(17, t = U(U({}, t), K(c))), "svelteInit" in c && o(5, d = c.svelteInit), "$$scope" in c && o(6, r = c.$$scope);
  }, t = K(t), [i, s, h, a, l, d, r, n, b, I];
}
class Ve extends Oe {
  constructor(t) {
    super(), Be(this, t, qe, Ke, De, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: et
} = window.__gradio__svelte__internal, J = window.ms_globals.rerender, N = window.ms_globals.tree;
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
          }, d = r.parent ?? N;
          return d.nodes = [...d.nodes, l], J({
            createPortal: A,
            node: N
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((p) => p.svelteInstance !== s), J({
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
    const s = E.Children.toArray(e._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = B(n.props.el);
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
const X = ne(({
  slot: e,
  clone: t,
  className: o,
  style: i,
  observeAttributes: s
}, n) => {
  const r = re(), [l, d] = oe([]), {
    forceClone: p
  } = ce(), h = p ? !0 : t;
  return se(() => {
    var x;
    if (!r.current || !e)
      return;
    let a = e;
    function g() {
      let f = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (f = a.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), Ze(n, f), o && f.classList.add(...o.split(" ")), i) {
        const _ = Ye(i);
        Object.keys(_).forEach((b) => {
          f.style[b] = _[b];
        });
      }
    }
    let m = null, y = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var c, v, u;
        (c = r.current) != null && c.contains(a) && ((v = r.current) == null || v.removeChild(a));
        const {
          portals: b,
          clonedElement: I
        } = B(e);
        a = I, d(b), a.style.display = "contents", y && clearTimeout(y), y = setTimeout(() => {
          g();
        }, 50), (u = r.current) == null || u.appendChild(a);
      };
      f();
      const _ = xe(() => {
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
      a.style.display = "contents", g(), (x = r.current) == null || x.appendChild(a);
    return () => {
      var f, _;
      a.style.display = "", (f = r.current) != null && f.contains(a) && ((_ = r.current) == null || _.removeChild(a)), m == null || m.disconnect();
    };
  }, [e, h, o, i, n, s, p]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
}), tt = Je(({
  slots: e,
  ...t
}) => /* @__PURE__ */ T.jsx(T.Fragment, {
  children: /* @__PURE__ */ T.jsx(ue, {
    ...t,
    count: e.count ? /* @__PURE__ */ T.jsx(X, {
      slot: e.count
    }) : t.count,
    text: e.text ? /* @__PURE__ */ T.jsx(X, {
      slot: e.text
    }) : t.text
  })
}));
export {
  tt as Badge,
  tt as default
};
