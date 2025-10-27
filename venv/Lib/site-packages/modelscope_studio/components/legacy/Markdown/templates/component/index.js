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
  create_component: k,
  create_slot: h,
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
  insert_hydration: I,
  mount_component: M,
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
  let l = {
    $$slots: {
      default: [F]
    },
    $$scope: {
      ctx: o
    }
  };
  for (let n = 0; n < t.length; n += 1)
    l = u(l, t[n]);
  return e = new /*Markdown*/
  o[6]({
    props: l
  }), {
    c() {
      k(e.$$.fragment);
    },
    l(n) {
      w(e.$$.fragment, n);
    },
    m(n, s) {
      M(e, n, s), a = !0;
    },
    p(n, s) {
      const r = s & /*args, value*/
      3 ? q(t, [s & /*args*/
      2 && j(
        /*args*/
        n[1]
      ), s & /*value*/
      1 && {
        value: (
          /*value*/
          n[0]
        )
      }]) : {};
      s & /*$$scope*/
      16 && (r.$$scope = {
        dirty: s,
        ctx: n
      }), e.$set(r);
    },
    i(n) {
      a || (_(e.$$.fragment, n), a = !0);
    },
    o(n) {
      f(e.$$.fragment, n), a = !1;
    },
    d(n) {
      v(e, n);
    }
  };
}
function F(o) {
  let e;
  const a = (
    /*#slots*/
    o[3].default
  ), t = h(
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
    l(l) {
      t && t.l(l);
    },
    m(l, n) {
      t && t.m(l, n), e = !0;
    },
    p(l, n) {
      t && t.p && (!e || n & /*$$scope*/
      16) && B(
        t,
        a,
        l,
        /*$$scope*/
        l[4],
        e ? $(
          a,
          /*$$scope*/
          l[4],
          n,
          null
        ) : C(
          /*$$scope*/
          l[4]
        ),
        null
      );
    },
    i(l) {
      e || (_(t, l), e = !0);
    },
    o(l) {
      f(t, l), e = !1;
    },
    d(l) {
      t && t.d(l);
    }
  };
}
function G(o) {
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
function H(o) {
  let e, a, t = {
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
  return y(
    /*AwaitedMarkdown*/
    o[2],
    t
  ), {
    c() {
      e = m(), t.block.c();
    },
    l(l) {
      e = m(), t.block.l(l);
    },
    m(l, n) {
      I(l, e, n), t.block.m(l, t.anchor = n), t.mount = () => e.parentNode, t.anchor = e, a = !0;
    },
    p(l, [n]) {
      o = l, S(t, o, n);
    },
    i(l) {
      a || (_(t.block), a = !0);
    },
    o(l) {
      for (let n = 0; n < 3; n += 1) {
        const s = t.blocks[n];
        f(s);
      }
      a = !1;
    },
    d(l) {
      l && z(e), t.block.d(l), t.token = null, t = null;
    }
  };
}
function J(o, e, a) {
  let t, {
    $$slots: l = {},
    $$scope: n
  } = e;
  const s = g(() => import("./Awaited-0AZkwelz.js"));
  let {
    value: r
  } = e;
  return o.$$set = (c) => {
    a(5, e = u(u({}, e), d(c))), "value" in c && a(0, r = c.value), "$$scope" in c && a(4, n = c.$$scope);
  }, o.$$.update = () => {
    a(1, t = e);
  }, e = d(e), [r, t, s, l, n];
}
class K extends p {
  constructor(e) {
    super(), A(this, e, J, H, N, {
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
