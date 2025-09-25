import {
  require_Attributes,
  require_MmlNode,
  require_mo,
  require_string
} from "./chunk-RTXZROXG.js";
import {
  __commonJS
} from "./chunk-DLJ4GP37.js";

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mi.js
var require_mi = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mi.js"(exports) {
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
    exports.MmlMi = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMi = function(_super) {
      __extends(MmlMi2, _super);
      function MmlMi2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
      }
      Object.defineProperty(MmlMi2.prototype, "kind", {
        get: function() {
          return "mi";
        },
        enumerable: false,
        configurable: true
      });
      MmlMi2.prototype.setInheritedAttributes = function(attributes, display, level, prime) {
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
        var text = this.getText();
        if (text.match(MmlMi2.singleCharacter) && !attributes.mathvariant) {
          this.attributes.setInherited("mathvariant", "italic");
        }
      };
      MmlMi2.prototype.setTeXclass = function(prev) {
        this.getPrevClass(prev);
        var name = this.getText();
        if (name.length > 1 && name.match(MmlMi2.operatorName) && this.attributes.get("mathvariant") === "normal" && this.getProperty("autoOP") === void 0 && this.getProperty("texClass") === void 0) {
          this.texClass = MmlNode_js_1.TEXCLASS.OP;
          this.setProperty("autoOP", true);
        }
        return this;
      };
      MmlMi2.defaults = __assign({}, MmlNode_js_1.AbstractMmlTokenNode.defaults);
      MmlMi2.operatorName = /^[a-z][a-z0-9]*$/i;
      MmlMi2.singleCharacter = /^[\uD800-\uDBFF]?.[\u0300-\u036F\u1AB0-\u1ABE\u1DC0-\u1DFF\u20D0-\u20EF]*$/;
      return MmlMi2;
    }(MmlNode_js_1.AbstractMmlTokenNode);
    exports.MmlMi = MmlMi;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/math.js
var require_math = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/math.js"(exports) {
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
    exports.MmlMath = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMath = function(_super) {
      __extends(MmlMath2, _super);
      function MmlMath2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMath2.prototype, "kind", {
        get: function() {
          return "math";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMath2.prototype, "linebreakContainer", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      MmlMath2.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
        if (this.attributes.get("mode") === "display") {
          this.attributes.setInherited("display", "block");
        }
        attributes = this.addInheritedAttributes(attributes, this.attributes.getAllAttributes());
        display = !!this.attributes.get("displaystyle") || !this.attributes.get("displaystyle") && this.attributes.get("display") === "block";
        this.attributes.setInherited("displaystyle", display);
        level = this.attributes.get("scriptlevel") || this.constructor.defaults["scriptlevel"];
        _super.prototype.setChildInheritedAttributes.call(this, attributes, display, level, prime);
      };
      MmlMath2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlLayoutNode.defaults), { mathvariant: "normal", mathsize: "normal", mathcolor: "", mathbackground: "transparent", dir: "ltr", scriptlevel: 0, displaystyle: false, display: "inline", maxwidth: "", overflow: "linebreak", altimg: "", "altimg-width": "", "altimg-height": "", "altimg-valign": "", alttext: "", cdgroup: "", scriptsizemultiplier: 1 / Math.sqrt(2), scriptminsize: "8px", infixlinebreakstyle: "before", lineleading: "1ex", linebreakmultchar: "⁢", indentshift: "auto", indentalign: "auto", indenttarget: "", indentalignfirst: "indentalign", indentshiftfirst: "indentshift", indentalignlast: "indentalign", indentshiftlast: "indentshift" });
      return MmlMath2;
    }(MmlNode_js_1.AbstractMmlLayoutNode);
    exports.MmlMath = MmlMath;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mn.js
var require_mn = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mn.js"(exports) {
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
    exports.MmlMn = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMn = function(_super) {
      __extends(MmlMn2, _super);
      function MmlMn2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
      }
      Object.defineProperty(MmlMn2.prototype, "kind", {
        get: function() {
          return "mn";
        },
        enumerable: false,
        configurable: true
      });
      MmlMn2.defaults = __assign({}, MmlNode_js_1.AbstractMmlTokenNode.defaults);
      return MmlMn2;
    }(MmlNode_js_1.AbstractMmlTokenNode);
    exports.MmlMn = MmlMn;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mtext.js
var require_mtext = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mtext.js"(exports) {
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
    exports.MmlMtext = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMtext = function(_super) {
      __extends(MmlMtext2, _super);
      function MmlMtext2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
      }
      Object.defineProperty(MmlMtext2.prototype, "kind", {
        get: function() {
          return "mtext";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMtext2.prototype, "isSpacelike", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      MmlMtext2.defaults = __assign({}, MmlNode_js_1.AbstractMmlTokenNode.defaults);
      return MmlMtext2;
    }(MmlNode_js_1.AbstractMmlTokenNode);
    exports.MmlMtext = MmlMtext;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mspace.js
var require_mspace = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mspace.js"(exports) {
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
    exports.MmlMspace = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMspace = function(_super) {
      __extends(MmlMspace2, _super);
      function MmlMspace2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.NONE;
        return _this;
      }
      MmlMspace2.prototype.setTeXclass = function(prev) {
        return prev;
      };
      Object.defineProperty(MmlMspace2.prototype, "kind", {
        get: function() {
          return "mspace";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMspace2.prototype, "arity", {
        get: function() {
          return 0;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMspace2.prototype, "isSpacelike", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMspace2.prototype, "hasNewline", {
        get: function() {
          var attributes = this.attributes;
          return attributes.getExplicit("width") == null && attributes.getExplicit("height") == null && attributes.getExplicit("depth") == null && attributes.get("linebreak") === "newline";
        },
        enumerable: false,
        configurable: true
      });
      MmlMspace2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlTokenNode.defaults), { width: "0em", height: "0ex", depth: "0ex", linebreak: "auto" });
      return MmlMspace2;
    }(MmlNode_js_1.AbstractMmlTokenNode);
    exports.MmlMspace = MmlMspace;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/ms.js
var require_ms = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/ms.js"(exports) {
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
    exports.MmlMs = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMs = function(_super) {
      __extends(MmlMs2, _super);
      function MmlMs2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
      }
      Object.defineProperty(MmlMs2.prototype, "kind", {
        get: function() {
          return "ms";
        },
        enumerable: false,
        configurable: true
      });
      MmlMs2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlTokenNode.defaults), { lquote: '"', rquote: '"' });
      return MmlMs2;
    }(MmlNode_js_1.AbstractMmlTokenNode);
    exports.MmlMs = MmlMs;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mrow.js
