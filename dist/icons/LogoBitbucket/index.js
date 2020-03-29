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
        React.createElement("path", { d: "M483.13,32.23a19.81,19.81,0,0,0-2.54-.23h-449C23,31.88,16.12,38.88,16,47.75a11.52,11.52,0,0,0,.23,2.8L81.53,461.8a22.54,22.54,0,0,0,7,12.95h0a20,20,0,0,0,13.5,5.25H415.18a15.46,15.46,0,0,0,15.34-13.42L469.4,218.67H325.19l-18.46,112H205.21l-25.73-148H475.06L495.82,50.67C497.09,41.92,491.44,33.63,483.13,32.23Z", style: {
                fill: "#010101"
            } }));
}
exports.default = SvgComponent;
