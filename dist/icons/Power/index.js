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
        React.createElement("path", { d: "M256,464C141.31,464,48,370.53,48,255.65c0-62.45,27.25-121,74.76-160.55a22,22,0,1,1,28.17,33.8C113.48,160.1,92,206.3,92,255.65,92,346.27,165.57,420,256,420s164-73.73,164-164.35A164,164,0,0,0,360.17,129a22,22,0,1,1,28-33.92A207.88,207.88,0,0,1,464,255.65C464,370.53,370.69,464,256,464Z" }),
        React.createElement("path", { d: "M256,272a22,22,0,0,1-22-22V70a22,22,0,0,1,44,0V250A22,22,0,0,1,256,272Z" }));
}
exports.default = SvgComponent;
