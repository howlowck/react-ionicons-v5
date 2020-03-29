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
        React.createElement("path", { d: "M340,480H106c-29.5,0-54.92-7.83-73.53-22.64C11.23,440.44,0,415.35,0,384.8c0-26.66,10.08-49.8,29.14-66.91,15.24-13.68,36.17-23.21,59-26.84h0c.06,0,.08,0,.09-.05,6.44-39,23.83-72.09,50.31-95.68A140.24,140.24,0,0,1,232,160c30.23,0,58.48,9.39,81.71,27.17a142.69,142.69,0,0,1,45.36,60.66c29.41,4.82,54.72,17.11,73.19,35.54C453,304.11,464,331.71,464,363.2c0,32.85-13.13,62.87-37,84.52C404.11,468.54,373.2,480,340,480Zm19-232.18Z" }),
        React.createElement("path", { d: "M381.5,219.89a169.23,169.23,0,0,1,45.44,19A96,96,0,0,0,281,129.33q-2.85,2-5.54,4.2a162.47,162.47,0,0,1,57.73,28.23A174.53,174.53,0,0,1,381.5,219.89Z" }),
        React.createElement("rect", { x: 448, y: 192, width: 64, height: 32 }),
        React.createElement("rect", { x: 320, y: 32, width: 32, height: 64 }),
        React.createElement("path", { d: "M255.35,129.63l12.45-12.45L223.18,72.55,200.55,95.18l33.17,33.17h.6A172,172,0,0,1,255.35,129.63Z" }),
        React.createElement("rect", { x: 406.27, y: 90.18, width: 63.11, height: 32, transform: "translate(53.16 340.68) rotate(-45)" }));
}
exports.default = SvgComponent;
