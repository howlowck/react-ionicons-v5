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
        React.createElement("path", { d: "M448,400H64a16,16,0,0,1,0-32H448a16,16,0,0,1,0,32Z" }),
        React.createElement("path", { d: "M416,448H96a16,16,0,0,1,0-32H416a16,16,0,0,1,0,32Z" }),
        React.createElement("path", { d: "M32,272H16v48a32,32,0,0,0,32,32H96V336A64.07,64.07,0,0,0,32,272Z" }),
        React.createElement("path", { d: "M480,240h16V176H480a96.11,96.11,0,0,1-96-96V64H128V80a96.11,96.11,0,0,1-96,96H16v64c5,0,10.34,0,16,0a96.11,96.11,0,0,1,96,96v16H384V336A96.11,96.11,0,0,1,480,240ZM256,304a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,304Z" }),
        React.createElement("circle", { cx: 256, cy: 208, r: 64 }),
        React.createElement("path", { d: "M416,336v16h48a32,32,0,0,0,32-32V272H480A64.07,64.07,0,0,0,416,336Z" }),
        React.createElement("path", { d: "M480,144h16V96a32,32,0,0,0-32-32H416V80A64.07,64.07,0,0,0,480,144Z" }),
        React.createElement("path", { d: "M96,80V64H48A32,32,0,0,0,16,96v48H32A64.07,64.07,0,0,0,96,80Z" }));
}
exports.default = SvgComponent;
