import { c as i, d as f } from "./Index-nJA-Ual0.js";
const u = window.ms_globals.dayjs;
function c(n, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const _ = Object.getOwnPropertyDescriptor(e, t);
          _ && Object.defineProperty(n, t, _.get ? _ : {
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
  (function(o, e) {
    n.exports = e(u);
  })(f, function(o) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : {
        default: r
      };
    }
    var t = e(o), _ = {
      name: "be",
      weekdays: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
      months: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
      weekStart: 1,
      weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
      monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
      weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
      ordinal: function(r) {
        return r;
      },
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY г.",
        LLL: "D MMMM YYYY г., HH:mm",
        LLLL: "dddd, D MMMM YYYY г., HH:mm"
      }
    };
    return t.default.locale(_, null, !0), _;
  });
})(a);
var l = a.exports;
const m = /* @__PURE__ */ i(l), d = /* @__PURE__ */ c({
  __proto__: null,
  default: m
}, [l]);
export {
  d as b
};
