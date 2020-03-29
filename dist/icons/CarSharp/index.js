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
        React.createElement("path", { d: "M447.68,220.78a16.44,16.44,0,0,0-1-3.1l-48-112A16,16,0,0,0,384,96H128a16,16,0,0,0-14.71,9.7l-48,112a16.44,16.44,0,0,0-1,3.1A16.15,16.15,0,0,0,64,224V408a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V384H400v24a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V224A16.15,16.15,0,0,0,447.68,220.78ZM144,320a32,32,0,1,1,32-32A32,32,0,0,1,144,320Zm224,0a32,32,0,1,1,32-32A32,32,0,0,1,368,320ZM104.26,208l34.29-80h234.9l34.29,80Z" }));
}
exports.default = SvgComponent;
