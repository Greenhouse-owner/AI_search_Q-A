import { m as $, i as ee } from "./Index-Blgvqhgg.js";
const D = window.ms_globals.antd.ConfigProvider, P = window.ms_globals.React;
function j() {
}
function te(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ne(t, ...e) {
  if (t == null) {
    for (const n of e)
      n(void 0);
    return j;
  }
  const o = t.subscribe(...e);
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
function G(t) {
  let e;
  return ne(t, (o) => e = o)(), e;
}
const h = [];
function p(t, e = j) {
  let o;
  const n = /* @__PURE__ */ new Set();
  function r(l) {
    if (te(t, l) && (t = l, o)) {
      const d = !h.length;
      for (const u of n)
        u[1](), h.push(u, t);
      if (d) {
        for (let u = 0; u < h.length; u += 2)
          h[u][0](h[u + 1]);
        h.length = 0;
      }
    }
  }
  function s(l) {
    r(l(t));
  }
  function i(l, d = j) {
    const u = [l, d];
    return n.add(u), n.size === 1 && (o = e(r, s) || j), l(t), () => {
      n.delete(u), n.size === 0 && o && (o(), o = null);
    };
  }
  return {
    set: r,
    update: s,
    subscribe: i
  };
}
const {
  getContext: se,
  setContext: oe
} = window.__gradio__svelte__internal, re = "$$ms-gr-config-type-key";
function ie(t) {
  oe(re, t);
}
const le = "$$ms-gr-loading-status-key";
function ce() {
  const t = window.ms_globals.loadingKey++, e = se(le);
  return (o) => {
    if (!e || !o)
      return;
    const {
      loadingStatusMap: n,
      options: r
    } = e, {
      generating: s,
      error: i
    } = G(r);
    (o == null ? void 0 : o.status) === "pending" || i && (o == null ? void 0 : o.status) === "error" || (s && (o == null ? void 0 : o.status)) === "generating" ? n.update(({
      map: l
    }) => (l.set(t, o), {
      map: l
    })) : n.update(({
      map: l
    }) => (l.delete(t), {
      map: l
    }));
  };
}
const {
  getContext: I,
  setContext: x
} = window.__gradio__svelte__internal, ae = "$$ms-gr-slots-key";
function ue() {
  const t = p({});
  return x(ae, t);
}
const V = "$$ms-gr-slot-params-mapping-fn-key";
function fe() {
  return I(V);
}
function me(t) {
  return x(V, p(t));
}
const _e = "$$ms-gr-slot-params-key";
function de() {
  const t = x(_e, p({}));
  return (e, o) => {
    t.update((n) => typeof o == "function" ? {
      ...n,
      [e]: o(n[e])
    } : {
      ...n,
      [e]: o
    });
  };
}
const B = "$$ms-gr-sub-index-context-key";
function pe() {
  return I(B) || null;
}
function q(t) {
  return x(B, t);
}
function ge(t, e, o) {
  if (!Reflect.has(t, "as_item") || !Reflect.has(t, "_internal"))
    throw new Error("`as_item` and `_internal` is required");
  const n = he(), r = fe();
  me().set(void 0);
  const i = Pe({
    slot: void 0,
    index: t._internal.index,
    subIndex: t._internal.subIndex
  }), l = pe();
  typeof l == "number" && q(void 0);
  const d = ce();
  typeof t._internal.subIndex == "number" && q(t._internal.subIndex), n && n.subscribe((a) => {
    i.slotKey.set(a);
  }), be();
  const u = t.as_item, b = (a, m) => a ? {
    ...$({
      ...a
    }, e),
    __render_slotParamsMappingFn: r ? G(r) : void 0,
    __render_as_item: m,
    __render_restPropsMapping: e
  } : void 0, _ = p({
    ...t,
    _internal: {
      ...t._internal,
      index: l ?? t._internal.index
    },
    restProps: b(t.restProps, u),
    originalRestProps: t.restProps
  });
  return r && r.subscribe((a) => {
    _.update((m) => ({
      ...m,
      restProps: {
        ...m.restProps,
        __slotParamsMappingFn: a
      }
    }));
  }), [_, (a) => {
    var m;
    d((m = a.restProps) == null ? void 0 : m.loading_status), _.set({
      ...a,
      _internal: {
        ...a._internal,
        index: l ?? a._internal.index
      },
      restProps: b(a.restProps, a.as_item),
      originalRestProps: a.restProps
    });
  }];
}
const H = "$$ms-gr-slot-key";
function be() {
  x(H, p(void 0));
}
function he() {
  return I(H);
}
const J = "$$ms-gr-component-slot-context-key";
function Pe({
  slot: t,
  index: e,
  subIndex: o
}) {
  return x(J, {
    slotKey: p(t),
    slotIndex: p(e),
    subSlotIndex: p(o)
  });
}
function We() {
  return I(J);
}
var Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ye(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Q = {
  exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function o() {
      for (var s = "", i = 0; i < arguments.length; i++) {
        var l = arguments[i];
        l && (s = r(s, n(l)));
      }
      return s;
    }
    function n(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return o.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var i = "";
      for (var l in s)
        e.call(s, l) && s[l] && (i = r(i, l));
      return i;
    }
    function r(s, i) {
      return i ? s ? s + " " + i : s + i : s;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(Q);
var xe = Q.exports;
const E = /* @__PURE__ */ ye(xe), Ce = /* @__PURE__ */ P.createContext({});
function T() {
  return T = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var o = arguments[e];
      for (var n in o) ({}).hasOwnProperty.call(o, n) && (t[n] = o[n]);
    }
    return t;
  }, T.apply(null, arguments);
}
function ve() {
  const {
    getPrefixCls: t,
    direction: e,
    csp: o,
    iconPrefixCls: n,
    theme: r
  } = P.useContext(D.ConfigContext);
  return {
    theme: r,
    getPrefixCls: t,
    direction: e,
    csp: o,
    iconPrefixCls: n
  };
}
const ke = (t) => {
  const {
    attachments: e,
    bubble: o,
    conversations: n,
    prompts: r,
    sender: s,
    suggestion: i,
    thoughtChain: l,
    welcome: d,
    theme: u,
    ...b
  } = t, {
    theme: _
  } = ve(), a = P.useMemo(() => ({
    attachments: e,
    bubble: o,
    conversations: n,
    prompts: r,
    sender: s,
    suggestion: i,
    thoughtChain: l,
    welcome: d
  }), [e, o, n, r, s, i, l, d]), m = P.useMemo(() => ({
    ..._,
    ...u
  }), [_, u]);
  return /* @__PURE__ */ P.createElement(Ce.Provider, {
    value: a
  }, /* @__PURE__ */ P.createElement(D, T({}, b, {
    // Note:  we can not set `cssVar` by default.
    //        Since when developer not wrap with XProvider,
    //        the generate css is still using css var but no css var injected.
    // Origin comment: antdx enable cssVar by default, and antd v6 will enable cssVar by default
    // theme={{ cssVar: true, ...antdConfProps?.theme }}
    theme: m
  })));
}, {
  SvelteComponent: Se,
  assign: R,
  check_outros: Me,
  claim_component: Ke,
  component_subscribe: O,
  compute_rest_props: z,
  create_component: Fe,
  create_slot: je,
  destroy_component: we,
  detach: U,
  empty: w,
  exclude_internal_props: Ie,
  flush: g,
  get_all_dirty_from_scope: Oe,
  get_slot_changes: Te,
  get_spread_object: A,
  get_spread_update: Re,
  group_outros: Xe,
  handle_promise: Ne,
  init: qe,
  insert_hydration: W,
  mount_component: Ee,
  noop: f,
  safe_not_equal: ze,
  transition_in: y,
  transition_out: v,
  update_await_block_branch: Ae,
  update_slot_base: Le
} = window.__gradio__svelte__internal;
function L(t) {
  let e, o, n = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Be,
    then: Ge,
    catch: De,
    value: 20,
    blocks: [, , ,]
  };
  return Ne(
    /*AwaitedXProvider*/
    t[2],
    n
  ), {
    c() {
      e = w(), n.block.c();
    },
    l(r) {
      e = w(), n.block.l(r);
    },
    m(r, s) {
      W(r, e, s), n.block.m(r, n.anchor = s), n.mount = () => e.parentNode, n.anchor = e, o = !0;
    },
    p(r, s) {
      t = r, Ae(n, t, s);
    },
    i(r) {
      o || (y(n.block), o = !0);
    },
    o(r) {
      for (let s = 0; s < 3; s += 1) {
        const i = n.blocks[s];
        v(i);
      }
      o = !1;
    },
    d(r) {
      r && U(e), n.block.d(r), n.token = null, n = null;
    }
  };
}
function De(t) {
  return {
    c: f,
    l: f,
    m: f,
    p: f,
    i: f,
    o: f,
    d: f
  };
}
function Ge(t) {
  let e, o;
  const n = [
    {
      className: E(
        "ms-gr-antdx-x-provider",
        /*$mergedProps*/
        t[0].elem_classes
      )
    },
    {
      id: (
        /*$mergedProps*/
        t[0].elem_id
      )
    },
    {
      style: (
        /*$mergedProps*/
        t[0].elem_style
      )
    },
    /*$mergedProps*/
    t[0].restProps,
    /*$mergedProps*/
    t[0].props,
    {
      slots: (
        /*$slots*/
        t[1]
      )
    },
    {
      component: ke
    },
    {
      themeMode: (
        /*$mergedProps*/
        t[0].gradio.theme
      )
    },
    {
      setSlotParams: (
        /*setSlotParams*/
        t[5]
      )
    }
  ];
  let r = {
    $$slots: {
      default: [Ve]
    },
    $$scope: {
      ctx: t
    }
  };
  for (let s = 0; s < n.length; s += 1)
    r = R(r, n[s]);
  return e = new /*XProvider*/
  t[20]({
    props: r
  }), {
    c() {
      Fe(e.$$.fragment);
    },
    l(s) {
      Ke(e.$$.fragment, s);
    },
    m(s, i) {
      Ee(e, s, i), o = !0;
    },
    p(s, i) {
      const l = i & /*$mergedProps, $slots, setSlotParams*/
      35 ? Re(n, [i & /*$mergedProps*/
      1 && {
        className: E(
          "ms-gr-antdx-x-provider",
          /*$mergedProps*/
          s[0].elem_classes
        )
      }, i & /*$mergedProps*/
      1 && {
        id: (
          /*$mergedProps*/
          s[0].elem_id
        )
      }, i & /*$mergedProps*/
      1 && {
        style: (
          /*$mergedProps*/
          s[0].elem_style
        )
      }, i & /*$mergedProps*/
      1 && A(
        /*$mergedProps*/
        s[0].restProps
      ), i & /*$mergedProps*/
      1 && A(
        /*$mergedProps*/
        s[0].props
      ), i & /*$slots*/
      2 && {
        slots: (
          /*$slots*/
          s[1]
        )
      }, n[6], i & /*$mergedProps*/
      1 && {
        themeMode: (
          /*$mergedProps*/
          s[0].gradio.theme
        )
      }, i & /*setSlotParams*/
      32 && {
        setSlotParams: (
          /*setSlotParams*/
          s[5]
        )
      }]) : {};
      i & /*$$scope*/
      131072 && (l.$$scope = {
        dirty: i,
        ctx: s
      }), e.$set(l);
    },
    i(s) {
      o || (y(e.$$.fragment, s), o = !0);
    },
    o(s) {
      v(e.$$.fragment, s), o = !1;
    },
    d(s) {
      we(e, s);
    }
  };
}
function Ve(t) {
  let e;
  const o = (
    /*#slots*/
    t[16].default
  ), n = je(
    o,
    t,
    /*$$scope*/
    t[17],
    null
  );
  return {
    c() {
      n && n.c();
    },
    l(r) {
      n && n.l(r);
    },
    m(r, s) {
      n && n.m(r, s), e = !0;
    },
    p(r, s) {
      n && n.p && (!e || s & /*$$scope*/
      131072) && Le(
        n,
        o,
        r,
        /*$$scope*/
        r[17],
        e ? Te(
          o,
          /*$$scope*/
          r[17],
          s,
          null
        ) : Oe(
          /*$$scope*/
          r[17]
        ),
        null
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      v(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Be(t) {
  return {
    c: f,
    l: f,
    m: f,
    p: f,
    i: f,
    o: f,
    d: f
  };
}
function He(t) {
  let e, o, n = (
    /*$mergedProps*/
    t[0].visible && L(t)
  );
  return {
    c() {
      n && n.c(), e = w();
    },
    l(r) {
      n && n.l(r), e = w();
    },
    m(r, s) {
      n && n.m(r, s), W(r, e, s), o = !0;
    },
    p(r, [s]) {
      /*$mergedProps*/
      r[0].visible ? n ? (n.p(r, s), s & /*$mergedProps*/
      1 && y(n, 1)) : (n = L(r), n.c(), y(n, 1), n.m(e.parentNode, e)) : n && (Xe(), v(n, 1, 1, () => {
        n = null;
      }), Me());
    },
    i(r) {
      o || (y(n), o = !0);
    },
    o(r) {
      v(n), o = !1;
    },
    d(r) {
      r && U(e), n && n.d(r);
    }
  };
}
function Je(t, e, o) {
  const n = ["gradio", "props", "as_item", "visible", "elem_id", "elem_classes", "elem_style", "_internal"];
  let r = z(e, n), s, i, l, {
    $$slots: d = {},
    $$scope: u
  } = e;
  const b = ee(() => import("./config-provider-BUoLgr4a.js"));
  let {
    gradio: _
  } = e, {
    props: a = {}
  } = e;
  const m = p(a);
  O(t, m, (c) => o(15, s = c));
  let {
    as_item: C
  } = e, {
    visible: k = !0
  } = e, {
    elem_id: S = ""
  } = e, {
    elem_classes: M = []
  } = e, {
    elem_style: K = {}
  } = e, {
    _internal: F = {}
  } = e;
  const [X, Y] = ge({
    gradio: _,
    props: s,
    visible: k,
    _internal: F,
    elem_id: S,
    elem_classes: M,
    elem_style: K,
    as_item: C,
    restProps: r
  });
  O(t, X, (c) => o(0, i = c));
  const Z = de(), N = ue();
  return O(t, N, (c) => o(1, l = c)), ie("antd"), t.$$set = (c) => {
    e = R(R({}, e), Ie(c)), o(19, r = z(e, n)), "gradio" in c && o(7, _ = c.gradio), "props" in c && o(8, a = c.props), "as_item" in c && o(9, C = c.as_item), "visible" in c && o(10, k = c.visible), "elem_id" in c && o(11, S = c.elem_id), "elem_classes" in c && o(12, M = c.elem_classes), "elem_style" in c && o(13, K = c.elem_style), "_internal" in c && o(14, F = c._internal), "$$scope" in c && o(17, u = c.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*props*/
    256 && m.update((c) => ({
      ...c,
      ...a
    })), Y({
      gradio: _,
      props: s,
      visible: k,
      _internal: F,
      elem_id: S,
      elem_classes: M,
      elem_style: K,
      as_item: C,
      restProps: r
    });
  }, [i, l, b, m, X, Z, N, _, a, C, k, S, M, K, F, s, d, u];
}
class Qe extends Se {
  constructor(e) {
    super(), qe(this, e, Je, He, ze, {
      gradio: 7,
      props: 8,
      as_item: 9,
      visible: 10,
      elem_id: 11,
      elem_classes: 12,
      elem_style: 13,
      _internal: 14
    });
  }
  get gradio() {
    return this.$$.ctx[7];
  }
  set gradio(e) {
    this.$$set({
      gradio: e
    }), g();
  }
  get props() {
    return this.$$.ctx[8];
  }
  set props(e) {
    this.$$set({
      props: e
    }), g();
  }
  get as_item() {
    return this.$$.ctx[9];
  }
  set as_item(e) {
    this.$$set({
      as_item: e
    }), g();
  }
  get visible() {
    return this.$$.ctx[10];
  }
  set visible(e) {
    this.$$set({
      visible: e
    }), g();
  }
  get elem_id() {
    return this.$$.ctx[11];
  }
  set elem_id(e) {
    this.$$set({
      elem_id: e
    }), g();
  }
  get elem_classes() {
    return this.$$.ctx[12];
  }
  set elem_classes(e) {
    this.$$set({
      elem_classes: e
    }), g();
  }
  get elem_style() {
    return this.$$.ctx[13];
  }
  set elem_style(e) {
    this.$$set({
      elem_style: e
    }), g();
  }
  get _internal() {
    return this.$$.ctx[14];
  }
  set _internal(e) {
    this.$$set({
      _internal: e
    }), g();
  }
}
const Ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qe
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  Ze as X,
  ye as a,
  Ye as c,
  We as g,
  p as w
};
