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
        React.createElement("rect", { x: 240.44, y: 0.03, width: 31.11, height: 511.95, transform: "translate(-106.04 256) rotate(-45)" }),
        React.createElement("polygon", { points: "80 304 224 304 192 496 300.18 366.18 151.82 217.82 80 304" }),
        React.createElement("polygon", { points: "432 208 288 208 320 16 211.82 145.82 360.18 294.18 432 208" }));
}
exports.default = SvgComponent;
