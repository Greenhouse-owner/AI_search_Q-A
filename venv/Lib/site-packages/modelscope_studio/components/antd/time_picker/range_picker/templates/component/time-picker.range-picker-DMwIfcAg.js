import { i as ye, a as H, r as be, w as A, g as Ie, b as Ee } from "./Index-CqGpvZXI.js";
const R = window.ms_globals.React, xe = window.ms_globals.React.forwardRef, ge = window.ms_globals.React.useRef, ve = window.ms_globals.React.useState, we = window.ms_globals.React.useEffect, j = window.ms_globals.React.useMemo, G = window.ms_globals.ReactDOM.createPortal, Ce = window.ms_globals.internalContext.useContextPropsContext, Re = window.ms_globals.internalContext.ContextPropsProvider, Se = window.ms_globals.antd.TimePicker, J = window.ms_globals.dayjs;
var Pe = /\s/;
function Te(e) {
  for (var t = e.length; t-- && Pe.test(e.charAt(t)); )
    ;
  return t;
}
var je = /^\s+/;
function Oe(e) {
  return e && e.slice(0, Te(e) + 1).replace(je, "");
}
var X = NaN, ke = /^[-+]0x[0-9a-f]+$/i, Fe = /^0b[01]+$/i, Le = /^0o[0-7]+$/i, Ne = parseInt;
function Y(e) {
  if (typeof e == "number")
    return e;
  if (ye(e))
    return X;
  if (H(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = H(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Oe(e);
  var o = Fe.test(e);
  return o || Le.test(e) ? Ne(e.slice(2), o ? 2 : 8) : ke.test(e) ? X : +e;
}
var U = function() {
  return be.Date.now();
}, Ae = "Expected a function", De = Math.max, We = Math.min;
function Me(e, t, o) {
  var s, i, n, r, l, u, p = 0, v = !1, c = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(Ae);
  t = Y(t) || 0, H(o) && (v = !!o.leading, c = "maxWait" in o, n = c ? De(Y(o.maxWait) || 0, t) : n, w = "trailing" in o ? !!o.trailing : w);
  function _(d) {
    var E = s, T = i;
    return s = i = void 0, p = d, r = e.apply(T, E), r;
  }
  function y(d) {
    return p = d, l = setTimeout(h, t), v ? _(d) : r;
  }
  function I(d) {
    var E = d - u, T = d - p, N = t - E;
    return c ? We(N, n - T) : N;
  }
  function f(d) {
    var E = d - u, T = d - p;
    return u === void 0 || E >= t || E < 0 || c && T >= n;
  }
  function h() {
    var d = U();
    if (f(d))
      return b(d);
    l = setTimeout(h, I(d));
  }
  function b(d) {
    return l = void 0, w && s ? _(d) : (s = i = void 0, r);
  }
  function x() {
    l !== void 0 && clearTimeout(l), p = 0, s = u = i = l = void 0;
  }
  function a() {
    return l === void 0 ? r : b(U());
  }
  function S() {
    var d = U(), E = f(d);
    if (s = arguments, i = this, u = d, E) {
      if (l === void 0)
        return y(u);
      if (c)
        return clearTimeout(l), l = setTimeout(h, t), _(u);
    }
    return l === void 0 && (l = setTimeout(h, t)), r;
  }
  return S.cancel = x, S.flush = a, S;
}
var se = {
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
var Ue = R, ze = Symbol.for("react.element"), Be = Symbol.for("react.fragment"), Ge = Object.prototype.hasOwnProperty, He = Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ke = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function le(e, t, o) {
  var s, i = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (s in t) Ge.call(t, s) && !Ke.hasOwnProperty(s) && (i[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) i[s] === void 0 && (i[s] = t[s]);
  return {
    $$typeof: ze,
    type: e,
    key: n,
    ref: r,
    props: i,
    _owner: He.current
  };
}
M.Fragment = Be;
M.jsx = le;
M.jsxs = le;
se.exports = M;
var m = se.exports;
const {
  SvelteComponent: qe,
  assign: Q,
  binding_callbacks: Z,
  check_outros: Je,
  children: ce,
  claim_element: ae,
  claim_space: Xe,
  component_subscribe: V,
  compute_slots: Ye,
  create_slot: Qe,
  detach: k,
  element: ue,
  empty: $,
  exclude_internal_props: ee,
  get_all_dirty_from_scope: Ze,
  get_slot_changes: Ve,
  group_outros: $e,
  init: et,
  insert_hydration: D,
  safe_not_equal: tt,
  set_custom_element_data: de,
  space: nt,
  transition_in: W,
  transition_out: K,
  update_slot_base: rt
} = window.__gradio__svelte__internal, {
  beforeUpdate: ot,
  getContext: it,
  onDestroy: st,
  setContext: lt
} = window.__gradio__svelte__internal;
function te(e) {
  let t, o;
  const s = (
    /*#slots*/
    e[7].default
  ), i = Qe(
    s,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ue("svelte-slot"), i && i.c(), this.h();
    },
    l(n) {
      t = ae(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = ce(t);
      i && i.l(r), r.forEach(k), this.h();
    },
    h() {
      de(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      D(n, t, r), i && i.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      i && i.p && (!o || r & /*$$scope*/
      64) && rt(
        i,
        s,
        n,
        /*$$scope*/
        n[6],
        o ? Ve(
          s,
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
      o || (W(i, n), o = !0);
    },
    o(n) {
      K(i, n), o = !1;
    },
    d(n) {
      n && k(t), i && i.d(n), e[9](null);
    }
  };
}
function ct(e) {
  let t, o, s, i, n = (
    /*$$slots*/
    e[4].default && te(e)
  );
  return {
    c() {
      t = ue("react-portal-target"), o = nt(), n && n.c(), s = $(), this.h();
    },
    l(r) {
      t = ae(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ce(t).forEach(k), o = Xe(r), n && n.l(r), s = $(), this.h();
    },
    h() {
      de(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      D(r, t, l), e[8](t), D(r, o, l), n && n.m(r, l), D(r, s, l), i = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && W(n, 1)) : (n = te(r), n.c(), W(n, 1), n.m(s.parentNode, s)) : n && ($e(), K(n, 1, 1, () => {
        n = null;
      }), Je());
    },
    i(r) {
      i || (W(n), i = !0);
    },
    o(r) {
      K(n), i = !1;
    },
    d(r) {
      r && (k(t), k(o), k(s)), e[8](null), n && n.d(r);
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
function at(e, t, o) {
  let s, i, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Ye(n);
  let {
    svelteInit: u
  } = t;
  const p = A(ne(t)), v = A();
  V(e, v, (a) => o(0, s = a));
  const c = A();
  V(e, c, (a) => o(1, i = a));
  const w = [], _ = it("$$ms-gr-react-wrapper"), {
    slotKey: y,
    slotIndex: I,
    subSlotIndex: f
  } = Ie() || {}, h = u({
    parent: _,
    props: p,
    target: v,
    slot: c,
    slotKey: y,
    slotIndex: I,
    subSlotIndex: f,
    onDestroy(a) {
      w.push(a);
    }
  });
  lt("$$ms-gr-react-wrapper", h), ot(() => {
    p.set(ne(t));
  }), st(() => {
    w.forEach((a) => a());
  });
  function b(a) {
    Z[a ? "unshift" : "push"](() => {
      s = a, v.set(s);
    });
  }
  function x(a) {
    Z[a ? "unshift" : "push"](() => {
      i = a, c.set(i);
    });
  }
  return e.$$set = (a) => {
    o(17, t = Q(Q({}, t), ee(a))), "svelteInit" in a && o(5, u = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = ee(t), [s, i, v, c, l, u, r, n, b, x];
}
class ut extends qe {
  constructor(t) {
    super(), et(this, t, at, ct, tt, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: yt
} = window.__gradio__svelte__internal, re = window.ms_globals.rerender, z = window.ms_globals.tree;
function dt(e, t = {}) {
  function o(s) {
    const i = A(), n = new ut({
      ...s,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const l = {
            key: window.ms_globals.autokey,
            svelteInstance: i,
            reactComponent: e,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: t.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, u = r.parent ?? z;
          return u.nodes = [...u.nodes, l], re({
            createPortal: G,
            node: z
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((p) => p.svelteInstance !== i), re({
              createPortal: G,
              node: z
            });
          }), l;
        },
        ...s.props
      }
    });
    return i.set(n), n;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(o);
    });
  });
}
const ft = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function mt(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const s = e[o];
    return t[o] = _t(o, s), t;
  }, {}) : {};
}
function _t(e, t) {
  return typeof t == "number" && !ft.includes(e) ? t + "px" : t;
}
function q(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const i = R.Children.toArray(e._reactElement.props.children).map((n) => {
      if (R.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = q(n.props.el);
        return R.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...R.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return i.originalChildren = e._reactElement.props.children, t.push(G(R.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: i
    }), o)), {
      clonedElement: o,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((i) => {
    e.getEventListeners(i).forEach(({
      listener: r,
      type: l,
      useCapture: u
    }) => {
      o.addEventListener(l, r, u);
    });
  });
  const s = Array.from(e.childNodes);
  for (let i = 0; i < s.length; i++) {
    const n = s[i];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: l
      } = q(n);
      t.push(...l), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function pt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const C = xe(({
  slot: e,
  clone: t,
  className: o,
  style: s,
  observeAttributes: i
}, n) => {
  const r = ge(), [l, u] = ve([]), {
    forceClone: p
  } = Ce(), v = p ? !0 : t;
  return we(() => {
    var I;
    if (!r.current || !e)
      return;
    let c = e;
    function w() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), pt(n, f), o && f.classList.add(...o.split(" ")), s) {
        const h = mt(s);
        Object.keys(h).forEach((b) => {
          f.style[b] = h[b];
        });
      }
    }
    let _ = null, y = null;
    if (v && window.MutationObserver) {
      let f = function() {
        var a, S, d;
        (a = r.current) != null && a.contains(c) && ((S = r.current) == null || S.removeChild(c));
        const {
          portals: b,
          clonedElement: x
        } = q(e);
        c = x, u(b), c.style.display = "contents", y && clearTimeout(y), y = setTimeout(() => {
          w();
        }, 50), (d = r.current) == null || d.appendChild(c);
      };
      f();
      const h = Me(() => {
        f(), _ == null || _.disconnect(), _ == null || _.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      _ = new window.MutationObserver(h), _.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", w(), (I = r.current) == null || I.appendChild(c);
    return () => {
      var f, h;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((h = r.current) == null || h.removeChild(c)), _ == null || _.disconnect();
    };
  }, [e, v, o, s, n, i, p]), R.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
});
function ht(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function xt(e, t = !1) {
  try {
    if (Ee(e))
      return e;
    if (t && !ht(e))
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
function L(e, t) {
  return j(() => xt(e, t), [e, t]);
}
const gt = ({
  children: e,
  ...t
}) => /* @__PURE__ */ m.jsx(m.Fragment, {
  children: e(t)
});
function vt(e) {
  return R.createElement(gt, {
    children: e
  });
}
function oe(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? vt((o) => /* @__PURE__ */ m.jsx(Re, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ m.jsx(C, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...o
    })
  })) : /* @__PURE__ */ m.jsx(C, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function ie({
  key: e,
  slots: t,
  targets: o
}, s) {
  return t[e] ? (...i) => o ? o.map((n, r) => /* @__PURE__ */ m.jsx(R.Fragment, {
    children: oe(n, {
      clone: !0,
      params: i,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ m.jsx(m.Fragment, {
    children: oe(t[e], {
      clone: !0,
      params: i,
      forceClone: !0
    })
  }) : void 0;
}
function P(e) {
  return J(typeof e == "number" ? e * 1e3 : e);
}
function B(e) {
  return (e == null ? void 0 : e.map((t) => t ? t.valueOf() / 1e3 : null)) || [null, null];
}
const bt = dt(({
  slots: e,
  disabledDate: t,
  disabledTime: o,
  value: s,
  defaultValue: i,
  defaultPickerValue: n,
  pickerValue: r,
  onChange: l,
  minDate: u,
  maxDate: p,
  cellRender: v,
  panelRender: c,
  getPopupContainer: w,
  onValueChange: _,
  onPanelChange: y,
  onCalendarChange: I,
  children: f,
  setSlotParams: h,
  elRef: b,
  ...x
}) => {
  const a = L(t), S = L(w), d = L(v), E = L(c), T = L(o), N = j(() => s == null ? void 0 : s.map((g) => P(g)), [s]), fe = j(() => i == null ? void 0 : i.map((g) => P(g)), [i]), me = j(() => Array.isArray(n) ? n.map((g) => P(g)) : n ? P(n) : void 0, [n]), _e = j(() => Array.isArray(r) ? r.map((g) => P(g)) : r ? P(r) : void 0, [r]), pe = j(() => u ? P(u) : void 0, [u]), he = j(() => p ? P(p) : void 0, [p]);
  return /* @__PURE__ */ m.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ m.jsx("div", {
      style: {
        display: "none"
      },
      children: f
    }), /* @__PURE__ */ m.jsx(Se.RangePicker, {
      ...x,
      ref: b,
      value: N,
      disabledTime: T,
      defaultValue: fe,
      defaultPickerValue: me,
      pickerValue: _e,
      minDate: pe,
      maxDate: he,
      disabledDate: a,
      getPopupContainer: S,
      cellRender: e.cellRender ? ie({
        slots: e,
        key: "cellRender"
      }) : d,
      panelRender: e.panelRender ? ie({
        slots: e,
        key: "panelRender"
      }) : E,
      onPanelChange: (g, ...F) => {
        const O = B(g);
        y == null || y(O, ...F);
      },
      onChange: (g, ...F) => {
        const O = B(g);
        l == null || l(O, ...F), _(O);
      },
      onCalendarChange: (g, ...F) => {
        const O = B(g);
        I == null || I(O, ...F);
      },
      renderExtraFooter: e.renderExtraFooter ? () => e.renderExtraFooter ? /* @__PURE__ */ m.jsx(C, {
        slot: e.renderExtraFooter
      }) : null : x.renderExtraFooter,
      prevIcon: e.prevIcon ? /* @__PURE__ */ m.jsx(C, {
        slot: e.prevIcon
      }) : x.prevIcon,
      nextIcon: e.nextIcon ? /* @__PURE__ */ m.jsx(C, {
        slot: e.nextIcon
      }) : x.nextIcon,
      suffixIcon: e.suffixIcon ? /* @__PURE__ */ m.jsx(C, {
        slot: e.suffixIcon
      }) : x.suffixIcon,
      superNextIcon: e.superNextIcon ? /* @__PURE__ */ m.jsx(C, {
        slot: e.superNextIcon
      }) : x.superNextIcon,
      superPrevIcon: e.superPrevIcon ? /* @__PURE__ */ m.jsx(C, {
        slot: e.superPrevIcon
      }) : x.superPrevIcon,
      allowClear: e["allowClear.clearIcon"] ? {
        clearIcon: /* @__PURE__ */ m.jsx(C, {
          slot: e["allowClear.clearIcon"]
        })
      } : x.allowClear,
      separator: e.separator ? /* @__PURE__ */ m.jsx(C, {
        slot: e.separator
      }) : x.separator
    })]
  });
});
export {
  bt as TimeRangePicker,
  bt as default
};
