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
        React.createElement("circle", { cx: 256, cy: 256, r: 48 }),
        React.createElement("circle", { cx: 256, cy: 416, r: 48 }),
        React.createElement("circle", { cx: 256, cy: 96, r: 48 }));
}
exports.default = SvgComponent;
