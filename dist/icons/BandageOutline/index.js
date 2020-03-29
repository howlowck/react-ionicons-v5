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
        React.createElement("rect", { x: -24.43, y: 167.88, width: 560.87, height: 176.25, rx: 88.12, ry: 88.12, transform: "translate(-106.04 256) rotate(-45)", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("rect", { x: 169.41, y: 156.59, width: 176, height: 196, rx: 32, ry: 32, transform: "translate(255.41 -107.45) rotate(45)", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("circle", { cx: 256, cy: 208, r: 16 }),
        React.createElement("circle", { cx: 304, cy: 256, r: 16 }),
        React.createElement("circle", { cx: 208, cy: 256, r: 16 }),
        React.createElement("circle", { cx: 256, cy: 304, r: 16 }));
}
exports.default = SvgComponent;
