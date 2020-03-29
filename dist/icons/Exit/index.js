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
        React.createElement("path", { d: "M336,376V272H191a16,16,0,0,1,0-32H336V136a56.06,56.06,0,0,0-56-56H88a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H280A56.06,56.06,0,0,0,336,376Z" }),
        React.createElement("path", { d: "M425.37,272l-52.68,52.69a16,16,0,0,0,22.62,22.62l80-80a16,16,0,0,0,0-22.62l-80-80a16,16,0,0,0-22.62,22.62L425.37,240H336v32Z" }));
}
exports.default = SvgComponent;