var require_mrow = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mrow.js"(exports) {
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
    exports.MmlInferredMrow = exports.MmlMrow = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMrow = function(_super) {
      __extends(MmlMrow2, _super);
      function MmlMrow2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._core = null;
        return _this;
      }
      Object.defineProperty(MmlMrow2.prototype, "kind", {
        get: function() {
          return "mrow";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMrow2.prototype, "isSpacelike", {
        get: function() {
          var e_1, _a;
          try {
            for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              if (!child.isSpacelike) {
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
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMrow2.prototype, "isEmbellished", {
        get: function() {
          var e_2, _a;
          var embellished = false;
          var i = 0;
          try {
            for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              if (child) {
                if (child.isEmbellished) {
                  if (embellished) {
                    return false;
                  }
                  embellished = true;
                  this._core = i;
                } else if (!child.isSpacelike) {
                  return false;
                }
              }
              i++;
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
          return embellished;
        },
        enumerable: false,
        configurable: true
      });
      MmlMrow2.prototype.core = function() {
        if (!this.isEmbellished || this._core == null) {
          return this;
        }
        return this.childNodes[this._core];
      };
      MmlMrow2.prototype.coreMO = function() {
        if (!this.isEmbellished || this._core == null) {
          return this;
        }
        return this.childNodes[this._core].coreMO();
      };
      MmlMrow2.prototype.nonSpaceLength = function() {
        var e_3, _a;
        var n = 0;
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child && !child.isSpacelike) {
              n++;
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
        return n;
      };
      MmlMrow2.prototype.firstNonSpace = function() {
        var e_4, _a;
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child && !child.isSpacelike) {
              return child;
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
        return null;
      };
      MmlMrow2.prototype.lastNonSpace = function() {
        var i = this.childNodes.length;
        while (--i >= 0) {
          var child = this.childNodes[i];
          if (child && !child.isSpacelike) {
            return child;
          }
        }
        return null;
      };
      MmlMrow2.prototype.setTeXclass = function(prev) {
        var e_5, _a, e_6, _b;
        if (this.getProperty("open") != null || this.getProperty("close") != null) {
          this.getPrevClass(prev);
          prev = null;
          try {
            for (var _c = __values(this.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
              var child = _d.value;
              prev = child.setTeXclass(prev);
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
          if (this.texClass == null) {
            this.texClass = MmlNode_js_1.TEXCLASS.INNER;
          }
        } else {
          try {
            for (var _e = __values(this.childNodes), _f = _e.next(); !_f.done; _f = _e.next()) {
              var child = _f.value;
              prev = child.setTeXclass(prev);
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
          if (this.childNodes[0]) {
            this.updateTeXclass(this.childNodes[0]);
          }
        }
        return prev;
      };
      MmlMrow2.defaults = __assign({}, MmlNode_js_1.AbstractMmlNode.defaults);
      return MmlMrow2;
    }(MmlNode_js_1.AbstractMmlNode);
    exports.MmlMrow = MmlMrow;
    var MmlInferredMrow = function(_super) {
      __extends(MmlInferredMrow2, _super);
      function MmlInferredMrow2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlInferredMrow2.prototype, "kind", {
        get: function() {
          return "inferredMrow";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlInferredMrow2.prototype, "isInferred", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlInferredMrow2.prototype, "notParent", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      MmlInferredMrow2.prototype.toString = function() {
        return "[" + this.childNodes.join(",") + "]";
      };
      MmlInferredMrow2.defaults = MmlMrow.defaults;
      return MmlInferredMrow2;
    }(MmlMrow);
    exports.MmlInferredMrow = MmlInferredMrow;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mfrac.js
var require_mfrac = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mfrac.js"(exports) {
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
    exports.MmlMfrac = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMfrac = function(_super) {
      __extends(MmlMfrac2, _super);
      function MmlMfrac2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMfrac2.prototype, "kind", {
        get: function() {
          return "mfrac";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMfrac2.prototype, "arity", {
        get: function() {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMfrac2.prototype, "linebreakContainer", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      MmlMfrac2.prototype.setTeXclass = function(prev) {
        var e_1, _a;
        this.getPrevClass(prev);
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            child.setTeXclass(null);
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
        return this;
      };
      MmlMfrac2.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
        if (!display || level > 0) {
          level++;
        }
        this.childNodes[0].setInheritedAttributes(attributes, false, level, prime);
        this.childNodes[1].setInheritedAttributes(attributes, false, level, true);
      };
      MmlMfrac2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlBaseNode.defaults), { linethickness: "medium", numalign: "center", denomalign: "center", bevelled: false });
      return MmlMfrac2;
    }(MmlNode_js_1.AbstractMmlBaseNode);
    exports.MmlMfrac = MmlMfrac;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/msqrt.js
var require_msqrt = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/msqrt.js"(exports) {
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
    exports.MmlMsqrt = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMsqrt = function(_super) {
      __extends(MmlMsqrt2, _super);
      function MmlMsqrt2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
      }
      Object.defineProperty(MmlMsqrt2.prototype, "kind", {
        get: function() {
          return "msqrt";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMsqrt2.prototype, "arity", {
        get: function() {
          return -1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMsqrt2.prototype, "linebreakContainer", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      MmlMsqrt2.prototype.setTeXclass = function(prev) {
        this.getPrevClass(prev);
        this.childNodes[0].setTeXclass(null);
        return this;
      };
      MmlMsqrt2.prototype.setChildInheritedAttributes = function(attributes, display, level, _prime) {
        this.childNodes[0].setInheritedAttributes(attributes, display, level, true);
      };
      MmlMsqrt2.defaults = __assign({}, MmlNode_js_1.AbstractMmlNode.defaults);
      return MmlMsqrt2;
    }(MmlNode_js_1.AbstractMmlNode);
    exports.MmlMsqrt = MmlMsqrt;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mroot.js
var require_mroot = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mroot.js"(exports) {
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
    exports.MmlMroot = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMroot = function(_super) {
      __extends(MmlMroot2, _super);
      function MmlMroot2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
      }
      Object.defineProperty(MmlMroot2.prototype, "kind", {
        get: function() {
          return "mroot";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMroot2.prototype, "arity", {
        get: function() {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      MmlMroot2.prototype.setTeXclass = function(prev) {
        this.getPrevClass(prev);
        this.childNodes[0].setTeXclass(null);
        this.childNodes[1].setTeXclass(null);
        return this;
      };
      MmlMroot2.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
        this.childNodes[0].setInheritedAttributes(attributes, display, level, true);
        this.childNodes[1].setInheritedAttributes(attributes, false, level + 2, prime);
      };
      MmlMroot2.defaults = __assign({}, MmlNode_js_1.AbstractMmlNode.defaults);
      return MmlMroot2;
    }(MmlNode_js_1.AbstractMmlNode);
    exports.MmlMroot = MmlMroot;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mpadded.js
var require_mpadded = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mpadded.js"(exports) {
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
    exports.MmlMpadded = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMpadded = function(_super) {
      __extends(MmlMpadded2, _super);
      function MmlMpadded2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMpadded2.prototype, "kind", {
        get: function() {
          return "mpadded";
        },
        enumerable: false,
        configurable: true
      });
      MmlMpadded2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlLayoutNode.defaults), { width: "", height: "", depth: "", lspace: 0, voffset: 0 });
      return MmlMpadded2;
    }(MmlNode_js_1.AbstractMmlLayoutNode);
    exports.MmlMpadded = MmlMpadded;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mfenced.js
var require_mfenced = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mfenced.js"(exports) {
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
    exports.MmlMfenced = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMfenced = function(_super) {
      __extends(MmlMfenced2, _super);
      function MmlMfenced2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.INNER;
        _this.separators = [];
        _this.open = null;
        _this.close = null;
        return _this;
      }
      Object.defineProperty(MmlMfenced2.prototype, "kind", {
        get: function() {
          return "mfenced";
        },
        enumerable: false,
        configurable: true
      });
      MmlMfenced2.prototype.setTeXclass = function(prev) {
        this.getPrevClass(prev);
        if (this.open) {
          prev = this.open.setTeXclass(prev);
        }
        if (this.childNodes[0]) {
          prev = this.childNodes[0].setTeXclass(prev);
        }
        for (var i = 1, m = this.childNodes.length; i < m; i++) {
          if (this.separators[i - 1]) {
            prev = this.separators[i - 1].setTeXclass(prev);
          }
          if (this.childNodes[i]) {
            prev = this.childNodes[i].setTeXclass(prev);
          }
        }
        if (this.close) {
          prev = this.close.setTeXclass(prev);
        }
        this.updateTeXclass(this.open);
        return prev;
      };
      MmlMfenced2.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
        var e_1, _a;
        this.addFakeNodes();
        try {
          for (var _b = __values([this.open, this.close].concat(this.separators)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child) {
              child.setInheritedAttributes(attributes, display, level, prime);
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
        _super.prototype.setChildInheritedAttributes.call(this, attributes, display, level, prime);
      };
      MmlMfenced2.prototype.addFakeNodes = function() {
        var e_2, _a;
        var _b = this.attributes.getList("open", "close", "separators"), open = _b.open, close = _b.close, separators = _b.separators;
        open = open.replace(/[ \t\n\r]/g, "");
        close = close.replace(/[ \t\n\r]/g, "");
        separators = separators.replace(/[ \t\n\r]/g, "");
        if (open) {
          this.open = this.fakeNode(open, { fence: true, form: "prefix" }, MmlNode_js_1.TEXCLASS.OPEN);
        }
        if (separators) {
          while (separators.length < this.childNodes.length - 1) {
            separators += separators.charAt(separators.length - 1);
          }
          var i = 0;
          try {
            for (var _c = __values(this.childNodes.slice(1)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var child = _d.value;
              if (child) {
                this.separators.push(this.fakeNode(separators.charAt(i++)));
              }
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
        }
        if (close) {
          this.close = this.fakeNode(close, { fence: true, form: "postfix" }, MmlNode_js_1.TEXCLASS.CLOSE);
        }
      };
      MmlMfenced2.prototype.fakeNode = function(c, properties, texClass) {
        if (properties === void 0) {
          properties = {};
        }
        if (texClass === void 0) {
          texClass = null;
        }
        var text = this.factory.create("text").setText(c);
        var node = this.factory.create("mo", properties, [text]);
        node.texClass = texClass;
        node.parent = this;
        return node;
      };
      MmlMfenced2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlNode.defaults), { open: "(", close: ")", separators: "," });
      return MmlMfenced2;
    }(MmlNode_js_1.AbstractMmlNode);
    exports.MmlMfenced = MmlMfenced;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/menclose.js
var require_menclose = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/menclose.js"(exports) {
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
    exports.MmlMenclose = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMenclose = function(_super) {
      __extends(MmlMenclose2, _super);
      function MmlMenclose2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
      }
      Object.defineProperty(MmlMenclose2.prototype, "kind", {
        get: function() {
          return "menclose";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMenclose2.prototype, "arity", {
        get: function() {
          return -1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMenclose2.prototype, "linebreakContininer", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      MmlMenclose2.prototype.setTeXclass = function(prev) {
        prev = this.childNodes[0].setTeXclass(prev);
        this.updateTeXclass(this.childNodes[0]);
        return prev;
      };
      MmlMenclose2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlNode.defaults), { notation: "longdiv" });
      return MmlMenclose2;
    }(MmlNode_js_1.AbstractMmlNode);
    exports.MmlMenclose = MmlMenclose;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/maction.js
var require_maction = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/maction.js"(exports) {
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
    exports.MmlMaction = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMaction = function(_super) {
      __extends(MmlMaction2, _super);
      function MmlMaction2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMaction2.prototype, "kind", {
        get: function() {
          return "maction";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMaction2.prototype, "arity", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMaction2.prototype, "selected", {
        get: function() {
          var selection = this.attributes.get("selection");
          var i = Math.max(1, Math.min(this.childNodes.length, selection)) - 1;
          return this.childNodes[i] || this.factory.create("mrow");
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMaction2.prototype, "isEmbellished", {
        get: function() {
          return this.selected.isEmbellished;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMaction2.prototype, "isSpacelike", {
        get: function() {
          return this.selected.isSpacelike;
        },
        enumerable: false,
        configurable: true
      });
      MmlMaction2.prototype.core = function() {
        return this.selected.core();
      };
      MmlMaction2.prototype.coreMO = function() {
        return this.selected.coreMO();
      };
      MmlMaction2.prototype.verifyAttributes = function(options) {
        _super.prototype.verifyAttributes.call(this, options);
        if (this.attributes.get("actiontype") !== "toggle" && this.attributes.getExplicit("selection") !== void 0) {
          var attributes = this.attributes.getAllAttributes();
          delete attributes.selection;
        }
      };
      MmlMaction2.prototype.setTeXclass = function(prev) {
        if (this.attributes.get("actiontype") === "tooltip" && this.childNodes[1]) {
          this.childNodes[1].setTeXclass(null);
        }
        var selected = this.selected;
        prev = selected.setTeXclass(prev);
        this.updateTeXclass(selected);
        return prev;
      };
      MmlMaction2.prototype.nextToggleSelection = function() {
        var selection = Math.max(1, this.attributes.get("selection") + 1);
        if (selection > this.childNodes.length) {
          selection = 1;
        }
        this.attributes.set("selection", selection);
      };
      MmlMaction2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlNode.defaults), { actiontype: "toggle", selection: 1 });
      return MmlMaction2;
    }(MmlNode_js_1.AbstractMmlNode);
    exports.MmlMaction = MmlMaction;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/msubsup.js
var require_msubsup = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/msubsup.js"(exports) {
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
    exports.MmlMsup = exports.MmlMsub = exports.MmlMsubsup = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMsubsup = function(_super) {
      __extends(MmlMsubsup2, _super);
      function MmlMsubsup2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMsubsup2.prototype, "kind", {
        get: function() {
          return "msubsup";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMsubsup2.prototype, "arity", {
        get: function() {
          return 3;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMsubsup2.prototype, "base", {
        get: function() {
          return 0;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMsubsup2.prototype, "sub", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMsubsup2.prototype, "sup", {
        get: function() {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      MmlMsubsup2.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
        var nodes = this.childNodes;
        nodes[0].setInheritedAttributes(attributes, display, level, prime);
        nodes[1].setInheritedAttributes(attributes, false, level + 1, prime || this.sub === 1);
        if (!nodes[2]) {
          return;
        }
        nodes[2].setInheritedAttributes(attributes, false, level + 1, prime || this.sub === 2);
      };
      MmlMsubsup2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlBaseNode.defaults), { subscriptshift: "", superscriptshift: "" });
      return MmlMsubsup2;
    }(MmlNode_js_1.AbstractMmlBaseNode);
    exports.MmlMsubsup = MmlMsubsup;
    var MmlMsub = function(_super) {
      __extends(MmlMsub2, _super);
      function MmlMsub2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMsub2.prototype, "kind", {
        get: function() {
          return "msub";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMsub2.prototype, "arity", {
        get: function() {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      MmlMsub2.defaults = __assign({}, MmlMsubsup.defaults);
      return MmlMsub2;
    }(MmlMsubsup);
    exports.MmlMsub = MmlMsub;
    var MmlMsup = function(_super) {
      __extends(MmlMsup2, _super);
      function MmlMsup2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMsup2.prototype, "kind", {
        get: function() {
          return "msup";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMsup2.prototype, "arity", {
        get: function() {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMsup2.prototype, "sup", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMsup2.prototype, "sub", {
        get: function() {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      MmlMsup2.defaults = __assign({}, MmlMsubsup.defaults);
      return MmlMsup2;
    }(MmlMsubsup);
    exports.MmlMsup = MmlMsup;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/munderover.js
var require_munderover = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/munderover.js"(exports) {
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
    exports.MmlMover = exports.MmlMunder = exports.MmlMunderover = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMunderover = function(_super) {
      __extends(MmlMunderover2, _super);
      function MmlMunderover2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMunderover2.prototype, "kind", {
        get: function() {
          return "munderover";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMunderover2.prototype, "arity", {
        get: function() {
          return 3;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMunderover2.prototype, "base", {
        get: function() {
          return 0;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMunderover2.prototype, "under", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMunderover2.prototype, "over", {
        get: function() {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMunderover2.prototype, "linebreakContainer", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      MmlMunderover2.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
        var nodes = this.childNodes;
        nodes[0].setInheritedAttributes(attributes, display, level, prime || !!nodes[this.over]);
        var force = !!(!display && nodes[0].coreMO().attributes.get("movablelimits"));
        var ACCENTS = this.constructor.ACCENTS;
        nodes[1].setInheritedAttributes(attributes, false, this.getScriptlevel(ACCENTS[1], force, level), prime || this.under === 1);
        this.setInheritedAccent(1, ACCENTS[1], display, level, prime, force);
        if (!nodes[2]) {
          return;
        }
        nodes[2].setInheritedAttributes(attributes, false, this.getScriptlevel(ACCENTS[2], force, level), prime || this.under === 2);
        this.setInheritedAccent(2, ACCENTS[2], display, level, prime, force);
      };
      MmlMunderover2.prototype.getScriptlevel = function(accent, force, level) {
        if (force || !this.attributes.get(accent)) {
          level++;
        }
        return level;
      };
      MmlMunderover2.prototype.setInheritedAccent = function(n, accent, display, level, prime, force) {
        var node = this.childNodes[n];
        if (this.attributes.getExplicit(accent) == null && node.isEmbellished) {
          var value = node.coreMO().attributes.get("accent");
          this.attributes.setInherited(accent, value);
          if (value !== this.attributes.getDefault(accent)) {
            node.setInheritedAttributes({}, display, this.getScriptlevel(accent, force, level), prime);
          }
        }
      };
      MmlMunderover2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlBaseNode.defaults), { accent: false, accentunder: false, align: "center" });
      MmlMunderover2.ACCENTS = ["", "accentunder", "accent"];
      return MmlMunderover2;
    }(MmlNode_js_1.AbstractMmlBaseNode);
    exports.MmlMunderover = MmlMunderover;
    var MmlMunder = function(_super) {
      __extends(MmlMunder2, _super);
      function MmlMunder2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMunder2.prototype, "kind", {
        get: function() {
          return "munder";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMunder2.prototype, "arity", {
        get: function() {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      MmlMunder2.defaults = __assign({}, MmlMunderover.defaults);
      return MmlMunder2;
    }(MmlMunderover);
    exports.MmlMunder = MmlMunder;
    var MmlMover = function(_super) {
      __extends(MmlMover2, _super);
      function MmlMover2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMover2.prototype, "kind", {
        get: function() {
          return "mover";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMover2.prototype, "arity", {
        get: function() {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMover2.prototype, "over", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMover2.prototype, "under", {
        get: function() {
          return 2;
        },
        enumerable: false,
        configurable: true
      });
      MmlMover2.defaults = __assign({}, MmlMunderover.defaults);
      MmlMover2.ACCENTS = ["", "accent", "accentunder"];
      return MmlMover2;
    }(MmlMunderover);
    exports.MmlMover = MmlMover;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mmultiscripts.js
var require_mmultiscripts = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mmultiscripts.js"(exports) {
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
    exports.MmlNone = exports.MmlMprescripts = exports.MmlMmultiscripts = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var msubsup_js_1 = require_msubsup();
    var MmlMmultiscripts = function(_super) {
      __extends(MmlMmultiscripts2, _super);
      function MmlMmultiscripts2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMmultiscripts2.prototype, "kind", {
        get: function() {
          return "mmultiscripts";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMmultiscripts2.prototype, "arity", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      MmlMmultiscripts2.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
        this.childNodes[0].setInheritedAttributes(attributes, display, level, prime);
        var prescripts = false;
        for (var i = 1, n = 0; i < this.childNodes.length; i++) {
          var child = this.childNodes[i];
          if (child.isKind("mprescripts")) {
            if (!prescripts) {
              prescripts = true;
              if (i % 2 === 0) {
                var mrow = this.factory.create("mrow");
                this.childNodes.splice(i, 0, mrow);
                mrow.parent = this;
                i++;
              }
            }
          } else {
            var primestyle = prime || n % 2 === 0;
            child.setInheritedAttributes(attributes, false, level + 1, primestyle);
            n++;
          }
        }
        if (this.childNodes.length % 2 === (prescripts ? 1 : 0)) {
          this.appendChild(this.factory.create("mrow"));
          this.childNodes[this.childNodes.length - 1].setInheritedAttributes(attributes, false, level + 1, prime);
        }
      };
      MmlMmultiscripts2.prototype.verifyChildren = function(options) {
        var prescripts = false;
        var fix = options["fixMmultiscripts"];
        for (var i = 0; i < this.childNodes.length; i++) {
          var child = this.childNodes[i];
          if (child.isKind("mprescripts")) {
            if (prescripts) {
              child.mError(child.kind + " can only appear once in " + this.kind, options, true);
            } else {
              prescripts = true;
              if (i % 2 === 0 && !fix) {
                this.mError("There must be an equal number of prescripts of each type", options);
              }
            }
          }
        }
        if (this.childNodes.length % 2 === (prescripts ? 1 : 0) && !fix) {
          this.mError("There must be an equal number of scripts of each type", options);
        }
        _super.prototype.verifyChildren.call(this, options);
      };
      MmlMmultiscripts2.defaults = __assign({}, msubsup_js_1.MmlMsubsup.defaults);
      return MmlMmultiscripts2;
    }(msubsup_js_1.MmlMsubsup);
    exports.MmlMmultiscripts = MmlMmultiscripts;
    var MmlMprescripts = function(_super) {
      __extends(MmlMprescripts2, _super);
      function MmlMprescripts2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMprescripts2.prototype, "kind", {
        get: function() {
          return "mprescripts";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMprescripts2.prototype, "arity", {
        get: function() {
          return 0;
        },
        enumerable: false,
        configurable: true
      });
      MmlMprescripts2.prototype.verifyTree = function(options) {
        _super.prototype.verifyTree.call(this, options);
        if (this.parent && !this.parent.isKind("mmultiscripts")) {
          this.mError(this.kind + " must be a child of mmultiscripts", options, true);
        }
      };
      MmlMprescripts2.defaults = __assign({}, MmlNode_js_1.AbstractMmlNode.defaults);
      return MmlMprescripts2;
    }(MmlNode_js_1.AbstractMmlNode);
    exports.MmlMprescripts = MmlMprescripts;
    var MmlNone = function(_super) {
      __extends(MmlNone2, _super);
      function MmlNone2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlNone2.prototype, "kind", {
        get: function() {
          return "none";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlNone2.prototype, "arity", {
        get: function() {
          return 0;
        },
        enumerable: false,
        configurable: true
      });
      MmlNone2.prototype.verifyTree = function(options) {
        _super.prototype.verifyTree.call(this, options);
        if (this.parent && !this.parent.isKind("mmultiscripts")) {
          this.mError(this.kind + " must be a child of mmultiscripts", options, true);
        }
      };
      MmlNone2.defaults = __assign({}, MmlNode_js_1.AbstractMmlNode.defaults);
      return MmlNone2;
    }(MmlNode_js_1.AbstractMmlNode);
    exports.MmlNone = MmlNone;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mtable.js
var require_mtable = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mtable.js"(exports) {
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
    exports.MmlMtable = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var string_js_1 = require_string();
    var MmlMtable = function(_super) {
      __extends(MmlMtable2, _super);
      function MmlMtable2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
          useHeight: true
        };
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
      }
      Object.defineProperty(MmlMtable2.prototype, "kind", {
        get: function() {
          return "mtable";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMtable2.prototype, "linebreakContainer", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      MmlMtable2.prototype.setInheritedAttributes = function(attributes, display, level, prime) {
        var e_1, _a;
        try {
          for (var indentAttributes_1 = __values(MmlNode_js_1.indentAttributes), indentAttributes_1_1 = indentAttributes_1.next(); !indentAttributes_1_1.done; indentAttributes_1_1 = indentAttributes_1.next()) {
            var name_1 = indentAttributes_1_1.value;
            if (attributes[name_1]) {
              this.attributes.setInherited(name_1, attributes[name_1][1]);
            }
            if (this.attributes.getExplicit(name_1) !== void 0) {
              delete this.attributes.getAllAttributes()[name_1];
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (indentAttributes_1_1 && !indentAttributes_1_1.done && (_a = indentAttributes_1.return)) _a.call(indentAttributes_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        _super.prototype.setInheritedAttributes.call(this, attributes, display, level, prime);
      };
      MmlMtable2.prototype.setChildInheritedAttributes = function(attributes, display, level, _prime) {
        var e_2, _a, e_3, _b;
        try {
          for (var _c = __values(this.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
            var child = _d.value;
            if (!child.isKind("mtr")) {
              this.replaceChild(this.factory.create("mtr"), child).appendChild(child);
            }
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
        level = this.getProperty("scriptlevel") || level;
        display = !!(this.attributes.getExplicit("displaystyle") || this.attributes.getDefault("displaystyle"));
        attributes = this.addInheritedAttributes(attributes, {
          columnalign: this.attributes.get("columnalign"),
          rowalign: "center"
        });
        var cramped = this.attributes.getExplicit("data-cramped");
        var ralign = (0, string_js_1.split)(this.attributes.get("rowalign"));
        try {
          for (var _e = __values(this.childNodes), _f = _e.next(); !_f.done; _f = _e.next()) {
            var child = _f.value;
            attributes.rowalign[1] = ralign.shift() || attributes.rowalign[1];
            child.setInheritedAttributes(attributes, display, level, !!cramped);
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
      };
      MmlMtable2.prototype.verifyChildren = function(options) {
        var mtr = null;
        var factory = this.factory;
        for (var i = 0; i < this.childNodes.length; i++) {
          var child = this.childNodes[i];
          if (child.isKind("mtr")) {
            mtr = null;
          } else {
            var isMtd = child.isKind("mtd");
            if (mtr) {
              this.removeChild(child);
              i--;
            } else {
              mtr = this.replaceChild(factory.create("mtr"), child);
            }
            mtr.appendChild(isMtd ? child : factory.create("mtd", {}, [child]));
            if (!options["fixMtables"]) {
              child.parent.removeChild(child);
              child.parent = this;
              isMtd && mtr.appendChild(factory.create("mtd"));
              var merror = child.mError("Children of " + this.kind + " must be mtr or mlabeledtr", options, isMtd);
              mtr.childNodes[mtr.childNodes.length - 1].appendChild(merror);
            }
          }
        }
        _super.prototype.verifyChildren.call(this, options);
      };
      MmlMtable2.prototype.setTeXclass = function(prev) {
        var e_4, _a;
        this.getPrevClass(prev);
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            child.setTeXclass(null);
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
        return this;
      };
      MmlMtable2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlNode.defaults), { align: "axis", rowalign: "baseline", columnalign: "center", groupalign: "{left}", alignmentscope: true, columnwidth: "auto", width: "auto", rowspacing: "1ex", columnspacing: ".8em", rowlines: "none", columnlines: "none", frame: "none", framespacing: "0.4em 0.5ex", equalrows: false, equalcolumns: false, displaystyle: false, side: "right", minlabelspacing: "0.8em" });
      return MmlMtable2;
    }(MmlNode_js_1.AbstractMmlNode);
    exports.MmlMtable = MmlMtable;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mtr.js
var require_mtr = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mtr.js"(exports) {
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
    exports.MmlMlabeledtr = exports.MmlMtr = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var Attributes_js_1 = require_Attributes();
    var string_js_1 = require_string();
    var MmlMtr = function(_super) {
      __extends(MmlMtr2, _super);
      function MmlMtr2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMtr2.prototype, "kind", {
        get: function() {
          return "mtr";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMtr2.prototype, "linebreakContainer", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      MmlMtr2.prototype.setChildInheritedAttributes = function(attributes, display, level, prime) {
        var e_1, _a, e_2, _b;
        try {
          for (var _c = __values(this.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
            var child = _d.value;
            if (!child.isKind("mtd")) {
              this.replaceChild(this.factory.create("mtd"), child).appendChild(child);
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
        var calign = (0, string_js_1.split)(this.attributes.get("columnalign"));
        if (this.arity === 1) {
          calign.unshift(this.parent.attributes.get("side"));
        }
        attributes = this.addInheritedAttributes(attributes, {
          rowalign: this.attributes.get("rowalign"),
          columnalign: "center"
        });
        try {
          for (var _e = __values(this.childNodes), _f = _e.next(); !_f.done; _f = _e.next()) {
            var child = _f.value;
            attributes.columnalign[1] = calign.shift() || attributes.columnalign[1];
            child.setInheritedAttributes(attributes, display, level, prime);
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
      MmlMtr2.prototype.verifyChildren = function(options) {
        var e_3, _a;
        if (this.parent && !this.parent.isKind("mtable")) {
          this.mError(this.kind + " can only be a child of an mtable", options, true);
          return;
        }
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (!child.isKind("mtd")) {
              var mtd = this.replaceChild(this.factory.create("mtd"), child);
              mtd.appendChild(child);
              if (!options["fixMtables"]) {
                child.mError("Children of " + this.kind + " must be mtd", options);
              }
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
        _super.prototype.verifyChildren.call(this, options);
      };
      MmlMtr2.prototype.setTeXclass = function(prev) {
        var e_4, _a;
        this.getPrevClass(prev);
        try {
          for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            child.setTeXclass(null);
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
        return this;
      };
      MmlMtr2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlNode.defaults), { rowalign: Attributes_js_1.INHERIT, columnalign: Attributes_js_1.INHERIT, groupalign: Attributes_js_1.INHERIT });
      return MmlMtr2;
    }(MmlNode_js_1.AbstractMmlNode);
    exports.MmlMtr = MmlMtr;
    var MmlMlabeledtr = function(_super) {
      __extends(MmlMlabeledtr2, _super);
      function MmlMlabeledtr2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMlabeledtr2.prototype, "kind", {
        get: function() {
          return "mlabeledtr";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMlabeledtr2.prototype, "arity", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      return MmlMlabeledtr2;
    }(MmlMtr);
    exports.MmlMlabeledtr = MmlMlabeledtr;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mtd.js
var require_mtd = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mtd.js"(exports) {
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
    exports.MmlMtd = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var Attributes_js_1 = require_Attributes();
    var MmlMtd = function(_super) {
      __extends(MmlMtd2, _super);
      function MmlMtd2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlMtd2.prototype, "kind", {
        get: function() {
          return "mtd";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMtd2.prototype, "arity", {
        get: function() {
          return -1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlMtd2.prototype, "linebreakContainer", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      MmlMtd2.prototype.verifyChildren = function(options) {
        if (this.parent && !this.parent.isKind("mtr")) {
          this.mError(this.kind + " can only be a child of an mtr or mlabeledtr", options, true);
          return;
        }
        _super.prototype.verifyChildren.call(this, options);
      };
      MmlMtd2.prototype.setTeXclass = function(prev) {
        this.getPrevClass(prev);
        this.childNodes[0].setTeXclass(null);
        return this;
      };
      MmlMtd2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlBaseNode.defaults), { rowspan: 1, columnspan: 1, rowalign: Attributes_js_1.INHERIT, columnalign: Attributes_js_1.INHERIT, groupalign: Attributes_js_1.INHERIT });
      return MmlMtd2;
    }(MmlNode_js_1.AbstractMmlBaseNode);
    exports.MmlMtd = MmlMtd;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mglyph.js
var require_mglyph = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/mglyph.js"(exports) {
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
    exports.MmlMglyph = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlMglyph = function(_super) {
      __extends(MmlMglyph2, _super);
      function MmlMglyph2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        return _this;
      }
      Object.defineProperty(MmlMglyph2.prototype, "kind", {
        get: function() {
          return "mglyph";
        },
        enumerable: false,
        configurable: true
      });
      MmlMglyph2.prototype.verifyAttributes = function(options) {
        var _a = this.attributes.getList("src", "fontfamily", "index"), src = _a.src, fontfamily = _a.fontfamily, index = _a.index;
        if (src === "" && (fontfamily === "" || index === "")) {
          this.mError("mglyph must have either src or fontfamily and index attributes", options, true);
        } else {
          _super.prototype.verifyAttributes.call(this, options);
        }
      };
      MmlMglyph2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlTokenNode.defaults), { alt: "", src: "", index: "", width: "auto", height: "auto", valign: "0em" });
      return MmlMglyph2;
    }(MmlNode_js_1.AbstractMmlTokenNode);
    exports.MmlMglyph = MmlMglyph;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/semantics.js
var require_semantics = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/semantics.js"(exports) {
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
    exports.MmlAnnotation = exports.MmlAnnotationXML = exports.MmlSemantics = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var MmlSemantics = function(_super) {
      __extends(MmlSemantics2, _super);
      function MmlSemantics2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlSemantics2.prototype, "kind", {
        get: function() {
          return "semantics";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlSemantics2.prototype, "arity", {
        get: function() {
          return 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlSemantics2.prototype, "notParent", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      MmlSemantics2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlBaseNode.defaults), { definitionUrl: null, encoding: null });
      return MmlSemantics2;
    }(MmlNode_js_1.AbstractMmlBaseNode);
    exports.MmlSemantics = MmlSemantics;
    var MmlAnnotationXML = function(_super) {
      __extends(MmlAnnotationXML2, _super);
      function MmlAnnotationXML2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlAnnotationXML2.prototype, "kind", {
        get: function() {
          return "annotation-xml";
        },
        enumerable: false,
        configurable: true
      });
      MmlAnnotationXML2.prototype.setChildInheritedAttributes = function() {
      };
      MmlAnnotationXML2.defaults = __assign(__assign({}, MmlNode_js_1.AbstractMmlNode.defaults), { definitionUrl: null, encoding: null, cd: "mathmlkeys", name: "", src: null });
      return MmlAnnotationXML2;
    }(MmlNode_js_1.AbstractMmlNode);
    exports.MmlAnnotationXML = MmlAnnotationXML;
    var MmlAnnotation = function(_super) {
      __extends(MmlAnnotation2, _super);
      function MmlAnnotation2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = {
          isChars: true
        };
        return _this;
      }
      Object.defineProperty(MmlAnnotation2.prototype, "kind", {
        get: function() {
          return "annotation";
        },
        enumerable: false,
        configurable: true
      });
      MmlAnnotation2.defaults = __assign({}, MmlAnnotationXML.defaults);
      return MmlAnnotation2;
    }(MmlAnnotationXML);
    exports.MmlAnnotation = MmlAnnotation;
  }
});

// node_modules/mathjax-full/js/core/MmlTree/MmlNodes/TeXAtom.js
var require_TeXAtom = __commonJS({
  "node_modules/mathjax-full/js/core/MmlTree/MmlNodes/TeXAtom.js"(exports) {
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
    exports.TeXAtom = void 0;
    var MmlNode_js_1 = require_MmlNode();
    var mo_js_1 = require_mo();
    var TeXAtom = function(_super) {
      __extends(TeXAtom2, _super);
      function TeXAtom2(factory, attributes, children) {
        var _this = _super.call(this, factory, attributes, children) || this;
        _this.texclass = MmlNode_js_1.TEXCLASS.ORD;
        _this.setProperty("texClass", _this.texClass);
        return _this;
      }
      Object.defineProperty(TeXAtom2.prototype, "kind", {
        get: function() {
          return "TeXAtom";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(TeXAtom2.prototype, "arity", {
        get: function() {
          return -1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(TeXAtom2.prototype, "notParent", {
        get: function() {
          return this.childNodes[0] && this.childNodes[0].childNodes.length === 1;
        },
        enumerable: false,
        configurable: true
      });
      TeXAtom2.prototype.setTeXclass = function(prev) {
        this.childNodes[0].setTeXclass(null);
        return this.adjustTeXclass(prev);
      };
      TeXAtom2.prototype.adjustTeXclass = function(prev) {
        return prev;
      };
      TeXAtom2.defaults = __assign({}, MmlNode_js_1.AbstractMmlBaseNode.defaults);
      return TeXAtom2;
    }(MmlNode_js_1.AbstractMmlBaseNode);
    exports.TeXAtom = TeXAtom;
    TeXAtom.prototype.adjustTeXclass = mo_js_1.MmlMo.prototype.adjustTeXclass;
  }
});

export {
  require_math,
  require_mi,
  require_mn,
  require_mtext,
  require_mspace,
  require_ms,
  require_mrow,
  require_mfrac,
  require_msqrt,
  require_mroot,
  require_mpadded,
  require_mfenced,
  require_menclose,
  require_maction,
  require_msubsup,
  require_munderover,
  require_mmultiscripts,
  require_mtable,
  require_mtr,
  require_mtd,
  require_mglyph,
  require_semantics,
  require_TeXAtom
};
//# sourceMappingURL=chunk-QEU4Y7BF.js.map
