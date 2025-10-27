import { i as pe, a as H, r as _e, w as P, g as he, d as ge, b as k, c as xe } from "./Index-CZUSvAT2.js";
const E = window.ms_globals.React, L = window.ms_globals.React.useMemo, ne = window.ms_globals.React.useState, re = window.ms_globals.React.useEffect, fe = window.ms_globals.React.forwardRef, me = window.ms_globals.React.useRef, W = window.ms_globals.ReactDOM.createPortal, be = window.ms_globals.internalContext.useContextPropsContext, M = window.ms_globals.internalContext.ContextPropsProvider, we = window.ms_globals.antd.ColorPicker, ye = window.ms_globals.createItemsContext.createItemsContext;
var Ce = /\s/;
function Ee(t) {
  for (var e = t.length; e-- && Ce.test(t.charAt(e)); )
    ;
  return e;
}
var Ie = /^\s+/;
function ve(t) {
  return t && t.slice(0, Ee(t) + 1).replace(Ie, "");
}
var G = NaN, Se = /^[-+]0x[0-9a-f]+$/i, Re = /^0b[01]+$/i, ke = /^0o[0-7]+$/i, Pe = parseInt;
function z(t) {
  if (typeof t == "number")
    return t;
  if (pe(t))
    return G;
  if (H(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = H(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = ve(t);
  var o = Re.test(t);
  return o || ke.test(t) ? Pe(t.slice(2), o ? 2 : 8) : Se.test(t) ? G : +t;
}
var A = function() {
  return _e.Date.now();
}, Te = "Expected a function", Oe = Math.max, je = Math.min;
function Le(t, e, o) {
  var l, s, n, r, i, u, _ = 0, h = !1, c = !1, g = !0;
  if (typeof t != "function")
    throw new TypeError(Te);
  e = z(e) || 0, H(o) && (h = !!o.leading, c = "maxWait" in o, n = c ? Oe(z(o.maxWait) || 0, e) : n, g = "trailing" in o ? !!o.trailing : g);
  function d(p) {
    var I = l, R = s;
    return l = s = void 0, _ = p, r = t.apply(R, I), r;
  }
  function w(p) {
    return _ = p, i = setTimeout(f, e), h ? d(p) : r;
  }
  function x(p) {
    var I = p - u, R = p - _, U = e - I;
    return c ? je(U, n - R) : U;
  }
  function a(p) {
    var I = p - u, R = p - _;
    return u === void 0 || I >= e || I < 0 || c && R >= n;
  }
  function f() {
    var p = A();
    if (a(p))
      return y(p);
    i = setTimeout(f, x(p));
  }
  function y(p) {
    return i = void 0, g && l ? d(p) : (l = s = void 0, r);
  }
  function C() {
    i !== void 0 && clearTimeout(i), _ = 0, l = u = s = i = void 0;
  }
  function m() {
    return i === void 0 ? r : y(A());
  }
  function v() {
    var p = A(), I = a(p);
    if (l = arguments, s = this, u = p, I) {
      if (i === void 0)
        return w(u);
      if (c)
        return clearTimeout(i), i = setTimeout(f, e), d(u);
    }
    return i === void 0 && (i = setTimeout(f, e)), r;
  }
  return v.cancel = C, v.flush = m, v;
}
var oe = {
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
var Fe = E, Ae = Symbol.for("react.element"), Ne = Symbol.for("react.fragment"), We = Object.prototype.hasOwnProperty, He = Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Me = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function se(t, e, o) {
  var l, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (r = e.ref);
  for (l in e) We.call(e, l) && !Me.hasOwnProperty(l) && (s[l] = e[l]);
  if (t && t.defaultProps) for (l in e = t.defaultProps, e) s[l] === void 0 && (s[l] = e[l]);
  return {
    $$typeof: Ae,
    type: t,
    key: n,
    ref: r,
    props: s,
    _owner: He.current
  };
}
F.Fragment = Ne;
F.jsx = se;
F.jsxs = se;
oe.exports = F;
var b = oe.exports;
const {
  SvelteComponent: De,
  assign: q,
  binding_callbacks: V,
  check_outros: Be,
  children: le,
  claim_element: ie,
  claim_space: Ue,
  component_subscribe: J,
  compute_slots: Ge,
  create_slot: ze,
  detach: S,
  element: ce,
  empty: X,
  exclude_internal_props: Y,
  get_all_dirty_from_scope: qe,
  get_slot_changes: Ve,
  group_outros: Je,
  init: Xe,
  insert_hydration: T,
  safe_not_equal: Ye,
  set_custom_element_data: ae,
  space: Ke,
  transition_in: O,
  transition_out: D,
  update_slot_base: Qe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ze,
  getContext: $e,
  onDestroy: et,
  setContext: tt
} = window.__gradio__svelte__internal;
function K(t) {
  let e, o;
  const l = (
    /*#slots*/
    t[7].default
  ), s = ze(
    l,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = ce("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      e = ie(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = le(e);
      s && s.l(r), r.forEach(S), this.h();
    },
    h() {
      ae(e, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      T(n, e, r), s && s.m(e, null), t[9](e), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && Qe(
        s,
        l,
        n,
        /*$$scope*/
        n[6],
        o ? Ve(
          l,
          /*$$scope*/
          n[6],
          r,
          null
        ) : qe(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (O(s, n), o = !0);
    },
    o(n) {
      D(s, n), o = !1;
    },
    d(n) {
      n && S(e), s && s.d(n), t[9](null);
    }
  };
}
function nt(t) {
  let e, o, l, s, n = (
    /*$$slots*/
    t[4].default && K(t)
  );
  return {
    c() {
      e = ce("react-portal-target"), o = Ke(), n && n.c(), l = X(), this.h();
    },
    l(r) {
      e = ie(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), le(e).forEach(S), o = Ue(r), n && n.l(r), l = X(), this.h();
    },
    h() {
      ae(e, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      T(r, e, i), t[8](e), T(r, o, i), n && n.m(r, i), T(r, l, i), s = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && O(n, 1)) : (n = K(r), n.c(), O(n, 1), n.m(l.parentNode, l)) : n && (Je(), D(n, 1, 1, () => {
        n = null;
      }), Be());
    },
    i(r) {
      s || (O(n), s = !0);
    },
    o(r) {
      D(n), s = !1;
    },
    d(r) {
      r && (S(e), S(o), S(l)), t[8](null), n && n.d(r);
    }
  };
}
function Q(t) {
  const {
    svelteInit: e,
    ...o
  } = t;
  return o;
}
function rt(t, e, o) {
  let l, s, {
    $$slots: n = {},
    $$scope: r
  } = e;
  const i = Ge(n);
  let {
    svelteInit: u
  } = e;
  const _ = P(Q(e)), h = P();
  J(t, h, (m) => o(0, l = m));
  const c = P();
  J(t, c, (m) => o(1, s = m));
  const g = [], d = $e("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: x,
    subSlotIndex: a
  } = he() || {}, f = u({
    parent: d,
    props: _,
    target: h,
    slot: c,
    slotKey: w,
    slotIndex: x,
    subSlotIndex: a,
    onDestroy(m) {
      g.push(m);
    }
  });
  tt("$$ms-gr-react-wrapper", f), Ze(() => {
    _.set(Q(e));
  }), et(() => {
    g.forEach((m) => m());
  });
  function y(m) {
    V[m ? "unshift" : "push"](() => {
      l = m, h.set(l);
    });
  }
  function C(m) {
    V[m ? "unshift" : "push"](() => {
      s = m, c.set(s);
    });
  }
  return t.$$set = (m) => {
    o(17, e = q(q({}, e), Y(m))), "svelteInit" in m && o(5, u = m.svelteInit), "$$scope" in m && o(6, r = m.$$scope);
  }, e = Y(e), [l, s, h, c, i, u, r, n, y, C];
}
class ot extends De {
  constructor(e) {
    super(), Xe(this, e, rt, nt, Ye, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: bt
} = window.__gradio__svelte__internal, Z = window.ms_globals.rerender, N = window.ms_globals.tree;
function st(t, e = {}) {
  function o(l) {
    const s = P(), n = new ot({
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
          }, u = r.parent ?? N;
          return u.nodes = [...u.nodes, i], Z({
            createPortal: W,
            node: N
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((_) => _.svelteInstance !== s), Z({
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
function lt(t) {
  const [e, o] = ne(() => k(t));
  return re(() => {
    let l = !0;
    return t.subscribe((n) => {
      l && (l = !1, n === e) || o(n);
    });
  }, [t]), e;
}
function it(t) {
  const e = L(() => ge(t, (o) => o), [t]);
  return lt(e);
}
function ct(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function at(t, e = !1) {
  try {
    if (xe(t))
      return t;
    if (e && !ct(t))
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
function $(t, e) {
  return L(() => at(t, e), [t, e]);
}
function ut(t, e) {
  const o = L(() => E.Children.toArray(t.originalChildren || t).filter((n) => n.props.node && !n.props.node.ignore && (!n.props.nodeSlotKey || e)).sort((n, r) => {
    if (n.props.node.slotIndex && r.props.node.slotIndex) {
      const i = k(n.props.node.slotIndex) || 0, u = k(r.props.node.slotIndex) || 0;
      return i - u === 0 && n.props.node.subSlotIndex && r.props.node.subSlotIndex ? (k(n.props.node.subSlotIndex) || 0) - (k(r.props.node.subSlotIndex) || 0) : i - u;
    }
    return 0;
  }).map((n) => n.props.node.target), [t, e]);
  return it(o);
}
const dt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ft(t) {
  return t ? Object.keys(t).reduce((e, o) => {
    const l = t[o];
    return e[o] = mt(o, l), e;
  }, {}) : {};
}
function mt(t, e) {
  return typeof e == "number" && !dt.includes(t) ? e + "px" : e;
}
function B(t) {
  const e = [], o = t.cloneNode(!1);
  if (t._reactElement) {
    const s = E.Children.toArray(t._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = B(n.props.el);
        return E.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...E.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = t._reactElement.props.children, e.push(W(E.cloneElement(t._reactElement, {
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
      useCapture: u
    }) => {
      o.addEventListener(i, r, u);
    });
  });
  const l = Array.from(t.childNodes);
  for (let s = 0; s < l.length; s++) {
    const n = l[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = B(n);
      e.push(...i), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: e
  };
}
function pt(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const j = fe(({
  slot: t,
  clone: e,
  className: o,
  style: l,
  observeAttributes: s
}, n) => {
  const r = me(), [i, u] = ne([]), {
    forceClone: _
  } = be(), h = _ ? !0 : e;
  return re(() => {
    var x;
    if (!r.current || !t)
      return;
    let c = t;
    function g() {
      let a = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (a = c.children[0], a.tagName.toLowerCase() === "react-portal-target" && a.children[0] && (a = a.children[0])), pt(n, a), o && a.classList.add(...o.split(" ")), l) {
        const f = ft(l);
        Object.keys(f).forEach((y) => {
          a.style[y] = f[y];
        });
      }
    }
    let d = null, w = null;
    if (h && window.MutationObserver) {
      let a = function() {
        var m, v, p;
        (m = r.current) != null && m.contains(c) && ((v = r.current) == null || v.removeChild(c));
        const {
          portals: y,
          clonedElement: C
        } = B(t);
        c = C, u(y), c.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          g();
        }, 50), (p = r.current) == null || p.appendChild(c);
      };
      a();
      const f = Le(() => {
        a(), d == null || d.disconnect(), d == null || d.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      d = new window.MutationObserver(f), d.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", g(), (x = r.current) == null || x.appendChild(c);
    return () => {
      var a, f;
      c.style.display = "", (a = r.current) != null && a.contains(c) && ((f = r.current) == null || f.removeChild(c)), d == null || d.disconnect();
    };
  }, [t, h, o, l, n, s, _]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
}), _t = ({
  children: t,
  ...e
}) => /* @__PURE__ */ b.jsx(b.Fragment, {
  children: t(e)
});
function ue(t) {
  return E.createElement(_t, {
    children: t
  });
}
function de(t, e, o) {
  const l = t.filter(Boolean);
  if (l.length !== 0)
    return l.map((s, n) => {
      var _;
      if (typeof s != "object")
        return s;
      const r = {
        ...s.props,
        key: ((_ = s.props) == null ? void 0 : _.key) ?? (o ? `${o}-${n}` : `${n}`)
      };
      let i = r;
      Object.keys(s.slots).forEach((h) => {
        if (!s.slots[h] || !(s.slots[h] instanceof Element) && !s.slots[h].el)
          return;
        const c = h.split(".");
        c.forEach((f, y) => {
          i[f] || (i[f] = {}), y !== c.length - 1 && (i = r[f]);
        });
        const g = s.slots[h];
        let d, w, x = !1, a = e == null ? void 0 : e.forceClone;
        g instanceof Element ? d = g : (d = g.el, w = g.callback, x = g.clone ?? x, a = g.forceClone ?? a), a = a ?? !!w, i[c[c.length - 1]] = d ? w ? (...f) => (w(c[c.length - 1], f), /* @__PURE__ */ b.jsx(M, {
          ...s.ctx,
          params: f,
          forceClone: a,
          children: /* @__PURE__ */ b.jsx(j, {
            slot: d,
            clone: x
          })
        })) : ue((f) => /* @__PURE__ */ b.jsx(M, {
          ...s.ctx,
          forceClone: a,
          children: /* @__PURE__ */ b.jsx(j, {
            ...f,
            slot: d,
            clone: x
          })
        })) : i[c[c.length - 1]], i = r;
      });
      const u = "children";
      return s[u] && (r[u] = de(s[u], e, `${n}`)), r;
    });
}
function ee(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? ue((o) => /* @__PURE__ */ b.jsx(M, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ b.jsx(j, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...o
    })
  })) : /* @__PURE__ */ b.jsx(j, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function te({
  key: t,
  slots: e,
  targets: o
}, l) {
  return e[t] ? (...s) => o ? o.map((n, r) => /* @__PURE__ */ b.jsx(E.Fragment, {
    children: ee(n, {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ b.jsx(b.Fragment, {
    children: ee(e[t], {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }) : void 0;
}
const {
  withItemsContextProvider: ht,
  useItems: gt,
  ItemHandler: wt
} = ye("antd-color-picker-presets"), yt = st(ht(["presets"], ({
  onValueChange: t,
  onChange: e,
  panelRender: o,
  showText: l,
  value: s,
  presets: n,
  children: r,
  value_format: i,
  setSlotParams: u,
  slots: _,
  ...h
}) => {
  const c = $(o), g = $(l), d = ut(r), {
    items: {
      presets: w
    }
  } = gt();
  return /* @__PURE__ */ b.jsxs(b.Fragment, {
    children: [d.length === 0 && /* @__PURE__ */ b.jsx("div", {
      style: {
        display: "none"
      },
      children: r
    }), /* @__PURE__ */ b.jsx(we, {
      ...h,
      value: s,
      presets: L(() => n || de(w), [n, w]),
      showText: _.showText ? te({
        slots: _,
        key: "showText"
      }) : g || l,
      panelRender: _.panelRender ? te({
        slots: _,
        key: "panelRender"
      }) : c,
      onChange: (x, ...a) => {
        if (x.isGradient()) {
          const y = x.getColors().map((C) => {
            const m = {
              rgb: C.color.toRgbString(),
              hex: C.color.toHexString(),
              hsb: C.color.toHsbString()
            };
            return {
              ...C,
              color: m[i]
            };
          });
          e == null || e(y, ...a), t(y);
          return;
        }
        const f = {
          rgb: x.toRgbString(),
          hex: x.toHexString(),
          hsb: x.toHsbString()
        };
        e == null || e(f[i], ...a), t(f[i]);
      },
      children: d.length === 0 ? null : r
    })]
  });
}));
export {
  yt as ColorPicker,
  yt as default
};
