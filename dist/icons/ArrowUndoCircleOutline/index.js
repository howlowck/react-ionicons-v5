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
        React.createElement("path", { d: "M245.09,327.74V290.42c57.07,0,84.51,13.47,108.58,38.68,5.4,5.65,15,1.32,14.29-6.43-5.45-61.45-34.14-117.09-122.87-117.09V168.26a8.32,8.32,0,0,0-14.05-6L146.58,242a8.2,8.2,0,0,0,0,11.94L231,333.71A8.32,8.32,0,0,0,245.09,327.74Z" }),
        React.createElement("path", { d: "M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z", style: {
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 32
            } }));
}
exports.default = SvgComponent;
