import { c as g } from "./Index-nJA-Ual0.js";
import { i as r } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as j, c as k } from "./common-AHfHwMkE.js";
function P(n, c) {
  for (var p = 0; p < c.length; p++) {
    const e = c[p];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in n)) {
          const v = Object.getOwnPropertyDescriptor(e, a);
          v && Object.defineProperty(n, a, v.get ? v : {
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
var i = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var y = {
  // Options
  items_per_page: "/ lappuse",
  jump_to: "iet uz",
  jump_to_confirm: "apstiprināt",
  page: "",
  // Pagination
  prev_page: "Iepriekšējā lapa",
  next_page: "Nākamā lapaspuse",
  prev_5: "Iepriekšējās 5 lapas",
  next_5: "Nākamās 5 lapas",
  prev_3: "Iepriekšējās 3 lapas",
  next_3: "Nākamās 3 lapas",
  page_size: "Page Size"
};
o.default = y;
var u = {}, t = {}, d = {}, L = r.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var f = L(j), O = k, b = (0, f.default)((0, f.default)({}, O.commonLocale), {}, {
  locale: "lv_LV",
  today: "Šodien",
  now: "Tagad",
  backToToday: "Atpakaļ pie šodienas",
  ok: "OK",
  clear: "Skaidrs",
  week: "Nedēļa",
  month: "Mēnesis",
  year: "Gads",
  timeSelect: "Izvēlieties laiku",
  dateSelect: "Izvēlieties datumu",
  monthSelect: "Izvēlieties mēnesi",
  yearSelect: "Izvēlieties gadu",
  decadeSelect: "Izvēlieties desmit gadus",
  dateFormat: "D.M.YYYY",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  previousMonth: "Iepriekšējais mēnesis (PageUp)",
  nextMonth: "Nākammēnes (PageDown)",
  previousYear: "Pagājušais gads (Control + left)",
  nextYear: "Nākamgad (Control + right)",
  previousDecade: "Pēdējā desmitgadē",
  nextDecade: "Nākamā desmitgade",
  previousCentury: "Pagājušajā gadsimtā",
  nextCentury: "Nākamajā gadsimtā"
});
d.default = b;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const V = {
  placeholder: "Izvēlieties laiku"
};
l.default = V;
var m = r.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var $ = m(d), x = m(l);
const z = {
  lang: Object.assign({
    placeholder: "Izvēlieties datumu",
    rangePlaceholder: ["Sākuma datums", "Beigu datums"]
  }, $.default),
  timePickerLocale: Object.assign({}, x.default)
};
t.default = z;
var M = r.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var T = M(t);
u.default = T.default;
var s = r.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var D = s(o), I = s(u), S = s(t), h = s(l);
const N = {
  locale: "lv",
  Pagination: D.default,
  DatePicker: S.default,
  TimePicker: h.default,
  Calendar: I.default,
  Table: {
    filterTitle: "Filtrēšanas izvēlne",
    filterConfirm: "OK",
    filterReset: "Atiestatīt",
    selectAll: "Atlasiet pašreizējo lapu",
    selectInvert: "Pārvērst pašreizējo lapu"
  },
  Modal: {
    okText: "OK",
    cancelText: "Atcelt",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Atcelt"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Meklēt šeit",
    itemUnit: "vienumu",
    itemsUnit: "vienumus"
  },
  Upload: {
    uploading: "Augšupielāde...",
    removeFile: "Noņemt failu",
    uploadError: "Augšupielādes kļūda",
    previewFile: "Priekšskatiet failu",
    downloadFile: "Lejupielādēt failu"
  },
  Empty: {
    description: "Nav datu"
  }
};
i.default = N;
var _ = i;
const A = /* @__PURE__ */ g(_), w = /* @__PURE__ */ P({
  __proto__: null,
  default: A
}, [_]);
export {
  w as l
};
