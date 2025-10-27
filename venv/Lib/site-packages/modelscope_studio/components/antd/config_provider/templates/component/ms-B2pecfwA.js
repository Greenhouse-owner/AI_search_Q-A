import { c as m, d as u } from "./Index-nJA-Ual0.js";
const l = window.ms_globals.dayjs;
function d(n, o) {
  for (var r = 0; r < o.length; r++) {
    const e = o[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const s = Object.getOwnPropertyDescriptor(e, t);
          s && Object.defineProperty(n, t, s.get ? s : {
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
var _ = {
  exports: {}
};
(function(n, o) {
  (function(r, e) {
    n.exports = e(l);
  })(u, function(r) {
    function e(a) {
      return a && typeof a == "object" && "default" in a ? a : {
        default: a
      };
    }
    var t = e(r), s = {
      name: "ms",
      weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
      weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
      weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
      months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
      monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
      weekStart: 1,
      formats: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH.mm",
        LLLL: "dddd, D MMMM YYYY HH.mm"
      },
      relativeTime: {
        future: "dalam %s",
        past: "%s yang lepas",
        s: "beberapa saat",
        m: "seminit",
        mm: "%d minit",
        h: "sejam",
        hh: "%d jam",
        d: "sehari",
        dd: "%d hari",
        M: "sebulan",
        MM: "%d bulan",
        y: "setahun",
        yy: "%d tahun"
      },
      ordinal: function(a) {
        return a + ".";
      }
    };
    return t.default.locale(s, null, !0), s;
  });
})(_);
var i = _.exports;
const p = /* @__PURE__ */ m(i), f = /* @__PURE__ */ d({
  __proto__: null,
  default: p
}, [i]);
export {
  f as m
};
