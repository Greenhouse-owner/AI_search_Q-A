import { a as _ } from "./XProvider-CSZ95uJx.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as $, c as v } from "./common-AHfHwMkE.js";
function z(k, b) {
  for (var c = 0; c < b.length; c++) {
    const a = b[c];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in k)) {
          const s = Object.getOwnPropertyDescriptor(a, r);
          s && Object.defineProperty(k, r, s.get ? s : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(k, Symbol.toStringTag, {
    value: "Module"
  }));
}
var u = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var h = {
  // Options
  items_per_page: "/ orrialde",
  jump_to: "-ra joan",
  jump_to_confirm: "baieztatu",
  page: "Orrialde",
  // Pagination
  prev_page: "Aurreko orrialdea",
  next_page: "Hurrengo orrialdea",
  prev_5: "aurreko 5 orrialde",
  next_5: "hurrengo 5 orrialde",
  prev_3: "aurreko 3 orrialde",
  next_3: "hurrengo 3 orrialde",
  page_size: "orrien tamaina"
};
i.default = h;
var n = {}, t = {}, d = {}, x = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var p = x($), E = v, y = (0, p.default)((0, p.default)({}, E.commonLocale), {}, {
  locale: "eu_ES",
  today: "Gaur",
  now: "Orain",
  backToToday: "Gaur itzuli",
  ok: "OK",
  clear: "Garbitu",
  week: "Asteko",
  month: "Hilabete",
  year: "Urte",
  timeSelect: "Ordua aukeratu",
  dateSelect: "Eguna aukeratu",
  weekSelect: "Astea aukeratu",
  monthSelect: "Hilabetea aukeratu",
  yearSelect: "Urtea aukeratu",
  decadeSelect: "Hamarkada aukeratu",
  dateFormat: "YYYY/M/D",
  dateTimeFormat: "YYYY/M/D HH:mm:ss",
  monthBeforeYear: !1,
  previousMonth: "Aurreko hilabetea (RePag)",
  nextMonth: "Urrengo hilabetea (AvPag)",
  previousYear: "Aurreko urtea (Control + ezkerra)",
  nextYear: "Urrento urtea (Control + eskuina)",
  previousDecade: "Aurreko hamarkada",
  nextDecade: "Urrengo hamarkada",
  previousCentury: "Aurreko mendea",
  nextCentury: "Urrengo mendea"
});
d.default = y;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const S = {
  placeholder: "Aukeratu ordua"
};
l.default = S;
var f = o.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var A = f(d), O = f(l);
const P = {
  lang: Object.assign({
    placeholder: "Hautatu data",
    rangePlaceholder: ["Hasierako data", "Amaiera data"]
  }, A.default),
  timePickerLocale: Object.assign({}, O.default)
};
t.default = P;
var j = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var T = j(t);
n.default = T.default;
var m = o.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var D = m(i), H = m(n), C = m(t), M = m(l);
const e = "${label} ez da ${type} balioduna", U = {
  locale: "eu",
  Pagination: D.default,
  DatePicker: C.default,
  TimePicker: M.default,
  Calendar: H.default,
  global: {
    placeholder: "Aukeratu"
  },
  Table: {
    filterTitle: "Iragazi menua",
    filterConfirm: "Onartu",
    filterReset: "Garbitu",
    filterEmptyText: "Iragazkirik gabe",
    filterCheckAll: "Hautatu dena",
    filterSearchPlaceholder: "Bilatu iragazkietan",
    emptyText: "Daturik gabe",
    selectAll: "Hautatu dena",
    selectInvert: "Alderantzikatu hautaketa",
    selectNone: "Hustu dena",
    selectionAll: "Hautatu datu guztiak",
    sortTitle: "Ordenatu",
    expand: "Zabaldu",
    collapse: "Itxi",
    triggerDesc: "Egin klik beheranzko ordenean ordenatzeko",
    triggerAsc: "Egin klik goranzko ordenean ordenatzeko",
    cancelSort: "Egin klik ordenamendua ezeztatzeko"
  },
  Tour: {
    Next: "Hurrengoa",
    Previous: "Aurrekoa",
    Finish: "Bukatu"
  },
  Modal: {
    okText: "Onartu",
    cancelText: "Utzi",
    justOkText: "Onartu"
  },
  Popconfirm: {
    okText: "Onartu",
    cancelText: "Utzi"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Bilatu hemen",
    itemUnit: "elementu",
    itemsUnit: "elementuak",
    remove: "Ezabatu",
    selectCurrent: "Hautatu uneko orria",
    removeCurrent: "Uneko orria ezabatu",
    selectAll: "Datu guztiak hautatu",
    removeAll: "Ezabatu datu guztiak",
    selectInvert: "Uneko orrialdea alderantzikatu"
  },
  Upload: {
    uploading: "Igotzen...",
    removeFile: "Fitxategia ezabatu",
    uploadError: "Errorea fitxategia igotzerakoan",
    previewFile: "Aurrebista",
    downloadFile: "Fitxategia deskargatu"
  },
  Empty: {
    description: "Ez dago daturik"
  },
  Icon: {
    icon: "ikono"
  },
  Text: {
    edit: "Editatu",
    copy: "Kopiatu",
    copied: "Kopiatuta",
    expand: "Zabaldu"
  },
  Form: {
    optional: "(aukerakoa)",
    defaultValidateMessages: {
      default: "${label} eremuaren balidazio errorea",
      required: "Mesedez, sartu ${label}",
      enum: "${label} [${enum}] -tako bat izan behar da",
      whitespace: "${label} ezin da izan karaktere zuri bat",
      date: {
        format: "${label} dataren formatua baliogabea da",
        parse: "${label} ezin da data batera doitu",
        invalid: "${label} data baliogabea da"
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
        len: "${label} eremuak ${len} karaktere izan dehar ditu",
        min: "${label} eremuak gutxienez ${min} karaktere izan behar ditu",
        max: "${label} eremuak gehienez ${max} karaktere izan behar ditu",
        range: "${label} eremuak ${min}-${max} karaktere artean izan behar ditu"
      },
      number: {
        len: "${label} eremuaren balioa ${len} izan behar da",
        min: "${label} eremuaren balio minimoa ${min} da",
        max: "${label} eremuaren balio maximoa ${max} da",
        range: "${label} eremuaren balioa ${min}-${max} artekoa izan behar da"
      },
      array: {
        len: "${len} ${label} izan behar dira",
        min: "Gutxienez ${min} ${label}",
        max: "Gehienez ${max} ${label}",
        range: "${label} kopuruak ${min}-${max} -ra bitartekoa izan behar du"
      },
      pattern: {
        mismatch: "${label} ez dator bat ${pattern} patroiarekin"
      }
    }
  },
  Image: {
    preview: "Aurrebista"
  },
  QRCode: {
    expired: "QR kodea kadukatuta",
    refresh: "Freskatu"
  },
  ColorPicker: {
    presetEmpty: "Hustu",
    transparent: "Gardena",
    singleColor: "Kolore bakarra",
    gradientColor: "Gradiente kolorea"
  }
};
u.default = U;
var g = u;
const F = /* @__PURE__ */ _(g), G = /* @__PURE__ */ z({
  __proto__: null,
  default: F
}, [g]);
export {
  G as e
};
