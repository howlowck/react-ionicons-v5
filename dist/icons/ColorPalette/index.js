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
        React.createElement("path", { d: "M441,336.2l-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77,5.34-9.94l30.28-26.87c25.92-22.91,40.2-53.66,40.2-86.59S449.73,119.92,423.78,97c-35.89-31.59-85-49-138.37-49C223.72,48,162,71.37,116,112.11c-43.87,38.77-68,90.71-68,146.24s24.16,107.47,68,146.23c21.75,19.24,47.49,34.18,76.52,44.42a266.17,266.17,0,0,0,86.87,15h1.81c61,0,119.09-20.57,159.39-56.4,9.7-8.56,15.15-20.83,15.34-34.56C456.14,358.87,450.56,345.09,441,336.2ZM112,208a32,32,0,1,1,32,32A32,32,0,0,1,112,208Zm40,135a32,32,0,1,1,32-32A32,32,0,0,1,152,343Zm40-199a32,32,0,1,1,32,32A32,32,0,0,1,192,144Zm64,271a48,48,0,1,1,48-48A48,48,0,0,1,256,415Zm72-239a32,32,0,1,1,32-32A32,32,0,0,1,328,176Z" }));
}
exports.default = SvgComponent;