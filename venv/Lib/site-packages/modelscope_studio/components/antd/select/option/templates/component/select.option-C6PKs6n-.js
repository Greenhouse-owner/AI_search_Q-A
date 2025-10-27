import { w as p, g as G } from "./Index-B9Jo7k5B.js";
const B = window.ms_globals.React, y = window.ms_globals.ReactDOM.createPortal, H = window.ms_globals.createItemsContext.createItemsContext;
var P = {
  exports: {}
}, w = {};
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
function T(l, e, r) {
  var n, s = {}, t = null, o = null;
  r !== void 0 && (t = "" + r), e.key !== void 0 && (t = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (n in e) Y.call(e, n) && !X.hasOwnProperty(n) && (s[n] = e[n]);
  if (l && l.defaultProps) for (n in e = l.defaultProps, e) s[n] === void 0 && (s[n] = e[n]);
  return {
    $$typeof: M,
    type: l,
    key: t,
    ref: o,
    props: s,
    _owner: Q.current
  };
}
w.Fragment = V;
w.jsx = T;
w.jsxs = T;
P.exports = w;
var Z = P.exports;
const {
  SvelteComponent: $,
  assign: I,
  binding_callbacks: S,
  check_outros: ee,
  children: j,
  claim_element: D,
  claim_space: te,
  component_subscribe: x,
  compute_slots: oe,
  create_slot: se,
  detach: _,
  element: L,
  empty: C,
  exclude_internal_props: k,
  get_all_dirty_from_scope: ne,
  get_slot_changes: le,
  group_outros: re,
  init: ie,
  insert_hydration: m,
  safe_not_equal: ae,
  set_custom_element_data: A,
  space: ce,
  transition_in: g,
  transition_out: v,
  update_slot_base: _e
} = window.__gradio__svelte__internal, {
  beforeUpdate: ue,
  getContext: fe,
  onDestroy: de,
  setContext: pe
} = window.__gradio__svelte__internal;
function E(l) {
  let e, r;
  const n = (
    /*#slots*/
    l[7].default
  ), s = se(
    n,
    l,
    /*$$scope*/
    l[6],
    null
  );
  return {
    c() {
      e = L("svelte-slot"), s && s.c(), this.h();
    },
    l(t) {
      e = D(t, "SVELTE-SLOT", {
        class: !0
      });
      var o = j(e);
      s && s.l(o), o.forEach(_), this.h();
    },
    h() {
      A(e, "class", "svelte-1rt0kpf");
    },
    m(t, o) {
      m(t, e, o), s && s.m(e, null), l[9](e), r = !0;
    },
    p(t, o) {
      s && s.p && (!r || o & /*$$scope*/
      64) && _e(
        s,
        n,
        t,
        /*$$scope*/
        t[6],
        r ? le(
          n,
          /*$$scope*/
          t[6],
          o,
          null
        ) : ne(
          /*$$scope*/
          t[6]
        ),
        null
      );
    },
    i(t) {
      r || (g(s, t), r = !0);
    },
    o(t) {
      v(s, t), r = !1;
    },
    d(t) {
      t && _(e), s && s.d(t), l[9](null);
    }
  };
}
function me(l) {
  let e, r, n, s, t = (
    /*$$slots*/
    l[4].default && E(l)
  );
  return {
    c() {
      e = L("react-portal-target"), r = ce(), t && t.c(), n = C(), this.h();
    },
    l(o) {
      e = D(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(e).forEach(_), r = te(o), t && t.l(o), n = C(), this.h();
    },
    h() {
      A(e, "class", "svelte-1rt0kpf");
    },
    m(o, a) {
      m(o, e, a), l[8](e), m(o, r, a), t && t.m(o, a), m(o, n, a), s = !0;
    },
    p(o, [a]) {
      /*$$slots*/
      o[4].default ? t ? (t.p(o, a), a & /*$$slots*/
      16 && g(t, 1)) : (t = E(o), t.c(), g(t, 1), t.m(n.parentNode, n)) : t && (re(), v(t, 1, 1, () => {
        t = null;
      }), ee());
    },
    i(o) {
      s || (g(t), s = !0);
    },
    o(o) {
      v(t), s = !1;
    },
    d(o) {
      o && (_(e), _(r), _(n)), l[8](null), t && t.d(o);
    }
  };
}
function R(l) {
  const {
    svelteInit: e,
    ...r
  } = l;
  return r;
}
function ge(l, e, r) {
  let n, s, {
    $$slots: t = {},
    $$scope: o
  } = e;
  const a = oe(t);
  let {
    svelteInit: c
  } = e;
  const u = p(R(e)), f = p();
  x(l, f, (i) => r(0, n = i));
  const d = p();
  x(l, d, (i) => r(1, s = i));
  const b = [], K = fe("$$ms-gr-react-wrapper"), {
    slotKey: N,
    slotIndex: q,
    subSlotIndex: U
  } = G() || {}, F = c({
    parent: K,
    props: u,
    target: f,
    slot: d,
    slotKey: N,
    slotIndex: q,
    subSlotIndex: U,
    onDestroy(i) {
      b.push(i);
    }
  });
  pe("$$ms-gr-react-wrapper", F), ue(() => {
    u.set(R(e));
  }), de(() => {
    b.forEach((i) => i());
  });
  function W(i) {
    S[i ? "unshift" : "push"](() => {
      n = i, f.set(n);
    });
  }
  function z(i) {
    S[i ? "unshift" : "push"](() => {
      s = i, d.set(s);
    });
  }
  return l.$$set = (i) => {
    r(17, e = I(I({}, e), k(i))), "svelteInit" in i && r(5, c = i.svelteInit), "$$scope" in i && r(6, o = i.$$scope);
  }, e = k(e), [n, s, f, d, a, c, o, t, W, z];
}
class we extends $ {
  constructor(e) {
    super(), ie(this, e, ge, me, ae, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ye
} = window.__gradio__svelte__internal, O = window.ms_globals.rerender, h = window.ms_globals.tree;
function he(l, e = {}) {
  function r(n) {
    const s = p(), t = new we({
      ...n,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const a = {
            key: window.ms_globals.autokey,
            svelteInstance: s,
            reactComponent: l,
            props: o.props,
            slot: o.slot,
            target: o.target,
            slotIndex: o.slotIndex,
            subSlotIndex: o.subSlotIndex,
            ignore: e.ignore,
            slotKey: o.slotKey,
            nodes: []
          }, c = o.parent ?? h;
          return c.nodes = [...c.nodes, a], O({
            createPortal: y,
            node: h
          }), o.onDestroy(() => {
            c.nodes = c.nodes.filter((u) => u.svelteInstance !== s), O({
              createPortal: y,
              node: h
            });
          }), a;
        },
        ...n.props
      }
    });
    return s.set(t), t;
  }
  return new Promise((n) => {
    window.ms_globals.initializePromise.then(() => {
      n(r);
    });
  });
}
const {
  withItemsContextProvider: Ie,
  useItems: Se,
  ItemHandler: ve
} = H("antd-select-options"), xe = he((l) => /* @__PURE__ */ Z.jsx(ve, {
  ...l,
  allowedSlots: ["default", "options"],
  itemChildrenKey: "options",
  itemChildren: (e) => e.options.length > 0 ? e.options : e.default.length > 0 ? e.default : void 0
}));
export {
  xe as SelectOptions,
  xe as default
};
