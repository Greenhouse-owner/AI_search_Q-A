import { c as h } from "./Index-nJA-Ual0.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as b, c as g } from "./common-AHfHwMkE.js";
function T(s, f) {
  for (var p = 0; p < f.length; p++) {
    const t = f[p];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const a in t)
        if (a !== "default" && !(a in s)) {
          const m = Object.getOwnPropertyDescriptor(t, a);
          m && Object.defineProperty(s, a, m.get ? m : {
            enumerable: !0,
            get: () => t[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, {
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
  items_per_page: "/ หน้า",
  jump_to: "ไปยัง",
  jump_to_confirm: "ยืนยัน",
  page: "หน้า",
  // Pagination
  prev_page: "หน้าก่อนหน้า",
  next_page: "หน้าถัดไป",
  prev_5: "ย้อนกลับ 5 หน้า",
  next_5: "ถัดไป 5 หน้า",
  prev_3: "ย้อนกลับ 3 หน้า",
  next_3: "ถัดไป 3 หน้า",
  page_size: "ขนาดหน้า"
};
i.default = x;
var c = {}, l = {}, d = {}, y = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var _ = y(b), P = g, j = (0, _.default)((0, _.default)({}, P.commonLocale), {}, {
  locale: "th_TH",
  today: "วันนี้",
  now: "ตอนนี้",
  backToToday: "กลับไปยังวันนี้",
  ok: "ตกลง",
  clear: "ลบล้าง",
  week: "สัปดาห์",
  month: "เดือน",
  year: "ปี",
  timeSelect: "เลือกเวลา",
  dateSelect: "เลือกวัน",
  monthSelect: "เลือกเดือน",
  yearSelect: "เลือกปี",
  decadeSelect: "เลือกทศวรรษ",
  dateFormat: "D/M/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  previousMonth: "เดือนก่อนหน้า (PageUp)",
  nextMonth: "เดือนถัดไป (PageDown)",
  previousYear: "ปีก่อนหน้า (Control + left)",
  nextYear: "ปีถัดไป (Control + right)",
  previousDecade: "ทศวรรษก่อนหน้า",
  nextDecade: "ทศวรรษถัดไป",
  previousCentury: "ศตวรรษก่อนหน้า",
  nextCentury: "ศตวรรษถัดไป"
});
d.default = j;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const H = {
  placeholder: "เลือกเวลา"
};
r.default = H;
var $ = o.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var k = $(d), C = $(r);
const D = {
  lang: Object.assign({
    placeholder: "เลือกวันที่",
    yearPlaceholder: "เลือกปี",
    quarterPlaceholder: "เลือกไตรมาส",
    monthPlaceholder: "เลือกเดือน",
    weekPlaceholder: "เลือกสัปดาห์",
    rangePlaceholder: ["วันเริ่มต้น", "วันสิ้นสุด"],
    rangeYearPlaceholder: ["ปีเริ่มต้น", "ปีสิ้นสุด"],
    rangeMonthPlaceholder: ["เดือนเริ่มต้น", "เดือนสิ้นสุด"],
    rangeWeekPlaceholder: ["สัปดาห์เริ่มต้น", "สัปดาห์สิ้นสุด"]
  }, k.default),
  timePickerLocale: Object.assign({}, C.default)
};
l.default = D;
var M = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var O = M(l);
c.default = O.default;
var u = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var S = u(i), Y = u(c), w = u(l), A = u(r);
const e = "${label} ไม่ใช่ ${type} ที่ถูกต้อง", F = {
  locale: "th",
  Pagination: S.default,
  DatePicker: w.default,
  TimePicker: A.default,
  Calendar: Y.default,
  global: {
    placeholder: "กรุณาเลือก"
  },
  Table: {
    filterTitle: "ตัวกรอง",
    filterConfirm: "ยืนยัน",
    filterReset: "รีเซ็ต",
    filterEmptyText: "ไม่มีตัวกรอง",
    filterCheckAll: "เลือกรายการทั้งหมด",
    filterSearchPlaceholder: "ค้นหาตัวกรอง",
    emptyText: "ไม่มีข้อมูล",
    selectAll: "เลือกทั้งหมดในหน้านี้",
    selectInvert: "กลับสถานะการเลือกในหน้านี้",
    selectNone: "ไม่เลือกข้อมูลทั้งหมด",
    selectionAll: "เลือกข้อมูลทั้งหมด",
    sortTitle: "เรียง",
    expand: "แสดงแถวข้อมูล",
    collapse: "ย่อแถวข้อมูล",
    triggerDesc: "คลิกเรียงจากมากไปน้อย",
    triggerAsc: "คลิกเรียงจากน้อยไปมาก",
    cancelSort: "คลิกเพื่อยกเลิกการเรียง"
  },
  Tour: {
    Next: "ถัดไป",
    Previous: "ย้อนกลับ",
    Finish: "เสร็จสิ้น"
  },
  Modal: {
    okText: "ตกลง",
    cancelText: "ยกเลิก",
    justOkText: "ตกลง"
  },
  Popconfirm: {
    okText: "ตกลง",
    cancelText: "ยกเลิก"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "ค้นหา",
    itemUnit: "ชิ้น",
    itemsUnit: "ชิ้น",
    remove: "นำออก",
    selectCurrent: "เลือกทั้งหมดในหน้านี้",
    removeCurrent: "นำออกทั้งหมดในหน้านี้",
    selectAll: "เลือกข้อมูลทั้งหมด",
    deselectAll: "ยกเลิกการเลือกทั้งหมด",
    removeAll: "นำข้อมูลออกทั้งหมด",
    selectInvert: "กลับสถานะการเลือกในหน้านี้"
  },
  Upload: {
    uploading: "กำลังอัปโหลด...",
    removeFile: "ลบไฟล์",
    uploadError: "เกิดข้อผิดพลาดในการอัปโหลด",
    previewFile: "ดูตัวอย่างไฟล์",
    downloadFile: "ดาวน์โหลดไฟล์"
  },
  Empty: {
    description: "ไม่มีข้อมูล"
  },
  Icon: {
    icon: "ไอคอน"
  },
  Text: {
    edit: "แก้ไข",
    copy: "คัดลอก",
    copied: "คัดลอกแล้ว",
    expand: "ขยาย",
    collapse: "ย่อ"
  },
  Form: {
    optional: "(ไม่จำเป็น)",
    defaultValidateMessages: {
      default: "ฟิลด์ ${label} ไม่ผ่านเงื่อนไขการตรวจสอบ",
      required: "กรุณากรอก ${label}",
      enum: "${label} ต้องเป็นค่าใดค่าหนึ่งใน [${enum}]",
      whitespace: "${label} ไม่สามารถเป็นช่องว่างได้",
      date: {
        format: "รูปแบบวันที่ ${label} ไม่ถูกต้อง",
        parse: "${label} ไม่สามารถแปลงเป็นวันที่ได้",
        invalid: "${label} เป็นวันที่ที่ไม่ถูกต้อง"
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
        len: "${label} ต้องมี ${len} ตัวอักษร",
        min: "${label} ต้องมีอย่างน้อย ${min} ตัวอักษร",
        max: "${label} มีได้สูงสุด ${max} ตัวอักษร",
        range: "${label} ต้องมี ${min}-${max} ตัวอักษร"
      },
      number: {
        len: "${label} ต้องมี ${len} ตัว",
        min: "ค่าต่ำสุด ${label} คือ ${min}",
        max: "ค่าสูงสุด ${label} คือ ${max}",
        range: "${label} ต้องมีค่า ${min}-${max}"
      },
      array: {
        len: "ต้องมี ${len} ${label}",
        min: "ต้องมีอย่างน้อย ${min} ${label}",
        max: "มีได้สูงสุด ${max} ${label}",
        range: "จำนวน ${label} ต้องอยู่ในช่วง ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} ไม่ตรงกับรูปแบบ ${pattern}"
      }
    }
  },
  Image: {
    preview: "ดูตัวอย่าง"
  },
  QRCode: {
    expired: "คิวอาร์โค้ดหมดอายุ",
    refresh: "รีเฟรช",
    scanned: "สแกนแล้ว"
  },
  ColorPicker: {
    presetEmpty: "ไม่มีข้อมูล",
    transparent: "โปร่งใส",
    singleColor: "สีเดียว",
    gradientColor: "สีไล่ระดับ"
  }
};
n.default = F;
var v = n;
const q = /* @__PURE__ */ h(v), U = /* @__PURE__ */ T({
  __proto__: null,
  default: q
}, [v]);
export {
  U as t
};
