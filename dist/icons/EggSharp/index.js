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
        React.createElement("path", { d: "M418.39,381.05c-8.08,21.68-19.76,40.1-34.72,54.75-14.38,14.07-32.1,24.95-52.67,32.34C309.08,476,283.85,480,256,480s-53.08-4-75-11.86c-20.57-7.39-38.29-18.27-52.67-32.34-15-14.65-26.64-33.07-34.72-54.75C84.58,356.82,80,328.53,80,296.94c0-30.28,6.68-62.57,19.86-96A371,371,0,0,1,151,111.42C195.78,53.56,241,32,256,32s62.67,22.4,105,79.42c18.33,24.71,38.87,58.34,51.17,89.54,13.18,33.41,19.86,65.7,19.86,96C432,328.53,427.42,356.82,418.39,381.05Z" }));
}
exports.default = SvgComponent;
