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
        React.createElement("rect", { x: 48, y: 80, width: 416, height: 384, rx: 48, ry: 48, style: {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("path", { d: "M397.82,80H114.18C77.69,80,48,110.15,48,147.2V192h8c0-16,24-32,40-32H416c16,0,40,16,40,32h8V147.2C464,110.15,434.31,80,397.82,80Z" }),
        React.createElement("line", { x1: 128, y1: 48, x2: 128, y2: 80, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("line", { x1: 384, y1: 48, x2: 384, y2: 80, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("rect", { x: 96, y: 208, width: 128, height: 128, rx: 28.57, ry: 28.57 }),
        React.createElement("path", { d: "M464,256V208a48.14,48.14,0,0,0-48-48H96a48.14,48.14,0,0,0-48,48v48", style: {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
