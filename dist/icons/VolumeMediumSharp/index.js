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
        React.createElement("polygon", { points: "157.65 176.1 64 176.1 64 335.9 157.65 335.9 288 440 288 72 157.65 176.1" }),
        React.createElement("path", { d: "M352,320c9.74-19.41,16-40.81,16-64,0-23.51-6-44.4-16-64", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("path", { d: "M400,368c19.48-34,32-64,32-112s-12-77.7-32-112", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
