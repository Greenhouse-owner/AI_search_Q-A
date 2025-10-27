import { c as l, d as m } from "./Index-nJA-Ual0.js";
const p = window.ms_globals.dayjs;
function M(a, s) {
  for (var o = 0; o < s.length; o++) {
    const t = s[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in a)) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          n && Object.defineProperty(a, r, n.get ? n : {
            enumerable: !0,
            get: () => t[r]
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
  (function(o, t) {
    a.exports = t(p);
  })(m, function(o) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : {
        default: e
      };
    }
    var r = t(o), n = "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), d = {
      1: "١",
      2: "٢",
      3: "٣",
      4: "٤",
      5: "٥",
      6: "٦",
      7: "٧",
      8: "٨",
      9: "٩",
      0: "٠"
    }, f = {
      "١": "1",
      "٢": "2",
      "٣": "3",
      "٤": "4",
      "٥": "5",
      "٦": "6",
      "٧": "7",
      "٨": "8",
      "٩": "9",
      "٠": "0"
    }, u = {
      name: "ar",
      weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
      weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
      weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
      months: n,
      monthsShort: n,
      weekStart: 6,
      meridiem: function(e) {
        return e > 12 ? "م" : "ص";
      },
      relativeTime: {
        future: "بعد %s",
        past: "منذ %s",
        s: "ثانية واحدة",
        m: "دقيقة واحدة",
        mm: "%d دقائق",
        h: "ساعة واحدة",
        hh: "%d ساعات",
        d: "يوم واحد",
        dd: "%d أيام",
        M: "شهر واحد",
        MM: "%d أشهر",
        y: "عام واحد",
        yy: "%d أعوام"
      },
      preparse: function(e) {
        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(_) {
          return f[_];
        }).replace(/،/g, ",");
      },
      postformat: function(e) {
        return e.replace(/\d/g, function(_) {
          return d[_];
        }).replace(/,/g, "،");
      },
      ordinal: function(e) {
        return e;
      },
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/‏M/‏YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      }
    };
    return r.default.locale(u, null, !0), u;
  });
})(i);
var c = i.exports;
const Y = /* @__PURE__ */ l(c), g = /* @__PURE__ */ M({
  __proto__: null,
  default: Y
}, [c]);
export {
  g as a
};
