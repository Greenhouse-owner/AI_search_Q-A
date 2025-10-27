import { w as p, g as M } from "./Index-RoyN-1R1.js";
const T = window.ms_globals.React, y = window.ms_globals.ReactDOM.createPortal, I = window.ms_globals.antd.Divider;
var j = {
  exports: {}
}, v = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V = T, Y = Symbol.for("react.element"), H = Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, X = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Z = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function L(r, t, l) {
  var n, o = {}, e = null, s = null;
  l !== void 0 && (e = "" + l), t.key !== void 0 && (e = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (n in t) Q.call(t, n) && !Z.hasOwnProperty(n) && (o[n] = t[n]);
  if (r && r.defaultProps) for (n in t = r.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: Y,
    type: r,
    key: e,
    ref: s,
    props: o,
    _owner: X.current
  };
}
v.Fragment = H;
v.jsx = L;
v.jsxs = L;
j.exports = v;
var k = j.exports;
const {
  SvelteComponent: $,
  assign: S,
  binding_callbacks: E,
  check_outros: ee,
  children: A,
  claim_element: N,
  claim_space: te,
  component_subscribe: R,
  compute_slots: se,
  create_slot: oe,
  detach: c,
  element: q,
  empty: x,
  exclude_internal_props: C,
  get_all_dirty_from_scope: ne,
  get_slot_changes: re,
  group_outros: le,
  init: ie,
  insert_hydration: m,
  safe_not_equal: ae,
  set_custom_element_data: K,
  space: _e,
  transition_in: g,
  transition_out: b,
  update_slot_base: ce
} = window.__gradio__svelte__internal, {
  beforeUpdate: ue,
  getContext: fe,
  onDestroy: de,
  setContext: pe
} = window.__gradio__svelte__internal;
function O(r) {
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
      t = q("svelte-slot"), o && o.c(), this.h();
    },
    l(e) {
      t = N(e, "SVELTE-SLOT", {
        class: !0
      });
      var s = A(t);
      o && o.l(s), s.forEach(c), this.h();
    },
    h() {
      K(t, "class", "svelte-1rt0kpf");
    },
    m(e, s) {
      m(e, t, s), o && o.m(t, null), r[9](t), l = !0;
    },
    p(e, s) {
      o && o.p && (!l || s & /*$$scope*/
      64) && ce(
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
      e && c(t), o && o.d(e), r[9](null);
    }
  };
}
function me(r) {
  let t, l, n, o, e = (
    /*$$slots*/
    r[4].default && O(r)
  );
  return {
    c() {
      t = q("react-portal-target"), l = _e(), e && e.c(), n = x(), this.h();
    },
    l(s) {
      t = N(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), A(t).forEach(c), l = te(s), e && e.l(s), n = x(), this.h();
    },
    h() {
      K(t, "class", "svelte-1rt0kpf");
    },
    m(s, a) {
      m(s, t, a), r[8](t), m(s, l, a), e && e.m(s, a), m(s, n, a), o = !0;
    },
    p(s, [a]) {
      /*$$slots*/
      s[4].default ? e ? (e.p(s, a), a & /*$$slots*/
      16 && g(e, 1)) : (e = O(s), e.c(), g(e, 1), e.m(n.parentNode, n)) : e && (le(), b(e, 1, 1, () => {
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
      s && (c(t), c(l), c(n)), r[8](null), e && e.d(s);
    }
  };
}
function P(r) {
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
    svelteInit: _
  } = t;
  const u = p(P(t)), f = p();
  R(r, f, (i) => l(0, n = i));
  const d = p();
  R(r, d, (i) => l(1, o = i));
  const h = [], U = fe("$$ms-gr-react-wrapper"), {
    slotKey: F,
    slotIndex: W,
    subSlotIndex: z
  } = M() || {}, B = _({
    parent: U,
    props: u,
    target: f,
    slot: d,
    slotKey: F,
    slotIndex: W,
    subSlotIndex: z,
    onDestroy(i) {
      h.push(i);
    }
  });
  pe("$$ms-gr-react-wrapper", B), ue(() => {
    u.set(P(t));
  }), de(() => {
    h.forEach((i) => i());
  });
  function G(i) {
    E[i ? "unshift" : "push"](() => {
      n = i, f.set(n);
    });
  }
  function J(i) {
    E[i ? "unshift" : "push"](() => {
      o = i, d.set(o);
    });
  }
  return r.$$set = (i) => {
    l(17, t = S(S({}, t), C(i))), "svelteInit" in i && l(5, _ = i.svelteInit), "$$scope" in i && l(6, s = i.$$scope);
  }, t = C(t), [n, o, f, d, a, _, s, e, G, J];
}
class ve extends $ {
  constructor(t) {
    super(), ie(this, t, ge, me, ae, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: he
} = window.__gradio__svelte__internal, D = window.ms_globals.rerender, w = window.ms_globals.tree;
function we(r, t = {}) {
  function l(n) {
    const o = p(), e = new ve({
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
          }, _ = s.parent ?? w;
          return _.nodes = [..._.nodes, a], D({
            createPortal: y,
            node: w
          }), s.onDestroy(() => {
            _.nodes = _.nodes.filter((u) => u.svelteInstance !== o), D({
              createPortal: y,
              node: w
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
const ye = we(({
  children: r,
  ...t
}) => T.Children.count(r) > 0 ? /* @__PURE__ */ k.jsx(I, {
  ...t,
  children: r
}) : /* @__PURE__ */ k.jsx(I, {
  ...t
}));
export {
  ye as Divider,
  ye as default
};
