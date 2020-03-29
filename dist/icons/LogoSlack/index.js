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
        React.createElement("path", { d: "M126.12,315.1A47.06,47.06,0,1,1,79.06,268h47.06Z" }),
        React.createElement("path", { d: "M149.84,315.1a47.06,47.06,0,0,1,94.12,0V432.94a47.06,47.06,0,1,1-94.12,0Z" }),
        React.createElement("path", { d: "M196.9,126.12A47.06,47.06,0,1,1,244,79.06v47.06Z" }),
        React.createElement("path", { d: "M196.9,149.84a47.06,47.06,0,0,1,0,94.12H79.06a47.06,47.06,0,0,1,0-94.12Z" }),
        React.createElement("path", { d: "M385.88,196.9A47.06,47.06,0,1,1,432.94,244H385.88Z" }),
        React.createElement("path", { d: "M362.16,196.9a47.06,47.06,0,0,1-94.12,0V79.06a47.06,47.06,0,1,1,94.12,0Z" }),
        React.createElement("path", { d: "M315.1,385.88A47.06,47.06,0,1,1,268,432.94V385.88Z" }),
        React.createElement("path", { d: "M315.1,362.16a47.06,47.06,0,0,1,0-94.12H432.94a47.06,47.06,0,1,1,0,94.12Z" }));
}
exports.default = SvgComponent;
