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
        React.createElement("circle", { cx: 256, cy: 256, r: 24 }),
        React.createElement("path", { d: "M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM361.07,161.33l-46.88,117.2a64,64,0,0,1-35.66,35.66l-117.2,46.88a8,8,0,0,1-10.4-10.4l46.88-117.2a64,64,0,0,1,35.66-35.66l117.2-46.88A8,8,0,0,1,361.07,161.33Z" }));
}
exports.default = SvgComponent;
