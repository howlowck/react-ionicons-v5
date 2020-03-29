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
        React.createElement("path", { d: "M458,32H390a22,22,0,0,0,0,44h14.89l-59.57,59.57a149.69,149.69,0,0,0-178.64,0L159.11,128l26.45-26.44a22,22,0,0,0-31.12-31.12L128,96.89,107.11,76H122a22,22,0,0,0,0-44H54A22,22,0,0,0,32,54v68a22,22,0,0,0,44,0V107.11L96.89,128,70.47,154.42a22,22,0,1,0,31.11,31.11L128,159.11l7.57,7.57A149.19,149.19,0,0,0,106,256c0,82.71,67.29,150,150,150a149.2,149.2,0,0,0,89.46-29.67L369,399.9l-26.54,26.54a22,22,0,0,0,31.12,31.12l26.49-26.5,42.37,42.48a22,22,0,0,0,31.16-31.08L431.17,400l26.39-26.39a22,22,0,0,0-31.12-31.12l-26.35,26.35-23.55-23.62a149.68,149.68,0,0,0-.11-178.49L436,107.11V122a22,22,0,0,0,44,0V54A22,22,0,0,0,458,32ZM150,256A106,106,0,1,1,256,362,106.12,106.12,0,0,1,150,256Z" }));
}
exports.default = SvgComponent;
