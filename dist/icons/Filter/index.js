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
        React.createElement("path", { d: "M472,168H40a24,24,0,0,1,0-48H472a24,24,0,0,1,0,48Z" }),
        React.createElement("path", { d: "M392,280H120a24,24,0,0,1,0-48H392a24,24,0,0,1,0,48Z" }),
        React.createElement("path", { d: "M296,392H216a24,24,0,0,1,0-48h80a24,24,0,0,1,0,48Z" }));
}
exports.default = SvgComponent;
