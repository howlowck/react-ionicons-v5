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
        React.createElement("path", { d: "M416,64H96a64.07,64.07,0,0,0-64,64V384a64.07,64.07,0,0,0,64,64H416a64.07,64.07,0,0,0,64-64V128A64.07,64.07,0,0,0,416,64Zm-80,64a48,48,0,1,1-48,48A48.05,48.05,0,0,1,336,128ZM96,416a32,32,0,0,1-32-32V316.37l94.84-84.3a48.06,48.06,0,0,1,65.8,1.9l64.95,64.81L172.37,416Zm352-32a32,32,0,0,1-32,32H217.63L339.05,294.58a47.72,47.72,0,0,1,61.64-.16L448,333.84Z" }));
}
exports.default = SvgComponent;
