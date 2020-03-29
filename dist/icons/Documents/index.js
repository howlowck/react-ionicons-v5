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
        React.createElement("path", { d: "M298.39,248a4,4,0,0,0,2.86-6.8l-78.4-79.72a4,4,0,0,0-6.85,2.81V236a12,12,0,0,0,12,12Z" }),
        React.createElement("path", { d: "M197,267A43.67,43.67,0,0,1,184,236V144H112a64.19,64.19,0,0,0-64,64V432a64,64,0,0,0,64,64H256a64,64,0,0,0,64-64V280H228A43.61,43.61,0,0,1,197,267Z" }),
        React.createElement("path", { d: "M372,120h70.39a4,4,0,0,0,2.86-6.8l-78.4-79.72A4,4,0,0,0,360,36.29V108A12,12,0,0,0,372,120Z" }),
        React.createElement("path", { d: "M372,152a44.34,44.34,0,0,1-44-44V16H220a60.07,60.07,0,0,0-60,60v36h42.12A40.81,40.81,0,0,1,231,124.14l109.16,111a41.11,41.11,0,0,1,11.83,29V400h53.05c32.51,0,58.95-26.92,58.95-60V152Z" }));
}
exports.default = SvgComponent;
