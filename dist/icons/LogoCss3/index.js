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
        React.createElement("path", { d: "M64,32,99,435.22,255.77,480,413,435.15,448,32ZM354.68,366.9,256.07,395l-98.46-28.24L150.86,289h48.26l3.43,39.56,53.59,15.16.13.28h0l53.47-14.85L315.38,265H203l-4-50H319.65L324,164H140l-4-49H376.58Z" }));
}
exports.default = SvgComponent;
