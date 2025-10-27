import { w as m, g as G, i as J } from "./Index-co9BUVT3.js";
const z = window.ms_globals.React, B = window.ms_globals.React.useMemo, y = window.ms_globals.ReactDOM.createPortal, V = window.ms_globals.antd.Affix;
var P = {
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
var Y = z, H = Symbol.for("react.element"), Q = Symbol.for("react.fragment"), X = Object.prototype.hasOwnProperty, Z = Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function F(s, e, o) {
  var l, r = {}, t = null, n = null;
  o !== void 0 && (t = "" + o), e.key !== void 0 && (t = "" + e.key), e.ref !== void 0 && (n = e.ref);
  for (l in e) X.call(e, l) && !$.hasOwnProperty(l) && (r[l] = e[l]);
  if (s && s.defaultProps) for (l in e = s.defaultProps, e) r[l] === void 0 && (r[l] = e[l]);
  return {
    $$typeof: H,
    type: s,
    key: t,
    ref: n,
    props: r,
    _owner: Z.current
  };
}
g.Fragment = Q;
g.jsx = F;
g.jsxs = F;
P.exports = g;
var ee = P.exports;
const {
  SvelteComponent: te,
  assign: I,
  binding_callbacks: R,
  check_outros: ne,
  children: T,
  claim_element: A,
  claim_space: se,
  component_subscribe: S,
  compute_slots: oe,
  create_slot: re,
  detach: a,
  element: j,
  empty: x,
  exclude_internal_props: k,
  get_all_dirty_from_scope: le,
  get_slot_changes: ie,
  group_outros: ce,
  init: ue,
  insert_hydration: p,
  safe_not_equal: ae,
  set_custom_element_data: D,
  space: fe,
  transition_in: w,
  transition_out: b,
  update_slot_base: _e
} = window.__gradio__svelte__internal, {
  beforeUpdate: de,
  getContext: me,
  onDestroy: pe,
  setContext: we
} = window.__gradio__svelte__internal;
function E(s) {
  let e, o;
  const l = (
    /*#slots*/
    s[7].default
  ), r = re(
    l,
    s,
    /*$$scope*/
    s[6],
    null
  );
  return {
    c() {
      e = j("svelte-slot"), r && r.c(), this.h();
    },
    l(t) {
      e = A(t, "SVELTE-SLOT", {
        class: !0
      });
      var n = T(e);
      r && r.l(n), n.forEach(a), this.h();
    },
    h() {
      D(e, "class", "svelte-1rt0kpf");
    },
    m(t, n) {
      p(t, e, n), r && r.m(e, null), s[9](e), o = !0;
    },
    p(t, n) {
      r && r.p && (!o || n & /*$$scope*/
      64) && _e(
        r,
        l,
        t,
        /*$$scope*/
        t[6],
        o ? ie(
          l,
          /*$$scope*/
          t[6],
          n,
          null
        ) : le(
          /*$$scope*/
          t[6]
        ),
        null
      );
    },
    i(t) {
      o || (w(r, t), o = !0);
    },
    o(t) {
      b(r, t), o = !1;
    },
    d(t) {
      t && a(e), r && r.d(t), s[9](null);
    }
  };
}
function ge(s) {
  let e, o, l, r, t = (
    /*$$slots*/
    s[4].default && E(s)
  );
  return {
    c() {
      e = j("react-portal-target"), o = fe(), t && t.c(), l = x(), this.h();
    },
    l(n) {
      e = A(n, "REACT-PORTAL-TARGET", {
        class: !0
      }), T(e).forEach(a), o = se(n), t && t.l(n), l = x(), this.h();
    },
    h() {
      D(e, "class", "svelte-1rt0kpf");
    },
    m(n, c) {
      p(n, e, c), s[8](e), p(n, o, c), t && t.m(n, c), p(n, l, c), r = !0;
    },
    p(n, [c]) {
      /*$$slots*/
      n[4].default ? t ? (t.p(n, c), c & /*$$slots*/
      16 && w(t, 1)) : (t = E(n), t.c(), w(t, 1), t.m(l.parentNode, l)) : t && (ce(), b(t, 1, 1, () => {
        t = null;
      }), ne());
    },
    i(n) {
      r || (w(t), r = !0);
    },
    o(n) {
      b(t), r = !1;
    },
    d(n) {
      n && (a(e), a(o), a(l)), s[8](null), t && t.d(n);
    }
  };
}
function O(s) {
  const {
    svelteInit: e,
    ...o
  } = s;
  return o;
}
function ve(s, e, o) {
  let l, r, {
    $$slots: t = {},
    $$scope: n
  } = e;
  const c = oe(t);
  let {
    svelteInit: u
  } = e;
  const f = m(O(e)), _ = m();
  S(s, _, (i) => o(0, l = i));
  const d = m();
  S(s, d, (i) => o(1, r = i));
  const h = [], L = me("$$ms-gr-react-wrapper"), {
    slotKey: N,
    slotIndex: W,
    subSlotIndex: q
  } = G() || {}, K = u({
    parent: L,
    props: f,
    target: _,
    slot: d,
    slotKey: N,
    slotIndex: W,
    subSlotIndex: q,
    onDestroy(i) {
      h.push(i);
    }
  });
  we("$$ms-gr-react-wrapper", K), de(() => {
    f.set(O(e));
  }), pe(() => {
    h.forEach((i) => i());
  });
  function M(i) {
    R[i ? "unshift" : "push"](() => {
      l = i, _.set(l);
    });
  }
  function U(i) {
    R[i ? "unshift" : "push"](() => {
      r = i, d.set(r);
    });
  }
  return s.$$set = (i) => {
    o(17, e = I(I({}, e), k(i))), "svelteInit" in i && o(5, u = i.svelteInit), "$$scope" in i && o(6, n = i.$$scope);
  }, e = k(e), [l, r, _, d, c, u, n, t, M, U];
}
class be extends te {
  constructor(e) {
    super(), ue(this, e, ve, ge, ae, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: xe
} = window.__gradio__svelte__internal, C = window.ms_globals.rerender, v = window.ms_globals.tree;
function he(s, e = {}) {
  function o(l) {
    const r = m(), t = new be({
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
          return u.nodes = [...u.nodes, c], C({
            createPortal: y,
            node: v
          }), n.onDestroy(() => {
            u.nodes = u.nodes.filter((f) => f.svelteInstance !== r), C({
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
function ye(s) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(s.trim());
}
function Ie(s, e = !1) {
  try {
    if (J(s))
      return s;
    if (e && !ye(s))
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
function Re(s, e) {
  return B(() => Ie(s, e), [s, e]);
}
const ke = he(({
  target: s,
  ...e
}) => {
  const o = Re(s);
  return /* @__PURE__ */ ee.jsx(V, {
    ...e,
    target: o
  });
});
export {
  ke as Affix,
  ke as default
};
