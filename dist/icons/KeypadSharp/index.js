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
        React.createElement("rect", { x: 80, y: 16, width: 96, height: 96, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 208, y: 16, width: 96, height: 96, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 336, y: 16, width: 96, height: 96, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 80, y: 144, width: 96, height: 96, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 208, y: 144, width: 96, height: 96, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 336, y: 144, width: 96, height: 96, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 80, y: 272, width: 96, height: 96, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 208, y: 272, width: 96, height: 96, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 208, y: 400, width: 96, height: 96, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 336, y: 272, width: 96, height: 96, rx: 8, ry: 8 }));
}
exports.default = SvgComponent;
