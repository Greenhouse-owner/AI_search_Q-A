import { w as m, g as M } from "./Index-C6ZbhPA0.js";
const v = window.ms_globals.ReactDOM.createPortal, U = window.ms_globals.antd.Skeleton, {
  SvelteComponent: V,
  assign: I,
  binding_callbacks: k,
  check_outros: W,
  children: R,
  claim_element: D,
  claim_space: j,
  component_subscribe: S,
  compute_slots: B,
  create_slot: F,
  detach: _,
  element: A,
  empty: y,
  exclude_internal_props: C,
  get_all_dirty_from_scope: H,
  get_slot_changes: J,
  group_outros: Q,
  init: X,
  insert_hydration: p,
  safe_not_equal: Y,
  set_custom_element_data: K,
  space: Z,
  transition_in: g,
  transition_out: w,
  update_slot_base: $
} = window.__gradio__svelte__internal, {
  beforeUpdate: ee,
  getContext: te,
  onDestroy: se,
  setContext: oe
} = window.__gradio__svelte__internal;
function E(r) {
  let s, n;
  const l = (
    /*#slots*/
    r[7].default
  ), o = F(
    l,
    r,
    /*$$scope*/
    r[6],
    null
  );
  return {
    c() {
      s = A("svelte-slot"), o && o.c(), this.h();
    },
    l(e) {
      s = D(e, "SVELTE-SLOT", {
        class: !0
      });
      var t = R(s);
      o && o.l(t), t.forEach(_), this.h();
    },
    h() {
      K(s, "class", "svelte-1rt0kpf");
    },
    m(e, t) {
      p(e, s, t), o && o.m(s, null), r[9](s), n = !0;
    },
    p(e, t) {
      o && o.p && (!n || t & /*$$scope*/
      64) && $(
        o,
        l,
        e,
        /*$$scope*/
        e[6],
        n ? J(
          l,
          /*$$scope*/
          e[6],
          t,
          null
        ) : H(
          /*$$scope*/
          e[6]
        ),
        null
      );
    },
    i(e) {
      n || (g(o, e), n = !0);
    },
    o(e) {
      w(o, e), n = !1;
    },
    d(e) {
      e && _(s), o && o.d(e), r[9](null);
    }
  };
}
function ne(r) {
  let s, n, l, o, e = (
    /*$$slots*/
    r[4].default && E(r)
  );
  return {
    c() {
      s = A("react-portal-target"), n = Z(), e && e.c(), l = y(), this.h();
    },
    l(t) {
      s = D(t, "REACT-PORTAL-TARGET", {
        class: !0
      }), R(s).forEach(_), n = j(t), e && e.l(t), l = y(), this.h();
    },
    h() {
      K(s, "class", "svelte-1rt0kpf");
    },
    m(t, i) {
      p(t, s, i), r[8](s), p(t, n, i), e && e.m(t, i), p(t, l, i), o = !0;
    },
    p(t, [i]) {
      /*$$slots*/
      t[4].default ? e ? (e.p(t, i), i & /*$$slots*/
      16 && g(e, 1)) : (e = E(t), e.c(), g(e, 1), e.m(l.parentNode, l)) : e && (Q(), w(e, 1, 1, () => {
        e = null;
      }), W());
    },
    i(t) {
      o || (g(e), o = !0);
    },
    o(t) {
      w(e), o = !1;
    },
    d(t) {
      t && (_(s), _(n), _(l)), r[8](null), e && e.d(t);
    }
  };
}
function P(r) {
  const {
    svelteInit: s,
    ...n
  } = r;
  return n;
}
function le(r, s, n) {
  let l, o, {
    $$slots: e = {},
    $$scope: t
  } = s;
  const i = B(e);
  let {
    svelteInit: c
  } = s;
  const u = m(P(s)), f = m();
  S(r, f, (a) => n(0, l = a));
  const d = m();
  S(r, d, (a) => n(1, o = a));
  const h = [], L = te("$$ms-gr-react-wrapper"), {
    slotKey: N,
    slotIndex: O,
    subSlotIndex: x
  } = M() || {}, q = c({
    parent: L,
    props: u,
    target: f,
    slot: d,
    slotKey: N,
    slotIndex: O,
    subSlotIndex: x,
    onDestroy(a) {
      h.push(a);
    }
  });
  oe("$$ms-gr-react-wrapper", q), ee(() => {
    u.set(P(s));
  }), se(() => {
    h.forEach((a) => a());
  });
  function z(a) {
    k[a ? "unshift" : "push"](() => {
      l = a, f.set(l);
    });
  }
  function G(a) {
    k[a ? "unshift" : "push"](() => {
      o = a, d.set(o);
    });
  }
  return r.$$set = (a) => {
    n(17, s = I(I({}, s), C(a))), "svelteInit" in a && n(5, c = a.svelteInit), "$$scope" in a && n(6, t = a.$$scope);
  }, s = C(s), [l, o, f, d, i, c, t, e, z, G];
}
class re extends V {
  constructor(s) {
    super(), X(this, s, le, ne, Y, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ce
} = window.__gradio__svelte__internal, T = window.ms_globals.rerender, b = window.ms_globals.tree;
function ae(r, s = {}) {
  function n(l) {
    const o = m(), e = new re({
      ...l,
      props: {
        svelteInit(t) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: o,
            reactComponent: r,
            props: t.props,
            slot: t.slot,
            target: t.target,
            slotIndex: t.slotIndex,
            subSlotIndex: t.subSlotIndex,
            ignore: s.ignore,
            slotKey: t.slotKey,
            nodes: []
          }, c = t.parent ?? b;
          return c.nodes = [...c.nodes, i], T({
            createPortal: v,
            node: b
          }), t.onDestroy(() => {
            c.nodes = c.nodes.filter((u) => u.svelteInstance !== o), T({
              createPortal: v,
              node: b
            });
          }), i;
        },
        ...l.props
      }
    });
    return o.set(e), e;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(n);
    });
  });
}
const _e = ae(U.Node);
export {
  _e as SkeletonNode,
  _e as default
};
