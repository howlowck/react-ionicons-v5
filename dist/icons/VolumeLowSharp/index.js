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
        React.createElement("path", { d: "M391.12,341.48l-28.6-14.36,7.18-14.3c9.49-18.9,14.3-38,14.3-56.82,0-19.36-4.66-37.92-14.25-56.73L362.48,185,391,170.48l7.26,14.25C410.2,208.16,416,231.47,416,256c0,23.83-6,47.78-17.7,71.18Z" }),
        React.createElement("polygon", { points: "189.65 176.1 96 176.1 96 335.9 189.65 335.9 320 440 320 72 189.65 176.1" }));
}
exports.default = SvgComponent;
