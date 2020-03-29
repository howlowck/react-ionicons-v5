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
        React.createElement("path", { d: "M400,0H176a64.11,64.11,0,0,0-62,48H342a74,74,0,0,1,74,74V426.89l22,17.6a16,16,0,0,0,19.34.5A16.41,16.41,0,0,0,464,431.57V64A64,64,0,0,0,400,0Z" }),
        React.createElement("path", { d: "M320,80H112a64,64,0,0,0-64,64V495.62A16.36,16.36,0,0,0,54.6,509a16,16,0,0,0,19.71-.71L216,388.92,357.69,508.24a16,16,0,0,0,19.6.79A16.4,16.4,0,0,0,384,495.59V144A64,64,0,0,0,320,80Z" }));
}
exports.default = SvgComponent;
