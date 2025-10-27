import { w as p, g as z } from "./Index-D7eDPzU0.js";
const F = window.ms_globals.React, y = window.ms_globals.ReactDOM.createPortal, J = window.ms_globals.antd.theme, M = window.ms_globals.antd.Button;
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
var V = F, Y = Symbol.for("react.element"), H = Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, X = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Z = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function T(r, t, l) {
  var n, s = {}, e = null, o = null;
  l !== void 0 && (e = "" + l), t.key !== void 0 && (e = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) Q.call(t, n) && !Z.hasOwnProperty(n) && (s[n] = t[n]);
  if (r && r.defaultProps) for (n in t = r.defaultProps, t) s[n] === void 0 && (s[n] = t[n]);
  return {
    $$typeof: Y,
    type: r,
    key: e,
    ref: o,
    props: s,
    _owner: X.current
  };
}
w.Fragment = H;
w.jsx = T;
w.jsxs = T;
P.exports = w;
var $ = P.exports;
const {
  SvelteComponent: ee,
  assign: k,
  binding_callbacks: I,
  check_outros: te,
  children: j,
  claim_element: D,
  claim_space: oe,
  component_subscribe: S,
  compute_slots: se,
  create_slot: ne,
  detach: c,
  element: L,
  empty: E,
  exclude_internal_props: R,
  get_all_dirty_from_scope: re,
  get_slot_changes: le,
  group_outros: ie,
  init: ae,
  insert_hydration: m,
  safe_not_equal: _e,
  set_custom_element_data: A,
  space: ce,
  transition_in: g,
  transition_out: h,
  update_slot_base: ue
} = window.__gradio__svelte__internal, {
  beforeUpdate: fe,
  getContext: de,
  onDestroy: pe,
  setContext: me
} = window.__gradio__svelte__internal;
function x(r) {
  let t, l;
  const n = (
    /*#slots*/
    r[7].default
  ), s = ne(
    n,
    r,
    /*$$scope*/
    r[6],
    null
  );
  return {
    c() {
      t = L("svelte-slot"), s && s.c(), this.h();
    },
    l(e) {
      t = D(e, "SVELTE-SLOT", {
        class: !0
      });
      var o = j(t);
      s && s.l(o), o.forEach(c), this.h();
    },
    h() {
      A(t, "class", "svelte-1rt0kpf");
    },
    m(e, o) {
      m(e, t, o), s && s.m(t, null), r[9](t), l = !0;
    },
    p(e, o) {
      s && s.p && (!l || o & /*$$scope*/
      64) && ue(
        s,
        n,
        e,
        /*$$scope*/
        e[6],
        l ? le(
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
      l || (g(s, e), l = !0);
    },
    o(e) {
      h(s, e), l = !1;
    },
    d(e) {
      e && c(t), s && s.d(e), r[9](null);
    }
  };
}
function ge(r) {
  let t, l, n, s, e = (
    /*$$slots*/
    r[4].default && x(r)
  );
  return {
    c() {
      t = L("react-portal-target"), l = ce(), e && e.c(), n = E(), this.h();
    },
    l(o) {
      t = D(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), j(t).forEach(c), l = oe(o), e && e.l(o), n = E(), this.h();
    },
    h() {
      A(t, "class", "svelte-1rt0kpf");
    },
    m(o, a) {
      m(o, t, a), r[8](t), m(o, l, a), e && e.m(o, a), m(o, n, a), s = !0;
    },
    p(o, [a]) {
      /*$$slots*/
      o[4].default ? e ? (e.p(o, a), a & /*$$slots*/
      16 && g(e, 1)) : (e = x(o), e.c(), g(e, 1), e.m(n.parentNode, n)) : e && (ie(), h(e, 1, 1, () => {
        e = null;
      }), te());
    },
    i(o) {
      s || (g(e), s = !0);
    },
    o(o) {
      h(e), s = !1;
    },
    d(o) {
      o && (c(t), c(l), c(n)), r[8](null), e && e.d(o);
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
function we(r, t, l) {
  let n, s, {
    $$slots: e = {},
    $$scope: o
  } = t;
  const a = se(e);
  let {
    svelteInit: _
  } = t;
  const u = p(O(t)), f = p();
  S(r, f, (i) => l(0, n = i));
  const d = p();
  S(r, d, (i) => l(1, s = i));
  const v = [], B = de("$$ms-gr-react-wrapper"), {
    slotKey: N,
    slotIndex: q,
    subSlotIndex: G
  } = z() || {}, K = _({
    parent: B,
    props: u,
    target: f,
    slot: d,
    slotKey: N,
    slotIndex: q,
    subSlotIndex: G,
    onDestroy(i) {
      v.push(i);
    }
  });
  me("$$ms-gr-react-wrapper", K), fe(() => {
    u.set(O(t));
  }), pe(() => {
    v.forEach((i) => i());
  });
  function U(i) {
    I[i ? "unshift" : "push"](() => {
      n = i, f.set(n);
    });
  }
  function W(i) {
    I[i ? "unshift" : "push"](() => {
      s = i, d.set(s);
    });
  }
  return r.$$set = (i) => {
    l(17, t = k(k({}, t), R(i))), "svelteInit" in i && l(5, _ = i.svelteInit), "$$scope" in i && l(6, o = i.$$scope);
  }, t = R(t), [n, s, f, d, a, _, o, e, U, W];
}
class be extends ee {
  constructor(t) {
    super(), ae(this, t, we, ge, _e, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ye
} = window.__gradio__svelte__internal, C = window.ms_globals.rerender, b = window.ms_globals.tree;
function he(r, t = {}) {
  function l(n) {
    const s = p(), e = new be({
      ...n,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const a = {
            key: window.ms_globals.autokey,
            svelteInstance: s,
            reactComponent: r,
            props: o.props,
            slot: o.slot,
            target: o.target,
            slotIndex: o.slotIndex,
            subSlotIndex: o.subSlotIndex,
            ignore: t.ignore,
            slotKey: o.slotKey,
            nodes: []
          }, _ = o.parent ?? b;
          return _.nodes = [..._.nodes, a], C({
            createPortal: y,
            node: b
          }), o.onDestroy(() => {
            _.nodes = _.nodes.filter((u) => u.svelteInstance !== s), C({
              createPortal: y,
              node: b
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
      n(l);
    });
  });
}
const ke = he(({
  style: r,
  ...t
}) => {
  const {
    token: l
  } = J.useToken();
  return /* @__PURE__ */ $.jsx(M.Group, {
    ...t,
    style: {
      ...r,
      "--ms-gr-antd-line-width": l.lineWidth + "px"
    }
  });
});
export {
  ke as ButtonGroup,
  ke as default
};
