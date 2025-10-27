import { c as u, d as i } from "./Index-nJA-Ual0.js";
const m = window.ms_globals.dayjs;
function l(o, d) {
  for (var n = 0; n < d.length; n++) {
    const t = d[n];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in o)) {
          const a = Object.getOwnPropertyDescriptor(t, r);
          a && Object.defineProperty(o, r, a.get ? a : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, {
    value: "Module"
  }));
}
var _ = {
  exports: {}
};
(function(o, d) {
  (function(n, t) {
    o.exports = t(m);
  })(i, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : {
        default: e
      };
    }
    var r = t(n), a = {
      name: "nl",
      weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
      weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
      weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
      months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
      monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      ordinal: function(e) {
        return "[" + e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de") + "]";
      },
      weekStart: 1,
      yearStart: 4,
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      relativeTime: {
        future: "over %s",
        past: "%s geleden",
        s: "een paar seconden",
        m: "een minuut",
        mm: "%d minuten",
        h: "een uur",
        hh: "%d uur",
        d: "een dag",
        dd: "%d dagen",
        M: "een maand",
        MM: "%d maanden",
        y: "een jaar",
        yy: "%d jaar"
      }
    };
    return r.default.locale(a, null, !0), a;
  });
})(_);
var s = _.exports;
const f = /* @__PURE__ */ u(s), c = /* @__PURE__ */ l({
  __proto__: null,
  default: f
}, [s]);
export {
  c as n
};
