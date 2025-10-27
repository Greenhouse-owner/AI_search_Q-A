import { a as b } from "./XProvider-CSZ95uJx.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as $, c as O } from "./common-AHfHwMkE.js";
function x(s, f) {
  for (var p = 0; p < f.length; p++) {
    const a = f[p];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in s)) {
          const m = Object.getOwnPropertyDescriptor(a, t);
          m && Object.defineProperty(s, t, m.get ? m : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, {
    value: "Module"
  }));
}
var n = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = {
  // Options
  items_per_page: "/ pagină",
  jump_to: "Mergi la",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination
  prev_page: "Pagina Anterioară",
  next_page: "Pagina Următoare",
  prev_5: "5 Pagini Anterioare",
  next_5: "5 Pagini Următoare",
  prev_3: "3 Pagini Anterioare",
  next_3: "3 Pagini Următoare",
  page_size: "Page Size"
};
i.default = y;
var u = {}, r = {}, c = {}, P = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var g = P($), z = O, A = (0, g.default)((0, g.default)({}, z.commonLocale), {}, {
  locale: "ro_RO",
  today: "Azi",
  now: "Acum",
  backToToday: "Înapoi la azi",
  ok: "OK",
  clear: "Șterge",
  week: "Săptămână",
  month: "Lună",
  year: "An",
  timeSelect: "selectează timpul",
  dateSelect: "selectează data",
  weekSelect: "Alege o săptămână",
  monthSelect: "Alege o lună",
  yearSelect: "Alege un an",
  decadeSelect: "Alege un deceniu",
  dateFormat: "D/M/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  previousMonth: "Luna anterioară (PageUp)",
  nextMonth: "Luna următoare (PageDown)",
  previousYear: "Anul anterior (Control + stânga)",
  nextYear: "Anul următor (Control + dreapta)",
  previousDecade: "Deceniul anterior",
  nextDecade: "Deceniul următor",
  previousCentury: "Secolul anterior",
  nextCentury: "Secolul următor"
});
c.default = A;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const R = {
  placeholder: "Selectează ora"
};
l.default = R;
var v = o.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var S = v(c), j = v(l);
const D = {
  lang: Object.assign({
    placeholder: "Selectează data",
    rangePlaceholder: ["Data start", "Data sfârșit"]
  }, S.default),
  timePickerLocale: Object.assign({}, j.default)
};
r.default = D;
var T = o.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var h = T(r);
u.default = h.default;
var d = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var M = d(i), k = d(u), w = d(r), C = d(l);
const e = "${label} nu conține tipul corect (${type})", F = {
  locale: "ro",
  Pagination: M.default,
  DatePicker: w.default,
  TimePicker: C.default,
  Calendar: k.default,
  global: {
    placeholder: "Selectează"
  },
  Table: {
    filterTitle: "Filtrează",
    filterConfirm: "OK",
    filterReset: "Resetează",
    filterEmptyText: "Fără filtre",
    emptyText: "Nu există date",
    selectAll: "Selectează pagina curentă",
    selectInvert: "Inversează pagina curentă",
    selectNone: "Șterge selecția",
    selectionAll: "Selectează toate datele",
    sortTitle: "Ordonează",
    expand: "Extinde rândul",
    collapse: "Micșorează rândul",
    triggerDesc: "Apasă pentru ordonare descrescătoare",
    triggerAsc: "Apasă pentru ordonare crescătoare",
    cancelSort: "Apasă pentru a anula ordonarea"
  },
  Modal: {
    okText: "OK",
    cancelText: "Anulare",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Anulare"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Căutare",
    itemUnit: "element",
    itemsUnit: "elemente",
    remove: "Șterge",
    selectCurrent: "Selectează pagina curentă",
    removeCurrent: "Șterge pagina curentă",
    selectAll: "Selectează toate datele",
    removeAll: "Șterge toate datele",
    selectInvert: "Inversează pagina curentă"
  },
  Upload: {
    uploading: "Se transferă...",
    removeFile: "Înlătură fișierul",
    uploadError: "Eroare la upload",
    previewFile: "Previzualizare fișier",
    downloadFile: "Descărcare fișier"
  },
  Empty: {
    description: "Fără date"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "editează",
    copy: "copiază",
    copied: "copiat",
    expand: "extinde"
  },
  Form: {
    optional: "(opțional)",
    defaultValidateMessages: {
      default: "Eroare la validarea câmpului ${label}",
      required: "Vă rugăm introduceți ${label}",
      enum: "${label} trebuie să fie una din valorile [${enum}]",
      whitespace: "${label} nu poate fi gol",
      date: {
        format: "${label} - data nu este în formatul corect",
        parse: "${label} nu poate fi convertit la o dată",
        invalid: "${label} este o dată invalidă"
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
        len: "${label} trebuie să conțină ${len} caractere",
        min: "${label} trebuie să conțină cel puțin ${min} caractere",
        max: "${label} trebuie să conțină cel mult ${max} caractere",
        range: "${label} trebuie să conțină între ${min}-${max} caractere"
      },
      number: {
        len: "${label} trebuie să conțină ${len} cifre",
        min: "${label} trebuie să fie minim ${min}",
        max: "${label} trebuie să fie maxim ${max}",
        range: "${label} trebuie să fie între ${min}-${max}"
      },
      array: {
        len: "${label} trebuie să conțină ${len} elemente",
        min: "${label} trebuie să conțină cel puțin ${min} elemente",
        max: "${label} trebuie să conțină cel mult ${max} elemente",
        range: "${label} trebuie să conțină între ${min}-${max} elemente"
      },
      pattern: {
        mismatch: "${label} nu respectă șablonul ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
n.default = F;
var _ = n;
const Y = /* @__PURE__ */ b(_), I = /* @__PURE__ */ x({
  __proto__: null,
  default: Y
}, [_]);
export {
  I as r
};
