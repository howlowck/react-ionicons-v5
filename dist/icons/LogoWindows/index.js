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
        React.createElement("path", { d: "M480,265H232V444l248,36V265Z" }),
        React.createElement("path", { d: "M216,265H32V415l184,26.7V265Z" }),
        React.createElement("path", { d: "M480,32,232,67.4V249H480V32Z" }),
        React.createElement("path", { d: "M216,69.7,32,96V249H216V69.7Z" }));
}
exports.default = SvgComponent;
