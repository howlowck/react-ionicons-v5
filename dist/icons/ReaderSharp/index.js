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
        React.createElement("path", { d: "M80,44V468a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V44a12,12,0,0,0-12-12H92A12,12,0,0,0,80,44ZM272,304H160V272H272Zm80-80H160V192H352Zm0-80H160V112H352Z" }));
}
exports.default = SvgComponent;
