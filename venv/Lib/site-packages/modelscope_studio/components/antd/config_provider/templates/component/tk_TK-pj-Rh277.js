import { c as k } from "./Index-nJA-Ual0.js";
import { i as n } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as _, c as $ } from "./common-AHfHwMkE.js";
function v(s, c) {
  for (var u = 0; u < c.length; u++) {
    const a = c[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in s)) {
          const p = Object.getOwnPropertyDescriptor(a, l);
          p && Object.defineProperty(s, l, p.get ? p : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, {
    value: "Module"
  }));
}
var o = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var h = {
  // Options
  items_per_page: "/ sahypa",
  jump_to: "Git",
  jump_to_confirm: "tassykla",
  page: "Sahypa",
  // Pagination
  prev_page: "Öňki sahypa",
  next_page: "Soňky sahypa",
  prev_5: "Öňki 5 sahypa",
  next_5: "Soňky 5 sahypa",
  prev_3: "Öňki 3 sahypa",
  next_3: "Soňky 3 sahypa",
  page_size: "Sahypa sany"
};
i.default = h;
var d = {}, t = {}, y = {}, T = n.default;
Object.defineProperty(y, "__esModule", {
  value: !0
});
y.default = void 0;
var g = T(_), x = $, P = (0, g.default)((0, g.default)({}, x.commonLocale), {}, {
  locale: "tk_TK",
  today: "Şugün",
  now: "Şuwagt",
  backToToday: "Şugüne gaýt",
  ok: "Bolýar",
  clear: "Arassala",
  month: "Aý",
  week: "Hepde",
  year: "Ýyl",
  timeSelect: "Wagt saýla",
  dateSelect: "Gün saýla",
  monthSelect: "Aý saýla",
  yearSelect: "Ýyl saýla",
  decadeSelect: "On ýyllygy saýla",
  dateFormat: "D/M/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  previousMonth: "Öňki aý (PageUp)",
  nextMonth: "Soňky aý (PageDown)",
  previousYear: "Öňki ýyl (Control + çep)",
  nextYear: "Soňky ýyl (Control + sag)",
  previousDecade: "Öňki on ýyl",
  nextDecade: "Soňky on ýyl",
  previousCentury: "Öňki asyr",
  nextCentury: "Soňky asyr"
});
y.default = P;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const w = {
  placeholder: "Wagty saýlaň",
  rangePlaceholder: ["Başlanýan wagty", "Gutarýan wagty"]
};
r.default = w;
var f = n.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var S = f(y), j = f(r);
const K = {
  lang: Object.assign({
    placeholder: "Wagt saýlaň",
    rangePlaceholder: ["Başlanýan wagty", "Gutarýan wagty"],
    yearPlaceholder: "Ýyl saýlaň",
    quarterPlaceholder: "Çärýek saýlaň",
    monthPlaceholder: "Aý saýlaň",
    weekPlaceholder: "Hepde saýlaň",
    rangeYearPlaceholder: ["Başlanýan ýyly", "Gutarýan ýyly"],
    rangeQuarterPlaceholder: ["Başlanýan çärýegi", "Gutarýan çärýegi"],
    rangeMonthPlaceholder: ["Başlanýan aýy", "Gutarýan aýy"],
    rangeWeekPlaceholder: ["Başlanýan hepdesi", "Gutarýan hepdesi"]
  }, S.default),
  timePickerLocale: Object.assign({}, j.default)
};
t.default = K;
var M = n.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var z = M(t);
d.default = z.default;
var m = n.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var O = m(i), D = m(d), A = m(t), F = m(r);
const e = "${label} ${type} görnüşinde däl", B = {
  locale: "tk",
  Pagination: O.default,
  DatePicker: A.default,
  TimePicker: F.default,
  Calendar: D.default,
  global: {
    placeholder: "Saýlaň"
  },
  Table: {
    filterTitle: "Filter",
    filterConfirm: "Bolýar",
    filterReset: "Arassala",
    filterEmptyText: "Filtersiz",
    emptyText: "Maglumat ýok",
    selectAll: "Ählisini saýla",
    selectInvert: "Tersini saýlaň",
    selectNone: "Ähli maglumatlary arassala",
    selectionAll: "Ähli maglumatlary saýla",
    sortTitle: "Tertiple",
    expand: "Setirleri aç",
    collapse: "Setirleri ýygna",
    triggerDesc: "Kemelýän tertipde tertiple",
    triggerAsc: "Artýan tertipde tertiple",
    cancelSort: "Tertipleri arassala"
  },
  Modal: {
    okText: "Bolýar",
    cancelText: "Ýatyr",
    justOkText: "Bolýar"
  },
  Popconfirm: {
    okText: "Bolýar",
    cancelText: "Ýatyr"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Gözle",
    itemUnit: "elem.",
    itemsUnit: "elem.",
    remove: "Poz",
    selectAll: "Ähli maglumatlary saýla",
    selectCurrent: "Şu sahypany saýlaň",
    selectInvert: "Ters tertipde görkez",
    removeAll: "Ähli maglumatlary poz",
    removeCurrent: "Şu sahypany poz"
  },
  Upload: {
    uploading: "Ugradylýar...",
    removeFile: "Faýly poz",
    uploadError: "Ugratmakda näsazlyk ýüze çykdy",
    previewFile: "Faýly görmek",
    downloadFile: "Faýly ýükle"
  },
  Empty: {
    description: "Maglumat ýok"
  },
  Icon: {
    icon: "nyşan"
  },
  Text: {
    edit: "Üýtgetmek",
    copy: "Göçürmek",
    copied: "Göçürildi",
    expand: "Ýygnamak"
  },
  Form: {
    defaultValidateMessages: {
      default: "${label} meýdany barlanmady",
      required: "${label} meýdany giriziň",
      enum: "${label} meýdan şulardan biri bolmaly: [${enum}]",
      whitespace: "${label} meýdany boş bolup bilmeýär",
      date: {
        format: "${label} ýalňyş wagt formaty",
        parse: "${label} meýdany wagta çalşyp bolmady",
        invalid: "${label} meýdany nädogry wagt"
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
        len: "${label} meýdany ${len} simwol bolmaly",
        min: "${label} meýdany ${min} simwoldan az bolmaly däl",
        max: "${label} meýdany ${max} simwoldan köp bolmaly däl",
        range: "${label} meýdany ${min}-${max} simwol aralygynda bolmaly"
      },
      number: {
        len: "${label} meýdan ${len} simwol bolmaly",
        min: "${label} meýdany ${min} simwoldan az bolmaly däl",
        max: "${label} meýdany ${max} simwoldan köp bolmaly däl"
      },
      array: {
        len: "${label} meýdanynyň elementleriniň sany ${len} deň bolmaly",
        min: "${label} meýdanynyň elementleriniň sany ${min} az bolmaly däl",
        max: "${label} meýdanynyň elementleriniň sany ${max} köp bolmaly däl",
        range: "${label} meýdanynyň elementleriniň sany ${min} we ${max} aralykda bolmaly"
      },
      pattern: {
        mismatch: "${label} meýdany ${pattern} şablony bilen gabat gelmeýär"
      }
    }
  },
  Image: {
    preview: "Öňünden görmek"
  }
};
o.default = B;
var b = o;
const G = /* @__PURE__ */ k(b), E = /* @__PURE__ */ v({
  __proto__: null,
  default: G
}, [b]);
export {
  E as t
};
