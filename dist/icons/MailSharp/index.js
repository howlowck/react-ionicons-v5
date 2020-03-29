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
        React.createElement("path", { d: "M464,80H48A16,16,0,0,0,32,96V416a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V96A16,16,0,0,0,464,80ZM265.82,284.63a16,16,0,0,1-19.64,0L89.55,162.81l19.64-25.26L256,251.73,402.81,137.55l19.64,25.26Z" }));
}
exports.default = SvgComponent;
