import ba, { useState as le, useEffect as Ct } from "react";
import Fo from "@rjsf/core";
import { motion as D, AnimatePresence as Do } from "framer-motion";
import wa from "ajv";
var Nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Xn;
function Lo() {
  if (Xn) return cr;
  Xn = 1;
  var e = ba, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var Jn;
function Ko() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ba, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), _ = Symbol.iterator, b = "@@iterator";
    function m(d) {
      if (d === null || typeof d != "object")
        return null;
      var w = _ && d[_] || d[b];
      return typeof w == "function" ? w : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(d) {
      {
        for (var w = arguments.length, P = new Array(w > 1 ? w - 1 : 0), j = 1; j < w; j++)
          P[j - 1] = arguments[j];
        O("error", d, P);
      }
    }
    function O(d, w, P) {
      {
        var j = y.ReactDebugCurrentFrame, V = j.getStackAddendum();
        V !== "" && (w += "%s", P = P.concat([V]));
        var H = P.map(function(q) {
          return String(q);
        });
        H.unshift("Warning: " + w), Function.prototype.apply.call(console[d], console, H);
      }
    }
    var N = !1, S = !1, ie = !1, ae = !1, L = !1, E;
    E = Symbol.for("react.module.reference");
    function I(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === i || L || d === a || d === c || d === f || ae || d === v || N || S || ie || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === h || d.$$typeof === s || d.$$typeof === o || d.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === E || d.getModuleId !== void 0));
    }
    function F(d, w, P) {
      var j = d.displayName;
      if (j)
        return j;
      var V = w.displayName || w.name || "";
      return V !== "" ? P + "(" + V + ")" : P;
    }
    function z(d) {
      return d.displayName || "Context";
    }
    function W(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
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
            return z(w) + ".Consumer";
          case s:
            var P = d;
            return z(P._context) + ".Provider";
          case u:
            return F(d, d.render, "ForwardRef");
          case h:
            var j = d.displayName || null;
            return j !== null ? j : W(d.type) || "Memo";
          case p: {
            var V = d, H = V._payload, q = V._init;
            try {
              return W(q(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, oe = 0, Ne, Ke, Ie, xe, ze, Se, Ae;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function l() {
      {
        if (oe === 0) {
          Ne = console.log, Ke = console.info, Ie = console.warn, xe = console.error, ze = console.group, Se = console.groupCollapsed, Ae = console.groupEnd;
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
        oe++;
      }
    }
    function g() {
      {
        if (oe--, oe === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, d, {
              value: Ne
            }),
            info: ee({}, d, {
              value: Ke
            }),
            warn: ee({}, d, {
              value: Ie
            }),
            error: ee({}, d, {
              value: xe
            }),
            group: ee({}, d, {
              value: ze
            }),
            groupCollapsed: ee({}, d, {
              value: Se
            }),
            groupEnd: ee({}, d, {
              value: Ae
            })
          });
        }
        oe < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = y.ReactCurrentDispatcher, R;
    function M(d, w, P) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (V) {
            var j = V.stack.trim().match(/\n( *(at )?)/);
            R = j && j[1] || "";
          }
        return `
` + R + d;
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
        var P = Ce.get(d);
        if (P !== void 0)
          return P;
      }
      var j;
      B = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = A.current, A.current = null, l();
      try {
        if (w) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (ue) {
              j = ue;
            }
            Reflect.construct(d, [], q);
          } else {
            try {
              q.call();
            } catch (ue) {
              j = ue;
            }
            d.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ue) {
            j = ue;
          }
          d();
        }
      } catch (ue) {
        if (ue && j && typeof ue.stack == "string") {
          for (var K = ue.stack.split(`
`), se = j.stack.split(`
`), re = K.length - 1, te = se.length - 1; re >= 1 && te >= 0 && K[re] !== se[te]; )
            te--;
          for (; re >= 1 && te >= 0; re--, te--)
            if (K[re] !== se[te]) {
              if (re !== 1 || te !== 1)
                do
                  if (re--, te--, te < 0 || K[re] !== se[te]) {
                    var fe = `
` + K[re].replace(" at new ", " at ");
                    return d.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", d.displayName)), typeof d == "function" && Ce.set(d, fe), fe;
                  }
                while (re >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        B = !1, A.current = H, g(), Error.prepareStackTrace = V;
      }
      var Ue = d ? d.displayName || d.name : "", je = Ue ? M(Ue) : "";
      return typeof d == "function" && Ce.set(d, je), je;
    }
    function gt(d, w, P) {
      return Pr(d, !1);
    }
    function x(d) {
      var w = d.prototype;
      return !!(w && w.isReactComponent);
    }
    function Ee(d, w, P) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Pr(d, x(d));
      if (typeof d == "string")
        return M(d);
      switch (d) {
        case c:
          return M("Suspense");
        case f:
          return M("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case u:
            return gt(d.render);
          case h:
            return Ee(d.type, w, P);
          case p: {
            var j = d, V = j._payload, H = j._init;
            try {
              return Ee(H(V), w, P);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, or = {}, Ln = y.ReactDebugCurrentFrame;
    function Tr(d) {
      if (d) {
        var w = d._owner, P = Ee(d.type, d._source, w ? w.type : null);
        Ln.setExtraStackFrame(P);
      } else
        Ln.setExtraStackFrame(null);
    }
    function ho(d, w, P, j, V) {
      {
        var H = Function.call.bind(ve);
        for (var q in d)
          if (H(d, q)) {
            var K = void 0;
            try {
              if (typeof d[q] != "function") {
                var se = Error((j || "React class") + ": " + P + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              K = d[q](w, q, j, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              K = re;
            }
            K && !(K instanceof Error) && (Tr(V), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", P, q, typeof K), Tr(null)), K instanceof Error && !(K.message in or) && (or[K.message] = !0, Tr(V), $("Failed %s type: %s", P, K.message), Tr(null));
          }
      }
    }
    var vo = Array.isArray;
    function mt(d) {
      return vo(d);
    }
    function yo(d) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, P = w && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return P;
      }
    }
    function go(d) {
      try {
        return Kn(d), !1;
      } catch {
        return !0;
      }
    }
    function Kn(d) {
      return "" + d;
    }
    function zn(d) {
      if (go(d))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yo(d)), Kn(d);
    }
    var ur = y.ReactCurrentOwner, mo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qn, Un, $t;
    $t = {};
    function $o(d) {
      if (ve.call(d, "ref")) {
        var w = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function _o(d) {
      if (ve.call(d, "key")) {
        var w = Object.getOwnPropertyDescriptor(d, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function bo(d, w) {
      if (typeof d.ref == "string" && ur.current && w && ur.current.stateNode !== w) {
        var P = W(ur.current.type);
        $t[P] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(ur.current.type), d.ref), $t[P] = !0);
      }
    }
    function wo(d, w) {
      {
        var P = function() {
          qn || (qn = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        P.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Ao(d, w) {
      {
        var P = function() {
          Un || (Un = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        P.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Co = function(d, w, P, j, V, H, q) {
      var K = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: d,
        key: w,
        ref: P,
        props: q,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(K, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    };
    function Eo(d, w, P, j, V) {
      {
        var H, q = {}, K = null, se = null;
        P !== void 0 && (zn(P), K = "" + P), _o(w) && (zn(w.key), K = "" + w.key), $o(w) && (se = w.ref, bo(w, V));
        for (H in w)
          ve.call(w, H) && !mo.hasOwnProperty(H) && (q[H] = w[H]);
        if (d && d.defaultProps) {
          var re = d.defaultProps;
          for (H in re)
            q[H] === void 0 && (q[H] = re[H]);
        }
        if (K || se) {
          var te = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          K && wo(q, te), se && Ao(q, te);
        }
        return Co(d, K, se, V, j, ur.current, q);
      }
    }
    var _t = y.ReactCurrentOwner, Vn = y.ReactDebugCurrentFrame;
    function qe(d) {
      if (d) {
        var w = d._owner, P = Ee(d.type, d._source, w ? w.type : null);
        Vn.setExtraStackFrame(P);
      } else
        Vn.setExtraStackFrame(null);
    }
    var bt;
    bt = !1;
    function wt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === r;
    }
    function Gn() {
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
    function Oo(d) {
      return "";
    }
    var kn = {};
    function Po(d) {
      {
        var w = Gn();
        if (!w) {
          var P = typeof d == "string" ? d : d.displayName || d.name;
          P && (w = `

Check the top-level render call using <` + P + ">.");
        }
        return w;
      }
    }
    function Wn(d, w) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var P = Po(w);
        if (kn[P])
          return;
        kn[P] = !0;
        var j = "";
        d && d._owner && d._owner !== _t.current && (j = " It was passed a child from " + W(d._owner.type) + "."), qe(d), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, j), qe(null);
      }
    }
    function Hn(d, w) {
      {
        if (typeof d != "object")
          return;
        if (mt(d))
          for (var P = 0; P < d.length; P++) {
            var j = d[P];
            wt(j) && Wn(j, w);
          }
        else if (wt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var V = m(d);
          if (typeof V == "function" && V !== d.entries)
            for (var H = V.call(d), q; !(q = H.next()).done; )
              wt(q.value) && Wn(q.value, w);
        }
      }
    }
    function To(d) {
      {
        var w = d.type;
        if (w == null || typeof w == "string")
          return;
        var P;
        if (typeof w == "function")
          P = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === h))
          P = w.propTypes;
        else
          return;
        if (P) {
          var j = W(w);
          ho(P, d.props, "prop", j, d);
        } else if (w.PropTypes !== void 0 && !bt) {
          bt = !0;
          var V = W(w);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function No(d) {
      {
        for (var w = Object.keys(d.props), P = 0; P < w.length; P++) {
          var j = w[P];
          if (j !== "children" && j !== "key") {
            qe(d), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), qe(null);
            break;
          }
        }
        d.ref !== null && (qe(d), $("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
      }
    }
    var Yn = {};
    function Bn(d, w, P, j, V, H) {
      {
        var q = I(d);
        if (!q) {
          var K = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Oo();
          se ? K += se : K += Gn();
          var re;
          d === null ? re = "null" : mt(d) ? re = "array" : d !== void 0 && d.$$typeof === r ? (re = "<" + (W(d.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : re = typeof d, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, K);
        }
        var te = Eo(d, w, P, V, H);
        if (te == null)
          return te;
        if (q) {
          var fe = w.children;
          if (fe !== void 0)
            if (j)
              if (mt(fe)) {
                for (var Ue = 0; Ue < fe.length; Ue++)
                  Hn(fe[Ue], d);
                Object.freeze && Object.freeze(fe);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Hn(fe, d);
        }
        if (ve.call(w, "key")) {
          var je = W(d), ue = Object.keys(w).filter(function(Mo) {
            return Mo !== "key";
          }), At = ue.length > 0 ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Yn[je + At]) {
            var Ro = ue.length > 0 ? "{" + ue.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, At, je, Ro, je), Yn[je + At] = !0;
          }
        }
        return d === n ? No(te) : To(te), te;
      }
    }
    function Io(d, w, P) {
      return Bn(d, w, P, !0);
    }
    function xo(d, w, P) {
      return Bn(d, w, P, !1);
    }
    var So = xo, jo = Io;
    fr.Fragment = n, fr.jsx = So, fr.jsxs = jo;
  }()), fr;
}
process.env.NODE_ENV === "production" ? Ft.exports = Lo() : Ft.exports = Ko();
var C = Ft.exports;
const Zn = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  placeholder: a,
  schema: i,
  uiSchema: s,
  formContext: o
}) => {
  var O, N;
  const [u, c] = le(!1), f = (s == null ? void 0 : s["ui:title"]) || i.title, h = (s == null ? void 0 : s["ui:description"]) || i.description, p = s == null ? void 0 : s["ui:questionNumber"], v = (O = o == null ? void 0 : o.errors) == null ? void 0 : O[e], _ = (N = v == null ? void 0 : v.__errors) == null ? void 0 : N[0], b = !!_, m = i.format === "multiline", y = () => {
    c(!1);
  }, $ = (S) => {
    S.key === "ArrowDown" && m && (S.preventDefault(), n(r + `
`));
  };
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      D.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${u ? "text-blue-600" : b ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          p,
          ". ",
          f,
          " ",
          t && /* @__PURE__ */ C.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ C.jsxs(
      D.div,
      {
        className: "relative",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          m ? /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
            /* @__PURE__ */ C.jsx(
              "textarea",
              {
                id: e,
                value: r || "",
                placeholder: a || h || "Type your answer here",
                onChange: (S) => n(S.target.value),
                onFocus: () => c(!0),
                onBlur: y,
                onKeyDown: $,
                className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 placeholder:text-slate-400 ${b ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`,
                rows: 4
              }
            ),
            /* @__PURE__ */ C.jsxs("p", { className: "text-sm text-gray-500 mt-2", children: [
              "Press the ",
              /* @__PURE__ */ C.jsx("span", { className: "font-bold", children: "Arrow Down" }),
              " key to add a new line."
            ] })
          ] }) : /* @__PURE__ */ C.jsx(
            "input",
            {
              type: "text",
              id: e,
              value: r || "",
              placeholder: a || h || "Type your answer here",
              onChange: (S) => n(S.target.value),
              onFocus: () => c(!0),
              onBlur: y,
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 placeholder:text-slate-400 ${b ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`
            }
          ),
          /* @__PURE__ */ C.jsx(
            D.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${b ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: u || b ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          )
        ]
      }
    ),
    b && /* @__PURE__ */ C.jsx(
      D.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: _
      }
    )
  ] });
}, zo = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  placeholder: a,
  schema: i,
  uiSchema: s,
  formContext: o
}) => {
  var m, y;
  const [u, c] = le(!1), f = (s == null ? void 0 : s["ui:title"]) || i.title, h = (s == null ? void 0 : s["ui:description"]) || i.description, p = s == null ? void 0 : s["ui:questionNumber"], v = (m = o == null ? void 0 : o.errors) == null ? void 0 : m[e], _ = (y = v == null ? void 0 : v.__errors) == null ? void 0 : y[0], b = !!_;
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      D.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${u ? "text-blue-600" : b ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          p,
          ". ",
          f,
          " ",
          t && /* @__PURE__ */ C.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ C.jsxs(
      D.div,
      {
        className: "relative",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          /* @__PURE__ */ C.jsx(
            "input",
            {
              type: "number",
              id: e,
              value: r || "",
              placeholder: a || h,
              onChange: ($) => n($.target.value),
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${b ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`
            }
          ),
          /* @__PURE__ */ C.jsx(
            D.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${b ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: u || b ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          )
        ]
      }
    ),
    b && /* @__PURE__ */ C.jsx(
      D.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: _
      }
    )
  ] });
}, qo = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  placeholder: a,
  schema: i,
  uiSchema: s,
  formContext: o
}) => {
  var b, m;
  const [u, c] = le(!1), f = (s == null ? void 0 : s["ui:title"]) || i.title, h = (s == null ? void 0 : s["ui:description"]) || i.description;
  s == null || s["ui:questionNumber"];
  const p = (b = o == null ? void 0 : o.errors) == null ? void 0 : b[e], v = (m = p == null ? void 0 : p.__errors) == null ? void 0 : m[0], _ = !!v;
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      D.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${u ? "text-blue-600" : _ ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          f,
          " ",
          t && /* @__PURE__ */ C.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ C.jsxs(
      D.div,
      {
        className: "relative",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          /* @__PURE__ */ C.jsx(
            "input",
            {
              type: "email",
              id: e,
              value: r || "",
              placeholder: a || h,
              onChange: (y) => n(y.target.value),
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${_ ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`
            }
          ),
          /* @__PURE__ */ C.jsx(
            D.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${_ ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: u || _ ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          )
        ]
      }
    ),
    _ && /* @__PURE__ */ C.jsx(
      D.p,
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
  var y, $;
  const [u, c] = le(!1), f = (s == null ? void 0 : s["ui:enumOptions"]) || [], h = (s == null ? void 0 : s["ui:title"]) || i.title, p = (s == null ? void 0 : s["ui:description"]) || i.description, v = s == null ? void 0 : s["ui:questionNumber"], _ = (y = o == null ? void 0 : o.errors) == null ? void 0 : y[e], b = ($ = _ == null ? void 0 : _.__errors) == null ? void 0 : $[0], m = !!b;
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      D.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${u ? "text-blue-600" : m ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          v,
          ". ",
          h,
          " ",
          t && /* @__PURE__ */ C.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ C.jsxs(
      D.div,
      {
        className: "relative",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          /* @__PURE__ */ C.jsxs(
            "select",
            {
              id: e,
              value: r || "",
              onChange: (O) => n(O.target.value),
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 bg-transparent appearance-none ${m ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`,
              children: [
                /* @__PURE__ */ C.jsx("option", { value: "", disabled: !0, children: a || p || "Please select an option" }),
                f.map((O) => {
                  const N = typeof O == "string" || typeof O == "number" ? O : null, S = typeof O == "string" ? O.charAt(0).toUpperCase() + O.slice(1) : O;
                  return N !== null ? /* @__PURE__ */ C.jsx("option", { value: N, children: typeof S == "string" || typeof S == "number" ? S : JSON.stringify(S) }, N.toString()) : null;
                })
              ]
            }
          ),
          /* @__PURE__ */ C.jsx(
            D.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${m ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: u || m ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          ),
          /* @__PURE__ */ C.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700", children: /* @__PURE__ */ C.jsx(
            "svg",
            {
              className: "fill-current h-4 w-4",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ C.jsx("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" })
            }
          ) })
        ]
      }
    ),
    m && /* @__PURE__ */ C.jsx(
      D.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: b
      }
    )
  ] });
}, Vo = ({
  id: e,
  value: r = [],
  required: t,
  onChange: n,
  schema: a,
  uiSchema: i,
  formContext: s
}) => {
  var b, m;
  const o = (i == null ? void 0 : i["ui:enumOptions"]) || [], u = (i == null ? void 0 : i["ui:title"]) || a.title, c = (i == null ? void 0 : i["ui:description"]) || a.description, f = i == null ? void 0 : i["ui:questionNumber"], h = (b = s == null ? void 0 : s.errors) == null ? void 0 : b[e], p = (m = h == null ? void 0 : h.__errors) == null ? void 0 : m[0], v = !!p, _ = (y) => {
    const $ = r.includes(y) ? r.filter((O) => O !== y) : [...r, y];
    n($);
  };
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      D.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${v ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          f,
          ". ",
          u,
          " ",
          t && /* @__PURE__ */ C.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    c && /* @__PURE__ */ C.jsx(
      D.p,
      {
        className: "text-gray-600 mb-2",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: c
      }
    ),
    /* @__PURE__ */ C.jsx("div", { children: o.map((y) => /* @__PURE__ */ C.jsxs(
      D.div,
      {
        className: "flex items-center mb-2",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          /* @__PURE__ */ C.jsx(
            "input",
            {
              id: `${e}_${y}`,
              type: "checkbox",
              value: y,
              checked: r.includes(y),
              onChange: () => _(y),
              className: `mr-2 focus:ring-blue-600 ${v ? "text-red-500" : "text-blue-600"}`
            }
          ),
          /* @__PURE__ */ C.jsx(
            "label",
            {
              htmlFor: `${e}_${y}`,
              className: "text-xl text-gray-700",
              children: y
            }
          )
        ]
      },
      y
    )) }),
    v && /* @__PURE__ */ C.jsx(
      D.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: p
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
  var $, O;
  const [o, u] = le(!1), [c, f] = le(r || ""), h = (i == null ? void 0 : i["ui:title"]) || a.title;
  i != null && i["ui:description"] || a.description;
  const p = i == null ? void 0 : i["ui:questionNumber"], v = ($ = s == null ? void 0 : s.errors) == null ? void 0 : $[e], _ = (O = v == null ? void 0 : v.__errors) == null ? void 0 : O[0], b = !!_, m = () => {
    u(!1);
  }, y = (N) => {
    var ie;
    const S = (ie = N.target.files) == null ? void 0 : ie[0];
    if (S) {
      const ae = new FileReader();
      ae.onloadend = () => {
        const L = ae.result;
        f(L), n(L);
      }, ae.readAsDataURL(S);
    }
  };
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      D.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${o ? "text-blue-600" : b ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          p,
          ". ",
          h,
          " ",
          t && /* @__PURE__ */ C.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ C.jsxs(
      D.div,
      {
        className: "relative",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          /* @__PURE__ */ C.jsx(
            "input",
            {
              type: "file",
              id: e,
              accept: "image/*",
              onChange: y,
              onFocus: () => u(!0),
              onBlur: m,
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${b ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`
            }
          ),
          c && /* @__PURE__ */ C.jsx(
            D.img,
            {
              src: c,
              alt: "Preview",
              className: "mt-4 rounded-md",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.3 },
              style: { maxWidth: "100%", maxHeight: "200px" }
            }
          ),
          /* @__PURE__ */ C.jsx(
            D.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${b ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: o || b ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          )
        ]
      }
    ),
    b && /* @__PURE__ */ C.jsx(
      D.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: _
      }
    )
  ] });
}, ko = "data:image/svg+xml,%3csvg%20width='81'%20height='14'%20viewBox='0%200%2081%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%201000002026'%3e%3cpath%20id='Union'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M80.074%200V6.49771V7V7.49771L72.2812%207.49771L73.6096%208.82613C73.8048%209.0214%2073.8048%209.33798%2073.6096%209.53324C73.4143%209.7285%2073.0977%209.7285%2072.9025%209.53324L70.7205%207.35126C70.5252%207.156%2070.5252%206.83942%2070.7205%206.64415L72.9025%204.46217C73.0977%204.26691%2073.4143%204.26691%2073.6096%204.46217C73.8048%204.65743%2073.8048%204.97402%2073.6096%205.16928L72.2812%206.49771L79.274%206.49771V0H80.074ZM1.09005%204.636C1.30605%204.26%201.62605%203.948%202.05005%203.7C2.48205%203.444%202.98205%203.316%203.55005%203.316C4.13405%203.316%204.66205%203.456%205.13405%203.736C5.61405%204.016%205.99005%204.412%206.26205%204.924C6.53405%205.428%206.67005%206.016%206.67005%206.688C6.67005%207.352%206.53405%207.944%206.26205%208.464C5.99005%208.984%205.61405%209.388%205.13405%209.676C4.66205%209.964%204.13405%2010.108%203.55005%2010.108C2.99005%2010.108%202.49405%209.984%202.06205%209.736C1.63805%209.48%201.31405%209.164%201.09005%208.788V13.12H-0.00195312V3.424H1.09005V4.636ZM5.55405%206.688C5.55405%206.192%205.45405%205.76%205.25405%205.392C5.05405%205.024%204.78205%204.744%204.43805%204.552C4.10205%204.36%203.73005%204.264%203.32205%204.264C2.92205%204.264%202.55005%204.364%202.20605%204.564C1.87005%204.756%201.59805%205.04%201.39005%205.416C1.19005%205.784%201.09005%206.212%201.09005%206.7C1.09005%207.196%201.19005%207.632%201.39005%208.008C1.59805%208.376%201.87005%208.66%202.20605%208.86C2.55005%209.052%202.92205%209.148%203.32205%209.148C3.73005%209.148%204.10205%209.052%204.43805%208.86C4.78205%208.66%205.05405%208.376%205.25405%208.008C5.45405%207.632%205.55405%207.192%205.55405%206.688ZM9.19942%204.492C9.39142%204.116%209.66342%203.824%2010.0154%203.616C10.3754%203.408%2010.8114%203.304%2011.3234%203.304V4.432H11.0354C9.81142%204.432%209.19942%205.096%209.19942%206.424V10H8.10742V3.424H9.19942V4.492ZM18.584%206.46C18.584%206.668%2018.572%206.888%2018.548%207.12H13.292C13.332%207.768%2013.552%208.276%2013.952%208.644C14.36%209.004%2014.852%209.184%2015.428%209.184C15.9%209.184%2016.292%209.076%2016.604%208.86C16.924%208.636%2017.148%208.34%2017.276%207.972H18.452C18.276%208.604%2017.924%209.12%2017.396%209.52C16.868%209.912%2016.212%2010.108%2015.428%2010.108C14.804%2010.108%2014.244%209.968%2013.748%209.688C13.26%209.408%2012.876%209.012%2012.596%208.5C12.316%207.98%2012.176%207.38%2012.176%206.7C12.176%206.02%2012.312%205.424%2012.584%204.912C12.856%204.4%2013.236%204.008%2013.724%203.736C14.22%203.456%2014.788%203.316%2015.428%203.316C16.052%203.316%2016.604%203.452%2017.084%203.724C17.564%203.996%2017.932%204.372%2018.188%204.852C18.452%205.324%2018.584%205.86%2018.584%206.46ZM17.456%206.232C17.456%205.816%2017.364%205.46%2017.18%205.164C16.996%204.86%2016.744%204.632%2016.424%204.48C16.112%204.32%2015.764%204.24%2015.38%204.24C14.828%204.24%2014.356%204.416%2013.964%204.768C13.58%205.12%2013.36%205.608%2013.304%206.232H17.456ZM22.3534%2010.108C21.8494%2010.108%2021.3974%2010.024%2020.9974%209.856C20.5974%209.68%2020.2814%209.44%2020.0494%209.136C19.8174%208.824%2019.6894%208.468%2019.6654%208.068H20.7934C20.8254%208.396%2020.9774%208.664%2021.2494%208.872C21.5294%209.08%2021.8934%209.184%2022.3414%209.184C22.7574%209.184%2023.0854%209.092%2023.3254%208.908C23.5654%208.724%2023.6854%208.492%2023.6854%208.212C23.6854%207.924%2023.5574%207.712%2023.3014%207.576C23.0454%207.432%2022.6494%207.292%2022.1134%207.156C21.6254%207.028%2021.2254%206.9%2020.9134%206.772C20.6094%206.636%2020.3454%206.44%2020.1214%206.184C19.9054%205.92%2019.7974%205.576%2019.7974%205.152C19.7974%204.816%2019.8974%204.508%2020.0974%204.228C20.2974%203.948%2020.5814%203.728%2020.9494%203.568C21.3174%203.4%2021.7374%203.316%2022.2094%203.316C22.9374%203.316%2023.5254%203.5%2023.9734%203.868C24.4214%204.236%2024.6614%204.74%2024.6934%205.38H23.6014C23.5774%205.036%2023.4374%204.76%2023.1814%204.552C22.9334%204.344%2022.5974%204.24%2022.1734%204.24C21.7814%204.24%2021.4694%204.324%2021.2374%204.492C21.0054%204.66%2020.8894%204.88%2020.8894%205.152C20.8894%205.368%2020.9574%205.548%2021.0934%205.692C21.2374%205.828%2021.4134%205.94%2021.6214%206.028C21.8374%206.108%2022.1334%206.2%2022.5094%206.304C22.9814%206.432%2023.3654%206.56%2023.6614%206.688C23.9574%206.808%2024.2094%206.992%2024.4174%207.24C24.6334%207.488%2024.7454%207.812%2024.7534%208.212C24.7534%208.572%2024.6534%208.896%2024.4534%209.184C24.2534%209.472%2023.9694%209.7%2023.6014%209.868C23.2414%2010.028%2022.8254%2010.108%2022.3534%2010.108ZM28.6229%2010.108C28.1189%2010.108%2027.6669%2010.024%2027.2669%209.856C26.8669%209.68%2026.5509%209.44%2026.3189%209.136C26.0869%208.824%2025.9589%208.468%2025.9349%208.068H27.0629C27.0949%208.396%2027.2469%208.664%2027.5189%208.872C27.7989%209.08%2028.1629%209.184%2028.6109%209.184C29.0269%209.184%2029.3549%209.092%2029.5949%208.908C29.8349%208.724%2029.9549%208.492%2029.9549%208.212C29.9549%207.924%2029.8269%207.712%2029.5709%207.576C29.3149%207.432%2028.9189%207.292%2028.3829%207.156C27.8949%207.028%2027.4949%206.9%2027.1829%206.772C26.8789%206.636%2026.6149%206.44%2026.3909%206.184C26.1749%205.92%2026.0669%205.576%2026.0669%205.152C26.0669%204.816%2026.1669%204.508%2026.3669%204.228C26.5669%203.948%2026.8509%203.728%2027.2189%203.568C27.5869%203.4%2028.0069%203.316%2028.4789%203.316C29.2069%203.316%2029.7949%203.5%2030.2429%203.868C30.6909%204.236%2030.9309%204.74%2030.9629%205.38H29.8709C29.8469%205.036%2029.7069%204.76%2029.4509%204.552C29.2029%204.344%2028.8669%204.24%2028.4429%204.24C28.0509%204.24%2027.7389%204.324%2027.5069%204.492C27.2749%204.66%2027.1589%204.88%2027.1589%205.152C27.1589%205.368%2027.2269%205.548%2027.3629%205.692C27.5069%205.828%2027.6829%205.94%2027.8909%206.028C28.1069%206.108%2028.4029%206.2%2028.7789%206.304C29.2509%206.432%2029.6349%206.56%2029.9309%206.688C30.2269%206.808%2030.4789%206.992%2030.6869%207.24C30.9029%207.488%2031.0149%207.812%2031.0229%208.212C31.0229%208.572%2030.9229%208.896%2030.7229%209.184C30.5229%209.472%2030.2389%209.7%2029.8709%209.868C29.5109%2010.028%2029.0949%2010.108%2028.6229%2010.108ZM37.3477%202.98V5.08H40.1677V6.412H37.3477V8.632H40.5277V10H35.6677V1.612H40.5277V2.98H37.3477ZM45.7384%203.256C46.5304%203.256%2047.1704%203.508%2047.6584%204.012C48.1464%204.508%2048.3904%205.204%2048.3904%206.1V10H46.7104V6.328C46.7104%205.8%2046.5784%205.396%2046.3144%205.116C46.0504%204.828%2045.6904%204.684%2045.2344%204.684C44.7704%204.684%2044.4024%204.828%2044.1304%205.116C43.8664%205.396%2043.7344%205.8%2043.7344%206.328V10H42.0544V3.352H43.7344V4.18C43.9584%203.892%2044.2424%203.668%2044.5864%203.508C44.9384%203.34%2045.3224%203.256%2045.7384%203.256ZM51.944%204.732V7.948C51.944%208.172%2051.996%208.336%2052.1%208.44C52.212%208.536%2052.396%208.584%2052.652%208.584H53.432V10H52.376C50.96%2010%2050.252%209.312%2050.252%207.936V4.732H49.46V3.352H50.252V1.708H51.944V3.352H53.432V4.732H51.944ZM60.8203%206.532C60.8203%206.772%2060.8043%206.988%2060.7723%207.18H55.9123C55.9523%207.66%2056.1203%208.036%2056.4163%208.308C56.7123%208.58%2057.0763%208.716%2057.5083%208.716C58.1323%208.716%2058.5763%208.448%2058.8403%207.912H60.6523C60.4603%208.552%2060.0923%209.08%2059.5483%209.496C59.0043%209.904%2058.3363%2010.108%2057.5443%2010.108C56.9043%2010.108%2056.3283%209.968%2055.8163%209.688C55.3123%209.4%2054.9163%208.996%2054.6283%208.476C54.3483%207.956%2054.2083%207.356%2054.2083%206.676C54.2083%205.988%2054.3483%205.384%2054.6283%204.864C54.9083%204.344%2055.3003%203.944%2055.8043%203.664C56.3083%203.384%2056.8883%203.244%2057.5443%203.244C58.1763%203.244%2058.7403%203.38%2059.2363%203.652C59.7403%203.924%2060.1283%204.312%2060.4003%204.816C60.6803%205.312%2060.8203%205.884%2060.8203%206.532ZM59.0803%206.052C59.0723%205.62%2058.9163%205.276%2058.6123%205.02C58.3083%204.756%2057.9363%204.624%2057.4963%204.624C57.0803%204.624%2056.7283%204.752%2056.4403%205.008C56.1603%205.256%2055.9883%205.604%2055.9243%206.052H59.0803ZM63.7266%204.384C63.9426%204.032%2064.2226%203.756%2064.5666%203.556C64.9186%203.356%2065.3186%203.256%2065.7666%203.256V5.02H65.3226C64.7946%205.02%2064.3946%205.144%2064.1226%205.392C63.8586%205.64%2063.7266%206.072%2063.7266%206.688V10H62.0466V3.352H63.7266V4.384Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e";
function J(e) {
  return typeof File < "u" && e instanceof File || typeof Date < "u" && e instanceof Date ? !1 : typeof e == "object" && e !== null && !Array.isArray(e);
}
const Aa = "__additional_property", Wo = "additionalProperties", Zt = "allOf", Lr = "anyOf", Kr = "const", Ho = "default", Ca = "dependencies", _e = "__errors", Ir = "$id", Yo = "if", Bo = "items", Xo = "_$junk_option_schema_id$_", hr = "oneOf", ye = "properties", Jo = "required", me = "$ref", Zo = "__rjsf_additionalProperties", Ea = "__rjsf_rootSchema", Qo = "ui:widget", eu = "ui:options";
function Qn(e = {}, r = {}) {
  return Object.keys(e).filter((t) => t.indexOf("ui:") === 0).reduce((t, n) => {
    const a = e[n];
    return n === Qo && J(a) ? (console.error("Setting options via ui:widget object is no longer supported, use ui:options instead"), t) : n === eu && J(a) ? { ...t, ...a } : { ...t, [n.substring(3)]: a };
  }, { ...r });
}
var ru = typeof Nr == "object" && Nr && Nr.Object === Object && Nr, Oa = ru, tu = Oa, nu = typeof self == "object" && self && self.Object === Object && self, iu = tu || nu || Function("return this")(), $e = iu, au = $e, su = au.Symbol, Ye = su, ei = Ye, Pa = Object.prototype, ou = Pa.hasOwnProperty, uu = Pa.toString, lr = ei ? ei.toStringTag : void 0;
function cu(e) {
  var r = ou.call(e, lr), t = e[lr];
  try {
    e[lr] = void 0;
    var n = !0;
  } catch {
  }
  var a = uu.call(e);
  return n && (r ? e[lr] = t : delete e[lr]), a;
}
var fu = cu, lu = Object.prototype, du = lu.toString;
function pu(e) {
  return du.call(e);
}
var hu = pu, ri = Ye, vu = fu, yu = hu, gu = "[object Null]", mu = "[object Undefined]", ti = ri ? ri.toStringTag : void 0;
function $u(e) {
  return e == null ? e === void 0 ? mu : gu : ti && ti in Object(e) ? vu(e) : yu(e);
}
var be = $u;
function _u(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var Ta = _u, bu = Ta, wu = bu(Object.getPrototypeOf, Object), Jr = wu;
function Au(e) {
  return e != null && typeof e == "object";
}
var pe = Au, Cu = be, Eu = Jr, Ou = pe, Pu = "[object Object]", Tu = Function.prototype, Nu = Object.prototype, Na = Tu.toString, Iu = Nu.hasOwnProperty, xu = Na.call(Object);
function Su(e) {
  if (!Ou(e) || Cu(e) != Pu)
    return !1;
  var r = Eu(e);
  if (r === null)
    return !0;
  var t = Iu.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Na.call(t) == xu;
}
var Be = Su;
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
var Ru = ju;
function Mu(e, r) {
  return e === r || e !== e && r !== r;
}
var Xe = Mu, Fu = Xe;
function Du(e, r) {
  for (var t = e.length; t--; )
    if (Fu(e[t][0], r))
      return t;
  return -1;
}
var Zr = Du, Lu = Zr, Ku = Array.prototype, zu = Ku.splice;
function qu(e) {
  var r = this.__data__, t = Lu(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : zu.call(r, t, 1), --this.size, !0;
}
var Uu = qu, Vu = Zr;
function Gu(e) {
  var r = this.__data__, t = Vu(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var ku = Gu, Wu = Zr;
function Hu(e) {
  return Wu(this.__data__, e) > -1;
}
var Yu = Hu, Bu = Zr;
function Xu(e, r) {
  var t = this.__data__, n = Bu(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
var Ju = Xu, Zu = Ru, Qu = Uu, ec = ku, rc = Yu, tc = Ju;
function Je(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Je.prototype.clear = Zu;
Je.prototype.delete = Qu;
Je.prototype.get = ec;
Je.prototype.has = rc;
Je.prototype.set = tc;
var Qr = Je, nc = Qr;
function ic() {
  this.__data__ = new nc(), this.size = 0;
}
var ac = ic;
function sc(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var oc = sc;
function uc(e) {
  return this.__data__.get(e);
}
var cc = uc;
function fc(e) {
  return this.__data__.has(e);
}
var lc = fc;
function dc(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var ce = dc;
const zr = /* @__PURE__ */ Q(ce);
var pc = be, hc = ce, vc = "[object AsyncFunction]", yc = "[object Function]", gc = "[object GeneratorFunction]", mc = "[object Proxy]";
function $c(e) {
  if (!hc(e))
    return !1;
  var r = pc(e);
  return r == yc || r == gc || r == vc || r == mc;
}
var et = $c, _c = $e, bc = _c["__core-js_shared__"], wc = bc, Et = wc, ni = function() {
  var e = /[^.]+$/.exec(Et && Et.keys && Et.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ac(e) {
  return !!ni && ni in e;
}
var Cc = Ac, Ec = Function.prototype, Oc = Ec.toString;
function Pc(e) {
  if (e != null) {
    try {
      return Oc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ia = Pc, Tc = et, Nc = Cc, Ic = ce, xc = Ia, Sc = /[\\^$.*+?()[\]{}|]/g, jc = /^\[object .+?Constructor\]$/, Rc = Function.prototype, Mc = Object.prototype, Fc = Rc.toString, Dc = Mc.hasOwnProperty, Lc = RegExp(
  "^" + Fc.call(Dc).replace(Sc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Kc(e) {
  if (!Ic(e) || Nc(e))
    return !1;
  var r = Tc(e) ? Lc : jc;
  return r.test(xc(e));
}
var zc = Kc;
function qc(e, r) {
  return e == null ? void 0 : e[r];
}
var Uc = qc, Vc = zc, Gc = Uc;
function kc(e, r) {
  var t = Gc(e, r);
  return Vc(t) ? t : void 0;
}
var Me = kc, Wc = Me, Hc = $e, Yc = Wc(Hc, "Map"), en = Yc, Bc = Me, Xc = Bc(Object, "create"), rt = Xc, ii = rt;
function Jc() {
  this.__data__ = ii ? ii(null) : {}, this.size = 0;
}
var Zc = Jc;
function Qc(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var ef = Qc, rf = rt, tf = "__lodash_hash_undefined__", nf = Object.prototype, af = nf.hasOwnProperty;
function sf(e) {
  var r = this.__data__;
  if (rf) {
    var t = r[e];
    return t === tf ? void 0 : t;
  }
  return af.call(r, e) ? r[e] : void 0;
}
var of = sf, uf = rt, cf = Object.prototype, ff = cf.hasOwnProperty;
function lf(e) {
  var r = this.__data__;
  return uf ? r[e] !== void 0 : ff.call(r, e);
}
var df = lf, pf = rt, hf = "__lodash_hash_undefined__";
function vf(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = pf && r === void 0 ? hf : r, this;
}
var yf = vf, gf = Zc, mf = ef, $f = of, _f = df, bf = yf;
function Ze(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Ze.prototype.clear = gf;
Ze.prototype.delete = mf;
Ze.prototype.get = $f;
Ze.prototype.has = _f;
Ze.prototype.set = bf;
var wf = Ze, ai = wf, Af = Qr, Cf = en;
function Ef() {
  this.size = 0, this.__data__ = {
    hash: new ai(),
    map: new (Cf || Af)(),
    string: new ai()
  };
}
var Of = Ef;
function Pf(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Tf = Pf, Nf = Tf;
function If(e, r) {
  var t = e.__data__;
  return Nf(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var tt = If, xf = tt;
function Sf(e) {
  var r = xf(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var jf = Sf, Rf = tt;
function Mf(e) {
  return Rf(this, e).get(e);
}
var Ff = Mf, Df = tt;
function Lf(e) {
  return Df(this, e).has(e);
}
var Kf = Lf, zf = tt;
function qf(e, r) {
  var t = zf(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var Uf = qf, Vf = Of, Gf = jf, kf = Ff, Wf = Kf, Hf = Uf;
function Qe(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Qe.prototype.clear = Vf;
Qe.prototype.delete = Gf;
Qe.prototype.get = kf;
Qe.prototype.has = Wf;
Qe.prototype.set = Hf;
var rn = Qe, Yf = Qr, Bf = en, Xf = rn, Jf = 200;
function Zf(e, r) {
  var t = this.__data__;
  if (t instanceof Yf) {
    var n = t.__data__;
    if (!Bf || n.length < Jf - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new Xf(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
var Qf = Zf, el = Qr, rl = ac, tl = oc, nl = cc, il = lc, al = Qf;
function er(e) {
  var r = this.__data__ = new el(e);
  this.size = r.size;
}
er.prototype.clear = rl;
er.prototype.delete = tl;
er.prototype.get = nl;
er.prototype.has = il;
er.prototype.set = al;
var nt = er, sl = "__lodash_hash_undefined__";
function ol(e) {
  return this.__data__.set(e, sl), this;
}
var ul = ol;
function cl(e) {
  return this.__data__.has(e);
}
var fl = cl, ll = rn, dl = ul, pl = fl;
function qr(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new ll(); ++r < t; )
    this.add(e[r]);
}
qr.prototype.add = qr.prototype.push = dl;
qr.prototype.has = pl;
var it = qr;
function hl(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (r(e[t], t, e))
      return !0;
  return !1;
}
var vl = hl;
function yl(e, r) {
  return e.has(r);
}
var at = yl, gl = it, ml = vl, $l = at, _l = 1, bl = 2;
function wl(e, r, t, n, a, i) {
  var s = t & _l, o = e.length, u = r.length;
  if (o != u && !(s && u > o))
    return !1;
  var c = i.get(e), f = i.get(r);
  if (c && f)
    return c == r && f == e;
  var h = -1, p = !0, v = t & bl ? new gl() : void 0;
  for (i.set(e, r), i.set(r, e); ++h < o; ) {
    var _ = e[h], b = r[h];
    if (n)
      var m = s ? n(b, _, h, r, e, i) : n(_, b, h, e, r, i);
    if (m !== void 0) {
      if (m)
        continue;
      p = !1;
      break;
    }
    if (v) {
      if (!ml(r, function(y, $) {
        if (!$l(v, $) && (_ === y || a(_, y, t, n, i)))
          return v.push($);
      })) {
        p = !1;
        break;
      }
    } else if (!(_ === b || a(_, b, t, n, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(r), p;
}
var xa = wl, Al = $e, Cl = Al.Uint8Array, Sa = Cl;
function El(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n, a) {
    t[++r] = [a, n];
  }), t;
}
var Ol = El;
function Pl(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n) {
    t[++r] = n;
  }), t;
}
var tn = Pl, si = Ye, oi = Sa, Tl = Xe, Nl = xa, Il = Ol, xl = tn, Sl = 1, jl = 2, Rl = "[object Boolean]", Ml = "[object Date]", Fl = "[object Error]", Dl = "[object Map]", Ll = "[object Number]", Kl = "[object RegExp]", zl = "[object Set]", ql = "[object String]", Ul = "[object Symbol]", Vl = "[object ArrayBuffer]", Gl = "[object DataView]", ui = si ? si.prototype : void 0, Ot = ui ? ui.valueOf : void 0;
function kl(e, r, t, n, a, i, s) {
  switch (t) {
    case Gl:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Vl:
      return !(e.byteLength != r.byteLength || !i(new oi(e), new oi(r)));
    case Rl:
    case Ml:
    case Ll:
      return Tl(+e, +r);
    case Fl:
      return e.name == r.name && e.message == r.message;
    case Kl:
    case ql:
      return e == r + "";
    case Dl:
      var o = Il;
    case zl:
      var u = n & Sl;
      if (o || (o = xl), e.size != r.size && !u)
        return !1;
      var c = s.get(e);
      if (c)
        return c == r;
      n |= jl, s.set(e, r);
      var f = Nl(o(e), o(r), n, a, i, s);
      return s.delete(e), f;
    case Ul:
      if (Ot)
        return Ot.call(e) == Ot.call(r);
  }
  return !1;
}
var Wl = kl;
function Hl(e, r) {
  for (var t = -1, n = r.length, a = e.length; ++t < n; )
    e[a + t] = r[t];
  return e;
}
var nn = Hl, Yl = Array.isArray, ne = Yl, Bl = nn, Xl = ne;
function Jl(e, r, t) {
  var n = r(e);
  return Xl(e) ? n : Bl(n, t(e));
}
var ja = Jl;
function Zl(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++t < n; ) {
    var s = e[t];
    r(s, t, e) && (i[a++] = s);
  }
  return i;
}
var Ql = Zl;
function e0() {
  return [];
}
var Ra = e0, r0 = Ql, t0 = Ra, n0 = Object.prototype, i0 = n0.propertyIsEnumerable, ci = Object.getOwnPropertySymbols, a0 = ci ? function(e) {
  return e == null ? [] : (e = Object(e), r0(ci(e), function(r) {
    return i0.call(e, r);
  }));
} : t0, an = a0;
function s0(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Ma = s0, o0 = be, u0 = pe, c0 = "[object Arguments]";
function f0(e) {
  return u0(e) && o0(e) == c0;
}
var l0 = f0, fi = l0, d0 = pe, Fa = Object.prototype, p0 = Fa.hasOwnProperty, h0 = Fa.propertyIsEnumerable, v0 = fi(/* @__PURE__ */ function() {
  return arguments;
}()) ? fi : function(e) {
  return d0(e) && p0.call(e, "callee") && !h0.call(e, "callee");
}, mr = v0, Ur = { exports: {} };
function y0() {
  return !1;
}
var g0 = y0;
Ur.exports;
(function(e, r) {
  var t = $e, n = g0, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? t.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Ur, Ur.exports);
var rr = Ur.exports, m0 = 9007199254740991, $0 = /^(?:0|[1-9]\d*)$/;
function _0(e, r) {
  var t = typeof e;
  return r = r ?? m0, !!r && (t == "number" || t != "symbol" && $0.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var st = _0, b0 = 9007199254740991;
function w0(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= b0;
}
var sn = w0, A0 = be, C0 = sn, E0 = pe, O0 = "[object Arguments]", P0 = "[object Array]", T0 = "[object Boolean]", N0 = "[object Date]", I0 = "[object Error]", x0 = "[object Function]", S0 = "[object Map]", j0 = "[object Number]", R0 = "[object Object]", M0 = "[object RegExp]", F0 = "[object Set]", D0 = "[object String]", L0 = "[object WeakMap]", K0 = "[object ArrayBuffer]", z0 = "[object DataView]", q0 = "[object Float32Array]", U0 = "[object Float64Array]", V0 = "[object Int8Array]", G0 = "[object Int16Array]", k0 = "[object Int32Array]", W0 = "[object Uint8Array]", H0 = "[object Uint8ClampedArray]", Y0 = "[object Uint16Array]", B0 = "[object Uint32Array]", X = {};
X[q0] = X[U0] = X[V0] = X[G0] = X[k0] = X[W0] = X[H0] = X[Y0] = X[B0] = !0;
X[O0] = X[P0] = X[K0] = X[T0] = X[z0] = X[N0] = X[I0] = X[x0] = X[S0] = X[j0] = X[R0] = X[M0] = X[F0] = X[D0] = X[L0] = !1;
function X0(e) {
  return E0(e) && C0(e.length) && !!X[A0(e)];
}
var J0 = X0;
function Z0(e) {
  return function(r) {
    return e(r);
  };
}
var Fe = Z0, Vr = { exports: {} };
Vr.exports;
(function(e, r) {
  var t = Oa, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && t.process, o = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(Vr, Vr.exports);
var on = Vr.exports, Q0 = J0, ed = Fe, li = on, di = li && li.isTypedArray, rd = di ? ed(di) : Q0, $r = rd, td = Ma, nd = mr, id = ne, ad = rr, sd = st, od = $r, ud = Object.prototype, cd = ud.hasOwnProperty;
function fd(e, r) {
  var t = id(e), n = !t && nd(e), a = !t && !n && ad(e), i = !t && !n && !a && od(e), s = t || n || a || i, o = s ? td(e.length, String) : [], u = o.length;
  for (var c in e)
    (r || cd.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    sd(c, u))) && o.push(c);
  return o;
}
var Da = fd, ld = Object.prototype;
function dd(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || ld;
  return e === t;
}
var ot = dd, pd = Ta, hd = pd(Object.keys, Object), vd = hd, yd = ot, gd = vd, md = Object.prototype, $d = md.hasOwnProperty;
function _d(e) {
  if (!yd(e))
    return gd(e);
  var r = [];
  for (var t in Object(e))
    $d.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var La = _d, bd = et, wd = sn;
function Ad(e) {
  return e != null && wd(e.length) && !bd(e);
}
var De = Ad, Cd = Da, Ed = La, Od = De;
function Pd(e) {
  return Od(e) ? Cd(e) : Ed(e);
}
var _r = Pd, Td = ja, Nd = an, Id = _r;
function xd(e) {
  return Td(e, Id, Nd);
}
var Ka = xd, pi = Ka, Sd = 1, jd = Object.prototype, Rd = jd.hasOwnProperty;
function Md(e, r, t, n, a, i) {
  var s = t & Sd, o = pi(e), u = o.length, c = pi(r), f = c.length;
  if (u != f && !s)
    return !1;
  for (var h = u; h--; ) {
    var p = o[h];
    if (!(s ? p in r : Rd.call(r, p)))
      return !1;
  }
  var v = i.get(e), _ = i.get(r);
  if (v && _)
    return v == r && _ == e;
  var b = !0;
  i.set(e, r), i.set(r, e);
  for (var m = s; ++h < u; ) {
    p = o[h];
    var y = e[p], $ = r[p];
    if (n)
      var O = s ? n($, y, p, r, e, i) : n(y, $, p, e, r, i);
    if (!(O === void 0 ? y === $ || a(y, $, t, n, i) : O)) {
      b = !1;
      break;
    }
    m || (m = p == "constructor");
  }
  if (b && !m) {
    var N = e.constructor, S = r.constructor;
    N != S && "constructor" in e && "constructor" in r && !(typeof N == "function" && N instanceof N && typeof S == "function" && S instanceof S) && (b = !1);
  }
  return i.delete(e), i.delete(r), b;
}
var Fd = Md, Dd = Me, Ld = $e, Kd = Dd(Ld, "DataView"), zd = Kd, qd = Me, Ud = $e, Vd = qd(Ud, "Promise"), Gd = Vd, kd = Me, Wd = $e, Hd = kd(Wd, "Set"), za = Hd, Yd = Me, Bd = $e, Xd = Yd(Bd, "WeakMap"), Jd = Xd, Lt = zd, Kt = en, zt = Gd, qt = za, Ut = Jd, qa = be, tr = Ia, hi = "[object Map]", Zd = "[object Object]", vi = "[object Promise]", yi = "[object Set]", gi = "[object WeakMap]", mi = "[object DataView]", Qd = tr(Lt), e2 = tr(Kt), r2 = tr(zt), t2 = tr(qt), n2 = tr(Ut), Re = qa;
(Lt && Re(new Lt(new ArrayBuffer(1))) != mi || Kt && Re(new Kt()) != hi || zt && Re(zt.resolve()) != vi || qt && Re(new qt()) != yi || Ut && Re(new Ut()) != gi) && (Re = function(e) {
  var r = qa(e), t = r == Zd ? e.constructor : void 0, n = t ? tr(t) : "";
  if (n)
    switch (n) {
      case Qd:
        return mi;
      case e2:
        return hi;
      case r2:
        return vi;
      case t2:
        return yi;
      case n2:
        return gi;
    }
  return r;
});
var br = Re, Pt = nt, i2 = xa, a2 = Wl, s2 = Fd, $i = br, _i = ne, bi = rr, o2 = $r, u2 = 1, wi = "[object Arguments]", Ai = "[object Array]", xr = "[object Object]", c2 = Object.prototype, Ci = c2.hasOwnProperty;
function f2(e, r, t, n, a, i) {
  var s = _i(e), o = _i(r), u = s ? Ai : $i(e), c = o ? Ai : $i(r);
  u = u == wi ? xr : u, c = c == wi ? xr : c;
  var f = u == xr, h = c == xr, p = u == c;
  if (p && bi(e)) {
    if (!bi(r))
      return !1;
    s = !0, f = !1;
  }
  if (p && !f)
    return i || (i = new Pt()), s || o2(e) ? i2(e, r, t, n, a, i) : a2(e, r, u, t, n, a, i);
  if (!(t & u2)) {
    var v = f && Ci.call(e, "__wrapped__"), _ = h && Ci.call(r, "__wrapped__");
    if (v || _) {
      var b = v ? e.value() : e, m = _ ? r.value() : r;
      return i || (i = new Pt()), a(b, m, t, n, i);
    }
  }
  return p ? (i || (i = new Pt()), s2(e, r, t, n, a, i)) : !1;
}
var l2 = f2, d2 = l2, Ei = pe;
function Ua(e, r, t, n, a) {
  return e === r ? !0 : e == null || r == null || !Ei(e) && !Ei(r) ? e !== e && r !== r : d2(e, r, t, n, Ua, a);
}
var ut = Ua, p2 = ut;
function h2(e, r, t) {
  t = typeof t == "function" ? t : void 0;
  var n = t ? t(e, r) : void 0;
  return n === void 0 ? p2(e, r, void 0, t) : !!n;
}
var v2 = h2;
const y2 = /* @__PURE__ */ Q(v2);
function g2(e, r) {
  return y2(e, r, (t, n) => {
    if (typeof t == "function" && typeof n == "function")
      return !0;
  });
}
var m2 = be, $2 = pe, _2 = "[object Symbol]";
function b2(e) {
  return typeof e == "symbol" || $2(e) && m2(e) == _2;
}
var nr = b2, w2 = ne, A2 = nr, C2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, E2 = /^\w*$/;
function O2(e, r) {
  if (w2(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || A2(e) ? !0 : E2.test(e) || !C2.test(e) || r != null && e in Object(r);
}
var un = O2, Va = rn, P2 = "Expected a function";
function cn(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(P2);
  var t = function() {
    var n = arguments, a = r ? r.apply(this, n) : n[0], i = t.cache;
    if (i.has(a))
      return i.get(a);
    var s = e.apply(this, n);
    return t.cache = i.set(a, s) || i, s;
  };
  return t.cache = new (cn.Cache || Va)(), t;
}
cn.Cache = Va;
var T2 = cn, N2 = T2, I2 = 500;
function x2(e) {
  var r = N2(e, function(n) {
    return t.size === I2 && t.clear(), n;
  }), t = r.cache;
  return r;
}
var S2 = x2, j2 = S2, R2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, M2 = /\\(\\)?/g, F2 = j2(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(R2, function(t, n, a, i) {
    r.push(a ? i.replace(M2, "$1") : n || t);
  }), r;
}), Ga = F2;
function D2(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = Array(n); ++t < n; )
    a[t] = r(e[t], t, e);
  return a;
}
var we = D2, Oi = Ye, L2 = we, K2 = ne, z2 = nr, q2 = 1 / 0, Pi = Oi ? Oi.prototype : void 0, Ti = Pi ? Pi.toString : void 0;
function ka(e) {
  if (typeof e == "string")
    return e;
  if (K2(e))
    return L2(e, ka) + "";
  if (z2(e))
    return Ti ? Ti.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -q2 ? "-0" : r;
}
var U2 = ka, V2 = U2;
function G2(e) {
  return e == null ? "" : V2(e);
}
var Wa = G2, k2 = ne, W2 = un, H2 = Ga, Y2 = Wa;
function B2(e, r) {
  return k2(e) ? e : W2(e, r) ? [e] : H2(Y2(e));
}
var wr = B2, X2 = nr, J2 = 1 / 0;
function Z2(e) {
  if (typeof e == "string" || X2(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -J2 ? "-0" : r;
}
var Le = Z2, Q2 = wr, ep = Le;
function rp(e, r) {
  r = Q2(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[ep(r[t++])];
  return t && t == n ? e : void 0;
}
var ct = rp, tp = ct;
function np(e, r, t) {
  var n = e == null ? void 0 : tp(e, r);
  return n === void 0 ? t : n;
}
var Ha = np;
const Z = /* @__PURE__ */ Q(Ha);
var ip = La, ap = br, sp = mr, op = ne, up = De, cp = rr, fp = ot, lp = $r, dp = "[object Map]", pp = "[object Set]", hp = Object.prototype, vp = hp.hasOwnProperty;
function yp(e) {
  if (e == null)
    return !0;
  if (up(e) && (op(e) || typeof e == "string" || typeof e.splice == "function" || cp(e) || lp(e) || sp(e)))
    return !e.length;
  var r = ap(e);
  if (r == dp || r == pp)
    return !e.size;
  if (fp(e))
    return !ip(e).length;
  for (var t in e)
    if (vp.call(e, t))
      return !1;
  return !0;
}
var gp = yp;
const vr = /* @__PURE__ */ Q(gp);
var ft = {}, mp = /~/, $p = /~[01]/g;
function _p(e) {
  switch (e) {
    case "~1":
      return "/";
    case "~0":
      return "~";
  }
  throw new Error("Invalid tilde escape: " + e);
}
function Ya(e) {
  return mp.test(e) ? e.replace($p, _p) : e;
}
function bp(e, r, t) {
  for (var n, a, i = 1, s = r.length; i < s; ) {
    if (r[i] === "constructor" || r[i] === "prototype" || r[i] === "__proto__") return e;
    if (n = Ya(r[i++]), a = s > i, typeof e[n] > "u" && (Array.isArray(e) && n === "-" && (n = e.length), a && (r[i] !== "" && r[i] < 1 / 0 || r[i] === "-" ? e[n] = [] : e[n] = {})), !a) break;
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
function Ba(e, r) {
  if (typeof e != "object") throw new Error("Invalid input object.");
  r = fn(r);
  var t = r.length;
  if (t === 1) return e;
  for (var n = 1; n < t; ) {
    if (e = e[Ya(r[n++])], t === n) return e;
    if (typeof e != "object" || e === null) return;
  }
}
function Xa(e, r, t) {
  if (typeof e != "object") throw new Error("Invalid input object.");
  if (r = fn(r), r.length === 0) throw new Error("Invalid JSON pointer for set.");
  return bp(e, r, t);
}
function wp(e) {
  var r = fn(e);
  return {
    get: function(t) {
      return Ba(t, r);
    },
    set: function(t, n) {
      return Xa(t, r, n);
    }
  };
}
ft.get = Ba;
ft.set = Xa;
ft.compile = wp;
function Ap(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var ln = Ap, Cp = Me, Ep = function() {
  try {
    var e = Cp(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ja = Ep, Ni = Ja;
function Op(e, r, t) {
  r == "__proto__" && Ni ? Ni(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var dn = Op, Pp = dn, Tp = Xe, Np = Object.prototype, Ip = Np.hasOwnProperty;
function xp(e, r, t) {
  var n = e[r];
  (!(Ip.call(e, r) && Tp(n, t)) || t === void 0 && !(r in e)) && Pp(e, r, t);
}
var pn = xp, Sp = pn, jp = dn;
function Rp(e, r, t, n) {
  var a = !t;
  t || (t = {});
  for (var i = -1, s = r.length; ++i < s; ) {
    var o = r[i], u = n ? n(t[o], e[o], o, t, e) : void 0;
    u === void 0 && (u = e[o]), a ? jp(t, o, u) : Sp(t, o, u);
  }
  return t;
}
var ir = Rp, Mp = ir, Fp = _r;
function Dp(e, r) {
  return e && Mp(r, Fp(r), e);
}
var Lp = Dp;
function Kp(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var zp = Kp, qp = ce, Up = ot, Vp = zp, Gp = Object.prototype, kp = Gp.hasOwnProperty;
function Wp(e) {
  if (!qp(e))
    return Vp(e);
  var r = Up(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !kp.call(e, n)) || t.push(n);
  return t;
}
var Hp = Wp, Yp = Da, Bp = Hp, Xp = De;
function Jp(e) {
  return Xp(e) ? Yp(e, !0) : Bp(e);
}
var ar = Jp, Zp = ir, Qp = ar;
function e1(e, r) {
  return e && Zp(r, Qp(r), e);
}
var r1 = e1, Gr = { exports: {} };
Gr.exports;
(function(e, r) {
  var t = $e, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i ? t.Buffer : void 0, o = s ? s.allocUnsafe : void 0;
  function u(c, f) {
    if (f)
      return c.slice();
    var h = c.length, p = o ? o(h) : new c.constructor(h);
    return c.copy(p), p;
  }
  e.exports = u;
})(Gr, Gr.exports);
var Za = Gr.exports;
function t1(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var lt = t1, n1 = ir, i1 = an;
function a1(e, r) {
  return n1(e, i1(e), r);
}
var s1 = a1, o1 = nn, u1 = Jr, c1 = an, f1 = Ra, l1 = Object.getOwnPropertySymbols, d1 = l1 ? function(e) {
  for (var r = []; e; )
    o1(r, c1(e)), e = u1(e);
  return r;
} : f1, Qa = d1, p1 = ir, h1 = Qa;
function v1(e, r) {
  return p1(e, h1(e), r);
}
var y1 = v1, g1 = ja, m1 = Qa, $1 = ar;
function _1(e) {
  return g1(e, $1, m1);
}
var es = _1, b1 = Object.prototype, w1 = b1.hasOwnProperty;
function A1(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && w1.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var C1 = A1, Ii = Sa;
function E1(e) {
  var r = new e.constructor(e.byteLength);
  return new Ii(r).set(new Ii(e)), r;
}
var hn = E1, O1 = hn;
function P1(e, r) {
  var t = r ? O1(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var T1 = P1, N1 = /\w*$/;
function I1(e) {
  var r = new e.constructor(e.source, N1.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var x1 = I1, xi = Ye, Si = xi ? xi.prototype : void 0, ji = Si ? Si.valueOf : void 0;
function S1(e) {
  return ji ? Object(ji.call(e)) : {};
}
var j1 = S1, R1 = hn;
function M1(e, r) {
  var t = r ? R1(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var rs = M1, F1 = hn, D1 = T1, L1 = x1, K1 = j1, z1 = rs, q1 = "[object Boolean]", U1 = "[object Date]", V1 = "[object Map]", G1 = "[object Number]", k1 = "[object RegExp]", W1 = "[object Set]", H1 = "[object String]", Y1 = "[object Symbol]", B1 = "[object ArrayBuffer]", X1 = "[object DataView]", J1 = "[object Float32Array]", Z1 = "[object Float64Array]", Q1 = "[object Int8Array]", eh = "[object Int16Array]", rh = "[object Int32Array]", th = "[object Uint8Array]", nh = "[object Uint8ClampedArray]", ih = "[object Uint16Array]", ah = "[object Uint32Array]";
function sh(e, r, t) {
  var n = e.constructor;
  switch (r) {
    case B1:
      return F1(e);
    case q1:
    case U1:
      return new n(+e);
    case X1:
      return D1(e, t);
    case J1:
    case Z1:
    case Q1:
    case eh:
    case rh:
    case th:
    case nh:
    case ih:
    case ah:
      return z1(e, t);
    case V1:
      return new n();
    case G1:
    case H1:
      return new n(e);
    case k1:
      return L1(e);
    case W1:
      return new n();
    case Y1:
      return K1(e);
  }
}
var oh = sh, uh = ce, Ri = Object.create, ch = /* @__PURE__ */ function() {
  function e() {
  }
  return function(r) {
    if (!uh(r))
      return {};
    if (Ri)
      return Ri(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), ts = ch, fh = ts, lh = Jr, dh = ot;
function ph(e) {
  return typeof e.constructor == "function" && !dh(e) ? fh(lh(e)) : {};
}
var ns = ph, hh = br, vh = pe, yh = "[object Map]";
function gh(e) {
  return vh(e) && hh(e) == yh;
}
var mh = gh, $h = mh, _h = Fe, Mi = on, Fi = Mi && Mi.isMap, bh = Fi ? _h(Fi) : $h, wh = bh, Ah = br, Ch = pe, Eh = "[object Set]";
function Oh(e) {
  return Ch(e) && Ah(e) == Eh;
}
var Ph = Oh, Th = Ph, Nh = Fe, Di = on, Li = Di && Di.isSet, Ih = Li ? Nh(Li) : Th, xh = Ih, Sh = nt, jh = ln, Rh = pn, Mh = Lp, Fh = r1, Dh = Za, Lh = lt, Kh = s1, zh = y1, qh = Ka, Uh = es, Vh = br, Gh = C1, kh = oh, Wh = ns, Hh = ne, Yh = rr, Bh = wh, Xh = ce, Jh = xh, Zh = _r, Qh = ar, ev = 1, rv = 2, tv = 4, is = "[object Arguments]", nv = "[object Array]", iv = "[object Boolean]", av = "[object Date]", sv = "[object Error]", as = "[object Function]", ov = "[object GeneratorFunction]", uv = "[object Map]", cv = "[object Number]", ss = "[object Object]", fv = "[object RegExp]", lv = "[object Set]", dv = "[object String]", pv = "[object Symbol]", hv = "[object WeakMap]", vv = "[object ArrayBuffer]", yv = "[object DataView]", gv = "[object Float32Array]", mv = "[object Float64Array]", $v = "[object Int8Array]", _v = "[object Int16Array]", bv = "[object Int32Array]", wv = "[object Uint8Array]", Av = "[object Uint8ClampedArray]", Cv = "[object Uint16Array]", Ev = "[object Uint32Array]", Y = {};
Y[is] = Y[nv] = Y[vv] = Y[yv] = Y[iv] = Y[av] = Y[gv] = Y[mv] = Y[$v] = Y[_v] = Y[bv] = Y[uv] = Y[cv] = Y[ss] = Y[fv] = Y[lv] = Y[dv] = Y[pv] = Y[wv] = Y[Av] = Y[Cv] = Y[Ev] = !0;
Y[sv] = Y[as] = Y[hv] = !1;
function Fr(e, r, t, n, a, i) {
  var s, o = r & ev, u = r & rv, c = r & tv;
  if (t && (s = a ? t(e, n, a, i) : t(e)), s !== void 0)
    return s;
  if (!Xh(e))
    return e;
  var f = Hh(e);
  if (f) {
    if (s = Gh(e), !o)
      return Lh(e, s);
  } else {
    var h = Vh(e), p = h == as || h == ov;
    if (Yh(e))
      return Dh(e, o);
    if (h == ss || h == is || p && !a) {
      if (s = u || p ? {} : Wh(e), !o)
        return u ? zh(e, Fh(s, e)) : Kh(e, Mh(s, e));
    } else {
      if (!Y[h])
        return a ? e : {};
      s = kh(e, h, o);
    }
  }
  i || (i = new Sh());
  var v = i.get(e);
  if (v)
    return v;
  i.set(e, s), Jh(e) ? e.forEach(function(m) {
    s.add(Fr(m, r, t, m, e, i));
  }) : Bh(e) && e.forEach(function(m, y) {
    s.set(y, Fr(m, r, t, y, e, i));
  });
  var _ = c ? u ? Uh : qh : u ? Qh : Zh, b = f ? void 0 : _(e);
  return jh(b || e, function(m, y) {
    b && (y = m, m = e[y]), Rh(s, y, Fr(m, r, t, y, e, i));
  }), s;
}
var os = Fr;
function Ov(e) {
  var r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
var us = Ov;
function Pv(e, r, t) {
  var n = -1, a = e.length;
  r < 0 && (r = -r > a ? 0 : a + r), t = t > a ? a : t, t < 0 && (t += a), a = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + r];
  return i;
}
var Tv = Pv, Nv = ct, Iv = Tv;
function xv(e, r) {
  return r.length < 2 ? e : Nv(e, Iv(r, 0, -1));
}
var Sv = xv, jv = wr, Rv = us, Mv = Sv, Fv = Le;
function Dv(e, r) {
  return r = jv(r, e), e = Mv(e, r), e == null || delete e[Fv(Rv(r))];
}
var Lv = Dv, Kv = Be;
function zv(e) {
  return Kv(e) ? void 0 : e;
}
var qv = zv, Ki = Ye, Uv = mr, Vv = ne, zi = Ki ? Ki.isConcatSpreadable : void 0;
function Gv(e) {
  return Vv(e) || Uv(e) || !!(zi && e && e[zi]);
}
var kv = Gv, Wv = nn, Hv = kv;
function cs(e, r, t, n, a) {
  var i = -1, s = e.length;
  for (t || (t = Hv), a || (a = []); ++i < s; ) {
    var o = e[i];
    r > 0 && t(o) ? r > 1 ? cs(o, r - 1, t, n, a) : Wv(a, o) : n || (a[a.length] = o);
  }
  return a;
}
var dt = cs, Yv = dt;
function Bv(e) {
  var r = e == null ? 0 : e.length;
  return r ? Yv(e, 1) : [];
}
var vn = Bv;
function Xv(e, r, t) {
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
var fs = Xv, Jv = fs, qi = Math.max;
function Zv(e, r, t) {
  return r = qi(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, a = -1, i = qi(n.length - r, 0), s = Array(i); ++a < i; )
      s[a] = n[r + a];
    a = -1;
    for (var o = Array(r + 1); ++a < r; )
      o[a] = n[a];
    return o[r] = t(s), Jv(e, this, o);
  };
}
var ls = Zv;
function Qv(e) {
  return function() {
    return e;
  };
}
var ey = Qv;
function ry(e) {
  return e;
}
var Ar = ry, ty = ey, Ui = Ja, ny = Ar, iy = Ui ? function(e, r) {
  return Ui(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ty(r),
    writable: !0
  });
} : ny, ay = iy, sy = 800, oy = 16, uy = Date.now;
function cy(e) {
  var r = 0, t = 0;
  return function() {
    var n = uy(), a = oy - (n - t);
    if (t = n, a > 0) {
      if (++r >= sy)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var fy = cy, ly = ay, dy = fy, py = dy(ly), ds = py, hy = vn, vy = ls, yy = ds;
function gy(e) {
  return yy(vy(e, void 0, hy), e + "");
}
var my = gy, $y = we, _y = os, by = Lv, wy = wr, Ay = ir, Cy = qv, Ey = my, Oy = es, Py = 1, Ty = 2, Ny = 4, Iy = Ey(function(e, r) {
  var t = {};
  if (e == null)
    return t;
  var n = !1;
  r = $y(r, function(i) {
    return i = wy(i, e), n || (n = i.length > 1), i;
  }), Ay(e, Oy(e), t), n && (t = _y(t, Py | Ty | Ny, Cy));
  for (var a = r.length; a--; )
    by(t, r[a]);
  return t;
}), xy = Iy;
const Sy = /* @__PURE__ */ Q(xy);
function yn(e, r) {
  const t = r[e];
  return [Sy(r, [e]), t];
}
function ps(e, r = {}, t = []) {
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
    const [o, u] = yn(me, i), c = ps(u, r, [...t, n]);
    return Object.keys(o).length > 0 ? { ...o, ...c } : c;
  }
  return i;
}
function hs(e, r = {}) {
  return ps(e, r, []);
}
var jy = Object.prototype, Ry = jy.hasOwnProperty;
function My(e, r) {
  return e != null && Ry.call(e, r);
}
var Fy = My, Dy = wr, Ly = mr, Ky = ne, zy = st, qy = sn, Uy = Le;
function Vy(e, r, t) {
  r = Dy(r, e);
  for (var n = -1, a = r.length, i = !1; ++n < a; ) {
    var s = Uy(r[n]);
    if (!(i = e != null && t(e, s)))
      break;
    e = e[s];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && qy(a) && zy(s, a) && (Ky(e) || Ly(e)));
}
var vs = Vy, Gy = Fy, ky = vs;
function Wy(e, r) {
  return e != null && ky(e, r, Gy);
}
var Hy = Wy;
const pr = /* @__PURE__ */ Q(Hy);
var Yy = be, By = pe, Xy = "[object Number]";
function Jy(e) {
  return typeof e == "number" || By(e) && Yy(e) == Xy;
}
var Zy = Jy;
const ys = /* @__PURE__ */ Q(Zy);
var Qy = be, eg = ne, rg = pe, tg = "[object String]";
function ng(e) {
  return typeof e == "string" || !eg(e) && rg(e) && Qy(e) == tg;
}
var ig = ng;
const gs = /* @__PURE__ */ Q(ig);
function ag(e, r, t, n) {
  var a = -1, i = e == null ? 0 : e.length;
  for (n && i && (t = e[++a]); ++a < i; )
    t = r(t, e[a], a, e);
  return t;
}
var sg = ag;
function og(e) {
  return function(r, t, n) {
    for (var a = -1, i = Object(r), s = n(r), o = s.length; o--; ) {
      var u = s[e ? o : ++a];
      if (t(i[u], u, i) === !1)
        break;
    }
    return r;
  };
}
var ug = og, cg = ug, fg = cg(), ms = fg, lg = ms, dg = _r;
function pg(e, r) {
  return e && lg(e, r, dg);
}
var $s = pg, hg = De;
function vg(e, r) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!hg(t))
      return e(t, n);
    for (var a = t.length, i = r ? a : -1, s = Object(t); (r ? i-- : ++i < a) && n(s[i], i, s) !== !1; )
      ;
    return t;
  };
}
var yg = vg, gg = $s, mg = yg, $g = mg(gg), gn = $g, _g = nt, bg = ut, wg = 1, Ag = 2;
function Cg(e, r, t, n) {
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
      var h = new _g();
      if (n)
        var p = n(c, f, u, e, r, h);
      if (!(p === void 0 ? bg(f, c, wg | Ag, n, h) : p))
        return !1;
    }
  }
  return !0;
}
var Eg = Cg, Og = ce;
function Pg(e) {
  return e === e && !Og(e);
}
var _s = Pg, Tg = _s, Ng = _r;
function Ig(e) {
  for (var r = Ng(e), t = r.length; t--; ) {
    var n = r[t], a = e[n];
    r[t] = [n, a, Tg(a)];
  }
  return r;
}
var xg = Ig;
function Sg(e, r) {
  return function(t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
var bs = Sg, jg = Eg, Rg = xg, Mg = bs;
function Fg(e) {
  var r = Rg(e);
  return r.length == 1 && r[0][2] ? Mg(r[0][0], r[0][1]) : function(t) {
    return t === e || jg(t, e, r);
  };
}
var Dg = Fg;
function Lg(e, r) {
  return e != null && r in Object(e);
}
var Kg = Lg, zg = Kg, qg = vs;
function Ug(e, r) {
  return e != null && qg(e, r, zg);
}
var Vg = Ug, Gg = ut, kg = Ha, Wg = Vg, Hg = un, Yg = _s, Bg = bs, Xg = Le, Jg = 1, Zg = 2;
function Qg(e, r) {
  return Hg(e) && Yg(r) ? Bg(Xg(e), r) : function(t) {
    var n = kg(t, e);
    return n === void 0 && n === r ? Wg(t, e) : Gg(r, n, Jg | Zg);
  };
}
var em = Qg;
function rm(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var tm = rm, nm = ct;
function im(e) {
  return function(r) {
    return nm(r, e);
  };
}
var am = im, sm = tm, om = am, um = un, cm = Le;
function fm(e) {
  return um(e) ? sm(cm(e)) : om(e);
}
var lm = fm, dm = Dg, pm = em, hm = Ar, vm = ne, ym = lm;
function gm(e) {
  return typeof e == "function" ? e : e == null ? hm : typeof e == "object" ? vm(e) ? pm(e[0], e[1]) : dm(e) : ym(e);
}
var mn = gm;
function mm(e, r, t, n, a) {
  return a(e, function(i, s, o) {
    t = n ? (n = !1, i) : r(t, i, s, o);
  }), t;
}
var $m = mm, _m = sg, bm = gn, wm = mn, Am = $m, Cm = ne;
function Em(e, r, t) {
  var n = Cm(e) ? _m : Am, a = arguments.length < 3;
  return n(e, wm(r), t, a, bm);
}
var Om = Em;
const Pm = /* @__PURE__ */ Q(Om);
var Tm = Ar;
function Nm(e) {
  return typeof e == "function" ? e : Tm;
}
var ws = Nm, Im = /\s/;
function xm(e) {
  for (var r = e.length; r-- && Im.test(e.charAt(r)); )
    ;
  return r;
}
var Sm = xm, jm = Sm, Rm = /^\s+/;
function Mm(e) {
  return e && e.slice(0, jm(e) + 1).replace(Rm, "");
}
var Fm = Mm, Dm = Fm, Vi = ce, Lm = nr, Gi = NaN, Km = /^[-+]0x[0-9a-f]+$/i, zm = /^0b[01]+$/i, qm = /^0o[0-7]+$/i, Um = parseInt;
function Vm(e) {
  if (typeof e == "number")
    return e;
  if (Lm(e))
    return Gi;
  if (Vi(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Vi(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Dm(e);
  var t = zm.test(e);
  return t || qm.test(e) ? Um(e.slice(2), t ? 2 : 8) : Km.test(e) ? Gi : +e;
}
var Gm = Vm, km = Gm, ki = 1 / 0, Wm = 17976931348623157e292;
function Hm(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = km(e), e === ki || e === -ki) {
    var r = e < 0 ? -1 : 1;
    return r * Wm;
  }
  return e === e ? e : 0;
}
var Ym = Hm, Bm = Ym;
function Xm(e) {
  var r = Bm(e), t = r % 1;
  return r === r ? t ? r - t : r : 0;
}
var Jm = Xm, Zm = Ma, Qm = ws, e$ = Jm, r$ = 9007199254740991, Tt = 4294967295, t$ = Math.min;
function n$(e, r) {
  if (e = e$(e), e < 1 || e > r$)
    return [];
  var t = Tt, n = t$(e, Tt);
  r = Qm(r), e -= Tt;
  for (var a = Zm(n, r); ++t < e; )
    r(t);
  return a;
}
var i$ = n$;
const As = /* @__PURE__ */ Q(i$);
function Cs(e, r, t) {
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
function a$(e, r, t, n, a) {
  if (r === void 0)
    return 0;
  const i = Cs(r, t, a);
  if (ys(i))
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
function Es(e, r, t, n, a) {
  return a$(e, r, t, n, a);
}
var s$ = ut;
function o$(e, r) {
  return s$(e, r);
}
var $n = o$;
const u$ = /* @__PURE__ */ Q($n);
var c$ = pn, f$ = wr, l$ = st, Wi = ce, d$ = Le;
function p$(e, r, t, n) {
  if (!Wi(e))
    return e;
  r = f$(r, e);
  for (var a = -1, i = r.length, s = i - 1, o = e; o != null && ++a < i; ) {
    var u = d$(r[a]), c = t;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != s) {
      var f = o[u];
      c = n ? n(f, u, o) : void 0, c === void 0 && (c = Wi(f) ? f : l$(r[a + 1]) ? [] : {});
    }
    c$(o, u, c), o = o[u];
  }
  return e;
}
var Os = p$, h$ = Os;
function v$(e, r, t) {
  return e == null ? e : h$(e, r, t);
}
var y$ = v$;
const Vt = /* @__PURE__ */ Q(y$);
var g$ = ln, m$ = ts, $$ = $s, _$ = mn, b$ = Jr, w$ = ne, A$ = rr, C$ = et, E$ = ce, O$ = $r;
function P$(e, r, t) {
  var n = w$(e), a = n || A$(e) || O$(e);
  if (r = _$(r), t == null) {
    var i = e && e.constructor;
    a ? t = n ? new i() : [] : E$(e) ? t = C$(i) ? m$(b$(e)) : {} : t = {};
  }
  return (a ? g$ : $$)(e, function(s, o, u) {
    return r(t, s, o, u);
  }), t;
}
var T$ = P$;
const N$ = /* @__PURE__ */ Q(T$);
var I$ = dn, x$ = Xe;
function S$(e, r, t) {
  (t !== void 0 && !x$(e[r], t) || t === void 0 && !(r in e)) && I$(e, r, t);
}
var Ps = S$, j$ = De, R$ = pe;
function M$(e) {
  return R$(e) && j$(e);
}
var pt = M$;
function F$(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
var Ts = F$, D$ = ir, L$ = ar;
function K$(e) {
  return D$(e, L$(e));
}
var z$ = K$, Hi = Ps, q$ = Za, U$ = rs, V$ = lt, G$ = ns, Yi = mr, Bi = ne, k$ = pt, W$ = rr, H$ = et, Y$ = ce, B$ = Be, X$ = $r, Xi = Ts, J$ = z$;
function Z$(e, r, t, n, a, i, s) {
  var o = Xi(e, t), u = Xi(r, t), c = s.get(u);
  if (c) {
    Hi(e, t, c);
    return;
  }
  var f = i ? i(o, u, t + "", e, r, s) : void 0, h = f === void 0;
  if (h) {
    var p = Bi(u), v = !p && W$(u), _ = !p && !v && X$(u);
    f = u, p || v || _ ? Bi(o) ? f = o : k$(o) ? f = V$(o) : v ? (h = !1, f = q$(u, !0)) : _ ? (h = !1, f = U$(u, !0)) : f = [] : B$(u) || Yi(u) ? (f = o, Yi(o) ? f = J$(o) : (!Y$(o) || H$(o)) && (f = G$(u))) : h = !1;
  }
  h && (s.set(u, f), a(f, u, n, i, s), s.delete(u)), Hi(e, t, f);
}
var Q$ = Z$, e_ = nt, r_ = Ps, t_ = ms, n_ = Q$, i_ = ce, a_ = ar, s_ = Ts;
function Ns(e, r, t, n, a) {
  e !== r && t_(r, function(i, s) {
    if (a || (a = new e_()), i_(i))
      n_(e, r, s, t, Ns, n, a);
    else {
      var o = n ? n(s_(e, s), i, s + "", e, r, a) : void 0;
      o === void 0 && (o = i), r_(e, s, o);
    }
  }, a_);
}
var _n = Ns, o_ = Ar, u_ = ls, c_ = ds;
function f_(e, r) {
  return c_(u_(e, r, o_), e + "");
}
var Te = f_, l_ = Xe, d_ = De, p_ = st, h_ = ce;
function v_(e, r, t) {
  if (!h_(t))
    return !1;
  var n = typeof r;
  return (n == "number" ? d_(t) && p_(r, t.length) : n == "string" && r in t) ? l_(t[r], e) : !1;
}
var bn = v_, y_ = Te, g_ = bn;
function m_(e) {
  return y_(function(r, t) {
    var n = -1, a = t.length, i = a > 1 ? t[a - 1] : void 0, s = a > 2 ? t[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, s && g_(t[0], t[1], s) && (i = a < 3 ? void 0 : i, a = 1), r = Object(r); ++n < a; ) {
      var o = t[n];
      o && e(r, o, n, i);
    }
    return r;
  });
}
var Is = m_, $_ = _n, __ = Is, b_ = __(function(e, r, t) {
  $_(e, r, t);
}), w_ = b_;
const A_ = /* @__PURE__ */ Q(w_);
var C_ = dt, E_ = 1 / 0;
function O_(e) {
  var r = e == null ? 0 : e.length;
  return r ? C_(e, E_) : [];
}
var wn = O_;
const P_ = /* @__PURE__ */ Q(wn);
function T_(e, r, t, n) {
  for (var a = e.length, i = t + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (r(e[i], i, e))
      return i;
  return -1;
}
var N_ = T_;
function I_(e) {
  return e !== e;
}
var x_ = I_;
function S_(e, r, t) {
  for (var n = t - 1, a = e.length; ++n < a; )
    if (e[n] === r)
      return n;
  return -1;
}
var j_ = S_, R_ = N_, M_ = x_, F_ = j_;
function D_(e, r, t) {
  return r === r ? F_(e, r, t) : R_(e, M_, t);
}
var xs = D_, L_ = xs;
function K_(e, r) {
  var t = e == null ? 0 : e.length;
  return !!t && L_(e, r, 0) > -1;
}
var An = K_;
function z_(e, r, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (t(r, e[n]))
      return !0;
  return !1;
}
var Cn = z_;
function q_() {
}
var U_ = q_, Nt = za, V_ = U_, G_ = tn, k_ = 1 / 0, W_ = Nt && 1 / G_(new Nt([, -0]))[1] == k_ ? function(e) {
  return new Nt(e);
} : V_, H_ = W_, Y_ = it, B_ = An, X_ = Cn, J_ = at, Z_ = H_, Q_ = tn, e4 = 200;
function r4(e, r, t) {
  var n = -1, a = B_, i = e.length, s = !0, o = [], u = o;
  if (t)
    s = !1, a = X_;
  else if (i >= e4) {
    var c = r ? null : Z_(e);
    if (c)
      return Q_(c);
    s = !1, a = J_, u = new Y_();
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
var En = r4, t4 = En;
function n4(e) {
  return e && e.length ? t4(e) : [];
}
var ht = n4;
const i4 = /* @__PURE__ */ Q(ht);
var a4 = os, s4 = 1, o4 = 4;
function u4(e) {
  return a4(e, s4 | o4);
}
var Ss = u4;
const c4 = /* @__PURE__ */ Q(Ss);
var f4 = gn, l4 = De;
function d4(e, r) {
  var t = -1, n = l4(e) ? Array(e.length) : [];
  return f4(e, function(a, i, s) {
    n[++t] = r(a, i, s);
  }), n;
}
var p4 = d4;
function h4(e, r) {
  var t = e.length;
  for (e.sort(r); t--; )
    e[t] = e[t].value;
  return e;
}
var v4 = h4, Ji = nr;
function y4(e, r) {
  if (e !== r) {
    var t = e !== void 0, n = e === null, a = e === e, i = Ji(e), s = r !== void 0, o = r === null, u = r === r, c = Ji(r);
    if (!o && !c && !i && e > r || i && s && u && !o && !c || n && s && u || !t && u || !a)
      return 1;
    if (!n && !i && !c && e < r || c && t && a && !n && !i || o && t && a || !s && a || !u)
      return -1;
  }
  return 0;
}
var g4 = y4, m4 = g4;
function $4(e, r, t) {
  for (var n = -1, a = e.criteria, i = r.criteria, s = a.length, o = t.length; ++n < s; ) {
    var u = m4(a[n], i[n]);
    if (u) {
      if (n >= o)
        return u;
      var c = t[n];
      return u * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - r.index;
}
var _4 = $4, It = we, b4 = ct, w4 = mn, A4 = p4, C4 = v4, E4 = Fe, O4 = _4, P4 = Ar, T4 = ne;
function N4(e, r, t) {
  r.length ? r = It(r, function(i) {
    return T4(i) ? function(s) {
      return b4(s, i.length === 1 ? i[0] : i);
    } : i;
  }) : r = [P4];
  var n = -1;
  r = It(r, E4(w4));
  var a = A4(e, function(i, s, o) {
    var u = It(r, function(c) {
      return c(i);
    });
    return { criteria: u, index: ++n, value: i };
  });
  return C4(a, function(i, s) {
    return O4(i, s, t);
  });
}
var I4 = N4, x4 = dt, S4 = I4, j4 = Te, Zi = bn, R4 = j4(function(e, r) {
  if (e == null)
    return [];
  var t = r.length;
  return t > 1 && Zi(e, r[0], r[1]) ? r = [] : t > 2 && Zi(r[0], r[1], r[2]) && (r = [r[0]]), S4(e, x4(r, 1), []);
}), js = R4, M4 = En;
function F4(e, r) {
  return r = typeof r == "function" ? r : void 0, e && e.length ? M4(e, void 0, r) : [];
}
var On = F4, D4 = Te, L4 = Xe, K4 = bn, z4 = ar, Rs = Object.prototype, q4 = Rs.hasOwnProperty, U4 = D4(function(e, r) {
  e = Object(e);
  var t = -1, n = r.length, a = n > 2 ? r[2] : void 0;
  for (a && K4(r[0], r[1], a) && (n = 1); ++t < n; )
    for (var i = r[t], s = z4(i), o = -1, u = s.length; ++o < u; ) {
      var c = s[o], f = e[c];
      (f === void 0 || L4(f, Rs[c]) && !q4.call(e, c)) && (e[c] = i[c]);
    }
  return e;
}), V4 = U4, G4 = it, k4 = An, W4 = Cn, H4 = we, Y4 = Fe, Qi = at, B4 = Math.min;
function X4(e, r, t) {
  for (var n = t ? W4 : k4, a = e[0].length, i = e.length, s = i, o = Array(i), u = 1 / 0, c = []; s--; ) {
    var f = e[s];
    s && r && (f = H4(f, Y4(r))), u = B4(f.length, u), o[s] = !t && (r || a >= 120 && f.length >= 120) ? new G4(s && f) : void 0;
  }
  f = e[0];
  var h = -1, p = o[0];
  e:
    for (; ++h < a && c.length < u; ) {
      var v = f[h], _ = r ? r(v) : v;
      if (v = t || v !== 0 ? v : 0, !(p ? Qi(p, _) : n(c, _, t))) {
        for (s = i; --s; ) {
          var b = o[s];
          if (!(b ? Qi(b, _) : n(e[s], _, t)))
            continue e;
        }
        p && p.push(_), c.push(v);
      }
    }
  return c;
}
var Ms = X4, J4 = pt;
function Z4(e) {
  return J4(e) ? e : [];
}
var Fs = Z4, Q4 = we, eb = Ms, rb = Te, tb = Fs, nb = us, ib = rb(function(e) {
  var r = nb(e), t = Q4(e, tb);
  return r = typeof r == "function" ? r : void 0, r && t.pop(), t.length && t[0] === e[0] ? eb(t, void 0, r) : [];
}), Ds = ib, ab = be, sb = pe, ob = "[object Boolean]";
function ub(e) {
  return e === !0 || e === !1 || sb(e) && ab(e) == ob;
}
var cb = ub, he = $n, fb = js, Pn = ht, ea = On, lb = V4, db = Ds, kr = Be, xt = cb, ra = (e) => Array.isArray(e) ? e : [e], de = (e) => e === void 0, Sr = (e) => kr(e) || Array.isArray(e) ? Object.keys(e) : [], Ve = (e, r) => e.hasOwnProperty(r), ke = (e) => fb(Pn(e)), ta = (e) => de(e) || Array.isArray(e) && e.length === 0, pb = (e, r, t, n) => r && Ve(r, t) && e && Ve(e, t) && n(e[t], r[t]), St = (e, r) => de(e) && r === 0 || de(r) && e === 0 || he(e, r), hb = (e, r) => de(e) && r === !1 || de(r) && e === !1 || he(e, r), na = (e) => de(e) || he(e, {}) || e === !0, jr = (e) => de(e) || he(e, {}), ia = (e) => de(e) || kr(e) || e === !0 || e === !1;
function aa(e, r) {
  return ta(e) && ta(r) ? !0 : he(ke(e), ke(r));
}
function vb(e, r) {
  return e = ra(e), r = ra(r), he(ke(e), ke(r));
}
function Dr(e, r, t, n) {
  var a = Pn(Sr(e).concat(Sr(r)));
  return jr(e) && jr(r) ? !0 : jr(e) && Sr(r).length || jr(r) && Sr(e).length ? !1 : a.every(function(i) {
    var s = e[i], o = r[i];
    return Array.isArray(s) && Array.isArray(o) ? he(ke(e), ke(r)) : Array.isArray(s) && !Array.isArray(o) || Array.isArray(o) && !Array.isArray(s) ? !1 : pb(e, r, i, n);
  });
}
function yb(e, r, t, n) {
  return kr(e) && kr(r) ? n(e, r) : Array.isArray(e) && Array.isArray(r) ? Dr(e, r, t, n) : he(e, r);
}
function jt(e, r, t, n) {
  var a = ea(e, n), i = ea(r, n), s = db(a, i, n);
  return s.length === Math.max(a.length, i.length);
}
var gb = {
  title: he,
  uniqueItems: hb,
  minLength: St,
  minItems: St,
  minProperties: St,
  required: aa,
  enum: aa,
  type: vb,
  items: yb,
  anyOf: jt,
  allOf: jt,
  oneOf: jt,
  properties: Dr,
  patternProperties: Dr,
  dependencies: Dr
}, mb = [
  "properties",
  "patternProperties",
  "dependencies",
  "uniqueItems",
  "minLength",
  "minItems",
  "minProperties",
  "required"
], $b = ["additionalProperties", "additionalItems", "contains", "propertyNames", "not"];
function Gt(e, r, t) {
  if (t = lb(t, {
    ignore: []
  }), na(e) && na(r))
    return !0;
  if (!ia(e) || !ia(r))
    throw new Error("Either of the values are not a JSON schema.");
  if (e === r)
    return !0;
  if (xt(e) && xt(r))
    return e === r;
  if (e === void 0 && r === !1 || r === void 0 && e === !1 || de(e) && !de(r) || !de(e) && de(r))
    return !1;
  var n = Pn(Object.keys(e).concat(Object.keys(r)));
  if (t.ignore.length && (n = n.filter((i) => t.ignore.indexOf(i) === -1)), !n.length)
    return !0;
  function a(i, s) {
    return Gt(i, s, t);
  }
  return n.every(function(i) {
    var s = e[i], o = r[i];
    if ($b.indexOf(i) !== -1)
      return Gt(s, o, t);
    var u = gb[i];
    if (u || (u = he), he(s, o))
      return !0;
    if (mb.indexOf(i) === -1 && (!Ve(e, i) && Ve(r, i) || Ve(e, i) && !Ve(r, i)))
      return s === o;
    var c = u(s, o, i, a);
    if (!xt(c))
      throw new Error("Comparer must return true or false");
    return c;
  });
}
var Tn = Gt;
function _b(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}
var Nn = Array.isArray || _b;
function bb(e) {
  return (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]") && e.valueOf() === e.valueOf();
}
var wb = bb, Ab = wb;
function Cb(e) {
  return Ab(e) && e % 1 === 0;
}
var Eb = Cb, Ob = Nn, Pb = Eb;
function Tb(e) {
  var r;
  if (!Ob(e) || (r = e.length, !r))
    return !1;
  for (var t = 0; t < r; t++)
    if (!Pb(e[t]))
      return !1;
  return !0;
}
var Ls = Tb;
function Nb(e) {
  return typeof e == "function";
}
var Ks = Nb, Ib = Nn, sa = Ls, xb = Ks, Rr = Math.pow(2, 31) - 1;
function oa(e, r) {
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
function ua(e, r) {
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
function Sb() {
  var e = arguments.length, r, t, n, a, i, s, o;
  for (r = new Array(e), o = 0; o < e; o++)
    r[o] = arguments[o];
  if (sa(r)) {
    if (e === 2)
      return i = r[0], s = r[1], i < 0 && (i = -i), s < 0 && (s = -s), i <= Rr && s <= Rr ? ua(i, s) : oa(i, s);
    n = r;
  } else if (Ib(r[0]))
    if (e > 1) {
      if (n = r[0], t = r[1], !xb(t))
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
  if (e < 3 && !sa(n))
    throw new TypeError("gcd()::invalid input argument. Accessed array values must be integers. Value: `" + n + "`.");
  for (o = 0; o < a; o++)
    i = n[o], i < 0 && (n[o] = -i);
  for (i = n[0], o = 1; o < a; o++)
    s = n[o], s <= Rr && i <= Rr ? i = ua(i, s) : i = oa(i, s);
  return i;
}
var jb = Sb, ca = jb, Rb = Nn, fa = Ls, Mb = Ks;
function Fb() {
  var e = arguments.length, r, t, n, a, i, s, o;
  for (r = new Array(e), o = 0; o < e; o++)
    r[o] = arguments[o];
  if (fa(r)) {
    if (e === 2)
      return i = r[0], s = r[1], i < 0 && (i = -i), s < 0 && (s = -s), i === 0 || s === 0 ? 0 : i / ca(i, s) * s;
    n = r;
  } else if (Rb(r[0]))
    if (e > 1) {
      if (n = r[0], t = r[1], !Mb(t))
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
  if (e < 3 && !fa(n))
    throw new TypeError("lcm()::invalid input argument. Accessed array values must be integers. Value: `" + n + "`.");
  for (o = 0; o < a; o++)
    i = n[o], i < 0 && (n[o] = -i);
  for (i = n[0], o = 1; o < a; o++) {
    if (s = n[o], i === 0 || s === 0)
      return 0;
    i = i / ca(i, s) * s;
  }
  return i;
}
var Db = Fb, Lb = _n, la = ce;
function zs(e, r, t, n, a, i) {
  return la(e) && la(r) && (i.set(r, e), Lb(e, r, void 0, zs, i), i.delete(r)), e;
}
var Kb = zs, zb = _n, qb = Is, Ub = qb(function(e, r, t, n) {
  zb(e, r, t, n);
}), Vb = Ub, Gb = fs, kb = Te, Wb = Kb, Hb = Vb, Yb = kb(function(e) {
  return e.push(void 0, Wb), Gb(Hb, void 0, e);
}), Bb = Yb, Xb = we, Jb = Ms, Zb = Te, Qb = Fs, e3 = Zb(function(e) {
  var r = Xb(e, Qb);
  return r.length && r[0] === e[0] ? Jb(r) : [];
}), r3 = e3;
function t3(e, r, t, n) {
  for (var a = t - 1, i = e.length; ++a < i; )
    if (n(e[a], r))
      return a;
  return -1;
}
var n3 = t3, i3 = we, a3 = xs, s3 = n3, o3 = Fe, u3 = lt, c3 = Array.prototype, da = c3.splice;
function f3(e, r, t, n) {
  var a = n ? s3 : a3, i = -1, s = r.length, o = e;
  for (e === r && (r = u3(r)), t && (o = i3(e, o3(t))); ++i < s; )
    for (var u = 0, c = r[i], f = t ? t(c) : c; (u = a(o, f, u, n)) > -1; )
      o !== e && da.call(o, u, 1), da.call(e, u, 1);
  return e;
}
var l3 = f3, d3 = l3;
function p3(e, r) {
  return e && e.length && r && r.length ? d3(e, r) : e;
}
var h3 = p3, v3 = ln, y3 = gn, g3 = ws, m3 = ne;
function $3(e, r) {
  var t = m3(e) ? v3 : y3;
  return t(e, g3(r));
}
var qs = $3, _3 = it, b3 = An, w3 = Cn, A3 = we, C3 = Fe, E3 = at, O3 = 200;
function P3(e, r, t, n) {
  var a = -1, i = b3, s = !0, o = e.length, u = [], c = r.length;
  if (!o)
    return u;
  t && (r = A3(r, C3(t))), n ? (i = w3, s = !1) : r.length >= O3 && (i = E3, s = !1, r = new _3(r));
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
var T3 = P3, N3 = T3, I3 = Te, x3 = pt, S3 = I3(function(e, r) {
  return x3(e) ? N3(e, r) : [];
}), j3 = S3;
const R3 = vn, M3 = wn, Us = Be, F3 = ht, D3 = On, L3 = j3;
function K3(e) {
  for (const r in e)
    Vs(e, r) && Gs(e[r]) && delete e[r];
  return e;
}
const z3 = (e) => F3(M3(e.map(In))), q3 = (e, r) => e.map((t) => t && t[r]), Vs = (e, r) => Object.prototype.hasOwnProperty.call(e, r), In = (e) => Us(e) || Array.isArray(e) ? Object.keys(e) : [], U3 = (e) => e !== void 0, V3 = (e) => Us(e) || e === !0 || e === !1, Gs = (e) => !In(e).length && e !== !1 && e !== !0, G3 = (e, ...r) => L3.apply(null, [e].concat(R3(r)));
var ks = {
  allUniqueKeys: z3,
  deleteUndefinedProps: K3,
  getValues: q3,
  has: Vs,
  isEmptySchema: Gs,
  isSchema: V3,
  keys: In,
  notUndefined: U3,
  uniqWith: D3,
  withoutArr: G3
};
const k3 = Tn, W3 = qs, {
  allUniqueKeys: H3,
  deleteUndefinedProps: Y3,
  getValues: B3,
  keys: dr,
  notUndefined: X3,
  uniqWith: J3,
  withoutArr: pa
} = ks;
function Z3(e) {
  W3(e, function(r, t) {
    r === !1 && delete e[t];
  });
}
function ha(e, r) {
  return H3(e).reduce(function(n, a) {
    const i = B3(e, a), s = J3(i.filter(X3), k3);
    return n[a] = r(s, a), n;
  }, {});
}
var Q3 = {
  keywords: ["properties", "patternProperties", "additionalProperties"],
  resolver(e, r, t, n) {
    n.ignoreAdditionalProperties || (e.forEach(function(i) {
      const s = e.filter((f) => f !== i), o = dr(i.properties), c = dr(i.patternProperties).map((f) => new RegExp(f));
      s.forEach(function(f) {
        const h = dr(f.properties), p = h.filter((_) => c.some((b) => b.test(_)));
        pa(h, o, p).forEach(function(_) {
          f.properties[_] = t.properties([
            f.properties[_],
            i.additionalProperties
          ], _);
        });
      });
    }), e.forEach(function(i) {
      const s = e.filter((u) => u !== i), o = dr(i.patternProperties);
      i.additionalProperties === !1 && s.forEach(function(u) {
        const c = dr(u.patternProperties);
        pa(c, o).forEach((h) => delete u.patternProperties[h]);
      });
    }));
    const a = {
      additionalProperties: t.additionalProperties(e.map((i) => i.additionalProperties)),
      patternProperties: ha(e.map((i) => i.patternProperties), t.patternProperties),
      properties: ha(e.map((i) => i.properties), t.properties)
    };
    return a.additionalProperties === !1 && Z3(a.properties), Y3(a);
  }
};
const e9 = Tn, r9 = qs, {
  allUniqueKeys: t9,
  deleteUndefinedProps: n9,
  has: i9,
  isSchema: Ws,
  notUndefined: Hs,
  uniqWith: a9
} = ks;
function s9(e) {
  r9(e, function(r, t) {
    r === !1 && e.splice(t, 1);
  });
}
function o9(e, r) {
  return e.map(function(t) {
    if (t)
      if (Array.isArray(t.items)) {
        const n = t.items[r];
        if (Ws(n))
          return n;
        if (i9(t, "additionalItems"))
          return t.additionalItems;
      } else
        return t.items;
  });
}
function u9(e) {
  return e.map(function(r) {
    if (r)
      return Array.isArray(r.items) ? r.additionalItems : r.items;
  });
}
function c9(e, r, t) {
  return t9(t).reduce(function(a, i) {
    const s = o9(e, i), o = a9(s.filter(Hs), e9);
    return a[i] = r(o, i), a;
  }, []);
}
var f9 = {
  keywords: ["items", "additionalItems"],
  resolver(e, r, t) {
    const n = e.map((o) => o.items), a = n.filter(Hs), i = {};
    a.every(Ws) ? i.items = t.items(n) : i.items = c9(e, t.items, n);
    let s;
    return a.every(Array.isArray) ? s = e.map((o) => o.additionalItems) : a.some(Array.isArray) && (s = u9(e)), s && (i.additionalItems = t.additionalItems(s)), i.additionalItems === !1 && Array.isArray(i.items) && s9(i.items), n9(i);
  }
};
const Ys = Ss, Wr = Tn, l9 = Db, d9 = Bb, Bs = vn, xn = wn, p9 = r3, h9 = Ds, kt = $n, We = Be, v9 = h3, Xs = js, Sn = ht, Ge = On, Js = Q3, Zs = f9, Mr = (e, r) => e.indexOf(r) !== -1, y9 = (e) => We(e) || e === !0 || e === !1, g9 = (e) => e === !1, Qs = (e) => e === !0, vt = (e, r, t) => t(e), eo = (e) => Xs(Sn(xn(e))), Hr = (e) => e !== void 0, ro = (e) => Sn(xn(e.map(A9))), sr = (e) => e[0], m9 = (e) => eo(e), Cr = (e) => Math.max.apply(Math, e), Er = (e) => Math.min.apply(Math, e), $9 = (e) => e.some(Qs), _9 = (e) => Ge(Bs(e), kt);
function b9(e) {
  return function(r, t) {
    return Wr({
      [e]: r
    }, { [e]: t });
  };
}
function to(e) {
  let { allOf: r = [], ...t } = e;
  return t = We(e) ? t : e, [t, ...r.map(to)];
}
function no(e, r) {
  return e.map((t) => t && t[r]);
}
function w9(e, r) {
  return e.map(function(t, n) {
    try {
      return r(t, n);
    } catch {
      return;
    }
  }).filter(Hr);
}
function A9(e) {
  return We(e) || Array.isArray(e) ? Object.keys(e) : [];
}
function Wt(e, r) {
  if (r = r || [], !e.length)
    return r;
  const t = e.slice(0).shift(), n = e.slice(1);
  return r.length ? Wt(n, Bs(r.map((a) => t.map((i) => [i].concat(a))))) : Wt(n, t.map((a) => a));
}
function io(e, r) {
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
function C9(e, r, t, n, a, i) {
  if (e.length) {
    const s = a.complexResolvers[r];
    if (!s || !s.resolver)
      throw new Error("No resolver found for " + r);
    const o = t.map((h) => e.reduce((p, v) => (h[v] !== void 0 && (p[v] = h[v]), p), {})), u = Ge(o, Wr), c = s.keywords.reduce((h, p) => ({
      ...h,
      [p]: (v, _ = []) => n(v, null, i.concat(p, _))
    }), {}), f = s.resolver(u, i.concat(r), c, a);
    return We(f) || io(u, i.concat(r)), f;
  }
}
function E9(e) {
  return { required: e };
}
const O9 = ["properties", "patternProperties", "definitions", "dependencies"], P9 = ["anyOf", "oneOf"], T9 = [
  "additionalProperties",
  "additionalItems",
  "contains",
  "propertyNames",
  "not",
  "items"
], U = {
  type(e) {
    if (e.some(Array.isArray)) {
      const r = e.map(function(n) {
        return Array.isArray(n) ? n : [n];
      }), t = p9.apply(null, r);
      if (t.length === 1)
        return t[0];
      if (t.length > 1)
        return Sn(t);
    }
  },
  dependencies(e, r, t) {
    return ro(e).reduce(function(a, i) {
      const s = no(e, i);
      let o = Ge(s.filter(Hr), kt);
      const u = o.filter(Array.isArray);
      if (u.length) {
        if (u.length === o.length)
          a[i] = eo(o);
        else {
          const c = o.filter(y9), f = u.map(E9);
          a[i] = t(c.concat(f), i);
        }
        return a;
      }
      return o = Ge(o, Wr), a[i] = t(o, i), a;
    }, {});
  },
  oneOf(e, r, t) {
    const n = Wt(Ys(e)), a = w9(n, t), i = Ge(a, Wr);
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
    return l9(r) / t;
  },
  enum(e) {
    const r = h9.apply(null, e.concat(kt));
    if (r.length)
      return Xs(r);
  }
};
U.$id = sr;
U.$ref = sr;
U.$schema = sr;
U.additionalItems = vt;
U.additionalProperties = vt;
U.anyOf = U.oneOf;
U.contains = vt;
U.default = sr;
U.definitions = U.dependencies;
U.description = sr;
U.examples = _9;
U.exclusiveMaximum = Er;
U.exclusiveMinimum = Cr;
U.items = Zs;
U.maximum = Er;
U.maxItems = Er;
U.maxLength = Er;
U.maxProperties = Er;
U.minimum = Cr;
U.minItems = Cr;
U.minLength = Cr;
U.minProperties = Cr;
U.properties = Js;
U.propertyNames = vt;
U.required = m9;
U.title = sr;
U.uniqueItems = $9;
const N9 = {
  properties: Js,
  items: Zs
};
function jn(e, r, t) {
  r = d9(r, {
    ignoreAdditionalProperties: !1,
    resolvers: U,
    complexResolvers: N9,
    deep: !0
  });
  const n = Object.entries(r.complexResolvers);
  function a(o, u, c) {
    o = Ys(o.filter(Hr)), c = c || [];
    const f = We(u) ? u : {};
    if (!o.length)
      return;
    if (o.some(g9))
      return !1;
    if (o.every(Qs))
      return !0;
    o = o.filter(We);
    const h = ro(o);
    if (r.deep && Mr(h, "allOf"))
      return jn({
        allOf: o
      }, r);
    const p = n.map(([v, _]) => h.filter((b) => _.keywords.includes(b)));
    return p.forEach((v) => v9(h, v)), h.forEach(function(v) {
      const _ = no(o, v), b = Ge(_.filter(Hr), b9(v));
      if (b.length === 1 && Mr(P9, v))
        f[v] = b[0].map((m) => a([m], m));
      else if (b.length === 1 && !Mr(O9, v) && !Mr(T9, v))
        f[v] = b[0];
      else {
        const m = r.resolvers[v] || r.resolvers.defaultResolver;
        if (!m) throw new Error("No resolver found for key " + v + ". You can provide a resolver for this keyword in the options, or provide a default resolver.");
        const y = ($, O = []) => a($, null, c.concat(v, O));
        f[v] = m(b, c.concat(v), y, r), f[v] === void 0 ? io(b, c.concat(v)) : f[v] === void 0 && delete f[v];
      }
    }), n.reduce((v, [_, b], m) => ({
      ...v,
      ...C9(p[m], _, o, a, r, c)
    }), f);
  }
  const i = xn(to(e));
  return a(i);
}
jn.options = {
  resolvers: U
};
var I9 = jn;
const x9 = /* @__PURE__ */ Q(I9);
function Yr(e) {
  let r;
  const t = Z(e, "discriminator.propertyName", void 0);
  return gs(t) ? r = t : t !== void 0 && console.warn(`Expecting discriminator to be a string, got "${typeof t}" instead`), r;
}
function yr(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : e == null ? "null" : typeof e == "boolean" ? "boolean" : isNaN(e) ? typeof e == "object" ? "object" : "string" : "number";
}
var S9 = dt, j9 = Te, R9 = En, M9 = pt, F9 = j9(function(e) {
  return R9(S9(e, 1, M9, !0));
}), D9 = F9;
const L9 = /* @__PURE__ */ Q(D9);
function Ht(e) {
  let { type: r } = e;
  return !r && e.const ? yr(e.const) : !r && e.enum ? "string" : !r && (e.properties || e.additionalProperties) ? "object" : (Array.isArray(r) && (r.length === 2 && r.includes("null") ? r = r.find((t) => t !== "null") : r = r[0]), r);
}
function Pe(e, r) {
  const t = Object.assign({}, e);
  return Object.keys(r).reduce((n, a) => {
    const i = e ? e[a] : {}, s = r[a];
    return e && a in e && J(s) ? n[a] = Pe(i, s) : e && r && (Ht(e) === "object" || Ht(r) === "object") && a === Jo && Array.isArray(i) && Array.isArray(s) ? n[a] = L9(i, s) : n[a] = s, n;
  }, t);
}
function Or(e, r, t = {}, n, a) {
  return ge(e, r, t, n, void 0, void 0, a)[0];
}
function K9(e, r, t, n, a, i, s) {
  const { if: o, then: u, else: c, ...f } = r, h = e.isValid(o, i || {}, t);
  let p = [f], v = [];
  if (n)
    u && typeof u != "boolean" && (v = v.concat(ge(e, u, t, i, n, a, s))), c && typeof c != "boolean" && (v = v.concat(ge(e, c, t, i, n, a, s)));
  else {
    const _ = h ? u : c;
    _ && typeof _ != "boolean" && (v = v.concat(ge(e, _, t, i, n, a, s)));
  }
  return v.length && (p = v.map((_) => Pe(f, _))), p.flatMap((_) => ge(e, _, t, i, n, a, s));
}
function ao(e) {
  return e.reduce(
    (t, n) => n.length > 1 ? n.flatMap((a) => As(t.length, (i) => [...t[i]].concat(a))) : (t.forEach((a) => a.push(n[0])), t),
    [[]]
    // Start with an empty list
  );
}
function z9(e, r, t, n, a, i, s) {
  const o = so(e, r, t, n, a, i);
  if (o.length > 1 || o[0] !== r)
    return o;
  if (Ca in r)
    return oo(e, r, t, n, a, i).flatMap((c) => ge(e, c, t, i, n, a, s));
  if (Zt in r && Array.isArray(r.allOf)) {
    const u = r.allOf.map((f) => ge(e, f, t, i, n, a, s));
    return ao(u).map((f) => ({ ...r, allOf: f }));
  }
  return [r];
}
function so(e, r, t, n, a, i, s) {
  const o = gr(r, t, a);
  return o !== r ? ge(e, o, t, i, n, a, s) : [r];
}
function gr(e, r, t) {
  if (!J(e))
    return e;
  let n = e;
  if (me in n) {
    const { $ref: a, ...i } = n;
    if (t.includes(a))
      return n;
    t.push(a), n = { ...hs(a, r), ...i };
  }
  if (ye in n) {
    const a = [], i = N$(n[ye], (s, o, u) => {
      const c = [...t];
      s[u] = gr(o, r, c), a.push(c);
    }, {});
    A_(t, i4(P_(a))), n = { ...n, [ye]: i };
  }
  return Bo in n && !Array.isArray(n.items) && typeof n.items != "boolean" && (n = {
    ...n,
    items: gr(n.items, r, t)
  }), u$(e, n) ? e : n;
}
function q9(e, r, t, n) {
  const a = {
    ...r,
    properties: { ...r.properties }
  }, i = n && J(n) ? n : {};
  return Object.keys(i).forEach((s) => {
    if (s in a.properties)
      return;
    let o = {};
    typeof a.additionalProperties != "boolean" ? me in a.additionalProperties ? o = Or(e, { $ref: Z(a.additionalProperties, [me]) }, t, i) : "type" in a.additionalProperties ? o = { ...a.additionalProperties } : Lr in a.additionalProperties || hr in a.additionalProperties ? o = {
      type: "object",
      ...a.additionalProperties
    } : o = { type: yr(Z(i, [s])) } : o = { type: yr(Z(i, [s])) }, a.properties[s] = o, Vt(a.properties, [s, Aa], !0);
  }), a;
}
function ge(e, r, t, n, a = !1, i = [], s) {
  return J(r) ? z9(e, r, t, a, i, n).flatMap((u) => {
    var c;
    let f = u;
    if (Yo in f)
      return K9(e, f, t, a, i, n, s);
    if (Zt in f) {
      if (a) {
        const { allOf: p, ...v } = f;
        return [...p, v];
      }
      try {
        const p = [], v = [];
        (c = f.allOf) === null || c === void 0 || c.forEach((_) => {
          typeof _ == "object" && _.contains ? p.push(_) : v.push(_);
        }), p.length && (f = { ...f, allOf: v }), f = s ? s(f) : x9(f, {
          deep: !1
        }), p.length && (f.allOf = p);
      } catch (p) {
        console.warn(`could not merge subschemas in allOf:
`, p);
        const { allOf: v, ..._ } = f;
        return _;
      }
    }
    return Wo in f && f.additionalProperties !== !1 ? q9(e, f, t, n) : f;
  }) : [{}];
}
function U9(e, r, t, n, a) {
  let i;
  const { oneOf: s, anyOf: o, ...u } = r;
  if (Array.isArray(s) ? i = s : Array.isArray(o) && (i = o), i) {
    const c = a === void 0 && n ? {} : a, f = Yr(r);
    i = i.map((p) => gr(p, t, []));
    const h = Es(e, c, i, t, f);
    if (n)
      return i.map((p) => Pe(u, p));
    r = Pe(u, i[h]);
  }
  return [r];
}
function oo(e, r, t, n, a, i, s) {
  const { dependencies: o, ...u } = r;
  return U9(e, u, t, n, i).flatMap((f) => uo(e, o, f, t, n, a, i, s));
}
function uo(e, r, t, n, a, i, s, o) {
  let u = [t];
  for (const c in r) {
    if (!a && Z(s, [c]) === void 0 || t.properties && !(c in t.properties))
      continue;
    const [f, h] = yn(c, r);
    return Array.isArray(h) ? u[0] = V9(t, h) : J(h) && (u = G9(e, t, n, c, h, a, i, s, o)), u.flatMap((p) => uo(e, f, p, n, a, i, s, o));
  }
  return u;
}
function V9(e, r) {
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
    const v = h.map((b) => typeof b == "boolean" || !(me in b) ? [b] : so(e, b, t, i, s, o));
    return ao(v).flatMap((b) => k9(e, r, t, n, b, i, s, o, u));
  });
}
function k9(e, r, t, n, a, i, s, o, u) {
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
const W9 = {
  type: "object",
  $id: Xo,
  properties: {
    __not_really_there__: {
      type: "number"
    }
  }
};
function Yt(e, r, t, n) {
  let a = 0;
  return t && (zr(t.properties) ? a += Pm(t.properties, (i, s, o) => {
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
      return zr(u) && (i += 1), i + Yt(e, r, s, u);
    if (s.type === yr(u)) {
      let c = i + 1;
      return s.default ? c += u === s.default ? 1 : -1 : s.const && (c += u === s.const ? 1 : -1), c;
    }
    return i;
  }, 0) : gs(t.type) && t.type === yr(n) && (a += 1)), a;
}
function Bt(e, r, t, n, a = -1, i) {
  const s = n.map((h) => gr(h, r, [])), o = Cs(t, n, i);
  if (ys(o))
    return o;
  const u = s.reduce((h, p, v) => (Es(e, t, [W9, p], r, i) === 1 && h.push(v), h), []);
  if (u.length === 1)
    return u[0];
  u.length || As(s.length, (h) => u.push(h));
  const c = /* @__PURE__ */ new Set(), { bestIndex: f } = u.reduce((h, p) => {
    const { bestScore: v } = h, _ = s[p], b = Yt(e, r, _, t);
    return c.add(b), b > v ? { bestIndex: p, bestScore: b } : h;
  }, { bestIndex: a, bestScore: 0 });
  return c.size === 1 && a >= 0 ? a : f;
}
function H9(e) {
  return Array.isArray(e.items) && e.items.length > 0 && e.items.every((r) => J(r));
}
function Br(e, r, t = !1, n = !1) {
  if (Array.isArray(r)) {
    const a = Array.isArray(e) ? e : [], i = r.map((s, o) => a[o] ? Br(a[o], s, t, n) : s);
    return t && i.length < a.length && i.push(...a.slice(i.length)), i;
  }
  if (J(r)) {
    const a = Object.assign({}, e);
    return Object.keys(r).reduce((i, s) => (i[s] = Br(e ? Z(e, s) : {}, Z(r, s), t, n), i), a);
  }
  return n && r === void 0 ? e : r;
}
function Rn(e, r, t = !1) {
  return Object.keys(r).reduce((n, a) => {
    const i = e ? e[a] : {}, s = r[a];
    if (e && a in e && J(s))
      n[a] = Rn(i, s, t);
    else if (t && Array.isArray(i) && Array.isArray(s)) {
      let o = s;
      t === "preventDuplicates" && (o = s.reduce((u, c) => (i.includes(c) || u.push(c), u), [])), n[a] = i.concat(o);
    } else
      n[a] = s;
    return n;
  }, Object.assign({}, e));
}
function co(e) {
  return Array.isArray(e.enum) && e.enum.length === 1 || Kr in e;
}
function Y9(e, r, t = {}) {
  const n = Or(e, r, t, void 0), a = n.oneOf || n.anyOf;
  return Array.isArray(n.enum) ? !0 : Array.isArray(a) ? a.every((i) => typeof i != "boolean" && co(i)) : !1;
}
function B9(e, r, t) {
  return !r.uniqueItems || !r.items || typeof r.items == "boolean" ? !1 : Y9(e, r.items, t);
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
  return r !== He.Ignore && J(e.additionalItems) ? e.additionalItems : {};
}
function va(e, r, t, n, a, i = [], s = {}, o = !1) {
  const { emptyObjectFields: u = "populateAllDefaults" } = s;
  if (n || o)
    e[r] = t;
  else if (u !== "skipDefaults")
    if (J(t)) {
      const c = a === void 0 ? i.includes(r) : a;
      u === "skipEmptyDefaults" ? vr(t) || (e[r] = t) : (!vr(t) || i.includes(r)) && (c || u !== "populateRequiredDefaults") && (e[r] = t);
    } else // Store computedDefault if it's a defined primitive (e.g., true) and satisfies certain conditions
    // Condition 1: computedDefault is not undefined
    // Condition 2: If emptyObjectFields is 'populateAllDefaults' or 'skipEmptyDefaults) or if the key is a required field
    t !== void 0 && (u === "populateAllDefaults" || u === "skipEmptyDefaults" || i.includes(r)) && (e[r] = t);
}
function Oe(e, r, t = {}) {
  const { parentDefaults: n, rawFormData: a, rootSchema: i = {}, includeUndefinedValues: s = !1, _recurseList: o = [], experimental_defaultFormStateBehavior: u = void 0, experimental_customMergeAllOf: c = void 0, required: f } = t, h = J(a) ? a : {}, p = J(r) ? r : {};
  let v = n, _ = null, b = o;
  if (co(p))
    v = p.const;
  else if (J(v) && J(p.default))
    v = Rn(v, p.default);
  else if (Ho in p)
    v = p.default;
  else if (me in p) {
    const y = p[me];
    o.includes(y) || (b = o.concat(y), _ = hs(y, i));
  } else if (Ca in p) {
    const y = {
      ...h,
      ...ya(e, p, t, v)
    };
    _ = oo(e, p, i, !1, [], y, c)[0];
  } else if (H9(p))
    v = p.items.map((y, $) => Oe(e, y, {
      rootSchema: i,
      includeUndefinedValues: s,
      _recurseList: o,
      experimental_defaultFormStateBehavior: u,
      parentDefaults: Array.isArray(n) ? n[$] : void 0,
      rawFormData: h,
      required: f
    }));
  else if (hr in p) {
    const { oneOf: y, ...$ } = p;
    if (y.length === 0)
      return;
    const O = Yr(p);
    _ = y[Bt(e, i, vr(h) ? void 0 : h, y, 0, O)], _ = Pe($, _);
  } else if (Lr in p) {
    const { anyOf: y, ...$ } = p;
    if (y.length === 0)
      return;
    const O = Yr(p);
    _ = y[Bt(e, i, vr(h) ? void 0 : h, y, 0, O)], _ = Pe($, _);
  }
  if (_)
    return Oe(e, _, {
      rootSchema: i,
      includeUndefinedValues: s,
      _recurseList: b,
      experimental_defaultFormStateBehavior: u,
      parentDefaults: v,
      rawFormData: h,
      required: f
    });
  v === void 0 && (v = p.default);
  const m = ya(e, p, t, v);
  return m ?? v;
}
function X9(e, r, { rawFormData: t, rootSchema: n = {}, includeUndefinedValues: a = !1, _recurseList: i = [], experimental_defaultFormStateBehavior: s = void 0, experimental_customMergeAllOf: o = void 0, required: u } = {}, c) {
  {
    const f = J(t) ? t : {}, h = r, p = (s == null ? void 0 : s.allOf) === "populateDefaults" && Zt in h ? Or(e, h, n, f, o) : h, v = p[Kr], _ = Object.keys(p.properties || {}).reduce((b, m) => {
      var y;
      const $ = Z(p, [ye, m]), O = J(v) && v[m] !== void 0, N = J($) && Kr in $ || O, S = Oe(e, $, {
        rootSchema: n,
        _recurseList: i,
        experimental_defaultFormStateBehavior: s,
        experimental_customMergeAllOf: o,
        includeUndefinedValues: a === !0,
        parentDefaults: Z(c, [m]),
        rawFormData: Z(f, [m]),
        required: (y = p.required) === null || y === void 0 ? void 0 : y.includes(m)
      });
      return va(b, m, S, a, u, p.required, s, N), b;
    }, {});
    if (p.additionalProperties) {
      const b = J(p.additionalProperties) ? p.additionalProperties : {}, m = /* @__PURE__ */ new Set();
      J(c) && Object.keys(c).filter(($) => !p.properties || !p.properties[$]).forEach(($) => m.add($));
      const y = [];
      Object.keys(f).filter(($) => !p.properties || !p.properties[$]).forEach(($) => {
        m.add($), y.push($);
      }), m.forEach(($) => {
        var O;
        const N = Oe(e, b, {
          rootSchema: n,
          _recurseList: i,
          experimental_defaultFormStateBehavior: s,
          includeUndefinedValues: a === !0,
          parentDefaults: Z(c, [$]),
          rawFormData: Z(f, [$]),
          required: (O = p.required) === null || O === void 0 ? void 0 : O.includes($)
        });
        va(_, $, N, a, u, y);
      });
    }
    return _;
  }
}
function J9(e, r, { rawFormData: t, rootSchema: n = {}, _recurseList: a = [], experimental_defaultFormStateBehavior: i = void 0, required: s } = {}, o) {
  var u, c, f, h;
  const p = r, v = ((u = i == null ? void 0 : i.arrayMinItems) === null || u === void 0 ? void 0 : u.populate) === "never", _ = ((c = i == null ? void 0 : i.arrayMinItems) === null || c === void 0 ? void 0 : c.populate) === "requiredOnly", b = (i == null ? void 0 : i.emptyObjectFields) === "skipEmptyDefaults", m = (h = (f = i == null ? void 0 : i.arrayMinItems) === null || f === void 0 ? void 0 : f.computeSkipPopulate) !== null && h !== void 0 ? h : () => !1, y = b ? void 0 : [];
  if (Array.isArray(o) && (o = o.map((L, E) => {
    const I = Rt(p, He.Fallback, E);
    return Oe(e, I, {
      rootSchema: n,
      _recurseList: a,
      experimental_defaultFormStateBehavior: i,
      parentDefaults: L,
      required: s
    });
  })), Array.isArray(t)) {
    const L = Rt(p);
    v ? o = t : o = t.map((E, I) => Oe(e, L, {
      rootSchema: n,
      _recurseList: a,
      experimental_defaultFormStateBehavior: i,
      rawFormData: E,
      parentDefaults: Z(o, [I]),
      required: s
    }));
  }
  if ((J(p) && Kr in p) === !1) {
    if (v)
      return o ?? y;
    if (_ && !s)
      return o || void 0;
  }
  const O = Array.isArray(o) ? o.length : 0;
  if (!p.minItems || B9(e, p, n) || m(e, p, n) || p.minItems <= O)
    return o || y;
  const N = o || [], S = Rt(p, He.Invert), ie = S.default, ae = new Array(p.minItems - O).fill(Oe(e, S, {
    parentDefaults: ie,
    rootSchema: n,
    _recurseList: a,
    experimental_defaultFormStateBehavior: i,
    required: s
  }));
  return N.concat(ae);
}
function ya(e, r, t = {}, n) {
  switch (Ht(r)) {
    case "object":
      return X9(e, r, t, n);
    case "array":
      return J9(e, r, t, n);
  }
}
function Z9(e, r, t, n, a = !1, i, s) {
  if (!J(r))
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
  return J(t) || Array.isArray(t) ? Br(u, t, h, p) : t;
}
var Q9 = Os;
function e5(e, r, t, n) {
  return n = typeof n == "function" ? n : void 0, e == null ? e : Q9(e, r, t, n);
}
var r5 = e5;
const t5 = /* @__PURE__ */ Q(r5);
class n5 {
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
    return !n && r && (n = {}, t5(this.errorSchema, r, n, Object)), n;
  }
  /** Resets all errors in the `ErrorSchemaBuilder` back to the `initialSchema` if provided, otherwise an empty set.
   *
   * @param [initialSchema] - The optional set of initial errors, that will be cloned into the class
   * @returns - The `ErrorSchemaBuilder` object for chaining purposes
   */
  resetAllErrors(r) {
    return this.errorSchema = r ? c4(r) : {}, this;
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
    return Vt(n, _e, a), this;
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
    return Vt(t, _e, []), this;
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
var ga;
function i5() {
  if (ga) return G;
  ga = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), o = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), _;
  _ = Symbol.for("react.module.reference");
  function b(m) {
    if (typeof m == "object" && m !== null) {
      var y = m.$$typeof;
      switch (y) {
        case e:
          switch (m = m.type, m) {
            case t:
            case a:
            case n:
            case c:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case o:
                case s:
                case u:
                case p:
                case h:
                case i:
                  return m;
                default:
                  return y;
              }
          }
        case r:
          return y;
      }
    }
  }
  return G.ContextConsumer = s, G.ContextProvider = i, G.Element = e, G.ForwardRef = u, G.Fragment = t, G.Lazy = p, G.Memo = h, G.Portal = r, G.Profiler = a, G.StrictMode = n, G.Suspense = c, G.SuspenseList = f, G.isAsyncMode = function() {
    return !1;
  }, G.isConcurrentMode = function() {
    return !1;
  }, G.isContextConsumer = function(m) {
    return b(m) === s;
  }, G.isContextProvider = function(m) {
    return b(m) === i;
  }, G.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, G.isForwardRef = function(m) {
    return b(m) === u;
  }, G.isFragment = function(m) {
    return b(m) === t;
  }, G.isLazy = function(m) {
    return b(m) === p;
  }, G.isMemo = function(m) {
    return b(m) === h;
  }, G.isPortal = function(m) {
    return b(m) === r;
  }, G.isProfiler = function(m) {
    return b(m) === a;
  }, G.isStrictMode = function(m) {
    return b(m) === n;
  }, G.isSuspense = function(m) {
    return b(m) === c;
  }, G.isSuspenseList = function(m) {
    return b(m) === f;
  }, G.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === a || m === n || m === c || m === f || m === v || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === h || m.$$typeof === i || m.$$typeof === s || m.$$typeof === u || m.$$typeof === _ || m.getModuleId !== void 0);
  }, G.typeOf = b, G;
}
var k = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ma;
function a5() {
  return ma || (ma = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), o = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), _ = !1, b = !1, m = !1, y = !1, $ = !1, O;
    O = Symbol.for("react.module.reference");
    function N(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === t || x === a || $ || x === n || x === c || x === f || y || x === v || _ || b || m || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === h || x.$$typeof === i || x.$$typeof === s || x.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === O || x.getModuleId !== void 0));
    }
    function S(x) {
      if (typeof x == "object" && x !== null) {
        var Ee = x.$$typeof;
        switch (Ee) {
          case e:
            var ve = x.type;
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
    var ie = s, ae = i, L = e, E = u, I = t, F = p, z = h, W = r, ee = a, oe = n, Ne = c, Ke = f, Ie = !1, xe = !1;
    function ze(x) {
      return Ie || (Ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Se(x) {
      return xe || (xe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ae(x) {
      return S(x) === s;
    }
    function T(x) {
      return S(x) === i;
    }
    function l(x) {
      return typeof x == "object" && x !== null && x.$$typeof === e;
    }
    function g(x) {
      return S(x) === u;
    }
    function A(x) {
      return S(x) === t;
    }
    function R(x) {
      return S(x) === p;
    }
    function M(x) {
      return S(x) === h;
    }
    function B(x) {
      return S(x) === r;
    }
    function Ce(x) {
      return S(x) === a;
    }
    function yt(x) {
      return S(x) === n;
    }
    function Pr(x) {
      return S(x) === c;
    }
    function gt(x) {
      return S(x) === f;
    }
    k.ContextConsumer = ie, k.ContextProvider = ae, k.Element = L, k.ForwardRef = E, k.Fragment = I, k.Lazy = F, k.Memo = z, k.Portal = W, k.Profiler = ee, k.StrictMode = oe, k.Suspense = Ne, k.SuspenseList = Ke, k.isAsyncMode = ze, k.isConcurrentMode = Se, k.isContextConsumer = Ae, k.isContextProvider = T, k.isElement = l, k.isForwardRef = g, k.isFragment = A, k.isLazy = R, k.isMemo = M, k.isPortal = B, k.isProfiler = Ce, k.isStrictMode = yt, k.isSuspense = Pr, k.isSuspenseList = gt, k.isValidElementType = N, k.typeOf = S;
  }()), k;
}
process.env.NODE_ENV === "production" ? i5() : a5();
function s5(e) {
  let r = 0;
  for (let t = 0; t < e.length; t += 1) {
    const n = e.charCodeAt(t);
    r = (r << 5) - r + n, r = r & r;
  }
  return r.toString(16);
}
function o5(e) {
  const r = /* @__PURE__ */ new Set();
  return JSON.stringify(e, (t, n) => (r.add(t), n)), s5(JSON.stringify(e, Array.from(r).sort()));
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
var u5 = we, c5 = lt, f5 = ne, l5 = nr, d5 = Ga, p5 = Le, h5 = Wa;
function v5(e) {
  return f5(e) ? u5(e, p5) : l5(e) ? [e] : c5(d5(h5(e)));
}
var y5 = v5;
const g5 = /* @__PURE__ */ Q(y5);
function m5(e) {
  const r = new n5();
  return e.length && e.forEach((t) => {
    const { property: n, message: a } = t, i = n === "." ? [] : g5(n);
    i.length > 0 && i[0] === "" && i.splice(0, 1), a && r.addErrors(a, i);
  }), r.ErrorSchema;
}
function fo(e) {
  return Object.keys(e).reduce((r, t) => {
    if (t === "addError")
      return r;
    {
      const n = e[t];
      return Qt(n) ? {
        ...r,
        [t]: fo(n)
      } : { ...r, [t]: n };
    }
  }, {});
}
function $5(e, r) {
  if (!r)
    return e;
  const { errors: t, errorSchema: n } = e;
  let a = Mn(r), i = r;
  return vr(n) || (i = Rn(n, r, !0), a = [...t].concat(a)), { errorSchema: i, errors: a };
}
function _5(e) {
  for (const r in e) {
    const t = e, n = t[r];
    r === me && typeof n == "string" && n.startsWith("#") ? t[r] = Ea + n : t[r] = Fn(n);
  }
  return e;
}
function b5(e) {
  for (let r = 0; r < e.length; r++)
    e[r] = Fn(e[r]);
  return e;
}
function Fn(e) {
  return Array.isArray(e) ? b5([...e]) : zr(e) ? _5({ ...e }) : e;
}
var $a;
(function(e) {
  e.ArrayItemTitle = "Item", e.MissingItems = "Missing items definition", e.YesLabel = "Yes", e.NoLabel = "No", e.CloseLabel = "Close", e.ErrorsLabel = "Errors", e.NewStringDefault = "New Value", e.AddButton = "Add", e.AddItemButton = "Add Item", e.CopyButton = "Copy", e.MoveDownButton = "Move down", e.MoveUpButton = "Move up", e.RemoveButton = "Remove", e.NowLabel = "Now", e.ClearLabel = "Clear", e.AriaDateLabel = "Select a date", e.PreviewLabel = "Preview", e.DecrementAriaLabel = "Decrease value by 1", e.IncrementAriaLabel = "Increase value by 1", e.UnknownFieldType = "Unknown field type %1", e.OptionPrefix = "Option %1", e.TitleOptionPrefix = "%1 option %2", e.KeyLabel = "%1 Key", e.InvalidObjectField = 'Invalid "%1" object field configuration: _%2_.', e.UnsupportedField = "Unsupported field schema.", e.UnsupportedFieldWithId = "Unsupported field schema for field `%1`.", e.UnsupportedFieldWithReason = "Unsupported field schema: _%1_.", e.UnsupportedFieldWithIdAndReason = "Unsupported field schema for field `%1`: _%2_.", e.FilesInfo = "**%1** (%2, %3 bytes)";
})($a || ($a = {}));
var Xt = { exports: {} }, lo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
  function r(E, I) {
    return { validate: E, compare: I };
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
    byte: y,
    // signed 32 bit integer
    int32: { type: "number", validate: N },
    // signed 64 bit integer
    int64: { type: "number", validate: S },
    // C-type float
    float: { type: "number", validate: ie },
    // C-type double
    double: { type: "number", validate: ie },
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
  function t(E) {
    return E % 4 === 0 && (E % 100 !== 0 || E % 400 === 0);
  }
  const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function i(E) {
    const I = n.exec(E);
    if (!I)
      return !1;
    const F = +I[1], z = +I[2], W = +I[3];
    return z >= 1 && z <= 12 && W >= 1 && W <= (z === 2 && t(F) ? 29 : a[z]);
  }
  function s(E, I) {
    if (E && I)
      return E > I ? 1 : E < I ? -1 : 0;
  }
  const o = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
  function u(E, I) {
    const F = o.exec(E);
    if (!F)
      return !1;
    const z = +F[1], W = +F[2], ee = +F[3], oe = F[5];
    return (z <= 23 && W <= 59 && ee <= 59 || z === 23 && W === 59 && ee === 60) && (!I || oe !== "");
  }
  function c(E, I) {
    if (!(E && I))
      return;
    const F = o.exec(E), z = o.exec(I);
    if (F && z)
      return E = F[1] + F[2] + F[3] + (F[4] || ""), I = z[1] + z[2] + z[3] + (z[4] || ""), E > I ? 1 : E < I ? -1 : 0;
  }
  const f = /t|\s/i;
  function h(E) {
    const I = E.split(f);
    return I.length === 2 && i(I[0]) && u(I[1], !0);
  }
  function p(E, I) {
    if (!(E && I))
      return;
    const [F, z] = E.split(f), [W, ee] = I.split(f), oe = s(F, W);
    if (oe !== void 0)
      return oe || c(z, ee);
  }
  const v = /\/|:/, _ = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function b(E) {
    return v.test(E) && _.test(E);
  }
  const m = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function y(E) {
    return m.lastIndex = 0, m.test(E);
  }
  const $ = -(2 ** 31), O = 2 ** 31 - 1;
  function N(E) {
    return Number.isInteger(E) && E <= O && E >= $;
  }
  function S(E) {
    return Number.isInteger(E);
  }
  function ie() {
    return !0;
  }
  const ae = /[^\\]\\Z/;
  function L(E) {
    if (ae.test(E))
      return !1;
    try {
      return new RegExp(E), !0;
    } catch {
      return !1;
    }
  }
})(lo);
var po = {}, Dn = {}, Xr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class r {
  }
  e._CodeOrName = r, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class t extends r {
    constructor($) {
      if (super(), !e.IDENTIFIER.test($))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = $;
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
    constructor($) {
      super(), this._items = typeof $ == "string" ? [$] : $;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const $ = this._items[0];
      return $ === "" || $ === '""';
    }
    get str() {
      var $;
      return ($ = this._str) !== null && $ !== void 0 ? $ : this._str = this._items.reduce((O, N) => `${O}${N}`, "");
    }
    get names() {
      var $;
      return ($ = this._names) !== null && $ !== void 0 ? $ : this._names = this._items.reduce((O, N) => (N instanceof t && (O[N.str] = (O[N.str] || 0) + 1), O), {});
    }
  }
  e._Code = n, e.nil = new n("");
  function a(y, ...$) {
    const O = [y[0]];
    let N = 0;
    for (; N < $.length; )
      o(O, $[N]), O.push(y[++N]);
    return new n(O);
  }
  e._ = a;
  const i = new n("+");
  function s(y, ...$) {
    const O = [v(y[0])];
    let N = 0;
    for (; N < $.length; )
      O.push(i), o(O, $[N]), O.push(i, v(y[++N]));
    return u(O), new n(O);
  }
  e.str = s;
  function o(y, $) {
    $ instanceof n ? y.push(...$._items) : $ instanceof t ? y.push($) : y.push(h($));
  }
  e.addCodeArg = o;
  function u(y) {
    let $ = 1;
    for (; $ < y.length - 1; ) {
      if (y[$] === i) {
        const O = c(y[$ - 1], y[$ + 1]);
        if (O !== void 0) {
          y.splice($ - 1, 3, O);
          continue;
        }
        y[$++] = "+";
      }
      $++;
    }
  }
  function c(y, $) {
    if ($ === '""')
      return y;
    if (y === '""')
      return $;
    if (typeof y == "string")
      return $ instanceof t || y[y.length - 1] !== '"' ? void 0 : typeof $ != "string" ? `${y.slice(0, -1)}${$}"` : $[0] === '"' ? y.slice(0, -1) + $.slice(1) : void 0;
    if (typeof $ == "string" && $[0] === '"' && !(y instanceof t))
      return `"${y}${$.slice(1)}`;
  }
  function f(y, $) {
    return $.emptyStr() ? y : y.emptyStr() ? $ : s`${y}${$}`;
  }
  e.strConcat = f;
  function h(y) {
    return typeof y == "number" || typeof y == "boolean" || y === null ? y : v(Array.isArray(y) ? y.join(",") : y);
  }
  function p(y) {
    return new n(v(y));
  }
  e.stringify = p;
  function v(y) {
    return JSON.stringify(y).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = v;
  function _(y) {
    return typeof y == "string" && e.IDENTIFIER.test(y) ? new n(`.${y}`) : a`[${y}]`;
  }
  e.getProperty = _;
  function b(y) {
    if (typeof y == "string" && e.IDENTIFIER.test(y))
      return new n(`${y}`);
    throw new Error(`CodeGen: invalid export name: ${y}, use explicit $id name mapping`);
  }
  e.getEsmExportName = b;
  function m(y) {
    return new n(y.toString());
  }
  e.regexpCode = m;
})(Xr);
var Jt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const r = Xr;
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
      const p = this.toName(c), { prefix: v } = p, _ = (h = f.key) !== null && h !== void 0 ? h : f.ref;
      let b = this._values[v];
      if (b) {
        const $ = b.get(_);
        if ($)
          return $;
      } else
        b = this._values[v] = /* @__PURE__ */ new Map();
      b.set(_, p);
      const m = this._scope[v] || (this._scope[v] = []), y = m.length;
      return m[y] = f.ref, p.setValue(f, { property: v, itemIndex: y }), p;
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
      for (const _ in c) {
        const b = c[_];
        if (!b)
          continue;
        const m = h[_] = h[_] || /* @__PURE__ */ new Map();
        b.forEach((y) => {
          if (m.has(y))
            return;
          m.set(y, n.Started);
          let $ = f(y);
          if ($) {
            const O = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            v = (0, r._)`${v}${O} ${y} = ${$};${this.opts._n}`;
          } else if ($ = p == null ? void 0 : p(y))
            v = (0, r._)`${v}${$}${this.opts._n}`;
          else
            throw new t(y);
          m.set(y, n.Completed);
        });
      }
      return v;
    }
  }
  e.ValueScope = o;
})(Jt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const r = Xr, t = Jt;
  var n = Xr;
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
  var a = Jt;
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
    optimizeNames(l, g) {
      return this;
    }
  }
  class s extends i {
    constructor(l, g, A) {
      super(), this.varKind = l, this.name = g, this.rhs = A;
    }
    render({ es5: l, _n: g }) {
      const A = l ? t.varKinds.var : this.varKind, R = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${A} ${this.name}${R};` + g;
    }
    optimizeNames(l, g) {
      if (l[this.name.str])
        return this.rhs && (this.rhs = ee(this.rhs, l, g)), this;
    }
    get names() {
      return this.rhs instanceof r._CodeOrName ? this.rhs.names : {};
    }
  }
  class o extends i {
    constructor(l, g, A) {
      super(), this.lhs = l, this.rhs = g, this.sideEffects = A;
    }
    render({ _n: l }) {
      return `${this.lhs} = ${this.rhs};` + l;
    }
    optimizeNames(l, g) {
      if (!(this.lhs instanceof r.Name && !l[this.lhs.str] && !this.sideEffects))
        return this.rhs = ee(this.rhs, l, g), this;
    }
    get names() {
      const l = this.lhs instanceof r.Name ? {} : { ...this.lhs.names };
      return W(l, this.rhs);
    }
  }
  class u extends o {
    constructor(l, g, A, R) {
      super(l, A, R), this.op = g;
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
    optimizeNames(l, g) {
      return this.code = ee(this.code, l, g), this;
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
      return this.nodes.reduce((g, A) => g + A.render(l), "");
    }
    optimizeNodes() {
      const { nodes: l } = this;
      let g = l.length;
      for (; g--; ) {
        const A = l[g].optimizeNodes();
        Array.isArray(A) ? l.splice(g, 1, ...A) : A ? l[g] = A : l.splice(g, 1);
      }
      return l.length > 0 ? this : void 0;
    }
    optimizeNames(l, g) {
      const { nodes: A } = this;
      let R = A.length;
      for (; R--; ) {
        const M = A[R];
        M.optimizeNames(l, g) || (oe(l, M.names), A.splice(R, 1));
      }
      return A.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((l, g) => z(l, g.names), {});
    }
  }
  class _ extends v {
    render(l) {
      return "{" + l._n + super.render(l) + "}" + l._n;
    }
  }
  class b extends v {
  }
  class m extends _ {
  }
  m.kind = "else";
  class y extends _ {
    constructor(l, g) {
      super(g), this.condition = l;
    }
    render(l) {
      let g = `if(${this.condition})` + super.render(l);
      return this.else && (g += "else " + this.else.render(l)), g;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const l = this.condition;
      if (l === !0)
        return this.nodes;
      let g = this.else;
      if (g) {
        const A = g.optimizeNodes();
        g = this.else = Array.isArray(A) ? new m(A) : A;
      }
      if (g)
        return l === !1 ? g instanceof y ? g : g.nodes : this.nodes.length ? this : new y(Ne(l), g instanceof y ? [g] : g.nodes);
      if (!(l === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(l, g) {
      var A;
      if (this.else = (A = this.else) === null || A === void 0 ? void 0 : A.optimizeNames(l, g), !!(super.optimizeNames(l, g) || this.else))
        return this.condition = ee(this.condition, l, g), this;
    }
    get names() {
      const l = super.names;
      return W(l, this.condition), this.else && z(l, this.else.names), l;
    }
  }
  y.kind = "if";
  class $ extends _ {
  }
  $.kind = "for";
  class O extends $ {
    constructor(l) {
      super(), this.iteration = l;
    }
    render(l) {
      return `for(${this.iteration})` + super.render(l);
    }
    optimizeNames(l, g) {
      if (super.optimizeNames(l, g))
        return this.iteration = ee(this.iteration, l, g), this;
    }
    get names() {
      return z(super.names, this.iteration.names);
    }
  }
  class N extends $ {
    constructor(l, g, A, R) {
      super(), this.varKind = l, this.name = g, this.from = A, this.to = R;
    }
    render(l) {
      const g = l.es5 ? t.varKinds.var : this.varKind, { name: A, from: R, to: M } = this;
      return `for(${g} ${A}=${R}; ${A}<${M}; ${A}++)` + super.render(l);
    }
    get names() {
      const l = W(super.names, this.from);
      return W(l, this.to);
    }
  }
  class S extends $ {
    constructor(l, g, A, R) {
      super(), this.loop = l, this.varKind = g, this.name = A, this.iterable = R;
    }
    render(l) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(l);
    }
    optimizeNames(l, g) {
      if (super.optimizeNames(l, g))
        return this.iterable = ee(this.iterable, l, g), this;
    }
    get names() {
      return z(super.names, this.iterable.names);
    }
  }
  class ie extends _ {
    constructor(l, g, A) {
      super(), this.name = l, this.args = g, this.async = A;
    }
    render(l) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(l);
    }
  }
  ie.kind = "func";
  class ae extends v {
    render(l) {
      return "return " + super.render(l);
    }
  }
  ae.kind = "return";
  class L extends _ {
    render(l) {
      let g = "try" + super.render(l);
      return this.catch && (g += this.catch.render(l)), this.finally && (g += this.finally.render(l)), g;
    }
    optimizeNodes() {
      var l, g;
      return super.optimizeNodes(), (l = this.catch) === null || l === void 0 || l.optimizeNodes(), (g = this.finally) === null || g === void 0 || g.optimizeNodes(), this;
    }
    optimizeNames(l, g) {
      var A, R;
      return super.optimizeNames(l, g), (A = this.catch) === null || A === void 0 || A.optimizeNames(l, g), (R = this.finally) === null || R === void 0 || R.optimizeNames(l, g), this;
    }
    get names() {
      const l = super.names;
      return this.catch && z(l, this.catch.names), this.finally && z(l, this.finally.names), l;
    }
  }
  class E extends _ {
    constructor(l) {
      super(), this.error = l;
    }
    render(l) {
      return `catch(${this.error})` + super.render(l);
    }
  }
  E.kind = "catch";
  class I extends _ {
    render(l) {
      return "finally" + super.render(l);
    }
  }
  I.kind = "finally";
  class F {
    constructor(l, g = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...g, _n: g.lines ? `
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
    scopeValue(l, g) {
      const A = this._extScope.value(l, g);
      return (this._values[A.prefix] || (this._values[A.prefix] = /* @__PURE__ */ new Set())).add(A), A;
    }
    getScopeValue(l, g) {
      return this._extScope.getValue(l, g);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(l) {
      return this._extScope.scopeRefs(l, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(l, g, A, R) {
      const M = this._scope.toName(g);
      return A !== void 0 && R && (this._constants[M.str] = A), this._leafNode(new s(l, M, A)), M;
    }
    // `const` declaration (`var` in es5 mode)
    const(l, g, A) {
      return this._def(t.varKinds.const, l, g, A);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(l, g, A) {
      return this._def(t.varKinds.let, l, g, A);
    }
    // `var` declaration with optional assignment
    var(l, g, A) {
      return this._def(t.varKinds.var, l, g, A);
    }
    // assignment code
    assign(l, g, A) {
      return this._leafNode(new o(l, g, A));
    }
    // `+=` code
    add(l, g) {
      return this._leafNode(new u(l, e.operators.ADD, g));
    }
    // appends passed SafeExpr to code or executes Block
    code(l) {
      return typeof l == "function" ? l() : l !== r.nil && this._leafNode(new p(l)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...l) {
      const g = ["{"];
      for (const [A, R] of l)
        g.length > 1 && g.push(","), g.push(A), (A !== R || this.opts.es5) && (g.push(":"), (0, r.addCodeArg)(g, R));
      return g.push("}"), new r._Code(g);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(l, g, A) {
      if (this._blockNode(new y(l)), g && A)
        this.code(g).else().code(A).endIf();
      else if (g)
        this.code(g).endIf();
      else if (A)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(l) {
      return this._elseNode(new y(l));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new m());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(y, m);
    }
    _for(l, g) {
      return this._blockNode(l), g && this.code(g).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(l, g) {
      return this._for(new O(l), g);
    }
    // `for` statement for a range of values
    forRange(l, g, A, R, M = this.opts.es5 ? t.varKinds.var : t.varKinds.let) {
      const B = this._scope.toName(l);
      return this._for(new N(M, B, g, A), () => R(B));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(l, g, A, R = t.varKinds.const) {
      const M = this._scope.toName(l);
      if (this.opts.es5) {
        const B = g instanceof r.Name ? g : this.var("_arr", g);
        return this.forRange("_i", 0, (0, r._)`${B}.length`, (Ce) => {
          this.var(M, (0, r._)`${B}[${Ce}]`), A(M);
        });
      }
      return this._for(new S("of", R, M, g), () => A(M));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(l, g, A, R = this.opts.es5 ? t.varKinds.var : t.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(l, (0, r._)`Object.keys(${g})`, A);
      const M = this._scope.toName(l);
      return this._for(new S("in", R, M, g), () => A(M));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode($);
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
      const g = new ae();
      if (this._blockNode(g), this.code(l), g.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(ae);
    }
    // `try` statement
    try(l, g, A) {
      if (!g && !A)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const R = new L();
      if (this._blockNode(R), this.code(l), g) {
        const M = this.name("e");
        this._currNode = R.catch = new E(M), g(M);
      }
      return A && (this._currNode = R.finally = new I(), this.code(A)), this._endBlockNode(E, I);
    }
    // `throw` statement
    throw(l) {
      return this._leafNode(new h(l));
    }
    // start self-balancing block
    block(l, g) {
      return this._blockStarts.push(this._nodes.length), l && this.code(l).endBlock(g), this;
    }
    // end the current self-balancing block
    endBlock(l) {
      const g = this._blockStarts.pop();
      if (g === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const A = this._nodes.length - g;
      if (A < 0 || l !== void 0 && A !== l)
        throw new Error(`CodeGen: wrong number of nodes: ${A} vs ${l} expected`);
      return this._nodes.length = g, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(l, g = r.nil, A, R) {
      return this._blockNode(new ie(l, g, A)), R && this.code(R).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(ie);
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
    _endBlockNode(l, g) {
      const A = this._currNode;
      if (A instanceof l || g && A instanceof g)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${g ? `${l.kind}/${g.kind}` : l.kind}"`);
    }
    _elseNode(l) {
      const g = this._currNode;
      if (!(g instanceof y))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = g.else = l, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const l = this._nodes;
      return l[l.length - 1];
    }
    set _currNode(l) {
      const g = this._nodes;
      g[g.length - 1] = l;
    }
  }
  e.CodeGen = F;
  function z(T, l) {
    for (const g in l)
      T[g] = (T[g] || 0) + (l[g] || 0);
    return T;
  }
  function W(T, l) {
    return l instanceof r._CodeOrName ? z(T, l.names) : T;
  }
  function ee(T, l, g) {
    if (T instanceof r.Name)
      return A(T);
    if (!R(T))
      return T;
    return new r._Code(T._items.reduce((M, B) => (B instanceof r.Name && (B = A(B)), B instanceof r._Code ? M.push(...B._items) : M.push(B), M), []));
    function A(M) {
      const B = g[M.str];
      return B === void 0 || l[M.str] !== 1 ? M : (delete l[M.str], B);
    }
    function R(M) {
      return M instanceof r._Code && M._items.some((B) => B instanceof r.Name && l[B.str] === 1 && g[B.str] !== void 0);
    }
  }
  function oe(T, l) {
    for (const g in l)
      T[g] = (T[g] || 0) - (l[g] || 0);
  }
  function Ne(T) {
    return typeof T == "boolean" || typeof T == "number" || T === null ? !T : (0, r._)`!${Ae(T)}`;
  }
  e.not = Ne;
  const Ke = Se(e.operators.AND);
  function Ie(...T) {
    return T.reduce(Ke);
  }
  e.and = Ie;
  const xe = Se(e.operators.OR);
  function ze(...T) {
    return T.reduce(xe);
  }
  e.or = ze;
  function Se(T) {
    return (l, g) => l === r.nil ? g : g === r.nil ? l : (0, r._)`${Ae(l)} ${T} ${Ae(g)}`;
  }
  function Ae(T) {
    return T instanceof r.Name ? T : (0, r._)`(${T})`;
  }
})(Dn);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
  const r = wa, t = Dn, n = t.operators, a = {
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
      const { gen: u, data: c, schemaCode: f, keyword: h, it: p } = o, { opts: v, self: _ } = p;
      if (!v.validateFormats)
        return;
      const b = new r.KeywordCxt(p, _.RULES.all.format.definition, "format");
      b.$data ? m() : y();
      function m() {
        const O = u.scopeValue("formats", {
          ref: _.formats,
          code: v.code.formats
        }), N = u.const("fmt", t._`${O}[${b.schemaCode}]`);
        o.fail$data(t.or(t._`typeof ${N} != "object"`, t._`${N} instanceof RegExp`, t._`typeof ${N}.compare != "function"`, $(N)));
      }
      function y() {
        const O = b.schema, N = _.formats[O];
        if (!N || N === !0)
          return;
        if (typeof N != "object" || N instanceof RegExp || typeof N.compare != "function")
          throw new Error(`"${h}": format "${O}" does not define "compare" function`);
        const S = u.scopeValue("formats", {
          key: O,
          ref: N,
          code: v.code.formats ? t._`${v.code.formats}${t.getProperty(O)}` : void 0
        });
        o.fail$data($(S));
      }
      function $(O) {
        return t._`${O}.compare(${c}, ${f}) ${a[h].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  const s = (o) => (o.addKeyword(e.formatLimitDefinition), o);
  e.default = s;
})(po);
(function(e, r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const t = lo, n = po, a = Dn, i = new a.Name("fullFormats"), s = new a.Name("fastFormats"), o = (c, f = { keywords: !0 }) => {
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
    var v, _;
    (v = (_ = c.opts.code).formats) !== null && v !== void 0 || (_.formats = a._`require("ajv-formats/dist/formats").${p}`);
    for (const b of f)
      c.addFormat(b, h[b]);
  }
  e.exports = r = o, Object.defineProperty(r, "__esModule", { value: !0 }), r.default = o;
})(Xt, Xt.exports);
var w5 = Xt.exports;
const _a = /* @__PURE__ */ Q(w5), A5 = {
  allErrors: !0,
  multipleOfPrecision: 8,
  strict: !1,
  verbose: !0,
  discriminator: !1
  // TODO enable this in V6
}, C5 = /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/, E5 = /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/;
function O5(e, r, t = {}, n, a = wa) {
  const i = new a({ ...A5, ...t });
  return n ? _a(i, n) : n !== !1 && _a(i), i.addFormat("data-url", E5), i.addFormat("color", C5), i.addKeyword(Aa), i.addKeyword(Zo), Array.isArray(e) && i.addMetaSchema(e), zr(r) && Object.keys(r).forEach((s) => {
    i.addFormat(s, r[s]);
  }), i;
}
function P5(e = [], r) {
  return e.map((t) => {
    const { instancePath: n, keyword: a, params: i, schemaPath: s, parentSchema: o, ...u } = t;
    let { message: c = "" } = u, f = n.replace(/\//g, "."), h = `${f} ${c}`.trim();
    if ("missingProperty" in i) {
      f = f ? `${f}.${i.missingProperty}` : i.missingProperty;
      const p = i.missingProperty, v = Qn(Z(r, `${f.replace(/^\./, "")}`)).title;
      if (v)
        c = c.replace(p, v);
      else {
        const _ = Z(o, [ye, p, "title"]);
        _ && (c = c.replace(p, _));
      }
      h = c;
    } else {
      const p = Qn(Z(r, `${f.replace(/^\./, "")}`)).title;
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
function T5(e, r, t, n, a, i, s) {
  const { validationError: o } = r;
  let u = P5(r.errors, s);
  o && (u = [...u, { stack: o.message }]), typeof i == "function" && (u = i(u, s));
  let c = m5(u);
  if (o && (c = {
    ...c,
    $schema: {
      __errors: [o.message]
    }
  }), typeof a != "function")
    return { errors: u, errorSchema: c };
  const f = Z9(e, n, t, n, !0), h = a(f, Dt(f), s), p = fo(h);
  return $5({ errors: u, errorSchema: c }, p);
}
class N5 {
  /** Constructs an `AJV8Validator` instance using the `options`
   *
   * @param options - The `CustomValidatorOptionsType` options that are used to create the AJV instance
   * @param [localizer] - If provided, is used to localize a list of Ajv `ErrorObject`s
   */
  constructor(r, t) {
    const { additionalMetaSchemas: n, customFormats: a, ajvOptionsOverrides: i, ajvFormatOptions: s, AjvClass: o } = r;
    this.ajv = O5(n, a, i, s, o), this.localizer = t;
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
    return T5(this, s, r, t, n, a, i);
  }
  /**
   * This function checks if a schema needs to be added and if the root schemas don't match it removes the old root schema from the ajv instance and adds the new one.
   * @param rootSchema - The root schema used to provide $ref resolutions
   */
  handleSchemaUpdate(r) {
    var t, n;
    const a = (t = r[Ir]) !== null && t !== void 0 ? t : Ea;
    this.ajv.getSchema(a) === void 0 ? this.ajv.addSchema(r, a) : g2(r, (n = this.ajv.getSchema(a)) === null || n === void 0 ? void 0 : n.schema) || (this.ajv.removeSchema(a), this.ajv.addSchema(r, a));
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
      const i = Fn(r), s = (a = i[Ir]) !== null && a !== void 0 ? a : o5(i);
      let o;
      return o = this.ajv.getSchema(s), o === void 0 && (o = this.ajv.addSchema(i, s).getSchema(s) || this.ajv.compile(i)), o(t);
    } catch (i) {
      return console.warn("Error encountered compiling schema:", i), !1;
    }
  }
}
function I5(e = {}, r) {
  return new N5(e, r);
}
const Mt = I5(), x5 = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  schema: a,
  uiSchema: i,
  formContext: s
}) => {
  var v, _;
  const o = a.oneOf ? a.oneOf.map((b) => ({
    value: b.const,
    label: b.title || b.const
  })) : [
    { value: !0, label: "True" },
    { value: !1, label: "False" }
  ], u = (i == null ? void 0 : i["ui:title"]) || a.title, c = i == null ? void 0 : i["ui:questionNumber"], f = (v = s == null ? void 0 : s.errors) == null ? void 0 : v[e], h = (_ = f == null ? void 0 : f.__errors) == null ? void 0 : _[0], p = !!h;
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      D.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${p ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          c,
          ". ",
          u,
          " ",
          t && /* @__PURE__ */ C.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ C.jsx(
      D.div,
      {
        className: "space-y-2",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: o.map((b) => /* @__PURE__ */ C.jsxs("label", { className: "flex items-center", children: [
          /* @__PURE__ */ C.jsx(
            "input",
            {
              type: "radio",
              id: `${e}-${b.value}`,
              name: e,
              value: b.value.toString(),
              checked: r === b.value,
              onChange: () => n(b.value),
              className: "form-radio h-4 w-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ C.jsx("span", { className: "ml-2 text-lg", children: b.label })
        ] }, b.value.toString()))
      }
    ),
    p && /* @__PURE__ */ C.jsx(
      D.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: h
      }
    )
  ] });
}, K5 = ({
  schema: e,
  handleSubmit: r,
  handleTimeSpent: t
}) => {
  const [n, a] = le(-1), [i, s] = le({}), o = Object.keys(e.properties || {}), u = o[n], c = o.length + 1, [f, h] = le(void 0), [p, v] = le(!0), [_, b] = le(Date.now()), [m, y] = le(
    {}
  );
  Ct(() => {
    n >= 0 && n < o.length ? v(O()) : v(!0);
  }, [n, i]), Ct(() => {
    n >= 0 && n < o.length && b(Date.now());
  }, [n]);
  const $ = () => {
    if (n === -1) {
      a(0);
      return;
    }
    if (!O()) {
      v(!1);
      return;
    }
    if (n >= 0 && n < o.length) {
      const E = Math.round((Date.now() - _) / 1e3);
      y((I) => ({
        ...I,
        [u]: (I[u] || 0) + E
      }));
    }
    if (n === c - 2) {
      const E = Math.round((Date.now() - _) / 1e3), I = {
        ...m,
        [u]: (m[u] || 0) + E
      };
      r(i), t == null || t(I);
    }
    n < c - 1 && (a(n + 1), v(!0));
  };
  Ct(() => {
    const L = (I) => {
      if (I.key === "Enter") {
        if (I.preventDefault(), !p) return;
        $();
      }
    }, E = document.querySelector("form");
    return E ? (E.addEventListener("keydown", L), () => E.removeEventListener("keydown", L)) : (window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L));
  }, [n, p, $]);
  const O = () => {
    var F, z, W;
    if (n === -1 || n >= o.length) return !0;
    const L = i[u], E = {
      type: "object",
      properties: {
        [u]: (F = e.properties) == null ? void 0 : F[u]
      },
      required: (z = e.required) != null && z.includes(u) ? [u] : []
    };
    return (W = e.required) != null && W.includes(u) && (L === void 0 || L === "") ? !1 : Mt.validateFormData(
      { [u]: L },
      E
    ).errors.length === 0;
  }, N = () => {
    if (n > -1) {
      if (n < o.length) {
        const L = Math.round((Date.now() - _) / 1e3);
        y((E) => ({
          ...E,
          [u]: (E[u] || 0) + L
        }));
      }
      a(n - 1);
    }
  }, S = (L) => {
    var F;
    if (s({ ...i, ...L.formData }), n === -1) return;
    const E = {
      type: "object",
      properties: {
        [u]: e.properties[u]
      },
      required: (F = e.required) != null && F.includes(u) ? [u] : []
    }, I = Mt.validateFormData(
      { [u]: L.formData[u] },
      E
    );
    v(I.errors.length === 0), h(I.errorSchema);
  }, ie = (L) => {
    var I;
    const E = (I = e.properties) == null ? void 0 : I[L];
    if (console.log("Field:", L, "Schema:", E), !E) return "text";
    switch (E.type) {
      case "string":
        return E.format === "email" ? "email" : E.format === "binary" ? "file" : E.enum && Array.isArray(E.enum) ? "select" : E.format === "multiline" ? "textarea" : "text";
      case "integer":
      case "number":
        return "number";
      case "boolean":
        return E.oneOf ? "radio" : "checkbox";
      case "array":
        return E.items && typeof E.items == "object" && "enum" in E.items ? (console.log("Detected checkbox schema for field:", L), "checkbox") : "multi-select";
      default:
        return "text";
    }
  }, ae = () => {
    var L, E;
    if (n === -1)
      return /* @__PURE__ */ C.jsx(j5, { onStart: $, schema: e });
    if (n === o.length)
      return /* @__PURE__ */ C.jsx(R5, {});
    {
      const I = ie(u), F = (L = e.properties) == null ? void 0 : L[u];
      let z = [];
      return F.type === "string" && F.enum ? z = F.enum : F.type === "array" && F.items && typeof F.items != "boolean" && "enum" in F.items && (z = F.items.enum), /* @__PURE__ */ C.jsx(
        Fo,
        {
          schema: {
            type: "object",
            properties: {
              [u]: {
                ...F,
                title: void 0,
                // Remove RJSF's default title
                description: void 0
                // Remove RJSF's default description
              }
            },
            required: (E = e.required) != null && E.includes(u) ? [u] : []
          },
          formData: i,
          validator: Mt,
          showErrorList: !1,
          uiSchema: {
            [u]: {
              "ui:widget": I,
              "ui:title": F.title,
              "ui:description": F.description,
              "ui:options": {
                label: !1,
                // Disable RJSF's label rendering
                description: !1
                // Disable RJSF's description rendering
              },
              "ui:enumOptions": z,
              // Pass enum options to the widget
              "ui:questionNumber": n + 1
            }
          },
          widgets: {
            text: Zn,
            textarea: Zn,
            number: zo,
            email: qo,
            select: Uo,
            checkbox: Vo,
            radio: x5,
            file: Go
          },
          formContext: { errors: f },
          onChange: S,
          children: /* @__PURE__ */ C.jsx("div", {})
        }
      );
    }
  };
  return /* @__PURE__ */ C.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-transparent", children: /* @__PURE__ */ C.jsxs("div", { className: "p-8 shadow-xl flex flex-col bg-white max-w-[384px] md:max-w-[768px]", children: [
    /* @__PURE__ */ C.jsx(Do, { mode: "wait", children: /* @__PURE__ */ C.jsx(
      D.div,
      {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
        transition: { duration: 0.3 },
        className: "flex-grow flex flex-col justify-center overflow-auto",
        children: ae()
      },
      n
    ) }),
    /* @__PURE__ */ C.jsx(
      S5,
      {
        currentStep: n,
        totalSteps: c,
        onBack: N,
        onNext: $,
        isNextDisabled: n >= 0 && !p
      }
    )
  ] }) });
}, S5 = ({ currentStep: e, totalSteps: r, onBack: t, onNext: n, isNextDisabled: a }) => /* @__PURE__ */ C.jsxs(
  "div",
  {
    className: `flex ${e === -1 ? "justify-center items-center" : "justify-between"}`,
    children: [
      e > -1 && e < r - 1 && /* @__PURE__ */ C.jsx(
        D.button,
        {
          onClick: t,
          className: "w-[135px] px-5 py-2 bg-[#333e48] rounded-[40px] justify-center items-center inline-flex",
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          children: /* @__PURE__ */ C.jsx("span", { className: "text-black text-sm font-semibold uppercase leading-[21px] tracking-widest", children: "← Back" })
        }
      ),
      e < r - 1 && /* @__PURE__ */ C.jsxs("div", { className: "flex gap-4 my-6", children: [
        /* @__PURE__ */ C.jsx(
          D.button,
          {
            onClick: n,
            disabled: a,
            className: `w-48 px-5 py-2 justify-center items-center inline-flex text-black text-sm font-semibold uppercase leading-[21px] tracking-widest ${a ? "bg-gray-300 cursor-not-allowed" : "bg-[#333e48] hover:scale-105 active:scale-95"} bg-black text-white py-1 px-4`,
            whileHover: a ? void 0 : { scale: 1.05 },
            whileTap: a ? void 0 : { scale: 0.95 },
            children: e === -1 ? "Get Started" : "Next →"
          }
        ),
        e === -1 && // <div className="absolute top-3 -right-24">
        /* @__PURE__ */ C.jsx(
          "img",
          {
            src: ko,
            alt: "Press Enter",
            className: "w-[80.08px] h-[13.12px]"
          }
        )
      ] })
    ]
  }
), j5 = ({ onStart: e, schema: r }) => /* @__PURE__ */ C.jsxs(
  D.div,
  {
    className: "flex flex-col justify-center items-center h-full gap-2 mb-4",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    children: [
      /* @__PURE__ */ C.jsx(
        D.h1,
        {
          className: "text-center text-black text-lg font-semibold",
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.2 },
          children: r.title || "Welcome"
        }
      ),
      /* @__PURE__ */ C.jsx(
        D.p,
        {
          className: "text-center text-black text-sm font-normal mt-2",
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.4 },
          children: r.description || "Please fill out the following form."
        }
      )
    ]
  }
), R5 = () => /* @__PURE__ */ C.jsx(
  D.div,
  {
    className: "flex-col justify-center items-center gap-6 inline-flex h-full w-full",
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    children: /* @__PURE__ */ C.jsx("div", { className: "relative bg-white/70 rounded-[10px] overflow-hidden p-8 h-full w-full flex items-center justify-center", children: /* @__PURE__ */ C.jsxs(
      D.div,
      {
        className: "flex flex-col justify-center items-center",
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { delay: 0.3, duration: 0.5 },
        children: [
          /* @__PURE__ */ C.jsx(
            D.h1,
            {
              className: "text-4xl font-bold text-[#333133] mb-4",
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.5, duration: 0.5 },
              children: "Thank You!"
            }
          ),
          /* @__PURE__ */ C.jsx(
            D.p,
            {
              className: "text-xl text-[#333133]",
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.7, duration: 0.5 },
              children: "Your submission has been received."
            }
          ),
          /* @__PURE__ */ C.jsx(
            D.div,
            {
              className: "mt-8",
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { delay: 0.9, duration: 0.5 },
              children: /* @__PURE__ */ C.jsx(
                "svg",
                {
                  className: "w-16 h-16 text-green-500",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ C.jsx(
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
  K5 as FormRenderer
};
