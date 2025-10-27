import { a as g } from "./XProvider-CSZ95uJx.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as v, c as x } from "./common-AHfHwMkE.js";
function y(m, p) {
  for (var f = 0; f < p.length; f++) {
    const a = p[f];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in m)) {
          const b = Object.getOwnPropertyDescriptor(a, t);
          b && Object.defineProperty(m, t, b.get ? b : {
            enumerable: !0,
            get: () => a[t]
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
var j = {
  // Options
  items_per_page: "/ страница",
  jump_to: "Към",
  jump_to_confirm: "потвърждавам",
  page: "",
  // Pagination
  prev_page: "Предишна страница",
  next_page: "Следваща страница",
  prev_5: "Предишни 5 страници",
  next_5: "Следващи 5 страници",
  prev_3: "Предишни 3 страници",
  next_3: "Следващи 3 страници",
  page_size: "Page Size"
};
i.default = j;
var u = {}, l = {}, d = {}, P = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var s = P(v), B = x, G = (0, s.default)((0, s.default)({}, B.commonLocale), {}, {
  locale: "bg_BG",
  today: "Днес",
  now: "Сега",
  backToToday: "Към днес",
  ok: "Добре",
  clear: "Изчистване",
  week: "Седмица",
  month: "Месец",
  year: "Година",
  timeSelect: "Избор на час",
  dateSelect: "Избор на дата",
  monthSelect: "Избор на месец",
  yearSelect: "Избор на година",
  decadeSelect: "Десетилетие",
  dateFormat: "D M YYYY",
  dateTimeFormat: "D M YYYY HH:mm:ss",
  previousMonth: "Предишен месец (PageUp)",
  nextMonth: "Следващ месец (PageDown)",
  previousYear: "Последна година (Control + left)",
  nextYear: "Следваща година (Control + right)",
  previousDecade: "Предишно десетилетие",
  nextDecade: "Следващо десетилетие",
  previousCentury: "Последен век",
  nextCentury: "Следващ век"
});
d.default = G;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const h = {
  placeholder: "Избор на час"
};
r.default = h;
var _ = o.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var O = _(d), T = _(r);
const D = {
  lang: Object.assign({
    placeholder: "Избор на дата",
    rangePlaceholder: ["Начална", "Крайна"]
  }, O.default),
  timePickerLocale: Object.assign({}, T.default)
};
l.default = D;
var M = o.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var k = M(l);
u.default = k.default;
var c = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var S = c(i), Y = c(u), w = c(l), C = c(r);
const e = "${label} не е валиден ${type}", F = {
  locale: "bg",
  Pagination: S.default,
  DatePicker: w.default,
  TimePicker: C.default,
  Calendar: Y.default,
  Table: {
    filterTitle: "Филтриране",
    filterConfirm: "Добре",
    filterReset: "Нулриане",
    selectAll: "Избор на текуща страница",
    selectInvert: "Обръщане"
  },
  Modal: {
    okText: "Добре",
    cancelText: "Отказ",
    justOkText: "Добре"
  },
  Popconfirm: {
    okText: "Добре",
    cancelText: "Отказ"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Търсене",
    itemUnit: "избор",
    itemsUnit: "избори"
  },
  Upload: {
    uploading: "Качване...",
    removeFile: "Премахване",
    uploadError: "Грешка при качването",
    previewFile: "Преглед",
    downloadFile: "Свали файл"
  },
  Empty: {
    description: "Няма данни"
  },
  Form: {
    optional: "（по желание）",
    defaultValidateMessages: {
      default: "грешка при проверка на полето ${label}",
      required: "Моля, въведете ${label}",
      enum: "${label} трябва да е един от [${enum}]",
      whitespace: "${label} Не може да бъде нулев знак",
      date: {
        format: "${label} невалиден формат на датата",
        parse: "${label} не може да се преобразува в дата",
        invalid: "${label} е невалидна дата"
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
        len: "${label} ще бъде ${len} знака",
        min: "${label} най-малко ${min} герои",
        max: "${label} повечето ${max} герои",
        range: "${label} Трябва да е вътре ${min}-${max} между знаци"
      },
      number: {
        len: "${label} трябва да е равно на ${len}",
        min: "${label} Минималната стойност е ${min}",
        max: "${label} Максималната стойност е ${max}",
        range: "${label} Трябва да е вътре ${min}-${max} между"
      },
      array: {
        len: "ще бъде ${len} индивидуален ${label}",
        min: "най-малко ${min} индивидуален ${label}",
        max: "повечето ${max} индивидуален ${label}",
        range: "${label} Количеството трябва да е вътре ${min}-${max} между"
      },
      pattern: {
        mismatch: "${label} не отговаря на модела ${pattern}"
      }
    }
  }
};
n.default = F;
var $ = n;
const q = /* @__PURE__ */ g($), z = /* @__PURE__ */ y({
  __proto__: null,
  default: q
}, [$]);
export {
  z as b
};
