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
        React.createElement("path", { d: "M408,112H106a58,58,0,0,0-58,58V328a56,56,0,0,0,56,56h8v39.68A40.32,40.32,0,0,0,152.32,464H359.68A40.32,40.32,0,0,0,400,423.68V384h8a56,56,0,0,0,56-56V168A56,56,0,0,0,408,112ZM368,423.68a8.35,8.35,0,0,1-8.32,8.32H152.32a8.35,8.35,0,0,1-8.32-8.32V264.32a8.35,8.35,0,0,1,8.32-8.32H359.68a8.35,8.35,0,0,1,8.32,8.32ZM394,207.92a24,24,0,1,1,22-22A24,24,0,0,1,394,207.92Z" }),
        React.createElement("path", { d: "M344,48H168a56.09,56.09,0,0,0-55.42,48H399.42A56.09,56.09,0,0,0,344,48Z" }));
}
exports.default = SvgComponent;