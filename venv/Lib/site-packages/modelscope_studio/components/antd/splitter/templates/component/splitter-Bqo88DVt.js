import { i as ie, a as j, r as ae, w as T, g as ce } from "./Index-xtU63b0y.js";
const E = window.ms_globals.React, ne = window.ms_globals.React.forwardRef, re = window.ms_globals.React.useRef, oe = window.ms_globals.React.useState, se = window.ms_globals.React.useEffect, le = window.ms_globals.React.createElement, A = window.ms_globals.ReactDOM.createPortal, ue = window.ms_globals.internalContext.useContextPropsContext, M = window.ms_globals.antd.Splitter, de = window.ms_globals.createItemsContext.createItemsContext;
var fe = /\s/;
function me(e) {
  for (var t = e.length; t-- && fe.test(e.charAt(t)); )
    ;
  return t;
}
var pe = /^\s+/;
function _e(e) {
  return e && e.slice(0, me(e) + 1).replace(pe, "");
}
var U = NaN, he = /^[-+]0x[0-9a-f]+$/i, ge = /^0b[01]+$/i, we = /^0o[0-7]+$/i, be = parseInt;
function H(e) {
  if (typeof e == "number")
    return e;
  if (ie(e))
    return U;
  if (j(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = j(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = _e(e);
  var o = ge.test(e);
  return o || we.test(e) ? be(e.slice(2), o ? 2 : 8) : he.test(e) ? U : +e;
}
var L = function() {
  return ae.Date.now();
}, ye = "Expected a function", Ee = Math.max, ve = Math.min;
function xe(e, t, o) {
  var l, s, n, r, i, d, _ = 0, h = !1, a = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(ye);
  t = H(t) || 0, j(o) && (h = !!o.leading, a = "maxWait" in o, n = a ? Ee(H(o.maxWait) || 0, t) : n, g = "trailing" in o ? !!o.trailing : g);
  function m(u) {
    var b = l, S = s;
    return l = s = void 0, _ = u, r = e.apply(S, b), r;
  }
  function y(u) {
    return _ = u, i = setTimeout(p, t), h ? m(u) : r;
  }
  function v(u) {
    var b = u - d, S = u - _, F = t - b;
    return a ? ve(F, n - S) : F;
  }
  function f(u) {
    var b = u - d, S = u - _;
    return d === void 0 || b >= t || b < 0 || a && S >= n;
  }
  function p() {
    var u = L();
    if (f(u))
      return w(u);
    i = setTimeout(p, v(u));
  }
  function w(u) {
    return i = void 0, g && l ? m(u) : (l = s = void 0, r);
  }
  function I() {
    i !== void 0 && clearTimeout(i), _ = 0, l = d = s = i = void 0;
  }
  function c() {
    return i === void 0 ? r : w(L());
  }
  function x() {
    var u = L(), b = f(u);
    if (l = arguments, s = this, d = u, b) {
      if (i === void 0)
        return y(d);
      if (a)
        return clearTimeout(i), i = setTimeout(p, t), m(d);
    }
    return i === void 0 && (i = setTimeout(p, t)), r;
  }
  return x.cancel = I, x.flush = c, x;
}
var Y = {
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
var Ce = E, Ie = Symbol.for("react.element"), Se = Symbol.for("react.fragment"), Re = Object.prototype.hasOwnProperty, Te = Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Oe = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Q(e, t, o) {
  var l, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (l in t) Re.call(t, l) && !Oe.hasOwnProperty(l) && (s[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) s[l] === void 0 && (s[l] = t[l]);
  return {
    $$typeof: Ie,
    type: e,
    key: n,
    ref: r,
    props: s,
    _owner: Te.current
  };
}
P.Fragment = Se;
P.jsx = Q;
P.jsxs = Q;
Y.exports = P;
var R = Y.exports;
const {
  SvelteComponent: ke,
  assign: z,
  binding_callbacks: B,
  check_outros: Pe,
  children: Z,
  claim_element: $,
  claim_space: Le,
  component_subscribe: G,
  compute_slots: Ne,
  create_slot: Ae,
  detach: C,
  element: ee,
  empty: K,
  exclude_internal_props: q,
  get_all_dirty_from_scope: je,
  get_slot_changes: We,
  group_outros: De,
  init: Fe,
  insert_hydration: O,
  safe_not_equal: Me,
  set_custom_element_data: te,
  space: Ue,
  transition_in: k,
  transition_out: W,
  update_slot_base: He
} = window.__gradio__svelte__internal, {
  beforeUpdate: ze,
  getContext: Be,
  onDestroy: Ge,
  setContext: Ke
} = window.__gradio__svelte__internal;
function V(e) {
  let t, o;
  const l = (
    /*#slots*/
    e[7].default
  ), s = Ae(
    l,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ee("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      t = $(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = Z(t);
      s && s.l(r), r.forEach(C), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      O(n, t, r), s && s.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && He(
        s,
        l,
        n,
        /*$$scope*/
        n[6],
        o ? We(
          l,
          /*$$scope*/
          n[6],
          r,
          null
        ) : je(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (k(s, n), o = !0);
    },
    o(n) {
      W(s, n), o = !1;
    },
    d(n) {
      n && C(t), s && s.d(n), e[9](null);
    }
  };
}
function qe(e) {
  let t, o, l, s, n = (
    /*$$slots*/
    e[4].default && V(e)
  );
  return {
    c() {
      t = ee("react-portal-target"), o = Ue(), n && n.c(), l = K(), this.h();
    },
    l(r) {
      t = $(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), Z(t).forEach(C), o = Le(r), n && n.l(r), l = K(), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      O(r, t, i), e[8](t), O(r, o, i), n && n.m(r, i), O(r, l, i), s = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && k(n, 1)) : (n = V(r), n.c(), k(n, 1), n.m(l.parentNode, l)) : n && (De(), W(n, 1, 1, () => {
        n = null;
      }), Pe());
    },
    i(r) {
      s || (k(n), s = !0);
    },
    o(r) {
      W(n), s = !1;
    },
    d(r) {
      r && (C(t), C(o), C(l)), e[8](null), n && n.d(r);
    }
  };
}
function J(e) {
  const {
    svelteInit: t,
    ...o
  } = e;
  return o;
}
function Ve(e, t, o) {
  let l, s, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const i = Ne(n);
  let {
    svelteInit: d
  } = t;
  const _ = T(J(t)), h = T();
  G(e, h, (c) => o(0, l = c));
  const a = T();
  G(e, a, (c) => o(1, s = c));
  const g = [], m = Be("$$ms-gr-react-wrapper"), {
    slotKey: y,
    slotIndex: v,
    subSlotIndex: f
  } = ce() || {}, p = d({
    parent: m,
    props: _,
    target: h,
    slot: a,
    slotKey: y,
    slotIndex: v,
    subSlotIndex: f,
    onDestroy(c) {
      g.push(c);
    }
  });
  Ke("$$ms-gr-react-wrapper", p), ze(() => {
    _.set(J(t));
  }), Ge(() => {
    g.forEach((c) => c());
  });
  function w(c) {
    B[c ? "unshift" : "push"](() => {
      l = c, h.set(l);
    });
  }
  function I(c) {
    B[c ? "unshift" : "push"](() => {
      s = c, a.set(s);
    });
  }
  return e.$$set = (c) => {
    o(17, t = z(z({}, t), q(c))), "svelteInit" in c && o(5, d = c.svelteInit), "$$scope" in c && o(6, r = c.$$scope);
  }, t = q(t), [l, s, h, a, i, d, r, n, w, I];
}
class Je extends ke {
  constructor(t) {
    super(), Fe(this, t, Ve, qe, Me, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ot
} = window.__gradio__svelte__internal, X = window.ms_globals.rerender, N = window.ms_globals.tree;
function Xe(e, t = {}) {
  function o(l) {
    const s = T(), n = new Je({
      ...l,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: s,
            reactComponent: e,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: t.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, d = r.parent ?? N;
          return d.nodes = [...d.nodes, i], X({
            createPortal: A,
            node: N
          }), r.onDestroy(() => {
            d.nodes = d.nodes.filter((_) => _.svelteInstance !== s), X({
              createPortal: A,
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
const Ye = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Qe(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const l = e[o];
    return t[o] = Ze(o, l), t;
  }, {}) : {};
}
function Ze(e, t) {
  return typeof t == "number" && !Ye.includes(e) ? t + "px" : t;
}
function D(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = E.Children.toArray(e._reactElement.props.children).map((n) => {
      if (E.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = D(n.props.el);
        return E.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...E.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(A(E.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: s
    }), o)), {
      clonedElement: o,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((s) => {
    e.getEventListeners(s).forEach(({
      listener: r,
      type: i,
      useCapture: d
    }) => {
      o.addEventListener(i, r, d);
    });
  });
  const l = Array.from(e.childNodes);
  for (let s = 0; s < l.length; s++) {
    const n = l[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = D(n);
      t.push(...i), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function $e(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const et = ne(({
  slot: e,
  clone: t,
  className: o,
  style: l,
  observeAttributes: s
}, n) => {
  const r = re(), [i, d] = oe([]), {
    forceClone: _
  } = ue(), h = _ ? !0 : t;
  return se(() => {
    var v;
    if (!r.current || !e)
      return;
    let a = e;
    function g() {
      let f = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (f = a.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), $e(n, f), o && f.classList.add(...o.split(" ")), l) {
        const p = Qe(l);
        Object.keys(p).forEach((w) => {
          f.style[w] = p[w];
        });
      }
    }
    let m = null, y = null;
    if (h && window.MutationObserver) {
      let f = function() {
        var c, x, u;
        (c = r.current) != null && c.contains(a) && ((x = r.current) == null || x.removeChild(a));
        const {
          portals: w,
          clonedElement: I
        } = D(e);
        a = I, d(w), a.style.display = "contents", y && clearTimeout(y), y = setTimeout(() => {
          g();
        }, 50), (u = r.current) == null || u.appendChild(a);
      };
      f();
      const p = xe(() => {
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
      a.style.display = "contents", g(), (v = r.current) == null || v.appendChild(a);
    return () => {
      var f, p;
      a.style.display = "", (f = r.current) != null && f.contains(a) && ((p = r.current) == null || p.removeChild(a)), m == null || m.disconnect();
    };
  }, [e, h, o, l, n, s, _]), E.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
}), {
  withItemsContextProvider: tt,
  useItems: nt,
  ItemHandler: st
} = de("splitter.panels"), lt = Xe(tt(["default"], ({
  children: e,
  ...t
}) => {
  const {
    items: {
      default: o
    }
  } = nt();
  return /* @__PURE__ */ R.jsxs(R.Fragment, {
    children: [/* @__PURE__ */ R.jsx("div", {
      style: {
        display: "none"
      },
      children: e
    }), o.length ? /* @__PURE__ */ R.jsx(M, {
      ...t,
      children: o == null ? void 0 : o.map((l, s) => {
        if (!l)
          return null;
        const {
          el: n,
          props: r
        } = l;
        return /* @__PURE__ */ le(M.Panel, {
          ...r,
          key: s
        }, n && /* @__PURE__ */ R.jsx(et, {
          slot: n
        }));
      })
    }) : null]
  });
}));
export {
  lt as Splitter,
  lt as default
};
