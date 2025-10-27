import { i as le, a as F, r as ce, w as O, g as ae, b as ue } from "./Index-BoFrnnvQ.js";
const E = window.ms_globals.React, ne = window.ms_globals.React.forwardRef, re = window.ms_globals.React.useRef, oe = window.ms_globals.React.useState, se = window.ms_globals.React.useEffect, ie = window.ms_globals.React.useMemo, N = window.ms_globals.ReactDOM.createPortal, de = window.ms_globals.internalContext.useContextPropsContext, fe = window.ms_globals.antd.Alert;
var me = /\s/;
function _e(e) {
  for (var t = e.length; t-- && me.test(e.charAt(t)); )
    ;
  return t;
}
var pe = /^\s+/;
function he(e) {
  return e && e.slice(0, _e(e) + 1).replace(pe, "");
}
var U = NaN, ge = /^[-+]0x[0-9a-f]+$/i, be = /^0b[01]+$/i, we = /^0o[0-7]+$/i, ye = parseInt;
function z(e) {
  if (typeof e == "number")
    return e;
  if (le(e))
    return U;
  if (F(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = F(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = he(e);
  var o = be.test(e);
  return o || we.test(e) ? ye(e.slice(2), o ? 2 : 8) : ge.test(e) ? U : +e;
}
var j = function() {
  return ce.Date.now();
}, ve = "Expected a function", Ee = Math.max, xe = Math.min;
function Ce(e, t, o) {
  var s, i, n, r, l, d, p = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ve);
  t = z(t) || 0, F(o) && (h = !!o.leading, c = "maxWait" in o, n = c ? Ee(z(o.maxWait) || 0, t) : n, g = "trailing" in o ? !!o.trailing : g);
  function m(u) {
    var y = s, R = i;
    return s = i = void 0, p = u, r = e.apply(R, y), r;
  }
  function v(u) {
    return p = u, l = setTimeout(_, t), h ? m(u) : r;
  }
  function x(u) {
    var y = u - d, R = u - p, D = t - y;
    return c ? xe(D, n - R) : D;
  }
  function f(u) {
    var y = u - d, R = u - p;
    return d === void 0 || y >= t || y < 0 || c && R >= n;
  }
  function _() {
    var u = j();
    if (f(u))
      return b(u);
    l = setTimeout(_, x(u));
  }
  function b(u) {
    return l = void 0, g && s ? m(u) : (s = i = void 0, r);
  }
  function S() {
    l !== void 0 && clearTimeout(l), p = 0, s = d = i = l = void 0;
  }
  function a() {
    return l === void 0 ? r : b(j());
  }
  function C() {
    var u = j(), y = f(u);
    if (s = arguments, i = this, d = u, y) {
      if (l === void 0)
        return v(d);
      if (c)
        return clearTimeout(l), l = setTimeout(_, t), m(d);
    }
    return l === void 0 && (l = setTimeout(_, t)), r;
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
var Ie = E, Se = Symbol.for("react.element"), Re = Symbol.for("react.fragment"), Te = Object.prototype.hasOwnProperty, Oe = Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ke = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Q(e, t, o) {
  var s, i = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (s in t) Te.call(t, s) && !ke.hasOwnProperty(s) && (i[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) i[s] === void 0 && (i[s] = t[s]);
  return {
    $$typeof: Se,
    type: e,
    key: n,
    ref: r,
    props: i,
    _owner: Oe.current
  };
}
L.Fragment = Re;
L.jsx = Q;
L.jsxs = Q;
Y.exports = L;
var w = Y.exports;
const {
  SvelteComponent: Pe,
  assign: B,
  binding_callbacks: G,
  check_outros: Le,
  children: Z,
  claim_element: $,
  claim_space: je,
  component_subscribe: H,
  compute_slots: Ae,
  create_slot: Ne,
  detach: I,
  element: ee,
  empty: K,
  exclude_internal_props: q,
  get_all_dirty_from_scope: Fe,
  get_slot_changes: We,
  group_outros: Me,
  init: De,
  insert_hydration: k,
  safe_not_equal: Ue,
  set_custom_element_data: te,
  space: ze,
  transition_in: P,
  transition_out: W,
  update_slot_base: Be
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ge,
  getContext: He,
  onDestroy: Ke,
  setContext: qe
} = window.__gradio__svelte__internal;
function V(e) {
  let t, o;
  const s = (
    /*#slots*/
    e[7].default
  ), i = Ne(
    s,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ee("svelte-slot"), i && i.c(), this.h();
    },
    l(n) {
      t = $(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = Z(t);
      i && i.l(r), r.forEach(I), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      k(n, t, r), i && i.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      i && i.p && (!o || r & /*$$scope*/
      64) && Be(
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
      o || (P(i, n), o = !0);
    },
    o(n) {
      W(i, n), o = !1;
    },
    d(n) {
      n && I(t), i && i.d(n), e[9](null);
    }
  };
}
function Ve(e) {
  let t, o, s, i, n = (
    /*$$slots*/
    e[4].default && V(e)
  );
  return {
    c() {
      t = ee("react-portal-target"), o = ze(), n && n.c(), s = K(), this.h();
    },
    l(r) {
      t = $(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), Z(t).forEach(I), o = je(r), n && n.l(r), s = K(), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      k(r, t, l), e[8](t), k(r, o, l), n && n.m(r, l), k(r, s, l), i = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && P(n, 1)) : (n = V(r), n.c(), P(n, 1), n.m(s.parentNode, s)) : n && (Me(), W(n, 1, 1, () => {
        n = null;
      }), Le());
    },
    i(r) {
      i || (P(n), i = !0);
    },
    o(r) {
      W(n), i = !1;
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
function Je(e, t, o) {
  let s, i, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Ae(n);
  let {
    svelteInit: d
  } = t;
  const p = O(J(t)), h = O();
  H(e, h, (a) => o(0, s = a));
  const c = O();
  H(e, c, (a) => o(1, i = a));
  const g = [], m = He("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: x,
    subSlotIndex: f
  } = ae() || {}, _ = d({
    parent: m,
    props: p,
    target: h,
    slot: c,
    slotKey: v,
    slotIndex: x,
    subSlotIndex: f,
    onDestroy(a) {
      g.push(a);
    }
  });
  qe("$$ms-gr-react-wrapper", _), Ge(() => {
    p.set(J(t));
  }), Ke(() => {
    g.forEach((a) => a());
  });
  function b(a) {
    G[a ? "unshift" : "push"](() => {
      s = a, h.set(s);
    });
  }
  function S(a) {
    G[a ? "unshift" : "push"](() => {
      i = a, c.set(i);
    });
  }
  return e.$$set = (a) => {
    o(17, t = B(B({}, t), q(a))), "svelteInit" in a && o(5, d = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = q(t), [s, i, h, c, l, d, r, n, b, S];
}
class Xe extends Pe {
  constructor(t) {
    super(), De(this, t, Je, Ve, Ue, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: st
} = window.__gradio__svelte__internal, X = window.ms_globals.rerender, A = window.ms_globals.tree;
function Ye(e, t = {}) {
  function o(s) {
    const i = O(), n = new Xe({
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
          }, d = r.parent ?? A;
          return d.nodes = [...d.nodes, l], X({
            createPortal: N,
            node: A
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((p) => p.svelteInstance !== i), X({
              createPortal: N,
              node: A
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
const Qe = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Ze(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const s = e[o];
    return t[o] = $e(o, s), t;
  }, {}) : {};
}
function $e(e, t) {
  return typeof t == "number" && !Qe.includes(e) ? t + "px" : t;
}
function M(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const i = E.Children.toArray(e._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = M(n.props.el);
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
      } = M(n);
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
  style: s,
  observeAttributes: i
}, n) => {
  const r = re(), [l, d] = oe([]), {
    forceClone: p
  } = de(), h = p ? !0 : t;
  return se(() => {
    var x;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), et(n, f), o && f.classList.add(...o.split(" ")), s) {
        const _ = Ze(s);
        Object.keys(_).forEach((b) => {
          f.style[b] = _[b];
        });
      }
    }
    let m = null, v = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var a, C, u;
        (a = r.current) != null && a.contains(c) && ((C = r.current) == null || C.removeChild(c));
        const {
          portals: b,
          clonedElement: S
        } = M(e);
        c = S, d(b), c.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          g();
        }, 50), (u = r.current) == null || u.appendChild(c);
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
      c.style.display = "contents", g(), (x = r.current) == null || x.appendChild(c);
    return () => {
      var f, _;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((_ = r.current) == null || _.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, h, o, s, n, i, p]), E.createElement("react-child", {
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
  return ie(() => nt(e, t), [e, t]);
}
const it = Ye(({
  slots: e,
  afterClose: t,
  children: o,
  ...s
}) => {
  const i = rt(t);
  return /* @__PURE__ */ w.jsxs(w.Fragment, {
    children: [/* @__PURE__ */ w.jsx("div", {
      style: {
        display: "none"
      },
      children: o
    }), /* @__PURE__ */ w.jsx(fe, {
      ...s,
      afterClose: i,
      action: e.action ? /* @__PURE__ */ w.jsx(T, {
        slot: e.action
      }) : s.action,
      closable: e["closable.closeIcon"] ? {
        ...typeof s.closable == "object" ? s.closable : {},
        closeIcon: /* @__PURE__ */ w.jsx(T, {
          slot: e["closable.closeIcon"]
        })
      } : s.closable,
      description: e.description ? /* @__PURE__ */ w.jsx(T, {
        slot: e.description
      }) : s.description,
      icon: e.icon ? /* @__PURE__ */ w.jsx(T, {
        slot: e.icon
      }) : s.icon,
      message: e.message ? /* @__PURE__ */ w.jsx(T, {
        slot: e.message
      }) : s.message
    })]
  });
});
export {
  it as Alert,
  it as default
};
