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
        React.createElement("path", { d: "M64,164V408a56,56,0,0,0,56,56H392a56,56,0,0,0,56-56V164a4,4,0,0,0-4-4H68A4,4,0,0,0,64,164ZM331,315.63l-63.69,63.68a16,16,0,0,1-22.62,0L181,315.63c-6.09-6.09-6.65-16-.85-22.38a16,16,0,0,1,23.16-.56L240,329.37V224.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,224V329.37l36.69-36.68a16,16,0,0,1,23.16.56C337.65,299.62,337.09,309.54,331,315.63Z" }),
        React.createElement("rect", { x: 32, y: 48, width: 448, height: 80, rx: 32, ry: 32 }));
}
exports.default = SvgComponent;
