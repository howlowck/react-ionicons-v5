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
        React.createElement("rect", { x: 160, y: 32, width: 192, height: 448 }),
        React.createElement("rect", { x: 384, y: 192, width: 112, height: 288 }),
        React.createElement("rect", { x: 16, y: 128, width: 112, height: 352 }));
}
exports.default = SvgComponent;
