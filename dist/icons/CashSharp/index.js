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
        React.createElement("rect", { x: 48, y: 368, width: 416, height: 32 }),
        React.createElement("rect", { x: 80, y: 416, width: 352, height: 32 }),
        React.createElement("path", { d: "M480,176a96.11,96.11,0,0,1-96-96V64H128V80a96.11,96.11,0,0,1-96,96H16v64H32a96.11,96.11,0,0,1,96,96v16H384V336a96.11,96.11,0,0,1,96-96h16V176ZM256,304a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,304Z" }),
        React.createElement("path", { d: "M96,80V64H16v80H32A64.07,64.07,0,0,0,96,80Z" }),
        React.createElement("path", { d: "M32,272H16v80H96V336A64.07,64.07,0,0,0,32,272Z" }),
        React.createElement("path", { d: "M480,144h16V64H416V80A64.07,64.07,0,0,0,480,144Z" }),
        React.createElement("path", { d: "M416,336v16h80V272H480A64.07,64.07,0,0,0,416,336Z" }),
        React.createElement("circle", { cx: 256, cy: 208, r: 64 }));
}
exports.default = SvgComponent;
