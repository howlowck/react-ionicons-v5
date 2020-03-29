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
        React.createElement("polygon", { points: "336 320 32 320 184 48 336 320", style: {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }),
        React.createElement("path", { d: "M265.32,194.51A144,144,0,1,1,192,320", style: {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
