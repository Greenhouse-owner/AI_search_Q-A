import { i as Ce, a as B, r as be, b as ye, w as F, g as Ie, c as ve } from "./Index-Belcl7_-.js";
const E = window.ms_globals.React, we = window.ms_globals.React.forwardRef, D = window.ms_globals.React.useRef, le = window.ms_globals.React.useState, V = window.ms_globals.React.useEffect, ce = window.ms_globals.React.useMemo, U = window.ms_globals.ReactDOM.createPortal, Ee = window.ms_globals.internalContext.useContextPropsContext, H = window.ms_globals.internalContext.ContextPropsProvider, Re = window.ms_globals.antd.Cascader, Se = window.ms_globals.createItemsContext.createItemsContext;
var Pe = /\s/;
function ke(e) {
  for (var t = e.length; t-- && Pe.test(e.charAt(t)); )
    ;
  return t;
}
var je = /^\s+/;
function Te(e) {
  return e && e.slice(0, ke(e) + 1).replace(je, "");
}
var X = NaN, Fe = /^[-+]0x[0-9a-f]+$/i, Oe = /^0b[01]+$/i, Le = /^0o[0-7]+$/i, Ne = parseInt;
function Y(e) {
  if (typeof e == "number")
    return e;
  if (Ce(e))
    return X;
  if (B(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = B(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Te(e);
  var o = Oe.test(e);
  return o || Le.test(e) ? Ne(e.slice(2), o ? 2 : 8) : Fe.test(e) ? X : +e;
}
var A = function() {
  return be.Date.now();
}, We = "Expected a function", Ae = Math.max, Me = Math.min;
function De(e, t, o) {
  var c, l, n, r, s, a, x = 0, w = !1, i = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(We);
  t = Y(t) || 0, B(o) && (w = !!o.leading, i = "maxWait" in o, n = i ? Ae(Y(o.maxWait) || 0, t) : n, p = "trailing" in o ? !!o.trailing : p);
  function m(h) {
    var C = c, P = l;
    return c = l = void 0, x = h, r = e.apply(P, C), r;
  }
  function b(h) {
    return x = h, s = setTimeout(f, t), w ? m(h) : r;
  }
  function g(h) {
    var C = h - a, P = h - x, T = t - C;
    return i ? Me(T, n - P) : T;
  }
  function u(h) {
    var C = h - a, P = h - x;
    return a === void 0 || C >= t || C < 0 || i && P >= n;
  }
  function f() {
    var h = A();
    if (u(h))
      return y(h);
    s = setTimeout(f, g(h));
  }
  function y(h) {
    return s = void 0, p && c ? m(h) : (c = l = void 0, r);
  }
  function S() {
    s !== void 0 && clearTimeout(s), x = 0, c = a = l = s = void 0;
  }
  function d() {
    return s === void 0 ? r : y(A());
  }
  function R() {
    var h = A(), C = u(h);
    if (c = arguments, l = this, a = h, C) {
      if (s === void 0)
        return b(a);
      if (i)
        return clearTimeout(s), s = setTimeout(f, t), m(a);
    }
    return s === void 0 && (s = setTimeout(f, t)), r;
  }
  return R.cancel = S, R.flush = d, R;
}
function Ve(e, t) {
  return ye(e, t);
}
var se = {
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
var Ue = E, Be = Symbol.for("react.element"), He = Symbol.for("react.fragment"), qe = Object.prototype.hasOwnProperty, ze = Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ge = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ie(e, t, o) {
  var c, l = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (c in t) qe.call(t, c) && !Ge.hasOwnProperty(c) && (l[c] = t[c]);
  if (e && e.defaultProps) for (c in t = e.defaultProps, t) l[c] === void 0 && (l[c] = t[c]);
  return {
    $$typeof: Be,
    type: e,
    key: n,
    ref: r,
    props: l,
    _owner: ze.current
  };
}
N.Fragment = He;
N.jsx = ie;
N.jsxs = ie;
se.exports = N;
var _ = se.exports;
const {
  SvelteComponent: Je,
  assign: K,
  binding_callbacks: Q,
  check_outros: Xe,
  children: ae,
  claim_element: ue,
  claim_space: Ye,
  component_subscribe: Z,
  compute_slots: Ke,
  create_slot: Qe,
  detach: k,
  element: de,
  empty: $,
  exclude_internal_props: ee,
  get_all_dirty_from_scope: Ze,
  get_slot_changes: $e,
  group_outros: et,
  init: tt,
  insert_hydration: O,
  safe_not_equal: nt,
  set_custom_element_data: fe,
  space: rt,
  transition_in: L,
  transition_out: q,
  update_slot_base: ot
} = window.__gradio__svelte__internal, {
  beforeUpdate: lt,
  getContext: ct,
  onDestroy: st,
  setContext: it
} = window.__gradio__svelte__internal;
function te(e) {
  let t, o;
  const c = (
    /*#slots*/
    e[7].default
  ), l = Qe(
    c,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = de("svelte-slot"), l && l.c(), this.h();
    },
    l(n) {
      t = ue(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = ae(t);
      l && l.l(r), r.forEach(k), this.h();
    },
    h() {
      fe(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      O(n, t, r), l && l.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      l && l.p && (!o || r & /*$$scope*/
      64) && ot(
        l,
        c,
        n,
        /*$$scope*/
        n[6],
        o ? $e(
          c,
          /*$$scope*/
          n[6],
          r,
          null
        ) : Ze(
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
      q(l, n), o = !1;
    },
    d(n) {
      n && k(t), l && l.d(n), e[9](null);
    }
  };
}
function at(e) {
  let t, o, c, l, n = (
    /*$$slots*/
    e[4].default && te(e)
  );
  return {
    c() {
      t = de("react-portal-target"), o = rt(), n && n.c(), c = $(), this.h();
    },
    l(r) {
      t = ue(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ae(t).forEach(k), o = Ye(r), n && n.l(r), c = $(), this.h();
    },
    h() {
      fe(t, "class", "svelte-1rt0kpf");
    },
    m(r, s) {
      O(r, t, s), e[8](t), O(r, o, s), n && n.m(r, s), O(r, c, s), l = !0;
    },
    p(r, [s]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, s), s & /*$$slots*/
      16 && L(n, 1)) : (n = te(r), n.c(), L(n, 1), n.m(c.parentNode, c)) : n && (et(), q(n, 1, 1, () => {
        n = null;
      }), Xe());
    },
    i(r) {
      l || (L(n), l = !0);
    },
    o(r) {
      q(n), l = !1;
    },
    d(r) {
      r && (k(t), k(o), k(c)), e[8](null), n && n.d(r);
    }
  };
}
function ne(e) {
  const {
    svelteInit: t,
    ...o
  } = e;
  return o;
}
function ut(e, t, o) {
  let c, l, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const s = Ke(n);
  let {
    svelteInit: a
  } = t;
  const x = F(ne(t)), w = F();
  Z(e, w, (d) => o(0, c = d));
  const i = F();
  Z(e, i, (d) => o(1, l = d));
  const p = [], m = ct("$$ms-gr-react-wrapper"), {
    slotKey: b,
    slotIndex: g,
    subSlotIndex: u
  } = Ie() || {}, f = a({
    parent: m,
    props: x,
    target: w,
    slot: i,
    slotKey: b,
    slotIndex: g,
    subSlotIndex: u,
    onDestroy(d) {
      p.push(d);
    }
  });
  it("$$ms-gr-react-wrapper", f), lt(() => {
    x.set(ne(t));
  }), st(() => {
    p.forEach((d) => d());
  });
  function y(d) {
    Q[d ? "unshift" : "push"](() => {
      c = d, w.set(c);
    });
  }
  function S(d) {
    Q[d ? "unshift" : "push"](() => {
      l = d, i.set(l);
    });
  }
  return e.$$set = (d) => {
    o(17, t = K(K({}, t), ee(d))), "svelteInit" in d && o(5, a = d.svelteInit), "$$scope" in d && o(6, r = d.$$scope);
  }, t = ee(t), [c, l, w, i, s, a, r, n, y, S];
}
class dt extends Je {
  constructor(t) {
    super(), tt(this, t, ut, at, nt, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: Et
} = window.__gradio__svelte__internal, re = window.ms_globals.rerender, M = window.ms_globals.tree;
function ft(e, t = {}) {
  function o(c) {
    const l = F(), n = new dt({
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
          }, a = r.parent ?? M;
          return a.nodes = [...a.nodes, s], re({
            createPortal: U,
            node: M
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((x) => x.svelteInstance !== l), re({
              createPortal: U,
              node: M
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
const mt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ht(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const c = e[o];
    return t[o] = _t(o, c), t;
  }, {}) : {};
}
function _t(e, t) {
  return typeof t == "number" && !mt.includes(e) ? t + "px" : t;
}
function z(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const l = E.Children.toArray(e._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: s
        } = z(n.props.el);
        return E.cloneElement(n, {
          ...n.props,
          el: s,
          children: [...E.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return l.originalChildren = e._reactElement.props.children, t.push(U(E.cloneElement(e._reactElement, {
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
      } = z(n);
      t.push(...s), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function gt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const I = we(({
  slot: e,
  clone: t,
  className: o,
  style: c,
  observeAttributes: l
}, n) => {
  const r = D(), [s, a] = le([]), {
    forceClone: x
  } = Ee(), w = x ? !0 : t;
  return V(() => {
    var g;
    if (!r.current || !e)
      return;
    let i = e;
    function p() {
      let u = i;
      if (i.tagName.toLowerCase() === "svelte-slot" && i.children.length === 1 && i.children[0] && (u = i.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), gt(n, u), o && u.classList.add(...o.split(" ")), c) {
        const f = ht(c);
        Object.keys(f).forEach((y) => {
          u.style[y] = f[y];
        });
      }
    }
    let m = null, b = null;
    if (w && window.MutationObserver) {
      let u = function() {
        var d, R, h;
        (d = r.current) != null && d.contains(i) && ((R = r.current) == null || R.removeChild(i));
        const {
          portals: y,
          clonedElement: S
        } = z(e);
        i = S, a(y), i.style.display = "contents", b && clearTimeout(b), b = setTimeout(() => {
          p();
        }, 50), (h = r.current) == null || h.appendChild(i);
      };
      u();
      const f = De(() => {
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
      i.style.display = "contents", p(), (g = r.current) == null || g.appendChild(i);
    return () => {
      var u, f;
      i.style.display = "", (u = r.current) != null && u.contains(i) && ((f = r.current) == null || f.removeChild(i)), m == null || m.disconnect();
    };
  }, [e, w, o, c, n, l, x]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...s);
});
function pt(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function xt(e, t = !1) {
  try {
    if (ve(e))
      return e;
    if (t && !pt(e))
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
function v(e, t) {
  return ce(() => xt(e, t), [e, t]);
}
function wt({
  value: e,
  onValueChange: t
}) {
  const [o, c] = le(e), l = D(t);
  l.current = t;
  const n = D(o);
  return n.current = o, V(() => {
    l.current(o);
  }, [o]), V(() => {
    Ve(e, n.current) || c(e);
  }, [e]), [o, c];
}
const Ct = ({
  children: e,
  ...t
}) => /* @__PURE__ */ _.jsx(_.Fragment, {
  children: e(t)
});
function me(e) {
  return E.createElement(Ct, {
    children: e
  });
}
function he(e, t, o) {
  const c = e.filter(Boolean);
  if (c.length !== 0)
    return c.map((l, n) => {
      var x;
      if (typeof l != "object")
        return t != null && t.fallback ? t.fallback(l) : l;
      const r = {
        ...l.props,
        key: ((x = l.props) == null ? void 0 : x.key) ?? (o ? `${o}-${n}` : `${n}`)
      };
      let s = r;
      Object.keys(l.slots).forEach((w) => {
        if (!l.slots[w] || !(l.slots[w] instanceof Element) && !l.slots[w].el)
          return;
        const i = w.split(".");
        i.forEach((f, y) => {
          s[f] || (s[f] = {}), y !== i.length - 1 && (s = r[f]);
        });
        const p = l.slots[w];
        let m, b, g = (t == null ? void 0 : t.clone) ?? !1, u = t == null ? void 0 : t.forceClone;
        p instanceof Element ? m = p : (m = p.el, b = p.callback, g = p.clone ?? g, u = p.forceClone ?? u), u = u ?? !!b, s[i[i.length - 1]] = m ? b ? (...f) => (b(i[i.length - 1], f), /* @__PURE__ */ _.jsx(H, {
          ...l.ctx,
          params: f,
          forceClone: u,
          children: /* @__PURE__ */ _.jsx(I, {
            slot: m,
            clone: g
          })
        })) : me((f) => /* @__PURE__ */ _.jsx(H, {
          ...l.ctx,
          forceClone: u,
          children: /* @__PURE__ */ _.jsx(I, {
            ...f,
            slot: m,
            clone: g
          })
        })) : s[i[i.length - 1]], s = r;
      });
      const a = (t == null ? void 0 : t.children) || "children";
      return l[a] ? r[a] = he(l[a], t, `${n}`) : t != null && t.children && (r[a] = void 0, Reflect.deleteProperty(r, a)), r;
    });
}
function oe(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? me((o) => /* @__PURE__ */ _.jsx(H, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ _.jsx(I, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...o
    })
  })) : /* @__PURE__ */ _.jsx(I, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function j({
  key: e,
  slots: t,
  targets: o
}, c) {
  return t[e] ? (...l) => o ? o.map((n, r) => /* @__PURE__ */ _.jsx(E.Fragment, {
    children: oe(n, {
      clone: !0,
      params: l,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ _.jsx(_.Fragment, {
    children: oe(t[e], {
      clone: !0,
      params: l,
      forceClone: !0
    })
  }) : void 0;
}
const {
  useItems: bt,
  withItemsContextProvider: yt,
  ItemHandler: Rt
} = Se("antd-cascader-options");
function It(e) {
  return typeof e == "object" && e !== null ? e : {};
}
const St = ft(yt(["default", "options"], ({
  slots: e,
  children: t,
  onValueChange: o,
  onChange: c,
  displayRender: l,
  elRef: n,
  getPopupContainer: r,
  tagRender: s,
  maxTagPlaceholder: a,
  dropdownRender: x,
  optionRender: w,
  showSearch: i,
  options: p,
  setSlotParams: m,
  onLoadData: b,
  ...g
}) => {
  const u = v(r), f = v(l), y = v(s), S = v(w), d = v(x), R = v(a), h = typeof i == "object" || e["showSearch.render"], C = It(i), P = v(C.filter), T = v(C.render), _e = v(C.sort), [ge, pe] = wt({
    onValueChange: o,
    value: g.value
  }), {
    items: W
  } = bt(), G = W.options.length > 0 ? W.options : W.default;
  return /* @__PURE__ */ _.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ _.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ _.jsx(Re, {
      ...g,
      ref: n,
      value: ge,
      options: ce(() => p || he(G, {
        clone: !0
      }), [p, G]),
      showSearch: h ? {
        ...C,
        filter: P || C.filter,
        render: e["showSearch.render"] ? j({
          slots: e,
          key: "showSearch.render"
        }) : T || C.render,
        sort: _e || C.sort
      } : i,
      loadData: b,
      optionRender: S,
      getPopupContainer: u,
      prefix: e.prefix ? /* @__PURE__ */ _.jsx(I, {
        slot: e.prefix
      }) : g.prefix,
      dropdownRender: e.dropdownRender ? j({
        slots: e,
        key: "dropdownRender"
      }) : d,
      displayRender: e.displayRender ? j({
        slots: e,
        key: "displayRender"
      }) : f,
      tagRender: e.tagRender ? j({
        slots: e,
        key: "tagRender"
      }) : y,
      onChange: (J, ...xe) => {
        c == null || c(J, ...xe), pe(J);
      },
      suffixIcon: e.suffixIcon ? /* @__PURE__ */ _.jsx(I, {
        slot: e.suffixIcon
      }) : g.suffixIcon,
      expandIcon: e.expandIcon ? /* @__PURE__ */ _.jsx(I, {
        slot: e.expandIcon
      }) : g.expandIcon,
      removeIcon: e.removeIcon ? /* @__PURE__ */ _.jsx(I, {
        slot: e.removeIcon
      }) : g.removeIcon,
      notFoundContent: e.notFoundContent ? /* @__PURE__ */ _.jsx(I, {
        slot: e.notFoundContent
      }) : g.notFoundContent,
      maxTagPlaceholder: e.maxTagPlaceholder ? j({
        slots: e,
        key: "maxTagPlaceholder"
      }) : R || a,
      allowClear: e["allowClear.clearIcon"] ? {
        clearIcon: /* @__PURE__ */ _.jsx(I, {
          slot: e["allowClear.clearIcon"]
        })
      } : g.allowClear
    })]
  });
}));
export {
  St as Cascader,
  St as default
};
