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
        React.createElement("path", { d: "M66.1,357a16,16,0,0,1-14.61-9.46A224,224,0,0,1,256,32a16,16,0,0,1,16,16V256a16,16,0,0,1-9.47,14.61L72.63,355.56A15.93,15.93,0,0,1,66.1,357Z" }),
        React.createElement("path", { d: "M313.59,68.18A8,8,0,0,0,304,76V256a48.07,48.07,0,0,1-28.4,43.82L103.13,377a8,8,0,0,0-3.35,11.81,208.42,208.42,0,0,0,48.46,50.41A206.32,206.32,0,0,0,272,480c114.69,0,208-93.31,208-208C480,171.55,408.42,87.5,313.59,68.18Z" }));
}
exports.default = SvgComponent;
