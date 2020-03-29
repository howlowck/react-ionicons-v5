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
        React.createElement("path", { d: "M0,176V336a64,64,0,0,0,64,64H448a64,64,0,0,0,64-64V176a64,64,0,0,0-64-64H64A64,64,0,0,0,0,176Zm448-32a32,32,0,0,1,32,32V336a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V324.65a7.94,7.94,0,0,1,4.75-7.3A32,32,0,0,0,56,288V224a32,32,0,0,0-19.25-29.35,7.94,7.94,0,0,1-4.75-7.3V176a32,32,0,0,1,32-32Z" }),
        React.createElement("path", { d: "M48,176h0a11.88,11.88,0,0,0,4.69,9.53A48,48,0,0,1,72,224v64a48,48,0,0,1-19.31,38.47A11.88,11.88,0,0,0,48,336h0a16,16,0,0,0,16,16H448a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H64A16,16,0,0,0,48,176Z" }),
        React.createElement("path", { d: "M0,176V336a64,64,0,0,0,64,64H448a64,64,0,0,0,64-64V176a64,64,0,0,0-64-64H64A64,64,0,0,0,0,176Zm448-32a32,32,0,0,1,32,32V336a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V324.65a7.94,7.94,0,0,1,4.75-7.3A32,32,0,0,0,56,288V224a32,32,0,0,0-19.25-29.35,7.94,7.94,0,0,1-4.75-7.3V176a32,32,0,0,1,32-32Z" }));
}
exports.default = SvgComponent;
