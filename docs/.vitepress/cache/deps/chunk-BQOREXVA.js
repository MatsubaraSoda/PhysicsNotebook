import {
  require_PrioritizedList
} from "./chunk-5BTRKSLH.js";
import {
  __commonJS
} from "./chunk-DLJ4GP37.js";

// node_modules/mathjax-full/js/util/FunctionList.js
var require_FunctionList = __commonJS({
  "node_modules/mathjax-full/js/util/FunctionList.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionList = void 0;
    var PrioritizedList_js_1 = require_PrioritizedList();
    var FunctionList = function(_super) {
      __extends(FunctionList2, _super);
      function FunctionList2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      FunctionList2.prototype.execute = function() {
        var e_1, _a;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          data[_i] = arguments[_i];
        }
        try {
          for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            var result = item.item.apply(item, __spreadArray([], __read(data), false));
            if (result === false) {
              return false;
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return true;
      };
      FunctionList2.prototype.asyncExecute = function() {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          data[_i] = arguments[_i];
        }
        var i = -1;
        var items = this.items;
        return new Promise(function(ok, fail) {
          (function execute() {
            var _a;
            while (++i < items.length) {
              var result = (_a = items[i]).item.apply(_a, __spreadArray([], __read(data), false));
              if (result instanceof Promise) {
                result.then(execute).catch(function(err) {
                  return fail(err);
                });
                return;
              }
              if (result === false) {
                ok(false);
                return;
              }
            }
            ok(true);
          })();
        });
      };
      return FunctionList2;
    }(PrioritizedList_js_1.PrioritizedList);
    exports.FunctionList = FunctionList;
  }
});

export {
  require_FunctionList
};
//# sourceMappingURL=chunk-BQOREXVA.js.map
