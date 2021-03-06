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
        React.createElement("polygon", { points: "480 150 256 48 32 150 256 254 480 150" }),
        React.createElement("polygon", { points: "255.71 392.95 110.9 326.75 32 362 256 464 480 362 401.31 326.7 255.71 392.95" }),
        React.createElement("path", { d: "M480,256l-75.53-33.53L256.1,290.6,107.33,222.43,32,256,256,358,480,256S480,256,480,256Z" }));
}
exports.default = SvgComponent;
