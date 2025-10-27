import { i as ce, a as M, r as ue, b as fe, w as O, g as de, c as me } from "./Index-BvSnd2cA.js";
const v = window.ms_globals.React, ae = window.ms_globals.React.forwardRef, N = window.ms_globals.React.useRef, ee = window.ms_globals.React.useState, W = window.ms_globals.React.useEffect, te = window.ms_globals.React.useMemo, B = window.ms_globals.ReactDOM.createPortal, _e = window.ms_globals.internalContext.useContextPropsContext, he = window.ms_globals.internalContext.ContextPropsProvider, pe = window.ms_globals.antd.Input;
var ge = /\s/;
function xe(e) {
  for (var t = e.length; t-- && ge.test(e.charAt(t)); )
    ;
  return t;
}
var we = /^\s+/;
function be(e) {
  return e && e.slice(0, xe(e) + 1).replace(we, "");
}
var q = NaN, ye = /^[-+]0x[0-9a-f]+$/i, ve = /^0b[01]+$/i, Ee = /^0o[0-7]+$/i, Ce = parseInt;
function z(e) {
  if (typeof e == "number")
    return e;
  if (ce(e))
    return q;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = be(e);
  var n = ve.test(e);
  return n || Ee.test(e) ? Ce(e.slice(2), n ? 2 : 8) : ye.test(e) ? q : +e;
}
var L = function() {
  return ue.Date.now();
}, Se = "Expected a function", Ie = Math.max, Re = Math.min;
function Pe(e, t, n) {
  var i, s, r, o, l, a, h = 0, g = !1, c = !1, x = !0;
  if (typeof e != "function")
    throw new TypeError(Se);
  t = z(t) || 0, M(n) && (g = !!n.leading, c = "maxWait" in n, r = c ? Ie(z(n.maxWait) || 0, t) : r, x = "trailing" in n ? !!n.trailing : x);
  function d(f) {
    var E = i, P = s;
    return i = s = void 0, h = f, o = e.apply(P, E), o;
  }
  function w(f) {
    return h = f, l = setTimeout(p, t), g ? d(f) : o;
  }
  function b(f) {
    var E = f - a, P = f - h, V = t - E;
    return c ? Re(V, r - P) : V;
  }
  function m(f) {
    var E = f - a, P = f - h;
    return a === void 0 || E >= t || E < 0 || c && P >= r;
  }
  function p() {
    var f = L();
    if (m(f))
      return y(f);
    l = setTimeout(p, b(f));
  }
  function y(f) {
    return l = void 0, x && i ? d(f) : (i = s = void 0, o);
  }
  function R() {
    l !== void 0 && clearTimeout(l), h = 0, i = a = s = l = void 0;
  }
  function u() {
    return l === void 0 ? o : y(L());
  }
  function S() {
    var f = L(), E = m(f);
    if (i = arguments, s = this, a = f, E) {
      if (l === void 0)
        return w(a);
      if (c)
        return clearTimeout(l), l = setTimeout(p, t), d(a);
    }
    return l === void 0 && (l = setTimeout(p, t)), o;
  }
  return S.cancel = R, S.flush = u, S;
}
function Te(e, t) {
  return fe(e, t);
}
var ne = {
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
var Oe = v, je = Symbol.for("react.element"), ke = Symbol.for("react.fragment"), Fe = Object.prototype.hasOwnProperty, Le = Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ae = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function re(e, t, n) {
  var i, s = {}, r = null, o = null;
  n !== void 0 && (r = "" + n), t.key !== void 0 && (r = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (i in t) Fe.call(t, i) && !Ae.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: je,
    type: e,
    key: r,
    ref: o,
    props: s,
    _owner: Le.current
  };
}
F.Fragment = ke;
F.jsx = re;
F.jsxs = re;
ne.exports = F;
var _ = ne.exports;
const {
  SvelteComponent: Ne,
  assign: G,
  binding_callbacks: H,
  check_outros: We,
  children: oe,
  claim_element: se,
  claim_space: Be,
  component_subscribe: K,
  compute_slots: Me,
  create_slot: De,
  detach: I,
  element: ie,
  empty: J,
  exclude_internal_props: X,
  get_all_dirty_from_scope: Ue,
  get_slot_changes: Ve,
  group_outros: qe,
  init: ze,
  insert_hydration: j,
  safe_not_equal: Ge,
  set_custom_element_data: le,
  space: He,
  transition_in: k,
  transition_out: D,
  update_slot_base: Ke
} = window.__gradio__svelte__internal, {
  beforeUpdate: Je,
  getContext: Xe,
  onDestroy: Ye,
  setContext: Qe
} = window.__gradio__svelte__internal;
function Y(e) {
  let t, n;
  const i = (
    /*#slots*/
    e[7].default
  ), s = De(
    i,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ie("svelte-slot"), s && s.c(), this.h();
    },
    l(r) {
      t = se(r, "SVELTE-SLOT", {
        class: !0
      });
      var o = oe(t);
      s && s.l(o), o.forEach(I), this.h();
    },
    h() {
      le(t, "class", "svelte-1rt0kpf");
    },
    m(r, o) {
      j(r, t, o), s && s.m(t, null), e[9](t), n = !0;
    },
    p(r, o) {
      s && s.p && (!n || o & /*$$scope*/
      64) && Ke(
        s,
        i,
        r,
        /*$$scope*/
        r[6],
        n ? Ve(
          i,
          /*$$scope*/
          r[6],
          o,
          null
        ) : Ue(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      n || (k(s, r), n = !0);
    },
    o(r) {
      D(s, r), n = !1;
    },
    d(r) {
      r && I(t), s && s.d(r), e[9](null);
    }
  };
}
function Ze(e) {
  let t, n, i, s, r = (
    /*$$slots*/
    e[4].default && Y(e)
  );
  return {
    c() {
      t = ie("react-portal-target"), n = He(), r && r.c(), i = J(), this.h();
    },
    l(o) {
      t = se(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), oe(t).forEach(I), n = Be(o), r && r.l(o), i = J(), this.h();
    },
    h() {
      le(t, "class", "svelte-1rt0kpf");
    },
    m(o, l) {
      j(o, t, l), e[8](t), j(o, n, l), r && r.m(o, l), j(o, i, l), s = !0;
    },
    p(o, [l]) {
      /*$$slots*/
      o[4].default ? r ? (r.p(o, l), l & /*$$slots*/
      16 && k(r, 1)) : (r = Y(o), r.c(), k(r, 1), r.m(i.parentNode, i)) : r && (qe(), D(r, 1, 1, () => {
        r = null;
      }), We());
    },
    i(o) {
      s || (k(r), s = !0);
    },
    o(o) {
      D(r), s = !1;
    },
    d(o) {
      o && (I(t), I(n), I(i)), e[8](null), r && r.d(o);
    }
  };
}
function Q(e) {
  const {
    svelteInit: t,
    ...n
  } = e;
  return n;
}
function $e(e, t, n) {
  let i, s, {
    $$slots: r = {},
    $$scope: o
  } = t;
  const l = Me(r);
  let {
    svelteInit: a
  } = t;
  const h = O(Q(t)), g = O();
  K(e, g, (u) => n(0, i = u));
  const c = O();
  K(e, c, (u) => n(1, s = u));
  const x = [], d = Xe("$$ms-gr-react-wrapper"), {
    slotKey: w,
    slotIndex: b,
    subSlotIndex: m
  } = de() || {}, p = a({
    parent: d,
    props: h,
    target: g,
    slot: c,
    slotKey: w,
    slotIndex: b,
    subSlotIndex: m,
    onDestroy(u) {
      x.push(u);
    }
  });
  Qe("$$ms-gr-react-wrapper", p), Je(() => {
    h.set(Q(t));
  }), Ye(() => {
    x.forEach((u) => u());
  });
  function y(u) {
    H[u ? "unshift" : "push"](() => {
      i = u, g.set(i);
    });
  }
  function R(u) {
    H[u ? "unshift" : "push"](() => {
      s = u, c.set(s);
    });
  }
  return e.$$set = (u) => {
    n(17, t = G(G({}, t), X(u))), "svelteInit" in u && n(5, a = u.svelteInit), "$$scope" in u && n(6, o = u.$$scope);
  }, t = X(t), [i, s, g, c, l, a, o, r, y, R];
}
class et extends Ne {
  constructor(t) {
    super(), ze(this, t, $e, Ze, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _t
} = window.__gradio__svelte__internal, Z = window.ms_globals.rerender, A = window.ms_globals.tree;
function tt(e, t = {}) {
  function n(i) {
    const s = O(), r = new et({
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
          }, a = o.parent ?? A;
          return a.nodes = [...a.nodes, l], Z({
            createPortal: B,
            node: A
          }), o.onDestroy(() => {
            a.nodes = a.nodes.filter((h) => h.svelteInstance !== s), Z({
              createPortal: B,
              node: A
            });
          }), l;
        },
        ...i.props
      }
    });
    return s.set(r), r;
  }
  return new Promise((i) => {
    window.ms_globals.initializePromise.then(() => {
      i(n);
    });
  });
}
const nt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function rt(e) {
  return e ? Object.keys(e).reduce((t, n) => {
    const i = e[n];
    return t[n] = ot(n, i), t;
  }, {}) : {};
}
function ot(e, t) {
  return typeof t == "number" && !nt.includes(e) ? t + "px" : t;
}
function U(e) {
  const t = [], n = e.cloneNode(!1);
  if (e._reactElement) {
    const s = v.Children.toArray(e._reactElement.props.children).map((r) => {
      if (v.isValidElement(r) && r.props.__slot__) {
        const {
          portals: o,
          clonedElement: l
        } = U(r.props.el);
        return v.cloneElement(r, {
          ...r.props,
          el: l,
          children: [...v.Children.toArray(r.props.children), ...o]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(B(v.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: s
    }), n)), {
      clonedElement: n,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((s) => {
    e.getEventListeners(s).forEach(({
      listener: o,
      type: l,
      useCapture: a
    }) => {
      n.addEventListener(l, o, a);
    });
  });
  const i = Array.from(e.childNodes);
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (r.nodeType === 1) {
      const {
        clonedElement: o,
        portals: l
      } = U(r);
      t.push(...l), n.appendChild(o);
    } else r.nodeType === 3 && n.appendChild(r.cloneNode());
  }
  return {
    clonedElement: n,
    portals: t
  };
}
function st(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const C = ae(({
  slot: e,
  clone: t,
  className: n,
  style: i,
  observeAttributes: s
}, r) => {
  const o = N(), [l, a] = ee([]), {
    forceClone: h
  } = _e(), g = h ? !0 : t;
  return W(() => {
    var b;
    if (!o.current || !e)
      return;
    let c = e;
    function x() {
      let m = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (m = c.children[0], m.tagName.toLowerCase() === "react-portal-target" && m.children[0] && (m = m.children[0])), st(r, m), n && m.classList.add(...n.split(" ")), i) {
        const p = rt(i);
        Object.keys(p).forEach((y) => {
          m.style[y] = p[y];
        });
      }
    }
    let d = null, w = null;
    if (g && window.MutationObserver) {
      let m = function() {
        var u, S, f;
        (u = o.current) != null && u.contains(c) && ((S = o.current) == null || S.removeChild(c));
        const {
          portals: y,
          clonedElement: R
        } = U(e);
        c = R, a(y), c.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          x();
        }, 50), (f = o.current) == null || f.appendChild(c);
      };
      m();
      const p = Pe(() => {
        m(), d == null || d.disconnect(), d == null || d.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      d = new window.MutationObserver(p), d.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", x(), (b = o.current) == null || b.appendChild(c);
    return () => {
      var m, p;
      c.style.display = "", (m = o.current) != null && m.contains(c) && ((p = o.current) == null || p.removeChild(c)), d == null || d.disconnect();
    };
  }, [e, g, n, i, r, s, h]), v.createElement("react-child", {
    ref: o,
    style: {
      display: "contents"
    }
  }, ...l);
});
function it(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function lt(e, t = !1) {
  try {
    if (me(e))
      return e;
    if (t && !it(e))
      return;
    if (typeof e == "string") {
      let n = e.trim();
      return n.startsWith(";") && (n = n.slice(1)), n.endsWith(";") && (n = n.slice(0, -1)), new Function(`return (...args) => (${n})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function T(e, t) {
  return te(() => lt(e, t), [e, t]);
}
function at({
  value: e,
  onValueChange: t
}) {
  const [n, i] = ee(e), s = N(t);
  s.current = t;
  const r = N(n);
  return r.current = n, W(() => {
    s.current(n);
  }, [n]), W(() => {
    Te(e, r.current) || i(e);
  }, [e]), [n, i];
}
function ct(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
const ut = ({
  children: e,
  ...t
}) => /* @__PURE__ */ _.jsx(_.Fragment, {
  children: e(t)
});
function ft(e) {
  return v.createElement(ut, {
    children: e
  });
}
function $(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? ft((n) => /* @__PURE__ */ _.jsx(he, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ _.jsx(C, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...n
    })
  })) : /* @__PURE__ */ _.jsx(C, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function dt({
  key: e,
  slots: t,
  targets: n
}, i) {
  return t[e] ? (...s) => n ? n.map((r, o) => /* @__PURE__ */ _.jsx(v.Fragment, {
    children: $(r, {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }, o)) : /* @__PURE__ */ _.jsx(_.Fragment, {
    children: $(t[e], {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }) : void 0;
}
const ht = tt(({
  slots: e,
  children: t,
  count: n,
  showCount: i,
  onValueChange: s,
  onChange: r,
  elRef: o,
  setSlotParams: l,
  ...a
}) => {
  const h = T(n == null ? void 0 : n.strategy), g = T(n == null ? void 0 : n.exceedFormatter), c = T(n == null ? void 0 : n.show), x = T(typeof i == "object" ? i.formatter : void 0), [d, w] = at({
    onValueChange: s,
    value: a.value
  });
  return /* @__PURE__ */ _.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ _.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ _.jsx(pe.Search, {
      ...a,
      value: d,
      ref: o,
      onChange: (b) => {
        r == null || r(b), w(b.target.value);
      },
      showCount: e["showCount.formatter"] ? {
        formatter: dt({
          slots: e,
          key: "showCount.formatter"
        })
      } : typeof i == "object" && x ? {
        ...i,
        formatter: x
      } : i,
      count: te(() => ct({
        ...n,
        exceedFormatter: g,
        strategy: h,
        show: c || (n == null ? void 0 : n.show)
      }), [n, g, h, c]),
      enterButton: e.enterButton ? /* @__PURE__ */ _.jsx(C, {
        slot: e.enterButton
      }) : a.enterButton,
      addonAfter: e.addonAfter ? /* @__PURE__ */ _.jsx(C, {
        slot: e.addonAfter
      }) : a.addonAfter,
      addonBefore: e.addonBefore ? /* @__PURE__ */ _.jsx(C, {
        slot: e.addonBefore
      }) : a.addonBefore,
      allowClear: e["allowClear.clearIcon"] ? {
        clearIcon: /* @__PURE__ */ _.jsx(C, {
          slot: e["allowClear.clearIcon"]
        })
      } : a.allowClear,
      prefix: e.prefix ? /* @__PURE__ */ _.jsx(C, {
        slot: e.prefix
      }) : a.prefix,
      suffix: e.suffix ? /* @__PURE__ */ _.jsx(C, {
        slot: e.suffix
      }) : a.suffix
    })]
  });
});
export {
  ht as InputSearch,
  ht as default
};
