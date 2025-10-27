import { w as m, g as G } from "./Index-CzPLB-3q.js";
const B = window.ms_globals.React, I = window.ms_globals.ReactDOM.createPortal, H = window.ms_globals.createItemsContext.createItemsContext;
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
function T(r, t, l) {
  var n, s = {}, e = null, o = null;
  l !== void 0 && (e = "" + l), t.key !== void 0 && (e = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) Y.call(t, n) && !X.hasOwnProperty(n) && (s[n] = t[n]);
  if (r && r.defaultProps) for (n in t = r.defaultProps, t) s[n] === void 0 && (s[n] = t[n]);
  return {
    $$typeof: M,
    type: r,
    key: e,
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
  assign: y,
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
  empty: k,
  exclude_internal_props: C,
  get_all_dirty_from_scope: ne,
  get_slot_changes: re,
  group_outros: le,
  init: ae,
  insert_hydration: p,
  safe_not_equal: ie,
  set_custom_element_data: N,
  space: ce,
  transition_in: g,
  transition_out: b,
  update_slot_base: _e
} = window.__gradio__svelte__internal, {
  beforeUpdate: ue,
  getContext: fe,
  onDestroy: de,
  setContext: me
} = window.__gradio__svelte__internal;
function E(r) {
  let t, l;
  const n = (
    /*#slots*/
    r[7].default
  ), s = se(
    n,
    r,
    /*$$scope*/
    r[6],
    null
  );
  return {
    c() {
      t = L("svelte-slot"), s && s.c(), this.h();
    },
    l(e) {
      t = D(e, "SVELTE-SLOT", {
        class: !0
      });
      var o = j(t);
      s && s.l(o), o.forEach(_), this.h();
    },
    h() {
      N(t, "class", "svelte-1rt0kpf");
    },
    m(e, o) {
      p(e, t, o), s && s.m(t, null), r[9](t), l = !0;
    },
    p(e, o) {
      s && s.p && (!l || o & /*$$scope*/
      64) && _e(
        s,
        n,
        e,
        /*$$scope*/
        e[6],
        l ? re(
          n,
          /*$$scope*/
          e[6],
          o,
          null
        ) : ne(
          /*$$scope*/
          e[6]
        ),
        null
      );
    },
    i(e) {
      l || (g(s, e), l = !0);
    },
    o(e) {
      b(s, e), l = !1;
    },
    d(e) {
      e && _(t), s && s.d(e), r[9](null);
    }
  };
}
function pe(r) {
  let t, l, n, s, e = (
    /*$$slots*/
    r[4].default && E(r)
  );
  return {
    c() {
      t = L("react-portal-target"), l = ce(), e && e.c(), n = k(), this.h();
    },
    l(o) {
      t = D(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(t).forEach(_), l = te(o), e && e.l(o), n = k(), this.h();
    },
    h() {
      N(t, "class", "svelte-1rt0kpf");
    },
    m(o, i) {
      p(o, t, i), r[8](t), p(o, l, i), e && e.m(o, i), p(o, n, i), s = !0;
    },
    p(o, [i]) {
      /*$$slots*/
      o[4].default ? e ? (e.p(o, i), i & /*$$slots*/
      16 && g(e, 1)) : (e = E(o), e.c(), g(e, 1), e.m(n.parentNode, n)) : e && (le(), b(e, 1, 1, () => {
        e = null;
      }), ee());
    },
    i(o) {
      s || (g(e), s = !0);
    },
    o(o) {
      b(e), s = !1;
    },
    d(o) {
      o && (_(t), _(l), _(n)), r[8](null), e && e.d(o);
    }
  };
}
function R(r) {
  const {
    svelteInit: t,
    ...l
  } = r;
  return l;
}
function ge(r, t, l) {
  let n, s, {
    $$slots: e = {},
    $$scope: o
  } = t;
  const i = oe(e);
  let {
    svelteInit: c
  } = t;
  const u = m(R(t)), f = m();
  x(r, f, (a) => l(0, n = a));
  const d = m();
  x(r, d, (a) => l(1, s = a));
  const h = [], A = fe("$$ms-gr-react-wrapper"), {
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U
  } = G() || {}, F = c({
    parent: A,
    props: u,
    target: f,
    slot: d,
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U,
    onDestroy(a) {
      h.push(a);
    }
  });
  me("$$ms-gr-react-wrapper", F), ue(() => {
    u.set(R(t));
  }), de(() => {
    h.forEach((a) => a());
  });
  function W(a) {
    S[a ? "unshift" : "push"](() => {
      n = a, f.set(n);
    });
  }
  function z(a) {
    S[a ? "unshift" : "push"](() => {
      s = a, d.set(s);
    });
  }
  return r.$$set = (a) => {
    l(17, t = y(y({}, t), C(a))), "svelteInit" in a && l(5, c = a.svelteInit), "$$scope" in a && l(6, o = a.$$scope);
  }, t = C(t), [n, s, f, d, i, c, o, e, W, z];
}
class we extends $ {
  constructor(t) {
    super(), ae(this, t, ge, pe, ie, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: Ie
} = window.__gradio__svelte__internal, O = window.ms_globals.rerender, v = window.ms_globals.tree;
function ve(r, t = {}) {
  function l(n) {
    const s = m(), e = new we({
      ...n,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: s,
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
            createPortal: I,
            node: v
          }), o.onDestroy(() => {
            c.nodes = c.nodes.filter((u) => u.svelteInstance !== s), O({
              createPortal: I,
              node: v
            });
          }), i;
        },
        ...n.props
      }
    });
    return s.set(e), e;
  }
  return new Promise((n) => {
    window.ms_globals.initializePromise.then(() => {
      n(l);
    });
  });
}
const {
  withItemsContextProvider: ye,
  useItems: Se,
  ItemHandler: be
} = H("antd-tree-select-tree-nodes"), xe = ve((r) => /* @__PURE__ */ Z.jsx(be, {
  ...r,
  allowedSlots: ["default"],
  itemChildren: (t) => t.default.length > 0 ? t.default : void 0
}));
export {
  xe as TreeSelectTreeNode,
  xe as default
};
