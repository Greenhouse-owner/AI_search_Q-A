import { a as b } from "./XProvider-CSZ95uJx.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as g, c as x } from "./common-AHfHwMkE.js";
function h(f, s) {
  for (var m = 0; m < s.length; m++) {
    const a = s[m];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in f)) {
          const p = Object.getOwnPropertyDescriptor(a, l);
          p && Object.defineProperty(f, l, p.get ? p : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, {
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
  items_per_page: "/ صفحه",
  jump_to: "برو به",
  jump_to_confirm: "تایید",
  page: "",
  // Pagination
  prev_page: "صفحه قبلی",
  next_page: "صفحه بعدی",
  prev_5: "۵ صفحه قبلی",
  next_5: "۵ صفحه بعدی",
  prev_3: "۳ صفحه قبلی",
  next_3: "۳ صفحه بعدی",
  page_size: "اندازه صفحه"
};
i.default = y;
var d = {}, t = {}, c = {}, P = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var _ = P(g), R = x, I = (0, _.default)((0, _.default)({}, R.commonLocale), {}, {
  locale: "fa_IR",
  today: "امروز",
  now: "اکنون",
  backToToday: "بازگشت به روز",
  ok: "باشه",
  clear: "پاک کردن",
  week: "هفته",
  month: "ماه",
  year: "سال",
  timeSelect: "انتخاب زمان",
  dateSelect: "انتخاب تاریخ",
  monthSelect: "یک ماه را انتخاب کنید",
  yearSelect: "یک سال را انتخاب کنید",
  decadeSelect: "یک دهه را انتخاب کنید",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "ماه قبل (PageUp)",
  nextMonth: "ماه بعد (PageDown)",
  previousYear: "سال قبل (Control + left)",
  nextYear: "سال بعد (Control + right)",
  previousDecade: "دهه قبل",
  nextDecade: "دهه بعد",
  previousCentury: "قرن قبل",
  nextCentury: "قرن بعد"
});
c.default = I;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const j = {
  placeholder: "انتخاب زمان",
  rangePlaceholder: ["زمان شروع", "زمان پایان"]
};
r.default = j;
var $ = o.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var T = $(c), D = $(r);
const M = {
  lang: Object.assign({
    placeholder: "انتخاب تاریخ",
    yearPlaceholder: "انتخاب سال",
    quarterPlaceholder: "انتخاب فصل",
    monthPlaceholder: "انتخاب ماه",
    weekPlaceholder: "انتخاب هفته",
    rangePlaceholder: ["تاریخ شروع", "تاریخ پایان"],
    rangeYearPlaceholder: ["سال شروع", "سال پایان"],
    rangeQuarterPlaceholder: ["فصل شروع", "فصل پایان"],
    rangeMonthPlaceholder: ["ماه شروع", "ماه پایان"],
    rangeWeekPlaceholder: ["هفته شروع", "هفته پایان"]
  }, T.default),
  timePickerLocale: Object.assign({}, D.default)
};
t.default = M;
var O = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var k = O(t);
d.default = k.default;
var u = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var C = u(i), S = u(d), Y = u(t), w = u(r);
const e = "${label} از نوع ${type} معتبر نیست", A = {
  locale: "fa",
  Pagination: C.default,
  DatePicker: Y.default,
  TimePicker: w.default,
  Calendar: S.default,
  global: {
    placeholder: "لطفاً انتخاب کنید"
  },
  Table: {
    filterTitle: "منوی فیلتر",
    filterConfirm: "تایید",
    filterReset: "پاک کردن",
    filterEmptyText: "بدون فیلتر",
    filterCheckAll: "انتخاب همه‌ی موارد",
    filterSearchPlaceholder: "جستجو در فیلترها",
    emptyText: "بدون داده",
    selectAll: "انتخاب صفحه‌ی کنونی",
    selectInvert: "معکوس کردن انتخاب‌ها در صفحه ی کنونی",
    selectNone: "انتخاب هیچکدام",
    selectionAll: "انتخاب همه‌ی داده‌ها",
    sortTitle: "مرتب سازی",
    expand: "باز شدن ردیف",
    collapse: "بستن ردیف",
    triggerDesc: "ترتیب نزولی",
    triggerAsc: "ترتیب صعودی",
    cancelSort: "لغوِ ترتیبِ داده شده"
  },
  Tour: {
    Next: "بعدی",
    Previous: "قبلی",
    Finish: "پایان"
  },
  Modal: {
    okText: "تایید",
    cancelText: "لغو",
    justOkText: "تایید"
  },
  Popconfirm: {
    okText: "تایید",
    cancelText: "لغو"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "جستجو",
    itemUnit: "عدد",
    itemsUnit: "عدد",
    remove: "حذف",
    selectCurrent: "انتخاب صفحه فعلی",
    removeCurrent: "پاک کردن انتخاب‌های صفحه فعلی",
    selectAll: "انتخاب همه",
    removeAll: "پاک کردن همه انتخاب‌ها",
    selectInvert: "معکوس کردن انتخاب‌ها در صفحه ی کنونی"
  },
  Upload: {
    uploading: "در حال آپلود...",
    removeFile: "حذف فایل",
    uploadError: "خطا در آپلود",
    previewFile: "مشاهده‌ی فایل",
    downloadFile: "دریافت فایل"
  },
  Empty: {
    description: "داده‌ای موجود نیست"
  },
  Icon: {
    icon: "آیکن"
  },
  Text: {
    edit: "ویرایش",
    copy: "کپی",
    copied: "کپی شد",
    expand: "توسعه"
  },
  Form: {
    optional: "(اختیاری)",
    defaultValidateMessages: {
      default: "خطا در ${label}",
      required: "فیلد ${label} اجباریست",
      enum: "${label} باید یکی از [${enum}] باشد",
      whitespace: "${label} نمیتواند خالی باشد",
      date: {
        format: "ساختار تاریخ در ${label} نامعتبر است",
        parse: "${label} قابل تبدیل به تاریخ نیست",
        invalid: "${label} تاریخی نا معتبر است"
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
        len: "${label} باید ${len} کاراکتر باشد",
        min: "${label} باید حداقل ${min} کاراکتر باشد",
        max: "${label} باید حداکثر ${max} کاراکتر باشد",
        range: "${label} باید بین ${min}-${max} کاراکتر باشد"
      },
      number: {
        len: "${label} باید برابر ${len}",
        min: "${label} حداقل میتواند ${min} باشد",
        max: "${label} حداکثر میتواند ${max} باشد",
        range: "${label} باید بین ${min}-${max} باشد"
      },
      array: {
        len: "تعداد ${label} باید ${len} باشد.",
        min: "تعداد ${label} حداقل باید ${min} باشد",
        max: "تعداد ${label} حداکثر باید ${max} باشد",
        range: "مقدار ${label} باید بین ${min}-${max} باشد"
      },
      pattern: {
        mismatch: "الگوی ${label} با ${pattern} برابری نمی‌کند"
      }
    }
  },
  Image: {
    preview: "پیش‌نمایش"
  },
  QRCode: {
    expired: "QR Code منقضی شذد",
    refresh: "به‌روزرسانی"
  }
};
n.default = A;
var v = n;
const F = /* @__PURE__ */ b(v), N = /* @__PURE__ */ h({
  __proto__: null,
  default: F
}, [v]);
export {
  N as f
};
