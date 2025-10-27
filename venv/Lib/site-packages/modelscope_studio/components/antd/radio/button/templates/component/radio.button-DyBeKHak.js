import { w as m, g as G } from "./Index-Cjbc-FHA.js";
const z = window.ms_globals.React, y = window.ms_globals.ReactDOM.createPortal, J = window.ms_globals.antd.theme, M = window.ms_globals.antd.Radio;
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
var V = z, Y = Symbol.for("react.element"), H = Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, X = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Z = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function C(r, t, l) {
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
g.Fragment = H;
g.jsx = C;
g.jsxs = C;
T.exports = g;
var $ = T.exports;
const {
  SvelteComponent: ee,
  assign: k,
  binding_callbacks: I,
  check_outros: te,
  children: j,
  claim_element: D,
  claim_space: se,
  component_subscribe: R,
  compute_slots: oe,
  create_slot: ne,
  detach: _,
  element: L,
  empty: S,
  exclude_internal_props: E,
  get_all_dirty_from_scope: re,
  get_slot_changes: le,
  group_outros: ie,
  init: ae,
  insert_hydration: p,
  safe_not_equal: ce,
  set_custom_element_data: A,
  space: _e,
  transition_in: w,
  transition_out: h,
  update_slot_base: ue
} = window.__gradio__svelte__internal, {
  beforeUpdate: fe,
  getContext: de,
  onDestroy: me,
  setContext: pe
} = window.__gradio__svelte__internal;
function x(r) {
  let t, l;
  const n = (
    /*#slots*/
    r[7].default
  ), o = ne(
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
      64) && ue(
        o,
        n,
        e,
        /*$$scope*/
        e[6],
        l ? le(
          n,
          /*$$scope*/
          e[6],
          s,
          null
        ) : re(
          /*$$scope*/
          e[6]
        ),
        null
      );
    },
    i(e) {
      l || (w(o, e), l = !0);
    },
    o(e) {
      h(o, e), l = !1;
    },
    d(e) {
      e && _(t), o && o.d(e), r[9](null);
    }
  };
}
function we(r) {
  let t, l, n, o, e = (
    /*$$slots*/
    r[4].default && x(r)
  );
  return {
    c() {
      t = L("react-portal-target"), l = _e(), e && e.c(), n = S(), this.h();
    },
    l(s) {
      t = D(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(t).forEach(_), l = se(s), e && e.l(s), n = S(), this.h();
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
      16 && w(e, 1)) : (e = x(s), e.c(), w(e, 1), e.m(n.parentNode, n)) : e && (ie(), h(e, 1, 1, () => {
        e = null;
      }), te());
    },
    i(s) {
      o || (w(e), o = !0);
    },
    o(s) {
      h(e), o = !1;
    },
    d(s) {
      s && (_(t), _(l), _(n)), r[8](null), e && e.d(s);
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
function ge(r, t, l) {
  let n, o, {
    $$slots: e = {},
    $$scope: s
  } = t;
  const a = oe(e);
  let {
    svelteInit: c
  } = t;
  const u = m(O(t)), f = m();
  R(r, f, (i) => l(0, n = i));
  const d = m();
  R(r, d, (i) => l(1, o = i));
  const v = [], N = de("$$ms-gr-react-wrapper"), {
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U
  } = G() || {}, W = c({
    parent: N,
    props: u,
    target: f,
    slot: d,
    slotKey: q,
    slotIndex: K,
    subSlotIndex: U,
    onDestroy(i) {
      v.push(i);
    }
  });
  pe("$$ms-gr-react-wrapper", W), fe(() => {
    u.set(O(t));
  }), me(() => {
    v.forEach((i) => i());
  });
  function B(i) {
    I[i ? "unshift" : "push"](() => {
      n = i, f.set(n);
    });
  }
  function F(i) {
    I[i ? "unshift" : "push"](() => {
      o = i, d.set(o);
    });
  }
  return r.$$set = (i) => {
    l(17, t = k(k({}, t), E(i))), "svelteInit" in i && l(5, c = i.svelteInit), "$$scope" in i && l(6, s = i.$$scope);
  }, t = E(t), [n, o, f, d, a, c, s, e, B, F];
}
class be extends ee {
  constructor(t) {
    super(), ae(this, t, ge, we, ce, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ye
} = window.__gradio__svelte__internal, P = window.ms_globals.rerender, b = window.ms_globals.tree;
function he(r, t = {}) {
  function l(n) {
    const o = m(), e = new be({
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
          return c.nodes = [...c.nodes, a], P({
            createPortal: y,
            node: b
          }), s.onDestroy(() => {
            c.nodes = c.nodes.filter((u) => u.svelteInstance !== o), P({
              createPortal: y,
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
const ke = he(({
  onValueChange: r,
  onChange: t,
  elRef: l,
  style: n,
  ...o
}) => {
  const {
    token: e
  } = J.useToken();
  return /* @__PURE__ */ $.jsx(M.Button, {
    ...o,
    style: {
      ...n,
      "--ms-gr-antd-line-width": e.lineWidth + "px"
    },
    ref: l,
    onChange: (s) => {
      t == null || t(s), r(s.target.checked);
    }
  });
});
export {
  ke as Radio,
  ke as default
};
