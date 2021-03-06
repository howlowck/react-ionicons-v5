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
        React.createElement("path", { d: "M315.09,481.38,258.14,366.26l-45-57.56a73.11,73.11,0,0,1-10.16-37.17V142h15.73A40.36,40.36,0,0,1,259,182.32V344.84", style: {
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("polyline", { points: "128.18 291.5 128.18 216.73 193.13 151.63", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("polygon", { points: "376.35 295.73 292.4 239.35 292.4 194.67 397.08 267.62 376.35 295.73" }),
        React.createElement("polygon", { points: "175.13 498.58 153.7 471.67 234.03 390.13 249.56 422.2 175.13 498.58" }),
        React.createElement("circle", { cx: 259.02, cy: 67.21, r: 37.38, style: {
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 16
            } }));
}
exports.default = SvgComponent;
