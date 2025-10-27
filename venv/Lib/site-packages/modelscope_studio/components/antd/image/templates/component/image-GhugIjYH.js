import { i as ue, a as A, r as de, w as P, g as fe, b as me } from "./Index-4WvT7OQD.js";
const b = window.ms_globals.React, ie = window.ms_globals.React.forwardRef, se = window.ms_globals.React.useRef, le = window.ms_globals.React.useState, ce = window.ms_globals.React.useEffect, ae = window.ms_globals.React.useMemo, W = window.ms_globals.ReactDOM.createPortal, pe = window.ms_globals.internalContext.useContextPropsContext, _e = window.ms_globals.internalContext.ContextPropsProvider, he = window.ms_globals.antd.Image;
var ge = /\s/;
function we(e) {
  for (var t = e.length; t-- && ge.test(e.charAt(t)); )
    ;
  return t;
}
var ve = /^\s+/;
function be(e) {
  return e && e.slice(0, we(e) + 1).replace(ve, "");
}
var z = NaN, ye = /^[-+]0x[0-9a-f]+$/i, Ce = /^0b[01]+$/i, xe = /^0o[0-7]+$/i, Ee = parseInt;
function B(e) {
  if (typeof e == "number")
    return e;
  if (ue(e))
    return z;
  if (A(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = A(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = be(e);
  var r = Ce.test(e);
  return r || xe.test(e) ? Ee(e.slice(2), r ? 2 : 8) : ye.test(e) ? z : +e;
}
var F = function() {
  return de.Date.now();
}, Ie = "Expected a function", Re = Math.max, Se = Math.min;
function ke(e, t, r) {
  var s, i, n, o, l, u, p = 0, g = !1, c = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(Ie);
  t = B(t) || 0, A(r) && (g = !!r.leading, c = "maxWait" in r, n = c ? Re(B(r.maxWait) || 0, t) : n, w = "trailing" in r ? !!r.trailing : w);
  function m(d) {
    var y = s, S = i;
    return s = i = void 0, p = d, o = e.apply(S, y), o;
  }
  function C(d) {
    return p = d, l = setTimeout(h, t), g ? m(d) : o;
  }
  function x(d) {
    var y = d - u, S = d - p, U = t - y;
    return c ? Se(U, n - S) : U;
  }
  function f(d) {
    var y = d - u, S = d - p;
    return u === void 0 || y >= t || y < 0 || c && S >= n;
  }
  function h() {
    var d = F();
    if (f(d))
      return v(d);
    l = setTimeout(h, x(d));
  }
  function v(d) {
    return l = void 0, w && s ? m(d) : (s = i = void 0, o);
  }
  function R() {
    l !== void 0 && clearTimeout(l), p = 0, s = u = i = l = void 0;
  }
  function a() {
    return l === void 0 ? o : v(F());
  }
  function E() {
    var d = F(), y = f(d);
    if (s = arguments, i = this, u = d, y) {
      if (l === void 0)
        return C(u);
      if (c)
        return clearTimeout(l), l = setTimeout(h, t), m(u);
    }
    return l === void 0 && (l = setTimeout(h, t)), o;
  }
  return E.cancel = R, E.flush = a, E;
}
var $ = {
  exports: {}
}, j = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe = b, Te = Symbol.for("react.element"), Oe = Symbol.for("react.fragment"), je = Object.prototype.hasOwnProperty, Fe = Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Le = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ee(e, t, r) {
  var s, i = {}, n = null, o = null;
  r !== void 0 && (n = "" + r), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (s in t) je.call(t, s) && !Le.hasOwnProperty(s) && (i[s] = t[s]);
  if (e && e.defaultProps) for (s in t = e.defaultProps, t) i[s] === void 0 && (i[s] = t[s]);
  return {
    $$typeof: Te,
    type: e,
    key: n,
    ref: o,
    props: i,
    _owner: Fe.current
  };
}
j.Fragment = Oe;
j.jsx = ee;
j.jsxs = ee;
$.exports = j;
var _ = $.exports;
const {
  SvelteComponent: Ne,
  assign: G,
  binding_callbacks: H,
  check_outros: We,
  children: te,
  claim_element: ne,
  claim_space: Ae,
  component_subscribe: K,
  compute_slots: Me,
  create_slot: De,
  detach: I,
  element: re,
  empty: q,
  exclude_internal_props: V,
  get_all_dirty_from_scope: Ue,
  get_slot_changes: ze,
  group_outros: Be,
  init: Ge,
  insert_hydration: T,
  safe_not_equal: He,
  set_custom_element_data: oe,
  space: Ke,
  transition_in: O,
  transition_out: M,
  update_slot_base: qe
} = window.__gradio__svelte__internal, {
  beforeUpdate: Ve,
  getContext: Je,
  onDestroy: Xe,
  setContext: Ye
} = window.__gradio__svelte__internal;
function J(e) {
  let t, r;
  const s = (
    /*#slots*/
    e[7].default
  ), i = De(
    s,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = re("svelte-slot"), i && i.c(), this.h();
    },
    l(n) {
      t = ne(n, "SVELTE-SLOT", {
        class: !0
      });
      var o = te(t);
      i && i.l(o), o.forEach(I), this.h();
    },
    h() {
      oe(t, "class", "svelte-1rt0kpf");
    },
    m(n, o) {
      T(n, t, o), i && i.m(t, null), e[9](t), r = !0;
    },
    p(n, o) {
      i && i.p && (!r || o & /*$$scope*/
      64) && qe(
        i,
        s,
        n,
        /*$$scope*/
        n[6],
        r ? ze(
          s,
          /*$$scope*/
          n[6],
          o,
          null
        ) : Ue(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      r || (O(i, n), r = !0);
    },
    o(n) {
      M(i, n), r = !1;
    },
    d(n) {
      n && I(t), i && i.d(n), e[9](null);
    }
  };
}
function Qe(e) {
  let t, r, s, i, n = (
    /*$$slots*/
    e[4].default && J(e)
  );
  return {
    c() {
      t = re("react-portal-target"), r = Ke(), n && n.c(), s = q(), this.h();
    },
    l(o) {
      t = ne(o, "REACT-PORTAL-TARGET", {
        class: !0
      }), te(t).forEach(I), r = Ae(o), n && n.l(o), s = q(), this.h();
    },
    h() {
      oe(t, "class", "svelte-1rt0kpf");
    },
    m(o, l) {
      T(o, t, l), e[8](t), T(o, r, l), n && n.m(o, l), T(o, s, l), i = !0;
    },
    p(o, [l]) {
      /*$$slots*/
      o[4].default ? n ? (n.p(o, l), l & /*$$slots*/
      16 && O(n, 1)) : (n = J(o), n.c(), O(n, 1), n.m(s.parentNode, s)) : n && (Be(), M(n, 1, 1, () => {
        n = null;
      }), We());
    },
    i(o) {
      i || (O(n), i = !0);
    },
    o(o) {
      M(n), i = !1;
    },
    d(o) {
      o && (I(t), I(r), I(s)), e[8](null), n && n.d(o);
    }
  };
}
function X(e) {
  const {
    svelteInit: t,
    ...r
  } = e;
  return r;
}
function Ze(e, t, r) {
  let s, i, {
    $$slots: n = {},
    $$scope: o
  } = t;
  const l = Me(n);
  let {
    svelteInit: u
  } = t;
  const p = P(X(t)), g = P();
  K(e, g, (a) => r(0, s = a));
  const c = P();
  K(e, c, (a) => r(1, i = a));
  const w = [], m = Je("$$ms-gr-react-wrapper"), {
    slotKey: C,
    slotIndex: x,
    subSlotIndex: f
  } = fe() || {}, h = u({
    parent: m,
    props: p,
    target: g,
    slot: c,
    slotKey: C,
    slotIndex: x,
    subSlotIndex: f,
    onDestroy(a) {
      w.push(a);
    }
  });
  Ye("$$ms-gr-react-wrapper", h), Ve(() => {
    p.set(X(t));
  }), Xe(() => {
    w.forEach((a) => a());
  });
  function v(a) {
    H[a ? "unshift" : "push"](() => {
      s = a, g.set(s);
    });
  }
  function R(a) {
    H[a ? "unshift" : "push"](() => {
      i = a, c.set(i);
    });
  }
  return e.$$set = (a) => {
    r(17, t = G(G({}, t), V(a))), "svelteInit" in a && r(5, u = a.svelteInit), "$$scope" in a && r(6, o = a.$$scope);
  }, t = V(t), [s, i, g, c, l, u, o, n, v, R];
}
class $e extends Ne {
  constructor(t) {
    super(), Ge(this, t, Ze, Qe, He, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ft
} = window.__gradio__svelte__internal, Y = window.ms_globals.rerender, L = window.ms_globals.tree;
function et(e, t = {}) {
  function r(s) {
    const i = P(), n = new $e({
      ...s,
      props: {
        svelteInit(o) {
          window.ms_globals.autokey += 1;
          const l = {
            key: window.ms_globals.autokey,
            svelteInstance: i,
            reactComponent: e,
            props: o.props,
            slot: o.slot,
            target: o.target,
            slotIndex: o.slotIndex,
            subSlotIndex: o.subSlotIndex,
            ignore: t.ignore,
            slotKey: o.slotKey,
            nodes: []
          }, u = o.parent ?? L;
          return u.nodes = [...u.nodes, l], Y({
            createPortal: W,
            node: L
          }), o.onDestroy(() => {
            u.nodes = u.nodes.filter((p) => p.svelteInstance !== i), Y({
              createPortal: W,
              node: L
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
      s(r);
    });
  });
}
const tt = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function nt(e) {
  return e ? Object.keys(e).reduce((t, r) => {
    const s = e[r];
    return t[r] = rt(r, s), t;
  }, {}) : {};
}
function rt(e, t) {
  return typeof t == "number" && !tt.includes(e) ? t + "px" : t;
}
function D(e) {
  const t = [], r = e.cloneNode(!1);
  if (e._reactElement) {
    const i = b.Children.toArray(e._reactElement.props.children).map((n) => {
      if (b.isValidElement(n) && n.props.__slot__) {
        const {
          portals: o,
          clonedElement: l
        } = D(n.props.el);
        return b.cloneElement(n, {
          ...n.props,
          el: l,
          children: [...b.Children.toArray(n.props.children), ...o]
        });
      }
      return null;
    });
    return i.originalChildren = e._reactElement.props.children, t.push(W(b.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: i
    }), r)), {
      clonedElement: r,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((i) => {
    e.getEventListeners(i).forEach(({
      listener: o,
      type: l,
      useCapture: u
    }) => {
      r.addEventListener(l, o, u);
    });
  });
  const s = Array.from(e.childNodes);
  for (let i = 0; i < s.length; i++) {
    const n = s[i];
    if (n.nodeType === 1) {
      const {
        clonedElement: o,
        portals: l
      } = D(n);
      t.push(...l), r.appendChild(o);
    } else n.nodeType === 3 && r.appendChild(n.cloneNode());
  }
  return {
    clonedElement: r,
    portals: t
  };
}
function ot(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const k = ie(({
  slot: e,
  clone: t,
  className: r,
  style: s,
  observeAttributes: i
}, n) => {
  const o = se(), [l, u] = le([]), {
    forceClone: p
  } = pe(), g = p ? !0 : t;
  return ce(() => {
    var x;
    if (!o.current || !e)
      return;
    let c = e;
    function w() {
      let f = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (f = c.children[0], f.tagName.toLowerCase() === "react-portal-target" && f.children[0] && (f = f.children[0])), ot(n, f), r && f.classList.add(...r.split(" ")), s) {
        const h = nt(s);
        Object.keys(h).forEach((v) => {
          f.style[v] = h[v];
        });
      }
    }
    let m = null, C = null;
    if (g && window.MutationObserver) {
      let f = function() {
        var a, E, d;
        (a = o.current) != null && a.contains(c) && ((E = o.current) == null || E.removeChild(c));
        const {
          portals: v,
          clonedElement: R
        } = D(e);
        c = R, u(v), c.style.display = "contents", C && clearTimeout(C), C = setTimeout(() => {
          w();
        }, 50), (d = o.current) == null || d.appendChild(c);
      };
      f();
      const h = ke(() => {
        f(), m == null || m.disconnect(), m == null || m.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      m = new window.MutationObserver(h), m.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", w(), (x = o.current) == null || x.appendChild(c);
    return () => {
      var f, h;
      c.style.display = "", (f = o.current) != null && f.contains(c) && ((h = o.current) == null || h.removeChild(c)), m == null || m.disconnect();
    };
  }, [e, g, r, s, n, i, p]), b.createElement("react-child", {
    ref: o,
    style: {
      display: "contents"
    }
  }, ...l);
});
function it(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function st(e, t = !1) {
  try {
    if (me(e))
      return e;
    if (t && !it(e))
      return;
    if (typeof e == "string") {
      let r = e.trim();
      return r.startsWith(";") && (r = r.slice(1)), r.endsWith(";") && (r = r.slice(0, -1)), new Function(`return (...args) => (${r})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function N(e, t) {
  return ae(() => st(e, t), [e, t]);
}
function lt(e) {
  return Object.keys(e).reduce((t, r) => (e[r] !== void 0 && (t[r] = e[r]), t), {});
}
const ct = ({
  children: e,
  ...t
}) => /* @__PURE__ */ _.jsx(_.Fragment, {
  children: e(t)
});
function at(e) {
  return b.createElement(ct, {
    children: e
  });
}
function Q(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? at((r) => /* @__PURE__ */ _.jsx(_e, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ _.jsx(k, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...r
    })
  })) : /* @__PURE__ */ _.jsx(k, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function Z({
  key: e,
  slots: t,
  targets: r
}, s) {
  return t[e] ? (...i) => r ? r.map((n, o) => /* @__PURE__ */ _.jsx(b.Fragment, {
    children: Q(n, {
      clone: !0,
      params: i,
      forceClone: !0
    })
  }, o)) : /* @__PURE__ */ _.jsx(_.Fragment, {
    children: Q(t[e], {
      clone: !0,
      params: i,
      forceClone: !0
    })
  }) : void 0;
}
function ut(e) {
  return typeof e == "object" && e !== null ? e : {};
}
const mt = et(({
  slots: e,
  preview: t,
  setSlotParams: r,
  children: s,
  ...i
}) => {
  const n = ut(t), o = e["preview.mask"] || e["preview.closeIcon"] || e["preview.toolbarRender"] || e["preview.imageRender"] || t !== !1, l = N(n.getContainer), u = N(n.toolbarRender), p = N(n.imageRender);
  return /* @__PURE__ */ _.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ _.jsx("div", {
      style: {
        display: "none"
      },
      children: s
    }), /* @__PURE__ */ _.jsx(he, {
      ...i,
      preview: o ? lt({
        ...n,
        getContainer: l,
        toolbarRender: e["preview.toolbarRender"] ? Z({
          slots: e,
          key: "preview.toolbarRender"
        }) : u,
        imageRender: e["preview.imageRender"] ? Z({
          slots: e,
          key: "preview.imageRender"
        }) : p,
        ...e["preview.mask"] || Reflect.has(n, "mask") ? {
          mask: e["preview.mask"] ? /* @__PURE__ */ _.jsx(k, {
            slot: e["preview.mask"]
          }) : n.mask
        } : {},
        closeIcon: e["preview.closeIcon"] ? /* @__PURE__ */ _.jsx(k, {
          slot: e["preview.closeIcon"]
        }) : n.closeIcon
      }) : !1,
      placeholder: e.placeholder ? /* @__PURE__ */ _.jsx(k, {
        slot: e.placeholder
      }) : i.placeholder
    })]
  });
});
export {
  mt as Image,
  mt as default
};
