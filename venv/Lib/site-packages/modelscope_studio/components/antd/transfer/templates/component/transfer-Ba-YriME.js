import { i as fe, a as M, r as me, w as k, g as pe, d as _e, b as O, c as ge } from "./Index-DmxECaEr.js";
const w = window.ms_globals.React, B = window.ms_globals.React.useMemo, ne = window.ms_globals.React.useState, re = window.ms_globals.React.useEffect, ue = window.ms_globals.React.forwardRef, de = window.ms_globals.React.useRef, W = window.ms_globals.ReactDOM.createPortal, he = window.ms_globals.internalContext.useContextPropsContext, be = window.ms_globals.internalContext.ContextPropsProvider, xe = window.ms_globals.antd.Transfer;
var we = /\s/;
function ve(e) {
  for (var t = e.length; t-- && we.test(e.charAt(t)); )
    ;
  return t;
}
var ye = /^\s+/;
function Ce(e) {
  return e && e.slice(0, ve(e) + 1).replace(ye, "");
}
var G = NaN, Ee = /^[-+]0x[0-9a-f]+$/i, Ie = /^0b[01]+$/i, Se = /^0o[0-7]+$/i, Te = parseInt;
function H(e) {
  if (typeof e == "number")
    return e;
  if (fe(e))
    return G;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ce(e);
  var o = Ie.test(e);
  return o || Se.test(e) ? Te(e.slice(2), o ? 2 : 8) : Ee.test(e) ? G : +e;
}
var A = function() {
  return me.Date.now();
}, Re = "Expected a function", Oe = Math.max, Pe = Math.min;
function ke(e, t, o) {
  var l, s, n, r, i, u, b = 0, g = !1, c = !1, x = !0;
  if (typeof e != "function")
    throw new TypeError(Re);
  t = H(t) || 0, M(o) && (g = !!o.leading, c = "maxWait" in o, n = c ? Oe(H(o.maxWait) || 0, t) : n, x = "trailing" in o ? !!o.trailing : x);
  function p(f) {
    var C = l, R = s;
    return l = s = void 0, b = f, r = e.apply(R, C), r;
  }
  function v(f) {
    return b = f, i = setTimeout(a, t), g ? p(f) : r;
  }
  function y(f) {
    var C = f - u, R = f - b, z = t - C;
    return c ? Pe(z, n - R) : z;
  }
  function m(f) {
    var C = f - u, R = f - b;
    return u === void 0 || C >= t || C < 0 || c && R >= n;
  }
  function a() {
    var f = A();
    if (m(f))
      return h(f);
    i = setTimeout(a, y(f));
  }
  function h(f) {
    return i = void 0, x && l ? p(f) : (l = s = void 0, r);
  }
  function T() {
    i !== void 0 && clearTimeout(i), b = 0, l = u = s = i = void 0;
  }
  function d() {
    return i === void 0 ? r : h(A());
  }
  function E() {
    var f = A(), C = m(f);
    if (l = arguments, s = this, u = f, C) {
      if (i === void 0)
        return v(u);
      if (c)
        return clearTimeout(i), i = setTimeout(a, t), p(u);
    }
    return i === void 0 && (i = setTimeout(a, t)), r;
  }
  return E.cancel = T, E.flush = d, E;
}
var oe = {
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
var Fe = w, Le = Symbol.for("react.element"), je = Symbol.for("react.fragment"), Ae = Object.prototype.hasOwnProperty, Ne = Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, We = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function se(e, t, o) {
  var l, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (l in t) Ae.call(t, l) && !We.hasOwnProperty(l) && (s[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) s[l] === void 0 && (s[l] = t[l]);
  return {
    $$typeof: Le,
    type: e,
    key: n,
    ref: r,
    props: s,
    _owner: Ne.current
  };
}
j.Fragment = je;
j.jsx = se;
j.jsxs = se;
oe.exports = j;
var _ = oe.exports;
const {
  SvelteComponent: Me,
  assign: V,
  binding_callbacks: q,
  check_outros: De,
  children: le,
  claim_element: ie,
  claim_space: Ue,
  component_subscribe: J,
  compute_slots: Be,
  create_slot: ze,
  detach: I,
  element: ce,
  empty: K,
  exclude_internal_props: X,
  get_all_dirty_from_scope: Ge,
  get_slot_changes: He,
  group_outros: Ve,
  init: qe,
  insert_hydration: F,
  safe_not_equal: Je,
  set_custom_element_data: ae,
  space: Ke,
  transition_in: L,
  transition_out: D,
  update_slot_base: Xe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ye,
  getContext: Qe,
  onDestroy: Ze,
  setContext: $e
} = window.__gradio__svelte__internal;
function Y(e) {
  let t, o;
  const l = (
    /*#slots*/
    e[7].default
  ), s = ze(
    l,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ce("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      t = ie(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = le(t);
      s && s.l(r), r.forEach(I), this.h();
    },
    h() {
      ae(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      F(n, t, r), s && s.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && Xe(
        s,
        l,
        n,
        /*$$scope*/
        n[6],
        o ? He(
          l,
          /*$$scope*/
          n[6],
          r,
          null
        ) : Ge(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (L(s, n), o = !0);
    },
    o(n) {
      D(s, n), o = !1;
    },
    d(n) {
      n && I(t), s && s.d(n), e[9](null);
    }
  };
}
function et(e) {
  let t, o, l, s, n = (
    /*$$slots*/
    e[4].default && Y(e)
  );
  return {
    c() {
      t = ce("react-portal-target"), o = Ke(), n && n.c(), l = K(), this.h();
    },
    l(r) {
      t = ie(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), le(t).forEach(I), o = Ue(r), n && n.l(r), l = K(), this.h();
    },
    h() {
      ae(t, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      F(r, t, i), e[8](t), F(r, o, i), n && n.m(r, i), F(r, l, i), s = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && L(n, 1)) : (n = Y(r), n.c(), L(n, 1), n.m(l.parentNode, l)) : n && (Ve(), D(n, 1, 1, () => {
        n = null;
      }), De());
    },
    i(r) {
      s || (L(n), s = !0);
    },
    o(r) {
      D(n), s = !1;
    },
    d(r) {
      r && (I(t), I(o), I(l)), e[8](null), n && n.d(r);
    }
  };
}
function Q(e) {
  const {
    svelteInit: t,
    ...o
  } = e;
  return o;
}
function tt(e, t, o) {
  let l, s, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const i = Be(n);
  let {
    svelteInit: u
  } = t;
  const b = k(Q(t)), g = k();
  J(e, g, (d) => o(0, l = d));
  const c = k();
  J(e, c, (d) => o(1, s = d));
  const x = [], p = Qe("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: y,
    subSlotIndex: m
  } = pe() || {}, a = u({
    parent: p,
    props: b,
    target: g,
    slot: c,
    slotKey: v,
    slotIndex: y,
    subSlotIndex: m,
    onDestroy(d) {
      x.push(d);
    }
  });
  $e("$$ms-gr-react-wrapper", a), Ye(() => {
    b.set(Q(t));
  }), Ze(() => {
    x.forEach((d) => d());
  });
  function h(d) {
    q[d ? "unshift" : "push"](() => {
      l = d, g.set(l);
    });
  }
  function T(d) {
    q[d ? "unshift" : "push"](() => {
      s = d, c.set(s);
    });
  }
  return e.$$set = (d) => {
    o(17, t = V(V({}, t), X(d))), "svelteInit" in d && o(5, u = d.svelteInit), "$$scope" in d && o(6, r = d.$$scope);
  }, t = X(t), [l, s, g, c, i, u, r, n, h, T];
}
class nt extends Me {
  constructor(t) {
    super(), qe(this, t, tt, et, Je, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _t
} = window.__gradio__svelte__internal, Z = window.ms_globals.rerender, N = window.ms_globals.tree;
function rt(e, t = {}) {
  function o(l) {
    const s = k(), n = new nt({
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
          }, u = r.parent ?? N;
          return u.nodes = [...u.nodes, i], Z({
            createPortal: W,
            node: N
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((b) => b.svelteInstance !== s), Z({
              createPortal: W,
              node: N
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
function ot(e) {
  const [t, o] = ne(() => O(e));
  return re(() => {
    let l = !0;
    return e.subscribe((n) => {
      l && (l = !1, n === t) || o(n);
    });
  }, [e]), t;
}
function st(e) {
  const t = B(() => _e(e, (o) => o), [e]);
  return ot(t);
}
const lt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function it(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const l = e[o];
    return t[o] = ct(o, l), t;
  }, {}) : {};
}
function ct(e, t) {
  return typeof t == "number" && !lt.includes(e) ? t + "px" : t;
}
function U(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = w.Children.toArray(e._reactElement.props.children).map((n) => {
      if (w.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = U(n.props.el);
        return w.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...w.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(W(w.cloneElement(e._reactElement, {
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
      } = U(n);
      t.push(...i), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function at(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const S = ue(({
  slot: e,
  clone: t,
  className: o,
  style: l,
  observeAttributes: s
}, n) => {
  const r = de(), [i, u] = ne([]), {
    forceClone: b
  } = he(), g = b ? !0 : t;
  return re(() => {
    var y;
    if (!r.current || !e)
      return;
    let c = e;
    function x() {
      let m = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (m = c.children[0], m.tagName.toLowerCase() === "react-portal-target" && m.children[0] && (m = m.children[0])), at(n, m), o && m.classList.add(...o.split(" ")), l) {
        const a = it(l);
        Object.keys(a).forEach((h) => {
          m.style[h] = a[h];
        });
      }
    }
    let p = null, v = null;
    if (g && window.MutationObserver) {
      let m = function() {
        var d, E, f;
        (d = r.current) != null && d.contains(c) && ((E = r.current) == null || E.removeChild(c));
        const {
          portals: h,
          clonedElement: T
        } = U(e);
        c = T, u(h), c.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          x();
        }, 50), (f = r.current) == null || f.appendChild(c);
      };
      m();
      const a = ke(() => {
        m(), p == null || p.disconnect(), p == null || p.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      p = new window.MutationObserver(a), p.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", x(), (y = r.current) == null || y.appendChild(c);
    return () => {
      var m, a;
      c.style.display = "", (m = r.current) != null && m.contains(c) && ((a = r.current) == null || a.removeChild(c)), p == null || p.disconnect();
    };
  }, [e, g, o, l, n, s, b]), w.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
});
function ut(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function dt(e, t = !1) {
  try {
    if (ge(e))
      return e;
    if (t && !ut(e))
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
function P(e, t) {
  return B(() => dt(e, t), [e, t]);
}
function $(e, t) {
  const o = B(() => w.Children.toArray(e.originalChildren || e).filter((n) => n.props.node && !n.props.node.ignore && (!t && !n.props.nodeSlotKey || t && t === n.props.nodeSlotKey)).sort((n, r) => {
    if (n.props.node.slotIndex && r.props.node.slotIndex) {
      const i = O(n.props.node.slotIndex) || 0, u = O(r.props.node.slotIndex) || 0;
      return i - u === 0 && n.props.node.subSlotIndex && r.props.node.subSlotIndex ? (O(n.props.node.subSlotIndex) || 0) - (O(r.props.node.subSlotIndex) || 0) : i - u;
    }
    return 0;
  }).map((n) => n.props.node.target), [e, t]);
  return st(o);
}
const ft = ({
  children: e,
  ...t
}) => /* @__PURE__ */ _.jsx(_.Fragment, {
  children: e(t)
});
function mt(e) {
  return w.createElement(ft, {
    children: e
  });
}
function ee(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? mt((o) => /* @__PURE__ */ _.jsx(be, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ _.jsx(S, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...o
    })
  })) : /* @__PURE__ */ _.jsx(S, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function te({
  key: e,
  slots: t,
  targets: o
}, l) {
  return t[e] ? (...s) => o ? o.map((n, r) => /* @__PURE__ */ _.jsx(w.Fragment, {
    children: ee(n, {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ _.jsx(_.Fragment, {
    children: ee(t[e], {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }) : void 0;
}
const gt = rt(({
  slots: e,
  children: t,
  render: o,
  filterOption: l,
  footer: s,
  listStyle: n,
  locale: r,
  onChange: i,
  onValueChange: u,
  setSlotParams: b,
  ...g
}) => {
  const c = $(t, "titles"), x = $(t, "selectAllLabels"), p = P(o), v = P(n), y = P(s), m = P(l);
  return /* @__PURE__ */ _.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ _.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ _.jsx(xe, {
      ...g,
      onChange: (a, ...h) => {
        i == null || i(a, ...h), u(a);
      },
      selectionsIcon: e.selectionsIcon ? /* @__PURE__ */ _.jsx(S, {
        slot: e.selectionsIcon
      }) : g.selectionsIcon,
      locale: e["locale.notFoundContent"] ? {
        ...r,
        notFoundContent: /* @__PURE__ */ _.jsx(S, {
          slot: e["locale.notFoundContent"]
        })
      } : r,
      render: e.render ? te({
        slots: e,
        key: "render"
      }) : p || ((a) => ({
        label: a.title || a.label,
        value: a.value || a.title || a.label
      })),
      filterOption: m,
      footer: e.footer ? te({
        slots: e,
        key: "footer"
      }) : y || s,
      titles: c.length > 0 ? c.map((a, h) => /* @__PURE__ */ _.jsx(S, {
        slot: a
      }, h)) : g.titles,
      listStyle: v || n,
      selectAllLabels: x.length > 0 ? x.map((a, h) => /* @__PURE__ */ _.jsx(S, {
        slot: a
      }, h)) : g.selectAllLabels
    })]
  });
});
export {
  gt as Transfer,
  gt as default
};
