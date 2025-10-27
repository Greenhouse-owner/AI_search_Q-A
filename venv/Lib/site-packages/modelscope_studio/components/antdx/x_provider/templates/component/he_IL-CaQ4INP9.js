import { a as b } from "./XProvider-CSZ95uJx.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as g, c as h } from "./common-AHfHwMkE.js";
function x(p, f) {
  for (var s = 0; s < f.length; s++) {
    const a = f[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in p)) {
          const m = Object.getOwnPropertyDescriptor(a, t);
          m && Object.defineProperty(p, t, m.get ? m : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(p, Symbol.toStringTag, {
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
  items_per_page: "/ עמוד",
  jump_to: "עבור אל",
  jump_to_confirm: "אישור",
  page: "",
  // Pagination
  prev_page: "העמוד הקודם",
  next_page: "העמוד הבא",
  prev_5: "5 עמודים קודמים",
  next_5: "5 עמודים הבאים",
  prev_3: "3 עמודים קודמים",
  next_3: "3 עמודים הבאים",
  page_size: "Page Size"
};
i.default = y;
var d = {}, l = {}, u = {}, P = o.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var _ = P(g), j = h, I = (0, _.default)((0, _.default)({}, j.commonLocale), {}, {
  locale: "he_IL",
  today: "היום",
  now: "עכשיו",
  backToToday: "חזור להיום",
  ok: "אישור",
  clear: "איפוס",
  week: "שבוע",
  month: "חודש",
  year: "שנה",
  timeSelect: "בחר שעה",
  dateSelect: "בחר תאריך",
  weekSelect: "בחר שבוע",
  monthSelect: "בחר חודש",
  yearSelect: "בחר שנה",
  decadeSelect: "בחר עשור",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "חודש קודם (PageUp)",
  nextMonth: "חודש הבא (PageDown)",
  previousYear: "שנה שעברה (Control + left)",
  nextYear: "שנה הבאה (Control + right)",
  previousDecade: "העשור הקודם",
  nextDecade: "העשור הבא",
  previousCentury: "המאה הקודמת",
  nextCentury: "המאה הבאה"
});
u.default = I;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const L = {
  placeholder: "בחר שעה"
};
r.default = L;
var $ = o.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var T = $(u), D = $(r);
const O = {
  lang: Object.assign({
    placeholder: "בחר תאריך",
    rangePlaceholder: ["תאריך התחלה", "תאריך סיום"]
  }, T.default),
  timePickerLocale: Object.assign({}, D.default)
};
l.default = O;
var M = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var S = M(l);
d.default = S.default;
var c = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var k = c(i), Y = c(d), w = c(l), F = c(r);
const e = "${label} הוא לא ${type} תקין", C = {
  locale: "he",
  Pagination: k.default,
  DatePicker: w.default,
  TimePicker: F.default,
  Calendar: Y.default,
  global: {
    placeholder: "אנא בחר"
  },
  Table: {
    filterTitle: "תפריט סינון",
    filterConfirm: "אישור",
    filterReset: "איפוס",
    selectAll: "בחר הכל",
    selectInvert: "הפוך בחירה",
    selectionAll: "בחר את כל הנתונים",
    sortTitle: "מיון",
    expand: "הרחב שורה",
    collapse: "צמצם שורה",
    triggerDesc: "לחץ למיון לפי סדר יורד",
    triggerAsc: "לחץ למיון לפי סדר עולה",
    cancelSort: "לחץ כדי לבטל את המיון"
  },
  Tour: {
    Next: "הבא",
    Previous: "הקודם",
    Finish: "סיום"
  },
  Modal: {
    okText: "אישור",
    cancelText: "ביטול",
    justOkText: "אישור"
  },
  Popconfirm: {
    okText: "אישור",
    cancelText: "ביטול"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "חפש כאן",
    itemUnit: "פריט",
    itemsUnit: "פריטים"
  },
  Upload: {
    uploading: "מעלה...",
    removeFile: "הסר קובץ",
    uploadError: "שגיאת העלאה",
    previewFile: "הצג קובץ",
    downloadFile: "הורד קובץ"
  },
  Empty: {
    description: "אין מידע"
  },
  Icon: {
    icon: "סמל"
  },
  Text: {
    edit: "ערוך",
    copy: "העתק",
    copied: "הועתק",
    expand: "הרחב"
  },
  Form: {
    defaultValidateMessages: {
      default: "ערך השדה שגוי ${label}",
      required: "בבקשה הזן ${label}",
      enum: "${label} חייב להיות אחד מערכים אלו [${enum}]",
      whitespace: "${label} לא יכול להיות ריק",
      date: {
        format: "${label} תאריך לא תקין",
        parse: "${label} לא ניתן להמיר לתאריך",
        invalid: "${label} הוא לא תאריך תקין"
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
        len: "${label} חייב להיות ${len} תווים",
        min: "${label} חייב להיות ${min} תווים",
        max: "${label} מקסימום ${max} תווים",
        range: "${label} חייב להיות בין ${min}-${max} תווים"
      },
      number: {
        len: "${label} חייב להיות שווה ל ${len}",
        min: "${label} ערך מינימלי הוא ${min}",
        max: "${label} ערך מקסימלי הוא ${max}",
        range: "${label} חייב להיות בין ${min}-${max}"
      },
      array: {
        len: "חייב להיות ${len} ${label}",
        min: "מינימום ${min} ${label}",
        max: "מקסימום ${max} ${label}",
        range: "הסכום של ${label} חייב להיות בין ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} לא תואם לתבנית ${pattern}"
      }
    }
  }
};
n.default = C;
var v = n;
const q = /* @__PURE__ */ b(v), U = /* @__PURE__ */ x({
  __proto__: null,
  default: q
}, [v]);
export {
  U as h
};
