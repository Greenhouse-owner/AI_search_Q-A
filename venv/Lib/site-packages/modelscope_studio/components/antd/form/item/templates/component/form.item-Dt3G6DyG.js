import { i as me, a as M, r as pe, w as O, g as he, b as _e } from "./Index-D92fN9Us.js";
const I = window.ms_globals.React, ae = window.ms_globals.React.forwardRef, ue = window.ms_globals.React.useRef, fe = window.ms_globals.React.useState, de = window.ms_globals.React.useEffect, z = window.ms_globals.React.useMemo, N = window.ms_globals.ReactDOM.createPortal, ge = window.ms_globals.internalContext.useContextPropsContext, V = window.ms_globals.internalContext.ContextPropsProvider, xe = window.ms_globals.internalContext.FormItemContext, be = window.ms_globals.antd.Form, we = window.ms_globals.createItemsContext.createItemsContext;
var Ce = /\s/;
function ve(e) {
  for (var t = e.length; t-- && Ce.test(e.charAt(t)); )
    ;
  return t;
}
var Ee = /^\s+/;
function ye(e) {
  return e && e.slice(0, ve(e) + 1).replace(Ee, "");
}
var B = NaN, Ie = /^[-+]0x[0-9a-f]+$/i, Re = /^0b[01]+$/i, Se = /^0o[0-7]+$/i, Pe = parseInt;
function G(e) {
  if (typeof e == "number")
    return e;
  if (me(e))
    return B;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ye(e);
  var s = Re.test(e);
  return s || Se.test(e) ? Pe(e.slice(2), s ? 2 : 8) : Ie.test(e) ? B : +e;
}
var W = function() {
  return pe.Date.now();
}, Fe = "Expected a function", Oe = Math.max, ke = Math.min;
function je(e, t, s) {
  var i, o, n, r, l, a, h = 0, g = !1, c = !1, _ = !0;
  if (typeof e != "function")
    throw new TypeError(Fe);
  t = G(t) || 0, M(s) && (g = !!s.leading, c = "maxWait" in s, n = c ? Oe(G(s.maxWait) || 0, t) : n, _ = "trailing" in s ? !!s.trailing : _);
  function m(p) {
    var v = i, F = o;
    return i = o = void 0, h = p, r = e.apply(F, v), r;
  }
  function w(p) {
    return h = p, l = setTimeout(f, t), g ? m(p) : r;
  }
  function C(p) {
    var v = p - a, F = p - h, U = t - v;
    return c ? ke(U, n - F) : U;
  }
  function u(p) {
    var v = p - a, F = p - h;
    return a === void 0 || v >= t || v < 0 || c && F >= n;
  }
  function f() {
    var p = W();
    if (u(p))
      return x(p);
    l = setTimeout(f, C(p));
  }
  function x(p) {
    return l = void 0, _ && i ? m(p) : (i = o = void 0, r);
  }
  function R() {
    l !== void 0 && clearTimeout(l), h = 0, i = a = o = l = void 0;
  }
  function d() {
    return l === void 0 ? r : x(W());
  }
  function E() {
    var p = W(), v = u(p);
    if (i = arguments, o = this, a = p, v) {
      if (l === void 0)
        return w(a);
      if (c)
        return clearTimeout(l), l = setTimeout(f, t), m(a);
    }
    return l === void 0 && (l = setTimeout(f, t)), r;
  }
  return E.cancel = R, E.flush = d, E;
}
var ne = {
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
var Te = I, Le = Symbol.for("react.element"), We = Symbol.for("react.fragment"), Ae = Object.prototype.hasOwnProperty, Ne = Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Me = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function re(e, t, s) {
  var i, o = {}, n = null, r = null;
  s !== void 0 && (n = "" + s), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (i in t) Ae.call(t, i) && !Me.hasOwnProperty(i) && (o[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) o[i] === void 0 && (o[i] = t[i]);
  return {
    $$typeof: Le,
    type: e,
    key: n,
    ref: r,
    props: o,
    _owner: Ne.current
  };
}
L.Fragment = We;
L.jsx = re;
L.jsxs = re;
ne.exports = L;
var b = ne.exports;
const {
  SvelteComponent: De,
  assign: q,
  binding_callbacks: J,
  check_outros: He,
  children: oe,
  claim_element: se,
  claim_space: ze,
  component_subscribe: X,
  compute_slots: Ue,
  create_slot: Ve,
  detach: P,
  element: ie,
  empty: Y,
  exclude_internal_props: K,
  get_all_dirty_from_scope: Be,
  get_slot_changes: Ge,
  group_outros: qe,
  init: Je,
  insert_hydration: k,
  safe_not_equal: Xe,
  set_custom_element_data: le,
  space: Ye,
  transition_in: j,
  transition_out: D,
  update_slot_base: Ke
} = window.__gradio__svelte__internal, {
  beforeUpdate: Qe,
  getContext: Ze,
  onDestroy: $e,
  setContext: et
} = window.__gradio__svelte__internal;
function Q(e) {
  let t, s;
  const i = (
    /*#slots*/
    e[7].default
  ), o = Ve(
    i,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ie("svelte-slot"), o && o.c(), this.h();
    },
    l(n) {
      t = se(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = oe(t);
      o && o.l(r), r.forEach(P), this.h();
    },
    h() {
      le(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      k(n, t, r), o && o.m(t, null), e[9](t), s = !0;
    },
    p(n, r) {
      o && o.p && (!s || r & /*$$scope*/
      64) && Ke(
        o,
        i,
        n,
        /*$$scope*/
        n[6],
        s ? Ge(
          i,
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
      s || (j(o, n), s = !0);
    },
    o(n) {
      D(o, n), s = !1;
    },
    d(n) {
      n && P(t), o && o.d(n), e[9](null);
    }
  };
}
function tt(e) {
  let t, s, i, o, n = (
    /*$$slots*/
    e[4].default && Q(e)
  );
  return {
    c() {
      t = ie("react-portal-target"), s = Ye(), n && n.c(), i = Y(), this.h();
    },
    l(r) {
      t = se(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), oe(t).forEach(P), s = ze(r), n && n.l(r), i = Y(), this.h();
    },
    h() {
      le(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      k(r, t, l), e[8](t), k(r, s, l), n && n.m(r, l), k(r, i, l), o = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && j(n, 1)) : (n = Q(r), n.c(), j(n, 1), n.m(i.parentNode, i)) : n && (qe(), D(n, 1, 1, () => {
        n = null;
      }), He());
    },
    i(r) {
      o || (j(n), o = !0);
    },
    o(r) {
      D(n), o = !1;
    },
    d(r) {
      r && (P(t), P(s), P(i)), e[8](null), n && n.d(r);
    }
  };
}
function Z(e) {
  const {
    svelteInit: t,
    ...s
  } = e;
  return s;
}
function nt(e, t, s) {
  let i, o, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Ue(n);
  let {
    svelteInit: a
  } = t;
  const h = O(Z(t)), g = O();
  X(e, g, (d) => s(0, i = d));
  const c = O();
  X(e, c, (d) => s(1, o = d));
  const _ = [], m = Ze("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: C,
    subSlotIndex: u
  } = he() || {}, f = a({
    parent: m,
    props: h,
    target: g,
    slot: c,
    slotKey: w,
    slotIndex: C,
    subSlotIndex: u,
    onDestroy(d) {
      _.push(d);
    }
  });
  et("$$ms-gr-react-wrapper", f), Qe(() => {
    h.set(Z(t));
  }), $e(() => {
    _.forEach((d) => d());
  });
  function x(d) {
    J[d ? "unshift" : "push"](() => {
      i = d, g.set(i);
    });
  }
  function R(d) {
    J[d ? "unshift" : "push"](() => {
      o = d, c.set(o);
    });
  }
  return e.$$set = (d) => {
    s(17, t = q(q({}, t), K(d))), "svelteInit" in d && s(5, a = d.svelteInit), "$$scope" in d && s(6, r = d.$$scope);
  }, t = K(t), [i, o, g, c, l, a, r, n, x, R];
}
class rt extends De {
  constructor(t) {
    super(), Je(this, t, nt, tt, Xe, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _t
} = window.__gradio__svelte__internal, $ = window.ms_globals.rerender, A = window.ms_globals.tree;
function ot(e, t = {}) {
  function s(i) {
    const o = O(), n = new rt({
      ...i,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const l = {
            key: window.ms_globals.autokey,
            svelteInstance: o,
            reactComponent: e,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: t.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, a = r.parent ?? A;
          return a.nodes = [...a.nodes, l], $({
            createPortal: N,
            node: A
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((h) => h.svelteInstance !== o), $({
              createPortal: N,
              node: A
            });
          }), l;
        },
        ...i.props
      }
    });
    return o.set(n), n;
  }
  return new Promise((i) => {
    window.ms_globals.initializePromise.then(() => {
      i(s);
    });
  });
}
const st = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function it(e) {
  return e ? Object.keys(e).reduce((t, s) => {
    const i = e[s];
    return t[s] = lt(s, i), t;
  }, {}) : {};
}
function lt(e, t) {
  return typeof t == "number" && !st.includes(e) ? t + "px" : t;
}
function H(e) {
  const t = [], s = e.cloneNode(!1);
  if (e._reactElement) {
    const o = I.Children.toArray(e._reactElement.props.children).map((n) => {
      if (I.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = H(n.props.el);
        return I.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...I.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(N(I.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: o
    }), s)), {
      clonedElement: s,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((o) => {
    e.getEventListeners(o).forEach(({
      listener: r,
      type: l,
      useCapture: a
    }) => {
      s.addEventListener(l, r, a);
    });
  });
  const i = Array.from(e.childNodes);
  for (let o = 0; o < i.length; o++) {
    const n = i[o];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: l
      } = H(n);
      t.push(...l), s.appendChild(r);
    } else n.nodeType === 3 && s.appendChild(n.cloneNode());
  }
  return {
    clonedElement: s,
    portals: t
  };
}
function ct(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const y = ae(({
  slot: e,
  clone: t,
  className: s,
  style: i,
  observeAttributes: o
}, n) => {
  const r = ue(), [l, a] = fe([]), {
    forceClone: h
  } = ge(), g = h ? !0 : t;
  return de(() => {
    var C;
    if (!r.current || !e)
      return;
    let c = e;
    function _() {
      let u = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (u = c.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), ct(n, u), s && u.classList.add(...s.split(" ")), i) {
        const f = it(i);
        Object.keys(f).forEach((x) => {
          u.style[x] = f[x];
        });
      }
    }
    let m = null, w = null;
    if (g && window.MutationObserver) {
      let u = function() {
        var d, E, p;
        (d = r.current) != null && d.contains(c) && ((E = r.current) == null || E.removeChild(c));
        const {
          portals: x,
          clonedElement: R
        } = H(e);
        c = R, a(x), c.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          _();
        }, 50), (p = r.current) == null || p.appendChild(c);
      };
      u();
      const f = je(() => {
        u(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(f), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", _(), (C = r.current) == null || C.appendChild(c);
    return () => {
      var u, f;
      c.style.display = "", (u = r.current) != null && u.contains(c) && ((f = r.current) == null || f.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, g, s, i, n, o, h]), I.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
});
function at(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function T(e, t = !1) {
  try {
    if (_e(e))
      return e;
    if (t && !at(e))
      return;
    if (typeof e == "string") {
      let s = e.trim();
      return s.startsWith(";") && (s = s.slice(1)), s.endsWith(";") && (s = s.slice(0, -1)), new Function(`return (...args) => (${s})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function S(e, t) {
  return z(() => T(e, t), [e, t]);
}
const ut = ({
  children: e,
  ...t
}) => /* @__PURE__ */ b.jsx(b.Fragment, {
  children: e(t)
});
function ft(e) {
  return I.createElement(ut, {
    children: e
  });
}
function ce(e, t, s) {
  const i = e.filter(Boolean);
  if (i.length !== 0)
    return i.map((o, n) => {
      var h;
      if (typeof o != "object")
        return o;
      const r = {
        ...o.props,
        key: ((h = o.props) == null ? void 0 : h.key) ?? (s ? `${s}-${n}` : `${n}`)
      };
      let l = r;
      Object.keys(o.slots).forEach((g) => {
        if (!o.slots[g] || !(o.slots[g] instanceof Element) && !o.slots[g].el)
          return;
        const c = g.split(".");
        c.forEach((f, x) => {
          l[f] || (l[f] = {}), x !== c.length - 1 && (l = r[f]);
        });
        const _ = o.slots[g];
        let m, w, C = !1, u = t == null ? void 0 : t.forceClone;
        _ instanceof Element ? m = _ : (m = _.el, w = _.callback, C = _.clone ?? C, u = _.forceClone ?? u), u = u ?? !!w, l[c[c.length - 1]] = m ? w ? (...f) => (w(c[c.length - 1], f), /* @__PURE__ */ b.jsx(V, {
          ...o.ctx,
          params: f,
          forceClone: u,
          children: /* @__PURE__ */ b.jsx(y, {
            slot: m,
            clone: C
          })
        })) : ft((f) => /* @__PURE__ */ b.jsx(V, {
          ...o.ctx,
          forceClone: u,
          children: /* @__PURE__ */ b.jsx(y, {
            ...f,
            slot: m,
            clone: C
          })
        })) : l[c[c.length - 1]], l = r;
      });
      const a = "children";
      return o[a] && (r[a] = ce(o[a], t, `${n}`)), r;
    });
}
const {
  withItemsContextProvider: dt,
  useItems: mt,
  ItemHandler: gt
} = we("antd-form-item-rules");
function pt(e) {
  const t = e.pattern;
  return {
    ...e,
    pattern: (() => {
      if (typeof t == "string" && t.startsWith("/")) {
        const s = t.match(/^\/(.+)\/([gimuy]*)$/);
        if (s) {
          const [, i, o] = s;
          return new RegExp(i, o);
        }
      }
      return typeof t == "string" ? new RegExp(t) : void 0;
    })() ? new RegExp(t) : void 0,
    defaultField: T(e.defaultField) || e.defaultField,
    transform: T(e.transform),
    validator: T(e.validator)
  };
}
function ee(e) {
  return typeof e == "object" && e !== null ? e : {};
}
const te = ({
  children: e,
  ...t
}) => /* @__PURE__ */ b.jsx(xe.Provider, {
  value: z(() => t, [t]),
  children: e
}), xt = ot(dt(["rules"], ({
  slots: e,
  getValueFromEvent: t,
  getValueProps: s,
  normalize: i,
  shouldUpdate: o,
  tooltip: n,
  rules: r,
  children: l,
  hasFeedback: a,
  ...h
}) => {
  const g = e["tooltip.icon"] || e["tooltip.title"] || typeof n == "object", c = typeof a == "object", _ = ee(a), m = S(_.icons), w = S(t), C = S(s), u = S(i), f = S(o), x = ee(n), R = S(x.afterOpenChange), d = S(x.getPopupContainer), {
    items: {
      rules: E
    }
  } = mt();
  return /* @__PURE__ */ b.jsx(be.Item, {
    ...h,
    hasFeedback: c ? {
      ..._,
      icons: m || _.icons
    } : a,
    getValueFromEvent: w,
    getValueProps: C,
    normalize: u,
    shouldUpdate: f || o,
    rules: z(() => {
      var p;
      return (p = r || ce(E)) == null ? void 0 : p.map((v) => pt(v));
    }, [E, r]),
    tooltip: e.tooltip ? /* @__PURE__ */ b.jsx(y, {
      slot: e.tooltip
    }) : g ? {
      ...x,
      afterOpenChange: R,
      getPopupContainer: d,
      icon: e["tooltip.icon"] ? /* @__PURE__ */ b.jsx(y, {
        slot: e["tooltip.icon"]
      }) : x.icon,
      title: e["tooltip.title"] ? /* @__PURE__ */ b.jsx(y, {
        slot: e["tooltip.title"]
      }) : x.title
    } : n,
    extra: e.extra ? /* @__PURE__ */ b.jsx(y, {
      slot: e.extra
    }) : h.extra,
    help: e.help ? /* @__PURE__ */ b.jsx(y, {
      slot: e.help
    }) : h.help,
    label: e.label ? /* @__PURE__ */ b.jsx(y, {
      slot: e.label
    }) : h.label,
    children: f || o ? () => /* @__PURE__ */ b.jsx(te, {
      children: l
    }) : /* @__PURE__ */ b.jsx(te, {
      children: l
    })
  });
}));
export {
  xt as FormItem,
  xt as default
};
