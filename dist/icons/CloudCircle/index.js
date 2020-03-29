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
        React.createElement("path", { d: "M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm70,280H193.05c-31.53,0-57.56-25.58-57-57.11.53-31.74,23.68-49.95,51.35-54.3a7.92,7.92,0,0,0,6.16-5C202.07,189.22,223.63,168,256,168c33.17,0,61.85,22.49,70.14,60.21a17.75,17.75,0,0,0,13.18,13.43C357.79,246.05,376,259.21,376,284,376,314.28,353.5,328,326,328Z" }));
}
exports.default = SvgComponent;
