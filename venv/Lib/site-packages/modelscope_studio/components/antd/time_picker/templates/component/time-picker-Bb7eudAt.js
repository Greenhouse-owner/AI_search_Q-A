import { i as ye, a as H, r as be, w as A, g as Ie, b as Ee } from "./Index-D5LZHY4D.js";
const C = window.ms_globals.React, xe = window.ms_globals.React.forwardRef, ve = window.ms_globals.React.useRef, ge = window.ms_globals.React.useState, we = window.ms_globals.React.useEffect, P = window.ms_globals.React.useMemo, G = window.ms_globals.ReactDOM.createPortal, Ce = window.ms_globals.internalContext.useContextPropsContext, Re = window.ms_globals.internalContext.ContextPropsProvider, Se = window.ms_globals.antd.TimePicker, q = window.ms_globals.dayjs;
var Pe = /\s/;
function Te(e) {
  for (var t = e.length; t-- && Pe.test(e.charAt(t)); )
    ;
  return t;
}
var je = /^\s+/;
function ke(e) {
  return e && e.slice(0, Te(e) + 1).replace(je, "");
}
var J = NaN, Oe = /^[-+]0x[0-9a-f]+$/i, Fe = /^0b[01]+$/i, Le = /^0o[0-7]+$/i, Ne = parseInt;
function X(e) {
  if (typeof e == "number")
    return e;
  if (ye(e))
    return J;
  if (H(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = H(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ke(e);
  var o = Fe.test(e);
  return o || Le.test(e) ? Ne(e.slice(2), o ? 2 : 8) : Oe.test(e) ? J : +e;
}
var U = function() {
  return be.Date.now();
}, Ae = "Expected a function", De = Math.max, We = Math.min;
function Me(e, t, o) {
  var l, i, n, r, s, u, p = 0, v = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Ae);
  t = X(t) || 0, H(o) && (v = !!o.leading, c = "maxWait" in o, n = c ? De(X(o.maxWait) || 0, t) : n, g = "trailing" in o ? !!o.trailing : g);
  function m(d) {
    var I = l, S = i;
    return l = i = void 0, p = d, r = e.apply(S, I), r;
  }
  function w(d) {
    return p = d, s = setTimeout(h, t), v ? m(d) : r;
  }
  function b(d) {
    var I = d - u, S = d - p, N = t - I;
    return c ? We(N, n - S) : N;
  }
  function f(d) {
    var I = d - u, S = d - p;
    return u === void 0 || I >= t || I < 0 || c && S >= n;
  }
  function h() {
    var d = U();
    if (f(d))
      return y(d);
    s = setTimeout(h, b(d));
  }
  function y(d) {
    return s = void 0, g && l ? m(d) : (l = i = void 0, r);
  }
  function x() {
    s !== void 0 && clearTimeout(s), p = 0, l = u = i = s = void 0;
  }
  function a() {
    return s === void 0 ? r : y(U());
  }
  function R() {
    var d = U(), I = f(d);
    if (l = arguments, i = this, u = d, I) {
      if (s === void 0)
        return w(u);
      if (c)
        return clearTimeout(s), s = setTimeout(h, t), m(u);
    }
    return s === void 0 && (s = setTimeout(h, t)), r;
  }
  return R.cancel = x, R.flush = a, R;
}
var le = {
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
var Ue = C, ze = Symbol.for("react.element"), Be = Symbol.for("react.fragment"), Ge = Object.prototype.hasOwnProperty, He = Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ke = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function se(e, t, o) {
  var l, i = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (l in t) Ge.call(t, l) && !Ke.hasOwnProperty(l) && (i[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) i[l] === void 0 && (i[l] = t[l]);
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
M.jsx = se;
M.jsxs = se;
le.exports = M;
var _ = le.exports;
const {
  SvelteComponent: Ve,
  assign: Y,
  binding_callbacks: Q,
  check_outros: qe,
  children: ce,
  claim_element: ae,
  claim_space: Je,
  component_subscribe: Z,
  compute_slots: Xe,
  create_slot: Ye,
  detach: k,
  element: ue,
  empty: $,
  exclude_internal_props: ee,
  get_all_dirty_from_scope: Qe,
  get_slot_changes: Ze,
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
  onDestroy: lt,
  setContext: st
} = window.__gradio__svelte__internal;
function te(e) {
  let t, o;
  const l = (
    /*#slots*/
    e[7].default
  ), i = Ye(
    l,
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
        l,
        n,
        /*$$scope*/
        n[6],
        o ? Ze(
          l,
          /*$$scope*/
          n[6],
          r,
          null
        ) : Qe(
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
  let t, o, l, i, n = (
    /*$$slots*/
    e[4].default && te(e)
  );
  return {
    c() {
      t = ue("react-portal-target"), o = nt(), n && n.c(), l = $(), this.h();
    },
    l(r) {
      t = ae(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ce(t).forEach(k), o = Je(r), n && n.l(r), l = $(), this.h();
    },
    h() {
      de(t, "class", "svelte-1rt0kpf");
    },
    m(r, s) {
      D(r, t, s), e[8](t), D(r, o, s), n && n.m(r, s), D(r, l, s), i = !0;
    },
    p(r, [s]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, s), s & /*$$slots*/
      16 && W(n, 1)) : (n = te(r), n.c(), W(n, 1), n.m(l.parentNode, l)) : n && ($e(), K(n, 1, 1, () => {
        n = null;
      }), qe());
    },
    i(r) {
      i || (W(n), i = !0);
    },
    o(r) {
      K(n), i = !1;
    },
    d(r) {
      r && (k(t), k(o), k(l)), e[8](null), n && n.d(r);
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
  let l, i, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const s = Xe(n);
  let {
    svelteInit: u
  } = t;
  const p = A(ne(t)), v = A();
  Z(e, v, (a) => o(0, l = a));
  const c = A();
  Z(e, c, (a) => o(1, i = a));
  const g = [], m = it("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: b,
    subSlotIndex: f
  } = Ie() || {}, h = u({
    parent: m,
    props: p,
    target: v,
    slot: c,
    slotKey: w,
    slotIndex: b,
    subSlotIndex: f,
    onDestroy(a) {
      g.push(a);
    }
  });
  st("$$ms-gr-react-wrapper", h), ot(() => {
    p.set(ne(t));
  }), lt(() => {
    g.forEach((a) => a());
  });
  function y(a) {
    Q[a ? "unshift" : "push"](() => {
      l = a, v.set(l);
    });
  }
  function x(a) {
    Q[a ? "unshift" : "push"](() => {
      i = a, c.set(i);
    });
  }
  return e.$$set = (a) => {
    o(17, t = Y(Y({}, t), ee(a))), "svelteInit" in a && o(5, u = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = ee(t), [l, i, v, c, s, u, r, n, y, x];
}
class ut extends Ve {
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
  function o(l) {
    const i = A(), n = new ut({
      ...l,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const s = {
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
          return u.nodes = [...u.nodes, s], re({
            createPortal: G,
            node: z
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((p) => p.svelteInstance !== i), re({
              createPortal: G,
              node: z
            });
          }), s;
        },
        ...l.props
      }
    });
    return i.set(n), n;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(o);
    });
  });
}
const ft = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function mt(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const l = e[o];
    return t[o] = _t(o, l), t;
  }, {}) : {};
}
function _t(e, t) {
  return typeof t == "number" && !ft.includes(e) ? t + "px" : t;
}
function V(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const i = C.Children.toArray(e._reactElement.props.children).map((n) => {
      if (C.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: s
        } = V(n.props.el);
        return C.cloneElement(n, {
          ...n.props,
          el: s,
          children: [...C.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return i.originalChildren = e._reactElement.props.children, t.push(G(C.cloneElement(e._reactElement, {
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
      type: s,
      useCapture: u
    }) => {
      o.addEventListener(s, r, u);
    });
  });
  const l = Array.from(e.childNodes);
  for (let i = 0; i < l.length; i++) {
    const n = l[i];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: s
      } = V(n);
      t.push(...s), o.appendChild(r);
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
const E = xe(({
  slot: e,
  clone: t,
  className: o,
  style: l,
  observeAttributes: i
}, n) => {
  const r = ve(), [s, u] = ge([]), {
    forceClone: p
  } = Ce(), v = p ? !0 : t;
  return we(() => {
    var b;
    if (!r.current || !e)
      return;
    let c = e;
    function g() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), pt(n, f), o && f.classList.add(...o.split(" ")), l) {
        const h = mt(l);
        Object.keys(h).forEach((y) => {
          f.style[y] = h[y];
        });
      }
    }
    let m = null, w = null;
    if (v && window.MutationObserver) {
      let f = function() {
        var a, R, d;
        (a = r.current) != null && a.contains(c) && ((R = r.current) == null || R.removeChild(c));
        const {
          portals: y,
          clonedElement: x
        } = V(e);
        c = x, u(y), c.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          g();
        }, 50), (d = r.current) == null || d.appendChild(c);
      };
      f();
      const h = Me(() => {
        f(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(h), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", g(), (b = r.current) == null || b.appendChild(c);
    return () => {
      var f, h;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((h = r.current) == null || h.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, v, o, l, n, i, p]), C.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...s);
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
  return P(() => xt(e, t), [e, t]);
}
const vt = ({
  children: e,
  ...t
}) => /* @__PURE__ */ _.jsx(_.Fragment, {
  children: e(t)
});
function gt(e) {
  return C.createElement(vt, {
    children: e
  });
}
function oe(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? gt((o) => /* @__PURE__ */ _.jsx(Re, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ _.jsx(E, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...o
    })
  })) : /* @__PURE__ */ _.jsx(E, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function ie({
  key: e,
  slots: t,
  targets: o
}, l) {
  return t[e] ? (...i) => o ? o.map((n, r) => /* @__PURE__ */ _.jsx(C.Fragment, {
    children: oe(n, {
      clone: !0,
      params: i,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ _.jsx(_.Fragment, {
    children: oe(t[e], {
      clone: !0,
      params: i,
      forceClone: !0
    })
  }) : void 0;
}
function T(e) {
  return Array.isArray(e) ? e.map((t) => T(t)) : q(typeof e == "number" ? e * 1e3 : e);
}
function B(e) {
  return Array.isArray(e) ? e.map((t) => t ? t.valueOf() / 1e3 : null) : typeof e == "object" && e !== null ? e.valueOf() / 1e3 : e;
}
const bt = dt(({
  slots: e,
  disabledDate: t,
  disabledTime: o,
  value: l,
  defaultValue: i,
  defaultPickerValue: n,
  pickerValue: r,
  onChange: s,
  minDate: u,
  maxDate: p,
  cellRender: v,
  panelRender: c,
  getPopupContainer: g,
  onValueChange: m,
  onPanelChange: w,
  onCalendarChange: b,
  children: f,
  setSlotParams: h,
  elRef: y,
  ...x
}) => {
  const a = L(t), R = L(o), d = L(g), I = L(v), S = L(c), N = P(() => l ? T(l) : void 0, [l]), fe = P(() => i ? T(i) : void 0, [i]), me = P(() => n ? T(n) : void 0, [n]), _e = P(() => r ? T(r) : void 0, [r]), pe = P(() => u ? T(u) : void 0, [u]), he = P(() => p ? T(p) : void 0, [p]);
  return /* @__PURE__ */ _.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ _.jsx("div", {
      style: {
        display: "none"
      },
      children: f
    }), /* @__PURE__ */ _.jsx(Se, {
      ...x,
      ref: y,
      value: N,
      defaultValue: fe,
      defaultPickerValue: me,
      pickerValue: _e,
      minDate: pe,
      maxDate: he,
      disabledTime: R,
      disabledDate: a,
      getPopupContainer: d,
      cellRender: e.cellRender ? ie({
        slots: e,
        key: "cellRender"
      }) : I,
      panelRender: e.panelRender ? ie({
        slots: e,
        key: "panelRender"
      }) : S,
      onPanelChange: (O, ...F) => {
        const j = B(O);
        w == null || w(j, ...F);
      },
      onChange: (O, ...F) => {
        const j = B(O);
        s == null || s(j, ...F), m(j);
      },
      onCalendarChange: (O, ...F) => {
        const j = B(O);
        b == null || b(j, ...F);
      },
      renderExtraFooter: e.renderExtraFooter ? () => e.renderExtraFooter ? /* @__PURE__ */ _.jsx(E, {
        slot: e.renderExtraFooter
      }) : null : x.renderExtraFooter,
      prevIcon: e.prevIcon ? /* @__PURE__ */ _.jsx(E, {
        slot: e.prevIcon
      }) : x.prevIcon,
      nextIcon: e.nextIcon ? /* @__PURE__ */ _.jsx(E, {
        slot: e.nextIcon
      }) : x.nextIcon,
      suffixIcon: e.suffixIcon ? /* @__PURE__ */ _.jsx(E, {
        slot: e.suffixIcon
      }) : x.suffixIcon,
      superNextIcon: e.superNextIcon ? /* @__PURE__ */ _.jsx(E, {
        slot: e.superNextIcon
      }) : x.superNextIcon,
      superPrevIcon: e.superPrevIcon ? /* @__PURE__ */ _.jsx(E, {
        slot: e.superPrevIcon
      }) : x.superPrevIcon,
      allowClear: e["allowClear.clearIcon"] ? {
        clearIcon: /* @__PURE__ */ _.jsx(E, {
          slot: e["allowClear.clearIcon"]
        })
      } : x.allowClear
    })]
  });
});
export {
  bt as TimePicker,
  bt as default
};
