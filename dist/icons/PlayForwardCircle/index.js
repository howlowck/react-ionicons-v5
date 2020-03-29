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
        React.createElement("path", { d: "M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM394.77,265.3,280.32,334.44A10.78,10.78,0,0,1,264,325.13V271.81L160.32,334.44A10.78,10.78,0,0,1,144,325.13V186.87a10.78,10.78,0,0,1,16.32-9.31L264,240.19V186.87a10.78,10.78,0,0,1,16.32-9.31L394.77,246.7A10.89,10.89,0,0,1,394.77,265.3Z" }));
}
exports.default = SvgComponent;
