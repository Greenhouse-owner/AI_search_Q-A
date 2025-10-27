import { i as ue, a as N, r as de, w as P, g as fe, b as me } from "./Index-DEXjcFZv.js";
const b = window.ms_globals.React, ie = window.ms_globals.React.useMemo, le = window.ms_globals.React.forwardRef, ce = window.ms_globals.React.useRef, ae = window.ms_globals.React.useState, $ = window.ms_globals.React.useEffect, j = window.ms_globals.ReactDOM.createPortal, _e = window.ms_globals.internalContext.useContextPropsContext, pe = window.ms_globals.internalContext.ContextPropsProvider, D = window.ms_globals.antd.Form;
var he = /\s/;
function ge(e) {
  for (var t = e.length; t-- && he.test(e.charAt(t)); )
    ;
  return t;
}
var we = /^\s+/;
function be(e) {
  return e && e.slice(0, ge(e) + 1).replace(we, "");
}
var U = NaN, ye = /^[-+]0x[0-9a-f]+$/i, Ee = /^0b[01]+$/i, xe = /^0o[0-7]+$/i, ve = parseInt;
function z(e) {
  if (typeof e == "number")
    return e;
  if (ue(e))
    return U;
  if (N(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = N(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = be(e);
  var r = Ee.test(e);
  return r || xe.test(e) ? ve(e.slice(2), r ? 2 : 8) : ye.test(e) ? U : +e;
}
var F = function() {
  return de.Date.now();
}, Ce = "Expected a function", Se = Math.max, Ie = Math.min;
function Re(e, t, r) {
  var i, s, n, o, l, a, _ = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Ce);
  t = z(t) || 0, N(r) && (h = !!r.leading, c = "maxWait" in r, n = c ? Se(z(r.maxWait) || 0, t) : n, g = "trailing" in r ? !!r.trailing : g);
  function m(d) {
    var E = i, R = s;
    return i = s = void 0, _ = d, o = e.apply(R, E), o;
  }
  function x(d) {
    return _ = d, l = setTimeout(p, t), h ? m(d) : o;
  }
  function v(d) {
    var E = d - a, R = d - _, M = t - E;
    return c ? Ie(M, n - R) : M;
  }
  function f(d) {
    var E = d - a, R = d - _;
    return a === void 0 || E >= t || E < 0 || c && R >= n;
  }
  function p() {
    var d = F();
    if (f(d))
      return w(d);
    l = setTimeout(p, v(d));
  }
  function w(d) {
    return l = void 0, g && i ? m(d) : (i = s = void 0, o);
  }
  function I() {
    l !== void 0 && clearTimeout(l), _ = 0, i = a = s = l = void 0;
  }
  function u() {
    return l === void 0 ? o : w(F());
  }
  function C() {
    var d = F(), E = f(d);
    if (i = arguments, s = this, a = d, E) {
      if (l === void 0)
        return x(a);
      if (c)
        return clearTimeout(l), l = setTimeout(p, t), m(a);
    }
    return l === void 0 && (l = setTimeout(p, t)), o;
  }
  return C.cancel = I, C.flush = u, C;
}
var ee = {
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
var Pe = b, Te = Symbol.for("react.element"), ke = Symbol.for("react.fragment"), Oe = Object.prototype.hasOwnProperty, Fe = Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function te(e, t, r) {
  var i, s = {}, n = null, o = null;
  r !== void 0 && (n = "" + r), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (i in t) Oe.call(t, i) && !Le.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: Te,
    type: e,
    key: n,
    ref: o,
    props: s,
    _owner: Fe.current
  };
}
O.Fragment = ke;
O.jsx = te;
O.jsxs = te;
ee.exports = O;
var y = ee.exports;
const {
  SvelteComponent: je,
  assign: B,
  binding_callbacks: G,
  check_outros: Ne,
  children: ne,
  claim_element: re,
  claim_space: We,
  component_subscribe: H,
  compute_slots: Ae,
  create_slot: Me,
  detach: S,
  element: oe,
  empty: q,
  exclude_internal_props: K,
  get_all_dirty_from_scope: De,
  get_slot_changes: Ue,
  group_outros: ze,
  init: Be,
  insert_hydration: T,
  safe_not_equal: Ge,
  set_custom_element_data: se,
  space: He,
  transition_in: k,
  transition_out: W,
  update_slot_base: qe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ke,
  getContext: Je,
  onDestroy: Ve,
  setContext: Xe
} = window.__gradio__svelte__internal;
function J(e) {
  let t, r;
  const i = (
    /*#slots*/
    e[7].default
  ), s = Me(
    i,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = oe("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      t = re(n, "SVELTE-SLOT", {
        class: !0
      });
      var o = ne(t);
      s && s.l(o), o.forEach(S), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(n, o) {
      T(n, t, o), s && s.m(t, null), e[9](t), r = !0;
    },
    p(n, o) {
      s && s.p && (!r || o & /*$$scope*/
      64) && qe(
        s,
        i,
        n,
        /*$$scope*/
        n[6],
        r ? Ue(
          i,
          /*$$scope*/
          n[6],
          o,
          null
        ) : De(
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
      W(s, n), r = !1;
    },
    d(n) {
      n && S(t), s && s.d(n), e[9](null);
    }
  };
}
function Ye(e) {
  let t, r, i, s, n = (
    /*$$slots*/
    e[4].default && J(e)
  );
  return {
    c() {
      t = oe("react-portal-target"), r = He(), n && n.c(), i = q(), this.h();
    },
    l(o) {
      t = re(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), ne(t).forEach(S), r = We(o), n && n.l(o), i = q(), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(o, l) {
      T(o, t, l), e[8](t), T(o, r, l), n && n.m(o, l), T(o, i, l), s = !0;
    },
    p(o, [l]) {
      /*$$slots*/
      o[4].default ? n ? (n.p(o, l), l & /*$$slots*/
      16 && k(n, 1)) : (n = J(o), n.c(), k(n, 1), n.m(i.parentNode, i)) : n && (ze(), W(n, 1, 1, () => {
        n = null;
      }), Ne());
    },
    i(o) {
      s || (k(n), s = !0);
    },
    o(o) {
      W(n), s = !1;
    },
    d(o) {
      o && (S(t), S(r), S(i)), e[8](null), n && n.d(o);
    }
  };
}
function V(e) {
  const {
    svelteInit: t,
    ...r
  } = e;
  return r;
}
function Qe(e, t, r) {
  let i, s, {
    $$slots: n = {},
    $$scope: o
  } = t;
  const l = Ae(n);
  let {
    svelteInit: a
  } = t;
  const _ = P(V(t)), h = P();
  H(e, h, (u) => r(0, i = u));
  const c = P();
  H(e, c, (u) => r(1, s = u));
  const g = [], m = Je("$$ms-gr-react-wrapper"), {
    slotKey: x,
    slotIndex: v,
    subSlotIndex: f
  } = fe() || {}, p = a({
    parent: m,
    props: _,
    target: h,
    slot: c,
    slotKey: x,
    slotIndex: v,
    subSlotIndex: f,
    onDestroy(u) {
      g.push(u);
    }
  });
  Xe("$$ms-gr-react-wrapper", p), Ke(() => {
    _.set(V(t));
  }), Ve(() => {
    g.forEach((u) => u());
  });
  function w(u) {
    G[u ? "unshift" : "push"](() => {
      i = u, h.set(i);
    });
  }
  function I(u) {
    G[u ? "unshift" : "push"](() => {
      s = u, c.set(s);
    });
  }
  return e.$$set = (u) => {
    r(17, t = B(B({}, t), K(u))), "svelteInit" in u && r(5, a = u.svelteInit), "$$scope" in u && r(6, o = u.$$scope);
  }, t = K(t), [i, s, h, c, l, a, o, n, w, I];
}
class Ze extends je {
  constructor(t) {
    super(), Be(this, t, Qe, Ye, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ut
} = window.__gradio__svelte__internal, X = window.ms_globals.rerender, L = window.ms_globals.tree;
function $e(e, t = {}) {
  function r(i) {
    const s = P(), n = new Ze({
      ...i,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const l = {
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
          }, a = o.parent ?? L;
          return a.nodes = [...a.nodes, l], X({
            createPortal: j,
            node: L
          }), o.onDestroy(() => {
            a.nodes = a.nodes.filter((_) => _.svelteInstance !== s), X({
              createPortal: j,
              node: L
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
      i(r);
    });
  });
}
function et(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function tt(e, t = !1) {
  try {
    if (me(e))
      return e;
    if (t && !et(e))
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
function Y(e, t) {
  return ie(() => tt(e, t), [e, t]);
}
const nt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function rt(e) {
  return e ? Object.keys(e).reduce((t, r) => {
    const i = e[r];
    return t[r] = ot(r, i), t;
  }, {}) : {};
}
function ot(e, t) {
  return typeof t == "number" && !nt.includes(e) ? t + "px" : t;
}
function A(e) {
  const t = [], r = e.cloneNode(!1);
  if (e._reactElement) {
    const s = b.Children.toArray(e._reactElement.props.children).map((n) => {
      if (b.isValidElement(n) && n.props.__slot__) {
        const {
          portals: o,
          clonedElement: l
        } = A(n.props.el);
        return b.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...b.Children.toArray(n.props.children), ...o]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(j(b.cloneElement(e._reactElement, {
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
      type: l,
      useCapture: a
    }) => {
      r.addEventListener(l, o, a);
    });
  });
  const i = Array.from(e.childNodes);
  for (let s = 0; s < i.length; s++) {
    const n = i[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: o,
        portals: l
      } = A(n);
      t.push(...l), r.appendChild(o);
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
const Q = le(({
  slot: e,
  clone: t,
  className: r,
  style: i,
  observeAttributes: s
}, n) => {
  const o = ce(), [l, a] = ae([]), {
    forceClone: _
  } = _e(), h = _ ? !0 : t;
  return $(() => {
    var v;
    if (!o.current || !e)
      return;
    let c = e;
    function g() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), st(n, f), r && f.classList.add(...r.split(" ")), i) {
        const p = rt(i);
        Object.keys(p).forEach((w) => {
          f.style[w] = p[w];
        });
      }
    }
    let m = null, x = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var u, C, d;
        (u = o.current) != null && u.contains(c) && ((C = o.current) == null || C.removeChild(c));
        const {
          portals: w,
          clonedElement: I
        } = A(e);
        c = I, a(w), c.style.display = "contents", x && clearTimeout(x), x = setTimeout(() => {
          g();
        }, 50), (d = o.current) == null || d.appendChild(c);
      };
      f();
      const p = Re(() => {
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
      c.style.display = "contents", g(), (v = o.current) == null || v.appendChild(c);
    return () => {
      var f, p;
      c.style.display = "", (f = o.current) != null && f.contains(c) && ((p = o.current) == null || p.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, h, r, i, n, s, _]), b.createElement("react-child", {
    ref: o,
    style: {
      display: "contents"
    }
  }, ...l);
}), it = ({
  children: e,
  ...t
}) => /* @__PURE__ */ y.jsx(y.Fragment, {
  children: e(t)
});
function lt(e) {
  return b.createElement(it, {
    children: e
  });
}
function Z(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? lt((r) => /* @__PURE__ */ y.jsx(pe, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ y.jsx(Q, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...r
    })
  })) : /* @__PURE__ */ y.jsx(Q, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function ct({
  key: e,
  slots: t,
  targets: r
}, i) {
  return t[e] ? (...s) => r ? r.map((n, o) => /* @__PURE__ */ y.jsx(b.Fragment, {
    children: Z(n, {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }, o)) : /* @__PURE__ */ y.jsx(y.Fragment, {
    children: Z(t[e], {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }) : void 0;
}
const dt = $e(({
  value: e,
  onValueChange: t,
  requiredMark: r,
  onValuesChange: i,
  feedbackIcons: s,
  setSlotParams: n,
  slots: o,
  ...l
}) => {
  const [a] = D.useForm(), _ = Y(s), h = Y(r);
  return $(() => {
    a.setFieldsValue(e);
  }, [a, e]), /* @__PURE__ */ y.jsx(D, {
    ...l,
    initialValues: e,
    form: a,
    requiredMark: o.requiredMark ? ct({
      key: "requiredMark",
      slots: o
    }) : r === "optional" ? r : h || r,
    feedbackIcons: _,
    onValuesChange: (c, g) => {
      t(g), i == null || i(c, g);
    }
  });
});
export {
  dt as Form,
  dt as default
};
