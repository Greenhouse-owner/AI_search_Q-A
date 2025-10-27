import { i as t } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as n, c as _ } from "./common-AHfHwMkE.js";
var o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var i = {
  // Options
  items_per_page: "條/頁",
  jump_to: "跳至",
  jump_to_confirm: "確定",
  page: "頁",
  // Pagination
  prev_page: "上一頁",
  next_page: "下一頁",
  prev_5: "向前 5 頁",
  next_5: "向後 5 頁",
  prev_3: "向前 3 頁",
  next_3: "向後 3 頁",
  page_size: "頁碼"
};
o.default = i;
var l = {}, e = {}, a = {}, p = t.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var d = p(n), f = _, v = (0, d.default)((0, d.default)({}, f.commonLocale), {}, {
  locale: "zh_TW",
  today: "今天",
  now: "此刻",
  backToToday: "返回今天",
  ok: "確定",
  timeSelect: "選擇時間",
  dateSelect: "選擇日期",
  weekSelect: "選擇周",
  clear: "清除",
  week: "週",
  month: "月",
  year: "年",
  previousMonth: "上個月 (翻頁上鍵)",
  nextMonth: "下個月 (翻頁下鍵)",
  monthSelect: "選擇月份",
  yearSelect: "選擇年份",
  decadeSelect: "選擇年代",
  yearFormat: "YYYY年",
  dateFormat: "YYYY年M月D日",
  dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
  previousYear: "上一年 (Control鍵加左方向鍵)",
  nextYear: "下一年 (Control鍵加右方向鍵)",
  previousDecade: "上一年代",
  nextDecade: "下一年代",
  previousCentury: "上一世紀",
  nextCentury: "下一世紀",
  cellDateFormat: "D",
  monthBeforeYear: !1
});
a.default = v;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const s = {
  placeholder: "請選擇時間"
};
r.default = s;
var u = t.default;
Object.defineProperty(e, "__esModule", {
  value: !0
});
e.default = void 0;
var h = u(a), m = u(r);
const c = {
  lang: Object.assign({
    placeholder: "請選擇日期",
    yearPlaceholder: "請選擇年份",
    quarterPlaceholder: "請選擇季度",
    monthPlaceholder: "請選擇月份",
    weekPlaceholder: "請選擇周",
    rangePlaceholder: ["開始日期", "結束日期"],
    rangeYearPlaceholder: ["開始年份", "結束年份"],
    rangeMonthPlaceholder: ["開始月份", "結束月份"],
    rangeQuarterPlaceholder: ["開始季度", "結束季度"],
    rangeWeekPlaceholder: ["開始周", "結束周"]
  }, h.default),
  timePickerLocale: Object.assign({}, m.default)
};
c.lang.ok = "確 定";
e.default = c;
var Y = t.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var P = Y(e);
l.default = P.default;
export {
  l as a,
  e as b,
  r as c,
  o as z
};
