import { i as ce, a as A, r as ae, w as O, g as ue, b as de } from "./Index-Ct7mqOU_.js";
const v = window.ms_globals.React, re = window.ms_globals.React.forwardRef, oe = window.ms_globals.React.useRef, se = window.ms_globals.React.useState, ie = window.ms_globals.React.useEffect, le = window.ms_globals.React.useMemo, N = window.ms_globals.ReactDOM.createPortal, fe = window.ms_globals.internalContext.useContextPropsContext, me = window.ms_globals.antd.Popover;
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
var D = NaN, we = /^[-+]0x[0-9a-f]+$/i, be = /^0b[01]+$/i, ye = /^0o[0-7]+$/i, ve = parseInt;
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
  return o || ye.test(e) ? ve(e.slice(2), o ? 2 : 8) : we.test(e) ? D : +e;
}
var L = function() {
  return ae.Date.now();
}, Ee = "Expected a function", Ce = Math.max, xe = Math.min;
function Ie(e, t, o) {
  var i, s, n, r, l, d, _ = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Ee);
  t = U(t) || 0, A(o) && (h = !!o.leading, c = "maxWait" in o, n = c ? Ce(U(o.maxWait) || 0, t) : n, g = "trailing" in o ? !!o.trailing : g);
  function m(u) {
    var b = i, S = s;
    return i = s = void 0, _ = u, r = e.apply(S, b), r;
  }
  function y(u) {
    return _ = u, l = setTimeout(p, t), h ? m(u) : r;
  }
  function E(u) {
    var b = u - d, S = u - _, M = t - b;
    return c ? xe(M, n - S) : M;
  }
  function f(u) {
    var b = u - d, S = u - _;
    return d === void 0 || b >= t || b < 0 || c && S >= n;
  }
  function p() {
    var u = L();
    if (f(u))
      return w(u);
    l = setTimeout(p, E(u));
  }
  function w(u) {
    return l = void 0, g && i ? m(u) : (i = s = void 0, r);
  }
  function I() {
    l !== void 0 && clearTimeout(l), _ = 0, i = d = s = l = void 0;
  }
  function a() {
    return l === void 0 ? r : w(L());
  }
  function C() {
    var u = L(), b = f(u);
    if (i = arguments, s = this, d = u, b) {
      if (l === void 0)
        return y(d);
      if (c)
        return clearTimeout(l), l = setTimeout(p, t), m(d);
    }
    return l === void 0 && (l = setTimeout(p, t)), r;
  }
  return C.cancel = I, C.flush = a, C;
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
var Se = v, Re = Symbol.for("react.element"), Oe = Symbol.for("react.fragment"), Te = Object.prototype.hasOwnProperty, ke = Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Pe = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Z(e, t, o) {
  var i, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (i in t) Te.call(t, i) && !Pe.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: Re,
    type: e,
    key: n,
    ref: r,
    props: s,
    _owner: ke.current
  };
}
P.Fragment = Oe;
P.jsx = Z;
P.jsxs = Z;
Q.exports = P;
var R = Q.exports;
const {
  SvelteComponent: Le,
  assign: z,
  binding_callbacks: B,
  check_outros: Fe,
  children: $,
  claim_element: ee,
  claim_space: Ne,
  component_subscribe: G,
  compute_slots: Ae,
  create_slot: We,
  detach: x,
  element: te,
  empty: H,
  exclude_internal_props: K,
  get_all_dirty_from_scope: je,
  get_slot_changes: Me,
  group_outros: De,
  init: Ue,
  insert_hydration: T,
  safe_not_equal: ze,
  set_custom_element_data: ne,
  space: Be,
  transition_in: k,
  transition_out: W,
  update_slot_base: Ge
} = window.__gradio__svelte__internal, {
  beforeUpdate: He,
  getContext: Ke,
  onDestroy: qe,
  setContext: Ve
} = window.__gradio__svelte__internal;
function q(e) {
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
      t = te("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      t = ee(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = $(t);
      s && s.l(r), r.forEach(x), this.h();
    },
    h() {
      ne(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      T(n, t, r), s && s.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && Ge(
        s,
        i,
        n,
        /*$$scope*/
        n[6],
        o ? Me(
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
      o || (k(s, n), o = !0);
    },
    o(n) {
      W(s, n), o = !1;
    },
    d(n) {
      n && x(t), s && s.d(n), e[9](null);
    }
  };
}
function Je(e) {
  let t, o, i, s, n = (
    /*$$slots*/
    e[4].default && q(e)
  );
  return {
    c() {
      t = te("react-portal-target"), o = Be(), n && n.c(), i = H(), this.h();
    },
    l(r) {
      t = ee(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), $(t).forEach(x), o = Ne(r), n && n.l(r), i = H(), this.h();
    },
    h() {
      ne(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      T(r, t, l), e[8](t), T(r, o, l), n && n.m(r, l), T(r, i, l), s = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && k(n, 1)) : (n = q(r), n.c(), k(n, 1), n.m(i.parentNode, i)) : n && (De(), W(n, 1, 1, () => {
        n = null;
      }), Fe());
    },
    i(r) {
      s || (k(n), s = !0);
    },
    o(r) {
      W(n), s = !1;
    },
    d(r) {
      r && (x(t), x(o), x(i)), e[8](null), n && n.d(r);
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
function Xe(e, t, o) {
  let i, s, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Ae(n);
  let {
    svelteInit: d
  } = t;
  const _ = O(V(t)), h = O();
  G(e, h, (a) => o(0, i = a));
  const c = O();
  G(e, c, (a) => o(1, s = a));
  const g = [], m = Ke("$$ms-gr-react-wrapper"), {
    slotKey: y,
    slotIndex: E,
    subSlotIndex: f
  } = ue() || {}, p = d({
    parent: m,
    props: _,
    target: h,
    slot: c,
    slotKey: y,
    slotIndex: E,
    subSlotIndex: f,
    onDestroy(a) {
      g.push(a);
    }
  });
  Ve("$$ms-gr-react-wrapper", p), He(() => {
    _.set(V(t));
  }), qe(() => {
    g.forEach((a) => a());
  });
  function w(a) {
    B[a ? "unshift" : "push"](() => {
      i = a, h.set(i);
    });
  }
  function I(a) {
    B[a ? "unshift" : "push"](() => {
      s = a, c.set(s);
    });
  }
  return e.$$set = (a) => {
    o(17, t = z(z({}, t), K(a))), "svelteInit" in a && o(5, d = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = K(t), [i, s, h, c, l, d, r, n, w, I];
}
class Ye extends Le {
  constructor(t) {
    super(), Ue(this, t, Xe, Je, ze, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: st
} = window.__gradio__svelte__internal, J = window.ms_globals.rerender, F = window.ms_globals.tree;
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
          }, d = r.parent ?? F;
          return d.nodes = [...d.nodes, l], J({
            createPortal: N,
            node: F
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((_) => _.svelteInstance !== s), J({
              createPortal: N,
              node: F
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
const Ze = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function $e(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const i = e[o];
    return t[o] = et(o, i), t;
  }, {}) : {};
}
function et(e, t) {
  return typeof t == "number" && !Ze.includes(e) ? t + "px" : t;
}
function j(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = v.Children.toArray(e._reactElement.props.children).map((n) => {
      if (v.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = j(n.props.el);
        return v.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...v.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(N(v.cloneElement(e._reactElement, {
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
      } = j(n);
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
const X = re(({
  slot: e,
  clone: t,
  className: o,
  style: i,
  observeAttributes: s
}, n) => {
  const r = oe(), [l, d] = se([]), {
    forceClone: _
  } = fe(), h = _ ? !0 : t;
  return ie(() => {
    var E;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), tt(n, f), o && f.classList.add(...o.split(" ")), i) {
        const p = $e(i);
        Object.keys(p).forEach((w) => {
          f.style[w] = p[w];
        });
      }
    }
    let m = null, y = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var a, C, u;
        (a = r.current) != null && a.contains(c) && ((C = r.current) == null || C.removeChild(c));
        const {
          portals: w,
          clonedElement: I
        } = j(e);
        c = I, d(w), c.style.display = "contents", y && clearTimeout(y), y = setTimeout(() => {
          g();
        }, 50), (u = r.current) == null || u.appendChild(c);
      };
      f();
      const p = Ie(() => {
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
      c.style.display = "contents", g(), (E = r.current) == null || E.appendChild(c);
    return () => {
      var f, p;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((p = r.current) == null || p.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, h, o, i, n, s, _]), v.createElement("react-child", {
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
const it = Qe(({
  slots: e,
  afterOpenChange: t,
  getPopupContainer: o,
  children: i,
  ...s
}) => {
  const n = Y(t), r = Y(o);
  return /* @__PURE__ */ R.jsx(R.Fragment, {
    children: /* @__PURE__ */ R.jsx(me, {
      ...s,
      afterOpenChange: n,
      getPopupContainer: r,
      title: e.title ? /* @__PURE__ */ R.jsx(X, {
        slot: e.title
      }) : s.title,
      content: e.content ? /* @__PURE__ */ R.jsx(X, {
        slot: e.content
      }) : s.content,
      children: i
    })
  });
});
export {
  it as Popover,
  it as default
};
