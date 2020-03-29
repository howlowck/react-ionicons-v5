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
        React.createElement("path", { d: "M411.16,97.46C368.43,55.86,311.88,32,256,32S143.57,55.86,100.84,97.46C56.45,140.67,32,197,32,256c0,26.67,8.75,61.09,32.88,125.55S137,473,157.27,477.41c5.81,1.27,12.62,2.59,18.73,2.59a60.06,60.06,0,0,0,30-8l14-8c15.07-8.82,19.47-28.13,10.8-43.35L143.88,268.08a31.73,31.73,0,0,0-43.57-11.76l-13.69,8a56.49,56.49,0,0,0-14,11.59,4,4,0,0,1-7-2A114.68,114.68,0,0,1,64,256c0-50.31,21-98.48,59.16-135.61C160,84.55,208.39,64,256,64s96,20.55,132.84,56.39C427,157.52,448,205.69,448,256a114.68,114.68,0,0,1-1.68,17.91,4,4,0,0,1-7,2,56.49,56.49,0,0,0-14-11.59l-13.69-8a31.73,31.73,0,0,0-43.57,11.76L281.2,420.65c-8.67,15.22-4.27,34.53,10.8,43.35l14,8a60.06,60.06,0,0,0,30,8c6.11,0,12.92-1.32,18.73-2.59C375,473,423,446,447.12,381.55S480,282.67,480,256C480,197,455.55,140.67,411.16,97.46Z" }));
}
exports.default = SvgComponent;
