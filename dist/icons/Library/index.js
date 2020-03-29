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
        React.createElement("path", { d: "M64,480H48a32,32,0,0,1-32-32V112A32,32,0,0,1,48,80H64a32,32,0,0,1,32,32V448A32,32,0,0,1,64,480Z" }),
        React.createElement("path", { d: "M240,176a32,32,0,0,0-32-32H144a32,32,0,0,0-32,32v28a4,4,0,0,0,4,4H236a4,4,0,0,0,4-4Z" }),
        React.createElement("path", { d: "M112,448a32,32,0,0,0,32,32h64a32,32,0,0,0,32-32V418a2,2,0,0,0-2-2H114a2,2,0,0,0-2,2Z" }),
        React.createElement("rect", { x: 112, y: 240, width: 128, height: 144, rx: 2, ry: 2 }),
        React.createElement("path", { d: "M320,480H288a32,32,0,0,1-32-32V64a32,32,0,0,1,32-32h32a32,32,0,0,1,32,32V448A32,32,0,0,1,320,480Z" }),
        React.createElement("path", { d: "M495.89,445.45l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85,3c-17.59,1.67-30.65,15.71-29.17,31.36l32.23,340c1.48,15.65,16.94,27,34.53,25.31l31.85-3C484.31,475.14,497.37,461.1,495.89,445.45Z" }));
}
exports.default = SvgComponent;
