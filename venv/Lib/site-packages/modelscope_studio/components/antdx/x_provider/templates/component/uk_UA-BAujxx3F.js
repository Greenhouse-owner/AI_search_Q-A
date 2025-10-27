import { a as b } from "./XProvider-CSZ95uJx.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as g, c as h } from "./common-AHfHwMkE.js";
function x(s, f) {
  for (var m = 0; m < f.length; m++) {
    const a = f[m];
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
var n = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var k = {
  // Options
  items_per_page: "/ сторінці",
  jump_to: "Перейти",
  jump_to_confirm: "підтвердити",
  page: "",
  // Pagination
  prev_page: "Попередня сторінка",
  next_page: "Наступна сторінка",
  prev_5: "Попередні 5 сторінок",
  next_5: "Наступні 5 сторінок",
  prev_3: "Попередні 3 сторінки",
  next_3: "Наступні 3 сторінки",
  page_size: "Page Size"
};
i.default = k;
var u = {}, t = {}, d = {}, y = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var _ = y(g), P = h, A = (0, _.default)((0, _.default)({}, P.commonLocale), {}, {
  locale: "uk_UA",
  today: "Сьогодні",
  now: "Зараз",
  backToToday: "Поточна дата",
  ok: "OK",
  clear: "Очистити",
  week: "Тиждень",
  month: "Місяць",
  year: "Рік",
  timeSelect: "Обрати час",
  dateSelect: "Обрати дату",
  monthSelect: "Обрати місяць",
  yearSelect: "Обрати рік",
  decadeSelect: "Обрати десятиріччя",
  dateFormat: "D-M-YYYY",
  dateTimeFormat: "D-M-YYYY HH:mm:ss",
  previousMonth: "Попередній місяць (PageUp)",
  nextMonth: "Наступний місяць (PageDown)",
  previousYear: "Попередній рік (Control + left)",
  nextYear: "Наступний рік (Control + right)",
  previousDecade: "Попереднє десятиріччя",
  nextDecade: "Наступне десятиріччя",
  previousCentury: "Попереднє століття",
  nextCentury: "Наступне століття"
});
d.default = A;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const U = {
  placeholder: "Оберіть час",
  rangePlaceholder: ["Початковий час", "Кінцевий час"]
};
r.default = U;
var $ = o.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var j = $(d), T = $(r);
const O = {
  lang: Object.assign({
    placeholder: "Оберіть дату",
    yearPlaceholder: "Оберіть рік",
    quarterPlaceholder: "Оберіть квартал",
    monthPlaceholder: "Оберіть місяць",
    weekPlaceholder: "Оберіть тиждень",
    rangePlaceholder: ["Початкова дата", "Кінцева дата"],
    rangeYearPlaceholder: ["Початковий рік", "Кінцевий рік"],
    rangeMonthPlaceholder: ["Початковий місяць", "Кінцевий місяць"],
    rangeWeekPlaceholder: ["Початковий тиждень", "Кінцевий тиждень"],
    shortWeekDays: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    shortMonths: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"]
  }, j.default),
  timePickerLocale: Object.assign({}, T.default)
};
t.default = O;
var D = o.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var M = D(t);
u.default = M.default;
var c = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var S = c(i), C = c(u), Y = c(t), w = c(r);
const e = "${label} не є типом ${type}", F = {
  locale: "uk",
  Pagination: S.default,
  DatePicker: Y.default,
  TimePicker: w.default,
  Calendar: C.default,
  global: {
    placeholder: "Будь ласка, оберіть"
  },
  Table: {
    filterTitle: "Фільтрувати",
    filterConfirm: "OK",
    filterReset: "Скинути",
    filterEmptyText: "Фільтри відсутні",
    filterCheckAll: "Обрати всі",
    filterSearchPlaceholder: "Пошук у фільтрах",
    emptyText: "Даних немає",
    selectAll: "Обрати всі на сторінці",
    selectInvert: "Інвертувати вибір",
    selectNone: "Очистити вибір",
    selectionAll: "Обрати всі",
    sortTitle: "Сортувати",
    expand: "Розгорнути рядок",
    collapse: "Згорнути рядок",
    triggerDesc: "Сортувати за спаданням",
    triggerAsc: "Сортувати за зростанням",
    cancelSort: "Відмінити сортування"
  },
  Tour: {
    Next: "Далі",
    Previous: "Назад",
    Finish: "Завершити"
  },
  Modal: {
    okText: "Гаразд",
    cancelText: "Скасувати",
    justOkText: "Гаразд"
  },
  Popconfirm: {
    okText: "Гаразд",
    cancelText: "Скасувати"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Введіть текст для пошуку",
    itemUnit: "елем.",
    itemsUnit: "елем.",
    remove: "Видалити",
    selectCurrent: "Вибрати поточну сторінку",
    removeCurrent: "Скасувати вибір на сторінці",
    selectAll: "Вибрати всі дані",
    deselectAll: "Очистити вибір",
    removeAll: "Скасувати вибір",
    selectInvert: "Інвертувати поточну сторінку"
  },
  Upload: {
    uploading: "Завантаження ...",
    removeFile: "Видалити файл",
    uploadError: "Помилка завантаження",
    previewFile: "Попередній перегляд файлу",
    downloadFile: "Завантажити файл"
  },
  Empty: {
    description: "Даних немає"
  },
  Icon: {
    icon: "іконка"
  },
  Text: {
    edit: "Редагувати",
    copy: "Скопіювати",
    copied: "Скопійовано",
    expand: "Розширити"
  },
  Form: {
    optional: "(опціонально)",
    defaultValidateMessages: {
      default: "Помилка валідації для поля ${label}",
      required: "Будь ласка, заповніть ${label}",
      enum: "Лише одне зі значень [${enum}] доступне для ${label}",
      whitespace: "Значення у полі ${label} не може бути пробілом",
      date: {
        format: "Не валідний формат дати у ${label}",
        parse: "Значення ${label} не може бути приведене до дати",
        invalid: "Не валідна дата у ${label}"
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
        len: "${label} має містити ${len} символів",
        min: "${label} має містити не менш, ніж ${min} символів",
        max: "${label} має містити не більш, ніж ${max} символів",
        range: "${label} має містити ${min}-${max} символів"
      },
      number: {
        len: "${label} має дорівнювати ${len}",
        min: "${label} має бути не менш, ніж ${min}",
        max: "${label} має бути не більш, ніж ${max}",
        range: "${label} має бути в межах ${min}-${max}"
      },
      array: {
        len: "${label} має містити ${len} елементи",
        min: "${label} має містити не менш, ніж ${min} елементи",
        max: "${label} має містити не більш, ніж ${max} елементи",
        range: "Кількість елементів в ${label} має бути в межах ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} не відповідає шаблону ${pattern}"
      }
    }
  },
  Image: {
    preview: "Попередній перегляд"
  },
  QRCode: {
    expired: "QR-код закінчився",
    refresh: "Оновити"
  }
};
n.default = F;
var v = n;
const R = /* @__PURE__ */ b(v), z = /* @__PURE__ */ x({
  __proto__: null,
  default: R
}, [v]);
export {
  z as u
};
