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
        React.createElement("path", { d: "M290,32H104A24,24,0,0,0,80,56V456a24,24,0,0,0,24,24H290Z" }),
        React.createElement("path", { d: "M408,32H350V480h58a24,24,0,0,0,24-24V56A24,24,0,0,0,408,32Z" }));
}
exports.default = SvgComponent;
