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
        React.createElement("path", { d: "M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z" }),
        React.createElement("path", { d: "M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z" }),
        React.createElement("path", { d: "M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z" }),
        React.createElement("path", { d: "M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z" }),
        React.createElement("path", { d: "M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z" }),
        React.createElement("path", { d: "M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z" }),
        React.createElement("path", { d: "M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z" }),
        React.createElement("path", { d: "M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z" }),
        React.createElement("path", { d: "M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z" }));
}
exports.default = SvgComponent;
