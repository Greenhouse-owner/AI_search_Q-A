import { i as ae, a as N, r as ue, w as P, g as de, b as fe } from "./Index-cbV4VWu9.js";
const y = window.ms_globals.React, oe = window.ms_globals.React.forwardRef, se = window.ms_globals.React.useRef, ie = window.ms_globals.React.useState, le = window.ms_globals.React.useEffect, ce = window.ms_globals.React.useMemo, F = window.ms_globals.ReactDOM.createPortal, me = window.ms_globals.internalContext.useContextPropsContext, _e = window.ms_globals.internalContext.ContextPropsProvider, he = window.ms_globals.antd.Pagination;
var pe = /\s/;
function ge(e) {
  for (var t = e.length; t-- && pe.test(e.charAt(t)); )
    ;
  return t;
}
var we = /^\s+/;
function be(e) {
  return e && e.slice(0, ge(e) + 1).replace(we, "");
}
var D = NaN, ye = /^[-+]0x[0-9a-f]+$/i, ve = /^0b[01]+$/i, xe = /^0o[0-7]+$/i, Ee = parseInt;
function U(e) {
  if (typeof e == "number")
    return e;
  if (ae(e))
    return D;
  if (N(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = N(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = be(e);
  var o = ve.test(e);
  return o || xe.test(e) ? Ee(e.slice(2), o ? 2 : 8) : ye.test(e) ? D : +e;
}
var j = function() {
  return ue.Date.now();
}, Ce = "Expected a function", Se = Math.max, Ie = Math.min;
function Re(e, t, o) {
  var s, i, n, r, l, u, _ = 0, g = !1, c = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(Ce);
  t = U(t) || 0, N(o) && (g = !!o.leading, c = "maxWait" in o, n = c ? Se(U(o.maxWait) || 0, t) : n, w = "trailing" in o ? !!o.trailing : w);
  function m(d) {
    var v = s, R = i;
    return s = i = void 0, _ = d, r = e.apply(R, v), r;
  }
  function x(d) {
    return _ = d, l = setTimeout(h, t), g ? m(d) : r;
  }
  function E(d) {
    var v = d - u, R = d - _, B = t - v;
    return c ? Ie(B, n - R) : B;
  }
  function f(d) {
    var v = d - u, R = d - _;
    return u === void 0 || v >= t || v < 0 || c && R >= n;
  }
  function h() {
    var d = j();
    if (f(d))
      return b(d);
    l = setTimeout(h, E(d));
  }
  function b(d) {
    return l = void 0, w && s ? m(d) : (s = i = void 0, r);
  }
  function I() {
    l !== void 0 && clearTimeout(l), _ = 0, s = u = i = l = void 0;
  }
  function a() {
    return l === void 0 ? r : b(j());
  }
  function C() {
    var d = j(), v = f(d);
    if (s = arguments, i = this, u = d, v) {
      if (l === void 0)
        return x(u);
      if (c)
        return clearTimeout(l), l = setTimeout(h, t), m(u);
    }
    return l === void 0 && (l = setTimeout(h, t)), r;
  }
  return C.cancel = I, C.flush = a, C;
}
var Z = {
  exports: {}
}, O = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe = y, Te = Symbol.for("react.element"), ke = Symbol.for("react.fragment"), Oe = Object.prototype.hasOwnProperty, je = Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function $(e, t, o) {
  var s, i = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (s in t) Oe.call(t, s) && !Le.hasOwnProperty(s) && (i[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) i[s] === void 0 && (i[s] = t[s]);
  return {
    $$typeof: Te,
    type: e,
    key: n,
    ref: r,
    props: i,
    _owner: je.current
  };
}
O.Fragment = ke;
O.jsx = $;
O.jsxs = $;
Z.exports = O;
var p = Z.exports;
const {
  SvelteComponent: Fe,
  assign: z,
  binding_callbacks: G,
  check_outros: Ne,
  children: ee,
  claim_element: te,
  claim_space: We,
  component_subscribe: H,
  compute_slots: Ae,
  create_slot: Me,
  detach: S,
  element: ne,
  empty: J,
  exclude_internal_props: K,
  get_all_dirty_from_scope: Be,
  get_slot_changes: De,
  group_outros: Ue,
  init: ze,
  insert_hydration: T,
  safe_not_equal: Ge,
  set_custom_element_data: re,
  space: He,
  transition_in: k,
  transition_out: W,
  update_slot_base: Je
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ke,
  getContext: Qe,
  onDestroy: qe,
  setContext: Ve
} = window.__gradio__svelte__internal;
function Q(e) {
  let t, o;
  const s = (
    /*#slots*/
    e[7].default
  ), i = Me(
    s,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ne("svelte-slot"), i && i.c(), this.h();
    },
    l(n) {
      t = te(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = ee(t);
      i && i.l(r), r.forEach(S), this.h();
    },
    h() {
      re(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      T(n, t, r), i && i.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      i && i.p && (!o || r & /*$$scope*/
      64) && Je(
        i,
        s,
        n,
        /*$$scope*/
        n[6],
        o ? De(
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
      o || (k(i, n), o = !0);
    },
    o(n) {
      W(i, n), o = !1;
    },
    d(n) {
      n && S(t), i && i.d(n), e[9](null);
    }
  };
}
function Xe(e) {
  let t, o, s, i, n = (
    /*$$slots*/
    e[4].default && Q(e)
  );
  return {
    c() {
      t = ne("react-portal-target"), o = He(), n && n.c(), s = J(), this.h();
    },
    l(r) {
      t = te(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ee(t).forEach(S), o = We(r), n && n.l(r), s = J(), this.h();
    },
    h() {
      re(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      T(r, t, l), e[8](t), T(r, o, l), n && n.m(r, l), T(r, s, l), i = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && k(n, 1)) : (n = Q(r), n.c(), k(n, 1), n.m(s.parentNode, s)) : n && (Ue(), W(n, 1, 1, () => {
        n = null;
      }), Ne());
    },
    i(r) {
      i || (k(n), i = !0);
    },
    o(r) {
      W(n), i = !1;
    },
    d(r) {
      r && (S(t), S(o), S(s)), e[8](null), n && n.d(r);
    }
  };
}
function q(e) {
  const {
    svelteInit: t,
    ...o
  } = e;
  return o;
}
function Ye(e, t, o) {
  let s, i, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Ae(n);
  let {
    svelteInit: u
  } = t;
  const _ = P(q(t)), g = P();
  H(e, g, (a) => o(0, s = a));
  const c = P();
  H(e, c, (a) => o(1, i = a));
  const w = [], m = Qe("$$ms-gr-react-wrapper"), {
    slotKey: x,
    slotIndex: E,
    subSlotIndex: f
  } = de() || {}, h = u({
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
  Ve("$$ms-gr-react-wrapper", h), Ke(() => {
    _.set(q(t));
  }), qe(() => {
    w.forEach((a) => a());
  });
  function b(a) {
    G[a ? "unshift" : "push"](() => {
      s = a, g.set(s);
    });
  }
  function I(a) {
    G[a ? "unshift" : "push"](() => {
      i = a, c.set(i);
    });
  }
  return e.$$set = (a) => {
    o(17, t = z(z({}, t), K(a))), "svelteInit" in a && o(5, u = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = K(t), [s, i, g, c, l, u, r, n, b, I];
}
class Ze extends Fe {
  constructor(t) {
    super(), ze(this, t, Ye, Xe, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ut
} = window.__gradio__svelte__internal, V = window.ms_globals.rerender, L = window.ms_globals.tree;
function $e(e, t = {}) {
  function o(s) {
    const i = P(), n = new Ze({
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
          }, u = r.parent ?? L;
          return u.nodes = [...u.nodes, l], V({
            createPortal: F,
            node: L
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((_) => _.svelteInstance !== i), V({
              createPortal: F,
              node: L
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
const et = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function tt(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const s = e[o];
    return t[o] = nt(o, s), t;
  }, {}) : {};
}
function nt(e, t) {
  return typeof t == "number" && !et.includes(e) ? t + "px" : t;
}
function A(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const i = y.Children.toArray(e._reactElement.props.children).map((n) => {
      if (y.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = A(n.props.el);
        return y.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...y.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return i.originalChildren = e._reactElement.props.children, t.push(F(y.cloneElement(e._reactElement, {
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
      useCapture: u
    }) => {
      o.addEventListener(l, r, u);
    });
  });
  const s = Array.from(e.childNodes);
  for (let i = 0; i < s.length; i++) {
    const n = s[i];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: l
      } = A(n);
      t.push(...l), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function rt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const M = oe(({
  slot: e,
  clone: t,
  className: o,
  style: s,
  observeAttributes: i
}, n) => {
  const r = se(), [l, u] = ie([]), {
    forceClone: _
  } = me(), g = _ ? !0 : t;
  return le(() => {
    var E;
    if (!r.current || !e)
      return;
    let c = e;
    function w() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), rt(n, f), o && f.classList.add(...o.split(" ")), s) {
        const h = tt(s);
        Object.keys(h).forEach((b) => {
          f.style[b] = h[b];
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
      const h = Re(() => {
        f(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(h), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", w(), (E = r.current) == null || E.appendChild(c);
    return () => {
      var f, h;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((h = r.current) == null || h.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, g, o, s, n, i, _]), y.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
});
function ot(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function st(e, t = !1) {
  try {
    if (fe(e))
      return e;
    if (t && !ot(e))
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
function X(e, t) {
  return ce(() => st(e, t), [e, t]);
}
const it = ({
  children: e,
  ...t
}) => /* @__PURE__ */ p.jsx(p.Fragment, {
  children: e(t)
});
function lt(e) {
  return y.createElement(it, {
    children: e
  });
}
function Y(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? lt((o) => /* @__PURE__ */ p.jsx(_e, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ p.jsx(M, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...o
    })
  })) : /* @__PURE__ */ p.jsx(M, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function ct({
  key: e,
  slots: t,
  targets: o
}, s) {
  return t[e] ? (...i) => o ? o.map((n, r) => /* @__PURE__ */ p.jsx(y.Fragment, {
    children: Y(n, {
      clone: !0,
      params: i,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }, r)) : /* @__PURE__ */ p.jsx(p.Fragment, {
    children: Y(t[e], {
      clone: !0,
      params: i,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }) : void 0;
}
const dt = $e(({
  slots: e,
  showTotal: t,
  showQuickJumper: o,
  onChange: s,
  children: i,
  itemRender: n,
  setSlotParams: r,
  ...l
}) => {
  const u = X(n), _ = X(t);
  return /* @__PURE__ */ p.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ p.jsx("div", {
      style: {
        display: "none"
      },
      children: i
    }), /* @__PURE__ */ p.jsx(he, {
      ...l,
      showTotal: t ? _ : void 0,
      itemRender: e.itemRender ? ct({
        slots: e,
        key: "itemRender"
      }, {}) : u,
      onChange: (g, c) => {
        s == null || s(g, c);
      },
      showQuickJumper: e["showQuickJumper.goButton"] ? {
        goButton: /* @__PURE__ */ p.jsx(M, {
          slot: e["showQuickJumper.goButton"]
        })
      } : o
    })]
  });
});
export {
  dt as Pagination,
  dt as default
};
