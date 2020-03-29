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
        React.createElement("path", { d: "M472.7,189.5c-15.76-10-36.21-16.79-58.59-19.54-6.65-39.1-24.22-72.52-51.27-97.26C334.15,46.45,296.21,32,256,32c-35.35,0-68,11.08-94.37,32a149.7,149.7,0,0,0-45.29,60.42c-30.67,4.32-57,14.61-76.71,30C13.7,174.83,0,203.56,0,237.6,0,305,55.92,352,136,352H240V208h32V352H396c72.64,0,116-34.24,116-91.6C512,230.35,498.41,205.83,472.7,189.5Z" }),
        React.createElement("polygon", { points: "240 419.42 191.98 371 169.37 394 256 480 342.63 394 320.02 371 272 419.42 272 352 240 352 240 419.42" }));
}
exports.default = SvgComponent;
