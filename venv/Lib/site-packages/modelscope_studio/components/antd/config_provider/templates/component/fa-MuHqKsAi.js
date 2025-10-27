import { c as d, d as i } from "./Index-nJA-Ual0.js";
const l = window.ms_globals.dayjs;
function u(s, n) {
  for (var o = 0; o < n.length; o++) {
    const t = n[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in s)) {
          const _ = Object.getOwnPropertyDescriptor(t, e);
          _ && Object.defineProperty(s, e, _.get ? _ : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, {
    value: "Module"
  }));
}
var a = {
  exports: {}
};
(function(s, n) {
  (function(o, t) {
    s.exports = t(l);
  })(i, function(o) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : {
        default: r
      };
    }
    var e = t(o), _ = {
      name: "fa",
      weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
      weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
      weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
      weekStart: 6,
      months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
      monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
      ordinal: function(r) {
        return r;
      },
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      relativeTime: {
        future: "در %s",
        past: "%s پیش",
        s: "چند ثانیه",
        m: "یک دقیقه",
        mm: "%d دقیقه",
        h: "یک ساعت",
        hh: "%d ساعت",
        d: "یک روز",
        dd: "%d روز",
        M: "یک ماه",
        MM: "%d ماه",
        y: "یک سال",
        yy: "%d سال"
      }
    };
    return e.default.locale(_, null, !0), _;
  });
})(a);
var f = a.exports;
const m = /* @__PURE__ */ d(f), p = /* @__PURE__ */ u({
  __proto__: null,
  default: m
}, [f]);
export {
  p as f
};
