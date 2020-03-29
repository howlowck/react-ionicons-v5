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
        React.createElement("path", { d: "M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" }),
        React.createElement("path", { d: "M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" }),
        React.createElement("path", { d: "M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" }),
        React.createElement("path", { d: "M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" }),
        React.createElement("path", { d: "M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" }),
        React.createElement("path", { d: "M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" }),
        React.createElement("path", { d: "M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" }),
        React.createElement("path", { d: "M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" }),
        React.createElement("path", { d: "M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" }),
        React.createElement("path", { d: "M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" }));
}
exports.default = SvgComponent;
