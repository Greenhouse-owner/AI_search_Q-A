import { a as $ } from "./XProvider-CSZ95uJx.js";
import { i as l } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as x, c as b } from "./common-AHfHwMkE.js";
function h(p, v) {
  for (var u = 0; u < v.length; u++) {
    const a = v[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in p)) {
          const m = Object.getOwnPropertyDescriptor(a, r);
          m && Object.defineProperty(p, r, m.get ? m : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(p, Symbol.toStringTag, {
    value: "Module"
  }));
}
var i = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var P = {
  // Options
  items_per_page: "/ página",
  jump_to: "Vá até",
  jump_to_confirm: "confirme",
  page: "Página",
  // Pagination
  prev_page: "Página anterior",
  next_page: "Próxima página",
  prev_5: "5 páginas anteriores",
  next_5: "5 próximas páginas",
  prev_3: "3 páginas anteriores",
  next_3: "3 próximas páginas",
  page_size: "tamanho da página"
};
n.default = P;
var d = {}, o = {}, s = {}, y = l.default;
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var f = y(x), R = b, S = (0, f.default)((0, f.default)({}, R.commonLocale), {}, {
  locale: "pt_BR",
  today: "Hoje",
  now: "Agora",
  backToToday: "Voltar para hoje",
  ok: "OK",
  clear: "Limpar",
  week: "Semana",
  month: "Mês",
  year: "Ano",
  timeSelect: "Selecionar hora",
  dateSelect: "Selecionar data",
  monthSelect: "Escolher mês",
  yearSelect: "Escolher ano",
  decadeSelect: "Escolher década",
  dateFormat: "D/M/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !1,
  previousMonth: "Mês anterior (PageUp)",
  nextMonth: "Próximo mês (PageDown)",
  previousYear: "Ano anterior (Control + esquerda)",
  nextYear: "Próximo ano (Control + direita)",
  previousDecade: "Década anterior",
  nextDecade: "Próxima década",
  previousCentury: "Século anterior",
  nextCentury: "Próximo século",
  shortWeekDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
});
s.default = S;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const O = {
  placeholder: "Hora"
};
t.default = O;
var _ = l.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var j = _(s), D = _(t);
const T = {
  lang: Object.assign({
    placeholder: "Selecionar data",
    rangePlaceholder: ["Data inicial", "Data final"]
  }, j.default),
  timePickerLocale: Object.assign({}, D.default)
};
o.default = T;
var B = l.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var M = B(o);
d.default = M.default;
var c = l.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var A = c(n), C = c(d), q = c(o), E = c(t);
const e = "${label} não é um ${type} válido", k = {
  locale: "pt-br",
  Pagination: A.default,
  DatePicker: q.default,
  TimePicker: E.default,
  Calendar: C.default,
  global: {
    placeholder: "Por favor escolha"
  },
  Table: {
    filterTitle: "Menu de Filtro",
    filterConfirm: "OK",
    filterReset: "Resetar",
    filterEmptyText: "Sem filtros",
    filterCheckAll: "Selecionar todos os itens",
    filterSearchPlaceholder: "Pesquisar nos filtros",
    emptyText: "Sem conteúdo",
    selectAll: "Selecionar página atual",
    selectInvert: "Inverter seleção",
    selectNone: "Apagar todo o conteúdo",
    selectionAll: "Selecionar todo o conteúdo",
    sortTitle: "Ordenar título",
    expand: "Expandir linha",
    collapse: "Colapsar linha",
    triggerDesc: "Clique organiza por descendente",
    triggerAsc: "Clique organiza por ascendente",
    cancelSort: "Clique para cancelar organização"
  },
  Tour: {
    Next: "Próximo",
    Previous: "Anterior",
    Finish: "Finalizar"
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
    searchPlaceholder: "Procurar",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remover",
    selectCurrent: "Selecionar página atual",
    removeCurrent: "Remover página atual",
    selectAll: "Selecionar todos",
    removeAll: "Remover todos",
    selectInvert: "Inverter seleção atual"
  },
  Upload: {
    uploading: "Enviando...",
    removeFile: "Remover arquivo",
    uploadError: "Erro no envio",
    previewFile: "Visualizar arquivo",
    downloadFile: "Baixar arquivo"
  },
  Empty: {
    description: "Não há dados"
  },
  Icon: {
    icon: "ícone"
  },
  Text: {
    edit: "editar",
    copy: "copiar",
    copied: "copiado",
    expand: "expandir"
  },
  Form: {
    optional: "(opcional)",
    defaultValidateMessages: {
      default: "Erro ${label} na validação de campo",
      required: "Por favor, insira ${label}",
      enum: "${label} deve ser um dos seguinte: [${enum}]",
      whitespace: "${label} não pode ser um carácter vazio",
      date: {
        format: " O formato de data ${label} é inválido",
        parse: "${label} não pode ser convertido para uma data",
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
        len: "${label} deve possuir ${len} caracteres",
        min: "${label} deve possuir ao menos ${min} caracteres",
        max: "${label} deve possuir no máximo ${max} caracteres",
        range: "${label} deve possuir entre ${min} e ${max} caracteres"
      },
      number: {
        len: "${label} deve ser igual à ${len}",
        min: "O valor mínimo de ${label} é ${min}",
        max: "O valor máximo de ${label} é ${max}",
        range: "${label} deve estar entre ${min} e ${max}"
      },
      array: {
        len: "Deve ser ${len} ${label}",
        min: "No mínimo ${min} ${label}",
        max: "No máximo ${max} ${label}",
        range: "A quantidade de ${label} deve estar entre ${min} e ${max}"
      },
      pattern: {
        mismatch: "${label} não se encaixa no padrão ${pattern}"
      }
    }
  },
  Image: {
    preview: "Pré-visualização"
  }
};
i.default = k;
var g = i;
const F = /* @__PURE__ */ $(g), N = /* @__PURE__ */ h({
  __proto__: null,
  default: F
}, [g]);
export {
  N as p
};
