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
        React.createElement("path", { d: "M128,496H48V304h80Z" }),
        React.createElement("path", { d: "M352,496H272V208h80Z" }),
        React.createElement("path", { d: "M464,496H384V96h80Z" }),
        React.createElement("path", { d: "M240,496H160V16h80Z" }));
}
exports.default = SvgComponent;
