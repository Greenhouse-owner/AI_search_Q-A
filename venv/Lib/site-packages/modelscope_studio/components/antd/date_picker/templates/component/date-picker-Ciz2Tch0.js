import { i as Re, a as z, r as je, w as N, g as Pe, b as ke } from "./Index-CKbIaGXq.js";
const S = window.ms_globals.React, we = window.ms_globals.React.forwardRef, Ee = window.ms_globals.React.useRef, Ce = window.ms_globals.React.useState, Se = window.ms_globals.React.useEffect, E = window.ms_globals.React.useMemo, H = window.ms_globals.ReactDOM.createPortal, Oe = window.ms_globals.internalContext.useContextPropsContext, G = window.ms_globals.internalContext.ContextPropsProvider, Te = window.ms_globals.antd.DatePicker, Y = window.ms_globals.dayjs, Fe = window.ms_globals.createItemsContext.createItemsContext;
var De = /\s/;
function Le(e) {
  for (var t = e.length; t-- && De.test(e.charAt(t)); )
    ;
  return t;
}
var Ne = /^\s+/;
function Ae(e) {
  return e && e.slice(0, Le(e) + 1).replace(Ne, "");
}
var K = NaN, We = /^[-+]0x[0-9a-f]+$/i, Me = /^0b[01]+$/i, Ue = /^0o[0-7]+$/i, Ve = parseInt;
function Q(e) {
  if (typeof e == "number")
    return e;
  if (Re(e))
    return K;
  if (z(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = z(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ae(e);
  var l = Me.test(e);
  return l || Ue.test(e) ? Ve(e.slice(2), l ? 2 : 8) : We.test(e) ? K : +e;
}
var U = function() {
  return je.Date.now();
}, Be = "Expected a function", He = Math.max, ze = Math.min;
function Ge(e, t, l) {
  var s, o, n, r, i, f, h = 0, x = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Be);
  t = Q(t) || 0, z(l) && (x = !!l.leading, c = "maxWait" in l, n = c ? He(Q(l.maxWait) || 0, t) : n, g = "trailing" in l ? !!l.trailing : g);
  function d(p) {
    var w = s, P = o;
    return s = o = void 0, h = p, r = e.apply(P, w), r;
  }
  function v(p) {
    return h = p, i = setTimeout(m, t), x ? d(p) : r;
  }
  function b(p) {
    var w = p - f, P = p - h, D = t - w;
    return c ? ze(D, n - P) : D;
  }
  function u(p) {
    var w = p - f, P = p - h;
    return f === void 0 || w >= t || w < 0 || c && P >= n;
  }
  function m() {
    var p = U();
    if (u(p))
      return y(p);
    i = setTimeout(m, b(p));
  }
  function y(p) {
    return i = void 0, g && s ? d(p) : (s = o = void 0, r);
  }
  function j() {
    i !== void 0 && clearTimeout(i), h = 0, s = f = o = i = void 0;
  }
  function a() {
    return i === void 0 ? r : y(U());
  }
  function R() {
    var p = U(), w = u(p);
    if (s = arguments, o = this, f = p, w) {
      if (i === void 0)
        return v(f);
      if (c)
        return clearTimeout(i), i = setTimeout(m, t), d(f);
    }
    return i === void 0 && (i = setTimeout(m, t)), r;
  }
  return R.cancel = j, R.flush = a, R;
}
var ce = {
  exports: {}
}, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe = S, Je = Symbol.for("react.element"), Xe = Symbol.for("react.fragment"), Ye = Object.prototype.hasOwnProperty, Ke = qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qe = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ae(e, t, l) {
  var s, o = {}, n = null, r = null;
  l !== void 0 && (n = "" + l), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (s in t) Ye.call(t, s) && !Qe.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: Je,
    type: e,
    key: n,
    ref: r,
    props: o,
    _owner: Ke.current
  };
}
M.Fragment = Xe;
M.jsx = ae;
M.jsxs = ae;
ce.exports = M;
var _ = ce.exports;
const {
  SvelteComponent: Ze,
  assign: Z,
  binding_callbacks: $,
  check_outros: $e,
  children: ue,
  claim_element: fe,
  claim_space: et,
  component_subscribe: ee,
  compute_slots: tt,
  create_slot: nt,
  detach: T,
  element: de,
  empty: te,
  exclude_internal_props: ne,
  get_all_dirty_from_scope: rt,
  get_slot_changes: ot,
  group_outros: lt,
  init: st,
  insert_hydration: A,
  safe_not_equal: it,
  set_custom_element_data: me,
  space: ct,
  transition_in: W,
  transition_out: q,
  update_slot_base: at
} = window.__gradio__svelte__internal, {
  beforeUpdate: ut,
  getContext: ft,
  onDestroy: dt,
  setContext: mt
} = window.__gradio__svelte__internal;
function re(e) {
  let t, l;
  const s = (
    /*#slots*/
    e[7].default
  ), o = nt(
    s,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = de("svelte-slot"), o && o.c(), this.h();
    },
    l(n) {
      t = fe(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = ue(t);
      o && o.l(r), r.forEach(T), this.h();
    },
    h() {
      me(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      A(n, t, r), o && o.m(t, null), e[9](t), l = !0;
    },
    p(n, r) {
      o && o.p && (!l || r & /*$$scope*/
      64) && at(
        o,
        s,
        n,
        /*$$scope*/
        n[6],
        l ? ot(
          s,
          /*$$scope*/
          n[6],
          r,
          null
        ) : rt(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      l || (W(o, n), l = !0);
    },
    o(n) {
      q(o, n), l = !1;
    },
    d(n) {
      n && T(t), o && o.d(n), e[9](null);
    }
  };
}
function pt(e) {
  let t, l, s, o, n = (
    /*$$slots*/
    e[4].default && re(e)
  );
  return {
    c() {
      t = de("react-portal-target"), l = ct(), n && n.c(), s = te(), this.h();
    },
    l(r) {
      t = fe(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ue(t).forEach(T), l = et(r), n && n.l(r), s = te(), this.h();
    },
    h() {
      me(t, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      A(r, t, i), e[8](t), A(r, l, i), n && n.m(r, i), A(r, s, i), o = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && W(n, 1)) : (n = re(r), n.c(), W(n, 1), n.m(s.parentNode, s)) : n && (lt(), q(n, 1, 1, () => {
        n = null;
      }), $e());
    },
    i(r) {
      o || (W(n), o = !0);
    },
    o(r) {
      q(n), o = !1;
    },
    d(r) {
      r && (T(t), T(l), T(s)), e[8](null), n && n.d(r);
    }
  };
}
function oe(e) {
  const {
    svelteInit: t,
    ...l
  } = e;
  return l;
}
function _t(e, t, l) {
  let s, o, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const i = tt(n);
  let {
    svelteInit: f
  } = t;
  const h = N(oe(t)), x = N();
  ee(e, x, (a) => l(0, s = a));
  const c = N();
  ee(e, c, (a) => l(1, o = a));
  const g = [], d = ft("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: b,
    subSlotIndex: u
  } = Pe() || {}, m = f({
    parent: d,
    props: h,
    target: x,
    slot: c,
    slotKey: v,
    slotIndex: b,
    subSlotIndex: u,
    onDestroy(a) {
      g.push(a);
    }
  });
  mt("$$ms-gr-react-wrapper", m), ut(() => {
    h.set(oe(t));
  }), dt(() => {
    g.forEach((a) => a());
  });
  function y(a) {
    $[a ? "unshift" : "push"](() => {
      s = a, x.set(s);
    });
  }
  function j(a) {
    $[a ? "unshift" : "push"](() => {
      o = a, c.set(o);
    });
  }
  return e.$$set = (a) => {
    l(17, t = Z(Z({}, t), ne(a))), "svelteInit" in a && l(5, f = a.svelteInit), "$$scope" in a && l(6, r = a.$$scope);
  }, t = ne(t), [s, o, x, c, i, f, r, n, y, j];
}
class ht extends Ze {
  constructor(t) {
    super(), st(this, t, _t, pt, it, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: jt
} = window.__gradio__svelte__internal, le = window.ms_globals.rerender, V = window.ms_globals.tree;
function xt(e, t = {}) {
  function l(s) {
    const o = N(), n = new ht({
      ...s,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const i = {
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
          }, f = r.parent ?? V;
          return f.nodes = [...f.nodes, i], le({
            createPortal: H,
            node: V
          }), r.onDestroy(() => {
            f.nodes = f.nodes.filter((h) => h.svelteInstance !== o), le({
              createPortal: H,
              node: V
            });
          }), i;
        },
        ...s.props
      }
    });
    return o.set(n), n;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(l);
    });
  });
}
const gt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function vt(e) {
  return e ? Object.keys(e).reduce((t, l) => {
    const s = e[l];
    return t[l] = bt(l, s), t;
  }, {}) : {};
}
function bt(e, t) {
  return typeof t == "number" && !gt.includes(e) ? t + "px" : t;
}
function J(e) {
  const t = [], l = e.cloneNode(!1);
  if (e._reactElement) {
    const o = S.Children.toArray(e._reactElement.props.children).map((n) => {
      if (S.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = J(n.props.el);
        return S.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...S.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(H(S.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: o
    }), l)), {
      clonedElement: l,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((o) => {
    e.getEventListeners(o).forEach(({
      listener: r,
      type: i,
      useCapture: f
    }) => {
      l.addEventListener(i, r, f);
    });
  });
  const s = Array.from(e.childNodes);
  for (let o = 0; o < s.length; o++) {
    const n = s[o];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = J(n);
      t.push(...i), l.appendChild(r);
    } else n.nodeType === 3 && l.appendChild(n.cloneNode());
  }
  return {
    clonedElement: l,
    portals: t
  };
}
function yt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const I = we(({
  slot: e,
  clone: t,
  className: l,
  style: s,
  observeAttributes: o
}, n) => {
  const r = Ee(), [i, f] = Ce([]), {
    forceClone: h
  } = Oe(), x = h ? !0 : t;
  return Se(() => {
    var b;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let u = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (u = c.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), yt(n, u), l && u.classList.add(...l.split(" ")), s) {
        const m = vt(s);
        Object.keys(m).forEach((y) => {
          u.style[y] = m[y];
        });
      }
    }
    let d = null, v = null;
    if (x && window.MutationObserver) {
      let u = function() {
        var a, R, p;
        (a = r.current) != null && a.contains(c) && ((R = r.current) == null || R.removeChild(c));
        const {
          portals: y,
          clonedElement: j
        } = J(e);
        c = j, f(y), c.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          g();
        }, 50), (p = r.current) == null || p.appendChild(c);
      };
      u();
      const m = Ge(() => {
        u(), d == null || d.disconnect(), d == null || d.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      d = new window.MutationObserver(m), d.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", g(), (b = r.current) == null || b.appendChild(c);
    return () => {
      var u, m;
      c.style.display = "", (u = r.current) != null && u.contains(c) && ((m = r.current) == null || m.removeChild(c)), d == null || d.disconnect();
    };
  }, [e, x, l, s, n, o, h]), S.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
});
function It(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function wt(e, t = !1) {
  try {
    if (ke(e))
      return e;
    if (t && !It(e))
      return;
    if (typeof e == "string") {
      let l = e.trim();
      return l.startsWith(";") && (l = l.slice(1)), l.endsWith(";") && (l = l.slice(0, -1)), new Function(`return (...args) => (${l})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function F(e, t) {
  return E(() => wt(e, t), [e, t]);
}
const Et = ({
  children: e,
  ...t
}) => /* @__PURE__ */ _.jsx(_.Fragment, {
  children: e(t)
});
function pe(e) {
  return S.createElement(Et, {
    children: e
  });
}
function _e(e, t, l) {
  const s = e.filter(Boolean);
  if (s.length !== 0)
    return s.map((o, n) => {
      var h;
      if (typeof o != "object")
        return o;
      const r = {
        ...o.props,
        key: ((h = o.props) == null ? void 0 : h.key) ?? (l ? `${l}-${n}` : `${n}`)
      };
      let i = r;
      Object.keys(o.slots).forEach((x) => {
        if (!o.slots[x] || !(o.slots[x] instanceof Element) && !o.slots[x].el)
          return;
        const c = x.split(".");
        c.forEach((m, y) => {
          i[m] || (i[m] = {}), y !== c.length - 1 && (i = r[m]);
        });
        const g = o.slots[x];
        let d, v, b = !1, u = t == null ? void 0 : t.forceClone;
        g instanceof Element ? d = g : (d = g.el, v = g.callback, b = g.clone ?? b, u = g.forceClone ?? u), u = u ?? !!v, i[c[c.length - 1]] = d ? v ? (...m) => (v(c[c.length - 1], m), /* @__PURE__ */ _.jsx(G, {
          ...o.ctx,
          params: m,
          forceClone: u,
          children: /* @__PURE__ */ _.jsx(I, {
            slot: d,
            clone: b
          })
        })) : pe((m) => /* @__PURE__ */ _.jsx(G, {
          ...o.ctx,
          forceClone: u,
          children: /* @__PURE__ */ _.jsx(I, {
            ...m,
            slot: d,
            clone: b
          })
        })) : i[c[c.length - 1]], i = r;
      });
      const f = "children";
      return o[f] && (r[f] = _e(o[f], t, `${n}`)), r;
    });
}
function se(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? pe((l) => /* @__PURE__ */ _.jsx(G, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ _.jsx(I, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...l
    })
  })) : /* @__PURE__ */ _.jsx(I, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function B({
  key: e,
  slots: t,
  targets: l
}, s) {
  return t[e] ? (...o) => l ? l.map((n, r) => /* @__PURE__ */ _.jsx(S.Fragment, {
    children: se(n, {
      clone: !0,
      params: o,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ _.jsx(_.Fragment, {
    children: se(t[e], {
      clone: !0,
      params: o,
      forceClone: !0
    })
  }) : void 0;
}
const {
  withItemsContextProvider: Ct,
  useItems: St,
  ItemHandler: Pt
} = Fe("antd-date-picker-presets");
function C(e) {
  return Array.isArray(e) ? e.map((t) => C(t)) : Y(typeof e == "number" ? e * 1e3 : e);
}
function ie(e) {
  return Array.isArray(e) ? e.map((t) => t ? t.valueOf() / 1e3 : null) : typeof e == "object" && e !== null ? e.valueOf() / 1e3 : e;
}
const kt = xt(Ct(["presets"], ({
  slots: e,
  disabledDate: t,
  disabledTime: l,
  value: s,
  defaultValue: o,
  defaultPickerValue: n,
  pickerValue: r,
  showTime: i,
  presets: f,
  onChange: h,
  minDate: x,
  maxDate: c,
  cellRender: g,
  panelRender: d,
  getPopupContainer: v,
  onValueChange: b,
  onPanelChange: u,
  children: m,
  setSlotParams: y,
  elRef: j,
  ...a
}) => {
  const R = F(t), p = F(l), w = F(v), P = F(g), D = F(d), he = E(() => typeof i == "object" ? {
    ...i,
    defaultValue: i.defaultValue ? C(i.defaultValue) : void 0
  } : i, [i]), xe = E(() => s ? C(s) : void 0, [s]), ge = E(() => o ? C(o) : void 0, [o]), ve = E(() => n ? C(n) : void 0, [n]), be = E(() => r ? C(r) : void 0, [r]), ye = E(() => x ? C(x) : void 0, [x]), Ie = E(() => c ? C(c) : void 0, [c]), {
    items: {
      presets: X
    }
  } = St();
  return /* @__PURE__ */ _.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ _.jsx("div", {
      style: {
        display: "none"
      },
      children: m
    }), /* @__PURE__ */ _.jsx(Te, {
      ...a,
      ref: j,
      value: xe,
      defaultValue: ge,
      defaultPickerValue: ve,
      pickerValue: be,
      minDate: ye,
      maxDate: Ie,
      showTime: he,
      disabledDate: R,
      disabledTime: p,
      getPopupContainer: w,
      cellRender: e.cellRender ? B({
        slots: e,
        key: "cellRender"
      }) : P,
      panelRender: e.panelRender ? B({
        slots: e,
        key: "panelRender"
      }) : D,
      presets: E(() => {
        var k;
        return (k = f || _e(X)) == null ? void 0 : k.map((O) => ({
          ...O,
          value: C(O.value)
        }));
      }, [f, X]),
      onPanelChange: (k, ...O) => {
        const L = ie(k);
        u == null || u(L, ...O);
      },
      onChange: (k, ...O) => {
        const L = ie(k);
        h == null || h(L, ...O), b(L);
      },
      renderExtraFooter: e.renderExtraFooter ? B({
        slots: e,
        key: "renderExtraFooter"
      }) : a.renderExtraFooter,
      prevIcon: e.prevIcon ? /* @__PURE__ */ _.jsx(I, {
        slot: e.prevIcon
      }) : a.prevIcon,
      prefix: e.prefix ? /* @__PURE__ */ _.jsx(I, {
        slot: e.prefix
      }) : a.prefix,
      nextIcon: e.nextIcon ? /* @__PURE__ */ _.jsx(I, {
        slot: e.nextIcon
      }) : a.nextIcon,
      suffixIcon: e.suffixIcon ? /* @__PURE__ */ _.jsx(I, {
        slot: e.suffixIcon
      }) : a.suffixIcon,
      superNextIcon: e.superNextIcon ? /* @__PURE__ */ _.jsx(I, {
        slot: e.superNextIcon
      }) : a.superNextIcon,
      superPrevIcon: e.superPrevIcon ? /* @__PURE__ */ _.jsx(I, {
        slot: e.superPrevIcon
      }) : a.superPrevIcon,
      allowClear: e["allowClear.clearIcon"] ? {
        clearIcon: /* @__PURE__ */ _.jsx(I, {
          slot: e["allowClear.clearIcon"]
        })
      } : a.allowClear
    })]
  });
}));
export {
  kt as DatePicker,
  kt as default
};
