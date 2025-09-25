import {
  __commonJS
} from "./chunk-DLJ4GP37.js";

// node_modules/mathjax-full/js/util/lengths.js
var require_lengths = __commonJS({
  "node_modules/mathjax-full/js/util/lengths.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.px = exports.emRounded = exports.em = exports.percent = exports.length2em = exports.MATHSPACE = exports.RELUNITS = exports.UNITS = exports.BIGDIMEN = void 0;
    exports.BIGDIMEN = 1e6;
    exports.UNITS = {
      px: 1,
      "in": 96,
      cm: 96 / 2.54,
      mm: 96 / 25.4
    };
    exports.RELUNITS = {
      em: 1,
      ex: 0.431,
      pt: 1 / 10,
      pc: 12 / 10,
      mu: 1 / 18
    };
    exports.MATHSPACE = {
      veryverythinmathspace: 1 / 18,
      verythinmathspace: 2 / 18,
      thinmathspace: 3 / 18,
      mediummathspace: 4 / 18,
      thickmathspace: 5 / 18,
      verythickmathspace: 6 / 18,
      veryverythickmathspace: 7 / 18,
      negativeveryverythinmathspace: -1 / 18,
      negativeverythinmathspace: -2 / 18,
      negativethinmathspace: -3 / 18,
      negativemediummathspace: -4 / 18,
      negativethickmathspace: -5 / 18,
      negativeverythickmathspace: -6 / 18,
      negativeveryverythickmathspace: -7 / 18,
      thin: 0.04,
      medium: 0.06,
      thick: 0.1,
      normal: 1,
      big: 2,
      small: 1 / Math.sqrt(2),
      infinity: exports.BIGDIMEN
    };
    function length2em(length, size, scale, em2) {
      if (size === void 0) {
        size = 0;
      }
      if (scale === void 0) {
        scale = 1;
      }
      if (em2 === void 0) {
        em2 = 16;
      }
      if (typeof length !== "string") {
        length = String(length);
      }
      if (length === "" || length == null) {
        return size;
      }
      if (exports.MATHSPACE[length]) {
        return exports.MATHSPACE[length];
      }
      var match = length.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/);
      if (!match) {
        return size;
      }
      var m = parseFloat(match[1] || "1"), unit = match[2];
      if (exports.UNITS.hasOwnProperty(unit)) {
        return m * exports.UNITS[unit] / em2 / scale;
      }
      if (exports.RELUNITS.hasOwnProperty(unit)) {
        return m * exports.RELUNITS[unit];
      }
      if (unit === "%") {
        return m / 100 * size;
      }
      return m * size;
    }
    exports.length2em = length2em;
    function percent(m) {
      return (100 * m).toFixed(1).replace(/\.?0+$/, "") + "%";
    }
    exports.percent = percent;
    function em(m) {
      if (Math.abs(m) < 1e-3)
        return "0";
      return m.toFixed(3).replace(/\.?0+$/, "") + "em";
    }
    exports.em = em;
    function emRounded(m, em2) {
      if (em2 === void 0) {
        em2 = 16;
      }
      m = (Math.round(m * em2) + 0.05) / em2;
      if (Math.abs(m) < 1e-3)
        return "0em";
      return m.toFixed(3).replace(/\.?0+$/, "") + "em";
    }
    exports.emRounded = emRounded;
    function px(m, M, em2) {
      if (M === void 0) {
        M = -exports.BIGDIMEN;
      }
      if (em2 === void 0) {
        em2 = 16;
      }
      m *= em2;
      if (M && m < M)
        m = M;
      if (Math.abs(m) < 0.1)
        return "0";
      return m.toFixed(1).replace(/\.0$/, "") + "px";
    }
    exports.px = px;
  }
});

export {
  require_lengths
};
//# sourceMappingURL=chunk-H7B5EP6A.js.map
