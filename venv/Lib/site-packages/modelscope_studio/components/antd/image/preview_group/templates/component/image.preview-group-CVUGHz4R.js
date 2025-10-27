import { i as le, a as W, r as ce, w as R, g as ae, b as ue } from "./Index-DmAC87nv.js";
const y = window.ms_globals.React, ne = window.ms_globals.React.forwardRef, re = window.ms_globals.React.useRef, oe = window.ms_globals.React.useState, se = window.ms_globals.React.useEffect, ie = window.ms_globals.React.useMemo, A = window.ms_globals.ReactDOM.createPortal, fe = window.ms_globals.internalContext.useContextPropsContext, de = window.ms_globals.antd.Image;
var me = /\s/;
function pe(e) {
  for (var t = e.length; t-- && me.test(e.charAt(t)); )
    ;
  return t;
}
var _e = /^\s+/;
function ge(e) {
  return e && e.slice(0, pe(e) + 1).replace(_e, "");
}
var D = NaN, he = /^[-+]0x[0-9a-f]+$/i, we = /^0b[01]+$/i, ve = /^0o[0-7]+$/i, be = parseInt;
function G(e) {
  if (typeof e == "number")
    return e;
  if (le(e))
    return D;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ge(e);
  var o = we.test(e);
  return o || ve.test(e) ? be(e.slice(2), o ? 2 : 8) : he.test(e) ? D : +e;
}
var P = function() {
  return ce.Date.now();
}, ye = "Expected a function", Ee = Math.max, Ce = Math.min;
function xe(e, t, o) {
  var s, i, n, r, l, f, _ = 0, g = !1, c = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(ye);
  t = G(t) || 0, W(o) && (g = !!o.leading, c = "maxWait" in o, n = c ? Ee(G(o.maxWait) || 0, t) : n, h = "trailing" in o ? !!o.trailing : h);
  function m(u) {
    var v = s, S = i;
    return s = i = void 0, _ = u, r = e.apply(S, v), r;
  }
  function b(u) {
    return _ = u, l = setTimeout(p, t), g ? m(u) : r;
  }
  function E(u) {
    var v = u - f, S = u - _, M = t - v;
    return c ? Ce(M, n - S) : M;
  }
  function d(u) {
    var v = u - f, S = u - _;
    return f === void 0 || v >= t || v < 0 || c && S >= n;
  }
  function p() {
    var u = P();
    if (d(u))
      return w(u);
    l = setTimeout(p, E(u));
  }
  function w(u) {
    return l = void 0, h && s ? m(u) : (s = i = void 0, r);
  }
  function I() {
    l !== void 0 && clearTimeout(l), _ = 0, s = f = i = l = void 0;
  }
  function a() {
    return l === void 0 ? r : w(P());
  }
  function C() {
    var u = P(), v = d(u);
    if (s = arguments, i = this, f = u, v) {
      if (l === void 0)
        return b(f);
      if (c)
        return clearTimeout(l), l = setTimeout(p, t), m(f);
    }
    return l === void 0 && (l = setTimeout(p, t)), r;
  }
  return C.cancel = I, C.flush = a, C;
}
var Y = {
  exports: {}
}, O = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie = y, Se = Symbol.for("react.element"), Re = Symbol.for("react.fragment"), ke = Object.prototype.hasOwnProperty, Te = Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Oe = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Q(e, t, o) {
  var s, i = {}, n = null, r = null;
  o !== void 0 && (n = "" + o), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (r = t.ref);
  for (s in t) ke.call(t, s) && !Oe.hasOwnProperty(s) && (i[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) i[s] === void 0 && (i[s] = t[s]);
  return {
    $$typeof: Se,
    type: e,
    key: n,
    ref: r,
    props: i,
    _owner: Te.current
  };
}
O.Fragment = Re;
O.jsx = Q;
O.jsxs = Q;
Y.exports = O;
var L = Y.exports;
const {
  SvelteComponent: Pe,
  assign: U,
  binding_callbacks: z,
  check_outros: Le,
  children: Z,
  claim_element: $,
  claim_space: Ne,
  component_subscribe: B,
  compute_slots: Ae,
  create_slot: We,
  detach: x,
  element: ee,
  empty: H,
  exclude_internal_props: K,
  get_all_dirty_from_scope: je,
  get_slot_changes: Fe,
  group_outros: Me,
  init: De,
  insert_hydration: k,
  safe_not_equal: Ge,
  set_custom_element_data: te,
  space: Ue,
  transition_in: T,
  transition_out: j,
  update_slot_base: ze
} = window.__gradio__svelte__internal, {
  beforeUpdate: Be,
  getContext: He,
  onDestroy: Ke,
  setContext: qe
} = window.__gradio__svelte__internal;
function q(e) {
  let t, o;
  const s = (
    /*#slots*/
    e[7].default
  ), i = We(
    s,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = ee("svelte-slot"), i && i.c(), this.h();
    },
    l(n) {
      t = $(n, "SVELTE-SLOT", {
        class: !0
      });
      var r = Z(t);
      i && i.l(r), r.forEach(x), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(n, r) {
      k(n, t, r), i && i.m(t, null), e[9](t), o = !0;
    },
    p(n, r) {
      i && i.p && (!o || r & /*$$scope*/
      64) && ze(
        i,
        s,
        n,
        /*$$scope*/
        n[6],
        o ? Fe(
          s,
          /*$$scope*/
          n[6],
          r,
          null
        ) : je(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      o || (T(i, n), o = !0);
    },
    o(n) {
      j(i, n), o = !1;
    },
    d(n) {
      n && x(t), i && i.d(n), e[9](null);
    }
  };
}
function Ve(e) {
  let t, o, s, i, n = (
    /*$$slots*/
    e[4].default && q(e)
  );
  return {
    c() {
      t = ee("react-portal-target"), o = Ue(), n && n.c(), s = H(), this.h();
    },
    l(r) {
      t = $(r, "REACT-PORTAL-TARGET", {
        class: !0
      }), Z(t).forEach(x), o = Ne(r), n && n.l(r), s = H(), this.h();
    },
    h() {
      te(t, "class", "svelte-1rt0kpf");
    },
    m(r, l) {
      k(r, t, l), e[8](t), k(r, o, l), n && n.m(r, l), k(r, s, l), i = !0;
    },
    p(r, [l]) {
      /*$$slots*/
      r[4].default ? n ? (n.p(r, l), l & /*$$slots*/
      16 && T(n, 1)) : (n = q(r), n.c(), T(n, 1), n.m(s.parentNode, s)) : n && (Me(), j(n, 1, 1, () => {
        n = null;
      }), Le());
    },
    i(r) {
      i || (T(n), i = !0);
    },
    o(r) {
      j(n), i = !1;
    },
    d(r) {
      r && (x(t), x(o), x(s)), e[8](null), n && n.d(r);
    }
  };
}
function V(e) {
  const {
    svelteInit: t,
    ...o
  } = e;
  return o;
}
function Je(e, t, o) {
  let s, i, {
    $$slots: n = {},
    $$scope: r
  } = t;
  const l = Ae(n);
  let {
    svelteInit: f
  } = t;
  const _ = R(V(t)), g = R();
  B(e, g, (a) => o(0, s = a));
  const c = R();
  B(e, c, (a) => o(1, i = a));
  const h = [], m = He("$$ms-gr-react-wrapper"), {
    slotKey: b,
    slotIndex: E,
    subSlotIndex: d
  } = ae() || {}, p = f({
    parent: m,
    props: _,
    target: g,
    slot: c,
    slotKey: b,
    slotIndex: E,
    subSlotIndex: d,
    onDestroy(a) {
      h.push(a);
    }
  });
  qe("$$ms-gr-react-wrapper", p), Be(() => {
    _.set(V(t));
  }), Ke(() => {
    h.forEach((a) => a());
  });
  function w(a) {
    z[a ? "unshift" : "push"](() => {
      s = a, g.set(s);
    });
  }
  function I(a) {
    z[a ? "unshift" : "push"](() => {
      i = a, c.set(i);
    });
  }
  return e.$$set = (a) => {
    o(17, t = U(U({}, t), K(a))), "svelteInit" in a && o(5, f = a.svelteInit), "$$scope" in a && o(6, r = a.$$scope);
  }, t = K(t), [s, i, g, c, l, f, r, n, w, I];
}
class Xe extends Pe {
  constructor(t) {
    super(), De(this, t, Je, Ve, Ge, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: it
} = window.__gradio__svelte__internal, J = window.ms_globals.rerender, N = window.ms_globals.tree;
function Ye(e, t = {}) {
  function o(s) {
    const i = R(), n = new Xe({
      ...s,
      props: {
        svelteInit(r) {
          window.ms_globals.autokey += 1;
          const l = {
            key: window.ms_globals.autokey,
            svelteInstance: i,
            reactComponent: e,
            props: r.props,
            slot: r.slot,
            target: r.target,
            slotIndex: r.slotIndex,
            subSlotIndex: r.subSlotIndex,
            ignore: t.ignore,
            slotKey: r.slotKey,
            nodes: []
          }, f = r.parent ?? N;
          return f.nodes = [...f.nodes, l], J({
            createPortal: A,
            node: N
          }), r.onDestroy(() => {
            f.nodes = f.nodes.filter((_) => _.svelteInstance !== i), J({
              createPortal: A,
              node: N
            });
          }), l;
        },
        ...s.props
      }
    });
    return i.set(n), n;
  }
  return new Promise((s) => {
    window.ms_globals.initializePromise.then(() => {
      s(o);
    });
  });
}
const Qe = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Ze(e) {
  return e ? Object.keys(e).reduce((t, o) => {
    const s = e[o];
    return t[o] = $e(o, s), t;
  }, {}) : {};
}
function $e(e, t) {
  return typeof t == "number" && !Qe.includes(e) ? t + "px" : t;
}
function F(e) {
  const t = [], o = e.cloneNode(!1);
  if (e._reactElement) {
    const i = y.Children.toArray(e._reactElement.props.children).map((n) => {
      if (y.isValidElement(n) && n.props.__slot__) {
        const {
          portals: r,
          clonedElement: l
        } = F(n.props.el);
        return y.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...y.Children.toArray(n.props.children), ...r]
        });
      }
      return null;
    });
    return i.originalChildren = e._reactElement.props.children, t.push(A(y.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: i
    }), o)), {
      clonedElement: o,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((i) => {
    e.getEventListeners(i).forEach(({
      listener: r,
      type: l,
      useCapture: f
    }) => {
      o.addEventListener(l, r, f);
    });
  });
  const s = Array.from(e.childNodes);
  for (let i = 0; i < s.length; i++) {
    const n = s[i];
    if (n.nodeType === 1) {
      const {
        clonedElement: r,
        portals: l
      } = F(n);
      t.push(...l), o.appendChild(r);
    } else n.nodeType === 3 && o.appendChild(n.cloneNode());
  }
  return {
    clonedElement: o,
    portals: t
  };
}
function et(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const X = ne(({
  slot: e,
  clone: t,
  className: o,
  style: s,
  observeAttributes: i
}, n) => {
  const r = re(), [l, f] = oe([]), {
    forceClone: _
  } = fe(), g = _ ? !0 : t;
  return se(() => {
    var E;
    if (!r.current || !e)
      return;
    let c = e;
    function h() {
      let d = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (d = c.children[0], d.tagName.toLowerCase() === "react-portal-target" && d.children[0] && (d = d.children[0])), et(n, d), o && d.classList.add(...o.split(" ")), s) {
        const p = Ze(s);
        Object.keys(p).forEach((w) => {
          d.style[w] = p[w];
        });
      }
    }
    let m = null, b = null;
    if (g && window.MutationObserver) {
      let d = function() {
        var a, C, u;
        (a = r.current) != null && a.contains(c) && ((C = r.current) == null || C.removeChild(c));
        const {
          portals: w,
          clonedElement: I
        } = F(e);
        c = I, f(w), c.style.display = "contents", b && clearTimeout(b), b = setTimeout(() => {
          h();
        }, 50), (u = r.current) == null || u.appendChild(c);
      };
      d();
      const p = xe(() => {
        d(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(p), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", h(), (E = r.current) == null || E.appendChild(c);
    return () => {
      var d, p;
      c.style.display = "", (d = r.current) != null && d.contains(c) && ((p = r.current) == null || p.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, g, o, s, n, i, _]), y.createElement("react-child", {
    ref: r,
    style: {
      display: "contents"
    }
  }, ...l);
});
function tt(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function nt(e, t = !1) {
  try {
    if (ue(e))
      return e;
    if (t && !tt(e))
      return;
    if (typeof e == "string") {
      let o = e.trim();
      return o.startsWith(";") && (o = o.slice(1)), o.endsWith(";") && (o = o.slice(0, -1)), new Function(`return (...args) => (${o})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function rt(e, t) {
  return ie(() => nt(e, t), [e, t]);
}
function ot(e) {
  return typeof e == "object" && e !== null ? e : {};
}
const lt = Ye(({
  slots: e,
  preview: t,
  ...o
}) => {
  const s = ot(t), i = e["preview.mask"] || e["preview.closeIcon"] || t !== !1, n = rt(s.getContainer);
  return /* @__PURE__ */ L.jsx(de.PreviewGroup, {
    ...o,
    preview: i ? {
      ...s,
      getContainer: n,
      ...e["preview.mask"] || Reflect.has(s, "mask") ? {
        mask: e["preview.mask"] ? /* @__PURE__ */ L.jsx(X, {
          slot: e["preview.mask"]
        }) : s.mask
      } : {},
      closeIcon: e["preview.closeIcon"] ? /* @__PURE__ */ L.jsx(X, {
        slot: e["preview.closeIcon"]
      }) : s.closeIcon
    } : !1
  });
});
export {
  lt as ImagePreviewGroup,
  lt as default
};
