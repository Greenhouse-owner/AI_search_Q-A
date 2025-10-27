import { w as m, g as B, c as G } from "./Index-CuZ2Nd3F.js";
const z = window.ms_globals.React, y = window.ms_globals.ReactDOM.createPortal, H = window.ms_globals.createItemsContext.createItemsContext;
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
var J = z, V = Symbol.for("react.element"), Y = Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, X = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Z = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function T(r, e, l) {
  var o, n = {}, t = null, s = null;
  l !== void 0 && (t = "" + l), e.key !== void 0 && (t = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (o in e) Q.call(e, o) && !Z.hasOwnProperty(o) && (n[o] = e[o]);
  if (r && r.defaultProps) for (o in e = r.defaultProps, e) n[o] === void 0 && (n[o] = e[o]);
  return {
    $$typeof: V,
    type: r,
    key: t,
    ref: s,
    props: n,
    _owner: X.current
  };
}
w.Fragment = Y;
w.jsx = T;
w.jsxs = T;
P.exports = w;
var $ = P.exports;
const {
  SvelteComponent: ee,
  assign: I,
  binding_callbacks: x,
  check_outros: te,
  children: j,
  claim_element: D,
  claim_space: se,
  component_subscribe: S,
  compute_slots: ne,
  create_slot: oe,
  detach: u,
  element: L,
  empty: k,
  exclude_internal_props: C,
  get_all_dirty_from_scope: re,
  get_slot_changes: le,
  group_outros: ae,
  init: ie,
  insert_hydration: p,
  safe_not_equal: ce,
  set_custom_element_data: N,
  space: ue,
  transition_in: g,
  transition_out: h,
  update_slot_base: _e
} = window.__gradio__svelte__internal, {
  beforeUpdate: fe,
  getContext: de,
  onDestroy: me,
  setContext: pe
} = window.__gradio__svelte__internal;
function E(r) {
  let e, l;
  const o = (
    /*#slots*/
    r[7].default
  ), n = oe(
    o,
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
      var s = j(e);
      n && n.l(s), s.forEach(u), this.h();
    },
    h() {
      N(e, "class", "svelte-1rt0kpf");
    },
    m(t, s) {
      p(t, e, s), n && n.m(e, null), r[9](e), l = !0;
    },
    p(t, s) {
      n && n.p && (!l || s & /*$$scope*/
      64) && _e(
        n,
        o,
        t,
        /*$$scope*/
        t[6],
        l ? le(
          o,
          /*$$scope*/
          t[6],
          s,
          null
        ) : re(
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
      h(n, t), l = !1;
    },
    d(t) {
      t && u(e), n && n.d(t), r[9](null);
    }
  };
}
function ge(r) {
  let e, l, o, n, t = (
    /*$$slots*/
    r[4].default && E(r)
  );
  return {
    c() {
      e = L("react-portal-target"), l = ue(), t && t.c(), o = k(), this.h();
    },
    l(s) {
      e = D(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(e).forEach(u), l = se(s), t && t.l(s), o = k(), this.h();
    },
    h() {
      N(e, "class", "svelte-1rt0kpf");
    },
    m(s, i) {
      p(s, e, i), r[8](e), p(s, l, i), t && t.m(s, i), p(s, o, i), n = !0;
    },
    p(s, [i]) {
      /*$$slots*/
      s[4].default ? t ? (t.p(s, i), i & /*$$slots*/
      16 && g(t, 1)) : (t = E(s), t.c(), g(t, 1), t.m(o.parentNode, o)) : t && (ae(), h(t, 1, 1, () => {
        t = null;
      }), te());
    },
    i(s) {
      n || (g(t), n = !0);
    },
    o(s) {
      h(t), n = !1;
    },
    d(s) {
      s && (u(e), u(l), u(o)), r[8](null), t && t.d(s);
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
function we(r, e, l) {
  let o, n, {
    $$slots: t = {},
    $$scope: s
  } = e;
  const i = ne(t);
  let {
    svelteInit: c
  } = e;
  const _ = m(R(e)), f = m();
  S(r, f, (a) => l(0, o = a));
  const d = m();
  S(r, d, (a) => l(1, n = a));
  const v = [], A = de("$$ms-gr-react-wrapper"), {
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U
  } = B() || {}, F = c({
    parent: A,
    props: _,
    target: f,
    slot: d,
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U,
    onDestroy(a) {
      v.push(a);
    }
  });
  pe("$$ms-gr-react-wrapper", F), fe(() => {
    _.set(R(e));
  }), me(() => {
    v.forEach((a) => a());
  });
  function M(a) {
    x[a ? "unshift" : "push"](() => {
      o = a, f.set(o);
    });
  }
  function W(a) {
    x[a ? "unshift" : "push"](() => {
      n = a, d.set(n);
    });
  }
  return r.$$set = (a) => {
    l(17, e = I(I({}, e), C(a))), "svelteInit" in a && l(5, c = a.svelteInit), "$$scope" in a && l(6, s = a.$$scope);
  }, e = C(e), [o, n, f, d, i, c, s, t, M, W];
}
class be extends ee {
  constructor(e) {
    super(), ie(this, e, we, ge, ce, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: Ie
} = window.__gradio__svelte__internal, O = window.ms_globals.rerender, b = window.ms_globals.tree;
function he(r, e = {}) {
  function l(o) {
    const n = m(), t = new be({
      ...o,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: n,
            reactComponent: r,
            props: s.props,
            slot: s.slot,
            target: s.target,
            slotIndex: s.slotIndex,
            subSlotIndex: s.subSlotIndex,
            ignore: e.ignore,
            slotKey: s.slotKey,
            nodes: []
          }, c = s.parent ?? b;
          return c.nodes = [...c.nodes, i], O({
            createPortal: y,
            node: b
          }), s.onDestroy(() => {
            c.nodes = c.nodes.filter((_) => _.svelteInstance !== n), O({
              createPortal: y,
              node: b
            });
          }), i;
        },
        ...o.props
      }
    });
    return n.set(t), t;
  }
  return new Promise((o) => {
    window.ms_globals.initializePromise.then(() => {
      o(l);
    });
  });
}
const {
  useItems: xe,
  withItemsContextProvider: Se,
  ItemHandler: ve
} = H("antd-menu-items"), ke = he((r) => /* @__PURE__ */ $.jsx(ve, {
  ...r,
  allowedSlots: ["default"],
  itemProps: (e, l) => ({
    ...e,
    className: G(e.className, e.type ? `ms-gr-antd-menu-item-${e.type}` : "ms-gr-antd-menu-item", l.default.length > 0 ? "ms-gr-antd-menu-item-submenu" : "")
  }),
  itemChildren: (e) => e.default.length > 0 ? e.default : void 0
}));
export {
  ke as MenuItem,
  ke as default
};
