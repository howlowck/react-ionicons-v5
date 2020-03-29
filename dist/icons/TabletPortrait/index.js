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
        React.createElement("path", { d: "M384,512H128a64.07,64.07,0,0,1-64-64V64A64.07,64.07,0,0,1,128,0H384a64.07,64.07,0,0,1,64,64V448A64.07,64.07,0,0,1,384,512ZM128,32A32,32,0,0,0,96,64V448a32,32,0,0,0,32,32H384a32,32,0,0,0,32-32V64a32,32,0,0,0-32-32Z" }),
        React.createElement("path", { d: "M384,0a64.07,64.07,0,0,1,64,64V448a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V64A64.07,64.07,0,0,1,128,0H384M128,480H384a32,32,0,0,0,32-32V64a32,32,0,0,0-32-32H128A32,32,0,0,0,96,64V448a32,32,0,0,0,32,32m0-16a16,16,0,0,1-16-16V64a16,16,0,0,1,16-16H384a16,16,0,0,1,16,16V448a16,16,0,0,1-16,16Z" }));
}
exports.default = SvgComponent;
