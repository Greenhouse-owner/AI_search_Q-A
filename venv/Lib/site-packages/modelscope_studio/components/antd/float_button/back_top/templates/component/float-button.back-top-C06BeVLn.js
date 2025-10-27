import { i as le, a as A, r as ce, w as k, g as ae, b as ue } from "./Index-rZBgNhnQ.js";
const E = window.ms_globals.React, ne = window.ms_globals.React.forwardRef, re = window.ms_globals.React.useRef, oe = window.ms_globals.React.useState, ie = window.ms_globals.React.useEffect, se = window.ms_globals.React.useMemo, N = window.ms_globals.ReactDOM.createPortal, de = window.ms_globals.internalContext.useContextPropsContext, fe = window.ms_globals.antd.FloatButton;
var me = /\s/;
function pe(e) {
  for (var t = e.length; t-- && me.test(e.charAt(t)); )
    ;
  return t;
}
var _e = /^\s+/;
function ge(e) {
  return e && e.slice(0, pe(e) + 1).replace(_e, "");
}
var D = NaN, he = /^[-+]0x[0-9a-f]+$/i, be = /^0b[01]+$/i, we = /^0o[0-7]+$/i, ye = parseInt;
function U(e) {
  if (typeof e == "number")
    return e;
  if (le(e))
    return D;
  if (A(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = A(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ge(e);
  var o = be.test(e);
  return o || we.test(e) ? ye(e.slice(2), o ? 2 : 8) : he.test(e) ? D : +e;
}
var F = function() {
  return ce.Date.now();
}, ve = "Expected a function", Ee = Math.max, xe = Math.min;
function Ce(e, t, o) {
  var i, s, n, r, l, d, _ = 0, g = !1, c = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(ve);
  t = U(t) || 0, A(o) && (g = !!o.leading, c = "maxWait" in o, n = c ? Ee(U(o.maxWait) || 0, t) : n, h = "trailing" in o ? !!o.trailing : h);
  function m(u) {
    var w = i, R = s;
    return i = s = void 0, _ = u, r = e.apply(R, w), r;
  }
  function v(u) {
    return _ = u, l = setTimeout(p, t), g ? m(u) : r;
  }
  function x(u) {
    var w = u - d, R = u - _, M = t - w;
    return c ? xe(M, n - R) : M;
  }
  function f(u) {
    var w = u - d, R = u - _;
    return d === void 0 || w >= t || w < 0 || c && R >= n;
  }
  function p() {
    var u = F();
    if (f(u))
      return b(u);
    l = setTimeout(p, x(u));
  }
  function b(u) {
    return l = void 0, h && i ? m(u) : (i = s = void 0, r);
  }
  function S() {
    l !== void 0 && clearTimeout(l), _ = 0, i = d = s = l = void 0;
  }
  function a() {
    return l === void 0 ? r : b(F());
  }
  function C() {
    var u = F(), w = f(u);
    if (i = arguments, s = this, d = u, w) {
      if (l === void 0)
        return v(d);
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
var Ie = E, Se = Symbol.for("react.element"), Re = Symbol.for("react.fragment"), Te = Object.prototype.hasOwnProperty, ke = Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Oe = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Q(e, t, o) {
  var i, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (i in t) Te.call(t, i) && !Oe.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: Se,
    type: e,
    key: n,
    ref: r,
    props: s,
    _owner: ke.current
  };
}
L.Fragment = Re;
L.jsx = Q;
L.jsxs = Q;
Y.exports = L;
var y = Y.exports;
const {
  SvelteComponent: Pe,
  assign: z,
  binding_callbacks: G,
  check_outros: Le,
  children: Z,
  claim_element: $,
  claim_space: Fe,
  component_subscribe: H,
  compute_slots: je,
  create_slot: Ne,
  detach: I,
  element: ee,
  empty: K,
  exclude_internal_props: q,
  get_all_dirty_from_scope: Ae,
  get_slot_changes: We,
  group_outros: Be,
  init: Me,
  insert_hydration: O,
  safe_not_equal: De,
  set_custom_element_data: te,
  space: Ue,
  transition_in: P,
  transition_out: W,
  update_slot_base: ze
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ge,
  getContext: He,
  onDestroy: Ke,
  setContext: qe
} = window.__gradio__svelte__internal;
function V(e) {
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
      64) && ze(
        s,
        i,
        n,
        /*$$scope*/
        n[6],
        o ? We(
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
      o || (P(s, n), o = !0);
    },
    o(n) {
      W(s, n), o = !1;
    },
    d(n) {
      n && I(t), s && s.d(n), e[9](null);
    }
  };
}
function Ve(e) {
  let t, o, i, s, n = (
    /*$$slots*/
    e[4].default && V(e)
  );
  return {
    c() {
      t = ee("react-portal-target"), o = Ue(), n && n.c(), i = K(), this.h();
    },
    l(r) {
      t = $(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), Z(t).forEach(I), o = Fe(r), n && n.l(r), i = K(), this.h();
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
      16 && P(n, 1)) : (n = V(r), n.c(), P(n, 1), n.m(i.parentNode, i)) : n && (Be(), W(n, 1, 1, () => {
        n = null;
      }), Le());
    },
    i(r) {
      s || (P(n), s = !0);
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
function Je(e, t, o) {
  let i, s, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = je(n);
  let {
    svelteInit: d
  } = t;
  const _ = k(J(t)), g = k();
  H(e, g, (a) => o(0, i = a));
  const c = k();
  H(e, c, (a) => o(1, s = a));
  const h = [], m = He("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: x,
    subSlotIndex: f
  } = ae() || {}, p = d({
    parent: m,
    props: _,
    target: g,
    slot: c,
    slotKey: v,
    slotIndex: x,
    subSlotIndex: f,
    onDestroy(a) {
      h.push(a);
    }
  });
  qe("$$ms-gr-react-wrapper", p), Ge(() => {
    _.set(J(t));
  }), Ke(() => {
    h.forEach((a) => a());
  });
  function b(a) {
    G[a ? "unshift" : "push"](() => {
      i = a, g.set(i);
    });
  }
  function S(a) {
    G[a ? "unshift" : "push"](() => {
      s = a, c.set(s);
    });
  }
  return e.$$set = (a) => {
    o(17, t = z(z({}, t), q(a))), "svelteInit" in a && o(5, d = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = q(t), [i, s, g, c, l, d, r, n, b, S];
}
class Xe extends Pe {
  constructor(t) {
    super(), Me(this, t, Je, Ve, De, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: it
} = window.__gradio__svelte__internal, X = window.ms_globals.rerender, j = window.ms_globals.tree;
function Ye(e, t = {}) {
  function o(i) {
    const s = k(), n = new Xe({
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
            createPortal: N,
            node: j
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((_) => _.svelteInstance !== s), X({
              createPortal: N,
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
const Qe = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Ze(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const i = e[o];
    return t[o] = $e(o, i), t;
  }, {}) : {};
}
function $e(e, t) {
  return typeof t == "number" && !Qe.includes(e) ? t + "px" : t;
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
    return s.originalChildren = e._reactElement.props.children, t.push(N(E.cloneElement(e._reactElement, {
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
function et(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const T = ne(({
  slot: e,
  clone: t,
  className: o,
  style: i,
  observeAttributes: s
}, n) => {
  const r = re(), [l, d] = oe([]), {
    forceClone: _
  } = de(), g = _ ? !0 : t;
  return ie(() => {
    var x;
    if (!r.current || !e)
      return;
    let c = e;
    function h() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), et(n, f), o && f.classList.add(...o.split(" ")), i) {
        const p = Ze(i);
        Object.keys(p).forEach((b) => {
          f.style[b] = p[b];
        });
      }
    }
    let m = null, v = null;
    if (g && window.MutationObserver) {
      let f = function() {
        var a, C, u;
        (a = r.current) != null && a.contains(c) && ((C = r.current) == null || C.removeChild(c));
        const {
          portals: b,
          clonedElement: S
        } = B(e);
        c = S, d(b), c.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          h();
        }, 50), (u = r.current) == null || u.appendChild(c);
      };
      f();
      const p = Ce(() => {
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
      c.style.display = "contents", h(), (x = r.current) == null || x.appendChild(c);
    return () => {
      var f, p;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((p = r.current) == null || p.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, g, o, i, n, s, _]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
});
function tt(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function nt(e, t = !1) {
  try {
    if (ue(e))
      return e;
    if (t && !tt(e))
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
function rt(e, t) {
  return se(() => nt(e, t), [e, t]);
}
const st = Ye(({
  slots: e,
  children: t,
  target: o,
  ...i
}) => {
  var n;
  const s = rt(o);
  return /* @__PURE__ */ y.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ y.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ y.jsx(fe.BackTop, {
      ...i,
      target: s,
      icon: e.icon ? /* @__PURE__ */ y.jsx(T, {
        clone: !0,
        slot: e.icon
      }) : i.icon,
      description: e.description ? /* @__PURE__ */ y.jsx(T, {
        clone: !0,
        slot: e.description
      }) : i.description,
      tooltip: e.tooltip ? /* @__PURE__ */ y.jsx(T, {
        clone: !0,
        slot: e.tooltip
      }) : i.tooltip,
      badge: {
        ...i.badge,
        count: e["badge.count"] ? /* @__PURE__ */ y.jsx(T, {
          slot: e["badge.count"]
        }) : (n = i.badge) == null ? void 0 : n.count
      }
    })]
  });
});
export {
  st as FloatButtonBackTop,
  st as default
};
