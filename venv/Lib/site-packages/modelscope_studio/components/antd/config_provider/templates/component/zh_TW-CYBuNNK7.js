import { c as m } from "./Index-nJA-Ual0.js";
import { i as $ } from "./interopRequireDefault-BJV_i6Nz.js";
import { z as p, a as d, b as f, c as u } from "./zh_TW-sYkzU6nZ.js";
function b(o, s) {
  for (var i = 0; i < s.length; i++) {
    const l = s[i];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const t in l)
        if (t !== "default" && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(l, t);
          n && Object.defineProperty(o, t, n.get ? n : {
            enumerable: !0,
            get: () => l[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, {
    value: "Module"
  }));
}
var a = {}, r = $.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var T = r(p), h = r(d), x = r(f), g = r(u);
const e = "${label}不是一個有效的${type}", _ = {
  locale: "zh-tw",
  Pagination: T.default,
  DatePicker: x.default,
  TimePicker: g.default,
  Calendar: h.default,
  global: {
    placeholder: "請選擇"
  },
  Table: {
    filterTitle: "篩選器",
    filterConfirm: "確定",
    filterReset: "重置",
    filterEmptyText: "無篩選項",
    filterCheckAll: "全選",
    filterSearchPlaceholder: "在篩選項中搜尋",
    emptyText: "暫無數據",
    selectAll: "全部選取",
    selectInvert: "反向選取",
    selectNone: "清空所有",
    selectionAll: "全選所有",
    sortTitle: "排序",
    expand: "展開行",
    collapse: "關閉行",
    triggerDesc: "點擊降序",
    triggerAsc: "點擊升序",
    cancelSort: "取消排序"
  },
  Modal: {
    okText: "確定",
    cancelText: "取消",
    justOkText: "知道了"
  },
  Tour: {
    Next: "下一步",
    Previous: "上一步",
    Finish: "結束導覽"
  },
  Popconfirm: {
    okText: "確定",
    cancelText: "取消"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "搜尋資料",
    itemUnit: "項目",
    itemsUnit: "項目",
    remove: "删除",
    selectCurrent: "全選當頁",
    removeCurrent: "删除當頁",
    selectAll: "全選所有",
    removeAll: "删除全部",
    selectInvert: "反選當頁"
  },
  Upload: {
    uploading: "正在上傳...",
    removeFile: "刪除檔案",
    uploadError: "上傳失敗",
    previewFile: "檔案預覽",
    downloadFile: "下载文件"
  },
  Empty: {
    description: "無此資料"
  },
  Icon: {
    icon: "圖標"
  },
  Text: {
    edit: "編輯",
    copy: "複製",
    copied: "複製成功",
    expand: "展開"
  },
  Form: {
    optional: "（可選）",
    defaultValidateMessages: {
      default: "字段驗證錯誤${label}",
      required: "請輸入${label}",
      enum: "${label}必須是其中一個[${enum}]",
      whitespace: "${label}不能為空字符",
      date: {
        format: "${label}日期格式無效",
        parse: "${label}不能轉換為日期",
        invalid: "${label}是一個無效日期"
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
        len: "${label}須為${len}個字符",
        min: "${label}最少${min}個字符",
        max: "${label}最多${max}個字符",
        range: "${label}須在${min}-${max}字符之間"
      },
      number: {
        len: "${label}必須等於${len}",
        min: "${label}最小值為${min}",
        max: "${label}最大值為${max}",
        range: "${label}須在${min}-${max}之間"
      },
      array: {
        len: "須為${len}個${label}",
        min: "最少${min}個${label}",
        max: "最多${max}個${label}",
        range: "${label}數量須在${min}-${max}之間"
      },
      pattern: {
        mismatch: "${label}與模式不匹配${pattern}"
      }
    }
  },
  Image: {
    preview: "預覽"
  },
  QRCode: {
    expired: "二維碼過期",
    refresh: "點擊刷新",
    scanned: "已掃描"
  }
};
a.default = _;
var c = a;
const v = /* @__PURE__ */ m(c), P = /* @__PURE__ */ b({
  __proto__: null,
  default: v
}, [c]);
export {
  P as z
};
