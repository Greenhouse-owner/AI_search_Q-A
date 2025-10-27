import { w as m, g as V } from "./Index-BGa-IAqD.js";
const T = window.ms_globals.React, J = window.ms_globals.React.createContext, M = window.ms_globals.React.useContext, I = window.ms_globals.ReactDOM.createPortal, Y = window.ms_globals.antdIcons;
var j = {
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
var H = T, Q = Symbol.for("react.element"), X = Symbol.for("react.fragment"), Z = Object.prototype.hasOwnProperty, $ = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ee = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function D(l, t, r) {
  var n, s = {}, e = null, o = null;
  r !== void 0 && (e = "" + r), t.key !== void 0 && (e = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) Z.call(t, n) && !ee.hasOwnProperty(n) && (s[n] = t[n]);
  if (l && l.defaultProps) for (n in t = l.defaultProps, t) s[n] === void 0 && (s[n] = t[n]);
  return {
    $$typeof: Q,
    type: l,
    key: e,
    ref: o,
    props: s,
    _owner: $.current
  };
}
w.Fragment = X;
w.jsx = D;
w.jsxs = D;
j.exports = w;
var b = j.exports;
const {
  SvelteComponent: te,
  assign: x,
  binding_callbacks: C,
  check_outros: oe,
  children: F,
  claim_element: L,
  claim_space: ne,
  component_subscribe: R,
  compute_slots: se,
  create_slot: le,
  detach: _,
  element: A,
  empty: k,
  exclude_internal_props: E,
  get_all_dirty_from_scope: re,
  get_slot_changes: ce,
  group_outros: ae,
  init: ie,
  insert_hydration: p,
  safe_not_equal: _e,
  set_custom_element_data: N,
  space: ue,
  transition_in: g,
  transition_out: v,
  update_slot_base: fe
} = window.__gradio__svelte__internal, {
  beforeUpdate: de,
  getContext: me,
  onDestroy: pe,
  setContext: ge
} = window.__gradio__svelte__internal;
function S(l) {
  let t, r;
  const n = (
    /*#slots*/
    l[7].default
  ), s = le(
    n,
    l,
    /*$$scope*/
    l[6],
    null
  );
  return {
    c() {
      t = A("svelte-slot"), s && s.c(), this.h();
    },
    l(e) {
      t = L(e, "SVELTE-SLOT", {
        class: !0
      });
      var o = F(t);
      s && s.l(o), o.forEach(_), this.h();
    },
    h() {
      N(t, "class", "svelte-1rt0kpf");
    },
    m(e, o) {
      p(e, t, o), s && s.m(t, null), l[9](t), r = !0;
    },
    p(e, o) {
      s && s.p && (!r || o & /*$$scope*/
      64) && fe(
        s,
        n,
        e,
        /*$$scope*/
        e[6],
        r ? ce(
          n,
          /*$$scope*/
          e[6],
          o,
          null
        ) : re(
          /*$$scope*/
          e[6]
        ),
        null
      );
    },
    i(e) {
      r || (g(s, e), r = !0);
    },
    o(e) {
      v(s, e), r = !1;
    },
    d(e) {
      e && _(t), s && s.d(e), l[9](null);
    }
  };
}
function we(l) {
  let t, r, n, s, e = (
    /*$$slots*/
    l[4].default && S(l)
  );
  return {
    c() {
      t = A("react-portal-target"), r = ue(), e && e.c(), n = k(), this.h();
    },
    l(o) {
      t = L(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), F(t).forEach(_), r = ne(o), e && e.l(o), n = k(), this.h();
    },
    h() {
      N(t, "class", "svelte-1rt0kpf");
    },
    m(o, a) {
      p(o, t, a), l[8](t), p(o, r, a), e && e.m(o, a), p(o, n, a), s = !0;
    },
    p(o, [a]) {
      /*$$slots*/
      o[4].default ? e ? (e.p(o, a), a & /*$$slots*/
      16 && g(e, 1)) : (e = S(o), e.c(), g(e, 1), e.m(n.parentNode, n)) : e && (ae(), v(e, 1, 1, () => {
        e = null;
      }), oe());
    },
    i(o) {
      s || (g(e), s = !0);
    },
    o(o) {
      v(e), s = !1;
    },
    d(o) {
      o && (_(t), _(r), _(n)), l[8](null), e && e.d(o);
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
function be(l, t, r) {
  let n, s, {
    $$slots: e = {},
    $$scope: o
  } = t;
  const a = se(e);
  let {
    svelteInit: i
  } = t;
  const u = m(O(t)), f = m();
  R(l, f, (c) => r(0, n = c));
  const d = m();
  R(l, d, (c) => r(1, s = c));
  const y = [], q = me("$$ms-gr-react-wrapper"), {
    slotKey: K,
    slotIndex: U,
    subSlotIndex: W
  } = V() || {}, z = i({
    parent: q,
    props: u,
    target: f,
    slot: d,
    slotKey: K,
    slotIndex: U,
    subSlotIndex: W,
    onDestroy(c) {
      y.push(c);
    }
  });
  ge("$$ms-gr-react-wrapper", z), de(() => {
    u.set(O(t));
  }), pe(() => {
    y.forEach((c) => c());
  });
  function B(c) {
    C[c ? "unshift" : "push"](() => {
      n = c, f.set(n);
    });
  }
  function G(c) {
    C[c ? "unshift" : "push"](() => {
      s = c, d.set(s);
    });
  }
  return l.$$set = (c) => {
    r(17, t = x(x({}, t), E(c))), "svelteInit" in c && r(5, i = c.svelteInit), "$$scope" in c && r(6, o = c.$$scope);
  }, t = E(t), [n, s, f, d, a, i, o, e, B, G];
}
class he extends te {
  constructor(t) {
    super(), ie(this, t, be, we, _e, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: Ce
} = window.__gradio__svelte__internal, P = window.ms_globals.rerender, h = window.ms_globals.tree;
function ve(l, t = {}) {
  function r(n) {
    const s = m(), e = new he({
      ...n,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const a = {
            key: window.ms_globals.autokey,
            svelteInstance: s,
            reactComponent: l,
            props: o.props,
            slot: o.slot,
            target: o.target,
            slotIndex: o.slotIndex,
            subSlotIndex: o.subSlotIndex,
            ignore: t.ignore,
            slotKey: o.slotKey,
            nodes: []
          }, i = o.parent ?? h;
          return i.nodes = [...i.nodes, a], P({
            createPortal: I,
            node: h
          }), o.onDestroy(() => {
            i.nodes = i.nodes.filter((u) => u.svelteInstance !== s), P({
              createPortal: I,
              node: h
            });
          }), a;
        },
        ...n.props
      }
    });
    return s.set(e), e;
  }
  return new Promise((n) => {
    window.ms_globals.initializePromise.then(() => {
      n(r);
    });
  });
}
const ye = J(null), Ie = () => M(ye), Re = ve(({
  value: l,
  ...t
}) => {
  const r = Ie(), n = Y[l];
  return /* @__PURE__ */ b.jsx(b.Fragment, {
    children: n ? T.createElement(n, t) : r ? /* @__PURE__ */ b.jsx(r, {
      type: l,
      ...t
    }) : null
  });
});
export {
  Re as Icon,
  Re as default
};
