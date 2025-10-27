import { a as b } from "./XProvider-CSZ95uJx.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as g, c as x } from "./common-AHfHwMkE.js";
function h(p, f) {
  for (var s = 0; s < f.length; s++) {
    const l = f[s];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const a in l)
        if (a !== "default" && !(a in p)) {
          const m = Object.getOwnPropertyDescriptor(l, a);
          m && Object.defineProperty(p, a, m.get ? m : {
            enumerable: !0,
            get: () => l[a]
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
  items_per_page: "/ σελίδα",
  jump_to: "Μετάβαση",
  jump_to_confirm: "επιβεβαιώνω",
  page: "",
  // Pagination
  prev_page: "Προηγούμενη Σελίδα",
  next_page: "Επόμενη Σελίδα",
  prev_5: "Προηγούμενες 5 Σελίδες",
  next_5: "Επόμενες 5 σελίδες",
  prev_3: "Προηγούμενες 3 Σελίδες",
  next_3: "Επόμενες 3 Σελίδες",
  page_size: "Μέγεθος σελίδας"
};
i.default = y;
var c = {}, t = {}, d = {}, P = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var _ = P(g), R = x, j = (0, _.default)((0, _.default)({}, R.commonLocale), {}, {
  locale: "el_GR",
  today: "Σήμερα",
  now: "Τώρα",
  backToToday: "Πίσω στη σημερινή μέρα",
  ok: "OK",
  clear: "Καθαρισμός",
  week: "Εβδομάδα",
  month: "Μήνας",
  year: "Έτος",
  timeSelect: "Επιλογή ώρας",
  dateSelect: "Επιλογή ημερομηνίας",
  monthSelect: "Επιλογή μήνα",
  yearSelect: "Επιλογή έτους",
  decadeSelect: "Επιλογή δεκαετίας",
  dateFormat: "D/M/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  previousMonth: "Προηγούμενος μήνας (PageUp)",
  nextMonth: "Επόμενος μήνας (PageDown)",
  previousYear: "Προηγούμενο έτος (Control + αριστερά)",
  nextYear: "Επόμενο έτος (Control + δεξιά)",
  previousDecade: "Προηγούμενη δεκαετία",
  nextDecade: "Επόμενη δεκαετία",
  previousCentury: "Προηγούμενος αιώνας",
  nextCentury: "Επόμενος αιώνας"
});
d.default = j;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const T = {
  placeholder: "Επιλέξτε ώρα"
};
r.default = T;
var $ = o.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var G = $(d), O = $(r);
const k = {
  lang: Object.assign({
    placeholder: "Επιλέξτε ημερομηνία",
    yearPlaceholder: "Επιλέξτε έτος",
    quarterPlaceholder: "Επιλέξτε τρίμηνο",
    monthPlaceholder: "Επιλέξτε μήνα",
    weekPlaceholder: "Επιλέξτε εβδομάδα",
    rangePlaceholder: ["Αρχική ημερομηνία", "Τελική ημερομηνία"],
    rangeYearPlaceholder: ["Αρχικό έτος", "Τελικό έτος"],
    rangeMonthPlaceholder: ["Αρχικός μήνας", "Τελικός μήνας"],
    rangeQuarterPlaceholder: ["Αρχικό τρίμηνο", "Τελικό τρίμηνο"],
    rangeWeekPlaceholder: ["Αρχική εβδομάδα", "Τελική εβδομάδα"]
  }, G.default),
  timePickerLocale: Object.assign({}, O.default)
};
t.default = k;
var C = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var D = C(t);
c.default = D.default;
var u = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var M = u(i), S = u(c), Y = u(t), w = u(r);
const e = "Το ${label} δεν είναι έγκυρο ${type}", A = {
  locale: "el",
  Pagination: M.default,
  DatePicker: Y.default,
  TimePicker: w.default,
  Calendar: S.default,
  global: {
    placeholder: "Παρακαλώ επιλέξτε"
  },
  Table: {
    filterTitle: "Μενού φίλτρων",
    filterConfirm: "ΟΚ",
    filterReset: "Επαναφορά",
    filterEmptyText: "Χωρίς φίλτρα",
    filterCheckAll: "Επιλογή όλων",
    filterSearchPlaceholder: "Αναζήτηση στα φίλτρα",
    emptyText: "Δεν υπάρχουν δεδομένα",
    selectAll: "Επιλογή τρέχουσας σελίδας",
    selectInvert: "Αντιστροφή τρέχουσας σελίδας",
    selectNone: "Εκκαθάριση όλων των δεδομένων",
    selectionAll: "Επιλογή όλων των δεδομένων",
    sortTitle: "Ταξινόμηση",
    expand: "Ανάπτυξη σειράς",
    collapse: "Σύμπτυξη σειράς",
    triggerDesc: "Κλικ για φθίνουσα ταξινόμηση",
    triggerAsc: "Κλικ για αύξουσα ταξινόμηση",
    cancelSort: "Κλικ για ακύρωση ταξινόμησης"
  },
  Modal: {
    okText: "ΟΚ",
    cancelText: "Άκυρο",
    justOkText: "Εντάξει"
  },
  Tour: {
    Next: "Επόμενο",
    Previous: "Προηγούμενο",
    Finish: "Τέλος"
  },
  Popconfirm: {
    okText: "ΟΚ",
    cancelText: "Άκυρο"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Αναζήτηση",
    itemUnit: "αντικείμενο",
    itemsUnit: "αντικείμενα",
    remove: "Αφαίρεση",
    selectCurrent: "Επιλογή τρέχουσας σελίδας",
    removeCurrent: "Αφαίρεση τρέχουσας σελίδας",
    selectAll: "Επιλογή όλων των δεδομένων",
    removeAll: "Αφαίρεση όλων των δεδομένων",
    selectInvert: "Αντιστροφή τρέχουσας σελίδας"
  },
  Upload: {
    uploading: "Μεταφόρτωση...",
    removeFile: "Αφαίρεση αρχείου",
    uploadError: "Σφάλμα μεταφόρτωσης",
    previewFile: "Προεπισκόπηση αρχείου",
    downloadFile: "Λήψη αρχείου"
  },
  Empty: {
    description: "Δεν υπάρχουν δεδομένα"
  },
  Icon: {
    icon: "εικονίδιο"
  },
  Text: {
    edit: "Επεξεργασία",
    copy: "Αντιγραφή",
    copied: "Αντιγράφηκε",
    expand: "Ανάπτυξη",
    collapse: "Σύμπτυξη"
  },
  Form: {
    optional: "(προαιρετικό)",
    defaultValidateMessages: {
      default: "Σφάλμα επικύρωσης πεδίου για ${label}",
      required: "Παρακαλώ εισάγετε ${label}",
      enum: "Το ${label} πρέπει να είναι ένα από [${enum}]",
      whitespace: "Το ${label} δεν μπορεί να είναι κενός χαρακτήρας",
      date: {
        format: "Η μορφή ημερομηνίας του ${label} είναι άκυρη",
        parse: "Το ${label} δεν μπορεί να μετατραπεί σε ημερομηνία",
        invalid: "Το ${label} είναι μια άκυρη ημερομηνία"
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
        len: "Το ${label} πρέπει να είναι ${len} χαρακτήρες",
        min: "Το ${label} πρέπει να είναι τουλάχιστον ${min} χαρακτήρες",
        max: "Το ${label} πρέπει να είναι το πολύ ${max} χαρακτήρες",
        range: "Το ${label} πρέπει να είναι μεταξύ ${min}-${max} χαρακτήρων"
      },
      number: {
        len: "Το ${label} πρέπει να είναι ίσο με ${len}",
        min: "Το ${label} πρέπει να είναι τουλάχιστον ${min}",
        max: "Το ${label} πρέπει να είναι το πολύ ${max}",
        range: "Το ${label} πρέπει να είναι μεταξύ ${min}-${max}"
      },
      array: {
        len: "Πρέπει να είναι ${len} ${label}",
        min: "Τουλάχιστον ${min} ${label}",
        max: "Το πολύ ${max} ${label}",
        range: "Το ποσό του ${label} πρέπει να είναι μεταξύ ${min}-${max}"
      },
      pattern: {
        mismatch: "Το ${label} δεν ταιριάζει με το μοτίβο ${pattern}"
      }
    }
  },
  Image: {
    preview: "Προεπισκόπηση"
  },
  QRCode: {
    expired: "Ο κωδικός QR έληξε",
    refresh: "Ανανέωση",
    scanned: "Σαρώθηκε"
  },
  ColorPicker: {
    presetEmpty: "Κενό",
    transparent: "Διαφανές",
    singleColor: "Μονόχρωμο",
    gradientColor: "Διαβάθμιση χρώματος"
  }
};
n.default = A;
var v = n;
const F = /* @__PURE__ */ b(v), U = /* @__PURE__ */ h({
  __proto__: null,
  default: F
}, [v]);
export {
  U as e
};
