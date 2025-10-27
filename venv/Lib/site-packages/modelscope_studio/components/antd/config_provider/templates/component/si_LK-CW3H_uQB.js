import { c as b } from "./Index-nJA-Ual0.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as g, c as x } from "./common-AHfHwMkE.js";
function h(u, f) {
  for (var m = 0; m < f.length; m++) {
    const a = f[m];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in u)) {
          const p = Object.getOwnPropertyDescriptor(a, l);
          p && Object.defineProperty(u, l, p.get ? p : {
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
var i = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var y = {
  // Options
  items_per_page: "/ පිටුව",
  jump_to: "වෙත යන්න",
  jump_to_confirm: "තහවුරු",
  page: "පිටුව",
  // Pagination
  prev_page: "කලින් පිටුව",
  next_page: "ඊළඟ පිටුව",
  prev_5: "කලින් පිටු 5",
  next_5: "ඊළඟ පිටු 5",
  prev_3: "කලින් පිටු 3",
  next_3: "ඊළඟ පිටු 3",
  page_size: "පිටුවේ ප්‍රමාණය"
};
n.default = y;
var c = {}, t = {}, d = {}, P = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var _ = P(g), j = x, L = (0, _.default)((0, _.default)({}, j.commonLocale), {}, {
  locale: "si_LK",
  today: "අද",
  now: "දැන්",
  backToToday: "අදට ආපසු",
  ok: "හරි",
  clear: "හිස් කරන්න",
  week: "සතිය",
  month: "මාසය",
  year: "අවුරුද්ද",
  timeSelect: "වේලාවක් තෝරන්න",
  dateSelect: "දිනයක් තෝරන්න",
  weekSelect: "සතියක් තෝරන්න",
  monthSelect: "මාසයක් තෝරන්න",
  yearSelect: "අවුරුද්දක් තෝරන්න",
  decadeSelect: "දශකයක් තෝරන්න",
  dateFormat: "YYYY/M/D",
  dateTimeFormat: "YYYY/M/D HH:mm:ss",
  monthBeforeYear: !1,
  previousMonth: "කලින් මාසය (පිටුව ඉහළට)",
  nextMonth: "ඊළඟ මාසය (පිටුව පහළට)",
  previousYear: "පසුගිය අවුරුද්ද (Control + වම)",
  nextYear: "ඊළඟ අවුරුද්ද (Control + දකුණ)",
  previousDecade: "පසුගිය දශකය",
  nextDecade: "ඊළඟ දශකය",
  previousCentury: "පසුගිය සියවස",
  nextCentury: "ඊළඟ සියවස"
});
d.default = L;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const T = {
  placeholder: "වේලාව තෝරන්න",
  rangePlaceholder: ["ආරම්භක වේලාව", "නිමවන වේලාව"]
};
r.default = T;
var $ = o.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var K = $(d), k = $(r);
const M = {
  lang: Object.assign({
    placeholder: "දිනය තෝරන්න",
    yearPlaceholder: "අවුරුද්ද තෝරන්න",
    quarterPlaceholder: "කාර්තුව තෝරන්න",
    monthPlaceholder: "මාසය තෝරන්න",
    weekPlaceholder: "සතිය තෝරන්න",
    rangePlaceholder: ["ආරම්භක දිනය", "නිමවන දිනය"],
    rangeYearPlaceholder: ["ආර්ම්භක අවුරුද්ද", "නිමවන අවුරුද්ද"],
    rangeQuarterPlaceholder: ["ආරම්භක කාර්තුව", "නිමවන කාර්තුව"],
    rangeMonthPlaceholder: ["ආරම්භක මාසය", "නිමවන මාසය"],
    rangeWeekPlaceholder: ["ආරම්භක සතිය", "නිමවන සතිය"]
  }, K.default),
  timePickerLocale: Object.assign({}, k.default)
};
t.default = M;
var O = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var D = O(t);
c.default = D.default;
var s = o.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var S = s(n), Y = s(c), C = s(t), w = s(r);
const e = "${label} වලංගු ${type} ක් නොවේ", A = {
  locale: "si",
  Pagination: S.default,
  DatePicker: C.default,
  TimePicker: w.default,
  Calendar: Y.default,
  global: {
    placeholder: "කරුණාකර තෝරන්න"
  },
  Table: {
    filterTitle: "පෙරහන්",
    filterConfirm: "හරි",
    filterReset: "යළි සකසන්න",
    filterEmptyText: "පෙරහන් නැත",
    filterCheckAll: "සියළු අථක තෝරන්න",
    filterSearchPlaceholder: "පෙරහන් තුළ සොයන්න",
    emptyText: "දත්ත නැත",
    selectAll: "වත්මන් පිටුව තෝරන්න",
    selectInvert: "වත්මන් පිටුව යටියනය",
    selectNone: "සියළු දත්ත ඉවතලන්න",
    selectionAll: "සියළු දත්ත තෝරන්න",
    sortTitle: "පෙළගැසීම",
    expand: "පේළිය දිගහරින්න",
    collapse: "පේළිය හකුළන්න",
    triggerDesc: "අවරෝහණව පෙළගැසීමට ඔබන්න",
    triggerAsc: "ආරෝහණව පෙළගැසීමට ඔබන්න",
    cancelSort: "පෙළගැසීම අවලංගු කිරීමට ඔබන්න"
  },
  Modal: {
    okText: "හරි",
    cancelText: "අවලංගු කරන්න",
    justOkText: "හරි"
  },
  Popconfirm: {
    okText: "හරි",
    cancelText: "අවලංගු කරන්න"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "මෙතැන සොයන්න",
    itemUnit: "අථකය",
    itemsUnit: "අථක",
    remove: "ඉවත් කරන්න",
    selectCurrent: "වත්මන් පිටුව තෝරන්න",
    removeCurrent: "වත්මන් පිටුව ඉවත් කරන්න",
    selectAll: "සියළු දත්ත තෝරන්න",
    removeAll: "සියළු දත්ත ඉවතලන්න",
    selectInvert: "වත්මන් පිටුව යටියනය"
  },
  Upload: {
    uploading: "උඩුගත වෙමින්...",
    removeFile: "ගොනුව ඉවතලන්න",
    uploadError: "උඩුගත වීමේ දෝෂයකි",
    previewFile: "ගොනුවේ පෙරදසුන",
    downloadFile: "ගොනුව බාගන්න"
  },
  Empty: {
    description: "දත්ත නැත"
  },
  Icon: {
    icon: "නිරූපකය"
  },
  Text: {
    edit: "සංස්කරණය",
    copy: "පිටපත්",
    copied: "පිටපත් විය",
    expand: "විහිදුවන්න"
  },
  Form: {
    optional: "(විකල්පයකි)",
    defaultValidateMessages: {
      default: "${label} සඳහා ක්‍ෂේත්‍රය වලංගුකරණයේ දෝෂයකි",
      required: "${label} ඇතුල් කරන්න",
      enum: "[${enum}] වලින් එකක් ${label} විය යුතුය",
      whitespace: "${label} හිස් අකුරක් නොවිය යුතුය",
      date: {
        format: "${label} දිනයේ ආකෘතිය වැරදිය",
        parse: "${label} දිනයකට පරිවර්තනය කළ නොහැකිය",
        invalid: "${label} වලංගු නොවන දිනයකි"
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
        len: "${label} අකුරු ${len}ක් විය යුතුය",
        min: "${label} අවමය අකුරු ${min}ක් විය යුතුය",
        max: "${label} අකුරු ${max}ක් දක්වා විය යුතුය",
        range: "${label} අකුරු ${min}-${max}ක් අතර විය යුතුය"
      },
      number: {
        len: "${label} නිසැකව ${len} සමාන විය යුතුය",
        min: "${label} අවමය ${min} විය යුතුය",
        max: "${label} උපරිමය ${max} විය යුතුය",
        range: "${label} නිසැකව ${min}-${max} අතර විය යුතුය"
      },
      array: {
        len: "${len} ${label} විය යුතුය",
        min: "අවම වශයෙන් ${min} ${label}",
        max: "උපරිම වශයෙන් ${max} ${label}",
        range: "${label} ගණන ${min}-${max} අතර විය යුතුය"
      },
      pattern: {
        mismatch: "${pattern} රටාවට ${label} නොගැළපේ"
      }
    }
  },
  Image: {
    preview: "පෙරදසුන"
  }
};
i.default = A;
var v = i;
const q = /* @__PURE__ */ b(v), I = /* @__PURE__ */ h({
  __proto__: null,
  default: q
}, [v]);
export {
  I as s
};
