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
        React.createElement("rect", { x: 336, y: 336, width: 80, height: 80, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 272, y: 272, width: 64, height: 64, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 416, y: 416, width: 64, height: 64, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 432, y: 272, width: 48, height: 48, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 272, y: 432, width: 48, height: 48, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 336, y: 96, width: 80, height: 80, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 288, y: 48, width: 176, height: 176, rx: 16, ry: 16, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("rect", { x: 96, y: 96, width: 80, height: 80, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 48, y: 48, width: 176, height: 176, rx: 16, ry: 16, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("rect", { x: 96, y: 336, width: 80, height: 80, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 48, y: 288, width: 176, height: 176, rx: 16, ry: 16, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
