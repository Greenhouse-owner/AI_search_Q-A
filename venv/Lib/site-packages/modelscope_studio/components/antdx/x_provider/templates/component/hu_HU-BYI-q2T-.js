import { a as z } from "./XProvider-CSZ95uJx.js";
import { i as r } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as h, c as g } from "./common-AHfHwMkE.js";
function k(n, f) {
  for (var v = 0; v < f.length; v++) {
    const e = f[v];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const c = Object.getOwnPropertyDescriptor(e, t);
          c && Object.defineProperty(n, t, c.get ? c : {
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
var o = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var j = {
  // Options
  items_per_page: "/ oldal",
  // '/ page',
  jump_to: "Ugrás",
  // 'Goto',
  jump_to_confirm: "megerősít",
  // 'confirm',
  page: "",
  // Pagination
  prev_page: "Előző oldal",
  // 'Previous Page',
  next_page: "Következő oldal",
  // 'Next Page',
  prev_5: "Előző 5 oldal",
  // 'Previous 5 Pages',
  next_5: "Következő 5 oldal",
  // 'Next 5 Pages',
  prev_3: "Előző 3 oldal",
  // 'Previous 3 Pages',
  next_3: "Következő 3 oldal",
  // 'Next 3 Pages',
  page_size: "Page Size"
};
u.default = j;
var i = {}, a = {}, s = {}, H = r.default;
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var _ = H(h), U = g, y = (0, _.default)((0, _.default)({}, U.commonLocale), {}, {
  locale: "hu_HU",
  today: "Ma",
  // 'Today',
  now: "Most",
  // 'Now',
  backToToday: "Vissza a mai napra",
  // 'Back to today',
  ok: "OK",
  clear: "Törlés",
  // 'Clear',
  week: "Hét",
  month: "Hónap",
  // 'Month',
  year: "Év",
  // 'Year',
  timeSelect: "Időpont kiválasztása",
  // 'Select time',
  dateSelect: "Dátum kiválasztása",
  // 'Select date',
  monthSelect: "Hónap kiválasztása",
  // 'Choose a month',
  yearSelect: "Év kiválasztása",
  // 'Choose a year',
  decadeSelect: "Évtized kiválasztása",
  // 'Choose a decade',
  dateFormat: "YYYY/MM/DD",
  // 'M/D/YYYY',
  dayFormat: "DD",
  // 'D',
  dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
  // 'M/D/YYYY HH:mm:ss',
  previousMonth: "Előző hónap (PageUp)",
  // 'Previous month (PageUp)',
  nextMonth: "Következő hónap (PageDown)",
  // 'Next month (PageDown)',
  previousYear: "Múlt év (Control + left)",
  // 'Last year (Control + left)',
  nextYear: "Jövő év (Control + right)",
  // 'Next year (Control + right)',
  previousDecade: "Előző évtized",
  // 'Last decade',
  nextDecade: "Következő évtized",
  // 'Next decade',
  previousCentury: "Múlt évszázad",
  // 'Last century',
  nextCentury: "Jövő évszázad"
  // 'Next century',
});
s.default = y;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const b = {
  placeholder: "Válasszon időt"
};
l.default = b;
var p = r.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var P = p(s), D = p(l);
const M = {
  lang: Object.assign({
    placeholder: "Válasszon dátumot",
    rangePlaceholder: ["Kezdő dátum", "Befejezés dátuma"]
  }, P.default),
  timePickerLocale: Object.assign({}, D.default)
};
a.default = M;
var $ = r.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var x = $(a);
i.default = x.default;
var d = r.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var O = d(u), T = d(i), F = d(a), S = d(l);
const E = {
  locale: "hu",
  Pagination: O.default,
  DatePicker: F.default,
  TimePicker: S.default,
  Calendar: T.default,
  Table: {
    filterTitle: "Szűrők",
    filterConfirm: "Alkalmazás",
    filterReset: "Visszaállítás",
    selectAll: "Jelenlegi oldal kiválasztása",
    selectInvert: "Jelenlegi oldal inverze",
    sortTitle: "Rendezés"
  },
  Modal: {
    okText: "Alkalmazás",
    cancelText: "Visszavonás",
    justOkText: "Alkalmazás"
  },
  Popconfirm: {
    okText: "Alkalmazás",
    cancelText: "Visszavonás"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Keresés",
    itemUnit: "elem",
    itemsUnit: "elemek"
  },
  Upload: {
    uploading: "Feltöltés...",
    removeFile: "Fájl eltávolítása",
    uploadError: "Feltöltési hiba",
    previewFile: "Fájl előnézet",
    downloadFile: "Fájl letöltése"
  },
  Empty: {
    description: "Nincs adat"
  }
};
o.default = E;
var m = o;
const Y = /* @__PURE__ */ z(m), R = /* @__PURE__ */ k({
  __proto__: null,
  default: Y
}, [m]);
export {
  R as h
};
