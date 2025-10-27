import { a as _ } from "./XProvider-CSZ95uJx.js";
import { i as l } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as b, c as $ } from "./common-AHfHwMkE.js";
function T(u, m) {
  for (var p = 0; p < m.length; p++) {
    const t = m[p];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const n in t)
        if (n !== "default" && !(n in u)) {
          const d = Object.getOwnPropertyDescriptor(t, n);
          d && Object.defineProperty(u, n, d.get ? d : {
            enumerable: !0,
            get: () => t[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, {
    value: "Module"
  }));
}
var i = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var y = {
  // Options
  items_per_page: "/ trang",
  jump_to: "Đến",
  jump_to_confirm: "xác nhận",
  page: "Trang",
  // Pagination
  prev_page: "Trang Trước",
  next_page: "Trang Kế",
  prev_5: "Về 5 Trang Trước",
  next_5: "Đến 5 Trang Kế",
  prev_3: "Về 3 Trang Trước",
  next_3: "Đến 3 Trang Kế",
  page_size: "kích thước trang"
};
o.default = y;
var c = {}, a = {}, h = {}, k = l.default;
Object.defineProperty(h, "__esModule", {
  value: !0
});
h.default = void 0;
var s = k(b), x = $, N = (0, s.default)((0, s.default)({}, x.commonLocale), {}, {
  locale: "vi_VN",
  today: "Hôm nay",
  now: "Bây giờ",
  backToToday: "Trở về hôm nay",
  ok: "OK",
  clear: "Xóa",
  week: "Tuần",
  month: "Tháng",
  year: "Năm",
  timeSelect: "Chọn thời gian",
  dateSelect: "Chọn ngày",
  weekSelect: "Chọn tuần",
  monthSelect: "Chọn tháng",
  yearSelect: "Chọn năm",
  decadeSelect: "Chọn thập kỷ",
  dateFormat: "D/M/YYYY",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  previousMonth: "Tháng trước (PageUp)",
  nextMonth: "Tháng sau (PageDown)",
  previousYear: "Năm trước (Control + left)",
  nextYear: "Năm sau (Control + right)",
  previousDecade: "Thập kỷ trước",
  nextDecade: "Thập kỷ sau",
  previousCentury: "Thế kỷ trước",
  nextCentury: "Thế kỷ sau"
});
h.default = N;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const C = {
  placeholder: "Chọn thời gian",
  rangePlaceholder: ["Bắt đầu", "Kết thúc"]
};
r.default = C;
var v = l.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var P = v(h), V = v(r);
const M = {
  lang: Object.assign({
    placeholder: "Chọn thời điểm",
    yearPlaceholder: "Chọn năm",
    quarterPlaceholder: "Chọn quý",
    monthPlaceholder: "Chọn tháng",
    weekPlaceholder: "Chọn tuần",
    rangePlaceholder: ["Ngày bắt đầu", "Ngày kết thúc"],
    rangeYearPlaceholder: ["Năm bắt đầu", "Năm kết thúc"],
    rangeQuarterPlaceholder: ["Quý bắt đầu", "Quý kết thúc"],
    rangeMonthPlaceholder: ["Tháng bắt đầu", "Tháng kết thúc"],
    rangeWeekPlaceholder: ["Tuần bắt đầu", "Tuần kết thúc"]
  }, P.default),
  timePickerLocale: Object.assign({}, V.default)
};
a.default = M;
var j = l.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var O = j(a);
c.default = O.default;
var g = l.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var D = g(o), S = g(c), Y = g(a), w = g(r);
const e = "${label} không phải kiểu ${type} hợp lệ", q = {
  locale: "vi",
  Pagination: D.default,
  DatePicker: Y.default,
  TimePicker: w.default,
  Calendar: S.default,
  global: {
    placeholder: "Vui lòng chọn"
  },
  Table: {
    filterTitle: "Bộ lọc",
    filterConfirm: "Đồng ý",
    filterReset: "Bỏ lọc",
    filterEmptyText: "Không có bộ lọc",
    filterCheckAll: "Chọn tất cả",
    filterSearchPlaceholder: "Tìm kiếm bộ lọc",
    emptyText: "Trống",
    selectAll: "Chọn tất cả",
    selectInvert: "Chọn ngược lại",
    selectNone: "Bỏ chọn tất cả",
    selectionAll: "Chọn tất cả",
    sortTitle: "Sắp xếp",
    expand: "Mở rộng dòng",
    collapse: "Thu gọn dòng",
    triggerDesc: "Nhấp để sắp xếp giảm dần",
    triggerAsc: "Nhấp để sắp xếp tăng dần",
    cancelSort: "Nhấp để hủy sắp xếp"
  },
  Tour: {
    Next: "Tiếp",
    Previous: "Trước",
    Finish: "Hoàn thành"
  },
  Modal: {
    okText: "Đồng ý",
    cancelText: "Hủy",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "Đồng ý",
    cancelText: "Hủy"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Tìm ở đây",
    itemUnit: "mục",
    itemsUnit: "mục",
    remove: "Gỡ bỏ",
    selectCurrent: "Chọn trang hiện tại",
    removeCurrent: "Gỡ bỏ trang hiện tại",
    selectAll: "Chọn tất cả",
    removeAll: "Gỡ bỏ tất cả",
    selectInvert: "Đảo ngược trang hiện tại"
  },
  Upload: {
    uploading: "Đang tải lên...",
    removeFile: "Gỡ bỏ tập tin",
    uploadError: "Lỗi tải lên",
    previewFile: "Xem trước tập tin",
    downloadFile: "Tải tập tin"
  },
  Empty: {
    description: "Trống"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Chỉnh sửa",
    copy: "Sao chép",
    copied: "Đã sao chép",
    expand: "Mở rộng"
  },
  Form: {
    optional: "(Tùy chọn)",
    defaultValidateMessages: {
      default: "${label} không đáp ứng điều kiện quy định",
      required: "Hãy nhập thông tin cho trường ${label}",
      enum: "${label} phải có giá trị nằm trong tập [${enum}]",
      whitespace: "${label} không được chứa khoảng trắng",
      date: {
        format: "${label} sai định dạng ngày tháng",
        parse: "Không thể chuyển ${label} sang kiểu Ngày tháng",
        invalid: "${label} không phải giá trị Ngày tháng hợp lệ"
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
        len: "${label} phải dài đúng ${len} ký tự",
        min: "Độ dài tối thiểu trường ${label} là ${min} ký tự",
        max: "Độ dài tối đa trường ${label} là ${max} ký tự",
        range: "Độ dài trường ${label} phải từ ${min} đến ${max} ký tự"
      },
      number: {
        len: "${label} phải bằng ${len}",
        min: "${label} phải lớn hơn hoặc bằng ${min}",
        max: "${label} phải nhỏ hơn hoặc bằng ${max}",
        range: "${label} phải nằm trong khoảng ${min}-${max}"
      },
      array: {
        len: "Mảng ${label} phải có ${len} phần tử ",
        min: "Mảng ${label} phải chứa tối thiểu ${min} phần tử ",
        max: "Mảng ${label} phải chứa tối đa ${max} phần tử ",
        range: "Mảng ${label} phải chứa từ ${min}-${max} phần tử"
      },
      pattern: {
        mismatch: "${label} không thỏa mãn mẫu kiểm tra ${pattern}"
      }
    }
  },
  Image: {
    preview: "Xem trước"
  },
  QRCode: {
    expired: "Mã QR hết hạn",
    refresh: "Làm mới"
  }
};
i.default = q;
var f = i;
const A = /* @__PURE__ */ _(f), H = /* @__PURE__ */ T({
  __proto__: null,
  default: A
}, [f]);
export {
  H as v
};
