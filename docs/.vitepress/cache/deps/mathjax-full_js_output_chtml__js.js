import {
  require_lengths
} from "./chunk-H7B5EP6A.js";
import {
  require_OutputJax
} from "./chunk-IQRPHQIR.js";
import "./chunk-BQOREXVA.js";
import {
  require_TeXAtom,
  require_maction,
  require_math,
  require_menclose,
  require_mfenced,
  require_mfrac,
  require_mglyph,
  require_mi,
  require_mmultiscripts,
  require_mn,
  require_mpadded,
  require_mroot,
  require_mrow,
  require_ms,
  require_mspace,
  require_msqrt,
  require_msubsup,
  require_mtable,
  require_mtd,
  require_mtext,
  require_mtr,
  require_munderover,
  require_semantics
} from "./chunk-QEU4Y7BF.js";
import {
  require_MathItem
} from "./chunk-YTXGGFBK.js";
import {
  require_Factory,
  require_MmlNode,
  require_Options,
  require_mo,
  require_string
} from "./chunk-RTXZROXG.js";
import "./chunk-5BTRKSLH.js";
import {
  __commonJS
} from "./chunk-DLJ4GP37.js";

// node_modules/mathjax-full/js/util/Styles.js
var require_Styles = __commonJS({
  "node_modules/mathjax-full/js/util/Styles.js"(exports) {
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
    exports.Styles = void 0;
    var TRBL = ["top", "right", "bottom", "left"];
    var WSC = ["width", "style", "color"];
    function splitSpaces(text) {
      var parts = text.split(/((?:'[^']*'|"[^"]*"|,[\s\n]|[^\s\n])*)/g);
      var split = [];
      while (parts.length > 1) {
        parts.shift();
        split.push(parts.shift());
      }
      return split;
    }
    function splitTRBL(name) {
      var e_1, _a;
      var parts = splitSpaces(this.styles[name]);
      if (parts.length === 0) {
        parts.push("");
      }
      if (parts.length === 1) {
        parts.push(parts[0]);
      }
      if (parts.length === 2) {
        parts.push(parts[0]);
      }
      if (parts.length === 3) {
        parts.push(parts[1]);
      }
      try {
        for (var _b = __values(Styles.connect[name].children), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          this.setStyle(this.childName(name, child), parts.shift());
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
    function combineTRBL(name) {
      var e_2, _a;
      var children = Styles.connect[name].children;
      var parts = [];
      try {
        for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
          var child = children_1_1.value;
          var part = this.styles[name + "-" + child];
          if (!part) {
            delete this.styles[name];
            return;
          }
          parts.push(part);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      if (parts[3] === parts[1]) {
        parts.pop();
        if (parts[2] === parts[0]) {
          parts.pop();
          if (parts[1] === parts[0]) {
            parts.pop();
          }
        }
      }
      this.styles[name] = parts.join(" ");
    }
    function splitSame(name) {
      var e_3, _a;
      try {
        for (var _b = __values(Styles.connect[name].children), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          this.setStyle(this.childName(name, child), this.styles[name]);
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
    function combineSame(name) {
      var e_4, _a;
      var children = __spreadArray([], __read(Styles.connect[name].children), false);
      var value = this.styles[this.childName(name, children.shift())];
      try {
        for (var children_2 = __values(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
          var child = children_2_1.value;
          if (this.styles[this.childName(name, child)] !== value) {
            delete this.styles[name];
            return;
          }
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (children_2_1 && !children_2_1.done && (_a = children_2.return)) _a.call(children_2);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
      this.styles[name] = value;
    }
    var BORDER = {
      width: /^(?:[\d.]+(?:[a-z]+)|thin|medium|thick|inherit|initial|unset)$/,
      style: /^(?:none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit|initial|unset)$/
    };
    function splitWSC(name) {
      var e_5, _a, e_6, _b;
      var parts = { width: "", style: "", color: "" };
      try {
        for (var _c = __values(splitSpaces(this.styles[name])), _d = _c.next(); !_d.done; _d = _c.next()) {
          var part = _d.value;
          if (part.match(BORDER.width) && parts.width === "") {
            parts.width = part;
          } else if (part.match(BORDER.style) && parts.style === "") {
            parts.style = part;
          } else {
            parts.color = part;
          }
        }
      } catch (e_5_1) {
        e_5 = { error: e_5_1 };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        } finally {
          if (e_5) throw e_5.error;
        }
      }
      try {
        for (var _e = __values(Styles.connect[name].children), _f = _e.next(); !_f.done; _f = _e.next()) {
          var child = _f.value;
          this.setStyle(this.childName(name, child), parts[child]);
        }
      } catch (e_6_1) {
        e_6 = { error: e_6_1 };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        } finally {
          if (e_6) throw e_6.error;
        }
      }
    }
    function combineWSC(name) {
      var e_7, _a;
      var parts = [];
      try {
        for (var _b = __values(Styles.connect[name].children), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          var value = this.styles[this.childName(name, child)];
          if (value) {
            parts.push(value);
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
      if (parts.length) {
        this.styles[name] = parts.join(" ");
      } else {
        delete this.styles[name];
      }
    }
    var FONT = {
      style: /^(?:normal|italic|oblique|inherit|initial|unset)$/,
      variant: new RegExp("^(?:" + [
        "normal|none",
        "inherit|initial|unset",
        "common-ligatures|no-common-ligatures",
        "discretionary-ligatures|no-discretionary-ligatures",
        "historical-ligatures|no-historical-ligatures",
        "contextual|no-contextual",
        "(?:stylistic|character-variant|swash|ornaments|annotation)\\([^)]*\\)",
        "small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
        "lining-nums|oldstyle-nums|proportional-nums|tabular-nums",
        "diagonal-fractions|stacked-fractions",
        "ordinal|slashed-zero",
        "jis78|jis83|jis90|jis04|simplified|traditional",
        "full-width|proportional-width",
        "ruby"
      ].join("|") + ")$"),
      weight: /^(?:normal|bold|bolder|lighter|[1-9]00|inherit|initial|unset)$/,
      stretch: new RegExp("^(?:" + [
        "normal",
        "(?:(?:ultra|extra|semi)-)?condensed",
        "(?:(?:semi|extra|ulta)-)?expanded",
        "inherit|initial|unset"
      ].join("|") + ")$"),
      size: new RegExp("^(?:" + [
        "xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller",
        "[d.]+%|[d.]+[a-z]+",
        "inherit|initial|unset"
      ].join("|") + ")(?:/(?:normal|[d.+](?:%|[a-z]+)?))?$")
    };
    function splitFont(name) {
      var e_8, _a, e_9, _b;
      var parts = splitSpaces(this.styles[name]);
      var value = {
        style: "",
        variant: [],
        weight: "",
        stretch: "",
        size: "",
        family: "",
        "line-height": ""
      };
      try {
        for (var parts_1 = __values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
          var part = parts_1_1.value;
          value.family = part;
          try {
            for (var _c = (e_9 = void 0, __values(Object.keys(FONT))), _d = _c.next(); !_d.done; _d = _c.next()) {
              var name_1 = _d.value;
              if ((Array.isArray(value[name_1]) || value[name_1] === "") && part.match(FONT[name_1])) {
                if (name_1 === "size") {
                  var _e = __read(part.split(/\//), 2), size = _e[0], height = _e[1];
                  value[name_1] = size;
                  if (height) {
                    value["line-height"] = height;
                  }
                } else if (value.size === "") {
                  if (Array.isArray(value[name_1])) {
                    value[name_1].push(part);
                  } else {
                    value[name_1] = part;
                  }
                }
              }
            }
          } catch (e_9_1) {
            e_9 = { error: e_9_1 };
          } finally {
            try {
              if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            } finally {
              if (e_9) throw e_9.error;
            }
          }
        }
      } catch (e_8_1) {
        e_8 = { error: e_8_1 };
      } finally {
        try {
          if (parts_1_1 && !parts_1_1.done && (_a = parts_1.return)) _a.call(parts_1);
        } finally {
          if (e_8) throw e_8.error;
        }
      }
      saveFontParts(name, value);
      delete this.styles[name];
    }
    function saveFontParts(name, value) {
      var e_10, _a;
      try {
        for (var _b = __values(Styles.connect[name].children), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          var cname = this.childName(name, child);
          if (Array.isArray(value[child])) {
            var values = value[child];
            if (values.length) {
              this.styles[cname] = values.join(" ");
            }
          } else if (value[child] !== "") {
            this.styles[cname] = value[child];
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
    }
    function combineFont(_name) {
    }
    var Styles = function() {
      function Styles2(cssText) {
        if (cssText === void 0) {
          cssText = "";
        }
        this.parse(cssText);
      }
      Object.defineProperty(Styles2.prototype, "cssText", {
        get: function() {
          var e_11, _a;
          var styles = [];
          try {
            for (var _b = __values(Object.keys(this.styles)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var name_2 = _c.value;
              var parent_1 = this.parentName(name_2);
              if (!this.styles[parent_1]) {
                styles.push(name_2 + ": " + this.styles[name_2] + ";");
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
          return styles.join(" ");
        },
        enumerable: false,
        configurable: true
      });
      Styles2.prototype.set = function(name, value) {
        name = this.normalizeName(name);
        this.setStyle(name, value);
        if (Styles2.connect[name] && !Styles2.connect[name].combine) {
          this.combineChildren(name);
          delete this.styles[name];
        }
        while (name.match(/-/)) {
          name = this.parentName(name);
          if (!Styles2.connect[name])
            break;
          Styles2.connect[name].combine.call(this, name);
        }
      };
      Styles2.prototype.get = function(name) {
        name = this.normalizeName(name);
        return this.styles.hasOwnProperty(name) ? this.styles[name] : "";
      };
      Styles2.prototype.setStyle = function(name, value) {
        this.styles[name] = value;
        if (Styles2.connect[name] && Styles2.connect[name].children) {
          Styles2.connect[name].split.call(this, name);
        }
        if (value === "") {
          delete this.styles[name];
        }
      };
      Styles2.prototype.combineChildren = function(name) {
        var e_12, _a;
        var parent = this.parentName(name);
        try {
          for (var _b = __values(Styles2.connect[name].children), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            var cname = this.childName(parent, child);
            Styles2.connect[cname].combine.call(this, cname);
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
      };
      Styles2.prototype.parentName = function(name) {
        var parent = name.replace(/-[^-]*$/, "");
        return name === parent ? "" : parent;
      };
      Styles2.prototype.childName = function(name, child) {
        if (child.match(/-/)) {
          return child;
        }
        if (Styles2.connect[name] && !Styles2.connect[name].combine) {
          child += name.replace(/.*-/, "-");
          name = this.parentName(name);
        }
        return name + "-" + child;
      };
      Styles2.prototype.normalizeName = function(name) {
        return name.replace(/[A-Z]/g, function(c) {
          return "-" + c.toLowerCase();
        });
      };
      Styles2.prototype.parse = function(cssText) {
        if (cssText === void 0) {
          cssText = "";
        }
        var PATTERN = this.constructor.pattern;
        this.styles = {};
        var parts = cssText.replace(PATTERN.comment, "").split(PATTERN.style);
        while (parts.length > 1) {
          var _a = __read(parts.splice(0, 3), 3), space = _a[0], name_3 = _a[1], value = _a[2];
          if (space.match(/[^\s\n]/))
            return;
          this.set(name_3, value);
        }
      };
      Styles2.pattern = {
        style: /([-a-z]+)[\s\n]*:[\s\n]*((?:'[^']*'|"[^"]*"|\n|.)*?)[\s\n]*(?:;|$)/g,
        comment: /\/\*[^]*?\*\//g
      };
      Styles2.connect = {
        padding: {
          children: TRBL,
          split: splitTRBL,
          combine: combineTRBL
        },
        border: {
          children: TRBL,
          split: splitSame,
          combine: combineSame
        },
        "border-top": {
          children: WSC,
          split: splitWSC,
          combine: combineWSC
        },
        "border-right": {
          children: WSC,
          split: splitWSC,
          combine: combineWSC
        },
        "border-bottom": {
          children: WSC,
          split: splitWSC,
          combine: combineWSC
        },
        "border-left": {
          children: WSC,
          split: splitWSC,
          combine: combineWSC
        },
        "border-width": {
          children: TRBL,
          split: splitTRBL,
          combine: null
        },
        "border-style": {
          children: TRBL,
          split: splitTRBL,
          combine: null
        },
        "border-color": {
          children: TRBL,
          split: splitTRBL,
          combine: null
        },
        font: {
          children: ["style", "variant", "weight", "stretch", "line-height", "size", "family"],
          split: splitFont,
          combine: combineFont
        }
      };
      return Styles2;
    }();
    exports.Styles = Styles;
  }
});

// node_modules/mathjax-full/js/util/StyleList.js
var require_StyleList = __commonJS({
  "node_modules/mathjax-full/js/util/StyleList.js"(exports) {
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
    exports.CssStyles = void 0;
    var CssStyles = function() {
      function CssStyles2(styles) {
        if (styles === void 0) {
          styles = null;
        }
        this.styles = {};
        this.addStyles(styles);
      }
      Object.defineProperty(CssStyles2.prototype, "cssText", {
        get: function() {
          return this.getStyleString();
        },
        enumerable: false,
        configurable: true
      });
      CssStyles2.prototype.addStyles = function(styles) {
        var e_1, _a;
        if (!styles)
          return;
        try {
          for (var _b = __values(Object.keys(styles)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var style = _c.value;
            if (!this.styles[style]) {
              this.styles[style] = {};
            }
            Object.assign(this.styles[style], styles[style]);
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
      };
      CssStyles2.prototype.removeStyles = function() {
        var e_2, _a;
        var selectors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          selectors[_i] = arguments[_i];
        }
        try {
          for (var selectors_1 = __values(selectors), selectors_1_1 = selectors_1.next(); !selectors_1_1.done; selectors_1_1 = selectors_1.next()) {
            var selector = selectors_1_1.value;
            delete this.styles[selector];
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (selectors_1_1 && !selectors_1_1.done && (_a = selectors_1.return)) _a.call(selectors_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      };
      CssStyles2.prototype.clear = function() {
        this.styles = {};
      };
      CssStyles2.prototype.getStyleString = function() {
        return this.getStyleRules().join("\n\n");
      };
      CssStyles2.prototype.getStyleRules = function() {
        var e_3, _a;
        var selectors = Object.keys(this.styles);
        var defs = new Array(selectors.length);
        var i = 0;
        try {
          for (var selectors_2 = __values(selectors), selectors_2_1 = selectors_2.next(); !selectors_2_1.done; selectors_2_1 = selectors_2.next()) {
            var selector = selectors_2_1.value;
            defs[i++] = selector + " {\n" + this.getStyleDefString(this.styles[selector]) + "\n}";
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (selectors_2_1 && !selectors_2_1.done && (_a = selectors_2.return)) _a.call(selectors_2);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        return defs;
      };
      CssStyles2.prototype.getStyleDefString = function(styles) {
        var e_4, _a;
        var properties = Object.keys(styles);
        var values = new Array(properties.length);
        var i = 0;
        try {
          for (var properties_1 = __values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
            var property = properties_1_1.value;
            values[i++] = "  " + property + ": " + styles[property] + ";";
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
        return values.join("\n");
      };
      return CssStyles2;
    }();
    exports.CssStyles = CssStyles;
  }
});

// node_modules/mathjax-full/js/output/common/OutputJax.js
var require_OutputJax2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/OutputJax.js"(exports) {
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
    exports.CommonOutputJax = void 0;
    var OutputJax_js_1 = require_OutputJax();
    var MathItem_js_1 = require_MathItem();
    var Options_js_1 = require_Options();
    var lengths_js_1 = require_lengths();
    var Styles_js_1 = require_Styles();
    var StyleList_js_1 = require_StyleList();
    var CommonOutputJax = function(_super) {
      __extends(CommonOutputJax2, _super);
      function CommonOutputJax2(options, defaultFactory, defaultFont) {
        if (options === void 0) {
          options = null;
        }
        if (defaultFactory === void 0) {
          defaultFactory = null;
        }
        if (defaultFont === void 0) {
          defaultFont = null;
        }
        var _this = this;
        var _a = __read((0, Options_js_1.separateOptions)(options, defaultFont.OPTIONS), 2), jaxOptions = _a[0], fontOptions = _a[1];
        _this = _super.call(this, jaxOptions) || this;
        _this.factory = _this.options.wrapperFactory || new defaultFactory();
        _this.factory.jax = _this;
        _this.cssStyles = _this.options.cssStyles || new StyleList_js_1.CssStyles();
        _this.font = _this.options.font || new defaultFont(fontOptions);
        _this.unknownCache = /* @__PURE__ */ new Map();
        return _this;
      }
      CommonOutputJax2.prototype.typeset = function(math, html) {
        this.setDocument(html);
        var node = this.createNode();
        this.toDOM(math, node, html);
        return node;
      };
      CommonOutputJax2.prototype.createNode = function() {
        var jax = this.constructor.NAME;
        return this.html("mjx-container", { "class": "MathJax", jax });
      };
      CommonOutputJax2.prototype.setScale = function(node) {
        var scale = this.math.metrics.scale * this.options.scale;
        if (scale !== 1) {
          this.adaptor.setStyle(node, "fontSize", (0, lengths_js_1.percent)(scale));
        }
      };
      CommonOutputJax2.prototype.toDOM = function(math, node, html) {
        if (html === void 0) {
          html = null;
        }
        this.setDocument(html);
        this.math = math;
        this.pxPerEm = math.metrics.ex / this.font.params.x_height;
        math.root.setTeXclass(null);
        this.setScale(node);
        this.nodeMap = /* @__PURE__ */ new Map();
        this.container = node;
        this.processMath(math.root, node);
        this.nodeMap = null;
        this.executeFilters(this.postFilters, math, html, node);
      };
      CommonOutputJax2.prototype.getBBox = function(math, html) {
        this.setDocument(html);
        this.math = math;
        math.root.setTeXclass(null);
        this.nodeMap = /* @__PURE__ */ new Map();
        var bbox = this.factory.wrap(math.root).getOuterBBox();
        this.nodeMap = null;
        return bbox;
      };
      CommonOutputJax2.prototype.getMetrics = function(html) {
        var e_1, _a;
        this.setDocument(html);
        var adaptor = this.adaptor;
        var maps = this.getMetricMaps(html);
        try {
          for (var _b = __values(html.math), _c = _b.next(); !_c.done; _c = _b.next()) {
            var math = _c.value;
            var parent_1 = adaptor.parent(math.start.node);
            if (math.state() < MathItem_js_1.STATE.METRICS && parent_1) {
              var map = maps[math.display ? 1 : 0];
              var _d = map.get(parent_1), em = _d.em, ex = _d.ex, containerWidth = _d.containerWidth, lineWidth = _d.lineWidth, scale = _d.scale, family = _d.family;
              math.setMetrics(em, ex, containerWidth, lineWidth, scale);
              if (this.options.mtextInheritFont) {
                math.outputData.mtextFamily = family;
              }
              if (this.options.merrorInheritFont) {
                math.outputData.merrorFamily = family;
              }
              math.state(MathItem_js_1.STATE.METRICS);
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
      };
      CommonOutputJax2.prototype.getMetricsFor = function(node, display) {
        var getFamily = this.options.mtextInheritFont || this.options.merrorInheritFont;
        var test = this.getTestElement(node, display);
        var metrics = this.measureMetrics(test, getFamily);
        this.adaptor.remove(test);
        return metrics;
      };
      CommonOutputJax2.prototype.getMetricMaps = function(html) {
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d, e_6, _e;
        var adaptor = this.adaptor;
        var domMaps = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
        try {
          for (var _f = __values(html.math), _g = _f.next(); !_g.done; _g = _f.next()) {
            var math = _g.value;
            var node = adaptor.parent(math.start.node);
            if (node && math.state() < MathItem_js_1.STATE.METRICS) {
              var map = domMaps[math.display ? 1 : 0];
              if (!map.has(node)) {
                map.set(node, this.getTestElement(node, math.display));
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        var getFamily = this.options.mtextInheritFont || this.options.merrorInheritFont;
        var maps = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
        try {
          for (var _h = __values(maps.keys()), _j = _h.next(); !_j.done; _j = _h.next()) {
            var i = _j.value;
            try {
              for (var _k = (e_4 = void 0, __values(domMaps[i].keys())), _l = _k.next(); !_l.done; _l = _k.next()) {
                var node = _l.value;
                maps[i].set(node, this.measureMetrics(domMaps[i].get(node), getFamily));
              }
            } catch (e_4_1) {
              e_4 = { error: e_4_1 };
            } finally {
              try {
                if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
              } finally {
                if (e_4) throw e_4.error;
              }
            }
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        try {
          for (var _m = __values(maps.keys()), _o = _m.next(); !_o.done; _o = _m.next()) {
            var i = _o.value;
            try {
              for (var _p = (e_6 = void 0, __values(domMaps[i].values())), _q = _p.next(); !_q.done; _q = _p.next()) {
                var node = _q.value;
                adaptor.remove(node);
              }
            } catch (e_6_1) {
              e_6 = { error: e_6_1 };
            } finally {
              try {
                if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
              } finally {
                if (e_6) throw e_6.error;
              }
            }
          }
        } catch (e_5_1) {
          e_5 = { error: e_5_1 };
        } finally {
          try {
            if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
        return maps;
      };
      CommonOutputJax2.prototype.getTestElement = function(node, display) {
        var adaptor = this.adaptor;
        if (!this.testInline) {
          this.testInline = this.html("mjx-test", { style: {
            display: "inline-block",
            width: "100%",
            "font-style": "normal",
            "font-weight": "normal",
            "font-size": "100%",
            "font-size-adjust": "none",
            "text-indent": 0,
            "text-transform": "none",
            "letter-spacing": "normal",
            "word-spacing": "normal",
            overflow: "hidden",
            height: "1px",
            "margin-right": "-1px"
          } }, [
            this.html("mjx-left-box", { style: {
              display: "inline-block",
              width: 0,
              "float": "left"
            } }),
            this.html("mjx-ex-box", { style: {
              position: "absolute",
              overflow: "hidden",
              width: "1px",
              height: "60ex"
            } }),
            this.html("mjx-right-box", { style: {
              display: "inline-block",
              width: 0,
              "float": "right"
            } })
          ]);
          this.testDisplay = adaptor.clone(this.testInline);
          adaptor.setStyle(this.testDisplay, "display", "table");
          adaptor.setStyle(this.testDisplay, "margin-right", "");
          adaptor.setStyle(adaptor.firstChild(this.testDisplay), "display", "none");
          var right = adaptor.lastChild(this.testDisplay);
          adaptor.setStyle(right, "display", "table-cell");
          adaptor.setStyle(right, "width", "10000em");
          adaptor.setStyle(right, "float", "");
        }
        return adaptor.append(node, adaptor.clone(display ? this.testDisplay : this.testInline));
      };
      CommonOutputJax2.prototype.measureMetrics = function(node, getFamily) {
        var adaptor = this.adaptor;
        var family = getFamily ? adaptor.fontFamily(node) : "";
        var em = adaptor.fontSize(node);
        var _a = __read(adaptor.nodeSize(adaptor.childNode(node, 1)), 2), w = _a[0], h = _a[1];
        var ex = w ? h / 60 : em * this.options.exFactor;
        var containerWidth = !w ? 1e6 : adaptor.getStyle(node, "display") === "table" ? adaptor.nodeSize(adaptor.lastChild(node))[0] - 1 : adaptor.nodeBBox(adaptor.lastChild(node)).left - adaptor.nodeBBox(adaptor.firstChild(node)).left - 2;
        var scale = Math.max(this.options.minScale, this.options.matchFontHeight ? ex / this.font.params.x_height / em : 1);
        var lineWidth = 1e6;
        return { em, ex, containerWidth, lineWidth, scale, family };
      };
      CommonOutputJax2.prototype.styleSheet = function(html) {
        var e_7, _a;
        this.setDocument(html);
        this.cssStyles.clear();
        this.cssStyles.addStyles(this.constructor.commonStyles);
        if ("getStyles" in html) {
          try {
            for (var _b = __values(html.getStyles()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var styles = _c.value;
              this.cssStyles.addStyles(styles);
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
        }
        this.addWrapperStyles(this.cssStyles);
        this.addFontStyles(this.cssStyles);
        var sheet = this.html("style", { id: "MJX-styles" }, [this.text("\n" + this.cssStyles.cssText + "\n")]);
        return sheet;
      };
      CommonOutputJax2.prototype.addFontStyles = function(styles) {
        styles.addStyles(this.font.styles);
      };
      CommonOutputJax2.prototype.addWrapperStyles = function(styles) {
        var e_8, _a;
        try {
          for (var _b = __values(this.factory.getKinds()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var kind = _c.value;
            this.addClassStyles(this.factory.getNodeClass(kind), styles);
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
      };
      CommonOutputJax2.prototype.addClassStyles = function(CLASS, styles) {
        styles.addStyles(CLASS.styles);
      };
      CommonOutputJax2.prototype.setDocument = function(html) {
        if (html) {
          this.document = html;
          this.adaptor.document = html.document;
        }
      };
      CommonOutputJax2.prototype.html = function(type, def, content, ns) {
        if (def === void 0) {
          def = {};
        }
        if (content === void 0) {
          content = [];
        }
        return this.adaptor.node(type, def, content, ns);
      };
      CommonOutputJax2.prototype.text = function(text) {
        return this.adaptor.text(text);
      };
      CommonOutputJax2.prototype.fixed = function(m, n) {
        if (n === void 0) {
          n = 3;
        }
        if (Math.abs(m) < 6e-4) {
          return "0";
        }
        return m.toFixed(n).replace(/\.?0+$/, "");
      };
      CommonOutputJax2.prototype.measureText = function(text, variant, font) {
        if (font === void 0) {
          font = ["", false, false];
        }
        var node = this.unknownText(text, variant);
        if (variant === "-explicitFont") {
          var styles = this.cssFontStyles(font);
          this.adaptor.setAttributes(node, { style: styles });
        }
        return this.measureTextNodeWithCache(node, text, variant, font);
      };
      CommonOutputJax2.prototype.measureTextNodeWithCache = function(text, chars, variant, font) {
        if (font === void 0) {
          font = ["", false, false];
        }
        if (variant === "-explicitFont") {
          variant = [font[0], font[1] ? "T" : "F", font[2] ? "T" : "F", ""].join("-");
        }
        if (!this.unknownCache.has(variant)) {
          this.unknownCache.set(variant, /* @__PURE__ */ new Map());
        }
        var map = this.unknownCache.get(variant);
        var cached = map.get(chars);
        if (cached)
          return cached;
        var bbox = this.measureTextNode(text);
        map.set(chars, bbox);
        return bbox;
      };
      CommonOutputJax2.prototype.measureXMLnode = function(xml) {
        var adaptor = this.adaptor;
        var content = this.html("mjx-xml-block", { style: { display: "inline-block" } }, [adaptor.clone(xml)]);
        var base = this.html("mjx-baseline", { style: { display: "inline-block", width: 0, height: 0 } });
        var style = {
          position: "absolute",
          display: "inline-block",
          "font-family": "initial",
          "line-height": "normal"
        };
        var node = this.html("mjx-measure-xml", { style }, [base, content]);
        adaptor.append(adaptor.parent(this.math.start.node), this.container);
        adaptor.append(this.container, node);
        var em = this.math.metrics.em * this.math.metrics.scale;
        var _a = adaptor.nodeBBox(content), left = _a.left, right = _a.right, bottom = _a.bottom, top = _a.top;
        var w = (right - left) / em;
        var h = (adaptor.nodeBBox(base).top - top) / em;
        var d = (bottom - top) / em - h;
        adaptor.remove(this.container);
        adaptor.remove(node);
        return { w, h, d };
      };
      CommonOutputJax2.prototype.cssFontStyles = function(font, styles) {
        if (styles === void 0) {
          styles = {};
        }
        var _a = __read(font, 3), family = _a[0], italic = _a[1], bold = _a[2];
        styles["font-family"] = this.font.getFamily(family);
        if (italic)
          styles["font-style"] = "italic";
        if (bold)
          styles["font-weight"] = "bold";
        return styles;
      };
      CommonOutputJax2.prototype.getFontData = function(styles) {
        if (!styles) {
          styles = new Styles_js_1.Styles();
        }
        return [
          this.font.getFamily(styles.get("font-family")),
          styles.get("font-style") === "italic",
          styles.get("font-weight") === "bold"
        ];
      };
      CommonOutputJax2.NAME = "Common";
      CommonOutputJax2.OPTIONS = __assign(__assign({}, OutputJax_js_1.AbstractOutputJax.OPTIONS), { scale: 1, minScale: 0.5, mtextInheritFont: false, merrorInheritFont: false, mtextFont: "", merrorFont: "serif", mathmlSpacing: false, skipAttributes: {}, exFactor: 0.5, displayAlign: "center", displayIndent: "0", wrapperFactory: null, font: null, cssStyles: null });
      CommonOutputJax2.commonStyles = {};
      return CommonOutputJax2;
    }(OutputJax_js_1.AbstractOutputJax);
    exports.CommonOutputJax = CommonOutputJax;
  }
});

// node_modules/mathjax-full/js/core/Tree/WrapperFactory.js
var require_WrapperFactory = __commonJS({
  "node_modules/mathjax-full/js/core/Tree/WrapperFactory.js"(exports) {
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
    exports.AbstractWrapperFactory = void 0;
    var Factory_js_1 = require_Factory();
    var AbstractWrapperFactory = function(_super) {
      __extends(AbstractWrapperFactory2, _super);
      function AbstractWrapperFactory2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AbstractWrapperFactory2.prototype.wrap = function(node) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        return this.create.apply(this, __spreadArray([node.kind, node], __read(args), false));
      };
      return AbstractWrapperFactory2;
    }(Factory_js_1.AbstractFactory);
    exports.AbstractWrapperFactory = AbstractWrapperFactory;
  }
});

// node_modules/mathjax-full/js/output/common/WrapperFactory.js
var require_WrapperFactory2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/WrapperFactory.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonWrapperFactory = void 0;
    var WrapperFactory_js_1 = require_WrapperFactory();
    var CommonWrapperFactory = function(_super) {
      __extends(CommonWrapperFactory2, _super);
      function CommonWrapperFactory2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jax = null;
        return _this;
      }
      Object.defineProperty(CommonWrapperFactory2.prototype, "Wrappers", {
        get: function() {
          return this.node;
        },
        enumerable: false,
        configurable: true
      });
      CommonWrapperFactory2.defaultNodes = {};
      return CommonWrapperFactory2;
    }(WrapperFactory_js_1.AbstractWrapperFactory);
    exports.CommonWrapperFactory = CommonWrapperFactory;
  }
});

// node_modules/mathjax-full/js/core/Tree/Wrapper.js
var require_Wrapper = __commonJS({
  "node_modules/mathjax-full/js/core/Tree/Wrapper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractWrapper = void 0;
    var AbstractWrapper = function() {
      function AbstractWrapper2(factory, node) {
        this.factory = factory;
        this.node = node;
      }
      Object.defineProperty(AbstractWrapper2.prototype, "kind", {
        get: function() {
          return this.node.kind;
        },
        enumerable: false,
        configurable: true
      });
      AbstractWrapper2.prototype.wrap = function(node) {
        return this.factory.wrap(node);
      };
      return AbstractWrapper2;
    }();
    exports.AbstractWrapper = AbstractWrapper;
  }
});

// node_modules/mathjax-full/js/util/BBox.js
var require_BBox = __commonJS({
  "node_modules/mathjax-full/js/util/BBox.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BBox = void 0;
    var lengths_js_1 = require_lengths();
    var BBox = function() {
      function BBox2(def) {
        if (def === void 0) {
          def = { w: 0, h: -lengths_js_1.BIGDIMEN, d: -lengths_js_1.BIGDIMEN };
        }
        this.w = def.w || 0;
        this.h = "h" in def ? def.h : -lengths_js_1.BIGDIMEN;
        this.d = "d" in def ? def.d : -lengths_js_1.BIGDIMEN;
        this.L = this.R = this.ic = this.sk = this.dx = 0;
        this.scale = this.rscale = 1;
        this.pwidth = "";
      }
      BBox2.zero = function() {
        return new BBox2({ h: 0, d: 0, w: 0 });
      };
      BBox2.empty = function() {
        return new BBox2();
      };
      BBox2.prototype.empty = function() {
        this.w = 0;
        this.h = this.d = -lengths_js_1.BIGDIMEN;
        return this;
      };
      BBox2.prototype.clean = function() {
        if (this.w === -lengths_js_1.BIGDIMEN)
          this.w = 0;
        if (this.h === -lengths_js_1.BIGDIMEN)
          this.h = 0;
        if (this.d === -lengths_js_1.BIGDIMEN)
          this.d = 0;
      };
      BBox2.prototype.rescale = function(scale) {
        this.w *= scale;
        this.h *= scale;
        this.d *= scale;
      };
      BBox2.prototype.combine = function(cbox, x, y) {
        if (x === void 0) {
          x = 0;
        }
        if (y === void 0) {
          y = 0;
        }
        var rscale = cbox.rscale;
        var w = x + rscale * (cbox.w + cbox.L + cbox.R);
        var h = y + rscale * cbox.h;
        var d = rscale * cbox.d - y;
        if (w > this.w)
          this.w = w;
        if (h > this.h)
          this.h = h;
        if (d > this.d)
          this.d = d;
      };
      BBox2.prototype.append = function(cbox) {
        var scale = cbox.rscale;
        this.w += scale * (cbox.w + cbox.L + cbox.R);
        if (scale * cbox.h > this.h) {
          this.h = scale * cbox.h;
        }
        if (scale * cbox.d > this.d) {
          this.d = scale * cbox.d;
        }
      };
      BBox2.prototype.updateFrom = function(cbox) {
        this.h = cbox.h;
        this.d = cbox.d;
        this.w = cbox.w;
        if (cbox.pwidth) {
          this.pwidth = cbox.pwidth;
        }
      };
      BBox2.fullWidth = "100%";
      BBox2.StyleAdjust = [
        ["borderTopWidth", "h"],
        ["borderRightWidth", "w"],
        ["borderBottomWidth", "d"],
        ["borderLeftWidth", "w", 0],
        ["paddingTop", "h"],
        ["paddingRight", "w"],
        ["paddingBottom", "d"],
        ["paddingLeft", "w", 0]
      ];
      return BBox2;
    }();
    exports.BBox = BBox;
  }
});

// node_modules/mathjax-full/js/output/common/FontData.js
var require_FontData = __commonJS({
  "node_modules/mathjax-full/js/output/common/FontData.js"(exports) {
    "use strict";
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
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
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
    exports.FontData = exports.NOSTRETCH = exports.H = exports.V = void 0;
    var Options_js_1 = require_Options();
    exports.V = 1;
    exports.H = 2;
    exports.NOSTRETCH = { dir: 0 };
    var FontData = function() {
      function FontData2(options) {
        var e_1, _a, e_2, _b;
        if (options === void 0) {
          options = null;
        }
        this.variant = {};
        this.delimiters = {};
        this.cssFontMap = {};
        this.remapChars = {};
        this.skewIcFactor = 0.75;
        var CLASS = this.constructor;
        this.options = (0, Options_js_1.userOptions)((0, Options_js_1.defaultOptions)({}, CLASS.OPTIONS), options);
        this.params = __assign({}, CLASS.defaultParams);
        this.sizeVariants = __spreadArray([], __read(CLASS.defaultSizeVariants), false);
        this.stretchVariants = __spreadArray([], __read(CLASS.defaultStretchVariants), false);
        this.cssFontMap = __assign({}, CLASS.defaultCssFonts);
        try {
          for (var _c = __values(Object.keys(this.cssFontMap)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var name_1 = _d.value;
            if (this.cssFontMap[name_1][0] === "unknown") {
              this.cssFontMap[name_1][0] = this.options.unknownFamily;
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
        this.cssFamilyPrefix = CLASS.defaultCssFamilyPrefix;
        this.createVariants(CLASS.defaultVariants);
        this.defineDelimiters(CLASS.defaultDelimiters);
        try {
          for (var _e = __values(Object.keys(CLASS.defaultChars)), _f = _e.next(); !_f.done; _f = _e.next()) {
            var name_2 = _f.value;
            this.defineChars(name_2, CLASS.defaultChars[name_2]);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        this.defineRemap("accent", CLASS.defaultAccentMap);
        this.defineRemap("mo", CLASS.defaultMoMap);
        this.defineRemap("mn", CLASS.defaultMnMap);
      }
      FontData2.charOptions = function(font, n) {
        var char = font[n];
        if (char.length === 3) {
          char[3] = {};
        }
        return char[3];
      };
      Object.defineProperty(FontData2.prototype, "styles", {
        get: function() {
          return this._styles;
        },
        set: function(style) {
          this._styles = style;
        },
        enumerable: false,
        configurable: true
      });
      FontData2.prototype.createVariant = function(name, inherit, link) {
        if (inherit === void 0) {
          inherit = null;
        }
        if (link === void 0) {
          link = null;
        }
        var variant = {
          linked: [],
          chars: inherit ? Object.create(this.variant[inherit].chars) : {}
        };
        if (link && this.variant[link]) {
          Object.assign(variant.chars, this.variant[link].chars);
          this.variant[link].linked.push(variant.chars);
          variant.chars = Object.create(variant.chars);
        }
        this.remapSmpChars(variant.chars, name);
        this.variant[name] = variant;
      };
      FontData2.prototype.remapSmpChars = function(chars, name) {
        var e_3, _a, e_4, _b;
        var CLASS = this.constructor;
        if (CLASS.VariantSmp[name]) {
          var SmpRemap = CLASS.SmpRemap;
          var SmpGreek = [null, null, CLASS.SmpRemapGreekU, CLASS.SmpRemapGreekL];
          try {
            for (var _c = __values(CLASS.SmpRanges), _d = _c.next(); !_d.done; _d = _c.next()) {
              var _e = __read(_d.value, 3), i = _e[0], lo = _e[1], hi = _e[2];
              var base = CLASS.VariantSmp[name][i];
              if (!base)
                continue;
              for (var n = lo; n <= hi; n++) {
                if (n === 930)
                  continue;
                var smp = base + n - lo;
                chars[n] = this.smpChar(SmpRemap[smp] || smp);
              }
              if (SmpGreek[i]) {
                try {
                  for (var _f = (e_4 = void 0, __values(Object.keys(SmpGreek[i]).map(function(x) {
                    return parseInt(x);
                  }))), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var n = _g.value;
                    chars[n] = this.smpChar(base + SmpGreek[i][n]);
                  }
                } catch (e_4_1) {
                  e_4 = { error: e_4_1 };
                } finally {
                  try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                  } finally {
                    if (e_4) throw e_4.error;
                  }
                }
              }
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
        if (name === "bold") {
          chars[988] = this.smpChar(120778);
          chars[989] = this.smpChar(120779);
        }
      };
      FontData2.prototype.smpChar = function(n) {
        return [, , , { smp: n }];
      };
      FontData2.prototype.createVariants = function(variants) {
        var e_5, _a;
        try {
          for (var variants_1 = __values(variants), variants_1_1 = variants_1.next(); !variants_1_1.done; variants_1_1 = variants_1.next()) {
            var variant = variants_1_1.value;
            this.createVariant(variant[0], variant[1], variant[2]);
          }
        } catch (e_5_1) {
          e_5 = { error: e_5_1 };
        } finally {
          try {
            if (variants_1_1 && !variants_1_1.done && (_a = variants_1.return)) _a.call(variants_1);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
      };
      FontData2.prototype.defineChars = function(name, chars) {
        var e_6, _a;
        var variant = this.variant[name];
        Object.assign(variant.chars, chars);
        try {
          for (var _b = __values(variant.linked), _c = _b.next(); !_c.done; _c = _b.next()) {
            var link = _c.value;
            Object.assign(link, chars);
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
      FontData2.prototype.defineDelimiters = function(delims) {
        Object.assign(this.delimiters, delims);
      };
      FontData2.prototype.defineRemap = function(name, remap) {
        if (!this.remapChars.hasOwnProperty(name)) {
          this.remapChars[name] = {};
        }
        Object.assign(this.remapChars[name], remap);
      };
      FontData2.prototype.getDelimiter = function(n) {
        return this.delimiters[n];
      };
      FontData2.prototype.getSizeVariant = function(n, i) {
        if (this.delimiters[n].variants) {
          i = this.delimiters[n].variants[i];
        }
        return this.sizeVariants[i];
      };
      FontData2.prototype.getStretchVariant = function(n, i) {
        return this.stretchVariants[this.delimiters[n].stretchv ? this.delimiters[n].stretchv[i] : 0];
      };
      FontData2.prototype.getChar = function(name, n) {
        return this.variant[name].chars[n];
      };
      FontData2.prototype.getVariant = function(name) {
        return this.variant[name];
      };
      FontData2.prototype.getCssFont = function(variant) {
        return this.cssFontMap[variant] || ["serif", false, false];
      };
      FontData2.prototype.getFamily = function(family) {
        return this.cssFamilyPrefix ? this.cssFamilyPrefix + ", " + family : family;
      };
      FontData2.prototype.getRemappedChar = function(name, c) {
        var map = this.remapChars[name] || {};
        return map[c];
      };
      FontData2.OPTIONS = {
        unknownFamily: "serif"
      };
      FontData2.JAX = "common";
      FontData2.NAME = "";
      FontData2.defaultVariants = [
        ["normal"],
        ["bold", "normal"],
        ["italic", "normal"],
        ["bold-italic", "italic", "bold"],
        ["double-struck", "bold"],
        ["fraktur", "normal"],
        ["bold-fraktur", "bold", "fraktur"],
        ["script", "italic"],
        ["bold-script", "bold-italic", "script"],
        ["sans-serif", "normal"],
        ["bold-sans-serif", "bold", "sans-serif"],
        ["sans-serif-italic", "italic", "sans-serif"],
        ["sans-serif-bold-italic", "bold-italic", "bold-sans-serif"],
        ["monospace", "normal"]
      ];
      FontData2.defaultCssFonts = {
        normal: ["unknown", false, false],
        bold: ["unknown", false, true],
        italic: ["unknown", true, false],
        "bold-italic": ["unknown", true, true],
        "double-struck": ["unknown", false, true],
        fraktur: ["unknown", false, false],
        "bold-fraktur": ["unknown", false, true],
        script: ["cursive", false, false],
        "bold-script": ["cursive", false, true],
        "sans-serif": ["sans-serif", false, false],
        "bold-sans-serif": ["sans-serif", false, true],
        "sans-serif-italic": ["sans-serif", true, false],
        "sans-serif-bold-italic": ["sans-serif", true, true],
        monospace: ["monospace", false, false]
      };
      FontData2.defaultCssFamilyPrefix = "";
      FontData2.VariantSmp = {
        bold: [119808, 119834, 120488, 120514, 120782],
        italic: [119860, 119886, 120546, 120572],
        "bold-italic": [119912, 119938, 120604, 120630],
        script: [119964, 119990],
        "bold-script": [120016, 120042],
        fraktur: [120068, 120094],
        "double-struck": [120120, 120146, , , 120792],
        "bold-fraktur": [120172, 120198],
        "sans-serif": [120224, 120250, , , 120802],
        "bold-sans-serif": [120276, 120302, 120662, 120688, 120812],
        "sans-serif-italic": [120328, 120354],
        "sans-serif-bold-italic": [120380, 120406, 120720, 120746],
        "monospace": [120432, 120458, , , 120822]
      };
      FontData2.SmpRanges = [
        [0, 65, 90],
        [1, 97, 122],
        [2, 913, 937],
        [3, 945, 969],
        [4, 48, 57]
      ];
      FontData2.SmpRemap = {
        119893: 8462,
        119965: 8492,
        119968: 8496,
        119969: 8497,
        119971: 8459,
        119972: 8464,
        119975: 8466,
        119976: 8499,
        119981: 8475,
        119994: 8495,
        119996: 8458,
        120004: 8500,
        120070: 8493,
        120075: 8460,
        120076: 8465,
        120085: 8476,
        120093: 8488,
        120122: 8450,
        120127: 8461,
        120133: 8469,
        120135: 8473,
        120136: 8474,
        120137: 8477,
        120145: 8484
      };
      FontData2.SmpRemapGreekU = {
        8711: 25,
        1012: 17
      };
      FontData2.SmpRemapGreekL = {
        977: 27,
        981: 29,
        982: 31,
        1008: 28,
        1009: 30,
        1013: 26,
        8706: 25
      };
      FontData2.defaultAccentMap = {
        768: "ˋ",
        769: "ˊ",
        770: "ˆ",
        771: "˜",
        772: "ˉ",
        774: "˘",
        775: "˙",
        776: "¨",
        778: "˚",
        780: "ˇ",
        8594: "⃗",
        8242: "'",
        8243: "''",
        8244: "'''",
        8245: "`",
        8246: "``",
        8247: "```",
        8279: "''''",
        8400: "↼",
        8401: "⇀",
        8406: "←",
        8417: "↔",
        8432: "*",
        8411: "...",
        8412: "....",
        8428: "⇁",
        8429: "↽",
        8430: "←",
        8431: "→"
      };
      FontData2.defaultMoMap = {
        45: "−"
      };
      FontData2.defaultMnMap = {
        45: "−"
      };
      FontData2.defaultParams = {
        x_height: 0.442,
        quad: 1,
        num1: 0.676,
        num2: 0.394,
        num3: 0.444,
        denom1: 0.686,
        denom2: 0.345,
        sup1: 0.413,
        sup2: 0.363,
        sup3: 0.289,
        sub1: 0.15,
        sub2: 0.247,
        sup_drop: 0.386,
        sub_drop: 0.05,
        delim1: 2.39,
        delim2: 1,
        axis_height: 0.25,
        rule_thickness: 0.06,
        big_op_spacing1: 0.111,
        big_op_spacing2: 0.167,
        big_op_spacing3: 0.2,
        big_op_spacing4: 0.6,
        big_op_spacing5: 0.1,
        surd_height: 0.075,
        scriptspace: 0.05,
        nulldelimiterspace: 0.12,
        delimiterfactor: 901,
        delimitershortfall: 0.3,
        min_rule_thickness: 1.25,
        separation_factor: 1.75,
        extra_ic: 0.033
      };
      FontData2.defaultDelimiters = {};
      FontData2.defaultChars = {};
      FontData2.defaultSizeVariants = [];
      FontData2.defaultStretchVariants = [];
      return FontData2;
    }();
    exports.FontData = FontData;
  }
});

// node_modules/mathjax-full/js/output/common/Wrapper.js
var require_Wrapper2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrapper.js"(exports) {
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
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
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
    exports.CommonWrapper = void 0;
    var Wrapper_js_1 = require_Wrapper();
    var MmlNode_js_1 = require_MmlNode();
    var string_js_1 = require_string();
    var LENGTHS = __importStar(require_lengths());
    var Styles_js_1 = require_Styles();
    var BBox_js_1 = require_BBox();
    var FontData_js_1 = require_FontData();
    var SMALLSIZE = 2 / 18;
    function MathMLSpace(script, size) {
      return script ? size < SMALLSIZE ? 0 : SMALLSIZE : size;
    }
    var CommonWrapper = function(_super) {
      __extends(CommonWrapper2, _super);
      function CommonWrapper2(factory, node, parent) {
        if (parent === void 0) {
          parent = null;
        }
        var _this = _super.call(this, factory, node) || this;
        _this.parent = null;
        _this.removedStyles = null;
        _this.styles = null;
        _this.variant = "";
        _this.bboxComputed = false;
        _this.stretch = FontData_js_1.NOSTRETCH;
        _this.font = null;
        _this.parent = parent;
        _this.font = factory.jax.font;
        _this.bbox = BBox_js_1.BBox.zero();
        _this.getStyles();
        _this.getVariant();
        _this.getScale();
        _this.getSpace();
        _this.childNodes = node.childNodes.map(function(child) {
          var wrapped = _this.wrap(child);
          if (wrapped.bbox.pwidth && (node.notParent || node.isKind("math"))) {
            _this.bbox.pwidth = BBox_js_1.BBox.fullWidth;
          }
          return wrapped;
        });
        return _this;
      }
      Object.defineProperty(CommonWrapper2.prototype, "jax", {
        get: function() {
          return this.factory.jax;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(CommonWrapper2.prototype, "adaptor", {
        get: function() {
          return this.factory.jax.adaptor;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(CommonWrapper2.prototype, "metrics", {
        get: function() {
          return this.factory.jax.math.metrics;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(CommonWrapper2.prototype, "fixesPWidth", {
        get: function() {
          return !this.node.notParent && !this.node.isToken;
        },
        enumerable: false,
        configurable: true
      });
      CommonWrapper2.prototype.wrap = function(node, parent) {
        if (parent === void 0) {
          parent = null;
        }
        var wrapped = this.factory.wrap(node, parent || this);
        if (parent) {
          parent.childNodes.push(wrapped);
        }
        this.jax.nodeMap.set(node, wrapped);
        return wrapped;
      };
      CommonWrapper2.prototype.getBBox = function(save) {
        if (save === void 0) {
          save = true;
        }
        if (this.bboxComputed) {
          return this.bbox;
        }
        var bbox = save ? this.bbox : BBox_js_1.BBox.zero();
        this.computeBBox(bbox);
        this.bboxComputed = save;
        return bbox;
      };
      CommonWrapper2.prototype.getOuterBBox = function(save) {
        var e_1, _a;
        if (save === void 0) {
          save = true;
        }
        var bbox = this.getBBox(save);
        if (!this.styles)
          return bbox;
        var obox = new BBox_js_1.BBox();
        Object.assign(obox, bbox);
        try {
          for (var _b = __values(BBox_js_1.BBox.StyleAdjust), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), name_1 = _d[0], side = _d[1];
            var x = this.styles.get(name_1);
            if (x) {
              obox[side] += this.length2em(x, 1, obox.rscale);
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
        return obox;
      };
      CommonWrapper2.prototype.computeBBox = function(bbox, recompute) {
        var e_2, _a;
        if (recompute === void 0) {
          recompute = false;
        }
        bbox.empty();
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            bbox.append(child.getOuterBBox());
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
        bbox.clean();
        if (this.fixesPWidth && this.setChildPWidths(recompute)) {
          this.computeBBox(bbox, true);
        }
      };
      CommonWrapper2.prototype.setChildPWidths = function(recompute, w, clear) {
        var e_3, _a;
        if (w === void 0) {
          w = null;
        }
        if (clear === void 0) {
          clear = true;
        }
        if (recompute) {
          return false;
        }
        if (clear) {
          this.bbox.pwidth = "";
        }
        var changed = false;
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            var cbox = child.getOuterBBox();
            if (cbox.pwidth && child.setChildPWidths(recompute, w === null ? cbox.w : w, clear)) {
              changed = true;
            }
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
        return changed;
      };
      CommonWrapper2.prototype.invalidateBBox = function() {
        if (this.bboxComputed) {
          this.bboxComputed = false;
          if (this.parent) {
            this.parent.invalidateBBox();
          }
        }
      };
      CommonWrapper2.prototype.copySkewIC = function(bbox) {
        var first = this.childNodes[0];
        if (first === null || first === void 0 ? void 0 : first.bbox.sk) {
          bbox.sk = first.bbox.sk;
        }
        if (first === null || first === void 0 ? void 0 : first.bbox.dx) {
          bbox.dx = first.bbox.dx;
        }
        var last = this.childNodes[this.childNodes.length - 1];
        if (last === null || last === void 0 ? void 0 : last.bbox.ic) {
          bbox.ic = last.bbox.ic;
          bbox.w += bbox.ic;
        }
      };
      CommonWrapper2.prototype.getStyles = function() {
        var styleString = this.node.attributes.getExplicit("style");
        if (!styleString)
          return;
        var style = this.styles = new Styles_js_1.Styles(styleString);
        for (var i = 0, m = CommonWrapper2.removeStyles.length; i < m; i++) {
          var id = CommonWrapper2.removeStyles[i];
          if (style.get(id)) {
            if (!this.removedStyles)
              this.removedStyles = {};
            this.removedStyles[id] = style.get(id);
            style.set(id, "");
          }
        }
      };
      CommonWrapper2.prototype.getVariant = function() {
        if (!this.node.isToken)
          return;
        var attributes = this.node.attributes;
        var variant = attributes.get("mathvariant");
        if (!attributes.getExplicit("mathvariant")) {
          var values = attributes.getList("fontfamily", "fontweight", "fontstyle");
          if (this.removedStyles) {
            var style = this.removedStyles;
            if (style.fontFamily)
              values.family = style.fontFamily;
            if (style.fontWeight)
              values.weight = style.fontWeight;
            if (style.fontStyle)
              values.style = style.fontStyle;
          }
          if (values.fontfamily)
            values.family = values.fontfamily;
          if (values.fontweight)
            values.weight = values.fontweight;
          if (values.fontstyle)
            values.style = values.fontstyle;
          if (values.weight && values.weight.match(/^\d+$/)) {
            values.weight = parseInt(values.weight) > 600 ? "bold" : "normal";
          }
          if (values.family) {
            variant = this.explicitVariant(values.family, values.weight, values.style);
          } else {
            if (this.node.getProperty("variantForm"))
              variant = "-tex-variant";
            variant = (CommonWrapper2.BOLDVARIANTS[values.weight] || {})[variant] || variant;
            variant = (CommonWrapper2.ITALICVARIANTS[values.style] || {})[variant] || variant;
          }
        }
        this.variant = variant;
      };
      CommonWrapper2.prototype.explicitVariant = function(fontFamily, fontWeight, fontStyle) {
        var style = this.styles;
        if (!style)
          style = this.styles = new Styles_js_1.Styles();
        style.set("fontFamily", fontFamily);
        if (fontWeight)
          style.set("fontWeight", fontWeight);
        if (fontStyle)
          style.set("fontStyle", fontStyle);
        return "-explicitFont";
      };
      CommonWrapper2.prototype.getScale = function() {
        var scale = 1, parent = this.parent;
        var pscale = parent ? parent.bbox.scale : 1;
        var attributes = this.node.attributes;
        var scriptlevel = Math.min(attributes.get("scriptlevel"), 2);
        var fontsize = attributes.get("fontsize");
        var mathsize = this.node.isToken || this.node.isKind("mstyle") ? attributes.get("mathsize") : attributes.getInherited("mathsize");
        if (scriptlevel !== 0) {
          scale = Math.pow(attributes.get("scriptsizemultiplier"), scriptlevel);
          var scriptminsize = this.length2em(attributes.get("scriptminsize"), 0.8, 1);
          if (scale < scriptminsize)
            scale = scriptminsize;
        }
        if (this.removedStyles && this.removedStyles.fontSize && !fontsize) {
          fontsize = this.removedStyles.fontSize;
        }
        if (fontsize && !attributes.getExplicit("mathsize")) {
          mathsize = fontsize;
        }
        if (mathsize !== "1") {
          scale *= this.length2em(mathsize, 1, 1);
        }
        this.bbox.scale = scale;
        this.bbox.rscale = scale / pscale;
      };
      CommonWrapper2.prototype.getSpace = function() {
        var isTop = this.isTopEmbellished();
        var hasSpacing = this.node.hasSpacingAttributes();
        if (this.jax.options.mathmlSpacing || hasSpacing) {
          isTop && this.getMathMLSpacing();
        } else {
          this.getTeXSpacing(isTop, hasSpacing);
        }
      };
      CommonWrapper2.prototype.getMathMLSpacing = function() {
        var node = this.node.coreMO();
        var child = node.coreParent();
        var parent = child.parent;
        if (!parent || !parent.isKind("mrow") || parent.childNodes.length === 1)
          return;
        var attributes = node.attributes;
        var isScript = attributes.get("scriptlevel") > 0;
        this.bbox.L = attributes.isSet("lspace") ? Math.max(0, this.length2em(attributes.get("lspace"))) : MathMLSpace(isScript, node.lspace);
        this.bbox.R = attributes.isSet("rspace") ? Math.max(0, this.length2em(attributes.get("rspace"))) : MathMLSpace(isScript, node.rspace);
        var n = parent.childIndex(child);
        if (n === 0)
          return;
        var prev = parent.childNodes[n - 1];
        if (!prev.isEmbellished)
          return;
        var bbox = this.jax.nodeMap.get(prev).getBBox();
        if (bbox.R) {
          this.bbox.L = Math.max(0, this.bbox.L - bbox.R);
        }
      };
      CommonWrapper2.prototype.getTeXSpacing = function(isTop, hasSpacing) {
        if (!hasSpacing) {
          var space = this.node.texSpacing();
          if (space) {
            this.bbox.L = this.length2em(space);
          }
        }
        if (isTop || hasSpacing) {
          var attributes = this.node.coreMO().attributes;
          if (attributes.isSet("lspace")) {
            this.bbox.L = Math.max(0, this.length2em(attributes.get("lspace")));
          }
          if (attributes.isSet("rspace")) {
            this.bbox.R = Math.max(0, this.length2em(attributes.get("rspace")));
          }
        }
      };
      CommonWrapper2.prototype.isTopEmbellished = function() {
        return this.node.isEmbellished && !(this.node.parent && this.node.parent.isEmbellished);
      };
      CommonWrapper2.prototype.core = function() {
        return this.jax.nodeMap.get(this.node.core());
      };
      CommonWrapper2.prototype.coreMO = function() {
        return this.jax.nodeMap.get(this.node.coreMO());
      };
      CommonWrapper2.prototype.getText = function() {
        var e_4, _a;
        var text = "";
        if (this.node.isToken) {
          try {
            for (var _b = __values(this.node.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              if (child instanceof MmlNode_js_1.TextNode) {
                text += child.getText();
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
        }
        return text;
      };
      CommonWrapper2.prototype.canStretch = function(direction) {
        this.stretch = FontData_js_1.NOSTRETCH;
        if (this.node.isEmbellished) {
          var core = this.core();
          if (core && core.node !== this.node) {
            if (core.canStretch(direction)) {
              this.stretch = core.stretch;
            }
          }
        }
        return this.stretch.dir !== 0;
      };
      CommonWrapper2.prototype.getAlignShift = function() {
        var _a;
        var _b = (_a = this.node.attributes).getList.apply(_a, __spreadArray([], __read(MmlNode_js_1.indentAttributes), false)), indentalign = _b.indentalign, indentshift = _b.indentshift, indentalignfirst = _b.indentalignfirst, indentshiftfirst = _b.indentshiftfirst;
        if (indentalignfirst !== "indentalign") {
          indentalign = indentalignfirst;
        }
        if (indentalign === "auto") {
          indentalign = this.jax.options.displayAlign;
        }
        if (indentshiftfirst !== "indentshift") {
          indentshift = indentshiftfirst;
        }
        if (indentshift === "auto") {
          indentshift = this.jax.options.displayIndent;
          if (indentalign === "right" && !indentshift.match(/^\s*0[a-z]*\s*$/)) {
            indentshift = ("-" + indentshift.trim()).replace(/^--/, "");
          }
        }
        var shift = this.length2em(indentshift, this.metrics.containerWidth);
        return [indentalign, shift];
      };
      CommonWrapper2.prototype.getAlignX = function(W, bbox, align) {
        return align === "right" ? W - (bbox.w + bbox.R) * bbox.rscale : align === "left" ? bbox.L * bbox.rscale : (W - bbox.w * bbox.rscale) / 2;
      };
      CommonWrapper2.prototype.getAlignY = function(H, D, h, d, align) {
        return align === "top" ? H - h : align === "bottom" ? d - D : align === "center" ? (H - h - (D - d)) / 2 : 0;
      };
      CommonWrapper2.prototype.getWrapWidth = function(i) {
        return this.childNodes[i].getBBox().w;
      };
      CommonWrapper2.prototype.getChildAlign = function(_i) {
        return "left";
      };
      CommonWrapper2.prototype.percent = function(m) {
        return LENGTHS.percent(m);
      };
      CommonWrapper2.prototype.em = function(m) {
        return LENGTHS.em(m);
      };
      CommonWrapper2.prototype.px = function(m, M) {
        if (M === void 0) {
          M = -LENGTHS.BIGDIMEN;
        }
        return LENGTHS.px(m, M, this.metrics.em);
      };
      CommonWrapper2.prototype.length2em = function(length, size, scale) {
        if (size === void 0) {
          size = 1;
        }
        if (scale === void 0) {
          scale = null;
        }
        if (scale === null) {
          scale = this.bbox.scale;
        }
        return LENGTHS.length2em(length, size, scale, this.jax.pxPerEm);
      };
      CommonWrapper2.prototype.unicodeChars = function(text, name) {
        if (name === void 0) {
          name = this.variant;
        }
        var chars = (0, string_js_1.unicodeChars)(text);
        var variant = this.font.getVariant(name);
        if (variant && variant.chars) {
          var map_1 = variant.chars;
          chars = chars.map(function(n) {
            return ((map_1[n] || [])[3] || {}).smp || n;
          });
        }
        return chars;
      };
      CommonWrapper2.prototype.remapChars = function(chars) {
        return chars;
      };
      CommonWrapper2.prototype.mmlText = function(text) {
        return this.node.factory.create("text").setText(text);
      };
      CommonWrapper2.prototype.mmlNode = function(kind, properties, children) {
        if (properties === void 0) {
          properties = {};
        }
        if (children === void 0) {
          children = [];
        }
        return this.node.factory.create(kind, properties, children);
      };
      CommonWrapper2.prototype.createMo = function(text) {
        var mmlFactory = this.node.factory;
        var textNode = mmlFactory.create("text").setText(text);
        var mml = mmlFactory.create("mo", { stretchy: true }, [textNode]);
        mml.inheritAttributesFrom(this.node);
        var node = this.wrap(mml);
        node.parent = this;
        return node;
      };
      CommonWrapper2.prototype.getVariantChar = function(variant, n) {
        var char = this.font.getChar(variant, n) || [0, 0, 0, { unknown: true }];
        if (char.length === 3) {
          char[3] = {};
        }
        return char;
      };
      CommonWrapper2.kind = "unknown";
      CommonWrapper2.styles = {};
      CommonWrapper2.removeStyles = [
        "fontSize",
        "fontFamily",
        "fontWeight",
        "fontStyle",
        "fontVariant",
        "font"
      ];
      CommonWrapper2.skipAttributes = {
        fontfamily: true,
        fontsize: true,
        fontweight: true,
        fontstyle: true,
        color: true,
        background: true,
        "class": true,
        href: true,
        style: true,
        xmlns: true
      };
      CommonWrapper2.BOLDVARIANTS = {
        bold: {
          normal: "bold",
          italic: "bold-italic",
          fraktur: "bold-fraktur",
          script: "bold-script",
          "sans-serif": "bold-sans-serif",
          "sans-serif-italic": "sans-serif-bold-italic"
        },
        normal: {
          bold: "normal",
          "bold-italic": "italic",
          "bold-fraktur": "fraktur",
          "bold-script": "script",
          "bold-sans-serif": "sans-serif",
          "sans-serif-bold-italic": "sans-serif-italic"
        }
      };
      CommonWrapper2.ITALICVARIANTS = {
        italic: {
          normal: "italic",
          bold: "bold-italic",
          "sans-serif": "sans-serif-italic",
          "bold-sans-serif": "sans-serif-bold-italic"
        },
        normal: {
          italic: "normal",
          "bold-italic": "bold",
          "sans-serif-italic": "sans-serif",
          "sans-serif-bold-italic": "bold-sans-serif"
        }
      };
      return CommonWrapper2;
    }(Wrapper_js_1.AbstractWrapper);
    exports.CommonWrapper = CommonWrapper;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrapper.js
var require_Wrapper3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrapper.js"(exports) {
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
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
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
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLWrapper = exports.SPACE = exports.FONTSIZE = void 0;
    var LENGTHS = __importStar(require_lengths());
    var Wrapper_js_1 = require_Wrapper2();
    var BBox_js_1 = require_BBox();
    exports.FONTSIZE = {
      "70.7%": "s",
      "70%": "s",
      "50%": "ss",
      "60%": "Tn",
      "85%": "sm",
      "120%": "lg",
      "144%": "Lg",
      "173%": "LG",
      "207%": "hg",
      "249%": "HG"
    };
    exports.SPACE = (_a = {}, _a[LENGTHS.em(2 / 18)] = "1", _a[LENGTHS.em(3 / 18)] = "2", _a[LENGTHS.em(4 / 18)] = "3", _a[LENGTHS.em(5 / 18)] = "4", _a[LENGTHS.em(6 / 18)] = "5", _a);
    var CHTMLWrapper = function(_super) {
      __extends(CHTMLWrapper2, _super);
      function CHTMLWrapper2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chtml = null;
        return _this;
      }
      CHTMLWrapper2.prototype.toCHTML = function(parent) {
        var e_1, _a2;
        var chtml = this.standardCHTMLnode(parent);
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            child.toCHTML(chtml);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      };
      CHTMLWrapper2.prototype.standardCHTMLnode = function(parent) {
        this.markUsed();
        var chtml = this.createCHTMLnode(parent);
        this.handleStyles();
        this.handleVariant();
        this.handleScale();
        this.handleColor();
        this.handleSpace();
        this.handleAttributes();
        this.handlePWidth();
        return chtml;
      };
      CHTMLWrapper2.prototype.markUsed = function() {
        this.jax.wrapperUsage.add(this.kind);
      };
      CHTMLWrapper2.prototype.createCHTMLnode = function(parent) {
        var href = this.node.attributes.get("href");
        if (href) {
          parent = this.adaptor.append(parent, this.html("a", { href }));
        }
        this.chtml = this.adaptor.append(parent, this.html("mjx-" + this.node.kind));
        return this.chtml;
      };
      CHTMLWrapper2.prototype.handleStyles = function() {
        if (!this.styles)
          return;
        var styles = this.styles.cssText;
        if (styles) {
          this.adaptor.setAttribute(this.chtml, "style", styles);
          var family = this.styles.get("font-family");
          if (family) {
            this.adaptor.setStyle(this.chtml, "font-family", "MJXZERO, " + family);
          }
        }
      };
      CHTMLWrapper2.prototype.handleVariant = function() {
        if (this.node.isToken && this.variant !== "-explicitFont") {
          this.adaptor.setAttribute(this.chtml, "class", (this.font.getVariant(this.variant) || this.font.getVariant("normal")).classes);
        }
      };
      CHTMLWrapper2.prototype.handleScale = function() {
        this.setScale(this.chtml, this.bbox.rscale);
      };
      CHTMLWrapper2.prototype.setScale = function(chtml, rscale) {
        var scale = Math.abs(rscale - 1) < 1e-3 ? 1 : rscale;
        if (chtml && scale !== 1) {
          var size = this.percent(scale);
          if (exports.FONTSIZE[size]) {
            this.adaptor.setAttribute(chtml, "size", exports.FONTSIZE[size]);
          } else {
            this.adaptor.setStyle(chtml, "fontSize", size);
          }
        }
        return chtml;
      };
      CHTMLWrapper2.prototype.handleSpace = function() {
        var e_2, _a2;
        try {
          for (var _b = __values([
            [this.bbox.L, "space", "marginLeft"],
            [this.bbox.R, "rspace", "marginRight"]
          ]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var data = _c.value;
            var _d = __read(data, 3), dimen = _d[0], name_1 = _d[1], margin = _d[2];
            if (dimen) {
              var space = this.em(dimen);
              if (exports.SPACE[space]) {
                this.adaptor.setAttribute(this.chtml, name_1, exports.SPACE[space]);
              } else {
                this.adaptor.setStyle(this.chtml, margin, space);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      };
      CHTMLWrapper2.prototype.handleColor = function() {
        var attributes = this.node.attributes;
        var mathcolor = attributes.getExplicit("mathcolor");
        var color = attributes.getExplicit("color");
        var mathbackground = attributes.getExplicit("mathbackground");
        var background = attributes.getExplicit("background");
        if (mathcolor || color) {
          this.adaptor.setStyle(this.chtml, "color", mathcolor || color);
        }
        if (mathbackground || background) {
          this.adaptor.setStyle(this.chtml, "backgroundColor", mathbackground || background);
        }
      };
      CHTMLWrapper2.prototype.handleAttributes = function() {
        var e_3, _a2, e_4, _b;
        var attributes = this.node.attributes;
        var defaults = attributes.getAllDefaults();
        var skip = CHTMLWrapper2.skipAttributes;
        try {
          for (var _c = __values(attributes.getExplicitNames()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var name_2 = _d.value;
            if (skip[name_2] === false || !(name_2 in defaults) && !skip[name_2] && !this.adaptor.hasAttribute(this.chtml, name_2)) {
              this.adaptor.setAttribute(this.chtml, name_2, attributes.getExplicit(name_2));
            }
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        if (attributes.get("class")) {
          var names = attributes.get("class").trim().split(/ +/);
          try {
            for (var names_1 = __values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
              var name_3 = names_1_1.value;
              this.adaptor.addClass(this.chtml, name_3);
            }
          } catch (e_4_1) {
            e_4 = { error: e_4_1 };
          } finally {
            try {
              if (names_1_1 && !names_1_1.done && (_b = names_1.return)) _b.call(names_1);
            } finally {
              if (e_4) throw e_4.error;
            }
          }
        }
      };
      CHTMLWrapper2.prototype.handlePWidth = function() {
        if (this.bbox.pwidth) {
          if (this.bbox.pwidth === BBox_js_1.BBox.fullWidth) {
            this.adaptor.setAttribute(this.chtml, "width", "full");
          } else {
            this.adaptor.setStyle(this.chtml, "width", this.bbox.pwidth);
          }
        }
      };
      CHTMLWrapper2.prototype.setIndent = function(chtml, align, shift) {
        var adaptor = this.adaptor;
        if (align === "center" || align === "left") {
          var L = this.getBBox().L;
          adaptor.setStyle(chtml, "margin-left", this.em(shift + L));
        }
        if (align === "center" || align === "right") {
          var R = this.getBBox().R;
          adaptor.setStyle(chtml, "margin-right", this.em(-shift + R));
        }
      };
      CHTMLWrapper2.prototype.drawBBox = function() {
        var _a2 = this.getBBox(), w = _a2.w, h = _a2.h, d = _a2.d, R = _a2.R;
        var box = this.html("mjx-box", { style: {
          opacity: 0.25,
          "margin-left": this.em(-w - R)
        } }, [
          this.html("mjx-box", { style: {
            height: this.em(h),
            width: this.em(w),
            "background-color": "red"
          } }),
          this.html("mjx-box", { style: {
            height: this.em(d),
            width: this.em(w),
            "margin-left": this.em(-w),
            "vertical-align": this.em(-d),
            "background-color": "green"
          } })
        ]);
        var node = this.chtml || this.parent.chtml;
        var size = this.adaptor.getAttribute(node, "size");
        if (size) {
          this.adaptor.setAttribute(box, "size", size);
        }
        var fontsize = this.adaptor.getStyle(node, "fontSize");
        if (fontsize) {
          this.adaptor.setStyle(box, "fontSize", fontsize);
        }
        this.adaptor.append(this.adaptor.parent(node), box);
        this.adaptor.setStyle(node, "backgroundColor", "#FFEE00");
      };
      CHTMLWrapper2.prototype.html = function(type, def, content) {
        if (def === void 0) {
          def = {};
        }
        if (content === void 0) {
          content = [];
        }
        return this.jax.html(type, def, content);
      };
      CHTMLWrapper2.prototype.text = function(text) {
        return this.jax.text(text);
      };
      CHTMLWrapper2.prototype.char = function(n) {
        return this.font.charSelector(n).substr(1);
      };
      CHTMLWrapper2.kind = "unknown";
      CHTMLWrapper2.autoStyle = true;
      return CHTMLWrapper2;
    }(Wrapper_js_1.CommonWrapper);
    exports.CHTMLWrapper = CHTMLWrapper;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/math.js
var require_math2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/math.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonMathMixin = void 0;
    function CommonMathMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.getWrapWidth = function(_i) {
          return this.parent ? this.getBBox().w : this.metrics.containerWidth / this.jax.pxPerEm;
        };
        return class_1;
      }(Base);
    }
    exports.CommonMathMixin = CommonMathMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/math.js
var require_math3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/math.js"(exports) {
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
    exports.CHTMLmath = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var math_js_1 = require_math2();
    var math_js_2 = require_math();
    var BBox_js_1 = require_BBox();
    var CHTMLmath = function(_super) {
      __extends(CHTMLmath2, _super);
      function CHTMLmath2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmath2.prototype.toCHTML = function(parent) {
        _super.prototype.toCHTML.call(this, parent);
        var chtml = this.chtml;
        var adaptor = this.adaptor;
        var display = this.node.attributes.get("display") === "block";
        if (display) {
          adaptor.setAttribute(chtml, "display", "true");
          adaptor.setAttribute(parent, "display", "true");
          this.handleDisplay(parent);
        } else {
          this.handleInline(parent);
        }
        adaptor.addClass(chtml, "MJX-TEX");
      };
      CHTMLmath2.prototype.handleDisplay = function(parent) {
        var adaptor = this.adaptor;
        var _a = __read(this.getAlignShift(), 2), align = _a[0], shift = _a[1];
        if (align !== "center") {
          adaptor.setAttribute(parent, "justify", align);
        }
        if (this.bbox.pwidth === BBox_js_1.BBox.fullWidth) {
          adaptor.setAttribute(parent, "width", "full");
          if (this.jax.table) {
            var _b = this.jax.table.getOuterBBox(), L = _b.L, w = _b.w, R = _b.R;
            if (align === "right") {
              R = Math.max(R || -shift, -shift);
            } else if (align === "left") {
              L = Math.max(L || shift, shift);
            } else if (align === "center") {
              w += 2 * Math.abs(shift);
            }
            var W = this.em(Math.max(0, L + w + R));
            adaptor.setStyle(parent, "min-width", W);
            adaptor.setStyle(this.jax.table.chtml, "min-width", W);
          }
        } else {
          this.setIndent(this.chtml, align, shift);
        }
      };
      CHTMLmath2.prototype.handleInline = function(parent) {
        var adaptor = this.adaptor;
        var margin = adaptor.getStyle(this.chtml, "margin-right");
        if (margin) {
          adaptor.setStyle(this.chtml, "margin-right", "");
          adaptor.setStyle(parent, "margin-right", margin);
          adaptor.setStyle(parent, "width", "0");
        }
      };
      CHTMLmath2.prototype.setChildPWidths = function(recompute, w, clear) {
        if (w === void 0) {
          w = null;
        }
        if (clear === void 0) {
          clear = true;
        }
        return this.parent ? _super.prototype.setChildPWidths.call(this, recompute, w, clear) : false;
      };
      CHTMLmath2.kind = math_js_2.MmlMath.prototype.kind;
      CHTMLmath2.styles = {
        "mjx-math": {
          "line-height": 0,
          "text-align": "left",
          "text-indent": 0,
          "font-style": "normal",
          "font-weight": "normal",
          "font-size": "100%",
          "font-size-adjust": "none",
          "letter-spacing": "normal",
          "border-collapse": "collapse",
          "word-wrap": "normal",
          "word-spacing": "normal",
          "white-space": "nowrap",
          "direction": "ltr",
          "padding": "1px 0"
        },
        'mjx-container[jax="CHTML"][display="true"]': {
          display: "block",
          "text-align": "center",
          margin: "1em 0"
        },
        'mjx-container[jax="CHTML"][display="true"][width="full"]': {
          display: "flex"
        },
        'mjx-container[jax="CHTML"][display="true"] mjx-math': {
          padding: 0
        },
        'mjx-container[jax="CHTML"][justify="left"]': {
          "text-align": "left"
        },
        'mjx-container[jax="CHTML"][justify="right"]': {
          "text-align": "right"
        }
      };
      return CHTMLmath2;
    }((0, math_js_1.CommonMathMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmath = CHTMLmath;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mi.js
var require_mi2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mi.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonMiMixin = void 0;
    function CommonMiMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.computeBBox = function(bbox, _recompute) {
          if (_recompute === void 0) {
            _recompute = false;
          }
          _super.prototype.computeBBox.call(this, bbox);
          this.copySkewIC(bbox);
        };
        return class_1;
      }(Base);
    }
    exports.CommonMiMixin = CommonMiMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mi.js
var require_mi3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mi.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmi = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mi_js_1 = require_mi2();
    var mi_js_2 = require_mi();
    var CHTMLmi = function(_super) {
      __extends(CHTMLmi2, _super);
      function CHTMLmi2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmi2.kind = mi_js_2.MmlMi.prototype.kind;
      return CHTMLmi2;
    }((0, mi_js_1.CommonMiMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmi = CHTMLmi;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mo.js
var require_mo2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mo.js"(exports) {
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
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
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
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonMoMixin = exports.DirectionVH = void 0;
    var BBox_js_1 = require_BBox();
    var string_js_1 = require_string();
    var FontData_js_1 = require_FontData();
    exports.DirectionVH = (_a = {}, _a[1] = "v", _a[2] = "h", _a);
    function CommonMoMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.size = null;
          _this.isAccent = _this.node.isAccent;
          return _this;
        }
        class_1.prototype.computeBBox = function(bbox, _recompute) {
          if (_recompute === void 0) {
            _recompute = false;
          }
          this.protoBBox(bbox);
          if (this.node.attributes.get("symmetric") && this.stretch.dir !== 2) {
            var d = this.getCenterOffset(bbox);
            bbox.h += d;
            bbox.d -= d;
          }
          if (this.node.getProperty("mathaccent") && (this.stretch.dir === 0 || this.size >= 0)) {
            bbox.w = 0;
          }
        };
        class_1.prototype.protoBBox = function(bbox) {
          var stretchy = this.stretch.dir !== 0;
          if (stretchy && this.size === null) {
            this.getStretchedVariant([0]);
          }
          if (stretchy && this.size < 0)
            return;
          _super.prototype.computeBBox.call(this, bbox);
          this.copySkewIC(bbox);
        };
        class_1.prototype.getAccentOffset = function() {
          var bbox = BBox_js_1.BBox.empty();
          this.protoBBox(bbox);
          return -bbox.w / 2;
        };
        class_1.prototype.getCenterOffset = function(bbox) {
          if (bbox === void 0) {
            bbox = null;
          }
          if (!bbox) {
            bbox = BBox_js_1.BBox.empty();
            _super.prototype.computeBBox.call(this, bbox);
          }
          return (bbox.h + bbox.d) / 2 + this.font.params.axis_height - bbox.h;
        };
        class_1.prototype.getVariant = function() {
          if (this.node.attributes.get("largeop")) {
            this.variant = this.node.attributes.get("displaystyle") ? "-largeop" : "-smallop";
            return;
          }
          if (!this.node.attributes.getExplicit("mathvariant") && this.node.getProperty("pseudoscript") === false) {
            this.variant = "-tex-variant";
            return;
          }
          _super.prototype.getVariant.call(this);
        };
        class_1.prototype.canStretch = function(direction) {
          if (this.stretch.dir !== 0) {
            return this.stretch.dir === direction;
          }
          var attributes = this.node.attributes;
          if (!attributes.get("stretchy"))
            return false;
          var c = this.getText();
          if (Array.from(c).length !== 1)
            return false;
          var delim = this.font.getDelimiter(c.codePointAt(0));
          this.stretch = delim && delim.dir === direction ? delim : FontData_js_1.NOSTRETCH;
          return this.stretch.dir !== 0;
        };
        class_1.prototype.getStretchedVariant = function(WH, exact) {
          var e_1, _a2;
          if (exact === void 0) {
            exact = false;
          }
          if (this.stretch.dir !== 0) {
            var D = this.getWH(WH);
            var min = this.getSize("minsize", 0);
            var max = this.getSize("maxsize", Infinity);
            var mathaccent = this.node.getProperty("mathaccent");
            D = Math.max(min, Math.min(max, D));
            var df = this.font.params.delimiterfactor / 1e3;
            var ds = this.font.params.delimitershortfall;
            var m = min || exact ? D : mathaccent ? Math.min(D / df, D + ds) : Math.max(D * df, D - ds);
            var delim = this.stretch;
            var c = delim.c || this.getText().codePointAt(0);
            var i = 0;
            if (delim.sizes) {
              try {
                for (var _b = __values(delim.sizes), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var d = _c.value;
                  if (d >= m) {
                    if (mathaccent && i) {
                      i--;
                    }
                    this.variant = this.font.getSizeVariant(c, i);
                    this.size = i;
                    if (delim.schar && delim.schar[i]) {
                      this.stretch = __assign(__assign({}, this.stretch), { c: delim.schar[i] });
                    }
                    return;
                  }
                  i++;
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
                } finally {
                  if (e_1) throw e_1.error;
                }
              }
            }
            if (delim.stretch) {
              this.size = -1;
              this.invalidateBBox();
              this.getStretchBBox(WH, this.checkExtendedHeight(D, delim), delim);
            } else {
              this.variant = this.font.getSizeVariant(c, i - 1);
              this.size = i - 1;
            }
          }
        };
        class_1.prototype.getSize = function(name, value) {
          var attributes = this.node.attributes;
          if (attributes.isSet(name)) {
            value = this.length2em(attributes.get(name), 1, 1);
          }
          return value;
        };
        class_1.prototype.getWH = function(WH) {
          if (WH.length === 0)
            return 0;
          if (WH.length === 1)
            return WH[0];
          var _a2 = __read(WH, 2), H = _a2[0], D = _a2[1];
          var a = this.font.params.axis_height;
          return this.node.attributes.get("symmetric") ? 2 * Math.max(H - a, D + a) : H + D;
        };
        class_1.prototype.getStretchBBox = function(WHD, D, C) {
          var _a2;
          if (C.hasOwnProperty("min") && C.min > D) {
            D = C.min;
          }
          var _b = __read(C.HDW, 3), h = _b[0], d = _b[1], w = _b[2];
          if (this.stretch.dir === 1) {
            _a2 = __read(this.getBaseline(WHD, D, C), 2), h = _a2[0], d = _a2[1];
          } else {
            w = D;
          }
          this.bbox.h = h;
          this.bbox.d = d;
          this.bbox.w = w;
        };
        class_1.prototype.getBaseline = function(WHD, HD, C) {
          var hasWHD = WHD.length === 2 && WHD[0] + WHD[1] === HD;
          var symmetric = this.node.attributes.get("symmetric");
          var _a2 = __read(hasWHD ? WHD : [HD, 0], 2), H = _a2[0], D = _a2[1];
          var _b = __read([H + D, 0], 2), h = _b[0], d = _b[1];
          if (symmetric) {
            var a = this.font.params.axis_height;
            if (hasWHD) {
              h = 2 * Math.max(H - a, D + a);
            }
            d = h / 2 - a;
          } else if (hasWHD) {
            d = D;
          } else {
            var _c = __read(C.HDW || [0.75, 0.25], 2), ch = _c[0], cd = _c[1];
            d = cd * (h / (ch + cd));
          }
          return [h - d, d];
        };
        class_1.prototype.checkExtendedHeight = function(D, C) {
          if (C.fullExt) {
            var _a2 = __read(C.fullExt, 2), extSize = _a2[0], endSize = _a2[1];
            var n = Math.ceil(Math.max(0, D - endSize) / extSize);
            D = endSize + n * extSize;
          }
          return D;
        };
        class_1.prototype.remapChars = function(chars) {
          var primes = this.node.getProperty("primes");
          if (primes) {
            return (0, string_js_1.unicodeChars)(primes);
          }
          if (chars.length === 1) {
            var parent_1 = this.node.coreParent().parent;
            var isAccent = this.isAccent && !parent_1.isKind("mrow");
            var map = isAccent ? "accent" : "mo";
            var text = this.font.getRemappedChar(map, chars[0]);
            if (text) {
              chars = this.unicodeChars(text, this.variant);
            }
          }
          return chars;
        };
        return class_1;
      }(Base);
    }
    exports.CommonMoMixin = CommonMoMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mo.js
var require_mo3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mo.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmo = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mo_js_1 = require_mo2();
    var mo_js_2 = require_mo();
    var CHTMLmo = function(_super) {
      __extends(CHTMLmo2, _super);
      function CHTMLmo2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmo2.prototype.toCHTML = function(parent) {
        var e_1, _a;
        var attributes = this.node.attributes;
        var symmetric = attributes.get("symmetric") && this.stretch.dir !== 2;
        var stretchy = this.stretch.dir !== 0;
        if (stretchy && this.size === null) {
          this.getStretchedVariant([]);
        }
        var chtml = this.standardCHTMLnode(parent);
        if (stretchy && this.size < 0) {
          this.stretchHTML(chtml);
        } else {
          if (symmetric || attributes.get("largeop")) {
            var u = this.em(this.getCenterOffset());
            if (u !== "0") {
              this.adaptor.setStyle(chtml, "verticalAlign", u);
            }
          }
          if (this.node.getProperty("mathaccent")) {
            this.adaptor.setStyle(chtml, "width", "0");
            this.adaptor.setStyle(chtml, "margin-left", this.em(this.getAccentOffset()));
          }
          try {
            for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              child.toCHTML(chtml);
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
      };
      CHTMLmo2.prototype.stretchHTML = function(chtml) {
        var c = this.getText().codePointAt(0);
        this.font.delimUsage.add(c);
        this.childNodes[0].markUsed();
        var delim = this.stretch;
        var stretch = delim.stretch;
        var content = [];
        if (stretch[0]) {
          content.push(this.html("mjx-beg", {}, [this.html("mjx-c")]));
        }
        content.push(this.html("mjx-ext", {}, [this.html("mjx-c")]));
        if (stretch.length === 4) {
          content.push(this.html("mjx-mid", {}, [this.html("mjx-c")]), this.html("mjx-ext", {}, [this.html("mjx-c")]));
        }
        if (stretch[2]) {
          content.push(this.html("mjx-end", {}, [this.html("mjx-c")]));
        }
        var styles = {};
        var _a = this.bbox, h = _a.h, d = _a.d, w = _a.w;
        if (delim.dir === 1) {
          content.push(this.html("mjx-mark"));
          styles.height = this.em(h + d);
          styles.verticalAlign = this.em(-d);
        } else {
          styles.width = this.em(w);
        }
        var dir = mo_js_1.DirectionVH[delim.dir];
        var properties = { class: this.char(delim.c || c), style: styles };
        var html = this.html("mjx-stretchy-" + dir, properties, content);
        this.adaptor.append(chtml, html);
      };
      CHTMLmo2.kind = mo_js_2.MmlMo.prototype.kind;
      CHTMLmo2.styles = {
        "mjx-stretchy-h": {
          display: "inline-table",
          width: "100%"
        },
        "mjx-stretchy-h > *": {
          display: "table-cell",
          width: 0
        },
        "mjx-stretchy-h > * > mjx-c": {
          display: "inline-block",
          transform: "scalex(1.0000001)"
        },
        "mjx-stretchy-h > * > mjx-c::before": {
          display: "inline-block",
          width: "initial"
        },
        "mjx-stretchy-h > mjx-ext": {
          "/* IE */ overflow": "hidden",
          "/* others */ overflow": "clip visible",
          width: "100%"
        },
        "mjx-stretchy-h > mjx-ext > mjx-c::before": {
          transform: "scalex(500)"
        },
        "mjx-stretchy-h > mjx-ext > mjx-c": {
          width: 0
        },
        "mjx-stretchy-h > mjx-beg > mjx-c": {
          "margin-right": "-.1em"
        },
        "mjx-stretchy-h > mjx-end > mjx-c": {
          "margin-left": "-.1em"
        },
        "mjx-stretchy-v": {
          display: "inline-block"
        },
        "mjx-stretchy-v > *": {
          display: "block"
        },
        "mjx-stretchy-v > mjx-beg": {
          height: 0
        },
        "mjx-stretchy-v > mjx-end > mjx-c": {
          display: "block"
        },
        "mjx-stretchy-v > * > mjx-c": {
          transform: "scaley(1.0000001)",
          "transform-origin": "left center",
          overflow: "hidden"
        },
        "mjx-stretchy-v > mjx-ext": {
          display: "block",
          height: "100%",
          "box-sizing": "border-box",
          border: "0px solid transparent",
          "/* IE */ overflow": "hidden",
          "/* others */ overflow": "visible clip"
        },
        "mjx-stretchy-v > mjx-ext > mjx-c::before": {
          width: "initial",
          "box-sizing": "border-box"
        },
        "mjx-stretchy-v > mjx-ext > mjx-c": {
          transform: "scaleY(500) translateY(.075em)",
          overflow: "visible"
        },
        "mjx-mark": {
          display: "inline-block",
          height: "0px"
        }
      };
      return CHTMLmo2;
    }((0, mo_js_1.CommonMoMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmo = CHTMLmo;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mn.js
var require_mn2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mn.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonMnMixin = void 0;
    function CommonMnMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.remapChars = function(chars) {
          if (chars.length) {
            var text = this.font.getRemappedChar("mn", chars[0]);
            if (text) {
              var c = this.unicodeChars(text, this.variant);
              if (c.length === 1) {
                chars[0] = c[0];
              } else {
                chars = c.concat(chars.slice(1));
              }
            }
          }
          return chars;
        };
        return class_1;
      }(Base);
    }
    exports.CommonMnMixin = CommonMnMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mn.js
var require_mn3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mn.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmn = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mn_js_1 = require_mn2();
    var mn_js_2 = require_mn();
    var CHTMLmn = function(_super) {
      __extends(CHTMLmn2, _super);
      function CHTMLmn2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmn2.kind = mn_js_2.MmlMn.prototype.kind;
      return CHTMLmn2;
    }((0, mn_js_1.CommonMnMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmn = CHTMLmn;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/ms.js
var require_ms2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/ms.js"(exports) {
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
    exports.CommonMsMixin = void 0;
    function CommonMsMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          var attributes = _this.node.attributes;
          var quotes = attributes.getList("lquote", "rquote");
          if (_this.variant !== "monospace") {
            if (!attributes.isSet("lquote") && quotes.lquote === '"')
              quotes.lquote = "“";
            if (!attributes.isSet("rquote") && quotes.rquote === '"')
              quotes.rquote = "”";
          }
          _this.childNodes.unshift(_this.createText(quotes.lquote));
          _this.childNodes.push(_this.createText(quotes.rquote));
          return _this;
        }
        class_1.prototype.createText = function(text) {
          var node = this.wrap(this.mmlText(text));
          node.parent = this;
          return node;
        };
        return class_1;
      }(Base);
    }
    exports.CommonMsMixin = CommonMsMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/ms.js
var require_ms3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/ms.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLms = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var ms_js_1 = require_ms2();
    var ms_js_2 = require_ms();
    var CHTMLms = function(_super) {
      __extends(CHTMLms2, _super);
      function CHTMLms2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLms2.kind = ms_js_2.MmlMs.prototype.kind;
      return CHTMLms2;
    }((0, ms_js_1.CommonMsMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLms = CHTMLms;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mtext.js
var require_mtext2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mtext.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonMtextMixin = void 0;
    function CommonMtextMixin(Base) {
      var _a;
      return _a = function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.getVariant = function() {
          var options = this.jax.options;
          var data = this.jax.math.outputData;
          var merror = (!!data.merrorFamily || !!options.merrorFont) && this.node.Parent.isKind("merror");
          if (!!data.mtextFamily || !!options.mtextFont || merror) {
            var variant = this.node.attributes.get("mathvariant");
            var font = this.constructor.INHERITFONTS[variant] || this.jax.font.getCssFont(variant);
            var family = font[0] || (merror ? data.merrorFamily || options.merrorFont : data.mtextFamily || options.mtextFont);
            this.variant = this.explicitVariant(family, font[2] ? "bold" : "", font[1] ? "italic" : "");
            return;
          }
          _super.prototype.getVariant.call(this);
        };
        return class_1;
      }(Base), _a.INHERITFONTS = {
        normal: ["", false, false],
        bold: ["", false, true],
        italic: ["", true, false],
        "bold-italic": ["", true, true]
      }, _a;
    }
    exports.CommonMtextMixin = CommonMtextMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mtext.js
var require_mtext3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mtext.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmtext = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mtext_js_1 = require_mtext2();
    var mtext_js_2 = require_mtext();
    var CHTMLmtext = function(_super) {
      __extends(CHTMLmtext2, _super);
      function CHTMLmtext2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmtext2.kind = mtext_js_2.MmlMtext.prototype.kind;
      return CHTMLmtext2;
    }((0, mtext_js_1.CommonMtextMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmtext = CHTMLmtext;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mspace.js
var require_mspace2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mspace.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonMspaceMixin = void 0;
    function CommonMspaceMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.computeBBox = function(bbox, _recompute) {
          if (_recompute === void 0) {
            _recompute = false;
          }
          var attributes = this.node.attributes;
          bbox.w = this.length2em(attributes.get("width"), 0);
          bbox.h = this.length2em(attributes.get("height"), 0);
          bbox.d = this.length2em(attributes.get("depth"), 0);
        };
        class_1.prototype.handleVariant = function() {
        };
        return class_1;
      }(Base);
    }
    exports.CommonMspaceMixin = CommonMspaceMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mspace.js
var require_mspace3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mspace.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmspace = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mspace_js_1 = require_mspace2();
    var mspace_js_2 = require_mspace();
    var CHTMLmspace = function(_super) {
      __extends(CHTMLmspace2, _super);
      function CHTMLmspace2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmspace2.prototype.toCHTML = function(parent) {
        var chtml = this.standardCHTMLnode(parent);
        var _a = this.getBBox(), w = _a.w, h = _a.h, d = _a.d;
        if (w < 0) {
          this.adaptor.setStyle(chtml, "marginRight", this.em(w));
          w = 0;
        }
        if (w) {
          this.adaptor.setStyle(chtml, "width", this.em(w));
        }
        h = Math.max(0, h + d);
        if (h) {
          this.adaptor.setStyle(chtml, "height", this.em(Math.max(0, h)));
        }
        if (d) {
          this.adaptor.setStyle(chtml, "verticalAlign", this.em(-d));
        }
      };
      CHTMLmspace2.kind = mspace_js_2.MmlMspace.prototype.kind;
      return CHTMLmspace2;
    }((0, mspace_js_1.CommonMspaceMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmspace = CHTMLmspace;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mpadded.js
var require_mpadded2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mpadded.js"(exports) {
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
    exports.CommonMpaddedMixin = void 0;
    function CommonMpaddedMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.getDimens = function() {
          var values = this.node.attributes.getList("width", "height", "depth", "lspace", "voffset");
          var bbox = this.childNodes[0].getBBox();
          var w = bbox.w, h = bbox.h, d = bbox.d;
          var W = w, H = h, D = d, x = 0, y = 0, dx = 0;
          if (values.width !== "")
            w = this.dimen(values.width, bbox, "w", 0);
          if (values.height !== "")
            h = this.dimen(values.height, bbox, "h", 0);
          if (values.depth !== "")
            d = this.dimen(values.depth, bbox, "d", 0);
          if (values.voffset !== "")
            y = this.dimen(values.voffset, bbox);
          if (values.lspace !== "")
            x = this.dimen(values.lspace, bbox);
          var align = this.node.attributes.get("data-align");
          if (align) {
            dx = this.getAlignX(w, bbox, align);
          }
          return [H, D, W, h - H, d - D, w - W, x, y, dx];
        };
        class_1.prototype.dimen = function(length, bbox, d, m) {
          if (d === void 0) {
            d = "";
          }
          if (m === void 0) {
            m = null;
          }
          length = String(length);
          var match = length.match(/width|height|depth/);
          var size = match ? bbox[match[0].charAt(0)] : d ? bbox[d] : 0;
          var dimen = this.length2em(length, size) || 0;
          if (length.match(/^[-+]/) && d) {
            dimen += size;
          }
          if (m != null) {
            dimen = Math.max(m, dimen);
          }
          return dimen;
        };
        class_1.prototype.computeBBox = function(bbox, recompute) {
          if (recompute === void 0) {
            recompute = false;
          }
          var _a = __read(this.getDimens(), 6), H = _a[0], D = _a[1], W = _a[2], dh = _a[3], dd = _a[4], dw = _a[5];
          bbox.w = W + dw;
          bbox.h = H + dh;
          bbox.d = D + dd;
          this.setChildPWidths(recompute, bbox.w);
        };
        class_1.prototype.getWrapWidth = function(_i) {
          return this.getBBox().w;
        };
        class_1.prototype.getChildAlign = function(_i) {
          return this.node.attributes.get("data-align") || "left";
        };
        return class_1;
      }(Base);
    }
    exports.CommonMpaddedMixin = CommonMpaddedMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mpadded.js
var require_mpadded3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mpadded.js"(exports) {
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
    exports.CHTMLmpadded = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mpadded_js_1 = require_mpadded2();
    var mpadded_js_2 = require_mpadded();
    var CHTMLmpadded = function(_super) {
      __extends(CHTMLmpadded2, _super);
      function CHTMLmpadded2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmpadded2.prototype.toCHTML = function(parent) {
        var e_1, _a;
        var chtml = this.standardCHTMLnode(parent);
        var content = [];
        var style = {};
        var _b = __read(this.getDimens(), 9), W = _b[2], dh = _b[3], dd = _b[4], dw = _b[5], x = _b[6], y = _b[7], dx = _b[8];
        if (dw) {
          style.width = this.em(W + dw);
        }
        if (dh || dd) {
          style.margin = this.em(dh) + " 0 " + this.em(dd);
        }
        if (x + dx || y) {
          style.position = "relative";
          var rbox = this.html("mjx-rbox", {
            style: { left: this.em(x + dx), top: this.em(-y), "max-width": style.width }
          });
          if (x + dx && this.childNodes[0].getBBox().pwidth) {
            this.adaptor.setAttribute(rbox, "width", "full");
            this.adaptor.setStyle(rbox, "left", this.em(x));
          }
          content.push(rbox);
        }
        chtml = this.adaptor.append(chtml, this.html("mjx-block", { style }, content));
        try {
          for (var _c = __values(this.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
            var child = _d.value;
            child.toCHTML(content[0] || chtml);
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
      };
      CHTMLmpadded2.kind = mpadded_js_2.MmlMpadded.prototype.kind;
      CHTMLmpadded2.styles = {
        "mjx-mpadded": {
          display: "inline-block"
        },
        "mjx-rbox": {
          display: "inline-block",
          position: "relative"
        }
      };
      return CHTMLmpadded2;
    }((0, mpadded_js_1.CommonMpaddedMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmpadded = CHTMLmpadded;
  }
});

// node_modules/mathjax-full/js/output/common/Notation.js
var require_Notation = __commonJS({
  "node_modules/mathjax-full/js/output/common/Notation.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonArrow = exports.CommonDiagonalArrow = exports.CommonDiagonalStrike = exports.CommonBorder2 = exports.CommonBorder = exports.arrowBBox = exports.diagonalArrowDef = exports.arrowDef = exports.arrowBBoxW = exports.arrowBBoxHD = exports.arrowHead = exports.fullBorder = exports.fullPadding = exports.fullBBox = exports.sideNames = exports.sideIndex = exports.SOLID = exports.PADDING = exports.THICKNESS = exports.ARROWY = exports.ARROWDX = exports.ARROWX = void 0;
    exports.ARROWX = 4, exports.ARROWDX = 1, exports.ARROWY = 2;
    exports.THICKNESS = 0.067;
    exports.PADDING = 0.2;
    exports.SOLID = exports.THICKNESS + "em solid";
    exports.sideIndex = { top: 0, right: 1, bottom: 2, left: 3 };
    exports.sideNames = Object.keys(exports.sideIndex);
    exports.fullBBox = function(node) {
      return new Array(4).fill(node.thickness + node.padding);
    };
    exports.fullPadding = function(node) {
      return new Array(4).fill(node.padding);
    };
    exports.fullBorder = function(node) {
      return new Array(4).fill(node.thickness);
    };
    var arrowHead = function(node) {
      return Math.max(node.padding, node.thickness * (node.arrowhead.x + node.arrowhead.dx + 1));
    };
    exports.arrowHead = arrowHead;
    var arrowBBoxHD = function(node, TRBL) {
      if (node.childNodes[0]) {
        var _a = node.childNodes[0].getBBox(), h = _a.h, d = _a.d;
        TRBL[0] = TRBL[2] = Math.max(0, node.thickness * node.arrowhead.y - (h + d) / 2);
      }
      return TRBL;
    };
    exports.arrowBBoxHD = arrowBBoxHD;
    var arrowBBoxW = function(node, TRBL) {
      if (node.childNodes[0]) {
        var w = node.childNodes[0].getBBox().w;
        TRBL[1] = TRBL[3] = Math.max(0, node.thickness * node.arrowhead.y - w / 2);
      }
      return TRBL;
    };
    exports.arrowBBoxW = arrowBBoxW;
    exports.arrowDef = {
      up: [-Math.PI / 2, false, true, "verticalstrike"],
      down: [Math.PI / 2, false, true, "verticakstrike"],
      right: [0, false, false, "horizontalstrike"],
      left: [Math.PI, false, false, "horizontalstrike"],
      updown: [Math.PI / 2, true, true, "verticalstrike uparrow downarrow"],
      leftright: [0, true, false, "horizontalstrike leftarrow rightarrow"]
    };
    exports.diagonalArrowDef = {
      updiagonal: [-1, 0, false, "updiagonalstrike northeastarrow"],
      northeast: [-1, 0, false, "updiagonalstrike updiagonalarrow"],
      southeast: [1, 0, false, "downdiagonalstrike"],
      northwest: [1, Math.PI, false, "downdiagonalstrike"],
      southwest: [-1, Math.PI, false, "updiagonalstrike"],
      northeastsouthwest: [-1, 0, true, "updiagonalstrike northeastarrow updiagonalarrow southwestarrow"],
      northwestsoutheast: [1, 0, true, "downdiagonalstrike northwestarrow southeastarrow"]
    };
    exports.arrowBBox = {
      up: function(node) {
        return (0, exports.arrowBBoxW)(node, [(0, exports.arrowHead)(node), 0, node.padding, 0]);
      },
      down: function(node) {
        return (0, exports.arrowBBoxW)(node, [node.padding, 0, (0, exports.arrowHead)(node), 0]);
      },
      right: function(node) {
        return (0, exports.arrowBBoxHD)(node, [0, (0, exports.arrowHead)(node), 0, node.padding]);
      },
      left: function(node) {
        return (0, exports.arrowBBoxHD)(node, [0, node.padding, 0, (0, exports.arrowHead)(node)]);
      },
      updown: function(node) {
        return (0, exports.arrowBBoxW)(node, [(0, exports.arrowHead)(node), 0, (0, exports.arrowHead)(node), 0]);
      },
      leftright: function(node) {
        return (0, exports.arrowBBoxHD)(node, [0, (0, exports.arrowHead)(node), 0, (0, exports.arrowHead)(node)]);
      }
    };
    var CommonBorder = function(render) {
      return function(side) {
        var i = exports.sideIndex[side];
        return [side, {
          renderer: render,
          bbox: function(node) {
            var bbox = [0, 0, 0, 0];
            bbox[i] = node.thickness + node.padding;
            return bbox;
          },
          border: function(node) {
            var bbox = [0, 0, 0, 0];
            bbox[i] = node.thickness;
            return bbox;
          }
        }];
      };
    };
    exports.CommonBorder = CommonBorder;
    var CommonBorder2 = function(render) {
      return function(name, side1, side2) {
        var i1 = exports.sideIndex[side1];
        var i2 = exports.sideIndex[side2];
        return [name, {
          renderer: render,
          bbox: function(node) {
            var t = node.thickness + node.padding;
            var bbox = [0, 0, 0, 0];
            bbox[i1] = bbox[i2] = t;
            return bbox;
          },
          border: function(node) {
            var bbox = [0, 0, 0, 0];
            bbox[i1] = bbox[i2] = node.thickness;
            return bbox;
          },
          remove: side1 + " " + side2
        }];
      };
    };
    exports.CommonBorder2 = CommonBorder2;
    var CommonDiagonalStrike = function(render) {
      return function(name) {
        var cname = "mjx-" + name.charAt(0) + "strike";
        return [name + "diagonalstrike", {
          renderer: render(cname),
          bbox: exports.fullBBox
        }];
      };
    };
    exports.CommonDiagonalStrike = CommonDiagonalStrike;
    var CommonDiagonalArrow = function(render) {
      return function(name) {
        var _a = __read(exports.diagonalArrowDef[name], 4), c = _a[0], pi = _a[1], double = _a[2], remove = _a[3];
        return [name + "arrow", {
          renderer: function(node, _child) {
            var _a2 = __read(node.arrowAW(), 2), a = _a2[0], W = _a2[1];
            var arrow = node.arrow(W, c * (a - pi), double);
            render(node, arrow);
          },
          bbox: function(node) {
            var _a2 = node.arrowData(), a = _a2.a, x = _a2.x, y = _a2.y;
            var _b = __read([node.arrowhead.x, node.arrowhead.y, node.arrowhead.dx], 3), ax = _b[0], ay = _b[1], adx = _b[2];
            var _c = __read(node.getArgMod(ax + adx, ay), 2), b = _c[0], ar = _c[1];
            var dy = y + (b > a ? node.thickness * ar * Math.sin(b - a) : 0);
            var dx = x + (b > Math.PI / 2 - a ? node.thickness * ar * Math.sin(b + a - Math.PI / 2) : 0);
            return [dy, dx, dy, dx];
          },
          remove
        }];
      };
    };
    exports.CommonDiagonalArrow = CommonDiagonalArrow;
    var CommonArrow = function(render) {
      return function(name) {
        var _a = __read(exports.arrowDef[name], 4), angle = _a[0], double = _a[1], isVertical = _a[2], remove = _a[3];
        return [name + "arrow", {
          renderer: function(node, _child) {
            var _a2 = node.getBBox(), w = _a2.w, h = _a2.h, d = _a2.d;
            var _b = __read(isVertical ? [h + d, "X"] : [w, "Y"], 2), W = _b[0], offset = _b[1];
            var dd = node.getOffset(offset);
            var arrow = node.arrow(W, angle, double, offset, dd);
            render(node, arrow);
          },
          bbox: exports.arrowBBox[name],
          remove
        }];
      };
    };
    exports.CommonArrow = CommonArrow;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/menclose.js
var require_menclose2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/menclose.js"(exports) {
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
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
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
    exports.CommonMencloseMixin = void 0;
    var Notation = __importStar(require_Notation());
    var string_js_1 = require_string();
    function CommonMencloseMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.notations = {};
          _this.renderChild = null;
          _this.msqrt = null;
          _this.padding = Notation.PADDING;
          _this.thickness = Notation.THICKNESS;
          _this.arrowhead = { x: Notation.ARROWX, y: Notation.ARROWY, dx: Notation.ARROWDX };
          _this.TRBL = [0, 0, 0, 0];
          _this.getParameters();
          _this.getNotations();
          _this.removeRedundantNotations();
          _this.initializeNotations();
          _this.TRBL = _this.getBBoxExtenders();
          return _this;
        }
        class_1.prototype.getParameters = function() {
          var attributes = this.node.attributes;
          var padding = attributes.get("data-padding");
          if (padding !== void 0) {
            this.padding = this.length2em(padding, Notation.PADDING);
          }
          var thickness = attributes.get("data-thickness");
          if (thickness !== void 0) {
            this.thickness = this.length2em(thickness, Notation.THICKNESS);
          }
          var arrowhead = attributes.get("data-arrowhead");
          if (arrowhead !== void 0) {
            var _b = __read((0, string_js_1.split)(arrowhead), 3), x = _b[0], y = _b[1], dx = _b[2];
            this.arrowhead = {
              x: x ? parseFloat(x) : Notation.ARROWX,
              y: y ? parseFloat(y) : Notation.ARROWY,
              dx: dx ? parseFloat(dx) : Notation.ARROWDX
            };
          }
        };
        class_1.prototype.getNotations = function() {
          var e_1, _b;
          var Notations = this.constructor.notations;
          try {
            for (var _c = __values((0, string_js_1.split)(this.node.attributes.get("notation"))), _d = _c.next(); !_d.done; _d = _c.next()) {
              var name_1 = _d.value;
              var notation = Notations.get(name_1);
              if (notation) {
                this.notations[name_1] = notation;
                if (notation.renderChild) {
                  this.renderChild = notation.renderer;
                }
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        };
        class_1.prototype.removeRedundantNotations = function() {
          var e_2, _b, e_3, _c;
          try {
            for (var _d = __values(Object.keys(this.notations)), _e = _d.next(); !_e.done; _e = _d.next()) {
              var name_2 = _e.value;
              if (this.notations[name_2]) {
                var remove = this.notations[name_2].remove || "";
                try {
                  for (var _f = (e_3 = void 0, __values(remove.split(/ /))), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var notation = _g.value;
                    delete this.notations[notation];
                  }
                } catch (e_3_1) {
                  e_3 = { error: e_3_1 };
                } finally {
                  try {
                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                  } finally {
                    if (e_3) throw e_3.error;
                  }
                }
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        };
        class_1.prototype.initializeNotations = function() {
          var e_4, _b;
          try {
            for (var _c = __values(Object.keys(this.notations)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var name_3 = _d.value;
              var init = this.notations[name_3].init;
              init && init(this);
            }
          } catch (e_4_1) {
            e_4 = { error: e_4_1 };
          } finally {
            try {
              if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            } finally {
              if (e_4) throw e_4.error;
            }
          }
        };
        class_1.prototype.computeBBox = function(bbox, recompute) {
          if (recompute === void 0) {
            recompute = false;
          }
          var _b = __read(this.TRBL, 4), T = _b[0], R = _b[1], B = _b[2], L = _b[3];
          var child = this.childNodes[0].getBBox();
          bbox.combine(child, L, 0);
          bbox.h += T;
          bbox.d += B;
          bbox.w += R;
          this.setChildPWidths(recompute);
        };
        class_1.prototype.getBBoxExtenders = function() {
          var e_5, _b;
          var TRBL = [0, 0, 0, 0];
          try {
            for (var _c = __values(Object.keys(this.notations)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var name_4 = _d.value;
              this.maximizeEntries(TRBL, this.notations[name_4].bbox(this));
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
          return TRBL;
        };
        class_1.prototype.getPadding = function() {
          var e_6, _b;
          var _this = this;
          var BTRBL = [0, 0, 0, 0];
          try {
            for (var _c = __values(Object.keys(this.notations)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var name_5 = _d.value;
              var border = this.notations[name_5].border;
              if (border) {
                this.maximizeEntries(BTRBL, border(this));
              }
            }
          } catch (e_6_1) {
            e_6 = { error: e_6_1 };
          } finally {
            try {
              if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            } finally {
              if (e_6) throw e_6.error;
            }
          }
          return [0, 1, 2, 3].map(function(i) {
            return _this.TRBL[i] - BTRBL[i];
          });
        };
        class_1.prototype.maximizeEntries = function(X, Y) {
          for (var i = 0; i < X.length; i++) {
            if (X[i] < Y[i]) {
              X[i] = Y[i];
            }
          }
        };
        class_1.prototype.getOffset = function(direction) {
          var _b = __read(this.TRBL, 4), T = _b[0], R = _b[1], B = _b[2], L = _b[3];
          var d = (direction === "X" ? R - L : B - T) / 2;
          return Math.abs(d) > 1e-3 ? d : 0;
        };
        class_1.prototype.getArgMod = function(w, h) {
          return [Math.atan2(h, w), Math.sqrt(w * w + h * h)];
        };
        class_1.prototype.arrow = function(_w, _a, _double, _offset, _dist) {
          if (_offset === void 0) {
            _offset = "";
          }
          if (_dist === void 0) {
            _dist = 0;
          }
          return null;
        };
        class_1.prototype.arrowData = function() {
          var _b = __read([this.padding, this.thickness], 2), p = _b[0], t = _b[1];
          var r = t * (this.arrowhead.x + Math.max(1, this.arrowhead.dx));
          var _c = this.childNodes[0].getBBox(), h = _c.h, d = _c.d, w = _c.w;
          var H = h + d;
          var R = Math.sqrt(H * H + w * w);
          var x = Math.max(p, r * w / R);
          var y = Math.max(p, r * H / R);
          var _d = __read(this.getArgMod(w + 2 * x, H + 2 * y), 2), a = _d[0], W = _d[1];
          return { a, W, x, y };
        };
        class_1.prototype.arrowAW = function() {
          var _b = this.childNodes[0].getBBox(), h = _b.h, d = _b.d, w = _b.w;
          var _c = __read(this.TRBL, 4), T = _c[0], R = _c[1], B = _c[2], L = _c[3];
          return this.getArgMod(L + w + R, T + h + d + B);
        };
        class_1.prototype.createMsqrt = function(child) {
          var mmlFactory = this.node.factory;
          var mml = mmlFactory.create("msqrt");
          mml.inheritAttributesFrom(this.node);
          mml.childNodes[0] = child.node;
          var node = this.wrap(mml);
          node.parent = this;
          return node;
        };
        class_1.prototype.sqrtTRBL = function() {
          var bbox = this.msqrt.getBBox();
          var cbox = this.msqrt.childNodes[0].getBBox();
          return [bbox.h - cbox.h, 0, bbox.d - cbox.d, bbox.w - cbox.w];
        };
        return class_1;
      }(Base);
    }
    exports.CommonMencloseMixin = CommonMencloseMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Notation.js
var require_Notation2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Notation.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
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
    exports.Arrow = exports.DiagonalArrow = exports.DiagonalStrike = exports.Border2 = exports.Border = exports.RenderElement = void 0;
    var Notation = __importStar(require_Notation());
    __exportStar(require_Notation(), exports);
    var RenderElement = function(name, offset) {
      if (offset === void 0) {
        offset = "";
      }
      return function(node, _child) {
        var shape = node.adjustBorder(node.html("mjx-" + name));
        if (offset) {
          var d = node.getOffset(offset);
          if (node.thickness !== Notation.THICKNESS || d) {
            var transform = "translate".concat(offset, "(").concat(node.em(node.thickness / 2 - d), ")");
            node.adaptor.setStyle(shape, "transform", transform);
          }
        }
        node.adaptor.append(node.chtml, shape);
      };
    };
    exports.RenderElement = RenderElement;
    var Border = function(side) {
      return Notation.CommonBorder(function(node, child) {
        node.adaptor.setStyle(child, "border-" + side, node.em(node.thickness) + " solid");
      })(side);
    };
    exports.Border = Border;
    var Border2 = function(name, side1, side2) {
      return Notation.CommonBorder2(function(node, child) {
        var border = node.em(node.thickness) + " solid";
        node.adaptor.setStyle(child, "border-" + side1, border);
        node.adaptor.setStyle(child, "border-" + side2, border);
      })(name, side1, side2);
    };
    exports.Border2 = Border2;
    var DiagonalStrike = function(name, neg) {
      return Notation.CommonDiagonalStrike(function(cname) {
        return function(node, _child) {
          var _a = node.getBBox(), w = _a.w, h = _a.h, d = _a.d;
          var _b = __read(node.getArgMod(w, h + d), 2), a = _b[0], W = _b[1];
          var t = neg * node.thickness / 2;
          var strike = node.adjustBorder(node.html(cname, { style: {
            width: node.em(W),
            transform: "rotate(" + node.fixed(-neg * a) + "rad) translateY(" + t + "em)"
          } }));
          node.adaptor.append(node.chtml, strike);
        };
      })(name);
    };
    exports.DiagonalStrike = DiagonalStrike;
    var DiagonalArrow = function(name) {
      return Notation.CommonDiagonalArrow(function(node, arrow) {
        node.adaptor.append(node.chtml, arrow);
      })(name);
    };
    exports.DiagonalArrow = DiagonalArrow;
    var Arrow = function(name) {
      return Notation.CommonArrow(function(node, arrow) {
        node.adaptor.append(node.chtml, arrow);
      })(name);
    };
    exports.Arrow = Arrow;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/menclose.js
var require_menclose3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/menclose.js"(exports) {
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
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
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
    exports.CHTMLmenclose = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var menclose_js_1 = require_menclose2();
    var Notation = __importStar(require_Notation2());
    var menclose_js_2 = require_menclose();
    var lengths_js_1 = require_lengths();
    function Angle(x, y) {
      return Math.atan2(x, y).toFixed(3).replace(/\.?0+$/, "");
    }
    var ANGLE = Angle(Notation.ARROWDX, Notation.ARROWY);
    var CHTMLmenclose = function(_super) {
      __extends(CHTMLmenclose2, _super);
      function CHTMLmenclose2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmenclose2.prototype.toCHTML = function(parent) {
        var e_1, _a, e_2, _b;
        var adaptor = this.adaptor;
        var chtml = this.standardCHTMLnode(parent);
        var block = adaptor.append(chtml, this.html("mjx-box"));
        if (this.renderChild) {
          this.renderChild(this, block);
        } else {
          this.childNodes[0].toCHTML(block);
        }
        try {
          for (var _c = __values(Object.keys(this.notations)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var name_1 = _d.value;
            var notation = this.notations[name_1];
            !notation.renderChild && notation.renderer(this, block);
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
        var pbox = this.getPadding();
        try {
          for (var _e = __values(Notation.sideNames), _f = _e.next(); !_f.done; _f = _e.next()) {
            var name_2 = _f.value;
            var i = Notation.sideIndex[name_2];
            pbox[i] > 0 && adaptor.setStyle(block, "padding-" + name_2, this.em(pbox[i]));
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      };
      CHTMLmenclose2.prototype.arrow = function(w, a, double, offset, dist) {
        if (offset === void 0) {
          offset = "";
        }
        if (dist === void 0) {
          dist = 0;
        }
        var W = this.getBBox().w;
        var style = { width: this.em(w) };
        if (W !== w) {
          style.left = this.em((W - w) / 2);
        }
        if (a) {
          style.transform = "rotate(" + this.fixed(a) + "rad)";
        }
        var arrow = this.html("mjx-arrow", { style }, [
          this.html("mjx-aline"),
          this.html("mjx-rthead"),
          this.html("mjx-rbhead")
        ]);
        if (double) {
          this.adaptor.append(arrow, this.html("mjx-lthead"));
          this.adaptor.append(arrow, this.html("mjx-lbhead"));
          this.adaptor.setAttribute(arrow, "double", "true");
        }
        this.adjustArrow(arrow, double);
        this.moveArrow(arrow, offset, dist);
        return arrow;
      };
      CHTMLmenclose2.prototype.adjustArrow = function(arrow, double) {
        var _this = this;
        var t = this.thickness;
        var head = this.arrowhead;
        if (head.x === Notation.ARROWX && head.y === Notation.ARROWY && head.dx === Notation.ARROWDX && t === Notation.THICKNESS)
          return;
        var _a = __read([t * head.x, t * head.y].map(function(x2) {
          return _this.em(x2);
        }), 2), x = _a[0], y = _a[1];
        var a = Angle(head.dx, head.y);
        var _b = __read(this.adaptor.childNodes(arrow), 5), line = _b[0], rthead = _b[1], rbhead = _b[2], lthead = _b[3], lbhead = _b[4];
        this.adjustHead(rthead, [y, "0", "1px", x], a);
        this.adjustHead(rbhead, ["1px", "0", y, x], "-" + a);
        this.adjustHead(lthead, [y, x, "1px", "0"], "-" + a);
        this.adjustHead(lbhead, ["1px", x, y, "0"], a);
        this.adjustLine(line, t, head.x, double);
      };
      CHTMLmenclose2.prototype.adjustHead = function(head, border, a) {
        if (head) {
          this.adaptor.setStyle(head, "border-width", border.join(" "));
          this.adaptor.setStyle(head, "transform", "skewX(" + a + "rad)");
        }
      };
      CHTMLmenclose2.prototype.adjustLine = function(line, t, x, double) {
        this.adaptor.setStyle(line, "borderTop", this.em(t) + " solid");
        this.adaptor.setStyle(line, "top", this.em(-t / 2));
        this.adaptor.setStyle(line, "right", this.em(t * (x - 1)));
        if (double) {
          this.adaptor.setStyle(line, "left", this.em(t * (x - 1)));
        }
      };
      CHTMLmenclose2.prototype.moveArrow = function(arrow, offset, d) {
        if (!d)
          return;
        var transform = this.adaptor.getStyle(arrow, "transform");
        this.adaptor.setStyle(arrow, "transform", "translate".concat(offset, "(").concat(this.em(-d), ")").concat(transform ? " " + transform : ""));
      };
      CHTMLmenclose2.prototype.adjustBorder = function(node) {
        if (this.thickness !== Notation.THICKNESS) {
          this.adaptor.setStyle(node, "borderWidth", this.em(this.thickness));
        }
        return node;
      };
      CHTMLmenclose2.prototype.adjustThickness = function(shape) {
        if (this.thickness !== Notation.THICKNESS) {
          this.adaptor.setStyle(shape, "strokeWidth", this.fixed(this.thickness));
        }
        return shape;
      };
      CHTMLmenclose2.prototype.fixed = function(m, n) {
        if (n === void 0) {
          n = 3;
        }
        if (Math.abs(m) < 6e-4) {
          return "0";
        }
        return m.toFixed(n).replace(/\.?0+$/, "");
      };
      CHTMLmenclose2.prototype.em = function(m) {
        return _super.prototype.em.call(this, m);
      };
      CHTMLmenclose2.kind = menclose_js_2.MmlMenclose.prototype.kind;
      CHTMLmenclose2.styles = {
        "mjx-menclose": {
          position: "relative"
        },
        "mjx-menclose > mjx-dstrike": {
          display: "inline-block",
          left: 0,
          top: 0,
          position: "absolute",
          "border-top": Notation.SOLID,
          "transform-origin": "top left"
        },
        "mjx-menclose > mjx-ustrike": {
          display: "inline-block",
          left: 0,
          bottom: 0,
          position: "absolute",
          "border-top": Notation.SOLID,
          "transform-origin": "bottom left"
        },
        "mjx-menclose > mjx-hstrike": {
          "border-top": Notation.SOLID,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "50%",
          transform: "translateY(" + (0, lengths_js_1.em)(Notation.THICKNESS / 2) + ")"
        },
        "mjx-menclose > mjx-vstrike": {
          "border-left": Notation.SOLID,
          position: "absolute",
          top: 0,
          bottom: 0,
          right: "50%",
          transform: "translateX(" + (0, lengths_js_1.em)(Notation.THICKNESS / 2) + ")"
        },
        "mjx-menclose > mjx-rbox": {
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          "border": Notation.SOLID,
          "border-radius": (0, lengths_js_1.em)(Notation.THICKNESS + Notation.PADDING)
        },
        "mjx-menclose > mjx-cbox": {
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          "border": Notation.SOLID,
          "border-radius": "50%"
        },
        "mjx-menclose > mjx-arrow": {
          position: "absolute",
          left: 0,
          bottom: "50%",
          height: 0,
          width: 0
        },
        "mjx-menclose > mjx-arrow > *": {
          display: "block",
          position: "absolute",
          "transform-origin": "bottom",
          "border-left": (0, lengths_js_1.em)(Notation.THICKNESS * Notation.ARROWX) + " solid",
          "border-right": 0,
          "box-sizing": "border-box"
        },
        "mjx-menclose > mjx-arrow > mjx-aline": {
          left: 0,
          top: (0, lengths_js_1.em)(-Notation.THICKNESS / 2),
          right: (0, lengths_js_1.em)(Notation.THICKNESS * (Notation.ARROWX - 1)),
          height: 0,
          "border-top": (0, lengths_js_1.em)(Notation.THICKNESS) + " solid",
          "border-left": 0
        },
        "mjx-menclose > mjx-arrow[double] > mjx-aline": {
          left: (0, lengths_js_1.em)(Notation.THICKNESS * (Notation.ARROWX - 1)),
          height: 0
        },
        "mjx-menclose > mjx-arrow > mjx-rthead": {
          transform: "skewX(" + ANGLE + "rad)",
          right: 0,
          bottom: "-1px",
          "border-bottom": "1px solid transparent",
          "border-top": (0, lengths_js_1.em)(Notation.THICKNESS * Notation.ARROWY) + " solid transparent"
        },
        "mjx-menclose > mjx-arrow > mjx-rbhead": {
          transform: "skewX(-" + ANGLE + "rad)",
          "transform-origin": "top",
          right: 0,
          top: "-1px",
          "border-top": "1px solid transparent",
          "border-bottom": (0, lengths_js_1.em)(Notation.THICKNESS * Notation.ARROWY) + " solid transparent"
        },
        "mjx-menclose > mjx-arrow > mjx-lthead": {
          transform: "skewX(-" + ANGLE + "rad)",
          left: 0,
          bottom: "-1px",
          "border-left": 0,
          "border-right": (0, lengths_js_1.em)(Notation.THICKNESS * Notation.ARROWX) + " solid",
          "border-bottom": "1px solid transparent",
          "border-top": (0, lengths_js_1.em)(Notation.THICKNESS * Notation.ARROWY) + " solid transparent"
        },
        "mjx-menclose > mjx-arrow > mjx-lbhead": {
          transform: "skewX(" + ANGLE + "rad)",
          "transform-origin": "top",
          left: 0,
          top: "-1px",
          "border-left": 0,
          "border-right": (0, lengths_js_1.em)(Notation.THICKNESS * Notation.ARROWX) + " solid",
          "border-top": "1px solid transparent",
          "border-bottom": (0, lengths_js_1.em)(Notation.THICKNESS * Notation.ARROWY) + " solid transparent"
        },
        "mjx-menclose > dbox": {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: (0, lengths_js_1.em)(-1.5 * Notation.PADDING),
          width: (0, lengths_js_1.em)(3 * Notation.PADDING),
          border: (0, lengths_js_1.em)(Notation.THICKNESS) + " solid",
          "border-radius": "50%",
          "clip-path": "inset(0 0 0 " + (0, lengths_js_1.em)(1.5 * Notation.PADDING) + ")",
          "box-sizing": "border-box"
        }
      };
      CHTMLmenclose2.notations = new Map([
        Notation.Border("top"),
        Notation.Border("right"),
        Notation.Border("bottom"),
        Notation.Border("left"),
        Notation.Border2("actuarial", "top", "right"),
        Notation.Border2("madruwb", "bottom", "right"),
        Notation.DiagonalStrike("up", 1),
        Notation.DiagonalStrike("down", -1),
        ["horizontalstrike", {
          renderer: Notation.RenderElement("hstrike", "Y"),
          bbox: function(node) {
            return [0, node.padding, 0, node.padding];
          }
        }],
        ["verticalstrike", {
          renderer: Notation.RenderElement("vstrike", "X"),
          bbox: function(node) {
            return [node.padding, 0, node.padding, 0];
          }
        }],
        ["box", {
          renderer: function(node, child) {
            node.adaptor.setStyle(child, "border", node.em(node.thickness) + " solid");
          },
          bbox: Notation.fullBBox,
          border: Notation.fullBorder,
          remove: "left right top bottom"
        }],
        ["roundedbox", {
          renderer: Notation.RenderElement("rbox"),
          bbox: Notation.fullBBox
        }],
        ["circle", {
          renderer: Notation.RenderElement("cbox"),
          bbox: Notation.fullBBox
        }],
        ["phasorangle", {
          renderer: function(node, child) {
            var _a = node.getBBox(), h = _a.h, d = _a.d;
            var _b = __read(node.getArgMod(1.75 * node.padding, h + d), 2), a = _b[0], W = _b[1];
            var t = node.thickness * Math.sin(a) * 0.9;
            node.adaptor.setStyle(child, "border-bottom", node.em(node.thickness) + " solid");
            var strike = node.adjustBorder(node.html("mjx-ustrike", { style: {
              width: node.em(W),
              transform: "translateX(" + node.em(t) + ") rotate(" + node.fixed(-a) + "rad)"
            } }));
            node.adaptor.append(node.chtml, strike);
          },
          bbox: function(node) {
            var p = node.padding / 2;
            var t = node.thickness;
            return [2 * p, p, p + t, 3 * p + t];
          },
          border: function(node) {
            return [0, 0, node.thickness, 0];
          },
          remove: "bottom"
        }],
        Notation.Arrow("up"),
        Notation.Arrow("down"),
        Notation.Arrow("left"),
        Notation.Arrow("right"),
        Notation.Arrow("updown"),
        Notation.Arrow("leftright"),
        Notation.DiagonalArrow("updiagonal"),
        Notation.DiagonalArrow("northeast"),
        Notation.DiagonalArrow("southeast"),
        Notation.DiagonalArrow("northwest"),
        Notation.DiagonalArrow("southwest"),
        Notation.DiagonalArrow("northeastsouthwest"),
        Notation.DiagonalArrow("northwestsoutheast"),
        ["longdiv", {
          renderer: function(node, child) {
            var adaptor = node.adaptor;
            adaptor.setStyle(child, "border-top", node.em(node.thickness) + " solid");
            var arc = adaptor.append(node.chtml, node.html("dbox"));
            var t = node.thickness;
            var p = node.padding;
            if (t !== Notation.THICKNESS) {
              adaptor.setStyle(arc, "border-width", node.em(t));
            }
            if (p !== Notation.PADDING) {
              adaptor.setStyle(arc, "left", node.em(-1.5 * p));
              adaptor.setStyle(arc, "width", node.em(3 * p));
              adaptor.setStyle(arc, "clip-path", "inset(0 0 0 " + node.em(1.5 * p) + ")");
            }
          },
          bbox: function(node) {
            var p = node.padding;
            var t = node.thickness;
            return [p + t, p, p, 2 * p + t / 2];
          }
        }],
        ["radical", {
          renderer: function(node, child) {
            node.msqrt.toCHTML(child);
            var TRBL = node.sqrtTRBL();
            node.adaptor.setStyle(node.msqrt.chtml, "margin", TRBL.map(function(x) {
              return node.em(-x);
            }).join(" "));
          },
          init: function(node) {
            node.msqrt = node.createMsqrt(node.childNodes[0]);
          },
          bbox: function(node) {
            return node.sqrtTRBL();
          },
          renderChild: true
        }]
      ]);
      return CHTMLmenclose2;
    }((0, menclose_js_1.CommonMencloseMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmenclose = CHTMLmenclose;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mrow.js
var require_mrow2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mrow.js"(exports) {
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
    exports.CommonInferredMrowMixin = exports.CommonMrowMixin = void 0;
    var BBox_js_1 = require_BBox();
    function CommonMrowMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var e_1, _a;
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.stretchChildren();
          try {
            for (var _b = __values(_this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              if (child.bbox.pwidth) {
                _this.bbox.pwidth = BBox_js_1.BBox.fullWidth;
                break;
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
          return _this;
        }
        Object.defineProperty(class_1.prototype, "fixesPWidth", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        class_1.prototype.stretchChildren = function() {
          var e_2, _a, e_3, _b, e_4, _c;
          var stretchy = [];
          try {
            for (var _d = __values(this.childNodes), _e = _d.next(); !_e.done; _e = _d.next()) {
              var child = _e.value;
              if (child.canStretch(1)) {
                stretchy.push(child);
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
          var count = stretchy.length;
          var nodeCount = this.childNodes.length;
          if (count && nodeCount > 1) {
            var H = 0, D = 0;
            var all = count > 1 && count === nodeCount;
            try {
              for (var _f = __values(this.childNodes), _g = _f.next(); !_g.done; _g = _f.next()) {
                var child = _g.value;
                var noStretch = child.stretch.dir === 0;
                if (all || noStretch) {
                  var _h = child.getOuterBBox(noStretch), h = _h.h, d = _h.d, rscale = _h.rscale;
                  h *= rscale;
                  d *= rscale;
                  if (h > H)
                    H = h;
                  if (d > D)
                    D = d;
                }
              }
            } catch (e_3_1) {
              e_3 = { error: e_3_1 };
            } finally {
              try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
              } finally {
                if (e_3) throw e_3.error;
              }
            }
            try {
              for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next(); !stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
                var child = stretchy_1_1.value;
                child.coreMO().getStretchedVariant([H, D]);
              }
            } catch (e_4_1) {
              e_4 = { error: e_4_1 };
            } finally {
              try {
                if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return)) _c.call(stretchy_1);
              } finally {
                if (e_4) throw e_4.error;
              }
            }
          }
        };
        return class_1;
      }(Base);
    }
    exports.CommonMrowMixin = CommonMrowMixin;
    function CommonInferredMrowMixin(Base) {
      return function(_super) {
        __extends(class_2, _super);
        function class_2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.getScale = function() {
          this.bbox.scale = this.parent.bbox.scale;
          this.bbox.rscale = 1;
        };
        return class_2;
      }(Base);
    }
    exports.CommonInferredMrowMixin = CommonInferredMrowMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mrow.js
var require_mrow3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mrow.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLinferredMrow = exports.CHTMLmrow = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mrow_js_1 = require_mrow2();
    var mrow_js_2 = require_mrow2();
    var mrow_js_3 = require_mrow();
    var CHTMLmrow = function(_super) {
      __extends(CHTMLmrow2, _super);
      function CHTMLmrow2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmrow2.prototype.toCHTML = function(parent) {
        var e_1, _a;
        var chtml = this.node.isInferred ? this.chtml = parent : this.standardCHTMLnode(parent);
        var hasNegative = false;
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            child.toCHTML(chtml);
            if (child.bbox.w < 0) {
              hasNegative = true;
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
        if (hasNegative) {
          var w = this.getBBox().w;
          if (w) {
            this.adaptor.setStyle(chtml, "width", this.em(Math.max(0, w)));
            if (w < 0) {
              this.adaptor.setStyle(chtml, "marginRight", this.em(w));
            }
          }
        }
      };
      CHTMLmrow2.kind = mrow_js_3.MmlMrow.prototype.kind;
      return CHTMLmrow2;
    }((0, mrow_js_1.CommonMrowMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmrow = CHTMLmrow;
    var CHTMLinferredMrow = function(_super) {
      __extends(CHTMLinferredMrow2, _super);
      function CHTMLinferredMrow2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLinferredMrow2.kind = mrow_js_3.MmlInferredMrow.prototype.kind;
      return CHTMLinferredMrow2;
    }((0, mrow_js_2.CommonInferredMrowMixin)(CHTMLmrow));
    exports.CHTMLinferredMrow = CHTMLinferredMrow;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mfenced.js
var require_mfenced2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mfenced.js"(exports) {
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
    exports.CommonMfencedMixin = void 0;
    function CommonMfencedMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.mrow = null;
          _this.createMrow();
          _this.addMrowChildren();
          return _this;
        }
        class_1.prototype.createMrow = function() {
          var mmlFactory = this.node.factory;
          var mrow = mmlFactory.create("inferredMrow");
          mrow.inheritAttributesFrom(this.node);
          this.mrow = this.wrap(mrow);
          this.mrow.parent = this;
        };
        class_1.prototype.addMrowChildren = function() {
          var e_1, _a;
          var mfenced = this.node;
          var mrow = this.mrow;
          this.addMo(mfenced.open);
          if (this.childNodes.length) {
            mrow.childNodes.push(this.childNodes[0]);
          }
          var i = 0;
          try {
            for (var _b = __values(this.childNodes.slice(1)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              this.addMo(mfenced.separators[i++]);
              mrow.childNodes.push(child);
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
          this.addMo(mfenced.close);
          mrow.stretchChildren();
        };
        class_1.prototype.addMo = function(node) {
          if (!node)
            return;
          var mo = this.wrap(node);
          this.mrow.childNodes.push(mo);
          mo.parent = this.mrow;
        };
        class_1.prototype.computeBBox = function(bbox, recompute) {
          if (recompute === void 0) {
            recompute = false;
          }
          bbox.updateFrom(this.mrow.getOuterBBox());
          this.setChildPWidths(recompute);
        };
        return class_1;
      }(Base);
    }
    exports.CommonMfencedMixin = CommonMfencedMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mfenced.js
var require_mfenced3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mfenced.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmfenced = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mfenced_js_1 = require_mfenced2();
    var mfenced_js_2 = require_mfenced();
    var CHTMLmfenced = function(_super) {
      __extends(CHTMLmfenced2, _super);
      function CHTMLmfenced2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmfenced2.prototype.toCHTML = function(parent) {
        var chtml = this.standardCHTMLnode(parent);
        this.mrow.toCHTML(chtml);
      };
      CHTMLmfenced2.kind = mfenced_js_2.MmlMfenced.prototype.kind;
      return CHTMLmfenced2;
    }((0, mfenced_js_1.CommonMfencedMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmfenced = CHTMLmfenced;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mfrac.js
var require_mfrac2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mfrac.js"(exports) {
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
    exports.CommonMfracMixin = void 0;
    function CommonMfracMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.bevel = null;
          _this.pad = _this.node.getProperty("withDelims") ? 0 : _this.font.params.nulldelimiterspace;
          if (_this.node.attributes.get("bevelled")) {
            var H = _this.getBevelData(_this.isDisplay()).H;
            var bevel = _this.bevel = _this.createMo("/");
            bevel.node.attributes.set("symmetric", true);
            bevel.canStretch(1);
            bevel.getStretchedVariant([H], true);
          }
          return _this;
        }
        class_1.prototype.computeBBox = function(bbox, recompute) {
          if (recompute === void 0) {
            recompute = false;
          }
          bbox.empty();
          var _a = this.node.attributes.getList("linethickness", "bevelled"), linethickness = _a.linethickness, bevelled = _a.bevelled;
          var display = this.isDisplay();
          var w = null;
          if (bevelled) {
            this.getBevelledBBox(bbox, display);
          } else {
            var thickness = this.length2em(String(linethickness), 0.06);
            w = -2 * this.pad;
            if (thickness === 0) {
              this.getAtopBBox(bbox, display);
            } else {
              this.getFractionBBox(bbox, display, thickness);
              w -= 0.2;
            }
            w += bbox.w;
          }
          bbox.clean();
          this.setChildPWidths(recompute, w);
        };
        class_1.prototype.getFractionBBox = function(bbox, display, t) {
          var nbox = this.childNodes[0].getOuterBBox();
          var dbox = this.childNodes[1].getOuterBBox();
          var tex = this.font.params;
          var a = tex.axis_height;
          var _a = this.getTUV(display, t), T = _a.T, u = _a.u, v = _a.v;
          bbox.combine(nbox, 0, a + T + Math.max(nbox.d * nbox.rscale, u));
          bbox.combine(dbox, 0, a - T - Math.max(dbox.h * dbox.rscale, v));
          bbox.w += 2 * this.pad + 0.2;
        };
        class_1.prototype.getTUV = function(display, t) {
          var tex = this.font.params;
          var a = tex.axis_height;
          var T = (display ? 3.5 : 1.5) * t;
          return {
            T: (display ? 3.5 : 1.5) * t,
            u: (display ? tex.num1 : tex.num2) - a - T,
            v: (display ? tex.denom1 : tex.denom2) + a - T
          };
        };
        class_1.prototype.getAtopBBox = function(bbox, display) {
          var _a = this.getUVQ(display), u = _a.u, v = _a.v, nbox = _a.nbox, dbox = _a.dbox;
          bbox.combine(nbox, 0, u);
          bbox.combine(dbox, 0, -v);
          bbox.w += 2 * this.pad;
        };
        class_1.prototype.getUVQ = function(display) {
          var nbox = this.childNodes[0].getOuterBBox();
          var dbox = this.childNodes[1].getOuterBBox();
          var tex = this.font.params;
          var _a = __read(display ? [tex.num1, tex.denom1] : [tex.num3, tex.denom2], 2), u = _a[0], v = _a[1];
          var p = (display ? 7 : 3) * tex.rule_thickness;
          var q = u - nbox.d * nbox.scale - (dbox.h * dbox.scale - v);
          if (q < p) {
            u += (p - q) / 2;
            v += (p - q) / 2;
            q = p;
          }
          return { u, v, q, nbox, dbox };
        };
        class_1.prototype.getBevelledBBox = function(bbox, display) {
          var _a = this.getBevelData(display), u = _a.u, v = _a.v, delta = _a.delta, nbox = _a.nbox, dbox = _a.dbox;
          var lbox = this.bevel.getOuterBBox();
          bbox.combine(nbox, 0, u);
          bbox.combine(lbox, bbox.w - delta / 2, 0);
          bbox.combine(dbox, bbox.w - delta / 2, v);
        };
        class_1.prototype.getBevelData = function(display) {
          var nbox = this.childNodes[0].getOuterBBox();
          var dbox = this.childNodes[1].getOuterBBox();
          var delta = display ? 0.4 : 0.15;
          var H = Math.max(nbox.scale * (nbox.h + nbox.d), dbox.scale * (dbox.h + dbox.d)) + 2 * delta;
          var a = this.font.params.axis_height;
          var u = nbox.scale * (nbox.d - nbox.h) / 2 + a + delta;
          var v = dbox.scale * (dbox.d - dbox.h) / 2 + a - delta;
          return { H, delta, u, v, nbox, dbox };
        };
        class_1.prototype.canStretch = function(_direction) {
          return false;
        };
        class_1.prototype.isDisplay = function() {
          var _a = this.node.attributes.getList("displaystyle", "scriptlevel"), displaystyle = _a.displaystyle, scriptlevel = _a.scriptlevel;
          return displaystyle && scriptlevel === 0;
        };
        class_1.prototype.getWrapWidth = function(i) {
          var attributes = this.node.attributes;
          if (attributes.get("bevelled")) {
            return this.childNodes[i].getOuterBBox().w;
          }
          var w = this.getBBox().w;
          var thickness = this.length2em(attributes.get("linethickness"));
          return w - (thickness ? 0.2 : 0) - 2 * this.pad;
        };
        class_1.prototype.getChildAlign = function(i) {
          var attributes = this.node.attributes;
          return attributes.get("bevelled") ? "left" : attributes.get(["numalign", "denomalign"][i]);
        };
        return class_1;
      }(Base);
    }
    exports.CommonMfracMixin = CommonMfracMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mfrac.js
var require_mfrac3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mfrac.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmfrac = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mfrac_js_1 = require_mfrac2();
    var mfrac_js_2 = require_mfrac();
    var CHTMLmfrac = function(_super) {
      __extends(CHTMLmfrac2, _super);
      function CHTMLmfrac2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmfrac2.prototype.toCHTML = function(parent) {
        this.standardCHTMLnode(parent);
        var _a = this.node.attributes.getList("linethickness", "bevelled"), linethickness = _a.linethickness, bevelled = _a.bevelled;
        var display = this.isDisplay();
        if (bevelled) {
          this.makeBevelled(display);
        } else {
          var thickness = this.length2em(String(linethickness), 0.06);
          if (thickness === 0) {
            this.makeAtop(display);
          } else {
            this.makeFraction(display, thickness);
          }
        }
      };
      CHTMLmfrac2.prototype.makeFraction = function(display, t) {
        var _a = this.node.attributes.getList("numalign", "denomalign"), numalign = _a.numalign, denomalign = _a.denomalign;
        var withDelims = this.node.getProperty("withDelims");
        var attr = display ? { type: "d" } : {};
        var fattr = withDelims ? __assign(__assign({}, attr), { delims: "true" }) : __assign({}, attr);
        var nattr = numalign !== "center" ? { align: numalign } : {};
        var dattr = denomalign !== "center" ? { align: denomalign } : {};
        var dsattr = __assign({}, attr), nsattr = __assign({}, attr);
        var tex = this.font.params;
        if (t !== 0.06) {
          var a = tex.axis_height;
          var tEm = this.em(t);
          var _b = this.getTUV(display, t), T = _b.T, u = _b.u, v = _b.v;
          var m = (display ? this.em(3 * t) : tEm) + " -.1em";
          attr.style = { height: tEm, "border-top": tEm + " solid", margin: m };
          var nh = this.em(Math.max(0, u));
          nsattr.style = { height: nh, "vertical-align": "-" + nh };
          dsattr.style = { height: this.em(Math.max(0, v)) };
          fattr.style = { "vertical-align": this.em(a - T) };
        }
        var num, den;
        this.adaptor.append(this.chtml, this.html("mjx-frac", fattr, [
          num = this.html("mjx-num", nattr, [this.html("mjx-nstrut", nsattr)]),
          this.html("mjx-dbox", {}, [
            this.html("mjx-dtable", {}, [
              this.html("mjx-line", attr),
              this.html("mjx-row", {}, [
                den = this.html("mjx-den", dattr, [this.html("mjx-dstrut", dsattr)])
              ])
            ])
          ])
        ]));
        this.childNodes[0].toCHTML(num);
        this.childNodes[1].toCHTML(den);
      };
      CHTMLmfrac2.prototype.makeAtop = function(display) {
        var _a = this.node.attributes.getList("numalign", "denomalign"), numalign = _a.numalign, denomalign = _a.denomalign;
        var withDelims = this.node.getProperty("withDelims");
        var attr = display ? { type: "d", atop: true } : { atop: true };
        var fattr = withDelims ? __assign(__assign({}, attr), { delims: true }) : __assign({}, attr);
        var nattr = numalign !== "center" ? { align: numalign } : {};
        var dattr = denomalign !== "center" ? { align: denomalign } : {};
        var _b = this.getUVQ(display), v = _b.v, q = _b.q;
        nattr.style = { "padding-bottom": this.em(q) };
        fattr.style = { "vertical-align": this.em(-v) };
        var num, den;
        this.adaptor.append(this.chtml, this.html("mjx-frac", fattr, [
          num = this.html("mjx-num", nattr),
          den = this.html("mjx-den", dattr)
        ]));
        this.childNodes[0].toCHTML(num);
        this.childNodes[1].toCHTML(den);
      };
      CHTMLmfrac2.prototype.makeBevelled = function(display) {
        var adaptor = this.adaptor;
        adaptor.setAttribute(this.chtml, "bevelled", "ture");
        var num = adaptor.append(this.chtml, this.html("mjx-num"));
        this.childNodes[0].toCHTML(num);
        this.bevel.toCHTML(this.chtml);
        var den = adaptor.append(this.chtml, this.html("mjx-den"));
        this.childNodes[1].toCHTML(den);
        var _a = this.getBevelData(display), u = _a.u, v = _a.v, delta = _a.delta, nbox = _a.nbox, dbox = _a.dbox;
        if (u) {
          adaptor.setStyle(num, "verticalAlign", this.em(u / nbox.scale));
        }
        if (v) {
          adaptor.setStyle(den, "verticalAlign", this.em(v / dbox.scale));
        }
        var dx = this.em(-delta / 2);
        adaptor.setStyle(this.bevel.chtml, "marginLeft", dx);
        adaptor.setStyle(this.bevel.chtml, "marginRight", dx);
      };
      CHTMLmfrac2.kind = mfrac_js_2.MmlMfrac.prototype.kind;
      CHTMLmfrac2.styles = {
        "mjx-frac": {
          display: "inline-block",
          "vertical-align": "0.17em",
          padding: "0 .22em"
        },
        'mjx-frac[type="d"]': {
          "vertical-align": ".04em"
        },
        "mjx-frac[delims]": {
          padding: "0 .1em"
        },
        "mjx-frac[atop]": {
          padding: "0 .12em"
        },
        "mjx-frac[atop][delims]": {
          padding: "0"
        },
        "mjx-dtable": {
          display: "inline-table",
          width: "100%"
        },
        "mjx-dtable > *": {
          "font-size": "2000%"
        },
        "mjx-dbox": {
          display: "block",
          "font-size": "5%"
        },
        "mjx-num": {
          display: "block",
          "text-align": "center"
        },
        "mjx-den": {
          display: "block",
          "text-align": "center"
        },
        "mjx-mfrac[bevelled] > mjx-num": {
          display: "inline-block"
        },
        "mjx-mfrac[bevelled] > mjx-den": {
          display: "inline-block"
        },
        'mjx-den[align="right"], mjx-num[align="right"]': {
          "text-align": "right"
        },
        'mjx-den[align="left"], mjx-num[align="left"]': {
          "text-align": "left"
        },
        "mjx-nstrut": {
          display: "inline-block",
          height: ".054em",
          width: 0,
          "vertical-align": "-.054em"
        },
        'mjx-nstrut[type="d"]': {
          height: ".217em",
          "vertical-align": "-.217em"
        },
        "mjx-dstrut": {
          display: "inline-block",
          height: ".505em",
          width: 0
        },
        'mjx-dstrut[type="d"]': {
          height: ".726em"
        },
        "mjx-line": {
          display: "block",
          "box-sizing": "border-box",
          "min-height": "1px",
          height: ".06em",
          "border-top": ".06em solid",
          margin: ".06em -.1em",
          overflow: "hidden"
        },
        'mjx-line[type="d"]': {
          margin: ".18em -.1em"
        }
      };
      return CHTMLmfrac2;
    }((0, mfrac_js_1.CommonMfracMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmfrac = CHTMLmfrac;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/msqrt.js
var require_msqrt2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/msqrt.js"(exports) {
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
    exports.CommonMsqrtMixin = void 0;
    var BBox_js_1 = require_BBox();
    function CommonMsqrtMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          var surd = _this.createMo("√");
          surd.canStretch(1);
          var _a = _this.childNodes[_this.base].getOuterBBox(), h = _a.h, d = _a.d;
          var t = _this.font.params.rule_thickness;
          var p = _this.node.attributes.get("displaystyle") ? _this.font.params.x_height : t;
          _this.surdH = h + d + 2 * t + p / 4;
          surd.getStretchedVariant([_this.surdH - d, d], true);
          return _this;
        }
        Object.defineProperty(class_1.prototype, "base", {
          get: function() {
            return 0;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_1.prototype, "surd", {
          get: function() {
            return 1;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_1.prototype, "root", {
          get: function() {
            return null;
          },
          enumerable: false,
          configurable: true
        });
        class_1.prototype.createMo = function(text) {
          var node = _super.prototype.createMo.call(this, text);
          this.childNodes.push(node);
          return node;
        };
        class_1.prototype.computeBBox = function(bbox, recompute) {
          if (recompute === void 0) {
            recompute = false;
          }
          var surdbox = this.childNodes[this.surd].getBBox();
          var basebox = new BBox_js_1.BBox(this.childNodes[this.base].getOuterBBox());
          var q = this.getPQ(surdbox)[1];
          var t = this.font.params.rule_thickness;
          var H = basebox.h + q + t;
          var _a = __read(this.getRootDimens(surdbox, H), 1), x = _a[0];
          bbox.h = H + t;
          this.combineRootBBox(bbox, surdbox, H);
          bbox.combine(surdbox, x, H - surdbox.h);
          bbox.combine(basebox, x + surdbox.w, 0);
          bbox.clean();
          this.setChildPWidths(recompute);
        };
        class_1.prototype.combineRootBBox = function(_bbox, _sbox, _H) {
        };
        class_1.prototype.getPQ = function(sbox) {
          var t = this.font.params.rule_thickness;
          var p = this.node.attributes.get("displaystyle") ? this.font.params.x_height : t;
          var q = sbox.h + sbox.d > this.surdH ? (sbox.h + sbox.d - (this.surdH - 2 * t - p / 2)) / 2 : t + p / 4;
          return [p, q];
        };
        class_1.prototype.getRootDimens = function(_sbox, _H) {
          return [0, 0, 0, 0];
        };
        return class_1;
      }(Base);
    }
    exports.CommonMsqrtMixin = CommonMsqrtMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/msqrt.js
var require_msqrt3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/msqrt.js"(exports) {
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
    exports.CHTMLmsqrt = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var msqrt_js_1 = require_msqrt2();
    var msqrt_js_2 = require_msqrt();
    var CHTMLmsqrt = function(_super) {
      __extends(CHTMLmsqrt2, _super);
      function CHTMLmsqrt2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmsqrt2.prototype.toCHTML = function(parent) {
        var surd = this.childNodes[this.surd];
        var base = this.childNodes[this.base];
        var sbox = surd.getBBox();
        var bbox = base.getOuterBBox();
        var _a = __read(this.getPQ(sbox), 2), q = _a[1];
        var t = this.font.params.rule_thickness;
        var H = bbox.h + q + t;
        var CHTML = this.standardCHTMLnode(parent);
        var SURD, BASE, ROOT, root;
        if (this.root != null) {
          ROOT = this.adaptor.append(CHTML, this.html("mjx-root"));
          root = this.childNodes[this.root];
        }
        var SQRT = this.adaptor.append(CHTML, this.html("mjx-sqrt", {}, [
          SURD = this.html("mjx-surd"),
          BASE = this.html("mjx-box", { style: { paddingTop: this.em(q) } })
        ]));
        this.addRoot(ROOT, root, sbox, H);
        surd.toCHTML(SURD);
        base.toCHTML(BASE);
        if (surd.size < 0) {
          this.adaptor.addClass(SQRT, "mjx-tall");
        }
      };
      CHTMLmsqrt2.prototype.addRoot = function(_ROOT, _root, _sbox, _H) {
      };
      CHTMLmsqrt2.kind = msqrt_js_2.MmlMsqrt.prototype.kind;
      CHTMLmsqrt2.styles = {
        "mjx-root": {
          display: "inline-block",
          "white-space": "nowrap"
        },
        "mjx-surd": {
          display: "inline-block",
          "vertical-align": "top"
        },
        "mjx-sqrt": {
          display: "inline-block",
          "padding-top": ".07em"
        },
        "mjx-sqrt > mjx-box": {
          "border-top": ".07em solid"
        },
        "mjx-sqrt.mjx-tall > mjx-box": {
          "padding-left": ".3em",
          "margin-left": "-.3em"
        }
      };
      return CHTMLmsqrt2;
    }((0, msqrt_js_1.CommonMsqrtMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmsqrt = CHTMLmsqrt;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mroot.js
var require_mroot2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mroot.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonMrootMixin = void 0;
    function CommonMrootMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_1.prototype, "surd", {
          get: function() {
            return 2;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_1.prototype, "root", {
          get: function() {
            return 1;
          },
          enumerable: false,
          configurable: true
        });
        class_1.prototype.combineRootBBox = function(BBOX, sbox, H) {
          var bbox = this.childNodes[this.root].getOuterBBox();
          var h = this.getRootDimens(sbox, H)[1];
          BBOX.combine(bbox, 0, h);
        };
        class_1.prototype.getRootDimens = function(sbox, H) {
          var surd = this.childNodes[this.surd];
          var bbox = this.childNodes[this.root].getOuterBBox();
          var offset = (surd.size < 0 ? 0.5 : 0.6) * sbox.w;
          var w = bbox.w, rscale = bbox.rscale;
          var W = Math.max(w, offset / rscale);
          var dx = Math.max(0, W - w);
          var h = this.rootHeight(bbox, sbox, surd.size, H);
          var x = W * rscale - offset;
          return [x, h, dx];
        };
        class_1.prototype.rootHeight = function(rbox, sbox, size, H) {
          var h = sbox.h + sbox.d;
          var b = (size < 0 ? 1.9 : 0.55 * h) - (h - H);
          return b + Math.max(0, rbox.d * rbox.rscale);
        };
        return class_1;
      }(Base);
    }
    exports.CommonMrootMixin = CommonMrootMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mroot.js
var require_mroot3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mroot.js"(exports) {
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
    exports.CHTMLmroot = void 0;
    var msqrt_js_1 = require_msqrt3();
    var mroot_js_1 = require_mroot2();
    var mroot_js_2 = require_mroot();
    var CHTMLmroot = function(_super) {
      __extends(CHTMLmroot2, _super);
      function CHTMLmroot2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmroot2.prototype.addRoot = function(ROOT, root, sbox, H) {
        root.toCHTML(ROOT);
        var _a = __read(this.getRootDimens(sbox, H), 3), x = _a[0], h = _a[1], dx = _a[2];
        this.adaptor.setStyle(ROOT, "verticalAlign", this.em(h));
        this.adaptor.setStyle(ROOT, "width", this.em(x));
        if (dx) {
          this.adaptor.setStyle(this.adaptor.firstChild(ROOT), "paddingLeft", this.em(dx));
        }
      };
      CHTMLmroot2.kind = mroot_js_2.MmlMroot.prototype.kind;
      return CHTMLmroot2;
    }((0, mroot_js_1.CommonMrootMixin)(msqrt_js_1.CHTMLmsqrt));
    exports.CHTMLmroot = CHTMLmroot;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/scriptbase.js
var require_scriptbase = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/scriptbase.js"(exports) {
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
    exports.CommonScriptbaseMixin = void 0;
    var MmlNode_js_1 = require_MmlNode();
    function CommonScriptbaseMixin(Base) {
      var _a;
      return _a = function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.baseScale = 1;
          _this.baseIc = 0;
          _this.baseRemoveIc = false;
          _this.baseIsChar = false;
          _this.baseHasAccentOver = null;
          _this.baseHasAccentUnder = null;
          _this.isLineAbove = false;
          _this.isLineBelow = false;
          _this.isMathAccent = false;
          var core = _this.baseCore = _this.getBaseCore();
          if (!core)
            return _this;
          _this.setBaseAccentsFor(core);
          _this.baseScale = _this.getBaseScale();
          _this.baseIc = _this.getBaseIc();
          _this.baseIsChar = _this.isCharBase();
          _this.isMathAccent = _this.baseIsChar && (_this.scriptChild && !!_this.scriptChild.coreMO().node.getProperty("mathaccent"));
          _this.checkLineAccents();
          _this.baseRemoveIc = !_this.isLineAbove && !_this.isLineBelow && (!_this.constructor.useIC || _this.isMathAccent);
          return _this;
        }
        Object.defineProperty(class_1.prototype, "baseChild", {
          get: function() {
            return this.childNodes[this.node.base];
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_1.prototype, "scriptChild", {
          get: function() {
            return this.childNodes[1];
          },
          enumerable: false,
          configurable: true
        });
        class_1.prototype.getBaseCore = function() {
          var core = this.getSemanticBase() || this.childNodes[0];
          while (core && (core.childNodes.length === 1 && (core.node.isKind("mrow") || core.node.isKind("TeXAtom") && core.node.texClass !== MmlNode_js_1.TEXCLASS.VCENTER || core.node.isKind("mstyle") || core.node.isKind("mpadded") || core.node.isKind("mphantom") || core.node.isKind("semantics")) || core.node.isKind("munderover") && core.isMathAccent)) {
            this.setBaseAccentsFor(core);
            core = core.childNodes[0];
          }
          if (!core) {
            this.baseHasAccentOver = this.baseHasAccentUnder = false;
          }
          return core || this.childNodes[0];
        };
        class_1.prototype.setBaseAccentsFor = function(core) {
          if (core.node.isKind("munderover")) {
            if (this.baseHasAccentOver === null) {
              this.baseHasAccentOver = !!core.node.attributes.get("accent");
            }
            if (this.baseHasAccentUnder === null) {
              this.baseHasAccentUnder = !!core.node.attributes.get("accentunder");
            }
          }
        };
        class_1.prototype.getSemanticBase = function() {
          var fence = this.node.attributes.getExplicit("data-semantic-fencepointer");
          return this.getBaseFence(this.baseChild, fence);
        };
        class_1.prototype.getBaseFence = function(fence, id) {
          var e_1, _a2;
          if (!fence || !fence.node.attributes || !id) {
            return null;
          }
          if (fence.node.attributes.getExplicit("data-semantic-id") === id) {
            return fence;
          }
          try {
            for (var _b = __values(fence.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              var result = this.getBaseFence(child, id);
              if (result) {
                return result;
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          return null;
        };
        class_1.prototype.getBaseScale = function() {
          var child = this.baseCore;
          var scale = 1;
          while (child && child !== this) {
            var bbox = child.getOuterBBox();
            scale *= bbox.rscale;
            child = child.parent;
          }
          return scale;
        };
        class_1.prototype.getBaseIc = function() {
          return this.baseCore.getOuterBBox().ic * this.baseScale;
        };
        class_1.prototype.getAdjustedIc = function() {
          var bbox = this.baseCore.getOuterBBox();
          return (bbox.ic ? 1.05 * bbox.ic + 0.05 : 0) * this.baseScale;
        };
        class_1.prototype.isCharBase = function() {
          var base = this.baseCore;
          return (base.node.isKind("mo") && base.size === null || base.node.isKind("mi") || base.node.isKind("mn")) && base.bbox.rscale === 1 && Array.from(base.getText()).length === 1;
        };
        class_1.prototype.checkLineAccents = function() {
          if (!this.node.isKind("munderover"))
            return;
          if (this.node.isKind("mover")) {
            this.isLineAbove = this.isLineAccent(this.scriptChild);
          } else if (this.node.isKind("munder")) {
            this.isLineBelow = this.isLineAccent(this.scriptChild);
          } else {
            var mml = this;
            this.isLineAbove = this.isLineAccent(mml.overChild);
            this.isLineBelow = this.isLineAccent(mml.underChild);
          }
        };
        class_1.prototype.isLineAccent = function(script) {
          var node = script.coreMO().node;
          return node.isToken && node.getText() === "―";
        };
        class_1.prototype.getBaseWidth = function() {
          var bbox = this.baseChild.getOuterBBox();
          return bbox.w * bbox.rscale - (this.baseRemoveIc ? this.baseIc : 0) + this.font.params.extra_ic;
        };
        class_1.prototype.computeBBox = function(bbox, recompute) {
          if (recompute === void 0) {
            recompute = false;
          }
          var w = this.getBaseWidth();
          var _a2 = __read(this.getOffset(), 2), x = _a2[0], y = _a2[1];
          bbox.append(this.baseChild.getOuterBBox());
          bbox.combine(this.scriptChild.getOuterBBox(), w + x, y);
          bbox.w += this.font.params.scriptspace;
          bbox.clean();
          this.setChildPWidths(recompute);
        };
        class_1.prototype.getOffset = function() {
          return [0, 0];
        };
        class_1.prototype.baseCharZero = function(n) {
          var largeop = !!this.baseCore.node.attributes.get("largeop");
          var scale = this.baseScale;
          return this.baseIsChar && !largeop && scale === 1 ? 0 : n;
        };
        class_1.prototype.getV = function() {
          var bbox = this.baseCore.getOuterBBox();
          var sbox = this.scriptChild.getOuterBBox();
          var tex = this.font.params;
          var subscriptshift = this.length2em(this.node.attributes.get("subscriptshift"), tex.sub1);
          return Math.max(this.baseCharZero(bbox.d * this.baseScale + tex.sub_drop * sbox.rscale), subscriptshift, sbox.h * sbox.rscale - 4 / 5 * tex.x_height);
        };
        class_1.prototype.getU = function() {
          var bbox = this.baseCore.getOuterBBox();
          var sbox = this.scriptChild.getOuterBBox();
          var tex = this.font.params;
          var attr = this.node.attributes.getList("displaystyle", "superscriptshift");
          var prime = this.node.getProperty("texprimestyle");
          var p = prime ? tex.sup3 : attr.displaystyle ? tex.sup1 : tex.sup2;
          var superscriptshift = this.length2em(attr.superscriptshift, p);
          return Math.max(this.baseCharZero(bbox.h * this.baseScale - tex.sup_drop * sbox.rscale), superscriptshift, sbox.d * sbox.rscale + 1 / 4 * tex.x_height);
        };
        class_1.prototype.hasMovableLimits = function() {
          var display = this.node.attributes.get("displaystyle");
          var mo = this.baseChild.coreMO().node;
          return !display && !!mo.attributes.get("movablelimits");
        };
        class_1.prototype.getOverKU = function(basebox, overbox) {
          var accent = this.node.attributes.get("accent");
          var tex = this.font.params;
          var d = overbox.d * overbox.rscale;
          var t = tex.rule_thickness * tex.separation_factor;
          var delta = this.baseHasAccentOver ? t : 0;
          var T = this.isLineAbove ? 3 * tex.rule_thickness : t;
          var k = (accent ? T : Math.max(tex.big_op_spacing1, tex.big_op_spacing3 - Math.max(0, d))) - delta;
          return [k, basebox.h * basebox.rscale + k + d];
        };
        class_1.prototype.getUnderKV = function(basebox, underbox) {
          var accent = this.node.attributes.get("accentunder");
          var tex = this.font.params;
          var h = underbox.h * underbox.rscale;
          var t = tex.rule_thickness * tex.separation_factor;
          var delta = this.baseHasAccentUnder ? t : 0;
          var T = this.isLineBelow ? 3 * tex.rule_thickness : t;
          var k = (accent ? T : Math.max(tex.big_op_spacing2, tex.big_op_spacing4 - h)) - delta;
          return [k, -(basebox.d * basebox.rscale + k + h)];
        };
        class_1.prototype.getDeltaW = function(boxes, delta) {
          var e_2, _a2, e_3, _b;
          if (delta === void 0) {
            delta = [0, 0, 0];
          }
          var align = this.node.attributes.get("align");
          var widths = boxes.map(function(box) {
            return box.w * box.rscale;
          });
          widths[0] -= this.baseRemoveIc && !this.baseCore.node.attributes.get("largeop") ? this.baseIc : 0;
          var w = Math.max.apply(Math, __spreadArray([], __read(widths), false));
          var dw = [];
          var m = 0;
          try {
            for (var _c = __values(widths.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
              var i = _d.value;
              dw[i] = (align === "center" ? (w - widths[i]) / 2 : align === "right" ? w - widths[i] : 0) + delta[i];
              if (dw[i] < m) {
                m = -dw[i];
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
          if (m) {
            try {
              for (var _e = __values(dw.keys()), _f = _e.next(); !_f.done; _f = _e.next()) {
                var i = _f.value;
                dw[i] += m;
              }
            } catch (e_3_1) {
              e_3 = { error: e_3_1 };
            } finally {
              try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
              } finally {
                if (e_3) throw e_3.error;
              }
            }
          }
          [1, 2].map(function(i2) {
            return dw[i2] += boxes[i2] ? boxes[i2].dx * boxes[0].scale : 0;
          });
          return dw;
        };
        class_1.prototype.getDelta = function(noskew) {
          if (noskew === void 0) {
            noskew = false;
          }
          var accent = this.node.attributes.get("accent");
          var _a2 = this.baseCore.getOuterBBox(), sk = _a2.sk, ic = _a2.ic;
          return ((accent && !noskew ? sk : 0) + this.font.skewIcFactor * ic) * this.baseScale;
        };
        class_1.prototype.stretchChildren = function() {
          var e_4, _a2, e_5, _b, e_6, _c;
          var stretchy = [];
          try {
            for (var _d = __values(this.childNodes), _e = _d.next(); !_e.done; _e = _d.next()) {
              var child = _e.value;
              if (child.canStretch(2)) {
                stretchy.push(child);
              }
            }
          } catch (e_4_1) {
            e_4 = { error: e_4_1 };
          } finally {
            try {
              if (_e && !_e.done && (_a2 = _d.return)) _a2.call(_d);
            } finally {
              if (e_4) throw e_4.error;
            }
          }
          var count = stretchy.length;
          var nodeCount = this.childNodes.length;
          if (count && nodeCount > 1) {
            var W = 0;
            var all = count > 1 && count === nodeCount;
            try {
              for (var _f = __values(this.childNodes), _g = _f.next(); !_g.done; _g = _f.next()) {
                var child = _g.value;
                var noStretch = child.stretch.dir === 0;
                if (all || noStretch) {
                  var _h = child.getOuterBBox(noStretch), w = _h.w, rscale = _h.rscale;
                  if (w * rscale > W)
                    W = w * rscale;
                }
              }
            } catch (e_5_1) {
              e_5 = { error: e_5_1 };
            } finally {
              try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
              } finally {
                if (e_5) throw e_5.error;
              }
            }
            try {
              for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next(); !stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
                var child = stretchy_1_1.value;
                child.coreMO().getStretchedVariant([W / child.bbox.rscale]);
              }
            } catch (e_6_1) {
              e_6 = { error: e_6_1 };
            } finally {
              try {
                if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return)) _c.call(stretchy_1);
              } finally {
                if (e_6) throw e_6.error;
              }
            }
          }
        };
        return class_1;
      }(Base), _a.useIC = true, _a;
    }
    exports.CommonScriptbaseMixin = CommonScriptbaseMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/scriptbase.js
var require_scriptbase2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/scriptbase.js"(exports) {
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
    exports.CHTMLscriptbase = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var scriptbase_js_1 = require_scriptbase();
    var CHTMLscriptbase = function(_super) {
      __extends(CHTMLscriptbase2, _super);
      function CHTMLscriptbase2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLscriptbase2.prototype.toCHTML = function(parent) {
        this.chtml = this.standardCHTMLnode(parent);
        var _a = __read(this.getOffset(), 2), x = _a[0], v = _a[1];
        var dx = x - (this.baseRemoveIc ? this.baseIc : 0);
        var style = { "vertical-align": this.em(v) };
        if (dx) {
          style["margin-left"] = this.em(dx);
        }
        this.baseChild.toCHTML(this.chtml);
        this.scriptChild.toCHTML(this.adaptor.append(this.chtml, this.html("mjx-script", { style })));
      };
      CHTMLscriptbase2.prototype.setDeltaW = function(nodes, dx) {
        for (var i = 0; i < dx.length; i++) {
          if (dx[i]) {
            this.adaptor.setStyle(nodes[i], "paddingLeft", this.em(dx[i]));
          }
        }
      };
      CHTMLscriptbase2.prototype.adjustOverDepth = function(over, overbox) {
        if (overbox.d >= 0)
          return;
        this.adaptor.setStyle(over, "marginBottom", this.em(overbox.d * overbox.rscale));
      };
      CHTMLscriptbase2.prototype.adjustUnderDepth = function(under, underbox) {
        var e_1, _a;
        if (underbox.d >= 0)
          return;
        var adaptor = this.adaptor;
        var v = this.em(underbox.d);
        var box = this.html("mjx-box", { style: { "margin-bottom": v, "vertical-align": v } });
        try {
          for (var _b = __values(adaptor.childNodes(adaptor.firstChild(under))), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            adaptor.append(box, child);
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
        adaptor.append(adaptor.firstChild(under), box);
      };
      CHTMLscriptbase2.prototype.adjustBaseHeight = function(base, basebox) {
        if (this.node.attributes.get("accent")) {
          var minH = this.font.params.x_height * basebox.scale;
          if (basebox.h < minH) {
            this.adaptor.setStyle(base, "paddingTop", this.em(minH - basebox.h));
            basebox.h = minH;
          }
        }
      };
      CHTMLscriptbase2.kind = "scriptbase";
      return CHTMLscriptbase2;
    }((0, scriptbase_js_1.CommonScriptbaseMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLscriptbase = CHTMLscriptbase;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/msubsup.js
var require_msubsup2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/msubsup.js"(exports) {
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
    exports.CommonMsubsupMixin = exports.CommonMsupMixin = exports.CommonMsubMixin = void 0;
    function CommonMsubMixin(Base) {
      var _a;
      return _a = function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_1.prototype, "scriptChild", {
          get: function() {
            return this.childNodes[this.node.sub];
          },
          enumerable: false,
          configurable: true
        });
        class_1.prototype.getOffset = function() {
          return [0, -this.getV()];
        };
        return class_1;
      }(Base), _a.useIC = false, _a;
    }
    exports.CommonMsubMixin = CommonMsubMixin;
    function CommonMsupMixin(Base) {
      return function(_super) {
        __extends(class_2, _super);
        function class_2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_2.prototype, "scriptChild", {
          get: function() {
            return this.childNodes[this.node.sup];
          },
          enumerable: false,
          configurable: true
        });
        class_2.prototype.getOffset = function() {
          var x = this.getAdjustedIc() - (this.baseRemoveIc ? 0 : this.baseIc);
          return [x, this.getU()];
        };
        return class_2;
      }(Base);
    }
    exports.CommonMsupMixin = CommonMsupMixin;
    function CommonMsubsupMixin(Base) {
      var _a;
      return _a = function(_super) {
        __extends(class_3, _super);
        function class_3() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.UVQ = null;
          return _this;
        }
        Object.defineProperty(class_3.prototype, "subChild", {
          get: function() {
            return this.childNodes[this.node.sub];
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_3.prototype, "supChild", {
          get: function() {
            return this.childNodes[this.node.sup];
          },
          enumerable: false,
          configurable: true
        });
        class_3.prototype.computeBBox = function(bbox, recompute) {
          if (recompute === void 0) {
            recompute = false;
          }
          var basebox = this.baseChild.getOuterBBox();
          var _a2 = __read([this.subChild.getOuterBBox(), this.supChild.getOuterBBox()], 2), subbox = _a2[0], supbox = _a2[1];
          bbox.empty();
          bbox.append(basebox);
          var w = this.getBaseWidth();
          var x = this.getAdjustedIc();
          var _b = __read(this.getUVQ(), 2), u = _b[0], v = _b[1];
          bbox.combine(subbox, w, v);
          bbox.combine(supbox, w + x, u);
          bbox.w += this.font.params.scriptspace;
          bbox.clean();
          this.setChildPWidths(recompute);
        };
        class_3.prototype.getUVQ = function(subbox, supbox) {
          if (subbox === void 0) {
            subbox = this.subChild.getOuterBBox();
          }
          if (supbox === void 0) {
            supbox = this.supChild.getOuterBBox();
          }
          var basebox = this.baseCore.getOuterBBox();
          if (this.UVQ)
            return this.UVQ;
          var tex = this.font.params;
          var t = 3 * tex.rule_thickness;
          var subscriptshift = this.length2em(this.node.attributes.get("subscriptshift"), tex.sub2);
          var drop = this.baseCharZero(basebox.d * this.baseScale + tex.sub_drop * subbox.rscale);
          var _a2 = __read([this.getU(), Math.max(drop, subscriptshift)], 2), u = _a2[0], v = _a2[1];
          var q = u - supbox.d * supbox.rscale - (subbox.h * subbox.rscale - v);
          if (q < t) {
            v += t - q;
            var p = 4 / 5 * tex.x_height - (u - supbox.d * supbox.rscale);
            if (p > 0) {
              u += p;
              v -= p;
            }
          }
          u = Math.max(this.length2em(this.node.attributes.get("superscriptshift"), u), u);
          v = Math.max(this.length2em(this.node.attributes.get("subscriptshift"), v), v);
          q = u - supbox.d * supbox.rscale - (subbox.h * subbox.rscale - v);
          this.UVQ = [u, -v, q];
          return this.UVQ;
        };
        return class_3;
      }(Base), _a.useIC = false, _a;
    }
    exports.CommonMsubsupMixin = CommonMsubsupMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/msubsup.js
var require_msubsup3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/msubsup.js"(exports) {
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
    exports.CHTMLmsubsup = exports.CHTMLmsup = exports.CHTMLmsub = void 0;
    var scriptbase_js_1 = require_scriptbase2();
    var msubsup_js_1 = require_msubsup2();
    var msubsup_js_2 = require_msubsup2();
    var msubsup_js_3 = require_msubsup2();
    var msubsup_js_4 = require_msubsup();
    var CHTMLmsub = function(_super) {
      __extends(CHTMLmsub2, _super);
      function CHTMLmsub2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmsub2.kind = msubsup_js_4.MmlMsub.prototype.kind;
      return CHTMLmsub2;
    }((0, msubsup_js_1.CommonMsubMixin)(scriptbase_js_1.CHTMLscriptbase));
    exports.CHTMLmsub = CHTMLmsub;
    var CHTMLmsup = function(_super) {
      __extends(CHTMLmsup2, _super);
      function CHTMLmsup2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmsup2.kind = msubsup_js_4.MmlMsup.prototype.kind;
      return CHTMLmsup2;
    }((0, msubsup_js_2.CommonMsupMixin)(scriptbase_js_1.CHTMLscriptbase));
    exports.CHTMLmsup = CHTMLmsup;
    var CHTMLmsubsup = function(_super) {
      __extends(CHTMLmsubsup2, _super);
      function CHTMLmsubsup2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmsubsup2.prototype.toCHTML = function(parent) {
        var adaptor = this.adaptor;
        var chtml = this.standardCHTMLnode(parent);
        var _a = __read([this.baseChild, this.supChild, this.subChild], 3), base = _a[0], sup = _a[1], sub = _a[2];
        var _b = __read(this.getUVQ(), 3), v = _b[1], q = _b[2];
        var style = { "vertical-align": this.em(v) };
        base.toCHTML(chtml);
        var stack = adaptor.append(chtml, this.html("mjx-script", { style }));
        sup.toCHTML(stack);
        adaptor.append(stack, this.html("mjx-spacer", { style: { "margin-top": this.em(q) } }));
        sub.toCHTML(stack);
        var ic = this.getAdjustedIc();
        if (ic) {
          adaptor.setStyle(sup.chtml, "marginLeft", this.em(ic / sup.bbox.rscale));
        }
        if (this.baseRemoveIc) {
          adaptor.setStyle(stack, "marginLeft", this.em(-this.baseIc));
        }
      };
      CHTMLmsubsup2.kind = msubsup_js_4.MmlMsubsup.prototype.kind;
      CHTMLmsubsup2.styles = {
        "mjx-script": {
          display: "inline-block",
          "padding-right": ".05em",
          "padding-left": ".033em"
        },
        "mjx-script > mjx-spacer": {
          display: "block"
        }
      };
      return CHTMLmsubsup2;
    }((0, msubsup_js_3.CommonMsubsupMixin)(scriptbase_js_1.CHTMLscriptbase));
    exports.CHTMLmsubsup = CHTMLmsubsup;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/munderover.js
var require_munderover2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/munderover.js"(exports) {
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
    exports.CommonMunderoverMixin = exports.CommonMoverMixin = exports.CommonMunderMixin = void 0;
    function CommonMunderMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.stretchChildren();
          return _this;
        }
        Object.defineProperty(class_1.prototype, "scriptChild", {
          get: function() {
            return this.childNodes[this.node.under];
          },
          enumerable: false,
          configurable: true
        });
        class_1.prototype.computeBBox = function(bbox, recompute) {
          if (recompute === void 0) {
            recompute = false;
          }
          if (this.hasMovableLimits()) {
            _super.prototype.computeBBox.call(this, bbox, recompute);
            return;
          }
          bbox.empty();
          var basebox = this.baseChild.getOuterBBox();
          var underbox = this.scriptChild.getOuterBBox();
          var v = this.getUnderKV(basebox, underbox)[1];
          var delta = this.isLineBelow ? 0 : this.getDelta(true);
          var _a = __read(this.getDeltaW([basebox, underbox], [0, -delta]), 2), bw = _a[0], uw = _a[1];
          bbox.combine(basebox, bw, 0);
          bbox.combine(underbox, uw, v);
          bbox.d += this.font.params.big_op_spacing5;
          bbox.clean();
          this.setChildPWidths(recompute);
        };
        return class_1;
      }(Base);
    }
    exports.CommonMunderMixin = CommonMunderMixin;
    function CommonMoverMixin(Base) {
      return function(_super) {
        __extends(class_2, _super);
        function class_2() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.stretchChildren();
          return _this;
        }
        Object.defineProperty(class_2.prototype, "scriptChild", {
          get: function() {
            return this.childNodes[this.node.over];
          },
          enumerable: false,
          configurable: true
        });
        class_2.prototype.computeBBox = function(bbox) {
          if (this.hasMovableLimits()) {
            _super.prototype.computeBBox.call(this, bbox);
            return;
          }
          bbox.empty();
          var basebox = this.baseChild.getOuterBBox();
          var overbox = this.scriptChild.getOuterBBox();
          if (this.node.attributes.get("accent")) {
            basebox.h = Math.max(basebox.h, this.font.params.x_height * basebox.scale);
          }
          var u = this.getOverKU(basebox, overbox)[1];
          var delta = this.isLineAbove ? 0 : this.getDelta();
          var _a = __read(this.getDeltaW([basebox, overbox], [0, delta]), 2), bw = _a[0], ow = _a[1];
          bbox.combine(basebox, bw, 0);
          bbox.combine(overbox, ow, u);
          bbox.h += this.font.params.big_op_spacing5;
          bbox.clean();
        };
        return class_2;
      }(Base);
    }
    exports.CommonMoverMixin = CommonMoverMixin;
    function CommonMunderoverMixin(Base) {
      return function(_super) {
        __extends(class_3, _super);
        function class_3() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.stretchChildren();
          return _this;
        }
        Object.defineProperty(class_3.prototype, "underChild", {
          get: function() {
            return this.childNodes[this.node.under];
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_3.prototype, "overChild", {
          get: function() {
            return this.childNodes[this.node.over];
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_3.prototype, "subChild", {
          get: function() {
            return this.underChild;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_3.prototype, "supChild", {
          get: function() {
            return this.overChild;
          },
          enumerable: false,
          configurable: true
        });
        class_3.prototype.computeBBox = function(bbox) {
          if (this.hasMovableLimits()) {
            _super.prototype.computeBBox.call(this, bbox);
            return;
          }
          bbox.empty();
          var overbox = this.overChild.getOuterBBox();
          var basebox = this.baseChild.getOuterBBox();
          var underbox = this.underChild.getOuterBBox();
          if (this.node.attributes.get("accent")) {
            basebox.h = Math.max(basebox.h, this.font.params.x_height * basebox.scale);
          }
          var u = this.getOverKU(basebox, overbox)[1];
          var v = this.getUnderKV(basebox, underbox)[1];
          var delta = this.getDelta();
          var _a = __read(this.getDeltaW([basebox, underbox, overbox], [0, this.isLineBelow ? 0 : -delta, this.isLineAbove ? 0 : delta]), 3), bw = _a[0], uw = _a[1], ow = _a[2];
          bbox.combine(basebox, bw, 0);
          bbox.combine(overbox, ow, u);
          bbox.combine(underbox, uw, v);
          var z = this.font.params.big_op_spacing5;
          bbox.h += z;
          bbox.d += z;
          bbox.clean();
        };
        return class_3;
      }(Base);
    }
    exports.CommonMunderoverMixin = CommonMunderoverMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/munderover.js
var require_munderover3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/munderover.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmunderover = exports.CHTMLmover = exports.CHTMLmunder = void 0;
    var msubsup_js_1 = require_msubsup3();
    var munderover_js_1 = require_munderover2();
    var munderover_js_2 = require_munderover2();
    var munderover_js_3 = require_munderover2();
    var munderover_js_4 = require_munderover();
    var CHTMLmunder = function(_super) {
      __extends(CHTMLmunder2, _super);
      function CHTMLmunder2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmunder2.prototype.toCHTML = function(parent) {
        if (this.hasMovableLimits()) {
          _super.prototype.toCHTML.call(this, parent);
          this.adaptor.setAttribute(this.chtml, "limits", "false");
          return;
        }
        this.chtml = this.standardCHTMLnode(parent);
        var base = this.adaptor.append(this.adaptor.append(this.chtml, this.html("mjx-row")), this.html("mjx-base"));
        var under = this.adaptor.append(this.adaptor.append(this.chtml, this.html("mjx-row")), this.html("mjx-under"));
        this.baseChild.toCHTML(base);
        this.scriptChild.toCHTML(under);
        var basebox = this.baseChild.getOuterBBox();
        var underbox = this.scriptChild.getOuterBBox();
        var k = this.getUnderKV(basebox, underbox)[0];
        var delta = this.isLineBelow ? 0 : this.getDelta(true);
        this.adaptor.setStyle(under, "paddingTop", this.em(k));
        this.setDeltaW([base, under], this.getDeltaW([basebox, underbox], [0, -delta]));
        this.adjustUnderDepth(under, underbox);
      };
      CHTMLmunder2.kind = munderover_js_4.MmlMunder.prototype.kind;
      CHTMLmunder2.styles = {
        "mjx-over": {
          "text-align": "left"
        },
        'mjx-munder:not([limits="false"])': {
          display: "inline-table"
        },
        "mjx-munder > mjx-row": {
          "text-align": "left"
        },
        "mjx-under": {
          "padding-bottom": ".1em"
        }
      };
      return CHTMLmunder2;
    }((0, munderover_js_1.CommonMunderMixin)(msubsup_js_1.CHTMLmsub));
    exports.CHTMLmunder = CHTMLmunder;
    var CHTMLmover = function(_super) {
      __extends(CHTMLmover2, _super);
      function CHTMLmover2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmover2.prototype.toCHTML = function(parent) {
        if (this.hasMovableLimits()) {
          _super.prototype.toCHTML.call(this, parent);
          this.adaptor.setAttribute(this.chtml, "limits", "false");
          return;
        }
        this.chtml = this.standardCHTMLnode(parent);
        var over = this.adaptor.append(this.chtml, this.html("mjx-over"));
        var base = this.adaptor.append(this.chtml, this.html("mjx-base"));
        this.scriptChild.toCHTML(over);
        this.baseChild.toCHTML(base);
        var overbox = this.scriptChild.getOuterBBox();
        var basebox = this.baseChild.getOuterBBox();
        this.adjustBaseHeight(base, basebox);
        var k = this.getOverKU(basebox, overbox)[0];
        var delta = this.isLineAbove ? 0 : this.getDelta();
        this.adaptor.setStyle(over, "paddingBottom", this.em(k));
        this.setDeltaW([base, over], this.getDeltaW([basebox, overbox], [0, delta]));
        this.adjustOverDepth(over, overbox);
      };
      CHTMLmover2.kind = munderover_js_4.MmlMover.prototype.kind;
      CHTMLmover2.styles = {
        'mjx-mover:not([limits="false"])': {
          "padding-top": ".1em"
        },
        'mjx-mover:not([limits="false"]) > *': {
          display: "block",
          "text-align": "left"
        }
      };
      return CHTMLmover2;
    }((0, munderover_js_2.CommonMoverMixin)(msubsup_js_1.CHTMLmsup));
    exports.CHTMLmover = CHTMLmover;
    var CHTMLmunderover = function(_super) {
      __extends(CHTMLmunderover2, _super);
      function CHTMLmunderover2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmunderover2.prototype.toCHTML = function(parent) {
        if (this.hasMovableLimits()) {
          _super.prototype.toCHTML.call(this, parent);
          this.adaptor.setAttribute(this.chtml, "limits", "false");
          return;
        }
        this.chtml = this.standardCHTMLnode(parent);
        var over = this.adaptor.append(this.chtml, this.html("mjx-over"));
        var table = this.adaptor.append(this.adaptor.append(this.chtml, this.html("mjx-box")), this.html("mjx-munder"));
        var base = this.adaptor.append(this.adaptor.append(table, this.html("mjx-row")), this.html("mjx-base"));
        var under = this.adaptor.append(this.adaptor.append(table, this.html("mjx-row")), this.html("mjx-under"));
        this.overChild.toCHTML(over);
        this.baseChild.toCHTML(base);
        this.underChild.toCHTML(under);
        var overbox = this.overChild.getOuterBBox();
        var basebox = this.baseChild.getOuterBBox();
        var underbox = this.underChild.getOuterBBox();
        this.adjustBaseHeight(base, basebox);
        var ok = this.getOverKU(basebox, overbox)[0];
        var uk = this.getUnderKV(basebox, underbox)[0];
        var delta = this.getDelta();
        this.adaptor.setStyle(over, "paddingBottom", this.em(ok));
        this.adaptor.setStyle(under, "paddingTop", this.em(uk));
        this.setDeltaW([base, under, over], this.getDeltaW([basebox, underbox, overbox], [0, this.isLineBelow ? 0 : -delta, this.isLineAbove ? 0 : delta]));
        this.adjustOverDepth(over, overbox);
        this.adjustUnderDepth(under, underbox);
      };
      CHTMLmunderover2.prototype.markUsed = function() {
        _super.prototype.markUsed.call(this);
        this.jax.wrapperUsage.add(msubsup_js_1.CHTMLmsubsup.kind);
      };
      CHTMLmunderover2.kind = munderover_js_4.MmlMunderover.prototype.kind;
      CHTMLmunderover2.styles = {
        'mjx-munderover:not([limits="false"])': {
          "padding-top": ".1em"
        },
        'mjx-munderover:not([limits="false"]) > *': {
          display: "block"
        }
      };
      return CHTMLmunderover2;
    }((0, munderover_js_3.CommonMunderoverMixin)(msubsup_js_1.CHTMLmsubsup));
    exports.CHTMLmunderover = CHTMLmunderover;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mmultiscripts.js
var require_mmultiscripts2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mmultiscripts.js"(exports) {
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
    exports.CommonMmultiscriptsMixin = exports.ScriptNames = exports.NextScript = void 0;
    var BBox_js_1 = require_BBox();
    exports.NextScript = {
      base: "subList",
      subList: "supList",
      supList: "subList",
      psubList: "psupList",
      psupList: "psubList"
    };
    exports.ScriptNames = ["sup", "sup", "psup", "psub"];
    function CommonMmultiscriptsMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.scriptData = null;
          _this.firstPrescript = 0;
          _this.getScriptData();
          return _this;
        }
        class_1.prototype.combinePrePost = function(pre, post) {
          var bbox = new BBox_js_1.BBox(pre);
          bbox.combine(post, 0, 0);
          return bbox;
        };
        class_1.prototype.computeBBox = function(bbox, recompute) {
          if (recompute === void 0) {
            recompute = false;
          }
          var scriptspace = this.font.params.scriptspace;
          var data = this.scriptData;
          var sub = this.combinePrePost(data.sub, data.psub);
          var sup = this.combinePrePost(data.sup, data.psup);
          var _a = __read(this.getUVQ(sub, sup), 2), u = _a[0], v = _a[1];
          bbox.empty();
          if (data.numPrescripts) {
            bbox.combine(data.psup, scriptspace, u);
            bbox.combine(data.psub, scriptspace, v);
          }
          bbox.append(data.base);
          if (data.numScripts) {
            var w = bbox.w;
            bbox.combine(data.sup, w, u);
            bbox.combine(data.sub, w, v);
            bbox.w += scriptspace;
          }
          bbox.clean();
          this.setChildPWidths(recompute);
        };
        class_1.prototype.getScriptData = function() {
          var data = this.scriptData = {
            base: null,
            sub: BBox_js_1.BBox.empty(),
            sup: BBox_js_1.BBox.empty(),
            psub: BBox_js_1.BBox.empty(),
            psup: BBox_js_1.BBox.empty(),
            numPrescripts: 0,
            numScripts: 0
          };
          var lists = this.getScriptBBoxLists();
          this.combineBBoxLists(data.sub, data.sup, lists.subList, lists.supList);
          this.combineBBoxLists(data.psub, data.psup, lists.psubList, lists.psupList);
          data.base = lists.base[0];
          data.numPrescripts = lists.psubList.length;
          data.numScripts = lists.subList.length;
        };
        class_1.prototype.getScriptBBoxLists = function() {
          var e_1, _a;
          var lists = {
            base: [],
            subList: [],
            supList: [],
            psubList: [],
            psupList: []
          };
          var script = "base";
          try {
            for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              if (child.node.isKind("mprescripts")) {
                script = "psubList";
              } else {
                lists[script].push(child.getOuterBBox());
                script = exports.NextScript[script];
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
          this.firstPrescript = lists.subList.length + lists.supList.length + 2;
          this.padLists(lists.subList, lists.supList);
          this.padLists(lists.psubList, lists.psupList);
          return lists;
        };
        class_1.prototype.padLists = function(list1, list2) {
          if (list1.length > list2.length) {
            list2.push(BBox_js_1.BBox.empty());
          }
        };
        class_1.prototype.combineBBoxLists = function(bbox1, bbox2, list1, list2) {
          for (var i = 0; i < list1.length; i++) {
            var _a = __read(this.getScaledWHD(list1[i]), 3), w1 = _a[0], h1 = _a[1], d1 = _a[2];
            var _b = __read(this.getScaledWHD(list2[i]), 3), w2 = _b[0], h2 = _b[1], d2 = _b[2];
            var w = Math.max(w1, w2);
            bbox1.w += w;
            bbox2.w += w;
            if (h1 > bbox1.h)
              bbox1.h = h1;
            if (d1 > bbox1.d)
              bbox1.d = d1;
            if (h2 > bbox2.h)
              bbox2.h = h2;
            if (d2 > bbox2.d)
              bbox2.d = d2;
          }
        };
        class_1.prototype.getScaledWHD = function(bbox) {
          var w = bbox.w, h = bbox.h, d = bbox.d, rscale = bbox.rscale;
          return [w * rscale, h * rscale, d * rscale];
        };
        class_1.prototype.getUVQ = function(subbox, supbox) {
          var _a;
          if (!this.UVQ) {
            var _b = __read([0, 0, 0], 3), u = _b[0], v = _b[1], q = _b[2];
            if (subbox.h === 0 && subbox.d === 0) {
              u = this.getU();
            } else if (supbox.h === 0 && supbox.d === 0) {
              u = -this.getV();
            } else {
              _a = __read(_super.prototype.getUVQ.call(this, subbox, supbox), 3), u = _a[0], v = _a[1], q = _a[2];
            }
            this.UVQ = [u, v, q];
          }
          return this.UVQ;
        };
        return class_1;
      }(Base);
    }
    exports.CommonMmultiscriptsMixin = CommonMmultiscriptsMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mmultiscripts.js
var require_mmultiscripts3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mmultiscripts.js"(exports) {
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
    exports.CHTMLmmultiscripts = void 0;
    var msubsup_js_1 = require_msubsup3();
    var mmultiscripts_js_1 = require_mmultiscripts2();
    var mmultiscripts_js_2 = require_mmultiscripts();
    var string_js_1 = require_string();
    var CHTMLmmultiscripts = function(_super) {
      __extends(CHTMLmmultiscripts2, _super);
      function CHTMLmmultiscripts2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmmultiscripts2.prototype.toCHTML = function(parent) {
        var chtml = this.standardCHTMLnode(parent);
        var data = this.scriptData;
        var scriptalign = this.node.getProperty("scriptalign") || "right left";
        var _a = __read((0, string_js_1.split)(scriptalign + " " + scriptalign), 2), preAlign = _a[0], postAlign = _a[1];
        var sub = this.combinePrePost(data.sub, data.psub);
        var sup = this.combinePrePost(data.sup, data.psup);
        var _b = __read(this.getUVQ(sub, sup), 2), u = _b[0], v = _b[1];
        if (data.numPrescripts) {
          var scripts = this.addScripts(u, -v, true, data.psub, data.psup, this.firstPrescript, data.numPrescripts);
          preAlign !== "right" && this.adaptor.setAttribute(scripts, "script-align", preAlign);
        }
        this.childNodes[0].toCHTML(chtml);
        if (data.numScripts) {
          var scripts = this.addScripts(u, -v, false, data.sub, data.sup, 1, data.numScripts);
          postAlign !== "left" && this.adaptor.setAttribute(scripts, "script-align", postAlign);
        }
      };
      CHTMLmmultiscripts2.prototype.addScripts = function(u, v, isPre, sub, sup, i, n) {
        var adaptor = this.adaptor;
        var q = u - sup.d + (v - sub.h);
        var U = u < 0 && v === 0 ? sub.h + u : u;
        var rowdef = q > 0 ? { style: { height: this.em(q) } } : {};
        var tabledef = U ? { style: { "vertical-align": this.em(U) } } : {};
        var supRow = this.html("mjx-row");
        var sepRow = this.html("mjx-row", rowdef);
        var subRow = this.html("mjx-row");
        var name = "mjx-" + (isPre ? "pre" : "") + "scripts";
        var m = i + 2 * n;
        while (i < m) {
          this.childNodes[i++].toCHTML(adaptor.append(subRow, this.html("mjx-cell")));
          this.childNodes[i++].toCHTML(adaptor.append(supRow, this.html("mjx-cell")));
        }
        return adaptor.append(this.chtml, this.html(name, tabledef, [supRow, sepRow, subRow]));
      };
      CHTMLmmultiscripts2.kind = mmultiscripts_js_2.MmlMmultiscripts.prototype.kind;
      CHTMLmmultiscripts2.styles = {
        "mjx-prescripts": {
          display: "inline-table",
          "padding-left": ".05em"
        },
        "mjx-scripts": {
          display: "inline-table",
          "padding-right": ".05em"
        },
        "mjx-prescripts > mjx-row > mjx-cell": {
          "text-align": "right"
        },
        '[script-align="left"] > mjx-row > mjx-cell': {
          "text-align": "left"
        },
        '[script-align="center"] > mjx-row > mjx-cell': {
          "text-align": "center"
        },
        '[script-align="right"] > mjx-row > mjx-cell': {
          "text-align": "right"
        }
      };
      return CHTMLmmultiscripts2;
    }((0, mmultiscripts_js_1.CommonMmultiscriptsMixin)(msubsup_js_1.CHTMLmsubsup));
    exports.CHTMLmmultiscripts = CHTMLmmultiscripts;
  }
});

// node_modules/mathjax-full/js/util/numeric.js
var require_numeric = __commonJS({
  "node_modules/mathjax-full/js/util/numeric.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.max = exports.sum = void 0;
    function sum(A) {
      return A.reduce(function(a, b) {
        return a + b;
      }, 0);
    }
    exports.sum = sum;
    function max(A) {
      return A.reduce(function(a, b) {
        return Math.max(a, b);
      }, 0);
    }
    exports.max = max;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mtable.js
var require_mtable2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mtable.js"(exports) {
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
    exports.CommonMtableMixin = void 0;
    var BBox_js_1 = require_BBox();
    var string_js_1 = require_string();
    var numeric_js_1 = require_numeric();
    function CommonMtableMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.numCols = 0;
          _this.numRows = 0;
          _this.data = null;
          _this.pwidthCells = [];
          _this.pWidth = 0;
          _this.numCols = (0, numeric_js_1.max)(_this.tableRows.map(function(row) {
            return row.numCells;
          }));
          _this.numRows = _this.childNodes.length;
          _this.hasLabels = _this.childNodes.reduce(function(value, row) {
            return value || row.node.isKind("mlabeledtr");
          }, false);
          _this.findContainer();
          _this.isTop = !_this.container || _this.container.node.isKind("math") && !_this.container.parent;
          if (_this.isTop) {
            _this.jax.table = _this;
          }
          _this.getPercentageWidth();
          var attributes = _this.node.attributes;
          _this.frame = attributes.get("frame") !== "none";
          _this.fLine = _this.frame && attributes.get("frame") ? 0.07 : 0;
          _this.fSpace = _this.frame ? _this.convertLengths(_this.getAttributeArray("framespacing")) : [0, 0];
          _this.cSpace = _this.convertLengths(_this.getColumnAttributes("columnspacing"));
          _this.rSpace = _this.convertLengths(_this.getRowAttributes("rowspacing"));
          _this.cLines = _this.getColumnAttributes("columnlines").map(function(x) {
            return x === "none" ? 0 : 0.07;
          });
          _this.rLines = _this.getRowAttributes("rowlines").map(function(x) {
            return x === "none" ? 0 : 0.07;
          });
          _this.cWidths = _this.getColumnWidths();
          _this.stretchRows();
          _this.stretchColumns();
          return _this;
        }
        Object.defineProperty(class_1.prototype, "tableRows", {
          get: function() {
            return this.childNodes;
          },
          enumerable: false,
          configurable: true
        });
        class_1.prototype.findContainer = function() {
          var node = this;
          var parent = node.parent;
          while (parent && (parent.node.notParent || parent.node.isKind("mrow"))) {
            node = parent;
            parent = parent.parent;
          }
          this.container = parent;
          this.containerI = node.node.childPosition();
        };
        class_1.prototype.getPercentageWidth = function() {
          if (this.hasLabels) {
            this.bbox.pwidth = BBox_js_1.BBox.fullWidth;
          } else {
            var width = this.node.attributes.get("width");
            if ((0, string_js_1.isPercent)(width)) {
              this.bbox.pwidth = width;
            }
          }
        };
        class_1.prototype.stretchRows = function() {
          var equal = this.node.attributes.get("equalrows");
          var HD = equal ? this.getEqualRowHeight() : 0;
          var _a = equal ? this.getTableData() : { H: [0], D: [0] }, H = _a.H, D = _a.D;
          var rows = this.tableRows;
          for (var i = 0; i < this.numRows; i++) {
            var hd = equal ? [(HD + H[i] - D[i]) / 2, (HD - H[i] + D[i]) / 2] : null;
            rows[i].stretchChildren(hd);
          }
        };
        class_1.prototype.stretchColumns = function() {
          for (var i = 0; i < this.numCols; i++) {
            var width = typeof this.cWidths[i] === "number" ? this.cWidths[i] : null;
            this.stretchColumn(i, width);
          }
        };
        class_1.prototype.stretchColumn = function(i, W) {
          var e_1, _a, e_2, _b, e_3, _c;
          var stretchy = [];
          try {
            for (var _d = __values(this.tableRows), _e = _d.next(); !_e.done; _e = _d.next()) {
              var row = _e.value;
              var cell = row.getChild(i);
              if (cell) {
                var child = cell.childNodes[0];
                if (child.stretch.dir === 0 && child.canStretch(2)) {
                  stretchy.push(child);
                }
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          var count = stretchy.length;
          var nodeCount = this.childNodes.length;
          if (count && nodeCount > 1) {
            if (W === null) {
              W = 0;
              var all = count > 1 && count === nodeCount;
              try {
                for (var _f = __values(this.tableRows), _g = _f.next(); !_g.done; _g = _f.next()) {
                  var row = _g.value;
                  var cell = row.getChild(i);
                  if (cell) {
                    var child = cell.childNodes[0];
                    var noStretch = child.stretch.dir === 0;
                    if (all || noStretch) {
                      var w = child.getBBox(noStretch).w;
                      if (w > W) {
                        W = w;
                      }
                    }
                  }
                }
              } catch (e_2_1) {
                e_2 = { error: e_2_1 };
              } finally {
                try {
                  if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                } finally {
                  if (e_2) throw e_2.error;
                }
              }
            }
            try {
              for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next(); !stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
                var child = stretchy_1_1.value;
                child.coreMO().getStretchedVariant([W]);
              }
            } catch (e_3_1) {
              e_3 = { error: e_3_1 };
            } finally {
              try {
                if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return)) _c.call(stretchy_1);
              } finally {
                if (e_3) throw e_3.error;
              }
            }
          }
        };
        class_1.prototype.getTableData = function() {
          if (this.data) {
            return this.data;
          }
          var H = new Array(this.numRows).fill(0);
          var D = new Array(this.numRows).fill(0);
          var W = new Array(this.numCols).fill(0);
          var NH = new Array(this.numRows);
          var ND = new Array(this.numRows);
          var LW = [0];
          var rows = this.tableRows;
          for (var j = 0; j < rows.length; j++) {
            var M = 0;
            var row = rows[j];
            var align = row.node.attributes.get("rowalign");
            for (var i = 0; i < row.numCells; i++) {
              var cell = row.getChild(i);
              M = this.updateHDW(cell, i, j, align, H, D, W, M);
              this.recordPWidthCell(cell, i);
            }
            NH[j] = H[j];
            ND[j] = D[j];
            if (row.labeled) {
              M = this.updateHDW(row.childNodes[0], 0, j, align, H, D, LW, M);
            }
            this.extendHD(j, H, D, M);
            this.extendHD(j, NH, ND, M);
          }
          var L = LW[0];
          this.data = { H, D, W, NH, ND, L };
          return this.data;
        };
        class_1.prototype.updateHDW = function(cell, i, j, align, H, D, W, M) {
          var _a = cell.getBBox(), h = _a.h, d = _a.d, w = _a.w;
          var scale = cell.parent.bbox.rscale;
          if (cell.parent.bbox.rscale !== 1) {
            h *= scale;
            d *= scale;
            w *= scale;
          }
          if (this.node.getProperty("useHeight")) {
            if (h < 0.75)
              h = 0.75;
            if (d < 0.25)
              d = 0.25;
          }
          var m = 0;
          align = cell.node.attributes.get("rowalign") || align;
          if (align !== "baseline" && align !== "axis") {
            m = h + d;
            h = d = 0;
          }
          if (h > H[j])
            H[j] = h;
          if (d > D[j])
            D[j] = d;
          if (m > M)
            M = m;
          if (W && w > W[i])
            W[i] = w;
          return M;
        };
        class_1.prototype.extendHD = function(i, H, D, M) {
          var d = (M - (H[i] + D[i])) / 2;
          if (d < 1e-5)
            return;
          H[i] += d;
          D[i] += d;
        };
        class_1.prototype.recordPWidthCell = function(cell, i) {
          if (cell.childNodes[0] && cell.childNodes[0].getBBox().pwidth) {
            this.pwidthCells.push([cell, i]);
          }
        };
        class_1.prototype.computeBBox = function(bbox, _recompute) {
          if (_recompute === void 0) {
            _recompute = false;
          }
          var _a = this.getTableData(), H = _a.H, D = _a.D;
          var height, width;
          if (this.node.attributes.get("equalrows")) {
            var HD = this.getEqualRowHeight();
            height = (0, numeric_js_1.sum)([].concat(this.rLines, this.rSpace)) + HD * this.numRows;
          } else {
            height = (0, numeric_js_1.sum)(H.concat(D, this.rLines, this.rSpace));
          }
          height += 2 * (this.fLine + this.fSpace[1]);
          var CW = this.getComputedWidths();
          width = (0, numeric_js_1.sum)(CW.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]);
          var w = this.node.attributes.get("width");
          if (w !== "auto") {
            width = Math.max(this.length2em(w, 0) + 2 * this.fLine, width);
          }
          var _b = __read(this.getBBoxHD(height), 2), h = _b[0], d = _b[1];
          bbox.h = h;
          bbox.d = d;
          bbox.w = width;
          var _c = __read(this.getBBoxLR(), 2), L = _c[0], R = _c[1];
          bbox.L = L;
          bbox.R = R;
          if (!(0, string_js_1.isPercent)(w)) {
            this.setColumnPWidths();
          }
        };
        class_1.prototype.setChildPWidths = function(_recompute, cwidth, _clear) {
          var width = this.node.attributes.get("width");
          if (!(0, string_js_1.isPercent)(width))
            return false;
          if (!this.hasLabels) {
            this.bbox.pwidth = "";
            this.container.bbox.pwidth = "";
          }
          var _a = this.bbox, w = _a.w, L = _a.L, R = _a.R;
          var labelInWidth = this.node.attributes.get("data-width-includes-label");
          var W = Math.max(w, this.length2em(width, Math.max(cwidth, L + w + R))) - (labelInWidth ? L + R : 0);
          var cols = this.node.attributes.get("equalcolumns") ? Array(this.numCols).fill(this.percent(1 / Math.max(1, this.numCols))) : this.getColumnAttributes("columnwidth", 0);
          this.cWidths = this.getColumnWidthsFixed(cols, W);
          var CW = this.getComputedWidths();
          this.pWidth = (0, numeric_js_1.sum)(CW.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]);
          if (this.isTop) {
            this.bbox.w = this.pWidth;
          }
          this.setColumnPWidths();
          if (this.pWidth !== w) {
            this.parent.invalidateBBox();
          }
          return this.pWidth !== w;
        };
        class_1.prototype.setColumnPWidths = function() {
          var e_4, _a;
          var W = this.cWidths;
          try {
            for (var _b = __values(this.pwidthCells), _c = _b.next(); !_c.done; _c = _b.next()) {
              var _d = __read(_c.value, 2), cell = _d[0], i = _d[1];
              if (cell.setChildPWidths(false, W[i])) {
                cell.invalidateBBox();
                cell.getBBox();
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
        };
        class_1.prototype.getBBoxHD = function(height) {
          var _a = __read(this.getAlignmentRow(), 2), align = _a[0], row = _a[1];
          if (row === null) {
            var a = this.font.params.axis_height;
            var h2 = height / 2;
            var HD = {
              top: [0, height],
              center: [h2, h2],
              bottom: [height, 0],
              baseline: [h2, h2],
              axis: [h2 + a, h2 - a]
            };
            return HD[align] || [h2, h2];
          } else {
            var y = this.getVerticalPosition(row, align);
            return [y, height - y];
          }
        };
        class_1.prototype.getBBoxLR = function() {
          if (this.hasLabels) {
            var attributes = this.node.attributes;
            var side = attributes.get("side");
            var _a = __read(this.getPadAlignShift(side), 2), pad = _a[0], align = _a[1];
            var labels = this.hasLabels && !!attributes.get("data-width-includes-label");
            if (labels && this.frame && this.fSpace[0]) {
              pad -= this.fSpace[0];
            }
            return align === "center" && !labels ? [pad, pad] : side === "left" ? [pad, 0] : [0, pad];
          }
          return [0, 0];
        };
        class_1.prototype.getPadAlignShift = function(side) {
          var L = this.getTableData().L;
          var sep = this.length2em(this.node.attributes.get("minlabelspacing"));
          var pad = L + sep;
          var _a = __read(this.styles == null ? ["", ""] : [this.styles.get("padding-left"), this.styles.get("padding-right")], 2), lpad = _a[0], rpad = _a[1];
          if (lpad || rpad) {
            pad = Math.max(pad, this.length2em(lpad || "0"), this.length2em(rpad || "0"));
          }
          var _b = __read(this.getAlignShift(), 2), align = _b[0], shift = _b[1];
          if (align === side) {
            shift = side === "left" ? Math.max(pad, shift) - pad : Math.min(-pad, shift) + pad;
          }
          return [pad, align, shift];
        };
        class_1.prototype.getAlignShift = function() {
          return this.isTop ? _super.prototype.getAlignShift.call(this) : [this.container.getChildAlign(this.containerI), 0];
        };
        class_1.prototype.getWidth = function() {
          return this.pWidth || this.getBBox().w;
        };
        class_1.prototype.getEqualRowHeight = function() {
          var _a = this.getTableData(), H = _a.H, D = _a.D;
          var HD = Array.from(H.keys()).map(function(i) {
            return H[i] + D[i];
          });
          return Math.max.apply(Math, HD);
        };
        class_1.prototype.getComputedWidths = function() {
          var _this = this;
          var W = this.getTableData().W;
          var CW = Array.from(W.keys()).map(function(i) {
            return typeof _this.cWidths[i] === "number" ? _this.cWidths[i] : W[i];
          });
          if (this.node.attributes.get("equalcolumns")) {
            CW = Array(CW.length).fill((0, numeric_js_1.max)(CW));
          }
          return CW;
        };
        class_1.prototype.getColumnWidths = function() {
          var width = this.node.attributes.get("width");
          if (this.node.attributes.get("equalcolumns")) {
            return this.getEqualColumns(width);
          }
          var swidths = this.getColumnAttributes("columnwidth", 0);
          if (width === "auto") {
            return this.getColumnWidthsAuto(swidths);
          }
          if ((0, string_js_1.isPercent)(width)) {
            return this.getColumnWidthsPercent(swidths);
          }
          return this.getColumnWidthsFixed(swidths, this.length2em(width));
        };
        class_1.prototype.getEqualColumns = function(width) {
          var n = Math.max(1, this.numCols);
          var cwidth;
          if (width === "auto") {
            var W = this.getTableData().W;
            cwidth = (0, numeric_js_1.max)(W);
          } else if ((0, string_js_1.isPercent)(width)) {
            cwidth = this.percent(1 / n);
          } else {
            var w = (0, numeric_js_1.sum)([].concat(this.cLines, this.cSpace)) + 2 * this.fSpace[0];
            cwidth = Math.max(0, this.length2em(width) - w) / n;
          }
          return Array(this.numCols).fill(cwidth);
        };
        class_1.prototype.getColumnWidthsAuto = function(swidths) {
          var _this = this;
          return swidths.map(function(x) {
            if (x === "auto" || x === "fit")
              return null;
            if ((0, string_js_1.isPercent)(x))
              return x;
            return _this.length2em(x);
          });
        };
        class_1.prototype.getColumnWidthsPercent = function(swidths) {
          var _this = this;
          var hasFit = swidths.indexOf("fit") >= 0;
          var W = (hasFit ? this.getTableData() : { W: null }).W;
          return Array.from(swidths.keys()).map(function(i) {
            var x = swidths[i];
            if (x === "fit")
              return null;
            if (x === "auto")
              return hasFit ? W[i] : null;
            if ((0, string_js_1.isPercent)(x))
              return x;
            return _this.length2em(x);
          });
        };
        class_1.prototype.getColumnWidthsFixed = function(swidths, width) {
          var _this = this;
          var indices = Array.from(swidths.keys());
          var fit = indices.filter(function(i) {
            return swidths[i] === "fit";
          });
          var auto = indices.filter(function(i) {
            return swidths[i] === "auto";
          });
          var n = fit.length || auto.length;
          var W = (n ? this.getTableData() : { W: null }).W;
          var cwidth = width - (0, numeric_js_1.sum)([].concat(this.cLines, this.cSpace)) - 2 * this.fSpace[0];
          var dw = cwidth;
          indices.forEach(function(i) {
            var x = swidths[i];
            dw -= x === "fit" || x === "auto" ? W[i] : _this.length2em(x, cwidth);
          });
          var fw = n && dw > 0 ? dw / n : 0;
          return indices.map(function(i) {
            var x = swidths[i];
            if (x === "fit")
              return W[i] + fw;
            if (x === "auto")
              return W[i] + (fit.length === 0 ? fw : 0);
            return _this.length2em(x, cwidth);
          });
        };
        class_1.prototype.getVerticalPosition = function(i, align) {
          var equal = this.node.attributes.get("equalrows");
          var _a = this.getTableData(), H = _a.H, D = _a.D;
          var HD = equal ? this.getEqualRowHeight() : 0;
          var space = this.getRowHalfSpacing();
          var y = this.fLine;
          for (var j = 0; j < i; j++) {
            y += space[j] + (equal ? HD : H[j] + D[j]) + space[j + 1] + this.rLines[j];
          }
          var _b = __read(equal ? [(HD + H[i] - D[i]) / 2, (HD - H[i] + D[i]) / 2] : [H[i], D[i]], 2), h = _b[0], d = _b[1];
          var offset = {
            top: 0,
            center: space[i] + (h + d) / 2,
            bottom: space[i] + h + d + space[i + 1],
            baseline: space[i] + h,
            axis: space[i] + h - 0.25
          };
          y += offset[align] || 0;
          return y;
        };
        class_1.prototype.getEmHalfSpacing = function(fspace, space, scale) {
          if (scale === void 0) {
            scale = 1;
          }
          var fspaceEm = this.em(fspace * scale);
          var spaceEm = this.addEm(space, 2 / scale);
          spaceEm.unshift(fspaceEm);
          spaceEm.push(fspaceEm);
          return spaceEm;
        };
        class_1.prototype.getRowHalfSpacing = function() {
          var space = this.rSpace.map(function(x) {
            return x / 2;
          });
          space.unshift(this.fSpace[1]);
          space.push(this.fSpace[1]);
          return space;
        };
        class_1.prototype.getColumnHalfSpacing = function() {
          var space = this.cSpace.map(function(x) {
            return x / 2;
          });
          space.unshift(this.fSpace[0]);
          space.push(this.fSpace[0]);
          return space;
        };
        class_1.prototype.getAlignmentRow = function() {
          var _a = __read((0, string_js_1.split)(this.node.attributes.get("align")), 2), align = _a[0], row = _a[1];
          if (row == null)
            return [align, null];
          var i = parseInt(row);
          if (i < 0)
            i += this.numRows + 1;
          return [align, i < 1 || i > this.numRows ? null : i - 1];
        };
        class_1.prototype.getColumnAttributes = function(name, i) {
          if (i === void 0) {
            i = 1;
          }
          var n = this.numCols - i;
          var columns = this.getAttributeArray(name);
          if (columns.length === 0)
            return null;
          while (columns.length < n) {
            columns.push(columns[columns.length - 1]);
          }
          if (columns.length > n) {
            columns.splice(n);
          }
          return columns;
        };
        class_1.prototype.getRowAttributes = function(name, i) {
          if (i === void 0) {
            i = 1;
          }
          var n = this.numRows - i;
          var rows = this.getAttributeArray(name);
          if (rows.length === 0)
            return null;
          while (rows.length < n) {
            rows.push(rows[rows.length - 1]);
          }
          if (rows.length > n) {
            rows.splice(n);
          }
          return rows;
        };
        class_1.prototype.getAttributeArray = function(name) {
          var value = this.node.attributes.get(name);
          if (!value)
            return [this.node.attributes.getDefault(name)];
          return (0, string_js_1.split)(value);
        };
        class_1.prototype.addEm = function(list, n) {
          var _this = this;
          if (n === void 0) {
            n = 1;
          }
          if (!list)
            return null;
          return list.map(function(x) {
            return _this.em(x / n);
          });
        };
        class_1.prototype.convertLengths = function(list) {
          var _this = this;
          if (!list)
            return null;
          return list.map(function(x) {
            return _this.length2em(x);
          });
        };
        return class_1;
      }(Base);
    }
    exports.CommonMtableMixin = CommonMtableMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mtable.js
var require_mtable3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mtable.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmtable = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mtable_js_1 = require_mtable2();
    var mtable_js_2 = require_mtable();
    var string_js_1 = require_string();
    var CHTMLmtable = function(_super) {
      __extends(CHTMLmtable2, _super);
      function CHTMLmtable2(factory, node, parent) {
        if (parent === void 0) {
          parent = null;
        }
        var _this = _super.call(this, factory, node, parent) || this;
        _this.itable = _this.html("mjx-itable");
        _this.labels = _this.html("mjx-itable");
        return _this;
      }
      CHTMLmtable2.prototype.getAlignShift = function() {
        var data = _super.prototype.getAlignShift.call(this);
        if (!this.isTop) {
          data[1] = 0;
        }
        return data;
      };
      CHTMLmtable2.prototype.toCHTML = function(parent) {
        var e_1, _a;
        var chtml = this.standardCHTMLnode(parent);
        this.adaptor.append(chtml, this.html("mjx-table", {}, [this.itable]));
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            child.toCHTML(this.itable);
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
        this.padRows();
        this.handleColumnSpacing();
        this.handleColumnLines();
        this.handleColumnWidths();
        this.handleRowSpacing();
        this.handleRowLines();
        this.handleRowHeights();
        this.handleFrame();
        this.handleWidth();
        this.handleLabels();
        this.handleAlign();
        this.handleJustify();
        this.shiftColor();
      };
      CHTMLmtable2.prototype.shiftColor = function() {
        var adaptor = this.adaptor;
        var color = adaptor.getStyle(this.chtml, "backgroundColor");
        if (color) {
          adaptor.setStyle(this.chtml, "backgroundColor", "");
          adaptor.setStyle(this.itable, "backgroundColor", color);
        }
      };
      CHTMLmtable2.prototype.padRows = function() {
        var e_2, _a;
        var adaptor = this.adaptor;
        try {
          for (var _b = __values(adaptor.childNodes(this.itable)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var row = _c.value;
            while (adaptor.childNodes(row).length < this.numCols) {
              adaptor.append(row, this.html("mjx-mtd", { "extra": true }));
            }
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
      };
      CHTMLmtable2.prototype.handleColumnSpacing = function() {
        var e_3, _a, e_4, _b;
        var scale = this.childNodes[0] ? 1 / this.childNodes[0].getBBox().rscale : 1;
        var spacing = this.getEmHalfSpacing(this.fSpace[0], this.cSpace, scale);
        var frame = this.frame;
        try {
          for (var _c = __values(this.tableRows), _d = _c.next(); !_d.done; _d = _c.next()) {
            var row = _d.value;
            var i = 0;
            try {
              for (var _e = (e_4 = void 0, __values(row.tableCells)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var cell = _f.value;
                var lspace = spacing[i++];
                var rspace = spacing[i];
                var styleNode = cell ? cell.chtml : this.adaptor.childNodes(row.chtml)[i];
                if (i > 1 && lspace !== "0.4em" || frame && i === 1) {
                  this.adaptor.setStyle(styleNode, "paddingLeft", lspace);
                }
                if (i < this.numCols && rspace !== "0.4em" || frame && i === this.numCols) {
                  this.adaptor.setStyle(styleNode, "paddingRight", rspace);
                }
              }
            } catch (e_4_1) {
              e_4 = { error: e_4_1 };
            } finally {
              try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
              } finally {
                if (e_4) throw e_4.error;
              }
            }
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
      };
      CHTMLmtable2.prototype.handleColumnLines = function() {
        var e_5, _a, e_6, _b;
        if (this.node.attributes.get("columnlines") === "none")
          return;
        var lines = this.getColumnAttributes("columnlines");
        try {
          for (var _c = __values(this.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
            var row = _d.value;
            var i = 0;
            try {
              for (var _e = (e_6 = void 0, __values(this.adaptor.childNodes(row.chtml).slice(1))), _f = _e.next(); !_f.done; _f = _e.next()) {
                var cell = _f.value;
                var line = lines[i++];
                if (line === "none")
                  continue;
                this.adaptor.setStyle(cell, "borderLeft", ".07em " + line);
              }
            } catch (e_6_1) {
              e_6 = { error: e_6_1 };
            } finally {
              try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
              } finally {
                if (e_6) throw e_6.error;
              }
            }
          }
        } catch (e_5_1) {
          e_5 = { error: e_5_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
      };
      CHTMLmtable2.prototype.handleColumnWidths = function() {
        var e_7, _a, e_8, _b;
        try {
          for (var _c = __values(this.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
            var row = _d.value;
            var i = 0;
            try {
              for (var _e = (e_8 = void 0, __values(this.adaptor.childNodes(row.chtml))), _f = _e.next(); !_f.done; _f = _e.next()) {
                var cell = _f.value;
                var w = this.cWidths[i++];
                if (w !== null) {
                  var width = typeof w === "number" ? this.em(w) : w;
                  this.adaptor.setStyle(cell, "width", width);
                  this.adaptor.setStyle(cell, "maxWidth", width);
                  this.adaptor.setStyle(cell, "minWidth", width);
                }
              }
            } catch (e_8_1) {
              e_8 = { error: e_8_1 };
            } finally {
              try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
              } finally {
                if (e_8) throw e_8.error;
              }
            }
          }
        } catch (e_7_1) {
          e_7 = { error: e_7_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
      };
      CHTMLmtable2.prototype.handleRowSpacing = function() {
        var e_9, _a, e_10, _b;
        var scale = this.childNodes[0] ? 1 / this.childNodes[0].getBBox().rscale : 1;
        var spacing = this.getEmHalfSpacing(this.fSpace[1], this.rSpace, scale);
        var frame = this.frame;
        var i = 0;
        try {
          for (var _c = __values(this.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
            var row = _d.value;
            var tspace = spacing[i++];
            var bspace = spacing[i];
            try {
              for (var _e = (e_10 = void 0, __values(row.childNodes)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var cell = _f.value;
                if (i > 1 && tspace !== "0.215em" || frame && i === 1) {
                  this.adaptor.setStyle(cell.chtml, "paddingTop", tspace);
                }
                if (i < this.numRows && bspace !== "0.215em" || frame && i === this.numRows) {
                  this.adaptor.setStyle(cell.chtml, "paddingBottom", bspace);
                }
              }
            } catch (e_10_1) {
              e_10 = { error: e_10_1 };
            } finally {
              try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
              } finally {
                if (e_10) throw e_10.error;
              }
            }
          }
        } catch (e_9_1) {
          e_9 = { error: e_9_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_9) throw e_9.error;
          }
        }
      };
      CHTMLmtable2.prototype.handleRowLines = function() {
        var e_11, _a, e_12, _b;
        if (this.node.attributes.get("rowlines") === "none")
          return;
        var lines = this.getRowAttributes("rowlines");
        var i = 0;
        try {
          for (var _c = __values(this.childNodes.slice(1)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var row = _d.value;
            var line = lines[i++];
            if (line === "none")
              continue;
            try {
              for (var _e = (e_12 = void 0, __values(this.adaptor.childNodes(row.chtml))), _f = _e.next(); !_f.done; _f = _e.next()) {
                var cell = _f.value;
                this.adaptor.setStyle(cell, "borderTop", ".07em " + line);
              }
            } catch (e_12_1) {
              e_12 = { error: e_12_1 };
            } finally {
              try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
              } finally {
                if (e_12) throw e_12.error;
              }
            }
          }
        } catch (e_11_1) {
          e_11 = { error: e_11_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_11) throw e_11.error;
          }
        }
      };
      CHTMLmtable2.prototype.handleRowHeights = function() {
        if (this.node.attributes.get("equalrows")) {
          this.handleEqualRows();
        }
      };
      CHTMLmtable2.prototype.handleEqualRows = function() {
        var space = this.getRowHalfSpacing();
        var _a = this.getTableData(), H = _a.H, D = _a.D, NH = _a.NH, ND = _a.ND;
        var HD = this.getEqualRowHeight();
        for (var i = 0; i < this.numRows; i++) {
          var row = this.childNodes[i];
          this.setRowHeight(row, HD + space[i] + space[i + 1] + this.rLines[i]);
          if (HD !== NH[i] + ND[i]) {
            this.setRowBaseline(row, HD, (HD - H[i] + D[i]) / 2);
          }
        }
      };
      CHTMLmtable2.prototype.setRowHeight = function(row, HD) {
        this.adaptor.setStyle(row.chtml, "height", this.em(HD));
      };
      CHTMLmtable2.prototype.setRowBaseline = function(row, HD, D) {
        var e_13, _a;
        var ralign = row.node.attributes.get("rowalign");
        try {
          for (var _b = __values(row.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var cell = _c.value;
            if (this.setCellBaseline(cell, ralign, HD, D))
              break;
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
      };
      CHTMLmtable2.prototype.setCellBaseline = function(cell, ralign, HD, D) {
        var calign = cell.node.attributes.get("rowalign");
        if (calign === "baseline" || calign === "axis") {
          var adaptor = this.adaptor;
          var child = adaptor.lastChild(cell.chtml);
          adaptor.setStyle(child, "height", this.em(HD));
          adaptor.setStyle(child, "verticalAlign", this.em(-D));
          var row = cell.parent;
          if ((!row.node.isKind("mlabeledtr") || cell !== row.childNodes[0]) && (ralign === "baseline" || ralign === "axis")) {
            return true;
          }
        }
        return false;
      };
      CHTMLmtable2.prototype.handleFrame = function() {
        if (this.frame && this.fLine) {
          this.adaptor.setStyle(this.itable, "border", ".07em " + this.node.attributes.get("frame"));
        }
      };
      CHTMLmtable2.prototype.handleWidth = function() {
        var adaptor = this.adaptor;
        var _a = this.getBBox(), w = _a.w, L = _a.L, R = _a.R;
        adaptor.setStyle(this.chtml, "minWidth", this.em(L + w + R));
        var W = this.node.attributes.get("width");
        if ((0, string_js_1.isPercent)(W)) {
          adaptor.setStyle(this.chtml, "width", "");
          adaptor.setAttribute(this.chtml, "width", "full");
        } else if (!this.hasLabels) {
          if (W === "auto")
            return;
          W = this.em(this.length2em(W) + 2 * this.fLine);
        }
        var table = adaptor.firstChild(this.chtml);
        adaptor.setStyle(table, "width", W);
        adaptor.setStyle(table, "minWidth", this.em(w));
        if (L || R) {
          adaptor.setStyle(this.chtml, "margin", "");
          var style = this.node.attributes.get("data-width-includes-label") ? "padding" : "margin";
          if (L === R) {
            adaptor.setStyle(table, style, "0 " + this.em(R));
          } else {
            adaptor.setStyle(table, style, "0 " + this.em(R) + " 0 " + this.em(L));
          }
        }
        adaptor.setAttribute(this.itable, "width", "full");
      };
      CHTMLmtable2.prototype.handleAlign = function() {
        var _a = __read(this.getAlignmentRow(), 2), align = _a[0], row = _a[1];
        if (row === null) {
          if (align !== "axis") {
            this.adaptor.setAttribute(this.chtml, "align", align);
          }
        } else {
          var y = this.getVerticalPosition(row, align);
          this.adaptor.setAttribute(this.chtml, "align", "top");
          this.adaptor.setStyle(this.chtml, "verticalAlign", this.em(y));
        }
      };
      CHTMLmtable2.prototype.handleJustify = function() {
        var align = this.getAlignShift()[0];
        if (align !== "center") {
          this.adaptor.setAttribute(this.chtml, "justify", align);
        }
      };
      CHTMLmtable2.prototype.handleLabels = function() {
        if (!this.hasLabels)
          return;
        var labels = this.labels;
        var attributes = this.node.attributes;
        var adaptor = this.adaptor;
        var side = attributes.get("side");
        adaptor.setAttribute(this.chtml, "side", side);
        adaptor.setAttribute(labels, "align", side);
        adaptor.setStyle(labels, side, "0");
        var _a = __read(this.addLabelPadding(side), 2), align = _a[0], shift = _a[1];
        if (shift) {
          var table = adaptor.firstChild(this.chtml);
          this.setIndent(table, align, shift);
        }
        this.updateRowHeights();
        this.addLabelSpacing();
      };
      CHTMLmtable2.prototype.addLabelPadding = function(side) {
        var _a = __read(this.getPadAlignShift(side), 3), align = _a[1], shift = _a[2];
        var styles = {};
        if (side === "right" && !this.node.attributes.get("data-width-includes-label")) {
          var W = this.node.attributes.get("width");
          var _b = this.getBBox(), w = _b.w, L = _b.L, R = _b.R;
          styles.style = {
            width: (0, string_js_1.isPercent)(W) ? "calc(" + W + " + " + this.em(L + R) + ")" : this.em(L + w + R)
          };
        }
        this.adaptor.append(this.chtml, this.html("mjx-labels", styles, [this.labels]));
        return [align, shift];
      };
      CHTMLmtable2.prototype.updateRowHeights = function() {
        var _a = this.getTableData(), H = _a.H, D = _a.D, NH = _a.NH, ND = _a.ND;
        var space = this.getRowHalfSpacing();
        for (var i = 0; i < this.numRows; i++) {
          var row = this.childNodes[i];
          this.setRowHeight(row, H[i] + D[i] + space[i] + space[i + 1] + this.rLines[i]);
          if (H[i] !== NH[i] || D[i] !== ND[i]) {
            this.setRowBaseline(row, H[i] + D[i], D[i]);
          } else if (row.node.isKind("mlabeledtr")) {
            this.setCellBaseline(row.childNodes[0], "", H[i] + D[i], D[i]);
          }
        }
      };
      CHTMLmtable2.prototype.addLabelSpacing = function() {
        var adaptor = this.adaptor;
        var equal = this.node.attributes.get("equalrows");
        var _a = this.getTableData(), H = _a.H, D = _a.D;
        var HD = equal ? this.getEqualRowHeight() : 0;
        var space = this.getRowHalfSpacing();
        var h = this.fLine;
        var current = adaptor.firstChild(this.labels);
        for (var i = 0; i < this.numRows; i++) {
          var row = this.childNodes[i];
          if (row.node.isKind("mlabeledtr")) {
            h && adaptor.insert(this.html("mjx-mtr", { style: { height: this.em(h) } }), current);
            adaptor.setStyle(current, "height", this.em((equal ? HD : H[i] + D[i]) + space[i] + space[i + 1]));
            current = adaptor.next(current);
            h = this.rLines[i];
          } else {
            h += space[i] + (equal ? HD : H[i] + D[i]) + space[i + 1] + this.rLines[i];
          }
        }
      };
      CHTMLmtable2.kind = mtable_js_2.MmlMtable.prototype.kind;
      CHTMLmtable2.styles = {
        "mjx-mtable": {
          "vertical-align": ".25em",
          "text-align": "center",
          "position": "relative",
          "box-sizing": "border-box",
          "border-spacing": 0,
          "border-collapse": "collapse"
        },
        'mjx-mstyle[size="s"] mjx-mtable': {
          "vertical-align": ".354em"
        },
        "mjx-labels": {
          position: "absolute",
          left: 0,
          top: 0
        },
        "mjx-table": {
          "display": "inline-block",
          "vertical-align": "-.5ex",
          "box-sizing": "border-box"
        },
        "mjx-table > mjx-itable": {
          "vertical-align": "middle",
          "text-align": "left",
          "box-sizing": "border-box"
        },
        "mjx-labels > mjx-itable": {
          position: "absolute",
          top: 0
        },
        'mjx-mtable[justify="left"]': {
          "text-align": "left"
        },
        'mjx-mtable[justify="right"]': {
          "text-align": "right"
        },
        'mjx-mtable[justify="left"][side="left"]': {
          "padding-right": "0 ! important"
        },
        'mjx-mtable[justify="left"][side="right"]': {
          "padding-left": "0 ! important"
        },
        'mjx-mtable[justify="right"][side="left"]': {
          "padding-right": "0 ! important"
        },
        'mjx-mtable[justify="right"][side="right"]': {
          "padding-left": "0 ! important"
        },
        "mjx-mtable[align]": {
          "vertical-align": "baseline"
        },
        'mjx-mtable[align="top"] > mjx-table': {
          "vertical-align": "top"
        },
        'mjx-mtable[align="bottom"] > mjx-table': {
          "vertical-align": "bottom"
        },
        'mjx-mtable[side="right"] mjx-labels': {
          "min-width": "100%"
        }
      };
      return CHTMLmtable2;
    }((0, mtable_js_1.CommonMtableMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmtable = CHTMLmtable;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mtr.js
var require_mtr2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mtr.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonMlabeledtrMixin = exports.CommonMtrMixin = void 0;
    function CommonMtrMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_1.prototype, "fixesPWidth", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_1.prototype, "numCells", {
          get: function() {
            return this.childNodes.length;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_1.prototype, "labeled", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_1.prototype, "tableCells", {
          get: function() {
            return this.childNodes;
          },
          enumerable: false,
          configurable: true
        });
        class_1.prototype.getChild = function(i) {
          return this.childNodes[i];
        };
        class_1.prototype.getChildBBoxes = function() {
          return this.childNodes.map(function(cell) {
            return cell.getBBox();
          });
        };
        class_1.prototype.stretchChildren = function(HD) {
          var e_1, _a, e_2, _b, e_3, _c;
          if (HD === void 0) {
            HD = null;
          }
          var stretchy = [];
          var children = this.labeled ? this.childNodes.slice(1) : this.childNodes;
          try {
            for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
              var mtd = children_1_1.value;
              var child = mtd.childNodes[0];
              if (child.canStretch(1)) {
                stretchy.push(child);
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          var count = stretchy.length;
          var nodeCount = this.childNodes.length;
          if (count && nodeCount > 1) {
            if (HD === null) {
              var H = 0, D = 0;
              var all = count > 1 && count === nodeCount;
              try {
                for (var children_2 = __values(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
                  var mtd = children_2_1.value;
                  var child = mtd.childNodes[0];
                  var noStretch = child.stretch.dir === 0;
                  if (all || noStretch) {
                    var _d = child.getBBox(noStretch), h = _d.h, d = _d.d;
                    if (h > H) {
                      H = h;
                    }
                    if (d > D) {
                      D = d;
                    }
                  }
                }
              } catch (e_2_1) {
                e_2 = { error: e_2_1 };
              } finally {
                try {
                  if (children_2_1 && !children_2_1.done && (_b = children_2.return)) _b.call(children_2);
                } finally {
                  if (e_2) throw e_2.error;
                }
              }
              HD = [H, D];
            }
            try {
              for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next(); !stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
                var child = stretchy_1_1.value;
                child.coreMO().getStretchedVariant(HD);
              }
            } catch (e_3_1) {
              e_3 = { error: e_3_1 };
            } finally {
              try {
                if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return)) _c.call(stretchy_1);
              } finally {
                if (e_3) throw e_3.error;
              }
            }
          }
        };
        return class_1;
      }(Base);
    }
    exports.CommonMtrMixin = CommonMtrMixin;
    function CommonMlabeledtrMixin(Base) {
      return function(_super) {
        __extends(class_2, _super);
        function class_2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_2.prototype, "numCells", {
          get: function() {
            return Math.max(0, this.childNodes.length - 1);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_2.prototype, "labeled", {
          get: function() {
            return true;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(class_2.prototype, "tableCells", {
          get: function() {
            return this.childNodes.slice(1);
          },
          enumerable: false,
          configurable: true
        });
        class_2.prototype.getChild = function(i) {
          return this.childNodes[i + 1];
        };
        class_2.prototype.getChildBBoxes = function() {
          return this.childNodes.slice(1).map(function(cell) {
            return cell.getBBox();
          });
        };
        return class_2;
      }(Base);
    }
    exports.CommonMlabeledtrMixin = CommonMlabeledtrMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mtr.js
var require_mtr3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mtr.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmlabeledtr = exports.CHTMLmtr = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mtr_js_1 = require_mtr2();
    var mtr_js_2 = require_mtr2();
    var mtr_js_3 = require_mtr();
    var CHTMLmtr = function(_super) {
      __extends(CHTMLmtr2, _super);
      function CHTMLmtr2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmtr2.prototype.toCHTML = function(parent) {
        _super.prototype.toCHTML.call(this, parent);
        var align = this.node.attributes.get("rowalign");
        if (align !== "baseline") {
          this.adaptor.setAttribute(this.chtml, "rowalign", align);
        }
      };
      CHTMLmtr2.kind = mtr_js_3.MmlMtr.prototype.kind;
      CHTMLmtr2.styles = {
        "mjx-mtr": {
          display: "table-row"
        },
        'mjx-mtr[rowalign="top"] > mjx-mtd': {
          "vertical-align": "top"
        },
        'mjx-mtr[rowalign="center"] > mjx-mtd': {
          "vertical-align": "middle"
        },
        'mjx-mtr[rowalign="bottom"] > mjx-mtd': {
          "vertical-align": "bottom"
        },
        'mjx-mtr[rowalign="baseline"] > mjx-mtd': {
          "vertical-align": "baseline"
        },
        'mjx-mtr[rowalign="axis"] > mjx-mtd': {
          "vertical-align": ".25em"
        }
      };
      return CHTMLmtr2;
    }((0, mtr_js_1.CommonMtrMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmtr = CHTMLmtr;
    var CHTMLmlabeledtr = function(_super) {
      __extends(CHTMLmlabeledtr2, _super);
      function CHTMLmlabeledtr2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmlabeledtr2.prototype.toCHTML = function(parent) {
        _super.prototype.toCHTML.call(this, parent);
        var child = this.adaptor.firstChild(this.chtml);
        if (child) {
          this.adaptor.remove(child);
          var align = this.node.attributes.get("rowalign");
          var attr = align !== "baseline" && align !== "axis" ? { rowalign: align } : {};
          var row = this.html("mjx-mtr", attr, [child]);
          this.adaptor.append(this.parent.labels, row);
        }
      };
      CHTMLmlabeledtr2.prototype.markUsed = function() {
        _super.prototype.markUsed.call(this);
        this.jax.wrapperUsage.add(CHTMLmtr.kind);
      };
      CHTMLmlabeledtr2.kind = mtr_js_3.MmlMlabeledtr.prototype.kind;
      CHTMLmlabeledtr2.styles = {
        "mjx-mlabeledtr": {
          display: "table-row"
        },
        'mjx-mlabeledtr[rowalign="top"] > mjx-mtd': {
          "vertical-align": "top"
        },
        'mjx-mlabeledtr[rowalign="center"] > mjx-mtd': {
          "vertical-align": "middle"
        },
        'mjx-mlabeledtr[rowalign="bottom"] > mjx-mtd': {
          "vertical-align": "bottom"
        },
        'mjx-mlabeledtr[rowalign="baseline"] > mjx-mtd': {
          "vertical-align": "baseline"
        },
        'mjx-mlabeledtr[rowalign="axis"] > mjx-mtd': {
          "vertical-align": ".25em"
        }
      };
      return CHTMLmlabeledtr2;
    }((0, mtr_js_2.CommonMlabeledtrMixin)(CHTMLmtr));
    exports.CHTMLmlabeledtr = CHTMLmlabeledtr;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mtd.js
var require_mtd2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mtd.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonMtdMixin = void 0;
    function CommonMtdMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_1.prototype, "fixesPWidth", {
          get: function() {
            return false;
          },
          enumerable: false,
          configurable: true
        });
        class_1.prototype.invalidateBBox = function() {
          this.bboxComputed = false;
        };
        class_1.prototype.getWrapWidth = function(_j) {
          var table = this.parent.parent;
          var row = this.parent;
          var i = this.node.childPosition() - (row.labeled ? 1 : 0);
          return typeof table.cWidths[i] === "number" ? table.cWidths[i] : table.getTableData().W[i];
        };
        class_1.prototype.getChildAlign = function(_i) {
          return this.node.attributes.get("columnalign");
        };
        return class_1;
      }(Base);
    }
    exports.CommonMtdMixin = CommonMtdMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mtd.js
var require_mtd3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mtd.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmtd = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mtd_js_1 = require_mtd2();
    var mtd_js_2 = require_mtd();
    var CHTMLmtd = function(_super) {
      __extends(CHTMLmtd2, _super);
      function CHTMLmtd2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmtd2.prototype.toCHTML = function(parent) {
        _super.prototype.toCHTML.call(this, parent);
        var ralign = this.node.attributes.get("rowalign");
        var calign = this.node.attributes.get("columnalign");
        var palign = this.parent.node.attributes.get("rowalign");
        if (ralign !== palign) {
          this.adaptor.setAttribute(this.chtml, "rowalign", ralign);
        }
        if (calign !== "center" && (this.parent.kind !== "mlabeledtr" || this !== this.parent.childNodes[0] || calign !== this.parent.parent.node.attributes.get("side"))) {
          this.adaptor.setStyle(this.chtml, "textAlign", calign);
        }
        if (this.parent.parent.node.getProperty("useHeight")) {
          this.adaptor.append(this.chtml, this.html("mjx-tstrut"));
        }
      };
      CHTMLmtd2.kind = mtd_js_2.MmlMtd.prototype.kind;
      CHTMLmtd2.styles = {
        "mjx-mtd": {
          display: "table-cell",
          "text-align": "center",
          "padding": ".215em .4em"
        },
        "mjx-mtd:first-child": {
          "padding-left": 0
        },
        "mjx-mtd:last-child": {
          "padding-right": 0
        },
        "mjx-mtable > * > mjx-itable > *:first-child > mjx-mtd": {
          "padding-top": 0
        },
        "mjx-mtable > * > mjx-itable > *:last-child > mjx-mtd": {
          "padding-bottom": 0
        },
        "mjx-tstrut": {
          display: "inline-block",
          height: "1em",
          "vertical-align": "-.25em"
        },
        'mjx-labels[align="left"] > mjx-mtr > mjx-mtd': {
          "text-align": "left"
        },
        'mjx-labels[align="right"] > mjx-mtr > mjx-mtd': {
          "text-align": "right"
        },
        "mjx-mtd[extra]": {
          padding: 0
        },
        'mjx-mtd[rowalign="top"]': {
          "vertical-align": "top"
        },
        'mjx-mtd[rowalign="center"]': {
          "vertical-align": "middle"
        },
        'mjx-mtd[rowalign="bottom"]': {
          "vertical-align": "bottom"
        },
        'mjx-mtd[rowalign="baseline"]': {
          "vertical-align": "baseline"
        },
        'mjx-mtd[rowalign="axis"]': {
          "vertical-align": ".25em"
        }
      };
      return CHTMLmtd2;
    }((0, mtd_js_1.CommonMtdMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmtd = CHTMLmtd;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/maction.js
var require_maction2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/maction.js"(exports) {
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
    exports.CommonMactionMixin = exports.TooltipData = void 0;
    var string_js_1 = require_string();
    exports.TooltipData = {
      dx: ".2em",
      dy: ".1em",
      postDelay: 600,
      clearDelay: 100,
      hoverTimer: /* @__PURE__ */ new Map(),
      clearTimer: /* @__PURE__ */ new Map(),
      stopTimers: function(node, data) {
        if (data.clearTimer.has(node)) {
          clearTimeout(data.clearTimer.get(node));
          data.clearTimer.delete(node);
        }
        if (data.hoverTimer.has(node)) {
          clearTimeout(data.hoverTimer.get(node));
          data.hoverTimer.delete(node);
        }
      }
    };
    function CommonMactionMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          var actions = _this.constructor.actions;
          var action = _this.node.attributes.get("actiontype");
          var _a = __read(actions.get(action) || [function(_node, _data) {
          }, {}], 2), handler = _a[0], data = _a[1];
          _this.action = handler;
          _this.data = data;
          _this.getParameters();
          return _this;
        }
        Object.defineProperty(class_1.prototype, "selected", {
          get: function() {
            var selection = this.node.attributes.get("selection");
            var i = Math.max(1, Math.min(this.childNodes.length, selection)) - 1;
            return this.childNodes[i] || this.wrap(this.node.selected);
          },
          enumerable: false,
          configurable: true
        });
        class_1.prototype.getParameters = function() {
          var offsets = this.node.attributes.get("data-offsets");
          var _a = __read((0, string_js_1.split)(offsets || ""), 2), dx = _a[0], dy = _a[1];
          this.dx = this.length2em(dx || exports.TooltipData.dx);
          this.dy = this.length2em(dy || exports.TooltipData.dy);
        };
        class_1.prototype.computeBBox = function(bbox, recompute) {
          if (recompute === void 0) {
            recompute = false;
          }
          bbox.updateFrom(this.selected.getOuterBBox());
          this.selected.setChildPWidths(recompute);
        };
        return class_1;
      }(Base);
    }
    exports.CommonMactionMixin = CommonMactionMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/maction.js
var require_maction3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/maction.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmaction = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var maction_js_1 = require_maction2();
    var maction_js_2 = require_maction2();
    var maction_js_3 = require_maction();
    var CHTMLmaction = function(_super) {
      __extends(CHTMLmaction2, _super);
      function CHTMLmaction2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmaction2.prototype.toCHTML = function(parent) {
        var chtml = this.standardCHTMLnode(parent);
        var child = this.selected;
        child.toCHTML(chtml);
        this.action(this, this.data);
      };
      CHTMLmaction2.prototype.setEventHandler = function(type, handler) {
        this.chtml.addEventListener(type, handler);
      };
      CHTMLmaction2.kind = maction_js_3.MmlMaction.prototype.kind;
      CHTMLmaction2.styles = {
        "mjx-maction": {
          position: "relative"
        },
        "mjx-maction > mjx-tool": {
          display: "none",
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          "z-index": 500
        },
        "mjx-tool > mjx-tip": {
          display: "inline-block",
          padding: ".2em",
          border: "1px solid #888",
          "font-size": "70%",
          "background-color": "#F8F8F8",
          color: "black",
          "box-shadow": "2px 2px 5px #AAAAAA"
        },
        "mjx-maction[toggle]": {
          cursor: "pointer"
        },
        "mjx-status": {
          display: "block",
          position: "fixed",
          left: "1em",
          bottom: "1em",
          "min-width": "25%",
          padding: ".2em .4em",
          border: "1px solid #888",
          "font-size": "90%",
          "background-color": "#F8F8F8",
          color: "black"
        }
      };
      CHTMLmaction2.actions = /* @__PURE__ */ new Map([
        ["toggle", [function(node, _data) {
          node.adaptor.setAttribute(node.chtml, "toggle", node.node.attributes.get("selection"));
          var math = node.factory.jax.math;
          var document = node.factory.jax.document;
          var mml = node.node;
          node.setEventHandler("click", function(event) {
            if (!math.end.node) {
              math.start.node = math.end.node = math.typesetRoot;
              math.start.n = math.end.n = 0;
            }
            mml.nextToggleSelection();
            math.rerender(document);
            event.stopPropagation();
          });
        }, {}]],
        ["tooltip", [function(node, data) {
          var tip = node.childNodes[1];
          if (!tip)
            return;
          if (tip.node.isKind("mtext")) {
            var text = tip.node.getText();
            node.adaptor.setAttribute(node.chtml, "title", text);
          } else {
            var adaptor_1 = node.adaptor;
            var tool_1 = adaptor_1.append(node.chtml, node.html("mjx-tool", {
              style: { bottom: node.em(-node.dy), right: node.em(-node.dx) }
            }, [node.html("mjx-tip")]));
            tip.toCHTML(adaptor_1.firstChild(tool_1));
            node.setEventHandler("mouseover", function(event) {
              data.stopTimers(node, data);
              var timeout = setTimeout(function() {
                return adaptor_1.setStyle(tool_1, "display", "block");
              }, data.postDelay);
              data.hoverTimer.set(node, timeout);
              event.stopPropagation();
            });
            node.setEventHandler("mouseout", function(event) {
              data.stopTimers(node, data);
              var timeout = setTimeout(function() {
                return adaptor_1.setStyle(tool_1, "display", "");
              }, data.clearDelay);
              data.clearTimer.set(node, timeout);
              event.stopPropagation();
            });
          }
        }, maction_js_2.TooltipData]],
        ["statusline", [function(node, data) {
          var tip = node.childNodes[1];
          if (!tip)
            return;
          if (tip.node.isKind("mtext")) {
            var adaptor_2 = node.adaptor;
            var text_1 = tip.node.getText();
            adaptor_2.setAttribute(node.chtml, "statusline", text_1);
            node.setEventHandler("mouseover", function(event) {
              if (data.status === null) {
                var body = adaptor_2.body(adaptor_2.document);
                data.status = adaptor_2.append(body, node.html("mjx-status", {}, [node.text(text_1)]));
              }
              event.stopPropagation();
            });
            node.setEventHandler("mouseout", function(event) {
              if (data.status) {
                adaptor_2.remove(data.status);
                data.status = null;
              }
              event.stopPropagation();
            });
          }
        }, {
          status: null
        }]]
      ]);
      return CHTMLmaction2;
    }((0, maction_js_1.CommonMactionMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmaction = CHTMLmaction;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/mglyph.js
var require_mglyph2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/mglyph.js"(exports) {
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
    exports.CommonMglyphMixin = void 0;
    function CommonMglyphMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var _this = _super.apply(this, __spreadArray([], __read(args), false)) || this;
          _this.getParameters();
          return _this;
        }
        class_1.prototype.getParameters = function() {
          var _a = this.node.attributes.getList("width", "height", "valign", "src", "index"), width = _a.width, height = _a.height, valign = _a.valign, src = _a.src, index = _a.index;
          if (src) {
            this.width = width === "auto" ? 1 : this.length2em(width);
            this.height = height === "auto" ? 1 : this.length2em(height);
            this.valign = this.length2em(valign || "0");
          } else {
            var text = String.fromCodePoint(parseInt(index));
            var mmlFactory = this.node.factory;
            this.charWrapper = this.wrap(mmlFactory.create("text").setText(text));
            this.charWrapper.parent = this;
          }
        };
        class_1.prototype.computeBBox = function(bbox, _recompute) {
          if (_recompute === void 0) {
            _recompute = false;
          }
          if (this.charWrapper) {
            bbox.updateFrom(this.charWrapper.getBBox());
          } else {
            bbox.w = this.width;
            bbox.h = this.height + this.valign;
            bbox.d = -this.valign;
          }
        };
        return class_1;
      }(Base);
    }
    exports.CommonMglyphMixin = CommonMglyphMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/mglyph.js
var require_mglyph3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/mglyph.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLmglyph = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var mglyph_js_1 = require_mglyph2();
    var mglyph_js_2 = require_mglyph();
    var CHTMLmglyph = function(_super) {
      __extends(CHTMLmglyph2, _super);
      function CHTMLmglyph2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLmglyph2.prototype.toCHTML = function(parent) {
        var chtml = this.standardCHTMLnode(parent);
        if (this.charWrapper) {
          this.charWrapper.toCHTML(chtml);
          return;
        }
        var _a = this.node.attributes.getList("src", "alt"), src = _a.src, alt = _a.alt;
        var styles = {
          width: this.em(this.width),
          height: this.em(this.height)
        };
        if (this.valign) {
          styles.verticalAlign = this.em(this.valign);
        }
        var img = this.html("img", { src, style: styles, alt, title: alt });
        this.adaptor.append(chtml, img);
      };
      CHTMLmglyph2.kind = mglyph_js_2.MmlMglyph.prototype.kind;
      CHTMLmglyph2.styles = {
        "mjx-mglyph > img": {
          display: "inline-block",
          border: 0,
          padding: 0
        }
      };
      return CHTMLmglyph2;
    }((0, mglyph_js_1.CommonMglyphMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLmglyph = CHTMLmglyph;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/semantics.js
var require_semantics2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/semantics.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonSemanticsMixin = void 0;
    function CommonSemanticsMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.computeBBox = function(bbox, _recompute) {
          if (_recompute === void 0) {
            _recompute = false;
          }
          if (this.childNodes.length) {
            var _a = this.childNodes[0].getBBox(), w = _a.w, h = _a.h, d = _a.d;
            bbox.w = w;
            bbox.h = h;
            bbox.d = d;
          }
        };
        return class_1;
      }(Base);
    }
    exports.CommonSemanticsMixin = CommonSemanticsMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/semantics.js
var require_semantics3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/semantics.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLxml = exports.CHTMLannotationXML = exports.CHTMLannotation = exports.CHTMLsemantics = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var semantics_js_1 = require_semantics2();
    var semantics_js_2 = require_semantics();
    var MmlNode_js_1 = require_MmlNode();
    var CHTMLsemantics = function(_super) {
      __extends(CHTMLsemantics2, _super);
      function CHTMLsemantics2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLsemantics2.prototype.toCHTML = function(parent) {
        var chtml = this.standardCHTMLnode(parent);
        if (this.childNodes.length) {
          this.childNodes[0].toCHTML(chtml);
        }
      };
      CHTMLsemantics2.kind = semantics_js_2.MmlSemantics.prototype.kind;
      return CHTMLsemantics2;
    }((0, semantics_js_1.CommonSemanticsMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLsemantics = CHTMLsemantics;
    var CHTMLannotation = function(_super) {
      __extends(CHTMLannotation2, _super);
      function CHTMLannotation2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLannotation2.prototype.toCHTML = function(parent) {
        _super.prototype.toCHTML.call(this, parent);
      };
      CHTMLannotation2.prototype.computeBBox = function() {
        return this.bbox;
      };
      CHTMLannotation2.kind = semantics_js_2.MmlAnnotation.prototype.kind;
      return CHTMLannotation2;
    }(Wrapper_js_1.CHTMLWrapper);
    exports.CHTMLannotation = CHTMLannotation;
    var CHTMLannotationXML = function(_super) {
      __extends(CHTMLannotationXML2, _super);
      function CHTMLannotationXML2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLannotationXML2.kind = semantics_js_2.MmlAnnotationXML.prototype.kind;
      CHTMLannotationXML2.styles = {
        "mjx-annotation-xml": {
          "font-family": "initial",
          "line-height": "normal"
        }
      };
      return CHTMLannotationXML2;
    }(Wrapper_js_1.CHTMLWrapper);
    exports.CHTMLannotationXML = CHTMLannotationXML;
    var CHTMLxml = function(_super) {
      __extends(CHTMLxml2, _super);
      function CHTMLxml2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLxml2.prototype.toCHTML = function(parent) {
        this.chtml = this.adaptor.append(parent, this.adaptor.clone(this.node.getXML()));
      };
      CHTMLxml2.prototype.computeBBox = function(bbox, _recompute) {
        if (_recompute === void 0) {
          _recompute = false;
        }
        var _a = this.jax.measureXMLnode(this.node.getXML()), w = _a.w, h = _a.h, d = _a.d;
        bbox.w = w;
        bbox.h = h;
        bbox.d = d;
      };
      CHTMLxml2.prototype.getStyles = function() {
      };
      CHTMLxml2.prototype.getScale = function() {
      };
      CHTMLxml2.prototype.getVariant = function() {
      };
      CHTMLxml2.kind = MmlNode_js_1.XMLNode.prototype.kind;
      CHTMLxml2.autoStyle = false;
      return CHTMLxml2;
    }(Wrapper_js_1.CHTMLWrapper);
    exports.CHTMLxml = CHTMLxml;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/TeXAtom.js
var require_TeXAtom2 = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/TeXAtom.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonTeXAtomMixin = void 0;
    var MmlNode_js_1 = require_MmlNode();
    function CommonTeXAtomMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.computeBBox = function(bbox, recompute) {
          if (recompute === void 0) {
            recompute = false;
          }
          _super.prototype.computeBBox.call(this, bbox, recompute);
          if (this.childNodes[0] && this.childNodes[0].bbox.ic) {
            bbox.ic = this.childNodes[0].bbox.ic;
          }
          if (this.node.texClass === MmlNode_js_1.TEXCLASS.VCENTER) {
            var h = bbox.h, d = bbox.d;
            var a = this.font.params.axis_height;
            var dh = (h + d) / 2 + a - h;
            bbox.h += dh;
            bbox.d -= dh;
          }
        };
        return class_1;
      }(Base);
    }
    exports.CommonTeXAtomMixin = CommonTeXAtomMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/TeXAtom.js
var require_TeXAtom3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/TeXAtom.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLTeXAtom = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var TeXAtom_js_1 = require_TeXAtom2();
    var TeXAtom_js_2 = require_TeXAtom();
    var MmlNode_js_1 = require_MmlNode();
    var CHTMLTeXAtom = function(_super) {
      __extends(CHTMLTeXAtom2, _super);
      function CHTMLTeXAtom2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLTeXAtom2.prototype.toCHTML = function(parent) {
        _super.prototype.toCHTML.call(this, parent);
        this.adaptor.setAttribute(this.chtml, "texclass", MmlNode_js_1.TEXCLASSNAMES[this.node.texClass]);
        if (this.node.texClass === MmlNode_js_1.TEXCLASS.VCENTER) {
          var bbox = this.childNodes[0].getBBox();
          var h = bbox.h, d = bbox.d;
          var a = this.font.params.axis_height;
          var dh = (h + d) / 2 + a - h;
          this.adaptor.setStyle(this.chtml, "verticalAlign", this.em(dh));
        }
      };
      CHTMLTeXAtom2.kind = TeXAtom_js_2.TeXAtom.prototype.kind;
      return CHTMLTeXAtom2;
    }((0, TeXAtom_js_1.CommonTeXAtomMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLTeXAtom = CHTMLTeXAtom;
  }
});

// node_modules/mathjax-full/js/output/common/Wrappers/TextNode.js
var require_TextNode = __commonJS({
  "node_modules/mathjax-full/js/output/common/Wrappers/TextNode.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommonTextNodeMixin = void 0;
    function CommonTextNodeMixin(Base) {
      return function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.computeBBox = function(bbox, _recompute) {
          var e_1, _a;
          if (_recompute === void 0) {
            _recompute = false;
          }
          var variant = this.parent.variant;
          var text = this.node.getText();
          if (variant === "-explicitFont") {
            var font = this.jax.getFontData(this.parent.styles);
            var _b = this.jax.measureText(text, variant, font), w = _b.w, h = _b.h, d = _b.d;
            bbox.h = h;
            bbox.d = d;
            bbox.w = w;
          } else {
            var chars = this.remappedText(text, variant);
            bbox.empty();
            try {
              for (var chars_1 = __values(chars), chars_1_1 = chars_1.next(); !chars_1_1.done; chars_1_1 = chars_1.next()) {
                var char = chars_1_1.value;
                var _c = __read(this.getVariantChar(variant, char), 4), h = _c[0], d = _c[1], w = _c[2], data = _c[3];
                if (data.unknown) {
                  var cbox = this.jax.measureText(String.fromCodePoint(char), variant);
                  w = cbox.w;
                  h = cbox.h;
                  d = cbox.d;
                }
                bbox.w += w;
                if (h > bbox.h)
                  bbox.h = h;
                if (d > bbox.d)
                  bbox.d = d;
                bbox.ic = data.ic || 0;
                bbox.sk = data.sk || 0;
                bbox.dx = data.dx || 0;
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (chars_1_1 && !chars_1_1.done && (_a = chars_1.return)) _a.call(chars_1);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
            if (chars.length > 1) {
              bbox.sk = 0;
            }
            bbox.clean();
          }
        };
        class_1.prototype.remappedText = function(text, variant) {
          var c = this.parent.stretch.c;
          return c ? [c] : this.parent.remapChars(this.unicodeChars(text, variant));
        };
        class_1.prototype.getStyles = function() {
        };
        class_1.prototype.getVariant = function() {
        };
        class_1.prototype.getScale = function() {
        };
        class_1.prototype.getSpace = function() {
        };
        return class_1;
      }(Base);
    }
    exports.CommonTextNodeMixin = CommonTextNodeMixin;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers/TextNode.js
var require_TextNode2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers/TextNode.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLTextNode = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var Wrapper_js_1 = require_Wrapper3();
    var TextNode_js_1 = require_TextNode();
    var CHTMLTextNode = function(_super) {
      __extends(CHTMLTextNode2, _super);
      function CHTMLTextNode2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLTextNode2.prototype.toCHTML = function(parent) {
        var e_1, _a;
        this.markUsed();
        var adaptor = this.adaptor;
        var variant = this.parent.variant;
        var text = this.node.getText();
        if (text.length === 0)
          return;
        if (variant === "-explicitFont") {
          adaptor.append(parent, this.jax.unknownText(text, variant, this.getBBox().w));
        } else {
          var chars = this.remappedText(text, variant);
          try {
            for (var chars_1 = __values(chars), chars_1_1 = chars_1.next(); !chars_1_1.done; chars_1_1 = chars_1.next()) {
              var n = chars_1_1.value;
              var data = this.getVariantChar(variant, n)[3];
              var font = data.f ? " TEX-" + data.f : "";
              var node = data.unknown ? this.jax.unknownText(String.fromCodePoint(n), variant) : this.html("mjx-c", { class: this.char(n) + font });
              adaptor.append(parent, node);
              !data.unknown && this.font.charUsage.add([variant, n]);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (chars_1_1 && !chars_1_1.done && (_a = chars_1.return)) _a.call(chars_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }
      };
      CHTMLTextNode2.kind = MmlNode_js_1.TextNode.prototype.kind;
      CHTMLTextNode2.autoStyle = false;
      CHTMLTextNode2.styles = {
        "mjx-c": {
          display: "inline-block"
        },
        "mjx-utext": {
          display: "inline-block",
          padding: ".75em 0 .2em 0"
        }
      };
      return CHTMLTextNode2;
    }((0, TextNode_js_1.CommonTextNodeMixin)(Wrapper_js_1.CHTMLWrapper));
    exports.CHTMLTextNode = CHTMLTextNode;
  }
});

// node_modules/mathjax-full/js/output/chtml/Wrappers.js
var require_Wrappers = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Wrappers.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLWrappers = void 0;
    var Wrapper_js_1 = require_Wrapper3();
    var math_js_1 = require_math3();
    var mi_js_1 = require_mi3();
    var mo_js_1 = require_mo3();
    var mn_js_1 = require_mn3();
    var ms_js_1 = require_ms3();
    var mtext_js_1 = require_mtext3();
    var mspace_js_1 = require_mspace3();
    var mpadded_js_1 = require_mpadded3();
    var menclose_js_1 = require_menclose3();
    var mrow_js_1 = require_mrow3();
    var mfenced_js_1 = require_mfenced3();
    var mfrac_js_1 = require_mfrac3();
    var msqrt_js_1 = require_msqrt3();
    var mroot_js_1 = require_mroot3();
    var msubsup_js_1 = require_msubsup3();
    var munderover_js_1 = require_munderover3();
    var mmultiscripts_js_1 = require_mmultiscripts3();
    var mtable_js_1 = require_mtable3();
    var mtr_js_1 = require_mtr3();
    var mtd_js_1 = require_mtd3();
    var maction_js_1 = require_maction3();
    var mglyph_js_1 = require_mglyph3();
    var semantics_js_1 = require_semantics3();
    var TeXAtom_js_1 = require_TeXAtom3();
    var TextNode_js_1 = require_TextNode2();
    exports.CHTMLWrappers = (_a = {}, _a[math_js_1.CHTMLmath.kind] = math_js_1.CHTMLmath, _a[mrow_js_1.CHTMLmrow.kind] = mrow_js_1.CHTMLmrow, _a[mrow_js_1.CHTMLinferredMrow.kind] = mrow_js_1.CHTMLinferredMrow, _a[mi_js_1.CHTMLmi.kind] = mi_js_1.CHTMLmi, _a[mo_js_1.CHTMLmo.kind] = mo_js_1.CHTMLmo, _a[mn_js_1.CHTMLmn.kind] = mn_js_1.CHTMLmn, _a[ms_js_1.CHTMLms.kind] = ms_js_1.CHTMLms, _a[mtext_js_1.CHTMLmtext.kind] = mtext_js_1.CHTMLmtext, _a[mspace_js_1.CHTMLmspace.kind] = mspace_js_1.CHTMLmspace, _a[mpadded_js_1.CHTMLmpadded.kind] = mpadded_js_1.CHTMLmpadded, _a[menclose_js_1.CHTMLmenclose.kind] = menclose_js_1.CHTMLmenclose, _a[mfrac_js_1.CHTMLmfrac.kind] = mfrac_js_1.CHTMLmfrac, _a[msqrt_js_1.CHTMLmsqrt.kind] = msqrt_js_1.CHTMLmsqrt, _a[mroot_js_1.CHTMLmroot.kind] = mroot_js_1.CHTMLmroot, _a[msubsup_js_1.CHTMLmsub.kind] = msubsup_js_1.CHTMLmsub, _a[msubsup_js_1.CHTMLmsup.kind] = msubsup_js_1.CHTMLmsup, _a[msubsup_js_1.CHTMLmsubsup.kind] = msubsup_js_1.CHTMLmsubsup, _a[munderover_js_1.CHTMLmunder.kind] = munderover_js_1.CHTMLmunder, _a[munderover_js_1.CHTMLmover.kind] = munderover_js_1.CHTMLmover, _a[munderover_js_1.CHTMLmunderover.kind] = munderover_js_1.CHTMLmunderover, _a[mmultiscripts_js_1.CHTMLmmultiscripts.kind] = mmultiscripts_js_1.CHTMLmmultiscripts, _a[mfenced_js_1.CHTMLmfenced.kind] = mfenced_js_1.CHTMLmfenced, _a[mtable_js_1.CHTMLmtable.kind] = mtable_js_1.CHTMLmtable, _a[mtr_js_1.CHTMLmtr.kind] = mtr_js_1.CHTMLmtr, _a[mtr_js_1.CHTMLmlabeledtr.kind] = mtr_js_1.CHTMLmlabeledtr, _a[mtd_js_1.CHTMLmtd.kind] = mtd_js_1.CHTMLmtd, _a[maction_js_1.CHTMLmaction.kind] = maction_js_1.CHTMLmaction, _a[mglyph_js_1.CHTMLmglyph.kind] = mglyph_js_1.CHTMLmglyph, _a[semantics_js_1.CHTMLsemantics.kind] = semantics_js_1.CHTMLsemantics, _a[semantics_js_1.CHTMLannotation.kind] = semantics_js_1.CHTMLannotation, _a[semantics_js_1.CHTMLannotationXML.kind] = semantics_js_1.CHTMLannotationXML, _a[semantics_js_1.CHTMLxml.kind] = semantics_js_1.CHTMLxml, _a[TeXAtom_js_1.CHTMLTeXAtom.kind] = TeXAtom_js_1.CHTMLTeXAtom, _a[TextNode_js_1.CHTMLTextNode.kind] = TextNode_js_1.CHTMLTextNode, _a[Wrapper_js_1.CHTMLWrapper.kind] = Wrapper_js_1.CHTMLWrapper, _a);
  }
});

// node_modules/mathjax-full/js/output/chtml/WrapperFactory.js
var require_WrapperFactory3 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/WrapperFactory.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CHTMLWrapperFactory = void 0;
    var WrapperFactory_js_1 = require_WrapperFactory2();
    var Wrappers_js_1 = require_Wrappers();
    var CHTMLWrapperFactory = function(_super) {
      __extends(CHTMLWrapperFactory2, _super);
      function CHTMLWrapperFactory2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CHTMLWrapperFactory2.defaultNodes = Wrappers_js_1.CHTMLWrappers;
      return CHTMLWrapperFactory2;
    }(WrapperFactory_js_1.CommonWrapperFactory);
    exports.CHTMLWrapperFactory = CHTMLWrapperFactory;
  }
});

// node_modules/mathjax-full/js/output/chtml/Usage.js
var require_Usage = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/Usage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Usage = void 0;
    var Usage = function() {
      function Usage2() {
        this.used = /* @__PURE__ */ new Set();
        this.needsUpdate = [];
      }
      Usage2.prototype.add = function(item) {
        var name = JSON.stringify(item);
        if (!this.used.has(name)) {
          this.needsUpdate.push(item);
        }
        this.used.add(name);
      };
      Usage2.prototype.has = function(item) {
        return this.used.has(JSON.stringify(item));
      };
      Usage2.prototype.clear = function() {
        this.used.clear();
        this.needsUpdate = [];
      };
      Usage2.prototype.update = function() {
        var update = this.needsUpdate;
        this.needsUpdate = [];
        return update;
      };
      return Usage2;
    }();
    exports.Usage = Usage;
  }
});

// node_modules/mathjax-full/js/output/chtml/FontData.js
var require_FontData2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/FontData.js"(exports) {
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
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
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
    exports.AddCSS = exports.CHTMLFontData = void 0;
    var FontData_js_1 = require_FontData();
    var Usage_js_1 = require_Usage();
    var lengths_js_1 = require_lengths();
    __exportStar(require_FontData(), exports);
    var CHTMLFontData = function(_super) {
      __extends(CHTMLFontData2, _super);
      function CHTMLFontData2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.charUsage = new Usage_js_1.Usage();
        _this.delimUsage = new Usage_js_1.Usage();
        return _this;
      }
      CHTMLFontData2.charOptions = function(font, n) {
        return _super.charOptions.call(this, font, n);
      };
      CHTMLFontData2.prototype.adaptiveCSS = function(adapt) {
        this.options.adaptiveCSS = adapt;
      };
      CHTMLFontData2.prototype.clearCache = function() {
        if (this.options.adaptiveCSS) {
          this.charUsage.clear();
          this.delimUsage.clear();
        }
      };
      CHTMLFontData2.prototype.createVariant = function(name, inherit, link) {
        if (inherit === void 0) {
          inherit = null;
        }
        if (link === void 0) {
          link = null;
        }
        _super.prototype.createVariant.call(this, name, inherit, link);
        var CLASS = this.constructor;
        this.variant[name].classes = CLASS.defaultVariantClasses[name];
        this.variant[name].letter = CLASS.defaultVariantLetters[name];
      };
      CHTMLFontData2.prototype.defineChars = function(name, chars) {
        var e_1, _a;
        _super.prototype.defineChars.call(this, name, chars);
        var letter = this.variant[name].letter;
        try {
          for (var _b = __values(Object.keys(chars)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var n = _c.value;
            var options = CHTMLFontData2.charOptions(chars, parseInt(n));
            if (options.f === void 0) {
              options.f = letter;
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
      };
      Object.defineProperty(CHTMLFontData2.prototype, "styles", {
        get: function() {
          var CLASS = this.constructor;
          var styles = __assign({}, CLASS.defaultStyles);
          this.addFontURLs(styles, CLASS.defaultFonts, this.options.fontURL);
          if (this.options.adaptiveCSS) {
            this.updateStyles(styles);
          } else {
            this.allStyles(styles);
          }
          return styles;
        },
        enumerable: false,
        configurable: true
      });
      CHTMLFontData2.prototype.updateStyles = function(styles) {
        var e_2, _a, e_3, _b;
        try {
          for (var _c = __values(this.delimUsage.update()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var N = _d.value;
            this.addDelimiterStyles(styles, N, this.delimiters[N]);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        try {
          for (var _e = __values(this.charUsage.update()), _f = _e.next(); !_f.done; _f = _e.next()) {
            var _g = __read(_f.value, 2), name_1 = _g[0], N = _g[1];
            var variant = this.variant[name_1];
            this.addCharStyles(styles, variant.letter, N, variant.chars[N]);
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        return styles;
      };
      CHTMLFontData2.prototype.allStyles = function(styles) {
        var e_4, _a, e_5, _b, e_6, _c;
        try {
          for (var _d = __values(Object.keys(this.delimiters)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var n = _e.value;
            var N = parseInt(n);
            this.addDelimiterStyles(styles, N, this.delimiters[N]);
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
        try {
          for (var _f = __values(Object.keys(this.variant)), _g = _f.next(); !_g.done; _g = _f.next()) {
            var name_2 = _g.value;
            var variant = this.variant[name_2];
            var vletter = variant.letter;
            try {
              for (var _h = (e_6 = void 0, __values(Object.keys(variant.chars))), _j = _h.next(); !_j.done; _j = _h.next()) {
                var n = _j.value;
                var N = parseInt(n);
                var char = variant.chars[N];
                if ((char[3] || {}).smp)
                  continue;
                if (char.length < 4) {
                  char[3] = {};
                }
                this.addCharStyles(styles, vletter, N, char);
              }
            } catch (e_6_1) {
              e_6 = { error: e_6_1 };
            } finally {
              try {
                if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
              } finally {
                if (e_6) throw e_6.error;
              }
            }
          }
        } catch (e_5_1) {
          e_5 = { error: e_5_1 };
        } finally {
          try {
            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
      };
      CHTMLFontData2.prototype.addFontURLs = function(styles, fonts, url) {
        var e_7, _a;
        try {
          for (var _b = __values(Object.keys(fonts)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var name_3 = _c.value;
            var font = __assign({}, fonts[name_3]);
            font.src = font.src.replace(/%%URL%%/, url);
            styles[name_3] = font;
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
      };
      CHTMLFontData2.prototype.addDelimiterStyles = function(styles, n, data) {
        var c = this.charSelector(n);
        if (data.c && data.c !== n) {
          c = this.charSelector(data.c);
          styles[".mjx-stretched mjx-c" + c + "::before"] = {
            content: this.charContent(data.c)
          };
        }
        if (!data.stretch)
          return;
        if (data.dir === 1) {
          this.addDelimiterVStyles(styles, c, data);
        } else {
          this.addDelimiterHStyles(styles, c, data);
        }
      };
      CHTMLFontData2.prototype.addDelimiterVStyles = function(styles, c, data) {
        var HDW = data.HDW;
        var _a = __read(data.stretch, 4), beg = _a[0], ext = _a[1], end = _a[2], mid = _a[3];
        var Hb = this.addDelimiterVPart(styles, c, "beg", beg, HDW);
        this.addDelimiterVPart(styles, c, "ext", ext, HDW);
        var He = this.addDelimiterVPart(styles, c, "end", end, HDW);
        var css = {};
        if (mid) {
          var Hm = this.addDelimiterVPart(styles, c, "mid", mid, HDW);
          css.height = "50%";
          styles["mjx-stretchy-v" + c + " > mjx-mid"] = {
            "margin-top": this.em(-Hm / 2),
            "margin-bottom": this.em(-Hm / 2)
          };
        }
        if (Hb) {
          css["border-top-width"] = this.em0(Hb - 0.03);
        }
        if (He) {
          css["border-bottom-width"] = this.em0(He - 0.03);
          styles["mjx-stretchy-v" + c + " > mjx-end"] = { "margin-top": this.em(-He) };
        }
        if (Object.keys(css).length) {
          styles["mjx-stretchy-v" + c + " > mjx-ext"] = css;
        }
      };
      CHTMLFontData2.prototype.addDelimiterVPart = function(styles, c, part, n, HDW) {
        if (!n)
          return 0;
        var data = this.getDelimiterData(n);
        var dw = (HDW[2] - data[2]) / 2;
        var css = { content: this.charContent(n) };
        if (part !== "ext") {
          css.padding = this.padding(data, dw);
        } else {
          css.width = this.em0(HDW[2]);
          if (dw) {
            css["padding-left"] = this.em0(dw);
          }
        }
        styles["mjx-stretchy-v" + c + " mjx-" + part + " mjx-c::before"] = css;
        return data[0] + data[1];
      };
      CHTMLFontData2.prototype.addDelimiterHStyles = function(styles, c, data) {
        var _a = __read(data.stretch, 4), beg = _a[0], ext = _a[1], end = _a[2], mid = _a[3];
        var HDW = data.HDW;
        this.addDelimiterHPart(styles, c, "beg", beg, HDW);
        this.addDelimiterHPart(styles, c, "ext", ext, HDW);
        this.addDelimiterHPart(styles, c, "end", end, HDW);
        if (mid) {
          this.addDelimiterHPart(styles, c, "mid", mid, HDW);
          styles["mjx-stretchy-h" + c + " > mjx-ext"] = { width: "50%" };
        }
      };
      CHTMLFontData2.prototype.addDelimiterHPart = function(styles, c, part, n, HDW) {
        if (!n)
          return;
        var data = this.getDelimiterData(n);
        var options = data[3];
        var css = { content: options && options.c ? '"' + options.c + '"' : this.charContent(n) };
        css.padding = this.padding(HDW, 0, -HDW[2]);
        styles["mjx-stretchy-h" + c + " mjx-" + part + " mjx-c::before"] = css;
      };
      CHTMLFontData2.prototype.addCharStyles = function(styles, vletter, n, data) {
        var options = data[3];
        var letter = options.f !== void 0 ? options.f : vletter;
        var selector = "mjx-c" + this.charSelector(n) + (letter ? ".TEX-" + letter : "");
        styles[selector + "::before"] = {
          padding: this.padding(data, 0, options.ic || 0),
          content: options.c != null ? '"' + options.c + '"' : this.charContent(n)
        };
      };
      CHTMLFontData2.prototype.getDelimiterData = function(n) {
        return this.getChar("-smallop", n);
      };
      CHTMLFontData2.prototype.em = function(n) {
        return (0, lengths_js_1.em)(n);
      };
      CHTMLFontData2.prototype.em0 = function(n) {
        return (0, lengths_js_1.em)(Math.max(0, n));
      };
      CHTMLFontData2.prototype.padding = function(_a, dw, ic) {
        var _b = __read(_a, 3), h = _b[0], d = _b[1], w = _b[2];
        if (dw === void 0) {
          dw = 0;
        }
        if (ic === void 0) {
          ic = 0;
        }
        return [h, w + ic, d, dw].map(this.em0).join(" ");
      };
      CHTMLFontData2.prototype.charContent = function(n) {
        return '"' + (n >= 32 && n <= 126 && n !== 34 && n !== 39 && n !== 92 ? String.fromCharCode(n) : "\\" + n.toString(16).toUpperCase()) + '"';
      };
      CHTMLFontData2.prototype.charSelector = function(n) {
        return ".mjx-c" + n.toString(16).toUpperCase();
      };
      CHTMLFontData2.OPTIONS = __assign(__assign({}, FontData_js_1.FontData.OPTIONS), { fontURL: "js/output/chtml/fonts/tex-woff-v2" });
      CHTMLFontData2.JAX = "CHTML";
      CHTMLFontData2.defaultVariantClasses = {};
      CHTMLFontData2.defaultVariantLetters = {};
      CHTMLFontData2.defaultStyles = {
        "mjx-c::before": {
          display: "block",
          width: 0
        }
      };
      CHTMLFontData2.defaultFonts = {
        "@font-face /* 0 */": {
          "font-family": "MJXZERO",
          src: 'url("%%URL%%/MathJax_Zero.woff") format("woff")'
        }
      };
      return CHTMLFontData2;
    }(FontData_js_1.FontData);
    exports.CHTMLFontData = CHTMLFontData;
    function AddCSS(font, options) {
      var e_8, _a;
      try {
        for (var _b = __values(Object.keys(options)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var c = _c.value;
          var n = parseInt(c);
          Object.assign(FontData_js_1.FontData.charOptions(font, n), options[n]);
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
      return font;
    }
    exports.AddCSS = AddCSS;
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex.js
var require_tex = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex.js"(exports) {
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
    exports.CommonTeXFontMixin = void 0;
    function CommonTeXFontMixin(Base) {
      var _a;
      return _a = function(_super) {
        __extends(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.getDelimiterData = function(n) {
          return this.getChar("-smallop", n) || this.getChar("-size4", n);
        };
        return class_1;
      }(Base), _a.NAME = "TeX", _a.defaultVariants = __spreadArray(__spreadArray([], __read(Base.defaultVariants), false), [
        ["-smallop", "normal"],
        ["-largeop", "normal"],
        ["-size3", "normal"],
        ["-size4", "normal"],
        ["-tex-calligraphic", "italic"],
        ["-tex-bold-calligraphic", "bold-italic"],
        ["-tex-oldstyle", "normal"],
        ["-tex-bold-oldstyle", "bold"],
        ["-tex-mathit", "italic"],
        ["-tex-variant", "normal"]
      ], false), _a.defaultCssFonts = __assign(__assign({}, Base.defaultCssFonts), { "-smallop": ["serif", false, false], "-largeop": ["serif", false, false], "-size3": ["serif", false, false], "-size4": ["serif", false, false], "-tex-calligraphic": ["cursive", true, false], "-tex-bold-calligraphic": ["cursive", true, true], "-tex-oldstyle": ["serif", false, false], "-tex-bold-oldstyle": ["serif", false, true], "-tex-mathit": ["serif", true, false] }), _a.defaultSizeVariants = ["normal", "-smallop", "-largeop", "-size3", "-size4", "-tex-variant"], _a.defaultStretchVariants = ["-size4"], _a;
    }
    exports.CommonTeXFontMixin = CommonTeXFontMixin;
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/bold-italic.js
var require_bold_italic = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/bold-italic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boldItalic = void 0;
    exports.boldItalic = {
      47: [0.711, 0.21, 0.894],
      305: [0.452, 8e-3, 0.394, { sk: 0.0319 }],
      567: [0.451, 0.201, 0.439, { sk: 0.0958 }],
      8260: [0.711, 0.21, 0.894],
      8710: [0.711, 0, 0.958, { sk: 0.192 }],
      10744: [0.711, 0.21, 0.894]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/bold-italic.js
var require_bold_italic2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/bold-italic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boldItalic = void 0;
    var FontData_js_1 = require_FontData2();
    var bold_italic_js_1 = require_bold_italic();
    exports.boldItalic = (0, FontData_js_1.AddCSS)(bold_italic_js_1.boldItalic, {
      305: { f: "B" },
      567: { f: "B" },
      8260: { c: "/" },
      8710: { c: "\\394" },
      10744: { c: "/" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/bold.js
var require_bold = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bold = void 0;
    exports.bold = {
      33: [0.705, 0, 0.35],
      34: [0.694, -0.329, 0.603],
      35: [0.694, 0.193, 0.958],
      36: [0.75, 0.056, 0.575],
      37: [0.75, 0.056, 0.958],
      38: [0.705, 0.011, 0.894],
      39: [0.694, -0.329, 0.319],
      40: [0.75, 0.249, 0.447],
      41: [0.75, 0.249, 0.447],
      42: [0.75, -0.306, 0.575],
      43: [0.633, 0.131, 0.894],
      44: [0.171, 0.194, 0.319],
      45: [0.278, -0.166, 0.383],
      46: [0.171, 0, 0.319],
      47: [0.75, 0.25, 0.575],
      58: [0.444, 0, 0.319],
      59: [0.444, 0.194, 0.319],
      60: [0.587, 0.085, 0.894],
      61: [0.393, -0.109, 0.894],
      62: [0.587, 0.085, 0.894],
      63: [0.7, 0, 0.543],
      64: [0.699, 6e-3, 0.894],
      91: [0.75, 0.25, 0.319],
      92: [0.75, 0.25, 0.575],
      93: [0.75, 0.25, 0.319],
      94: [0.694, -0.52, 0.575],
      95: [-0.01, 0.061, 0.575],
      96: [0.706, -0.503, 0.575],
      123: [0.75, 0.25, 0.575],
      124: [0.75, 0.249, 0.319],
      125: [0.75, 0.25, 0.575],
      126: [0.344, -0.202, 0.575],
      168: [0.695, -0.535, 0.575],
      172: [0.371, -0.061, 0.767],
      175: [0.607, -0.54, 0.575],
      176: [0.702, -0.536, 0.575],
      177: [0.728, 0.035, 0.894],
      180: [0.706, -0.503, 0.575],
      183: [0.336, -0.166, 0.319],
      215: [0.53, 0.028, 0.894],
      247: [0.597, 0.096, 0.894],
      305: [0.442, 0, 0.278, { sk: 0.0278 }],
      567: [0.442, 0.205, 0.306, { sk: 0.0833 }],
      697: [0.563, -0.033, 0.344],
      710: [0.694, -0.52, 0.575],
      711: [0.66, -0.515, 0.575],
      713: [0.607, -0.54, 0.575],
      714: [0.706, -0.503, 0.575],
      715: [0.706, -0.503, 0.575],
      728: [0.694, -0.5, 0.575],
      729: [0.695, -0.525, 0.575],
      730: [0.702, -0.536, 0.575],
      732: [0.694, -0.552, 0.575],
      768: [0.706, -0.503, 0],
      769: [0.706, -0.503, 0],
      770: [0.694, -0.52, 0],
      771: [0.694, -0.552, 0],
      772: [0.607, -0.54, 0],
      774: [0.694, -0.5, 0],
      775: [0.695, -0.525, 0],
      776: [0.695, -0.535, 0],
      778: [0.702, -0.536, 0],
      779: [0.714, -0.511, 0],
      780: [0.66, -0.515, 0],
      824: [0.711, 0.21, 0],
      8194: [0, 0, 0.5],
      8195: [0, 0, 0.999],
      8196: [0, 0, 0.333],
      8197: [0, 0, 0.25],
      8198: [0, 0, 0.167],
      8201: [0, 0, 0.167],
      8202: [0, 0, 0.083],
      8211: [0.3, -0.249, 0.575],
      8212: [0.3, -0.249, 1.15],
      8213: [0.3, -0.249, 1.15],
      8214: [0.75, 0.248, 0.575],
      8215: [-0.01, 0.061, 0.575],
      8216: [0.694, -0.329, 0.319],
      8217: [0.694, -0.329, 0.319],
      8220: [0.694, -0.329, 0.603],
      8221: [0.694, -0.329, 0.603],
      8224: [0.702, 0.211, 0.511],
      8225: [0.702, 0.202, 0.511],
      8226: [0.474, -0.028, 0.575],
      8230: [0.171, 0, 1.295],
      8242: [0.563, -0.033, 0.344],
      8243: [0.563, 0, 0.688],
      8244: [0.563, 0, 1.032],
      8254: [0.607, -0.54, 0.575],
      8260: [0.75, 0.25, 0.575],
      8279: [0.563, 0, 1.376],
      8407: [0.723, -0.513, 0.575],
      8463: [0.694, 8e-3, 0.668, { sk: -0.0319 }],
      8467: [0.702, 0.019, 0.474, { sk: 0.128 }],
      8472: [0.461, 0.21, 0.74],
      8501: [0.694, 0, 0.703],
      8592: [0.518, 0.017, 1.15],
      8593: [0.694, 0.193, 0.575],
      8594: [0.518, 0.017, 1.15],
      8595: [0.694, 0.194, 0.575],
      8596: [0.518, 0.017, 1.15],
      8597: [0.767, 0.267, 0.575],
      8598: [0.724, 0.194, 1.15],
      8599: [0.724, 0.193, 1.15],
      8600: [0.694, 0.224, 1.15],
      8601: [0.694, 0.224, 1.15],
      8602: [0.711, 0.21, 1.15],
      8603: [0.711, 0.21, 1.15],
      8614: [0.518, 0.017, 1.15],
      8617: [0.518, 0.017, 1.282],
      8618: [0.518, 0.017, 1.282],
      8622: [0.711, 0.21, 1.15],
      8636: [0.518, -0.22, 1.15],
      8637: [0.281, 0.017, 1.15],
      8640: [0.518, -0.22, 1.15],
      8641: [0.281, 0.017, 1.15],
      8652: [0.718, 0.017, 1.15],
      8653: [0.711, 0.21, 1.15],
      8654: [0.711, 0.21, 1.15],
      8655: [0.711, 0.21, 1.15],
      8656: [0.547, 0.046, 1.15],
      8657: [0.694, 0.193, 0.703],
      8658: [0.547, 0.046, 1.15],
      8659: [0.694, 0.194, 0.703],
      8660: [0.547, 0.046, 1.15],
      8661: [0.767, 0.267, 0.703],
      8704: [0.694, 0.016, 0.639],
      8707: [0.694, 0, 0.639],
      8708: [0.711, 0.21, 0.639],
      8709: [0.767, 0.073, 0.575],
      8710: [0.698, 0, 0.958],
      8712: [0.587, 0.086, 0.767],
      8713: [0.711, 0.21, 0.767],
      8715: [0.587, 0.086, 0.767],
      8716: [0.711, 0.21, 0.767],
      8722: [0.281, -0.221, 0.894],
      8723: [0.537, 0.227, 0.894],
      8725: [0.75, 0.25, 0.575],
      8726: [0.75, 0.25, 0.575],
      8727: [0.472, -0.028, 0.575],
      8728: [0.474, -0.028, 0.575],
      8729: [0.474, -0.028, 0.575],
      8730: [0.82, 0.18, 0.958, { ic: 0.03 }],
      8733: [0.451, 8e-3, 0.894],
      8734: [0.452, 8e-3, 1.15],
      8736: [0.714, 0, 0.722],
      8739: [0.75, 0.249, 0.319],
      8740: [0.75, 0.249, 0.319],
      8741: [0.75, 0.248, 0.575],
      8742: [0.75, 0.248, 0.575],
      8743: [0.604, 0.017, 0.767],
      8744: [0.604, 0.016, 0.767],
      8745: [0.603, 0.016, 0.767],
      8746: [0.604, 0.016, 0.767],
      8747: [0.711, 0.211, 0.569, { ic: 0.063 }],
      8764: [0.391, -0.109, 0.894],
      8768: [0.583, 0.082, 0.319],
      8769: [0.711, 0.21, 0.894],
      8771: [0.502, 0, 0.894],
      8772: [0.711, 0.21, 0.894],
      8773: [0.638, 0.027, 0.894],
      8775: [0.711, 0.21, 0.894],
      8776: [0.524, -0.032, 0.894],
      8777: [0.711, 0.21, 0.894],
      8781: [0.533, 0.032, 0.894],
      8784: [0.721, -0.109, 0.894],
      8800: [0.711, 0.21, 0.894],
      8801: [0.505, 0, 0.894],
      8802: [0.711, 0.21, 0.894],
      8804: [0.697, 0.199, 0.894],
      8805: [0.697, 0.199, 0.894],
      8810: [0.617, 0.116, 1.15],
      8811: [0.618, 0.116, 1.15],
      8813: [0.711, 0.21, 0.894],
      8814: [0.711, 0.21, 0.894],
      8815: [0.711, 0.21, 0.894],
      8816: [0.711, 0.21, 0.894],
      8817: [0.711, 0.21, 0.894],
      8826: [0.585, 0.086, 0.894],
      8827: [0.586, 0.086, 0.894],
      8832: [0.711, 0.21, 0.894],
      8833: [0.711, 0.21, 0.894],
      8834: [0.587, 0.085, 0.894],
      8835: [0.587, 0.086, 0.894],
      8836: [0.711, 0.21, 0.894],
      8837: [0.711, 0.21, 0.894],
      8838: [0.697, 0.199, 0.894],
      8839: [0.697, 0.199, 0.894],
      8840: [0.711, 0.21, 0.894],
      8841: [0.711, 0.21, 0.894],
      8846: [0.604, 0.016, 0.767],
      8849: [0.697, 0.199, 0.894],
      8850: [0.697, 0.199, 0.894],
      8851: [0.604, 0, 0.767],
      8852: [0.604, 0, 0.767],
      8853: [0.632, 0.132, 0.894],
      8854: [0.632, 0.132, 0.894],
      8855: [0.632, 0.132, 0.894],
      8856: [0.632, 0.132, 0.894],
      8857: [0.632, 0.132, 0.894],
      8866: [0.693, 0, 0.703],
      8867: [0.693, 0, 0.703],
      8868: [0.694, 0, 0.894],
      8869: [0.693, 0, 0.894],
      8872: [0.75, 0.249, 0.974],
      8876: [0.711, 0.21, 0.703],
      8877: [0.75, 0.249, 0.974],
      8900: [0.523, 0.021, 0.575],
      8901: [0.336, -0.166, 0.319],
      8902: [0.502, 0, 0.575],
      8904: [0.54, 0.039, 1],
      8930: [0.711, 0.21, 0.894],
      8931: [0.711, 0.21, 0.894],
      8942: [0.951, 0.029, 0.319],
      8943: [0.336, -0.166, 1.295],
      8945: [0.871, -0.101, 1.323],
      8968: [0.75, 0.248, 0.511],
      8969: [0.75, 0.248, 0.511],
      8970: [0.749, 0.248, 0.511],
      8971: [0.749, 0.248, 0.511],
      8994: [0.405, -0.108, 1.15],
      8995: [0.392, -0.126, 1.15],
      9001: [0.75, 0.249, 0.447],
      9002: [0.75, 0.249, 0.447],
      9651: [0.711, 0, 1.022],
      9653: [0.711, 0, 1.022],
      9657: [0.54, 0.039, 0.575],
      9661: [0.5, 0.21, 1.022],
      9663: [0.5, 0.21, 1.022],
      9667: [0.539, 0.038, 0.575],
      9711: [0.711, 0.211, 1.15],
      9824: [0.719, 0.129, 0.894],
      9825: [0.711, 0.024, 0.894],
      9826: [0.719, 0.154, 0.894],
      9827: [0.719, 0.129, 0.894],
      9837: [0.75, 0.017, 0.447],
      9838: [0.741, 0.223, 0.447],
      9839: [0.724, 0.224, 0.447],
      10072: [0.75, 0.249, 0.319],
      10216: [0.75, 0.249, 0.447],
      10217: [0.75, 0.249, 0.447],
      10229: [0.518, 0.017, 1.805],
      10230: [0.518, 0.017, 1.833],
      10231: [0.518, 0.017, 2.126],
      10232: [0.547, 0.046, 1.868],
      10233: [0.547, 0.046, 1.87],
      10234: [0.547, 0.046, 2.126],
      10236: [0.518, 0.017, 1.833],
      10744: [0.711, 0.21, 0.894],
      10799: [0.53, 0.028, 0.894],
      10815: [0.686, 0, 0.9],
      10927: [0.696, 0.199, 0.894],
      10928: [0.697, 0.199, 0.894],
      12296: [0.75, 0.249, 0.447],
      12297: [0.75, 0.249, 0.447]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/bold.js
var require_bold2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bold = void 0;
    var FontData_js_1 = require_FontData2();
    var bold_js_1 = require_bold();
    exports.bold = (0, FontData_js_1.AddCSS)(bold_js_1.bold, {
      183: { c: "\\22C5" },
      305: { f: "" },
      567: { f: "" },
      697: { c: "\\2032" },
      8194: { c: "" },
      8195: { c: "" },
      8196: { c: "" },
      8197: { c: "" },
      8198: { c: "" },
      8201: { c: "" },
      8202: { c: "" },
      8213: { c: "\\2014" },
      8214: { c: "\\2225" },
      8215: { c: "_" },
      8226: { c: "\\2219" },
      8243: { c: "\\2032\\2032" },
      8244: { c: "\\2032\\2032\\2032" },
      8254: { c: "\\2C9" },
      8260: { c: "/" },
      8279: { c: "\\2032\\2032\\2032\\2032" },
      8407: { c: "\\2192", f: "VB" },
      8602: { c: "\\2190\\338" },
      8603: { c: "\\2192\\338" },
      8622: { c: "\\2194\\338" },
      8653: { c: "\\21D0\\338" },
      8654: { c: "\\21D4\\338" },
      8655: { c: "\\21D2\\338" },
      8708: { c: "\\2203\\338" },
      8710: { c: "\\394" },
      8716: { c: "\\220B\\338" },
      8740: { c: "\\2223\\338" },
      8742: { c: "\\2225\\338" },
      8769: { c: "\\223C\\338" },
      8772: { c: "\\2243\\338" },
      8775: { c: "\\2245\\338" },
      8777: { c: "\\2248\\338" },
      8802: { c: "\\2261\\338" },
      8813: { c: "\\224D\\338" },
      8814: { c: "<\\338" },
      8815: { c: ">\\338" },
      8816: { c: "\\2264\\338" },
      8817: { c: "\\2265\\338" },
      8832: { c: "\\227A\\338" },
      8833: { c: "\\227B\\338" },
      8836: { c: "\\2282\\338" },
      8837: { c: "\\2283\\338" },
      8840: { c: "\\2286\\338" },
      8841: { c: "\\2287\\338" },
      8876: { c: "\\22A2\\338" },
      8877: { c: "\\22A8\\338" },
      8930: { c: "\\2291\\338" },
      8931: { c: "\\2292\\338" },
      9001: { c: "\\27E8" },
      9002: { c: "\\27E9" },
      9653: { c: "\\25B3" },
      9663: { c: "\\25BD" },
      10072: { c: "\\2223" },
      10744: { c: "/", f: "BI" },
      10799: { c: "\\D7" },
      12296: { c: "\\27E8" },
      12297: { c: "\\27E9" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/double-struck.js
var require_double_struck = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/double-struck.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.doubleStruck = void 0;
    exports.doubleStruck = {};
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/double-struck.js
var require_double_struck2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/double-struck.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.doubleStruck = void 0;
    var double_struck_js_1 = require_double_struck();
    Object.defineProperty(exports, "doubleStruck", { enumerable: true, get: function() {
      return double_struck_js_1.doubleStruck;
    } });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/fraktur-bold.js
var require_fraktur_bold = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/fraktur-bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.frakturBold = void 0;
    exports.frakturBold = {
      33: [0.689, 0.012, 0.349],
      34: [0.695, -0.432, 0.254],
      38: [0.696, 0.016, 0.871],
      39: [0.695, -0.436, 0.25],
      40: [0.737, 0.186, 0.459],
      41: [0.735, 0.187, 0.459],
      42: [0.692, -0.449, 0.328],
      43: [0.598, 0.082, 0.893],
      44: [0.107, 0.191, 0.328],
      45: [0.275, -0.236, 0.893],
      46: [0.102, 0.015, 0.328],
      47: [0.721, 0.182, 0.593],
      48: [0.501, 0.012, 0.593],
      49: [0.489, 0, 0.593],
      50: [0.491, 0, 0.593],
      51: [0.487, 0.193, 0.593],
      52: [0.495, 0.196, 0.593],
      53: [0.481, 0.19, 0.593],
      54: [0.704, 0.012, 0.593],
      55: [0.479, 0.197, 0.593],
      56: [0.714, 5e-3, 0.593],
      57: [0.487, 0.195, 0.593],
      58: [0.457, 0.012, 0.255],
      59: [0.458, 0.19, 0.255],
      61: [0.343, -0.168, 0.582],
      63: [0.697, 0.014, 0.428],
      91: [0.74, 0.13, 0.257],
      93: [0.738, 0.132, 0.257],
      94: [0.734, -0.452, 0.59],
      8216: [0.708, -0.411, 0.254],
      8217: [0.692, -0.394, 0.254],
      8260: [0.721, 0.182, 0.593],
      58113: [0.63, 0.027, 0.587],
      58114: [0.693, 0.212, 0.394, { ic: 0.014 }],
      58115: [0.681, 0.219, 0.387],
      58116: [0.473, 0.212, 0.593],
      58117: [0.684, 0.027, 0.393],
      58120: [0.679, 0.22, 0.981],
      58121: [0.717, 0.137, 0.727]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/fraktur-bold.js
var require_fraktur_bold2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/fraktur-bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.frakturBold = void 0;
    var FontData_js_1 = require_FontData2();
    var fraktur_bold_js_1 = require_fraktur_bold();
    exports.frakturBold = (0, FontData_js_1.AddCSS)(fraktur_bold_js_1.frakturBold, {
      8260: { c: "/" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/fraktur.js
var require_fraktur = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/fraktur.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fraktur = void 0;
    exports.fraktur = {
      33: [0.689, 0.012, 0.296],
      34: [0.695, -0.432, 0.215],
      38: [0.698, 0.011, 0.738],
      39: [0.695, -0.436, 0.212],
      40: [0.737, 0.186, 0.389],
      41: [0.735, 0.187, 0.389],
      42: [0.692, -0.449, 0.278],
      43: [0.598, 0.082, 0.756],
      44: [0.107, 0.191, 0.278],
      45: [0.275, -0.236, 0.756],
      46: [0.102, 0.015, 0.278],
      47: [0.721, 0.182, 0.502],
      48: [0.492, 0.013, 0.502],
      49: [0.468, 0, 0.502],
      50: [0.474, 0, 0.502],
      51: [0.473, 0.182, 0.502],
      52: [0.476, 0.191, 0.502],
      53: [0.458, 0.184, 0.502],
      54: [0.7, 0.013, 0.502],
      55: [0.468, 0.181, 0.502],
      56: [0.705, 0.01, 0.502],
      57: [0.469, 0.182, 0.502],
      58: [0.457, 0.012, 0.216],
      59: [0.458, 0.189, 0.216],
      61: [0.368, -0.132, 0.756],
      63: [0.693, 0.011, 0.362],
      91: [0.74, 0.13, 0.278],
      93: [0.738, 0.131, 0.278],
      94: [0.734, -0.452, 0.5],
      8216: [0.708, -0.41, 0.215],
      8217: [0.692, -0.395, 0.215],
      8260: [0.721, 0.182, 0.502],
      58112: [0.683, 0.032, 0.497],
      58113: [0.616, 0.03, 0.498],
      58114: [0.68, 0.215, 0.333],
      58115: [0.679, 0.224, 0.329],
      58116: [0.471, 0.214, 0.503],
      58117: [0.686, 0.02, 0.333],
      58118: [0.577, 0.021, 0.334, { ic: 0.013 }],
      58119: [0.475, 0.022, 0.501, { ic: 0.013 }]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/fraktur.js
var require_fraktur2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/fraktur.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fraktur = void 0;
    var FontData_js_1 = require_FontData2();
    var fraktur_js_1 = require_fraktur();
    exports.fraktur = (0, FontData_js_1.AddCSS)(fraktur_js_1.fraktur, {
      8260: { c: "/" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/italic.js
var require_italic = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/italic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.italic = void 0;
    exports.italic = {
      33: [0.716, 0, 0.307, { ic: 0.073 }],
      34: [0.694, -0.379, 0.514, { ic: 0.024 }],
      35: [0.694, 0.194, 0.818, { ic: 0.01 }],
      37: [0.75, 0.056, 0.818, { ic: 0.029 }],
      38: [0.716, 0.022, 0.767, { ic: 0.035 }],
      39: [0.694, -0.379, 0.307, { ic: 0.07 }],
      40: [0.75, 0.25, 0.409, { ic: 0.108 }],
      41: [0.75, 0.25, 0.409],
      42: [0.75, -0.32, 0.511, { ic: 0.073 }],
      43: [0.557, 0.057, 0.767],
      44: [0.121, 0.194, 0.307],
      45: [0.251, -0.18, 0.358],
      46: [0.121, 0, 0.307],
      47: [0.716, 0.215, 0.778],
      48: [0.665, 0.021, 0.511, { ic: 0.051 }],
      49: [0.666, 0, 0.511],
      50: [0.666, 0.022, 0.511, { ic: 0.04 }],
      51: [0.666, 0.022, 0.511, { ic: 0.051 }],
      52: [0.666, 0.194, 0.511],
      53: [0.666, 0.022, 0.511, { ic: 0.056 }],
      54: [0.665, 0.022, 0.511, { ic: 0.054 }],
      55: [0.666, 0.022, 0.511, { ic: 0.123 }],
      56: [0.666, 0.021, 0.511, { ic: 0.042 }],
      57: [0.666, 0.022, 0.511, { ic: 0.042 }],
      58: [0.431, 0, 0.307],
      59: [0.431, 0.194, 0.307],
      61: [0.367, -0.133, 0.767],
      63: [0.716, 0, 0.511, { ic: 0.04 }],
      64: [0.705, 0.011, 0.767, { ic: 0.022 }],
      91: [0.75, 0.25, 0.307, { ic: 0.139 }],
      93: [0.75, 0.25, 0.307, { ic: 0.052 }],
      94: [0.694, -0.527, 0.511, { ic: 0.017 }],
      95: [-0.025, 0.062, 0.511, { ic: 0.043 }],
      126: [0.318, -0.208, 0.511, { ic: 0.06 }],
      305: [0.441, 0.01, 0.307, { ic: 0.033 }],
      567: [0.442, 0.204, 0.332],
      768: [0.697, -0.5, 0],
      769: [0.697, -0.5, 0, { ic: 0.039 }],
      770: [0.694, -0.527, 0, { ic: 0.017 }],
      771: [0.668, -0.558, 0, { ic: 0.06 }],
      772: [0.589, -0.544, 0, { ic: 0.054 }],
      774: [0.694, -0.515, 0, { ic: 0.062 }],
      775: [0.669, -0.548, 0],
      776: [0.669, -0.554, 0, { ic: 0.045 }],
      778: [0.716, -0.542, 0],
      779: [0.697, -0.503, 0, { ic: 0.065 }],
      780: [0.638, -0.502, 0, { ic: 0.029 }],
      989: [0.605, 0.085, 0.778],
      8211: [0.285, -0.248, 0.511, { ic: 0.043 }],
      8212: [0.285, -0.248, 1.022, { ic: 0.016 }],
      8213: [0.285, -0.248, 1.022, { ic: 0.016 }],
      8215: [-0.025, 0.062, 0.511, { ic: 0.043 }],
      8216: [0.694, -0.379, 0.307, { ic: 0.055 }],
      8217: [0.694, -0.379, 0.307, { ic: 0.07 }],
      8220: [0.694, -0.379, 0.514, { ic: 0.092 }],
      8221: [0.694, -0.379, 0.514, { ic: 0.024 }],
      8260: [0.716, 0.215, 0.778],
      8463: [0.695, 0.013, 0.54, { ic: 0.022 }],
      8710: [0.716, 0, 0.833, { sk: 0.167 }],
      10744: [0.716, 0.215, 0.778]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/italic.js
var require_italic2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/italic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.italic = void 0;
    var FontData_js_1 = require_FontData2();
    var italic_js_1 = require_italic();
    exports.italic = (0, FontData_js_1.AddCSS)(italic_js_1.italic, {
      47: { f: "I" },
      989: { c: "\\E008", f: "A" },
      8213: { c: "\\2014" },
      8215: { c: "_" },
      8260: { c: "/", f: "I" },
      8710: { c: "\\394", f: "I" },
      10744: { c: "/", f: "I" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/largeop.js
var require_largeop = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/largeop.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.largeop = void 0;
    exports.largeop = {
      40: [1.15, 0.649, 0.597],
      41: [1.15, 0.649, 0.597],
      47: [1.15, 0.649, 0.811],
      91: [1.15, 0.649, 0.472],
      92: [1.15, 0.649, 0.811],
      93: [1.15, 0.649, 0.472],
      123: [1.15, 0.649, 0.667],
      125: [1.15, 0.649, 0.667],
      710: [0.772, -0.565, 1],
      732: [0.75, -0.611, 1],
      770: [0.772, -0.565, 0],
      771: [0.75, -0.611, 0],
      8214: [0.602, 0, 0.778],
      8260: [1.15, 0.649, 0.811],
      8593: [0.6, 0, 0.667],
      8595: [0.6, 0, 0.667],
      8657: [0.599, 0, 0.778],
      8659: [0.6, 0, 0.778],
      8719: [0.95, 0.45, 1.278],
      8720: [0.95, 0.45, 1.278],
      8721: [0.95, 0.45, 1.444],
      8730: [1.15, 0.65, 1, { ic: 0.02 }],
      8739: [0.627, 0.015, 0.333],
      8741: [0.627, 0.015, 0.556],
      8747: [1.36, 0.862, 0.556, { ic: 0.388 }],
      8748: [1.36, 0.862, 1.084, { ic: 0.388 }],
      8749: [1.36, 0.862, 1.592, { ic: 0.388 }],
      8750: [1.36, 0.862, 0.556, { ic: 0.388 }],
      8896: [0.95, 0.45, 1.111],
      8897: [0.95, 0.45, 1.111],
      8898: [0.949, 0.45, 1.111],
      8899: [0.95, 0.449, 1.111],
      8968: [1.15, 0.649, 0.528],
      8969: [1.15, 0.649, 0.528],
      8970: [1.15, 0.649, 0.528],
      8971: [1.15, 0.649, 0.528],
      9001: [1.15, 0.649, 0.611],
      9002: [1.15, 0.649, 0.611],
      9168: [0.602, 0, 0.667],
      10072: [0.627, 0.015, 0.333],
      10216: [1.15, 0.649, 0.611],
      10217: [1.15, 0.649, 0.611],
      10752: [0.949, 0.449, 1.511],
      10753: [0.949, 0.449, 1.511],
      10754: [0.949, 0.449, 1.511],
      10756: [0.95, 0.449, 1.111],
      10758: [0.95, 0.45, 1.111],
      10764: [1.36, 0.862, 2.168, { ic: 0.388 }],
      12296: [1.15, 0.649, 0.611],
      12297: [1.15, 0.649, 0.611]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/largeop.js
var require_largeop2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/largeop.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.largeop = void 0;
    var FontData_js_1 = require_FontData2();
    var largeop_js_1 = require_largeop();
    exports.largeop = (0, FontData_js_1.AddCSS)(largeop_js_1.largeop, {
      8214: { f: "S1" },
      8260: { c: "/" },
      8593: { f: "S1" },
      8595: { f: "S1" },
      8657: { f: "S1" },
      8659: { f: "S1" },
      8739: { f: "S1" },
      8741: { f: "S1" },
      9001: { c: "\\27E8" },
      9002: { c: "\\27E9" },
      9168: { f: "S1" },
      10072: { c: "\\2223", f: "S1" },
      10764: { c: "\\222C\\222C" },
      12296: { c: "\\27E8" },
      12297: { c: "\\27E9" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/monospace.js
var require_monospace = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/monospace.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.monospace = void 0;
    exports.monospace = {
      32: [0, 0, 0.525],
      33: [0.622, 0, 0.525],
      34: [0.623, -0.333, 0.525],
      35: [0.611, 0, 0.525],
      36: [0.694, 0.082, 0.525],
      37: [0.694, 0.083, 0.525],
      38: [0.622, 0.011, 0.525],
      39: [0.611, -0.287, 0.525],
      40: [0.694, 0.082, 0.525],
      41: [0.694, 0.082, 0.525],
      42: [0.52, -0.09, 0.525],
      43: [0.531, -0.081, 0.525],
      44: [0.14, 0.139, 0.525],
      45: [0.341, -0.271, 0.525],
      46: [0.14, 0, 0.525],
      47: [0.694, 0.083, 0.525],
      58: [0.431, 0, 0.525],
      59: [0.431, 0.139, 0.525],
      60: [0.557, -0.055, 0.525],
      61: [0.417, -0.195, 0.525],
      62: [0.557, -0.055, 0.525],
      63: [0.617, 0, 0.525],
      64: [0.617, 6e-3, 0.525],
      91: [0.694, 0.082, 0.525],
      92: [0.694, 0.083, 0.525],
      93: [0.694, 0.082, 0.525],
      94: [0.611, -0.46, 0.525],
      95: [-0.025, 0.095, 0.525],
      96: [0.681, -0.357, 0.525],
      123: [0.694, 0.083, 0.525],
      124: [0.694, 0.082, 0.525],
      125: [0.694, 0.083, 0.525],
      126: [0.611, -0.466, 0.525],
      127: [0.612, -0.519, 0.525],
      160: [0, 0, 0.525],
      305: [0.431, 0, 0.525],
      567: [0.431, 0.228, 0.525],
      697: [0.623, -0.334, 0.525],
      768: [0.611, -0.485, 0],
      769: [0.611, -0.485, 0],
      770: [0.611, -0.46, 0],
      771: [0.611, -0.466, 0],
      772: [0.577, -0.5, 0],
      774: [0.611, -0.504, 0],
      776: [0.612, -0.519, 0],
      778: [0.619, -0.499, 0],
      780: [0.577, -0.449, 0],
      913: [0.623, 0, 0.525],
      914: [0.611, 0, 0.525],
      915: [0.611, 0, 0.525],
      916: [0.623, 0, 0.525],
      917: [0.611, 0, 0.525],
      918: [0.611, 0, 0.525],
      919: [0.611, 0, 0.525],
      920: [0.621, 0.01, 0.525],
      921: [0.611, 0, 0.525],
      922: [0.611, 0, 0.525],
      923: [0.623, 0, 0.525],
      924: [0.611, 0, 0.525],
      925: [0.611, 0, 0.525],
      926: [0.611, 0, 0.525],
      927: [0.621, 0.01, 0.525],
      928: [0.611, 0, 0.525],
      929: [0.611, 0, 0.525],
      931: [0.611, 0, 0.525],
      932: [0.611, 0, 0.525],
      933: [0.622, 0, 0.525],
      934: [0.611, 0, 0.525],
      935: [0.611, 0, 0.525],
      936: [0.611, 0, 0.525],
      937: [0.622, 0, 0.525],
      8215: [-0.025, 0.095, 0.525],
      8242: [0.623, -0.334, 0.525],
      8243: [0.623, 0, 1.05],
      8244: [0.623, 0, 1.575],
      8260: [0.694, 0.083, 0.525],
      8279: [0.623, 0, 2.1],
      8710: [0.623, 0, 0.525]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/monospace.js
var require_monospace2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/monospace.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.monospace = void 0;
    var FontData_js_1 = require_FontData2();
    var monospace_js_1 = require_monospace();
    exports.monospace = (0, FontData_js_1.AddCSS)(monospace_js_1.monospace, {
      697: { c: "\\2032" },
      913: { c: "A" },
      914: { c: "B" },
      917: { c: "E" },
      918: { c: "Z" },
      919: { c: "H" },
      921: { c: "I" },
      922: { c: "K" },
      924: { c: "M" },
      925: { c: "N" },
      927: { c: "O" },
      929: { c: "P" },
      932: { c: "T" },
      935: { c: "X" },
      8215: { c: "_" },
      8243: { c: "\\2032\\2032" },
      8244: { c: "\\2032\\2032\\2032" },
      8260: { c: "/" },
      8279: { c: "\\2032\\2032\\2032\\2032" },
      8710: { c: "\\394" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/normal.js
var require_normal = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/normal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.normal = void 0;
    exports.normal = {
      32: [0, 0, 0.25],
      33: [0.716, 0, 0.278],
      34: [0.694, -0.379, 0.5],
      35: [0.694, 0.194, 0.833],
      36: [0.75, 0.056, 0.5],
      37: [0.75, 0.056, 0.833],
      38: [0.716, 0.022, 0.778],
      39: [0.694, -0.379, 0.278],
      40: [0.75, 0.25, 0.389],
      41: [0.75, 0.25, 0.389],
      42: [0.75, -0.32, 0.5],
      43: [0.583, 0.082, 0.778],
      44: [0.121, 0.194, 0.278],
      45: [0.252, -0.179, 0.333],
      46: [0.12, 0, 0.278],
      47: [0.75, 0.25, 0.5],
      48: [0.666, 0.022, 0.5],
      49: [0.666, 0, 0.5],
      50: [0.666, 0, 0.5],
      51: [0.665, 0.022, 0.5],
      52: [0.677, 0, 0.5],
      53: [0.666, 0.022, 0.5],
      54: [0.666, 0.022, 0.5],
      55: [0.676, 0.022, 0.5],
      56: [0.666, 0.022, 0.5],
      57: [0.666, 0.022, 0.5],
      58: [0.43, 0, 0.278],
      59: [0.43, 0.194, 0.278],
      60: [0.54, 0.04, 0.778],
      61: [0.583, 0.082, 0.778],
      62: [0.54, 0.04, 0.778],
      63: [0.705, 0, 0.472],
      64: [0.705, 0.011, 0.778],
      65: [0.716, 0, 0.75],
      66: [0.683, 0, 0.708],
      67: [0.705, 0.021, 0.722],
      68: [0.683, 0, 0.764],
      69: [0.68, 0, 0.681],
      70: [0.68, 0, 0.653],
      71: [0.705, 0.022, 0.785],
      72: [0.683, 0, 0.75],
      73: [0.683, 0, 0.361],
      74: [0.683, 0.022, 0.514],
      75: [0.683, 0, 0.778],
      76: [0.683, 0, 0.625],
      77: [0.683, 0, 0.917],
      78: [0.683, 0, 0.75],
      79: [0.705, 0.022, 0.778],
      80: [0.683, 0, 0.681],
      81: [0.705, 0.193, 0.778],
      82: [0.683, 0.022, 0.736],
      83: [0.705, 0.022, 0.556],
      84: [0.677, 0, 0.722],
      85: [0.683, 0.022, 0.75],
      86: [0.683, 0.022, 0.75],
      87: [0.683, 0.022, 1.028],
      88: [0.683, 0, 0.75],
      89: [0.683, 0, 0.75],
      90: [0.683, 0, 0.611],
      91: [0.75, 0.25, 0.278],
      92: [0.75, 0.25, 0.5],
      93: [0.75, 0.25, 0.278],
      94: [0.694, -0.531, 0.5],
      95: [-0.025, 0.062, 0.5],
      96: [0.699, -0.505, 0.5],
      97: [0.448, 0.011, 0.5],
      98: [0.694, 0.011, 0.556],
      99: [0.448, 0.011, 0.444],
      100: [0.694, 0.011, 0.556],
      101: [0.448, 0.011, 0.444],
      102: [0.705, 0, 0.306, { ic: 0.066 }],
      103: [0.453, 0.206, 0.5],
      104: [0.694, 0, 0.556],
      105: [0.669, 0, 0.278],
      106: [0.669, 0.205, 0.306],
      107: [0.694, 0, 0.528],
      108: [0.694, 0, 0.278],
      109: [0.442, 0, 0.833],
      110: [0.442, 0, 0.556],
      111: [0.448, 0.01, 0.5],
      112: [0.442, 0.194, 0.556],
      113: [0.442, 0.194, 0.528],
      114: [0.442, 0, 0.392],
      115: [0.448, 0.011, 0.394],
      116: [0.615, 0.01, 0.389],
      117: [0.442, 0.011, 0.556],
      118: [0.431, 0.011, 0.528],
      119: [0.431, 0.011, 0.722],
      120: [0.431, 0, 0.528],
      121: [0.431, 0.204, 0.528],
      122: [0.431, 0, 0.444],
      123: [0.75, 0.25, 0.5],
      124: [0.75, 0.249, 0.278],
      125: [0.75, 0.25, 0.5],
      126: [0.318, -0.215, 0.5],
      160: [0, 0, 0.25],
      163: [0.714, 0.011, 0.769],
      165: [0.683, 0, 0.75],
      168: [0.669, -0.554, 0.5],
      172: [0.356, -0.089, 0.667],
      174: [0.709, 0.175, 0.947],
      175: [0.59, -0.544, 0.5],
      176: [0.715, -0.542, 0.5],
      177: [0.666, 0, 0.778],
      180: [0.699, -0.505, 0.5],
      183: [0.31, -0.19, 0.278],
      215: [0.491, -9e-3, 0.778],
      240: [0.749, 0.021, 0.556],
      247: [0.537, 0.036, 0.778],
      305: [0.442, 0, 0.278, { sk: 0.0278 }],
      567: [0.442, 0.205, 0.306, { sk: 0.0833 }],
      697: [0.56, -0.043, 0.275],
      710: [0.694, -0.531, 0.5],
      711: [0.644, -0.513, 0.5],
      713: [0.59, -0.544, 0.5],
      714: [0.699, -0.505, 0.5],
      715: [0.699, -0.505, 0.5],
      728: [0.694, -0.515, 0.5],
      729: [0.669, -0.549, 0.5],
      730: [0.715, -0.542, 0.5],
      732: [0.668, -0.565, 0.5],
      768: [0.699, -0.505, 0],
      769: [0.699, -0.505, 0],
      770: [0.694, -0.531, 0],
      771: [0.668, -0.565, 0],
      772: [0.59, -0.544, 0],
      774: [0.694, -0.515, 0],
      775: [0.669, -0.549, 0],
      776: [0.669, -0.554, 0],
      778: [0.715, -0.542, 0],
      779: [0.701, -0.51, 0],
      780: [0.644, -0.513, 0],
      824: [0.716, 0.215, 0],
      913: [0.716, 0, 0.75],
      914: [0.683, 0, 0.708],
      915: [0.68, 0, 0.625],
      916: [0.716, 0, 0.833],
      917: [0.68, 0, 0.681],
      918: [0.683, 0, 0.611],
      919: [0.683, 0, 0.75],
      920: [0.705, 0.022, 0.778],
      921: [0.683, 0, 0.361],
      922: [0.683, 0, 0.778],
      923: [0.716, 0, 0.694],
      924: [0.683, 0, 0.917],
      925: [0.683, 0, 0.75],
      926: [0.677, 0, 0.667],
      927: [0.705, 0.022, 0.778],
      928: [0.68, 0, 0.75],
      929: [0.683, 0, 0.681],
      931: [0.683, 0, 0.722],
      932: [0.677, 0, 0.722],
      933: [0.705, 0, 0.778],
      934: [0.683, 0, 0.722],
      935: [0.683, 0, 0.75],
      936: [0.683, 0, 0.778],
      937: [0.704, 0, 0.722],
      8192: [0, 0, 0.5],
      8193: [0, 0, 1],
      8194: [0, 0, 0.5],
      8195: [0, 0, 1],
      8196: [0, 0, 0.333],
      8197: [0, 0, 0.25],
      8198: [0, 0, 0.167],
      8201: [0, 0, 0.167],
      8202: [0, 0, 0.1],
      8203: [0, 0, 0],
      8204: [0, 0, 0],
      8211: [0.285, -0.248, 0.5],
      8212: [0.285, -0.248, 1],
      8213: [0.285, -0.248, 1],
      8214: [0.75, 0.25, 0.5],
      8215: [-0.025, 0.062, 0.5],
      8216: [0.694, -0.379, 0.278],
      8217: [0.694, -0.379, 0.278],
      8220: [0.694, -0.379, 0.5],
      8221: [0.694, -0.379, 0.5],
      8224: [0.705, 0.216, 0.444],
      8225: [0.705, 0.205, 0.444],
      8226: [0.444, -0.055, 0.5],
      8230: [0.12, 0, 1.172],
      8242: [0.56, -0.043, 0.275],
      8243: [0.56, 0, 0.55],
      8244: [0.56, 0, 0.825],
      8245: [0.56, -0.043, 0.275],
      8246: [0.56, 0, 0.55],
      8247: [0.56, 0, 0.825],
      8254: [0.59, -0.544, 0.5],
      8260: [0.75, 0.25, 0.5],
      8279: [0.56, 0, 1.1],
      8288: [0, 0, 0],
      8289: [0, 0, 0],
      8290: [0, 0, 0],
      8291: [0, 0, 0],
      8292: [0, 0, 0],
      8407: [0.714, -0.516, 0.5],
      8450: [0.702, 0.019, 0.722],
      8459: [0.717, 0.036, 0.969, { ic: 0.272, sk: 0.333 }],
      8460: [0.666, 0.133, 0.72],
      8461: [0.683, 0, 0.778],
      8462: [0.694, 0.011, 0.576, { sk: -0.0278 }],
      8463: [0.695, 0.013, 0.54, { ic: 0.022 }],
      8464: [0.717, 0.017, 0.809, { ic: 0.137, sk: 0.333 }],
      8465: [0.686, 0.026, 0.554],
      8466: [0.717, 0.017, 0.874, { ic: 0.161, sk: 0.306 }],
      8467: [0.705, 0.02, 0.417, { sk: 0.111 }],
      8469: [0.683, 0.02, 0.722],
      8472: [0.453, 0.216, 0.636, { sk: 0.111 }],
      8473: [0.683, 0, 0.611],
      8474: [0.701, 0.181, 0.778],
      8475: [0.717, 0.017, 0.85, { ic: 0.037, sk: 0.194 }],
      8476: [0.686, 0.026, 0.828],
      8477: [0.683, 0, 0.722],
      8484: [0.683, 0, 0.667],
      8486: [0.704, 0, 0.722],
      8487: [0.684, 0.022, 0.722],
      8488: [0.729, 0.139, 0.602],
      8492: [0.708, 0.028, 0.908, { ic: 0.02, sk: 0.194 }],
      8493: [0.685, 0.024, 0.613],
      8496: [0.707, 8e-3, 0.562, { ic: 0.156, sk: 0.139 }],
      8497: [0.735, 0.036, 0.895, { ic: 0.095, sk: 0.222 }],
      8498: [0.695, 0, 0.556],
      8499: [0.721, 0.05, 1.08, { ic: 0.136, sk: 0.444 }],
      8501: [0.694, 0, 0.611],
      8502: [0.763, 0.021, 0.667, { ic: 0.02 }],
      8503: [0.764, 0.043, 0.444],
      8504: [0.764, 0.043, 0.667],
      8513: [0.705, 0.023, 0.639],
      8592: [0.511, 0.011, 1],
      8593: [0.694, 0.193, 0.5],
      8594: [0.511, 0.011, 1],
      8595: [0.694, 0.194, 0.5],
      8596: [0.511, 0.011, 1],
      8597: [0.772, 0.272, 0.5],
      8598: [0.72, 0.195, 1],
      8599: [0.72, 0.195, 1],
      8600: [0.695, 0.22, 1],
      8601: [0.695, 0.22, 1],
      8602: [0.437, -0.06, 1],
      8603: [0.437, -0.06, 1],
      8606: [0.417, -0.083, 1],
      8608: [0.417, -0.083, 1],
      8610: [0.417, -0.083, 1.111],
      8611: [0.417, -0.083, 1.111],
      8614: [0.511, 0.011, 1],
      8617: [0.511, 0.011, 1.126],
      8618: [0.511, 0.011, 1.126],
      8619: [0.575, 0.041, 1],
      8620: [0.575, 0.041, 1],
      8621: [0.417, -0.083, 1.389],
      8622: [0.437, -0.06, 1],
      8624: [0.722, 0, 0.5],
      8625: [0.722, 0, 0.5],
      8630: [0.461, 0, 1],
      8631: [0.46, 0, 1],
      8634: [0.65, 0.083, 0.778],
      8635: [0.65, 0.083, 0.778],
      8636: [0.511, -0.23, 1],
      8637: [0.27, 0.011, 1],
      8638: [0.694, 0.194, 0.417],
      8639: [0.694, 0.194, 0.417],
      8640: [0.511, -0.23, 1],
      8641: [0.27, 0.011, 1],
      8642: [0.694, 0.194, 0.417],
      8643: [0.694, 0.194, 0.417],
      8644: [0.667, 0, 1],
      8646: [0.667, 0, 1],
      8647: [0.583, 0.083, 1],
      8648: [0.694, 0.193, 0.833],
      8649: [0.583, 0.083, 1],
      8650: [0.694, 0.194, 0.833],
      8651: [0.514, 0.014, 1],
      8652: [0.671, 0.011, 1],
      8653: [0.534, 0.035, 1],
      8654: [0.534, 0.037, 1],
      8655: [0.534, 0.035, 1],
      8656: [0.525, 0.024, 1],
      8657: [0.694, 0.194, 0.611],
      8658: [0.525, 0.024, 1],
      8659: [0.694, 0.194, 0.611],
      8660: [0.526, 0.025, 1],
      8661: [0.772, 0.272, 0.611],
      8666: [0.611, 0.111, 1],
      8667: [0.611, 0.111, 1],
      8669: [0.417, -0.083, 1],
      8672: [0.437, -0.064, 1.334],
      8674: [0.437, -0.064, 1.334],
      8704: [0.694, 0.022, 0.556],
      8705: [0.846, 0.021, 0.5],
      8706: [0.715, 0.022, 0.531, { ic: 0.035, sk: 0.0833 }],
      8707: [0.694, 0, 0.556],
      8708: [0.716, 0.215, 0.556],
      8709: [0.772, 0.078, 0.5],
      8710: [0.716, 0, 0.833],
      8711: [0.683, 0.033, 0.833],
      8712: [0.54, 0.04, 0.667],
      8713: [0.716, 0.215, 0.667],
      8715: [0.54, 0.04, 0.667],
      8716: [0.716, 0.215, 0.667],
      8717: [0.44, 0, 0.429, { ic: 0.027 }],
      8719: [0.75, 0.25, 0.944],
      8720: [0.75, 0.25, 0.944],
      8721: [0.75, 0.25, 1.056],
      8722: [0.583, 0.082, 0.778],
      8723: [0.5, 0.166, 0.778],
      8724: [0.766, 0.093, 0.778],
      8725: [0.75, 0.25, 0.5],
      8726: [0.75, 0.25, 0.5],
      8727: [0.465, -0.035, 0.5],
      8728: [0.444, -0.055, 0.5],
      8729: [0.444, -0.055, 0.5],
      8730: [0.8, 0.2, 0.833, { ic: 0.02 }],
      8733: [0.442, 0.011, 0.778],
      8734: [0.442, 0.011, 1],
      8736: [0.694, 0, 0.722],
      8737: [0.714, 0.02, 0.722],
      8738: [0.551, 0.051, 0.722],
      8739: [0.75, 0.249, 0.278],
      8740: [0.75, 0.252, 0.278, { ic: 0.019 }],
      8741: [0.75, 0.25, 0.5],
      8742: [0.75, 0.25, 0.5, { ic: 0.018 }],
      8743: [0.598, 0.022, 0.667],
      8744: [0.598, 0.022, 0.667],
      8745: [0.598, 0.022, 0.667],
      8746: [0.598, 0.022, 0.667],
      8747: [0.716, 0.216, 0.417, { ic: 0.055 }],
      8748: [0.805, 0.306, 0.819, { ic: 0.138 }],
      8749: [0.805, 0.306, 1.166, { ic: 0.138 }],
      8750: [0.805, 0.306, 0.472, { ic: 0.138 }],
      8756: [0.471, 0.082, 0.667],
      8757: [0.471, 0.082, 0.667],
      8764: [0.367, -0.133, 0.778],
      8765: [0.367, -0.133, 0.778],
      8768: [0.583, 0.083, 0.278],
      8769: [0.467, -0.032, 0.778],
      8770: [0.463, -0.034, 0.778],
      8771: [0.464, -0.036, 0.778],
      8772: [0.716, 0.215, 0.778],
      8773: [0.589, -0.022, 0.778],
      8775: [0.652, 0.155, 0.778],
      8776: [0.483, -0.055, 0.778],
      8777: [0.716, 0.215, 0.778],
      8778: [0.579, 0.039, 0.778],
      8781: [0.484, -0.016, 0.778],
      8782: [0.492, -8e-3, 0.778],
      8783: [0.492, -0.133, 0.778],
      8784: [0.67, -0.133, 0.778],
      8785: [0.609, 0.108, 0.778],
      8786: [0.601, 0.101, 0.778],
      8787: [0.601, 0.102, 0.778],
      8790: [0.367, -0.133, 0.778],
      8791: [0.721, -0.133, 0.778],
      8796: [0.859, -0.133, 0.778],
      8800: [0.716, 0.215, 0.778],
      8801: [0.464, -0.036, 0.778],
      8802: [0.716, 0.215, 0.778],
      8804: [0.636, 0.138, 0.778],
      8805: [0.636, 0.138, 0.778],
      8806: [0.753, 0.175, 0.778],
      8807: [0.753, 0.175, 0.778],
      8808: [0.752, 0.286, 0.778],
      8809: [0.752, 0.286, 0.778],
      8810: [0.568, 0.067, 1],
      8811: [0.567, 0.067, 1],
      8812: [0.75, 0.25, 0.5],
      8813: [0.716, 0.215, 0.778],
      8814: [0.708, 0.209, 0.778],
      8815: [0.708, 0.209, 0.778],
      8816: [0.801, 0.303, 0.778],
      8817: [0.801, 0.303, 0.778],
      8818: [0.732, 0.228, 0.778],
      8819: [0.732, 0.228, 0.778],
      8820: [0.732, 0.228, 0.778],
      8821: [0.732, 0.228, 0.778],
      8822: [0.681, 0.253, 0.778],
      8823: [0.681, 0.253, 0.778],
      8824: [0.716, 0.253, 0.778],
      8825: [0.716, 0.253, 0.778],
      8826: [0.539, 0.041, 0.778],
      8827: [0.539, 0.041, 0.778],
      8828: [0.58, 0.153, 0.778],
      8829: [0.58, 0.154, 0.778],
      8830: [0.732, 0.228, 0.778],
      8831: [0.732, 0.228, 0.778],
      8832: [0.705, 0.208, 0.778],
      8833: [0.705, 0.208, 0.778],
      8834: [0.54, 0.04, 0.778],
      8835: [0.54, 0.04, 0.778],
      8836: [0.716, 0.215, 0.778],
      8837: [0.716, 0.215, 0.778],
      8838: [0.636, 0.138, 0.778],
      8839: [0.636, 0.138, 0.778],
      8840: [0.801, 0.303, 0.778],
      8841: [0.801, 0.303, 0.778],
      8842: [0.635, 0.241, 0.778],
      8843: [0.635, 0.241, 0.778],
      8846: [0.598, 0.022, 0.667],
      8847: [0.539, 0.041, 0.778],
      8848: [0.539, 0.041, 0.778],
      8849: [0.636, 0.138, 0.778],
      8850: [0.636, 0.138, 0.778],
      8851: [0.598, 0, 0.667],
      8852: [0.598, 0, 0.667],
      8853: [0.583, 0.083, 0.778],
      8854: [0.583, 0.083, 0.778],
      8855: [0.583, 0.083, 0.778],
      8856: [0.583, 0.083, 0.778],
      8857: [0.583, 0.083, 0.778],
      8858: [0.582, 0.082, 0.778],
      8859: [0.582, 0.082, 0.778],
      8861: [0.582, 0.082, 0.778],
      8862: [0.689, 0, 0.778],
      8863: [0.689, 0, 0.778],
      8864: [0.689, 0, 0.778],
      8865: [0.689, 0, 0.778],
      8866: [0.694, 0, 0.611],
      8867: [0.694, 0, 0.611],
      8868: [0.668, 0, 0.778],
      8869: [0.668, 0, 0.778],
      8872: [0.75, 0.249, 0.867],
      8873: [0.694, 0, 0.722],
      8874: [0.694, 0, 0.889],
      8876: [0.695, 0, 0.611],
      8877: [0.695, 0, 0.611],
      8878: [0.695, 0, 0.722],
      8879: [0.695, 0, 0.722],
      8882: [0.539, 0.041, 0.778],
      8883: [0.539, 0.041, 0.778],
      8884: [0.636, 0.138, 0.778],
      8885: [0.636, 0.138, 0.778],
      8888: [0.408, -0.092, 1.111],
      8890: [0.431, 0.212, 0.556],
      8891: [0.716, 0, 0.611],
      8892: [0.716, 0, 0.611],
      8896: [0.75, 0.249, 0.833],
      8897: [0.75, 0.249, 0.833],
      8898: [0.75, 0.249, 0.833],
      8899: [0.75, 0.249, 0.833],
      8900: [0.488, -0.012, 0.5],
      8901: [0.31, -0.19, 0.278],
      8902: [0.486, -0.016, 0.5],
      8903: [0.545, 0.044, 0.778],
      8904: [0.505, 5e-3, 0.9],
      8905: [0.492, -8e-3, 0.778],
      8906: [0.492, -8e-3, 0.778],
      8907: [0.694, 0.022, 0.778],
      8908: [0.694, 0.022, 0.778],
      8909: [0.464, -0.036, 0.778],
      8910: [0.578, 0.021, 0.76],
      8911: [0.578, 0.022, 0.76],
      8912: [0.54, 0.04, 0.778],
      8913: [0.54, 0.04, 0.778],
      8914: [0.598, 0.022, 0.667],
      8915: [0.598, 0.022, 0.667],
      8916: [0.736, 0.022, 0.667],
      8918: [0.541, 0.041, 0.778],
      8919: [0.541, 0.041, 0.778],
      8920: [0.568, 0.067, 1.333],
      8921: [0.568, 0.067, 1.333],
      8922: [0.886, 0.386, 0.778],
      8923: [0.886, 0.386, 0.778],
      8926: [0.734, 0, 0.778],
      8927: [0.734, 0, 0.778],
      8928: [0.801, 0.303, 0.778],
      8929: [0.801, 0.303, 0.778],
      8930: [0.716, 0.215, 0.778],
      8931: [0.716, 0.215, 0.778],
      8934: [0.73, 0.359, 0.778],
      8935: [0.73, 0.359, 0.778],
      8936: [0.73, 0.359, 0.778],
      8937: [0.73, 0.359, 0.778],
      8938: [0.706, 0.208, 0.778],
      8939: [0.706, 0.208, 0.778],
      8940: [0.802, 0.303, 0.778],
      8941: [0.801, 0.303, 0.778],
      8942: [1.3, 0.03, 0.278],
      8943: [0.31, -0.19, 1.172],
      8945: [1.52, -0.1, 1.282],
      8965: [0.716, 0, 0.611],
      8966: [0.813, 0.097, 0.611],
      8968: [0.75, 0.25, 0.444],
      8969: [0.75, 0.25, 0.444],
      8970: [0.75, 0.25, 0.444],
      8971: [0.75, 0.25, 0.444],
      8988: [0.694, -0.306, 0.5],
      8989: [0.694, -0.306, 0.5],
      8990: [0.366, 0.022, 0.5],
      8991: [0.366, 0.022, 0.5],
      8994: [0.388, -0.122, 1],
      8995: [0.378, -0.134, 1],
      9001: [0.75, 0.25, 0.389],
      9002: [0.75, 0.25, 0.389],
      9136: [0.744, 0.244, 0.412],
      9137: [0.744, 0.244, 0.412],
      9168: [0.602, 0, 0.667],
      9416: [0.709, 0.175, 0.902],
      9484: [0.694, -0.306, 0.5],
      9488: [0.694, -0.306, 0.5],
      9492: [0.366, 0.022, 0.5],
      9496: [0.366, 0.022, 0.5],
      9585: [0.694, 0.195, 0.889],
      9586: [0.694, 0.195, 0.889],
      9632: [0.689, 0, 0.778],
      9633: [0.689, 0, 0.778],
      9642: [0.689, 0, 0.778],
      9650: [0.575, 0.02, 0.722],
      9651: [0.716, 0, 0.889],
      9652: [0.575, 0.02, 0.722],
      9653: [0.716, 0, 0.889],
      9654: [0.539, 0.041, 0.778],
      9656: [0.539, 0.041, 0.778],
      9657: [0.505, 5e-3, 0.5],
      9660: [0.576, 0.019, 0.722],
      9661: [0.5, 0.215, 0.889],
      9662: [0.576, 0.019, 0.722],
      9663: [0.5, 0.215, 0.889],
      9664: [0.539, 0.041, 0.778],
      9666: [0.539, 0.041, 0.778],
      9667: [0.505, 5e-3, 0.5],
      9674: [0.716, 0.132, 0.667],
      9711: [0.715, 0.215, 1],
      9723: [0.689, 0, 0.778],
      9724: [0.689, 0, 0.778],
      9733: [0.694, 0.111, 0.944],
      9824: [0.727, 0.13, 0.778],
      9825: [0.716, 0.033, 0.778],
      9826: [0.727, 0.162, 0.778],
      9827: [0.726, 0.13, 0.778],
      9837: [0.75, 0.022, 0.389],
      9838: [0.734, 0.223, 0.389],
      9839: [0.723, 0.223, 0.389],
      10003: [0.706, 0.034, 0.833],
      10016: [0.716, 0.022, 0.833],
      10072: [0.75, 0.249, 0.278],
      10216: [0.75, 0.25, 0.389],
      10217: [0.75, 0.25, 0.389],
      10222: [0.744, 0.244, 0.412],
      10223: [0.744, 0.244, 0.412],
      10229: [0.511, 0.011, 1.609],
      10230: [0.511, 0.011, 1.638],
      10231: [0.511, 0.011, 1.859],
      10232: [0.525, 0.024, 1.609],
      10233: [0.525, 0.024, 1.638],
      10234: [0.525, 0.024, 1.858],
      10236: [0.511, 0.011, 1.638],
      10731: [0.716, 0.132, 0.667],
      10744: [0.716, 0.215, 0.778],
      10752: [0.75, 0.25, 1.111],
      10753: [0.75, 0.25, 1.111],
      10754: [0.75, 0.25, 1.111],
      10756: [0.75, 0.249, 0.833],
      10758: [0.75, 0.249, 0.833],
      10764: [0.805, 0.306, 1.638, { ic: 0.138 }],
      10799: [0.491, -9e-3, 0.778],
      10815: [0.683, 0, 0.75],
      10846: [0.813, 0.097, 0.611],
      10877: [0.636, 0.138, 0.778],
      10878: [0.636, 0.138, 0.778],
      10885: [0.762, 0.29, 0.778],
      10886: [0.762, 0.29, 0.778],
      10887: [0.635, 0.241, 0.778],
      10888: [0.635, 0.241, 0.778],
      10889: [0.761, 0.387, 0.778],
      10890: [0.761, 0.387, 0.778],
      10891: [1.003, 0.463, 0.778],
      10892: [1.003, 0.463, 0.778],
      10901: [0.636, 0.138, 0.778],
      10902: [0.636, 0.138, 0.778],
      10927: [0.636, 0.138, 0.778],
      10928: [0.636, 0.138, 0.778],
      10933: [0.752, 0.286, 0.778],
      10934: [0.752, 0.286, 0.778],
      10935: [0.761, 0.294, 0.778],
      10936: [0.761, 0.294, 0.778],
      10937: [0.761, 0.337, 0.778],
      10938: [0.761, 0.337, 0.778],
      10949: [0.753, 0.215, 0.778],
      10950: [0.753, 0.215, 0.778],
      10955: [0.783, 0.385, 0.778],
      10956: [0.783, 0.385, 0.778],
      12296: [0.75, 0.25, 0.389],
      12297: [0.75, 0.25, 0.389],
      57350: [0.43, 0.023, 0.222, { ic: 0.018 }],
      57351: [0.431, 0.024, 0.389, { ic: 0.018 }],
      57352: [0.605, 0.085, 0.778],
      57353: [0.434, 6e-3, 0.667, { ic: 0.067 }],
      57356: [0.752, 0.284, 0.778],
      57357: [0.752, 0.284, 0.778],
      57358: [0.919, 0.421, 0.778],
      57359: [0.801, 0.303, 0.778],
      57360: [0.801, 0.303, 0.778],
      57361: [0.919, 0.421, 0.778],
      57366: [0.828, 0.33, 0.778],
      57367: [0.752, 0.332, 0.778],
      57368: [0.828, 0.33, 0.778],
      57369: [0.752, 0.333, 0.778],
      57370: [0.634, 0.255, 0.778],
      57371: [0.634, 0.254, 0.778],
      119808: [0.698, 0, 0.869],
      119809: [0.686, 0, 0.818],
      119810: [0.697, 0.011, 0.831],
      119811: [0.686, 0, 0.882],
      119812: [0.68, 0, 0.756],
      119813: [0.68, 0, 0.724],
      119814: [0.697, 0.01, 0.904],
      119815: [0.686, 0, 0.9],
      119816: [0.686, 0, 0.436],
      119817: [0.686, 0.011, 0.594],
      119818: [0.686, 0, 0.901],
      119819: [0.686, 0, 0.692],
      119820: [0.686, 0, 1.092],
      119821: [0.686, 0, 0.9],
      119822: [0.696, 0.01, 0.864],
      119823: [0.686, 0, 0.786],
      119824: [0.696, 0.193, 0.864],
      119825: [0.686, 0.011, 0.862],
      119826: [0.697, 0.011, 0.639],
      119827: [0.675, 0, 0.8],
      119828: [0.686, 0.011, 0.885],
      119829: [0.686, 7e-3, 0.869],
      119830: [0.686, 7e-3, 1.189],
      119831: [0.686, 0, 0.869],
      119832: [0.686, 0, 0.869],
      119833: [0.686, 0, 0.703],
      119834: [0.453, 6e-3, 0.559],
      119835: [0.694, 6e-3, 0.639],
      119836: [0.453, 6e-3, 0.511],
      119837: [0.694, 6e-3, 0.639],
      119838: [0.452, 6e-3, 0.527],
      119839: [0.7, 0, 0.351, { ic: 0.101 }],
      119840: [0.455, 0.201, 0.575],
      119841: [0.694, 0, 0.639],
      119842: [0.695, 0, 0.319],
      119843: [0.695, 0.2, 0.351],
      119844: [0.694, 0, 0.607],
      119845: [0.694, 0, 0.319],
      119846: [0.45, 0, 0.958],
      119847: [0.45, 0, 0.639],
      119848: [0.452, 5e-3, 0.575],
      119849: [0.45, 0.194, 0.639],
      119850: [0.45, 0.194, 0.607],
      119851: [0.45, 0, 0.474],
      119852: [0.453, 6e-3, 0.454],
      119853: [0.635, 5e-3, 0.447],
      119854: [0.45, 6e-3, 0.639],
      119855: [0.444, 0, 0.607],
      119856: [0.444, 0, 0.831],
      119857: [0.444, 0, 0.607],
      119858: [0.444, 0.2, 0.607],
      119859: [0.444, 0, 0.511],
      119860: [0.716, 0, 0.75, { sk: 0.139 }],
      119861: [0.683, 0, 0.759, { sk: 0.0833 }],
      119862: [0.705, 0.022, 0.715, { ic: 0.045, sk: 0.0833 }],
      119863: [0.683, 0, 0.828, { sk: 0.0556 }],
      119864: [0.68, 0, 0.738, { ic: 0.026, sk: 0.0833 }],
      119865: [0.68, 0, 0.643, { ic: 0.106, sk: 0.0833 }],
      119866: [0.705, 0.022, 0.786, { sk: 0.0833 }],
      119867: [0.683, 0, 0.831, { ic: 0.057, sk: 0.0556 }],
      119868: [0.683, 0, 0.44, { ic: 0.064, sk: 0.111 }],
      119869: [0.683, 0.022, 0.555, { ic: 0.078, sk: 0.167 }],
      119870: [0.683, 0, 0.849, { ic: 0.04, sk: 0.0556 }],
      119871: [0.683, 0, 0.681, { sk: 0.0278 }],
      119872: [0.683, 0, 0.97, { ic: 0.081, sk: 0.0833 }],
      119873: [0.683, 0, 0.803, { ic: 0.085, sk: 0.0833 }],
      119874: [0.704, 0.022, 0.763, { sk: 0.0833 }],
      119875: [0.683, 0, 0.642, { ic: 0.109, sk: 0.0833 }],
      119876: [0.704, 0.194, 0.791, { sk: 0.0833 }],
      119877: [0.683, 0.021, 0.759, { sk: 0.0833 }],
      119878: [0.705, 0.022, 0.613, { ic: 0.032, sk: 0.0833 }],
      119879: [0.677, 0, 0.584, { ic: 0.12, sk: 0.0833 }],
      119880: [0.683, 0.022, 0.683, { ic: 0.084, sk: 0.0278 }],
      119881: [0.683, 0.022, 0.583, { ic: 0.186 }],
      119882: [0.683, 0.022, 0.944, { ic: 0.104 }],
      119883: [0.683, 0, 0.828, { ic: 0.024, sk: 0.0833 }],
      119884: [0.683, 0, 0.581, { ic: 0.182 }],
      119885: [0.683, 0, 0.683, { ic: 0.04, sk: 0.0833 }],
      119886: [0.441, 0.01, 0.529],
      119887: [0.694, 0.011, 0.429],
      119888: [0.442, 0.011, 0.433, { sk: 0.0556 }],
      119889: [0.694, 0.01, 0.52, { sk: 0.167 }],
      119890: [0.442, 0.011, 0.466, { sk: 0.0556 }],
      119891: [0.705, 0.205, 0.49, { ic: 0.06, sk: 0.167 }],
      119892: [0.442, 0.205, 0.477, { sk: 0.0278 }],
      119894: [0.661, 0.011, 0.345],
      119895: [0.661, 0.204, 0.412],
      119896: [0.694, 0.011, 0.521],
      119897: [0.694, 0.011, 0.298, { sk: 0.0833 }],
      119898: [0.442, 0.011, 0.878],
      119899: [0.442, 0.011, 0.6],
      119900: [0.441, 0.011, 0.485, { sk: 0.0556 }],
      119901: [0.442, 0.194, 0.503, { sk: 0.0833 }],
      119902: [0.442, 0.194, 0.446, { ic: 0.014, sk: 0.0833 }],
      119903: [0.442, 0.011, 0.451, { sk: 0.0556 }],
      119904: [0.442, 0.01, 0.469, { sk: 0.0556 }],
      119905: [0.626, 0.011, 0.361, { sk: 0.0833 }],
      119906: [0.442, 0.011, 0.572, { sk: 0.0278 }],
      119907: [0.443, 0.011, 0.485, { sk: 0.0278 }],
      119908: [0.443, 0.011, 0.716, { sk: 0.0833 }],
      119909: [0.442, 0.011, 0.572, { sk: 0.0278 }],
      119910: [0.442, 0.205, 0.49, { sk: 0.0556 }],
      119911: [0.442, 0.011, 0.465, { sk: 0.0556 }],
      119912: [0.711, 0, 0.869, { sk: 0.16 }],
      119913: [0.686, 0, 0.866, { sk: 0.0958 }],
      119914: [0.703, 0.017, 0.817, { ic: 0.038, sk: 0.0958 }],
      119915: [0.686, 0, 0.938, { sk: 0.0639 }],
      119916: [0.68, 0, 0.81, { ic: 0.015, sk: 0.0958 }],
      119917: [0.68, 0, 0.689, { ic: 0.12, sk: 0.0958 }],
      119918: [0.703, 0.016, 0.887, { sk: 0.0958 }],
      119919: [0.686, 0, 0.982, { ic: 0.045, sk: 0.0639 }],
      119920: [0.686, 0, 0.511, { ic: 0.062, sk: 0.128 }],
      119921: [0.686, 0.017, 0.631, { ic: 0.063, sk: 0.192 }],
      119922: [0.686, 0, 0.971, { ic: 0.032, sk: 0.0639 }],
      119923: [0.686, 0, 0.756, { sk: 0.0319 }],
      119924: [0.686, 0, 1.142, { ic: 0.077, sk: 0.0958 }],
      119925: [0.686, 0, 0.95, { ic: 0.077, sk: 0.0958 }],
      119926: [0.703, 0.017, 0.837, { sk: 0.0958 }],
      119927: [0.686, 0, 0.723, { ic: 0.124, sk: 0.0958 }],
      119928: [0.703, 0.194, 0.869, { sk: 0.0958 }],
      119929: [0.686, 0.017, 0.872, { sk: 0.0958 }],
      119930: [0.703, 0.017, 0.693, { ic: 0.021, sk: 0.0958 }],
      119931: [0.675, 0, 0.637, { ic: 0.135, sk: 0.0958 }],
      119932: [0.686, 0.016, 0.8, { ic: 0.077, sk: 0.0319 }],
      119933: [0.686, 0.016, 0.678, { ic: 0.208 }],
      119934: [0.686, 0.017, 1.093, { ic: 0.114 }],
      119935: [0.686, 0, 0.947, { sk: 0.0958 }],
      119936: [0.686, 0, 0.675, { ic: 0.201 }],
      119937: [0.686, 0, 0.773, { ic: 0.032, sk: 0.0958 }],
      119938: [0.452, 8e-3, 0.633],
      119939: [0.694, 8e-3, 0.521],
      119940: [0.451, 8e-3, 0.513, { sk: 0.0639 }],
      119941: [0.694, 8e-3, 0.61, { sk: 0.192 }],
      119942: [0.452, 8e-3, 0.554, { sk: 0.0639 }],
      119943: [0.701, 0.201, 0.568, { ic: 0.056, sk: 0.192 }],
      119944: [0.452, 0.202, 0.545, { sk: 0.0319 }],
      119945: [0.694, 8e-3, 0.668, { sk: -0.0319 }],
      119946: [0.694, 8e-3, 0.405],
      119947: [0.694, 0.202, 0.471],
      119948: [0.694, 8e-3, 0.604],
      119949: [0.694, 8e-3, 0.348, { sk: 0.0958 }],
      119950: [0.452, 8e-3, 1.032],
      119951: [0.452, 8e-3, 0.713],
      119952: [0.452, 8e-3, 0.585, { sk: 0.0639 }],
      119953: [0.452, 0.194, 0.601, { sk: 0.0958 }],
      119954: [0.452, 0.194, 0.542, { sk: 0.0958 }],
      119955: [0.452, 8e-3, 0.529, { sk: 0.0639 }],
      119956: [0.451, 8e-3, 0.531, { sk: 0.0639 }],
      119957: [0.643, 7e-3, 0.415, { sk: 0.0958 }],
      119958: [0.452, 8e-3, 0.681, { sk: 0.0319 }],
      119959: [0.453, 8e-3, 0.567, { sk: 0.0319 }],
      119960: [0.453, 8e-3, 0.831, { sk: 0.0958 }],
      119961: [0.452, 8e-3, 0.659, { sk: 0.0319 }],
      119962: [0.452, 0.202, 0.59, { sk: 0.0639 }],
      119963: [0.452, 8e-3, 0.555, { sk: 0.0639 }],
      119964: [0.717, 8e-3, 0.803, { ic: 0.213, sk: 0.389 }],
      119966: [0.728, 0.026, 0.666, { ic: 0.153, sk: 0.278 }],
      119967: [0.708, 0.031, 0.774, { ic: 0.081, sk: 0.111 }],
      119970: [0.717, 0.037, 0.61, { ic: 0.128, sk: 0.25 }],
      119973: [0.717, 0.314, 1.052, { ic: 0.081, sk: 0.417 }],
      119974: [0.717, 0.037, 0.914, { ic: 0.29, sk: 0.361 }],
      119977: [0.726, 0.036, 0.902, { ic: 0.306, sk: 0.389 }],
      119978: [0.707, 8e-3, 0.738, { ic: 0.067, sk: 0.167 }],
      119979: [0.716, 0.037, 1.013, { ic: 0.018, sk: 0.222 }],
      119980: [0.717, 0.017, 0.883, { sk: 0.278 }],
      119982: [0.708, 0.036, 0.868, { ic: 0.148, sk: 0.333 }],
      119983: [0.735, 0.037, 0.747, { ic: 0.249, sk: 0.222 }],
      119984: [0.717, 0.017, 0.8, { ic: 0.16, sk: 0.25 }],
      119985: [0.717, 0.017, 0.622, { ic: 0.228, sk: 0.222 }],
      119986: [0.717, 0.017, 0.805, { ic: 0.221, sk: 0.25 }],
      119987: [0.717, 0.017, 0.944, { ic: 0.187, sk: 0.278 }],
      119988: [0.716, 0.017, 0.71, { ic: 0.249, sk: 0.194 }],
      119989: [0.717, 0.016, 0.821, { ic: 0.211, sk: 0.306 }],
      120068: [0.696, 0.026, 0.718],
      120069: [0.691, 0.027, 0.884],
      120071: [0.685, 0.027, 0.832],
      120072: [0.685, 0.024, 0.663],
      120073: [0.686, 0.153, 0.611],
      120074: [0.69, 0.026, 0.785],
      120077: [0.686, 0.139, 0.552],
      120078: [0.68, 0.027, 0.668, { ic: 0.014 }],
      120079: [0.686, 0.026, 0.666],
      120080: [0.692, 0.027, 1.05],
      120081: [0.686, 0.025, 0.832],
      120082: [0.729, 0.027, 0.827],
      120083: [0.692, 0.218, 0.828],
      120084: [0.729, 0.069, 0.827],
      120086: [0.692, 0.027, 0.829],
      120087: [0.701, 0.027, 0.669],
      120088: [0.697, 0.027, 0.646, { ic: 0.019 }],
      120089: [0.686, 0.026, 0.831],
      120090: [0.686, 0.027, 1.046],
      120091: [0.688, 0.027, 0.719],
      120092: [0.686, 0.218, 0.833],
      120094: [0.47, 0.035, 0.5],
      120095: [0.685, 0.031, 0.513],
      120096: [0.466, 0.029, 0.389],
      120097: [0.609, 0.033, 0.499],
      120098: [0.467, 0.03, 0.401],
      120099: [0.681, 0.221, 0.326],
      120100: [0.47, 0.209, 0.504],
      120101: [0.688, 0.205, 0.521],
      120102: [0.673, 0.02, 0.279],
      120103: [0.672, 0.208, 0.281],
      120104: [0.689, 0.025, 0.389],
      120105: [0.685, 0.02, 0.28],
      120106: [0.475, 0.026, 0.767],
      120107: [0.475, 0.022, 0.527],
      120108: [0.48, 0.028, 0.489],
      120109: [0.541, 0.212, 0.5],
      120110: [0.479, 0.219, 0.489],
      120111: [0.474, 0.021, 0.389],
      120112: [0.478, 0.029, 0.443],
      120113: [0.64, 0.02, 0.333, { ic: 0.015 }],
      120114: [0.474, 0.023, 0.517],
      120115: [0.53, 0.028, 0.512],
      120116: [0.532, 0.028, 0.774],
      120117: [0.472, 0.188, 0.389],
      120118: [0.528, 0.218, 0.499],
      120119: [0.471, 0.214, 0.391],
      120120: [0.701, 0, 0.722],
      120121: [0.683, 0, 0.667],
      120123: [0.683, 0, 0.722],
      120124: [0.683, 0, 0.667],
      120125: [0.683, 0, 0.611],
      120126: [0.702, 0.019, 0.778],
      120128: [0.683, 0, 0.389],
      120129: [0.683, 0.077, 0.5],
      120130: [0.683, 0, 0.778],
      120131: [0.683, 0, 0.667],
      120132: [0.683, 0, 0.944],
      120134: [0.701, 0.019, 0.778],
      120138: [0.702, 0.012, 0.556],
      120139: [0.683, 0, 0.667],
      120140: [0.683, 0.019, 0.722],
      120141: [0.683, 0.02, 0.722],
      120142: [0.683, 0.019, 1],
      120143: [0.683, 0, 0.722],
      120144: [0.683, 0, 0.722],
      120172: [0.686, 0.031, 0.847],
      120173: [0.684, 0.031, 1.044],
      120174: [0.676, 0.032, 0.723],
      120175: [0.683, 0.029, 0.982],
      120176: [0.686, 0.029, 0.783],
      120177: [0.684, 0.146, 0.722],
      120178: [0.687, 0.029, 0.927],
      120179: [0.683, 0.126, 0.851],
      120180: [0.681, 0.025, 0.655],
      120181: [0.68, 0.141, 0.652],
      120182: [0.681, 0.026, 0.789, { ic: 0.017 }],
      120183: [0.683, 0.028, 0.786],
      120184: [0.683, 0.032, 1.239],
      120185: [0.679, 0.03, 0.983],
      120186: [0.726, 0.03, 0.976],
      120187: [0.688, 0.223, 0.977],
      120188: [0.726, 0.083, 0.976],
      120189: [0.688, 0.028, 0.978],
      120190: [0.685, 0.031, 0.978],
      120191: [0.686, 0.03, 0.79, { ic: 0.012 }],
      120192: [0.688, 0.039, 0.851, { ic: 0.02 }],
      120193: [0.685, 0.029, 0.982],
      120194: [0.683, 0.03, 1.235],
      120195: [0.681, 0.035, 0.849],
      120196: [0.688, 0.214, 0.984],
      120197: [0.677, 0.148, 0.711],
      120198: [0.472, 0.032, 0.603],
      120199: [0.69, 0.032, 0.59],
      120200: [0.473, 0.026, 0.464],
      120201: [0.632, 0.028, 0.589],
      120202: [0.471, 0.027, 0.472],
      120203: [0.687, 0.222, 0.388],
      120204: [0.472, 0.208, 0.595],
      120205: [0.687, 0.207, 0.615],
      120206: [0.686, 0.025, 0.331],
      120207: [0.682, 0.203, 0.332],
      120208: [0.682, 0.025, 0.464],
      120209: [0.681, 0.024, 0.337],
      120210: [0.476, 0.031, 0.921],
      120211: [0.473, 0.028, 0.654],
      120212: [0.482, 0.034, 0.609],
      120213: [0.557, 0.207, 0.604],
      120214: [0.485, 0.211, 0.596],
      120215: [0.472, 0.026, 0.46],
      120216: [0.479, 0.034, 0.523],
      120217: [0.648, 0.027, 0.393, { ic: 0.014 }],
      120218: [0.472, 0.032, 0.589, { ic: 0.014 }],
      120219: [0.546, 0.027, 0.604],
      120220: [0.549, 0.032, 0.918],
      120221: [0.471, 0.188, 0.459],
      120222: [0.557, 0.221, 0.589],
      120223: [0.471, 0.214, 0.461],
      120224: [0.694, 0, 0.667],
      120225: [0.694, 0, 0.667],
      120226: [0.705, 0.011, 0.639],
      120227: [0.694, 0, 0.722],
      120228: [0.691, 0, 0.597],
      120229: [0.691, 0, 0.569],
      120230: [0.704, 0.011, 0.667],
      120231: [0.694, 0, 0.708],
      120232: [0.694, 0, 0.278],
      120233: [0.694, 0.022, 0.472],
      120234: [0.694, 0, 0.694],
      120235: [0.694, 0, 0.542],
      120236: [0.694, 0, 0.875],
      120237: [0.694, 0, 0.708],
      120238: [0.715, 0.022, 0.736],
      120239: [0.694, 0, 0.639],
      120240: [0.715, 0.125, 0.736],
      120241: [0.694, 0, 0.646],
      120242: [0.716, 0.022, 0.556],
      120243: [0.688, 0, 0.681],
      120244: [0.694, 0.022, 0.688],
      120245: [0.694, 0, 0.667],
      120246: [0.694, 0, 0.944],
      120247: [0.694, 0, 0.667],
      120248: [0.694, 0, 0.667],
      120249: [0.694, 0, 0.611],
      120250: [0.46, 0.01, 0.481],
      120251: [0.694, 0.011, 0.517],
      120252: [0.46, 0.01, 0.444],
      120253: [0.694, 0.01, 0.517],
      120254: [0.461, 0.01, 0.444],
      120255: [0.705, 0, 0.306, { ic: 0.041 }],
      120256: [0.455, 0.206, 0.5],
      120257: [0.694, 0, 0.517],
      120258: [0.68, 0, 0.239],
      120259: [0.68, 0.205, 0.267],
      120260: [0.694, 0, 0.489],
      120261: [0.694, 0, 0.239],
      120262: [0.455, 0, 0.794],
      120263: [0.455, 0, 0.517],
      120264: [0.46, 0.01, 0.5],
      120265: [0.455, 0.194, 0.517],
      120266: [0.455, 0.194, 0.517],
      120267: [0.455, 0, 0.342],
      120268: [0.46, 0.01, 0.383],
      120269: [0.571, 0.01, 0.361],
      120270: [0.444, 0.01, 0.517],
      120271: [0.444, 0, 0.461],
      120272: [0.444, 0, 0.683],
      120273: [0.444, 0, 0.461],
      120274: [0.444, 0.204, 0.461],
      120275: [0.444, 0, 0.435],
      120276: [0.694, 0, 0.733],
      120277: [0.694, 0, 0.733],
      120278: [0.704, 0.011, 0.703],
      120279: [0.694, 0, 0.794],
      120280: [0.691, 0, 0.642],
      120281: [0.691, 0, 0.611],
      120282: [0.705, 0.011, 0.733],
      120283: [0.694, 0, 0.794],
      120284: [0.694, 0, 0.331],
      120285: [0.694, 0.022, 0.519],
      120286: [0.694, 0, 0.764],
      120287: [0.694, 0, 0.581],
      120288: [0.694, 0, 0.978],
      120289: [0.694, 0, 0.794],
      120290: [0.716, 0.022, 0.794],
      120291: [0.694, 0, 0.703],
      120292: [0.716, 0.106, 0.794],
      120293: [0.694, 0, 0.703],
      120294: [0.716, 0.022, 0.611],
      120295: [0.688, 0, 0.733],
      120296: [0.694, 0.022, 0.764],
      120297: [0.694, 0, 0.733],
      120298: [0.694, 0, 1.039],
      120299: [0.694, 0, 0.733],
      120300: [0.694, 0, 0.733],
      120301: [0.694, 0, 0.672],
      120302: [0.475, 0.011, 0.525],
      120303: [0.694, 0.01, 0.561],
      120304: [0.475, 0.011, 0.489],
      120305: [0.694, 0.011, 0.561],
      120306: [0.474, 0.01, 0.511],
      120307: [0.705, 0, 0.336, { ic: 0.045 }],
      120308: [0.469, 0.206, 0.55],
      120309: [0.694, 0, 0.561],
      120310: [0.695, 0, 0.256],
      120311: [0.695, 0.205, 0.286],
      120312: [0.694, 0, 0.531],
      120313: [0.694, 0, 0.256],
      120314: [0.469, 0, 0.867],
      120315: [0.468, 0, 0.561],
      120316: [0.474, 0.011, 0.55],
      120317: [0.469, 0.194, 0.561],
      120318: [0.469, 0.194, 0.561],
      120319: [0.469, 0, 0.372],
      120320: [0.474, 0.01, 0.422],
      120321: [0.589, 0.01, 0.404],
      120322: [0.458, 0.011, 0.561],
      120323: [0.458, 0, 0.5],
      120324: [0.458, 0, 0.744],
      120325: [0.458, 0, 0.5],
      120326: [0.458, 0.205, 0.5],
      120327: [0.458, 0, 0.476],
      120328: [0.694, 0, 0.667],
      120329: [0.694, 0, 0.667, { ic: 0.029 }],
      120330: [0.705, 0.01, 0.639, { ic: 0.08 }],
      120331: [0.694, 0, 0.722, { ic: 0.025 }],
      120332: [0.691, 0, 0.597, { ic: 0.091 }],
      120333: [0.691, 0, 0.569, { ic: 0.104 }],
      120334: [0.705, 0.011, 0.667, { ic: 0.063 }],
      120335: [0.694, 0, 0.708, { ic: 0.06 }],
      120336: [0.694, 0, 0.278, { ic: 0.06 }],
      120337: [0.694, 0.022, 0.472, { ic: 0.063 }],
      120338: [0.694, 0, 0.694, { ic: 0.091 }],
      120339: [0.694, 0, 0.542],
      120340: [0.694, 0, 0.875, { ic: 0.054 }],
      120341: [0.694, 0, 0.708, { ic: 0.058 }],
      120342: [0.716, 0.022, 0.736, { ic: 0.027 }],
      120343: [0.694, 0, 0.639, { ic: 0.051 }],
      120344: [0.716, 0.125, 0.736, { ic: 0.027 }],
      120345: [0.694, 0, 0.646, { ic: 0.052 }],
      120346: [0.716, 0.022, 0.556, { ic: 0.053 }],
      120347: [0.688, 0, 0.681, { ic: 0.109 }],
      120348: [0.694, 0.022, 0.688, { ic: 0.059 }],
      120349: [0.694, 0, 0.667, { ic: 0.132 }],
      120350: [0.694, 0, 0.944, { ic: 0.132 }],
      120351: [0.694, 0, 0.667, { ic: 0.091 }],
      120352: [0.694, 0, 0.667, { ic: 0.143 }],
      120353: [0.694, 0, 0.611, { ic: 0.091 }],
      120354: [0.461, 0.01, 0.481],
      120355: [0.694, 0.011, 0.517, { ic: 0.022 }],
      120356: [0.46, 0.011, 0.444, { ic: 0.055 }],
      120357: [0.694, 0.01, 0.517, { ic: 0.071 }],
      120358: [0.46, 0.011, 0.444, { ic: 0.028 }],
      120359: [0.705, 0, 0.306, { ic: 0.188 }],
      120360: [0.455, 0.206, 0.5, { ic: 0.068 }],
      120361: [0.694, 0, 0.517],
      120362: [0.68, 0, 0.239, { ic: 0.076 }],
      120363: [0.68, 0.204, 0.267, { ic: 0.069 }],
      120364: [0.694, 0, 0.489, { ic: 0.054 }],
      120365: [0.694, 0, 0.239, { ic: 0.072 }],
      120366: [0.455, 0, 0.794],
      120367: [0.454, 0, 0.517],
      120368: [0.461, 0.011, 0.5, { ic: 0.023 }],
      120369: [0.455, 0.194, 0.517, { ic: 0.021 }],
      120370: [0.455, 0.194, 0.517, { ic: 0.021 }],
      120371: [0.455, 0, 0.342, { ic: 0.082 }],
      120372: [0.461, 0.011, 0.383, { ic: 0.053 }],
      120373: [0.571, 0.011, 0.361, { ic: 0.049 }],
      120374: [0.444, 0.01, 0.517, { ic: 0.02 }],
      120375: [0.444, 0, 0.461, { ic: 0.079 }],
      120376: [0.444, 0, 0.683, { ic: 0.079 }],
      120377: [0.444, 0, 0.461, { ic: 0.076 }],
      120378: [0.444, 0.205, 0.461, { ic: 0.079 }],
      120379: [0.444, 0, 0.435, { ic: 0.059 }],
      120432: [0.623, 0, 0.525],
      120433: [0.611, 0, 0.525],
      120434: [0.622, 0.011, 0.525],
      120435: [0.611, 0, 0.525],
      120436: [0.611, 0, 0.525],
      120437: [0.611, 0, 0.525],
      120438: [0.622, 0.011, 0.525],
      120439: [0.611, 0, 0.525],
      120440: [0.611, 0, 0.525],
      120441: [0.611, 0.011, 0.525],
      120442: [0.611, 0, 0.525],
      120443: [0.611, 0, 0.525],
      120444: [0.611, 0, 0.525],
      120445: [0.611, 0, 0.525],
      120446: [0.621, 0.01, 0.525],
      120447: [0.611, 0, 0.525],
      120448: [0.621, 0.138, 0.525],
      120449: [0.611, 0.011, 0.525],
      120450: [0.622, 0.011, 0.525],
      120451: [0.611, 0, 0.525],
      120452: [0.611, 0.011, 0.525],
      120453: [0.611, 7e-3, 0.525],
      120454: [0.611, 7e-3, 0.525],
      120455: [0.611, 0, 0.525],
      120456: [0.611, 0, 0.525],
      120457: [0.611, 0, 0.525],
      120458: [0.439, 6e-3, 0.525],
      120459: [0.611, 6e-3, 0.525],
      120460: [0.44, 6e-3, 0.525],
      120461: [0.611, 6e-3, 0.525],
      120462: [0.44, 6e-3, 0.525],
      120463: [0.617, 0, 0.525],
      120464: [0.442, 0.229, 0.525],
      120465: [0.611, 0, 0.525],
      120466: [0.612, 0, 0.525],
      120467: [0.612, 0.228, 0.525],
      120468: [0.611, 0, 0.525],
      120469: [0.611, 0, 0.525],
      120470: [0.436, 0, 0.525, { ic: 0.011 }],
      120471: [0.436, 0, 0.525],
      120472: [0.44, 6e-3, 0.525],
      120473: [0.437, 0.221, 0.525],
      120474: [0.437, 0.221, 0.525, { ic: 0.02 }],
      120475: [0.437, 0, 0.525],
      120476: [0.44, 6e-3, 0.525],
      120477: [0.554, 6e-3, 0.525],
      120478: [0.431, 5e-3, 0.525],
      120479: [0.431, 0, 0.525],
      120480: [0.431, 0, 0.525],
      120481: [0.431, 0, 0.525],
      120482: [0.431, 0.228, 0.525],
      120483: [0.431, 0, 0.525],
      120488: [0.698, 0, 0.869],
      120489: [0.686, 0, 0.818],
      120490: [0.68, 0, 0.692],
      120491: [0.698, 0, 0.958],
      120492: [0.68, 0, 0.756],
      120493: [0.686, 0, 0.703],
      120494: [0.686, 0, 0.9],
      120495: [0.696, 0.01, 0.894],
      120496: [0.686, 0, 0.436],
      120497: [0.686, 0, 0.901],
      120498: [0.698, 0, 0.806],
      120499: [0.686, 0, 1.092],
      120500: [0.686, 0, 0.9],
      120501: [0.675, 0, 0.767],
      120502: [0.696, 0.01, 0.864],
      120503: [0.68, 0, 0.9],
      120504: [0.686, 0, 0.786],
      120506: [0.686, 0, 0.831],
      120507: [0.675, 0, 0.8],
      120508: [0.697, 0, 0.894],
      120509: [0.686, 0, 0.831],
      120510: [0.686, 0, 0.869],
      120511: [0.686, 0, 0.894],
      120512: [0.696, 0, 0.831],
      120513: [0.686, 0.024, 0.958],
      120546: [0.716, 0, 0.75, { sk: 0.139 }],
      120547: [0.683, 0, 0.759, { sk: 0.0833 }],
      120548: [0.68, 0, 0.615, { ic: 0.106, sk: 0.0833 }],
      120549: [0.716, 0, 0.833, { sk: 0.167 }],
      120550: [0.68, 0, 0.738, { ic: 0.026, sk: 0.0833 }],
      120551: [0.683, 0, 0.683, { ic: 0.04, sk: 0.0833 }],
      120552: [0.683, 0, 0.831, { ic: 0.057, sk: 0.0556 }],
      120553: [0.704, 0.022, 0.763, { sk: 0.0833 }],
      120554: [0.683, 0, 0.44, { ic: 0.064, sk: 0.111 }],
      120555: [0.683, 0, 0.849, { ic: 0.04, sk: 0.0556 }],
      120556: [0.716, 0, 0.694, { sk: 0.167 }],
      120557: [0.683, 0, 0.97, { ic: 0.081, sk: 0.0833 }],
      120558: [0.683, 0, 0.803, { ic: 0.085, sk: 0.0833 }],
      120559: [0.677, 0, 0.742, { ic: 0.035, sk: 0.0833 }],
      120560: [0.704, 0.022, 0.763, { sk: 0.0833 }],
      120561: [0.68, 0, 0.831, { ic: 0.056, sk: 0.0556 }],
      120562: [0.683, 0, 0.642, { ic: 0.109, sk: 0.0833 }],
      120564: [0.683, 0, 0.78, { ic: 0.026, sk: 0.0833 }],
      120565: [0.677, 0, 0.584, { ic: 0.12, sk: 0.0833 }],
      120566: [0.705, 0, 0.583, { ic: 0.117, sk: 0.0556 }],
      120567: [0.683, 0, 0.667, { sk: 0.0833 }],
      120568: [0.683, 0, 0.828, { ic: 0.024, sk: 0.0833 }],
      120569: [0.683, 0, 0.612, { ic: 0.08, sk: 0.0556 }],
      120570: [0.704, 0, 0.772, { ic: 0.014, sk: 0.0833 }],
      120572: [0.442, 0.011, 0.64, { sk: 0.0278 }],
      120573: [0.705, 0.194, 0.566, { sk: 0.0833 }],
      120574: [0.441, 0.216, 0.518, { ic: 0.025 }],
      120575: [0.717, 0.01, 0.444, { sk: 0.0556 }],
      120576: [0.452, 0.022, 0.466, { sk: 0.0833 }],
      120577: [0.704, 0.204, 0.438, { ic: 0.033, sk: 0.0833 }],
      120578: [0.442, 0.216, 0.497, { sk: 0.0556 }],
      120579: [0.705, 0.01, 0.469, { sk: 0.0833 }],
      120580: [0.442, 0.01, 0.354, { sk: 0.0556 }],
      120581: [0.442, 0.011, 0.576],
      120582: [0.694, 0.012, 0.583],
      120583: [0.442, 0.216, 0.603, { sk: 0.0278 }],
      120584: [0.442, 0, 0.494, { ic: 0.036, sk: 0.0278 }],
      120585: [0.704, 0.205, 0.438, { sk: 0.111 }],
      120586: [0.441, 0.011, 0.485, { sk: 0.0556 }],
      120587: [0.431, 0.011, 0.57],
      120588: [0.442, 0.216, 0.517, { sk: 0.0833 }],
      120589: [0.442, 0.107, 0.363, { ic: 0.042, sk: 0.0833 }],
      120590: [0.431, 0.011, 0.571],
      120591: [0.431, 0.013, 0.437, { ic: 0.08, sk: 0.0278 }],
      120592: [0.443, 0.01, 0.54, { sk: 0.0278 }],
      120593: [0.442, 0.218, 0.654, { sk: 0.0833 }],
      120594: [0.442, 0.204, 0.626, { sk: 0.0556 }],
      120595: [0.694, 0.205, 0.651, { sk: 0.111 }],
      120596: [0.443, 0.011, 0.622],
      120597: [0.715, 0.022, 0.531, { ic: 0.035, sk: 0.0833 }],
      120598: [0.431, 0.011, 0.406, { sk: 0.0556 }],
      120599: [0.705, 0.011, 0.591, { sk: 0.0833 }],
      120600: [0.434, 6e-3, 0.667, { ic: 0.067 }],
      120601: [0.694, 0.205, 0.596, { sk: 0.0833 }],
      120602: [0.442, 0.194, 0.517, { sk: 0.0833 }],
      120603: [0.431, 0.01, 0.828],
      120604: [0.711, 0, 0.869, { sk: 0.16 }],
      120605: [0.686, 0, 0.866, { sk: 0.0958 }],
      120606: [0.68, 0, 0.657, { ic: 0.12, sk: 0.0958 }],
      120607: [0.711, 0, 0.958, { sk: 0.192 }],
      120608: [0.68, 0, 0.81, { ic: 0.015, sk: 0.0958 }],
      120609: [0.686, 0, 0.773, { ic: 0.032, sk: 0.0958 }],
      120610: [0.686, 0, 0.982, { ic: 0.045, sk: 0.0639 }],
      120611: [0.702, 0.017, 0.867, { sk: 0.0958 }],
      120612: [0.686, 0, 0.511, { ic: 0.062, sk: 0.128 }],
      120613: [0.686, 0, 0.971, { ic: 0.032, sk: 0.0639 }],
      120614: [0.711, 0, 0.806, { sk: 0.192 }],
      120615: [0.686, 0, 1.142, { ic: 0.077, sk: 0.0958 }],
      120616: [0.686, 0, 0.95, { ic: 0.077, sk: 0.0958 }],
      120617: [0.675, 0, 0.841, { ic: 0.026, sk: 0.0958 }],
      120618: [0.703, 0.017, 0.837, { sk: 0.0958 }],
      120619: [0.68, 0, 0.982, { ic: 0.044, sk: 0.0639 }],
      120620: [0.686, 0, 0.723, { ic: 0.124, sk: 0.0958 }],
      120622: [0.686, 0, 0.885, { ic: 0.017, sk: 0.0958 }],
      120623: [0.675, 0, 0.637, { ic: 0.135, sk: 0.0958 }],
      120624: [0.703, 0, 0.671, { ic: 0.131, sk: 0.0639 }],
      120625: [0.686, 0, 0.767, { sk: 0.0958 }],
      120626: [0.686, 0, 0.947, { sk: 0.0958 }],
      120627: [0.686, 0, 0.714, { ic: 0.076, sk: 0.0639 }],
      120628: [0.703, 0, 0.879, { sk: 0.0958 }],
      120630: [0.452, 8e-3, 0.761, { sk: 0.0319 }],
      120631: [0.701, 0.194, 0.66, { sk: 0.0958 }],
      120632: [0.451, 0.211, 0.59, { ic: 0.027 }],
      120633: [0.725, 8e-3, 0.522, { sk: 0.0639 }],
      120634: [0.461, 0.017, 0.529, { sk: 0.0958 }],
      120635: [0.711, 0.202, 0.508, { ic: 0.013, sk: 0.0958 }],
      120636: [0.452, 0.211, 0.6, { sk: 0.0639 }],
      120637: [0.702, 8e-3, 0.562, { sk: 0.0958 }],
      120638: [0.452, 8e-3, 0.412, { sk: 0.0639 }],
      120639: [0.452, 8e-3, 0.668],
      120640: [0.694, 0.013, 0.671],
      120641: [0.452, 0.211, 0.708, { sk: 0.0319 }],
      120642: [0.452, 0, 0.577, { ic: 0.031, sk: 0.0319 }],
      120643: [0.711, 0.201, 0.508, { sk: 0.128 }],
      120644: [0.452, 8e-3, 0.585, { sk: 0.0639 }],
      120645: [0.444, 8e-3, 0.682],
      120646: [0.451, 0.211, 0.612, { sk: 0.0958 }],
      120647: [0.451, 0.105, 0.424, { ic: 0.033, sk: 0.0958 }],
      120648: [0.444, 8e-3, 0.686],
      120649: [0.444, 0.013, 0.521, { ic: 0.089, sk: 0.0319 }],
      120650: [0.453, 8e-3, 0.631, { sk: 0.0319 }],
      120651: [0.452, 0.216, 0.747, { sk: 0.0958 }],
      120652: [0.452, 0.201, 0.718, { sk: 0.0639 }],
      120653: [0.694, 0.202, 0.758, { sk: 0.128 }],
      120654: [0.453, 8e-3, 0.718],
      120655: [0.71, 0.017, 0.628, { ic: 0.029, sk: 0.0958 }],
      120656: [0.444, 7e-3, 0.483, { sk: 0.0639 }],
      120657: [0.701, 8e-3, 0.692, { sk: 0.0958 }],
      120658: [0.434, 6e-3, 0.667, { ic: 0.067 }],
      120659: [0.694, 0.202, 0.712, { sk: 0.0958 }],
      120660: [0.451, 0.194, 0.612, { sk: 0.0958 }],
      120661: [0.444, 8e-3, 0.975],
      120662: [0.694, 0, 0.733],
      120663: [0.694, 0, 0.733],
      120664: [0.691, 0, 0.581],
      120665: [0.694, 0, 0.917],
      120666: [0.691, 0, 0.642],
      120667: [0.694, 0, 0.672],
      120668: [0.694, 0, 0.794],
      120669: [0.716, 0.022, 0.856],
      120670: [0.694, 0, 0.331],
      120671: [0.694, 0, 0.764],
      120672: [0.694, 0, 0.672],
      120673: [0.694, 0, 0.978],
      120674: [0.694, 0, 0.794],
      120675: [0.688, 0, 0.733],
      120676: [0.716, 0.022, 0.794],
      120677: [0.691, 0, 0.794],
      120678: [0.694, 0, 0.703],
      120680: [0.694, 0, 0.794],
      120681: [0.688, 0, 0.733],
      120682: [0.715, 0, 0.856],
      120683: [0.694, 0, 0.794],
      120684: [0.694, 0, 0.733],
      120685: [0.694, 0, 0.856],
      120686: [0.716, 0, 0.794],
      120782: [0.654, 0.01, 0.575],
      120783: [0.655, 0, 0.575],
      120784: [0.654, 0, 0.575],
      120785: [0.655, 0.011, 0.575],
      120786: [0.656, 0, 0.575],
      120787: [0.655, 0.011, 0.575],
      120788: [0.655, 0.011, 0.575],
      120789: [0.676, 0.011, 0.575],
      120790: [0.654, 0.011, 0.575],
      120791: [0.654, 0.011, 0.575],
      120802: [0.678, 0.022, 0.5],
      120803: [0.678, 0, 0.5],
      120804: [0.677, 0, 0.5],
      120805: [0.678, 0.022, 0.5],
      120806: [0.656, 0, 0.5],
      120807: [0.656, 0.021, 0.5],
      120808: [0.677, 0.022, 0.5],
      120809: [0.656, 0.011, 0.5],
      120810: [0.678, 0.022, 0.5],
      120811: [0.677, 0.022, 0.5],
      120812: [0.715, 0.022, 0.55],
      120813: [0.716, 0, 0.55],
      120814: [0.716, 0, 0.55],
      120815: [0.716, 0.022, 0.55],
      120816: [0.694, 0, 0.55],
      120817: [0.694, 0.022, 0.55],
      120818: [0.716, 0.022, 0.55],
      120819: [0.695, 0.011, 0.55],
      120820: [0.715, 0.022, 0.55],
      120821: [0.716, 0.022, 0.55],
      120822: [0.621, 0.01, 0.525],
      120823: [0.622, 0, 0.525],
      120824: [0.622, 0, 0.525],
      120825: [0.622, 0.011, 0.525],
      120826: [0.624, 0, 0.525],
      120827: [0.611, 0.01, 0.525],
      120828: [0.622, 0.011, 0.525],
      120829: [0.627, 0.01, 0.525],
      120830: [0.621, 0.01, 0.525],
      120831: [0.622, 0.011, 0.525]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/normal.js
var require_normal2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/normal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.normal = void 0;
    var FontData_js_1 = require_FontData2();
    var normal_js_1 = require_normal();
    exports.normal = (0, FontData_js_1.AddCSS)(normal_js_1.normal, {
      163: { f: "MI" },
      165: { f: "A" },
      174: { f: "A" },
      183: { c: "\\22C5" },
      240: { f: "A" },
      697: { c: "\\2032" },
      913: { c: "A" },
      914: { c: "B" },
      917: { c: "E" },
      918: { c: "Z" },
      919: { c: "H" },
      921: { c: "I" },
      922: { c: "K" },
      924: { c: "M" },
      925: { c: "N" },
      927: { c: "O" },
      929: { c: "P" },
      932: { c: "T" },
      935: { c: "X" },
      8192: { c: "" },
      8193: { c: "" },
      8194: { c: "" },
      8195: { c: "" },
      8196: { c: "" },
      8197: { c: "" },
      8198: { c: "" },
      8201: { c: "" },
      8202: { c: "" },
      8203: { c: "" },
      8204: { c: "" },
      8213: { c: "\\2014" },
      8214: { c: "\\2225" },
      8215: { c: "_" },
      8226: { c: "\\2219" },
      8243: { c: "\\2032\\2032" },
      8244: { c: "\\2032\\2032\\2032" },
      8245: { f: "A" },
      8246: { c: "\\2035\\2035", f: "A" },
      8247: { c: "\\2035\\2035\\2035", f: "A" },
      8254: { c: "\\2C9" },
      8260: { c: "/" },
      8279: { c: "\\2032\\2032\\2032\\2032" },
      8288: { c: "" },
      8289: { c: "" },
      8290: { c: "" },
      8291: { c: "" },
      8292: { c: "" },
      8407: { c: "\\2192", f: "V" },
      8450: { c: "C", f: "A" },
      8459: { c: "H", f: "SC" },
      8460: { c: "H", f: "FR" },
      8461: { c: "H", f: "A" },
      8462: { c: "h", f: "I" },
      8463: { f: "A" },
      8464: { c: "I", f: "SC" },
      8465: { c: "I", f: "FR" },
      8466: { c: "L", f: "SC" },
      8469: { c: "N", f: "A" },
      8473: { c: "P", f: "A" },
      8474: { c: "Q", f: "A" },
      8475: { c: "R", f: "SC" },
      8476: { c: "R", f: "FR" },
      8477: { c: "R", f: "A" },
      8484: { c: "Z", f: "A" },
      8486: { c: "\\3A9" },
      8487: { f: "A" },
      8488: { c: "Z", f: "FR" },
      8492: { c: "B", f: "SC" },
      8493: { c: "C", f: "FR" },
      8496: { c: "E", f: "SC" },
      8497: { c: "F", f: "SC" },
      8498: { f: "A" },
      8499: { c: "M", f: "SC" },
      8502: { f: "A" },
      8503: { f: "A" },
      8504: { f: "A" },
      8513: { f: "A" },
      8602: { f: "A" },
      8603: { f: "A" },
      8606: { f: "A" },
      8608: { f: "A" },
      8610: { f: "A" },
      8611: { f: "A" },
      8619: { f: "A" },
      8620: { f: "A" },
      8621: { f: "A" },
      8622: { f: "A" },
      8624: { f: "A" },
      8625: { f: "A" },
      8630: { f: "A" },
      8631: { f: "A" },
      8634: { f: "A" },
      8635: { f: "A" },
      8638: { f: "A" },
      8639: { f: "A" },
      8642: { f: "A" },
      8643: { f: "A" },
      8644: { f: "A" },
      8646: { f: "A" },
      8647: { f: "A" },
      8648: { f: "A" },
      8649: { f: "A" },
      8650: { f: "A" },
      8651: { f: "A" },
      8653: { f: "A" },
      8654: { f: "A" },
      8655: { f: "A" },
      8666: { f: "A" },
      8667: { f: "A" },
      8669: { f: "A" },
      8672: { f: "A" },
      8674: { f: "A" },
      8705: { f: "A" },
      8708: { c: "\\2203\\338" },
      8710: { c: "\\394" },
      8716: { c: "\\220B\\338" },
      8717: { f: "A" },
      8719: { f: "S1" },
      8720: { f: "S1" },
      8721: { f: "S1" },
      8724: { f: "A" },
      8737: { f: "A" },
      8738: { f: "A" },
      8740: { f: "A" },
      8742: { f: "A" },
      8748: { f: "S1" },
      8749: { f: "S1" },
      8750: { f: "S1" },
      8756: { f: "A" },
      8757: { f: "A" },
      8765: { f: "A" },
      8769: { f: "A" },
      8770: { f: "A" },
      8772: { c: "\\2243\\338" },
      8775: { c: "\\2246", f: "A" },
      8777: { c: "\\2248\\338" },
      8778: { f: "A" },
      8782: { f: "A" },
      8783: { f: "A" },
      8785: { f: "A" },
      8786: { f: "A" },
      8787: { f: "A" },
      8790: { f: "A" },
      8791: { f: "A" },
      8796: { f: "A" },
      8802: { c: "\\2261\\338" },
      8806: { f: "A" },
      8807: { f: "A" },
      8808: { f: "A" },
      8809: { f: "A" },
      8812: { f: "A" },
      8813: { c: "\\224D\\338" },
      8814: { f: "A" },
      8815: { f: "A" },
      8816: { f: "A" },
      8817: { f: "A" },
      8818: { f: "A" },
      8819: { f: "A" },
      8820: { c: "\\2272\\338" },
      8821: { c: "\\2273\\338" },
      8822: { f: "A" },
      8823: { f: "A" },
      8824: { c: "\\2276\\338" },
      8825: { c: "\\2277\\338" },
      8828: { f: "A" },
      8829: { f: "A" },
      8830: { f: "A" },
      8831: { f: "A" },
      8832: { f: "A" },
      8833: { f: "A" },
      8836: { c: "\\2282\\338" },
      8837: { c: "\\2283\\338" },
      8840: { f: "A" },
      8841: { f: "A" },
      8842: { f: "A" },
      8843: { f: "A" },
      8847: { f: "A" },
      8848: { f: "A" },
      8858: { f: "A" },
      8859: { f: "A" },
      8861: { f: "A" },
      8862: { f: "A" },
      8863: { f: "A" },
      8864: { f: "A" },
      8865: { f: "A" },
      8873: { f: "A" },
      8874: { f: "A" },
      8876: { f: "A" },
      8877: { f: "A" },
      8878: { f: "A" },
      8879: { f: "A" },
      8882: { f: "A" },
      8883: { f: "A" },
      8884: { f: "A" },
      8885: { f: "A" },
      8888: { f: "A" },
      8890: { f: "A" },
      8891: { f: "A" },
      8892: { f: "A" },
      8896: { f: "S1" },
      8897: { f: "S1" },
      8898: { f: "S1" },
      8899: { f: "S1" },
      8903: { f: "A" },
      8905: { f: "A" },
      8906: { f: "A" },
      8907: { f: "A" },
      8908: { f: "A" },
      8909: { f: "A" },
      8910: { f: "A" },
      8911: { f: "A" },
      8912: { f: "A" },
      8913: { f: "A" },
      8914: { f: "A" },
      8915: { f: "A" },
      8916: { f: "A" },
      8918: { f: "A" },
      8919: { f: "A" },
      8920: { f: "A" },
      8921: { f: "A" },
      8922: { f: "A" },
      8923: { f: "A" },
      8926: { f: "A" },
      8927: { f: "A" },
      8928: { f: "A" },
      8929: { f: "A" },
      8930: { c: "\\2291\\338" },
      8931: { c: "\\2292\\338" },
      8934: { f: "A" },
      8935: { f: "A" },
      8936: { f: "A" },
      8937: { f: "A" },
      8938: { f: "A" },
      8939: { f: "A" },
      8940: { f: "A" },
      8941: { f: "A" },
      8965: { c: "\\22BC", f: "A" },
      8966: { c: "\\2A5E", f: "A" },
      8988: { c: "\\250C", f: "A" },
      8989: { c: "\\2510", f: "A" },
      8990: { c: "\\2514", f: "A" },
      8991: { c: "\\2518", f: "A" },
      9001: { c: "\\27E8" },
      9002: { c: "\\27E9" },
      9168: { f: "S1" },
      9416: { f: "A" },
      9484: { f: "A" },
      9488: { f: "A" },
      9492: { f: "A" },
      9496: { f: "A" },
      9585: { f: "A" },
      9586: { f: "A" },
      9632: { f: "A" },
      9633: { f: "A" },
      9642: { c: "\\25A0", f: "A" },
      9650: { f: "A" },
      9652: { c: "\\25B2", f: "A" },
      9653: { c: "\\25B3" },
      9654: { f: "A" },
      9656: { c: "\\25B6", f: "A" },
      9660: { f: "A" },
      9662: { c: "\\25BC", f: "A" },
      9663: { c: "\\25BD" },
      9664: { f: "A" },
      9666: { c: "\\25C0", f: "A" },
      9674: { f: "A" },
      9723: { c: "\\25A1", f: "A" },
      9724: { c: "\\25A0", f: "A" },
      9733: { f: "A" },
      10003: { f: "A" },
      10016: { f: "A" },
      10072: { c: "\\2223" },
      10731: { f: "A" },
      10744: { c: "/", f: "I" },
      10752: { f: "S1" },
      10753: { f: "S1" },
      10754: { f: "S1" },
      10756: { f: "S1" },
      10758: { f: "S1" },
      10764: { c: "\\222C\\222C", f: "S1" },
      10799: { c: "\\D7" },
      10846: { f: "A" },
      10877: { f: "A" },
      10878: { f: "A" },
      10885: { f: "A" },
      10886: { f: "A" },
      10887: { f: "A" },
      10888: { f: "A" },
      10889: { f: "A" },
      10890: { f: "A" },
      10891: { f: "A" },
      10892: { f: "A" },
      10901: { f: "A" },
      10902: { f: "A" },
      10933: { f: "A" },
      10934: { f: "A" },
      10935: { f: "A" },
      10936: { f: "A" },
      10937: { f: "A" },
      10938: { f: "A" },
      10949: { f: "A" },
      10950: { f: "A" },
      10955: { f: "A" },
      10956: { f: "A" },
      12296: { c: "\\27E8" },
      12297: { c: "\\27E9" },
      57350: { f: "A" },
      57351: { f: "A" },
      57352: { f: "A" },
      57353: { f: "A" },
      57356: { f: "A" },
      57357: { f: "A" },
      57358: { f: "A" },
      57359: { f: "A" },
      57360: { f: "A" },
      57361: { f: "A" },
      57366: { f: "A" },
      57367: { f: "A" },
      57368: { f: "A" },
      57369: { f: "A" },
      57370: { f: "A" },
      57371: { f: "A" },
      119808: { c: "A", f: "B" },
      119809: { c: "B", f: "B" },
      119810: { c: "C", f: "B" },
      119811: { c: "D", f: "B" },
      119812: { c: "E", f: "B" },
      119813: { c: "F", f: "B" },
      119814: { c: "G", f: "B" },
      119815: { c: "H", f: "B" },
      119816: { c: "I", f: "B" },
      119817: { c: "J", f: "B" },
      119818: { c: "K", f: "B" },
      119819: { c: "L", f: "B" },
      119820: { c: "M", f: "B" },
      119821: { c: "N", f: "B" },
      119822: { c: "O", f: "B" },
      119823: { c: "P", f: "B" },
      119824: { c: "Q", f: "B" },
      119825: { c: "R", f: "B" },
      119826: { c: "S", f: "B" },
      119827: { c: "T", f: "B" },
      119828: { c: "U", f: "B" },
      119829: { c: "V", f: "B" },
      119830: { c: "W", f: "B" },
      119831: { c: "X", f: "B" },
      119832: { c: "Y", f: "B" },
      119833: { c: "Z", f: "B" },
      119834: { c: "a", f: "B" },
      119835: { c: "b", f: "B" },
      119836: { c: "c", f: "B" },
      119837: { c: "d", f: "B" },
      119838: { c: "e", f: "B" },
      119839: { c: "f", f: "B" },
      119840: { c: "g", f: "B" },
      119841: { c: "h", f: "B" },
      119842: { c: "i", f: "B" },
      119843: { c: "j", f: "B" },
      119844: { c: "k", f: "B" },
      119845: { c: "l", f: "B" },
      119846: { c: "m", f: "B" },
      119847: { c: "n", f: "B" },
      119848: { c: "o", f: "B" },
      119849: { c: "p", f: "B" },
      119850: { c: "q", f: "B" },
      119851: { c: "r", f: "B" },
      119852: { c: "s", f: "B" },
      119853: { c: "t", f: "B" },
      119854: { c: "u", f: "B" },
      119855: { c: "v", f: "B" },
      119856: { c: "w", f: "B" },
      119857: { c: "x", f: "B" },
      119858: { c: "y", f: "B" },
      119859: { c: "z", f: "B" },
      119860: { c: "A", f: "I" },
      119861: { c: "B", f: "I" },
      119862: { c: "C", f: "I" },
      119863: { c: "D", f: "I" },
      119864: { c: "E", f: "I" },
      119865: { c: "F", f: "I" },
      119866: { c: "G", f: "I" },
      119867: { c: "H", f: "I" },
      119868: { c: "I", f: "I" },
      119869: { c: "J", f: "I" },
      119870: { c: "K", f: "I" },
      119871: { c: "L", f: "I" },
      119872: { c: "M", f: "I" },
      119873: { c: "N", f: "I" },
      119874: { c: "O", f: "I" },
      119875: { c: "P", f: "I" },
      119876: { c: "Q", f: "I" },
      119877: { c: "R", f: "I" },
      119878: { c: "S", f: "I" },
      119879: { c: "T", f: "I" },
      119880: { c: "U", f: "I" },
      119881: { c: "V", f: "I" },
      119882: { c: "W", f: "I" },
      119883: { c: "X", f: "I" },
      119884: { c: "Y", f: "I" },
      119885: { c: "Z", f: "I" },
      119886: { c: "a", f: "I" },
      119887: { c: "b", f: "I" },
      119888: { c: "c", f: "I" },
      119889: { c: "d", f: "I" },
      119890: { c: "e", f: "I" },
      119891: { c: "f", f: "I" },
      119892: { c: "g", f: "I" },
      119894: { c: "i", f: "I" },
      119895: { c: "j", f: "I" },
      119896: { c: "k", f: "I" },
      119897: { c: "l", f: "I" },
      119898: { c: "m", f: "I" },
      119899: { c: "n", f: "I" },
      119900: { c: "o", f: "I" },
      119901: { c: "p", f: "I" },
      119902: { c: "q", f: "I" },
      119903: { c: "r", f: "I" },
      119904: { c: "s", f: "I" },
      119905: { c: "t", f: "I" },
      119906: { c: "u", f: "I" },
      119907: { c: "v", f: "I" },
      119908: { c: "w", f: "I" },
      119909: { c: "x", f: "I" },
      119910: { c: "y", f: "I" },
      119911: { c: "z", f: "I" },
      119912: { c: "A", f: "BI" },
      119913: { c: "B", f: "BI" },
      119914: { c: "C", f: "BI" },
      119915: { c: "D", f: "BI" },
      119916: { c: "E", f: "BI" },
      119917: { c: "F", f: "BI" },
      119918: { c: "G", f: "BI" },
      119919: { c: "H", f: "BI" },
      119920: { c: "I", f: "BI" },
      119921: { c: "J", f: "BI" },
      119922: { c: "K", f: "BI" },
      119923: { c: "L", f: "BI" },
      119924: { c: "M", f: "BI" },
      119925: { c: "N", f: "BI" },
      119926: { c: "O", f: "BI" },
      119927: { c: "P", f: "BI" },
      119928: { c: "Q", f: "BI" },
      119929: { c: "R", f: "BI" },
      119930: { c: "S", f: "BI" },
      119931: { c: "T", f: "BI" },
      119932: { c: "U", f: "BI" },
      119933: { c: "V", f: "BI" },
      119934: { c: "W", f: "BI" },
      119935: { c: "X", f: "BI" },
      119936: { c: "Y", f: "BI" },
      119937: { c: "Z", f: "BI" },
      119938: { c: "a", f: "BI" },
      119939: { c: "b", f: "BI" },
      119940: { c: "c", f: "BI" },
      119941: { c: "d", f: "BI" },
      119942: { c: "e", f: "BI" },
      119943: { c: "f", f: "BI" },
      119944: { c: "g", f: "BI" },
      119945: { c: "h", f: "BI" },
      119946: { c: "i", f: "BI" },
      119947: { c: "j", f: "BI" },
      119948: { c: "k", f: "BI" },
      119949: { c: "l", f: "BI" },
      119950: { c: "m", f: "BI" },
      119951: { c: "n", f: "BI" },
      119952: { c: "o", f: "BI" },
      119953: { c: "p", f: "BI" },
      119954: { c: "q", f: "BI" },
      119955: { c: "r", f: "BI" },
      119956: { c: "s", f: "BI" },
      119957: { c: "t", f: "BI" },
      119958: { c: "u", f: "BI" },
      119959: { c: "v", f: "BI" },
      119960: { c: "w", f: "BI" },
      119961: { c: "x", f: "BI" },
      119962: { c: "y", f: "BI" },
      119963: { c: "z", f: "BI" },
      119964: { c: "A", f: "SC" },
      119966: { c: "C", f: "SC" },
      119967: { c: "D", f: "SC" },
      119970: { c: "G", f: "SC" },
      119973: { c: "J", f: "SC" },
      119974: { c: "K", f: "SC" },
      119977: { c: "N", f: "SC" },
      119978: { c: "O", f: "SC" },
      119979: { c: "P", f: "SC" },
      119980: { c: "Q", f: "SC" },
      119982: { c: "S", f: "SC" },
      119983: { c: "T", f: "SC" },
      119984: { c: "U", f: "SC" },
      119985: { c: "V", f: "SC" },
      119986: { c: "W", f: "SC" },
      119987: { c: "X", f: "SC" },
      119988: { c: "Y", f: "SC" },
      119989: { c: "Z", f: "SC" },
      120068: { c: "A", f: "FR" },
      120069: { c: "B", f: "FR" },
      120071: { c: "D", f: "FR" },
      120072: { c: "E", f: "FR" },
      120073: { c: "F", f: "FR" },
      120074: { c: "G", f: "FR" },
      120077: { c: "J", f: "FR" },
      120078: { c: "K", f: "FR" },
      120079: { c: "L", f: "FR" },
      120080: { c: "M", f: "FR" },
      120081: { c: "N", f: "FR" },
      120082: { c: "O", f: "FR" },
      120083: { c: "P", f: "FR" },
      120084: { c: "Q", f: "FR" },
      120086: { c: "S", f: "FR" },
      120087: { c: "T", f: "FR" },
      120088: { c: "U", f: "FR" },
      120089: { c: "V", f: "FR" },
      120090: { c: "W", f: "FR" },
      120091: { c: "X", f: "FR" },
      120092: { c: "Y", f: "FR" },
      120094: { c: "a", f: "FR" },
      120095: { c: "b", f: "FR" },
      120096: { c: "c", f: "FR" },
      120097: { c: "d", f: "FR" },
      120098: { c: "e", f: "FR" },
      120099: { c: "f", f: "FR" },
      120100: { c: "g", f: "FR" },
      120101: { c: "h", f: "FR" },
      120102: { c: "i", f: "FR" },
      120103: { c: "j", f: "FR" },
      120104: { c: "k", f: "FR" },
      120105: { c: "l", f: "FR" },
      120106: { c: "m", f: "FR" },
      120107: { c: "n", f: "FR" },
      120108: { c: "o", f: "FR" },
      120109: { c: "p", f: "FR" },
      120110: { c: "q", f: "FR" },
      120111: { c: "r", f: "FR" },
      120112: { c: "s", f: "FR" },
      120113: { c: "t", f: "FR" },
      120114: { c: "u", f: "FR" },
      120115: { c: "v", f: "FR" },
      120116: { c: "w", f: "FR" },
      120117: { c: "x", f: "FR" },
      120118: { c: "y", f: "FR" },
      120119: { c: "z", f: "FR" },
      120120: { c: "A", f: "A" },
      120121: { c: "B", f: "A" },
      120123: { c: "D", f: "A" },
      120124: { c: "E", f: "A" },
      120125: { c: "F", f: "A" },
      120126: { c: "G", f: "A" },
      120128: { c: "I", f: "A" },
      120129: { c: "J", f: "A" },
      120130: { c: "K", f: "A" },
      120131: { c: "L", f: "A" },
      120132: { c: "M", f: "A" },
      120134: { c: "O", f: "A" },
      120138: { c: "S", f: "A" },
      120139: { c: "T", f: "A" },
      120140: { c: "U", f: "A" },
      120141: { c: "V", f: "A" },
      120142: { c: "W", f: "A" },
      120143: { c: "X", f: "A" },
      120144: { c: "Y", f: "A" },
      120172: { c: "A", f: "FRB" },
      120173: { c: "B", f: "FRB" },
      120174: { c: "C", f: "FRB" },
      120175: { c: "D", f: "FRB" },
      120176: { c: "E", f: "FRB" },
      120177: { c: "F", f: "FRB" },
      120178: { c: "G", f: "FRB" },
      120179: { c: "H", f: "FRB" },
      120180: { c: "I", f: "FRB" },
      120181: { c: "J", f: "FRB" },
      120182: { c: "K", f: "FRB" },
      120183: { c: "L", f: "FRB" },
      120184: { c: "M", f: "FRB" },
      120185: { c: "N", f: "FRB" },
      120186: { c: "O", f: "FRB" },
      120187: { c: "P", f: "FRB" },
      120188: { c: "Q", f: "FRB" },
      120189: { c: "R", f: "FRB" },
      120190: { c: "S", f: "FRB" },
      120191: { c: "T", f: "FRB" },
      120192: { c: "U", f: "FRB" },
      120193: { c: "V", f: "FRB" },
      120194: { c: "W", f: "FRB" },
      120195: { c: "X", f: "FRB" },
      120196: { c: "Y", f: "FRB" },
      120197: { c: "Z", f: "FRB" },
      120198: { c: "a", f: "FRB" },
      120199: { c: "b", f: "FRB" },
      120200: { c: "c", f: "FRB" },
      120201: { c: "d", f: "FRB" },
      120202: { c: "e", f: "FRB" },
      120203: { c: "f", f: "FRB" },
      120204: { c: "g", f: "FRB" },
      120205: { c: "h", f: "FRB" },
      120206: { c: "i", f: "FRB" },
      120207: { c: "j", f: "FRB" },
      120208: { c: "k", f: "FRB" },
      120209: { c: "l", f: "FRB" },
      120210: { c: "m", f: "FRB" },
      120211: { c: "n", f: "FRB" },
      120212: { c: "o", f: "FRB" },
      120213: { c: "p", f: "FRB" },
      120214: { c: "q", f: "FRB" },
      120215: { c: "r", f: "FRB" },
      120216: { c: "s", f: "FRB" },
      120217: { c: "t", f: "FRB" },
      120218: { c: "u", f: "FRB" },
      120219: { c: "v", f: "FRB" },
      120220: { c: "w", f: "FRB" },
      120221: { c: "x", f: "FRB" },
      120222: { c: "y", f: "FRB" },
      120223: { c: "z", f: "FRB" },
      120224: { c: "A", f: "SS" },
      120225: { c: "B", f: "SS" },
      120226: { c: "C", f: "SS" },
      120227: { c: "D", f: "SS" },
      120228: { c: "E", f: "SS" },
      120229: { c: "F", f: "SS" },
      120230: { c: "G", f: "SS" },
      120231: { c: "H", f: "SS" },
      120232: { c: "I", f: "SS" },
      120233: { c: "J", f: "SS" },
      120234: { c: "K", f: "SS" },
      120235: { c: "L", f: "SS" },
      120236: { c: "M", f: "SS" },
      120237: { c: "N", f: "SS" },
      120238: { c: "O", f: "SS" },
      120239: { c: "P", f: "SS" },
      120240: { c: "Q", f: "SS" },
      120241: { c: "R", f: "SS" },
      120242: { c: "S", f: "SS" },
      120243: { c: "T", f: "SS" },
      120244: { c: "U", f: "SS" },
      120245: { c: "V", f: "SS" },
      120246: { c: "W", f: "SS" },
      120247: { c: "X", f: "SS" },
      120248: { c: "Y", f: "SS" },
      120249: { c: "Z", f: "SS" },
      120250: { c: "a", f: "SS" },
      120251: { c: "b", f: "SS" },
      120252: { c: "c", f: "SS" },
      120253: { c: "d", f: "SS" },
      120254: { c: "e", f: "SS" },
      120255: { c: "f", f: "SS" },
      120256: { c: "g", f: "SS" },
      120257: { c: "h", f: "SS" },
      120258: { c: "i", f: "SS" },
      120259: { c: "j", f: "SS" },
      120260: { c: "k", f: "SS" },
      120261: { c: "l", f: "SS" },
      120262: { c: "m", f: "SS" },
      120263: { c: "n", f: "SS" },
      120264: { c: "o", f: "SS" },
      120265: { c: "p", f: "SS" },
      120266: { c: "q", f: "SS" },
      120267: { c: "r", f: "SS" },
      120268: { c: "s", f: "SS" },
      120269: { c: "t", f: "SS" },
      120270: { c: "u", f: "SS" },
      120271: { c: "v", f: "SS" },
      120272: { c: "w", f: "SS" },
      120273: { c: "x", f: "SS" },
      120274: { c: "y", f: "SS" },
      120275: { c: "z", f: "SS" },
      120276: { c: "A", f: "SSB" },
      120277: { c: "B", f: "SSB" },
      120278: { c: "C", f: "SSB" },
      120279: { c: "D", f: "SSB" },
      120280: { c: "E", f: "SSB" },
      120281: { c: "F", f: "SSB" },
      120282: { c: "G", f: "SSB" },
      120283: { c: "H", f: "SSB" },
      120284: { c: "I", f: "SSB" },
      120285: { c: "J", f: "SSB" },
      120286: { c: "K", f: "SSB" },
      120287: { c: "L", f: "SSB" },
      120288: { c: "M", f: "SSB" },
      120289: { c: "N", f: "SSB" },
      120290: { c: "O", f: "SSB" },
      120291: { c: "P", f: "SSB" },
      120292: { c: "Q", f: "SSB" },
      120293: { c: "R", f: "SSB" },
      120294: { c: "S", f: "SSB" },
      120295: { c: "T", f: "SSB" },
      120296: { c: "U", f: "SSB" },
      120297: { c: "V", f: "SSB" },
      120298: { c: "W", f: "SSB" },
      120299: { c: "X", f: "SSB" },
      120300: { c: "Y", f: "SSB" },
      120301: { c: "Z", f: "SSB" },
      120302: { c: "a", f: "SSB" },
      120303: { c: "b", f: "SSB" },
      120304: { c: "c", f: "SSB" },
      120305: { c: "d", f: "SSB" },
      120306: { c: "e", f: "SSB" },
      120307: { c: "f", f: "SSB" },
      120308: { c: "g", f: "SSB" },
      120309: { c: "h", f: "SSB" },
      120310: { c: "i", f: "SSB" },
      120311: { c: "j", f: "SSB" },
      120312: { c: "k", f: "SSB" },
      120313: { c: "l", f: "SSB" },
      120314: { c: "m", f: "SSB" },
      120315: { c: "n", f: "SSB" },
      120316: { c: "o", f: "SSB" },
      120317: { c: "p", f: "SSB" },
      120318: { c: "q", f: "SSB" },
      120319: { c: "r", f: "SSB" },
      120320: { c: "s", f: "SSB" },
      120321: { c: "t", f: "SSB" },
      120322: { c: "u", f: "SSB" },
      120323: { c: "v", f: "SSB" },
      120324: { c: "w", f: "SSB" },
      120325: { c: "x", f: "SSB" },
      120326: { c: "y", f: "SSB" },
      120327: { c: "z", f: "SSB" },
      120328: { c: "A", f: "SSI" },
      120329: { c: "B", f: "SSI" },
      120330: { c: "C", f: "SSI" },
      120331: { c: "D", f: "SSI" },
      120332: { c: "E", f: "SSI" },
      120333: { c: "F", f: "SSI" },
      120334: { c: "G", f: "SSI" },
      120335: { c: "H", f: "SSI" },
      120336: { c: "I", f: "SSI" },
      120337: { c: "J", f: "SSI" },
      120338: { c: "K", f: "SSI" },
      120339: { c: "L", f: "SSI" },
      120340: { c: "M", f: "SSI" },
      120341: { c: "N", f: "SSI" },
      120342: { c: "O", f: "SSI" },
      120343: { c: "P", f: "SSI" },
      120344: { c: "Q", f: "SSI" },
      120345: { c: "R", f: "SSI" },
      120346: { c: "S", f: "SSI" },
      120347: { c: "T", f: "SSI" },
      120348: { c: "U", f: "SSI" },
      120349: { c: "V", f: "SSI" },
      120350: { c: "W", f: "SSI" },
      120351: { c: "X", f: "SSI" },
      120352: { c: "Y", f: "SSI" },
      120353: { c: "Z", f: "SSI" },
      120354: { c: "a", f: "SSI" },
      120355: { c: "b", f: "SSI" },
      120356: { c: "c", f: "SSI" },
      120357: { c: "d", f: "SSI" },
      120358: { c: "e", f: "SSI" },
      120359: { c: "f", f: "SSI" },
      120360: { c: "g", f: "SSI" },
      120361: { c: "h", f: "SSI" },
      120362: { c: "i", f: "SSI" },
      120363: { c: "j", f: "SSI" },
      120364: { c: "k", f: "SSI" },
      120365: { c: "l", f: "SSI" },
      120366: { c: "m", f: "SSI" },
      120367: { c: "n", f: "SSI" },
      120368: { c: "o", f: "SSI" },
      120369: { c: "p", f: "SSI" },
      120370: { c: "q", f: "SSI" },
      120371: { c: "r", f: "SSI" },
      120372: { c: "s", f: "SSI" },
      120373: { c: "t", f: "SSI" },
      120374: { c: "u", f: "SSI" },
      120375: { c: "v", f: "SSI" },
      120376: { c: "w", f: "SSI" },
      120377: { c: "x", f: "SSI" },
      120378: { c: "y", f: "SSI" },
      120379: { c: "z", f: "SSI" },
      120432: { c: "A", f: "T" },
      120433: { c: "B", f: "T" },
      120434: { c: "C", f: "T" },
      120435: { c: "D", f: "T" },
      120436: { c: "E", f: "T" },
      120437: { c: "F", f: "T" },
      120438: { c: "G", f: "T" },
      120439: { c: "H", f: "T" },
      120440: { c: "I", f: "T" },
      120441: { c: "J", f: "T" },
      120442: { c: "K", f: "T" },
      120443: { c: "L", f: "T" },
      120444: { c: "M", f: "T" },
      120445: { c: "N", f: "T" },
      120446: { c: "O", f: "T" },
      120447: { c: "P", f: "T" },
      120448: { c: "Q", f: "T" },
      120449: { c: "R", f: "T" },
      120450: { c: "S", f: "T" },
      120451: { c: "T", f: "T" },
      120452: { c: "U", f: "T" },
      120453: { c: "V", f: "T" },
      120454: { c: "W", f: "T" },
      120455: { c: "X", f: "T" },
      120456: { c: "Y", f: "T" },
      120457: { c: "Z", f: "T" },
      120458: { c: "a", f: "T" },
      120459: { c: "b", f: "T" },
      120460: { c: "c", f: "T" },
      120461: { c: "d", f: "T" },
      120462: { c: "e", f: "T" },
      120463: { c: "f", f: "T" },
      120464: { c: "g", f: "T" },
      120465: { c: "h", f: "T" },
      120466: { c: "i", f: "T" },
      120467: { c: "j", f: "T" },
      120468: { c: "k", f: "T" },
      120469: { c: "l", f: "T" },
      120470: { c: "m", f: "T" },
      120471: { c: "n", f: "T" },
      120472: { c: "o", f: "T" },
      120473: { c: "p", f: "T" },
      120474: { c: "q", f: "T" },
      120475: { c: "r", f: "T" },
      120476: { c: "s", f: "T" },
      120477: { c: "t", f: "T" },
      120478: { c: "u", f: "T" },
      120479: { c: "v", f: "T" },
      120480: { c: "w", f: "T" },
      120481: { c: "x", f: "T" },
      120482: { c: "y", f: "T" },
      120483: { c: "z", f: "T" },
      120488: { c: "A", f: "B" },
      120489: { c: "B", f: "B" },
      120490: { c: "\\393", f: "B" },
      120491: { c: "\\394", f: "B" },
      120492: { c: "E", f: "B" },
      120493: { c: "Z", f: "B" },
      120494: { c: "H", f: "B" },
      120495: { c: "\\398", f: "B" },
      120496: { c: "I", f: "B" },
      120497: { c: "K", f: "B" },
      120498: { c: "\\39B", f: "B" },
      120499: { c: "M", f: "B" },
      120500: { c: "N", f: "B" },
      120501: { c: "\\39E", f: "B" },
      120502: { c: "O", f: "B" },
      120503: { c: "\\3A0", f: "B" },
      120504: { c: "P", f: "B" },
      120506: { c: "\\3A3", f: "B" },
      120507: { c: "T", f: "B" },
      120508: { c: "\\3A5", f: "B" },
      120509: { c: "\\3A6", f: "B" },
      120510: { c: "X", f: "B" },
      120511: { c: "\\3A8", f: "B" },
      120512: { c: "\\3A9", f: "B" },
      120513: { c: "\\2207", f: "B" },
      120546: { c: "A", f: "I" },
      120547: { c: "B", f: "I" },
      120548: { c: "\\393", f: "I" },
      120549: { c: "\\394", f: "I" },
      120550: { c: "E", f: "I" },
      120551: { c: "Z", f: "I" },
      120552: { c: "H", f: "I" },
      120553: { c: "\\398", f: "I" },
      120554: { c: "I", f: "I" },
      120555: { c: "K", f: "I" },
      120556: { c: "\\39B", f: "I" },
      120557: { c: "M", f: "I" },
      120558: { c: "N", f: "I" },
      120559: { c: "\\39E", f: "I" },
      120560: { c: "O", f: "I" },
      120561: { c: "\\3A0", f: "I" },
      120562: { c: "P", f: "I" },
      120564: { c: "\\3A3", f: "I" },
      120565: { c: "T", f: "I" },
      120566: { c: "\\3A5", f: "I" },
      120567: { c: "\\3A6", f: "I" },
      120568: { c: "X", f: "I" },
      120569: { c: "\\3A8", f: "I" },
      120570: { c: "\\3A9", f: "I" },
      120572: { c: "\\3B1", f: "I" },
      120573: { c: "\\3B2", f: "I" },
      120574: { c: "\\3B3", f: "I" },
      120575: { c: "\\3B4", f: "I" },
      120576: { c: "\\3B5", f: "I" },
      120577: { c: "\\3B6", f: "I" },
      120578: { c: "\\3B7", f: "I" },
      120579: { c: "\\3B8", f: "I" },
      120580: { c: "\\3B9", f: "I" },
      120581: { c: "\\3BA", f: "I" },
      120582: { c: "\\3BB", f: "I" },
      120583: { c: "\\3BC", f: "I" },
      120584: { c: "\\3BD", f: "I" },
      120585: { c: "\\3BE", f: "I" },
      120586: { c: "\\3BF", f: "I" },
      120587: { c: "\\3C0", f: "I" },
      120588: { c: "\\3C1", f: "I" },
      120589: { c: "\\3C2", f: "I" },
      120590: { c: "\\3C3", f: "I" },
      120591: { c: "\\3C4", f: "I" },
      120592: { c: "\\3C5", f: "I" },
      120593: { c: "\\3C6", f: "I" },
      120594: { c: "\\3C7", f: "I" },
      120595: { c: "\\3C8", f: "I" },
      120596: { c: "\\3C9", f: "I" },
      120597: { c: "\\2202" },
      120598: { c: "\\3F5", f: "I" },
      120599: { c: "\\3D1", f: "I" },
      120600: { c: "\\E009", f: "A" },
      120601: { c: "\\3D5", f: "I" },
      120602: { c: "\\3F1", f: "I" },
      120603: { c: "\\3D6", f: "I" },
      120604: { c: "A", f: "BI" },
      120605: { c: "B", f: "BI" },
      120606: { c: "\\393", f: "BI" },
      120607: { c: "\\394", f: "BI" },
      120608: { c: "E", f: "BI" },
      120609: { c: "Z", f: "BI" },
      120610: { c: "H", f: "BI" },
      120611: { c: "\\398", f: "BI" },
      120612: { c: "I", f: "BI" },
      120613: { c: "K", f: "BI" },
      120614: { c: "\\39B", f: "BI" },
      120615: { c: "M", f: "BI" },
      120616: { c: "N", f: "BI" },
      120617: { c: "\\39E", f: "BI" },
      120618: { c: "O", f: "BI" },
      120619: { c: "\\3A0", f: "BI" },
      120620: { c: "P", f: "BI" },
      120622: { c: "\\3A3", f: "BI" },
      120623: { c: "T", f: "BI" },
      120624: { c: "\\3A5", f: "BI" },
      120625: { c: "\\3A6", f: "BI" },
      120626: { c: "X", f: "BI" },
      120627: { c: "\\3A8", f: "BI" },
      120628: { c: "\\3A9", f: "BI" },
      120630: { c: "\\3B1", f: "BI" },
      120631: { c: "\\3B2", f: "BI" },
      120632: { c: "\\3B3", f: "BI" },
      120633: { c: "\\3B4", f: "BI" },
      120634: { c: "\\3B5", f: "BI" },
      120635: { c: "\\3B6", f: "BI" },
      120636: { c: "\\3B7", f: "BI" },
      120637: { c: "\\3B8", f: "BI" },
      120638: { c: "\\3B9", f: "BI" },
      120639: { c: "\\3BA", f: "BI" },
      120640: { c: "\\3BB", f: "BI" },
      120641: { c: "\\3BC", f: "BI" },
      120642: { c: "\\3BD", f: "BI" },
      120643: { c: "\\3BE", f: "BI" },
      120644: { c: "\\3BF", f: "BI" },
      120645: { c: "\\3C0", f: "BI" },
      120646: { c: "\\3C1", f: "BI" },
      120647: { c: "\\3C2", f: "BI" },
      120648: { c: "\\3C3", f: "BI" },
      120649: { c: "\\3C4", f: "BI" },
      120650: { c: "\\3C5", f: "BI" },
      120651: { c: "\\3C6", f: "BI" },
      120652: { c: "\\3C7", f: "BI" },
      120653: { c: "\\3C8", f: "BI" },
      120654: { c: "\\3C9", f: "BI" },
      120655: { c: "\\2202", f: "B" },
      120656: { c: "\\3F5", f: "BI" },
      120657: { c: "\\3D1", f: "BI" },
      120658: { c: "\\E009", f: "A" },
      120659: { c: "\\3D5", f: "BI" },
      120660: { c: "\\3F1", f: "BI" },
      120661: { c: "\\3D6", f: "BI" },
      120662: { c: "A", f: "SSB" },
      120663: { c: "B", f: "SSB" },
      120664: { c: "\\393", f: "SSB" },
      120665: { c: "\\394", f: "SSB" },
      120666: { c: "E", f: "SSB" },
      120667: { c: "Z", f: "SSB" },
      120668: { c: "H", f: "SSB" },
      120669: { c: "\\398", f: "SSB" },
      120670: { c: "I", f: "SSB" },
      120671: { c: "K", f: "SSB" },
      120672: { c: "\\39B", f: "SSB" },
      120673: { c: "M", f: "SSB" },
      120674: { c: "N", f: "SSB" },
      120675: { c: "\\39E", f: "SSB" },
      120676: { c: "O", f: "SSB" },
      120677: { c: "\\3A0", f: "SSB" },
      120678: { c: "P", f: "SSB" },
      120680: { c: "\\3A3", f: "SSB" },
      120681: { c: "T", f: "SSB" },
      120682: { c: "\\3A5", f: "SSB" },
      120683: { c: "\\3A6", f: "SSB" },
      120684: { c: "X", f: "SSB" },
      120685: { c: "\\3A8", f: "SSB" },
      120686: { c: "\\3A9", f: "SSB" },
      120782: { c: "0", f: "B" },
      120783: { c: "1", f: "B" },
      120784: { c: "2", f: "B" },
      120785: { c: "3", f: "B" },
      120786: { c: "4", f: "B" },
      120787: { c: "5", f: "B" },
      120788: { c: "6", f: "B" },
      120789: { c: "7", f: "B" },
      120790: { c: "8", f: "B" },
      120791: { c: "9", f: "B" },
      120802: { c: "0", f: "SS" },
      120803: { c: "1", f: "SS" },
      120804: { c: "2", f: "SS" },
      120805: { c: "3", f: "SS" },
      120806: { c: "4", f: "SS" },
      120807: { c: "5", f: "SS" },
      120808: { c: "6", f: "SS" },
      120809: { c: "7", f: "SS" },
      120810: { c: "8", f: "SS" },
      120811: { c: "9", f: "SS" },
      120812: { c: "0", f: "SSB" },
      120813: { c: "1", f: "SSB" },
      120814: { c: "2", f: "SSB" },
      120815: { c: "3", f: "SSB" },
      120816: { c: "4", f: "SSB" },
      120817: { c: "5", f: "SSB" },
      120818: { c: "6", f: "SSB" },
      120819: { c: "7", f: "SSB" },
      120820: { c: "8", f: "SSB" },
      120821: { c: "9", f: "SSB" },
      120822: { c: "0", f: "T" },
      120823: { c: "1", f: "T" },
      120824: { c: "2", f: "T" },
      120825: { c: "3", f: "T" },
      120826: { c: "4", f: "T" },
      120827: { c: "5", f: "T" },
      120828: { c: "6", f: "T" },
      120829: { c: "7", f: "T" },
      120830: { c: "8", f: "T" },
      120831: { c: "9", f: "T" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/sans-serif-bold-italic.js
var require_sans_serif_bold_italic = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/sans-serif-bold-italic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sansSerifBoldItalic = void 0;
    exports.sansSerifBoldItalic = {
      305: [0.458, 0, 0.256],
      567: [0.458, 0.205, 0.286]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/sans-serif-bold-italic.js
var require_sans_serif_bold_italic2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/sans-serif-bold-italic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sansSerifBoldItalic = void 0;
    var FontData_js_1 = require_FontData2();
    var sans_serif_bold_italic_js_1 = require_sans_serif_bold_italic();
    exports.sansSerifBoldItalic = (0, FontData_js_1.AddCSS)(sans_serif_bold_italic_js_1.sansSerifBoldItalic, {
      305: { f: "SSB" },
      567: { f: "SSB" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/sans-serif-bold.js
var require_sans_serif_bold = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/sans-serif-bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sansSerifBold = void 0;
    exports.sansSerifBold = {
      33: [0.694, 0, 0.367],
      34: [0.694, -0.442, 0.558],
      35: [0.694, 0.193, 0.917],
      36: [0.75, 0.056, 0.55],
      37: [0.75, 0.056, 1.029],
      38: [0.716, 0.022, 0.831],
      39: [0.694, -0.442, 0.306],
      40: [0.75, 0.249, 0.428],
      41: [0.75, 0.25, 0.428],
      42: [0.75, -0.293, 0.55],
      43: [0.617, 0.116, 0.856],
      44: [0.146, 0.106, 0.306],
      45: [0.273, -0.186, 0.367],
      46: [0.146, 0, 0.306],
      47: [0.75, 0.249, 0.55],
      58: [0.458, 0, 0.306],
      59: [0.458, 0.106, 0.306],
      61: [0.407, -0.094, 0.856],
      63: [0.705, 0, 0.519],
      64: [0.704, 0.011, 0.733],
      91: [0.75, 0.25, 0.343],
      93: [0.75, 0.25, 0.343],
      94: [0.694, -0.537, 0.55],
      95: [-0.023, 0.11, 0.55],
      126: [0.344, -0.198, 0.55],
      305: [0.458, 0, 0.256],
      567: [0.458, 0.205, 0.286],
      768: [0.694, -0.537, 0],
      769: [0.694, -0.537, 0],
      770: [0.694, -0.537, 0],
      771: [0.694, -0.548, 0],
      772: [0.66, -0.56, 0],
      774: [0.694, -0.552, 0],
      775: [0.695, -0.596, 0],
      776: [0.695, -0.595, 0],
      778: [0.694, -0.538, 0],
      779: [0.694, -0.537, 0],
      780: [0.657, -0.5, 0],
      8211: [0.327, -0.24, 0.55],
      8212: [0.327, -0.24, 1.1],
      8213: [0.327, -0.24, 1.1],
      8215: [-0.023, 0.11, 0.55],
      8216: [0.694, -0.443, 0.306],
      8217: [0.694, -0.442, 0.306],
      8220: [0.694, -0.443, 0.558],
      8221: [0.694, -0.442, 0.558],
      8260: [0.75, 0.249, 0.55],
      8710: [0.694, 0, 0.917]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/sans-serif-bold.js
var require_sans_serif_bold2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/sans-serif-bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sansSerifBold = void 0;
    var FontData_js_1 = require_FontData2();
    var sans_serif_bold_js_1 = require_sans_serif_bold();
    exports.sansSerifBold = (0, FontData_js_1.AddCSS)(sans_serif_bold_js_1.sansSerifBold, {
      8213: { c: "\\2014" },
      8215: { c: "_" },
      8260: { c: "/" },
      8710: { c: "\\394" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/sans-serif-italic.js
var require_sans_serif_italic = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/sans-serif-italic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sansSerifItalic = void 0;
    exports.sansSerifItalic = {
      33: [0.694, 0, 0.319, { ic: 0.036 }],
      34: [0.694, -0.471, 0.5],
      35: [0.694, 0.194, 0.833, { ic: 0.018 }],
      36: [0.75, 0.056, 0.5, { ic: 0.065 }],
      37: [0.75, 0.056, 0.833],
      38: [0.716, 0.022, 0.758],
      39: [0.694, -0.471, 0.278, { ic: 0.057 }],
      40: [0.75, 0.25, 0.389, { ic: 0.102 }],
      41: [0.75, 0.25, 0.389],
      42: [0.75, -0.306, 0.5, { ic: 0.068 }],
      43: [0.583, 0.083, 0.778],
      44: [0.098, 0.125, 0.278],
      45: [0.259, -0.186, 0.333],
      46: [0.098, 0, 0.278],
      47: [0.75, 0.25, 0.5, { ic: 0.1 }],
      48: [0.678, 0.022, 0.5, { ic: 0.049 }],
      49: [0.678, 0, 0.5],
      50: [0.678, 0, 0.5, { ic: 0.051 }],
      51: [0.678, 0.022, 0.5, { ic: 0.044 }],
      52: [0.656, 0, 0.5, { ic: 0.021 }],
      53: [0.656, 0.022, 0.5, { ic: 0.055 }],
      54: [0.678, 0.022, 0.5, { ic: 0.048 }],
      55: [0.656, 0.011, 0.5, { ic: 0.096 }],
      56: [0.678, 0.022, 0.5, { ic: 0.054 }],
      57: [0.677, 0.022, 0.5, { ic: 0.045 }],
      58: [0.444, 0, 0.278],
      59: [0.444, 0.125, 0.278],
      61: [0.37, -0.13, 0.778, { ic: 0.018 }],
      63: [0.704, 0, 0.472, { ic: 0.064 }],
      64: [0.705, 0.01, 0.667, { ic: 0.04 }],
      91: [0.75, 0.25, 0.289, { ic: 0.136 }],
      93: [0.75, 0.25, 0.289, { ic: 0.064 }],
      94: [0.694, -0.527, 0.5, { ic: 0.033 }],
      95: [-0.038, 0.114, 0.5, { ic: 0.065 }],
      126: [0.327, -0.193, 0.5, { ic: 0.06 }],
      305: [0.444, 0, 0.239, { ic: 0.019 }],
      567: [0.444, 0.204, 0.267, { ic: 0.019 }],
      768: [0.694, -0.527, 0],
      769: [0.694, -0.527, 0, { ic: 0.063 }],
      770: [0.694, -0.527, 0, { ic: 0.033 }],
      771: [0.677, -0.543, 0, { ic: 0.06 }],
      772: [0.631, -0.552, 0, { ic: 0.064 }],
      774: [0.694, -0.508, 0, { ic: 0.073 }],
      775: [0.68, -0.576, 0],
      776: [0.68, -0.582, 0, { ic: 0.04 }],
      778: [0.693, -0.527, 0],
      779: [0.694, -0.527, 0, { ic: 0.063 }],
      780: [0.654, -0.487, 0, { ic: 0.06 }],
      913: [0.694, 0, 0.667],
      914: [0.694, 0, 0.667, { ic: 0.029 }],
      915: [0.691, 0, 0.542, { ic: 0.104 }],
      916: [0.694, 0, 0.833],
      917: [0.691, 0, 0.597, { ic: 0.091 }],
      918: [0.694, 0, 0.611, { ic: 0.091 }],
      919: [0.694, 0, 0.708, { ic: 0.06 }],
      920: [0.715, 0.022, 0.778, { ic: 0.026 }],
      921: [0.694, 0, 0.278, { ic: 0.06 }],
      922: [0.694, 0, 0.694, { ic: 0.091 }],
      923: [0.694, 0, 0.611],
      924: [0.694, 0, 0.875, { ic: 0.054 }],
      925: [0.694, 0, 0.708, { ic: 0.058 }],
      926: [0.688, 0, 0.667, { ic: 0.098 }],
      927: [0.716, 0.022, 0.736, { ic: 0.027 }],
      928: [0.691, 0, 0.708, { ic: 0.06 }],
      929: [0.694, 0, 0.639, { ic: 0.051 }],
      931: [0.694, 0, 0.722, { ic: 0.091 }],
      932: [0.688, 0, 0.681, { ic: 0.109 }],
      933: [0.716, 0, 0.778, { ic: 0.065 }],
      934: [0.694, 0, 0.722, { ic: 0.021 }],
      935: [0.694, 0, 0.667, { ic: 0.091 }],
      936: [0.694, 0, 0.778, { ic: 0.076 }],
      937: [0.716, 0, 0.722, { ic: 0.047 }],
      8211: [0.312, -0.236, 0.5, { ic: 0.065 }],
      8212: [0.312, -0.236, 1, { ic: 0.065 }],
      8213: [0.312, -0.236, 1, { ic: 0.065 }],
      8215: [-0.038, 0.114, 0.5, { ic: 0.065 }],
      8216: [0.694, -0.471, 0.278, { ic: 0.058 }],
      8217: [0.694, -0.471, 0.278, { ic: 0.057 }],
      8220: [0.694, -0.471, 0.5, { ic: 0.114 }],
      8221: [0.694, -0.471, 0.5],
      8260: [0.75, 0.25, 0.5, { ic: 0.1 }],
      8710: [0.694, 0, 0.833]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/sans-serif-italic.js
var require_sans_serif_italic2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/sans-serif-italic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sansSerifItalic = void 0;
    var FontData_js_1 = require_FontData2();
    var sans_serif_italic_js_1 = require_sans_serif_italic();
    exports.sansSerifItalic = (0, FontData_js_1.AddCSS)(sans_serif_italic_js_1.sansSerifItalic, {
      913: { c: "A" },
      914: { c: "B" },
      917: { c: "E" },
      918: { c: "Z" },
      919: { c: "H" },
      921: { c: "I" },
      922: { c: "K" },
      924: { c: "M" },
      925: { c: "N" },
      927: { c: "O" },
      929: { c: "P" },
      932: { c: "T" },
      935: { c: "X" },
      8213: { c: "\\2014" },
      8215: { c: "_" },
      8260: { c: "/" },
      8710: { c: "\\394" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/sans-serif.js
var require_sans_serif = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/sans-serif.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sansSerif = void 0;
    exports.sansSerif = {
      33: [0.694, 0, 0.319],
      34: [0.694, -0.471, 0.5],
      35: [0.694, 0.194, 0.833],
      36: [0.75, 0.056, 0.5],
      37: [0.75, 0.056, 0.833],
      38: [0.716, 0.022, 0.758],
      39: [0.694, -0.471, 0.278],
      40: [0.75, 0.25, 0.389],
      41: [0.75, 0.25, 0.389],
      42: [0.75, -0.306, 0.5],
      43: [0.583, 0.082, 0.778],
      44: [0.098, 0.125, 0.278],
      45: [0.259, -0.186, 0.333],
      46: [0.098, 0, 0.278],
      47: [0.75, 0.25, 0.5],
      58: [0.444, 0, 0.278],
      59: [0.444, 0.125, 0.278],
      61: [0.37, -0.13, 0.778],
      63: [0.704, 0, 0.472],
      64: [0.704, 0.011, 0.667],
      91: [0.75, 0.25, 0.289],
      93: [0.75, 0.25, 0.289],
      94: [0.694, -0.527, 0.5],
      95: [-0.038, 0.114, 0.5],
      126: [0.327, -0.193, 0.5],
      305: [0.444, 0, 0.239],
      567: [0.444, 0.205, 0.267],
      768: [0.694, -0.527, 0],
      769: [0.694, -0.527, 0],
      770: [0.694, -0.527, 0],
      771: [0.677, -0.543, 0],
      772: [0.631, -0.552, 0],
      774: [0.694, -0.508, 0],
      775: [0.68, -0.576, 0],
      776: [0.68, -0.582, 0],
      778: [0.694, -0.527, 0],
      779: [0.694, -0.527, 0],
      780: [0.654, -0.487, 0],
      913: [0.694, 0, 0.667],
      914: [0.694, 0, 0.667],
      915: [0.691, 0, 0.542],
      916: [0.694, 0, 0.833],
      917: [0.691, 0, 0.597],
      918: [0.694, 0, 0.611],
      919: [0.694, 0, 0.708],
      920: [0.716, 0.021, 0.778],
      921: [0.694, 0, 0.278],
      922: [0.694, 0, 0.694],
      923: [0.694, 0, 0.611],
      924: [0.694, 0, 0.875],
      925: [0.694, 0, 0.708],
      926: [0.688, 0, 0.667],
      927: [0.715, 0.022, 0.736],
      928: [0.691, 0, 0.708],
      929: [0.694, 0, 0.639],
      931: [0.694, 0, 0.722],
      932: [0.688, 0, 0.681],
      933: [0.716, 0, 0.778],
      934: [0.694, 0, 0.722],
      935: [0.694, 0, 0.667],
      936: [0.694, 0, 0.778],
      937: [0.716, 0, 0.722],
      8211: [0.312, -0.236, 0.5],
      8212: [0.312, -0.236, 1],
      8213: [0.312, -0.236, 1],
      8215: [-0.038, 0.114, 0.5],
      8216: [0.694, -0.471, 0.278],
      8217: [0.694, -0.471, 0.278],
      8220: [0.694, -0.471, 0.5],
      8221: [0.694, -0.471, 0.5],
      8260: [0.75, 0.25, 0.5],
      8710: [0.694, 0, 0.833]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/sans-serif.js
var require_sans_serif2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/sans-serif.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sansSerif = void 0;
    var FontData_js_1 = require_FontData2();
    var sans_serif_js_1 = require_sans_serif();
    exports.sansSerif = (0, FontData_js_1.AddCSS)(sans_serif_js_1.sansSerif, {
      913: { c: "A" },
      914: { c: "B" },
      917: { c: "E" },
      918: { c: "Z" },
      919: { c: "H" },
      921: { c: "I" },
      922: { c: "K" },
      924: { c: "M" },
      925: { c: "N" },
      927: { c: "O" },
      929: { c: "P" },
      932: { c: "T" },
      935: { c: "X" },
      8213: { c: "\\2014" },
      8215: { c: "_" },
      8260: { c: "/" },
      8710: { c: "\\394" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/script-bold.js
var require_script_bold = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/script-bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scriptBold = void 0;
    exports.scriptBold = {};
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/script-bold.js
var require_script_bold2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/script-bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scriptBold = void 0;
    var script_bold_js_1 = require_script_bold();
    Object.defineProperty(exports, "scriptBold", { enumerable: true, get: function() {
      return script_bold_js_1.scriptBold;
    } });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/script.js
var require_script = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/script.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.script = void 0;
    exports.script = {};
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/script.js
var require_script2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/script.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.script = void 0;
    var script_js_1 = require_script();
    Object.defineProperty(exports, "script", { enumerable: true, get: function() {
      return script_js_1.script;
    } });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/smallop.js
var require_smallop = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/smallop.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.smallop = void 0;
    exports.smallop = {
      40: [0.85, 0.349, 0.458],
      41: [0.85, 0.349, 0.458],
      47: [0.85, 0.349, 0.578],
      91: [0.85, 0.349, 0.417],
      92: [0.85, 0.349, 0.578],
      93: [0.85, 0.349, 0.417],
      123: [0.85, 0.349, 0.583],
      125: [0.85, 0.349, 0.583],
      710: [0.744, -0.551, 0.556],
      732: [0.722, -0.597, 0.556],
      770: [0.744, -0.551, 0],
      771: [0.722, -0.597, 0],
      8214: [0.602, 0, 0.778],
      8260: [0.85, 0.349, 0.578],
      8593: [0.6, 0, 0.667],
      8595: [0.6, 0, 0.667],
      8657: [0.599, 0, 0.778],
      8659: [0.6, 0, 0.778],
      8719: [0.75, 0.25, 0.944],
      8720: [0.75, 0.25, 0.944],
      8721: [0.75, 0.25, 1.056],
      8730: [0.85, 0.35, 1, { ic: 0.02 }],
      8739: [0.627, 0.015, 0.333],
      8741: [0.627, 0.015, 0.556],
      8747: [0.805, 0.306, 0.472, { ic: 0.138 }],
      8748: [0.805, 0.306, 0.819, { ic: 0.138 }],
      8749: [0.805, 0.306, 1.166, { ic: 0.138 }],
      8750: [0.805, 0.306, 0.472, { ic: 0.138 }],
      8896: [0.75, 0.249, 0.833],
      8897: [0.75, 0.249, 0.833],
      8898: [0.75, 0.249, 0.833],
      8899: [0.75, 0.249, 0.833],
      8968: [0.85, 0.349, 0.472],
      8969: [0.85, 0.349, 0.472],
      8970: [0.85, 0.349, 0.472],
      8971: [0.85, 0.349, 0.472],
      9001: [0.85, 0.35, 0.472],
      9002: [0.85, 0.35, 0.472],
      9168: [0.602, 0, 0.667],
      10072: [0.627, 0.015, 0.333],
      10216: [0.85, 0.35, 0.472],
      10217: [0.85, 0.35, 0.472],
      10752: [0.75, 0.25, 1.111],
      10753: [0.75, 0.25, 1.111],
      10754: [0.75, 0.25, 1.111],
      10756: [0.75, 0.249, 0.833],
      10758: [0.75, 0.249, 0.833],
      10764: [0.805, 0.306, 1.638, { ic: 0.138 }],
      12296: [0.85, 0.35, 0.472],
      12297: [0.85, 0.35, 0.472]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/smallop.js
var require_smallop2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/smallop.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.smallop = void 0;
    var FontData_js_1 = require_FontData2();
    var smallop_js_1 = require_smallop();
    exports.smallop = (0, FontData_js_1.AddCSS)(smallop_js_1.smallop, {
      8260: { c: "/" },
      9001: { c: "\\27E8" },
      9002: { c: "\\27E9" },
      10072: { c: "\\2223" },
      10764: { c: "\\222C\\222C" },
      12296: { c: "\\27E8" },
      12297: { c: "\\27E9" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/tex-calligraphic-bold.js
var require_tex_calligraphic_bold = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/tex-calligraphic-bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texCalligraphicBold = void 0;
    exports.texCalligraphicBold = {
      65: [0.751, 0.049, 0.921, { ic: 0.068, sk: 0.224 }],
      66: [0.705, 0.017, 0.748, { sk: 0.16 }],
      67: [0.703, 0.02, 0.613, { sk: 0.16 }],
      68: [0.686, 0, 0.892, { sk: 0.0958 }],
      69: [0.703, 0.016, 0.607, { ic: 0.02, sk: 0.128 }],
      70: [0.686, 0.03, 0.814, { ic: 0.116, sk: 0.128 }],
      71: [0.703, 0.113, 0.682, { sk: 0.128 }],
      72: [0.686, 0.048, 0.987, { sk: 0.128 }],
      73: [0.686, 0, 0.642, { ic: 0.104, sk: 0.0319 }],
      74: [0.686, 0.114, 0.779, { ic: 0.158, sk: 0.192 }],
      75: [0.703, 0.017, 0.871, { sk: 0.0639 }],
      76: [0.703, 0.017, 0.788, { sk: 0.16 }],
      77: [0.703, 0.049, 1.378, { sk: 0.16 }],
      78: [0.84, 0.049, 0.937, { ic: 0.168, sk: 0.0958 }],
      79: [0.703, 0.017, 0.906, { sk: 0.128 }],
      80: [0.686, 0.067, 0.81, { ic: 0.036, sk: 0.0958 }],
      81: [0.703, 0.146, 0.939, { sk: 0.128 }],
      82: [0.686, 0.017, 0.99, { sk: 0.0958 }],
      83: [0.703, 0.016, 0.696, { ic: 0.025, sk: 0.16 }],
      84: [0.72, 0.069, 0.644, { ic: 0.303, sk: 0.0319 }],
      85: [0.686, 0.024, 0.715, { ic: 0.056, sk: 0.0958 }],
      86: [0.686, 0.077, 0.737, { ic: 0.037, sk: 0.0319 }],
      87: [0.686, 0.077, 1.169, { ic: 0.037, sk: 0.0958 }],
      88: [0.686, 0, 0.817, { ic: 0.089, sk: 0.16 }],
      89: [0.686, 0.164, 0.759, { ic: 0.038, sk: 0.0958 }],
      90: [0.686, 0, 0.818, { ic: 0.035, sk: 0.16 }],
      305: [0.452, 8e-3, 0.394, { sk: 0.0319 }],
      567: [0.451, 0.201, 0.439, { sk: 0.0958 }]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-calligraphic-bold.js
var require_tex_calligraphic_bold2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-calligraphic-bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texCalligraphicBold = void 0;
    var FontData_js_1 = require_FontData2();
    var tex_calligraphic_bold_js_1 = require_tex_calligraphic_bold();
    exports.texCalligraphicBold = (0, FontData_js_1.AddCSS)(tex_calligraphic_bold_js_1.texCalligraphicBold, {
      305: { f: "B" },
      567: { f: "B" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/tex-calligraphic.js
var require_tex_calligraphic = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/tex-calligraphic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texCalligraphic = void 0;
    exports.texCalligraphic = {
      65: [0.728, 0.05, 0.798, { ic: 0.021, sk: 0.194 }],
      66: [0.705, 0.022, 0.657, { sk: 0.139 }],
      67: [0.705, 0.025, 0.527, { sk: 0.139 }],
      68: [0.683, 0, 0.771, { sk: 0.0833 }],
      69: [0.705, 0.022, 0.528, { ic: 0.036, sk: 0.111 }],
      70: [0.683, 0.032, 0.719, { ic: 0.11, sk: 0.111 }],
      71: [0.704, 0.119, 0.595, { sk: 0.111 }],
      72: [0.683, 0.048, 0.845, { sk: 0.111 }],
      73: [0.683, 0, 0.545, { ic: 0.097, sk: 0.0278 }],
      74: [0.683, 0.119, 0.678, { ic: 0.161, sk: 0.167 }],
      75: [0.705, 0.022, 0.762, { sk: 0.0556 }],
      76: [0.705, 0.022, 0.69, { sk: 0.139 }],
      77: [0.705, 0.05, 1.201, { sk: 0.139 }],
      78: [0.789, 0.05, 0.82, { ic: 0.159, sk: 0.0833 }],
      79: [0.705, 0.022, 0.796, { sk: 0.111 }],
      80: [0.683, 0.057, 0.696, { ic: 0.037, sk: 0.0833 }],
      81: [0.705, 0.131, 0.817, { sk: 0.111 }],
      82: [0.682, 0.022, 0.848, { sk: 0.0833 }],
      83: [0.705, 0.022, 0.606, { ic: 0.036, sk: 0.139 }],
      84: [0.717, 0.068, 0.545, { ic: 0.288, sk: 0.0278 }],
      85: [0.683, 0.028, 0.626, { ic: 0.061, sk: 0.0833 }],
      86: [0.683, 0.052, 0.613, { ic: 0.045, sk: 0.0278 }],
      87: [0.683, 0.053, 0.988, { ic: 0.046, sk: 0.0833 }],
      88: [0.683, 0, 0.713, { ic: 0.094, sk: 0.139 }],
      89: [0.683, 0.143, 0.668, { ic: 0.046, sk: 0.0833 }],
      90: [0.683, 0, 0.725, { ic: 0.042, sk: 0.139 }]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-calligraphic.js
var require_tex_calligraphic2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-calligraphic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texCalligraphic = void 0;
    var tex_calligraphic_js_1 = require_tex_calligraphic();
    Object.defineProperty(exports, "texCalligraphic", { enumerable: true, get: function() {
      return tex_calligraphic_js_1.texCalligraphic;
    } });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/tex-mathit.js
var require_tex_mathit = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/tex-mathit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texMathit = void 0;
    exports.texMathit = {
      65: [0.716, 0, 0.743],
      66: [0.683, 0, 0.704],
      67: [0.705, 0.021, 0.716],
      68: [0.683, 0, 0.755],
      69: [0.68, 0, 0.678],
      70: [0.68, 0, 0.653],
      71: [0.705, 0.022, 0.774],
      72: [0.683, 0, 0.743],
      73: [0.683, 0, 0.386],
      74: [0.683, 0.021, 0.525],
      75: [0.683, 0, 0.769],
      76: [0.683, 0, 0.627],
      77: [0.683, 0, 0.897],
      78: [0.683, 0, 0.743],
      79: [0.704, 0.022, 0.767],
      80: [0.683, 0, 0.678],
      81: [0.704, 0.194, 0.767],
      82: [0.683, 0.022, 0.729],
      83: [0.705, 0.022, 0.562],
      84: [0.677, 0, 0.716],
      85: [0.683, 0.022, 0.743],
      86: [0.683, 0.022, 0.743],
      87: [0.683, 0.022, 0.999],
      88: [0.683, 0, 0.743],
      89: [0.683, 0, 0.743],
      90: [0.683, 0, 0.613],
      97: [0.442, 0.011, 0.511],
      98: [0.694, 0.011, 0.46],
      99: [0.441, 0.01, 0.46],
      100: [0.694, 0.011, 0.511],
      101: [0.442, 0.01, 0.46],
      102: [0.705, 0.204, 0.307],
      103: [0.442, 0.205, 0.46],
      104: [0.694, 0.011, 0.511],
      105: [0.656, 0.01, 0.307],
      106: [0.656, 0.204, 0.307],
      107: [0.694, 0.011, 0.46],
      108: [0.694, 0.011, 0.256],
      109: [0.442, 0.011, 0.818],
      110: [0.442, 0.011, 0.562],
      111: [0.442, 0.011, 0.511],
      112: [0.442, 0.194, 0.511],
      113: [0.442, 0.194, 0.46],
      114: [0.442, 0.011, 0.422],
      115: [0.442, 0.011, 0.409],
      116: [0.626, 0.011, 0.332],
      117: [0.441, 0.011, 0.537],
      118: [0.443, 0.01, 0.46],
      119: [0.443, 0.011, 0.664],
      120: [0.442, 0.011, 0.464],
      121: [0.441, 0.205, 0.486],
      122: [0.442, 0.011, 0.409]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-mathit.js
var require_tex_mathit2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-mathit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texMathit = void 0;
    var tex_mathit_js_1 = require_tex_mathit();
    Object.defineProperty(exports, "texMathit", { enumerable: true, get: function() {
      return tex_mathit_js_1.texMathit;
    } });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/tex-oldstyle-bold.js
var require_tex_oldstyle_bold = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/tex-oldstyle-bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texOldstyleBold = void 0;
    exports.texOldstyleBold = {
      48: [0.46, 0.017, 0.575],
      49: [0.461, 0, 0.575],
      50: [0.46, 0, 0.575],
      51: [0.461, 0.211, 0.575],
      52: [0.469, 0.194, 0.575],
      53: [0.461, 0.211, 0.575],
      54: [0.66, 0.017, 0.575],
      55: [0.476, 0.211, 0.575],
      56: [0.661, 0.017, 0.575],
      57: [0.461, 0.21, 0.575],
      65: [0.751, 0.049, 0.921, { ic: 0.068, sk: 0.224 }],
      66: [0.705, 0.017, 0.748, { sk: 0.16 }],
      67: [0.703, 0.02, 0.613, { sk: 0.16 }],
      68: [0.686, 0, 0.892, { sk: 0.0958 }],
      69: [0.703, 0.016, 0.607, { ic: 0.02, sk: 0.128 }],
      70: [0.686, 0.03, 0.814, { ic: 0.116, sk: 0.128 }],
      71: [0.703, 0.113, 0.682, { sk: 0.128 }],
      72: [0.686, 0.048, 0.987, { sk: 0.128 }],
      73: [0.686, 0, 0.642, { ic: 0.104, sk: 0.0319 }],
      74: [0.686, 0.114, 0.779, { ic: 0.158, sk: 0.192 }],
      75: [0.703, 0.017, 0.871, { sk: 0.0639 }],
      76: [0.703, 0.017, 0.788, { sk: 0.16 }],
      77: [0.703, 0.049, 1.378, { sk: 0.16 }],
      78: [0.84, 0.049, 0.937, { ic: 0.168, sk: 0.0958 }],
      79: [0.703, 0.017, 0.906, { sk: 0.128 }],
      80: [0.686, 0.067, 0.81, { ic: 0.036, sk: 0.0958 }],
      81: [0.703, 0.146, 0.939, { sk: 0.128 }],
      82: [0.686, 0.017, 0.99, { sk: 0.0958 }],
      83: [0.703, 0.016, 0.696, { ic: 0.025, sk: 0.16 }],
      84: [0.72, 0.069, 0.644, { ic: 0.303, sk: 0.0319 }],
      85: [0.686, 0.024, 0.715, { ic: 0.056, sk: 0.0958 }],
      86: [0.686, 0.077, 0.737, { ic: 0.037, sk: 0.0319 }],
      87: [0.686, 0.077, 1.169, { ic: 0.037, sk: 0.0958 }],
      88: [0.686, 0, 0.817, { ic: 0.089, sk: 0.16 }],
      89: [0.686, 0.164, 0.759, { ic: 0.038, sk: 0.0958 }],
      90: [0.686, 0, 0.818, { ic: 0.035, sk: 0.16 }]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-oldstyle-bold.js
var require_tex_oldstyle_bold2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-oldstyle-bold.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texOldstyleBold = void 0;
    var tex_oldstyle_bold_js_1 = require_tex_oldstyle_bold();
    Object.defineProperty(exports, "texOldstyleBold", { enumerable: true, get: function() {
      return tex_oldstyle_bold_js_1.texOldstyleBold;
    } });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/tex-oldstyle.js
var require_tex_oldstyle = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/tex-oldstyle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texOldstyle = void 0;
    exports.texOldstyle = {
      48: [0.452, 0.022, 0.5],
      49: [0.453, 0, 0.5],
      50: [0.453, 0, 0.5],
      51: [0.452, 0.216, 0.5],
      52: [0.464, 0.194, 0.5],
      53: [0.453, 0.216, 0.5],
      54: [0.665, 0.022, 0.5],
      55: [0.463, 0.216, 0.5],
      56: [0.666, 0.021, 0.5],
      57: [0.453, 0.216, 0.5],
      65: [0.728, 0.05, 0.798, { ic: 0.021, sk: 0.194 }],
      66: [0.705, 0.022, 0.657, { sk: 0.139 }],
      67: [0.705, 0.025, 0.527, { sk: 0.139 }],
      68: [0.683, 0, 0.771, { sk: 0.0833 }],
      69: [0.705, 0.022, 0.528, { ic: 0.036, sk: 0.111 }],
      70: [0.683, 0.032, 0.719, { ic: 0.11, sk: 0.111 }],
      71: [0.704, 0.119, 0.595, { sk: 0.111 }],
      72: [0.683, 0.048, 0.845, { sk: 0.111 }],
      73: [0.683, 0, 0.545, { ic: 0.097, sk: 0.0278 }],
      74: [0.683, 0.119, 0.678, { ic: 0.161, sk: 0.167 }],
      75: [0.705, 0.022, 0.762, { sk: 0.0556 }],
      76: [0.705, 0.022, 0.69, { sk: 0.139 }],
      77: [0.705, 0.05, 1.201, { sk: 0.139 }],
      78: [0.789, 0.05, 0.82, { ic: 0.159, sk: 0.0833 }],
      79: [0.705, 0.022, 0.796, { sk: 0.111 }],
      80: [0.683, 0.057, 0.696, { ic: 0.037, sk: 0.0833 }],
      81: [0.705, 0.131, 0.817, { sk: 0.111 }],
      82: [0.682, 0.022, 0.848, { sk: 0.0833 }],
      83: [0.705, 0.022, 0.606, { ic: 0.036, sk: 0.139 }],
      84: [0.717, 0.068, 0.545, { ic: 0.288, sk: 0.0278 }],
      85: [0.683, 0.028, 0.626, { ic: 0.061, sk: 0.0833 }],
      86: [0.683, 0.052, 0.613, { ic: 0.045, sk: 0.0278 }],
      87: [0.683, 0.053, 0.988, { ic: 0.046, sk: 0.0833 }],
      88: [0.683, 0, 0.713, { ic: 0.094, sk: 0.139 }],
      89: [0.683, 0.143, 0.668, { ic: 0.046, sk: 0.0833 }],
      90: [0.683, 0, 0.725, { ic: 0.042, sk: 0.139 }]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-oldstyle.js
var require_tex_oldstyle2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-oldstyle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texOldstyle = void 0;
    var tex_oldstyle_js_1 = require_tex_oldstyle();
    Object.defineProperty(exports, "texOldstyle", { enumerable: true, get: function() {
      return tex_oldstyle_js_1.texOldstyle;
    } });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/tex-size3.js
var require_tex_size3 = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/tex-size3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texSize3 = void 0;
    exports.texSize3 = {
      40: [1.45, 0.949, 0.736],
      41: [1.45, 0.949, 0.736],
      47: [1.45, 0.949, 1.044],
      91: [1.45, 0.949, 0.528],
      92: [1.45, 0.949, 1.044],
      93: [1.45, 0.949, 0.528],
      123: [1.45, 0.949, 0.75],
      125: [1.45, 0.949, 0.75],
      710: [0.772, -0.564, 1.444],
      732: [0.749, -0.61, 1.444],
      770: [0.772, -0.564, 0],
      771: [0.749, -0.61, 0],
      8260: [1.45, 0.949, 1.044],
      8730: [1.45, 0.95, 1, { ic: 0.02 }],
      8968: [1.45, 0.949, 0.583],
      8969: [1.45, 0.949, 0.583],
      8970: [1.45, 0.949, 0.583],
      8971: [1.45, 0.949, 0.583],
      9001: [1.45, 0.95, 0.75],
      9002: [1.45, 0.949, 0.75],
      10216: [1.45, 0.95, 0.75],
      10217: [1.45, 0.949, 0.75],
      12296: [1.45, 0.95, 0.75],
      12297: [1.45, 0.949, 0.75]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-size3.js
var require_tex_size32 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-size3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texSize3 = void 0;
    var FontData_js_1 = require_FontData2();
    var tex_size3_js_1 = require_tex_size3();
    exports.texSize3 = (0, FontData_js_1.AddCSS)(tex_size3_js_1.texSize3, {
      8260: { c: "/" },
      9001: { c: "\\27E8" },
      9002: { c: "\\27E9" },
      12296: { c: "\\27E8" },
      12297: { c: "\\27E9" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/tex-size4.js
var require_tex_size4 = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/tex-size4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texSize4 = void 0;
    exports.texSize4 = {
      40: [1.75, 1.249, 0.792],
      41: [1.75, 1.249, 0.792],
      47: [1.75, 1.249, 1.278],
      91: [1.75, 1.249, 0.583],
      92: [1.75, 1.249, 1.278],
      93: [1.75, 1.249, 0.583],
      123: [1.75, 1.249, 0.806],
      125: [1.75, 1.249, 0.806],
      710: [0.845, -0.561, 1.889, { ic: 0.013 }],
      732: [0.823, -0.583, 1.889],
      770: [0.845, -0.561, 0, { ic: 0.013 }],
      771: [0.823, -0.583, 0],
      8260: [1.75, 1.249, 1.278],
      8730: [1.75, 1.25, 1, { ic: 0.02 }],
      8968: [1.75, 1.249, 0.639],
      8969: [1.75, 1.249, 0.639],
      8970: [1.75, 1.249, 0.639],
      8971: [1.75, 1.249, 0.639],
      9001: [1.75, 1.248, 0.806],
      9002: [1.75, 1.248, 0.806],
      9115: [1.154, 0.655, 0.875],
      9116: [0.61, 0.01, 0.875],
      9117: [1.165, 0.644, 0.875],
      9118: [1.154, 0.655, 0.875],
      9119: [0.61, 0.01, 0.875],
      9120: [1.165, 0.644, 0.875],
      9121: [1.154, 0.645, 0.667],
      9122: [0.602, 0, 0.667],
      9123: [1.155, 0.644, 0.667],
      9124: [1.154, 0.645, 0.667],
      9125: [0.602, 0, 0.667],
      9126: [1.155, 0.644, 0.667],
      9127: [0.899, 0.01, 0.889],
      9128: [1.16, 0.66, 0.889],
      9129: [0.01, 0.899, 0.889],
      9130: [0.29, 0.015, 0.889],
      9131: [0.899, 0.01, 0.889],
      9132: [1.16, 0.66, 0.889],
      9133: [0.01, 0.899, 0.889],
      9143: [0.935, 0.885, 1.056],
      10216: [1.75, 1.248, 0.806],
      10217: [1.75, 1.248, 0.806],
      12296: [1.75, 1.248, 0.806],
      12297: [1.75, 1.248, 0.806],
      57344: [0.625, 0.014, 1.056],
      57345: [0.605, 0.014, 1.056, { ic: 0.02 }],
      57680: [0.12, 0.213, 0.45, { ic: 0.01 }],
      57681: [0.12, 0.213, 0.45, { ic: 0.024 }],
      57682: [0.333, 0, 0.45, { ic: 0.01 }],
      57683: [0.333, 0, 0.45, { ic: 0.024 }],
      57684: [0.32, 0.2, 0.4, { ic: 0.01 }],
      57685: [0.333, 0, 0.9, { ic: 0.01 }],
      57686: [0.12, 0.213, 0.9, { ic: 0.01 }]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-size4.js
var require_tex_size42 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-size4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texSize4 = void 0;
    var FontData_js_1 = require_FontData2();
    var tex_size4_js_1 = require_tex_size4();
    exports.texSize4 = (0, FontData_js_1.AddCSS)(tex_size4_js_1.texSize4, {
      8260: { c: "/" },
      9001: { c: "\\27E8" },
      9002: { c: "\\27E9" },
      12296: { c: "\\27E8" },
      12297: { c: "\\27E9" },
      57685: { c: "\\E153\\E152" },
      57686: { c: "\\E151\\E150" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/tex-variant.js
var require_tex_variant = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/tex-variant.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texVariant = void 0;
    exports.texVariant = {
      710: [0.845, -0.561, 2.333, { ic: 0.013 }],
      732: [0.899, -0.628, 2.333],
      770: [0.845, -0.561, 0, { ic: 0.013 }],
      771: [0.899, -0.628, 0],
      1008: [0.434, 6e-3, 0.667, { ic: 0.067 }],
      8463: [0.695, 0.013, 0.54, { ic: 0.022 }],
      8592: [0.437, -0.064, 0.5],
      8594: [0.437, -0.064, 0.5],
      8652: [0.514, 0.014, 1],
      8708: [0.86, 0.166, 0.556],
      8709: [0.587, 0, 0.778],
      8722: [0.27, -0.23, 0.5],
      8726: [0.43, 0.023, 0.778],
      8733: [0.472, -0.028, 0.778],
      8739: [0.43, 0.023, 0.222],
      8740: [0.43, 0.023, 0.222, { ic: 0.018 }],
      8741: [0.431, 0.023, 0.389],
      8742: [0.431, 0.024, 0.389, { ic: 0.018 }],
      8764: [0.365, -0.132, 0.778],
      8776: [0.481, -0.05, 0.778],
      8808: [0.752, 0.284, 0.778],
      8809: [0.752, 0.284, 0.778],
      8816: [0.919, 0.421, 0.778],
      8817: [0.919, 0.421, 0.778],
      8840: [0.828, 0.33, 0.778],
      8841: [0.828, 0.33, 0.778],
      8842: [0.634, 0.255, 0.778],
      8843: [0.634, 0.254, 0.778],
      8872: [0.694, 0, 0.611],
      8901: [0.189, 0, 0.278],
      8994: [0.378, -0.122, 0.778],
      8995: [0.378, -0.143, 0.778],
      9651: [0.575, 0.02, 0.722],
      9661: [0.576, 0.019, 0.722],
      10887: [0.801, 0.303, 0.778],
      10888: [0.801, 0.303, 0.778],
      10955: [0.752, 0.332, 0.778],
      10956: [0.752, 0.333, 0.778]
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-variant.js
var require_tex_variant2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex/tex-variant.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.texVariant = void 0;
    var FontData_js_1 = require_FontData2();
    var tex_variant_js_1 = require_tex_variant();
    exports.texVariant = (0, FontData_js_1.AddCSS)(tex_variant_js_1.texVariant, {
      1008: { c: "\\E009" },
      8463: { f: "" },
      8740: { c: "\\E006" },
      8742: { c: "\\E007" },
      8808: { c: "\\E00C" },
      8809: { c: "\\E00D" },
      8816: { c: "\\E011" },
      8817: { c: "\\E00E" },
      8840: { c: "\\E016" },
      8841: { c: "\\E018" },
      8842: { c: "\\E01A" },
      8843: { c: "\\E01B" },
      10887: { c: "\\E010" },
      10888: { c: "\\E00F" },
      10955: { c: "\\E017" },
      10956: { c: "\\E019" }
    });
  }
});

// node_modules/mathjax-full/js/output/common/fonts/tex/delimiters.js
var require_delimiters = __commonJS({
  "node_modules/mathjax-full/js/output/common/fonts/tex/delimiters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delimiters = exports.VSIZES = exports.HDW3 = exports.HDW2 = exports.HDW1 = void 0;
    var FontData_js_1 = require_FontData();
    exports.HDW1 = [0.75, 0.25, 0.875];
    exports.HDW2 = [0.85, 0.349, 0.667];
    exports.HDW3 = [0.583, 0.082, 0.5];
    exports.VSIZES = [1, 1.2, 1.8, 2.4, 3];
    var DELIM2F = { c: 47, dir: FontData_js_1.V, sizes: exports.VSIZES };
    var DELIMAF = { c: 175, dir: FontData_js_1.H, sizes: [0.5], stretch: [0, 175], HDW: [0.59, -0.544, 0.5] };
    var DELIM2C6 = { c: 710, dir: FontData_js_1.H, sizes: [0.5, 0.556, 1, 1.444, 1.889] };
    var DELIM2DC = { c: 732, dir: FontData_js_1.H, sizes: [0.5, 0.556, 1, 1.444, 1.889] };
    var DELIM2013 = { c: 8211, dir: FontData_js_1.H, sizes: [0.5], stretch: [0, 8211], HDW: [0.285, -0.248, 0.5] };
    var DELIM2190 = { c: 8592, dir: FontData_js_1.H, sizes: [1], stretch: [8592, 8722], HDW: exports.HDW3 };
    var DELIM2192 = { c: 8594, dir: FontData_js_1.H, sizes: [1], stretch: [0, 8722, 8594], HDW: exports.HDW3 };
    var DELIM2194 = { c: 8596, dir: FontData_js_1.H, sizes: [1], stretch: [8592, 8722, 8594], HDW: exports.HDW3 };
    var DELIM21A4 = { c: 8612, dir: FontData_js_1.H, stretch: [8592, 8722, 8739], HDW: exports.HDW3, min: 1.278 };
    var DELIM21A6 = { c: 8614, dir: FontData_js_1.H, sizes: [1], stretch: [8739, 8722, 8594], HDW: exports.HDW3 };
    var DELIM21D0 = { c: 8656, dir: FontData_js_1.H, sizes: [1], stretch: [8656, 61], HDW: exports.HDW3 };
    var DELIM21D2 = { c: 8658, dir: FontData_js_1.H, sizes: [1], stretch: [0, 61, 8658], HDW: exports.HDW3 };
    var DELIM21D4 = { c: 8660, dir: FontData_js_1.H, sizes: [1], stretch: [8656, 61, 8658], HDW: exports.HDW3 };
    var DELIM2212 = { c: 8722, dir: FontData_js_1.H, sizes: [0.778], stretch: [0, 8722], HDW: exports.HDW3 };
    var DELIM2223 = { c: 8739, dir: FontData_js_1.V, sizes: [1], stretch: [0, 8739], HDW: [0.627, 0.015, 0.333] };
    var DELIM23DC = {
      c: 9180,
      dir: FontData_js_1.H,
      sizes: [0.778, 1],
      schar: [8994, 8994],
      variants: [5, 0],
      stretch: [57680, 57684, 57681],
      HDW: [0.32, 0.2, 0.5]
    };
    var DELIM23DD = {
      c: 9181,
      dir: FontData_js_1.H,
      sizes: [0.778, 1],
      schar: [8995, 8995],
      variants: [5, 0],
      stretch: [57682, 57684, 57683],
      HDW: [0.32, 0.2, 0.5]
    };
    var DELIM23DE = { c: 9182, dir: FontData_js_1.H, stretch: [57680, 57684, 57681, 57685], HDW: [0.32, 0.2, 0.5], min: 1.8 };
    var DELIM23DF = { c: 9183, dir: FontData_js_1.H, stretch: [57682, 57684, 57683, 57686], HDW: [0.32, 0.2, 0.5], min: 1.8 };
    var DELIM27E8 = { c: 10216, dir: FontData_js_1.V, sizes: exports.VSIZES };
    var DELIM27E9 = { c: 10217, dir: FontData_js_1.V, sizes: exports.VSIZES };
    var DELIM2906 = { c: 10502, dir: FontData_js_1.H, stretch: [8656, 61, 8739], HDW: exports.HDW3, min: 1.278 };
    var DELIM2907 = { c: 10503, dir: FontData_js_1.H, stretch: [8872, 61, 8658], HDW: exports.HDW3, min: 1.278 };
    exports.delimiters = {
      40: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9115, 9116, 9117], HDW: [0.85, 0.349, 0.875] },
      41: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9118, 9119, 9120], HDW: [0.85, 0.349, 0.875] },
      45: DELIM2212,
      47: DELIM2F,
      61: { dir: FontData_js_1.H, sizes: [0.778], stretch: [0, 61], HDW: exports.HDW3 },
      91: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9121, 9122, 9123], HDW: exports.HDW2 },
      92: { dir: FontData_js_1.V, sizes: exports.VSIZES },
      93: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9124, 9125, 9126], HDW: exports.HDW2 },
      94: DELIM2C6,
      95: DELIM2013,
      123: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9127, 9130, 9129, 9128], HDW: [0.85, 0.349, 0.889] },
      124: { dir: FontData_js_1.V, sizes: [1], stretch: [0, 8739], HDW: [0.75, 0.25, 0.333] },
      125: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9131, 9130, 9133, 9132], HDW: [0.85, 0.349, 0.889] },
      126: DELIM2DC,
      175: DELIMAF,
      710: DELIM2C6,
      713: DELIMAF,
      732: DELIM2DC,
      770: DELIM2C6,
      771: DELIM2DC,
      818: DELIM2013,
      8211: DELIM2013,
      8212: DELIM2013,
      8213: DELIM2013,
      8214: { dir: FontData_js_1.V, sizes: [0.602, 1], schar: [0, 8741], variants: [1, 0], stretch: [0, 8741], HDW: [0.602, 0, 0.556] },
      8215: DELIM2013,
      8254: DELIMAF,
      8407: DELIM2192,
      8592: DELIM2190,
      8593: { dir: FontData_js_1.V, sizes: [0.888], stretch: [8593, 9168], HDW: [0.6, 0, 0.667] },
      8594: DELIM2192,
      8595: { dir: FontData_js_1.V, sizes: [0.888], stretch: [0, 9168, 8595], HDW: [0.6, 0, 0.667] },
      8596: DELIM2194,
      8597: { dir: FontData_js_1.V, sizes: [1.044], stretch: [8593, 9168, 8595], HDW: exports.HDW1 },
      8606: { dir: FontData_js_1.H, sizes: [1], stretch: [8606, 8722], HDW: exports.HDW3 },
      8608: { dir: FontData_js_1.H, sizes: [1], stretch: [0, 8722, 8608], HDW: exports.HDW3 },
      8612: DELIM21A4,
      8613: { dir: FontData_js_1.V, stretch: [8593, 9168, 8869], HDW: exports.HDW1, min: 1.555 },
      8614: DELIM21A6,
      8615: { dir: FontData_js_1.V, stretch: [8868, 9168, 8595], HDW: exports.HDW1, min: 1.555 },
      8624: { dir: FontData_js_1.V, sizes: [0.722], stretch: [8624, 9168], HDW: exports.HDW1 },
      8625: { dir: FontData_js_1.V, sizes: [0.722], stretch: [8625, 9168], HDW: exports.HDW1 },
      8636: { dir: FontData_js_1.H, sizes: [1], stretch: [8636, 8722], HDW: exports.HDW3 },
      8637: { dir: FontData_js_1.H, sizes: [1], stretch: [8637, 8722], HDW: exports.HDW3 },
      8638: { dir: FontData_js_1.V, sizes: [0.888], stretch: [8638, 9168], HDW: exports.HDW1 },
      8639: { dir: FontData_js_1.V, sizes: [0.888], stretch: [8639, 9168], HDW: exports.HDW1 },
      8640: { dir: FontData_js_1.H, sizes: [1], stretch: [0, 8722, 8640], HDW: exports.HDW3 },
      8641: { dir: FontData_js_1.H, sizes: [1], stretch: [0, 8722, 8641], HDW: exports.HDW3 },
      8642: { dir: FontData_js_1.V, sizes: [0.888], stretch: [0, 9168, 8642], HDW: exports.HDW1 },
      8643: { dir: FontData_js_1.V, sizes: [0.888], stretch: [0, 9168, 8643], HDW: exports.HDW1 },
      8656: DELIM21D0,
      8657: { dir: FontData_js_1.V, sizes: [0.888], stretch: [8657, 8214], HDW: [0.599, 0, 0.778] },
      8658: DELIM21D2,
      8659: { dir: FontData_js_1.V, sizes: [0.888], stretch: [0, 8214, 8659], HDW: [0.6, 0, 0.778] },
      8660: DELIM21D4,
      8661: { dir: FontData_js_1.V, sizes: [1.044], stretch: [8657, 8214, 8659], HDW: [0.75, 0.25, 0.778] },
      8666: { dir: FontData_js_1.H, sizes: [1], stretch: [8666, 8801], HDW: [0.464, -0.036, 0.5] },
      8667: { dir: FontData_js_1.H, sizes: [1], stretch: [0, 8801, 8667], HDW: [0.464, -0.036, 0.5] },
      8722: DELIM2212,
      8725: DELIM2F,
      8730: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [57345, 57344, 9143], fullExt: [0.65, 2.3], HDW: [0.85, 0.35, 1.056] },
      8739: DELIM2223,
      8741: { dir: FontData_js_1.V, sizes: [1], stretch: [0, 8741], HDW: [0.627, 0.015, 0.556] },
      8968: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9121, 9122], HDW: exports.HDW2 },
      8969: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [9124, 9125], HDW: exports.HDW2 },
      8970: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [0, 9122, 9123], HDW: exports.HDW2 },
      8971: { dir: FontData_js_1.V, sizes: exports.VSIZES, stretch: [0, 9125, 9126], HDW: exports.HDW2 },
      8978: DELIM23DC,
      8994: DELIM23DC,
      8995: DELIM23DD,
      9001: DELIM27E8,
      9002: DELIM27E9,
      9130: { dir: FontData_js_1.V, sizes: [0.32], stretch: [9130, 9130, 9130], HDW: [0.29, 0.015, 0.889] },
      9135: DELIM2013,
      9136: { dir: FontData_js_1.V, sizes: [0.989], stretch: [9127, 9130, 9133], HDW: [0.75, 0.25, 0.889] },
      9137: { dir: FontData_js_1.V, sizes: [0.989], stretch: [9131, 9130, 9129], HDW: [0.75, 0.25, 0.889] },
      9140: { dir: FontData_js_1.H, stretch: [9484, 8722, 9488], HDW: exports.HDW3, min: 1 },
      9141: { dir: FontData_js_1.H, stretch: [9492, 8722, 9496], HDW: exports.HDW3, min: 1 },
      9168: { dir: FontData_js_1.V, sizes: [0.602, 1], schar: [0, 8739], variants: [1, 0], stretch: [0, 8739], HDW: [0.602, 0, 0.333] },
      9180: DELIM23DC,
      9181: DELIM23DD,
      9182: DELIM23DE,
      9183: DELIM23DF,
      9184: { dir: FontData_js_1.H, stretch: [714, 713, 715], HDW: [0.59, -0.544, 0.5], min: 1 },
      9185: { dir: FontData_js_1.H, stretch: [715, 713, 714], HDW: [0.59, -0.544, 0.5], min: 1 },
      9472: DELIM2013,
      10072: DELIM2223,
      10216: DELIM27E8,
      10217: DELIM27E9,
      10222: { dir: FontData_js_1.V, sizes: [0.989], stretch: [9127, 9130, 9129], HDW: [0.75, 0.25, 0.889] },
      10223: { dir: FontData_js_1.V, sizes: [0.989], stretch: [9131, 9130, 9133], HDW: [0.75, 0.25, 0.889] },
      10229: DELIM2190,
      10230: DELIM2192,
      10231: DELIM2194,
      10232: DELIM21D0,
      10233: DELIM21D2,
      10234: DELIM21D4,
      10235: DELIM21A4,
      10236: DELIM21A6,
      10237: DELIM2906,
      10238: DELIM2907,
      10502: DELIM2906,
      10503: DELIM2907,
      10574: { dir: FontData_js_1.H, stretch: [8636, 8722, 8640], HDW: exports.HDW3, min: 2 },
      10575: { dir: FontData_js_1.V, stretch: [8638, 9168, 8642], HDW: exports.HDW1, min: 1.776 },
      10576: { dir: FontData_js_1.H, stretch: [8637, 8722, 8641], HDW: exports.HDW3, min: 2 },
      10577: { dir: FontData_js_1.V, stretch: [8639, 9168, 8643], HDW: exports.HDW1, min: 0.5 },
      10586: { dir: FontData_js_1.H, stretch: [8636, 8722, 8739], HDW: exports.HDW3, min: 1.278 },
      10587: { dir: FontData_js_1.H, stretch: [8739, 8722, 8640], HDW: exports.HDW3, min: 1.278 },
      10588: { dir: FontData_js_1.V, stretch: [8638, 9168, 8869], HDW: exports.HDW1, min: 1.556 },
      10589: { dir: FontData_js_1.V, stretch: [8868, 9168, 8642], HDW: exports.HDW1, min: 1.556 },
      10590: { dir: FontData_js_1.H, stretch: [8637, 8722, 8739], HDW: exports.HDW3, min: 1.278 },
      10591: { dir: FontData_js_1.H, stretch: [8739, 8722, 8641], HDW: exports.HDW3, min: 1.278 },
      10592: { dir: FontData_js_1.V, stretch: [8639, 9168, 8869], HDW: exports.HDW1, min: 1.776 },
      10593: { dir: FontData_js_1.V, stretch: [8868, 9168, 8643], HDW: exports.HDW1, min: 1.776 },
      12296: DELIM27E8,
      12297: DELIM27E9,
      65079: DELIM23DE,
      65080: DELIM23DF
    };
  }
});

// node_modules/mathjax-full/js/output/chtml/fonts/tex.js
var require_tex2 = __commonJS({
  "node_modules/mathjax-full/js/output/chtml/fonts/tex.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TeXFont = void 0;
    var FontData_js_1 = require_FontData2();
    var tex_js_1 = require_tex();
    var bold_italic_js_1 = require_bold_italic2();
    var bold_js_1 = require_bold2();
    var double_struck_js_1 = require_double_struck2();
    var fraktur_bold_js_1 = require_fraktur_bold2();
    var fraktur_js_1 = require_fraktur2();
    var italic_js_1 = require_italic2();
    var largeop_js_1 = require_largeop2();
    var monospace_js_1 = require_monospace2();
    var normal_js_1 = require_normal2();
    var sans_serif_bold_italic_js_1 = require_sans_serif_bold_italic2();
    var sans_serif_bold_js_1 = require_sans_serif_bold2();
    var sans_serif_italic_js_1 = require_sans_serif_italic2();
    var sans_serif_js_1 = require_sans_serif2();
    var script_bold_js_1 = require_script_bold2();
    var script_js_1 = require_script2();
    var smallop_js_1 = require_smallop2();
    var tex_calligraphic_bold_js_1 = require_tex_calligraphic_bold2();
    var tex_calligraphic_js_1 = require_tex_calligraphic2();
    var tex_mathit_js_1 = require_tex_mathit2();
    var tex_oldstyle_bold_js_1 = require_tex_oldstyle_bold2();
    var tex_oldstyle_js_1 = require_tex_oldstyle2();
    var tex_size3_js_1 = require_tex_size32();
    var tex_size4_js_1 = require_tex_size42();
    var tex_variant_js_1 = require_tex_variant2();
    var delimiters_js_1 = require_delimiters();
    var TeXFont = function(_super) {
      __extends(TeXFont2, _super);
      function TeXFont2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      TeXFont2.defaultCssFamilyPrefix = "MJXZERO";
      TeXFont2.defaultVariantClasses = {
        "normal": "mjx-n",
        "bold": "mjx-b",
        "italic": "mjx-i",
        "bold-italic": "mjx-b mjx-i",
        "double-struck": "mjx-ds mjx-b",
        "fraktur": "mjx-fr",
        "bold-fraktur": "mjx-fr mjx-b",
        "script": "mjx-sc mjx-i",
        "bold-script": "mjx-sc mjx-b mjx-i",
        "sans-serif": "mjx-ss",
        "bold-sans-serif": "mjx-ss mjx-b",
        "sans-serif-italic": "mjx-ss mjx-i",
        "sans-serif-bold-italic": "mjx-ss mjx-b mjx-i",
        "monospace": "mjx-ty",
        "-smallop": "mjx-sop",
        "-largeop": "mjx-lop",
        "-size3": "mjx-s3",
        "-size4": "mjx-s4",
        "-tex-calligraphic": "mjx-cal mjx-i",
        "-tex-bold-calligraphic": "mjx-cal mjx-b",
        "-tex-mathit": "mjx-mit mjx-i",
        "-tex-oldstyle": "mjx-os",
        "-tex-bold-oldstyle": "mjx-os mjx-b",
        "-tex-variant": "mjx-var"
      };
      TeXFont2.defaultVariantLetters = {
        "normal": "",
        "bold": "B",
        "italic": "MI",
        "bold-italic": "BI",
        "double-struck": "A",
        "fraktur": "FR",
        "bold-fraktur": "FRB",
        "script": "SC",
        "bold-script": "SCB",
        "sans-serif": "SS",
        "bold-sans-serif": "SSB",
        "sans-serif-italic": "SSI",
        "sans-serif-bold-italic": "SSBI",
        "monospace": "T",
        "-smallop": "S1",
        "-largeop": "S2",
        "-size3": "S3",
        "-size4": "S4",
        "-tex-calligraphic": "C",
        "-tex-bold-calligraphic": "CB",
        "-tex-mathit": "MI",
        "-tex-oldstyle": "C",
        "-tex-bold-oldstyle": "CB",
        "-tex-variant": "A"
      };
      TeXFont2.defaultDelimiters = delimiters_js_1.delimiters;
      TeXFont2.defaultChars = {
        "normal": normal_js_1.normal,
        "bold": bold_js_1.bold,
        "italic": italic_js_1.italic,
        "bold-italic": bold_italic_js_1.boldItalic,
        "double-struck": double_struck_js_1.doubleStruck,
        "fraktur": fraktur_js_1.fraktur,
        "bold-fraktur": fraktur_bold_js_1.frakturBold,
        "script": script_js_1.script,
        "bold-script": script_bold_js_1.scriptBold,
        "sans-serif": sans_serif_js_1.sansSerif,
        "bold-sans-serif": sans_serif_bold_js_1.sansSerifBold,
        "sans-serif-italic": sans_serif_italic_js_1.sansSerifItalic,
        "sans-serif-bold-italic": sans_serif_bold_italic_js_1.sansSerifBoldItalic,
        "monospace": monospace_js_1.monospace,
        "-smallop": smallop_js_1.smallop,
        "-largeop": largeop_js_1.largeop,
        "-size3": tex_size3_js_1.texSize3,
        "-size4": tex_size4_js_1.texSize4,
        "-tex-calligraphic": tex_calligraphic_js_1.texCalligraphic,
        "-tex-bold-calligraphic": tex_calligraphic_bold_js_1.texCalligraphicBold,
        "-tex-mathit": tex_mathit_js_1.texMathit,
        "-tex-oldstyle": tex_oldstyle_js_1.texOldstyle,
        "-tex-bold-oldstyle": tex_oldstyle_bold_js_1.texOldstyleBold,
        "-tex-variant": tex_variant_js_1.texVariant
      };
      TeXFont2.defaultStyles = __assign(__assign({}, FontData_js_1.CHTMLFontData.defaultStyles), { ".MJX-TEX": {
        "font-family": "MJXZERO, MJXTEX"
      }, ".TEX-B": {
        "font-family": "MJXZERO, MJXTEX-B"
      }, ".TEX-I": {
        "font-family": "MJXZERO, MJXTEX-I"
      }, ".TEX-MI": {
        "font-family": "MJXZERO, MJXTEX-MI"
      }, ".TEX-BI": {
        "font-family": "MJXZERO, MJXTEX-BI"
      }, ".TEX-S1": {
        "font-family": "MJXZERO, MJXTEX-S1"
      }, ".TEX-S2": {
        "font-family": "MJXZERO, MJXTEX-S2"
      }, ".TEX-S3": {
        "font-family": "MJXZERO, MJXTEX-S3"
      }, ".TEX-S4": {
        "font-family": "MJXZERO, MJXTEX-S4"
      }, ".TEX-A": {
        "font-family": "MJXZERO, MJXTEX-A"
      }, ".TEX-C": {
        "font-family": "MJXZERO, MJXTEX-C"
      }, ".TEX-CB": {
        "font-family": "MJXZERO, MJXTEX-CB"
      }, ".TEX-FR": {
        "font-family": "MJXZERO, MJXTEX-FR"
      }, ".TEX-FRB": {
        "font-family": "MJXZERO, MJXTEX-FRB"
      }, ".TEX-SS": {
        "font-family": "MJXZERO, MJXTEX-SS"
      }, ".TEX-SSB": {
        "font-family": "MJXZERO, MJXTEX-SSB"
      }, ".TEX-SSI": {
        "font-family": "MJXZERO, MJXTEX-SSI"
      }, ".TEX-SC": {
        "font-family": "MJXZERO, MJXTEX-SC"
      }, ".TEX-T": {
        "font-family": "MJXZERO, MJXTEX-T"
      }, ".TEX-V": {
        "font-family": "MJXZERO, MJXTEX-V"
      }, ".TEX-VB": {
        "font-family": "MJXZERO, MJXTEX-VB"
      }, "mjx-stretchy-v mjx-c, mjx-stretchy-h mjx-c": {
        "font-family": "MJXZERO, MJXTEX-S1, MJXTEX-S4, MJXTEX, MJXTEX-A ! important"
      } });
      TeXFont2.defaultFonts = __assign(__assign({}, FontData_js_1.CHTMLFontData.defaultFonts), { "@font-face /* 1 */": {
        "font-family": "MJXTEX",
        src: 'url("%%URL%%/MathJax_Main-Regular.woff") format("woff")'
      }, "@font-face /* 2 */": {
        "font-family": "MJXTEX-B",
        src: 'url("%%URL%%/MathJax_Main-Bold.woff") format("woff")'
      }, "@font-face /* 3 */": {
        "font-family": "MJXTEX-I",
        src: 'url("%%URL%%/MathJax_Math-Italic.woff") format("woff")'
      }, "@font-face /* 4 */": {
        "font-family": "MJXTEX-MI",
        src: 'url("%%URL%%/MathJax_Main-Italic.woff") format("woff")'
      }, "@font-face /* 5 */": {
        "font-family": "MJXTEX-BI",
        src: 'url("%%URL%%/MathJax_Math-BoldItalic.woff") format("woff")'
      }, "@font-face /* 6 */": {
        "font-family": "MJXTEX-S1",
        src: 'url("%%URL%%/MathJax_Size1-Regular.woff") format("woff")'
      }, "@font-face /* 7 */": {
        "font-family": "MJXTEX-S2",
        src: 'url("%%URL%%/MathJax_Size2-Regular.woff") format("woff")'
      }, "@font-face /* 8 */": {
        "font-family": "MJXTEX-S3",
        src: 'url("%%URL%%/MathJax_Size3-Regular.woff") format("woff")'
      }, "@font-face /* 9 */": {
        "font-family": "MJXTEX-S4",
        src: 'url("%%URL%%/MathJax_Size4-Regular.woff") format("woff")'
      }, "@font-face /* 10 */": {
        "font-family": "MJXTEX-A",
        src: 'url("%%URL%%/MathJax_AMS-Regular.woff") format("woff")'
      }, "@font-face /* 11 */": {
        "font-family": "MJXTEX-C",
        src: 'url("%%URL%%/MathJax_Calligraphic-Regular.woff") format("woff")'
      }, "@font-face /* 12 */": {
        "font-family": "MJXTEX-CB",
        src: 'url("%%URL%%/MathJax_Calligraphic-Bold.woff") format("woff")'
      }, "@font-face /* 13 */": {
        "font-family": "MJXTEX-FR",
        src: 'url("%%URL%%/MathJax_Fraktur-Regular.woff") format("woff")'
      }, "@font-face /* 14 */": {
        "font-family": "MJXTEX-FRB",
        src: 'url("%%URL%%/MathJax_Fraktur-Bold.woff") format("woff")'
      }, "@font-face /* 15 */": {
        "font-family": "MJXTEX-SS",
        src: 'url("%%URL%%/MathJax_SansSerif-Regular.woff") format("woff")'
      }, "@font-face /* 16 */": {
        "font-family": "MJXTEX-SSB",
        src: 'url("%%URL%%/MathJax_SansSerif-Bold.woff") format("woff")'
      }, "@font-face /* 17 */": {
        "font-family": "MJXTEX-SSI",
        src: 'url("%%URL%%/MathJax_SansSerif-Italic.woff") format("woff")'
      }, "@font-face /* 18 */": {
        "font-family": "MJXTEX-SC",
        src: 'url("%%URL%%/MathJax_Script-Regular.woff") format("woff")'
      }, "@font-face /* 19 */": {
        "font-family": "MJXTEX-T",
        src: 'url("%%URL%%/MathJax_Typewriter-Regular.woff") format("woff")'
      }, "@font-face /* 20 */": {
        "font-family": "MJXTEX-V",
        src: 'url("%%URL%%/MathJax_Vector-Regular.woff") format("woff")'
      }, "@font-face /* 21 */": {
        "font-family": "MJXTEX-VB",
        src: 'url("%%URL%%/MathJax_Vector-Bold.woff") format("woff")'
      } });
      return TeXFont2;
    }((0, tex_js_1.CommonTeXFontMixin)(FontData_js_1.CHTMLFontData));
    exports.TeXFont = TeXFont;
  }
});

// node_modules/mathjax-full/js/output/chtml.js
var require_chtml = __commonJS({
  "node_modules/mathjax-full/js/output/chtml.js"(exports) {
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
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
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
    exports.CHTML = void 0;
    var OutputJax_js_1 = require_OutputJax2();
    var StyleList_js_1 = require_StyleList();
    var WrapperFactory_js_1 = require_WrapperFactory3();
    var Usage_js_1 = require_Usage();
    var tex_js_1 = require_tex2();
    var LENGTHS = __importStar(require_lengths());
    var string_js_1 = require_string();
    var CHTML = function(_super) {
      __extends(CHTML2, _super);
      function CHTML2(options) {
        if (options === void 0) {
          options = null;
        }
        var _this = _super.call(this, options, WrapperFactory_js_1.CHTMLWrapperFactory, tex_js_1.TeXFont) || this;
        _this.chtmlStyles = null;
        _this.font.adaptiveCSS(_this.options.adaptiveCSS);
        _this.wrapperUsage = new Usage_js_1.Usage();
        return _this;
      }
      CHTML2.prototype.escaped = function(math, html) {
        this.setDocument(html);
        return this.html("span", {}, [this.text(math.math)]);
      };
      CHTML2.prototype.styleSheet = function(html) {
        if (this.chtmlStyles) {
          if (this.options.adaptiveCSS) {
            var styles = new StyleList_js_1.CssStyles();
            this.addWrapperStyles(styles);
            this.updateFontStyles(styles);
            this.adaptor.insertRules(this.chtmlStyles, styles.getStyleRules());
          }
          return this.chtmlStyles;
        }
        var sheet = this.chtmlStyles = _super.prototype.styleSheet.call(this, html);
        this.adaptor.setAttribute(sheet, "id", CHTML2.STYLESHEETID);
        this.wrapperUsage.update();
        return sheet;
      };
      CHTML2.prototype.updateFontStyles = function(styles) {
        styles.addStyles(this.font.updateStyles({}));
      };
      CHTML2.prototype.addWrapperStyles = function(styles) {
        var e_1, _a;
        if (!this.options.adaptiveCSS) {
          _super.prototype.addWrapperStyles.call(this, styles);
          return;
        }
        try {
          for (var _b = __values(this.wrapperUsage.update()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var kind = _c.value;
            var wrapper = this.factory.getNodeClass(kind);
            wrapper && this.addClassStyles(wrapper, styles);
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
      };
      CHTML2.prototype.addClassStyles = function(wrapper, styles) {
        var _a;
        var CLASS = wrapper;
        if (CLASS.autoStyle && CLASS.kind !== "unknown") {
          styles.addStyles((_a = {}, _a["mjx-" + CLASS.kind] = {
            display: "inline-block",
            "text-align": "left"
          }, _a));
        }
        this.wrapperUsage.add(CLASS.kind);
        _super.prototype.addClassStyles.call(this, wrapper, styles);
      };
      CHTML2.prototype.processMath = function(math, parent) {
        this.factory.wrap(math).toCHTML(parent);
      };
      CHTML2.prototype.clearCache = function() {
        this.cssStyles.clear();
        this.font.clearCache();
        this.wrapperUsage.clear();
        this.chtmlStyles = null;
      };
      CHTML2.prototype.reset = function() {
        this.clearCache();
      };
      CHTML2.prototype.unknownText = function(text, variant, width) {
        if (width === void 0) {
          width = null;
        }
        var styles = {};
        var scale = 100 / this.math.metrics.scale;
        if (scale !== 100) {
          styles["font-size"] = this.fixed(scale, 1) + "%";
          styles.padding = LENGTHS.em(75 / scale) + " 0 " + LENGTHS.em(20 / scale) + " 0";
        }
        if (variant !== "-explicitFont") {
          var c = (0, string_js_1.unicodeChars)(text);
          if (c.length !== 1 || c[0] < 119808 || c[0] > 120831) {
            this.cssFontStyles(this.font.getCssFont(variant), styles);
          }
        }
        if (width !== null) {
          var metrics = this.math.metrics;
          styles.width = Math.round(width * metrics.em * metrics.scale) + "px";
        }
        return this.html("mjx-utext", { variant, style: styles }, [this.text(text)]);
      };
      CHTML2.prototype.measureTextNode = function(textNode) {
        var adaptor = this.adaptor;
        var text = adaptor.clone(textNode);
        adaptor.setStyle(text, "font-family", adaptor.getStyle(text, "font-family").replace(/MJXZERO, /g, ""));
        var style = { position: "absolute", "white-space": "nowrap" };
        var node = this.html("mjx-measure-text", { style }, [text]);
        adaptor.append(adaptor.parent(this.math.start.node), this.container);
        adaptor.append(this.container, node);
        var w = adaptor.nodeSize(text, this.math.metrics.em)[0] / this.math.metrics.scale;
        adaptor.remove(this.container);
        adaptor.remove(node);
        return { w, h: 0.75, d: 0.2 };
      };
      CHTML2.NAME = "CHTML";
      CHTML2.OPTIONS = __assign(__assign({}, OutputJax_js_1.CommonOutputJax.OPTIONS), { adaptiveCSS: true, matchFontHeight: true });
      CHTML2.commonStyles = {
        'mjx-container[jax="CHTML"]': { "line-height": 0 },
        'mjx-container [space="1"]': { "margin-left": ".111em" },
        'mjx-container [space="2"]': { "margin-left": ".167em" },
        'mjx-container [space="3"]': { "margin-left": ".222em" },
        'mjx-container [space="4"]': { "margin-left": ".278em" },
        'mjx-container [space="5"]': { "margin-left": ".333em" },
        'mjx-container [rspace="1"]': { "margin-right": ".111em" },
        'mjx-container [rspace="2"]': { "margin-right": ".167em" },
        'mjx-container [rspace="3"]': { "margin-right": ".222em" },
        'mjx-container [rspace="4"]': { "margin-right": ".278em" },
        'mjx-container [rspace="5"]': { "margin-right": ".333em" },
        'mjx-container [size="s"]': { "font-size": "70.7%" },
        'mjx-container [size="ss"]': { "font-size": "50%" },
        'mjx-container [size="Tn"]': { "font-size": "60%" },
        'mjx-container [size="sm"]': { "font-size": "85%" },
        'mjx-container [size="lg"]': { "font-size": "120%" },
        'mjx-container [size="Lg"]': { "font-size": "144%" },
        'mjx-container [size="LG"]': { "font-size": "173%" },
        'mjx-container [size="hg"]': { "font-size": "207%" },
        'mjx-container [size="HG"]': { "font-size": "249%" },
        'mjx-container [width="full"]': { width: "100%" },
        "mjx-box": { display: "inline-block" },
        "mjx-block": { display: "block" },
        "mjx-itable": { display: "inline-table" },
        "mjx-row": { display: "table-row" },
        "mjx-row > *": { display: "table-cell" },
        "mjx-mtext": {
          display: "inline-block"
        },
        "mjx-mstyle": {
          display: "inline-block"
        },
        "mjx-merror": {
          display: "inline-block",
          color: "red",
          "background-color": "yellow"
        },
        "mjx-mphantom": {
          visibility: "hidden"
        },
        "_::-webkit-full-page-media, _:future, :root mjx-container": {
          "will-change": "opacity"
        }
      };
      CHTML2.STYLESHEETID = "MJX-CHTML-styles";
      return CHTML2;
    }(OutputJax_js_1.CommonOutputJax);
    exports.CHTML = CHTML;
  }
});
export default require_chtml();
//# sourceMappingURL=mathjax-full_js_output_chtml__js.js.map
