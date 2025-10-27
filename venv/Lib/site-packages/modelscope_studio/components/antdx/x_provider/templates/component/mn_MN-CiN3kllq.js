import { a as b } from "./XProvider-CSZ95uJx.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as g, c as x } from "./common-AHfHwMkE.js";
function M(u, f) {
  for (var p = 0; p < f.length; p++) {
    const a = f[p];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in u)) {
          const s = Object.getOwnPropertyDescriptor(a, t);
          s && Object.defineProperty(u, t, s.get ? s : {
            enumerable: !0,
            get: () => a[t]
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
var y = {
  // Options
  items_per_page: "/ хуудас",
  jump_to: "Шилжих",
  jump_to_confirm: "сонгох",
  page: "",
  // Pagination
  prev_page: "Өмнөх хуудас",
  next_page: "Дараагийн хуудас",
  prev_5: "Дараагийн 5 хуудас",
  next_5: "Дараагийн 5 хуудас",
  prev_3: "Дараагийн 3 хуудас",
  next_3: "Дараагийн 3 хуудас",
  page_size: "Page Size"
};
i.default = y;
var m = {}, l = {}, c = {}, P = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var _ = P(g), h = x, j = (0, _.default)((0, _.default)({}, h.commonLocale), {}, {
  locale: "mn_MN",
  today: "Өнөөдөр",
  now: "Одоо",
  backToToday: "Өнөөдөрлүү буцах",
  ok: "OK",
  clear: "Цэвэрлэх",
  week: "Долоо хоног",
  month: "Сар",
  year: "Жил",
  timeSelect: "Цаг сонгох",
  dateSelect: "Огноо сонгох",
  weekSelect: "7 хоног сонгох",
  monthSelect: "Сар сонгох",
  yearSelect: "Жил сонгох",
  decadeSelect: "Арван сонгох",
  dateFormat: "YYYY/MM/DD",
  dayFormat: "DD",
  dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
  previousMonth: "Өмнөх сар (PageUp)",
  nextMonth: "Дараа сар (PageDown)",
  previousYear: "Өмнөх жил (Control + left)",
  nextYear: "Дараа жил (Control + right)",
  previousDecade: "Өмнөх арван",
  nextDecade: "Дараа арван",
  previousCentury: "Өмнөх зуун",
  nextCentury: "Дараа зуун"
});
c.default = j;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const N = {
  placeholder: "Цаг сонгох"
};
r.default = N;
var $ = o.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var D = $(c), T = $(r);
const O = {
  lang: Object.assign({
    placeholder: "Огноо сонгох",
    rangePlaceholder: ["Эхлэх огноо", "Дуусах огноо"]
  }, D.default),
  timePickerLocale: Object.assign({}, T.default)
};
l.default = O;
var S = o.default;
Object.defineProperty(m, "__esModule", {
  value: !0
});
m.default = void 0;
var k = S(l);
m.default = k.default;
var d = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var C = d(i), Y = d(m), w = d(l), A = d(r);
const e = "${label} нь хүчинтэй ${type} биш", F = {
  locale: "mn-mn",
  Pagination: C.default,
  DatePicker: w.default,
  TimePicker: A.default,
  Calendar: Y.default,
  global: {
    placeholder: "Сонгоно уу"
  },
  Table: {
    filterTitle: "Хайх цэс",
    filterConfirm: "Тийм",
    filterReset: "Цэвэрлэх",
    filterEmptyText: "Шүүлтүүр байхгүй",
    filterCheckAll: "Бүх зүйлийг сонгоно уу",
    filterSearchPlaceholder: "Шүүлтүүрээс хайх",
    emptyText: "Өгөгдөл алга",
    selectAll: "Бүгдийг сонгох",
    selectInvert: "Бусдыг сонгох",
    selectNone: "Бүх өгөгдлийг арилгах",
    selectionAll: "Бүх өгөгдлийг сонгоно уу",
    sortTitle: "Эрэмбэлэх",
    expand: "Мөрийг өргөжүүлэх",
    collapse: "Мөрийг буулгах",
    triggerDesc: "Буурах байдлаар эрэмбэлэхийн тулд товшино уу",
    triggerAsc: "Өсөхөөр эрэмбэлэхийн тулд товшино уу",
    cancelSort: "Эрэмбэлэхийг цуцлахын тулд товшино уу"
  },
  Modal: {
    okText: "Тийм",
    cancelText: "Цуцлах",
    justOkText: "Тийм"
  },
  Popconfirm: {
    okText: "Тийм",
    cancelText: "Цуцлах"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Хайх",
    itemUnit: "Зүйл",
    itemsUnit: "Зүйлүүд",
    remove: "Устгах",
    selectCurrent: "Одоогийн хуудсыг сонгоно уу",
    removeCurrent: "Одоогийн хуудсыг устгана уу",
    selectAll: "Бүх өгөгдлийг сонгоно уу",
    removeAll: "Бүх өгөгдлийг устгана уу",
    selectInvert: "Одоогийн хуудсыг эргүүлэх"
  },
  Upload: {
    uploading: "Хуулж байна...",
    removeFile: "Файл устгах",
    uploadError: "Хуулахад алдаа гарлаа",
    previewFile: "Файлыг түргэн үзэх",
    downloadFile: "Файлыг татах"
  },
  Empty: {
    description: "Мэдээлэл байхгүй байна"
  },
  Icon: {
    icon: "дүрс"
  },
  Text: {
    edit: "Засварлах",
    copy: "Хуулбарлах",
    copied: "Хуулсан",
    expand: "Өргөтгөх"
  },
  Form: {
    optional: "(сонголттой)",
    defaultValidateMessages: {
      default: "${label}-ийн талбарын баталгаажуулалтын алдаа",
      required: "${label} оруулна уу",
      enum: "${label} нь [${enum}]-ийн нэг байх ёстой",
      whitespace: "${label} нь хоосон тэмдэгт байж болохгүй",
      date: {
        format: "${label} огнооны формат буруу байна",
        parse: "${label}-г огноо руу хөрвүүлэх боломжгүй",
        invalid: "${label} нь хүчингүй огноо юм"
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
        len: "${label} ${len} тэмдэгттэй байх ёстой",
        min: "${label} хамгийн багадаа ${min} тэмдэгттэй байх ёстой",
        max: "${label} нь ${max} хүртэлх тэмдэгттэй байх ёстой",
        range: "${label} ${min}-${max} тэмдэгтийн хооронд байх ёстой"
      },
      number: {
        len: "${label} нь ${len}-тэй тэнцүү байх ёстой",
        min: "${label} хамгийн багадаа ${min} байх ёстой",
        max: "${label} дээд тал нь ${max} байх ёстой",
        range: "${label} ${min}-${max} хооронд байх ёстой"
      },
      array: {
        len: "${len} ${label} байх ёстой",
        min: "Дор хаяж ${мин} ${label}",
        max: "Хамгийн ихдээ ${max} ${label}",
        range: "${label}-н хэмжээ ${min}-${max} хооронд байх ёстой"
      },
      pattern: {
        mismatch: "${label} нь ${pattern} загвартай тохирохгүй байна"
      }
    }
  },
  Image: {
    preview: "Урьдчилан үзэх"
  }
};
n.default = F;
var v = n;
const q = /* @__PURE__ */ b(v), U = /* @__PURE__ */ M({
  __proto__: null,
  default: q
}, [v]);
export {
  U as m
};
