import { a as v } from "./XProvider-CSZ95uJx.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as y, c as g } from "./common-AHfHwMkE.js";
function x(m, f) {
  for (var p = 0; p < f.length; p++) {
    const a = f[p];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in m)) {
          const s = Object.getOwnPropertyDescriptor(a, l);
          s && Object.defineProperty(m, l, s.get ? s : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, {
    value: "Module"
  }));
}
var n = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var h = {
  // Options
  items_per_page: "/старонка",
  jump_to: "Перайсці",
  jump_to_confirm: "Пацвердзіць",
  page: "",
  // Pagination
  prev_page: "Назад",
  next_page: "Наперад",
  prev_5: "Папярэднія 5",
  next_5: "Наступныя 5",
  prev_3: "Папярэднія 3",
  next_3: "Наступныя 3",
  page_size: "памер старонкі"
};
i.default = h;
var c = {}, t = {}, d = {}, P = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var b = P(y), Y = g, j = (0, b.default)((0, b.default)({}, Y.commonLocale), {}, {
  locale: "by_BY",
  today: "Сёння",
  now: "Зараз",
  backToToday: "Дадзеная дата",
  ok: "OK",
  clear: "Ачысціць",
  week: "Тыдзень",
  month: "Месяц",
  year: "Год",
  timeSelect: "Выбраць час",
  dateSelect: "Выбраць дату",
  weekSelect: "Выбраць тыдзень",
  monthSelect: "Выбраць месяц",
  yearSelect: "Выбраць год",
  decadeSelect: "Выбраць дзесяцігоддзе",
  dateFormat: "D-M-YYYY",
  dateTimeFormat: "D-M-YYYY HH:mm:ss",
  previousMonth: "Папярэдні месяц (PageUp)",
  nextMonth: "Наступны месяц (PageDown)",
  previousYear: "Папярэдні год (Control + left)",
  nextYear: "Наступны год (Control + right)",
  previousDecade: "Папярэдняе дзесяцігоддзе",
  nextDecade: "Наступнае дзесяцігоддзе",
  previousCentury: "Папярэдні век",
  nextCentury: "Наступны век"
});
d.default = j;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const O = {
  placeholder: "Выберыце час",
  rangePlaceholder: ["Час пачатку", "Час заканчэння"]
};
r.default = O;
var _ = o.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var T = _(d), B = _(r);
const k = {
  lang: Object.assign({
    placeholder: "Выберыце дату",
    yearPlaceholder: "Выберыце год",
    quarterPlaceholder: "Выберыце квартал",
    monthPlaceholder: "Выберыце месяц",
    weekPlaceholder: "Выберыце тыдзень",
    rangePlaceholder: ["Дата пачатку", "Дата заканчэння"],
    rangeYearPlaceholder: ["Год пачатку", "Год заканчэння"],
    rangeQuarterPlaceholder: ["Квартал пачатку", "Квартал заканчэння"],
    rangeMonthPlaceholder: ["Месяц пачатку", "Месяц заканчэння"],
    rangeWeekPlaceholder: ["Тыдзень пачаку", "Тыдзень заканчэння"]
  }, T.default),
  timePickerLocale: Object.assign({}, B.default)
};
t.default = k;
var D = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var M = D(t);
c.default = M.default;
var u = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var S = u(i), w = u(c), C = u(t), A = u(r);
const e = "${label} не з'яўляецца тыпам ${type}", q = {
  locale: "by",
  Pagination: S.default,
  DatePicker: C.default,
  TimePicker: A.default,
  Calendar: w.default,
  global: {
    placeholder: "Калі ласка, выберыце"
  },
  Table: {
    filterTitle: "Фільтр",
    filterConfirm: "OK",
    filterReset: "Скінуць",
    filterEmptyText: "Без фільтраў",
    filterCheckAll: "Выбраць усё",
    filterSearchPlaceholder: "Пошук фільтраў",
    emptyText: "Няма даных",
    selectAll: "Выбраць усё",
    selectInvert: "Інвертаваць выбар",
    selectNone: "Ачысціць усе даныя",
    selectionAll: "Выбраць усе даныя",
    sortTitle: "Сартаванне",
    expand: "Разгарнуць радок",
    collapse: "Згарнуць радок",
    triggerDesc: "Націсніце для сартавання па ўбыванні",
    triggerAsc: "Націсніце для сартавання па ўзрастанні",
    cancelSort: "Націсніце, каб адмяніць сартаванне"
  },
  Modal: {
    okText: "OK",
    cancelText: "Адмена",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Адмена"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Пошук",
    itemUnit: "элем.",
    itemsUnit: "элем.",
    remove: "Выдаліць",
    selectCurrent: "Вылучыць бягучую старонку",
    removeCurrent: "Выдаліць бягучую старонку",
    selectAll: "Выбраць усе даныя",
    removeAll: "Выдаліць усе даныя",
    selectInvert: "Паказаць у адваротным парадку"
  },
  Upload: {
    uploading: "Запампоўка...",
    removeFile: "Выдаліць файл",
    uploadError: "Адбылася памылка пры запампоўцы",
    previewFile: "Перадпрагляд файла",
    downloadFile: "Спампаваць файл"
  },
  Empty: {
    description: "Няма даных"
  },
  Icon: {
    icon: "Іконка"
  },
  Text: {
    edit: "Рэдагаваць",
    copy: "Капіяваць",
    copied: "Капіяванне завершана",
    expand: "Разгарнуць"
  },
  Form: {
    optional: "(не абавязкова)",
    defaultValidateMessages: {
      default: "Памылка праверкі поля «${label}»",
      required: "Калі ласка, увядзіце «${label}»",
      enum: "Поле «${label}» павінна быць адным з [${enum}]",
      whitespace: "Поле «${label}» не можа быць пустым",
      date: {
        format: "Поле «${label}» мае няправільны фармат даты",
        parse: "Поле «${label}» не можа быць пераўтворана ў дату",
        invalid: "Поле «${label}» не з'яўляецца карэктнай датай"
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
        len: "Значэнне поля «${label}» павінна мець даўжыню ${len} сімвалаў",
        min: "Значэнне поля «${label}» павінна мець не меней за ${min} сімвалаў",
        max: "Значэнне поля «${label}» павінна быць не даўжэй за ${max} сімвалаў",
        range: "Значэнне поля «${label}» павінна мець даўжыню ${min}-${max} сімвалаў"
      },
      number: {
        len: "Значэнне поля «${label}» павінна быць роўнае ${len}",
        min: "Значэнне поля «${label}» павінна быць больш або роўнае ${min}",
        max: "Значэнне поля «${label}» павінна быць больш або роўнае ${max}",
        range: "Значэнне поля «${label}» павінна быць паміж ${min} і ${max}"
      },
      array: {
        len: "Колькасць элементаў у полі «${label}» павінна быць роўная ${len}",
        min: "Колькасць элементаў у полі «${label}» павінна быць не меней за ${min}",
        max: "Колькасць элементаў у полі «${label}» павінна быць не болей за ${max}",
        range: "Колькасць элементаў у полі «${label}» павінна быць паміж ${min} і ${max}"
      },
      pattern: {
        mismatch: "Значэнне поля «${label}» не адпавядае шаблону ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
n.default = q;
var $ = n;
const F = /* @__PURE__ */ v($), I = /* @__PURE__ */ x({
  __proto__: null,
  default: F
}, [$]);
export {
  I as b
};
