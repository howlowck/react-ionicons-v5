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
        React.createElement("rect", { x: 234, y: 26, width: 44, height: 92 }),
        React.createElement("rect", { x: 234, y: 394, width: 44, height: 92 }),
        React.createElement("rect", { x: 340.11, y: 103.89, width: 92, height: 44, transform: "translate(24.07 309.89) rotate(-45)" }),
        React.createElement("rect", { x: 79.89, y: 364.11, width: 92, height: 44, transform: "translate(-236.14 202.1) rotate(-45)" }),
        React.createElement("rect", { x: 394, y: 234, width: 92, height: 44 }),
        React.createElement("rect", { x: 26, y: 234, width: 92, height: 44 }),
        React.createElement("rect", { x: 364.11, y: 340.11, width: 44, height: 92, transform: "translate(-159.93 386.11) rotate(-45)" }),
        React.createElement("rect", { x: 103.89, y: 79.89, width: 44, height: 92, transform: "translate(-52.15 125.89) rotate(-45)" }),
        React.createElement("path", { d: "M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z" }));
}
exports.default = SvgComponent;
