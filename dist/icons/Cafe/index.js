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
        React.createElement("path", { d: "M432,64H96A16,16,0,0,0,80,80V272a96.11,96.11,0,0,0,96,96H288a96.11,96.11,0,0,0,96-96V192h18a62.07,62.07,0,0,0,62-62V96A32,32,0,0,0,432,64Zm0,66a30,30,0,0,1-30,30H384V96h48Z" }),
        React.createElement("path", { d: "M400,400H64a16,16,0,0,0,0,32H400a16,16,0,0,0,0-32Z" }));
}
exports.default = SvgComponent;
