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
        React.createElement("path", { d: "M381.55,32.05c-18.13,4.28-126.57,31.07-156,38.19A2,2,0,0,0,224,72.18V353.3a2,2,0,0,1-1.32,1.88L182,369.88c-29.82,10.66-54,18.94-54,59.06,0,32.47,23.53,47.18,37.95,50a81.77,81.77,0,0,0,15,1.08c8.89,0,31-3.59,47.52-14.24C256,448,256,448,256,415.93V169.16a2,2,0,0,1,1.49-1.94l125-33a2,2,0,0,0,1.49-1.94V34A2,2,0,0,0,381.55,32.05Z" }));
}
exports.default = SvgComponent;
