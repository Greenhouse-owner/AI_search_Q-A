import { a as b } from "./XProvider-CSZ95uJx.js";
import { i } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as k, c as v } from "./common-AHfHwMkE.js";
function $(d, f) {
  for (var p = 0; p < f.length; p++) {
    const a = f[p];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in d)) {
          const c = Object.getOwnPropertyDescriptor(a, t);
          c && Object.defineProperty(d, t, c.get ? c : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, {
    value: "Module"
  }));
}
var n = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var y = {
  // Options
  items_per_page: "/ halaman",
  jump_to: "Lompat ke",
  jump_to_confirm: "Sahkan",
  page: "",
  // Pagination
  prev_page: "Halaman sebelumnya",
  next_page: "Halam seterusnya",
  prev_5: "5 halaman sebelum",
  next_5: "5 halaman seterusnya",
  prev_3: "3 halaman sebelumnya",
  next_3: "3 halaman seterusnya",
  page_size: "Page Size"
};
o.default = y;
var u = {}, l = {}, m = {}, M = i.default;
Object.defineProperty(m, "__esModule", {
  value: !0
});
m.default = void 0;
var h = M(k), x = v, T = (0, h.default)((0, h.default)({}, x.commonLocale), {}, {
  locale: "ms_MY",
  today: "Hari ini",
  now: "Sekarang",
  backToToday: "Kembali ke hari ini",
  ok: "OK",
  timeSelect: "Pilih masa",
  dateSelect: "Pilih tarikh",
  weekSelect: "Pilih minggu",
  clear: "Padam",
  week: "Minggu",
  month: "Bulan",
  year: "Tahun",
  previousMonth: "Bulan lepas",
  nextMonth: "Bulan depan",
  monthSelect: "Pilih bulan",
  yearSelect: "Pilih tahun",
  decadeSelect: "Pilih dekad",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousYear: "Tahun lepas (Ctrl+left)",
  nextYear: "Tahun depan (Ctrl+right)",
  previousDecade: "Dekad lepas",
  nextDecade: "Dekad depan",
  previousCentury: "Abad lepas",
  nextCentury: "Abad depan",
  monthBeforeYear: !1
});
m.default = T;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const P = {
  placeholder: "Sila pilih masa"
};
r.default = P;
var g = i.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var S = g(m), Y = g(r);
const j = {
  lang: Object.assign({
    placeholder: "Pilih tarikh",
    rangePlaceholder: ["Tarikh mula", "Tarikh akhir"]
  }, S.default),
  timePickerLocale: Object.assign({}, Y.default)
};
l.default = j;
var O = i.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var C = O(l);
u.default = C.default;
var s = i.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var D = s(o), B = s(u), A = s(l), F = s(r);
const e = "${label} bukan ${type} jenis yang sah", K = {
  locale: "ms-my",
  Pagination: D.default,
  DatePicker: A.default,
  TimePicker: F.default,
  Calendar: B.default,
  global: {
    placeholder: "Sila pilih"
  },
  Table: {
    filterTitle: "Cari dengan tajuk",
    filterConfirm: "OK",
    filterReset: "Menetapkan semula",
    emptyText: "Tiada data",
    selectAll: "Pilih Semua",
    selectInvert: "Terbalikkan",
    filterEmptyText: "Tiada Saringan",
    filterCheckAll: "Semak Semua",
    filterSearchPlaceholder: "Cari",
    selectNone: "Kosong Semua",
    selectionAll: "Semua Data",
    sortTitle: "Urutkan",
    expand: "Buka",
    collapse: "Tutup",
    triggerDesc: "Turun",
    triggerAsc: "Naik",
    cancelSort: "Batal Urut"
  },
  Modal: {
    okText: "OK",
    cancelText: "Batal",
    justOkText: "OK"
  },
  Tour: {
    Next: "Seterusnya",
    Previous: "Sebelumnya",
    Finish: "Tamat"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Batal"
  },
  Transfer: {
    titles: ["", ""],
    notFoundContent: "Tidak dijumpai",
    searchPlaceholder: "Carian di sini",
    itemUnit: "item",
    itemsUnit: "item",
    remove: "Buang",
    selectCurrent: "Pilih Halaman Ini",
    removeCurrent: "Buang Dari Halaman Ini",
    selectAll: "Pilih Semua",
    removeAll: "Buang Semua",
    selectInvert: "Balik Pilihan"
  },
  Upload: {
    uploading: "Sedang memuat naik...",
    removeFile: "Buang fail",
    uploadError: "Masalah muat naik",
    previewFile: "Tengok fail",
    downloadFile: "Muat turun fail"
  },
  Empty: {
    description: "Tiada data"
  },
  Icon: {
    icon: "ikon"
  },
  Text: {
    edit: "Sunting",
    copy: "Salin",
    copied: "Berjaya menyalin",
    expand: "Kembang"
  },
  Form: {
    optional: "(Opsional)",
    defaultValidateMessages: {
      default: "Ralat pengesahan untuk ${label}",
      required: "Isi ${label}",
      enum: "${label} mesti salah satu dari [${enum}]",
      whitespace: "${label} tidak boleh kosong",
      date: {
        format: "Format tarikh ${label} salah",
        parse: "${label} tidak boleh jadi tarikh",
        invalid: "${label} adalah tarikh tidak sah"
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
        len: "${label} mesti ${len} aksara",
        min: "Min ${min} aksara",
        max: "Max ${max} aksara",
        range: "${label} antara ${min}-${max} aksara"
      },
      number: {
        len: "${label} sama dengan ${len}",
        min: "Min ${min}",
        max: "Max ${max}",
        range: "${label} antara ${min}-${max}"
      },
      array: {
        len: "${len} ${label}",
        min: "Min ${min} ${label}",
        max: "Max ${max} ${label}",
        range: "${label} antara ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} tidak sesuai ${pattern}"
      }
    }
  },
  Image: {
    preview: "Pratonton"
  },
  QRCode: {
    expired: "Kod QR luput",
    refresh: "Segar Semula"
  },
  ColorPicker: {
    presetEmpty: "Tiada",
    transparent: "Tidak tembus cahaya",
    singleColor: "Warna tunggal",
    gradientColor: "Warna gradien"
  }
};
n.default = K;
var _ = n;
const R = /* @__PURE__ */ b(_), I = /* @__PURE__ */ $({
  __proto__: null,
  default: R
}, [_]);
export {
  I as m
};
