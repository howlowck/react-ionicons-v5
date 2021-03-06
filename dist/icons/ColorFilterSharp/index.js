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
        React.createElement("path", { d: "M256,185a167.85,167.85,0,0,1,134.9-18.28C382.36,99.83,325.12,48,256,48S129.64,99.83,121.1,166.67A167.85,167.85,0,0,1,256,185Z" }),
        React.createElement("path", { d: "M336,331.73a167.51,167.51,0,0,1-52.37,118.08A135,135,0,0,0,344,464c75,0,136-61,136-136a136,136,0,0,0-59.06-112.08A168.53,168.53,0,0,1,336,331.73Z" }),
        React.createElement("path", { d: "M283.58,206.19a167.87,167.87,0,0,1,49.36,89.89A136.14,136.14,0,0,0,391,200.38a135.87,135.87,0,0,0-107.43,5.81Z" }),
        React.createElement("path", { d: "M176.05,331.73a168.53,168.53,0,0,1-85-115.81A136,136,0,0,0,32,328c0,75,61,136,136,136a135,135,0,0,0,60.42-14.19A167.51,167.51,0,0,1,176.05,331.73Z" }),
        React.createElement("path", { d: "M179.06,296.08a167.87,167.87,0,0,1,49.36-89.89A135.87,135.87,0,0,0,121,200.38,136.14,136.14,0,0,0,179.06,296.08Z" }),
        React.createElement("path", { d: "M302.9,345.33a168.22,168.22,0,0,1-93.8,0A135.9,135.9,0,0,0,256,431.6,135.9,135.9,0,0,0,302.9,345.33Z" }),
        React.createElement("path", { d: "M209,311.62a136,136,0,0,0,94,0,135.93,135.93,0,0,0-47-87.22A135.93,135.93,0,0,0,209,311.62Z" }));
}
exports.default = SvgComponent;
