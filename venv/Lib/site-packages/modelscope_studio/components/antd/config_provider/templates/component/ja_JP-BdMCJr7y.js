import { c as P } from "./Index-nJA-Ual0.js";
import { i as o } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as b, c as g } from "./common-AHfHwMkE.js";
function j(s, f) {
  for (var m = 0; m < f.length; m++) {
    const a = f[m];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in s)) {
          const p = Object.getOwnPropertyDescriptor(a, l);
          p && Object.defineProperty(s, l, p.get ? p : {
            enumerable: !0,
            get: () => a[l]
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
var h = {
  // Options
  items_per_page: "件 / ページ",
  jump_to: "移動",
  jump_to_confirm: "確認する",
  page: "ページ",
  // Pagination
  prev_page: "前のページ",
  next_page: "次のページ",
  prev_5: "前 5ページ",
  next_5: "次 5ページ",
  prev_3: "前 3ページ",
  next_3: "次 3ページ",
  page_size: "ページサイズ"
};
i.default = h;
var c = {}, t = {}, d = {}, x = o.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var _ = x(b), y = g, T = (0, _.default)((0, _.default)({}, y.commonLocale), {}, {
  locale: "ja_JP",
  today: "今日",
  now: "現在時刻",
  backToToday: "今日に戻る",
  ok: "確定",
  timeSelect: "時間を選択",
  dateSelect: "日時を選択",
  weekSelect: "週を選択",
  clear: "クリア",
  week: "週",
  month: "月",
  year: "年",
  previousMonth: "前月 (ページアップキー)",
  nextMonth: "翌月 (ページダウンキー)",
  monthSelect: "月を選択",
  yearSelect: "年を選択",
  decadeSelect: "年代を選択",
  yearFormat: "YYYY年",
  dateFormat: "YYYY年M月D日",
  dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
  previousYear: "前年 (Controlを押しながら左キー)",
  nextYear: "翌年 (Controlを押しながら右キー)",
  previousDecade: "前の年代",
  nextDecade: "次の年代",
  previousCentury: "前の世紀",
  nextCentury: "次の世紀",
  monthBeforeYear: !1
});
d.default = T;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const O = {
  placeholder: "時間を選択",
  rangePlaceholder: ["開始時間", "終了時間"]
};
r.default = O;
var $ = o.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var J = $(d), k = $(r);
const Y = {
  lang: Object.assign({
    placeholder: "日付を選択",
    yearPlaceholder: "年を選択",
    quarterPlaceholder: "四半期を選択",
    monthPlaceholder: "月を選択",
    weekPlaceholder: "週を選択",
    rangePlaceholder: ["開始日付", "終了日付"],
    rangeYearPlaceholder: ["開始年", "終了年"],
    rangeMonthPlaceholder: ["開始月", "終了月"],
    rangeQuarterPlaceholder: ["開始四半期", "終了四半期"],
    rangeWeekPlaceholder: ["開始週", "終了週"],
    shortWeekDays: ["日", "月", "火", "水", "木", "金", "土"],
    shortMonths: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  }, J.default),
  timePickerLocale: Object.assign({}, k.default)
};
t.default = Y;
var M = o.default;
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var C = M(t);
c.default = C.default;
var u = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var D = u(i), S = u(c), w = u(t), A = u(r);
const e = "${label}は有効な${type}ではありません", F = {
  locale: "ja",
  Pagination: D.default,
  DatePicker: w.default,
  TimePicker: A.default,
  Calendar: S.default,
  global: {
    placeholder: "選んでください"
  },
  Table: {
    filterTitle: "フィルター",
    filterConfirm: "OK",
    filterReset: "リセット",
    filterEmptyText: "フィルターなし",
    filterCheckAll: "すべてを選択",
    filterSearchPlaceholder: "フィルターで検索",
    emptyText: "データなし",
    selectAll: "ページ単位で選択",
    selectInvert: "ページ単位で反転",
    selectNone: "クリア",
    selectionAll: "すべてを選択",
    sortTitle: "ソート",
    expand: "展開する",
    collapse: "折り畳む",
    triggerDesc: "クリックで降順にソート",
    triggerAsc: "クリックで昇順にソート",
    cancelSort: "ソートをキャンセル"
  },
  Tour: {
    Next: "次",
    Previous: "前の",
    Finish: "仕上げる"
  },
  Modal: {
    okText: "OK",
    cancelText: "キャンセル",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "キャンセル"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "ここを検索",
    itemUnit: "アイテム",
    itemsUnit: "アイテム",
    remove: "削除",
    selectCurrent: "現在のページを選択",
    removeCurrent: "現在のページを削除",
    selectAll: "ページ単位で選択",
    deselectAll: "すべてのデータの選択を解除する",
    removeAll: "ページ単位で削除",
    selectInvert: "ページ単位で反転"
  },
  Upload: {
    uploading: "アップロード中...",
    removeFile: "ファイルを削除",
    uploadError: "アップロードエラー",
    previewFile: "ファイルをプレビュー",
    downloadFile: "ダウンロードファイル"
  },
  Empty: {
    description: "データがありません"
  },
  Icon: {
    icon: "アイコン"
  },
  Text: {
    edit: "編集",
    copy: "コピー",
    copied: "コピーされました",
    expand: "拡大する",
    collapse: "崩壊"
  },
  Form: {
    optional: "(オプション)",
    defaultValidateMessages: {
      default: "${label}のフィールド検証エラー",
      required: "${label}を入力してください",
      enum: "${label}は[${enum}]のいずれかである必要があります",
      whitespace: "${label}は空白文字にすることはできません",
      date: {
        format: "${label}の日付形式は不正です",
        parse: "${label}は日付に変換できません",
        invalid: "${label}は不正な日付です"
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
        len: "${label}は${len}文字である必要があります",
        min: "${label}は${min}文字以上である必要があります",
        max: "${label}は${max}文字以下である必要があります",
        range: "${label}は${min}-${max}文字の範囲である必要があります"
      },
      number: {
        len: "${label}は${len}と等しい必要があります",
        min: "${label}の最小値は${min}です",
        max: "${label}の最大値は${max}です",
        range: "${label}は${min}-${max}の範囲である必要があります"
      },
      array: {
        len: "${label}は${len}である必要があります",
        min: "${label}の最小は${min}です",
        max: "${label}の最大は${max}です",
        range: "${label}の合計は${min}-${max}の範囲である必要があります"
      },
      pattern: {
        mismatch: "${label}はパターン${pattern}と一致しません"
      }
    }
  },
  Image: {
    preview: "プレビュー"
  },
  QRCode: {
    expired: "QRコードの有効期限が切れました",
    refresh: "リフレッシュ",
    scanned: "スキャン済み"
  },
  ColorPicker: {
    presetEmpty: "空の",
    transparent: "透明",
    singleColor: "単色",
    gradientColor: "グラデーション"
  }
};
n.default = F;
var v = n;
const R = /* @__PURE__ */ P(v), K = /* @__PURE__ */ j({
  __proto__: null,
  default: R
}, [v]);
export {
  K as j
};
