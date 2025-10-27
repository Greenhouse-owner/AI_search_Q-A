import { c as d, d as m } from "./Index-nJA-Ual0.js";
const u = window.ms_globals.dayjs;
function l(a, s) {
  for (var n = 0; n < s.length; n++) {
    const e = s[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in a)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(a, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, {
    value: "Module"
  }));
}
var _ = {
  exports: {}
};
(function(a, s) {
  (function(n, e) {
    a.exports = e(u);
  })(m, function(n) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : {
        default: r
      };
    }
    var t = e(n), o = {
      name: "nb",
      weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
      weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
      weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
      months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
      monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
      ordinal: function(r) {
        return r + ".";
      },
      weekStart: 1,
      yearStart: 4,
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY [kl.] HH:mm",
        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
      },
      relativeTime: {
        future: "om %s",
        past: "%s siden",
        s: "noen sekunder",
        m: "ett minutt",
        mm: "%d minutter",
        h: "en time",
        hh: "%d timer",
        d: "en dag",
        dd: "%d dager",
        M: "en måned",
        MM: "%d måneder",
        y: "ett år",
        yy: "%d år"
      }
    };
    return t.default.locale(o, null, !0), o;
  });
})(_);
var i = _.exports;
const f = /* @__PURE__ */ d(i), c = /* @__PURE__ */ l({
  __proto__: null,
  default: f
}, [i]);
export {
  c as n
};
