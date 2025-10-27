import { c as u, d as m } from "./Index-nJA-Ual0.js";
const d = window.ms_globals.dayjs;
function l(a, s) {
  for (var n = 0; n < s.length; n++) {
    const e = s[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in a)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(a, r, o.get ? o : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, {
    value: "Module"
  }));
}
var i = {
  exports: {}
};
(function(a, s) {
  (function(n, e) {
    a.exports = e(d);
  })(m, function(n) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : {
        default: t
      };
    }
    var r = e(n), o = {
      name: "fr-ca",
      weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
      months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
      weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
      monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
      weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
      ordinal: function(t) {
        return t;
      },
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY-MM-DD",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      relativeTime: {
        future: "dans %s",
        past: "il y a %s",
        s: "quelques secondes",
        m: "une minute",
        mm: "%d minutes",
        h: "une heure",
        hh: "%d heures",
        d: "un jour",
        dd: "%d jours",
        M: "un mois",
        MM: "%d mois",
        y: "un an",
        yy: "%d ans"
      }
    };
    return r.default.locale(o, null, !0), o;
  });
})(i);
var _ = i.exports;
const f = /* @__PURE__ */ u(_), p = /* @__PURE__ */ l({
  __proto__: null,
  default: f
}, [_]);
export {
  p as f
};
