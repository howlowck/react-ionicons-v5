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
        React.createElement("path", { d: "M272,352V204.63l64,64L358.63,246,256,143.37,153.37,246,176,268.63l64-64V352H92a12,12,0,0,1-12-12V44A12,12,0,0,1,92,32H420a12,12,0,0,1,12,12V340a12,12,0,0,1-12,12Z" }),
        React.createElement("rect", { x: 240, y: 352, width: 32, height: 128 }));
}
exports.default = SvgComponent;
