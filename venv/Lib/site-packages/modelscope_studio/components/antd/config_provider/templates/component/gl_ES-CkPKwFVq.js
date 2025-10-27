import { c as $ } from "./Index-nJA-Ual0.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as b, c as x } from "./common-AHfHwMkE.js";
function S(s, f) {
  for (var m = 0; m < f.length; m++) {
    const a = f[m];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in s)) {
          const p = Object.getOwnPropertyDescriptor(a, r);
          p && Object.defineProperty(s, r, p.get ? p : {
            enumerable: !0,
            get: () => a[r]
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
var E = {
  // Options
  items_per_page: "/ páxina",
  jump_to: "Ir a",
  jump_to_confirm: "confirmar",
  page: "",
  // Pagination
  prev_page: "Páxina anterior",
  next_page: "Páxina seguinte",
  prev_5: "5 páxinas previas",
  next_5: "5 páxinas seguintes",
  prev_3: "3 páxinas previas",
  next_3: "3 páxinas seguintes",
  page_size: "Page Size"
};
i.default = E;
var c = {}, t = {}, d = {}, y = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var g = y(b), h = x, P = (0, g.default)((0, g.default)({}, h.commonLocale), {}, {
  locale: "gl_ES",
  today: "Hoxe",
  now: "Agora",
  backToToday: "Voltar a hoxe",
  ok: "Aceptar",
  clear: "Limpar",
  week: "Semana",
  month: "Mes",
  year: "Ano",
  timeSelect: "Seleccionar hora",
  dateSelect: "Seleccionar data",
  monthSelect: "Elexir un mes",
  yearSelect: "Elexir un año",
  decadeSelect: "Elexir unha década",
  dateFormat: "D/M/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  previousMonth: "Mes anterior (PageUp)",
  nextMonth: "Mes seguinte (PageDown)",
  previousYear: "Ano anterior (Control + left)",
  nextYear: "Ano seguinte (Control + right)",
  previousDecade: "Década anterior",
  nextDecade: "Década seguinte",
  previousCentury: "Século anterior",
  nextCentury: "Século seguinte"
});
d.default = P;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const j = {
  placeholder: "Escolla hora"
};
l.default = j;
var v = o.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var D = v(d), O = v(l);
const M = {
  lang: Object.assign({
    placeholder: "Escolla data",
    rangePlaceholder: ["Data inicial", "Data final"]
  }, D.default),
  timePickerLocale: Object.assign({}, O.default)
};
t.default = M;
var T = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var A = T(t);
c.default = A.default;
var u = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var q = u(i), C = u(c), k = u(t), Y = u(l);
const e = "${label} non é un ${type} válido", F = {
  locale: "gl",
  Pagination: q.default,
  DatePicker: k.default,
  TimePicker: Y.default,
  Calendar: C.default,
  global: {
    placeholder: "Escolla"
  },
  Table: {
    filterTitle: "Filtrar menú",
    filterConfirm: "Aceptar",
    filterReset: "Reiniciar",
    selectAll: "Seleccionar todo",
    selectInvert: "Invertir selección",
    sortTitle: "Ordenar"
  },
  Modal: {
    okText: "Aceptar",
    cancelText: "Cancelar",
    justOkText: "Aceptar"
  },
  Popconfirm: {
    okText: "Aceptar",
    cancelText: "Cancelar"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Buscar aquí",
    itemUnit: "elemento",
    itemsUnit: "elementos"
  },
  Upload: {
    uploading: "Subindo...",
    removeFile: "Eliminar arquivo",
    uploadError: "Error ao subir o arquivo",
    previewFile: "Vista previa",
    downloadFile: "Descargar arquivo"
  },
  Empty: {
    description: "Non hai datos"
  },
  Icon: {
    icon: "icona"
  },
  Text: {
    edit: "editar",
    copy: "copiar",
    copied: "copiado",
    expand: "expandir"
  },
  Form: {
    defaultValidateMessages: {
      default: "Error de validación do campo ${label}",
      required: "Por favor complete ${label}",
      enum: "${label} ten que ser un de [${enum}]",
      whitespace: "${label} non pode ter ningún caracter en branco",
      date: {
        format: "O formato de data ${label} non é válido",
        parse: "${label} non se pode convertir a unha data",
        invalid: "${label} é unha data inválida"
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
        len: "${label} debe ter ${len} caracteres",
        min: "${label} debe ter como mínimo ${min} caracteres",
        max: "${label} debe ter ata ${max} caracteres",
        range: "${label} debe ter entre ${min}-${max} caracteres"
      },
      number: {
        len: "${label} debe ser igual a ${len}",
        min: "${label} valor mínimo é ${min}",
        max: "${label} valor máximo é ${max}",
        range: "${label} debe estar entre ${min}-${max}"
      },
      array: {
        len: "Debe ser ${len} ${label}",
        min: "Como mínimo ${min} ${label}",
        max: "Como máximo ${max} ${label}",
        range: "O valor de ${label} debe estar entre ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} non coincide co patrón ${pattern}"
      }
    }
  }
};
n.default = F;
var _ = n;
const w = /* @__PURE__ */ $(_), V = /* @__PURE__ */ S({
  __proto__: null,
  default: w
}, [_]);
export {
  V as g
};
