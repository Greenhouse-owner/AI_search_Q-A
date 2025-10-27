import { a as d, c as i } from "./XProvider-CSZ95uJx.js";
const l = window.ms_globals.dayjs;
function f(s, n) {
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
      name: "ur",
      weekdays: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),
      months: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"),
      weekStart: 1,
      weekdaysShort: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),
      monthsShort: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"),
      weekdaysMin: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),
      ordinal: function(r) {
        return r;
      },
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd، D MMMM YYYY HH:mm"
      },
      relativeTime: {
        future: "%s بعد",
        past: "%s قبل",
        s: "چند سیکنڈ",
        m: "ایک منٹ",
        mm: "%d منٹ",
        h: "ایک گھنٹہ",
        hh: "%d گھنٹے",
        d: "ایک دن",
        dd: "%d دن",
        M: "ایک ماہ",
        MM: "%d ماہ",
        y: "ایک سال",
        yy: "%d سال"
      }
    };
    return e.default.locale(_, null, !0), _;
  });
})(a);
var u = a.exports;
const m = /* @__PURE__ */ d(u), p = /* @__PURE__ */ f({
  __proto__: null,
  default: m
}, [u]);
export {
  p as u
};
