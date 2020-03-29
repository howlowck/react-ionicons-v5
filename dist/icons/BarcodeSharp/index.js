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
        React.createElement("polyline", { points: "400 400.33 448 400 448 112 400 112.33", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("polyline", { points: "112 112 64 112.33 64 400.33 112 400", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 384, y1: 192, x2: 384, y2: 320, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 320, y1: 160, x2: 320, y2: 352, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 256, y1: 176, x2: 256, y2: 336, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 192, y1: 160, x2: 192, y2: 352, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 128, y1: 192, x2: 128, y2: 320, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
