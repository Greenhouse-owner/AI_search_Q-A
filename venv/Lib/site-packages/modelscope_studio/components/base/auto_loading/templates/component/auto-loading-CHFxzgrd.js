import { i as _e, a as U, r as pe, w as j, g as he } from "./Index-EtlgRr_D.js";
const I = window.ms_globals.React, fe = window.ms_globals.React.forwardRef, K = window.ms_globals.React.useRef, P = window.ms_globals.React.useState, R = window.ms_globals.React.useEffect, me = window.ms_globals.React.useCallback, B = window.ms_globals.ReactDOM.createPortal, ge = window.ms_globals.internalContext.useContextPropsContext, xe = window.ms_globals.internalContext.ContextPropsProvider, we = window.ms_globals.antd.theme, be = window.ms_globals.antd.Spin, ye = window.ms_globals.antd.Alert;
var Ee = /\s/;
function Ce(e) {
  for (var t = e.length; t-- && Ee.test(e.charAt(t)); )
    ;
  return t;
}
var ve = /^\s+/;
function Ie(e) {
  return e && e.slice(0, Ce(e) + 1).replace(ve, "");
}
var J = NaN, Te = /^[-+]0x[0-9a-f]+$/i, ke = /^0b[01]+$/i, Pe = /^0o[0-7]+$/i, Re = parseInt;
function X(e) {
  if (typeof e == "number")
    return e;
  if (_e(e))
    return J;
  if (U(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = U(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ie(e);
  var r = ke.test(e);
  return r || Pe.test(e) ? Re(e.slice(2), r ? 2 : 8) : Te.test(e) ? J : +e;
}
var N = function() {
  return pe.Date.now();
}, Se = "Expected a function", Oe = Math.max, je = Math.min;
function Le(e, t, r) {
  var l, s, n, o, i, f, h = 0, x = !1, a = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Se);
  t = X(t) || 0, U(r) && (x = !!r.leading, a = "maxWait" in r, n = a ? Oe(X(r.maxWait) || 0, t) : n, g = "trailing" in r ? !!r.trailing : g);
  function m(c) {
    var E = l, T = s;
    return l = s = void 0, h = c, o = e.apply(T, E), o;
  }
  function C(c) {
    return h = c, i = setTimeout(_, t), x ? m(c) : o;
  }
  function b(c) {
    var E = c - f, T = c - h, O = t - E;
    return a ? je(O, n - T) : O;
  }
  function d(c) {
    var E = c - f, T = c - h;
    return f === void 0 || E >= t || E < 0 || a && T >= n;
  }
  function _() {
    var c = N();
    if (d(c))
      return w(c);
    i = setTimeout(_, b(c));
  }
  function w(c) {
    return i = void 0, g && l ? m(c) : (l = s = void 0, o);
  }
  function v() {
    i !== void 0 && clearTimeout(i), h = 0, l = f = s = i = void 0;
  }
  function u() {
    return i === void 0 ? o : w(N());
  }
  function y() {
    var c = N(), E = d(c);
    if (l = arguments, s = this, f = c, E) {
      if (i === void 0)
        return C(f);
      if (a)
        return clearTimeout(i), i = setTimeout(_, t), m(f);
    }
    return i === void 0 && (i = setTimeout(_, t)), o;
  }
  return y.cancel = v, y.flush = u, y;
}
var se = {
  exports: {}
}, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe = I, Ae = Symbol.for("react.element"), Ne = Symbol.for("react.fragment"), ze = Object.prototype.hasOwnProperty, We = Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qe = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ie(e, t, r) {
  var l, s = {}, n = null, o = null;
  r !== void 0 && (n = "" + r), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (l in t) ze.call(t, l) && !qe.hasOwnProperty(l) && (s[l] = t[l]);
  if (e && e.defaultProps) for (l in t = e.defaultProps, t) s[l] === void 0 && (s[l] = t[l]);
  return {
    $$typeof: Ae,
    type: e,
    key: n,
    ref: o,
    props: s,
    _owner: We.current
  };
}
A.Fragment = Ne;
A.jsx = ie;
A.jsxs = ie;
se.exports = A;
var p = se.exports;
const {
  SvelteComponent: Me,
  assign: Y,
  binding_callbacks: Z,
  check_outros: De,
  children: ae,
  claim_element: ce,
  claim_space: Be,
  component_subscribe: Q,
  compute_slots: Ue,
  create_slot: Ge,
  detach: S,
  element: ue,
  empty: $,
  exclude_internal_props: ee,
  get_all_dirty_from_scope: He,
  get_slot_changes: Ke,
  group_outros: Ve,
  init: Je,
  insert_hydration: L,
  safe_not_equal: Xe,
  set_custom_element_data: de,
  space: Ye,
  transition_in: F,
  transition_out: G,
  update_slot_base: Ze
} = window.__gradio__svelte__internal, {
  beforeUpdate: Qe,
  getContext: $e,
  onDestroy: et,
  setContext: tt
} = window.__gradio__svelte__internal;
function te(e) {
  let t, r;
  const l = (
    /*#slots*/
    e[7].default
  ), s = Ge(
    l,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ue("svelte-slot"), s && s.c(), this.h();
    },
    l(n) {
      t = ce(n, "SVELTE-SLOT", {
        class: !0
      });
      var o = ae(t);
      s && s.l(o), o.forEach(S), this.h();
    },
    h() {
      de(t, "class", "svelte-1rt0kpf");
    },
    m(n, o) {
      L(n, t, o), s && s.m(t, null), e[9](t), r = !0;
    },
    p(n, o) {
      s && s.p && (!r || o & /*$$scope*/
      64) && Ze(
        s,
        l,
        n,
        /*$$scope*/
        n[6],
        r ? Ke(
          l,
          /*$$scope*/
          n[6],
          o,
          null
        ) : He(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      r || (F(s, n), r = !0);
    },
    o(n) {
      G(s, n), r = !1;
    },
    d(n) {
      n && S(t), s && s.d(n), e[9](null);
    }
  };
}
function nt(e) {
  let t, r, l, s, n = (
    /*$$slots*/
    e[4].default && te(e)
  );
  return {
    c() {
      t = ue("react-portal-target"), r = Ye(), n && n.c(), l = $(), this.h();
    },
    l(o) {
      t = ce(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), ae(t).forEach(S), r = Be(o), n && n.l(o), l = $(), this.h();
    },
    h() {
      de(t, "class", "svelte-1rt0kpf");
    },
    m(o, i) {
      L(o, t, i), e[8](t), L(o, r, i), n && n.m(o, i), L(o, l, i), s = !0;
    },
    p(o, [i]) {
      /*$$slots*/
      o[4].default ? n ? (n.p(o, i), i & /*$$slots*/
      16 && F(n, 1)) : (n = te(o), n.c(), F(n, 1), n.m(l.parentNode, l)) : n && (Ve(), G(n, 1, 1, () => {
        n = null;
      }), De());
    },
    i(o) {
      s || (F(n), s = !0);
    },
    o(o) {
      G(n), s = !1;
    },
    d(o) {
      o && (S(t), S(r), S(l)), e[8](null), n && n.d(o);
    }
  };
}
function ne(e) {
  const {
    svelteInit: t,
    ...r
  } = e;
  return r;
}
function rt(e, t, r) {
  let l, s, {
    $$slots: n = {},
    $$scope: o
  } = t;
  const i = Ue(n);
  let {
    svelteInit: f
  } = t;
  const h = j(ne(t)), x = j();
  Q(e, x, (u) => r(0, l = u));
  const a = j();
  Q(e, a, (u) => r(1, s = u));
  const g = [], m = $e("$$ms-gr-react-wrapper"), {
    slotKey: C,
    slotIndex: b,
    subSlotIndex: d
  } = he() || {}, _ = f({
    parent: m,
    props: h,
    target: x,
    slot: a,
    slotKey: C,
    slotIndex: b,
    subSlotIndex: d,
    onDestroy(u) {
      g.push(u);
    }
  });
  tt("$$ms-gr-react-wrapper", _), Qe(() => {
    h.set(ne(t));
  }), et(() => {
    g.forEach((u) => u());
  });
  function w(u) {
    Z[u ? "unshift" : "push"](() => {
      l = u, x.set(l);
    });
  }
  function v(u) {
    Z[u ? "unshift" : "push"](() => {
      s = u, a.set(s);
    });
  }
  return e.$$set = (u) => {
    r(17, t = Y(Y({}, t), ee(u))), "svelteInit" in u && r(5, f = u.svelteInit), "$$scope" in u && r(6, o = u.$$scope);
  }, t = ee(t), [l, s, x, a, i, f, o, n, w, v];
}
class ot extends Me {
  constructor(t) {
    super(), Je(this, t, rt, nt, Xe, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: _t
} = window.__gradio__svelte__internal, re = window.ms_globals.rerender, z = window.ms_globals.tree;
function lt(e, t = {}) {
  function r(l) {
    const s = j(), n = new ot({
      ...l,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const i = {
            key: window.ms_globals.autokey,
            svelteInstance: s,
            reactComponent: e,
            props: o.props,
            slot: o.slot,
            target: o.target,
            slotIndex: o.slotIndex,
            subSlotIndex: o.subSlotIndex,
            ignore: t.ignore,
            slotKey: o.slotKey,
            nodes: []
          }, f = o.parent ?? z;
          return f.nodes = [...f.nodes, i], re({
            createPortal: B,
            node: z
          }), o.onDestroy(() => {
            f.nodes = f.nodes.filter((h) => h.svelteInstance !== s), re({
              createPortal: B,
              node: z
            });
          }), i;
        },
        ...l.props
      }
    });
    return s.set(n), n;
  }
  return new Promise((l) => {
    window.ms_globals.initializePromise.then(() => {
      l(r);
    });
  });
}
const st = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function it(e) {
  return e ? Object.keys(e).reduce((t, r) => {
    const l = e[r];
    return t[r] = at(r, l), t;
  }, {}) : {};
}
function at(e, t) {
  return typeof t == "number" && !st.includes(e) ? t + "px" : t;
}
function H(e) {
  const t = [], r = e.cloneNode(!1);
  if (e._reactElement) {
    const s = I.Children.toArray(e._reactElement.props.children).map((n) => {
      if (I.isValidElement(n) && n.props.__slot__) {
        const {
          portals: o,
          clonedElement: i
        } = H(n.props.el);
        return I.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...I.Children.toArray(n.props.children), ...o]
        });
      }
      return null;
    });
    return s.originalChildren = e._reactElement.props.children, t.push(B(I.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: s
    }), r)), {
      clonedElement: r,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((s) => {
    e.getEventListeners(s).forEach(({
      listener: o,
      type: i,
      useCapture: f
    }) => {
      r.addEventListener(i, o, f);
    });
  });
  const l = Array.from(e.childNodes);
  for (let s = 0; s < l.length; s++) {
    const n = l[s];
    if (n.nodeType === 1) {
      const {
        clonedElement: o,
        portals: i
      } = H(n);
      t.push(...i), r.appendChild(o);
    } else n.nodeType === 3 && r.appendChild(n.cloneNode());
  }
  return {
    clonedElement: r,
    portals: t
  };
}
function ct(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const oe = fe(({
  slot: e,
  clone: t,
  className: r,
  style: l,
  observeAttributes: s
}, n) => {
  const o = K(), [i, f] = P([]), {
    forceClone: h
  } = ge(), x = h ? !0 : t;
  return R(() => {
    var b;
    if (!o.current || !e)
      return;
    let a = e;
    function g() {
      let d = a;
      if (a.tagName.toLowerCase() === "svelte-slot" && a.children.length === 1 && a.children[0] && (d = a.children[0], d.tagName.toLowerCase() === "react-portal-target" && d.children[0] && (d = d.children[0])), ct(n, d), r && d.classList.add(...r.split(" ")), l) {
        const _ = it(l);
        Object.keys(_).forEach((w) => {
          d.style[w] = _[w];
        });
      }
    }
    let m = null, C = null;
    if (x && window.MutationObserver) {
      let d = function() {
        var u, y, c;
        (u = o.current) != null && u.contains(a) && ((y = o.current) == null || y.removeChild(a));
        const {
          portals: w,
          clonedElement: v
        } = H(e);
        a = v, f(w), a.style.display = "contents", C && clearTimeout(C), C = setTimeout(() => {
          g();
        }, 50), (c = o.current) == null || c.appendChild(a);
      };
      d();
      const _ = Le(() => {
        d(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(_), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      a.style.display = "contents", g(), (b = o.current) == null || b.appendChild(a);
    return () => {
      var d, _;
      a.style.display = "", (d = o.current) != null && d.contains(a) && ((_ = o.current) == null || _.removeChild(a)), m == null || m.disconnect();
    };
  }, [e, x, r, l, n, s, h]), I.createElement("react-child", {
    ref: o,
    style: {
      display: "contents"
    }
  }, ...i);
}), ut = ({
  children: e,
  ...t
}) => /* @__PURE__ */ p.jsx(p.Fragment, {
  children: e(t)
});
function dt(e) {
  return I.createElement(ut, {
    children: e
  });
}
function le(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? dt((r) => /* @__PURE__ */ p.jsx(xe, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ p.jsx(oe, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...r
    })
  })) : /* @__PURE__ */ p.jsx(oe, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function W({
  key: e,
  slots: t,
  targets: r
}, l) {
  return t[e] ? (...s) => r ? r.map((n, o) => /* @__PURE__ */ p.jsx(I.Fragment, {
    children: le(n, {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }, o)) : /* @__PURE__ */ p.jsx(p.Fragment, {
    children: le(t[e], {
      clone: !0,
      params: s,
      forceClone: !0
    })
  }) : void 0;
}
function q(e) {
  const t = K(e);
  return t.current = e, me((...r) => {
    var l;
    return (l = t.current) == null ? void 0 : l.call(t, ...r);
  }, []);
}
function ft(e) {
  const [t, r] = P((e == null ? void 0 : e.eta) ?? null), {
    status: l,
    progress: s,
    queue_position: n,
    message: o,
    queue_size: i
  } = e || {}, [f, h] = P(0), [x, a] = P(0), [g, m] = P(null), [C, b] = P(null), [d, _] = P(null), w = K(!1), v = q(() => {
    requestAnimationFrame(() => {
      a((performance.now() - f) / 1e3), w.current && v();
    });
  }), u = q(() => {
    r(null), m(null), b(null), h(performance.now()), a(0), w.current = !0, v();
  }), y = q(() => {
    a(0), r(null), m(null), b(null), w.current = !1;
  });
  return R(() => {
    l === "pending" ? u() : y();
  }, [u, l, y]), R(() => {
    r((e == null ? void 0 : e.eta) ?? null);
  }, [e == null ? void 0 : e.eta]), R(() => {
    let c = t;
    c === null && (c = g, r(c)), c !== null && g !== c && (b(((performance.now() - f) / 1e3 + c).toFixed(1)), m(c));
  }, [t, g, f]), R(() => {
    _(x.toFixed(1));
  }, [x]), R(() => () => {
    w.current && y();
  }, []), {
    eta: t,
    formattedEta: C,
    formattedTimer: d,
    progress: s,
    queuePosition: n,
    queueSize: i,
    status: l,
    message: o
  };
}
let M = null;
function D(e) {
  const t = ["", "k", "M", "G", "T", "P", "E", "Z"];
  let r = 0;
  for (; e > 1e3 && r < t.length - 1; )
    e /= 1e3, r++;
  const l = t[r];
  return (Number.isInteger(e) ? e : e.toFixed(1)) + l;
}
const pt = lt(({
  slots: e,
  children: t,
  configType: r,
  loadingStatus: l,
  className: s,
  id: n,
  style: o,
  setSlotParams: i,
  showMask: f,
  showTimer: h,
  loadingText: x
}) => {
  var T, O, V;
  let a = null, g = null;
  const {
    status: m,
    message: C,
    progress: b,
    queuePosition: d,
    queueSize: _,
    eta: w,
    formattedEta: v,
    formattedTimer: u
  } = ft(l), y = m === "pending" || m === "generating", c = e.loadingText || typeof x == "string", {
    token: E
  } = we.useToken();
  if (y)
    if (e.render)
      a = (T = W({
        slots: e,
        key: "render"
      })) == null ? void 0 : T(l);
    else
      switch (r) {
        case "antd":
          a = /* @__PURE__ */ p.jsx(be, {
            size: "small",
            delay: 200,
            style: {
              zIndex: E.zIndexPopupBase,
              backgroundColor: f ? E.colorBgMask : void 0
            },
            tip: c ? e.loadingText ? (O = W({
              slots: e,
              key: "loadingText"
            })) == null ? void 0 : O(l) : x : m === "pending" ? /* @__PURE__ */ p.jsxs("div", {
              style: {
                textShadow: "none"
              },
              children: [b ? b.map((k) => /* @__PURE__ */ p.jsx(I.Fragment, {
                children: k.index != null && /* @__PURE__ */ p.jsxs(p.Fragment, {
                  children: [k.length != null ? `${D(k.index || 0)}/${D(k.length)}` : `${D(k.index || 0)}`, k.unit, " "]
                })
              }, k.index)) : d !== null && _ !== void 0 && typeof d == "number" && d >= 0 ? `queue: ${d + 1}/${_} |` : d === 0 ? "processing |" : null, " ", h && /* @__PURE__ */ p.jsxs(p.Fragment, {
                children: [u, w ? `/${v}` : "", "s"]
              })]
            }) : null,
            className: "ms-gr-auto-loading-default-antd",
            children: /* @__PURE__ */ p.jsx("div", {})
          });
          break;
      }
  if (m === "error" && !M)
    if (e.errorRender)
      g = (V = W({
        slots: e,
        key: "errorRender"
      })) == null ? void 0 : V(l);
    else
      switch (r) {
        case "antd":
          M = g = /* @__PURE__ */ p.jsx(ye, {
            closable: !0,
            className: "ms-gr-auto-loading-error-default-antd",
            style: {
              zIndex: E.zIndexPopupBase
            },
            message: "Error",
            description: C,
            type: "error",
            onClose: () => {
              M = null;
            }
          });
          break;
      }
  return /* @__PURE__ */ p.jsxs("div", {
    className: s,
    id: n,
    style: o,
    children: [a, g, t]
  });
});
export {
  pt as AutoLoading,
  pt as default
};
