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
        React.createElement("polyline", { points: "400 160 464 224 400 288", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("polyline", { points: "448 224 48 224 48 352", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
