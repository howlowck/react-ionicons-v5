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
        React.createElement("path", { d: "M471.05,168.36,263.24,65.69a16.37,16.37,0,0,0-14.48,0L41,168.36a16,16,0,0,0-9,14.31V432a16.09,16.09,0,0,0,16.19,16H463.81A16.09,16.09,0,0,0,480,432V182.67A16,16,0,0,0,471.05,168.36ZM256,97.89l173,85.44L253.3,270.11l-173-85.44Z" }));
}
exports.default = SvgComponent;
