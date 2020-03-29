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
        React.createElement("path", { d: "M17,384H449V128H17ZM49,160H417V352H49Z" }),
        React.createElement("rect", { x: 70.69, y: 182.94, width: 324.63, height: 146.13 }),
        React.createElement("rect", { x: 465, y: 202.67, width: 32, height: 106.67 }));
}
exports.default = SvgComponent;
