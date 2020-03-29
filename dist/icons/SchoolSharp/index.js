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
        React.createElement("polygon", { points: "256 370.43 96 279 96 377.42 256 466.3 416 377.42 416 279 256 370.43" }),
        React.createElement("polygon", { points: "512.25 192 256 45.57 -0.25 192 256 338.43 464 219.57 464 384 512 384 512 192.14 512.25 192" }));
}
exports.default = SvgComponent;
