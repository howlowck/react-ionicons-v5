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
        React.createElement("line", { x1: 144, y1: 144, x2: 464, y2: 144, style: {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: 48
            } }),
        React.createElement("line", { x1: 144, y1: 256, x2: 464, y2: 256, style: {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: 48
            } }),
        React.createElement("line", { x1: 144, y1: 368, x2: 464, y2: 368, style: {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: 48
            } }),
        React.createElement("rect", { x: 64, y: 128, width: 32, height: 32, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("rect", { x: 64, y: 240, width: 32, height: 32, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("rect", { x: 64, y: 352, width: 32, height: 32, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
