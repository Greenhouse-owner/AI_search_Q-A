import { i as ce, a as W, r as ae, w as O, g as ue, d as de, b as T, c as fe } from "./Index-BuP8sZm6.js";
const y = window.ms_globals.React, D = window.ms_globals.React.useMemo, Z = window.ms_globals.React.useState, $ = window.ms_globals.React.useEffect, ie = window.ms_globals.React.forwardRef, le = window.ms_globals.React.useRef, N = window.ms_globals.ReactDOM.createPortal, pe = window.ms_globals.internalContext.useContextPropsContext, me = window.ms_globals.antd.Carousel;
var _e = /\s/;
function ge(e) {
  for (var t = e.length; t-- && _e.test(e.charAt(t)); )
    ;
  return t;
}
var he = /^\s+/;
function be(e) {
  return e && e.slice(0, ge(e) + 1).replace(he, "");
}
var B = NaN, we = /^[-+]0x[0-9a-f]+$/i, ye = /^0b[01]+$/i, ve = /^0o[0-7]+$/i, xe = parseInt;
function z(e) {
  if (typeof e == "number")
    return e;
  if (ce(e))
    return B;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = be(e);
  var o = ye.test(e);
  return o || ve.test(e) ? xe(e.slice(2), o ? 2 : 8) : we.test(e) ? B : +e;
}
var A = function() {
  return ae.Date.now();
}, Ce = "Expected a function", Ee = Math.max, Ie = Math.min;
function Se(e, t, o) {
  var i, s, n, r, l, a, _ = 0, g = !1, c = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(Ce);
  t = z(t) || 0, W(o) && (g = !!o.leading, c = "maxWait" in o, n = c ? Ee(z(o.maxWait) || 0, t) : n, h = "trailing" in o ? !!o.trailing : h);
  function p(d) {
    var w = i, S = s;
    return i = s = void 0, _ = d, r = e.apply(S, w), r;
  }
  function v(d) {
    return _ = d, l = setTimeout(m, t), g ? p(d) : r;
  }
  function x(d) {
    var w = d - a, S = d - _, U = t - w;
    return c ? Ie(U, n - S) : U;
  }
  function f(d) {
    var w = d - a, S = d - _;
    return a === void 0 || w >= t || w < 0 || c && S >= n;
  }
  function m() {
    var d = A();
    if (f(d))
      return b(d);
    l = setTimeout(m, x(d));
  }
  function b(d) {
    return l = void 0, h && i ? p(d) : (i = s = void 0, r);
  }
  function I() {
    l !== void 0 && clearTimeout(l), _ = 0, i = a = s = l = void 0;
  }
  function u() {
    return l === void 0 ? r : b(A());
  }
  function C() {
    var d = A(), w = f(d);
    if (i = arguments, s = this, a = d, w) {
      if (l === void 0)
        return v(a);
      if (c)
        return clearTimeout(l), l = setTimeout(m, t), p(a);
    }
    return l === void 0 && (l = setTimeout(m, t)), r;
  }
  return C.cancel = I, C.flush = u, C;
}
var ee = {
  exports: {}
}, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re = y, Te = Symbol.for("react.element"), Oe = Symbol.for("react.fragment"), ke = Object.prototype.hasOwnProperty, Pe = Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function te(e, t, o) {
  var i, s = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (i in t) ke.call(t, i) && !Le.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: Te,
    type: e,
    key: n,
    ref: r,
    props: s,
    _owner: Pe.current
  };
}
L.Fragment = Oe;
L.jsx = te;
L.jsxs = te;
ee.exports = L;
var R = ee.exports;
const {
  SvelteComponent: Ae,
  assign: G,
  binding_callbacks: H,
  check_outros: Fe,
  children: ne,
  claim_element: re,
  claim_space: Ne,
  component_subscribe: K,
  compute_slots: We,
  create_slot: je,
  detach: E,
  element: oe,
  empty: V,
  exclude_internal_props: q,
  get_all_dirty_from_scope: Me,
  get_slot_changes: De,
  group_outros: Ue,
  init: Be,
  insert_hydration: k,
  safe_not_equal: ze,
  set_custom_element_data: se,
  space: Ge,
  transition_in: P,
  transition_out: j,
  update_slot_base: He
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ke,
  getContext: Ve,
  onDestroy: qe,
  setContext: Je
} = window.__gradio__svelte__internal;
function J(e) {
  let t, o;
  const i = (
    /*#slots*/
    e[7].default
  ), s = je(
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
      var r = ne(t);
      s && s.l(r), r.forEach(E), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      k(n, t, r), s && s.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      s && s.p && (!o || r & /*$$scope*/
      64) && He(
        s,
        i,
        n,
        /*$$scope*/
        n[6],
        o ? De(
          i,
          /*$$scope*/
          n[6],
          r,
          null
        ) : Me(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (P(s, n), o = !0);
    },
    o(n) {
      j(s, n), o = !1;
    },
    d(n) {
      n && E(t), s && s.d(n), e[9](null);
    }
  };
}
function Xe(e) {
  let t, o, i, s, n = (
    /*$$slots*/
    e[4].default && J(e)
  );
  return {
    c() {
      t = oe("react-portal-target"), o = Ge(), n && n.c(), i = V(), this.h();
    },
    l(r) {
      t = re(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), ne(t).forEach(E), o = Ne(r), n && n.l(r), i = V(), this.h();
    },
    h() {
      se(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      k(r, t, l), e[8](t), k(r, o, l), n && n.m(r, l), k(r, i, l), s = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && P(n, 1)) : (n = J(r), n.c(), P(n, 1), n.m(i.parentNode, i)) : n && (Ue(), j(n, 1, 1, () => {
        n = null;
      }), Fe());
    },
    i(r) {
      s || (P(n), s = !0);
    },
    o(r) {
      j(n), s = !1;
    },
    d(r) {
      r && (E(t), E(o), E(i)), e[8](null), n && n.d(r);
    }
  };
}
function X(e) {
  const {
    svelteInit: t,
    ...o
  } = e;
  return o;
}
function Ye(e, t, o) {
  let i, s, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = We(n);
  let {
    svelteInit: a
  } = t;
  const _ = O(X(t)), g = O();
  K(e, g, (u) => o(0, i = u));
  const c = O();
  K(e, c, (u) => o(1, s = u));
  const h = [], p = Ve("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: x,
    subSlotIndex: f
  } = ue() || {}, m = a({
    parent: p,
    props: _,
    target: g,
    slot: c,
    slotKey: v,
    slotIndex: x,
    subSlotIndex: f,
    onDestroy(u) {
      h.push(u);
    }
  });
  Je("$$ms-gr-react-wrapper", m), Ke(() => {
    _.set(X(t));
  }), qe(() => {
    h.forEach((u) => u());
  });
  function b(u) {
    H[u ? "unshift" : "push"](() => {
      i = u, g.set(i);
    });
  }
  function I(u) {
    H[u ? "unshift" : "push"](() => {
      s = u, c.set(s);
    });
  }
  return e.$$set = (u) => {
    o(17, t = G(G({}, t), q(u))), "svelteInit" in u && o(5, a = u.svelteInit), "$$scope" in u && o(6, r = u.$$scope);
  }, t = q(t), [i, s, g, c, l, a, r, n, b, I];
}
class Qe extends Ae {
  constructor(t) {
    super(), Be(this, t, Ye, Xe, ze, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ut
} = window.__gradio__svelte__internal, Y = window.ms_globals.rerender, F = window.ms_globals.tree;
function Ze(e, t = {}) {
  function o(i) {
    const s = O(), n = new Qe({
      ...i,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const l = {
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
          }, a = r.parent ?? F;
          return a.nodes = [...a.nodes, l], Y({
            createPortal: N,
            node: F
          }), r.onDestroy(() => {
            a.nodes = a.nodes.filter((_) => _.svelteInstance !== s), Y({
              createPortal: N,
              node: F
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
      i(o);
    });
  });
}
function $e(e) {
  const [t, o] = Z(() => T(e));
  return $(() => {
    let i = !0;
    return e.subscribe((n) => {
      i && (i = !1, n === t) || o(n);
    });
  }, [e]), t;
}
function et(e) {
  const t = D(() => de(e, (o) => o), [e]);
  return $e(t);
}
const tt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function nt(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const i = e[o];
    return t[o] = rt(o, i), t;
  }, {}) : {};
}
function rt(e, t) {
  return typeof t == "number" && !tt.includes(e) ? t + "px" : t;
}
function M(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const s = y.Children.toArray(e._reactElement.props.children).map((n) => {
      if (y.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = M(n.props.el);
        return y.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...y.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(N(y.cloneElement(e._reactElement, {
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
      type: l,
      useCapture: a
    }) => {
      o.addEventListener(l, r, a);
    });
  });
  const i = Array.from(e.childNodes);
  for (let s = 0; s < i.length; s++) {
    const n = i[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: l
      } = M(n);
      t.push(...l), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function ot(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const st = ie(({
  slot: e,
  clone: t,
  className: o,
  style: i,
  observeAttributes: s
}, n) => {
  const r = le(), [l, a] = Z([]), {
    forceClone: _
  } = pe(), g = _ ? !0 : t;
  return $(() => {
    var x;
    if (!r.current || !e)
      return;
    let c = e;
    function h() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), ot(n, f), o && f.classList.add(...o.split(" ")), i) {
        const m = nt(i);
        Object.keys(m).forEach((b) => {
          f.style[b] = m[b];
        });
      }
    }
    let p = null, v = null;
    if (g && window.MutationObserver) {
      let f = function() {
        var u, C, d;
        (u = r.current) != null && u.contains(c) && ((C = r.current) == null || C.removeChild(c));
        const {
          portals: b,
          clonedElement: I
        } = M(e);
        c = I, a(b), c.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          h();
        }, 50), (d = r.current) == null || d.appendChild(c);
      };
      f();
      const m = Se(() => {
        f(), p == null || p.disconnect(), p == null || p.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      p = new window.MutationObserver(m), p.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", h(), (x = r.current) == null || x.appendChild(c);
    return () => {
      var f, m;
      c.style.display = "", (f = r.current) != null && f.contains(c) && ((m = r.current) == null || m.removeChild(c)), p == null || p.disconnect();
    };
  }, [e, g, o, i, n, s, _]), y.createElement("react-child", {
    ref: r,
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
    if (fe(e))
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
function Q(e, t) {
  return D(() => lt(e, t), [e, t]);
}
function ct(e, t) {
  const o = D(() => y.Children.toArray(e.originalChildren || e).filter((n) => n.props.node && !n.props.node.ignore && (!n.props.nodeSlotKey || t)).sort((n, r) => {
    if (n.props.node.slotIndex && r.props.node.slotIndex) {
      const l = T(n.props.node.slotIndex) || 0, a = T(r.props.node.slotIndex) || 0;
      return l - a === 0 && n.props.node.subSlotIndex && r.props.node.subSlotIndex ? (T(n.props.node.subSlotIndex) || 0) - (T(r.props.node.subSlotIndex) || 0) : l - a;
    }
    return 0;
  }).map((n) => n.props.node.target), [e, t]);
  return et(o);
}
const dt = Ze(({
  afterChange: e,
  beforeChange: t,
  children: o,
  ...i
}) => {
  const s = Q(e), n = Q(t), r = ct(o);
  return /* @__PURE__ */ R.jsxs(R.Fragment, {
    children: [/* @__PURE__ */ R.jsx("div", {
      style: {
        display: "none"
      },
      children: o
    }), /* @__PURE__ */ R.jsx(me, {
      ...i,
      afterChange: s,
      beforeChange: n,
      children: r.map((l, a) => /* @__PURE__ */ R.jsx(st, {
        clone: !0,
        slot: l
      }, a))
    })]
  });
});
export {
  dt as Carousel,
  dt as default
};
