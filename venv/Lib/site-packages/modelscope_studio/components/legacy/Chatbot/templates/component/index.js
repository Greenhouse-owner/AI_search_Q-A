async function b() {
  window.ms_globals || (window.ms_globals = {}), window.ms_globals.initializePromise || (window.ms_globals.initializePromise = new Promise((o) => {
    window.ms_globals.initialize = () => {
      o();
    };
  })), await window.ms_globals.initializePromise;
}
async function h(o) {
  return await b(), o().then((e) => e.default);
}
const {
  SvelteComponent: g,
  assign: u,
  claim_component: p,
  create_component: w,
  create_slot: k,
  destroy_component: v,
  detach: z,
  empty: m,
  exclude_internal_props: d,
  flush: C,
  get_all_dirty_from_scope: P,
  get_slot_changes: $,
  get_spread_object: j,
  get_spread_update: q,
  handle_promise: y,
  init: A,
  insert_hydration: I,
  mount_component: N,
  noop: i,
  safe_not_equal: S,
  transition_in: _,
  transition_out: f,
  update_await_block_branch: B,
  update_slot_base: D
} = window.__gradio__svelte__internal;
function E(o) {
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
function F(o) {
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
      default: [G]
    },
    $$scope: {
      ctx: o
    }
  };
  for (let n = 0; n < t.length; n += 1)
    l = u(l, t[n]);
  return e = new /*Chatbot*/
  o[6]({
    props: l
  }), {
    c() {
      w(e.$$.fragment);
    },
    l(n) {
      p(e.$$.fragment, n);
    },
    m(n, s) {
      N(e, n, s), a = !0;
    },
    p(n, s) {
      const c = s & /*args, value*/
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
      16 && (c.$$scope = {
        dirty: s,
        ctx: n
      }), e.$set(c);
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
    l(l) {
      t && t.l(l);
    },
    m(l, n) {
      t && t.m(l, n), e = !0;
    },
    p(l, n) {
      t && t.p && (!e || n & /*$$scope*/
      16) && D(
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
        ) : P(
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
    then: F,
    catch: E,
    value: 6,
    blocks: [, , ,]
  };
  return y(
    /*AwaitedChatbot*/
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
      o = l, B(t, o, n);
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
function K(o, e, a) {
  let t, {
    $$slots: l = {},
    $$scope: n
  } = e;
  const s = h(() => import("./Awaited-CoFWtApL.js"));
  let {
    value: c
  } = e;
  return o.$$set = (r) => {
    a(5, e = u(u({}, e), d(r))), "value" in r && a(0, c = r.value), "$$scope" in r && a(4, n = r.$$scope);
  }, o.$$.update = () => {
    a(1, t = e);
  }, e = d(e), [c, t, s, l, n];
}
class L extends g {
  constructor(e) {
    super(), A(this, e, K, J, S, {
      value: 0
    });
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({
      value: e
    }), C();
  }
}
export {
  L as default
};
