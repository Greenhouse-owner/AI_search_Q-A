import { w as p, g as G } from "./Index-BnIXHCDP.js";
const B = window.ms_globals.React, y = window.ms_globals.ReactDOM.createPortal, J = window.ms_globals.antd.Flex;
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
var M = B, V = Symbol.for("react.element"), Y = Symbol.for("react.fragment"), H = Object.prototype.hasOwnProperty, Q = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, X = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function T(l, t, r) {
  var n, o = {}, e = null, s = null;
  r !== void 0 && (e = "" + r), t.key !== void 0 && (e = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (n in t) H.call(t, n) && !X.hasOwnProperty(n) && (o[n] = t[n]);
  if (l && l.defaultProps) for (n in t = l.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: V,
    type: l,
    key: e,
    ref: s,
    props: o,
    _owner: Q.current
  };
}
w.Fragment = Y;
w.jsx = T;
w.jsxs = T;
P.exports = w;
var Z = P.exports;
const {
  SvelteComponent: $,
  assign: I,
  binding_callbacks: k,
  check_outros: ee,
  children: j,
  claim_element: D,
  claim_space: te,
  component_subscribe: x,
  compute_slots: se,
  create_slot: oe,
  detach: c,
  element: L,
  empty: S,
  exclude_internal_props: E,
  get_all_dirty_from_scope: ne,
  get_slot_changes: le,
  group_outros: re,
  init: ae,
  insert_hydration: m,
  safe_not_equal: ie,
  set_custom_element_data: F,
  space: _e,
  transition_in: g,
  transition_out: v,
  update_slot_base: ce
} = window.__gradio__svelte__internal, {
  beforeUpdate: ue,
  getContext: fe,
  onDestroy: de,
  setContext: pe
} = window.__gradio__svelte__internal;
function R(l) {
  let t, r;
  const n = (
    /*#slots*/
    l[7].default
  ), o = oe(
    n,
    l,
    /*$$scope*/
    l[6],
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
      F(t, "class", "svelte-1rt0kpf");
    },
    m(e, s) {
      m(e, t, s), o && o.m(t, null), l[9](t), r = !0;
    },
    p(e, s) {
      o && o.p && (!r || s & /*$$scope*/
      64) && ce(
        o,
        n,
        e,
        /*$$scope*/
        e[6],
        r ? le(
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
      r || (g(o, e), r = !0);
    },
    o(e) {
      v(o, e), r = !1;
    },
    d(e) {
      e && c(t), o && o.d(e), l[9](null);
    }
  };
}
function me(l) {
  let t, r, n, o, e = (
    /*$$slots*/
    l[4].default && R(l)
  );
  return {
    c() {
      t = L("react-portal-target"), r = _e(), e && e.c(), n = S(), this.h();
    },
    l(s) {
      t = D(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(t).forEach(c), r = te(s), e && e.l(s), n = S(), this.h();
    },
    h() {
      F(t, "class", "svelte-1rt0kpf");
    },
    m(s, i) {
      m(s, t, i), l[8](t), m(s, r, i), e && e.m(s, i), m(s, n, i), o = !0;
    },
    p(s, [i]) {
      /*$$slots*/
      s[4].default ? e ? (e.p(s, i), i & /*$$slots*/
      16 && g(e, 1)) : (e = R(s), e.c(), g(e, 1), e.m(n.parentNode, n)) : e && (re(), v(e, 1, 1, () => {
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
      s && (c(t), c(r), c(n)), l[8](null), e && e.d(s);
    }
  };
}
function O(l) {
  const {
    svelteInit: t,
    ...r
  } = l;
  return r;
}
function ge(l, t, r) {
  let n, o, {
    $$slots: e = {},
    $$scope: s
  } = t;
  const i = se(e);
  let {
    svelteInit: _
  } = t;
  const u = p(O(t)), f = p();
  x(l, f, (a) => r(0, n = a));
  const d = p();
  x(l, d, (a) => r(1, o = a));
  const h = [], A = fe("$$ms-gr-react-wrapper"), {
    slotKey: N,
    slotIndex: q,
    subSlotIndex: K
  } = G() || {}, U = _({
    parent: A,
    props: u,
    target: f,
    slot: d,
    slotKey: N,
    slotIndex: q,
    subSlotIndex: K,
    onDestroy(a) {
      h.push(a);
    }
  });
  pe("$$ms-gr-react-wrapper", U), ue(() => {
    u.set(O(t));
  }), de(() => {
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
  return l.$$set = (a) => {
    r(17, t = I(I({}, t), E(a))), "svelteInit" in a && r(5, _ = a.svelteInit), "$$scope" in a && r(6, s = a.$$scope);
  }, t = E(t), [n, o, f, d, i, _, s, e, W, z];
}
class we extends $ {
  constructor(t) {
    super(), ae(this, t, ge, me, ie, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: he
} = window.__gradio__svelte__internal, C = window.ms_globals.rerender, b = window.ms_globals.tree;
function be(l, t = {}) {
  function r(n) {
    const o = p(), e = new we({
      ...n,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: o,
            reactComponent: l,
            props: s.props,
            slot: s.slot,
            target: s.target,
            slotIndex: s.slotIndex,
            subSlotIndex: s.subSlotIndex,
            ignore: t.ignore,
            slotKey: s.slotKey,
            nodes: []
          }, _ = s.parent ?? b;
          return _.nodes = [..._.nodes, i], C({
            createPortal: y,
            node: b
          }), s.onDestroy(() => {
            _.nodes = _.nodes.filter((u) => u.svelteInstance !== o), C({
              createPortal: y,
              node: b
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
      n(r);
    });
  });
}
const ye = be(({
  children: l,
  ...t
}) => /* @__PURE__ */ Z.jsx(J, {
  ...t,
  children: l
}));
export {
  ye as Flex,
  ye as default
};
