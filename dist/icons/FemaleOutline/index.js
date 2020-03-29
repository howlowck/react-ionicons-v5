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
        React.createElement("circle", { cx: 256, cy: 184, r: 152, fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32 }),
        React.createElement("line", { x1: 256, y1: 336, x2: 256, y2: 480, fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32 }),
        React.createElement("line", { x1: 314, y1: 416, x2: 198, y2: 416, fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 32 }));
}
exports.default = SvgComponent;
