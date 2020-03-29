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
        React.createElement("path", { d: "M416,64H400V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,48V64H144V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,48V64H96a64,64,0,0,0-64,64V416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V128A64,64,0,0,0,416,64ZM136,416a24,24,0,1,1,24-24A24,24,0,0,1,136,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,136,336Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,216,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,216,336Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,296,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,296,336Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,296,256Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,376,336Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,376,256Zm72-120v16a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V128A32.09,32.09,0,0,1,96,96H416a32.09,32.09,0,0,1,32,32Z" }));
}
exports.default = SvgComponent;
