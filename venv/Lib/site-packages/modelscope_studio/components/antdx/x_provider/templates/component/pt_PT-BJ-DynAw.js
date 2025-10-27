import { a as P } from "./XProvider-CSZ95uJx.js";
import { i as l } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as $, c as b } from "./common-AHfHwMkE.js";
function x(u, v) {
  for (var p = 0; p < v.length; p++) {
    const a = v[p];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in u)) {
          const m = Object.getOwnPropertyDescriptor(a, r);
          m && Object.defineProperty(u, r, m.get ? m : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, {
    value: "Module"
  }));
}
var n = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var S = {
  // Options
  items_per_page: "/ página",
  jump_to: "Saltar",
  jump_to_confirm: "confirmar",
  page: "Página",
  // Pagination
  prev_page: "Página Anterior",
  next_page: "Página Seguinte",
  prev_5: "Recuar 5 Páginas",
  next_5: "Avançar 5 Páginas",
  prev_3: "Recuar 3 Páginas",
  next_3: "Avançar 3 Páginas",
  page_size: "mărimea paginii"
};
i.default = S;
var d = {}, t = {}, c = {}, T = l.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var f = T($), y = b, h = (0, f.default)((0, f.default)({}, y.commonLocale), {}, {
  locale: "pt_PT",
  today: "Hoje",
  now: "Agora",
  backToToday: "Hoje",
  ok: "OK",
  clear: "Limpar",
  week: "Semana",
  month: "Mês",
  year: "Ano",
  timeSelect: "Selecionar hora",
  dateSelect: "Selecionar data",
  monthSelect: "Selecionar mês",
  yearSelect: "Selecionar ano",
  decadeSelect: "Selecionar década",
  dateFormat: "D/M/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  previousMonth: "Mês anterior (PageUp)",
  nextMonth: "Mês seguinte (PageDown)",
  previousYear: "Ano anterior (Control + left)",
  nextYear: "Ano seguinte (Control + right)",
  previousDecade: "Década anterior",
  nextDecade: "Década seguinte",
  previousCentury: "Século anterior",
  nextCentury: "Século seguinte",
  shortWeekDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
});
c.default = h;
var o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
const D = {
  placeholder: "Hora"
};
o.default = D;
var g = l.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var M = g(c), C = g(o);
const A = {
  lang: Object.assign(Object.assign({}, M.default), {
    placeholder: "Data",
    rangePlaceholder: ["Data inicial", "Data final"],
    today: "Hoje",
    now: "Agora",
    backToToday: "Hoje",
    ok: "OK",
    clear: "Limpar",
    month: "Mês",
    year: "Ano",
    timeSelect: "Hora",
    dateSelect: "Selecionar data",
    monthSelect: "Selecionar mês",
    yearSelect: "Selecionar ano",
    decadeSelect: "Selecionar década",
    yearFormat: "YYYY",
    dateFormat: "D/M/YYYY",
    dayFormat: "D",
    dateTimeFormat: "D/M/YYYY HH:mm:ss",
    monthFormat: "MMMM",
    monthBeforeYear: !1,
    previousMonth: "Mês anterior (PageUp)",
    nextMonth: "Mês seguinte (PageDown)",
    previousYear: "Ano anterior (Control + left)",
    nextYear: "Ano seguinte (Control + right)",
    previousDecade: "Última década",
    nextDecade: "Próxima década",
    previousCentury: "Último século",
    nextCentury: "Próximo século"
  }),
  timePickerLocale: Object.assign(Object.assign({}, C.default), {
    placeholder: "Hora"
  })
};
t.default = A;
var j = l.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var Y = j(t);
d.default = Y.default;
var s = l.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var O = s(i), F = s(d), k = s(t), R = s(o);
const e = "${label} não é um(a) ${type} válido(a)", E = {
  locale: "pt",
  Pagination: O.default,
  DatePicker: k.default,
  TimePicker: R.default,
  Calendar: F.default,
  global: {
    placeholder: "Por favor, selecione"
  },
  Table: {
    filterTitle: "Filtro",
    filterConfirm: "Aplicar",
    filterReset: "Repor",
    filterEmptyText: "Sem filtros",
    filterCheckAll: "Selecionar todos os itens",
    filterSearchPlaceholder: "Pesquisar nos filtros",
    emptyText: "Sem dados",
    selectAll: "Selecionar página atual",
    selectInvert: "Inverter página atual",
    selectNone: "Limpar todos os dados",
    selectionAll: "Selecionar todos os dados",
    sortTitle: "Ordenar",
    expand: "Expandir linha",
    collapse: "Colapsar linha",
    triggerDesc: "Clique para ordenar decrescente",
    triggerAsc: "Clique para ordenar crescente",
    cancelSort: "Clique para cancelar ordenação"
  },
  Tour: {
    Next: "Próximo",
    Previous: "Anterior",
    Finish: "Terminar"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancelar",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancelar"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Procurar...",
    itemUnit: "item",
    itemsUnit: "itens",
    remove: "Remover",
    selectCurrent: "Selecionar página atual",
    removeCurrent: "Remover página atual",
    selectAll: "Selecionar tudo",
    deselectAll: "Desmarcar tudo",
    removeAll: "Remover tudo",
    selectInvert: "Inverter página actual"
  },
  Upload: {
    uploading: "A carregar...",
    removeFile: "Remover",
    uploadError: "Erro ao carregar",
    previewFile: "Pré-visualizar",
    downloadFile: "Descarregar"
  },
  Empty: {
    description: "Sem dados"
  },
  Icon: {
    icon: "ícone"
  },
  Text: {
    edit: "Editar",
    copy: "Copiar",
    copied: "Copiado",
    expand: "Expandir",
    collapse: "Colapsar"
  },
  Form: {
    optional: "(opcional)",
    defaultValidateMessages: {
      default: "Erro de validação no campo ${label}",
      required: "Por favor, introduza ${label}",
      enum: "${label} deve ser um dos valores [${enum}]",
      whitespace: "${label} não pode ser um carácter em branco",
      date: {
        format: "Formato da data ${label} é inválido",
        parse: "${label} não pode ser convertido para data",
        invalid: "${label} é uma data inválida"
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
        len: "${label} deve ter ${len} caracteres",
        min: "${label} deve ter pelo menos ${min} caracteres",
        max: "${label} deve ter até ${max} caracteres",
        range: "${label} deve ter entre ${min}-${max} caracteres"
      },
      number: {
        len: "${label} deve ser igual a ${len}",
        min: "${label} deve ser no mínimo ${min}",
        max: "${label} deve ser no máximo ${max}",
        range: "${label} deve estar entre ${min}-${max}"
      },
      array: {
        len: "Deve ter ${len} ${label}",
        min: "Pelo menos ${min} ${label}",
        max: "No máximo ${max} ${label}",
        range: "A quantidade de ${label} deve estar entre ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} não corresponde ao padrão ${pattern}"
      }
    }
  },
  Image: {
    preview: "Pré-visualizar"
  },
  QRCode: {
    expired: "Código QR expirou",
    refresh: "Atualizar",
    scanned: "Digitalizado"
  },
  ColorPicker: {
    presetEmpty: "Vazio",
    transparent: "Transparente",
    singleColor: "Simples",
    gradientColor: "Gradiente"
  }
};
n.default = E;
var _ = n;
const q = /* @__PURE__ */ P(_), I = /* @__PURE__ */ x({
  __proto__: null,
  default: q
}, [_]);
export {
  I as p
};
