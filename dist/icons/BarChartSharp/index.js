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
        React.createElement("polygon", { points: "496 496 16 496 16 16 48 16 48 464 496 464 496 496" }),
        React.createElement("path", { d: "M192,432H80V208H192Z" }),
        React.createElement("path", { d: "M336,432H224V160H336Z" }),
        React.createElement("path", { d: "M479.64,432h-112V96h112Z" }));
}
exports.default = SvgComponent;
