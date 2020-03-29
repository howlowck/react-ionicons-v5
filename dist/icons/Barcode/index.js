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
        React.createElement("path", { d: "M419.13,96H419l-35.05.33L128,96h-.16l-36.74.33C66.93,96.38,48,116.07,48,141.2V371.47c0,25.15,19,44.86,43.2,44.86h.15l36.71-.33,255.92.33h.17l35.07-.33A44.91,44.91,0,0,0,464,371.13V140.87A44.92,44.92,0,0,0,419.13,96ZM144,320a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Zm64,32a16,16,0,0,1-32,0V160a16,16,0,0,1,32,0Zm64-16a16,16,0,0,1-32,0V176a16,16,0,0,1,32,0Zm64,16a16,16,0,0,1-32,0V160a16,16,0,0,1,32,0Zm64-32a16,16,0,0,1-32,0V192a16,16,0,0,1,32,0Z" }));
}
exports.default = SvgComponent;
