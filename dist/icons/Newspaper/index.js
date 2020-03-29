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
        React.createElement("path", { d: "M439.91,112H416.09a.09.09,0,0,0-.09.09V416a32,32,0,0,0,32,32h0a32,32,0,0,0,32-32V152.09A40.09,40.09,0,0,0,439.91,112Z" }),
        React.createElement("path", { d: "M384,416V72a40,40,0,0,0-40-40H72A40,40,0,0,0,32,72V424a56,56,0,0,0,56,56H430.85a1.14,1.14,0,0,0,1.15-1.15h0a1.14,1.14,0,0,0-.85-1.1A64.11,64.11,0,0,1,384,416ZM96,128a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v64a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16ZM304,400H112.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,112,368H303.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,400Zm0-64H112.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,112,304H303.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,336Zm0-64H112.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,112,240H303.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,272Zm0-64H240.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,240,176h63.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,208Zm0-64H240.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,240,112h63.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,144Z" }));
}
exports.default = SvgComponent;
