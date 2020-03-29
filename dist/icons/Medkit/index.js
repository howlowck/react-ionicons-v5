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
        React.createElement("path", { d: "M336,64H176a16,16,0,0,0-16,16V96H352V80A16,16,0,0,0,336,64Z", style: {
                fill: "none"
            } }),
        React.createElement("path", { d: "M432,96H384V80a48.05,48.05,0,0,0-48-48H176a48.05,48.05,0,0,0-48,48V96H80a64.07,64.07,0,0,0-64,64V416a64,64,0,0,0,64,64H432a64,64,0,0,0,64-64V160A64.07,64.07,0,0,0,432,96ZM336,304H272v64a16,16,0,0,1-32,0V304H176a16,16,0,0,1,0-32h64V208a16,16,0,0,1,32,0v64h64a16,16,0,0,1,0,32ZM352,96H160V80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16Z" }));
}
exports.default = SvgComponent;
