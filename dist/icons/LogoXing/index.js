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
        React.createElement("path", { d: "M313.8,303.9,469,32H365L209.4,303.8a1.35,1.35,0,0,0,0,1.7l98.9,173.8c.4.7.8.7,1.6.7H413L313.7,305.3A1.74,1.74,0,0,1,313.8,303.9Z" }),
        React.createElement("path", { d: "M221.9,216.2,163,113a2,2,0,0,0-2-1H65l58.9,104.4a1.13,1.13,0,0,1,.1.8L43,352h96.8a1.54,1.54,0,0,0,1.6-.9l80.5-133.7A2.44,2.44,0,0,0,221.9,216.2Z" }));
}
exports.default = SvgComponent;
