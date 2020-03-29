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
        React.createElement("rect", { x: 112, y: 208, width: 128, height: 128, rx: 9.14, ry: 9.14 }),
        React.createElement("path", { d: "M448,64H400V32H360V64H152V32H112V64H64A32,32,0,0,0,32,96V448a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32V96A32,32,0,0,0,448,64ZM436,436H76V176H436Z" }));
}
exports.default = SvgComponent;
