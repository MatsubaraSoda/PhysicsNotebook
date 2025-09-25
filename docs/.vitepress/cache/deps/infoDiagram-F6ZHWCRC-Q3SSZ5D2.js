import {
  parse
} from "./chunk-WGEUCD7H.js";
import "./chunk-JLS7MDY2.js";
import "./chunk-BDGU4ELU.js";
import "./chunk-T4R3PKXY.js";
import "./chunk-AL2AHEPG.js";
import "./chunk-SJQUWSGB.js";
import "./chunk-YTI2QYBF.js";
import "./chunk-73KONDQJ.js";
import "./chunk-SSMHMKQL.js";
import "./chunk-W4C6O4J6.js";
import {
  package_default
} from "./chunk-U27DZJXU.js";
import {
  selectSvgElement
} from "./chunk-4IRVXU4L.js";
import "./chunk-2VRVB2MD.js";
import {
  configureSvgSize
} from "./chunk-MRXXWOAR.js";
import "./chunk-4UTD2NOI.js";
import {
  __name,
  log
} from "./chunk-UV3PLAC5.js";
import "./chunk-QJNXBAXX.js";
import "./chunk-DLJ4GP37.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-F6ZHWCRC.mjs
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
//# sourceMappingURL=infoDiagram-F6ZHWCRC-Q3SSZ5D2.js.map
