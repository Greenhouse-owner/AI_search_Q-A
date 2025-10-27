import { i as Gt, a as ge, r as Kt, w as ue, g as qt, c as J, b as Yt } from "./Index-BStoUMcK.js";
const R = window.ms_globals.React, d = window.ms_globals.React, Nt = window.ms_globals.React.forwardRef, Vt = window.ms_globals.React.useRef, Wt = window.ms_globals.React.useState, Ut = window.ms_globals.React.useEffect, vt = window.ms_globals.React.useMemo, De = window.ms_globals.ReactDOM.createPortal, Qt = window.ms_globals.internalContext.useContextPropsContext, Jt = window.ms_globals.internalContext.ContextPropsProvider, Zt = window.ms_globals.antd.ConfigProvider, Be = window.ms_globals.antd.theme, er = window.ms_globals.antd.Avatar, ie = window.ms_globals.antdCssinjs.unit, Re = window.ms_globals.antdCssinjs.token2CSSVar, qe = window.ms_globals.antdCssinjs.useStyleRegister, tr = window.ms_globals.antdCssinjs.useCSSVarRegister, rr = window.ms_globals.antdCssinjs.createTheme, nr = window.ms_globals.antdCssinjs.useCacheToken, St = window.ms_globals.antdCssinjs.Keyframes;
var or = /\s/;
function ir(t) {
  for (var e = t.length; e-- && or.test(t.charAt(e)); )
    ;
  return e;
}
var sr = /^\s+/;
function ar(t) {
  return t && t.slice(0, ir(t) + 1).replace(sr, "");
}
var Ye = NaN, lr = /^[-+]0x[0-9a-f]+$/i, cr = /^0b[01]+$/i, ur = /^0o[0-7]+$/i, fr = parseInt;
function Qe(t) {
  if (typeof t == "number")
    return t;
  if (Gt(t))
    return Ye;
  if (ge(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ge(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = ar(t);
  var r = cr.test(t);
  return r || ur.test(t) ? fr(t.slice(2), r ? 2 : 8) : lr.test(t) ? Ye : +t;
}
var je = function() {
  return Kt.Date.now();
}, dr = "Expected a function", hr = Math.max, gr = Math.min;
function mr(t, e, r) {
  var o, n, i, s, a, l, c = 0, u = !1, f = !1, h = !0;
  if (typeof t != "function")
    throw new TypeError(dr);
  e = Qe(e) || 0, ge(r) && (u = !!r.leading, f = "maxWait" in r, i = f ? hr(Qe(r.maxWait) || 0, e) : i, h = "trailing" in r ? !!r.trailing : h);
  function S(p) {
    var P = o, M = n;
    return o = n = void 0, c = p, s = t.apply(M, P), s;
  }
  function C(p) {
    return c = p, a = setTimeout(x, e), u ? S(p) : s;
  }
  function E(p) {
    var P = p - l, M = p - c, y = e - P;
    return f ? gr(y, i - M) : y;
  }
  function m(p) {
    var P = p - l, M = p - c;
    return l === void 0 || P >= e || P < 0 || f && M >= i;
  }
  function x() {
    var p = je();
    if (m(p))
      return w(p);
    a = setTimeout(x, E(p));
  }
  function w(p) {
    return a = void 0, h && o ? S(p) : (o = n = void 0, s);
  }
  function j() {
    a !== void 0 && clearTimeout(a), c = 0, o = l = n = a = void 0;
  }
  function g() {
    return a === void 0 ? s : w(je());
  }
  function b() {
    var p = je(), P = m(p);
    if (o = arguments, n = this, l = p, P) {
      if (a === void 0)
        return C(l);
      if (f)
        return clearTimeout(a), a = setTimeout(x, e), S(l);
    }
    return a === void 0 && (a = setTimeout(x, e)), s;
  }
  return b.cancel = j, b.flush = g, b;
}
var xt = {
  exports: {}
}, ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr = d, yr = Symbol.for("react.element"), br = Symbol.for("react.fragment"), vr = Object.prototype.hasOwnProperty, Sr = pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, xr = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Ct(t, e, r) {
  var o, n = {}, i = null, s = null;
  r !== void 0 && (i = "" + r), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (o in e) vr.call(e, o) && !xr.hasOwnProperty(o) && (n[o] = e[o]);
  if (t && t.defaultProps) for (o in e = t.defaultProps, e) n[o] === void 0 && (n[o] = e[o]);
  return {
    $$typeof: yr,
    type: t,
    key: i,
    ref: s,
    props: n,
    _owner: Sr.current
  };
}
ye.Fragment = br;
ye.jsx = Ct;
ye.jsxs = Ct;
xt.exports = ye;
var $ = xt.exports;
const {
  SvelteComponent: Cr,
  assign: Je,
  binding_callbacks: Ze,
  check_outros: _r,
  children: _t,
  claim_element: wt,
  claim_space: wr,
  component_subscribe: et,
  compute_slots: Tr,
  create_slot: Er,
  detach: Z,
  element: Tt,
  empty: tt,
  exclude_internal_props: rt,
  get_all_dirty_from_scope: Pr,
  get_slot_changes: Mr,
  group_outros: Or,
  init: Rr,
  insert_hydration: fe,
  safe_not_equal: jr,
  set_custom_element_data: Et,
  space: Ir,
  transition_in: de,
  transition_out: He,
  update_slot_base: kr
} = window.__gradio__svelte__internal, {
  beforeUpdate: Lr,
  getContext: $r,
  onDestroy: Dr,
  setContext: Br
} = window.__gradio__svelte__internal;
function nt(t) {
  let e, r;
  const o = (
    /*#slots*/
    t[7].default
  ), n = Er(
    o,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      e = Tt("svelte-slot"), n && n.c(), this.h();
    },
    l(i) {
      e = wt(i, "SVELTE-SLOT", {
        class: !0
      });
      var s = _t(e);
      n && n.l(s), s.forEach(Z), this.h();
    },
    h() {
      Et(e, "class", "svelte-1rt0kpf");
    },
    m(i, s) {
      fe(i, e, s), n && n.m(e, null), t[9](e), r = !0;
    },
    p(i, s) {
      n && n.p && (!r || s & /*$$scope*/
      64) && kr(
        n,
        o,
        i,
        /*$$scope*/
        i[6],
        r ? Mr(
          o,
          /*$$scope*/
          i[6],
          s,
          null
        ) : Pr(
          /*$$scope*/
          i[6]
        ),
        null
      );
    },
    i(i) {
      r || (de(n, i), r = !0);
    },
    o(i) {
      He(n, i), r = !1;
    },
    d(i) {
      i && Z(e), n && n.d(i), t[9](null);
    }
  };
}
function Hr(t) {
  let e, r, o, n, i = (
    /*$$slots*/
    t[4].default && nt(t)
  );
  return {
    c() {
      e = Tt("react-portal-target"), r = Ir(), i && i.c(), o = tt(), this.h();
    },
    l(s) {
      e = wt(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), _t(e).forEach(Z), r = wr(s), i && i.l(s), o = tt(), this.h();
    },
    h() {
      Et(e, "class", "svelte-1rt0kpf");
    },
    m(s, a) {
      fe(s, e, a), t[8](e), fe(s, r, a), i && i.m(s, a), fe(s, o, a), n = !0;
    },
    p(s, [a]) {
      /*$$slots*/
      s[4].default ? i ? (i.p(s, a), a & /*$$slots*/
      16 && de(i, 1)) : (i = nt(s), i.c(), de(i, 1), i.m(o.parentNode, o)) : i && (Or(), He(i, 1, 1, () => {
        i = null;
      }), _r());
    },
    i(s) {
      n || (de(i), n = !0);
    },
    o(s) {
      He(i), n = !1;
    },
    d(s) {
      s && (Z(e), Z(r), Z(o)), t[8](null), i && i.d(s);
    }
  };
}
function ot(t) {
  const {
    svelteInit: e,
    ...r
  } = t;
  return r;
}
function zr(t, e, r) {
  let o, n, {
    $$slots: i = {},
    $$scope: s
  } = e;
  const a = Tr(i);
  let {
    svelteInit: l
  } = e;
  const c = ue(ot(e)), u = ue();
  et(t, u, (g) => r(0, o = g));
  const f = ue();
  et(t, f, (g) => r(1, n = g));
  const h = [], S = $r("$$ms-gr-react-wrapper"), {
    slotKey: C,
    slotIndex: E,
    subSlotIndex: m
  } = qt() || {}, x = l({
    parent: S,
    props: c,
    target: u,
    slot: f,
    slotKey: C,
    slotIndex: E,
    subSlotIndex: m,
    onDestroy(g) {
      h.push(g);
    }
  });
  Br("$$ms-gr-react-wrapper", x), Lr(() => {
    c.set(ot(e));
  }), Dr(() => {
    h.forEach((g) => g());
  });
  function w(g) {
    Ze[g ? "unshift" : "push"](() => {
      o = g, u.set(o);
    });
  }
  function j(g) {
    Ze[g ? "unshift" : "push"](() => {
      n = g, f.set(n);
    });
  }
  return t.$$set = (g) => {
    r(17, e = Je(Je({}, e), rt(g))), "svelteInit" in g && r(5, l = g.svelteInit), "$$scope" in g && r(6, s = g.$$scope);
  }, e = rt(e), [o, n, u, f, a, l, s, i, w, j];
}
class Ar extends Cr {
  constructor(e) {
    super(), Rr(this, e, zr, Hr, jr, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: io
} = window.__gradio__svelte__internal, it = window.ms_globals.rerender, Ie = window.ms_globals.tree;
function Fr(t, e = {}) {
  function r(o) {
    const n = ue(), i = new Ar({
      ...o,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const a = {
            key: window.ms_globals.autokey,
            svelteInstance: n,
            reactComponent: t,
            props: s.props,
            slot: s.slot,
            target: s.target,
            slotIndex: s.slotIndex,
            subSlotIndex: s.subSlotIndex,
            ignore: e.ignore,
            slotKey: s.slotKey,
            nodes: []
          }, l = s.parent ?? Ie;
          return l.nodes = [...l.nodes, a], it({
            createPortal: De,
            node: Ie
          }), s.onDestroy(() => {
            l.nodes = l.nodes.filter((c) => c.svelteInstance !== n), it({
              createPortal: De,
              node: Ie
            });
          }), a;
        },
        ...o.props
      }
    });
    return n.set(i), i;
  }
  return new Promise((o) => {
    window.ms_globals.initializePromise.then(() => {
      o(r);
    });
  });
}
const Xr = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function Nr(t) {
  return t ? Object.keys(t).reduce((e, r) => {
    const o = t[r];
    return e[r] = Vr(r, o), e;
  }, {}) : {};
}
function Vr(t, e) {
  return typeof e == "number" && !Xr.includes(t) ? e + "px" : e;
}
function ze(t) {
  const e = [], r = t.cloneNode(!1);
  if (t._reactElement) {
    const n = d.Children.toArray(t._reactElement.props.children).map((i) => {
      if (d.isValidElement(i) && i.props.__slot__) {
        const {
          portals: s,
          clonedElement: a
        } = ze(i.props.el);
        return d.cloneElement(i, {
          ...i.props,
          el: a,
          children: [...d.Children.toArray(i.props.children), ...s]
        });
      }
      return null;
    });
    return n.originalChildren = t._reactElement.props.children, e.push(De(d.cloneElement(t._reactElement, {
      ...t._reactElement.props,
      children: n
    }), r)), {
      clonedElement: r,
      portals: e
    };
  }
  Object.keys(t.getEventListeners()).forEach((n) => {
    t.getEventListeners(n).forEach(({
      listener: s,
      type: a,
      useCapture: l
    }) => {
      r.addEventListener(a, s, l);
    });
  });
  const o = Array.from(t.childNodes);
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (i.nodeType === 1) {
      const {
        clonedElement: s,
        portals: a
      } = ze(i);
      e.push(...a), r.appendChild(s);
    } else i.nodeType === 3 && r.appendChild(i.cloneNode());
  }
  return {
    clonedElement: r,
    portals: e
  };
}
function Wr(t, e) {
  t && (typeof t == "function" ? t(e) : t.current = e);
}
const q = Nt(({
  slot: t,
  clone: e,
  className: r,
  style: o,
  observeAttributes: n
}, i) => {
  const s = Vt(), [a, l] = Wt([]), {
    forceClone: c
  } = Qt(), u = c ? !0 : e;
  return Ut(() => {
    var E;
    if (!s.current || !t)
      return;
    let f = t;
    function h() {
      let m = f;
      if (f.tagName.toLowerCase() === "svelte-slot" && f.children.length === 1 && f.children[0] && (m = f.children[0], m.tagName.toLowerCase() === "react-portal-target" && m.children[0] && (m = m.children[0])), Wr(i, m), r && m.classList.add(...r.split(" ")), o) {
        const x = Nr(o);
        Object.keys(x).forEach((w) => {
          m.style[w] = x[w];
        });
      }
    }
    let S = null, C = null;
    if (u && window.MutationObserver) {
      let m = function() {
        var g, b, p;
        (g = s.current) != null && g.contains(f) && ((b = s.current) == null || b.removeChild(f));
        const {
          portals: w,
          clonedElement: j
        } = ze(t);
        f = j, l(w), f.style.display = "contents", C && clearTimeout(C), C = setTimeout(() => {
          h();
        }, 50), (p = s.current) == null || p.appendChild(f);
      };
      m();
      const x = mr(() => {
        m(), S == null || S.disconnect(), S == null || S.observe(t, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      S = new window.MutationObserver(x), S.observe(t, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      f.style.display = "contents", h(), (E = s.current) == null || E.appendChild(f);
    return () => {
      var m, x;
      f.style.display = "", (m = s.current) != null && m.contains(f) && ((x = s.current) == null || x.removeChild(f)), S == null || S.disconnect();
    };
  }, [t, u, r, o, i, n, c]), d.createElement("react-child", {
    ref: s,
    style: {
      display: "contents"
    }
  }, ...a);
}), Ur = "1.0.5", Gr = /* @__PURE__ */ d.createContext({}), Kr = {
  classNames: {},
  styles: {},
  className: "",
  style: {}
}, qr = (t) => {
  const e = d.useContext(Gr);
  return d.useMemo(() => ({
    ...Kr,
    ...e[t]
  }), [e[t]]);
};
function se() {
  return se = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, se.apply(null, arguments);
}
function me() {
  const {
    getPrefixCls: t,
    direction: e,
    csp: r,
    iconPrefixCls: o,
    theme: n
  } = d.useContext(Zt.ConfigContext);
  return {
    theme: n,
    getPrefixCls: t,
    direction: e,
    csp: r,
    iconPrefixCls: o
  };
}
function Pt(t) {
  var e = R.useRef();
  e.current = t;
  var r = R.useCallback(function() {
    for (var o, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return (o = e.current) === null || o === void 0 ? void 0 : o.call.apply(o, [e].concat(i));
  }, []);
  return r;
}
function Yr(t) {
  if (Array.isArray(t)) return t;
}
function Qr(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var o, n, i, s, a = [], l = !0, c = !1;
    try {
      if (i = (r = r.call(t)).next, e === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (o = i.call(r)).done) && (a.push(o.value), a.length !== e); l = !0) ;
    } catch (u) {
      c = !0, n = u;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw n;
      }
    }
    return a;
  }
}
function st(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, o = Array(e); r < e; r++) o[r] = t[r];
  return o;
}
function Jr(t, e) {
  if (t) {
    if (typeof t == "string") return st(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? st(t, e) : void 0;
  }
}
function Zr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function he(t, e) {
  return Yr(t) || Qr(t, e) || Jr(t, e) || Zr();
}
function en() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var at = en() ? R.useLayoutEffect : R.useEffect, tn = function(e, r) {
  var o = R.useRef(!0);
  at(function() {
    return e(o.current);
  }, r), at(function() {
    return o.current = !1, function() {
      o.current = !0;
    };
  }, []);
};
function V(t) {
  "@babel/helpers - typeof";
  return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, V(t);
}
var T = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe = Symbol.for("react.element"), Ne = Symbol.for("react.portal"), be = Symbol.for("react.fragment"), ve = Symbol.for("react.strict_mode"), Se = Symbol.for("react.profiler"), xe = Symbol.for("react.provider"), Ce = Symbol.for("react.context"), rn = Symbol.for("react.server_context"), _e = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), Ee = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), nn = Symbol.for("react.offscreen"), Mt;
Mt = Symbol.for("react.module.reference");
function H(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Xe:
        switch (t = t.type, t) {
          case be:
          case Se:
          case ve:
          case we:
          case Te:
            return t;
          default:
            switch (t = t && t.$$typeof, t) {
              case rn:
              case Ce:
              case _e:
              case Pe:
              case Ee:
              case xe:
                return t;
              default:
                return e;
            }
        }
      case Ne:
        return e;
    }
  }
}
T.ContextConsumer = Ce;
T.ContextProvider = xe;
T.Element = Xe;
T.ForwardRef = _e;
T.Fragment = be;
T.Lazy = Pe;
T.Memo = Ee;
T.Portal = Ne;
T.Profiler = Se;
T.StrictMode = ve;
T.Suspense = we;
T.SuspenseList = Te;
T.isAsyncMode = function() {
  return !1;
};
T.isConcurrentMode = function() {
  return !1;
};
T.isContextConsumer = function(t) {
  return H(t) === Ce;
};
T.isContextProvider = function(t) {
  return H(t) === xe;
};
T.isElement = function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Xe;
};
T.isForwardRef = function(t) {
  return H(t) === _e;
};
T.isFragment = function(t) {
  return H(t) === be;
};
T.isLazy = function(t) {
  return H(t) === Pe;
};
T.isMemo = function(t) {
  return H(t) === Ee;
};
T.isPortal = function(t) {
  return H(t) === Ne;
};
T.isProfiler = function(t) {
  return H(t) === Se;
};
T.isStrictMode = function(t) {
  return H(t) === ve;
};
T.isSuspense = function(t) {
  return H(t) === we;
};
T.isSuspenseList = function(t) {
  return H(t) === Te;
};
T.isValidElementType = function(t) {
  return typeof t == "string" || typeof t == "function" || t === be || t === Se || t === ve || t === we || t === Te || t === nn || typeof t == "object" && t !== null && (t.$$typeof === Pe || t.$$typeof === Ee || t.$$typeof === xe || t.$$typeof === Ce || t.$$typeof === _e || t.$$typeof === Mt || t.getModuleId !== void 0);
};
T.typeOf = H;
function on(t, e) {
  if (V(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(t, e);
    if (V(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Ot(t) {
  var e = on(t, "string");
  return V(e) == "symbol" ? e : e + "";
}
function N(t, e, r) {
  return (e = Ot(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function lt(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function D(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? lt(Object(r), !0).forEach(function(o) {
      N(t, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : lt(Object(r)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return t;
}
function Me(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function sn(t, e) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, Ot(o.key), o);
  }
}
function Oe(t, e, r) {
  return e && sn(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Ae(t, e) {
  return Ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ae(t, e);
}
function Rt(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && Ae(t, e);
}
function pe(t) {
  return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, pe(t);
}
function jt() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jt = function() {
    return !!t;
  })();
}
function oe(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function an(t, e) {
  if (e && (V(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return oe(t);
}
function It(t) {
  var e = jt();
  return function() {
    var r, o = pe(t);
    if (e) {
      var n = pe(this).constructor;
      r = Reflect.construct(o, arguments, n);
    } else r = o.apply(this, arguments);
    return an(this, r);
  };
}
var kt = /* @__PURE__ */ Oe(function t() {
  Me(this, t);
}), Lt = "CALC_UNIT", ln = new RegExp(Lt, "g");
function ke(t) {
  return typeof t == "number" ? "".concat(t).concat(Lt) : t;
}
var cn = /* @__PURE__ */ function(t) {
  Rt(r, t);
  var e = It(r);
  function r(o, n) {
    var i;
    Me(this, r), i = e.call(this), N(oe(i), "result", ""), N(oe(i), "unitlessCssVar", void 0), N(oe(i), "lowPriority", void 0);
    var s = V(o);
    return i.unitlessCssVar = n, o instanceof r ? i.result = "(".concat(o.result, ")") : s === "number" ? i.result = ke(o) : s === "string" && (i.result = o), i;
  }
  return Oe(r, [{
    key: "add",
    value: function(n) {
      return n instanceof r ? this.result = "".concat(this.result, " + ").concat(n.getResult()) : (typeof n == "number" || typeof n == "string") && (this.result = "".concat(this.result, " + ").concat(ke(n))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof r ? this.result = "".concat(this.result, " - ").concat(n.getResult()) : (typeof n == "number" || typeof n == "string") && (this.result = "".concat(this.result, " - ").concat(ke(n))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), n instanceof r ? this.result = "".concat(this.result, " * ").concat(n.getResult(!0)) : (typeof n == "number" || typeof n == "string") && (this.result = "".concat(this.result, " * ").concat(n)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(n) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), n instanceof r ? this.result = "".concat(this.result, " / ").concat(n.getResult(!0)) : (typeof n == "number" || typeof n == "string") && (this.result = "".concat(this.result, " / ").concat(n)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(n) {
      return this.lowPriority || n ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(n) {
      var i = this, s = n || {}, a = s.unit, l = !0;
      return typeof a == "boolean" ? l = a : Array.from(this.unitlessCssVar).some(function(c) {
        return i.result.includes(c);
      }) && (l = !1), this.result = this.result.replace(ln, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(kt), un = /* @__PURE__ */ function(t) {
  Rt(r, t);
  var e = It(r);
  function r(o) {
    var n;
    return Me(this, r), n = e.call(this), N(oe(n), "result", 0), o instanceof r ? n.result = o.result : typeof o == "number" && (n.result = o), n;
  }
  return Oe(r, [{
    key: "add",
    value: function(n) {
      return n instanceof r ? this.result += n.result : typeof n == "number" && (this.result += n), this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof r ? this.result -= n.result : typeof n == "number" && (this.result -= n), this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return n instanceof r ? this.result *= n.result : typeof n == "number" && (this.result *= n), this;
    }
  }, {
    key: "div",
    value: function(n) {
      return n instanceof r ? this.result /= n.result : typeof n == "number" && (this.result /= n), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), r;
}(kt), fn = function(e, r) {
  var o = e === "css" ? cn : un;
  return function(n) {
    return new o(n, r);
  };
}, ct = function(e, r) {
  return "".concat([r, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function ut(t, e, r, o) {
  var n = D({}, e[t]);
  if (o != null && o.deprecatedTokens) {
    var i = o.deprecatedTokens;
    i.forEach(function(a) {
      var l = he(a, 2), c = l[0], u = l[1];
      if (n != null && n[c] || n != null && n[u]) {
        var f;
        (f = n[u]) !== null && f !== void 0 || (n[u] = n == null ? void 0 : n[c]);
      }
    });
  }
  var s = D(D({}, r), n);
  return Object.keys(s).forEach(function(a) {
    s[a] === e[a] && delete s[a];
  }), s;
}
var $t = typeof CSSINJS_STATISTIC < "u", Fe = !0;
function Ve() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  if (!$t)
    return Object.assign.apply(Object, [{}].concat(e));
  Fe = !1;
  var o = {};
  return e.forEach(function(n) {
    if (V(n) === "object") {
      var i = Object.keys(n);
      i.forEach(function(s) {
        Object.defineProperty(o, s, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return n[s];
          }
        });
      });
    }
  }), Fe = !0, o;
}
var ft = {};
function dn() {
}
var hn = function(e) {
  var r, o = e, n = dn;
  return $t && typeof Proxy < "u" && (r = /* @__PURE__ */ new Set(), o = new Proxy(e, {
    get: function(s, a) {
      if (Fe) {
        var l;
        (l = r) === null || l === void 0 || l.add(a);
      }
      return s[a];
    }
  }), n = function(s, a) {
    var l;
    ft[s] = {
      global: Array.from(r),
      component: D(D({}, (l = ft[s]) === null || l === void 0 ? void 0 : l.component), a)
    };
  }), {
    token: o,
    keys: r,
    flush: n
  };
};
function dt(t, e, r) {
  if (typeof r == "function") {
    var o;
    return r(Ve(e, (o = e[t]) !== null && o !== void 0 ? o : {}));
  }
  return r ?? {};
}
function gn(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var r = arguments.length, o = new Array(r), n = 0; n < r; n++)
        o[n] = arguments[n];
      return "max(".concat(o.map(function(i) {
        return ie(i);
      }).join(","), ")");
    },
    min: function() {
      for (var r = arguments.length, o = new Array(r), n = 0; n < r; n++)
        o[n] = arguments[n];
      return "min(".concat(o.map(function(i) {
        return ie(i);
      }).join(","), ")");
    }
  };
}
var mn = 1e3 * 60 * 10, pn = /* @__PURE__ */ function() {
  function t() {
    Me(this, t), N(this, "map", /* @__PURE__ */ new Map()), N(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), N(this, "nextID", 0), N(this, "lastAccessBeat", /* @__PURE__ */ new Map()), N(this, "accessBeat", 0);
  }
  return Oe(t, [{
    key: "set",
    value: function(r, o) {
      this.clear();
      var n = this.getCompositeKey(r);
      this.map.set(n, o), this.lastAccessBeat.set(n, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      var o = this.getCompositeKey(r), n = this.map.get(o);
      return this.lastAccessBeat.set(o, Date.now()), this.accessBeat += 1, n;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      var o = this, n = r.map(function(i) {
        return i && V(i) === "object" ? "obj_".concat(o.getObjectID(i)) : "".concat(V(i), "_").concat(i);
      });
      return n.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      var o = this.nextID;
      return this.objectIDMap.set(r, o), this.nextID += 1, o;
    }
  }, {
    key: "clear",
    value: function() {
      var r = this;
      if (this.accessBeat > 1e4) {
        var o = Date.now();
        this.lastAccessBeat.forEach(function(n, i) {
          o - n > mn && (r.map.delete(i), r.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), ht = new pn();
function yn(t, e) {
  return d.useMemo(function() {
    var r = ht.get(e);
    if (r)
      return r;
    var o = t();
    return ht.set(e, o), o;
  }, e);
}
var bn = function() {
  return {};
};
function vn(t) {
  var e = t.useCSP, r = e === void 0 ? bn : e, o = t.useToken, n = t.usePrefix, i = t.getResetStyles, s = t.getCommonStyle, a = t.getCompUnitless;
  function l(h, S, C, E) {
    var m = Array.isArray(h) ? h[0] : h;
    function x(M) {
      return "".concat(String(m)).concat(M.slice(0, 1).toUpperCase()).concat(M.slice(1));
    }
    var w = (E == null ? void 0 : E.unitless) || {}, j = typeof a == "function" ? a(h) : {}, g = D(D({}, j), {}, N({}, x("zIndexPopup"), !0));
    Object.keys(w).forEach(function(M) {
      g[x(M)] = w[M];
    });
    var b = D(D({}, E), {}, {
      unitless: g,
      prefixToken: x
    }), p = u(h, S, C, b), P = c(m, C, b);
    return function(M) {
      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : M, O = p(M, y), z = he(O, 2), k = z[1], A = P(y), v = he(A, 2), _ = v[0], I = v[1];
      return [_, k, I];
    };
  }
  function c(h, S, C) {
    var E = C.unitless, m = C.injectStyle, x = m === void 0 ? !0 : m, w = C.prefixToken, j = C.ignore, g = function(P) {
      var M = P.rootCls, y = P.cssVar, O = y === void 0 ? {} : y, z = o(), k = z.realToken;
      return tr({
        path: [h],
        prefix: O.prefix,
        key: O.key,
        unitless: E,
        ignore: j,
        token: k,
        scope: M
      }, function() {
        var A = dt(h, k, S), v = ut(h, k, A, {
          deprecatedTokens: C == null ? void 0 : C.deprecatedTokens
        });
        return Object.keys(A).forEach(function(_) {
          v[w(_)] = v[_], delete v[_];
        }), v;
      }), null;
    }, b = function(P) {
      var M = o(), y = M.cssVar;
      return [function(O) {
        return x && y ? /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(g, {
          rootCls: P,
          cssVar: y,
          component: h
        }), O) : O;
      }, y == null ? void 0 : y.key];
    };
    return b;
  }
  function u(h, S, C) {
    var E = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = Array.isArray(h) ? h : [h, h], x = he(m, 1), w = x[0], j = m.join("-"), g = t.layer || {
      name: "antd"
    };
    return function(b) {
      var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, P = o(), M = P.theme, y = P.realToken, O = P.hashId, z = P.token, k = P.cssVar, A = n(), v = A.rootPrefixCls, _ = A.iconPrefixCls, I = r(), F = k ? "css" : "js", U = yn(function() {
        var X = /* @__PURE__ */ new Set();
        return k && Object.keys(E.unitless || {}).forEach(function(K) {
          X.add(Re(K, k.prefix)), X.add(Re(K, ct(w, k.prefix)));
        }), fn(F, X);
      }, [F, w, k == null ? void 0 : k.prefix]), G = gn(F), Y = G.max, ee = G.min, te = {
        theme: M,
        token: z,
        hashId: O,
        nonce: function() {
          return I.nonce;
        },
        clientOnly: E.clientOnly,
        layer: g,
        // antd is always at top of styles
        order: E.order || -999
      };
      typeof i == "function" && qe(D(D({}, te), {}, {
        clientOnly: !1,
        path: ["Shared", v]
      }), function() {
        return i(z, {
          prefix: {
            rootPrefixCls: v,
            iconPrefixCls: _
          },
          csp: I
        });
      });
      var re = qe(D(D({}, te), {}, {
        path: [j, b, _]
      }), function() {
        if (E.injectStyle === !1)
          return [];
        var X = hn(z), K = X.token, zt = X.flush, Q = dt(w, y, C), At = ".".concat(b), Ue = ut(w, y, Q, {
          deprecatedTokens: E.deprecatedTokens
        });
        k && Q && V(Q) === "object" && Object.keys(Q).forEach(function(Ke) {
          Q[Ke] = "var(".concat(Re(Ke, ct(w, k.prefix)), ")");
        });
        var Ge = Ve(K, {
          componentCls: At,
          prefixCls: b,
          iconCls: ".".concat(_),
          antCls: ".".concat(v),
          calc: U,
          // @ts-ignore
          max: Y,
          // @ts-ignore
          min: ee
        }, k ? Q : Ue), Ft = S(Ge, {
          hashId: O,
          prefixCls: b,
          rootPrefixCls: v,
          iconPrefixCls: _
        });
        zt(w, Ue);
        var Xt = typeof s == "function" ? s(Ge, b, p, E.resetFont) : null;
        return [E.resetStyle === !1 ? null : Xt, Ft];
      });
      return [re, O];
    };
  }
  function f(h, S, C) {
    var E = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = u(h, S, C, D({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, E)), x = function(j) {
      var g = j.prefixCls, b = j.rootCls, p = b === void 0 ? g : b;
      return m(g, p), null;
    };
    return x;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
function ae(t) {
  "@babel/helpers - typeof";
  return ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ae(t);
}
function Sn(t, e) {
  if (ae(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(t, e);
    if (ae(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function xn(t) {
  var e = Sn(t, "string");
  return ae(e) == "symbol" ? e : e + "";
}
function B(t, e, r) {
  return (e = xn(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
const L = Math.round;
function Le(t, e) {
  const r = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], o = r.map((n) => parseFloat(n));
  for (let n = 0; n < 3; n += 1)
    o[n] = e(o[n] || 0, r[n] || "", n);
  return r[3] ? o[3] = r[3].includes("%") ? o[3] / 100 : o[3] : o[3] = 1, o;
}
const gt = (t, e, r) => r === 0 ? t : t / 100;
function ne(t, e) {
  const r = e || 255;
  return t > r ? r : t < 0 ? 0 : t;
}
class W {
  constructor(e) {
    B(this, "isValid", !0), B(this, "r", 0), B(this, "g", 0), B(this, "b", 0), B(this, "a", 1), B(this, "_h", void 0), B(this, "_s", void 0), B(this, "_l", void 0), B(this, "_v", void 0), B(this, "_max", void 0), B(this, "_min", void 0), B(this, "_brightness", void 0);
    function r(o) {
      return o[0] in e && o[1] in e && o[2] in e;
    }
    if (e) if (typeof e == "string") {
      let n = function(i) {
        return o.startsWith(i);
      };
      const o = e.trim();
      /^#?[A-F\d]{3,8}$/i.test(o) ? this.fromHexString(o) : n("rgb") ? this.fromRgbString(o) : n("hsl") ? this.fromHslString(o) : (n("hsv") || n("hsb")) && this.fromHsvString(o);
    } else if (e instanceof W)
      this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a, this._h = e._h, this._s = e._s, this._l = e._l, this._v = e._v;
    else if (r("rgb"))
      this.r = ne(e.r), this.g = ne(e.g), this.b = ne(e.b), this.a = typeof e.a == "number" ? ne(e.a, 1) : 1;
    else if (r("hsl"))
      this.fromHsl(e);
    else if (r("hsv"))
      this.fromHsv(e);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(e));
  }
  // ======================= Setter =======================
  setR(e) {
    return this._sc("r", e);
  }
  setG(e) {
    return this._sc("g", e);
  }
  setB(e) {
    return this._sc("b", e);
  }
  setA(e) {
    return this._sc("a", e, 1);
  }
  setHue(e) {
    const r = this.toHsv();
    return r.h = e, this._c(r);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function e(i) {
      const s = i / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    const r = e(this.r), o = e(this.g), n = e(this.b);
    return 0.2126 * r + 0.7152 * o + 0.0722 * n;
  }
  getHue() {
    if (typeof this._h > "u") {
      const e = this.getMax() - this.getMin();
      e === 0 ? this._h = 0 : this._h = L(60 * (this.r === this.getMax() ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / e + 2 : (this.r - this.g) / e + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const e = this.getMax() - this.getMin();
      e === 0 ? this._s = 0 : this._s = e / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(e = 10) {
    const r = this.getHue(), o = this.getSaturation();
    let n = this.getLightness() - e / 100;
    return n < 0 && (n = 0), this._c({
      h: r,
      s: o,
      l: n,
      a: this.a
    });
  }
  lighten(e = 10) {
    const r = this.getHue(), o = this.getSaturation();
    let n = this.getLightness() + e / 100;
    return n > 1 && (n = 1), this._c({
      h: r,
      s: o,
      l: n,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(e, r = 50) {
    const o = this._c(e), n = r / 100, i = (a) => (o[a] - this[a]) * n + this[a], s = {
      r: L(i("r")),
      g: L(i("g")),
      b: L(i("b")),
      a: L(i("a") * 100) / 100
    };
    return this._c(s);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(e = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, e);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(e = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, e);
  }
  onBackground(e) {
    const r = this._c(e), o = this.a + r.a * (1 - this.a), n = (i) => L((this[i] * this.a + r[i] * r.a * (1 - this.a)) / o);
    return this._c({
      r: n("r"),
      g: n("g"),
      b: n("b"),
      a: o
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(e) {
    return this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let e = "#";
    const r = (this.r || 0).toString(16);
    e += r.length === 2 ? r : "0" + r;
    const o = (this.g || 0).toString(16);
    e += o.length === 2 ? o : "0" + o;
    const n = (this.b || 0).toString(16);
    if (e += n.length === 2 ? n : "0" + n, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = L(this.a * 255).toString(16);
      e += i.length === 2 ? i : "0" + i;
    }
    return e;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const e = this.getHue(), r = L(this.getSaturation() * 100), o = L(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${e},${r}%,${o}%,${this.a})` : `hsl(${e},${r}%,${o}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(e, r, o) {
    const n = this.clone();
    return n[e] = ne(r, o), n;
  }
  _c(e) {
    return new this.constructor(e);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(e) {
    const r = e.replace("#", "");
    function o(n, i) {
      return parseInt(r[n] + r[i || n], 16);
    }
    r.length < 6 ? (this.r = o(0), this.g = o(1), this.b = o(2), this.a = r[3] ? o(3) / 255 : 1) : (this.r = o(0, 1), this.g = o(2, 3), this.b = o(4, 5), this.a = r[6] ? o(6, 7) / 255 : 1);
  }
  fromHsl({
    h: e,
    s: r,
    l: o,
    a: n
  }) {
    if (this._h = e % 360, this._s = r, this._l = o, this.a = typeof n == "number" ? n : 1, r <= 0) {
      const h = L(o * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, s = 0, a = 0;
    const l = e / 60, c = (1 - Math.abs(2 * o - 1)) * r, u = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = c, s = u) : l >= 1 && l < 2 ? (i = u, s = c) : l >= 2 && l < 3 ? (s = c, a = u) : l >= 3 && l < 4 ? (s = u, a = c) : l >= 4 && l < 5 ? (i = u, a = c) : l >= 5 && l < 6 && (i = c, a = u);
    const f = o - c / 2;
    this.r = L((i + f) * 255), this.g = L((s + f) * 255), this.b = L((a + f) * 255);
  }
  fromHsv({
    h: e,
    s: r,
    v: o,
    a: n
  }) {
    this._h = e % 360, this._s = r, this._v = o, this.a = typeof n == "number" ? n : 1;
    const i = L(o * 255);
    if (this.r = i, this.g = i, this.b = i, r <= 0)
      return;
    const s = e / 60, a = Math.floor(s), l = s - a, c = L(o * (1 - r) * 255), u = L(o * (1 - r * l) * 255), f = L(o * (1 - r * (1 - l)) * 255);
    switch (a) {
      case 0:
        this.g = f, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = f;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = f, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(e) {
    const r = Le(e, gt);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(e) {
    const r = Le(e, gt);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(e) {
    const r = Le(e, (o, n) => (
      // Convert percentage to number. e.g. 50% -> 128
      n.includes("%") ? L(o / 100 * 255) : o
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
const Cn = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, _n = Object.assign(Object.assign({}, Cn), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function $e(t) {
  return t >= 0 && t <= 255;
}
function le(t, e) {
  const {
    r,
    g: o,
    b: n,
    a: i
  } = new W(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: s,
    g: a,
    b: l
  } = new W(e).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((r - s * (1 - c)) / c), f = Math.round((o - a * (1 - c)) / c), h = Math.round((n - l * (1 - c)) / c);
    if ($e(u) && $e(f) && $e(h))
      return new W({
        r: u,
        g: f,
        b: h,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new W({
    r,
    g: o,
    b: n,
    a: 1
  }).toRgbString();
}
var wn = function(t, e) {
  var r = {};
  for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, o = Object.getOwnPropertySymbols(t); n < o.length; n++)
    e.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[n]) && (r[o[n]] = t[o[n]]);
  return r;
};
function Tn(t) {
  const {
    override: e
  } = t, r = wn(t, ["override"]), o = Object.assign({}, e);
  Object.keys(_n).forEach((h) => {
    delete o[h];
  });
  const n = Object.assign(Object.assign({}, r), o), i = 480, s = 576, a = 768, l = 992, c = 1200, u = 1600;
  if (n.motion === !1) {
    const h = "0s";
    n.motionDurationFast = h, n.motionDurationMid = h, n.motionDurationSlow = h;
  }
  return Object.assign(Object.assign(Object.assign({}, n), {
    // ============== Background ============== //
    colorFillContent: n.colorFillSecondary,
    colorFillContentHover: n.colorFill,
    colorFillAlter: n.colorFillQuaternary,
    colorBgContainerDisabled: n.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: n.colorBgContainer,
    colorSplit: le(n.colorBorderSecondary, n.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: n.colorTextQuaternary,
    colorTextDisabled: n.colorTextQuaternary,
    colorTextHeading: n.colorText,
    colorTextLabel: n.colorTextSecondary,
    colorTextDescription: n.colorTextTertiary,
    colorTextLightSolid: n.colorWhite,
    colorHighlight: n.colorError,
    colorBgTextHover: n.colorFillSecondary,
    colorBgTextActive: n.colorFill,
    colorIcon: n.colorTextTertiary,
    colorIconHover: n.colorText,
    colorErrorOutline: le(n.colorErrorBg, n.colorBgContainer),
    colorWarningOutline: le(n.colorWarningBg, n.colorBgContainer),
    // Font
    fontSizeIcon: n.fontSizeSM,
    // Line
    lineWidthFocus: n.lineWidth * 3,
    // Control
    lineWidth: n.lineWidth,
    controlOutlineWidth: n.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: n.controlHeight / 2,
    controlItemBgHover: n.colorFillTertiary,
    controlItemBgActive: n.colorPrimaryBg,
    controlItemBgActiveHover: n.colorPrimaryBgHover,
    controlItemBgActiveDisabled: n.colorFill,
    controlTmpOutline: n.colorFillQuaternary,
    controlOutline: le(n.colorPrimaryBg, n.colorBgContainer),
    lineType: n.lineType,
    borderRadius: n.borderRadius,
    borderRadiusXS: n.borderRadiusXS,
    borderRadiusSM: n.borderRadiusSM,
    borderRadiusLG: n.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: n.sizeXXS,
    paddingXS: n.sizeXS,
    paddingSM: n.sizeSM,
    padding: n.size,
    paddingMD: n.sizeMD,
    paddingLG: n.sizeLG,
    paddingXL: n.sizeXL,
    paddingContentHorizontalLG: n.sizeLG,
    paddingContentVerticalLG: n.sizeMS,
    paddingContentHorizontal: n.sizeMS,
    paddingContentVertical: n.sizeSM,
    paddingContentHorizontalSM: n.size,
    paddingContentVerticalSM: n.sizeXS,
    marginXXS: n.sizeXXS,
    marginXS: n.sizeXS,
    marginSM: n.sizeSM,
    margin: n.size,
    marginMD: n.sizeMD,
    marginLG: n.sizeLG,
    marginXL: n.sizeXL,
    marginXXL: n.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: s - 1,
    screenSM: s,
    screenSMMin: s,
    screenSMMax: a - 1,
    screenMD: a,
    screenMDMin: a,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new W("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new W("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new W("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), o);
}
const En = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, Pn = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, Mn = rr(Be.defaultAlgorithm), On = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, Dt = (t, e, r) => {
  const o = r.getDerivativeToken(t), {
    override: n,
    ...i
  } = e;
  let s = {
    ...o,
    override: n
  };
  return s = Tn(s), i && Object.entries(i).forEach(([a, l]) => {
    const {
      theme: c,
      ...u
    } = l;
    let f = u;
    c && (f = Dt({
      ...s,
      ...u
    }, {
      override: u
    }, c)), s[a] = f;
  }), s;
};
function Rn() {
  const {
    token: t,
    hashed: e,
    theme: r = Mn,
    override: o,
    cssVar: n
  } = d.useContext(Be._internalContext), [i, s, a] = nr(r, [Be.defaultSeed, t], {
    salt: `${Ur}-${e || ""}`,
    override: o,
    getComputedToken: Dt,
    cssVar: n && {
      prefix: n.prefix,
      key: n.key,
      unitless: En,
      ignore: Pn,
      preserve: On
    }
  });
  return [r, a, e ? s : "", i, n];
}
const {
  genStyleHooks: jn
} = vn({
  usePrefix: () => {
    const {
      getPrefixCls: t,
      iconPrefixCls: e
    } = me();
    return {
      iconPrefixCls: e,
      rootPrefixCls: t()
    };
  },
  useToken: () => {
    const [t, e, r, o, n] = Rn();
    return {
      theme: t,
      realToken: e,
      hashId: r,
      token: o,
      cssVar: n
    };
  },
  useCSP: () => {
    const {
      csp: t
    } = me();
    return t ?? {};
  },
  layer: {
    name: "antdx",
    dependencies: ["antd"]
  }
});
var In = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, kn = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Ln = "".concat(In, " ").concat(kn).split(/[\s\n]+/), $n = "aria-", Dn = "data-";
function mt(t, e) {
  return t.indexOf(e) === 0;
}
function Bn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r;
  e === !1 ? r = {
    aria: !0,
    data: !0,
    attr: !0
  } : e === !0 ? r = {
    aria: !0
  } : r = D({}, e);
  var o = {};
  return Object.keys(t).forEach(function(n) {
    // Aria
    (r.aria && (n === "role" || mt(n, $n)) || // Data
    r.data && mt(n, Dn) || // Attr
    r.attr && Ln.includes(n)) && (o[n] = t[n]);
  }), o;
}
function ce(t) {
  return typeof t == "string";
}
const Hn = (t, e, r, o) => {
  const [n, i] = R.useState(""), [s, a] = R.useState(1), l = e && ce(t);
  return tn(() => {
    i(t), !l && ce(t) ? a(t.length) : ce(t) && ce(n) && t.indexOf(n) !== 0 && a(1);
  }, [t]), R.useEffect(() => {
    if (l && s < t.length) {
      const u = setTimeout(() => {
        a((f) => f + r);
      }, o);
      return () => {
        clearTimeout(u);
      };
    }
  }, [s, e, t]), [l ? t.slice(0, s) : t, l && s < t.length];
};
function zn(t) {
  return R.useMemo(() => {
    if (!t)
      return [!1, 0, 0, null];
    let e = {
      step: 1,
      interval: 50,
      // set default suffix is empty
      suffix: null
    };
    return typeof t == "object" && (e = {
      ...e,
      ...t
    }), [!0, e.step, e.interval, e.suffix];
  }, [t]);
}
const An = ({
  prefixCls: t
}) => /* @__PURE__ */ d.createElement("span", {
  className: `${t}-dot`
}, /* @__PURE__ */ d.createElement("i", {
  className: `${t}-dot-item`,
  key: "item-1"
}), /* @__PURE__ */ d.createElement("i", {
  className: `${t}-dot-item`,
  key: "item-2"
}), /* @__PURE__ */ d.createElement("i", {
  className: `${t}-dot-item`,
  key: "item-3"
})), Fn = (t) => {
  const {
    componentCls: e,
    paddingSM: r,
    padding: o
  } = t;
  return {
    [e]: {
      [`${e}-content`]: {
        // Shared: filled, outlined, shadow
        "&-filled,&-outlined,&-shadow": {
          padding: `${ie(r)} ${ie(o)}`,
          borderRadius: t.borderRadiusLG
        },
        // Filled:
        "&-filled": {
          backgroundColor: t.colorFillContent
        },
        // Outlined:
        "&-outlined": {
          border: `1px solid ${t.colorBorderSecondary}`
        },
        // Shadow:
        "&-shadow": {
          boxShadow: t.boxShadowTertiary
        }
      }
    }
  };
}, Xn = (t) => {
  const {
    componentCls: e,
    fontSize: r,
    lineHeight: o,
    paddingSM: n,
    padding: i,
    calc: s
  } = t, a = s(r).mul(o).div(2).add(n).equal(), l = `${e}-content`;
  return {
    [e]: {
      [l]: {
        // round:
        "&-round": {
          borderRadius: {
            _skip_check_: !0,
            value: a
          },
          paddingInline: s(i).mul(1.25).equal()
        }
      },
      // corner:
      [`&-start ${l}-corner`]: {
        borderStartStartRadius: t.borderRadiusXS
      },
      [`&-end ${l}-corner`]: {
        borderStartEndRadius: t.borderRadiusXS
      }
    }
  };
}, Nn = (t) => {
  const {
    componentCls: e,
    padding: r
  } = t;
  return {
    [`${e}-list`]: {
      display: "flex",
      flexDirection: "column",
      gap: r,
      overflowY: "auto"
    }
  };
}, Vn = new St("loadingMove", {
  "0%": {
    transform: "translateY(0)"
  },
  "10%": {
    transform: "translateY(4px)"
  },
  "20%": {
    transform: "translateY(0)"
  },
  "30%": {
    transform: "translateY(-4px)"
  },
  "40%": {
    transform: "translateY(0)"
  }
}), Wn = new St("cursorBlink", {
  "0%": {
    opacity: 1
  },
  "50%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), Un = (t) => {
  const {
    componentCls: e,
    fontSize: r,
    lineHeight: o,
    paddingSM: n,
    colorText: i,
    calc: s
  } = t;
  return {
    [e]: {
      display: "flex",
      columnGap: n,
      [`&${e}-end`]: {
        justifyContent: "end",
        flexDirection: "row-reverse",
        [`& ${e}-content-wrapper`]: {
          alignItems: "flex-end"
        }
      },
      [`&${e}-rtl`]: {
        direction: "rtl"
      },
      [`&${e}-typing ${e}-content:last-child::after`]: {
        content: '"|"',
        fontWeight: 900,
        userSelect: "none",
        opacity: 1,
        marginInlineStart: "0.1em",
        animationName: Wn,
        animationDuration: "0.8s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear"
      },
      // ============================ Avatar =============================
      [`& ${e}-avatar`]: {
        display: "inline-flex",
        justifyContent: "center",
        alignSelf: "flex-start"
      },
      // ======================== Header & Footer ========================
      [`& ${e}-header, & ${e}-footer`]: {
        fontSize: r,
        lineHeight: o,
        color: t.colorText
      },
      [`& ${e}-header`]: {
        marginBottom: t.paddingXXS
      },
      [`& ${e}-footer`]: {
        marginTop: n
      },
      // =========================== Content =============================
      [`& ${e}-content-wrapper`]: {
        flex: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minWidth: 0,
        maxWidth: "100%"
      },
      [`& ${e}-content`]: {
        position: "relative",
        boxSizing: "border-box",
        minWidth: 0,
        maxWidth: "100%",
        color: i,
        fontSize: t.fontSize,
        lineHeight: t.lineHeight,
        minHeight: s(n).mul(2).add(s(o).mul(r)).equal(),
        wordBreak: "break-word",
        [`& ${e}-dot`]: {
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          columnGap: t.marginXS,
          padding: `0 ${ie(t.paddingXXS)}`,
          "&-item": {
            backgroundColor: t.colorPrimary,
            borderRadius: "100%",
            width: 4,
            height: 4,
            animationName: Vn,
            animationDuration: "2s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            "&:nth-child(1)": {
              animationDelay: "0s"
            },
            "&:nth-child(2)": {
              animationDelay: "0.2s"
            },
            "&:nth-child(3)": {
              animationDelay: "0.4s"
            }
          }
        }
      }
    }
  };
}, Gn = () => ({}), Bt = jn("Bubble", (t) => {
  const e = Ve(t, {});
  return [Un(e), Nn(e), Fn(e), Xn(e)];
}, Gn), Ht = /* @__PURE__ */ d.createContext({}), Kn = (t, e) => {
  const {
    prefixCls: r,
    className: o,
    rootClassName: n,
    style: i,
    classNames: s = {},
    styles: a = {},
    avatar: l,
    placement: c = "start",
    loading: u = !1,
    loadingRender: f,
    typing: h,
    content: S = "",
    messageRender: C,
    variant: E = "filled",
    shape: m,
    onTypingComplete: x,
    header: w,
    footer: j,
    ...g
  } = t, {
    onUpdate: b
  } = d.useContext(Ht), p = d.useRef(null);
  d.useImperativeHandle(e, () => ({
    nativeElement: p.current
  }));
  const {
    direction: P,
    getPrefixCls: M
  } = me(), y = M("bubble", r), O = qr("bubble"), [z, k, A, v] = zn(h), [_, I] = Hn(S, z, k, A);
  d.useEffect(() => {
    b == null || b();
  }, [_]);
  const F = d.useRef(!1);
  d.useEffect(() => {
    !I && !u ? F.current || (F.current = !0, x == null || x()) : F.current = !1;
  }, [I, u]);
  const [U, G, Y] = Bt(y), ee = J(y, n, O.className, o, G, Y, `${y}-${c}`, {
    [`${y}-rtl`]: P === "rtl",
    [`${y}-typing`]: I && !u && !C && !v
  }), te = /* @__PURE__ */ d.isValidElement(l) ? l : /* @__PURE__ */ d.createElement(er, l), re = C ? C(_) : _;
  let X;
  u ? X = f ? f() : /* @__PURE__ */ d.createElement(An, {
    prefixCls: y
  }) : X = /* @__PURE__ */ d.createElement(d.Fragment, null, re, I && v);
  let K = /* @__PURE__ */ d.createElement("div", {
    style: {
      ...O.styles.content,
      ...a.content
    },
    className: J(`${y}-content`, `${y}-content-${E}`, m && `${y}-content-${m}`, O.classNames.content, s.content)
  }, X);
  return (w || j) && (K = /* @__PURE__ */ d.createElement("div", {
    className: `${y}-content-wrapper`
  }, w && /* @__PURE__ */ d.createElement("div", {
    className: J(`${y}-header`, O.classNames.header, s.header),
    style: {
      ...O.styles.header,
      ...a.header
    }
  }, w), K, j && /* @__PURE__ */ d.createElement("div", {
    className: J(`${y}-footer`, O.classNames.footer, s.footer),
    style: {
      ...O.styles.footer,
      ...a.footer
    }
  }, j))), U(/* @__PURE__ */ d.createElement("div", se({
    style: {
      ...O.style,
      ...i
    },
    className: ee
  }, g, {
    ref: p
  }), l && /* @__PURE__ */ d.createElement("div", {
    style: {
      ...O.styles.avatar,
      ...a.avatar
    },
    className: J(`${y}-avatar`, O.classNames.avatar, s.avatar)
  }, te), K));
}, We = /* @__PURE__ */ d.forwardRef(Kn);
function qn(t) {
  const [e, r] = d.useState(t.length), o = d.useMemo(() => t.slice(0, e), [t, e]), n = d.useMemo(() => {
    const s = o[o.length - 1];
    return s ? s.key : null;
  }, [o]);
  d.useEffect(() => {
    var s;
    if (!(o.length && o.every((a, l) => {
      var c;
      return a.key === ((c = t[l]) == null ? void 0 : c.key);
    }))) {
      if (o.length === 0)
        r(1);
      else
        for (let a = 0; a < o.length; a += 1)
          if (o[a].key !== ((s = t[a]) == null ? void 0 : s.key)) {
            r(a);
            break;
          }
    }
  }, [t]);
  const i = Pt((s) => {
    s === n && r(e + 1);
  });
  return [o, i];
}
function Yn(t, e) {
  const r = R.useCallback((o) => typeof e == "function" ? e(o) : e ? e[o.role] || {} : {}, [e]);
  return R.useMemo(() => (t || []).map((o, n) => {
    const i = o.key ?? `preset_${n}`;
    return {
      ...r(o),
      ...o,
      key: i
    };
  }), [t, r]);
}
const Qn = 1, Jn = (t, e) => {
  const {
    prefixCls: r,
    rootClassName: o,
    className: n,
    items: i,
    autoScroll: s = !0,
    roles: a,
    ...l
  } = t, c = Bn(l, {
    attr: !0,
    aria: !0
  }), u = R.useRef(null), f = R.useRef({}), {
    getPrefixCls: h
  } = me(), S = h("bubble", r), C = `${S}-list`, [E, m, x] = Bt(S), [w, j] = R.useState(!1);
  R.useEffect(() => (j(!0), () => {
    j(!1);
  }), []);
  const g = Yn(i, a), [b, p] = qn(g), [P, M] = R.useState(!0), [y, O] = R.useState(0), z = (v) => {
    const _ = v.target;
    M(_.scrollHeight - Math.abs(_.scrollTop) - _.clientHeight <= Qn);
  };
  R.useEffect(() => {
    s && u.current && P && u.current.scrollTo({
      top: u.current.scrollHeight
    });
  }, [y]), R.useEffect(() => {
    var v;
    if (s) {
      const _ = (v = b[b.length - 2]) == null ? void 0 : v.key, I = f.current[_];
      if (I) {
        const {
          nativeElement: F
        } = I, {
          top: U,
          bottom: G
        } = F.getBoundingClientRect(), {
          top: Y,
          bottom: ee
        } = u.current.getBoundingClientRect();
        U < ee && G > Y && (O((re) => re + 1), M(!0));
      }
    }
  }, [b.length]), R.useImperativeHandle(e, () => ({
    nativeElement: u.current,
    scrollTo: ({
      key: v,
      offset: _,
      behavior: I = "smooth",
      block: F
    }) => {
      if (typeof _ == "number")
        u.current.scrollTo({
          top: _,
          behavior: I
        });
      else if (v !== void 0) {
        const U = f.current[v];
        if (U) {
          const G = b.findIndex((Y) => Y.key === v);
          M(G === b.length - 1), U.nativeElement.scrollIntoView({
            behavior: I,
            block: F
          });
        }
      }
    }
  }));
  const k = Pt(() => {
    s && O((v) => v + 1);
  }), A = R.useMemo(() => ({
    onUpdate: k
  }), []);
  return E(/* @__PURE__ */ R.createElement(Ht.Provider, {
    value: A
  }, /* @__PURE__ */ R.createElement("div", se({}, c, {
    className: J(C, o, n, m, x, {
      [`${C}-reach-end`]: P
    }),
    ref: u,
    onScroll: z
  }), b.map(({
    key: v,
    ..._
  }) => /* @__PURE__ */ R.createElement(We, se({}, _, {
    key: v,
    ref: (I) => {
      I ? f.current[v] = I : delete f.current[v];
    },
    typing: w ? _.typing : !1,
    onTypingComplete: () => {
      var I;
      (I = _.onTypingComplete) == null || I.call(_), p(v);
    }
  }))))));
}, Zn = /* @__PURE__ */ R.forwardRef(Jn);
We.List = Zn;
function eo(t) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(t.trim());
}
function to(t, e = !1) {
  try {
    if (Yt(t))
      return t;
    if (e && !eo(t))
      return;
    if (typeof t == "string") {
      let r = t.trim();
      return r.startsWith(";") && (r = r.slice(1)), r.endsWith(";") && (r = r.slice(0, -1)), new Function(`return (...args) => (${r})(...args)`)();
    }
    return;
  } catch {
    return;
  }
}
function pt(t, e) {
  return vt(() => to(t, e), [t, e]);
}
const ro = ({
  children: t,
  ...e
}) => /* @__PURE__ */ $.jsx($.Fragment, {
  children: t(e)
});
function no(t) {
  return d.createElement(ro, {
    children: t
  });
}
function yt(t, e) {
  return t ? e != null && e.forceClone || e != null && e.params ? no((r) => /* @__PURE__ */ $.jsx(Jt, {
    forceClone: e == null ? void 0 : e.forceClone,
    params: e == null ? void 0 : e.params,
    children: /* @__PURE__ */ $.jsx(q, {
      slot: t,
      clone: e == null ? void 0 : e.clone,
      ...r
    })
  })) : /* @__PURE__ */ $.jsx(q, {
    slot: t,
    clone: e == null ? void 0 : e.clone
  }) : null;
}
function bt({
  key: t,
  slots: e,
  targets: r
}, o) {
  return e[t] ? (...n) => r ? r.map((i, s) => /* @__PURE__ */ $.jsx(d.Fragment, {
    children: yt(i, {
      clone: !0,
      params: n,
      forceClone: !0
    })
  }, s)) : /* @__PURE__ */ $.jsx($.Fragment, {
    children: yt(e[t], {
      clone: !0,
      params: n,
      forceClone: !0
    })
  }) : void 0;
}
const so = Fr(({
  loadingRender: t,
  messageRender: e,
  slots: r,
  setSlotParams: o,
  children: n,
  ...i
}) => {
  const s = pt(t), a = pt(e), l = vt(() => {
    var c, u;
    return r.avatar ? /* @__PURE__ */ $.jsx(q, {
      slot: r.avatar
    }) : r["avatar.icon"] || r["avatar.src"] ? {
      ...i.avatar || {},
      icon: r["avatar.icon"] ? /* @__PURE__ */ $.jsx(q, {
        slot: r["avatar.icon"]
      }) : (c = i.avatar) == null ? void 0 : c.icon,
      src: r["avatar.src"] ? /* @__PURE__ */ $.jsx(q, {
        slot: r["avatar.src"]
      }) : (u = i.avatar) == null ? void 0 : u.src
    } : i.avatar;
  }, [i.avatar, r]);
  return /* @__PURE__ */ $.jsxs($.Fragment, {
    children: [/* @__PURE__ */ $.jsx("div", {
      style: {
        display: "none"
      },
      children: n
    }), /* @__PURE__ */ $.jsx(We, {
      ...i,
      avatar: l,
      typing: r["typing.suffix"] ? {
        ...ge(i.typing) ? i.typing : {},
        suffix: /* @__PURE__ */ $.jsx(q, {
          slot: r["typing.suffix"]
        })
      } : i.typing,
      content: r.content ? /* @__PURE__ */ $.jsx(q, {
        slot: r.content
      }) : i.content,
      footer: r.footer ? /* @__PURE__ */ $.jsx(q, {
        slot: r.footer
      }) : i.footer,
      loadingRender: r.loadingRender ? bt({
        slots: r,
        key: "loadingRender"
      }) : s,
      messageRender: r.messageRender ? bt({
        slots: r,
        key: "messageRender"
      }) : a
    })]
  });
});
export {
  so as Bubble,
  so as default
};
