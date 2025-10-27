import { c as b } from "./Index-nJA-Ual0.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as g, c as x } from "./common-AHfHwMkE.js";
function y(u, f) {
  for (var p = 0; p < f.length; p++) {
    const l = f[p];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const a in l)
        if (a !== "default" && !(a in u)) {
          const s = Object.getOwnPropertyDescriptor(l, a);
          s && Object.defineProperty(u, a, s.get ? s : {
            enumerable: !0,
            get: () => l[a]
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
var P = {
  // Options
  items_per_page: "/ പേജ്",
  jump_to: "അടുത്തത്",
  jump_to_confirm: "ഉറപ്പാക്കുക",
  page: "",
  // Pagination
  prev_page: "മുൻപുള്ള പേജ്",
  next_page: "അടുത്ത പേജ്",
  prev_5: "മുൻപുള്ള 5 പേജുകൾ",
  next_5: "അടുത്ത 5 പേജുകൾ",
  prev_3: "മുൻപുള്ള 3 പേജുകൾ",
  next_3: "അടുത്ത 3 പേജുകൾ",
  page_size: "Page Size"
};
i.default = P;
var c = {}, t = {}, d = {}, h = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var _ = h(g), I = x, j = (0, _.default)((0, _.default)({}, I.commonLocale), {}, {
  locale: "ml_IN",
  today: "ഇന്ന്",
  now: "ഇപ്പോൾ",
  backToToday: "ഇന്നത്തെ ദിവസത്തിലേക്ക് തിരിച്ചു പോകുക",
  ok: "ശരിയാണ്",
  clear: "നീക്കം ചെയ്യുക",
  week: "ആഴ്ച",
  month: "മാസം",
  year: "വർഷം",
  timeSelect: "സമയം തിരഞ്ഞെടുക്കുക",
  dateSelect: "ദിവസം തിരഞ്ഞെടുക്കുക",
  weekSelect: "വാരം തിരഞ്ഞെടുക്കുക",
  monthSelect: "മാസം തിരഞ്ഞെടുക്കുക",
  yearSelect: "വർഷം തിരഞ്ഞെടുക്കുക",
  decadeSelect: "ദശാബ്ദം തിരഞ്ഞെടുക്കുക",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "കഴിഞ്ഞ മാസം (PageUp)",
  nextMonth: "അടുത്ത മാസം (PageDown)",
  previousYear: "കഴിഞ്ഞ വർഷം (Control + left)",
  nextYear: "അടുത്ത വർഷം (Control + right)",
  previousDecade: "കഴിഞ്ഞ ദശാബ്ദം",
  nextDecade: "അടുത്ത ദശാബ്ദം",
  previousCentury: "കഴിഞ്ഞ നൂറ്റാണ്ട്",
  nextCentury: "അടുത്ത നൂറ്റാണ്ട്"
});
d.default = j;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const N = {
  placeholder: "സമയം തിരഞ്ഞെടുക്കുക",
  rangePlaceholder: ["ആരംഭ സമയം", "അവസാന സമയം"]
};
r.default = N;
var $ = o.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var T = $(d), D = $(r);
const M = {
  lang: Object.assign({
    placeholder: "തിയതി തിരഞ്ഞെടുക്കുക",
    yearPlaceholder: "വർഷം തിരഞ്ഞെടുക്കുക",
    quarterPlaceholder: "ത്രൈമാസം തിരഞ്ഞെടുക്കുക",
    monthPlaceholder: "മാസം തിരഞ്ഞെടുക്കുക",
    weekPlaceholder: "വാരം തിരഞ്ഞെടുക്കുക",
    rangePlaceholder: ["ആരംഭ ദിനം", "അവസാന ദിനം"],
    rangeYearPlaceholder: ["ആരംഭ വർഷം", "അവസാന വർഷം"],
    rangeMonthPlaceholder: ["ആരംഭ മാസം", "അവസാന മാസം"],
    rangeWeekPlaceholder: ["ആരംഭ വാരം", "അവസാന വാരം"]
  }, T.default),
  timePickerLocale: Object.assign({}, D.default)
};
t.default = M;
var O = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var k = O(t);
c.default = k.default;
var m = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var S = m(i), Y = m(c), w = m(t), C = m(r);
const e = "${label} അസാധുവായ ${type} ആണ്", q = {
  locale: "ml",
  Pagination: S.default,
  DatePicker: w.default,
  TimePicker: C.default,
  Calendar: Y.default,
  global: {
    placeholder: "ദയവായി തിരഞ്ഞെടുക്കുക"
  },
  Table: {
    filterTitle: "ഫിൽറ്റർ",
    filterConfirm: "ശരിയാണ്",
    filterReset: "പുനഃക്രമീകരിക്കുക",
    filterEmptyText: "ഫിൽറ്ററുകളൊന്നുമില്ല",
    emptyText: "ഡാറ്റയൊന്നുമില്ല",
    selectAll: "നിലവിലെ പേജ് തിരഞ്ഞെടുക്കുക",
    selectInvert: "നിലവിലെ പേജിൽ ഇല്ലാത്തത് തിരഞ്ഞെടുക്കുക",
    selectNone: "എല്ലാ ഡാറ്റയും നീക്കം ചെയ്യുക",
    selectionAll: "എല്ലാ ഡാറ്റയും തിരഞ്ഞെടുക്കുക",
    sortTitle: "ക്രമമാക്കുക",
    expand: "വരി വികസിപ്പിക്കുക",
    collapse: "വരി ചുരുക്കുക",
    triggerDesc: "അവരോഹണ ക്രമത്തിനായി ക്ലിക്ക് ചെയ്യുക",
    triggerAsc: "ആരോഹണ ക്രമത്തിനായി ക്ലിക്ക് ചെയ്യുക",
    cancelSort: "ക്രമീകരണം ഒഴിവാക്കുന്നതിനായി ക്ലിക്ക് ചെയ്യുക"
  },
  Modal: {
    okText: "ശരിയാണ്",
    cancelText: "റദ്ദാക്കുക",
    justOkText: "ശരിയാണ്"
  },
  Popconfirm: {
    okText: "ശരിയാണ്",
    cancelText: "റദ്ദാക്കുക"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "ഇവിടെ തിരയുക",
    itemUnit: "ഇനം",
    itemsUnit: "ഇനങ്ങൾ",
    remove: "നീക്കം ചെയ്യുക",
    selectCurrent: "നിലവിലെ പേജ് തിരഞ്ഞെടുക്കുക",
    removeCurrent: "നിലവിലെ പേജ് നീക്കം ചെയ്യുക",
    selectAll: "എല്ലാ ഡാറ്റയും തിരഞ്ഞെടുക്കുക",
    removeAll: "എല്ലാ ഡാറ്റയും നീക്കം ചെയ്യുക",
    selectInvert: "നിലവിലെ പേജിൽ ഇല്ലാത്തത് തിരഞ്ഞെടുക്കുക"
  },
  Upload: {
    uploading: "അപ്‌ലോഡ് ചെയ്തു കൊണ്ടിരിക്കുന്നു...",
    removeFile: "ഫയൽ നീക്കം ചെയ്യുക",
    uploadError: "അപ്‌ലോഡിൽ പിശക് സംഭവിച്ചിരിക്കുന്നു",
    previewFile: "ഫയൽ പ്രിവ്യൂ ചെയ്യുക",
    downloadFile: "ഫയൽ ഡൗൺലോഡ് ചെയ്യുക"
  },
  Empty: {
    description: "ഡാറ്റയൊന്നുമില്ല"
  },
  Icon: {
    icon: "ഐക്കൺ"
  },
  Text: {
    edit: "തിരുത്തുക",
    copy: "കോപ്പി ചെയ്യുക",
    copied: "കോപ്പി ചെയ്തു",
    expand: "വികസിപ്പിക്കുക"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "${label} ഫീൽഡിൽ വാലിഡേഷൻ പിശകുണ്ട്",
      required: "ദയവായി ${label} രേഖപ്പെടുത്തുക",
      enum: "${label} നിർബന്ധമായും [${enum}]-ൽ നിന്നുള്ളതായിരിക്കണം",
      whitespace: "${label} ശൂന്യമായി വെക്കാനാകില്ല",
      date: {
        format: "${label} തീയതി രൂപരേഖ അസാധുവാണ്",
        parse: "${label} ഒരു തീയതിയാക്കി മാറ്റാൻ സാധിക്കില്ല",
        invalid: "${label} ഒരു അസാധുവായ തീയതി ആണ്"
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
        len: "${label} നിർബന്ധമായും ${len} അക്ഷരങ്ങൾ ഉണ്ടായിരിക്കണം",
        min: "${label} നിർബന്ധമായും ${min} അക്ഷരങ്ങൾ എങ്കിലും ഉണ്ടായിരിക്കണം",
        max: "${label} നിർബന്ധമായും ${max} അക്ഷരങ്ങളിൽ കൂടാൻ പാടില്ല",
        range: "${label} നിർബന്ധമായും ${min}-നും ${max}-നും ഇടയിൽ അക്ഷരങ്ങൾ ഉള്ളതായിരിക്കണം"
      },
      number: {
        len: "${label} നിർബന്ധമായും ${len}-നു തുല്യമായിരിക്കണം",
        min: "${label} നിർബന്ധമായും ${min}-ൽ കുറയാൻ പാടില്ല",
        max: "${label} നിർബന്ധമായും ${max}-ൽ കൂടാൻ പാടില്ല",
        range: "${label} നിർബന്ധമായും ${min}-നും ${max}-നും ഇടയിൽ ആയിരിക്കണം"
      },
      array: {
        len: "നിർബന്ധമായും ${len} ${label} ഉണ്ടായിരിക്കണം",
        min: "കുറഞ്ഞപക്ഷം ${min} ${label} എങ്കിലും ഉണ്ടായിരിക്കണം",
        max: "അങ്ങേയറ്റം ${max} ${label} ആയിരിക്കണം",
        range: "${label}-ന്റെ എണ്ണം നിർബന്ധമായും ${min}-നും ${max}-നും ഇടയിൽ ആയിരിക്കണം"
      },
      pattern: {
        mismatch: "${label} ${pattern} മാതൃകയുമായി യോജിക്കുന്നില്ല"
      }
    }
  },
  Image: {
    preview: "പ്രിവ്യൂ"
  }
};
n.default = q;
var v = n;
const A = /* @__PURE__ */ b(v), U = /* @__PURE__ */ y({
  __proto__: null,
  default: A
}, [v]);
export {
  U as m
};
