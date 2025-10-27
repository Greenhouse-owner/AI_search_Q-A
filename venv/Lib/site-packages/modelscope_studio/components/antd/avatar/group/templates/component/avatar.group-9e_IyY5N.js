import { i as ae, a as M, r as ce, w as O, g as ue, d as de, b as R } from "./Index-CdKqewes.js";
const b = window.ms_globals.React, Q = window.ms_globals.React.useMemo, Z = window.ms_globals.React.useState, $ = window.ms_globals.React.useEffect, ie = window.ms_globals.React.forwardRef, le = window.ms_globals.React.useRef, W = window.ms_globals.ReactDOM.createPortal, fe = window.ms_globals.internalContext.useContextPropsContext, pe = window.ms_globals.antd.Avatar;
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
var U = NaN, xe = /^[-+]0x[0-9a-f]+$/i, ve = /^0b[01]+$/i, be = /^0o[0-7]+$/i, ye = parseInt;
function B(e) {
  if (typeof e == "number")
    return e;
  if (ae(e))
    return U;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = he(e);
  var o = ve.test(e);
  return o || be.test(e) ? ye(e.slice(2), o ? 2 : 8) : xe.test(e) ? U : +e;
}
var L = function() {
  return ce.Date.now();
}, we = "Expected a function", Ee = Math.max, Ce = Math.min;
function Ie(e, t, o) {
  var i, s, n, r, l, c, m = 0, g = !1, a = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(we);
  t = B(t) || 0, M(o) && (g = !!o.leading, a = "maxWait" in o, n = a ? Ee(B(o.maxWait) || 0, t) : n, h = "trailing" in o ? !!o.trailing : h);
  function f(d) {
    var v = i, T = s;
    return i = s = void 0, m = d, r = e.apply(T, v), r;
  }
  function y(d) {
    return m = d, l = setTimeout(_, t), g ? f(d) : r;
  }
  function E(d) {
    var v = d - c, T = d - m, G = t - v;
    return a ? Ce(G, n - T) : G;
  }
  function p(d) {
    var v = d - c, T = d - m;
    return c === void 0 || v >= t || v < 0 || a && T >= n;
  }
  function _() {
    var d = L();
    if (p(d))
      return x(d);
    l = setTimeout(_, E(d));
  }
  function x(d) {
    return l = void 0, h && i ? f(d) : (i = s = void 0, r);
  }
  function S() {
    l !== void 0 && clearTimeout(l), m = 0, i = c = s = l = void 0;
  }
  function u() {
    return l === void 0 ? r : x(L());
  }
  function C() {
    var d = L(), v = p(d);
    if (i = arguments, s = this, c = d, v) {
      if (l === void 0)
        return y(c);
      if (a)
        return clearTimeout(l), l = setTimeout(_, t), f(c);
    }
    return l === void 0 && (l = setTimeout(_, t)), r;
  }
  return C.cancel = S, C.flush = u, C;
}
var ee = {
  exports: {}
}, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se = b, Te = Symbol.for("react.element"), Re = Symbol.for("react.fragment"), Oe = Object.prototype.hasOwnProperty, ke = Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Pe = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function te(e, t, o) {
  var i, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (i in t) Oe.call(t, i) && !Pe.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: Te,
    type: e,
    key: n,
    ref: r,
    props: s,
    _owner: ke.current
  };
}
A.Fragment = Re;
A.jsx = te;
A.jsxs = te;
ee.exports = A;
var w = ee.exports;
const {
  SvelteComponent: Ae,
  assign: z,
  binding_callbacks: H,
  check_outros: Le,
  children: ne,
  claim_element: re,
  claim_space: je,
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
  init: Ge,
  insert_hydration: k,
  safe_not_equal: Ue,
  set_custom_element_data: se,
  space: Be,
  transition_in: P,
  transition_out: D,
  update_slot_base: ze
} = window.__gradio__svelte__internal, {
  beforeUpdate: He,
  getContext: Ke,
  onDestroy: Ve,
  setContext: qe
} = window.__gradio__svelte__internal;
function J(e) {
  let t, o;
  const i = (
    /*#slots*/
    e[7].default
  ), s = We(
    i,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = oe("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      t = re(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = ne(t);
      s && s.l(r), r.forEach(I), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      k(n, t, r), s && s.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && ze(
        s,
        i,
        n,
        /*$$scope*/
        n[6],
        o ? De(
          i,
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
      o || (P(s, n), o = !0);
    },
    o(n) {
      D(s, n), o = !1;
    },
    d(n) {
      n && I(t), s && s.d(n), e[9](null);
    }
  };
}
function Je(e) {
  let t, o, i, s, n = (
    /*$$slots*/
    e[4].default && J(e)
  );
  return {
    c() {
      t = oe("react-portal-target"), o = Be(), n && n.c(), i = V(), this.h();
    },
    l(r) {
      t = re(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ne(t).forEach(I), o = je(r), n && n.l(r), i = V(), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      k(r, t, l), e[8](t), k(r, o, l), n && n.m(r, l), k(r, i, l), s = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && P(n, 1)) : (n = J(r), n.c(), P(n, 1), n.m(i.parentNode, i)) : n && (Fe(), D(n, 1, 1, () => {
        n = null;
      }), Le());
    },
    i(r) {
      s || (P(n), s = !0);
    },
    o(r) {
      D(n), s = !1;
    },
    d(r) {
      r && (I(t), I(o), I(i)), e[8](null), n && n.d(r);
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
  let i, s, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Ne(n);
  let {
    svelteInit: c
  } = t;
  const m = O(X(t)), g = O();
  K(e, g, (u) => o(0, i = u));
  const a = O();
  K(e, a, (u) => o(1, s = u));
  const h = [], f = Ke("$$ms-gr-react-wrapper"), {
    slotKey: y,
    slotIndex: E,
    subSlotIndex: p
  } = ue() || {}, _ = c({
    parent: f,
    props: m,
    target: g,
    slot: a,
    slotKey: y,
    slotIndex: E,
    subSlotIndex: p,
    onDestroy(u) {
      h.push(u);
    }
  });
  qe("$$ms-gr-react-wrapper", _), He(() => {
    m.set(X(t));
  }), Ve(() => {
    h.forEach((u) => u());
  });
  function x(u) {
    H[u ? "unshift" : "push"](() => {
      i = u, g.set(i);
    });
  }
  function S(u) {
    H[u ? "unshift" : "push"](() => {
      s = u, a.set(s);
    });
  }
  return e.$$set = (u) => {
    o(17, t = z(z({}, t), q(u))), "svelteInit" in u && o(5, c = u.svelteInit), "$$scope" in u && o(6, r = u.$$scope);
  }, t = q(t), [i, s, g, a, l, c, r, n, x, S];
}
class Ye extends Ae {
  constructor(t) {
    super(), Ge(this, t, Xe, Je, Ue, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: it
} = window.__gradio__svelte__internal, Y = window.ms_globals.rerender, j = window.ms_globals.tree;
function Qe(e, t = {}) {
  function o(i) {
    const s = O(), n = new Ye({
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
          }, c = r.parent ?? j;
          return c.nodes = [...c.nodes, l], Y({
            createPortal: W,
            node: j
          }), r.onDestroy(() => {
            c.nodes = c.nodes.filter((m) => m.svelteInstance !== s), Y({
              createPortal: W,
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
function Ze(e) {
  const [t, o] = Z(() => R(e));
  return $(() => {
    let i = !0;
    return e.subscribe((n) => {
      i && (i = !1, n === t) || o(n);
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
    const i = e[o];
    return t[o] = nt(o, i), t;
  }, {}) : {};
}
function nt(e, t) {
  return typeof t == "number" && !et.includes(e) ? t + "px" : t;
}
function F(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = b.Children.toArray(e._reactElement.props.children).map((n) => {
      if (b.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = F(n.props.el);
        return b.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...b.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(W(b.cloneElement(e._reactElement, {
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
      useCapture: c
    }) => {
      o.addEventListener(l, r, c);
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
function rt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const N = ie(({
  slot: e,
  clone: t,
  className: o,
  style: i,
  observeAttributes: s
}, n) => {
  const r = le(), [l, c] = Z([]), {
    forceClone: m
  } = fe(), g = m ? !0 : t;
  return $(() => {
    var E;
    if (!r.current || !e)
      return;
    let a = e;
    function h() {
      let p = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (p = a.children[0], p.tagName.toLowerCase() === "react-portal-target" && p.children[0] && (p = p.children[0])), rt(n, p), o && p.classList.add(...o.split(" ")), i) {
        const _ = tt(i);
        Object.keys(_).forEach((x) => {
          p.style[x] = _[x];
        });
      }
    }
    let f = null, y = null;
    if (g && window.MutationObserver) {
      let p = function() {
        var u, C, d;
        (u = r.current) != null && u.contains(a) && ((C = r.current) == null || C.removeChild(a));
        const {
          portals: x,
          clonedElement: S
        } = F(e);
        a = S, c(x), a.style.display = "contents", y && clearTimeout(y), y = setTimeout(() => {
          h();
        }, 50), (d = r.current) == null || d.appendChild(a);
      };
      p();
      const _ = Ie(() => {
        p(), f == null || f.disconnect(), f == null || f.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      f = new window.MutationObserver(_), f.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      a.style.display = "contents", h(), (E = r.current) == null || E.appendChild(a);
    return () => {
      var p, _;
      a.style.display = "", (p = r.current) != null && p.contains(a) && ((_ = r.current) == null || _.removeChild(a)), f == null || f.disconnect();
    };
  }, [e, g, o, i, n, s, m]), b.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
});
function ot(e, t) {
  const o = Q(() => b.Children.toArray(e.originalChildren || e).filter((n) => n.props.node && !n.props.node.ignore && (!n.props.nodeSlotKey || t)).sort((n, r) => {
    if (n.props.node.slotIndex && r.props.node.slotIndex) {
      const l = R(n.props.node.slotIndex) || 0, c = R(r.props.node.slotIndex) || 0;
      return l - c === 0 && n.props.node.subSlotIndex && r.props.node.subSlotIndex ? (R(n.props.node.subSlotIndex) || 0) - (R(r.props.node.subSlotIndex) || 0) : l - c;
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
  var s, n, r, l, c, m, g, a;
  const i = ot(t);
  return /* @__PURE__ */ w.jsx(w.Fragment, {
    children: /* @__PURE__ */ w.jsxs(pe.Group, {
      ...o,
      max: {
        ...o.max,
        count: typeof ((s = o.max) == null ? void 0 : s.count) == "number" ? (
          // children render
          o.max.count + 1
        ) : (n = o.max) == null ? void 0 : n.count,
        popover: e["max.popover.title"] || e["max.popover.content"] ? {
          ...((l = o.max) == null ? void 0 : l.popover) || {},
          title: e["max.popover.title"] ? /* @__PURE__ */ w.jsx(N, {
            slot: e["max.popover.title"]
          }) : (m = (c = o.max) == null ? void 0 : c.popover) == null ? void 0 : m.title,
          content: e["max.popover.content"] ? /* @__PURE__ */ w.jsx(N, {
            slot: e["max.popover.content"]
          }) : (a = (g = o.max) == null ? void 0 : g.popover) == null ? void 0 : a.content
        } : (r = o.max) == null ? void 0 : r.popover
      },
      children: [/* @__PURE__ */ w.jsx("div", {
        style: {
          display: "none"
        },
        children: t
      }), i.map((h, f) => /* @__PURE__ */ w.jsx(N, {
        slot: h
      }, f))]
    })
  });
});
export {
  lt as AvatarGroup,
  lt as default
};
