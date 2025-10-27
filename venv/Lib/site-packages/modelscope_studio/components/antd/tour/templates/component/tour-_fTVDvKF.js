import { i as fe, a as W, r as me, w as T, g as _e, b as he } from "./Index-CiHN6gxO.js";
const y = window.ms_globals.React, ce = window.ms_globals.React.forwardRef, ae = window.ms_globals.React.useRef, ue = window.ms_globals.React.useState, de = window.ms_globals.React.useEffect, $ = window.ms_globals.React.useMemo, N = window.ms_globals.ReactDOM.createPortal, pe = window.ms_globals.internalContext.useContextPropsContext, A = window.ms_globals.internalContext.ContextPropsProvider, ge = window.ms_globals.antd.Tour, we = window.ms_globals.createItemsContext.createItemsContext;
var xe = /\s/;
function be(t) {
  for (var e = t.length; e-- && xe.test(t.charAt(e)); )
    ;
  return e;
}
var ve = /^\s+/;
function ye(t) {
  return t && t.slice(0, be(t) + 1).replace(ve, "");
}
var B = NaN, Ee = /^[-+]0x[0-9a-f]+$/i, Ce = /^0b[01]+$/i, Ie = /^0o[0-7]+$/i, Se = parseInt;
function H(t) {
  if (typeof t == "number")
    return t;
  if (fe(t))
    return B;
  if (W(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = W(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = ye(t);
  var o = Ce.test(t);
  return o || Ie.test(t) ? Se(t.slice(2), o ? 2 : 8) : Ee.test(t) ? B : +t;
}
var L = function() {
  return me.Date.now();
}, Re = "Expected a function", Pe = Math.max, Te = Math.min;
function Oe(t, e, o) {
  var l, s, n, r, i, a, p = 0, g = !1, c = !1, h = !0;
  if (typeof t != "function")
    throw new TypeError(Re);
  e = H(e) || 0, W(o) && (g = !!o.leading, c = "maxWait" in o, n = c ? Pe(H(o.maxWait) || 0, e) : n, h = "trailing" in o ? !!o.trailing : h);
  function u(_) {
    var E = l, R = s;
    return l = s = void 0, p = _, r = t.apply(R, E), r;
  }
  function x(_) {
    return p = _, i = setTimeout(m, e), g ? u(_) : r;
  }
  function b(_) {
    var E = _ - a, R = _ - p, U = e - E;
    return c ? Te(U, n - R) : U;
  }
  function d(_) {
    var E = _ - a, R = _ - p;
    return a === void 0 || E >= e || E < 0 || c && R >= n;
  }
  function m() {
    var _ = L();
    if (d(_))
      return v(_);
    i = setTimeout(m, b(_));
  }
  function v(_) {
    return i = void 0, h && l ? u(_) : (l = s = void 0, r);
  }
  function S() {
    i !== void 0 && clearTimeout(i), p = 0, l = a = s = i = void 0;
  }
  function f() {
    return i === void 0 ? r : v(L());
  }
  function C() {
    var _ = L(), E = d(_);
    if (l = arguments, s = this, a = _, E) {
      if (i === void 0)
        return x(a);
      if (c)
        return clearTimeout(i), i = setTimeout(m, e), u(a);
    }
    return i === void 0 && (i = setTimeout(m, e)), r;
  }
  return C.cancel = S, C.flush = f, C;
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
var ke = y, je = Symbol.for("react.element"), Le = Symbol.for("react.fragment"), Fe = Object.prototype.hasOwnProperty, Ne = ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, We = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function te(t, e, o) {
  var l, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (r = e.ref);
  for (l in e) Fe.call(e, l) && !We.hasOwnProperty(l) && (s[l] = e[l]);
  if (t && t.defaultProps) for (l in e = t.defaultProps, e) s[l] === void 0 && (s[l] = e[l]);
  return {
    $$typeof: je,
    type: t,
    key: n,
    ref: r,
    props: s,
    _owner: Ne.current
  };
}
j.Fragment = Le;
j.jsx = te;
j.jsxs = te;
ee.exports = j;
var w = ee.exports;
const {
  SvelteComponent: Ae,
  assign: z,
  binding_callbacks: G,
  check_outros: Me,
  children: ne,
  claim_element: re,
  claim_space: De,
  component_subscribe: q,
  compute_slots: Ue,
  create_slot: Be,
  detach: I,
  element: se,
  empty: V,
  exclude_internal_props: J,
  get_all_dirty_from_scope: He,
  get_slot_changes: ze,
  group_outros: Ge,
  init: qe,
  insert_hydration: O,
  safe_not_equal: Ve,
  set_custom_element_data: oe,
  space: Je,
  transition_in: k,
  transition_out: M,
  update_slot_base: Xe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ye,
  getContext: Ke,
  onDestroy: Qe,
  setContext: Ze
} = window.__gradio__svelte__internal;
function X(t) {
  let e, o;
  const l = (
    /*#slots*/
    t[7].default
  ), s = Be(
    l,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = se("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      e = re(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = ne(e);
      s && s.l(r), r.forEach(I), this.h();
    },
    h() {
      oe(e, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      O(n, e, r), s && s.m(e, null), t[9](e), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && Xe(
        s,
        l,
        n,
        /*$$scope*/
        n[6],
        o ? ze(
          l,
          /*$$scope*/
          n[6],
          r,
          null
        ) : He(
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
      M(s, n), o = !1;
    },
    d(n) {
      n && I(e), s && s.d(n), t[9](null);
    }
  };
}
function $e(t) {
  let e, o, l, s, n = (
    /*$$slots*/
    t[4].default && X(t)
  );
  return {
    c() {
      e = se("react-portal-target"), o = Je(), n && n.c(), l = V(), this.h();
    },
    l(r) {
      e = re(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ne(e).forEach(I), o = De(r), n && n.l(r), l = V(), this.h();
    },
    h() {
      oe(e, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      O(r, e, i), t[8](e), O(r, o, i), n && n.m(r, i), O(r, l, i), s = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && k(n, 1)) : (n = X(r), n.c(), k(n, 1), n.m(l.parentNode, l)) : n && (Ge(), M(n, 1, 1, () => {
        n = null;
      }), Me());
    },
    i(r) {
      s || (k(n), s = !0);
    },
    o(r) {
      M(n), s = !1;
    },
    d(r) {
      r && (I(e), I(o), I(l)), t[8](null), n && n.d(r);
    }
  };
}
function Y(t) {
  const {
    svelteInit: e,
    ...o
  } = t;
  return o;
}
function et(t, e, o) {
  let l, s, {
    $$slots: n = {},
    $$scope: r
  } = e;
  const i = Ue(n);
  let {
    svelteInit: a
  } = e;
  const p = T(Y(e)), g = T();
  q(t, g, (f) => o(0, l = f));
  const c = T();
  q(t, c, (f) => o(1, s = f));
  const h = [], u = Ke("$$ms-gr-react-wrapper"), {
    slotKey: x,
    slotIndex: b,
    subSlotIndex: d
  } = _e() || {}, m = a({
    parent: u,
    props: p,
    target: g,
    slot: c,
    slotKey: x,
    slotIndex: b,
    subSlotIndex: d,
    onDestroy(f) {
      h.push(f);
    }
  });
  Ze("$$ms-gr-react-wrapper", m), Ye(() => {
    p.set(Y(e));
  }), Qe(() => {
    h.forEach((f) => f());
  });
  function v(f) {
    G[f ? "unshift" : "push"](() => {
      l = f, g.set(l);
    });
  }
  function S(f) {
    G[f ? "unshift" : "push"](() => {
      s = f, c.set(s);
    });
  }
  return t.$$set = (f) => {
    o(17, e = z(z({}, e), J(f))), "svelteInit" in f && o(5, a = f.svelteInit), "$$scope" in f && o(6, r = f.$$scope);
  }, e = J(e), [l, s, g, c, i, a, r, n, v, S];
}
class tt extends Ae {
  constructor(e) {
    super(), qe(this, e, et, $e, Ve, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _t
} = window.__gradio__svelte__internal, K = window.ms_globals.rerender, F = window.ms_globals.tree;
function nt(t, e = {}) {
  function o(l) {
    const s = T(), n = new tt({
      ...l,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: s,
            reactComponent: t,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: e.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, a = r.parent ?? F;
          return a.nodes = [...a.nodes, i], K({
            createPortal: N,
            node: F
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((p) => p.svelteInstance !== s), K({
              createPortal: N,
              node: F
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
const rt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function st(t) {
  return t ? Object.keys(t).reduce((e, o) => {
    const l = t[o];
    return e[o] = ot(o, l), e;
  }, {}) : {};
}
function ot(t, e) {
  return typeof e == "number" && !rt.includes(t) ? e + "px" : e;
}
function D(t) {
  const e = [], o = t.cloneNode(!1);
  if (t._reactElement) {
    const s = y.Children.toArray(t._reactElement.props.children).map((n) => {
      if (y.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = D(n.props.el);
        return y.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...y.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = t._reactElement.props.children, e.push(N(y.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: s
    }), o)), {
      clonedElement: o,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((s) => {
    t.getEventListeners(s).forEach(({
      listener: r,
      type: i,
      useCapture: a
    }) => {
      o.addEventListener(i, r, a);
    });
  });
  const l = Array.from(t.childNodes);
  for (let s = 0; s < l.length; s++) {
    const n = l[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = D(n);
      e.push(...i), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: e
  };
}
function lt(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const P = ce(({
  slot: t,
  clone: e,
  className: o,
  style: l,
  observeAttributes: s
}, n) => {
  const r = ae(), [i, a] = ue([]), {
    forceClone: p
  } = pe(), g = p ? !0 : e;
  return de(() => {
    var b;
    if (!r.current || !t)
      return;
    let c = t;
    function h() {
      let d = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (d = c.children[0], d.tagName.toLowerCase() === "react-portal-target" && d.children[0] && (d = d.children[0])), lt(n, d), o && d.classList.add(...o.split(" ")), l) {
        const m = st(l);
        Object.keys(m).forEach((v) => {
          d.style[v] = m[v];
        });
      }
    }
    let u = null, x = null;
    if (g && window.MutationObserver) {
      let d = function() {
        var f, C, _;
        (f = r.current) != null && f.contains(c) && ((C = r.current) == null || C.removeChild(c));
        const {
          portals: v,
          clonedElement: S
        } = D(t);
        c = S, a(v), c.style.display = "contents", x && clearTimeout(x), x = setTimeout(() => {
          h();
        }, 50), (_ = r.current) == null || _.appendChild(c);
      };
      d();
      const m = Oe(() => {
        d(), u == null || u.disconnect(), u == null || u.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      u = new window.MutationObserver(m), u.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", h(), (b = r.current) == null || b.appendChild(c);
    return () => {
      var d, m;
      c.style.display = "", (d = r.current) != null && d.contains(c) && ((m = r.current) == null || m.removeChild(c)), u == null || u.disconnect();
    };
  }, [t, g, o, l, n, s, p]), y.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
});
function it(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function ct(t, e = !1) {
  try {
    if (he(t))
      return t;
    if (e && !it(t))
      return;
    if (typeof t == "string") {
      let o = t.trim();
      return o.startsWith(";") && (o = o.slice(1)), o.endsWith(";") && (o = o.slice(0, -1)), new Function(`return (...args) => (${o})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function Q(t, e) {
  return $(() => ct(t, e), [t, e]);
}
const at = ({
  children: t,
  ...e
}) => /* @__PURE__ */ w.jsx(w.Fragment, {
  children: t(e)
});
function le(t) {
  return y.createElement(at, {
    children: t
  });
}
function ie(t, e, o) {
  const l = t.filter(Boolean);
  if (l.length !== 0)
    return l.map((s, n) => {
      var p;
      if (typeof s != "object")
        return s;
      const r = {
        ...s.props,
        key: ((p = s.props) == null ? void 0 : p.key) ?? (o ? `${o}-${n}` : `${n}`)
      };
      let i = r;
      Object.keys(s.slots).forEach((g) => {
        if (!s.slots[g] || !(s.slots[g] instanceof Element) && !s.slots[g].el)
          return;
        const c = g.split(".");
        c.forEach((m, v) => {
          i[m] || (i[m] = {}), v !== c.length - 1 && (i = r[m]);
        });
        const h = s.slots[g];
        let u, x, b = !1, d = e == null ? void 0 : e.forceClone;
        h instanceof Element ? u = h : (u = h.el, x = h.callback, b = h.clone ?? b, d = h.forceClone ?? d), d = d ?? !!x, i[c[c.length - 1]] = u ? x ? (...m) => (x(c[c.length - 1], m), /* @__PURE__ */ w.jsx(A, {
          ...s.ctx,
          params: m,
          forceClone: d,
          children: /* @__PURE__ */ w.jsx(P, {
            slot: u,
            clone: b
          })
        })) : le((m) => /* @__PURE__ */ w.jsx(A, {
          ...s.ctx,
          forceClone: d,
          children: /* @__PURE__ */ w.jsx(P, {
            ...m,
            slot: u,
            clone: b
          })
        })) : i[c[c.length - 1]], i = r;
      });
      const a = "children";
      return s[a] && (r[a] = ie(s[a], e, `${n}`)), r;
    });
}
function Z(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? le((o) => /* @__PURE__ */ w.jsx(A, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ w.jsx(P, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...o
    })
  })) : /* @__PURE__ */ w.jsx(P, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function ut({
  key: t,
  slots: e,
  targets: o
}, l) {
  return e[t] ? (...s) => o ? o.map((n, r) => /* @__PURE__ */ w.jsx(y.Fragment, {
    children: Z(n, {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ w.jsx(w.Fragment, {
    children: Z(e[t], {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }) : void 0;
}
const {
  withItemsContextProvider: dt,
  useItems: ft,
  ItemHandler: ht
} = we("antd-tour-items"), pt = nt(dt(["steps", "default"], ({
  slots: t,
  steps: e,
  children: o,
  onChange: l,
  onClose: s,
  getPopupContainer: n,
  setSlotParams: r,
  indicatorsRender: i,
  ...a
}) => {
  const p = Q(n), g = Q(i), {
    items: c
  } = ft(), h = c.steps.length > 0 ? c.steps : c.default;
  return /* @__PURE__ */ w.jsxs(w.Fragment, {
    children: [/* @__PURE__ */ w.jsx("div", {
      style: {
        display: "none"
      },
      children: o
    }), /* @__PURE__ */ w.jsx(ge, {
      ...a,
      steps: $(() => e || ie(h), [e, h]),
      onChange: (u) => {
        l == null || l(u);
      },
      closeIcon: t.closeIcon ? /* @__PURE__ */ w.jsx(P, {
        slot: t.closeIcon
      }) : a.closeIcon,
      indicatorsRender: t.indicatorsRender ? ut({
        slots: t,
        key: "indicatorsRender"
      }) : g,
      getPopupContainer: p,
      onClose: (u, ...x) => {
        s == null || s(u, ...x);
      }
    })]
  });
}));
export {
  pt as Tour,
  pt as default
};
