import _a, { useState as $e, useEffect as Bn } from "react";
import Mo from "@rjsf/core";
import { motion as U, AnimatePresence as Fo } from "framer-motion";
import ba from "ajv";
var Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function X(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mt = { exports: {} }, cr = {};
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
function Lo() {
  if (Jn) return cr;
  Jn = 1;
  var e = _a, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, c) {
    var f, h = {}, p = null, y = null;
    c !== void 0 && (p = "" + c), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (y = u.ref);
    for (f in u) n.call(u, f) && !i.hasOwnProperty(f) && (h[f] = u[f]);
    if (s && s.defaultProps) for (f in u = s.defaultProps, u) h[f] === void 0 && (h[f] = u[f]);
    return { $$typeof: r, type: s, key: p, ref: y, props: h, _owner: a.current };
  }
  return cr.Fragment = t, cr.jsx = o, cr.jsxs = o, cr;
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
function Do() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = _a, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), $ = Symbol.iterator, b = "@@iterator";
    function _(d) {
      if (d === null || typeof d != "object")
        return null;
      var w = $ && d[$] || d[b];
      return typeof w == "function" ? w : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(d) {
      {
        for (var w = arguments.length, O = new Array(w > 1 ? w - 1 : 0), N = 1; N < w; N++)
          O[N - 1] = arguments[N];
        C("error", d, O);
      }
    }
    function C(d, w, O) {
      {
        var N = g.ReactDebugCurrentFrame, z = N.getStackAddendum();
        z !== "" && (w += "%s", O = O.concat([z]));
        var q = O.map(function(L) {
          return String(L);
        });
        q.unshift("Warning: " + w), Function.prototype.apply.call(console[d], console, q);
      }
    }
    var P = !1, x = !1, Z = !1, ae = !1, se = !1, I;
    I = Symbol.for("react.module.reference");
    function M(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === i || se || d === a || d === c || d === f || ae || d === y || P || x || Z || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === h || d.$$typeof === o || d.$$typeof === s || d.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === I || d.getModuleId !== void 0));
    }
    function Q(d, w, O) {
      var N = d.displayName;
      if (N)
        return N;
      var z = w.displayName || w.name || "";
      return z !== "" ? O + "(" + z + ")" : O;
    }
    function G(d) {
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
          case s:
            var w = d;
            return G(w) + ".Consumer";
          case o:
            var O = d;
            return G(O._context) + ".Provider";
          case u:
            return Q(d, d.render, "ForwardRef");
          case h:
            var N = d.displayName || null;
            return N !== null ? N : W(d.type) || "Memo";
          case p: {
            var z = d, q = z._payload, L = z._init;
            try {
              return W(L(q));
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
    function v() {
      {
        if (oe--, oe === 0) {
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
        oe < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = g.ReactCurrentDispatcher, j;
    function R(d, w, O) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (z) {
            var N = z.stack.trim().match(/\n( *(at )?)/);
            j = N && N[1] || "";
          }
        return `
` + j + d;
      }
    }
    var H = !1, Ce;
    {
      var yt = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new yt();
    }
    function Pr(d, w) {
      if (!d || H)
        return "";
      {
        var O = Ce.get(d);
        if (O !== void 0)
          return O;
      }
      var N;
      H = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = A.current, A.current = null, l();
      try {
        if (w) {
          var L = function() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (ue) {
              N = ue;
            }
            Reflect.construct(d, [], L);
          } else {
            try {
              L.call();
            } catch (ue) {
              N = ue;
            }
            d.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ue) {
            N = ue;
          }
          d();
        }
      } catch (ue) {
        if (ue && N && typeof ue.stack == "string") {
          for (var F = ue.stack.split(`
`), ie = N.stack.split(`
`), re = F.length - 1, te = ie.length - 1; re >= 1 && te >= 0 && F[re] !== ie[te]; )
            te--;
          for (; re >= 1 && te >= 0; re--, te--)
            if (F[re] !== ie[te]) {
              if (re !== 1 || te !== 1)
                do
                  if (re--, te--, te < 0 || F[re] !== ie[te]) {
                    var fe = `
` + F[re].replace(" at new ", " at ");
                    return d.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", d.displayName)), typeof d == "function" && Ce.set(d, fe), fe;
                  }
                while (re >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        H = !1, A.current = q, v(), Error.prepareStackTrace = z;
      }
      var Ue = d ? d.displayName || d.name : "", xe = Ue ? R(Ue) : "";
      return typeof d == "function" && Ce.set(d, xe), xe;
    }
    function gt(d, w, O) {
      return Pr(d, !1);
    }
    function S(d) {
      var w = d.prototype;
      return !!(w && w.isReactComponent);
    }
    function Ee(d, w, O) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Pr(d, S(d));
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
            var N = d, z = N._payload, q = N._init;
            try {
              return Ee(q(z), w, O);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, or = {}, Ln = g.ReactDebugCurrentFrame;
    function Tr(d) {
      if (d) {
        var w = d._owner, O = Ee(d.type, d._source, w ? w.type : null);
        Ln.setExtraStackFrame(O);
      } else
        Ln.setExtraStackFrame(null);
    }
    function po(d, w, O, N, z) {
      {
        var q = Function.call.bind(he);
        for (var L in d)
          if (q(d, L)) {
            var F = void 0;
            try {
              if (typeof d[L] != "function") {
                var ie = Error((N || "React class") + ": " + O + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              F = d[L](w, L, N, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              F = re;
            }
            F && !(F instanceof Error) && (Tr(z), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", O, L, typeof F), Tr(null)), F instanceof Error && !(F.message in or) && (or[F.message] = !0, Tr(z), m("Failed %s type: %s", O, F.message), Tr(null));
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
        return Dn(d), !1;
      } catch {
        return !0;
      }
    }
    function Dn(d) {
      return "" + d;
    }
    function zn(d) {
      if (yo(d))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vo(d)), Dn(d);
    }
    var ur = g.ReactCurrentOwner, go = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Kn, Vn, $t;
    $t = {};
    function mo(d) {
      if (he.call(d, "ref")) {
        var w = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function $o(d) {
      if (he.call(d, "key")) {
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
          Kn || (Kn = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
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
          Vn || (Vn = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        O.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Ao = function(d, w, O, N, z, q, L) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: d,
        key: w,
        ref: O,
        props: L,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(F, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function Co(d, w, O, N, z) {
      {
        var q, L = {}, F = null, ie = null;
        O !== void 0 && (zn(O), F = "" + O), $o(w) && (zn(w.key), F = "" + w.key), mo(w) && (ie = w.ref, _o(w, z));
        for (q in w)
          he.call(w, q) && !go.hasOwnProperty(q) && (L[q] = w[q]);
        if (d && d.defaultProps) {
          var re = d.defaultProps;
          for (q in re)
            L[q] === void 0 && (L[q] = re[q]);
        }
        if (F || ie) {
          var te = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          F && bo(L, te), ie && wo(L, te);
        }
        return Ao(d, F, ie, z, N, ur.current, L);
      }
    }
    var _t = g.ReactCurrentOwner, Un = g.ReactDebugCurrentFrame;
    function Ve(d) {
      if (d) {
        var w = d._owner, O = Ee(d.type, d._source, w ? w.type : null);
        Un.setExtraStackFrame(O);
      } else
        Un.setExtraStackFrame(null);
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
    function Eo(d) {
      return "";
    }
    var qn = {};
    function Oo(d) {
      {
        var w = Gn();
        if (!w) {
          var O = typeof d == "string" ? d : d.displayName || d.name;
          O && (w = `

Check the top-level render call using <` + O + ">.");
        }
        return w;
      }
    }
    function kn(d, w) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var O = Oo(w);
        if (qn[O])
          return;
        qn[O] = !0;
        var N = "";
        d && d._owner && d._owner !== _t.current && (N = " It was passed a child from " + W(d._owner.type) + "."), Ve(d), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, N), Ve(null);
      }
    }
    function Wn(d, w) {
      {
        if (typeof d != "object")
          return;
        if (mt(d))
          for (var O = 0; O < d.length; O++) {
            var N = d[O];
            wt(N) && kn(N, w);
          }
        else if (wt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var z = _(d);
          if (typeof z == "function" && z !== d.entries)
            for (var q = z.call(d), L; !(L = q.next()).done; )
              wt(L.value) && kn(L.value, w);
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
          var N = W(w);
          po(O, d.props, "prop", N, d);
        } else if (w.PropTypes !== void 0 && !bt) {
          bt = !0;
          var z = W(w);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function To(d) {
      {
        for (var w = Object.keys(d.props), O = 0; O < w.length; O++) {
          var N = w[O];
          if (N !== "children" && N !== "key") {
            Ve(d), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), Ve(null);
            break;
          }
        }
        d.ref !== null && (Ve(d), m("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    var Hn = {};
    function Yn(d, w, O, N, z, q) {
      {
        var L = M(d);
        if (!L) {
          var F = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Eo();
          ie ? F += ie : F += Gn();
          var re;
          d === null ? re = "null" : mt(d) ? re = "array" : d !== void 0 && d.$$typeof === r ? (re = "<" + (W(d.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : re = typeof d, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, F);
        }
        var te = Co(d, w, O, z, q);
        if (te == null)
          return te;
        if (L) {
          var fe = w.children;
          if (fe !== void 0)
            if (N)
              if (mt(fe)) {
                for (var Ue = 0; Ue < fe.length; Ue++)
                  Wn(fe[Ue], d);
                Object.freeze && Object.freeze(fe);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wn(fe, d);
        }
        if (he.call(w, "key")) {
          var xe = W(d), ue = Object.keys(w).filter(function(Ro) {
            return Ro !== "key";
          }), At = ue.length > 0 ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Hn[xe + At]) {
            var xo = ue.length > 0 ? "{" + ue.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, At, xe, xo, xe), Hn[xe + At] = !0;
          }
        }
        return d === n ? To(te) : Po(te), te;
      }
    }
    function So(d, w, O) {
      return Yn(d, w, O, !0);
    }
    function Io(d, w, O) {
      return Yn(d, w, O, !1);
    }
    var No = Io, jo = So;
    fr.Fragment = n, fr.jsx = No, fr.jsxs = jo;
  }()), fr;
}
process.env.NODE_ENV === "production" ? Mt.exports = Lo() : Mt.exports = Do();
var E = Mt.exports;
const zo = ({
  id: e,
  value: r,
  required: t,
  onChange: n,
  placeholder: a,
  schema: i,
  uiSchema: o,
  formContext: s
}) => {
  var _, g;
  const [u, c] = $e(!1), f = (o == null ? void 0 : o["ui:title"]) || i.title, h = (o == null ? void 0 : o["ui:description"]) || i.description, p = (_ = s == null ? void 0 : s.errors) == null ? void 0 : _[e], y = (g = p == null ? void 0 : p.__errors) == null ? void 0 : g[0], $ = !!y, b = () => {
    c(!1);
  };
  return /* @__PURE__ */ E.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ E.jsxs(
      U.label,
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
      U.div,
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
            U.div,
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
      U.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: y
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
  uiSchema: o,
  formContext: s
}) => {
  var b, _;
  const [u, c] = $e(!1), f = (o == null ? void 0 : o["ui:title"]) || i.title, h = (o == null ? void 0 : o["ui:description"]) || i.description, p = (b = s == null ? void 0 : s.errors) == null ? void 0 : b[e], y = (_ = p == null ? void 0 : p.__errors) == null ? void 0 : _[0], $ = !!y;
  return /* @__PURE__ */ E.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ E.jsxs(
      U.label,
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
      U.div,
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
            U.div,
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
      U.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: y
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
  uiSchema: o,
  formContext: s
}) => {
  var b, _;
  const [u, c] = $e(!1), f = (o == null ? void 0 : o["ui:title"]) || i.title, h = (o == null ? void 0 : o["ui:description"]) || i.description, p = (b = s == null ? void 0 : s.errors) == null ? void 0 : b[e], y = (_ = p == null ? void 0 : p.__errors) == null ? void 0 : _[0], $ = !!y;
  return /* @__PURE__ */ E.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ E.jsxs(
      U.label,
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
      U.div,
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
            U.div,
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
      U.p,
      {
        className: "text-red-500 text-sm mt-1",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        children: y
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
  uiSchema: o,
  formContext: s
}) => {
  var _, g;
  const [u, c] = $e(!1), f = i.enum || [], h = (o == null ? void 0 : o["ui:title"]) || i.title, p = (o == null ? void 0 : o["ui:description"]) || i.description, y = (_ = s == null ? void 0 : s.errors) == null ? void 0 : _[e], $ = (g = y == null ? void 0 : y.__errors) == null ? void 0 : g[0], b = !!$;
  return /* @__PURE__ */ E.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ E.jsxs(
      U.label,
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
      U.div,
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
                  const C = typeof m == "string" || typeof m == "number" ? m : null, P = typeof m == "string" ? m.charAt(0).toUpperCase() + m.slice(1) : m;
                  return C !== null ? /* @__PURE__ */ E.jsx("option", { value: C, children: typeof P == "string" || typeof P == "number" ? P : JSON.stringify(P) }, C.toString()) : null;
                })
              ]
            }
          ),
          /* @__PURE__ */ E.jsx(
            U.div,
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
      U.p,
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
  formContext: o
}) => {
  var y, $;
  const [s, u] = $e(!1), c = (i == null ? void 0 : i["ui:title"]) || a.title, f = (y = o == null ? void 0 : o.errors) == null ? void 0 : y[e], h = ($ = f == null ? void 0 : f.__errors) == null ? void 0 : $[0], p = !!h;
  return /* @__PURE__ */ E.jsxs("div", { className: "mb-6 flex flex-col items-center", children: [
    /* @__PURE__ */ E.jsxs(
      U.div,
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
            U.label,
            {
              htmlFor: e,
              className: `ml-3 text-2xl font-bold transition-colors duration-300 ${s ? "text-blue-600" : p ? "text-red-500" : "text-gray-700"}`,
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
      U.p,
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
function B(e) {
  return typeof File < "u" && e instanceof File || typeof Date < "u" && e instanceof Date ? !1 : typeof e == "object" && e !== null && !Array.isArray(e);
}
const wa = "__additional_property", ko = "additionalProperties", Xt = "allOf", Dr = "anyOf", zr = "const", Wo = "default", Aa = "dependencies", _e = "__errors", Ir = "$id", Ho = "if", Yo = "items", Bo = "_$junk_option_schema_id$_", hr = "oneOf", ve = "properties", Jo = "required", ge = "$ref", Xo = "__rjsf_additionalProperties", Ca = "__rjsf_rootSchema", Zo = "ui:widget", Qo = "ui:options";
function Zn(e = {}, r = {}) {
  return Object.keys(e).filter((t) => t.indexOf("ui:") === 0).reduce((t, n) => {
    const a = e[n];
    return n === Zo && B(a) ? (console.error("Setting options via ui:widget object is no longer supported, use ui:options instead"), t) : n === Qo && B(a) ? { ...t, ...a } : { ...t, [n.substring(3)]: a };
  }, { ...r });
}
var eu = typeof Sr == "object" && Sr && Sr.Object === Object && Sr, Ea = eu, ru = Ea, tu = typeof self == "object" && self && self.Object === Object && self, nu = ru || tu || Function("return this")(), me = nu, iu = me, au = iu.Symbol, Ye = au, Qn = Ye, Oa = Object.prototype, su = Oa.hasOwnProperty, ou = Oa.toString, lr = Qn ? Qn.toStringTag : void 0;
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
const Zt = /* @__PURE__ */ X(Be);
function Ft(e) {
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
    return e.reduce((t, n, a) => ({ ...t, [a]: Ft(n) }), r);
  if (Zt(e)) {
    const t = e;
    return Object.keys(t).reduce((n, a) => ({ ...n, [a]: Ft(t[a]) }), r);
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
var Zr = Fu, Lu = Zr, Du = Array.prototype, zu = Du.splice;
function Ku(e) {
  var r = this.__data__, t = Lu(r, e);
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
var ce = lc;
const Kr = /* @__PURE__ */ X(ce);
var dc = be, pc = ce, hc = "[object AsyncFunction]", vc = "[object Function]", yc = "[object GeneratorFunction]", gc = "[object Proxy]";
function mc(e) {
  if (!pc(e))
    return !1;
  var r = dc(e);
  return r == vc || r == yc || r == hc || r == gc;
}
var et = mc, $c = me, _c = $c["__core-js_shared__"], bc = _c, Ct = bc, ti = function() {
  var e = /[^.]+$/.exec(Ct && Ct.keys && Ct.keys.IE_PROTO || "");
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
var Sa = Oc, Pc = et, Tc = Ac, Sc = ce, Ic = Sa, Nc = /[\\^$.*+?()[\]{}|]/g, jc = /^\[object .+?Constructor\]$/, xc = Function.prototype, Rc = Object.prototype, Mc = xc.toString, Fc = Rc.hasOwnProperty, Lc = RegExp(
  "^" + Mc.call(Fc).replace(Nc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Dc(e) {
  if (!Sc(e) || Tc(e))
    return !1;
  var r = Pc(e) ? Lc : jc;
  return r.test(Ic(e));
}
var zc = Dc;
function Kc(e, r) {
  return e == null ? void 0 : e[r];
}
var Vc = Kc, Uc = zc, Gc = Vc;
function qc(e, r) {
  var t = Gc(e, r);
  return Uc(t) ? t : void 0;
}
var Me = qc, kc = Me, Wc = me, Hc = kc(Wc, "Map"), Qt = Hc, Yc = Me, Bc = Yc(Object, "create"), rt = Bc, ni = rt;
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
var bf = Ze, ii = bf, wf = Qr, Af = Qt;
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
function Lf(e) {
  return Ff(this, e).has(e);
}
var Df = Lf, zf = tt;
function Kf(e, r) {
  var t = zf(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var Vf = Kf, Uf = Ef, Gf = jf, qf = Mf, kf = Df, Wf = Vf;
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
var en = Qe, Hf = Qr, Yf = Qt, Bf = en, Jf = 200;
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
var cl = ul, fl = en, ll = ol, dl = cl;
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
  var o = t & $l, s = e.length, u = r.length;
  if (s != u && !(o && u > s))
    return !1;
  var c = i.get(e), f = i.get(r);
  if (c && f)
    return c == r && f == e;
  var h = -1, p = !0, y = t & _l ? new yl() : void 0;
  for (i.set(e, r), i.set(r, e); ++h < s; ) {
    var $ = e[h], b = r[h];
    if (n)
      var _ = o ? n(b, $, h, r, e, i) : n($, b, h, e, r, i);
    if (_ !== void 0) {
      if (_)
        continue;
      p = !1;
      break;
    }
    if (y) {
      if (!gl(r, function(g, m) {
        if (!ml(y, m) && ($ === g || a($, g, t, n, i)))
          return y.push(m);
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
var Ia = bl, wl = me, Al = wl.Uint8Array, Na = Al;
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
var rn = Ol, ai = Ye, si = Na, Pl = Je, Tl = Ia, Sl = El, Il = rn, Nl = 1, jl = 2, xl = "[object Boolean]", Rl = "[object Date]", Ml = "[object Error]", Fl = "[object Map]", Ll = "[object Number]", Dl = "[object RegExp]", zl = "[object Set]", Kl = "[object String]", Vl = "[object Symbol]", Ul = "[object ArrayBuffer]", Gl = "[object DataView]", oi = ai ? ai.prototype : void 0, Et = oi ? oi.valueOf : void 0;
function ql(e, r, t, n, a, i, o) {
  switch (t) {
    case Gl:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Ul:
      return !(e.byteLength != r.byteLength || !i(new si(e), new si(r)));
    case xl:
    case Rl:
    case Ll:
      return Pl(+e, +r);
    case Ml:
      return e.name == r.name && e.message == r.message;
    case Dl:
    case Kl:
      return e == r + "";
    case Fl:
      var s = Sl;
    case zl:
      var u = n & Nl;
      if (s || (s = Il), e.size != r.size && !u)
        return !1;
      var c = o.get(e);
      if (c)
        return c == r;
      n |= jl, o.set(e, r);
      var f = Tl(s(e), s(r), n, a, i, o);
      return o.delete(e), f;
    case Vl:
      if (Et)
        return Et.call(e) == Et.call(r);
  }
  return !1;
}
var kl = ql;
function Wl(e, r) {
  for (var t = -1, n = r.length, a = e.length; ++t < n; )
    e[a + t] = r[t];
  return e;
}
var tn = Wl, Hl = Array.isArray, ne = Hl, Yl = tn, Bl = ne;
function Jl(e, r, t) {
  var n = r(e);
  return Bl(e) ? n : Yl(n, t(e));
}
var ja = Jl;
function Xl(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++t < n; ) {
    var o = e[t];
    r(o, t, e) && (i[a++] = o);
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
} : r0, nn = i0;
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
  var t = me, n = y0, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? t.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
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
var an = b0, w0 = be, A0 = an, C0 = de, E0 = "[object Arguments]", O0 = "[object Array]", P0 = "[object Boolean]", T0 = "[object Date]", S0 = "[object Error]", I0 = "[object Function]", N0 = "[object Map]", j0 = "[object Number]", x0 = "[object Object]", R0 = "[object RegExp]", M0 = "[object Set]", F0 = "[object String]", L0 = "[object WeakMap]", D0 = "[object ArrayBuffer]", z0 = "[object DataView]", K0 = "[object Float32Array]", V0 = "[object Float64Array]", U0 = "[object Int8Array]", G0 = "[object Int16Array]", q0 = "[object Int32Array]", k0 = "[object Uint8Array]", W0 = "[object Uint8ClampedArray]", H0 = "[object Uint16Array]", Y0 = "[object Uint32Array]", Y = {};
Y[K0] = Y[V0] = Y[U0] = Y[G0] = Y[q0] = Y[k0] = Y[W0] = Y[H0] = Y[Y0] = !0;
Y[E0] = Y[O0] = Y[D0] = Y[P0] = Y[z0] = Y[T0] = Y[S0] = Y[I0] = Y[N0] = Y[j0] = Y[x0] = Y[R0] = Y[M0] = Y[F0] = Y[L0] = !1;
function B0(e) {
  return C0(e) && A0(e.length) && !!Y[w0(e)];
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
  var t = Ea, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && t.process, s = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(Gr, Gr.exports);
var sn = Gr.exports, Z0 = J0, Q0 = Fe, fi = sn, li = fi && fi.isTypedArray, ed = li ? Q0(li) : Z0, $r = ed, rd = Ra, td = mr, nd = ne, id = rr, ad = st, sd = $r, od = Object.prototype, ud = od.hasOwnProperty;
function cd(e, r) {
  var t = nd(e), n = !t && td(e), a = !t && !n && id(e), i = !t && !n && !a && sd(e), o = t || n || a || i, s = o ? rd(e.length, String) : [], u = s.length;
  for (var c in e)
    (r || ud.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ad(c, u))) && s.push(c);
  return s;
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
var La = $d, _d = et, bd = an;
function wd(e) {
  return e != null && bd(e.length) && !_d(e);
}
var Le = wd, Ad = Fa, Cd = La, Ed = Le;
function Od(e) {
  return Ed(e) ? Ad(e) : Cd(e);
}
var _r = Od, Pd = ja, Td = nn, Sd = _r;
function Id(e) {
  return Pd(e, Sd, Td);
}
var Da = Id, di = Da, Nd = 1, jd = Object.prototype, xd = jd.hasOwnProperty;
function Rd(e, r, t, n, a, i) {
  var o = t & Nd, s = di(e), u = s.length, c = di(r), f = c.length;
  if (u != f && !o)
    return !1;
  for (var h = u; h--; ) {
    var p = s[h];
    if (!(o ? p in r : xd.call(r, p)))
      return !1;
  }
  var y = i.get(e), $ = i.get(r);
  if (y && $)
    return y == r && $ == e;
  var b = !0;
  i.set(e, r), i.set(r, e);
  for (var _ = o; ++h < u; ) {
    p = s[h];
    var g = e[p], m = r[p];
    if (n)
      var C = o ? n(m, g, p, r, e, i) : n(g, m, p, e, r, i);
    if (!(C === void 0 ? g === m || a(g, m, t, n, i) : C)) {
      b = !1;
      break;
    }
    _ || (_ = p == "constructor");
  }
  if (b && !_) {
    var P = e.constructor, x = r.constructor;
    P != x && "constructor" in e && "constructor" in r && !(typeof P == "function" && P instanceof P && typeof x == "function" && x instanceof x) && (b = !1);
  }
  return i.delete(e), i.delete(r), b;
}
var Md = Rd, Fd = Me, Ld = me, Dd = Fd(Ld, "DataView"), zd = Dd, Kd = Me, Vd = me, Ud = Kd(Vd, "Promise"), Gd = Ud, qd = Me, kd = me, Wd = qd(kd, "Set"), za = Wd, Hd = Me, Yd = me, Bd = Hd(Yd, "WeakMap"), Jd = Bd, Lt = zd, Dt = Qt, zt = Gd, Kt = za, Vt = Jd, Ka = be, tr = Sa, pi = "[object Map]", Xd = "[object Object]", hi = "[object Promise]", vi = "[object Set]", yi = "[object WeakMap]", gi = "[object DataView]", Zd = tr(Lt), Qd = tr(Dt), e2 = tr(zt), r2 = tr(Kt), t2 = tr(Vt), Re = Ka;
(Lt && Re(new Lt(new ArrayBuffer(1))) != gi || Dt && Re(new Dt()) != pi || zt && Re(zt.resolve()) != hi || Kt && Re(new Kt()) != vi || Vt && Re(new Vt()) != yi) && (Re = function(e) {
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
var br = Re, Ot = nt, n2 = Ia, i2 = kl, a2 = Md, mi = br, $i = ne, _i = rr, s2 = $r, o2 = 1, bi = "[object Arguments]", wi = "[object Array]", Nr = "[object Object]", u2 = Object.prototype, Ai = u2.hasOwnProperty;
function c2(e, r, t, n, a, i) {
  var o = $i(e), s = $i(r), u = o ? wi : mi(e), c = s ? wi : mi(r);
  u = u == bi ? Nr : u, c = c == bi ? Nr : c;
  var f = u == Nr, h = c == Nr, p = u == c;
  if (p && _i(e)) {
    if (!_i(r))
      return !1;
    o = !0, f = !1;
  }
  if (p && !f)
    return i || (i = new Ot()), o || s2(e) ? n2(e, r, t, n, a, i) : i2(e, r, u, t, n, a, i);
  if (!(t & o2)) {
    var y = f && Ai.call(e, "__wrapped__"), $ = h && Ai.call(r, "__wrapped__");
    if (y || $) {
      var b = y ? e.value() : e, _ = $ ? r.value() : r;
      return i || (i = new Ot()), a(b, _, t, n, i);
    }
  }
  return p ? (i || (i = new Ot()), a2(e, r, t, n, a, i)) : !1;
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
const v2 = /* @__PURE__ */ X(h2);
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
var on = E2, Ua = en, O2 = "Expected a function";
function un(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(O2);
  var t = function() {
    var n = arguments, a = r ? r.apply(this, n) : n[0], i = t.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return t.cache = i.set(a, o) || i, o;
  };
  return t.cache = new (un.Cache || Ua)(), t;
}
un.Cache = Ua;
var P2 = un, T2 = P2, S2 = 500;
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
var we = F2, Ei = Ye, L2 = we, D2 = ne, z2 = nr, K2 = 1 / 0, Oi = Ei ? Ei.prototype : void 0, Pi = Oi ? Oi.toString : void 0;
function qa(e) {
  if (typeof e == "string")
    return e;
  if (D2(e))
    return L2(e, qa) + "";
  if (z2(e))
    return Pi ? Pi.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -K2 ? "-0" : r;
}
var V2 = qa, U2 = V2;
function G2(e) {
  return e == null ? "" : U2(e);
}
var ka = G2, q2 = ne, k2 = on, W2 = Ga, H2 = ka;
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
var De = X2, Z2 = wr, Q2 = De;
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
const J = /* @__PURE__ */ X(Wa);
var np = La, ip = br, ap = mr, sp = ne, op = Le, up = rr, cp = ot, fp = $r, lp = "[object Map]", dp = "[object Set]", pp = Object.prototype, hp = pp.hasOwnProperty;
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
const vr = /* @__PURE__ */ X(yp);
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
  for (var n, a, i = 1, o = r.length; i < o; ) {
    if (r[i] === "constructor" || r[i] === "prototype" || r[i] === "__proto__") return e;
    if (n = Ha(r[i++]), a = o > i, typeof e[n] > "u" && (Array.isArray(e) && n === "-" && (n = e.length), a && (r[i] !== "" && r[i] < 1 / 0 || r[i] === "-" ? e[n] = [] : e[n] = {})), !a) break;
    e = e[n];
  }
  var s = e[n];
  return t === void 0 ? delete e[n] : e[n] = t, s;
}
function cn(e) {
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
  r = cn(r);
  var t = r.length;
  if (t === 1) return e;
  for (var n = 1; n < t; ) {
    if (e = e[Ha(r[n++])], t === n) return e;
    if (typeof e != "object" || e === null) return;
  }
}
function Ba(e, r, t) {
  if (typeof e != "object") throw new Error("Invalid input object.");
  if (r = cn(r), r.length === 0) throw new Error("Invalid JSON pointer for set.");
  return _p(e, r, t);
}
function bp(e) {
  var r = cn(e);
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
var fn = wp, Ap = Me, Cp = function() {
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
var ln = Ep, Op = ln, Pp = Je, Tp = Object.prototype, Sp = Tp.hasOwnProperty;
function Ip(e, r, t) {
  var n = e[r];
  (!(Sp.call(e, r) && Pp(n, t)) || t === void 0 && !(r in e)) && Op(e, r, t);
}
var dn = Ip, Np = dn, jp = ln;
function xp(e, r, t, n) {
  var a = !t;
  t || (t = {});
  for (var i = -1, o = r.length; ++i < o; ) {
    var s = r[i], u = n ? n(t[s], e[s], s, t, e) : void 0;
    u === void 0 && (u = e[s]), a ? jp(t, s, u) : Np(t, s, u);
  }
  return t;
}
var ir = xp, Rp = ir, Mp = _r;
function Fp(e, r) {
  return e && Rp(r, Mp(r), e);
}
var Lp = Fp;
function Dp(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var zp = Dp, Kp = ce, Vp = ot, Up = zp, Gp = Object.prototype, qp = Gp.hasOwnProperty;
function kp(e) {
  if (!Kp(e))
    return Up(e);
  var r = Vp(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !qp.call(e, n)) || t.push(n);
  return t;
}
var Wp = kp, Hp = Fa, Yp = Wp, Bp = Le;
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
  var t = me, n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? t.Buffer : void 0, s = o ? o.allocUnsafe : void 0;
  function u(c, f) {
    if (f)
      return c.slice();
    var h = c.length, p = s ? s(h) : new c.constructor(h);
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
var lt = rh, th = ir, nh = nn;
function ih(e, r) {
  return th(e, nh(e), r);
}
var ah = ih, sh = tn, oh = Xr, uh = nn, ch = xa, fh = Object.getOwnPropertySymbols, lh = fh ? function(e) {
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
var pn = Ch, Eh = pn;
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
var jh = Nh, xh = pn;
function Rh(e, r) {
  var t = r ? xh(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var es = Rh, Mh = pn, Fh = Ph, Lh = Ih, Dh = jh, zh = es, Kh = "[object Boolean]", Vh = "[object Date]", Uh = "[object Map]", Gh = "[object Number]", qh = "[object RegExp]", kh = "[object Set]", Wh = "[object String]", Hh = "[object Symbol]", Yh = "[object ArrayBuffer]", Bh = "[object DataView]", Jh = "[object Float32Array]", Xh = "[object Float64Array]", Zh = "[object Int8Array]", Qh = "[object Int16Array]", e1 = "[object Int32Array]", r1 = "[object Uint8Array]", t1 = "[object Uint8ClampedArray]", n1 = "[object Uint16Array]", i1 = "[object Uint32Array]";
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
      return Lh(e);
    case kh:
      return new n();
    case Hh:
      return Dh(e);
  }
}
var s1 = a1, o1 = ce, xi = Object.create, u1 = /* @__PURE__ */ function() {
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
var g1 = y1, m1 = g1, $1 = Fe, Ri = sn, Mi = Ri && Ri.isMap, _1 = Mi ? $1(Mi) : m1, b1 = _1, w1 = br, A1 = de, C1 = "[object Set]";
function E1(e) {
  return A1(e) && w1(e) == C1;
}
var O1 = E1, P1 = O1, T1 = Fe, Fi = sn, Li = Fi && Fi.isSet, S1 = Li ? T1(Li) : P1, I1 = S1, N1 = nt, j1 = fn, x1 = dn, R1 = Lp, M1 = eh, F1 = Xa, L1 = lt, D1 = ah, z1 = vh, K1 = Da, V1 = Qa, U1 = br, G1 = Ah, q1 = s1, k1 = ts, W1 = ne, H1 = rr, Y1 = b1, B1 = ce, J1 = I1, X1 = _r, Z1 = ar, Q1 = 1, ev = 2, rv = 4, ns = "[object Arguments]", tv = "[object Array]", nv = "[object Boolean]", iv = "[object Date]", av = "[object Error]", is = "[object Function]", sv = "[object GeneratorFunction]", ov = "[object Map]", uv = "[object Number]", as = "[object Object]", cv = "[object RegExp]", fv = "[object Set]", lv = "[object String]", dv = "[object Symbol]", pv = "[object WeakMap]", hv = "[object ArrayBuffer]", vv = "[object DataView]", yv = "[object Float32Array]", gv = "[object Float64Array]", mv = "[object Int8Array]", $v = "[object Int16Array]", _v = "[object Int32Array]", bv = "[object Uint8Array]", wv = "[object Uint8ClampedArray]", Av = "[object Uint16Array]", Cv = "[object Uint32Array]", k = {};
k[ns] = k[tv] = k[hv] = k[vv] = k[nv] = k[iv] = k[yv] = k[gv] = k[mv] = k[$v] = k[_v] = k[ov] = k[uv] = k[as] = k[cv] = k[fv] = k[lv] = k[dv] = k[bv] = k[wv] = k[Av] = k[Cv] = !0;
k[av] = k[is] = k[pv] = !1;
function Fr(e, r, t, n, a, i) {
  var o, s = r & Q1, u = r & ev, c = r & rv;
  if (t && (o = a ? t(e, n, a, i) : t(e)), o !== void 0)
    return o;
  if (!B1(e))
    return e;
  var f = W1(e);
  if (f) {
    if (o = G1(e), !s)
      return L1(e, o);
  } else {
    var h = U1(e), p = h == is || h == sv;
    if (H1(e))
      return F1(e, s);
    if (h == as || h == ns || p && !a) {
      if (o = u || p ? {} : k1(e), !s)
        return u ? z1(e, M1(o, e)) : D1(e, R1(o, e));
    } else {
      if (!k[h])
        return a ? e : {};
      o = q1(e, h, s);
    }
  }
  i || (i = new N1());
  var y = i.get(e);
  if (y)
    return y;
  i.set(e, o), J1(e) ? e.forEach(function(_) {
    o.add(Fr(_, r, t, _, e, i));
  }) : Y1(e) && e.forEach(function(_, g) {
    o.set(g, Fr(_, r, t, g, e, i));
  });
  var $ = c ? u ? V1 : K1 : u ? Z1 : X1, b = f ? void 0 : $(e);
  return j1(b || e, function(_, g) {
    b && (g = _, _ = e[g]), x1(o, g, Fr(_, r, t, g, e, i));
  }), o;
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
var Nv = Iv, jv = wr, xv = os, Rv = Nv, Mv = De;
function Fv(e, r) {
  return r = jv(r, e), e = Rv(e, r), e == null || delete e[Mv(xv(r))];
}
var Lv = Fv, Dv = Be;
function zv(e) {
  return Dv(e) ? void 0 : e;
}
var Kv = zv, Di = Ye, Vv = mr, Uv = ne, zi = Di ? Di.isConcatSpreadable : void 0;
function Gv(e) {
  return Uv(e) || Vv(e) || !!(zi && e && e[zi]);
}
var qv = Gv, kv = tn, Wv = qv;
function us(e, r, t, n, a) {
  var i = -1, o = e.length;
  for (t || (t = Wv), a || (a = []); ++i < o; ) {
    var s = e[i];
    r > 0 && t(s) ? r > 1 ? us(s, r - 1, t, n, a) : kv(a, s) : n || (a[a.length] = s);
  }
  return a;
}
var dt = us, Hv = dt;
function Yv(e) {
  var r = e == null ? 0 : e.length;
  return r ? Hv(e, 1) : [];
}
var hn = Yv;
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
    for (var n = arguments, a = -1, i = Ki(n.length - r, 0), o = Array(i); ++a < i; )
      o[a] = n[r + a];
    a = -1;
    for (var s = Array(r + 1); ++a < r; )
      s[a] = n[a];
    return s[r] = t(o), Jv(e, this, s);
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
var cy = uy, fy = iy, ly = cy, dy = ly(fy), ls = dy, py = hn, hy = fs, vy = ls;
function yy(e) {
  return vy(hy(e, void 0, py), e + "");
}
var gy = yy, my = we, $y = ss, _y = Lv, by = wr, wy = ir, Ay = Kv, Cy = gy, Ey = Qa, Oy = 1, Py = 2, Ty = 4, Sy = Cy(function(e, r) {
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
const Ny = /* @__PURE__ */ X(Iy);
function vn(e, r) {
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
  const o = i[ge];
  if (o) {
    if (t.includes(o)) {
      if (t.length === 1)
        throw new Error(`Definition for ${e} is a circular reference`);
      const [f, ...h] = t, p = [...h, n, f].join(" -> ");
      throw new Error(`Definition for ${f} contains a circular reference through ${p}`);
    }
    const [s, u] = vn(ge, i), c = ds(u, r, [...t, n]);
    return Object.keys(s).length > 0 ? { ...s, ...c } : c;
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
var My = Ry, Fy = wr, Ly = mr, Dy = ne, zy = st, Ky = an, Vy = De;
function Uy(e, r, t) {
  r = Fy(r, e);
  for (var n = -1, a = r.length, i = !1; ++n < a; ) {
    var o = Vy(r[n]);
    if (!(i = e != null && t(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Ky(a) && zy(o, a) && (Dy(e) || Ly(e)));
}
var hs = Uy, Gy = My, qy = hs;
function ky(e, r) {
  return e != null && qy(e, r, Gy);
}
var Wy = ky;
const pr = /* @__PURE__ */ X(Wy);
var Hy = be, Yy = de, By = "[object Number]";
function Jy(e) {
  return typeof e == "number" || Yy(e) && Hy(e) == By;
}
var Xy = Jy;
const vs = /* @__PURE__ */ X(Xy);
var Zy = be, Qy = ne, eg = de, rg = "[object String]";
function tg(e) {
  return typeof e == "string" || !Qy(e) && eg(e) && Zy(e) == rg;
}
var ng = tg;
const ys = /* @__PURE__ */ X(ng);
function ig(e, r, t, n) {
  var a = -1, i = e == null ? 0 : e.length;
  for (n && i && (t = e[++a]); ++a < i; )
    t = r(t, e[a], a, e);
  return t;
}
var ag = ig;
function sg(e) {
  return function(r, t, n) {
    for (var a = -1, i = Object(r), o = n(r), s = o.length; s--; ) {
      var u = o[e ? s : ++a];
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
var ms = dg, pg = Le;
function hg(e, r) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!pg(t))
      return e(t, n);
    for (var a = t.length, i = r ? a : -1, o = Object(t); (r ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return t;
  };
}
var vg = hg, yg = ms, gg = vg, mg = gg(yg), yn = mg, $g = nt, _g = ut, bg = 1, wg = 2;
function Ag(e, r, t, n) {
  var a = t.length, i = a, o = !n;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var s = t[a];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    s = t[a];
    var u = s[0], c = e[u], f = s[1];
    if (o && s[2]) {
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
var Cg = Ag, Eg = ce;
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
function Lg(e, r) {
  return e != null && r in Object(e);
}
var Dg = Lg, zg = Dg, Kg = hs;
function Vg(e, r) {
  return e != null && Kg(e, r, zg);
}
var Ug = Vg, Gg = ut, qg = Wa, kg = Ug, Wg = on, Hg = $s, Yg = _s, Bg = De, Jg = 1, Xg = 2;
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
var im = nm, am = rm, sm = im, om = on, um = De;
function cm(e) {
  return om(e) ? am(um(e)) : sm(e);
}
var fm = cm, lm = Fg, dm = Qg, pm = Ar, hm = ne, vm = fm;
function ym(e) {
  return typeof e == "function" ? e : e == null ? pm : typeof e == "object" ? hm(e) ? dm(e[0], e[1]) : lm(e) : vm(e);
}
var gn = ym;
function gm(e, r, t, n, a) {
  return a(e, function(i, o, s) {
    t = n ? (n = !1, i) : r(t, i, o, s);
  }), t;
}
var mm = gm, $m = ag, _m = yn, bm = gn, wm = mm, Am = ne;
function Cm(e, r, t) {
  var n = Am(e) ? $m : wm, a = arguments.length < 3;
  return n(e, bm(r), t, a, _m);
}
var Em = Cm;
const Om = /* @__PURE__ */ X(Em);
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
var Mm = Rm, Fm = Mm, Ui = ce, Lm = nr, Gi = NaN, Dm = /^[-+]0x[0-9a-f]+$/i, zm = /^0b[01]+$/i, Km = /^0o[0-7]+$/i, Vm = parseInt;
function Um(e) {
  if (typeof e == "number")
    return e;
  if (Lm(e))
    return Gi;
  if (Ui(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ui(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Fm(e);
  var t = zm.test(e);
  return t || Km.test(e) ? Vm(e.slice(2), t ? 2 : 8) : Dm.test(e) ? Gi : +e;
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
var Jm = Bm, Xm = Ra, Zm = bs, Qm = Jm, e$ = 9007199254740991, Pt = 4294967295, r$ = Math.min;
function t$(e, r) {
  if (e = Qm(e), e < 1 || e > e$)
    return [];
  var t = Pt, n = r$(e, Pt);
  r = Zm(r), e -= Pt;
  for (var a = Xm(n, r); ++t < e; )
    r(t);
  return a;
}
var n$ = t$;
const ws = /* @__PURE__ */ X(n$);
function As(e, r, t) {
  var n;
  if (e && t) {
    const a = J(e, t);
    if (a === void 0)
      return;
    for (let i = 0; i < r.length; i++) {
      const o = r[i], s = J(o, [ve, t], {});
      if (!(s.type === "object" || s.type === "array") && (s.const === a || !((n = s.enum) === null || n === void 0) && n.includes(a)))
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
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    if (a && pr(s, [ve, a])) {
      const u = J(r, a), c = J(s, [ve, a], {});
      if (e.isValid(c, u, n))
        return o;
    } else if (s[ve]) {
      const u = {
        anyOf: Object.keys(s[ve]).map((f) => ({
          required: [f]
        }))
      };
      let c;
      if (s.anyOf) {
        const { ...f } = s;
        f.allOf ? f.allOf = f.allOf.slice() : f.allOf = [], f.allOf.push(u), c = f;
      } else
        c = Object.assign({}, s, u);
      if (delete c.required, e.isValid(c, r, n))
        return o;
    } else if (e.isValid(s, r, n))
      return o;
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
var mn = s$;
const o$ = /* @__PURE__ */ X(mn);
var u$ = dn, c$ = wr, f$ = st, ki = ce, l$ = De;
function d$(e, r, t, n) {
  if (!ki(e))
    return e;
  r = c$(r, e);
  for (var a = -1, i = r.length, o = i - 1, s = e; s != null && ++a < i; ) {
    var u = l$(r[a]), c = t;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != o) {
      var f = s[u];
      c = n ? n(f, u, s) : void 0, c === void 0 && (c = ki(f) ? f : f$(r[a + 1]) ? [] : {});
    }
    u$(s, u, c), s = s[u];
  }
  return e;
}
var Es = d$, p$ = Es;
function h$(e, r, t) {
  return e == null ? e : p$(e, r, t);
}
var v$ = h$;
const Ut = /* @__PURE__ */ X(v$);
var y$ = fn, g$ = rs, m$ = ms, $$ = gn, _$ = Xr, b$ = ne, w$ = rr, A$ = et, C$ = ce, E$ = $r;
function O$(e, r, t) {
  var n = b$(e), a = n || w$(e) || E$(e);
  if (r = $$(r), t == null) {
    var i = e && e.constructor;
    a ? t = n ? new i() : [] : C$(e) ? t = A$(i) ? g$(_$(e)) : {} : t = {};
  }
  return (a ? y$ : m$)(e, function(o, s, u) {
    return r(t, o, s, u);
  }), t;
}
var P$ = O$;
const T$ = /* @__PURE__ */ X(P$);
var S$ = ln, I$ = Je;
function N$(e, r, t) {
  (t !== void 0 && !I$(e[r], t) || t === void 0 && !(r in e)) && S$(e, r, t);
}
var Os = N$, j$ = Le, x$ = de;
function R$(e) {
  return x$(e) && j$(e);
}
var pt = R$;
function M$(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
var Ps = M$, F$ = ir, L$ = ar;
function D$(e) {
  return F$(e, L$(e));
}
var z$ = D$, Wi = Os, K$ = Xa, V$ = es, U$ = lt, G$ = ts, Hi = mr, Yi = ne, q$ = pt, k$ = rr, W$ = et, H$ = ce, Y$ = Be, B$ = $r, Bi = Ps, J$ = z$;
function X$(e, r, t, n, a, i, o) {
  var s = Bi(e, t), u = Bi(r, t), c = o.get(u);
  if (c) {
    Wi(e, t, c);
    return;
  }
  var f = i ? i(s, u, t + "", e, r, o) : void 0, h = f === void 0;
  if (h) {
    var p = Yi(u), y = !p && k$(u), $ = !p && !y && B$(u);
    f = u, p || y || $ ? Yi(s) ? f = s : q$(s) ? f = U$(s) : y ? (h = !1, f = K$(u, !0)) : $ ? (h = !1, f = V$(u, !0)) : f = [] : Y$(u) || Hi(u) ? (f = s, Hi(s) ? f = J$(s) : (!H$(s) || W$(s)) && (f = G$(u))) : h = !1;
  }
  h && (o.set(u, f), a(f, u, n, i, o), o.delete(u)), Wi(e, t, f);
}
var Z$ = X$, Q$ = nt, e_ = Os, r_ = gs, t_ = Z$, n_ = ce, i_ = ar, a_ = Ps;
function Ts(e, r, t, n, a) {
  e !== r && r_(r, function(i, o) {
    if (a || (a = new Q$()), n_(i))
      t_(e, r, o, t, Ts, n, a);
    else {
      var s = n ? n(a_(e, o), i, o + "", e, r, a) : void 0;
      s === void 0 && (s = i), e_(e, o, s);
    }
  }, i_);
}
var $n = Ts, s_ = Ar, o_ = fs, u_ = ls;
function c_(e, r) {
  return u_(o_(e, r, s_), e + "");
}
var Te = c_, f_ = Je, l_ = Le, d_ = st, p_ = ce;
function h_(e, r, t) {
  if (!p_(t))
    return !1;
  var n = typeof r;
  return (n == "number" ? l_(t) && d_(r, t.length) : n == "string" && r in t) ? f_(t[r], e) : !1;
}
var _n = h_, v_ = Te, y_ = _n;
function g_(e) {
  return v_(function(r, t) {
    var n = -1, a = t.length, i = a > 1 ? t[a - 1] : void 0, o = a > 2 ? t[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, o && y_(t[0], t[1], o) && (i = a < 3 ? void 0 : i, a = 1), r = Object(r); ++n < a; ) {
      var s = t[n];
      s && e(r, s, n, i);
    }
    return r;
  });
}
var Ss = g_, m_ = $n, $_ = Ss, __ = $_(function(e, r, t) {
  m_(e, r, t);
}), b_ = __;
const w_ = /* @__PURE__ */ X(b_);
var A_ = dt, C_ = 1 / 0;
function E_(e) {
  var r = e == null ? 0 : e.length;
  return r ? A_(e, C_) : [];
}
var bn = E_;
const O_ = /* @__PURE__ */ X(bn);
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
var Is = F_, L_ = Is;
function D_(e, r) {
  var t = e == null ? 0 : e.length;
  return !!t && L_(e, r, 0) > -1;
}
var wn = D_;
function z_(e, r, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (t(r, e[n]))
      return !0;
  return !1;
}
var An = z_;
function K_() {
}
var V_ = K_, Tt = za, U_ = V_, G_ = rn, q_ = 1 / 0, k_ = Tt && 1 / G_(new Tt([, -0]))[1] == q_ ? function(e) {
  return new Tt(e);
} : U_, W_ = k_, H_ = it, Y_ = wn, B_ = An, J_ = at, X_ = W_, Z_ = rn, Q_ = 200;
function e4(e, r, t) {
  var n = -1, a = Y_, i = e.length, o = !0, s = [], u = s;
  if (t)
    o = !1, a = B_;
  else if (i >= Q_) {
    var c = r ? null : X_(e);
    if (c)
      return Z_(c);
    o = !1, a = J_, u = new H_();
  } else
    u = r ? [] : s;
  e:
    for (; ++n < i; ) {
      var f = e[n], h = r ? r(f) : f;
      if (f = t || f !== 0 ? f : 0, o && h === h) {
        for (var p = u.length; p--; )
          if (u[p] === h)
            continue e;
        r && u.push(h), s.push(f);
      } else a(u, h, t) || (u !== s && u.push(h), s.push(f));
    }
  return s;
}
var Cn = e4, r4 = Cn;
function t4(e) {
  return e && e.length ? r4(e) : [];
}
var ht = t4;
const n4 = /* @__PURE__ */ X(ht);
var i4 = ss, a4 = 1, s4 = 4;
function o4(e) {
  return i4(e, a4 | s4);
}
var Ns = o4;
const u4 = /* @__PURE__ */ X(Ns);
var c4 = yn, f4 = Le;
function l4(e, r) {
  var t = -1, n = f4(e) ? Array(e.length) : [];
  return c4(e, function(a, i, o) {
    n[++t] = r(a, i, o);
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
    var t = e !== void 0, n = e === null, a = e === e, i = Ji(e), o = r !== void 0, s = r === null, u = r === r, c = Ji(r);
    if (!s && !c && !i && e > r || i && o && u && !s && !c || n && o && u || !t && u || !a)
      return 1;
    if (!n && !i && !c && e < r || c && t && a && !n && !i || s && t && a || !o && a || !u)
      return -1;
  }
  return 0;
}
var y4 = v4, g4 = y4;
function m4(e, r, t) {
  for (var n = -1, a = e.criteria, i = r.criteria, o = a.length, s = t.length; ++n < o; ) {
    var u = g4(a[n], i[n]);
    if (u) {
      if (n >= s)
        return u;
      var c = t[n];
      return u * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - r.index;
}
var $4 = m4, St = we, _4 = ct, b4 = gn, w4 = d4, A4 = h4, C4 = Fe, E4 = $4, O4 = Ar, P4 = ne;
function T4(e, r, t) {
  r.length ? r = St(r, function(i) {
    return P4(i) ? function(o) {
      return _4(o, i.length === 1 ? i[0] : i);
    } : i;
  }) : r = [O4];
  var n = -1;
  r = St(r, C4(b4));
  var a = w4(e, function(i, o, s) {
    var u = St(r, function(c) {
      return c(i);
    });
    return { criteria: u, index: ++n, value: i };
  });
  return A4(a, function(i, o) {
    return E4(i, o, t);
  });
}
var S4 = T4, I4 = dt, N4 = S4, j4 = Te, Xi = _n, x4 = j4(function(e, r) {
  if (e == null)
    return [];
  var t = r.length;
  return t > 1 && Xi(e, r[0], r[1]) ? r = [] : t > 2 && Xi(r[0], r[1], r[2]) && (r = [r[0]]), N4(e, I4(r, 1), []);
}), js = x4, R4 = Cn;
function M4(e, r) {
  return r = typeof r == "function" ? r : void 0, e && e.length ? R4(e, void 0, r) : [];
}
var En = M4, F4 = Te, L4 = Je, D4 = _n, z4 = ar, xs = Object.prototype, K4 = xs.hasOwnProperty, V4 = F4(function(e, r) {
  e = Object(e);
  var t = -1, n = r.length, a = n > 2 ? r[2] : void 0;
  for (a && D4(r[0], r[1], a) && (n = 1); ++t < n; )
    for (var i = r[t], o = z4(i), s = -1, u = o.length; ++s < u; ) {
      var c = o[s], f = e[c];
      (f === void 0 || L4(f, xs[c]) && !K4.call(e, c)) && (e[c] = i[c]);
    }
  return e;
}), U4 = V4, G4 = it, q4 = wn, k4 = An, W4 = we, H4 = Fe, Zi = at, Y4 = Math.min;
function B4(e, r, t) {
  for (var n = t ? k4 : q4, a = e[0].length, i = e.length, o = i, s = Array(i), u = 1 / 0, c = []; o--; ) {
    var f = e[o];
    o && r && (f = W4(f, H4(r))), u = Y4(f.length, u), s[o] = !t && (r || a >= 120 && f.length >= 120) ? new G4(o && f) : void 0;
  }
  f = e[0];
  var h = -1, p = s[0];
  e:
    for (; ++h < a && c.length < u; ) {
      var y = f[h], $ = r ? r(y) : y;
      if (y = t || y !== 0 ? y : 0, !(p ? Zi(p, $) : n(c, $, t))) {
        for (o = i; --o; ) {
          var b = s[o];
          if (!(b ? Zi(b, $) : n(e[o], $, t)))
            continue e;
        }
        p && p.push($), c.push(y);
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
var ub = ob, pe = mn, cb = js, On = ht, Qi = En, fb = U4, lb = Fs, kr = Be, It = ub, ea = (e) => Array.isArray(e) ? e : [e], le = (e) => e === void 0, jr = (e) => kr(e) || Array.isArray(e) ? Object.keys(e) : [], Ge = (e, r) => e.hasOwnProperty(r), ke = (e) => cb(On(e)), ra = (e) => le(e) || Array.isArray(e) && e.length === 0, db = (e, r, t, n) => r && Ge(r, t) && e && Ge(e, t) && n(e[t], r[t]), Nt = (e, r) => le(e) && r === 0 || le(r) && e === 0 || pe(e, r), pb = (e, r) => le(e) && r === !1 || le(r) && e === !1 || pe(e, r), ta = (e) => le(e) || pe(e, {}) || e === !0, xr = (e) => le(e) || pe(e, {}), na = (e) => le(e) || kr(e) || e === !0 || e === !1;
function ia(e, r) {
  return ra(e) && ra(r) ? !0 : pe(ke(e), ke(r));
}
function hb(e, r) {
  return e = ea(e), r = ea(r), pe(ke(e), ke(r));
}
function Lr(e, r, t, n) {
  var a = On(jr(e).concat(jr(r)));
  return xr(e) && xr(r) ? !0 : xr(e) && jr(r).length || xr(r) && jr(e).length ? !1 : a.every(function(i) {
    var o = e[i], s = r[i];
    return Array.isArray(o) && Array.isArray(s) ? pe(ke(e), ke(r)) : Array.isArray(o) && !Array.isArray(s) || Array.isArray(s) && !Array.isArray(o) ? !1 : db(e, r, i, n);
  });
}
function vb(e, r, t, n) {
  return kr(e) && kr(r) ? n(e, r) : Array.isArray(e) && Array.isArray(r) ? Lr(e, r, t, n) : pe(e, r);
}
function jt(e, r, t, n) {
  var a = Qi(e, n), i = Qi(r, n), o = lb(a, i, n);
  return o.length === Math.max(a.length, i.length);
}
var yb = {
  title: pe,
  uniqueItems: pb,
  minLength: Nt,
  minItems: Nt,
  minProperties: Nt,
  required: ia,
  enum: ia,
  type: hb,
  items: vb,
  anyOf: jt,
  allOf: jt,
  oneOf: jt,
  properties: Lr,
  patternProperties: Lr,
  dependencies: Lr
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
function Gt(e, r, t) {
  if (t = fb(t, {
    ignore: []
  }), ta(e) && ta(r))
    return !0;
  if (!na(e) || !na(r))
    throw new Error("Either of the values are not a JSON schema.");
  if (e === r)
    return !0;
  if (It(e) && It(r))
    return e === r;
  if (e === void 0 && r === !1 || r === void 0 && e === !1 || le(e) && !le(r) || !le(e) && le(r))
    return !1;
  var n = On(Object.keys(e).concat(Object.keys(r)));
  if (t.ignore.length && (n = n.filter((i) => t.ignore.indexOf(i) === -1)), !n.length)
    return !0;
  function a(i, o) {
    return Gt(i, o, t);
  }
  return n.every(function(i) {
    var o = e[i], s = r[i];
    if (mb.indexOf(i) !== -1)
      return Gt(o, s, t);
    var u = yb[i];
    if (u || (u = pe), pe(o, s))
      return !0;
    if (gb.indexOf(i) === -1 && (!Ge(e, i) && Ge(r, i) || Ge(e, i) && !Ge(r, i)))
      return o === s;
    var c = u(o, s, i, a);
    if (!It(c))
      throw new Error("Comparer must return true or false");
    return c;
  });
}
var Pn = Gt;
function $b(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}
var Tn = Array.isArray || $b;
function _b(e) {
  return (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]") && e.valueOf() === e.valueOf();
}
var bb = _b, wb = bb;
function Ab(e) {
  return wb(e) && e % 1 === 0;
}
var Cb = Ab, Eb = Tn, Ob = Cb;
function Pb(e) {
  var r;
  if (!Eb(e) || (r = e.length, !r))
    return !1;
  for (var t = 0; t < r; t++)
    if (!Ob(e[t]))
      return !1;
  return !0;
}
var Ls = Pb;
function Tb(e) {
  return typeof e == "function";
}
var Ds = Tb, Sb = Tn, aa = Ls, Ib = Ds, Rr = Math.pow(2, 31) - 1;
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
  var e = arguments.length, r, t, n, a, i, o, s;
  for (r = new Array(e), s = 0; s < e; s++)
    r[s] = arguments[s];
  if (aa(r)) {
    if (e === 2)
      return i = r[0], o = r[1], i < 0 && (i = -i), o < 0 && (o = -o), i <= Rr && o <= Rr ? oa(i, o) : sa(i, o);
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
    for (i = new Array(a), s = 0; s < a; s++)
      i[s] = t(n[s], s);
    n = i;
  }
  if (e < 3 && !aa(n))
    throw new TypeError("gcd()::invalid input argument. Accessed array values must be integers. Value: `" + n + "`.");
  for (s = 0; s < a; s++)
    i = n[s], i < 0 && (n[s] = -i);
  for (i = n[0], s = 1; s < a; s++)
    o = n[s], o <= Rr && i <= Rr ? i = oa(i, o) : i = sa(i, o);
  return i;
}
var jb = Nb, ua = jb, xb = Tn, ca = Ls, Rb = Ds;
function Mb() {
  var e = arguments.length, r, t, n, a, i, o, s;
  for (r = new Array(e), s = 0; s < e; s++)
    r[s] = arguments[s];
  if (ca(r)) {
    if (e === 2)
      return i = r[0], o = r[1], i < 0 && (i = -i), o < 0 && (o = -o), i === 0 || o === 0 ? 0 : i / ua(i, o) * o;
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
    for (i = new Array(a), s = 0; s < a; s++)
      i[s] = t(n[s], s);
    n = i;
  }
  if (e < 3 && !ca(n))
    throw new TypeError("lcm()::invalid input argument. Accessed array values must be integers. Value: `" + n + "`.");
  for (s = 0; s < a; s++)
    i = n[s], i < 0 && (n[s] = -i);
  for (i = n[0], s = 1; s < a; s++) {
    if (o = n[s], i === 0 || o === 0)
      return 0;
    i = i / ua(i, o) * o;
  }
  return i;
}
var Fb = Mb, Lb = $n, fa = ce;
function zs(e, r, t, n, a, i) {
  return fa(e) && fa(r) && (i.set(r, e), Lb(e, r, void 0, zs, i), i.delete(r)), e;
}
var Db = zs, zb = $n, Kb = Ss, Vb = Kb(function(e, r, t, n) {
  zb(e, r, t, n);
}), Ub = Vb, Gb = cs, qb = Te, kb = Db, Wb = Ub, Hb = qb(function(e) {
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
  var a = n ? a3 : i3, i = -1, o = r.length, s = e;
  for (e === r && (r = o3(r)), t && (s = n3(e, s3(t))); ++i < o; )
    for (var u = 0, c = r[i], f = t ? t(c) : c; (u = a(s, f, u, n)) > -1; )
      s !== e && la.call(s, u, 1), la.call(e, u, 1);
  return e;
}
var f3 = c3, l3 = f3;
function d3(e, r) {
  return e && e.length && r && r.length ? l3(e, r) : e;
}
var p3 = d3, h3 = fn, v3 = yn, y3 = bs, g3 = ne;
function m3(e, r) {
  var t = g3(e) ? h3 : v3;
  return t(e, y3(r));
}
var Ks = m3, $3 = it, _3 = wn, b3 = An, w3 = we, A3 = Fe, C3 = at, E3 = 200;
function O3(e, r, t, n) {
  var a = -1, i = _3, o = !0, s = e.length, u = [], c = r.length;
  if (!s)
    return u;
  t && (r = w3(r, A3(t))), n ? (i = b3, o = !1) : r.length >= E3 && (i = C3, o = !1, r = new $3(r));
  e:
    for (; ++a < s; ) {
      var f = e[a], h = t == null ? f : t(f);
      if (f = n || f !== 0 ? f : 0, o && h === h) {
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
const x3 = hn, R3 = bn, Vs = Be, M3 = ht, F3 = En, L3 = j3;
function D3(e) {
  for (const r in e)
    Us(e, r) && Gs(e[r]) && delete e[r];
  return e;
}
const z3 = (e) => M3(R3(e.map(Sn))), K3 = (e, r) => e.map((t) => t && t[r]), Us = (e, r) => Object.prototype.hasOwnProperty.call(e, r), Sn = (e) => Vs(e) || Array.isArray(e) ? Object.keys(e) : [], V3 = (e) => e !== void 0, U3 = (e) => Vs(e) || e === !0 || e === !1, Gs = (e) => !Sn(e).length && e !== !1 && e !== !0, G3 = (e, ...r) => L3.apply(null, [e].concat(x3(r)));
var qs = {
  allUniqueKeys: z3,
  deleteUndefinedProps: D3,
  getValues: K3,
  has: Us,
  isEmptySchema: Gs,
  isSchema: U3,
  keys: Sn,
  notUndefined: V3,
  uniqWith: F3,
  withoutArr: G3
};
const q3 = Pn, k3 = Ks, {
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
    const i = Y3(e, a), o = J3(i.filter(B3), q3);
    return n[a] = r(o, a), n;
  }, {});
}
var Z3 = {
  keywords: ["properties", "patternProperties", "additionalProperties"],
  resolver(e, r, t, n) {
    n.ignoreAdditionalProperties || (e.forEach(function(i) {
      const o = e.filter((f) => f !== i), s = dr(i.properties), c = dr(i.patternProperties).map((f) => new RegExp(f));
      o.forEach(function(f) {
        const h = dr(f.properties), p = h.filter(($) => c.some((b) => b.test($)));
        da(h, s, p).forEach(function($) {
          f.properties[$] = t.properties([
            f.properties[$],
            i.additionalProperties
          ], $);
        });
      });
    }), e.forEach(function(i) {
      const o = e.filter((u) => u !== i), s = dr(i.patternProperties);
      i.additionalProperties === !1 && o.forEach(function(u) {
        const c = dr(u.patternProperties);
        da(c, s).forEach((h) => delete u.patternProperties[h]);
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
const Q3 = Pn, e9 = Ks, {
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
    const o = s9(e, i), s = i9(o.filter(Ws), Q3);
    return a[i] = r(s, i), a;
  }, []);
}
var c9 = {
  keywords: ["items", "additionalItems"],
  resolver(e, r, t) {
    const n = e.map((s) => s.items), a = n.filter(Ws), i = {};
    a.every(ks) ? i.items = t.items(n) : i.items = u9(e, t.items, n);
    let o;
    return a.every(Array.isArray) ? o = e.map((s) => s.additionalItems) : a.some(Array.isArray) && (o = o9(e)), o && (i.additionalItems = t.additionalItems(o)), i.additionalItems === !1 && Array.isArray(i.items) && a9(i.items), t9(i);
  }
};
const Hs = Ns, Wr = Pn, f9 = Fb, l9 = Yb, Ys = hn, In = bn, d9 = e3, p9 = Fs, qt = mn, We = Be, h9 = p3, Bs = js, Nn = ht, qe = En, Js = Z3, Xs = c9, Mr = (e, r) => e.indexOf(r) !== -1, v9 = (e) => We(e) || e === !0 || e === !1, y9 = (e) => e === !1, Zs = (e) => e === !0, vt = (e, r, t) => t(e), Qs = (e) => Bs(Nn(In(e))), Hr = (e) => e !== void 0, eo = (e) => Nn(In(e.map(w9))), sr = (e) => e[0], g9 = (e) => Qs(e), Cr = (e) => Math.max.apply(Math, e), Er = (e) => Math.min.apply(Math, e), m9 = (e) => e.some(Zs), $9 = (e) => qe(Ys(e), qt);
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
function kt(e, r) {
  if (r = r || [], !e.length)
    return r;
  const t = e.slice(0).shift(), n = e.slice(1);
  return r.length ? kt(n, Ys(r.map((a) => t.map((i) => [i].concat(a))))) : kt(n, t.map((a) => a));
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
    const o = a.complexResolvers[r];
    if (!o || !o.resolver)
      throw new Error("No resolver found for " + r);
    const s = t.map((h) => e.reduce((p, y) => (h[y] !== void 0 && (p[y] = h[y]), p), {})), u = qe(s, Wr), c = o.keywords.reduce((h, p) => ({
      ...h,
      [p]: (y, $ = []) => n(y, null, i.concat(p, $))
    }), {}), f = o.resolver(u, i.concat(r), c, a);
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
], D = {
  type(e) {
    if (e.some(Array.isArray)) {
      const r = e.map(function(n) {
        return Array.isArray(n) ? n : [n];
      }), t = d9.apply(null, r);
      if (t.length === 1)
        return t[0];
      if (t.length > 1)
        return Nn(t);
    }
  },
  dependencies(e, r, t) {
    return eo(e).reduce(function(a, i) {
      const o = to(e, i);
      let s = qe(o.filter(Hr), qt);
      const u = s.filter(Array.isArray);
      if (u.length) {
        if (u.length === s.length)
          a[i] = Qs(s);
        else {
          const c = s.filter(v9), f = u.map(C9);
          a[i] = t(c.concat(f), i);
        }
        return a;
      }
      return s = qe(s, Wr), a[i] = t(s, i), a;
    }, {});
  },
  oneOf(e, r, t) {
    const n = kt(Hs(e)), a = b9(n, t), i = qe(a, Wr);
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
    const r = p9.apply(null, e.concat(qt));
    if (r.length)
      return Bs(r);
  }
};
D.$id = sr;
D.$ref = sr;
D.$schema = sr;
D.additionalItems = vt;
D.additionalProperties = vt;
D.anyOf = D.oneOf;
D.contains = vt;
D.default = sr;
D.definitions = D.dependencies;
D.description = sr;
D.examples = $9;
D.exclusiveMaximum = Er;
D.exclusiveMinimum = Cr;
D.items = Xs;
D.maximum = Er;
D.maxItems = Er;
D.maxLength = Er;
D.maxProperties = Er;
D.minimum = Cr;
D.minItems = Cr;
D.minLength = Cr;
D.minProperties = Cr;
D.properties = Js;
D.propertyNames = vt;
D.required = g9;
D.title = sr;
D.uniqueItems = m9;
const T9 = {
  properties: Js,
  items: Xs
};
function jn(e, r, t) {
  r = l9(r, {
    ignoreAdditionalProperties: !1,
    resolvers: D,
    complexResolvers: T9,
    deep: !0
  });
  const n = Object.entries(r.complexResolvers);
  function a(s, u, c) {
    s = Hs(s.filter(Hr)), c = c || [];
    const f = We(u) ? u : {};
    if (!s.length)
      return;
    if (s.some(y9))
      return !1;
    if (s.every(Zs))
      return !0;
    s = s.filter(We);
    const h = eo(s);
    if (r.deep && Mr(h, "allOf"))
      return jn({
        allOf: s
      }, r);
    const p = n.map(([y, $]) => h.filter((b) => $.keywords.includes(b)));
    return p.forEach((y) => h9(h, y)), h.forEach(function(y) {
      const $ = to(s, y), b = qe($.filter(Hr), _9(y));
      if (b.length === 1 && Mr(O9, y))
        f[y] = b[0].map((_) => a([_], _));
      else if (b.length === 1 && !Mr(E9, y) && !Mr(P9, y))
        f[y] = b[0];
      else {
        const _ = r.resolvers[y] || r.resolvers.defaultResolver;
        if (!_) throw new Error("No resolver found for key " + y + ". You can provide a resolver for this keyword in the options, or provide a default resolver.");
        const g = (m, C = []) => a(m, null, c.concat(y, C));
        f[y] = _(b, c.concat(y), g, r), f[y] === void 0 ? no(b, c.concat(y)) : f[y] === void 0 && delete f[y];
      }
    }), n.reduce((y, [$, b], _) => ({
      ...y,
      ...A9(p[_], $, s, a, r, c)
    }), f);
  }
  const i = In(ro(e));
  return a(i);
}
jn.options = {
  resolvers: D
};
var S9 = jn;
const I9 = /* @__PURE__ */ X(S9);
function Yr(e) {
  let r;
  const t = J(e, "discriminator.propertyName", void 0);
  return ys(t) ? r = t : t !== void 0 && console.warn(`Expecting discriminator to be a string, got "${typeof t}" instead`), r;
}
function yr(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : e == null ? "null" : typeof e == "boolean" ? "boolean" : isNaN(e) ? typeof e == "object" ? "object" : "string" : "number";
}
var N9 = dt, j9 = Te, x9 = Cn, R9 = pt, M9 = j9(function(e) {
  return x9(N9(e, 1, R9, !0));
}), F9 = M9;
const L9 = /* @__PURE__ */ X(F9);
function Wt(e) {
  let { type: r } = e;
  return !r && e.const ? yr(e.const) : !r && e.enum ? "string" : !r && (e.properties || e.additionalProperties) ? "object" : (Array.isArray(r) && (r.length === 2 && r.includes("null") ? r = r.find((t) => t !== "null") : r = r[0]), r);
}
function Pe(e, r) {
  const t = Object.assign({}, e);
  return Object.keys(r).reduce((n, a) => {
    const i = e ? e[a] : {}, o = r[a];
    return e && a in e && B(o) ? n[a] = Pe(i, o) : e && r && (Wt(e) === "object" || Wt(r) === "object") && a === Jo && Array.isArray(i) && Array.isArray(o) ? n[a] = L9(i, o) : n[a] = o, n;
  }, t);
}
function Or(e, r, t = {}, n, a) {
  return ye(e, r, t, n, void 0, void 0, a)[0];
}
function D9(e, r, t, n, a, i, o) {
  const { if: s, then: u, else: c, ...f } = r, h = e.isValid(s, i || {}, t);
  let p = [f], y = [];
  if (n)
    u && typeof u != "boolean" && (y = y.concat(ye(e, u, t, i, n, a, o))), c && typeof c != "boolean" && (y = y.concat(ye(e, c, t, i, n, a, o)));
  else {
    const $ = h ? u : c;
    $ && typeof $ != "boolean" && (y = y.concat(ye(e, $, t, i, n, a, o)));
  }
  return y.length && (p = y.map(($) => Pe(f, $))), p.flatMap(($) => ye(e, $, t, i, n, a, o));
}
function io(e) {
  return e.reduce(
    (t, n) => n.length > 1 ? n.flatMap((a) => ws(t.length, (i) => [...t[i]].concat(a))) : (t.forEach((a) => a.push(n[0])), t),
    [[]]
    // Start with an empty list
  );
}
function z9(e, r, t, n, a, i, o) {
  const s = ao(e, r, t, n, a, i);
  if (s.length > 1 || s[0] !== r)
    return s;
  if (Aa in r)
    return so(e, r, t, n, a, i).flatMap((c) => ye(e, c, t, i, n, a, o));
  if (Xt in r && Array.isArray(r.allOf)) {
    const u = r.allOf.map((f) => ye(e, f, t, i, n, a, o));
    return io(u).map((f) => ({ ...r, allOf: f }));
  }
  return [r];
}
function ao(e, r, t, n, a, i, o) {
  const s = gr(r, t, a);
  return s !== r ? ye(e, s, t, i, n, a, o) : [r];
}
function gr(e, r, t) {
  if (!B(e))
    return e;
  let n = e;
  if (ge in n) {
    const { $ref: a, ...i } = n;
    if (t.includes(a))
      return n;
    t.push(a), n = { ...ps(a, r), ...i };
  }
  if (ve in n) {
    const a = [], i = T$(n[ve], (o, s, u) => {
      const c = [...t];
      o[u] = gr(s, r, c), a.push(c);
    }, {});
    w_(t, n4(O_(a))), n = { ...n, [ve]: i };
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
  }, i = n && B(n) ? n : {};
  return Object.keys(i).forEach((o) => {
    if (o in a.properties)
      return;
    let s = {};
    typeof a.additionalProperties != "boolean" ? ge in a.additionalProperties ? s = Or(e, { $ref: J(a.additionalProperties, [ge]) }, t, i) : "type" in a.additionalProperties ? s = { ...a.additionalProperties } : Dr in a.additionalProperties || hr in a.additionalProperties ? s = {
      type: "object",
      ...a.additionalProperties
    } : s = { type: yr(J(i, [o])) } : s = { type: yr(J(i, [o])) }, a.properties[o] = s, Ut(a.properties, [o, wa], !0);
  }), a;
}
function ye(e, r, t, n, a = !1, i = [], o) {
  return B(r) ? z9(e, r, t, a, i, n).flatMap((u) => {
    var c;
    let f = u;
    if (Ho in f)
      return D9(e, f, t, a, i, n, o);
    if (Xt in f) {
      if (a) {
        const { allOf: p, ...y } = f;
        return [...p, y];
      }
      try {
        const p = [], y = [];
        (c = f.allOf) === null || c === void 0 || c.forEach(($) => {
          typeof $ == "object" && $.contains ? p.push($) : y.push($);
        }), p.length && (f = { ...f, allOf: y }), f = o ? o(f) : I9(f, {
          deep: !1
        }), p.length && (f.allOf = p);
      } catch (p) {
        console.warn(`could not merge subschemas in allOf:
`, p);
        const { allOf: y, ...$ } = f;
        return $;
      }
    }
    return ko in f && f.additionalProperties !== !1 ? K9(e, f, t, n) : f;
  }) : [{}];
}
function V9(e, r, t, n, a) {
  let i;
  const { oneOf: o, anyOf: s, ...u } = r;
  if (Array.isArray(o) ? i = o : Array.isArray(s) && (i = s), i) {
    const c = a === void 0 && n ? {} : a, f = Yr(r);
    i = i.map((p) => gr(p, t, []));
    const h = Cs(e, c, i, t, f);
    if (n)
      return i.map((p) => Pe(u, p));
    r = Pe(u, i[h]);
  }
  return [r];
}
function so(e, r, t, n, a, i, o) {
  const { dependencies: s, ...u } = r;
  return V9(e, u, t, n, i).flatMap((f) => oo(e, s, f, t, n, a, i, o));
}
function oo(e, r, t, n, a, i, o, s) {
  let u = [t];
  for (const c in r) {
    if (!a && J(o, [c]) === void 0 || t.properties && !(c in t.properties))
      continue;
    const [f, h] = vn(c, r);
    return Array.isArray(h) ? u[0] = U9(t, h) : B(h) && (u = G9(e, t, n, c, h, a, i, o, s)), u.flatMap((p) => oo(e, f, p, n, a, i, o, s));
  }
  return u;
}
function U9(e, r) {
  if (!r)
    return e;
  const t = Array.isArray(e.required) ? Array.from(/* @__PURE__ */ new Set([...e.required, ...r])) : r;
  return { ...e, required: t };
}
function G9(e, r, t, n, a, i, o, s, u) {
  return ye(e, a, t, s, i, o, u).flatMap((f) => {
    const { oneOf: h, ...p } = f;
    if (r = Pe(r, p), h === void 0)
      return r;
    const y = h.map((b) => typeof b == "boolean" || !(ge in b) ? [b] : ao(e, b, t, i, o, s));
    return io(y).flatMap((b) => q9(e, r, t, n, b, i, o, s, u));
  });
}
function q9(e, r, t, n, a, i, o, s, u) {
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
      return e.isValid(p, s, t) || i;
    }
    return !1;
  });
  return !i && c.length !== 1 ? (console.warn("ignoring oneOf in dependencies because there isn't exactly one subschema that is valid"), [r]) : c.flatMap((f) => {
    const h = f, [p] = vn(n, h.properties), y = { ...h, properties: p };
    return ye(e, y, t, s, i, o, u).map((b) => Pe(r, b));
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
function Ht(e, r, t, n) {
  let a = 0;
  return t && (Kr(t.properties) ? a += Om(t.properties, (i, o, s) => {
    const u = J(n, s);
    if (typeof o == "boolean")
      return i;
    if (pr(o, ge)) {
      const c = Or(e, o, r, u);
      return i + Ht(e, r, c, u || {});
    }
    if ((pr(o, hr) || pr(o, Dr)) && u) {
      const c = pr(o, hr) ? hr : Dr, f = Yr(o);
      return i + Yt(e, r, u, J(o, c), -1, f);
    }
    if (o.type === "object")
      return Kr(u) && (i += 1), i + Ht(e, r, o, u);
    if (o.type === yr(u)) {
      let c = i + 1;
      return o.default ? c += u === o.default ? 1 : -1 : o.const && (c += u === o.const ? 1 : -1), c;
    }
    return i;
  }, 0) : ys(t.type) && t.type === yr(n) && (a += 1)), a;
}
function Yt(e, r, t, n, a = -1, i) {
  const o = n.map((h) => gr(h, r, [])), s = As(t, n, i);
  if (vs(s))
    return s;
  const u = o.reduce((h, p, y) => (Cs(e, t, [k9, p], r, i) === 1 && h.push(y), h), []);
  if (u.length === 1)
    return u[0];
  u.length || ws(o.length, (h) => u.push(h));
  const c = /* @__PURE__ */ new Set(), { bestIndex: f } = u.reduce((h, p) => {
    const { bestScore: y } = h, $ = o[p], b = Ht(e, r, $, t);
    return c.add(b), b > y ? { bestIndex: p, bestScore: b } : h;
  }, { bestIndex: a, bestScore: 0 });
  return c.size === 1 && a >= 0 ? a : f;
}
function W9(e) {
  return Array.isArray(e.items) && e.items.length > 0 && e.items.every((r) => B(r));
}
function Br(e, r, t = !1, n = !1) {
  if (Array.isArray(r)) {
    const a = Array.isArray(e) ? e : [], i = r.map((o, s) => a[s] ? Br(a[s], o, t, n) : o);
    return t && i.length < a.length && i.push(...a.slice(i.length)), i;
  }
  if (B(r)) {
    const a = Object.assign({}, e);
    return Object.keys(r).reduce((i, o) => (i[o] = Br(e ? J(e, o) : {}, J(r, o), t, n), i), a);
  }
  return n && r === void 0 ? e : r;
}
function xn(e, r, t = !1) {
  return Object.keys(r).reduce((n, a) => {
    const i = e ? e[a] : {}, o = r[a];
    if (e && a in e && B(o))
      n[a] = xn(i, o, t);
    else if (t && Array.isArray(i) && Array.isArray(o)) {
      let s = o;
      t === "preventDuplicates" && (s = o.reduce((u, c) => (i.includes(c) || u.push(c), u), [])), n[a] = i.concat(s);
    } else
      n[a] = o;
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
function xt(e, r = He.Ignore, t = -1) {
  if (t >= 0) {
    if (Array.isArray(e.items) && t < e.items.length) {
      const n = e.items[t];
      if (typeof n != "boolean")
        return n;
    }
  } else if (e.items && !Array.isArray(e.items) && typeof e.items != "boolean")
    return e.items;
  return r !== He.Ignore && B(e.additionalItems) ? e.additionalItems : {};
}
function ha(e, r, t, n, a, i = [], o = {}, s = !1) {
  const { emptyObjectFields: u = "populateAllDefaults" } = o;
  if (n || s)
    e[r] = t;
  else if (u !== "skipDefaults")
    if (B(t)) {
      const c = a === void 0 ? i.includes(r) : a;
      u === "skipEmptyDefaults" ? vr(t) || (e[r] = t) : (!vr(t) || i.includes(r)) && (c || u !== "populateRequiredDefaults") && (e[r] = t);
    } else // Store computedDefault if it's a defined primitive (e.g., true) and satisfies certain conditions
    // Condition 1: computedDefault is not undefined
    // Condition 2: If emptyObjectFields is 'populateAllDefaults' or 'skipEmptyDefaults) or if the key is a required field
    t !== void 0 && (u === "populateAllDefaults" || u === "skipEmptyDefaults" || i.includes(r)) && (e[r] = t);
}
function Oe(e, r, t = {}) {
  const { parentDefaults: n, rawFormData: a, rootSchema: i = {}, includeUndefinedValues: o = !1, _recurseList: s = [], experimental_defaultFormStateBehavior: u = void 0, experimental_customMergeAllOf: c = void 0, required: f } = t, h = B(a) ? a : {}, p = B(r) ? r : {};
  let y = n, $ = null, b = s;
  if (uo(p))
    y = p.const;
  else if (B(y) && B(p.default))
    y = xn(y, p.default);
  else if (Wo in p)
    y = p.default;
  else if (ge in p) {
    const g = p[ge];
    s.includes(g) || (b = s.concat(g), $ = ps(g, i));
  } else if (Aa in p) {
    const g = {
      ...h,
      ...va(e, p, t, y)
    };
    $ = so(e, p, i, !1, [], g, c)[0];
  } else if (W9(p))
    y = p.items.map((g, m) => Oe(e, g, {
      rootSchema: i,
      includeUndefinedValues: o,
      _recurseList: s,
      experimental_defaultFormStateBehavior: u,
      parentDefaults: Array.isArray(n) ? n[m] : void 0,
      rawFormData: h,
      required: f
    }));
  else if (hr in p) {
    const { oneOf: g, ...m } = p;
    if (g.length === 0)
      return;
    const C = Yr(p);
    $ = g[Yt(e, i, vr(h) ? void 0 : h, g, 0, C)], $ = Pe(m, $);
  } else if (Dr in p) {
    const { anyOf: g, ...m } = p;
    if (g.length === 0)
      return;
    const C = Yr(p);
    $ = g[Yt(e, i, vr(h) ? void 0 : h, g, 0, C)], $ = Pe(m, $);
  }
  if ($)
    return Oe(e, $, {
      rootSchema: i,
      includeUndefinedValues: o,
      _recurseList: b,
      experimental_defaultFormStateBehavior: u,
      parentDefaults: y,
      rawFormData: h,
      required: f
    });
  y === void 0 && (y = p.default);
  const _ = va(e, p, t, y);
  return _ ?? y;
}
function B9(e, r, { rawFormData: t, rootSchema: n = {}, includeUndefinedValues: a = !1, _recurseList: i = [], experimental_defaultFormStateBehavior: o = void 0, experimental_customMergeAllOf: s = void 0, required: u } = {}, c) {
  {
    const f = B(t) ? t : {}, h = r, p = (o == null ? void 0 : o.allOf) === "populateDefaults" && Xt in h ? Or(e, h, n, f, s) : h, y = p[zr], $ = Object.keys(p.properties || {}).reduce((b, _) => {
      var g;
      const m = J(p, [ve, _]), C = B(y) && y[_] !== void 0, P = B(m) && zr in m || C, x = Oe(e, m, {
        rootSchema: n,
        _recurseList: i,
        experimental_defaultFormStateBehavior: o,
        experimental_customMergeAllOf: s,
        includeUndefinedValues: a === !0,
        parentDefaults: J(c, [_]),
        rawFormData: J(f, [_]),
        required: (g = p.required) === null || g === void 0 ? void 0 : g.includes(_)
      });
      return ha(b, _, x, a, u, p.required, o, P), b;
    }, {});
    if (p.additionalProperties) {
      const b = B(p.additionalProperties) ? p.additionalProperties : {}, _ = /* @__PURE__ */ new Set();
      B(c) && Object.keys(c).filter((m) => !p.properties || !p.properties[m]).forEach((m) => _.add(m));
      const g = [];
      Object.keys(f).filter((m) => !p.properties || !p.properties[m]).forEach((m) => {
        _.add(m), g.push(m);
      }), _.forEach((m) => {
        var C;
        const P = Oe(e, b, {
          rootSchema: n,
          _recurseList: i,
          experimental_defaultFormStateBehavior: o,
          includeUndefinedValues: a === !0,
          parentDefaults: J(c, [m]),
          rawFormData: J(f, [m]),
          required: (C = p.required) === null || C === void 0 ? void 0 : C.includes(m)
        });
        ha($, m, P, a, u, g);
      });
    }
    return $;
  }
}
function J9(e, r, { rawFormData: t, rootSchema: n = {}, _recurseList: a = [], experimental_defaultFormStateBehavior: i = void 0, required: o } = {}, s) {
  var u, c, f, h;
  const p = r, y = ((u = i == null ? void 0 : i.arrayMinItems) === null || u === void 0 ? void 0 : u.populate) === "never", $ = ((c = i == null ? void 0 : i.arrayMinItems) === null || c === void 0 ? void 0 : c.populate) === "requiredOnly", b = (i == null ? void 0 : i.emptyObjectFields) === "skipEmptyDefaults", _ = (h = (f = i == null ? void 0 : i.arrayMinItems) === null || f === void 0 ? void 0 : f.computeSkipPopulate) !== null && h !== void 0 ? h : () => !1, g = b ? void 0 : [];
  if (Array.isArray(s) && (s = s.map((se, I) => {
    const M = xt(p, He.Fallback, I);
    return Oe(e, M, {
      rootSchema: n,
      _recurseList: a,
      experimental_defaultFormStateBehavior: i,
      parentDefaults: se,
      required: o
    });
  })), Array.isArray(t)) {
    const se = xt(p);
    y ? s = t : s = t.map((I, M) => Oe(e, se, {
      rootSchema: n,
      _recurseList: a,
      experimental_defaultFormStateBehavior: i,
      rawFormData: I,
      parentDefaults: J(s, [M]),
      required: o
    }));
  }
  if ((B(p) && zr in p) === !1) {
    if (y)
      return s ?? g;
    if ($ && !o)
      return s || void 0;
  }
  const C = Array.isArray(s) ? s.length : 0;
  if (!p.minItems || Y9(e, p, n) || _(e, p, n) || p.minItems <= C)
    return s || g;
  const P = s || [], x = xt(p, He.Invert), Z = x.default, ae = new Array(p.minItems - C).fill(Oe(e, x, {
    parentDefaults: Z,
    rootSchema: n,
    _recurseList: a,
    experimental_defaultFormStateBehavior: i,
    required: o
  }));
  return P.concat(ae);
}
function va(e, r, t = {}, n) {
  switch (Wt(r)) {
    case "object":
      return B9(e, r, t, n);
    case "array":
      return J9(e, r, t, n);
  }
}
function X9(e, r, t, n, a = !1, i, o) {
  if (!B(r))
    throw new Error("Invalid schema: " + r);
  const s = Or(e, r, n, t, o), u = Oe(e, s, {
    rootSchema: n,
    includeUndefinedValues: a,
    experimental_defaultFormStateBehavior: i,
    experimental_customMergeAllOf: o,
    rawFormData: t
  });
  if (t == null || typeof t == "number" && isNaN(t))
    return u;
  const { mergeDefaultsIntoFormData: c, arrayMinItems: f = {} } = {}, { mergeExtraDefaults: h } = f, p = c === "useDefaultIfFormDataUndefined";
  return B(t) || Array.isArray(t) ? Br(u, t, h, p) : t;
}
var Z9 = Es;
function Q9(e, r, t, n) {
  return n = typeof n == "function" ? n : void 0, e == null ? e : Z9(e, r, t, n);
}
var e5 = Q9;
const r5 = /* @__PURE__ */ X(e5);
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
    let n = Array.isArray(r) && r.length > 0 || typeof r == "string" ? J(this.errorSchema, r) : this.errorSchema;
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
    let a = J(n, _e);
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
    return Ut(n, _e, a), this;
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
    return Ut(t, _e, []), this;
  }
}
var K = {};
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
  if (ya) return K;
  ya = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), $;
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
                case s:
                case o:
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
  return K.ContextConsumer = o, K.ContextProvider = i, K.Element = e, K.ForwardRef = u, K.Fragment = t, K.Lazy = p, K.Memo = h, K.Portal = r, K.Profiler = a, K.StrictMode = n, K.Suspense = c, K.SuspenseList = f, K.isAsyncMode = function() {
    return !1;
  }, K.isConcurrentMode = function() {
    return !1;
  }, K.isContextConsumer = function(_) {
    return b(_) === o;
  }, K.isContextProvider = function(_) {
    return b(_) === i;
  }, K.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === e;
  }, K.isForwardRef = function(_) {
    return b(_) === u;
  }, K.isFragment = function(_) {
    return b(_) === t;
  }, K.isLazy = function(_) {
    return b(_) === p;
  }, K.isMemo = function(_) {
    return b(_) === h;
  }, K.isPortal = function(_) {
    return b(_) === r;
  }, K.isProfiler = function(_) {
    return b(_) === a;
  }, K.isStrictMode = function(_) {
    return b(_) === n;
  }, K.isSuspense = function(_) {
    return b(_) === c;
  }, K.isSuspenseList = function(_) {
    return b(_) === f;
  }, K.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === t || _ === a || _ === n || _ === c || _ === f || _ === y || typeof _ == "object" && _ !== null && (_.$$typeof === p || _.$$typeof === h || _.$$typeof === i || _.$$typeof === o || _.$$typeof === u || _.$$typeof === $ || _.getModuleId !== void 0);
  }, K.typeOf = b, K;
}
var V = {};
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
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), $ = !1, b = !1, _ = !1, g = !1, m = !1, C;
    C = Symbol.for("react.module.reference");
    function P(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === t || S === a || m || S === n || S === c || S === f || g || S === y || $ || b || _ || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === h || S.$$typeof === i || S.$$typeof === o || S.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === C || S.getModuleId !== void 0));
    }
    function x(S) {
      if (typeof S == "object" && S !== null) {
        var Ee = S.$$typeof;
        switch (Ee) {
          case e:
            var he = S.type;
            switch (he) {
              case t:
              case a:
              case n:
              case c:
              case f:
                return he;
              default:
                var or = he && he.$$typeof;
                switch (or) {
                  case s:
                  case o:
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
    var Z = o, ae = i, se = e, I = u, M = t, Q = p, G = h, W = r, ee = a, oe = n, Se = c, ze = f, Ie = !1, Ne = !1;
    function Ke(S) {
      return Ie || (Ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function je(S) {
      return Ne || (Ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ae(S) {
      return x(S) === o;
    }
    function T(S) {
      return x(S) === i;
    }
    function l(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function v(S) {
      return x(S) === u;
    }
    function A(S) {
      return x(S) === t;
    }
    function j(S) {
      return x(S) === p;
    }
    function R(S) {
      return x(S) === h;
    }
    function H(S) {
      return x(S) === r;
    }
    function Ce(S) {
      return x(S) === a;
    }
    function yt(S) {
      return x(S) === n;
    }
    function Pr(S) {
      return x(S) === c;
    }
    function gt(S) {
      return x(S) === f;
    }
    V.ContextConsumer = Z, V.ContextProvider = ae, V.Element = se, V.ForwardRef = I, V.Fragment = M, V.Lazy = Q, V.Memo = G, V.Portal = W, V.Profiler = ee, V.StrictMode = oe, V.Suspense = Se, V.SuspenseList = ze, V.isAsyncMode = Ke, V.isConcurrentMode = je, V.isContextConsumer = Ae, V.isContextProvider = T, V.isElement = l, V.isForwardRef = v, V.isFragment = A, V.isLazy = j, V.isMemo = R, V.isPortal = H, V.isProfiler = Ce, V.isStrictMode = yt, V.isSuspense = Pr, V.isSuspenseList = gt, V.isValidElementType = P, V.typeOf = x;
  }()), V;
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
function Rn(e, r = []) {
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
      Zt(i) && (n = n.concat(Rn(i, [...r, a])));
    }
    return n;
  }, t);
}
var o5 = we, u5 = lt, c5 = ne, f5 = nr, l5 = Ga, d5 = De, p5 = ka;
function h5(e) {
  return c5(e) ? o5(e, d5) : f5(e) ? [e] : u5(l5(p5(e)));
}
var v5 = h5;
const y5 = /* @__PURE__ */ X(v5);
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
      return Zt(n) ? {
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
  let a = Rn(r), i = r;
  return vr(n) || (i = xn(n, r, !0), a = [...t].concat(a)), { errorSchema: i, errors: a };
}
function $5(e) {
  for (const r in e) {
    const t = e, n = t[r];
    r === ge && typeof n == "string" && n.startsWith("#") ? t[r] = Ca + n : t[r] = Mn(n);
  }
  return e;
}
function _5(e) {
  for (let r = 0; r < e.length; r++)
    e[r] = Mn(e[r]);
  return e;
}
function Mn(e) {
  return Array.isArray(e) ? _5([...e]) : Kr(e) ? $5({ ...e }) : e;
}
var ma;
(function(e) {
  e.ArrayItemTitle = "Item", e.MissingItems = "Missing items definition", e.YesLabel = "Yes", e.NoLabel = "No", e.CloseLabel = "Close", e.ErrorsLabel = "Errors", e.NewStringDefault = "New Value", e.AddButton = "Add", e.AddItemButton = "Add Item", e.CopyButton = "Copy", e.MoveDownButton = "Move down", e.MoveUpButton = "Move up", e.RemoveButton = "Remove", e.NowLabel = "Now", e.ClearLabel = "Clear", e.AriaDateLabel = "Select a date", e.PreviewLabel = "Preview", e.DecrementAriaLabel = "Decrease value by 1", e.IncrementAriaLabel = "Increase value by 1", e.UnknownFieldType = "Unknown field type %1", e.OptionPrefix = "Option %1", e.TitleOptionPrefix = "%1 option %2", e.KeyLabel = "%1 Key", e.InvalidObjectField = 'Invalid "%1" object field configuration: _%2_.', e.UnsupportedField = "Unsupported field schema.", e.UnsupportedFieldWithId = "Unsupported field schema for field `%1`.", e.UnsupportedFieldWithReason = "Unsupported field schema: _%1_.", e.UnsupportedFieldWithIdAndReason = "Unsupported field schema for field `%1`: _%2_.", e.FilesInfo = "**%1** (%2, %3 bytes)";
})(ma || (ma = {}));
var Bt = { exports: {} }, fo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
  function r(I, M) {
    return { validate: I, compare: M };
  }
  e.fullFormats = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: r(i, o),
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
    regex: se,
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
    int32: { type: "number", validate: P },
    // signed 64 bit integer
    int64: { type: "number", validate: x },
    // C-type float
    float: { type: "number", validate: Z },
    // C-type double
    double: { type: "number", validate: Z },
    // hint to the UI to hide input strings
    password: !0,
    // unchecked string payload
    binary: !0
  }, e.fastFormats = {
    ...e.fullFormats,
    date: r(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, o),
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
  function t(I) {
    return I % 4 === 0 && (I % 100 !== 0 || I % 400 === 0);
  }
  const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function i(I) {
    const M = n.exec(I);
    if (!M)
      return !1;
    const Q = +M[1], G = +M[2], W = +M[3];
    return G >= 1 && G <= 12 && W >= 1 && W <= (G === 2 && t(Q) ? 29 : a[G]);
  }
  function o(I, M) {
    if (I && M)
      return I > M ? 1 : I < M ? -1 : 0;
  }
  const s = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
  function u(I, M) {
    const Q = s.exec(I);
    if (!Q)
      return !1;
    const G = +Q[1], W = +Q[2], ee = +Q[3], oe = Q[5];
    return (G <= 23 && W <= 59 && ee <= 59 || G === 23 && W === 59 && ee === 60) && (!M || oe !== "");
  }
  function c(I, M) {
    if (!(I && M))
      return;
    const Q = s.exec(I), G = s.exec(M);
    if (Q && G)
      return I = Q[1] + Q[2] + Q[3] + (Q[4] || ""), M = G[1] + G[2] + G[3] + (G[4] || ""), I > M ? 1 : I < M ? -1 : 0;
  }
  const f = /t|\s/i;
  function h(I) {
    const M = I.split(f);
    return M.length === 2 && i(M[0]) && u(M[1], !0);
  }
  function p(I, M) {
    if (!(I && M))
      return;
    const [Q, G] = I.split(f), [W, ee] = M.split(f), oe = o(Q, W);
    if (oe !== void 0)
      return oe || c(G, ee);
  }
  const y = /\/|:/, $ = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function b(I) {
    return y.test(I) && $.test(I);
  }
  const _ = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function g(I) {
    return _.lastIndex = 0, _.test(I);
  }
  const m = -(2 ** 31), C = 2 ** 31 - 1;
  function P(I) {
    return Number.isInteger(I) && I <= C && I >= m;
  }
  function x(I) {
    return Number.isInteger(I);
  }
  function Z() {
    return !0;
  }
  const ae = /[^\\]\\Z/;
  function se(I) {
    if (ae.test(I))
      return !1;
    try {
      return new RegExp(I), !0;
    } catch {
      return !1;
    }
  }
})(fo);
var lo = {}, Fn = {}, Jr = {};
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
      return (m = this._str) !== null && m !== void 0 ? m : this._str = this._items.reduce((C, P) => `${C}${P}`, "");
    }
    get names() {
      var m;
      return (m = this._names) !== null && m !== void 0 ? m : this._names = this._items.reduce((C, P) => (P instanceof t && (C[P.str] = (C[P.str] || 0) + 1), C), {});
    }
  }
  e._Code = n, e.nil = new n("");
  function a(g, ...m) {
    const C = [g[0]];
    let P = 0;
    for (; P < m.length; )
      s(C, m[P]), C.push(g[++P]);
    return new n(C);
  }
  e._ = a;
  const i = new n("+");
  function o(g, ...m) {
    const C = [y(g[0])];
    let P = 0;
    for (; P < m.length; )
      C.push(i), s(C, m[P]), C.push(i, y(g[++P]));
    return u(C), new n(C);
  }
  e.str = o;
  function s(g, m) {
    m instanceof n ? g.push(...m._items) : m instanceof t ? g.push(m) : g.push(h(m));
  }
  e.addCodeArg = s;
  function u(g) {
    let m = 1;
    for (; m < g.length - 1; ) {
      if (g[m] === i) {
        const C = c(g[m - 1], g[m + 1]);
        if (C !== void 0) {
          g.splice(m - 1, 3, C);
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
    return m.emptyStr() ? g : g.emptyStr() ? m : o`${g}${m}`;
  }
  e.strConcat = f;
  function h(g) {
    return typeof g == "number" || typeof g == "boolean" || g === null ? g : y(Array.isArray(g) ? g.join(",") : g);
  }
  function p(g) {
    return new n(y(g));
  }
  e.stringify = p;
  function y(g) {
    return JSON.stringify(g).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = y;
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
var Jt = {};
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
  const o = (0, r._)`\n`;
  class s extends a {
    constructor(c) {
      super(c), this._values = {}, this._scope = c.scope, this.opts = { ...c, _n: c.lines ? o : r.nil };
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
      const p = this.toName(c), { prefix: y } = p, $ = (h = f.key) !== null && h !== void 0 ? h : f.ref;
      let b = this._values[y];
      if (b) {
        const m = b.get($);
        if (m)
          return m;
      } else
        b = this._values[y] = /* @__PURE__ */ new Map();
      b.set($, p);
      const _ = this._scope[y] || (this._scope[y] = []), g = _.length;
      return _[g] = f.ref, p.setValue(f, { property: y, itemIndex: g }), p;
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
      let y = r.nil;
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
            const C = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            y = (0, r._)`${y}${C} ${g} = ${m};${this.opts._n}`;
          } else if (m = p == null ? void 0 : p(g))
            y = (0, r._)`${y}${m}${this.opts._n}`;
          else
            throw new t(g);
          _.set(g, n.Completed);
        });
      }
      return y;
    }
  }
  e.ValueScope = s;
})(Jt);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const r = Jr, t = Jt;
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
    optimizeNames(l, v) {
      return this;
    }
  }
  class o extends i {
    constructor(l, v, A) {
      super(), this.varKind = l, this.name = v, this.rhs = A;
    }
    render({ es5: l, _n: v }) {
      const A = l ? t.varKinds.var : this.varKind, j = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${A} ${this.name}${j};` + v;
    }
    optimizeNames(l, v) {
      if (l[this.name.str])
        return this.rhs && (this.rhs = ee(this.rhs, l, v)), this;
    }
    get names() {
      return this.rhs instanceof r._CodeOrName ? this.rhs.names : {};
    }
  }
  class s extends i {
    constructor(l, v, A) {
      super(), this.lhs = l, this.rhs = v, this.sideEffects = A;
    }
    render({ _n: l }) {
      return `${this.lhs} = ${this.rhs};` + l;
    }
    optimizeNames(l, v) {
      if (!(this.lhs instanceof r.Name && !l[this.lhs.str] && !this.sideEffects))
        return this.rhs = ee(this.rhs, l, v), this;
    }
    get names() {
      const l = this.lhs instanceof r.Name ? {} : { ...this.lhs.names };
      return W(l, this.rhs);
    }
  }
  class u extends s {
    constructor(l, v, A, j) {
      super(l, A, j), this.op = v;
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
    optimizeNames(l, v) {
      return this.code = ee(this.code, l, v), this;
    }
    get names() {
      return this.code instanceof r._CodeOrName ? this.code.names : {};
    }
  }
  class y extends i {
    constructor(l = []) {
      super(), this.nodes = l;
    }
    render(l) {
      return this.nodes.reduce((v, A) => v + A.render(l), "");
    }
    optimizeNodes() {
      const { nodes: l } = this;
      let v = l.length;
      for (; v--; ) {
        const A = l[v].optimizeNodes();
        Array.isArray(A) ? l.splice(v, 1, ...A) : A ? l[v] = A : l.splice(v, 1);
      }
      return l.length > 0 ? this : void 0;
    }
    optimizeNames(l, v) {
      const { nodes: A } = this;
      let j = A.length;
      for (; j--; ) {
        const R = A[j];
        R.optimizeNames(l, v) || (oe(l, R.names), A.splice(j, 1));
      }
      return A.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((l, v) => G(l, v.names), {});
    }
  }
  class $ extends y {
    render(l) {
      return "{" + l._n + super.render(l) + "}" + l._n;
    }
  }
  class b extends y {
  }
  class _ extends $ {
  }
  _.kind = "else";
  class g extends $ {
    constructor(l, v) {
      super(v), this.condition = l;
    }
    render(l) {
      let v = `if(${this.condition})` + super.render(l);
      return this.else && (v += "else " + this.else.render(l)), v;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const l = this.condition;
      if (l === !0)
        return this.nodes;
      let v = this.else;
      if (v) {
        const A = v.optimizeNodes();
        v = this.else = Array.isArray(A) ? new _(A) : A;
      }
      if (v)
        return l === !1 ? v instanceof g ? v : v.nodes : this.nodes.length ? this : new g(Se(l), v instanceof g ? [v] : v.nodes);
      if (!(l === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(l, v) {
      var A;
      if (this.else = (A = this.else) === null || A === void 0 ? void 0 : A.optimizeNames(l, v), !!(super.optimizeNames(l, v) || this.else))
        return this.condition = ee(this.condition, l, v), this;
    }
    get names() {
      const l = super.names;
      return W(l, this.condition), this.else && G(l, this.else.names), l;
    }
  }
  g.kind = "if";
  class m extends $ {
  }
  m.kind = "for";
  class C extends m {
    constructor(l) {
      super(), this.iteration = l;
    }
    render(l) {
      return `for(${this.iteration})` + super.render(l);
    }
    optimizeNames(l, v) {
      if (super.optimizeNames(l, v))
        return this.iteration = ee(this.iteration, l, v), this;
    }
    get names() {
      return G(super.names, this.iteration.names);
    }
  }
  class P extends m {
    constructor(l, v, A, j) {
      super(), this.varKind = l, this.name = v, this.from = A, this.to = j;
    }
    render(l) {
      const v = l.es5 ? t.varKinds.var : this.varKind, { name: A, from: j, to: R } = this;
      return `for(${v} ${A}=${j}; ${A}<${R}; ${A}++)` + super.render(l);
    }
    get names() {
      const l = W(super.names, this.from);
      return W(l, this.to);
    }
  }
  class x extends m {
    constructor(l, v, A, j) {
      super(), this.loop = l, this.varKind = v, this.name = A, this.iterable = j;
    }
    render(l) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(l);
    }
    optimizeNames(l, v) {
      if (super.optimizeNames(l, v))
        return this.iterable = ee(this.iterable, l, v), this;
    }
    get names() {
      return G(super.names, this.iterable.names);
    }
  }
  class Z extends $ {
    constructor(l, v, A) {
      super(), this.name = l, this.args = v, this.async = A;
    }
    render(l) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(l);
    }
  }
  Z.kind = "func";
  class ae extends y {
    render(l) {
      return "return " + super.render(l);
    }
  }
  ae.kind = "return";
  class se extends $ {
    render(l) {
      let v = "try" + super.render(l);
      return this.catch && (v += this.catch.render(l)), this.finally && (v += this.finally.render(l)), v;
    }
    optimizeNodes() {
      var l, v;
      return super.optimizeNodes(), (l = this.catch) === null || l === void 0 || l.optimizeNodes(), (v = this.finally) === null || v === void 0 || v.optimizeNodes(), this;
    }
    optimizeNames(l, v) {
      var A, j;
      return super.optimizeNames(l, v), (A = this.catch) === null || A === void 0 || A.optimizeNames(l, v), (j = this.finally) === null || j === void 0 || j.optimizeNames(l, v), this;
    }
    get names() {
      const l = super.names;
      return this.catch && G(l, this.catch.names), this.finally && G(l, this.finally.names), l;
    }
  }
  class I extends $ {
    constructor(l) {
      super(), this.error = l;
    }
    render(l) {
      return `catch(${this.error})` + super.render(l);
    }
  }
  I.kind = "catch";
  class M extends $ {
    render(l) {
      return "finally" + super.render(l);
    }
  }
  M.kind = "finally";
  class Q {
    constructor(l, v = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...v, _n: v.lines ? `
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
    scopeValue(l, v) {
      const A = this._extScope.value(l, v);
      return (this._values[A.prefix] || (this._values[A.prefix] = /* @__PURE__ */ new Set())).add(A), A;
    }
    getScopeValue(l, v) {
      return this._extScope.getValue(l, v);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(l) {
      return this._extScope.scopeRefs(l, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(l, v, A, j) {
      const R = this._scope.toName(v);
      return A !== void 0 && j && (this._constants[R.str] = A), this._leafNode(new o(l, R, A)), R;
    }
    // `const` declaration (`var` in es5 mode)
    const(l, v, A) {
      return this._def(t.varKinds.const, l, v, A);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(l, v, A) {
      return this._def(t.varKinds.let, l, v, A);
    }
    // `var` declaration with optional assignment
    var(l, v, A) {
      return this._def(t.varKinds.var, l, v, A);
    }
    // assignment code
    assign(l, v, A) {
      return this._leafNode(new s(l, v, A));
    }
    // `+=` code
    add(l, v) {
      return this._leafNode(new u(l, e.operators.ADD, v));
    }
    // appends passed SafeExpr to code or executes Block
    code(l) {
      return typeof l == "function" ? l() : l !== r.nil && this._leafNode(new p(l)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...l) {
      const v = ["{"];
      for (const [A, j] of l)
        v.length > 1 && v.push(","), v.push(A), (A !== j || this.opts.es5) && (v.push(":"), (0, r.addCodeArg)(v, j));
      return v.push("}"), new r._Code(v);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(l, v, A) {
      if (this._blockNode(new g(l)), v && A)
        this.code(v).else().code(A).endIf();
      else if (v)
        this.code(v).endIf();
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
    _for(l, v) {
      return this._blockNode(l), v && this.code(v).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(l, v) {
      return this._for(new C(l), v);
    }
    // `for` statement for a range of values
    forRange(l, v, A, j, R = this.opts.es5 ? t.varKinds.var : t.varKinds.let) {
      const H = this._scope.toName(l);
      return this._for(new P(R, H, v, A), () => j(H));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(l, v, A, j = t.varKinds.const) {
      const R = this._scope.toName(l);
      if (this.opts.es5) {
        const H = v instanceof r.Name ? v : this.var("_arr", v);
        return this.forRange("_i", 0, (0, r._)`${H}.length`, (Ce) => {
          this.var(R, (0, r._)`${H}[${Ce}]`), A(R);
        });
      }
      return this._for(new x("of", j, R, v), () => A(R));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(l, v, A, j = this.opts.es5 ? t.varKinds.var : t.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(l, (0, r._)`Object.keys(${v})`, A);
      const R = this._scope.toName(l);
      return this._for(new x("in", j, R, v), () => A(R));
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
      const v = new ae();
      if (this._blockNode(v), this.code(l), v.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(ae);
    }
    // `try` statement
    try(l, v, A) {
      if (!v && !A)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const j = new se();
      if (this._blockNode(j), this.code(l), v) {
        const R = this.name("e");
        this._currNode = j.catch = new I(R), v(R);
      }
      return A && (this._currNode = j.finally = new M(), this.code(A)), this._endBlockNode(I, M);
    }
    // `throw` statement
    throw(l) {
      return this._leafNode(new h(l));
    }
    // start self-balancing block
    block(l, v) {
      return this._blockStarts.push(this._nodes.length), l && this.code(l).endBlock(v), this;
    }
    // end the current self-balancing block
    endBlock(l) {
      const v = this._blockStarts.pop();
      if (v === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const A = this._nodes.length - v;
      if (A < 0 || l !== void 0 && A !== l)
        throw new Error(`CodeGen: wrong number of nodes: ${A} vs ${l} expected`);
      return this._nodes.length = v, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(l, v = r.nil, A, j) {
      return this._blockNode(new Z(l, v, A)), j && this.code(j).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(Z);
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
    _endBlockNode(l, v) {
      const A = this._currNode;
      if (A instanceof l || v && A instanceof v)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${v ? `${l.kind}/${v.kind}` : l.kind}"`);
    }
    _elseNode(l) {
      const v = this._currNode;
      if (!(v instanceof g))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = v.else = l, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const l = this._nodes;
      return l[l.length - 1];
    }
    set _currNode(l) {
      const v = this._nodes;
      v[v.length - 1] = l;
    }
  }
  e.CodeGen = Q;
  function G(T, l) {
    for (const v in l)
      T[v] = (T[v] || 0) + (l[v] || 0);
    return T;
  }
  function W(T, l) {
    return l instanceof r._CodeOrName ? G(T, l.names) : T;
  }
  function ee(T, l, v) {
    if (T instanceof r.Name)
      return A(T);
    if (!j(T))
      return T;
    return new r._Code(T._items.reduce((R, H) => (H instanceof r.Name && (H = A(H)), H instanceof r._Code ? R.push(...H._items) : R.push(H), R), []));
    function A(R) {
      const H = v[R.str];
      return H === void 0 || l[R.str] !== 1 ? R : (delete l[R.str], H);
    }
    function j(R) {
      return R instanceof r._Code && R._items.some((H) => H instanceof r.Name && l[H.str] === 1 && v[H.str] !== void 0);
    }
  }
  function oe(T, l) {
    for (const v in l)
      T[v] = (T[v] || 0) - (l[v] || 0);
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
    return (l, v) => l === r.nil ? v : v === r.nil ? l : (0, r._)`${Ae(l)} ${T} ${Ae(v)}`;
  }
  function Ae(T) {
    return T instanceof r.Name ? T : (0, r._)`(${T})`;
  }
})(Fn);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
  const r = ba, t = Fn, n = t.operators, a = {
    formatMaximum: { okStr: "<=", ok: n.LTE, fail: n.GT },
    formatMinimum: { okStr: ">=", ok: n.GTE, fail: n.LT },
    formatExclusiveMaximum: { okStr: "<", ok: n.LT, fail: n.GTE },
    formatExclusiveMinimum: { okStr: ">", ok: n.GT, fail: n.LTE }
  }, i = {
    message: ({ keyword: s, schemaCode: u }) => t.str`should be ${a[s].okStr} ${u}`,
    params: ({ keyword: s, schemaCode: u }) => t._`{comparison: ${a[s].okStr}, limit: ${u}}`
  };
  e.formatLimitDefinition = {
    keyword: Object.keys(a),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: i,
    code(s) {
      const { gen: u, data: c, schemaCode: f, keyword: h, it: p } = s, { opts: y, self: $ } = p;
      if (!y.validateFormats)
        return;
      const b = new r.KeywordCxt(p, $.RULES.all.format.definition, "format");
      b.$data ? _() : g();
      function _() {
        const C = u.scopeValue("formats", {
          ref: $.formats,
          code: y.code.formats
        }), P = u.const("fmt", t._`${C}[${b.schemaCode}]`);
        s.fail$data(t.or(t._`typeof ${P} != "object"`, t._`${P} instanceof RegExp`, t._`typeof ${P}.compare != "function"`, m(P)));
      }
      function g() {
        const C = b.schema, P = $.formats[C];
        if (!P || P === !0)
          return;
        if (typeof P != "object" || P instanceof RegExp || typeof P.compare != "function")
          throw new Error(`"${h}": format "${C}" does not define "compare" function`);
        const x = u.scopeValue("formats", {
          key: C,
          ref: P,
          code: y.code.formats ? t._`${y.code.formats}${t.getProperty(C)}` : void 0
        });
        s.fail$data(m(x));
      }
      function m(C) {
        return t._`${C}.compare(${c}, ${f}) ${a[h].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  const o = (s) => (s.addKeyword(e.formatLimitDefinition), s);
  e.default = o;
})(lo);
(function(e, r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const t = fo, n = lo, a = Fn, i = new a.Name("fullFormats"), o = new a.Name("fastFormats"), s = (c, f = { keywords: !0 }) => {
    if (Array.isArray(f))
      return u(c, f, t.fullFormats, i), c;
    const [h, p] = f.mode === "fast" ? [t.fastFormats, o] : [t.fullFormats, i], y = f.formats || t.formatNames;
    return u(c, y, h, p), f.keywords && n.default(c), c;
  };
  s.get = (c, f = "full") => {
    const p = (f === "fast" ? t.fastFormats : t.fullFormats)[c];
    if (!p)
      throw new Error(`Unknown format "${c}"`);
    return p;
  };
  function u(c, f, h, p) {
    var y, $;
    (y = ($ = c.opts.code).formats) !== null && y !== void 0 || ($.formats = a._`require("ajv-formats/dist/formats").${p}`);
    for (const b of f)
      c.addFormat(b, h[b]);
  }
  e.exports = r = s, Object.defineProperty(r, "__esModule", { value: !0 }), r.default = s;
})(Bt, Bt.exports);
var b5 = Bt.exports;
const $a = /* @__PURE__ */ X(b5), w5 = {
  allErrors: !0,
  multipleOfPrecision: 8,
  strict: !1,
  verbose: !0,
  discriminator: !1
  // TODO enable this in V6
}, A5 = /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/, C5 = /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/;
function E5(e, r, t = {}, n, a = ba) {
  const i = new a({ ...w5, ...t });
  return n ? $a(i, n) : n !== !1 && $a(i), i.addFormat("data-url", C5), i.addFormat("color", A5), i.addKeyword(wa), i.addKeyword(Xo), Array.isArray(e) && i.addMetaSchema(e), Kr(r) && Object.keys(r).forEach((o) => {
    i.addFormat(o, r[o]);
  }), i;
}
function O5(e = [], r) {
  return e.map((t) => {
    const { instancePath: n, keyword: a, params: i, schemaPath: o, parentSchema: s, ...u } = t;
    let { message: c = "" } = u, f = n.replace(/\//g, "."), h = `${f} ${c}`.trim();
    if ("missingProperty" in i) {
      f = f ? `${f}.${i.missingProperty}` : i.missingProperty;
      const p = i.missingProperty, y = Zn(J(r, `${f.replace(/^\./, "")}`)).title;
      if (y)
        c = c.replace(p, y);
      else {
        const $ = J(s, [ve, p, "title"]);
        $ && (c = c.replace(p, $));
      }
      h = c;
    } else {
      const p = Zn(J(r, `${f.replace(/^\./, "")}`)).title;
      if (p)
        h = `'${p}' ${c}`.trim();
      else {
        const y = s == null ? void 0 : s.title;
        y && (h = `'${y}' ${c}`.trim());
      }
    }
    return {
      name: a,
      property: f,
      message: c,
      params: i,
      stack: h,
      schemaPath: o
    };
  });
}
function P5(e, r, t, n, a, i, o) {
  const { validationError: s } = r;
  let u = O5(r.errors, o);
  s && (u = [...u, { stack: s.message }]), typeof i == "function" && (u = i(u, o));
  let c = g5(u);
  if (s && (c = {
    ...c,
    $schema: {
      __errors: [s.message]
    }
  }), typeof a != "function")
    return { errors: u, errorSchema: c };
  const f = X9(e, n, t, n, !0), h = a(f, Ft(f), o), p = co(h);
  return m5({ errors: u, errorSchema: c }, p);
}
class T5 {
  /** Constructs an `AJV8Validator` instance using the `options`
   *
   * @param options - The `CustomValidatorOptionsType` options that are used to create the AJV instance
   * @param [localizer] - If provided, is used to localize a list of Ajv `ErrorObject`s
   */
  constructor(r, t) {
    const { additionalMetaSchemas: n, customFormats: a, ajvOptionsOverrides: i, ajvFormatOptions: o, AjvClass: s } = r;
    this.ajv = E5(n, a, i, o, s), this.localizer = t;
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
    return Rn(r, t);
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
    } catch (o) {
      n = o;
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
    const o = this.rawValidation(t, r);
    return P5(this, o, r, t, n, a, i);
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
      const i = Mn(r), o = (a = i[Ir]) !== null && a !== void 0 ? a : s5(i);
      let s;
      return s = this.ajv.getSchema(o), s === void 0 && (s = this.ajv.addSchema(i, o).getSchema(o) || this.ajv.compile(i)), s(t);
    } catch (i) {
      return console.warn("Error encountered compiling schema:", i), !1;
    }
  }
}
function S5(e = {}, r) {
  return new T5(e, r);
}
const Rt = S5(), D5 = ({
  schema: e,
  handleSubmit: r
}) => {
  const [t, n] = $e(-1), [a, i] = $e({}), o = Object.keys(e.properties || {}), s = o[t], u = o.length + 1, [c, f] = $e(void 0), [h, p] = $e(!0);
  Bn(() => {
    t >= 0 && t < o.length ? p(y()) : p(!0);
  }, [t, a]), Bn(() => {
    const C = (P) => {
      P.key === "Enter" && $();
    };
    return window.addEventListener("keydown", C), () => window.removeEventListener("keydown", C);
  }, [t]);
  const y = () => {
    var Z, ae, se;
    if (t === -1 || t >= o.length) return !0;
    const C = a[s], P = {
      type: "object",
      properties: {
        [s]: (Z = e.properties) == null ? void 0 : Z[s]
      },
      required: (ae = e.required) != null && ae.includes(s) ? [s] : []
    };
    return (se = e.required) != null && se.includes(s) && (C === void 0 || C === "") ? !1 : Rt.validateFormData(
      { [s]: C },
      P
    ).errors.length === 0;
  }, $ = () => {
    if (t === -1) {
      n(0);
      return;
    }
    if (!y()) {
      p(!1);
      return;
    }
    t === u - 2 && r(a), t < u - 1 && (n(t + 1), p(!0));
  }, b = () => {
    t > -1 && n(t - 1);
  }, _ = (C) => {
    var Z;
    if (i({ ...a, ...C.formData }), t === -1) return;
    const P = {
      type: "object",
      properties: {
        [s]: e.properties[s]
      },
      required: (Z = e.required) != null && Z.includes(s) ? [s] : []
    }, x = Rt.validateFormData(
      { [s]: C.formData[s] },
      P
    );
    p(x.errors.length === 0), f(x.errorSchema);
  }, g = (C) => {
    var x;
    const P = (x = e.properties) == null ? void 0 : x[C];
    if (!P) return "text";
    switch (P.type) {
      case "string":
        return P.format === "email" ? "email" : P.enum ? "select" : "text";
      case "integer":
      case "number":
        return "number";
      case "boolean":
        return "checkbox";
      default:
        return "text";
    }
  }, m = () => {
    var C, P;
    if (t === -1)
      return /* @__PURE__ */ E.jsx(j5, { onStart: $, schema: e });
    if (t === o.length)
      return /* @__PURE__ */ E.jsx(x5, {});
    {
      const x = g(s), Z = (C = e.properties) == null ? void 0 : C[s];
      return /* @__PURE__ */ E.jsx(
        Mo,
        {
          schema: {
            type: "object",
            properties: {
              [s]: {
                ...Z,
                title: void 0,
                // Remove RJSF's default title
                description: void 0
                // Remove RJSF's default description
              }
            },
            required: (P = e.required) != null && P.includes(s) ? [s] : []
          },
          formData: a,
          validator: Rt,
          showErrorList: !1,
          uiSchema: {
            [s]: {
              "ui:widget": x,
              "ui:title": Z.title,
              // Pass title to custom widget
              "ui:description": Z.description,
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
          formContext: { errors: c },
          onChange: _,
          children: /* @__PURE__ */ E.jsx("div", {})
        }
      );
    }
  };
  return /* @__PURE__ */ E.jsxs("div", { className: "fixed inset-0 flex items-center justify-center bg-red-300", children: [
    /* @__PURE__ */ E.jsx("div", { className: "absolute top-0 left-0 right-0 p-4", children: /* @__PURE__ */ E.jsx(I5, { current: t + 1, total: u }) }),
    /* @__PURE__ */ E.jsxs("div", { className: "bg-white p-8 min-w-[640px] min-h-[372px] rounded-lg shadow-xl flex flex-col", children: [
      /* @__PURE__ */ E.jsx(Fo, { mode: "wait", children: /* @__PURE__ */ E.jsx(
        U.div,
        {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -50 },
          transition: { duration: 0.3 },
          className: "flex-grow flex flex-col justify-center overflow-auto",
          children: m()
        },
        t
      ) }),
      /* @__PURE__ */ E.jsx(
        N5,
        {
          currentStep: t,
          totalSteps: u,
          onBack: b,
          onNext: $,
          isNextDisabled: t >= 0 && !h
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
        U.button,
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
          U.button,
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
  U.div,
  {
    className: "h-[372px] flex-col justify-start items-start gap-2.5 inline-flex",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    children: /* @__PURE__ */ E.jsx("div", { className: "w-[623px] h-[370px] relative bg-white/70 rounded-[10px]", children: /* @__PURE__ */ E.jsx("div", { className: "absolute inset-0 flex flex-col justify-center items-center gap-6", children: /* @__PURE__ */ E.jsxs("div", { className: "flex-col justify-start items-start gap-3.5 flex", children: [
      /* @__PURE__ */ E.jsx(
        U.h1,
        {
          className: "w-[547px] text-center text-[#333133] text-[22px] font-semibold",
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.2 },
          children: r.title || "Welcome"
        }
      ),
      /* @__PURE__ */ E.jsx(
        U.p,
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
  U.div,
  {
    className: "flex-col justify-center items-center gap-6 inline-flex h-full w-full",
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    children: /* @__PURE__ */ E.jsx("div", { className: "relative bg-white/70 rounded-[10px] overflow-hidden p-8 h-full w-full flex items-center justify-center", children: /* @__PURE__ */ E.jsxs(
      U.div,
      {
        className: "flex flex-col justify-center items-center",
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { delay: 0.3, duration: 0.5 },
        children: [
          /* @__PURE__ */ E.jsx(
            U.h1,
            {
              className: "text-4xl font-bold text-[#333133] mb-4",
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.5, duration: 0.5 },
              children: "Thank You!"
            }
          ),
          /* @__PURE__ */ E.jsx(
            U.p,
            {
              className: "text-xl text-[#333133]",
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.7, duration: 0.5 },
              children: "Your submission has been received."
            }
          ),
          /* @__PURE__ */ E.jsx(
            U.div,
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
  D5 as FormRenderer
};
