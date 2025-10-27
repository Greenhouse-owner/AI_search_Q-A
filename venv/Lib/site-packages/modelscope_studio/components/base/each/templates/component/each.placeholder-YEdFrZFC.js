import { s as c, j as l } from "./sveltify-RgD9W_DK.js";
const a = window.ms_globals.React.useRef, u = window.ms_globals.React.useEffect, f = window.ms_globals.internalContext.useContextPropsContext, x = c(({
  value: t,
  contextValue: e,
  onChange: o
}) => {
  const s = a(o);
  s.current = o;
  const {
    forceClone: n
  } = f();
  return u(() => {
    var r;
    (r = s.current) == null || r.call(s, {
      value: t,
      contextValue: e,
      forceClone: n
    });
  }, [t, e, n]), /* @__PURE__ */ l.jsx("span", {
    style: {
      display: "none"
    }
  });
}, {
  ignore: !0
});
export {
  x as EachPlaceholder,
  x as default
};
