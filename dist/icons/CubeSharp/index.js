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
        React.createElement("polygon", { points: "48 170 48 366.92 240 480 240 284 48 170" }),
        React.createElement("path", { d: "M272,480,464,366.92V170L272,284ZM448,357.64h0Z" }),
        React.createElement("polygon", { points: "448 144 256 32 64 144 256 256 448 144" }));
}
exports.default = SvgComponent;
