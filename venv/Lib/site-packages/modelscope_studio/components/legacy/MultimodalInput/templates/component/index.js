async function p() {
  window.ms_globals || (window.ms_globals = {}), window.ms_globals.initializePromise || (window.ms_globals.initializePromise = new Promise((o) => {
    window.ms_globals.initialize = () => {
      o();
    };
  })), await window.ms_globals.initializePromise;
}
async function b(o) {
  return await p(), o().then((e) => e.default);
}
const {
  SvelteComponent: g,
  assign: r,
  claim_component: h,
  create_component: w,
  create_slot: k,
  destroy_component: v,
  detach: z,
  empty: f,
  exclude_internal_props: d,
  flush: P,
  get_all_dirty_from_scope: C,
  get_slot_changes: $,
  get_spread_object: I,
  get_spread_update: j,
  handle_promise: q,
  init: y,
  insert_hydration: A,
  mount_component: M,
  noop: a,
  safe_not_equal: N,
  transition_in: _,
  transition_out: m,
  update_await_block_branch: S,
  update_slot_base: B
} = window.__gradio__svelte__internal;
function D(o) {
  return {
    c: a,
    l: a,
    m: a,
    p: a,
    i: a,
    o: a,
    d: a
  };
}
function E(o) {
  let e, i;
  const t = [
    /*args*/
    o[1],
    {
      value: (
        /*value*/
        o[0]
      )
    }
  ];
  let n = {
    $$slots: {
      default: [F]
    },
    $$scope: {
      ctx: o
    }
  };
  for (let l = 0; l < t.length; l += 1)
    n = r(n, t[l]);
  return e = new /*MultimodalInput*/
  o[6]({
    props: n
  }), {
    c() {
      w(e.$$.fragment);
    },
    l(l) {
      h(e.$$.fragment, l);
    },
    m(l, s) {
      M(e, l, s), i = !0;
    },
    p(l, s) {
      const u = s & /*args, value*/
      3 ? j(t, [s & /*args*/
      2 && I(
        /*args*/
        l[1]
      ), s & /*value*/
      1 && {
        value: (
          /*value*/
          l[0]
        )
      }]) : {};
      s & /*$$scope*/
      16 && (u.$$scope = {
        dirty: s,
        ctx: l
      }), e.$set(u);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      m(e.$$.fragment, l), i = !1;
    },
    d(l) {
      v(e, l);
    }
  };
}
function F(o) {
  let e;
  const i = (
    /*#slots*/
    o[3].default
  ), t = k(
    i,
    o,
    /*$$scope*/
    o[4],
    null
  );
  return {
    c() {
      t && t.c();
    },
    l(n) {
      t && t.l(n);
    },
    m(n, l) {
      t && t.m(n, l), e = !0;
    },
    p(n, l) {
      t && t.p && (!e || l & /*$$scope*/
      16) && B(
        t,
        i,
        n,
        /*$$scope*/
        n[4],
        e ? $(
          i,
          /*$$scope*/
          n[4],
          l,
          null
        ) : C(
          /*$$scope*/
          n[4]
        ),
        null
      );
    },
    i(n) {
      e || (_(t, n), e = !0);
    },
    o(n) {
      m(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function G(o) {
  return {
    c: a,
    l: a,
    m: a,
    p: a,
    i: a,
    o: a,
    d: a
  };
}
function H(o) {
  let e, i, t = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !1,
    pending: G,
    then: E,
    catch: D,
    value: 6,
    blocks: [, , ,]
  };
  return q(
    /*AwaitedMultimodalInput*/
    o[2],
    t
  ), {
    c() {
      e = f(), t.block.c();
    },
    l(n) {
      e = f(), t.block.l(n);
    },
    m(n, l) {
      A(n, e, l), t.block.m(n, t.anchor = l), t.mount = () => e.parentNode, t.anchor = e, i = !0;
    },
    p(n, [l]) {
      o = n, S(t, o, l);
    },
    i(n) {
      i || (_(t.block), i = !0);
    },
    o(n) {
      for (let l = 0; l < 3; l += 1) {
        const s = t.blocks[l];
        m(s);
      }
      i = !1;
    },
    d(n) {
      n && z(e), t.block.d(n), t.token = null, t = null;
    }
  };
}
function J(o, e, i) {
  let t, {
    $$slots: n = {},
    $$scope: l
  } = e;
  const s = b(() => import("./Awaited-DGkgdBtL.js"));
  let {
    value: u
  } = e;
  return o.$$set = (c) => {
    i(5, e = r(r({}, e), d(c))), "value" in c && i(0, u = c.value), "$$scope" in c && i(4, l = c.$$scope);
  }, o.$$.update = () => {
    i(1, t = e);
  }, e = d(e), [u, t, s, n, l];
}
class K extends g {
  constructor(e) {
    super(), y(this, e, J, H, N, {
      value: 0
    });
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({
      value: e
    }), P();
  }
}
export {
  K as default
};
