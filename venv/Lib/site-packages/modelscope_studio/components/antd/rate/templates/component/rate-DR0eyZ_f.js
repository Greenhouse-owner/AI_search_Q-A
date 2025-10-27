import { i as ce, a as N, r as ae, w as P, g as ue, b as de } from "./Index-VjYCdPb6.js";
const y = window.ms_globals.React, re = window.ms_globals.React.useMemo, oe = window.ms_globals.React.forwardRef, se = window.ms_globals.React.useRef, le = window.ms_globals.React.useState, ie = window.ms_globals.React.useEffect, F = window.ms_globals.ReactDOM.createPortal, fe = window.ms_globals.internalContext.useContextPropsContext, me = window.ms_globals.internalContext.ContextPropsProvider, _e = window.ms_globals.antd.Rate;
var pe = /\s/;
function he(e) {
  for (var t = e.length; t-- && pe.test(e.charAt(t)); )
    ;
  return t;
}
var ge = /^\s+/;
function we(e) {
  return e && e.slice(0, he(e) + 1).replace(ge, "");
}
var D = NaN, be = /^[-+]0x[0-9a-f]+$/i, ye = /^0b[01]+$/i, ve = /^0o[0-7]+$/i, xe = parseInt;
function U(e) {
  if (typeof e == "number")
    return e;
  if (ce(e))
    return D;
  if (N(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = N(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = we(e);
  var o = ye.test(e);
  return o || ve.test(e) ? xe(e.slice(2), o ? 2 : 8) : be.test(e) ? D : +e;
}
var L = function() {
  return ae.Date.now();
}, Ee = "Expected a function", Ce = Math.max, Se = Math.min;
function Ie(e, t, o) {
  var l, s, n, r, i, u, _ = 0, g = !1, c = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(Ee);
  t = U(t) || 0, N(o) && (g = !!o.leading, c = "maxWait" in o, n = c ? Ce(U(o.maxWait) || 0, t) : n, w = "trailing" in o ? !!o.trailing : w);
  function m(d) {
    var v = l, R = s;
    return l = s = void 0, _ = d, r = e.apply(R, v), r;
  }
  function x(d) {
    return _ = d, i = setTimeout(p, t), g ? m(d) : r;
  }
  function E(d) {
    var v = d - u, R = d - _, M = t - v;
    return c ? Se(M, n - R) : M;
  }
  function f(d) {
    var v = d - u, R = d - _;
    return u === void 0 || v >= t || v < 0 || c && R >= n;
  }
  function p() {
    var d = L();
    if (f(d))
      return b(d);
    i = setTimeout(p, E(d));
  }
  function b(d) {
    return i = void 0, w && l ? m(d) : (l = s = void 0, r);
  }
  function I() {
    i !== void 0 && clearTimeout(i), _ = 0, l = u = s = i = void 0;
  }
  function a() {
    return i === void 0 ? r : b(L());
  }
  function C() {
    var d = L(), v = f(d);
    if (l = arguments, s = this, u = d, v) {
      if (i === void 0)
        return x(u);
      if (c)
        return clearTimeout(i), i = setTimeout(p, t), m(u);
    }
    return i === void 0 && (i = setTimeout(p, t)), r;
  }
  return C.cancel = I, C.flush = a, C;
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
var Re = y, Pe = Symbol.for("react.element"), Te = Symbol.for("react.fragment"), Oe = Object.prototype.hasOwnProperty, ke = Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Z(e, t, o) {
  var l, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (l in t) Oe.call(t, l) && !Le.hasOwnProperty(l) && (s[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) s[l] === void 0 && (s[l] = t[l]);
  return {
    $$typeof: Pe,
    type: e,
    key: n,
    ref: r,
    props: s,
    _owner: ke.current
  };
}
k.Fragment = Te;
k.jsx = Z;
k.jsxs = Z;
Q.exports = k;
var h = Q.exports;
const {
  SvelteComponent: je,
  assign: z,
  binding_callbacks: B,
  check_outros: Fe,
  children: $,
  claim_element: ee,
  claim_space: Ne,
  component_subscribe: G,
  compute_slots: We,
  create_slot: Ae,
  detach: S,
  element: te,
  empty: H,
  exclude_internal_props: K,
  get_all_dirty_from_scope: Me,
  get_slot_changes: De,
  group_outros: Ue,
  init: ze,
  insert_hydration: T,
  safe_not_equal: Be,
  set_custom_element_data: ne,
  space: Ge,
  transition_in: O,
  transition_out: W,
  update_slot_base: He
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ke,
  getContext: qe,
  onDestroy: Ve,
  setContext: Je
} = window.__gradio__svelte__internal;
function q(e) {
  let t, o;
  const l = (
    /*#slots*/
    e[7].default
  ), s = Ae(
    l,
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
      s && s.l(r), r.forEach(S), this.h();
    },
    h() {
      ne(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      T(n, t, r), s && s.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && He(
        s,
        l,
        n,
        /*$$scope*/
        n[6],
        o ? De(
          l,
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
      o || (O(s, n), o = !0);
    },
    o(n) {
      W(s, n), o = !1;
    },
    d(n) {
      n && S(t), s && s.d(n), e[9](null);
    }
  };
}
function Xe(e) {
  let t, o, l, s, n = (
    /*$$slots*/
    e[4].default && q(e)
  );
  return {
    c() {
      t = te("react-portal-target"), o = Ge(), n && n.c(), l = H(), this.h();
    },
    l(r) {
      t = ee(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), $(t).forEach(S), o = Ne(r), n && n.l(r), l = H(), this.h();
    },
    h() {
      ne(t, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      T(r, t, i), e[8](t), T(r, o, i), n && n.m(r, i), T(r, l, i), s = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && O(n, 1)) : (n = q(r), n.c(), O(n, 1), n.m(l.parentNode, l)) : n && (Ue(), W(n, 1, 1, () => {
        n = null;
      }), Fe());
    },
    i(r) {
      s || (O(n), s = !0);
    },
    o(r) {
      W(n), s = !1;
    },
    d(r) {
      r && (S(t), S(o), S(l)), e[8](null), n && n.d(r);
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
function Ye(e, t, o) {
  let l, s, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const i = We(n);
  let {
    svelteInit: u
  } = t;
  const _ = P(V(t)), g = P();
  G(e, g, (a) => o(0, l = a));
  const c = P();
  G(e, c, (a) => o(1, s = a));
  const w = [], m = qe("$$ms-gr-react-wrapper"), {
    slotKey: x,
    slotIndex: E,
    subSlotIndex: f
  } = ue() || {}, p = u({
    parent: m,
    props: _,
    target: g,
    slot: c,
    slotKey: x,
    slotIndex: E,
    subSlotIndex: f,
    onDestroy(a) {
      w.push(a);
    }
  });
  Je("$$ms-gr-react-wrapper", p), Ke(() => {
    _.set(V(t));
  }), Ve(() => {
    w.forEach((a) => a());
  });
  function b(a) {
    B[a ? "unshift" : "push"](() => {
      l = a, g.set(l);
    });
  }
  function I(a) {
    B[a ? "unshift" : "push"](() => {
      s = a, c.set(s);
    });
  }
  return e.$$set = (a) => {
    o(17, t = z(z({}, t), K(a))), "svelteInit" in a && o(5, u = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = K(t), [l, s, g, c, i, u, r, n, b, I];
}
class Qe extends je {
  constructor(t) {
    super(), ze(this, t, Ye, Xe, Be, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ut
} = window.__gradio__svelte__internal, J = window.ms_globals.rerender, j = window.ms_globals.tree;
function Ze(e, t = {}) {
  function o(l) {
    const s = P(), n = new Qe({
      ...l,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const i = {
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
          }, u = r.parent ?? j;
          return u.nodes = [...u.nodes, i], J({
            createPortal: F,
            node: j
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((_) => _.svelteInstance !== s), J({
              createPortal: F,
              node: j
            });
          }), i;
        },
        ...l.props
      }
    });
    return s.set(n), n;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(o);
    });
  });
}
function $e(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function et(e, t = !1) {
  try {
    if (de(e))
      return e;
    if (t && !$e(e))
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
function tt(e, t) {
  return re(() => et(e, t), [e, t]);
}
const nt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function rt(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const l = e[o];
    return t[o] = ot(o, l), t;
  }, {}) : {};
}
function ot(e, t) {
  return typeof t == "number" && !nt.includes(e) ? t + "px" : t;
}
function A(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = y.Children.toArray(e._reactElement.props.children).map((n) => {
      if (y.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = A(n.props.el);
        return y.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...y.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(F(y.cloneElement(e._reactElement, {
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
      type: i,
      useCapture: u
    }) => {
      o.addEventListener(i, r, u);
    });
  });
  const l = Array.from(e.childNodes);
  for (let s = 0; s < l.length; s++) {
    const n = l[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = A(n);
      t.push(...i), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function st(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const X = oe(({
  slot: e,
  clone: t,
  className: o,
  style: l,
  observeAttributes: s
}, n) => {
  const r = se(), [i, u] = le([]), {
    forceClone: _
  } = fe(), g = _ ? !0 : t;
  return ie(() => {
    var E;
    if (!r.current || !e)
      return;
    let c = e;
    function w() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), st(n, f), o && f.classList.add(...o.split(" ")), l) {
        const p = rt(l);
        Object.keys(p).forEach((b) => {
          f.style[b] = p[b];
        });
      }
    }
    let m = null, x = null;
    if (g && window.MutationObserver) {
      let f = function() {
        var a, C, d;
        (a = r.current) != null && a.contains(c) && ((C = r.current) == null || C.removeChild(c));
        const {
          portals: b,
          clonedElement: I
        } = A(e);
        c = I, u(b), c.style.display = "contents", x && clearTimeout(x), x = setTimeout(() => {
          w();
        }, 50), (d = r.current) == null || d.appendChild(c);
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
      c.style.display = "contents", w(), (E = r.current) == null || E.appendChild(c);
    return () => {
      var f, p;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((p = r.current) == null || p.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, g, o, l, n, s, _]), y.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
}), lt = ({
  children: e,
  ...t
}) => /* @__PURE__ */ h.jsx(h.Fragment, {
  children: e(t)
});
function it(e) {
  return y.createElement(lt, {
    children: e
  });
}
function Y(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? it((o) => /* @__PURE__ */ h.jsx(me, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ h.jsx(X, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...o
    })
  })) : /* @__PURE__ */ h.jsx(X, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function ct({
  key: e,
  slots: t,
  targets: o
}, l) {
  return t[e] ? (...s) => o ? o.map((n, r) => /* @__PURE__ */ h.jsx(y.Fragment, {
    children: Y(n, {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ h.jsx(h.Fragment, {
    children: Y(t[e], {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }) : void 0;
}
const dt = Ze(({
  slots: e,
  children: t,
  onValueChange: o,
  character: l,
  onChange: s,
  setSlotParams: n,
  elRef: r,
  ...i
}) => {
  const u = tt(l, !0);
  return /* @__PURE__ */ h.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ h.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ h.jsx(_e, {
      ...i,
      ref: r,
      onChange: (_) => {
        s == null || s(_), o(_);
      },
      character: e.character ? ct({
        slots: e,
        key: "character"
      }) : u || l
    })]
  });
});
export {
  dt as Rate,
  dt as default
};
