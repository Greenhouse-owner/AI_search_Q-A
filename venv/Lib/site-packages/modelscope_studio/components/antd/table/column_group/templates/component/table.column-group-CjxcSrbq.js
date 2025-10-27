import { w as f, g as B } from "./Index-DEl6h_cf.js";
const z = window.ms_globals.React, x = window.ms_globals.ReactDOM.createPortal, w = window.ms_globals.createItemsContext.createItemsContext;
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
var J = z, M = Symbol.for("react.element"), V = Symbol.for("react.fragment"), Y = Object.prototype.hasOwnProperty, Q = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, X = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function H(l, t, r) {
  var s, n = {}, e = null, o = null;
  r !== void 0 && (e = "" + r), t.key !== void 0 && (e = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (s in t) Y.call(t, s) && !X.hasOwnProperty(s) && (n[s] = t[s]);
  if (l && l.defaultProps) for (s in t = l.defaultProps, t) n[s] === void 0 && (n[s] = t[s]);
  return {
    $$typeof: M,
    type: l,
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
  empty: P,
  exclude_internal_props: E,
  get_all_dirty_from_scope: se,
  get_slot_changes: le,
  group_outros: re,
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
function R(l) {
  let t, r;
  const s = (
    /*#slots*/
    l[7].default
  ), n = ne(
    s,
    l,
    /*$$scope*/
    l[6],
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
      p(e, t, o), n && n.m(t, null), l[9](t), r = !0;
    },
    p(e, o) {
      n && n.p && (!r || o & /*$$scope*/
      64) && ue(
        n,
        s,
        e,
        /*$$scope*/
        e[6],
        r ? le(
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
      r || (I(n, e), r = !0);
    },
    o(e) {
      h(n, e), r = !1;
    },
    d(e) {
      e && u(t), n && n.d(e), l[9](null);
    }
  };
}
function pe(l) {
  let t, r, s, n, e = (
    /*$$slots*/
    l[4].default && R(l)
  );
  return {
    c() {
      t = L("react-portal-target"), r = ce(), e && e.c(), s = P(), this.h();
    },
    l(o) {
      t = D(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(t).forEach(u), r = te(o), e && e.l(o), s = P(), this.h();
    },
    h() {
      A(t, "class", "svelte-1rt0kpf");
    },
    m(o, i) {
      p(o, t, i), l[8](t), p(o, r, i), e && e.m(o, i), p(o, s, i), n = !0;
    },
    p(o, [i]) {
      /*$$slots*/
      o[4].default ? e ? (e.p(o, i), i & /*$$slots*/
      16 && I(e, 1)) : (e = R(o), e.c(), I(e, 1), e.m(s.parentNode, s)) : e && (re(), h(e, 1, 1, () => {
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
      o && (u(t), u(r), u(s)), l[8](null), e && e.d(o);
    }
  };
}
function k(l) {
  const {
    svelteInit: t,
    ...r
  } = l;
  return r;
}
function Ie(l, t, r) {
  let s, n, {
    $$slots: e = {},
    $$scope: o
  } = t;
  const i = oe(e);
  let {
    svelteInit: c
  } = t;
  const _ = f(k(t)), d = f();
  S(l, d, (a) => r(0, s = a));
  const m = f();
  S(l, m, (a) => r(1, n = a));
  const g = [], N = de("$$ms-gr-react-wrapper"), {
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U
  } = B() || {}, F = c({
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
  function G(a) {
    y[a ? "unshift" : "push"](() => {
      s = a, d.set(s);
    });
  }
  function W(a) {
    y[a ? "unshift" : "push"](() => {
      n = a, m.set(n);
    });
  }
  return l.$$set = (a) => {
    r(17, t = C(C({}, t), E(a))), "svelteInit" in a && r(5, c = a.svelteInit), "$$scope" in a && r(6, o = a.$$scope);
  }, t = E(t), [s, n, d, m, i, c, o, e, G, W];
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
function be(l, t = {}) {
  function r(s) {
    const n = f(), e = new we({
      ...s,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: n,
            reactComponent: l,
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
      s(r);
    });
  });
}
const {
  useItems: xe,
  withItemsContextProvider: Ce,
  ItemHandler: ve
} = w("antd-table-columns"), {
  useItems: ye,
  withItemsContextProvider: Se,
  ItemHandler: Pe
} = w("antd-table-row-selection-selections"), {
  useItems: Ee,
  withItemsContextProvider: Re,
  ItemHandler: ke
} = w("antd-table-row-selection"), {
  useItems: Oe,
  withItemsContextProvider: Te,
  ItemHandler: He
} = w("antd-table-expandable"), je = be((l) => /* @__PURE__ */ Z.jsx(ve, {
  ...l,
  allowedSlots: ["default"],
  itemChildren: (t) => t.default || []
}));
export {
  je as TableColumnGroup,
  je as default
};
