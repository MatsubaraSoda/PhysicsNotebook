import {
  parse
} from "./chunk-IFMCV7OS.js";
import "./chunk-ODBSCUQ2.js";
import "./chunk-BQJ53AME.js";
import "./chunk-W7YMX5HA.js";
import "./chunk-WFO3HW65.js";
import "./chunk-WNVO6JFR.js";
import "./chunk-SLY7KJG4.js";
import "./chunk-6B7BZQDJ.js";
import "./chunk-OPWGNGDZ.js";
import {
  package_default
} from "./chunk-CYZEP6VJ.js";
import {
  selectSvgElement
} from "./chunk-5ZGLDYYF.js";
import "./chunk-W4C6O4J6.js";
import "./chunk-2VRVB2MD.js";
import {
  __name,
  configureSvgSize,
  log
} from "./chunk-NWDW7DDC.js";
import "./chunk-4UTD2NOI.js";
import "./chunk-MYMU6UB3.js";
import "./chunk-FDBJFBLO.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-LHK5PUON.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: package_default.version + (true ? "" : "-tiny")
};
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-LHK5PUON-EO7ZGXIR.js.map
