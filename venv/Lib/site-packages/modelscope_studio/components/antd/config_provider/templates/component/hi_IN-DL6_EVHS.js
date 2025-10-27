import { c as b } from "./Index-nJA-Ual0.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as h, c as g } from "./common-AHfHwMkE.js";
function x(m, f) {
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
var i = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var y = {
  // Options
  items_per_page: "/ पृष्ठ",
  jump_to: "इस पर चलें",
  jump_to_confirm: "पुष्टि करें",
  page: "",
  // Pagination
  prev_page: "पिछला पृष्ठ",
  next_page: "अगला पृष्ठ",
  prev_5: "पिछले 5 पृष्ठ",
  next_5: "अगले 5 पृष्ठ",
  prev_3: "पिछले 3 पृष्ठ",
  next_3: "अगले 3 पेज",
  page_size: "Page Size"
};
n.default = y;
var c = {}, t = {}, d = {}, P = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var _ = P(h), I = g, j = (0, _.default)((0, _.default)({}, I.commonLocale), {}, {
  locale: "hi_IN",
  today: "आज",
  now: "अभी",
  backToToday: "आज तक",
  ok: "ठीक",
  clear: "स्पष्ट",
  week: "सप्ताह",
  month: "महीना",
  year: "साल",
  timeSelect: "समय का चयन करें",
  dateSelect: "तारीख़ चुनें",
  weekSelect: "एक सप्ताह चुनें",
  monthSelect: "एक महीना चुनें",
  yearSelect: "एक वर्ष चुनें",
  decadeSelect: "एक दशक चुनें",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "पिछला महीना (पेजअप)",
  nextMonth: "अगले महीने (पेजडाउन)",
  previousYear: "पिछले साल (Ctrl + बाएं)",
  nextYear: "अगले साल (Ctrl + दाहिना)",
  previousDecade: "पिछला दशक",
  nextDecade: "अगले दशक",
  previousCentury: "पीछ्ली शताब्दी",
  nextCentury: "अगली सदी"
});
d.default = j;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const N = {
  placeholder: "समय का चयन करें",
  rangePlaceholder: ["आरंभिक समय", "अंत समय"]
};
r.default = N;
var $ = o.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var T = $(d), M = $(r);
const O = {
  lang: Object.assign({
    placeholder: "तारीख़ चुनें",
    yearPlaceholder: "वर्ष चुनें",
    quarterPlaceholder: "तिमाही चुनें",
    monthPlaceholder: "महीना चुनिए",
    weekPlaceholder: "सप्ताह चुनें",
    rangePlaceholder: ["प्रारंभ तिथि", "समाप्ति तिथि"],
    rangeYearPlaceholder: ["आरंभिक वर्ष", "अंत वर्ष"],
    rangeMonthPlaceholder: ["आरंभिक महीना", "अंत महीना"],
    rangeWeekPlaceholder: ["आरंभिक सप्ताह", "अंत सप्ताह"]
  }, T.default),
  timePickerLocale: Object.assign({}, M.default)
};
t.default = O;
var k = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var D = k(t);
c.default = D.default;
var u = o.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var S = u(n), Y = u(c), w = u(t), C = u(r);
const e = "${label} मान्य ${type} नहीं है", q = {
  locale: "hi",
  Pagination: S.default,
  DatePicker: w.default,
  TimePicker: C.default,
  Calendar: Y.default,
  global: {
    placeholder: "कृपया चुनें"
  },
  Table: {
    filterTitle: "सूची बंद करें",
    filterConfirm: "अच्छी तरह से",
    filterReset: "रीसेट",
    filterEmptyText: "कोई फ़िल्टर नहीं",
    emptyText: "कोई जानकारी नहीं",
    selectAll: "वर्तमान पृष्ठ का चयन करें",
    selectInvert: "वर्तमान पृष्ठ घुमाएं",
    selectNone: "सभी डेटा साफ़ करें",
    selectionAll: "सभी डेटा का चयन करें",
    sortTitle: "द्वारा क्रमबद्ध करें",
    expand: "पंक्ति का विस्तार करें",
    collapse: "पंक्ति संक्षिप्त करें",
    triggerDesc: "अवरोही क्रमित करने के लिए क्लिक करें",
    triggerAsc: "आरोही क्रमित करने के लिए क्लिक करें",
    cancelSort: "छँटाई रद्द करने के लिए क्लिक करें"
  },
  Modal: {
    okText: "अच्छी तरह से",
    cancelText: "रद्द करना",
    justOkText: "अच्छी तरह से"
  },
  Popconfirm: {
    okText: "अच्छी तरह से",
    cancelText: "रद्द करना"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "यहां खोजें",
    itemUnit: "तत्त्व",
    itemsUnit: "विषय-वस्तु",
    remove: "हटाए",
    selectCurrent: "वर्तमान पृष्ठ का चयन करें",
    removeCurrent: "वर्तमान पृष्ठ हटाएं",
    selectAll: "सभी डेटा का चयन करें",
    removeAll: "सभी डेटा हटाएं",
    selectInvert: "वर्तमान पृष्ठ को उल्टा करें"
  },
  Upload: {
    uploading: "अपलोड हो रहा...",
    removeFile: "फ़ाइल निकालें",
    uploadError: "अपलोड में त्रुटि",
    previewFile: "फ़ाइल पूर्वावलोकन",
    downloadFile: "फ़ाइल डाउनलोड करें"
  },
  Empty: {
    description: "कोई आकड़ा उपलब्ध नहीं है"
  },
  Icon: {
    icon: "आइकन"
  },
  Text: {
    edit: "संपादित करें",
    copy: "प्रतिलिपि",
    copied: "कॉपी किया गया",
    expand: "विस्तार"
  },
  Form: {
    optional: "(ऐच्छिक)",
    defaultValidateMessages: {
      default: "${label} के लिए फील्ड सत्यापन त्रुटि",
      required: "कृपया ${label} दर्ज करें",
      enum: "${label} [${enum}] में से एक होना चाहिए",
      whitespace: "${label} एक खाली अक्षर नहीं हो सकता",
      date: {
        format: "${label} तिथि प्रारूप अमान्य है",
        parse: "${label} को तारीख में नहीं बदला जा सकता",
        invalid: "${label} एक अमान्य तिथि है"
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
        len: "${label} ${len} अक्षर का होना चाहिए",
        min: "${label} कम से कम ${min} वर्णों का होना चाहिए",
        max: "${label} अधिकतम ${max} वर्णों का होना चाहिए",
        range: "${label} ${min}-${max} वर्णों के बीच होना चाहिए"
      },
      number: {
        len: "${label} ${len} के बराबर होना चाहिए",
        min: "${label} कम से कम ${min} होना चाहिए",
        max: "${label} अधिकतम ${max} होना चाहिए",
        range: "${label} ${min}-${max} के बीच होना चाहिए"
      },
      array: {
        len: "${len} ${label} होना चाहिए",
        min: "कम से कम ${min} ${label}",
        max: "ज्यादा से ज्यादा ${max} ${label}",
        range: "${label} की राशि ${min}-${max} के बीच होनी चाहिए"
      },
      pattern: {
        mismatch: "${label} ${pattern} पैटर्न से मेल नहीं खाता"
      }
    }
  },
  Image: {
    preview: "पूर्वावलोकन"
  }
};
i.default = q;
var v = i;
const A = /* @__PURE__ */ b(v), z = /* @__PURE__ */ x({
  __proto__: null,
  default: A
}, [v]);
export {
  z as h
};
