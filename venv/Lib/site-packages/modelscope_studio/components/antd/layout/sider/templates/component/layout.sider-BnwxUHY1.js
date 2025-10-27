import { i as se, a as A, r as ie, w as T, g as le } from "./Index-CejvP4Gx.js";
const E = window.ms_globals.React, te = window.ms_globals.React.forwardRef, ne = window.ms_globals.React.useRef, re = window.ms_globals.React.useState, oe = window.ms_globals.React.useEffect, N = window.ms_globals.ReactDOM.createPortal, ae = window.ms_globals.internalContext.useContextPropsContext, ce = window.ms_globals.antd.Layout;
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
var M = NaN, _e = /^[-+]0x[0-9a-f]+$/i, pe = /^0b[01]+$/i, ge = /^0o[0-7]+$/i, he = parseInt;
function F(e) {
  if (typeof e == "number")
    return e;
  if (se(e))
    return M;
  if (A(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = A(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = me(e);
  var o = pe.test(e);
  return o || ge.test(e) ? he(e.slice(2), o ? 2 : 8) : _e.test(e) ? M : +e;
}
var L = function() {
  return ie.Date.now();
}, be = "Expected a function", ye = Math.max, we = Math.min;
function Ee(e, t, o) {
  var i, s, n, r, l, d, p = 0, g = !1, a = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(be);
  t = F(t) || 0, A(o) && (g = !!o.leading, a = "maxWait" in o, n = a ? ye(F(o.maxWait) || 0, t) : n, h = "trailing" in o ? !!o.trailing : h);
  function m(u) {
    var y = i, S = s;
    return i = s = void 0, p = u, r = e.apply(S, y), r;
  }
  function w(u) {
    return p = u, l = setTimeout(_, t), g ? m(u) : r;
  }
  function v(u) {
    var y = u - d, S = u - p, D = t - y;
    return a ? we(D, n - S) : D;
  }
  function f(u) {
    var y = u - d, S = u - p;
    return d === void 0 || y >= t || y < 0 || a && S >= n;
  }
  function _() {
    var u = L();
    if (f(u))
      return b(u);
    l = setTimeout(_, v(u));
  }
  function b(u) {
    return l = void 0, h && i ? m(u) : (i = s = void 0, r);
  }
  function I() {
    l !== void 0 && clearTimeout(l), p = 0, i = d = s = l = void 0;
  }
  function c() {
    return l === void 0 ? r : b(L());
  }
  function C() {
    var u = L(), y = f(u);
    if (i = arguments, s = this, d = u, y) {
      if (l === void 0)
        return w(d);
      if (a)
        return clearTimeout(l), l = setTimeout(_, t), m(d);
    }
    return l === void 0 && (l = setTimeout(_, t)), r;
  }
  return C.cancel = I, C.flush = c, C;
}
var X = {
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
var ve = E, Ce = Symbol.for("react.element"), xe = Symbol.for("react.fragment"), Ie = Object.prototype.hasOwnProperty, Se = ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Te = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Y(e, t, o) {
  var i, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (i in t) Ie.call(t, i) && !Te.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: Ce,
    type: e,
    key: n,
    ref: r,
    props: s,
    _owner: Se.current
  };
}
k.Fragment = xe;
k.jsx = Y;
k.jsxs = Y;
X.exports = k;
var U = X.exports;
const {
  SvelteComponent: Re,
  assign: z,
  binding_callbacks: B,
  check_outros: Oe,
  children: Q,
  claim_element: Z,
  claim_space: ke,
  component_subscribe: G,
  compute_slots: Le,
  create_slot: Pe,
  detach: x,
  element: $,
  empty: H,
  exclude_internal_props: K,
  get_all_dirty_from_scope: Ne,
  get_slot_changes: Ae,
  group_outros: We,
  init: je,
  insert_hydration: R,
  safe_not_equal: De,
  set_custom_element_data: ee,
  space: Me,
  transition_in: O,
  transition_out: W,
  update_slot_base: Fe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ue,
  getContext: ze,
  onDestroy: Be,
  setContext: Ge
} = window.__gradio__svelte__internal;
function q(e) {
  let t, o;
  const i = (
    /*#slots*/
    e[7].default
  ), s = Pe(
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
      s && s.l(r), r.forEach(x), this.h();
    },
    h() {
      ee(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      R(n, t, r), s && s.m(t, null), e[9](t), o = !0;
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
      o || (O(s, n), o = !0);
    },
    o(n) {
      W(s, n), o = !1;
    },
    d(n) {
      n && x(t), s && s.d(n), e[9](null);
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
      t = $("react-portal-target"), o = Me(), n && n.c(), i = H(), this.h();
    },
    l(r) {
      t = Z(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), Q(t).forEach(x), o = ke(r), n && n.l(r), i = H(), this.h();
    },
    h() {
      ee(t, "class", "svelte-1rt0kpf");
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
function Ke(e, t, o) {
  let i, s, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Le(n);
  let {
    svelteInit: d
  } = t;
  const p = T(V(t)), g = T();
  G(e, g, (c) => o(0, i = c));
  const a = T();
  G(e, a, (c) => o(1, s = c));
  const h = [], m = ze("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: v,
    subSlotIndex: f
  } = le() || {}, _ = d({
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
  Ge("$$ms-gr-react-wrapper", _), Ue(() => {
    p.set(V(t));
  }), Be(() => {
    h.forEach((c) => c());
  });
  function b(c) {
    B[c ? "unshift" : "push"](() => {
      i = c, g.set(i);
    });
  }
  function I(c) {
    B[c ? "unshift" : "push"](() => {
      s = c, a.set(s);
    });
  }
  return e.$$set = (c) => {
    o(17, t = z(z({}, t), K(c))), "svelteInit" in c && o(5, d = c.svelteInit), "$$scope" in c && o(6, r = c.$$scope);
  }, t = K(t), [i, s, g, a, l, d, r, n, b, I];
}
class qe extends Re {
  constructor(t) {
    super(), je(this, t, Ke, He, De, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: et
} = window.__gradio__svelte__internal, J = window.ms_globals.rerender, P = window.ms_globals.tree;
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
          }, d = r.parent ?? P;
          return d.nodes = [...d.nodes, l], J({
            createPortal: N,
            node: P
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((p) => p.svelteInstance !== s), J({
              createPortal: N,
              node: P
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
function j(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = E.Children.toArray(e._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = j(n.props.el);
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
      } = j(n);
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
    forceClone: p
  } = ae(), g = p ? !0 : t;
  return oe(() => {
    var v;
    if (!r.current || !e)
      return;
    let a = e;
    function h() {
      let f = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (f = a.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), Qe(n, f), o && f.classList.add(...o.split(" ")), i) {
        const _ = Xe(i);
        Object.keys(_).forEach((b) => {
          f.style[b] = _[b];
        });
      }
    }
    let m = null, w = null;
    if (g && window.MutationObserver) {
      let f = function() {
        var c, C, u;
        (c = r.current) != null && c.contains(a) && ((C = r.current) == null || C.removeChild(a));
        const {
          portals: b,
          clonedElement: I
        } = j(e);
        a = I, d(b), a.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          h();
        }, 50), (u = r.current) == null || u.appendChild(a);
      };
      f();
      const _ = Ee(() => {
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
  }, [e, g, o, i, n, s, p]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
}), tt = Ve(({
  slots: e,
  ...t
}) => /* @__PURE__ */ U.jsx(ce.Sider, {
  ...t,
  trigger: e.trigger ? /* @__PURE__ */ U.jsx(Ze, {
    slot: e.trigger,
    clone: !0
  }) : t.trigger === void 0 ? null : t.trigger === "default" ? void 0 : t.trigger
}));
export {
  tt as LayoutSider,
  tt as default
};
