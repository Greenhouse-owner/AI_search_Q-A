import { w as m, g as G } from "./Index-BXrpZf2C.js";
const B = window.ms_globals.React, I = window.ms_globals.ReactDOM.createPortal, H = window.ms_globals.createItemsContext.createItemsContext;
var O = {
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
  var n, o = {}, e = null, s = null;
  l !== void 0 && (e = "" + l), t.key !== void 0 && (e = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (n in t) Y.call(t, n) && !X.hasOwnProperty(n) && (o[n] = t[n]);
  if (r && r.defaultProps) for (n in t = r.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: M,
    type: r,
    key: e,
    ref: s,
    props: o,
    _owner: Q.current
  };
}
w.Fragment = V;
w.jsx = T;
w.jsxs = T;
O.exports = w;
var Z = O.exports;
const {
  SvelteComponent: $,
  assign: y,
  binding_callbacks: x,
  check_outros: ee,
  children: j,
  claim_element: D,
  claim_space: te,
  component_subscribe: S,
  compute_slots: se,
  create_slot: oe,
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
  set_custom_element_data: A,
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
  ), o = oe(
    n,
    r,
    /*$$scope*/
    r[6],
    null
  );
  return {
    c() {
      t = L("svelte-slot"), o && o.c(), this.h();
    },
    l(e) {
      t = D(e, "SVELTE-SLOT", {
        class: !0
      });
      var s = j(t);
      o && o.l(s), s.forEach(_), this.h();
    },
    h() {
      A(t, "class", "svelte-1rt0kpf");
    },
    m(e, s) {
      p(e, t, s), o && o.m(t, null), r[9](t), l = !0;
    },
    p(e, s) {
      o && o.p && (!l || s & /*$$scope*/
      64) && _e(
        o,
        n,
        e,
        /*$$scope*/
        e[6],
        l ? re(
          n,
          /*$$scope*/
          e[6],
          s,
          null
        ) : ne(
          /*$$scope*/
          e[6]
        ),
        null
      );
    },
    i(e) {
      l || (g(o, e), l = !0);
    },
    o(e) {
      b(o, e), l = !1;
    },
    d(e) {
      e && _(t), o && o.d(e), r[9](null);
    }
  };
}
function pe(r) {
  let t, l, n, o, e = (
    /*$$slots*/
    r[4].default && E(r)
  );
  return {
    c() {
      t = L("react-portal-target"), l = ce(), e && e.c(), n = k(), this.h();
    },
    l(s) {
      t = D(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(t).forEach(_), l = te(s), e && e.l(s), n = k(), this.h();
    },
    h() {
      A(t, "class", "svelte-1rt0kpf");
    },
    m(s, i) {
      p(s, t, i), r[8](t), p(s, l, i), e && e.m(s, i), p(s, n, i), o = !0;
    },
    p(s, [i]) {
      /*$$slots*/
      s[4].default ? e ? (e.p(s, i), i & /*$$slots*/
      16 && g(e, 1)) : (e = E(s), e.c(), g(e, 1), e.m(n.parentNode, n)) : e && (le(), b(e, 1, 1, () => {
        e = null;
      }), ee());
    },
    i(s) {
      o || (g(e), o = !0);
    },
    o(s) {
      b(e), o = !1;
    },
    d(s) {
      s && (_(t), _(l), _(n)), r[8](null), e && e.d(s);
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
  let n, o, {
    $$slots: e = {},
    $$scope: s
  } = t;
  const i = se(e);
  let {
    svelteInit: c
  } = t;
  const u = m(R(t)), f = m();
  S(r, f, (a) => l(0, n = a));
  const d = m();
  S(r, d, (a) => l(1, o = a));
  const h = [], N = fe("$$ms-gr-react-wrapper"), {
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U
  } = G() || {}, F = c({
    parent: N,
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
    x[a ? "unshift" : "push"](() => {
      n = a, f.set(n);
    });
  }
  function z(a) {
    x[a ? "unshift" : "push"](() => {
      o = a, d.set(o);
    });
  }
  return r.$$set = (a) => {
    l(17, t = y(y({}, t), C(a))), "svelteInit" in a && l(5, c = a.svelteInit), "$$scope" in a && l(6, s = a.$$scope);
  }, t = C(t), [n, o, f, d, i, c, s, e, W, z];
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
} = window.__gradio__svelte__internal, P = window.ms_globals.rerender, v = window.ms_globals.tree;
function ve(r, t = {}) {
  function l(n) {
    const o = m(), e = new we({
      ...n,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: o,
            reactComponent: r,
            props: s.props,
            slot: s.slot,
            target: s.target,
            slotIndex: s.slotIndex,
            subSlotIndex: s.subSlotIndex,
            ignore: t.ignore,
            slotKey: s.slotKey,
            nodes: []
          }, c = s.parent ?? v;
          return c.nodes = [...c.nodes, i], P({
            createPortal: I,
            node: v
          }), s.onDestroy(() => {
            c.nodes = c.nodes.filter((u) => u.svelteInstance !== o), P({
              createPortal: I,
              node: v
            });
          }), i;
        },
        ...n.props
      }
    });
    return o.set(e), e;
  }
  return new Promise((n) => {
    window.ms_globals.initializePromise.then(() => {
      n(l);
    });
  });
}
const {
  useItems: ye,
  withItemsContextProvider: xe,
  ItemHandler: be
} = H("antdx-prompts-items"), Se = ve((r) => /* @__PURE__ */ Z.jsx(be, {
  ...r,
  allowedSlots: ["default"],
  itemChildren: (t) => t.default.length > 0 ? t.default : void 0
}));
export {
  Se as PromptsItem,
  Se as default
};
