import { i as ce, a as W, r as ae, w as T, g as ue, b as de } from "./Index-Cb6u68Gg.js";
const C = window.ms_globals.React, re = window.ms_globals.React.forwardRef, oe = window.ms_globals.React.useRef, le = window.ms_globals.React.useState, se = window.ms_globals.React.useEffect, ie = window.ms_globals.React.useMemo, N = window.ms_globals.ReactDOM.createPortal, fe = window.ms_globals.internalContext.useContextPropsContext, me = window.ms_globals.internalContext.ContextPropsProvider, _e = window.ms_globals.antd.List;
var he = /\s/;
function ge(e) {
  for (var t = e.length; t-- && he.test(e.charAt(t)); )
    ;
  return t;
}
var pe = /^\s+/;
function we(e) {
  return e && e.slice(0, ge(e) + 1).replace(pe, "");
}
var U = NaN, be = /^[-+]0x[0-9a-f]+$/i, Ce = /^0b[01]+$/i, xe = /^0o[0-7]+$/i, ye = parseInt;
function z(e) {
  if (typeof e == "number")
    return e;
  if (ce(e))
    return U;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = we(e);
  var o = Ce.test(e);
  return o || xe.test(e) ? ye(e.slice(2), o ? 2 : 8) : be.test(e) ? U : +e;
}
var j = function() {
  return ae.Date.now();
}, ve = "Expected a function", Ee = Math.max, Ie = Math.min;
function Se(e, t, o) {
  var l, s, n, r, i, d, h = 0, p = !1, c = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(ve);
  t = z(t) || 0, W(o) && (p = !!o.leading, c = "maxWait" in o, n = c ? Ee(z(o.maxWait) || 0, t) : n, w = "trailing" in o ? !!o.trailing : w);
  function m(u) {
    var x = l, R = s;
    return l = s = void 0, h = u, r = e.apply(R, x), r;
  }
  function y(u) {
    return h = u, i = setTimeout(_, t), p ? m(u) : r;
  }
  function v(u) {
    var x = u - d, R = u - h, D = t - x;
    return c ? Ie(D, n - R) : D;
  }
  function f(u) {
    var x = u - d, R = u - h;
    return d === void 0 || x >= t || x < 0 || c && R >= n;
  }
  function _() {
    var u = j();
    if (f(u))
      return b(u);
    i = setTimeout(_, v(u));
  }
  function b(u) {
    return i = void 0, w && l ? m(u) : (l = s = void 0, r);
  }
  function S() {
    i !== void 0 && clearTimeout(i), h = 0, l = d = s = i = void 0;
  }
  function a() {
    return i === void 0 ? r : b(j());
  }
  function E() {
    var u = j(), x = f(u);
    if (l = arguments, s = this, d = u, x) {
      if (i === void 0)
        return y(d);
      if (c)
        return clearTimeout(i), i = setTimeout(_, t), m(d);
    }
    return i === void 0 && (i = setTimeout(_, t)), r;
  }
  return E.cancel = S, E.flush = a, E;
}
var Q = {
  exports: {}
}, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re = C, Pe = Symbol.for("react.element"), Te = Symbol.for("react.fragment"), Oe = Object.prototype.hasOwnProperty, ke = Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
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
L.Fragment = Te;
L.jsx = Z;
L.jsxs = Z;
Q.exports = L;
var g = Q.exports;
const {
  SvelteComponent: je,
  assign: B,
  binding_callbacks: G,
  check_outros: Fe,
  children: $,
  claim_element: ee,
  claim_space: Ne,
  component_subscribe: H,
  compute_slots: We,
  create_slot: Ae,
  detach: I,
  element: te,
  empty: K,
  exclude_internal_props: q,
  get_all_dirty_from_scope: Me,
  get_slot_changes: De,
  group_outros: Ue,
  init: ze,
  insert_hydration: O,
  safe_not_equal: Be,
  set_custom_element_data: ne,
  space: Ge,
  transition_in: k,
  transition_out: A,
  update_slot_base: He
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ke,
  getContext: qe,
  onDestroy: Ve,
  setContext: Je
} = window.__gradio__svelte__internal;
function V(e) {
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
      s && s.l(r), r.forEach(I), this.h();
    },
    h() {
      ne(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      O(n, t, r), s && s.m(t, null), e[9](t), o = !0;
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
      o || (k(s, n), o = !0);
    },
    o(n) {
      A(s, n), o = !1;
    },
    d(n) {
      n && I(t), s && s.d(n), e[9](null);
    }
  };
}
function Xe(e) {
  let t, o, l, s, n = (
    /*$$slots*/
    e[4].default && V(e)
  );
  return {
    c() {
      t = te("react-portal-target"), o = Ge(), n && n.c(), l = K(), this.h();
    },
    l(r) {
      t = ee(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), $(t).forEach(I), o = Ne(r), n && n.l(r), l = K(), this.h();
    },
    h() {
      ne(t, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      O(r, t, i), e[8](t), O(r, o, i), n && n.m(r, i), O(r, l, i), s = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && k(n, 1)) : (n = V(r), n.c(), k(n, 1), n.m(l.parentNode, l)) : n && (Ue(), A(n, 1, 1, () => {
        n = null;
      }), Fe());
    },
    i(r) {
      s || (k(n), s = !0);
    },
    o(r) {
      A(n), s = !1;
    },
    d(r) {
      r && (I(t), I(o), I(l)), e[8](null), n && n.d(r);
    }
  };
}
function J(e) {
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
    svelteInit: d
  } = t;
  const h = T(J(t)), p = T();
  H(e, p, (a) => o(0, l = a));
  const c = T();
  H(e, c, (a) => o(1, s = a));
  const w = [], m = qe("$$ms-gr-react-wrapper"), {
    slotKey: y,
    slotIndex: v,
    subSlotIndex: f
  } = ue() || {}, _ = d({
    parent: m,
    props: h,
    target: p,
    slot: c,
    slotKey: y,
    slotIndex: v,
    subSlotIndex: f,
    onDestroy(a) {
      w.push(a);
    }
  });
  Je("$$ms-gr-react-wrapper", _), Ke(() => {
    h.set(J(t));
  }), Ve(() => {
    w.forEach((a) => a());
  });
  function b(a) {
    G[a ? "unshift" : "push"](() => {
      l = a, p.set(l);
    });
  }
  function S(a) {
    G[a ? "unshift" : "push"](() => {
      s = a, c.set(s);
    });
  }
  return e.$$set = (a) => {
    o(17, t = B(B({}, t), q(a))), "svelteInit" in a && o(5, d = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = q(t), [l, s, p, c, i, d, r, n, b, S];
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
} = window.__gradio__svelte__internal, X = window.ms_globals.rerender, F = window.ms_globals.tree;
function Ze(e, t = {}) {
  function o(l) {
    const s = T(), n = new Qe({
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
          }, d = r.parent ?? F;
          return d.nodes = [...d.nodes, i], X({
            createPortal: N,
            node: F
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((h) => h.svelteInstance !== s), X({
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
const $e = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function et(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const l = e[o];
    return t[o] = tt(o, l), t;
  }, {}) : {};
}
function tt(e, t) {
  return typeof t == "number" && !$e.includes(e) ? t + "px" : t;
}
function M(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = C.Children.toArray(e._reactElement.props.children).map((n) => {
      if (C.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = M(n.props.el);
        return C.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...C.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(N(C.cloneElement(e._reactElement, {
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
      useCapture: d
    }) => {
      o.addEventListener(i, r, d);
    });
  });
  const l = Array.from(e.childNodes);
  for (let s = 0; s < l.length; s++) {
    const n = l[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = M(n);
      t.push(...i), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function nt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const P = re(({
  slot: e,
  clone: t,
  className: o,
  style: l,
  observeAttributes: s
}, n) => {
  const r = oe(), [i, d] = le([]), {
    forceClone: h
  } = fe(), p = h ? !0 : t;
  return se(() => {
    var v;
    if (!r.current || !e)
      return;
    let c = e;
    function w() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), nt(n, f), o && f.classList.add(...o.split(" ")), l) {
        const _ = et(l);
        Object.keys(_).forEach((b) => {
          f.style[b] = _[b];
        });
      }
    }
    let m = null, y = null;
    if (p && window.MutationObserver) {
      let f = function() {
        var a, E, u;
        (a = r.current) != null && a.contains(c) && ((E = r.current) == null || E.removeChild(c));
        const {
          portals: b,
          clonedElement: S
        } = M(e);
        c = S, d(b), c.style.display = "contents", y && clearTimeout(y), y = setTimeout(() => {
          w();
        }, 50), (u = r.current) == null || u.appendChild(c);
      };
      f();
      const _ = Se(() => {
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
      c.style.display = "contents", w(), (v = r.current) == null || v.appendChild(c);
    return () => {
      var f, _;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((_ = r.current) == null || _.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, p, o, l, n, s, h]), C.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
});
function rt(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function ot(e, t = !1) {
  try {
    if (de(e))
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
function lt(e, t) {
  return ie(() => ot(e, t), [e, t]);
}
const st = ({
  children: e,
  ...t
}) => /* @__PURE__ */ g.jsx(g.Fragment, {
  children: e(t)
});
function it(e) {
  return C.createElement(st, {
    children: e
  });
}
function Y(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? it((o) => /* @__PURE__ */ g.jsx(me, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ g.jsx(P, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...o
    })
  })) : /* @__PURE__ */ g.jsx(P, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function ct({
  key: e,
  slots: t,
  targets: o
}, l) {
  return t[e] ? (...s) => o ? o.map((n, r) => /* @__PURE__ */ g.jsx(C.Fragment, {
    children: Y(n, {
      clone: !0,
      params: s,
      forceClone: l == null ? void 0 : l.forceClone
    })
  }, r)) : /* @__PURE__ */ g.jsx(g.Fragment, {
    children: Y(t[e], {
      clone: !0,
      params: s,
      forceClone: l == null ? void 0 : l.forceClone
    })
  }) : void 0;
}
const dt = Ze(({
  slots: e,
  renderItem: t,
  setSlotParams: o,
  ...l
}) => {
  const s = lt(t);
  return /* @__PURE__ */ g.jsx(_e, {
    ...l,
    footer: e.footer ? /* @__PURE__ */ g.jsx(P, {
      slot: e.footer
    }) : l.footer,
    header: e.header ? /* @__PURE__ */ g.jsx(P, {
      slot: e.header
    }) : l.header,
    loadMore: e.loadMore ? /* @__PURE__ */ g.jsx(P, {
      slot: e.loadMore
    }) : l.loadMore,
    renderItem: e.renderItem ? ct({
      slots: e,
      key: "renderItem"
    }, {
      forceClone: !0
    }) : s
  });
});
export {
  dt as List,
  dt as default
};
