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
        React.createElement("circle", { cx: 256, cy: 256, r: 26, style: {
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 10
            } }),
        React.createElement("circle", { cx: 346, cy: 256, r: 26, style: {
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 10
            } }),
        React.createElement("circle", { cx: 166, cy: 256, r: 26, style: {
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 10
            } }),
        React.createElement("polyline", { points: "160 368 32 256 160 144", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 42
            } }),
        React.createElement("polyline", { points: "352 368 480 256 352 144", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 42
            } }));
}
exports.default = SvgComponent;
