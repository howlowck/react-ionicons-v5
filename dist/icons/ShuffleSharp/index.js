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
        React.createElement("polyline", { points: "400 304 448 352 400 400", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("polyline", { points: "400 112 448 160 400 208", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("polyline", { points: "64 352 192 352 252 260", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("polyline", { points: "64 160 192 160 320 352 416 352", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("polyline", { points: "416 160 320 160 288 208", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
