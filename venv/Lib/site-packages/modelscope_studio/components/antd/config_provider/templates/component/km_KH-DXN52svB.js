import { c as v } from "./Index-nJA-Ual0.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as g, c as h } from "./common-AHfHwMkE.js";
function k(d, p) {
  for (var s = 0; s < p.length; s++) {
    const a = p[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in d)) {
          const f = Object.getOwnPropertyDescriptor(a, t);
          f && Object.defineProperty(d, t, f.get ? f : {
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
var n = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var x = {
  // Options
  items_per_page: "/ ទំព័រ",
  jump_to: "លោត​ទៅ",
  jump_to_confirm: "បញ្ជាក់",
  page: "ទំព័រ",
  // Pagination
  prev_page: "ទំព័រ​មុន",
  next_page: "ទំព័រ​​បន្ទាប់",
  prev_5: "៥ ទំព័រថយក្រោយ",
  next_5: "៥ ទំព័រទៅមុខ",
  prev_3: "៣ ទំព័រថយក្រោយ",
  next_3: "៣ ទំព័រទៅមុខ",
  page_size: "Page Size"
};
i.default = x;
var m = {}, l = {}, c = {}, y = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var b = y(g), P = h, j = (0, b.default)((0, b.default)({}, P.commonLocale), {}, {
  locale: "km",
  today: "ថ្ងៃនេះ",
  now: "ឥឡូវ​នេះ",
  backToToday: "ត្រលប់ទៅថ្ងៃនេះ",
  ok: "កំណត់",
  timeSelect: "រយៈពេលជ្រើសរើស",
  dateSelect: "ជ្រើសរើសកាលបរិច្ឆេទ",
  weekSelect: "ជ្រើសរើសសប្តាហ៍",
  clear: "ច្បាស់",
  week: "សប្តាហ៍",
  month: "ខែ",
  year: "ឆ្នាំ",
  previousMonth: "ខែមុន (ឡើងទំព័រ)",
  nextMonth: "ខែបន្ទាប់ (ប៊ូតុងចុះទំព័រ)",
  monthSelect: "ជ្រើសរើសខែ",
  yearSelect: "ជ្រើសរើសឆ្នាំ",
  decadeSelect: "ជ្រើសរើសអាយុ",
  dateFormat: "YYYY-M-D",
  dateTimeFormat: "YYYY-M-D HH:mm:ss",
  previousYear: "ឆ្នាំមុន (Controlគ្រាប់ចុចបូកព្រួញខាងឆ្វេង)",
  nextYear: "ឆ្នាំក្រោយ (Control គ្រាប់ចុចបូកព្រួញស្ដាំ)",
  previousDecade: "ជំនាន់ចុងក្រោយ",
  nextDecade: "ជំនាន់​ក្រោយ",
  previousCentury: "សតវត្សចុងក្រោយ",
  nextCentury: "សតវត្សរ៍បន្ទាប់",
  monthBeforeYear: !1
});
c.default = j;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const H = {
  placeholder: "រើសម៉ោង",
  rangePlaceholder: ["ម៉ោងចប់ផ្ដើម", "ម៉ោងបញ្ចប់"]
};
r.default = H;
var _ = o.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var T = _(c), K = _(r);
const M = {
  lang: Object.assign({
    placeholder: "រើសថ្ងៃ",
    yearPlaceholder: "រើសឆ្នាំ",
    quarterPlaceholder: "រើសត្រីមាស",
    monthPlaceholder: "រើសខែ",
    weekPlaceholder: "រើសសប្តាហ៍",
    rangePlaceholder: ["ថ្ងៃចាប់ផ្ដើម", "ថ្ងៃបញ្ចប់"],
    rangeYearPlaceholder: ["ឆ្នាំចាប់ផ្ដើម", "ឆ្នាំបញ្ចប់"],
    rangeMonthPlaceholder: ["ខែចាប់ផ្ដើម", "ខែបញ្ចប់"],
    rangeWeekPlaceholder: ["សប្ដាហ៍ចាប់ផ្ដើម", "សប្ដាហ៍បញ្ចប់"]
  }, T.default),
  timePickerLocale: Object.assign({}, K.default)
};
l.default = M;
var O = o.default;
Object.defineProperty(m, "__esModule", {
  value: !0
});
m.default = void 0;
var D = O(l);
m.default = D.default;
var u = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var S = u(i), Y = u(m), w = u(l), q = u(r);
const e = "${label} is not a valid ${type}", F = {
  locale: "km",
  Pagination: S.default,
  DatePicker: w.default,
  TimePicker: q.default,
  Calendar: Y.default,
  Table: {
    filterTitle: "បញ្ចីតម្រៀប",
    filterConfirm: "យល់ព្រម",
    filterReset: "ត្រឡប់ដើម",
    filterEmptyText: "គ្មានបញ្ចីតម្រៀប",
    emptyText: "គ្មានទិន្នន័យ",
    selectAll: "រើសក្នុងទំព័រនេះ",
    selectInvert: "បញ្ច្រាសក្នុងទំព័រនេះ",
    selectNone: "លុបចេញទាំងអស់",
    selectionAll: "រើសយកទាំងអស់",
    sortTitle: "តម្រៀប",
    expand: "ពន្លាត",
    collapse: "បិតបាំង",
    triggerDesc: "ចុចដើម្បីរៀបតាមលំដាប់ធំ",
    triggerAsc: "ចុចដើម្បីរៀបតាមលំដាប់តូច​",
    cancelSort: "ចុចដើម្បីបោះបង់"
  },
  Modal: {
    okText: "យល់ព្រម",
    cancelText: "បោះបង់",
    justOkText: "យល់ព្រម"
  },
  Popconfirm: {
    okText: "យល់ព្រម",
    cancelText: "បោះបង់"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "ស្វែងរកនៅទីនេះ",
    itemUnit: "",
    itemsUnit: "items"
  },
  Upload: {
    uploading: "កំពុងបញ្ចូលឡើង...",
    removeFile: "លុបឯកសារ",
    uploadError: "បញ្ចូលមិនជោកជ័យ",
    previewFile: "មើលឯកសារ",
    downloadFile: "ទាញយកឯកសារ"
  },
  Empty: {
    description: "គ្មានទិន្នន័យ"
  },
  Form: {
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
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
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  }
};
n.default = F;
var $ = n;
const A = /* @__PURE__ */ v($), z = /* @__PURE__ */ k({
  __proto__: null,
  default: A
}, [$]);
export {
  z as k
};
