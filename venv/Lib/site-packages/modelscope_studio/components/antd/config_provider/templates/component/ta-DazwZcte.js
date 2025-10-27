import { c as i, d as l } from "./Index-nJA-Ual0.js";
const u = window.ms_globals.dayjs;
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
    s.exports = t(u);
  })(l, function(o) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : {
        default: r
      };
    }
    var e = t(o), _ = {
      name: "ta",
      weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
      months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
      weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
      monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
      weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
      ordinal: function(r) {
        return r;
      },
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, HH:mm",
        LLLL: "dddd, D MMMM YYYY, HH:mm"
      },
      relativeTime: {
        future: "%s இல்",
        past: "%s முன்",
        s: "ஒரு சில விநாடிகள்",
        m: "ஒரு நிமிடம்",
        mm: "%d நிமிடங்கள்",
        h: "ஒரு மணி நேரம்",
        hh: "%d மணி நேரம்",
        d: "ஒரு நாள்",
        dd: "%d நாட்கள்",
        M: "ஒரு மாதம்",
        MM: "%d மாதங்கள்",
        y: "ஒரு வருடம்",
        yy: "%d ஆண்டுகள்"
      }
    };
    return e.default.locale(_, null, !0), _;
  });
})(a);
var d = a.exports;
const m = /* @__PURE__ */ i(d), p = /* @__PURE__ */ f({
  __proto__: null,
  default: m
}, [d]);
export {
  p as t
};
