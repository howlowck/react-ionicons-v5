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
        React.createElement("rect", { x: 112, y: 48, width: 288, height: 416, rx: 32, ry: 32, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("rect", { x: 160.01, y: 112, width: 191.99, height: 64, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("circle", { cx: 168, cy: 248, r: 24 }),
        React.createElement("circle", { cx: 256, cy: 248, r: 24 }),
        React.createElement("circle", { cx: 344, cy: 248, r: 24 }),
        React.createElement("circle", { cx: 168, cy: 328, r: 24 }),
        React.createElement("circle", { cx: 256, cy: 328, r: 24 }),
        React.createElement("circle", { cx: 168, cy: 408, r: 24 }),
        React.createElement("circle", { cx: 256, cy: 408, r: 24 }),
        React.createElement("rect", { x: 320, y: 304, width: 48, height: 128, rx: 24, ry: 24 }));
}
exports.default = SvgComponent;
