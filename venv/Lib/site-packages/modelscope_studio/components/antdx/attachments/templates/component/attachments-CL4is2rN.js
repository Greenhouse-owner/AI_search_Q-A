import { i as fn, a as wt, r as dn, w as ze, g as pn, d as mn, b as Te, c as ne, e as hn } from "./Index-CPOF6ONu.js";
const M = window.ms_globals.React, l = window.ms_globals.React, Ge = window.ms_globals.React.useMemo, At = window.ms_globals.React.useState, be = window.ms_globals.React.useEffect, ln = window.ms_globals.React.isValidElement, he = window.ms_globals.React.useRef, cn = window.ms_globals.React.useLayoutEffect, un = window.ms_globals.React.forwardRef, Ut = window.ms_globals.ReactDOM, Be = window.ms_globals.ReactDOM.createPortal, gn = window.ms_globals.internalContext.useContextPropsContext, vn = window.ms_globals.internalContext.ContextPropsProvider, bn = window.ms_globals.antd.ConfigProvider, Lr = window.ms_globals.antd.Upload, Xe = window.ms_globals.antd.theme, yn = window.ms_globals.antd.Progress, ut = window.ms_globals.antd.Button, Sn = window.ms_globals.antd.Flex, ft = window.ms_globals.antd.Typography, xn = window.ms_globals.antdIcons.FileTextFilled, wn = window.ms_globals.antdIcons.CloseCircleFilled, En = window.ms_globals.antdIcons.FileExcelFilled, Cn = window.ms_globals.antdIcons.FileImageFilled, _n = window.ms_globals.antdIcons.FileMarkdownFilled, Ln = window.ms_globals.antdIcons.FilePdfFilled, Tn = window.ms_globals.antdIcons.FilePptFilled, In = window.ms_globals.antdIcons.FileWordFilled, Pn = window.ms_globals.antdIcons.FileZipFilled, Rn = window.ms_globals.antdIcons.PlusOutlined, Mn = window.ms_globals.antdIcons.LeftOutlined, On = window.ms_globals.antdIcons.RightOutlined, Bt = window.ms_globals.antdCssinjs.unit, dt = window.ms_globals.antdCssinjs.token2CSSVar, Xt = window.ms_globals.antdCssinjs.useStyleRegister, Fn = window.ms_globals.antdCssinjs.useCSSVarRegister, An = window.ms_globals.antdCssinjs.createTheme, $n = window.ms_globals.antdCssinjs.useCacheToken;
var kn = /\s/;
function jn(e) {
  for (var t = e.length; t-- && kn.test(e.charAt(t)); )
    ;
  return t;
}
var Dn = /^\s+/;
function Nn(e) {
  return e && e.slice(0, jn(e) + 1).replace(Dn, "");
}
var Vt = NaN, zn = /^[-+]0x[0-9a-f]+$/i, Hn = /^0b[01]+$/i, Un = /^0o[0-7]+$/i, Bn = parseInt;
function Wt(e) {
  if (typeof e == "number")
    return e;
  if (fn(e))
    return Vt;
  if (wt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Nn(e);
  var r = Hn.test(e);
  return r || Un.test(e) ? Bn(e.slice(2), r ? 2 : 8) : zn.test(e) ? Vt : +e;
}
function Xn() {
}
var pt = function() {
  return dn.Date.now();
}, Vn = "Expected a function", Wn = Math.max, Gn = Math.min;
function Kn(e, t, r) {
  var n, o, i, s, a, c, u = 0, p = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Vn);
  t = Wt(t) || 0, wt(r) && (p = !!r.leading, f = "maxWait" in r, i = f ? Wn(Wt(r.maxWait) || 0, t) : i, d = "trailing" in r ? !!r.trailing : d);
  function h(S) {
    var g = n, _ = o;
    return n = o = void 0, u = S, s = e.apply(_, g), s;
  }
  function v(S) {
    return u = S, a = setTimeout(C, t), p ? h(S) : s;
  }
  function b(S) {
    var g = S - c, _ = S - u, R = t - g;
    return f ? Gn(R, i - _) : R;
  }
  function m(S) {
    var g = S - c, _ = S - u;
    return c === void 0 || g >= t || g < 0 || f && _ >= i;
  }
  function C() {
    var S = pt();
    if (m(S))
      return w(S);
    a = setTimeout(C, b(S));
  }
  function w(S) {
    return a = void 0, d && n ? h(S) : (n = o = void 0, s);
  }
  function E() {
    a !== void 0 && clearTimeout(a), u = 0, n = c = o = a = void 0;
  }
  function x() {
    return a === void 0 ? s : w(pt());
  }
  function y() {
    var S = pt(), g = m(S);
    if (n = arguments, o = this, c = S, g) {
      if (a === void 0)
        return v(c);
      if (f)
        return clearTimeout(a), a = setTimeout(C, t), h(c);
    }
    return a === void 0 && (a = setTimeout(C, t)), s;
  }
  return y.cancel = E, y.flush = x, y;
}
var Tr = {
  exports: {}
}, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn = l, Zn = Symbol.for("react.element"), Qn = Symbol.for("react.fragment"), Yn = Object.prototype.hasOwnProperty, Jn = qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, eo = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Ir(e, t, r) {
  var n, o = {}, i = null, s = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (n in t) Yn.call(t, n) && !eo.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: Zn,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Jn.current
  };
}
Ke.Fragment = Qn;
Ke.jsx = Ir;
Ke.jsxs = Ir;
Tr.exports = Ke;
var oe = Tr.exports;
const {
  SvelteComponent: to,
  assign: Gt,
  binding_callbacks: Kt,
  check_outros: ro,
  children: Pr,
  claim_element: Rr,
  claim_space: no,
  component_subscribe: qt,
  compute_slots: oo,
  create_slot: io,
  detach: Se,
  element: Mr,
  empty: Zt,
  exclude_internal_props: Qt,
  get_all_dirty_from_scope: so,
  get_slot_changes: ao,
  group_outros: lo,
  init: co,
  insert_hydration: He,
  safe_not_equal: uo,
  set_custom_element_data: Or,
  space: fo,
  transition_in: Ue,
  transition_out: Et,
  update_slot_base: po
} = window.__gradio__svelte__internal, {
  beforeUpdate: mo,
  getContext: ho,
  onDestroy: go,
  setContext: vo
} = window.__gradio__svelte__internal;
function Yt(e) {
  let t, r;
  const n = (
    /*#slots*/
    e[7].default
  ), o = io(
    n,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = Mr("svelte-slot"), o && o.c(), this.h();
    },
    l(i) {
      t = Rr(i, "SVELTE-SLOT", {
        class: !0
      });
      var s = Pr(t);
      o && o.l(s), s.forEach(Se), this.h();
    },
    h() {
      Or(t, "class", "svelte-1rt0kpf");
    },
    m(i, s) {
      He(i, t, s), o && o.m(t, null), e[9](t), r = !0;
    },
    p(i, s) {
      o && o.p && (!r || s & /*$$scope*/
      64) && po(
        o,
        n,
        i,
        /*$$scope*/
        i[6],
        r ? ao(
          n,
          /*$$scope*/
          i[6],
          s,
          null
        ) : so(
          /*$$scope*/
          i[6]
        ),
        null
      );
    },
    i(i) {
      r || (Ue(o, i), r = !0);
    },
    o(i) {
      Et(o, i), r = !1;
    },
    d(i) {
      i && Se(t), o && o.d(i), e[9](null);
    }
  };
}
function bo(e) {
  let t, r, n, o, i = (
    /*$$slots*/
    e[4].default && Yt(e)
  );
  return {
    c() {
      t = Mr("react-portal-target"), r = fo(), i && i.c(), n = Zt(), this.h();
    },
    l(s) {
      t = Rr(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), Pr(t).forEach(Se), r = no(s), i && i.l(s), n = Zt(), this.h();
    },
    h() {
      Or(t, "class", "svelte-1rt0kpf");
    },
    m(s, a) {
      He(s, t, a), e[8](t), He(s, r, a), i && i.m(s, a), He(s, n, a), o = !0;
    },
    p(s, [a]) {
      /*$$slots*/
      s[4].default ? i ? (i.p(s, a), a & /*$$slots*/
      16 && Ue(i, 1)) : (i = Yt(s), i.c(), Ue(i, 1), i.m(n.parentNode, n)) : i && (lo(), Et(i, 1, 1, () => {
        i = null;
      }), ro());
    },
    i(s) {
      o || (Ue(i), o = !0);
    },
    o(s) {
      Et(i), o = !1;
    },
    d(s) {
      s && (Se(t), Se(r), Se(n)), e[8](null), i && i.d(s);
    }
  };
}
function Jt(e) {
  const {
    svelteInit: t,
    ...r
  } = e;
  return r;
}
function yo(e, t, r) {
  let n, o, {
    $$slots: i = {},
    $$scope: s
  } = t;
  const a = oo(i);
  let {
    svelteInit: c
  } = t;
  const u = ze(Jt(t)), p = ze();
  qt(e, p, (x) => r(0, n = x));
  const f = ze();
  qt(e, f, (x) => r(1, o = x));
  const d = [], h = ho("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: b,
    subSlotIndex: m
  } = pn() || {}, C = c({
    parent: h,
    props: u,
    target: p,
    slot: f,
    slotKey: v,
    slotIndex: b,
    subSlotIndex: m,
    onDestroy(x) {
      d.push(x);
    }
  });
  vo("$$ms-gr-react-wrapper", C), mo(() => {
    u.set(Jt(t));
  }), go(() => {
    d.forEach((x) => x());
  });
  function w(x) {
    Kt[x ? "unshift" : "push"](() => {
      n = x, p.set(n);
    });
  }
  function E(x) {
    Kt[x ? "unshift" : "push"](() => {
      o = x, f.set(o);
    });
  }
  return e.$$set = (x) => {
    r(17, t = Gt(Gt({}, t), Qt(x))), "svelteInit" in x && r(5, c = x.svelteInit), "$$scope" in x && r(6, s = x.$$scope);
  }, t = Qt(t), [n, o, p, f, a, c, s, i, w, E];
}
class So extends to {
  constructor(t) {
    super(), co(this, t, yo, bo, uo, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: ms
} = window.__gradio__svelte__internal, er = window.ms_globals.rerender, mt = window.ms_globals.tree;
function xo(e, t = {}) {
  function r(n) {
    const o = ze(), i = new So({
      ...n,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const a = {
            key: window.ms_globals.autokey,
            svelteInstance: o,
            reactComponent: e,
            props: s.props,
            slot: s.slot,
            target: s.target,
            slotIndex: s.slotIndex,
            subSlotIndex: s.subSlotIndex,
            ignore: t.ignore,
            slotKey: s.slotKey,
            nodes: []
          }, c = s.parent ?? mt;
          return c.nodes = [...c.nodes, a], er({
            createPortal: Be,
            node: mt
          }), s.onDestroy(() => {
            c.nodes = c.nodes.filter((u) => u.svelteInstance !== o), er({
              createPortal: Be,
              node: mt
            });
          }), a;
        },
        ...n.props
      }
    });
    return o.set(i), i;
  }
  return new Promise((n) => {
    window.ms_globals.initializePromise.then(() => {
      n(r);
    });
  });
}
function wo(e) {
  const [t, r] = At(() => Te(e));
  return be(() => {
    let n = !0;
    return e.subscribe((i) => {
      n && (n = !1, i === t) || r(i);
    });
  }, [e]), t;
}
function Eo(e) {
  const t = Ge(() => mn(e, (r) => r), [e]);
  return wo(t);
}
const Co = "1.0.5", _o = /* @__PURE__ */ l.createContext({}), Lo = {
  classNames: {},
  styles: {},
  className: "",
  style: {}
}, To = (e) => {
  const t = l.useContext(_o);
  return l.useMemo(() => ({
    ...Lo,
    ...t[e]
  }), [t[e]]);
};
function Ie() {
  return Ie = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ie.apply(null, arguments);
}
function Ve() {
  const {
    getPrefixCls: e,
    direction: t,
    csp: r,
    iconPrefixCls: n,
    theme: o
  } = l.useContext(bn.ConfigContext);
  return {
    theme: o,
    getPrefixCls: e,
    direction: t,
    csp: r,
    iconPrefixCls: n
  };
}
function Ee(e) {
  var t = M.useRef();
  t.current = e;
  var r = M.useCallback(function() {
    for (var n, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(i));
  }, []);
  return r;
}
function Io(e) {
  if (Array.isArray(e)) return e;
}
function Po(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, i, s, a = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0) ;
    } catch (p) {
      u = !0, o = p;
    } finally {
      try {
        if (!c && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw o;
      }
    }
    return a;
  }
}
function tr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ro(e, t) {
  if (e) {
    if (typeof e == "string") return tr(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? tr(e, t) : void 0;
  }
}
function Mo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q(e, t) {
  return Io(e) || Po(e, t) || Ro(e, t) || Mo();
}
function qe() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var rr = qe() ? M.useLayoutEffect : M.useEffect, Oo = function(t, r) {
  var n = M.useRef(!0);
  rr(function() {
    return t(n.current);
  }, r), rr(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, nr = function(t, r) {
  Oo(function(n) {
    if (!n)
      return t();
  }, r);
};
function Pe(e) {
  var t = M.useRef(!1), r = M.useState(e), n = q(r, 2), o = n[0], i = n[1];
  M.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function s(a, c) {
    c && t.current || i(a);
  }
  return [o, s];
}
function ht(e) {
  return e !== void 0;
}
function Fo(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, i = r.onChange, s = r.postState, a = Pe(function() {
    return ht(o) ? o : ht(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = q(a, 2), u = c[0], p = c[1], f = o !== void 0 ? o : u, d = s ? s(f) : f, h = Ee(i), v = Pe([f]), b = q(v, 2), m = b[0], C = b[1];
  nr(function() {
    var E = m[0];
    u !== E && h(u, E);
  }, [m]), nr(function() {
    ht(o) || p(o);
  }, [o]);
  var w = Ee(function(E, x) {
    p(E, x), C([f], x);
  });
  return [d, w];
}
function G(e) {
  "@babel/helpers - typeof";
  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, G(e);
}
var Fr = {
  exports: {}
}, O = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t = Symbol.for("react.element"), kt = Symbol.for("react.portal"), Ze = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), Ye = Symbol.for("react.profiler"), Je = Symbol.for("react.provider"), et = Symbol.for("react.context"), Ao = Symbol.for("react.server_context"), tt = Symbol.for("react.forward_ref"), rt = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), $o = Symbol.for("react.offscreen"), Ar;
Ar = Symbol.for("react.module.reference");
function ie(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case $t:
        switch (e = e.type, e) {
          case Ze:
          case Ye:
          case Qe:
          case rt:
          case nt:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ao:
              case et:
              case tt:
              case it:
              case ot:
              case Je:
                return e;
              default:
                return t;
            }
        }
      case kt:
        return t;
    }
  }
}
O.ContextConsumer = et;
O.ContextProvider = Je;
O.Element = $t;
O.ForwardRef = tt;
O.Fragment = Ze;
O.Lazy = it;
O.Memo = ot;
O.Portal = kt;
O.Profiler = Ye;
O.StrictMode = Qe;
O.Suspense = rt;
O.SuspenseList = nt;
O.isAsyncMode = function() {
  return !1;
};
O.isConcurrentMode = function() {
  return !1;
};
O.isContextConsumer = function(e) {
  return ie(e) === et;
};
O.isContextProvider = function(e) {
  return ie(e) === Je;
};
O.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $t;
};
O.isForwardRef = function(e) {
  return ie(e) === tt;
};
O.isFragment = function(e) {
  return ie(e) === Ze;
};
O.isLazy = function(e) {
  return ie(e) === it;
};
O.isMemo = function(e) {
  return ie(e) === ot;
};
O.isPortal = function(e) {
  return ie(e) === kt;
};
O.isProfiler = function(e) {
  return ie(e) === Ye;
};
O.isStrictMode = function(e) {
  return ie(e) === Qe;
};
O.isSuspense = function(e) {
  return ie(e) === rt;
};
O.isSuspenseList = function(e) {
  return ie(e) === nt;
};
O.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ze || e === Ye || e === Qe || e === rt || e === nt || e === $o || typeof e == "object" && e !== null && (e.$$typeof === it || e.$$typeof === ot || e.$$typeof === Je || e.$$typeof === et || e.$$typeof === tt || e.$$typeof === Ar || e.getModuleId !== void 0);
};
O.typeOf = ie;
Fr.exports = O;
var gt = Fr.exports, ko = Symbol.for("react.element"), jo = Symbol.for("react.transitional.element"), Do = Symbol.for("react.fragment");
function No(e) {
  return (
    // Base object type
    e && G(e) === "object" && // React Element type
    (e.$$typeof === ko || e.$$typeof === jo) && // React Fragment type
    e.type === Do
  );
}
var zo = function(t, r) {
  typeof t == "function" ? t(r) : G(t) === "object" && t && "current" in t && (t.current = r);
}, Ho = function(t) {
  var r, n;
  if (!t)
    return !1;
  if ($r(t) && t.props.propertyIsEnumerable("ref"))
    return !0;
  var o = gt.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== gt.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== gt.ForwardRef);
};
function $r(e) {
  return /* @__PURE__ */ ln(e) && !No(e);
}
var Uo = function(t) {
  if (t && $r(t)) {
    var r = t;
    return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
  }
  return null;
};
function Bo(e, t) {
  if (G(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (G(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kr(e) {
  var t = Bo(e, "string");
  return G(t) == "symbol" ? t : t + "";
}
function D(e, t, r) {
  return (t = kr(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function or(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? or(Object(r), !0).forEach(function(n) {
      D(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : or(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
const Me = /* @__PURE__ */ l.createContext(null);
function ir(e) {
  const {
    getDropContainer: t,
    className: r,
    prefixCls: n,
    children: o
  } = e, {
    disabled: i
  } = l.useContext(Me), [s, a] = l.useState(), [c, u] = l.useState(null);
  if (l.useEffect(() => {
    const d = t == null ? void 0 : t();
    s !== d && a(d);
  }, [t]), l.useEffect(() => {
    if (s) {
      const d = () => {
        u(!0);
      }, h = (m) => {
        m.preventDefault();
      }, v = (m) => {
        m.relatedTarget || u(!1);
      }, b = (m) => {
        u(!1), m.preventDefault();
      };
      return document.addEventListener("dragenter", d), document.addEventListener("dragover", h), document.addEventListener("dragleave", v), document.addEventListener("drop", b), () => {
        document.removeEventListener("dragenter", d), document.removeEventListener("dragover", h), document.removeEventListener("dragleave", v), document.removeEventListener("drop", b);
      };
    }
  }, [!!s]), !(t && s && !i))
    return null;
  const f = `${n}-drop-area`;
  return /* @__PURE__ */ Be(/* @__PURE__ */ l.createElement("div", {
    className: ne(f, r, {
      [`${f}-on-body`]: s.tagName === "BODY"
    }),
    style: {
      display: c ? "block" : "none"
    }
  }, o), s);
}
function sr(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Xo(e) {
  return e && G(e) === "object" && sr(e.nativeElement) ? e.nativeElement : sr(e) ? e : null;
}
function Vo(e) {
  var t = Xo(e);
  if (t)
    return t;
  if (e instanceof l.Component) {
    var r;
    return (r = Ut.findDOMNode) === null || r === void 0 ? void 0 : r.call(Ut, e);
  }
  return null;
}
function Wo(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function ar(e, t) {
  if (e == null) return {};
  var r, n, o = Wo(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
var Go = /* @__PURE__ */ M.createContext({});
function Ce(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function lr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, kr(n.key), n);
  }
}
function _e(e, t, r) {
  return t && lr(e.prototype, t), r && lr(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Ct(e, t) {
  return Ct = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Ct(e, t);
}
function st(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Ct(e, t);
}
function We(e) {
  return We = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, We(e);
}
function jr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jr = function() {
    return !!e;
  })();
}
function ye(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ko(e, t) {
  if (t && (G(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ye(e);
}
function at(e) {
  var t = jr();
  return function() {
    var r, n = We(e);
    if (t) {
      var o = We(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return Ko(this, r);
  };
}
var qo = /* @__PURE__ */ function(e) {
  st(r, e);
  var t = at(r);
  function r() {
    return Ce(this, r), t.apply(this, arguments);
  }
  return _e(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(M.Component);
function Zo(e) {
  var t = M.useReducer(function(a) {
    return a + 1;
  }, 0), r = q(t, 2), n = r[1], o = M.useRef(e), i = Ee(function() {
    return o.current;
  }), s = Ee(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, n();
  });
  return [i, s];
}
var ge = "none", Ae = "appear", $e = "enter", ke = "leave", cr = "none", ce = "prepare", xe = "start", we = "active", jt = "end", Dr = "prepared";
function ur(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function Qo(e, t) {
  var r = {
    animationend: ur("Animation", "AnimationEnd"),
    transitionend: ur("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var Yo = Qo(qe(), typeof window < "u" ? window : {}), Nr = {};
if (qe()) {
  var Jo = document.createElement("div");
  Nr = Jo.style;
}
var je = {};
function zr(e) {
  if (je[e])
    return je[e];
  var t = Yo[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Nr)
        return je[e] = t[i], je[e];
    }
  return "";
}
var Hr = zr("animationend"), Ur = zr("transitionend"), Br = !!(Hr && Ur), fr = Hr || "animationend", dr = Ur || "transitionend";
function pr(e, t) {
  if (!e) return null;
  if (G(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const ei = function(e) {
  var t = he();
  function r(o) {
    o && (o.removeEventListener(dr, e), o.removeEventListener(fr, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(dr, e), o.addEventListener(fr, e), t.current = o);
  }
  return M.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var Xr = qe() ? cn : be, Vr = function(t) {
  return +setTimeout(t, 16);
}, Wr = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Vr = function(t) {
  return window.requestAnimationFrame(t);
}, Wr = function(t) {
  return window.cancelAnimationFrame(t);
});
var mr = 0, Dt = /* @__PURE__ */ new Map();
function Gr(e) {
  Dt.delete(e);
}
var _t = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  mr += 1;
  var n = mr;
  function o(i) {
    if (i === 0)
      Gr(n), t();
    else {
      var s = Vr(function() {
        o(i - 1);
      });
      Dt.set(n, s);
    }
  }
  return o(r), n;
};
_t.cancel = function(e) {
  var t = Dt.get(e);
  return Gr(e), Wr(t);
};
const ti = function() {
  var e = M.useRef(null);
  function t() {
    _t.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = _t(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = i;
  }
  return M.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var ri = [ce, xe, we, jt], ni = [ce, Dr], Kr = !1, oi = !0;
function qr(e) {
  return e === we || e === jt;
}
const ii = function(e, t, r) {
  var n = Pe(cr), o = q(n, 2), i = o[0], s = o[1], a = ti(), c = q(a, 2), u = c[0], p = c[1];
  function f() {
    s(ce, !0);
  }
  var d = t ? ni : ri;
  return Xr(function() {
    if (i !== cr && i !== jt) {
      var h = d.indexOf(i), v = d[h + 1], b = r(i);
      b === Kr ? s(v, !0) : v && u(function(m) {
        function C() {
          m.isCanceled() || s(v, !0);
        }
        b === !0 ? C() : Promise.resolve(b).then(C);
      });
    }
  }, [e, i]), M.useEffect(function() {
    return function() {
      p();
    };
  }, []), [f, i];
};
function si(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, s = n.motionAppear, a = s === void 0 ? !0 : s, c = n.motionLeave, u = c === void 0 ? !0 : c, p = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, h = n.onEnterPrepare, v = n.onLeavePrepare, b = n.onAppearStart, m = n.onEnterStart, C = n.onLeaveStart, w = n.onAppearActive, E = n.onEnterActive, x = n.onLeaveActive, y = n.onAppearEnd, S = n.onEnterEnd, g = n.onLeaveEnd, _ = n.onVisibleChanged, R = Pe(), k = q(R, 2), $ = k[0], T = k[1], P = Zo(ge), F = q(P, 2), I = F[0], j = F[1], Y = Pe(null), Z = q(Y, 2), ue = Z[0], U = Z[1], A = I(), z = he(!1), J = he(null);
  function H() {
    return r();
  }
  var fe = he(!1);
  function N() {
    j(ge), U(null, !0);
  }
  var B = Ee(function(Q) {
    var K = I();
    if (K !== ge) {
      var de = H();
      if (!(Q && !Q.deadline && Q.target !== de)) {
        var Oe = fe.current, Fe;
        K === Ae && Oe ? Fe = y == null ? void 0 : y(de, Q) : K === $e && Oe ? Fe = S == null ? void 0 : S(de, Q) : K === ke && Oe && (Fe = g == null ? void 0 : g(de, Q)), Oe && Fe !== !1 && N();
      }
    }
  }), ee = ei(B), V = q(ee, 1), se = V[0], ae = function(K) {
    switch (K) {
      case Ae:
        return D(D(D({}, ce, d), xe, b), we, w);
      case $e:
        return D(D(D({}, ce, h), xe, m), we, E);
      case ke:
        return D(D(D({}, ce, v), xe, C), we, x);
      default:
        return {};
    }
  }, X = M.useMemo(function() {
    return ae(A);
  }, [A]), le = ii(A, !e, function(Q) {
    if (Q === ce) {
      var K = X[ce];
      return K ? K(H()) : Kr;
    }
    if (ve in X) {
      var de;
      U(((de = X[ve]) === null || de === void 0 ? void 0 : de.call(X, H(), null)) || null);
    }
    return ve === we && A !== ge && (se(H()), p > 0 && (clearTimeout(J.current), J.current = setTimeout(function() {
      B({
        deadline: !0
      });
    }, p))), ve === Dr && N(), oi;
  }), zt = q(le, 2), sn = zt[0], ve = zt[1], an = qr(ve);
  fe.current = an;
  var Ht = he(null);
  Xr(function() {
    if (!(z.current && Ht.current === t)) {
      T(t);
      var Q = z.current;
      z.current = !0;
      var K;
      !Q && t && a && (K = Ae), Q && t && i && (K = $e), (Q && !t && u || !Q && f && !t && u) && (K = ke);
      var de = ae(K);
      K && (e || de[ce]) ? (j(K), sn()) : j(ge), Ht.current = t;
    }
  }, [t]), be(function() {
    // Cancel appear
    (A === Ae && !a || // Cancel enter
    A === $e && !i || // Cancel leave
    A === ke && !u) && j(ge);
  }, [a, i, u]), be(function() {
    return function() {
      z.current = !1, clearTimeout(J.current);
    };
  }, []);
  var lt = M.useRef(!1);
  be(function() {
    $ && (lt.current = !0), $ !== void 0 && A === ge && ((lt.current || $) && (_ == null || _($)), lt.current = !0);
  }, [$, A]);
  var ct = ue;
  return X[ce] && ve === xe && (ct = L({
    transition: "none"
  }, ct)), [A, ve, ct, $ ?? t];
}
function ai(e) {
  var t = e;
  G(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ M.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, u = c === void 0 ? !0 : c, p = o.forceRender, f = o.children, d = o.motionName, h = o.leavedClassName, v = o.eventProps, b = M.useContext(Go), m = b.motion, C = r(o, m), w = he(), E = he();
    function x() {
      try {
        return w.current instanceof HTMLElement ? w.current : Vo(E.current);
      } catch {
        return null;
      }
    }
    var y = si(C, a, x, o), S = q(y, 4), g = S[0], _ = S[1], R = S[2], k = S[3], $ = M.useRef(k);
    k && ($.current = !0);
    var T = M.useCallback(function(Z) {
      w.current = Z, zo(i, Z);
    }, [i]), P, F = L(L({}, v), {}, {
      visible: a
    });
    if (!f)
      P = null;
    else if (g === ge)
      k ? P = f(L({}, F), T) : !u && $.current && h ? P = f(L(L({}, F), {}, {
        className: h
      }), T) : p || !u && !h ? P = f(L(L({}, F), {}, {
        style: {
          display: "none"
        }
      }), T) : P = null;
    else {
      var I;
      _ === ce ? I = "prepare" : qr(_) ? I = "active" : _ === xe && (I = "start");
      var j = pr(d, "".concat(g, "-").concat(I));
      P = f(L(L({}, F), {}, {
        className: ne(pr(d, g), D(D({}, j, j && I), d, typeof d == "string")),
        style: R
      }), T);
    }
    if (/* @__PURE__ */ M.isValidElement(P) && Ho(P)) {
      var Y = Uo(P);
      Y || (P = /* @__PURE__ */ M.cloneElement(P, {
        ref: T
      }));
    }
    return /* @__PURE__ */ M.createElement(qo, {
      ref: E
    }, P);
  });
  return n.displayName = "CSSMotion", n;
}
const li = ai(Br);
var Lt = "add", Tt = "keep", It = "remove", vt = "removed";
function ci(e) {
  var t;
  return e && G(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, L(L({}, t), {}, {
    key: String(t.key)
  });
}
function Pt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(ci);
}
function ui() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = Pt(e), s = Pt(t);
  i.forEach(function(u) {
    for (var p = !1, f = n; f < o; f += 1) {
      var d = s[f];
      if (d.key === u.key) {
        n < f && (r = r.concat(s.slice(n, f).map(function(h) {
          return L(L({}, h), {}, {
            status: Lt
          });
        })), n = f), r.push(L(L({}, d), {}, {
          status: Tt
        })), n += 1, p = !0;
        break;
      }
    }
    p || r.push(L(L({}, u), {}, {
      status: It
    }));
  }), n < o && (r = r.concat(s.slice(n).map(function(u) {
    return L(L({}, u), {}, {
      status: Lt
    });
  })));
  var a = {};
  r.forEach(function(u) {
    var p = u.key;
    a[p] = (a[p] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(u) {
    return a[u] > 1;
  });
  return c.forEach(function(u) {
    r = r.filter(function(p) {
      var f = p.key, d = p.status;
      return f !== u || d !== It;
    }), r.forEach(function(p) {
      p.key === u && (p.status = Tt);
    });
  }), r;
}
var fi = ["component", "children", "onVisibleChanged", "onAllRemoved"], di = ["status"], pi = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function mi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : li, r = /* @__PURE__ */ function(n) {
    st(i, n);
    var o = at(i);
    function i() {
      var s;
      Ce(this, i);
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++)
        c[u] = arguments[u];
      return s = o.call.apply(o, [this].concat(c)), D(ye(s), "state", {
        keyEntities: []
      }), D(ye(s), "removeKey", function(p) {
        s.setState(function(f) {
          var d = f.keyEntities.map(function(h) {
            return h.key !== p ? h : L(L({}, h), {}, {
              status: vt
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var f = s.state.keyEntities, d = f.filter(function(h) {
            var v = h.status;
            return v !== vt;
          }).length;
          d === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return _e(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, u = this.props, p = u.component, f = u.children, d = u.onVisibleChanged;
        u.onAllRemoved;
        var h = ar(u, fi), v = p || M.Fragment, b = {};
        return pi.forEach(function(m) {
          b[m] = h[m], delete h[m];
        }), delete h.keys, /* @__PURE__ */ M.createElement(v, h, c.map(function(m, C) {
          var w = m.status, E = ar(m, di), x = w === Lt || w === Tt;
          return /* @__PURE__ */ M.createElement(t, Ie({}, b, {
            key: E.key,
            visible: x,
            eventProps: E,
            onVisibleChanged: function(S) {
              d == null || d(S, {
                key: E.key
              }), S || a.removeKey(E.key);
            }
          }), function(y, S) {
            return f(L(L({}, y), {}, {
              index: C
            }), S);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var u = a.keys, p = c.keyEntities, f = Pt(u), d = ui(p, f);
        return {
          keyEntities: d.filter(function(h) {
            var v = p.find(function(b) {
              var m = b.key;
              return h.key === m;
            });
            return !(v && v.status === vt && h.status === It);
          })
        };
      }
    }]), i;
  }(M.Component);
  return D(r, "defaultProps", {
    component: "div"
  }), r;
}
const hi = mi(Br);
function gi(e, t) {
  const {
    children: r,
    upload: n,
    rootClassName: o
  } = e, i = l.useRef(null);
  return l.useImperativeHandle(t, () => i.current), /* @__PURE__ */ l.createElement(Lr, Ie({}, n, {
    showUploadList: !1,
    rootClassName: o,
    ref: i
  }), r);
}
const Zr = /* @__PURE__ */ l.forwardRef(gi);
var Qr = /* @__PURE__ */ _e(function e() {
  Ce(this, e);
}), Yr = "CALC_UNIT", vi = new RegExp(Yr, "g");
function bt(e) {
  return typeof e == "number" ? "".concat(e).concat(Yr) : e;
}
var bi = /* @__PURE__ */ function(e) {
  st(r, e);
  var t = at(r);
  function r(n, o) {
    var i;
    Ce(this, r), i = t.call(this), D(ye(i), "result", ""), D(ye(i), "unitlessCssVar", void 0), D(ye(i), "lowPriority", void 0);
    var s = G(n);
    return i.unitlessCssVar = o, n instanceof r ? i.result = "(".concat(n.result, ")") : s === "number" ? i.result = bt(n) : s === "string" && (i.result = n), i;
  }
  return _e(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(bt(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(bt(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var i = this, s = o || {}, a = s.unit, c = !0;
      return typeof a == "boolean" ? c = a : Array.from(this.unitlessCssVar).some(function(u) {
        return i.result.includes(u);
      }) && (c = !1), this.result = this.result.replace(vi, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(Qr), yi = /* @__PURE__ */ function(e) {
  st(r, e);
  var t = at(r);
  function r(n) {
    var o;
    return Ce(this, r), o = t.call(this), D(ye(o), "result", 0), n instanceof r ? o.result = n.result : typeof n == "number" && (o.result = n), o;
  }
  return _e(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof r ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof r ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), r;
}(Qr), Si = function(t, r) {
  var n = t === "css" ? bi : yi;
  return function(o) {
    return new n(o, r);
  };
}, hr = function(t, r) {
  return "".concat([r, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function gr(e, t, r, n) {
  var o = L({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    var i = n.deprecatedTokens;
    i.forEach(function(a) {
      var c = q(a, 2), u = c[0], p = c[1];
      if (o != null && o[u] || o != null && o[p]) {
        var f;
        (f = o[p]) !== null && f !== void 0 || (o[p] = o == null ? void 0 : o[u]);
      }
    });
  }
  var s = L(L({}, r), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var Jr = typeof CSSINJS_STATISTIC < "u", Rt = !0;
function Nt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Jr)
    return Object.assign.apply(Object, [{}].concat(t));
  Rt = !1;
  var n = {};
  return t.forEach(function(o) {
    if (G(o) === "object") {
      var i = Object.keys(o);
      i.forEach(function(s) {
        Object.defineProperty(n, s, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[s];
          }
        });
      });
    }
  }), Rt = !0, n;
}
var vr = {};
function xi() {
}
var wi = function(t) {
  var r, n = t, o = xi;
  return Jr && typeof Proxy < "u" && (r = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(s, a) {
      if (Rt) {
        var c;
        (c = r) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    vr[s] = {
      global: Array.from(r),
      component: L(L({}, (c = vr[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: n,
    keys: r,
    flush: o
  };
};
function br(e, t, r) {
  if (typeof r == "function") {
    var n;
    return r(Nt(t, (n = t[e]) !== null && n !== void 0 ? n : {}));
  }
  return r ?? {};
}
function Ei(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "max(".concat(n.map(function(i) {
        return Bt(i);
      }).join(","), ")");
    },
    min: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "min(".concat(n.map(function(i) {
        return Bt(i);
      }).join(","), ")");
    }
  };
}
var Ci = 1e3 * 60 * 10, _i = /* @__PURE__ */ function() {
  function e() {
    Ce(this, e), D(this, "map", /* @__PURE__ */ new Map()), D(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), D(this, "nextID", 0), D(this, "lastAccessBeat", /* @__PURE__ */ new Map()), D(this, "accessBeat", 0);
  }
  return _e(e, [{
    key: "set",
    value: function(r, n) {
      this.clear();
      var o = this.getCompositeKey(r);
      this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      var n = this.getCompositeKey(r), o = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      var n = this, o = r.map(function(i) {
        return i && G(i) === "object" ? "obj_".concat(n.getObjectID(i)) : "".concat(G(i), "_").concat(i);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      var n = this.nextID;
      return this.objectIDMap.set(r, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      var r = this;
      if (this.accessBeat > 1e4) {
        var n = Date.now();
        this.lastAccessBeat.forEach(function(o, i) {
          n - o > Ci && (r.map.delete(i), r.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), yr = new _i();
function Li(e, t) {
  return l.useMemo(function() {
    var r = yr.get(t);
    if (r)
      return r;
    var n = e();
    return yr.set(t, n), n;
  }, t);
}
var Ti = function() {
  return {};
};
function Ii(e) {
  var t = e.useCSP, r = t === void 0 ? Ti : t, n = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(d, h, v, b) {
    var m = Array.isArray(d) ? d[0] : d;
    function C(_) {
      return "".concat(String(m)).concat(_.slice(0, 1).toUpperCase()).concat(_.slice(1));
    }
    var w = (b == null ? void 0 : b.unitless) || {}, E = typeof a == "function" ? a(d) : {}, x = L(L({}, E), {}, D({}, C("zIndexPopup"), !0));
    Object.keys(w).forEach(function(_) {
      x[C(_)] = w[_];
    });
    var y = L(L({}, b), {}, {
      unitless: x,
      prefixToken: C
    }), S = p(d, h, v, y), g = u(m, v, y);
    return function(_) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _, k = S(_, R), $ = q(k, 2), T = $[1], P = g(R), F = q(P, 2), I = F[0], j = F[1];
      return [I, T, j];
    };
  }
  function u(d, h, v) {
    var b = v.unitless, m = v.injectStyle, C = m === void 0 ? !0 : m, w = v.prefixToken, E = v.ignore, x = function(g) {
      var _ = g.rootCls, R = g.cssVar, k = R === void 0 ? {} : R, $ = n(), T = $.realToken;
      return Fn({
        path: [d],
        prefix: k.prefix,
        key: k.key,
        unitless: b,
        ignore: E,
        token: T,
        scope: _
      }, function() {
        var P = br(d, T, h), F = gr(d, T, P, {
          deprecatedTokens: v == null ? void 0 : v.deprecatedTokens
        });
        return Object.keys(P).forEach(function(I) {
          F[w(I)] = F[I], delete F[I];
        }), F;
      }), null;
    }, y = function(g) {
      var _ = n(), R = _.cssVar;
      return [function(k) {
        return C && R ? /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(x, {
          rootCls: g,
          cssVar: R,
          component: d
        }), k) : k;
      }, R == null ? void 0 : R.key];
    };
    return y;
  }
  function p(d, h, v) {
    var b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = Array.isArray(d) ? d : [d, d], C = q(m, 1), w = C[0], E = m.join("-"), x = e.layer || {
      name: "antd"
    };
    return function(y) {
      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, g = n(), _ = g.theme, R = g.realToken, k = g.hashId, $ = g.token, T = g.cssVar, P = o(), F = P.rootPrefixCls, I = P.iconPrefixCls, j = r(), Y = T ? "css" : "js", Z = Li(function() {
        var H = /* @__PURE__ */ new Set();
        return T && Object.keys(b.unitless || {}).forEach(function(fe) {
          H.add(dt(fe, T.prefix)), H.add(dt(fe, hr(w, T.prefix)));
        }), Si(Y, H);
      }, [Y, w, T == null ? void 0 : T.prefix]), ue = Ei(Y), U = ue.max, A = ue.min, z = {
        theme: _,
        token: $,
        hashId: k,
        nonce: function() {
          return j.nonce;
        },
        clientOnly: b.clientOnly,
        layer: x,
        // antd is always at top of styles
        order: b.order || -999
      };
      typeof i == "function" && Xt(L(L({}, z), {}, {
        clientOnly: !1,
        path: ["Shared", F]
      }), function() {
        return i($, {
          prefix: {
            rootPrefixCls: F,
            iconPrefixCls: I
          },
          csp: j
        });
      });
      var J = Xt(L(L({}, z), {}, {
        path: [E, y, I]
      }), function() {
        if (b.injectStyle === !1)
          return [];
        var H = wi($), fe = H.token, N = H.flush, B = br(w, R, v), ee = ".".concat(y), V = gr(w, R, B, {
          deprecatedTokens: b.deprecatedTokens
        });
        T && B && G(B) === "object" && Object.keys(B).forEach(function(le) {
          B[le] = "var(".concat(dt(le, hr(w, T.prefix)), ")");
        });
        var se = Nt(fe, {
          componentCls: ee,
          prefixCls: y,
          iconCls: ".".concat(I),
          antCls: ".".concat(F),
          calc: Z,
          // @ts-ignore
          max: U,
          // @ts-ignore
          min: A
        }, T ? B : V), ae = h(se, {
          hashId: k,
          prefixCls: y,
          rootPrefixCls: F,
          iconPrefixCls: I
        });
        N(w, V);
        var X = typeof s == "function" ? s(se, y, S, b.resetFont) : null;
        return [b.resetStyle === !1 ? null : X, ae];
      });
      return [J, k];
    };
  }
  function f(d, h, v) {
    var b = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = p(d, h, v, L({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, b)), C = function(E) {
      var x = E.prefixCls, y = E.rootCls, S = y === void 0 ? x : y;
      return m(x, S), null;
    };
    return C;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: p
  };
}
function Re(e) {
  "@babel/helpers - typeof";
  return Re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Re(e);
}
function Pi(e, t) {
  if (Re(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Re(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ri(e) {
  var t = Pi(e, "string");
  return Re(t) == "symbol" ? t : t + "";
}
function re(e, t, r) {
  return (t = Ri(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
const W = Math.round;
function yt(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = t(n[o] || 0, r[o] || "", o);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const Sr = (e, t, r) => r === 0 ? e : e / 100;
function Le(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class me {
  constructor(t) {
    re(this, "isValid", !0), re(this, "r", 0), re(this, "g", 0), re(this, "b", 0), re(this, "a", 1), re(this, "_h", void 0), re(this, "_s", void 0), re(this, "_l", void 0), re(this, "_v", void 0), re(this, "_max", void 0), re(this, "_min", void 0), re(this, "_brightness", void 0);
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return n.startsWith(i);
      };
      const n = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : o("rgb") ? this.fromRgbString(n) : o("hsl") ? this.fromHslString(n) : (o("hsv") || o("hsb")) && this.fromHsvString(n);
    } else if (t instanceof me)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = Le(t.r), this.g = Le(t.g), this.b = Le(t.b), this.a = typeof t.a == "number" ? Le(t.a, 1) : 1;
    else if (r("hsl"))
      this.fromHsl(t);
    else if (r("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const r = this.toHsv();
    return r.h = t, this._c(r);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(i) {
      const s = i / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    const r = t(this.r), n = t(this.g), o = t(this.b);
    return 0.2126 * r + 0.7152 * n + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = W(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
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
  darken(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const n = this._c(t), o = r / 100, i = (a) => (n[a] - this[a]) * o + this[a], s = {
      r: W(i("r")),
      g: W(i("g")),
      b: W(i("b")),
      a: W(i("a") * 100) / 100
    };
    return this._c(s);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const r = this._c(t), n = this.a + r.a * (1 - this.a), o = (i) => W((this[i] * this.a + r[i] * r.a * (1 - this.a)) / n);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: n
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
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const r = (this.r || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = W(this.a * 255).toString(16);
      t += i.length === 2 ? i : "0" + i;
    }
    return t;
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
    const t = this.getHue(), r = W(this.getSaturation() * 100), n = W(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
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
  _sc(t, r, n) {
    const o = this.clone();
    return o[t] = Le(r, n), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const r = t.replace("#", "");
    function n(o, i) {
      return parseInt(r[o] + r[i || o], 16);
    }
    r.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = r[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = r[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: n,
    a: o
  }) {
    if (this._h = t % 360, this._s = r, this._l = n, this.a = typeof o == "number" ? o : 1, r <= 0) {
      const d = W(n * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, u = (1 - Math.abs(2 * n - 1)) * r, p = u * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = u, s = p) : c >= 1 && c < 2 ? (i = p, s = u) : c >= 2 && c < 3 ? (s = u, a = p) : c >= 3 && c < 4 ? (s = p, a = u) : c >= 4 && c < 5 ? (i = p, a = u) : c >= 5 && c < 6 && (i = u, a = p);
    const f = n - u / 2;
    this.r = W((i + f) * 255), this.g = W((s + f) * 255), this.b = W((a + f) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a: o
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof o == "number" ? o : 1;
    const i = W(n * 255);
    if (this.r = i, this.g = i, this.b = i, r <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, u = W(n * (1 - r) * 255), p = W(n * (1 - r * c) * 255), f = W(n * (1 - r * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = f, this.b = u;
        break;
      case 1:
        this.r = p, this.b = u;
        break;
      case 2:
        this.r = u, this.b = f;
        break;
      case 3:
        this.r = u, this.g = p;
        break;
      case 4:
        this.r = f, this.g = u;
        break;
      case 5:
      default:
        this.g = u, this.b = p;
        break;
    }
  }
  fromHsvString(t) {
    const r = yt(t, Sr);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = yt(t, Sr);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = yt(t, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? W(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
const Mi = {
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
}, Oi = Object.assign(Object.assign({}, Mi), {
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
function St(e) {
  return e >= 0 && e <= 255;
}
function De(e, t) {
  const {
    r,
    g: n,
    b: o,
    a: i
  } = new me(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new me(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const p = Math.round((r - s * (1 - u)) / u), f = Math.round((n - a * (1 - u)) / u), d = Math.round((o - c * (1 - u)) / u);
    if (St(p) && St(f) && St(d))
      return new me({
        r: p,
        g: f,
        b: d,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new me({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var Fi = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Ai(e) {
  const {
    override: t
  } = e, r = Fi(e, ["override"]), n = Object.assign({}, t);
  Object.keys(Oi).forEach((d) => {
    delete n[d];
  });
  const o = Object.assign(Object.assign({}, r), n), i = 480, s = 576, a = 768, c = 992, u = 1200, p = 1600;
  if (o.motion === !1) {
    const d = "0s";
    o.motionDurationFast = d, o.motionDurationMid = d, o.motionDurationSlow = d;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: De(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: De(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: De(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 3,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: De(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
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
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: p - 1,
    screenXXL: p,
    screenXXLMin: p,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new me("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new me("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new me("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), n);
}
const $i = {
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
}, ki = {
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
}, ji = An(Xe.defaultAlgorithm), Di = {
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
}, en = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o,
    ...i
  } = t;
  let s = {
    ...n,
    override: o
  };
  return s = Ai(s), i && Object.entries(i).forEach(([a, c]) => {
    const {
      theme: u,
      ...p
    } = c;
    let f = p;
    u && (f = en({
      ...s,
      ...p
    }, {
      override: p
    }, u)), s[a] = f;
  }), s;
};
function Ni() {
  const {
    token: e,
    hashed: t,
    theme: r = ji,
    override: n,
    cssVar: o
  } = l.useContext(Xe._internalContext), [i, s, a] = $n(r, [Xe.defaultSeed, e], {
    salt: `${Co}-${t || ""}`,
    override: n,
    getComputedToken: en,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: $i,
      ignore: ki,
      preserve: Di
    }
  });
  return [r, a, t ? s : "", i, o];
}
const {
  genStyleHooks: zi
} = Ii({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Ve();
    return {
      iconPrefixCls: t,
      rootPrefixCls: e()
    };
  },
  useToken: () => {
    const [e, t, r, n, o] = Ni();
    return {
      theme: e,
      realToken: t,
      hashId: r,
      token: n,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = Ve();
    return e ?? {};
  },
  layer: {
    name: "antdx",
    dependencies: ["antd"]
  }
}), Hi = (e) => {
  const {
    componentCls: t,
    calc: r
  } = e, n = `${t}-list-card`, o = r(e.fontSize).mul(e.lineHeight).mul(2).add(e.paddingSM).add(e.paddingSM).equal();
  return {
    [n]: {
      borderRadius: e.borderRadius,
      position: "relative",
      background: e.colorFillContent,
      borderWidth: e.lineWidth,
      borderStyle: "solid",
      borderColor: "transparent",
      flex: "none",
      // =============================== Desc ================================
      [`${n}-name,${n}-desc`]: {
        display: "flex",
        flexWrap: "nowrap",
        maxWidth: "100%"
      },
      [`${n}-ellipsis-prefix`]: {
        flex: "0 1 auto",
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      [`${n}-ellipsis-suffix`]: {
        flex: "none"
      },
      // ============================= Overview ==============================
      "&-type-overview": {
        padding: r(e.paddingSM).sub(e.lineWidth).equal(),
        paddingInlineStart: r(e.padding).add(e.lineWidth).equal(),
        display: "flex",
        flexWrap: "nowrap",
        gap: e.paddingXS,
        alignItems: "flex-start",
        width: 236,
        // Icon
        [`${n}-icon`]: {
          fontSize: r(e.fontSizeLG).mul(2).equal(),
          lineHeight: 1,
          paddingTop: r(e.paddingXXS).mul(1.5).equal(),
          flex: "none"
        },
        // Content
        [`${n}-content`]: {
          flex: "auto",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        },
        [`${n}-desc`]: {
          color: e.colorTextTertiary
        }
      },
      // ============================== Preview ==============================
      "&-type-preview": {
        width: o,
        height: o,
        lineHeight: 1,
        [`&:not(${n}-status-error)`]: {
          border: 0
        },
        // Img
        img: {
          width: "100%",
          height: "100%",
          verticalAlign: "top",
          objectFit: "cover",
          borderRadius: "inherit"
        },
        // Mask
        [`${n}-img-mask`]: {
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `rgba(0, 0, 0, ${e.opacityLoading})`,
          borderRadius: "inherit"
        },
        // Error
        [`&${n}-status-error`]: {
          [`img, ${n}-img-mask`]: {
            borderRadius: r(e.borderRadius).sub(e.lineWidth).equal()
          },
          [`${n}-desc`]: {
            paddingInline: e.paddingXXS
          }
        },
        // Progress
        [`${n}-progress`]: {}
      },
      // ============================ Remove Icon ============================
      [`${n}-remove`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        border: 0,
        padding: e.paddingXXS,
        background: "transparent",
        lineHeight: 1,
        transform: "translate(50%, -50%)",
        fontSize: e.fontSize,
        cursor: "pointer",
        opacity: e.opacityLoading,
        display: "none",
        "&:dir(rtl)": {
          transform: "translate(-50%, -50%)"
        },
        "&:hover": {
          opacity: 1
        },
        "&:active": {
          opacity: e.opacityLoading
        }
      },
      [`&:hover ${n}-remove`]: {
        display: "block"
      },
      // ============================== Status ===============================
      "&-status-error": {
        borderColor: e.colorError,
        [`${n}-desc`]: {
          color: e.colorError
        }
      },
      // ============================== Motion ===============================
      "&-motion": {
        transition: ["opacity", "width", "margin", "padding"].map((i) => `${i} ${e.motionDurationSlow}`).join(","),
        "&-appear-start": {
          width: 0,
          transition: "none"
        },
        "&-leave-active": {
          opacity: 0,
          width: 0,
          paddingInline: 0,
          borderInlineWidth: 0,
          marginInlineEnd: r(e.paddingSM).mul(-1).equal()
        }
      }
    }
  };
}, Mt = {
  "&, *": {
    boxSizing: "border-box"
  }
}, Ui = (e) => {
  const {
    componentCls: t,
    calc: r,
    antCls: n
  } = e, o = `${t}-drop-area`, i = `${t}-placeholder`;
  return {
    // ============================== Full Screen ==============================
    [o]: {
      position: "absolute",
      inset: 0,
      zIndex: e.zIndexPopupBase,
      ...Mt,
      "&-on-body": {
        position: "fixed",
        inset: 0
      },
      "&-hide-placement": {
        [`${i}-inner`]: {
          display: "none"
        }
      },
      [i]: {
        padding: 0
      }
    },
    "&": {
      // ============================= Placeholder =============================
      [i]: {
        height: "100%",
        borderRadius: e.borderRadius,
        borderWidth: e.lineWidthBold,
        borderStyle: "dashed",
        borderColor: "transparent",
        padding: e.padding,
        position: "relative",
        backdropFilter: "blur(10px)",
        background: e.colorBgPlaceholderHover,
        ...Mt,
        [`${n}-upload-wrapper ${n}-upload${n}-upload-btn`]: {
          padding: 0
        },
        [`&${i}-drag-in`]: {
          borderColor: e.colorPrimaryHover
        },
        [`&${i}-disabled`]: {
          opacity: 0.25,
          pointerEvents: "none"
        },
        [`${i}-inner`]: {
          gap: r(e.paddingXXS).div(2).equal()
        },
        [`${i}-icon`]: {
          fontSize: e.fontSizeHeading2,
          lineHeight: 1
        },
        [`${i}-title${i}-title`]: {
          margin: 0,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight
        },
        [`${i}-description`]: {}
      }
    }
  };
}, Bi = (e) => {
  const {
    componentCls: t,
    calc: r
  } = e, n = `${t}-list`, o = r(e.fontSize).mul(e.lineHeight).mul(2).add(e.paddingSM).add(e.paddingSM).equal();
  return {
    [t]: {
      position: "relative",
      width: "100%",
      ...Mt,
      // =============================== File List ===============================
      [n]: {
        display: "flex",
        flexWrap: "wrap",
        gap: e.paddingSM,
        fontSize: e.fontSize,
        lineHeight: e.lineHeight,
        color: e.colorText,
        paddingBlock: e.paddingSM,
        paddingInline: e.padding,
        width: "100%",
        background: e.colorBgContainer,
        // Hide scrollbar
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": {
          display: "none"
        },
        // Scroll
        "&-overflow-scrollX, &-overflow-scrollY": {
          "&:before, &:after": {
            content: '""',
            position: "absolute",
            opacity: 0,
            transition: `opacity ${e.motionDurationSlow}`,
            zIndex: 1
          }
        },
        "&-overflow-ping-start:before": {
          opacity: 1
        },
        "&-overflow-ping-end:after": {
          opacity: 1
        },
        "&-overflow-scrollX": {
          overflowX: "auto",
          overflowY: "hidden",
          flexWrap: "nowrap",
          "&:before, &:after": {
            insetBlock: 0,
            width: 8
          },
          "&:before": {
            insetInlineStart: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.06), rgba(0,0,0,0));"
          },
          "&:after": {
            insetInlineEnd: 0,
            background: "linear-gradient(to left, rgba(0,0,0,0.06), rgba(0,0,0,0));"
          },
          "&:dir(rtl)": {
            "&:before": {
              background: "linear-gradient(to left, rgba(0,0,0,0.06), rgba(0,0,0,0));"
            },
            "&:after": {
              background: "linear-gradient(to right, rgba(0,0,0,0.06), rgba(0,0,0,0));"
            }
          }
        },
        "&-overflow-scrollY": {
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: r(o).mul(3).equal(),
          "&:before, &:after": {
            insetInline: 0,
            height: 8
          },
          "&:before": {
            insetBlockStart: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0));"
          },
          "&:after": {
            insetBlockEnd: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.06), rgba(0,0,0,0));"
          }
        },
        // ======================================================================
        // ==                              Upload                              ==
        // ======================================================================
        "&-upload-btn": {
          width: o,
          height: o,
          fontSize: e.fontSizeHeading2,
          color: "#999"
        },
        // ======================================================================
        // ==                             PrevNext                             ==
        // ======================================================================
        "&-prev-btn, &-next-btn": {
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          boxShadow: e.boxShadowTertiary,
          opacity: 0,
          pointerEvents: "none"
        },
        "&-prev-btn": {
          left: {
            _skip_check_: !0,
            value: e.padding
          }
        },
        "&-next-btn": {
          right: {
            _skip_check_: !0,
            value: e.padding
          }
        },
        "&:dir(ltr)": {
          [`&${n}-overflow-ping-start ${n}-prev-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          },
          [`&${n}-overflow-ping-end ${n}-next-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          }
        },
        "&:dir(rtl)": {
          [`&${n}-overflow-ping-end ${n}-prev-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          },
          [`&${n}-overflow-ping-start ${n}-next-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          }
        }
      }
    }
  };
}, Xi = (e) => {
  const {
    colorBgContainer: t
  } = e;
  return {
    colorBgPlaceholderHover: new me(t).setA(0.85).toRgbString()
  };
}, tn = zi("Attachments", (e) => {
  const t = Nt(e, {});
  return [Ui(t), Bi(t), Hi(t)];
}, Xi), Vi = (e) => e.indexOf("image/") === 0, Ne = 200;
function Wi(e) {
  return new Promise((t) => {
    if (!e || !e.type || !Vi(e.type)) {
      t("");
      return;
    }
    const r = new Image();
    if (r.onload = () => {
      const {
        width: n,
        height: o
      } = r, i = n / o, s = i > 1 ? Ne : Ne * i, a = i > 1 ? Ne / i : Ne, c = document.createElement("canvas");
      c.width = s, c.height = a, c.style.cssText = `position: fixed; left: 0; top: 0; width: ${s}px; height: ${a}px; z-index: 9999; display: none;`, document.body.appendChild(c), c.getContext("2d").drawImage(r, 0, 0, s, a);
      const p = c.toDataURL();
      document.body.removeChild(c), window.URL.revokeObjectURL(r.src), t(p);
    }, r.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
      const n = new FileReader();
      n.onload = () => {
        n.result && typeof n.result == "string" && (r.src = n.result);
      }, n.readAsDataURL(e);
    } else if (e.type.startsWith("image/gif")) {
      const n = new FileReader();
      n.onload = () => {
        n.result && t(n.result);
      }, n.readAsDataURL(e);
    } else
      r.src = window.URL.createObjectURL(e);
  });
}
function Gi() {
  return /* @__PURE__ */ l.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /* @__PURE__ */ l.createElement("title", null, "audio"), /* @__PURE__ */ l.createElement("g", {
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, /* @__PURE__ */ l.createElement("path", {
    d: "M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M10.7315824,7.11216117 C10.7428131,7.15148751 10.7485063,7.19218979 10.7485063,7.23309113 L10.7485063,8.07742614 C10.7484199,8.27364959 10.6183424,8.44607275 10.4296853,8.50003683 L8.32984514,9.09986306 L8.32984514,11.7071803 C8.32986605,12.5367078 7.67249692,13.217028 6.84345686,13.2454634 L6.79068592,13.2463395 C6.12766108,13.2463395 5.53916361,12.8217001 5.33010655,12.1924966 C5.1210495,11.563293 5.33842118,10.8709227 5.86959669,10.4741173 C6.40077221,10.0773119 7.12636292,10.0652587 7.67042486,10.4442027 L7.67020842,7.74937024 L7.68449368,7.74937024 C7.72405122,7.59919041 7.83988806,7.48101083 7.98924584,7.4384546 L10.1880418,6.81004755 C10.42156,6.74340323 10.6648954,6.87865515 10.7315824,7.11216117 Z M9.60714286,1.31785714 L12.9678571,4.67857143 L9.60714286,4.67857143 L9.60714286,1.31785714 Z",
    fill: "currentColor"
  })));
}
function Ki(e) {
  const {
    percent: t
  } = e, {
    token: r
  } = Xe.useToken();
  return /* @__PURE__ */ l.createElement(yn, {
    type: "circle",
    percent: t,
    size: r.fontSizeHeading2 * 2,
    strokeColor: "#FFF",
    trailColor: "rgba(255, 255, 255, 0.3)",
    format: (n) => /* @__PURE__ */ l.createElement("span", {
      style: {
        color: "#FFF"
      }
    }, (n || 0).toFixed(0), "%")
  });
}
function qi() {
  return /* @__PURE__ */ l.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /* @__PURE__ */ l.createElement("title", null, "video"), /* @__PURE__ */ l.createElement("g", {
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, /* @__PURE__ */ l.createElement("path", {
    d: "M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M12.9678571,4.67857143 L9.60714286,1.31785714 L9.60714286,4.67857143 L12.9678571,4.67857143 Z M10.5379461,10.3101106 L6.68957555,13.0059749 C6.59910784,13.0693494 6.47439406,13.0473861 6.41101953,12.9569184 C6.3874624,12.9232903 6.37482581,12.8832269 6.37482581,12.8421686 L6.37482581,7.45043999 C6.37482581,7.33998304 6.46436886,7.25043999 6.57482581,7.25043999 C6.61588409,7.25043999 6.65594753,7.26307658 6.68957555,7.28663371 L10.5379461,9.98249803 C10.6284138,10.0458726 10.6503772,10.1705863 10.5870027,10.2610541 C10.5736331,10.2801392 10.5570312,10.2967411 10.5379461,10.3101106 Z",
    fill: "currentColor"
  })));
}
const xt = " ", Ot = "#8c8c8c", rn = ["png", "jpg", "jpeg", "gif", "bmp", "webp", "svg"], Zi = [{
  icon: /* @__PURE__ */ l.createElement(En, null),
  color: "#22b35e",
  ext: ["xlsx", "xls"]
}, {
  icon: /* @__PURE__ */ l.createElement(Cn, null),
  color: Ot,
  ext: rn
}, {
  icon: /* @__PURE__ */ l.createElement(_n, null),
  color: Ot,
  ext: ["md", "mdx"]
}, {
  icon: /* @__PURE__ */ l.createElement(Ln, null),
  color: "#ff4d4f",
  ext: ["pdf"]
}, {
  icon: /* @__PURE__ */ l.createElement(Tn, null),
  color: "#ff6e31",
  ext: ["ppt", "pptx"]
}, {
  icon: /* @__PURE__ */ l.createElement(In, null),
  color: "#1677ff",
  ext: ["doc", "docx"]
}, {
  icon: /* @__PURE__ */ l.createElement(Pn, null),
  color: "#fab714",
  ext: ["zip", "rar", "7z", "tar", "gz"]
}, {
  icon: /* @__PURE__ */ l.createElement(qi, null),
  color: "#ff4d4f",
  ext: ["mp4", "avi", "mov", "wmv", "flv", "mkv"]
}, {
  icon: /* @__PURE__ */ l.createElement(Gi, null),
  color: "#8c8c8c",
  ext: ["mp3", "wav", "flac", "ape", "aac", "ogg"]
}];
function xr(e, t) {
  return t.some((r) => e.toLowerCase() === `.${r}`);
}
function Qi(e) {
  let t = e;
  const r = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
  let n = 0;
  for (; t >= 1024 && n < r.length - 1; )
    t /= 1024, n++;
  return `${t.toFixed(0)} ${r[n]}`;
}
function Yi(e, t) {
  const {
    prefixCls: r,
    item: n,
    onRemove: o,
    className: i,
    style: s
  } = e, a = l.useContext(Me), {
    disabled: c
  } = a || {}, {
    name: u,
    size: p,
    percent: f,
    status: d = "done",
    description: h
  } = n, {
    getPrefixCls: v
  } = Ve(), b = v("attachment", r), m = `${b}-list-card`, [C, w, E] = tn(b), [x, y] = l.useMemo(() => {
    const I = u || "", j = I.match(/^(.*)\.[^.]+$/);
    return j ? [j[1], I.slice(j[1].length)] : [I, ""];
  }, [u]), S = l.useMemo(() => xr(y, rn), [y]), g = l.useMemo(() => h || (d === "uploading" ? `${f || 0}%` : d === "error" ? n.response || xt : p ? Qi(p) : xt), [d, f]), [_, R] = l.useMemo(() => {
    for (const {
      ext: I,
      icon: j,
      color: Y
    } of Zi)
      if (xr(y, I))
        return [j, Y];
    return [/* @__PURE__ */ l.createElement(xn, {
      key: "defaultIcon"
    }), Ot];
  }, [y]), [k, $] = l.useState();
  l.useEffect(() => {
    if (n.originFileObj) {
      let I = !0;
      return Wi(n.originFileObj).then((j) => {
        I && $(j);
      }), () => {
        I = !1;
      };
    }
    $(void 0);
  }, [n.originFileObj]);
  let T = null;
  const P = n.thumbUrl || n.url || k, F = S && (n.originFileObj || P);
  return F ? T = /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("img", {
    alt: "preview",
    src: P
  }), d !== "done" && /* @__PURE__ */ l.createElement("div", {
    className: `${m}-img-mask`
  }, d === "uploading" && f !== void 0 && /* @__PURE__ */ l.createElement(Ki, {
    percent: f,
    prefixCls: m
  }), d === "error" && /* @__PURE__ */ l.createElement("div", {
    className: `${m}-desc`
  }, /* @__PURE__ */ l.createElement("div", {
    className: `${m}-ellipsis-prefix`
  }, g)))) : T = /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", {
    className: `${m}-icon`,
    style: {
      color: R
    }
  }, _), /* @__PURE__ */ l.createElement("div", {
    className: `${m}-content`
  }, /* @__PURE__ */ l.createElement("div", {
    className: `${m}-name`
  }, /* @__PURE__ */ l.createElement("div", {
    className: `${m}-ellipsis-prefix`
  }, x ?? xt), /* @__PURE__ */ l.createElement("div", {
    className: `${m}-ellipsis-suffix`
  }, y)), /* @__PURE__ */ l.createElement("div", {
    className: `${m}-desc`
  }, /* @__PURE__ */ l.createElement("div", {
    className: `${m}-ellipsis-prefix`
  }, g)))), C(/* @__PURE__ */ l.createElement("div", {
    className: ne(m, {
      [`${m}-status-${d}`]: d,
      [`${m}-type-preview`]: F,
      [`${m}-type-overview`]: !F
    }, i, w, E),
    style: s,
    ref: t
  }, T, !c && o && /* @__PURE__ */ l.createElement("button", {
    type: "button",
    className: `${m}-remove`,
    onClick: () => {
      o(n);
    }
  }, /* @__PURE__ */ l.createElement(wn, null))));
}
const nn = /* @__PURE__ */ l.forwardRef(Yi), wr = 1;
function Ji(e) {
  const {
    prefixCls: t,
    items: r,
    onRemove: n,
    overflow: o,
    upload: i,
    listClassName: s,
    listStyle: a,
    itemClassName: c,
    itemStyle: u
  } = e, p = `${t}-list`, f = l.useRef(null), [d, h] = l.useState(!1), {
    disabled: v
  } = l.useContext(Me);
  l.useEffect(() => (h(!0), () => {
    h(!1);
  }), []);
  const [b, m] = l.useState(!1), [C, w] = l.useState(!1), E = () => {
    const g = f.current;
    g && (o === "scrollX" ? (m(Math.abs(g.scrollLeft) >= wr), w(g.scrollWidth - g.clientWidth - Math.abs(g.scrollLeft) >= wr)) : o === "scrollY" && (m(g.scrollTop !== 0), w(g.scrollHeight - g.clientHeight !== g.scrollTop)));
  };
  l.useEffect(() => {
    E();
  }, [o]);
  const x = (g) => {
    const _ = f.current;
    _ && _.scrollTo({
      left: _.scrollLeft + g * _.clientWidth,
      behavior: "smooth"
    });
  }, y = () => {
    x(-1);
  }, S = () => {
    x(1);
  };
  return /* @__PURE__ */ l.createElement("div", {
    className: ne(p, {
      [`${p}-overflow-${e.overflow}`]: o,
      [`${p}-overflow-ping-start`]: b,
      [`${p}-overflow-ping-end`]: C
    }, s),
    ref: f,
    onScroll: E,
    style: a
  }, /* @__PURE__ */ l.createElement(hi, {
    keys: r.map((g) => ({
      key: g.uid,
      item: g
    })),
    motionName: `${p}-card-motion`,
    component: !1,
    motionAppear: d,
    motionLeave: !0,
    motionEnter: !0
  }, ({
    key: g,
    item: _,
    className: R,
    style: k
  }) => /* @__PURE__ */ l.createElement(nn, {
    key: g,
    prefixCls: t,
    item: _,
    onRemove: n,
    className: ne(R, c),
    style: {
      ...k,
      ...u
    }
  })), !v && /* @__PURE__ */ l.createElement(Zr, {
    upload: i
  }, /* @__PURE__ */ l.createElement(ut, {
    className: `${p}-upload-btn`,
    type: "dashed"
  }, /* @__PURE__ */ l.createElement(Rn, {
    className: `${p}-upload-btn-icon`
  }))), o === "scrollX" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(ut, {
    size: "small",
    shape: "circle",
    className: `${p}-prev-btn`,
    icon: /* @__PURE__ */ l.createElement(Mn, null),
    onClick: y
  }), /* @__PURE__ */ l.createElement(ut, {
    size: "small",
    shape: "circle",
    className: `${p}-next-btn`,
    icon: /* @__PURE__ */ l.createElement(On, null),
    onClick: S
  })));
}
function es(e, t) {
  const {
    prefixCls: r,
    placeholder: n = {},
    upload: o,
    className: i,
    style: s
  } = e, a = `${r}-placeholder`, c = n || {}, {
    disabled: u
  } = l.useContext(Me), [p, f] = l.useState(!1), d = () => {
    f(!0);
  }, h = (m) => {
    m.currentTarget.contains(m.relatedTarget) || f(!1);
  }, v = () => {
    f(!1);
  }, b = /* @__PURE__ */ l.isValidElement(n) ? n : /* @__PURE__ */ l.createElement(Sn, {
    align: "center",
    justify: "center",
    vertical: !0,
    className: `${a}-inner`
  }, /* @__PURE__ */ l.createElement(ft.Text, {
    className: `${a}-icon`
  }, c.icon), /* @__PURE__ */ l.createElement(ft.Title, {
    className: `${a}-title`,
    level: 5
  }, c.title), /* @__PURE__ */ l.createElement(ft.Text, {
    className: `${a}-description`,
    type: "secondary"
  }, c.description));
  return /* @__PURE__ */ l.createElement("div", {
    className: ne(a, {
      [`${a}-drag-in`]: p,
      [`${a}-disabled`]: u
    }, i),
    onDragEnter: d,
    onDragLeave: h,
    onDrop: v,
    "aria-hidden": u,
    style: s
  }, /* @__PURE__ */ l.createElement(Lr.Dragger, Ie({
    showUploadList: !1
  }, o, {
    ref: t,
    style: {
      padding: 0,
      border: 0,
      background: "transparent"
    }
  }), b));
}
const ts = /* @__PURE__ */ l.forwardRef(es);
function rs(e, t) {
  const {
    prefixCls: r,
    rootClassName: n,
    rootStyle: o,
    className: i,
    style: s,
    items: a,
    children: c,
    getDropContainer: u,
    placeholder: p,
    onChange: f,
    overflow: d,
    disabled: h,
    classNames: v = {},
    styles: b = {},
    ...m
  } = e, {
    getPrefixCls: C,
    direction: w
  } = Ve(), E = C("attachment", r), x = To("attachments"), {
    classNames: y,
    styles: S
  } = x, g = l.useRef(null), _ = l.useRef(null);
  l.useImperativeHandle(t, () => ({
    nativeElement: g.current,
    upload: (U) => {
      var z, J;
      const A = (J = (z = _.current) == null ? void 0 : z.nativeElement) == null ? void 0 : J.querySelector('input[type="file"]');
      if (A) {
        const H = new DataTransfer();
        H.items.add(U), A.files = H.files, A.dispatchEvent(new Event("change", {
          bubbles: !0
        }));
      }
    }
  }));
  const [R, k, $] = tn(E), T = ne(k, $), [P, F] = Fo([], {
    value: a
  }), I = Ee((U) => {
    F(U.fileList), f == null || f(U);
  }), j = {
    ...m,
    fileList: P,
    onChange: I
  }, Y = (U) => {
    const A = P.filter((z) => z.uid !== U.uid);
    I({
      file: U,
      fileList: A
    });
  };
  let Z;
  const ue = (U, A, z) => {
    const J = typeof p == "function" ? p(U) : p;
    return /* @__PURE__ */ l.createElement(ts, {
      placeholder: J,
      upload: j,
      prefixCls: E,
      className: ne(y.placeholder, v.placeholder),
      style: {
        ...S.placeholder,
        ...b.placeholder,
        ...A == null ? void 0 : A.style
      },
      ref: z
    });
  };
  if (c)
    Z = /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(Zr, {
      upload: j,
      rootClassName: n,
      ref: _
    }, c), /* @__PURE__ */ l.createElement(ir, {
      getDropContainer: u,
      prefixCls: E,
      className: ne(T, n)
    }, ue("drop")));
  else {
    const U = P.length > 0;
    Z = /* @__PURE__ */ l.createElement("div", {
      className: ne(E, T, {
        [`${E}-rtl`]: w === "rtl"
      }, i, n),
      style: {
        ...o,
        ...s
      },
      dir: w || "ltr",
      ref: g
    }, /* @__PURE__ */ l.createElement(Ji, {
      prefixCls: E,
      items: P,
      onRemove: Y,
      overflow: d,
      upload: j,
      listClassName: ne(y.list, v.list),
      listStyle: {
        ...S.list,
        ...b.list,
        ...!U && {
          display: "none"
        }
      },
      itemClassName: ne(y.item, v.item),
      itemStyle: {
        ...S.item,
        ...b.item
      }
    }), ue("inline", U ? {
      style: {
        display: "none"
      }
    } : {}, _), /* @__PURE__ */ l.createElement(ir, {
      getDropContainer: u || (() => g.current),
      prefixCls: E,
      className: T
    }, ue("drop")));
  }
  return R(/* @__PURE__ */ l.createElement(Me.Provider, {
    value: {
      disabled: h
    }
  }, Z));
}
const on = /* @__PURE__ */ l.forwardRef(rs);
on.FileCard = nn;
function ns(e) {
  return /^(?:async\s+)?(?:function\s*(?:\w*\s*)?\(|\([\w\s,=]*\)\s*=>|\(\{[\w\s,=]*\}\)\s*=>|function\s*\*\s*\w*\s*\()/i.test(e.trim());
}
function os(e, t = !1) {
  try {
    if (hn(e))
      return e;
    if (t && !ns(e))
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
function te(e, t) {
  return Ge(() => os(e, t), [e, t]);
}
function is(e, t) {
  const r = Ge(() => l.Children.toArray(e.originalChildren || e).filter((i) => i.props.node && !i.props.node.ignore && (!i.props.nodeSlotKey || t)).sort((i, s) => {
    if (i.props.node.slotIndex && s.props.node.slotIndex) {
      const a = Te(i.props.node.slotIndex) || 0, c = Te(s.props.node.slotIndex) || 0;
      return a - c === 0 && i.props.node.subSlotIndex && s.props.node.subSlotIndex ? (Te(i.props.node.subSlotIndex) || 0) - (Te(s.props.node.subSlotIndex) || 0) : a - c;
    }
    return 0;
  }).map((i) => i.props.node.target), [e, t]);
  return Eo(r);
}
const ss = ["animationIterationCount", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "lineHeight", "opacity", "order", "orphans", "tabSize", "widows", "zIndex", "zoom", "fontWeight", "letterSpacing", "lineHeight"];
function as(e) {
  return e ? Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return t[r] = ls(r, n), t;
  }, {}) : {};
}
function ls(e, t) {
  return typeof t == "number" && !ss.includes(e) ? t + "px" : t;
}
function Ft(e) {
  const t = [], r = e.cloneNode(!1);
  if (e._reactElement) {
    const o = l.Children.toArray(e._reactElement.props.children).map((i) => {
      if (l.isValidElement(i) && i.props.__slot__) {
        const {
          portals: s,
          clonedElement: a
        } = Ft(i.props.el);
        return l.cloneElement(i, {
          ...i.props,
          el: a,
          children: [...l.Children.toArray(i.props.children), ...s]
        });
      }
      return null;
    });
    return o.originalChildren = e._reactElement.props.children, t.push(Be(l.cloneElement(e._reactElement, {
      ...e._reactElement.props,
      children: o
    }), r)), {
      clonedElement: r,
      portals: t
    };
  }
  Object.keys(e.getEventListeners()).forEach((o) => {
    e.getEventListeners(o).forEach(({
      listener: s,
      type: a,
      useCapture: c
    }) => {
      r.addEventListener(a, s, c);
    });
  });
  const n = Array.from(e.childNodes);
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (i.nodeType === 1) {
      const {
        clonedElement: s,
        portals: a
      } = Ft(i);
      t.push(...a), r.appendChild(s);
    } else i.nodeType === 3 && r.appendChild(i.cloneNode());
  }
  return {
    clonedElement: r,
    portals: t
  };
}
function cs(e, t) {
  e && (typeof e == "function" ? e(t) : e.current = t);
}
const Er = un(({
  slot: e,
  clone: t,
  className: r,
  style: n,
  observeAttributes: o
}, i) => {
  const s = he(), [a, c] = At([]), {
    forceClone: u
  } = gn(), p = u ? !0 : t;
  return be(() => {
    var b;
    if (!s.current || !e)
      return;
    let f = e;
    function d() {
      let m = f;
      if (f.tagName.toLowerCase() === "svelte-slot" && f.children.length === 1 && f.children[0] && (m = f.children[0], m.tagName.toLowerCase() === "react-portal-target" && m.children[0] && (m = m.children[0])), cs(i, m), r && m.classList.add(...r.split(" ")), n) {
        const C = as(n);
        Object.keys(C).forEach((w) => {
          m.style[w] = C[w];
        });
      }
    }
    let h = null, v = null;
    if (p && window.MutationObserver) {
      let m = function() {
        var x, y, S;
        (x = s.current) != null && x.contains(f) && ((y = s.current) == null || y.removeChild(f));
        const {
          portals: w,
          clonedElement: E
        } = Ft(e);
        f = E, c(w), f.style.display = "contents", v && clearTimeout(v), v = setTimeout(() => {
          d();
        }, 50), (S = s.current) == null || S.appendChild(f);
      };
      m();
      const C = Kn(() => {
        m(), h == null || h.disconnect(), h == null || h.observe(e, {
          childList: !0,
          subtree: !0
          // attributes: observeAttributes ?? (forceClone ? true : false),
        });
      }, 50);
      h = new window.MutationObserver(C), h.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    } else
      f.style.display = "contents", d(), (b = s.current) == null || b.appendChild(f);
    return () => {
      var m, C;
      f.style.display = "", (m = s.current) != null && m.contains(f) && ((C = s.current) == null || C.removeChild(f)), h == null || h.disconnect();
    };
  }, [e, p, r, n, i, o, u]), l.createElement("react-child", {
    ref: s,
    style: {
      display: "contents"
    }
  }, ...a);
}), us = ({
  children: e,
  ...t
}) => /* @__PURE__ */ oe.jsx(oe.Fragment, {
  children: e(t)
});
function fs(e) {
  return l.createElement(us, {
    children: e
  });
}
function Cr(e, t) {
  return e ? t != null && t.forceClone || t != null && t.params ? fs((r) => /* @__PURE__ */ oe.jsx(vn, {
    forceClone: t == null ? void 0 : t.forceClone,
    params: t == null ? void 0 : t.params,
    children: /* @__PURE__ */ oe.jsx(Er, {
      slot: e,
      clone: t == null ? void 0 : t.clone,
      ...r
    })
  })) : /* @__PURE__ */ oe.jsx(Er, {
    slot: e,
    clone: t == null ? void 0 : t.clone
  }) : null;
}
function pe({
  key: e,
  slots: t,
  targets: r
}, n) {
  return t[e] ? (...o) => r ? r.map((i, s) => /* @__PURE__ */ oe.jsx(l.Fragment, {
    children: Cr(i, {
      clone: !0,
      params: o,
      forceClone: !0
    })
  }, s)) : /* @__PURE__ */ oe.jsx(oe.Fragment, {
    children: Cr(t[e], {
      clone: !0,
      params: o,
      forceClone: !0
    })
  }) : void 0;
}
const ds = (e) => !!e.name;
function _r(e) {
  return typeof e == "object" && e !== null ? e : {};
}
const hs = xo(({
  slots: e,
  upload: t,
  showUploadList: r,
  progress: n,
  beforeUpload: o,
  customRequest: i,
  previewFile: s,
  isImageUrl: a,
  itemRender: c,
  iconRender: u,
  data: p,
  onChange: f,
  onValueChange: d,
  onRemove: h,
  items: v,
  setSlotParams: b,
  placeholder: m,
  getDropContainer: C,
  children: w,
  ...E
}) => {
  const x = e["showUploadList.downloadIcon"] || e["showUploadList.removeIcon"] || e["showUploadList.previewIcon"] || e["showUploadList.extra"] || typeof r == "object", y = _r(r), S = e["placeholder.title"] || e["placeholder.description"] || e["placeholder.icon"] || typeof m == "object", g = _r(m), _ = te(y.showPreviewIcon), R = te(y.showRemoveIcon), k = te(y.showDownloadIcon), $ = te(o), T = te(i), P = te(n == null ? void 0 : n.format), F = te(s), I = te(a), j = te(c), Y = te(u), Z = te(m, !0), ue = te(C), U = te(p), A = he(!1), [z, J] = At(v);
  be(() => {
    J(v);
  }, [v]);
  const H = Ge(() => (z == null ? void 0 : z.map((N) => ds(N) ? N : {
    ...N,
    name: N.orig_name || N.path,
    uid: N.uid || N.url || N.path,
    status: "done"
  })) || [], [z]), fe = is(w);
  return /* @__PURE__ */ oe.jsxs(oe.Fragment, {
    children: [/* @__PURE__ */ oe.jsx("div", {
      style: {
        display: "none"
      },
      children: fe.length > 0 ? null : w
    }), /* @__PURE__ */ oe.jsx(on, {
      ...E,
      getDropContainer: ue,
      placeholder: e.placeholder ? pe({
        slots: e,
        key: "placeholder"
      }) : S ? (...N) => {
        var B, ee, V;
        return {
          ...g,
          icon: e["placeholder.icon"] ? (B = pe({
            slots: e,
            key: "placeholder.icon"
          })) == null ? void 0 : B(...N) : g.icon,
          title: e["placeholder.title"] ? (ee = pe({
            slots: e,
            key: "placeholder.title"
          })) == null ? void 0 : ee(...N) : g.title,
          description: e["placeholder.description"] ? (V = pe({
            slots: e,
            key: "placeholder.description"
          })) == null ? void 0 : V(...N) : g.description
        };
      } : Z || m,
      items: H,
      data: U || p,
      previewFile: F,
      isImageUrl: I,
      itemRender: e.itemRender ? pe({
        slots: e,
        key: "itemRender"
      }) : j,
      iconRender: e.iconRender ? pe({
        slots: e,
        key: "iconRender"
      }) : Y,
      onRemove: (N) => {
        if (A.current)
          return;
        h == null || h(N);
        const B = H.findIndex((V) => V.uid === N.uid), ee = z.slice();
        ee.splice(B, 1), d == null || d(ee), f == null || f(ee.map((V) => V.path));
      },
      onChange: async (N) => {
        const B = N.file, ee = N.fileList;
        if (H.find((V) => V.uid === B.uid)) {
          if (A.current)
            return;
          h == null || h(B);
          const V = H.findIndex((ae) => ae.uid === B.uid), se = z.slice();
          se.splice(V, 1), d == null || d(se), f == null || f(se.map((ae) => ae.path));
        } else {
          if ($ && !await $(B, ee) || A.current)
            return !1;
          A.current = !0;
          const V = ee.filter((X) => X.status !== "done");
          J((X) => [...X, ...V.map((le) => ({
            ...le,
            size: le.size,
            uid: le.uid,
            name: le.name,
            status: "uploading"
          }))]);
          const se = (await t(V.map((X) => X.originFileObj))).filter((X) => X), ae = [...z.filter((X) => !se.some((le) => le.uid === X.uid)), ...se];
          A.current = !1, d == null || d(ae), f == null || f(ae.map((X) => X.path));
        }
      },
      customRequest: T || Xn,
      progress: n && {
        ...n,
        format: P
      },
      showUploadList: x ? {
        ...y,
        showDownloadIcon: k || y.showDownloadIcon,
        showRemoveIcon: R || y.showRemoveIcon,
        showPreviewIcon: _ || y.showPreviewIcon,
        downloadIcon: e["showUploadList.downloadIcon"] ? pe({
          slots: e,
          key: "showUploadList.downloadIcon"
        }) : y.downloadIcon,
        removeIcon: e["showUploadList.removeIcon"] ? pe({
          slots: e,
          key: "showUploadList.removeIcon"
        }) : y.removeIcon,
        previewIcon: e["showUploadList.previewIcon"] ? pe({
          slots: e,
          key: "showUploadList.previewIcon"
        }) : y.previewIcon,
        extra: e["showUploadList.extra"] ? pe({
          slots: e,
          key: "showUploadList.extra"
        }) : y.extra
      } : r,
      children: fe.length > 0 ? w : void 0
    })]
  });
});
export {
  hs as Attachments,
  hs as default
};
