import {
  require_FunctionList
} from "./chunk-BQOREXVA.js";
import {
  require_Options
} from "./chunk-RTXZROXG.js";
import {
  __commonJS
} from "./chunk-DLJ4GP37.js";

// node_modules/mathjax-full/js/core/InputJax.js
var require_InputJax = __commonJS({
  "node_modules/mathjax-full/js/core/InputJax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractInputJax = void 0;
    var Options_js_1 = require_Options();
    var FunctionList_js_1 = require_FunctionList();
    var AbstractInputJax = function() {
      function AbstractInputJax2(options) {
        if (options === void 0) {
          options = {};
        }
        this.adaptor = null;
        this.mmlFactory = null;
        var CLASS = this.constructor;
        this.options = (0, Options_js_1.userOptions)((0, Options_js_1.defaultOptions)({}, CLASS.OPTIONS), options);
        this.preFilters = new FunctionList_js_1.FunctionList();
        this.postFilters = new FunctionList_js_1.FunctionList();
      }
      Object.defineProperty(AbstractInputJax2.prototype, "name", {
        get: function() {
          return this.constructor.NAME;
        },
        enumerable: false,
        configurable: true
      });
      AbstractInputJax2.prototype.setAdaptor = function(adaptor) {
        this.adaptor = adaptor;
      };
      AbstractInputJax2.prototype.setMmlFactory = function(mmlFactory) {
        this.mmlFactory = mmlFactory;
      };
      AbstractInputJax2.prototype.initialize = function() {
      };
      AbstractInputJax2.prototype.reset = function() {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          _args[_i] = arguments[_i];
        }
      };
      Object.defineProperty(AbstractInputJax2.prototype, "processStrings", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      AbstractInputJax2.prototype.findMath = function(_node, _options) {
        return [];
      };
      AbstractInputJax2.prototype.executeFilters = function(filters, math, document, data) {
        var args = { math, document, data };
        filters.execute(args);
        return args.data;
      };
      AbstractInputJax2.NAME = "generic";
      AbstractInputJax2.OPTIONS = {};
      return AbstractInputJax2;
    }();
    exports.AbstractInputJax = AbstractInputJax;
  }
});

export {
  require_InputJax
};
//# sourceMappingURL=chunk-IZFVFS52.js.map
