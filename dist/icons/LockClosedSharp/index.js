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
        React.createElement("path", { d: "M420,192H352V112a96,96,0,1,0-192,0v80H92a12,12,0,0,0-12,12V484a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V204A12,12,0,0,0,420,192Zm-106,0H198V111.25a58,58,0,1,1,116,0Z" }));
}
exports.default = SvgComponent;
