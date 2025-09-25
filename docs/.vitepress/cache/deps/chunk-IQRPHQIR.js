import {
  require_FunctionList
} from "./chunk-BQOREXVA.js";
import {
  require_Options
} from "./chunk-RTXZROXG.js";
import {
  __commonJS
} from "./chunk-DLJ4GP37.js";

// node_modules/mathjax-full/js/core/OutputJax.js
var require_OutputJax = __commonJS({
  "node_modules/mathjax-full/js/core/OutputJax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractOutputJax = void 0;
    var Options_js_1 = require_Options();
    var FunctionList_js_1 = require_FunctionList();
    var AbstractOutputJax = function() {
      function AbstractOutputJax2(options) {
        if (options === void 0) {
          options = {};
        }
        this.adaptor = null;
        var CLASS = this.constructor;
        this.options = (0, Options_js_1.userOptions)((0, Options_js_1.defaultOptions)({}, CLASS.OPTIONS), options);
        this.postFilters = new FunctionList_js_1.FunctionList();
      }
      Object.defineProperty(AbstractOutputJax2.prototype, "name", {
        get: function() {
          return this.constructor.NAME;
        },
        enumerable: false,
        configurable: true
      });
      AbstractOutputJax2.prototype.setAdaptor = function(adaptor) {
        this.adaptor = adaptor;
      };
      AbstractOutputJax2.prototype.initialize = function() {
      };
      AbstractOutputJax2.prototype.reset = function() {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          _args[_i] = arguments[_i];
        }
      };
      AbstractOutputJax2.prototype.getMetrics = function(_document) {
      };
      AbstractOutputJax2.prototype.styleSheet = function(_document) {
        return null;
      };
      AbstractOutputJax2.prototype.pageElements = function(_document) {
        return null;
      };
      AbstractOutputJax2.prototype.executeFilters = function(filters, math, document, data) {
        var args = { math, document, data };
        filters.execute(args);
        return args.data;
      };
      AbstractOutputJax2.NAME = "generic";
      AbstractOutputJax2.OPTIONS = {};
      return AbstractOutputJax2;
    }();
    exports.AbstractOutputJax = AbstractOutputJax;
  }
});

export {
  require_OutputJax
};
//# sourceMappingURL=chunk-IQRPHQIR.js.map
