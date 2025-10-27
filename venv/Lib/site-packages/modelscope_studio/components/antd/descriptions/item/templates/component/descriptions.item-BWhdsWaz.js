import { w as m, g as G } from "./Index-BPdWlLS6.js";
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
P.exports = w;
var Z = P.exports;
const {
  SvelteComponent: $,
  assign: y,
  binding_callbacks: x,
  check_outros: ee,
  children: D,
  claim_element: j,
  claim_space: te,
  component_subscribe: k,
  compute_slots: se,
  create_slot: oe,
  detach: _,
  element: L,
  empty: S,
  exclude_internal_props: C,
  get_all_dirty_from_scope: ne,
  get_slot_changes: re,
  group_outros: le,
  init: ie,
  insert_hydration: p,
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
      t = j(e, "SVELTE-SLOT", {
        class: !0
      });
      var s = D(t);
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
      v(o, e), l = !1;
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
      t = L("react-portal-target"), l = ce(), e && e.c(), n = S(), this.h();
    },
    l(s) {
      t = j(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), D(t).forEach(_), l = te(s), e && e.l(s), n = S(), this.h();
    },
    h() {
      A(t, "class", "svelte-1rt0kpf");
    },
    m(s, a) {
      p(s, t, a), r[8](t), p(s, l, a), e && e.m(s, a), p(s, n, a), o = !0;
    },
    p(s, [a]) {
      /*$$slots*/
      s[4].default ? e ? (e.p(s, a), a & /*$$slots*/
      16 && g(e, 1)) : (e = E(s), e.c(), g(e, 1), e.m(n.parentNode, n)) : e && (le(), v(e, 1, 1, () => {
        e = null;
      }), ee());
    },
    i(s) {
      o || (g(e), o = !0);
    },
    o(s) {
      v(e), o = !1;
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
  const a = se(e);
  let {
    svelteInit: c
  } = t;
  const u = m(R(t)), f = m();
  k(r, f, (i) => l(0, n = i));
  const d = m();
  k(r, d, (i) => l(1, o = i));
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
    onDestroy(i) {
      h.push(i);
    }
  });
  me("$$ms-gr-react-wrapper", F), ue(() => {
    u.set(R(t));
  }), de(() => {
    h.forEach((i) => i());
  });
  function W(i) {
    x[i ? "unshift" : "push"](() => {
      n = i, f.set(n);
    });
  }
  function z(i) {
    x[i ? "unshift" : "push"](() => {
      o = i, d.set(o);
    });
  }
  return r.$$set = (i) => {
    l(17, t = y(y({}, t), C(i))), "svelteInit" in i && l(5, c = i.svelteInit), "$$scope" in i && l(6, s = i.$$scope);
  }, t = C(t), [n, o, f, d, a, c, s, e, W, z];
}
class we extends $ {
  constructor(t) {
    super(), ie(this, t, ge, pe, ae, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: Ie
} = window.__gradio__svelte__internal, O = window.ms_globals.rerender, b = window.ms_globals.tree;
function be(r, t = {}) {
  function l(n) {
    const o = m(), e = new we({
      ...n,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const a = {
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
          }, c = s.parent ?? b;
          return c.nodes = [...c.nodes, a], O({
            createPortal: I,
            node: b
          }), s.onDestroy(() => {
            c.nodes = c.nodes.filter((u) => u.svelteInstance !== o), O({
              createPortal: I,
              node: b
            });
          }), a;
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
  withItemsContextProvider: ye,
  useItems: xe,
  ItemHandler: ve
} = H("antd-descriptions-items"), ke = be((r) => /* @__PURE__ */ Z.jsx(ve, {
  ...r
}));
export {
  ke as DescriptionsItem,
  ke as default
};
