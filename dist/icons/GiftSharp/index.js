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
        React.createElement("path", { d: "M346,110a34,34,0,0,0-68,0v34h34A34,34,0,0,0,346,110Z", style: {
                fill: "none"
            } }),
        React.createElement("path", { d: "M234,110a34,34,0,1,0-34,34h34Z", style: {
                fill: "none"
            } }),
        React.createElement("path", { d: "M234,144h44V256H442a22,22,0,0,0,22-22V166a22,22,0,0,0-22-22H382.18A77.95,77.95,0,0,0,256,55.79,78,78,0,0,0,129.81,144H70a22,22,0,0,0-22,22v68a22,22,0,0,0,22,22H234Zm44-34a34,34,0,1,1,34,34H278Zm-112,0a34,34,0,1,1,68,0v34H200A34,34,0,0,1,166,110Z" }),
        React.createElement("path", { d: "M278,480H410a22,22,0,0,0,22-22V288H278Z" }),
        React.createElement("path", { d: "M80,458a22,22,0,0,0,22,22H234V288H80Z" }));
}
exports.default = SvgComponent;
