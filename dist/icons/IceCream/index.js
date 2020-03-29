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
        React.createElement("path", { d: "M183,352c-21.84-.52-39-18.9-39-40.74V277.19a8,8,0,0,0-6-7.74C104.25,260.6,80,229.74,80,192a80.14,80.14,0,0,1,66.27-78.82,8,8,0,0,0,6.62-6.83,104,104,0,0,1,206.22,0,8,8,0,0,0,6.62,6.83A80,80,0,0,1,352,272a74.33,74.33,0,0,1-47.45-17.41,7.93,7.93,0,0,0-9.92-.14A62.89,62.89,0,0,1,256,268a80.47,80.47,0,0,1-21.8-3.18,8,8,0,0,0-10.2,7.69V312A40,40,0,0,1,183,352Z" }),
        React.createElement("path", { d: "M263.39,299.7a8,8,0,0,0-7.39,7.91V312a72.11,72.11,0,0,1-50.69,68.76,8,8,0,0,0-4.91,10.78l40.91,94.8A16,16,0,0,0,256,496h0a16,16,0,0,0,14.69-9.7l73.78-172.15a8,8,0,0,0-6.2-11.07,106.31,106.31,0,0,1-35.9-11.59,8,8,0,0,0-7.13-.2A95,95,0,0,1,263.39,299.7Z" }));
}
exports.default = SvgComponent;
