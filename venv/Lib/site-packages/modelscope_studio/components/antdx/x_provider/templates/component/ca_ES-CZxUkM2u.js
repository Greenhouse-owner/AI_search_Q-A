import { a as $ } from "./XProvider-CSZ95uJx.js";
import { i as n } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as b, c as S } from "./common-AHfHwMkE.js";
function x(m, f) {
  for (var u = 0; u < f.length; u++) {
    const a = f[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in m)) {
          const p = Object.getOwnPropertyDescriptor(a, r);
          p && Object.defineProperty(m, r, p.get ? p : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, {
    value: "Module"
  }));
}
var i = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var h = {
  // Options
  items_per_page: "/ pàgina",
  jump_to: "Anar a",
  jump_to_confirm: "Confirma",
  page: "",
  // Pagination
  prev_page: "Pàgina prèvia",
  next_page: "Pàgina següent",
  prev_5: "5 pàgines prèvies",
  next_5: "5 pàgines següents",
  prev_3: "3 pàgines prèvies",
  next_3: "3 pàgines següents",
  page_size: "mida de la pàgina"
};
o.default = h;
var c = {}, t = {}, d = {}, E = n.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var v = E(b), y = S, D = (0, v.default)((0, v.default)({}, y.commonLocale), {}, {
  locale: "ca_ES",
  today: "Avui",
  now: "Ara",
  backToToday: "Tornar a avui",
  ok: "Acceptar",
  clear: "Netejar",
  week: "Setmana",
  month: "Mes",
  year: "Any",
  timeSelect: "Seleccionar hora",
  dateSelect: "Seleccionar data",
  monthSelect: "Escollir un mes",
  yearSelect: "Escollir un any",
  decadeSelect: "Escollir una dècada",
  dateFormat: "D/M/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  previousMonth: "Mes anterior (PageUp)",
  nextMonth: "Mes següent (PageDown)",
  previousYear: "Any anterior (Control + left)",
  nextYear: "Mes següent (Control + right)",
  previousDecade: "Dècada anterior",
  nextDecade: "Dècada següent",
  previousCentury: "Segle anterior",
  nextCentury: "Segle següent"
});
d.default = D;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const P = {
  placeholder: "Seleccionar hora"
};
l.default = P;
var g = n.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var j = g(d), T = g(l);
const M = {
  lang: Object.assign({
    placeholder: "Seleccionar data",
    rangePlaceholder: ["Data inicial", "Data final"]
  }, j.default),
  timePickerLocale: Object.assign({}, T.default)
};
t.default = M;
var O = n.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var C = O(t);
c.default = C.default;
var s = n.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var A = s(o), k = s(c), Y = s(t), F = s(l);
const e = "${label} no és un ${type} vàlid", w = {
  locale: "ca",
  Pagination: A.default,
  DatePicker: Y.default,
  TimePicker: F.default,
  Calendar: k.default,
  global: {
    placeholder: "Seleccionar"
  },
  Table: {
    filterTitle: "Filtrar el menú",
    filterConfirm: "D’acord",
    filterReset: "Reiniciar",
    filterEmptyText: "Sense filtres",
    selectAll: "Seleccionar la pàgina actual",
    selectInvert: "Invertir la selecció",
    selectionAll: "Seleccionar-ho tot",
    sortTitle: "Ordenar",
    expand: "Ampliar la fila",
    collapse: "Plegar la fila",
    triggerDesc: "Ordre descendent",
    triggerAsc: "Ordre ascendent",
    cancelSort: "Desactivar l’ordre"
  },
  Modal: {
    okText: "D’acord",
    cancelText: "Cancel·lar",
    justOkText: "D’acord"
  },
  Popconfirm: {
    okText: "D’acord",
    cancelText: "Cancel·lar"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Cercar",
    itemUnit: "ítem",
    itemsUnit: "ítems",
    remove: "Eliminar",
    selectCurrent: "Seleccionar la pàgina actual",
    removeCurrent: "Eliminar la selecció",
    selectAll: "Seleccionar-ho tot",
    removeAll: "Eliminar-ho tot",
    selectInvert: "Invertir la selecció"
  },
  Upload: {
    uploading: "Carregant…",
    removeFile: "Eliminar el fitxer",
    uploadError: "Error de càrrega",
    previewFile: "Vista prèvia del fitxer",
    downloadFile: "Baixar el fitxer"
  },
  Empty: {
    description: "Sense dades"
  },
  Icon: {
    icon: "icona"
  },
  Text: {
    edit: "Editar",
    copy: "Copiar",
    copied: "Copiat",
    expand: "Ampliar"
  },
  Form: {
    optional: "(opcional)",
    defaultValidateMessages: {
      default: "Error de validació del camp ${label}",
      required: "Introdueix ${label}",
      enum: "${label} ha de ser un de [${enum}]",
      whitespace: "${label} no pot ser un caràcter en blanc",
      date: {
        format: "El format de la data de ${label} és invàlid",
        parse: "${label} no es pot convertir a cap data",
        invalid: "${label} és una data invàlida"
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
        len: "${label} ha de ser de ${len} caràcters",
        min: "${label} ha de tenir com a mínim ${min} caràcters",
        max: "${label} ha de tenir com a màxim ${max} caràcters",
        range: "${label} ha d’estar entre ${min} i ${max} caràcters"
      },
      number: {
        len: "${label} ha de ser igual a ${len}",
        min: "${label} ha de tenir un valor mínim de ${min}",
        max: "${label} ha de tenir un valor màxim de ${max}",
        range: "${label} ha de tenir un valor entre ${min} i ${max}"
      },
      array: {
        len: "La llargada de ${label} ha de ser de ${len}",
        min: "La llargada de ${label} ha de ser com a mínim de ${min}",
        max: "La llargada de ${label} ha de ser com a màxim de ${max}",
        range: "La llargada de ${label} ha d’estar entre ${min} i ${max}"
      },
      pattern: {
        mismatch: "${label} no coincideix amb el patró ${pattern}"
      }
    }
  }
};
i.default = w;
var _ = i;
const R = /* @__PURE__ */ $(_), U = /* @__PURE__ */ x({
  __proto__: null,
  default: R
}, [_]);
export {
  U as c
};
