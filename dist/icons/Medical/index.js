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
        React.createElement("path", { d: "M272,464H240a32,32,0,0,1-32-32l.05-85.82a4,4,0,0,0-6-3.47l-74.34,43.06a31.48,31.48,0,0,1-43-11.52L68.21,345.61l-.06-.1a31.65,31.65,0,0,1,11.56-42.8l74.61-43.25a4,4,0,0,0,0-6.92L79.78,209.33a31.41,31.41,0,0,1-11.55-43l16.44-28.55a31.48,31.48,0,0,1,19.27-14.74,31.14,31.14,0,0,1,23.8,3.2l74.31,43a4,4,0,0,0,6-3.47L208,80a32,32,0,0,1,32-32h32a32,32,0,0,1,32,32L304,165.72a4,4,0,0,0,6,3.47l74.34-43.06a31.51,31.51,0,0,1,43,11.52l16.49,28.64.06.09a31.52,31.52,0,0,1-11.64,42.86l-74.53,43.2a4,4,0,0,0,0,6.92l74.53,43.2a31.42,31.42,0,0,1,11.56,43l-16.44,28.55a31.48,31.48,0,0,1-19.27,14.74,31.14,31.14,0,0,1-23.8-3.2l-74.31-43a4,4,0,0,0-6,3.46L304,432A32,32,0,0,1,272,464ZM178.44,266.52h0Zm0-21h0Zm155.1-.08Zm0,0h0Z" }));
}
exports.default = SvgComponent;
