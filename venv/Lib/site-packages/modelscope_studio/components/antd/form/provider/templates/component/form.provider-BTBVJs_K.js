import { w as m, g as G } from "./Index-CfhyufuL.js";
const B = window.ms_globals.React, h = window.ms_globals.ReactDOM.createPortal, J = window.ms_globals.antd.Form;
var T = {
  exports: {}
}, g = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M = B, Y = Symbol.for("react.element"), H = Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, X = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Z = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function j(l, s, n) {
  var r, o = {}, e = null, t = null;
  n !== void 0 && (e = "" + n), s.key !== void 0 && (e = "" + s.key), s.ref !== void 0 && (t = s.ref);
  for (r in s) Q.call(s, r) && !Z.hasOwnProperty(r) && (o[r] = s[r]);
  if (l && l.defaultProps) for (r in s = l.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Y,
    type: l,
    key: e,
    ref: t,
    props: o,
    _owner: X.current
  };
}
g.Fragment = H;
g.jsx = j;
g.jsxs = j;
T.exports = g;
var F = T.exports;
const {
  SvelteComponent: $,
  assign: k,
  binding_callbacks: I,
  check_outros: ee,
  children: C,
  claim_element: D,
  claim_space: te,
  component_subscribe: S,
  compute_slots: se,
  create_slot: oe,
  detach: i,
  element: L,
  empty: E,
  exclude_internal_props: R,
  get_all_dirty_from_scope: re,
  get_slot_changes: le,
  group_outros: ne,
  init: ae,
  insert_hydration: p,
  safe_not_equal: ce,
  set_custom_element_data: A,
  space: _e,
  transition_in: b,
  transition_out: w,
  update_slot_base: ie
} = window.__gradio__svelte__internal, {
  beforeUpdate: ue,
  getContext: fe,
  onDestroy: de,
  setContext: me
} = window.__gradio__svelte__internal;
function O(l) {
  let s, n;
  const r = (
    /*#slots*/
    l[7].default
  ), o = oe(
    r,
    l,
    /*$$scope*/
    l[6],
    null
  );
  return {
    c() {
      s = L("svelte-slot"), o && o.c(), this.h();
    },
    l(e) {
      s = D(e, "SVELTE-SLOT", {
        class: !0
      });
      var t = C(s);
      o && o.l(t), t.forEach(i), this.h();
    },
    h() {
      A(s, "class", "svelte-1rt0kpf");
    },
    m(e, t) {
      p(e, s, t), o && o.m(s, null), l[9](s), n = !0;
    },
    p(e, t) {
      o && o.p && (!n || t & /*$$scope*/
      64) && ie(
        o,
        r,
        e,
        /*$$scope*/
        e[6],
        n ? le(
          r,
          /*$$scope*/
          e[6],
          t,
          null
        ) : re(
          /*$$scope*/
          e[6]
        ),
        null
      );
    },
    i(e) {
      n || (b(o, e), n = !0);
    },
    o(e) {
      w(o, e), n = !1;
    },
    d(e) {
      e && i(s), o && o.d(e), l[9](null);
    }
  };
}
function pe(l) {
  let s, n, r, o, e = (
    /*$$slots*/
    l[4].default && O(l)
  );
  return {
    c() {
      s = L("react-portal-target"), n = _e(), e && e.c(), r = E(), this.h();
    },
    l(t) {
      s = D(t, "REACT-PORTAL-TARGET", {
        class: !0
      }), C(s).forEach(i), n = te(t), e && e.l(t), r = E(), this.h();
    },
    h() {
      A(s, "class", "svelte-1rt0kpf");
    },
    m(t, c) {
      p(t, s, c), l[8](s), p(t, n, c), e && e.m(t, c), p(t, r, c), o = !0;
    },
    p(t, [c]) {
      /*$$slots*/
      t[4].default ? e ? (e.p(t, c), c & /*$$slots*/
      16 && b(e, 1)) : (e = O(t), e.c(), b(e, 1), e.m(r.parentNode, r)) : e && (ne(), w(e, 1, 1, () => {
        e = null;
      }), ee());
    },
    i(t) {
      o || (b(e), o = !0);
    },
    o(t) {
      w(e), o = !1;
    },
    d(t) {
      t && (i(s), i(n), i(r)), l[8](null), e && e.d(t);
    }
  };
}
function x(l) {
  const {
    svelteInit: s,
    ...n
  } = l;
  return n;
}
function be(l, s, n) {
  let r, o, {
    $$slots: e = {},
    $$scope: t
  } = s;
  const c = se(e);
  let {
    svelteInit: _
  } = s;
  const u = m(x(s)), f = m();
  S(l, f, (a) => n(0, r = a));
  const d = m();
  S(l, d, (a) => n(1, o = a));
  const y = [], N = fe("$$ms-gr-react-wrapper"), {
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U
  } = G() || {}, V = _({
    parent: N,
    props: u,
    target: f,
    slot: d,
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U,
    onDestroy(a) {
      y.push(a);
    }
  });
  me("$$ms-gr-react-wrapper", V), ue(() => {
    u.set(x(s));
  }), de(() => {
    y.forEach((a) => a());
  });
  function W(a) {
    I[a ? "unshift" : "push"](() => {
      r = a, f.set(r);
    });
  }
  function z(a) {
    I[a ? "unshift" : "push"](() => {
      o = a, d.set(o);
    });
  }
  return l.$$set = (a) => {
    n(17, s = k(k({}, s), R(a))), "svelteInit" in a && n(5, _ = a.svelteInit), "$$scope" in a && n(6, t = a.$$scope);
  }, s = R(s), [r, o, f, d, c, _, t, e, W, z];
}
class ge extends $ {
  constructor(s) {
    super(), ae(this, s, be, pe, ce, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ye
} = window.__gradio__svelte__internal, P = window.ms_globals.rerender, v = window.ms_globals.tree;
function ve(l, s = {}) {
  function n(r) {
    const o = m(), e = new ge({
      ...r,
      props: {
        svelteInit(t) {
          window.ms_globals.autokey += 1;
          const c = {
            key: window.ms_globals.autokey,
            svelteInstance: o,
            reactComponent: l,
            props: t.props,
            slot: t.slot,
            target: t.target,
            slotIndex: t.slotIndex,
            subSlotIndex: t.subSlotIndex,
            ignore: s.ignore,
            slotKey: t.slotKey,
            nodes: []
          }, _ = t.parent ?? v;
          return _.nodes = [..._.nodes, c], P({
            createPortal: h,
            node: v
          }), t.onDestroy(() => {
            _.nodes = _.nodes.filter((u) => u.svelteInstance !== o), P({
              createPortal: h,
              node: v
            });
          }), c;
        },
        ...r.props
      }
    });
    return o.set(e), e;
  }
  return new Promise((r) => {
    window.ms_globals.initializePromise.then(() => {
      r(n);
    });
  });
}
const he = ve(({
  onFormChange: l,
  onFormFinish: s,
  ...n
}) => /* @__PURE__ */ F.jsx(J.Provider, {
  ...n,
  onFormChange: (r, o) => {
    l == null || l(r, {
      ...o,
      forms: Object.keys(o.forms).reduce((e, t) => ({
        ...e,
        [t]: o.forms[t].getFieldsValue()
      }), {})
    });
  },
  onFormFinish: (r, o) => {
    s == null || s(r, {
      ...o,
      forms: Object.keys(o.forms).reduce((e, t) => ({
        ...e,
        [t]: o.forms[t].getFieldsValue()
      }), {})
    });
  }
}));
export {
  he as FormProvider,
  he as default
};
