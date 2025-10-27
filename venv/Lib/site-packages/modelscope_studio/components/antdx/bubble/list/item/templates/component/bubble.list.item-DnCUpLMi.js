import { w as m, g as G, j as M } from "./Item-vhAS46r0.js";
const h = window.ms_globals.ReactDOM.createPortal, E = window.ms_globals.createItemsContext.createItemsContext, {
  SvelteComponent: N,
  assign: v,
  binding_callbacks: C,
  check_outros: U,
  children: T,
  claim_element: D,
  claim_space: V,
  component_subscribe: x,
  compute_slots: W,
  create_slot: F,
  detach: u,
  element: L,
  empty: y,
  exclude_internal_props: k,
  get_all_dirty_from_scope: J,
  get_slot_changes: Q,
  group_outros: X,
  init: Y,
  insert_hydration: p,
  safe_not_equal: Z,
  set_custom_element_data: j,
  space: $,
  transition_in: b,
  transition_out: I,
  update_slot_base: ee
} = window.__gradio__svelte__internal, {
  beforeUpdate: te,
  getContext: se,
  onDestroy: oe,
  setContext: ne
} = window.__gradio__svelte__internal;
function S(n) {
  let s, l;
  const r = (
    /*#slots*/
    n[7].default
  ), o = F(
    r,
    n,
    /*$$scope*/
    n[6],
    null
  );
  return {
    c() {
      s = L("svelte-slot"), o && o.c(), this.h();
    },
    l(e) {
      s = D(e, "SVELTE-SLOT", {
        class: !0
      });
      var t = T(s);
      o && o.l(t), t.forEach(u), this.h();
    },
    h() {
      j(s, "class", "svelte-1rt0kpf");
    },
    m(e, t) {
      p(e, s, t), o && o.m(s, null), n[9](s), l = !0;
    },
    p(e, t) {
      o && o.p && (!l || t & /*$$scope*/
      64) && ee(
        o,
        r,
        e,
        /*$$scope*/
        e[6],
        l ? Q(
          r,
          /*$$scope*/
          e[6],
          t,
          null
        ) : J(
          /*$$scope*/
          e[6]
        ),
        null
      );
    },
    i(e) {
      l || (b(o, e), l = !0);
    },
    o(e) {
      I(o, e), l = !1;
    },
    d(e) {
      e && u(s), o && o.d(e), n[9](null);
    }
  };
}
function le(n) {
  let s, l, r, o, e = (
    /*$$slots*/
    n[4].default && S(n)
  );
  return {
    c() {
      s = L("react-portal-target"), l = $(), e && e.c(), r = y(), this.h();
    },
    l(t) {
      s = D(t, "REACT-PORTAL-TARGET", {
        class: !0
      }), T(s).forEach(u), l = V(t), e && e.l(t), r = y(), this.h();
    },
    h() {
      j(s, "class", "svelte-1rt0kpf");
    },
    m(t, i) {
      p(t, s, i), n[8](s), p(t, l, i), e && e.m(t, i), p(t, r, i), o = !0;
    },
    p(t, [i]) {
      /*$$slots*/
      t[4].default ? e ? (e.p(t, i), i & /*$$slots*/
      16 && b(e, 1)) : (e = S(t), e.c(), b(e, 1), e.m(r.parentNode, r)) : e && (X(), I(e, 1, 1, () => {
        e = null;
      }), U());
    },
    i(t) {
      o || (b(e), o = !0);
    },
    o(t) {
      I(e), o = !1;
    },
    d(t) {
      t && (u(s), u(l), u(r)), n[8](null), e && e.d(t);
    }
  };
}
function P(n) {
  const {
    svelteInit: s,
    ...l
  } = n;
  return l;
}
function re(n, s, l) {
  let r, o, {
    $$slots: e = {},
    $$scope: t
  } = s;
  const i = W(e);
  let {
    svelteInit: c
  } = s;
  const _ = m(P(s)), d = m();
  x(n, d, (a) => l(0, r = a));
  const f = m();
  x(n, f, (a) => l(1, o = a));
  const w = [], A = se("$$ms-gr-react-wrapper"), {
    slotKey: H,
    slotIndex: K,
    subSlotIndex: O
  } = G() || {}, q = c({
    parent: A,
    props: _,
    target: d,
    slot: f,
    slotKey: H,
    slotIndex: K,
    subSlotIndex: O,
    onDestroy(a) {
      w.push(a);
    }
  });
  ne("$$ms-gr-react-wrapper", q), te(() => {
    _.set(P(s));
  }), oe(() => {
    w.forEach((a) => a());
  });
  function z(a) {
    C[a ? "unshift" : "push"](() => {
      r = a, d.set(r);
    });
  }
  function B(a) {
    C[a ? "unshift" : "push"](() => {
      o = a, f.set(o);
    });
  }
  return n.$$set = (a) => {
    l(17, s = v(v({}, s), k(a))), "svelteInit" in a && l(5, c = a.svelteInit), "$$scope" in a && l(6, t = a.$$scope);
  }, s = k(s), [r, o, d, f, i, c, t, e, z, B];
}
class ae extends N {
  constructor(s) {
    super(), Y(this, s, re, le, Z, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _e
} = window.__gradio__svelte__internal, R = window.ms_globals.rerender, g = window.ms_globals.tree;
function ie(n, s = {}) {
  function l(r) {
    const o = m(), e = new ae({
      ...r,
      props: {
        svelteInit(t) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: o,
            reactComponent: n,
            props: t.props,
            slot: t.slot,
            target: t.target,
            slotIndex: t.slotIndex,
            subSlotIndex: t.subSlotIndex,
            ignore: s.ignore,
            slotKey: t.slotKey,
            nodes: []
          }, c = t.parent ?? g;
          return c.nodes = [...c.nodes, i], R({
            createPortal: h,
            node: g
          }), t.onDestroy(() => {
            c.nodes = c.nodes.filter((_) => _.svelteInstance !== o), R({
              createPortal: h,
              node: g
            });
          }), i;
        },
        ...r.props
      }
    });
    return o.set(e), e;
  }
  return new Promise((r) => {
    window.ms_globals.initializePromise.then(() => {
      r(l);
    });
  });
}
const {
  useItems: de,
  withItemsContextProvider: fe,
  ItemHandler: ce
} = E("antdx-bubble.list-items"), {
  useItems: me,
  withItemsContextProvider: pe,
  ItemHandler: be
} = E("antdx-bubble.list-roles"), ge = ie((n) => /* @__PURE__ */ M.jsx(ce, {
  ...n
}));
export {
  ge as BubbleListItem,
  ge as default
};
