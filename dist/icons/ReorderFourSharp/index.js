"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
function SvgComponent(props) {
    return React.createElement("svg", Object.assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("line", { x1: 102, y1: 304, x2: 410, y2: 304, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 44
            } }),
        React.createElement("line", { x1: 102, y1: 208, x2: 410, y2: 208, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 44
            } }),
        React.createElement("line", { x1: 102, y1: 112, x2: 410, y2: 112, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 44
            } }),
        React.createElement("line", { x1: 102, y1: 400, x2: 410, y2: 400, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 44
            } }));
}
exports.default = SvgComponent;
