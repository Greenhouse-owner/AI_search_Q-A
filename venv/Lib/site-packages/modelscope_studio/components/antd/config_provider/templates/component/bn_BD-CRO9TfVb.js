import { c as v } from "./Index-nJA-Ual0.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as g, c as x } from "./common-AHfHwMkE.js";
function D(m, f) {
  for (var p = 0; p < f.length; p++) {
    const a = f[p];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in m)) {
          const s = Object.getOwnPropertyDescriptor(a, l);
          s && Object.defineProperty(m, l, s.get ? s : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, {
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
  items_per_page: "/ পৃষ্ঠা",
  jump_to: "যাও",
  jump_to_confirm: "নিশ্চিত",
  page: "পৃষ্ঠা",
  // Pagination
  prev_page: "আগের পৃষ্ঠা",
  next_page: "পরের পৃষ্ঠা",
  prev_5: "পূর্ববর্তী ৫ পৃষ্ঠা",
  next_5: "পরবর্তী ৫ পৃষ্ঠা",
  prev_3: "পূর্ববর্তী ৩ পৃষ্ঠা",
  next_3: "পরবর্তী ৩ পৃষ্ঠা",
  page_size: "পাতার আকার"
};
i.default = y;
var c = {}, t = {}, d = {}, h = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var b = h(g), P = x, j = (0, b.default)((0, b.default)({}, P.commonLocale), {}, {
  locale: "bn_BD",
  today: "আজ",
  now: "এখন",
  backToToday: "আজকে ফিরে চলুন",
  ok: "ওকে",
  clear: "পরিস্কার",
  week: "সপ্তাহ",
  month: "মাস",
  year: "বছর",
  timeSelect: "সময় নির্বাচন",
  dateSelect: "তারিখ নির্বাচন",
  weekSelect: "সপ্তাহ পছন্দ করুন",
  monthSelect: "মাস পছন্দ করুন",
  yearSelect: "বছর পছন্দ করুন",
  decadeSelect: "একটি দশক পছন্দ করুন",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  previousMonth: "গত মাস (PageUp)",
  nextMonth: "আগামী মাস (PageDown)",
  previousYear: "গত বছর (Control + left)",
  nextYear: "আগামী বছর (Control + right)",
  previousDecade: "গত দশক",
  nextDecade: "পরের দশক",
  previousCentury: "গত শতাব্দী",
  nextCentury: "পরের শতাব্দী"
});
d.default = j;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const T = {
  placeholder: "সময় নির্বাচন",
  rangePlaceholder: ["সময় শুরু", "শেষ সময়"]
};
r.default = T;
var _ = o.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var B = _(d), M = _(r);
const O = {
  lang: Object.assign({
    placeholder: "তারিখ নির্বাচন",
    yearPlaceholder: "বছর নির্বাচন",
    quarterPlaceholder: "কোয়ার্টার নির্বাচন",
    monthPlaceholder: "মাস নির্বাচন",
    weekPlaceholder: "সপ্তাহ নির্বাচন",
    rangePlaceholder: ["শুরুর তারিখ", "শেষ তারিখ"],
    rangeYearPlaceholder: ["শুরুর বছর", "শেষ বছর"],
    rangeMonthPlaceholder: ["শুরুর মাস", "শেষ মাস"],
    rangeWeekPlaceholder: ["শুরুর সপ্তাহ", "শেষ সপ্তাহ"]
  }, B.default),
  timePickerLocale: Object.assign({}, M.default)
};
t.default = O;
var k = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var S = k(t);
c.default = S.default;
var u = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var Y = u(i), w = u(c), C = u(t), q = u(r);
const e = "${label} টি সঠিক ${type} নয়।", A = {
  locale: "bn-bd",
  Pagination: Y.default,
  DatePicker: C.default,
  TimePicker: q.default,
  Calendar: w.default,
  global: {
    placeholder: "অনুগ্রহ করে নির্বাচন করুন"
  },
  Table: {
    filterTitle: "ফিল্টার মেনু",
    filterConfirm: "ঠিক",
    filterReset: "রিসেট",
    filterEmptyText: "ফিল্টার নেই",
    emptyText: "কোনও ডেটা নেই",
    selectAll: "বর্তমান পৃষ্ঠা নির্বাচন করুন",
    selectInvert: "বর্তমান পৃষ্ঠাটি উল্টে দিন",
    selectNone: "সমস্ত ডেটা সাফ করুন",
    selectionAll: "সমস্ত ডেটা নির্বাচন করুন",
    sortTitle: "সাজান",
    expand: "সারি প্রসারিত করুন",
    collapse: "সারি সঙ্কুচিত করুন",
    triggerDesc: "অবতরণকে সাজানোর জন্য ক্লিক করুন",
    triggerAsc: "আরোহী বাছাই করতে ক্লিক করুন",
    cancelSort: "বাছাই বাতিল করতে ক্লিক করুন"
  },
  Modal: {
    okText: "ঠিক",
    cancelText: "বাতিল",
    justOkText: "ঠিক"
  },
  Popconfirm: {
    okText: "ঠিক",
    cancelText: "বাতিল"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "এখানে অনুসন্ধান",
    itemUnit: "আইটেম",
    itemsUnit: "আইটেমসমূহ",
    remove: "অপসারণ",
    selectCurrent: "বর্তমান পৃষ্ঠা নির্বাচন করুন",
    removeCurrent: "বর্তমান পৃষ্ঠাটি সরান",
    selectAll: "সমস্ত ডেটা নির্বাচন করুন",
    removeAll: "সমস্ত ডেটা সরান",
    selectInvert: "বর্তমান পৃষ্ঠাটি উল্টে দিন"
  },
  Upload: {
    uploading: "আপলোড হচ্ছে ...",
    removeFile: "ফাইল সরান",
    uploadError: "আপলোডে সমস্যা",
    previewFile: "ফাইলের পূর্বরূপ",
    downloadFile: "ফাইল ডাউনলোড"
  },
  Empty: {
    description: "কোনও ডেটা নেই"
  },
  Icon: {
    icon: "আইকন"
  },
  Text: {
    edit: "সম্পাদনা",
    copy: "অনুলিপি",
    copied: "অনুলিপি হয়েছে",
    expand: "বিস্তৃত করা"
  },
  Form: {
    optional: "(ঐচ্ছিক)",
    defaultValidateMessages: {
      default: "${label} এর ক্ষেত্রে ক্ষেত্র বৈধতা ত্রুটি",
      required: "অনুগ্রহ করে ${label} প্রবেশ করান",
      enum: "${label} অবশ্যই [${enum}] এর মধ্যে একটি হতে হবে",
      whitespace: "${label} ফাঁকা অক্ষর হতে পারে না",
      date: {
        format: "${label} তারিখ ফরমেট সঠিক নয়।",
        parse: "${label} তারিখে রূপান্তর করা যায় না",
        invalid: "${label} একটি সঠিক তারিখ না।"
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
        len: "${label} অবশ্যই ${len} অক্ষরের হতে হবে।",
        min: "${label} অবশ্যই অন্তত ${min} অক্ষরের হতে হবে।",
        max: "${label} অবশ্যই ${max} পর্যন্ত অক্ষরের হতে হবে।",
        range: "${label} অবশ্যই ${min}-${max} অক্ষরের এর মধ্যে হতে হবে।"
      },
      number: {
        len: "${label} অবশ্যই ${len} এর সমান হতে হবে",
        min: "${label} অবশ্যই সর্বনিম্ন ${min} হতে হবে",
        max: "${label} অবশ্যই সর্বোচ্চ ${max} হতে হবে",
        range: "${label} অবশ্যই ${min}-${max} এর মধ্যে হতে হবে"
      },
      array: {
        len: "অবশ্যই ${len} ${label} হতে হবে",
        min: "কমপক্ষে ${min} ${label}",
        max: "সর্বাধিক হিসাবে ${max} ${label}",
        range: "${label} এর পরিমাণ অবশ্যই ${min}-${max} এর মধ্যে হতে হবে"
      },
      pattern: {
        mismatch: "${label} এই ${pattern} প্যাটার্নের সাথে মেলে না"
      }
    }
  },
  Image: {
    preview: "পূর্বরূপ"
  }
};
n.default = A;
var $ = n;
const F = /* @__PURE__ */ v($), U = /* @__PURE__ */ D({
  __proto__: null,
  default: F
}, [$]);
export {
  U as b
};
