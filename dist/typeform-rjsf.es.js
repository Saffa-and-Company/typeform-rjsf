import _a, { useState as pe, useEffect as Ct } from "react";
import Mo from "@rjsf/core";
import { motion as k, AnimatePresence as Fo } from "framer-motion";
import ba from "ajv";
var Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Q(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} }, cr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function Do() {
  if (Jn) return cr;
  Jn = 1;
  var e = _a, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, u, c) {
    var f, h = {}, p = null, v = null;
    c !== void 0 && (p = "" + c), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (v = u.ref);
    for (f in u) n.call(u, f) && !i.hasOwnProperty(f) && (h[f] = u[f]);
    if (o && o.defaultProps) for (f in u = o.defaultProps, u) h[f] === void 0 && (h[f] = u[f]);
    return { $$typeof: r, type: o, key: p, ref: v, props: h, _owner: a.current };
  }
  return cr.Fragment = t, cr.jsx = s, cr.jsxs = s, cr;
}
var fr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function Lo() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = _a, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), $ = Symbol.iterator, b = "@@iterator";
    function _(d) {
      if (d === null || typeof d != "object")
        return null;
      var w = $ && d[$] || d[b];
      return typeof w == "function" ? w : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(d) {
      {
        for (var w = arguments.length, O = new Array(w > 1 ? w - 1 : 0), j = 1; j < w; j++)
          O[j - 1] = arguments[j];
        P("error", d, O);
      }
    }
    function P(d, w, O) {
      {
        var j = g.ReactDebugCurrentFrame, U = j.getStackAddendum();
        U !== "" && (w += "%s", O = O.concat([U]));
        var H = O.map(function(F) {
          return String(F);
        });
        H.unshift("Warning: " + w), Function.prototype.apply.call(console[d], console, H);
      }
    }
    var N = !1, D = !1, ae = !1, ce = !1, L = !1, C;
    C = Symbol.for("react.module.reference");
    function S(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === i || L || d === a || d === c || d === f || ce || d === v || N || D || ae || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === h || d.$$typeof === s || d.$$typeof === o || d.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === C || d.getModuleId !== void 0));
    }
    function z(d, w, O) {
      var j = d.displayName;
      if (j)
        return j;
      var U = w.displayName || w.name || "";
      return U !== "" ? O + "(" + U + ")" : O;
    }
    function K(d) {
      return d.displayName || "Context";
    }
    function W(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case o:
            var w = d;
            return K(w) + ".Consumer";
          case s:
            var O = d;
            return K(O._context) + ".Provider";
          case u:
            return z(d, d.render, "ForwardRef");
          case h:
            var j = d.displayName || null;
            return j !== null ? j : W(d.type) || "Memo";
          case p: {
            var U = d, H = U._payload, F = U._init;
            try {
              return W(F(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, se = 0, Se, ze, Ie, Ne, Ke, je, Ae;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function l() {
      {
        if (se === 0) {
          Se = console.log, ze = console.info, Ie = console.warn, Ne = console.error, Ke = console.group, je = console.groupCollapsed, Ae = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: T,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        se++;
      }
    }
    function y() {
      {
        if (se--, se === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, d, {
              value: Se
            }),
            info: ee({}, d, {
              value: ze
            }),
            warn: ee({}, d, {
              value: Ie
            }),
            error: ee({}, d, {
              value: Ne
            }),
            group: ee({}, d, {
              value: Ke
            }),
            groupCollapsed: ee({}, d, {
              value: je
            }),
            groupEnd: ee({}, d, {
              value: Ae
            })
          });
        }
        se < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = g.ReactCurrentDispatcher, x;
    function R(d, w, O) {
      {
        if (x === void 0)
          try {
            throw Error();
          } catch (U) {
            var j = U.stack.trim().match(/\n( *(at )?)/);
            x = j && j[1] || "";
          }
        return `
` + x + d;
      }
    }
    var B = !1, Ce;
    {
      var yt = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new yt();
    }
    function Pr(d, w) {
      if (!d || B)
        return "";
      {
        var O = Ce.get(d);
        if (O !== void 0)
          return O;
      }
      var j;
      B = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = A.current, A.current = null, l();
      try {
        if (w) {
          var F = function() {
            throw Error();
          };
          if (Object.defineProperty(F.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(F, []);
            } catch (oe) {
              j = oe;
            }
            Reflect.construct(d, [], F);
          } else {
            try {
              F.call();
            } catch (oe) {
              j = oe;
            }
            d.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (oe) {
            j = oe;
          }
          d();
        }
      } catch (oe) {
        if (oe && j && typeof oe.stack == "string") {
          for (var M = oe.stack.split(`
`), ie = j.stack.split(`
`), re = M.length - 1, te = ie.length - 1; re >= 1 && te >= 0 && M[re] !== ie[te]; )
            te--;
          for (; re >= 1 && te >= 0; re--, te--)
            if (M[re] !== ie[te]) {
              if (re !== 1 || te !== 1)
                do
                  if (re--, te--, te < 0 || M[re] !== ie[te]) {
                    var fe = `
` + M[re].replace(" at new ", " at ");
                    return d.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", d.displayName)), typeof d == "function" && Ce.set(d, fe), fe;
                  }
                while (re >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        B = !1, A.current = H, y(), Error.prepareStackTrace = U;
      }
      var Ue = d ? d.displayName || d.name : "", xe = Ue ? R(Ue) : "";
      return typeof d == "function" && Ce.set(d, xe), xe;
    }
    function gt(d, w, O) {
      return Pr(d, !1);
    }
    function I(d) {
      var w = d.prototype;
      return !!(w && w.isReactComponent);
    }
    function Ee(d, w, O) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Pr(d, I(d));
      if (typeof d == "string")
        return R(d);
      switch (d) {
        case c:
          return R("Suspense");
        case f:
          return R("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case u:
            return gt(d.render);
          case h:
            return Ee(d.type, w, O);
          case p: {
            var j = d, U = j._payload, H = j._init;
            try {
              return Ee(H(U), w, O);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, or = {}, Ln = g.ReactDebugCurrentFrame;
    function Tr(d) {
      if (d) {
        var w = d._owner, O = Ee(d.type, d._source, w ? w.type : null);
        Ln.setExtraStackFrame(O);
      } else
        Ln.setExtraStackFrame(null);
    }
    function po(d, w, O, j, U) {
      {
        var H = Function.call.bind(ve);
        for (var F in d)
          if (H(d, F)) {
            var M = void 0;
            try {
              if (typeof d[F] != "function") {
                var ie = Error((j || "React class") + ": " + O + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              M = d[F](w, F, j, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              M = re;
            }
            M && !(M instanceof Error) && (Tr(U), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", O, F, typeof M), Tr(null)), M instanceof Error && !(M.message in or) && (or[M.message] = !0, Tr(U), m("Failed %s type: %s", O, M.message), Tr(null));
          }
      }
    }
    var ho = Array.isArray;
    function mt(d) {
      return ho(d);
    }
    function vo(d) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, O = w && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return O;
      }
    }
    function yo(d) {
      try {
        return zn(d), !1;
      } catch {
        return !0;
      }
    }
    function zn(d) {
      return "" + d;
    }
    function Kn(d) {
      if (yo(d))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vo(d)), zn(d);
    }
    var ur = g.ReactCurrentOwner, go = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Vn, Un, $t;
    $t = {};
    function mo(d) {
      if (ve.call(d, "ref")) {
        var w = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function $o(d) {
      if (ve.call(d, "key")) {
        var w = Object.getOwnPropertyDescriptor(d, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function _o(d, w) {
      if (typeof d.ref == "string" && ur.current && w && ur.current.stateNode !== w) {
        var O = W(ur.current.type);
        $t[O] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(ur.current.type), d.ref), $t[O] = !0);
      }
    }
    function bo(d, w) {
      {
        var O = function() {
          Vn || (Vn = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        O.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function wo(d, w) {
      {
        var O = function() {
          Un || (Un = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        O.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Ao = function(d, w, O, j, U, H, F) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: d,
        key: w,
        ref: O,
        props: F,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Co(d, w, O, j, U) {
      {
        var H, F = {}, M = null, ie = null;
        O !== void 0 && (Kn(O), M = "" + O), $o(w) && (Kn(w.key), M = "" + w.key), mo(w) && (ie = w.ref, _o(w, U));
        for (H in w)
          ve.call(w, H) && !go.hasOwnProperty(H) && (F[H] = w[H]);
        if (d && d.defaultProps) {
          var re = d.defaultProps;
          for (H in re)
            F[H] === void 0 && (F[H] = re[H]);
        }
        if (M || ie) {
          var te = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          M && bo(F, te), ie && wo(F, te);
        }
        return Ao(d, M, ie, U, j, ur.current, F);
      }
    }
    var _t = g.ReactCurrentOwner, Gn = g.ReactDebugCurrentFrame;
    function Ve(d) {
      if (d) {
        var w = d._owner, O = Ee(d.type, d._source, w ? w.type : null);
        Gn.setExtraStackFrame(O);
      } else
        Gn.setExtraStackFrame(null);
    }
    var bt;
    bt = !1;
    function wt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === r;
    }
    function qn() {
      {
        if (_t.current) {
          var d = W(_t.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Eo(d) {
      return "";
    }
    var kn = {};
    function Oo(d) {
      {
        var w = qn();
        if (!w) {
          var O = typeof d == "string" ? d : d.displayName || d.name;
          O && (w = `

Check the top-level render call using <` + O + ">.");
        }
        return w;
      }
    }
    function Wn(d, w) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var O = Oo(w);
        if (kn[O])
          return;
        kn[O] = !0;
        var j = "";
        d && d._owner && d._owner !== _t.current && (j = " It was passed a child from " + W(d._owner.type) + "."), Ve(d), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, j), Ve(null);
      }
    }
    function Hn(d, w) {
      {
        if (typeof d != "object")
          return;
        if (mt(d))
          for (var O = 0; O < d.length; O++) {
            var j = d[O];
            wt(j) && Wn(j, w);
          }
        else if (wt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var U = _(d);
          if (typeof U == "function" && U !== d.entries)
            for (var H = U.call(d), F; !(F = H.next()).done; )
              wt(F.value) && Wn(F.value, w);
        }
      }
    }
    function Po(d) {
      {
        var w = d.type;
        if (w == null || typeof w == "string")
          return;
        var O;
        if (typeof w == "function")
          O = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === h))
          O = w.propTypes;
        else
          return;
        if (O) {
          var j = W(w);
          po(O, d.props, "prop", j, d);
        } else if (w.PropTypes !== void 0 && !bt) {
          bt = !0;
          var U = W(w);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function To(d) {
      {
        for (var w = Object.keys(d.props), O = 0; O < w.length; O++) {
          var j = w[O];
          if (j !== "children" && j !== "key") {
            Ve(d), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Ve(null);
            break;
          }
        }
        d.ref !== null && (Ve(d), m("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    var Yn = {};
    function Bn(d, w, O, j, U, H) {
      {
        var F = S(d);
        if (!F) {
          var M = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Eo();
          ie ? M += ie : M += qn();
          var re;
          d === null ? re = "null" : mt(d) ? re = "array" : d !== void 0 && d.$$typeof === r ? (re = "<" + (W(d.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : re = typeof d, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, M);
        }
        var te = Co(d, w, O, U, H);
        if (te == null)
          return te;
        if (F) {
          var fe = w.children;
          if (fe !== void 0)
            if (j)
              if (mt(fe)) {
                for (var Ue = 0; Ue < fe.length; Ue++)
                  Hn(fe[Ue], d);
                Object.freeze && Object.freeze(fe);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Hn(fe, d);
        }
        if (ve.call(w, "key")) {
          var xe = W(d), oe = Object.keys(w).filter(function(Ro) {
            return Ro !== "key";
          }), At = oe.length > 0 ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Yn[xe + At]) {
            var xo = oe.length > 0 ? "{" + oe.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, At, xe, xo, xe), Yn[xe + At] = !0;
          }
        }
        return d === n ? To(te) : Po(te), te;
      }
    }
    function So(d, w, O) {
      return Bn(d, w, O, !0);
    }
    function Io(d, w, O) {
      return Bn(d, w, O, !1);
    }
    var No = Io, jo = So;
    fr.Fragment = n, fr.jsx = No, fr.jsxs = jo;
  }()), fr;
}
process.env.NODE_ENV === "production" ? Ft.exports = Do() : Ft.exports = Lo();
var E = Ft.exports;
const zo = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  placeholder: a,
  schema: i,
  uiSchema: s,
  formContext: o
}) => {
  var _, g;
  const [u, c] = pe(!1), f = (s == null ? void 0 : s["ui:title"]) || i.title, h = (s == null ? void 0 : s["ui:description"]) || i.description, p = (_ = o == null ? void 0 : o.errors) == null ? void 0 : _[e], v = (g = p == null ? void 0 : p.__errors) == null ? void 0 : g[0], $ = !!v, b = () => {
    c(!1);
  };
  return /* @__PURE__ */ E.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ E.jsxs(
      k.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${u ? "text-blue-600" : $ ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          f,
          " ",
          t && /* @__PURE__ */ E.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ E.jsxs(
      k.div,
      {
        className: "relative",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "text",
              id: e,
              value: r || "",
              placeholder: a || h,
              onChange: (m) => n(m.target.value),
              onFocus: () => c(!0),
              onBlur: b,
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${$ ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`
            }
          ),
          /* @__PURE__ */ E.jsx(
            k.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${$ ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: u || $ ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          )
        ]
      }
    ),
    $ && /* @__PURE__ */ E.jsx(
      k.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: v
      }
    )
  ] });
}, Ko = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  placeholder: a,
  schema: i,
  uiSchema: s,
  formContext: o
}) => {
  var b, _;
  const [u, c] = pe(!1), f = (s == null ? void 0 : s["ui:title"]) || i.title, h = (s == null ? void 0 : s["ui:description"]) || i.description, p = (b = o == null ? void 0 : o.errors) == null ? void 0 : b[e], v = (_ = p == null ? void 0 : p.__errors) == null ? void 0 : _[0], $ = !!v;
  return /* @__PURE__ */ E.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ E.jsxs(
      k.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${u ? "text-blue-600" : $ ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          f,
          " ",
          t && /* @__PURE__ */ E.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ E.jsxs(
      k.div,
      {
        className: "relative",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "number",
              id: e,
              value: r || "",
              placeholder: a || h,
              onChange: (g) => n(g.target.value),
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${$ ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`
            }
          ),
          /* @__PURE__ */ E.jsx(
            k.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${$ ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: u || $ ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          )
        ]
      }
    ),
    $ && /* @__PURE__ */ E.jsx(
      k.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: v
      }
    )
  ] });
}, Vo = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  placeholder: a,
  schema: i,
  uiSchema: s,
  formContext: o
}) => {
  var b, _;
  const [u, c] = pe(!1), f = (s == null ? void 0 : s["ui:title"]) || i.title, h = (s == null ? void 0 : s["ui:description"]) || i.description, p = (b = o == null ? void 0 : o.errors) == null ? void 0 : b[e], v = (_ = p == null ? void 0 : p.__errors) == null ? void 0 : _[0], $ = !!v;
  return /* @__PURE__ */ E.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ E.jsxs(
      k.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${u ? "text-blue-600" : $ ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          f,
          " ",
          t && /* @__PURE__ */ E.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ E.jsxs(
      k.div,
      {
        className: "relative",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "email",
              id: e,
              value: r || "",
              placeholder: a || h,
              onChange: (g) => n(g.target.value),
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${$ ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`
            }
          ),
          /* @__PURE__ */ E.jsx(
            k.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${$ ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: u || $ ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          )
        ]
      }
    ),
    $ && /* @__PURE__ */ E.jsx(
      k.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: v
      }
    )
  ] });
}, Uo = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  placeholder: a,
  schema: i,
  uiSchema: s,
  formContext: o
}) => {
  var _, g;
  const [u, c] = pe(!1), f = i.enum || [], h = (s == null ? void 0 : s["ui:title"]) || i.title, p = (s == null ? void 0 : s["ui:description"]) || i.description, v = (_ = o == null ? void 0 : o.errors) == null ? void 0 : _[e], $ = (g = v == null ? void 0 : v.__errors) == null ? void 0 : g[0], b = !!$;
  return /* @__PURE__ */ E.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ E.jsxs(
      k.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${u ? "text-blue-600" : b ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          h,
          " ",
          t && /* @__PURE__ */ E.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ E.jsxs(
      k.div,
      {
        className: "relative",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          /* @__PURE__ */ E.jsxs(
            "select",
            {
              id: e,
              value: r || "",
              onChange: (m) => n(m.target.value),
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 bg-transparent appearance-none ${b ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`,
              children: [
                /* @__PURE__ */ E.jsx("option", { value: "", disabled: !0, children: a || p || "Please select an option" }),
                f.map((m) => {
                  const P = typeof m == "string" || typeof m == "number" ? m : null, N = typeof m == "string" ? m.charAt(0).toUpperCase() + m.slice(1) : m;
                  return P !== null ? /* @__PURE__ */ E.jsx("option", { value: P, children: typeof N == "string" || typeof N == "number" ? N : JSON.stringify(N) }, P.toString()) : null;
                })
              ]
            }
          ),
          /* @__PURE__ */ E.jsx(
            k.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${b ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: u || b ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          ),
          /* @__PURE__ */ E.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700", children: /* @__PURE__ */ E.jsx(
            "svg",
            {
              className: "fill-current h-4 w-4",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ E.jsx("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" })
            }
          ) })
        ]
      }
    ),
    b && /* @__PURE__ */ E.jsx(
      k.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: $
      }
    )
  ] });
}, Go = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  schema: a,
  uiSchema: i,
  formContext: s
}) => {
  var v, $;
  const [o, u] = pe(!1), c = (i == null ? void 0 : i["ui:title"]) || a.title, f = (v = s == null ? void 0 : s.errors) == null ? void 0 : v[e], h = ($ = f == null ? void 0 : f.__errors) == null ? void 0 : $[0], p = !!h;
  return /* @__PURE__ */ E.jsxs("div", { className: "mb-6 flex flex-col items-center", children: [
    /* @__PURE__ */ E.jsxs(
      k.div,
      {
        className: "relative flex items-center",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "checkbox",
              id: e,
              checked: r || !1,
              onChange: (b) => n(b.target.checked),
              onFocus: () => u(!0),
              onBlur: () => u(!1),
              className: `w-6 h-6 text-blue-600 rounded-md focus:ring-2 focus:ring-offset-2 focus:border-transparent transition-all duration-300 ${p ? "border-2 border-red-500 focus:ring-red-500" : "border-2 border-gray-300 focus:ring-blue-500"}`
            }
          ),
          /* @__PURE__ */ E.jsxs(
            k.label,
            {
              htmlFor: e,
              className: `ml-3 text-2xl font-bold transition-colors duration-300 ${o ? "text-blue-600" : p ? "text-red-500" : "text-gray-700"}`,
              initial: { y: -10, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 0.3 },
              children: [
                c,
                " ",
                t && /* @__PURE__ */ E.jsx("span", { className: "text-red-500", children: "*" })
              ]
            }
          )
        ]
      }
    ),
    p && /* @__PURE__ */ E.jsx(
      k.p,
      {
        className: "text-red-500 text-sm mt-2",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: h
      }
    )
  ] });
}, qo = "data:image/svg+xml,%3csvg%20width='81'%20height='14'%20viewBox='0%200%2081%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%201000002026'%3e%3cpath%20id='Union'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M80.074%200V6.49771V7V7.49771L72.2812%207.49771L73.6096%208.82613C73.8048%209.0214%2073.8048%209.33798%2073.6096%209.53324C73.4143%209.7285%2073.0977%209.7285%2072.9025%209.53324L70.7205%207.35126C70.5252%207.156%2070.5252%206.83942%2070.7205%206.64415L72.9025%204.46217C73.0977%204.26691%2073.4143%204.26691%2073.6096%204.46217C73.8048%204.65743%2073.8048%204.97402%2073.6096%205.16928L72.2812%206.49771L79.274%206.49771V0H80.074ZM1.09005%204.636C1.30605%204.26%201.62605%203.948%202.05005%203.7C2.48205%203.444%202.98205%203.316%203.55005%203.316C4.13405%203.316%204.66205%203.456%205.13405%203.736C5.61405%204.016%205.99005%204.412%206.26205%204.924C6.53405%205.428%206.67005%206.016%206.67005%206.688C6.67005%207.352%206.53405%207.944%206.26205%208.464C5.99005%208.984%205.61405%209.388%205.13405%209.676C4.66205%209.964%204.13405%2010.108%203.55005%2010.108C2.99005%2010.108%202.49405%209.984%202.06205%209.736C1.63805%209.48%201.31405%209.164%201.09005%208.788V13.12H-0.00195312V3.424H1.09005V4.636ZM5.55405%206.688C5.55405%206.192%205.45405%205.76%205.25405%205.392C5.05405%205.024%204.78205%204.744%204.43805%204.552C4.10205%204.36%203.73005%204.264%203.32205%204.264C2.92205%204.264%202.55005%204.364%202.20605%204.564C1.87005%204.756%201.59805%205.04%201.39005%205.416C1.19005%205.784%201.09005%206.212%201.09005%206.7C1.09005%207.196%201.19005%207.632%201.39005%208.008C1.59805%208.376%201.87005%208.66%202.20605%208.86C2.55005%209.052%202.92205%209.148%203.32205%209.148C3.73005%209.148%204.10205%209.052%204.43805%208.86C4.78205%208.66%205.05405%208.376%205.25405%208.008C5.45405%207.632%205.55405%207.192%205.55405%206.688ZM9.19942%204.492C9.39142%204.116%209.66342%203.824%2010.0154%203.616C10.3754%203.408%2010.8114%203.304%2011.3234%203.304V4.432H11.0354C9.81142%204.432%209.19942%205.096%209.19942%206.424V10H8.10742V3.424H9.19942V4.492ZM18.584%206.46C18.584%206.668%2018.572%206.888%2018.548%207.12H13.292C13.332%207.768%2013.552%208.276%2013.952%208.644C14.36%209.004%2014.852%209.184%2015.428%209.184C15.9%209.184%2016.292%209.076%2016.604%208.86C16.924%208.636%2017.148%208.34%2017.276%207.972H18.452C18.276%208.604%2017.924%209.12%2017.396%209.52C16.868%209.912%2016.212%2010.108%2015.428%2010.108C14.804%2010.108%2014.244%209.968%2013.748%209.688C13.26%209.408%2012.876%209.012%2012.596%208.5C12.316%207.98%2012.176%207.38%2012.176%206.7C12.176%206.02%2012.312%205.424%2012.584%204.912C12.856%204.4%2013.236%204.008%2013.724%203.736C14.22%203.456%2014.788%203.316%2015.428%203.316C16.052%203.316%2016.604%203.452%2017.084%203.724C17.564%203.996%2017.932%204.372%2018.188%204.852C18.452%205.324%2018.584%205.86%2018.584%206.46ZM17.456%206.232C17.456%205.816%2017.364%205.46%2017.18%205.164C16.996%204.86%2016.744%204.632%2016.424%204.48C16.112%204.32%2015.764%204.24%2015.38%204.24C14.828%204.24%2014.356%204.416%2013.964%204.768C13.58%205.12%2013.36%205.608%2013.304%206.232H17.456ZM22.3534%2010.108C21.8494%2010.108%2021.3974%2010.024%2020.9974%209.856C20.5974%209.68%2020.2814%209.44%2020.0494%209.136C19.8174%208.824%2019.6894%208.468%2019.6654%208.068H20.7934C20.8254%208.396%2020.9774%208.664%2021.2494%208.872C21.5294%209.08%2021.8934%209.184%2022.3414%209.184C22.7574%209.184%2023.0854%209.092%2023.3254%208.908C23.5654%208.724%2023.6854%208.492%2023.6854%208.212C23.6854%207.924%2023.5574%207.712%2023.3014%207.576C23.0454%207.432%2022.6494%207.292%2022.1134%207.156C21.6254%207.028%2021.2254%206.9%2020.9134%206.772C20.6094%206.636%2020.3454%206.44%2020.1214%206.184C19.9054%205.92%2019.7974%205.576%2019.7974%205.152C19.7974%204.816%2019.8974%204.508%2020.0974%204.228C20.2974%203.948%2020.5814%203.728%2020.9494%203.568C21.3174%203.4%2021.7374%203.316%2022.2094%203.316C22.9374%203.316%2023.5254%203.5%2023.9734%203.868C24.4214%204.236%2024.6614%204.74%2024.6934%205.38H23.6014C23.5774%205.036%2023.4374%204.76%2023.1814%204.552C22.9334%204.344%2022.5974%204.24%2022.1734%204.24C21.7814%204.24%2021.4694%204.324%2021.2374%204.492C21.0054%204.66%2020.8894%204.88%2020.8894%205.152C20.8894%205.368%2020.9574%205.548%2021.0934%205.692C21.2374%205.828%2021.4134%205.94%2021.6214%206.028C21.8374%206.108%2022.1334%206.2%2022.5094%206.304C22.9814%206.432%2023.3654%206.56%2023.6614%206.688C23.9574%206.808%2024.2094%206.992%2024.4174%207.24C24.6334%207.488%2024.7454%207.812%2024.7534%208.212C24.7534%208.572%2024.6534%208.896%2024.4534%209.184C24.2534%209.472%2023.9694%209.7%2023.6014%209.868C23.2414%2010.028%2022.8254%2010.108%2022.3534%2010.108ZM28.6229%2010.108C28.1189%2010.108%2027.6669%2010.024%2027.2669%209.856C26.8669%209.68%2026.5509%209.44%2026.3189%209.136C26.0869%208.824%2025.9589%208.468%2025.9349%208.068H27.0629C27.0949%208.396%2027.2469%208.664%2027.5189%208.872C27.7989%209.08%2028.1629%209.184%2028.6109%209.184C29.0269%209.184%2029.3549%209.092%2029.5949%208.908C29.8349%208.724%2029.9549%208.492%2029.9549%208.212C29.9549%207.924%2029.8269%207.712%2029.5709%207.576C29.3149%207.432%2028.9189%207.292%2028.3829%207.156C27.8949%207.028%2027.4949%206.9%2027.1829%206.772C26.8789%206.636%2026.6149%206.44%2026.3909%206.184C26.1749%205.92%2026.0669%205.576%2026.0669%205.152C26.0669%204.816%2026.1669%204.508%2026.3669%204.228C26.5669%203.948%2026.8509%203.728%2027.2189%203.568C27.5869%203.4%2028.0069%203.316%2028.4789%203.316C29.2069%203.316%2029.7949%203.5%2030.2429%203.868C30.6909%204.236%2030.9309%204.74%2030.9629%205.38H29.8709C29.8469%205.036%2029.7069%204.76%2029.4509%204.552C29.2029%204.344%2028.8669%204.24%2028.4429%204.24C28.0509%204.24%2027.7389%204.324%2027.5069%204.492C27.2749%204.66%2027.1589%204.88%2027.1589%205.152C27.1589%205.368%2027.2269%205.548%2027.3629%205.692C27.5069%205.828%2027.6829%205.94%2027.8909%206.028C28.1069%206.108%2028.4029%206.2%2028.7789%206.304C29.2509%206.432%2029.6349%206.56%2029.9309%206.688C30.2269%206.808%2030.4789%206.992%2030.6869%207.24C30.9029%207.488%2031.0149%207.812%2031.0229%208.212C31.0229%208.572%2030.9229%208.896%2030.7229%209.184C30.5229%209.472%2030.2389%209.7%2029.8709%209.868C29.5109%2010.028%2029.0949%2010.108%2028.6229%2010.108ZM37.3477%202.98V5.08H40.1677V6.412H37.3477V8.632H40.5277V10H35.6677V1.612H40.5277V2.98H37.3477ZM45.7384%203.256C46.5304%203.256%2047.1704%203.508%2047.6584%204.012C48.1464%204.508%2048.3904%205.204%2048.3904%206.1V10H46.7104V6.328C46.7104%205.8%2046.5784%205.396%2046.3144%205.116C46.0504%204.828%2045.6904%204.684%2045.2344%204.684C44.7704%204.684%2044.4024%204.828%2044.1304%205.116C43.8664%205.396%2043.7344%205.8%2043.7344%206.328V10H42.0544V3.352H43.7344V4.18C43.9584%203.892%2044.2424%203.668%2044.5864%203.508C44.9384%203.34%2045.3224%203.256%2045.7384%203.256ZM51.944%204.732V7.948C51.944%208.172%2051.996%208.336%2052.1%208.44C52.212%208.536%2052.396%208.584%2052.652%208.584H53.432V10H52.376C50.96%2010%2050.252%209.312%2050.252%207.936V4.732H49.46V3.352H50.252V1.708H51.944V3.352H53.432V4.732H51.944ZM60.8203%206.532C60.8203%206.772%2060.8043%206.988%2060.7723%207.18H55.9123C55.9523%207.66%2056.1203%208.036%2056.4163%208.308C56.7123%208.58%2057.0763%208.716%2057.5083%208.716C58.1323%208.716%2058.5763%208.448%2058.8403%207.912H60.6523C60.4603%208.552%2060.0923%209.08%2059.5483%209.496C59.0043%209.904%2058.3363%2010.108%2057.5443%2010.108C56.9043%2010.108%2056.3283%209.968%2055.8163%209.688C55.3123%209.4%2054.9163%208.996%2054.6283%208.476C54.3483%207.956%2054.2083%207.356%2054.2083%206.676C54.2083%205.988%2054.3483%205.384%2054.6283%204.864C54.9083%204.344%2055.3003%203.944%2055.8043%203.664C56.3083%203.384%2056.8883%203.244%2057.5443%203.244C58.1763%203.244%2058.7403%203.38%2059.2363%203.652C59.7403%203.924%2060.1283%204.312%2060.4003%204.816C60.6803%205.312%2060.8203%205.884%2060.8203%206.532ZM59.0803%206.052C59.0723%205.62%2058.9163%205.276%2058.6123%205.02C58.3083%204.756%2057.9363%204.624%2057.4963%204.624C57.0803%204.624%2056.7283%204.752%2056.4403%205.008C56.1603%205.256%2055.9883%205.604%2055.9243%206.052H59.0803ZM63.7266%204.384C63.9426%204.032%2064.2226%203.756%2064.5666%203.556C64.9186%203.356%2065.3186%203.256%2065.7666%203.256V5.02H65.3226C64.7946%205.02%2064.3946%205.144%2064.1226%205.392C63.8586%205.64%2063.7266%206.072%2063.7266%206.688V10H62.0466V3.352H63.7266V4.384Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e";
function X(e) {
  return typeof File < "u" && e instanceof File || typeof Date < "u" && e instanceof Date ? !1 : typeof e == "object" && e !== null && !Array.isArray(e);
}
const wa = "__additional_property", ko = "additionalProperties", Zt = "allOf", Lr = "anyOf", zr = "const", Wo = "default", Aa = "dependencies", _e = "__errors", Ir = "$id", Ho = "if", Yo = "items", Bo = "_$junk_option_schema_id$_", hr = "oneOf", ye = "properties", Jo = "required", me = "$ref", Xo = "__rjsf_additionalProperties", Ca = "__rjsf_rootSchema", Zo = "ui:widget", Qo = "ui:options";
function Zn(e = {}, r = {}) {
  return Object.keys(e).filter((t) => t.indexOf("ui:") === 0).reduce((t, n) => {
    const a = e[n];
    return n === Zo && X(a) ? (console.error("Setting options via ui:widget object is no longer supported, use ui:options instead"), t) : n === Qo && X(a) ? { ...t, ...a } : { ...t, [n.substring(3)]: a };
  }, { ...r });
}
var eu = typeof Sr == "object" && Sr && Sr.Object === Object && Sr, Ea = eu, ru = Ea, tu = typeof self == "object" && self && self.Object === Object && self, nu = ru || tu || Function("return this")(), $e = nu, iu = $e, au = iu.Symbol, Ye = au, Qn = Ye, Oa = Object.prototype, su = Oa.hasOwnProperty, ou = Oa.toString, lr = Qn ? Qn.toStringTag : void 0;
function uu(e) {
  var r = su.call(e, lr), t = e[lr];
  try {
    e[lr] = void 0;
    var n = !0;
  } catch {
  }
  var a = ou.call(e);
  return n && (r ? e[lr] = t : delete e[lr]), a;
}
var cu = uu, fu = Object.prototype, lu = fu.toString;
function du(e) {
  return lu.call(e);
}
var pu = du, ei = Ye, hu = cu, vu = pu, yu = "[object Null]", gu = "[object Undefined]", ri = ei ? ei.toStringTag : void 0;
function mu(e) {
  return e == null ? e === void 0 ? gu : yu : ri && ri in Object(e) ? hu(e) : vu(e);
}
var be = mu;
function $u(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var Pa = $u, _u = Pa, bu = _u(Object.getPrototypeOf, Object), Xr = bu;
function wu(e) {
  return e != null && typeof e == "object";
}
var de = wu, Au = be, Cu = Xr, Eu = de, Ou = "[object Object]", Pu = Function.prototype, Tu = Object.prototype, Ta = Pu.toString, Su = Tu.hasOwnProperty, Iu = Ta.call(Object);
function Nu(e) {
  if (!Eu(e) || Au(e) != Ou)
    return !1;
  var r = Cu(e);
  if (r === null)
    return !0;
  var t = Su.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Ta.call(t) == Iu;
}
var Be = Nu;
const Qt = /* @__PURE__ */ Q(Be);
function Dt(e) {
  const r = {
    // We store the list of errors for this node in a property named __errors
    // to avoid name collision with a possible sub schema field named
    // 'errors' (see `utils.toErrorSchema`).
    [_e]: [],
    addError(t) {
      this[_e].push(t);
    }
  };
  if (Array.isArray(e))
    return e.reduce((t, n, a) => ({ ...t, [a]: Dt(n) }), r);
  if (Qt(e)) {
    const t = e;
    return Object.keys(t).reduce((n, a) => ({ ...n, [a]: Dt(t[a]) }), r);
  }
  return r;
}
function ju() {
  this.__data__ = [], this.size = 0;
}
var xu = ju;
function Ru(e, r) {
  return e === r || e !== e && r !== r;
}
var Je = Ru, Mu = Je;
function Fu(e, r) {
  for (var t = e.length; t--; )
    if (Mu(e[t][0], r))
      return t;
  return -1;
}
var Zr = Fu, Du = Zr, Lu = Array.prototype, zu = Lu.splice;
function Ku(e) {
  var r = this.__data__, t = Du(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : zu.call(r, t, 1), --this.size, !0;
}
var Vu = Ku, Uu = Zr;
function Gu(e) {
  var r = this.__data__, t = Uu(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var qu = Gu, ku = Zr;
function Wu(e) {
  return ku(this.__data__, e) > -1;
}
var Hu = Wu, Yu = Zr;
function Bu(e, r) {
  var t = this.__data__, n = Yu(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
var Ju = Bu, Xu = xu, Zu = Vu, Qu = qu, ec = Hu, rc = Ju;
function Xe(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Xe.prototype.clear = Xu;
Xe.prototype.delete = Zu;
Xe.prototype.get = Qu;
Xe.prototype.has = ec;
Xe.prototype.set = rc;
var Qr = Xe, tc = Qr;
function nc() {
  this.__data__ = new tc(), this.size = 0;
}
var ic = nc;
function ac(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var sc = ac;
function oc(e) {
  return this.__data__.get(e);
}
var uc = oc;
function cc(e) {
  return this.__data__.has(e);
}
var fc = cc;
function lc(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var ue = lc;
const Kr = /* @__PURE__ */ Q(ue);
var dc = be, pc = ue, hc = "[object AsyncFunction]", vc = "[object Function]", yc = "[object GeneratorFunction]", gc = "[object Proxy]";
function mc(e) {
  if (!pc(e))
    return !1;
  var r = dc(e);
  return r == vc || r == yc || r == hc || r == gc;
}
var et = mc, $c = $e, _c = $c["__core-js_shared__"], bc = _c, Et = bc, ti = function() {
  var e = /[^.]+$/.exec(Et && Et.keys && Et.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function wc(e) {
  return !!ti && ti in e;
}
var Ac = wc, Cc = Function.prototype, Ec = Cc.toString;
function Oc(e) {
  if (e != null) {
    try {
      return Ec.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Sa = Oc, Pc = et, Tc = Ac, Sc = ue, Ic = Sa, Nc = /[\\^$.*+?()[\]{}|]/g, jc = /^\[object .+?Constructor\]$/, xc = Function.prototype, Rc = Object.prototype, Mc = xc.toString, Fc = Rc.hasOwnProperty, Dc = RegExp(
  "^" + Mc.call(Fc).replace(Nc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Lc(e) {
  if (!Sc(e) || Tc(e))
    return !1;
  var r = Pc(e) ? Dc : jc;
  return r.test(Ic(e));
}
var zc = Lc;
function Kc(e, r) {
  return e == null ? void 0 : e[r];
}
var Vc = Kc, Uc = zc, Gc = Vc;
function qc(e, r) {
  var t = Gc(e, r);
  return Uc(t) ? t : void 0;
}
var Me = qc, kc = Me, Wc = $e, Hc = kc(Wc, "Map"), en = Hc, Yc = Me, Bc = Yc(Object, "create"), rt = Bc, ni = rt;
function Jc() {
  this.__data__ = ni ? ni(null) : {}, this.size = 0;
}
var Xc = Jc;
function Zc(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Qc = Zc, ef = rt, rf = "__lodash_hash_undefined__", tf = Object.prototype, nf = tf.hasOwnProperty;
function af(e) {
  var r = this.__data__;
  if (ef) {
    var t = r[e];
    return t === rf ? void 0 : t;
  }
  return nf.call(r, e) ? r[e] : void 0;
}
var sf = af, of = rt, uf = Object.prototype, cf = uf.hasOwnProperty;
function ff(e) {
  var r = this.__data__;
  return of ? r[e] !== void 0 : cf.call(r, e);
}
var lf = ff, df = rt, pf = "__lodash_hash_undefined__";
function hf(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = df && r === void 0 ? pf : r, this;
}
var vf = hf, yf = Xc, gf = Qc, mf = sf, $f = lf, _f = vf;
function Ze(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Ze.prototype.clear = yf;
Ze.prototype.delete = gf;
Ze.prototype.get = mf;
Ze.prototype.has = $f;
Ze.prototype.set = _f;
var bf = Ze, ii = bf, wf = Qr, Af = en;
function Cf() {
  this.size = 0, this.__data__ = {
    hash: new ii(),
    map: new (Af || wf)(),
    string: new ii()
  };
}
var Ef = Cf;
function Of(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Pf = Of, Tf = Pf;
function Sf(e, r) {
  var t = e.__data__;
  return Tf(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var tt = Sf, If = tt;
function Nf(e) {
  var r = If(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var jf = Nf, xf = tt;
function Rf(e) {
  return xf(this, e).get(e);
}
var Mf = Rf, Ff = tt;
function Df(e) {
  return Ff(this, e).has(e);
}
var Lf = Df, zf = tt;
function Kf(e, r) {
  var t = zf(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var Vf = Kf, Uf = Ef, Gf = jf, qf = Mf, kf = Lf, Wf = Vf;
function Qe(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Qe.prototype.clear = Uf;
Qe.prototype.delete = Gf;
Qe.prototype.get = qf;
Qe.prototype.has = kf;
Qe.prototype.set = Wf;
var rn = Qe, Hf = Qr, Yf = en, Bf = rn, Jf = 200;
function Xf(e, r) {
  var t = this.__data__;
  if (t instanceof Hf) {
    var n = t.__data__;
    if (!Yf || n.length < Jf - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new Bf(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
var Zf = Xf, Qf = Qr, el = ic, rl = sc, tl = uc, nl = fc, il = Zf;
function er(e) {
  var r = this.__data__ = new Qf(e);
  this.size = r.size;
}
er.prototype.clear = el;
er.prototype.delete = rl;
er.prototype.get = tl;
er.prototype.has = nl;
er.prototype.set = il;
var nt = er, al = "__lodash_hash_undefined__";
function sl(e) {
  return this.__data__.set(e, al), this;
}
var ol = sl;
function ul(e) {
  return this.__data__.has(e);
}
var cl = ul, fl = rn, ll = ol, dl = cl;
function Vr(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new fl(); ++r < t; )
    this.add(e[r]);
}
Vr.prototype.add = Vr.prototype.push = ll;
Vr.prototype.has = dl;
var it = Vr;
function pl(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (r(e[t], t, e))
      return !0;
  return !1;
}
var hl = pl;
function vl(e, r) {
  return e.has(r);
}
var at = vl, yl = it, gl = hl, ml = at, $l = 1, _l = 2;
function bl(e, r, t, n, a, i) {
  var s = t & $l, o = e.length, u = r.length;
  if (o != u && !(s && u > o))
    return !1;
  var c = i.get(e), f = i.get(r);
  if (c && f)
    return c == r && f == e;
  var h = -1, p = !0, v = t & _l ? new yl() : void 0;
  for (i.set(e, r), i.set(r, e); ++h < o; ) {
    var $ = e[h], b = r[h];
    if (n)
      var _ = s ? n(b, $, h, r, e, i) : n($, b, h, e, r, i);
    if (_ !== void 0) {
      if (_)
        continue;
      p = !1;
      break;
    }
    if (v) {
      if (!gl(r, function(g, m) {
        if (!ml(v, m) && ($ === g || a($, g, t, n, i)))
          return v.push(m);
      })) {
        p = !1;
        break;
      }
    } else if (!($ === b || a($, b, t, n, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(r), p;
}
var Ia = bl, wl = $e, Al = wl.Uint8Array, Na = Al;
function Cl(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n, a) {
    t[++r] = [a, n];
  }), t;
}
var El = Cl;
function Ol(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n) {
    t[++r] = n;
  }), t;
}
var tn = Ol, ai = Ye, si = Na, Pl = Je, Tl = Ia, Sl = El, Il = tn, Nl = 1, jl = 2, xl = "[object Boolean]", Rl = "[object Date]", Ml = "[object Error]", Fl = "[object Map]", Dl = "[object Number]", Ll = "[object RegExp]", zl = "[object Set]", Kl = "[object String]", Vl = "[object Symbol]", Ul = "[object ArrayBuffer]", Gl = "[object DataView]", oi = ai ? ai.prototype : void 0, Ot = oi ? oi.valueOf : void 0;
function ql(e, r, t, n, a, i, s) {
  switch (t) {
    case Gl:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Ul:
      return !(e.byteLength != r.byteLength || !i(new si(e), new si(r)));
    case xl:
    case Rl:
    case Dl:
      return Pl(+e, +r);
    case Ml:
      return e.name == r.name && e.message == r.message;
    case Ll:
    case Kl:
      return e == r + "";
    case Fl:
      var o = Sl;
    case zl:
      var u = n & Nl;
      if (o || (o = Il), e.size != r.size && !u)
        return !1;
      var c = s.get(e);
      if (c)
        return c == r;
      n |= jl, s.set(e, r);
      var f = Tl(o(e), o(r), n, a, i, s);
      return s.delete(e), f;
    case Vl:
      if (Ot)
        return Ot.call(e) == Ot.call(r);
  }
  return !1;
}
var kl = ql;
function Wl(e, r) {
  for (var t = -1, n = r.length, a = e.length; ++t < n; )
    e[a + t] = r[t];
  return e;
}
var nn = Wl, Hl = Array.isArray, ne = Hl, Yl = nn, Bl = ne;
function Jl(e, r, t) {
  var n = r(e);
  return Bl(e) ? n : Yl(n, t(e));
}
var ja = Jl;
function Xl(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++t < n; ) {
    var s = e[t];
    r(s, t, e) && (i[a++] = s);
  }
  return i;
}
var Zl = Xl;
function Ql() {
  return [];
}
var xa = Ql, e0 = Zl, r0 = xa, t0 = Object.prototype, n0 = t0.propertyIsEnumerable, ui = Object.getOwnPropertySymbols, i0 = ui ? function(e) {
  return e == null ? [] : (e = Object(e), e0(ui(e), function(r) {
    return n0.call(e, r);
  }));
} : r0, an = i0;
function a0(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Ra = a0, s0 = be, o0 = de, u0 = "[object Arguments]";
function c0(e) {
  return o0(e) && s0(e) == u0;
}
var f0 = c0, ci = f0, l0 = de, Ma = Object.prototype, d0 = Ma.hasOwnProperty, p0 = Ma.propertyIsEnumerable, h0 = ci(/* @__PURE__ */ function() {
  return arguments;
}()) ? ci : function(e) {
  return l0(e) && d0.call(e, "callee") && !p0.call(e, "callee");
}, mr = h0, Ur = { exports: {} };
function v0() {
  return !1;
}
var y0 = v0;
Ur.exports;
(function(e, r) {
  var t = $e, n = y0, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? t.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Ur, Ur.exports);
var rr = Ur.exports, g0 = 9007199254740991, m0 = /^(?:0|[1-9]\d*)$/;
function $0(e, r) {
  var t = typeof e;
  return r = r ?? g0, !!r && (t == "number" || t != "symbol" && m0.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var st = $0, _0 = 9007199254740991;
function b0(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _0;
}
var sn = b0, w0 = be, A0 = sn, C0 = de, E0 = "[object Arguments]", O0 = "[object Array]", P0 = "[object Boolean]", T0 = "[object Date]", S0 = "[object Error]", I0 = "[object Function]", N0 = "[object Map]", j0 = "[object Number]", x0 = "[object Object]", R0 = "[object RegExp]", M0 = "[object Set]", F0 = "[object String]", D0 = "[object WeakMap]", L0 = "[object ArrayBuffer]", z0 = "[object DataView]", K0 = "[object Float32Array]", V0 = "[object Float64Array]", U0 = "[object Int8Array]", G0 = "[object Int16Array]", q0 = "[object Int32Array]", k0 = "[object Uint8Array]", W0 = "[object Uint8ClampedArray]", H0 = "[object Uint16Array]", Y0 = "[object Uint32Array]", J = {};
J[K0] = J[V0] = J[U0] = J[G0] = J[q0] = J[k0] = J[W0] = J[H0] = J[Y0] = !0;
J[E0] = J[O0] = J[L0] = J[P0] = J[z0] = J[T0] = J[S0] = J[I0] = J[N0] = J[j0] = J[x0] = J[R0] = J[M0] = J[F0] = J[D0] = !1;
function B0(e) {
  return C0(e) && A0(e.length) && !!J[w0(e)];
}
var J0 = B0;
function X0(e) {
  return function(r) {
    return e(r);
  };
}
var Fe = X0, Gr = { exports: {} };
Gr.exports;
(function(e, r) {
  var t = Ea, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && t.process, o = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(Gr, Gr.exports);
var on = Gr.exports, Z0 = J0, Q0 = Fe, fi = on, li = fi && fi.isTypedArray, ed = li ? Q0(li) : Z0, $r = ed, rd = Ra, td = mr, nd = ne, id = rr, ad = st, sd = $r, od = Object.prototype, ud = od.hasOwnProperty;
function cd(e, r) {
  var t = nd(e), n = !t && td(e), a = !t && !n && id(e), i = !t && !n && !a && sd(e), s = t || n || a || i, o = s ? rd(e.length, String) : [], u = o.length;
  for (var c in e)
    (r || ud.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ad(c, u))) && o.push(c);
  return o;
}
var Fa = cd, fd = Object.prototype;
function ld(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || fd;
  return e === t;
}
var ot = ld, dd = Pa, pd = dd(Object.keys, Object), hd = pd, vd = ot, yd = hd, gd = Object.prototype, md = gd.hasOwnProperty;
function $d(e) {
  if (!vd(e))
    return yd(e);
  var r = [];
  for (var t in Object(e))
    md.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var Da = $d, _d = et, bd = sn;
function wd(e) {
  return e != null && bd(e.length) && !_d(e);
}
var De = wd, Ad = Fa, Cd = Da, Ed = De;
function Od(e) {
  return Ed(e) ? Ad(e) : Cd(e);
}
var _r = Od, Pd = ja, Td = an, Sd = _r;
function Id(e) {
  return Pd(e, Sd, Td);
}
var La = Id, di = La, Nd = 1, jd = Object.prototype, xd = jd.hasOwnProperty;
function Rd(e, r, t, n, a, i) {
  var s = t & Nd, o = di(e), u = o.length, c = di(r), f = c.length;
  if (u != f && !s)
    return !1;
  for (var h = u; h--; ) {
    var p = o[h];
    if (!(s ? p in r : xd.call(r, p)))
      return !1;
  }
  var v = i.get(e), $ = i.get(r);
  if (v && $)
    return v == r && $ == e;
  var b = !0;
  i.set(e, r), i.set(r, e);
  for (var _ = s; ++h < u; ) {
    p = o[h];
    var g = e[p], m = r[p];
    if (n)
      var P = s ? n(m, g, p, r, e, i) : n(g, m, p, e, r, i);
    if (!(P === void 0 ? g === m || a(g, m, t, n, i) : P)) {
      b = !1;
      break;
    }
    _ || (_ = p == "constructor");
  }
  if (b && !_) {
    var N = e.constructor, D = r.constructor;
    N != D && "constructor" in e && "constructor" in r && !(typeof N == "function" && N instanceof N && typeof D == "function" && D instanceof D) && (b = !1);
  }
  return i.delete(e), i.delete(r), b;
}
var Md = Rd, Fd = Me, Dd = $e, Ld = Fd(Dd, "DataView"), zd = Ld, Kd = Me, Vd = $e, Ud = Kd(Vd, "Promise"), Gd = Ud, qd = Me, kd = $e, Wd = qd(kd, "Set"), za = Wd, Hd = Me, Yd = $e, Bd = Hd(Yd, "WeakMap"), Jd = Bd, Lt = zd, zt = en, Kt = Gd, Vt = za, Ut = Jd, Ka = be, tr = Sa, pi = "[object Map]", Xd = "[object Object]", hi = "[object Promise]", vi = "[object Set]", yi = "[object WeakMap]", gi = "[object DataView]", Zd = tr(Lt), Qd = tr(zt), e2 = tr(Kt), r2 = tr(Vt), t2 = tr(Ut), Re = Ka;
(Lt && Re(new Lt(new ArrayBuffer(1))) != gi || zt && Re(new zt()) != pi || Kt && Re(Kt.resolve()) != hi || Vt && Re(new Vt()) != vi || Ut && Re(new Ut()) != yi) && (Re = function(e) {
  var r = Ka(e), t = r == Xd ? e.constructor : void 0, n = t ? tr(t) : "";
  if (n)
    switch (n) {
      case Zd:
        return gi;
      case Qd:
        return pi;
      case e2:
        return hi;
      case r2:
        return vi;
      case t2:
        return yi;
    }
  return r;
});
var br = Re, Pt = nt, n2 = Ia, i2 = kl, a2 = Md, mi = br, $i = ne, _i = rr, s2 = $r, o2 = 1, bi = "[object Arguments]", wi = "[object Array]", Nr = "[object Object]", u2 = Object.prototype, Ai = u2.hasOwnProperty;
function c2(e, r, t, n, a, i) {
  var s = $i(e), o = $i(r), u = s ? wi : mi(e), c = o ? wi : mi(r);
  u = u == bi ? Nr : u, c = c == bi ? Nr : c;
  var f = u == Nr, h = c == Nr, p = u == c;
  if (p && _i(e)) {
    if (!_i(r))
      return !1;
    s = !0, f = !1;
  }
  if (p && !f)
    return i || (i = new Pt()), s || s2(e) ? n2(e, r, t, n, a, i) : i2(e, r, u, t, n, a, i);
  if (!(t & o2)) {
    var v = f && Ai.call(e, "__wrapped__"), $ = h && Ai.call(r, "__wrapped__");
    if (v || $) {
      var b = v ? e.value() : e, _ = $ ? r.value() : r;
      return i || (i = new Pt()), a(b, _, t, n, i);
    }
  }
  return p ? (i || (i = new Pt()), a2(e, r, t, n, a, i)) : !1;
}
var f2 = c2, l2 = f2, Ci = de;
function Va(e, r, t, n, a) {
  return e === r ? !0 : e == null || r == null || !Ci(e) && !Ci(r) ? e !== e && r !== r : l2(e, r, t, n, Va, a);
}
var ut = Va, d2 = ut;
function p2(e, r, t) {
  t = typeof t == "function" ? t : void 0;
  var n = t ? t(e, r) : void 0;
  return n === void 0 ? d2(e, r, void 0, t) : !!n;
}
var h2 = p2;
const v2 = /* @__PURE__ */ Q(h2);
function y2(e, r) {
  return v2(e, r, (t, n) => {
    if (typeof t == "function" && typeof n == "function")
      return !0;
  });
}
var g2 = be, m2 = de, $2 = "[object Symbol]";
function _2(e) {
  return typeof e == "symbol" || m2(e) && g2(e) == $2;
}
var nr = _2, b2 = ne, w2 = nr, A2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, C2 = /^\w*$/;
function E2(e, r) {
  if (b2(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || w2(e) ? !0 : C2.test(e) || !A2.test(e) || r != null && e in Object(r);
}
var un = E2, Ua = rn, O2 = "Expected a function";
function cn(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(O2);
  var t = function() {
    var n = arguments, a = r ? r.apply(this, n) : n[0], i = t.cache;
    if (i.has(a))
      return i.get(a);
    var s = e.apply(this, n);
    return t.cache = i.set(a, s) || i, s;
  };
  return t.cache = new (cn.Cache || Ua)(), t;
}
cn.Cache = Ua;
var P2 = cn, T2 = P2, S2 = 500;
function I2(e) {
  var r = T2(e, function(n) {
    return t.size === S2 && t.clear(), n;
  }), t = r.cache;
  return r;
}
var N2 = I2, j2 = N2, x2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, R2 = /\\(\\)?/g, M2 = j2(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(x2, function(t, n, a, i) {
    r.push(a ? i.replace(R2, "$1") : n || t);
  }), r;
}), Ga = M2;
function F2(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = Array(n); ++t < n; )
    a[t] = r(e[t], t, e);
  return a;
}
var we = F2, Ei = Ye, D2 = we, L2 = ne, z2 = nr, K2 = 1 / 0, Oi = Ei ? Ei.prototype : void 0, Pi = Oi ? Oi.toString : void 0;
function qa(e) {
  if (typeof e == "string")
    return e;
  if (L2(e))
    return D2(e, qa) + "";
  if (z2(e))
    return Pi ? Pi.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -K2 ? "-0" : r;
}
var V2 = qa, U2 = V2;
function G2(e) {
  return e == null ? "" : U2(e);
}
var ka = G2, q2 = ne, k2 = un, W2 = Ga, H2 = ka;
function Y2(e, r) {
  return q2(e) ? e : k2(e, r) ? [e] : W2(H2(e));
}
var wr = Y2, B2 = nr, J2 = 1 / 0;
function X2(e) {
  if (typeof e == "string" || B2(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -J2 ? "-0" : r;
}
var Le = X2, Z2 = wr, Q2 = Le;
function ep(e, r) {
  r = Z2(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[Q2(r[t++])];
  return t && t == n ? e : void 0;
}
var ct = ep, rp = ct;
function tp(e, r, t) {
  var n = e == null ? void 0 : rp(e, r);
  return n === void 0 ? t : n;
}
var Wa = tp;
const Z = /* @__PURE__ */ Q(Wa);
var np = Da, ip = br, ap = mr, sp = ne, op = De, up = rr, cp = ot, fp = $r, lp = "[object Map]", dp = "[object Set]", pp = Object.prototype, hp = pp.hasOwnProperty;
function vp(e) {
  if (e == null)
    return !0;
  if (op(e) && (sp(e) || typeof e == "string" || typeof e.splice == "function" || up(e) || fp(e) || ap(e)))
    return !e.length;
  var r = ip(e);
  if (r == lp || r == dp)
    return !e.size;
  if (cp(e))
    return !np(e).length;
  for (var t in e)
    if (hp.call(e, t))
      return !1;
  return !0;
}
var yp = vp;
const vr = /* @__PURE__ */ Q(yp);
var ft = {}, gp = /~/, mp = /~[01]/g;
function $p(e) {
  switch (e) {
    case "~1":
      return "/";
    case "~0":
      return "~";
  }
  throw new Error("Invalid tilde escape: " + e);
}
function Ha(e) {
  return gp.test(e) ? e.replace(mp, $p) : e;
}
function _p(e, r, t) {
  for (var n, a, i = 1, s = r.length; i < s; ) {
    if (r[i] === "constructor" || r[i] === "prototype" || r[i] === "__proto__") return e;
    if (n = Ha(r[i++]), a = s > i, typeof e[n] > "u" && (Array.isArray(e) && n === "-" && (n = e.length), a && (r[i] !== "" && r[i] < 1 / 0 || r[i] === "-" ? e[n] = [] : e[n] = {})), !a) break;
    e = e[n];
  }
  var o = e[n];
  return t === void 0 ? delete e[n] : e[n] = t, o;
}
function fn(e) {
  if (typeof e == "string") {
    if (e = e.split("/"), e[0] === "") return e;
    throw new Error("Invalid JSON pointer.");
  } else if (Array.isArray(e)) {
    for (const r of e)
      if (typeof r != "string" && typeof r != "number")
        throw new Error("Invalid JSON pointer. Must be of type string or number.");
    return e;
  }
  throw new Error("Invalid JSON pointer.");
}
function Ya(e, r) {
  if (typeof e != "object") throw new Error("Invalid input object.");
  r = fn(r);
  var t = r.length;
  if (t === 1) return e;
  for (var n = 1; n < t; ) {
    if (e = e[Ha(r[n++])], t === n) return e;
    if (typeof e != "object" || e === null) return;
  }
}
function Ba(e, r, t) {
  if (typeof e != "object") throw new Error("Invalid input object.");
  if (r = fn(r), r.length === 0) throw new Error("Invalid JSON pointer for set.");
  return _p(e, r, t);
}
function bp(e) {
  var r = fn(e);
  return {
    get: function(t) {
      return Ya(t, r);
    },
    set: function(t, n) {
      return Ba(t, r, n);
    }
  };
}
ft.get = Ya;
ft.set = Ba;
ft.compile = bp;
function wp(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var ln = wp, Ap = Me, Cp = function() {
  try {
    var e = Ap(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ja = Cp, Ti = Ja;
function Ep(e, r, t) {
  r == "__proto__" && Ti ? Ti(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var dn = Ep, Op = dn, Pp = Je, Tp = Object.prototype, Sp = Tp.hasOwnProperty;
function Ip(e, r, t) {
  var n = e[r];
  (!(Sp.call(e, r) && Pp(n, t)) || t === void 0 && !(r in e)) && Op(e, r, t);
}
var pn = Ip, Np = pn, jp = dn;
function xp(e, r, t, n) {
  var a = !t;
  t || (t = {});
  for (var i = -1, s = r.length; ++i < s; ) {
    var o = r[i], u = n ? n(t[o], e[o], o, t, e) : void 0;
    u === void 0 && (u = e[o]), a ? jp(t, o, u) : Np(t, o, u);
  }
  return t;
}
var ir = xp, Rp = ir, Mp = _r;
function Fp(e, r) {
  return e && Rp(r, Mp(r), e);
}
var Dp = Fp;
function Lp(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var zp = Lp, Kp = ue, Vp = ot, Up = zp, Gp = Object.prototype, qp = Gp.hasOwnProperty;
function kp(e) {
  if (!Kp(e))
    return Up(e);
  var r = Vp(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !qp.call(e, n)) || t.push(n);
  return t;
}
var Wp = kp, Hp = Fa, Yp = Wp, Bp = De;
function Jp(e) {
  return Bp(e) ? Hp(e, !0) : Yp(e);
}
var ar = Jp, Xp = ir, Zp = ar;
function Qp(e, r) {
  return e && Xp(r, Zp(r), e);
}
var eh = Qp, qr = { exports: {} };
qr.exports;
(function(e, r) {
  var t = $e, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i ? t.Buffer : void 0, o = s ? s.allocUnsafe : void 0;
  function u(c, f) {
    if (f)
      return c.slice();
    var h = c.length, p = o ? o(h) : new c.constructor(h);
    return c.copy(p), p;
  }
  e.exports = u;
})(qr, qr.exports);
var Xa = qr.exports;
function rh(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var lt = rh, th = ir, nh = an;
function ih(e, r) {
  return th(e, nh(e), r);
}
var ah = ih, sh = nn, oh = Xr, uh = an, ch = xa, fh = Object.getOwnPropertySymbols, lh = fh ? function(e) {
  for (var r = []; e; )
    sh(r, uh(e)), e = oh(e);
  return r;
} : ch, Za = lh, dh = ir, ph = Za;
function hh(e, r) {
  return dh(e, ph(e), r);
}
var vh = hh, yh = ja, gh = Za, mh = ar;
function $h(e) {
  return yh(e, mh, gh);
}
var Qa = $h, _h = Object.prototype, bh = _h.hasOwnProperty;
function wh(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && bh.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Ah = wh, Si = Na;
function Ch(e) {
  var r = new e.constructor(e.byteLength);
  return new Si(r).set(new Si(e)), r;
}
var hn = Ch, Eh = hn;
function Oh(e, r) {
  var t = r ? Eh(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Ph = Oh, Th = /\w*$/;
function Sh(e) {
  var r = new e.constructor(e.source, Th.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var Ih = Sh, Ii = Ye, Ni = Ii ? Ii.prototype : void 0, ji = Ni ? Ni.valueOf : void 0;
function Nh(e) {
  return ji ? Object(ji.call(e)) : {};
}
var jh = Nh, xh = hn;
function Rh(e, r) {
  var t = r ? xh(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var es = Rh, Mh = hn, Fh = Ph, Dh = Ih, Lh = jh, zh = es, Kh = "[object Boolean]", Vh = "[object Date]", Uh = "[object Map]", Gh = "[object Number]", qh = "[object RegExp]", kh = "[object Set]", Wh = "[object String]", Hh = "[object Symbol]", Yh = "[object ArrayBuffer]", Bh = "[object DataView]", Jh = "[object Float32Array]", Xh = "[object Float64Array]", Zh = "[object Int8Array]", Qh = "[object Int16Array]", e1 = "[object Int32Array]", r1 = "[object Uint8Array]", t1 = "[object Uint8ClampedArray]", n1 = "[object Uint16Array]", i1 = "[object Uint32Array]";
function a1(e, r, t) {
  var n = e.constructor;
  switch (r) {
    case Yh:
      return Mh(e);
    case Kh:
    case Vh:
      return new n(+e);
    case Bh:
      return Fh(e, t);
    case Jh:
    case Xh:
    case Zh:
    case Qh:
    case e1:
    case r1:
    case t1:
    case n1:
    case i1:
      return zh(e, t);
    case Uh:
      return new n();
    case Gh:
    case Wh:
      return new n(e);
    case qh:
      return Dh(e);
    case kh:
      return new n();
    case Hh:
      return Lh(e);
  }
}
var s1 = a1, o1 = ue, xi = Object.create, u1 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(r) {
    if (!o1(r))
      return {};
    if (xi)
      return xi(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), rs = u1, c1 = rs, f1 = Xr, l1 = ot;
function d1(e) {
  return typeof e.constructor == "function" && !l1(e) ? c1(f1(e)) : {};
}
var ts = d1, p1 = br, h1 = de, v1 = "[object Map]";
function y1(e) {
  return h1(e) && p1(e) == v1;
}
var g1 = y1, m1 = g1, $1 = Fe, Ri = on, Mi = Ri && Ri.isMap, _1 = Mi ? $1(Mi) : m1, b1 = _1, w1 = br, A1 = de, C1 = "[object Set]";
function E1(e) {
  return A1(e) && w1(e) == C1;
}
var O1 = E1, P1 = O1, T1 = Fe, Fi = on, Di = Fi && Fi.isSet, S1 = Di ? T1(Di) : P1, I1 = S1, N1 = nt, j1 = ln, x1 = pn, R1 = Dp, M1 = eh, F1 = Xa, D1 = lt, L1 = ah, z1 = vh, K1 = La, V1 = Qa, U1 = br, G1 = Ah, q1 = s1, k1 = ts, W1 = ne, H1 = rr, Y1 = b1, B1 = ue, J1 = I1, X1 = _r, Z1 = ar, Q1 = 1, ev = 2, rv = 4, ns = "[object Arguments]", tv = "[object Array]", nv = "[object Boolean]", iv = "[object Date]", av = "[object Error]", is = "[object Function]", sv = "[object GeneratorFunction]", ov = "[object Map]", uv = "[object Number]", as = "[object Object]", cv = "[object RegExp]", fv = "[object Set]", lv = "[object String]", dv = "[object Symbol]", pv = "[object WeakMap]", hv = "[object ArrayBuffer]", vv = "[object DataView]", yv = "[object Float32Array]", gv = "[object Float64Array]", mv = "[object Int8Array]", $v = "[object Int16Array]", _v = "[object Int32Array]", bv = "[object Uint8Array]", wv = "[object Uint8ClampedArray]", Av = "[object Uint16Array]", Cv = "[object Uint32Array]", Y = {};
Y[ns] = Y[tv] = Y[hv] = Y[vv] = Y[nv] = Y[iv] = Y[yv] = Y[gv] = Y[mv] = Y[$v] = Y[_v] = Y[ov] = Y[uv] = Y[as] = Y[cv] = Y[fv] = Y[lv] = Y[dv] = Y[bv] = Y[wv] = Y[Av] = Y[Cv] = !0;
Y[av] = Y[is] = Y[pv] = !1;
function Fr(e, r, t, n, a, i) {
  var s, o = r & Q1, u = r & ev, c = r & rv;
  if (t && (s = a ? t(e, n, a, i) : t(e)), s !== void 0)
    return s;
  if (!B1(e))
    return e;
  var f = W1(e);
  if (f) {
    if (s = G1(e), !o)
      return D1(e, s);
  } else {
    var h = U1(e), p = h == is || h == sv;
    if (H1(e))
      return F1(e, o);
    if (h == as || h == ns || p && !a) {
      if (s = u || p ? {} : k1(e), !o)
        return u ? z1(e, M1(s, e)) : L1(e, R1(s, e));
    } else {
      if (!Y[h])
        return a ? e : {};
      s = q1(e, h, o);
    }
  }
  i || (i = new N1());
  var v = i.get(e);
  if (v)
    return v;
  i.set(e, s), J1(e) ? e.forEach(function(_) {
    s.add(Fr(_, r, t, _, e, i));
  }) : Y1(e) && e.forEach(function(_, g) {
    s.set(g, Fr(_, r, t, g, e, i));
  });
  var $ = c ? u ? V1 : K1 : u ? Z1 : X1, b = f ? void 0 : $(e);
  return j1(b || e, function(_, g) {
    b && (g = _, _ = e[g]), x1(s, g, Fr(_, r, t, g, e, i));
  }), s;
}
var ss = Fr;
function Ev(e) {
  var r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
var os = Ev;
function Ov(e, r, t) {
  var n = -1, a = e.length;
  r < 0 && (r = -r > a ? 0 : a + r), t = t > a ? a : t, t < 0 && (t += a), a = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + r];
  return i;
}
var Pv = Ov, Tv = ct, Sv = Pv;
function Iv(e, r) {
  return r.length < 2 ? e : Tv(e, Sv(r, 0, -1));
}
var Nv = Iv, jv = wr, xv = os, Rv = Nv, Mv = Le;
function Fv(e, r) {
  return r = jv(r, e), e = Rv(e, r), e == null || delete e[Mv(xv(r))];
}
var Dv = Fv, Lv = Be;
function zv(e) {
  return Lv(e) ? void 0 : e;
}
var Kv = zv, Li = Ye, Vv = mr, Uv = ne, zi = Li ? Li.isConcatSpreadable : void 0;
function Gv(e) {
  return Uv(e) || Vv(e) || !!(zi && e && e[zi]);
}
var qv = Gv, kv = nn, Wv = qv;
function us(e, r, t, n, a) {
  var i = -1, s = e.length;
  for (t || (t = Wv), a || (a = []); ++i < s; ) {
    var o = e[i];
    r > 0 && t(o) ? r > 1 ? us(o, r - 1, t, n, a) : kv(a, o) : n || (a[a.length] = o);
  }
  return a;
}
var dt = us, Hv = dt;
function Yv(e) {
  var r = e == null ? 0 : e.length;
  return r ? Hv(e, 1) : [];
}
var vn = Yv;
function Bv(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var cs = Bv, Jv = cs, Ki = Math.max;
function Xv(e, r, t) {
  return r = Ki(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, a = -1, i = Ki(n.length - r, 0), s = Array(i); ++a < i; )
      s[a] = n[r + a];
    a = -1;
    for (var o = Array(r + 1); ++a < r; )
      o[a] = n[a];
    return o[r] = t(s), Jv(e, this, o);
  };
}
var fs = Xv;
function Zv(e) {
  return function() {
    return e;
  };
}
var Qv = Zv;
function ey(e) {
  return e;
}
var Ar = ey, ry = Qv, Vi = Ja, ty = Ar, ny = Vi ? function(e, r) {
  return Vi(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ry(r),
    writable: !0
  });
} : ty, iy = ny, ay = 800, sy = 16, oy = Date.now;
function uy(e) {
  var r = 0, t = 0;
  return function() {
    var n = oy(), a = sy - (n - t);
    if (t = n, a > 0) {
      if (++r >= ay)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var cy = uy, fy = iy, ly = cy, dy = ly(fy), ls = dy, py = vn, hy = fs, vy = ls;
function yy(e) {
  return vy(hy(e, void 0, py), e + "");
}
var gy = yy, my = we, $y = ss, _y = Dv, by = wr, wy = ir, Ay = Kv, Cy = gy, Ey = Qa, Oy = 1, Py = 2, Ty = 4, Sy = Cy(function(e, r) {
  var t = {};
  if (e == null)
    return t;
  var n = !1;
  r = my(r, function(i) {
    return i = by(i, e), n || (n = i.length > 1), i;
  }), wy(e, Ey(e), t), n && (t = $y(t, Oy | Py | Ty, Ay));
  for (var a = r.length; a--; )
    _y(t, r[a]);
  return t;
}), Iy = Sy;
const Ny = /* @__PURE__ */ Q(Iy);
function yn(e, r) {
  const t = r[e];
  return [Ny(r, [e]), t];
}
function ds(e, r = {}, t = []) {
  const n = e || "";
  let a;
  if (n.startsWith("#"))
    a = decodeURIComponent(n.substring(1));
  else
    throw new Error(`Could not find a definition for ${e}.`);
  const i = ft.get(r, a);
  if (i === void 0)
    throw new Error(`Could not find a definition for ${e}.`);
  const s = i[me];
  if (s) {
    if (t.includes(s)) {
      if (t.length === 1)
        throw new Error(`Definition for ${e} is a circular reference`);
      const [f, ...h] = t, p = [...h, n, f].join(" -> ");
      throw new Error(`Definition for ${f} contains a circular reference through ${p}`);
    }
    const [o, u] = yn(me, i), c = ds(u, r, [...t, n]);
    return Object.keys(o).length > 0 ? { ...o, ...c } : c;
  }
  return i;
}
function ps(e, r = {}) {
  return ds(e, r, []);
}
var jy = Object.prototype, xy = jy.hasOwnProperty;
function Ry(e, r) {
  return e != null && xy.call(e, r);
}
var My = Ry, Fy = wr, Dy = mr, Ly = ne, zy = st, Ky = sn, Vy = Le;
function Uy(e, r, t) {
  r = Fy(r, e);
  for (var n = -1, a = r.length, i = !1; ++n < a; ) {
    var s = Vy(r[n]);
    if (!(i = e != null && t(e, s)))
      break;
    e = e[s];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Ky(a) && zy(s, a) && (Ly(e) || Dy(e)));
}
var hs = Uy, Gy = My, qy = hs;
function ky(e, r) {
  return e != null && qy(e, r, Gy);
}
var Wy = ky;
const pr = /* @__PURE__ */ Q(Wy);
var Hy = be, Yy = de, By = "[object Number]";
function Jy(e) {
  return typeof e == "number" || Yy(e) && Hy(e) == By;
}
var Xy = Jy;
const vs = /* @__PURE__ */ Q(Xy);
var Zy = be, Qy = ne, eg = de, rg = "[object String]";
function tg(e) {
  return typeof e == "string" || !Qy(e) && eg(e) && Zy(e) == rg;
}
var ng = tg;
const ys = /* @__PURE__ */ Q(ng);
function ig(e, r, t, n) {
  var a = -1, i = e == null ? 0 : e.length;
  for (n && i && (t = e[++a]); ++a < i; )
    t = r(t, e[a], a, e);
  return t;
}
var ag = ig;
function sg(e) {
  return function(r, t, n) {
    for (var a = -1, i = Object(r), s = n(r), o = s.length; o--; ) {
      var u = s[e ? o : ++a];
      if (t(i[u], u, i) === !1)
        break;
    }
    return r;
  };
}
var og = sg, ug = og, cg = ug(), gs = cg, fg = gs, lg = _r;
function dg(e, r) {
  return e && fg(e, r, lg);
}
var ms = dg, pg = De;
function hg(e, r) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!pg(t))
      return e(t, n);
    for (var a = t.length, i = r ? a : -1, s = Object(t); (r ? i-- : ++i < a) && n(s[i], i, s) !== !1; )
      ;
    return t;
  };
}
var vg = hg, yg = ms, gg = vg, mg = gg(yg), gn = mg, $g = nt, _g = ut, bg = 1, wg = 2;
function Ag(e, r, t, n) {
  var a = t.length, i = a, s = !n;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var o = t[a];
    if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    o = t[a];
    var u = o[0], c = e[u], f = o[1];
    if (s && o[2]) {
      if (c === void 0 && !(u in e))
        return !1;
    } else {
      var h = new $g();
      if (n)
        var p = n(c, f, u, e, r, h);
      if (!(p === void 0 ? _g(f, c, bg | wg, n, h) : p))
        return !1;
    }
  }
  return !0;
}
var Cg = Ag, Eg = ue;
function Og(e) {
  return e === e && !Eg(e);
}
var $s = Og, Pg = $s, Tg = _r;
function Sg(e) {
  for (var r = Tg(e), t = r.length; t--; ) {
    var n = r[t], a = e[n];
    r[t] = [n, a, Pg(a)];
  }
  return r;
}
var Ig = Sg;
function Ng(e, r) {
  return function(t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
var _s = Ng, jg = Cg, xg = Ig, Rg = _s;
function Mg(e) {
  var r = xg(e);
  return r.length == 1 && r[0][2] ? Rg(r[0][0], r[0][1]) : function(t) {
    return t === e || jg(t, e, r);
  };
}
var Fg = Mg;
function Dg(e, r) {
  return e != null && r in Object(e);
}
var Lg = Dg, zg = Lg, Kg = hs;
function Vg(e, r) {
  return e != null && Kg(e, r, zg);
}
var Ug = Vg, Gg = ut, qg = Wa, kg = Ug, Wg = un, Hg = $s, Yg = _s, Bg = Le, Jg = 1, Xg = 2;
function Zg(e, r) {
  return Wg(e) && Hg(r) ? Yg(Bg(e), r) : function(t) {
    var n = qg(t, e);
    return n === void 0 && n === r ? kg(t, e) : Gg(r, n, Jg | Xg);
  };
}
var Qg = Zg;
function em(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var rm = em, tm = ct;
function nm(e) {
  return function(r) {
    return tm(r, e);
  };
}
var im = nm, am = rm, sm = im, om = un, um = Le;
function cm(e) {
  return om(e) ? am(um(e)) : sm(e);
}
var fm = cm, lm = Fg, dm = Qg, pm = Ar, hm = ne, vm = fm;
function ym(e) {
  return typeof e == "function" ? e : e == null ? pm : typeof e == "object" ? hm(e) ? dm(e[0], e[1]) : lm(e) : vm(e);
}
var mn = ym;
function gm(e, r, t, n, a) {
  return a(e, function(i, s, o) {
    t = n ? (n = !1, i) : r(t, i, s, o);
  }), t;
}
var mm = gm, $m = ag, _m = gn, bm = mn, wm = mm, Am = ne;
function Cm(e, r, t) {
  var n = Am(e) ? $m : wm, a = arguments.length < 3;
  return n(e, bm(r), t, a, _m);
}
var Em = Cm;
const Om = /* @__PURE__ */ Q(Em);
var Pm = Ar;
function Tm(e) {
  return typeof e == "function" ? e : Pm;
}
var bs = Tm, Sm = /\s/;
function Im(e) {
  for (var r = e.length; r-- && Sm.test(e.charAt(r)); )
    ;
  return r;
}
var Nm = Im, jm = Nm, xm = /^\s+/;
function Rm(e) {
  return e && e.slice(0, jm(e) + 1).replace(xm, "");
}
var Mm = Rm, Fm = Mm, Ui = ue, Dm = nr, Gi = NaN, Lm = /^[-+]0x[0-9a-f]+$/i, zm = /^0b[01]+$/i, Km = /^0o[0-7]+$/i, Vm = parseInt;
function Um(e) {
  if (typeof e == "number")
    return e;
  if (Dm(e))
    return Gi;
  if (Ui(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ui(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Fm(e);
  var t = zm.test(e);
  return t || Km.test(e) ? Vm(e.slice(2), t ? 2 : 8) : Lm.test(e) ? Gi : +e;
}
var Gm = Um, qm = Gm, qi = 1 / 0, km = 17976931348623157e292;
function Wm(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = qm(e), e === qi || e === -qi) {
    var r = e < 0 ? -1 : 1;
    return r * km;
  }
  return e === e ? e : 0;
}
var Hm = Wm, Ym = Hm;
function Bm(e) {
  var r = Ym(e), t = r % 1;
  return r === r ? t ? r - t : r : 0;
}
var Jm = Bm, Xm = Ra, Zm = bs, Qm = Jm, e$ = 9007199254740991, Tt = 4294967295, r$ = Math.min;
function t$(e, r) {
  if (e = Qm(e), e < 1 || e > e$)
    return [];
  var t = Tt, n = r$(e, Tt);
  r = Zm(r), e -= Tt;
  for (var a = Xm(n, r); ++t < e; )
    r(t);
  return a;
}
var n$ = t$;
const ws = /* @__PURE__ */ Q(n$);
function As(e, r, t) {
  var n;
  if (e && t) {
    const a = Z(e, t);
    if (a === void 0)
      return;
    for (let i = 0; i < r.length; i++) {
      const s = r[i], o = Z(s, [ye, t], {});
      if (!(o.type === "object" || o.type === "array") && (o.const === a || !((n = o.enum) === null || n === void 0) && n.includes(a)))
        return i;
    }
  }
}
function i$(e, r, t, n, a) {
  if (r === void 0)
    return 0;
  const i = As(r, t, a);
  if (vs(i))
    return i;
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    if (a && pr(o, [ye, a])) {
      const u = Z(r, a), c = Z(o, [ye, a], {});
      if (e.isValid(c, u, n))
        return s;
    } else if (o[ye]) {
      const u = {
        anyOf: Object.keys(o[ye]).map((f) => ({
          required: [f]
        }))
      };
      let c;
      if (o.anyOf) {
        const { ...f } = o;
        f.allOf ? f.allOf = f.allOf.slice() : f.allOf = [], f.allOf.push(u), c = f;
      } else
        c = Object.assign({}, o, u);
      if (delete c.required, e.isValid(c, r, n))
        return s;
    } else if (e.isValid(o, r, n))
      return s;
  }
  return 0;
}
function Cs(e, r, t, n, a) {
  return i$(e, r, t, n, a);
}
var a$ = ut;
function s$(e, r) {
  return a$(e, r);
}
var $n = s$;
const o$ = /* @__PURE__ */ Q($n);
var u$ = pn, c$ = wr, f$ = st, ki = ue, l$ = Le;
function d$(e, r, t, n) {
  if (!ki(e))
    return e;
  r = c$(r, e);
  for (var a = -1, i = r.length, s = i - 1, o = e; o != null && ++a < i; ) {
    var u = l$(r[a]), c = t;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != s) {
      var f = o[u];
      c = n ? n(f, u, o) : void 0, c === void 0 && (c = ki(f) ? f : f$(r[a + 1]) ? [] : {});
    }
    u$(o, u, c), o = o[u];
  }
  return e;
}
var Es = d$, p$ = Es;
function h$(e, r, t) {
  return e == null ? e : p$(e, r, t);
}
var v$ = h$;
const Gt = /* @__PURE__ */ Q(v$);
var y$ = ln, g$ = rs, m$ = ms, $$ = mn, _$ = Xr, b$ = ne, w$ = rr, A$ = et, C$ = ue, E$ = $r;
function O$(e, r, t) {
  var n = b$(e), a = n || w$(e) || E$(e);
  if (r = $$(r), t == null) {
    var i = e && e.constructor;
    a ? t = n ? new i() : [] : C$(e) ? t = A$(i) ? g$(_$(e)) : {} : t = {};
  }
  return (a ? y$ : m$)(e, function(s, o, u) {
    return r(t, s, o, u);
  }), t;
}
var P$ = O$;
const T$ = /* @__PURE__ */ Q(P$);
var S$ = dn, I$ = Je;
function N$(e, r, t) {
  (t !== void 0 && !I$(e[r], t) || t === void 0 && !(r in e)) && S$(e, r, t);
}
var Os = N$, j$ = De, x$ = de;
function R$(e) {
  return x$(e) && j$(e);
}
var pt = R$;
function M$(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
var Ps = M$, F$ = ir, D$ = ar;
function L$(e) {
  return F$(e, D$(e));
}
var z$ = L$, Wi = Os, K$ = Xa, V$ = es, U$ = lt, G$ = ts, Hi = mr, Yi = ne, q$ = pt, k$ = rr, W$ = et, H$ = ue, Y$ = Be, B$ = $r, Bi = Ps, J$ = z$;
function X$(e, r, t, n, a, i, s) {
  var o = Bi(e, t), u = Bi(r, t), c = s.get(u);
  if (c) {
    Wi(e, t, c);
    return;
  }
  var f = i ? i(o, u, t + "", e, r, s) : void 0, h = f === void 0;
  if (h) {
    var p = Yi(u), v = !p && k$(u), $ = !p && !v && B$(u);
    f = u, p || v || $ ? Yi(o) ? f = o : q$(o) ? f = U$(o) : v ? (h = !1, f = K$(u, !0)) : $ ? (h = !1, f = V$(u, !0)) : f = [] : Y$(u) || Hi(u) ? (f = o, Hi(o) ? f = J$(o) : (!H$(o) || W$(o)) && (f = G$(u))) : h = !1;
  }
  h && (s.set(u, f), a(f, u, n, i, s), s.delete(u)), Wi(e, t, f);
}
var Z$ = X$, Q$ = nt, e_ = Os, r_ = gs, t_ = Z$, n_ = ue, i_ = ar, a_ = Ps;
function Ts(e, r, t, n, a) {
  e !== r && r_(r, function(i, s) {
    if (a || (a = new Q$()), n_(i))
      t_(e, r, s, t, Ts, n, a);
    else {
      var o = n ? n(a_(e, s), i, s + "", e, r, a) : void 0;
      o === void 0 && (o = i), e_(e, s, o);
    }
  }, i_);
}
var _n = Ts, s_ = Ar, o_ = fs, u_ = ls;
function c_(e, r) {
  return u_(o_(e, r, s_), e + "");
}
var Te = c_, f_ = Je, l_ = De, d_ = st, p_ = ue;
function h_(e, r, t) {
  if (!p_(t))
    return !1;
  var n = typeof r;
  return (n == "number" ? l_(t) && d_(r, t.length) : n == "string" && r in t) ? f_(t[r], e) : !1;
}
var bn = h_, v_ = Te, y_ = bn;
function g_(e) {
  return v_(function(r, t) {
    var n = -1, a = t.length, i = a > 1 ? t[a - 1] : void 0, s = a > 2 ? t[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, s && y_(t[0], t[1], s) && (i = a < 3 ? void 0 : i, a = 1), r = Object(r); ++n < a; ) {
      var o = t[n];
      o && e(r, o, n, i);
    }
    return r;
  });
}
var Ss = g_, m_ = _n, $_ = Ss, __ = $_(function(e, r, t) {
  m_(e, r, t);
}), b_ = __;
const w_ = /* @__PURE__ */ Q(b_);
var A_ = dt, C_ = 1 / 0;
function E_(e) {
  var r = e == null ? 0 : e.length;
  return r ? A_(e, C_) : [];
}
var wn = E_;
const O_ = /* @__PURE__ */ Q(wn);
function P_(e, r, t, n) {
  for (var a = e.length, i = t + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (r(e[i], i, e))
      return i;
  return -1;
}
var T_ = P_;
function S_(e) {
  return e !== e;
}
var I_ = S_;
function N_(e, r, t) {
  for (var n = t - 1, a = e.length; ++n < a; )
    if (e[n] === r)
      return n;
  return -1;
}
var j_ = N_, x_ = T_, R_ = I_, M_ = j_;
function F_(e, r, t) {
  return r === r ? M_(e, r, t) : x_(e, R_, t);
}
var Is = F_, D_ = Is;
function L_(e, r) {
  var t = e == null ? 0 : e.length;
  return !!t && D_(e, r, 0) > -1;
}
var An = L_;
function z_(e, r, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (t(r, e[n]))
      return !0;
  return !1;
}
var Cn = z_;
function K_() {
}
var V_ = K_, St = za, U_ = V_, G_ = tn, q_ = 1 / 0, k_ = St && 1 / G_(new St([, -0]))[1] == q_ ? function(e) {
  return new St(e);
} : U_, W_ = k_, H_ = it, Y_ = An, B_ = Cn, J_ = at, X_ = W_, Z_ = tn, Q_ = 200;
function e4(e, r, t) {
  var n = -1, a = Y_, i = e.length, s = !0, o = [], u = o;
  if (t)
    s = !1, a = B_;
  else if (i >= Q_) {
    var c = r ? null : X_(e);
    if (c)
      return Z_(c);
    s = !1, a = J_, u = new H_();
  } else
    u = r ? [] : o;
  e:
    for (; ++n < i; ) {
      var f = e[n], h = r ? r(f) : f;
      if (f = t || f !== 0 ? f : 0, s && h === h) {
        for (var p = u.length; p--; )
          if (u[p] === h)
            continue e;
        r && u.push(h), o.push(f);
      } else a(u, h, t) || (u !== o && u.push(h), o.push(f));
    }
  return o;
}
var En = e4, r4 = En;
function t4(e) {
  return e && e.length ? r4(e) : [];
}
var ht = t4;
const n4 = /* @__PURE__ */ Q(ht);
var i4 = ss, a4 = 1, s4 = 4;
function o4(e) {
  return i4(e, a4 | s4);
}
var Ns = o4;
const u4 = /* @__PURE__ */ Q(Ns);
var c4 = gn, f4 = De;
function l4(e, r) {
  var t = -1, n = f4(e) ? Array(e.length) : [];
  return c4(e, function(a, i, s) {
    n[++t] = r(a, i, s);
  }), n;
}
var d4 = l4;
function p4(e, r) {
  var t = e.length;
  for (e.sort(r); t--; )
    e[t] = e[t].value;
  return e;
}
var h4 = p4, Ji = nr;
function v4(e, r) {
  if (e !== r) {
    var t = e !== void 0, n = e === null, a = e === e, i = Ji(e), s = r !== void 0, o = r === null, u = r === r, c = Ji(r);
    if (!o && !c && !i && e > r || i && s && u && !o && !c || n && s && u || !t && u || !a)
      return 1;
    if (!n && !i && !c && e < r || c && t && a && !n && !i || o && t && a || !s && a || !u)
      return -1;
  }
  return 0;
}
var y4 = v4, g4 = y4;
function m4(e, r, t) {
  for (var n = -1, a = e.criteria, i = r.criteria, s = a.length, o = t.length; ++n < s; ) {
    var u = g4(a[n], i[n]);
    if (u) {
      if (n >= o)
        return u;
      var c = t[n];
      return u * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - r.index;
}
var $4 = m4, It = we, _4 = ct, b4 = mn, w4 = d4, A4 = h4, C4 = Fe, E4 = $4, O4 = Ar, P4 = ne;
function T4(e, r, t) {
  r.length ? r = It(r, function(i) {
    return P4(i) ? function(s) {
      return _4(s, i.length === 1 ? i[0] : i);
    } : i;
  }) : r = [O4];
  var n = -1;
  r = It(r, C4(b4));
  var a = w4(e, function(i, s, o) {
    var u = It(r, function(c) {
      return c(i);
    });
    return { criteria: u, index: ++n, value: i };
  });
  return A4(a, function(i, s) {
    return E4(i, s, t);
  });
}
var S4 = T4, I4 = dt, N4 = S4, j4 = Te, Xi = bn, x4 = j4(function(e, r) {
  if (e == null)
    return [];
  var t = r.length;
  return t > 1 && Xi(e, r[0], r[1]) ? r = [] : t > 2 && Xi(r[0], r[1], r[2]) && (r = [r[0]]), N4(e, I4(r, 1), []);
}), js = x4, R4 = En;
function M4(e, r) {
  return r = typeof r == "function" ? r : void 0, e && e.length ? R4(e, void 0, r) : [];
}
var On = M4, F4 = Te, D4 = Je, L4 = bn, z4 = ar, xs = Object.prototype, K4 = xs.hasOwnProperty, V4 = F4(function(e, r) {
  e = Object(e);
  var t = -1, n = r.length, a = n > 2 ? r[2] : void 0;
  for (a && L4(r[0], r[1], a) && (n = 1); ++t < n; )
    for (var i = r[t], s = z4(i), o = -1, u = s.length; ++o < u; ) {
      var c = s[o], f = e[c];
      (f === void 0 || D4(f, xs[c]) && !K4.call(e, c)) && (e[c] = i[c]);
    }
  return e;
}), U4 = V4, G4 = it, q4 = An, k4 = Cn, W4 = we, H4 = Fe, Zi = at, Y4 = Math.min;
function B4(e, r, t) {
  for (var n = t ? k4 : q4, a = e[0].length, i = e.length, s = i, o = Array(i), u = 1 / 0, c = []; s--; ) {
    var f = e[s];
    s && r && (f = W4(f, H4(r))), u = Y4(f.length, u), o[s] = !t && (r || a >= 120 && f.length >= 120) ? new G4(s && f) : void 0;
  }
  f = e[0];
  var h = -1, p = o[0];
  e:
    for (; ++h < a && c.length < u; ) {
      var v = f[h], $ = r ? r(v) : v;
      if (v = t || v !== 0 ? v : 0, !(p ? Zi(p, $) : n(c, $, t))) {
        for (s = i; --s; ) {
          var b = o[s];
          if (!(b ? Zi(b, $) : n(e[s], $, t)))
            continue e;
        }
        p && p.push($), c.push(v);
      }
    }
  return c;
}
var Rs = B4, J4 = pt;
function X4(e) {
  return J4(e) ? e : [];
}
var Ms = X4, Z4 = we, Q4 = Rs, eb = Te, rb = Ms, tb = os, nb = eb(function(e) {
  var r = tb(e), t = Z4(e, rb);
  return r = typeof r == "function" ? r : void 0, r && t.pop(), t.length && t[0] === e[0] ? Q4(t, void 0, r) : [];
}), Fs = nb, ib = be, ab = de, sb = "[object Boolean]";
function ob(e) {
  return e === !0 || e === !1 || ab(e) && ib(e) == sb;
}
var ub = ob, he = $n, cb = js, Pn = ht, Qi = On, fb = U4, lb = Fs, kr = Be, Nt = ub, ea = (e) => Array.isArray(e) ? e : [e], le = (e) => e === void 0, jr = (e) => kr(e) || Array.isArray(e) ? Object.keys(e) : [], Ge = (e, r) => e.hasOwnProperty(r), ke = (e) => cb(Pn(e)), ra = (e) => le(e) || Array.isArray(e) && e.length === 0, db = (e, r, t, n) => r && Ge(r, t) && e && Ge(e, t) && n(e[t], r[t]), jt = (e, r) => le(e) && r === 0 || le(r) && e === 0 || he(e, r), pb = (e, r) => le(e) && r === !1 || le(r) && e === !1 || he(e, r), ta = (e) => le(e) || he(e, {}) || e === !0, xr = (e) => le(e) || he(e, {}), na = (e) => le(e) || kr(e) || e === !0 || e === !1;
function ia(e, r) {
  return ra(e) && ra(r) ? !0 : he(ke(e), ke(r));
}
function hb(e, r) {
  return e = ea(e), r = ea(r), he(ke(e), ke(r));
}
function Dr(e, r, t, n) {
  var a = Pn(jr(e).concat(jr(r)));
  return xr(e) && xr(r) ? !0 : xr(e) && jr(r).length || xr(r) && jr(e).length ? !1 : a.every(function(i) {
    var s = e[i], o = r[i];
    return Array.isArray(s) && Array.isArray(o) ? he(ke(e), ke(r)) : Array.isArray(s) && !Array.isArray(o) || Array.isArray(o) && !Array.isArray(s) ? !1 : db(e, r, i, n);
  });
}
function vb(e, r, t, n) {
  return kr(e) && kr(r) ? n(e, r) : Array.isArray(e) && Array.isArray(r) ? Dr(e, r, t, n) : he(e, r);
}
function xt(e, r, t, n) {
  var a = Qi(e, n), i = Qi(r, n), s = lb(a, i, n);
  return s.length === Math.max(a.length, i.length);
}
var yb = {
  title: he,
  uniqueItems: pb,
  minLength: jt,
  minItems: jt,
  minProperties: jt,
  required: ia,
  enum: ia,
  type: hb,
  items: vb,
  anyOf: xt,
  allOf: xt,
  oneOf: xt,
  properties: Dr,
  patternProperties: Dr,
  dependencies: Dr
}, gb = [
  "properties",
  "patternProperties",
  "dependencies",
  "uniqueItems",
  "minLength",
  "minItems",
  "minProperties",
  "required"
], mb = ["additionalProperties", "additionalItems", "contains", "propertyNames", "not"];
function qt(e, r, t) {
  if (t = fb(t, {
    ignore: []
  }), ta(e) && ta(r))
    return !0;
  if (!na(e) || !na(r))
    throw new Error("Either of the values are not a JSON schema.");
  if (e === r)
    return !0;
  if (Nt(e) && Nt(r))
    return e === r;
  if (e === void 0 && r === !1 || r === void 0 && e === !1 || le(e) && !le(r) || !le(e) && le(r))
    return !1;
  var n = Pn(Object.keys(e).concat(Object.keys(r)));
  if (t.ignore.length && (n = n.filter((i) => t.ignore.indexOf(i) === -1)), !n.length)
    return !0;
  function a(i, s) {
    return qt(i, s, t);
  }
  return n.every(function(i) {
    var s = e[i], o = r[i];
    if (mb.indexOf(i) !== -1)
      return qt(s, o, t);
    var u = yb[i];
    if (u || (u = he), he(s, o))
      return !0;
    if (gb.indexOf(i) === -1 && (!Ge(e, i) && Ge(r, i) || Ge(e, i) && !Ge(r, i)))
      return s === o;
    var c = u(s, o, i, a);
    if (!Nt(c))
      throw new Error("Comparer must return true or false");
    return c;
  });
}
var Tn = qt;
function $b(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}
var Sn = Array.isArray || $b;
function _b(e) {
  return (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]") && e.valueOf() === e.valueOf();
}
var bb = _b, wb = bb;
function Ab(e) {
  return wb(e) && e % 1 === 0;
}
var Cb = Ab, Eb = Sn, Ob = Cb;
function Pb(e) {
  var r;
  if (!Eb(e) || (r = e.length, !r))
    return !1;
  for (var t = 0; t < r; t++)
    if (!Ob(e[t]))
      return !1;
  return !0;
}
var Ds = Pb;
function Tb(e) {
  return typeof e == "function";
}
var Ls = Tb, Sb = Sn, aa = Ds, Ib = Ls, Rr = Math.pow(2, 31) - 1;
function sa(e, r) {
  var t = 1, n;
  if (e === 0)
    return r;
  if (r === 0)
    return e;
  for (; e % 2 === 0 && r % 2 === 0; )
    e = e / 2, r = r / 2, t = t * 2;
  for (; e % 2 === 0; )
    e = e / 2;
  for (; r; ) {
    for (; r % 2 === 0; )
      r = r / 2;
    e > r && (n = r, r = e, e = n), r = r - e;
  }
  return t * e;
}
function oa(e, r) {
  var t = 0, n;
  if (e === 0)
    return r;
  if (r === 0)
    return e;
  for (; !(e & 1) && !(r & 1); )
    e >>>= 1, r >>>= 1, t++;
  for (; !(e & 1); )
    e >>>= 1;
  for (; r; ) {
    for (; !(r & 1); )
      r >>>= 1;
    e > r && (n = r, r = e, e = n), r = r - e;
  }
  return e << t;
}
function Nb() {
  var e = arguments.length, r, t, n, a, i, s, o;
  for (r = new Array(e), o = 0; o < e; o++)
    r[o] = arguments[o];
  if (aa(r)) {
    if (e === 2)
      return i = r[0], s = r[1], i < 0 && (i = -i), s < 0 && (s = -s), i <= Rr && s <= Rr ? oa(i, s) : sa(i, s);
    n = r;
  } else if (Sb(r[0]))
    if (e > 1) {
      if (n = r[0], t = r[1], !Ib(t))
        throw new TypeError("gcd()::invalid input argument. Accessor must be a function. Value: `" + t + "`.");
    } else
      n = r[0];
  else throw new TypeError("gcd()::invalid input argument. Must provide an array of integers. Value: `" + r[0] + "`.");
  if (a = n.length, a < 2)
    return null;
  if (t) {
    for (i = new Array(a), o = 0; o < a; o++)
      i[o] = t(n[o], o);
    n = i;
  }
  if (e < 3 && !aa(n))
    throw new TypeError("gcd()::invalid input argument. Accessed array values must be integers. Value: `" + n + "`.");
  for (o = 0; o < a; o++)
    i = n[o], i < 0 && (n[o] = -i);
  for (i = n[0], o = 1; o < a; o++)
    s = n[o], s <= Rr && i <= Rr ? i = oa(i, s) : i = sa(i, s);
  return i;
}
var jb = Nb, ua = jb, xb = Sn, ca = Ds, Rb = Ls;
function Mb() {
  var e = arguments.length, r, t, n, a, i, s, o;
  for (r = new Array(e), o = 0; o < e; o++)
    r[o] = arguments[o];
  if (ca(r)) {
    if (e === 2)
      return i = r[0], s = r[1], i < 0 && (i = -i), s < 0 && (s = -s), i === 0 || s === 0 ? 0 : i / ua(i, s) * s;
    n = r;
  } else if (xb(r[0]))
    if (e > 1) {
      if (n = r[0], t = r[1], !Rb(t))
        throw new TypeError("lcm()::invalid input argument. Accessor must be a function. Value: `" + t + "`.");
    } else
      n = r[0];
  else throw new TypeError("lcm()::invalid input argument. Must provide an array of integers. Value: `" + r[0] + "`.");
  if (a = n.length, a < 2)
    return null;
  if (t) {
    for (i = new Array(a), o = 0; o < a; o++)
      i[o] = t(n[o], o);
    n = i;
  }
  if (e < 3 && !ca(n))
    throw new TypeError("lcm()::invalid input argument. Accessed array values must be integers. Value: `" + n + "`.");
  for (o = 0; o < a; o++)
    i = n[o], i < 0 && (n[o] = -i);
  for (i = n[0], o = 1; o < a; o++) {
    if (s = n[o], i === 0 || s === 0)
      return 0;
    i = i / ua(i, s) * s;
  }
  return i;
}
var Fb = Mb, Db = _n, fa = ue;
function zs(e, r, t, n, a, i) {
  return fa(e) && fa(r) && (i.set(r, e), Db(e, r, void 0, zs, i), i.delete(r)), e;
}
var Lb = zs, zb = _n, Kb = Ss, Vb = Kb(function(e, r, t, n) {
  zb(e, r, t, n);
}), Ub = Vb, Gb = cs, qb = Te, kb = Lb, Wb = Ub, Hb = qb(function(e) {
  return e.push(void 0, kb), Gb(Wb, void 0, e);
}), Yb = Hb, Bb = we, Jb = Rs, Xb = Te, Zb = Ms, Qb = Xb(function(e) {
  var r = Bb(e, Zb);
  return r.length && r[0] === e[0] ? Jb(r) : [];
}), e3 = Qb;
function r3(e, r, t, n) {
  for (var a = t - 1, i = e.length; ++a < i; )
    if (n(e[a], r))
      return a;
  return -1;
}
var t3 = r3, n3 = we, i3 = Is, a3 = t3, s3 = Fe, o3 = lt, u3 = Array.prototype, la = u3.splice;
function c3(e, r, t, n) {
  var a = n ? a3 : i3, i = -1, s = r.length, o = e;
  for (e === r && (r = o3(r)), t && (o = n3(e, s3(t))); ++i < s; )
    for (var u = 0, c = r[i], f = t ? t(c) : c; (u = a(o, f, u, n)) > -1; )
      o !== e && la.call(o, u, 1), la.call(e, u, 1);
  return e;
}
var f3 = c3, l3 = f3;
function d3(e, r) {
  return e && e.length && r && r.length ? l3(e, r) : e;
}
var p3 = d3, h3 = ln, v3 = gn, y3 = bs, g3 = ne;
function m3(e, r) {
  var t = g3(e) ? h3 : v3;
  return t(e, y3(r));
}
var Ks = m3, $3 = it, _3 = An, b3 = Cn, w3 = we, A3 = Fe, C3 = at, E3 = 200;
function O3(e, r, t, n) {
  var a = -1, i = _3, s = !0, o = e.length, u = [], c = r.length;
  if (!o)
    return u;
  t && (r = w3(r, A3(t))), n ? (i = b3, s = !1) : r.length >= E3 && (i = C3, s = !1, r = new $3(r));
  e:
    for (; ++a < o; ) {
      var f = e[a], h = t == null ? f : t(f);
      if (f = n || f !== 0 ? f : 0, s && h === h) {
        for (var p = c; p--; )
          if (r[p] === h)
            continue e;
        u.push(f);
      } else i(r, h, n) || u.push(f);
    }
  return u;
}
var P3 = O3, T3 = P3, S3 = Te, I3 = pt, N3 = S3(function(e, r) {
  return I3(e) ? T3(e, r) : [];
}), j3 = N3;
const x3 = vn, R3 = wn, Vs = Be, M3 = ht, F3 = On, D3 = j3;
function L3(e) {
  for (const r in e)
    Us(e, r) && Gs(e[r]) && delete e[r];
  return e;
}
const z3 = (e) => M3(R3(e.map(In))), K3 = (e, r) => e.map((t) => t && t[r]), Us = (e, r) => Object.prototype.hasOwnProperty.call(e, r), In = (e) => Vs(e) || Array.isArray(e) ? Object.keys(e) : [], V3 = (e) => e !== void 0, U3 = (e) => Vs(e) || e === !0 || e === !1, Gs = (e) => !In(e).length && e !== !1 && e !== !0, G3 = (e, ...r) => D3.apply(null, [e].concat(x3(r)));
var qs = {
  allUniqueKeys: z3,
  deleteUndefinedProps: L3,
  getValues: K3,
  has: Us,
  isEmptySchema: Gs,
  isSchema: U3,
  keys: In,
  notUndefined: V3,
  uniqWith: F3,
  withoutArr: G3
};
const q3 = Tn, k3 = Ks, {
  allUniqueKeys: W3,
  deleteUndefinedProps: H3,
  getValues: Y3,
  keys: dr,
  notUndefined: B3,
  uniqWith: J3,
  withoutArr: da
} = qs;
function X3(e) {
  k3(e, function(r, t) {
    r === !1 && delete e[t];
  });
}
function pa(e, r) {
  return W3(e).reduce(function(n, a) {
    const i = Y3(e, a), s = J3(i.filter(B3), q3);
    return n[a] = r(s, a), n;
  }, {});
}
var Z3 = {
  keywords: ["properties", "patternProperties", "additionalProperties"],
  resolver(e, r, t, n) {
    n.ignoreAdditionalProperties || (e.forEach(function(i) {
      const s = e.filter((f) => f !== i), o = dr(i.properties), c = dr(i.patternProperties).map((f) => new RegExp(f));
      s.forEach(function(f) {
        const h = dr(f.properties), p = h.filter(($) => c.some((b) => b.test($)));
        da(h, o, p).forEach(function($) {
          f.properties[$] = t.properties([
            f.properties[$],
            i.additionalProperties
          ], $);
        });
      });
    }), e.forEach(function(i) {
      const s = e.filter((u) => u !== i), o = dr(i.patternProperties);
      i.additionalProperties === !1 && s.forEach(function(u) {
        const c = dr(u.patternProperties);
        da(c, o).forEach((h) => delete u.patternProperties[h]);
      });
    }));
    const a = {
      additionalProperties: t.additionalProperties(e.map((i) => i.additionalProperties)),
      patternProperties: pa(e.map((i) => i.patternProperties), t.patternProperties),
      properties: pa(e.map((i) => i.properties), t.properties)
    };
    return a.additionalProperties === !1 && X3(a.properties), H3(a);
  }
};
const Q3 = Tn, e9 = Ks, {
  allUniqueKeys: r9,
  deleteUndefinedProps: t9,
  has: n9,
  isSchema: ks,
  notUndefined: Ws,
  uniqWith: i9
} = qs;
function a9(e) {
  e9(e, function(r, t) {
    r === !1 && e.splice(t, 1);
  });
}
function s9(e, r) {
  return e.map(function(t) {
    if (t)
      if (Array.isArray(t.items)) {
        const n = t.items[r];
        if (ks(n))
          return n;
        if (n9(t, "additionalItems"))
          return t.additionalItems;
      } else
        return t.items;
  });
}
function o9(e) {
  return e.map(function(r) {
    if (r)
      return Array.isArray(r.items) ? r.additionalItems : r.items;
  });
}
function u9(e, r, t) {
  return r9(t).reduce(function(a, i) {
    const s = s9(e, i), o = i9(s.filter(Ws), Q3);
    return a[i] = r(o, i), a;
  }, []);
}
var c9 = {
  keywords: ["items", "additionalItems"],
  resolver(e, r, t) {
    const n = e.map((o) => o.items), a = n.filter(Ws), i = {};
    a.every(ks) ? i.items = t.items(n) : i.items = u9(e, t.items, n);
    let s;
    return a.every(Array.isArray) ? s = e.map((o) => o.additionalItems) : a.some(Array.isArray) && (s = o9(e)), s && (i.additionalItems = t.additionalItems(s)), i.additionalItems === !1 && Array.isArray(i.items) && a9(i.items), t9(i);
  }
};
const Hs = Ns, Wr = Tn, f9 = Fb, l9 = Yb, Ys = vn, Nn = wn, d9 = e3, p9 = Fs, kt = $n, We = Be, h9 = p3, Bs = js, jn = ht, qe = On, Js = Z3, Xs = c9, Mr = (e, r) => e.indexOf(r) !== -1, v9 = (e) => We(e) || e === !0 || e === !1, y9 = (e) => e === !1, Zs = (e) => e === !0, vt = (e, r, t) => t(e), Qs = (e) => Bs(jn(Nn(e))), Hr = (e) => e !== void 0, eo = (e) => jn(Nn(e.map(w9))), sr = (e) => e[0], g9 = (e) => Qs(e), Cr = (e) => Math.max.apply(Math, e), Er = (e) => Math.min.apply(Math, e), m9 = (e) => e.some(Zs), $9 = (e) => qe(Ys(e), kt);
function _9(e) {
  return function(r, t) {
    return Wr({
      [e]: r
    }, { [e]: t });
  };
}
function ro(e) {
  let { allOf: r = [], ...t } = e;
  return t = We(e) ? t : e, [t, ...r.map(ro)];
}
function to(e, r) {
  return e.map((t) => t && t[r]);
}
function b9(e, r) {
  return e.map(function(t, n) {
    try {
      return r(t, n);
    } catch {
      return;
    }
  }).filter(Hr);
}
function w9(e) {
  return We(e) || Array.isArray(e) ? Object.keys(e) : [];
}
function Wt(e, r) {
  if (r = r || [], !e.length)
    return r;
  const t = e.slice(0).shift(), n = e.slice(1);
  return r.length ? Wt(n, Ys(r.map((a) => t.map((i) => [i].concat(a))))) : Wt(n, t.map((a) => a));
}
function no(e, r) {
  let t;
  try {
    t = e.map(function(n) {
      return JSON.stringify(n, null, 2);
    }).join(`
`);
  } catch {
    t = e.join(", ");
  }
  throw new Error('Could not resolve values for path:"' + r.join(".") + `". They are probably incompatible. Values: 
` + t);
}
function A9(e, r, t, n, a, i) {
  if (e.length) {
    const s = a.complexResolvers[r];
    if (!s || !s.resolver)
      throw new Error("No resolver found for " + r);
    const o = t.map((h) => e.reduce((p, v) => (h[v] !== void 0 && (p[v] = h[v]), p), {})), u = qe(o, Wr), c = s.keywords.reduce((h, p) => ({
      ...h,
      [p]: (v, $ = []) => n(v, null, i.concat(p, $))
    }), {}), f = s.resolver(u, i.concat(r), c, a);
    return We(f) || no(u, i.concat(r)), f;
  }
}
function C9(e) {
  return { required: e };
}
const E9 = ["properties", "patternProperties", "definitions", "dependencies"], O9 = ["anyOf", "oneOf"], P9 = [
  "additionalProperties",
  "additionalItems",
  "contains",
  "propertyNames",
  "not",
  "items"
], V = {
  type(e) {
    if (e.some(Array.isArray)) {
      const r = e.map(function(n) {
        return Array.isArray(n) ? n : [n];
      }), t = d9.apply(null, r);
      if (t.length === 1)
        return t[0];
      if (t.length > 1)
        return jn(t);
    }
  },
  dependencies(e, r, t) {
    return eo(e).reduce(function(a, i) {
      const s = to(e, i);
      let o = qe(s.filter(Hr), kt);
      const u = o.filter(Array.isArray);
      if (u.length) {
        if (u.length === o.length)
          a[i] = Qs(o);
        else {
          const c = o.filter(v9), f = u.map(C9);
          a[i] = t(c.concat(f), i);
        }
        return a;
      }
      return o = qe(o, Wr), a[i] = t(o, i), a;
    }, {});
  },
  oneOf(e, r, t) {
    const n = Wt(Hs(e)), a = b9(n, t), i = qe(a, Wr);
    if (i.length)
      return i;
  },
  not(e) {
    return { anyOf: e };
  },
  pattern(e) {
    return e.map((r) => "(?=" + r + ")").join("");
  },
  multipleOf(e) {
    let r = e.slice(0), t = 1;
    for (; r.some((n) => !Number.isInteger(n)); )
      r = r.map((n) => n * 10), t = t * 10;
    return f9(r) / t;
  },
  enum(e) {
    const r = p9.apply(null, e.concat(kt));
    if (r.length)
      return Bs(r);
  }
};
V.$id = sr;
V.$ref = sr;
V.$schema = sr;
V.additionalItems = vt;
V.additionalProperties = vt;
V.anyOf = V.oneOf;
V.contains = vt;
V.default = sr;
V.definitions = V.dependencies;
V.description = sr;
V.examples = $9;
V.exclusiveMaximum = Er;
V.exclusiveMinimum = Cr;
V.items = Xs;
V.maximum = Er;
V.maxItems = Er;
V.maxLength = Er;
V.maxProperties = Er;
V.minimum = Cr;
V.minItems = Cr;
V.minLength = Cr;
V.minProperties = Cr;
V.properties = Js;
V.propertyNames = vt;
V.required = g9;
V.title = sr;
V.uniqueItems = m9;
const T9 = {
  properties: Js,
  items: Xs
};
function xn(e, r, t) {
  r = l9(r, {
    ignoreAdditionalProperties: !1,
    resolvers: V,
    complexResolvers: T9,
    deep: !0
  });
  const n = Object.entries(r.complexResolvers);
  function a(o, u, c) {
    o = Hs(o.filter(Hr)), c = c || [];
    const f = We(u) ? u : {};
    if (!o.length)
      return;
    if (o.some(y9))
      return !1;
    if (o.every(Zs))
      return !0;
    o = o.filter(We);
    const h = eo(o);
    if (r.deep && Mr(h, "allOf"))
      return xn({
        allOf: o
      }, r);
    const p = n.map(([v, $]) => h.filter((b) => $.keywords.includes(b)));
    return p.forEach((v) => h9(h, v)), h.forEach(function(v) {
      const $ = to(o, v), b = qe($.filter(Hr), _9(v));
      if (b.length === 1 && Mr(O9, v))
        f[v] = b[0].map((_) => a([_], _));
      else if (b.length === 1 && !Mr(E9, v) && !Mr(P9, v))
        f[v] = b[0];
      else {
        const _ = r.resolvers[v] || r.resolvers.defaultResolver;
        if (!_) throw new Error("No resolver found for key " + v + ". You can provide a resolver for this keyword in the options, or provide a default resolver.");
        const g = (m, P = []) => a(m, null, c.concat(v, P));
        f[v] = _(b, c.concat(v), g, r), f[v] === void 0 ? no(b, c.concat(v)) : f[v] === void 0 && delete f[v];
      }
    }), n.reduce((v, [$, b], _) => ({
      ...v,
      ...A9(p[_], $, o, a, r, c)
    }), f);
  }
  const i = Nn(ro(e));
  return a(i);
}
xn.options = {
  resolvers: V
};
var S9 = xn;
const I9 = /* @__PURE__ */ Q(S9);
function Yr(e) {
  let r;
  const t = Z(e, "discriminator.propertyName", void 0);
  return ys(t) ? r = t : t !== void 0 && console.warn(`Expecting discriminator to be a string, got "${typeof t}" instead`), r;
}
function yr(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : e == null ? "null" : typeof e == "boolean" ? "boolean" : isNaN(e) ? typeof e == "object" ? "object" : "string" : "number";
}
var N9 = dt, j9 = Te, x9 = En, R9 = pt, M9 = j9(function(e) {
  return x9(N9(e, 1, R9, !0));
}), F9 = M9;
const D9 = /* @__PURE__ */ Q(F9);
function Ht(e) {
  let { type: r } = e;
  return !r && e.const ? yr(e.const) : !r && e.enum ? "string" : !r && (e.properties || e.additionalProperties) ? "object" : (Array.isArray(r) && (r.length === 2 && r.includes("null") ? r = r.find((t) => t !== "null") : r = r[0]), r);
}
function Pe(e, r) {
  const t = Object.assign({}, e);
  return Object.keys(r).reduce((n, a) => {
    const i = e ? e[a] : {}, s = r[a];
    return e && a in e && X(s) ? n[a] = Pe(i, s) : e && r && (Ht(e) === "object" || Ht(r) === "object") && a === Jo && Array.isArray(i) && Array.isArray(s) ? n[a] = D9(i, s) : n[a] = s, n;
  }, t);
}
function Or(e, r, t = {}, n, a) {
  return ge(e, r, t, n, void 0, void 0, a)[0];
}
function L9(e, r, t, n, a, i, s) {
  const { if: o, then: u, else: c, ...f } = r, h = e.isValid(o, i || {}, t);
  let p = [f], v = [];
  if (n)
    u && typeof u != "boolean" && (v = v.concat(ge(e, u, t, i, n, a, s))), c && typeof c != "boolean" && (v = v.concat(ge(e, c, t, i, n, a, s)));
  else {
    const $ = h ? u : c;
    $ && typeof $ != "boolean" && (v = v.concat(ge(e, $, t, i, n, a, s)));
  }
  return v.length && (p = v.map(($) => Pe(f, $))), p.flatMap(($) => ge(e, $, t, i, n, a, s));
}
function io(e) {
  return e.reduce(
    (t, n) => n.length > 1 ? n.flatMap((a) => ws(t.length, (i) => [...t[i]].concat(a))) : (t.forEach((a) => a.push(n[0])), t),
    [[]]
    // Start with an empty list
  );
}
function z9(e, r, t, n, a, i, s) {
  const o = ao(e, r, t, n, a, i);
  if (o.length > 1 || o[0] !== r)
    return o;
  if (Aa in r)
    return so(e, r, t, n, a, i).flatMap((c) => ge(e, c, t, i, n, a, s));
  if (Zt in r && Array.isArray(r.allOf)) {
    const u = r.allOf.map((f) => ge(e, f, t, i, n, a, s));
    return io(u).map((f) => ({ ...r, allOf: f }));
  }
  return [r];
}
function ao(e, r, t, n, a, i, s) {
  const o = gr(r, t, a);
  return o !== r ? ge(e, o, t, i, n, a, s) : [r];
}
function gr(e, r, t) {
  if (!X(e))
    return e;
  let n = e;
  if (me in n) {
    const { $ref: a, ...i } = n;
    if (t.includes(a))
      return n;
    t.push(a), n = { ...ps(a, r), ...i };
  }
  if (ye in n) {
    const a = [], i = T$(n[ye], (s, o, u) => {
      const c = [...t];
      s[u] = gr(o, r, c), a.push(c);
    }, {});
    w_(t, n4(O_(a))), n = { ...n, [ye]: i };
  }
  return Yo in n && !Array.isArray(n.items) && typeof n.items != "boolean" && (n = {
    ...n,
    items: gr(n.items, r, t)
  }), o$(e, n) ? e : n;
}
function K9(e, r, t, n) {
  const a = {
    ...r,
    properties: { ...r.properties }
  }, i = n && X(n) ? n : {};
  return Object.keys(i).forEach((s) => {
    if (s in a.properties)
      return;
    let o = {};
    typeof a.additionalProperties != "boolean" ? me in a.additionalProperties ? o = Or(e, { $ref: Z(a.additionalProperties, [me]) }, t, i) : "type" in a.additionalProperties ? o = { ...a.additionalProperties } : Lr in a.additionalProperties || hr in a.additionalProperties ? o = {
      type: "object",
      ...a.additionalProperties
    } : o = { type: yr(Z(i, [s])) } : o = { type: yr(Z(i, [s])) }, a.properties[s] = o, Gt(a.properties, [s, wa], !0);
  }), a;
}
function ge(e, r, t, n, a = !1, i = [], s) {
  return X(r) ? z9(e, r, t, a, i, n).flatMap((u) => {
    var c;
    let f = u;
    if (Ho in f)
      return L9(e, f, t, a, i, n, s);
    if (Zt in f) {
      if (a) {
        const { allOf: p, ...v } = f;
        return [...p, v];
      }
      try {
        const p = [], v = [];
        (c = f.allOf) === null || c === void 0 || c.forEach(($) => {
          typeof $ == "object" && $.contains ? p.push($) : v.push($);
        }), p.length && (f = { ...f, allOf: v }), f = s ? s(f) : I9(f, {
          deep: !1
        }), p.length && (f.allOf = p);
      } catch (p) {
        console.warn(`could not merge subschemas in allOf:
`, p);
        const { allOf: v, ...$ } = f;
        return $;
      }
    }
    return ko in f && f.additionalProperties !== !1 ? K9(e, f, t, n) : f;
  }) : [{}];
}
function V9(e, r, t, n, a) {
  let i;
  const { oneOf: s, anyOf: o, ...u } = r;
  if (Array.isArray(s) ? i = s : Array.isArray(o) && (i = o), i) {
    const c = a === void 0 && n ? {} : a, f = Yr(r);
    i = i.map((p) => gr(p, t, []));
    const h = Cs(e, c, i, t, f);
    if (n)
      return i.map((p) => Pe(u, p));
    r = Pe(u, i[h]);
  }
  return [r];
}
function so(e, r, t, n, a, i, s) {
  const { dependencies: o, ...u } = r;
  return V9(e, u, t, n, i).flatMap((f) => oo(e, o, f, t, n, a, i, s));
}
function oo(e, r, t, n, a, i, s, o) {
  let u = [t];
  for (const c in r) {
    if (!a && Z(s, [c]) === void 0 || t.properties && !(c in t.properties))
      continue;
    const [f, h] = yn(c, r);
    return Array.isArray(h) ? u[0] = U9(t, h) : X(h) && (u = G9(e, t, n, c, h, a, i, s, o)), u.flatMap((p) => oo(e, f, p, n, a, i, s, o));
  }
  return u;
}
function U9(e, r) {
  if (!r)
    return e;
  const t = Array.isArray(e.required) ? Array.from(/* @__PURE__ */ new Set([...e.required, ...r])) : r;
  return { ...e, required: t };
}
function G9(e, r, t, n, a, i, s, o, u) {
  return ge(e, a, t, o, i, s, u).flatMap((f) => {
    const { oneOf: h, ...p } = f;
    if (r = Pe(r, p), h === void 0)
      return r;
    const v = h.map((b) => typeof b == "boolean" || !(me in b) ? [b] : ao(e, b, t, i, s, o));
    return io(v).flatMap((b) => q9(e, r, t, n, b, i, s, o, u));
  });
}
function q9(e, r, t, n, a, i, s, o, u) {
  const c = a.filter((f) => {
    if (typeof f == "boolean" || !f || !f.properties)
      return !1;
    const { [n]: h } = f.properties;
    if (h) {
      const p = {
        type: "object",
        properties: {
          [n]: h
        }
      };
      return e.isValid(p, o, t) || i;
    }
    return !1;
  });
  return !i && c.length !== 1 ? (console.warn("ignoring oneOf in dependencies because there isn't exactly one subschema that is valid"), [r]) : c.flatMap((f) => {
    const h = f, [p] = yn(n, h.properties), v = { ...h, properties: p };
    return ge(e, v, t, o, i, s, u).map((b) => Pe(r, b));
  });
}
const k9 = {
  type: "object",
  $id: Bo,
  properties: {
    __not_really_there__: {
      type: "number"
    }
  }
};
function Yt(e, r, t, n) {
  let a = 0;
  return t && (Kr(t.properties) ? a += Om(t.properties, (i, s, o) => {
    const u = Z(n, o);
    if (typeof s == "boolean")
      return i;
    if (pr(s, me)) {
      const c = Or(e, s, r, u);
      return i + Yt(e, r, c, u || {});
    }
    if ((pr(s, hr) || pr(s, Lr)) && u) {
      const c = pr(s, hr) ? hr : Lr, f = Yr(s);
      return i + Bt(e, r, u, Z(s, c), -1, f);
    }
    if (s.type === "object")
      return Kr(u) && (i += 1), i + Yt(e, r, s, u);
    if (s.type === yr(u)) {
      let c = i + 1;
      return s.default ? c += u === s.default ? 1 : -1 : s.const && (c += u === s.const ? 1 : -1), c;
    }
    return i;
  }, 0) : ys(t.type) && t.type === yr(n) && (a += 1)), a;
}
function Bt(e, r, t, n, a = -1, i) {
  const s = n.map((h) => gr(h, r, [])), o = As(t, n, i);
  if (vs(o))
    return o;
  const u = s.reduce((h, p, v) => (Cs(e, t, [k9, p], r, i) === 1 && h.push(v), h), []);
  if (u.length === 1)
    return u[0];
  u.length || ws(s.length, (h) => u.push(h));
  const c = /* @__PURE__ */ new Set(), { bestIndex: f } = u.reduce((h, p) => {
    const { bestScore: v } = h, $ = s[p], b = Yt(e, r, $, t);
    return c.add(b), b > v ? { bestIndex: p, bestScore: b } : h;
  }, { bestIndex: a, bestScore: 0 });
  return c.size === 1 && a >= 0 ? a : f;
}
function W9(e) {
  return Array.isArray(e.items) && e.items.length > 0 && e.items.every((r) => X(r));
}
function Br(e, r, t = !1, n = !1) {
  if (Array.isArray(r)) {
    const a = Array.isArray(e) ? e : [], i = r.map((s, o) => a[o] ? Br(a[o], s, t, n) : s);
    return t && i.length < a.length && i.push(...a.slice(i.length)), i;
  }
  if (X(r)) {
    const a = Object.assign({}, e);
    return Object.keys(r).reduce((i, s) => (i[s] = Br(e ? Z(e, s) : {}, Z(r, s), t, n), i), a);
  }
  return n && r === void 0 ? e : r;
}
function Rn(e, r, t = !1) {
  return Object.keys(r).reduce((n, a) => {
    const i = e ? e[a] : {}, s = r[a];
    if (e && a in e && X(s))
      n[a] = Rn(i, s, t);
    else if (t && Array.isArray(i) && Array.isArray(s)) {
      let o = s;
      t === "preventDuplicates" && (o = s.reduce((u, c) => (i.includes(c) || u.push(c), u), [])), n[a] = i.concat(o);
    } else
      n[a] = s;
    return n;
  }, Object.assign({}, e));
}
function uo(e) {
  return Array.isArray(e.enum) && e.enum.length === 1 || zr in e;
}
function H9(e, r, t = {}) {
  const n = Or(e, r, t, void 0), a = n.oneOf || n.anyOf;
  return Array.isArray(n.enum) ? !0 : Array.isArray(a) ? a.every((i) => typeof i != "boolean" && uo(i)) : !1;
}
function Y9(e, r, t) {
  return !r.uniqueItems || !r.items || typeof r.items == "boolean" ? !1 : H9(e, r.items, t);
}
var He;
(function(e) {
  e[e.Ignore = 0] = "Ignore", e[e.Invert = 1] = "Invert", e[e.Fallback = 2] = "Fallback";
})(He || (He = {}));
function Rt(e, r = He.Ignore, t = -1) {
  if (t >= 0) {
    if (Array.isArray(e.items) && t < e.items.length) {
      const n = e.items[t];
      if (typeof n != "boolean")
        return n;
    }
  } else if (e.items && !Array.isArray(e.items) && typeof e.items != "boolean")
    return e.items;
  return r !== He.Ignore && X(e.additionalItems) ? e.additionalItems : {};
}
function ha(e, r, t, n, a, i = [], s = {}, o = !1) {
  const { emptyObjectFields: u = "populateAllDefaults" } = s;
  if (n || o)
    e[r] = t;
  else if (u !== "skipDefaults")
    if (X(t)) {
      const c = a === void 0 ? i.includes(r) : a;
      u === "skipEmptyDefaults" ? vr(t) || (e[r] = t) : (!vr(t) || i.includes(r)) && (c || u !== "populateRequiredDefaults") && (e[r] = t);
    } else // Store computedDefault if it's a defined primitive (e.g., true) and satisfies certain conditions
    // Condition 1: computedDefault is not undefined
    // Condition 2: If emptyObjectFields is 'populateAllDefaults' or 'skipEmptyDefaults) or if the key is a required field
    t !== void 0 && (u === "populateAllDefaults" || u === "skipEmptyDefaults" || i.includes(r)) && (e[r] = t);
}
function Oe(e, r, t = {}) {
  const { parentDefaults: n, rawFormData: a, rootSchema: i = {}, includeUndefinedValues: s = !1, _recurseList: o = [], experimental_defaultFormStateBehavior: u = void 0, experimental_customMergeAllOf: c = void 0, required: f } = t, h = X(a) ? a : {}, p = X(r) ? r : {};
  let v = n, $ = null, b = o;
  if (uo(p))
    v = p.const;
  else if (X(v) && X(p.default))
    v = Rn(v, p.default);
  else if (Wo in p)
    v = p.default;
  else if (me in p) {
    const g = p[me];
    o.includes(g) || (b = o.concat(g), $ = ps(g, i));
  } else if (Aa in p) {
    const g = {
      ...h,
      ...va(e, p, t, v)
    };
    $ = so(e, p, i, !1, [], g, c)[0];
  } else if (W9(p))
    v = p.items.map((g, m) => Oe(e, g, {
      rootSchema: i,
      includeUndefinedValues: s,
      _recurseList: o,
      experimental_defaultFormStateBehavior: u,
      parentDefaults: Array.isArray(n) ? n[m] : void 0,
      rawFormData: h,
      required: f
    }));
  else if (hr in p) {
    const { oneOf: g, ...m } = p;
    if (g.length === 0)
      return;
    const P = Yr(p);
    $ = g[Bt(e, i, vr(h) ? void 0 : h, g, 0, P)], $ = Pe(m, $);
  } else if (Lr in p) {
    const { anyOf: g, ...m } = p;
    if (g.length === 0)
      return;
    const P = Yr(p);
    $ = g[Bt(e, i, vr(h) ? void 0 : h, g, 0, P)], $ = Pe(m, $);
  }
  if ($)
    return Oe(e, $, {
      rootSchema: i,
      includeUndefinedValues: s,
      _recurseList: b,
      experimental_defaultFormStateBehavior: u,
      parentDefaults: v,
      rawFormData: h,
      required: f
    });
  v === void 0 && (v = p.default);
  const _ = va(e, p, t, v);
  return _ ?? v;
}
function B9(e, r, { rawFormData: t, rootSchema: n = {}, includeUndefinedValues: a = !1, _recurseList: i = [], experimental_defaultFormStateBehavior: s = void 0, experimental_customMergeAllOf: o = void 0, required: u } = {}, c) {
  {
    const f = X(t) ? t : {}, h = r, p = (s == null ? void 0 : s.allOf) === "populateDefaults" && Zt in h ? Or(e, h, n, f, o) : h, v = p[zr], $ = Object.keys(p.properties || {}).reduce((b, _) => {
      var g;
      const m = Z(p, [ye, _]), P = X(v) && v[_] !== void 0, N = X(m) && zr in m || P, D = Oe(e, m, {
        rootSchema: n,
        _recurseList: i,
        experimental_defaultFormStateBehavior: s,
        experimental_customMergeAllOf: o,
        includeUndefinedValues: a === !0,
        parentDefaults: Z(c, [_]),
        rawFormData: Z(f, [_]),
        required: (g = p.required) === null || g === void 0 ? void 0 : g.includes(_)
      });
      return ha(b, _, D, a, u, p.required, s, N), b;
    }, {});
    if (p.additionalProperties) {
      const b = X(p.additionalProperties) ? p.additionalProperties : {}, _ = /* @__PURE__ */ new Set();
      X(c) && Object.keys(c).filter((m) => !p.properties || !p.properties[m]).forEach((m) => _.add(m));
      const g = [];
      Object.keys(f).filter((m) => !p.properties || !p.properties[m]).forEach((m) => {
        _.add(m), g.push(m);
      }), _.forEach((m) => {
        var P;
        const N = Oe(e, b, {
          rootSchema: n,
          _recurseList: i,
          experimental_defaultFormStateBehavior: s,
          includeUndefinedValues: a === !0,
          parentDefaults: Z(c, [m]),
          rawFormData: Z(f, [m]),
          required: (P = p.required) === null || P === void 0 ? void 0 : P.includes(m)
        });
        ha($, m, N, a, u, g);
      });
    }
    return $;
  }
}
function J9(e, r, { rawFormData: t, rootSchema: n = {}, _recurseList: a = [], experimental_defaultFormStateBehavior: i = void 0, required: s } = {}, o) {
  var u, c, f, h;
  const p = r, v = ((u = i == null ? void 0 : i.arrayMinItems) === null || u === void 0 ? void 0 : u.populate) === "never", $ = ((c = i == null ? void 0 : i.arrayMinItems) === null || c === void 0 ? void 0 : c.populate) === "requiredOnly", b = (i == null ? void 0 : i.emptyObjectFields) === "skipEmptyDefaults", _ = (h = (f = i == null ? void 0 : i.arrayMinItems) === null || f === void 0 ? void 0 : f.computeSkipPopulate) !== null && h !== void 0 ? h : () => !1, g = b ? void 0 : [];
  if (Array.isArray(o) && (o = o.map((L, C) => {
    const S = Rt(p, He.Fallback, C);
    return Oe(e, S, {
      rootSchema: n,
      _recurseList: a,
      experimental_defaultFormStateBehavior: i,
      parentDefaults: L,
      required: s
    });
  })), Array.isArray(t)) {
    const L = Rt(p);
    v ? o = t : o = t.map((C, S) => Oe(e, L, {
      rootSchema: n,
      _recurseList: a,
      experimental_defaultFormStateBehavior: i,
      rawFormData: C,
      parentDefaults: Z(o, [S]),
      required: s
    }));
  }
  if ((X(p) && zr in p) === !1) {
    if (v)
      return o ?? g;
    if ($ && !s)
      return o || void 0;
  }
  const P = Array.isArray(o) ? o.length : 0;
  if (!p.minItems || Y9(e, p, n) || _(e, p, n) || p.minItems <= P)
    return o || g;
  const N = o || [], D = Rt(p, He.Invert), ae = D.default, ce = new Array(p.minItems - P).fill(Oe(e, D, {
    parentDefaults: ae,
    rootSchema: n,
    _recurseList: a,
    experimental_defaultFormStateBehavior: i,
    required: s
  }));
  return N.concat(ce);
}
function va(e, r, t = {}, n) {
  switch (Ht(r)) {
    case "object":
      return B9(e, r, t, n);
    case "array":
      return J9(e, r, t, n);
  }
}
function X9(e, r, t, n, a = !1, i, s) {
  if (!X(r))
    throw new Error("Invalid schema: " + r);
  const o = Or(e, r, n, t, s), u = Oe(e, o, {
    rootSchema: n,
    includeUndefinedValues: a,
    experimental_defaultFormStateBehavior: i,
    experimental_customMergeAllOf: s,
    rawFormData: t
  });
  if (t == null || typeof t == "number" && isNaN(t))
    return u;
  const { mergeDefaultsIntoFormData: c, arrayMinItems: f = {} } = {}, { mergeExtraDefaults: h } = f, p = c === "useDefaultIfFormDataUndefined";
  return X(t) || Array.isArray(t) ? Br(u, t, h, p) : t;
}
var Z9 = Es;
function Q9(e, r, t, n) {
  return n = typeof n == "function" ? n : void 0, e == null ? e : Z9(e, r, t, n);
}
var e5 = Q9;
const r5 = /* @__PURE__ */ Q(e5);
class t5 {
  /** Construct an `ErrorSchemaBuilder` with an optional initial set of errors in an `ErrorSchema`.
   *
   * @param [initialSchema] - The optional set of initial errors, that will be cloned into the class
   */
  constructor(r) {
    this.errorSchema = {}, this.resetAllErrors(r);
  }
  /** Returns the `ErrorSchema` that has been updated by the methods of the `ErrorSchemaBuilder`
   */
  get ErrorSchema() {
    return this.errorSchema;
  }
  /** Will get an existing `ErrorSchema` at the specified `pathOfError` or create and return one.
   *
   * @param [pathOfError] - The optional path into the `ErrorSchema` at which to add the error(s)
   * @returns - The error block for the given `pathOfError` or the root if not provided
   * @private
   */
  getOrCreateErrorBlock(r) {
    let n = Array.isArray(r) && r.length > 0 || typeof r == "string" ? Z(this.errorSchema, r) : this.errorSchema;
    return !n && r && (n = {}, r5(this.errorSchema, r, n, Object)), n;
  }
  /** Resets all errors in the `ErrorSchemaBuilder` back to the `initialSchema` if provided, otherwise an empty set.
   *
   * @param [initialSchema] - The optional set of initial errors, that will be cloned into the class
   * @returns - The `ErrorSchemaBuilder` object for chaining purposes
   */
  resetAllErrors(r) {
    return this.errorSchema = r ? u4(r) : {}, this;
  }
  /** Adds the `errorOrList` to the list of errors in the `ErrorSchema` at either the root level or the location within
   * the schema described by the `pathOfError`. For more information about how to specify the path see the
   * [eslint lodash plugin docs](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/path-style.md).
   *
   * @param errorOrList - The error or list of errors to add into the `ErrorSchema`
   * @param [pathOfError] - The optional path into the `ErrorSchema` at which to add the error(s)
   * @returns - The `ErrorSchemaBuilder` object for chaining purposes
   */
  addErrors(r, t) {
    const n = this.getOrCreateErrorBlock(t);
    let a = Z(n, _e);
    return Array.isArray(a) || (a = [], n[_e] = a), Array.isArray(r) ? a.push(...r) : a.push(r), this;
  }
  /** Sets/replaces the `errorOrList` as the error(s) in the `ErrorSchema` at either the root level or the location
   * within the schema described by the `pathOfError`. For more information about how to specify the path see the
   * [eslint lodash plugin docs](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/path-style.md).
   *
   * @param errorOrList - The error or list of errors to set into the `ErrorSchema`
   * @param [pathOfError] - The optional path into the `ErrorSchema` at which to set the error(s)
   * @returns - The `ErrorSchemaBuilder` object for chaining purposes
   */
  setErrors(r, t) {
    const n = this.getOrCreateErrorBlock(t), a = Array.isArray(r) ? [...r] : [r];
    return Gt(n, _e, a), this;
  }
  /** Clears the error(s) in the `ErrorSchema` at either the root level or the location within the schema described by
   * the `pathOfError`. For more information about how to specify the path see the
   * [eslint lodash plugin docs](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/path-style.md).
   *
   * @param [pathOfError] - The optional path into the `ErrorSchema` at which to clear the error(s)
   * @returns - The `ErrorSchemaBuilder` object for chaining purposes
   */
  clearErrors(r) {
    const t = this.getOrCreateErrorBlock(r);
    return Gt(t, _e, []), this;
  }
}
var G = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ya;
function n5() {
  if (ya) return G;
  ya = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), o = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), $;
  $ = Symbol.for("react.module.reference");
  function b(_) {
    if (typeof _ == "object" && _ !== null) {
      var g = _.$$typeof;
      switch (g) {
        case e:
          switch (_ = _.type, _) {
            case t:
            case a:
            case n:
            case c:
            case f:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case o:
                case s:
                case u:
                case p:
                case h:
                case i:
                  return _;
                default:
                  return g;
              }
          }
        case r:
          return g;
      }
    }
  }
  return G.ContextConsumer = s, G.ContextProvider = i, G.Element = e, G.ForwardRef = u, G.Fragment = t, G.Lazy = p, G.Memo = h, G.Portal = r, G.Profiler = a, G.StrictMode = n, G.Suspense = c, G.SuspenseList = f, G.isAsyncMode = function() {
    return !1;
  }, G.isConcurrentMode = function() {
    return !1;
  }, G.isContextConsumer = function(_) {
    return b(_) === s;
  }, G.isContextProvider = function(_) {
    return b(_) === i;
  }, G.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === e;
  }, G.isForwardRef = function(_) {
    return b(_) === u;
  }, G.isFragment = function(_) {
    return b(_) === t;
  }, G.isLazy = function(_) {
    return b(_) === p;
  }, G.isMemo = function(_) {
    return b(_) === h;
  }, G.isPortal = function(_) {
    return b(_) === r;
  }, G.isProfiler = function(_) {
    return b(_) === a;
  }, G.isStrictMode = function(_) {
    return b(_) === n;
  }, G.isSuspense = function(_) {
    return b(_) === c;
  }, G.isSuspenseList = function(_) {
    return b(_) === f;
  }, G.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === t || _ === a || _ === n || _ === c || _ === f || _ === v || typeof _ == "object" && _ !== null && (_.$$typeof === p || _.$$typeof === h || _.$$typeof === i || _.$$typeof === s || _.$$typeof === u || _.$$typeof === $ || _.getModuleId !== void 0);
  }, G.typeOf = b, G;
}
var q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ga;
function i5() {
  return ga || (ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), o = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), $ = !1, b = !1, _ = !1, g = !1, m = !1, P;
    P = Symbol.for("react.module.reference");
    function N(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === t || I === a || m || I === n || I === c || I === f || g || I === v || $ || b || _ || typeof I == "object" && I !== null && (I.$$typeof === p || I.$$typeof === h || I.$$typeof === i || I.$$typeof === s || I.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === P || I.getModuleId !== void 0));
    }
    function D(I) {
      if (typeof I == "object" && I !== null) {
        var Ee = I.$$typeof;
        switch (Ee) {
          case e:
            var ve = I.type;
            switch (ve) {
              case t:
              case a:
              case n:
              case c:
              case f:
                return ve;
              default:
                var or = ve && ve.$$typeof;
                switch (or) {
                  case o:
                  case s:
                  case u:
                  case p:
                  case h:
                  case i:
                    return or;
                  default:
                    return Ee;
                }
            }
          case r:
            return Ee;
        }
      }
    }
    var ae = s, ce = i, L = e, C = u, S = t, z = p, K = h, W = r, ee = a, se = n, Se = c, ze = f, Ie = !1, Ne = !1;
    function Ke(I) {
      return Ie || (Ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function je(I) {
      return Ne || (Ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ae(I) {
      return D(I) === s;
    }
    function T(I) {
      return D(I) === i;
    }
    function l(I) {
      return typeof I == "object" && I !== null && I.$$typeof === e;
    }
    function y(I) {
      return D(I) === u;
    }
    function A(I) {
      return D(I) === t;
    }
    function x(I) {
      return D(I) === p;
    }
    function R(I) {
      return D(I) === h;
    }
    function B(I) {
      return D(I) === r;
    }
    function Ce(I) {
      return D(I) === a;
    }
    function yt(I) {
      return D(I) === n;
    }
    function Pr(I) {
      return D(I) === c;
    }
    function gt(I) {
      return D(I) === f;
    }
    q.ContextConsumer = ae, q.ContextProvider = ce, q.Element = L, q.ForwardRef = C, q.Fragment = S, q.Lazy = z, q.Memo = K, q.Portal = W, q.Profiler = ee, q.StrictMode = se, q.Suspense = Se, q.SuspenseList = ze, q.isAsyncMode = Ke, q.isConcurrentMode = je, q.isContextConsumer = Ae, q.isContextProvider = T, q.isElement = l, q.isForwardRef = y, q.isFragment = A, q.isLazy = x, q.isMemo = R, q.isPortal = B, q.isProfiler = Ce, q.isStrictMode = yt, q.isSuspense = Pr, q.isSuspenseList = gt, q.isValidElementType = N, q.typeOf = D;
  }()), q;
}
process.env.NODE_ENV === "production" ? n5() : i5();
function a5(e) {
  let r = 0;
  for (let t = 0; t < e.length; t += 1) {
    const n = e.charCodeAt(t);
    r = (r << 5) - r + n, r = r & r;
  }
  return r.toString(16);
}
function s5(e) {
  const r = /* @__PURE__ */ new Set();
  return JSON.stringify(e, (t, n) => (r.add(t), n)), a5(JSON.stringify(e, Array.from(r).sort()));
}
function Mn(e, r = []) {
  if (!e)
    return [];
  let t = [];
  return _e in e && (t = t.concat(e[_e].map((n) => {
    const a = `.${r.join(".")}`;
    return {
      property: a,
      message: n,
      stack: `${a} ${n}`
    };
  }))), Object.keys(e).reduce((n, a) => {
    if (a !== _e) {
      const i = e[a];
      Qt(i) && (n = n.concat(Mn(i, [...r, a])));
    }
    return n;
  }, t);
}
var o5 = we, u5 = lt, c5 = ne, f5 = nr, l5 = Ga, d5 = Le, p5 = ka;
function h5(e) {
  return c5(e) ? o5(e, d5) : f5(e) ? [e] : u5(l5(p5(e)));
}
var v5 = h5;
const y5 = /* @__PURE__ */ Q(v5);
function g5(e) {
  const r = new t5();
  return e.length && e.forEach((t) => {
    const { property: n, message: a } = t, i = n === "." ? [] : y5(n);
    i.length > 0 && i[0] === "" && i.splice(0, 1), a && r.addErrors(a, i);
  }), r.ErrorSchema;
}
function co(e) {
  return Object.keys(e).reduce((r, t) => {
    if (t === "addError")
      return r;
    {
      const n = e[t];
      return Qt(n) ? {
        ...r,
        [t]: co(n)
      } : { ...r, [t]: n };
    }
  }, {});
}
function m5(e, r) {
  if (!r)
    return e;
  const { errors: t, errorSchema: n } = e;
  let a = Mn(r), i = r;
  return vr(n) || (i = Rn(n, r, !0), a = [...t].concat(a)), { errorSchema: i, errors: a };
}
function $5(e) {
  for (const r in e) {
    const t = e, n = t[r];
    r === me && typeof n == "string" && n.startsWith("#") ? t[r] = Ca + n : t[r] = Fn(n);
  }
  return e;
}
function _5(e) {
  for (let r = 0; r < e.length; r++)
    e[r] = Fn(e[r]);
  return e;
}
function Fn(e) {
  return Array.isArray(e) ? _5([...e]) : Kr(e) ? $5({ ...e }) : e;
}
var ma;
(function(e) {
  e.ArrayItemTitle = "Item", e.MissingItems = "Missing items definition", e.YesLabel = "Yes", e.NoLabel = "No", e.CloseLabel = "Close", e.ErrorsLabel = "Errors", e.NewStringDefault = "New Value", e.AddButton = "Add", e.AddItemButton = "Add Item", e.CopyButton = "Copy", e.MoveDownButton = "Move down", e.MoveUpButton = "Move up", e.RemoveButton = "Remove", e.NowLabel = "Now", e.ClearLabel = "Clear", e.AriaDateLabel = "Select a date", e.PreviewLabel = "Preview", e.DecrementAriaLabel = "Decrease value by 1", e.IncrementAriaLabel = "Increase value by 1", e.UnknownFieldType = "Unknown field type %1", e.OptionPrefix = "Option %1", e.TitleOptionPrefix = "%1 option %2", e.KeyLabel = "%1 Key", e.InvalidObjectField = 'Invalid "%1" object field configuration: _%2_.', e.UnsupportedField = "Unsupported field schema.", e.UnsupportedFieldWithId = "Unsupported field schema for field `%1`.", e.UnsupportedFieldWithReason = "Unsupported field schema: _%1_.", e.UnsupportedFieldWithIdAndReason = "Unsupported field schema for field `%1`: _%2_.", e.FilesInfo = "**%1** (%2, %3 bytes)";
})(ma || (ma = {}));
var Jt = { exports: {} }, fo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
  function r(C, S) {
    return { validate: C, compare: S };
  }
  e.fullFormats = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: r(i, s),
    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
    time: r(u, c),
    "date-time": r(h, p),
    // duration: https://tools.ietf.org/html/rfc3339#appendix-A
    duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri: b,
    "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
    // uri-template: https://tools.ietf.org/html/rfc6570
    "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    // For the source: https://gist.github.com/dperini/729294
    // For test cases: https://mathiasbynens.be/demo/url-regex
    url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
    // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
    regex: L,
    // uuid: http://tools.ietf.org/html/rfc4122
    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    // JSON-pointer: https://tools.ietf.org/html/rfc6901
    // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
    // byte: https://github.com/miguelmota/is-base64
    byte: g,
    // signed 32 bit integer
    int32: { type: "number", validate: N },
    // signed 64 bit integer
    int64: { type: "number", validate: D },
    // C-type float
    float: { type: "number", validate: ae },
    // C-type double
    double: { type: "number", validate: ae },
    // hint to the UI to hide input strings
    password: !0,
    // unchecked string payload
    binary: !0
  }, e.fastFormats = {
    ...e.fullFormats,
    date: r(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, s),
    time: r(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, c),
    "date-time": r(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, p),
    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    // email (sources from jsen validator):
    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
  }, e.formatNames = Object.keys(e.fullFormats);
  function t(C) {
    return C % 4 === 0 && (C % 100 !== 0 || C % 400 === 0);
  }
  const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function i(C) {
    const S = n.exec(C);
    if (!S)
      return !1;
    const z = +S[1], K = +S[2], W = +S[3];
    return K >= 1 && K <= 12 && W >= 1 && W <= (K === 2 && t(z) ? 29 : a[K]);
  }
  function s(C, S) {
    if (C && S)
      return C > S ? 1 : C < S ? -1 : 0;
  }
  const o = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
  function u(C, S) {
    const z = o.exec(C);
    if (!z)
      return !1;
    const K = +z[1], W = +z[2], ee = +z[3], se = z[5];
    return (K <= 23 && W <= 59 && ee <= 59 || K === 23 && W === 59 && ee === 60) && (!S || se !== "");
  }
  function c(C, S) {
    if (!(C && S))
      return;
    const z = o.exec(C), K = o.exec(S);
    if (z && K)
      return C = z[1] + z[2] + z[3] + (z[4] || ""), S = K[1] + K[2] + K[3] + (K[4] || ""), C > S ? 1 : C < S ? -1 : 0;
  }
  const f = /t|\s/i;
  function h(C) {
    const S = C.split(f);
    return S.length === 2 && i(S[0]) && u(S[1], !0);
  }
  function p(C, S) {
    if (!(C && S))
      return;
    const [z, K] = C.split(f), [W, ee] = S.split(f), se = s(z, W);
    if (se !== void 0)
      return se || c(K, ee);
  }
  const v = /\/|:/, $ = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function b(C) {
    return v.test(C) && $.test(C);
  }
  const _ = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function g(C) {
    return _.lastIndex = 0, _.test(C);
  }
  const m = -(2 ** 31), P = 2 ** 31 - 1;
  function N(C) {
    return Number.isInteger(C) && C <= P && C >= m;
  }
  function D(C) {
    return Number.isInteger(C);
  }
  function ae() {
    return !0;
  }
  const ce = /[^\\]\\Z/;
  function L(C) {
    if (ce.test(C))
      return !1;
    try {
      return new RegExp(C), !0;
    } catch {
      return !1;
    }
  }
})(fo);
var lo = {}, Dn = {}, Jr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class r {
  }
  e._CodeOrName = r, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class t extends r {
    constructor(m) {
      if (super(), !e.IDENTIFIER.test(m))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = m;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return !1;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  e.Name = t;
  class n extends r {
    constructor(m) {
      super(), this._items = typeof m == "string" ? [m] : m;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const m = this._items[0];
      return m === "" || m === '""';
    }
    get str() {
      var m;
      return (m = this._str) !== null && m !== void 0 ? m : this._str = this._items.reduce((P, N) => `${P}${N}`, "");
    }
    get names() {
      var m;
      return (m = this._names) !== null && m !== void 0 ? m : this._names = this._items.reduce((P, N) => (N instanceof t && (P[N.str] = (P[N.str] || 0) + 1), P), {});
    }
  }
  e._Code = n, e.nil = new n("");
  function a(g, ...m) {
    const P = [g[0]];
    let N = 0;
    for (; N < m.length; )
      o(P, m[N]), P.push(g[++N]);
    return new n(P);
  }
  e._ = a;
  const i = new n("+");
  function s(g, ...m) {
    const P = [v(g[0])];
    let N = 0;
    for (; N < m.length; )
      P.push(i), o(P, m[N]), P.push(i, v(g[++N]));
    return u(P), new n(P);
  }
  e.str = s;
  function o(g, m) {
    m instanceof n ? g.push(...m._items) : m instanceof t ? g.push(m) : g.push(h(m));
  }
  e.addCodeArg = o;
  function u(g) {
    let m = 1;
    for (; m < g.length - 1; ) {
      if (g[m] === i) {
        const P = c(g[m - 1], g[m + 1]);
        if (P !== void 0) {
          g.splice(m - 1, 3, P);
          continue;
        }
        g[m++] = "+";
      }
      m++;
    }
  }
  function c(g, m) {
    if (m === '""')
      return g;
    if (g === '""')
      return m;
    if (typeof g == "string")
      return m instanceof t || g[g.length - 1] !== '"' ? void 0 : typeof m != "string" ? `${g.slice(0, -1)}${m}"` : m[0] === '"' ? g.slice(0, -1) + m.slice(1) : void 0;
    if (typeof m == "string" && m[0] === '"' && !(g instanceof t))
      return `"${g}${m.slice(1)}`;
  }
  function f(g, m) {
    return m.emptyStr() ? g : g.emptyStr() ? m : s`${g}${m}`;
  }
  e.strConcat = f;
  function h(g) {
    return typeof g == "number" || typeof g == "boolean" || g === null ? g : v(Array.isArray(g) ? g.join(",") : g);
  }
  function p(g) {
    return new n(v(g));
  }
  e.stringify = p;
  function v(g) {
    return JSON.stringify(g).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = v;
  function $(g) {
    return typeof g == "string" && e.IDENTIFIER.test(g) ? new n(`.${g}`) : a`[${g}]`;
  }
  e.getProperty = $;
  function b(g) {
    if (typeof g == "string" && e.IDENTIFIER.test(g))
      return new n(`${g}`);
    throw new Error(`CodeGen: invalid export name: ${g}, use explicit $id name mapping`);
  }
  e.getEsmExportName = b;
  function _(g) {
    return new n(g.toString());
  }
  e.regexpCode = _;
})(Jr);
var Xt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const r = Jr;
  class t extends Error {
    constructor(c) {
      super(`CodeGen: "code" for ${c} not defined`), this.value = c.value;
    }
  }
  var n;
  (function(u) {
    u[u.Started = 0] = "Started", u[u.Completed = 1] = "Completed";
  })(n || (e.UsedValueState = n = {})), e.varKinds = {
    const: new r.Name("const"),
    let: new r.Name("let"),
    var: new r.Name("var")
  };
  class a {
    constructor({ prefixes: c, parent: f } = {}) {
      this._names = {}, this._prefixes = c, this._parent = f;
    }
    toName(c) {
      return c instanceof r.Name ? c : this.name(c);
    }
    name(c) {
      return new r.Name(this._newName(c));
    }
    _newName(c) {
      const f = this._names[c] || this._nameGroup(c);
      return `${c}${f.index++}`;
    }
    _nameGroup(c) {
      var f, h;
      if (!((h = (f = this._parent) === null || f === void 0 ? void 0 : f._prefixes) === null || h === void 0) && h.has(c) || this._prefixes && !this._prefixes.has(c))
        throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);
      return this._names[c] = { prefix: c, index: 0 };
    }
  }
  e.Scope = a;
  class i extends r.Name {
    constructor(c, f) {
      super(f), this.prefix = c;
    }
    setValue(c, { property: f, itemIndex: h }) {
      this.value = c, this.scopePath = (0, r._)`.${new r.Name(f)}[${h}]`;
    }
  }
  e.ValueScopeName = i;
  const s = (0, r._)`\n`;
  class o extends a {
    constructor(c) {
      super(c), this._values = {}, this._scope = c.scope, this.opts = { ...c, _n: c.lines ? s : r.nil };
    }
    get() {
      return this._scope;
    }
    name(c) {
      return new i(c, this._newName(c));
    }
    value(c, f) {
      var h;
      if (f.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const p = this.toName(c), { prefix: v } = p, $ = (h = f.key) !== null && h !== void 0 ? h : f.ref;
      let b = this._values[v];
      if (b) {
        const m = b.get($);
        if (m)
          return m;
      } else
        b = this._values[v] = /* @__PURE__ */ new Map();
      b.set($, p);
      const _ = this._scope[v] || (this._scope[v] = []), g = _.length;
      return _[g] = f.ref, p.setValue(f, { property: v, itemIndex: g }), p;
    }
    getValue(c, f) {
      const h = this._values[c];
      if (h)
        return h.get(f);
    }
    scopeRefs(c, f = this._values) {
      return this._reduceValues(f, (h) => {
        if (h.scopePath === void 0)
          throw new Error(`CodeGen: name "${h}" has no value`);
        return (0, r._)`${c}${h.scopePath}`;
      });
    }
    scopeCode(c = this._values, f, h) {
      return this._reduceValues(c, (p) => {
        if (p.value === void 0)
          throw new Error(`CodeGen: name "${p}" has no value`);
        return p.value.code;
      }, f, h);
    }
    _reduceValues(c, f, h = {}, p) {
      let v = r.nil;
      for (const $ in c) {
        const b = c[$];
        if (!b)
          continue;
        const _ = h[$] = h[$] || /* @__PURE__ */ new Map();
        b.forEach((g) => {
          if (_.has(g))
            return;
          _.set(g, n.Started);
          let m = f(g);
          if (m) {
            const P = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            v = (0, r._)`${v}${P} ${g} = ${m};${this.opts._n}`;
          } else if (m = p == null ? void 0 : p(g))
            v = (0, r._)`${v}${m}${this.opts._n}`;
          else
            throw new t(g);
          _.set(g, n.Completed);
        });
      }
      return v;
    }
  }
  e.ValueScope = o;
})(Xt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const r = Jr, t = Xt;
  var n = Jr;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return n._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return n.str;
  } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
    return n.strConcat;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return n.nil;
  } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
    return n.getProperty;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return n.stringify;
  } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
    return n.regexpCode;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return n.Name;
  } });
  var a = Xt;
  Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
    return a.Scope;
  } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
    return a.ValueScope;
  } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
    return a.ValueScopeName;
  } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
    return a.varKinds;
  } }), e.operators = {
    GT: new r._Code(">"),
    GTE: new r._Code(">="),
    LT: new r._Code("<"),
    LTE: new r._Code("<="),
    EQ: new r._Code("==="),
    NEQ: new r._Code("!=="),
    NOT: new r._Code("!"),
    OR: new r._Code("||"),
    AND: new r._Code("&&"),
    ADD: new r._Code("+")
  };
  class i {
    optimizeNodes() {
      return this;
    }
    optimizeNames(l, y) {
      return this;
    }
  }
  class s extends i {
    constructor(l, y, A) {
      super(), this.varKind = l, this.name = y, this.rhs = A;
    }
    render({ es5: l, _n: y }) {
      const A = l ? t.varKinds.var : this.varKind, x = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${A} ${this.name}${x};` + y;
    }
    optimizeNames(l, y) {
      if (l[this.name.str])
        return this.rhs && (this.rhs = ee(this.rhs, l, y)), this;
    }
    get names() {
      return this.rhs instanceof r._CodeOrName ? this.rhs.names : {};
    }
  }
  class o extends i {
    constructor(l, y, A) {
      super(), this.lhs = l, this.rhs = y, this.sideEffects = A;
    }
    render({ _n: l }) {
      return `${this.lhs} = ${this.rhs};` + l;
    }
    optimizeNames(l, y) {
      if (!(this.lhs instanceof r.Name && !l[this.lhs.str] && !this.sideEffects))
        return this.rhs = ee(this.rhs, l, y), this;
    }
    get names() {
      const l = this.lhs instanceof r.Name ? {} : { ...this.lhs.names };
      return W(l, this.rhs);
    }
  }
  class u extends o {
    constructor(l, y, A, x) {
      super(l, A, x), this.op = y;
    }
    render({ _n: l }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + l;
    }
  }
  class c extends i {
    constructor(l) {
      super(), this.label = l, this.names = {};
    }
    render({ _n: l }) {
      return `${this.label}:` + l;
    }
  }
  class f extends i {
    constructor(l) {
      super(), this.label = l, this.names = {};
    }
    render({ _n: l }) {
      return `break${this.label ? ` ${this.label}` : ""};` + l;
    }
  }
  class h extends i {
    constructor(l) {
      super(), this.error = l;
    }
    render({ _n: l }) {
      return `throw ${this.error};` + l;
    }
    get names() {
      return this.error.names;
    }
  }
  class p extends i {
    constructor(l) {
      super(), this.code = l;
    }
    render({ _n: l }) {
      return `${this.code};` + l;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(l, y) {
      return this.code = ee(this.code, l, y), this;
    }
    get names() {
      return this.code instanceof r._CodeOrName ? this.code.names : {};
    }
  }
  class v extends i {
    constructor(l = []) {
      super(), this.nodes = l;
    }
    render(l) {
      return this.nodes.reduce((y, A) => y + A.render(l), "");
    }
    optimizeNodes() {
      const { nodes: l } = this;
      let y = l.length;
      for (; y--; ) {
        const A = l[y].optimizeNodes();
        Array.isArray(A) ? l.splice(y, 1, ...A) : A ? l[y] = A : l.splice(y, 1);
      }
      return l.length > 0 ? this : void 0;
    }
    optimizeNames(l, y) {
      const { nodes: A } = this;
      let x = A.length;
      for (; x--; ) {
        const R = A[x];
        R.optimizeNames(l, y) || (se(l, R.names), A.splice(x, 1));
      }
      return A.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((l, y) => K(l, y.names), {});
    }
  }
  class $ extends v {
    render(l) {
      return "{" + l._n + super.render(l) + "}" + l._n;
    }
  }
  class b extends v {
  }
  class _ extends $ {
  }
  _.kind = "else";
  class g extends $ {
    constructor(l, y) {
      super(y), this.condition = l;
    }
    render(l) {
      let y = `if(${this.condition})` + super.render(l);
      return this.else && (y += "else " + this.else.render(l)), y;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const l = this.condition;
      if (l === !0)
        return this.nodes;
      let y = this.else;
      if (y) {
        const A = y.optimizeNodes();
        y = this.else = Array.isArray(A) ? new _(A) : A;
      }
      if (y)
        return l === !1 ? y instanceof g ? y : y.nodes : this.nodes.length ? this : new g(Se(l), y instanceof g ? [y] : y.nodes);
      if (!(l === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(l, y) {
      var A;
      if (this.else = (A = this.else) === null || A === void 0 ? void 0 : A.optimizeNames(l, y), !!(super.optimizeNames(l, y) || this.else))
        return this.condition = ee(this.condition, l, y), this;
    }
    get names() {
      const l = super.names;
      return W(l, this.condition), this.else && K(l, this.else.names), l;
    }
  }
  g.kind = "if";
  class m extends $ {
  }
  m.kind = "for";
  class P extends m {
    constructor(l) {
      super(), this.iteration = l;
    }
    render(l) {
      return `for(${this.iteration})` + super.render(l);
    }
    optimizeNames(l, y) {
      if (super.optimizeNames(l, y))
        return this.iteration = ee(this.iteration, l, y), this;
    }
    get names() {
      return K(super.names, this.iteration.names);
    }
  }
  class N extends m {
    constructor(l, y, A, x) {
      super(), this.varKind = l, this.name = y, this.from = A, this.to = x;
    }
    render(l) {
      const y = l.es5 ? t.varKinds.var : this.varKind, { name: A, from: x, to: R } = this;
      return `for(${y} ${A}=${x}; ${A}<${R}; ${A}++)` + super.render(l);
    }
    get names() {
      const l = W(super.names, this.from);
      return W(l, this.to);
    }
  }
  class D extends m {
    constructor(l, y, A, x) {
      super(), this.loop = l, this.varKind = y, this.name = A, this.iterable = x;
    }
    render(l) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(l);
    }
    optimizeNames(l, y) {
      if (super.optimizeNames(l, y))
        return this.iterable = ee(this.iterable, l, y), this;
    }
    get names() {
      return K(super.names, this.iterable.names);
    }
  }
  class ae extends $ {
    constructor(l, y, A) {
      super(), this.name = l, this.args = y, this.async = A;
    }
    render(l) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(l);
    }
  }
  ae.kind = "func";
  class ce extends v {
    render(l) {
      return "return " + super.render(l);
    }
  }
  ce.kind = "return";
  class L extends $ {
    render(l) {
      let y = "try" + super.render(l);
      return this.catch && (y += this.catch.render(l)), this.finally && (y += this.finally.render(l)), y;
    }
    optimizeNodes() {
      var l, y;
      return super.optimizeNodes(), (l = this.catch) === null || l === void 0 || l.optimizeNodes(), (y = this.finally) === null || y === void 0 || y.optimizeNodes(), this;
    }
    optimizeNames(l, y) {
      var A, x;
      return super.optimizeNames(l, y), (A = this.catch) === null || A === void 0 || A.optimizeNames(l, y), (x = this.finally) === null || x === void 0 || x.optimizeNames(l, y), this;
    }
    get names() {
      const l = super.names;
      return this.catch && K(l, this.catch.names), this.finally && K(l, this.finally.names), l;
    }
  }
  class C extends $ {
    constructor(l) {
      super(), this.error = l;
    }
    render(l) {
      return `catch(${this.error})` + super.render(l);
    }
  }
  C.kind = "catch";
  class S extends $ {
    render(l) {
      return "finally" + super.render(l);
    }
  }
  S.kind = "finally";
  class z {
    constructor(l, y = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...y, _n: y.lines ? `
` : "" }, this._extScope = l, this._scope = new t.Scope({ parent: l }), this._nodes = [new b()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(l) {
      return this._scope.name(l);
    }
    // reserves unique name in the external scope
    scopeName(l) {
      return this._extScope.name(l);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(l, y) {
      const A = this._extScope.value(l, y);
      return (this._values[A.prefix] || (this._values[A.prefix] = /* @__PURE__ */ new Set())).add(A), A;
    }
    getScopeValue(l, y) {
      return this._extScope.getValue(l, y);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(l) {
      return this._extScope.scopeRefs(l, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(l, y, A, x) {
      const R = this._scope.toName(y);
      return A !== void 0 && x && (this._constants[R.str] = A), this._leafNode(new s(l, R, A)), R;
    }
    // `const` declaration (`var` in es5 mode)
    const(l, y, A) {
      return this._def(t.varKinds.const, l, y, A);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(l, y, A) {
      return this._def(t.varKinds.let, l, y, A);
    }
    // `var` declaration with optional assignment
    var(l, y, A) {
      return this._def(t.varKinds.var, l, y, A);
    }
    // assignment code
    assign(l, y, A) {
      return this._leafNode(new o(l, y, A));
    }
    // `+=` code
    add(l, y) {
      return this._leafNode(new u(l, e.operators.ADD, y));
    }
    // appends passed SafeExpr to code or executes Block
    code(l) {
      return typeof l == "function" ? l() : l !== r.nil && this._leafNode(new p(l)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...l) {
      const y = ["{"];
      for (const [A, x] of l)
        y.length > 1 && y.push(","), y.push(A), (A !== x || this.opts.es5) && (y.push(":"), (0, r.addCodeArg)(y, x));
      return y.push("}"), new r._Code(y);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(l, y, A) {
      if (this._blockNode(new g(l)), y && A)
        this.code(y).else().code(A).endIf();
      else if (y)
        this.code(y).endIf();
      else if (A)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(l) {
      return this._elseNode(new g(l));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new _());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(g, _);
    }
    _for(l, y) {
      return this._blockNode(l), y && this.code(y).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(l, y) {
      return this._for(new P(l), y);
    }
    // `for` statement for a range of values
    forRange(l, y, A, x, R = this.opts.es5 ? t.varKinds.var : t.varKinds.let) {
      const B = this._scope.toName(l);
      return this._for(new N(R, B, y, A), () => x(B));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(l, y, A, x = t.varKinds.const) {
      const R = this._scope.toName(l);
      if (this.opts.es5) {
        const B = y instanceof r.Name ? y : this.var("_arr", y);
        return this.forRange("_i", 0, (0, r._)`${B}.length`, (Ce) => {
          this.var(R, (0, r._)`${B}[${Ce}]`), A(R);
        });
      }
      return this._for(new D("of", x, R, y), () => A(R));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(l, y, A, x = this.opts.es5 ? t.varKinds.var : t.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(l, (0, r._)`Object.keys(${y})`, A);
      const R = this._scope.toName(l);
      return this._for(new D("in", x, R, y), () => A(R));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode(m);
    }
    // `label` statement
    label(l) {
      return this._leafNode(new c(l));
    }
    // `break` statement
    break(l) {
      return this._leafNode(new f(l));
    }
    // `return` statement
    return(l) {
      const y = new ce();
      if (this._blockNode(y), this.code(l), y.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(ce);
    }
    // `try` statement
    try(l, y, A) {
      if (!y && !A)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const x = new L();
      if (this._blockNode(x), this.code(l), y) {
        const R = this.name("e");
        this._currNode = x.catch = new C(R), y(R);
      }
      return A && (this._currNode = x.finally = new S(), this.code(A)), this._endBlockNode(C, S);
    }
    // `throw` statement
    throw(l) {
      return this._leafNode(new h(l));
    }
    // start self-balancing block
    block(l, y) {
      return this._blockStarts.push(this._nodes.length), l && this.code(l).endBlock(y), this;
    }
    // end the current self-balancing block
    endBlock(l) {
      const y = this._blockStarts.pop();
      if (y === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const A = this._nodes.length - y;
      if (A < 0 || l !== void 0 && A !== l)
        throw new Error(`CodeGen: wrong number of nodes: ${A} vs ${l} expected`);
      return this._nodes.length = y, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(l, y = r.nil, A, x) {
      return this._blockNode(new ae(l, y, A)), x && this.code(x).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(ae);
    }
    optimize(l = 1) {
      for (; l-- > 0; )
        this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(l) {
      return this._currNode.nodes.push(l), this;
    }
    _blockNode(l) {
      this._currNode.nodes.push(l), this._nodes.push(l);
    }
    _endBlockNode(l, y) {
      const A = this._currNode;
      if (A instanceof l || y && A instanceof y)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${y ? `${l.kind}/${y.kind}` : l.kind}"`);
    }
    _elseNode(l) {
      const y = this._currNode;
      if (!(y instanceof g))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = y.else = l, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const l = this._nodes;
      return l[l.length - 1];
    }
    set _currNode(l) {
      const y = this._nodes;
      y[y.length - 1] = l;
    }
  }
  e.CodeGen = z;
  function K(T, l) {
    for (const y in l)
      T[y] = (T[y] || 0) + (l[y] || 0);
    return T;
  }
  function W(T, l) {
    return l instanceof r._CodeOrName ? K(T, l.names) : T;
  }
  function ee(T, l, y) {
    if (T instanceof r.Name)
      return A(T);
    if (!x(T))
      return T;
    return new r._Code(T._items.reduce((R, B) => (B instanceof r.Name && (B = A(B)), B instanceof r._Code ? R.push(...B._items) : R.push(B), R), []));
    function A(R) {
      const B = y[R.str];
      return B === void 0 || l[R.str] !== 1 ? R : (delete l[R.str], B);
    }
    function x(R) {
      return R instanceof r._Code && R._items.some((B) => B instanceof r.Name && l[B.str] === 1 && y[B.str] !== void 0);
    }
  }
  function se(T, l) {
    for (const y in l)
      T[y] = (T[y] || 0) - (l[y] || 0);
  }
  function Se(T) {
    return typeof T == "boolean" || typeof T == "number" || T === null ? !T : (0, r._)`!${Ae(T)}`;
  }
  e.not = Se;
  const ze = je(e.operators.AND);
  function Ie(...T) {
    return T.reduce(ze);
  }
  e.and = Ie;
  const Ne = je(e.operators.OR);
  function Ke(...T) {
    return T.reduce(Ne);
  }
  e.or = Ke;
  function je(T) {
    return (l, y) => l === r.nil ? y : y === r.nil ? l : (0, r._)`${Ae(l)} ${T} ${Ae(y)}`;
  }
  function Ae(T) {
    return T instanceof r.Name ? T : (0, r._)`(${T})`;
  }
})(Dn);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
  const r = ba, t = Dn, n = t.operators, a = {
    formatMaximum: { okStr: "<=", ok: n.LTE, fail: n.GT },
    formatMinimum: { okStr: ">=", ok: n.GTE, fail: n.LT },
    formatExclusiveMaximum: { okStr: "<", ok: n.LT, fail: n.GTE },
    formatExclusiveMinimum: { okStr: ">", ok: n.GT, fail: n.LTE }
  }, i = {
    message: ({ keyword: o, schemaCode: u }) => t.str`should be ${a[o].okStr} ${u}`,
    params: ({ keyword: o, schemaCode: u }) => t._`{comparison: ${a[o].okStr}, limit: ${u}}`
  };
  e.formatLimitDefinition = {
    keyword: Object.keys(a),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: i,
    code(o) {
      const { gen: u, data: c, schemaCode: f, keyword: h, it: p } = o, { opts: v, self: $ } = p;
      if (!v.validateFormats)
        return;
      const b = new r.KeywordCxt(p, $.RULES.all.format.definition, "format");
      b.$data ? _() : g();
      function _() {
        const P = u.scopeValue("formats", {
          ref: $.formats,
          code: v.code.formats
        }), N = u.const("fmt", t._`${P}[${b.schemaCode}]`);
        o.fail$data(t.or(t._`typeof ${N} != "object"`, t._`${N} instanceof RegExp`, t._`typeof ${N}.compare != "function"`, m(N)));
      }
      function g() {
        const P = b.schema, N = $.formats[P];
        if (!N || N === !0)
          return;
        if (typeof N != "object" || N instanceof RegExp || typeof N.compare != "function")
          throw new Error(`"${h}": format "${P}" does not define "compare" function`);
        const D = u.scopeValue("formats", {
          key: P,
          ref: N,
          code: v.code.formats ? t._`${v.code.formats}${t.getProperty(P)}` : void 0
        });
        o.fail$data(m(D));
      }
      function m(P) {
        return t._`${P}.compare(${c}, ${f}) ${a[h].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  const s = (o) => (o.addKeyword(e.formatLimitDefinition), o);
  e.default = s;
})(lo);
(function(e, r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const t = fo, n = lo, a = Dn, i = new a.Name("fullFormats"), s = new a.Name("fastFormats"), o = (c, f = { keywords: !0 }) => {
    if (Array.isArray(f))
      return u(c, f, t.fullFormats, i), c;
    const [h, p] = f.mode === "fast" ? [t.fastFormats, s] : [t.fullFormats, i], v = f.formats || t.formatNames;
    return u(c, v, h, p), f.keywords && n.default(c), c;
  };
  o.get = (c, f = "full") => {
    const p = (f === "fast" ? t.fastFormats : t.fullFormats)[c];
    if (!p)
      throw new Error(`Unknown format "${c}"`);
    return p;
  };
  function u(c, f, h, p) {
    var v, $;
    (v = ($ = c.opts.code).formats) !== null && v !== void 0 || ($.formats = a._`require("ajv-formats/dist/formats").${p}`);
    for (const b of f)
      c.addFormat(b, h[b]);
  }
  e.exports = r = o, Object.defineProperty(r, "__esModule", { value: !0 }), r.default = o;
})(Jt, Jt.exports);
var b5 = Jt.exports;
const $a = /* @__PURE__ */ Q(b5), w5 = {
  allErrors: !0,
  multipleOfPrecision: 8,
  strict: !1,
  verbose: !0,
  discriminator: !1
  // TODO enable this in V6
}, A5 = /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/, C5 = /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/;
function E5(e, r, t = {}, n, a = ba) {
  const i = new a({ ...w5, ...t });
  return n ? $a(i, n) : n !== !1 && $a(i), i.addFormat("data-url", C5), i.addFormat("color", A5), i.addKeyword(wa), i.addKeyword(Xo), Array.isArray(e) && i.addMetaSchema(e), Kr(r) && Object.keys(r).forEach((s) => {
    i.addFormat(s, r[s]);
  }), i;
}
function O5(e = [], r) {
  return e.map((t) => {
    const { instancePath: n, keyword: a, params: i, schemaPath: s, parentSchema: o, ...u } = t;
    let { message: c = "" } = u, f = n.replace(/\//g, "."), h = `${f} ${c}`.trim();
    if ("missingProperty" in i) {
      f = f ? `${f}.${i.missingProperty}` : i.missingProperty;
      const p = i.missingProperty, v = Zn(Z(r, `${f.replace(/^\./, "")}`)).title;
      if (v)
        c = c.replace(p, v);
      else {
        const $ = Z(o, [ye, p, "title"]);
        $ && (c = c.replace(p, $));
      }
      h = c;
    } else {
      const p = Zn(Z(r, `${f.replace(/^\./, "")}`)).title;
      if (p)
        h = `'${p}' ${c}`.trim();
      else {
        const v = o == null ? void 0 : o.title;
        v && (h = `'${v}' ${c}`.trim());
      }
    }
    return {
      name: a,
      property: f,
      message: c,
      params: i,
      stack: h,
      schemaPath: s
    };
  });
}
function P5(e, r, t, n, a, i, s) {
  const { validationError: o } = r;
  let u = O5(r.errors, s);
  o && (u = [...u, { stack: o.message }]), typeof i == "function" && (u = i(u, s));
  let c = g5(u);
  if (o && (c = {
    ...c,
    $schema: {
      __errors: [o.message]
    }
  }), typeof a != "function")
    return { errors: u, errorSchema: c };
  const f = X9(e, n, t, n, !0), h = a(f, Dt(f), s), p = co(h);
  return m5({ errors: u, errorSchema: c }, p);
}
class T5 {
  /** Constructs an `AJV8Validator` instance using the `options`
   *
   * @param options - The `CustomValidatorOptionsType` options that are used to create the AJV instance
   * @param [localizer] - If provided, is used to localize a list of Ajv `ErrorObject`s
   */
  constructor(r, t) {
    const { additionalMetaSchemas: n, customFormats: a, ajvOptionsOverrides: i, ajvFormatOptions: s, AjvClass: o } = r;
    this.ajv = E5(n, a, i, s, o), this.localizer = t;
  }
  /** Resets the internal AJV validator to clear schemas from it. Can be helpful for resetting the validator for tests.
   */
  reset() {
    this.ajv.removeSchema();
  }
  /** Converts an `errorSchema` into a list of `RJSFValidationErrors`
   *
   * @param errorSchema - The `ErrorSchema` instance to convert
   * @param [fieldPath=[]] - The current field path, defaults to [] if not specified
   * @deprecated - Use the `toErrorList()` function provided by `@rjsf/utils` instead. This function will be removed in
   *        the next major release.
   */
  toErrorList(r, t = []) {
    return Mn(r, t);
  }
  /** Runs the pure validation of the `schema` and `formData` without any of the RJSF functionality. Provided for use
   * by the playground. Returns the `errors` from the validation
   *
   * @param schema - The schema against which to validate the form data   * @param schema
   * @param formData - The form data to validate
   */
  rawValidation(r, t) {
    let n, a;
    r[Ir] && (a = this.ajv.getSchema(r[Ir]));
    try {
      a === void 0 && (a = this.ajv.compile(r)), a(t);
    } catch (s) {
      n = s;
    }
    let i;
    return a && (typeof this.localizer == "function" && this.localizer(a.errors), i = a.errors || void 0, a.errors = null), {
      errors: i,
      validationError: n
    };
  }
  /** This function processes the `formData` with an optional user contributed `customValidate` function, which receives
   * the form data and a `errorHandler` function that will be used to add custom validation errors for each field. Also
   * supports a `transformErrors` function that will take the raw AJV validation errors, prior to custom validation and
   * transform them in what ever way it chooses.
   *
   * @param formData - The form data to validate
   * @param schema - The schema against which to validate the form data
   * @param [customValidate] - An optional function that is used to perform custom validation
   * @param [transformErrors] - An optional function that is used to transform errors after AJV validation
   * @param [uiSchema] - An optional uiSchema that is passed to `transformErrors` and `customValidate`
   */
  validateFormData(r, t, n, a, i) {
    const s = this.rawValidation(t, r);
    return P5(this, s, r, t, n, a, i);
  }
  /**
   * This function checks if a schema needs to be added and if the root schemas don't match it removes the old root schema from the ajv instance and adds the new one.
   * @param rootSchema - The root schema used to provide $ref resolutions
   */
  handleSchemaUpdate(r) {
    var t, n;
    const a = (t = r[Ir]) !== null && t !== void 0 ? t : Ca;
    this.ajv.getSchema(a) === void 0 ? this.ajv.addSchema(r, a) : y2(r, (n = this.ajv.getSchema(a)) === null || n === void 0 ? void 0 : n.schema) || (this.ajv.removeSchema(a), this.ajv.addSchema(r, a));
  }
  /** Validates data against a schema, returning true if the data is valid, or
   * false otherwise. If the schema is invalid, then this function will return
   * false.
   *
   * @param schema - The schema against which to validate the form data
   * @param formData - The form data to validate
   * @param rootSchema - The root schema used to provide $ref resolutions
   */
  isValid(r, t, n) {
    var a;
    try {
      this.handleSchemaUpdate(n);
      const i = Fn(r), s = (a = i[Ir]) !== null && a !== void 0 ? a : s5(i);
      let o;
      return o = this.ajv.getSchema(s), o === void 0 && (o = this.ajv.addSchema(i, s).getSchema(s) || this.ajv.compile(i)), o(t);
    } catch (i) {
      return console.warn("Error encountered compiling schema:", i), !1;
    }
  }
}
function S5(e = {}, r) {
  return new T5(e, r);
}
const Mt = S5(), L5 = ({
  schema: e,
  handleSubmit: r,
  handleTimeSpent: t
}) => {
  const [n, a] = pe(-1), [i, s] = pe({}), o = Object.keys(e.properties || {}), u = o[n], c = o.length + 1, [f, h] = pe(void 0), [p, v] = pe(!0), [$, b] = pe(Date.now()), [_, g] = pe(
    {}
  );
  Ct(() => {
    n >= 0 && n < o.length ? v(P()) : v(!0);
  }, [n, i]), Ct(() => {
    n >= 0 && n < o.length && b(Date.now());
  }, [n]);
  const m = () => {
    if (n === -1) {
      a(0);
      return;
    }
    if (!P()) {
      v(!1);
      return;
    }
    if (n >= 0 && n < o.length) {
      const C = Math.round((Date.now() - $) / 1e3);
      g((S) => ({
        ...S,
        [u]: (S[u] || 0) + C
      }));
    }
    if (n === c - 2) {
      const C = Math.round((Date.now() - $) / 1e3), S = {
        ..._,
        [u]: (_[u] || 0) + C
      };
      r(i), t == null || t(S);
    }
    n < c - 1 && (a(n + 1), v(!0));
  };
  Ct(() => {
    const L = (S) => {
      if (S.key === "Enter") {
        if (S.preventDefault(), !p) return;
        m();
      }
    }, C = document.querySelector("form");
    return C ? (C.addEventListener("keydown", L), () => C.removeEventListener("keydown", L)) : (window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L));
  }, [n, p, m]);
  const P = () => {
    var z, K, W;
    if (n === -1 || n >= o.length) return !0;
    const L = i[u], C = {
      type: "object",
      properties: {
        [u]: (z = e.properties) == null ? void 0 : z[u]
      },
      required: (K = e.required) != null && K.includes(u) ? [u] : []
    };
    return (W = e.required) != null && W.includes(u) && (L === void 0 || L === "") ? !1 : Mt.validateFormData(
      { [u]: L },
      C
    ).errors.length === 0;
  }, N = () => {
    if (n > -1) {
      if (n < o.length) {
        const L = Math.round((Date.now() - $) / 1e3);
        g((C) => ({
          ...C,
          [u]: (C[u] || 0) + L
        }));
      }
      a(n - 1);
    }
  }, D = (L) => {
    var z;
    if (s({ ...i, ...L.formData }), n === -1) return;
    const C = {
      type: "object",
      properties: {
        [u]: e.properties[u]
      },
      required: (z = e.required) != null && z.includes(u) ? [u] : []
    }, S = Mt.validateFormData(
      { [u]: L.formData[u] },
      C
    );
    v(S.errors.length === 0), h(S.errorSchema);
  }, ae = (L) => {
    var S;
    const C = (S = e.properties) == null ? void 0 : S[L];
    if (!C) return "text";
    switch (C.type) {
      case "string":
        return C.format === "email" ? "email" : C.enum ? "select" : "text";
      case "integer":
      case "number":
        return "number";
      case "boolean":
        return "checkbox";
      default:
        return "text";
    }
  }, ce = () => {
    var L, C;
    if (n === -1)
      return /* @__PURE__ */ E.jsx(j5, { onStart: m, schema: e });
    if (n === o.length)
      return /* @__PURE__ */ E.jsx(x5, {});
    {
      const S = ae(u), z = (L = e.properties) == null ? void 0 : L[u];
      return /* @__PURE__ */ E.jsx(
        Mo,
        {
          schema: {
            type: "object",
            properties: {
              [u]: {
                ...z,
                title: void 0,
                // Remove RJSF's default title
                description: void 0
                // Remove RJSF's default description
              }
            },
            required: (C = e.required) != null && C.includes(u) ? [u] : []
          },
          formData: i,
          validator: Mt,
          showErrorList: !1,
          uiSchema: {
            [u]: {
              "ui:widget": S,
              "ui:title": z.title,
              // Pass title to custom widget
              "ui:description": z.description,
              "ui:options": {
                label: !1,
                // Disable RJSF's label rendering
                description: !1
                // Disable RJSF's description rendering
              }
            }
          },
          widgets: {
            text: zo,
            number: Ko,
            email: Vo,
            select: Uo,
            checkbox: Go
          },
          formContext: { errors: f },
          onChange: D,
          children: /* @__PURE__ */ E.jsx("div", {})
        }
      );
    }
  };
  return /* @__PURE__ */ E.jsxs("div", { className: "fixed inset-0 flex items-center justify-center bg-red-300", children: [
    /* @__PURE__ */ E.jsx("div", { className: "absolute top-0 left-0 right-0 p-4", children: /* @__PURE__ */ E.jsx(I5, { current: n + 1, total: c }) }),
    /* @__PURE__ */ E.jsxs("div", { className: "bg-white p-8 min-w-[640px] min-h-[372px] rounded-lg shadow-xl flex flex-col", children: [
      /* @__PURE__ */ E.jsx(Fo, { mode: "wait", children: /* @__PURE__ */ E.jsx(
        k.div,
        {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -50 },
          transition: { duration: 0.3 },
          className: "flex-grow flex flex-col justify-center overflow-auto",
          children: ce()
        },
        n
      ) }),
      /* @__PURE__ */ E.jsx(
        N5,
        {
          currentStep: n,
          totalSteps: c,
          onBack: N,
          onNext: m,
          isNextDisabled: n >= 0 && !p
        }
      )
    ] })
  ] });
}, I5 = ({
  current: e,
  total: r
}) => /* @__PURE__ */ E.jsx("div", { className: "w-full bg-gray-200 bg-opacity-70 rounded-full h-1 border border-gray-300", children: /* @__PURE__ */ E.jsx(
  "div",
  {
    className: "bg-blue-600 h-full rounded-full transition-all duration-300 ease-in-out",
    style: { width: `${e / r * 100}%` }
  }
) }), N5 = ({ currentStep: e, totalSteps: r, onBack: t, onNext: n, isNextDisabled: a }) => /* @__PURE__ */ E.jsxs(
  "div",
  {
    className: `flex ${e === -1 ? "justify-center items-center" : "justify-between"}`,
    children: [
      e > -1 && e < r - 1 && /* @__PURE__ */ E.jsx(
        k.button,
        {
          onClick: t,
          className: "w-[135px] px-5 py-2 bg-[#333e48] rounded-[40px] justify-center items-center inline-flex",
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          children: /* @__PURE__ */ E.jsx("span", { className: "text-white text-sm font-semibold uppercase leading-[21px] tracking-widest", children: "← Back" })
        }
      ),
      e < r - 1 && /* @__PURE__ */ E.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ E.jsx(
          k.button,
          {
            onClick: n,
            disabled: a,
            className: `w-48 px-5 py-2 rounded-full justify-center items-center inline-flex ${a ? "bg-gray-300 cursor-not-allowed" : "bg-[#333e48] hover:scale-105 active:scale-95"}`,
            whileHover: a ? void 0 : { scale: 1.05 },
            whileTap: a ? void 0 : { scale: 0.95 },
            children: /* @__PURE__ */ E.jsx("span", { className: "text-white text-sm font-semibold uppercase leading-[21px] tracking-widest", children: e === -1 ? "Start" : "Next →" })
          }
        ),
        e === -1 && /* @__PURE__ */ E.jsx("div", { className: "absolute top-3 -right-24", children: /* @__PURE__ */ E.jsx(
          "img",
          {
            src: qo,
            alt: "Press Enter",
            className: "w-[80.08px] h-[13.12px]"
          }
        ) })
      ] })
    ]
  }
), j5 = ({ onStart: e, schema: r }) => /* @__PURE__ */ E.jsx(
  k.div,
  {
    className: "h-[372px] flex-col justify-start items-start gap-2.5 inline-flex",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    children: /* @__PURE__ */ E.jsx("div", { className: "w-[623px] h-[370px] relative bg-white/70 rounded-[10px]", children: /* @__PURE__ */ E.jsx("div", { className: "absolute inset-0 flex flex-col justify-center items-center gap-6", children: /* @__PURE__ */ E.jsxs("div", { className: "flex-col justify-start items-start gap-3.5 flex", children: [
      /* @__PURE__ */ E.jsx(
        k.h1,
        {
          className: "w-[547px] text-center text-[#333133] text-[22px] font-semibold",
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.2 },
          children: r.title || "Welcome"
        }
      ),
      /* @__PURE__ */ E.jsx(
        k.p,
        {
          className: "w-[547px] text-center text-[#333133] text-sm font-normal",
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.4 },
          children: r.description || "Please fill out the following form."
        }
      )
    ] }) }) })
  }
), x5 = () => /* @__PURE__ */ E.jsx(
  k.div,
  {
    className: "flex-col justify-center items-center gap-6 inline-flex h-full w-full",
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    children: /* @__PURE__ */ E.jsx("div", { className: "relative bg-white/70 rounded-[10px] overflow-hidden p-8 h-full w-full flex items-center justify-center", children: /* @__PURE__ */ E.jsxs(
      k.div,
      {
        className: "flex flex-col justify-center items-center",
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { delay: 0.3, duration: 0.5 },
        children: [
          /* @__PURE__ */ E.jsx(
            k.h1,
            {
              className: "text-4xl font-bold text-[#333133] mb-4",
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.5, duration: 0.5 },
              children: "Thank You!"
            }
          ),
          /* @__PURE__ */ E.jsx(
            k.p,
            {
              className: "text-xl text-[#333133]",
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.7, duration: 0.5 },
              children: "Your submission has been received."
            }
          ),
          /* @__PURE__ */ E.jsx(
            k.div,
            {
              className: "mt-8",
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { delay: 0.9, duration: 0.5 },
              children: /* @__PURE__ */ E.jsx(
                "svg",
                {
                  className: "w-16 h-16 text-green-500",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ E.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M5 13l4 4L19 7"
                    }
                  )
                }
              )
            }
          )
        ]
      }
    ) })
  }
);
export {
  L5 as FormRenderer
};
