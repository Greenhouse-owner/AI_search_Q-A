import { w as m, g as J, i as V } from "./Index-BkmUafdc.js";
const B = window.ms_globals.React, G = window.ms_globals.React.useMemo, y = window.ms_globals.ReactDOM.createPortal, Y = window.ms_globals.antd.Progress;
var F = {
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
var H = B, Q = Symbol.for("react.element"), X = Symbol.for("react.fragment"), Z = Object.prototype.hasOwnProperty, $ = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ee = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function T(s, e, o) {
  var l, r = {}, t = null, n = null;
  o !== void 0 && (t = "" + o), e.key !== void 0 && (t = "" + e.key), e.ref !== void 0 && (n = e.ref);
  for (l in e) Z.call(e, l) && !ee.hasOwnProperty(l) && (r[l] = e[l]);
  if (s && s.defaultProps) for (l in e = s.defaultProps, e) r[l] === void 0 && (r[l] = e[l]);
  return {
    $$typeof: Q,
    type: s,
    key: t,
    ref: n,
    props: r,
    _owner: $.current
  };
}
w.Fragment = X;
w.jsx = T;
w.jsxs = T;
F.exports = w;
var te = F.exports;
const {
  SvelteComponent: ne,
  assign: I,
  binding_callbacks: R,
  check_outros: se,
  children: j,
  claim_element: D,
  claim_space: oe,
  component_subscribe: S,
  compute_slots: re,
  create_slot: le,
  detach: a,
  element: L,
  empty: k,
  exclude_internal_props: E,
  get_all_dirty_from_scope: ie,
  get_slot_changes: ce,
  group_outros: ue,
  init: ae,
  insert_hydration: p,
  safe_not_equal: _e,
  set_custom_element_data: A,
  space: fe,
  transition_in: g,
  transition_out: b,
  update_slot_base: de
} = window.__gradio__svelte__internal, {
  beforeUpdate: me,
  getContext: pe,
  onDestroy: ge,
  setContext: we
} = window.__gradio__svelte__internal;
function x(s) {
  let e, o;
  const l = (
    /*#slots*/
    s[7].default
  ), r = le(
    l,
    s,
    /*$$scope*/
    s[6],
    null
  );
  return {
    c() {
      e = L("svelte-slot"), r && r.c(), this.h();
    },
    l(t) {
      e = D(t, "SVELTE-SLOT", {
        class: !0
      });
      var n = j(e);
      r && r.l(n), n.forEach(a), this.h();
    },
    h() {
      A(e, "class", "svelte-1rt0kpf");
    },
    m(t, n) {
      p(t, e, n), r && r.m(e, null), s[9](e), o = !0;
    },
    p(t, n) {
      r && r.p && (!o || n & /*$$scope*/
      64) && de(
        r,
        l,
        t,
        /*$$scope*/
        t[6],
        o ? ce(
          l,
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
      o || (g(r, t), o = !0);
    },
    o(t) {
      b(r, t), o = !1;
    },
    d(t) {
      t && a(e), r && r.d(t), s[9](null);
    }
  };
}
function ve(s) {
  let e, o, l, r, t = (
    /*$$slots*/
    s[4].default && x(s)
  );
  return {
    c() {
      e = L("react-portal-target"), o = fe(), t && t.c(), l = k(), this.h();
    },
    l(n) {
      e = D(n, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(e).forEach(a), o = oe(n), t && t.l(n), l = k(), this.h();
    },
    h() {
      A(e, "class", "svelte-1rt0kpf");
    },
    m(n, c) {
      p(n, e, c), s[8](e), p(n, o, c), t && t.m(n, c), p(n, l, c), r = !0;
    },
    p(n, [c]) {
      /*$$slots*/
      n[4].default ? t ? (t.p(n, c), c & /*$$slots*/
      16 && g(t, 1)) : (t = x(n), t.c(), g(t, 1), t.m(l.parentNode, l)) : t && (ue(), b(t, 1, 1, () => {
        t = null;
      }), se());
    },
    i(n) {
      r || (g(t), r = !0);
    },
    o(n) {
      b(t), r = !1;
    },
    d(n) {
      n && (a(e), a(o), a(l)), s[8](null), t && t.d(n);
    }
  };
}
function P(s) {
  const {
    svelteInit: e,
    ...o
  } = s;
  return o;
}
function be(s, e, o) {
  let l, r, {
    $$slots: t = {},
    $$scope: n
  } = e;
  const c = re(t);
  let {
    svelteInit: u
  } = e;
  const _ = m(P(e)), f = m();
  S(s, f, (i) => o(0, l = i));
  const d = m();
  S(s, d, (i) => o(1, r = i));
  const h = [], N = pe("$$ms-gr-react-wrapper"), {
    slotKey: W,
    slotIndex: q,
    subSlotIndex: K
  } = J() || {}, M = u({
    parent: N,
    props: _,
    target: f,
    slot: d,
    slotKey: W,
    slotIndex: q,
    subSlotIndex: K,
    onDestroy(i) {
      h.push(i);
    }
  });
  we("$$ms-gr-react-wrapper", M), me(() => {
    _.set(P(e));
  }), ge(() => {
    h.forEach((i) => i());
  });
  function U(i) {
    R[i ? "unshift" : "push"](() => {
      l = i, f.set(l);
    });
  }
  function z(i) {
    R[i ? "unshift" : "push"](() => {
      r = i, d.set(r);
    });
  }
  return s.$$set = (i) => {
    o(17, e = I(I({}, e), E(i))), "svelteInit" in i && o(5, u = i.svelteInit), "$$scope" in i && o(6, n = i.$$scope);
  }, e = E(e), [l, r, f, d, c, u, n, t, U, z];
}
class he extends ne {
  constructor(e) {
    super(), ae(this, e, be, ve, _e, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ke
} = window.__gradio__svelte__internal, O = window.ms_globals.rerender, v = window.ms_globals.tree;
function ye(s, e = {}) {
  function o(l) {
    const r = m(), t = new he({
      ...l,
      props: {
        svelteInit(n) {
          window.ms_globals.autokey += 1;
          const c = {
            key: window.ms_globals.autokey,
            svelteInstance: r,
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
          return u.nodes = [...u.nodes, c], O({
            createPortal: y,
            node: v
          }), n.onDestroy(() => {
            u.nodes = u.nodes.filter((_) => _.svelteInstance !== r), O({
              createPortal: y,
              node: v
            });
          }), c;
        },
        ...l.props
      }
    });
    return r.set(t), t;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(o);
    });
  });
}
function Ie(s) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(s.trim());
}
function Re(s, e = !1) {
  try {
    if (V(s))
      return s;
    if (e && !Ie(s))
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
function C(s, e) {
  return G(() => Re(s, e), [s, e]);
}
const Ee = ye(({
  format: s,
  rounding: e,
  ...o
}) => {
  const l = C(s), r = C(e);
  return /* @__PURE__ */ te.jsx(Y, {
    ...o,
    rounding: r,
    format: l
  });
});
export {
  Ee as Progress,
  Ee as default
};
