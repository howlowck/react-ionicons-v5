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
        React.createElement("rect", { x: 280.48, y: 122.9, width: 63.03, height: 378.2, rx: 10, ry: 10, transform: "translate(-129.23 312) rotate(-45)", style: {
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("rect", { x: 180.35, y: 164.45, width: 63.29, height: 95.1, transform: "translate(-87.81 212) rotate(-45)" }),
        React.createElement("line", { x1: 48, y1: 192, x2: 96, y2: 192, style: {
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 90.18, y1: 90.18, x2: 124.12, y2: 124.12, style: {
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 192, y1: 48, x2: 192, y2: 96, style: {
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 293.82, y1: 90.18, x2: 259.88, y2: 124.12, style: {
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 124.12, y1: 259.88, x2: 90.18, y2: 293.82, style: {
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
