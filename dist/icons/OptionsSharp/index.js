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
        React.createElement("path", { d: "M381.25,112a48,48,0,0,0-90.5,0H48v32H290.75a48,48,0,0,0,90.5,0H464V112Z" }),
        React.createElement("path", { d: "M176,208a48.09,48.09,0,0,0-45.25,32H48v32h82.75a48,48,0,0,0,90.5,0H464V240H221.25A48.09,48.09,0,0,0,176,208Z" }),
        React.createElement("path", { d: "M336,336a48.09,48.09,0,0,0-45.25,32H48v32H290.75a48,48,0,0,0,90.5,0H464V368H381.25A48.09,48.09,0,0,0,336,336Z" }));
}
exports.default = SvgComponent;
