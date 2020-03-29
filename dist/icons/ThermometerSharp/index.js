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
        React.createElement("path", { d: "M320,291.24V80a64,64,0,1,0-128,0V291.24A113.39,113.39,0,0,0,144,384a112,112,0,0,0,224,0A113.39,113.39,0,0,0,320,291.24ZM256,432a48,48,0,0,1-16-93.26V96h32V338.74A48,48,0,0,1,256,432Z" }));
}
exports.default = SvgComponent;
