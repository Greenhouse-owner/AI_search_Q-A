import { c as l, d as m } from "./Index-nJA-Ual0.js";
const d = window.ms_globals.dayjs;
function u(n, o) {
  for (var r = 0; r < o.length; r++) {
    const e = o[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in n)) {
          const i = Object.getOwnPropertyDescriptor(e, a);
          i && Object.defineProperty(n, a, i.get ? i : {
            enumerable: !0,
            get: () => e[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
    value: "Module"
  }));
}
var _ = {
  exports: {}
};
(function(n, o) {
  (function(r, e) {
    n.exports = e(d);
  })(m, function(r) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : {
        default: t
      };
    }
    var a = e(r), i = {
      name: "ga",
      weekdays: "Dé Domhnaigh_Dé Luain_Dé Máirt_Dé Céadaoin_Déardaoin_Dé hAoine_Dé Satharn".split("_"),
      months: "Eanáir_Feabhra_Márta_Aibreán_Bealtaine_Méitheamh_Iúil_Lúnasa_Meán Fómhair_Deaireadh Fómhair_Samhain_Nollaig".split("_"),
      weekStart: 1,
      weekdaysShort: "Dom_Lua_Mái_Céa_Déa_hAo_Sat".split("_"),
      monthsShort: "Eaná_Feab_Márt_Aibr_Beal_Méit_Iúil_Lúna_Meán_Deai_Samh_Noll".split("_"),
      weekdaysMin: "Do_Lu_Má_Ce_Dé_hA_Sa".split("_"),
      ordinal: function(t) {
        return t;
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
        future: "i %s",
        past: "%s ó shin",
        s: "cúpla soicind",
        m: "nóiméad",
        mm: "%d nóiméad",
        h: "uair an chloig",
        hh: "%d uair an chloig",
        d: "lá",
        dd: "%d lá",
        M: "mí",
        MM: "%d mí",
        y: "bliain",
        yy: "%d bliain"
      }
    };
    return a.default.locale(i, null, !0), i;
  });
})(_);
var s = _.exports;
const M = /* @__PURE__ */ l(s), f = /* @__PURE__ */ u({
  __proto__: null,
  default: M
}, [s]);
export {
  f as g
};
