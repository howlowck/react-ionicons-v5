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
        React.createElement("rect", { x: 48, y: 48, width: 112, height: 112, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 200, y: 48, width: 112, height: 112, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 352, y: 48, width: 112, height: 112, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 48, y: 200, width: 112, height: 112, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 200, y: 200, width: 112, height: 112, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 352, y: 200, width: 112, height: 112, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 48, y: 352, width: 112, height: 112, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 200, y: 352, width: 112, height: 112, rx: 8, ry: 8 }),
        React.createElement("rect", { x: 352, y: 352, width: 112, height: 112, rx: 8, ry: 8 }));
}
exports.default = SvgComponent;
