import { s as F, j as x } from "./sveltify-RgD9W_DK.js";
import { i as G, a as P, r as U, d as D, g as S, m as V } from "./Index-CiVw1c-n.js";
const C = window.ms_globals.React, T = window.ms_globals.React.useMemo, k = window.ms_globals.React.useState, M = window.ms_globals.React.useEffect, B = window.ms_globals.React.forwardRef, H = window.ms_globals.React.useRef, $ = window.ms_globals.internalContext.useContextPropsContext, W = window.ms_globals.internalContext.ContextPropsProvider, z = window.ms_globals.ReactDOM.createPortal;
var X = /\s/;
function q(e) {
  for (var t = e.length; t-- && X.test(e.charAt(t)); )
    ;
  return t;
}
var J = /^\s+/;
function Q(e) {
  return e && e.slice(0, q(e) + 1).replace(J, "");
}
var L = NaN, Y = /^[-+]0x[0-9a-f]+$/i, Z = /^0b[01]+$/i, K = /^0o[0-7]+$/i, ee = parseInt;
function N(e) {
  if (typeof e == "number")
    return e;
  if (G(e))
    return L;
  if (P(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = P(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Q(e);
  var r = Z.test(e);
  return r || K.test(e) ? ee(e.slice(2), r ? 2 : 8) : Y.test(e) ? L : +e;
}
var O = function() {
  return U.Date.now();
}, te = "Expected a function", ne = Math.max, re = Math.min;
function oe(e, t, r) {
  var s, l, n, o, i, u, m = 0, b = !1, c = !1, E = !0;
  if (typeof e != "function")
    throw new TypeError(te);
  t = N(t) || 0, P(r) && (b = !!r.leading, c = "maxWait" in r, n = c ? ne(N(r.maxWait) || 0, t) : n, E = "trailing" in r ? !!r.trailing : E);
  function f(a) {
    var g = s, I = l;
    return s = l = void 0, m = a, o = e.apply(I, g), o;
  }
  function w(a) {
    return m = a, i = setTimeout(p, t), b ? f(a) : o;
  }
  function _(a) {
    var g = a - u, I = a - m, j = t - g;
    return c ? re(j, n - I) : j;
  }
  function d(a) {
    var g = a - u, I = a - m;
    return u === void 0 || g >= t || g < 0 || c && I >= n;
  }
  function p() {
    var a = O();
    if (d(a))
      return h(a);
    i = setTimeout(p, _(a));
  }
  function h(a) {
    return i = void 0, E && s ? f(a) : (s = l = void 0, o);
  }
  function R() {
    i !== void 0 && clearTimeout(i), m = 0, s = u = l = i = void 0;
  }
  function v() {
    return i === void 0 ? o : h(O());
  }
  function y() {
    var a = O(), g = d(a);
    if (s = arguments, l = this, u = a, g) {
      if (i === void 0)
        return w(u);
      if (c)
        return clearTimeout(i), i = setTimeout(p, t), f(u);
    }
    return i === void 0 && (i = setTimeout(p, t)), o;
  }
  return y.cancel = R, y.flush = v, y;
}
function ie(e) {
  const [t, r] = k(() => S(e));
  return M(() => {
    let s = !0;
    return e.subscribe((n) => {
      s && (s = !1, n === t) || r(n);
    });
  }, [e]), t;
}
function se(e) {
  const t = T(() => D(e, (r) => r), [e]);
  return ie(t);
}
const le = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function ae(e) {
  return e ? Object.keys(e).reduce((t, r) => {
    const s = e[r];
    return t[r] = ce(r, s), t;
  }, {}) : {};
}
function ce(e, t) {
  return typeof t == "number" && !le.includes(e) ? t + "px" : t;
}
function A(e) {
  const t = [], r = e.cloneNode(!1);
  if (e._reactElement) {
    const l = C.Children.toArray(e._reactElement.props.children).map((n) => {
      if (C.isValidElement(n) && n.props.__slot__) {
        const {
          portals: o,
          clonedElement: i
        } = A(n.props.el);
        return C.cloneElement(n, {
          ...n.props,
          el: i,
          children: [...C.Children.toArray(n.props.children), ...o]
        });
      }
      return null;
    });
    return l.originalChildren = e._reactElement.props.children, t.push(z(C.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: l
    }), r)), {
      clonedElement: r,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((l) => {
    e.getEventListeners(l).forEach(({
      listener: o,
      type: i,
      useCapture: u
    }) => {
      r.addEventListener(i, o, u);
    });
  });
  const s = Array.from(e.childNodes);
  for (let l = 0; l < s.length; l++) {
    const n = s[l];
    if (n.nodeType === 1) {
      const {
        clonedElement: o,
        portals: i
      } = A(n);
      t.push(...i), r.appendChild(o);
    } else n.nodeType === 3 && r.appendChild(n.cloneNode());
  }
  return {
    clonedElement: r,
    portals: t
  };
}
function de(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const ue = B(({
  slot: e,
  clone: t,
  className: r,
  style: s,
  observeAttributes: l
}, n) => {
  const o = H(), [i, u] = k([]), {
    forceClone: m
  } = $(), b = m ? !0 : t;
  return M(() => {
    var _;
    if (!o.current || !e)
      return;
    let c = e;
    function E() {
      let d = c;
      if (c.tagName.toLowerCase() === "svelte-slot" && c.children.length === 1 && c.children[0] && (d = c.children[0], d.tagName.toLowerCase() === "react-portal-target" && d.children[0] && (d = d.children[0])), de(n, d), r && d.classList.add(...r.split(" ")), s) {
        const p = ae(s);
        Object.keys(p).forEach((h) => {
          d.style[h] = p[h];
        });
      }
    }
    let f = null, w = null;
    if (b && window.MutationObserver) {
      let d = function() {
        var v, y, a;
        (v = o.current) != null && v.contains(c) && ((y = o.current) == null || y.removeChild(c));
        const {
          portals: h,
          clonedElement: R
        } = A(e);
        c = R, u(h), c.style.display = "contents", w && clearTimeout(w), w = setTimeout(() => {
          E();
        }, 50), (a = o.current) == null || a.appendChild(c);
      };
      d();
      const p = oe(() => {
        d(), f == null || f.disconnect(), f == null || f.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      f = new window.MutationObserver(p), f.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      c.style.display = "contents", E(), (_ = o.current) == null || _.appendChild(c);
    return () => {
      var d, p;
      c.style.display = "", (d = o.current) != null && d.contains(c) && ((p = o.current) == null || p.removeChild(c)), f == null || f.disconnect();
    };
  }, [e, b, r, s, n, l, m]), C.createElement("react-child", {
    ref: o,
    style: {
      display: "contents"
    }
  }, ...i);
});
function fe(e, t) {
  const r = T(() => C.Children.toArray(e.originalChildren || e).filter((n) => n.props.node && !n.props.node.ignore && (!t && !n.props.nodeSlotKey || t && t === n.props.nodeSlotKey)).sort((n, o) => {
    if (n.props.node.slotIndex && o.props.node.slotIndex) {
      const i = S(n.props.node.slotIndex) || 0, u = S(o.props.node.slotIndex) || 0;
      return i - u === 0 && n.props.node.subSlotIndex && o.props.node.subSlotIndex ? (S(n.props.node.subSlotIndex) || 0) - (S(o.props.node.subSlotIndex) || 0) : i - u;
    }
    return 0;
  }).map((n) => n.props.node.target), [e, t]);
  return se(r);
}
const pe = ({
  value: e,
  children: t,
  contextValue: r
}) => {
  const s = T(() => typeof e != "object" || Array.isArray(e) ? {
    value: e
  } : e, [e]), l = T(() => V({}, r, s), [r, s]);
  return /* @__PURE__ */ x.jsx(W, {
    forceClone: !0,
    ctx: l,
    children: t
  });
}, he = F(({
  value: e,
  contextValue: t,
  children: r,
  __internal_slot_key: s
}) => {
  const l = fe(r, s);
  return /* @__PURE__ */ x.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ x.jsx("div", {
      style: {
        display: "none"
      },
      children: /* @__PURE__ */ x.jsx(W, {
        children: r
      })
    }), e == null ? void 0 : e.map((n, o) => /* @__PURE__ */ x.jsx(pe, {
      value: n,
      contextValue: t,
      children: l.map((i, u) => /* @__PURE__ */ x.jsx(ue, {
        clone: !0,
        slot: i
      }, u))
    }, o))]
  });
});
export {
  he as Each,
  he as default
};
