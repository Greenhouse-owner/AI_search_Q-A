var Ft = (e) => {
  throw TypeError(e);
};
var kt = (e, t, n) => t.has(e) || Ft("Cannot " + n);
var fe = (e, t, n) => (kt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), jt = (e, t, n) => t.has(e) ? Ft("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Dt = (e, t, n, r) => (kt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import { w as je, g as nn, c as q } from "./Index-Dqf7oHDE.js";
const M = window.ms_globals.React, a = window.ms_globals.React, en = window.ms_globals.React.isValidElement, ce = window.ms_globals.React.useRef, tn = window.ms_globals.React.useLayoutEffect, ke = window.ms_globals.React.useEffect, rn = window.ms_globals.React.useMemo, zt = window.ms_globals.ReactDOM, vt = window.ms_globals.ReactDOM.createPortal, on = window.ms_globals.antd.ConfigProvider, yr = window.ms_globals.antd.Upload, He = window.ms_globals.antd.theme, sn = window.ms_globals.antd.Progress, st = window.ms_globals.antd.Button, an = window.ms_globals.antd.Flex, at = window.ms_globals.antd.Typography, ln = window.ms_globals.antdIcons.FileTextFilled, cn = window.ms_globals.antdIcons.CloseCircleFilled, un = window.ms_globals.antdIcons.FileExcelFilled, fn = window.ms_globals.antdIcons.FileImageFilled, dn = window.ms_globals.antdIcons.FileMarkdownFilled, pn = window.ms_globals.antdIcons.FilePdfFilled, gn = window.ms_globals.antdIcons.FilePptFilled, mn = window.ms_globals.antdIcons.FileWordFilled, hn = window.ms_globals.antdIcons.FileZipFilled, vn = window.ms_globals.antdIcons.PlusOutlined, bn = window.ms_globals.antdIcons.LeftOutlined, yn = window.ms_globals.antdIcons.RightOutlined, Ht = window.ms_globals.antdCssinjs.unit, lt = window.ms_globals.antdCssinjs.token2CSSVar, Nt = window.ms_globals.antdCssinjs.useStyleRegister, Sn = window.ms_globals.antdCssinjs.useCSSVarRegister, xn = window.ms_globals.antdCssinjs.createTheme, wn = window.ms_globals.antdCssinjs.useCacheToken;
var Sr = {
  exports: {}
}, Ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En = a, Cn = Symbol.for("react.element"), _n = Symbol.for("react.fragment"), Ln = Object.prototype.hasOwnProperty, Tn = En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rn = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function xr(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Ln.call(t, r) && !Rn.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Cn,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Tn.current
  };
}
Ve.Fragment = _n;
Ve.jsx = xr;
Ve.jsxs = xr;
Sr.exports = Ve;
var Mn = Sr.exports;
const {
  SvelteComponent: Pn,
  assign: Bt,
  binding_callbacks: Vt,
  check_outros: $n,
  children: wr,
  claim_element: Er,
  claim_space: On,
  component_subscribe: Xt,
  compute_slots: In,
  create_slot: An,
  detach: de,
  element: Cr,
  empty: Ut,
  exclude_internal_props: Wt,
  get_all_dirty_from_scope: Fn,
  get_slot_changes: kn,
  group_outros: jn,
  init: Dn,
  insert_hydration: De,
  safe_not_equal: zn,
  set_custom_element_data: _r,
  space: Hn,
  transition_in: ze,
  transition_out: bt,
  update_slot_base: Nn
} = window.__gradio__svelte__internal, {
  beforeUpdate: Bn,
  getContext: Vn,
  onDestroy: Xn,
  setContext: Un
} = window.__gradio__svelte__internal;
function Gt(e) {
  let t, n;
  const r = (
    /*#slots*/
    e[7].default
  ), o = An(
    r,
    e,
    /*$$scope*/
    e[6],
    null
  );
  return {
    c() {
      t = Cr("svelte-slot"), o && o.c(), this.h();
    },
    l(i) {
      t = Er(i, "SVELTE-SLOT", {
        class: !0
      });
      var s = wr(t);
      o && o.l(s), s.forEach(de), this.h();
    },
    h() {
      _r(t, "class", "svelte-1rt0kpf");
    },
    m(i, s) {
      De(i, t, s), o && o.m(t, null), e[9](t), n = !0;
    },
    p(i, s) {
      o && o.p && (!n || s & /*$$scope*/
      64) && Nn(
        o,
        r,
        i,
        /*$$scope*/
        i[6],
        n ? kn(
          r,
          /*$$scope*/
          i[6],
          s,
          null
        ) : Fn(
          /*$$scope*/
          i[6]
        ),
        null
      );
    },
    i(i) {
      n || (ze(o, i), n = !0);
    },
    o(i) {
      bt(o, i), n = !1;
    },
    d(i) {
      i && de(t), o && o.d(i), e[9](null);
    }
  };
}
function Wn(e) {
  let t, n, r, o, i = (
    /*$$slots*/
    e[4].default && Gt(e)
  );
  return {
    c() {
      t = Cr("react-portal-target"), n = Hn(), i && i.c(), r = Ut(), this.h();
    },
    l(s) {
      t = Er(s, "REACT-PORTAL-TARGET", {
        class: !0
      }), wr(t).forEach(de), n = On(s), i && i.l(s), r = Ut(), this.h();
    },
    h() {
      _r(t, "class", "svelte-1rt0kpf");
    },
    m(s, l) {
      De(s, t, l), e[8](t), De(s, n, l), i && i.m(s, l), De(s, r, l), o = !0;
    },
    p(s, [l]) {
      /*$$slots*/
      s[4].default ? i ? (i.p(s, l), l & /*$$slots*/
      16 && ze(i, 1)) : (i = Gt(s), i.c(), ze(i, 1), i.m(r.parentNode, r)) : i && (jn(), bt(i, 1, 1, () => {
        i = null;
      }), $n());
    },
    i(s) {
      o || (ze(i), o = !0);
    },
    o(s) {
      bt(i), o = !1;
    },
    d(s) {
      s && (de(t), de(n), de(r)), e[8](null), i && i.d(s);
    }
  };
}
function Kt(e) {
  const {
    svelteInit: t,
    ...n
  } = e;
  return n;
}
function Gn(e, t, n) {
  let r, o, {
    $$slots: i = {},
    $$scope: s
  } = t;
  const l = In(i);
  let {
    svelteInit: u
  } = t;
  const c = je(Kt(t)), f = je();
  Xt(e, f, (b) => n(0, r = b));
  const p = je();
  Xt(e, p, (b) => n(1, o = b));
  const d = [], m = Vn("$$ms-gr-react-wrapper"), {
    slotKey: v,
    slotIndex: h,
    subSlotIndex: g
  } = nn() || {}, $ = u({
    parent: m,
    props: c,
    target: f,
    slot: p,
    slotKey: v,
    slotIndex: h,
    subSlotIndex: g,
    onDestroy(b) {
      d.push(b);
    }
  });
  Un("$$ms-gr-react-wrapper", $), Bn(() => {
    c.set(Kt(t));
  }), Xn(() => {
    d.forEach((b) => b());
  });
  function C(b) {
    Vt[b ? "unshift" : "push"](() => {
      r = b, f.set(r);
    });
  }
  function S(b) {
    Vt[b ? "unshift" : "push"](() => {
      o = b, p.set(o);
    });
  }
  return e.$$set = (b) => {
    n(17, t = Bt(Bt({}, t), Wt(b))), "svelteInit" in b && n(5, u = b.svelteInit), "$$scope" in b && n(6, s = b.$$scope);
  }, t = Wt(t), [r, o, f, p, l, u, s, i, C, S];
}
class Kn extends Pn {
  constructor(t) {
    super(), Dn(this, t, Gn, Wn, zn, {
      svelteInit: 5
    });
  }
}
const {
  SvelteComponent: Fi
} = window.__gradio__svelte__internal, qt = window.ms_globals.rerender, ct = window.ms_globals.tree;
function qn(e, t = {}) {
  function n(r) {
    const o = je(), i = new Kn({
      ...r,
      props: {
        svelteInit(s) {
          window.ms_globals.autokey += 1;
          const l = {
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
          }, u = s.parent ?? ct;
          return u.nodes = [...u.nodes, l], qt({
            createPortal: vt,
            node: ct
          }), s.onDestroy(() => {
            u.nodes = u.nodes.filter((c) => c.svelteInstance !== o), qt({
              createPortal: vt,
              node: ct
            });
          }), l;
        },
        ...r.props
      }
    });
    return o.set(i), i;
  }
  return new Promise((r) => {
    window.ms_globals.initializePromise.then(() => {
      r(n);
    });
  });
}
const Zn = "1.0.5", Qn = /* @__PURE__ */ a.createContext({}), Yn = {
  classNames: {},
  styles: {},
  className: "",
  style: {}
}, Jn = (e) => {
  const t = a.useContext(Qn);
  return a.useMemo(() => ({
    ...Yn,
    ...t[e]
  }), [t[e]]);
};
function ye() {
  return ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ye.apply(null, arguments);
}
function Ne() {
  const {
    getPrefixCls: e,
    direction: t,
    csp: n,
    iconPrefixCls: r,
    theme: o
  } = a.useContext(on.ConfigContext);
  return {
    theme: o,
    getPrefixCls: e,
    direction: t,
    csp: n,
    iconPrefixCls: r
  };
}
function me(e) {
  var t = M.useRef();
  t.current = e;
  var n = M.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function eo(e) {
  if (Array.isArray(e)) return e;
}
function to(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, s, l = [], u = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        u = !1;
      } else for (; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = !0) ;
    } catch (f) {
      c = !0, o = f;
    } finally {
      try {
        if (!u && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function Zt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ro(e, t) {
  if (e) {
    if (typeof e == "string") return Zt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Zt(e, t) : void 0;
  }
}
function no() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V(e, t) {
  return eo(e) || to(e, t) || ro(e, t) || no();
}
function Xe() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Qt = Xe() ? M.useLayoutEffect : M.useEffect, oo = function(t, n) {
  var r = M.useRef(!0);
  Qt(function() {
    return t(r.current);
  }, n), Qt(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Yt = function(t, n) {
  oo(function(r) {
    if (!r)
      return t();
  }, n);
};
function Se(e) {
  var t = M.useRef(!1), n = M.useState(e), r = V(n, 2), o = r[0], i = r[1];
  M.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function s(l, u) {
    u && t.current || i(l);
  }
  return [o, s];
}
function ut(e) {
  return e !== void 0;
}
function io(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, i = n.onChange, s = n.postState, l = Se(function() {
    return ut(o) ? o : ut(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), u = V(l, 2), c = u[0], f = u[1], p = o !== void 0 ? o : c, d = s ? s(p) : p, m = me(i), v = Se([p]), h = V(v, 2), g = h[0], $ = h[1];
  Yt(function() {
    var S = g[0];
    c !== S && m(c, S);
  }, [g]), Yt(function() {
    ut(o) || f(o);
  }, [o]);
  var C = me(function(S, b) {
    f(S, b), $([p], b);
  });
  return [d, C];
}
function N(e) {
  "@babel/helpers - typeof";
  return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, N(e);
}
var Lr = {
  exports: {}
}, P = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt = Symbol.for("react.element"), Mt = Symbol.for("react.portal"), Ue = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), Ge = Symbol.for("react.profiler"), Ke = Symbol.for("react.provider"), qe = Symbol.for("react.context"), so = Symbol.for("react.server_context"), Ze = Symbol.for("react.forward_ref"), Qe = Symbol.for("react.suspense"), Ye = Symbol.for("react.suspense_list"), Je = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), ao = Symbol.for("react.offscreen"), Tr;
Tr = Symbol.for("react.module.reference");
function Z(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Rt:
        switch (e = e.type, e) {
          case Ue:
          case Ge:
          case We:
          case Qe:
          case Ye:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case so:
              case qe:
              case Ze:
              case et:
              case Je:
              case Ke:
                return e;
              default:
                return t;
            }
        }
      case Mt:
        return t;
    }
  }
}
P.ContextConsumer = qe;
P.ContextProvider = Ke;
P.Element = Rt;
P.ForwardRef = Ze;
P.Fragment = Ue;
P.Lazy = et;
P.Memo = Je;
P.Portal = Mt;
P.Profiler = Ge;
P.StrictMode = We;
P.Suspense = Qe;
P.SuspenseList = Ye;
P.isAsyncMode = function() {
  return !1;
};
P.isConcurrentMode = function() {
  return !1;
};
P.isContextConsumer = function(e) {
  return Z(e) === qe;
};
P.isContextProvider = function(e) {
  return Z(e) === Ke;
};
P.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rt;
};
P.isForwardRef = function(e) {
  return Z(e) === Ze;
};
P.isFragment = function(e) {
  return Z(e) === Ue;
};
P.isLazy = function(e) {
  return Z(e) === et;
};
P.isMemo = function(e) {
  return Z(e) === Je;
};
P.isPortal = function(e) {
  return Z(e) === Mt;
};
P.isProfiler = function(e) {
  return Z(e) === Ge;
};
P.isStrictMode = function(e) {
  return Z(e) === We;
};
P.isSuspense = function(e) {
  return Z(e) === Qe;
};
P.isSuspenseList = function(e) {
  return Z(e) === Ye;
};
P.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ue || e === Ge || e === We || e === Qe || e === Ye || e === ao || typeof e == "object" && e !== null && (e.$$typeof === et || e.$$typeof === Je || e.$$typeof === Ke || e.$$typeof === qe || e.$$typeof === Ze || e.$$typeof === Tr || e.getModuleId !== void 0);
};
P.typeOf = Z;
Lr.exports = P;
var ft = Lr.exports, lo = Symbol.for("react.element"), co = Symbol.for("react.transitional.element"), uo = Symbol.for("react.fragment");
function fo(e) {
  return (
    // Base object type
    e && N(e) === "object" && // React Element type
    (e.$$typeof === lo || e.$$typeof === co) && // React Fragment type
    e.type === uo
  );
}
var po = function(t, n) {
  typeof t == "function" ? t(n) : N(t) === "object" && t && "current" in t && (t.current = n);
}, go = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (Rr(t) && t.props.propertyIsEnumerable("ref"))
    return !0;
  var o = ft.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== ft.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== ft.ForwardRef);
};
function Rr(e) {
  return /* @__PURE__ */ en(e) && !fo(e);
}
var mo = function(t) {
  if (t && Rr(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function ho(e, t) {
  if (N(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (N(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mr(e) {
  var t = ho(e, "string");
  return N(t) == "symbol" ? t : t + "";
}
function I(e, t, n) {
  return (t = Mr(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Jt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jt(Object(n), !0).forEach(function(r) {
      I(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
const we = /* @__PURE__ */ a.createContext(null);
function er(e) {
  const {
    getDropContainer: t,
    className: n,
    prefixCls: r,
    children: o
  } = e, {
    disabled: i
  } = a.useContext(we), [s, l] = a.useState(), [u, c] = a.useState(null);
  if (a.useEffect(() => {
    const d = t == null ? void 0 : t();
    s !== d && l(d);
  }, [t]), a.useEffect(() => {
    if (s) {
      const d = () => {
        c(!0);
      }, m = (g) => {
        g.preventDefault();
      }, v = (g) => {
        g.relatedTarget || c(!1);
      }, h = (g) => {
        c(!1), g.preventDefault();
      };
      return document.addEventListener("dragenter", d), document.addEventListener("dragover", m), document.addEventListener("dragleave", v), document.addEventListener("drop", h), () => {
        document.removeEventListener("dragenter", d), document.removeEventListener("dragover", m), document.removeEventListener("dragleave", v), document.removeEventListener("drop", h);
      };
    }
  }, [!!s]), !(t && s && !i))
    return null;
  const p = `${r}-drop-area`;
  return /* @__PURE__ */ vt(/* @__PURE__ */ a.createElement("div", {
    className: q(p, n, {
      [`${p}-on-body`]: s.tagName === "BODY"
    }),
    style: {
      display: u ? "block" : "none"
    }
  }, o), s);
}
function tr(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function vo(e) {
  return e && N(e) === "object" && tr(e.nativeElement) ? e.nativeElement : tr(e) ? e : null;
}
function bo(e) {
  var t = vo(e);
  if (t)
    return t;
  if (e instanceof a.Component) {
    var n;
    return (n = zt.findDOMNode) === null || n === void 0 ? void 0 : n.call(zt, e);
  }
  return null;
}
function yo(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function rr(e, t) {
  if (e == null) return {};
  var n, r, o = yo(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var So = /* @__PURE__ */ M.createContext({});
function he(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function nr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Mr(r.key), r);
  }
}
function ve(e, t, n) {
  return t && nr(e.prototype, t), n && nr(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function yt(e, t) {
  return yt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, yt(e, t);
}
function tt(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && yt(e, t);
}
function Be(e) {
  return Be = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Be(e);
}
function Pr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Pr = function() {
    return !!e;
  })();
}
function ue(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xo(e, t) {
  if (t && (N(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ue(e);
}
function rt(e) {
  var t = Pr();
  return function() {
    var n, r = Be(e);
    if (t) {
      var o = Be(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return xo(this, n);
  };
}
var wo = /* @__PURE__ */ function(e) {
  tt(n, e);
  var t = rt(n);
  function n() {
    return he(this, n), t.apply(this, arguments);
  }
  return ve(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(M.Component);
function Eo(e) {
  var t = M.useReducer(function(l) {
    return l + 1;
  }, 0), n = V(t, 2), r = n[1], o = M.useRef(e), i = me(function() {
    return o.current;
  }), s = me(function(l) {
    o.current = typeof l == "function" ? l(o.current) : l, r();
  });
  return [i, s];
}
var ie = "none", Pe = "appear", $e = "enter", Oe = "leave", or = "none", Y = "prepare", pe = "start", ge = "active", Pt = "end", $r = "prepared";
function ir(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Co(e, t) {
  var n = {
    animationend: ir("Animation", "AnimationEnd"),
    transitionend: ir("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var _o = Co(Xe(), typeof window < "u" ? window : {}), Or = {};
if (Xe()) {
  var Lo = document.createElement("div");
  Or = Lo.style;
}
var Ie = {};
function Ir(e) {
  if (Ie[e])
    return Ie[e];
  var t = _o[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Or)
        return Ie[e] = t[i], Ie[e];
    }
  return "";
}
var Ar = Ir("animationend"), Fr = Ir("transitionend"), kr = !!(Ar && Fr), sr = Ar || "animationend", ar = Fr || "transitionend";
function lr(e, t) {
  if (!e) return null;
  if (N(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const To = function(e) {
  var t = ce();
  function n(o) {
    o && (o.removeEventListener(ar, e), o.removeEventListener(sr, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(ar, e), o.addEventListener(sr, e), t.current = o);
  }
  return M.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var jr = Xe() ? tn : ke, Dr = function(t) {
  return +setTimeout(t, 16);
}, zr = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Dr = function(t) {
  return window.requestAnimationFrame(t);
}, zr = function(t) {
  return window.cancelAnimationFrame(t);
});
var cr = 0, $t = /* @__PURE__ */ new Map();
function Hr(e) {
  $t.delete(e);
}
var St = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  cr += 1;
  var r = cr;
  function o(i) {
    if (i === 0)
      Hr(r), t();
    else {
      var s = Dr(function() {
        o(i - 1);
      });
      $t.set(r, s);
    }
  }
  return o(n), r;
};
St.cancel = function(e) {
  var t = $t.get(e);
  return Hr(e), zr(t);
};
const Ro = function() {
  var e = M.useRef(null);
  function t() {
    St.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = St(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : n(r, o - 1);
    });
    e.current = i;
  }
  return M.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var Mo = [Y, pe, ge, Pt], Po = [Y, $r], Nr = !1, $o = !0;
function Br(e) {
  return e === ge || e === Pt;
}
const Oo = function(e, t, n) {
  var r = Se(or), o = V(r, 2), i = o[0], s = o[1], l = Ro(), u = V(l, 2), c = u[0], f = u[1];
  function p() {
    s(Y, !0);
  }
  var d = t ? Po : Mo;
  return jr(function() {
    if (i !== or && i !== Pt) {
      var m = d.indexOf(i), v = d[m + 1], h = n(i);
      h === Nr ? s(v, !0) : v && c(function(g) {
        function $() {
          g.isCanceled() || s(v, !0);
        }
        h === !0 ? $() : Promise.resolve(h).then($);
      });
    }
  }, [e, i]), M.useEffect(function() {
    return function() {
      f();
    };
  }, []), [p, i];
};
function Io(e, t, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, l = s === void 0 ? !0 : s, u = r.motionLeave, c = u === void 0 ? !0 : u, f = r.motionDeadline, p = r.motionLeaveImmediately, d = r.onAppearPrepare, m = r.onEnterPrepare, v = r.onLeavePrepare, h = r.onAppearStart, g = r.onEnterStart, $ = r.onLeaveStart, C = r.onAppearActive, S = r.onEnterActive, b = r.onLeaveActive, w = r.onAppearEnd, R = r.onEnterEnd, y = r.onLeaveEnd, E = r.onVisibleChanged, A = Se(), F = V(A, 2), k = F[0], _ = F[1], T = Eo(ie), O = V(T, 2), L = O[0], j = O[1], Q = Se(null), G = V(Q, 2), oe = G[0], H = G[1], D = L(), U = ce(!1), J = ce(null);
  function X() {
    return n();
  }
  var se = ce(!1);
  function Ee() {
    j(ie), H(null, !0);
  }
  var re = me(function(W) {
    var B = L();
    if (B !== ie) {
      var ee = X();
      if (!(W && !W.deadline && W.target !== ee)) {
        var Re = se.current, Me;
        B === Pe && Re ? Me = w == null ? void 0 : w(ee, W) : B === $e && Re ? Me = R == null ? void 0 : R(ee, W) : B === Oe && Re && (Me = y == null ? void 0 : y(ee, W)), Re && Me !== !1 && Ee();
      }
    }
  }), nt = To(re), Ce = V(nt, 1), _e = Ce[0], Le = function(B) {
    switch (B) {
      case Pe:
        return I(I(I({}, Y, d), pe, h), ge, C);
      case $e:
        return I(I(I({}, Y, m), pe, g), ge, S);
      case Oe:
        return I(I(I({}, Y, v), pe, $), ge, b);
      default:
        return {};
    }
  }, ae = M.useMemo(function() {
    return Le(D);
  }, [D]), Te = Oo(D, !e, function(W) {
    if (W === Y) {
      var B = ae[Y];
      return B ? B(X()) : Nr;
    }
    if (le in ae) {
      var ee;
      H(((ee = ae[le]) === null || ee === void 0 ? void 0 : ee.call(ae, X(), null)) || null);
    }
    return le === ge && D !== ie && (_e(X()), f > 0 && (clearTimeout(J.current), J.current = setTimeout(function() {
      re({
        deadline: !0
      });
    }, f))), le === $r && Ee(), $o;
  }), It = V(Te, 2), Yr = It[0], le = It[1], Jr = Br(le);
  se.current = Jr;
  var At = ce(null);
  jr(function() {
    if (!(U.current && At.current === t)) {
      _(t);
      var W = U.current;
      U.current = !0;
      var B;
      !W && t && l && (B = Pe), W && t && i && (B = $e), (W && !t && c || !W && p && !t && c) && (B = Oe);
      var ee = Le(B);
      B && (e || ee[Y]) ? (j(B), Yr()) : j(ie), At.current = t;
    }
  }, [t]), ke(function() {
    // Cancel appear
    (D === Pe && !l || // Cancel enter
    D === $e && !i || // Cancel leave
    D === Oe && !c) && j(ie);
  }, [l, i, c]), ke(function() {
    return function() {
      U.current = !1, clearTimeout(J.current);
    };
  }, []);
  var ot = M.useRef(!1);
  ke(function() {
    k && (ot.current = !0), k !== void 0 && D === ie && ((ot.current || k) && (E == null || E(k)), ot.current = !0);
  }, [k, D]);
  var it = oe;
  return ae[Y] && le === pe && (it = x({
    transition: "none"
  }, it)), [D, le, it, k ?? t];
}
function Ao(e) {
  var t = e;
  N(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ M.forwardRef(function(o, i) {
    var s = o.visible, l = s === void 0 ? !0 : s, u = o.removeOnLeave, c = u === void 0 ? !0 : u, f = o.forceRender, p = o.children, d = o.motionName, m = o.leavedClassName, v = o.eventProps, h = M.useContext(So), g = h.motion, $ = n(o, g), C = ce(), S = ce();
    function b() {
      try {
        return C.current instanceof HTMLElement ? C.current : bo(S.current);
      } catch {
        return null;
      }
    }
    var w = Io($, l, b, o), R = V(w, 4), y = R[0], E = R[1], A = R[2], F = R[3], k = M.useRef(F);
    F && (k.current = !0);
    var _ = M.useCallback(function(G) {
      C.current = G, po(i, G);
    }, [i]), T, O = x(x({}, v), {}, {
      visible: l
    });
    if (!p)
      T = null;
    else if (y === ie)
      F ? T = p(x({}, O), _) : !c && k.current && m ? T = p(x(x({}, O), {}, {
        className: m
      }), _) : f || !c && !m ? T = p(x(x({}, O), {}, {
        style: {
          display: "none"
        }
      }), _) : T = null;
    else {
      var L;
      E === Y ? L = "prepare" : Br(E) ? L = "active" : E === pe && (L = "start");
      var j = lr(d, "".concat(y, "-").concat(L));
      T = p(x(x({}, O), {}, {
        className: q(lr(d, y), I(I({}, j, j && L), d, typeof d == "string")),
        style: A
      }), _);
    }
    if (/* @__PURE__ */ M.isValidElement(T) && go(T)) {
      var Q = mo(T);
      Q || (T = /* @__PURE__ */ M.cloneElement(T, {
        ref: _
      }));
    }
    return /* @__PURE__ */ M.createElement(wo, {
      ref: S
    }, T);
  });
  return r.displayName = "CSSMotion", r;
}
const Fo = Ao(kr);
var xt = "add", wt = "keep", Et = "remove", dt = "removed";
function ko(e) {
  var t;
  return e && N(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, x(x({}, t), {}, {
    key: String(t.key)
  });
}
function Ct() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(ko);
}
function jo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, i = Ct(e), s = Ct(t);
  i.forEach(function(c) {
    for (var f = !1, p = r; p < o; p += 1) {
      var d = s[p];
      if (d.key === c.key) {
        r < p && (n = n.concat(s.slice(r, p).map(function(m) {
          return x(x({}, m), {}, {
            status: xt
          });
        })), r = p), n.push(x(x({}, d), {}, {
          status: wt
        })), r += 1, f = !0;
        break;
      }
    }
    f || n.push(x(x({}, c), {}, {
      status: Et
    }));
  }), r < o && (n = n.concat(s.slice(r).map(function(c) {
    return x(x({}, c), {}, {
      status: xt
    });
  })));
  var l = {};
  n.forEach(function(c) {
    var f = c.key;
    l[f] = (l[f] || 0) + 1;
  });
  var u = Object.keys(l).filter(function(c) {
    return l[c] > 1;
  });
  return u.forEach(function(c) {
    n = n.filter(function(f) {
      var p = f.key, d = f.status;
      return p !== c || d !== Et;
    }), n.forEach(function(f) {
      f.key === c && (f.status = wt);
    });
  }), n;
}
var Do = ["component", "children", "onVisibleChanged", "onAllRemoved"], zo = ["status"], Ho = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function No(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fo, n = /* @__PURE__ */ function(r) {
    tt(i, r);
    var o = rt(i);
    function i() {
      var s;
      he(this, i);
      for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
        u[c] = arguments[c];
      return s = o.call.apply(o, [this].concat(u)), I(ue(s), "state", {
        keyEntities: []
      }), I(ue(s), "removeKey", function(f) {
        s.setState(function(p) {
          var d = p.keyEntities.map(function(m) {
            return m.key !== f ? m : x(x({}, m), {}, {
              status: dt
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var p = s.state.keyEntities, d = p.filter(function(m) {
            var v = m.status;
            return v !== dt;
          }).length;
          d === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return ve(i, [{
      key: "render",
      value: function() {
        var l = this, u = this.state.keyEntities, c = this.props, f = c.component, p = c.children, d = c.onVisibleChanged;
        c.onAllRemoved;
        var m = rr(c, Do), v = f || M.Fragment, h = {};
        return Ho.forEach(function(g) {
          h[g] = m[g], delete m[g];
        }), delete m.keys, /* @__PURE__ */ M.createElement(v, m, u.map(function(g, $) {
          var C = g.status, S = rr(g, zo), b = C === xt || C === wt;
          return /* @__PURE__ */ M.createElement(t, ye({}, h, {
            key: S.key,
            visible: b,
            eventProps: S,
            onVisibleChanged: function(R) {
              d == null || d(R, {
                key: S.key
              }), R || l.removeKey(S.key);
            }
          }), function(w, R) {
            return p(x(x({}, w), {}, {
              index: $
            }), R);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, u) {
        var c = l.keys, f = u.keyEntities, p = Ct(c), d = jo(f, p);
        return {
          keyEntities: d.filter(function(m) {
            var v = f.find(function(h) {
              var g = h.key;
              return m.key === g;
            });
            return !(v && v.status === dt && m.status === Et);
          })
        };
      }
    }]), i;
  }(M.Component);
  return I(n, "defaultProps", {
    component: "div"
  }), n;
}
const Bo = No(kr);
function Vo(e, t) {
  const {
    children: n,
    upload: r,
    rootClassName: o
  } = e, i = a.useRef(null);
  return a.useImperativeHandle(t, () => i.current), /* @__PURE__ */ a.createElement(yr, ye({}, r, {
    showUploadList: !1,
    rootClassName: o,
    ref: i
  }), n);
}
const Vr = /* @__PURE__ */ a.forwardRef(Vo);
var Xr = /* @__PURE__ */ ve(function e() {
  he(this, e);
}), Ur = "CALC_UNIT", Xo = new RegExp(Ur, "g");
function pt(e) {
  return typeof e == "number" ? "".concat(e).concat(Ur) : e;
}
var Uo = /* @__PURE__ */ function(e) {
  tt(n, e);
  var t = rt(n);
  function n(r, o) {
    var i;
    he(this, n), i = t.call(this), I(ue(i), "result", ""), I(ue(i), "unitlessCssVar", void 0), I(ue(i), "lowPriority", void 0);
    var s = N(r);
    return i.unitlessCssVar = o, r instanceof n ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = pt(r) : s === "string" && (i.result = r), i;
  }
  return ve(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(pt(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(pt(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var i = this, s = o || {}, l = s.unit, u = !0;
      return typeof l == "boolean" ? u = l : Array.from(this.unitlessCssVar).some(function(c) {
        return i.result.includes(c);
      }) && (u = !1), this.result = this.result.replace(Xo, u ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Xr), Wo = /* @__PURE__ */ function(e) {
  tt(n, e);
  var t = rt(n);
  function n(r) {
    var o;
    return he(this, n), o = t.call(this), I(ue(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return ve(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof n ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof n ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
}(Xr), Go = function(t, n) {
  var r = t === "css" ? Uo : Wo;
  return function(o) {
    return new r(o, n);
  };
}, ur = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function fr(e, t, n, r) {
  var o = x({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(l) {
      var u = V(l, 2), c = u[0], f = u[1];
      if (o != null && o[c] || o != null && o[f]) {
        var p;
        (p = o[f]) !== null && p !== void 0 || (o[f] = o == null ? void 0 : o[c]);
      }
    });
  }
  var s = x(x({}, n), o);
  return Object.keys(s).forEach(function(l) {
    s[l] === t[l] && delete s[l];
  }), s;
}
var Wr = typeof CSSINJS_STATISTIC < "u", _t = !0;
function Ot() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Wr)
    return Object.assign.apply(Object, [{}].concat(t));
  _t = !1;
  var r = {};
  return t.forEach(function(o) {
    if (N(o) === "object") {
      var i = Object.keys(o);
      i.forEach(function(s) {
        Object.defineProperty(r, s, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[s];
          }
        });
      });
    }
  }), _t = !0, r;
}
var dr = {};
function Ko() {
}
var qo = function(t) {
  var n, r = t, o = Ko;
  return Wr && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(s, l) {
      if (_t) {
        var u;
        (u = n) === null || u === void 0 || u.add(l);
      }
      return s[l];
    }
  }), o = function(s, l) {
    var u;
    dr[s] = {
      global: Array.from(n),
      component: x(x({}, (u = dr[s]) === null || u === void 0 ? void 0 : u.component), l)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function pr(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(Ot(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function Zo(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return Ht(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return Ht(i);
      }).join(","), ")");
    }
  };
}
var Qo = 1e3 * 60 * 10, Yo = /* @__PURE__ */ function() {
  function e() {
    he(this, e), I(this, "map", /* @__PURE__ */ new Map()), I(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), I(this, "nextID", 0), I(this, "lastAccessBeat", /* @__PURE__ */ new Map()), I(this, "accessBeat", 0);
  }
  return ve(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      var o = this.getCompositeKey(n);
      this.map.set(o, r), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var r = this.getCompositeKey(n), o = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var r = this, o = n.map(function(i) {
        return i && N(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(N(i), "_").concat(i);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(o, i) {
          r - o > Qo && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), gr = new Yo();
function Jo(e, t) {
  return a.useMemo(function() {
    var n = gr.get(t);
    if (n)
      return n;
    var r = e();
    return gr.set(t, r), r;
  }, t);
}
var ei = function() {
  return {};
};
function ti(e) {
  var t = e.useCSP, n = t === void 0 ? ei : t, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, l = e.getCompUnitless;
  function u(d, m, v, h) {
    var g = Array.isArray(d) ? d[0] : d;
    function $(E) {
      return "".concat(String(g)).concat(E.slice(0, 1).toUpperCase()).concat(E.slice(1));
    }
    var C = (h == null ? void 0 : h.unitless) || {}, S = typeof l == "function" ? l(d) : {}, b = x(x({}, S), {}, I({}, $("zIndexPopup"), !0));
    Object.keys(C).forEach(function(E) {
      b[$(E)] = C[E];
    });
    var w = x(x({}, h), {}, {
      unitless: b,
      prefixToken: $
    }), R = f(d, m, v, w), y = c(g, v, w);
    return function(E) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E, F = R(E, A), k = V(F, 2), _ = k[1], T = y(A), O = V(T, 2), L = O[0], j = O[1];
      return [L, _, j];
    };
  }
  function c(d, m, v) {
    var h = v.unitless, g = v.injectStyle, $ = g === void 0 ? !0 : g, C = v.prefixToken, S = v.ignore, b = function(y) {
      var E = y.rootCls, A = y.cssVar, F = A === void 0 ? {} : A, k = r(), _ = k.realToken;
      return Sn({
        path: [d],
        prefix: F.prefix,
        key: F.key,
        unitless: h,
        ignore: S,
        token: _,
        scope: E
      }, function() {
        var T = pr(d, _, m), O = fr(d, _, T, {
          deprecatedTokens: v == null ? void 0 : v.deprecatedTokens
        });
        return Object.keys(T).forEach(function(L) {
          O[C(L)] = O[L], delete O[L];
        }), O;
      }), null;
    }, w = function(y) {
      var E = r(), A = E.cssVar;
      return [function(F) {
        return $ && A ? /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(b, {
          rootCls: y,
          cssVar: A,
          component: d
        }), F) : F;
      }, A == null ? void 0 : A.key];
    };
    return w;
  }
  function f(d, m, v) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = Array.isArray(d) ? d : [d, d], $ = V(g, 1), C = $[0], S = g.join("-"), b = e.layer || {
      name: "antd"
    };
    return function(w) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w, y = r(), E = y.theme, A = y.realToken, F = y.hashId, k = y.token, _ = y.cssVar, T = o(), O = T.rootPrefixCls, L = T.iconPrefixCls, j = n(), Q = _ ? "css" : "js", G = Jo(function() {
        var X = /* @__PURE__ */ new Set();
        return _ && Object.keys(h.unitless || {}).forEach(function(se) {
          X.add(lt(se, _.prefix)), X.add(lt(se, ur(C, _.prefix)));
        }), Go(Q, X);
      }, [Q, C, _ == null ? void 0 : _.prefix]), oe = Zo(Q), H = oe.max, D = oe.min, U = {
        theme: E,
        token: k,
        hashId: F,
        nonce: function() {
          return j.nonce;
        },
        clientOnly: h.clientOnly,
        layer: b,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof i == "function" && Nt(x(x({}, U), {}, {
        clientOnly: !1,
        path: ["Shared", O]
      }), function() {
        return i(k, {
          prefix: {
            rootPrefixCls: O,
            iconPrefixCls: L
          },
          csp: j
        });
      });
      var J = Nt(x(x({}, U), {}, {
        path: [S, w, L]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var X = qo(k), se = X.token, Ee = X.flush, re = pr(C, A, v), nt = ".".concat(w), Ce = fr(C, A, re, {
          deprecatedTokens: h.deprecatedTokens
        });
        _ && re && N(re) === "object" && Object.keys(re).forEach(function(Te) {
          re[Te] = "var(".concat(lt(Te, ur(C, _.prefix)), ")");
        });
        var _e = Ot(se, {
          componentCls: nt,
          prefixCls: w,
          iconCls: ".".concat(L),
          antCls: ".".concat(O),
          calc: G,
          // @ts-ignore
          max: H,
          // @ts-ignore
          min: D
        }, _ ? re : Ce), Le = m(_e, {
          hashId: F,
          prefixCls: w,
          rootPrefixCls: O,
          iconPrefixCls: L
        });
        Ee(C, Ce);
        var ae = typeof s == "function" ? s(_e, w, R, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : ae, Le];
      });
      return [J, F];
    };
  }
  function p(d, m, v) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, g = f(d, m, v, x({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), $ = function(S) {
      var b = S.prefixCls, w = S.rootCls, R = w === void 0 ? b : w;
      return g(b, R), null;
    };
    return $;
  }
  return {
    genStyleHooks: u,
    genSubStyleComponent: p,
    genComponentStyleHook: f
  };
}
function xe(e) {
  "@babel/helpers - typeof";
  return xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xe(e);
}
function ri(e, t) {
  if (xe(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (xe(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ni(e) {
  var t = ri(e, "string");
  return xe(t) == "symbol" ? t : t + "";
}
function K(e, t, n) {
  return (t = ni(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
const z = Math.round;
function gt(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const mr = (e, t, n) => n === 0 ? e : e / 100;
function be(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class te {
  constructor(t) {
    K(this, "isValid", !0), K(this, "r", 0), K(this, "g", 0), K(this, "b", 0), K(this, "a", 1), K(this, "_h", void 0), K(this, "_s", void 0), K(this, "_l", void 0), K(this, "_v", void 0), K(this, "_max", void 0), K(this, "_min", void 0), K(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof te)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = be(t.r), this.g = be(t.g), this.b = be(t.b), this.a = typeof t.a == "number" ? be(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
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
    const n = this.toHsv();
    return n.h = t, this._c(n);
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
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = z(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, i = (l) => (r[l] - this[l]) * o + this[l], s = {
      r: z(i("r")),
      g: z(i("g")),
      b: z(i("b")),
      a: z(i("a") * 100) / 100
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => z((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: r
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
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = z(this.a * 255).toString(16);
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
    const t = this.getHue(), n = z(this.getSaturation() * 100), r = z(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
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
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = be(n, r), o;
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
    const n = t.replace("#", "");
    function r(o, i) {
      return parseInt(n[o] + n[i || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const d = z(r * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, l = 0;
    const u = t / 60, c = (1 - Math.abs(2 * r - 1)) * n, f = c * (1 - Math.abs(u % 2 - 1));
    u >= 0 && u < 1 ? (i = c, s = f) : u >= 1 && u < 2 ? (i = f, s = c) : u >= 2 && u < 3 ? (s = c, l = f) : u >= 3 && u < 4 ? (s = f, l = c) : u >= 4 && u < 5 ? (i = f, l = c) : u >= 5 && u < 6 && (i = c, l = f);
    const p = r - c / 2;
    this.r = z((i + p) * 255), this.g = z((s + p) * 255), this.b = z((l + p) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = z(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, l = Math.floor(s), u = s - l, c = z(r * (1 - n) * 255), f = z(r * (1 - n * u) * 255), p = z(r * (1 - n * (1 - u)) * 255);
    switch (l) {
      case 0:
        this.g = p, this.b = c;
        break;
      case 1:
        this.r = f, this.b = c;
        break;
      case 2:
        this.r = c, this.b = p;
        break;
      case 3:
        this.r = c, this.g = f;
        break;
      case 4:
        this.r = p, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = f;
        break;
    }
  }
  fromHsvString(t) {
    const n = gt(t, mr);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = gt(t, mr);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = gt(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? z(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
const oi = {
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
}, ii = Object.assign(Object.assign({}, oi), {
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
function mt(e) {
  return e >= 0 && e <= 255;
}
function Ae(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new te(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: l,
    b: u
  } = new te(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const f = Math.round((n - s * (1 - c)) / c), p = Math.round((r - l * (1 - c)) / c), d = Math.round((o - u * (1 - c)) / c);
    if (mt(f) && mt(p) && mt(d))
      return new te({
        r: f,
        g: p,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new te({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var si = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function ai(e) {
  const {
    override: t
  } = e, n = si(e, ["override"]), r = Object.assign({}, t);
  Object.keys(ii).forEach((d) => {
    delete r[d];
  });
  const o = Object.assign(Object.assign({}, n), r), i = 480, s = 576, l = 768, u = 992, c = 1200, f = 1600;
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
    colorSplit: Ae(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Ae(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Ae(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Ae(o.colorPrimaryBg, o.colorBgContainer),
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
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: u - 1,
    screenLG: u,
    screenLGMin: u,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new te("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new te("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new te("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), r);
}
const li = {
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
}, ci = {
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
}, ui = xn(He.defaultAlgorithm), fi = {
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
}, Gr = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o,
    ...i
  } = t;
  let s = {
    ...r,
    override: o
  };
  return s = ai(s), i && Object.entries(i).forEach(([l, u]) => {
    const {
      theme: c,
      ...f
    } = u;
    let p = f;
    c && (p = Gr({
      ...s,
      ...f
    }, {
      override: f
    }, c)), s[l] = p;
  }), s;
};
function di() {
  const {
    token: e,
    hashed: t,
    theme: n = ui,
    override: r,
    cssVar: o
  } = a.useContext(He._internalContext), [i, s, l] = wn(n, [He.defaultSeed, e], {
    salt: `${Zn}-${t || ""}`,
    override: r,
    getComputedToken: Gr,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: li,
      ignore: ci,
      preserve: fi
    }
  });
  return [n, l, t ? s : "", i, o];
}
const {
  genStyleHooks: pi
} = ti({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Ne();
    return {
      iconPrefixCls: t,
      rootPrefixCls: e()
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = di();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: r,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = Ne();
    return e ?? {};
  },
  layer: {
    name: "antdx",
    dependencies: ["antd"]
  }
}), gi = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e, r = `${t}-list-card`, o = n(e.fontSize).mul(e.lineHeight).mul(2).add(e.paddingSM).add(e.paddingSM).equal();
  return {
    [r]: {
      borderRadius: e.borderRadius,
      position: "relative",
      background: e.colorFillContent,
      borderWidth: e.lineWidth,
      borderStyle: "solid",
      borderColor: "transparent",
      flex: "none",
      // =============================== Desc ================================
      [`${r}-name,${r}-desc`]: {
        display: "flex",
        flexWrap: "nowrap",
        maxWidth: "100%"
      },
      [`${r}-ellipsis-prefix`]: {
        flex: "0 1 auto",
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      [`${r}-ellipsis-suffix`]: {
        flex: "none"
      },
      // ============================= Overview ==============================
      "&-type-overview": {
        padding: n(e.paddingSM).sub(e.lineWidth).equal(),
        paddingInlineStart: n(e.padding).add(e.lineWidth).equal(),
        display: "flex",
        flexWrap: "nowrap",
        gap: e.paddingXS,
        alignItems: "flex-start",
        width: 236,
        // Icon
        [`${r}-icon`]: {
          fontSize: n(e.fontSizeLG).mul(2).equal(),
          lineHeight: 1,
          paddingTop: n(e.paddingXXS).mul(1.5).equal(),
          flex: "none"
        },
        // Content
        [`${r}-content`]: {
          flex: "auto",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch"
        },
        [`${r}-desc`]: {
          color: e.colorTextTertiary
        }
      },
      // ============================== Preview ==============================
      "&-type-preview": {
        width: o,
        height: o,
        lineHeight: 1,
        [`&:not(${r}-status-error)`]: {
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
        [`${r}-img-mask`]: {
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `rgba(0, 0, 0, ${e.opacityLoading})`,
          borderRadius: "inherit"
        },
        // Error
        [`&${r}-status-error`]: {
          [`img, ${r}-img-mask`]: {
            borderRadius: n(e.borderRadius).sub(e.lineWidth).equal()
          },
          [`${r}-desc`]: {
            paddingInline: e.paddingXXS
          }
        },
        // Progress
        [`${r}-progress`]: {}
      },
      // ============================ Remove Icon ============================
      [`${r}-remove`]: {
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
      [`&:hover ${r}-remove`]: {
        display: "block"
      },
      // ============================== Status ===============================
      "&-status-error": {
        borderColor: e.colorError,
        [`${r}-desc`]: {
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
          marginInlineEnd: n(e.paddingSM).mul(-1).equal()
        }
      }
    }
  };
}, Lt = {
  "&, *": {
    boxSizing: "border-box"
  }
}, mi = (e) => {
  const {
    componentCls: t,
    calc: n,
    antCls: r
  } = e, o = `${t}-drop-area`, i = `${t}-placeholder`;
  return {
    // ============================== Full Screen ==============================
    [o]: {
      position: "absolute",
      inset: 0,
      zIndex: e.zIndexPopupBase,
      ...Lt,
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
        ...Lt,
        [`${r}-upload-wrapper ${r}-upload${r}-upload-btn`]: {
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
          gap: n(e.paddingXXS).div(2).equal()
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
}, hi = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e, r = `${t}-list`, o = n(e.fontSize).mul(e.lineHeight).mul(2).add(e.paddingSM).add(e.paddingSM).equal();
  return {
    [t]: {
      position: "relative",
      width: "100%",
      ...Lt,
      // =============================== File List ===============================
      [r]: {
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
          maxHeight: n(o).mul(3).equal(),
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
          [`&${r}-overflow-ping-start ${r}-prev-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          },
          [`&${r}-overflow-ping-end ${r}-next-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          }
        },
        "&:dir(rtl)": {
          [`&${r}-overflow-ping-end ${r}-prev-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          },
          [`&${r}-overflow-ping-start ${r}-next-btn`]: {
            opacity: 1,
            pointerEvents: "auto"
          }
        }
      }
    }
  };
}, vi = (e) => {
  const {
    colorBgContainer: t
  } = e;
  return {
    colorBgPlaceholderHover: new te(t).setA(0.85).toRgbString()
  };
}, Kr = pi("Attachments", (e) => {
  const t = Ot(e, {});
  return [mi(t), hi(t), gi(t)];
}, vi), bi = (e) => e.indexOf("image/") === 0, Fe = 200;
function yi(e) {
  return new Promise((t) => {
    if (!e || !e.type || !bi(e.type)) {
      t("");
      return;
    }
    const n = new Image();
    if (n.onload = () => {
      const {
        width: r,
        height: o
      } = n, i = r / o, s = i > 1 ? Fe : Fe * i, l = i > 1 ? Fe / i : Fe, u = document.createElement("canvas");
      u.width = s, u.height = l, u.style.cssText = `position: fixed; left: 0; top: 0; width: ${s}px; height: ${l}px; z-index: 9999; display: none;`, document.body.appendChild(u), u.getContext("2d").drawImage(n, 0, 0, s, l);
      const f = u.toDataURL();
      document.body.removeChild(u), window.URL.revokeObjectURL(n.src), t(f);
    }, n.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
      const r = new FileReader();
      r.onload = () => {
        r.result && typeof r.result == "string" && (n.src = r.result);
      }, r.readAsDataURL(e);
    } else if (e.type.startsWith("image/gif")) {
      const r = new FileReader();
      r.onload = () => {
        r.result && t(r.result);
      }, r.readAsDataURL(e);
    } else
      n.src = window.URL.createObjectURL(e);
  });
}
function Si() {
  return /* @__PURE__ */ a.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /* @__PURE__ */ a.createElement("title", null, "audio"), /* @__PURE__ */ a.createElement("g", {
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M10.7315824,7.11216117 C10.7428131,7.15148751 10.7485063,7.19218979 10.7485063,7.23309113 L10.7485063,8.07742614 C10.7484199,8.27364959 10.6183424,8.44607275 10.4296853,8.50003683 L8.32984514,9.09986306 L8.32984514,11.7071803 C8.32986605,12.5367078 7.67249692,13.217028 6.84345686,13.2454634 L6.79068592,13.2463395 C6.12766108,13.2463395 5.53916361,12.8217001 5.33010655,12.1924966 C5.1210495,11.563293 5.33842118,10.8709227 5.86959669,10.4741173 C6.40077221,10.0773119 7.12636292,10.0652587 7.67042486,10.4442027 L7.67020842,7.74937024 L7.68449368,7.74937024 C7.72405122,7.59919041 7.83988806,7.48101083 7.98924584,7.4384546 L10.1880418,6.81004755 C10.42156,6.74340323 10.6648954,6.87865515 10.7315824,7.11216117 Z M9.60714286,1.31785714 L12.9678571,4.67857143 L9.60714286,4.67857143 L9.60714286,1.31785714 Z",
    fill: "currentColor"
  })));
}
function xi(e) {
  const {
    percent: t
  } = e, {
    token: n
  } = He.useToken();
  return /* @__PURE__ */ a.createElement(sn, {
    type: "circle",
    percent: t,
    size: n.fontSizeHeading2 * 2,
    strokeColor: "#FFF",
    trailColor: "rgba(255, 255, 255, 0.3)",
    format: (r) => /* @__PURE__ */ a.createElement("span", {
      style: {
        color: "#FFF"
      }
    }, (r || 0).toFixed(0), "%")
  });
}
function wi() {
  return /* @__PURE__ */ a.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /* @__PURE__ */ a.createElement("title", null, "video"), /* @__PURE__ */ a.createElement("g", {
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M14.1178571,4.0125 C14.225,4.11964286 14.2857143,4.26428571 14.2857143,4.41607143 L14.2857143,15.4285714 C14.2857143,15.7446429 14.0303571,16 13.7142857,16 L2.28571429,16 C1.96964286,16 1.71428571,15.7446429 1.71428571,15.4285714 L1.71428571,0.571428571 C1.71428571,0.255357143 1.96964286,0 2.28571429,0 L9.86964286,0 C10.0214286,0 10.1678571,0.0607142857 10.275,0.167857143 L14.1178571,4.0125 Z M12.9678571,4.67857143 L9.60714286,1.31785714 L9.60714286,4.67857143 L12.9678571,4.67857143 Z M10.5379461,10.3101106 L6.68957555,13.0059749 C6.59910784,13.0693494 6.47439406,13.0473861 6.41101953,12.9569184 C6.3874624,12.9232903 6.37482581,12.8832269 6.37482581,12.8421686 L6.37482581,7.45043999 C6.37482581,7.33998304 6.46436886,7.25043999 6.57482581,7.25043999 C6.61588409,7.25043999 6.65594753,7.26307658 6.68957555,7.28663371 L10.5379461,9.98249803 C10.6284138,10.0458726 10.6503772,10.1705863 10.5870027,10.2610541 C10.5736331,10.2801392 10.5570312,10.2967411 10.5379461,10.3101106 Z",
    fill: "currentColor"
  })));
}
const ht = " ", Tt = "#8c8c8c", qr = ["png", "jpg", "jpeg", "gif", "bmp", "webp", "svg"], Ei = [{
  icon: /* @__PURE__ */ a.createElement(un, null),
  color: "#22b35e",
  ext: ["xlsx", "xls"]
}, {
  icon: /* @__PURE__ */ a.createElement(fn, null),
  color: Tt,
  ext: qr
}, {
  icon: /* @__PURE__ */ a.createElement(dn, null),
  color: Tt,
  ext: ["md", "mdx"]
}, {
  icon: /* @__PURE__ */ a.createElement(pn, null),
  color: "#ff4d4f",
  ext: ["pdf"]
}, {
  icon: /* @__PURE__ */ a.createElement(gn, null),
  color: "#ff6e31",
  ext: ["ppt", "pptx"]
}, {
  icon: /* @__PURE__ */ a.createElement(mn, null),
  color: "#1677ff",
  ext: ["doc", "docx"]
}, {
  icon: /* @__PURE__ */ a.createElement(hn, null),
  color: "#fab714",
  ext: ["zip", "rar", "7z", "tar", "gz"]
}, {
  icon: /* @__PURE__ */ a.createElement(wi, null),
  color: "#ff4d4f",
  ext: ["mp4", "avi", "mov", "wmv", "flv", "mkv"]
}, {
  icon: /* @__PURE__ */ a.createElement(Si, null),
  color: "#8c8c8c",
  ext: ["mp3", "wav", "flac", "ape", "aac", "ogg"]
}];
function hr(e, t) {
  return t.some((n) => e.toLowerCase() === `.${n}`);
}
function Ci(e) {
  let t = e;
  const n = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
  let r = 0;
  for (; t >= 1024 && r < n.length - 1; )
    t /= 1024, r++;
  return `${t.toFixed(0)} ${n[r]}`;
}
function _i(e, t) {
  const {
    prefixCls: n,
    item: r,
    onRemove: o,
    className: i,
    style: s
  } = e, l = a.useContext(we), {
    disabled: u
  } = l || {}, {
    name: c,
    size: f,
    percent: p,
    status: d = "done",
    description: m
  } = r, {
    getPrefixCls: v
  } = Ne(), h = v("attachment", n), g = `${h}-list-card`, [$, C, S] = Kr(h), [b, w] = a.useMemo(() => {
    const L = c || "", j = L.match(/^(.*)\.[^.]+$/);
    return j ? [j[1], L.slice(j[1].length)] : [L, ""];
  }, [c]), R = a.useMemo(() => hr(w, qr), [w]), y = a.useMemo(() => m || (d === "uploading" ? `${p || 0}%` : d === "error" ? r.response || ht : f ? Ci(f) : ht), [d, p]), [E, A] = a.useMemo(() => {
    for (const {
      ext: L,
      icon: j,
      color: Q
    } of Ei)
      if (hr(w, L))
        return [j, Q];
    return [/* @__PURE__ */ a.createElement(ln, {
      key: "defaultIcon"
    }), Tt];
  }, [w]), [F, k] = a.useState();
  a.useEffect(() => {
    if (r.originFileObj) {
      let L = !0;
      return yi(r.originFileObj).then((j) => {
        L && k(j);
      }), () => {
        L = !1;
      };
    }
    k(void 0);
  }, [r.originFileObj]);
  let _ = null;
  const T = r.thumbUrl || r.url || F, O = R && (r.originFileObj || T);
  return O ? _ = /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("img", {
    alt: "preview",
    src: T
  }), d !== "done" && /* @__PURE__ */ a.createElement("div", {
    className: `${g}-img-mask`
  }, d === "uploading" && p !== void 0 && /* @__PURE__ */ a.createElement(xi, {
    percent: p,
    prefixCls: g
  }), d === "error" && /* @__PURE__ */ a.createElement("div", {
    className: `${g}-desc`
  }, /* @__PURE__ */ a.createElement("div", {
    className: `${g}-ellipsis-prefix`
  }, y)))) : _ = /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("div", {
    className: `${g}-icon`,
    style: {
      color: A
    }
  }, E), /* @__PURE__ */ a.createElement("div", {
    className: `${g}-content`
  }, /* @__PURE__ */ a.createElement("div", {
    className: `${g}-name`
  }, /* @__PURE__ */ a.createElement("div", {
    className: `${g}-ellipsis-prefix`
  }, b ?? ht), /* @__PURE__ */ a.createElement("div", {
    className: `${g}-ellipsis-suffix`
  }, w)), /* @__PURE__ */ a.createElement("div", {
    className: `${g}-desc`
  }, /* @__PURE__ */ a.createElement("div", {
    className: `${g}-ellipsis-prefix`
  }, y)))), $(/* @__PURE__ */ a.createElement("div", {
    className: q(g, {
      [`${g}-status-${d}`]: d,
      [`${g}-type-preview`]: O,
      [`${g}-type-overview`]: !O
    }, i, C, S),
    style: s,
    ref: t
  }, _, !u && o && /* @__PURE__ */ a.createElement("button", {
    type: "button",
    className: `${g}-remove`,
    onClick: () => {
      o(r);
    }
  }, /* @__PURE__ */ a.createElement(cn, null))));
}
const Zr = /* @__PURE__ */ a.forwardRef(_i), vr = 1;
function Li(e) {
  const {
    prefixCls: t,
    items: n,
    onRemove: r,
    overflow: o,
    upload: i,
    listClassName: s,
    listStyle: l,
    itemClassName: u,
    itemStyle: c
  } = e, f = `${t}-list`, p = a.useRef(null), [d, m] = a.useState(!1), {
    disabled: v
  } = a.useContext(we);
  a.useEffect(() => (m(!0), () => {
    m(!1);
  }), []);
  const [h, g] = a.useState(!1), [$, C] = a.useState(!1), S = () => {
    const y = p.current;
    y && (o === "scrollX" ? (g(Math.abs(y.scrollLeft) >= vr), C(y.scrollWidth - y.clientWidth - Math.abs(y.scrollLeft) >= vr)) : o === "scrollY" && (g(y.scrollTop !== 0), C(y.scrollHeight - y.clientHeight !== y.scrollTop)));
  };
  a.useEffect(() => {
    S();
  }, [o]);
  const b = (y) => {
    const E = p.current;
    E && E.scrollTo({
      left: E.scrollLeft + y * E.clientWidth,
      behavior: "smooth"
    });
  }, w = () => {
    b(-1);
  }, R = () => {
    b(1);
  };
  return /* @__PURE__ */ a.createElement("div", {
    className: q(f, {
      [`${f}-overflow-${e.overflow}`]: o,
      [`${f}-overflow-ping-start`]: h,
      [`${f}-overflow-ping-end`]: $
    }, s),
    ref: p,
    onScroll: S,
    style: l
  }, /* @__PURE__ */ a.createElement(Bo, {
    keys: n.map((y) => ({
      key: y.uid,
      item: y
    })),
    motionName: `${f}-card-motion`,
    component: !1,
    motionAppear: d,
    motionLeave: !0,
    motionEnter: !0
  }, ({
    key: y,
    item: E,
    className: A,
    style: F
  }) => /* @__PURE__ */ a.createElement(Zr, {
    key: y,
    prefixCls: t,
    item: E,
    onRemove: r,
    className: q(A, u),
    style: {
      ...F,
      ...c
    }
  })), !v && /* @__PURE__ */ a.createElement(Vr, {
    upload: i
  }, /* @__PURE__ */ a.createElement(st, {
    className: `${f}-upload-btn`,
    type: "dashed"
  }, /* @__PURE__ */ a.createElement(vn, {
    className: `${f}-upload-btn-icon`
  }))), o === "scrollX" && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(st, {
    size: "small",
    shape: "circle",
    className: `${f}-prev-btn`,
    icon: /* @__PURE__ */ a.createElement(bn, null),
    onClick: w
  }), /* @__PURE__ */ a.createElement(st, {
    size: "small",
    shape: "circle",
    className: `${f}-next-btn`,
    icon: /* @__PURE__ */ a.createElement(yn, null),
    onClick: R
  })));
}
function Ti(e, t) {
  const {
    prefixCls: n,
    placeholder: r = {},
    upload: o,
    className: i,
    style: s
  } = e, l = `${n}-placeholder`, u = r || {}, {
    disabled: c
  } = a.useContext(we), [f, p] = a.useState(!1), d = () => {
    p(!0);
  }, m = (g) => {
    g.currentTarget.contains(g.relatedTarget) || p(!1);
  }, v = () => {
    p(!1);
  }, h = /* @__PURE__ */ a.isValidElement(r) ? r : /* @__PURE__ */ a.createElement(an, {
    align: "center",
    justify: "center",
    vertical: !0,
    className: `${l}-inner`
  }, /* @__PURE__ */ a.createElement(at.Text, {
    className: `${l}-icon`
  }, u.icon), /* @__PURE__ */ a.createElement(at.Title, {
    className: `${l}-title`,
    level: 5
  }, u.title), /* @__PURE__ */ a.createElement(at.Text, {
    className: `${l}-description`,
    type: "secondary"
  }, u.description));
  return /* @__PURE__ */ a.createElement("div", {
    className: q(l, {
      [`${l}-drag-in`]: f,
      [`${l}-disabled`]: c
    }, i),
    onDragEnter: d,
    onDragLeave: m,
    onDrop: v,
    "aria-hidden": c,
    style: s
  }, /* @__PURE__ */ a.createElement(yr.Dragger, ye({
    showUploadList: !1
  }, o, {
    ref: t,
    style: {
      padding: 0,
      border: 0,
      background: "transparent"
    }
  }), h));
}
const Ri = /* @__PURE__ */ a.forwardRef(Ti);
function Mi(e, t) {
  const {
    prefixCls: n,
    rootClassName: r,
    rootStyle: o,
    className: i,
    style: s,
    items: l,
    children: u,
    getDropContainer: c,
    placeholder: f,
    onChange: p,
    overflow: d,
    disabled: m,
    classNames: v = {},
    styles: h = {},
    ...g
  } = e, {
    getPrefixCls: $,
    direction: C
  } = Ne(), S = $("attachment", n), b = Jn("attachments"), {
    classNames: w,
    styles: R
  } = b, y = a.useRef(null), E = a.useRef(null);
  a.useImperativeHandle(t, () => ({
    nativeElement: y.current,
    upload: (H) => {
      var U, J;
      const D = (J = (U = E.current) == null ? void 0 : U.nativeElement) == null ? void 0 : J.querySelector('input[type="file"]');
      if (D) {
        const X = new DataTransfer();
        X.items.add(H), D.files = X.files, D.dispatchEvent(new Event("change", {
          bubbles: !0
        }));
      }
    }
  }));
  const [A, F, k] = Kr(S), _ = q(F, k), [T, O] = io([], {
    value: l
  }), L = me((H) => {
    O(H.fileList), p == null || p(H);
  }), j = {
    ...g,
    fileList: T,
    onChange: L
  }, Q = (H) => {
    const D = T.filter((U) => U.uid !== H.uid);
    L({
      file: H,
      fileList: D
    });
  };
  let G;
  const oe = (H, D, U) => {
    const J = typeof f == "function" ? f(H) : f;
    return /* @__PURE__ */ a.createElement(Ri, {
      placeholder: J,
      upload: j,
      prefixCls: S,
      className: q(w.placeholder, v.placeholder),
      style: {
        ...R.placeholder,
        ...h.placeholder,
        ...D == null ? void 0 : D.style
      },
      ref: U
    });
  };
  if (u)
    G = /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(Vr, {
      upload: j,
      rootClassName: r,
      ref: E
    }, u), /* @__PURE__ */ a.createElement(er, {
      getDropContainer: c,
      prefixCls: S,
      className: q(_, r)
    }, oe("drop")));
  else {
    const H = T.length > 0;
    G = /* @__PURE__ */ a.createElement("div", {
      className: q(S, _, {
        [`${S}-rtl`]: C === "rtl"
      }, i, r),
      style: {
        ...o,
        ...s
      },
      dir: C || "ltr",
      ref: y
    }, /* @__PURE__ */ a.createElement(Li, {
      prefixCls: S,
      items: T,
      onRemove: Q,
      overflow: d,
      upload: j,
      listClassName: q(w.list, v.list),
      listStyle: {
        ...R.list,
        ...h.list,
        ...!H && {
          display: "none"
        }
      },
      itemClassName: q(w.item, v.item),
      itemStyle: {
        ...R.item,
        ...h.item
      }
    }), oe("inline", H ? {
      style: {
        display: "none"
      }
    } : {}, E), /* @__PURE__ */ a.createElement(er, {
      getDropContainer: c || (() => y.current),
      prefixCls: S,
      className: _
    }, oe("drop")));
  }
  return A(/* @__PURE__ */ a.createElement(we.Provider, {
    value: {
      disabled: m
    }
  }, G));
}
const Qr = /* @__PURE__ */ a.forwardRef(Mi);
Qr.FileCard = Zr;
new Intl.Collator(0, {
  numeric: 1
}).compare;
typeof process < "u" && process.versions && process.versions.node;
var ne;
class ki extends TransformStream {
  /** Constructs a new instance. */
  constructor(n = {
    allowCR: !1
  }) {
    super({
      transform: (r, o) => {
        for (r = fe(this, ne) + r; ; ) {
          const i = r.indexOf(`
`), s = n.allowCR ? r.indexOf("\r") : -1;
          if (s !== -1 && s !== r.length - 1 && (i === -1 || i - 1 > s)) {
            o.enqueue(r.slice(0, s)), r = r.slice(s + 1);
            continue;
          }
          if (i === -1) break;
          const l = r[i - 1] === "\r" ? i - 1 : i;
          o.enqueue(r.slice(0, l)), r = r.slice(i + 1);
        }
        Dt(this, ne, r);
      },
      flush: (r) => {
        if (fe(this, ne) === "") return;
        const o = n.allowCR && fe(this, ne).endsWith("\r") ? fe(this, ne).slice(0, -1) : fe(this, ne);
        r.enqueue(o);
      }
    });
    jt(this, ne, "");
  }
}
ne = new WeakMap();
function Pi(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return !1;
  }
}
function $i() {
  const e = document.querySelector(".gradio-container");
  if (!e)
    return "";
  const t = e.className.match(/gradio-container-(.+)/);
  return t ? t[1] : "";
}
const Oi = +$i()[0];
function br(e, t, n) {
  const r = Oi >= 5 ? "gradio_api/" : "";
  return e == null ? n ? `/proxy=${n}${r}file=` : `${t}${r}file=` : Pi(e) ? e : n ? `/proxy=${n}${r}file=${e}` : `${t}/${r}file=${e}`;
}
const ji = qn(({
  item: e,
  urlRoot: t,
  urlProxyUrl: n,
  ...r
}) => {
  const o = rn(() => e ? typeof e == "string" ? {
    url: br(e, t, n),
    uid: e,
    name: e.split("/").pop()
  } : {
    ...e,
    uid: e.uid || e.path || e.url,
    name: e.name || e.orig_name || e.path.split("/").pop(),
    url: e.url || br(e.path, t, n)
  } : {}, [e, n, t]);
  return /* @__PURE__ */ Mn.jsx(Qr.FileCard, {
    ...r,
    item: o
  });
});
export {
  ji as AttachmentsFileCard,
  ji as default
};
