import { i as me, a as D, r as he, w as O, g as _e, b as ge } from "./Index-kybxPm-1.js";
const y = window.ms_globals.React, ae = window.ms_globals.React.forwardRef, ue = window.ms_globals.React.useRef, de = window.ms_globals.React.useState, fe = window.ms_globals.React.useEffect, ee = window.ms_globals.React.useMemo, M = window.ms_globals.ReactDOM.createPortal, pe = window.ms_globals.internalContext.useContextPropsContext, U = window.ms_globals.internalContext.ContextPropsProvider, xe = window.ms_globals.antd.Select, we = window.ms_globals.createItemsContext.createItemsContext;
var be = /\s/;
function Ce(e) {
  for (var t = e.length; t-- && be.test(e.charAt(t)); )
    ;
  return t;
}
var Ie = /^\s+/;
function ve(e) {
  return e && e.slice(0, Ce(e) + 1).replace(Ie, "");
}
var z = NaN, ye = /^[-+]0x[0-9a-f]+$/i, Ee = /^0b[01]+$/i, Se = /^0o[0-7]+$/i, Re = parseInt;
function G(e) {
  if (typeof e == "number")
    return e;
  if (me(e))
    return z;
  if (D(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = D(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ve(e);
  var o = Ee.test(e);
  return o || Se.test(e) ? Re(e.slice(2), o ? 2 : 8) : ye.test(e) ? z : +e;
}
var W = function() {
  return he.Date.now();
}, Pe = "Expected a function", ke = Math.max, Te = Math.min;
function je(e, t, o) {
  var c, l, n, r, s, a, p = 0, x = !1, i = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(Pe);
  t = G(t) || 0, D(o) && (x = !!o.leading, i = "maxWait" in o, n = i ? ke(G(o.maxWait) || 0, t) : n, w = "trailing" in o ? !!o.trailing : w);
  function h(f) {
    var I = c, S = l;
    return c = l = void 0, p = f, r = e.apply(S, I), r;
  }
  function g(f) {
    return p = f, s = setTimeout(m, t), x ? h(f) : r;
  }
  function b(f) {
    var I = f - a, S = f - p, j = t - I;
    return i ? Te(j, n - S) : j;
  }
  function u(f) {
    var I = f - a, S = f - p;
    return a === void 0 || I >= t || I < 0 || i && S >= n;
  }
  function m() {
    var f = W();
    if (u(f))
      return C(f);
    s = setTimeout(m, b(f));
  }
  function C(f) {
    return s = void 0, w && c ? h(f) : (c = l = void 0, r);
  }
  function R() {
    s !== void 0 && clearTimeout(s), p = 0, c = a = l = s = void 0;
  }
  function d() {
    return s === void 0 ? r : C(W());
  }
  function E() {
    var f = W(), I = u(f);
    if (c = arguments, l = this, a = f, I) {
      if (s === void 0)
        return g(a);
      if (i)
        return clearTimeout(s), s = setTimeout(m, t), h(a);
    }
    return s === void 0 && (s = setTimeout(m, t)), r;
  }
  return E.cancel = R, E.flush = d, E;
}
var te = {
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
var Oe = y, Fe = Symbol.for("react.element"), Le = Symbol.for("react.fragment"), Ne = Object.prototype.hasOwnProperty, We = Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ae = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ne(e, t, o) {
  var c, l = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (c in t) Ne.call(t, c) && !Ae.hasOwnProperty(c) && (l[c] = t[c]);
  if (e && e.defaultProps) for (c in t = e.defaultProps, t) l[c] === void 0 && (l[c] = t[c]);
  return {
    $$typeof: Fe,
    type: e,
    key: n,
    ref: r,
    props: l,
    _owner: We.current
  };
}
N.Fragment = Le;
N.jsx = ne;
N.jsxs = ne;
te.exports = N;
var _ = te.exports;
const {
  SvelteComponent: Me,
  assign: q,
  binding_callbacks: V,
  check_outros: De,
  children: re,
  claim_element: le,
  claim_space: Ue,
  component_subscribe: J,
  compute_slots: Be,
  create_slot: He,
  detach: k,
  element: oe,
  empty: X,
  exclude_internal_props: Y,
  get_all_dirty_from_scope: ze,
  get_slot_changes: Ge,
  group_outros: qe,
  init: Ve,
  insert_hydration: F,
  safe_not_equal: Je,
  set_custom_element_data: ce,
  space: Xe,
  transition_in: L,
  transition_out: B,
  update_slot_base: Ye
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ke,
  getContext: Qe,
  onDestroy: Ze,
  setContext: $e
} = window.__gradio__svelte__internal;
function K(e) {
  let t, o;
  const c = (
    /*#slots*/
    e[7].default
  ), l = He(
    c,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = oe("svelte-slot"), l && l.c(), this.h();
    },
    l(n) {
      t = le(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = re(t);
      l && l.l(r), r.forEach(k), this.h();
    },
    h() {
      ce(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      F(n, t, r), l && l.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      l && l.p && (!o || r & /*$$scope*/
      64) && Ye(
        l,
        c,
        n,
        /*$$scope*/
        n[6],
        o ? Ge(
          c,
          /*$$scope*/
          n[6],
          r,
          null
        ) : ze(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (L(l, n), o = !0);
    },
    o(n) {
      B(l, n), o = !1;
    },
    d(n) {
      n && k(t), l && l.d(n), e[9](null);
    }
  };
}
function et(e) {
  let t, o, c, l, n = (
    /*$$slots*/
    e[4].default && K(e)
  );
  return {
    c() {
      t = oe("react-portal-target"), o = Xe(), n && n.c(), c = X(), this.h();
    },
    l(r) {
      t = le(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), re(t).forEach(k), o = Ue(r), n && n.l(r), c = X(), this.h();
    },
    h() {
      ce(t, "class", "svelte-1rt0kpf");
    },
    m(r, s) {
      F(r, t, s), e[8](t), F(r, o, s), n && n.m(r, s), F(r, c, s), l = !0;
    },
    p(r, [s]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, s), s & /*$$slots*/
      16 && L(n, 1)) : (n = K(r), n.c(), L(n, 1), n.m(c.parentNode, c)) : n && (qe(), B(n, 1, 1, () => {
        n = null;
      }), De());
    },
    i(r) {
      l || (L(n), l = !0);
    },
    o(r) {
      B(n), l = !1;
    },
    d(r) {
      r && (k(t), k(o), k(c)), e[8](null), n && n.d(r);
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
  let c, l, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const s = Be(n);
  let {
    svelteInit: a
  } = t;
  const p = O(Q(t)), x = O();
  J(e, x, (d) => o(0, c = d));
  const i = O();
  J(e, i, (d) => o(1, l = d));
  const w = [], h = Qe("$$ms-gr-react-wrapper"), {
    slotKey: g,
    slotIndex: b,
    subSlotIndex: u
  } = _e() || {}, m = a({
    parent: h,
    props: p,
    target: x,
    slot: i,
    slotKey: g,
    slotIndex: b,
    subSlotIndex: u,
    onDestroy(d) {
      w.push(d);
    }
  });
  $e("$$ms-gr-react-wrapper", m), Ke(() => {
    p.set(Q(t));
  }), Ze(() => {
    w.forEach((d) => d());
  });
  function C(d) {
    V[d ? "unshift" : "push"](() => {
      c = d, x.set(c);
    });
  }
  function R(d) {
    V[d ? "unshift" : "push"](() => {
      l = d, i.set(l);
    });
  }
  return e.$$set = (d) => {
    o(17, t = q(q({}, t), Y(d))), "svelteInit" in d && o(5, a = d.svelteInit), "$$scope" in d && o(6, r = d.$$scope);
  }, t = Y(t), [c, l, x, i, s, a, r, n, C, R];
}
class nt extends Me {
  constructor(t) {
    super(), Ve(this, t, tt, et, Je, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ht
} = window.__gradio__svelte__internal, Z = window.ms_globals.rerender, A = window.ms_globals.tree;
function rt(e, t = {}) {
  function o(c) {
    const l = O(), n = new nt({
      ...c,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const s = {
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
          }, a = r.parent ?? A;
          return a.nodes = [...a.nodes, s], Z({
            createPortal: M,
            node: A
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((p) => p.svelteInstance !== l), Z({
              createPortal: M,
              node: A
            });
          }), s;
        },
        ...c.props
      }
    });
    return l.set(n), n;
  }
  return new Promise((c) => {
    window.ms_globals.initializePromise.then(() => {
      c(o);
    });
  });
}
const lt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ot(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const c = e[o];
    return t[o] = ct(o, c), t;
  }, {}) : {};
}
function ct(e, t) {
  return typeof t == "number" && !lt.includes(e) ? t + "px" : t;
}
function H(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const l = y.Children.toArray(e._reactElement.props.children).map((n) => {
      if (y.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: s
        } = H(n.props.el);
        return y.cloneElement(n, {
          ...n.props,
          el: s,
          children: [...y.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return l.originalChildren = e._reactElement.props.children, t.push(M(y.cloneElement(e._reactElement, {
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
      type: s,
      useCapture: a
    }) => {
      o.addEventListener(s, r, a);
    });
  });
  const c = Array.from(e.childNodes);
  for (let l = 0; l < c.length; l++) {
    const n = c[l];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: s
      } = H(n);
      t.push(...s), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function st(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const v = ae(({
  slot: e,
  clone: t,
  className: o,
  style: c,
  observeAttributes: l
}, n) => {
  const r = ue(), [s, a] = de([]), {
    forceClone: p
  } = pe(), x = p ? !0 : t;
  return fe(() => {
    var b;
    if (!r.current || !e)
      return;
    let i = e;
    function w() {
      let u = i;
      if (i.tagName.toLowerCase() === "svelte-slot" && i.children.length === 1 && i.children[0] && (u = i.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), st(n, u), o && u.classList.add(...o.split(" ")), c) {
        const m = ot(c);
        Object.keys(m).forEach((C) => {
          u.style[C] = m[C];
        });
      }
    }
    let h = null, g = null;
    if (x && window.MutationObserver) {
      let u = function() {
        var d, E, f;
        (d = r.current) != null && d.contains(i) && ((E = r.current) == null || E.removeChild(i));
        const {
          portals: C,
          clonedElement: R
        } = H(e);
        i = R, a(C), i.style.display = "contents", g && clearTimeout(g), g = setTimeout(() => {
          w();
        }, 50), (f = r.current) == null || f.appendChild(i);
      };
      u();
      const m = je(() => {
        u(), h == null || h.disconnect(), h == null || h.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      h = new window.MutationObserver(m), h.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      i.style.display = "contents", w(), (b = r.current) == null || b.appendChild(i);
    return () => {
      var u, m;
      i.style.display = "", (u = r.current) != null && u.contains(i) && ((m = r.current) == null || m.removeChild(i)), h == null || h.disconnect();
    };
  }, [e, x, o, c, n, l, p]), y.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...s);
});
function it(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function at(e, t = !1) {
  try {
    if (ge(e))
      return e;
    if (t && !it(e))
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
  return ee(() => at(e, t), [e, t]);
}
const ut = ({
  children: e,
  ...t
}) => /* @__PURE__ */ _.jsx(_.Fragment, {
  children: e(t)
});
function se(e) {
  return y.createElement(ut, {
    children: e
  });
}
function ie(e, t, o) {
  const c = e.filter(Boolean);
  if (c.length !== 0)
    return c.map((l, n) => {
      var p;
      if (typeof l != "object")
        return t != null && t.fallback ? t.fallback(l) : l;
      const r = {
        ...l.props,
        key: ((p = l.props) == null ? void 0 : p.key) ?? (o ? `${o}-${n}` : `${n}`)
      };
      let s = r;
      Object.keys(l.slots).forEach((x) => {
        if (!l.slots[x] || !(l.slots[x] instanceof Element) && !l.slots[x].el)
          return;
        const i = x.split(".");
        i.forEach((m, C) => {
          s[m] || (s[m] = {}), C !== i.length - 1 && (s = r[m]);
        });
        const w = l.slots[x];
        let h, g, b = (t == null ? void 0 : t.clone) ?? !1, u = t == null ? void 0 : t.forceClone;
        w instanceof Element ? h = w : (h = w.el, g = w.callback, b = w.clone ?? b, u = w.forceClone ?? u), u = u ?? !!g, s[i[i.length - 1]] = h ? g ? (...m) => (g(i[i.length - 1], m), /* @__PURE__ */ _.jsx(U, {
          ...l.ctx,
          params: m,
          forceClone: u,
          children: /* @__PURE__ */ _.jsx(v, {
            slot: h,
            clone: b
          })
        })) : se((m) => /* @__PURE__ */ _.jsx(U, {
          ...l.ctx,
          forceClone: u,
          children: /* @__PURE__ */ _.jsx(v, {
            ...m,
            slot: h,
            clone: b
          })
        })) : s[i[i.length - 1]], s = r;
      });
      const a = (t == null ? void 0 : t.children) || "children";
      return l[a] ? r[a] = ie(l[a], t, `${n}`) : t != null && t.children && (r[a] = void 0, Reflect.deleteProperty(r, a)), r;
    });
}
function $(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? se((o) => /* @__PURE__ */ _.jsx(U, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ _.jsx(v, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...o
    })
  })) : /* @__PURE__ */ _.jsx(v, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function T({
  key: e,
  slots: t,
  targets: o
}, c) {
  return t[e] ? (...l) => o ? o.map((n, r) => /* @__PURE__ */ _.jsx(y.Fragment, {
    children: $(n, {
      clone: !0,
      params: l,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ _.jsx(_.Fragment, {
    children: $(t[e], {
      clone: !0,
      params: l,
      forceClone: !0
    })
  }) : void 0;
}
const {
  withItemsContextProvider: dt,
  useItems: ft,
  ItemHandler: _t
} = we("antd-select-options"), gt = rt(dt(["options", "default"], ({
  slots: e,
  children: t,
  onValueChange: o,
  filterOption: c,
  onChange: l,
  options: n,
  getPopupContainer: r,
  dropdownRender: s,
  optionRender: a,
  tagRender: p,
  labelRender: x,
  filterSort: i,
  elRef: w,
  setSlotParams: h,
  ...g
}) => {
  const b = P(r), u = P(c), m = P(s), C = P(i), R = P(a), d = P(p), E = P(x), {
    items: f
  } = ft(), I = f.options.length > 0 ? f.options : f.default;
  return /* @__PURE__ */ _.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ _.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ _.jsx(xe, {
      ...g,
      ref: w,
      options: ee(() => n || ie(I, {
        children: "options",
        clone: !0
      }), [I, n]),
      onChange: (S, ...j) => {
        l == null || l(S, ...j), o(S);
      },
      allowClear: e["allowClear.clearIcon"] ? {
        clearIcon: /* @__PURE__ */ _.jsx(v, {
          slot: e["allowClear.clearIcon"]
        })
      } : g.allowClear,
      prefix: e.prefix ? /* @__PURE__ */ _.jsx(v, {
        slot: e.prefix
      }) : g.prefix,
      removeIcon: e.removeIcon ? /* @__PURE__ */ _.jsx(v, {
        slot: e.removeIcon
      }) : g.removeIcon,
      suffixIcon: e.suffixIcon ? /* @__PURE__ */ _.jsx(v, {
        slot: e.suffixIcon
      }) : g.suffixIcon,
      notFoundContent: e.notFoundContent ? /* @__PURE__ */ _.jsx(v, {
        slot: e.notFoundContent
      }) : g.notFoundContent,
      menuItemSelectedIcon: e.menuItemSelectedIcon ? /* @__PURE__ */ _.jsx(v, {
        slot: e.menuItemSelectedIcon
      }) : g.menuItemSelectedIcon,
      filterOption: u || c,
      maxTagPlaceholder: e.maxTagPlaceholder ? T({
        slots: e,
        key: "maxTagPlaceholder"
      }) : g.maxTagPlaceholder,
      getPopupContainer: b,
      dropdownRender: e.dropdownRender ? T({
        slots: e,
        key: "dropdownRender"
      }) : m,
      optionRender: e.optionRender ? T({
        slots: e,
        key: "optionRender"
      }) : R,
      tagRender: e.tagRender ? T({
        slots: e,
        key: "tagRender"
      }) : d,
      labelRender: e.labelRender ? T({
        slots: e,
        key: "labelRender"
      }) : E,
      filterSort: C
    })]
  });
}));
export {
  gt as Select,
  gt as default
};
