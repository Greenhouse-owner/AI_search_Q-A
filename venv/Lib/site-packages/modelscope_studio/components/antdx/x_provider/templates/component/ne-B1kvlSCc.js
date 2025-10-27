import { a as l, c as u } from "./XProvider-CSZ95uJx.js";
const f = window.ms_globals.dayjs;
function m(n, s) {
  for (var _ = 0; _ < s.length; _++) {
    const e = s[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
    value: "Module"
  }));
}
var a = {
  exports: {}
};
(function(n, s) {
  (function(_, e) {
    n.exports = e(f);
  })(u, function(_) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : {
        default: r
      };
    }
    var t = e(_), o = {
      name: "ne",
      weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
      weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
      weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
      months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मे_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
      monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
      relativeTime: {
        future: "%s पछि",
        past: "%s अघि",
        s: "सेकेन्ड",
        m: "एक मिनेट",
        mm: "%d मिनेट",
        h: "घन्टा",
        hh: "%d घन्टा",
        d: "एक दिन",
        dd: "%d दिन",
        M: "एक महिना",
        MM: "%d महिना",
        y: "एक वर्ष",
        yy: "%d वर्ष"
      },
      ordinal: function(r) {
        return ("" + r).replace(/\d/g, function(i) {
          return "०१२३४५६७८९"[i];
        });
      },
      formats: {
        LT: "Aको h:mm बजे",
        LTS: "Aको h:mm:ss बजे",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, Aको h:mm बजे",
        LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
      }
    };
    return t.default.locale(o, null, !0), o;
  });
})(a);
var d = a.exports;
const c = /* @__PURE__ */ l(d), M = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [d]);
export {
  M as n
};
