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
        React.createElement("rect", { x: 16, y: 120, width: 480, height: 48 }),
        React.createElement("rect", { x: 96, y: 232, width: 320, height: 48 }),
        React.createElement("rect", { x: 192, y: 344, width: 128, height: 48 }));
}
exports.default = SvgComponent;
