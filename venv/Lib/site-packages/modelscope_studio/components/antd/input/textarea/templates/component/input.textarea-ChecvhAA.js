import { i as ce, a as M, r as ue, b as de, w as P, g as fe, c as me } from "./Index-BxnkXE00.js";
const v = window.ms_globals.React, ae = window.ms_globals.React.forwardRef, A = window.ms_globals.React.useRef, ee = window.ms_globals.React.useState, N = window.ms_globals.React.useEffect, te = window.ms_globals.React.useMemo, W = window.ms_globals.ReactDOM.createPortal, _e = window.ms_globals.internalContext.useContextPropsContext, he = window.ms_globals.internalContext.ContextPropsProvider, pe = window.ms_globals.antd.Input;
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
var z = NaN, xe = /^[-+]0x[0-9a-f]+$/i, ve = /^0b[01]+$/i, Ee = /^0o[0-7]+$/i, Ce = parseInt;
function B(e) {
  if (typeof e == "number")
    return e;
  if (ce(e))
    return z;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ye(e);
  var r = ve.test(e);
  return r || Ee.test(e) ? Ce(e.slice(2), r ? 2 : 8) : xe.test(e) ? z : +e;
}
var j = function() {
  return ue.Date.now();
}, Ie = "Expected a function", Se = Math.max, Re = Math.min;
function Te(e, t, r) {
  var l, s, n, o, i, c, _ = 0, p = !1, a = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(Ie);
  t = B(t) || 0, M(r) && (p = !!r.leading, a = "maxWait" in r, n = a ? Se(B(r.maxWait) || 0, t) : n, w = "trailing" in r ? !!r.trailing : w);
  function f(d) {
    var E = l, R = s;
    return l = s = void 0, _ = d, o = e.apply(R, E), o;
  }
  function b(d) {
    return _ = d, i = setTimeout(h, t), p ? f(d) : o;
  }
  function y(d) {
    var E = d - c, R = d - _, q = t - E;
    return a ? Re(q, n - R) : q;
  }
  function m(d) {
    var E = d - c, R = d - _;
    return c === void 0 || E >= t || E < 0 || a && R >= n;
  }
  function h() {
    var d = j();
    if (m(d))
      return x(d);
    i = setTimeout(h, y(d));
  }
  function x(d) {
    return i = void 0, w && l ? f(d) : (l = s = void 0, o);
  }
  function S() {
    i !== void 0 && clearTimeout(i), _ = 0, l = c = s = i = void 0;
  }
  function u() {
    return i === void 0 ? o : x(j());
  }
  function C() {
    var d = j(), E = m(d);
    if (l = arguments, s = this, c = d, E) {
      if (i === void 0)
        return b(c);
      if (a)
        return clearTimeout(i), i = setTimeout(h, t), f(c);
    }
    return i === void 0 && (i = setTimeout(h, t)), o;
  }
  return C.cancel = S, C.flush = u, C;
}
function Pe(e, t) {
  return de(e, t);
}
var re = {
  exports: {}
}, F = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe = v, ke = Symbol.for("react.element"), Fe = Symbol.for("react.fragment"), je = Object.prototype.hasOwnProperty, Le = Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ae = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ne(e, t, r) {
  var l, s = {}, n = null, o = null;
  r !== void 0 && (n = "" + r), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (l in t) je.call(t, l) && !Ae.hasOwnProperty(l) && (s[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) s[l] === void 0 && (s[l] = t[l]);
  return {
    $$typeof: ke,
    type: e,
    key: n,
    ref: o,
    props: s,
    _owner: Le.current
  };
}
F.Fragment = Fe;
F.jsx = ne;
F.jsxs = ne;
re.exports = F;
var g = re.exports;
const {
  SvelteComponent: Ne,
  assign: G,
  binding_callbacks: H,
  check_outros: We,
  children: oe,
  claim_element: se,
  claim_space: Me,
  component_subscribe: K,
  compute_slots: De,
  create_slot: Ue,
  detach: I,
  element: le,
  empty: J,
  exclude_internal_props: X,
  get_all_dirty_from_scope: Ve,
  get_slot_changes: qe,
  group_outros: ze,
  init: Be,
  insert_hydration: O,
  safe_not_equal: Ge,
  set_custom_element_data: ie,
  space: He,
  transition_in: k,
  transition_out: D,
  update_slot_base: Ke
} = window.__gradio__svelte__internal, {
  beforeUpdate: Je,
  getContext: Xe,
  onDestroy: Ye,
  setContext: Qe
} = window.__gradio__svelte__internal;
function Y(e) {
  let t, r;
  const l = (
    /*#slots*/
    e[7].default
  ), s = Ue(
    l,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = le("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      t = se(n, "SVELTE-SLOT", {
        class: !0
      });
      var o = oe(t);
      s && s.l(o), o.forEach(I), this.h();
    },
    h() {
      ie(t, "class", "svelte-1rt0kpf");
    },
    m(n, o) {
      O(n, t, o), s && s.m(t, null), e[9](t), r = !0;
    },
    p(n, o) {
      s && s.p && (!r || o & /*$$scope*/
      64) && Ke(
        s,
        l,
        n,
        /*$$scope*/
        n[6],
        r ? qe(
          l,
          /*$$scope*/
          n[6],
          o,
          null
        ) : Ve(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      r || (k(s, n), r = !0);
    },
    o(n) {
      D(s, n), r = !1;
    },
    d(n) {
      n && I(t), s && s.d(n), e[9](null);
    }
  };
}
function Ze(e) {
  let t, r, l, s, n = (
    /*$$slots*/
    e[4].default && Y(e)
  );
  return {
    c() {
      t = le("react-portal-target"), r = He(), n && n.c(), l = J(), this.h();
    },
    l(o) {
      t = se(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), oe(t).forEach(I), r = Me(o), n && n.l(o), l = J(), this.h();
    },
    h() {
      ie(t, "class", "svelte-1rt0kpf");
    },
    m(o, i) {
      O(o, t, i), e[8](t), O(o, r, i), n && n.m(o, i), O(o, l, i), s = !0;
    },
    p(o, [i]) {
      /*$$slots*/
      o[4].default ? n ? (n.p(o, i), i & /*$$slots*/
      16 && k(n, 1)) : (n = Y(o), n.c(), k(n, 1), n.m(l.parentNode, l)) : n && (ze(), D(n, 1, 1, () => {
        n = null;
      }), We());
    },
    i(o) {
      s || (k(n), s = !0);
    },
    o(o) {
      D(n), s = !1;
    },
    d(o) {
      o && (I(t), I(r), I(l)), e[8](null), n && n.d(o);
    }
  };
}
function Q(e) {
  const {
    svelteInit: t,
    ...r
  } = e;
  return r;
}
function $e(e, t, r) {
  let l, s, {
    $$slots: n = {},
    $$scope: o
  } = t;
  const i = De(n);
  let {
    svelteInit: c
  } = t;
  const _ = P(Q(t)), p = P();
  K(e, p, (u) => r(0, l = u));
  const a = P();
  K(e, a, (u) => r(1, s = u));
  const w = [], f = Xe("$$ms-gr-react-wrapper"), {
    slotKey: b,
    slotIndex: y,
    subSlotIndex: m
  } = fe() || {}, h = c({
    parent: f,
    props: _,
    target: p,
    slot: a,
    slotKey: b,
    slotIndex: y,
    subSlotIndex: m,
    onDestroy(u) {
      w.push(u);
    }
  });
  Qe("$$ms-gr-react-wrapper", h), Je(() => {
    _.set(Q(t));
  }), Ye(() => {
    w.forEach((u) => u());
  });
  function x(u) {
    H[u ? "unshift" : "push"](() => {
      l = u, p.set(l);
    });
  }
  function S(u) {
    H[u ? "unshift" : "push"](() => {
      s = u, a.set(s);
    });
  }
  return e.$$set = (u) => {
    r(17, t = G(G({}, t), X(u))), "svelteInit" in u && r(5, c = u.svelteInit), "$$scope" in u && r(6, o = u.$$scope);
  }, t = X(t), [l, s, p, a, i, c, o, n, x, S];
}
class et extends Ne {
  constructor(t) {
    super(), Be(this, t, $e, Ze, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _t
} = window.__gradio__svelte__internal, Z = window.ms_globals.rerender, L = window.ms_globals.tree;
function tt(e, t = {}) {
  function r(l) {
    const s = P(), n = new et({
      ...l,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: s,
            reactComponent: e,
            props: o.props,
            slot: o.slot,
            target: o.target,
            slotIndex: o.slotIndex,
            subSlotIndex: o.subSlotIndex,
            ignore: t.ignore,
            slotKey: o.slotKey,
            nodes: []
          }, c = o.parent ?? L;
          return c.nodes = [...c.nodes, i], Z({
            createPortal: W,
            node: L
          }), o.onDestroy(() => {
            c.nodes = c.nodes.filter((_) => _.svelteInstance !== s), Z({
              createPortal: W,
              node: L
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
      l(r);
    });
  });
}
const rt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function nt(e) {
  return e ? Object.keys(e).reduce((t, r) => {
    const l = e[r];
    return t[r] = ot(r, l), t;
  }, {}) : {};
}
function ot(e, t) {
  return typeof t == "number" && !rt.includes(e) ? t + "px" : t;
}
function U(e) {
  const t = [], r = e.cloneNode(!1);
  if (e._reactElement) {
    const s = v.Children.toArray(e._reactElement.props.children).map((n) => {
      if (v.isValidElement(n) && n.props.__slot__) {
        const {
          portals: o,
          clonedElement: i
        } = U(n.props.el);
        return v.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...v.Children.toArray(n.props.children), ...o]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(W(v.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: s
    }), r)), {
      clonedElement: r,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((s) => {
    e.getEventListeners(s).forEach(({
      listener: o,
      type: i,
      useCapture: c
    }) => {
      r.addEventListener(i, o, c);
    });
  });
  const l = Array.from(e.childNodes);
  for (let s = 0; s < l.length; s++) {
    const n = l[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: o,
        portals: i
      } = U(n);
      t.push(...i), r.appendChild(o);
    } else n.nodeType === 3 && r.appendChild(n.cloneNode());
  }
  return {
    clonedElement: r,
    portals: t
  };
}
function st(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const V = ae(({
  slot: e,
  clone: t,
  className: r,
  style: l,
  observeAttributes: s
}, n) => {
  const o = A(), [i, c] = ee([]), {
    forceClone: _
  } = _e(), p = _ ? !0 : t;
  return N(() => {
    var y;
    if (!o.current || !e)
      return;
    let a = e;
    function w() {
      let m = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (m = a.children[0], m.tagName.toLowerCase() === "react-portal-target" && m.children[0] && (m = m.children[0])), st(n, m), r && m.classList.add(...r.split(" ")), l) {
        const h = nt(l);
        Object.keys(h).forEach((x) => {
          m.style[x] = h[x];
        });
      }
    }
    let f = null, b = null;
    if (p && window.MutationObserver) {
      let m = function() {
        var u, C, d;
        (u = o.current) != null && u.contains(a) && ((C = o.current) == null || C.removeChild(a));
        const {
          portals: x,
          clonedElement: S
        } = U(e);
        a = S, c(x), a.style.display = "contents", b && clearTimeout(b), b = setTimeout(() => {
          w();
        }, 50), (d = o.current) == null || d.appendChild(a);
      };
      m();
      const h = Te(() => {
        m(), f == null || f.disconnect(), f == null || f.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      f = new window.MutationObserver(h), f.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      a.style.display = "contents", w(), (y = o.current) == null || y.appendChild(a);
    return () => {
      var m, h;
      a.style.display = "", (m = o.current) != null && m.contains(a) && ((h = o.current) == null || h.removeChild(a)), f == null || f.disconnect();
    };
  }, [e, p, r, l, n, s, _]), v.createElement("react-child", {
    ref: o,
    style: {
      display: "contents"
    }
  }, ...i);
});
function lt(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function it(e, t = !1) {
  try {
    if (me(e))
      return e;
    if (t && !lt(e))
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
function T(e, t) {
  return te(() => it(e, t), [e, t]);
}
function at({
  value: e,
  onValueChange: t
}) {
  const [r, l] = ee(e), s = A(t);
  s.current = t;
  const n = A(r);
  return n.current = r, N(() => {
    s.current(r);
  }, [r]), N(() => {
    Pe(e, n.current) || l(e);
  }, [e]), [r, l];
}
function ct(e) {
  return Object.keys(e).reduce((t, r) => (e[r] !== void 0 && (t[r] = e[r]), t), {});
}
const ut = ({
  children: e,
  ...t
}) => /* @__PURE__ */ g.jsx(g.Fragment, {
  children: e(t)
});
function dt(e) {
  return v.createElement(ut, {
    children: e
  });
}
function $(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? dt((r) => /* @__PURE__ */ g.jsx(he, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ g.jsx(V, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...r
    })
  })) : /* @__PURE__ */ g.jsx(V, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function ft({
  key: e,
  slots: t,
  targets: r
}, l) {
  return t[e] ? (...s) => r ? r.map((n, o) => /* @__PURE__ */ g.jsx(v.Fragment, {
    children: $(n, {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }, o)) : /* @__PURE__ */ g.jsx(g.Fragment, {
    children: $(t[e], {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }) : void 0;
}
const ht = tt(({
  slots: e,
  children: t,
  count: r,
  showCount: l,
  onValueChange: s,
  onChange: n,
  elRef: o,
  setSlotParams: i,
  ...c
}) => {
  const _ = T(r == null ? void 0 : r.strategy), p = T(r == null ? void 0 : r.exceedFormatter), a = T(r == null ? void 0 : r.show), w = T(typeof l == "object" ? l.formatter : void 0), [f, b] = at({
    onValueChange: s,
    value: c.value
  });
  return /* @__PURE__ */ g.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ g.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ g.jsx(pe.TextArea, {
      ...c,
      ref: o,
      value: f,
      onChange: (y) => {
        n == null || n(y), b(y.target.value);
      },
      showCount: e["showCount.formatter"] ? {
        formatter: ft({
          slots: e,
          key: "showCount.formatter"
        })
      } : typeof l == "object" && w ? {
        ...l,
        formatter: w
      } : l,
      count: te(() => ct({
        ...r,
        exceedFormatter: p,
        strategy: _,
        show: a || (r == null ? void 0 : r.show)
      }), [r, p, _, a]),
      allowClear: e["allowClear.clearIcon"] ? {
        clearIcon: /* @__PURE__ */ g.jsx(V, {
          slot: e["allowClear.clearIcon"]
        })
      } : c.allowClear
    })]
  });
});
export {
  ht as InputTextarea,
  ht as default
};
