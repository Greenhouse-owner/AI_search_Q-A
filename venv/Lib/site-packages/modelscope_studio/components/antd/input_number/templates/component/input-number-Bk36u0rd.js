import { i as ce, a as M, r as ae, b as ue, w as O, g as de, c as fe } from "./Index-GhcXJnp1.js";
const E = window.ms_globals.React, ie = window.ms_globals.React.forwardRef, N = window.ms_globals.React.useRef, $ = window.ms_globals.React.useState, F = window.ms_globals.React.useEffect, le = window.ms_globals.React.useMemo, W = window.ms_globals.ReactDOM.createPortal, me = window.ms_globals.internalContext.useContextPropsContext, _e = window.ms_globals.antd.InputNumber;
var pe = /\s/;
function he(e) {
  for (var t = e.length; t-- && pe.test(e.charAt(t)); )
    ;
  return t;
}
var ge = /^\s+/;
function we(e) {
  return e && e.slice(0, he(e) + 1).replace(ge, "");
}
var U = NaN, be = /^[-+]0x[0-9a-f]+$/i, xe = /^0b[01]+$/i, ye = /^0o[0-7]+$/i, Ee = parseInt;
function q(e) {
  if (typeof e == "number")
    return e;
  if (ce(e))
    return U;
  if (M(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = M(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = we(e);
  var r = xe.test(e);
  return r || ye.test(e) ? Ee(e.slice(2), r ? 2 : 8) : be.test(e) ? U : +e;
}
var L = function() {
  return ae.Date.now();
}, ve = "Expected a function", Ie = Math.max, Ce = Math.min;
function Se(e, t, r) {
  var i, s, n, o, l, u, _ = 0, h = !1, c = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ve);
  t = q(t) || 0, M(r) && (h = !!r.leading, c = "maxWait" in r, n = c ? Ie(q(r.maxWait) || 0, t) : n, g = "trailing" in r ? !!r.trailing : g);
  function m(d) {
    var x = i, T = s;
    return i = s = void 0, _ = d, o = e.apply(T, x), o;
  }
  function y(d) {
    return _ = d, l = setTimeout(p, t), h ? m(d) : o;
  }
  function v(d) {
    var x = d - u, T = d - _, V = t - x;
    return c ? Ce(V, n - T) : V;
  }
  function f(d) {
    var x = d - u, T = d - _;
    return u === void 0 || x >= t || x < 0 || c && T >= n;
  }
  function p() {
    var d = L();
    if (f(d))
      return b(d);
    l = setTimeout(p, v(d));
  }
  function b(d) {
    return l = void 0, g && i ? m(d) : (i = s = void 0, o);
  }
  function R() {
    l !== void 0 && clearTimeout(l), _ = 0, i = u = s = l = void 0;
  }
  function a() {
    return l === void 0 ? o : b(L());
  }
  function I() {
    var d = L(), x = f(d);
    if (i = arguments, s = this, u = d, x) {
      if (l === void 0)
        return y(u);
      if (c)
        return clearTimeout(l), l = setTimeout(p, t), m(u);
    }
    return l === void 0 && (l = setTimeout(p, t)), o;
  }
  return I.cancel = R, I.flush = a, I;
}
function Re(e, t) {
  return ue(e, t);
}
var ee = {
  exports: {}
}, P = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te = E, Oe = Symbol.for("react.element"), ke = Symbol.for("react.fragment"), je = Object.prototype.hasOwnProperty, Pe = Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function te(e, t, r) {
  var i, s = {}, n = null, o = null;
  r !== void 0 && (n = "" + r), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (i in t) je.call(t, i) && !Le.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: Oe,
    type: e,
    key: n,
    ref: o,
    props: s,
    _owner: Pe.current
  };
}
P.Fragment = ke;
P.jsx = te;
P.jsxs = te;
ee.exports = P;
var w = ee.exports;
const {
  SvelteComponent: Ae,
  assign: z,
  binding_callbacks: G,
  check_outros: Ne,
  children: ne,
  claim_element: re,
  claim_space: Fe,
  component_subscribe: H,
  compute_slots: We,
  create_slot: Me,
  detach: S,
  element: oe,
  empty: K,
  exclude_internal_props: J,
  get_all_dirty_from_scope: Be,
  get_slot_changes: De,
  group_outros: Ve,
  init: Ue,
  insert_hydration: k,
  safe_not_equal: qe,
  set_custom_element_data: se,
  space: ze,
  transition_in: j,
  transition_out: B,
  update_slot_base: Ge
} = window.__gradio__svelte__internal, {
  beforeUpdate: He,
  getContext: Ke,
  onDestroy: Je,
  setContext: Xe
} = window.__gradio__svelte__internal;
function X(e) {
  let t, r;
  const i = (
    /*#slots*/
    e[7].default
  ), s = Me(
    i,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = oe("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      t = re(n, "SVELTE-SLOT", {
        class: !0
      });
      var o = ne(t);
      s && s.l(o), o.forEach(S), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(n, o) {
      k(n, t, o), s && s.m(t, null), e[9](t), r = !0;
    },
    p(n, o) {
      s && s.p && (!r || o & /*$$scope*/
      64) && Ge(
        s,
        i,
        n,
        /*$$scope*/
        n[6],
        r ? De(
          i,
          /*$$scope*/
          n[6],
          o,
          null
        ) : Be(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      r || (j(s, n), r = !0);
    },
    o(n) {
      B(s, n), r = !1;
    },
    d(n) {
      n && S(t), s && s.d(n), e[9](null);
    }
  };
}
function Ye(e) {
  let t, r, i, s, n = (
    /*$$slots*/
    e[4].default && X(e)
  );
  return {
    c() {
      t = oe("react-portal-target"), r = ze(), n && n.c(), i = K(), this.h();
    },
    l(o) {
      t = re(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), ne(t).forEach(S), r = Fe(o), n && n.l(o), i = K(), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(o, l) {
      k(o, t, l), e[8](t), k(o, r, l), n && n.m(o, l), k(o, i, l), s = !0;
    },
    p(o, [l]) {
      /*$$slots*/
      o[4].default ? n ? (n.p(o, l), l & /*$$slots*/
      16 && j(n, 1)) : (n = X(o), n.c(), j(n, 1), n.m(i.parentNode, i)) : n && (Ve(), B(n, 1, 1, () => {
        n = null;
      }), Ne());
    },
    i(o) {
      s || (j(n), s = !0);
    },
    o(o) {
      B(n), s = !1;
    },
    d(o) {
      o && (S(t), S(r), S(i)), e[8](null), n && n.d(o);
    }
  };
}
function Y(e) {
  const {
    svelteInit: t,
    ...r
  } = e;
  return r;
}
function Qe(e, t, r) {
  let i, s, {
    $$slots: n = {},
    $$scope: o
  } = t;
  const l = We(n);
  let {
    svelteInit: u
  } = t;
  const _ = O(Y(t)), h = O();
  H(e, h, (a) => r(0, i = a));
  const c = O();
  H(e, c, (a) => r(1, s = a));
  const g = [], m = Ke("$$ms-gr-react-wrapper"), {
    slotKey: y,
    slotIndex: v,
    subSlotIndex: f
  } = de() || {}, p = u({
    parent: m,
    props: _,
    target: h,
    slot: c,
    slotKey: y,
    slotIndex: v,
    subSlotIndex: f,
    onDestroy(a) {
      g.push(a);
    }
  });
  Xe("$$ms-gr-react-wrapper", p), He(() => {
    _.set(Y(t));
  }), Je(() => {
    g.forEach((a) => a());
  });
  function b(a) {
    G[a ? "unshift" : "push"](() => {
      i = a, h.set(i);
    });
  }
  function R(a) {
    G[a ? "unshift" : "push"](() => {
      s = a, c.set(s);
    });
  }
  return e.$$set = (a) => {
    r(17, t = z(z({}, t), J(a))), "svelteInit" in a && r(5, u = a.svelteInit), "$$scope" in a && r(6, o = a.$$scope);
  }, t = J(t), [i, s, h, c, l, u, o, n, b, R];
}
class Ze extends Ae {
  constructor(t) {
    super(), Ue(this, t, Qe, Ye, qe, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ct
} = window.__gradio__svelte__internal, Q = window.ms_globals.rerender, A = window.ms_globals.tree;
function $e(e, t = {}) {
  function r(i) {
    const s = O(), n = new Ze({
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
          }, u = o.parent ?? A;
          return u.nodes = [...u.nodes, l], Q({
            createPortal: W,
            node: A
          }), o.onDestroy(() => {
            u.nodes = u.nodes.filter((_) => _.svelteInstance !== s), Q({
              createPortal: W,
              node: A
            });
          }), l;
        },
        ...i.props
      }
    });
    return s.set(n), n;
  }
  return new Promise((i) => {
    window.ms_globals.initializePromise.then(() => {
      i(r);
    });
  });
}
const et = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function tt(e) {
  return e ? Object.keys(e).reduce((t, r) => {
    const i = e[r];
    return t[r] = nt(r, i), t;
  }, {}) : {};
}
function nt(e, t) {
  return typeof t == "number" && !et.includes(e) ? t + "px" : t;
}
function D(e) {
  const t = [], r = e.cloneNode(!1);
  if (e._reactElement) {
    const s = E.Children.toArray(e._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: o,
          clonedElement: l
        } = D(n.props.el);
        return E.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...E.Children.toArray(n.props.children), ...o]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(W(E.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: s
    }), r)), {
      clonedElement: r,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((s) => {
    e.getEventListeners(s).forEach(({
      listener: o,
      type: l,
      useCapture: u
    }) => {
      r.addEventListener(l, o, u);
    });
  });
  const i = Array.from(e.childNodes);
  for (let s = 0; s < i.length; s++) {
    const n = i[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: o,
        portals: l
      } = D(n);
      t.push(...l), r.appendChild(o);
    } else n.nodeType === 3 && r.appendChild(n.cloneNode());
  }
  return {
    clonedElement: r,
    portals: t
  };
}
function rt(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const C = ie(({
  slot: e,
  clone: t,
  className: r,
  style: i,
  observeAttributes: s
}, n) => {
  const o = N(), [l, u] = $([]), {
    forceClone: _
  } = me(), h = _ ? !0 : t;
  return F(() => {
    var v;
    if (!o.current || !e)
      return;
    let c = e;
    function g() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), rt(n, f), r && f.classList.add(...r.split(" ")), i) {
        const p = tt(i);
        Object.keys(p).forEach((b) => {
          f.style[b] = p[b];
        });
      }
    }
    let m = null, y = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var a, I, d;
        (a = o.current) != null && a.contains(c) && ((I = o.current) == null || I.removeChild(c));
        const {
          portals: b,
          clonedElement: R
        } = D(e);
        c = R, u(b), c.style.display = "contents", y && clearTimeout(y), y = setTimeout(() => {
          g();
        }, 50), (d = o.current) == null || d.appendChild(c);
      };
      f();
      const p = Se(() => {
        f(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(p), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", g(), (v = o.current) == null || v.appendChild(c);
    return () => {
      var f, p;
      c.style.display = "", (f = o.current) != null && f.contains(c) && ((p = o.current) == null || p.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, h, r, i, n, s, _]), E.createElement("react-child", {
    ref: o,
    style: {
      display: "contents"
    }
  }, ...l);
});
function ot(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function st(e, t = !1) {
  try {
    if (fe(e))
      return e;
    if (t && !ot(e))
      return;
    if (typeof e == "string") {
      let r = e.trim();
      return r.startsWith(";") && (r = r.slice(1)), r.endsWith(";") && (r = r.slice(0, -1)), new Function(`return (...args) => (${r})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function Z(e, t) {
  return le(() => st(e, t), [e, t]);
}
function it({
  value: e,
  onValueChange: t
}) {
  const [r, i] = $(e), s = N(t);
  s.current = t;
  const n = N(r);
  return n.current = r, F(() => {
    s.current(r);
  }, [r]), F(() => {
    Re(e, n.current) || i(e);
  }, [e]), [r, i];
}
const at = $e(({
  slots: e,
  children: t,
  onValueChange: r,
  onChange: i,
  formatter: s,
  parser: n,
  elRef: o,
  ...l
}) => {
  const u = Z(s), _ = Z(n), [h, c] = it({
    onValueChange: r,
    value: l.value
  });
  return /* @__PURE__ */ w.jsxs(w.Fragment, {
    children: [/* @__PURE__ */ w.jsx("div", {
      style: {
        display: "none"
      },
      children: t
    }), /* @__PURE__ */ w.jsx(_e, {
      ...l,
      ref: o,
      value: h,
      onChange: (g) => {
        i == null || i(g), c(g);
      },
      parser: _,
      formatter: u,
      controls: e["controls.upIcon"] || e["controls.downIcon"] ? {
        upIcon: e["controls.upIcon"] ? /* @__PURE__ */ w.jsx(C, {
          slot: e["controls.upIcon"]
        }) : typeof l.controls == "object" ? l.controls.upIcon : void 0,
        downIcon: e["controls.downIcon"] ? /* @__PURE__ */ w.jsx(C, {
          slot: e["controls.downIcon"]
        }) : typeof l.controls == "object" ? l.controls.downIcon : void 0
      } : l.controls,
      addonAfter: e.addonAfter ? /* @__PURE__ */ w.jsx(C, {
        slot: e.addonAfter
      }) : l.addonAfter,
      addonBefore: e.addonBefore ? /* @__PURE__ */ w.jsx(C, {
        slot: e.addonBefore
      }) : l.addonBefore,
      prefix: e.prefix ? /* @__PURE__ */ w.jsx(C, {
        slot: e.prefix
      }) : l.prefix,
      suffix: e.suffix ? /* @__PURE__ */ w.jsx(C, {
        slot: e.suffix
      }) : l.suffix
    })]
  });
});
export {
  at as InputNumber,
  at as default
};
