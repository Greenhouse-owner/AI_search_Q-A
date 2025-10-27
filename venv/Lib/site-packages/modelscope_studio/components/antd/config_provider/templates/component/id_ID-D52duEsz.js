import { c as b } from "./Index-nJA-Ual0.js";
import { i } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as _, c as v } from "./common-AHfHwMkE.js";
function $(m, p) {
  for (var c = 0; c < p.length; c++) {
    const e = p[c];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const l in e)
        if (l !== "default" && !(l in m)) {
          const h = Object.getOwnPropertyDescriptor(e, l);
          h && Object.defineProperty(m, l, h.get ? h : {
            enumerable: !0,
            get: () => e[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, {
    value: "Module"
  }));
}
var n = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var P = {
  // Options
  items_per_page: "/ halaman",
  jump_to: "Menuju",
  jump_to_confirm: "konfirmasi",
  page: "Halaman",
  // Pagination
  prev_page: "Halaman Sebelumnya",
  next_page: "Halaman Berikutnya",
  prev_5: "5 Halaman Sebelumnya",
  next_5: "5 Halaman Berikutnya",
  prev_3: "3 Halaman Sebelumnya",
  next_3: "3 Halaman Berikutnya",
  page_size: "ukuran halaman"
};
u.default = P;
var o = {}, t = {}, d = {}, y = i.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var k = y(_), D = v, x = (0, k.default)((0, k.default)({}, D.commonLocale), {}, {
  locale: "id_ID",
  today: "Hari ini",
  now: "Sekarang",
  backToToday: "Kembali ke hari ini",
  ok: "Baik",
  clear: "Bersih",
  week: "Minggu",
  month: "Bulan",
  year: "Tahun",
  timeSelect: "pilih waktu",
  dateSelect: "pilih tanggal",
  weekSelect: "Pilih satu minggu",
  monthSelect: "Pilih satu bulan",
  yearSelect: "Pilih satu tahun",
  decadeSelect: "Pilih satu dekade",
  dateFormat: "D/M/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  previousMonth: "Bulan sebelumnya (PageUp)",
  nextMonth: "Bulan selanjutnya (PageDown)",
  previousYear: "Tahun lalu (Control + kiri)",
  nextYear: "Tahun selanjutnya (Kontrol + kanan)",
  previousDecade: "Dekade terakhir",
  nextDecade: "Dekade berikutnya",
  previousCentury: "Abad terakhir",
  nextCentury: "Abad berikutnya"
});
d.default = x;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const T = {
  placeholder: "Pilih waktu",
  rangePlaceholder: ["Waktu awal", "Waktu akhir"]
};
r.default = T;
var g = i.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var j = g(d), M = g(r);
const S = {
  lang: Object.assign({
    placeholder: "Pilih tanggal",
    yearPlaceholder: "Pilih tahun",
    quarterPlaceholder: "Pilih kuartal",
    monthPlaceholder: "Pilih bulan",
    weekPlaceholder: "Pilih minggu",
    rangePlaceholder: ["Tanggal awal", "Tanggal akhir"],
    rangeYearPlaceholder: ["Tahun awal", "Tahun akhir"],
    rangeQuarterPlaceholder: ["Kuartal awal", "Kuartal akhir"],
    rangeMonthPlaceholder: ["Bulan awal", "Bulan akhir"],
    rangeWeekPlaceholder: ["Minggu awal", "Minggu akhir"]
  }, j.default),
  timePickerLocale: Object.assign({}, M.default)
};
t.default = S;
var I = i.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var w = I(t);
o.default = w.default;
var s = i.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var O = s(u), H = s(o), B = s(t), C = s(r);
const a = "${label} tidak valid ${type}", K = {
  locale: "id",
  Pagination: O.default,
  DatePicker: B.default,
  TimePicker: C.default,
  Calendar: H.default,
  global: {
    placeholder: "Silahkan pilih"
  },
  Table: {
    filterTitle: "Menu filter",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "Tidak ada filter",
    filterCheckAll: "Pilih semua item",
    filterSearchPlaceholder: "Cari di filter",
    emptyText: "Tidak ada data",
    selectAll: "Pilih halaman saat ini",
    selectInvert: "Balikkan halaman saat ini",
    selectNone: "Hapus semua data",
    selectionAll: "Pilih semua data",
    sortTitle: "Urutkan",
    expand: "Perluas baris",
    collapse: "Perkecil baris",
    triggerDesc: "Klik untuk mengurutkan secara menurun",
    triggerAsc: "Klik untuk mengurutkan secara menaik",
    cancelSort: "Klik untuk membatalkan pengurutan"
  },
  Tour: {
    Next: "Selanjutnya",
    Previous: "Sebelumnya",
    Finish: "Selesai"
  },
  Modal: {
    okText: "OK",
    cancelText: "Batal",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Batal"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Cari di sini",
    itemUnit: "data",
    itemsUnit: "data",
    remove: "Hapus",
    selectCurrent: "Pilih halaman saat ini",
    removeCurrent: "Hapus halaman saat ini",
    selectAll: "Pilih semua data",
    deselectAll: "Batal pilih semua data",
    removeAll: "Hapus semua data",
    selectInvert: "Balikkan halaman saat ini"
  },
  Upload: {
    uploading: "Mengunggah...",
    removeFile: "Hapus file",
    uploadError: "Kesalahan pengunggahan",
    previewFile: "Pratinjau file",
    downloadFile: "Unduh file"
  },
  Empty: {
    description: "Tidak ada data"
  },
  Icon: {
    icon: "ikon"
  },
  Text: {
    edit: "Ubah",
    copy: "Salin",
    copied: "Disalin",
    expand: "Perluas",
    collapse: "Perkecil"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Kesalahan validasi untuk ${label}",
      required: "Tolong masukkan ${label}",
      enum: "${label} harus menjadi salah satu dari [${enum}]",
      whitespace: "${label} tidak boleh berupa karakter kosong",
      date: {
        format: "${label} format tanggal tidak valid",
        parse: "${label} tidak dapat diubah menjadi tanggal",
        invalid: "${label} adalah tanggal yang tidak valid"
      },
      types: {
        string: a,
        method: a,
        array: a,
        object: a,
        number: a,
        date: a,
        boolean: a,
        integer: a,
        float: a,
        regexp: a,
        email: a,
        url: a,
        hex: a
      },
      string: {
        len: "${label} harus berupa ${len} karakter",
        min: "${label} harus minimal ${min} karakter",
        max: "${label} harus maksimal ${max} karakter",
        range: "${label} harus diantara ${min}-${max} karakter"
      },
      number: {
        len: "${label} harus sama dengan ${len}",
        min: "${label} harus minimal ${min}",
        max: "${label} harus maksimal ${max}",
        range: "${label} harus di antara ${min}-${max}"
      },
      array: {
        len: "Harus ${len} ${label}",
        min: "Minimal ${min} ${label}",
        max: "Maksimal ${max} ${label}",
        range: "Jumlah ${label} harus di antara ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} tidak sesuai dengan pola ${pattern}"
      }
    }
  },
  Image: {
    preview: "Pratinjau"
  },
  QRCode: {
    expired: "Kode QR sudah habis masa berlakunya",
    refresh: "Segarkan",
    scanned: "Dipindai"
  },
  ColorPicker: {
    presetEmpty: "Kosong",
    transparent: "Transparan",
    singleColor: "Warna tunggal",
    gradientColor: "Warna gradien"
  }
};
n.default = K;
var f = n;
const A = /* @__PURE__ */ b(f), q = /* @__PURE__ */ $({
  __proto__: null,
  default: A
}, [f]);
export {
  q as i
};
