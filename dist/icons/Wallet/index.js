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
        React.createElement("path", { d: "M95.5,104h320a87.73,87.73,0,0,1,11.18.71,66,66,0,0,0-77.51-55.56L86,94.08l-.3,0a66,66,0,0,0-41.07,26.13A87.57,87.57,0,0,1,95.5,104Z" }),
        React.createElement("path", { d: "M415.5,128H95.5a64.07,64.07,0,0,0-64,64V384a64.07,64.07,0,0,0,64,64h320a64.07,64.07,0,0,0,64-64V192A64.07,64.07,0,0,0,415.5,128ZM368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z" }),
        React.createElement("path", { d: "M32,259.5V160c0-21.67,12-58,53.65-65.87C121,87.5,156,87.5,156,87.5s23,16,4,16S141.5,128,160,128s0,23.5,0,23.5L85.5,236Z" }));
}
exports.default = SvgComponent;