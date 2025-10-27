async function b() {
  window.ms_globals || (window.ms_globals = {}), window.ms_globals.initializePromise || (window.ms_globals.initializePromise = new Promise((o) => {
    window.ms_globals.initialize = () => {
      o();
    };
  })), await window.ms_globals.initializePromise;
}
async function g(o) {
  return await b(), o().then((e) => e.default);
}
const {
  SvelteComponent: p,
  assign: u,
  claim_component: w,
  create_component: h,
  create_slot: k,
  destroy_component: v,
  detach: z,
  empty: m,
  exclude_internal_props: d,
  flush: P,
  get_all_dirty_from_scope: C,
  get_slot_changes: $,
  get_spread_object: j,
  get_spread_update: q,
  handle_promise: y,
  init: A,
  insert_hydration: F,
  mount_component: I,
  noop: i,
  safe_not_equal: N,
  transition_in: _,
  transition_out: f,
  update_await_block_branch: S,
  update_slot_base: B
} = window.__gradio__svelte__internal;
function D(o) {
  return {
    c: i,
    l: i,
    m: i,
    p: i,
    i,
    o: i,
    d: i
  };
}
function E(o) {
  let e, a;
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
      default: [G]
    },
    $$scope: {
      ctx: o
    }
  };
  for (let l = 0; l < t.length; l += 1)
    n = u(n, t[l]);
  return e = new /*Flow*/
  o[6]({
    props: n
  }), {
    c() {
      h(e.$$.fragment);
    },
    l(l) {
      w(e.$$.fragment, l);
    },
    m(l, s) {
      I(e, l, s), a = !0;
    },
    p(l, s) {
      const c = s & /*args, value*/
      3 ? q(t, [s & /*args*/
      2 && j(
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
      16 && (c.$$scope = {
        dirty: s,
        ctx: l
      }), e.$set(c);
    },
    i(l) {
      a || (_(e.$$.fragment, l), a = !0);
    },
    o(l) {
      f(e.$$.fragment, l), a = !1;
    },
    d(l) {
      v(e, l);
    }
  };
}
function G(o) {
  let e;
  const a = (
    /*#slots*/
    o[3].default
  ), t = k(
    a,
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
        a,
        n,
        /*$$scope*/
        n[4],
        e ? $(
          a,
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
      f(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function H(o) {
  return {
    c: i,
    l: i,
    m: i,
    p: i,
    i,
    o: i,
    d: i
  };
}
function J(o) {
  let e, a, t = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !1,
    pending: H,
    then: E,
    catch: D,
    value: 6,
    blocks: [, , ,]
  };
  return y(
    /*AwaitedFlow*/
    o[2],
    t
  ), {
    c() {
      e = m(), t.block.c();
    },
    l(n) {
      e = m(), t.block.l(n);
    },
    m(n, l) {
      F(n, e, l), t.block.m(n, t.anchor = l), t.mount = () => e.parentNode, t.anchor = e, a = !0;
    },
    p(n, [l]) {
      o = n, S(t, o, l);
    },
    i(n) {
      a || (_(t.block), a = !0);
    },
    o(n) {
      for (let l = 0; l < 3; l += 1) {
        const s = t.blocks[l];
        f(s);
      }
      a = !1;
    },
    d(n) {
      n && z(e), t.block.d(n), t.token = null, t = null;
    }
  };
}
function K(o, e, a) {
  let t, {
    $$slots: n = {},
    $$scope: l
  } = e;
  const s = g(() => import("./Awaited-De-ZQGmp.js"));
  let {
    value: c
  } = e;
  return o.$$set = (r) => {
    a(5, e = u(u({}, e), d(r))), "value" in r && a(0, c = r.value), "$$scope" in r && a(4, l = r.$$scope);
  }, o.$$.update = () => {
    a(1, t = e);
  }, e = d(e), [c, t, s, n, l];
}
class L extends p {
  constructor(e) {
    super(), A(this, e, K, J, N, {
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
  L as default
};
