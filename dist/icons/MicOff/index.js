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
        React.createElement("line", { x1: 432, y1: 400, x2: 96, y2: 64, style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }),
        React.createElement("path", { d: "M400,240V208.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,208v32a111.68,111.68,0,0,1-2.68,24.38,2,2,0,0,0,.53,1.84l22.59,22.59a2,2,0,0,0,3.29-.72A143.27,143.27,0,0,0,400,240Z" }),
        React.createElement("path", { d: "M256,352A112.36,112.36,0,0,1,144,240V208.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,208v32c0,74,56.1,135.12,128,143.11V432H192.45c-8.61,0-16,6.62-16.43,15.23A16,16,0,0,0,192,464H319.55c8.61,0,16-6.62,16.43-15.23A16,16,0,0,0,320,432H272V383.11a143.08,143.08,0,0,0,52-16.22,4,4,0,0,0,.91-6.35l-18.4-18.39a3,3,0,0,0-3.41-.58A111,111,0,0,1,256,352Z" }),
        React.createElement("path", { d: "M257.14,48a79.66,79.66,0,0,0-68.47,36.57,4,4,0,0,0,.54,5L332.59,233a2,2,0,0,0,3.41-1.42V128.91C336,85,301,48.6,257.14,48Z" }),
        React.createElement("path", { d: "M179.41,215a2,2,0,0,0-3.41,1.42V239a80.89,80.89,0,0,0,23.45,56.9,78.55,78.55,0,0,0,77.8,21.19,2,2,0,0,0,.86-3.35Z" }));
}
exports.default = SvgComponent;