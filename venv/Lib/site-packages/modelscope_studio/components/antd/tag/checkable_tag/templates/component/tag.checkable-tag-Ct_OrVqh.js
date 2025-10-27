import { w as m, g as Y, d as H, a as _ } from "./Index-CNo2eL4f.js";
const P = window.ms_globals.React, j = window.ms_globals.React.useMemo, G = window.ms_globals.React.useState, J = window.ms_globals.React.useEffect, S = window.ms_globals.ReactDOM.createPortal, Q = window.ms_globals.antd.Tag;
var A = {
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
var X = P, Z = Symbol.for("react.element"), $ = Symbol.for("react.fragment"), ee = Object.prototype.hasOwnProperty, te = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, se = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function D(o, t, l) {
  var n, r = {}, e = null, s = null;
  l !== void 0 && (e = "" + l), t.key !== void 0 && (e = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (n in t) ee.call(t, n) && !se.hasOwnProperty(n) && (r[n] = t[n]);
  if (o && o.defaultProps) for (n in t = o.defaultProps, t) r[n] === void 0 && (r[n] = t[n]);
  return {
    $$typeof: Z,
    type: o,
    key: e,
    ref: s,
    props: r,
    _owner: te.current
  };
}
w.Fragment = $;
w.jsx = D;
w.jsxs = D;
A.exports = w;
var oe = A.exports;
const {
  SvelteComponent: ne,
  assign: h,
  binding_callbacks: x,
  check_outros: re,
  children: L,
  claim_element: N,
  claim_space: le,
  component_subscribe: k,
  compute_slots: ae,
  create_slot: ue,
  detach: c,
  element: q,
  empty: R,
  exclude_internal_props: E,
  get_all_dirty_from_scope: ie,
  get_slot_changes: ce,
  group_outros: _e,
  init: de,
  insert_hydration: g,
  safe_not_equal: fe,
  set_custom_element_data: K,
  space: pe,
  transition_in: b,
  transition_out: I,
  update_slot_base: me
} = window.__gradio__svelte__internal, {
  beforeUpdate: ge,
  getContext: be,
  onDestroy: we,
  setContext: ve
} = window.__gradio__svelte__internal;
function T(o) {
  let t, l;
  const n = (
    /*#slots*/
    o[7].default
  ), r = ue(
    n,
    o,
    /*$$scope*/
    o[6],
    null
  );
  return {
    c() {
      t = q("svelte-slot"), r && r.c(), this.h();
    },
    l(e) {
      t = N(e, "SVELTE-SLOT", {
        class: !0
      });
      var s = L(t);
      r && r.l(s), s.forEach(c), this.h();
    },
    h() {
      K(t, "class", "svelte-1rt0kpf");
    },
    m(e, s) {
      g(e, t, s), r && r.m(t, null), o[9](t), l = !0;
    },
    p(e, s) {
      r && r.p && (!l || s & /*$$scope*/
      64) && me(
        r,
        n,
        e,
        /*$$scope*/
        e[6],
        l ? ce(
          n,
          /*$$scope*/
          e[6],
          s,
          null
        ) : ie(
          /*$$scope*/
          e[6]
        ),
        null
      );
    },
    i(e) {
      l || (b(r, e), l = !0);
    },
    o(e) {
      I(r, e), l = !1;
    },
    d(e) {
      e && c(t), r && r.d(e), o[9](null);
    }
  };
}
function Ie(o) {
  let t, l, n, r, e = (
    /*$$slots*/
    o[4].default && T(o)
  );
  return {
    c() {
      t = q("react-portal-target"), l = pe(), e && e.c(), n = R(), this.h();
    },
    l(s) {
      t = N(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), L(t).forEach(c), l = le(s), e && e.l(s), n = R(), this.h();
    },
    h() {
      K(t, "class", "svelte-1rt0kpf");
    },
    m(s, u) {
      g(s, t, u), o[8](t), g(s, l, u), e && e.m(s, u), g(s, n, u), r = !0;
    },
    p(s, [u]) {
      /*$$slots*/
      s[4].default ? e ? (e.p(s, u), u & /*$$slots*/
      16 && b(e, 1)) : (e = T(s), e.c(), b(e, 1), e.m(n.parentNode, n)) : e && (_e(), I(e, 1, 1, () => {
        e = null;
      }), re());
    },
    i(s) {
      r || (b(e), r = !0);
    },
    o(s) {
      I(e), r = !1;
    },
    d(s) {
      s && (c(t), c(l), c(n)), o[8](null), e && e.d(s);
    }
  };
}
function C(o) {
  const {
    svelteInit: t,
    ...l
  } = o;
  return l;
}
function ye(o, t, l) {
  let n, r, {
    $$slots: e = {},
    $$scope: s
  } = t;
  const u = ae(e);
  let {
    svelteInit: i
  } = t;
  const d = m(C(t)), f = m();
  k(o, f, (a) => l(0, n = a));
  const p = m();
  k(o, p, (a) => l(1, r = a));
  const y = [], M = be("$$ms-gr-react-wrapper"), {
    slotKey: U,
    slotIndex: B,
    subSlotIndex: F
  } = Y() || {}, V = i({
    parent: M,
    props: d,
    target: f,
    slot: p,
    slotKey: U,
    slotIndex: B,
    subSlotIndex: F,
    onDestroy(a) {
      y.push(a);
    }
  });
  ve("$$ms-gr-react-wrapper", V), ge(() => {
    d.set(C(t));
  }), we(() => {
    y.forEach((a) => a());
  });
  function W(a) {
    x[a ? "unshift" : "push"](() => {
      n = a, f.set(n);
    });
  }
  function z(a) {
    x[a ? "unshift" : "push"](() => {
      r = a, p.set(r);
    });
  }
  return o.$$set = (a) => {
    l(17, t = h(h({}, t), E(a))), "svelteInit" in a && l(5, i = a.svelteInit), "$$scope" in a && l(6, s = a.$$scope);
  }, t = E(t), [n, r, f, p, u, i, s, e, W, z];
}
class Se extends ne {
  constructor(t) {
    super(), de(this, t, ye, Ie, fe, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: Te
} = window.__gradio__svelte__internal, O = window.ms_globals.rerender, v = window.ms_globals.tree;
function he(o, t = {}) {
  function l(n) {
    const r = m(), e = new Se({
      ...n,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const u = {
            key: window.ms_globals.autokey,
            svelteInstance: r,
            reactComponent: o,
            props: s.props,
            slot: s.slot,
            target: s.target,
            slotIndex: s.slotIndex,
            subSlotIndex: s.subSlotIndex,
            ignore: t.ignore,
            slotKey: s.slotKey,
            nodes: []
          }, i = s.parent ?? v;
          return i.nodes = [...i.nodes, u], O({
            createPortal: S,
            node: v
          }), s.onDestroy(() => {
            i.nodes = i.nodes.filter((d) => d.svelteInstance !== r), O({
              createPortal: S,
              node: v
            });
          }), u;
        },
        ...n.props
      }
    });
    return r.set(e), e;
  }
  return new Promise((n) => {
    window.ms_globals.initializePromise.then(() => {
      n(l);
    });
  });
}
function xe(o) {
  const [t, l] = G(() => _(o));
  return J(() => {
    let n = !0;
    return o.subscribe((e) => {
      n && (n = !1, e === t) || l(e);
    });
  }, [o]), t;
}
function ke(o) {
  const t = j(() => H(o, (l) => l), [o]);
  return xe(t);
}
function Re(o, t) {
  const l = j(() => P.Children.toArray(o.originalChildren || o).filter((e) => e.props.node && !e.props.node.ignore && (!e.props.nodeSlotKey || t)).sort((e, s) => {
    if (e.props.node.slotIndex && s.props.node.slotIndex) {
      const u = _(e.props.node.slotIndex) || 0, i = _(s.props.node.slotIndex) || 0;
      return u - i === 0 && e.props.node.subSlotIndex && s.props.node.subSlotIndex ? (_(e.props.node.subSlotIndex) || 0) - (_(s.props.node.subSlotIndex) || 0) : u - i;
    }
    return 0;
  }).map((e) => e.props.node.target), [o, t]);
  return ke(l);
}
const Ce = he(({
  onChange: o,
  onValueChange: t,
  children: l,
  label: n,
  ...r
}) => {
  const e = Re(l);
  return /* @__PURE__ */ oe.jsx(Q.CheckableTag, {
    ...r,
    onChange: (s) => {
      o == null || o(s), t(s);
    },
    children: e.length > 0 ? l : n
  });
});
export {
  Ce as CheckableTag,
  Ce as default
};
