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
        React.createElement("path", { d: "M256,176a80,80,0,1,0,80,80A80.09,80.09,0,0,0,256,176Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,256,288Z" }),
        React.createElement("path", { d: "M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM256,368A112,112,0,1,1,368,256,112.12,112.12,0,0,1,256,368Z" }));
}
exports.default = SvgComponent;
