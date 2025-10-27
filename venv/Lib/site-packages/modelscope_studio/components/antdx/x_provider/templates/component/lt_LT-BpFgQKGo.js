import { a as P } from "./XProvider-CSZ95uJx.js";
import { i as l } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as g, c as _ } from "./common-AHfHwMkE.js";
function $(m, k) {
  for (var p = 0; p < k.length; p++) {
    const a = k[p];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const i in a)
        if (i !== "default" && !(i in m)) {
          const c = Object.getOwnPropertyDescriptor(a, i);
          c && Object.defineProperty(m, i, c.get ? c : {
            enumerable: !0,
            get: () => a[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, {
    value: "Module"
  }));
}
var s = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var y = {
  // Options
  items_per_page: "/ psl.",
  jump_to: "Pereiti į",
  jump_to_confirm: "patvirtinti",
  page: "psl.",
  // Pagination
  prev_page: "Atgal",
  next_page: "Pirmyn",
  prev_5: "Grįžti 5 psl.",
  next_5: "Peršokti 5 psl.",
  prev_3: "Grįžti 3 psl.",
  next_3: "Peršokti 3 psl.",
  page_size: "Puslapio dydis"
};
o.default = y;
var n = {}, t = {}, u = {}, T = l.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var v = T(g), x = _, h = (0, v.default)((0, v.default)({}, x.commonLocale), {}, {
  locale: "lt_LT",
  today: "Šiandien",
  now: "Dabar",
  backToToday: "Rodyti šiandien",
  ok: "Gerai",
  clear: "Išvalyti",
  week: "Savaitė",
  month: "Mėnesis",
  year: "Metai",
  timeSelect: "Pasirinkti laiką",
  dateSelect: "Pasirinkti datą",
  weekSelect: "Pasirinkti savaitę",
  monthSelect: "Pasirinkti mėnesį",
  yearSelect: "Pasirinkti metus",
  decadeSelect: "Pasirinkti dešimtmetį",
  dateFormat: "YYYY-MM-DD",
  dayFormat: "DD",
  dateTimeFormat: "YYYY-MM-DD HH:MM:SS",
  previousMonth: "Buvęs mėnesis (PageUp)",
  nextMonth: "Kitas mėnesis (PageDown)",
  previousYear: "Buvę metai (Control + left)",
  nextYear: "Kiti metai (Control + right)",
  previousDecade: "Buvęs dešimtmetis",
  nextDecade: "Kitas dešimtmetis",
  previousCentury: "Buvęs amžius",
  nextCentury: "Kitas amžius"
});
u.default = h;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const j = {
  placeholder: "Pasirinkite laiką",
  rangePlaceholder: ["Pradžios laikas", "Pabaigos laikas"]
};
r.default = j;
var b = l.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var L = b(u), M = b(r);
const D = {
  lang: Object.assign({
    placeholder: "Pasirinkite datą",
    yearPlaceholder: "Pasirinkite metus",
    quarterPlaceholder: "Pasirinkite ketvirtį",
    monthPlaceholder: "Pasirinkite mėnesį",
    weekPlaceholder: "Pasirinkite savaitę",
    rangePlaceholder: ["Pradžios data", "Pabaigos data"],
    rangeYearPlaceholder: ["Pradžios metai", "Pabaigos metai"],
    rangeQuarterPlaceholder: ["Pradžios ketvirtis", "Pabaigos ketvirtis"],
    rangeMonthPlaceholder: ["Pradžios mėnesis", "Pabaigos mėnesis"],
    rangeWeekPlaceholder: ["Pradžios savaitė", "Pabaigos savaitė"]
  }, L.default),
  timePickerLocale: Object.assign({}, M.default)
};
t.default = D;
var S = l.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var A = S(t);
n.default = A.default;
var d = l.default;
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var C = d(o), O = d(n), R = d(t), F = d(r);
const e = "${label} neatitinka tipo ${type}", I = {
  locale: "lt",
  Pagination: C.default,
  DatePicker: R.default,
  TimePicker: F.default,
  Calendar: O.default,
  global: {
    placeholder: "Pasirinkite"
  },
  Table: {
    filterTitle: "Filtras",
    filterConfirm: "Gerai",
    filterReset: "Atstatyti",
    filterEmptyText: "Be filtrų",
    filterCheckAll: "Pasirinkti visus",
    filterSearchPlaceholder: "Ieškoti filtruose",
    emptyText: "Nėra duomenų",
    selectAll: "Pasirinkti viską",
    selectInvert: "Apversti pasirinkimą",
    selectNone: "Išvalyti visus",
    selectionAll: "Rinktis visus",
    sortTitle: "Rikiavimas",
    expand: "Išskleisti",
    collapse: "Suskleisti",
    triggerDesc: "Spustelėkite norėdami rūšiuoti mažėjančia tvarka",
    triggerAsc: "Spustelėkite norėdami rūšiuoti didėjančia tvarka",
    cancelSort: "Spustelėkite, kad atšauktumėte rūšiavimą"
  },
  Tour: {
    Next: "Kitas",
    Previous: "Ankstesnis",
    Finish: "Baigti"
  },
  Modal: {
    okText: "Taip",
    cancelText: "Atšaukti",
    justOkText: "Gerai"
  },
  Popconfirm: {
    okText: "Taip",
    cancelText: "Atšaukti"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Paieška",
    itemUnit: "vnt.",
    itemsUnit: "vnt.",
    remove: "Pašalinti",
    selectCurrent: "Pasirinkti dabartinį puslapį",
    removeCurrent: "Ištrinti dabartinį puslapį",
    selectAll: "Pasirinkti viską",
    removeAll: "Ištrinti viską",
    selectInvert: "Apversti pasirinkimą"
  },
  Upload: {
    uploading: "Įkeliami duomenys...",
    removeFile: "Ištrinti failą",
    uploadError: "Įkeliant įvyko klaida",
    previewFile: "Failo peržiūra",
    downloadFile: "Atsisiųsti failą"
  },
  Empty: {
    description: "Nėra duomenų"
  },
  Icon: {
    icon: "piktograma"
  },
  Text: {
    edit: "Redaguoti",
    copy: "Kopijuoti",
    copied: "Nukopijuota",
    expand: "Plačiau"
  },
  Form: {
    optional: "(neprivaloma)",
    defaultValidateMessages: {
      default: "Klaida laukelyje ${label}",
      required: "Prašome įvesti ${label}",
      enum: "${label} turi būti vienas iš [${enum}]",
      whitespace: "${label} negali likti tuščias",
      date: {
        format: "${label} neteisingas datos formatas",
        parse: "${label} negali būti konvertuotas į datą",
        invalid: "${label} neatitinka datos formato"
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
        len: "${label} turi būti ${len} simbolių",
        min: "${label} turi būti bent ${min} simbolių",
        max: "${label} turi būti ne ilgesnis nei ${max} simbolių",
        range: "Laukelio ${label} reikšmės ribos ${min}-${max} simbolių"
      },
      number: {
        len: "${label} turi būti lygi ${len}",
        min: "${label} turi būti lygus arba didesnis už ${min}",
        max: "${label} turi būti lygus arba mažesnis už ${max}",
        range: "${label} turi būti tarp ${min}-${max}"
      },
      array: {
        len: "Pasirinktas kiekis ${label} turi būti lygus ${len}",
        min: "Pasirinktas kiekis ${label} turi būti bent ${min}",
        max: "Pasirinktas kiekis ${label} turi būti ne ilgesnis nei ${max}",
        range: "Pasirinktas ${label} kiekis turi būti tarp ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} neatitinka modelio ${pattern}"
      }
    }
  },
  Image: {
    preview: "Peržiūrėti"
  },
  QRCode: {
    expired: "QR kodo galiojimas baigėsi",
    refresh: "Atnaujinti"
  },
  ColorPicker: {
    presetEmpty: "Tuščia",
    transparent: "Permatomas",
    singleColor: "Vieno spalvos",
    gradientColor: "Gradientas"
  }
};
s.default = I;
var f = s;
const Y = /* @__PURE__ */ P(f), K = /* @__PURE__ */ $({
  __proto__: null,
  default: Y
}, [f]);
export {
  K as l
};
