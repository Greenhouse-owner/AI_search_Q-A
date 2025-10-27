import { i as Jt, a as et, r as Qt, w as M, g as Xt, b as Vt } from "./Index-nJA-Ual0.js";
const v = window.ms_globals.React, Zt = window.ms_globals.React.forwardRef, qt = window.ms_globals.React.useRef, zt = window.ms_globals.React.useState, Tt = window.ms_globals.React.useEffect, Yt = window.ms_globals.React.useMemo, tt = window.ms_globals.ReactDOM.createPortal, $t = window.ms_globals.internalContext.useContextPropsContext, te = window.ms_globals.internalContext.ContextPropsProvider, ee = window.ms_globals.antdCssinjs.StyleProvider, ne = window.ms_globals.antd.ConfigProvider, ht = window.ms_globals.antd.theme, re = window.ms_globals.dayjs;
var ae = /\s/;
function ie(e) {
  for (var t = e.length; t-- && ae.test(e.charAt(t)); )
    ;
  return t;
}
var oe = /^\s+/;
function se(e) {
  return e && e.slice(0, ie(e) + 1).replace(oe, "");
}
var yt = NaN, le = /^[-+]0x[0-9a-f]+$/i, ce = /^0b[01]+$/i, ue = /^0o[0-7]+$/i, de = parseInt;
function _t(e) {
  if (typeof e == "number")
    return e;
  if (Jt(e))
    return yt;
  if (et(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = et(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = se(e);
  var n = ce.test(e);
  return n || ue.test(e) ? de(e.slice(2), n ? 2 : 8) : le.test(e) ? yt : +e;
}
var J = function() {
  return Qt.Date.now();
}, fe = "Expected a function", me = Math.max, he = Math.min;
function ye(e, t, n) {
  var r, a, i, o, s, l, h = 0, _ = !1, c = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(fe);
  t = _t(t) || 0, et(n) && (_ = !!n.leading, c = "maxWait" in n, i = c ? me(_t(n.maxWait) || 0, t) : i, p = "trailing" in n ? !!n.trailing : p);
  function m(d) {
    var S = r, A = a;
    return r = a = void 0, h = d, o = e.apply(A, S), o;
  }
  function k(d) {
    return h = d, s = setTimeout(y, t), _ ? m(d) : o;
  }
  function E(d) {
    var S = d - l, A = d - h, mt = t - S;
    return c ? he(mt, i - A) : mt;
  }
  function f(d) {
    var S = d - l, A = d - h;
    return l === void 0 || S >= t || S < 0 || c && A >= i;
  }
  function y() {
    var d = J();
    if (f(d))
      return b(d);
    s = setTimeout(y, E(d));
  }
  function b(d) {
    return s = void 0, p && r ? m(d) : (r = a = void 0, o);
  }
  function x() {
    s !== void 0 && clearTimeout(s), h = 0, r = l = a = s = void 0;
  }
  function u() {
    return s === void 0 ? o : b(J());
  }
  function g() {
    var d = J(), S = f(d);
    if (r = arguments, a = this, l = d, S) {
      if (s === void 0)
        return k(l);
      if (c)
        return clearTimeout(s), s = setTimeout(y, t), m(l);
    }
    return s === void 0 && (s = setTimeout(y, t)), o;
  }
  return g.cancel = x, g.flush = u, g;
}
var Ft = {
  exports: {}
}, G = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e = v, pe = Symbol.for("react.element"), we = Symbol.for("react.fragment"), Pe = Object.prototype.hasOwnProperty, ge = _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, je = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function At(e, t, n) {
  var r, a = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Pe.call(t, r) && !je.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return {
    $$typeof: pe,
    type: e,
    key: i,
    ref: o,
    props: a,
    _owner: ge.current
  };
}
G.Fragment = we;
G.jsx = At;
G.jsxs = At;
Ft.exports = G;
var j = Ft.exports;
const {
  SvelteComponent: be,
  assign: pt,
  binding_callbacks: wt,
  check_outros: Ce,
  children: Nt,
  claim_element: Dt,
  claim_space: Ee,
  component_subscribe: Pt,
  compute_slots: ke,
  create_slot: ve,
  detach: z,
  element: Mt,
  empty: gt,
  exclude_internal_props: jt,
  get_all_dirty_from_scope: Se,
  get_slot_changes: xe,
  group_outros: Ie,
  init: Oe,
  insert_hydration: L,
  safe_not_equal: Re,
  set_custom_element_data: Lt,
  space: ze,
  transition_in: W,
  transition_out: nt,
  update_slot_base: Te
} = window.__gradio__svelte__internal, {
  beforeUpdate: Fe,
  getContext: Ae,
  onDestroy: Ne,
  setContext: De
} = window.__gradio__svelte__internal;
function bt(e) {
  let t, n;
  const r = (
    /*#slots*/
    e[7].default
  ), a = ve(
    r,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = Mt("svelte-slot"), a && a.c(), this.h();
    },
    l(i) {
      t = Dt(i, "SVELTE-SLOT", {
        class: !0
      });
      var o = Nt(t);
      a && a.l(o), o.forEach(z), this.h();
    },
    h() {
      Lt(t, "class", "svelte-1rt0kpf");
    },
    m(i, o) {
      L(i, t, o), a && a.m(t, null), e[9](t), n = !0;
    },
    p(i, o) {
      a && a.p && (!n || o & /*$$scope*/
      64) && Te(
        a,
        r,
        i,
        /*$$scope*/
        i[6],
        n ? xe(
          r,
          /*$$scope*/
          i[6],
          o,
          null
        ) : Se(
          /*$$scope*/
          i[6]
        ),
        null
      );
    },
    i(i) {
      n || (W(a, i), n = !0);
    },
    o(i) {
      nt(a, i), n = !1;
    },
    d(i) {
      i && z(t), a && a.d(i), e[9](null);
    }
  };
}
function Me(e) {
  let t, n, r, a, i = (
    /*$$slots*/
    e[4].default && bt(e)
  );
  return {
    c() {
      t = Mt("react-portal-target"), n = ze(), i && i.c(), r = gt(), this.h();
    },
    l(o) {
      t = Dt(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), Nt(t).forEach(z), n = Ee(o), i && i.l(o), r = gt(), this.h();
    },
    h() {
      Lt(t, "class", "svelte-1rt0kpf");
    },
    m(o, s) {
      L(o, t, s), e[8](t), L(o, n, s), i && i.m(o, s), L(o, r, s), a = !0;
    },
    p(o, [s]) {
      /*$$slots*/
      o[4].default ? i ? (i.p(o, s), s & /*$$slots*/
      16 && W(i, 1)) : (i = bt(o), i.c(), W(i, 1), i.m(r.parentNode, r)) : i && (Ie(), nt(i, 1, 1, () => {
        i = null;
      }), Ce());
    },
    i(o) {
      a || (W(i), a = !0);
    },
    o(o) {
      nt(i), a = !1;
    },
    d(o) {
      o && (z(t), z(n), z(r)), e[8](null), i && i.d(o);
    }
  };
}
function Ct(e) {
  const {
    svelteInit: t,
    ...n
  } = e;
  return n;
}
function Le(e, t, n) {
  let r, a, {
    $$slots: i = {},
    $$scope: o
  } = t;
  const s = ke(i);
  let {
    svelteInit: l
  } = t;
  const h = M(Ct(t)), _ = M();
  Pt(e, _, (u) => n(0, r = u));
  const c = M();
  Pt(e, c, (u) => n(1, a = u));
  const p = [], m = Ae("$$ms-gr-react-wrapper"), {
    slotKey: k,
    slotIndex: E,
    subSlotIndex: f
  } = Xt() || {}, y = l({
    parent: m,
    props: h,
    target: _,
    slot: c,
    slotKey: k,
    slotIndex: E,
    subSlotIndex: f,
    onDestroy(u) {
      p.push(u);
    }
  });
  De("$$ms-gr-react-wrapper", y), Fe(() => {
    h.set(Ct(t));
  }), Ne(() => {
    p.forEach((u) => u());
  });
  function b(u) {
    wt[u ? "unshift" : "push"](() => {
      r = u, _.set(r);
    });
  }
  function x(u) {
    wt[u ? "unshift" : "push"](() => {
      a = u, c.set(a);
    });
  }
  return e.$$set = (u) => {
    n(17, t = pt(pt({}, t), jt(u))), "svelteInit" in u && n(5, l = u.svelteInit), "$$scope" in u && n(6, o = u.$$scope);
  }, t = jt(t), [r, a, _, c, s, l, o, i, b, x];
}
class We extends be {
  constructor(t) {
    super(), Oe(this, t, Le, Me, Re, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: dn
} = window.__gradio__svelte__internal, Et = window.ms_globals.rerender, Q = window.ms_globals.tree;
function Ke(e, t = {}) {
  function n(r) {
    const a = M(), i = new We({
      ...r,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const s = {
            key: window.ms_globals.autokey,
            svelteInstance: a,
            reactComponent: e,
            props: o.props,
            slot: o.slot,
            target: o.target,
            slotIndex: o.slotIndex,
            subSlotIndex: o.subSlotIndex,
            ignore: t.ignore,
            slotKey: o.slotKey,
            nodes: []
          }, l = o.parent ?? Q;
          return l.nodes = [...l.nodes, s], Et({
            createPortal: tt,
            node: Q
          }), o.onDestroy(() => {
            l.nodes = l.nodes.filter((h) => h.svelteInstance !== a), Et({
              createPortal: tt,
              node: Q
            });
          }), s;
        },
        ...r.props
      }
    });
    return a.set(i), i;
  }
  return new Promise((r) => {
    window.ms_globals.initializePromise.then(() => {
      r(n);
    });
  });
}
const Ue = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Be(e) {
  return e ? Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return t[n] = Ge(n, r), t;
  }, {}) : {};
}
function Ge(e, t) {
  return typeof t == "number" && !Ue.includes(e) ? t + "px" : t;
}
function rt(e) {
  const t = [], n = e.cloneNode(!1);
  if (e._reactElement) {
    const a = v.Children.toArray(e._reactElement.props.children).map((i) => {
      if (v.isValidElement(i) && i.props.__slot__) {
        const {
          portals: o,
          clonedElement: s
        } = rt(i.props.el);
        return v.cloneElement(i, {
          ...i.props,
          el: s,
          children: [...v.Children.toArray(i.props.children), ...o]
        });
      }
      return null;
    });
    return a.originalChildren = e._reactElement.props.children, t.push(tt(v.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: a
    }), n)), {
      clonedElement: n,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((a) => {
    e.getEventListeners(a).forEach(({
      listener: o,
      type: s,
      useCapture: l
    }) => {
      n.addEventListener(s, o, l);
    });
  });
  const r = Array.from(e.childNodes);
  for (let a = 0; a < r.length; a++) {
    const i = r[a];
    if (i.nodeType === 1) {
      const {
        clonedElement: o,
        portals: s
      } = rt(i);
      t.push(...s), n.appendChild(o);
    } else i.nodeType === 3 && n.appendChild(i.cloneNode());
  }
  return {
    clonedElement: n,
    portals: t
  };
}
function He(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const at = Zt(({
  slot: e,
  clone: t,
  className: n,
  style: r,
  observeAttributes: a
}, i) => {
  const o = qt(), [s, l] = zt([]), {
    forceClone: h
  } = $t(), _ = h ? !0 : t;
  return Tt(() => {
    var E;
    if (!o.current || !e)
      return;
    let c = e;
    function p() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), He(i, f), n && f.classList.add(...n.split(" ")), r) {
        const y = Be(r);
        Object.keys(y).forEach((b) => {
          f.style[b] = y[b];
        });
      }
    }
    let m = null, k = null;
    if (_ && window.MutationObserver) {
      let f = function() {
        var u, g, d;
        (u = o.current) != null && u.contains(c) && ((g = o.current) == null || g.removeChild(c));
        const {
          portals: b,
          clonedElement: x
        } = rt(e);
        c = x, l(b), c.style.display = "contents", k && clearTimeout(k), k = setTimeout(() => {
          p();
        }, 50), (d = o.current) == null || d.appendChild(c);
      };
      f();
      const y = ye(() => {
        f(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(y), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", p(), (E = o.current) == null || E.appendChild(c);
    return () => {
      var f, y;
      c.style.display = "", (f = o.current) != null && f.contains(c) && ((y = o.current) == null || y.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, _, n, r, i, a, h]), v.createElement("react-child", {
    ref: o,
    style: {
      display: "contents"
    }
  }, ...s);
});
function Ze(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function qe(e, t = !1) {
  try {
    if (Vt(e))
      return e;
    if (t && !Ze(e))
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
function X(e, t) {
  return Yt(() => qe(e, t), [e, t]);
}
const Ye = ({
  children: e,
  ...t
}) => /* @__PURE__ */ j.jsx(j.Fragment, {
  children: e(t)
});
function Je(e) {
  return v.createElement(Ye, {
    children: e
  });
}
function kt(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? Je((n) => /* @__PURE__ */ j.jsx(te, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ j.jsx(at, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...n
    })
  })) : /* @__PURE__ */ j.jsx(at, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function Qe({
  key: e,
  slots: t,
  targets: n
}, r) {
  return t[e] ? (...a) => n ? n.map((i, o) => /* @__PURE__ */ j.jsx(v.Fragment, {
    children: kt(i, {
      clone: !0,
      params: a,
      forceClone: !0
    })
  }, o)) : /* @__PURE__ */ j.jsx(j.Fragment, {
    children: kt(t[e], {
      clone: !0,
      params: a,
      forceClone: !0
    })
  }) : void 0;
}
var Wt = Symbol.for("immer-nothing"), vt = Symbol.for("immer-draftable"), w = Symbol.for("immer-state");
function C(e, ...t) {
  throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var T = Object.getPrototypeOf;
function F(e) {
  return !!e && !!e[w];
}
function O(e) {
  var t;
  return e ? Kt(e) || Array.isArray(e) || !!e[vt] || !!((t = e.constructor) != null && t[vt]) || Z(e) || q(e) : !1;
}
var Xe = Object.prototype.constructor.toString();
function Kt(e) {
  if (!e || typeof e != "object") return !1;
  const t = T(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Xe;
}
function K(e, t) {
  H(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function H(e) {
  const t = e[w];
  return t ? t.type_ : Array.isArray(e) ? 1 : Z(e) ? 2 : q(e) ? 3 : 0;
}
function it(e, t) {
  return H(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ut(e, t, n) {
  const r = H(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Ve(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Z(e) {
  return e instanceof Map;
}
function q(e) {
  return e instanceof Set;
}
function I(e) {
  return e.copy_ || e.base_;
}
function ot(e, t) {
  if (Z(e))
    return new Map(e);
  if (q(e))
    return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = Kt(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[w];
    let a = Reflect.ownKeys(r);
    for (let i = 0; i < a.length; i++) {
      const o = a[i], s = r[o];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[o]
      });
    }
    return Object.create(T(e), r);
  } else {
    const r = T(e);
    if (r !== null && n)
      return {
        ...e
      };
    const a = Object.create(r);
    return Object.assign(a, e);
  }
}
function dt(e, t = !1) {
  return Y(e) || F(e) || !O(e) || (H(e) > 1 && (e.set = e.add = e.clear = e.delete = $e), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => dt(r, !0))), e;
}
function $e() {
  C(2);
}
function Y(e) {
  return Object.isFrozen(e);
}
var tn = {};
function R(e) {
  const t = tn[e];
  return t || C(0, e), t;
}
var N;
function Bt() {
  return N;
}
function en(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function St(e, t) {
  t && (R("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function st(e) {
  lt(e), e.drafts_.forEach(nn), e.drafts_ = null;
}
function lt(e) {
  e === N && (N = e.parent_);
}
function xt(e) {
  return N = en(N, e);
}
function nn(e) {
  const t = e[w];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function It(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[w].modified_ && (st(t), C(4)), O(e) && (e = U(t, e), t.parent_ || B(t, e)), t.patches_ && R("Patches").generateReplacementPatches_(n[w].base_, e, t.patches_, t.inversePatches_)) : e = U(t, n, []), st(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Wt ? e : void 0;
}
function U(e, t, n) {
  if (Y(t)) return t;
  const r = t[w];
  if (!r)
    return K(t, (a, i) => Ot(e, r, t, a, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_)
    return B(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const a = r.copy_;
    let i = a, o = !1;
    r.type_ === 3 && (i = new Set(a), a.clear(), o = !0), K(i, (s, l) => Ot(e, r, a, s, l, n, o)), B(e, a, !1), n && e.patches_ && R("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Ot(e, t, n, r, a, i, o) {
  if (F(a)) {
    const s = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !it(t.assigned_, r) ? i.concat(r) : void 0, l = U(e, a, s);
    if (Ut(n, r, l), F(l))
      e.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(a);
  if (O(a) && !Y(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    U(e, a), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && B(e, a);
  }
}
function B(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && dt(t, n);
}
function rn(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Bt(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let a = r, i = ft;
  n && (a = [r], i = D);
  const {
    revoke: o,
    proxy: s
  } = Proxy.revocable(a, i);
  return r.draft_ = s, r.revoke_ = o, s;
}
var ft = {
  get(e, t) {
    if (t === w) return e;
    const n = I(e);
    if (!it(n, t))
      return an(e, n, t);
    const r = n[t];
    return e.finalized_ || !O(r) ? r : r === V(e.base_, t) ? ($(e), e.copy_[t] = ut(r, e)) : r;
  },
  has(e, t) {
    return t in I(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(I(e));
  },
  set(e, t, n) {
    const r = Gt(I(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const a = V(I(e), t), i = a == null ? void 0 : a[w];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (Ve(n, a) && (n !== void 0 || it(e.base_, t))) return !0;
      $(e), ct(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return V(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, $(e), ct(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = I(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    C(11);
  },
  getPrototypeOf(e) {
    return T(e.base_);
  },
  setPrototypeOf() {
    C(12);
  }
}, D = {};
K(ft, (e, t) => {
  D[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
D.deleteProperty = function(e, t) {
  return D.set.call(this, e, t, void 0);
};
D.set = function(e, t, n) {
  return ft.set.call(this, e[0], t, n, e[0]);
};
function V(e, t) {
  const n = e[w];
  return (n ? I(n) : e)[t];
}
function an(e, t, n) {
  var a;
  const r = Gt(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (a = r.get) == null ? void 0 : a.call(e.draft_)
  ) : void 0;
}
function Gt(e, t) {
  if (!(t in e)) return;
  let n = T(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = T(n);
  }
}
function ct(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ct(e.parent_));
}
function $(e) {
  e.copy_ || (e.copy_ = ot(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var on = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const o = this;
        return function(l = i, ...h) {
          return o.produce(l, (_) => n.call(this, _, ...h));
        };
      }
      typeof n != "function" && C(6), r !== void 0 && typeof r != "function" && C(7);
      let a;
      if (O(t)) {
        const i = xt(this), o = ut(t, void 0);
        let s = !0;
        try {
          a = n(o), s = !1;
        } finally {
          s ? st(i) : lt(i);
        }
        return St(i, r), It(a, i);
      } else if (!t || typeof t != "object") {
        if (a = n(t), a === void 0 && (a = t), a === Wt && (a = void 0), this.autoFreeze_ && dt(a, !0), r) {
          const i = [], o = [];
          R("Patches").generateReplacementPatches_(t, a, i, o), r(i, o);
        }
        return a;
      } else C(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (o, ...s) => this.produceWithPatches(o, (l) => t(l, ...s));
      let r, a;
      return [this.produce(t, n, (o, s) => {
        r = o, a = s;
      }), r, a];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    O(e) || C(8), F(e) && (e = sn(e));
    const t = xt(this), n = ut(e, void 0);
    return n[w].isManual_ = !0, lt(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[w];
    (!n || !n.isManual_) && C(9);
    const {
      scope_: r
    } = n;
    return St(r, t), It(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const a = t[n];
      if (a.path.length === 0 && a.op === "replace") {
        e = a.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = R("Patches").applyPatches_;
    return F(e) ? r(e, t) : this.produce(e, (a) => r(a, t));
  }
};
function ut(e, t) {
  const n = Z(e) ? R("MapSet").proxyMap_(e, t) : q(e) ? R("MapSet").proxySet_(e, t) : rn(e, t);
  return (t ? t.scope_ : Bt()).drafts_.push(n), n;
}
function sn(e) {
  return F(e) || C(10, e), Ht(e);
}
function Ht(e) {
  if (!O(e) || Y(e)) return e;
  const t = e[w];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = !0, n = ot(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = ot(e, !0);
  return K(n, (r, a) => {
    Ut(n, r, Ht(a));
  }), t && (t.finalized_ = !1), n;
}
var P = new on(), ln = P.produce;
P.produceWithPatches.bind(P);
P.setAutoFreeze.bind(P);
P.setUseStrictShallowCopy.bind(P);
P.applyPatches.bind(P);
P.createDraft.bind(P);
P.finishDraft.bind(P);
const Rt = {
  ar_EG: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./ar_EG-BklKItNM.js").then((t) => t.a), import("./ar-UFzHlgg3.js").then((t) => t.a)]);
    return {
      antd: e,
      dayjs: "ar"
    };
  },
  az_AZ: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./az_AZ-BBe52Eo-.js").then((t) => t.a), import("./az-XLxJzG-R.js").then((t) => t.a)]);
    return {
      antd: e,
      dayjs: "az"
    };
  },
  bg_BG: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./bg_BG-BYQNsClr.js").then((t) => t.b), import("./bg-BnXqhw_x.js").then((t) => t.b)]);
    return {
      antd: e,
      dayjs: "bg"
    };
  },
  bn_BD: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./bn_BD-CRO9TfVb.js").then((t) => t.b), import("./bn-DaAINYzn.js").then((t) => t.b)]);
    return {
      antd: e,
      dayjs: "bn"
    };
  },
  by_BY: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./by_BY-D33N_wBZ.js").then((t) => t.b),
      import("./be-GGEwEYFL.js").then((t) => t.b)
      // Belarusian (Belarus)
    ]);
    return {
      antd: e,
      dayjs: "be"
    };
  },
  ca_ES: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./ca_ES-DltVDQB4.js").then((t) => t.c), import("./ca-CDxYIMBj.js").then((t) => t.c)]);
    return {
      antd: e,
      dayjs: "ca"
    };
  },
  cs_CZ: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./cs_CZ-DCaBlPeF.js").then((t) => t.c), import("./cs-BMN_mSCb.js").then((t) => t.c)]);
    return {
      antd: e,
      dayjs: "cs"
    };
  },
  da_DK: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./da_DK-CI7oJ-cL.js").then((t) => t.d), import("./da-BRq2zCsU.js").then((t) => t.d)]);
    return {
      antd: e,
      dayjs: "da"
    };
  },
  de_DE: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./de_DE-bOGGxfLD.js").then((t) => t.d), import("./de-DOc0xQTi.js").then((t) => t.d)]);
    return {
      antd: e,
      dayjs: "de"
    };
  },
  el_GR: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./el_GR-DsxF6zka.js").then((t) => t.e), import("./el-Cf1jcRLM.js").then((t) => t.e)]);
    return {
      antd: e,
      dayjs: "el"
    };
  },
  en_GB: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./en_GB-BugKtPea.js").then((t) => t.e), import("./en-gb-vZAQ2HDV.js").then((t) => t.e)]);
    return {
      antd: e,
      dayjs: "en-gb"
    };
  },
  en_US: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./en_US-VtxnBry-.js").then((t) => t.e), import("./en-DbhzBUPq.js").then((t) => t.e)]);
    return {
      antd: e,
      dayjs: "en"
    };
  },
  es_ES: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./es_ES-fR3bjAW4.js").then((t) => t.e), import("./es-BmybnWJq.js").then((t) => t.e)]);
    return {
      antd: e,
      dayjs: "es"
    };
  },
  et_EE: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./et_EE-CMGucCOx.js").then((t) => t.e), import("./et-F1lt8X9Y.js").then((t) => t.e)]);
    return {
      antd: e,
      dayjs: "et"
    };
  },
  eu_ES: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./eu_ES-C-McVRb1.js").then((t) => t.e),
      import("./eu-DzYrElie.js").then((t) => t.e)
      // Basque
    ]);
    return {
      antd: e,
      dayjs: "eu"
    };
  },
  fa_IR: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./fa_IR-CMTZOGwu.js").then((t) => t.f), import("./fa-MuHqKsAi.js").then((t) => t.f)]);
    return {
      antd: e,
      dayjs: "fa"
    };
  },
  fi_FI: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./fi_FI-DnUL4tje.js").then((t) => t.f), import("./fi-BLZIPJws.js").then((t) => t.f)]);
    return {
      antd: e,
      dayjs: "fi"
    };
  },
  fr_BE: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./fr_BE-B__dHRLL.js").then((t) => t.f), import("./fr-QFLgBR7O.js").then((t) => t.f)]);
    return {
      antd: e,
      dayjs: "fr"
    };
  },
  fr_CA: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./fr_CA-1JlVq6jk.js").then((t) => t.f), import("./fr-ca-DiwGCd2d.js").then((t) => t.f)]);
    return {
      antd: e,
      dayjs: "fr-ca"
    };
  },
  fr_FR: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./fr_FR-DCMvl8fn.js").then((t) => t.f), import("./fr-QFLgBR7O.js").then((t) => t.f)]);
    return {
      antd: e,
      dayjs: "fr"
    };
  },
  ga_IE: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./ga_IE-oFLW6EGF.js").then((t) => t.g),
      import("./ga-BlOYCkbp.js").then((t) => t.g)
      // Irish
    ]);
    return {
      antd: e,
      dayjs: "ga"
    };
  },
  gl_ES: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./gl_ES-CkPKwFVq.js").then((t) => t.g),
      import("./gl-CRrFPWxT.js").then((t) => t.g)
      // Galician
    ]);
    return {
      antd: e,
      dayjs: "gl"
    };
  },
  he_IL: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./he_IL-CH0UtWxM.js").then((t) => t.h), import("./he-Dr0mDeHz.js").then((t) => t.h)]);
    return {
      antd: e,
      dayjs: "he"
    };
  },
  hi_IN: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./hi_IN-DL6_EVHS.js").then((t) => t.h), import("./hi-SAyENmFt.js").then((t) => t.h)]);
    return {
      antd: e,
      dayjs: "hi"
    };
  },
  hr_HR: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./hr_HR-CvBz0Vas.js").then((t) => t.h), import("./hr-C63eA9_k.js").then((t) => t.h)]);
    return {
      antd: e,
      dayjs: "hr"
    };
  },
  hu_HU: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./hu_HU-DQIgx2_L.js").then((t) => t.h), import("./hu-Bzg75PyC.js").then((t) => t.h)]);
    return {
      antd: e,
      dayjs: "hu"
    };
  },
  hy_AM: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./hy_AM-C7XGH2IR.js").then((t) => t.h),
      import("./am-B96qab88.js").then((t) => t.a)
      // Armenian
    ]);
    return {
      antd: e,
      dayjs: "am"
    };
  },
  id_ID: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./id_ID-D52duEsz.js").then((t) => t.i), import("./id-fd2ook4M.js").then((t) => t.i)]);
    return {
      antd: e,
      dayjs: "id"
    };
  },
  is_IS: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./is_IS-DLkqxYoL.js").then((t) => t.i), import("./is-p1MaTJSG.js").then((t) => t.i)]);
    return {
      antd: e,
      dayjs: "is"
    };
  },
  it_IT: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./it_IT-CM4Zhf_O.js").then((t) => t.i), import("./it-9kyY4oJ2.js").then((t) => t.i)]);
    return {
      antd: e,
      dayjs: "it"
    };
  },
  ja_JP: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./ja_JP-BdMCJr7y.js").then((t) => t.j), import("./ja-DWFYlOx3.js").then((t) => t.j)]);
    return {
      antd: e,
      dayjs: "ja"
    };
  },
  ka_GE: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./ka_GE-ClE74dcm.js").then((t) => t.k),
      import("./ka-f9zbHA8I.js").then((t) => t.k)
      // Georgian
    ]);
    return {
      antd: e,
      dayjs: "ka"
    };
  },
  kk_KZ: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./kk_KZ-nSXq8N_Y.js").then((t) => t.k),
      import("./kk-ndTX82QM.js").then((t) => t.k)
      // Kazakh
    ]);
    return {
      antd: e,
      dayjs: "kk"
    };
  },
  km_KH: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./km_KH-DXN52svB.js").then((t) => t.k),
      import("./km-DctegywH.js").then((t) => t.k)
      // Khmer
    ]);
    return {
      antd: e,
      dayjs: "km"
    };
  },
  kmr_IQ: async () => {
    const [e] = await Promise.all([
      import("./kmr_IQ-BZ_Wo7uN.js").then((t) => t.k)
      // Not available in Day.js, so no need to load a locale file.
    ]);
    return {
      antd: e.default,
      dayjs: ""
    };
  },
  kn_IN: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./kn_IN-BmTNfTKv.js").then((t) => t.k),
      import("./kn-DRUYCpu1.js").then((t) => t.k)
      // Kannada
    ]);
    return {
      antd: e,
      dayjs: "kn"
    };
  },
  ko_KR: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./ko_KR-U23mPE0o.js").then((t) => t.k), import("./ko-Bsf883hY.js").then((t) => t.k)]);
    return {
      antd: e,
      dayjs: "ko"
    };
  },
  ku_IQ: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./ku_IQ-DzqB1Mub.js").then((t) => t.k),
      import("./ku-B-3RSQ6W.js").then((t) => t.k)
      // Kurdish (Central)
    ]);
    return {
      antd: e,
      dayjs: "ku"
    };
  },
  lt_LT: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./lt_LT-Cmd53EhQ.js").then((t) => t.l), import("./lt-Bhqix07r.js").then((t) => t.l)]);
    return {
      antd: e,
      dayjs: "lt"
    };
  },
  lv_LV: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./lv_LV-Pq4lhTOZ.js").then((t) => t.l), import("./lv-CMyxtw1M.js").then((t) => t.l)]);
    return {
      antd: e,
      dayjs: "lv"
    };
  },
  mk_MK: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./mk_MK-DlCphetd.js").then((t) => t.m),
      import("./mk-LUs-Z4w3.js").then((t) => t.m)
      // Macedonian
    ]);
    return {
      antd: e,
      dayjs: "mk"
    };
  },
  ml_IN: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./ml_IN-D0MALGH0.js").then((t) => t.m),
      import("./ml-CH5gm7YR.js").then((t) => t.m)
      // Malayalam
    ]);
    return {
      antd: e,
      dayjs: "ml"
    };
  },
  mn_MN: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./mn_MN-4X5CCHMY.js").then((t) => t.m),
      import("./mn-zdbcWmVn.js").then((t) => t.m)
      // Mongolian
    ]);
    return {
      antd: e,
      dayjs: "mn"
    };
  },
  ms_MY: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./ms_MY-CIJtL1z1.js").then((t) => t.m), import("./ms-B2pecfwA.js").then((t) => t.m)]);
    return {
      antd: e,
      dayjs: "ms"
    };
  },
  my_MM: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./my_MM-BR67rwIQ.js").then((t) => t.m),
      import("./my-D6g4dKTc.js").then((t) => t.m)
      // Burmese
    ]);
    return {
      antd: e,
      dayjs: "my"
    };
  },
  nb_NO: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./nb_NO-24dSEzWU.js").then((t) => t.n),
      import("./nb-D5MgNP9n.js").then((t) => t.n)
      // Norwegian Bokmål
    ]);
    return {
      antd: e,
      dayjs: "nb"
    };
  },
  ne_NP: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./ne_NP-CizQleKe.js").then((t) => t.n),
      import("./ne-DqLPeckE.js").then((t) => t.n)
      // Nepali
    ]);
    return {
      antd: e,
      dayjs: "ne"
    };
  },
  nl_BE: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./nl_BE-Dv5I_V8M.js").then((t) => t.n),
      import("./nl-be-BBOqOt0F.js").then((t) => t.n)
      // Dutch (Belgium)
    ]);
    return {
      antd: e,
      dayjs: "nl-be"
    };
  },
  nl_NL: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./nl_NL-CBsYdtF9.js").then((t) => t.n),
      import("./nl-BqZo17oc.js").then((t) => t.n)
      // Dutch (Netherlands)
    ]);
    return {
      antd: e,
      dayjs: "nl"
    };
  },
  pl_PL: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./pl_PL-BSISDCz4.js").then((t) => t.p), import("./pl-B1_Cv8uG.js").then((t) => t.p)]);
    return {
      antd: e,
      dayjs: "pl"
    };
  },
  pt_BR: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./pt_BR-DYfWdaT_.js").then((t) => t.p),
      import("./pt-br-BhOtjFOz.js").then((t) => t.p)
      // Portuguese (Brazil)
    ]);
    return {
      antd: e,
      dayjs: "pt-br"
    };
  },
  pt_PT: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./pt_PT-ZQC_I8TJ.js").then((t) => t.p),
      import("./pt-BetNgEhM.js").then((t) => t.p)
      // Portuguese (Portugal)
    ]);
    return {
      antd: e,
      dayjs: "pt"
    };
  },
  ro_RO: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./ro_RO-BX_VZRKU.js").then((t) => t.r), import("./ro-DoVnG5Sv.js").then((t) => t.r)]);
    return {
      antd: e,
      dayjs: "ro"
    };
  },
  ru_RU: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./ru_RU-lEAeoHj3.js").then((t) => t.r), import("./ru-DQqC-qfc.js").then((t) => t.r)]);
    return {
      antd: e,
      dayjs: "ru"
    };
  },
  si_LK: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./si_LK-CW3H_uQB.js").then((t) => t.s),
      import("./si-BzxzGXEs.js").then((t) => t.s)
      // Sinhala
    ]);
    return {
      antd: e,
      dayjs: "si"
    };
  },
  sk_SK: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./sk_SK-DnxRmA6n.js").then((t) => t.s), import("./sk-DIY9ohr2.js").then((t) => t.s)]);
    return {
      antd: e,
      dayjs: "sk"
    };
  },
  sl_SI: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./sl_SI-CkT7oHKC.js").then((t) => t.s), import("./sl-CnOlwphx.js").then((t) => t.s)]);
    return {
      antd: e,
      dayjs: "sl"
    };
  },
  sr_RS: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./sr_RS-BhMIM6jq.js").then((t) => t.s),
      import("./sr-C4urM0pI.js").then((t) => t.s)
      // Serbian
    ]);
    return {
      antd: e,
      dayjs: "sr"
    };
  },
  sv_SE: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./sv_SE-2jjeJ37Y.js").then((t) => t.s), import("./sv-DVz_Zwuq.js").then((t) => t.s)]);
    return {
      antd: e,
      dayjs: "sv"
    };
  },
  ta_IN: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./ta_IN-0cxuYCrv.js").then((t) => t.t),
      import("./ta-DazwZcte.js").then((t) => t.t)
      // Tamil
    ]);
    return {
      antd: e,
      dayjs: "ta"
    };
  },
  th_TH: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./th_TH-BJZH72e2.js").then((t) => t.t), import("./th-CTXpK6QQ.js").then((t) => t.t)]);
    return {
      antd: e,
      dayjs: "th"
    };
  },
  tk_TK: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./tk_TK-pj-Rh277.js").then((t) => t.t),
      import("./tk-VjxYCyI2.js").then((t) => t.t)
      // Turkmen
    ]);
    return {
      antd: e,
      dayjs: "tk"
    };
  },
  tr_TR: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./tr_TR-DAmsYTIw.js").then((t) => t.t), import("./tr-BvMzDD8s.js").then((t) => t.t)]);
    return {
      antd: e,
      dayjs: "tr"
    };
  },
  uk_UA: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./uk_UA-Dl14Crwx.js").then((t) => t.u),
      import("./uk-BMRDropg.js").then((t) => t.u)
      // Ukrainian
    ]);
    return {
      antd: e,
      dayjs: "uk"
    };
  },
  ur_PK: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./ur_PK-BlYLdYt6.js").then((t) => t.u),
      import("./ur-C97voRY1.js").then((t) => t.u)
      // Urdu
    ]);
    return {
      antd: e,
      dayjs: "ur"
    };
  },
  uz_UZ: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./uz_UZ-CfJvN0Fe.js").then((t) => t.u),
      import("./uz-AW2UhTNf.js").then((t) => t.u)
      // Uzbek
    ]);
    return {
      antd: e,
      dayjs: "uz"
    };
  },
  vi_VN: async () => {
    const [{
      default: e
    }] = await Promise.all([import("./vi_VN-BzWHNlZf.js").then((t) => t.v), import("./vi-9Sg3cOhz.js").then((t) => t.v)]);
    return {
      antd: e,
      dayjs: "vi"
    };
  },
  zh_CN: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./zh_CN-DOPsfa9S.js").then((t) => t.z),
      import("./zh-cn-DxZt4cir.js").then((t) => t.z)
      // Chinese (Simplified)
    ]);
    return {
      antd: e,
      dayjs: "zh-cn"
    };
  },
  zh_HK: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./zh_HK-CDC65gwu.js").then((t) => t.z),
      import("./zh-hk-wkLzqK1J.js").then((t) => t.z)
      // Chinese (Hong Kong)
    ]);
    return {
      antd: e,
      dayjs: "zh-hk"
    };
  },
  zh_TW: async () => {
    const [{
      default: e
    }] = await Promise.all([
      import("./zh_TW-CYBuNNK7.js").then((t) => t.z),
      import("./zh-tw-CpTqQsrq.js").then((t) => t.z)
      // Chinese (Taiwan)
    ]);
    return {
      antd: e,
      dayjs: "zh-tw"
    };
  }
}, cn = (e, t) => ln(e, (n) => {
  Object.keys(t).forEach((r) => {
    const a = r.split(".");
    let i = n;
    for (let o = 0; o < a.length - 1; o++) {
      const s = a[o];
      i[s] || (i[s] = {}), i = i[s];
    }
    i[a[a.length - 1]] = /* @__PURE__ */ j.jsx(at, {
      slot: t[r],
      clone: !0
    });
  });
}), fn = Ke(({
  slots: e,
  themeMode: t,
  id: n,
  className: r,
  style: a,
  locale: i = "en_US",
  getTargetContainer: o,
  getPopupContainer: s,
  renderEmpty: l,
  setSlotParams: h,
  children: _,
  component: c,
  ...p
}) => {
  var u;
  const [m, k] = zt(), E = {
    dark: t === "dark",
    ...((u = p.theme) == null ? void 0 : u.algorithm) || {}
  }, f = X(s), y = X(o), b = X(l);
  Tt(() => {
    i && Rt[i] && Rt[i]().then(({
      antd: g,
      dayjs: d
    }) => {
      k(g), re.locale(d);
    });
  }, [i]);
  const x = c || ne;
  return /* @__PURE__ */ j.jsx("div", {
    id: n,
    className: r,
    style: a,
    children: /* @__PURE__ */ j.jsx(ee, {
      hashPriority: "high",
      container: document.body,
      children: /* @__PURE__ */ j.jsx(x, {
        prefixCls: "ms-gr-ant",
        ...cn(p, e),
        locale: m,
        getPopupContainer: f,
        getTargetContainer: y,
        renderEmpty: e.renderEmpty ? Qe({
          slots: e,
          key: "renderEmpty"
        }) : b,
        theme: {
          cssVar: !0,
          ...p.theme,
          algorithm: Object.keys(E).map((g) => {
            switch (g) {
              case "dark":
                return E[g] ? ht.darkAlgorithm : null;
              case "compact":
                return E[g] ? ht.compactAlgorithm : null;
              default:
                return null;
            }
          }).filter(Boolean)
        },
        children: _
      })
    })
  });
});
export {
  fn as ConfigProvider,
  fn as default
};
