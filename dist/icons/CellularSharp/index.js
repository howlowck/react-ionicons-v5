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
        React.createElement("path", { d: "M496,432H400V80h96Z" }),
        React.createElement("path", { d: "M368,432H272V160h96Z" }),
        React.createElement("path", { d: "M240,432H144V224h96Z" }),
        React.createElement("path", { d: "M112,432H16V288h96Z" }));
}
exports.default = SvgComponent;
