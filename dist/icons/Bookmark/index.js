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
        React.createElement("path", { d: "M400,480a16,16,0,0,1-10.63-4L256,357.41,122.63,476A16,16,0,0,1,96,464V96a64.07,64.07,0,0,1,64-64H352a64.07,64.07,0,0,1,64,64V464a16,16,0,0,1-16,16Z" }));
}
exports.default = SvgComponent;
