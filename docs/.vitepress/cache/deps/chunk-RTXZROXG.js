import {
  __commonJS
} from "./chunk-DLJ4GP37.js";

// node_modules/mathjax-full/js/util/Options.js
var require_Options = __commonJS({
  "node_modules/mathjax-full/js/util/Options.js"(exports) {
    "use strict";
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
    exports.lookup = exports.separateOptions = exports.selectOptionsFromKeys = exports.selectOptions = exports.userOptions = exports.defaultOptions = exports.insert = exports.copy = exports.keys = exports.makeArray = exports.expandable = exports.Expandable = exports.OPTIONS = exports.REMOVE = exports.APPEND = exports.isObject = void 0;
    var OBJECT = {}.constructor;
    function isObject(obj) {
      return typeof obj === "object" && obj !== null && (obj.constructor === OBJECT || obj.constructor === Expandable);
    }
    exports.isObject = isObject;
    exports.APPEND = "[+]";
    exports.REMOVE = "[-]";
    exports.OPTIONS = {
      invalidOption: "warn",
      optionError: function(message, _key) {
        if (exports.OPTIONS.invalidOption === "fatal") {
          throw new Error(message);
        }
        console.warn("MathJax: " + message);
      }
    };
    var Expandable = /* @__PURE__ */ function() {
      function Expandable2() {
      }
      return Expandable2;
    }();
    exports.Expandable = Expandable;
    function expandable(def) {
      return Object.assign(Object.create(Expandable.prototype), def);
    }
    exports.expandable = expandable;
    function makeArray(x) {
      return Array.isArray(x) ? x : [x];
    }
    exports.makeArray = makeArray;
    function keys(def) {
      if (!def) {
        return [];
      }
      return Object.keys(def).concat(Object.getOwnPropertySymbols(def));
    }
    exports.keys = keys;
    function copy(def) {
      var e_1, _a;
      var props = {};
      try {
        for (var _b = __values(keys(def)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var prop = Object.getOwnPropertyDescriptor(def, key);
          var value = prop.value;
          if (Array.isArray(value)) {
            prop.value = insert([], value, false);
          } else if (isObject(value)) {
            prop.value = copy(value);
          }
          if (prop.enumerable) {
            props[key] = prop;
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
      return Object.defineProperties(def.constructor === Expandable ? expandable({}) : {}, props);
    }
    exports.copy = copy;
    function insert(dst, src, warn) {
      var e_2, _a;
      if (warn === void 0) {
        warn = true;
      }
      var _loop_1 = function(key2) {
        if (warn && dst[key2] === void 0 && dst.constructor !== Expandable) {
          if (typeof key2 === "symbol") {
            key2 = key2.toString();
          }
          exports.OPTIONS.optionError('Invalid option "'.concat(key2, '" (no default value).'), key2);
          return "continue";
        }
        var sval = src[key2], dval = dst[key2];
        if (isObject(sval) && dval !== null && (typeof dval === "object" || typeof dval === "function")) {
          var ids = keys(sval);
          if (Array.isArray(dval) && (ids.length === 1 && (ids[0] === exports.APPEND || ids[0] === exports.REMOVE) && Array.isArray(sval[ids[0]]) || ids.length === 2 && ids.sort().join(",") === exports.APPEND + "," + exports.REMOVE && Array.isArray(sval[exports.APPEND]) && Array.isArray(sval[exports.REMOVE]))) {
            if (sval[exports.REMOVE]) {
              dval = dst[key2] = dval.filter(function(x) {
                return sval[exports.REMOVE].indexOf(x) < 0;
              });
            }
            if (sval[exports.APPEND]) {
              dst[key2] = __spreadArray(__spreadArray([], __read(dval), false), __read(sval[exports.APPEND]), false);
            }
          } else {
            insert(dval, sval, warn);
          }
        } else if (Array.isArray(sval)) {
          dst[key2] = [];
          insert(dst[key2], sval, false);
        } else if (isObject(sval)) {
          dst[key2] = copy(sval);
        } else {
          dst[key2] = sval;
        }
      };
      try {
        for (var _b = __values(keys(src)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          _loop_1(key);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      return dst;
    }
    exports.insert = insert;
    function defaultOptions(options) {
      var defs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        defs[_i - 1] = arguments[_i];
      }
      defs.forEach(function(def) {
        return insert(options, def, false);
      });
      return options;
    }
    exports.defaultOptions = defaultOptions;
    function userOptions(options) {
      var defs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        defs[_i - 1] = arguments[_i];
      }
      defs.forEach(function(def) {
        return insert(options, def, true);
      });
      return options;
    }
    exports.userOptions = userOptions;
    function selectOptions(options) {
      var e_3, _a;
      var keys2 = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        keys2[_i - 1] = arguments[_i];
      }
      var subset = {};
      try {
        for (var keys_1 = __values(keys2), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
          var key = keys_1_1.value;
          if (options.hasOwnProperty(key)) {
            subset[key] = options[key];
          }
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      return subset;
    }
    exports.selectOptions = selectOptions;
    function selectOptionsFromKeys(options, object) {
      return selectOptions.apply(void 0, __spreadArray([options], __read(Object.keys(object)), false));
    }
    exports.selectOptionsFromKeys = selectOptionsFromKeys;
    function separateOptions(options) {
      var e_4, _a, e_5, _b;
      var objects = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
      }
      var results = [];
      try {
        for (var objects_1 = __values(objects), objects_1_1 = objects_1.next(); !objects_1_1.done; objects_1_1 = objects_1.next()) {
          var object = objects_1_1.value;
          var exists = {}, missing = {};
          try {
            for (var _c = (e_5 = void 0, __values(Object.keys(options || {}))), _d = _c.next(); !_d.done; _d = _c.next()) {
              var key = _d.value;
              (object[key] === void 0 ? missing : exists)[key] = options[key];
            }
          } catch (e_5_1) {
            e_5 = { error: e_5_1 };
          } finally {
            try {
              if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            } finally {
              if (e_5) throw e_5.error;
            }
          }
          results.push(exists);
          options = missing;
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (objects_1_1 && !objects_1_1.done && (_a = objects_1.return)) _a.call(objects_1);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
      results.unshift(options);
      return results;
    }
    exports.separateOptions = separateOptions;
    function lookup(name, lookup2, def) {
      if (def === void 0) {
        def = null;
      }
      return lookup2.hasOwnProperty(name) ? lookup2[name] : def;
    }
    exports.lookup = lookup;
  }
});

// node_modules/mathjax-full/js/util/string.js
var require_string = __commonJS({
  "node_modules/mathjax-full/js/util/string.js"(exports) {
    "use strict";
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
    exports.split = exports.isPercent = exports.unicodeString = exports.unicodeChars = exports.quotePattern = exports.sortLength = void 0;
    function sortLength(a, b) {
      return a.length !== b.length ? b.length - a.length : a === b ? 0 : a < b ? -1 : 1;
    }
    exports.sortLength = sortLength;
    function quotePattern(text) {
      return text.replace(/([\^$(){}+*?\-|\[\]\:\\])/g, "\\$1");
    }
    exports.quotePattern = quotePattern;
    function unicodeChars(text) {
      return Array.from(text).map(function(c) {
        return c.codePointAt(0);
      });
    }
    exports.unicodeChars = unicodeChars;
    function unicodeString(data) {
      return String.fromCodePoint.apply(String, __spreadArray([], __read(data), false));
    }
    exports.unicodeString = unicodeString;
    function isPercent(x) {
      return !!x.match(/%\s*$/);
    }
    exports.isPercent = isPercent;
    function split(x) {
      return x.trim().split(/\s+/);
    }
    exports.split = split;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/Attributes.js
var require_Attributes = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/Attributes.js"(exports) {
    "use strict";
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Attributes = exports.INHERIT = void 0;
    exports.INHERIT = "_inherit_";
    var Attributes = function() {
      function Attributes2(defaults, global) {
        this.global = global;
        this.defaults = Object.create(global);
        this.inherited = Object.create(this.defaults);
        this.attributes = Object.create(this.inherited);
        Object.assign(this.defaults, defaults);
      }
      Attributes2.prototype.set = function(name, value) {
        this.attributes[name] = value;
      };
      Attributes2.prototype.setList = function(list) {
        Object.assign(this.attributes, list);
      };
      Attributes2.prototype.get = function(name) {
        var value = this.attributes[name];
        if (value === exports.INHERIT) {
          value = this.global[name];
        }
        return value;
      };
      Attributes2.prototype.getExplicit = function(name) {
        if (!this.attributes.hasOwnProperty(name)) {
          return void 0;
        }
        return this.attributes[name];
      };
      Attributes2.prototype.getList = function() {
        var e_1, _a;
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          names[_i] = arguments[_i];
        }
        var values = {};
        try {
          for (var names_1 = __values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
            var name_1 = names_1_1.value;
            values[name_1] = this.get(name_1);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return values;
      };
      Attributes2.prototype.setInherited = function(name, value) {
        this.inherited[name] = value;
      };
      Attributes2.prototype.getInherited = function(name) {
        return this.inherited[name];
      };
      Attributes2.prototype.getDefault = function(name) {
        return this.defaults[name];
      };
      Attributes2.prototype.isSet = function(name) {
        return this.attributes.hasOwnProperty(name) || this.inherited.hasOwnProperty(name);
      };
      Attributes2.prototype.hasDefault = function(name) {
        return name in this.defaults;
      };
      Attributes2.prototype.getExplicitNames = function() {
        return Object.keys(this.attributes);
      };
      Attributes2.prototype.getInheritedNames = function() {
        return Object.keys(this.inherited);
      };
      Attributes2.prototype.getDefaultNames = function() {
        return Object.keys(this.defaults);
      };
      Attributes2.prototype.getGlobalNames = function() {
        return Object.keys(this.global);
      };
      Attributes2.prototype.getAllAttributes = function() {
        return this.attributes;
      };
      Attributes2.prototype.getAllInherited = function() {
        return this.inherited;
      };
      Attributes2.prototype.getAllDefaults = function() {
        return this.defaults;
      };
      Attributes2.prototype.getAllGlobals = function() {
        return this.global;
      };
      return Attributes2;
    }();
    exports.Attributes = Attributes;
  }
});

// node_modules/mathjax-full/js/core/Tree/Node.js
var require_Node = __commonJS({
  "node_modules/mathjax-full/js/core/Tree/Node.js"(exports) {
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
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractEmptyNode = exports.AbstractNode = void 0;
    var AbstractNode = function() {
      function AbstractNode2(factory, properties, children) {
        var e_1, _a;
        if (properties === void 0) {
          properties = {};
        }
        if (children === void 0) {
          children = [];
        }
        this.factory = factory;
        this.parent = null;
        this.properties = {};
        this.childNodes = [];
        try {
          for (var _b = __values(Object.keys(properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var name_1 = _c.value;
            this.setProperty(name_1, properties[name_1]);
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
        if (children.length) {
          this.setChildren(children);
        }
      }
      Object.defineProperty(AbstractNode2.prototype, "kind", {
        get: function() {
          return "unknown";
        },
        enumerable: false,
        configurable: true
      });
      AbstractNode2.prototype.setProperty = function(name, value) {
        this.properties[name] = value;
      };
      AbstractNode2.prototype.getProperty = function(name) {
        return this.properties[name];
      };
      AbstractNode2.prototype.getPropertyNames = function() {
        return Object.keys(this.properties);
      };
      AbstractNode2.prototype.getAllProperties = function() {
        return this.properties;
      };
      AbstractNode2.prototype.removeProperty = function() {
        var e_2, _a;
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          names[_i] = arguments[_i];
        }
        try {
          for (var names_1 = __values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
            var name_2 = names_1_1.value;
            delete this.properties[name_2];
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      };
      AbstractNode2.prototype.isKind = function(kind) {
        return this.factory.nodeIsKind(this, kind);
      };
      AbstractNode2.prototype.setChildren = function(children) {
        var e_3, _a;
        this.childNodes = [];
        try {
          for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
            var child = children_1_1.value;
            this.appendChild(child);
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
      };
      AbstractNode2.prototype.appendChild = function(child) {
        this.childNodes.push(child);
        child.parent = this;
        return child;
      };
      AbstractNode2.prototype.replaceChild = function(newChild, oldChild) {
        var i = this.childIndex(oldChild);
        if (i !== null) {
          this.childNodes[i] = newChild;
          newChild.parent = this;
          oldChild.parent = null;
        }
        return newChild;
      };
      AbstractNode2.prototype.removeChild = function(child) {
        var i = this.childIndex(child);
        if (i !== null) {
          this.childNodes.splice(i, 1);
          child.parent = null;
        }
        return child;
      };
      AbstractNode2.prototype.childIndex = function(node) {
        var i = this.childNodes.indexOf(node);
        return i === -1 ? null : i;
      };
      AbstractNode2.prototype.copy = function() {
        var e_4, _a;
        var node = this.factory.create(this.kind);
        node.properties = __assign({}, this.properties);
        try {
          for (var _b = __values(this.childNodes || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child) {
              node.appendChild(child.copy());
            }
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
        return node;
      };
      AbstractNode2.prototype.findNodes = function(kind) {
        var nodes = [];
        this.walkTree(function(node) {
          if (node.isKind(kind)) {
            nodes.push(node);
          }
        });
        return nodes;
      };
      AbstractNode2.prototype.walkTree = function(func, data) {
        var e_5, _a;
        func(this, data);
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child) {
              child.walkTree(func, data);
            }
          }
        } catch (e_5_1) {
          e_5 = { error: e_5_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
        return data;
      };
      AbstractNode2.prototype.toString = function() {
        return this.kind + "(" + this.childNodes.join(",") + ")";
      };
      return AbstractNode2;
    }();
    exports.AbstractNode = AbstractNode;
    var AbstractEmptyNode = function(_super) {
      __extends(AbstractEmptyNode2, _super);
      function AbstractEmptyNode2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AbstractEmptyNode2.prototype.setChildren = function(_children) {
      };
      AbstractEmptyNode2.prototype.appendChild = function(child) {
        return child;
      };
      AbstractEmptyNode2.prototype.replaceChild = function(_newChild, oldChild) {
        return oldChild;
      };
      AbstractEmptyNode2.prototype.childIndex = function(_node) {
        return null;
      };
      AbstractEmptyNode2.prototype.walkTree = function(func, data) {
        func(this, data);
        return data;
      };
      AbstractEmptyNode2.prototype.toString = function() {
        return this.kind;
      };
      return AbstractEmptyNode2;
    }(AbstractNode);
    exports.AbstractEmptyNode = AbstractEmptyNode;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNode.js
var require_MmlNode = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNode.js"(exports) {
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
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XMLNode = exports.TextNode = exports.AbstractMmlEmptyNode = exports.AbstractMmlBaseNode = exports.AbstractMmlLayoutNode = exports.AbstractMmlTokenNode = exports.AbstractMmlNode = exports.indentAttributes = exports.TEXCLASSNAMES = exports.TEXCLASS = void 0;
    var Attributes_js_1 = require_Attributes();
    var Node_js_1 = require_Node();
    exports.TEXCLASS = {
      ORD: 0,
      OP: 1,
      BIN: 2,
      REL: 3,
      OPEN: 4,
      CLOSE: 5,
      PUNCT: 6,
      INNER: 7,
      VCENTER: 8,
      NONE: -1
    };
    exports.TEXCLASSNAMES = ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER", "VCENTER"];
    var TEXSPACELENGTH = ["", "thinmathspace", "mediummathspace", "thickmathspace"];
    var TEXSPACE = [
      [0, -1, 2, 3, 0, 0, 0, 1],
      [-1, -1, 0, 3, 0, 0, 0, 1],
      [2, 2, 0, 0, 2, 0, 0, 2],
      [3, 3, 0, 0, 3, 0, 0, 3],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, -1, 2, 3, 0, 0, 0, 1],
      [1, 1, 0, 1, 1, 1, 1, 1],
      [1, -1, 2, 3, 1, 0, 1, 1]
    ];
    exports.indentAttributes = [
      "indentalign",
      "indentalignfirst",
      "indentshift",
      "indentshiftfirst"
    ];
    var AbstractMmlNode = function(_super) {
      __extends(AbstractMmlNode2, _super);
      function AbstractMmlNode2(factory, attributes, children) {
        if (attributes === void 0) {
          attributes = {};
        }
        if (children === void 0) {
          children = [];
        }
        var _this = _super.call(this, factory) || this;
        _this.prevClass = null;
        _this.prevLevel = null;
        _this.texclass = null;
        if (_this.arity < 0) {
          _this.childNodes = [factory.create("inferredMrow")];
          _this.childNodes[0].parent = _this;
        }
        _this.setChildren(children);
        _this.attributes = new Attributes_js_1.Attributes(factory.getNodeClass(_this.kind).defaults, factory.getNodeClass("math").defaults);
        _this.attributes.setList(attributes);
        return _this;
      }
      AbstractMmlNode2.prototype.copy = function(keepIds) {
        var e_1, _a, e_2, _b;
        if (keepIds === void 0) {
          keepIds = false;
        }
        var node = this.factory.create(this.kind);
        node.properties = __assign({}, this.properties);
        if (this.attributes) {
          var attributes = this.attributes.getAllAttributes();
          try {
            for (var _c = __values(Object.keys(attributes)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var name_1 = _d.value;
              if (name_1 !== "id" || keepIds) {
                node.attributes.set(name_1, attributes[name_1]);
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }
        if (this.childNodes && this.childNodes.length) {
          var children = this.childNodes;
          if (children.length === 1 && children[0].isInferred) {
            children = children[0].childNodes;
          }
          try {
            for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
              var child = children_1_1.value;
              if (child) {
                node.appendChild(child.copy());
              } else {
                node.childNodes.push(null);
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (children_1_1 && !children_1_1.done && (_b = children_1.return)) _b.call(children_1);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }
        return node;
      };
      Object.defineProperty(AbstractMmlNode2.prototype, "texClass", {
        get: function() {
          return this.texclass;
        },
        set: function(texClass) {
          this.texclass = texClass;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlNode2.prototype, "isToken", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlNode2.prototype, "isEmbellished", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlNode2.prototype, "isSpacelike", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlNode2.prototype, "linebreakContainer", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlNode2.prototype, "hasNewLine", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlNode2.prototype, "arity", {
        get: function() {
          return Infinity;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlNode2.prototype, "isInferred", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlNode2.prototype, "Parent", {
        get: function() {
          var parent = this.parent;
          while (parent && parent.notParent) {
            parent = parent.Parent;
          }
          return parent;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlNode2.prototype, "notParent", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      AbstractMmlNode2.prototype.setChildren = function(children) {
        if (this.arity < 0) {
          return this.childNodes[0].setChildren(children);
        }
        return _super.prototype.setChildren.call(this, children);
      };
      AbstractMmlNode2.prototype.appendChild = function(child) {
        var e_3, _a;
        var _this = this;
        if (this.arity < 0) {
          this.childNodes[0].appendChild(child);
          return child;
        }
        if (child.isInferred) {
          if (this.arity === Infinity) {
            child.childNodes.forEach(function(node) {
              return _super.prototype.appendChild.call(_this, node);
            });
            return child;
          }
          var original = child;
          child = this.factory.create("mrow");
          child.setChildren(original.childNodes);
          child.attributes = original.attributes;
          try {
            for (var _b = __values(original.getPropertyNames()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var name_2 = _c.value;
              child.setProperty(name_2, original.getProperty(name_2));
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
        return _super.prototype.appendChild.call(this, child);
      };
      AbstractMmlNode2.prototype.replaceChild = function(newChild, oldChild) {
        if (this.arity < 0) {
          this.childNodes[0].replaceChild(newChild, oldChild);
          return newChild;
        }
        return _super.prototype.replaceChild.call(this, newChild, oldChild);
      };
      AbstractMmlNode2.prototype.core = function() {
        return this;
      };
      AbstractMmlNode2.prototype.coreMO = function() {
        return this;
      };
      AbstractMmlNode2.prototype.coreIndex = function() {
        return 0;
      };
      AbstractMmlNode2.prototype.childPosition = function() {
        var e_4, _a;
        var child = this;
        var parent = child.parent;
        while (parent && parent.notParent) {
          child = parent;
          parent = parent.parent;
        }
        if (parent) {
          var i = 0;
          try {
            for (var _b = __values(parent.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
              var node = _c.value;
              if (node === child) {
                return i;
              }
              i++;
            }
          } catch (e_4_1) {
            e_4 = { error: e_4_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_4) throw e_4.error;
            }
          }
        }
        return null;
      };
      AbstractMmlNode2.prototype.setTeXclass = function(prev) {
        this.getPrevClass(prev);
        return this.texClass != null ? this : prev;
      };
      AbstractMmlNode2.prototype.updateTeXclass = function(core) {
        if (core) {
          this.prevClass = core.prevClass;
          this.prevLevel = core.prevLevel;
          core.prevClass = core.prevLevel = null;
          this.texClass = core.texClass;
        }
      };
      AbstractMmlNode2.prototype.getPrevClass = function(prev) {
        if (prev) {
          this.prevClass = prev.texClass;
          this.prevLevel = prev.attributes.get("scriptlevel");
        }
      };
      AbstractMmlNode2.prototype.texSpacing = function() {
        var prevClass = this.prevClass != null ? this.prevClass : exports.TEXCLASS.NONE;
        var texClass = this.texClass || exports.TEXCLASS.ORD;
        if (prevClass === exports.TEXCLASS.NONE || texClass === exports.TEXCLASS.NONE) {
          return "";
        }
        if (prevClass === exports.TEXCLASS.VCENTER) {
          prevClass = exports.TEXCLASS.ORD;
        }
        if (texClass === exports.TEXCLASS.VCENTER) {
          texClass = exports.TEXCLASS.ORD;
        }
        var space = TEXSPACE[prevClass][texClass];
        if ((this.prevLevel > 0 || this.attributes.get("scriptlevel") > 0) && space >= 0) {
          return "";
        }
        return TEXSPACELENGTH[Math.abs(space)];
      };
      AbstractMmlNode2.prototype.hasSpacingAttributes = function() {
        return this.isEmbellished && this.coreMO().hasSpacingAttributes();
      };
      AbstractMmlNode2.prototype.setInheritedAttributes = function(attributes, display, level, prime) {
        var e_5, _a;
        if (attributes === void 0) {
          attributes = {};
        }
        if (display === void 0) {
          display = false;
        }
        if (level === void 0) {
          level = 0;
        }
        if (prime === void 0) {
          prime = false;
        }
        var defaults = this.attributes.getAllDefaults();
        try {
          for (var _b = __values(Object.keys(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            if (defaults.hasOwnProperty(key) || AbstractMmlNode2.alwaysInherit.hasOwnProperty(key)) {
              var _d = __read(attributes[key], 2), node = _d[0], value = _d[1];
              var noinherit = (AbstractMmlNode2.noInherit[node] || {})[this.kind] || {};
              if (!noinherit[key]) {
                this.attributes.setInherited(key, value);
              }
            }
          }
        } catch (e_5_1) {
          e_5 = { error: e_5_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
        var displaystyle = this.attributes.getExplicit("displaystyle");
        if (displaystyle === void 0) {
          this.attributes.setInherited("displaystyle", display);
        }
        var scriptlevel = this.attributes.getExplicit("scriptlevel");
        if (scriptlevel === void 0) {
          this.attributes.setInherited("scriptlevel", level);
        }
        if (prime) {
          this.setProperty("texprimestyle", prime);
        }
        var arity = this.arity;
        if (arity >= 0 && arity !== Infinity && (arity === 1 && this.childNodes.length === 0 || arity !== 1 && this.childNodes.length !== arity)) {
          if (arity < this.childNodes.length) {
            this.childNodes = this.childNodes.slice(0, arity);
          } else {
            while (this.childNodes.length < arity) {
              this.appendChild(this.factory.create("mrow"));
            }
          }
        }
        this.setChildInheritedAttributes(attributes, display, level, prime);
      };
      AbstractMmlNode2.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
        var e_6, _a;
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            child.setInheritedAttributes(attributes, display, level, prime);
          }
        } catch (e_6_1) {
          e_6 = { error: e_6_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_6) throw e_6.error;
          }
        }
      };
      AbstractMmlNode2.prototype.addInheritedAttributes = function(current, attributes) {
        var e_7, _a;
        var updated = __assign({}, current);
        try {
          for (var _b = __values(Object.keys(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var name_3 = _c.value;
            if (name_3 !== "displaystyle" && name_3 !== "scriptlevel" && name_3 !== "style") {
              updated[name_3] = [this.kind, attributes[name_3]];
            }
          }
        } catch (e_7_1) {
          e_7 = { error: e_7_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
        return updated;
      };
      AbstractMmlNode2.prototype.inheritAttributesFrom = function(node) {
        var attributes = node.attributes;
        var display = attributes.get("displaystyle");
        var scriptlevel = attributes.get("scriptlevel");
        var defaults = !attributes.isSet("mathsize") ? {} : {
          mathsize: ["math", attributes.get("mathsize")]
        };
        var prime = node.getProperty("texprimestyle") || false;
        this.setInheritedAttributes(defaults, display, scriptlevel, prime);
      };
      AbstractMmlNode2.prototype.verifyTree = function(options) {
        if (options === void 0) {
          options = null;
        }
        if (options === null) {
          return;
        }
        this.verifyAttributes(options);
        var arity = this.arity;
        if (options["checkArity"]) {
          if (arity >= 0 && arity !== Infinity && (arity === 1 && this.childNodes.length === 0 || arity !== 1 && this.childNodes.length !== arity)) {
            this.mError('Wrong number of children for "' + this.kind + '" node', options, true);
          }
        }
        this.verifyChildren(options);
      };
      AbstractMmlNode2.prototype.verifyAttributes = function(options) {
        var e_8, _a;
        if (options["checkAttributes"]) {
          var attributes = this.attributes;
          var bad = [];
          try {
            for (var _b = __values(attributes.getExplicitNames()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var name_4 = _c.value;
              if (name_4.substr(0, 5) !== "data-" && attributes.getDefault(name_4) === void 0 && !name_4.match(/^(?:class|style|id|(?:xlink:)?href)$/)) {
                bad.push(name_4);
              }
            }
          } catch (e_8_1) {
            e_8 = { error: e_8_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_8) throw e_8.error;
            }
          }
          if (bad.length) {
            this.mError("Unknown attributes for " + this.kind + " node: " + bad.join(", "), options);
          }
        }
      };
      AbstractMmlNode2.prototype.verifyChildren = function(options) {
        var e_9, _a;
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            child.verifyTree(options);
          }
        } catch (e_9_1) {
          e_9 = { error: e_9_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_9) throw e_9.error;
          }
        }
      };
      AbstractMmlNode2.prototype.mError = function(message, options, short) {
        if (short === void 0) {
          short = false;
        }
        if (this.parent && this.parent.isKind("merror")) {
          return null;
        }
        var merror = this.factory.create("merror");
        merror.attributes.set("data-mjx-message", message);
        if (options["fullErrors"] || short) {
          var mtext = this.factory.create("mtext");
          var text = this.factory.create("text");
          text.setText(options["fullErrors"] ? message : this.kind);
          mtext.appendChild(text);
          merror.appendChild(mtext);
          this.parent.replaceChild(merror, this);
        } else {
          this.parent.replaceChild(merror, this);
          merror.appendChild(this);
        }
        return merror;
      };
      AbstractMmlNode2.defaults = {
        mathbackground: Attributes_js_1.INHERIT,
        mathcolor: Attributes_js_1.INHERIT,
        mathsize: Attributes_js_1.INHERIT,
        dir: Attributes_js_1.INHERIT
      };
      AbstractMmlNode2.noInherit = {
        mstyle: {
          mpadded: { width: true, height: true, depth: true, lspace: true, voffset: true },
          mtable: { width: true, height: true, depth: true, align: true }
        },
        maligngroup: {
          mrow: { groupalign: true },
          mtable: { groupalign: true }
        }
      };
      AbstractMmlNode2.alwaysInherit = {
        scriptminsize: true,
        scriptsizemultiplier: true
      };
      AbstractMmlNode2.verifyDefaults = {
        checkArity: true,
        checkAttributes: false,
        fullErrors: false,
        fixMmultiscripts: true,
        fixMtables: true
      };
      return AbstractMmlNode2;
    }(Node_js_1.AbstractNode);
    exports.AbstractMmlNode = AbstractMmlNode;
    var AbstractMmlTokenNode = function(_super) {
      __extends(AbstractMmlTokenNode2, _super);
      function AbstractMmlTokenNode2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(AbstractMmlTokenNode2.prototype, "isToken", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      AbstractMmlTokenNode2.prototype.getText = function() {
        var e_10, _a;
        var text = "";
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child instanceof TextNode) {
              text += child.getText();
            }
          }
        } catch (e_10_1) {
          e_10 = { error: e_10_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_10) throw e_10.error;
          }
        }
        return text;
      };
      AbstractMmlTokenNode2.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
        var e_11, _a;
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child instanceof AbstractMmlNode) {
              child.setInheritedAttributes(attributes, display, level, prime);
            }
          }
        } catch (e_11_1) {
          e_11 = { error: e_11_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_11) throw e_11.error;
          }
        }
      };
      AbstractMmlTokenNode2.prototype.walkTree = function(func, data) {
        var e_12, _a;
        func(this, data);
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child instanceof AbstractMmlNode) {
              child.walkTree(func, data);
            }
          }
        } catch (e_12_1) {
          e_12 = { error: e_12_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_12) throw e_12.error;
          }
        }
        return data;
      };
      AbstractMmlTokenNode2.defaults = __assign(__assign({}, AbstractMmlNode.defaults), { mathvariant: "normal", mathsize: Attributes_js_1.INHERIT });
      return AbstractMmlTokenNode2;
    }(AbstractMmlNode);
    exports.AbstractMmlTokenNode = AbstractMmlTokenNode;
    var AbstractMmlLayoutNode = function(_super) {
      __extends(AbstractMmlLayoutNode2, _super);
      function AbstractMmlLayoutNode2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(AbstractMmlLayoutNode2.prototype, "isSpacelike", {
        get: function() {
          return this.childNodes[0].isSpacelike;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlLayoutNode2.prototype, "isEmbellished", {
        get: function() {
          return this.childNodes[0].isEmbellished;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlLayoutNode2.prototype, "arity", {
        get: function() {
          return -1;
        },
        enumerable: false,
        configurable: true
      });
      AbstractMmlLayoutNode2.prototype.core = function() {
        return this.childNodes[0];
      };
      AbstractMmlLayoutNode2.prototype.coreMO = function() {
        return this.childNodes[0].coreMO();
      };
      AbstractMmlLayoutNode2.prototype.setTeXclass = function(prev) {
        prev = this.childNodes[0].setTeXclass(prev);
        this.updateTeXclass(this.childNodes[0]);
        return prev;
      };
      AbstractMmlLayoutNode2.defaults = AbstractMmlNode.defaults;
      return AbstractMmlLayoutNode2;
    }(AbstractMmlNode);
    exports.AbstractMmlLayoutNode = AbstractMmlLayoutNode;
    var AbstractMmlBaseNode = function(_super) {
      __extends(AbstractMmlBaseNode2, _super);
      function AbstractMmlBaseNode2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(AbstractMmlBaseNode2.prototype, "isEmbellished", {
        get: function() {
          return this.childNodes[0].isEmbellished;
        },
        enumerable: false,
        configurable: true
      });
      AbstractMmlBaseNode2.prototype.core = function() {
        return this.childNodes[0];
      };
      AbstractMmlBaseNode2.prototype.coreMO = function() {
        return this.childNodes[0].coreMO();
      };
      AbstractMmlBaseNode2.prototype.setTeXclass = function(prev) {
        var e_13, _a;
        this.getPrevClass(prev);
        this.texClass = exports.TEXCLASS.ORD;
        var base = this.childNodes[0];
        if (base) {
          if (this.isEmbellished || base.isKind("mi")) {
            prev = base.setTeXclass(prev);
            this.updateTeXclass(this.core());
          } else {
            base.setTeXclass(null);
            prev = this;
          }
        } else {
          prev = this;
        }
        try {
          for (var _b = __values(this.childNodes.slice(1)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child) {
              child.setTeXclass(null);
            }
          }
        } catch (e_13_1) {
          e_13 = { error: e_13_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_13) throw e_13.error;
          }
        }
        return prev;
      };
      AbstractMmlBaseNode2.defaults = AbstractMmlNode.defaults;
      return AbstractMmlBaseNode2;
    }(AbstractMmlNode);
    exports.AbstractMmlBaseNode = AbstractMmlBaseNode;
    var AbstractMmlEmptyNode = function(_super) {
      __extends(AbstractMmlEmptyNode2, _super);
      function AbstractMmlEmptyNode2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "isToken", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "isEmbellished", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "isSpacelike", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "linebreakContainer", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "hasNewLine", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "arity", {
        get: function() {
          return 0;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "isInferred", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "notParent", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "Parent", {
        get: function() {
          return this.parent;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "texClass", {
        get: function() {
          return exports.TEXCLASS.NONE;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "prevClass", {
        get: function() {
          return exports.TEXCLASS.NONE;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "prevLevel", {
        get: function() {
          return 0;
        },
        enumerable: false,
        configurable: true
      });
      AbstractMmlEmptyNode2.prototype.hasSpacingAttributes = function() {
        return false;
      };
      Object.defineProperty(AbstractMmlEmptyNode2.prototype, "attributes", {
        get: function() {
          return null;
        },
        enumerable: false,
        configurable: true
      });
      AbstractMmlEmptyNode2.prototype.core = function() {
        return this;
      };
      AbstractMmlEmptyNode2.prototype.coreMO = function() {
        return this;
      };
      AbstractMmlEmptyNode2.prototype.coreIndex = function() {
        return 0;
      };
      AbstractMmlEmptyNode2.prototype.childPosition = function() {
        return 0;
      };
      AbstractMmlEmptyNode2.prototype.setTeXclass = function(prev) {
        return prev;
      };
      AbstractMmlEmptyNode2.prototype.texSpacing = function() {
        return "";
      };
      AbstractMmlEmptyNode2.prototype.setInheritedAttributes = function(_attributes, _display, _level, _prime) {
      };
      AbstractMmlEmptyNode2.prototype.inheritAttributesFrom = function(_node) {
      };
      AbstractMmlEmptyNode2.prototype.verifyTree = function(_options) {
      };
      AbstractMmlEmptyNode2.prototype.mError = function(_message, _options, _short) {
        if (_short === void 0) {
          _short = false;
        }
        return null;
      };
      return AbstractMmlEmptyNode2;
    }(Node_js_1.AbstractEmptyNode);
    exports.AbstractMmlEmptyNode = AbstractMmlEmptyNode;
    var TextNode = function(_super) {
      __extends(TextNode2, _super);
      function TextNode2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = "";
        return _this;
      }
      Object.defineProperty(TextNode2.prototype, "kind", {
        get: function() {
          return "text";
        },
        enumerable: false,
        configurable: true
      });
      TextNode2.prototype.getText = function() {
        return this.text;
      };
      TextNode2.prototype.setText = function(text) {
        this.text = text;
        return this;
      };
      TextNode2.prototype.copy = function() {
        return this.factory.create(this.kind).setText(this.getText());
      };
      TextNode2.prototype.toString = function() {
        return this.text;
      };
      return TextNode2;
    }(AbstractMmlEmptyNode);
    exports.TextNode = TextNode;
    var XMLNode = function(_super) {
      __extends(XMLNode2, _super);
      function XMLNode2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xml = null;
        _this.adaptor = null;
        return _this;
      }
      Object.defineProperty(XMLNode2.prototype, "kind", {
        get: function() {
          return "XML";
        },
        enumerable: false,
        configurable: true
      });
      XMLNode2.prototype.getXML = function() {
        return this.xml;
      };
      XMLNode2.prototype.setXML = function(xml, adaptor) {
        if (adaptor === void 0) {
          adaptor = null;
        }
        this.xml = xml;
        this.adaptor = adaptor;
        return this;
      };
      XMLNode2.prototype.getSerializedXML = function() {
        return this.adaptor.serializeXML(this.xml);
      };
      XMLNode2.prototype.copy = function() {
        return this.factory.create(this.kind).setXML(this.adaptor.clone(this.xml));
      };
      XMLNode2.prototype.toString = function() {
        return "XML data";
      };
      return XMLNode2;
    }(AbstractMmlEmptyNode);
    exports.XMLNode = XMLNode;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/OperatorDictionary.js
var require_OperatorDictionary = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/OperatorDictionary.js"(exports) {
    "use strict";
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OPTABLE = exports.MMLSPACING = exports.getRange = exports.RANGES = exports.MO = exports.OPDEF = void 0;
    var MmlNode_js_1 = require_MmlNode();
    function OPDEF(lspace, rspace, texClass, properties) {
      if (texClass === void 0) {
        texClass = MmlNode_js_1.TEXCLASS.BIN;
      }
      if (properties === void 0) {
        properties = null;
      }
      return [lspace, rspace, texClass, properties];
    }
    exports.OPDEF = OPDEF;
    exports.MO = {
      ORD: OPDEF(0, 0, MmlNode_js_1.TEXCLASS.ORD),
      ORD11: OPDEF(1, 1, MmlNode_js_1.TEXCLASS.ORD),
      ORD21: OPDEF(2, 1, MmlNode_js_1.TEXCLASS.ORD),
      ORD02: OPDEF(0, 2, MmlNode_js_1.TEXCLASS.ORD),
      ORD55: OPDEF(5, 5, MmlNode_js_1.TEXCLASS.ORD),
      NONE: OPDEF(0, 0, MmlNode_js_1.TEXCLASS.NONE),
      OP: OPDEF(1, 2, MmlNode_js_1.TEXCLASS.OP, { largeop: true, movablelimits: true, symmetric: true }),
      OPFIXED: OPDEF(1, 2, MmlNode_js_1.TEXCLASS.OP, { largeop: true, movablelimits: true }),
      INTEGRAL: OPDEF(0, 1, MmlNode_js_1.TEXCLASS.OP, { largeop: true, symmetric: true }),
      INTEGRAL2: OPDEF(1, 2, MmlNode_js_1.TEXCLASS.OP, { largeop: true, symmetric: true }),
      BIN3: OPDEF(3, 3, MmlNode_js_1.TEXCLASS.BIN),
      BIN4: OPDEF(4, 4, MmlNode_js_1.TEXCLASS.BIN),
      BIN01: OPDEF(0, 1, MmlNode_js_1.TEXCLASS.BIN),
      BIN5: OPDEF(5, 5, MmlNode_js_1.TEXCLASS.BIN),
      TALLBIN: OPDEF(4, 4, MmlNode_js_1.TEXCLASS.BIN, { stretchy: true }),
      BINOP: OPDEF(4, 4, MmlNode_js_1.TEXCLASS.BIN, { largeop: true, movablelimits: true }),
      REL: OPDEF(5, 5, MmlNode_js_1.TEXCLASS.REL),
      REL1: OPDEF(1, 1, MmlNode_js_1.TEXCLASS.REL, { stretchy: true }),
      REL4: OPDEF(4, 4, MmlNode_js_1.TEXCLASS.REL),
      RELSTRETCH: OPDEF(5, 5, MmlNode_js_1.TEXCLASS.REL, { stretchy: true }),
      RELACCENT: OPDEF(5, 5, MmlNode_js_1.TEXCLASS.REL, { accent: true }),
      WIDEREL: OPDEF(5, 5, MmlNode_js_1.TEXCLASS.REL, { accent: true, stretchy: true }),
      OPEN: OPDEF(0, 0, MmlNode_js_1.TEXCLASS.OPEN, { fence: true, stretchy: true, symmetric: true }),
      CLOSE: OPDEF(0, 0, MmlNode_js_1.TEXCLASS.CLOSE, { fence: true, stretchy: true, symmetric: true }),
      INNER: OPDEF(0, 0, MmlNode_js_1.TEXCLASS.INNER),
      PUNCT: OPDEF(0, 3, MmlNode_js_1.TEXCLASS.PUNCT),
      ACCENT: OPDEF(0, 0, MmlNode_js_1.TEXCLASS.ORD, { accent: true }),
      WIDEACCENT: OPDEF(0, 0, MmlNode_js_1.TEXCLASS.ORD, { accent: true, stretchy: true })
    };
    exports.RANGES = [
      [32, 127, MmlNode_js_1.TEXCLASS.REL, "mo"],
      [160, 191, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [192, 591, MmlNode_js_1.TEXCLASS.ORD, "mi"],
      [688, 879, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [880, 6688, MmlNode_js_1.TEXCLASS.ORD, "mi"],
      [6832, 6911, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [6912, 7615, MmlNode_js_1.TEXCLASS.ORD, "mi"],
      [7616, 7679, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [7680, 8191, MmlNode_js_1.TEXCLASS.ORD, "mi"],
      [8192, 8303, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [8304, 8351, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [8448, 8527, MmlNode_js_1.TEXCLASS.ORD, "mi"],
      [8528, 8591, MmlNode_js_1.TEXCLASS.ORD, "mn"],
      [8592, 8703, MmlNode_js_1.TEXCLASS.REL, "mo"],
      [8704, 8959, MmlNode_js_1.TEXCLASS.BIN, "mo"],
      [8960, 9215, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [9312, 9471, MmlNode_js_1.TEXCLASS.ORD, "mn"],
      [9472, 10223, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [10224, 10239, MmlNode_js_1.TEXCLASS.REL, "mo"],
      [10240, 10495, MmlNode_js_1.TEXCLASS.ORD, "mtext"],
      [10496, 10623, MmlNode_js_1.TEXCLASS.REL, "mo"],
      [10624, 10751, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [10752, 11007, MmlNode_js_1.TEXCLASS.BIN, "mo"],
      [11008, 11055, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [11056, 11087, MmlNode_js_1.TEXCLASS.REL, "mo"],
      [11088, 11263, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [11264, 11744, MmlNode_js_1.TEXCLASS.ORD, "mi"],
      [11776, 11903, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [11904, 12255, MmlNode_js_1.TEXCLASS.ORD, "mi", "normal"],
      [12272, 12351, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [12352, 42143, MmlNode_js_1.TEXCLASS.ORD, "mi", "normal"],
      [42192, 43055, MmlNode_js_1.TEXCLASS.ORD, "mi"],
      [43056, 43071, MmlNode_js_1.TEXCLASS.ORD, "mn"],
      [43072, 55295, MmlNode_js_1.TEXCLASS.ORD, "mi"],
      [63744, 64255, MmlNode_js_1.TEXCLASS.ORD, "mi", "normal"],
      [64256, 65023, MmlNode_js_1.TEXCLASS.ORD, "mi"],
      [65024, 65135, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [65136, 65791, MmlNode_js_1.TEXCLASS.ORD, "mi"],
      [65792, 65935, MmlNode_js_1.TEXCLASS.ORD, "mn"],
      [65936, 74751, MmlNode_js_1.TEXCLASS.ORD, "mi", "normal"],
      [74752, 74879, MmlNode_js_1.TEXCLASS.ORD, "mn"],
      [74880, 113823, MmlNode_js_1.TEXCLASS.ORD, "mi", "normal"],
      [113824, 119391, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [119648, 119679, MmlNode_js_1.TEXCLASS.ORD, "mn"],
      [119808, 120781, MmlNode_js_1.TEXCLASS.ORD, "mi"],
      [120782, 120831, MmlNode_js_1.TEXCLASS.ORD, "mn"],
      [122624, 129023, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [129024, 129279, MmlNode_js_1.TEXCLASS.REL, "mo"],
      [129280, 129535, MmlNode_js_1.TEXCLASS.ORD, "mo"],
      [131072, 195103, MmlNode_js_1.TEXCLASS.ORD, "mi", "normnal"]
    ];
    function getRange(text) {
      var e_1, _a;
      var n = text.codePointAt(0);
      try {
        for (var RANGES_1 = __values(exports.RANGES), RANGES_1_1 = RANGES_1.next(); !RANGES_1_1.done; RANGES_1_1 = RANGES_1.next()) {
          var range = RANGES_1_1.value;
          if (n <= range[1]) {
            if (n >= range[0]) {
              return range;
            }
            break;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (RANGES_1_1 && !RANGES_1_1.done && (_a = RANGES_1.return)) _a.call(RANGES_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return null;
    }
    exports.getRange = getRange;
    exports.MMLSPACING = [
      [0, 0],
      [1, 2],
      [3, 3],
      [4, 4],
      [0, 0],
      [0, 0],
      [0, 3]
    ];
    exports.OPTABLE = {
      prefix: {
        "(": exports.MO.OPEN,
        "+": exports.MO.BIN01,
        "-": exports.MO.BIN01,
        "[": exports.MO.OPEN,
        "{": exports.MO.OPEN,
        "|": exports.MO.OPEN,
        "||": [0, 0, MmlNode_js_1.TEXCLASS.BIN, { fence: true, stretchy: true, symmetric: true }],
        "|||": [0, 0, MmlNode_js_1.TEXCLASS.ORD, { fence: true, stretchy: true, symmetric: true }],
        "¬": exports.MO.ORD21,
        "±": exports.MO.BIN01,
        "‖": [0, 0, MmlNode_js_1.TEXCLASS.ORD, { fence: true, stretchy: true }],
        "‘": [0, 0, MmlNode_js_1.TEXCLASS.OPEN, { fence: true }],
        "“": [0, 0, MmlNode_js_1.TEXCLASS.OPEN, { fence: true }],
        "ⅅ": exports.MO.ORD21,
        "ⅆ": OPDEF(2, 0, MmlNode_js_1.TEXCLASS.ORD),
        "∀": exports.MO.ORD21,
        "∂": exports.MO.ORD21,
        "∃": exports.MO.ORD21,
        "∄": exports.MO.ORD21,
        "∇": exports.MO.ORD21,
        "∏": exports.MO.OP,
        "∐": exports.MO.OP,
        "∑": exports.MO.OP,
        "−": exports.MO.BIN01,
        "∓": exports.MO.BIN01,
        "√": [1, 1, MmlNode_js_1.TEXCLASS.ORD, { stretchy: true }],
        "∛": exports.MO.ORD11,
        "∜": exports.MO.ORD11,
        "∠": exports.MO.ORD,
        "∡": exports.MO.ORD,
        "∢": exports.MO.ORD,
        "∫": exports.MO.INTEGRAL,
        "∬": exports.MO.INTEGRAL,
        "∭": exports.MO.INTEGRAL,
        "∮": exports.MO.INTEGRAL,
        "∯": exports.MO.INTEGRAL,
        "∰": exports.MO.INTEGRAL,
        "∱": exports.MO.INTEGRAL,
        "∲": exports.MO.INTEGRAL,
        "∳": exports.MO.INTEGRAL,
        "⋀": exports.MO.OP,
        "⋁": exports.MO.OP,
        "⋂": exports.MO.OP,
        "⋃": exports.MO.OP,
        "⌈": exports.MO.OPEN,
        "⌊": exports.MO.OPEN,
        "〈": exports.MO.OPEN,
        "❲": exports.MO.OPEN,
        "⟦": exports.MO.OPEN,
        "⟨": exports.MO.OPEN,
        "⟪": exports.MO.OPEN,
        "⟬": exports.MO.OPEN,
        "⟮": exports.MO.OPEN,
        "⦀": [0, 0, MmlNode_js_1.TEXCLASS.ORD, { fence: true, stretchy: true }],
        "⦃": exports.MO.OPEN,
        "⦅": exports.MO.OPEN,
        "⦇": exports.MO.OPEN,
        "⦉": exports.MO.OPEN,
        "⦋": exports.MO.OPEN,
        "⦍": exports.MO.OPEN,
        "⦏": exports.MO.OPEN,
        "⦑": exports.MO.OPEN,
        "⦓": exports.MO.OPEN,
        "⦕": exports.MO.OPEN,
        "⦗": exports.MO.OPEN,
        "⧼": exports.MO.OPEN,
        "⨀": exports.MO.OP,
        "⨁": exports.MO.OP,
        "⨂": exports.MO.OP,
        "⨃": exports.MO.OP,
        "⨄": exports.MO.OP,
        "⨅": exports.MO.OP,
        "⨆": exports.MO.OP,
        "⨇": exports.MO.OP,
        "⨈": exports.MO.OP,
        "⨉": exports.MO.OP,
        "⨊": exports.MO.OP,
        "⨋": exports.MO.INTEGRAL2,
        "⨌": exports.MO.INTEGRAL,
        "⨍": exports.MO.INTEGRAL2,
        "⨎": exports.MO.INTEGRAL2,
        "⨏": exports.MO.INTEGRAL2,
        "⨐": exports.MO.OP,
        "⨑": exports.MO.OP,
        "⨒": exports.MO.OP,
        "⨓": exports.MO.OP,
        "⨔": exports.MO.OP,
        "⨕": exports.MO.INTEGRAL2,
        "⨖": exports.MO.INTEGRAL2,
        "⨗": exports.MO.INTEGRAL2,
        "⨘": exports.MO.INTEGRAL2,
        "⨙": exports.MO.INTEGRAL2,
        "⨚": exports.MO.INTEGRAL2,
        "⨛": exports.MO.INTEGRAL2,
        "⨜": exports.MO.INTEGRAL2,
        "⫼": exports.MO.OP,
        "⫿": exports.MO.OP
      },
      postfix: {
        "!!": OPDEF(1, 0),
        "!": [1, 0, MmlNode_js_1.TEXCLASS.CLOSE, null],
        '"': exports.MO.ACCENT,
        "&": exports.MO.ORD,
        ")": exports.MO.CLOSE,
        "++": OPDEF(0, 0),
        "--": OPDEF(0, 0),
        "..": OPDEF(0, 0),
        "...": exports.MO.ORD,
        "'": exports.MO.ACCENT,
        "]": exports.MO.CLOSE,
        "^": exports.MO.WIDEACCENT,
        "_": exports.MO.WIDEACCENT,
        "`": exports.MO.ACCENT,
        "|": exports.MO.CLOSE,
        "}": exports.MO.CLOSE,
        "~": exports.MO.WIDEACCENT,
        "||": [0, 0, MmlNode_js_1.TEXCLASS.BIN, { fence: true, stretchy: true, symmetric: true }],
        "|||": [0, 0, MmlNode_js_1.TEXCLASS.ORD, { fence: true, stretchy: true, symmetric: true }],
        "¨": exports.MO.ACCENT,
        "ª": exports.MO.ACCENT,
        "¯": exports.MO.WIDEACCENT,
        "°": exports.MO.ORD,
        "²": exports.MO.ACCENT,
        "³": exports.MO.ACCENT,
        "´": exports.MO.ACCENT,
        "¸": exports.MO.ACCENT,
        "¹": exports.MO.ACCENT,
        "º": exports.MO.ACCENT,
        "ˆ": exports.MO.WIDEACCENT,
        "ˇ": exports.MO.WIDEACCENT,
        "ˉ": exports.MO.WIDEACCENT,
        "ˊ": exports.MO.ACCENT,
        "ˋ": exports.MO.ACCENT,
        "ˍ": exports.MO.WIDEACCENT,
        "˘": exports.MO.ACCENT,
        "˙": exports.MO.ACCENT,
        "˚": exports.MO.ACCENT,
        "˜": exports.MO.WIDEACCENT,
        "˝": exports.MO.ACCENT,
        "˷": exports.MO.WIDEACCENT,
        "̂": exports.MO.WIDEACCENT,
        "̑": exports.MO.ACCENT,
        "϶": exports.MO.REL,
        "‖": [0, 0, MmlNode_js_1.TEXCLASS.ORD, { fence: true, stretchy: true }],
        "’": [0, 0, MmlNode_js_1.TEXCLASS.CLOSE, { fence: true }],
        "‚": exports.MO.ACCENT,
        "‛": exports.MO.ACCENT,
        "”": [0, 0, MmlNode_js_1.TEXCLASS.CLOSE, { fence: true }],
        "„": exports.MO.ACCENT,
        "‟": exports.MO.ACCENT,
        "′": exports.MO.ORD,
        "″": exports.MO.ACCENT,
        "‴": exports.MO.ACCENT,
        "‵": exports.MO.ACCENT,
        "‶": exports.MO.ACCENT,
        "‷": exports.MO.ACCENT,
        "‾": exports.MO.WIDEACCENT,
        "⁗": exports.MO.ACCENT,
        "⃛": exports.MO.ACCENT,
        "⃜": exports.MO.ACCENT,
        "⌉": exports.MO.CLOSE,
        "⌋": exports.MO.CLOSE,
        "〉": exports.MO.CLOSE,
        "⎴": exports.MO.WIDEACCENT,
        "⎵": exports.MO.WIDEACCENT,
        "⏜": exports.MO.WIDEACCENT,
        "⏝": exports.MO.WIDEACCENT,
        "⏞": exports.MO.WIDEACCENT,
        "⏟": exports.MO.WIDEACCENT,
        "⏠": exports.MO.WIDEACCENT,
        "⏡": exports.MO.WIDEACCENT,
        "■": exports.MO.BIN3,
        "□": exports.MO.BIN3,
        "▪": exports.MO.BIN3,
        "▫": exports.MO.BIN3,
        "▭": exports.MO.BIN3,
        "▮": exports.MO.BIN3,
        "▯": exports.MO.BIN3,
        "▰": exports.MO.BIN3,
        "▱": exports.MO.BIN3,
        "▲": exports.MO.BIN4,
        "▴": exports.MO.BIN4,
        "▶": exports.MO.BIN4,
        "▷": exports.MO.BIN4,
        "▸": exports.MO.BIN4,
        "▼": exports.MO.BIN4,
        "▾": exports.MO.BIN4,
        "◀": exports.MO.BIN4,
        "◁": exports.MO.BIN4,
        "◂": exports.MO.BIN4,
        "◄": exports.MO.BIN4,
        "◅": exports.MO.BIN4,
        "◆": exports.MO.BIN4,
        "◇": exports.MO.BIN4,
        "◈": exports.MO.BIN4,
        "◉": exports.MO.BIN4,
        "◌": exports.MO.BIN4,
        "◍": exports.MO.BIN4,
        "◎": exports.MO.BIN4,
        "●": exports.MO.BIN4,
        "◖": exports.MO.BIN4,
        "◗": exports.MO.BIN4,
        "◦": exports.MO.BIN4,
        "♭": exports.MO.ORD02,
        "♮": exports.MO.ORD02,
        "♯": exports.MO.ORD02,
        "❳": exports.MO.CLOSE,
        "⟧": exports.MO.CLOSE,
        "⟩": exports.MO.CLOSE,
        "⟫": exports.MO.CLOSE,
        "⟭": exports.MO.CLOSE,
        "⟯": exports.MO.CLOSE,
        "⦀": [0, 0, MmlNode_js_1.TEXCLASS.ORD, { fence: true, stretchy: true }],
        "⦄": exports.MO.CLOSE,
        "⦆": exports.MO.CLOSE,
        "⦈": exports.MO.CLOSE,
        "⦊": exports.MO.CLOSE,
        "⦌": exports.MO.CLOSE,
        "⦎": exports.MO.CLOSE,
        "⦐": exports.MO.CLOSE,
        "⦒": exports.MO.CLOSE,
        "⦔": exports.MO.CLOSE,
        "⦖": exports.MO.CLOSE,
        "⦘": exports.MO.CLOSE,
        "⧽": exports.MO.CLOSE
      },
      infix: {
        "!=": exports.MO.BIN4,
        "#": exports.MO.ORD,
        "$": exports.MO.ORD,
        "%": [3, 3, MmlNode_js_1.TEXCLASS.ORD, null],
        "&&": exports.MO.BIN4,
        "": exports.MO.ORD,
        "*": exports.MO.BIN3,
        "**": OPDEF(1, 1),
        "*=": exports.MO.BIN4,
        "+": exports.MO.BIN4,
        "+=": exports.MO.BIN4,
        ",": [0, 3, MmlNode_js_1.TEXCLASS.PUNCT, { linebreakstyle: "after", separator: true }],
        "-": exports.MO.BIN4,
        "-=": exports.MO.BIN4,
        "->": exports.MO.BIN5,
        ".": [0, 3, MmlNode_js_1.TEXCLASS.PUNCT, { separator: true }],
        "/": exports.MO.ORD11,
        "//": OPDEF(1, 1),
        "/=": exports.MO.BIN4,
        ":": [1, 2, MmlNode_js_1.TEXCLASS.REL, null],
        ":=": exports.MO.BIN4,
        ";": [0, 3, MmlNode_js_1.TEXCLASS.PUNCT, { linebreakstyle: "after", separator: true }],
        "<": exports.MO.REL,
        "<=": exports.MO.BIN5,
        "<>": OPDEF(1, 1),
        "=": exports.MO.REL,
        "==": exports.MO.BIN4,
        ">": exports.MO.REL,
        ">=": exports.MO.BIN5,
        "?": [1, 1, MmlNode_js_1.TEXCLASS.CLOSE, null],
        "@": exports.MO.ORD11,
        "\\": exports.MO.ORD,
        "^": exports.MO.ORD11,
        "_": exports.MO.ORD11,
        "|": [2, 2, MmlNode_js_1.TEXCLASS.ORD, { fence: true, stretchy: true, symmetric: true }],
        "||": [2, 2, MmlNode_js_1.TEXCLASS.BIN, { fence: true, stretchy: true, symmetric: true }],
        "|||": [2, 2, MmlNode_js_1.TEXCLASS.ORD, { fence: true, stretchy: true, symmetric: true }],
        "±": exports.MO.BIN4,
        "·": exports.MO.BIN4,
        "×": exports.MO.BIN4,
        "÷": exports.MO.BIN4,
        "ʹ": exports.MO.ORD,
        "̀": exports.MO.ACCENT,
        "́": exports.MO.ACCENT,
        "̃": exports.MO.WIDEACCENT,
        "̄": exports.MO.ACCENT,
        "̆": exports.MO.ACCENT,
        "̇": exports.MO.ACCENT,
        "̈": exports.MO.ACCENT,
        "̌": exports.MO.ACCENT,
        "̲": exports.MO.WIDEACCENT,
        "̸": exports.MO.REL4,
        "―": [0, 0, MmlNode_js_1.TEXCLASS.ORD, { stretchy: true }],
        "‗": [0, 0, MmlNode_js_1.TEXCLASS.ORD, { stretchy: true }],
        "†": exports.MO.BIN3,
        "‡": exports.MO.BIN3,
        "•": exports.MO.BIN4,
        "…": exports.MO.INNER,
        "⁃": exports.MO.BIN4,
        "⁄": exports.MO.TALLBIN,
        "⁡": exports.MO.NONE,
        "⁢": exports.MO.NONE,
        "⁣": [0, 0, MmlNode_js_1.TEXCLASS.NONE, { linebreakstyle: "after", separator: true }],
        "⁤": exports.MO.NONE,
        "⃗": exports.MO.ACCENT,
        "ℑ": exports.MO.ORD,
        "ℓ": exports.MO.ORD,
        "℘": exports.MO.ORD,
        "ℜ": exports.MO.ORD,
        "←": exports.MO.WIDEREL,
        "↑": exports.MO.RELSTRETCH,
        "→": exports.MO.WIDEREL,
        "↓": exports.MO.RELSTRETCH,
        "↔": exports.MO.WIDEREL,
        "↕": exports.MO.RELSTRETCH,
        "↖": exports.MO.RELSTRETCH,
        "↗": exports.MO.RELSTRETCH,
        "↘": exports.MO.RELSTRETCH,
        "↙": exports.MO.RELSTRETCH,
        "↚": exports.MO.RELACCENT,
        "↛": exports.MO.RELACCENT,
        "↜": exports.MO.WIDEREL,
        "↝": exports.MO.WIDEREL,
        "↞": exports.MO.WIDEREL,
        "↟": exports.MO.WIDEREL,
        "↠": exports.MO.WIDEREL,
        "↡": exports.MO.RELSTRETCH,
        "↢": exports.MO.WIDEREL,
        "↣": exports.MO.WIDEREL,
        "↤": exports.MO.WIDEREL,
        "↥": exports.MO.RELSTRETCH,
        "↦": exports.MO.WIDEREL,
        "↧": exports.MO.RELSTRETCH,
        "↨": exports.MO.RELSTRETCH,
        "↩": exports.MO.WIDEREL,
        "↪": exports.MO.WIDEREL,
        "↫": exports.MO.WIDEREL,
        "↬": exports.MO.WIDEREL,
        "↭": exports.MO.WIDEREL,
        "↮": exports.MO.RELACCENT,
        "↯": exports.MO.RELSTRETCH,
        "↰": exports.MO.RELSTRETCH,
        "↱": exports.MO.RELSTRETCH,
        "↲": exports.MO.RELSTRETCH,
        "↳": exports.MO.RELSTRETCH,
        "↴": exports.MO.RELSTRETCH,
        "↵": exports.MO.RELSTRETCH,
        "↶": exports.MO.RELACCENT,
        "↷": exports.MO.RELACCENT,
        "↸": exports.MO.REL,
        "↹": exports.MO.WIDEREL,
        "↺": exports.MO.REL,
        "↻": exports.MO.REL,
        "↼": exports.MO.WIDEREL,
        "↽": exports.MO.WIDEREL,
        "↾": exports.MO.RELSTRETCH,
        "↿": exports.MO.RELSTRETCH,
        "⇀": exports.MO.WIDEREL,
        "⇁": exports.MO.WIDEREL,
        "⇂": exports.MO.RELSTRETCH,
        "⇃": exports.MO.RELSTRETCH,
        "⇄": exports.MO.WIDEREL,
        "⇅": exports.MO.RELSTRETCH,
        "⇆": exports.MO.WIDEREL,
        "⇇": exports.MO.WIDEREL,
        "⇈": exports.MO.RELSTRETCH,
        "⇉": exports.MO.WIDEREL,
        "⇊": exports.MO.RELSTRETCH,
        "⇋": exports.MO.WIDEREL,
        "⇌": exports.MO.WIDEREL,
        "⇍": exports.MO.RELACCENT,
        "⇎": exports.MO.RELACCENT,
        "⇏": exports.MO.RELACCENT,
        "⇐": exports.MO.WIDEREL,
        "⇑": exports.MO.RELSTRETCH,
        "⇒": exports.MO.WIDEREL,
        "⇓": exports.MO.RELSTRETCH,
        "⇔": exports.MO.WIDEREL,
        "⇕": exports.MO.RELSTRETCH,
        "⇖": exports.MO.RELSTRETCH,
        "⇗": exports.MO.RELSTRETCH,
        "⇘": exports.MO.RELSTRETCH,
        "⇙": exports.MO.RELSTRETCH,
        "⇚": exports.MO.WIDEREL,
        "⇛": exports.MO.WIDEREL,
        "⇜": exports.MO.WIDEREL,
        "⇝": exports.MO.WIDEREL,
        "⇞": exports.MO.REL,
        "⇟": exports.MO.REL,
        "⇠": exports.MO.WIDEREL,
        "⇡": exports.MO.RELSTRETCH,
        "⇢": exports.MO.WIDEREL,
        "⇣": exports.MO.RELSTRETCH,
        "⇤": exports.MO.WIDEREL,
        "⇥": exports.MO.WIDEREL,
        "⇦": exports.MO.WIDEREL,
        "⇧": exports.MO.RELSTRETCH,
        "⇨": exports.MO.WIDEREL,
        "⇩": exports.MO.RELSTRETCH,
        "⇪": exports.MO.RELSTRETCH,
        "⇫": exports.MO.RELSTRETCH,
        "⇬": exports.MO.RELSTRETCH,
        "⇭": exports.MO.RELSTRETCH,
        "⇮": exports.MO.RELSTRETCH,
        "⇯": exports.MO.RELSTRETCH,
        "⇰": exports.MO.WIDEREL,
        "⇱": exports.MO.REL,
        "⇲": exports.MO.REL,
        "⇳": exports.MO.RELSTRETCH,
        "⇴": exports.MO.RELACCENT,
        "⇵": exports.MO.RELSTRETCH,
        "⇶": exports.MO.WIDEREL,
        "⇷": exports.MO.RELACCENT,
        "⇸": exports.MO.RELACCENT,
        "⇹": exports.MO.RELACCENT,
        "⇺": exports.MO.RELACCENT,
        "⇻": exports.MO.RELACCENT,
        "⇼": exports.MO.RELACCENT,
        "⇽": exports.MO.WIDEREL,
        "⇾": exports.MO.WIDEREL,
        "⇿": exports.MO.WIDEREL,
        "∁": OPDEF(1, 2, MmlNode_js_1.TEXCLASS.ORD),
        "∅": exports.MO.ORD,
        "∆": exports.MO.BIN3,
        "∈": exports.MO.REL,
        "∉": exports.MO.REL,
        "∊": exports.MO.REL,
        "∋": exports.MO.REL,
        "∌": exports.MO.REL,
        "∍": exports.MO.REL,
        "∎": exports.MO.BIN3,
        "−": exports.MO.BIN4,
        "∓": exports.MO.BIN4,
        "∔": exports.MO.BIN4,
        "∕": exports.MO.TALLBIN,
        "∖": exports.MO.BIN4,
        "∗": exports.MO.BIN4,
        "∘": exports.MO.BIN4,
        "∙": exports.MO.BIN4,
        "∝": exports.MO.REL,
        "∞": exports.MO.ORD,
        "∟": exports.MO.REL,
        "∣": exports.MO.REL,
        "∤": exports.MO.REL,
        "∥": exports.MO.REL,
        "∦": exports.MO.REL,
        "∧": exports.MO.BIN4,
        "∨": exports.MO.BIN4,
        "∩": exports.MO.BIN4,
        "∪": exports.MO.BIN4,
        "∴": exports.MO.REL,
        "∵": exports.MO.REL,
        "∶": exports.MO.REL,
        "∷": exports.MO.REL,
        "∸": exports.MO.BIN4,
        "∹": exports.MO.REL,
        "∺": exports.MO.BIN4,
        "∻": exports.MO.REL,
        "∼": exports.MO.REL,
        "∽": exports.MO.REL,
        "∽̱": exports.MO.BIN3,
        "∾": exports.MO.REL,
        "∿": exports.MO.BIN3,
        "≀": exports.MO.BIN4,
        "≁": exports.MO.REL,
        "≂": exports.MO.REL,
        "≂̸": exports.MO.REL,
        "≃": exports.MO.REL,
        "≄": exports.MO.REL,
        "≅": exports.MO.REL,
        "≆": exports.MO.REL,
        "≇": exports.MO.REL,
        "≈": exports.MO.REL,
        "≉": exports.MO.REL,
        "≊": exports.MO.REL,
        "≋": exports.MO.REL,
        "≌": exports.MO.REL,
        "≍": exports.MO.REL,
        "≎": exports.MO.REL,
        "≎̸": exports.MO.REL,
        "≏": exports.MO.REL,
        "≏̸": exports.MO.REL,
        "≐": exports.MO.REL,
        "≑": exports.MO.REL,
        "≒": exports.MO.REL,
        "≓": exports.MO.REL,
        "≔": exports.MO.REL,
        "≕": exports.MO.REL,
        "≖": exports.MO.REL,
        "≗": exports.MO.REL,
        "≘": exports.MO.REL,
        "≙": exports.MO.REL,
        "≚": exports.MO.REL,
        "≛": exports.MO.REL,
        "≜": exports.MO.REL,
        "≝": exports.MO.REL,
        "≞": exports.MO.REL,
        "≟": exports.MO.REL,
        "≠": exports.MO.REL,
        "≡": exports.MO.REL,
        "≢": exports.MO.REL,
        "≣": exports.MO.REL,
        "≤": exports.MO.REL,
        "≥": exports.MO.REL,
        "≦": exports.MO.REL,
        "≦̸": exports.MO.REL,
        "≧": exports.MO.REL,
        "≨": exports.MO.REL,
        "≩": exports.MO.REL,
        "≪": exports.MO.REL,
        "≪̸": exports.MO.REL,
        "≫": exports.MO.REL,
        "≫̸": exports.MO.REL,
        "≬": exports.MO.REL,
        "≭": exports.MO.REL,
        "≮": exports.MO.REL,
        "≯": exports.MO.REL,
        "≰": exports.MO.REL,
        "≱": exports.MO.REL,
        "≲": exports.MO.REL,
        "≳": exports.MO.REL,
        "≴": exports.MO.REL,
        "≵": exports.MO.REL,
        "≶": exports.MO.REL,
        "≷": exports.MO.REL,
        "≸": exports.MO.REL,
        "≹": exports.MO.REL,
        "≺": exports.MO.REL,
        "≻": exports.MO.REL,
        "≼": exports.MO.REL,
        "≽": exports.MO.REL,
        "≾": exports.MO.REL,
        "≿": exports.MO.REL,
        "≿̸": exports.MO.REL,
        "⊀": exports.MO.REL,
        "⊁": exports.MO.REL,
        "⊂": exports.MO.REL,
        "⊂⃒": exports.MO.REL,
        "⊃": exports.MO.REL,
        "⊃⃒": exports.MO.REL,
        "⊄": exports.MO.REL,
        "⊅": exports.MO.REL,
        "⊆": exports.MO.REL,
        "⊇": exports.MO.REL,
        "⊈": exports.MO.REL,
        "⊉": exports.MO.REL,
        "⊊": exports.MO.REL,
        "⊋": exports.MO.REL,
        "⊌": exports.MO.BIN4,
        "⊍": exports.MO.BIN4,
        "⊎": exports.MO.BIN4,
        "⊏": exports.MO.REL,
        "⊏̸": exports.MO.REL,
        "⊐": exports.MO.REL,
        "⊐̸": exports.MO.REL,
        "⊑": exports.MO.REL,
        "⊒": exports.MO.REL,
        "⊓": exports.MO.BIN4,
        "⊔": exports.MO.BIN4,
        "⊕": exports.MO.BIN4,
        "⊖": exports.MO.BIN4,
        "⊗": exports.MO.BIN4,
        "⊘": exports.MO.BIN4,
        "⊙": exports.MO.BIN4,
        "⊚": exports.MO.BIN4,
        "⊛": exports.MO.BIN4,
        "⊜": exports.MO.BIN4,
        "⊝": exports.MO.BIN4,
        "⊞": exports.MO.BIN4,
        "⊟": exports.MO.BIN4,
        "⊠": exports.MO.BIN4,
        "⊡": exports.MO.BIN4,
        "⊢": exports.MO.REL,
        "⊣": exports.MO.REL,
        "⊤": exports.MO.ORD55,
        "⊥": exports.MO.REL,
        "⊦": exports.MO.REL,
        "⊧": exports.MO.REL,
        "⊨": exports.MO.REL,
        "⊩": exports.MO.REL,
        "⊪": exports.MO.REL,
        "⊫": exports.MO.REL,
        "⊬": exports.MO.REL,
        "⊭": exports.MO.REL,
        "⊮": exports.MO.REL,
        "⊯": exports.MO.REL,
        "⊰": exports.MO.REL,
        "⊱": exports.MO.REL,
        "⊲": exports.MO.REL,
        "⊳": exports.MO.REL,
        "⊴": exports.MO.REL,
        "⊵": exports.MO.REL,
        "⊶": exports.MO.REL,
        "⊷": exports.MO.REL,
        "⊸": exports.MO.REL,
        "⊹": exports.MO.REL,
        "⊺": exports.MO.BIN4,
        "⊻": exports.MO.BIN4,
        "⊼": exports.MO.BIN4,
        "⊽": exports.MO.BIN4,
        "⊾": exports.MO.BIN3,
        "⊿": exports.MO.BIN3,
        "⋄": exports.MO.BIN4,
        "⋅": exports.MO.BIN4,
        "⋆": exports.MO.BIN4,
        "⋇": exports.MO.BIN4,
        "⋈": exports.MO.REL,
        "⋉": exports.MO.BIN4,
        "⋊": exports.MO.BIN4,
        "⋋": exports.MO.BIN4,
        "⋌": exports.MO.BIN4,
        "⋍": exports.MO.REL,
        "⋎": exports.MO.BIN4,
        "⋏": exports.MO.BIN4,
        "⋐": exports.MO.REL,
        "⋑": exports.MO.REL,
        "⋒": exports.MO.BIN4,
        "⋓": exports.MO.BIN4,
        "⋔": exports.MO.REL,
        "⋕": exports.MO.REL,
        "⋖": exports.MO.REL,
        "⋗": exports.MO.REL,
        "⋘": exports.MO.REL,
        "⋙": exports.MO.REL,
        "⋚": exports.MO.REL,
        "⋛": exports.MO.REL,
        "⋜": exports.MO.REL,
        "⋝": exports.MO.REL,
        "⋞": exports.MO.REL,
        "⋟": exports.MO.REL,
        "⋠": exports.MO.REL,
        "⋡": exports.MO.REL,
        "⋢": exports.MO.REL,
        "⋣": exports.MO.REL,
        "⋤": exports.MO.REL,
        "⋥": exports.MO.REL,
        "⋦": exports.MO.REL,
        "⋧": exports.MO.REL,
        "⋨": exports.MO.REL,
        "⋩": exports.MO.REL,
        "⋪": exports.MO.REL,
        "⋫": exports.MO.REL,
        "⋬": exports.MO.REL,
        "⋭": exports.MO.REL,
        "⋮": exports.MO.ORD55,
        "⋯": exports.MO.INNER,
        "⋰": exports.MO.REL,
        "⋱": [5, 5, MmlNode_js_1.TEXCLASS.INNER, null],
        "⋲": exports.MO.REL,
        "⋳": exports.MO.REL,
        "⋴": exports.MO.REL,
        "⋵": exports.MO.REL,
        "⋶": exports.MO.REL,
        "⋷": exports.MO.REL,
        "⋸": exports.MO.REL,
        "⋹": exports.MO.REL,
        "⋺": exports.MO.REL,
        "⋻": exports.MO.REL,
        "⋼": exports.MO.REL,
        "⋽": exports.MO.REL,
        "⋾": exports.MO.REL,
        "⋿": exports.MO.REL,
        "⌅": exports.MO.BIN3,
        "⌆": exports.MO.BIN3,
        "⌢": exports.MO.REL4,
        "⌣": exports.MO.REL4,
        "〈": exports.MO.OPEN,
        "〉": exports.MO.CLOSE,
        "⎪": exports.MO.ORD,
        "⎯": [0, 0, MmlNode_js_1.TEXCLASS.ORD, { stretchy: true }],
        "⎰": exports.MO.OPEN,
        "⎱": exports.MO.CLOSE,
        "─": exports.MO.ORD,
        "△": exports.MO.BIN4,
        "▵": exports.MO.BIN4,
        "▹": exports.MO.BIN4,
        "▽": exports.MO.BIN4,
        "▿": exports.MO.BIN4,
        "◃": exports.MO.BIN4,
        "◯": exports.MO.BIN3,
        "♠": exports.MO.ORD,
        "♡": exports.MO.ORD,
        "♢": exports.MO.ORD,
        "♣": exports.MO.ORD,
        "❘": exports.MO.REL,
        "⟰": exports.MO.RELSTRETCH,
        "⟱": exports.MO.RELSTRETCH,
        "⟵": exports.MO.WIDEREL,
        "⟶": exports.MO.WIDEREL,
        "⟷": exports.MO.WIDEREL,
        "⟸": exports.MO.WIDEREL,
        "⟹": exports.MO.WIDEREL,
        "⟺": exports.MO.WIDEREL,
        "⟻": exports.MO.WIDEREL,
        "⟼": exports.MO.WIDEREL,
        "⟽": exports.MO.WIDEREL,
        "⟾": exports.MO.WIDEREL,
        "⟿": exports.MO.WIDEREL,
        "⤀": exports.MO.RELACCENT,
        "⤁": exports.MO.RELACCENT,
        "⤂": exports.MO.RELACCENT,
        "⤃": exports.MO.RELACCENT,
        "⤄": exports.MO.RELACCENT,
        "⤅": exports.MO.RELACCENT,
        "⤆": exports.MO.RELACCENT,
        "⤇": exports.MO.RELACCENT,
        "⤈": exports.MO.REL,
        "⤉": exports.MO.REL,
        "⤊": exports.MO.RELSTRETCH,
        "⤋": exports.MO.RELSTRETCH,
        "⤌": exports.MO.WIDEREL,
        "⤍": exports.MO.WIDEREL,
        "⤎": exports.MO.WIDEREL,
        "⤏": exports.MO.WIDEREL,
        "⤐": exports.MO.WIDEREL,
        "⤑": exports.MO.RELACCENT,
        "⤒": exports.MO.RELSTRETCH,
        "⤓": exports.MO.RELSTRETCH,
        "⤔": exports.MO.RELACCENT,
        "⤕": exports.MO.RELACCENT,
        "⤖": exports.MO.RELACCENT,
        "⤗": exports.MO.RELACCENT,
        "⤘": exports.MO.RELACCENT,
        "⤙": exports.MO.RELACCENT,
        "⤚": exports.MO.RELACCENT,
        "⤛": exports.MO.RELACCENT,
        "⤜": exports.MO.RELACCENT,
        "⤝": exports.MO.RELACCENT,
        "⤞": exports.MO.RELACCENT,
        "⤟": exports.MO.RELACCENT,
        "⤠": exports.MO.RELACCENT,
        "⤡": exports.MO.RELSTRETCH,
        "⤢": exports.MO.RELSTRETCH,
        "⤣": exports.MO.REL,
        "⤤": exports.MO.REL,
        "⤥": exports.MO.REL,
        "⤦": exports.MO.REL,
        "⤧": exports.MO.REL,
        "⤨": exports.MO.REL,
        "⤩": exports.MO.REL,
        "⤪": exports.MO.REL,
        "⤫": exports.MO.REL,
        "⤬": exports.MO.REL,
        "⤭": exports.MO.REL,
        "⤮": exports.MO.REL,
        "⤯": exports.MO.REL,
        "⤰": exports.MO.REL,
        "⤱": exports.MO.REL,
        "⤲": exports.MO.REL,
        "⤳": exports.MO.RELACCENT,
        "⤴": exports.MO.REL,
        "⤵": exports.MO.REL,
        "⤶": exports.MO.REL,
        "⤷": exports.MO.REL,
        "⤸": exports.MO.REL,
        "⤹": exports.MO.REL,
        "⤺": exports.MO.RELACCENT,
        "⤻": exports.MO.RELACCENT,
        "⤼": exports.MO.RELACCENT,
        "⤽": exports.MO.RELACCENT,
        "⤾": exports.MO.REL,
        "⤿": exports.MO.REL,
        "⥀": exports.MO.REL,
        "⥁": exports.MO.REL,
        "⥂": exports.MO.RELACCENT,
        "⥃": exports.MO.RELACCENT,
        "⥄": exports.MO.RELACCENT,
        "⥅": exports.MO.RELACCENT,
        "⥆": exports.MO.RELACCENT,
        "⥇": exports.MO.RELACCENT,
        "⥈": exports.MO.RELACCENT,
        "⥉": exports.MO.REL,
        "⥊": exports.MO.RELACCENT,
        "⥋": exports.MO.RELACCENT,
        "⥌": exports.MO.REL,
        "⥍": exports.MO.REL,
        "⥎": exports.MO.WIDEREL,
        "⥏": exports.MO.RELSTRETCH,
        "⥐": exports.MO.WIDEREL,
        "⥑": exports.MO.RELSTRETCH,
        "⥒": exports.MO.WIDEREL,
        "⥓": exports.MO.WIDEREL,
        "⥔": exports.MO.RELSTRETCH,
        "⥕": exports.MO.RELSTRETCH,
        "⥖": exports.MO.RELSTRETCH,
        "⥗": exports.MO.RELSTRETCH,
        "⥘": exports.MO.RELSTRETCH,
        "⥙": exports.MO.RELSTRETCH,
        "⥚": exports.MO.WIDEREL,
        "⥛": exports.MO.WIDEREL,
        "⥜": exports.MO.RELSTRETCH,
        "⥝": exports.MO.RELSTRETCH,
        "⥞": exports.MO.WIDEREL,
        "⥟": exports.MO.WIDEREL,
        "⥠": exports.MO.RELSTRETCH,
        "⥡": exports.MO.RELSTRETCH,
        "⥢": exports.MO.RELACCENT,
        "⥣": exports.MO.REL,
        "⥤": exports.MO.RELACCENT,
        "⥥": exports.MO.REL,
        "⥦": exports.MO.RELACCENT,
        "⥧": exports.MO.RELACCENT,
        "⥨": exports.MO.RELACCENT,
        "⥩": exports.MO.RELACCENT,
        "⥪": exports.MO.RELACCENT,
        "⥫": exports.MO.RELACCENT,
        "⥬": exports.MO.RELACCENT,
        "⥭": exports.MO.RELACCENT,
        "⥮": exports.MO.RELSTRETCH,
        "⥯": exports.MO.RELSTRETCH,
        "⥰": exports.MO.RELACCENT,
        "⥱": exports.MO.RELACCENT,
        "⥲": exports.MO.RELACCENT,
        "⥳": exports.MO.RELACCENT,
        "⥴": exports.MO.RELACCENT,
        "⥵": exports.MO.RELACCENT,
        "⥶": exports.MO.RELACCENT,
        "⥷": exports.MO.RELACCENT,
        "⥸": exports.MO.RELACCENT,
        "⥹": exports.MO.RELACCENT,
        "⥺": exports.MO.RELACCENT,
        "⥻": exports.MO.RELACCENT,
        "⥼": exports.MO.RELACCENT,
        "⥽": exports.MO.RELACCENT,
        "⥾": exports.MO.REL,
        "⥿": exports.MO.REL,
        "⦁": exports.MO.BIN3,
        "⦂": exports.MO.BIN3,
        "⦙": exports.MO.BIN3,
        "⦚": exports.MO.BIN3,
        "⦛": exports.MO.BIN3,
        "⦜": exports.MO.BIN3,
        "⦝": exports.MO.BIN3,
        "⦞": exports.MO.BIN3,
        "⦟": exports.MO.BIN3,
        "⦠": exports.MO.BIN3,
        "⦡": exports.MO.BIN3,
        "⦢": exports.MO.BIN3,
        "⦣": exports.MO.BIN3,
        "⦤": exports.MO.BIN3,
        "⦥": exports.MO.BIN3,
        "⦦": exports.MO.BIN3,
        "⦧": exports.MO.BIN3,
        "⦨": exports.MO.BIN3,
        "⦩": exports.MO.BIN3,
        "⦪": exports.MO.BIN3,
        "⦫": exports.MO.BIN3,
        "⦬": exports.MO.BIN3,
        "⦭": exports.MO.BIN3,
        "⦮": exports.MO.BIN3,
        "⦯": exports.MO.BIN3,
        "⦰": exports.MO.BIN3,
        "⦱": exports.MO.BIN3,
        "⦲": exports.MO.BIN3,
        "⦳": exports.MO.BIN3,
        "⦴": exports.MO.BIN3,
        "⦵": exports.MO.BIN3,
        "⦶": exports.MO.BIN4,
        "⦷": exports.MO.BIN4,
        "⦸": exports.MO.BIN4,
        "⦹": exports.MO.BIN4,
        "⦺": exports.MO.BIN4,
        "⦻": exports.MO.BIN4,
        "⦼": exports.MO.BIN4,
        "⦽": exports.MO.BIN4,
        "⦾": exports.MO.BIN4,
        "⦿": exports.MO.BIN4,
        "⧀": exports.MO.REL,
        "⧁": exports.MO.REL,
        "⧂": exports.MO.BIN3,
        "⧃": exports.MO.BIN3,
        "⧄": exports.MO.BIN4,
        "⧅": exports.MO.BIN4,
        "⧆": exports.MO.BIN4,
        "⧇": exports.MO.BIN4,
        "⧈": exports.MO.BIN4,
        "⧉": exports.MO.BIN3,
        "⧊": exports.MO.BIN3,
        "⧋": exports.MO.BIN3,
        "⧌": exports.MO.BIN3,
        "⧍": exports.MO.BIN3,
        "⧎": exports.MO.REL,
        "⧏": exports.MO.REL,
        "⧏̸": exports.MO.REL,
        "⧐": exports.MO.REL,
        "⧐̸": exports.MO.REL,
        "⧑": exports.MO.REL,
        "⧒": exports.MO.REL,
        "⧓": exports.MO.REL,
        "⧔": exports.MO.REL,
        "⧕": exports.MO.REL,
        "⧖": exports.MO.BIN4,
        "⧗": exports.MO.BIN4,
        "⧘": exports.MO.BIN3,
        "⧙": exports.MO.BIN3,
        "⧛": exports.MO.BIN3,
        "⧜": exports.MO.BIN3,
        "⧝": exports.MO.BIN3,
        "⧞": exports.MO.REL,
        "⧟": exports.MO.BIN3,
        "⧠": exports.MO.BIN3,
        "⧡": exports.MO.REL,
        "⧢": exports.MO.BIN4,
        "⧣": exports.MO.REL,
        "⧤": exports.MO.REL,
        "⧥": exports.MO.REL,
        "⧦": exports.MO.REL,
        "⧧": exports.MO.BIN3,
        "⧨": exports.MO.BIN3,
        "⧩": exports.MO.BIN3,
        "⧪": exports.MO.BIN3,
        "⧫": exports.MO.BIN3,
        "⧬": exports.MO.BIN3,
        "⧭": exports.MO.BIN3,
        "⧮": exports.MO.BIN3,
        "⧯": exports.MO.BIN3,
        "⧰": exports.MO.BIN3,
        "⧱": exports.MO.BIN3,
        "⧲": exports.MO.BIN3,
        "⧳": exports.MO.BIN3,
        "⧴": exports.MO.REL,
        "⧵": exports.MO.BIN4,
        "⧶": exports.MO.BIN4,
        "⧷": exports.MO.BIN4,
        "⧸": exports.MO.BIN3,
        "⧹": exports.MO.BIN3,
        "⧺": exports.MO.BIN3,
        "⧻": exports.MO.BIN3,
        "⧾": exports.MO.BIN4,
        "⧿": exports.MO.BIN4,
        "⨝": exports.MO.BIN3,
        "⨞": exports.MO.BIN3,
        "⨟": exports.MO.BIN3,
        "⨠": exports.MO.BIN3,
        "⨡": exports.MO.BIN3,
        "⨢": exports.MO.BIN4,
        "⨣": exports.MO.BIN4,
        "⨤": exports.MO.BIN4,
        "⨥": exports.MO.BIN4,
        "⨦": exports.MO.BIN4,
        "⨧": exports.MO.BIN4,
        "⨨": exports.MO.BIN4,
        "⨩": exports.MO.BIN4,
        "⨪": exports.MO.BIN4,
        "⨫": exports.MO.BIN4,
        "⨬": exports.MO.BIN4,
        "⨭": exports.MO.BIN4,
        "⨮": exports.MO.BIN4,
        "⨯": exports.MO.BIN4,
        "⨰": exports.MO.BIN4,
        "⨱": exports.MO.BIN4,
        "⨲": exports.MO.BIN4,
        "⨳": exports.MO.BIN4,
        "⨴": exports.MO.BIN4,
        "⨵": exports.MO.BIN4,
        "⨶": exports.MO.BIN4,
        "⨷": exports.MO.BIN4,
        "⨸": exports.MO.BIN4,
        "⨹": exports.MO.BIN4,
        "⨺": exports.MO.BIN4,
        "⨻": exports.MO.BIN4,
        "⨼": exports.MO.BIN4,
        "⨽": exports.MO.BIN4,
        "⨾": exports.MO.BIN4,
        "⨿": exports.MO.BIN4,
        "⩀": exports.MO.BIN4,
        "⩁": exports.MO.BIN4,
        "⩂": exports.MO.BIN4,
        "⩃": exports.MO.BIN4,
        "⩄": exports.MO.BIN4,
        "⩅": exports.MO.BIN4,
        "⩆": exports.MO.BIN4,
        "⩇": exports.MO.BIN4,
        "⩈": exports.MO.BIN4,
        "⩉": exports.MO.BIN4,
        "⩊": exports.MO.BIN4,
        "⩋": exports.MO.BIN4,
        "⩌": exports.MO.BIN4,
        "⩍": exports.MO.BIN4,
        "⩎": exports.MO.BIN4,
        "⩏": exports.MO.BIN4,
        "⩐": exports.MO.BIN4,
        "⩑": exports.MO.BIN4,
        "⩒": exports.MO.BIN4,
        "⩓": exports.MO.BIN4,
        "⩔": exports.MO.BIN4,
        "⩕": exports.MO.BIN4,
        "⩖": exports.MO.BIN4,
        "⩗": exports.MO.BIN4,
        "⩘": exports.MO.BIN4,
        "⩙": exports.MO.REL,
        "⩚": exports.MO.BIN4,
        "⩛": exports.MO.BIN4,
        "⩜": exports.MO.BIN4,
        "⩝": exports.MO.BIN4,
        "⩞": exports.MO.BIN4,
        "⩟": exports.MO.BIN4,
        "⩠": exports.MO.BIN4,
        "⩡": exports.MO.BIN4,
        "⩢": exports.MO.BIN4,
        "⩣": exports.MO.BIN4,
        "⩤": exports.MO.BIN4,
        "⩥": exports.MO.BIN4,
        "⩦": exports.MO.REL,
        "⩧": exports.MO.REL,
        "⩨": exports.MO.REL,
        "⩩": exports.MO.REL,
        "⩪": exports.MO.REL,
        "⩫": exports.MO.REL,
        "⩬": exports.MO.REL,
        "⩭": exports.MO.REL,
        "⩮": exports.MO.REL,
        "⩯": exports.MO.REL,
        "⩰": exports.MO.REL,
        "⩱": exports.MO.BIN4,
        "⩲": exports.MO.BIN4,
        "⩳": exports.MO.REL,
        "⩴": exports.MO.REL,
        "⩵": exports.MO.REL,
        "⩶": exports.MO.REL,
        "⩷": exports.MO.REL,
        "⩸": exports.MO.REL,
        "⩹": exports.MO.REL,
        "⩺": exports.MO.REL,
        "⩻": exports.MO.REL,
        "⩼": exports.MO.REL,
        "⩽": exports.MO.REL,
        "⩽̸": exports.MO.REL,
        "⩾": exports.MO.REL,
        "⩾̸": exports.MO.REL,
        "⩿": exports.MO.REL,
        "⪀": exports.MO.REL,
        "⪁": exports.MO.REL,
        "⪂": exports.MO.REL,
        "⪃": exports.MO.REL,
        "⪄": exports.MO.REL,
        "⪅": exports.MO.REL,
        "⪆": exports.MO.REL,
        "⪇": exports.MO.REL,
        "⪈": exports.MO.REL,
        "⪉": exports.MO.REL,
        "⪊": exports.MO.REL,
        "⪋": exports.MO.REL,
        "⪌": exports.MO.REL,
        "⪍": exports.MO.REL,
        "⪎": exports.MO.REL,
        "⪏": exports.MO.REL,
        "⪐": exports.MO.REL,
        "⪑": exports.MO.REL,
        "⪒": exports.MO.REL,
        "⪓": exports.MO.REL,
        "⪔": exports.MO.REL,
        "⪕": exports.MO.REL,
        "⪖": exports.MO.REL,
        "⪗": exports.MO.REL,
        "⪘": exports.MO.REL,
        "⪙": exports.MO.REL,
        "⪚": exports.MO.REL,
        "⪛": exports.MO.REL,
        "⪜": exports.MO.REL,
        "⪝": exports.MO.REL,
        "⪞": exports.MO.REL,
        "⪟": exports.MO.REL,
        "⪠": exports.MO.REL,
        "⪡": exports.MO.REL,
        "⪡̸": exports.MO.REL,
        "⪢": exports.MO.REL,
        "⪢̸": exports.MO.REL,
        "⪣": exports.MO.REL,
        "⪤": exports.MO.REL,
        "⪥": exports.MO.REL,
        "⪦": exports.MO.REL,
        "⪧": exports.MO.REL,
        "⪨": exports.MO.REL,
        "⪩": exports.MO.REL,
        "⪪": exports.MO.REL,
        "⪫": exports.MO.REL,
        "⪬": exports.MO.REL,
        "⪭": exports.MO.REL,
        "⪮": exports.MO.REL,
        "⪯": exports.MO.REL,
        "⪯̸": exports.MO.REL,
        "⪰": exports.MO.REL,
        "⪰̸": exports.MO.REL,
        "⪱": exports.MO.REL,
        "⪲": exports.MO.REL,
        "⪳": exports.MO.REL,
        "⪴": exports.MO.REL,
        "⪵": exports.MO.REL,
        "⪶": exports.MO.REL,
        "⪷": exports.MO.REL,
        "⪸": exports.MO.REL,
        "⪹": exports.MO.REL,
        "⪺": exports.MO.REL,
        "⪻": exports.MO.REL,
        "⪼": exports.MO.REL,
        "⪽": exports.MO.REL,
        "⪾": exports.MO.REL,
        "⪿": exports.MO.REL,
        "⫀": exports.MO.REL,
        "⫁": exports.MO.REL,
        "⫂": exports.MO.REL,
        "⫃": exports.MO.REL,
        "⫄": exports.MO.REL,
        "⫅": exports.MO.REL,
        "⫆": exports.MO.REL,
        "⫇": exports.MO.REL,
        "⫈": exports.MO.REL,
        "⫉": exports.MO.REL,
        "⫊": exports.MO.REL,
        "⫋": exports.MO.REL,
        "⫌": exports.MO.REL,
        "⫍": exports.MO.REL,
        "⫎": exports.MO.REL,
        "⫏": exports.MO.REL,
        "⫐": exports.MO.REL,
        "⫑": exports.MO.REL,
        "⫒": exports.MO.REL,
        "⫓": exports.MO.REL,
        "⫔": exports.MO.REL,
        "⫕": exports.MO.REL,
        "⫖": exports.MO.REL,
        "⫗": exports.MO.REL,
        "⫘": exports.MO.REL,
        "⫙": exports.MO.REL,
        "⫚": exports.MO.REL,
        "⫛": exports.MO.REL,
        "⫝": exports.MO.REL,
        "⫝̸": exports.MO.REL,
        "⫞": exports.MO.REL,
        "⫟": exports.MO.REL,
        "⫠": exports.MO.REL,
        "⫡": exports.MO.REL,
        "⫢": exports.MO.REL,
        "⫣": exports.MO.REL,
        "⫤": exports.MO.REL,
        "⫥": exports.MO.REL,
        "⫦": exports.MO.REL,
        "⫧": exports.MO.REL,
        "⫨": exports.MO.REL,
        "⫩": exports.MO.REL,
        "⫪": exports.MO.REL,
        "⫫": exports.MO.REL,
        "⫬": exports.MO.REL,
        "⫭": exports.MO.REL,
        "⫮": exports.MO.REL,
        "⫯": exports.MO.REL,
        "⫰": exports.MO.REL,
        "⫱": exports.MO.REL,
        "⫲": exports.MO.REL,
        "⫳": exports.MO.REL,
        "⫴": exports.MO.BIN4,
        "⫵": exports.MO.BIN4,
        "⫶": exports.MO.BIN4,
        "⫷": exports.MO.REL,
        "⫸": exports.MO.REL,
        "⫹": exports.MO.REL,
        "⫺": exports.MO.REL,
        "⫻": exports.MO.BIN4,
        "⫽": exports.MO.BIN4,
        "⫾": exports.MO.BIN3,
        "⭅": exports.MO.RELSTRETCH,
        "⭆": exports.MO.RELSTRETCH,
        "〈": exports.MO.OPEN,
        "〉": exports.MO.CLOSE,
        "︷": exports.MO.WIDEACCENT,
        "︸": exports.MO.WIDEACCENT
      }
    };
    exports.OPTABLE.infix["^"] = exports.MO.WIDEREL;
    exports.OPTABLE.infix["_"] = exports.MO.WIDEREL;
    exports.OPTABLE.infix["⫝̸"] = exports.MO.REL;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mo.js
var require_mo = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mo.js"(exports) {
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
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MmlMo = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var OperatorDictionary_js_1 = require_OperatorDictionary();
    var string_js_1 = require_string();
    var MmlMo = function(_super) {
      __extends(MmlMo2, _super);
      function MmlMo2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._texClass = null;
        _this.lspace = 5 / 18;
        _this.rspace = 5 / 18;
        return _this;
      }
      Object.defineProperty(MmlMo2.prototype, "texClass", {
        get: function() {
          if (this._texClass === null) {
            var mo = this.getText();
            var _a = __read(this.handleExplicitForm(this.getForms()), 3), form1 = _a[0], form2 = _a[1], form3 = _a[2];
            var OPTABLE_1 = this.constructor.OPTABLE;
            var def = OPTABLE_1[form1][mo] || OPTABLE_1[form2][mo] || OPTABLE_1[form3][mo];
            return def ? def[2] : MmlNode_js_1.TEXCLASS.REL;
          }
          return this._texClass;
        },
        set: function(value) {
          this._texClass = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMo2.prototype, "kind", {
        get: function() {
          return "mo";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMo2.prototype, "isEmbellished", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMo2.prototype, "hasNewLine", {
        get: function() {
          return this.attributes.get("linebreak") === "newline";
        },
        enumerable: false,
        configurable: true
      });
      MmlMo2.prototype.coreParent = function() {
        var embellished = this;
        var parent = this;
        var math = this.factory.getNodeClass("math");
        while (parent && parent.isEmbellished && parent.coreMO() === this && !(parent instanceof math)) {
          embellished = parent;
          parent = parent.parent;
        }
        return embellished;
      };
      MmlMo2.prototype.coreText = function(parent) {
        if (!parent) {
          return "";
        }
        if (parent.isEmbellished) {
          return parent.coreMO().getText();
        }
        while (((parent.isKind("mrow") || parent.isKind("TeXAtom") && parent.texClass !== MmlNode_js_1.TEXCLASS.VCENTER || parent.isKind("mstyle") || parent.isKind("mphantom")) && parent.childNodes.length === 1 || parent.isKind("munderover")) && parent.childNodes[0]) {
          parent = parent.childNodes[0];
        }
        return parent.isToken ? parent.getText() : "";
      };
      MmlMo2.prototype.hasSpacingAttributes = function() {
        return this.attributes.isSet("lspace") || this.attributes.isSet("rspace");
      };
      Object.defineProperty(MmlMo2.prototype, "isAccent", {
        get: function() {
          var accent = false;
          var node = this.coreParent().parent;
          if (node) {
            var key = node.isKind("mover") ? node.childNodes[node.over].coreMO() ? "accent" : "" : node.isKind("munder") ? node.childNodes[node.under].coreMO() ? "accentunder" : "" : node.isKind("munderover") ? this === node.childNodes[node.over].coreMO() ? "accent" : this === node.childNodes[node.under].coreMO() ? "accentunder" : "" : "";
            if (key) {
              var value = node.attributes.getExplicit(key);
              accent = value !== void 0 ? accent : this.attributes.get("accent");
            }
          }
          return accent;
        },
        enumerable: false,
        configurable: true
      });
      MmlMo2.prototype.setTeXclass = function(prev) {
        var _a = this.attributes.getList("form", "fence"), form = _a.form, fence = _a.fence;
        if (this.getProperty("texClass") === void 0 && (this.attributes.isSet("lspace") || this.attributes.isSet("rspace"))) {
          return null;
        }
        if (fence && this.texClass === MmlNode_js_1.TEXCLASS.REL) {
          if (form === "prefix") {
            this.texClass = MmlNode_js_1.TEXCLASS.OPEN;
          }
          if (form === "postfix") {
            this.texClass = MmlNode_js_1.TEXCLASS.CLOSE;
          }
        }
        return this.adjustTeXclass(prev);
      };
      MmlMo2.prototype.adjustTeXclass = function(prev) {
        var texClass = this.texClass;
        var prevClass = this.prevClass;
        if (texClass === MmlNode_js_1.TEXCLASS.NONE) {
          return prev;
        }
        if (prev) {
          if (prev.getProperty("autoOP") && (texClass === MmlNode_js_1.TEXCLASS.BIN || texClass === MmlNode_js_1.TEXCLASS.REL)) {
            prevClass = prev.texClass = MmlNode_js_1.TEXCLASS.ORD;
          }
          prevClass = this.prevClass = prev.texClass || MmlNode_js_1.TEXCLASS.ORD;
          this.prevLevel = this.attributes.getInherited("scriptlevel");
        } else {
          prevClass = this.prevClass = MmlNode_js_1.TEXCLASS.NONE;
        }
        if (texClass === MmlNode_js_1.TEXCLASS.BIN && (prevClass === MmlNode_js_1.TEXCLASS.NONE || prevClass === MmlNode_js_1.TEXCLASS.BIN || prevClass === MmlNode_js_1.TEXCLASS.OP || prevClass === MmlNode_js_1.TEXCLASS.REL || prevClass === MmlNode_js_1.TEXCLASS.OPEN || prevClass === MmlNode_js_1.TEXCLASS.PUNCT)) {
          this.texClass = MmlNode_js_1.TEXCLASS.ORD;
        } else if (prevClass === MmlNode_js_1.TEXCLASS.BIN && (texClass === MmlNode_js_1.TEXCLASS.REL || texClass === MmlNode_js_1.TEXCLASS.CLOSE || texClass === MmlNode_js_1.TEXCLASS.PUNCT)) {
          prev.texClass = this.prevClass = MmlNode_js_1.TEXCLASS.ORD;
        } else if (texClass === MmlNode_js_1.TEXCLASS.BIN) {
          var child = this;
          var parent_1 = this.parent;
          while (parent_1 && parent_1.parent && parent_1.isEmbellished && (parent_1.childNodes.length === 1 || !parent_1.isKind("mrow") && parent_1.core() === child)) {
            child = parent_1;
            parent_1 = parent_1.parent;
          }
          if (parent_1.childNodes[parent_1.childNodes.length - 1] === child) {
            this.texClass = MmlNode_js_1.TEXCLASS.ORD;
          }
        }
        return this;
      };
      MmlMo2.prototype.setInheritedAttributes = function(attributes, display, level, prime) {
        if (attributes === void 0) {
          attributes = {};
        }
        if (display === void 0) {
          display = false;
        }
        if (level === void 0) {
          level = 0;
        }
        if (prime === void 0) {
          prime = false;
        }
        _super.prototype.setInheritedAttributes.call(this, attributes, display, level, prime);
        var mo = this.getText();
        this.checkOperatorTable(mo);
        this.checkPseudoScripts(mo);
        this.checkPrimes(mo);
        this.checkMathAccent(mo);
      };
      MmlMo2.prototype.checkOperatorTable = function(mo) {
        var e_1, _a;
        var _b = __read(this.handleExplicitForm(this.getForms()), 3), form1 = _b[0], form2 = _b[1], form3 = _b[2];
        this.attributes.setInherited("form", form1);
        var OPTABLE = this.constructor.OPTABLE;
        var def = OPTABLE[form1][mo] || OPTABLE[form2][mo] || OPTABLE[form3][mo];
        if (def) {
          if (this.getProperty("texClass") === void 0) {
            this.texClass = def[2];
          }
          try {
            for (var _c = __values(Object.keys(def[3] || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
              var name_1 = _d.value;
              this.attributes.setInherited(name_1, def[3][name_1]);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          this.lspace = (def[0] + 1) / 18;
          this.rspace = (def[1] + 1) / 18;
        } else {
          var range = (0, OperatorDictionary_js_1.getRange)(mo);
          if (range) {
            if (this.getProperty("texClass") === void 0) {
              this.texClass = range[2];
            }
            var spacing = this.constructor.MMLSPACING[range[2]];
            this.lspace = (spacing[0] + 1) / 18;
            this.rspace = (spacing[1] + 1) / 18;
          }
        }
      };
      MmlMo2.prototype.getForms = function() {
        var core = this;
        var parent = this.parent;
        var Parent = this.Parent;
        while (Parent && Parent.isEmbellished) {
          core = parent;
          parent = Parent.parent;
          Parent = Parent.Parent;
        }
        if (parent && parent.isKind("mrow") && parent.nonSpaceLength() !== 1) {
          if (parent.firstNonSpace() === core) {
            return ["prefix", "infix", "postfix"];
          }
          if (parent.lastNonSpace() === core) {
            return ["postfix", "infix", "prefix"];
          }
        }
        return ["infix", "prefix", "postfix"];
      };
      MmlMo2.prototype.handleExplicitForm = function(forms) {
        if (this.attributes.isSet("form")) {
          var form_1 = this.attributes.get("form");
          forms = [form_1].concat(forms.filter(function(name) {
            return name !== form_1;
          }));
        }
        return forms;
      };
      MmlMo2.prototype.checkPseudoScripts = function(mo) {
        var PSEUDOSCRIPTS = this.constructor.pseudoScripts;
        if (!mo.match(PSEUDOSCRIPTS))
          return;
        var parent = this.coreParent().Parent;
        var isPseudo = !parent || !(parent.isKind("msubsup") && !parent.isKind("msub"));
        this.setProperty("pseudoscript", isPseudo);
        if (isPseudo) {
          this.attributes.setInherited("lspace", 0);
          this.attributes.setInherited("rspace", 0);
        }
      };
      MmlMo2.prototype.checkPrimes = function(mo) {
        var PRIMES = this.constructor.primes;
        if (!mo.match(PRIMES))
          return;
        var REMAP = this.constructor.remapPrimes;
        var primes = (0, string_js_1.unicodeString)((0, string_js_1.unicodeChars)(mo).map(function(c) {
          return REMAP[c];
        }));
        this.setProperty("primes", primes);
      };
      MmlMo2.prototype.checkMathAccent = function(mo) {
        var parent = this.Parent;
        if (this.getProperty("mathaccent") !== void 0 || !parent || !parent.isKind("munderover"))
          return;
        var base = parent.childNodes[0];
        if (base.isEmbellished && base.coreMO() === this)
          return;
        var MATHACCENT = this.constructor.mathaccents;
        if (mo.match(MATHACCENT)) {
          this.setProperty("mathaccent", true);
        }
      };
      MmlMo2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlTokenNode.defaults), { form: "infix", fence: false, separator: false, lspace: "thickmathspace", rspace: "thickmathspace", stretchy: false, symmetric: false, maxsize: "infinity", minsize: "0em", largeop: false, movablelimits: false, accent: false, linebreak: "auto", lineleading: "1ex", linebreakstyle: "before", indentalign: "auto", indentshift: "0", indenttarget: "", indentalignfirst: "indentalign", indentshiftfirst: "indentshift", indentalignlast: "indentalign", indentshiftlast: "indentshift" });
      MmlMo2.MMLSPACING = OperatorDictionary_js_1.MMLSPACING;
      MmlMo2.OPTABLE = OperatorDictionary_js_1.OPTABLE;
      MmlMo2.pseudoScripts = new RegExp([
        "^[\"'*`",
        "ª",
        "°",
        "²-´",
        "¹",
        "º",
        "‘-‟",
        "′-‷⁗",
        "⁰ⁱ",
        "⁴-ⁿ",
        "₀-₎",
        "]+$"
      ].join(""));
      MmlMo2.primes = new RegExp([
        "^[\"'`",
        "‘-‟",
        "]+$"
      ].join(""));
      MmlMo2.remapPrimes = {
        34: 8243,
        39: 8242,
        96: 8245,
        8216: 8245,
        8217: 8242,
        8218: 8242,
        8219: 8245,
        8220: 8246,
        8221: 8243,
        8222: 8243,
        8223: 8246
      };
      MmlMo2.mathaccents = new RegExp([
        "^[",
        "´́ˊ",
        "`̀ˋ",
        "¨̈",
        "~̃˜",
        "¯̄ˉ",
        "˘̆",
        "ˇ̌",
        "^̂ˆ",
        "→⃗",
        "˙̇",
        "˚̊",
        "⃛",
        "⃜",
        "]$"
      ].join(""));
      return MmlMo2;
    }(MmlNode_js_1.AbstractMmlTokenNode);
    exports.MmlMo = MmlMo;
  }
});

// node_modules/mathjax-full/js/core/Tree/Factory.js
var require_Factory = __commonJS({
  "node_modules/mathjax-full/js/core/Tree/Factory.js"(exports) {
    "use strict";
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
    exports.AbstractFactory = void 0;
    var AbstractFactory = function() {
      function AbstractFactory2(nodes) {
        var e_1, _a;
        if (nodes === void 0) {
          nodes = null;
        }
        this.defaultKind = "unknown";
        this.nodeMap = /* @__PURE__ */ new Map();
        this.node = {};
        if (nodes === null) {
          nodes = this.constructor.defaultNodes;
        }
        try {
          for (var _b = __values(Object.keys(nodes)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var kind = _c.value;
            this.setNodeClass(kind, nodes[kind]);
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
      }
      AbstractFactory2.prototype.create = function(kind) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        return (this.node[kind] || this.node[this.defaultKind]).apply(void 0, __spreadArray([], __read(args), false));
      };
      AbstractFactory2.prototype.setNodeClass = function(kind, nodeClass) {
        this.nodeMap.set(kind, nodeClass);
        var THIS = this;
        var KIND = this.nodeMap.get(kind);
        this.node[kind] = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return new (KIND.bind.apply(KIND, __spreadArray([void 0, THIS], __read(args), false)))();
        };
      };
      AbstractFactory2.prototype.getNodeClass = function(kind) {
        return this.nodeMap.get(kind);
      };
      AbstractFactory2.prototype.deleteNodeClass = function(kind) {
        this.nodeMap.delete(kind);
        delete this.node[kind];
      };
      AbstractFactory2.prototype.nodeIsKind = function(node, kind) {
        return node instanceof this.getNodeClass(kind);
      };
      AbstractFactory2.prototype.getKinds = function() {
        return Array.from(this.nodeMap.keys());
      };
      AbstractFactory2.defaultNodes = {};
      return AbstractFactory2;
    }();
    exports.AbstractFactory = AbstractFactory;
  }
});

export {
  require_Options,
  require_Factory,
  require_Attributes,
  require_Node,
  require_MmlNode,
  require_OperatorDictionary,
  require_string,
  require_mo
};
//# sourceMappingURL=chunk-RTXZROXG.js.map
