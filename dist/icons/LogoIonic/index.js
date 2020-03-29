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
        React.createElement("path", { d: "M256,153.9A102.1,102.1,0,1,0,358.1,256,102.23,102.23,0,0,0,256,153.9Z" }),
        React.createElement("circle", { cx: 402.59, cy: 116.45, r: 46.52 }),
        React.createElement("path", { d: "M459.86,163.2l-1.95-4.28-3.11,3.52a70,70,0,0,1-28.06,19.32l-3,1.1,1.22,2.93A181.43,181.43,0,0,1,439,256c0,100.92-82.1,183-183,183S73,356.92,73,256,155.08,73,256,73a180.94,180.94,0,0,1,78.43,17.7L337.3,92l1.25-2.92A70.19,70.19,0,0,1,359.21,62l3.67-2.93L358.71,57A221.61,221.61,0,0,0,256,32C132.49,32,32,132.49,32,256S132.49,480,256,480,480,379.51,480,256A222.19,222.19,0,0,0,459.86,163.2Z" }));
}
exports.default = SvgComponent;
