import { i as le, a as M, r as ae, w as T, g as ce } from "./Index-BomtBREX.js";
const y = window.ms_globals.React, re = window.ms_globals.React.forwardRef, oe = window.ms_globals.React.useRef, ie = window.ms_globals.React.useState, se = window.ms_globals.React.useEffect, D = window.ms_globals.ReactDOM.createPortal, ue = window.ms_globals.internalContext.useContextPropsContext, P = window.ms_globals.antd.Empty;
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
var G = NaN, pe = /^[-+]0x[0-9a-f]+$/i, ge = /^0b[01]+$/i, he = /^0o[0-7]+$/i, Ee = parseInt;
function U(e) {
  if (typeof e == "number")
    return e;
  if (le(e))
    return G;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = _e(e);
  var o = ge.test(e);
  return o || he.test(e) ? Ee(e.slice(2), o ? 2 : 8) : pe.test(e) ? G : +e;
}
var L = function() {
  return ae.Date.now();
}, be = "Expected a function", we = Math.max, ye = Math.min;
function ve(e, t, o) {
  var s, i, n, r, l, d, p = 0, g = !1, a = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(be);
  t = U(t) || 0, M(o) && (g = !!o.leading, a = "maxWait" in o, n = a ? we(U(o.maxWait) || 0, t) : n, h = "trailing" in o ? !!o.trailing : h);
  function m(u) {
    var b = s, S = i;
    return s = i = void 0, p = u, r = e.apply(S, b), r;
  }
  function w(u) {
    return p = u, l = setTimeout(_, t), g ? m(u) : r;
  }
  function v(u) {
    var b = u - d, S = u - p, F = t - b;
    return a ? ye(F, n - S) : F;
  }
  function f(u) {
    var b = u - d, S = u - p;
    return d === void 0 || b >= t || b < 0 || a && S >= n;
  }
  function _() {
    var u = L();
    if (f(u))
      return E(u);
    l = setTimeout(_, v(u));
  }
  function E(u) {
    return l = void 0, h && s ? m(u) : (s = i = void 0, r);
  }
  function I() {
    l !== void 0 && clearTimeout(l), p = 0, s = d = i = l = void 0;
  }
  function c() {
    return l === void 0 ? r : E(L());
  }
  function C() {
    var u = L(), b = f(u);
    if (s = arguments, i = this, d = u, b) {
      if (l === void 0)
        return w(d);
      if (a)
        return clearTimeout(l), l = setTimeout(_, t), m(d);
    }
    return l === void 0 && (l = setTimeout(_, t)), r;
  }
  return C.cancel = I, C.flush = c, C;
}
var Q = {
  exports: {}
}, k = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce = y, xe = Symbol.for("react.element"), Ie = Symbol.for("react.fragment"), Se = Object.prototype.hasOwnProperty, Te = Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Re = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Z(e, t, o) {
  var s, i = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (s in t) Se.call(t, s) && !Re.hasOwnProperty(s) && (i[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) i[s] === void 0 && (i[s] = t[s]);
  return {
    $$typeof: xe,
    type: e,
    key: n,
    ref: r,
    props: i,
    _owner: Te.current
  };
}
k.Fragment = Ie;
k.jsx = Z;
k.jsxs = Z;
Q.exports = k;
var A = Q.exports;
const {
  SvelteComponent: Oe,
  assign: z,
  binding_callbacks: B,
  check_outros: ke,
  children: $,
  claim_element: ee,
  claim_space: Pe,
  component_subscribe: H,
  compute_slots: Le,
  create_slot: Ae,
  detach: x,
  element: te,
  empty: K,
  exclude_internal_props: q,
  get_all_dirty_from_scope: Ne,
  get_slot_changes: De,
  group_outros: Me,
  init: je,
  insert_hydration: R,
  safe_not_equal: We,
  set_custom_element_data: ne,
  space: Fe,
  transition_in: O,
  transition_out: j,
  update_slot_base: Ge
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ue,
  getContext: ze,
  onDestroy: Be,
  setContext: He
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
      i && i.l(r), r.forEach(x), this.h();
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
        o ? De(
          s,
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
      o || (O(i, n), o = !0);
    },
    o(n) {
      j(i, n), o = !1;
    },
    d(n) {
      n && x(t), i && i.d(n), e[9](null);
    }
  };
}
function Ke(e) {
  let t, o, s, i, n = (
    /*$$slots*/
    e[4].default && V(e)
  );
  return {
    c() {
      t = te("react-portal-target"), o = Fe(), n && n.c(), s = K(), this.h();
    },
    l(r) {
      t = ee(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), $(t).forEach(x), o = Pe(r), n && n.l(r), s = K(), this.h();
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
      16 && O(n, 1)) : (n = V(r), n.c(), O(n, 1), n.m(s.parentNode, s)) : n && (Me(), j(n, 1, 1, () => {
        n = null;
      }), ke());
    },
    i(r) {
      i || (O(n), i = !0);
    },
    o(r) {
      j(n), i = !1;
    },
    d(r) {
      r && (x(t), x(o), x(s)), e[8](null), n && n.d(r);
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
  let s, i, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Le(n);
  let {
    svelteInit: d
  } = t;
  const p = T(J(t)), g = T();
  H(e, g, (c) => o(0, s = c));
  const a = T();
  H(e, a, (c) => o(1, i = c));
  const h = [], m = ze("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: v,
    subSlotIndex: f
  } = ce() || {}, _ = d({
    parent: m,
    props: p,
    target: g,
    slot: a,
    slotKey: w,
    slotIndex: v,
    subSlotIndex: f,
    onDestroy(c) {
      h.push(c);
    }
  });
  He("$$ms-gr-react-wrapper", _), Ue(() => {
    p.set(J(t));
  }), Be(() => {
    h.forEach((c) => c());
  });
  function E(c) {
    B[c ? "unshift" : "push"](() => {
      s = c, g.set(s);
    });
  }
  function I(c) {
    B[c ? "unshift" : "push"](() => {
      i = c, a.set(i);
    });
  }
  return e.$$set = (c) => {
    o(17, t = z(z({}, t), q(c))), "svelteInit" in c && o(5, d = c.svelteInit), "$$scope" in c && o(6, r = c.$$scope);
  }, t = q(t), [s, i, g, a, l, d, r, n, E, I];
}
class Ve extends Oe {
  constructor(t) {
    super(), je(this, t, qe, Ke, We, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: et
} = window.__gradio__svelte__internal, X = window.ms_globals.rerender, N = window.ms_globals.tree;
function Je(e, t = {}) {
  function o(s) {
    const i = T(), n = new Ve({
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
          }, d = r.parent ?? N;
          return d.nodes = [...d.nodes, l], X({
            createPortal: D,
            node: N
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((p) => p.svelteInstance !== i), X({
              createPortal: D,
              node: N
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
const Xe = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Ye(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const s = e[o];
    return t[o] = Qe(o, s), t;
  }, {}) : {};
}
function Qe(e, t) {
  return typeof t == "number" && !Xe.includes(e) ? t + "px" : t;
}
function W(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const i = y.Children.toArray(e._reactElement.props.children).map((n) => {
      if (y.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = W(n.props.el);
        return y.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...y.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return i.originalChildren = e._reactElement.props.children, t.push(D(y.cloneElement(e._reactElement, {
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
      useCapture: d
    }) => {
      o.addEventListener(l, r, d);
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
function Ze(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const Y = re(({
  slot: e,
  clone: t,
  className: o,
  style: s,
  observeAttributes: i
}, n) => {
  const r = oe(), [l, d] = ie([]), {
    forceClone: p
  } = ue(), g = p ? !0 : t;
  return se(() => {
    var v;
    if (!r.current || !e)
      return;
    let a = e;
    function h() {
      let f = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (f = a.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), Ze(n, f), o && f.classList.add(...o.split(" ")), s) {
        const _ = Ye(s);
        Object.keys(_).forEach((E) => {
          f.style[E] = _[E];
        });
      }
    }
    let m = null, w = null;
    if (g && window.MutationObserver) {
      let f = function() {
        var c, C, u;
        (c = r.current) != null && c.contains(a) && ((C = r.current) == null || C.removeChild(a));
        const {
          portals: E,
          clonedElement: I
        } = W(e);
        a = I, d(E), a.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          h();
        }, 50), (u = r.current) == null || u.appendChild(a);
      };
      f();
      const _ = ve(() => {
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
      a.style.display = "contents", h(), (v = r.current) == null || v.appendChild(a);
    return () => {
      var f, _;
      a.style.display = "", (f = r.current) != null && f.contains(a) && ((_ = r.current) == null || _.removeChild(a)), m == null || m.disconnect();
    };
  }, [e, g, o, s, n, i, p]), y.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
}), tt = Je(({
  slots: e,
  styles: t,
  ...o
}) => {
  const s = () => {
    if (e.image)
      return /* @__PURE__ */ A.jsx(Y, {
        slot: e.image
      });
    switch (o.image) {
      case "PRESENTED_IMAGE_DEFAULT":
        return P.PRESENTED_IMAGE_DEFAULT;
      case "PRESENTED_IMAGE_SIMPLE":
        return P.PRESENTED_IMAGE_SIMPLE;
      default:
        return o.image;
    }
  };
  return /* @__PURE__ */ A.jsx(P, {
    ...o,
    description: e.description ? /* @__PURE__ */ A.jsx(Y, {
      slot: e.description
    }) : o.description,
    styles: {
      ...t,
      image: {
        display: "inline-block",
        ...t == null ? void 0 : t.image
      }
    },
    image: s()
  });
});
export {
  tt as Empty,
  tt as default
};
