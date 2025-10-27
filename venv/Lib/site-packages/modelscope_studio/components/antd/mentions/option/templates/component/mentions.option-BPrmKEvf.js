import { w as p, g as B } from "./Index-C42ytNNH.js";
const z = window.ms_globals.React, y = window.ms_globals.ReactDOM.createPortal, G = window.ms_globals.createItemsContext.createItemsContext;
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
var H = z, J = Symbol.for("react.element"), V = Symbol.for("react.fragment"), Y = Object.prototype.hasOwnProperty, Q = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, X = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function T(r, e, l) {
  var s, n = {}, t = null, o = null;
  l !== void 0 && (t = "" + l), e.key !== void 0 && (t = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (s in e) Y.call(e, s) && !X.hasOwnProperty(s) && (n[s] = e[s]);
  if (r && r.defaultProps) for (s in e = r.defaultProps, e) n[s] === void 0 && (n[s] = e[s]);
  return {
    $$typeof: J,
    type: r,
    key: t,
    ref: o,
    props: n,
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
  binding_callbacks: x,
  check_outros: ee,
  children: j,
  claim_element: D,
  claim_space: te,
  component_subscribe: C,
  compute_slots: oe,
  create_slot: ne,
  detach: _,
  element: L,
  empty: S,
  exclude_internal_props: k,
  get_all_dirty_from_scope: se,
  get_slot_changes: re,
  group_outros: le,
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
function E(r) {
  let e, l;
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
      e = L("svelte-slot"), n && n.c(), this.h();
    },
    l(t) {
      e = D(t, "SVELTE-SLOT", {
        class: !0
      });
      var o = j(e);
      n && n.l(o), o.forEach(_), this.h();
    },
    h() {
      A(e, "class", "svelte-1rt0kpf");
    },
    m(t, o) {
      m(t, e, o), n && n.m(e, null), r[9](e), l = !0;
    },
    p(t, o) {
      n && n.p && (!l || o & /*$$scope*/
      64) && _e(
        n,
        s,
        t,
        /*$$scope*/
        t[6],
        l ? re(
          s,
          /*$$scope*/
          t[6],
          o,
          null
        ) : se(
          /*$$scope*/
          t[6]
        ),
        null
      );
    },
    i(t) {
      l || (g(n, t), l = !0);
    },
    o(t) {
      v(n, t), l = !1;
    },
    d(t) {
      t && _(e), n && n.d(t), r[9](null);
    }
  };
}
function me(r) {
  let e, l, s, n, t = (
    /*$$slots*/
    r[4].default && E(r)
  );
  return {
    c() {
      e = L("react-portal-target"), l = ce(), t && t.c(), s = S(), this.h();
    },
    l(o) {
      e = D(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(e).forEach(_), l = te(o), t && t.l(o), s = S(), this.h();
    },
    h() {
      A(e, "class", "svelte-1rt0kpf");
    },
    m(o, a) {
      m(o, e, a), r[8](e), m(o, l, a), t && t.m(o, a), m(o, s, a), n = !0;
    },
    p(o, [a]) {
      /*$$slots*/
      o[4].default ? t ? (t.p(o, a), a & /*$$slots*/
      16 && g(t, 1)) : (t = E(o), t.c(), g(t, 1), t.m(s.parentNode, s)) : t && (le(), v(t, 1, 1, () => {
        t = null;
      }), ee());
    },
    i(o) {
      n || (g(t), n = !0);
    },
    o(o) {
      v(t), n = !1;
    },
    d(o) {
      o && (_(e), _(l), _(s)), r[8](null), t && t.d(o);
    }
  };
}
function R(r) {
  const {
    svelteInit: e,
    ...l
  } = r;
  return l;
}
function ge(r, e, l) {
  let s, n, {
    $$slots: t = {},
    $$scope: o
  } = e;
  const a = oe(t);
  let {
    svelteInit: c
  } = e;
  const u = p(R(e)), f = p();
  C(r, f, (i) => l(0, s = i));
  const d = p();
  C(r, d, (i) => l(1, n = i));
  const b = [], K = fe("$$ms-gr-react-wrapper"), {
    slotKey: N,
    slotIndex: q,
    subSlotIndex: U
  } = B() || {}, F = c({
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
  function M(i) {
    x[i ? "unshift" : "push"](() => {
      s = i, f.set(s);
    });
  }
  function W(i) {
    x[i ? "unshift" : "push"](() => {
      n = i, d.set(n);
    });
  }
  return r.$$set = (i) => {
    l(17, e = I(I({}, e), k(i))), "svelteInit" in i && l(5, c = i.svelteInit), "$$scope" in i && l(6, o = i.$$scope);
  }, e = k(e), [s, n, f, d, a, c, o, t, M, W];
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
function he(r, e = {}) {
  function l(s) {
    const n = p(), t = new we({
      ...s,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const a = {
            key: window.ms_globals.autokey,
            svelteInstance: n,
            reactComponent: r,
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
            c.nodes = c.nodes.filter((u) => u.svelteInstance !== n), O({
              createPortal: y,
              node: h
            });
          }), a;
        },
        ...s.props
      }
    });
    return n.set(t), t;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(l);
    });
  });
}
const {
  useItems: Ie,
  withItemsContextProvider: xe,
  ItemHandler: ve
} = G("antd-mentions-options"), Ce = he((r) => /* @__PURE__ */ Z.jsx(ve, {
  ...r,
  allowedSlots: ["default", "options"],
  itemChildrenKey: "options",
  itemChildren: (e) => e.options.length > 0 ? e.options : e.default.length > 0 ? e.default : void 0
}));
export {
  Ce as MentionsOption,
  Ce as default
};
