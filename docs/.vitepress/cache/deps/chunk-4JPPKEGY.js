import {
  require_lengths
} from "./chunk-H7B5EP6A.js";
import {
  require_FunctionList
} from "./chunk-BQOREXVA.js";
import {
  require_Retries,
  require_mathjax
} from "./chunk-DFBPSGJ2.js";
import {
  require_Factory,
  require_MmlNode,
  require_OperatorDictionary,
  require_Options,
  require_mo
} from "./chunk-RTXZROXG.js";
import {
  require_PrioritizedList
} from "./chunk-5BTRKSLH.js";
import {
  __commonJS
} from "./chunk-DLJ4GP37.js";

// node_modules/mathjax-full/js/input/tex/NodeUtil.js
var require_NodeUtil = __commonJS({
  "node_modules/mathjax-full/js/input/tex/NodeUtil.js"(exports) {
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
    var MmlNode_js_1 = require_MmlNode();
    var mo_js_1 = require_mo();
    var NodeUtil;
    (function(NodeUtil2) {
      var attrs = /* @__PURE__ */ new Map([
        ["autoOP", true],
        ["fnOP", true],
        ["movesupsub", true],
        ["subsupOK", true],
        ["texprimestyle", true],
        ["useHeight", true],
        ["variantForm", true],
        ["withDelims", true],
        ["mathaccent", true],
        ["open", true],
        ["close", true]
      ]);
      function createEntity(code) {
        return String.fromCodePoint(parseInt(code, 16));
      }
      NodeUtil2.createEntity = createEntity;
      function getChildren(node) {
        return node.childNodes;
      }
      NodeUtil2.getChildren = getChildren;
      function getText(node) {
        return node.getText();
      }
      NodeUtil2.getText = getText;
      function appendChildren(node, children) {
        var e_1, _a;
        try {
          for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
            var child = children_1_1.value;
            node.appendChild(child);
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
      }
      NodeUtil2.appendChildren = appendChildren;
      function setAttribute(node, attribute, value) {
        node.attributes.set(attribute, value);
      }
      NodeUtil2.setAttribute = setAttribute;
      function setProperty(node, property, value) {
        node.setProperty(property, value);
      }
      NodeUtil2.setProperty = setProperty;
      function setProperties(node, properties) {
        var e_2, _a;
        try {
          for (var _b = __values(Object.keys(properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var name_1 = _c.value;
            var value = properties[name_1];
            if (name_1 === "texClass") {
              node.texClass = value;
              node.setProperty(name_1, value);
            } else if (name_1 === "movablelimits") {
              node.setProperty("movablelimits", value);
              if (node.isKind("mo") || node.isKind("mstyle")) {
                node.attributes.set("movablelimits", value);
              }
            } else if (name_1 === "inferred") {
            } else if (attrs.has(name_1)) {
              node.setProperty(name_1, value);
            } else {
              node.attributes.set(name_1, value);
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
      }
      NodeUtil2.setProperties = setProperties;
      function getProperty(node, property) {
        return node.getProperty(property);
      }
      NodeUtil2.getProperty = getProperty;
      function getAttribute(node, attr) {
        return node.attributes.get(attr);
      }
      NodeUtil2.getAttribute = getAttribute;
      function removeProperties(node) {
        var properties = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          properties[_i - 1] = arguments[_i];
        }
        node.removeProperty.apply(node, __spreadArray([], __read(properties), false));
      }
      NodeUtil2.removeProperties = removeProperties;
      function getChildAt(node, position) {
        return node.childNodes[position];
      }
      NodeUtil2.getChildAt = getChildAt;
      function setChild(node, position, child) {
        var children = node.childNodes;
        children[position] = child;
        if (child) {
          child.parent = node;
        }
      }
      NodeUtil2.setChild = setChild;
      function copyChildren(oldNode, newNode) {
        var children = oldNode.childNodes;
        for (var i = 0; i < children.length; i++) {
          setChild(newNode, i, children[i]);
        }
      }
      NodeUtil2.copyChildren = copyChildren;
      function copyAttributes(oldNode, newNode) {
        newNode.attributes = oldNode.attributes;
        setProperties(newNode, oldNode.getAllProperties());
      }
      NodeUtil2.copyAttributes = copyAttributes;
      function isType(node, kind) {
        return node.isKind(kind);
      }
      NodeUtil2.isType = isType;
      function isEmbellished(node) {
        return node.isEmbellished;
      }
      NodeUtil2.isEmbellished = isEmbellished;
      function getTexClass(node) {
        return node.texClass;
      }
      NodeUtil2.getTexClass = getTexClass;
      function getCoreMO(node) {
        return node.coreMO();
      }
      NodeUtil2.getCoreMO = getCoreMO;
      function isNode(item) {
        return item instanceof MmlNode_js_1.AbstractMmlNode || item instanceof MmlNode_js_1.AbstractMmlEmptyNode;
      }
      NodeUtil2.isNode = isNode;
      function isInferred(node) {
        return node.isInferred;
      }
      NodeUtil2.isInferred = isInferred;
      function getForm(node) {
        var e_3, _a;
        if (!isType(node, "mo")) {
          return null;
        }
        var mo = node;
        var forms = mo.getForms();
        try {
          for (var forms_1 = __values(forms), forms_1_1 = forms_1.next(); !forms_1_1.done; forms_1_1 = forms_1.next()) {
            var form = forms_1_1.value;
            var symbol = mo_js_1.MmlMo.OPTABLE[form][mo.getText()];
            if (symbol) {
              return symbol;
            }
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (forms_1_1 && !forms_1_1.done && (_a = forms_1.return)) _a.call(forms_1);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        return null;
      }
      NodeUtil2.getForm = getForm;
    })(NodeUtil || (NodeUtil = {}));
    exports.default = NodeUtil;
  }
});

// node_modules/mathjax-full/js/input/tex/TexError.js
var require_TexError = __commonJS({
  "node_modules/mathjax-full/js/input/tex/TexError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TexError = function() {
      function TexError2(id, message) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          rest[_i - 2] = arguments[_i];
        }
        this.id = id;
        this.message = TexError2.processString(message, rest);
      }
      TexError2.processString = function(str, args) {
        var parts = str.split(TexError2.pattern);
        for (var i = 1, m = parts.length; i < m; i += 2) {
          var c = parts[i].charAt(0);
          if (c >= "0" && c <= "9") {
            parts[i] = args[parseInt(parts[i], 10) - 1];
            if (typeof parts[i] === "number") {
              parts[i] = parts[i].toString();
            }
          } else if (c === "{") {
            c = parts[i].substr(1);
            if (c >= "0" && c <= "9") {
              parts[i] = args[parseInt(parts[i].substr(1, parts[i].length - 2), 10) - 1];
              if (typeof parts[i] === "number") {
                parts[i] = parts[i].toString();
              }
            } else {
              var match = parts[i].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/);
              if (match) {
                parts[i] = "%" + parts[i];
              }
            }
          }
          if (parts[i] == null) {
            parts[i] = "???";
          }
        }
        return parts.join("");
      };
      TexError2.pattern = /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g;
      return TexError2;
    }();
    exports.default = TexError;
  }
});

// node_modules/mathjax-full/js/util/AsyncLoad.js
var require_AsyncLoad = __commonJS({
  "node_modules/mathjax-full/js/util/AsyncLoad.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.asyncLoad = void 0;
    var mathjax_js_1 = require_mathjax();
    function asyncLoad(name) {
      if (!mathjax_js_1.mathjax.asyncLoad) {
        return Promise.reject("Can't load '".concat(name, "': No asyncLoad method specified"));
      }
      return new Promise(function(ok, fail) {
        var result = mathjax_js_1.mathjax.asyncLoad(name);
        if (result instanceof Promise) {
          result.then(function(value) {
            return ok(value);
          }).catch(function(err) {
            return fail(err);
          });
        } else {
          ok(result);
        }
      });
    }
    exports.asyncLoad = asyncLoad;
  }
});

// node_modules/mathjax-full/js/util/Entities.js
var require_Entities = __commonJS({
  "node_modules/mathjax-full/js/util/Entities.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.numeric = exports.translate = exports.remove = exports.add = exports.entities = exports.options = void 0;
    var Retries_js_1 = require_Retries();
    var AsyncLoad_js_1 = require_AsyncLoad();
    exports.options = {
      loadMissingEntities: true
    };
    exports.entities = {
      ApplyFunction: "⁡",
      Backslash: "∖",
      Because: "∵",
      Breve: "˘",
      Cap: "⋒",
      CenterDot: "·",
      CircleDot: "⊙",
      CircleMinus: "⊖",
      CirclePlus: "⊕",
      CircleTimes: "⊗",
      Congruent: "≡",
      ContourIntegral: "∮",
      Coproduct: "∐",
      Cross: "⨯",
      Cup: "⋓",
      CupCap: "≍",
      Dagger: "‡",
      Del: "∇",
      Delta: "Δ",
      Diamond: "⋄",
      DifferentialD: "ⅆ",
      DotEqual: "≐",
      DoubleDot: "¨",
      DoubleRightTee: "⊨",
      DoubleVerticalBar: "∥",
      DownArrow: "↓",
      DownLeftVector: "↽",
      DownRightVector: "⇁",
      DownTee: "⊤",
      Downarrow: "⇓",
      Element: "∈",
      EqualTilde: "≂",
      Equilibrium: "⇌",
      Exists: "∃",
      ExponentialE: "ⅇ",
      FilledVerySmallSquare: "▪",
      ForAll: "∀",
      Gamma: "Γ",
      Gg: "⋙",
      GreaterEqual: "≥",
      GreaterEqualLess: "⋛",
      GreaterFullEqual: "≧",
      GreaterLess: "≷",
      GreaterSlantEqual: "⩾",
      GreaterTilde: "≳",
      Hacek: "ˇ",
      Hat: "^",
      HumpDownHump: "≎",
      HumpEqual: "≏",
      Im: "ℑ",
      ImaginaryI: "ⅈ",
      Integral: "∫",
      Intersection: "⋂",
      InvisibleComma: "⁣",
      InvisibleTimes: "⁢",
      Lambda: "Λ",
      Larr: "↞",
      LeftAngleBracket: "⟨",
      LeftArrow: "←",
      LeftArrowRightArrow: "⇆",
      LeftCeiling: "⌈",
      LeftDownVector: "⇃",
      LeftFloor: "⌊",
      LeftRightArrow: "↔",
      LeftTee: "⊣",
      LeftTriangle: "⊲",
      LeftTriangleEqual: "⊴",
      LeftUpVector: "↿",
      LeftVector: "↼",
      Leftarrow: "⇐",
      Leftrightarrow: "⇔",
      LessEqualGreater: "⋚",
      LessFullEqual: "≦",
      LessGreater: "≶",
      LessSlantEqual: "⩽",
      LessTilde: "≲",
      Ll: "⋘",
      Lleftarrow: "⇚",
      LongLeftArrow: "⟵",
      LongLeftRightArrow: "⟷",
      LongRightArrow: "⟶",
      Longleftarrow: "⟸",
      Longleftrightarrow: "⟺",
      Longrightarrow: "⟹",
      Lsh: "↰",
      MinusPlus: "∓",
      NestedGreaterGreater: "≫",
      NestedLessLess: "≪",
      NotDoubleVerticalBar: "∦",
      NotElement: "∉",
      NotEqual: "≠",
      NotExists: "∄",
      NotGreater: "≯",
      NotGreaterEqual: "≱",
      NotLeftTriangle: "⋪",
      NotLeftTriangleEqual: "⋬",
      NotLess: "≮",
      NotLessEqual: "≰",
      NotPrecedes: "⊀",
      NotPrecedesSlantEqual: "⋠",
      NotRightTriangle: "⋫",
      NotRightTriangleEqual: "⋭",
      NotSubsetEqual: "⊈",
      NotSucceeds: "⊁",
      NotSucceedsSlantEqual: "⋡",
      NotSupersetEqual: "⊉",
      NotTilde: "≁",
      NotVerticalBar: "∤",
      Omega: "Ω",
      OverBar: "‾",
      OverBrace: "⏞",
      PartialD: "∂",
      Phi: "Φ",
      Pi: "Π",
      PlusMinus: "±",
      Precedes: "≺",
      PrecedesEqual: "⪯",
      PrecedesSlantEqual: "≼",
      PrecedesTilde: "≾",
      Product: "∏",
      Proportional: "∝",
      Psi: "Ψ",
      Rarr: "↠",
      Re: "ℜ",
      ReverseEquilibrium: "⇋",
      RightAngleBracket: "⟩",
      RightArrow: "→",
      RightArrowLeftArrow: "⇄",
      RightCeiling: "⌉",
      RightDownVector: "⇂",
      RightFloor: "⌋",
      RightTee: "⊢",
      RightTeeArrow: "↦",
      RightTriangle: "⊳",
      RightTriangleEqual: "⊵",
      RightUpVector: "↾",
      RightVector: "⇀",
      Rightarrow: "⇒",
      Rrightarrow: "⇛",
      Rsh: "↱",
      Sigma: "Σ",
      SmallCircle: "∘",
      Sqrt: "√",
      Square: "□",
      SquareIntersection: "⊓",
      SquareSubset: "⊏",
      SquareSubsetEqual: "⊑",
      SquareSuperset: "⊐",
      SquareSupersetEqual: "⊒",
      SquareUnion: "⊔",
      Star: "⋆",
      Subset: "⋐",
      SubsetEqual: "⊆",
      Succeeds: "≻",
      SucceedsEqual: "⪰",
      SucceedsSlantEqual: "≽",
      SucceedsTilde: "≿",
      SuchThat: "∋",
      Sum: "∑",
      Superset: "⊃",
      SupersetEqual: "⊇",
      Supset: "⋑",
      Therefore: "∴",
      Theta: "Θ",
      Tilde: "∼",
      TildeEqual: "≃",
      TildeFullEqual: "≅",
      TildeTilde: "≈",
      UnderBar: "_",
      UnderBrace: "⏟",
      Union: "⋃",
      UnionPlus: "⊎",
      UpArrow: "↑",
      UpDownArrow: "↕",
      UpTee: "⊥",
      Uparrow: "⇑",
      Updownarrow: "⇕",
      Upsilon: "Υ",
      Vdash: "⊩",
      Vee: "⋁",
      VerticalBar: "∣",
      VerticalTilde: "≀",
      Vvdash: "⊪",
      Wedge: "⋀",
      Xi: "Ξ",
      amp: "&",
      acute: "´",
      aleph: "ℵ",
      alpha: "α",
      amalg: "⨿",
      and: "∧",
      ang: "∠",
      angmsd: "∡",
      angsph: "∢",
      ape: "≊",
      backprime: "‵",
      backsim: "∽",
      backsimeq: "⋍",
      beta: "β",
      beth: "ℶ",
      between: "≬",
      bigcirc: "◯",
      bigodot: "⨀",
      bigoplus: "⨁",
      bigotimes: "⨂",
      bigsqcup: "⨆",
      bigstar: "★",
      bigtriangledown: "▽",
      bigtriangleup: "△",
      biguplus: "⨄",
      blacklozenge: "⧫",
      blacktriangle: "▴",
      blacktriangledown: "▾",
      blacktriangleleft: "◂",
      bowtie: "⋈",
      boxdl: "┐",
      boxdr: "┌",
      boxminus: "⊟",
      boxplus: "⊞",
      boxtimes: "⊠",
      boxul: "┘",
      boxur: "└",
      bsol: "\\",
      bull: "•",
      cap: "∩",
      check: "✓",
      chi: "χ",
      circ: "ˆ",
      circeq: "≗",
      circlearrowleft: "↺",
      circlearrowright: "↻",
      circledR: "®",
      circledS: "Ⓢ",
      circledast: "⊛",
      circledcirc: "⊚",
      circleddash: "⊝",
      clubs: "♣",
      colon: ":",
      comp: "∁",
      ctdot: "⋯",
      cuepr: "⋞",
      cuesc: "⋟",
      cularr: "↶",
      cup: "∪",
      curarr: "↷",
      curlyvee: "⋎",
      curlywedge: "⋏",
      dagger: "†",
      daleth: "ℸ",
      ddarr: "⇊",
      deg: "°",
      delta: "δ",
      digamma: "ϝ",
      div: "÷",
      divideontimes: "⋇",
      dot: "˙",
      doteqdot: "≑",
      dotplus: "∔",
      dotsquare: "⊡",
      dtdot: "⋱",
      ecir: "≖",
      efDot: "≒",
      egs: "⪖",
      ell: "ℓ",
      els: "⪕",
      empty: "∅",
      epsi: "ε",
      epsiv: "ϵ",
      erDot: "≓",
      eta: "η",
      eth: "ð",
      flat: "♭",
      fork: "⋔",
      frown: "⌢",
      gEl: "⪌",
      gamma: "γ",
      gap: "⪆",
      gimel: "ℷ",
      gnE: "≩",
      gnap: "⪊",
      gne: "⪈",
      gnsim: "⋧",
      gt: ">",
      gtdot: "⋗",
      harrw: "↭",
      hbar: "ℏ",
      hellip: "…",
      hookleftarrow: "↩",
      hookrightarrow: "↪",
      imath: "ı",
      infin: "∞",
      intcal: "⊺",
      iota: "ι",
      jmath: "ȷ",
      kappa: "κ",
      kappav: "ϰ",
      lEg: "⪋",
      lambda: "λ",
      lap: "⪅",
      larrlp: "↫",
      larrtl: "↢",
      lbrace: "{",
      lbrack: "[",
      le: "≤",
      leftleftarrows: "⇇",
      leftthreetimes: "⋋",
      lessdot: "⋖",
      lmoust: "⎰",
      lnE: "≨",
      lnap: "⪉",
      lne: "⪇",
      lnsim: "⋦",
      longmapsto: "⟼",
      looparrowright: "↬",
      lowast: "∗",
      loz: "◊",
      lt: "<",
      ltimes: "⋉",
      ltri: "◃",
      macr: "¯",
      malt: "✠",
      mho: "℧",
      mu: "μ",
      multimap: "⊸",
      nLeftarrow: "⇍",
      nLeftrightarrow: "⇎",
      nRightarrow: "⇏",
      nVDash: "⊯",
      nVdash: "⊮",
      natur: "♮",
      nearr: "↗",
      nharr: "↮",
      nlarr: "↚",
      not: "¬",
      nrarr: "↛",
      nu: "ν",
      nvDash: "⊭",
      nvdash: "⊬",
      nwarr: "↖",
      omega: "ω",
      omicron: "ο",
      or: "∨",
      osol: "⊘",
      period: ".",
      phi: "φ",
      phiv: "ϕ",
      pi: "π",
      piv: "ϖ",
      prap: "⪷",
      precnapprox: "⪹",
      precneqq: "⪵",
      precnsim: "⋨",
      prime: "′",
      psi: "ψ",
      quot: '"',
      rarrtl: "↣",
      rbrace: "}",
      rbrack: "]",
      rho: "ρ",
      rhov: "ϱ",
      rightrightarrows: "⇉",
      rightthreetimes: "⋌",
      ring: "˚",
      rmoust: "⎱",
      rtimes: "⋊",
      rtri: "▹",
      scap: "⪸",
      scnE: "⪶",
      scnap: "⪺",
      scnsim: "⋩",
      sdot: "⋅",
      searr: "↘",
      sect: "§",
      sharp: "♯",
      sigma: "σ",
      sigmav: "ς",
      simne: "≆",
      smile: "⌣",
      spades: "♠",
      sub: "⊂",
      subE: "⫅",
      subnE: "⫋",
      subne: "⊊",
      supE: "⫆",
      supnE: "⫌",
      supne: "⊋",
      swarr: "↙",
      tau: "τ",
      theta: "θ",
      thetav: "ϑ",
      tilde: "˜",
      times: "×",
      triangle: "▵",
      triangleq: "≜",
      upsi: "υ",
      upuparrows: "⇈",
      veebar: "⊻",
      vellip: "⋮",
      weierp: "℘",
      xi: "ξ",
      yen: "¥",
      zeta: "ζ",
      zigrarr: "⇝",
      nbsp: " ",
      rsquo: "’",
      lsquo: "‘"
    };
    var loaded = {};
    function add(additions, file) {
      Object.assign(exports.entities, additions);
      loaded[file] = true;
    }
    exports.add = add;
    function remove(entity) {
      delete exports.entities[entity];
    }
    exports.remove = remove;
    function translate(text) {
      return text.replace(/&([a-z][a-z0-9]*|#(?:[0-9]+|x[0-9a-f]+));/ig, replace);
    }
    exports.translate = translate;
    function replace(match, entity) {
      if (entity.charAt(0) === "#") {
        return numeric(entity.slice(1));
      }
      if (exports.entities[entity]) {
        return exports.entities[entity];
      }
      if (exports.options["loadMissingEntities"]) {
        var file = entity.match(/^[a-zA-Z](fr|scr|opf)$/) ? RegExp.$1 : entity.charAt(0).toLowerCase();
        if (!loaded[file]) {
          loaded[file] = true;
          (0, Retries_js_1.retryAfter)((0, AsyncLoad_js_1.asyncLoad)("./util/entities/" + file + ".js"));
        }
      }
      return match;
    }
    function numeric(entity) {
      var n = entity.charAt(0) === "x" ? parseInt(entity.slice(1), 16) : parseInt(entity);
      return String.fromCodePoint(n);
    }
    exports.numeric = numeric;
  }
});

// node_modules/mathjax-full/js/input/tex/ParseUtil.js
var require_ParseUtil = __commonJS({
  "node_modules/mathjax-full/js/input/tex/ParseUtil.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var MmlNode_js_1 = require_MmlNode();
    var NodeUtil_js_1 = __importDefault(require_NodeUtil());
    var TexParser_js_1 = __importDefault(require_TexParser());
    var TexError_js_1 = __importDefault(require_TexError());
    var Entities_js_1 = require_Entities();
    var ParseUtil;
    (function(ParseUtil2) {
      var emPerInch = 7.2;
      var pxPerInch = 72;
      var UNIT_CASES = {
        "em": function(m) {
          return m;
        },
        "ex": function(m) {
          return m * 0.43;
        },
        "pt": function(m) {
          return m / 10;
        },
        "pc": function(m) {
          return m * 1.2;
        },
        "px": function(m) {
          return m * emPerInch / pxPerInch;
        },
        "in": function(m) {
          return m * emPerInch;
        },
        "cm": function(m) {
          return m * emPerInch / 2.54;
        },
        "mm": function(m) {
          return m * emPerInch / 25.4;
        },
        "mu": function(m) {
          return m / 18;
        }
      };
      var num = "([-+]?([.,]\\d+|\\d+([.,]\\d*)?))";
      var unit = "(pt|em|ex|mu|px|mm|cm|in|pc)";
      var dimenEnd = RegExp("^\\s*" + num + "\\s*" + unit + "\\s*$");
      var dimenRest = RegExp("^\\s*" + num + "\\s*" + unit + " ?");
      function matchDimen(dim, rest) {
        if (rest === void 0) {
          rest = false;
        }
        var match = dim.match(rest ? dimenRest : dimenEnd);
        return match ? muReplace([match[1].replace(/,/, "."), match[4], match[0].length]) : [null, null, 0];
      }
      ParseUtil2.matchDimen = matchDimen;
      function muReplace(_a) {
        var _b = __read(_a, 3), value = _b[0], unit2 = _b[1], length = _b[2];
        if (unit2 !== "mu") {
          return [value, unit2, length];
        }
        var em = Em(UNIT_CASES[unit2](parseFloat(value || "1")));
        return [em.slice(0, -2), "em", length];
      }
      function dimen2em(dim) {
        var _a = __read(matchDimen(dim), 2), value = _a[0], unit2 = _a[1];
        var m = parseFloat(value || "1");
        var func = UNIT_CASES[unit2];
        return func ? func(m) : 0;
      }
      ParseUtil2.dimen2em = dimen2em;
      function Em(m) {
        if (Math.abs(m) < 6e-4) {
          return "0em";
        }
        return m.toFixed(3).replace(/\.?0+$/, "") + "em";
      }
      ParseUtil2.Em = Em;
      function cols() {
        var W = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          W[_i] = arguments[_i];
        }
        return W.map(function(n) {
          return Em(n);
        }).join(" ");
      }
      ParseUtil2.cols = cols;
      function fenced(configuration, open, mml, close, big, color) {
        if (big === void 0) {
          big = "";
        }
        if (color === void 0) {
          color = "";
        }
        var nf = configuration.nodeFactory;
        var mrow = nf.create("node", "mrow", [], { open, close, texClass: MmlNode_js_1.TEXCLASS.INNER });
        var mo;
        if (big) {
          mo = new TexParser_js_1.default("\\" + big + "l" + open, configuration.parser.stack.env, configuration).mml();
        } else {
          var openNode = nf.create("text", open);
          mo = nf.create("node", "mo", [], { fence: true, stretchy: true, symmetric: true, texClass: MmlNode_js_1.TEXCLASS.OPEN }, openNode);
        }
        NodeUtil_js_1.default.appendChildren(mrow, [mo, mml]);
        if (big) {
          mo = new TexParser_js_1.default("\\" + big + "r" + close, configuration.parser.stack.env, configuration).mml();
        } else {
          var closeNode = nf.create("text", close);
          mo = nf.create("node", "mo", [], { fence: true, stretchy: true, symmetric: true, texClass: MmlNode_js_1.TEXCLASS.CLOSE }, closeNode);
        }
        color && mo.attributes.set("mathcolor", color);
        NodeUtil_js_1.default.appendChildren(mrow, [mo]);
        return mrow;
      }
      ParseUtil2.fenced = fenced;
      function fixedFence(configuration, open, mml, close) {
        var mrow = configuration.nodeFactory.create("node", "mrow", [], { open, close, texClass: MmlNode_js_1.TEXCLASS.ORD });
        if (open) {
          NodeUtil_js_1.default.appendChildren(mrow, [mathPalette(configuration, open, "l")]);
        }
        if (NodeUtil_js_1.default.isType(mml, "mrow")) {
          NodeUtil_js_1.default.appendChildren(mrow, NodeUtil_js_1.default.getChildren(mml));
        } else {
          NodeUtil_js_1.default.appendChildren(mrow, [mml]);
        }
        if (close) {
          NodeUtil_js_1.default.appendChildren(mrow, [mathPalette(configuration, close, "r")]);
        }
        return mrow;
      }
      ParseUtil2.fixedFence = fixedFence;
      function mathPalette(configuration, fence, side) {
        if (fence === "{" || fence === "}") {
          fence = "\\" + fence;
        }
        var D = "{\\bigg" + side + " " + fence + "}";
        var T = "{\\big" + side + " " + fence + "}";
        return new TexParser_js_1.default("\\mathchoice" + D + T + T + T, {}, configuration).mml();
      }
      ParseUtil2.mathPalette = mathPalette;
      function fixInitialMO(configuration, nodes) {
        for (var i = 0, m = nodes.length; i < m; i++) {
          var child = nodes[i];
          if (child && (!NodeUtil_js_1.default.isType(child, "mspace") && (!NodeUtil_js_1.default.isType(child, "TeXAtom") || NodeUtil_js_1.default.getChildren(child)[0] && NodeUtil_js_1.default.getChildren(NodeUtil_js_1.default.getChildren(child)[0]).length))) {
            if (NodeUtil_js_1.default.isEmbellished(child) || NodeUtil_js_1.default.isType(child, "TeXAtom") && NodeUtil_js_1.default.getTexClass(child) === MmlNode_js_1.TEXCLASS.REL) {
              var mi = configuration.nodeFactory.create("node", "mi");
              nodes.unshift(mi);
            }
            break;
          }
        }
      }
      ParseUtil2.fixInitialMO = fixInitialMO;
      function internalMath(parser, text, level, font) {
        if (parser.configuration.options.internalMath) {
          return parser.configuration.options.internalMath(parser, text, level, font);
        }
        var mathvariant = font || parser.stack.env.font;
        var def = mathvariant ? { mathvariant } : {};
        var mml = [], i = 0, k = 0, c, node, match = "", braces = 0;
        if (text.match(/\\?[${}\\]|\\\(|\\(eq)?ref\s*\{/)) {
          while (i < text.length) {
            c = text.charAt(i++);
            if (c === "$") {
              if (match === "$" && braces === 0) {
                node = parser.create("node", "TeXAtom", [new TexParser_js_1.default(text.slice(k, i - 1), {}, parser.configuration).mml()]);
                mml.push(node);
                match = "";
                k = i;
              } else if (match === "") {
                if (k < i - 1) {
                  mml.push(internalText(parser, text.slice(k, i - 1), def));
                }
                match = "$";
                k = i;
              }
            } else if (c === "{" && match !== "") {
              braces++;
            } else if (c === "}") {
              if (match === "}" && braces === 0) {
                var atom = new TexParser_js_1.default(text.slice(k, i), {}, parser.configuration).mml();
                node = parser.create("node", "TeXAtom", [atom], def);
                mml.push(node);
                match = "";
                k = i;
              } else if (match !== "") {
                if (braces) {
                  braces--;
                }
              }
            } else if (c === "\\") {
              if (match === "" && text.substr(i).match(/^(eq)?ref\s*\{/)) {
                var len = RegExp["$&"].length;
                if (k < i - 1) {
                  mml.push(internalText(parser, text.slice(k, i - 1), def));
                }
                match = "}";
                k = i - 1;
                i += len;
              } else {
                c = text.charAt(i++);
                if (c === "(" && match === "") {
                  if (k < i - 2) {
                    mml.push(internalText(parser, text.slice(k, i - 2), def));
                  }
                  match = ")";
                  k = i;
                } else if (c === ")" && match === ")" && braces === 0) {
                  node = parser.create("node", "TeXAtom", [new TexParser_js_1.default(text.slice(k, i - 2), {}, parser.configuration).mml()]);
                  mml.push(node);
                  match = "";
                  k = i;
                } else if (c.match(/[${}\\]/) && match === "") {
                  i--;
                  text = text.substr(0, i - 1) + text.substr(i);
                }
              }
            }
          }
          if (match !== "") {
            throw new TexError_js_1.default("MathNotTerminated", "Math not terminated in text box");
          }
        }
        if (k < text.length) {
          mml.push(internalText(parser, text.slice(k), def));
        }
        if (level != null) {
          mml = [parser.create("node", "mstyle", mml, { displaystyle: false, scriptlevel: level })];
        } else if (mml.length > 1) {
          mml = [parser.create("node", "mrow", mml)];
        }
        return mml;
      }
      ParseUtil2.internalMath = internalMath;
      function internalText(parser, text, def) {
        text = text.replace(/^\s+/, Entities_js_1.entities.nbsp).replace(/\s+$/, Entities_js_1.entities.nbsp);
        var textNode = parser.create("text", text);
        return parser.create("node", "mtext", [], def, textNode);
      }
      ParseUtil2.internalText = internalText;
      function underOver(parser, base, script, pos, stack) {
        ParseUtil2.checkMovableLimits(base);
        if (NodeUtil_js_1.default.isType(base, "munderover") && NodeUtil_js_1.default.isEmbellished(base)) {
          NodeUtil_js_1.default.setProperties(NodeUtil_js_1.default.getCoreMO(base), { lspace: 0, rspace: 0 });
          var mo = parser.create("node", "mo", [], { rspace: 0 });
          base = parser.create("node", "mrow", [mo, base]);
        }
        var mml = parser.create("node", "munderover", [base]);
        NodeUtil_js_1.default.setChild(mml, pos === "over" ? mml.over : mml.under, script);
        var node = mml;
        if (stack) {
          node = parser.create("node", "TeXAtom", [mml], { texClass: MmlNode_js_1.TEXCLASS.OP, movesupsub: true });
        }
        NodeUtil_js_1.default.setProperty(node, "subsupOK", true);
        return node;
      }
      ParseUtil2.underOver = underOver;
      function checkMovableLimits(base) {
        var symbol = NodeUtil_js_1.default.isType(base, "mo") ? NodeUtil_js_1.default.getForm(base) : null;
        if (NodeUtil_js_1.default.getProperty(base, "movablelimits") || symbol && symbol[3] && symbol[3].movablelimits) {
          NodeUtil_js_1.default.setProperties(base, { movablelimits: false });
        }
      }
      ParseUtil2.checkMovableLimits = checkMovableLimits;
      function trimSpaces(text) {
        if (typeof text !== "string") {
          return text;
        }
        var TEXT = text.trim();
        if (TEXT.match(/\\$/) && text.match(/ $/)) {
          TEXT += " ";
        }
        return TEXT;
      }
      ParseUtil2.trimSpaces = trimSpaces;
      function setArrayAlign(array, align) {
        align = ParseUtil2.trimSpaces(align || "");
        if (align === "t") {
          array.arraydef.align = "baseline 1";
        } else if (align === "b") {
          array.arraydef.align = "baseline -1";
        } else if (align === "c") {
          array.arraydef.align = "axis";
        } else if (align) {
          array.arraydef.align = align;
        }
        return array;
      }
      ParseUtil2.setArrayAlign = setArrayAlign;
      function substituteArgs(parser, args, str) {
        var text = "";
        var newstring = "";
        var i = 0;
        while (i < str.length) {
          var c = str.charAt(i++);
          if (c === "\\") {
            text += c + str.charAt(i++);
          } else if (c === "#") {
            c = str.charAt(i++);
            if (c === "#") {
              text += c;
            } else {
              if (!c.match(/[1-9]/) || parseInt(c, 10) > args.length) {
                throw new TexError_js_1.default("IllegalMacroParam", "Illegal macro parameter reference");
              }
              newstring = addArgs(parser, addArgs(parser, newstring, text), args[parseInt(c, 10) - 1]);
              text = "";
            }
          } else {
            text += c;
          }
        }
        return addArgs(parser, newstring, text);
      }
      ParseUtil2.substituteArgs = substituteArgs;
      function addArgs(parser, s1, s2) {
        if (s2.match(/^[a-z]/i) && s1.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i)) {
          s1 += " ";
        }
        if (s1.length + s2.length > parser.configuration.options["maxBuffer"]) {
          throw new TexError_js_1.default("MaxBufferSize", "MathJax internal buffer size exceeded; is there a recursive macro call?");
        }
        return s1 + s2;
      }
      ParseUtil2.addArgs = addArgs;
      function checkMaxMacros(parser, isMacro) {
        if (isMacro === void 0) {
          isMacro = true;
        }
        if (++parser.macroCount <= parser.configuration.options["maxMacros"]) {
          return;
        }
        if (isMacro) {
          throw new TexError_js_1.default("MaxMacroSub1", "MathJax maximum macro substitution count exceeded; is here a recursive macro call?");
        } else {
          throw new TexError_js_1.default("MaxMacroSub2", "MathJax maximum substitution count exceeded; is there a recursive latex environment?");
        }
      }
      ParseUtil2.checkMaxMacros = checkMaxMacros;
      function checkEqnEnv(parser) {
        if (parser.stack.global.eqnenv) {
          throw new TexError_js_1.default("ErroneousNestingEq", "Erroneous nesting of equation structures");
        }
        parser.stack.global.eqnenv = true;
      }
      ParseUtil2.checkEqnEnv = checkEqnEnv;
      function copyNode(node, parser) {
        var tree = node.copy();
        var options = parser.configuration;
        tree.walkTree(function(n) {
          var e_1, _a;
          options.addNode(n.kind, n);
          var lists = (n.getProperty("in-lists") || "").split(/,/);
          try {
            for (var lists_1 = __values(lists), lists_1_1 = lists_1.next(); !lists_1_1.done; lists_1_1 = lists_1.next()) {
              var list = lists_1_1.value;
              list && options.addNode(list, n);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (lists_1_1 && !lists_1_1.done && (_a = lists_1.return)) _a.call(lists_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        });
        return tree;
      }
      ParseUtil2.copyNode = copyNode;
      function MmlFilterAttribute(_parser, _name, value) {
        return value;
      }
      ParseUtil2.MmlFilterAttribute = MmlFilterAttribute;
      function getFontDef(parser) {
        var font = parser.stack.env["font"];
        return font ? { mathvariant: font } : {};
      }
      ParseUtil2.getFontDef = getFontDef;
      function keyvalOptions(attrib, allowed, error) {
        var e_2, _a;
        if (allowed === void 0) {
          allowed = null;
        }
        if (error === void 0) {
          error = false;
        }
        var def = readKeyval(attrib);
        if (allowed) {
          try {
            for (var _b = __values(Object.keys(def)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var key = _c.value;
              if (!allowed.hasOwnProperty(key)) {
                if (error) {
                  throw new TexError_js_1.default("InvalidOption", "Invalid option: %1", key);
                }
                delete def[key];
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
        }
        return def;
      }
      ParseUtil2.keyvalOptions = keyvalOptions;
      function readKeyval(text) {
        var _a, _b;
        var options = {};
        var rest = text;
        var end, key, val;
        while (rest) {
          _a = __read(readValue(rest, ["=", ","]), 3), key = _a[0], end = _a[1], rest = _a[2];
          if (end === "=") {
            _b = __read(readValue(rest, [","]), 3), val = _b[0], end = _b[1], rest = _b[2];
            val = val === "false" || val === "true" ? JSON.parse(val) : val;
            options[key] = val;
          } else if (key) {
            options[key] = true;
          }
        }
        return options;
      }
      function removeBraces(text, count) {
        while (count > 0) {
          text = text.trim().slice(1, -1);
          count--;
        }
        return text.trim();
      }
      function readValue(text, end) {
        var length = text.length;
        var braces = 0;
        var value = "";
        var index = 0;
        var start = 0;
        var startCount = true;
        var stopCount = false;
        while (index < length) {
          var c = text[index++];
          switch (c) {
            case " ":
              break;
            case "{":
              if (startCount) {
                start++;
              } else {
                stopCount = false;
                if (start > braces) {
                  start = braces;
                }
              }
              braces++;
              break;
            case "}":
              if (braces) {
                braces--;
              }
              if (startCount || stopCount) {
                start--;
                stopCount = true;
              }
              startCount = false;
              break;
            default:
              if (!braces && end.indexOf(c) !== -1) {
                return [stopCount ? "true" : removeBraces(value, start), c, text.slice(index)];
              }
              startCount = false;
              stopCount = false;
          }
          value += c;
        }
        if (braces) {
          throw new TexError_js_1.default("ExtraOpenMissingClose", "Extra open brace or missing close brace");
        }
        return [stopCount ? "true" : removeBraces(value, start), "", text.slice(index)];
      }
    })(ParseUtil || (ParseUtil = {}));
    exports.default = ParseUtil;
  }
});

// node_modules/mathjax-full/js/input/tex/Stack.js
var require_Stack = __commonJS({
  "node_modules/mathjax-full/js/input/tex/Stack.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var NodeUtil_js_1 = __importDefault(require_NodeUtil());
    var Stack = function() {
      function Stack2(_factory, _env, inner) {
        this._factory = _factory;
        this._env = _env;
        this.global = {};
        this.stack = [];
        this.global = { isInner: inner };
        this.stack = [this._factory.create("start", this.global)];
        if (_env) {
          this.stack[0].env = _env;
        }
        this.env = this.stack[0].env;
      }
      Object.defineProperty(Stack2.prototype, "env", {
        get: function() {
          return this._env;
        },
        set: function(env) {
          this._env = env;
        },
        enumerable: false,
        configurable: true
      });
      Stack2.prototype.Push = function() {
        var e_1, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        try {
          for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
            var node = args_1_1.value;
            if (!node) {
              continue;
            }
            var item = NodeUtil_js_1.default.isNode(node) ? this._factory.create("mml", node) : node;
            item.global = this.global;
            var _b = __read(this.stack.length ? this.Top().checkItem(item) : [null, true], 2), top_1 = _b[0], success = _b[1];
            if (!success) {
              continue;
            }
            if (top_1) {
              this.Pop();
              this.Push.apply(this, __spreadArray([], __read(top_1), false));
              continue;
            }
            this.stack.push(item);
            if (item.env) {
              if (item.copyEnv) {
                Object.assign(item.env, this.env);
              }
              this.env = item.env;
            } else {
              item.env = this.env;
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      };
      Stack2.prototype.Pop = function() {
        var item = this.stack.pop();
        if (!item.isOpen) {
          delete item.env;
        }
        this.env = this.stack.length ? this.Top().env : {};
        return item;
      };
      Stack2.prototype.Top = function(n) {
        if (n === void 0) {
          n = 1;
        }
        return this.stack.length < n ? null : this.stack[this.stack.length - n];
      };
      Stack2.prototype.Prev = function(noPop) {
        var top = this.Top();
        return noPop ? top.First : top.Pop();
      };
      Stack2.prototype.toString = function() {
        return "stack[\n  " + this.stack.join("\n  ") + "\n]";
      };
      return Stack2;
    }();
    exports.default = Stack;
  }
});

// node_modules/mathjax-full/js/input/tex/TexParser.js
var require_TexParser = __commonJS({
  "node_modules/mathjax-full/js/input/tex/TexParser.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var ParseUtil_js_1 = __importDefault(require_ParseUtil());
    var Stack_js_1 = __importDefault(require_Stack());
    var TexError_js_1 = __importDefault(require_TexError());
    var MmlNode_js_1 = require_MmlNode();
    var TexParser = function() {
      function TexParser2(_string, env, configuration) {
        var e_1, _a;
        this._string = _string;
        this.configuration = configuration;
        this.macroCount = 0;
        this.i = 0;
        this.currentCS = "";
        var inner = env.hasOwnProperty("isInner");
        var isInner = env["isInner"];
        delete env["isInner"];
        var ENV;
        if (env) {
          ENV = {};
          try {
            for (var _b = __values(Object.keys(env)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var id = _c.value;
              ENV[id] = env[id];
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
        this.configuration.pushParser(this);
        this.stack = new Stack_js_1.default(this.itemFactory, ENV, inner ? isInner : true);
        this.Parse();
        this.Push(this.itemFactory.create("stop"));
      }
      Object.defineProperty(TexParser2.prototype, "options", {
        get: function() {
          return this.configuration.options;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(TexParser2.prototype, "itemFactory", {
        get: function() {
          return this.configuration.itemFactory;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(TexParser2.prototype, "tags", {
        get: function() {
          return this.configuration.tags;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(TexParser2.prototype, "string", {
        get: function() {
          return this._string;
        },
        set: function(str) {
          this._string = str;
        },
        enumerable: false,
        configurable: true
      });
      TexParser2.prototype.parse = function(kind, input) {
        return this.configuration.handlers.get(kind).parse(input);
      };
      TexParser2.prototype.lookup = function(kind, symbol) {
        return this.configuration.handlers.get(kind).lookup(symbol);
      };
      TexParser2.prototype.contains = function(kind, symbol) {
        return this.configuration.handlers.get(kind).contains(symbol);
      };
      TexParser2.prototype.toString = function() {
        var e_2, _a;
        var str = "";
        try {
          for (var _b = __values(Array.from(this.configuration.handlers.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
            var config = _c.value;
            str += config + ": " + this.configuration.handlers.get(config) + "\n";
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
        return str;
      };
      TexParser2.prototype.Parse = function() {
        var c;
        while (this.i < this.string.length) {
          c = this.getCodePoint();
          this.i += c.length;
          this.parse("character", [this, c]);
        }
      };
      TexParser2.prototype.Push = function(arg) {
        if (arg instanceof MmlNode_js_1.AbstractMmlNode && arg.isInferred) {
          this.PushAll(arg.childNodes);
        } else {
          this.stack.Push(arg);
        }
      };
      TexParser2.prototype.PushAll = function(args) {
        var e_3, _a;
        try {
          for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
            var arg = args_1_1.value;
            this.stack.Push(arg);
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
      };
      TexParser2.prototype.mml = function() {
        if (!this.stack.Top().isKind("mml")) {
          return null;
        }
        var node = this.stack.Top().First;
        this.configuration.popParser();
        return node;
      };
      TexParser2.prototype.convertDelimiter = function(c) {
        var symbol = this.lookup("delimiter", c);
        return symbol ? symbol.char : null;
      };
      TexParser2.prototype.getCodePoint = function() {
        var code = this.string.codePointAt(this.i);
        return code === void 0 ? "" : String.fromCodePoint(code);
      };
      TexParser2.prototype.nextIsSpace = function() {
        return !!this.string.charAt(this.i).match(/\s/);
      };
      TexParser2.prototype.GetNext = function() {
        while (this.nextIsSpace()) {
          this.i++;
        }
        return this.getCodePoint();
      };
      TexParser2.prototype.GetCS = function() {
        var CS = this.string.slice(this.i).match(/^(([a-z]+) ?|[\uD800-\uDBFF].|.)/i);
        if (CS) {
          this.i += CS[0].length;
          return CS[2] || CS[1];
        } else {
          this.i++;
          return " ";
        }
      };
      TexParser2.prototype.GetArgument = function(_name, noneOK) {
        switch (this.GetNext()) {
          case "":
            if (!noneOK) {
              throw new TexError_js_1.default("MissingArgFor", "Missing argument for %1", this.currentCS);
            }
            return null;
          case "}":
            if (!noneOK) {
              throw new TexError_js_1.default("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
            }
            return null;
          case "\\":
            this.i++;
            return "\\" + this.GetCS();
          case "{":
            var j = ++this.i, parens = 1;
            while (this.i < this.string.length) {
              switch (this.string.charAt(this.i++)) {
                case "\\":
                  this.i++;
                  break;
                case "{":
                  parens++;
                  break;
                case "}":
                  if (--parens === 0) {
                    return this.string.slice(j, this.i - 1);
                  }
                  break;
              }
            }
            throw new TexError_js_1.default("MissingCloseBrace", "Missing close brace");
        }
        var c = this.getCodePoint();
        this.i += c.length;
        return c;
      };
      TexParser2.prototype.GetBrackets = function(_name, def) {
        if (this.GetNext() !== "[") {
          return def;
        }
        var j = ++this.i, parens = 0;
        while (this.i < this.string.length) {
          switch (this.string.charAt(this.i++)) {
            case "{":
              parens++;
              break;
            case "\\":
              this.i++;
              break;
            case "}":
              if (parens-- <= 0) {
                throw new TexError_js_1.default("ExtraCloseLooking", "Extra close brace while looking for %1", "']'");
              }
              break;
            case "]":
              if (parens === 0) {
                return this.string.slice(j, this.i - 1);
              }
              break;
          }
        }
        throw new TexError_js_1.default("MissingCloseBracket", "Could not find closing ']' for argument to %1", this.currentCS);
      };
      TexParser2.prototype.GetDelimiter = function(name, braceOK) {
        var c = this.GetNext();
        this.i += c.length;
        if (this.i <= this.string.length) {
          if (c === "\\") {
            c += this.GetCS();
          } else if (c === "{" && braceOK) {
            this.i--;
            c = this.GetArgument(name).trim();
          }
          if (this.contains("delimiter", c)) {
            return this.convertDelimiter(c);
          }
        }
        throw new TexError_js_1.default("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS);
      };
      TexParser2.prototype.GetDimen = function(name) {
        if (this.GetNext() === "{") {
          var dimen = this.GetArgument(name);
          var _a = __read(ParseUtil_js_1.default.matchDimen(dimen), 2), value = _a[0], unit = _a[1];
          if (value) {
            return value + unit;
          }
        } else {
          var dimen = this.string.slice(this.i);
          var _b = __read(ParseUtil_js_1.default.matchDimen(dimen, true), 3), value = _b[0], unit = _b[1], length_1 = _b[2];
          if (value) {
            this.i += length_1;
            return value + unit;
          }
        }
        throw new TexError_js_1.default("MissingDimOrUnits", "Missing dimension or its units for %1", this.currentCS);
      };
      TexParser2.prototype.GetUpTo = function(_name, token) {
        while (this.nextIsSpace()) {
          this.i++;
        }
        var j = this.i;
        var parens = 0;
        while (this.i < this.string.length) {
          var k = this.i;
          var c = this.GetNext();
          this.i += c.length;
          switch (c) {
            case "\\":
              c += this.GetCS();
              break;
            case "{":
              parens++;
              break;
            case "}":
              if (parens === 0) {
                throw new TexError_js_1.default("ExtraCloseLooking", "Extra close brace while looking for %1", token);
              }
              parens--;
              break;
          }
          if (parens === 0 && c === token) {
            return this.string.slice(j, k);
          }
        }
        throw new TexError_js_1.default("TokenNotFoundForCommand", "Could not find %1 for %2", token, this.currentCS);
      };
      TexParser2.prototype.ParseArg = function(name) {
        return new TexParser2(this.GetArgument(name), this.stack.env, this.configuration).mml();
      };
      TexParser2.prototype.ParseUpTo = function(name, token) {
        return new TexParser2(this.GetUpTo(name, token), this.stack.env, this.configuration).mml();
      };
      TexParser2.prototype.GetDelimiterArg = function(name) {
        var c = ParseUtil_js_1.default.trimSpaces(this.GetArgument(name));
        if (c === "") {
          return null;
        }
        if (this.contains("delimiter", c)) {
          return c;
        }
        throw new TexError_js_1.default("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS);
      };
      TexParser2.prototype.GetStar = function() {
        var star = this.GetNext() === "*";
        if (star) {
          this.i++;
        }
        return star;
      };
      TexParser2.prototype.create = function(kind) {
        var _a;
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          rest[_i - 1] = arguments[_i];
        }
        return (_a = this.configuration.nodeFactory).create.apply(_a, __spreadArray([kind], __read(rest), false));
      };
      return TexParser2;
    }();
    exports.default = TexParser;
  }
});

// node_modules/mathjax-full/js/input/tex/StackItem.js
var require_StackItem = __commonJS({
  "node_modules/mathjax-full/js/input/tex/StackItem.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseItem = exports.MmlStack = void 0;
    var TexError_js_1 = __importDefault(require_TexError());
    var MmlStack = function() {
      function MmlStack2(_nodes) {
        this._nodes = _nodes;
      }
      Object.defineProperty(MmlStack2.prototype, "nodes", {
        get: function() {
          return this._nodes;
        },
        enumerable: false,
        configurable: true
      });
      MmlStack2.prototype.Push = function() {
        var _a;
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          nodes[_i] = arguments[_i];
        }
        (_a = this._nodes).push.apply(_a, __spreadArray([], __read(nodes), false));
      };
      MmlStack2.prototype.Pop = function() {
        return this._nodes.pop();
      };
      Object.defineProperty(MmlStack2.prototype, "First", {
        get: function() {
          return this._nodes[this.Size() - 1];
        },
        set: function(node) {
          this._nodes[this.Size() - 1] = node;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlStack2.prototype, "Last", {
        get: function() {
          return this._nodes[0];
        },
        set: function(node) {
          this._nodes[0] = node;
        },
        enumerable: false,
        configurable: true
      });
      MmlStack2.prototype.Peek = function(n) {
        if (n == null) {
          n = 1;
        }
        return this._nodes.slice(this.Size() - n);
      };
      MmlStack2.prototype.Size = function() {
        return this._nodes.length;
      };
      MmlStack2.prototype.Clear = function() {
        this._nodes = [];
      };
      MmlStack2.prototype.toMml = function(inferred, forceRow) {
        if (inferred === void 0) {
          inferred = true;
        }
        if (this._nodes.length === 1 && !forceRow) {
          return this.First;
        }
        return this.create("node", inferred ? "inferredMrow" : "mrow", this._nodes, {});
      };
      MmlStack2.prototype.create = function(kind) {
        var _a;
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          rest[_i - 1] = arguments[_i];
        }
        return (_a = this.factory.configuration.nodeFactory).create.apply(_a, __spreadArray([kind], __read(rest), false));
      };
      return MmlStack2;
    }();
    exports.MmlStack = MmlStack;
    var BaseItem = function(_super) {
      __extends(BaseItem2, _super);
      function BaseItem2(factory) {
        var nodes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          nodes[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, nodes) || this;
        _this.factory = factory;
        _this.global = {};
        _this._properties = {};
        if (_this.isOpen) {
          _this._env = {};
        }
        return _this;
      }
      Object.defineProperty(BaseItem2.prototype, "kind", {
        get: function() {
          return "base";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(BaseItem2.prototype, "env", {
        get: function() {
          return this._env;
        },
        set: function(value) {
          this._env = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(BaseItem2.prototype, "copyEnv", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      BaseItem2.prototype.getProperty = function(key) {
        return this._properties[key];
      };
      BaseItem2.prototype.setProperty = function(key, value) {
        this._properties[key] = value;
        return this;
      };
      Object.defineProperty(BaseItem2.prototype, "isOpen", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(BaseItem2.prototype, "isClose", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(BaseItem2.prototype, "isFinal", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      BaseItem2.prototype.isKind = function(kind) {
        return kind === this.kind;
      };
      BaseItem2.prototype.checkItem = function(item) {
        if (item.isKind("over") && this.isOpen) {
          item.setProperty("num", this.toMml(false));
          this.Clear();
        }
        if (item.isKind("cell") && this.isOpen) {
          if (item.getProperty("linebreak")) {
            return BaseItem2.fail;
          }
          throw new TexError_js_1.default("Misplaced", "Misplaced %1", item.getName());
        }
        if (item.isClose && this.getErrors(item.kind)) {
          var _a = __read(this.getErrors(item.kind), 2), id = _a[0], message = _a[1];
          throw new TexError_js_1.default(id, message, item.getName());
        }
        if (!item.isFinal) {
          return BaseItem2.success;
        }
        this.Push(item.First);
        return BaseItem2.fail;
      };
      BaseItem2.prototype.clearEnv = function() {
        var e_1, _a;
        try {
          for (var _b = __values(Object.keys(this.env)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var id = _c.value;
            delete this.env[id];
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
      BaseItem2.prototype.setProperties = function(def) {
        Object.assign(this._properties, def);
        return this;
      };
      BaseItem2.prototype.getName = function() {
        return this.getProperty("name");
      };
      BaseItem2.prototype.toString = function() {
        return this.kind + "[" + this.nodes.join("; ") + "]";
      };
      BaseItem2.prototype.getErrors = function(kind) {
        var CLASS = this.constructor;
        return (CLASS.errors || {})[kind] || BaseItem2.errors[kind];
      };
      BaseItem2.fail = [null, false];
      BaseItem2.success = [null, true];
      BaseItem2.errors = {
        end: ["MissingBeginExtraEnd", "Missing \\begin{%1} or extra \\end{%1}"],
        close: ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"],
        right: ["MissingLeftExtraRight", "Missing \\left or extra \\right"],
        middle: ["ExtraMiddle", "Extra \\middle"]
      };
      return BaseItem2;
    }(MmlStack);
    exports.BaseItem = BaseItem;
  }
});

// node_modules/mathjax-full/js/input/tex/StackItemFactory.js
var require_StackItemFactory = __commonJS({
  "node_modules/mathjax-full/js/input/tex/StackItemFactory.js"(exports) {
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
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    var StackItem_js_1 = require_StackItem();
    var Factory_js_1 = require_Factory();
    var DummyItem = function(_super) {
      __extends(DummyItem2, _super);
      function DummyItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      return DummyItem2;
    }(StackItem_js_1.BaseItem);
    var StackItemFactory = function(_super) {
      __extends(StackItemFactory2, _super);
      function StackItemFactory2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultKind = "dummy";
        _this.configuration = null;
        return _this;
      }
      StackItemFactory2.DefaultStackItems = (_a = {}, _a[DummyItem.prototype.kind] = DummyItem, _a);
      return StackItemFactory2;
    }(Factory_js_1.AbstractFactory);
    exports.default = StackItemFactory;
  }
});

// node_modules/mathjax-full/js/input/tex/NodeFactory.js
var require_NodeFactory = __commonJS({
  "node_modules/mathjax-full/js/input/tex/NodeFactory.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeFactory = void 0;
    var NodeUtil_js_1 = __importDefault(require_NodeUtil());
    var NodeFactory = function() {
      function NodeFactory2() {
        this.mmlFactory = null;
        this.factory = {
          "node": NodeFactory2.createNode,
          "token": NodeFactory2.createToken,
          "text": NodeFactory2.createText,
          "error": NodeFactory2.createError
        };
      }
      NodeFactory2.createNode = function(factory, kind, children, def, text) {
        if (children === void 0) {
          children = [];
        }
        if (def === void 0) {
          def = {};
        }
        var node = factory.mmlFactory.create(kind);
        node.setChildren(children);
        if (text) {
          node.appendChild(text);
        }
        NodeUtil_js_1.default.setProperties(node, def);
        return node;
      };
      NodeFactory2.createToken = function(factory, kind, def, text) {
        if (def === void 0) {
          def = {};
        }
        if (text === void 0) {
          text = "";
        }
        var textNode = factory.create("text", text);
        return factory.create("node", kind, [], def, textNode);
      };
      NodeFactory2.createText = function(factory, text) {
        if (text == null) {
          return null;
        }
        return factory.mmlFactory.create("text").setText(text);
      };
      NodeFactory2.createError = function(factory, message) {
        var text = factory.create("text", message);
        var mtext = factory.create("node", "mtext", [], {}, text);
        var error = factory.create("node", "merror", [mtext], { "data-mjx-error": message });
        return error;
      };
      NodeFactory2.prototype.setMmlFactory = function(mmlFactory) {
        this.mmlFactory = mmlFactory;
      };
      NodeFactory2.prototype.set = function(kind, func) {
        this.factory[kind] = func;
      };
      NodeFactory2.prototype.setCreators = function(maps) {
        for (var kind in maps) {
          this.set(kind, maps[kind]);
        }
      };
      NodeFactory2.prototype.create = function(kind) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          rest[_i - 1] = arguments[_i];
        }
        var func = this.factory[kind] || this.factory["node"];
        var node = func.apply(void 0, __spreadArray([this, rest[0]], __read(rest.slice(1)), false));
        if (kind === "node") {
          this.configuration.addNode(rest[0], node);
        }
        return node;
      };
      NodeFactory2.prototype.get = function(kind) {
        return this.factory[kind];
      };
      return NodeFactory2;
    }();
    exports.NodeFactory = NodeFactory;
  }
});

// node_modules/mathjax-full/js/input/tex/ParseOptions.js
var require_ParseOptions = __commonJS({
  "node_modules/mathjax-full/js/input/tex/ParseOptions.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var StackItemFactory_js_1 = __importDefault(require_StackItemFactory());
    var NodeFactory_js_1 = require_NodeFactory();
    var NodeUtil_js_1 = __importDefault(require_NodeUtil());
    var Options_js_1 = require_Options();
    var ParseOptions = function() {
      function ParseOptions2(configuration, options) {
        if (options === void 0) {
          options = [];
        }
        this.options = {};
        this.packageData = /* @__PURE__ */ new Map();
        this.parsers = [];
        this.root = null;
        this.nodeLists = {};
        this.error = false;
        this.handlers = configuration.handlers;
        this.nodeFactory = new NodeFactory_js_1.NodeFactory();
        this.nodeFactory.configuration = this;
        this.nodeFactory.setCreators(configuration.nodes);
        this.itemFactory = new StackItemFactory_js_1.default(configuration.items);
        this.itemFactory.configuration = this;
        Options_js_1.defaultOptions.apply(void 0, __spreadArray([this.options], __read(options), false));
        (0, Options_js_1.defaultOptions)(this.options, configuration.options);
      }
      ParseOptions2.prototype.pushParser = function(parser) {
        this.parsers.unshift(parser);
      };
      ParseOptions2.prototype.popParser = function() {
        this.parsers.shift();
      };
      Object.defineProperty(ParseOptions2.prototype, "parser", {
        get: function() {
          return this.parsers[0];
        },
        enumerable: false,
        configurable: true
      });
      ParseOptions2.prototype.clear = function() {
        this.parsers = [];
        this.root = null;
        this.nodeLists = {};
        this.error = false;
        this.tags.resetTag();
      };
      ParseOptions2.prototype.addNode = function(property, node) {
        var list = this.nodeLists[property];
        if (!list) {
          list = this.nodeLists[property] = [];
        }
        list.push(node);
        if (node.kind !== property) {
          var inlists = NodeUtil_js_1.default.getProperty(node, "in-lists") || "";
          var lists = (inlists ? inlists.split(/,/) : []).concat(property).join(",");
          NodeUtil_js_1.default.setProperty(node, "in-lists", lists);
        }
      };
      ParseOptions2.prototype.getList = function(property) {
        var e_1, _a;
        var list = this.nodeLists[property] || [];
        var result = [];
        try {
          for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
            var node = list_1_1.value;
            if (this.inTree(node)) {
              result.push(node);
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        this.nodeLists[property] = result;
        return result;
      };
      ParseOptions2.prototype.removeFromList = function(property, nodes) {
        var e_2, _a;
        var list = this.nodeLists[property] || [];
        try {
          for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
            var node = nodes_1_1.value;
            var i = list.indexOf(node);
            if (i >= 0) {
              list.splice(i, 1);
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      };
      ParseOptions2.prototype.inTree = function(node) {
        while (node && node !== this.root) {
          node = node.parent;
        }
        return !!node;
      };
      return ParseOptions2;
    }();
    exports.default = ParseOptions;
  }
});

// node_modules/mathjax-full/js/input/tex/Tags.js
var require_Tags = __commonJS({
  "node_modules/mathjax-full/js/input/tex/Tags.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TagsFactory = exports.AllTags = exports.NoTags = exports.AbstractTags = exports.TagInfo = exports.Label = void 0;
    var TexParser_js_1 = __importDefault(require_TexParser());
    var Label = /* @__PURE__ */ function() {
      function Label2(tag, id) {
        if (tag === void 0) {
          tag = "???";
        }
        if (id === void 0) {
          id = "";
        }
        this.tag = tag;
        this.id = id;
      }
      return Label2;
    }();
    exports.Label = Label;
    var TagInfo = /* @__PURE__ */ function() {
      function TagInfo2(env, taggable, defaultTags, tag, tagId, tagFormat, noTag, labelId) {
        if (env === void 0) {
          env = "";
        }
        if (taggable === void 0) {
          taggable = false;
        }
        if (defaultTags === void 0) {
          defaultTags = false;
        }
        if (tag === void 0) {
          tag = null;
        }
        if (tagId === void 0) {
          tagId = "";
        }
        if (tagFormat === void 0) {
          tagFormat = "";
        }
        if (noTag === void 0) {
          noTag = false;
        }
        if (labelId === void 0) {
          labelId = "";
        }
        this.env = env;
        this.taggable = taggable;
        this.defaultTags = defaultTags;
        this.tag = tag;
        this.tagId = tagId;
        this.tagFormat = tagFormat;
        this.noTag = noTag;
        this.labelId = labelId;
      }
      return TagInfo2;
    }();
    exports.TagInfo = TagInfo;
    var AbstractTags = function() {
      function AbstractTags2() {
        this.counter = 0;
        this.allCounter = 0;
        this.configuration = null;
        this.ids = {};
        this.allIds = {};
        this.labels = {};
        this.allLabels = {};
        this.redo = false;
        this.refUpdate = false;
        this.currentTag = new TagInfo();
        this.history = [];
        this.stack = [];
        this.enTag = function(node, tag) {
          var nf = this.configuration.nodeFactory;
          var cell = nf.create("node", "mtd", [node]);
          var row = nf.create("node", "mlabeledtr", [tag, cell]);
          var table = nf.create("node", "mtable", [row], {
            side: this.configuration.options["tagSide"],
            minlabelspacing: this.configuration.options["tagIndent"],
            displaystyle: true
          });
          return table;
        };
      }
      AbstractTags2.prototype.start = function(env, taggable, defaultTags) {
        if (this.currentTag) {
          this.stack.push(this.currentTag);
        }
        this.currentTag = new TagInfo(env, taggable, defaultTags);
      };
      Object.defineProperty(AbstractTags2.prototype, "env", {
        get: function() {
          return this.currentTag.env;
        },
        enumerable: false,
        configurable: true
      });
      AbstractTags2.prototype.end = function() {
        this.history.push(this.currentTag);
        this.currentTag = this.stack.pop();
      };
      AbstractTags2.prototype.tag = function(tag, noFormat) {
        this.currentTag.tag = tag;
        this.currentTag.tagFormat = noFormat ? tag : this.formatTag(tag);
        this.currentTag.noTag = false;
      };
      AbstractTags2.prototype.notag = function() {
        this.tag("", true);
        this.currentTag.noTag = true;
      };
      Object.defineProperty(AbstractTags2.prototype, "noTag", {
        get: function() {
          return this.currentTag.noTag;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AbstractTags2.prototype, "label", {
        get: function() {
          return this.currentTag.labelId;
        },
        set: function(label) {
          this.currentTag.labelId = label;
        },
        enumerable: false,
        configurable: true
      });
      AbstractTags2.prototype.formatUrl = function(id, base) {
        return base + "#" + encodeURIComponent(id);
      };
      AbstractTags2.prototype.formatTag = function(tag) {
        return "(" + tag + ")";
      };
      AbstractTags2.prototype.formatId = function(id) {
        return "mjx-eqn:" + id.replace(/\s/g, "_");
      };
      AbstractTags2.prototype.formatNumber = function(n) {
        return n.toString();
      };
      AbstractTags2.prototype.autoTag = function() {
        if (this.currentTag.tag == null) {
          this.counter++;
          this.tag(this.formatNumber(this.counter), false);
        }
      };
      AbstractTags2.prototype.clearTag = function() {
        this.label = "";
        this.tag(null, true);
        this.currentTag.tagId = "";
      };
      AbstractTags2.prototype.getTag = function(force) {
        if (force === void 0) {
          force = false;
        }
        if (force) {
          this.autoTag();
          return this.makeTag();
        }
        var ct = this.currentTag;
        if (ct.taggable && !ct.noTag) {
          if (ct.defaultTags) {
            this.autoTag();
          }
          if (ct.tag) {
            return this.makeTag();
          }
        }
        return null;
      };
      AbstractTags2.prototype.resetTag = function() {
        this.history = [];
        this.redo = false;
        this.refUpdate = false;
        this.clearTag();
      };
      AbstractTags2.prototype.reset = function(offset) {
        if (offset === void 0) {
          offset = 0;
        }
        this.resetTag();
        this.counter = this.allCounter = offset;
        this.allLabels = {};
        this.allIds = {};
      };
      AbstractTags2.prototype.startEquation = function(math) {
        this.history = [];
        this.stack = [];
        this.clearTag();
        this.currentTag = new TagInfo("", void 0, void 0);
        this.labels = {};
        this.ids = {};
        this.counter = this.allCounter;
        this.redo = false;
        var recompile = math.inputData.recompile;
        if (recompile) {
          this.refUpdate = true;
          this.counter = recompile.counter;
        }
      };
      AbstractTags2.prototype.finishEquation = function(math) {
        if (this.redo) {
          math.inputData.recompile = {
            state: math.state(),
            counter: this.allCounter
          };
        }
        if (!this.refUpdate) {
          this.allCounter = this.counter;
        }
        Object.assign(this.allIds, this.ids);
        Object.assign(this.allLabels, this.labels);
      };
      AbstractTags2.prototype.finalize = function(node, env) {
        if (!env.display || this.currentTag.env || this.currentTag.tag == null) {
          return node;
        }
        var tag = this.makeTag();
        var table = this.enTag(node, tag);
        return table;
      };
      AbstractTags2.prototype.makeId = function() {
        this.currentTag.tagId = this.formatId(this.configuration.options["useLabelIds"] ? this.label || this.currentTag.tag : this.currentTag.tag);
      };
      AbstractTags2.prototype.makeTag = function() {
        this.makeId();
        if (this.label) {
          this.labels[this.label] = new Label(this.currentTag.tag, this.currentTag.tagId);
        }
        var mml = new TexParser_js_1.default("\\text{" + this.currentTag.tagFormat + "}", {}, this.configuration).mml();
        return this.configuration.nodeFactory.create("node", "mtd", [mml], { id: this.currentTag.tagId });
      };
      return AbstractTags2;
    }();
    exports.AbstractTags = AbstractTags;
    var NoTags = function(_super) {
      __extends(NoTags2, _super);
      function NoTags2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      NoTags2.prototype.autoTag = function() {
      };
      NoTags2.prototype.getTag = function() {
        return !this.currentTag.tag ? null : _super.prototype.getTag.call(this);
      };
      return NoTags2;
    }(AbstractTags);
    exports.NoTags = NoTags;
    var AllTags = function(_super) {
      __extends(AllTags2, _super);
      function AllTags2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AllTags2.prototype.finalize = function(node, env) {
        if (!env.display || this.history.find(function(x) {
          return x.taggable;
        })) {
          return node;
        }
        var tag = this.getTag(true);
        return this.enTag(node, tag);
      };
      return AllTags2;
    }(AbstractTags);
    exports.AllTags = AllTags;
    var TagsFactory;
    (function(TagsFactory2) {
      var tagsMapping = /* @__PURE__ */ new Map([
        ["none", NoTags],
        ["all", AllTags]
      ]);
      var defaultTags = "none";
      TagsFactory2.OPTIONS = {
        tags: defaultTags,
        tagSide: "right",
        tagIndent: "0.8em",
        useLabelIds: true,
        ignoreDuplicateLabels: false
      };
      TagsFactory2.add = function(name, constr) {
        tagsMapping.set(name, constr);
      };
      TagsFactory2.addTags = function(tags) {
        var e_1, _a;
        try {
          for (var _b = __values(Object.keys(tags)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            TagsFactory2.add(key, tags[key]);
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
      TagsFactory2.create = function(name) {
        var constr = tagsMapping.get(name) || tagsMapping.get(defaultTags);
        if (!constr) {
          throw Error("Unknown tags class");
        }
        return new constr();
      };
      TagsFactory2.setDefault = function(name) {
        defaultTags = name;
      };
      TagsFactory2.getDefault = function() {
        return TagsFactory2.create(defaultTags);
      };
    })(TagsFactory = exports.TagsFactory || (exports.TagsFactory = {}));
  }
});

// node_modules/mathjax-full/js/input/tex/MapHandler.js
var require_MapHandler = __commonJS({
  "node_modules/mathjax-full/js/input/tex/MapHandler.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubHandlers = exports.SubHandler = exports.MapHandler = void 0;
    var PrioritizedList_js_1 = require_PrioritizedList();
    var FunctionList_js_1 = require_FunctionList();
    var MapHandler;
    (function(MapHandler2) {
      var maps = /* @__PURE__ */ new Map();
      MapHandler2.register = function(map) {
        maps.set(map.name, map);
      };
      MapHandler2.getMap = function(name) {
        return maps.get(name);
      };
    })(MapHandler = exports.MapHandler || (exports.MapHandler = {}));
    var SubHandler = function() {
      function SubHandler2() {
        this._configuration = new PrioritizedList_js_1.PrioritizedList();
        this._fallback = new FunctionList_js_1.FunctionList();
      }
      SubHandler2.prototype.add = function(maps, fallback, priority) {
        var e_1, _a;
        if (priority === void 0) {
          priority = PrioritizedList_js_1.PrioritizedList.DEFAULTPRIORITY;
        }
        try {
          for (var _b = __values(maps.slice().reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var name_1 = _c.value;
            var map = MapHandler.getMap(name_1);
            if (!map) {
              this.warn("Configuration " + name_1 + " not found! Omitted.");
              return;
            }
            this._configuration.add(map, priority);
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
        if (fallback) {
          this._fallback.add(fallback, priority);
        }
      };
      SubHandler2.prototype.parse = function(input) {
        var e_2, _a;
        try {
          for (var _b = __values(this._configuration), _c = _b.next(); !_c.done; _c = _b.next()) {
            var map = _c.value.item;
            var result = map.parse(input);
            if (result) {
              return result;
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
        var _d = __read(input, 2), env = _d[0], symbol = _d[1];
        Array.from(this._fallback)[0].item(env, symbol);
      };
      SubHandler2.prototype.lookup = function(symbol) {
        var map = this.applicable(symbol);
        return map ? map.lookup(symbol) : null;
      };
      SubHandler2.prototype.contains = function(symbol) {
        return this.applicable(symbol) ? true : false;
      };
      SubHandler2.prototype.toString = function() {
        var e_3, _a;
        var names = [];
        try {
          for (var _b = __values(this._configuration), _c = _b.next(); !_c.done; _c = _b.next()) {
            var map = _c.value.item;
            names.push(map.name);
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
        return names.join(", ");
      };
      SubHandler2.prototype.applicable = function(symbol) {
        var e_4, _a;
        try {
          for (var _b = __values(this._configuration), _c = _b.next(); !_c.done; _c = _b.next()) {
            var map = _c.value.item;
            if (map.contains(symbol)) {
              return map;
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
      SubHandler2.prototype.retrieve = function(name) {
        var e_5, _a;
        try {
          for (var _b = __values(this._configuration), _c = _b.next(); !_c.done; _c = _b.next()) {
            var map = _c.value.item;
            if (map.name === name) {
              return map;
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
        return null;
      };
      SubHandler2.prototype.warn = function(message) {
        console.log("TexParser Warning: " + message);
      };
      return SubHandler2;
    }();
    exports.SubHandler = SubHandler;
    var SubHandlers = function() {
      function SubHandlers2() {
        this.map = /* @__PURE__ */ new Map();
      }
      SubHandlers2.prototype.add = function(handlers, fallbacks, priority) {
        var e_6, _a;
        if (priority === void 0) {
          priority = PrioritizedList_js_1.PrioritizedList.DEFAULTPRIORITY;
        }
        try {
          for (var _b = __values(Object.keys(handlers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var name_2 = key;
            var subHandler = this.get(name_2);
            if (!subHandler) {
              subHandler = new SubHandler();
              this.set(name_2, subHandler);
            }
            subHandler.add(handlers[name_2], fallbacks[name_2], priority);
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
      SubHandlers2.prototype.set = function(name, subHandler) {
        this.map.set(name, subHandler);
      };
      SubHandlers2.prototype.get = function(name) {
        return this.map.get(name);
      };
      SubHandlers2.prototype.retrieve = function(name) {
        var e_7, _a;
        try {
          for (var _b = __values(this.map.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var handler = _c.value;
            var map = handler.retrieve(name);
            if (map) {
              return map;
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
        return null;
      };
      SubHandlers2.prototype.keys = function() {
        return this.map.keys();
      };
      return SubHandlers2;
    }();
    exports.SubHandlers = SubHandlers;
  }
});

// node_modules/mathjax-full/js/input/tex/Configuration.js
var require_Configuration = __commonJS({
  "node_modules/mathjax-full/js/input/tex/Configuration.js"(exports) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParserConfiguration = exports.ConfigurationHandler = exports.Configuration = void 0;
    var Options_js_1 = require_Options();
    var MapHandler_js_1 = require_MapHandler();
    var FunctionList_js_1 = require_FunctionList();
    var PrioritizedList_js_1 = require_PrioritizedList();
    var Tags_js_1 = require_Tags();
    var Configuration = function() {
      function Configuration2(name, handler, fallback, items, tags, options, nodes, preprocessors, postprocessors, initMethod, configMethod, priority, parser) {
        if (handler === void 0) {
          handler = {};
        }
        if (fallback === void 0) {
          fallback = {};
        }
        if (items === void 0) {
          items = {};
        }
        if (tags === void 0) {
          tags = {};
        }
        if (options === void 0) {
          options = {};
        }
        if (nodes === void 0) {
          nodes = {};
        }
        if (preprocessors === void 0) {
          preprocessors = [];
        }
        if (postprocessors === void 0) {
          postprocessors = [];
        }
        if (initMethod === void 0) {
          initMethod = null;
        }
        if (configMethod === void 0) {
          configMethod = null;
        }
        this.name = name;
        this.handler = handler;
        this.fallback = fallback;
        this.items = items;
        this.tags = tags;
        this.options = options;
        this.nodes = nodes;
        this.preprocessors = preprocessors;
        this.postprocessors = postprocessors;
        this.initMethod = initMethod;
        this.configMethod = configMethod;
        this.priority = priority;
        this.parser = parser;
        this.handler = Object.assign({ character: [], delimiter: [], macro: [], environment: [] }, handler);
      }
      Configuration2.makeProcessor = function(func, priority) {
        return Array.isArray(func) ? func : [func, priority];
      };
      Configuration2._create = function(name, config) {
        var _this = this;
        if (config === void 0) {
          config = {};
        }
        var priority = config.priority || PrioritizedList_js_1.PrioritizedList.DEFAULTPRIORITY;
        var init = config.init ? this.makeProcessor(config.init, priority) : null;
        var conf = config.config ? this.makeProcessor(config.config, priority) : null;
        var preprocessors = (config.preprocessors || []).map(function(pre) {
          return _this.makeProcessor(pre, priority);
        });
        var postprocessors = (config.postprocessors || []).map(function(post) {
          return _this.makeProcessor(post, priority);
        });
        var parser = config.parser || "tex";
        return new Configuration2(name, config.handler || {}, config.fallback || {}, config.items || {}, config.tags || {}, config.options || {}, config.nodes || {}, preprocessors, postprocessors, init, conf, priority, parser);
      };
      Configuration2.create = function(name, config) {
        if (config === void 0) {
          config = {};
        }
        var configuration = Configuration2._create(name, config);
        ConfigurationHandler.set(name, configuration);
        return configuration;
      };
      Configuration2.local = function(config) {
        if (config === void 0) {
          config = {};
        }
        return Configuration2._create("", config);
      };
      Object.defineProperty(Configuration2.prototype, "init", {
        get: function() {
          return this.initMethod ? this.initMethod[0] : null;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Configuration2.prototype, "config", {
        get: function() {
          return this.configMethod ? this.configMethod[0] : null;
        },
        enumerable: false,
        configurable: true
      });
      return Configuration2;
    }();
    exports.Configuration = Configuration;
    var ConfigurationHandler;
    (function(ConfigurationHandler2) {
      var maps = /* @__PURE__ */ new Map();
      ConfigurationHandler2.set = function(name, map) {
        maps.set(name, map);
      };
      ConfigurationHandler2.get = function(name) {
        return maps.get(name);
      };
      ConfigurationHandler2.keys = function() {
        return maps.keys();
      };
    })(ConfigurationHandler = exports.ConfigurationHandler || (exports.ConfigurationHandler = {}));
    var ParserConfiguration = function() {
      function ParserConfiguration2(packages, parsers) {
        var e_1, _a, e_2, _b;
        if (parsers === void 0) {
          parsers = ["tex"];
        }
        this.initMethod = new FunctionList_js_1.FunctionList();
        this.configMethod = new FunctionList_js_1.FunctionList();
        this.configurations = new PrioritizedList_js_1.PrioritizedList();
        this.parsers = [];
        this.handlers = new MapHandler_js_1.SubHandlers();
        this.items = {};
        this.tags = {};
        this.options = {};
        this.nodes = {};
        this.parsers = parsers;
        try {
          for (var _c = __values(packages.slice().reverse()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var pkg = _d.value;
            this.addPackage(pkg);
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
        try {
          for (var _e = __values(this.configurations), _f = _e.next(); !_f.done; _f = _e.next()) {
            var _g = _f.value, config = _g.item, priority = _g.priority;
            this.append(config, priority);
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
      }
      ParserConfiguration2.prototype.init = function() {
        this.initMethod.execute(this);
      };
      ParserConfiguration2.prototype.config = function(jax) {
        var e_3, _a;
        this.configMethod.execute(this, jax);
        try {
          for (var _b = __values(this.configurations), _c = _b.next(); !_c.done; _c = _b.next()) {
            var config = _c.value;
            this.addFilters(jax, config.item);
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
      };
      ParserConfiguration2.prototype.addPackage = function(pkg) {
        var name = typeof pkg === "string" ? pkg : pkg[0];
        var conf = this.getPackage(name);
        conf && this.configurations.add(conf, typeof pkg === "string" ? conf.priority : pkg[1]);
      };
      ParserConfiguration2.prototype.add = function(name, jax, options) {
        var e_4, _a;
        if (options === void 0) {
          options = {};
        }
        var config = this.getPackage(name);
        this.append(config);
        this.configurations.add(config, config.priority);
        this.init();
        var parser = jax.parseOptions;
        parser.nodeFactory.setCreators(config.nodes);
        try {
          for (var _b = __values(Object.keys(config.items)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var kind = _c.value;
            parser.itemFactory.setNodeClass(kind, config.items[kind]);
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
        Tags_js_1.TagsFactory.addTags(config.tags);
        (0, Options_js_1.defaultOptions)(parser.options, config.options);
        (0, Options_js_1.userOptions)(parser.options, options);
        this.addFilters(jax, config);
        if (config.config) {
          config.config(this, jax);
        }
      };
      ParserConfiguration2.prototype.getPackage = function(name) {
        var config = ConfigurationHandler.get(name);
        if (config && this.parsers.indexOf(config.parser) < 0) {
          throw Error("Package ".concat(name, " doesn't target the proper parser"));
        }
        return config;
      };
      ParserConfiguration2.prototype.append = function(config, priority) {
        priority = priority || config.priority;
        if (config.initMethod) {
          this.initMethod.add(config.initMethod[0], config.initMethod[1]);
        }
        if (config.configMethod) {
          this.configMethod.add(config.configMethod[0], config.configMethod[1]);
        }
        this.handlers.add(config.handler, config.fallback, priority);
        Object.assign(this.items, config.items);
        Object.assign(this.tags, config.tags);
        (0, Options_js_1.defaultOptions)(this.options, config.options);
        Object.assign(this.nodes, config.nodes);
      };
      ParserConfiguration2.prototype.addFilters = function(jax, config) {
        var e_5, _a, e_6, _b;
        try {
          for (var _c = __values(config.preprocessors), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 2), pre = _e[0], priority = _e[1];
            jax.preFilters.add(pre, priority);
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
          for (var _f = __values(config.postprocessors), _g = _f.next(); !_g.done; _g = _f.next()) {
            var _h = __read(_g.value, 2), post = _h[0], priority = _h[1];
            jax.postFilters.add(post, priority);
          }
        } catch (e_6_1) {
          e_6 = { error: e_6_1 };
        } finally {
          try {
            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
          } finally {
            if (e_6) throw e_6.error;
          }
        }
      };
      return ParserConfiguration2;
    }();
    exports.ParserConfiguration = ParserConfiguration;
  }
});

// node_modules/mathjax-full/js/input/tex/Symbol.js
var require_Symbol = __commonJS({
  "node_modules/mathjax-full/js/input/tex/Symbol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Macro = exports.Symbol = void 0;
    var Symbol2 = function() {
      function Symbol3(_symbol, _char, _attributes) {
        this._symbol = _symbol;
        this._char = _char;
        this._attributes = _attributes;
      }
      Object.defineProperty(Symbol3.prototype, "symbol", {
        get: function() {
          return this._symbol;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Symbol3.prototype, "char", {
        get: function() {
          return this._char;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Symbol3.prototype, "attributes", {
        get: function() {
          return this._attributes;
        },
        enumerable: false,
        configurable: true
      });
      return Symbol3;
    }();
    exports.Symbol = Symbol2;
    var Macro = function() {
      function Macro2(_symbol, _func, _args) {
        if (_args === void 0) {
          _args = [];
        }
        this._symbol = _symbol;
        this._func = _func;
        this._args = _args;
      }
      Object.defineProperty(Macro2.prototype, "symbol", {
        get: function() {
          return this._symbol;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Macro2.prototype, "func", {
        get: function() {
          return this._func;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Macro2.prototype, "args", {
        get: function() {
          return this._args;
        },
        enumerable: false,
        configurable: true
      });
      return Macro2;
    }();
    exports.Macro = Macro;
  }
});

// node_modules/mathjax-full/js/input/tex/SymbolMap.js
var require_SymbolMap = __commonJS({
  "node_modules/mathjax-full/js/input/tex/SymbolMap.js"(exports) {
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
    exports.EnvironmentMap = exports.CommandMap = exports.MacroMap = exports.DelimiterMap = exports.CharacterMap = exports.AbstractParseMap = exports.RegExpMap = exports.AbstractSymbolMap = exports.parseResult = void 0;
    var Symbol_js_1 = require_Symbol();
    var MapHandler_js_1 = require_MapHandler();
    function parseResult(result) {
      return result === void 0 ? true : result;
    }
    exports.parseResult = parseResult;
    var AbstractSymbolMap = function() {
      function AbstractSymbolMap2(_name, _parser) {
        this._name = _name;
        this._parser = _parser;
        MapHandler_js_1.MapHandler.register(this);
      }
      Object.defineProperty(AbstractSymbolMap2.prototype, "name", {
        get: function() {
          return this._name;
        },
        enumerable: false,
        configurable: true
      });
      AbstractSymbolMap2.prototype.parserFor = function(symbol) {
        return this.contains(symbol) ? this.parser : null;
      };
      AbstractSymbolMap2.prototype.parse = function(_a) {
        var _b = __read(_a, 2), env = _b[0], symbol = _b[1];
        var parser = this.parserFor(symbol);
        var mapped = this.lookup(symbol);
        return parser && mapped ? parseResult(parser(env, mapped)) : null;
      };
      Object.defineProperty(AbstractSymbolMap2.prototype, "parser", {
        get: function() {
          return this._parser;
        },
        set: function(parser) {
          this._parser = parser;
        },
        enumerable: false,
        configurable: true
      });
      return AbstractSymbolMap2;
    }();
    exports.AbstractSymbolMap = AbstractSymbolMap;
    var RegExpMap = function(_super) {
      __extends(RegExpMap2, _super);
      function RegExpMap2(name, parser, _regExp) {
        var _this = _super.call(this, name, parser) || this;
        _this._regExp = _regExp;
        return _this;
      }
      RegExpMap2.prototype.contains = function(symbol) {
        return this._regExp.test(symbol);
      };
      RegExpMap2.prototype.lookup = function(symbol) {
        return this.contains(symbol) ? symbol : null;
      };
      return RegExpMap2;
    }(AbstractSymbolMap);
    exports.RegExpMap = RegExpMap;
    var AbstractParseMap = function(_super) {
      __extends(AbstractParseMap2, _super);
      function AbstractParseMap2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map = /* @__PURE__ */ new Map();
        return _this;
      }
      AbstractParseMap2.prototype.lookup = function(symbol) {
        return this.map.get(symbol);
      };
      AbstractParseMap2.prototype.contains = function(symbol) {
        return this.map.has(symbol);
      };
      AbstractParseMap2.prototype.add = function(symbol, object) {
        this.map.set(symbol, object);
      };
      AbstractParseMap2.prototype.remove = function(symbol) {
        this.map.delete(symbol);
      };
      return AbstractParseMap2;
    }(AbstractSymbolMap);
    exports.AbstractParseMap = AbstractParseMap;
    var CharacterMap = function(_super) {
      __extends(CharacterMap2, _super);
      function CharacterMap2(name, parser, json) {
        var e_1, _a;
        var _this = _super.call(this, name, parser) || this;
        try {
          for (var _b = __values(Object.keys(json)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = json[key];
            var _d = __read(typeof value === "string" ? [value, null] : value, 2), char = _d[0], attrs = _d[1];
            var character = new Symbol_js_1.Symbol(key, char, attrs);
            _this.add(key, character);
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
      return CharacterMap2;
    }(AbstractParseMap);
    exports.CharacterMap = CharacterMap;
    var DelimiterMap = function(_super) {
      __extends(DelimiterMap2, _super);
      function DelimiterMap2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      DelimiterMap2.prototype.parse = function(_a) {
        var _b = __read(_a, 2), env = _b[0], symbol = _b[1];
        return _super.prototype.parse.call(this, [env, "\\" + symbol]);
      };
      return DelimiterMap2;
    }(CharacterMap);
    exports.DelimiterMap = DelimiterMap;
    var MacroMap = function(_super) {
      __extends(MacroMap2, _super);
      function MacroMap2(name, json, functionMap) {
        var e_2, _a;
        var _this = _super.call(this, name, null) || this;
        try {
          for (var _b = __values(Object.keys(json)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = json[key];
            var _d = __read(typeof value === "string" ? [value] : value), func = _d[0], attrs = _d.slice(1);
            var character = new Symbol_js_1.Macro(key, functionMap[func], attrs);
            _this.add(key, character);
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
        return _this;
      }
      MacroMap2.prototype.parserFor = function(symbol) {
        var macro = this.lookup(symbol);
        return macro ? macro.func : null;
      };
      MacroMap2.prototype.parse = function(_a) {
        var _b = __read(_a, 2), env = _b[0], symbol = _b[1];
        var macro = this.lookup(symbol);
        var parser = this.parserFor(symbol);
        if (!macro || !parser) {
          return null;
        }
        return parseResult(parser.apply(void 0, __spreadArray([env, macro.symbol], __read(macro.args), false)));
      };
      return MacroMap2;
    }(AbstractParseMap);
    exports.MacroMap = MacroMap;
    var CommandMap = function(_super) {
      __extends(CommandMap2, _super);
      function CommandMap2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      CommandMap2.prototype.parse = function(_a) {
        var _b = __read(_a, 2), env = _b[0], symbol = _b[1];
        var macro = this.lookup(symbol);
        var parser = this.parserFor(symbol);
        if (!macro || !parser) {
          return null;
        }
        var saveCommand = env.currentCS;
        env.currentCS = "\\" + symbol;
        var result = parser.apply(void 0, __spreadArray([env, "\\" + macro.symbol], __read(macro.args), false));
        env.currentCS = saveCommand;
        return parseResult(result);
      };
      return CommandMap2;
    }(MacroMap);
    exports.CommandMap = CommandMap;
    var EnvironmentMap = function(_super) {
      __extends(EnvironmentMap2, _super);
      function EnvironmentMap2(name, parser, json, functionMap) {
        var _this = _super.call(this, name, json, functionMap) || this;
        _this.parser = parser;
        return _this;
      }
      EnvironmentMap2.prototype.parse = function(_a) {
        var _b = __read(_a, 2), env = _b[0], symbol = _b[1];
        var macro = this.lookup(symbol);
        var envParser = this.parserFor(symbol);
        if (!macro || !envParser) {
          return null;
        }
        return parseResult(this.parser(env, macro.symbol, envParser, macro.args));
      };
      return EnvironmentMap2;
    }(MacroMap);
    exports.EnvironmentMap = EnvironmentMap;
  }
});

// node_modules/mathjax-full/js/input/tex/base/BaseItems.js
var require_BaseItems = __commonJS({
  "node_modules/mathjax-full/js/input/tex/base/BaseItems.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EquationItem = exports.EqnArrayItem = exports.ArrayItem = exports.DotsItem = exports.NonscriptItem = exports.NotItem = exports.FnItem = exports.MmlItem = exports.CellItem = exports.PositionItem = exports.StyleItem = exports.EndItem = exports.BeginItem = exports.RightItem = exports.Middle = exports.LeftItem = exports.OverItem = exports.SubsupItem = exports.PrimeItem = exports.CloseItem = exports.OpenItem = exports.StopItem = exports.StartItem = void 0;
    var MapHandler_js_1 = require_MapHandler();
    var Entities_js_1 = require_Entities();
    var MmlNode_js_1 = require_MmlNode();
    var TexError_js_1 = __importDefault(require_TexError());
    var ParseUtil_js_1 = __importDefault(require_ParseUtil());
    var NodeUtil_js_1 = __importDefault(require_NodeUtil());
    var StackItem_js_1 = require_StackItem();
    var StartItem = function(_super) {
      __extends(StartItem2, _super);
      function StartItem2(factory, global) {
        var _this = _super.call(this, factory) || this;
        _this.global = global;
        return _this;
      }
      Object.defineProperty(StartItem2.prototype, "kind", {
        get: function() {
          return "start";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StartItem2.prototype, "isOpen", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      StartItem2.prototype.checkItem = function(item) {
        if (item.isKind("stop")) {
          var node = this.toMml();
          if (!this.global.isInner) {
            node = this.factory.configuration.tags.finalize(node, this.env);
          }
          return [[this.factory.create("mml", node)], true];
        }
        return _super.prototype.checkItem.call(this, item);
      };
      return StartItem2;
    }(StackItem_js_1.BaseItem);
    exports.StartItem = StartItem;
    var StopItem = function(_super) {
      __extends(StopItem2, _super);
      function StopItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(StopItem2.prototype, "kind", {
        get: function() {
          return "stop";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StopItem2.prototype, "isClose", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      return StopItem2;
    }(StackItem_js_1.BaseItem);
    exports.StopItem = StopItem;
    var OpenItem = function(_super) {
      __extends(OpenItem2, _super);
      function OpenItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(OpenItem2.prototype, "kind", {
        get: function() {
          return "open";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(OpenItem2.prototype, "isOpen", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      OpenItem2.prototype.checkItem = function(item) {
        if (item.isKind("close")) {
          var mml = this.toMml();
          var node = this.create("node", "TeXAtom", [mml]);
          return [[this.factory.create("mml", node)], true];
        }
        return _super.prototype.checkItem.call(this, item);
      };
      OpenItem2.errors = Object.assign(Object.create(StackItem_js_1.BaseItem.errors), {
        "stop": [
          "ExtraOpenMissingClose",
          "Extra open brace or missing close brace"
        ]
      });
      return OpenItem2;
    }(StackItem_js_1.BaseItem);
    exports.OpenItem = OpenItem;
    var CloseItem = function(_super) {
      __extends(CloseItem2, _super);
      function CloseItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(CloseItem2.prototype, "kind", {
        get: function() {
          return "close";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(CloseItem2.prototype, "isClose", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      return CloseItem2;
    }(StackItem_js_1.BaseItem);
    exports.CloseItem = CloseItem;
    var PrimeItem = function(_super) {
      __extends(PrimeItem2, _super);
      function PrimeItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(PrimeItem2.prototype, "kind", {
        get: function() {
          return "prime";
        },
        enumerable: false,
        configurable: true
      });
      PrimeItem2.prototype.checkItem = function(item) {
        var _a = __read(this.Peek(2), 2), top0 = _a[0], top1 = _a[1];
        if (!NodeUtil_js_1.default.isType(top0, "msubsup") || NodeUtil_js_1.default.isType(top0, "msup")) {
          var node = this.create("node", "msup", [top0, top1]);
          return [[node, item], true];
        }
        NodeUtil_js_1.default.setChild(top0, top0.sup, top1);
        return [[top0, item], true];
      };
      return PrimeItem2;
    }(StackItem_js_1.BaseItem);
    exports.PrimeItem = PrimeItem;
    var SubsupItem = function(_super) {
      __extends(SubsupItem2, _super);
      function SubsupItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(SubsupItem2.prototype, "kind", {
        get: function() {
          return "subsup";
        },
        enumerable: false,
        configurable: true
      });
      SubsupItem2.prototype.checkItem = function(item) {
        if (item.isKind("open") || item.isKind("left")) {
          return StackItem_js_1.BaseItem.success;
        }
        var top = this.First;
        var position = this.getProperty("position");
        if (item.isKind("mml")) {
          if (this.getProperty("primes")) {
            if (position !== 2) {
              NodeUtil_js_1.default.setChild(top, 2, this.getProperty("primes"));
            } else {
              NodeUtil_js_1.default.setProperty(this.getProperty("primes"), "variantForm", true);
              var node = this.create("node", "mrow", [this.getProperty("primes"), item.First]);
              item.First = node;
            }
          }
          NodeUtil_js_1.default.setChild(top, position, item.First);
          if (this.getProperty("movesupsub") != null) {
            NodeUtil_js_1.default.setProperty(top, "movesupsub", this.getProperty("movesupsub"));
          }
          var result = this.factory.create("mml", top);
          return [[result], true];
        }
        if (_super.prototype.checkItem.call(this, item)[1]) {
          var error = this.getErrors(["", "sub", "sup"][position]);
          throw new (TexError_js_1.default.bind.apply(TexError_js_1.default, __spreadArray([void 0, error[0], error[1]], __read(error.splice(2)), false)))();
        }
        return null;
      };
      SubsupItem2.errors = Object.assign(Object.create(StackItem_js_1.BaseItem.errors), {
        "stop": [
          "MissingScript",
          "Missing superscript or subscript argument"
        ],
        "sup": [
          "MissingOpenForSup",
          "Missing open brace for superscript"
        ],
        "sub": [
          "MissingOpenForSub",
          "Missing open brace for subscript"
        ]
      });
      return SubsupItem2;
    }(StackItem_js_1.BaseItem);
    exports.SubsupItem = SubsupItem;
    var OverItem = function(_super) {
      __extends(OverItem2, _super);
      function OverItem2(factory) {
        var _this = _super.call(this, factory) || this;
        _this.setProperty("name", "\\over");
        return _this;
      }
      Object.defineProperty(OverItem2.prototype, "kind", {
        get: function() {
          return "over";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(OverItem2.prototype, "isClose", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      OverItem2.prototype.checkItem = function(item) {
        if (item.isKind("over")) {
          throw new TexError_js_1.default("AmbiguousUseOf", "Ambiguous use of %1", item.getName());
        }
        if (item.isClose) {
          var mml = this.create("node", "mfrac", [this.getProperty("num"), this.toMml(false)]);
          if (this.getProperty("thickness") != null) {
            NodeUtil_js_1.default.setAttribute(mml, "linethickness", this.getProperty("thickness"));
          }
          if (this.getProperty("open") || this.getProperty("close")) {
            NodeUtil_js_1.default.setProperty(mml, "withDelims", true);
            mml = ParseUtil_js_1.default.fixedFence(this.factory.configuration, this.getProperty("open"), mml, this.getProperty("close"));
          }
          return [[this.factory.create("mml", mml), item], true];
        }
        return _super.prototype.checkItem.call(this, item);
      };
      OverItem2.prototype.toString = function() {
        return "over[" + this.getProperty("num") + " / " + this.nodes.join("; ") + "]";
      };
      return OverItem2;
    }(StackItem_js_1.BaseItem);
    exports.OverItem = OverItem;
    var LeftItem = function(_super) {
      __extends(LeftItem2, _super);
      function LeftItem2(factory, delim) {
        var _this = _super.call(this, factory) || this;
        _this.setProperty("delim", delim);
        return _this;
      }
      Object.defineProperty(LeftItem2.prototype, "kind", {
        get: function() {
          return "left";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LeftItem2.prototype, "isOpen", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      LeftItem2.prototype.checkItem = function(item) {
        if (item.isKind("right")) {
          return [[this.factory.create("mml", ParseUtil_js_1.default.fenced(this.factory.configuration, this.getProperty("delim"), this.toMml(), item.getProperty("delim"), "", item.getProperty("color")))], true];
        }
        if (item.isKind("middle")) {
          var def = { stretchy: true };
          if (item.getProperty("color")) {
            def.mathcolor = item.getProperty("color");
          }
          this.Push(this.create("node", "TeXAtom", [], { texClass: MmlNode_js_1.TEXCLASS.CLOSE }), this.create("token", "mo", def, item.getProperty("delim")), this.create("node", "TeXAtom", [], { texClass: MmlNode_js_1.TEXCLASS.OPEN }));
          this.env = {};
          return [[this], true];
        }
        return _super.prototype.checkItem.call(this, item);
      };
      LeftItem2.errors = Object.assign(Object.create(StackItem_js_1.BaseItem.errors), {
        "stop": [
          "ExtraLeftMissingRight",
          "Extra \\left or missing \\right"
        ]
      });
      return LeftItem2;
    }(StackItem_js_1.BaseItem);
    exports.LeftItem = LeftItem;
    var Middle = function(_super) {
      __extends(Middle2, _super);
      function Middle2(factory, delim, color) {
        var _this = _super.call(this, factory) || this;
        _this.setProperty("delim", delim);
        color && _this.setProperty("color", color);
        return _this;
      }
      Object.defineProperty(Middle2.prototype, "kind", {
        get: function() {
          return "middle";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Middle2.prototype, "isClose", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      return Middle2;
    }(StackItem_js_1.BaseItem);
    exports.Middle = Middle;
    var RightItem = function(_super) {
      __extends(RightItem2, _super);
      function RightItem2(factory, delim, color) {
        var _this = _super.call(this, factory) || this;
        _this.setProperty("delim", delim);
        color && _this.setProperty("color", color);
        return _this;
      }
      Object.defineProperty(RightItem2.prototype, "kind", {
        get: function() {
          return "right";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(RightItem2.prototype, "isClose", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      return RightItem2;
    }(StackItem_js_1.BaseItem);
    exports.RightItem = RightItem;
    var BeginItem = function(_super) {
      __extends(BeginItem2, _super);
      function BeginItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(BeginItem2.prototype, "kind", {
        get: function() {
          return "begin";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(BeginItem2.prototype, "isOpen", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      BeginItem2.prototype.checkItem = function(item) {
        if (item.isKind("end")) {
          if (item.getName() !== this.getName()) {
            throw new TexError_js_1.default("EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.getName(), item.getName());
          }
          if (!this.getProperty("end")) {
            return [[this.factory.create("mml", this.toMml())], true];
          }
          return StackItem_js_1.BaseItem.fail;
        }
        if (item.isKind("stop")) {
          throw new TexError_js_1.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
        }
        return _super.prototype.checkItem.call(this, item);
      };
      return BeginItem2;
    }(StackItem_js_1.BaseItem);
    exports.BeginItem = BeginItem;
    var EndItem = function(_super) {
      __extends(EndItem2, _super);
      function EndItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(EndItem2.prototype, "kind", {
        get: function() {
          return "end";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(EndItem2.prototype, "isClose", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      return EndItem2;
    }(StackItem_js_1.BaseItem);
    exports.EndItem = EndItem;
    var StyleItem = function(_super) {
      __extends(StyleItem2, _super);
      function StyleItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(StyleItem2.prototype, "kind", {
        get: function() {
          return "style";
        },
        enumerable: false,
        configurable: true
      });
      StyleItem2.prototype.checkItem = function(item) {
        if (!item.isClose) {
          return _super.prototype.checkItem.call(this, item);
        }
        var mml = this.create("node", "mstyle", this.nodes, this.getProperty("styles"));
        return [[this.factory.create("mml", mml), item], true];
      };
      return StyleItem2;
    }(StackItem_js_1.BaseItem);
    exports.StyleItem = StyleItem;
    var PositionItem = function(_super) {
      __extends(PositionItem2, _super);
      function PositionItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(PositionItem2.prototype, "kind", {
        get: function() {
          return "position";
        },
        enumerable: false,
        configurable: true
      });
      PositionItem2.prototype.checkItem = function(item) {
        if (item.isClose) {
          throw new TexError_js_1.default("MissingBoxFor", "Missing box for %1", this.getName());
        }
        if (item.isFinal) {
          var mml = item.toMml();
          switch (this.getProperty("move")) {
            case "vertical":
              mml = this.create("node", "mpadded", [mml], {
                height: this.getProperty("dh"),
                depth: this.getProperty("dd"),
                voffset: this.getProperty("dh")
              });
              return [[this.factory.create("mml", mml)], true];
            case "horizontal":
              return [[
                this.factory.create("mml", this.getProperty("left")),
                item,
                this.factory.create("mml", this.getProperty("right"))
              ], true];
          }
        }
        return _super.prototype.checkItem.call(this, item);
      };
      return PositionItem2;
    }(StackItem_js_1.BaseItem);
    exports.PositionItem = PositionItem;
    var CellItem = function(_super) {
      __extends(CellItem2, _super);
      function CellItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(CellItem2.prototype, "kind", {
        get: function() {
          return "cell";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(CellItem2.prototype, "isClose", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      return CellItem2;
    }(StackItem_js_1.BaseItem);
    exports.CellItem = CellItem;
    var MmlItem = function(_super) {
      __extends(MmlItem2, _super);
      function MmlItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(MmlItem2.prototype, "isFinal", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MmlItem2.prototype, "kind", {
        get: function() {
          return "mml";
        },
        enumerable: false,
        configurable: true
      });
      return MmlItem2;
    }(StackItem_js_1.BaseItem);
    exports.MmlItem = MmlItem;
    var FnItem = function(_super) {
      __extends(FnItem2, _super);
      function FnItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(FnItem2.prototype, "kind", {
        get: function() {
          return "fn";
        },
        enumerable: false,
        configurable: true
      });
      FnItem2.prototype.checkItem = function(item) {
        var top = this.First;
        if (top) {
          if (item.isOpen) {
            return StackItem_js_1.BaseItem.success;
          }
          if (!item.isKind("fn")) {
            var mml = item.First;
            if (!item.isKind("mml") || !mml) {
              return [[top, item], true];
            }
            if (NodeUtil_js_1.default.isType(mml, "mstyle") && mml.childNodes.length && NodeUtil_js_1.default.isType(mml.childNodes[0].childNodes[0], "mspace") || NodeUtil_js_1.default.isType(mml, "mspace")) {
              return [[top, item], true];
            }
            if (NodeUtil_js_1.default.isEmbellished(mml)) {
              mml = NodeUtil_js_1.default.getCoreMO(mml);
            }
            var form = NodeUtil_js_1.default.getForm(mml);
            if (form != null && [0, 0, 1, 1, 0, 1, 1, 0, 0, 0][form[2]]) {
              return [[top, item], true];
            }
          }
          var node = this.create("token", "mo", { texClass: MmlNode_js_1.TEXCLASS.NONE }, Entities_js_1.entities.ApplyFunction);
          return [[top, node, item], true];
        }
        return _super.prototype.checkItem.apply(this, arguments);
      };
      return FnItem2;
    }(StackItem_js_1.BaseItem);
    exports.FnItem = FnItem;
    var NotItem = function(_super) {
      __extends(NotItem2, _super);
      function NotItem2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.remap = MapHandler_js_1.MapHandler.getMap("not_remap");
        return _this;
      }
      Object.defineProperty(NotItem2.prototype, "kind", {
        get: function() {
          return "not";
        },
        enumerable: false,
        configurable: true
      });
      NotItem2.prototype.checkItem = function(item) {
        var mml;
        var c;
        var textNode;
        if (item.isKind("open") || item.isKind("left")) {
          return StackItem_js_1.BaseItem.success;
        }
        if (item.isKind("mml") && (NodeUtil_js_1.default.isType(item.First, "mo") || NodeUtil_js_1.default.isType(item.First, "mi") || NodeUtil_js_1.default.isType(item.First, "mtext"))) {
          mml = item.First;
          c = NodeUtil_js_1.default.getText(mml);
          if (c.length === 1 && !NodeUtil_js_1.default.getProperty(mml, "movesupsub") && NodeUtil_js_1.default.getChildren(mml).length === 1) {
            if (this.remap.contains(c)) {
              textNode = this.create("text", this.remap.lookup(c).char);
              NodeUtil_js_1.default.setChild(mml, 0, textNode);
            } else {
              textNode = this.create("text", "̸");
              NodeUtil_js_1.default.appendChildren(mml, [textNode]);
            }
            return [[item], true];
          }
        }
        textNode = this.create("text", "⧸");
        var mtextNode = this.create("node", "mtext", [], {}, textNode);
        var paddedNode = this.create("node", "mpadded", [mtextNode], { width: 0 });
        mml = this.create("node", "TeXAtom", [paddedNode], { texClass: MmlNode_js_1.TEXCLASS.REL });
        return [[mml, item], true];
      };
      return NotItem2;
    }(StackItem_js_1.BaseItem);
    exports.NotItem = NotItem;
    var NonscriptItem = function(_super) {
      __extends(NonscriptItem2, _super);
      function NonscriptItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(NonscriptItem2.prototype, "kind", {
        get: function() {
          return "nonscript";
        },
        enumerable: false,
        configurable: true
      });
      NonscriptItem2.prototype.checkItem = function(item) {
        if (item.isKind("mml") && item.Size() === 1) {
          var mml = item.First;
          if (mml.isKind("mstyle") && mml.notParent) {
            mml = NodeUtil_js_1.default.getChildren(NodeUtil_js_1.default.getChildren(mml)[0])[0];
          }
          if (mml.isKind("mspace")) {
            if (mml !== item.First) {
              var mrow = this.create("node", "mrow", [item.Pop()]);
              item.Push(mrow);
            }
            this.factory.configuration.addNode("nonscript", item.First);
          }
        }
        return [[item], true];
      };
      return NonscriptItem2;
    }(StackItem_js_1.BaseItem);
    exports.NonscriptItem = NonscriptItem;
    var DotsItem = function(_super) {
      __extends(DotsItem2, _super);
      function DotsItem2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(DotsItem2.prototype, "kind", {
        get: function() {
          return "dots";
        },
        enumerable: false,
        configurable: true
      });
      DotsItem2.prototype.checkItem = function(item) {
        if (item.isKind("open") || item.isKind("left")) {
          return StackItem_js_1.BaseItem.success;
        }
        var dots = this.getProperty("ldots");
        var top = item.First;
        if (item.isKind("mml") && NodeUtil_js_1.default.isEmbellished(top)) {
          var tclass = NodeUtil_js_1.default.getTexClass(NodeUtil_js_1.default.getCoreMO(top));
          if (tclass === MmlNode_js_1.TEXCLASS.BIN || tclass === MmlNode_js_1.TEXCLASS.REL) {
            dots = this.getProperty("cdots");
          }
        }
        return [[dots, item], true];
      };
      return DotsItem2;
    }(StackItem_js_1.BaseItem);
    exports.DotsItem = DotsItem;
    var ArrayItem = function(_super) {
      __extends(ArrayItem2, _super);
      function ArrayItem2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.table = [];
        _this.row = [];
        _this.frame = [];
        _this.hfill = [];
        _this.arraydef = {};
        _this.dashed = false;
        return _this;
      }
      Object.defineProperty(ArrayItem2.prototype, "kind", {
        get: function() {
          return "array";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ArrayItem2.prototype, "isOpen", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ArrayItem2.prototype, "copyEnv", {
        get: function() {
          return false;
        },
        enumerable: false,
        configurable: true
      });
      ArrayItem2.prototype.checkItem = function(item) {
        if (item.isClose && !item.isKind("over")) {
          if (item.getProperty("isEntry")) {
            this.EndEntry();
            this.clearEnv();
            return StackItem_js_1.BaseItem.fail;
          }
          if (item.getProperty("isCR")) {
            this.EndEntry();
            this.EndRow();
            this.clearEnv();
            return StackItem_js_1.BaseItem.fail;
          }
          this.EndTable();
          this.clearEnv();
          var newItem = this.factory.create("mml", this.createMml());
          if (this.getProperty("requireClose")) {
            if (item.isKind("close")) {
              return [[newItem], true];
            }
            throw new TexError_js_1.default("MissingCloseBrace", "Missing close brace");
          }
          return [[newItem, item], true];
        }
        return _super.prototype.checkItem.call(this, item);
      };
      ArrayItem2.prototype.createMml = function() {
        var scriptlevel = this.arraydef["scriptlevel"];
        delete this.arraydef["scriptlevel"];
        var mml = this.create("node", "mtable", this.table, this.arraydef);
        if (scriptlevel) {
          mml.setProperty("scriptlevel", scriptlevel);
        }
        if (this.frame.length === 4) {
          NodeUtil_js_1.default.setAttribute(mml, "frame", this.dashed ? "dashed" : "solid");
        } else if (this.frame.length) {
          if (this.arraydef["rowlines"]) {
            this.arraydef["rowlines"] = this.arraydef["rowlines"].replace(/none( none)+$/, "none");
          }
          NodeUtil_js_1.default.setAttribute(mml, "frame", "");
          mml = this.create("node", "menclose", [mml], { notation: this.frame.join(" ") });
          if ((this.arraydef["columnlines"] || "none") !== "none" || (this.arraydef["rowlines"] || "none") !== "none") {
            NodeUtil_js_1.default.setAttribute(mml, "data-padding", 0);
          }
        }
        if (this.getProperty("open") || this.getProperty("close")) {
          mml = ParseUtil_js_1.default.fenced(this.factory.configuration, this.getProperty("open"), mml, this.getProperty("close"));
        }
        return mml;
      };
      ArrayItem2.prototype.EndEntry = function() {
        var mtd = this.create("node", "mtd", this.nodes);
        if (this.hfill.length) {
          if (this.hfill[0] === 0) {
            NodeUtil_js_1.default.setAttribute(mtd, "columnalign", "right");
          }
          if (this.hfill[this.hfill.length - 1] === this.Size()) {
            NodeUtil_js_1.default.setAttribute(mtd, "columnalign", NodeUtil_js_1.default.getAttribute(mtd, "columnalign") ? "center" : "left");
          }
        }
        this.row.push(mtd);
        this.Clear();
        this.hfill = [];
      };
      ArrayItem2.prototype.EndRow = function() {
        var node;
        if (this.getProperty("isNumbered") && this.row.length === 3) {
          this.row.unshift(this.row.pop());
          node = this.create("node", "mlabeledtr", this.row);
        } else {
          node = this.create("node", "mtr", this.row);
        }
        this.table.push(node);
        this.row = [];
      };
      ArrayItem2.prototype.EndTable = function() {
        if (this.Size() || this.row.length) {
          this.EndEntry();
          this.EndRow();
        }
        this.checkLines();
      };
      ArrayItem2.prototype.checkLines = function() {
        if (this.arraydef["rowlines"]) {
          var lines = this.arraydef["rowlines"].split(/ /);
          if (lines.length === this.table.length) {
            this.frame.push("bottom");
            lines.pop();
            this.arraydef["rowlines"] = lines.join(" ");
          } else if (lines.length < this.table.length - 1) {
            this.arraydef["rowlines"] += " none";
          }
        }
        if (this.getProperty("rowspacing")) {
          var rows = this.arraydef["rowspacing"].split(/ /);
          while (rows.length < this.table.length) {
            rows.push(this.getProperty("rowspacing") + "em");
          }
          this.arraydef["rowspacing"] = rows.join(" ");
        }
      };
      ArrayItem2.prototype.addRowSpacing = function(spacing) {
        if (this.arraydef["rowspacing"]) {
          var rows = this.arraydef["rowspacing"].split(/ /);
          if (!this.getProperty("rowspacing")) {
            var dimem = ParseUtil_js_1.default.dimen2em(rows[0]);
            this.setProperty("rowspacing", dimem);
          }
          var rowspacing = this.getProperty("rowspacing");
          while (rows.length < this.table.length) {
            rows.push(ParseUtil_js_1.default.Em(rowspacing));
          }
          rows[this.table.length - 1] = ParseUtil_js_1.default.Em(Math.max(0, rowspacing + ParseUtil_js_1.default.dimen2em(spacing)));
          this.arraydef["rowspacing"] = rows.join(" ");
        }
      };
      return ArrayItem2;
    }(StackItem_js_1.BaseItem);
    exports.ArrayItem = ArrayItem;
    var EqnArrayItem = function(_super) {
      __extends(EqnArrayItem2, _super);
      function EqnArrayItem2(factory) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, factory) || this;
        _this.maxrow = 0;
        _this.factory.configuration.tags.start(args[0], args[2], args[1]);
        return _this;
      }
      Object.defineProperty(EqnArrayItem2.prototype, "kind", {
        get: function() {
          return "eqnarray";
        },
        enumerable: false,
        configurable: true
      });
      EqnArrayItem2.prototype.EndEntry = function() {
        if (this.row.length) {
          ParseUtil_js_1.default.fixInitialMO(this.factory.configuration, this.nodes);
        }
        var node = this.create("node", "mtd", this.nodes);
        this.row.push(node);
        this.Clear();
      };
      EqnArrayItem2.prototype.EndRow = function() {
        if (this.row.length > this.maxrow) {
          this.maxrow = this.row.length;
        }
        var mtr = "mtr";
        var tag = this.factory.configuration.tags.getTag();
        if (tag) {
          this.row = [tag].concat(this.row);
          mtr = "mlabeledtr";
        }
        this.factory.configuration.tags.clearTag();
        var node = this.create("node", mtr, this.row);
        this.table.push(node);
        this.row = [];
      };
      EqnArrayItem2.prototype.EndTable = function() {
        _super.prototype.EndTable.call(this);
        this.factory.configuration.tags.end();
        this.extendArray("columnalign", this.maxrow);
        this.extendArray("columnwidth", this.maxrow);
        this.extendArray("columnspacing", this.maxrow - 1);
      };
      EqnArrayItem2.prototype.extendArray = function(name, max) {
        if (!this.arraydef[name])
          return;
        var repeat = this.arraydef[name].split(/ /);
        var columns = __spreadArray([], __read(repeat), false);
        if (columns.length > 1) {
          while (columns.length < max) {
            columns.push.apply(columns, __spreadArray([], __read(repeat), false));
          }
          this.arraydef[name] = columns.slice(0, max).join(" ");
        }
      };
      return EqnArrayItem2;
    }(ArrayItem);
    exports.EqnArrayItem = EqnArrayItem;
    var EquationItem = function(_super) {
      __extends(EquationItem2, _super);
      function EquationItem2(factory) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, factory) || this;
        _this.factory.configuration.tags.start("equation", true, args[0]);
        return _this;
      }
      Object.defineProperty(EquationItem2.prototype, "kind", {
        get: function() {
          return "equation";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(EquationItem2.prototype, "isOpen", {
        get: function() {
          return true;
        },
        enumerable: false,
        configurable: true
      });
      EquationItem2.prototype.checkItem = function(item) {
        if (item.isKind("end")) {
          var mml = this.toMml();
          var tag = this.factory.configuration.tags.getTag();
          this.factory.configuration.tags.end();
          return [[tag ? this.factory.configuration.tags.enTag(mml, tag) : mml, item], true];
        }
        if (item.isKind("stop")) {
          throw new TexError_js_1.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
        }
        return _super.prototype.checkItem.call(this, item);
      };
      return EquationItem2;
    }(StackItem_js_1.BaseItem);
    exports.EquationItem = EquationItem;
  }
});

// node_modules/mathjax-full/js/input/tex/TexConstants.js
var require_TexConstants = __commonJS({
  "node_modules/mathjax-full/js/input/tex/TexConstants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TexConstant = void 0;
    var TexConstant;
    (function(TexConstant2) {
      TexConstant2.Variant = {
        NORMAL: "normal",
        BOLD: "bold",
        ITALIC: "italic",
        BOLDITALIC: "bold-italic",
        DOUBLESTRUCK: "double-struck",
        FRAKTUR: "fraktur",
        BOLDFRAKTUR: "bold-fraktur",
        SCRIPT: "script",
        BOLDSCRIPT: "bold-script",
        SANSSERIF: "sans-serif",
        BOLDSANSSERIF: "bold-sans-serif",
        SANSSERIFITALIC: "sans-serif-italic",
        SANSSERIFBOLDITALIC: "sans-serif-bold-italic",
        MONOSPACE: "monospace",
        INITIAL: "inital",
        TAILED: "tailed",
        LOOPED: "looped",
        STRETCHED: "stretched",
        CALLIGRAPHIC: "-tex-calligraphic",
        BOLDCALLIGRAPHIC: "-tex-bold-calligraphic",
        OLDSTYLE: "-tex-oldstyle",
        BOLDOLDSTYLE: "-tex-bold-oldstyle",
        MATHITALIC: "-tex-mathit"
      };
      TexConstant2.Form = {
        PREFIX: "prefix",
        INFIX: "infix",
        POSTFIX: "postfix"
      };
      TexConstant2.LineBreak = {
        AUTO: "auto",
        NEWLINE: "newline",
        NOBREAK: "nobreak",
        GOODBREAK: "goodbreak",
        BADBREAK: "badbreak"
      };
      TexConstant2.LineBreakStyle = {
        BEFORE: "before",
        AFTER: "after",
        DUPLICATE: "duplicate",
        INFIXLINBREAKSTYLE: "infixlinebreakstyle"
      };
      TexConstant2.IndentAlign = {
        LEFT: "left",
        CENTER: "center",
        RIGHT: "right",
        AUTO: "auto",
        ID: "id",
        INDENTALIGN: "indentalign"
      };
      TexConstant2.IndentShift = {
        INDENTSHIFT: "indentshift"
      };
      TexConstant2.LineThickness = {
        THIN: "thin",
        MEDIUM: "medium",
        THICK: "thick"
      };
      TexConstant2.Notation = {
        LONGDIV: "longdiv",
        ACTUARIAL: "actuarial",
        PHASORANGLE: "phasorangle",
        RADICAL: "radical",
        BOX: "box",
        ROUNDEDBOX: "roundedbox",
        CIRCLE: "circle",
        LEFT: "left",
        RIGHT: "right",
        TOP: "top",
        BOTTOM: "bottom",
        UPDIAGONALSTRIKE: "updiagonalstrike",
        DOWNDIAGONALSTRIKE: "downdiagonalstrike",
        VERTICALSTRIKE: "verticalstrike",
        HORIZONTALSTRIKE: "horizontalstrike",
        NORTHEASTARROW: "northeastarrow",
        MADRUWB: "madruwb",
        UPDIAGONALARROW: "updiagonalarrow"
      };
      TexConstant2.Align = {
        TOP: "top",
        BOTTOM: "bottom",
        CENTER: "center",
        BASELINE: "baseline",
        AXIS: "axis",
        LEFT: "left",
        RIGHT: "right"
      };
      TexConstant2.Lines = {
        NONE: "none",
        SOLID: "solid",
        DASHED: "dashed"
      };
      TexConstant2.Side = {
        LEFT: "left",
        RIGHT: "right",
        LEFTOVERLAP: "leftoverlap",
        RIGHTOVERLAP: "rightoverlap"
      };
      TexConstant2.Width = {
        AUTO: "auto",
        FIT: "fit"
      };
      TexConstant2.Actiontype = {
        TOGGLE: "toggle",
        STATUSLINE: "statusline",
        TOOLTIP: "tooltip",
        INPUT: "input"
      };
      TexConstant2.Overflow = {
        LINBREAK: "linebreak",
        SCROLL: "scroll",
        ELIDE: "elide",
        TRUNCATE: "truncate",
        SCALE: "scale"
      };
      TexConstant2.Unit = {
        EM: "em",
        EX: "ex",
        PX: "px",
        IN: "in",
        CM: "cm",
        MM: "mm",
        PT: "pt",
        PC: "pc"
      };
    })(TexConstant = exports.TexConstant || (exports.TexConstant = {}));
  }
});

// node_modules/mathjax-full/js/input/tex/base/BaseMethods.js
var require_BaseMethods = __commonJS({
  "node_modules/mathjax-full/js/input/tex/base/BaseMethods.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var sitem = __importStar(require_BaseItems());
    var NodeUtil_js_1 = __importDefault(require_NodeUtil());
    var TexError_js_1 = __importDefault(require_TexError());
    var TexParser_js_1 = __importDefault(require_TexParser());
    var TexConstants_js_1 = require_TexConstants();
    var ParseUtil_js_1 = __importDefault(require_ParseUtil());
    var MmlNode_js_1 = require_MmlNode();
    var Tags_js_1 = require_Tags();
    var lengths_js_1 = require_lengths();
    var Entities_js_1 = require_Entities();
    var Options_js_1 = require_Options();
    var BaseMethods = {};
    var P_HEIGHT = 1.2 / 0.85;
    var MmlTokenAllow = {
      fontfamily: 1,
      fontsize: 1,
      fontweight: 1,
      fontstyle: 1,
      color: 1,
      background: 1,
      id: 1,
      "class": 1,
      href: 1,
      style: 1
    };
    BaseMethods.Open = function(parser, _c) {
      parser.Push(parser.itemFactory.create("open"));
    };
    BaseMethods.Close = function(parser, _c) {
      parser.Push(parser.itemFactory.create("close"));
    };
    BaseMethods.Tilde = function(parser, _c) {
      parser.Push(parser.create("token", "mtext", {}, Entities_js_1.entities.nbsp));
    };
    BaseMethods.Space = function(_parser, _c) {
    };
    BaseMethods.Superscript = function(parser, _c) {
      var _a;
      if (parser.GetNext().match(/\d/)) {
        parser.string = parser.string.substr(0, parser.i + 1) + " " + parser.string.substr(parser.i + 1);
      }
      var primes;
      var base;
      var top = parser.stack.Top();
      if (top.isKind("prime")) {
        _a = __read(top.Peek(2), 2), base = _a[0], primes = _a[1];
        parser.stack.Pop();
      } else {
        base = parser.stack.Prev();
        if (!base) {
          base = parser.create("token", "mi", {}, "");
        }
      }
      var movesupsub = NodeUtil_js_1.default.getProperty(base, "movesupsub");
      var position = NodeUtil_js_1.default.isType(base, "msubsup") ? base.sup : base.over;
      if (NodeUtil_js_1.default.isType(base, "msubsup") && !NodeUtil_js_1.default.isType(base, "msup") && NodeUtil_js_1.default.getChildAt(base, base.sup) || NodeUtil_js_1.default.isType(base, "munderover") && !NodeUtil_js_1.default.isType(base, "mover") && NodeUtil_js_1.default.getChildAt(base, base.over) && !NodeUtil_js_1.default.getProperty(base, "subsupOK")) {
        throw new TexError_js_1.default("DoubleExponent", "Double exponent: use braces to clarify");
      }
      if (!NodeUtil_js_1.default.isType(base, "msubsup") || NodeUtil_js_1.default.isType(base, "msup")) {
        if (movesupsub) {
          if (!NodeUtil_js_1.default.isType(base, "munderover") || NodeUtil_js_1.default.isType(base, "mover") || NodeUtil_js_1.default.getChildAt(base, base.over)) {
            base = parser.create("node", "munderover", [base], { movesupsub: true });
          }
          position = base.over;
        } else {
          base = parser.create("node", "msubsup", [base]);
          position = base.sup;
        }
      }
      parser.Push(parser.itemFactory.create("subsup", base).setProperties({
        position,
        primes,
        movesupsub
      }));
    };
    BaseMethods.Subscript = function(parser, _c) {
      var _a;
      if (parser.GetNext().match(/\d/)) {
        parser.string = parser.string.substr(0, parser.i + 1) + " " + parser.string.substr(parser.i + 1);
      }
      var primes, base;
      var top = parser.stack.Top();
      if (top.isKind("prime")) {
        _a = __read(top.Peek(2), 2), base = _a[0], primes = _a[1];
        parser.stack.Pop();
      } else {
        base = parser.stack.Prev();
        if (!base) {
          base = parser.create("token", "mi", {}, "");
        }
      }
      var movesupsub = NodeUtil_js_1.default.getProperty(base, "movesupsub");
      var position = NodeUtil_js_1.default.isType(base, "msubsup") ? base.sub : base.under;
      if (NodeUtil_js_1.default.isType(base, "msubsup") && !NodeUtil_js_1.default.isType(base, "msup") && NodeUtil_js_1.default.getChildAt(base, base.sub) || NodeUtil_js_1.default.isType(base, "munderover") && !NodeUtil_js_1.default.isType(base, "mover") && NodeUtil_js_1.default.getChildAt(base, base.under) && !NodeUtil_js_1.default.getProperty(base, "subsupOK")) {
        throw new TexError_js_1.default("DoubleSubscripts", "Double subscripts: use braces to clarify");
      }
      if (!NodeUtil_js_1.default.isType(base, "msubsup") || NodeUtil_js_1.default.isType(base, "msup")) {
        if (movesupsub) {
          if (!NodeUtil_js_1.default.isType(base, "munderover") || NodeUtil_js_1.default.isType(base, "mover") || NodeUtil_js_1.default.getChildAt(base, base.under)) {
            base = parser.create("node", "munderover", [base], { movesupsub: true });
          }
          position = base.under;
        } else {
          base = parser.create("node", "msubsup", [base]);
          position = base.sub;
        }
      }
      parser.Push(parser.itemFactory.create("subsup", base).setProperties({
        position,
        primes,
        movesupsub
      }));
    };
    BaseMethods.Prime = function(parser, c) {
      var base = parser.stack.Prev();
      if (!base) {
        base = parser.create("node", "mi");
      }
      if (NodeUtil_js_1.default.isType(base, "msubsup") && !NodeUtil_js_1.default.isType(base, "msup") && NodeUtil_js_1.default.getChildAt(base, base.sup)) {
        throw new TexError_js_1.default("DoubleExponentPrime", "Prime causes double exponent: use braces to clarify");
      }
      var sup = "";
      parser.i--;
      do {
        sup += Entities_js_1.entities.prime;
        parser.i++, c = parser.GetNext();
      } while (c === "'" || c === Entities_js_1.entities.rsquo);
      sup = ["", "′", "″", "‴", "⁗"][sup.length] || sup;
      var node = parser.create("token", "mo", { variantForm: true }, sup);
      parser.Push(parser.itemFactory.create("prime", base, node));
    };
    BaseMethods.Comment = function(parser, _c) {
      while (parser.i < parser.string.length && parser.string.charAt(parser.i) !== "\n") {
        parser.i++;
      }
    };
    BaseMethods.Hash = function(_parser, _c) {
      throw new TexError_js_1.default("CantUseHash1", "You can't use 'macro parameter character #' in math mode");
    };
    BaseMethods.MathFont = function(parser, name, variant) {
      var text = parser.GetArgument(name);
      var mml = new TexParser_js_1.default(text, __assign(__assign({}, parser.stack.env), { font: variant, multiLetterIdentifiers: /^[a-zA-Z]+/, noAutoOP: true }), parser.configuration).mml();
      parser.Push(parser.create("node", "TeXAtom", [mml]));
    };
    BaseMethods.SetFont = function(parser, _name, font) {
      parser.stack.env["font"] = font;
    };
    BaseMethods.SetStyle = function(parser, _name, texStyle, style, level) {
      parser.stack.env["style"] = texStyle;
      parser.stack.env["level"] = level;
      parser.Push(parser.itemFactory.create("style").setProperty("styles", { displaystyle: style, scriptlevel: level }));
    };
    BaseMethods.SetSize = function(parser, _name, size) {
      parser.stack.env["size"] = size;
      parser.Push(parser.itemFactory.create("style").setProperty("styles", { mathsize: (0, lengths_js_1.em)(size) }));
    };
    BaseMethods.Spacer = function(parser, _name, space) {
      var node = parser.create("node", "mspace", [], { width: (0, lengths_js_1.em)(space) });
      var style = parser.create("node", "mstyle", [node], { scriptlevel: 0 });
      parser.Push(style);
    };
    BaseMethods.LeftRight = function(parser, name) {
      var first = name.substr(1);
      parser.Push(parser.itemFactory.create(first, parser.GetDelimiter(name), parser.stack.env.color));
    };
    BaseMethods.NamedFn = function(parser, name, id) {
      if (!id) {
        id = name.substr(1);
      }
      var mml = parser.create("token", "mi", { texClass: MmlNode_js_1.TEXCLASS.OP }, id);
      parser.Push(parser.itemFactory.create("fn", mml));
    };
    BaseMethods.NamedOp = function(parser, name, id) {
      if (!id) {
        id = name.substr(1);
      }
      id = id.replace(/&thinsp;/, " ");
      var mml = parser.create("token", "mo", {
        movablelimits: true,
        movesupsub: true,
        form: TexConstants_js_1.TexConstant.Form.PREFIX,
        texClass: MmlNode_js_1.TEXCLASS.OP
      }, id);
      parser.Push(mml);
    };
    BaseMethods.Limits = function(parser, _name, limits) {
      var op = parser.stack.Prev(true);
      if (!op || NodeUtil_js_1.default.getTexClass(NodeUtil_js_1.default.getCoreMO(op)) !== MmlNode_js_1.TEXCLASS.OP && NodeUtil_js_1.default.getProperty(op, "movesupsub") == null) {
        throw new TexError_js_1.default("MisplacedLimits", "%1 is allowed only on operators", parser.currentCS);
      }
      var top = parser.stack.Top();
      var node;
      if (NodeUtil_js_1.default.isType(op, "munderover") && !limits) {
        node = parser.create("node", "msubsup");
        NodeUtil_js_1.default.copyChildren(op, node);
        op = top.Last = node;
      } else if (NodeUtil_js_1.default.isType(op, "msubsup") && limits) {
        node = parser.create("node", "munderover");
        NodeUtil_js_1.default.copyChildren(op, node);
        op = top.Last = node;
      }
      NodeUtil_js_1.default.setProperty(op, "movesupsub", limits ? true : false);
      NodeUtil_js_1.default.setProperties(NodeUtil_js_1.default.getCoreMO(op), { "movablelimits": false });
      if (NodeUtil_js_1.default.getAttribute(op, "movablelimits") || NodeUtil_js_1.default.getProperty(op, "movablelimits")) {
        NodeUtil_js_1.default.setProperties(op, { "movablelimits": false });
      }
    };
    BaseMethods.Over = function(parser, name, open, close) {
      var mml = parser.itemFactory.create("over").setProperty("name", parser.currentCS);
      if (open || close) {
        mml.setProperty("open", open);
        mml.setProperty("close", close);
      } else if (name.match(/withdelims$/)) {
        mml.setProperty("open", parser.GetDelimiter(name));
        mml.setProperty("close", parser.GetDelimiter(name));
      }
      if (name.match(/^\\above/)) {
        mml.setProperty("thickness", parser.GetDimen(name));
      } else if (name.match(/^\\atop/) || open || close) {
        mml.setProperty("thickness", 0);
      }
      parser.Push(mml);
    };
    BaseMethods.Frac = function(parser, name) {
      var num = parser.ParseArg(name);
      var den = parser.ParseArg(name);
      var node = parser.create("node", "mfrac", [num, den]);
      parser.Push(node);
    };
    BaseMethods.Sqrt = function(parser, name) {
      var n = parser.GetBrackets(name);
      var arg = parser.GetArgument(name);
      if (arg === "\\frac") {
        arg += "{" + parser.GetArgument(arg) + "}{" + parser.GetArgument(arg) + "}";
      }
      var mml = new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml();
      if (!n) {
        mml = parser.create("node", "msqrt", [mml]);
      } else {
        mml = parser.create("node", "mroot", [mml, parseRoot(parser, n)]);
      }
      parser.Push(mml);
    };
    function parseRoot(parser, n) {
      var env = parser.stack.env;
      var inRoot = env["inRoot"];
      env["inRoot"] = true;
      var newParser = new TexParser_js_1.default(n, env, parser.configuration);
      var node = newParser.mml();
      var global = newParser.stack.global;
      if (global["leftRoot"] || global["upRoot"]) {
        var def = {};
        if (global["leftRoot"]) {
          def["width"] = global["leftRoot"];
        }
        if (global["upRoot"]) {
          def["voffset"] = global["upRoot"];
          def["height"] = global["upRoot"];
        }
        node = parser.create("node", "mpadded", [node], def);
      }
      env["inRoot"] = inRoot;
      return node;
    }
    BaseMethods.Root = function(parser, name) {
      var n = parser.GetUpTo(name, "\\of");
      var arg = parser.ParseArg(name);
      var node = parser.create("node", "mroot", [arg, parseRoot(parser, n)]);
      parser.Push(node);
    };
    BaseMethods.MoveRoot = function(parser, name, id) {
      if (!parser.stack.env["inRoot"]) {
        throw new TexError_js_1.default("MisplacedMoveRoot", "%1 can appear only within a root", parser.currentCS);
      }
      if (parser.stack.global[id]) {
        throw new TexError_js_1.default("MultipleMoveRoot", "Multiple use of %1", parser.currentCS);
      }
      var n = parser.GetArgument(name);
      if (!n.match(/-?[0-9]+/)) {
        throw new TexError_js_1.default("IntegerArg", "The argument to %1 must be an integer", parser.currentCS);
      }
      n = parseInt(n, 10) / 15 + "em";
      if (n.substr(0, 1) !== "-") {
        n = "+" + n;
      }
      parser.stack.global[id] = n;
    };
    BaseMethods.Accent = function(parser, name, accent, stretchy) {
      var c = parser.ParseArg(name);
      var def = __assign(__assign({}, ParseUtil_js_1.default.getFontDef(parser)), { accent: true, mathaccent: true });
      var entity = NodeUtil_js_1.default.createEntity(accent);
      var moNode = parser.create("token", "mo", def, entity);
      var mml = moNode;
      NodeUtil_js_1.default.setAttribute(mml, "stretchy", stretchy ? true : false);
      var mo = NodeUtil_js_1.default.isEmbellished(c) ? NodeUtil_js_1.default.getCoreMO(c) : c;
      if (NodeUtil_js_1.default.isType(mo, "mo") || NodeUtil_js_1.default.getProperty(mo, "movablelimits")) {
        NodeUtil_js_1.default.setProperties(mo, { "movablelimits": false });
      }
      var muoNode = parser.create("node", "munderover");
      NodeUtil_js_1.default.setChild(muoNode, 0, c);
      NodeUtil_js_1.default.setChild(muoNode, 1, null);
      NodeUtil_js_1.default.setChild(muoNode, 2, mml);
      var texAtom = parser.create("node", "TeXAtom", [muoNode]);
      parser.Push(texAtom);
    };
    BaseMethods.UnderOver = function(parser, name, c, stack) {
      var entity = NodeUtil_js_1.default.createEntity(c);
      var mo = parser.create("token", "mo", { stretchy: true, accent: true }, entity);
      var pos = name.charAt(1) === "o" ? "over" : "under";
      var base = parser.ParseArg(name);
      parser.Push(ParseUtil_js_1.default.underOver(parser, base, mo, pos, stack));
    };
    BaseMethods.Overset = function(parser, name) {
      var top = parser.ParseArg(name);
      var base = parser.ParseArg(name);
      ParseUtil_js_1.default.checkMovableLimits(base);
      if (top.isKind("mo")) {
        NodeUtil_js_1.default.setAttribute(top, "accent", false);
      }
      var node = parser.create("node", "mover", [base, top]);
      parser.Push(node);
    };
    BaseMethods.Underset = function(parser, name) {
      var bot = parser.ParseArg(name);
      var base = parser.ParseArg(name);
      ParseUtil_js_1.default.checkMovableLimits(base);
      if (bot.isKind("mo")) {
        NodeUtil_js_1.default.setAttribute(bot, "accent", false);
      }
      var node = parser.create("node", "munder", [base, bot], { accentunder: false });
      parser.Push(node);
    };
    BaseMethods.Overunderset = function(parser, name) {
      var top = parser.ParseArg(name);
      var bot = parser.ParseArg(name);
      var base = parser.ParseArg(name);
      ParseUtil_js_1.default.checkMovableLimits(base);
      if (top.isKind("mo")) {
        NodeUtil_js_1.default.setAttribute(top, "accent", false);
      }
      if (bot.isKind("mo")) {
        NodeUtil_js_1.default.setAttribute(bot, "accent", false);
      }
      var node = parser.create("node", "munderover", [base, bot, top], { accent: false, accentunder: false });
      parser.Push(node);
    };
    BaseMethods.TeXAtom = function(parser, name, mclass) {
      var def = { texClass: mclass };
      var mml;
      var node;
      var parsed;
      if (mclass === MmlNode_js_1.TEXCLASS.OP) {
        def["movesupsub"] = def["movablelimits"] = true;
        var arg = parser.GetArgument(name);
        var match = arg.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
        if (match) {
          def["mathvariant"] = TexConstants_js_1.TexConstant.Variant.NORMAL;
          node = parser.create("token", "mi", def, match[1]);
        } else {
          parsed = new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml();
          node = parser.create("node", "TeXAtom", [parsed], def);
        }
        mml = parser.itemFactory.create("fn", node);
      } else {
        parsed = parser.ParseArg(name);
        mml = parser.create("node", "TeXAtom", [parsed], def);
      }
      parser.Push(mml);
    };
    BaseMethods.MmlToken = function(parser, name) {
      var kind = parser.GetArgument(name);
      var attr = parser.GetBrackets(name, "").replace(/^\s+/, "");
      var text = parser.GetArgument(name);
      var def = {};
      var keep = [];
      var node;
      try {
        node = parser.create("node", kind);
      } catch (e) {
        node = null;
      }
      if (!node || !node.isToken) {
        throw new TexError_js_1.default("NotMathMLToken", "%1 is not a token element", kind);
      }
      while (attr !== "") {
        var match = attr.match(/^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i);
        if (!match) {
          throw new TexError_js_1.default("InvalidMathMLAttr", "Invalid MathML attribute: %1", attr);
        }
        if (!node.attributes.hasDefault(match[1]) && !MmlTokenAllow[match[1]]) {
          throw new TexError_js_1.default("UnknownAttrForElement", "%1 is not a recognized attribute for %2", match[1], kind);
        }
        var value = ParseUtil_js_1.default.MmlFilterAttribute(parser, match[1], match[2].replace(/^(['"])(.*)\1$/, "$2"));
        if (value) {
          if (value.toLowerCase() === "true") {
            value = true;
          } else if (value.toLowerCase() === "false") {
            value = false;
          }
          def[match[1]] = value;
          keep.push(match[1]);
        }
        attr = attr.substr(match[0].length);
      }
      if (keep.length) {
        def["mjx-keep-attrs"] = keep.join(" ");
      }
      var textNode = parser.create("text", text);
      node.appendChild(textNode);
      NodeUtil_js_1.default.setProperties(node, def);
      parser.Push(node);
    };
    BaseMethods.Strut = function(parser, _name) {
      var row = parser.create("node", "mrow");
      var padded = parser.create("node", "mpadded", [row], { height: "8.6pt", depth: "3pt", width: 0 });
      parser.Push(padded);
    };
    BaseMethods.Phantom = function(parser, name, v, h) {
      var box = parser.create("node", "mphantom", [parser.ParseArg(name)]);
      if (v || h) {
        box = parser.create("node", "mpadded", [box]);
        if (h) {
          NodeUtil_js_1.default.setAttribute(box, "height", 0);
          NodeUtil_js_1.default.setAttribute(box, "depth", 0);
        }
        if (v) {
          NodeUtil_js_1.default.setAttribute(box, "width", 0);
        }
      }
      var atom = parser.create("node", "TeXAtom", [box]);
      parser.Push(atom);
    };
    BaseMethods.Smash = function(parser, name) {
      var bt = ParseUtil_js_1.default.trimSpaces(parser.GetBrackets(name, ""));
      var smash = parser.create("node", "mpadded", [parser.ParseArg(name)]);
      switch (bt) {
        case "b":
          NodeUtil_js_1.default.setAttribute(smash, "depth", 0);
          break;
        case "t":
          NodeUtil_js_1.default.setAttribute(smash, "height", 0);
          break;
        default:
          NodeUtil_js_1.default.setAttribute(smash, "height", 0);
          NodeUtil_js_1.default.setAttribute(smash, "depth", 0);
      }
      var atom = parser.create("node", "TeXAtom", [smash]);
      parser.Push(atom);
    };
    BaseMethods.Lap = function(parser, name) {
      var mml = parser.create("node", "mpadded", [parser.ParseArg(name)], { width: 0 });
      if (name === "\\llap") {
        NodeUtil_js_1.default.setAttribute(mml, "lspace", "-1width");
      }
      var atom = parser.create("node", "TeXAtom", [mml]);
      parser.Push(atom);
    };
    BaseMethods.RaiseLower = function(parser, name) {
      var h = parser.GetDimen(name);
      var item = parser.itemFactory.create("position").setProperties({ name: parser.currentCS, move: "vertical" });
      if (h.charAt(0) === "-") {
        h = h.slice(1);
        name = name.substr(1) === "raise" ? "\\lower" : "\\raise";
      }
      if (name === "\\lower") {
        item.setProperty("dh", "-" + h);
        item.setProperty("dd", "+" + h);
      } else {
        item.setProperty("dh", "+" + h);
        item.setProperty("dd", "-" + h);
      }
      parser.Push(item);
    };
    BaseMethods.MoveLeftRight = function(parser, name) {
      var h = parser.GetDimen(name);
      var nh = h.charAt(0) === "-" ? h.slice(1) : "-" + h;
      if (name === "\\moveleft") {
        var tmp = h;
        h = nh;
        nh = tmp;
      }
      parser.Push(parser.itemFactory.create("position").setProperties({
        name: parser.currentCS,
        move: "horizontal",
        left: parser.create("node", "mspace", [], { width: h }),
        right: parser.create("node", "mspace", [], { width: nh })
      }));
    };
    BaseMethods.Hskip = function(parser, name) {
      var node = parser.create("node", "mspace", [], { width: parser.GetDimen(name) });
      parser.Push(node);
    };
    BaseMethods.Nonscript = function(parser, _name) {
      parser.Push(parser.itemFactory.create("nonscript"));
    };
    BaseMethods.Rule = function(parser, name, style) {
      var w = parser.GetDimen(name), h = parser.GetDimen(name), d = parser.GetDimen(name);
      var def = { width: w, height: h, depth: d };
      if (style !== "blank") {
        def["mathbackground"] = parser.stack.env["color"] || "black";
      }
      var node = parser.create("node", "mspace", [], def);
      parser.Push(node);
    };
    BaseMethods.rule = function(parser, name) {
      var v = parser.GetBrackets(name), w = parser.GetDimen(name), h = parser.GetDimen(name);
      var mml = parser.create("node", "mspace", [], {
        width: w,
        height: h,
        mathbackground: parser.stack.env["color"] || "black"
      });
      if (v) {
        mml = parser.create("node", "mpadded", [mml], { voffset: v });
        if (v.match(/^\-/)) {
          NodeUtil_js_1.default.setAttribute(mml, "height", v);
          NodeUtil_js_1.default.setAttribute(mml, "depth", "+" + v.substr(1));
        } else {
          NodeUtil_js_1.default.setAttribute(mml, "height", "+" + v);
        }
      }
      parser.Push(mml);
    };
    BaseMethods.MakeBig = function(parser, name, mclass, size) {
      size *= P_HEIGHT;
      var sizeStr = String(size).replace(/(\.\d\d\d).+/, "$1") + "em";
      var delim = parser.GetDelimiter(name, true);
      var mo = parser.create("token", "mo", {
        minsize: sizeStr,
        maxsize: sizeStr,
        fence: true,
        stretchy: true,
        symmetric: true
      }, delim);
      var node = parser.create("node", "TeXAtom", [mo], { texClass: mclass });
      parser.Push(node);
    };
    BaseMethods.BuildRel = function(parser, name) {
      var top = parser.ParseUpTo(name, "\\over");
      var bot = parser.ParseArg(name);
      var node = parser.create("node", "munderover");
      NodeUtil_js_1.default.setChild(node, 0, bot);
      NodeUtil_js_1.default.setChild(node, 1, null);
      NodeUtil_js_1.default.setChild(node, 2, top);
      var atom = parser.create("node", "TeXAtom", [node], { texClass: MmlNode_js_1.TEXCLASS.REL });
      parser.Push(atom);
    };
    BaseMethods.HBox = function(parser, name, style, font) {
      parser.PushAll(ParseUtil_js_1.default.internalMath(parser, parser.GetArgument(name), style, font));
    };
    BaseMethods.FBox = function(parser, name) {
      var internal = ParseUtil_js_1.default.internalMath(parser, parser.GetArgument(name));
      var node = parser.create("node", "menclose", internal, { notation: "box" });
      parser.Push(node);
    };
    BaseMethods.FrameBox = function(parser, name) {
      var width = parser.GetBrackets(name);
      var pos = parser.GetBrackets(name) || "c";
      var mml = ParseUtil_js_1.default.internalMath(parser, parser.GetArgument(name));
      if (width) {
        mml = [parser.create("node", "mpadded", mml, {
          width,
          "data-align": (0, Options_js_1.lookup)(pos, { l: "left", r: "right" }, "center")
        })];
      }
      var node = parser.create("node", "TeXAtom", [parser.create("node", "menclose", mml, { notation: "box" })], { texClass: MmlNode_js_1.TEXCLASS.ORD });
      parser.Push(node);
    };
    BaseMethods.Not = function(parser, _name) {
      parser.Push(parser.itemFactory.create("not"));
    };
    BaseMethods.Dots = function(parser, _name) {
      var ldotsEntity = NodeUtil_js_1.default.createEntity("2026");
      var cdotsEntity = NodeUtil_js_1.default.createEntity("22EF");
      var ldots = parser.create("token", "mo", { stretchy: false }, ldotsEntity);
      var cdots = parser.create("token", "mo", { stretchy: false }, cdotsEntity);
      parser.Push(parser.itemFactory.create("dots").setProperties({
        ldots,
        cdots
      }));
    };
    BaseMethods.Matrix = function(parser, _name, open, close, align, spacing, vspacing, style, cases, numbered) {
      var c = parser.GetNext();
      if (c === "") {
        throw new TexError_js_1.default("MissingArgFor", "Missing argument for %1", parser.currentCS);
      }
      if (c === "{") {
        parser.i++;
      } else {
        parser.string = c + "}" + parser.string.slice(parser.i + 1);
        parser.i = 0;
      }
      var array = parser.itemFactory.create("array").setProperty("requireClose", true);
      array.arraydef = {
        rowspacing: vspacing || "4pt",
        columnspacing: spacing || "1em"
      };
      if (cases) {
        array.setProperty("isCases", true);
      }
      if (numbered) {
        array.setProperty("isNumbered", true);
        array.arraydef.side = numbered;
      }
      if (open || close) {
        array.setProperty("open", open);
        array.setProperty("close", close);
      }
      if (style === "D") {
        array.arraydef.displaystyle = true;
      }
      if (align != null) {
        array.arraydef.columnalign = align;
      }
      parser.Push(array);
    };
    BaseMethods.Entry = function(parser, name) {
      parser.Push(parser.itemFactory.create("cell").setProperties({ isEntry: true, name }));
      var top = parser.stack.Top();
      var env = top.getProperty("casesEnv");
      var cases = top.getProperty("isCases");
      if (!cases && !env)
        return;
      var str = parser.string;
      var braces = 0, close = -1, i = parser.i, m = str.length;
      var end = env ? new RegExp("^\\\\end\\s*\\{".concat(env.replace(/\*/, "\\*"), "\\}")) : null;
      while (i < m) {
        var c = str.charAt(i);
        if (c === "{") {
          braces++;
          i++;
        } else if (c === "}") {
          if (braces === 0) {
            m = 0;
          } else {
            braces--;
            if (braces === 0 && close < 0) {
              close = i - parser.i;
            }
            i++;
          }
        } else if (c === "&" && braces === 0) {
          throw new TexError_js_1.default("ExtraAlignTab", "Extra alignment tab in \\cases text");
        } else if (c === "\\") {
          var rest = str.substr(i);
          if (rest.match(/^((\\cr)[^a-zA-Z]|\\\\)/) || end && rest.match(end)) {
            m = 0;
          } else {
            i += 2;
          }
        } else {
          i++;
        }
      }
      var text = str.substr(parser.i, i - parser.i);
      if (!text.match(/^\s*\\text[^a-zA-Z]/) || close !== text.replace(/\s+$/, "").length - 1) {
        var internal = ParseUtil_js_1.default.internalMath(parser, ParseUtil_js_1.default.trimSpaces(text), 0);
        parser.PushAll(internal);
        parser.i = i;
      }
    };
    BaseMethods.Cr = function(parser, name) {
      parser.Push(parser.itemFactory.create("cell").setProperties({ isCR: true, name }));
    };
    BaseMethods.CrLaTeX = function(parser, name, nobrackets) {
      if (nobrackets === void 0) {
        nobrackets = false;
      }
      var n;
      if (!nobrackets) {
        if (parser.string.charAt(parser.i) === "*") {
          parser.i++;
        }
        if (parser.string.charAt(parser.i) === "[") {
          var dim = parser.GetBrackets(name, "");
          var _a = __read(ParseUtil_js_1.default.matchDimen(dim), 2), value = _a[0], unit = _a[1];
          if (dim && !value) {
            throw new TexError_js_1.default("BracketMustBeDimension", "Bracket argument to %1 must be a dimension", parser.currentCS);
          }
          n = value + unit;
        }
      }
      parser.Push(parser.itemFactory.create("cell").setProperties({ isCR: true, name, linebreak: true }));
      var top = parser.stack.Top();
      var node;
      if (top instanceof sitem.ArrayItem) {
        if (n) {
          top.addRowSpacing(n);
        }
      } else {
        if (n) {
          node = parser.create("node", "mspace", [], { depth: n });
          parser.Push(node);
        }
        node = parser.create("node", "mspace", [], { linebreak: TexConstants_js_1.TexConstant.LineBreak.NEWLINE });
        parser.Push(node);
      }
    };
    BaseMethods.HLine = function(parser, _name, style) {
      if (style == null) {
        style = "solid";
      }
      var top = parser.stack.Top();
      if (!(top instanceof sitem.ArrayItem) || top.Size()) {
        throw new TexError_js_1.default("Misplaced", "Misplaced %1", parser.currentCS);
      }
      if (!top.table.length) {
        top.frame.push("top");
      } else {
        var lines = top.arraydef["rowlines"] ? top.arraydef["rowlines"].split(/ /) : [];
        while (lines.length < top.table.length) {
          lines.push("none");
        }
        lines[top.table.length - 1] = style;
        top.arraydef["rowlines"] = lines.join(" ");
      }
    };
    BaseMethods.HFill = function(parser, _name) {
      var top = parser.stack.Top();
      if (top instanceof sitem.ArrayItem) {
        top.hfill.push(top.Size());
      } else {
        throw new TexError_js_1.default("UnsupportedHFill", "Unsupported use of %1", parser.currentCS);
      }
    };
    BaseMethods.BeginEnd = function(parser, name) {
      var env = parser.GetArgument(name);
      if (env.match(/\\/i)) {
        throw new TexError_js_1.default("InvalidEnv", "Invalid environment name '%1'", env);
      }
      var macro = parser.configuration.handlers.get("environment").lookup(env);
      if (macro && name === "\\end") {
        if (!macro.args[0]) {
          var mml = parser.itemFactory.create("end").setProperty("name", env);
          parser.Push(mml);
          return;
        }
        parser.stack.env["closing"] = env;
      }
      ParseUtil_js_1.default.checkMaxMacros(parser, false);
      parser.parse("environment", [parser, env]);
    };
    BaseMethods.Array = function(parser, begin, open, close, align, spacing, vspacing, style, raggedHeight) {
      if (!align) {
        align = parser.GetArgument("\\begin{" + begin.getName() + "}");
      }
      var lines = ("c" + align).replace(/[^clr|:]/g, "").replace(/[^|:]([|:])+/g, "$1");
      align = align.replace(/[^clr]/g, "").split("").join(" ");
      align = align.replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center");
      var array = parser.itemFactory.create("array");
      array.arraydef = {
        columnalign: align,
        columnspacing: spacing || "1em",
        rowspacing: vspacing || "4pt"
      };
      if (lines.match(/[|:]/)) {
        if (lines.charAt(0).match(/[|:]/)) {
          array.frame.push("left");
          array.dashed = lines.charAt(0) === ":";
        }
        if (lines.charAt(lines.length - 1).match(/[|:]/)) {
          array.frame.push("right");
        }
        lines = lines.substr(1, lines.length - 2);
        array.arraydef.columnlines = lines.split("").join(" ").replace(/[^|: ]/g, "none").replace(/\|/g, "solid").replace(/:/g, "dashed");
      }
      if (open) {
        array.setProperty("open", parser.convertDelimiter(open));
      }
      if (close) {
        array.setProperty("close", parser.convertDelimiter(close));
      }
      if ((style || "").charAt(1) === "'") {
        array.arraydef["data-cramped"] = true;
        style = style.charAt(0);
      }
      if (style === "D") {
        array.arraydef["displaystyle"] = true;
      } else if (style) {
        array.arraydef["displaystyle"] = false;
      }
      if (style === "S") {
        array.arraydef["scriptlevel"] = 1;
      }
      if (raggedHeight) {
        array.arraydef["useHeight"] = false;
      }
      parser.Push(begin);
      return array;
    };
    BaseMethods.AlignedArray = function(parser, begin) {
      var align = parser.GetBrackets("\\begin{" + begin.getName() + "}");
      var item = BaseMethods.Array(parser, begin);
      return ParseUtil_js_1.default.setArrayAlign(item, align);
    };
    BaseMethods.Equation = function(parser, begin, numbered) {
      parser.Push(begin);
      ParseUtil_js_1.default.checkEqnEnv(parser);
      return parser.itemFactory.create("equation", numbered).setProperty("name", begin.getName());
    };
    BaseMethods.EqnArray = function(parser, begin, numbered, taggable, align, spacing) {
      parser.Push(begin);
      if (taggable) {
        ParseUtil_js_1.default.checkEqnEnv(parser);
      }
      align = align.replace(/[^clr]/g, "").split("").join(" ");
      align = align.replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center");
      var newItem = parser.itemFactory.create("eqnarray", begin.getName(), numbered, taggable, parser.stack.global);
      newItem.arraydef = {
        displaystyle: true,
        columnalign: align,
        columnspacing: spacing || "1em",
        rowspacing: "3pt",
        side: parser.options["tagSide"],
        minlabelspacing: parser.options["tagIndent"]
      };
      return newItem;
    };
    BaseMethods.HandleNoTag = function(parser, _name) {
      parser.tags.notag();
    };
    BaseMethods.HandleLabel = function(parser, name) {
      var label = parser.GetArgument(name);
      if (label === "") {
        return;
      }
      if (!parser.tags.refUpdate) {
        if (parser.tags.label) {
          throw new TexError_js_1.default("MultipleCommand", "Multiple %1", parser.currentCS);
        }
        parser.tags.label = label;
        if ((parser.tags.allLabels[label] || parser.tags.labels[label]) && !parser.options["ignoreDuplicateLabels"]) {
          throw new TexError_js_1.default("MultipleLabel", "Label '%1' multiply defined", label);
        }
        parser.tags.labels[label] = new Tags_js_1.Label();
      }
    };
    BaseMethods.HandleRef = function(parser, name, eqref) {
      var label = parser.GetArgument(name);
      var ref = parser.tags.allLabels[label] || parser.tags.labels[label];
      if (!ref) {
        if (!parser.tags.refUpdate) {
          parser.tags.redo = true;
        }
        ref = new Tags_js_1.Label();
      }
      var tag = ref.tag;
      if (eqref) {
        tag = parser.tags.formatTag(tag);
      }
      var node = parser.create("node", "mrow", ParseUtil_js_1.default.internalMath(parser, tag), {
        href: parser.tags.formatUrl(ref.id, parser.options.baseURL),
        "class": "MathJax_ref"
      });
      parser.Push(node);
    };
    BaseMethods.Macro = function(parser, name, macro, argcount, def) {
      if (argcount) {
        var args = [];
        if (def != null) {
          var optional = parser.GetBrackets(name);
          args.push(optional == null ? def : optional);
        }
        for (var i = args.length; i < argcount; i++) {
          args.push(parser.GetArgument(name));
        }
        macro = ParseUtil_js_1.default.substituteArgs(parser, args, macro);
      }
      parser.string = ParseUtil_js_1.default.addArgs(parser, macro, parser.string.slice(parser.i));
      parser.i = 0;
      ParseUtil_js_1.default.checkMaxMacros(parser);
    };
    BaseMethods.MathChoice = function(parser, name) {
      var D = parser.ParseArg(name);
      var T = parser.ParseArg(name);
      var S = parser.ParseArg(name);
      var SS = parser.ParseArg(name);
      parser.Push(parser.create("node", "MathChoice", [D, T, S, SS]));
    };
    exports.default = BaseMethods;
  }
});

// node_modules/mathjax-full/js/input/tex/ParseMethods.js
var require_ParseMethods = __commonJS({
  "node_modules/mathjax-full/js/input/tex/ParseMethods.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var NodeUtil_js_1 = __importDefault(require_NodeUtil());
    var TexConstants_js_1 = require_TexConstants();
    var ParseUtil_js_1 = __importDefault(require_ParseUtil());
    var ParseMethods;
    (function(ParseMethods2) {
      function variable(parser, c) {
        var def = ParseUtil_js_1.default.getFontDef(parser);
        var env = parser.stack.env;
        if (env.multiLetterIdentifiers && env.font !== "") {
          c = parser.string.substr(parser.i - 1).match(env.multiLetterIdentifiers)[0];
          parser.i += c.length - 1;
          if (def.mathvariant === TexConstants_js_1.TexConstant.Variant.NORMAL && env.noAutoOP && c.length > 1) {
            def.autoOP = false;
          }
        }
        var node = parser.create("token", "mi", def, c);
        parser.Push(node);
      }
      ParseMethods2.variable = variable;
      function digit(parser, c) {
        var mml;
        var pattern = parser.configuration.options["digits"];
        var n = parser.string.slice(parser.i - 1).match(pattern);
        var def = ParseUtil_js_1.default.getFontDef(parser);
        if (n) {
          mml = parser.create("token", "mn", def, n[0].replace(/[{}]/g, ""));
          parser.i += n[0].length - 1;
        } else {
          mml = parser.create("token", "mo", def, c);
        }
        parser.Push(mml);
      }
      ParseMethods2.digit = digit;
      function controlSequence(parser, _c) {
        var name = parser.GetCS();
        parser.parse("macro", [parser, name]);
      }
      ParseMethods2.controlSequence = controlSequence;
      function mathchar0mi(parser, mchar) {
        var def = mchar.attributes || { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC };
        var node = parser.create("token", "mi", def, mchar.char);
        parser.Push(node);
      }
      ParseMethods2.mathchar0mi = mathchar0mi;
      function mathchar0mo(parser, mchar) {
        var def = mchar.attributes || {};
        def["stretchy"] = false;
        var node = parser.create("token", "mo", def, mchar.char);
        NodeUtil_js_1.default.setProperty(node, "fixStretchy", true);
        parser.configuration.addNode("fixStretchy", node);
        parser.Push(node);
      }
      ParseMethods2.mathchar0mo = mathchar0mo;
      function mathchar7(parser, mchar) {
        var def = mchar.attributes || { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL };
        if (parser.stack.env["font"]) {
          def["mathvariant"] = parser.stack.env["font"];
        }
        var node = parser.create("token", "mi", def, mchar.char);
        parser.Push(node);
      }
      ParseMethods2.mathchar7 = mathchar7;
      function delimiter(parser, delim) {
        var def = delim.attributes || {};
        def = Object.assign({ fence: false, stretchy: false }, def);
        var node = parser.create("token", "mo", def, delim.char);
        parser.Push(node);
      }
      ParseMethods2.delimiter = delimiter;
      function environment(parser, env, func, args) {
        var end = args[0];
        var mml = parser.itemFactory.create("begin").setProperties({ name: env, end });
        mml = func.apply(void 0, __spreadArray([parser, mml], __read(args.slice(1)), false));
        parser.Push(mml);
      }
      ParseMethods2.environment = environment;
    })(ParseMethods || (ParseMethods = {}));
    exports.default = ParseMethods;
  }
});

// node_modules/mathjax-full/js/input/tex/base/BaseMappings.js
var require_BaseMappings = __commonJS({
  "node_modules/mathjax-full/js/input/tex/base/BaseMappings.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var sm = __importStar(require_SymbolMap());
    var TexConstants_js_1 = require_TexConstants();
    var BaseMethods_js_1 = __importDefault(require_BaseMethods());
    var ParseMethods_js_1 = __importDefault(require_ParseMethods());
    var ParseUtil_js_1 = __importDefault(require_ParseUtil());
    var MmlNode_js_1 = require_MmlNode();
    var lengths_js_1 = require_lengths();
    new sm.RegExpMap("letter", ParseMethods_js_1.default.variable, /[a-z]/i);
    new sm.RegExpMap("digit", ParseMethods_js_1.default.digit, /[0-9.,]/);
    new sm.RegExpMap("command", ParseMethods_js_1.default.controlSequence, /^\\/);
    new sm.MacroMap("special", {
      "{": "Open",
      "}": "Close",
      "~": "Tilde",
      "^": "Superscript",
      "_": "Subscript",
      " ": "Space",
      "	": "Space",
      "\r": "Space",
      "\n": "Space",
      "'": "Prime",
      "%": "Comment",
      "&": "Entry",
      "#": "Hash",
      " ": "Space",
      "’": "Prime"
    }, BaseMethods_js_1.default);
    new sm.CharacterMap("mathchar0mi", ParseMethods_js_1.default.mathchar0mi, {
      alpha: "α",
      beta: "β",
      gamma: "γ",
      delta: "δ",
      epsilon: "ϵ",
      zeta: "ζ",
      eta: "η",
      theta: "θ",
      iota: "ι",
      kappa: "κ",
      lambda: "λ",
      mu: "μ",
      nu: "ν",
      xi: "ξ",
      omicron: "ο",
      pi: "π",
      rho: "ρ",
      sigma: "σ",
      tau: "τ",
      upsilon: "υ",
      phi: "ϕ",
      chi: "χ",
      psi: "ψ",
      omega: "ω",
      varepsilon: "ε",
      vartheta: "ϑ",
      varpi: "ϖ",
      varrho: "ϱ",
      varsigma: "ς",
      varphi: "φ",
      S: ["§", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      aleph: ["ℵ", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      hbar: ["ℏ", { variantForm: true }],
      imath: "ı",
      jmath: "ȷ",
      ell: "ℓ",
      wp: ["℘", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      Re: ["ℜ", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      Im: ["ℑ", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      partial: ["∂", { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
      infty: ["∞", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      prime: ["′", { variantForm: true }],
      emptyset: ["∅", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      nabla: ["∇", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      top: ["⊤", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      bot: ["⊥", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      angle: ["∠", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      triangle: ["△", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      backslash: ["∖", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      forall: ["∀", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      exists: ["∃", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      neg: ["¬", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      lnot: ["¬", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      flat: ["♭", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      natural: ["♮", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      sharp: ["♯", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      clubsuit: ["♣", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      diamondsuit: ["♢", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      heartsuit: ["♡", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
      spadesuit: ["♠", { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }]
    });
    new sm.CharacterMap("mathchar0mo", ParseMethods_js_1.default.mathchar0mo, {
      surd: "√",
      coprod: ["∐", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      bigvee: ["⋁", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      bigwedge: ["⋀", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      biguplus: ["⨄", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      bigcap: ["⋂", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      bigcup: ["⋃", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      "int": ["∫", { texClass: MmlNode_js_1.TEXCLASS.OP }],
      intop: ["∫", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true,
        movablelimits: true
      }],
      iint: ["∬", { texClass: MmlNode_js_1.TEXCLASS.OP }],
      iiint: ["∭", { texClass: MmlNode_js_1.TEXCLASS.OP }],
      prod: ["∏", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      sum: ["∑", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      bigotimes: ["⨂", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      bigoplus: ["⨁", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      bigodot: ["⨀", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      oint: ["∮", { texClass: MmlNode_js_1.TEXCLASS.OP }],
      bigsqcup: ["⨆", {
        texClass: MmlNode_js_1.TEXCLASS.OP,
        movesupsub: true
      }],
      smallint: ["∫", { largeop: false }],
      triangleleft: "◃",
      triangleright: "▹",
      bigtriangleup: "△",
      bigtriangledown: "▽",
      wedge: "∧",
      land: "∧",
      vee: "∨",
      lor: "∨",
      cap: "∩",
      cup: "∪",
      ddagger: "‡",
      dagger: "†",
      sqcap: "⊓",
      sqcup: "⊔",
      uplus: "⊎",
      amalg: "⨿",
      diamond: "⋄",
      bullet: "∙",
      wr: "≀",
      div: "÷",
      divsymbol: "÷",
      odot: ["⊙", { largeop: false }],
      oslash: ["⊘", { largeop: false }],
      otimes: ["⊗", { largeop: false }],
      ominus: ["⊖", { largeop: false }],
      oplus: ["⊕", { largeop: false }],
      mp: "∓",
      pm: "±",
      circ: "∘",
      bigcirc: "◯",
      setminus: "∖",
      cdot: "⋅",
      ast: "∗",
      times: "×",
      star: "⋆",
      propto: "∝",
      sqsubseteq: "⊑",
      sqsupseteq: "⊒",
      parallel: "∥",
      mid: "∣",
      dashv: "⊣",
      vdash: "⊢",
      leq: "≤",
      le: "≤",
      geq: "≥",
      ge: "≥",
      lt: "<",
      gt: ">",
      succ: "≻",
      prec: "≺",
      approx: "≈",
      succeq: "⪰",
      preceq: "⪯",
      supset: "⊃",
      subset: "⊂",
      supseteq: "⊇",
      subseteq: "⊆",
      "in": "∈",
      ni: "∋",
      notin: "∉",
      owns: "∋",
      gg: "≫",
      ll: "≪",
      sim: "∼",
      simeq: "≃",
      perp: "⊥",
      equiv: "≡",
      asymp: "≍",
      smile: "⌣",
      frown: "⌢",
      ne: "≠",
      neq: "≠",
      cong: "≅",
      doteq: "≐",
      bowtie: "⋈",
      models: "⊨",
      notChar: "⧸",
      Leftrightarrow: "⇔",
      Leftarrow: "⇐",
      Rightarrow: "⇒",
      leftrightarrow: "↔",
      leftarrow: "←",
      gets: "←",
      rightarrow: "→",
      to: ["→", { accent: false }],
      mapsto: "↦",
      leftharpoonup: "↼",
      leftharpoondown: "↽",
      rightharpoonup: "⇀",
      rightharpoondown: "⇁",
      nearrow: "↗",
      searrow: "↘",
      nwarrow: "↖",
      swarrow: "↙",
      rightleftharpoons: "⇌",
      hookrightarrow: "↪",
      hookleftarrow: "↩",
      longleftarrow: "⟵",
      Longleftarrow: "⟸",
      longrightarrow: "⟶",
      Longrightarrow: "⟹",
      Longleftrightarrow: "⟺",
      longleftrightarrow: "⟷",
      longmapsto: "⟼",
      ldots: "…",
      cdots: "⋯",
      vdots: "⋮",
      ddots: "⋱",
      dotsc: "…",
      dotsb: "⋯",
      dotsm: "⋯",
      dotsi: "⋯",
      dotso: "…",
      ldotp: [".", { texClass: MmlNode_js_1.TEXCLASS.PUNCT }],
      cdotp: ["⋅", { texClass: MmlNode_js_1.TEXCLASS.PUNCT }],
      colon: [":", { texClass: MmlNode_js_1.TEXCLASS.PUNCT }]
    });
    new sm.CharacterMap("mathchar7", ParseMethods_js_1.default.mathchar7, {
      Gamma: "Γ",
      Delta: "Δ",
      Theta: "Θ",
      Lambda: "Λ",
      Xi: "Ξ",
      Pi: "Π",
      Sigma: "Σ",
      Upsilon: "Υ",
      Phi: "Φ",
      Psi: "Ψ",
      Omega: "Ω",
      "_": "_",
      "#": "#",
      "$": "$",
      "%": "%",
      "&": "&",
      And: "&"
    });
    new sm.DelimiterMap("delimiter", ParseMethods_js_1.default.delimiter, {
      "(": "(",
      ")": ")",
      "[": "[",
      "]": "]",
      "<": "⟨",
      ">": "⟩",
      "\\lt": "⟨",
      "\\gt": "⟩",
      "/": "/",
      "|": ["|", { texClass: MmlNode_js_1.TEXCLASS.ORD }],
      ".": "",
      "\\\\": "\\",
      "\\lmoustache": "⎰",
      "\\rmoustache": "⎱",
      "\\lgroup": "⟮",
      "\\rgroup": "⟯",
      "\\arrowvert": "⏐",
      "\\Arrowvert": "‖",
      "\\bracevert": "⎪",
      "\\Vert": ["‖", { texClass: MmlNode_js_1.TEXCLASS.ORD }],
      "\\|": ["‖", { texClass: MmlNode_js_1.TEXCLASS.ORD }],
      "\\vert": ["|", { texClass: MmlNode_js_1.TEXCLASS.ORD }],
      "\\uparrow": "↑",
      "\\downarrow": "↓",
      "\\updownarrow": "↕",
      "\\Uparrow": "⇑",
      "\\Downarrow": "⇓",
      "\\Updownarrow": "⇕",
      "\\backslash": "\\",
      "\\rangle": "⟩",
      "\\langle": "⟨",
      "\\rbrace": "}",
      "\\lbrace": "{",
      "\\}": "}",
      "\\{": "{",
      "\\rceil": "⌉",
      "\\lceil": "⌈",
      "\\rfloor": "⌋",
      "\\lfloor": "⌊",
      "\\lbrack": "[",
      "\\rbrack": "]"
    });
    new sm.CommandMap("macros", {
      displaystyle: ["SetStyle", "D", true, 0],
      textstyle: ["SetStyle", "T", false, 0],
      scriptstyle: ["SetStyle", "S", false, 1],
      scriptscriptstyle: ["SetStyle", "SS", false, 2],
      rm: ["SetFont", TexConstants_js_1.TexConstant.Variant.NORMAL],
      mit: ["SetFont", TexConstants_js_1.TexConstant.Variant.ITALIC],
      oldstyle: ["SetFont", TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
      cal: ["SetFont", TexConstants_js_1.TexConstant.Variant.CALLIGRAPHIC],
      it: ["SetFont", TexConstants_js_1.TexConstant.Variant.MATHITALIC],
      bf: ["SetFont", TexConstants_js_1.TexConstant.Variant.BOLD],
      bbFont: ["SetFont", TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK],
      scr: ["SetFont", TexConstants_js_1.TexConstant.Variant.SCRIPT],
      frak: ["SetFont", TexConstants_js_1.TexConstant.Variant.FRAKTUR],
      sf: ["SetFont", TexConstants_js_1.TexConstant.Variant.SANSSERIF],
      tt: ["SetFont", TexConstants_js_1.TexConstant.Variant.MONOSPACE],
      mathrm: ["MathFont", TexConstants_js_1.TexConstant.Variant.NORMAL],
      mathup: ["MathFont", TexConstants_js_1.TexConstant.Variant.NORMAL],
      mathnormal: ["MathFont", ""],
      mathbf: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLD],
      mathbfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLD],
      mathit: ["MathFont", TexConstants_js_1.TexConstant.Variant.MATHITALIC],
      mathbfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDITALIC],
      mathbb: ["MathFont", TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK],
      Bbb: ["MathFont", TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK],
      mathfrak: ["MathFont", TexConstants_js_1.TexConstant.Variant.FRAKTUR],
      mathbffrak: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDFRAKTUR],
      mathscr: ["MathFont", TexConstants_js_1.TexConstant.Variant.SCRIPT],
      mathbfscr: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSCRIPT],
      mathsf: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIF],
      mathsfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIF],
      mathbfsf: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSANSSERIF],
      mathbfsfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSANSSERIF],
      mathsfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIFITALIC],
      mathbfsfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIFBOLDITALIC],
      mathtt: ["MathFont", TexConstants_js_1.TexConstant.Variant.MONOSPACE],
      mathcal: ["MathFont", TexConstants_js_1.TexConstant.Variant.CALLIGRAPHIC],
      mathbfcal: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDCALLIGRAPHIC],
      symrm: ["MathFont", TexConstants_js_1.TexConstant.Variant.NORMAL],
      symup: ["MathFont", TexConstants_js_1.TexConstant.Variant.NORMAL],
      symnormal: ["MathFont", ""],
      symbf: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLD],
      symbfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLD],
      symit: ["MathFont", TexConstants_js_1.TexConstant.Variant.ITALIC],
      symbfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDITALIC],
      symbb: ["MathFont", TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK],
      symfrak: ["MathFont", TexConstants_js_1.TexConstant.Variant.FRAKTUR],
      symbffrak: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDFRAKTUR],
      symscr: ["MathFont", TexConstants_js_1.TexConstant.Variant.SCRIPT],
      symbfscr: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSCRIPT],
      symsf: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIF],
      symsfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIF],
      symbfsf: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSANSSERIF],
      symbfsfup: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDSANSSERIF],
      symsfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIFITALIC],
      symbfsfit: ["MathFont", TexConstants_js_1.TexConstant.Variant.SANSSERIFBOLDITALIC],
      symtt: ["MathFont", TexConstants_js_1.TexConstant.Variant.MONOSPACE],
      symcal: ["MathFont", TexConstants_js_1.TexConstant.Variant.CALLIGRAPHIC],
      symbfcal: ["MathFont", TexConstants_js_1.TexConstant.Variant.BOLDCALLIGRAPHIC],
      textrm: ["HBox", null, TexConstants_js_1.TexConstant.Variant.NORMAL],
      textup: ["HBox", null, TexConstants_js_1.TexConstant.Variant.NORMAL],
      textnormal: ["HBox"],
      textit: ["HBox", null, TexConstants_js_1.TexConstant.Variant.ITALIC],
      textbf: ["HBox", null, TexConstants_js_1.TexConstant.Variant.BOLD],
      textsf: ["HBox", null, TexConstants_js_1.TexConstant.Variant.SANSSERIF],
      texttt: ["HBox", null, TexConstants_js_1.TexConstant.Variant.MONOSPACE],
      tiny: ["SetSize", 0.5],
      Tiny: ["SetSize", 0.6],
      scriptsize: ["SetSize", 0.7],
      small: ["SetSize", 0.85],
      normalsize: ["SetSize", 1],
      large: ["SetSize", 1.2],
      Large: ["SetSize", 1.44],
      LARGE: ["SetSize", 1.73],
      huge: ["SetSize", 2.07],
      Huge: ["SetSize", 2.49],
      arcsin: "NamedFn",
      arccos: "NamedFn",
      arctan: "NamedFn",
      arg: "NamedFn",
      cos: "NamedFn",
      cosh: "NamedFn",
      cot: "NamedFn",
      coth: "NamedFn",
      csc: "NamedFn",
      deg: "NamedFn",
      det: "NamedOp",
      dim: "NamedFn",
      exp: "NamedFn",
      gcd: "NamedOp",
      hom: "NamedFn",
      inf: "NamedOp",
      ker: "NamedFn",
      lg: "NamedFn",
      lim: "NamedOp",
      liminf: ["NamedOp", "lim&thinsp;inf"],
      limsup: ["NamedOp", "lim&thinsp;sup"],
      ln: "NamedFn",
      log: "NamedFn",
      max: "NamedOp",
      min: "NamedOp",
      Pr: "NamedOp",
      sec: "NamedFn",
      sin: "NamedFn",
      sinh: "NamedFn",
      sup: "NamedOp",
      tan: "NamedFn",
      tanh: "NamedFn",
      limits: ["Limits", 1],
      nolimits: ["Limits", 0],
      overline: ["UnderOver", "2015"],
      underline: ["UnderOver", "2015"],
      overbrace: ["UnderOver", "23DE", 1],
      underbrace: ["UnderOver", "23DF", 1],
      overparen: ["UnderOver", "23DC"],
      underparen: ["UnderOver", "23DD"],
      overrightarrow: ["UnderOver", "2192"],
      underrightarrow: ["UnderOver", "2192"],
      overleftarrow: ["UnderOver", "2190"],
      underleftarrow: ["UnderOver", "2190"],
      overleftrightarrow: ["UnderOver", "2194"],
      underleftrightarrow: ["UnderOver", "2194"],
      overset: "Overset",
      underset: "Underset",
      overunderset: "Overunderset",
      stackrel: ["Macro", "\\mathrel{\\mathop{#2}\\limits^{#1}}", 2],
      stackbin: ["Macro", "\\mathbin{\\mathop{#2}\\limits^{#1}}", 2],
      over: "Over",
      overwithdelims: "Over",
      atop: "Over",
      atopwithdelims: "Over",
      above: "Over",
      abovewithdelims: "Over",
      brace: ["Over", "{", "}"],
      brack: ["Over", "[", "]"],
      choose: ["Over", "(", ")"],
      frac: "Frac",
      sqrt: "Sqrt",
      root: "Root",
      uproot: ["MoveRoot", "upRoot"],
      leftroot: ["MoveRoot", "leftRoot"],
      left: "LeftRight",
      right: "LeftRight",
      middle: "LeftRight",
      llap: "Lap",
      rlap: "Lap",
      raise: "RaiseLower",
      lower: "RaiseLower",
      moveleft: "MoveLeftRight",
      moveright: "MoveLeftRight",
      ",": ["Spacer", lengths_js_1.MATHSPACE.thinmathspace],
      ":": ["Spacer", lengths_js_1.MATHSPACE.mediummathspace],
      ">": ["Spacer", lengths_js_1.MATHSPACE.mediummathspace],
      ";": ["Spacer", lengths_js_1.MATHSPACE.thickmathspace],
      "!": ["Spacer", lengths_js_1.MATHSPACE.negativethinmathspace],
      enspace: ["Spacer", 0.5],
      quad: ["Spacer", 1],
      qquad: ["Spacer", 2],
      thinspace: ["Spacer", lengths_js_1.MATHSPACE.thinmathspace],
      negthinspace: ["Spacer", lengths_js_1.MATHSPACE.negativethinmathspace],
      hskip: "Hskip",
      hspace: "Hskip",
      kern: "Hskip",
      mskip: "Hskip",
      mspace: "Hskip",
      mkern: "Hskip",
      rule: "rule",
      Rule: ["Rule"],
      Space: ["Rule", "blank"],
      nonscript: "Nonscript",
      big: ["MakeBig", MmlNode_js_1.TEXCLASS.ORD, 0.85],
      Big: ["MakeBig", MmlNode_js_1.TEXCLASS.ORD, 1.15],
      bigg: ["MakeBig", MmlNode_js_1.TEXCLASS.ORD, 1.45],
      Bigg: ["MakeBig", MmlNode_js_1.TEXCLASS.ORD, 1.75],
      bigl: ["MakeBig", MmlNode_js_1.TEXCLASS.OPEN, 0.85],
      Bigl: ["MakeBig", MmlNode_js_1.TEXCLASS.OPEN, 1.15],
      biggl: ["MakeBig", MmlNode_js_1.TEXCLASS.OPEN, 1.45],
      Biggl: ["MakeBig", MmlNode_js_1.TEXCLASS.OPEN, 1.75],
      bigr: ["MakeBig", MmlNode_js_1.TEXCLASS.CLOSE, 0.85],
      Bigr: ["MakeBig", MmlNode_js_1.TEXCLASS.CLOSE, 1.15],
      biggr: ["MakeBig", MmlNode_js_1.TEXCLASS.CLOSE, 1.45],
      Biggr: ["MakeBig", MmlNode_js_1.TEXCLASS.CLOSE, 1.75],
      bigm: ["MakeBig", MmlNode_js_1.TEXCLASS.REL, 0.85],
      Bigm: ["MakeBig", MmlNode_js_1.TEXCLASS.REL, 1.15],
      biggm: ["MakeBig", MmlNode_js_1.TEXCLASS.REL, 1.45],
      Biggm: ["MakeBig", MmlNode_js_1.TEXCLASS.REL, 1.75],
      mathord: ["TeXAtom", MmlNode_js_1.TEXCLASS.ORD],
      mathop: ["TeXAtom", MmlNode_js_1.TEXCLASS.OP],
      mathopen: ["TeXAtom", MmlNode_js_1.TEXCLASS.OPEN],
      mathclose: ["TeXAtom", MmlNode_js_1.TEXCLASS.CLOSE],
      mathbin: ["TeXAtom", MmlNode_js_1.TEXCLASS.BIN],
      mathrel: ["TeXAtom", MmlNode_js_1.TEXCLASS.REL],
      mathpunct: ["TeXAtom", MmlNode_js_1.TEXCLASS.PUNCT],
      mathinner: ["TeXAtom", MmlNode_js_1.TEXCLASS.INNER],
      vcenter: ["TeXAtom", MmlNode_js_1.TEXCLASS.VCENTER],
      buildrel: "BuildRel",
      hbox: ["HBox", 0],
      text: "HBox",
      mbox: ["HBox", 0],
      fbox: "FBox",
      boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1],
      framebox: "FrameBox",
      strut: "Strut",
      mathstrut: ["Macro", "\\vphantom{(}"],
      phantom: "Phantom",
      vphantom: ["Phantom", 1, 0],
      hphantom: ["Phantom", 0, 1],
      smash: "Smash",
      acute: ["Accent", "00B4"],
      grave: ["Accent", "0060"],
      ddot: ["Accent", "00A8"],
      tilde: ["Accent", "007E"],
      bar: ["Accent", "00AF"],
      breve: ["Accent", "02D8"],
      check: ["Accent", "02C7"],
      hat: ["Accent", "005E"],
      vec: ["Accent", "2192"],
      dot: ["Accent", "02D9"],
      widetilde: ["Accent", "007E", 1],
      widehat: ["Accent", "005E", 1],
      matrix: "Matrix",
      array: "Matrix",
      pmatrix: ["Matrix", "(", ")"],
      cases: [
        "Matrix",
        "{",
        "",
        "left left",
        null,
        ".1em",
        null,
        true
      ],
      eqalign: [
        "Matrix",
        null,
        null,
        "right left",
        (0, lengths_js_1.em)(lengths_js_1.MATHSPACE.thickmathspace),
        ".5em",
        "D"
      ],
      displaylines: ["Matrix", null, null, "center", null, ".5em", "D"],
      cr: "Cr",
      "\\": "CrLaTeX",
      newline: ["CrLaTeX", true],
      hline: ["HLine", "solid"],
      hdashline: ["HLine", "dashed"],
      eqalignno: [
        "Matrix",
        null,
        null,
        "right left",
        (0, lengths_js_1.em)(lengths_js_1.MATHSPACE.thickmathspace),
        ".5em",
        "D",
        null,
        "right"
      ],
      leqalignno: [
        "Matrix",
        null,
        null,
        "right left",
        (0, lengths_js_1.em)(lengths_js_1.MATHSPACE.thickmathspace),
        ".5em",
        "D",
        null,
        "left"
      ],
      hfill: "HFill",
      hfil: "HFill",
      hfilll: "HFill",
      bmod: ["Macro", '\\mmlToken{mo}[lspace="thickmathspace" rspace="thickmathspace"]{mod}'],
      pmod: ["Macro", "\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}", 1],
      mod: [
        "Macro",
        "\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1",
        1
      ],
      pod: ["Macro", "\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)", 1],
      iff: ["Macro", "\\;\\Longleftrightarrow\\;"],
      skew: ["Macro", "{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}", 3],
      pmb: ["Macro", "\\rlap{#1}\\kern1px{#1}", 1],
      TeX: ["Macro", "T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"],
      LaTeX: ["Macro", "L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX"],
      " ": ["Macro", "\\text{ }"],
      not: "Not",
      dots: "Dots",
      space: "Tilde",
      " ": "Tilde",
      begin: "BeginEnd",
      end: "BeginEnd",
      label: "HandleLabel",
      ref: "HandleRef",
      nonumber: "HandleNoTag",
      mathchoice: "MathChoice",
      mmlToken: "MmlToken"
    }, BaseMethods_js_1.default);
    new sm.EnvironmentMap("environment", ParseMethods_js_1.default.environment, {
      array: ["AlignedArray"],
      equation: ["Equation", null, true],
      eqnarray: [
        "EqnArray",
        null,
        true,
        true,
        "rcl",
        ParseUtil_js_1.default.cols(0, lengths_js_1.MATHSPACE.thickmathspace),
        ".5em"
      ]
    }, BaseMethods_js_1.default);
    new sm.CharacterMap("not_remap", null, {
      "←": "↚",
      "→": "↛",
      "↔": "↮",
      "⇐": "⇍",
      "⇒": "⇏",
      "⇔": "⇎",
      "∈": "∉",
      "∋": "∌",
      "∣": "∤",
      "∥": "∦",
      "∼": "≁",
      "~": "≁",
      "≃": "≄",
      "≅": "≇",
      "≈": "≉",
      "≍": "≭",
      "=": "≠",
      "≡": "≢",
      "<": "≮",
      ">": "≯",
      "≤": "≰",
      "≥": "≱",
      "≲": "≴",
      "≳": "≵",
      "≶": "≸",
      "≷": "≹",
      "≺": "⊀",
      "≻": "⊁",
      "⊂": "⊄",
      "⊃": "⊅",
      "⊆": "⊈",
      "⊇": "⊉",
      "⊢": "⊬",
      "⊨": "⊭",
      "⊩": "⊮",
      "⊫": "⊯",
      "≼": "⋠",
      "≽": "⋡",
      "⊑": "⋢",
      "⊒": "⋣",
      "⊲": "⋪",
      "⊳": "⋫",
      "⊴": "⋬",
      "⊵": "⋭",
      "∃": "∄"
    });
  }
});

// node_modules/mathjax-full/js/input/tex/base/BaseConfiguration.js
var require_BaseConfiguration = __commonJS({
  "node_modules/mathjax-full/js/input/tex/base/BaseConfiguration.js"(exports) {
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
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseConfiguration = exports.BaseTags = exports.Other = void 0;
    var Configuration_js_1 = require_Configuration();
    var MapHandler_js_1 = require_MapHandler();
    var TexError_js_1 = __importDefault(require_TexError());
    var NodeUtil_js_1 = __importDefault(require_NodeUtil());
    var SymbolMap_js_1 = require_SymbolMap();
    var bitem = __importStar(require_BaseItems());
    var Tags_js_1 = require_Tags();
    require_BaseMappings();
    var OperatorDictionary_js_1 = require_OperatorDictionary();
    new SymbolMap_js_1.CharacterMap("remap", null, {
      "-": "−",
      "*": "∗",
      "`": "‘"
    });
    function Other(parser, char) {
      var font = parser.stack.env["font"];
      var def = font ? { mathvariant: parser.stack.env["font"] } : {};
      var remap = MapHandler_js_1.MapHandler.getMap("remap").lookup(char);
      var range = (0, OperatorDictionary_js_1.getRange)(char);
      var type = range ? range[3] : "mo";
      var mo = parser.create("token", type, def, remap ? remap.char : char);
      range[4] && mo.attributes.set("mathvariant", range[4]);
      if (type === "mo") {
        NodeUtil_js_1.default.setProperty(mo, "fixStretchy", true);
        parser.configuration.addNode("fixStretchy", mo);
      }
      parser.Push(mo);
    }
    exports.Other = Other;
    function csUndefined(_parser, name) {
      throw new TexError_js_1.default("UndefinedControlSequence", "Undefined control sequence %1", "\\" + name);
    }
    function envUndefined(_parser, env) {
      throw new TexError_js_1.default("UnknownEnv", "Unknown environment '%1'", env);
    }
    function filterNonscript(_a2) {
      var e_1, _b;
      var data = _a2.data;
      try {
        for (var _c = __values(data.getList("nonscript")), _d = _c.next(); !_d.done; _d = _c.next()) {
          var mml = _d.value;
          if (mml.attributes.get("scriptlevel") > 0) {
            var parent_1 = mml.parent;
            parent_1.childNodes.splice(parent_1.childIndex(mml), 1);
            data.removeFromList(mml.kind, [mml]);
            if (mml.isKind("mrow")) {
              var mstyle = mml.childNodes[0];
              data.removeFromList("mstyle", [mstyle]);
              data.removeFromList("mspace", mstyle.childNodes[0].childNodes);
            }
          } else if (mml.isKind("mrow")) {
            mml.parent.replaceChild(mml.childNodes[0], mml);
            data.removeFromList("mrow", [mml]);
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
    }
    var BaseTags = function(_super) {
      __extends(BaseTags2, _super);
      function BaseTags2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      return BaseTags2;
    }(Tags_js_1.AbstractTags);
    exports.BaseTags = BaseTags;
    exports.BaseConfiguration = Configuration_js_1.Configuration.create("base", {
      handler: {
        character: ["command", "special", "letter", "digit"],
        delimiter: ["delimiter"],
        macro: ["delimiter", "macros", "mathchar0mi", "mathchar0mo", "mathchar7"],
        environment: ["environment"]
      },
      fallback: {
        character: Other,
        macro: csUndefined,
        environment: envUndefined
      },
      items: (_a = {}, _a[bitem.StartItem.prototype.kind] = bitem.StartItem, _a[bitem.StopItem.prototype.kind] = bitem.StopItem, _a[bitem.OpenItem.prototype.kind] = bitem.OpenItem, _a[bitem.CloseItem.prototype.kind] = bitem.CloseItem, _a[bitem.PrimeItem.prototype.kind] = bitem.PrimeItem, _a[bitem.SubsupItem.prototype.kind] = bitem.SubsupItem, _a[bitem.OverItem.prototype.kind] = bitem.OverItem, _a[bitem.LeftItem.prototype.kind] = bitem.LeftItem, _a[bitem.Middle.prototype.kind] = bitem.Middle, _a[bitem.RightItem.prototype.kind] = bitem.RightItem, _a[bitem.BeginItem.prototype.kind] = bitem.BeginItem, _a[bitem.EndItem.prototype.kind] = bitem.EndItem, _a[bitem.StyleItem.prototype.kind] = bitem.StyleItem, _a[bitem.PositionItem.prototype.kind] = bitem.PositionItem, _a[bitem.CellItem.prototype.kind] = bitem.CellItem, _a[bitem.MmlItem.prototype.kind] = bitem.MmlItem, _a[bitem.FnItem.prototype.kind] = bitem.FnItem, _a[bitem.NotItem.prototype.kind] = bitem.NotItem, _a[bitem.NonscriptItem.prototype.kind] = bitem.NonscriptItem, _a[bitem.DotsItem.prototype.kind] = bitem.DotsItem, _a[bitem.ArrayItem.prototype.kind] = bitem.ArrayItem, _a[bitem.EqnArrayItem.prototype.kind] = bitem.EqnArrayItem, _a[bitem.EquationItem.prototype.kind] = bitem.EquationItem, _a),
      options: {
        maxMacros: 1e3,
        baseURL: typeof document === "undefined" || document.getElementsByTagName("base").length === 0 ? "" : String(document.location).replace(/#.*$/, "")
      },
      tags: {
        base: BaseTags
      },
      postprocessors: [[filterNonscript, -4]]
    });
  }
});

export {
  require_NodeUtil,
  require_TexError,
  require_Entities,
  require_ParseUtil,
  require_Stack,
  require_TexParser,
  require_StackItem,
  require_NodeFactory,
  require_ParseOptions,
  require_Tags,
  require_Configuration,
  require_Symbol,
  require_SymbolMap,
  require_BaseItems,
  require_TexConstants,
  require_BaseMethods,
  require_ParseMethods,
  require_BaseConfiguration
};
//# sourceMappingURL=chunk-4JPPKEGY.js.map
