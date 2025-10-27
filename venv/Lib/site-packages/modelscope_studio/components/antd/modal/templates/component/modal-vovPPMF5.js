import { i as ue, a as W, r as de, w as k, g as fe, b as me } from "./Index-BBhT8Djb.js";
const y = window.ms_globals.React, le = window.ms_globals.React.forwardRef, se = window.ms_globals.React.useRef, ie = window.ms_globals.React.useState, ce = window.ms_globals.React.useEffect, ae = window.ms_globals.React.useMemo, N = window.ms_globals.ReactDOM.createPortal, _e = window.ms_globals.internalContext.useContextPropsContext, he = window.ms_globals.internalContext.ContextPropsProvider, pe = window.ms_globals.antd.Modal;
var ge = /\s/;
function xe(e) {
  for (var t = e.length; t-- && ge.test(e.charAt(t)); )
    ;
  return t;
}
var be = /^\s+/;
function we(e) {
  return e && e.slice(0, xe(e) + 1).replace(be, "");
}
var U = NaN, ye = /^[-+]0x[0-9a-f]+$/i, Ce = /^0b[01]+$/i, ve = /^0o[0-7]+$/i, Ee = parseInt;
function z(e) {
  if (typeof e == "number")
    return e;
  if (ue(e))
    return U;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = we(e);
  var o = Ce.test(e);
  return o || ve.test(e) ? Ee(e.slice(2), o ? 2 : 8) : ye.test(e) ? U : +e;
}
var L = function() {
  return de.Date.now();
}, Ie = "Expected a function", Se = Math.max, Pe = Math.min;
function Te(e, t, o) {
  var s, l, n, r, i, u, h = 0, g = !1, c = !1, x = !0;
  if (typeof e != "function")
    throw new TypeError(Ie);
  t = z(t) || 0, W(o) && (g = !!o.leading, c = "maxWait" in o, n = c ? Se(z(o.maxWait) || 0, t) : n, x = "trailing" in o ? !!o.trailing : x);
  function f(d) {
    var C = s, T = l;
    return s = l = void 0, h = d, r = e.apply(T, C), r;
  }
  function v(d) {
    return h = d, i = setTimeout(p, t), g ? f(d) : r;
  }
  function E(d) {
    var C = d - u, T = d - h, D = t - C;
    return c ? Pe(D, n - T) : D;
  }
  function m(d) {
    var C = d - u, T = d - h;
    return u === void 0 || C >= t || C < 0 || c && T >= n;
  }
  function p() {
    var d = L();
    if (m(d))
      return b(d);
    i = setTimeout(p, E(d));
  }
  function b(d) {
    return i = void 0, x && s ? f(d) : (s = l = void 0, r);
  }
  function P() {
    i !== void 0 && clearTimeout(i), h = 0, s = u = l = i = void 0;
  }
  function a() {
    return i === void 0 ? r : b(L());
  }
  function I() {
    var d = L(), C = m(d);
    if (s = arguments, l = this, u = d, C) {
      if (i === void 0)
        return v(u);
      if (c)
        return clearTimeout(i), i = setTimeout(p, t), f(u);
    }
    return i === void 0 && (i = setTimeout(p, t)), r;
  }
  return I.cancel = P, I.flush = a, I;
}
var $ = {
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
var Re = y, ke = Symbol.for("react.element"), Oe = Symbol.for("react.fragment"), je = Object.prototype.hasOwnProperty, Fe = Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ee(e, t, o) {
  var s, l = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (s in t) je.call(t, s) && !Le.hasOwnProperty(s) && (l[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) l[s] === void 0 && (l[s] = t[s]);
  return {
    $$typeof: ke,
    type: e,
    key: n,
    ref: r,
    props: l,
    _owner: Fe.current
  };
}
F.Fragment = Oe;
F.jsx = ee;
F.jsxs = ee;
$.exports = F;
var _ = $.exports;
const {
  SvelteComponent: Be,
  assign: G,
  binding_callbacks: H,
  check_outros: Ne,
  children: te,
  claim_element: ne,
  claim_space: We,
  component_subscribe: K,
  compute_slots: Ae,
  create_slot: Me,
  detach: S,
  element: re,
  empty: q,
  exclude_internal_props: V,
  get_all_dirty_from_scope: De,
  get_slot_changes: Ue,
  group_outros: ze,
  init: Ge,
  insert_hydration: O,
  safe_not_equal: He,
  set_custom_element_data: oe,
  space: Ke,
  transition_in: j,
  transition_out: A,
  update_slot_base: qe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ve,
  getContext: Je,
  onDestroy: Xe,
  setContext: Ye
} = window.__gradio__svelte__internal;
function J(e) {
  let t, o;
  const s = (
    /*#slots*/
    e[7].default
  ), l = Me(
    s,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = re("svelte-slot"), l && l.c(), this.h();
    },
    l(n) {
      t = ne(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = te(t);
      l && l.l(r), r.forEach(S), this.h();
    },
    h() {
      oe(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      O(n, t, r), l && l.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      l && l.p && (!o || r & /*$$scope*/
      64) && qe(
        l,
        s,
        n,
        /*$$scope*/
        n[6],
        o ? Ue(
          s,
          /*$$scope*/
          n[6],
          r,
          null
        ) : De(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (j(l, n), o = !0);
    },
    o(n) {
      A(l, n), o = !1;
    },
    d(n) {
      n && S(t), l && l.d(n), e[9](null);
    }
  };
}
function Qe(e) {
  let t, o, s, l, n = (
    /*$$slots*/
    e[4].default && J(e)
  );
  return {
    c() {
      t = re("react-portal-target"), o = Ke(), n && n.c(), s = q(), this.h();
    },
    l(r) {
      t = ne(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), te(t).forEach(S), o = We(r), n && n.l(r), s = q(), this.h();
    },
    h() {
      oe(t, "class", "svelte-1rt0kpf");
    },
    m(r, i) {
      O(r, t, i), e[8](t), O(r, o, i), n && n.m(r, i), O(r, s, i), l = !0;
    },
    p(r, [i]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, i), i & /*$$slots*/
      16 && j(n, 1)) : (n = J(r), n.c(), j(n, 1), n.m(s.parentNode, s)) : n && (ze(), A(n, 1, 1, () => {
        n = null;
      }), Ne());
    },
    i(r) {
      l || (j(n), l = !0);
    },
    o(r) {
      A(n), l = !1;
    },
    d(r) {
      r && (S(t), S(o), S(s)), e[8](null), n && n.d(r);
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
function Ze(e, t, o) {
  let s, l, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const i = Ae(n);
  let {
    svelteInit: u
  } = t;
  const h = k(X(t)), g = k();
  K(e, g, (a) => o(0, s = a));
  const c = k();
  K(e, c, (a) => o(1, l = a));
  const x = [], f = Je("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: E,
    subSlotIndex: m
  } = fe() || {}, p = u({
    parent: f,
    props: h,
    target: g,
    slot: c,
    slotKey: v,
    slotIndex: E,
    subSlotIndex: m,
    onDestroy(a) {
      x.push(a);
    }
  });
  Ye("$$ms-gr-react-wrapper", p), Ve(() => {
    h.set(X(t));
  }), Xe(() => {
    x.forEach((a) => a());
  });
  function b(a) {
    H[a ? "unshift" : "push"](() => {
      s = a, g.set(s);
    });
  }
  function P(a) {
    H[a ? "unshift" : "push"](() => {
      l = a, c.set(l);
    });
  }
  return e.$$set = (a) => {
    o(17, t = G(G({}, t), V(a))), "svelteInit" in a && o(5, u = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = V(t), [s, l, g, c, i, u, r, n, b, P];
}
class $e extends Be {
  constructor(t) {
    super(), Ge(this, t, Ze, Qe, He, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ut
} = window.__gradio__svelte__internal, Y = window.ms_globals.rerender, B = window.ms_globals.tree;
function et(e, t = {}) {
  function o(s) {
    const l = k(), n = new $e({
      ...s,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: l,
            reactComponent: e,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: t.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, u = r.parent ?? B;
          return u.nodes = [...u.nodes, i], Y({
            createPortal: N,
            node: B
          }), r.onDestroy(() => {
            u.nodes = u.nodes.filter((h) => h.svelteInstance !== l), Y({
              createPortal: N,
              node: B
            });
          }), i;
        },
        ...s.props
      }
    });
    return l.set(n), n;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(o);
    });
  });
}
const tt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function nt(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const s = e[o];
    return t[o] = rt(o, s), t;
  }, {}) : {};
}
function rt(e, t) {
  return typeof t == "number" && !tt.includes(e) ? t + "px" : t;
}
function M(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const l = y.Children.toArray(e._reactElement.props.children).map((n) => {
      if (y.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: i
        } = M(n.props.el);
        return y.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...y.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return l.originalChildren = e._reactElement.props.children, t.push(N(y.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: l
    }), o)), {
      clonedElement: o,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((l) => {
    e.getEventListeners(l).forEach(({
      listener: r,
      type: i,
      useCapture: u
    }) => {
      o.addEventListener(i, r, u);
    });
  });
  const s = Array.from(e.childNodes);
  for (let l = 0; l < s.length; l++) {
    const n = s[l];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: i
      } = M(n);
      t.push(...i), o.appendChild(r);
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
const w = le(({
  slot: e,
  clone: t,
  className: o,
  style: s,
  observeAttributes: l
}, n) => {
  const r = se(), [i, u] = ie([]), {
    forceClone: h
  } = _e(), g = h ? !0 : t;
  return ce(() => {
    var E;
    if (!r.current || !e)
      return;
    let c = e;
    function x() {
      let m = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (m = c.children[0], m.tagName.toLowerCase() === "react-portal-target" && m.children[0] && (m = m.children[0])), ot(n, m), o && m.classList.add(...o.split(" ")), s) {
        const p = nt(s);
        Object.keys(p).forEach((b) => {
          m.style[b] = p[b];
        });
      }
    }
    let f = null, v = null;
    if (g && window.MutationObserver) {
      let m = function() {
        var a, I, d;
        (a = r.current) != null && a.contains(c) && ((I = r.current) == null || I.removeChild(c));
        const {
          portals: b,
          clonedElement: P
        } = M(e);
        c = P, u(b), c.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          x();
        }, 50), (d = r.current) == null || d.appendChild(c);
      };
      m();
      const p = Te(() => {
        m(), f == null || f.disconnect(), f == null || f.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      f = new window.MutationObserver(p), f.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", x(), (E = r.current) == null || E.appendChild(c);
    return () => {
      var m, p;
      c.style.display = "", (m = r.current) != null && m.contains(c) && ((p = r.current) == null || p.removeChild(c)), f == null || f.disconnect();
    };
  }, [e, g, o, s, n, l, h]), y.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...i);
});
function lt(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function st(e, t = !1) {
  try {
    if (me(e))
      return e;
    if (t && !lt(e))
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
function R(e, t) {
  return ae(() => st(e, t), [e, t]);
}
const it = ({
  children: e,
  ...t
}) => /* @__PURE__ */ _.jsx(_.Fragment, {
  children: e(t)
});
function ct(e) {
  return y.createElement(it, {
    children: e
  });
}
function Q(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? ct((o) => /* @__PURE__ */ _.jsx(he, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ _.jsx(w, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...o
    })
  })) : /* @__PURE__ */ _.jsx(w, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function Z({
  key: e,
  slots: t,
  targets: o
}, s) {
  return t[e] ? (...l) => o ? o.map((n, r) => /* @__PURE__ */ _.jsx(y.Fragment, {
    children: Q(n, {
      clone: !0,
      params: l,
      forceClone: !0
    })
  }, r)) : /* @__PURE__ */ _.jsx(_.Fragment, {
    children: Q(t[e], {
      clone: !0,
      params: l,
      forceClone: !0
    })
  }) : void 0;
}
const dt = et(({
  slots: e,
  afterClose: t,
  afterOpenChange: o,
  getContainer: s,
  children: l,
  modalRender: n,
  setSlotParams: r,
  ...i
}) => {
  var x, f;
  const u = R(o), h = R(t), g = R(s), c = R(n);
  return /* @__PURE__ */ _.jsx(pe, {
    ...i,
    afterOpenChange: u,
    afterClose: h,
    okText: e.okText ? /* @__PURE__ */ _.jsx(w, {
      slot: e.okText
    }) : i.okText,
    okButtonProps: {
      ...i.okButtonProps || {},
      icon: e["okButtonProps.icon"] ? /* @__PURE__ */ _.jsx(w, {
        slot: e["okButtonProps.icon"]
      }) : (x = i.okButtonProps) == null ? void 0 : x.icon
    },
    cancelText: e.cancelText ? /* @__PURE__ */ _.jsx(w, {
      slot: e.cancelText
    }) : i.cancelText,
    cancelButtonProps: {
      ...i.cancelButtonProps || {},
      icon: e["cancelButtonProps.icon"] ? /* @__PURE__ */ _.jsx(w, {
        slot: e["cancelButtonProps.icon"]
      }) : (f = i.cancelButtonProps) == null ? void 0 : f.icon
    },
    closable: e["closable.closeIcon"] ? {
      ...typeof i.closable == "object" ? i.closable : {},
      closeIcon: /* @__PURE__ */ _.jsx(w, {
        slot: e["closable.closeIcon"]
      })
    } : i.closable,
    closeIcon: e.closeIcon ? /* @__PURE__ */ _.jsx(w, {
      slot: e.closeIcon
    }) : i.closeIcon,
    footer: e.footer ? Z({
      slots: e,
      key: "footer"
    }) : i.footer,
    title: e.title ? /* @__PURE__ */ _.jsx(w, {
      slot: e.title
    }) : i.title,
    modalRender: e.modalRender ? Z({
      slots: e,
      key: "modalRender"
    }) : c,
    getContainer: typeof s == "string" ? g : s,
    children: l
  });
});
export {
  dt as Modal,
  dt as default
};
