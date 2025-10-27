import { a as _ } from "./XProvider-CSZ95uJx.js";
import { i } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as $, c as b } from "./common-AHfHwMkE.js";
function E(m, v) {
  for (var p = 0; p < v.length; p++) {
    const a = v[p];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in m)) {
          const c = Object.getOwnPropertyDescriptor(a, l);
          c && Object.defineProperty(m, l, c.get ? c : {
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
var o = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var h = {
  // Options
  items_per_page: "/ leheküljel",
  jump_to: "Hüppa",
  jump_to_confirm: "Kinnitage",
  page: "",
  // Pagination
  prev_page: "Eelmine leht",
  next_page: "Järgmine leht",
  prev_5: "Eelmised 5 lehekülge",
  next_5: "Järgmised 5 lehekülge",
  prev_3: "Eelmised 3 lehekülge",
  next_3: "Järgmised 3 lehekülge",
  page_size: "lehe suurus"
};
n.default = h;
var u = {}, t = {}, d = {}, x = i.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var f = x($), y = b, j = (0, f.default)((0, f.default)({}, y.commonLocale), {}, {
  locale: "et_EE",
  today: "Täna",
  now: "Praegu",
  backToToday: "Tagasi tänase juurde",
  ok: "OK",
  clear: "Tühista",
  week: "Nädal",
  month: "Kuu",
  year: "Aasta",
  timeSelect: "Vali aeg",
  dateSelect: "Vali kuupäev",
  monthSelect: "Vali kuu",
  yearSelect: "Vali aasta",
  decadeSelect: "Vali dekaad",
  dateFormat: "D.M.YYYY",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  previousMonth: "Eelmine kuu (PageUp)",
  nextMonth: "Järgmine kuu (PageDown)",
  previousYear: "Eelmine aasta (Control + left)",
  nextYear: "Järgmine aasta (Control + right)",
  previousDecade: "Eelmine dekaad",
  nextDecade: "Järgmine dekaad",
  previousCentury: "Eelmine sajand",
  nextCentury: "Järgmine sajand"
});
d.default = j;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const P = {
  placeholder: "Vali aeg"
};
r.default = P;
var k = i.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var T = k(d), O = k(r);
const M = {
  lang: Object.assign({
    placeholder: "Vali kuupäev",
    rangePlaceholder: ["Algus kuupäev", "Lõpu kuupäev"]
  }, T.default),
  timePickerLocale: Object.assign({}, O.default)
};
t.default = M;
var V = i.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var D = V(t);
u.default = D.default;
var s = i.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var A = s(n), K = s(u), S = s(t), C = s(r);
const e = "${label} ei ole kehtiv ${type}", F = {
  locale: "et",
  Pagination: A.default,
  DatePicker: S.default,
  TimePicker: C.default,
  Calendar: K.default,
  global: {
    placeholder: "Palun vali"
  },
  Table: {
    filterTitle: "Filtri menüü",
    filterConfirm: "OK",
    filterReset: "Nulli",
    filterEmptyText: "Filtreid pole",
    filterCheckAll: "Vali kõik",
    filterSearchPlaceholder: "Otsi filtritest",
    emptyText: "Andmed puuduvad",
    selectAll: "Vali kõik",
    selectInvert: "Inverteeri valik",
    selectNone: "Kustuta kõik andmed",
    selectionAll: "Vali kõik andmed",
    sortTitle: "Sorteeri",
    expand: "Laienda rida",
    collapse: "Ahenda rida",
    triggerDesc: "Klõpsa kahanevalt sortimiseks",
    triggerAsc: "Klõpsa kasvavalt sortimiseks",
    cancelSort: "Klõpsa sortimise tühistamiseks"
  },
  Modal: {
    okText: "OK",
    cancelText: "Tühista",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Tühista"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Otsi siit",
    itemUnit: "kogus",
    itemsUnit: "kogused",
    remove: "Eemalda",
    selectCurrent: "Vali praegune leht",
    removeCurrent: "Eemalda praegune leht",
    selectAll: "Vali kõik",
    removeAll: "Eemalda kõik andmed",
    selectInvert: "Inverteeri valik"
  },
  Upload: {
    uploading: "Üleslaadimine...",
    removeFile: "Eemalda fail",
    uploadError: "Üleslaadimise tõrge",
    previewFile: "Faili eelvaade",
    downloadFile: "Lae fail alla"
  },
  Empty: {
    description: "Andmed puuduvad"
  },
  Icon: {
    icon: "ikoon"
  },
  Text: {
    edit: "Muuda",
    copy: "Kopeeri",
    copied: "Kopeeritud",
    expand: "Laienda"
  },
  Form: {
    optional: "(valikuline)",
    defaultValidateMessages: {
      default: "${label} välja valideerimise viga",
      required: "Palun sisesta ${label}",
      enum: "${label} peab olema üks järgmistest: [${enum}]",
      whitespace: "${label} ei saa olla tühi märk",
      date: {
        format: "${label} kuupäevavorming on kehtetu",
        parse: "${label} ei saa kuupäevaks teisendada",
        invalid: "${label} on vale kuupäev"
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
        len: "${label} peab koosnema ${len} tähemärgist",
        min: "${label} peab olema vähemalt ${min} tähemärki",
        max: "${label} peab olema kuni ${max} tähemärki",
        range: "${label} peab olema vahemikus ${min}–${max} tähemärki"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} peab olema vähemalt ${min}",
        max: "${label} peab olema maksimaalne ${max}",
        range: "${label} peab olema vahemikus ${min}–${max}"
      },
      array: {
        len: "Peab olema ${len} ${label}",
        min: "Vähemalt ${min} ${label}",
        max: "Maksimaalselt ${max} ${label}",
        range: "${label} summa peab olema vahemikus ${min}–${max}"
      },
      pattern: {
        mismatch: "${label} ei vasta mustrile ${pattern}"
      }
    }
  },
  Image: {
    preview: "Eelvaade"
  }
};
o.default = F;
var g = o;
const Y = /* @__PURE__ */ _(g), I = /* @__PURE__ */ E({
  __proto__: null,
  default: Y
}, [g]);
export {
  I as e
};
