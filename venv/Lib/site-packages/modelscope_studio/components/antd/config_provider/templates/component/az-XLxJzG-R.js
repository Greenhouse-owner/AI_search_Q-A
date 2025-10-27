import { c as l, d as m } from "./Index-nJA-Ual0.js";
const d = window.ms_globals.dayjs;
function y(o, _) {
  for (var a = 0; a < _.length; a++) {
    const e = _[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(o, r, n.get ? n : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, {
    value: "Module"
  }));
}
var s = {
  exports: {}
};
(function(o, _) {
  (function(a, e) {
    o.exports = e(d);
  })(m, function(a) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : {
        default: t
      };
    }
    var r = e(a), n = {
      name: "az",
      weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
      weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
      weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
      months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
      monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
      weekStart: 1,
      formats: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY г.",
        LLL: "D MMMM YYYY г., H:mm",
        LLLL: "dddd, D MMMM YYYY г., H:mm"
      },
      relativeTime: {
        future: "%s sonra",
        past: "%s əvvəl",
        s: "bir neçə saniyə",
        m: "bir dəqiqə",
        mm: "%d dəqiqə",
        h: "bir saat",
        hh: "%d saat",
        d: "bir gün",
        dd: "%d gün",
        M: "bir ay",
        MM: "%d ay",
        y: "bir il",
        yy: "%d il"
      },
      ordinal: function(t) {
        return t;
      }
    };
    return r.default.locale(n, null, !0), n;
  });
})(s);
var i = s.exports;
const u = /* @__PURE__ */ l(i), p = /* @__PURE__ */ y({
  __proto__: null,
  default: u
}, [i]);
export {
  p as a
};
