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
        React.createElement("rect", { x: 158.6, y: 150.86, width: 95.03, height: 110.51, transform: "translate(-85.38 206.12) rotate(-45)" }),
        React.createElement("polygon", { points: "301.41 234.21 234.22 301.41 412 480 480 412 301.41 234.21" }),
        React.createElement("rect", { x: 32, y: 176, width: 80, height: 32 }),
        React.createElement("rect", { x: 91.22, y: 67.22, width: 32, height: 80, transform: "translate(-44.41 107.22) rotate(-45)" }),
        React.createElement("rect", { x: 176, y: 32, width: 32, height: 80 }),
        React.createElement("rect", { x: 236.92, y: 91.22, width: 80, height: 32, transform: "translate(5.29 227.22) rotate(-45)" }),
        React.createElement("rect", { x: 67.22, y: 260.92, width: 80, height: 32, transform: "translate(-164.41 156.92) rotate(-45)" }));
}
exports.default = SvgComponent;
