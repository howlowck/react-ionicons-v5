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
        React.createElement("line", { x1: 256, y1: 48, x2: 256, y2: 96, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 256, y1: 416, x2: 256, y2: 464, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 403.08, y1: 108.92, x2: 369.14, y2: 142.86, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 142.86, y1: 369.14, x2: 108.92, y2: 403.08, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 464, y1: 256, x2: 416, y2: 256, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 96, y1: 256, x2: 48, y2: 256, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 403.08, y1: 403.08, x2: 369.14, y2: 369.14, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 142.86, y1: 142.86, x2: 108.92, y2: 108.92, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("circle", { cx: 256, cy: 256, r: 80, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
