import { i as Re, a as q, r as Se, w as A, g as je, b as Pe } from "./Index-C1d56clI.js";
const j = window.ms_globals.React, Ie = window.ms_globals.React.forwardRef, ye = window.ms_globals.React.useRef, Ee = window.ms_globals.React.useState, Ce = window.ms_globals.React.useEffect, S = window.ms_globals.React.useMemo, G = window.ms_globals.ReactDOM.createPortal, ke = window.ms_globals.internalContext.useContextPropsContext, J = window.ms_globals.internalContext.ContextPropsProvider, Oe = window.ms_globals.antd.DatePicker, Q = window.ms_globals.dayjs, Te = window.ms_globals.createItemsContext.createItemsContext;
var Fe = /\s/;
function De(e) {
  for (var t = e.length; t-- && Fe.test(e.charAt(t)); )
    ;
  return t;
}
var Le = /^\s+/;
function Ne(e) {
  return e && e.slice(0, De(e) + 1).replace(Le, "");
}
var Z = NaN, Ae = /^[-+]0x[0-9a-f]+$/i, We = /^0b[01]+$/i, Me = /^0o[0-7]+$/i, Ue = parseInt;
function V(e) {
  if (typeof e == "number")
    return e;
  if (Re(e))
    return Z;
  if (q(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = q(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ne(e);
  var s = We.test(e);
  return s || Me.test(e) ? Ue(e.slice(2), s ? 2 : 8) : Ae.test(e) ? Z : +e;
}
var B = function() {
  return Se.Date.now();
}, Be = "Expected a function", He = Math.max, ze = Math.min;
function Ge(e, t, s) {
  var l, o, n, r, i, f, h = 0, x = !1, c = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Be);
  t = V(t) || 0, q(s) && (x = !!s.leading, c = "maxWait" in s, n = c ? He(V(s.maxWait) || 0, t) : n, v = "trailing" in s ? !!s.trailing : v);
  function d(p) {
    var E = l, O = o;
    return l = o = void 0, h = p, r = e.apply(O, E), r;
  }
  function w(p) {
    return h = p, i = setTimeout(m, t), x ? d(p) : r;
  }
  function b(p) {
    var E = p - f, O = p - h, D = t - E;
    return c ? ze(D, n - O) : D;
  }
  function u(p) {
    var E = p - f, O = p - h;
    return f === void 0 || E >= t || E < 0 || c && O >= n;
  }
  function m() {
    var p = B();
    if (u(p))
      return I(p);
    i = setTimeout(m, b(p));
  }
  function I(p) {
    return i = void 0, v && l ? d(p) : (l = o = void 0, r);
  }
  function k() {
    i !== void 0 && clearTimeout(i), h = 0, l = f = o = i = void 0;
  }
  function a() {
    return i === void 0 ? r : I(B());
  }
  function P() {
    var p = B(), E = u(p);
    if (l = arguments, o = this, f = p, E) {
      if (i === void 0)
        return w(f);
      if (c)
        return clearTimeout(i), i = setTimeout(m, t), d(f);
    }
    return i === void 0 && (i = setTimeout(m, t)), r;
  }
  return P.cancel = k, P.flush = a, P;
}
var ce = {
  exports: {}
}, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe = j, Je = Symbol.for("react.element"), Xe = Symbol.for("react.fragment"), Ye = Object.prototype.hasOwnProperty, Ke = qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qe = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ae(e, t, s) {
  var l, o = {}, n = null, r = null;
  s !== void 0 && (n = "" + s), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (l in t) Ye.call(t, l) && !Qe.hasOwnProperty(l) && (o[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) o[l] === void 0 && (o[l] = t[l]);
  return {
    $$typeof: Je,
    type: e,
    key: n,
    ref: r,
    props: o,
    _owner: Ke.current
  };
}
U.Fragment = Xe;
U.jsx = ae;
U.jsxs = ae;
ce.exports = U;
var _ = ce.exports;
const {
  SvelteComponent: Ze,
  assign: $,
  binding_callbacks: ee,
  check_outros: Ve,
  children: ue,
  claim_element: fe,
  claim_space: $e,
  component_subscribe: te,
  compute_slots: et,
  create_slot: tt,
  detach: F,
  element: de,
  empty: ne,
  exclude_internal_props: re,
  get_all_dirty_from_scope: nt,
  get_slot_changes: rt,
  group_outros: ot,
  init: st,
  insert_hydration: W,
  safe_not_equal: lt,
  set_custom_element_data: me,
  space: it,
  transition_in: M,
  transition_out: X,
  update_slot_base: ct
} = window.__gradio__svelte__internal, {
  beforeUpdate: at,
  getContext: ut,
  onDestroy: ft,
  setContext: dt
} = window.__gradio__svelte__internal;
function oe(e) {
  let t, s;
  const l = (
    /*#slots*/
    e[7].default
  ), o = tt(
    l,
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
      o && o.l(r), r.forEach(F), this.h();
    },
    h() {
      me(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      W(n, t, r), o && o.m(t, null), e[9](t), s = !0;
    },
    p(n, r) {
      o && o.p && (!s || r & /*$$scope*/
      64) && ct(
        o,
        l,
        n,
        /*$$scope*/
        n[6],
        s ? rt(
          l,
          /*$$scope*/
          n[6],
          r,
          null
        ) : nt(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      s || (M(o, n), s = !0);
    },
    o(n) {
      X(o, n), s = !1;
    },
    d(n) {
      n && F(t), o && o.d(n), e[9](null);
    }
  };
}
function mt(e) {
  let t, s, l, o, n = (
    /*$$slots*/
    e[4].default && oe(e)
  );
  return {
    c() {
      t = de("react-portal-target"), s = it(), n && n.c(), l = ne(), this.h();
    },
    l(r) {
      t = fe(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ue(t).forEach(F), s = $e(r), n && n.l(r), l = ne(), this.h();
    },
    h() {
      me(t, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      W(r, t, i), e[8](t), W(r, s, i), n && n.m(r, i), W(r, l, i), o = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && M(n, 1)) : (n = oe(r), n.c(), M(n, 1), n.m(l.parentNode, l)) : n && (ot(), X(n, 1, 1, () => {
        n = null;
      }), Ve());
    },
    i(r) {
      o || (M(n), o = !0);
    },
    o(r) {
      X(n), o = !1;
    },
    d(r) {
      r && (F(t), F(s), F(l)), e[8](null), n && n.d(r);
    }
  };
}
function se(e) {
  const {
    svelteInit: t,
    ...s
  } = e;
  return s;
}
function pt(e, t, s) {
  let l, o, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const i = et(n);
  let {
    svelteInit: f
  } = t;
  const h = A(se(t)), x = A();
  te(e, x, (a) => s(0, l = a));
  const c = A();
  te(e, c, (a) => s(1, o = a));
  const v = [], d = ut("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: b,
    subSlotIndex: u
  } = je() || {}, m = f({
    parent: d,
    props: h,
    target: x,
    slot: c,
    slotKey: w,
    slotIndex: b,
    subSlotIndex: u,
    onDestroy(a) {
      v.push(a);
    }
  });
  dt("$$ms-gr-react-wrapper", m), at(() => {
    h.set(se(t));
  }), ft(() => {
    v.forEach((a) => a());
  });
  function I(a) {
    ee[a ? "unshift" : "push"](() => {
      l = a, x.set(l);
    });
  }
  function k(a) {
    ee[a ? "unshift" : "push"](() => {
      o = a, c.set(o);
    });
  }
  return e.$$set = (a) => {
    s(17, t = $($({}, t), re(a))), "svelteInit" in a && s(5, f = a.svelteInit), "$$scope" in a && s(6, r = a.$$scope);
  }, t = re(t), [l, o, x, c, i, f, r, n, I, k];
}
class _t extends Ze {
  constructor(t) {
    super(), st(this, t, pt, mt, lt, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: St
} = window.__gradio__svelte__internal, le = window.ms_globals.rerender, H = window.ms_globals.tree;
function ht(e, t = {}) {
  function s(l) {
    const o = A(), n = new _t({
      ...l,
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
          }, f = r.parent ?? H;
          return f.nodes = [...f.nodes, i], le({
            createPortal: G,
            node: H
          }), r.onDestroy(() => {
            f.nodes = f.nodes.filter((h) => h.svelteInstance !== o), le({
              createPortal: G,
              node: H
            });
          }), i;
        },
        ...l.props
      }
    });
    return o.set(n), n;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(s);
    });
  });
}
const xt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function gt(e) {
  return e ? Object.keys(e).reduce((t, s) => {
    const l = e[s];
    return t[s] = vt(s, l), t;
  }, {}) : {};
}
function vt(e, t) {
  return typeof t == "number" && !xt.includes(e) ? t + "px" : t;
}
function Y(e) {
  const t = [], s = e.cloneNode(!1);
  if (e._reactElement) {
    const o = j.Children.toArray(e._reactElement.props.children).map((n) => {
      if (j.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = Y(n.props.el);
        return j.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...j.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(G(j.cloneElement(e._reactElement, {
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
      type: i,
      useCapture: f
    }) => {
      s.addEventListener(i, r, f);
    });
  });
  const l = Array.from(e.childNodes);
  for (let o = 0; o < l.length; o++) {
    const n = l[o];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = Y(n);
      t.push(...i), s.appendChild(r);
    } else n.nodeType === 3 && s.appendChild(n.cloneNode());
  }
  return {
    clonedElement: s,
    portals: t
  };
}
function bt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const y = Ie(({
  slot: e,
  clone: t,
  className: s,
  style: l,
  observeAttributes: o
}, n) => {
  const r = ye(), [i, f] = Ee([]), {
    forceClone: h
  } = ke(), x = h ? !0 : t;
  return Ce(() => {
    var b;
    if (!r.current || !e)
      return;
    let c = e;
    function v() {
      let u = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (u = c.children[0], u.tagName.toLowerCase() === "react-portal-target" && u.children[0] && (u = u.children[0])), bt(n, u), s && u.classList.add(...s.split(" ")), l) {
        const m = gt(l);
        Object.keys(m).forEach((I) => {
          u.style[I] = m[I];
        });
      }
    }
    let d = null, w = null;
    if (x && window.MutationObserver) {
      let u = function() {
        var a, P, p;
        (a = r.current) != null && a.contains(c) && ((P = r.current) == null || P.removeChild(c));
        const {
          portals: I,
          clonedElement: k
        } = Y(e);
        c = k, f(I), c.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          v();
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
      c.style.display = "contents", v(), (b = r.current) == null || b.appendChild(c);
    return () => {
      var u, m;
      c.style.display = "", (u = r.current) != null && u.contains(c) && ((m = r.current) == null || m.removeChild(c)), d == null || d.disconnect();
    };
  }, [e, x, s, l, n, o, h]), j.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
});
function wt(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function It(e, t = !1) {
  try {
    if (Pe(e))
      return e;
    if (t && !wt(e))
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
function L(e, t) {
  return S(() => It(e, t), [e, t]);
}
const yt = ({
  children: e,
  ...t
}) => /* @__PURE__ */ _.jsx(_.Fragment, {
  children: e(t)
});
function pe(e) {
  return j.createElement(yt, {
    children: e
  });
}
function _e(e, t, s) {
  const l = e.filter(Boolean);
  if (l.length !== 0)
    return l.map((o, n) => {
      var h;
      if (typeof o != "object")
        return o;
      const r = {
        ...o.props,
        key: ((h = o.props) == null ? void 0 : h.key) ?? (s ? `${s}-${n}` : `${n}`)
      };
      let i = r;
      Object.keys(o.slots).forEach((x) => {
        if (!o.slots[x] || !(o.slots[x] instanceof Element) && !o.slots[x].el)
          return;
        const c = x.split(".");
        c.forEach((m, I) => {
          i[m] || (i[m] = {}), I !== c.length - 1 && (i = r[m]);
        });
        const v = o.slots[x];
        let d, w, b = !1, u = t == null ? void 0 : t.forceClone;
        v instanceof Element ? d = v : (d = v.el, w = v.callback, b = v.clone ?? b, u = v.forceClone ?? u), u = u ?? !!w, i[c[c.length - 1]] = d ? w ? (...m) => (w(c[c.length - 1], m), /* @__PURE__ */ _.jsx(J, {
          ...o.ctx,
          params: m,
          forceClone: u,
          children: /* @__PURE__ */ _.jsx(y, {
            slot: d,
            clone: b
          })
        })) : pe((m) => /* @__PURE__ */ _.jsx(J, {
          ...o.ctx,
          forceClone: u,
          children: /* @__PURE__ */ _.jsx(y, {
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
function ie(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? pe((s) => /* @__PURE__ */ _.jsx(J, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ _.jsx(y, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...s
    })
  })) : /* @__PURE__ */ _.jsx(y, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function z({
  key: e,
  slots: t,
  targets: s
}, l) {
  return t[e] ? (...o) => s ? s.map((n, r) => /* @__PURE__ */ _.jsx(j.Fragment, {
    children: ie(n, {
      clone: !0,
      params: o,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ _.jsx(_.Fragment, {
    children: ie(t[e], {
      clone: !0,
      params: o,
      forceClone: !0
    })
  }) : void 0;
}
const {
  withItemsContextProvider: Et,
  useItems: Ct,
  ItemHandler: jt
} = Te("antd-date-picker-presets");
function R(e) {
  return Q(typeof e == "number" ? e * 1e3 : e);
}
function N(e) {
  return (e == null ? void 0 : e.map((t) => t ? t.valueOf() / 1e3 : null)) || [null, null];
}
const Pt = ht(Et(["presets"], ({
  slots: e,
  disabledDate: t,
  value: s,
  defaultValue: l,
  defaultPickerValue: o,
  pickerValue: n,
  presets: r,
  showTime: i,
  onChange: f,
  minDate: h,
  maxDate: x,
  cellRender: c,
  panelRender: v,
  getPopupContainer: d,
  onValueChange: w,
  onPanelChange: b,
  onCalendarChange: u,
  children: m,
  setSlotParams: I,
  elRef: k,
  ...a
}) => {
  const P = L(t), p = L(d), E = L(c), O = L(v), D = S(() => {
    var g;
    return typeof i == "object" ? {
      ...i,
      defaultValue: (g = i.defaultValue) == null ? void 0 : g.map((C) => R(C))
    } : i;
  }, [i]), he = S(() => s == null ? void 0 : s.map((g) => R(g)), [s]), xe = S(() => l == null ? void 0 : l.map((g) => R(g)), [l]), ge = S(() => Array.isArray(o) ? o.map((g) => R(g)) : o ? R(o) : void 0, [o]), ve = S(() => Array.isArray(n) ? n.map((g) => R(g)) : n ? R(n) : void 0, [n]), be = S(() => h ? R(h) : void 0, [h]), we = S(() => x ? R(x) : void 0, [x]), {
    items: {
      presets: K
    }
  } = Ct();
  return /* @__PURE__ */ _.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ _.jsx("div", {
      style: {
        display: "none"
      },
      children: m
    }), /* @__PURE__ */ _.jsx(Oe.RangePicker, {
      ...a,
      ref: k,
      value: he,
      defaultValue: xe,
      defaultPickerValue: ge,
      pickerValue: ve,
      minDate: be,
      maxDate: we,
      showTime: D,
      disabledDate: P,
      getPopupContainer: p,
      cellRender: e.cellRender ? z({
        slots: e,
        key: "cellRender"
      }) : E,
      panelRender: e.panelRender ? z({
        slots: e,
        key: "panelRender"
      }) : O,
      presets: S(() => {
        var g;
        return (g = r || _e(K)) == null ? void 0 : g.map((C) => ({
          ...C,
          value: N(C.value)
        }));
      }, [r, K]),
      onPanelChange: (g, ...C) => {
        const T = N(g);
        b == null || b(T, ...C);
      },
      onChange: (g, ...C) => {
        const T = N(g);
        f == null || f(T, ...C), w(T);
      },
      onCalendarChange: (g, ...C) => {
        const T = N(g);
        u == null || u(T, ...C);
      },
      renderExtraFooter: e.renderExtraFooter ? z({
        slots: e,
        key: "renderExtraFooter"
      }) : a.renderExtraFooter,
      prefix: e.prefix ? /* @__PURE__ */ _.jsx(y, {
        slot: e.prefix
      }) : a.prefix,
      prevIcon: e.prevIcon ? /* @__PURE__ */ _.jsx(y, {
        slot: e.prevIcon
      }) : a.prevIcon,
      nextIcon: e.nextIcon ? /* @__PURE__ */ _.jsx(y, {
        slot: e.nextIcon
      }) : a.nextIcon,
      suffixIcon: e.suffixIcon ? /* @__PURE__ */ _.jsx(y, {
        slot: e.suffixIcon
      }) : a.suffixIcon,
      superNextIcon: e.superNextIcon ? /* @__PURE__ */ _.jsx(y, {
        slot: e.superNextIcon
      }) : a.superNextIcon,
      superPrevIcon: e.superPrevIcon ? /* @__PURE__ */ _.jsx(y, {
        slot: e.superPrevIcon
      }) : a.superPrevIcon,
      allowClear: e["allowClear.clearIcon"] ? {
        clearIcon: /* @__PURE__ */ _.jsx(y, {
          slot: e["allowClear.clearIcon"]
        })
      } : a.allowClear,
      separator: e.separator ? /* @__PURE__ */ _.jsx(y, {
        slot: e.separator,
        clone: !0
      }) : a.separator
    })]
  });
}));
export {
  Pt as DateRangePicker,
  Pt as default
};
