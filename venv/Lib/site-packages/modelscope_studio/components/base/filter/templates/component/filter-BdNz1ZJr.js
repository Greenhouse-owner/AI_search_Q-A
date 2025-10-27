import { w as p, g as V, i as Y } from "./Index-Bg1q6Xgl.js";
const z = window.ms_globals.React, B = window.ms_globals.React.useMemo, G = window.ms_globals.React.useState, J = window.ms_globals.React.useEffect, y = window.ms_globals.ReactDOM.createPortal, H = window.ms_globals.internalContext.useContextPropsContext, Q = window.ms_globals.internalContext.ContextPropsProvider;
var O = {
  exports: {}
}, g = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X = z, Z = Symbol.for("react.element"), $ = Symbol.for("react.fragment"), ee = Object.prototype.hasOwnProperty, te = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ne = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function F(s, e, o) {
  var r, l = {}, t = null, n = null;
  o !== void 0 && (t = "" + o), e.key !== void 0 && (t = "" + e.key), e.ref !== void 0 && (n = e.ref);
  for (r in e) ee.call(e, r) && !ne.hasOwnProperty(r) && (l[r] = e[r]);
  if (s && s.defaultProps) for (r in e = s.defaultProps, e) l[r] === void 0 && (l[r] = e[r]);
  return {
    $$typeof: Z,
    type: s,
    key: t,
    ref: n,
    props: l,
    _owner: te.current
  };
}
g.Fragment = $;
g.jsx = F;
g.jsxs = F;
O.exports = g;
var se = O.exports;
const {
  SvelteComponent: oe,
  assign: x,
  binding_callbacks: C,
  check_outros: re,
  children: T,
  claim_element: j,
  claim_space: le,
  component_subscribe: R,
  compute_slots: ie,
  create_slot: ce,
  detach: a,
  element: D,
  empty: S,
  exclude_internal_props: E,
  get_all_dirty_from_scope: ue,
  get_slot_changes: ae,
  group_outros: fe,
  init: _e,
  insert_hydration: m,
  safe_not_equal: de,
  set_custom_element_data: L,
  space: pe,
  transition_in: w,
  transition_out: b,
  update_slot_base: me
} = window.__gradio__svelte__internal, {
  beforeUpdate: we,
  getContext: ge,
  onDestroy: ve,
  setContext: be
} = window.__gradio__svelte__internal;
function P(s) {
  let e, o;
  const r = (
    /*#slots*/
    s[7].default
  ), l = ce(
    r,
    s,
    /*$$scope*/
    s[6],
    null
  );
  return {
    c() {
      e = D("svelte-slot"), l && l.c(), this.h();
    },
    l(t) {
      e = j(t, "SVELTE-SLOT", {
        class: !0
      });
      var n = T(e);
      l && l.l(n), n.forEach(a), this.h();
    },
    h() {
      L(e, "class", "svelte-1rt0kpf");
    },
    m(t, n) {
      m(t, e, n), l && l.m(e, null), s[9](e), o = !0;
    },
    p(t, n) {
      l && l.p && (!o || n & /*$$scope*/
      64) && me(
        l,
        r,
        t,
        /*$$scope*/
        t[6],
        o ? ae(
          r,
          /*$$scope*/
          t[6],
          n,
          null
        ) : ue(
          /*$$scope*/
          t[6]
        ),
        null
      );
    },
    i(t) {
      o || (w(l, t), o = !0);
    },
    o(t) {
      b(l, t), o = !1;
    },
    d(t) {
      t && a(e), l && l.d(t), s[9](null);
    }
  };
}
function he(s) {
  let e, o, r, l, t = (
    /*$$slots*/
    s[4].default && P(s)
  );
  return {
    c() {
      e = D("react-portal-target"), o = pe(), t && t.c(), r = S(), this.h();
    },
    l(n) {
      e = j(n, "REACT-PORTAL-TARGET", {
        class: !0
      }), T(e).forEach(a), o = le(n), t && t.l(n), r = S(), this.h();
    },
    h() {
      L(e, "class", "svelte-1rt0kpf");
    },
    m(n, c) {
      m(n, e, c), s[8](e), m(n, o, c), t && t.m(n, c), m(n, r, c), l = !0;
    },
    p(n, [c]) {
      /*$$slots*/
      n[4].default ? t ? (t.p(n, c), c & /*$$slots*/
      16 && w(t, 1)) : (t = P(n), t.c(), w(t, 1), t.m(r.parentNode, r)) : t && (fe(), b(t, 1, 1, () => {
        t = null;
      }), re());
    },
    i(n) {
      l || (w(t), l = !0);
    },
    o(n) {
      b(t), l = !1;
    },
    d(n) {
      n && (a(e), a(o), a(r)), s[8](null), t && t.d(n);
    }
  };
}
function k(s) {
  const {
    svelteInit: e,
    ...o
  } = s;
  return o;
}
function ye(s, e, o) {
  let r, l, {
    $$slots: t = {},
    $$scope: n
  } = e;
  const c = ie(t);
  let {
    svelteInit: u
  } = e;
  const f = p(k(e)), _ = p();
  R(s, _, (i) => o(0, r = i));
  const d = p();
  R(s, d, (i) => o(1, l = i));
  const h = [], A = ge("$$ms-gr-react-wrapper"), {
    slotKey: M,
    slotIndex: N,
    subSlotIndex: W
  } = V() || {}, q = u({
    parent: A,
    props: f,
    target: _,
    slot: d,
    slotKey: M,
    slotIndex: N,
    subSlotIndex: W,
    onDestroy(i) {
      h.push(i);
    }
  });
  be("$$ms-gr-react-wrapper", q), we(() => {
    f.set(k(e));
  }), ve(() => {
    h.forEach((i) => i());
  });
  function K(i) {
    C[i ? "unshift" : "push"](() => {
      r = i, _.set(r);
    });
  }
  function U(i) {
    C[i ? "unshift" : "push"](() => {
      l = i, d.set(l);
    });
  }
  return s.$$set = (i) => {
    o(17, e = x(x({}, e), E(i))), "svelteInit" in i && o(5, u = i.svelteInit), "$$scope" in i && o(6, n = i.$$scope);
  }, e = E(e), [r, l, _, d, c, u, n, t, K, U];
}
class xe extends oe {
  constructor(e) {
    super(), _e(this, e, ye, he, de, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ke
} = window.__gradio__svelte__internal, I = window.ms_globals.rerender, v = window.ms_globals.tree;
function Ce(s, e = {}) {
  function o(r) {
    const l = p(), t = new xe({
      ...r,
      props: {
        svelteInit(n) {
          window.ms_globals.autokey += 1;
          const c = {
            key: window.ms_globals.autokey,
            svelteInstance: l,
            reactComponent: s,
            props: n.props,
            slot: n.slot,
            target: n.target,
            slotIndex: n.slotIndex,
            subSlotIndex: n.subSlotIndex,
            ignore: e.ignore,
            slotKey: n.slotKey,
            nodes: []
          }, u = n.parent ?? v;
          return u.nodes = [...u.nodes, c], I({
            createPortal: y,
            node: v
          }), n.onDestroy(() => {
            u.nodes = u.nodes.filter((f) => f.svelteInstance !== l), I({
              createPortal: y,
              node: v
            });
          }), c;
        },
        ...r.props
      }
    });
    return l.set(t), t;
  }
  return new Promise((r) => {
    window.ms_globals.initializePromise.then(() => {
      r(o);
    });
  });
}
function Re(s) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(s.trim());
}
function Se(s, e = !1) {
  try {
    if (Y(s))
      return s;
    if (e && !Re(s))
      return;
    if (typeof s == "string") {
      let o = s.trim();
      return o.startsWith(";") && (o = o.slice(1)), o.endsWith(";") && (o = o.slice(0, -1)), new Function(`return (...args) => (${o})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function Ee(s, e) {
  return B(() => Se(s, e), [s, e]);
}
const Ie = Ce(({
  children: s,
  paramsMapping: e,
  asItem: o
}) => {
  const r = Ee(e), [l, t] = G(void 0), {
    forceClone: n,
    ctx: c
  } = H();
  return J(() => {
    r ? t(r(c)) : o && t(c == null ? void 0 : c[o]);
  }, [o, c, r]), /* @__PURE__ */ se.jsx(Q, {
    forceClone: n,
    ctx: l,
    mergeContext: !1,
    children: s
  });
});
export {
  Ie as Filter,
  Ie as default
};
