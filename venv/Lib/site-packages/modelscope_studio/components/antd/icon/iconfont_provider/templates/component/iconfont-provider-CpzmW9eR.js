import { b as Y, w as m, g as H } from "./Index-BbeXkWQR.js";
const G = window.ms_globals.React, J = window.ms_globals.React.createContext, U = window.ms_globals.React.useRef, V = window.ms_globals.React.useMemo, I = window.ms_globals.ReactDOM.createPortal, Q = window.ms_globals.antdIcons.createFromIconfontCN;
function y(l, e) {
  return Y(l, e);
}
var T = {
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
var X = G, Z = Symbol.for("react.element"), $ = Symbol.for("react.fragment"), ee = Object.prototype.hasOwnProperty, te = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ne = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function j(l, e, r) {
  var o, s = {}, t = null, n = null;
  r !== void 0 && (t = "" + r), e.key !== void 0 && (t = "" + e.key), e.ref !== void 0 && (n = e.ref);
  for (o in e) ee.call(e, o) && !ne.hasOwnProperty(o) && (s[o] = e[o]);
  if (l && l.defaultProps) for (o in e = l.defaultProps, e) s[o] === void 0 && (s[o] = e[o]);
  return {
    $$typeof: Z,
    type: l,
    key: t,
    ref: n,
    props: s,
    _owner: te.current
  };
}
g.Fragment = $;
g.jsx = j;
g.jsxs = j;
T.exports = g;
var oe = T.exports;
const {
  SvelteComponent: se,
  assign: R,
  binding_callbacks: E,
  check_outros: re,
  children: D,
  claim_element: F,
  claim_space: le,
  component_subscribe: k,
  compute_slots: ce,
  create_slot: ae,
  detach: u,
  element: L,
  empty: S,
  exclude_internal_props: x,
  get_all_dirty_from_scope: ie,
  get_slot_changes: ue,
  group_outros: _e,
  init: fe,
  insert_hydration: p,
  safe_not_equal: de,
  set_custom_element_data: N,
  space: me,
  transition_in: w,
  transition_out: v,
  update_slot_base: pe
} = window.__gradio__svelte__internal, {
  beforeUpdate: we,
  getContext: ge,
  onDestroy: be,
  setContext: ve
} = window.__gradio__svelte__internal;
function C(l) {
  let e, r;
  const o = (
    /*#slots*/
    l[7].default
  ), s = ae(
    o,
    l,
    /*$$scope*/
    l[6],
    null
  );
  return {
    c() {
      e = L("svelte-slot"), s && s.c(), this.h();
    },
    l(t) {
      e = F(t, "SVELTE-SLOT", {
        class: !0
      });
      var n = D(e);
      s && s.l(n), n.forEach(u), this.h();
    },
    h() {
      N(e, "class", "svelte-1rt0kpf");
    },
    m(t, n) {
      p(t, e, n), s && s.m(e, null), l[9](e), r = !0;
    },
    p(t, n) {
      s && s.p && (!r || n & /*$$scope*/
      64) && pe(
        s,
        o,
        t,
        /*$$scope*/
        t[6],
        r ? ue(
          o,
          /*$$scope*/
          t[6],
          n,
          null
        ) : ie(
          /*$$scope*/
          t[6]
        ),
        null
      );
    },
    i(t) {
      r || (w(s, t), r = !0);
    },
    o(t) {
      v(s, t), r = !1;
    },
    d(t) {
      t && u(e), s && s.d(t), l[9](null);
    }
  };
}
function he(l) {
  let e, r, o, s, t = (
    /*$$slots*/
    l[4].default && C(l)
  );
  return {
    c() {
      e = L("react-portal-target"), r = me(), t && t.c(), o = S(), this.h();
    },
    l(n) {
      e = F(n, "REACT-PORTAL-TARGET", {
        class: !0
      }), D(e).forEach(u), r = le(n), t && t.l(n), o = S(), this.h();
    },
    h() {
      N(e, "class", "svelte-1rt0kpf");
    },
    m(n, a) {
      p(n, e, a), l[8](e), p(n, r, a), t && t.m(n, a), p(n, o, a), s = !0;
    },
    p(n, [a]) {
      /*$$slots*/
      n[4].default ? t ? (t.p(n, a), a & /*$$slots*/
      16 && w(t, 1)) : (t = C(n), t.c(), w(t, 1), t.m(o.parentNode, o)) : t && (_e(), v(t, 1, 1, () => {
        t = null;
      }), re());
    },
    i(n) {
      s || (w(t), s = !0);
    },
    o(n) {
      v(t), s = !1;
    },
    d(n) {
      n && (u(e), u(r), u(o)), l[8](null), t && t.d(n);
    }
  };
}
function O(l) {
  const {
    svelteInit: e,
    ...r
  } = l;
  return r;
}
function Ie(l, e, r) {
  let o, s, {
    $$slots: t = {},
    $$scope: n
  } = e;
  const a = ce(t);
  let {
    svelteInit: i
  } = e;
  const _ = m(O(e)), f = m();
  k(l, f, (c) => r(0, o = c));
  const d = m();
  k(l, d, (c) => r(1, s = c));
  const h = [], q = ge("$$ms-gr-react-wrapper"), {
    slotKey: A,
    slotIndex: K,
    subSlotIndex: M
  } = H() || {}, W = i({
    parent: q,
    props: _,
    target: f,
    slot: d,
    slotKey: A,
    slotIndex: K,
    subSlotIndex: M,
    onDestroy(c) {
      h.push(c);
    }
  });
  ve("$$ms-gr-react-wrapper", W), we(() => {
    _.set(O(e));
  }), be(() => {
    h.forEach((c) => c());
  });
  function z(c) {
    E[c ? "unshift" : "push"](() => {
      o = c, f.set(o);
    });
  }
  function B(c) {
    E[c ? "unshift" : "push"](() => {
      s = c, d.set(s);
    });
  }
  return l.$$set = (c) => {
    r(17, e = R(R({}, e), x(c))), "svelteInit" in c && r(5, i = c.svelteInit), "$$scope" in c && r(6, n = c.$$scope);
  }, e = x(e), [o, s, f, d, a, i, n, t, z, B];
}
class ye extends se {
  constructor(e) {
    super(), fe(this, e, Ie, he, de, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: Se
} = window.__gradio__svelte__internal, P = window.ms_globals.rerender, b = window.ms_globals.tree;
function Re(l, e = {}) {
  function r(o) {
    const s = m(), t = new ye({
      ...o,
      props: {
        svelteInit(n) {
          window.ms_globals.autokey += 1;
          const a = {
            key: window.ms_globals.autokey,
            svelteInstance: s,
            reactComponent: l,
            props: n.props,
            slot: n.slot,
            target: n.target,
            slotIndex: n.slotIndex,
            subSlotIndex: n.subSlotIndex,
            ignore: e.ignore,
            slotKey: n.slotKey,
            nodes: []
          }, i = n.parent ?? b;
          return i.nodes = [...i.nodes, a], P({
            createPortal: I,
            node: b
          }), n.onDestroy(() => {
            i.nodes = i.nodes.filter((_) => _.svelteInstance !== s), P({
              createPortal: I,
              node: b
            });
          }), a;
        },
        ...o.props
      }
    });
    return s.set(t), t;
  }
  return new Promise((o) => {
    window.ms_globals.initializePromise.then(() => {
      o(r);
    });
  });
}
const Ee = J(null), xe = Re(({
  children: l,
  extraCommonProps: e,
  scriptUrl: r
}) => {
  const o = U({}), s = V(() => (o.current.iconfont && y(o.current.scriptUrl, r) && y(o.current.extraCommonProps, e) || (o.current = {
    scriptUrl: r,
    extraCommonProps: e,
    iconfont: Q({
      scriptUrl: r,
      extraCommonProps: e
    })
  }), o.current.iconfont), [e, r]);
  return /* @__PURE__ */ oe.jsx(Ee.Provider, {
    value: s || null,
    children: l
  });
});
export {
  xe as Icon,
  xe as default
};
