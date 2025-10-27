import { a as v } from "./XProvider-CSZ95uJx.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as _, c as $ } from "./common-AHfHwMkE.js";
function x(h, g) {
  for (var m = 0; m < g.length; m++) {
    const a = g[m];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in h)) {
          const u = Object.getOwnPropertyDescriptor(a, t);
          u && Object.defineProperty(h, t, u.get ? u : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(h, Symbol.toStringTag, {
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
  items_per_page: "/ leathanach",
  jump_to: "Téigh",
  jump_to_confirm: "dheimhnigh",
  page: "",
  // Pagination
  prev_page: "Leathanach Roimhe Seo",
  next_page: "An chéad leathanach eile",
  prev_5: "5 leathanach roimhe seo",
  next_5: "Ar Aghaidh 5 Leathanaigh",
  prev_3: "3 leathanach roimhe seo",
  next_3: "Ar Aghaidh 3 Leathanaigh",
  page_size: "Page Size"
};
i.default = P;
var c = {}, l = {}, d = {}, y = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var p = y(_), E = $, A = (0, p.default)((0, p.default)({}, E.commonLocale), {}, {
  locale: "ga_IE",
  today: "inniu",
  now: "anois",
  backToToday: "Ar ais inniu",
  ok: "ceart go leor",
  clear: "soiléir",
  week: "seachtain",
  month: "mhí",
  year: "bhliain",
  timeSelect: "roghnaigh am",
  dateSelect: "roghnaigh dáta",
  weekSelect: "Roghnaigh seachtain",
  monthSelect: "Roghnaigh mí",
  yearSelect: "Roghnaigh bliain",
  decadeSelect: "Roghnaigh deich mbliana",
  dateFormat: "D/M/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  previousMonth: "An mhí roimhe seo (PageUp)",
  nextMonth: "An mhí seo chugainn (PageDown)",
  previousYear: "Anuraidh (Control + left)",
  nextYear: "An bhliain seo chugainn (Control + right)",
  previousDecade: "Le deich mbliana anuas",
  nextDecade: "Deich mbliana amach romhainn",
  previousCentury: "An chéid seo caite",
  nextCentury: "An chéad aois eile"
});
d.default = A;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const D = {
  placeholder: "Roghnaigh am",
  rangePlaceholder: ["Am tosaigh", "Am deiridh"]
};
r.default = D;
var f = o.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var I = f(d), R = f(r);
const T = {
  lang: Object.assign({
    placeholder: "Roghnaigh dáta",
    yearPlaceholder: "Roghnaigh bliain",
    quarterPlaceholder: "Roghnaigh ráithe",
    monthPlaceholder: "Roghnaigh mí",
    weekPlaceholder: "Roghnaigh seachtain",
    rangePlaceholder: ["Dáta tosaigh", "Dáta deiridh"],
    rangeYearPlaceholder: ["Tús na bliana", "Deireadh na bliana"],
    rangeMonthPlaceholder: ["Tosaigh mhí", "Deireadh mhí"],
    rangeWeekPlaceholder: ["Tosaigh an tseachtain", "Deireadh na seachtaine"]
  }, I.default),
  timePickerLocale: Object.assign({}, R.default)
};
l.default = T;
var j = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var S = j(l);
c.default = S.default;
var s = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var O = s(i), k = s(c), C = s(l), w = s(r);
const e = "${label} is not a valid ${type}", M = {
  locale: "ga",
  Pagination: O.default,
  DatePicker: C.default,
  TimePicker: w.default,
  Calendar: k.default,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No Data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
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
n.default = M;
var b = n;
const Y = /* @__PURE__ */ v(b), U = /* @__PURE__ */ x({
  __proto__: null,
  default: Y
}, [b]);
export {
  U as g
};
