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
        React.createElement("path", { d: "M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM168,350a24,24,0,1,1,24-24A24,24,0,0,1,168,350Zm0-71a24,24,0,1,1,24-24A24,24,0,0,1,168,279Zm0-73a24,24,0,1,1,24-24A24,24,0,0,1,168,206ZM352,341H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Zm0-71H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Zm0-72H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Z" }));
}
exports.default = SvgComponent;
