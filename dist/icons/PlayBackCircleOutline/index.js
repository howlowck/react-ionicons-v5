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
        React.createElement("path", { d: "M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z", style: {
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("path", { d: "M117.23,246.7l114.45-69.14A10.78,10.78,0,0,1,248,186.87v53.32l103.68-62.63A10.78,10.78,0,0,1,368,186.87V325.13a10.78,10.78,0,0,1-16.32,9.31L248,271.81v53.32a10.78,10.78,0,0,1-16.32,9.31L117.23,265.3A10.89,10.89,0,0,1,117.23,246.7Z" }));
}
exports.default = SvgComponent;