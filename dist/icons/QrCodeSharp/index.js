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
        React.createElement("rect", { x: 336, y: 336, width: 80, height: 80 }),
        React.createElement("rect", { x: 272, y: 272, width: 64, height: 64 }),
        React.createElement("rect", { x: 416, y: 416, width: 64, height: 64 }),
        React.createElement("rect", { x: 432, y: 272, width: 48, height: 48 }),
        React.createElement("rect", { x: 272, y: 432, width: 48, height: 48 }),
        React.createElement("rect", { x: 336, y: 96, width: 80, height: 80 }),
        React.createElement("path", { d: "M480,240H272V32H480ZM316,196H436V76H316Z" }),
        React.createElement("rect", { x: 96, y: 96, width: 80, height: 80 }),
        React.createElement("path", { d: "M240,240H32V32H240ZM76,196H196V76H76Z" }),
        React.createElement("rect", { x: 96, y: 336, width: 80, height: 80 }),
        React.createElement("path", { d: "M240,480H32V272H240ZM76,436H196V316H76Z" }));
}
exports.default = SvgComponent;
