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
        React.createElement("path", { d: "M320,320c9.74-19.38,16-40.84,16-64,0-23.48-6-44.42-16-64", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("path", { d: "M368,368c19.48-33.92,32-64.06,32-112s-12-77.74-32-112", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("path", { d: "M416,416c30-46,48-91.43,48-160S446,143,416,96", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("polygon", { points: "125.65 176.1 32 176.1 32 335.9 125.65 335.9 256 440 256 72 125.65 176.1" }));
}
exports.default = SvgComponent;
