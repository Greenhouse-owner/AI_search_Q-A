import { c as u, d as l } from "./Index-nJA-Ual0.js";
const m = window.ms_globals.dayjs;
function d(s, _) {
  for (var a = 0; a < _.length; a++) {
    const e = _[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(s, t, n.get ? n : {
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
var o = {
  exports: {}
};
(function(s, _) {
  (function(a, e) {
    s.exports = e(m);
  })(l, function(a) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : {
        default: r
      };
    }
    var t = e(a), n = {
      name: "id",
      weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
      months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
      weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
      monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
      weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
      weekStart: 1,
      formats: {
        LT: "HH.mm",
        LTS: "HH.mm.ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] HH.mm",
        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
      },
      relativeTime: {
        future: "dalam %s",
        past: "%s yang lalu",
        s: "beberapa detik",
        m: "semenit",
        mm: "%d menit",
        h: "sejam",
        hh: "%d jam",
        d: "sehari",
        dd: "%d hari",
        M: "sebulan",
        MM: "%d bulan",
        y: "setahun",
        yy: "%d tahun"
      },
      ordinal: function(r) {
        return r + ".";
      }
    };
    return t.default.locale(n, null, !0), n;
  });
})(o);
var i = o.exports;
const p = /* @__PURE__ */ u(i), b = /* @__PURE__ */ d({
  __proto__: null,
  default: p
}, [i]);
export {
  b as i
};
