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
        React.createElement("polygon", { points: "179.9 388 179.9 388 103.74 256 179.9 388", style: {
                fill: "none"
            } }),
        React.createElement("polygon", { points: "179.9 388 332.11 388 408.26 256 332.11 124 179.9 124 103.74 256 179.9 388", style: {
                fill: "none"
            } }),
        React.createElement("polygon", { points: "103.74 256 179.9 124 179.9 124 103.74 256", style: {
                fill: "none"
            } }),
        React.createElement("polygon", { points: "496 256 376 48 239.74 48 195.9 124 332.11 124 408.26 256 332.11 388 195.9 388 239.74 464 376 464 496 256" }),
        React.createElement("polygon", { points: "179.9 388 103.74 256 179.9 124 179.9 124 223.74 48 136 48 16 256 136 464 223.74 464 179.9 388 179.9 388" }));
}
exports.default = SvgComponent;
