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
        React.createElement("path", { d: "M434.8,137.65,285.44,69.55c-16.19-7.4-42.69-7.4-58.88,0L77.3,137.65c-17.6,8-17.6,21.09,0,29.09l148,67.5c16.89,7.7,44.69,7.7,61.58,0l148-67.5C452.4,158.74,452.4,145.64,434.8,137.65Z", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("path", { d: "M160,308.52,77.3,345.63c-17.6,8-17.6,21.1,0,29.1l148,67.5c16.89,7.69,44.69,7.69,61.58,0l148-67.5c17.6-8,17.6-21.1,0-29.1l-79.94-38.47", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("path", { d: "M160,204.48,77.2,241.64c-17.6,8-17.6,21.1,0,29.1l148,67.49c16.89,7.7,44.69,7.7,61.58,0l148-67.49c17.7-8,17.7-21.1.1-29.1L352,204.48", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
