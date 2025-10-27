import { w as p, b as G } from "./Index-CiVw1c-n.js";
const B = window.ms_globals.React, y = window.ms_globals.ReactDOM.createPortal;
var P = {
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
var J = B, M = Symbol.for("react.element"), V = Symbol.for("react.fragment"), Y = Object.prototype.hasOwnProperty, H = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Q = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function T(r, t, l) {
  var n, o = {}, e = null, s = null;
  l !== void 0 && (e = "" + l), t.key !== void 0 && (e = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (n in t) Y.call(t, n) && !Q.hasOwnProperty(n) && (o[n] = t[n]);
  if (r && r.defaultProps) for (n in t = r.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: M,
    type: r,
    key: e,
    ref: s,
    props: o,
    _owner: H.current
  };
}
b.Fragment = V;
b.jsx = T;
b.jsxs = T;
P.exports = b;
var be = P.exports;
const {
  SvelteComponent: X,
  assign: I,
  binding_callbacks: k,
  check_outros: Z,
  children: j,
  claim_element: D,
  claim_space: $,
  component_subscribe: R,
  compute_slots: ee,
  create_slot: te,
  detach: c,
  element: L,
  empty: S,
  exclude_internal_props: E,
  get_all_dirty_from_scope: se,
  get_slot_changes: oe,
  group_outros: ne,
  init: re,
  insert_hydration: m,
  safe_not_equal: le,
  set_custom_element_data: A,
  space: ae,
  transition_in: g,
  transition_out: w,
  update_slot_base: ie
} = window.__gradio__svelte__internal, {
  beforeUpdate: _e,
  getContext: ce,
  onDestroy: ue,
  setContext: fe
} = window.__gradio__svelte__internal;
function x(r) {
  let t, l;
  const n = (
    /*#slots*/
    r[7].default
  ), o = te(
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
      o && o.l(s), s.forEach(c), this.h();
    },
    h() {
      A(t, "class", "svelte-1rt0kpf");
    },
    m(e, s) {
      m(e, t, s), o && o.m(t, null), r[9](t), l = !0;
    },
    p(e, s) {
      o && o.p && (!l || s & /*$$scope*/
      64) && ie(
        o,
        n,
        e,
        /*$$scope*/
        e[6],
        l ? oe(
          n,
          /*$$scope*/
          e[6],
          s,
          null
        ) : se(
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
      w(o, e), l = !1;
    },
    d(e) {
      e && c(t), o && o.d(e), r[9](null);
    }
  };
}
function de(r) {
  let t, l, n, o, e = (
    /*$$slots*/
    r[4].default && x(r)
  );
  return {
    c() {
      t = L("react-portal-target"), l = ae(), e && e.c(), n = S(), this.h();
    },
    l(s) {
      t = D(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(t).forEach(c), l = $(s), e && e.l(s), n = S(), this.h();
    },
    h() {
      A(t, "class", "svelte-1rt0kpf");
    },
    m(s, i) {
      m(s, t, i), r[8](t), m(s, l, i), e && e.m(s, i), m(s, n, i), o = !0;
    },
    p(s, [i]) {
      /*$$slots*/
      s[4].default ? e ? (e.p(s, i), i & /*$$slots*/
      16 && g(e, 1)) : (e = x(s), e.c(), g(e, 1), e.m(n.parentNode, n)) : e && (ne(), w(e, 1, 1, () => {
        e = null;
      }), Z());
    },
    i(s) {
      o || (g(e), o = !0);
    },
    o(s) {
      w(e), o = !1;
    },
    d(s) {
      s && (c(t), c(l), c(n)), r[8](null), e && e.d(s);
    }
  };
}
function O(r) {
  const {
    svelteInit: t,
    ...l
  } = r;
  return l;
}
function pe(r, t, l) {
  let n, o, {
    $$slots: e = {},
    $$scope: s
  } = t;
  const i = ee(e);
  let {
    svelteInit: _
  } = t;
  const u = p(O(t)), f = p();
  R(r, f, (a) => l(0, n = a));
  const d = p();
  R(r, d, (a) => l(1, o = a));
  const h = [], N = ce("$$ms-gr-react-wrapper"), {
    slotKey: K,
    slotIndex: U,
    subSlotIndex: q
  } = G() || {}, F = _({
    parent: N,
    props: u,
    target: f,
    slot: d,
    slotKey: K,
    slotIndex: U,
    subSlotIndex: q,
    onDestroy(a) {
      h.push(a);
    }
  });
  fe("$$ms-gr-react-wrapper", F), _e(() => {
    u.set(O(t));
  }), ue(() => {
    h.forEach((a) => a());
  });
  function W(a) {
    k[a ? "unshift" : "push"](() => {
      n = a, f.set(n);
    });
  }
  function z(a) {
    k[a ? "unshift" : "push"](() => {
      o = a, d.set(o);
    });
  }
  return r.$$set = (a) => {
    l(17, t = I(I({}, t), E(a))), "svelteInit" in a && l(5, _ = a.svelteInit), "$$scope" in a && l(6, s = a.$$scope);
  }, t = E(t), [n, o, f, d, i, _, s, e, W, z];
}
class me extends X {
  constructor(t) {
    super(), re(this, t, pe, de, le, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ve
} = window.__gradio__svelte__internal, C = window.ms_globals.rerender, v = window.ms_globals.tree;
function we(r, t = {}) {
  function l(n) {
    const o = p(), e = new me({
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
          }, _ = s.parent ?? v;
          return _.nodes = [..._.nodes, i], C({
            createPortal: y,
            node: v
          }), s.onDestroy(() => {
            _.nodes = _.nodes.filter((u) => u.svelteInstance !== o), C({
              createPortal: y,
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
export {
  be as j,
  we as s
};
