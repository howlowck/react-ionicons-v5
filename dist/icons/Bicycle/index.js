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
        React.createElement("path", { d: "M388,448a92,92,0,1,1,92-92A92.1,92.1,0,0,1,388,448Zm0-152a60,60,0,1,0,60,60A60.07,60.07,0,0,0,388,296Z" }),
        React.createElement("path", { d: "M124,448a92,92,0,1,1,92-92A92.1,92.1,0,0,1,124,448Zm0-152a60,60,0,1,0,60,60A60.07,60.07,0,0,0,124,296Z" }),
        React.createElement("path", { d: "M320,128a31.89,31.89,0,0,0,32-32.1A31.55,31.55,0,0,0,320.2,64a32,32,0,1,0-.2,64Z" }),
        React.createElement("path", { d: "M367.55,192H323.79a4,4,0,0,1-3.51-2.08l-31.74-58.17h0A31,31,0,0,0,239.16,124h0L169.3,194.4a32.56,32.56,0,0,0-9.3,22.4c0,17.4,12.6,23.6,18.5,27.1C207,260.32,227.07,272.33,238.08,279a4,4,0,0,1,1.92,3.41v69.12c0,8.61,6.62,16,15.23,16.43A16,16,0,0,0,272,352V266a16,16,0,0,0-6.66-13l-37-26.61a4,4,0,0,1-.58-6l42-44.79a4,4,0,0,1,6.42.79L298,215.77A16,16,0,0,0,312,224h56a16,16,0,0,0,16-16.77C383.58,198.62,376.16,192,367.55,192Z" }));
}
exports.default = SvgComponent;
