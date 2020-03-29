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
        React.createElement("path", { d: "M48,256c0,114.69,93.31,208,208,208s208-93.31,208-208S370.69,48,256,48,48,141.31,48,256Zm69.23-9.3,114.45-69.14A10.78,10.78,0,0,1,248,186.87v53.32l103.68-62.63A10.78,10.78,0,0,1,368,186.87V325.13a10.78,10.78,0,0,1-16.32,9.31L248,271.81v53.32a10.78,10.78,0,0,1-16.32,9.31L117.23,265.3A10.89,10.89,0,0,1,117.23,246.7Z" }));
}
exports.default = SvgComponent;
