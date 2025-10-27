import { c as $ } from "./Index-nJA-Ual0.js";
import { i as r } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as b, c as j } from "./common-AHfHwMkE.js";
function k(c, p) {
  for (var g = 0; g < p.length; g++) {
    const a = p[g];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in c)) {
          const s = Object.getOwnPropertyDescriptor(a, l);
          s && Object.defineProperty(c, l, s.get ? s : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, {
    value: "Module"
  }));
}
var o = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var x = {
  // Options
  items_per_page: "/ pagina",
  jump_to: "Ga naar",
  jump_to_confirm: "bevestigen",
  page: "Pagina",
  // Pagination
  prev_page: "Vorige pagina",
  next_page: "Volgende pagina",
  prev_5: "Vorige 5 pagina's",
  next_5: "Volgende 5 pagina's",
  prev_3: "Vorige 3 pagina's",
  next_3: "Volgende 3 pagina's",
  page_size: "pagina grootte"
};
i.default = x;
var d = {}, t = {}, m = {}, h = r.default;
Object.defineProperty(m, "__esModule", {
  value: !0
});
m.default = void 0;
var f = h(b), y = j, P = (0, f.default)((0, f.default)({}, y.commonLocale), {}, {
  locale: "nl_NL",
  today: "Vandaag",
  now: "Nu",
  backToToday: "Terug naar vandaag",
  ok: "OK",
  clear: "Reset",
  week: "Week",
  month: "Maand",
  year: "Jaar",
  timeSelect: "Selecteer tijd",
  dateSelect: "Selecteer datum",
  monthSelect: "Kies een maand",
  yearSelect: "Kies een jaar",
  decadeSelect: "Kies een decennium",
  dateFormat: "D-M-YYYY",
  dateTimeFormat: "D-M-YYYY HH:mm:ss",
  previousMonth: "Vorige maand (PageUp)",
  nextMonth: "Volgende maand (PageDown)",
  previousYear: "Vorig jaar (Control + left)",
  nextYear: "Volgend jaar (Control + right)",
  previousDecade: "Vorig decennium",
  nextDecade: "Volgend decennium",
  previousCentury: "Vorige eeuw",
  nextCentury: "Volgende eeuw"
});
m.default = P;
var n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
const V = {
  placeholder: "Selecteer tijd",
  rangePlaceholder: ["Start tijd", "Eind tijd"]
};
n.default = V;
var v = r.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var S = v(m), w = v(n);
const N = {
  lang: Object.assign({
    monthPlaceholder: "Selecteer maand",
    placeholder: "Selecteer datum",
    quarterPlaceholder: "Selecteer kwartaal",
    rangeMonthPlaceholder: ["Begin maand", "Eind maand"],
    rangePlaceholder: ["Begin datum", "Eind datum"],
    rangeWeekPlaceholder: ["Begin week", "Eind week"],
    rangeYearPlaceholder: ["Begin jaar", "Eind jaar"],
    weekPlaceholder: "Selecteer week",
    yearPlaceholder: "Selecteer jaar"
  }, S.default),
  timePickerLocale: Object.assign({}, w.default)
};
t.default = N;
var T = r.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var L = T(t);
d.default = L.default;
var u = r.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var M = u(i), O = u(d), D = u(t), z = u(n);
const e = "${label} is geen geldige ${type}", K = {
  locale: "nl",
  Pagination: M.default,
  DatePicker: D.default,
  TimePicker: z.default,
  Calendar: O.default,
  global: {
    placeholder: "Maak een selectie"
  },
  Table: {
    cancelSort: "Klik om sortering te annuleren",
    collapse: "Rij inklappen",
    emptyText: "Geen data",
    expand: "Rij uitklappen",
    filterConfirm: "OK",
    filterEmptyText: "Geen filters",
    filterReset: "Reset",
    filterTitle: "Filteren",
    selectAll: "Selecteer huidige pagina",
    selectInvert: "Keer volgorde om",
    selectNone: "Maak selectie leeg",
    selectionAll: "Selecteer alle data",
    sortTitle: "Sorteren",
    triggerAsc: "Klik om oplopend te sorteren",
    triggerDesc: "Klik om aflopend te sorteren"
  },
  Tour: {
    Next: "Volgende",
    Previous: "Vorige",
    Finish: "Voltooien"
  },
  Modal: {
    okText: "OK",
    cancelText: "Annuleer",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Annuleer"
  },
  Transfer: {
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Verwijder",
    removeAll: "Verwijder alles",
    removeCurrent: "Verwijder huidige pagina",
    searchPlaceholder: "Zoek hier",
    selectAll: "Selecteer alles",
    selectCurrent: "Selecteer huidige pagina",
    selectInvert: "Huidige pagina omkeren",
    titles: ["", ""]
  },
  Upload: {
    downloadFile: "Bestand downloaden",
    previewFile: "Preview file",
    removeFile: "Verwijder bestand",
    uploadError: "Fout tijdens uploaden",
    uploading: "Uploaden..."
  },
  Empty: {
    description: "Geen gegevens"
  },
  Icon: {
    icon: "icoon"
  },
  Text: {
    edit: "Bewerken",
    copy: "kopiëren",
    copied: "Gekopieerd",
    expand: "Uitklappen"
  },
  Form: {
    optional: "(optioneel)",
    defaultValidateMessages: {
      default: "Validatiefout voor ${label}",
      required: "Gelieve ${label} in te vullen",
      enum: "${label} moet één van [${enum}] zijn",
      whitespace: "${label} mag geen blanco teken zijn",
      date: {
        format: "${label} heeft een ongeldig formaat",
        parse: "${label} kan niet naar een datum omgezet worden",
        invalid: "${label} is een ongeldige datum"
      },
      types: {
        string: e,
        method: e,
        array: e,
        object: e,
        number: e,
        date: e,
        boolean: e,
        integer: e,
        float: e,
        regexp: e,
        email: e,
        url: e,
        hex: e
      },
      string: {
        len: "${label} moet ${len} karakters lang zijn",
        min: "${label} moet minimaal ${min} karakters lang zijn",
        max: "${label} mag maximaal ${max} karakters lang zijn",
        range: "${label} moet tussen ${min}-${max} karakters lang zijn"
      },
      number: {
        len: "${label} moet gelijk zijn aan ${len}",
        min: "${label} moet minimaal ${min} zijn",
        max: "${label} mag maximaal ${max} zijn",
        range: "${label} moet tussen ${min}-${max} liggen"
      },
      array: {
        len: "Moeten ${len} ${label} zijn",
        min: "Minimaal ${min} ${label}",
        max: "maximaal ${max} ${label}",
        range: "Het aantal ${label} moet tussen ${min}-${max} liggen"
      },
      pattern: {
        mismatch: "${label} komt niet overeen met het patroon ${pattern}"
      }
    }
  },
  Image: {
    preview: "Voorbeeld"
  }
};
o.default = K;
var _ = o;
const E = /* @__PURE__ */ $(_), A = /* @__PURE__ */ k({
  __proto__: null,
  default: E
}, [_]);
export {
  A as n
};
