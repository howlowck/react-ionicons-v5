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
        React.createElement("path", { d: "M320,192l-29.5-60.1C284.32,118,284.32,118,264,118c-13.26,0-14.76,0-23,7.3l-71.7,69.1C161,202.85,160,203.85,160,221c0,12.67,3.78,14.61,18.51,22.9L240,278v90h32V254s-29-17-48.3-30l48.9-51.5c18.7,28.5,27.3,51.5,38,51.5H384V192Z" }),
        React.createElement("path", { d: "M388,448a92,92,0,1,1,92-92A92.1,92.1,0,0,1,388,448Zm0-152a60,60,0,1,0,60,60A60.07,60.07,0,0,0,388,296Z" }),
        React.createElement("path", { d: "M124,448a92,92,0,1,1,92-92A92.1,92.1,0,0,1,124,448Zm0-152a60,60,0,1,0,60,60A60.07,60.07,0,0,0,124,296Z" }),
        React.createElement("path", { d: "M320,128a31.89,31.89,0,0,0,32-32.1A31.55,31.55,0,0,0,320.2,64a32,32,0,1,0-.2,64Z" }));
}
exports.default = SvgComponent;
