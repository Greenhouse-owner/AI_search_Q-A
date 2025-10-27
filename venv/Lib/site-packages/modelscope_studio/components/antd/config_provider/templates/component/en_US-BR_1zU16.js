import { i as r } from "./interopRequireDefault-BJV_i6Nz.js";
import { o as c, c as u } from "./common-AHfHwMkE.js";
var o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var i = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
o.default = i;
var l = {}, e = {}, a = {}, s = r.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var d = s(c), _ = u, v = (0, d.default)((0, d.default)({}, _.commonLocale), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
a.default = v;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const m = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
t.default = m;
var n = r.default;
Object.defineProperty(e, "__esModule", {
  value: !0
});
e.default = void 0;
var p = n(a), f = n(t);
const h = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, p.default),
  timePickerLocale: Object.assign({}, f.default)
};
e.default = h;
var P = r.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var S = P(e);
l.default = S.default;
export {
  l as a,
  e as b,
  t as c,
  o as e
};
