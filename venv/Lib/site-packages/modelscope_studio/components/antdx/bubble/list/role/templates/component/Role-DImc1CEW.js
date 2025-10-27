import { i as de, a as U, r as me, m as _e, b as pe, c as ge, d as be } from "./Index-BdTkL_os.js";
const I = window.ms_globals.React, he = window.ms_globals.React.forwardRef, ye = window.ms_globals.React.useRef, xe = window.ms_globals.React.useState, Pe = window.ms_globals.React.useEffect, Ce = window.ms_globals.internalContext.useContextPropsContext, Ee = window.ms_globals.internalContext.ContextPropsProvider, ve = window.ms_globals.ReactDOM.createPortal;
var Se = /\s/;
function Re(e) {
  for (var t = e.length; t-- && Se.test(e.charAt(t)); )
    ;
  return t;
}
var ke = /^\s+/;
function we(e) {
  return e && e.slice(0, Re(e) + 1).replace(ke, "");
}
var J = NaN, Ie = /^[-+]0x[0-9a-f]+$/i, Oe = /^0b[01]+$/i, Fe = /^0o[0-7]+$/i, Te = parseInt;
function X(e) {
  if (typeof e == "number")
    return e;
  if (de(e))
    return J;
  if (U(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = U(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = we(e);
  var n = Oe.test(e);
  return n || Fe.test(e) ? Te(e.slice(2), n ? 2 : 8) : Ie.test(e) ? J : +e;
}
var B = function() {
  return me.Date.now();
}, je = "Expected a function", Me = Math.max, Ke = Math.min;
function Le(e, t, n) {
  var s, o, r, i, l, p, m = 0, y = !1, u = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(je);
  t = X(t) || 0, U(n) && (y = !!n.leading, u = "maxWait" in n, r = u ? Me(X(n.maxWait) || 0, t) : r, f = "trailing" in n ? !!n.trailing : f);
  function a(d) {
    var x = s, P = o;
    return s = o = void 0, m = d, i = e.apply(P, x), i;
  }
  function C(d) {
    return m = d, l = setTimeout(g, t), y ? a(d) : i;
  }
  function E(d) {
    var x = d - p, P = d - m, j = t - x;
    return u ? Ke(j, r - P) : j;
  }
  function _(d) {
    var x = d - p, P = d - m;
    return p === void 0 || x >= t || x < 0 || u && P >= r;
  }
  function g() {
    var d = B();
    if (_(d))
      return h(d);
    l = setTimeout(g, E(d));
  }
  function h(d) {
    return l = void 0, f && s ? a(d) : (s = o = void 0, i);
  }
  function k() {
    l !== void 0 && clearTimeout(l), m = 0, s = p = o = l = void 0;
  }
  function v() {
    return l === void 0 ? i : h(B());
  }
  function S() {
    var d = B(), x = _(d);
    if (s = arguments, o = this, p = d, x) {
      if (l === void 0)
        return C(p);
      if (u)
        return clearTimeout(l), l = setTimeout(g, t), a(p);
    }
    return l === void 0 && (l = setTimeout(g, t)), i;
  }
  return S.cancel = k, S.flush = v, S;
}
function A() {
}
function Ne(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Ae(e, ...t) {
  if (e == null) {
    for (const s of t)
      s(void 0);
    return A;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function te(e) {
  let t;
  return Ae(e, (n) => t = n)(), t;
}
const O = [];
function R(e, t = A) {
  let n;
  const s = /* @__PURE__ */ new Set();
  function o(l) {
    if (Ne(e, l) && (e = l, n)) {
      const p = !O.length;
      for (const m of s)
        m[1](), O.push(m, e);
      if (p) {
        for (let m = 0; m < O.length; m += 2)
          O[m][0](O[m + 1]);
        O.length = 0;
      }
    }
  }
  function r(l) {
    o(l(e));
  }
  function i(l, p = A) {
    const m = [l, p];
    return s.add(m), s.size === 1 && (n = t(o, r) || A), l(e), () => {
      s.delete(m), s.size === 0 && n && (n(), n = null);
    };
  }
  return {
    set: o,
    update: r,
    subscribe: i
  };
}
const {
  getContext: We,
  setContext: qt
} = window.__gradio__svelte__internal, qe = "$$ms-gr-loading-status-key";
function ze() {
  const e = window.ms_globals.loadingKey++, t = We(qe);
  return (n) => {
    if (!t || !n)
      return;
    const {
      loadingStatusMap: s,
      options: o
    } = t, {
      generating: r,
      error: i
    } = te(o);
    (n == null ? void 0 : n.status) === "pending" || i && (n == null ? void 0 : n.status) === "error" || (r && (n == null ? void 0 : n.status)) === "generating" ? s.update(({
      map: l
    }) => (l.set(e, n), {
      map: l
    })) : s.update(({
      map: l
    }) => (l.delete(e), {
      map: l
    }));
  };
}
const {
  getContext: q,
  setContext: T
} = window.__gradio__svelte__internal, Be = "$$ms-gr-slots-key";
function De() {
  const e = R({});
  return T(Be, e);
}
const ne = "$$ms-gr-slot-params-mapping-fn-key";
function Ue() {
  return q(ne);
}
function He(e) {
  return T(ne, R(e));
}
const Ge = "$$ms-gr-slot-params-key";
function Ve() {
  const e = T(Ge, R({}));
  return (t, n) => {
    e.update((s) => typeof n == "function" ? {
      ...s,
      [t]: n(s[t])
    } : {
      ...s,
      [t]: n
    });
  };
}
const re = "$$ms-gr-sub-index-context-key";
function Je() {
  return q(re) || null;
}
function Y(e) {
  return T(re, e);
}
function Xe(e, t, n) {
  if (!Reflect.has(e, "as_item") || !Reflect.has(e, "_internal"))
    throw new Error("`as_item` and `_internal` is required");
  const s = oe(), o = Ue();
  He().set(void 0);
  const i = Qe({
    slot: void 0,
    index: e._internal.index,
    subIndex: e._internal.subIndex
  }), l = Je();
  typeof l == "number" && Y(void 0);
  const p = ze();
  typeof e._internal.subIndex == "number" && Y(e._internal.subIndex), s && s.subscribe((f) => {
    i.slotKey.set(f);
  }), Ye();
  const m = e.as_item, y = (f, a) => f ? {
    ..._e({
      ...f
    }, t),
    __render_slotParamsMappingFn: o ? te(o) : void 0,
    __render_as_item: a,
    __render_restPropsMapping: t
  } : void 0, u = R({
    ...e,
    _internal: {
      ...e._internal,
      index: l ?? e._internal.index
    },
    restProps: y(e.restProps, m),
    originalRestProps: e.restProps
  });
  return o && o.subscribe((f) => {
    u.update((a) => ({
      ...a,
      restProps: {
        ...a.restProps,
        __slotParamsMappingFn: f
      }
    }));
  }), [u, (f) => {
    var a;
    p((a = f.restProps) == null ? void 0 : a.loading_status), u.set({
      ...f,
      _internal: {
        ...f._internal,
        index: l ?? f._internal.index
      },
      restProps: y(f.restProps, f.as_item),
      originalRestProps: f.restProps
    });
  }];
}
const se = "$$ms-gr-slot-key";
function Ye() {
  T(se, R(void 0));
}
function oe() {
  return q(se);
}
const ie = "$$ms-gr-component-slot-context-key";
function Qe({
  slot: e,
  index: t,
  subIndex: n
}) {
  return T(ie, {
    slotKey: R(e),
    slotIndex: R(t),
    subSlotIndex: R(n)
  });
}
function zt() {
  return q(ie);
}
function Ze(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function Q(e, t = !1) {
  try {
    if (pe(e))
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
function $e(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var le = {
  exports: {}
}, z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et = I, tt = Symbol.for("react.element"), nt = Symbol.for("react.fragment"), rt = Object.prototype.hasOwnProperty, st = et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ot = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ce(e, t, n) {
  var s, o = {}, r = null, i = null;
  n !== void 0 && (r = "" + n), t.key !== void 0 && (r = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (s in t) rt.call(t, s) && !ot.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: tt,
    type: e,
    key: r,
    ref: i,
    props: o,
    _owner: st.current
  };
}
z.Fragment = nt;
z.jsx = ce;
z.jsxs = ce;
le.exports = z;
var K = le.exports;
const it = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function lt(e) {
  return e ? Object.keys(e).reduce((t, n) => {
    const s = e[n];
    return t[n] = ct(n, s), t;
  }, {}) : {};
}
function ct(e, t) {
  return typeof t == "number" && !it.includes(e) ? t + "px" : t;
}
function H(e) {
  const t = [], n = e.cloneNode(!1);
  if (e._reactElement) {
    const o = I.Children.toArray(e._reactElement.props.children).map((r) => {
      if (I.isValidElement(r) && r.props.__slot__) {
        const {
          portals: i,
          clonedElement: l
        } = H(r.props.el);
        return I.cloneElement(r, {
          ...r.props,
          el: l,
          children: [...I.Children.toArray(r.props.children), ...i]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(ve(I.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: o
    }), n)), {
      clonedElement: n,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((o) => {
    e.getEventListeners(o).forEach(({
      listener: i,
      type: l,
      useCapture: p
    }) => {
      n.addEventListener(l, i, p);
    });
  });
  const s = Array.from(e.childNodes);
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (r.nodeType === 1) {
      const {
        clonedElement: i,
        portals: l
      } = H(r);
      t.push(...l), n.appendChild(i);
    } else r.nodeType === 3 && n.appendChild(r.cloneNode());
  }
  return {
    clonedElement: n,
    portals: t
  };
}
function at(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const Z = he(({
  slot: e,
  clone: t,
  className: n,
  style: s,
  observeAttributes: o
}, r) => {
  const i = ye(), [l, p] = xe([]), {
    forceClone: m
  } = Ce(), y = m ? !0 : t;
  return Pe(() => {
    var E;
    if (!i.current || !e)
      return;
    let u = e;
    function f() {
      let _ = u;
      if (u.tagName.toLowerCase() === "svelte-slot" && u.children.length === 1 && u.children[0] && (_ = u.children[0], _.tagName.toLowerCase() === "react-portal-target" && _.children[0] && (_ = _.children[0])), at(r, _), n && _.classList.add(...n.split(" ")), s) {
        const g = lt(s);
        Object.keys(g).forEach((h) => {
          _.style[h] = g[h];
        });
      }
    }
    let a = null, C = null;
    if (y && window.MutationObserver) {
      let _ = function() {
        var v, S, d;
        (v = i.current) != null && v.contains(u) && ((S = i.current) == null || S.removeChild(u));
        const {
          portals: h,
          clonedElement: k
        } = H(e);
        u = k, p(h), u.style.display = "contents", C && clearTimeout(C), C = setTimeout(() => {
          f();
        }, 50), (d = i.current) == null || d.appendChild(u);
      };
      _();
      const g = Le(() => {
        _(), a == null || a.disconnect(), a == null || a.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      a = new window.MutationObserver(g), a.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      u.style.display = "contents", f(), (E = i.current) == null || E.appendChild(u);
    return () => {
      var _, g;
      u.style.display = "", (_ = i.current) != null && _.contains(u) && ((g = i.current) == null || g.removeChild(u)), a == null || a.disconnect();
    };
  }, [e, y, n, s, r, o, m]), I.createElement("react-child", {
    ref: i,
    style: {
      display: "contents"
    }
  }, ...l);
}), ut = ({
  children: e,
  ...t
}) => /* @__PURE__ */ K.jsx(K.Fragment, {
  children: e(t)
});
function ft(e) {
  return I.createElement(ut, {
    children: e
  });
}
function D(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? ft((n) => /* @__PURE__ */ K.jsx(Ee, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ K.jsx(Z, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...n
    })
  })) : /* @__PURE__ */ K.jsx(Z, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
var ae = {
  exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = "", i = 0; i < arguments.length; i++) {
        var l = arguments[i];
        l && (r = o(r, s(l)));
      }
      return r;
    }
    function s(r) {
      if (typeof r == "string" || typeof r == "number")
        return r;
      if (typeof r != "object")
        return "";
      if (Array.isArray(r))
        return n.apply(null, r);
      if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]"))
        return r.toString();
      var i = "";
      for (var l in r)
        t.call(r, l) && r[l] && (i = o(i, l));
      return i;
    }
    function o(r, i) {
      return i ? r ? r + " " + i : r + i : r;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(ae);
var dt = ae.exports;
const mt = /* @__PURE__ */ $e(dt), {
  SvelteComponent: _t,
  assign: G,
  check_outros: pt,
  claim_component: gt,
  component_subscribe: N,
  compute_rest_props: $,
  create_component: bt,
  create_slot: ht,
  destroy_component: yt,
  detach: ue,
  empty: W,
  exclude_internal_props: xt,
  flush: w,
  get_all_dirty_from_scope: Pt,
  get_slot_changes: Ct,
  get_spread_object: Et,
  get_spread_update: vt,
  group_outros: St,
  handle_promise: Rt,
  init: kt,
  insert_hydration: fe,
  mount_component: wt,
  noop: b,
  safe_not_equal: It,
  transition_in: F,
  transition_out: L,
  update_await_block_branch: Ot,
  update_slot_base: Ft
} = window.__gradio__svelte__internal;
function Tt(e) {
  return {
    c: b,
    l: b,
    m: b,
    p: b,
    i: b,
    o: b,
    d: b
  };
}
function jt(e) {
  let t, n;
  const s = [
    /*itemProps*/
    e[1].props,
    {
      slots: (
        /*itemProps*/
        e[1].slots
      )
    },
    {
      itemIndex: (
        /*$mergedProps*/
        e[0]._internal.index || 0
      )
    },
    {
      itemSlotKey: (
        /*$slotKey*/
        e[2]
      )
    }
  ];
  let o = {
    $$slots: {
      default: [Mt]
    },
    $$scope: {
      ctx: e
    }
  };
  for (let r = 0; r < s.length; r += 1)
    o = G(o, s[r]);
  return t = new /*BubbleListRole*/
  e[23]({
    props: o
  }), {
    c() {
      bt(t.$$.fragment);
    },
    l(r) {
      gt(t.$$.fragment, r);
    },
    m(r, i) {
      wt(t, r, i), n = !0;
    },
    p(r, i) {
      const l = i & /*itemProps, $mergedProps, $slotKey*/
      7 ? vt(s, [i & /*itemProps*/
      2 && Et(
        /*itemProps*/
        r[1].props
      ), i & /*itemProps*/
      2 && {
        slots: (
          /*itemProps*/
          r[1].slots
        )
      }, i & /*$mergedProps*/
      1 && {
        itemIndex: (
          /*$mergedProps*/
          r[0]._internal.index || 0
        )
      }, i & /*$slotKey*/
      4 && {
        itemSlotKey: (
          /*$slotKey*/
          r[2]
        )
      }]) : {};
      i & /*$$scope, $mergedProps*/
      524289 && (l.$$scope = {
        dirty: i,
        ctx: r
      }), t.$set(l);
    },
    i(r) {
      n || (F(t.$$.fragment, r), n = !0);
    },
    o(r) {
      L(t.$$.fragment, r), n = !1;
    },
    d(r) {
      yt(t, r);
    }
  };
}
function ee(e) {
  let t;
  const n = (
    /*#slots*/
    e[18].default
  ), s = ht(
    n,
    e,
    /*$$scope*/
    e[19],
    null
  );
  return {
    c() {
      s && s.c();
    },
    l(o) {
      s && s.l(o);
    },
    m(o, r) {
      s && s.m(o, r), t = !0;
    },
    p(o, r) {
      s && s.p && (!t || r & /*$$scope*/
      524288) && Ft(
        s,
        n,
        o,
        /*$$scope*/
        o[19],
        t ? Ct(
          n,
          /*$$scope*/
          o[19],
          r,
          null
        ) : Pt(
          /*$$scope*/
          o[19]
        ),
        null
      );
    },
    i(o) {
      t || (F(s, o), t = !0);
    },
    o(o) {
      L(s, o), t = !1;
    },
    d(o) {
      s && s.d(o);
    }
  };
}
function Mt(e) {
  let t, n, s = (
    /*$mergedProps*/
    e[0].visible && ee(e)
  );
  return {
    c() {
      s && s.c(), t = W();
    },
    l(o) {
      s && s.l(o), t = W();
    },
    m(o, r) {
      s && s.m(o, r), fe(o, t, r), n = !0;
    },
    p(o, r) {
      /*$mergedProps*/
      o[0].visible ? s ? (s.p(o, r), r & /*$mergedProps*/
      1 && F(s, 1)) : (s = ee(o), s.c(), F(s, 1), s.m(t.parentNode, t)) : s && (St(), L(s, 1, 1, () => {
        s = null;
      }), pt());
    },
    i(o) {
      n || (F(s), n = !0);
    },
    o(o) {
      L(s), n = !1;
    },
    d(o) {
      o && ue(t), s && s.d(o);
    }
  };
}
function Kt(e) {
  return {
    c: b,
    l: b,
    m: b,
    p: b,
    i: b,
    o: b,
    d: b
  };
}
function Lt(e) {
  let t, n, s = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Kt,
    then: jt,
    catch: Tt,
    value: 23,
    blocks: [, , ,]
  };
  return Rt(
    /*AwaitedBubbleListRole*/
    e[3],
    s
  ), {
    c() {
      t = W(), s.block.c();
    },
    l(o) {
      t = W(), s.block.l(o);
    },
    m(o, r) {
      fe(o, t, r), s.block.m(o, s.anchor = r), s.mount = () => t.parentNode, s.anchor = t, n = !0;
    },
    p(o, [r]) {
      e = o, Ot(s, e, r);
    },
    i(o) {
      n || (F(s.block), n = !0);
    },
    o(o) {
      for (let r = 0; r < 3; r += 1) {
        const i = s.blocks[r];
        L(i);
      }
      n = !1;
    },
    d(o) {
      o && ue(t), s.block.d(o), s.token = null, s = null;
    }
  };
}
function Nt(e, t, n) {
  const s = ["gradio", "props", "_internal", "as_item", "visible", "elem_id", "elem_classes", "elem_style"];
  let o = $(t, s), r, i, l, p, {
    $$slots: m = {},
    $$scope: y
  } = t;
  const u = ge(() => import("./bubble.list.role-DdZTqoaQ.js"));
  let {
    gradio: f
  } = t, {
    props: a = {}
  } = t;
  const C = R(a);
  N(e, C, (c) => n(17, l = c));
  let {
    _internal: E = {}
  } = t, {
    as_item: _
  } = t, {
    visible: g = !0
  } = t, {
    elem_id: h = ""
  } = t, {
    elem_classes: k = []
  } = t, {
    elem_style: v = {}
  } = t;
  const S = oe();
  N(e, S, (c) => n(2, p = c));
  const [d, x] = Xe({
    gradio: f,
    props: l,
    _internal: E,
    visible: g,
    elem_id: h,
    elem_classes: k,
    elem_style: v,
    as_item: _,
    restProps: o
  });
  N(e, d, (c) => n(0, i = c));
  const P = Ve(), j = De();
  N(e, j, (c) => n(16, r = c));
  let V = {
    props: {},
    slots: {}
  };
  return e.$$set = (c) => {
    t = G(G({}, t), xt(c)), n(22, o = $(t, s)), "gradio" in c && n(8, f = c.gradio), "props" in c && n(9, a = c.props), "_internal" in c && n(10, E = c._internal), "as_item" in c && n(11, _ = c.as_item), "visible" in c && n(12, g = c.visible), "elem_id" in c && n(13, h = c.elem_id), "elem_classes" in c && n(14, k = c.elem_classes), "elem_style" in c && n(15, v = c.elem_style), "$$scope" in c && n(19, y = c.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*props*/
    512 && C.update((c) => ({
      ...c,
      ...a
    })), x({
      gradio: f,
      props: l,
      _internal: E,
      visible: g,
      elem_id: h,
      elem_classes: k,
      elem_style: v,
      as_item: _,
      restProps: o
    }), e.$$.dirty & /*$mergedProps, $slots*/
    65537) {
      let c = i.props.avatar || i.restProps.avatar;
      r.avatar ? c = (...M) => D(r.avatar, {
        clone: !0,
        forceClone: !0,
        params: M
      }) : (r["avatar.icon"] || r["avatar.src"]) && (c = {
        ...c || {},
        icon: r["avatar.icon"] ? (...M) => D(r["avatar.icon"], {
          clone: !0,
          forceClone: !0,
          params: M
        }) : c == null ? void 0 : c.icon,
        src: r["avatar.src"] ? (...M) => D(r["avatar.src"], {
          clone: !0,
          forceClone: !0,
          params: M
        }) : c == null ? void 0 : c.src
      }), n(1, V = {
        props: {
          style: i.elem_style,
          className: mt(i.elem_classes, "ms-gr-antdx-bubble-list-role"),
          id: i.elem_id,
          ...i.restProps,
          ...i.props,
          ...be(i, {
            typing_complete: "typingComplete"
          }),
          avatar: c,
          loadingRender: Q(i.props.loadingRender || i.restProps.loadingRender),
          messageRender: Q(i.props.messageRender || i.restProps.messageRender)
        },
        slots: {
          ...r,
          "avatar.icon": void 0,
          "avatar.src": void 0,
          avatar: void 0,
          loadingRender: {
            el: r.loadingRender,
            clone: !0,
            callback: P
          },
          header: {
            el: r.header,
            clone: !0,
            callback: P
          },
          footer: {
            el: r.footer,
            clone: !0,
            callback: P
          },
          messageRender: {
            el: r.messageRender,
            clone: !0,
            callback: P
          }
        }
      });
    }
  }, [i, V, p, u, C, S, d, j, f, a, E, _, g, h, k, v, r, l, m, y];
}
class At extends _t {
  constructor(t) {
    super(), kt(this, t, Nt, Lt, It, {
      gradio: 8,
      props: 9,
      _internal: 10,
      as_item: 11,
      visible: 12,
      elem_id: 13,
      elem_classes: 14,
      elem_style: 15
    });
  }
  get gradio() {
    return this.$$.ctx[8];
  }
  set gradio(t) {
    this.$$set({
      gradio: t
    }), w();
  }
  get props() {
    return this.$$.ctx[9];
  }
  set props(t) {
    this.$$set({
      props: t
    }), w();
  }
  get _internal() {
    return this.$$.ctx[10];
  }
  set _internal(t) {
    this.$$set({
      _internal: t
    }), w();
  }
  get as_item() {
    return this.$$.ctx[11];
  }
  set as_item(t) {
    this.$$set({
      as_item: t
    }), w();
  }
  get visible() {
    return this.$$.ctx[12];
  }
  set visible(t) {
    this.$$set({
      visible: t
    }), w();
  }
  get elem_id() {
    return this.$$.ctx[13];
  }
  set elem_id(t) {
    this.$$set({
      elem_id: t
    }), w();
  }
  get elem_classes() {
    return this.$$.ctx[14];
  }
  set elem_classes(t) {
    this.$$set({
      elem_classes: t
    }), w();
  }
  get elem_style() {
    return this.$$.ctx[15];
  }
  set elem_style(t) {
    this.$$set({
      elem_style: t
    }), w();
  }
}
const Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: At
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  Bt as R,
  zt as g,
  K as j,
  R as w
};
