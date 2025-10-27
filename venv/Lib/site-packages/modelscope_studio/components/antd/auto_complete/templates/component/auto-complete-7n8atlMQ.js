import { i as fe, a as D, r as me, b as he, w as j, g as _e, c as ge } from "./Index-CeKBz06S.js";
const v = window.ms_globals.React, ne = window.ms_globals.React.forwardRef, W = window.ms_globals.React.useRef, re = window.ms_globals.React.useState, N = window.ms_globals.React.useEffect, H = window.ms_globals.React.useMemo, M = window.ms_globals.ReactDOM.createPortal, pe = window.ms_globals.internalContext.useContextPropsContext, V = window.ms_globals.internalContext.ContextPropsProvider, Ce = window.ms_globals.internalContext.AutoCompleteContext, we = window.ms_globals.antd.AutoComplete, xe = window.ms_globals.createItemsContext.createItemsContext;
var be = /\s/;
function ve(t) {
  for (var e = t.length; e-- && be.test(t.charAt(e)); )
    ;
  return e;
}
var ye = /^\s+/;
function Ee(t) {
  return t && t.slice(0, ve(t) + 1).replace(ye, "");
}
var z = NaN, Ie = /^[-+]0x[0-9a-f]+$/i, Se = /^0b[01]+$/i, Re = /^0o[0-7]+$/i, Pe = parseInt;
function G(t) {
  if (typeof t == "number")
    return t;
  if (fe(t))
    return z;
  if (D(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = D(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ee(t);
  var r = Se.test(t);
  return r || Re.test(t) ? Pe(t.slice(2), r ? 2 : 8) : Ie.test(t) ? z : +t;
}
var F = function() {
  return me.Date.now();
}, je = "Expected a function", ke = Math.max, Oe = Math.min;
function Te(t, e, r) {
  var s, l, n, o, c, u, C = 0, g = !1, i = !1, p = !0;
  if (typeof t != "function")
    throw new TypeError(je);
  e = G(e) || 0, D(r) && (g = !!r.leading, i = "maxWait" in r, n = i ? ke(G(r.maxWait) || 0, e) : n, p = "trailing" in r ? !!r.trailing : p);
  function f(h) {
    var y = s, P = l;
    return s = l = void 0, C = h, o = t.apply(P, y), o;
  }
  function w(h) {
    return C = h, c = setTimeout(d, e), g ? f(h) : o;
  }
  function b(h) {
    var y = h - u, P = h - C, q = e - y;
    return i ? Oe(q, n - P) : q;
  }
  function a(h) {
    var y = h - u, P = h - C;
    return u === void 0 || y >= e || y < 0 || i && P >= n;
  }
  function d() {
    var h = F();
    if (a(h))
      return x(h);
    c = setTimeout(d, b(h));
  }
  function x(h) {
    return c = void 0, p && s ? f(h) : (s = l = void 0, o);
  }
  function E() {
    c !== void 0 && clearTimeout(c), C = 0, s = u = l = c = void 0;
  }
  function m() {
    return c === void 0 ? o : x(F());
  }
  function S() {
    var h = F(), y = a(h);
    if (s = arguments, l = this, u = h, y) {
      if (c === void 0)
        return w(u);
      if (i)
        return clearTimeout(c), c = setTimeout(d, e), f(u);
    }
    return c === void 0 && (c = setTimeout(d, e)), o;
  }
  return S.cancel = E, S.flush = m, S;
}
function Fe(t, e) {
  return he(t, e);
}
var le = {
  exports: {}
}, T = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae = v, Le = Symbol.for("react.element"), We = Symbol.for("react.fragment"), Ne = Object.prototype.hasOwnProperty, Me = Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, De = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function oe(t, e, r) {
  var s, l = {}, n = null, o = null;
  r !== void 0 && (n = "" + r), e.key !== void 0 && (n = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (s in e) Ne.call(e, s) && !De.hasOwnProperty(s) && (l[s] = e[s]);
  if (t && t.defaultProps) for (s in e = t.defaultProps, e) l[s] === void 0 && (l[s] = e[s]);
  return {
    $$typeof: Le,
    type: t,
    key: n,
    ref: o,
    props: l,
    _owner: Me.current
  };
}
T.Fragment = We;
T.jsx = oe;
T.jsxs = oe;
le.exports = T;
var _ = le.exports;
const {
  SvelteComponent: Ve,
  assign: J,
  binding_callbacks: X,
  check_outros: Ue,
  children: se,
  claim_element: ce,
  claim_space: Be,
  component_subscribe: Y,
  compute_slots: He,
  create_slot: qe,
  detach: R,
  element: ie,
  empty: K,
  exclude_internal_props: Q,
  get_all_dirty_from_scope: ze,
  get_slot_changes: Ge,
  group_outros: Je,
  init: Xe,
  insert_hydration: k,
  safe_not_equal: Ye,
  set_custom_element_data: ae,
  space: Ke,
  transition_in: O,
  transition_out: U,
  update_slot_base: Qe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ze,
  getContext: $e,
  onDestroy: et,
  setContext: tt
} = window.__gradio__svelte__internal;
function Z(t) {
  let e, r;
  const s = (
    /*#slots*/
    t[7].default
  ), l = qe(
    s,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = ie("svelte-slot"), l && l.c(), this.h();
    },
    l(n) {
      e = ce(n, "SVELTE-SLOT", {
        class: !0
      });
      var o = se(e);
      l && l.l(o), o.forEach(R), this.h();
    },
    h() {
      ae(e, "class", "svelte-1rt0kpf");
    },
    m(n, o) {
      k(n, e, o), l && l.m(e, null), t[9](e), r = !0;
    },
    p(n, o) {
      l && l.p && (!r || o & /*$$scope*/
      64) && Qe(
        l,
        s,
        n,
        /*$$scope*/
        n[6],
        r ? Ge(
          s,
          /*$$scope*/
          n[6],
          o,
          null
        ) : ze(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      r || (O(l, n), r = !0);
    },
    o(n) {
      U(l, n), r = !1;
    },
    d(n) {
      n && R(e), l && l.d(n), t[9](null);
    }
  };
}
function nt(t) {
  let e, r, s, l, n = (
    /*$$slots*/
    t[4].default && Z(t)
  );
  return {
    c() {
      e = ie("react-portal-target"), r = Ke(), n && n.c(), s = K(), this.h();
    },
    l(o) {
      e = ce(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), se(e).forEach(R), r = Be(o), n && n.l(o), s = K(), this.h();
    },
    h() {
      ae(e, "class", "svelte-1rt0kpf");
    },
    m(o, c) {
      k(o, e, c), t[8](e), k(o, r, c), n && n.m(o, c), k(o, s, c), l = !0;
    },
    p(o, [c]) {
      /*$$slots*/
      o[4].default ? n ? (n.p(o, c), c & /*$$slots*/
      16 && O(n, 1)) : (n = Z(o), n.c(), O(n, 1), n.m(s.parentNode, s)) : n && (Je(), U(n, 1, 1, () => {
        n = null;
      }), Ue());
    },
    i(o) {
      l || (O(n), l = !0);
    },
    o(o) {
      U(n), l = !1;
    },
    d(o) {
      o && (R(e), R(r), R(s)), t[8](null), n && n.d(o);
    }
  };
}
function $(t) {
  const {
    svelteInit: e,
    ...r
  } = t;
  return r;
}
function rt(t, e, r) {
  let s, l, {
    $$slots: n = {},
    $$scope: o
  } = e;
  const c = He(n);
  let {
    svelteInit: u
  } = e;
  const C = j($(e)), g = j();
  Y(t, g, (m) => r(0, s = m));
  const i = j();
  Y(t, i, (m) => r(1, l = m));
  const p = [], f = $e("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: b,
    subSlotIndex: a
  } = _e() || {}, d = u({
    parent: f,
    props: C,
    target: g,
    slot: i,
    slotKey: w,
    slotIndex: b,
    subSlotIndex: a,
    onDestroy(m) {
      p.push(m);
    }
  });
  tt("$$ms-gr-react-wrapper", d), Ze(() => {
    C.set($(e));
  }), et(() => {
    p.forEach((m) => m());
  });
  function x(m) {
    X[m ? "unshift" : "push"](() => {
      s = m, g.set(s);
    });
  }
  function E(m) {
    X[m ? "unshift" : "push"](() => {
      l = m, i.set(l);
    });
  }
  return t.$$set = (m) => {
    r(17, e = J(J({}, e), Q(m))), "svelteInit" in m && r(5, u = m.svelteInit), "$$scope" in m && r(6, o = m.$$scope);
  }, e = Q(e), [s, l, g, i, c, u, o, n, x, E];
}
class lt extends Ve {
  constructor(e) {
    super(), Xe(this, e, rt, nt, Ye, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: wt
} = window.__gradio__svelte__internal, ee = window.ms_globals.rerender, A = window.ms_globals.tree;
function ot(t, e = {}) {
  function r(s) {
    const l = j(), n = new lt({
      ...s,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const c = {
            key: window.ms_globals.autokey,
            svelteInstance: l,
            reactComponent: t,
            props: o.props,
            slot: o.slot,
            target: o.target,
            slotIndex: o.slotIndex,
            subSlotIndex: o.subSlotIndex,
            ignore: e.ignore,
            slotKey: o.slotKey,
            nodes: []
          }, u = o.parent ?? A;
          return u.nodes = [...u.nodes, c], ee({
            createPortal: M,
            node: A
          }), o.onDestroy(() => {
            u.nodes = u.nodes.filter((C) => C.svelteInstance !== l), ee({
              createPortal: M,
              node: A
            });
          }), c;
        },
        ...s.props
      }
    });
    return l.set(n), n;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(r);
    });
  });
}
const st = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ct(t) {
  return t ? Object.keys(t).reduce((e, r) => {
    const s = t[r];
    return e[r] = it(r, s), e;
  }, {}) : {};
}
function it(t, e) {
  return typeof e == "number" && !st.includes(t) ? e + "px" : e;
}
function B(t) {
  const e = [], r = t.cloneNode(!1);
  if (t._reactElement) {
    const l = v.Children.toArray(t._reactElement.props.children).map((n) => {
      if (v.isValidElement(n) && n.props.__slot__) {
        const {
          portals: o,
          clonedElement: c
        } = B(n.props.el);
        return v.cloneElement(n, {
          ...n.props,
          el: c,
          children: [...v.Children.toArray(n.props.children), ...o]
        });
      }
      return null;
    });
    return l.originalChildren = t._reactElement.props.children, e.push(M(v.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: l
    }), r)), {
      clonedElement: r,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((l) => {
    t.getEventListeners(l).forEach(({
      listener: o,
      type: c,
      useCapture: u
    }) => {
      r.addEventListener(c, o, u);
    });
  });
  const s = Array.from(t.childNodes);
  for (let l = 0; l < s.length; l++) {
    const n = s[l];
    if (n.nodeType === 1) {
      const {
        clonedElement: o,
        portals: c
      } = B(n);
      e.push(...c), r.appendChild(o);
    } else n.nodeType === 3 && r.appendChild(n.cloneNode());
  }
  return {
    clonedElement: r,
    portals: e
  };
}
function at(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const I = ne(({
  slot: t,
  clone: e,
  className: r,
  style: s,
  observeAttributes: l
}, n) => {
  const o = W(), [c, u] = re([]), {
    forceClone: C
  } = pe(), g = C ? !0 : e;
  return N(() => {
    var b;
    if (!o.current || !t)
      return;
    let i = t;
    function p() {
      let a = i;
      if (i.tagName.toLowerCase() === "svelte-slot" && i.children.length === 1 && i.children[0] && (a = i.children[0], a.tagName.toLowerCase() === "react-portal-target" && a.children[0] && (a = a.children[0])), at(n, a), r && a.classList.add(...r.split(" ")), s) {
        const d = ct(s);
        Object.keys(d).forEach((x) => {
          a.style[x] = d[x];
        });
      }
    }
    let f = null, w = null;
    if (g && window.MutationObserver) {
      let a = function() {
        var m, S, h;
        (m = o.current) != null && m.contains(i) && ((S = o.current) == null || S.removeChild(i));
        const {
          portals: x,
          clonedElement: E
        } = B(t);
        i = E, u(x), i.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          p();
        }, 50), (h = o.current) == null || h.appendChild(i);
      };
      a();
      const d = Te(() => {
        a(), f == null || f.disconnect(), f == null || f.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      f = new window.MutationObserver(d), f.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      i.style.display = "contents", p(), (b = o.current) == null || b.appendChild(i);
    return () => {
      var a, d;
      i.style.display = "", (a = o.current) != null && a.contains(i) && ((d = o.current) == null || d.removeChild(i)), f == null || f.disconnect();
    };
  }, [t, g, r, s, n, l, C]), v.createElement("react-child", {
    ref: o,
    style: {
      display: "contents"
    }
  }, ...c);
});
function ut(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function dt(t, e = !1) {
  try {
    if (ge(t))
      return t;
    if (e && !ut(t))
      return;
    if (typeof t == "string") {
      let r = t.trim();
      return r.startsWith(";") && (r = r.slice(1)), r.endsWith(";") && (r = r.slice(0, -1)), new Function(`return (...args) => (${r})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function L(t, e) {
  return H(() => dt(t, e), [t, e]);
}
function ft({
  value: t,
  onValueChange: e
}) {
  const [r, s] = re(t), l = W(e);
  l.current = e;
  const n = W(r);
  return n.current = r, N(() => {
    l.current(r);
  }, [r]), N(() => {
    Fe(t, n.current) || s(t);
  }, [t]), [r, s];
}
const mt = ({
  children: t,
  ...e
}) => /* @__PURE__ */ _.jsx(_.Fragment, {
  children: t(e)
});
function ue(t) {
  return v.createElement(mt, {
    children: t
  });
}
function de(t, e, r) {
  const s = t.filter(Boolean);
  if (s.length !== 0)
    return s.map((l, n) => {
      var C;
      if (typeof l != "object")
        return e != null && e.fallback ? e.fallback(l) : l;
      const o = {
        ...l.props,
        key: ((C = l.props) == null ? void 0 : C.key) ?? (r ? `${r}-${n}` : `${n}`)
      };
      let c = o;
      Object.keys(l.slots).forEach((g) => {
        if (!l.slots[g] || !(l.slots[g] instanceof Element) && !l.slots[g].el)
          return;
        const i = g.split(".");
        i.forEach((d, x) => {
          c[d] || (c[d] = {}), x !== i.length - 1 && (c = o[d]);
        });
        const p = l.slots[g];
        let f, w, b = (e == null ? void 0 : e.clone) ?? !1, a = e == null ? void 0 : e.forceClone;
        p instanceof Element ? f = p : (f = p.el, w = p.callback, b = p.clone ?? b, a = p.forceClone ?? a), a = a ?? !!w, c[i[i.length - 1]] = f ? w ? (...d) => (w(i[i.length - 1], d), /* @__PURE__ */ _.jsx(V, {
          ...l.ctx,
          params: d,
          forceClone: a,
          children: /* @__PURE__ */ _.jsx(I, {
            slot: f,
            clone: b
          })
        })) : ue((d) => /* @__PURE__ */ _.jsx(V, {
          ...l.ctx,
          forceClone: a,
          children: /* @__PURE__ */ _.jsx(I, {
            ...d,
            slot: f,
            clone: b
          })
        })) : c[i[i.length - 1]], c = o;
      });
      const u = (e == null ? void 0 : e.children) || "children";
      return l[u] ? o[u] = de(l[u], e, `${n}`) : e != null && e.children && (o[u] = void 0, Reflect.deleteProperty(o, u)), o;
    });
}
function te(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? ue((r) => /* @__PURE__ */ _.jsx(V, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ _.jsx(I, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...r
    })
  })) : /* @__PURE__ */ _.jsx(I, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function ht({
  key: t,
  slots: e,
  targets: r
}, s) {
  return e[t] ? (...l) => r ? r.map((n, o) => /* @__PURE__ */ _.jsx(v.Fragment, {
    children: te(n, {
      clone: !0,
      params: l,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }, o)) : /* @__PURE__ */ _.jsx(_.Fragment, {
    children: te(e[t], {
      clone: !0,
      params: l,
      forceClone: (s == null ? void 0 : s.forceClone) ?? !0
    })
  }) : void 0;
}
const {
  useItems: _t,
  withItemsContextProvider: gt,
  ItemHandler: xt
} = xe("antd-auto-complete-options"), pt = ne(({
  children: t,
  ...e
}, r) => /* @__PURE__ */ _.jsx(Ce.Provider, {
  value: H(() => ({
    ...e,
    elRef: r
  }), [e, r]),
  children: t
})), bt = ot(gt(["options", "default"], ({
  slots: t,
  children: e,
  onValueChange: r,
  filterOption: s,
  onChange: l,
  options: n,
  getPopupContainer: o,
  dropdownRender: c,
  elRef: u,
  setSlotParams: C,
  ...g
}) => {
  const i = L(o), p = L(s), f = L(c), [w, b] = ft({
    onValueChange: r,
    value: g.value
  }), {
    items: a
  } = _t(), d = a.options.length > 0 ? a.options : a.default;
  return /* @__PURE__ */ _.jsxs(_.Fragment, {
    children: [t.children ? null : /* @__PURE__ */ _.jsx("div", {
      style: {
        display: "none"
      },
      children: e
    }), /* @__PURE__ */ _.jsx(we, {
      ...g,
      value: w,
      ref: u,
      allowClear: t["allowClear.clearIcon"] ? {
        clearIcon: /* @__PURE__ */ _.jsx(I, {
          slot: t["allowClear.clearIcon"]
        })
      } : g.allowClear,
      options: H(() => n || de(d, {
        children: "options"
        // clone: true,
      }), [d, n]),
      onChange: (x, ...E) => {
        l == null || l(x, ...E), b(x);
      },
      notFoundContent: t.notFoundContent ? /* @__PURE__ */ _.jsx(I, {
        slot: t.notFoundContent
      }) : g.notFoundContent,
      filterOption: p || s,
      getPopupContainer: i,
      dropdownRender: t.dropdownRender ? ht({
        slots: t,
        key: "dropdownRender"
      }, {}) : f,
      children: t.children ? /* @__PURE__ */ _.jsxs(pt, {
        children: [/* @__PURE__ */ _.jsx("div", {
          style: {
            display: "none"
          },
          children: e
        }), /* @__PURE__ */ _.jsx(I, {
          slot: t.children
        })]
      }) : null
    })]
  });
}));
export {
  bt as AutoComplete,
  bt as default
};
