import { i as fe, a as B, r as pe, w as j, g as me, d as _e, b as R, c as ge } from "./Index-BqcdyDjl.js";
const C = window.ms_globals.React, A = window.ms_globals.React.useMemo, ne = window.ms_globals.React.useState, re = window.ms_globals.React.useEffect, ue = window.ms_globals.React.forwardRef, de = window.ms_globals.React.useRef, U = window.ms_globals.ReactDOM.createPortal, he = window.ms_globals.internalContext.useContextPropsContext, be = window.ms_globals.internalContext.ContextPropsProvider, O = window.ms_globals.antd.Typography;
var ye = /\s/;
function xe(e) {
  for (var t = e.length; t-- && ye.test(e.charAt(t)); )
    ;
  return t;
}
var Ce = /^\s+/;
function we(e) {
  return e && e.slice(0, xe(e) + 1).replace(Ce, "");
}
var K = NaN, ve = /^[-+]0x[0-9a-f]+$/i, Ee = /^0b[01]+$/i, Ie = /^0o[0-7]+$/i, Se = parseInt;
function V(e) {
  if (typeof e == "number")
    return e;
  if (fe(e))
    return K;
  if (B(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = B(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = we(e);
  var n = Ee.test(e);
  return n || Ie.test(e) ? Se(e.slice(2), n ? 2 : 8) : ve.test(e) ? K : +e;
}
var W = function() {
  return pe.Date.now();
}, Te = "Expected a function", Pe = Math.max, Re = Math.min;
function Oe(e, t, n) {
  var l, s, r, o, i, c, g = 0, h = !1, a = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(Te);
  t = V(t) || 0, B(n) && (h = !!n.leading, a = "maxWait" in n, r = a ? Pe(V(n.maxWait) || 0, t) : r, y = "trailing" in n ? !!n.trailing : y);
  function p(d) {
    var b = l, E = s;
    return l = s = void 0, g = d, o = e.apply(E, b), o;
  }
  function w(d) {
    return g = d, i = setTimeout(m, t), h ? p(d) : o;
  }
  function v(d) {
    var b = d - c, E = d - g, H = t - b;
    return a ? Re(H, r - E) : H;
  }
  function f(d) {
    var b = d - c, E = d - g;
    return c === void 0 || b >= t || b < 0 || a && E >= r;
  }
  function m() {
    var d = W();
    if (f(d))
      return x(d);
    i = setTimeout(m, v(d));
  }
  function x(d) {
    return i = void 0, y && l ? p(d) : (l = s = void 0, o);
  }
  function T() {
    i !== void 0 && clearTimeout(i), g = 0, l = c = s = i = void 0;
  }
  function u() {
    return i === void 0 ? o : x(W());
  }
  function S() {
    var d = W(), b = f(d);
    if (l = arguments, s = this, c = d, b) {
      if (i === void 0)
        return w(c);
      if (a)
        return clearTimeout(i), i = setTimeout(m, t), p(c);
    }
    return i === void 0 && (i = setTimeout(m, t)), o;
  }
  return S.cancel = T, S.flush = u, S;
}
var oe = {
  exports: {}
}, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je = C, ke = Symbol.for("react.element"), Le = Symbol.for("react.fragment"), Ae = Object.prototype.hasOwnProperty, Ne = je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, We = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function le(e, t, n) {
  var l, s = {}, r = null, o = null;
  n !== void 0 && (r = "" + n), t.key !== void 0 && (r = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (l in t) Ae.call(t, l) && !We.hasOwnProperty(l) && (s[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) s[l] === void 0 && (s[l] = t[l]);
  return {
    $$typeof: ke,
    type: e,
    key: r,
    ref: o,
    props: s,
    _owner: Ne.current
  };
}
N.Fragment = Le;
N.jsx = le;
N.jsxs = le;
oe.exports = N;
var _ = oe.exports;
const {
  SvelteComponent: Fe,
  assign: q,
  binding_callbacks: J,
  check_outros: Me,
  children: se,
  claim_element: ie,
  claim_space: De,
  component_subscribe: X,
  compute_slots: Ue,
  create_slot: Be,
  detach: P,
  element: ae,
  empty: Y,
  exclude_internal_props: Q,
  get_all_dirty_from_scope: ze,
  get_slot_changes: Ge,
  group_outros: He,
  init: Ke,
  insert_hydration: k,
  safe_not_equal: Ve,
  set_custom_element_data: ce,
  space: qe,
  transition_in: L,
  transition_out: z,
  update_slot_base: Je
} = window.__gradio__svelte__internal, {
  beforeUpdate: Xe,
  getContext: Ye,
  onDestroy: Qe,
  setContext: Ze
} = window.__gradio__svelte__internal;
function Z(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[7].default
  ), s = Be(
    l,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ae("svelte-slot"), s && s.c(), this.h();
    },
    l(r) {
      t = ie(r, "SVELTE-SLOT", {
        class: !0
      });
      var o = se(t);
      s && s.l(o), o.forEach(P), this.h();
    },
    h() {
      ce(t, "class", "svelte-1rt0kpf");
    },
    m(r, o) {
      k(r, t, o), s && s.m(t, null), e[9](t), n = !0;
    },
    p(r, o) {
      s && s.p && (!n || o & /*$$scope*/
      64) && Je(
        s,
        l,
        r,
        /*$$scope*/
        r[6],
        n ? Ge(
          l,
          /*$$scope*/
          r[6],
          o,
          null
        ) : ze(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      n || (L(s, r), n = !0);
    },
    o(r) {
      z(s, r), n = !1;
    },
    d(r) {
      r && P(t), s && s.d(r), e[9](null);
    }
  };
}
function $e(e) {
  let t, n, l, s, r = (
    /*$$slots*/
    e[4].default && Z(e)
  );
  return {
    c() {
      t = ae("react-portal-target"), n = qe(), r && r.c(), l = Y(), this.h();
    },
    l(o) {
      t = ie(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), se(t).forEach(P), n = De(o), r && r.l(o), l = Y(), this.h();
    },
    h() {
      ce(t, "class", "svelte-1rt0kpf");
    },
    m(o, i) {
      k(o, t, i), e[8](t), k(o, n, i), r && r.m(o, i), k(o, l, i), s = !0;
    },
    p(o, [i]) {
      /*$$slots*/
      o[4].default ? r ? (r.p(o, i), i & /*$$slots*/
      16 && L(r, 1)) : (r = Z(o), r.c(), L(r, 1), r.m(l.parentNode, l)) : r && (He(), z(r, 1, 1, () => {
        r = null;
      }), Me());
    },
    i(o) {
      s || (L(r), s = !0);
    },
    o(o) {
      z(r), s = !1;
    },
    d(o) {
      o && (P(t), P(n), P(l)), e[8](null), r && r.d(o);
    }
  };
}
function $(e) {
  const {
    svelteInit: t,
    ...n
  } = e;
  return n;
}
function et(e, t, n) {
  let l, s, {
    $$slots: r = {},
    $$scope: o
  } = t;
  const i = Ue(r);
  let {
    svelteInit: c
  } = t;
  const g = j($(t)), h = j();
  X(e, h, (u) => n(0, l = u));
  const a = j();
  X(e, a, (u) => n(1, s = u));
  const y = [], p = Ye("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: v,
    subSlotIndex: f
  } = me() || {}, m = c({
    parent: p,
    props: g,
    target: h,
    slot: a,
    slotKey: w,
    slotIndex: v,
    subSlotIndex: f,
    onDestroy(u) {
      y.push(u);
    }
  });
  Ze("$$ms-gr-react-wrapper", m), Xe(() => {
    g.set($(t));
  }), Qe(() => {
    y.forEach((u) => u());
  });
  function x(u) {
    J[u ? "unshift" : "push"](() => {
      l = u, h.set(l);
    });
  }
  function T(u) {
    J[u ? "unshift" : "push"](() => {
      s = u, a.set(s);
    });
  }
  return e.$$set = (u) => {
    n(17, t = q(q({}, t), Q(u))), "svelteInit" in u && n(5, c = u.svelteInit), "$$scope" in u && n(6, o = u.$$scope);
  }, t = Q(t), [l, s, h, a, i, c, o, r, x, T];
}
class tt extends Fe {
  constructor(t) {
    super(), Ke(this, t, et, $e, Ve, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _t
} = window.__gradio__svelte__internal, ee = window.ms_globals.rerender, F = window.ms_globals.tree;
function nt(e, t = {}) {
  function n(l) {
    const s = j(), r = new tt({
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
          }, c = o.parent ?? F;
          return c.nodes = [...c.nodes, i], ee({
            createPortal: U,
            node: F
          }), o.onDestroy(() => {
            c.nodes = c.nodes.filter((g) => g.svelteInstance !== s), ee({
              createPortal: U,
              node: F
            });
          }), i;
        },
        ...l.props
      }
    });
    return s.set(r), r;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(n);
    });
  });
}
function rt(e) {
  const [t, n] = ne(() => R(e));
  return re(() => {
    let l = !0;
    return e.subscribe((r) => {
      l && (l = !1, r === t) || n(r);
    });
  }, [e]), t;
}
function ot(e) {
  const t = A(() => _e(e, (n) => n), [e]);
  return rt(t);
}
const lt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function st(e) {
  return e ? Object.keys(e).reduce((t, n) => {
    const l = e[n];
    return t[n] = it(n, l), t;
  }, {}) : {};
}
function it(e, t) {
  return typeof t == "number" && !lt.includes(e) ? t + "px" : t;
}
function G(e) {
  const t = [], n = e.cloneNode(!1);
  if (e._reactElement) {
    const s = C.Children.toArray(e._reactElement.props.children).map((r) => {
      if (C.isValidElement(r) && r.props.__slot__) {
        const {
          portals: o,
          clonedElement: i
        } = G(r.props.el);
        return C.cloneElement(r, {
          ...r.props,
          el: i,
          children: [...C.Children.toArray(r.props.children), ...o]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(U(C.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: s
    }), n)), {
      clonedElement: n,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((s) => {
    e.getEventListeners(s).forEach(({
      listener: o,
      type: i,
      useCapture: c
    }) => {
      n.addEventListener(i, o, c);
    });
  });
  const l = Array.from(e.childNodes);
  for (let s = 0; s < l.length; s++) {
    const r = l[s];
    if (r.nodeType === 1) {
      const {
        clonedElement: o,
        portals: i
      } = G(r);
      t.push(...i), n.appendChild(o);
    } else r.nodeType === 3 && n.appendChild(r.cloneNode());
  }
  return {
    clonedElement: n,
    portals: t
  };
}
function at(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const I = ue(({
  slot: e,
  clone: t,
  className: n,
  style: l,
  observeAttributes: s
}, r) => {
  const o = de(), [i, c] = ne([]), {
    forceClone: g
  } = he(), h = g ? !0 : t;
  return re(() => {
    var v;
    if (!o.current || !e)
      return;
    let a = e;
    function y() {
      let f = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (f = a.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), at(r, f), n && f.classList.add(...n.split(" ")), l) {
        const m = st(l);
        Object.keys(m).forEach((x) => {
          f.style[x] = m[x];
        });
      }
    }
    let p = null, w = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var u, S, d;
        (u = o.current) != null && u.contains(a) && ((S = o.current) == null || S.removeChild(a));
        const {
          portals: x,
          clonedElement: T
        } = G(e);
        a = T, c(x), a.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          y();
        }, 50), (d = o.current) == null || d.appendChild(a);
      };
      f();
      const m = Oe(() => {
        f(), p == null || p.disconnect(), p == null || p.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      p = new window.MutationObserver(m), p.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      a.style.display = "contents", y(), (v = o.current) == null || v.appendChild(a);
    return () => {
      var f, m;
      a.style.display = "", (f = o.current) != null && f.contains(a) && ((m = o.current) == null || m.removeChild(a)), p == null || p.disconnect();
    };
  }, [e, h, n, l, r, s, g]), C.createElement("react-child", {
    ref: o,
    style: {
      display: "contents"
    }
  }, ...i);
});
function ct(e) {
  return A(() => {
    const t = C.Children.toArray(e), n = [], l = [];
    return t.forEach((s) => {
      s.props.node && s.props.nodeSlotKey ? n.push(s) : l.push(s);
    }), [n, l];
  }, [e]);
}
function M(e, t) {
  const n = A(() => C.Children.toArray(e.originalChildren || e).filter((r) => r.props.node && !r.props.node.ignore && (!t && !r.props.nodeSlotKey || t && t === r.props.nodeSlotKey)).sort((r, o) => {
    if (r.props.node.slotIndex && o.props.node.slotIndex) {
      const i = R(r.props.node.slotIndex) || 0, c = R(o.props.node.slotIndex) || 0;
      return i - c === 0 && r.props.node.subSlotIndex && o.props.node.subSlotIndex ? (R(r.props.node.subSlotIndex) || 0) - (R(o.props.node.subSlotIndex) || 0) : i - c;
    }
    return 0;
  }).map((r) => r.props.node.target), [e, t]);
  return ot(n);
}
function ut(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
const dt = ({
  children: e,
  ...t
}) => /* @__PURE__ */ _.jsx(_.Fragment, {
  children: e(t)
});
function ft(e) {
  return C.createElement(dt, {
    children: e
  });
}
function te(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? ft((n) => /* @__PURE__ */ _.jsx(be, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ _.jsx(I, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...n
    })
  })) : /* @__PURE__ */ _.jsx(I, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function pt({
  key: e,
  slots: t,
  targets: n
}, l) {
  return t[e] ? (...s) => n ? n.map((r, o) => /* @__PURE__ */ _.jsx(C.Fragment, {
    children: te(r, {
      clone: !0,
      params: s,
      forceClone: (l == null ? void 0 : l.forceClone) ?? !0
    })
  }, o)) : /* @__PURE__ */ _.jsx(_.Fragment, {
    children: te(t[e], {
      clone: !0,
      params: s,
      forceClone: (l == null ? void 0 : l.forceClone) ?? !0
    })
  }) : void 0;
}
function D(e) {
  return typeof e == "object" && e !== null ? e : {};
}
const gt = nt(({
  component: e,
  className: t,
  slots: n,
  children: l,
  copyable: s,
  editable: r,
  ellipsis: o,
  setSlotParams: i,
  value: c,
  ...g
}) => {
  var d;
  const h = M(l, "copyable.tooltips"), a = M(l, "copyable.icon"), y = n["copyable.icon"] || h.length > 0 || s, p = n["editable.icon"] || n["editable.tooltip"] || n["editable.enterIcon"] || r, w = n["ellipsis.symbol"] || n["ellipsis.tooltip"] || n["ellipsis.tooltip.title"] || o, v = D(s), f = D(r), m = D(o), x = A(() => {
    switch (e) {
      case "title":
        return O.Title;
      case "paragraph":
        return O.Paragraph;
      case "text":
        return O.Text;
      case "link":
        return O.Link;
    }
  }, [e]), [T, u] = ct(l), S = M(l);
  return /* @__PURE__ */ _.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ _.jsx("div", {
      style: {
        display: "none"
      },
      children: T
    }), /* @__PURE__ */ _.jsx(x, {
      ...g,
      className: ge(t, `ms-gr-antd-typography-${e}`),
      copyable: y ? ut({
        text: c,
        ...v,
        tooltips: h.length > 0 ? h.map((b, E) => /* @__PURE__ */ _.jsx(I, {
          slot: b
        }, E)) : v.tooltips,
        icon: a.length > 0 ? a.map((b, E) => /* @__PURE__ */ _.jsx(I, {
          slot: b,
          clone: !0
        }, E)) : v.icon
      }) : void 0,
      editable: p ? {
        ...f,
        icon: n["editable.icon"] ? /* @__PURE__ */ _.jsx(I, {
          slot: n["editable.icon"],
          clone: !0
        }) : f.icon,
        tooltip: n["editable.tooltip"] ? /* @__PURE__ */ _.jsx(I, {
          slot: n["editable.tooltip"]
        }) : f.tooltip,
        enterIcon: n["editable.enterIcon"] ? /* @__PURE__ */ _.jsx(I, {
          slot: n["editable.enterIcon"]
        }) : f.enterIcon
      } : void 0,
      ellipsis: e === "link" ? !!w : w ? {
        ...m,
        symbol: n["ellipsis.symbol"] ? pt({
          key: "ellipsis.symbol",
          slots: n
        }, {}) : m.symbol,
        tooltip: n["ellipsis.tooltip"] ? /* @__PURE__ */ _.jsx(I, {
          slot: n["ellipsis.tooltip"]
        }) : {
          ...m.tooltip,
          title: n["ellipsis.tooltip.title"] ? /* @__PURE__ */ _.jsx(I, {
            slot: n["ellipsis.tooltip.title"]
          }) : (d = m.tooltip) == null ? void 0 : d.title
        }
      } : void 0,
      children: S.length > 0 ? u : c
    })]
  });
});
export {
  gt as TypographyBase,
  gt as default
};
