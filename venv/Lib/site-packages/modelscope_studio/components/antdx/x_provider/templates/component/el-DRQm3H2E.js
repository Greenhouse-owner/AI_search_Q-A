import { a as d, c as i } from "./XProvider-CSZ95uJx.js";
const u = window.ms_globals.dayjs;
function f(s, n) {
  for (var _ = 0; _ < n.length; _++) {
    const e = n[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(s, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
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
  (function(_, e) {
    s.exports = e(u);
  })(i, function(_) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : {
        default: r
      };
    }
    var t = e(_), o = {
      name: "el",
      weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
      weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
      weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
      months: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
      monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"),
      ordinal: function(r) {
        return r;
      },
      weekStart: 1,
      relativeTime: {
        future: "σε %s",
        past: "πριν %s",
        s: "μερικά δευτερόλεπτα",
        m: "ένα λεπτό",
        mm: "%d λεπτά",
        h: "μία ώρα",
        hh: "%d ώρες",
        d: "μία μέρα",
        dd: "%d μέρες",
        M: "ένα μήνα",
        MM: "%d μήνες",
        y: "ένα χρόνο",
        yy: "%d χρόνια"
      },
      formats: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      }
    };
    return t.default.locale(o, null, !0), o;
  });
})(a);
var l = a.exports;
const m = /* @__PURE__ */ d(l), p = /* @__PURE__ */ f({
  __proto__: null,
  default: m
}, [l]);
export {
  p as e
};
