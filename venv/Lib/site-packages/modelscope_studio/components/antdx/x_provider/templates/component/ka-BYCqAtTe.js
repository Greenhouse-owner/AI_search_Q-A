import { a as i, c as l } from "./XProvider-CSZ95uJx.js";
const u = window.ms_globals.dayjs;
function f(s, a) {
  for (var o = 0; o < a.length; o++) {
    const t = a[o];
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
var n = {
  exports: {}
};
(function(s, a) {
  (function(o, t) {
    s.exports = t(u);
  })(l, function(o) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : {
        default: r
      };
    }
    var e = t(o), _ = {
      name: "ka",
      weekdays: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
      weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
      weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
      months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
      monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
      weekStart: 1,
      formats: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      },
      relativeTime: {
        future: "%s შემდეგ",
        past: "%s წინ",
        s: "წამი",
        m: "წუთი",
        mm: "%d წუთი",
        h: "საათი",
        hh: "%d საათის",
        d: "დღეს",
        dd: "%d დღის განმავლობაში",
        M: "თვის",
        MM: "%d თვის",
        y: "წელი",
        yy: "%d წლის"
      },
      ordinal: function(r) {
        return r;
      }
    };
    return e.default.locale(_, null, !0), _;
  });
})(n);
var d = n.exports;
const m = /* @__PURE__ */ i(d), p = /* @__PURE__ */ f({
  __proto__: null,
  default: m
}, [d]);
export {
  p as k
};
