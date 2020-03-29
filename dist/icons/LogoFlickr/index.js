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
        React.createElement("path", { d: "M256,32h0C132.8,32,32,132.8,32,256h0c0,123.2,100.8,224,224,224h0c123.2,0,224-100.8,224-224h0C480,132.8,379.2,32,256,32ZM173.84,312A56,56,0,1,1,228,257.84,56,56,0,0,1,173.84,312Zm168,0A56,56,0,1,1,396,257.84,56,56,0,0,1,341.84,312Z" }));
}
exports.default = SvgComponent;
