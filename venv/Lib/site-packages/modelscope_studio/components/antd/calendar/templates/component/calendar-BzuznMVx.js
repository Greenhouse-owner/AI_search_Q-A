import { i as fe, a as M, r as me, w as k, g as _e, b as pe } from "./Index-BPst25l6.js";
const x = window.ms_globals.React, T = window.ms_globals.React.useMemo, ce = window.ms_globals.React.forwardRef, ae = window.ms_globals.React.useRef, ue = window.ms_globals.React.useState, de = window.ms_globals.React.useEffect, D = window.ms_globals.ReactDOM.createPortal, he = window.ms_globals.internalContext.useContextPropsContext, ge = window.ms_globals.internalContext.ContextPropsProvider, ye = window.ms_globals.antd.Calendar, G = window.ms_globals.dayjs;
var we = /\s/;
function ve(e) {
  for (var t = e.length; t-- && we.test(e.charAt(t)); )
    ;
  return t;
}
var be = /^\s+/;
function xe(e) {
  return e && e.slice(0, ve(e) + 1).replace(be, "");
}
var H = NaN, Ce = /^[-+]0x[0-9a-f]+$/i, Ee = /^0b[01]+$/i, Re = /^0o[0-7]+$/i, Se = parseInt;
function V(e) {
  if (typeof e == "number")
    return e;
  if (fe(e))
    return H;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = xe(e);
  var o = Ee.test(e);
  return o || Re.test(e) ? Se(e.slice(2), o ? 2 : 8) : Ce.test(e) ? H : +e;
}
var L = function() {
  return me.Date.now();
}, Ie = "Expected a function", Oe = Math.max, Te = Math.min;
function ke(e, t, o) {
  var s, l, n, r, i, f, p = 0, g = !1, a = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(Ie);
  t = V(t) || 0, M(o) && (g = !!o.leading, a = "maxWait" in o, n = a ? Oe(V(o.maxWait) || 0, t) : n, w = "trailing" in o ? !!o.trailing : w);
  function d(c) {
    var h = s, I = l;
    return s = l = void 0, p = c, r = e.apply(I, h), r;
  }
  function b(c) {
    return p = c, i = setTimeout(_, t), g ? d(c) : r;
  }
  function C(c) {
    var h = c - f, I = c - p, B = t - h;
    return a ? Te(B, n - I) : B;
  }
  function m(c) {
    var h = c - f, I = c - p;
    return f === void 0 || h >= t || h < 0 || a && I >= n;
  }
  function _() {
    var c = L();
    if (m(c))
      return v(c);
    i = setTimeout(_, C(c));
  }
  function v(c) {
    return i = void 0, w && s ? d(c) : (s = l = void 0, r);
  }
  function R() {
    i !== void 0 && clearTimeout(i), p = 0, s = f = l = i = void 0;
  }
  function u() {
    return i === void 0 ? r : v(L());
  }
  function E() {
    var c = L(), h = m(c);
    if (s = arguments, l = this, f = c, h) {
      if (i === void 0)
        return b(f);
      if (a)
        return clearTimeout(i), i = setTimeout(_, t), d(f);
    }
    return i === void 0 && (i = setTimeout(_, t)), r;
  }
  return E.cancel = R, E.flush = u, E;
}
var ne = {
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
var Pe = x, je = Symbol.for("react.element"), Fe = Symbol.for("react.fragment"), Le = Object.prototype.hasOwnProperty, Ae = Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ne = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function re(e, t, o) {
  var s, l = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (s in t) Le.call(t, s) && !Ne.hasOwnProperty(s) && (l[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) l[s] === void 0 && (l[s] = t[s]);
  return {
    $$typeof: je,
    type: e,
    key: n,
    ref: r,
    props: l,
    _owner: Ae.current
  };
}
F.Fragment = Fe;
F.jsx = re;
F.jsxs = re;
ne.exports = F;
var y = ne.exports;
const {
  SvelteComponent: We,
  assign: K,
  binding_callbacks: q,
  check_outros: De,
  children: oe,
  claim_element: le,
  claim_space: Me,
  component_subscribe: J,
  compute_slots: Ue,
  create_slot: ze,
  detach: S,
  element: se,
  empty: X,
  exclude_internal_props: Y,
  get_all_dirty_from_scope: Be,
  get_slot_changes: Ge,
  group_outros: He,
  init: Ve,
  insert_hydration: P,
  safe_not_equal: Ke,
  set_custom_element_data: ie,
  space: qe,
  transition_in: j,
  transition_out: U,
  update_slot_base: Je
} = window.__gradio__svelte__internal, {
  beforeUpdate: Xe,
  getContext: Ye,
  onDestroy: Qe,
  setContext: Ze
} = window.__gradio__svelte__internal;
function Q(e) {
  let t, o;
  const s = (
    /*#slots*/
    e[7].default
  ), l = ze(
    s,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = se("svelte-slot"), l && l.c(), this.h();
    },
    l(n) {
      t = le(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = oe(t);
      l && l.l(r), r.forEach(S), this.h();
    },
    h() {
      ie(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      P(n, t, r), l && l.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      l && l.p && (!o || r & /*$$scope*/
      64) && Je(
        l,
        s,
        n,
        /*$$scope*/
        n[6],
        o ? Ge(
          s,
          /*$$scope*/
          n[6],
          r,
          null
        ) : Be(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (j(l, n), o = !0);
    },
    o(n) {
      U(l, n), o = !1;
    },
    d(n) {
      n && S(t), l && l.d(n), e[9](null);
    }
  };
}
function $e(e) {
  let t, o, s, l, n = (
    /*$$slots*/
    e[4].default && Q(e)
  );
  return {
    c() {
      t = se("react-portal-target"), o = qe(), n && n.c(), s = X(), this.h();
    },
    l(r) {
      t = le(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), oe(t).forEach(S), o = Me(r), n && n.l(r), s = X(), this.h();
    },
    h() {
      ie(t, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      P(r, t, i), e[8](t), P(r, o, i), n && n.m(r, i), P(r, s, i), l = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && j(n, 1)) : (n = Q(r), n.c(), j(n, 1), n.m(s.parentNode, s)) : n && (He(), U(n, 1, 1, () => {
        n = null;
      }), De());
    },
    i(r) {
      l || (j(n), l = !0);
    },
    o(r) {
      U(n), l = !1;
    },
    d(r) {
      r && (S(t), S(o), S(s)), e[8](null), n && n.d(r);
    }
  };
}
function Z(e) {
  const {
    svelteInit: t,
    ...o
  } = e;
  return o;
}
function et(e, t, o) {
  let s, l, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const i = Ue(n);
  let {
    svelteInit: f
  } = t;
  const p = k(Z(t)), g = k();
  J(e, g, (u) => o(0, s = u));
  const a = k();
  J(e, a, (u) => o(1, l = u));
  const w = [], d = Ye("$$ms-gr-react-wrapper"), {
    slotKey: b,
    slotIndex: C,
    subSlotIndex: m
  } = _e() || {}, _ = f({
    parent: d,
    props: p,
    target: g,
    slot: a,
    slotKey: b,
    slotIndex: C,
    subSlotIndex: m,
    onDestroy(u) {
      w.push(u);
    }
  });
  Ze("$$ms-gr-react-wrapper", _), Xe(() => {
    p.set(Z(t));
  }), Qe(() => {
    w.forEach((u) => u());
  });
  function v(u) {
    q[u ? "unshift" : "push"](() => {
      s = u, g.set(s);
    });
  }
  function R(u) {
    q[u ? "unshift" : "push"](() => {
      l = u, a.set(l);
    });
  }
  return e.$$set = (u) => {
    o(17, t = K(K({}, t), Y(u))), "svelteInit" in u && o(5, f = u.svelteInit), "$$scope" in u && o(6, r = u.$$scope);
  }, t = Y(t), [s, l, g, a, i, f, r, n, v, R];
}
class tt extends We {
  constructor(t) {
    super(), Ve(this, t, et, $e, Ke, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ft
} = window.__gradio__svelte__internal, $ = window.ms_globals.rerender, A = window.ms_globals.tree;
function nt(e, t = {}) {
  function o(s) {
    const l = k(), n = new tt({
      ...s,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: l,
            reactComponent: e,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: t.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, f = r.parent ?? A;
          return f.nodes = [...f.nodes, i], $({
            createPortal: D,
            node: A
          }), r.onDestroy(() => {
            f.nodes = f.nodes.filter((p) => p.svelteInstance !== l), $({
              createPortal: D,
              node: A
            });
          }), i;
        },
        ...s.props
      }
    });
    return l.set(n), n;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(o);
    });
  });
}
function rt(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function ot(e, t = !1) {
  try {
    if (pe(e))
      return e;
    if (t && !rt(e))
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
function O(e, t) {
  return T(() => ot(e, t), [e, t]);
}
const lt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function st(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const s = e[o];
    return t[o] = it(o, s), t;
  }, {}) : {};
}
function it(e, t) {
  return typeof t == "number" && !lt.includes(e) ? t + "px" : t;
}
function z(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const l = x.Children.toArray(e._reactElement.props.children).map((n) => {
      if (x.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = z(n.props.el);
        return x.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...x.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return l.originalChildren = e._reactElement.props.children, t.push(D(x.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: l
    }), o)), {
      clonedElement: o,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((l) => {
    e.getEventListeners(l).forEach(({
      listener: r,
      type: i,
      useCapture: f
    }) => {
      o.addEventListener(i, r, f);
    });
  });
  const s = Array.from(e.childNodes);
  for (let l = 0; l < s.length; l++) {
    const n = s[l];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = z(n);
      t.push(...i), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function ct(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const ee = ce(({
  slot: e,
  clone: t,
  className: o,
  style: s,
  observeAttributes: l
}, n) => {
  const r = ae(), [i, f] = ue([]), {
    forceClone: p
  } = he(), g = p ? !0 : t;
  return de(() => {
    var C;
    if (!r.current || !e)
      return;
    let a = e;
    function w() {
      let m = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (m = a.children[0], m.tagName.toLowerCase() === "react-portal-target" && m.children[0] && (m = m.children[0])), ct(n, m), o && m.classList.add(...o.split(" ")), s) {
        const _ = st(s);
        Object.keys(_).forEach((v) => {
          m.style[v] = _[v];
        });
      }
    }
    let d = null, b = null;
    if (g && window.MutationObserver) {
      let m = function() {
        var u, E, c;
        (u = r.current) != null && u.contains(a) && ((E = r.current) == null || E.removeChild(a));
        const {
          portals: v,
          clonedElement: R
        } = z(e);
        a = R, f(v), a.style.display = "contents", b && clearTimeout(b), b = setTimeout(() => {
          w();
        }, 50), (c = r.current) == null || c.appendChild(a);
      };
      m();
      const _ = ke(() => {
        m(), d == null || d.disconnect(), d == null || d.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      d = new window.MutationObserver(_), d.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      a.style.display = "contents", w(), (C = r.current) == null || C.appendChild(a);
    return () => {
      var m, _;
      a.style.display = "", (m = r.current) != null && m.contains(a) && ((_ = r.current) == null || _.removeChild(a)), d == null || d.disconnect();
    };
  }, [e, g, o, s, n, l, p]), x.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
}), at = ({
  children: e,
  ...t
}) => /* @__PURE__ */ y.jsx(y.Fragment, {
  children: e(t)
});
function ut(e) {
  return x.createElement(at, {
    children: e
  });
}
function te(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? ut((o) => /* @__PURE__ */ y.jsx(ge, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ y.jsx(ee, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...o
    })
  })) : /* @__PURE__ */ y.jsx(ee, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function N({
  key: e,
  slots: t,
  targets: o
}, s) {
  return t[e] ? (...l) => o ? o.map((n, r) => /* @__PURE__ */ y.jsx(x.Fragment, {
    children: te(n, {
      clone: !0,
      params: l,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ y.jsx(y.Fragment, {
    children: te(t[e], {
      clone: !0,
      params: l,
      forceClone: !0
    })
  }) : void 0;
}
function W(e) {
  return G(typeof e == "number" ? e * 1e3 : e);
}
const mt = nt(({
  disabledDate: e,
  value: t,
  defaultValue: o,
  validRange: s,
  onChange: l,
  onPanelChange: n,
  onSelect: r,
  onValueChange: i,
  setSlotParams: f,
  cellRender: p,
  fullCellRender: g,
  headerRender: a,
  children: w,
  slots: d,
  ...b
}) => {
  const C = O(e), m = O(p), _ = O(g), v = O(a), R = T(() => t ? W(t) : void 0, [t]), u = T(() => o ? W(o) : void 0, [o]), E = T(() => Array.isArray(s) ? s.map((c) => W(c)) : void 0, [s]);
  return /* @__PURE__ */ y.jsxs(y.Fragment, {
    children: [/* @__PURE__ */ y.jsx("div", {
      style: {
        display: "none"
      },
      children: w
    }), /* @__PURE__ */ y.jsx(ye, {
      ...b,
      value: R,
      defaultValue: u,
      validRange: E,
      disabledDate: C,
      cellRender: d.cellRender ? N({
        slots: d,
        key: "cellRender"
      }) : m,
      fullCellRender: d.fullCellRender ? N({
        slots: d,
        key: "fullCellRender"
      }) : _,
      headerRender: d.headerRender ? N({
        slots: d,
        key: "headerRender"
      }) : v,
      onChange: (c, ...h) => {
        i(c.valueOf() / 1e3), l == null || l(c.valueOf() / 1e3, ...h);
      },
      onPanelChange: (c, ...h) => {
        n == null || n(c.valueOf() / 1e3, ...h);
      },
      onSelect: (c, ...h) => {
        r == null || r(c.valueOf() / 1e3, ...h);
      }
    })]
  });
});
export {
  mt as Calendar,
  mt as default
};
