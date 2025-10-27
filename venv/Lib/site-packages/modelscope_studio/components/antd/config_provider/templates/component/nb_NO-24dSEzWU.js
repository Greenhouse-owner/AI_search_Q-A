import { c as _ } from "./Index-nJA-Ual0.js";
import { i as n } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as $, c as k } from "./common-AHfHwMkE.js";
function y(u, v) {
  for (var c = 0; c < v.length; c++) {
    const t = v[c];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in u)) {
          const g = Object.getOwnPropertyDescriptor(t, r);
          g && Object.defineProperty(u, r, g.get ? g : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, {
    value: "Module"
  }));
}
var o = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var O = {
  // Options
  items_per_page: "/ side",
  jump_to: "Gå til side",
  page: "Side",
  // Pagination
  prev_page: "Forrige side",
  next_page: "Neste side",
  prev_5: "5 forrige",
  next_5: "5 neste",
  prev_3: "3 forrige",
  next_3: "3 neste",
  page_size: "sidestørrelse"
};
i.default = O;
var d = {}, l = {}, s = {}, h = n.default;
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var p = h($), x = k, j = (0, p.default)((0, p.default)({}, x.commonLocale), {}, {
  locale: "nb_NO",
  today: "I dag",
  now: "Nå",
  backToToday: "Gå til i dag",
  ok: "OK",
  clear: "Annuller",
  week: "Uke",
  month: "Måned",
  year: "År",
  timeSelect: "Velg tidspunkt",
  dateSelect: "Velg dato",
  weekSelect: "Velg uke",
  monthSelect: "Velg måned",
  yearSelect: "Velg år",
  decadeSelect: "Velg tiår",
  dateFormat: "DD.MM.YYYY",
  dayFormat: "DD",
  dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
  previousMonth: "Forrige måned (PageUp)",
  nextMonth: "Neste måned (PageDown)",
  previousYear: "Forrige år (Control + venstre)",
  nextYear: "Neste år (Control + høyre)",
  previousDecade: "Forrige tiår",
  nextDecade: "Neste tiår",
  previousCentury: "Forrige århundre",
  nextCentury: "Neste århundre"
});
s.default = j;
var a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
const P = {
  placeholder: "Velg tid",
  rangePlaceholder: ["Starttid", "Sluttid"]
};
a.default = P;
var f = n.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var S = f(s), N = f(a);
const F = {
  lang: Object.assign({
    placeholder: "Velg dato",
    yearPlaceholder: "Velg år",
    quarterPlaceholder: "Velg kvartal",
    monthPlaceholder: "Velg måned",
    weekPlaceholder: "Velg uke",
    rangePlaceholder: ["Startdato", "Sluttdato"],
    rangeYearPlaceholder: ["Startår", "Sluttår"],
    rangeMonthPlaceholder: ["Startmåned", "Sluttmåned"],
    rangeWeekPlaceholder: ["Start uke", "Sluttuke"]
  }, S.default),
  timePickerLocale: Object.assign({}, N.default)
};
l.default = F;
var V = n.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var M = V(l);
d.default = M.default;
var m = n.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var D = m(i), T = m(d), Y = m(l), A = m(a);
const e = "${label} er ikke et gyldig ${type}", w = {
  locale: "nb",
  Pagination: D.default,
  DatePicker: Y.default,
  TimePicker: A.default,
  Calendar: T.default,
  global: {
    placeholder: "Vennligst velg"
  },
  Table: {
    filterTitle: "Filtermeny",
    filterConfirm: "OK",
    filterReset: "Nullstill",
    filterEmptyText: "Ingen filtre",
    selectAll: "Velg alle",
    selectInvert: "Inverter gjeldende side",
    selectionAll: "Velg all data",
    sortTitle: "Sorter",
    expand: "Utvid rad",
    collapse: "Skjul rad",
    triggerDesc: "Sorter data i synkende rekkefølge",
    triggerAsc: "Sorterer data i stigende rekkefølge",
    cancelSort: "Klikk for å avbryte sorteringen"
  },
  Modal: {
    okText: "OK",
    cancelText: "Avbryt",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Avbryt"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Søk her",
    itemUnit: "element",
    itemsUnit: "elementer",
    remove: "Fjern",
    selectCurrent: "Velg gjeldende side",
    removeCurrent: "Fjern gjeldende side",
    selectAll: "Velg all data",
    removeAll: "Fjern all data",
    selectInvert: "Inverter gjeldende side"
  },
  Upload: {
    uploading: "Laster opp...",
    removeFile: "Fjern fil",
    uploadError: "Feil ved opplastning",
    previewFile: "Forhåndsvisning",
    downloadFile: "Last ned fil"
  },
  Empty: {
    description: "Ingen data"
  },
  Icon: {
    icon: "ikon"
  },
  Text: {
    edit: "Rediger",
    copy: "Kopier",
    copied: "Kopiert",
    expand: "Utvid"
  },
  Form: {
    defaultValidateMessages: {
      default: "Feltvalideringsfeil ${label}",
      required: "Vennligst skriv inn ${label}",
      enum: "${label} må være en av [${enum}]",
      whitespace: "${label} kan ikke være et blankt tegn",
      date: {
        format: "${label} datoformatet er ugyldig",
        parse: "${label} kan ikke konverteres til en dato",
        invalid: "${label} er en ugyldig dato"
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
        len: "${label} må være ${len} tegn",
        min: "${label} må minst ha ${min} tegn",
        max: "${label} opp til ${max} tegn",
        range: "${label} må være mellom ${min}-${max} tegn"
      },
      number: {
        len: "${label} må være lik ${len}",
        min: "${label} minimumsverdien er ${min}",
        max: "${label} maksimumsverdien er ${max}",
        range: "${label} må være mellom ${min}-${max}"
      },
      array: {
        len: "Må være ${len} ${label}",
        min: "Må være minst ${min} ${label}",
        max: "På det meste ${max} ${label}",
        range: "Totalt av ${label} må være mellom ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} stemmer ikke overens med mønsteret ${pattern}"
      }
    }
  }
};
o.default = w;
var b = o;
const C = /* @__PURE__ */ _(b), R = /* @__PURE__ */ y({
  __proto__: null,
  default: C
}, [b]);
export {
  R as n
};
