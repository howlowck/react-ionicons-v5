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
        React.createElement("ellipse", { cx: 256, cy: 256, rx: 36, ry: 35.99 }),
        React.createElement("path", { d: "M188.4,350.8l-14.62-16.44a117.91,117.91,0,0,1,0-156.71l14.62-16.43,32.87,29.24-14.62,16.43a73.93,73.93,0,0,0,0,98.25l14.62,16.44Z" }),
        React.createElement("path", { d: "M323.6,350.8l-32.89-29.22,14.62-16.44a73.93,73.93,0,0,0,0-98.25l-14.62-16.43,32.87-29.24,14.62,16.43a117.91,117.91,0,0,1,0,156.71Z" }),
        React.createElement("path", { d: "M138.24,401.76l-15-16.06a189.85,189.85,0,0,1,0-259.4l15-16.07,32.14,30.05-15,16.06a145.88,145.88,0,0,0,0,199.32l15,16.06Z" }),
        React.createElement("path", { d: "M373.76,401.76l-32.14-30,15-16.06a145.88,145.88,0,0,0,0-199.32l-15-16.06,32.14-30,15,16.07a189.85,189.85,0,0,1,0,259.4Z" }),
        React.createElement("path", { d: "M430.73,447l-32.79-29.33,14.66-16.39a218.2,218.2,0,0,0,0-290.56L397.93,94.34,430.72,65l14.67,16.39a262.18,262.18,0,0,1,0,349.22Z" }),
        React.createElement("path", { d: "M81.27,447,66.6,430.61a262.18,262.18,0,0,1,0-349.22L81.28,65l32.79,29.34L99.39,110.72a218.2,218.2,0,0,0,0,290.56l14.66,16.39Z" }));
}
exports.default = SvgComponent;
