import { i as ae, a as A, r as ue, w as P, g as de, b as fe } from "./Index-DnhF2xEY.js";
const b = window.ms_globals.React, oe = window.ms_globals.React.forwardRef, se = window.ms_globals.React.useRef, ie = window.ms_globals.React.useState, le = window.ms_globals.React.useEffect, ce = window.ms_globals.React.useMemo, W = window.ms_globals.ReactDOM.createPortal, me = window.ms_globals.internalContext.useContextPropsContext, _e = window.ms_globals.internalContext.ContextPropsProvider, he = window.ms_globals.antd.Drawer;
var pe = /\s/;
function ge(e) {
  for (var t = e.length; t-- && pe.test(e.charAt(t)); )
    ;
  return t;
}
var we = /^\s+/;
function xe(e) {
  return e && e.slice(0, ge(e) + 1).replace(we, "");
}
var z = NaN, be = /^[-+]0x[0-9a-f]+$/i, ye = /^0b[01]+$/i, Ce = /^0o[0-7]+$/i, ve = parseInt;
function B(e) {
  if (typeof e == "number")
    return e;
  if (ae(e))
    return z;
  if (A(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = A(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = xe(e);
  var r = ye.test(e);
  return r || Ce.test(e) ? ve(e.slice(2), r ? 2 : 8) : be.test(e) ? z : +e;
}
var L = function() {
  return ue.Date.now();
}, Ee = "Expected a function", Ie = Math.max, Se = Math.min;
function Re(e, t, r) {
  var i, s, n, o, l, u, h = 0, g = !1, c = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(Ee);
  t = B(t) || 0, A(r) && (g = !!r.leading, c = "maxWait" in r, n = c ? Ie(B(r.maxWait) || 0, t) : n, w = "trailing" in r ? !!r.trailing : w);
  function m(d) {
    var y = i, O = s;
    return i = s = void 0, h = d, o = e.apply(O, y), o;
  }
  function C(d) {
    return h = d, l = setTimeout(_, t), g ? m(d) : o;
  }
  function v(d) {
    var y = d - u, O = d - h, U = t - y;
    return c ? Se(U, n - O) : U;
  }
  function f(d) {
    var y = d - u, O = d - h;
    return u === void 0 || y >= t || y < 0 || c && O >= n;
  }
  function _() {
    var d = L();
    if (f(d))
      return x(d);
    l = setTimeout(_, v(d));
  }
  function x(d) {
    return l = void 0, w && i ? m(d) : (i = s = void 0, o);
  }
  function R() {
    l !== void 0 && clearTimeout(l), h = 0, i = u = s = l = void 0;
  }
  function a() {
    return l === void 0 ? o : x(L());
  }
  function E() {
    var d = L(), y = f(d);
    if (i = arguments, s = this, u = d, y) {
      if (l === void 0)
        return C(u);
      if (c)
        return clearTimeout(l), l = setTimeout(_, t), m(u);
    }
    return l === void 0 && (l = setTimeout(_, t)), o;
  }
  return E.cancel = R, E.flush = a, E;
}
var Z = {
  exports: {}
}, j = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe = b, Pe = Symbol.for("react.element"), Te = Symbol.for("react.fragment"), ke = Object.prototype.hasOwnProperty, je = Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function $(e, t, r) {
  var i, s = {}, n = null, o = null;
  r !== void 0 && (n = "" + r), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (i in t) ke.call(t, i) && !Le.hasOwnProperty(i) && (s[i] = t[i]);
  if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
  return {
    $$typeof: Pe,
    type: e,
    key: n,
    ref: o,
    props: s,
    _owner: je.current
  };
}
j.Fragment = Te;
j.jsx = $;
j.jsxs = $;
Z.exports = j;
var p = Z.exports;
const {
  SvelteComponent: Fe,
  assign: G,
  binding_callbacks: H,
  check_outros: Ne,
  children: ee,
  claim_element: te,
  claim_space: We,
  component_subscribe: K,
  compute_slots: Ae,
  create_slot: De,
  detach: I,
  element: ne,
  empty: q,
  exclude_internal_props: V,
  get_all_dirty_from_scope: Me,
  get_slot_changes: Ue,
  group_outros: ze,
  init: Be,
  insert_hydration: T,
  safe_not_equal: Ge,
  set_custom_element_data: re,
  space: He,
  transition_in: k,
  transition_out: D,
  update_slot_base: Ke
} = window.__gradio__svelte__internal, {
  beforeUpdate: qe,
  getContext: Ve,
  onDestroy: Je,
  setContext: Xe
} = window.__gradio__svelte__internal;
function J(e) {
  let t, r;
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
      t = ne("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      t = te(n, "SVELTE-SLOT", {
        class: !0
      });
      var o = ee(t);
      s && s.l(o), o.forEach(I), this.h();
    },
    h() {
      re(t, "class", "svelte-1rt0kpf");
    },
    m(n, o) {
      T(n, t, o), s && s.m(t, null), e[9](t), r = !0;
    },
    p(n, o) {
      s && s.p && (!r || o & /*$$scope*/
      64) && Ke(
        s,
        i,
        n,
        /*$$scope*/
        n[6],
        r ? Ue(
          i,
          /*$$scope*/
          n[6],
          o,
          null
        ) : Me(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      r || (k(s, n), r = !0);
    },
    o(n) {
      D(s, n), r = !1;
    },
    d(n) {
      n && I(t), s && s.d(n), e[9](null);
    }
  };
}
function Ye(e) {
  let t, r, i, s, n = (
    /*$$slots*/
    e[4].default && J(e)
  );
  return {
    c() {
      t = ne("react-portal-target"), r = He(), n && n.c(), i = q(), this.h();
    },
    l(o) {
      t = te(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), ee(t).forEach(I), r = We(o), n && n.l(o), i = q(), this.h();
    },
    h() {
      re(t, "class", "svelte-1rt0kpf");
    },
    m(o, l) {
      T(o, t, l), e[8](t), T(o, r, l), n && n.m(o, l), T(o, i, l), s = !0;
    },
    p(o, [l]) {
      /*$$slots*/
      o[4].default ? n ? (n.p(o, l), l & /*$$slots*/
      16 && k(n, 1)) : (n = J(o), n.c(), k(n, 1), n.m(i.parentNode, i)) : n && (ze(), D(n, 1, 1, () => {
        n = null;
      }), Ne());
    },
    i(o) {
      s || (k(n), s = !0);
    },
    o(o) {
      D(n), s = !1;
    },
    d(o) {
      o && (I(t), I(r), I(i)), e[8](null), n && n.d(o);
    }
  };
}
function X(e) {
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
  const l = Ae(n);
  let {
    svelteInit: u
  } = t;
  const h = P(X(t)), g = P();
  K(e, g, (a) => r(0, i = a));
  const c = P();
  K(e, c, (a) => r(1, s = a));
  const w = [], m = Ve("$$ms-gr-react-wrapper"), {
    slotKey: C,
    slotIndex: v,
    subSlotIndex: f
  } = de() || {}, _ = u({
    parent: m,
    props: h,
    target: g,
    slot: c,
    slotKey: C,
    slotIndex: v,
    subSlotIndex: f,
    onDestroy(a) {
      w.push(a);
    }
  });
  Xe("$$ms-gr-react-wrapper", _), qe(() => {
    h.set(X(t));
  }), Je(() => {
    w.forEach((a) => a());
  });
  function x(a) {
    H[a ? "unshift" : "push"](() => {
      i = a, g.set(i);
    });
  }
  function R(a) {
    H[a ? "unshift" : "push"](() => {
      s = a, c.set(s);
    });
  }
  return e.$$set = (a) => {
    r(17, t = G(G({}, t), V(a))), "svelteInit" in a && r(5, u = a.svelteInit), "$$scope" in a && r(6, o = a.$$scope);
  }, t = V(t), [i, s, g, c, l, u, o, n, x, R];
}
class Ze extends Fe {
  constructor(t) {
    super(), Be(this, t, Qe, Ye, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ut
} = window.__gradio__svelte__internal, Y = window.ms_globals.rerender, F = window.ms_globals.tree;
function $e(e, t = {}) {
  function r(i) {
    const s = P(), n = new Ze({
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
          }, u = o.parent ?? F;
          return u.nodes = [...u.nodes, l], Y({
            createPortal: W,
            node: F
          }), o.onDestroy(() => {
            u.nodes = u.nodes.filter((h) => h.svelteInstance !== s), Y({
              createPortal: W,
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
function M(e) {
  const t = [], r = e.cloneNode(!1);
  if (e._reactElement) {
    const s = b.Children.toArray(e._reactElement.props.children).map((n) => {
      if (b.isValidElement(n) && n.props.__slot__) {
        const {
          portals: o,
          clonedElement: l
        } = M(n.props.el);
        return b.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...b.Children.toArray(n.props.children), ...o]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(W(b.cloneElement(e._reactElement, {
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
      } = M(n);
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
const S = oe(({
  slot: e,
  clone: t,
  className: r,
  style: i,
  observeAttributes: s
}, n) => {
  const o = se(), [l, u] = ie([]), {
    forceClone: h
  } = me(), g = h ? !0 : t;
  return le(() => {
    var v;
    if (!o.current || !e)
      return;
    let c = e;
    function w() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), rt(n, f), r && f.classList.add(...r.split(" ")), i) {
        const _ = tt(i);
        Object.keys(_).forEach((x) => {
          f.style[x] = _[x];
        });
      }
    }
    let m = null, C = null;
    if (g && window.MutationObserver) {
      let f = function() {
        var a, E, d;
        (a = o.current) != null && a.contains(c) && ((E = o.current) == null || E.removeChild(c));
        const {
          portals: x,
          clonedElement: R
        } = M(e);
        c = R, u(x), c.style.display = "contents", C && clearTimeout(C), C = setTimeout(() => {
          w();
        }, 50), (d = o.current) == null || d.appendChild(c);
      };
      f();
      const _ = Re(() => {
        f(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(_), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", w(), (v = o.current) == null || v.appendChild(c);
    return () => {
      var f, _;
      c.style.display = "", (f = o.current) != null && f.contains(c) && ((_ = o.current) == null || _.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, g, r, i, n, s, h]), b.createElement("react-child", {
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
function N(e, t) {
  return ce(() => st(e, t), [e, t]);
}
const it = ({
  children: e,
  ...t
}) => /* @__PURE__ */ p.jsx(p.Fragment, {
  children: e(t)
});
function lt(e) {
  return b.createElement(it, {
    children: e
  });
}
function Q(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? lt((r) => /* @__PURE__ */ p.jsx(_e, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ p.jsx(S, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...r
    })
  })) : /* @__PURE__ */ p.jsx(S, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function ct({
  key: e,
  slots: t,
  targets: r
}, i) {
  return t[e] ? (...s) => r ? r.map((n, o) => /* @__PURE__ */ p.jsx(b.Fragment, {
    children: Q(n, {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }, o)) : /* @__PURE__ */ p.jsx(p.Fragment, {
    children: Q(t[e], {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }) : void 0;
}
const dt = $e(({
  slots: e,
  afterOpenChange: t,
  getContainer: r,
  drawerRender: i,
  setSlotParams: s,
  ...n
}) => {
  const o = N(t), l = N(r), u = N(i);
  return /* @__PURE__ */ p.jsx(he, {
    ...n,
    afterOpenChange: o,
    closeIcon: e.closeIcon ? /* @__PURE__ */ p.jsx(S, {
      slot: e.closeIcon
    }) : n.closeIcon,
    extra: e.extra ? /* @__PURE__ */ p.jsx(S, {
      slot: e.extra
    }) : n.extra,
    footer: e.footer ? /* @__PURE__ */ p.jsx(S, {
      slot: e.footer
    }) : n.footer,
    title: e.title ? /* @__PURE__ */ p.jsx(S, {
      slot: e.title
    }) : n.title,
    drawerRender: e.drawerRender ? ct({
      slots: e,
      key: "drawerRender"
    }) : u,
    getContainer: typeof r == "string" ? l : r
  });
});
export {
  dt as Drawer,
  dt as default
};
