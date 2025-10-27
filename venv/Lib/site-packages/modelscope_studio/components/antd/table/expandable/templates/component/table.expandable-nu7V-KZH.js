import { w as f, g as G } from "./Index-CBj_14Af.js";
const B = window.ms_globals.React, x = window.ms_globals.ReactDOM.createPortal, w = window.ms_globals.createItemsContext.createItemsContext;
var T = {
  exports: {}
}, b = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J = B, M = Symbol.for("react.element"), V = Symbol.for("react.fragment"), Y = Object.prototype.hasOwnProperty, Q = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, X = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function H(r, t, l) {
  var s, n = {}, e = null, o = null;
  l !== void 0 && (e = "" + l), t.key !== void 0 && (e = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (s in t) Y.call(t, s) && !X.hasOwnProperty(s) && (n[s] = t[s]);
  if (r && r.defaultProps) for (s in t = r.defaultProps, t) n[s] === void 0 && (n[s] = t[s]);
  return {
    $$typeof: M,
    type: r,
    key: e,
    ref: o,
    props: n,
    _owner: Q.current
  };
}
b.Fragment = V;
b.jsx = H;
b.jsxs = H;
T.exports = b;
var Z = T.exports;
const {
  SvelteComponent: $,
  assign: C,
  binding_callbacks: y,
  check_outros: ee,
  children: j,
  claim_element: D,
  claim_space: te,
  component_subscribe: S,
  compute_slots: oe,
  create_slot: ne,
  detach: u,
  element: L,
  empty: E,
  exclude_internal_props: P,
  get_all_dirty_from_scope: se,
  get_slot_changes: re,
  group_outros: le,
  init: ae,
  insert_hydration: p,
  safe_not_equal: ie,
  set_custom_element_data: A,
  space: ce,
  transition_in: I,
  transition_out: h,
  update_slot_base: ue
} = window.__gradio__svelte__internal, {
  beforeUpdate: _e,
  getContext: de,
  onDestroy: me,
  setContext: fe
} = window.__gradio__svelte__internal;
function R(r) {
  let t, l;
  const s = (
    /*#slots*/
    r[7].default
  ), n = ne(
    s,
    r,
    /*$$scope*/
    r[6],
    null
  );
  return {
    c() {
      t = L("svelte-slot"), n && n.c(), this.h();
    },
    l(e) {
      t = D(e, "SVELTE-SLOT", {
        class: !0
      });
      var o = j(t);
      n && n.l(o), o.forEach(u), this.h();
    },
    h() {
      A(t, "class", "svelte-1rt0kpf");
    },
    m(e, o) {
      p(e, t, o), n && n.m(t, null), r[9](t), l = !0;
    },
    p(e, o) {
      n && n.p && (!l || o & /*$$scope*/
      64) && ue(
        n,
        s,
        e,
        /*$$scope*/
        e[6],
        l ? re(
          s,
          /*$$scope*/
          e[6],
          o,
          null
        ) : se(
          /*$$scope*/
          e[6]
        ),
        null
      );
    },
    i(e) {
      l || (I(n, e), l = !0);
    },
    o(e) {
      h(n, e), l = !1;
    },
    d(e) {
      e && u(t), n && n.d(e), r[9](null);
    }
  };
}
function pe(r) {
  let t, l, s, n, e = (
    /*$$slots*/
    r[4].default && R(r)
  );
  return {
    c() {
      t = L("react-portal-target"), l = ce(), e && e.c(), s = E(), this.h();
    },
    l(o) {
      t = D(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(t).forEach(u), l = te(o), e && e.l(o), s = E(), this.h();
    },
    h() {
      A(t, "class", "svelte-1rt0kpf");
    },
    m(o, i) {
      p(o, t, i), r[8](t), p(o, l, i), e && e.m(o, i), p(o, s, i), n = !0;
    },
    p(o, [i]) {
      /*$$slots*/
      o[4].default ? e ? (e.p(o, i), i & /*$$slots*/
      16 && I(e, 1)) : (e = R(o), e.c(), I(e, 1), e.m(s.parentNode, s)) : e && (le(), h(e, 1, 1, () => {
        e = null;
      }), ee());
    },
    i(o) {
      n || (I(e), n = !0);
    },
    o(o) {
      h(e), n = !1;
    },
    d(o) {
      o && (u(t), u(l), u(s)), r[8](null), e && e.d(o);
    }
  };
}
function k(r) {
  const {
    svelteInit: t,
    ...l
  } = r;
  return l;
}
function Ie(r, t, l) {
  let s, n, {
    $$slots: e = {},
    $$scope: o
  } = t;
  const i = oe(e);
  let {
    svelteInit: c
  } = t;
  const _ = f(k(t)), d = f();
  S(r, d, (a) => l(0, s = a));
  const m = f();
  S(r, m, (a) => l(1, n = a));
  const g = [], N = de("$$ms-gr-react-wrapper"), {
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U
  } = G() || {}, F = c({
    parent: N,
    props: _,
    target: d,
    slot: m,
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U,
    onDestroy(a) {
      g.push(a);
    }
  });
  fe("$$ms-gr-react-wrapper", F), _e(() => {
    _.set(k(t));
  }), me(() => {
    g.forEach((a) => a());
  });
  function W(a) {
    y[a ? "unshift" : "push"](() => {
      s = a, d.set(s);
    });
  }
  function z(a) {
    y[a ? "unshift" : "push"](() => {
      n = a, m.set(n);
    });
  }
  return r.$$set = (a) => {
    l(17, t = C(C({}, t), P(a))), "svelteInit" in a && l(5, c = a.svelteInit), "$$scope" in a && l(6, o = a.$$scope);
  }, t = P(t), [s, n, d, m, i, c, o, e, W, z];
}
class we extends $ {
  constructor(t) {
    super(), ae(this, t, Ie, pe, ie, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ge
} = window.__gradio__svelte__internal, O = window.ms_globals.rerender, v = window.ms_globals.tree;
function be(r, t = {}) {
  function l(s) {
    const n = f(), e = new we({
      ...s,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: n,
            reactComponent: r,
            props: o.props,
            slot: o.slot,
            target: o.target,
            slotIndex: o.slotIndex,
            subSlotIndex: o.subSlotIndex,
            ignore: t.ignore,
            slotKey: o.slotKey,
            nodes: []
          }, c = o.parent ?? v;
          return c.nodes = [...c.nodes, i], O({
            createPortal: x,
            node: v
          }), o.onDestroy(() => {
            c.nodes = c.nodes.filter((_) => _.svelteInstance !== n), O({
              createPortal: x,
              node: v
            });
          }), i;
        },
        ...s.props
      }
    });
    return n.set(e), e;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(l);
    });
  });
}
const {
  useItems: xe,
  withItemsContextProvider: Ce,
  ItemHandler: ye
} = w("antd-table-columns"), {
  useItems: Se,
  withItemsContextProvider: Ee,
  ItemHandler: Pe
} = w("antd-table-row-selection-selections"), {
  useItems: Re,
  withItemsContextProvider: ke,
  ItemHandler: Oe
} = w("antd-table-row-selection"), {
  useItems: Te,
  withItemsContextProvider: He,
  ItemHandler: ve
} = w("antd-table-expandable"), je = be((r) => /* @__PURE__ */ Z.jsx(ve, {
  ...r
}));
export {
  je as TableExpandable,
  je as default
};
