import { c as _ } from "./Index-nJA-Ual0.js";
import { i } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as y, c as $ } from "./common-AHfHwMkE.js";
function h(u, p) {
  for (var c = 0; c < p.length; c++) {
    const a = p[c];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in u)) {
          const f = Object.getOwnPropertyDescriptor(a, l);
          f && Object.defineProperty(u, l, f.get ? f : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, {
    value: "Module"
  }));
}
var n = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var g = {
  // Options
  items_per_page: "/ səhifə",
  jump_to: "Get",
  jump_to_confirm: "təsdiqlə",
  page: "",
  // Pagination
  prev_page: "Əvvəlki Səhifə",
  next_page: "Növbəti Səhifə",
  prev_5: "Əvvəlki 5 Səhifə",
  next_5: "Növbəti 5 Səhifə",
  prev_3: "Əvvəlki 3 Səhifə",
  next_3: "Növbəti 3 Səhifə",
  page_size: "Page Size"
};
o.default = g;
var d = {}, r = {}, m = {}, k = i.default;
Object.defineProperty(m, "__esModule", {
  value: !0
});
m.default = void 0;
var v = k(y), A = $, P = (0, v.default)((0, v.default)({}, A.commonLocale), {}, {
  locale: "az_AZ",
  today: "Bugün",
  now: "İndi",
  backToToday: "Bugünə qayıt",
  ok: "Təsdiq",
  clear: "Təmizlə",
  week: "Həftə",
  month: "Ay",
  year: "İl",
  timeSelect: "vaxtı seç",
  dateSelect: "tarixi seç",
  weekSelect: "Həftə seç",
  monthSelect: "Ay seç",
  yearSelect: "il seç",
  decadeSelect: "Onillik seçin",
  dateFormat: "D.M.YYYY",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  previousMonth: "Əvvəlki ay (PageUp)",
  nextMonth: "Növbəti ay (PageDown)",
  previousYear: "Sonuncu il (Control + left)",
  nextYear: "Növbəti il (Control + right)",
  previousDecade: "Sonuncu onillik",
  nextDecade: "Növbəti onillik",
  previousCentury: "Sonuncu əsr",
  nextCentury: "Növbəti əsr"
});
m.default = P;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const S = {
  placeholder: "Vaxtı seç",
  rangePlaceholder: ["Başlama tarixi", "Bitmə tarixi"]
};
t.default = S;
var b = i.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var z = b(m), B = b(t);
const T = {
  lang: Object.assign({
    placeholder: "Tarix seçin",
    rangePlaceholder: ["Başlama tarixi", "Bitmə tarixi"],
    yearPlaceholder: "İl seçin",
    quarterPlaceholder: "Rüb seçin",
    monthPlaceholder: "Ay seçin",
    weekPlaceholder: "Həftə seçin",
    rangeYearPlaceholder: ["Başlama il", "Bitmə il"],
    rangeQuarterPlaceholder: ["Başlama rüb", "Bitmə rüb"],
    rangeMonthPlaceholder: ["Başlama ay", "Bitmə ay"],
    rangeWeekPlaceholder: ["Başlama həftə", "Bitmə həftə"]
  }, z.default),
  timePickerLocale: Object.assign({}, B.default)
};
r.default = T;
var O = i.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var M = O(r);
d.default = M.default;
var s = i.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var j = s(o), C = s(d), Z = s(r), D = s(t);
const e = "${label} Hökmlü deyil ${type}", F = {
  locale: "az",
  Pagination: j.default,
  DatePicker: Z.default,
  TimePicker: D.default,
  Calendar: C.default,
  global: {
    placeholder: "Zəhmət olmasa seçin"
  },
  Table: {
    filterTitle: "Filter menyu",
    filterConfirm: "Axtar",
    filterReset: "Sıfırla",
    emptyText: "Məlumat yoxdur",
    selectAll: "Cari səhifəni seç",
    selectInvert: "Mövcud səhifənin elementlərinin sırasını tərs çevir",
    filterEmptyText: "Filter yoxdur",
    filterCheckAll: "Bütün maddələri seç",
    filterSearchPlaceholder: "Filterlərdə axtar",
    selectNone: "Bütün məlumatı sil",
    selectionAll: "Bütün məlumatı seç",
    sortTitle: "Sırala",
    expand: "Sıranı genişləndir",
    collapse: "Sıranı qapadın",
    triggerDesc: "Azalan sıralama üçün klik edin",
    triggerAsc: "Artan sıralama üçün klik edin",
    cancelSort: "Sıralamayı ləğv edin"
  },
  Tour: {
    Next: "Növbəti",
    Previous: "Əvvəlki",
    Finish: "Bitir"
  },
  Modal: {
    okText: "Bəli",
    cancelText: "Ləğv et",
    justOkText: "Bəli"
  },
  Popconfirm: {
    okText: "Bəli",
    cancelText: "Ləğv et"
  },
  Transfer: {
    titles: ["", ""],
    notFoundContent: "Tapılmadı",
    searchPlaceholder: "Burada axtar",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Sil",
    selectCurrent: "Cari səhifəni seç",
    removeCurrent: "Cari səhifəni sil",
    selectAll: "Bütün məlumatı seç",
    deselectAll: "Bütün seçmə nişanlarını sil",
    removeAll: "Bütün məlumatı sil",
    selectInvert: "Mövcud səhifənin elementlərinin sırasını tərs çevir"
  },
  Upload: {
    uploading: "Yüklənir...",
    removeFile: "Faylı sil",
    uploadError: "Yükləmə xətası",
    previewFile: "Fayla önbaxış",
    downloadFile: "Faylı yüklə"
  },
  Empty: {
    description: "Məlumat yoxdur"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Dəyişiklik et",
    copy: "Kopyala",
    copied: "Kopyalandı",
    expand: "Genişləndir",
    collapse: "Yığılma"
  },
  Form: {
    optional: "（Seçimli）",
    defaultValidateMessages: {
      default: "Sahə təsdiq xətası ${label}",
      required: "Xahiş edirik daxil olun ${label}",
      enum: "${label} Onlardan biri olmalıdır[${enum}]",
      whitespace: "${label} Null xarakter ola bilməz",
      date: {
        format: "${label} Tarix formatı hökmlü deyil",
        parse: "${label} Tarixi döndərmək mümkün deyil",
        invalid: "${label} səhv tarixdir"
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
        len: "${label} Olmalıdır ${len} işarələr",
        min: "${label} ən az ${min} işarələr",
        max: "${label} ən çox ${max} işarələr",
        range: "${label} Olmalıdır ${min}-${max} hərflər arasında"
      },
      number: {
        len: "${label} Bərabər olmalıdır ${len}",
        min: "${label} Minimal dəyəri ${min}",
        max: "${label} Maksimal qiymət: ${max}",
        range: "${label} Olmalıdır ${min}-${max} aralarında"
      },
      array: {
        len: "Olmalıdır ${len} parça ${label}",
        min: "ən az ${min} parça ${label}",
        max: "ən çox ${max} parça ${label}",
        range: "${label} miqdarıOlmalıdır ${min}-${max} aralarında"
      },
      pattern: {
        mismatch: "${label} Şablona uyğun gəlmir ${pattern}"
      }
    }
  },
  Image: {
    preview: "Önbaxış"
  },
  QRCode: {
    expired: "QR kodunun müddəti bitmişdir",
    refresh: "Yenilə",
    scanned: "Gözətildi"
  },
  ColorPicker: {
    presetEmpty: "Boşdur",
    transparent: "Şəffaf",
    singleColor: "Tək rəng",
    gradientColor: "Gradient rəng"
  }
};
n.default = F;
var x = n;
const Y = /* @__PURE__ */ _(x), R = /* @__PURE__ */ h({
  __proto__: null,
  default: Y
}, [x]);
export {
  R as a
};
