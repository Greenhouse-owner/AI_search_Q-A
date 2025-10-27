import { c as y } from "./Index-nJA-Ual0.js";
import { i as r } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as k, c as v } from "./common-AHfHwMkE.js";
function _(h, g) {
  for (var c = 0; c < g.length; c++) {
    const a = g[c];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const i in a)
        if (i !== "default" && !(i in h)) {
          const m = Object.getOwnPropertyDescriptor(a, i);
          m && Object.defineProperty(h, i, m.get ? m : {
            enumerable: !0,
            get: () => a[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(h, Symbol.toStringTag, {
    value: "Module"
  }));
}
var n = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var $ = {
  // Options
  items_per_page: "/ sah.",
  jump_to: "O'tish",
  jump_to_confirm: "tasdiqlash",
  page: "Sahifa",
  // Pagination
  prev_page: "Orqaga",
  next_page: "Oldinga",
  prev_5: "Oldingi 5",
  next_5: "Keyingi 5",
  prev_3: "Oldingi 3",
  next_3: "Keyingi 3",
  page_size: "sahifa hajmi"
};
o.default = $;
var s = {}, l = {}, u = {}, x = r.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var f = x(k), O = v, T = (0, f.default)((0, f.default)({}, O.commonLocale), {}, {
  locale: "uz_UZ",
  today: "Bugun",
  now: "Hozir",
  backToToday: "Bugunga qaytish",
  ok: "OK",
  clear: "Toza",
  week: "Xafta",
  month: "Oy",
  year: "Yil",
  timeSelect: "vaqtni tanlang",
  dateSelect: "sanani tanlang",
  weekSelect: "Haftani tanlang",
  monthSelect: "Oyni tanlang",
  yearSelect: "Yilni tanlang",
  decadeSelect: "O'n yilni tanlang",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Oldingi oy (PageUp)",
  nextMonth: "Keyingi oy (PageDown)",
  previousYear: "O'tgan yili (Control + left)",
  nextYear: "Keyingi yil (Control + right)",
  previousDecade: "Oxirgi o'n yil",
  nextDecade: "Keyingi o'n yil",
  previousCentury: "O'tgan asr",
  nextCentury: "Keyingi asr"
});
u.default = T;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const z = {
  placeholder: "Vaqtni tanlang",
  rangePlaceholder: ["Boshlanish vaqti", "Tugallanish vaqti"]
};
t.default = z;
var b = r.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var P = b(u), U = b(t);
const j = {
  lang: Object.assign({
    placeholder: "Sanani tanlang",
    yearPlaceholder: "Yilni tanlang",
    quarterPlaceholder: "Chorakni tanlang",
    monthPlaceholder: "Oyni tanlang",
    weekPlaceholder: "Haftani tanlang",
    rangePlaceholder: ["Boshlanish sanasi", "Tugallanish sanasi"],
    rangeYearPlaceholder: ["Boshlanish yili", "Tugallanish yili"],
    rangeMonthPlaceholder: ["Boshlanish oyi", "Tugallanish oyi"],
    rangeWeekPlaceholder: ["Boshlanish haftasi", "Tugallanish haftasi"]
  }, P.default),
  timePickerLocale: Object.assign({}, U.default)
};
l.default = j;
var q = r.default;
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var Y = q(l);
s.default = Y.default;
var d = r.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var S = d(o), Z = d(s), M = d(l), B = d(t);
const e = "${label} ${type} turi emas", D = {
  // NOTE: In
  // https://github.com/react-component/picker/blob/master/src/locale/uz_UZ.ts
  // and
  // https://github.com/react-component/pagination/blob/master/src/locale/uz_UZ.ts
  // both implemented as uz-latn Uzbek
  locale: "uz-latn",
  Pagination: S.default,
  DatePicker: M.default,
  TimePicker: B.default,
  Calendar: Z.default,
  global: {
    placeholder: "Iltimos tanlang"
  },
  Table: {
    filterTitle: "Filtr",
    filterConfirm: "OK",
    filterReset: "Bekor qilish",
    filterEmptyText: "Filtrlarsiz",
    filterCheckAll: "Barcha elementlarni tanlash",
    filterSearchPlaceholder: "Filtrlarda qidiruv",
    emptyText: "Ma'lumotlar topilmadi",
    selectAll: "Barchasini tanlash",
    selectInvert: "Tanlovni aylantirish",
    selectNone: "Barcha ma'lumotlarni tozalang",
    selectionAll: "Barchasini tanlash",
    sortTitle: "Tartiblash",
    expand: "Satirni yozish",
    collapse: "Satirni yig'ish",
    triggerDesc: "Kamayish tartibida tartiblash uchun bosing",
    triggerAsc: "O'sish tartibida tartiblash uchun bosing",
    cancelSort: "Tartiblshni rad etish uchun bosing"
  },
  Tour: {
    Next: "So'ngra",
    Previous: "Ortga",
    Finish: "Tugatish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Yopish",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Bekor qilish"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Qidiruv",
    itemUnit: "elem.",
    itemsUnit: "elem.",
    remove: "Oʻchirish",
    selectAll: "Barch ma'lumotlarni tanlash",
    selectCurrent: "Joriy sahifani tanlash",
    selectInvert: "Tanlovni aylantirish",
    removeAll: "Barcha ma'lumotlarni o'chirish",
    removeCurrent: "Joriy sahifani o'chirish"
  },
  Upload: {
    uploading: "Yuklanmoqda...",
    removeFile: "Faylni o'chirish",
    uploadError: "Yuklashda xatolik yuz berdi",
    previewFile: "Faylni oldindan ko'rish",
    downloadFile: "Faylni yuklash"
  },
  Empty: {
    description: "Maʼlumot topilmadi"
  },
  Icon: {
    icon: "ikonka"
  },
  Text: {
    edit: "Tahrirlash",
    copy: "Nusxalash",
    copied: "Nusxalandi",
    expand: "Ochib qoyish"
  },
  Form: {
    optional: "(shart emas)",
    defaultValidateMessages: {
      default: "${label} maydonini tekshirishda xatolik yuz berdi",
      required: "Iltimos, ${label} kiriting",
      enum: "${label}, [${enum}] dan biri boʻlishi kerak",
      whitespace: "${label} boʻsh boʻlishi mumkin emas",
      date: {
        format: "${label} toʻgʻri sana formatida emas",
        parse: "${label} sanaga aylantirilmaydi",
        invalid: "${label} tog'ri sana emas"
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
        len: "${label}, ${len} ta belgidan iborat boʻlishi kerak",
        min: "${label} должна быть больше или равна ${min} символов",
        max: "${label}, ${max} belgidan katta yoki teng boʻlishi kerak",
        range: "${label} uzunligi ${min}-${max} belgilar orasida boʻlishi kerak"
      },
      number: {
        len: "${label}, ${len} ga teng boʻlishi kerak",
        min: "${label}, ${min} dan katta yoki teng boʻlishi kerak",
        max: "${label}, ${max} dan kichik yoki teng boʻlishi kerak",
        range: "${label}, ${min}-${max} orasida boʻlishi kerak"
      },
      array: {
        len: "${label} elementlari soni ${len} ga teng boʻlishi kerak",
        min: "${label} elementlari soni ${min} dan katta yoki teng boʻlishi kerak",
        max: "${label} elementlari soni ${max} dan kam yoki teng boʻlishi kerak",
        range: "${label} elementlari soni ${min} va ${max} orasida boʻlishi kerak"
      },
      pattern: {
        mismatch: "${label}, ${pattern} andazasiga mos emas"
      }
    }
  },
  Image: {
    preview: "Ko‘rib chiqish"
  },
  QRCode: {
    expired: "QR-kod eskirgan",
    refresh: "Yangilash"
  }
};
n.default = D;
var p = n;
const F = /* @__PURE__ */ y(p), A = /* @__PURE__ */ _({
  __proto__: null,
  default: F
}, [p]);
export {
  A as u
};
