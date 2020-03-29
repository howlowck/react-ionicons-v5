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
        React.createElement("path", { d: "M64,144H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32Z" }),
        React.createElement("path", { d: "M448,368H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z" }),
        React.createElement("path", { d: "M448,240H221.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32h66.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z" }));
}
exports.default = SvgComponent;
