import _a, { useState as fe, useEffect as Ct } from "react";
import Mo from "@rjsf/core";
import { motion as M, AnimatePresence as Fo } from "framer-motion";
import ba from "ajv";
var Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Q(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} }, ur = {};
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
function Do() {
  if (Xn) return ur;
  Xn = 1;
  var e = _a, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, c, u) {
    var f, h = {}, d = null, v = null;
    u !== void 0 && (d = "" + u), c.key !== void 0 && (d = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (f in c) n.call(c, f) && !i.hasOwnProperty(f) && (h[f] = c[f]);
    if (o && o.defaultProps) for (f in c = o.defaultProps, c) h[f] === void 0 && (h[f] = c[f]);
    return { $$typeof: r, type: o, key: d, ref: v, props: h, _owner: a.current };
  }
  return ur.Fragment = t, ur.jsx = s, ur.jsxs = s, ur;
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
function Lo() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = _a, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, b = "@@iterator";
    function _(p) {
      if (p === null || typeof p != "object")
        return null;
      var w = g && p[g] || p[b];
      return typeof w == "function" ? w : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(p) {
      {
        for (var w = arguments.length, O = new Array(w > 1 ? w - 1 : 0), j = 1; j < w; j++)
          O[j - 1] = arguments[j];
        P("error", p, O);
      }
    }
    function P(p, w, O) {
      {
        var j = m.ReactDebugCurrentFrame, G = j.getStackAddendum();
        G !== "" && (w += "%s", O = O.concat([G]));
        var H = O.map(function(K) {
          return String(K);
        });
        H.unshift("Warning: " + w), Function.prototype.apply.call(console[p], console, H);
      }
    }
    var I = !1, F = !1, ne = !1, ae = !1, U = !1, E;
    E = Symbol.for("react.module.reference");
    function S(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === n || p === i || U || p === a || p === u || p === f || ae || p === v || I || F || ne || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === h || p.$$typeof === s || p.$$typeof === o || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === E || p.getModuleId !== void 0));
    }
    function D(p, w, O) {
      var j = p.displayName;
      if (j)
        return j;
      var G = w.displayName || w.name || "";
      return G !== "" ? O + "(" + G + ")" : O;
    }
    function z(p) {
      return p.displayName || "Context";
    }
    function W(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case o:
            var w = p;
            return z(w) + ".Consumer";
          case s:
            var O = p;
            return z(O._context) + ".Provider";
          case c:
            return D(p, p.render, "ForwardRef");
          case h:
            var j = p.displayName || null;
            return j !== null ? j : W(p.type) || "Memo";
          case d: {
            var G = p, H = G._payload, K = G._init;
            try {
              return W(K(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, oe = 0, Se, ze, Ie, Ne, Ke, je, Ae;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function l() {
      {
        if (oe === 0) {
          Se = console.log, ze = console.info, Ie = console.warn, Ne = console.error, Ke = console.group, je = console.groupCollapsed, Ae = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: T,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        oe++;
      }
    }
    function y() {
      {
        if (oe--, oe === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, p, {
              value: Se
            }),
            info: ee({}, p, {
              value: ze
            }),
            warn: ee({}, p, {
              value: Ie
            }),
            error: ee({}, p, {
              value: Ne
            }),
            group: ee({}, p, {
              value: Ke
            }),
            groupCollapsed: ee({}, p, {
              value: je
            }),
            groupEnd: ee({}, p, {
              value: Ae
            })
          });
        }
        oe < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = m.ReactCurrentDispatcher, x;
    function R(p, w, O) {
      {
        if (x === void 0)
          try {
            throw Error();
          } catch (G) {
            var j = G.stack.trim().match(/\n( *(at )?)/);
            x = j && j[1] || "";
          }
        return `
` + x + p;
      }
    }
    var B = !1, Ce;
    {
      var yt = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new yt();
    }
    function Pr(p, w) {
      if (!p || B)
        return "";
      {
        var O = Ce.get(p);
        if (O !== void 0)
          return O;
      }
      var j;
      B = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = A.current, A.current = null, l();
      try {
        if (w) {
          var K = function() {
            throw Error();
          };
          if (Object.defineProperty(K.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(K, []);
            } catch (ce) {
              j = ce;
            }
            Reflect.construct(p, [], K);
          } else {
            try {
              K.call();
            } catch (ce) {
              j = ce;
            }
            p.call(K.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            j = ce;
          }
          p();
        }
      } catch (ce) {
        if (ce && j && typeof ce.stack == "string") {
          for (var L = ce.stack.split(`
`), se = j.stack.split(`
`), re = L.length - 1, te = se.length - 1; re >= 1 && te >= 0 && L[re] !== se[te]; )
            te--;
          for (; re >= 1 && te >= 0; re--, te--)
            if (L[re] !== se[te]) {
              if (re !== 1 || te !== 1)
                do
                  if (re--, te--, te < 0 || L[re] !== se[te]) {
                    var le = `
` + L[re].replace(" at new ", " at ");
                    return p.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", p.displayName)), typeof p == "function" && Ce.set(p, le), le;
                  }
                while (re >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        B = !1, A.current = H, y(), Error.prepareStackTrace = G;
      }
      var Ve = p ? p.displayName || p.name : "", xe = Ve ? R(Ve) : "";
      return typeof p == "function" && Ce.set(p, xe), xe;
    }
    function gt(p, w, O) {
      return Pr(p, !1);
    }
    function N(p) {
      var w = p.prototype;
      return !!(w && w.isReactComponent);
    }
    function Ee(p, w, O) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return Pr(p, N(p));
      if (typeof p == "string")
        return R(p);
      switch (p) {
        case u:
          return R("Suspense");
        case f:
          return R("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return gt(p.render);
          case h:
            return Ee(p.type, w, O);
          case d: {
            var j = p, G = j._payload, H = j._init;
            try {
              return Ee(H(G), w, O);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, or = {}, Ln = m.ReactDebugCurrentFrame;
    function Tr(p) {
      if (p) {
        var w = p._owner, O = Ee(p.type, p._source, w ? w.type : null);
        Ln.setExtraStackFrame(O);
      } else
        Ln.setExtraStackFrame(null);
    }
    function po(p, w, O, j, G) {
      {
        var H = Function.call.bind(ve);
        for (var K in p)
          if (H(p, K)) {
            var L = void 0;
            try {
              if (typeof p[K] != "function") {
                var se = Error((j || "React class") + ": " + O + " type `" + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[K] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              L = p[K](w, K, j, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              L = re;
            }
            L && !(L instanceof Error) && (Tr(G), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", O, K, typeof L), Tr(null)), L instanceof Error && !(L.message in or) && (or[L.message] = !0, Tr(G), $("Failed %s type: %s", O, L.message), Tr(null));
          }
      }
    }
    var ho = Array.isArray;
    function mt(p) {
      return ho(p);
    }
    function vo(p) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, O = w && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return O;
      }
    }
    function yo(p) {
      try {
        return zn(p), !1;
      } catch {
        return !0;
      }
    }
    function zn(p) {
      return "" + p;
    }
    function Kn(p) {
      if (yo(p))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vo(p)), zn(p);
    }
    var cr = m.ReactCurrentOwner, go = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Un, Vn, $t;
    $t = {};
    function mo(p) {
      if (ve.call(p, "ref")) {
        var w = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function $o(p) {
      if (ve.call(p, "key")) {
        var w = Object.getOwnPropertyDescriptor(p, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function _o(p, w) {
      if (typeof p.ref == "string" && cr.current && w && cr.current.stateNode !== w) {
        var O = W(cr.current.type);
        $t[O] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(cr.current.type), p.ref), $t[O] = !0);
      }
    }
    function bo(p, w) {
      {
        var O = function() {
          Un || (Un = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        O.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function wo(p, w) {
      {
        var O = function() {
          Vn || (Vn = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        O.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Ao = function(p, w, O, j, G, H, K) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: p,
        key: w,
        ref: O,
        props: K,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function Co(p, w, O, j, G) {
      {
        var H, K = {}, L = null, se = null;
        O !== void 0 && (Kn(O), L = "" + O), $o(w) && (Kn(w.key), L = "" + w.key), mo(w) && (se = w.ref, _o(w, G));
        for (H in w)
          ve.call(w, H) && !go.hasOwnProperty(H) && (K[H] = w[H]);
        if (p && p.defaultProps) {
          var re = p.defaultProps;
          for (H in re)
            K[H] === void 0 && (K[H] = re[H]);
        }
        if (L || se) {
          var te = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          L && bo(K, te), se && wo(K, te);
        }
        return Ao(p, L, se, G, j, cr.current, K);
      }
    }
    var _t = m.ReactCurrentOwner, Gn = m.ReactDebugCurrentFrame;
    function Ue(p) {
      if (p) {
        var w = p._owner, O = Ee(p.type, p._source, w ? w.type : null);
        Gn.setExtraStackFrame(O);
      } else
        Gn.setExtraStackFrame(null);
    }
    var bt;
    bt = !1;
    function wt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }
    function qn() {
      {
        if (_t.current) {
          var p = W(_t.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function Eo(p) {
      return "";
    }
    var kn = {};
    function Oo(p) {
      {
        var w = qn();
        if (!w) {
          var O = typeof p == "string" ? p : p.displayName || p.name;
          O && (w = `

Check the top-level render call using <` + O + ">.");
        }
        return w;
      }
    }
    function Wn(p, w) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var O = Oo(w);
        if (kn[O])
          return;
        kn[O] = !0;
        var j = "";
        p && p._owner && p._owner !== _t.current && (j = " It was passed a child from " + W(p._owner.type) + "."), Ue(p), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, j), Ue(null);
      }
    }
    function Hn(p, w) {
      {
        if (typeof p != "object")
          return;
        if (mt(p))
          for (var O = 0; O < p.length; O++) {
            var j = p[O];
            wt(j) && Wn(j, w);
          }
        else if (wt(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var G = _(p);
          if (typeof G == "function" && G !== p.entries)
            for (var H = G.call(p), K; !(K = H.next()).done; )
              wt(K.value) && Wn(K.value, w);
        }
      }
    }
    function Po(p) {
      {
        var w = p.type;
        if (w == null || typeof w == "string")
          return;
        var O;
        if (typeof w == "function")
          O = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === h))
          O = w.propTypes;
        else
          return;
        if (O) {
          var j = W(w);
          po(O, p.props, "prop", j, p);
        } else if (w.PropTypes !== void 0 && !bt) {
          bt = !0;
          var G = W(w);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function To(p) {
      {
        for (var w = Object.keys(p.props), O = 0; O < w.length; O++) {
          var j = w[O];
          if (j !== "children" && j !== "key") {
            Ue(p), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Ue(null);
            break;
          }
        }
        p.ref !== null && (Ue(p), $("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
      }
    }
    var Yn = {};
    function Bn(p, w, O, j, G, H) {
      {
        var K = S(p);
        if (!K) {
          var L = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Eo();
          se ? L += se : L += qn();
          var re;
          p === null ? re = "null" : mt(p) ? re = "array" : p !== void 0 && p.$$typeof === r ? (re = "<" + (W(p.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : re = typeof p, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, L);
        }
        var te = Co(p, w, O, G, H);
        if (te == null)
          return te;
        if (K) {
          var le = w.children;
          if (le !== void 0)
            if (j)
              if (mt(le)) {
                for (var Ve = 0; Ve < le.length; Ve++)
                  Hn(le[Ve], p);
                Object.freeze && Object.freeze(le);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Hn(le, p);
        }
        if (ve.call(w, "key")) {
          var xe = W(p), ce = Object.keys(w).filter(function(Ro) {
            return Ro !== "key";
          }), At = ce.length > 0 ? "{key: someKey, " + ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Yn[xe + At]) {
            var xo = ce.length > 0 ? "{" + ce.join(": ..., ") + ": ...}" : "{}";
            $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, At, xe, xo, xe), Yn[xe + At] = !0;
          }
        }
        return p === n ? To(te) : Po(te), te;
      }
    }
    function So(p, w, O) {
      return Bn(p, w, O, !0);
    }
    function Io(p, w, O) {
      return Bn(p, w, O, !1);
    }
    var No = Io, jo = So;
    fr.Fragment = n, fr.jsx = No, fr.jsxs = jo;
  }()), fr;
}
process.env.NODE_ENV === "production" ? Ft.exports = Do() : Ft.exports = Lo();
var C = Ft.exports;
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
  var _, m;
  const [c, u] = fe(!1), f = (s == null ? void 0 : s["ui:title"]) || i.title, h = (s == null ? void 0 : s["ui:description"]) || i.description, d = (_ = o == null ? void 0 : o.errors) == null ? void 0 : _[e], v = (m = d == null ? void 0 : d.__errors) == null ? void 0 : m[0], g = !!v, b = () => {
    u(!1);
  };
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      M.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${c ? "text-blue-600" : g ? "text-red-500" : "text-gray-700"}`,
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
      M.div,
      {
        className: "relative",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          /* @__PURE__ */ C.jsx(
            "input",
            {
              type: "text",
              id: e,
              value: r || "",
              placeholder: a || h,
              onChange: ($) => n($.target.value),
              onFocus: () => u(!0),
              onBlur: b,
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${g ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`
            }
          ),
          /* @__PURE__ */ C.jsx(
            M.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${g ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: c || g ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          )
        ]
      }
    ),
    g && /* @__PURE__ */ C.jsx(
      M.p,
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
  const [c, u] = fe(!1), f = (s == null ? void 0 : s["ui:title"]) || i.title, h = (s == null ? void 0 : s["ui:description"]) || i.description, d = (b = o == null ? void 0 : o.errors) == null ? void 0 : b[e], v = (_ = d == null ? void 0 : d.__errors) == null ? void 0 : _[0], g = !!v;
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      M.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${c ? "text-blue-600" : g ? "text-red-500" : "text-gray-700"}`,
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
      M.div,
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
              onChange: (m) => n(m.target.value),
              onFocus: () => u(!0),
              onBlur: () => u(!1),
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${g ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`
            }
          ),
          /* @__PURE__ */ C.jsx(
            M.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${g ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: c || g ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          )
        ]
      }
    ),
    g && /* @__PURE__ */ C.jsx(
      M.p,
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
  var b, _;
  const [c, u] = fe(!1), f = (s == null ? void 0 : s["ui:title"]) || i.title, h = (s == null ? void 0 : s["ui:description"]) || i.description, d = (b = o == null ? void 0 : o.errors) == null ? void 0 : b[e], v = (_ = d == null ? void 0 : d.__errors) == null ? void 0 : _[0], g = !!v;
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      M.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${c ? "text-blue-600" : g ? "text-red-500" : "text-gray-700"}`,
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
      M.div,
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
              onChange: (m) => n(m.target.value),
              onFocus: () => u(!0),
              onBlur: () => u(!1),
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${g ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`
            }
          ),
          /* @__PURE__ */ C.jsx(
            M.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${g ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: c || g ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          )
        ]
      }
    ),
    g && /* @__PURE__ */ C.jsx(
      M.p,
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
  var _, m;
  const [c, u] = fe(!1), f = (s == null ? void 0 : s["ui:enumOptions"]) || [], h = (s == null ? void 0 : s["ui:title"]) || i.title, d = (s == null ? void 0 : s["ui:description"]) || i.description, v = (_ = o == null ? void 0 : o.errors) == null ? void 0 : _[e], g = (m = v == null ? void 0 : v.__errors) == null ? void 0 : m[0], b = !!g;
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      M.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${c ? "text-blue-600" : b ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          h,
          " ",
          t && /* @__PURE__ */ C.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ C.jsxs(
      M.div,
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
              onChange: ($) => n([$.target.value]),
              onFocus: () => u(!0),
              onBlur: () => u(!1),
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 bg-transparent appearance-none ${b ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`,
              children: [
                /* @__PURE__ */ C.jsx("option", { value: "", disabled: !0, children: a || d || "Please select an option" }),
                f.map(($) => {
                  const P = typeof $ == "string" || typeof $ == "number" ? $ : null, I = typeof $ == "string" ? $.charAt(0).toUpperCase() + $.slice(1) : $;
                  return P !== null ? /* @__PURE__ */ C.jsx("option", { value: P, children: typeof I == "string" || typeof I == "number" ? I : JSON.stringify(I) }, P.toString()) : null;
                })
              ]
            }
          ),
          /* @__PURE__ */ C.jsx(
            M.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${b ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: c || b ? 1 : 0 },
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
    b && /* @__PURE__ */ C.jsx(
      M.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: g
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
  var v, g;
  const [o, c] = fe(!1), u = (i == null ? void 0 : i["ui:title"]) || a.title, f = (v = s == null ? void 0 : s.errors) == null ? void 0 : v[e], h = (g = f == null ? void 0 : f.__errors) == null ? void 0 : g[0], d = !!h;
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6 flex flex-col items-center", children: [
    /* @__PURE__ */ C.jsxs(
      M.div,
      {
        className: "relative flex items-center",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: [
          /* @__PURE__ */ C.jsx(
            "input",
            {
              type: "checkbox",
              id: e,
              checked: r || !1,
              onChange: (b) => n(b.target.checked),
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              className: `w-6 h-6 text-blue-600 rounded-md focus:ring-2 focus:ring-offset-2 focus:border-transparent transition-all duration-300 ${d ? "border-2 border-red-500 focus:ring-red-500" : "border-2 border-gray-300 focus:ring-blue-500"}`
            }
          ),
          /* @__PURE__ */ C.jsxs(
            M.label,
            {
              htmlFor: e,
              className: `ml-3 text-2xl font-bold transition-colors duration-300 ${o ? "text-blue-600" : d ? "text-red-500" : "text-gray-700"}`,
              initial: { y: -10, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 0.3 },
              children: [
                u,
                " ",
                t && /* @__PURE__ */ C.jsx("span", { className: "text-red-500", children: "*" })
              ]
            }
          )
        ]
      }
    ),
    d && /* @__PURE__ */ C.jsx(
      M.p,
      {
        className: "text-red-500 text-sm mt-2",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: h
      }
    )
  ] });
}, qo = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  schema: a,
  uiSchema: i,
  formContext: s
}) => {
  var m, $;
  const [o, c] = fe(!1), [u, f] = fe(r || ""), h = (i == null ? void 0 : i["ui:title"]) || a.title;
  i != null && i["ui:description"] || a.description;
  const d = (m = s == null ? void 0 : s.errors) == null ? void 0 : m[e], v = ($ = d == null ? void 0 : d.__errors) == null ? void 0 : $[0], g = !!v, b = () => {
    c(!1);
  }, _ = (P) => {
    var F;
    const I = (F = P.target.files) == null ? void 0 : F[0];
    if (I) {
      const ne = new FileReader();
      ne.onloadend = () => {
        const ae = ne.result;
        f(ae), n(ae);
      }, ne.readAsDataURL(I);
    }
  };
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      M.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${o ? "text-blue-600" : g ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          h,
          " ",
          t && /* @__PURE__ */ C.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ C.jsxs(
      M.div,
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
              onChange: _,
              onFocus: () => c(!0),
              onBlur: b,
              className: `w-full px-4 py-3 text-xl border-b-2 focus:outline-none transition-colors duration-300 ${g ? "border-red-500" : "border-gray-300 focus:border-blue-600"}`
            }
          ),
          u && /* @__PURE__ */ C.jsx(
            M.img,
            {
              src: u,
              alt: "Preview",
              className: "mt-4 rounded-md",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.3 },
              style: { maxWidth: "100%", maxHeight: "200px" }
            }
          ),
          /* @__PURE__ */ C.jsx(
            M.div,
            {
              className: `absolute bottom-0 left-0 w-full h-0.5 ${g ? "bg-red-500" : "bg-blue-600"}`,
              initial: { scaleX: 0 },
              animate: { scaleX: o || g ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          )
        ]
      }
    ),
    g && /* @__PURE__ */ C.jsx(
      M.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: v
      }
    )
  ] });
}, ko = "data:image/svg+xml,%3csvg%20width='81'%20height='14'%20viewBox='0%200%2081%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%201000002026'%3e%3cpath%20id='Union'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M80.074%200V6.49771V7V7.49771L72.2812%207.49771L73.6096%208.82613C73.8048%209.0214%2073.8048%209.33798%2073.6096%209.53324C73.4143%209.7285%2073.0977%209.7285%2072.9025%209.53324L70.7205%207.35126C70.5252%207.156%2070.5252%206.83942%2070.7205%206.64415L72.9025%204.46217C73.0977%204.26691%2073.4143%204.26691%2073.6096%204.46217C73.8048%204.65743%2073.8048%204.97402%2073.6096%205.16928L72.2812%206.49771L79.274%206.49771V0H80.074ZM1.09005%204.636C1.30605%204.26%201.62605%203.948%202.05005%203.7C2.48205%203.444%202.98205%203.316%203.55005%203.316C4.13405%203.316%204.66205%203.456%205.13405%203.736C5.61405%204.016%205.99005%204.412%206.26205%204.924C6.53405%205.428%206.67005%206.016%206.67005%206.688C6.67005%207.352%206.53405%207.944%206.26205%208.464C5.99005%208.984%205.61405%209.388%205.13405%209.676C4.66205%209.964%204.13405%2010.108%203.55005%2010.108C2.99005%2010.108%202.49405%209.984%202.06205%209.736C1.63805%209.48%201.31405%209.164%201.09005%208.788V13.12H-0.00195312V3.424H1.09005V4.636ZM5.55405%206.688C5.55405%206.192%205.45405%205.76%205.25405%205.392C5.05405%205.024%204.78205%204.744%204.43805%204.552C4.10205%204.36%203.73005%204.264%203.32205%204.264C2.92205%204.264%202.55005%204.364%202.20605%204.564C1.87005%204.756%201.59805%205.04%201.39005%205.416C1.19005%205.784%201.09005%206.212%201.09005%206.7C1.09005%207.196%201.19005%207.632%201.39005%208.008C1.59805%208.376%201.87005%208.66%202.20605%208.86C2.55005%209.052%202.92205%209.148%203.32205%209.148C3.73005%209.148%204.10205%209.052%204.43805%208.86C4.78205%208.66%205.05405%208.376%205.25405%208.008C5.45405%207.632%205.55405%207.192%205.55405%206.688ZM9.19942%204.492C9.39142%204.116%209.66342%203.824%2010.0154%203.616C10.3754%203.408%2010.8114%203.304%2011.3234%203.304V4.432H11.0354C9.81142%204.432%209.19942%205.096%209.19942%206.424V10H8.10742V3.424H9.19942V4.492ZM18.584%206.46C18.584%206.668%2018.572%206.888%2018.548%207.12H13.292C13.332%207.768%2013.552%208.276%2013.952%208.644C14.36%209.004%2014.852%209.184%2015.428%209.184C15.9%209.184%2016.292%209.076%2016.604%208.86C16.924%208.636%2017.148%208.34%2017.276%207.972H18.452C18.276%208.604%2017.924%209.12%2017.396%209.52C16.868%209.912%2016.212%2010.108%2015.428%2010.108C14.804%2010.108%2014.244%209.968%2013.748%209.688C13.26%209.408%2012.876%209.012%2012.596%208.5C12.316%207.98%2012.176%207.38%2012.176%206.7C12.176%206.02%2012.312%205.424%2012.584%204.912C12.856%204.4%2013.236%204.008%2013.724%203.736C14.22%203.456%2014.788%203.316%2015.428%203.316C16.052%203.316%2016.604%203.452%2017.084%203.724C17.564%203.996%2017.932%204.372%2018.188%204.852C18.452%205.324%2018.584%205.86%2018.584%206.46ZM17.456%206.232C17.456%205.816%2017.364%205.46%2017.18%205.164C16.996%204.86%2016.744%204.632%2016.424%204.48C16.112%204.32%2015.764%204.24%2015.38%204.24C14.828%204.24%2014.356%204.416%2013.964%204.768C13.58%205.12%2013.36%205.608%2013.304%206.232H17.456ZM22.3534%2010.108C21.8494%2010.108%2021.3974%2010.024%2020.9974%209.856C20.5974%209.68%2020.2814%209.44%2020.0494%209.136C19.8174%208.824%2019.6894%208.468%2019.6654%208.068H20.7934C20.8254%208.396%2020.9774%208.664%2021.2494%208.872C21.5294%209.08%2021.8934%209.184%2022.3414%209.184C22.7574%209.184%2023.0854%209.092%2023.3254%208.908C23.5654%208.724%2023.6854%208.492%2023.6854%208.212C23.6854%207.924%2023.5574%207.712%2023.3014%207.576C23.0454%207.432%2022.6494%207.292%2022.1134%207.156C21.6254%207.028%2021.2254%206.9%2020.9134%206.772C20.6094%206.636%2020.3454%206.44%2020.1214%206.184C19.9054%205.92%2019.7974%205.576%2019.7974%205.152C19.7974%204.816%2019.8974%204.508%2020.0974%204.228C20.2974%203.948%2020.5814%203.728%2020.9494%203.568C21.3174%203.4%2021.7374%203.316%2022.2094%203.316C22.9374%203.316%2023.5254%203.5%2023.9734%203.868C24.4214%204.236%2024.6614%204.74%2024.6934%205.38H23.6014C23.5774%205.036%2023.4374%204.76%2023.1814%204.552C22.9334%204.344%2022.5974%204.24%2022.1734%204.24C21.7814%204.24%2021.4694%204.324%2021.2374%204.492C21.0054%204.66%2020.8894%204.88%2020.8894%205.152C20.8894%205.368%2020.9574%205.548%2021.0934%205.692C21.2374%205.828%2021.4134%205.94%2021.6214%206.028C21.8374%206.108%2022.1334%206.2%2022.5094%206.304C22.9814%206.432%2023.3654%206.56%2023.6614%206.688C23.9574%206.808%2024.2094%206.992%2024.4174%207.24C24.6334%207.488%2024.7454%207.812%2024.7534%208.212C24.7534%208.572%2024.6534%208.896%2024.4534%209.184C24.2534%209.472%2023.9694%209.7%2023.6014%209.868C23.2414%2010.028%2022.8254%2010.108%2022.3534%2010.108ZM28.6229%2010.108C28.1189%2010.108%2027.6669%2010.024%2027.2669%209.856C26.8669%209.68%2026.5509%209.44%2026.3189%209.136C26.0869%208.824%2025.9589%208.468%2025.9349%208.068H27.0629C27.0949%208.396%2027.2469%208.664%2027.5189%208.872C27.7989%209.08%2028.1629%209.184%2028.6109%209.184C29.0269%209.184%2029.3549%209.092%2029.5949%208.908C29.8349%208.724%2029.9549%208.492%2029.9549%208.212C29.9549%207.924%2029.8269%207.712%2029.5709%207.576C29.3149%207.432%2028.9189%207.292%2028.3829%207.156C27.8949%207.028%2027.4949%206.9%2027.1829%206.772C26.8789%206.636%2026.6149%206.44%2026.3909%206.184C26.1749%205.92%2026.0669%205.576%2026.0669%205.152C26.0669%204.816%2026.1669%204.508%2026.3669%204.228C26.5669%203.948%2026.8509%203.728%2027.2189%203.568C27.5869%203.4%2028.0069%203.316%2028.4789%203.316C29.2069%203.316%2029.7949%203.5%2030.2429%203.868C30.6909%204.236%2030.9309%204.74%2030.9629%205.38H29.8709C29.8469%205.036%2029.7069%204.76%2029.4509%204.552C29.2029%204.344%2028.8669%204.24%2028.4429%204.24C28.0509%204.24%2027.7389%204.324%2027.5069%204.492C27.2749%204.66%2027.1589%204.88%2027.1589%205.152C27.1589%205.368%2027.2269%205.548%2027.3629%205.692C27.5069%205.828%2027.6829%205.94%2027.8909%206.028C28.1069%206.108%2028.4029%206.2%2028.7789%206.304C29.2509%206.432%2029.6349%206.56%2029.9309%206.688C30.2269%206.808%2030.4789%206.992%2030.6869%207.24C30.9029%207.488%2031.0149%207.812%2031.0229%208.212C31.0229%208.572%2030.9229%208.896%2030.7229%209.184C30.5229%209.472%2030.2389%209.7%2029.8709%209.868C29.5109%2010.028%2029.0949%2010.108%2028.6229%2010.108ZM37.3477%202.98V5.08H40.1677V6.412H37.3477V8.632H40.5277V10H35.6677V1.612H40.5277V2.98H37.3477ZM45.7384%203.256C46.5304%203.256%2047.1704%203.508%2047.6584%204.012C48.1464%204.508%2048.3904%205.204%2048.3904%206.1V10H46.7104V6.328C46.7104%205.8%2046.5784%205.396%2046.3144%205.116C46.0504%204.828%2045.6904%204.684%2045.2344%204.684C44.7704%204.684%2044.4024%204.828%2044.1304%205.116C43.8664%205.396%2043.7344%205.8%2043.7344%206.328V10H42.0544V3.352H43.7344V4.18C43.9584%203.892%2044.2424%203.668%2044.5864%203.508C44.9384%203.34%2045.3224%203.256%2045.7384%203.256ZM51.944%204.732V7.948C51.944%208.172%2051.996%208.336%2052.1%208.44C52.212%208.536%2052.396%208.584%2052.652%208.584H53.432V10H52.376C50.96%2010%2050.252%209.312%2050.252%207.936V4.732H49.46V3.352H50.252V1.708H51.944V3.352H53.432V4.732H51.944ZM60.8203%206.532C60.8203%206.772%2060.8043%206.988%2060.7723%207.18H55.9123C55.9523%207.66%2056.1203%208.036%2056.4163%208.308C56.7123%208.58%2057.0763%208.716%2057.5083%208.716C58.1323%208.716%2058.5763%208.448%2058.8403%207.912H60.6523C60.4603%208.552%2060.0923%209.08%2059.5483%209.496C59.0043%209.904%2058.3363%2010.108%2057.5443%2010.108C56.9043%2010.108%2056.3283%209.968%2055.8163%209.688C55.3123%209.4%2054.9163%208.996%2054.6283%208.476C54.3483%207.956%2054.2083%207.356%2054.2083%206.676C54.2083%205.988%2054.3483%205.384%2054.6283%204.864C54.9083%204.344%2055.3003%203.944%2055.8043%203.664C56.3083%203.384%2056.8883%203.244%2057.5443%203.244C58.1763%203.244%2058.7403%203.38%2059.2363%203.652C59.7403%203.924%2060.1283%204.312%2060.4003%204.816C60.6803%205.312%2060.8203%205.884%2060.8203%206.532ZM59.0803%206.052C59.0723%205.62%2058.9163%205.276%2058.6123%205.02C58.3083%204.756%2057.9363%204.624%2057.4963%204.624C57.0803%204.624%2056.7283%204.752%2056.4403%205.008C56.1603%205.256%2055.9883%205.604%2055.9243%206.052H59.0803ZM63.7266%204.384C63.9426%204.032%2064.2226%203.756%2064.5666%203.556C64.9186%203.356%2065.3186%203.256%2065.7666%203.256V5.02H65.3226C64.7946%205.02%2064.3946%205.144%2064.1226%205.392C63.8586%205.64%2063.7266%206.072%2063.7266%206.688V10H62.0466V3.352H63.7266V4.384Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e";
function J(e) {
  return typeof File < "u" && e instanceof File || typeof Date < "u" && e instanceof Date ? !1 : typeof e == "object" && e !== null && !Array.isArray(e);
}
const wa = "__additional_property", Wo = "additionalProperties", Zt = "allOf", Lr = "anyOf", zr = "const", Ho = "default", Aa = "dependencies", _e = "__errors", Ir = "$id", Yo = "if", Bo = "items", Xo = "_$junk_option_schema_id$_", hr = "oneOf", ye = "properties", Jo = "required", me = "$ref", Zo = "__rjsf_additionalProperties", Ca = "__rjsf_rootSchema", Qo = "ui:widget", ec = "ui:options";
function Zn(e = {}, r = {}) {
  return Object.keys(e).filter((t) => t.indexOf("ui:") === 0).reduce((t, n) => {
    const a = e[n];
    return n === Qo && J(a) ? (console.error("Setting options via ui:widget object is no longer supported, use ui:options instead"), t) : n === ec && J(a) ? { ...t, ...a } : { ...t, [n.substring(3)]: a };
  }, { ...r });
}
var rc = typeof Sr == "object" && Sr && Sr.Object === Object && Sr, Ea = rc, tc = Ea, nc = typeof self == "object" && self && self.Object === Object && self, ic = tc || nc || Function("return this")(), $e = ic, ac = $e, sc = ac.Symbol, Ye = sc, Qn = Ye, Oa = Object.prototype, oc = Oa.hasOwnProperty, cc = Oa.toString, lr = Qn ? Qn.toStringTag : void 0;
function uc(e) {
  var r = oc.call(e, lr), t = e[lr];
  try {
    e[lr] = void 0;
    var n = !0;
  } catch {
  }
  var a = cc.call(e);
  return n && (r ? e[lr] = t : delete e[lr]), a;
}
var fc = uc, lc = Object.prototype, dc = lc.toString;
function pc(e) {
  return dc.call(e);
}
var hc = pc, ei = Ye, vc = fc, yc = hc, gc = "[object Null]", mc = "[object Undefined]", ri = ei ? ei.toStringTag : void 0;
function $c(e) {
  return e == null ? e === void 0 ? mc : gc : ri && ri in Object(e) ? vc(e) : yc(e);
}
var be = $c;
function _c(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var Pa = _c, bc = Pa, wc = bc(Object.getPrototypeOf, Object), Jr = wc;
function Ac(e) {
  return e != null && typeof e == "object";
}
var pe = Ac, Cc = be, Ec = Jr, Oc = pe, Pc = "[object Object]", Tc = Function.prototype, Sc = Object.prototype, Ta = Tc.toString, Ic = Sc.hasOwnProperty, Nc = Ta.call(Object);
function jc(e) {
  if (!Oc(e) || Cc(e) != Pc)
    return !1;
  var r = Ec(e);
  if (r === null)
    return !0;
  var t = Ic.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Ta.call(t) == Nc;
}
var Be = jc;
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
function xc() {
  this.__data__ = [], this.size = 0;
}
var Rc = xc;
function Mc(e, r) {
  return e === r || e !== e && r !== r;
}
var Xe = Mc, Fc = Xe;
function Dc(e, r) {
  for (var t = e.length; t--; )
    if (Fc(e[t][0], r))
      return t;
  return -1;
}
var Zr = Dc, Lc = Zr, zc = Array.prototype, Kc = zc.splice;
function Uc(e) {
  var r = this.__data__, t = Lc(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : Kc.call(r, t, 1), --this.size, !0;
}
var Vc = Uc, Gc = Zr;
function qc(e) {
  var r = this.__data__, t = Gc(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var kc = qc, Wc = Zr;
function Hc(e) {
  return Wc(this.__data__, e) > -1;
}
var Yc = Hc, Bc = Zr;
function Xc(e, r) {
  var t = this.__data__, n = Bc(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
var Jc = Xc, Zc = Rc, Qc = Vc, eu = kc, ru = Yc, tu = Jc;
function Je(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Je.prototype.clear = Zc;
Je.prototype.delete = Qc;
Je.prototype.get = eu;
Je.prototype.has = ru;
Je.prototype.set = tu;
var Qr = Je, nu = Qr;
function iu() {
  this.__data__ = new nu(), this.size = 0;
}
var au = iu;
function su(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var ou = su;
function cu(e) {
  return this.__data__.get(e);
}
var uu = cu;
function fu(e) {
  return this.__data__.has(e);
}
var lu = fu;
function du(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var ue = du;
const Kr = /* @__PURE__ */ Q(ue);
var pu = be, hu = ue, vu = "[object AsyncFunction]", yu = "[object Function]", gu = "[object GeneratorFunction]", mu = "[object Proxy]";
function $u(e) {
  if (!hu(e))
    return !1;
  var r = pu(e);
  return r == yu || r == gu || r == vu || r == mu;
}
var et = $u, _u = $e, bu = _u["__core-js_shared__"], wu = bu, Et = wu, ti = function() {
  var e = /[^.]+$/.exec(Et && Et.keys && Et.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Au(e) {
  return !!ti && ti in e;
}
var Cu = Au, Eu = Function.prototype, Ou = Eu.toString;
function Pu(e) {
  if (e != null) {
    try {
      return Ou.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Sa = Pu, Tu = et, Su = Cu, Iu = ue, Nu = Sa, ju = /[\\^$.*+?()[\]{}|]/g, xu = /^\[object .+?Constructor\]$/, Ru = Function.prototype, Mu = Object.prototype, Fu = Ru.toString, Du = Mu.hasOwnProperty, Lu = RegExp(
  "^" + Fu.call(Du).replace(ju, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zu(e) {
  if (!Iu(e) || Su(e))
    return !1;
  var r = Tu(e) ? Lu : xu;
  return r.test(Nu(e));
}
var Ku = zu;
function Uu(e, r) {
  return e == null ? void 0 : e[r];
}
var Vu = Uu, Gu = Ku, qu = Vu;
function ku(e, r) {
  var t = qu(e, r);
  return Gu(t) ? t : void 0;
}
var Me = ku, Wu = Me, Hu = $e, Yu = Wu(Hu, "Map"), en = Yu, Bu = Me, Xu = Bu(Object, "create"), rt = Xu, ni = rt;
function Ju() {
  this.__data__ = ni ? ni(null) : {}, this.size = 0;
}
var Zu = Ju;
function Qu(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var ef = Qu, rf = rt, tf = "__lodash_hash_undefined__", nf = Object.prototype, af = nf.hasOwnProperty;
function sf(e) {
  var r = this.__data__;
  if (rf) {
    var t = r[e];
    return t === tf ? void 0 : t;
  }
  return af.call(r, e) ? r[e] : void 0;
}
var of = sf, cf = rt, uf = Object.prototype, ff = uf.hasOwnProperty;
function lf(e) {
  var r = this.__data__;
  return cf ? r[e] !== void 0 : ff.call(r, e);
}
var df = lf, pf = rt, hf = "__lodash_hash_undefined__";
function vf(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = pf && r === void 0 ? hf : r, this;
}
var yf = vf, gf = Zu, mf = ef, $f = of, _f = df, bf = yf;
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
var wf = Ze, ii = wf, Af = Qr, Cf = en;
function Ef() {
  this.size = 0, this.__data__ = {
    hash: new ii(),
    map: new (Cf || Af)(),
    string: new ii()
  };
}
var Of = Ef;
function Pf(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Tf = Pf, Sf = Tf;
function If(e, r) {
  var t = e.__data__;
  return Sf(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var tt = If, Nf = tt;
function jf(e) {
  var r = Nf(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var xf = jf, Rf = tt;
function Mf(e) {
  return Rf(this, e).get(e);
}
var Ff = Mf, Df = tt;
function Lf(e) {
  return Df(this, e).has(e);
}
var zf = Lf, Kf = tt;
function Uf(e, r) {
  var t = Kf(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var Vf = Uf, Gf = Of, qf = xf, kf = Ff, Wf = zf, Hf = Vf;
function Qe(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Qe.prototype.clear = Gf;
Qe.prototype.delete = qf;
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
var Qf = Zf, el = Qr, rl = au, tl = ou, nl = uu, il = lu, al = Qf;
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
var cl = ol;
function ul(e) {
  return this.__data__.has(e);
}
var fl = ul, ll = rn, dl = cl, pl = fl;
function Ur(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new ll(); ++r < t; )
    this.add(e[r]);
}
Ur.prototype.add = Ur.prototype.push = dl;
Ur.prototype.has = pl;
var it = Ur;
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
  var s = t & _l, o = e.length, c = r.length;
  if (o != c && !(s && c > o))
    return !1;
  var u = i.get(e), f = i.get(r);
  if (u && f)
    return u == r && f == e;
  var h = -1, d = !0, v = t & bl ? new gl() : void 0;
  for (i.set(e, r), i.set(r, e); ++h < o; ) {
    var g = e[h], b = r[h];
    if (n)
      var _ = s ? n(b, g, h, r, e, i) : n(g, b, h, e, r, i);
    if (_ !== void 0) {
      if (_)
        continue;
      d = !1;
      break;
    }
    if (v) {
      if (!ml(r, function(m, $) {
        if (!$l(v, $) && (g === m || a(g, m, t, n, i)))
          return v.push($);
      })) {
        d = !1;
        break;
      }
    } else if (!(g === b || a(g, b, t, n, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(r), d;
}
var Ia = wl, Al = $e, Cl = Al.Uint8Array, Na = Cl;
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
var tn = Pl, ai = Ye, si = Na, Tl = Xe, Sl = Ia, Il = Ol, Nl = tn, jl = 1, xl = 2, Rl = "[object Boolean]", Ml = "[object Date]", Fl = "[object Error]", Dl = "[object Map]", Ll = "[object Number]", zl = "[object RegExp]", Kl = "[object Set]", Ul = "[object String]", Vl = "[object Symbol]", Gl = "[object ArrayBuffer]", ql = "[object DataView]", oi = ai ? ai.prototype : void 0, Ot = oi ? oi.valueOf : void 0;
function kl(e, r, t, n, a, i, s) {
  switch (t) {
    case ql:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Gl:
      return !(e.byteLength != r.byteLength || !i(new si(e), new si(r)));
    case Rl:
    case Ml:
    case Ll:
      return Tl(+e, +r);
    case Fl:
      return e.name == r.name && e.message == r.message;
    case zl:
    case Ul:
      return e == r + "";
    case Dl:
      var o = Il;
    case Kl:
      var c = n & jl;
      if (o || (o = Nl), e.size != r.size && !c)
        return !1;
      var u = s.get(e);
      if (u)
        return u == r;
      n |= xl, s.set(e, r);
      var f = Sl(o(e), o(r), n, a, i, s);
      return s.delete(e), f;
    case Vl:
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
var nn = Hl, Yl = Array.isArray, ie = Yl, Bl = nn, Xl = ie;
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
var xa = e0, r0 = Ql, t0 = xa, n0 = Object.prototype, i0 = n0.propertyIsEnumerable, ci = Object.getOwnPropertySymbols, a0 = ci ? function(e) {
  return e == null ? [] : (e = Object(e), r0(ci(e), function(r) {
    return i0.call(e, r);
  }));
} : t0, an = a0;
function s0(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Ra = s0, o0 = be, c0 = pe, u0 = "[object Arguments]";
function f0(e) {
  return c0(e) && o0(e) == u0;
}
var l0 = f0, ui = l0, d0 = pe, Ma = Object.prototype, p0 = Ma.hasOwnProperty, h0 = Ma.propertyIsEnumerable, v0 = ui(/* @__PURE__ */ function() {
  return arguments;
}()) ? ui : function(e) {
  return d0(e) && p0.call(e, "callee") && !h0.call(e, "callee");
}, mr = v0, Vr = { exports: {} };
function y0() {
  return !1;
}
var g0 = y0;
Vr.exports;
(function(e, r) {
  var t = $e, n = g0, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? t.Buffer : void 0, c = o ? o.isBuffer : void 0, u = c || n;
  e.exports = u;
})(Vr, Vr.exports);
var rr = Vr.exports, m0 = 9007199254740991, $0 = /^(?:0|[1-9]\d*)$/;
function _0(e, r) {
  var t = typeof e;
  return r = r ?? m0, !!r && (t == "number" || t != "symbol" && $0.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var st = _0, b0 = 9007199254740991;
function w0(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= b0;
}
var sn = w0, A0 = be, C0 = sn, E0 = pe, O0 = "[object Arguments]", P0 = "[object Array]", T0 = "[object Boolean]", S0 = "[object Date]", I0 = "[object Error]", N0 = "[object Function]", j0 = "[object Map]", x0 = "[object Number]", R0 = "[object Object]", M0 = "[object RegExp]", F0 = "[object Set]", D0 = "[object String]", L0 = "[object WeakMap]", z0 = "[object ArrayBuffer]", K0 = "[object DataView]", U0 = "[object Float32Array]", V0 = "[object Float64Array]", G0 = "[object Int8Array]", q0 = "[object Int16Array]", k0 = "[object Int32Array]", W0 = "[object Uint8Array]", H0 = "[object Uint8ClampedArray]", Y0 = "[object Uint16Array]", B0 = "[object Uint32Array]", X = {};
X[U0] = X[V0] = X[G0] = X[q0] = X[k0] = X[W0] = X[H0] = X[Y0] = X[B0] = !0;
X[O0] = X[P0] = X[z0] = X[T0] = X[K0] = X[S0] = X[I0] = X[N0] = X[j0] = X[x0] = X[R0] = X[M0] = X[F0] = X[D0] = X[L0] = !1;
function X0(e) {
  return E0(e) && C0(e.length) && !!X[A0(e)];
}
var J0 = X0;
function Z0(e) {
  return function(r) {
    return e(r);
  };
}
var Fe = Z0, Gr = { exports: {} };
Gr.exports;
(function(e, r) {
  var t = Ea, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && t.process, o = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(Gr, Gr.exports);
var on = Gr.exports, Q0 = J0, ed = Fe, fi = on, li = fi && fi.isTypedArray, rd = li ? ed(li) : Q0, $r = rd, td = Ra, nd = mr, id = ie, ad = rr, sd = st, od = $r, cd = Object.prototype, ud = cd.hasOwnProperty;
function fd(e, r) {
  var t = id(e), n = !t && nd(e), a = !t && !n && ad(e), i = !t && !n && !a && od(e), s = t || n || a || i, o = s ? td(e.length, String) : [], c = o.length;
  for (var u in e)
    (r || ud.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    sd(u, c))) && o.push(u);
  return o;
}
var Fa = fd, ld = Object.prototype;
function dd(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || ld;
  return e === t;
}
var ot = dd, pd = Pa, hd = pd(Object.keys, Object), vd = hd, yd = ot, gd = vd, md = Object.prototype, $d = md.hasOwnProperty;
function _d(e) {
  if (!yd(e))
    return gd(e);
  var r = [];
  for (var t in Object(e))
    $d.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var Da = _d, bd = et, wd = sn;
function Ad(e) {
  return e != null && wd(e.length) && !bd(e);
}
var De = Ad, Cd = Fa, Ed = Da, Od = De;
function Pd(e) {
  return Od(e) ? Cd(e) : Ed(e);
}
var _r = Pd, Td = ja, Sd = an, Id = _r;
function Nd(e) {
  return Td(e, Id, Sd);
}
var La = Nd, di = La, jd = 1, xd = Object.prototype, Rd = xd.hasOwnProperty;
function Md(e, r, t, n, a, i) {
  var s = t & jd, o = di(e), c = o.length, u = di(r), f = u.length;
  if (c != f && !s)
    return !1;
  for (var h = c; h--; ) {
    var d = o[h];
    if (!(s ? d in r : Rd.call(r, d)))
      return !1;
  }
  var v = i.get(e), g = i.get(r);
  if (v && g)
    return v == r && g == e;
  var b = !0;
  i.set(e, r), i.set(r, e);
  for (var _ = s; ++h < c; ) {
    d = o[h];
    var m = e[d], $ = r[d];
    if (n)
      var P = s ? n($, m, d, r, e, i) : n(m, $, d, e, r, i);
    if (!(P === void 0 ? m === $ || a(m, $, t, n, i) : P)) {
      b = !1;
      break;
    }
    _ || (_ = d == "constructor");
  }
  if (b && !_) {
    var I = e.constructor, F = r.constructor;
    I != F && "constructor" in e && "constructor" in r && !(typeof I == "function" && I instanceof I && typeof F == "function" && F instanceof F) && (b = !1);
  }
  return i.delete(e), i.delete(r), b;
}
var Fd = Md, Dd = Me, Ld = $e, zd = Dd(Ld, "DataView"), Kd = zd, Ud = Me, Vd = $e, Gd = Ud(Vd, "Promise"), qd = Gd, kd = Me, Wd = $e, Hd = kd(Wd, "Set"), za = Hd, Yd = Me, Bd = $e, Xd = Yd(Bd, "WeakMap"), Jd = Xd, Lt = Kd, zt = en, Kt = qd, Ut = za, Vt = Jd, Ka = be, tr = Sa, pi = "[object Map]", Zd = "[object Object]", hi = "[object Promise]", vi = "[object Set]", yi = "[object WeakMap]", gi = "[object DataView]", Qd = tr(Lt), e2 = tr(zt), r2 = tr(Kt), t2 = tr(Ut), n2 = tr(Vt), Re = Ka;
(Lt && Re(new Lt(new ArrayBuffer(1))) != gi || zt && Re(new zt()) != pi || Kt && Re(Kt.resolve()) != hi || Ut && Re(new Ut()) != vi || Vt && Re(new Vt()) != yi) && (Re = function(e) {
  var r = Ka(e), t = r == Zd ? e.constructor : void 0, n = t ? tr(t) : "";
  if (n)
    switch (n) {
      case Qd:
        return gi;
      case e2:
        return pi;
      case r2:
        return hi;
      case t2:
        return vi;
      case n2:
        return yi;
    }
  return r;
});
var br = Re, Pt = nt, i2 = Ia, a2 = Wl, s2 = Fd, mi = br, $i = ie, _i = rr, o2 = $r, c2 = 1, bi = "[object Arguments]", wi = "[object Array]", Nr = "[object Object]", u2 = Object.prototype, Ai = u2.hasOwnProperty;
function f2(e, r, t, n, a, i) {
  var s = $i(e), o = $i(r), c = s ? wi : mi(e), u = o ? wi : mi(r);
  c = c == bi ? Nr : c, u = u == bi ? Nr : u;
  var f = c == Nr, h = u == Nr, d = c == u;
  if (d && _i(e)) {
    if (!_i(r))
      return !1;
    s = !0, f = !1;
  }
  if (d && !f)
    return i || (i = new Pt()), s || o2(e) ? i2(e, r, t, n, a, i) : a2(e, r, c, t, n, a, i);
  if (!(t & c2)) {
    var v = f && Ai.call(e, "__wrapped__"), g = h && Ai.call(r, "__wrapped__");
    if (v || g) {
      var b = v ? e.value() : e, _ = g ? r.value() : r;
      return i || (i = new Pt()), a(b, _, t, n, i);
    }
  }
  return d ? (i || (i = new Pt()), s2(e, r, t, n, a, i)) : !1;
}
var l2 = f2, d2 = l2, Ci = pe;
function Ua(e, r, t, n, a) {
  return e === r ? !0 : e == null || r == null || !Ci(e) && !Ci(r) ? e !== e && r !== r : d2(e, r, t, n, Ua, a);
}
var ct = Ua, p2 = ct;
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
var nr = b2, w2 = ie, A2 = nr, C2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, E2 = /^\w*$/;
function O2(e, r) {
  if (w2(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || A2(e) ? !0 : E2.test(e) || !C2.test(e) || r != null && e in Object(r);
}
var cn = O2, Va = rn, P2 = "Expected a function";
function un(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(P2);
  var t = function() {
    var n = arguments, a = r ? r.apply(this, n) : n[0], i = t.cache;
    if (i.has(a))
      return i.get(a);
    var s = e.apply(this, n);
    return t.cache = i.set(a, s) || i, s;
  };
  return t.cache = new (un.Cache || Va)(), t;
}
un.Cache = Va;
var T2 = un, S2 = T2, I2 = 500;
function N2(e) {
  var r = S2(e, function(n) {
    return t.size === I2 && t.clear(), n;
  }), t = r.cache;
  return r;
}
var j2 = N2, x2 = j2, R2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, M2 = /\\(\\)?/g, F2 = x2(function(e) {
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
var we = D2, Ei = Ye, L2 = we, z2 = ie, K2 = nr, U2 = 1 / 0, Oi = Ei ? Ei.prototype : void 0, Pi = Oi ? Oi.toString : void 0;
function qa(e) {
  if (typeof e == "string")
    return e;
  if (z2(e))
    return L2(e, qa) + "";
  if (K2(e))
    return Pi ? Pi.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -U2 ? "-0" : r;
}
var V2 = qa, G2 = V2;
function q2(e) {
  return e == null ? "" : G2(e);
}
var ka = q2, k2 = ie, W2 = cn, H2 = Ga, Y2 = ka;
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
var ut = rp, tp = ut;
function np(e, r, t) {
  var n = e == null ? void 0 : tp(e, r);
  return n === void 0 ? t : n;
}
var Wa = np;
const Z = /* @__PURE__ */ Q(Wa);
var ip = Da, ap = br, sp = mr, op = ie, cp = De, up = rr, fp = ot, lp = $r, dp = "[object Map]", pp = "[object Set]", hp = Object.prototype, vp = hp.hasOwnProperty;
function yp(e) {
  if (e == null)
    return !0;
  if (cp(e) && (op(e) || typeof e == "string" || typeof e.splice == "function" || up(e) || lp(e) || sp(e)))
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
function Ha(e) {
  return mp.test(e) ? e.replace($p, _p) : e;
}
function bp(e, r, t) {
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
  return bp(e, r, t);
}
function wp(e) {
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
}(), Xa = Ep, Ti = Xa;
function Op(e, r, t) {
  r == "__proto__" && Ti ? Ti(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var dn = Op, Pp = dn, Tp = Xe, Sp = Object.prototype, Ip = Sp.hasOwnProperty;
function Np(e, r, t) {
  var n = e[r];
  (!(Ip.call(e, r) && Tp(n, t)) || t === void 0 && !(r in e)) && Pp(e, r, t);
}
var pn = Np, jp = pn, xp = dn;
function Rp(e, r, t, n) {
  var a = !t;
  t || (t = {});
  for (var i = -1, s = r.length; ++i < s; ) {
    var o = r[i], c = n ? n(t[o], e[o], o, t, e) : void 0;
    c === void 0 && (c = e[o]), a ? xp(t, o, c) : jp(t, o, c);
  }
  return t;
}
var ir = Rp, Mp = ir, Fp = _r;
function Dp(e, r) {
  return e && Mp(r, Fp(r), e);
}
var Lp = Dp;
function zp(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var Kp = zp, Up = ue, Vp = ot, Gp = Kp, qp = Object.prototype, kp = qp.hasOwnProperty;
function Wp(e) {
  if (!Up(e))
    return Gp(e);
  var r = Vp(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !kp.call(e, n)) || t.push(n);
  return t;
}
var Hp = Wp, Yp = Fa, Bp = Hp, Xp = De;
function Jp(e) {
  return Xp(e) ? Yp(e, !0) : Bp(e);
}
var ar = Jp, Zp = ir, Qp = ar;
function e1(e, r) {
  return e && Zp(r, Qp(r), e);
}
var r1 = e1, qr = { exports: {} };
qr.exports;
(function(e, r) {
  var t = $e, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i ? t.Buffer : void 0, o = s ? s.allocUnsafe : void 0;
  function c(u, f) {
    if (f)
      return u.slice();
    var h = u.length, d = o ? o(h) : new u.constructor(h);
    return u.copy(d), d;
  }
  e.exports = c;
})(qr, qr.exports);
var Ja = qr.exports;
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
var s1 = a1, o1 = nn, c1 = Jr, u1 = an, f1 = xa, l1 = Object.getOwnPropertySymbols, d1 = l1 ? function(e) {
  for (var r = []; e; )
    o1(r, u1(e)), e = c1(e);
  return r;
} : f1, Za = d1, p1 = ir, h1 = Za;
function v1(e, r) {
  return p1(e, h1(e), r);
}
var y1 = v1, g1 = ja, m1 = Za, $1 = ar;
function _1(e) {
  return g1(e, $1, m1);
}
var Qa = _1, b1 = Object.prototype, w1 = b1.hasOwnProperty;
function A1(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && w1.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var C1 = A1, Si = Na;
function E1(e) {
  var r = new e.constructor(e.byteLength);
  return new Si(r).set(new Si(e)), r;
}
var hn = E1, O1 = hn;
function P1(e, r) {
  var t = r ? O1(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var T1 = P1, S1 = /\w*$/;
function I1(e) {
  var r = new e.constructor(e.source, S1.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var N1 = I1, Ii = Ye, Ni = Ii ? Ii.prototype : void 0, ji = Ni ? Ni.valueOf : void 0;
function j1(e) {
  return ji ? Object(ji.call(e)) : {};
}
var x1 = j1, R1 = hn;
function M1(e, r) {
  var t = r ? R1(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var es = M1, F1 = hn, D1 = T1, L1 = N1, z1 = x1, K1 = es, U1 = "[object Boolean]", V1 = "[object Date]", G1 = "[object Map]", q1 = "[object Number]", k1 = "[object RegExp]", W1 = "[object Set]", H1 = "[object String]", Y1 = "[object Symbol]", B1 = "[object ArrayBuffer]", X1 = "[object DataView]", J1 = "[object Float32Array]", Z1 = "[object Float64Array]", Q1 = "[object Int8Array]", eh = "[object Int16Array]", rh = "[object Int32Array]", th = "[object Uint8Array]", nh = "[object Uint8ClampedArray]", ih = "[object Uint16Array]", ah = "[object Uint32Array]";
function sh(e, r, t) {
  var n = e.constructor;
  switch (r) {
    case B1:
      return F1(e);
    case U1:
    case V1:
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
      return K1(e, t);
    case G1:
      return new n();
    case q1:
    case H1:
      return new n(e);
    case k1:
      return L1(e);
    case W1:
      return new n();
    case Y1:
      return z1(e);
  }
}
var oh = sh, ch = ue, xi = Object.create, uh = /* @__PURE__ */ function() {
  function e() {
  }
  return function(r) {
    if (!ch(r))
      return {};
    if (xi)
      return xi(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), rs = uh, fh = rs, lh = Jr, dh = ot;
function ph(e) {
  return typeof e.constructor == "function" && !dh(e) ? fh(lh(e)) : {};
}
var ts = ph, hh = br, vh = pe, yh = "[object Map]";
function gh(e) {
  return vh(e) && hh(e) == yh;
}
var mh = gh, $h = mh, _h = Fe, Ri = on, Mi = Ri && Ri.isMap, bh = Mi ? _h(Mi) : $h, wh = bh, Ah = br, Ch = pe, Eh = "[object Set]";
function Oh(e) {
  return Ch(e) && Ah(e) == Eh;
}
var Ph = Oh, Th = Ph, Sh = Fe, Fi = on, Di = Fi && Fi.isSet, Ih = Di ? Sh(Di) : Th, Nh = Ih, jh = nt, xh = ln, Rh = pn, Mh = Lp, Fh = r1, Dh = Ja, Lh = lt, zh = s1, Kh = y1, Uh = La, Vh = Qa, Gh = br, qh = C1, kh = oh, Wh = ts, Hh = ie, Yh = rr, Bh = wh, Xh = ue, Jh = Nh, Zh = _r, Qh = ar, ev = 1, rv = 2, tv = 4, ns = "[object Arguments]", nv = "[object Array]", iv = "[object Boolean]", av = "[object Date]", sv = "[object Error]", is = "[object Function]", ov = "[object GeneratorFunction]", cv = "[object Map]", uv = "[object Number]", as = "[object Object]", fv = "[object RegExp]", lv = "[object Set]", dv = "[object String]", pv = "[object Symbol]", hv = "[object WeakMap]", vv = "[object ArrayBuffer]", yv = "[object DataView]", gv = "[object Float32Array]", mv = "[object Float64Array]", $v = "[object Int8Array]", _v = "[object Int16Array]", bv = "[object Int32Array]", wv = "[object Uint8Array]", Av = "[object Uint8ClampedArray]", Cv = "[object Uint16Array]", Ev = "[object Uint32Array]", Y = {};
Y[ns] = Y[nv] = Y[vv] = Y[yv] = Y[iv] = Y[av] = Y[gv] = Y[mv] = Y[$v] = Y[_v] = Y[bv] = Y[cv] = Y[uv] = Y[as] = Y[fv] = Y[lv] = Y[dv] = Y[pv] = Y[wv] = Y[Av] = Y[Cv] = Y[Ev] = !0;
Y[sv] = Y[is] = Y[hv] = !1;
function Fr(e, r, t, n, a, i) {
  var s, o = r & ev, c = r & rv, u = r & tv;
  if (t && (s = a ? t(e, n, a, i) : t(e)), s !== void 0)
    return s;
  if (!Xh(e))
    return e;
  var f = Hh(e);
  if (f) {
    if (s = qh(e), !o)
      return Lh(e, s);
  } else {
    var h = Gh(e), d = h == is || h == ov;
    if (Yh(e))
      return Dh(e, o);
    if (h == as || h == ns || d && !a) {
      if (s = c || d ? {} : Wh(e), !o)
        return c ? Kh(e, Fh(s, e)) : zh(e, Mh(s, e));
    } else {
      if (!Y[h])
        return a ? e : {};
      s = kh(e, h, o);
    }
  }
  i || (i = new jh());
  var v = i.get(e);
  if (v)
    return v;
  i.set(e, s), Jh(e) ? e.forEach(function(_) {
    s.add(Fr(_, r, t, _, e, i));
  }) : Bh(e) && e.forEach(function(_, m) {
    s.set(m, Fr(_, r, t, m, e, i));
  });
  var g = u ? c ? Vh : Uh : c ? Qh : Zh, b = f ? void 0 : g(e);
  return xh(b || e, function(_, m) {
    b && (m = _, _ = e[m]), Rh(s, m, Fr(_, r, t, m, e, i));
  }), s;
}
var ss = Fr;
function Ov(e) {
  var r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
var os = Ov;
function Pv(e, r, t) {
  var n = -1, a = e.length;
  r < 0 && (r = -r > a ? 0 : a + r), t = t > a ? a : t, t < 0 && (t += a), a = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + r];
  return i;
}
var Tv = Pv, Sv = ut, Iv = Tv;
function Nv(e, r) {
  return r.length < 2 ? e : Sv(e, Iv(r, 0, -1));
}
var jv = Nv, xv = wr, Rv = os, Mv = jv, Fv = Le;
function Dv(e, r) {
  return r = xv(r, e), e = Mv(e, r), e == null || delete e[Fv(Rv(r))];
}
var Lv = Dv, zv = Be;
function Kv(e) {
  return zv(e) ? void 0 : e;
}
var Uv = Kv, Li = Ye, Vv = mr, Gv = ie, zi = Li ? Li.isConcatSpreadable : void 0;
function qv(e) {
  return Gv(e) || Vv(e) || !!(zi && e && e[zi]);
}
var kv = qv, Wv = nn, Hv = kv;
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
var us = Xv, Jv = us, Ki = Math.max;
function Zv(e, r, t) {
  return r = Ki(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, a = -1, i = Ki(n.length - r, 0), s = Array(i); ++a < i; )
      s[a] = n[r + a];
    a = -1;
    for (var o = Array(r + 1); ++a < r; )
      o[a] = n[a];
    return o[r] = t(s), Jv(e, this, o);
  };
}
var fs = Zv;
function Qv(e) {
  return function() {
    return e;
  };
}
var ey = Qv;
function ry(e) {
  return e;
}
var Ar = ry, ty = ey, Ui = Xa, ny = Ar, iy = Ui ? function(e, r) {
  return Ui(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ty(r),
    writable: !0
  });
} : ny, ay = iy, sy = 800, oy = 16, cy = Date.now;
function uy(e) {
  var r = 0, t = 0;
  return function() {
    var n = cy(), a = oy - (n - t);
    if (t = n, a > 0) {
      if (++r >= sy)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var fy = uy, ly = ay, dy = fy, py = dy(ly), ls = py, hy = vn, vy = fs, yy = ls;
function gy(e) {
  return yy(vy(e, void 0, hy), e + "");
}
var my = gy, $y = we, _y = ss, by = Lv, wy = wr, Ay = ir, Cy = Uv, Ey = my, Oy = Qa, Py = 1, Ty = 2, Sy = 4, Iy = Ey(function(e, r) {
  var t = {};
  if (e == null)
    return t;
  var n = !1;
  r = $y(r, function(i) {
    return i = wy(i, e), n || (n = i.length > 1), i;
  }), Ay(e, Oy(e), t), n && (t = _y(t, Py | Ty | Sy, Cy));
  for (var a = r.length; a--; )
    by(t, r[a]);
  return t;
}), Ny = Iy;
const jy = /* @__PURE__ */ Q(Ny);
function yn(e, r) {
  const t = r[e];
  return [jy(r, [e]), t];
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
      const [f, ...h] = t, d = [...h, n, f].join(" -> ");
      throw new Error(`Definition for ${f} contains a circular reference through ${d}`);
    }
    const [o, c] = yn(me, i), u = ds(c, r, [...t, n]);
    return Object.keys(o).length > 0 ? { ...o, ...u } : u;
  }
  return i;
}
function ps(e, r = {}) {
  return ds(e, r, []);
}
var xy = Object.prototype, Ry = xy.hasOwnProperty;
function My(e, r) {
  return e != null && Ry.call(e, r);
}
var Fy = My, Dy = wr, Ly = mr, zy = ie, Ky = st, Uy = sn, Vy = Le;
function Gy(e, r, t) {
  r = Dy(r, e);
  for (var n = -1, a = r.length, i = !1; ++n < a; ) {
    var s = Vy(r[n]);
    if (!(i = e != null && t(e, s)))
      break;
    e = e[s];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Uy(a) && Ky(s, a) && (zy(e) || Ly(e)));
}
var hs = Gy, qy = Fy, ky = hs;
function Wy(e, r) {
  return e != null && ky(e, r, qy);
}
var Hy = Wy;
const pr = /* @__PURE__ */ Q(Hy);
var Yy = be, By = pe, Xy = "[object Number]";
function Jy(e) {
  return typeof e == "number" || By(e) && Yy(e) == Xy;
}
var Zy = Jy;
const vs = /* @__PURE__ */ Q(Zy);
var Qy = be, eg = ie, rg = pe, tg = "[object String]";
function ng(e) {
  return typeof e == "string" || !eg(e) && rg(e) && Qy(e) == tg;
}
var ig = ng;
const ys = /* @__PURE__ */ Q(ig);
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
      var c = s[e ? o : ++a];
      if (t(i[c], c, i) === !1)
        break;
    }
    return r;
  };
}
var cg = og, ug = cg, fg = ug(), gs = fg, lg = gs, dg = _r;
function pg(e, r) {
  return e && lg(e, r, dg);
}
var ms = pg, hg = De;
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
var yg = vg, gg = ms, mg = yg, $g = mg(gg), gn = $g, _g = nt, bg = ct, wg = 1, Ag = 2;
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
    var c = o[0], u = e[c], f = o[1];
    if (s && o[2]) {
      if (u === void 0 && !(c in e))
        return !1;
    } else {
      var h = new _g();
      if (n)
        var d = n(u, f, c, e, r, h);
      if (!(d === void 0 ? bg(f, u, wg | Ag, n, h) : d))
        return !1;
    }
  }
  return !0;
}
var Eg = Cg, Og = ue;
function Pg(e) {
  return e === e && !Og(e);
}
var $s = Pg, Tg = $s, Sg = _r;
function Ig(e) {
  for (var r = Sg(e), t = r.length; t--; ) {
    var n = r[t], a = e[n];
    r[t] = [n, a, Tg(a)];
  }
  return r;
}
var Ng = Ig;
function jg(e, r) {
  return function(t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
var _s = jg, xg = Eg, Rg = Ng, Mg = _s;
function Fg(e) {
  var r = Rg(e);
  return r.length == 1 && r[0][2] ? Mg(r[0][0], r[0][1]) : function(t) {
    return t === e || xg(t, e, r);
  };
}
var Dg = Fg;
function Lg(e, r) {
  return e != null && r in Object(e);
}
var zg = Lg, Kg = zg, Ug = hs;
function Vg(e, r) {
  return e != null && Ug(e, r, Kg);
}
var Gg = Vg, qg = ct, kg = Wa, Wg = Gg, Hg = cn, Yg = $s, Bg = _s, Xg = Le, Jg = 1, Zg = 2;
function Qg(e, r) {
  return Hg(e) && Yg(r) ? Bg(Xg(e), r) : function(t) {
    var n = kg(t, e);
    return n === void 0 && n === r ? Wg(t, e) : qg(r, n, Jg | Zg);
  };
}
var em = Qg;
function rm(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var tm = rm, nm = ut;
function im(e) {
  return function(r) {
    return nm(r, e);
  };
}
var am = im, sm = tm, om = am, cm = cn, um = Le;
function fm(e) {
  return cm(e) ? sm(um(e)) : om(e);
}
var lm = fm, dm = Dg, pm = em, hm = Ar, vm = ie, ym = lm;
function gm(e) {
  return typeof e == "function" ? e : e == null ? hm : typeof e == "object" ? vm(e) ? pm(e[0], e[1]) : dm(e) : ym(e);
}
var mn = gm;
function mm(e, r, t, n, a) {
  return a(e, function(i, s, o) {
    t = n ? (n = !1, i) : r(t, i, s, o);
  }), t;
}
var $m = mm, _m = sg, bm = gn, wm = mn, Am = $m, Cm = ie;
function Em(e, r, t) {
  var n = Cm(e) ? _m : Am, a = arguments.length < 3;
  return n(e, wm(r), t, a, bm);
}
var Om = Em;
const Pm = /* @__PURE__ */ Q(Om);
var Tm = Ar;
function Sm(e) {
  return typeof e == "function" ? e : Tm;
}
var bs = Sm, Im = /\s/;
function Nm(e) {
  for (var r = e.length; r-- && Im.test(e.charAt(r)); )
    ;
  return r;
}
var jm = Nm, xm = jm, Rm = /^\s+/;
function Mm(e) {
  return e && e.slice(0, xm(e) + 1).replace(Rm, "");
}
var Fm = Mm, Dm = Fm, Vi = ue, Lm = nr, Gi = NaN, zm = /^[-+]0x[0-9a-f]+$/i, Km = /^0b[01]+$/i, Um = /^0o[0-7]+$/i, Vm = parseInt;
function Gm(e) {
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
  var t = Km.test(e);
  return t || Um.test(e) ? Vm(e.slice(2), t ? 2 : 8) : zm.test(e) ? Gi : +e;
}
var qm = Gm, km = qm, qi = 1 / 0, Wm = 17976931348623157e292;
function Hm(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = km(e), e === qi || e === -qi) {
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
var Jm = Xm, Zm = Ra, Qm = bs, e$ = Jm, r$ = 9007199254740991, Tt = 4294967295, t$ = Math.min;
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
const ws = /* @__PURE__ */ Q(i$);
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
function a$(e, r, t, n, a) {
  if (r === void 0)
    return 0;
  const i = As(r, t, a);
  if (vs(i))
    return i;
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    if (a && pr(o, [ye, a])) {
      const c = Z(r, a), u = Z(o, [ye, a], {});
      if (e.isValid(u, c, n))
        return s;
    } else if (o[ye]) {
      const c = {
        anyOf: Object.keys(o[ye]).map((f) => ({
          required: [f]
        }))
      };
      let u;
      if (o.anyOf) {
        const { ...f } = o;
        f.allOf ? f.allOf = f.allOf.slice() : f.allOf = [], f.allOf.push(c), u = f;
      } else
        u = Object.assign({}, o, c);
      if (delete u.required, e.isValid(u, r, n))
        return s;
    } else if (e.isValid(o, r, n))
      return s;
  }
  return 0;
}
function Cs(e, r, t, n, a) {
  return a$(e, r, t, n, a);
}
var s$ = ct;
function o$(e, r) {
  return s$(e, r);
}
var $n = o$;
const c$ = /* @__PURE__ */ Q($n);
var u$ = pn, f$ = wr, l$ = st, ki = ue, d$ = Le;
function p$(e, r, t, n) {
  if (!ki(e))
    return e;
  r = f$(r, e);
  for (var a = -1, i = r.length, s = i - 1, o = e; o != null && ++a < i; ) {
    var c = d$(r[a]), u = t;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (a != s) {
      var f = o[c];
      u = n ? n(f, c, o) : void 0, u === void 0 && (u = ki(f) ? f : l$(r[a + 1]) ? [] : {});
    }
    u$(o, c, u), o = o[c];
  }
  return e;
}
var Es = p$, h$ = Es;
function v$(e, r, t) {
  return e == null ? e : h$(e, r, t);
}
var y$ = v$;
const Gt = /* @__PURE__ */ Q(y$);
var g$ = ln, m$ = rs, $$ = ms, _$ = mn, b$ = Jr, w$ = ie, A$ = rr, C$ = et, E$ = ue, O$ = $r;
function P$(e, r, t) {
  var n = w$(e), a = n || A$(e) || O$(e);
  if (r = _$(r), t == null) {
    var i = e && e.constructor;
    a ? t = n ? new i() : [] : E$(e) ? t = C$(i) ? m$(b$(e)) : {} : t = {};
  }
  return (a ? g$ : $$)(e, function(s, o, c) {
    return r(t, s, o, c);
  }), t;
}
var T$ = P$;
const S$ = /* @__PURE__ */ Q(T$);
var I$ = dn, N$ = Xe;
function j$(e, r, t) {
  (t !== void 0 && !N$(e[r], t) || t === void 0 && !(r in e)) && I$(e, r, t);
}
var Os = j$, x$ = De, R$ = pe;
function M$(e) {
  return R$(e) && x$(e);
}
var pt = M$;
function F$(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
var Ps = F$, D$ = ir, L$ = ar;
function z$(e) {
  return D$(e, L$(e));
}
var K$ = z$, Wi = Os, U$ = Ja, V$ = es, G$ = lt, q$ = ts, Hi = mr, Yi = ie, k$ = pt, W$ = rr, H$ = et, Y$ = ue, B$ = Be, X$ = $r, Bi = Ps, J$ = K$;
function Z$(e, r, t, n, a, i, s) {
  var o = Bi(e, t), c = Bi(r, t), u = s.get(c);
  if (u) {
    Wi(e, t, u);
    return;
  }
  var f = i ? i(o, c, t + "", e, r, s) : void 0, h = f === void 0;
  if (h) {
    var d = Yi(c), v = !d && W$(c), g = !d && !v && X$(c);
    f = c, d || v || g ? Yi(o) ? f = o : k$(o) ? f = G$(o) : v ? (h = !1, f = U$(c, !0)) : g ? (h = !1, f = V$(c, !0)) : f = [] : B$(c) || Hi(c) ? (f = o, Hi(o) ? f = J$(o) : (!Y$(o) || H$(o)) && (f = q$(c))) : h = !1;
  }
  h && (s.set(c, f), a(f, c, n, i, s), s.delete(c)), Wi(e, t, f);
}
var Q$ = Z$, e_ = nt, r_ = Os, t_ = gs, n_ = Q$, i_ = ue, a_ = ar, s_ = Ps;
function Ts(e, r, t, n, a) {
  e !== r && t_(r, function(i, s) {
    if (a || (a = new e_()), i_(i))
      n_(e, r, s, t, Ts, n, a);
    else {
      var o = n ? n(s_(e, s), i, s + "", e, r, a) : void 0;
      o === void 0 && (o = i), r_(e, s, o);
    }
  }, a_);
}
var _n = Ts, o_ = Ar, c_ = fs, u_ = ls;
function f_(e, r) {
  return u_(c_(e, r, o_), e + "");
}
var Te = f_, l_ = Xe, d_ = De, p_ = st, h_ = ue;
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
var Ss = m_, $_ = _n, __ = Ss, b_ = __(function(e, r, t) {
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
var S_ = T_;
function I_(e) {
  return e !== e;
}
var N_ = I_;
function j_(e, r, t) {
  for (var n = t - 1, a = e.length; ++n < a; )
    if (e[n] === r)
      return n;
  return -1;
}
var x_ = j_, R_ = S_, M_ = N_, F_ = x_;
function D_(e, r, t) {
  return r === r ? F_(e, r, t) : R_(e, M_, t);
}
var Is = D_, L_ = Is;
function z_(e, r) {
  var t = e == null ? 0 : e.length;
  return !!t && L_(e, r, 0) > -1;
}
var An = z_;
function K_(e, r, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (t(r, e[n]))
      return !0;
  return !1;
}
var Cn = K_;
function U_() {
}
var V_ = U_, St = za, G_ = V_, q_ = tn, k_ = 1 / 0, W_ = St && 1 / q_(new St([, -0]))[1] == k_ ? function(e) {
  return new St(e);
} : G_, H_ = W_, Y_ = it, B_ = An, X_ = Cn, J_ = at, Z_ = H_, Q_ = tn, e4 = 200;
function r4(e, r, t) {
  var n = -1, a = B_, i = e.length, s = !0, o = [], c = o;
  if (t)
    s = !1, a = X_;
  else if (i >= e4) {
    var u = r ? null : Z_(e);
    if (u)
      return Q_(u);
    s = !1, a = J_, c = new Y_();
  } else
    c = r ? [] : o;
  e:
    for (; ++n < i; ) {
      var f = e[n], h = r ? r(f) : f;
      if (f = t || f !== 0 ? f : 0, s && h === h) {
        for (var d = c.length; d--; )
          if (c[d] === h)
            continue e;
        r && c.push(h), o.push(f);
      } else a(c, h, t) || (c !== o && c.push(h), o.push(f));
    }
  return o;
}
var En = r4, t4 = En;
function n4(e) {
  return e && e.length ? t4(e) : [];
}
var ht = n4;
const i4 = /* @__PURE__ */ Q(ht);
var a4 = ss, s4 = 1, o4 = 4;
function c4(e) {
  return a4(e, s4 | o4);
}
var Ns = c4;
const u4 = /* @__PURE__ */ Q(Ns);
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
var v4 = h4, Xi = nr;
function y4(e, r) {
  if (e !== r) {
    var t = e !== void 0, n = e === null, a = e === e, i = Xi(e), s = r !== void 0, o = r === null, c = r === r, u = Xi(r);
    if (!o && !u && !i && e > r || i && s && c && !o && !u || n && s && c || !t && c || !a)
      return 1;
    if (!n && !i && !u && e < r || u && t && a && !n && !i || o && t && a || !s && a || !c)
      return -1;
  }
  return 0;
}
var g4 = y4, m4 = g4;
function $4(e, r, t) {
  for (var n = -1, a = e.criteria, i = r.criteria, s = a.length, o = t.length; ++n < s; ) {
    var c = m4(a[n], i[n]);
    if (c) {
      if (n >= o)
        return c;
      var u = t[n];
      return c * (u == "desc" ? -1 : 1);
    }
  }
  return e.index - r.index;
}
var _4 = $4, It = we, b4 = ut, w4 = mn, A4 = p4, C4 = v4, E4 = Fe, O4 = _4, P4 = Ar, T4 = ie;
function S4(e, r, t) {
  r.length ? r = It(r, function(i) {
    return T4(i) ? function(s) {
      return b4(s, i.length === 1 ? i[0] : i);
    } : i;
  }) : r = [P4];
  var n = -1;
  r = It(r, E4(w4));
  var a = A4(e, function(i, s, o) {
    var c = It(r, function(u) {
      return u(i);
    });
    return { criteria: c, index: ++n, value: i };
  });
  return C4(a, function(i, s) {
    return O4(i, s, t);
  });
}
var I4 = S4, N4 = dt, j4 = I4, x4 = Te, Ji = bn, R4 = x4(function(e, r) {
  if (e == null)
    return [];
  var t = r.length;
  return t > 1 && Ji(e, r[0], r[1]) ? r = [] : t > 2 && Ji(r[0], r[1], r[2]) && (r = [r[0]]), j4(e, N4(r, 1), []);
}), js = R4, M4 = En;
function F4(e, r) {
  return r = typeof r == "function" ? r : void 0, e && e.length ? M4(e, void 0, r) : [];
}
var On = F4, D4 = Te, L4 = Xe, z4 = bn, K4 = ar, xs = Object.prototype, U4 = xs.hasOwnProperty, V4 = D4(function(e, r) {
  e = Object(e);
  var t = -1, n = r.length, a = n > 2 ? r[2] : void 0;
  for (a && z4(r[0], r[1], a) && (n = 1); ++t < n; )
    for (var i = r[t], s = K4(i), o = -1, c = s.length; ++o < c; ) {
      var u = s[o], f = e[u];
      (f === void 0 || L4(f, xs[u]) && !U4.call(e, u)) && (e[u] = i[u]);
    }
  return e;
}), G4 = V4, q4 = it, k4 = An, W4 = Cn, H4 = we, Y4 = Fe, Zi = at, B4 = Math.min;
function X4(e, r, t) {
  for (var n = t ? W4 : k4, a = e[0].length, i = e.length, s = i, o = Array(i), c = 1 / 0, u = []; s--; ) {
    var f = e[s];
    s && r && (f = H4(f, Y4(r))), c = B4(f.length, c), o[s] = !t && (r || a >= 120 && f.length >= 120) ? new q4(s && f) : void 0;
  }
  f = e[0];
  var h = -1, d = o[0];
  e:
    for (; ++h < a && u.length < c; ) {
      var v = f[h], g = r ? r(v) : v;
      if (v = t || v !== 0 ? v : 0, !(d ? Zi(d, g) : n(u, g, t))) {
        for (s = i; --s; ) {
          var b = o[s];
          if (!(b ? Zi(b, g) : n(e[s], g, t)))
            continue e;
        }
        d && d.push(g), u.push(v);
      }
    }
  return u;
}
var Rs = X4, J4 = pt;
function Z4(e) {
  return J4(e) ? e : [];
}
var Ms = Z4, Q4 = we, eb = Rs, rb = Te, tb = Ms, nb = os, ib = rb(function(e) {
  var r = nb(e), t = Q4(e, tb);
  return r = typeof r == "function" ? r : void 0, r && t.pop(), t.length && t[0] === e[0] ? eb(t, void 0, r) : [];
}), Fs = ib, ab = be, sb = pe, ob = "[object Boolean]";
function cb(e) {
  return e === !0 || e === !1 || sb(e) && ab(e) == ob;
}
var ub = cb, he = $n, fb = js, Pn = ht, Qi = On, lb = G4, db = Fs, kr = Be, Nt = ub, ea = (e) => Array.isArray(e) ? e : [e], de = (e) => e === void 0, jr = (e) => kr(e) || Array.isArray(e) ? Object.keys(e) : [], Ge = (e, r) => e.hasOwnProperty(r), ke = (e) => fb(Pn(e)), ra = (e) => de(e) || Array.isArray(e) && e.length === 0, pb = (e, r, t, n) => r && Ge(r, t) && e && Ge(e, t) && n(e[t], r[t]), jt = (e, r) => de(e) && r === 0 || de(r) && e === 0 || he(e, r), hb = (e, r) => de(e) && r === !1 || de(r) && e === !1 || he(e, r), ta = (e) => de(e) || he(e, {}) || e === !0, xr = (e) => de(e) || he(e, {}), na = (e) => de(e) || kr(e) || e === !0 || e === !1;
function ia(e, r) {
  return ra(e) && ra(r) ? !0 : he(ke(e), ke(r));
}
function vb(e, r) {
  return e = ea(e), r = ea(r), he(ke(e), ke(r));
}
function Dr(e, r, t, n) {
  var a = Pn(jr(e).concat(jr(r)));
  return xr(e) && xr(r) ? !0 : xr(e) && jr(r).length || xr(r) && jr(e).length ? !1 : a.every(function(i) {
    var s = e[i], o = r[i];
    return Array.isArray(s) && Array.isArray(o) ? he(ke(e), ke(r)) : Array.isArray(s) && !Array.isArray(o) || Array.isArray(o) && !Array.isArray(s) ? !1 : pb(e, r, i, n);
  });
}
function yb(e, r, t, n) {
  return kr(e) && kr(r) ? n(e, r) : Array.isArray(e) && Array.isArray(r) ? Dr(e, r, t, n) : he(e, r);
}
function xt(e, r, t, n) {
  var a = Qi(e, n), i = Qi(r, n), s = db(a, i, n);
  return s.length === Math.max(a.length, i.length);
}
var gb = {
  title: he,
  uniqueItems: hb,
  minLength: jt,
  minItems: jt,
  minProperties: jt,
  required: ia,
  enum: ia,
  type: vb,
  items: yb,
  anyOf: xt,
  allOf: xt,
  oneOf: xt,
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
function qt(e, r, t) {
  if (t = lb(t, {
    ignore: []
  }), ta(e) && ta(r))
    return !0;
  if (!na(e) || !na(r))
    throw new Error("Either of the values are not a JSON schema.");
  if (e === r)
    return !0;
  if (Nt(e) && Nt(r))
    return e === r;
  if (e === void 0 && r === !1 || r === void 0 && e === !1 || de(e) && !de(r) || !de(e) && de(r))
    return !1;
  var n = Pn(Object.keys(e).concat(Object.keys(r)));
  if (t.ignore.length && (n = n.filter((i) => t.ignore.indexOf(i) === -1)), !n.length)
    return !0;
  function a(i, s) {
    return qt(i, s, t);
  }
  return n.every(function(i) {
    var s = e[i], o = r[i];
    if ($b.indexOf(i) !== -1)
      return qt(s, o, t);
    var c = gb[i];
    if (c || (c = he), he(s, o))
      return !0;
    if (mb.indexOf(i) === -1 && (!Ge(e, i) && Ge(r, i) || Ge(e, i) && !Ge(r, i)))
      return s === o;
    var u = c(s, o, i, a);
    if (!Nt(u))
      throw new Error("Comparer must return true or false");
    return u;
  });
}
var Tn = qt;
function _b(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}
var Sn = Array.isArray || _b;
function bb(e) {
  return (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]") && e.valueOf() === e.valueOf();
}
var wb = bb, Ab = wb;
function Cb(e) {
  return Ab(e) && e % 1 === 0;
}
var Eb = Cb, Ob = Sn, Pb = Eb;
function Tb(e) {
  var r;
  if (!Ob(e) || (r = e.length, !r))
    return !1;
  for (var t = 0; t < r; t++)
    if (!Pb(e[t]))
      return !1;
  return !0;
}
var Ds = Tb;
function Sb(e) {
  return typeof e == "function";
}
var Ls = Sb, Ib = Sn, aa = Ds, Nb = Ls, Rr = Math.pow(2, 31) - 1;
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
function jb() {
  var e = arguments.length, r, t, n, a, i, s, o;
  for (r = new Array(e), o = 0; o < e; o++)
    r[o] = arguments[o];
  if (aa(r)) {
    if (e === 2)
      return i = r[0], s = r[1], i < 0 && (i = -i), s < 0 && (s = -s), i <= Rr && s <= Rr ? oa(i, s) : sa(i, s);
    n = r;
  } else if (Ib(r[0]))
    if (e > 1) {
      if (n = r[0], t = r[1], !Nb(t))
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
var xb = jb, ca = xb, Rb = Sn, ua = Ds, Mb = Ls;
function Fb() {
  var e = arguments.length, r, t, n, a, i, s, o;
  for (r = new Array(e), o = 0; o < e; o++)
    r[o] = arguments[o];
  if (ua(r)) {
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
  if (e < 3 && !ua(n))
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
var Db = Fb, Lb = _n, fa = ue;
function zs(e, r, t, n, a, i) {
  return fa(e) && fa(r) && (i.set(r, e), Lb(e, r, void 0, zs, i), i.delete(r)), e;
}
var zb = zs, Kb = _n, Ub = Ss, Vb = Ub(function(e, r, t, n) {
  Kb(e, r, t, n);
}), Gb = Vb, qb = us, kb = Te, Wb = zb, Hb = Gb, Yb = kb(function(e) {
  return e.push(void 0, Wb), qb(Hb, void 0, e);
}), Bb = Yb, Xb = we, Jb = Rs, Zb = Te, Qb = Ms, e3 = Zb(function(e) {
  var r = Xb(e, Qb);
  return r.length && r[0] === e[0] ? Jb(r) : [];
}), r3 = e3;
function t3(e, r, t, n) {
  for (var a = t - 1, i = e.length; ++a < i; )
    if (n(e[a], r))
      return a;
  return -1;
}
var n3 = t3, i3 = we, a3 = Is, s3 = n3, o3 = Fe, c3 = lt, u3 = Array.prototype, la = u3.splice;
function f3(e, r, t, n) {
  var a = n ? s3 : a3, i = -1, s = r.length, o = e;
  for (e === r && (r = c3(r)), t && (o = i3(e, o3(t))); ++i < s; )
    for (var c = 0, u = r[i], f = t ? t(u) : u; (c = a(o, f, c, n)) > -1; )
      o !== e && la.call(o, c, 1), la.call(e, c, 1);
  return e;
}
var l3 = f3, d3 = l3;
function p3(e, r) {
  return e && e.length && r && r.length ? d3(e, r) : e;
}
var h3 = p3, v3 = ln, y3 = gn, g3 = bs, m3 = ie;
function $3(e, r) {
  var t = m3(e) ? v3 : y3;
  return t(e, g3(r));
}
var Ks = $3, _3 = it, b3 = An, w3 = Cn, A3 = we, C3 = Fe, E3 = at, O3 = 200;
function P3(e, r, t, n) {
  var a = -1, i = b3, s = !0, o = e.length, c = [], u = r.length;
  if (!o)
    return c;
  t && (r = A3(r, C3(t))), n ? (i = w3, s = !1) : r.length >= O3 && (i = E3, s = !1, r = new _3(r));
  e:
    for (; ++a < o; ) {
      var f = e[a], h = t == null ? f : t(f);
      if (f = n || f !== 0 ? f : 0, s && h === h) {
        for (var d = u; d--; )
          if (r[d] === h)
            continue e;
        c.push(f);
      } else i(r, h, n) || c.push(f);
    }
  return c;
}
var T3 = P3, S3 = T3, I3 = Te, N3 = pt, j3 = I3(function(e, r) {
  return N3(e) ? S3(e, r) : [];
}), x3 = j3;
const R3 = vn, M3 = wn, Us = Be, F3 = ht, D3 = On, L3 = x3;
function z3(e) {
  for (const r in e)
    Vs(e, r) && Gs(e[r]) && delete e[r];
  return e;
}
const K3 = (e) => F3(M3(e.map(In))), U3 = (e, r) => e.map((t) => t && t[r]), Vs = (e, r) => Object.prototype.hasOwnProperty.call(e, r), In = (e) => Us(e) || Array.isArray(e) ? Object.keys(e) : [], V3 = (e) => e !== void 0, G3 = (e) => Us(e) || e === !0 || e === !1, Gs = (e) => !In(e).length && e !== !1 && e !== !0, q3 = (e, ...r) => L3.apply(null, [e].concat(R3(r)));
var qs = {
  allUniqueKeys: K3,
  deleteUndefinedProps: z3,
  getValues: U3,
  has: Vs,
  isEmptySchema: Gs,
  isSchema: G3,
  keys: In,
  notUndefined: V3,
  uniqWith: D3,
  withoutArr: q3
};
const k3 = Tn, W3 = Ks, {
  allUniqueKeys: H3,
  deleteUndefinedProps: Y3,
  getValues: B3,
  keys: dr,
  notUndefined: X3,
  uniqWith: J3,
  withoutArr: da
} = qs;
function Z3(e) {
  W3(e, function(r, t) {
    r === !1 && delete e[t];
  });
}
function pa(e, r) {
  return H3(e).reduce(function(n, a) {
    const i = B3(e, a), s = J3(i.filter(X3), k3);
    return n[a] = r(s, a), n;
  }, {});
}
var Q3 = {
  keywords: ["properties", "patternProperties", "additionalProperties"],
  resolver(e, r, t, n) {
    n.ignoreAdditionalProperties || (e.forEach(function(i) {
      const s = e.filter((f) => f !== i), o = dr(i.properties), u = dr(i.patternProperties).map((f) => new RegExp(f));
      s.forEach(function(f) {
        const h = dr(f.properties), d = h.filter((g) => u.some((b) => b.test(g)));
        da(h, o, d).forEach(function(g) {
          f.properties[g] = t.properties([
            f.properties[g],
            i.additionalProperties
          ], g);
        });
      });
    }), e.forEach(function(i) {
      const s = e.filter((c) => c !== i), o = dr(i.patternProperties);
      i.additionalProperties === !1 && s.forEach(function(c) {
        const u = dr(c.patternProperties);
        da(u, o).forEach((h) => delete c.patternProperties[h]);
      });
    }));
    const a = {
      additionalProperties: t.additionalProperties(e.map((i) => i.additionalProperties)),
      patternProperties: pa(e.map((i) => i.patternProperties), t.patternProperties),
      properties: pa(e.map((i) => i.properties), t.properties)
    };
    return a.additionalProperties === !1 && Z3(a.properties), Y3(a);
  }
};
const e9 = Tn, r9 = Ks, {
  allUniqueKeys: t9,
  deleteUndefinedProps: n9,
  has: i9,
  isSchema: ks,
  notUndefined: Ws,
  uniqWith: a9
} = qs;
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
        if (ks(n))
          return n;
        if (i9(t, "additionalItems"))
          return t.additionalItems;
      } else
        return t.items;
  });
}
function c9(e) {
  return e.map(function(r) {
    if (r)
      return Array.isArray(r.items) ? r.additionalItems : r.items;
  });
}
function u9(e, r, t) {
  return t9(t).reduce(function(a, i) {
    const s = o9(e, i), o = a9(s.filter(Ws), e9);
    return a[i] = r(o, i), a;
  }, []);
}
var f9 = {
  keywords: ["items", "additionalItems"],
  resolver(e, r, t) {
    const n = e.map((o) => o.items), a = n.filter(Ws), i = {};
    a.every(ks) ? i.items = t.items(n) : i.items = u9(e, t.items, n);
    let s;
    return a.every(Array.isArray) ? s = e.map((o) => o.additionalItems) : a.some(Array.isArray) && (s = c9(e)), s && (i.additionalItems = t.additionalItems(s)), i.additionalItems === !1 && Array.isArray(i.items) && s9(i.items), n9(i);
  }
};
const Hs = Ns, Wr = Tn, l9 = Db, d9 = Bb, Ys = vn, Nn = wn, p9 = r3, h9 = Fs, kt = $n, We = Be, v9 = h3, Bs = js, jn = ht, qe = On, Xs = Q3, Js = f9, Mr = (e, r) => e.indexOf(r) !== -1, y9 = (e) => We(e) || e === !0 || e === !1, g9 = (e) => e === !1, Zs = (e) => e === !0, vt = (e, r, t) => t(e), Qs = (e) => Bs(jn(Nn(e))), Hr = (e) => e !== void 0, eo = (e) => jn(Nn(e.map(A9))), sr = (e) => e[0], m9 = (e) => Qs(e), Cr = (e) => Math.max.apply(Math, e), Er = (e) => Math.min.apply(Math, e), $9 = (e) => e.some(Zs), _9 = (e) => qe(Ys(e), kt);
function b9(e) {
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
function C9(e, r, t, n, a, i) {
  if (e.length) {
    const s = a.complexResolvers[r];
    if (!s || !s.resolver)
      throw new Error("No resolver found for " + r);
    const o = t.map((h) => e.reduce((d, v) => (h[v] !== void 0 && (d[v] = h[v]), d), {})), c = qe(o, Wr), u = s.keywords.reduce((h, d) => ({
      ...h,
      [d]: (v, g = []) => n(v, null, i.concat(d, g))
    }), {}), f = s.resolver(c, i.concat(r), u, a);
    return We(f) || no(c, i.concat(r)), f;
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
], V = {
  type(e) {
    if (e.some(Array.isArray)) {
      const r = e.map(function(n) {
        return Array.isArray(n) ? n : [n];
      }), t = p9.apply(null, r);
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
      const c = o.filter(Array.isArray);
      if (c.length) {
        if (c.length === o.length)
          a[i] = Qs(o);
        else {
          const u = o.filter(y9), f = c.map(E9);
          a[i] = t(u.concat(f), i);
        }
        return a;
      }
      return o = qe(o, Wr), a[i] = t(o, i), a;
    }, {});
  },
  oneOf(e, r, t) {
    const n = Wt(Hs(e)), a = w9(n, t), i = qe(a, Wr);
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
V.examples = _9;
V.exclusiveMaximum = Er;
V.exclusiveMinimum = Cr;
V.items = Js;
V.maximum = Er;
V.maxItems = Er;
V.maxLength = Er;
V.maxProperties = Er;
V.minimum = Cr;
V.minItems = Cr;
V.minLength = Cr;
V.minProperties = Cr;
V.properties = Xs;
V.propertyNames = vt;
V.required = m9;
V.title = sr;
V.uniqueItems = $9;
const S9 = {
  properties: Xs,
  items: Js
};
function xn(e, r, t) {
  r = d9(r, {
    ignoreAdditionalProperties: !1,
    resolvers: V,
    complexResolvers: S9,
    deep: !0
  });
  const n = Object.entries(r.complexResolvers);
  function a(o, c, u) {
    o = Hs(o.filter(Hr)), u = u || [];
    const f = We(c) ? c : {};
    if (!o.length)
      return;
    if (o.some(g9))
      return !1;
    if (o.every(Zs))
      return !0;
    o = o.filter(We);
    const h = eo(o);
    if (r.deep && Mr(h, "allOf"))
      return xn({
        allOf: o
      }, r);
    const d = n.map(([v, g]) => h.filter((b) => g.keywords.includes(b)));
    return d.forEach((v) => v9(h, v)), h.forEach(function(v) {
      const g = to(o, v), b = qe(g.filter(Hr), b9(v));
      if (b.length === 1 && Mr(P9, v))
        f[v] = b[0].map((_) => a([_], _));
      else if (b.length === 1 && !Mr(O9, v) && !Mr(T9, v))
        f[v] = b[0];
      else {
        const _ = r.resolvers[v] || r.resolvers.defaultResolver;
        if (!_) throw new Error("No resolver found for key " + v + ". You can provide a resolver for this keyword in the options, or provide a default resolver.");
        const m = ($, P = []) => a($, null, u.concat(v, P));
        f[v] = _(b, u.concat(v), m, r), f[v] === void 0 ? no(b, u.concat(v)) : f[v] === void 0 && delete f[v];
      }
    }), n.reduce((v, [g, b], _) => ({
      ...v,
      ...C9(d[_], g, o, a, r, u)
    }), f);
  }
  const i = Nn(ro(e));
  return a(i);
}
xn.options = {
  resolvers: V
};
var I9 = xn;
const N9 = /* @__PURE__ */ Q(I9);
function Yr(e) {
  let r;
  const t = Z(e, "discriminator.propertyName", void 0);
  return ys(t) ? r = t : t !== void 0 && console.warn(`Expecting discriminator to be a string, got "${typeof t}" instead`), r;
}
function yr(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : e == null ? "null" : typeof e == "boolean" ? "boolean" : isNaN(e) ? typeof e == "object" ? "object" : "string" : "number";
}
var j9 = dt, x9 = Te, R9 = En, M9 = pt, F9 = x9(function(e) {
  return R9(j9(e, 1, M9, !0));
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
function z9(e, r, t, n, a, i, s) {
  const { if: o, then: c, else: u, ...f } = r, h = e.isValid(o, i || {}, t);
  let d = [f], v = [];
  if (n)
    c && typeof c != "boolean" && (v = v.concat(ge(e, c, t, i, n, a, s))), u && typeof u != "boolean" && (v = v.concat(ge(e, u, t, i, n, a, s)));
  else {
    const g = h ? c : u;
    g && typeof g != "boolean" && (v = v.concat(ge(e, g, t, i, n, a, s)));
  }
  return v.length && (d = v.map((g) => Pe(f, g))), d.flatMap((g) => ge(e, g, t, i, n, a, s));
}
function io(e) {
  return e.reduce(
    (t, n) => n.length > 1 ? n.flatMap((a) => ws(t.length, (i) => [...t[i]].concat(a))) : (t.forEach((a) => a.push(n[0])), t),
    [[]]
    // Start with an empty list
  );
}
function K9(e, r, t, n, a, i, s) {
  const o = ao(e, r, t, n, a, i);
  if (o.length > 1 || o[0] !== r)
    return o;
  if (Aa in r)
    return so(e, r, t, n, a, i).flatMap((u) => ge(e, u, t, i, n, a, s));
  if (Zt in r && Array.isArray(r.allOf)) {
    const c = r.allOf.map((f) => ge(e, f, t, i, n, a, s));
    return io(c).map((f) => ({ ...r, allOf: f }));
  }
  return [r];
}
function ao(e, r, t, n, a, i, s) {
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
    t.push(a), n = { ...ps(a, r), ...i };
  }
  if (ye in n) {
    const a = [], i = S$(n[ye], (s, o, c) => {
      const u = [...t];
      s[c] = gr(o, r, u), a.push(u);
    }, {});
    A_(t, i4(P_(a))), n = { ...n, [ye]: i };
  }
  return Bo in n && !Array.isArray(n.items) && typeof n.items != "boolean" && (n = {
    ...n,
    items: gr(n.items, r, t)
  }), c$(e, n) ? e : n;
}
function U9(e, r, t, n) {
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
    } : o = { type: yr(Z(i, [s])) } : o = { type: yr(Z(i, [s])) }, a.properties[s] = o, Gt(a.properties, [s, wa], !0);
  }), a;
}
function ge(e, r, t, n, a = !1, i = [], s) {
  return J(r) ? K9(e, r, t, a, i, n).flatMap((c) => {
    var u;
    let f = c;
    if (Yo in f)
      return z9(e, f, t, a, i, n, s);
    if (Zt in f) {
      if (a) {
        const { allOf: d, ...v } = f;
        return [...d, v];
      }
      try {
        const d = [], v = [];
        (u = f.allOf) === null || u === void 0 || u.forEach((g) => {
          typeof g == "object" && g.contains ? d.push(g) : v.push(g);
        }), d.length && (f = { ...f, allOf: v }), f = s ? s(f) : N9(f, {
          deep: !1
        }), d.length && (f.allOf = d);
      } catch (d) {
        console.warn(`could not merge subschemas in allOf:
`, d);
        const { allOf: v, ...g } = f;
        return g;
      }
    }
    return Wo in f && f.additionalProperties !== !1 ? U9(e, f, t, n) : f;
  }) : [{}];
}
function V9(e, r, t, n, a) {
  let i;
  const { oneOf: s, anyOf: o, ...c } = r;
  if (Array.isArray(s) ? i = s : Array.isArray(o) && (i = o), i) {
    const u = a === void 0 && n ? {} : a, f = Yr(r);
    i = i.map((d) => gr(d, t, []));
    const h = Cs(e, u, i, t, f);
    if (n)
      return i.map((d) => Pe(c, d));
    r = Pe(c, i[h]);
  }
  return [r];
}
function so(e, r, t, n, a, i, s) {
  const { dependencies: o, ...c } = r;
  return V9(e, c, t, n, i).flatMap((f) => oo(e, o, f, t, n, a, i, s));
}
function oo(e, r, t, n, a, i, s, o) {
  let c = [t];
  for (const u in r) {
    if (!a && Z(s, [u]) === void 0 || t.properties && !(u in t.properties))
      continue;
    const [f, h] = yn(u, r);
    return Array.isArray(h) ? c[0] = G9(t, h) : J(h) && (c = q9(e, t, n, u, h, a, i, s, o)), c.flatMap((d) => oo(e, f, d, n, a, i, s, o));
  }
  return c;
}
function G9(e, r) {
  if (!r)
    return e;
  const t = Array.isArray(e.required) ? Array.from(/* @__PURE__ */ new Set([...e.required, ...r])) : r;
  return { ...e, required: t };
}
function q9(e, r, t, n, a, i, s, o, c) {
  return ge(e, a, t, o, i, s, c).flatMap((f) => {
    const { oneOf: h, ...d } = f;
    if (r = Pe(r, d), h === void 0)
      return r;
    const v = h.map((b) => typeof b == "boolean" || !(me in b) ? [b] : ao(e, b, t, i, s, o));
    return io(v).flatMap((b) => k9(e, r, t, n, b, i, s, o, c));
  });
}
function k9(e, r, t, n, a, i, s, o, c) {
  const u = a.filter((f) => {
    if (typeof f == "boolean" || !f || !f.properties)
      return !1;
    const { [n]: h } = f.properties;
    if (h) {
      const d = {
        type: "object",
        properties: {
          [n]: h
        }
      };
      return e.isValid(d, o, t) || i;
    }
    return !1;
  });
  return !i && u.length !== 1 ? (console.warn("ignoring oneOf in dependencies because there isn't exactly one subschema that is valid"), [r]) : u.flatMap((f) => {
    const h = f, [d] = yn(n, h.properties), v = { ...h, properties: d };
    return ge(e, v, t, o, i, s, c).map((b) => Pe(r, b));
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
  return t && (Kr(t.properties) ? a += Pm(t.properties, (i, s, o) => {
    const c = Z(n, o);
    if (typeof s == "boolean")
      return i;
    if (pr(s, me)) {
      const u = Or(e, s, r, c);
      return i + Yt(e, r, u, c || {});
    }
    if ((pr(s, hr) || pr(s, Lr)) && c) {
      const u = pr(s, hr) ? hr : Lr, f = Yr(s);
      return i + Bt(e, r, c, Z(s, u), -1, f);
    }
    if (s.type === "object")
      return Kr(c) && (i += 1), i + Yt(e, r, s, c);
    if (s.type === yr(c)) {
      let u = i + 1;
      return s.default ? u += c === s.default ? 1 : -1 : s.const && (u += c === s.const ? 1 : -1), u;
    }
    return i;
  }, 0) : ys(t.type) && t.type === yr(n) && (a += 1)), a;
}
function Bt(e, r, t, n, a = -1, i) {
  const s = n.map((h) => gr(h, r, [])), o = As(t, n, i);
  if (vs(o))
    return o;
  const c = s.reduce((h, d, v) => (Cs(e, t, [W9, d], r, i) === 1 && h.push(v), h), []);
  if (c.length === 1)
    return c[0];
  c.length || ws(s.length, (h) => c.push(h));
  const u = /* @__PURE__ */ new Set(), { bestIndex: f } = c.reduce((h, d) => {
    const { bestScore: v } = h, g = s[d], b = Yt(e, r, g, t);
    return u.add(b), b > v ? { bestIndex: d, bestScore: b } : h;
  }, { bestIndex: a, bestScore: 0 });
  return u.size === 1 && a >= 0 ? a : f;
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
      t === "preventDuplicates" && (o = s.reduce((c, u) => (i.includes(u) || c.push(u), c), [])), n[a] = i.concat(o);
    } else
      n[a] = s;
    return n;
  }, Object.assign({}, e));
}
function co(e) {
  return Array.isArray(e.enum) && e.enum.length === 1 || zr in e;
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
function ha(e, r, t, n, a, i = [], s = {}, o = !1) {
  const { emptyObjectFields: c = "populateAllDefaults" } = s;
  if (n || o)
    e[r] = t;
  else if (c !== "skipDefaults")
    if (J(t)) {
      const u = a === void 0 ? i.includes(r) : a;
      c === "skipEmptyDefaults" ? vr(t) || (e[r] = t) : (!vr(t) || i.includes(r)) && (u || c !== "populateRequiredDefaults") && (e[r] = t);
    } else // Store computedDefault if it's a defined primitive (e.g., true) and satisfies certain conditions
    // Condition 1: computedDefault is not undefined
    // Condition 2: If emptyObjectFields is 'populateAllDefaults' or 'skipEmptyDefaults) or if the key is a required field
    t !== void 0 && (c === "populateAllDefaults" || c === "skipEmptyDefaults" || i.includes(r)) && (e[r] = t);
}
function Oe(e, r, t = {}) {
  const { parentDefaults: n, rawFormData: a, rootSchema: i = {}, includeUndefinedValues: s = !1, _recurseList: o = [], experimental_defaultFormStateBehavior: c = void 0, experimental_customMergeAllOf: u = void 0, required: f } = t, h = J(a) ? a : {}, d = J(r) ? r : {};
  let v = n, g = null, b = o;
  if (co(d))
    v = d.const;
  else if (J(v) && J(d.default))
    v = Rn(v, d.default);
  else if (Ho in d)
    v = d.default;
  else if (me in d) {
    const m = d[me];
    o.includes(m) || (b = o.concat(m), g = ps(m, i));
  } else if (Aa in d) {
    const m = {
      ...h,
      ...va(e, d, t, v)
    };
    g = so(e, d, i, !1, [], m, u)[0];
  } else if (H9(d))
    v = d.items.map((m, $) => Oe(e, m, {
      rootSchema: i,
      includeUndefinedValues: s,
      _recurseList: o,
      experimental_defaultFormStateBehavior: c,
      parentDefaults: Array.isArray(n) ? n[$] : void 0,
      rawFormData: h,
      required: f
    }));
  else if (hr in d) {
    const { oneOf: m, ...$ } = d;
    if (m.length === 0)
      return;
    const P = Yr(d);
    g = m[Bt(e, i, vr(h) ? void 0 : h, m, 0, P)], g = Pe($, g);
  } else if (Lr in d) {
    const { anyOf: m, ...$ } = d;
    if (m.length === 0)
      return;
    const P = Yr(d);
    g = m[Bt(e, i, vr(h) ? void 0 : h, m, 0, P)], g = Pe($, g);
  }
  if (g)
    return Oe(e, g, {
      rootSchema: i,
      includeUndefinedValues: s,
      _recurseList: b,
      experimental_defaultFormStateBehavior: c,
      parentDefaults: v,
      rawFormData: h,
      required: f
    });
  v === void 0 && (v = d.default);
  const _ = va(e, d, t, v);
  return _ ?? v;
}
function X9(e, r, { rawFormData: t, rootSchema: n = {}, includeUndefinedValues: a = !1, _recurseList: i = [], experimental_defaultFormStateBehavior: s = void 0, experimental_customMergeAllOf: o = void 0, required: c } = {}, u) {
  {
    const f = J(t) ? t : {}, h = r, d = (s == null ? void 0 : s.allOf) === "populateDefaults" && Zt in h ? Or(e, h, n, f, o) : h, v = d[zr], g = Object.keys(d.properties || {}).reduce((b, _) => {
      var m;
      const $ = Z(d, [ye, _]), P = J(v) && v[_] !== void 0, I = J($) && zr in $ || P, F = Oe(e, $, {
        rootSchema: n,
        _recurseList: i,
        experimental_defaultFormStateBehavior: s,
        experimental_customMergeAllOf: o,
        includeUndefinedValues: a === !0,
        parentDefaults: Z(u, [_]),
        rawFormData: Z(f, [_]),
        required: (m = d.required) === null || m === void 0 ? void 0 : m.includes(_)
      });
      return ha(b, _, F, a, c, d.required, s, I), b;
    }, {});
    if (d.additionalProperties) {
      const b = J(d.additionalProperties) ? d.additionalProperties : {}, _ = /* @__PURE__ */ new Set();
      J(u) && Object.keys(u).filter(($) => !d.properties || !d.properties[$]).forEach(($) => _.add($));
      const m = [];
      Object.keys(f).filter(($) => !d.properties || !d.properties[$]).forEach(($) => {
        _.add($), m.push($);
      }), _.forEach(($) => {
        var P;
        const I = Oe(e, b, {
          rootSchema: n,
          _recurseList: i,
          experimental_defaultFormStateBehavior: s,
          includeUndefinedValues: a === !0,
          parentDefaults: Z(u, [$]),
          rawFormData: Z(f, [$]),
          required: (P = d.required) === null || P === void 0 ? void 0 : P.includes($)
        });
        ha(g, $, I, a, c, m);
      });
    }
    return g;
  }
}
function J9(e, r, { rawFormData: t, rootSchema: n = {}, _recurseList: a = [], experimental_defaultFormStateBehavior: i = void 0, required: s } = {}, o) {
  var c, u, f, h;
  const d = r, v = ((c = i == null ? void 0 : i.arrayMinItems) === null || c === void 0 ? void 0 : c.populate) === "never", g = ((u = i == null ? void 0 : i.arrayMinItems) === null || u === void 0 ? void 0 : u.populate) === "requiredOnly", b = (i == null ? void 0 : i.emptyObjectFields) === "skipEmptyDefaults", _ = (h = (f = i == null ? void 0 : i.arrayMinItems) === null || f === void 0 ? void 0 : f.computeSkipPopulate) !== null && h !== void 0 ? h : () => !1, m = b ? void 0 : [];
  if (Array.isArray(o) && (o = o.map((U, E) => {
    const S = Rt(d, He.Fallback, E);
    return Oe(e, S, {
      rootSchema: n,
      _recurseList: a,
      experimental_defaultFormStateBehavior: i,
      parentDefaults: U,
      required: s
    });
  })), Array.isArray(t)) {
    const U = Rt(d);
    v ? o = t : o = t.map((E, S) => Oe(e, U, {
      rootSchema: n,
      _recurseList: a,
      experimental_defaultFormStateBehavior: i,
      rawFormData: E,
      parentDefaults: Z(o, [S]),
      required: s
    }));
  }
  if ((J(d) && zr in d) === !1) {
    if (v)
      return o ?? m;
    if (g && !s)
      return o || void 0;
  }
  const P = Array.isArray(o) ? o.length : 0;
  if (!d.minItems || B9(e, d, n) || _(e, d, n) || d.minItems <= P)
    return o || m;
  const I = o || [], F = Rt(d, He.Invert), ne = F.default, ae = new Array(d.minItems - P).fill(Oe(e, F, {
    parentDefaults: ne,
    rootSchema: n,
    _recurseList: a,
    experimental_defaultFormStateBehavior: i,
    required: s
  }));
  return I.concat(ae);
}
function va(e, r, t = {}, n) {
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
  const o = Or(e, r, n, t, s), c = Oe(e, o, {
    rootSchema: n,
    includeUndefinedValues: a,
    experimental_defaultFormStateBehavior: i,
    experimental_customMergeAllOf: s,
    rawFormData: t
  });
  if (t == null || typeof t == "number" && isNaN(t))
    return c;
  const { mergeDefaultsIntoFormData: u, arrayMinItems: f = {} } = {}, { mergeExtraDefaults: h } = f, d = u === "useDefaultIfFormDataUndefined";
  return J(t) || Array.isArray(t) ? Br(c, t, h, d) : t;
}
var Q9 = Es;
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
var q = {};
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
function i5() {
  if (ya) return q;
  ya = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), o = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function b(_) {
    if (typeof _ == "object" && _ !== null) {
      var m = _.$$typeof;
      switch (m) {
        case e:
          switch (_ = _.type, _) {
            case t:
            case a:
            case n:
            case u:
            case f:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case o:
                case s:
                case c:
                case d:
                case h:
                case i:
                  return _;
                default:
                  return m;
              }
          }
        case r:
          return m;
      }
    }
  }
  return q.ContextConsumer = s, q.ContextProvider = i, q.Element = e, q.ForwardRef = c, q.Fragment = t, q.Lazy = d, q.Memo = h, q.Portal = r, q.Profiler = a, q.StrictMode = n, q.Suspense = u, q.SuspenseList = f, q.isAsyncMode = function() {
    return !1;
  }, q.isConcurrentMode = function() {
    return !1;
  }, q.isContextConsumer = function(_) {
    return b(_) === s;
  }, q.isContextProvider = function(_) {
    return b(_) === i;
  }, q.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === e;
  }, q.isForwardRef = function(_) {
    return b(_) === c;
  }, q.isFragment = function(_) {
    return b(_) === t;
  }, q.isLazy = function(_) {
    return b(_) === d;
  }, q.isMemo = function(_) {
    return b(_) === h;
  }, q.isPortal = function(_) {
    return b(_) === r;
  }, q.isProfiler = function(_) {
    return b(_) === a;
  }, q.isStrictMode = function(_) {
    return b(_) === n;
  }, q.isSuspense = function(_) {
    return b(_) === u;
  }, q.isSuspenseList = function(_) {
    return b(_) === f;
  }, q.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === t || _ === a || _ === n || _ === u || _ === f || _ === v || typeof _ == "object" && _ !== null && (_.$$typeof === d || _.$$typeof === h || _.$$typeof === i || _.$$typeof === s || _.$$typeof === c || _.$$typeof === g || _.getModuleId !== void 0);
  }, q.typeOf = b, q;
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
var ga;
function a5() {
  return ga || (ga = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), o = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, b = !1, _ = !1, m = !1, $ = !1, P;
    P = Symbol.for("react.module.reference");
    function I(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === t || N === a || $ || N === n || N === u || N === f || m || N === v || g || b || _ || typeof N == "object" && N !== null && (N.$$typeof === d || N.$$typeof === h || N.$$typeof === i || N.$$typeof === s || N.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === P || N.getModuleId !== void 0));
    }
    function F(N) {
      if (typeof N == "object" && N !== null) {
        var Ee = N.$$typeof;
        switch (Ee) {
          case e:
            var ve = N.type;
            switch (ve) {
              case t:
              case a:
              case n:
              case u:
              case f:
                return ve;
              default:
                var or = ve && ve.$$typeof;
                switch (or) {
                  case o:
                  case s:
                  case c:
                  case d:
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
    var ne = s, ae = i, U = e, E = c, S = t, D = d, z = h, W = r, ee = a, oe = n, Se = u, ze = f, Ie = !1, Ne = !1;
    function Ke(N) {
      return Ie || (Ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function je(N) {
      return Ne || (Ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ae(N) {
      return F(N) === s;
    }
    function T(N) {
      return F(N) === i;
    }
    function l(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function y(N) {
      return F(N) === c;
    }
    function A(N) {
      return F(N) === t;
    }
    function x(N) {
      return F(N) === d;
    }
    function R(N) {
      return F(N) === h;
    }
    function B(N) {
      return F(N) === r;
    }
    function Ce(N) {
      return F(N) === a;
    }
    function yt(N) {
      return F(N) === n;
    }
    function Pr(N) {
      return F(N) === u;
    }
    function gt(N) {
      return F(N) === f;
    }
    k.ContextConsumer = ne, k.ContextProvider = ae, k.Element = U, k.ForwardRef = E, k.Fragment = S, k.Lazy = D, k.Memo = z, k.Portal = W, k.Profiler = ee, k.StrictMode = oe, k.Suspense = Se, k.SuspenseList = ze, k.isAsyncMode = Ke, k.isConcurrentMode = je, k.isContextConsumer = Ae, k.isContextProvider = T, k.isElement = l, k.isForwardRef = y, k.isFragment = A, k.isLazy = x, k.isMemo = R, k.isPortal = B, k.isProfiler = Ce, k.isStrictMode = yt, k.isSuspense = Pr, k.isSuspenseList = gt, k.isValidElementType = I, k.typeOf = F;
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
var c5 = we, u5 = lt, f5 = ie, l5 = nr, d5 = Ga, p5 = Le, h5 = ka;
function v5(e) {
  return f5(e) ? c5(e, p5) : l5(e) ? [e] : u5(d5(h5(e)));
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
function uo(e) {
  return Object.keys(e).reduce((r, t) => {
    if (t === "addError")
      return r;
    {
      const n = e[t];
      return Qt(n) ? {
        ...r,
        [t]: uo(n)
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
    r === me && typeof n == "string" && n.startsWith("#") ? t[r] = Ca + n : t[r] = Fn(n);
  }
  return e;
}
function b5(e) {
  for (let r = 0; r < e.length; r++)
    e[r] = Fn(e[r]);
  return e;
}
function Fn(e) {
  return Array.isArray(e) ? b5([...e]) : Kr(e) ? _5({ ...e }) : e;
}
var ma;
(function(e) {
  e.ArrayItemTitle = "Item", e.MissingItems = "Missing items definition", e.YesLabel = "Yes", e.NoLabel = "No", e.CloseLabel = "Close", e.ErrorsLabel = "Errors", e.NewStringDefault = "New Value", e.AddButton = "Add", e.AddItemButton = "Add Item", e.CopyButton = "Copy", e.MoveDownButton = "Move down", e.MoveUpButton = "Move up", e.RemoveButton = "Remove", e.NowLabel = "Now", e.ClearLabel = "Clear", e.AriaDateLabel = "Select a date", e.PreviewLabel = "Preview", e.DecrementAriaLabel = "Decrease value by 1", e.IncrementAriaLabel = "Increase value by 1", e.UnknownFieldType = "Unknown field type %1", e.OptionPrefix = "Option %1", e.TitleOptionPrefix = "%1 option %2", e.KeyLabel = "%1 Key", e.InvalidObjectField = 'Invalid "%1" object field configuration: _%2_.', e.UnsupportedField = "Unsupported field schema.", e.UnsupportedFieldWithId = "Unsupported field schema for field `%1`.", e.UnsupportedFieldWithReason = "Unsupported field schema: _%1_.", e.UnsupportedFieldWithIdAndReason = "Unsupported field schema for field `%1`: _%2_.", e.FilesInfo = "**%1** (%2, %3 bytes)";
})(ma || (ma = {}));
var Xt = { exports: {} }, fo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
  function r(E, S) {
    return { validate: E, compare: S };
  }
  e.fullFormats = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: r(i, s),
    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
    time: r(c, u),
    "date-time": r(h, d),
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
    regex: U,
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
    byte: m,
    // signed 32 bit integer
    int32: { type: "number", validate: I },
    // signed 64 bit integer
    int64: { type: "number", validate: F },
    // C-type float
    float: { type: "number", validate: ne },
    // C-type double
    double: { type: "number", validate: ne },
    // hint to the UI to hide input strings
    password: !0,
    // unchecked string payload
    binary: !0
  }, e.fastFormats = {
    ...e.fullFormats,
    date: r(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, s),
    time: r(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, u),
    "date-time": r(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, d),
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
    const S = n.exec(E);
    if (!S)
      return !1;
    const D = +S[1], z = +S[2], W = +S[3];
    return z >= 1 && z <= 12 && W >= 1 && W <= (z === 2 && t(D) ? 29 : a[z]);
  }
  function s(E, S) {
    if (E && S)
      return E > S ? 1 : E < S ? -1 : 0;
  }
  const o = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
  function c(E, S) {
    const D = o.exec(E);
    if (!D)
      return !1;
    const z = +D[1], W = +D[2], ee = +D[3], oe = D[5];
    return (z <= 23 && W <= 59 && ee <= 59 || z === 23 && W === 59 && ee === 60) && (!S || oe !== "");
  }
  function u(E, S) {
    if (!(E && S))
      return;
    const D = o.exec(E), z = o.exec(S);
    if (D && z)
      return E = D[1] + D[2] + D[3] + (D[4] || ""), S = z[1] + z[2] + z[3] + (z[4] || ""), E > S ? 1 : E < S ? -1 : 0;
  }
  const f = /t|\s/i;
  function h(E) {
    const S = E.split(f);
    return S.length === 2 && i(S[0]) && c(S[1], !0);
  }
  function d(E, S) {
    if (!(E && S))
      return;
    const [D, z] = E.split(f), [W, ee] = S.split(f), oe = s(D, W);
    if (oe !== void 0)
      return oe || u(z, ee);
  }
  const v = /\/|:/, g = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function b(E) {
    return v.test(E) && g.test(E);
  }
  const _ = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function m(E) {
    return _.lastIndex = 0, _.test(E);
  }
  const $ = -(2 ** 31), P = 2 ** 31 - 1;
  function I(E) {
    return Number.isInteger(E) && E <= P && E >= $;
  }
  function F(E) {
    return Number.isInteger(E);
  }
  function ne() {
    return !0;
  }
  const ae = /[^\\]\\Z/;
  function U(E) {
    if (ae.test(E))
      return !1;
    try {
      return new RegExp(E), !0;
    } catch {
      return !1;
    }
  }
})(fo);
var lo = {}, Dn = {}, Xr = {};
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
      return ($ = this._str) !== null && $ !== void 0 ? $ : this._str = this._items.reduce((P, I) => `${P}${I}`, "");
    }
    get names() {
      var $;
      return ($ = this._names) !== null && $ !== void 0 ? $ : this._names = this._items.reduce((P, I) => (I instanceof t && (P[I.str] = (P[I.str] || 0) + 1), P), {});
    }
  }
  e._Code = n, e.nil = new n("");
  function a(m, ...$) {
    const P = [m[0]];
    let I = 0;
    for (; I < $.length; )
      o(P, $[I]), P.push(m[++I]);
    return new n(P);
  }
  e._ = a;
  const i = new n("+");
  function s(m, ...$) {
    const P = [v(m[0])];
    let I = 0;
    for (; I < $.length; )
      P.push(i), o(P, $[I]), P.push(i, v(m[++I]));
    return c(P), new n(P);
  }
  e.str = s;
  function o(m, $) {
    $ instanceof n ? m.push(...$._items) : $ instanceof t ? m.push($) : m.push(h($));
  }
  e.addCodeArg = o;
  function c(m) {
    let $ = 1;
    for (; $ < m.length - 1; ) {
      if (m[$] === i) {
        const P = u(m[$ - 1], m[$ + 1]);
        if (P !== void 0) {
          m.splice($ - 1, 3, P);
          continue;
        }
        m[$++] = "+";
      }
      $++;
    }
  }
  function u(m, $) {
    if ($ === '""')
      return m;
    if (m === '""')
      return $;
    if (typeof m == "string")
      return $ instanceof t || m[m.length - 1] !== '"' ? void 0 : typeof $ != "string" ? `${m.slice(0, -1)}${$}"` : $[0] === '"' ? m.slice(0, -1) + $.slice(1) : void 0;
    if (typeof $ == "string" && $[0] === '"' && !(m instanceof t))
      return `"${m}${$.slice(1)}`;
  }
  function f(m, $) {
    return $.emptyStr() ? m : m.emptyStr() ? $ : s`${m}${$}`;
  }
  e.strConcat = f;
  function h(m) {
    return typeof m == "number" || typeof m == "boolean" || m === null ? m : v(Array.isArray(m) ? m.join(",") : m);
  }
  function d(m) {
    return new n(v(m));
  }
  e.stringify = d;
  function v(m) {
    return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = v;
  function g(m) {
    return typeof m == "string" && e.IDENTIFIER.test(m) ? new n(`.${m}`) : a`[${m}]`;
  }
  e.getProperty = g;
  function b(m) {
    if (typeof m == "string" && e.IDENTIFIER.test(m))
      return new n(`${m}`);
    throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
  }
  e.getEsmExportName = b;
  function _(m) {
    return new n(m.toString());
  }
  e.regexpCode = _;
})(Xr);
var Jt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const r = Xr;
  class t extends Error {
    constructor(u) {
      super(`CodeGen: "code" for ${u} not defined`), this.value = u.value;
    }
  }
  var n;
  (function(c) {
    c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
  })(n || (e.UsedValueState = n = {})), e.varKinds = {
    const: new r.Name("const"),
    let: new r.Name("let"),
    var: new r.Name("var")
  };
  class a {
    constructor({ prefixes: u, parent: f } = {}) {
      this._names = {}, this._prefixes = u, this._parent = f;
    }
    toName(u) {
      return u instanceof r.Name ? u : this.name(u);
    }
    name(u) {
      return new r.Name(this._newName(u));
    }
    _newName(u) {
      const f = this._names[u] || this._nameGroup(u);
      return `${u}${f.index++}`;
    }
    _nameGroup(u) {
      var f, h;
      if (!((h = (f = this._parent) === null || f === void 0 ? void 0 : f._prefixes) === null || h === void 0) && h.has(u) || this._prefixes && !this._prefixes.has(u))
        throw new Error(`CodeGen: prefix "${u}" is not allowed in this scope`);
      return this._names[u] = { prefix: u, index: 0 };
    }
  }
  e.Scope = a;
  class i extends r.Name {
    constructor(u, f) {
      super(f), this.prefix = u;
    }
    setValue(u, { property: f, itemIndex: h }) {
      this.value = u, this.scopePath = (0, r._)`.${new r.Name(f)}[${h}]`;
    }
  }
  e.ValueScopeName = i;
  const s = (0, r._)`\n`;
  class o extends a {
    constructor(u) {
      super(u), this._values = {}, this._scope = u.scope, this.opts = { ...u, _n: u.lines ? s : r.nil };
    }
    get() {
      return this._scope;
    }
    name(u) {
      return new i(u, this._newName(u));
    }
    value(u, f) {
      var h;
      if (f.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const d = this.toName(u), { prefix: v } = d, g = (h = f.key) !== null && h !== void 0 ? h : f.ref;
      let b = this._values[v];
      if (b) {
        const $ = b.get(g);
        if ($)
          return $;
      } else
        b = this._values[v] = /* @__PURE__ */ new Map();
      b.set(g, d);
      const _ = this._scope[v] || (this._scope[v] = []), m = _.length;
      return _[m] = f.ref, d.setValue(f, { property: v, itemIndex: m }), d;
    }
    getValue(u, f) {
      const h = this._values[u];
      if (h)
        return h.get(f);
    }
    scopeRefs(u, f = this._values) {
      return this._reduceValues(f, (h) => {
        if (h.scopePath === void 0)
          throw new Error(`CodeGen: name "${h}" has no value`);
        return (0, r._)`${u}${h.scopePath}`;
      });
    }
    scopeCode(u = this._values, f, h) {
      return this._reduceValues(u, (d) => {
        if (d.value === void 0)
          throw new Error(`CodeGen: name "${d}" has no value`);
        return d.value.code;
      }, f, h);
    }
    _reduceValues(u, f, h = {}, d) {
      let v = r.nil;
      for (const g in u) {
        const b = u[g];
        if (!b)
          continue;
        const _ = h[g] = h[g] || /* @__PURE__ */ new Map();
        b.forEach((m) => {
          if (_.has(m))
            return;
          _.set(m, n.Started);
          let $ = f(m);
          if ($) {
            const P = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            v = (0, r._)`${v}${P} ${m} = ${$};${this.opts._n}`;
          } else if ($ = d == null ? void 0 : d(m))
            v = (0, r._)`${v}${$}${this.opts._n}`;
          else
            throw new t(m);
          _.set(m, n.Completed);
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
  class c extends o {
    constructor(l, y, A, x) {
      super(l, A, x), this.op = y;
    }
    render({ _n: l }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + l;
    }
  }
  class u extends i {
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
  class d extends i {
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
        R.optimizeNames(l, y) || (oe(l, R.names), A.splice(x, 1));
      }
      return A.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((l, y) => z(l, y.names), {});
    }
  }
  class g extends v {
    render(l) {
      return "{" + l._n + super.render(l) + "}" + l._n;
    }
  }
  class b extends v {
  }
  class _ extends g {
  }
  _.kind = "else";
  class m extends g {
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
        return l === !1 ? y instanceof m ? y : y.nodes : this.nodes.length ? this : new m(Se(l), y instanceof m ? [y] : y.nodes);
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
      return W(l, this.condition), this.else && z(l, this.else.names), l;
    }
  }
  m.kind = "if";
  class $ extends g {
  }
  $.kind = "for";
  class P extends $ {
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
      return z(super.names, this.iteration.names);
    }
  }
  class I extends $ {
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
  class F extends $ {
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
      return z(super.names, this.iterable.names);
    }
  }
  class ne extends g {
    constructor(l, y, A) {
      super(), this.name = l, this.args = y, this.async = A;
    }
    render(l) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(l);
    }
  }
  ne.kind = "func";
  class ae extends v {
    render(l) {
      return "return " + super.render(l);
    }
  }
  ae.kind = "return";
  class U extends g {
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
      return this.catch && z(l, this.catch.names), this.finally && z(l, this.finally.names), l;
    }
  }
  class E extends g {
    constructor(l) {
      super(), this.error = l;
    }
    render(l) {
      return `catch(${this.error})` + super.render(l);
    }
  }
  E.kind = "catch";
  class S extends g {
    render(l) {
      return "finally" + super.render(l);
    }
  }
  S.kind = "finally";
  class D {
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
      return this._leafNode(new c(l, e.operators.ADD, y));
    }
    // appends passed SafeExpr to code or executes Block
    code(l) {
      return typeof l == "function" ? l() : l !== r.nil && this._leafNode(new d(l)), this;
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
      if (this._blockNode(new m(l)), y && A)
        this.code(y).else().code(A).endIf();
      else if (y)
        this.code(y).endIf();
      else if (A)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(l) {
      return this._elseNode(new m(l));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new _());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(m, _);
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
      return this._for(new I(R, B, y, A), () => x(B));
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
      return this._for(new F("of", x, R, y), () => A(R));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(l, y, A, x = this.opts.es5 ? t.varKinds.var : t.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(l, (0, r._)`Object.keys(${y})`, A);
      const R = this._scope.toName(l);
      return this._for(new F("in", x, R, y), () => A(R));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode($);
    }
    // `label` statement
    label(l) {
      return this._leafNode(new u(l));
    }
    // `break` statement
    break(l) {
      return this._leafNode(new f(l));
    }
    // `return` statement
    return(l) {
      const y = new ae();
      if (this._blockNode(y), this.code(l), y.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(ae);
    }
    // `try` statement
    try(l, y, A) {
      if (!y && !A)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const x = new U();
      if (this._blockNode(x), this.code(l), y) {
        const R = this.name("e");
        this._currNode = x.catch = new E(R), y(R);
      }
      return A && (this._currNode = x.finally = new S(), this.code(A)), this._endBlockNode(E, S);
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
      return this._blockNode(new ne(l, y, A)), x && this.code(x).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(ne);
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
      if (!(y instanceof m))
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
  e.CodeGen = D;
  function z(T, l) {
    for (const y in l)
      T[y] = (T[y] || 0) + (l[y] || 0);
    return T;
  }
  function W(T, l) {
    return l instanceof r._CodeOrName ? z(T, l.names) : T;
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
  function oe(T, l) {
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
    message: ({ keyword: o, schemaCode: c }) => t.str`should be ${a[o].okStr} ${c}`,
    params: ({ keyword: o, schemaCode: c }) => t._`{comparison: ${a[o].okStr}, limit: ${c}}`
  };
  e.formatLimitDefinition = {
    keyword: Object.keys(a),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: i,
    code(o) {
      const { gen: c, data: u, schemaCode: f, keyword: h, it: d } = o, { opts: v, self: g } = d;
      if (!v.validateFormats)
        return;
      const b = new r.KeywordCxt(d, g.RULES.all.format.definition, "format");
      b.$data ? _() : m();
      function _() {
        const P = c.scopeValue("formats", {
          ref: g.formats,
          code: v.code.formats
        }), I = c.const("fmt", t._`${P}[${b.schemaCode}]`);
        o.fail$data(t.or(t._`typeof ${I} != "object"`, t._`${I} instanceof RegExp`, t._`typeof ${I}.compare != "function"`, $(I)));
      }
      function m() {
        const P = b.schema, I = g.formats[P];
        if (!I || I === !0)
          return;
        if (typeof I != "object" || I instanceof RegExp || typeof I.compare != "function")
          throw new Error(`"${h}": format "${P}" does not define "compare" function`);
        const F = c.scopeValue("formats", {
          key: P,
          ref: I,
          code: v.code.formats ? t._`${v.code.formats}${t.getProperty(P)}` : void 0
        });
        o.fail$data($(F));
      }
      function $(P) {
        return t._`${P}.compare(${u}, ${f}) ${a[h].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  const s = (o) => (o.addKeyword(e.formatLimitDefinition), o);
  e.default = s;
})(lo);
(function(e, r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const t = fo, n = lo, a = Dn, i = new a.Name("fullFormats"), s = new a.Name("fastFormats"), o = (u, f = { keywords: !0 }) => {
    if (Array.isArray(f))
      return c(u, f, t.fullFormats, i), u;
    const [h, d] = f.mode === "fast" ? [t.fastFormats, s] : [t.fullFormats, i], v = f.formats || t.formatNames;
    return c(u, v, h, d), f.keywords && n.default(u), u;
  };
  o.get = (u, f = "full") => {
    const d = (f === "fast" ? t.fastFormats : t.fullFormats)[u];
    if (!d)
      throw new Error(`Unknown format "${u}"`);
    return d;
  };
  function c(u, f, h, d) {
    var v, g;
    (v = (g = u.opts.code).formats) !== null && v !== void 0 || (g.formats = a._`require("ajv-formats/dist/formats").${d}`);
    for (const b of f)
      u.addFormat(b, h[b]);
  }
  e.exports = r = o, Object.defineProperty(r, "__esModule", { value: !0 }), r.default = o;
})(Xt, Xt.exports);
var w5 = Xt.exports;
const $a = /* @__PURE__ */ Q(w5), A5 = {
  allErrors: !0,
  multipleOfPrecision: 8,
  strict: !1,
  verbose: !0,
  discriminator: !1
  // TODO enable this in V6
}, C5 = /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/, E5 = /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/;
function O5(e, r, t = {}, n, a = ba) {
  const i = new a({ ...A5, ...t });
  return n ? $a(i, n) : n !== !1 && $a(i), i.addFormat("data-url", E5), i.addFormat("color", C5), i.addKeyword(wa), i.addKeyword(Zo), Array.isArray(e) && i.addMetaSchema(e), Kr(r) && Object.keys(r).forEach((s) => {
    i.addFormat(s, r[s]);
  }), i;
}
function P5(e = [], r) {
  return e.map((t) => {
    const { instancePath: n, keyword: a, params: i, schemaPath: s, parentSchema: o, ...c } = t;
    let { message: u = "" } = c, f = n.replace(/\//g, "."), h = `${f} ${u}`.trim();
    if ("missingProperty" in i) {
      f = f ? `${f}.${i.missingProperty}` : i.missingProperty;
      const d = i.missingProperty, v = Zn(Z(r, `${f.replace(/^\./, "")}`)).title;
      if (v)
        u = u.replace(d, v);
      else {
        const g = Z(o, [ye, d, "title"]);
        g && (u = u.replace(d, g));
      }
      h = u;
    } else {
      const d = Zn(Z(r, `${f.replace(/^\./, "")}`)).title;
      if (d)
        h = `'${d}' ${u}`.trim();
      else {
        const v = o == null ? void 0 : o.title;
        v && (h = `'${v}' ${u}`.trim());
      }
    }
    return {
      name: a,
      property: f,
      message: u,
      params: i,
      stack: h,
      schemaPath: s
    };
  });
}
function T5(e, r, t, n, a, i, s) {
  const { validationError: o } = r;
  let c = P5(r.errors, s);
  o && (c = [...c, { stack: o.message }]), typeof i == "function" && (c = i(c, s));
  let u = m5(c);
  if (o && (u = {
    ...u,
    $schema: {
      __errors: [o.message]
    }
  }), typeof a != "function")
    return { errors: c, errorSchema: u };
  const f = Z9(e, n, t, n, !0), h = a(f, Dt(f), s), d = uo(h);
  return $5({ errors: c, errorSchema: u }, d);
}
class S5 {
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
    const a = (t = r[Ir]) !== null && t !== void 0 ? t : Ca;
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
  return new S5(e, r);
}
const Mt = I5(), N5 = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  schema: a,
  uiSchema: i,
  formContext: s
}) => {
  var d, v;
  const o = a.oneOf ? a.oneOf.map((g) => ({
    value: g.const,
    label: g.title || g.const
  })) : [
    { value: !0, label: "True" },
    { value: !1, label: "False" }
  ], c = (i == null ? void 0 : i["ui:title"]) || a.title, u = (d = s == null ? void 0 : s.errors) == null ? void 0 : d[e], f = (v = u == null ? void 0 : u.__errors) == null ? void 0 : v[0], h = !!f;
  return /* @__PURE__ */ C.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ C.jsxs(
      M.label,
      {
        htmlFor: e,
        className: `block text-2xl font-bold mb-2 transition-colors duration-300 ${h ? "text-red-500" : "text-gray-700"}`,
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3 },
        children: [
          c,
          " ",
          t && /* @__PURE__ */ C.jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ C.jsx(
      M.div,
      {
        className: "space-y-2",
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.3, delay: 0.1 },
        children: o.map((g) => /* @__PURE__ */ C.jsxs("label", { className: "flex items-center", children: [
          /* @__PURE__ */ C.jsx(
            "input",
            {
              type: "radio",
              id: `${e}-${g.value}`,
              name: e,
              value: g.value.toString(),
              checked: r === g.value,
              onChange: () => n(g.value),
              className: "form-radio h-4 w-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ C.jsx("span", { className: "ml-2 text-lg", children: g.label })
        ] }, g.value.toString()))
      }
    ),
    h && /* @__PURE__ */ C.jsx(
      M.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: f
      }
    )
  ] });
}, K5 = ({
  schema: e,
  handleSubmit: r,
  handleTimeSpent: t
}) => {
  const [n, a] = fe(-1), [i, s] = fe({}), o = Object.keys(e.properties || {}), c = o[n], u = o.length + 1, [f, h] = fe(void 0), [d, v] = fe(!0), [g, b] = fe(Date.now()), [_, m] = fe(
    {}
  );
  Ct(() => {
    n >= 0 && n < o.length ? v(P()) : v(!0);
  }, [n, i]), Ct(() => {
    n >= 0 && n < o.length && b(Date.now());
  }, [n]);
  const $ = () => {
    if (n === -1) {
      a(0);
      return;
    }
    if (!P()) {
      v(!1);
      return;
    }
    if (n >= 0 && n < o.length) {
      const E = Math.round((Date.now() - g) / 1e3);
      m((S) => ({
        ...S,
        [c]: (S[c] || 0) + E
      }));
    }
    if (n === u - 2) {
      const E = Math.round((Date.now() - g) / 1e3), S = {
        ..._,
        [c]: (_[c] || 0) + E
      };
      r(i), t == null || t(S);
    }
    n < u - 1 && (a(n + 1), v(!0));
  };
  Ct(() => {
    const U = (S) => {
      if (S.key === "Enter") {
        if (S.preventDefault(), !d) return;
        $();
      }
    }, E = document.querySelector("form");
    return E ? (E.addEventListener("keydown", U), () => E.removeEventListener("keydown", U)) : (window.addEventListener("keydown", U), () => window.removeEventListener("keydown", U));
  }, [n, d, $]);
  const P = () => {
    var D, z, W;
    if (n === -1 || n >= o.length) return !0;
    const U = i[c], E = {
      type: "object",
      properties: {
        [c]: (D = e.properties) == null ? void 0 : D[c]
      },
      required: (z = e.required) != null && z.includes(c) ? [c] : []
    };
    return (W = e.required) != null && W.includes(c) && (U === void 0 || U === "") ? !1 : Mt.validateFormData(
      { [c]: U },
      E
    ).errors.length === 0;
  }, I = () => {
    if (n > -1) {
      if (n < o.length) {
        const U = Math.round((Date.now() - g) / 1e3);
        m((E) => ({
          ...E,
          [c]: (E[c] || 0) + U
        }));
      }
      a(n - 1);
    }
  }, F = (U) => {
    var D;
    if (s({ ...i, ...U.formData }), n === -1) return;
    const E = {
      type: "object",
      properties: {
        [c]: e.properties[c]
      },
      required: (D = e.required) != null && D.includes(c) ? [c] : []
    }, S = Mt.validateFormData(
      { [c]: U.formData[c] },
      E
    );
    v(S.errors.length === 0), h(S.errorSchema);
  }, ne = (U) => {
    var S;
    const E = (S = e.properties) == null ? void 0 : S[U];
    if (!E) return "text";
    switch (E.type) {
      case "string":
        return E.format === "email" ? "email" : E.format === "binary" ? "file" : E.enum && Array.isArray(E.enum) ? "select" : "text";
      case "integer":
      case "number":
        return "number";
      case "boolean":
        return E.oneOf ? "radio" : "checkbox";
      case "array":
        return E.items && typeof E.items == "object" && "enum" in E.items ? "select" : "multi-select";
      default:
        return "text";
    }
  }, ae = () => {
    var U, E;
    if (n === -1)
      return /* @__PURE__ */ C.jsx(R5, { onStart: $, schema: e });
    if (n === o.length)
      return /* @__PURE__ */ C.jsx(M5, {});
    {
      const S = ne(c), D = (U = e.properties) == null ? void 0 : U[c];
      let z = [];
      return D.type === "array" && D.items && typeof D.items != "boolean" && "enum" in D.items && (z = D.items.enum), /* @__PURE__ */ C.jsx(
        Mo,
        {
          schema: {
            type: "object",
            properties: {
              [c]: {
                ...D,
                title: void 0,
                // Remove RJSF's default title
                description: void 0
                // Remove RJSF's default description
              }
            },
            required: (E = e.required) != null && E.includes(c) ? [c] : []
          },
          formData: i,
          validator: Mt,
          showErrorList: !1,
          uiSchema: {
            [c]: {
              "ui:widget": S,
              "ui:title": D.title,
              // Pass title to custom widget
              "ui:description": D.description,
              "ui:options": {
                label: !1,
                // Disable RJSF's label rendering
                description: !1
                // Disable RJSF's description rendering
              },
              "ui:enumOptions": z
              // Pass enum options to the widget
            }
          },
          widgets: {
            text: zo,
            number: Ko,
            email: Uo,
            select: Vo,
            checkbox: Go,
            radio: N5,
            file: qo
          },
          formContext: { errors: f },
          onChange: F,
          children: /* @__PURE__ */ C.jsx("div", {})
        }
      );
    }
  };
  return /* @__PURE__ */ C.jsxs("div", { className: "fixed inset-0 flex items-center justify-center bg-white", children: [
    /* @__PURE__ */ C.jsx("div", { className: "absolute top-0 left-0 right-0 p-4", children: /* @__PURE__ */ C.jsx(j5, { current: n + 1, total: u }) }),
    /* @__PURE__ */ C.jsxs("div", { className: "p-8 rounded-lg shadow-xl flex flex-col", children: [
      /* @__PURE__ */ C.jsx(Fo, { mode: "wait", children: /* @__PURE__ */ C.jsx(
        M.div,
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
        x5,
        {
          currentStep: n,
          totalSteps: u,
          onBack: I,
          onNext: $,
          isNextDisabled: n >= 0 && !d
        }
      )
    ] })
  ] });
}, j5 = ({
  current: e,
  total: r
}) => /* @__PURE__ */ C.jsx("div", { className: "w-full bg-gray-200 bg-opacity-70 rounded-full h-1 border border-gray-300", children: /* @__PURE__ */ C.jsx(
  "div",
  {
    className: "bg-blue-600 h-full rounded-full transition-all duration-300 ease-in-out",
    style: { width: `${e / r * 100}%` }
  }
) }), x5 = ({ currentStep: e, totalSteps: r, onBack: t, onNext: n, isNextDisabled: a }) => /* @__PURE__ */ C.jsxs(
  "div",
  {
    className: `flex ${e === -1 ? "justify-center items-center" : "justify-between"}`,
    children: [
      e > -1 && e < r - 1 && /* @__PURE__ */ C.jsx(
        M.button,
        {
          onClick: t,
          className: "w-[135px] px-5 py-2 bg-[#333e48] rounded-[40px] justify-center items-center inline-flex",
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          children: /* @__PURE__ */ C.jsx("span", { className: "text-black text-sm font-semibold uppercase leading-[21px] tracking-widest", children: "← Back" })
        }
      ),
      e < r - 1 && /* @__PURE__ */ C.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ C.jsx(
          M.button,
          {
            onClick: n,
            disabled: a,
            className: `w-48 px-5 py-2 rounded-full justify-center items-center inline-flex ${a ? "bg-gray-300 cursor-not-allowed" : "bg-[#333e48] hover:scale-105 active:scale-95"}`,
            whileHover: a ? void 0 : { scale: 1.05 },
            whileTap: a ? void 0 : { scale: 0.95 },
            children: /* @__PURE__ */ C.jsx("span", { className: "text-black text-sm font-semibold uppercase leading-[21px] tracking-widest", children: e === -1 ? "Start" : "Next →" })
          }
        ),
        e === -1 && /* @__PURE__ */ C.jsx("div", { className: "absolute top-3 -right-24", children: /* @__PURE__ */ C.jsx(
          "img",
          {
            src: ko,
            alt: "Press Enter",
            className: "w-[80.08px] h-[13.12px]"
          }
        ) })
      ] })
    ]
  }
), R5 = ({ onStart: e, schema: r }) => /* @__PURE__ */ C.jsxs(
  M.div,
  {
    className: "flex flex-col justify-center items-center h-full p-4",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    children: [
      /* @__PURE__ */ C.jsx(
        M.h1,
        {
          className: "text-center text-black text-lg font-semibold",
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.2 },
          children: r.title || "Welcome"
        }
      ),
      /* @__PURE__ */ C.jsx(
        M.p,
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
), M5 = () => /* @__PURE__ */ C.jsx(
  M.div,
  {
    className: "flex-col justify-center items-center gap-6 inline-flex h-full w-full",
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    children: /* @__PURE__ */ C.jsx("div", { className: "relative bg-white/70 rounded-[10px] overflow-hidden p-8 h-full w-full flex items-center justify-center", children: /* @__PURE__ */ C.jsxs(
      M.div,
      {
        className: "flex flex-col justify-center items-center",
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { delay: 0.3, duration: 0.5 },
        children: [
          /* @__PURE__ */ C.jsx(
            M.h1,
            {
              className: "text-4xl font-bold text-[#333133] mb-4",
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.5, duration: 0.5 },
              children: "Thank You!"
            }
          ),
          /* @__PURE__ */ C.jsx(
            M.p,
            {
              className: "text-xl text-[#333133]",
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.7, duration: 0.5 },
              children: "Your submission has been received."
            }
          ),
          /* @__PURE__ */ C.jsx(
            M.div,
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
