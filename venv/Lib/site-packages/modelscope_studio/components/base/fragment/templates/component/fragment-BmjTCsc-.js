import { w as p, g as J } from "./Index-Dh8P2jf0.js";
const G = window.ms_globals.React, y = window.ms_globals.ReactDOM.createPortal;
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
var M = G, V = Symbol.for("react.element"), Y = Symbol.for("react.fragment"), H = Object.prototype.hasOwnProperty, Q = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, X = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function j(r, t, l) {
  var n, o = {}, e = null, s = null;
  l !== void 0 && (e = "" + l), t.key !== void 0 && (e = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (n in t) H.call(t, n) && !X.hasOwnProperty(n) && (o[n] = t[n]);
  if (r && r.defaultProps) for (n in t = r.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: V,
    type: r,
    key: e,
    ref: s,
    props: o,
    _owner: Q.current
  };
}
b.Fragment = Y;
b.jsx = j;
b.jsxs = j;
T.exports = b;
var I = T.exports;
const {
  SvelteComponent: Z,
  assign: k,
  binding_callbacks: S,
  check_outros: $,
  children: D,
  claim_element: L,
  claim_space: ee,
  component_subscribe: E,
  compute_slots: te,
  create_slot: se,
  detach: c,
  element: A,
  empty: R,
  exclude_internal_props: x,
  get_all_dirty_from_scope: oe,
  get_slot_changes: ne,
  group_outros: re,
  init: le,
  insert_hydration: m,
  safe_not_equal: ae,
  set_custom_element_data: F,
  space: ie,
  transition_in: g,
  transition_out: w,
  update_slot_base: _e
} = window.__gradio__svelte__internal, {
  beforeUpdate: ce,
  getContext: ue,
  onDestroy: fe,
  setContext: de
} = window.__gradio__svelte__internal;
function O(r) {
  let t, l;
  const n = (
    /*#slots*/
    r[7].default
  ), o = se(
    n,
    r,
    /*$$scope*/
    r[6],
    null
  );
  return {
    c() {
      t = A("svelte-slot"), o && o.c(), this.h();
    },
    l(e) {
      t = L(e, "SVELTE-SLOT", {
        class: !0
      });
      var s = D(t);
      o && o.l(s), s.forEach(c), this.h();
    },
    h() {
      F(t, "class", "svelte-1rt0kpf");
    },
    m(e, s) {
      m(e, t, s), o && o.m(t, null), r[9](t), l = !0;
    },
    p(e, s) {
      o && o.p && (!l || s & /*$$scope*/
      64) && _e(
        o,
        n,
        e,
        /*$$scope*/
        e[6],
        l ? ne(
          n,
          /*$$scope*/
          e[6],
          s,
          null
        ) : oe(
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
function pe(r) {
  let t, l, n, o, e = (
    /*$$slots*/
    r[4].default && O(r)
  );
  return {
    c() {
      t = A("react-portal-target"), l = ie(), e && e.c(), n = R(), this.h();
    },
    l(s) {
      t = L(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), D(t).forEach(c), l = ee(s), e && e.l(s), n = R(), this.h();
    },
    h() {
      F(t, "class", "svelte-1rt0kpf");
    },
    m(s, i) {
      m(s, t, i), r[8](t), m(s, l, i), e && e.m(s, i), m(s, n, i), o = !0;
    },
    p(s, [i]) {
      /*$$slots*/
      s[4].default ? e ? (e.p(s, i), i & /*$$slots*/
      16 && g(e, 1)) : (e = O(s), e.c(), g(e, 1), e.m(n.parentNode, n)) : e && (re(), w(e, 1, 1, () => {
        e = null;
      }), $());
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
function C(r) {
  const {
    svelteInit: t,
    ...l
  } = r;
  return l;
}
function me(r, t, l) {
  let n, o, {
    $$slots: e = {},
    $$scope: s
  } = t;
  const i = te(e);
  let {
    svelteInit: _
  } = t;
  const u = p(C(t)), f = p();
  E(r, f, (a) => l(0, n = a));
  const d = p();
  E(r, d, (a) => l(1, o = a));
  const h = [], N = ue("$$ms-gr-react-wrapper"), {
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U
  } = J() || {}, W = _({
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
  de("$$ms-gr-react-wrapper", W), ce(() => {
    u.set(C(t));
  }), fe(() => {
    h.forEach((a) => a());
  });
  function z(a) {
    S[a ? "unshift" : "push"](() => {
      n = a, f.set(n);
    });
  }
  function B(a) {
    S[a ? "unshift" : "push"](() => {
      o = a, d.set(o);
    });
  }
  return r.$$set = (a) => {
    l(17, t = k(k({}, t), x(a))), "svelteInit" in a && l(5, _ = a.svelteInit), "$$scope" in a && l(6, s = a.$$scope);
  }, t = x(t), [n, o, f, d, i, _, s, e, z, B];
}
class ge extends Z {
  constructor(t) {
    super(), le(this, t, me, pe, ae, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: we
} = window.__gradio__svelte__internal, P = window.ms_globals.rerender, v = window.ms_globals.tree;
function be(r, t = {}) {
  function l(n) {
    const o = p(), e = new ge({
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
          return _.nodes = [..._.nodes, i], P({
            createPortal: y,
            node: v
          }), s.onDestroy(() => {
            _.nodes = _.nodes.filter((u) => u.svelteInstance !== o), P({
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
const he = be(({
  children: r
}) => /* @__PURE__ */ I.jsx(I.Fragment, {
  children: r
}));
export {
  he as Fragment,
  he as default
};
