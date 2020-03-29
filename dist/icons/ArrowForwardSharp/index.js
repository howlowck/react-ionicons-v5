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
        React.createElement("polyline", { points: "268 112 412 256 268 400", style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 48
            } }),
        React.createElement("line", { x1: 392, y1: 256, x2: 100, y2: 256, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 48
            } }));
}
exports.default = SvgComponent;
