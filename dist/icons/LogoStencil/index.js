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
        React.createElement("path", { d: "M188.8,334.07H386.13L279.47,448H83.2Z" }),
        React.createElement("path", { d: "M512,199H106.61L0,313H405.39Z" }),
        React.createElement("path", { d: "M232.2,64H428.8L322.62,177.93H125.87Z" }));
}
exports.default = SvgComponent;
