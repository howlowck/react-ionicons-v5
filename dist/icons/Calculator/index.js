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
        React.createElement("path", { d: "M416,80a48.05,48.05,0,0,0-48-48H144A48.05,48.05,0,0,0,96,80V432a48.05,48.05,0,0,0,48,48H368a48.05,48.05,0,0,0,48-48ZM168,432a24,24,0,1,1,24-24A24,24,0,0,1,168,432Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,168,352Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,168,272Zm88,160a24,24,0,1,1,24-24A24,24,0,0,1,256,432Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,256,352Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,256,272ZM368,408a24,24,0,0,1-48,0V328a24,24,0,0,1,48,0ZM344,272a24,24,0,1,1,24-24A24,24,0,0,1,344,272Zm19.31-100.69A16,16,0,0,1,352,176H160a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16H352a16,16,0,0,1,16,16v64A16,16,0,0,1,363.31,171.31Z" }));
}
exports.default = SvgComponent;
