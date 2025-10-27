import { c as k } from "./Index-nJA-Ual0.js";
import { i as r } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as y, c as g } from "./common-AHfHwMkE.js";
function P(d, c) {
  for (var f = 0; f < c.length; f++) {
    const e = c[f];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in d)) {
          const v = Object.getOwnPropertyDescriptor(e, t);
          v && Object.defineProperty(d, t, v.get ? v : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, {
    value: "Module"
  }));
}
var o = {}, l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var j = {
  // Options
  items_per_page: "/ sivu",
  jump_to: "Mene",
  jump_to_confirm: "Potvrdite",
  page: "Sivu",
  // Pagination
  prev_page: "Edellinen sivu",
  next_page: "Seuraava sivu",
  prev_5: "Edelliset 5 sivua",
  next_5: "Seuraavat 5 sivua",
  prev_3: "Edelliset 3 sivua",
  next_3: "Seuraavat 3 sivua",
  page_size: "Page Size"
};
l.default = j;
var u = {}, a = {}, s = {}, F = r.default;
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var p = F(y), S = g, h = (0, p.default)((0, p.default)({}, S.commonLocale), {}, {
  locale: "fi_FI",
  today: "Tänään",
  now: "Nyt",
  backToToday: "Tämä päivä",
  ok: "OK",
  clear: "Tyhjennä",
  week: "Viikko",
  month: "Kuukausi",
  year: "Vuosi",
  timeSelect: "Valise aika",
  dateSelect: "Valitse päivä",
  monthSelect: "Valitse kuukausi",
  yearSelect: "Valitse vuosi",
  decadeSelect: "Valitse vuosikymmen",
  dateFormat: "D.M.YYYY",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  previousMonth: "Edellinen kuukausi (PageUp)",
  nextMonth: "Seuraava kuukausi (PageDown)",
  previousYear: "Edellinen vuosi (Control + left)",
  nextYear: "Seuraava vuosi (Control + right)",
  previousDecade: "Edellinen vuosikymmen",
  nextDecade: "Seuraava vuosikymmen",
  previousCentury: "Edellinen vuosisata",
  nextCentury: "Seuraava vuosisata"
});
s.default = h;
var i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
const O = {
  placeholder: "Valitse aika"
};
i.default = O;
var _ = r.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var T = _(s), b = _(i);
const x = {
  lang: Object.assign({
    placeholder: "Valitse päivä",
    rangePlaceholder: ["Alkamispäivä", "Päättymispäivä"]
  }, T.default),
  timePickerLocale: Object.assign({}, b.default)
};
a.default = x;
var I = r.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var $ = I(a);
u.default = $.default;
var n = r.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var E = n(l), D = n(u), M = n(a), V = n(i);
const Y = {
  locale: "fi",
  Pagination: E.default,
  DatePicker: M.default,
  TimePicker: V.default,
  Calendar: D.default,
  Table: {
    filterTitle: "Suodatus valikko",
    filterConfirm: "OK",
    filterReset: "Tyhjennä",
    selectAll: "Valitse kaikki",
    selectInvert: "Valitse päinvastoin",
    sortTitle: "Lajittele",
    triggerDesc: "Lajittele laskevasti",
    triggerAsc: "Lajittele nousevasti",
    cancelSort: "Peruuta lajittelu"
  },
  Modal: {
    okText: "OK",
    cancelText: "Peruuta",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Peruuta"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Etsi täältä",
    itemUnit: "kohde",
    itemsUnit: "kohdetta"
  },
  Upload: {
    uploading: "Lähetetään...",
    removeFile: "Poista tiedosto",
    uploadError: "Virhe lähetyksessä",
    previewFile: "Esikatsele tiedostoa",
    downloadFile: "Lataa tiedosto"
  },
  Empty: {
    description: "Ei kohteita"
  },
  Text: {
    edit: "Muokkaa",
    copy: "Kopioi",
    copied: "Kopioitu",
    expand: "Näytä lisää"
  }
};
o.default = Y;
var m = o;
const K = /* @__PURE__ */ k(m), R = /* @__PURE__ */ P({
  __proto__: null,
  default: K
}, [m]);
export {
  R as f
};
