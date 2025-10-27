import { c as b } from "./Index-nJA-Ual0.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as g, c as h } from "./common-AHfHwMkE.js";
function x(s, f) {
  for (var p = 0; p < f.length; p++) {
    const r = f[p];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const a in r)
        if (a !== "default" && !(a in s)) {
          const m = Object.getOwnPropertyDescriptor(r, a);
          m && Object.defineProperty(s, a, m.get ? m : {
            enumerable: !0,
            get: () => r[a]
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
  items_per_page: "/ стр.",
  jump_to: "Перейти",
  jump_to_confirm: "подтвердить",
  page: "Страница",
  // Pagination
  prev_page: "Назад",
  next_page: "Вперед",
  prev_5: "Предыдущие 5",
  next_5: "Следующие 5",
  prev_3: "Предыдущие 3",
  next_3: "Следующие 3",
  page_size: "размер страницы"
};
i.default = y;
var u = {}, l = {}, c = {}, P = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var _ = P(g), R = h, U = (0, _.default)((0, _.default)({}, R.commonLocale), {}, {
  locale: "ru_RU",
  today: "Сегодня",
  now: "Сейчас",
  backToToday: "Текущая дата",
  ok: "ОК",
  clear: "Очистить",
  week: "Неделя",
  month: "Месяц",
  year: "Год",
  timeSelect: "Выбрать время",
  dateSelect: "Выбрать дату",
  monthSelect: "Выбрать месяц",
  yearSelect: "Выбрать год",
  decadeSelect: "Выбрать десятилетие",
  dateFormat: "D-M-YYYY",
  dateTimeFormat: "D-M-YYYY HH:mm:ss",
  previousMonth: "Предыдущий месяц (PageUp)",
  nextMonth: "Следующий месяц (PageDown)",
  previousYear: "Предыдущий год (Control + left)",
  nextYear: "Следующий год (Control + right)",
  previousDecade: "Предыдущее десятилетие",
  nextDecade: "Следущее десятилетие",
  previousCentury: "Предыдущий век",
  nextCentury: "Следующий век"
});
c.default = U;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const j = {
  placeholder: "Выберите время",
  rangePlaceholder: ["Время начала", "Время окончания"]
};
t.default = j;
var $ = o.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var T = $(c), O = $(t);
const k = {
  lang: Object.assign({
    placeholder: "Выберите дату",
    yearPlaceholder: "Выберите год",
    quarterPlaceholder: "Выберите квартал",
    monthPlaceholder: "Выберите месяц",
    weekPlaceholder: "Выберите неделю",
    rangePlaceholder: ["Начальная дата", "Конечная дата"],
    rangeYearPlaceholder: ["Начальный год", "Год окончания"],
    rangeMonthPlaceholder: ["Начальный месяц", "Конечный месяц"],
    rangeWeekPlaceholder: ["Начальная неделя", "Конечная неделя"],
    shortWeekDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    shortMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
  }, T.default),
  timePickerLocale: Object.assign({}, O.default)
};
l.default = k;
var D = o.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var M = D(l);
u.default = M.default;
var d = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var C = d(i), S = d(u), Y = d(l), w = d(t);
const e = "${label} не является типом ${type}", A = {
  locale: "ru",
  Pagination: C.default,
  DatePicker: Y.default,
  TimePicker: w.default,
  Calendar: S.default,
  global: {
    placeholder: "Пожалуйста выберите"
  },
  Table: {
    filterTitle: "Фильтр",
    filterConfirm: "OK",
    filterReset: "Сбросить",
    filterEmptyText: "Без фильтров",
    filterCheckAll: "Выбрать все элементы",
    filterSearchPlaceholder: "Поиск в фильтрах",
    emptyText: "Нет данных",
    selectAll: "Выбрать всё",
    selectInvert: "Инвертировать выбор",
    selectNone: "Очистить все данные",
    selectionAll: "Выбрать все данные",
    sortTitle: "Сортировка",
    expand: "Развернуть строку",
    collapse: "Свернуть строку",
    triggerDesc: "Нажмите для сортировки по убыванию",
    triggerAsc: "Нажмите для сортировки по возрастанию",
    cancelSort: "Нажмите, чтобы отменить сортировку"
  },
  Tour: {
    Next: "Далее",
    Previous: "Назад",
    Finish: "Завершить"
  },
  Modal: {
    okText: "OK",
    cancelText: "Отмена",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Отмена"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Поиск",
    itemUnit: "элем.",
    itemsUnit: "элем.",
    remove: "Удалить",
    selectAll: "Выбрать все данные",
    deselectAll: "Очистить все данные",
    selectCurrent: "Выбрать текущую страницу",
    selectInvert: "Инвертировать выбор",
    removeAll: "Удалить все данные",
    removeCurrent: "Удалить текущую страницу"
  },
  Upload: {
    uploading: "Загрузка...",
    removeFile: "Удалить файл",
    uploadError: "При загрузке произошла ошибка",
    previewFile: "Предпросмотр файла",
    downloadFile: "Загрузить файл"
  },
  Empty: {
    description: "Нет данных"
  },
  Icon: {
    icon: "иконка"
  },
  Text: {
    edit: "Редактировать",
    copy: "Копировать",
    copied: "Скопировано",
    expand: "Раскрыть",
    collapse: "Свернуть"
  },
  Form: {
    optional: "(необязательно)",
    defaultValidateMessages: {
      default: "Ошибка проверки поля ${label}",
      required: "Пожалуйста, введите ${label}",
      enum: "${label} должен быть одним из [${enum}]",
      whitespace: "${label} не может быть пустым",
      date: {
        format: "${label} не правильный формат даты",
        parse: "${label} не может быть преобразовано в дату",
        invalid: "${label} не является корректной датой"
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
        len: "${label} должна быть ${len} символов",
        min: "${label} должна быть больше или равна ${min} символов",
        max: "${label} должна быть меньше или равна ${max} символов",
        range: "Длина ${label} должна быть между ${min}-${max} символами"
      },
      number: {
        len: "${label} должна быть равна ${len}",
        min: "${label} должна быть больше или равна ${min}",
        max: "${label} должна быть меньше или равна ${max}",
        range: "${label} должна быть между ${min}-${max}"
      },
      array: {
        len: "Количество элементов ${label} должно быть равно ${len}",
        min: "Количество элементов ${label} должно быть больше или равно ${min}",
        max: "Количество элементов ${label} должно быть меньше или равно ${max}",
        range: "Количество элементов ${label} должно быть между ${min} и ${max}"
      },
      pattern: {
        mismatch: "${label} не соответствует шаблону ${pattern}"
      }
    }
  },
  Image: {
    preview: "Предпросмотр"
  },
  QRCode: {
    expired: "QR-код устарел",
    refresh: "Обновить"
  },
  ColorPicker: {
    presetEmpty: "Пустой",
    transparent: "Прозрачный",
    singleColor: "Один цвет",
    gradientColor: "Градиент"
  }
};
n.default = A;
var v = n;
const F = /* @__PURE__ */ b(v), K = /* @__PURE__ */ x({
  __proto__: null,
  default: F
}, [v]);
export {
  K as r
};
