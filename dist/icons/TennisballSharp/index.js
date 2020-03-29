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
        React.createElement("path", { d: "M246.4,480a181,181,0,0,0,3.22-22.86c.35-4.61.53-9.31.53-14,0-100-81.34-181.32-181.32-181.32A181.72,181.72,0,0,0,32,265.61,224.2,224.2,0,0,0,246.4,480Z" }),
        React.createElement("path", { d: "M284.63,227.37A222.73,222.73,0,0,1,219,68.83a227.09,227.09,0,0,1,2.62-34.42A224.41,224.41,0,0,0,34.41,221.58,227.09,227.09,0,0,1,68.83,219a222.73,222.73,0,0,1,158.54,65.67A222.73,222.73,0,0,1,293,443.17c0,5.74-.22,11.54-.65,17.23s-1.11,11.51-2,17.2A224.42,224.42,0,0,0,477.59,290.42,227.09,227.09,0,0,1,443.17,293,222.73,222.73,0,0,1,284.63,227.37Z" }),
        React.createElement("path", { d: "M443.17,250.15A181.72,181.72,0,0,0,480,246.39,224.2,224.2,0,0,0,265.61,32a181.72,181.72,0,0,0-3.76,36.83C261.85,168.81,343.19,250.15,443.17,250.15Z" }));
}
exports.default = SvgComponent;
