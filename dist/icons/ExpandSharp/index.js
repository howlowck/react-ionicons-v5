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
        React.createElement("polyline", { points: "432 320 432 432 320 432", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 421.8, y1: 421.77, x2: 304, y2: 304, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("polyline", { points: "80 192 80 80 192 80", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 90.2, y1: 90.23, x2: 208, y2: 208, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("polyline", { points: "320 80 432 80 432 192", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 421.77, y1: 90.2, x2: 304, y2: 208, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("polyline", { points: "192 432 80 432 80 320", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 90.23, y1: 421.8, x2: 208, y2: 304, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
