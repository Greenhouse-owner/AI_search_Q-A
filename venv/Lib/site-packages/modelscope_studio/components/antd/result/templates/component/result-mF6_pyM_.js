import { i as ae, a as M, r as ce, w as k, g as ue, d as de, b as R } from "./Index-QbVlzF59.js";
const w = window.ms_globals.React, Q = window.ms_globals.React.useMemo, Z = window.ms_globals.React.useState, $ = window.ms_globals.React.useEffect, ie = window.ms_globals.React.forwardRef, le = window.ms_globals.React.useRef, W = window.ms_globals.ReactDOM.createPortal, fe = window.ms_globals.internalContext.useContextPropsContext, pe = window.ms_globals.antd.Result;
var me = /\s/;
function _e(e) {
  for (var t = e.length; t-- && me.test(e.charAt(t)); )
    ;
  return t;
}
var ge = /^\s+/;
function he(e) {
  return e && e.slice(0, _e(e) + 1).replace(ge, "");
}
var B = NaN, be = /^[-+]0x[0-9a-f]+$/i, xe = /^0b[01]+$/i, ye = /^0o[0-7]+$/i, we = parseInt;
function z(e) {
  if (typeof e == "number")
    return e;
  if (ae(e))
    return B;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = he(e);
  var o = xe.test(e);
  return o || ye.test(e) ? we(e.slice(2), o ? 2 : 8) : be.test(e) ? B : +e;
}
var A = function() {
  return ce.Date.now();
}, ve = "Expected a function", Ee = Math.max, Ce = Math.min;
function Ie(e, t, o) {
  var s, i, n, r, l, u, _ = 0, g = !1, a = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(ve);
  t = z(t) || 0, M(o) && (g = !!o.leading, a = "maxWait" in o, n = a ? Ee(z(o.maxWait) || 0, t) : n, h = "trailing" in o ? !!o.trailing : h);
  function p(d) {
    var x = s, T = i;
    return s = i = void 0, _ = d, r = e.apply(T, x), r;
  }
  function v(d) {
    return _ = d, l = setTimeout(m, t), g ? p(d) : r;
  }
  function E(d) {
    var x = d - u, T = d - _, U = t - x;
    return a ? Ce(U, n - T) : U;
  }
  function f(d) {
    var x = d - u, T = d - _;
    return u === void 0 || x >= t || x < 0 || a && T >= n;
  }
  function m() {
    var d = A();
    if (f(d))
      return b(d);
    l = setTimeout(m, E(d));
  }
  function b(d) {
    return l = void 0, h && s ? p(d) : (s = i = void 0, r);
  }
  function S() {
    l !== void 0 && clearTimeout(l), _ = 0, s = u = i = l = void 0;
  }
  function c() {
    return l === void 0 ? r : b(A());
  }
  function C() {
    var d = A(), x = f(d);
    if (s = arguments, i = this, u = d, x) {
      if (l === void 0)
        return v(u);
      if (a)
        return clearTimeout(l), l = setTimeout(m, t), p(u);
    }
    return l === void 0 && (l = setTimeout(m, t)), r;
  }
  return C.cancel = S, C.flush = c, C;
}
var ee = {
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
var Se = w, Te = Symbol.for("react.element"), Re = Symbol.for("react.fragment"), Oe = Object.prototype.hasOwnProperty, ke = Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Pe = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function te(e, t, o) {
  var s, i = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (s in t) Oe.call(t, s) && !Pe.hasOwnProperty(s) && (i[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) i[s] === void 0 && (i[s] = t[s]);
  return {
    $$typeof: Te,
    type: e,
    key: n,
    ref: r,
    props: i,
    _owner: ke.current
  };
}
j.Fragment = Re;
j.jsx = te;
j.jsxs = te;
ee.exports = j;
var y = ee.exports;
const {
  SvelteComponent: Le,
  assign: G,
  binding_callbacks: H,
  check_outros: je,
  children: ne,
  claim_element: re,
  claim_space: Ae,
  component_subscribe: K,
  compute_slots: Ne,
  create_slot: We,
  detach: I,
  element: oe,
  empty: V,
  exclude_internal_props: q,
  get_all_dirty_from_scope: Me,
  get_slot_changes: De,
  group_outros: Fe,
  init: Ue,
  insert_hydration: P,
  safe_not_equal: Be,
  set_custom_element_data: se,
  space: ze,
  transition_in: L,
  transition_out: D,
  update_slot_base: Ge
} = window.__gradio__svelte__internal, {
  beforeUpdate: He,
  getContext: Ke,
  onDestroy: Ve,
  setContext: qe
} = window.__gradio__svelte__internal;
function J(e) {
  let t, o;
  const s = (
    /*#slots*/
    e[7].default
  ), i = We(
    s,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = oe("svelte-slot"), i && i.c(), this.h();
    },
    l(n) {
      t = re(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = ne(t);
      i && i.l(r), r.forEach(I), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      P(n, t, r), i && i.m(t, null), e[9](t), o = !0;
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
        ) : Me(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (L(i, n), o = !0);
    },
    o(n) {
      D(i, n), o = !1;
    },
    d(n) {
      n && I(t), i && i.d(n), e[9](null);
    }
  };
}
function Je(e) {
  let t, o, s, i, n = (
    /*$$slots*/
    e[4].default && J(e)
  );
  return {
    c() {
      t = oe("react-portal-target"), o = ze(), n && n.c(), s = V(), this.h();
    },
    l(r) {
      t = re(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ne(t).forEach(I), o = Ae(r), n && n.l(r), s = V(), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      P(r, t, l), e[8](t), P(r, o, l), n && n.m(r, l), P(r, s, l), i = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && L(n, 1)) : (n = J(r), n.c(), L(n, 1), n.m(s.parentNode, s)) : n && (Fe(), D(n, 1, 1, () => {
        n = null;
      }), je());
    },
    i(r) {
      i || (L(n), i = !0);
    },
    o(r) {
      D(n), i = !1;
    },
    d(r) {
      r && (I(t), I(o), I(s)), e[8](null), n && n.d(r);
    }
  };
}
function X(e) {
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
  const _ = k(X(t)), g = k();
  K(e, g, (c) => o(0, s = c));
  const a = k();
  K(e, a, (c) => o(1, i = c));
  const h = [], p = Ke("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: E,
    subSlotIndex: f
  } = ue() || {}, m = u({
    parent: p,
    props: _,
    target: g,
    slot: a,
    slotKey: v,
    slotIndex: E,
    subSlotIndex: f,
    onDestroy(c) {
      h.push(c);
    }
  });
  qe("$$ms-gr-react-wrapper", m), He(() => {
    _.set(X(t));
  }), Ve(() => {
    h.forEach((c) => c());
  });
  function b(c) {
    H[c ? "unshift" : "push"](() => {
      s = c, g.set(s);
    });
  }
  function S(c) {
    H[c ? "unshift" : "push"](() => {
      i = c, a.set(i);
    });
  }
  return e.$$set = (c) => {
    o(17, t = G(G({}, t), q(c))), "svelteInit" in c && o(5, u = c.svelteInit), "$$scope" in c && o(6, r = c.$$scope);
  }, t = q(t), [s, i, g, a, l, u, r, n, b, S];
}
class Ye extends Le {
  constructor(t) {
    super(), Ue(this, t, Xe, Je, Be, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: it
} = window.__gradio__svelte__internal, Y = window.ms_globals.rerender, N = window.ms_globals.tree;
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
          }, u = r.parent ?? N;
          return u.nodes = [...u.nodes, l], Y({
            createPortal: W,
            node: N
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((_) => _.svelteInstance !== i), Y({
              createPortal: W,
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
function Ze(e) {
  const [t, o] = Z(() => R(e));
  return $(() => {
    let s = !0;
    return e.subscribe((n) => {
      s && (s = !1, n === t) || o(n);
    });
  }, [e]), t;
}
function $e(e) {
  const t = Q(() => de(e, (o) => o), [e]);
  return Ze(t);
}
const et = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function tt(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const s = e[o];
    return t[o] = nt(o, s), t;
  }, {}) : {};
}
function nt(e, t) {
  return typeof t == "number" && !et.includes(e) ? t + "px" : t;
}
function F(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const i = w.Children.toArray(e._reactElement.props.children).map((n) => {
      if (w.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = F(n.props.el);
        return w.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...w.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return i.originalChildren = e._reactElement.props.children, t.push(W(w.cloneElement(e._reactElement, {
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
      } = F(n);
      t.push(...l), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function rt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const O = ie(({
  slot: e,
  clone: t,
  className: o,
  style: s,
  observeAttributes: i
}, n) => {
  const r = le(), [l, u] = Z([]), {
    forceClone: _
  } = fe(), g = _ ? !0 : t;
  return $(() => {
    var E;
    if (!r.current || !e)
      return;
    let a = e;
    function h() {
      let f = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (f = a.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), rt(n, f), o && f.classList.add(...o.split(" ")), s) {
        const m = tt(s);
        Object.keys(m).forEach((b) => {
          f.style[b] = m[b];
        });
      }
    }
    let p = null, v = null;
    if (g && window.MutationObserver) {
      let f = function() {
        var c, C, d;
        (c = r.current) != null && c.contains(a) && ((C = r.current) == null || C.removeChild(a));
        const {
          portals: b,
          clonedElement: S
        } = F(e);
        a = S, u(b), a.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          h();
        }, 50), (d = r.current) == null || d.appendChild(a);
      };
      f();
      const m = Ie(() => {
        f(), p == null || p.disconnect(), p == null || p.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      p = new window.MutationObserver(m), p.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      a.style.display = "contents", h(), (E = r.current) == null || E.appendChild(a);
    return () => {
      var f, m;
      a.style.display = "", (f = r.current) != null && f.contains(a) && ((m = r.current) == null || m.removeChild(a)), p == null || p.disconnect();
    };
  }, [e, g, o, s, n, i, _]), w.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
});
function ot(e, t) {
  const o = Q(() => w.Children.toArray(e.originalChildren || e).filter((n) => n.props.node && !n.props.node.ignore && (!n.props.nodeSlotKey || t)).sort((n, r) => {
    if (n.props.node.slotIndex && r.props.node.slotIndex) {
      const l = R(n.props.node.slotIndex) || 0, u = R(r.props.node.slotIndex) || 0;
      return l - u === 0 && n.props.node.subSlotIndex && r.props.node.subSlotIndex ? (R(n.props.node.subSlotIndex) || 0) - (R(r.props.node.subSlotIndex) || 0) : l - u;
    }
    return 0;
  }).map((n) => n.props.node.target), [e, t]);
  return $e(o);
}
const lt = Qe(({
  slots: e,
  children: t,
  ...o
}) => {
  const s = ot(t);
  return /* @__PURE__ */ y.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ y.jsx("div", {
      style: {
        display: "none"
      },
      children: s.length > 0 ? null : t
    }), /* @__PURE__ */ y.jsx(pe, {
      ...o,
      extra: e.extra ? /* @__PURE__ */ y.jsx(O, {
        slot: e.extra
      }) : o.extra,
      icon: e.icon ? /* @__PURE__ */ y.jsx(O, {
        slot: e.icon
      }) : o.icon,
      subTitle: e.subTitle ? /* @__PURE__ */ y.jsx(O, {
        slot: e.subTitle
      }) : o.subTitle,
      title: e.title ? /* @__PURE__ */ y.jsx(O, {
        slot: e.title
      }) : o.title,
      children: s.length > 0 ? t : null
    })]
  });
});
export {
  lt as Result,
  lt as default
};
