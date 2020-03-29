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
        React.createElement("rect", { x: 128, y: 64, width: 256, height: 32 }),
        React.createElement("rect", { x: 96, y: 112, width: 320, height: 32 }),
        React.createElement("path", { d: "M464,448H48V160H464Z" }));
}
exports.default = SvgComponent;
