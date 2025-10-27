import { i as ae, a as A, r as ue, b as de, w as P, g as fe, c as me } from "./Index-DW9Scf49.js";
const y = window.ms_globals.React, ie = window.ms_globals.React.useMemo, ee = window.ms_globals.React.useState, F = window.ms_globals.React.useRef, N = window.ms_globals.React.useEffect, ce = window.ms_globals.React.forwardRef, W = window.ms_globals.ReactDOM.createPortal, _e = window.ms_globals.internalContext.useContextPropsContext, pe = window.ms_globals.internalContext.ContextPropsProvider, he = window.ms_globals.antd.Input;
var ge = /\s/;
function we(e) {
  for (var t = e.length; t-- && ge.test(e.charAt(t)); )
    ;
  return t;
}
var be = /^\s+/;
function ye(e) {
  return e && e.slice(0, we(e) + 1).replace(be, "");
}
var U = NaN, Ee = /^[-+]0x[0-9a-f]+$/i, ve = /^0b[01]+$/i, xe = /^0o[0-7]+$/i, Ce = parseInt;
function q(e) {
  if (typeof e == "number")
    return e;
  if (ae(e))
    return U;
  if (A(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = A(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ye(e);
  var r = ve.test(e);
  return r || xe.test(e) ? Ce(e.slice(2), r ? 2 : 8) : Ee.test(e) ? U : +e;
}
var L = function() {
  return ue.Date.now();
}, Ie = "Expected a function", Se = Math.max, Re = Math.min;
function Pe(e, t, r) {
  var l, o, n, s, i, u, _ = 0, h = !1, c = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(Ie);
  t = q(t) || 0, A(r) && (h = !!r.leading, c = "maxWait" in r, n = c ? Se(q(r.maxWait) || 0, t) : n, w = "trailing" in r ? !!r.trailing : w);
  function f(d) {
    var E = l, R = o;
    return l = o = void 0, _ = d, s = e.apply(R, E), s;
  }
  function v(d) {
    return _ = d, i = setTimeout(p, t), h ? f(d) : s;
  }
  function x(d) {
    var E = d - u, R = d - _, V = t - E;
    return c ? Re(V, n - R) : V;
  }
  function m(d) {
    var E = d - u, R = d - _;
    return u === void 0 || E >= t || E < 0 || c && R >= n;
  }
  function p() {
    var d = L();
    if (m(d))
      return b(d);
    i = setTimeout(p, x(d));
  }
  function b(d) {
    return i = void 0, w && l ? f(d) : (l = o = void 0, s);
  }
  function S() {
    i !== void 0 && clearTimeout(i), _ = 0, l = u = o = i = void 0;
  }
  function a() {
    return i === void 0 ? s : b(L());
  }
  function C() {
    var d = L(), E = m(d);
    if (l = arguments, o = this, u = d, E) {
      if (i === void 0)
        return v(u);
      if (c)
        return clearTimeout(i), i = setTimeout(p, t), f(u);
    }
    return i === void 0 && (i = setTimeout(p, t)), s;
  }
  return C.cancel = S, C.flush = a, C;
}
function Te(e, t) {
  return de(e, t);
}
var te = {
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
var Oe = y, ke = Symbol.for("react.element"), Le = Symbol.for("react.fragment"), je = Object.prototype.hasOwnProperty, Fe = Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ne = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ne(e, t, r) {
  var l, o = {}, n = null, s = null;
  r !== void 0 && (n = "" + r), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (l in t) je.call(t, l) && !Ne.hasOwnProperty(l) && (o[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) o[l] === void 0 && (o[l] = t[l]);
  return {
    $$typeof: ke,
    type: e,
    key: n,
    ref: s,
    props: o,
    _owner: Fe.current
  };
}
k.Fragment = Le;
k.jsx = ne;
k.jsxs = ne;
te.exports = k;
var g = te.exports;
const {
  SvelteComponent: We,
  assign: z,
  binding_callbacks: B,
  check_outros: Ae,
  children: re,
  claim_element: se,
  claim_space: Me,
  component_subscribe: G,
  compute_slots: De,
  create_slot: Ve,
  detach: I,
  element: oe,
  empty: H,
  exclude_internal_props: K,
  get_all_dirty_from_scope: Ue,
  get_slot_changes: qe,
  group_outros: ze,
  init: Be,
  insert_hydration: T,
  safe_not_equal: Ge,
  set_custom_element_data: le,
  space: He,
  transition_in: O,
  transition_out: M,
  update_slot_base: Ke
} = window.__gradio__svelte__internal, {
  beforeUpdate: Je,
  getContext: Xe,
  onDestroy: Ye,
  setContext: Qe
} = window.__gradio__svelte__internal;
function J(e) {
  let t, r;
  const l = (
    /*#slots*/
    e[7].default
  ), o = Ve(
    l,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = oe("svelte-slot"), o && o.c(), this.h();
    },
    l(n) {
      t = se(n, "SVELTE-SLOT", {
        class: !0
      });
      var s = re(t);
      o && o.l(s), s.forEach(I), this.h();
    },
    h() {
      le(t, "class", "svelte-1rt0kpf");
    },
    m(n, s) {
      T(n, t, s), o && o.m(t, null), e[9](t), r = !0;
    },
    p(n, s) {
      o && o.p && (!r || s & /*$$scope*/
      64) && Ke(
        o,
        l,
        n,
        /*$$scope*/
        n[6],
        r ? qe(
          l,
          /*$$scope*/
          n[6],
          s,
          null
        ) : Ue(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      r || (O(o, n), r = !0);
    },
    o(n) {
      M(o, n), r = !1;
    },
    d(n) {
      n && I(t), o && o.d(n), e[9](null);
    }
  };
}
function Ze(e) {
  let t, r, l, o, n = (
    /*$$slots*/
    e[4].default && J(e)
  );
  return {
    c() {
      t = oe("react-portal-target"), r = He(), n && n.c(), l = H(), this.h();
    },
    l(s) {
      t = se(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), re(t).forEach(I), r = Me(s), n && n.l(s), l = H(), this.h();
    },
    h() {
      le(t, "class", "svelte-1rt0kpf");
    },
    m(s, i) {
      T(s, t, i), e[8](t), T(s, r, i), n && n.m(s, i), T(s, l, i), o = !0;
    },
    p(s, [i]) {
      /*$$slots*/
      s[4].default ? n ? (n.p(s, i), i & /*$$slots*/
      16 && O(n, 1)) : (n = J(s), n.c(), O(n, 1), n.m(l.parentNode, l)) : n && (ze(), M(n, 1, 1, () => {
        n = null;
      }), Ae());
    },
    i(s) {
      o || (O(n), o = !0);
    },
    o(s) {
      M(n), o = !1;
    },
    d(s) {
      s && (I(t), I(r), I(l)), e[8](null), n && n.d(s);
    }
  };
}
function X(e) {
  const {
    svelteInit: t,
    ...r
  } = e;
  return r;
}
function $e(e, t, r) {
  let l, o, {
    $$slots: n = {},
    $$scope: s
  } = t;
  const i = De(n);
  let {
    svelteInit: u
  } = t;
  const _ = P(X(t)), h = P();
  G(e, h, (a) => r(0, l = a));
  const c = P();
  G(e, c, (a) => r(1, o = a));
  const w = [], f = Xe("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: x,
    subSlotIndex: m
  } = fe() || {}, p = u({
    parent: f,
    props: _,
    target: h,
    slot: c,
    slotKey: v,
    slotIndex: x,
    subSlotIndex: m,
    onDestroy(a) {
      w.push(a);
    }
  });
  Qe("$$ms-gr-react-wrapper", p), Je(() => {
    _.set(X(t));
  }), Ye(() => {
    w.forEach((a) => a());
  });
  function b(a) {
    B[a ? "unshift" : "push"](() => {
      l = a, h.set(l);
    });
  }
  function S(a) {
    B[a ? "unshift" : "push"](() => {
      o = a, c.set(o);
    });
  }
  return e.$$set = (a) => {
    r(17, t = z(z({}, t), K(a))), "svelteInit" in a && r(5, u = a.svelteInit), "$$scope" in a && r(6, s = a.$$scope);
  }, t = K(t), [l, o, h, c, i, u, s, n, b, S];
}
class et extends We {
  constructor(t) {
    super(), Be(this, t, $e, Ze, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: mt
} = window.__gradio__svelte__internal, Y = window.ms_globals.rerender, j = window.ms_globals.tree;
function tt(e, t = {}) {
  function r(l) {
    const o = P(), n = new et({
      ...l,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: o,
            reactComponent: e,
            props: s.props,
            slot: s.slot,
            target: s.target,
            slotIndex: s.slotIndex,
            subSlotIndex: s.subSlotIndex,
            ignore: t.ignore,
            slotKey: s.slotKey,
            nodes: []
          }, u = s.parent ?? j;
          return u.nodes = [...u.nodes, i], Y({
            createPortal: W,
            node: j
          }), s.onDestroy(() => {
            u.nodes = u.nodes.filter((_) => _.svelteInstance !== o), Y({
              createPortal: W,
              node: j
            });
          }), i;
        },
        ...l.props
      }
    });
    return o.set(n), n;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(r);
    });
  });
}
function nt(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function rt(e, t = !1) {
  try {
    if (me(e))
      return e;
    if (t && !nt(e))
      return;
    if (typeof e == "string") {
      let r = e.trim();
      return r.startsWith(";") && (r = r.slice(1)), r.endsWith(";") && (r = r.slice(0, -1)), new Function(`return (...args) => (${r})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function Q(e, t) {
  return ie(() => rt(e, t), [e, t]);
}
function st({
  value: e,
  onValueChange: t
}) {
  const [r, l] = ee(e), o = F(t);
  o.current = t;
  const n = F(r);
  return n.current = r, N(() => {
    o.current(r);
  }, [r]), N(() => {
    Te(e, n.current) || l(e);
  }, [e]), [r, l];
}
const ot = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function lt(e) {
  return e ? Object.keys(e).reduce((t, r) => {
    const l = e[r];
    return t[r] = it(r, l), t;
  }, {}) : {};
}
function it(e, t) {
  return typeof t == "number" && !ot.includes(e) ? t + "px" : t;
}
function D(e) {
  const t = [], r = e.cloneNode(!1);
  if (e._reactElement) {
    const o = y.Children.toArray(e._reactElement.props.children).map((n) => {
      if (y.isValidElement(n) && n.props.__slot__) {
        const {
          portals: s,
          clonedElement: i
        } = D(n.props.el);
        return y.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...y.Children.toArray(n.props.children), ...s]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(W(y.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: o
    }), r)), {
      clonedElement: r,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((o) => {
    e.getEventListeners(o).forEach(({
      listener: s,
      type: i,
      useCapture: u
    }) => {
      r.addEventListener(i, s, u);
    });
  });
  const l = Array.from(e.childNodes);
  for (let o = 0; o < l.length; o++) {
    const n = l[o];
    if (n.nodeType === 1) {
      const {
        clonedElement: s,
        portals: i
      } = D(n);
      t.push(...i), r.appendChild(s);
    } else n.nodeType === 3 && r.appendChild(n.cloneNode());
  }
  return {
    clonedElement: r,
    portals: t
  };
}
function ct(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const Z = ce(({
  slot: e,
  clone: t,
  className: r,
  style: l,
  observeAttributes: o
}, n) => {
  const s = F(), [i, u] = ee([]), {
    forceClone: _
  } = _e(), h = _ ? !0 : t;
  return N(() => {
    var x;
    if (!s.current || !e)
      return;
    let c = e;
    function w() {
      let m = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (m = c.children[0], m.tagName.toLowerCase() === "react-portal-target" && m.children[0] && (m = m.children[0])), ct(n, m), r && m.classList.add(...r.split(" ")), l) {
        const p = lt(l);
        Object.keys(p).forEach((b) => {
          m.style[b] = p[b];
        });
      }
    }
    let f = null, v = null;
    if (h && window.MutationObserver) {
      let m = function() {
        var a, C, d;
        (a = s.current) != null && a.contains(c) && ((C = s.current) == null || C.removeChild(c));
        const {
          portals: b,
          clonedElement: S
        } = D(e);
        c = S, u(b), c.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          w();
        }, 50), (d = s.current) == null || d.appendChild(c);
      };
      m();
      const p = Pe(() => {
        m(), f == null || f.disconnect(), f == null || f.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      f = new window.MutationObserver(p), f.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", w(), (x = s.current) == null || x.appendChild(c);
    return () => {
      var m, p;
      c.style.display = "", (m = s.current) != null && m.contains(c) && ((p = s.current) == null || p.removeChild(c)), f == null || f.disconnect();
    };
  }, [e, h, r, l, n, o, _]), y.createElement("react-child", {
    ref: s,
    style: {
      display: "contents"
    }
  }, ...i);
}), at = ({
  children: e,
  ...t
}) => /* @__PURE__ */ g.jsx(g.Fragment, {
  children: e(t)
});
function ut(e) {
  return y.createElement(at, {
    children: e
  });
}
function $(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? ut((r) => /* @__PURE__ */ g.jsx(pe, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ g.jsx(Z, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...r
    })
  })) : /* @__PURE__ */ g.jsx(Z, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function dt({
  key: e,
  slots: t,
  targets: r
}, l) {
  return t[e] ? (...o) => r ? r.map((n, s) => /* @__PURE__ */ g.jsx(y.Fragment, {
    children: $(n, {
      clone: !0,
      params: o,
      forceClone: !0
    })
  }, s)) : /* @__PURE__ */ g.jsx(g.Fragment, {
    children: $(t[e], {
      clone: !0,
      params: o,
      forceClone: !0
    })
  }) : void 0;
}
const _t = tt(({
  formatter: e,
  onValueChange: t,
  onChange: r,
  children: l,
  setSlotParams: o,
  elRef: n,
  slots: s,
  separator: i,
  ...u
}) => {
  const _ = Q(e), h = Q(i, !0), [c, w] = st({
    onValueChange: t,
    value: u.value
  });
  return /* @__PURE__ */ g.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ g.jsx("div", {
      style: {
        display: "none"
      },
      children: l
    }), /* @__PURE__ */ g.jsx(he.OTP, {
      ...u,
      value: c,
      ref: n,
      formatter: _,
      separator: s.separator ? dt({
        slots: s,
        key: "separator"
      }) : h || i,
      onChange: (f) => {
        r == null || r(f), w(f);
      }
    })]
  });
});
export {
  _t as InputOTP,
  _t as default
};
