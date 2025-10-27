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
      name: "uz",
      weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
      months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
      weekStart: 1,
      weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
      monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
      weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
      ordinal: function(r) {
        return r;
      },
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "D MMMM YYYY, dddd HH:mm"
      },
      relativeTime: {
        future: "Якин %s ичида",
        past: "%s олдин",
        s: "фурсат",
        m: "бир дакика",
        mm: "%d дакика",
        h: "бир соат",
        hh: "%d соат",
        d: "бир кун",
        dd: "%d кун",
        M: "бир ой",
        MM: "%d ой",
        y: "бир йил",
        yy: "%d йил"
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
