import { c as k } from "./Index-nJA-Ual0.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as b, c as g } from "./common-AHfHwMkE.js";
function v(c, p) {
  for (var u = 0; u < p.length; u++) {
    const a = p[u];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in c)) {
          const f = Object.getOwnPropertyDescriptor(a, l);
          f && Object.defineProperty(c, l, f.get ? f : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, {
    value: "Module"
  }));
}
var n = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var T = {
  // Options
  items_per_page: "/ sayfa",
  jump_to: "Git",
  jump_to_confirm: "onayla",
  page: "Sayfa",
  // Pagination
  prev_page: "Önceki Sayfa",
  next_page: "Sonraki Sayfa",
  prev_5: "Önceki 5 Sayfa",
  next_5: "Sonraki 5 Sayfa",
  prev_3: "Önceki 3 Sayfa",
  next_3: "Sonraki 3 Sayfa",
  page_size: "sayfa boyutu"
};
i.default = T;
var m = {}, r = {}, s = {}, h = o.default;
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var y = h(b), S = g, x = (0, y.default)((0, y.default)({}, S.commonLocale), {}, {
  locale: "tr_TR",
  today: "Bugün",
  now: "Şimdi",
  backToToday: "Bugüne Geri Dön",
  ok: "Tamam",
  clear: "Temizle",
  week: "Hafta",
  month: "Ay",
  year: "Yıl",
  timeSelect: "Zaman Seç",
  dateSelect: "Tarih Seç",
  monthSelect: "Ay Seç",
  yearSelect: "Yıl Seç",
  decadeSelect: "On Yıl Seç",
  dateFormat: "DD/MM/YYYY",
  dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
  previousMonth: "Önceki Ay (PageUp)",
  nextMonth: "Sonraki Ay (PageDown)",
  previousYear: "Önceki Yıl (Control + Sol)",
  nextYear: "Sonraki Yıl (Control + Sağ)",
  previousDecade: "Önceki On Yıl",
  nextDecade: "Sonraki On Yıl",
  previousCentury: "Önceki Yüzyıl",
  nextCentury: "Sonraki Yüzyıl",
  shortWeekDays: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
  shortMonths: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"]
});
s.default = x;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const P = {
  placeholder: "Zaman seç",
  rangePlaceholder: ["Başlangıç zamanı", "Bitiş zamanı"]
};
t.default = P;
var _ = o.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var Y = _(s), z = _(t);
const R = {
  lang: Object.assign({
    placeholder: "Tarih seç",
    yearPlaceholder: "Yıl seç",
    quarterPlaceholder: "Çeyrek seç",
    monthPlaceholder: "Ay seç",
    weekPlaceholder: "Hafta seç",
    rangePlaceholder: ["Başlangıç tarihi", "Bitiş tarihi"],
    rangeYearPlaceholder: ["Başlangıç yılı", "Bitiş yılı"],
    rangeMonthPlaceholder: ["Başlangıç ayı", "Bitiş ayı"],
    rangeWeekPlaceholder: ["Başlangıç haftası", "Bitiş haftası"]
  }, Y.default),
  timePickerLocale: Object.assign({}, z.default)
};
r.default = R;
var D = o.default;
Object.defineProperty(m, "__esModule", {
  value: !0
});
m.default = void 0;
var A = D(r);
m.default = A.default;
var d = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var j = d(i), M = d(m), O = d(r), B = d(t);
const e = "${label} geçerli bir ${type} değil", C = {
  locale: "tr",
  Pagination: j.default,
  DatePicker: O.default,
  TimePicker: B.default,
  Calendar: M.default,
  global: {
    placeholder: "Lütfen seçiniz"
  },
  Table: {
    filterTitle: "Filtre menüsü",
    filterConfirm: "Tamam",
    filterReset: "Sıfırla",
    filterEmptyText: "Filtre yok",
    filterCheckAll: "Tümünü seç",
    selectAll: "Tüm sayfayı seç",
    selectInvert: "Tersini seç",
    selectionAll: "Tümünü seç",
    sortTitle: "Sırala",
    expand: "Satırı genişlet",
    collapse: "Satırı daralt",
    triggerDesc: "Azalan düzende sırala",
    triggerAsc: "Artan düzende sırala",
    cancelSort: "Sıralamayı kaldır"
  },
  Modal: {
    okText: "Tamam",
    cancelText: "İptal",
    justOkText: "Tamam"
  },
  Popconfirm: {
    okText: "Tamam",
    cancelText: "İptal"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Arama",
    itemUnit: "Öğe",
    itemsUnit: "Öğeler",
    remove: "Kaldır",
    selectCurrent: "Tüm sayfayı seç",
    removeCurrent: "Sayfayı kaldır",
    selectAll: "Tümünü seç",
    deselectAll: "Tümünün seçimini kaldır",
    removeAll: "Tümünü kaldır",
    selectInvert: "Tersini seç"
  },
  Upload: {
    uploading: "Yükleniyor...",
    removeFile: "Dosyayı kaldır",
    uploadError: "Yükleme hatası",
    previewFile: "Dosyayı önizle",
    downloadFile: "Dosyayı indir"
  },
  Empty: {
    description: "Veri Yok"
  },
  Icon: {
    icon: "ikon"
  },
  Text: {
    edit: "Düzenle",
    copy: "Kopyala",
    copied: "Kopyalandı",
    expand: "Genişlet"
  },
  Form: {
    optional: "(opsiyonel)",
    defaultValidateMessages: {
      default: "Alan doğrulama hatası ${label}",
      required: "${label} gerekli bir alan",
      enum: "${label} şunlardan biri olmalı: [${enum}]",
      whitespace: "${label} sadece boşluk olamaz",
      date: {
        format: "${label} tarih biçimi geçersiz",
        parse: "${label} bir tarihe dönüştürülemedi",
        invalid: "${label} geçersiz bir tarih"
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
        len: "${label} ${len} karakter olmalı",
        min: "${label} en az ${min} karakter olmalı",
        max: "${label} en çok ${max} karakter olmalı",
        range: "${label} ${min}-${max} karakter arası olmalı"
      },
      number: {
        len: "${label} ${len} olmalı",
        min: "${label} en az ${min} olmalı",
        max: "${label} en çok ${max} olmalı",
        range: "${label} ${min}-${max} arası olmalı"
      },
      array: {
        len: "${label} sayısı ${len} olmalı",
        min: "${label} sayısı en az ${min} olmalı",
        max: "${label} sayısı en çok ${max} olmalı",
        range: "${label} sayısı ${min}-${max} arası olmalı"
      },
      pattern: {
        mismatch: "${label} şu kalıpla eşleşmeli: ${pattern}"
      }
    }
  },
  Image: {
    preview: "Önizleme"
  }
};
n.default = C;
var $ = n;
const w = /* @__PURE__ */ k($), H = /* @__PURE__ */ v({
  __proto__: null,
  default: w
}, [$]);
export {
  H as t
};
