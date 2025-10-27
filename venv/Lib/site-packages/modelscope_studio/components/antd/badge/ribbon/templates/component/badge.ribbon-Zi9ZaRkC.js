import { i as se, a as j, r as ie, w as T, g as le } from "./Index-DDK5KGp4.js";
const E = window.ms_globals.React, te = window.ms_globals.React.forwardRef, ne = window.ms_globals.React.useRef, re = window.ms_globals.React.useState, oe = window.ms_globals.React.useEffect, A = window.ms_globals.ReactDOM.createPortal, ae = window.ms_globals.internalContext.useContextPropsContext, ce = window.ms_globals.antd.Badge;
var ue = /\s/;
function de(e) {
  for (var t = e.length; t-- && ue.test(e.charAt(t)); )
    ;
  return t;
}
var fe = /^\s+/;
function me(e) {
  return e && e.slice(0, de(e) + 1).replace(fe, "");
}
var F = NaN, pe = /^[-+]0x[0-9a-f]+$/i, _e = /^0b[01]+$/i, he = /^0o[0-7]+$/i, ge = parseInt;
function M(e) {
  if (typeof e == "number")
    return e;
  if (se(e))
    return F;
  if (j(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = j(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = me(e);
  var o = _e.test(e);
  return o || he.test(e) ? ge(e.slice(2), o ? 2 : 8) : pe.test(e) ? F : +e;
}
var L = function() {
  return ie.Date.now();
}, be = "Expected a function", we = Math.max, ye = Math.min;
function Ee(e, t, o) {
  var i, s, n, r, l, d, _ = 0, h = !1, a = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(be);
  t = M(t) || 0, j(o) && (h = !!o.leading, a = "maxWait" in o, n = a ? we(M(o.maxWait) || 0, t) : n, g = "trailing" in o ? !!o.trailing : g);
  function m(u) {
    var w = i, S = s;
    return i = s = void 0, _ = u, r = e.apply(S, w), r;
  }
  function y(u) {
    return _ = u, l = setTimeout(p, t), h ? m(u) : r;
  }
  function v(u) {
    var w = u - d, S = u - _, D = t - w;
    return a ? ye(D, n - S) : D;
  }
  function f(u) {
    var w = u - d, S = u - _;
    return d === void 0 || w >= t || w < 0 || a && S >= n;
  }
  function p() {
    var u = L();
    if (f(u))
      return b(u);
    l = setTimeout(p, v(u));
  }
  function b(u) {
    return l = void 0, g && i ? m(u) : (i = s = void 0, r);
  }
  function I() {
    l !== void 0 && clearTimeout(l), _ = 0, i = d = s = l = void 0;
  }
  function c() {
    return l === void 0 ? r : b(L());
  }
  function x() {
    var u = L(), w = f(u);
    if (i = arguments, s = this, d = u, w) {
      if (l === void 0)
        return y(d);
      if (a)
        return clearTimeout(l), l = setTimeout(p, t), m(d);
    }
    return l === void 0 && (l = setTimeout(p, t)), r;
  }
  return x.cancel = I, x.flush = c, x;
}
var X = {
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
var ve = E, xe = Symbol.for("react.element"), Ce = Symbol.for("react.fragment"), Ie = Object.prototype.hasOwnProperty, Se = ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Re = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Y(e, t, o) {
  var i, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (i in t) Ie.call(t, i) && !Re.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: xe,
    type: e,
    key: n,
    ref: r,
    props: s,
    _owner: Se.current
  };
}
P.Fragment = Ce;
P.jsx = Y;
P.jsxs = Y;
X.exports = P;
var R = X.exports;
const {
  SvelteComponent: Te,
  assign: U,
  binding_callbacks: z,
  check_outros: Oe,
  children: Q,
  claim_element: Z,
  claim_space: ke,
  component_subscribe: G,
  compute_slots: Pe,
  create_slot: Le,
  detach: C,
  element: $,
  empty: H,
  exclude_internal_props: K,
  get_all_dirty_from_scope: Ne,
  get_slot_changes: Ae,
  group_outros: je,
  init: We,
  insert_hydration: O,
  safe_not_equal: Be,
  set_custom_element_data: ee,
  space: De,
  transition_in: k,
  transition_out: W,
  update_slot_base: Fe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Me,
  getContext: Ue,
  onDestroy: ze,
  setContext: Ge
} = window.__gradio__svelte__internal;
function q(e) {
  let t, o;
  const i = (
    /*#slots*/
    e[7].default
  ), s = Le(
    i,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = $("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      t = Z(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = Q(t);
      s && s.l(r), r.forEach(C), this.h();
    },
    h() {
      ee(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      O(n, t, r), s && s.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && Fe(
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
      W(s, n), o = !1;
    },
    d(n) {
      n && C(t), s && s.d(n), e[9](null);
    }
  };
}
function He(e) {
  let t, o, i, s, n = (
    /*$$slots*/
    e[4].default && q(e)
  );
  return {
    c() {
      t = $("react-portal-target"), o = De(), n && n.c(), i = H(), this.h();
    },
    l(r) {
      t = Z(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), Q(t).forEach(C), o = ke(r), n && n.l(r), i = H(), this.h();
    },
    h() {
      ee(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      O(r, t, l), e[8](t), O(r, o, l), n && n.m(r, l), O(r, i, l), s = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && k(n, 1)) : (n = q(r), n.c(), k(n, 1), n.m(i.parentNode, i)) : n && (je(), W(n, 1, 1, () => {
        n = null;
      }), Oe());
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
function Ke(e, t, o) {
  let i, s, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Pe(n);
  let {
    svelteInit: d
  } = t;
  const _ = T(V(t)), h = T();
  G(e, h, (c) => o(0, i = c));
  const a = T();
  G(e, a, (c) => o(1, s = c));
  const g = [], m = Ue("$$ms-gr-react-wrapper"), {
    slotKey: y,
    slotIndex: v,
    subSlotIndex: f
  } = le() || {}, p = d({
    parent: m,
    props: _,
    target: h,
    slot: a,
    slotKey: y,
    slotIndex: v,
    subSlotIndex: f,
    onDestroy(c) {
      g.push(c);
    }
  });
  Ge("$$ms-gr-react-wrapper", p), Me(() => {
    _.set(V(t));
  }), ze(() => {
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
class qe extends Te {
  constructor(t) {
    super(), We(this, t, Ke, He, Be, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: et
} = window.__gradio__svelte__internal, J = window.ms_globals.rerender, N = window.ms_globals.tree;
function Ve(e, t = {}) {
  function o(i) {
    const s = T(), n = new qe({
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
            d.nodes = d.nodes.filter((_) => _.svelteInstance !== s), J({
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
const Je = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Xe(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const i = e[o];
    return t[o] = Ye(o, i), t;
  }, {}) : {};
}
function Ye(e, t) {
  return typeof t == "number" && !Je.includes(e) ? t + "px" : t;
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
function Qe(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const Ze = te(({
  slot: e,
  clone: t,
  className: o,
  style: i,
  observeAttributes: s
}, n) => {
  const r = ne(), [l, d] = re([]), {
    forceClone: _
  } = ae(), h = _ ? !0 : t;
  return oe(() => {
    var v;
    if (!r.current || !e)
      return;
    let a = e;
    function g() {
      let f = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (f = a.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), Qe(n, f), o && f.classList.add(...o.split(" ")), i) {
        const p = Xe(i);
        Object.keys(p).forEach((b) => {
          f.style[b] = p[b];
        });
      }
    }
    let m = null, y = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var c, x, u;
        (c = r.current) != null && c.contains(a) && ((x = r.current) == null || x.removeChild(a));
        const {
          portals: b,
          clonedElement: I
        } = B(e);
        a = I, d(b), a.style.display = "contents", y && clearTimeout(y), y = setTimeout(() => {
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
      a.style.display = "contents", g(), (v = r.current) == null || v.appendChild(a);
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
}), tt = Ve(({
  slots: e,
  children: t,
  ...o
}) => /* @__PURE__ */ R.jsx(R.Fragment, {
  children: /* @__PURE__ */ R.jsx(ce.Ribbon, {
    ...o,
    text: e.text ? /* @__PURE__ */ R.jsx(Ze, {
      slot: e.text
    }) : o.text,
    children: t
  })
}));
export {
  tt as BadgeRibbon,
  tt as default
};
