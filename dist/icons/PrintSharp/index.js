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
        React.createElement("path", { d: "M400,96V56a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8V96" }),
        React.createElement("rect", { x: 152, y: 264, width: 208, height: 160, rx: 4, ry: 4, style: {
                fill: "none"
            } }),
        React.createElement("rect", { x: 152, y: 264, width: 208, height: 160, rx: 4, ry: 4, style: {
                fill: "none"
            } }),
        React.createElement("path", { d: "M408,112H104a56,56,0,0,0-56,56V376a8,8,0,0,0,8,8h56v72a8,8,0,0,0,8,8H392a8,8,0,0,0,8-8V384h56a8,8,0,0,0,8-8V168A56,56,0,0,0,408,112ZM360,420a4,4,0,0,1-4,4H156a4,4,0,0,1-4-4V268a4,4,0,0,1,4-4H356a4,4,0,0,1,4,4ZM394,207.92a24,24,0,1,1,22-22A24,24,0,0,1,394,207.92Z" }));
}
exports.default = SvgComponent;
