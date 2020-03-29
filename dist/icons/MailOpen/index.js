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
        React.createElement("path", { d: "M448.67,154.45,274.1,68.2a41.1,41.1,0,0,0-36.2,0L63.33,154.45A55.6,55.6,0,0,0,32,204.53V389.14c0,30.88,25.42,56,56.67,56H423.33c31.25,0,56.67-25.12,56.67-56V204.53A55.6,55.6,0,0,0,448.67,154.45ZM252.38,96.82a8.22,8.22,0,0,1,7.24,0L429,180.48l-172,85a8.22,8.22,0,0,1-7.24,0L80.35,181.81Z" }));
}
exports.default = SvgComponent;
